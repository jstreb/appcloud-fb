
window.fbAsyncInit = function() {
  FB.init({
    appId      : '251077988239519',
    status     : true, 
    cookie     : true,
    xfbml      : true,
    oauth      : true,
  });
  status();
};

$( document ).ready( function() {
  $( ".login" ).click( logUserIn );
  $( ".logout" ).click( logUserOut );
});

function logUserIn() {
    alert( "gotcha" );
    FB.login(function(response) {
      if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          FB.api('/me', function(response) {
          console.log('Good to see you, ' + response.name + '.');
          alert( "logged in" );
        });
      } else {
       console.log('User cancelled login or did not fully authorize.');
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
      if (response.status === 'connected') {
        // the user is logged in and has authenticated your
        // app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed
        // request, and the time the access token 
        // and signed request each expire
        //var uid = response.authResponse.userID;
        //var accessToken = response.authResponse.accessToken;
        $( ".logout" ).removeClass( "hidden" );
      } else if (response.status === 'not_authorized') {
        console.log( "logged in but not authorized" );
        console.log( response );
        // the user is logged in to Facebook, 
        // but has not authenticated your app
      } else {
        // the user isn't logged in to Facebook.
        console.log( "not logged in" );
        console.log( response );
        $( ".login" ).removeClass( "hidden" );
      }
    });
  }