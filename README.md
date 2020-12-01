# The Netball Hub

## Code Institute - Milestone Project 2

![The Netball Hub responsive website mockup](https://github.com/chloelewisdev/milestone-project-2/blob/master/assets/images/mockupscreenshot.png)

The Netball Hub is a fictional organisation that aims to inform parents with young children about the benefits of playing netball from a young age, and to provide different ways parents can engage their children in the sport.

The idea for this website came to me as I am a keen netball player who wants to encourage my children to get involved in the sport from a young age. Often netball clubs are only available for children in their upper primary years, however I think even younger children would benefit from learning more about the sport. As a parent I have looked at ways to encourage my children’s interest in the sport, and I thought it might be useful to create a platform that shares these ideas for other people in a similar situation.  

This was the second of four Milestone Projects that made up the Full Stack Web Development Program at The Code Institute. The main requirements were to make an interactive and responsive website with HTML5, CSS3 and JavaScript.

Click [here](https://chloelewisdev.github.io/milestone-project-2/) to view the website live. 

## Table of Contents:

* [User Experience](#User-Experience)
    * [Project goals](#Project-goals)
    * [User Stories](#User-Stories)
    * [Strategy Plane](#Strategy-Plane)
    * [Scope Plane](#Scope-Plane)
    * [Structure Plane](#Structure-Plane)
    * [Skeleton Plane](#Skeleton-Plane)
    * [Surface Plane](#Surface-Plane)

* [Features](#Features)
    * [Features to consider implementing in the future](#Features-to-consider-implementing-in-the-future)

* [Technologies Used](#Technologies-Used)

* [Testing](#Testing)
    * [Testing User Stories](#Testing-User-Stories)
    * [Validating The Code](#Validating-the-code)
    * [Testing on different browsers](#Testing-on-different-browsers)
    * [Testing responsiveness on multiple devices and screen sizes](#Testing-responsiveness-on-multiple-devices-and-screen-sizes)
    * [Issues found](#Issues-found)

* [Deployment](#Deployment)

* [Credits](#Credits)
    * [Content](#Content)
    * [Media](#Media)

* [Acknowledgements](Acknowledgements)

## **User Experience**
This section provides insight into the UX process, focusing The Netball Hub website’s target audience, the main aims of the project and how the website can help users meet their needs.  

### Project goals:

* To educate users about how young children from as young as 4 can benefit from playing netball 
* To equip users with ways they can interest and engage young children in netball
* To interest the user enough that they want to sign up to The Netball Hub newsletter, which will provide the user with more netball information and activities each month
* To create a website that is visually appealing, and fully responsive on all devices and screen sizes 
* To make The Netball Hub seem a reputable company, by creating a professional website, whilst maintaining a fun appeal.

### User Stories

**New users:** 
* I am a parent who wants to find ways of introducing netball to my young children. All local clubs in my area provide netball for children from around the age of 9, and so I’m looking to find some inspiration online instead. 
* I am a user who knows nothing about netball, however I am searching for ways to keep my children active and healthy. I am interested to learn more about netball and why I would engage my children in netball activities. 

**Returning user:**
* I am a returning user who previously completed the The Netball Hub’s 'Skills' video with my child. I'm keen to find out where I can access more of these as we really enjoyed it and I’d also like to do another netball-related activity with my child.
* I am a returning user who has already completed the quiz, and followed the video provided, looked at the map and I am now looking for further things to do and ways to find out more information about netball. 

**Business Owner:**
* I am one of the owners of the business and want to see it succeed. I want to see more young children enjoying the many benefits of netball, and I want parents to feel confident enough to introduce it themselves to their children at home. I want parents to enjoy the content of the website, possibly sharing it with their children depending on their age, and also to sign up to the newsletter to continue to promote the benefits of netball and ways young children can engage in the sport. 

### Strategy plane: 
The main goal of the website is to encourage parents to engage young children in netball from a young age. The website should be professional, so that the main messages are taken seriously, but also interactive, fun and engaging so that the content is appealing too. I started the UX process by creating the User Stories above which helped me work out who the project was aimed at and what I would need to include in the website to satisfy the needs of the users. 

### Scope plane:
The key features of the website were developed based on the main aim of the website and user needs. Users should be able to do the following on the website:

* Watch a video to learn some simple netball drills and ball skills parents and children can do at home – I would embed a YouTube video in the HTML code for this feature, plus a link to the England Netball website where more videos can be found.
* Take a multiple-choice quiz to learn more about netball, including the benefits of playing netball as well as some fun facts about the sport - I would write this using JavaScript. I initially thought that having some cards which included a button that you could click on to reveal the answer for each question might work well, but then I thought it would be more interactive and engaging for the user if it was a quiz giving a score as this might mean users could take it in turn to have a go and compare scores. I decided the quiz should be fairly short to keep the user engaged on the rest of the website. 
* Learn more about England’s Vitality Netball Superleague, by engaging with a map to view where the superleague teams are based, and also have the opportunity to click on a links on each map marker to visit the individual team websites - I would use a Google Maps API for this feature.
* Sign up to a newsletter, in order to keep interested parents informed about ways they can practise netball and engage their children in netball at home - I would use EmailJS for this feature. 

### Structure plane:

Once I had worked out which features I'd like to include, I began to think about the information architecture and the different interactions that could take place across the site, and the order they should be in. 

I decided on five different sections: 
1)	‘About’ – this would be an introductory text section explaining to users the aims of the site
2)	'Skills' – this section would include a YouTube video
3)	'Fun Facts' – this section would contain the multiple-choice quiz
4)	'Clubs' - this section would contain the Google Maps API
5)	'Newsletter' - this section would contain the EmailJS feature. 

The main interactions are therefore (in the following order) – watch video, play the quiz, engage with the map, sign up to the newsletter. 

I knew I wanted the user to read the About section first, as this would welcome the user and introduce them to the aims of the website and the next sections. After this the user would move on to three sections based on ways to introduce more netball at home, finally finishing with the option to sign up to the newsletter. I decided the video was a good way to ease the user into the idea of netball as the drills to do at home are very simple and cost nothing. It also made sense for the map to come towards the end as people would need to be convinced that they were interested enough in netball to look more into watching professional teams. 

Finally it was logical to me that the newsletter sign up form was the final section of the website, as ideally users would be keen to learn more after already trying out some of the activities in the sections above – the user must have bought into the idea behind the website to sign up for more information.  

I decided that although there were 5 different sections, each section was quite small, comprising a key feature often accompanied by some text. Therefore I decided a one-page website would be suitable for this project rather than several short pages.  

I wanted to make sure it would be easy for users to navigate between the different sections within the one page, and therefore I decided it would be essential to create a fixed nav, as well as a Hamburger icon for smaller devices so that the user could easily choose to move to a different section on the site if they wished. 


### Skeleton plane:

At this stage I was ready to put together wireframes. I used Figma for these, creating wireframes for the website on desktop, tablet and mobile. 

I considered using arrows or pointers to guide the user through the different sections but I felt this may actually be frustrating as the sections are quite short and so the arrows would appear too quickly after one another. I decided that a 'Back To Top' button on the site would be useful, so the user could quickly move back to the top of the website if they had scrolled far down.
On desktop the fixed nav would mean there was always the choice to move to a specific part of the site as mentioned above, and I made sure the hamburger icon was shown on tablet and mobile. 

I decided using a box layout would be a good way to present the information in the different sections, allowing enough space between text, and any key features. I decided to alternate between full width containers, and then containers divided into two in order to spread the content out visually and also logically. 

The wireframes can be viewed on [Figma](https://www.figma.com/file/6uPCcGmqEznG0EXndWxXOn/Milestone-Project-2?node-id=1%3A2)

### Surface plane:

I next moved on to the design work. 

**Colours & Logo:** 
Colours were an important choice – it became apparent quite early on when I was doing research that it was quite difficult to find stock images of children playing netball. Therefore I knew the colours would be integral in giving the website a ‘fun’ appeal and making it look attractive to both adult and children (if adults decided to share parts of the site, such as the quiz, with the child for example). 
 
I used Canva to create the logo, and decided on a logo template that had writing accompanied by 3 circles, which could hint at netball balls. I therefore needed 3 colours for the circles in the logo. 

I wanted the colours to be bright, and was inspired by those used in the 'Bee @Home video' I had decided to use for the Skills section, from the England Netball website. I therefore decided to use similar colours in the logo and decided to
 alternate these for the different headings too. I used a softer red colour, **#sjfhskjdfd**, a yellow **#djhfkjhdfjk** and a turquiose **#kjhghjghjg**. I also decided the yellow was a good background for the quiz, as it would make the feature stand out whilst ensuring the words would still be clearly visible and legible. 

I also decided to use the circles to add some extra design to the ‘About’ section, which looked quite flat with only text and a white background. 

 **Fonts:** I used Google Fonts to select the fonts for my project. I wanted to find two fonts that worked well together – one for the logo and headings, and another for the body text. Overall I wanted the design to look modern, whilst also related to netball somehow. I decided round, soft lettering would be better suited to the site as opposed to anything sharp and angular. This seemed more friendly
and also worked well with the circles on the logo.

For the logo and headings, I decided on using Quicksand and then I used Open Sans for the body text which I thought complimented Quicksand well.

**Images:** I needed a stock image for the hero image section, but it was quite difficult to find a stock image of children playing netball as mentioned above. Therefore I decided on a stock image of a netball hoop with blue sky in the background. This gives the idea that netball isn’t just a sport that is played indoors in a sports hall, but also is a sport that can be enjoyed outside too – which is all part of the idea being communicated to parents – for example playing with a ball in the garden. It would have been even better if it was a shot of a netball, however I was unable to find a suitable stock image of this. I took the chosen stock image from [Unsplash](https://www.unsplash.com) and the information for this image can be found below in the Credits section.

**Layout:** I decided to use different background colours to signal to the user different areas of content. I used a soft 
grey alternating with white for this. These colours also enabled the main brand colours in the headings and subtitles to stand out, as well as the key features (video, quiz, map, newsletter sign-up).  

I thought the white and light grey helped to keep a feeling of space on each page too, meaning that areas containing text and another feature weren’t too busy. I decided to give all buttons….info about styling?


## Features
The project consists of one single page, with five different sections, all of which can be accessed through the menu in the fixed navigation bar at the top of the page. 

* Fixed navigation - allows the user to easily navigate to different sections of the page. The nav bar also displays The Netball Hub’s logo in the top left corner. 
* 'Back to top' button - enables users to quickly move back to the top of the page 
* 'About Us' - this is a text section which introduces the user to The Netball Hub and outlines the aims of the website
* 'Skills' - this section includes some introductory text accompanied with a YouTube video from England Netball’s Bee@Home programme - featuring a skills challenge and simple ball skills parents can watch and then do with their children at home. This video is embedded in the HTML and is set to only play when clicked therefore the user has control over playing and stopping/pausing the video. 
* 'Netball Quiz' - this multiple choice quiz contains 4 questions, each with two answers of which the user needs to select one. For each correct answer the user gains one point, and the score is shown at the end once the user clicks on the button 'Check results'. When the user has received their score, they can then click another button to 'Try Again', which refreshes the quiz and gives the user change to start the quiz again if they wish. This quiz is written in JavaScript.
* 'Netball Superleague’ - This sections features a map showing 10 different Google Map Markers. Each marker represents the location of different Superleague teams across England, Wales and Scotland. When the user clicks the marker, the name of the team is shown as well as a link to the team's website which opens up in a new webpage if clicked. This feature was created with a Google Maps API.
* 'Sign up to our newsletter' - this feature has a sign-up form where the user inputs their First Name, Last Name and Email into a form. They then click on the ‘Sign Up’ button, which validates the form (if the user hasn’t added information to each field they are shown an alert on the form showing them an area they still need to complete), and then once all required fields have been completed (all the fields), the user is then shown a modal message thanking them for signing up. The user can then click the ‘close’ button in the modal message, the page refreshes and the form is submitted. An email is then sent to The Netball Hub (as this is fictional I used the email address chloelewiswebdev@gmail.com) with information about the user (first name, last name and e-mail address) so that the company can add them to the newsletter mailing list. And an auto-reply email is also sent to the user, thanking them for the sign-up and informing them that they will receive a newsletter from The Netball Hub in their inbox shortly. This feature was created using EmailJS.
* Footer - the footer contains social media icons with links to social media pages that open up in a new page. 

### Features to consider implementing in the future:

* The quiz could be developed much further in the future. There could be more questions, with each question possibly being shown on a different slide. Also possibly adding a feature such as countdown timer to the quiz could make it a more fun experience for the user. It might also be beneficial for the user if the quiz was testing the new knowledge the user has learnt on the website, but the website may need more content before this could be worth doing. 
* It would be good if once the newsletter sign-up form has been completed and submitted, an initial first newsletter is automatically sent to the user. However as this company is fictional, this was not possible at this time.  
* There is only one image used currently on the site, however it would be good to look at areas where more could be added in the future, possibly by creating a rotating hero image section, or including images from the superleague netball league under the map. 


## Technologies Used

**Languages, libraries, frameworks, editors and version control**

* HTML5
    * The language used to create and structure sections, paragraphs, headings, links, and add content to the website
* CSS3
    * The language used to style the HTML5 elements 
* JavaScript
    * The language used to create the multiple-choice quiz, the Google Maps API feature, and send emails using EmailJS in the newsletter sign up feature. I also used this language for the Scroll to Top button and the Hamburger Icon that sits in the nav on smaller screens
* [Bootstrap framework](https://getbootstrap.com/) 
    * I used Bootstrap's grid system in order to have a 'mobile'-first' approach
* [JQuery] (https://jquery.com/)
    * I used the JQuery library to add or remove the active class on the nav bar, so that users on desktop could clearly see which section they were viewing
* [Gitpod](https://www.gitpod.io/)
    * I used Gitpod's development environment to write the code for the website
* [Git Version Control](https://git-scm.com/)
    * I used Git for Version Control to record changes and updates to my files
* [GitHub](https://github.com/)
    * I used GitHub’s repository hosting service to host my deployed website as well as track previous versions of my code 

**Other tools used:**

* [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview)
    * I used the Google Maps API to add a Google Maps feature showing users where the superleague netball teams are based across England, Wales and Scotland with ten  different map markers which can be clicked on to give the user more team information. 
* [EmailJS]()
    *EmailJS allowed me to include a newsletter sign up form in the website, that submits the user's details in an email to The Netball Hub, as well as sending the user a thank you e-mail confirming they have been signed up to the monthly newsletter. 
* [Figma](https://www.figma.com/)
    * I used Figma to create wireframes for my project for desktop, mobile and iPad. 
* [Canva](https://www.canva.com/)
    * I used Canva to create The Netball Hub’s logo 
* [Unsplash](https://unsplash.com/)
    * This was the source for the hero image in my project, please see the Media section below for more details on this. 
* [Google Fonts](https://fonts.google.com/)
    * I used the following Google fonts for the project: Quicksand and Open Sans 
* [Favicon](https://favicon.io/)
    * I used this website to create the favicon for the website 
* [FontAwesome](https://fontawesome.com/)
    * I also used three social media icons for Twitter, Instagram and Facebook

*Note: I also found [Stack Overflow](https://stackoverflow.com/), [W3C Schools](https://www.w3schools.com/) and [Start Bootstrap](https://startbootstrap.com/) helpful resources throughout the project, as well as the Code Institute Slack Community.  Add some more here. 

## Testing:

### Testing User Stories:

* New user - *I am a parent who wants to find ways of introducing netball to my young children. All local clubs in my area provide netball for children from around the age of 9, and so I’m looking to find some inspiration online instead.* 

This user can click on the short YouTube video in the ‘Skills’ section, to learn about some ball drills and skills they can do with their children at home – for free and just using a ball. The user could do the short multiple-choice quiz in the ‘Quiz’ section with their children to see how much they know and learn some fun facts about netball. The user can also look on the map to find out if there are any superleague teams near to where they live. They can click on a marker and if the location is suitable they can then follow a link to a team’s website and see if they might be interested in buying tickets to watch a live match if so, or see if any upcoming matches are being shown on Sky Sports which the parent could watch with their children to inspire them. Finally, the user can complete the form at the bottom of the website to sign up to The Netball Hub’s monthly newsletter where they will receive more activities they can do with their children each month. 

*New user - *I am a user who knows nothing about netball, however I am searching for ways to keep my children active and healthy. I am interested to learn more about netball and why I would engage my children in netball activities.*

The ‘About Us’ section at the beginning of the website explains the benefits of young children playing netball. The video is very simple and for beginners, so this user would be able to watch the video at the start of the website after reading about the benefits, and straight away learn how they could introduce it to their children easily and for free. If they enjoy the video, they can follow a link in the text accompanying the video which takes them to England Netball’s website showing more videos. This user may also wish to sign up to the newsletter, to receive more netball activities they can do with their children in the future. 

*Returning user - *I am a returning user who previously completed The Netball Hub’s 'Skills' video with my child. I'm keen to find out where I can access more of these as we really enjoyed it, and I’d also like to do a different netball-related activity with my child.* 

This user can click on a link at the bottom of the text in the ‘Skills’ section which takes them to a page on the England Netball’s website where further videos are available containing more ball skills and challenges that can be done at home. Underneath this section, the user arrives at the quiz section (the user could also select ‘Quiz’ from the navigation menu too). The user could complete The Netball Hub’s multiple-choice quiz together with their child. There are 4 questions each with 2 multiple choice answers – the questions are quite straightforward and aim to provide some fun and interesting facts about netball that might interest both the parent and also the child. 


* Project stakeholder - *I am one of the owners of the business and want to see it succeed. I want parents to feel confident enough to introduce netball to their children themselves at home, so that more young children can enjoy the benefits of the sport. I want parents to enjoy the content of the website, possibly sharing parts of it with their children depending on their age, and also to sign up to the newsletter to continue to promote the benefits of netball and ways young children can engage in the sport.*

The stakeholder would be happy to see the benefits of the sport promoted at the very beginning of the website in the ‘About Us’ section. 
The netball-related features included in the website, are at a level that any parent, with or without prior netball knowledge could use and engage in them. The video at the beginning for example is very simple, rather than a lesson on court positions and team tactics, the video shows a few skills that can be done at home with any ball. The quiz only has 4 questions, and is not at a dauting level about the detail of the sport, but rather some more general interest facts such as where the sport is played and by who. Finally the map is very clear and contains just ten markers, so that the parent can easily see at a glance where the superleague teams are based, or if they want to know more they can click on the links in the markers which takes the user to the team’s web page. The newsletter form is also a simple sign up form with only 3 required fields. 

Therefore overall the stakeholder would be happy that the benefits of netball for young children are promoted, the content provided should engage the user and enable them to feel confident enough to introduce netball to their children if they wish, and finally the user can easily sign up to a monthly newsletter to continue to receive more netball-related activities and information on netball for young children.  Finally, the interactive elements on the website along with the colours help to make the website appealing and fun.
 

### Validating HTML, CSS and JavaScript code

**HTML** I validated the HTML with the [W3C Markup Validation Service](https://validator.w3.org/)
Issues found?

**CSS** I validated the CSS with the [W3 CSS Validation Service](https://jigsaw.w3.org/css-validator/)

**JavaScript** 
Check JSHint?
Quiz
Maps
Newsletter
Hamburger icon

**GENERAL (Site Testing on live page)**
Navigation
Links 
Video
Quiz
Maps 
Newsletter
Footer
and other sections

### Testing on different browsers:
I manually tested the website on the following browsers:
* Chrome
* Safari
* Mozilla Firefox

### Testing responsiveness on multiple devices and screen sizes:

I manually tested the website by using Google Developer Tools to check each individual page and the website as a whole worked on different devices and different screen sizes, including: Moto G4, Galaxy S5, Pixel 2, Pixel 2 XL, iPhone 5 SE, iPhone 6/7/8, iPhone 6/7/8 Plus, iPhone X, iPad, iPad Pro. I also manually tested the site on my MacBook Air, iPad, and iPhone 11. 

### Issues found 

## Deployment
This project was developed in GitPod and deployed to the hosting platform [GitHub Pages](https://chloelewisdev.github.io/milestone-project-1/index.html).

I took the following steps to deploy the Fray + Anchor through to GitHub Pages:
-   Loaded GitHub in Chrome web browser and signed in
-   Clicked on [My Repositories](https://github.com/chloelewisdev?tab=repositories)
-   Navigated to [milestone-project-2](https://github.com/chloelewisdev/milestone-project-2)
-   Selected [Settings](https://github.com/chloelewisdev/milestone-project-2/settings)
-   Scrolled down to the GitHub Pages area of the page
-   Selected ‘Master Branch’ from the ‘Source’ dropdown menu
-   Confirmed my selection
-   The Netball Hub is now live on [GitHub Pages](https://chloelewisdev.github.io/milestone-project-2)  

Deploying with Google Maps API
For this project, I also used a Google Maps API. I integrated this to my website in the following way:
1.	I navigated to Gooogle's Getting started with Google Maps Platform, where I set up an account my account.
2.	From there I decided to use the 'Maps JavaScript API' and an API key with these steps on here.
3.	Once I had set up my Google Maps feature in my project as described here, I restricted the key's access to only my project's URL to limit its use for no other purposes.
The above process can be copied if you would like to deploy a project with the Google Maps API feature.
Deploying with EmailJS
I used EmailJS to automatically send me an email each time a user submits the Newsletter form. This feature can be implemented as follows:
1.	I created an account with EmailJS and navigated to this page
2.	I followed the steps from the tutorial, creating a template and adding the EmailJS javascript library to my project.
3.	I chose to stay with a free account, which limits my monthly quota to 200 emails per month.
The above process can be copied if you would like to deploy a project with the EmailJS service.




To deploy your own version of the website:

- Have git installed
- Visit the repository
- Click 'Clone or download' and copy the code for http
- Open your chosen IDE (Cloud9, VS Code, etc.)
- Open a terminal in your root directory
- Type 'git clone ' followed by the code taken from github repository 
- When this completes you have your own version of the website. Feel free to make any changes to it. 

The website can be run by opening one of the HTML files within a web browser.

Visit the link provided. Your website with any made changes will appear.

Saved changes to the website will appear here after refreshing the page.

The benefits of hosting your website on GitHub pages is that any pushed changes to your project will automatically update the website. Development branches can be created and merged to the master when complete. It may take a moment for changes to appear on the hosted website.

## Credits

### Content
The content for this website is fictional and written by myself. The images are almost all my own, except for one which was taken from Unsplash and is referenced below. 

I found the Code Institute Slack Community's Peer Code Review channel really useful to look through when considering the content for this project. 

Thank you to my mentor Seun Owonikoko for suggesting that I look at the following README.md file by fellow Code Institute student Miranda https://github.com/mkthewlis/Milestone-Project-2/blob/master/README.md when doing my own README.md file.

### Media
* The stock image used for the hero image can be found at the following link: [Unsplash](https://unsplash.com/photos/2JOxWQoxGtU)

## Acknowledgements
Thanks to my mentor Seun Owonikoko for her useful suggestions and time.  

Thanks to the Code Institute Slack Community.

Thanks also to my family for taking the time to look over the website and their feedback. 

