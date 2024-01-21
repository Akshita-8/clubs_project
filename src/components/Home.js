import React, { useState, useEffect } from 'react';
import ClubList from './Clublist'; // Corrected the import statement

const Home = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    // Mock data for testing, replace it with your actual API call
    const mockData = [
      {
        id: 1,
        urlid: 'chess',
        name: 'Chess Club',
        description: 'For chess enthusiasts',
        imageUrl: 'https://cdn.pixabay.com/photo/2016/07/12/11/39/checkmate-1511866_640.jpg',
      },
      {
        id: 2,
        urlid: 'coding',
        name: 'Coding Club',
        description: 'Learn and practice coding',
        imageUrl: 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705708800&semt=sph',
      },
      // Add more mock clubs as needed
    ];

    setClubs(mockData);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>Student Clubs</h1>
      <ClubList clubs={clubs} /> {/* Corrected the component name */}
    </div>
  );
};

export default Home;
