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
        break;
      case "logout":
        handleLogout( message );
        break;
      case "getUserInfo":
        handleUserInfo( message );
        break;
    }
  }

  /**
   * Any event listeners we need for this view we setup here.  Note that the elements we are binding to are not yet 
   * created which is why we use the delegate syntax.
   */
  function registerEventListeners() {
    $( "body" ).on( "tap", ".login", login)
               .on( "tap", ".logout", logout );
  }

  function handleStatus( message ) {
    if( message.response.status === "connected" ) {
      _FBComm.postMessage( "getUserInfo", "*" );
    } else {
      var html = Mark.up( bc.templates["login-tmpl"] );
      $( ".contents" ).html( html );
    }
  }

  function handleLogout( message ) {
    var html = Mark.up( bc.templates["login-tmpl"] );
    $( ".contents" ).html( html );
  }

  function handleUserInfo( message ) {
    console.log( message );
    var html,
        context;

    message = message.response;

    context = {
      profile: "http://graph.facebook.com/" + message.id + "/picture",
      first_name: message.first_name,
      last_name: message.last_name,
      gender: message.gender
    };

    html = Mark.up( bc.templates["user-info-tmpl"], context );
    $( ".contents" ).html( html );
  }

  function login() {
    bc.device.openURI( "https://www.facebook.com/dialog/oauth?client_id=429947087044863&redirect_uri=http%3A%2F%2Fsmooth-stone-1901.herokuapp.com%2Flogin-success.html&display=touch", undefined, undefined, { modalWebBrowser: true } );
  }

  function logout() {
    _FBComm.postMessage( "logout", "*" );
  }

})( jQuery );