//$(document).ready(function () {

window.TestApp = Ember.Application.create({});


TestApp.AlertController = Ember.ObjectController.extend({
    msg: null,
    topStyle: "top:40px;",
    heightStyle: 'height:',

    setLayerHeight: function () {
        var layerHeight = $(document).height();
        this.set('heightStyle', "height:" + layerHeight + "px;");
    },
    showAlert: function (msg) {

        this.set('msg', msg);

        this.setLayerHeight();
//        var fromTop = 40 + window.scrollY;
        var fromTop = 70;
        console.log("top" + fromTop);
        this.set('topStyle', "top:" + fromTop + "px;");


    },

    hideAlert: function () {
        this.set('msg', null);
    }

});



Ember.ObjectController.reopen({
    needs: ["alert"]
});

Ember.ArrayController.reopen({
    needs: ["alert"]
});

TestApp.AppRoute = Ember.Route.extend({
    activate: function () {
        //render common app components

        this.render('alert', { outlet: 'alert',
            into: 'application'});
    }
});


TestApp.IndexRoute = TestApp.AppRoute.extend({

    setupController: function (controller) {
    },

    renderTemplate: function () {
        this.render('page1', {
            outlet: 'page1'
        });

    }
});

TestApp.IndexController = Ember.ObjectController.extend({
    needs: [],
    wordIsPalindrome: false,
    word: '',

    wordChanged: function() {
        this.set('wordIsPalindrome', StringUtils.isPalindrome(this.get('word')));
    }.observes('word')
});

TestApp.DateFieldComponent = Ember.Component.extend({
    dateValue: '',
    day: '',
    DAYS_OF_WEEK: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

    dateChanged: function() {
        console.log('Calculating day...');
        var dateParts = this.get('dateValue').split('-');
        var date = new Date(dateParts[2], dateParts[1]-1, dateParts[0]);
        this.set('day', this.get('DAYS_OF_WEEK')[date.getDay()]);
    }.observes('dateValue')
});


//    window.setRouter();
//});
