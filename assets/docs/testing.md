### Testing User Stories:

* New user - *I am a parent who wants to find ways of introducing netball to my young children. All local clubs in my area provide netball for children from around the age of 9, and so I’m looking to find some inspiration online instead.* 

This user can click on the short YouTube video in the ‘Skills’ section, to learn about some ball drills and skills they can then easily do with their children at home. 
The user can navigate to the ‘Quiz’ section (by scrolling down or selecting ‘Quiz’ in the navigation menu), and could do the short-multiple quiz section with their children to see how much they know and learn some fun facts about netball. To do this the user can click on an answer (radio button) for each question, then press ‘Results’ which reveals a section giving the user a score out of 4. If they want to take the quiz again or give another user a turn, the user can click on the ‘Try Again’ button to refresh the quiz and start from the beginning (with score set to ‘0’). 

The user can also navigate to the ‘Superleague Teams’ section via the fixed navigation menu or by scrolling down, where they can learn about the locations of the superleague teams by looking at the map and the markers. Here the user can click on a marker to check individual team information and click on a link to visit the relevant team website, where the user can view upcoming matches they could watch with their children if close to their location, or see if any upcoming matches are being shown on Sky Sports. 

* New user - *I am a user who knows nothing about netball, however I am searching for ways to keep my children active and healthy. I am interested to learn more about netball and why I would engage my children in netball activities.*

The user arrives at the ‘About Us’ section at the beginning of the website which includes a text section that explains the benefits of young children playing netball. 
As well as reading about how netball is good way for children to keep active and healthy, the user can then click to play an embedded Youtube video in the ‘Skills’ section which provides some simple netball-related activities the user can do with their own children. The user can also do the multiple choice quiz in the ‘Quiz’ section to learn more general knowledge about netball. 

* Returning user - *I am a returning user who previously completed The Netball Hub’s 'Skills' video with my child. I'm keen to find out where I can access more of these as we really enjoyed it, and I’d also like to do a different netball-related activity with my child.* 

This user can click on a link at the bottom of the text in the ‘Skills’ section which takes them to a page on the England Netball’s website where further videos are available containing more ball skills and challenges that can be done at home. 

The user could also next navigate to the ‘Quiz’ section (by scrolling down or selecting ‘Quiz’ in the navigation menu), and could do the short-multiple quiz section with their children to see how much they know and learn some fun facts about netball. To do this the user can click on an answer (radio button) for each question, then press ‘Results’ which reveals a section giving the user a score out of 4. If they want to take the quiz again or give another user a turn, the user can click on the ‘Try Again’ button to refresh the quiz and start from the beginning (with score set to ‘0’). 

This user could also choose to look at the Superleague section and discover more about teams that play semi-professionally, perhaps enabling the user to plan to watch a match live or on tv. 

* Returning user - *I am a returning user who has already completed the quiz, and followed the video provided, looked at the map and I am now looking for further things to do and ways to find out more information about netball.* 

This user would benefit from going directly to the newsletter section of the website, by scrolling down to this section or selecting the ‘Newsletter’ option in the navigation menu – here the user can complete the form by inputting their first name, last name and e-mail address, and look forward to receiving ideas for netball-related activities and updates in The Netball Hub’s monthly newsletter. By completing the form the user will receive a thank you message, and will then shortly receive an email confirming that they have been signed up to the newsletter. 

* Project stakeholder - *I am one of the owners of the business and want to see it succeed. I want to educate parents and caregivers about the benefits of netball for young children, and encourage them to introduce it to their children at home. 
I want parents and caregivers to enjoy the content of the website, sharing it with their children, and also to sign up to the newsletter to continue to promote the benefits of netball and ways young children can engage in the sport.* 

The stakeholders would be happy to see that the website is user-friendly, with a professional yet fun design, which is achieved through the bright colours used across the site whilst maintaining a consistent design. The stakeholder could feel confident that the website would enable the user to feel educated about netball, by reading about the benefits, learning more about netball by taking the interactive quiz, or using the map to learn about the superleague teams. Furthermore the video provided in the website ensures that users are provided with hands-on netball-related activities the user can do at home. Overall the stakeholder should feel happy that there is a positive user experience, which would lead to more requests to join the newsletter – increasing their customer database and meeting their goals.


### Validating HTML, CSS and JavaScript code

**HTML** I validated the HTML with the [W3C Markup Validation Service](https://validator.w3.org/)
The following errors were brought up on the index.html file:
-	Duplication of the word ‘class’ in a div in the quiz section. I corrected this by removing the duplicated word. 
-	It was shown that I do not need to include type=”text/javascript” in the script tag used for the EmailJS and GoogleAPI scripts in the head. I corrected this by deleting this.
 Once I made these updates the code passed with no errors or warnings to show. 

**CSS** I validated the CSS with the [W3 CSS Validation Service](https://jigsaw.w3.org/css-validator/)
The following errors were brought up for the style.css file:
-	The padding for the #quiz div was written incorrectly, and needed to be separated to show padding-top and padding-bottom. Once I updated this, no errors were shown.
-	
**JavaScript** 
JSHint

Quiz – unused variable check() but no errors

Maps:
Bad escaping of EOL. Use option multistr if needed. Used Stackoverflow to find that by putting /*jshint multistr: true */ at the start of the file, the problem is fixed. 

Semicolons needed. 

Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (infowindow, locations, map)
NOT SURE HOW TO FIX

Newsletter

One warning
34	'Trailing comma in arguments lists' is only available in ES8 (use 'esversion: 8').

Discovered on stackoverflow to fix the problem by adding /*jshint esversion: 6 */  to the top of the file (Which I edited to ‘8’ instead of. ‘6’).


Hamburger icon
window.onscroll = function() {scrollFunction()}; missing semicolon – added in (line number?)

**GENERAL (Site Testing on live page)**
Navigation
Links 
Video
Quiz
Maps 
Newsletter
Footer
and other sections

Manually testing the functionality of all links

Manually testing the video
Manually testing the quiz
Manually testing newsletter form

Add issues found to each section.

Return to previous document here


### Testing on different browsers:
I manually tested the website on the following browsers:
* Chrome
* Safari
* Mozilla Firefox

### Testing responsiveness on multiple devices and screen sizes:

I manually tested the website by using Google Developer Tools to check each individual page and the website as a whole worked on different devices and different screen sizes, including: Moto G4, Galaxy S5, Pixel 2, Pixel 2 XL, iPhone 5 SE, iPhone 6/7/8, iPhone 6/7/8 Plus, iPhone X, iPad, iPad Pro. I also manually tested the site on my MacBook Air, iPad, and iPhone 11.


I manually tested the design of the live project by doing the following:
•	Using Google Developer Tools to view the project on devices with different screen sizes.
•	Checking whether the Google Maps feature still worked as planned on smaller devices, without compromising the ability to view the information stored on each marker.
•	Controlling whether the hidden results area for the quiz would expand the background area to fit the content on smaller screens.
•	Asking for feedback from friends and family who opened and interacted with the project on their devices.
 