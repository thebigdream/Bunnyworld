import * as d from './data.mjs';
import * as f from './functions.mjs';
import * as g from './game.mjs';

// --- Map Initialization ---
const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -5,
  maxZoom: 5,
  attributionControl: false,
  zoomControl: false,
  scrollWheelZoom: false,
  doubleClickZoom: false,  
  touchZoom: false 
});

// Bounds of the image
const bounds = [[0, 0], [1000, 1000]];

// --- Add Image Overlay (click-through, below markers) ---
const overlay = L.imageOverlay('/img/map.png', bounds, {
  pane: 'shadowPane' // Ensure overlay is below markerPane
});

overlay.on('add', () => {
  overlay.getElement().style.pointerEvents = 'none'; // Click-through
});

overlay.addTo(map);

// --- Add Markers ---
d.mapObjects.forEach(obj => {
  const icon = L.icon(obj.icon); // keep your dynamic icon

  const marker = L.marker(obj.position, { icon })
    .addTo(map)
    .bindPopup(obj.name); // keep dynamic popup content

  // Add Tailwind classes to the marker element
  const el = marker.getElement();
  if (el) {
    el.classList.add(
      'cursor-pointer',
      'hover:scale-110',
      'transition-transform',
      'border-2',
      'border-white',
      'rounded-full'
    );
  }

  // Optional: style popup when it opens
  marker.on('popupopen', e => {
    const popupEl = e.popup._container;
    if (popupEl) {
      popupEl.classList.add(
        'bg-white',
        'p-2',
        'rounded-lg',
        'text-sm'
      );
    }
  });
});


// --- Fit map to image bounds ---
map.fitBounds(bounds);
