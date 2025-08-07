import './SideMenu.css';
import { NavLink } from 'react-router-dom';

// Import icons
import textureicon from '../assets/icon/tile.png';
import FabricPaitings from '../assets/icon/fabric_paiting.png';
import canvasPaint from '../assets/icon/canvas.png';
import arylicPouring from '../assets/icon/acrylic-paint.png';
import resignArt from '../assets/icon/resin.png';
import charcoal from '../assets/icon/charcoal-paiting.png';

const menuItems = [
  { to: '/art-category/textureArt', label: 'Texture Art', icon: textureicon },
  { to: '/art-category/canvasPainting', label: 'Canvas Painting', icon: canvasPaint },
  { to: '/art-category/charcoalSketch', label: 'Charcoal Sketch', icon: charcoal },
  { to: '/art-category/resinArt', label: 'Resin Art', icon: resignArt },
  { to: '/art-category/acrylicPouringArt', label: 'Acrylic Pouring Art', icon: arylicPouring },
  { to: '/art-category/fabricPainting', label: 'Fabric Painting', icon: FabricPaitings },
];

const SideMenu = () => {
  return (
    <div className="SideMenu-sidebar">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <div className="menu-item-content">
                <span className="icon-wrapper">
                  <img src={item.icon} alt={item.label} />
                </span>
                <span className="menu-text">{item.label}</span>
              </div>
              <span className="menu-arrow">&gt;</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
