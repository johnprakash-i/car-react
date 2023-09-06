// Home.js
import React from 'react';
import './Home.css';
function Home({ showEnquiryForm }) {
  return (
    <div>
      {showEnquiryForm && (
        <div className="image-grid">
          <img src="/image1.jpg" alt="1" className="grid-image" />
          <img src="/image2.jpg" alt=" 2" className="grid-image" />
          <img src="/image3.jpg" alt=" 3" className="grid-image" />
          <img src="/image4.jpg" alt=" 4" className="grid-image" />
        </div>
      )}
      {/* Add links to navigate to other pages */}
    </div>
  );
}

export default Home;
