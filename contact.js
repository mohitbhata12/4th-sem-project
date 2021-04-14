var firebaseConfig = {
    apiKey: "AIzaSyAEUWe2jOk6s53AONyLkJV8qEWyHg9T0ao",
    authDomain: "contactform-ae7ea.firebaseapp.com",
    projectId: "contactform-ae7ea",
    storageBucket: "contactform-ae7ea.appspot.com",
    messagingSenderId: "250388075045",
    appId: "1:250388075045:web:1a346d88a2c70d1ee9a5cc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }