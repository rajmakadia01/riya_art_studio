import './FabricPaiting.css';
import fabric_paiting from '../assets/Fabric_paiting/fabric_paiting_3.jpg'
import fabric_paiting_1 from '../assets/Fabric_paiting/fabric_paiting_1.PNG'
import fabric_paiting_2 from '../assets/Fabric_paiting/fabric_paiting_2.PNG'
import star from '../assets/icon/star.png'
import check from '../assets/icon/check.png'
import SideMenu from './SideMenu';

const FabricPaiting = () => {
  return (
      <>
    <div className="texture-section">
      <h2>
        Fabric <span>Paiting</span>
      </h2>
      <p>
      From elegant florals to bold abstracts, our hand-painted textiles blend creativity and craftsmanship. Discover wearable and decorative pieces that speak to your style, culture, and personality — all painted with precision and passion.
      </p>
    </div>
    <div className="texture-container">
      <SideMenu/>

      <div className="texture-content">
        <img src={fabric_paiting} alt="Texture Art" className="texture-image" />

        <div className="texture-description">
          <h3>What is Fabric Painting?</h3>
          <p>
          Fabric Painting is a creative art form that brings textiles to life with beautiful hand-painted designs. 
          Using high-quality fabric paints, we create stunning patterns, intricate details, and vibrant illustrations on 
          clothing, home decor, and accessories. This technique adds a personal touch to fabrics, making each piece a 
          wearable or decorative masterpiece.
          </p>
          <p>
          Artists often use brushes, sponges, stencils, or even block printing techniques to apply paint to a variety of 
          fabrics such as cotton, silk, denim, and canvas. Once heat-set, these designs become long-lasting and washable, 
          making them perfect for both fashion and functional items.
          </p>
          <p>
          From bold florals and traditional motifs to modern abstract designs, fabric painting allows for limitless 
          creativity. It can turn a plain T-shirt, cushion cover, saree, or tote bag into a stunning expression of 
          style and artistry.
          </p>
          <p>
          More than just decoration, fabric painting also celebrates culture, craftsmanship, and individuality. 
          Whether you're revamping old garments or designing something from scratch, each painted piece becomes 
          a form of self-expression that blends utility with beauty.
          </p>

          <h3>Why Choose Texture Art?</h3>
          <ul className="reasons-list">
            <li>
            <img src={star} className='icons'/>
              <div>
                <strong>Custom & Handcrafted</strong>
                <p>Every design is unique and painted with precision.
                Each brushstroke reflects the artist’s skill, creativity, and attention to detail.
                No mass production—just one-of-a-kind art made with love and care.</p>
              </div>
            </li>
            <li>
            <img src={star} className='icons'/>

              <div>
                <strong>Wearable Art </strong>
                <p>Transform ordinary clothing into stylish, artistic fashion.
                From sarees to jackets, each piece becomes a canvas of self-expression.
                Stand out with designs that are as bold, elegant, or playful as you are.</p>
              </div>
            </li>
            <li>
            <img src={star} className='icons'/>

              <div>
                <strong>Perfect for Home Decor </strong>
                <p>Personalize curtains, pillowcases, bedsheets, and more.
                Fabric painting adds charm, color, and character to everyday living spaces.
                Create a cozy, artistic atmosphere that reflects your unique style.</p>
              </div>
            </li>
            <li>
            <img src={star} className='icons'/>

              <div>
                <strong>Long-Lasting & Washable </strong>
                <p>High-quality fabric paints ensure durability.
                The colors stay vibrant even after multiple washes and regular use.
                Perfect for both decorative and practical items that stand the test of time.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="creations-section">
      <div className="creations-images">
        <img src={fabric_paiting_1} alt="Hand painting texture" className="creation-img" />
        <img src={fabric_paiting_2} alt="Abstract woman art" className="creation-img" />
      </div>

      <div className="creations-text">
        <h3>Our Creations</h3>
        <ul className="creation-list">
          <li>
          <img src={check} className='icons_check'/>

            <strong>Hand-Painted Clothing</strong> - Custom t-shirts, dresses, scarves, and more.
          </li>
          <li>
          <img src={check} className='icons_check'/>

            <strong>Home Decor Fabrics</strong> - Cushion covers, table runners, wall hangings, and bedsheets.
          </li>
          <li>
          <img src={check} className='icons_check'/>

            <strong>Traditional & Modern Designs</strong> - From ethnic motifs to contemporary patterns.
          </li>
          <li>
          <img src={check} className='icons_check'/>

            <strong>Custom Artwork on Fabric</strong> - Personalized designs to match your style.
          </li>
        </ul>

        <h3>Express Yourself with Fabric Art</h3>
        <p>
        Whether it’s a custom outfit, a unique home decor piece, or a gift for someone special, fabric painting adds artistic charm to everyday textiles. Let your creativity shine through colors and patterns!
        </p>
      </div>
    </div>
      </div>
      
    </div>
    </>
  );
};

export default FabricPaiting;
