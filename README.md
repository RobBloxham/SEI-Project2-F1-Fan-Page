# Project2 F1 Fan Page

## Description
F1 fan app/website with a message board, chatroom, information on drivers, information on teams, and current standings.  Most features are behind google oath.</br>
View the app [here](https://sei-project2-f1-fans.herokuapp.com/)</br>

## Visuals
Trello Board
[trello](https://trello.com/b/qAnhxNgY/project-2-f1-fans)
Wireframe
![Trello Attachment](https://trello-attachments.s3.amazonaws.com/5f46c567a9af48168aa00564/5f47e53f78226f37255f4214/0e5da879f16402718adb8d7de20689e7/Screen_Shot_2020-08-27_at_5.09.40_PM.png)</br>
ERD
![lucidchart](https://trello-attachments.s3.amazonaws.com/5f46c567a9af48168aa00564/5f47e019dff4fa795b50dd2e/5539dd31b3036cf6a185be9c62d2decc/SEI-Project2-F1_(1).png)</br>
Screen shots
![Trello Attachment](https://trello-attachments.s3.amazonaws.com/5f514f9195347850891c7d4b/990x716/37598f694a47c712546075b9cb102bf1/screenshot.png)</br>
![Trello Attachment](https://trello-attachments.s3.amazonaws.com/5f46c567a9af48168aa00564/5f514f9195347850891c7d4b/2c0b87f939777752d72fd950ad0ca2dd/Screen_Shot_2020-09-03_at_1.16.28_PM.png)</br>
![Trello Attachment](https://trello-attachments.s3.amazonaws.com/5f46c567a9af48168aa00564/5f514f9195347850891c7d4b/f6f0e1464faa41fb06035014eff7323b/Screen_Shot_2020-09-03_at_1.16.01_PM.png)</br>

## User Story/Persona
Paul is an avid F1 fan, he subscribes to F1 TV to watch the races and uses the F1 website to keep up with the news and races.  However, none of Paul’s close friends or family really care for F1 and he is looking for somewhere he can go to exclusively talk about the sport.  Paul wants to be able to go to the app/site and select his current favorite driver, team, and track so that other users can see who or what his favorites are in those categories.  He would like a message board where people can share messages and reply to keep conversations going.  Paul would also like to have the ability to comment on his favorite track so he can share what he enjoys about it.  </br>

## User Experience
1. User opens landing page and clicks button for animation and redirect
2. User can view message board, but all other site functionality is behind google oauth.  A message directs the user to login and recommends they update their profile.
3. User can click login with google or when attempting to access any other site features will be directed to the google login.  Once logged in the user will be redirected back to the messages page.
4. Logged in user can update their profile with the following: Alias, Avatar Image URL, Bio, Favorite Track, About Favorite Track. 
5. Logged in user has access can post a message, view previously posted messages, click on a link that shows a detailed view of the message and shows any replies and on this view if they are the author of the message they can delete it. 
6. Logged in user can enter the live chatroom and chat.
7. Logged in user can view the current F1 Drivers index, click on about driver and see more driver details. On the details page they can click a button to add or remove the driver as their favorite,
8. Logged in user can view the current F1 Teams index, click on an about team and see more team details.  On the details page they can also click a button to add or remove the team as their favorite.
9. User can view current F1 standings, this page makes an API call to retrieve the latest information.
10. User can log out by clicking LogOut</br>


## Contributing
"Door, Front, Opening, A.wav" by InspectorJ [www.jshaw.co.uk](www.jshaw.co.uk) of [Freesound.org](Freesound.org)</br>
"Door, Front, Closing, A.wav" by InspectorJ [www.jshaw.co.uk](www.jshaw.co.uk) of [Freesound.org](Freesound.org)</br>
404 animation thanks to Kieran Hunter [codepen](https://codepen.io/kieranfivestars/pen/MYdQxX)</br>
404 car image via [Pinclipart](https://www.pinclipart.com/pindetail/bTTmwb_car-wheel-clipart-side-view-race-car-icon/)</br>

## Technologies Used
NodeJS</br>
ExpressJS</br>
Express Generator</br>
MongoDB</br>
MongooseJS</br>
MongoDB Atlas</br>
EJS Templating</br>
Heroku with NodeJS</br>
Fetch in JS</br>
Postman API Development</br>
Google OAuth 2.0</br>
PassportJS</br>
It utilizes 2 API's for information sportsradar.com's F1 API for driver and team information and ergast.com's API for current driver and construction standings. </br>
As well as Random cats! from theoldreader.com/kittens as placeholder avatar images. </br>
Semantic UI is used for stylizing.</br>



## Authors and acknowledgment
I am a General Assembly Software Engineering Immmersive fellow.</br>
A thank you once again to my cohort mates, instructors, and IndigoPunch for the help and nudge in the right direction when I hit any roadblocks.</br>


## Project status
This project is currently complete in its current iteration. </br>

However, any user feedback requesting new features I will consider and add time permiting. </br>

Suggestions: Add track layouts so peopel can get an idea of what an F1 track looks like. </br>