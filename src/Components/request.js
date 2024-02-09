import React from "react";
import './Dashboard.css';
import { useState } from "react";
import Bookform from "./Bookform";
import Booklist from "./Booklist";



function Request(){
    const [bookings, setBookings] = useState([]);

    const handleBook = (booking) => {
      setBookings([...bookings, booking]);
    };


    return(
        <><div className="container">
        <div className="ex">
  <Bookform onBook={handleBook} />
  <Booklist bookings={bookings} />
  </div>
  </div>
        </>
    );
}

export default Request;