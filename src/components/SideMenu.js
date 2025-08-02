import './SideMenu.css';
import { NavLink } from 'react-router-dom';

const SideMenu = () => {
  return (
    <div className="SideMenu-sidebar">
      <ul>
        <li>
          <NavLink
            to="/textureArt"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <span>🎨</span> Texture Art <i>&gt;</i>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/charcoalSketch"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <span>🖌️</span> Charcoal Sketch <i>&gt;</i>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resignArt"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <span>🧪</span> Resin Art <i>&gt;</i>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/acrylicPouring"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <span>💧</span> Acrylic Pouring Art <i>&gt;</i>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fabricPainting"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <span>🧵</span> Fabric Painting <i>&gt;</i>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/canvasPainting"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <span>🖼️</span> Canvas Painting <i>&gt;</i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
