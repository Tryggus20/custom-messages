import "./App.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const guests = useSelector((store) => store.guests);
  const hotels = useSelector((store) => store.hotels);
  const [selectedGuest, setSelectedGuest] = useState("");
  const [selectedHotel, setSelectedHotel] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    dispatch({ type: "FETCH_GUESTS" });
    dispatch({ type: "FETCH_HOTELS" });
  }, [dispatch]);
  console.log(guests, hotels);
  const sendMessage = () => {
    const guest = guests.find((g) => g.id.toString() === selectedGuest);
    const hotel = hotels.find((h) => h.id.toString() === selectedHotel);
    if (!guest || !hotel) {
      alert("Please select both a guest and a hotel.");
      return;
    }
    const message = `Hello ${guest.first_name} ${guest.last_name}, your room number is ${guest.room_number} at ${hotel.company}.`;
    setMessages((prevMessages) => [...prevMessages, message]);
  };
  // for custom message, if no time, say hello. otherwise populate with good morning, afternoon, evening
  // REMINDER: TODO: translate to correct time (and timezone)
  return (
    <div>
      <select
        value={selectedGuest}
        onChange={(e) => setSelectedGuest(e.target.value)}
      >
        <option value="">Select a Guest</option>
        {guests.length > 0 ? (
          guests.map((guest) => (
            <option key={guest.id} value={guest.id}>
              {guest.first_name} {guest.last_name}
            </option>
          ))
        ) : (
          <option>Loading guests...</option>
        )}
      </select>

      <select
        value={selectedHotel}
        onChange={(e) => setSelectedHotel(e.target.value)}
      >
        <option value="">Select a Hotel</option>
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <option key={hotel.id} value={hotel.id}>
              {hotel.company}
            </option>
          ))
        ) : (
          <option>Loading hotels...</option>
        )}
      </select>

      <button onClick={sendMessage}>Send Message</button>
      <br />

      {/* Display messages */}
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
