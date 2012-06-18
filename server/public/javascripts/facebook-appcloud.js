
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

$( document ).ready( function() {

});

function logUserIn() {
  FB.login(function(response) {
    if (response.authResponse) {
      if( window.parent ) {
        window.parent.postMessage(JSON.stringify( response ), "*" );
      }
    }
  });
}

function logUserOut() {
  FB.logout(function(response) {
    console.log( "logged out" );
    $( ".login" ).removeClass( "hidden" );
    $( ".logout" ).addClass( "hidden" );
  });
}

function status() {
  FB.getLoginStatus( function( response ) {
    if( window.parent ) {
      window.parent.postMessage(JSON.stringify( response ), "*" );
    }
  });
}