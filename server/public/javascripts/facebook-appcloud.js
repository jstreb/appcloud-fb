
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

function status() {
  FB.getLoginStatus( function( response ) {
    if( window.parent ) {
      window.parent.postMessage(JSON.stringify( response ), "*" );
    }
  });
}