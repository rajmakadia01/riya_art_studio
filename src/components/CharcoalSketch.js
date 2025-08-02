import './CharcolSketch.css';
import image2 from '../assets/charcoal/charcoal1.JPG'
import image3 from '../assets/charcoal/charcoal2.JPG'
import image1 from '../assets/charcoal/charcoal.jpeg'
import SideMenu from './SideMenu';
import star from '../assets/icon/star.png'
import check from '../assets/icon/check.png'

const CharcoalSketch = () => {
  return (
      <>
    <div className="texture-section">
      <h2>
      Charcoal Sketch  <span>Art</span>
      </h2>
      <p>
      Timeless Beauty in Black & White
      </p>
      <p>
      Charcoal sketching is a classic medium known for its bold lines, deep contrasts, and emotional expression. Each stroke brings out fine details and dramatic depth, making it perfect for portraits, family moments, and timeless scenes.
      </p>
    </div>
    <div className="texture-container">
      <SideMenu />

      <div className="texture-content">
        <img src={image1} alt="Texture Art" className="charcoal-image" />

        <div className="texture-description">
          <h3>What is Charcoal Sketch Art?</h3>
          <p>
          Charcoal Sketch Art is a captivating form of drawing that uses charcoal to create deep contrasts, 
          rich textures, and expressive details. Known for its raw, bold strokes and delicate shading, charcoal 
          sketching brings portraits, landscapes, and abstract compositions to life with timeless elegance.
          </p>
          <p>
          Artists often favor charcoal for its versatility—it can produce both intense black lines and soft, 
          subtle gradients, allowing for dramatic lighting effects and atmospheric depth. Whether using compressed 
          charcoal, vine charcoal, or charcoal pencils, the medium offers fluidity and spontaneity in every stroke.
          </p>
          <p>
          Charcoal is also highly responsive to touch, making it ideal for gesture drawings and expressive mark-making. 
          Its erasable nature allows for constant refinement, giving the artist freedom to experiment and evolve each piece organically.
          </p>
          <p>
          From classical figure studies to contemporary explorations, charcoal sketch art bridges tradition and modernity, 
          making it a favorite medium for artists and collectors alike. Its monochromatic beauty and tactile quality 
          continue to inspire awe and emotional connection.
          </p>

          <h3>Why Choose Charcoal Sketch Art?</h3>
          <ul className="reasons-list">
            <li>
            <img src={star} className='icons'/>
              <div>
                <strong>Classic & Timeless</strong>
                <p>The monochrome beauty of charcoal sketches never goes out of style.
                Its elegant simplicity complements both traditional and contemporary aesthetics effortlessly.</p>
              </div>
            </li>
            <li>
            <img src={star} className='icons'/>

              <div>
                <strong>Expressive & Detailed</strong>
                <p>Perfect for capturing emotions, depth, and realism.
                Every stroke conveys mood and movement, making each sketch powerfully evocative.</p>
              </div>
            </li>
            <li>
            <img src={star} className='icons'/>

              <div>
                <strong>Handcrafted & Unique</strong>
                <p> Every sketch is one-of-a-kind, made with precision and passion.
                The artist's personal touch and technique shine through in every line and shade.</p>
              </div>
            </li>
            <li>
            <img src={star} className='icons'/>

              <div>
                <strong>Perfect for Home & Gifts</strong>
                <p> Ideal for personal collections, gifting, or decorative artwork.
                Charcoal sketches add a sophisticated, heartfelt touch to any space or occasion.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="creations-section">
      <div className="creations-images">
        <img src={image2} alt="Hand painting texture" className="creation-img" />
        <img src={image3} alt="Abstract woman art" className="creation-img" />
      </div>

      <div className="creations-text">
        <h3>Our Charcoal Sketch Art Creations</h3>
        <ul className="creation-list">
          <li>
          <img src={check} className='icons_check'/>

            <strong>Realistic Portrait Sketches</strong> - Hand-drawn portraits with intricate details.
          </li>
          <li>
          <img src={check} className='icons_check'/>

            <strong>Abstract & Conceptual Art</strong> -  Unique charcoal compositions with artistic depth.
          </li>
          <li>
          <img src={check} className='icons_check'/>

            <strong>Landscapes & Nature Sketches</strong> - Scenic beauty captured in black and white.
          </li>
          <li>
          <img src={check} className='icons_check'/>

            <strong>Custom Charcoal Art </strong> - Personalized sketches based on your vision.
          </li>
        </ul>

        <h3>Bring Your Vision to Life</h3>
        <p>
        Whether you want a striking portrait, a memorable gift, or a stunning art piece, our Charcoal Sketch Art blends skill and creativity to deliver breathtaking results.
        </p>
      </div>
    </div>
      </div>
      
    </div>
    </>
  );
};

export default CharcoalSketch;
