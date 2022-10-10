# LeaderBet

## By Matt Herbert

#### An app that allows users to place bets on thier favorite teams and compete with others!

## Technologies used

* React
* Html
* CSS
* Bootstrap
* Firebase

## Description

 This app was built to allow users to bet the spread, over/under, and moneyline for various sports games. Winning or losing bets will cause the user to move up or down the global leaderboards, providing a fun way to compete with other users.  

## Setup/Installation

### Getting the repo

- Clone the repo to your desktop or any directory of your choice

    ```
    git clone https://github.com/Matth5050/LeaderBet
    ```
- Or download as a zip file
  - Click the green code button on the repository page
  - At the bottom of the popup window select `Download ZIP`
  - Extract the downloaded .zip folder

### Installing dependencies

- Make sure you have [Node.js](https://nodejs.org/en/download/) installed
- Open bash terminal in the top level of this directory
- Run `npm install` to install dependencies

### Adding Firebase config

- This project does not include the firebase API information you need, you must create your own in order to use this app locally

  - Sign up for [Firebase](https://firebase.google.com/)
  - In your firebase console add a project
    - Navigate to the project and register a web app
    - Get your web app's Firebase configuration
      ```
      const firebaseConfig = {
        apiKey: <Your apiKey>,
        authDomain: <Your authDomain>,
        projectId: <Your projectId>,
        storageBucket: <Your storageBucket>,
        messagingSenderId: <Your messagingSenderId>,
        appId: <Your appId>
      };
      ```
    - Add following lines to .env with your firebaseConfig
      ```
      REACT_APP_FIREBASE_API_KEY = <Your apiKey>,
      REACT_APP_FIREBASE_AUTH_DOMAIN = <Your authDomain>
      REACT_APP_FIREBASE_PROJECT_ID = <Your projectId>
      REACT_APP_FIREBASE_STORAGE_BUCKET = <Your storageBucket>
      REACT_APP_FIREBASE_MESSAGING_SENDER_ID = <Your messagingSenderId>
      REACT_APP_FIREBASE_APP_ID = <Your appId>
      ```
  - In the project on the left hand panel add Authentication
    - Select Sign-in method and add Email/Password
  - In the project on the left hand panel add Firestore Database

### API setup
* This app uses [the-odds-api](https://the-odds-api.com/)
* Creat a .env file in the root directory
* To make an account, go to their site and follow the instructions to receive your API key
* Store your api key in the .env file like this "REACT_APP_API_KEY={your api key here}"
* Add your odds-api key to the .env

    ```
    REACT_APP_API_KEY=<Your api key>
    ```

### Final steps
* Now in the root directory type "npm run start" to start the program
* If the web page does not open on it's own, open a web browser and plug "http://localhost:3000/" into the URL bar

## Known bugs

* On register, user will not be immediatley redirected to main page, please click the button in the top left corner of the navbar
* Currently only moneyline bets for NFL games are supported
* Currently working to implement correct API usage for scores

## License

[MIT](LICENSE)

Copyright (c) 2022 Matt Herbert