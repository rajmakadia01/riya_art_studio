import './AcrylicPoulingArt.css';
import SideMenu from './SideMenu';
import star from '../assets/icon/star.png';
import check from '../assets/icon/check.png';
import Acrylic from '../assets/Acrylic_Pouring/Acrylic.JPG';
import image1 from '../assets/Acrylic_Pouring/Acrlic_image.JPG';
import image2 from '../assets/Acrylic_Pouring/Acrlic_image_2.JPG';

const AcrylicPouling = () => {
  return (
    <>
      <section className="acrylic-intro-section">
        <h2>
          Acrylic Pouring <span>Art</span>
        </h2>
        <p className="acrylic-subtitle">Let the Colors Flow Freely</p>
        <p className="acrylic-description">
          Experience the beauty of fluid motion through vivid, swirling patterns created by gravity and imagination.
          Our acrylic pouring pieces are bold, expressive, and completely unrepeatable—each one a dance of color captured in time.
          Whether you're drawn to calming blends or dynamic contrasts, every painting offers a unique story shaped by spontaneity.
        </p>
      </section>

      <section className="acrylic-main-container">
        <SideMenu />

        <div className="acrylic-content">
          <img src={Acrylic} alt="Acrylic Pouring Art" className="acrylic-main-image" />

          <div className="acrylic-description-block">
            <h3>What is Acrylic Pouring Art?</h3>
            <p>
              Acrylic Pouring Art is a dynamic and fluid painting technique that creates mesmerizing patterns,
              vibrant color blends, and unique abstract designs. By allowing acrylic paints to flow naturally on the canvas,
              this art form embraces spontaneity, making each piece a one-of-a-kind masterpiece.
            </p>
            <p>
              Artists use various techniques—such as the dirty pour, flip cup, swipe, and puddle pour—
              to guide the movement of paint without using traditional brushes.
            </p>
            <p>
              What makes acrylic pouring truly special is its element of surprise—no two pours are ever the same.
              The paints interact with each other in fascinating ways, forming intricate cells and color transitions that seem almost otherworldly.
            </p>
            <p>
              This art form is both therapeutic and experimental, making it popular among beginners and seasoned artists alike.
              It's not just about the final image, but about the creative process and the joy of watching colors come alive through motion.
            </p>
            <p>
              Whether displayed as bold wall decor or smaller accent pieces, acrylic pouring art adds energy, emotion,
              and modern flair to any space.
            </p>

            <h3>Why Choose Acrylic Pouring Art?</h3>
            <ul className="acrylic-reason-list">
              <li>
                <img src={star} className="acrylic-icon" />
                <div>
                  <strong>Vibrant & Eye-Catching</strong>
                  <p>
                    Stunning color combinations and organic patterns.
                    Each piece bursts with energy, capturing attention at first glance.
                  </p>
                </div>
              </li>
              <li>
                <img src={star} className="acrylic-icon" />
                <div>
                  <strong>Unique & Unrepeatable</strong>
                  <p>
                    No two paintings are ever the same, ensuring originality.
                    Each artwork carries its own story, shaped by timing, movement, and color choice.
                  </p>
                </div>
              </li>
              <li>
                <img src={star} className="acrylic-icon" />
                <div>
                  <strong>Modern & Expressive</strong>
                  <p>
                    It reflects contemporary aesthetics with bold, abstract forms and fluid design.
                    Ideal for adding a splash of personality and emotion to any modern space.
                  </p>
                </div>
              </li>
              <li>
                <img src={star} className="acrylic-icon" />
                <div>
                  <strong>Perfect for Decor</strong>
                  <p>
                    Adds elegance and personality to homes, offices, and commercial spaces.
                    Its vibrant tones and abstract forms complement a wide range of interior styles.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="acrylic-creations">
            <div className="acrylic-images">
              <img src={image2} alt="Acrylic Art 1" className="acrylic-sample-image" />
              <img src={image1} alt="Acrylic Art 2" className="acrylic-sample-image" />
            </div>

            <div className="acrylic-creations-text">
              <h3>Our Acrylic Pouring Art Creations</h3>
              <ul className="acrylic-creation-list">
  <li>
    <img src={check} className="acrylic-check-icon" />
    <div className="acrylic-creation-text">
      <span className="acrylic-creation-title">Acrylic Texture Paintings</span>
      <span className="acrylic-creation-description">Stunning fluid art with rich colors and depth.</span>
    </div>
  </li>
  <li>
    <img src={check} className="acrylic-check-icon" />
    <div className="acrylic-creation-text">
      <span className="acrylic-creation-title">Resin & Acrylic Combinations</span>
      <span className="acrylic-creation-description">Glossy, high-finish pieces for a modern aesthetic.</span>
    </div>
  </li>
  <li>
    <img src={check} className="acrylic-check-icon" />
    <div className="acrylic-creation-text">
      <span className="acrylic-creation-title">Custom Color Palettes</span>
      <span className="acrylic-creation-description">Personalized artwork to match your interior style.</span>
    </div>
  </li>
  <li>
    <img src={check} className="acrylic-check-icon" />
    <div className="acrylic-creation-text">
      <span className="acrylic-creation-title">Functional Art Pieces</span>
      <span className="acrylic-creation-description">Coasters, trays, and more with acrylic pouring designs.</span>
    </div>
  </li>
</ul>


              <h3>Experience the Beauty of Flow Art</h3>
              <p>
                Acrylic pouring is not just art—it’s an experience.
                The organic movement of paint creates unpredictable yet mesmerizing patterns,
                making every piece truly special.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcrylicPouling;
