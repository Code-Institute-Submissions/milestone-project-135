# The Netball Hub

## Code Institute - Milestone Project 2

![The Netball Hub responsive website mockup](https://github.com/chloelewisdev/milestone-project-2/blob/master/assets/images/mockupscreenshot.png)

The Netball Hub is a fictional organisation that aims to inform parents with young children about the benefits of playing netball from a young age, and to provide different ways parents can engage their children in the sport.

The idea for this website came to me as I am a keen netball player who wants to encourage my children to get involved in the sport from a young age. Often netball clubs are only available for children in their upper primary years, however I think even younger children would benefit from learning more about the sport. As a parent I have looked at ways to encourage my children’s interest in the sport, and I thought it might be useful to create a platform that shares these ideas for other people in a similar situation.  

This was the second of four Milestone Projects that made up the Full Stack Web Development Program at The Code Institute. The main requirements were to make an interactive and responsive website with HTML5, CSS3 and JavaScript.

Click [here](https://chloelewisdev.github.io/milestone-project-2/) to view the website live. 

## Table of Contents:

* [User Experience](#User-Experience)
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

* [Deployment](#Deployment)

* [Credits](#Credits)
    * [Content](#Content)
    * [Media](#Media)

* [Acknowledgements](Acknowledgements)

## **User Experience**
This section provides insight into the UX process, focusing The Netball Hub website’s target audience, the main aims of the project and how the website can help users meet their needs.  

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

I started the UX process by creating the User Stories above which helped me work out who the project was aimed at and what I would need to include in the website to satisfy the needs of the users. 

The website should be professional, so that the main messages are clearly communicated, but also interactive, fun and engaging so that the content is appealing too. Therefore the website should be user-friendly, providing an easy navigation journey to reach different sections with ease. 

**Project goals:**
* To promote the benefits of playing netball for young children
* To provide netball-related activities that can be used by parents and care-givers in order to engage and interest children in the sport at home
* To obtain subscriptions for a newsletter mailing list, increasing the customer database
* Provide direction to social media links, in order to expand followers and increase brand awareness
* To make The Netball Hub seem a reputable company, by creating a professional website, whilst maintaining a fun appeal.

**Customer goals:**

* Website designed with mobile-first approach
* Fixed navigation bar providing a user-friendly experience
* Relevant social media icons provided in the footer
* Contact form so the customer can sign up to a newsletter
* Website is visually appealing, and fully responsive on all devices and screen sizes

### Scope plane:
The key features of the website were developed based on the main aims of the website and user needs, as well as my current skill-set of HTML, CSS, JavaScript and API use. Users should be able to do the following on the website:

* Watch a video to learn some simple netball drills and ball skills parents and children can do at home – I would embed a YouTube video in the HTML code for this feature, plus a link to the England Netball website where more videos can be found.
* Take a multiple-choice quiz to learn more about netball, including the benefits of playing netball as well as some fun facts about the sport - I would write this using JavaScript. 
* Learn more about England’s Vitality Netball Superleague, by engaging with a map to view where the superleague teams are based, and also have the opportunity to click on a links on each map marker to visit the individual team websites - I would use the Google Maps API for this feature.
* Sign up to a newsletter, in order to keep interested parents informed about ways they can practise netball and engage their children in netball at home - I would use EmailJS for this feature. 

### Structure plane:

Once I had worked out which features I'd like to include, I began to think about the information architecture and the different interactions that could take place across the site, and the order they should be in. 

I decided on five different sections: 
1)  ‘About’ – this would be an introductory text section explaining the aims of the website and describing the benefits of netball.
2)  'Skills' – this section would include a YouTube video
3)  'Fun Facts' – this section would contain the multiple-choice quiz
4)  'Clubs' - this section would contain the Google Maps API
5)  'Newsletter' - this section would contain the EmailJS feature. 

Therefore the main interactions will be (in the following order) – click on embedded YouTube video to watch the video, play the quiz by clicking on radio buttons to select multiple choice answers, followed by checking score results, engage with the map by clicking on markers, complete the fields in the form to sign up to the newsletter. 

I decided on this order as it made logical sense to me to have the introductory ‘About’ section at the beginning. Next, I decided the video was a good way to quickly show the user that they can take very simple steps in order to introduce netball skills at home. The quiz sits in the middle, followed by the map and finally it seemed logical that the newsletter sign-up form was the final section of the website, as ideally users would be keen to learn more after already engaging in the sections above.
 
Points of contact are provided with the newsletter e-mail contact form, and links to social media in the footer. 
### Skeleton plane:

At this stage I was ready to put together wireframes. I used Figma for these, creating wireframes for the website on desktop, tablet and mobile all showing the five main sections. 

I wanted to make sure it would be easy for users to navigate between the different sections within the one page, and therefore I decided it would be essential to create a fixed nav, as well as a Hamburger icon for smaller devices so that the user could easily choose to move to a different section on the site if they wished. 

I considered using arrows or pointers to guide the user through the different sections but I felt this may actually provide a negative user-experience and actually be quite frustrating, as the sections are quite short and so the arrows would appear too quickly after one another. 

I decided that a 'Back To Top' button on the site would be useful however, so the user could quickly move back to the top of the website if they had scrolled far down.

I decided using a box layout would be a good way to present the information in the different sections, allowing enough space between text, images and any key features. 

The wireframes can be viewed on [Figma](https://www.figma.com/file/6uPCcGmqEznG0EXndWxXOn/Milestone-Project-2?node-id=1%3A2)

### Surface plane:

I next moved on to the design work. 

**Colours & Logo:** 
Colours were an important choice – it became apparent quite early on when I was doing research that it would be quite difficult to find stock images of children playing netball. Therefore I knew the colours would be integral in giving the website a ‘fun’ appeal and making it look attractive to both adult and children (if adults decided to share parts of the site, such as the quiz or map, with the child for example). 
 
I used Canva to create the logo and decided on a logo template that had writing accompanied by 3 circles, which could hint at netball balls. I therefore needed 3 colours for the circles in the logo. 

I wanted the colours to be bright, and was inspired by those used in the 'Bee @Home video' I had decided to use for the Skills section, from the England Netball website. I therefore decided to use similar colours in the logo and decided to
 alternate these for the different headings too. I used a softer red colour, #ff4d4d a yellow #ffcc00 and a turquiose #17a2b8. I also decided the yellow was a good background for the quiz, as it would make the feature stand out whilst ensuring the words would still be clearly visible and legible. 

I also decided to use the circles to add some extra design to the ‘About’ and ‘Quiz’ section, which looked quite flat with only text and a white background. 

 **Typography:** I used Google Fonts to select the fonts for my project. I wanted to find two fonts that worked well together – one for the logo and headings, and another for the body text. Overall I wanted the design to look modern, whilst also related to netball somehow. I decided round, soft lettering would be better suited to the project as opposed to anything sharp and angular. This seemed more friendly
and also worked well with the circles on the logo.

For the logo and headings, I decided on using Quicksand and then I used Open Sans for the body text which I thought complimented Quicksand well.

**Images:** I needed a stock image for the hero image section, but it was quite difficult to find a stock image of children playing netball as mentioned above. Therefore I decided on a stock image of a netball hoop with blue sky in the background. This gives the idea that netball isn’t just a sport that is played indoors in a sports hall, but also is a sport that can be enjoyed outside too – which is all part of the idea being communicated to parents – for example playing with a ball in the garden. It would have been even better if it was a shot of a netball, however I was unable to find a suitable stock image of this. I took the chosen stock image from [Unsplash](https://www.unsplash.com) and the information for this image can be found below in the Credits section.

**Layout:** I decided to use different background colours to signal to the user different areas of content. I used a soft grey alternating with white for this. These colours also enabled the main brand colours in the headings and subtitles to stand out, as well as the key features (video, quiz, map, newsletter sign-up).  

## Features
The project consists of one single page, with five different sections, all of which can be accessed through the menu in the fixed navigation bar at the top of the page. 

**Existing Features** 

* Fixed navigation - allows the user to easily navigate to different sections of the page. The nav bar also displays The Netball Hub’s logo in the top left corner. 
* 'Back to top' button - enables users to quickly move back to the top of the page rather than scrolling back up
* 'About Us' - this is a text section which outlines the project focus
* 'Skills' - this section includes some introductory text accompanied with a YouTube video from England Netball’s Bee@Home programme - featuring a skills challenge and simple ball skills that can watched and then copied at home. This video is embedded in the HTML and is set to only play when clicked therefore the user has control over playing and stopping/pausing the video. 
* 'Quiz' – title and introductory text explains to the user how to play the quiz. This multiple-choice quiz contains four questions, each with two answers of which the user needs to select one (by clicking on a radio button). For each correct answer the user gains one point, and once the user has completed the questions, they can click on the button 'Results' which reveals a hidden element underneath the quiz that shows the user their score. When the user has received their score, they can then click another button 'Try Again', which refreshes the quiz, sets the score back to zero, and gives the user the chance to start the quiz again from the beginning if they wish. This quiz is written in JavaScript.
* 'Netball Superleague’ - This sections features a map showing 10 different Google Map Markers. Each marker represents the location of different Superleague teams across England, Wales and Scotland. When the user clicks the marker, the name of the team is shown as well as a link to the team's website which opens up in a new webpage if clicked. This feature was created with a Google Maps API.
* 'Sign up to our newsletter' - this feature has a sign-up form where the user inputs their First Name, Last Name and Email into a form. They then click on the ‘Sign Up’ button, which validates the form (if the user hasn’t added information to each field they are shown a message on the form showing them the field that still  needs to be complete in order to submit). Once all required fields have been completed, the user is then shown a modal message thanking them for signing up. The user can then click the ‘close’ button in the modal message, the page refreshes and the form is submitted. An email is then sent to The Netball Hub (as this is fictional I used the email address chloelewiswebdev@gmail.com) with information about the user (first name, last name and e-mail address) so that the company can add them to the newsletter mailing list. And an auto-reply email is also sent to the user, thanking them for the sign-up and informing them that they will receive a newsletter from The Netball Hub in their inbox shortly. This feature was created using EmailJS.
* Footer - the footer contains social media icons with links to social media pages that open up in a new page. 

### Features to consider implementing in the future:

* The quiz could be developed much further in the future. There could be more questions, with each question possibly being shown on a different slide. Also possibly adding a feature such as countdown timer to the quiz could make it a fun experience for the user. 
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
* [JQuery](https://jquery.com/)
    * I used the JQuery library to add or remove the active class on the nav bar, so that users on desktop could clearly see which section they were viewing. JQuery is also used for showing the modal message once the user has submiited the newsletter sign-up form. 
* [Gitpod](https://www.gitpod.io/)
    * I used Gitpod's development environment to write the code for the website
* [Git Version Control](https://git-scm.com/)
    * I used Git for Version Control to record changes and updates to my files
* [GitHub](https://github.com/)
    * I used GitHub’s repository hosting service to host my deployed website as well as track previous versions of my code 

**Other tools used:**

* [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview)
    * Interactive map with 10 map markers 
* [EmailJS]()
    * EmailJS used for the newsletter sign-up form.
* [Figma](https://www.figma.com/)
    * I used Figma to create wireframes for my project for desktop, mobile and iPad. 
* [Canva](https://www.canva.com/)
    * I used Canva to create The Netball Hub’s logo 
* [Free Images](https://www.freeimages.com/)
    * This was the source for the hero image in my project, please see the Media section below for more details on this. 
* [Google Fonts](https://fonts.google.com/)
    * I used the following Google fonts for the project: Quicksand and Open Sans 
* [Favicon](https://favicon.io/)
    * I used this website to create the favicon for the website 
* [FontAwesome](https://fontawesome.com/)
    * I also used three social media icons for Twitter, Instagram and Facebook

**Resources**

* [Code Institute Course Content](https://courses.codeinstitute.net/) – Main source of knowledge
* Code Institute **SLACK Community** - General resource
* [Stack Overflow](https://stackoverflow.com/) – General resource
* [W3C Schools](https://www.w3schools.com/) 
* [CSS-Tricks](https://css-tricks.com/) - General resource
* [Youtube](https://www.youtube.com/) - General resource for JavaScript, and also used for the England Netball Bee@Home video displayed on the website
* [Am I Responsive](http://ami.responsivedesign.is/) - Responsive website mockup image generator.
* [Bootstrap Grid Explanation by Anna Greaves](https://ajgreaves.github.io/bootstrap-grid-demo/) – Resource used for Bootstrap grid layouts

## Testing:

Testing documentation can be found on a separate document [HERE](https://github.com/chloelewisdev/milestone-project-2/blob/master/assets/docs/testing.md)

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

**Deploying with Google Maps API**

For this project, I also used a Google Maps API. I integrated this to my website in the following way:
1.  I navigated to Gooogle's Getting started with Google Maps Platform, where I set up an account my account.
2.  From there I decided to use the 'Maps JavaScript API' and an API key with these steps on here.
3.  Once I had set up my Google Maps feature in my project as described here, I restricted the key's access to only my project's URL to limit its use for no other purposes.
The above process can be copied if you would like to deploy a project with the Google Maps API feature.

**Deploying with EmailJS**

I used EmailJS to automatically send me an email each time a user submits the Newsletter form. This feature can be implemented as follows:
1.  I created an account with EmailJS and navigated to this page
2.  I followed the steps from the tutorial, creating a template and adding the EmailJS javascript library to my project.
3.  I chose to stay with a free account, which limits my monthly quota to 200 emails per month.
The above process can be copied if you would like to deploy a project with the EmailJS service.

To deploy your own version of the website:

- Have git installed
- Visit the repository
- Click 'Clone or download' and copy the code for http
- Open your chosen IDE (Cloud9, VS Code, etc.)
- Open a terminal in your root directory
- Type 'git clone ' followed by the code taken from github repository 
- When this completes you have your own version of the website. Feel free to make any changes to it. 

The website can be run by opening the HTML file within a web browser.

Visit the link provided. Your website with any made changes will appear.

Saved changes to the website will appear here after refreshing the page.

The benefits of hosting your website on GitHub pages is that any pushed changes to your project will automatically update the website. Development branches can be created and merged to the master when complete. It may take a moment for changes to appear on the hosted website.

## Credits

### Content
The content for this website is fictional and written by myself. The hero image used on the website was taken from Free Images and is referenced below.  The video for the 'Skills' section was taken from the Bee Netball section of the England Netball's website and is fully referenced below.

I found the Code Institute Slack Community's Peer Code Review channel really useful to look through when considering the content for this project. 

### Media
* The stock image used for the hero image was taken by Craig Elliot and can be found at the following link: [Free Images](https://www.freeimages.com/photo/blue-sky-at-netball-court-1140567)

* The video used in the Skills section of the website was taken from England Netball's [YouTube channel](https://www.youtube.com/watch?v=3tYHHySKIf0&feature=youtu.be)

## Acknowledgements
Thanks to my mentor Seun Owonikoko for her useful suggestions and time with this project.  

Thanks to the Code Institute Slack Community.

Thanks also to my family and friends for taking the time to look over the website, test the features and for providing feedback.

