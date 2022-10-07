# LeaderBet

## By Matt Herbert

#### An app that allows users to place bets on thier favorite teams and compete with others!

## Technologies Used

* React
* Html
* CSS
* Bootstrap
* Firebase

## Description

 This app was built to allow users to bet the spread, over/under, and moneyline for various sports games. Winning or losing bets will cause the user to move up or down the global leaderboards, providing a fun way to compete with other users.  

## Setup/Installation

* Copy the git repository url
* Open a shell program & navigate to your machine's desktop
* Clone the repository using the copied URL and the "git clone" command
* In the shell program, navigate to the root directory of the newly created file called "leader-bet"
* Next, run the "npm install" command to install dependencies
* Install firebase with "npm install firebase"
* On the [firebase](https://firebase.google.com/) website, login in with your gmail account and follow the steps to create a project
* Once you create your project be sure to add authentication and firestore database functionalites which can be found under the "build" tab on the "console" page
* In addition, you must add your firebase config settings to a .env file in the root directory of your project, the formatting should match what is in the firebase.js file
* Now in the root directory type "npm run start" to start the program
* If the web page does not open on it's own, open a web browser and plug "http://localhost:3000/" into the URL bar

* This app uses [the-odds-api](https://the-odds-api.com/)
* To make an account, go to their site and follow the instructions to receive your API key
* Store your api key in the .env file like this "ODDS_API_KEY={your api key here}"

## Known Bugs

* On register, user will not be immediatley redirected to main page, please click the button in the top left corner of the navbar
* Currently only moneyline bets for NFL games are supported

## License

[MIT](LICENSE)

Copyright (c) 2022 Matt Herbert