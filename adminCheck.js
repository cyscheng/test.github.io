$(function() {
  /* Check if the user is admin or not, and redirect the page*/
  firebase.auth().onAuthStateChanged(user => {
    var userID = user.uid;
    console.log(userID);
    var database = firebase.database().ref('/account_Info/' + userID);
    database.on('value', function(data) {
      var userProfile = data.val();
      if (userProfile.acc_level != 2) {
        $("body").hide();
        alert("You are not authorized to access this page.");
        location.href = "C:/Users/cys_c/Desktop/test/tempmain.html";
      } else {
        $("body").show();
      }
    });
  });
});
