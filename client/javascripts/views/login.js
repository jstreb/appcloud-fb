( function( $ ) {
  var _FBComm;

  $( window ).bind( "message", handlePostMessage );

  $( bc ).bind( "init", initialize );
  
  function initialize() {
    _FBComm = document.getElementById( "fb_comm" ).contentWindow;
    registerEventListeners();
  }
  
  function handlePostMessage( message ) {
    message = JSON.parse( message.originalEvent.data );
    if( message.status !== "connected" ) {
      //Show a login button.
      //https://www.facebook.com/dialog/oauth?
      alert( "show login button")
    } else {
      alert( "connected bitches" );
    }
  }

  /**
   * Any event listeners we need for this view we setup here.  Note that the elements we are binding to are not yet 
   * created which is why we use the delegate syntax.
   */
  function registerEventListeners() {
    $( ".login" ).bind( "tap", login );
    $( ".logout" ).bind( "tap", logout );
  }

  function login() {
    bc.device.openURI( "https://www.facebook.com/dialog/oauth?client_id=429947087044863&redirect_uri=http%3A%2F%2Fsmooth-stone-1901.herokuapp.com%2Flogin-success.html&display=touch", undefined, undefined, { modalWebBrowser: true } );
  }

  function logout() {
    _FBComm.postMessage( "logout", "*" );
  }

})( jQuery );