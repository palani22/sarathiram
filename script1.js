document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get form values
    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var message = document.getElementsByName('message')[0].value;
    var option = document.querySelector('input[name="option"]:checked');
    var checkbox = document.getElementById('confirm').checked;


  // Example of accessing the selected radio button and checkbox values
  if (option) {
    console.log("Selected option:", option.value);
  }

  console.log("Checkbox checked:", checkbox);

  
  
    // Display a confirmation message
    alert('Form submitted successfully!');
  
  
  });
  