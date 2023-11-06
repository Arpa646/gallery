import React from 'react';
import AddImage from './AddImage';
import DisplayImage from './DisplayImage';

const Home = ({ imageUrl }) => {
  return (
    <div>
 <AddImage></AddImage>
 <DisplayImage></DisplayImage>
    </div>
  );
};

export default Home;
