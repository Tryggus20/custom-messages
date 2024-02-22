CREATE TABLE guests (
  id INT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL
);

CREATE TABLE reservations (
    id SERIAL PRIMARY KEY,
    guest_id INTEGER NOT NULL REFERENCES guests(id),
    room_number INTEGER NOT NULL,
    start_timestamp BIGINT NOT NULL,
    end_timestamp BIGINT NOT NULL
);

CREATE TABLE hotels (
  id INT PRIMARY KEY,
  company VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  timezone VARCHAR(255) NOT NULL
);

-- Insert for Hotel data
INSERT INTO hotels (id, company, city, timezone)
VALUES (1, 'Hotel California', 'Santa Barbara', 'US/Pacific'),
       (2, 'The Grand Budapest Hotel', 'Republic of Zubrowka', 'US/Central'),
       (3, 'The Heartbreak Hotel', 'Graceland', 'US/Central'),
       (4, 'The Prancing Pony', 'Bree', 'US/Central'),
       (5, 'The Fawlty Towers', 'Torquay', 'US/Eastern');

-- Insert for Guest data
INSERT INTO guests (id, first_name, last_name)
VALUES (1, 'Candy', 'Pace'),
       (2, 'Morgan', 'Porter'),
       (3, 'Bridgett', 'Richard'),
       (4, 'Melisa', 'Preston'),
       (5, 'Latoya', 'Herrera'),
       (6, 'Hewitt', 'Hopper');


-- Insert for Reservations with foreign key of Guest
INSERT INTO reservations (guest_id, room_number, start_timestamp, end_timestamp) VALUES
(1, 529, 1486654792, 1486852373),
(2, 385, 1486612719, 1486694720),
(3, 141, 1486520344, 1486769616),
(4, 417, 1486614763, 1486832543),
(5, 194, 1486605110, 1486785126),
(6, 349, 1486660637, 1486788273);

-- For later...
SELECT g.*, r.room_number, r.start_timestamp, r.end_timestamp
FROM guests g
JOIN reservations r ON g.id = r.guest_id;

Select * from hotels;

