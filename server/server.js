const express = require('express');
const app = express();
const pool = require("./modules/pool");
const bodyParser = require('body-parser');


app.use(bodyParser.json()); // needed for angular requests
app.use(express.static("build"));

const PORT = process.env.PORT || 5000;
/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// Was planning on making routers for this project but decided not to due to the simplicity

// decided to order by DESC so the newest guest would show up on top
app.get("/guests", (req, res) => {
    const query = `SELECT g.*, r.room_number, r.start_timestamp, r.end_timestamp
                   FROM guests g
                   JOIN reservations r ON g.id = r.guest_id
                   ORDER BY g.id DESC;`;
    pool.query(query)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        console.log("error in getting all guests", err);
        res.sendStatus(500);
      });
  });

  // route for all hotels
app.get("/hotels", (req, res) => {
    const query = `SELECT * FROM hotels;`;
    pool.query(query)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        console.log("error in getting all hotels", err);
        res.sendStatus(500);
      });
  });
app.get('/test', (req, res) => {
    res.send('Test route working');
  });