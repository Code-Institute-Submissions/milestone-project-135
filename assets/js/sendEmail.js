function sendMail(contactForm){
    emailjs.send("gmail", "newsletter", {
        "from_firstname": contactForm.firstname.value,
        "from_lastname": contactForm.lastname.value,
        "from_email": contactForm.emailaddress.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            location.reload();
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}


/*Make a note that the locationreload code was taken from Slack Eamonn_lead*/