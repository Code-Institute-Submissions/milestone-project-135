function sendMail(contactForm){
    emailjs.send("gmail", "newsletter", {
        "from_firstname": contactForm.firstname.value,
        "from_lastname": contactForm.lastname.value,
        "from_email": contactForm.emailaddress.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            $("#myModal").modal("toggle");
            $("#close-modal").click(function(){
            location.reload();
            });
        },
        function(error) {
            console.log("FAILED", error);
        },
    );
    return false;  // To block from loading a new page
}

// function check(){
//   var name = document.getElementById('name').value;
//   if(name!=''){
//     setStatus("Success");
//   }else{
//     setStatus("Error");
//   }
// }

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_alert
//onclick="myFunction()"
//function myFunction() {
//alert("Hello! I am an alert box!");
//}

/*Make a note that the locationreload code was taken from Slack Eamonn_lead*/