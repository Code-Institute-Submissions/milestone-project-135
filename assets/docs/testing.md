## Testing

The testing process is outlined below. It includes:
* Testing User Stories
* Validating HTML, CSS and JavaScript code
* Manually testing the functionality of links, video, quiz, map, newsletter form
* Checking website compatibility on different browsers
* Testing responsiveness on multiple devices and screen sizes:

To return to the previous document, click [here](https://github.com/chloelewisdev/milestone-project-2/blob/master/README.md).

### Testing User Stories:

#### New users

* **New user** - *I am a parent who wants to find ways of introducing netball to my young children. All local clubs in my area provide netball for children from around the age of 9, and so I’m looking to find some inspiration online instead.* 

This user can click on the short YouTube video in the ‘Skills’ section, to learn about some ball drills and skills they can then easily do with their children at home. 
The user can navigate to the ‘Quiz’ section (by scrolling down or selecting ‘Quiz’ in the navigation menu), and could do the short-multiple quiz section with their children to see how much they know and learn some fun facts about netball. To do this the user can click on an answer (radio button) for each question, then press ‘Results’ which reveals a section giving the user a score out of 4. If they want to take the quiz again or give another user a turn, the user can click on the ‘Try Again’ button to refresh the quiz and start from the beginning (with score set to ‘0’). 

The user can also navigate to the ‘Superleague Teams’ section via the fixed navigation menu or by scrolling down, where they can learn about the locations of the superleague teams by looking at the map and the markers. Here the user can click on a marker to check individual team information and click on a link to visit the relevant team website, where the user can view upcoming matches they could watch with their children if close to their location, or see if any upcoming matches are being shown on Sky Sports. 

* **New user** - *I am a user who knows nothing about netball, however I am searching for ways to keep my children active and healthy. I am interested to learn more about netball and why I would engage my children in netball activities.*

The user arrives at the ‘About Us’ section at the beginning of the website which includes a text section that explains the benefits of young children playing netball. 
As well as reading about how netball is good way for children to keep active and healthy, the user can then click to play an embedded Youtube video in the ‘Skills’ section which provides some simple netball-related activities the user can do with their own children. The user can also do the multiple choice quiz in the ‘Quiz’ section to learn more general knowledge about netball. 

#### Returning users

* **Returning user** - *I am a returning user who previously completed The Netball Hub’s 'Skills' video with my child. I'm keen to find out where I can access more of these as we really enjoyed it, and I’d also like to do a different netball-related activity with my child.* 

This user can click on a link at the bottom of the text in the ‘Skills’ section which takes them to a page on the England Netball’s website where further videos are available containing more ball skills and challenges that can be done at home. 

The user could also next navigate to the ‘Quiz’ section (by scrolling down or selecting ‘Quiz’ in the navigation menu), and could do the short-multiple quiz section with their children to see how much they know and learn some fun facts about netball. To do this the user can click on an answer (radio button) for each question, then press ‘Results’ which reveals a section giving the user a score out of 4. If they want to take the quiz again or give another user a turn, the user can click on the ‘Try Again’ button to refresh the quiz and start from the beginning (with score set to ‘0’). 

This user could also choose to look at the Superleague section and discover more about teams that play semi-professionally, perhaps enabling the user to plan to watch a match live or on tv. 

* **Returning user** - *I am a returning user who has already completed the quiz, and followed the video provided, looked at the map and I am now looking for further things to do and ways to find out more information about netball.* 

This user would benefit from going directly to the newsletter section of the website, by scrolling down to this section or selecting the ‘Newsletter’ option in the navigation menu – here the user can complete the form by inputting their first name, last name and e-mail address, and look forward to receiving ideas for netball-related activities and updates in The Netball Hub’s monthly newsletter. By completing the form the user will receive a thank you message, and will then shortly receive an email confirming that they have been signed up to the newsletter. 

#### Project stakeholders

* **Project stakeholder** - *I am one of the owners of the business and want to see it succeed. I want to educate parents and caregivers about the benefits of netball for young children, and encourage them to introduce it to their children at home. 
I want parents and caregivers to enjoy the content of the website, sharing it with their children, and also to sign up to the newsletter to continue to promote the benefits of netball and ways young children can engage in the sport.* 

The stakeholders would be happy to see that the website is user-friendly, with a professional yet fun design, which is achieved through the bright colours used across the site whilst maintaining a consistent design. The stakeholder could feel confident that the website would enable the user to feel educated about netball, by reading about the benefits, learning more about netball by taking the interactive quiz, or using the map to learn about the superleague teams. Furthermore the video provided in the website ensures that users are provided with hands-on netball-related activities the user can do at home. Overall the stakeholder should feel happy that there is a positive user experience, which would lead to more requests to join the newsletter – increasing their customer database and meeting their goals.

### Validating HTML, CSS and JavaScript code

#### HTML
I validated the HTML with the [W3C Markup Validation Service](https://validator.w3.org/)

**Issues found** 
The following errors were brought up on the index.html file:
	* Duplication of the word ‘class’ in a div in the quiz section. I corrected this by removing the duplicated word and adding the content of the duplicated 'class' to the original 'class'. 
    * It was shown that I do not need to include type=”text/javascript” in the script tag used for the EmailJS and GoogleAPI scripts in the head. I corrected this by deleting this.
I made these updates the code passed with no errors or warnings to show. 
 *(Note - removing "type=text/javascript" from the head script tag seemed to stop the email sending for my mentor when testing during the final project meeting. As this code was taken directly from EmailJs instructions, I decided to add it back in. The e-mail service then continued to work correctly.*

#### CSS
I validated the CSS with the [W3 CSS Validation Service](https://jigsaw.w3.org/css-validator/)

**Issues found**
The following errors were brought up for the style.css file:
    * The padding for the #quiz div was written incorrectly, and needed to be separated to show padding-top and padding-bottom. Once I updated this, no errors were shown.

#### JavaScript
I used [JSHint](https://jshint.com/) to check my JavaScript files.

    * *quiz.js* - no errors were shown for this file

**Issues found**
This brought up the following errors with the steps I took to correct them:

    * *maps.js* - the following error message was shown: "Bad escaping of EOL. Use option multistr if needed." I discovered an article on Stackoverflow which can be viewed [here](https://stackoverflow.com/questions/17832052/bad-escaping-of-eol) which suggesting putting /*jshint multistr: true */ at the start of the file. 
    I added this and the problem was fixed. I was also shown that semicolons were missing on several lines, I added these which fixed the problem. Finally I received this error message: 'The following Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (infowindow, locations, map)'
    Please see below a screenshot of this error:

![JSHint Maps Error ](https://github.com/chloelewisdev/milestone-project-2/blob/master/assets/images/jshint-error.png)

I tried Googling this error and understand it to some extent but unfortunately with the time constraints of the course I was unable to fix this problem.

    * *sendEmail.js* - I received the following error message 'Trailing comma in arguments lists' is only available in ES8 (use 'esversion: 8').' I did some research and found an article on Stackoverflow which suggested putting /*jshint esversion: 6 */ to the top of the file. I edited this to ‘8’ as this was the version referenced in the error warning, and the problem was fixed.

    * *script.js* - It was shown that a semicolon was missing from the hamburger icon for this line of code: window.onscroll = function() {scrollFunction()}; 
I added the semicolon in to make the code read window.onscroll = function() {scrollFunction()**;**}; and the problem was fixed. 

### Manually testing the functionality of links, video, quiz, map, newsletter form

* **Links**
The following tests were carried out to ensure all links work correctly:
- Navigation - I clicked on the logo to make sure I was correctly taken to https://chloelewisdev.github.io/milestone-project-2/index.html and the start of the page. 
I clicked on menu options in the nav bar and each link took me to the correct section on the page. The title was missing on several of the sections unfortunately but I was unable to fix this.
- Skills - I clicked on the link 'website' in the text section, and this opened up a new page taking me to the correct England Netball webpage.
- Maps - I clicked on all the links in the map markers, ensuring they opened up a new page taking me to the correct team's website. All links worked correctly.
- Social media icons in footer - I clicked on all of these, they opened up new pages taking me to the correct social media pages for Twitter, Instagram and Facebook.
- I clicked on the 'Back to top' button and it successfully scrolls the user up to the top of the page.
- Buttons - clicked on the 'Submit' button of the quiz, and the results section is revealed. Clicked the 'Try Again' button in the results section of the quiz, and the quiz is refreshed and score set to back to zero. Clicked 'Submit' on the newsletter without completing the required fields, and the user is alerted to the required fields that still need to be completed. Completed the fields, clicked the 'Submit' button and the modal message appears, and then the page is correctly refreshed submitting the form. 

* **Video**
- I clicked play on the embedded YouTube video in the 'Skills' section and this played correctly.

* **Quiz**
I manually tested the quiz by fistly choosing one incorrect answer and submitting this one-by-one, checking the score showed zero.
I subsequently did this for two incorrect answers, three incorrect answers and four incorrect answers, checking the score received was zero each time.

I then chose the correct answer for each question and submitted this one-by-one, checking the score showed one each time.
I subsequently did this for two correct answers, three correct answers and four correct answers, checking the score received was correct each time.

* **Map**
- I checked the map showed ten different markers, and that each marker showed an infowindow - all were working correctly, showing the name of the team, along with a link to the team's website (see above for link testing of these).

* **Newsletter**
- I tried completing the form by not entering all the required fields. A message pointer on the form showed the fields that still needed to be completed. I tried this for each of the three fields - the message showed correctly and I was unable to submit the form until all fields were complete. The modal message then showed successfully and the page then refreshed. 

#### Issues found:
Logo in nav bar and maps - I noticed that the maps section stopped working when I clicked on the logo in the nav bar. The URL was set to https://chloelewisdev.github.io/milestone-project-2/index.html when the user clicks the logo in the nav bar. However when I was viewing the page on https://chloelewisdev.github.io/milestone-project-2/ the maps worked well. I fixed the problem by going into API Cloud Platform account, and adding https://chloelewisdev.github.io/milestone-project-2/index.html as one of the URLs in the key website restrictions. This then seemed to solve the problem and the maps loaded properly when I refreshed for https://chloelewisdev.github.io/milestone-project-2/index.html.

Quiz - whilst developing the quiz, I realised that I had incorrectly spelled the word 'million' for the value in the third question (question3) - therefore the scoring system was not working correctly.I realised the scores were wrong and then identified question3 as the problem by checking the score was showing correctly for each question. When i realised it was the third question, I identified the error by checking all the names, values and ids in the index.html code matched those in the quiz.js file. I realised the value in the html code was written 'milllion' - once this was updated the scores worked correctly. 

### Testing on different browsers:
I manually tested the website on the following browsers:
* Chrome
* Safari
* Mozilla Firefox

### Testing responsiveness on multiple devices and screen sizes:

* I manually tested the website by using Google Developer Tools to check each individual section and the website as a whole worked on different devices and different screen sizes, including: Moto G4, Galaxy S5, Pixel 2, Pixel 2 XL, iPhone 5 SE, iPhone 6/7/8, iPhone 6/7/8 Plus, iPhone X, iPad, iPad Pro. I also manually tested the site on my MacBook Air, iPad, and iPhone 11.
* By using Google Developer Tools I checked that the Google Maps feature still worked on smaller screens as well as each individual marker.
* By using Google Developer Tools I checked that the quiz displayed properly on smaller screens, as well as the results section which was only shown when the user submits their answers. 
* I checked the form was displayed correctly on smaller screens and that the modal message appeared correctly on smaller screens too once the form was submitted. 
* I also asked family to visit the website on their devices including a variety of mobiles and tablets, interact with the page and complete the form. 

To return to the previous document, click [here](https://github.com/chloelewisdev/milestone-project-2/blob/master/README.md).