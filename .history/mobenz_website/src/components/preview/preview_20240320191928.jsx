
import "react-image-gallery/styles/css/image-gallery.css";
import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


import './preview.css'
import img from '../../media/place-holder.jpg'

const Preview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 865);

  const text = [
    {
      name: 'Training Concept 1',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum atque consequuntur molestiae fugit dignissimos quae minima corrupti quod recusandae sit?',
    },
    {
      name: 'Training Concept 2',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum atque consequuntur molestiae fugit dignissimos quae minima corrupti quod recusandae sit?',
    },
    {
      name: 'Training Concept 3',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum atque consequuntur molestiae fugit dignissimos quae minima corrupti quod recusandae sit?',
    },
    {
      name: 'Training Concept 4',
      description: 'Incinerate calories and dominate your limits with Hellfire Cardio, an explosive and heart-pounding workout series that fuels your journey to unparalleled fitness and endurance.'
    },
  ];

  
  
  

  /*
   <ImageGallery
          style={{
           
             
          }}
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          onSlide={handleSlide}
        />
  */

  const images = [
    {
      original: img,
      thumbnail: img
    },
    {
        original: img,
        thumbnail: img
      },
    // Add more images as needed
  ];

  const handleSlide = (index) => {
    setCurrentIndex(index);
    setPlaying(true); // Reset playing state on slide change
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  

  return (
    <div className="preview-container">
    <h2>Whats inside</h2>
    <h3>Here in an exclusive sneak peek at our wonderful program!</h3>
  
    {isDesktop ? (
      <>
        <div className="carousel-description-container">
        <div className="details-box"
            >
          {text.slice(0, 2).map((item, index) => (
           
            <div className="program-details" key={index}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
           
   
          ))}
                   </div>
          <div className="gallery-container">


          <ImageGallery
            style={{
              // Your styles here
            }}
            items={images}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            onSlide={handleSlide}
          />
                    </div>
<div className="details-box">


                    {text.slice(-2).map((item, index) => (
            <div className="program-details" key={index}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
          ))}
          </div>
        </div>
      </>
    ) : <>
        <div className="gallery-container">


<ImageGallery
  style={{
    // Your styles here
  }}
  items={images}
  showThumbnails={false}
  showPlayButton={false}
  showFullscreenButton={false}
  onSlide={handleSlide}
/>
          </div>
        <div className="program-details-grid">

      
          {text.map((text,index) => (
            <div className="program-details"
            key={index}>
    <h2>{text.name}</h2>
                <p>{text.description}</p>
            </div>
          ))}
            </div>


    </>
    
    }
  </div>
  )
  
};

export default Preview;