import './Resign.css';
import image2 from '../assets/resign/resign.JPG';
import image3 from '../assets/resign/resignArt.JPG';
import image1 from '../assets/resign/resignArt_three.JPG';
import SideMenu from './SideMenu';
import star from '../assets/icon/star.png';
import check from '../assets/icon/check.png';

const ResignArt = () => {
  return (
    <>
      <section className="resin-intro-section">
        <h2>
          Resign <span>Art</span>
        </h2>
        <p className="resin-subtitle">Turning Imagination into Glossy Reality</p>
        <p className="resin-description">
          Resin Art merges craftsmanship with innovation to create mesmerizing, glass-like finishes and dynamic 3D effects.
          Whether it’s ocean waves, abstract pours, or embedded elements, each piece is handcrafted with precision and creativity.
        </p>
      </section>

      <section className="resin-main-container">
        <SideMenu />

        <div className="resin-content">
          <img src={image1} alt="Resin Art" className="resin-main-image" />

          <div className="resin-description-block">
            <h3>What is Resign Art?</h3>
            <p>
              Resign Art is an innovative approach to art that transforms discarded materials into stunning,
              meaningful creations. By repurposing waste into unique artworks, we give new life to forgotten objects,
              proving that sustainability and creativity can go hand in hand.
            </p>
            <p>
              This form of art challenges conventional thinking by embracing imperfections and turning them into beauty.
              Artists use materials such as broken glass, wood scraps, metal pieces, plastics, and old electronics to craft
              pieces that are not only visually striking but also environmentally conscious.
            </p>
            <p>
              Each artwork tells a story—not just of artistic vision, but of renewal and responsibility.
              Resign Art promotes eco-awareness, encouraging viewers to rethink consumption and recognize
              the potential in what might otherwise be considered trash.
            </p>
            <p>
              Whether abstract or representational, bold or minimal, Resign Art stands at the intersection of innovation and
              sustainability, inspiring both conversation and change. It's not just about creating art; it's about creating a movement.
            </p>

            <h3>Why Choose Resign Art?</h3>
            <ul className="resin-reason-list">
              <li>
                <img src={star} alt="star" className="resin-icon" />
                <div>
                  <strong>Sustainability</strong>
                  <p>
                    Every piece reduces waste and promotes a greener planet. It encourages mindful living by turning discarded
                    items into lasting beauty. Resign Art serves as a creative reminder that art can drive positive environmental change.
                  </p>
                </div>
              </li>
              <li>
                <img src={star} alt="star" className="resin-icon" />
                <div>
                  <strong>Uniqueness</strong>
                  <p>
                    No two pieces are ever the same, making them truly one-of-a-kind. Each creation carries its own story, shaped by the
                    materials and the artist’s vision. This individuality adds character and depth, making every artwork a personal statement.
                  </p>
                </div>
              </li>
              <li>
                <img src={star} alt="star" className="resin-icon" />
                <div>
                  <strong>Creativity with Purpose</strong>
                  <p>
                    Our art is not just visually appealing but also carries an eco-conscious message.
                    It challenges traditional notions of beauty by embracing reclaimed materials.
                    Through each piece, we aim to inspire sustainability, innovation, and thoughtful living.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="resin-creations">
            <div className="resin-images">
              <img src={image2} alt="Resin Sample 1" className="resin-sample-image" />
              <img src={image3} alt="Resin Sample 2" className="resin-sample-image" />
            </div>

            <div className="resin-creations-text">
              <h3>Our Resign Art Creations</h3>
              <ul className="resin-creation-list">
                <li>
                  <img src={check} alt="check" className="resin-check-icon" />
                  <div><strong>Upcycled Sculptures</strong> - Turning scrap materials into breathtaking art pieces.</div>
                </li>
                <li>
                  <img src={check} alt="check" className="resin-check-icon" />
                  <div><strong>Mixed Media Art & Eco-Friendly Décor</strong> - Unique, handcrafted items that add charm to any space.</div>
                </li>
                <li>
                  <img src={check} alt="check" className="resin-check-icon" />
                  <div><strong>Custom Creations</strong> - Personalized artwork made from repurposed materials.</div>
                </li>
                <li>
                  <img src={check} alt="check" className="resin-check-icon" />
                  <div><strong>Workshops & Awareness</strong> - Educating communities on sustainable art practices.</div>
                </li>
              </ul>
              <h3>Discover the Beauty of Resign Art</h3>
              <p>
                Be a part of the sustainable art revolution! Whether you're an art lover, a collector, or someone who believes in environmental responsibility,
                Resign Art is for you. Explore our collection and discover the beauty of upcycled art.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResignArt;
