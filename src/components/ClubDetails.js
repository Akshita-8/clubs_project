// ClubDetails.js

import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ClubDetails = () => {
  const { clubId } = useParams();

  // Fetch club details or use mock data
  // For now, let's assume you have a clubs array with detailed information
  const clubs = [
    { id: 'chess', name: 'Chess Club', description: 'For enthusiasts', imageUrl: 'chess_image.jpg' },
    { id: 'coding', name: 'Coding Club', description: 'Learn and practice coding', imageUrl: 'coding_image.jpg' },
    // Add more clubs as needed
  ];

  const club = clubs.find(c => c.id === clubId);

  if (!club) {
    return <div>Club not found</div>;
  }

  return (
    <div>
      <h2>{club.name}</h2>
      <p>{club.description}</p>
      <Link to={`/clubs/${club.id}/chess`} >Go to Chess Club Page</Link>
      <Link to={`/clubs/${club.id}/coding`} >Go to Chess Coding Page</Link>
      {/* You can include an image if you have one */}
      {/* <img src={club.imageUrl} alt={club.name} /> */}
      {/* Add more details as needed */}
    </div>
  );
};

export default ClubDetails;
