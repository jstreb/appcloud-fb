( function( $ ) {
  
  $( window ).bind( "message", handlePostMessage );
  
  $( bc ).bind( "init", initialize );
  
  function initialize() {
    registerEventListeners();
    //isLoggedIn();
    
    // setTimeout( function() {
    //   bc.device.openURI( "http://www.facebook.com/dialog/oauth/?client_id=429947087044863&redirect_uri=http%3A%2F%2Fsmooth-stone-1901.herokuapp.com%2F", undefined, undefined, { modalWebBrowser: true } );
    // }, 2000 );
    
  }
  
  function handlePostMessage( message ) {
    message = JSON.stringify( message.originalEvent.data );
    if( message.status !== "connected" ) {
      //Show a login button.
      bc.device.openURI( "http://www.facebook.com/dialog/oauth/?client_id=429947087044863&redirect_uri=http%3A%2F%2Fsmooth-stone-1901.herokuapp.com%2F", undefined, undefined, { modalWebBrowser: true } );
    }
  }

  /**
   * Any event listeners we need for this view we setup here.  Note that the elements we are binding to are not yet 
   * created which is why we use the delegate syntax.
   */
  function registerEventListeners() {

  }

})( jQuery );