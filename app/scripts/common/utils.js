var StringUtils = {
  reverseString : function(str){
    var  stri = "";
    var  alen = str.length;
    for (var i = alen ; i > 0 ; i--){
          stri += str.charAt(i-1)
     }
    return stri;
  },

  isPalindrome : function(str) {
    str = str.toLowerCase();
    return (str === this.reverseString(str));
  }
}