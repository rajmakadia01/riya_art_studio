import './About.css'
import HappyClient from './Happyclient';
import mission from '../../src/assets/icon/mission (1).png'
import vission from '../../src/assets/icon/binoculars.png'
import textureicon from '../assets/icon/tile.png'
import FabricPaitings from '../assets/icon/fabric_paiting.png';
import charcoal from '../assets/icon/charcoal-paiting.png'
import canvasPaint from '../assets/icon/canvas.png'
import image1 from '../assets/About/about_1.JPG'
import image2 from '../assets/About/about_2.JPG'

const About = () => {
  return (
    <>
      <div className="about-header">
        <h1>About <span className='about_color'>Us</span></h1>
        <p>
          Bringing Imagination to Life Through Unique and Customized Art Creations.
          Each piece is thoughtfully handcrafted to reflect emotion, elegance, and individuality — making your space truly one-of-a-kind.
        </p>
      </div>
      <div className="profile-section">
        <div className="profile-image"></div>
        <div className="profile-content">
          <h1 className="profile-name">
            Riya <span>Kansagra</span>
          </h1>
          <h2 className="profile-title">Owner of Riya Artist Studio</h2>
          <p className="profile-description">
            Hi, I’m Riya Kansagra, the founder of Riya Artist Studio. With over 7 years of experience in the world of art, I’ve dedicated my life to expressing creativity through a variety of mediums. My artistic journey has allowed me to grow as a creator, blending emotion, imagination, and precision into every piece I make.
          </p>
          <p className="profile-description">
            Over the years, I’ve had the honor of working with more than 60 happy clients and completing 500+ unique artworks. I specialize in a wide range of styles including texture art, resin art, charcoal sketches, acrylic pouring, canvas painting, and fabric painting. Each project is a new opportunity to tell a story and connect deeply with the people who experience my art.
          </p>
          <button className="profile-button">View My Work</button>
        </div>
      </div>
      <HappyClient />
      <div className="mission-vision-section">
        <h2 className="section-heading">
        Inspired by Life <span>Expressed in Color</span>
        </h2>
        <div className="content-row">
          <div className="text-block mission">
            <div className="icon">
              <img src={mission} alt="Mission Icon" className='icon' />
            </div>
            <h3>OUR MISSION</h3>
            <p>
              My goal is to create meaningful, visually captivating art that enhances any space—be it a home, an office, or a personal collection. Whether you’re seeking a customized gift, a statement piece, or something truly one-of-a-kind, I’m committed to bringing your vision to life with passion and creativity.
            </p>
            <p>
            Each piece I create is more than just a work of art — it's a story, an emotion, and a reflection of individuality. I believe art should not only be seen but felt, experienced, and remembered.
            </p>
            <p>
              At Riya Artist Studio, I strive to blend imagination with technique, crafting pieces that are both expressive and enduring. I prioritize quality, detail, and originality in everything I do, ensuring each creation is as unique as the person receiving it.
            </p>
          </div>
          <div className="image-placeholder top">
            <img src={image1} alt="image1" />
          </div>
        </div>
        <div className="content-row">
          <div className="image-placeholder bottom">
            <img src={image2} alt="image2"/>

          </div>
          <div className="text-block vision">
            <div className="icon">
              <img src={vission} alt="Vision Icon" className="icon" />
            </div>
            <h3>OUR VISION</h3>
            <p>
              At Riya Artist Studio, our vision is to redefine creativity through artistic expression that speaks to the soul. We believe that art has the power to transform spaces, evoke emotions, and inspire change. Our goal is to create visually stunning and meaningful artwork that not only adds beauty but also brings depth and connection to everyday life.
            </p>
            <p>
            We envision a world where art is not a luxury, but a vital part of living — where it enriches minds, stirs hearts, and tells untold stories. Our creations aim to bridge the gap between imagination and reality, offering pieces that resonate on a personal and universal level.
            Through our work, we seek to empower individuals to see the world through a more thoughtful and inspired lens. We are passionate about nurturing creativity in all its forms, and making art more accessible to diverse audiences.
            </p>
          </div>
        </div>
        <div className="dotted-line">
          <div className="horizontal-line-left"></div>
          <div className="horizontal-line-right"></div>
        </div>
      </div>
      <div className="why-riya-section">
        <h2 className="why-riya-heading">
          Why Riya Artist <span>Studio</span>
        </h2>
        <div className="why-riya-cards">
          <div className="why-card highlighted">
            <img src={textureicon} alt="Texture Icon" className="icon" style={{ marginTop: "-8px"  }}/>
            <div style={{marginTop:"22px"}}>
            <h3>Personalized Artworks</h3>
            <p>We create unique, custom-made pieces that reflect your vision and emotions — perfect for gifting or decorating your space.</p>
          </div>
          </div>
          <div className="why-card">
            <div className="icon">
              <img src={FabricPaitings} alt="Fabric Painting Icon" className='icon' />
            </div>
            <h3>Premium Quality Materials</h3>
            <p>We use only high-quality, eco-friendly materials to ensure the longevity and vibrancy of every artwork.</p>
          </div>
          <div className="why-card">
            <div className="icon">
              <img src={charcoal} alt="Charcoal Icon" className='icon' />
            </div>
            <h3>Original Art Creations</h3>
            <p>We specialize in creating unique, handcrafted artworks that bring color, emotion, and style into any space.</p>
          </div>
          <div className="why-card">
            <div className="icon">
              <img src={canvasPaint} alt="Canvas Painting Icon" className='icon' />
            </div>
            <h3>Customized Art</h3>
            <p>Looking for something special? We craft personalized artworks tailored to your vision, theme, and decor preferences.</p>
          </div>
        </div>
      </div>

    </>
  );
};

export default About