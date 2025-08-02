import './CanvasPaiting.css';
import Canvas_Paiting from '../assets/Canvas_Paiting/Canvas_paiting.JPG'
import CanvasPaiting_1 from '../assets/Canvas_Paiting/Canvaspaiting_1.JPG'
import CanvasPaiting_2 from '../assets/Canvas_Paiting/CanvasPaiting_2.PNG'
import star from '../assets/icon/star.png'
import check from '../assets/icon/check.png'
import SideMenu from './SideMenu';

const CanvasPaiting = () => {
  return (
      <>
    <div className="texture-section">
      <h2>
        Canvas <span>Painting</span>
      </h2>
      <p>
      Bringing Walls to Life with Artistic Expression
      </p>
      <p>
      From modern minimalism to rich traditional motifs, canvas painting captures the heart of creativity on a timeless surface. Perfect for elevating interiors or making meaningful gifts, each brushstroke tells a unique story.
      </p>
    </div>
    <div className="texture-container">
      <SideMenu/>

      <div className="texture-content">
        <img src={Canvas_Paiting} alt="Texture Art" className="canvas-image" />

        <div className="texture-description">
          <h3>What is Canvas Painting?</h3>
          <p>
          Canvas Painting is a timeless art form that allows creativity to flow onto a durable fabric surface. 
          Using high-quality paints, brushes, and techniques, we create stunning artwork ranging from abstract 
          expressions to realistic portraits. Whether for home decor, gifting, or personal collections, 
          canvas paintings add beauty and emotion to any space.
          </p>
          <p>
          The texture of the canvas gives each brushstroke depth, enhancing color richness and visual interest.
It’s a versatile medium, perfect for capturing everything from peaceful nature scenes and divine figures to vibrant abstract concepts.
          </p>
          <p>
          Canvas art can be framed or stretched, making it adaptable for any style of interior design.
          </p>
          <p>
          Each painting is a story—told in color, emotion, and texture.
          </p>
          <p>
          From minimalistic designs to intricate detail work, canvas art speaks to the soul and enriches the environment it inhabits.
          </p>
          <p>
          Hand-painted with care, every canvas piece we create is made to inspire, evoke feelings, and leave a lasting impression.
          </p>

          <h3>Why Choose Texture Art?</h3>
          <ul className="reasons-list">
            <li>
            <img src={star} className='icons'/>

              <div>
                <strong>Versatile & Timeless</strong>
                <p>Suitable for modern, traditional, and contemporary art styles.
                Canvas art complements any space, from cozy homes to elegant offices.
                Its enduring appeal ensures it never goes out of style.
                </p>
              </div>
            </li>
            <li>
            <img src={star} className='icons'/>

              <div>
                <strong>Handcrafted & Unique</strong>
                <p>Every painting is a one-of-a-kind masterpiece.
                Created with passion, precision, and personal touch.
                No prints or duplicates—only original, soulful expressions.
                </p>
              </div>
            </li>
            <li>
            <img src={star} className='icons'/>

              <div>
                <strong>Perfect for Decor</strong>
                <p>Enhances homes, offices, and commercial spaces.
Adds color, character, and a touch of sophistication to any environment.
A beautiful way to reflect personality and style through art.</p>
              </div>
            </li>
            <li>
            <img src={star} className='icons'/>

              <div>
                <strong>Ideal for Gifting</strong>
                <p>A thoughtful and artistic gift for any occasion.
Perfect for birthdays, anniversaries, housewarmings, or festive celebrations.
Give the joy of handcrafted art that leaves a lasting impression.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="creations-section">
      <div className="creations-images">
        <img src={CanvasPaiting_1} alt="Hand painting texture" className="creation-img" />
        <img src={CanvasPaiting_2} alt="Abstract woman art" className="creation-img" />
      </div>

      <div className="creations-text">
        <h3>Our Canvas Painting Creations</h3>
        <ul className="creation-list">
          <li>
          <img src={check} className='icons_check'/>

            <strong>Abstract & Modern Art</strong> - Vibrant, expressive paintings for contemporary spaces.
          </li>
          <li>
          <img src={check} className='icons_check'/>

            <strong>Realistic & Portrait Paintings</strong> - Hand-painted portraits capturing every detail.
          </li>
          <li>
          <img src={check} className='icons_check'/>

            <strong>Nature & Landscape Art</strong> - Breathtaking scenery on canvas.
          </li>
          <li>
          <img src={check} className='icons_check'/>

            <strong>Custom Artwork </strong> - Personalized paintings based on your ideas and vision.
          </li>
        </ul>

        <h3>Elevate Your Space with Art</h3>
        <p>
        Canvas paintings bring creativity and elegance into any environment. Whether you’re looking for a statement piece, a meaningful gift, or a custom design, we bring your vision to life with every brushstroke.
        </p>
      </div>
    </div>
      </div>
      
    </div>
    </>
  );
};

export default CanvasPaiting;
