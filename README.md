Ember.js component testing
===========================

Components in Ember.js are reusable UI fragments which can contain their own set of behaviour. The current testing methods require a component to be added to a page before this behaviour can be tested.

I've created a ComponentTestingUtils utility which allows you to run Jasmine tests against a single component. The utility class inserts the component into a dummy Ember.js application, letting you test the behaviour of the component independently from any other application logic.

Pre-requisites
--------------

Ensure Node.js is already installed. The sample project here uses Karma as a test runner. If you don't have Karma installed, install it using the following command.

```
$ npm install -g karma
```

The sample application is configured to run tests on PhantomJS. You can install PhantomJS from this URL (http://phantomjs.org/download.html), or change the 'browsers' property in the Karma configuration to use another browser.

The application also uses Grunt to build the application and run tests. Install Grunt using npm with the following command.

```
$ npm install -g grunt-cli
```

After checking out the application, run the following command in the application folder to install required Node.js dependencies:

```
$ npm install
```

Usage
-----

The sample application contains a Karma configuration (karma.conf.js) which indicates the path to the application scripts, ComponentTestingUtils and Jasmine test specs. Change the 'browsers' property in this file to change the browser in which tests will be run.

Run the following command in the application folder to build the application to the 'dist' folder and run tests.

```
$ grunt
```

