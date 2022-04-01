# ShOwCIAL 🎤
### Welcome to ShOwCIAL! 🎹
ShOwCIAL delivers a social experience for event discovery, organization, and the purchasing of concert tickets. ShOwCIAL allows users to search for concert events based on keyword and location. Users can search for Adele in Boston, Rock concerts in Detroit, or Country Music events in Dallas... the options are endless!

The app also allows for users to customize their social profiles, to include artists and genres they are interested in, a bio to share with friends, and even a favorite Spotify™ playlist!

Being able to see all profiles on the app, users can add friends and see what events they are interested in!

## 👀 Take a look at ShOwCIAL [HERE](https://nconcert-front-end.herokuapp.com/)

---
## Meet the Developers! 🤝

### 🧑‍💻 Howard Barrons
During development, Howard acted as Database and API manager, back-end connoisseur, and full stack developer.

    🏆 project commits to date: 

### 👩‍💻 Sarah Picard 
During development, Sarah acted as GitHub manager, Designer, styling expert, and full stack developer.

    🏆 project commits to date:

## Wireframing & Concept 📝

![wireframe](https://i.imgur.com/SH0tmaV.png)
Prior to project start, wireframing was completed by Sarah to show ideal project design and flow. The above screenshot details a basic design concept prior to beginning the project. 

![Imgur](https://i.imgur.com/5npeF8s.png)
The entity relationship diagram (ERD) above details schema and model relationships developed during the project planning process. 

Project planning materials are held in [this](https://trello.com/b/XERFYuq5/nconcert) public Trello board.

---
## Using ShOwCIAL 🎤🎶
Upon first entering the app, users will be greeted with a landing page, allowing for immediate event search, even before login. 
Via a left-hand navigation bar, users can choose to login, sign up for a new account, or navigate to a specific event search page.

![Imgur](https://i.imgur.com/OzeIyuU.png)

After searching for an event with keyword and U.S. city, the user will be shown a list of paginated events matching their query. All event data is returned via the [Ticketmaster Discovery API](https://developer.ticketmaster.com/).
![Imgur](https://i.imgur.com/VYYC282.png)

In order for the user to save events they are interested in or are attending, they will need to login or sign up for a new account using the left-hand navigation options. 

Once a user is logged in, the navigation bar dynamically changes based on user status, and allows for navigation to a My Events page, Find Users page, and Change Password page. 

Once the user has found an event they would like more information about, clicking anywhere in the searched event card will render an event detail page. 
![Imgur](https://i.imgur.com/1iTQXvF.png)

The event detail page provides event information directly from the [Ticketmaster Discovery API](https://developer.ticketmaster.com/). 
Depending upon available event information, users will be able to see date and time of the event, venue information, accessible seating information, a venue seating map, parking details, and even a link to buy tickets directly from the event's website! 🎟

As a logged in user, the "interested" and "attending" buttons allow for you to keep all of your events in one place, and even allow for your friends to see what concerts you are interested in. 

The My Events page keeps track of all concerts for you! Whether you are attending, or just interested in the event, details can be found on the My Events page. 
![Imgur](https://i.imgur.com/vQD8EKC.png)
Users are even able to purchase tickets for a specific event right from the My Events page. 
Just in case you are no longer interested or attending an event, a "delete" button is present so that the user can keep their lists organized!

Aside from search navigation and saving event information for later, users can also view the profiles of everyone else using the app and "friend" or "unfriend" them as desired. 

Viewing a friend's profile allows you to see what events they are interested in, but restricts access to important privacy information for user safety. 

In case a user should need to update their profile, add a new bio, a new favorite Spotify™ playlist, or change favorite genres and artists - navigation to updating the profile information is simple, just view your profile from the home page and click "update profile." 

This app was created for everyone who enjoys music events, so get out and be ShOwCIAL! 💃

--- 
## Technologies Used 💻
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

