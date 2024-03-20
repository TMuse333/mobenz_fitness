import React, { useState, useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import './work.css'

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
// import { portfolio } from "../../data/data";

import lift1 from '../../public/IMG_3287.mp4'
import lift2 from '../../public/IMG_3361.mp4'
import lift3 from '../../../public/IMG_3389.mp4'


const WorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(true);



const images = [
  {
    original:lift1,
    thumbnail:lift1
  },
  {
    original: lift2,
    thumbnail: lift2,

  },
  {
    original: lift3,
    thumbnail: lift3,

  },

  // Add more images as needed
];






  const handleSlide = (index) => {
    setCurrentIndex(index);
    setPlaying(true); // Reset playing state on slide change
  };

  const handleVideoPause = () => {
    setPlaying(false);
  };

  useEffect(() => {
    setPlaying(true); // Autoplay the first video
  }, []);

  return (
    <div className="work-container">
      <h2 className="title-text bold-700">I am Strong Man</h2>
      <p className="description-text">
        Here are some of my best lifts
      </p>

      {/* <Link to='/portfolio'>
        <button className="button work-button">explore portfolio</button>
      </Link> */}

      <div className="image-text-box work">

    


<ImageGallery style={{
  height:'500px'
}}
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          onSlide={handleSlide} // This callback is triggered when the slide changes
        />
       

       <div className="work-description">
  <AnimatePresence>
    <motion.p
      key={currentIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.7 } }}
      exit={{ transition: 'all 0.3s ease-in', opacity: 0 }}
      className="description-text"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ad porro amet aliquid pariatur maxime dolorem voluptatem facere voluptatum et.
      {/* <Link to={portfolio[currentIndex].link}>
       
        <br />
        <button
        style={{
          marginTop:'2rem'
        }}
          className="button work-link"
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.7 } }}
          exit={{ transition: 'all 0.3s ease-in', opacity: 0 }}
        >
          View
        </button>
      </Link> */}
    </motion.p>
  </AnimatePresence>
</div>

       
      </div>
    </div>
  );
};

export default WorkCarousel;