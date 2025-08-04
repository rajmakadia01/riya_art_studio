import './CanvasPaiting.css';
import CanvasMain from '../assets/Canvas_Paiting/Canvas_paiting.JPG';
import Canvas1 from '../assets/Canvas_Paiting/Canvaspaiting_1.JPG';
import Canvas2 from '../assets/Canvas_Paiting/CanvasPaiting_2.PNG';
import star from '../assets/icon/star.png';
import check from '../assets/icon/check.png';
import SideMenu from './SideMenu';

const CanvasPainting = () => {
  return (
    <>
      <section className="canvas-intro-section">
        <h2>
          Canvas <span>Painting</span>
        </h2>
        <p>Bringing Walls to Life with Artistic Expression</p>
        <p>
          From modern minimalism to rich traditional motifs, canvas painting captures the heart of creativity on a timeless surface.
          Perfect for elevating interiors or making meaningful gifts, each brushstroke tells a unique story.
        </p>
      </section>

      <section className="canvas-main-container">
        <SideMenu />

        <div className="canvas-content">
          <img src={CanvasMain} alt="Canvas Art" className="canvas-main-image" />

          <div className="canvas-description-section">
            <h3>What is Canvas Painting?</h3>
            <p>
              Canvas Painting is a timeless art form that allows creativity to flow onto a durable fabric surface.
              Using high-quality paints, brushes, and techniques, we create stunning artwork ranging from abstract
              expressions to realistic portraits.
            </p>
            <p>
              The texture of the canvas gives each brushstroke depth, enhancing color richness and visual interest.
              It’s a versatile medium, perfect for capturing everything from peaceful nature scenes and divine figures to vibrant abstract concepts.
            </p>
            <p>
              Canvas art can be framed or stretched, making it adaptable for any style of interior design.
            </p>
            <p>Each painting is a story—told in color, emotion, and texture.</p>
            <p>
              From minimalistic designs to intricate detail work, canvas art speaks to the soul and enriches the environment it inhabits.
            </p>
            <p>
              Hand-painted with care, every canvas piece we create is made to inspire, evoke feelings, and leave a lasting impression.
            </p>

            <h3>Why Choose Canvas Art?</h3>
            <ul className="canvas-reason-list">
              <li>
                <img src={star} className="canvas-icon" alt="icon" />
                <div>
                  <strong>Versatile & Timeless</strong>
                  <p>Complements any space, never goes out of style.</p>
                </div>
              </li>
              <li>
                <img src={star} className="canvas-icon" alt="icon" />
                <div>
                  <strong>Handcrafted & Unique</strong>
                  <p>Each painting is original, made with passion and care.</p>
                </div>
              </li>
              <li>
                <img src={star} className="canvas-icon" alt="icon" />
                <div>
                  <strong>Perfect for Decor</strong>
                  <p>Adds elegance, depth, and color to any room.</p>
                </div>
              </li>
              <li>
                <img src={star} className="canvas-icon" alt="icon" />
                <div>
                  <strong>Ideal for Gifting</strong>
                  <p>Personal, meaningful, and artistic gift choice.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="canvas-creations-section">
            <div className="canvas-creations-images">
              <img src={Canvas1} alt="Canvas Art Sample 1" className="canvas-creation-image" />
              <img src={Canvas2} alt="Canvas Art Sample 2" className="canvas-creation-image" />
            </div>

            <div className="canvas-creations-text">
              <h3>Our Canvas Painting Creations</h3>
              <ul className="canvas-creation-list">
                <li>
                  <img src={check} className="canvas-check-icon" alt="check" />
                  <div><strong>Abstract & Modern Art</strong> - Expressive and vibrant.</div>
                </li>
                <li>
                  <img src={check} className="canvas-check-icon" alt="check" />
                  <div><strong>Realistic Portraits</strong> - Hand-painted with detail and emotion.</div>
                </li>
                <li>
                  <img src={check} className="canvas-check-icon" alt="check" />
                  <div><strong>Nature & Landscapes</strong> - Capturing breathtaking scenery.</div>
                </li>
                <li>
                  <img src={check} className="canvas-check-icon" alt="check" />
                  <div><strong>Custom Artwork</strong> - Tailored to your vision.</div>
                </li>
              </ul>

              <h3>Elevate Your Space with Art</h3>
              <p>
                Whether you're seeking a bold statement, a heartfelt gift, or something uniquely yours—our canvas paintings bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CanvasPainting;
