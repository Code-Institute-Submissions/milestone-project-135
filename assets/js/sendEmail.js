/*jshint esversion: 8 */

//Resources used to create this code:
//https://www.emailjs.com/docs/tutorial/creating-contact-form/
//https://www.emailjs.com/docs/sdk/send/

function sendMail(contactForm) {
    emailjs.send("gmail", "newsletter", {
            "from_firstname": contactForm.firstname.value,
            "from_lastname": contactForm.lastname.value,
            "from_email": contactForm.emailaddress.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
                // Shows modal when the all fields have been completed in the form and the user has clicked on the submit button
                $("#myModal").modal("toggle");
                $("#close-modal").click(function() {
                    location.reload();
                });
            },
            function(error) {
                console.log("FAILED", error);
            },
        );
    return false; // To block from loading a new page
}
