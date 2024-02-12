# The Phone Cave (WD)

The Phone App is a web app which displays a phone catalogue. 
It is a mock tech-challenge. 

## Setup

- Fork this repo: 
- Clone this repo: git clone <repo-url>
- Navigate to cloned repo: cd <repo-name>
- Install npm dependencies: npm i
- Run depelopment script: npm run dev

### Back-end REST API (NodeJS)

Back-end endpoints:

| Route                 | HTTP Verb | Description    |
| --------------------- | --------- | -------------- |
| `/phones`             | GET       | Show all phones |
| `/phones/:id`         | GET       | Show a phone details|


### Front-end (React app)

The created app communicates with the API server to show all phones and all phone details. 
It consists of two pages:
- Homepage: welcomes the user and includes an action button that leads the user to the page whcih displays all the phones the fictitious shop sells.
- PhoneList Page: displays all the phones in the database. The user sees the phone names and images. Upon clicking on the button 'See details', the user will see further details (such as e.g. manufacturer and price) about the phone, including its technical specifications. 

### Technologies used

- ReactJS
- NodeJS
- ExpressJS
- MongoDB: instead of reading data from the json file provided, I decided to practice and setup a database which imports data from the provided json file. 
- ReactJS
- CSS


 
