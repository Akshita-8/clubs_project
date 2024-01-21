// ClubList.js

import React from 'react';
import { Link } from 'react-router-dom';
import './ClubList.css'; // Import your CSS file for styling

const Clublist = ({ clubs }) => {
  return (
    <div>
      <h2>Clubs List</h2>
      {clubs.length === 0 ? (
        <p>No clubs available.</p>
      ) : (
        <div className="club-grid">
          {clubs.map(club => (
            <Link key={club.urlid} to={`/clubs/${club.urlid}`} className="club-card-link">
              <div className="club-card">
                <strong>{club.name}</strong>
                <img src={club.imageUrl} alt={club.name} />
                <p>{club.description}</p>
              </div>
            </Link>
          ))}
          
          {/* Add a link to the "Chess Club" */}
          <Link to="/clubs/chess" className="club-card-link">
            <div className="club-card">
              <strong>Chess Club</strong>
              {/* Include an image if you have one */}
              {/* <img src={chessImageUrl} alt="Chess Club" /> */}
              <p>For chess enthusiasts</p>
            </div>
          </Link>
        </div>
      )}                             
    </div>
  );
};

export default Clublist;
