import React from 'react';
import './GlobalLoader.css';

export default function GlobalLoader() {
  return (
    <div className="global-loader" role="status" aria-live="polite" aria-label="Loading Riya Art Studio">
      <div className="loader-art" aria-hidden="true">
        <span className="paint-orbit paint-orbit-one" />
        <span className="paint-orbit paint-orbit-two" />
        <span className="paint-dot dot-one" />
        <span className="paint-dot dot-two" />
        <span className="paint-dot dot-three" />
        <div className="loader-mark">
          <span className="loader-letter">R</span>
          <span className="loader-brush" />
        </div>
      </div>
      <div className="loader-brand">RIYA <span>ART STUDIO</span></div>
      <p>Bringing art to life</p>
      <div className="loader-progress"><span /></div>
    </div>
  );
}
