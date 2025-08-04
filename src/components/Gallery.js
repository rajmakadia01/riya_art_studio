import React, { useState } from 'react';
import Select from 'react-select';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Gallery.css';


// IMPORTS HERE
import texture_1 from '../assets/Gallery/TextureArt/texture_1.JPG'
import texture_2 from '../assets/Gallery/TextureArt/texture_2.JPG'
import texture_3 from '../assets/Gallery/TextureArt/texture_3.JPG'
import texture_4 from '../assets/Gallery/TextureArt/texture_4.JPG'
import texture_5 from '../assets/Gallery/TextureArt/texture_5.JPG'
import texture_20 from '../assets/Gallery/TextureArt/texture_20.JPG'
import texture_7 from '../assets/Gallery/TextureArt/texture_7.JPG'
import texture_8 from '../assets/Gallery/TextureArt/texture_8.JPG'
import texture_9 from '../assets/Gallery/TextureArt/texture_9.JPG'
import texture_10 from '../assets/Gallery/TextureArt/texture_10.JPG'
import texture_11 from '../assets/Gallery/TextureArt/texture_11.JPG'
import texture_12 from '../assets/Gallery/TextureArt/texture_12.JPG'
import texture_13 from '../assets/Gallery/TextureArt/texture_13.JPG'
import texture_14 from '../assets/Gallery/TextureArt/texture_14.JPG'
import texture_17 from '../assets/Gallery/TextureArt/texture_17.JPG'
import texture_18 from '../assets/Gallery/TextureArt/texture_18.JPG'
import texture_19 from '../assets/Gallery/TextureArt/texture_19.JPG'
import texture_21 from '../assets/Gallery/TextureArt/texture_21.JPG'
import texture_23 from '../assets/Gallery/TextureArt/texture_23.JPG'
import texture_24 from '../assets/Gallery/TextureArt/texture_24.JPG'
import texture_25 from '../assets/Gallery/TextureArt/texture_25.jpg'
import texture_26 from '../assets/Gallery/TextureArt/texture_26.jpg'



import resin_1 from '../assets/Gallery/resin/resin_1.JPG'
import resin_2 from '../assets/Gallery/resin/resin_2.JPG'
import resin_3 from '../assets/Gallery/resin/resin_3.JPG'
import resin_4 from '../assets/Gallery/resin/resin_4.JPG'
import resin_5 from '../assets/Gallery/resin/resin_5.JPG'
import resin_6 from '../assets/Gallery/resin/resin_6.JPG'
import resin_7 from '../assets/Gallery/resin/resin_7.JPG'
import resin_8 from '../assets/Gallery/resin/resin_8.JPG'
import resin_9 from '../assets/Gallery/resin/resin_9.JPG'
import resin_10 from '../assets/Gallery/resin/resin_10.JPG'
import resin_11 from '../assets/Gallery/resin/resin_11.JPG'
import resin_13 from '../assets/Gallery/resin/resin_13.JPG'
import resin_14 from '../assets/Gallery/resin/resin_14.JPG'
import resin_15 from '../assets/Gallery/resin/resin_15.JPG'
import resin_16 from '../assets/Gallery/resin/resin_16.JPG'
import resin_17 from '../assets/Gallery/resin/resin_17.JPG'
import resin_18 from '../assets/Gallery/resin/resin_18.PNG'
import resin_19 from '../assets/Gallery/resin/resin_19.JPG'
import resin_20 from '../assets/Gallery/resin/resin_20.JPG'
import resin_21 from '../assets/Gallery/resin/resin_21.PNG'
import resin_22 from '../assets/Gallery/resin/resin_22.PNG'
import resin_23 from '../assets/Gallery/resin/resin_23.JPG'
import resin_27 from '../assets/Gallery/resin/resin_27.JPG'
import resin_28 from '../assets/Gallery/resin/resin_28.JPG'
import resin_29 from '../assets/Gallery/resin/resin_29.JPG'
import resin_30 from '../assets/Gallery/resin/resin_30.JPG'
import resin_31 from '../assets/Gallery/resin/resin_31.JPG'
import resin_32 from '../assets/Gallery/resin/resin32.JPG'
import resin_33 from '../assets/Gallery/resin/resin33.JPG'
import resin_34 from '../assets/Gallery/resin/resin34.JPG'




import fabric_1 from '../assets/Gallery/fabric/fabric_1 (2).JPG'
import fabric_2 from '../assets/Gallery/fabric/fabric_2.JPG'
import fabric_3 from '../assets/Gallery/fabric/fabric_3.JPG'
import fabric_4 from '../assets/Gallery/fabric/fabric_4.JPG'
import fabric_5 from '../assets/Gallery/fabric/fabric_5.JPG'
import fabric_6 from '../assets/Gallery/fabric/fabric_6.JPG'
import fabric_7 from '../assets/Gallery/fabric/fabric_7.JPG'
import fabric_8 from '../assets/Gallery/fabric/fabric_8.JPG'
import fabric_9 from '../assets/Gallery/fabric/fabric_9.JPG'
import fabric_10 from '../assets/Gallery/fabric/fabric_10.JPG'
import fabric_11 from '../assets/Gallery/fabric/fabric_11.JPG'
import fabric_12 from '../assets/Gallery/fabric/fabric_12.JPG'
import fabric_13 from '../assets/Gallery/fabric/fabric_13.JPG'
import fabric_14 from '../assets/Gallery/fabric/fabric_14.JPG'
import fabric_15 from '../assets/Gallery/fabric/fabric_15.JPG'
import fabric_16 from '../assets/Gallery/fabric/fabric_16.JPG'
import fabric_17 from '../assets/Gallery/fabric/fabric_17.JPG'
import fabric_18 from '../assets/Gallery/fabric/fabric_18.JPG'
import fabric_19 from '../assets/Gallery/fabric/fabric_19.JPG'
import fabric_20 from '../assets/Gallery/fabric/faric_20.JPG'
import fabric_21 from '../assets/Gallery/fabric/fabric_21.JPG'
import fabric_22 from '../assets/Gallery/fabric/fabric_22.JPG'
import fabric_25 from '../assets/Gallery/fabric/fabric_25.jpg'
import fabric_26 from '../assets/Gallery/fabric/fabric_24 (1).jpg'
import fabric_27 from '../assets/Gallery/fabric/fabric_26.jpg'
import fabric_28 from '../assets/Gallery/fabric/fabric_27.PNG'
import fabric_29 from '../assets/Gallery/fabric/fabric_28.PNG'
import fabric_30 from '../assets/Gallery/fabric/fabric_29.PNG'
import fabric_31 from '../assets/Gallery/fabric/fabric_30.PNG'
import fabric_32 from '../assets/Gallery/fabric/fabric_31.PNG'
import fabric_33 from '../assets/Gallery/fabric/fabric_32.PNG'

import canvas_1 from '../assets/Gallery/Canvas/canvas_1.JPG'
import canvas_2 from '../assets/Gallery/Canvas/canvas_2.JPG'
import canvas_3 from '../assets/Gallery/Canvas/canvas_3.JPG'
import canvas_4 from '../assets/Gallery/Canvas/canvas_4.JPG'
import canvas_5 from '../assets/Gallery/Canvas/canvas_5.JPG'
import canvas_6 from '../assets/Gallery/Canvas/canvas_6.PNG'
import canvas_7 from '../assets/Gallery/Canvas/canvas_7.PNG'
import canvas_8 from '../assets/Gallery/Canvas/canvas_8.JPG'
import canvas_9 from '../assets/Gallery/Canvas/canvas_9.JPG'
import canvas_10 from '../assets/Gallery/Canvas/canvas_10.JPG'
import canvas_11 from '../assets/Gallery/Canvas/canvas_11.JPG'
import canvas_12 from '../assets/Gallery/Canvas/canvas_12.JPG'
import canvas_13 from '../assets/Gallery/Canvas/canvas_13.JPG'
import canvas_14 from '../assets/Gallery/Canvas/canvas_14.JPG'
import canvas_15 from '../assets/Gallery/Canvas/canvas_15.JPG'
import canvas_16 from '../assets/Gallery/Canvas/canvas_16.JPG'
import canvas_17 from '../assets/Gallery/Canvas/canvas_17.JPG'
import canvas_18 from '../assets/Gallery/Canvas/canvas_18.JPG'
import canvas_19 from '../assets/Gallery/Canvas/canvas_19.JPG'
import canvas_20 from '../assets/Gallery/Canvas/canvas_20.JPG'
import canvas_21 from '../assets/Gallery/Canvas/canvas_21.JPG'
import canvas_22 from '../assets/Gallery/Canvas/canvas_22.JPG'
import canvas_23 from '../assets/Gallery/Canvas/canvas_23.JPG'
import canvas_24 from '../assets/Gallery/Canvas/canvas_24.JPG'
import canvas_25 from '../assets/Gallery/Canvas/canvas_25.JPG'
import canvas_26 from '../assets/Gallery/Canvas/canvas_26.JPG'
import canvas_27 from '../assets/Gallery/Canvas/canvas_27.JPG'

import Acrylic_1 from '../assets/Gallery/Acrylic/Acrylic_1.JPG'
import Acrylic_2 from '../assets/Gallery/Acrylic/Acrylic_2.JPG'
import Acrylic_3 from '../assets/Gallery/Acrylic/Acrylic_3.JPG'
import Acrylic_4 from '../assets/Gallery/Acrylic/Acrylic_4.JPG'
import Acrylic_5 from '../assets/Gallery/Acrylic/Acrylic_5.JPG'
import Acrylic_6 from '../assets/Gallery/Acrylic/Acrylic_6.JPG'
import Acrylic_7 from '../assets/Gallery/Acrylic/Acrylic_7.JPG'
import Acrylic_9 from '../assets/Gallery/Acrylic/Acrylic_9.JPG'
import Acrylic_10 from '../assets/Gallery/Acrylic/Acrylic_10.JPG'
import Acrylic_11 from '../assets/Gallery/Acrylic/Acrylic_11.JPG'
import Acrylic_12 from '../assets/Gallery/Acrylic/Acrylic_12.JPG'
import Acrylic_13 from '../assets/Gallery/Acrylic/Acrylic_13.PNG'
import Acrylic_14 from '../assets/Gallery/Acrylic/Acrylic_14.JPG'
import Acrylic_15 from '../assets/Gallery/Acrylic/Acrylic_15.JPG'
import Acrylic_16 from '../assets/Gallery/Acrylic/Acrylic_16.JPG'
import Acrylic_17 from '../assets/Gallery/Acrylic/Acrylic_17.JPG'
import Acrylic_18 from '../assets/Gallery/Acrylic/Acrylic_18.JPG'
import Acrylic_19 from '../assets/Gallery/Acrylic/Acrylic_19.JPG'
import Acrylic_20 from '../assets/Gallery/Acrylic/Acrylic_20.JPG'
import Acrylic_21 from '../assets/Gallery/Acrylic/Acrylic_21.PNG'
import Acrylic_22 from '../assets/Gallery/Acrylic/Acrylic_22.JPG'
import Acrylic_23 from '../assets/Gallery/Acrylic/Acrylic_23.JPG'
import Acrylic_24 from '../assets/Gallery/Acrylic/Acrylic_24.PNG'
import Acrylic_25 from '../assets/Gallery/Acrylic/Acrylic_25.JPG'

import charcoal_1 from '../assets/Gallery/charcoal/charcoal_1.JPG'
import charcoal_2 from '../assets/Gallery/charcoal/charcoal_2.JPG'
import charcoal_3 from '../assets/Gallery/charcoal/charcoal_3.JPG'
import charcoal_4 from '../assets/Gallery/charcoal/charcoal_4.JPG'
import charcoal_5 from '../assets/Gallery/charcoal/charcoal_5.JPG'
import charcoal_6 from '../assets/Gallery/charcoal/charcoal_6.JPG'
import charcoal_7 from '../assets/Gallery/charcoal/charcoal_7.JPG'
import charcoal_8 from '../assets/Gallery/charcoal/charcoal_8.JPG'
import charcoal_9 from '../assets/Gallery/charcoal/charcoal_9.JPG'
import charcoal_10 from '../assets/Gallery/charcoal/charcoal_10.JPG'
import charcoal_11 from '../assets/Gallery/charcoal/charcoal_11.JPG'
import charcoal_12 from '../assets/Gallery/charcoal/charcoal_12.JPG'
import charcoal_13 from '../assets/Gallery/charcoal/charcoal_13.JPG'
import charcoal_14 from '../assets/Gallery/charcoal/charcoal_14.JPG'
import charcoal_15 from '../assets/Gallery/charcoal/charcoal_15.JPG'
import charcoal_16 from '../assets/Gallery/charcoal/charcoal_16.JPG'
import charcoal_17 from '../assets/Gallery/charcoal/charcoal_17.jpg'
import charcoal_18 from '../assets/Gallery/charcoal/charcoal_18.jpg'
import charcoal_19 from '../assets/Gallery/charcoal/charcoal_19.JPG'
import charcoal_20 from '../assets/Gallery/charcoal/charcoal_20.JPG'
import charcoal_21 from '../assets/Gallery/charcoal/charcoal_21.JPG'


const latestImages = [texture_13, resin_3, fabric_27];

const categoryOptions = [
  { value: 'Texture Art', label: 'Texture Art' },
  { value: 'Acrylic Pouring', label: 'Acrylic Pouring' },
  { value: 'Canvas Painting', label: 'Canvas Painting' },
  { value: 'Resin Art', label: 'Resin Art' },
  { value: 'Fabric Painting', label: 'Fabric Paintings' },
  { value: 'Charcoal Painting', label: 'Charcoal Paintings' }
];

const allImages = [
    { src: texture_1, category: 'Texture Art' },
    { src: texture_2, category: 'Texture Art' },
    { src: texture_3, category: 'Texture Art' },
    { src: texture_19, category: 'Texture Art' },
    { src: texture_5, category: 'Texture Art' },
    { src: texture_4, category: 'Texture Art' },
    { src: texture_12, category: 'Texture Art' },
    { src: texture_8, category: 'Texture Art' },
    { src: texture_9, category: 'Texture Art' },
    { src: texture_10, category: 'Texture Art' },
    { src: texture_11, category: 'Texture Art' },
    { src: texture_23, category: 'Texture Art' },
    { src: texture_13, category: 'Texture Art' },
    { src: texture_14, category: 'Texture Art' },
    { src: texture_21, category: 'Texture Art' },
    { src: texture_24, category: 'Texture Art' },
    { src: texture_17, category: 'Texture Art' },
    { src: texture_18, category: 'Texture Art' },
    { src: texture_20, category: 'Texture Art' },
    { src: texture_25, category: 'Texture Art' },
    { src: texture_26, category: 'Texture Art' },

  
    { src: resin_1, category: 'Resin Art' },
    { src: resin_2, category: 'Resin Art' },
    { src: resin_3, category: 'Resin Art' },
    { src: resin_6, category: 'Resin Art' },
    { src: resin_15, category: 'Resin Art' },
    { src: resin_4, category: 'Resin Art' },
    { src: resin_23, category: 'Resin Art' },
    { src: resin_8, category: 'Resin Art' },
    { src: resin_9, category: 'Resin Art' },
    { src: resin_10, category: 'Resin Art' },
    { src: resin_21, category: 'Resin Art' },
    { src: resin_19, category: 'Resin Art' },
    { src: resin_14, category: 'Resin Art' },
    { src: resin_5, category: 'Resin Art' },
    { src: resin_16, category: 'Resin Art' },
    { src: resin_17, category: 'Resin Art' },
    { src: resin_18, category: 'Resin Art' },
    { src: resin_13, category: 'Resin Art' },
    { src: resin_20, category: 'Resin Art' },
    { src: resin_27, category: 'Resin Art' },
    { src: resin_28, category: 'Resin Art' },
    { src: resin_29, category: 'Resin Art' },
    { src: resin_30, category: 'Resin Art' },
    { src: resin_31, category: 'Resin Art' },
    { src: resin_32, category: 'Resin Art' },
    { src: resin_33, category: 'Resin Art' },
    { src: resin_34, category: 'Resin Art' },



  
    { src: fabric_1, category: 'Fabric Painting' },
    { src: fabric_2, category: 'Fabric Painting' },
    { src: fabric_3, category: 'Fabric Painting' },
    { src: fabric_27, category: 'Fabric Painting' },
    { src: fabric_7, category: 'Fabric Painting' },
    { src: fabric_6, category: 'Fabric Painting' },
    { src: fabric_4, category: 'Fabric Painting' },
    { src: fabric_8, category: 'Fabric Painting' },
    { src: fabric_9, category: 'Fabric Painting' },
    { src: fabric_10, category: 'Fabric Painting' },
    { src: fabric_11, category: 'Fabric Painting' },
    { src: fabric_33, category: 'Fabric Painting' },
    { src: fabric_13, category: 'Fabric Painting' },
    { src: fabric_14, category: 'Fabric Painting' },
    { src: fabric_15, category: 'Fabric Painting' },
    { src: fabric_16, category: 'Fabric Painting' },
    { src: fabric_17, category: 'Fabric Painting' },
    { src: fabric_21, category: 'Fabric Painting' },
    { src: fabric_30, category: 'Fabric Painting' },
    { src: fabric_19, category: 'Fabric Painting' },
    { src: fabric_18, category: 'Fabric Painting' },
    { src: fabric_22, category: 'Fabric Painting' },
    { src: fabric_25, category: 'Fabric Painting' },
    { src: fabric_29, category: 'Fabric Painting' },
    { src: fabric_20, category: 'Fabric Painting' },
    { src: fabric_28, category: 'Fabric Painting' },
    { src: fabric_26, category: 'Fabric Painting' },
    //  { src: fabric_30, category: 'Fabric Painting' },
    { src: fabric_31, category: 'Fabric Painting' },
    { src: fabric_32, category: 'Fabric Painting' },
  
    { src: canvas_1, category: 'Canvas Painting' },
    { src: canvas_15, category: 'Canvas Painting' },
    { src: canvas_3, category: 'Canvas Painting' },
    { src: canvas_25, category: 'Canvas Painting' },
    { src: canvas_16, category: 'Canvas Painting' },
    { src: canvas_6, category: 'Canvas Painting' },
    { src: canvas_18, category: 'Canvas Painting' },
    { src: canvas_19, category: 'Canvas Painting' },
    { src: canvas_17, category: 'Canvas Painting' },
    { src: canvas_26, category: 'Canvas Painting' },
    { src: canvas_14, category: 'Canvas Painting' },
    { src: canvas_21, category: 'Canvas Painting' },
    { src: canvas_4, category: 'Canvas Painting' },
    { src: canvas_22, category: 'Canvas Painting' },
    { src: canvas_20, category: 'Canvas Painting' },
    { src: canvas_5, category: 'Canvas Painting' },
    { src: canvas_23, category: 'Canvas Painting' },
    { src: canvas_24, category: 'Canvas Painting' },
    { src: canvas_27, category: 'Canvas Painting' },
  
    { src: Acrylic_1, category: 'Acrylic Pouring' },
    { src: Acrylic_2, category: 'Acrylic Pouring' },
    { src: Acrylic_3, category: 'Acrylic Pouring' },
    { src: Acrylic_4, category: 'Acrylic Pouring' },
    { src: Acrylic_5, category: 'Acrylic Pouring' },
    { src: Acrylic_6, category: 'Acrylic Pouring' },
    { src: Acrylic_7, category: 'Acrylic Pouring' },
    { src: Acrylic_9, category: 'Acrylic Pouring' },
    { src: Acrylic_22, category: 'Acrylic Pouring' },
    { src: Acrylic_11, category: 'Acrylic Pouring' },
    { src: Acrylic_13, category: 'Acrylic Pouring' },
    { src: Acrylic_12, category: 'Acrylic Pouring' },
    { src: Acrylic_15, category: 'Acrylic Pouring' },
    { src: Acrylic_14, category: 'Acrylic Pouring' },
    { src: Acrylic_16, category: 'Acrylic Pouring' },
    { src: Acrylic_17, category: 'Acrylic Pouring' },
    { src: Acrylic_24, category: 'Acrylic Pouring' },
    { src: Acrylic_19, category: 'Acrylic Pouring' },
    { src: Acrylic_20, category: 'Acrylic Pouring' },
    { src: Acrylic_25, category: 'Acrylic Pouring' },
    { src: Acrylic_10, category: 'Acrylic Pouring' },
    { src: Acrylic_21, category: 'Acrylic Pouring' },
    { src: Acrylic_23, category: 'Acrylic Pouring' },
    { src: Acrylic_18, category: 'Acrylic Pouring' },
  
    { src: charcoal_1, category: 'Charcoal Painting' },
    { src: charcoal_12, category: 'Charcoal Painting' },
    { src: charcoal_3, category: 'Charcoal Painting' },
    { src: charcoal_4, category: 'Charcoal Painting' },
    { src: charcoal_2, category: 'Charcoal Painting' },
    { src: charcoal_6, category: 'Charcoal Painting' },
    { src: charcoal_11, category: 'Charcoal Painting' },
    { src: charcoal_7, category: 'Charcoal Painting' },
    { src: charcoal_9, category: 'Charcoal Painting' },
    { src: charcoal_10, category: 'Charcoal Painting' },
    { src: charcoal_8, category: 'Charcoal Painting' },
    { src: charcoal_12, category: 'Charcoal Painting' },
    { src: charcoal_13, category: 'Charcoal Painting' },
    { src: charcoal_2, category: 'Charcoal Painting' },
    { src: charcoal_17, category: 'Charcoal Painting' },
    { src: charcoal_15, category: 'Charcoal Painting' },
    { src: charcoal_19, category: 'Charcoal Painting' },
    { src: charcoal_18, category: 'Charcoal Painting' },
    { src: charcoal_16, category: 'Charcoal Painting' },
    { src: charcoal_20, category: 'Charcoal Painting' },
    { src: charcoal_21, category: 'Charcoal Painting' },
];

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedCategory, setSelectedCategory] = useState('Texture Art');

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption.value);
    setVisibleCount(9);
  };

  const filteredImages =
    selectedCategory === ''
      ? []
      : allImages.filter((img) => img.category === selectedCategory);

  const groupPattern = [3, 2, 3];
  const groupedImages = [];
  let currentIndex = 0;
  let patternIndex = 0;

  while (currentIndex < visibleCount && currentIndex < filteredImages.length) {
    const groupSize = groupPattern[patternIndex % groupPattern.length];
    const group = filteredImages.slice(currentIndex, currentIndex + groupSize);
    groupedImages.push(group);
    currentIndex += groupSize;
    patternIndex++;
  }

  const customStyles = {
    control: (base) => ({
      ...base,
      borderColor: '#e55757',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#e55757',
      },
      borderRadius: '8px',
      padding: '2px'
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      backgroundColor: isSelected ? '#e55757' : isFocused ? '#fbdede' : 'white',
      color: isSelected ? 'white' : '#333',
      cursor: 'pointer'
    }),
    singleValue: (base) => ({
      ...base,
      color: '#e55757'
    }),
    menu: (base) => ({
      ...base,
      borderRadius: '8px',
      zIndex: 5
    })
  };

  return (
    <>
      {/* About Section */}
      <div className="texture-section">
        <h2>
          Resign <span>Art</span>
        </h2>
        <p>Resign Art – Redefining Creativity with Sustainability</p>
      </div>

      {/* Latest Work */}
      <div className="latest-work-section">
        <h2 className="latest-work-title">
          Latest <span className="highlight">Work</span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          className="custom-swiper"
        >
          {latestImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Art ${index + 1}`} className="work-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* All Work */}
      <section className="all-work-section">
        <div className="header-row">
          <h2 className="section-title">
            All <span className="highlight">Work</span>
          </h2>
          <div style={{ width: '250px' }}>
            <Select
              options={categoryOptions}
              onChange={handleCategoryChange}
              defaultValue={categoryOptions[0]}
              styles={customStyles}
              isSearchable={false}
            />
          </div>
        </div>

        {selectedCategory && (
          <>
            <div className="gallery-grid">
              {groupedImages.map((group, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`gallery-row gallery-row-${group.length}`}
                >
                  {group.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img.src}
                      alt={`work-${rowIndex}-${imgIndex}`}
                      className="gallery-image"
                    />
                  ))}
                </div>
              ))}
            </div>

            {visibleCount < filteredImages.length && (
              <div className="load-more-container">
                <button className="load-more-button" onClick={handleLoadMore}>
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default Gallery;
