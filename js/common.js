
function redirectToProfileIfNotLoggedIn() {
  var accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    localStorage.setItem('redirectUri', window.location.href);
    window.location.href = 'profile.html';
  }
}

function getQueryString(name) {
  var search = new RegExp(name + '=([^&#]*)(&|#|$)').exec(window.location.search);
  return search ? search[1] : null;
}
