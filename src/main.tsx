import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

function applyDesktopScale() {
  const root = document.getElementById('root');
  const outer = document.getElementById('scale-outer');
  if (!root || !outer) return;

  const DESKTOP_WIDTH = 1280;

  if (window.innerWidth >= DESKTOP_WIDTH) {
    root.style.transform = '';
    outer.style.height = '';
    return;
  }

  const scale = window.innerWidth / DESKTOP_WIDTH;
  root.style.transform = `scale(${scale})`;
  outer.style.height = `${root.scrollHeight * scale}px`;
}

window.addEventListener('load', applyDesktopScale);
window.addEventListener('resize', applyDesktopScale);
new ResizeObserver(applyDesktopScale).observe(document.getElementById('root')!);
