import './FabricPaiting.css';
import fabricPaintingMain from '../assets/Fabric_paiting/fabric_paiting_3.jpg';
import fabricSample1 from '../assets/Fabric_paiting/fabric_paiting_1.PNG';
import fabricSample2 from '../assets/Fabric_paiting/fabric_paiting_2.PNG';
import star from '../assets/icon/star.png';
import check from '../assets/icon/check.png';
import SideMenu from './SideMenu';

const FabricPainting = () => {
  return (
    <>
      <section className="fabric-intro-section">
        <h2>
          Fabric <span>Painting</span>
        </h2>
        <p className="fabric-subtitle">
          From elegant florals to bold abstracts, our hand-painted textiles blend creativity and craftsmanship. Discover wearable and decorative pieces that speak to your style, culture, and personality — all painted with precision and passion.
        </p>
      </section>

      <section className="fabric-main-container">
        <SideMenu />

        <div className="fabric-content">
          <img src={fabricPaintingMain} alt="Fabric Painting" className="fabric-main-image" />

          <div className="fabric-description-block">
            <h3>What is Fabric Painting?</h3>
            <p>
              Fabric Painting is a creative art form that brings textiles to life with beautiful hand-painted designs. Using high-quality fabric paints, we create stunning patterns, intricate details, and vibrant illustrations on clothing, home decor, and accessories.
            </p>
            <p>
              Artists often use brushes, sponges, stencils, or block printing techniques on various fabrics like cotton, silk, denim, and canvas. Once heat-set, these designs become long-lasting and washable.
            </p>
            <p>
              From bold florals and traditional motifs to modern abstract designs, fabric painting allows for limitless creativity. It transforms everyday items into artistic expressions of style and individuality.
            </p>
            <p>
              More than decoration, fabric painting celebrates culture, craftsmanship, and self-expression.
            </p>

            <h3>Why Choose Fabric Painting?</h3>
            <ul className="fabric-reason-list">
              <li>
                <img src={star} alt="star" className="fabric-icon" />
                <div>
                  <strong>Custom & Handcrafted</strong>
                  <p>
                    Every design is painted with love and precision — no mass production, just one-of-a-kind wearable art.
                  </p>
                </div>
              </li>
              <li>
                <img src={star} alt="star" className="fabric-icon" />
                <div>
                  <strong>Wearable Art</strong>
                  <p>
                    Turn garments into canvases — t-shirts, sarees, jackets, and more become statements of your personal style.
                  </p>
                </div>
              </li>
              <li>
                <img src={star} alt="star" className="fabric-icon" />
                <div>
                  <strong>Perfect for Home Decor</strong>
                  <p>
                    Add charm and character to spaces with hand-painted curtains, cushions, and decor.
                  </p>
                </div>
              </li>
              <li>
                <img src={star} alt="star" className="fabric-icon" />
                <div>
                  <strong>Long-Lasting & Washable</strong>
                  <p>
                    Our colors stay vibrant wash after wash — art that’s both beautiful and durable.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="fabric-creations">
            <div className="fabric-images">
              <img src={fabricSample1} alt="Hand-painted textile 1" className="fabric-sample-image" />
              <img src={fabricSample2} alt="Hand-painted textile 2" className="fabric-sample-image" />
            </div>

            <div className="fabric-creations-text">
              <h3>Our Fabric Art Creations</h3>
              <ul className="fabric-creation-list">
                <li>
                  <img src={check} alt="check" className="fabric-check-icon" />
                  <div><strong>Hand-Painted Clothing</strong> - Custom t-shirts, dresses, scarves, and more.</div>
                </li>
                <li>
                  <img src={check} alt="check" className="fabric-check-icon" />
                  <div><strong>Home Decor Fabrics</strong> - Cushion covers, runners, bedsheets, and wall hangings.</div>
                </li>
                <li>
                  <img src={check} alt="check" className="fabric-check-icon" />
                  <div><strong>Traditional & Modern Designs</strong> - From ethnic to abstract patterns.</div>
                </li>
                <li>
                  <img src={check} alt="check" className="fabric-check-icon" />
                  <div><strong>Custom Artwork</strong> - Personalized painted fabrics to match your vibe.</div>
                </li>
              </ul>

              <h3>Express Yourself with Fabric Art</h3>
              <p>
                Whether it’s a unique gift or a custom decor piece, fabric painting brings vibrant artistry into everyday life. Celebrate individuality with every stroke.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FabricPainting;
