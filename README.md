# Project2 F1 Fan Page

## Description
F1 fan website with a message board, chatroom, information on drivers, information on teams, and current standings.  Most features are behind google oath.</br>
View the app [here](https://sei-project2-f1-fans.herokuapp.com/)<br/>

## Visuals
Wireframe
![Trello Attachment](https://trello-attachments.s3.amazonaws.com/5f46c567a9af48168aa00564/5f47e53f78226f37255f4214/0e5da879f16402718adb8d7de20689e7/Screen_Shot_2020-08-27_at_5.09.40_PM.png)<br/>
ERD
![lucidchart](https://app.lucidchart.com/documents/view/32d87ee2-1a71-4746-8904-5594eef1ab32/0_0)<br/>

## User Story/Persona
Paul is an avid F1 fan, he subscribes to F1 TV to watch the races and uses the F1 website to keep up with the news and races.  However, none of Paul’s close friends or family really care for F1 and he is looking for somewhere he can go to exclusively talk about the sport.  Paul wants to be able to go to the site and select his current favorite driver, team, and track so that other users can see who or what his favorites are in those categories.  Paul would like a message board where people can share messages and reply to keep conversations going.  Paul would also like to have the ability to comment on his favorite track so he can share what he enjoys about it.  </br>

##User Experience
1. User opens landing page and clicks button for animation and redirect
2. User can view message board, but all other site functionality is behind google oauth.  A message directs the user to login and recommends they update their profile.
3. User can click login with google or when attempting to access any other site features will be directed to the google login.  Once logged in the user will be redirected back to the messages page.
4. Logged in user can update their profile with the following: Alias, Avatar Image URL, Bio, Favorite Track, About Favorite Track. 
5. Logged in user has access can post a message, view previously posted messages, click on a link that shows a detailed view of the message and shows any replies and on this view if they are the author of the message they can delete it. 
6. Logged in user can enter the live chatroom and chat.
7. Logged in user can view the current F1 Drivers index, click on about driver and see more driver details. On the details page they can click a button to add or remove the driver as their favorite,
8. Logged in user can view the current F1 Teams index, click on an about team and see more team details.  On the details page they can also click a button to add or remove the team as their favorite.
9. User can view current F1 standings, this page makes an API call to retrieve the latest information.
10. User can log out by clicking LogOut<br/>

The site is scalablel to mobile devices!<br/>

## Contributing
"Door, Front, Opening, A.wav" by InspectorJ [www.jshaw.co.uk](www.jshaw.co.uk) of [Freesound.org]Freesound.org<br/>
"Door, Front, Closing, A.wav" by InspectorJ [www.jshaw.co.uk](www.jshaw.co.uk) of [Freesound.org](Freesound.org)<br/>

## Technologies Used
The app was built with a MEN stack. <br/>
It utilizes 2 API's for information sportsradar.com's F1 API for driver and team information and ergast.com's API for current driver and construction standings. <br/>
As well as Random cats! from theoldreader.com/kittens as placeholder avatar images.
Semantic UI is used for stylizing.<br/>



## Authors and acknowledgment
I am a General Assembly Software Engineering Immmersive fellow.<br/>
A thank you once again to my cohort mates, instructors, and IndigoPunch for the help and nudge in the right direction when I hit any roadblocks.<br/>


## Project status
This project is currently complete in its current iteration. <br/>

However, any user feedback requesting new features I will consider and add time permiting. <br/>