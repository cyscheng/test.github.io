$(function() {

  /*--- Logout Button ---*/
  $(document.body).on('click', '#logout-button', function(e) {
    e.preventDefault();

    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      alert('Sign-out successful.');
      location.href = '/tempmain.html';
    }).catch(function(error) {
      // An error happened.
      alert('Sign-out failed.');
    });
  });


  /*--- Login with Email Function ---*/
  $('#login-with-email').on('click', event => {
    event.preventDefault();
    var email = $('#js-email').val();
    var password = $('#js-password').val();

    console.log(email, password);

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        alert('Successfully logged in.');
        location.href = "C:/Users/cys_c/Desktop/test/tempmain.html";
      })
      .catch(error => {
        alert('Failed to log in.');
      });
  });




  /*--- Check Login Status and Display Logout Button ---*/
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      $("#signup-button").hide();
      $("#logout-button").show();
      $("#userPage").removeClass("hidden");
      var userID = user.uid;
      var database = firebase.database().ref('/account_Info/' + userID);
      database.on('value', function(data) {
        var fname = data.child('fname').val();
        var lname = data.child('lname').val();
        var acc_level = data.child('acc_level').val();
        $('#login-status').html('Welcome, ' + fname + ' ' + lname);
        console.log(acc_level);
   
      $('#login-status').html('Login');
      $("#logout-button").hide();
      $("#signup-button").show();
      $("#adminPage").addClass("hidden");
    
  });



});
