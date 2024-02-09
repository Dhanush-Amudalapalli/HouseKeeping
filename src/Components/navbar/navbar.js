import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <><div>
        <div className="head">
          <h4 className="logo">HouseKeep</h4>
          <h2 className="head-name">Welcome to Student Portol</h2>
        </div>
        <div className="sidebar">
      <ul>
        <div className="sidebar-item">
        <li><Link to="/Dashboard">Dashboard</Link></li>
        </div>
        <div className="sidebar-item">
        <li><Link to="/Request">My Request</Link></li>
        </div>
        <div className="sidebar-item">
        <li><Link to="/Status">Status</Link></li>
        </div>
        <div className="sidebar-item">
        <li><Link to="/Profile">Profile</Link></li>
        </div>
        <div className="sidebar-item">
        <li><Link to="/Feedback">Feedback</Link></li>
        </div>
        <div className="sidebar-item">
        <li><Link to="/Complaint">Complaint</Link></li>
        </div>
        <div className="sidebar-item">
        <li><Link to="/Logout">Logout</Link></li>
        </div>
      </ul>
    </div>
    </div>
        </>
    );
}

export default Navbar;