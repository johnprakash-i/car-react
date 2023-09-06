import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import './App.css';

// Define an array of image URLs
const imageUrls = [
  '/image1.jpg', // Replace with the actual relative path to your images
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpg',
];

function App() {
  const appStyle = {
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <Router>
      <div style={appStyle}>
        <Header />
        {/* Add your banner image below the Header */}
        <img
          src="/banner.jpg" // Replace with the actual relative path to your banner image
          alt="Banner"
          style={{
            width: '100%', // Adjust the width as needed
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '220px', // Adjust the height as needed
            marginBottom: '20px', // Adjust the height as needed
          }}
        />
        {/* Render the images dynamically */}
        <div className="image-grid">
          {imageUrls.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`k ${index + 1}`} className="grid-image" />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
