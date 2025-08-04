import './TextureArt.css';
import TextureArt from '../assets/TextureArt/TextureArt.JPG';
import TextureImage from '../assets/TextureArt/TextureImage.JPG';
import TextureArt_Image from '../assets/TextureArt/TextureArt_image.JPG';
import star from '../assets/icon/star.png';
import check from '../assets/icon/check.png';

import SideMenu from './SideMenu';

const TextureArtSection = () => {
  return (
    <>
      <section className="texture-section">
        <h2>
          Texture<span>Art</span>
        </h2>
        <p>Bringing Depth and Dimension to Creativity</p>
        <p>
          It invites viewers to not only admire but also feel the art—making it a uniquely immersive experience.
          From bold abstracts to delicate forms, texture adds drama, emotion, and a tactile element that elevates every artwork.
        </p>
      </section>

      <section className="texture-container">
        <SideMenu />

        <div className="texture-content">
          <img src={TextureArt} alt="Texture Art" className="texture-image" />

          <div className="texture-description">
            <h3>What is Texture Art?</h3>
            <p>
              Texture Art is a unique form of artistic expression that adds depth and dimension to paintings and
              sculptures. By incorporating various materials like sand, fabric, plaster, and acrylic pastes,
              texture art creates a tactile experience that enhances visual appeal. Every brushstroke and
              layered detail adds character, making each piece truly one-of-a-kind.
            </p>
            <p>
              This art form invites viewers not just to see, but to feel the artwork, engaging the senses on a deeper level.
              Artists often use tools like palette knives, sponges, or even their hands to build layers and create dramatic
              surface effects. Whether rough or smooth, raised or indented, the textures evoke emotion, movement, and realism
              in ways that flat surfaces cannot.
            </p>
            <p>
              Texture Art can be both abstract and realistic, allowing for bold experimentation or subtle depth.
              It is commonly used in modern and contemporary art to break the monotony of traditional flat canvases,
              turning ordinary spaces into immersive experiences. From minimalist reliefs to richly layered compositions,
              texture art redefines how we interact with visual media.
            </p>

            <h3>Why Choose Texture Art?</h3>
            <ul className="reasons-list">
              <li>
                <img src={star} alt="icon" className="icons" />
                <div>
                  <strong>Unique & Expressive</strong>
                  <p>
                    Every texture artwork is distinct, offering a rich, dynamic feel.
                    The intricate layers and tactile elements bring each piece to life, sparking curiosity and emotional connection.
                  </p>
                </div>
              </li>
              <li>
                <img src={star} alt="icon" className="icons" />
                <div>
                  <strong>Captivating Aesthetics</strong>
                  <p>
                    The interplay of light and shadow makes textured art visually stunning.
                    Its multidimensional surface draws the eye from every angle, creating an ever-evolving visual experience.
                  </p>
                </div>
              </li>
              <li>
                <img src={star} alt="icon" className="icons" />
                <div>
                  <strong>Tactile Experience</strong>
                  <p>
                    Unlike flat paintings, texture art invites touch, creating an immersive experience.
                    The raised surfaces and varied materials engage the senses, making the viewer feel more connected to the artwork.
                  </p>
                </div>
              </li>
              <li>
                <img src={star} alt="icon" className="icons" />
                <div>
                  <strong>Perfect for Decor</strong>
                  <p>
                    Adds elegance and personality to homes, offices, and commercial spaces.
                    Its unique textures serve as conversation starters and elevate the ambiance of any interior.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="creations-section">
            <div className="creations-images">
              <img src={TextureImage} alt="Hand painting texture" className="creation-img" />
              <img src={TextureArt_Image} alt="Abstract woman art" className="creation-img" />
            </div>

            <div className="creations-text">
              <h3>Our Texture Art Creations</h3>
              <ul className="creation-list">
                <li>
                  <img src={check} alt="check" className="icons_check" />
                  <div><strong>Acrylic Texture Paintings</strong> - Vibrant, textured artworks with intricate layering.</div>
                </li>
                <li>
                  <img src={check} alt="check" className="icons_check" />
                  <div><strong>Mixed Media Art</strong> - A blend of different materials to create striking effects.</div>
                </li>
                <li>
                  <img src={check} alt="check" className="icons_check" />
                  <div><strong>3D Wall Art</strong> - Bold and sculptural pieces that transform any space.</div>
                </li>
                <li>
                  <img src={check} alt="check" className="icons_check" />
                  <div><strong>Custom Texture Designs</strong> - Personalized artwork tailored to your style.</div>
                </li>
              </ul>

              <h3>Discover the Beauty of Texture Art</h3>
              <p>
                At Riya Art Studio, we specialize in handcrafted texture art that adds emotion and depth to any setting.
                Whether you're looking for a statement piece for your living room or a custom-made artwork,
                our creations bring creativity to life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TextureArtSection;
