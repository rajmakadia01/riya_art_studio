import './AcrylicPoulingArt.css';
import SideMenu from './SideMenu';
import star from '../assets/icon/star.png'
import check from '../assets/icon/check.png'
import Acrylic from '../assets/Acrylic_Pouring/Acrylic.JPG'
import image1 from '../assets/Acrylic_Pouring/Acrlic_image.JPG'
import image2 from '../assets/Acrylic_Pouring/Acrlic_image_2.JPG'
const AcrylicPouling = () => {
  return (
      <>
    <div className="texture-section">
      <h2>
      Acrylic Pouring  <span>Art</span>
      </h2>
      <p>
      Let the Colors Flow Freely</p>
    <p>Experience the beauty of fluid motion through vivid, swirling patterns created by gravity and imagination. Our acrylic pouring pieces are bold, expressive, and completely unrepeatable—each one a dance of color captured in time. Whether you're drawn to calming blends or dynamic contrasts, every painting offers a unique story shaped by spontaneity.
      </p>
    </div>
    <div className="texture-container">
      <SideMenu />

      <div className="texture-content">
        <img src={Acrylic} alt="Texture Art" className="acrylic-image" />

        <div className="texture-description">
          <h3>What is Acrylic Pouring Art?</h3>
          <p>
          Acrylic Pouring Art is a dynamic and fluid painting technique that creates mesmerizing patterns, vibrant color 
          blends, and unique abstract designs. By allowing acrylic paints to flow naturally on the canvas, this art form 
          embraces spontaneity, making each piece a one-of-a-kind masterpiece.
          </p>
          <p>
          Artists use various techniques—such as the dirty pour, flip cup, swipe, and puddle pour—to guide the movement 
          of paint without using traditional brushes. The result is a captivating blend of organic shapes, flowing lines, 
          and unpredictable textures.
          </p>
          <p>
          What makes acrylic pouring truly special is its element of surprise—no two pours are ever the same. 
          The paints interact with each other in fascinating ways, forming intricate cells and color transitions 
          that seem almost otherworldly.
          </p>
          <p>
          This art form is both therapeutic and experimental, making it popular among beginners and seasoned artists alike. 
          It's not just about the final image, but about the creative process and the joy of watching colors come alive through motion.
          </p>
          <p>
          Whether displayed as bold wall decor or smaller accent pieces, acrylic pouring art adds energy, emotion, and modern flair to any space.
          </p>

          <h3>Why Choose Acrylic Pouring Art?</h3>
          <ul className="reasons-list">
            <li>
            <img src={star} className='icons'/>

              <div>
                <strong>Vibrant & Eye-Catching</strong>
                <p>Stunning color combinations and organic patterns.
                Each piece bursts with energy, capturing attention at first glance.
                The fluid movement of paint creates a mesmerizing visual rhythm that’s hard to look away from.
                </p>
              </div>
            </li>
            <li>
            <img src={star} className='icons'/>

              <div>
                <strong>Unique & Unrepeatable</strong>
                <p>No two paintings are ever the same, ensuring originality.
                The natural flow of paint guarantees unpredictable, one-of-a-kind results.
                Each artwork carries its own story, shaped by timing, movement, and color choice.</p>
              </div>
            </li>
            <li>
            <img src={star} className='icons'/>

              <div>
                <strong>Modern & Expressive</strong>
                <p>A perfect blend of creativity and free-flowing artistry.
                It reflects contemporary aesthetics with bold, abstract forms and fluid design.
                Ideal for adding a splash of personality and emotion to any modern space.
                </p>
              </div>
            </li>
            <li>
            <img src={star} className='icons'/>

              <div>
                <strong>Perfect for Decor</strong>
                <p>Adds elegance and personality to homes, offices, and commercial spaces.
                Its vibrant tones and abstract forms complement a wide range of interior styles.
                Whether as a centerpiece or accent, it brings energy and sophistication to any room.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="creations-section">
      <div className="creations-images">
        <img src={image2} alt="Hand painting texture" className="creation-img" />
        <img src={image1} alt="Abstract woman art" className="creation-img" />
      </div>

      <div className="creations-text">
        <h3>Our Acrylic Pouring Art Creations</h3>
        <ul className="creation-list">
          <li>
          <img src={check} className='icons_check'/>
            <strong>Acrylic Texture Paintings</strong> -  Stunning fluid art with rich colors and depth.
          </li>
          <li>
          <img src={check} className='icons_check'/>
            
            <strong>Resin & Acrylic Combinations</strong> - Glossy, high-finish pieces for a modern aesthetic.
          </li>
          <li>
          <img src={check} className='icons_check'/>
            
            <strong>Custom Color Palettes</strong> -  Personalized artwork to match your interior style
          </li>
          <li>
          <img src={check} className='icons_check'/>
           
            <strong>Functional Art Pieces</strong> - Coasters, trays, and more with acrylic pouring designs.
          </li>
        </ul>

        <h3>Experience the Beauty of Flow Art</h3>
        <p>
        Acrylic pouring is not just art—it’s an experience. The organic movement of paint creates unpredictable yet mesmerizing patterns, making every piece truly special.
        </p>
      </div>
    </div>
      </div>
      
    </div>
    </>
  );
};

export default AcrylicPouling;
