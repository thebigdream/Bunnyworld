import * as e from './events.mjs';
import r from "https://esm.sh/quick-random";
import * as d from './data.mjs';
import * as g from './game.mjs';

export function generateCharacter() {
  const preset = r.elementFromArray(d.presets);
  return {
    ...preset,
    desires: [...preset.desires]
      .sort(() => 0.5 - Math.random())       // shuffle the array
      .slice(0, r.number(1, 2)),            // take 1–2 unique desires
    interests: [...preset.interests]
      .sort(() => 0.5 - Math.random())       // shuffle the array
      .slice(0, r.number(1, 2)),            // take 1–2 unique interests
    id: r.number(1, 9999999),
    name: `${r.elementFromArray(preset.names.first)} ${r.elementFromArray(preset.names.last)}`,
    location: r.elementFromArray(g.locations).name,
    virgin: true,
  }
}

export function populateLocationPanel() {
  const locationPanel = document.getElementById('location-panel')
  var locationCharacters = g.characters.filter(c => c.location === g.targetLocation.name)

  locationPanel.innerHTML = `
  <h2 class="bg-[var(--c-8)] px-2 py-2 text-white text-lg"> > ${g.targetLocation.name}</h2>
    <h3 class="bg-[var(--c-3)] border-c-9 px-2 py-1 text-md">Description </h3>
      <p class="p-2">${g.targetLocation.description}</p>
    <h3 class="bg-[var(--c-4)] border-t px-2 py-1  text-md">Actions</h3>
    <div id="location-actions" class="m-3">
      <a class="btn border-[var(--c-5)] border-r-1 border-b-1 bg-[var(--c-2)] hover:brightness-90 p-2 mr-1 rounded-md">🔍</a><a class="btn border-[var(--c-5)] border-r-1 border-b-1 bg-[var(--c-3)] hover:brightness-90 p-2 mr-1 rounded-md">🐟</a>
    </div>
    <h3 class="bg-[var(--c-5)] border-t px-2 py-1 text-md">Characters</h3>
    <div class="m-2" id="location-characters">
        ${locationCharacters.map(c => `
          <a href="#" data-id="${c.id}" class="btn character border-[var(--c-5)] border-r-1 border-b-1 bg-[var(--c-1)] hover:brightness-90 my-1 px-2 py-1 rounded-md block">
            ${c.name} 
            <span class="text-xxs float-right text-[var(--c-7)]">
              ${c.race}
            </span>
          </a>
        `).join('')}
  </div>`
}

export function populateCharacterPanel() {
  const characterPanel = document.getElementById('character-panel')

  characterPanel.innerHTML = `
    <h2 class="bg-[var(--c-8)] px-2 py-1 text-white text-lg"> > ${g.targetCharacter.name}</h2>
      <div class="style="overflow: auto" style="display:flex; align-items:flex-start;">
        <ul class="ml-8 p-1 my-1">
            <li>Interests: ${Array.isArray(g.targetCharacter.interests) ? g.targetCharacter.interests.join(', ') : g.targetCharacter.interests}</li>
            <li>Desires: ${Array.isArray(g.targetCharacter.desires) ? g.targetCharacter.desires.join(', ') : g.targetCharacter.desires}</li>
        </ul>
        <img class="m-3" style="width: 25%;float: right; object-fit: cover; border-radius: 50%" src="${g.targetCharacter.img.portrait}"></img>
        <div id="character-info"></div>
      </div>
      <div class="p-3" id="action-buttons"><a class="btn border-[var(--c-5)] border-r-1 border-b-1 bg-[var(--c-2)] hover:brightness-90 mr-1 p-2 rounded-md">💬</a><a class="btn border-[var(--c-5)] border-r-1 border-b-1 bg-[var(--c-3)] hover:brightness-90 mr-1 p-2 rounded-md">🎁</a></div>
      `
}

export function populatePlayerPanel() {
  const playerPanel = document.getElementById('player-panel')

  playerPanel.innerHTML = `
  <h2 class="bg-[var(--c-8)] px-2 py-1 text-white text-lg"> > Player</h2>
  <h3 class="bg-[var(--c-3)] border-t border-c-9 px-2 py-1 text-md">Inventory</h3>
  <ul class="ml-8 my-1 p-1">
    <li>${Array.isArray(g.player.inventory) ? g.player.inventory.join(', ') : g.player.inventory}</li>
  </ul>
  `
}

export function createPopup(message, image, buttons = []) {
  const popup = Object.assign(document.createElement('div'), {
    className: 'popup',
    innerHTML: `
      <div class="popup-content bg-[var(--c-1)] border rounded-lg p-4">
        <span class="close">&times;</span>
        <p class="m-2">${message}</p>
        ${image ? `<img class="m-3" src="${image}">` : ''}
        <div class="popup-buttons"></div>
      </div>
    `
  });

  popup.querySelector('.close').onclick = () => popup.remove();
  popup.onclick = e => e.target === popup && popup.remove();

  const container = popup.querySelector('.popup-buttons');
  buttons.forEach(label => container.appendChild(Object.assign(
    document.createElement('a'),
    {
      textContent: label,
      className: 'btn border-[var(--c-5)] border-r-1 border-b-1 bg-[var(--c-1)] hover:brightness-90 m-r-1 p-2 rounded-md m-2',
      onclick: () => (console.log(`Button clicked: ${label}`), popup.remove())
    }
  )));

  document.body.appendChild(popup);
}

export function refreshUI() {
  populateCharacterPanel(g.targetCharacter)
  populateLocationPanel(g.targetLocation)
  populatePlayerPanel(g.player)
}