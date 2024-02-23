# Custom Message Generator

This application helps automate text messages to guests about their stay at a hotel. Once you select the correct guest and hotel, the app will generate a custom message with a greeting specific to the time of day (based on timezone), the guest's name, room number, hotel name, and an invitation to reach out if any issues arise.

## Getting Started

1. On Github, click on the green "Code" button and download ZIP.
2. Unzip file and open with your favorite code editor (I used Visual Studio Code).
3. Follow the instructions in the db.sql file to set up the database. (I used Postico 2)
4. run "npm i" in the code editor's terminal to make sure all of the node modules install correctly
5. In the code editor's terminal run "npm run server" and in a second terminal run "npm run client"
6. That should automatically open up a webpage. If it does not, go to http://localhost:3000/
7. Pick a guest, hotel, and click the button and enjoy the results!

## Dependencies:

Before you begin, ensure you have installed the following:

- [Postico 2](https://eggerapps.at/postico2/) for database management.
- [VS Code](https://code.visualstudio.com/) or any code editor of your choice.
- [Node.js](https://nodejs.org/en/download/) for running the application.

## Design Decisions

I decided to create a database due to the practical use of one. It would not take many changes to hook this application into an already existing database and be ready to go.

I also decided to add a basic front-end GUI for the ease of selecting a guest and hotel by mapping through each and only having those options available. It is also easier on the eyes to see the results.

I was originally planning on having routers, but since the project was so small, I felt like that would have taken more effort than what it was worth. Same thing went for components on the front end.

It was my first time dealing with Unix timestamps so that was a fun puzzle to figure out and implement.

I decided to go with Javascript due to to it being the language I am most comfortable with at the moment. I am sure there are languages that would be better suited for this project, but I am still learning them.

## Data Validation

My process for data validation was fairly straight forward. I console.log'd a fair amount to make sure everything was showing up correctly. And of course, when it got to the actual front end, I tested all of the possibilities and made sure the message was what I was expecting. Due to the app's lack of ability to change anything in the database, I did not feel the need for too much validation. With scaling, that would change.

## Potential Upgrades

If I put more time into this project, I would have implemented a search function for both guests and hotels. With the current data set, it is not needed but with scalability, that quickly becomes a problem. I would also add the ability to add new guests and hotels (with all of the validation that goes with that). Maybe a welcome back message for repeat guests? And of course, give the front end more styling with either Bootstrap or Material UI. The actual ability to send the message outside of the browser may be a good addition as well!

## The End

I hope you enjoy reviewing my code. I enjoyed creating and thinking about solutions to the problems of this unique application.
