function redirectToProfileIfNotLoggedIn() {
  var accessToken = Cookies.get('accessToken'); // => 'value'//localStorage.getItem('accessToken');
  if (!accessToken) {
    // TODO: Encode the URI.
    Cookies.set('redirectUri', window.location.href);
    window.location.href = 'profile.html';
  }
}

function getQueryString(name) {
  var search = new RegExp(name + '=([^&#]*)(&|#|$)').exec(window.location.search);
  return search ? search[1] : null;
}