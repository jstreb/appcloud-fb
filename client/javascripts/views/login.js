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
    switch( message.api ) {
      case "loginStatus":
        handleStatus( message );
      case "logout":
        handleLogout( message );
      case "getUserInfo":
        handleUserInfo( message );
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

  function handleStatus( message ) {
    if( message.status === "connected" ) {
      alert( "get user info" );
      _FBComm.postMessage( "getUserInfo" );
    }
  }

  function logout( message ) {
    alert( "logged out.  Show login" );
  }

  function handleUserInfo( message ) {
    console.log( message );
    alert("got a user");
  }

  function login() {
    bc.device.openURI( "https://www.facebook.com/dialog/oauth?client_id=429947087044863&redirect_uri=http%3A%2F%2Fsmooth-stone-1901.herokuapp.com%2Flogin-success.html&display=touch", undefined, undefined, { modalWebBrowser: true } );
  }

  function logout() {
    _FBComm.postMessage( "logout", "*" );
  }

})( jQuery );