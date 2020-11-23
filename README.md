# The Netball Hub

## Code Institute - Milestone Project 2

The Netball Hub is a fictional organisation that aims to inform parents with young children, in particular girls, about the benefits of playing netball from a young age. 
The aim of the website is to educate parents about the lack of netball available to young girls, the benefits of netball, and then to provide different ways parents can begin to
introduce this to their daughters if they are interested. 

The idea came to me out of frustration from my own experience as a parent to a young girl. I have found football, rugby and cricket clubs are widely available for her to attend, but when I have
taken her to these she has been the only girl. As a netball player myself I am keen to promote this sport to her, as well as team sports and ball games, but I have had to find my own ways of introducing netball to her, as there is nothing in my 
local area for her to attend. Having done some research into this, there is very little netball provision at this age across the country, however I believe it would be a great benefit to 
young children, boys and girls, if this was more widely available. I decided to create this website to promote awareness of the problem and provide other parents who may be in a similar situation with some ways to include netball in their family life if they so wish. 

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
This section provides insight into the UX process, focusing on who The Netball Hub website is for, the main aims of the project and how the website can help users meet their needs.  

### Project goals:

Educate, promote and engage 
* To educate people about the lack of netball available for young girls in England
* To learn about the benefits of playing netball
* To equip parents with ways they can interest and engage their children in netball
* To interest the user enough that they want to sign up to The Netball Hub newsletter to continue to be provided with more netball activities and information
* To create a website that is visually appealing, and fully responsive on all devices and screen sizes 
* To make The Netball Hub seem a reputable class provider, by creating a professional website

### User Stories

**New users:** 
* I am a user who is new to netball. I want to find out more about this sport and how I could introduce my children to it. 
* I am a user who has played netball previously. I am aware that there is very little netball available for young children. I would like to encourage my children to play this sport, however I have no experience teaching it and so I am looking for this website to provide me with some activities and things I can do with my children based around netball. 
* I am a user who wants to keep up to date on ways to provide netball to my children, I want to receive the latest netball news and more activities I can do with my children. 

**Returning user:**
* I am a returning user who previously completed the 'Skills' video with my child. I'm keen to find out where I can access more of these as my children really enjoyed it. 
* I am a returning user who has already completed the quiz, and followed the video provided, but I am now looking for further things to do and ways to find out more information about netball.

**Business Owner:**
* I am one of the owners of the business and want to see it succeed. I want to promote the issue around the lack of netball for young children, and equip parents with ways netball can introduced at home. I want parents to sign up to the newsletter to continue to promote the benefits of netball and ways young children can engage in the sport.

### Strategy plane: 
The main goal of the website is to encourage parents to engage young children in netball from a young age. The website should be professional, so that the main messages are taken seriously, but also interactive, fun and engaging. I started the UX process by creating the User Stories above which helped me work out who the project was aimed at and what I would need to include in the website to satisfy the needs of the users. 

### Scope plane:
The key features of the website were developed based on the main aim of the website and user needs. Users should be able to do the following on the website:

* Watch a video to learn some simple netball drills parents and children can do at home - I would embed a YouTube video in the HTML code for this feature
* Take a multiple choice quiz to learn more about netball, including the benefits of playing netball - I would write this using JavaScript
* Learn more about the Netball Superleague, by engaging with a map to view where teams are based and learn how to visit their website - I would use a Google Maps API for this feature.
* Sign up to a newsletter, in order to keep interested parents informed about ways they can practise netball and engage their children in netball at home - I would use EmailJS for this feature. 

### Structure plane:

Once I had worked out which features I'd like to include, I began to think about the information architecture and the different interactions that could take place across the site, and the order they should be in. 

I decided on five different sections: ‘About’, 'Skills' - this would include a YouTube video, 'Fun Facts' -  this would contain the quiz, 'Clubs' - this would contain the Google Maps API, and finally 'Newsletter' - this would contain the EmailJS feature.  
I knew I wanted the user to read the About section first, as this would welcome the user and introduce them to the aims of the website. After this the user would move on to three sections based on ways to introduce more netball at home, finally finishing with the option to sign up to the newsletter. 
I wanted the newsletter sign up form to come at the end, as ideally users would be interested in learning more after already trying out some of the activities above this section. 

I decided that although there were 5 different sections, each section was quite small, comprising a key feature accompanied by some text. Therefore I decided to create a one page website. 
I wanted to make it easy for users to navigate between the different sections should they wish, and therefore I decided it would be beneficial to create a fixed nav, as well as a Hamburger icon for smaller devices. 

### Skeleton plane:

I was at this stage ready to put together wireframes. I used Figma for these, creating wireframes for each page on desktop, tablet and mobile. 

I considered using arrows or pointers to guide the user through the different sections but I felt this may actually be frustrating as the sections are only short and so the arrows would appear too quickly after one another. I decided that a 'Back To Top' button on the site would be useful, so the user could quickly move back to the top of the website if they had scrolled far down. They could also click on the nav to move to different areas if they wanted to on mobile. 
On desktop the fixed nav would mean there was always the choice to move to a specific part of the site. 

I decided using a box layout would be a good way to present the information in the different sections, allowing enough space between text, and any key features. 

The wireframes can be viewed on [Figma](https://www.figma.com/file/6uPCcGmqEznG0EXndWxXOn/Milestone-Project-2?node-id=1%3A2)

### Surface plane:

I next moved on to the design work. 

**Colours & Logo:** 
Colours were an important choice as I knew they would help the website feel fun. 
I used Canva to create the logo, and decided on a logo template that had writing accompanied by 
3 circles, which could hint at balls. I therefore needed 3 colours for the circles in the logo. 
 I wanted the colours to be bright, and was inspired by those used in the 'Bee @Home video' I was going to 
use for the Skills section. I therefore decided to use similar colours in the logo and decided to
 alternate these for the different headings too. I used a softer red colour, **#sjfhskjdfd**, a 
 yellow **#djhfkjhdfjk** and a turquiose **#kjhghjghjg**. decided the yellow was a good background 
 for the quiz, as it made the feature stand out with the word still clearly visible and legible. 

 **Fonts:** I used Google Fonts to select the fonts for my project. I wanted to find two fonts that 
 worked well together – one for the logo and headings, and another for the body text. Overall I wanted 
 the design to look modern, whilst also related to netball somehow. I decided round, soft lettering
 would be better suited to the site as opposed to anything sharp and angular. This seemed more friendly
 and also worked well with the circles on the logo. 

For the logo and headings, I decided on using Quicksand and then I used Open Sans for the body text which I thought complimented Quicksand well.

**Images:** I needed a stock image for the hero image section, but it was quite difficult to find a stock image of children playing netball. Therefore I decided on 
a stock image of a netball hoop. I took this from [Unsplash](https://www.unsplash.com) and the information for this image can be found below in the Credits section.

**Layout:** I decided to use different background colours to signal to the user different areas of content. I used a soft 
grey alternating with white for this. These colours also enabled the main brand colours in the headings to stand out, as well as the key features (video, quiz, map, newsletter sign-up).  
 I thought the white and light grey helped to keep a feeling of space on each page too, allowing the images and text to stand out. I decided to give all buttons a dark grey shade with white text on all pages to help them stand out. The layout uses a lot of boxes, with straight edges used across the site.
**QUIZ need to include the change somewhere**

## Features
The project consists of one single page, with five different sections, all of which can be accessed through the menu in the nav bar. 

* Fixed navigation - allows the user to easily navigate to different sections of the page
* 'Back to top' button - enables users to quickly move back to the top of the page 
* 'About Us' - this is a text feature which outlines the aims of the website
* 'Skills' - this section includes some introductory text accompanied with a YouTube video. This video is embedded in the HTML and is set to only play when clicked
(as opposed to autoplay). This video features a skill challenge from England Netball's 'Bee @Home' - simple ball skills parents can watch and then do with their children at home. 
* 'Quiz' - written in JavaScript, this multiple choice quiz contains 4 questions, with a score shown at the end once the user clicks on the button 'Check results'. When the user has received the results they
can then click another button to 'Try Again' if they wish. 
* 'Support Your Local Team' - This sections features Google Maps showing 10 different markers. Each marker represents the location of different Superleague teams. When the marker is clicked the 
user is shown the city or town where the team is based, as well as a link to the team's website which opens up in a new page. This feature was created with a Google Maps API.
* 'Sign up to our newsletter' - this feature has a sign up form to receive a monthly newsletter from the 'The Netball Hub'. Once the user has submitted their name and email address, an email is sent to 
The Netball Hub informing them to add that particular user to the newsletter mailing list. This was created using EmailJS.
**Should I create a modal message?**
* Footer - the footer contains social media icons with links to social media pages that open in a new page. 

### Features to consider implementing in the future:

* The quiz could be developed much further in the future. There could be more questions, possibly being shown on slides. 
* It would be good if once the newsletter form has been completed and submitted, an initial first newsletter is automatically sent to the user. 
## Technologies Used

**Languages, libraries, frameworks, editors and version control**

* HTML5
    * The language used to create and structure sections, paragraphs, headings, links, and add content to the website
* CSS3
    * The language used to style the HTML5 elements 
* JavaScript
    * The language used to create the multiple choice quiz, the Google Maps API feature, and send emails using EmailJS in the newsletter sign up feature. I also used this language for the Scroll to Top button and the Hamburger Icon on smaller screens
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
    * I used the Google Maps API to show users where the superleague netball teams are based, to encourage users to support and watch games
* [EmailJS]()
    *EmailJS allowed me to include a newsletter sign up form in the website, that submits the user's details in an email to The Netball Hub signing them up for the monthly newsletter. 
* [Figma](https://www.figma.com/)
    * I used Figma to create wireframes for my project for desktop, mobile and iPad. 
* [Canva](https://www.canva.com/)
    * I used Canva to create the logo 
* [Unsplash](https://unsplash.com/)
    * This was the source for one of the images in my project, please see the Media section below for more details on this. 
* [Google Fonts](https://fonts.google.com/)
    * I used the following Google fonts for the project: Quicksand and Open Sans 
* [Favicon](https://favicon.io/)
    * I used this website to create the favicon for the website 
* [FontAwesome](https://fontawesome.com/)
    * I also used three social media icons for Twitter, Instagram and Facebook


*Note: I also found [Stack Overflow](https://stackoverflow.com/), [W3C Schools](https://www.w3schools.com/) and [Start Bootstrap](https://startbootstrap.com/) helpful resources throughout the project, as well as the Code Institute Slack Community.

## Testing:

### Testing User Stories:

* New user - *I am a parent with young children and want to find ways of introducing netball to my children as I have been unable to find any local clubs providing netball for their age.* 
This user can read more about why netball is beneficial for young children in the 'About Us' section right at the beginning of the website. This probably reassures the user they are in the right 
place, and they can then visit the 'Skills' section to watch a YouTube video and pick up some skills they can try with their children. They could engage their children in netball straight alway
by involving them in the short quiz, and they can also look on the map to view the location of superleague teams they could start to support and watch if they live close enough. If they don't live
close enough, they could visit the team websites and learn more about them to stimulate wider interest. 

* Returning user - *I am a returning user who previously completed the 'Skills' video with my child. I'm keen to find out where I can access more of these as my children really enjoyed it.*
This user can return to the 'Skills' section, where they will find a link to the England netball web page containing more skills that can be taught at home. 

* Returning user *I am a returning user who has already completed the quiz, and followed the video provided, but I am now looking for further things to do and ways to find out more information about netball.* 
This user will benefit from going to the newsletter sign up feature which is at the bottom of the page. They can access this by either scrolling down the page, or clicking the 'Newsletter' link in the navigation menu. 

* Project stakeholder - *I am one of the owners of the business and want to see it succeed. I want to promote the issue around the lack of netball for young children, and equip parents with ways netball can introduced at home from a young age. I want parents to sign up to the newsletter to continue to promote the benefits of netball and ways young children can engage in the sport.*
The stakeholders need the users to be informed by the website, but also engaged and inspired to promote netball to their children. The 'About Us' section at the very beginning of the webiste is very clear - the text is very visible
and the user is not distracted by any other features at this point. Therefore the issue is communicated at this point, but this then moves straight into ways the issue can be helped. Parents can learn how to do netball skills with their children, 
take a quiz to help educate their children about netball, and also look at an interactive map to learn about superleague teams. The interactive elements on the website along with the colours help to make the website appealing and fun. 

Something about superleague?

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
navigation and other sections


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
-	Loaded GitHub in Chrome web browser and signed in
-	Clicked on [My Repositories](https://github.com/chloelewisdev?tab=repositories)
-	Navigated to [milestone-project-2](https://github.com/chloelewisdev/milestone-project-2)
-	Selected [Settings](https://github.com/chloelewisdev/milestone-project-2/settings)
-	Scrolled down to the GitHub Pages area of the page
-	Selected ‘Master Branch’ from the ‘Source’ dropdown menu
-	Confirmed my selection
-	The Netball Hub is now live on [GitHub Pages](https://chloelewisdev.github.io/milestone-project-2)  

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


<!--I decided that the user would be presented with simple choices on each page – namely: **Home** – view classes or view gallery, on the **Classes** page – submit an enquiry, on the **Gallery** page – send an email, on the **Contact** page – send a message on the contact form. 
 
Because there will be quite a lot of imagery on the pages, I decided whilst doing the wireframes that there needed to be plenty of space on each page to avoid the pages feeling cluttered, leaving the user overwhelmed. 

Whilst doing the wireframes, I also considered whether to include the ‘Image Gallery’ on the homepage. I knew I wanted the user to firstly consider visiting the upcoming classes, so this needed to appear as the first action on the homepage, however I decided the image gallery could actually persuade and encourage the user to view the upcoming classes too, so although this is secondary to the classes page, it is still important and I therefore decided to include this. 


 <img src="https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png" style="margin: 0;">

Welcome chloelewisdev,

This is the Code Institute student template for Gitpod. We have preinstalled all of the tools you need to get started. You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Gitpod and the extensions we use.

## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: *Make Public*,

Another blue button should appear to click: *Open Browser*.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: *Make Public*,

Another blue button should appear to click: *Open Browser*.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

## Updates Since The Instructional Video

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**October 21 2020:** Versions of the HTMLHint, Prettier, Bootstrap4 CDN and Auto Close extensions updated. The Python extension needs to stay the same version for now.

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

--------

Happy coding! -->
