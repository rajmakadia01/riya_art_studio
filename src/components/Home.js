import React, { useState } from 'react';
import './Home.css';
import image1 from '../assets/Home/home_4.JPG'
import image2 from '../assets/Home/image2.jpeg'
import image3 from '../assets/Home/image3.JPG'
import image4 from '../assets/Home/home1.JPG'
import image8 from '../assets/Home/image8.JPG' 
import image9 from '../assets/Home/image9.JPG'
import image11 from '../assets/Home/image7.JPG'
import image10 from '../assets/Home/image_6.JPG'
import image12 from '../assets/Home/image12.JPG'
import textureicon from '../assets/icon/texture_icon.png'
import FabricPaintings from '../assets/icon/fabric_paiting.png';
import canvasPaint from '../assets/icon/canvas.png'
import arylicPouring from '../assets/icon/acrylic-paint.png'
import resignArt from '../assets/icon/resin.png'
import charcoal from '../assets/icon/charcoal-paiting.png'
import HappyClient from './Happyclient';
import BackArrow from '../assets/icon/back.png'
import FontArrow from '../assets/icon/right.png'
// import texture_24 from '../assets/Gallery/TextureArt/texture_24.JPG'


const reviews = [
    {
        id: 1,
        name: "Pratik Sinojia",
        text: "Riya Art Studio did a really amazing texture art piece for my home. The depth and creativity are incredible, transforming my space beautifully. Highly recommend their outstanding work!",
        rating: 5,
    },
    {
        id: 4,
        name: "Vruti Sinojia",
        text: "Riya Art Studio provided me with a really good resin watch. The craftsmanship and unique design are exceptional, and I’m thoroughly impressed with the quality. Highly recommend their work!",
        rating: 5,
    },
    {
        id: 3,
        name: "Dr. Dhaval Kansagra",
        text: "Riya Art Studio provided me with a beautiful canvas for my home. The artwork is stunning, adding a perfect touch of elegance to my space. Highly recommend their exceptional talent!",
        rating: 4,
    },
    {
        id: 2,
        name: "Raj Makadia",
        text: "Riya Art Studio provided me with a beautiful acrylic pouring work that exceeded my expectations. The vibrant colors and unique patterns are absolutely stunning. Highly recommend their amazing artistry! 5 stars!",
        rating: 5,
    },
    {
        id: 5,
        name: "Jackey Patel",
        text: "Riya Art Studio created a beautiful charcoal sketch for me, and I am truly satisfied with the incredible detail and artistry. The charcoal sketch captured every nuance perfectly, making it a stunning piece. Highly recommend her talent for more amazing charcoal sketches!",
        rating: 4,
    },
];

const images = [
    image4,
    image2,
    image10,
    image8,
    image12,

  ];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <>
            <div className="art-section">
                <div className="home_header">
                    {/* <h1>Welcome to My Art Gallery</h1> */}
                    <h2>Welcome To My Art Gallery</h2>
                    <p>
                    Discover a vibrant collection of artwork that celebrates creativity and imagination. From stunning landscapes to intricate portraits, each piece tells a unique story.
                    </p>
                    <button>Let's Start Your Art</button>
                </div>
                <div className="image-gallery_home">
                    <img
                        src={image1}
                        alt="Art 1"
                        className="gallery_home-images"
                    />
                    <img
                        src={image11}
                        alt="Art 2"
                        className="gallery_home-images"
                    />
                    <img
                        src={image3}
                        alt="Art 3"
                        className="gallery_home-images"
                    />
                </div>
            </div>

            <div className="art-category-section">
                <h1 className="section-title">Art Category</h1>
                <p className="section-description">
                Explore a diverse range of artistic expressions crafted with passion and creativity.
                    <br />
                    Immerse yourself in a world where every piece tells a unique story. Let your imagination soar as you discover new styles and techniques.
                </p>
                <div className="art-cards-container">
                <div className="art-card texture-art">
  <div className="icon-circle">
    <img src={textureicon} alt="Texture Icon" />
  </div>
  <h2>Texture Art</h2>
  <p>
    Texture Art is a unique form of artistic expression that adds depth and dimension to paintings and sculptures. By incorporating various materials...
  </p>
  <a href="/art-category/textureArt" className="view-more-btns">View More</a>
</div>


                    <div className="art-card">
                        <div className="icon-circle">
                           <img src={canvasPaint} />
                            
                        </div>
                        <h2>Canvas Painting</h2>
                        <p>
                        Canvas Painting is a timeless art form that allows creativity to flow onto a durable fabric surface. Using high-quality paints, brushes, and techniques...
                        </p>
                        <a href="/art-category/canvasPainting" className="view-more-btns">View More</a>
                    </div>
                    {/* Charcoal Sketch Card */}
                    <div className="art-card">
                        <div className="icon-circle">
                            <img src={charcoal} />
                        </div>
                        <h2>Charcoal Sketch</h2>
                        <p>
                        Charcoal Sketch Art is a captivating form of drawing that uses charcoal to create deep contrasts, rich textures, and expressive details.</p>
                        <a href="/art-category/charcoalSketch" className="view-more-btns">View More</a>

                    </div>

                    {/* Resin Art Card */}
                    <div className="art-card">
                        <div className="icon-circle">
                            <img src={resignArt} />
                        </div>
                        <h2>Resin Art</h2>
                        <p>
                        Resign Art is an innovative approach to art that transforms discarded materials into stunning, meaningful creations. By repurposing waste into unique...
                        </p>
                        <a href="/art-category/resinArt" className="view-more-btns">View More</a>

                    </div>
                    <div className="art-card">
                        <div className="icon-circle">
                            <img src={arylicPouring} />
                        </div>
                        <h2>Acrylic Pouring Art</h2>
                        <p>
                        Acrylic Pouring Art is a dynamic and fluid painting technique that creates mesmerizing patterns, vibrant color blends, and unique abstract designs.
                        </p>
                        <a href="/art-category/acrylicPouringArt" className="view-more-btns">View More</a>

                    </div>

                    {/* Resin Art Card */}
                    <div className="art-card">
                        <div className="icon-circle">
                           <img src={FabricPaintings} />
                        </div>
                        <h2>Fabric Painting</h2>
                        <p>
                        Fabric Painting is a creative art form that brings textiles to life with beautiful hand-painted designs. Using high-quality fabric paints...
                        </p>
                        <a href="/art-category/fabricPainting" className="view-more-btns">View More</a>

                    </div>
                    
                </div>
            </div>
            <HappyClient />
            <div className="review-section">
                <h2 className="review-title">
                    Client <span>Review</span>
                </h2>

                <div className="review-box">
                    <button className="arrow-button left" onClick={prevReview}>
                        <img src={BackArrow} className="backArrow"/>
                    </button>

                    <div className="review-content">
                        <div className="quote-icon">❝</div>
                        <p className="review-text">{reviews[currentIndex].text}</p>
                        <div className="review-rating">
                            {"★".repeat(reviews[currentIndex].rating)}
                            {"☆".repeat(5 - reviews[currentIndex].rating)}
                        </div>
                        <p className="review-name">{reviews[currentIndex].name}</p>
                        <div className="review-dots">
                            {reviews.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${index === currentIndex ? "active-dot" : ""
                                        }`}
                                ></span>
                            ))}
                        </div>
                    </div>

                    <button className="arrow-button right" onClick={nextReview}>
                        <img src={FontArrow} className="backArrow"/>
                    </button>
                </div>
            </div>
            <div className="gallery_home-container">
      <h1 className="gallery_home-title">My Gallery</h1>
      <div className="gallery_home-grid">
        {images.map((image, index) => (
          <div key={index} className={`gallery_home-item item-${index + 1}`}>
            <img src={image} alt={`gallery_home item ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="view-all-btn"><a href="/gallery">View ALL</a></button>
    </div>
        </>
    );
};

export default Home;