
window.fbAsyncInit = function() {
  FB.init({
    appId      : '429947087044863',
    status     : true,
    cookie     : true,
    xfbml      : true,
    oauth      : true,
  });
  status();
};

$( window ).bind( "message", handlePostMessage );

function handlePostMessage( message ) {
  message = message.originalEvent.data;
  if( message === "logout" ) {
    FB.logout(function(response) {
      window.parent.postMessage(JSON.stringify( { "status": null } ), "*" );
    });
  }
}

function status() {
  FB.getLoginStatus( function( response ) {
    if( window.parent ) {
      window.parent.postMessage(JSON.stringify( response ), "*" );
    }
  });
}