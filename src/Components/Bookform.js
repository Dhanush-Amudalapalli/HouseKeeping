import React, { useState } from 'react';

const Bookform = ({ onBook }) => {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
   const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook({ service, date,time });
    setService('');
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
      value={service}
      onChange={(e) => setService(e.target.value)}
      required
    >
      <option value="">Select a service</option>
      <option value="cleaning">Cleaning</option>
      <option value="dusting">Dusting</option>
      <option value="mopping">Mopping</option>
    </select>&nbsp;
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />&nbsp;
      <input
        type="time"
        placeholder="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />&nbsp;
      <button style={{background:"blue",color:"white",padding:"5px",borderRadius:"8px"}} type="submit">Book</button>
    </form>
  );
};

export default Bookform;
