// CharcoalSketch.jsx
import './CharcolSketch.css';
import image2 from '../assets/charcoal/charcoal1.JPG';
import image3 from '../assets/charcoal/charcoal2.JPG';
import image1 from '../assets/charcoal/charcoal.jpeg';
import SideMenu from './SideMenu';
import star from '../assets/icon/star.png';
import check from '../assets/icon/check.png';

const CharcoalSketch = () => {
  return (
    <>
      <section className="charcoal-intro-section">
        <h2>
          Charcoal Sketch <span>Art</span>
        </h2>
        <p className="charcoal-subtitle">Timeless Beauty in Black & White</p>
        <p className="charcoal-description">
          Charcoal sketching is a classic medium known for its bold lines, deep contrasts, and emotional expression.
          Each stroke brings out fine details and dramatic depth, making it perfect for portraits, family moments, and timeless scenes.
        </p>
      </section>

      <section className="charcoal-main-container">
        <SideMenu />

        <div className="charcoal-content">
          <img src={image1} alt="Charcoal Art" className="charcoal-main-image" />

          <div className="charcoal-description-block">
            <h3>What is Charcoal Sketch Art?</h3>
            <p>
              Charcoal Sketch Art is a captivating form of drawing that uses charcoal to create deep contrasts,
              rich textures, and expressive details. Known for its raw, bold strokes and delicate shading,
              charcoal sketching brings portraits, landscapes, and abstract compositions to life with timeless elegance.
            </p>
            <p>
              Artists often favor charcoal for its versatility—it can produce both intense black lines and soft,
              subtle gradients, allowing for dramatic lighting effects and atmospheric depth.
            </p>
            <p>
              Charcoal is also highly responsive to touch, making it ideal for gesture drawings and expressive mark-making.
              Its erasable nature allows for constant refinement, giving the artist freedom to experiment.
            </p>
            <p>
              From classical figure studies to contemporary explorations, charcoal sketch art bridges tradition and modernity.
              Its monochromatic beauty and tactile quality continue to inspire awe and emotional connection.
            </p>

            <h3>Why Choose Charcoal Sketch Art?</h3>
            <ul className="charcoal-reason-list">
              <li>
                <img src={star} alt="star" className='charcoal-icon' />
                <div>
                  <strong>Classic & Timeless</strong>
                  <p>The monochrome beauty of charcoal sketches never goes out of style. Its elegant simplicity complements both traditional and contemporary aesthetics effortlessly.</p>
                </div>
              </li>
              <li>
                <img src={star} alt="star" className='charcoal-icon' />
                <div>
                  <strong>Expressive & Detailed</strong>
                  <p>Perfect for capturing emotions, depth, and realism. Every stroke conveys mood and movement.</p>
                </div>
              </li>
              <li>
                <img src={star} alt="star" className='charcoal-icon' />
                <div>
                  <strong>Handcrafted & Unique</strong>
                  <p>Every sketch is one-of-a-kind, made with precision and passion. The artist's personal touch and technique shine through in every line.</p>
                </div>
              </li>
              <li>
                <img src={star} alt="star" className='charcoal-icon' />
                <div>
                  <strong>Perfect for Home & Gifts</strong>
                  <p>Ideal for personal collections, gifting, or decorative artwork. Charcoal sketches add sophistication to any space.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="charcoal-creations">
            <div className="charcoal-images">
              <img src={image2} alt="Charcoal Sample 1" className="charcoal-sample-image" />
              <img src={image3} alt="Charcoal Sample 2" className="charcoal-sample-image" />
            </div>

            <div className="charcoal-creations-text">
              <h3>Our Charcoal Sketch Art Creations</h3>
              <ul className="charcoal-creation-list">
                <li>
                  <img src={check} alt="check" className='charcoal-check-icon' />
                  <div><strong>Realistic Portrait Sketches</strong> - Hand-drawn portraits with intricate details.</div>
                </li>
                <li>
                  <img src={check} alt="check" className='charcoal-check-icon' />
                  <div><strong>Abstract & Conceptual Art</strong> - Unique charcoal compositions with artistic depth.</div>
                </li>
                <li>
                  <img src={check} alt="check" className='charcoal-check-icon' />
                  <div><strong>Landscapes & Nature Sketches</strong> - Scenic beauty captured in black and white.</div>
                </li>
                <li>
                  <img src={check} alt="check" className='charcoal-check-icon' />
                  <div><strong>Custom Charcoal Art</strong> - Personalized sketches based on your vision.</div>
                </li>
              </ul>
              <h3>Bring Your Vision to Life</h3>
              <p>
                Whether you want a striking portrait, a memorable gift, or a stunning art piece, our Charcoal Sketch Art blends skill and creativity to deliver breathtaking results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CharcoalSketch;
