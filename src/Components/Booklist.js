import React from 'react';



const Booklist = ({ bookings }) => {
  return (
    <div>
      <h2>Booked Services</h2>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
           {booking.service} - {booking.date} - {booking.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booklist;
