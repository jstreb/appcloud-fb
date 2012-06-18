( function( $ ) {
  
  
  $( bc ).bind( "init", initialize );
  
  function initialize() {
    registerEventListeners();
    
    setTimeout( function() {
      bc.device.alert( "opening" )
      bc.device.openURI( "https://www.facebook.com/login.php?api_key=429947087044863", function() { alert( "sccess") }, function() { alert( "error" ) }, { modalWebBrowser: true } );
    }, 2000 );
    
  }
  
  /**
   * Any event listeners we need for this view we setup here.  Note that the elements we are binding to are not yet 
   * created which is why we use the delegate syntax.
   */
  function registerEventListeners() {

  }

})( jQuery );