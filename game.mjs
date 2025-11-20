import * as e from './events.mjs';
import * as f from './functions.mjs';
import * as d from './data.mjs';
import r from "https://esm.sh/quick-random";


export var characters = [];
export var player = {
    inventory: [ "spade", "carrot" ],
}
export var locations = d.locations
export var currentTime = 12
export var targetCharacter = null
export var targetLocation = r.elementFromArray(locations)

Array.from({ length: 20 }, () => characters.push(f.generateCharacter()))
targetCharacter = characters[0]
console.log(targetCharacter)
f.refreshUI()

window.addEventListener('click', (e) => {
    console.log(e.target, e.target.innerText);

    if (e.target.classList.contains('farmhouse')) {
        targetLocation = locations.find((l) => l.name === 'Farmland')
        f.refreshUI()
    }

    if (e.target.classList.contains('residential')) {
        targetLocation = locations.find((l) => l.name === 'Residential District')
        f.refreshUI()
    }

    if (e.target.classList.contains('commercial')) {
        targetLocation = locations.find((l) => l.name === 'Commercial District')
        f.refreshUI()
    }

    // Randomise character location when time passes
    if (e.target.id === 'time-button') {
        characters.forEach(char => {
            char.location = r.elementFromArray(locations).name;
        });
        f.refreshUI()
    }

    if (e.target.classList.contains('character')) {
        var id = e.target.dataset.id
        targetCharacter = characters.find(c => c.id == id)
        f.refreshUI()
        console.log(targetCharacter)
    }

    if (e.target.innerText === '🔍') {
        let foundItem = r.elementFromArray(targetLocation.loot)
        player.inventory.push(foundItem)
        f.createPopup(`You find a ${foundItem} in the ${targetLocation.name}`, null)
        f.refreshUI()
    }

    if (e.target.innerText === '🐟') {
        f.createPopup(`You catch a fish in ${targetLocation.name}`, null)
        f.refreshUI()
    }

    if (e.target.innerText === '🎁') {
        // Find the first desired item the player has
        const desiredItem = targetCharacter.desires.find(item =>
            player.inventory.includes(item)
        )

        if (desiredItem) {
            f.createPopup(
            `You give ${targetCharacter.name} the ${desiredItem}. "Oh how thoughtful, I've been looking for this everywhere," they reply.\n\nThey offer to compensate you in return.`,
            targetCharacter.img.portrait,
            ["Cash"]
            );

            // Remove that item from inventory
            player.inventory.splice(player.inventory.indexOf(desiredItem), 1);

            f.refreshUI();
        } else {
            f.createPopup(`You don't have what ${targetCharacter.name} desires.`, null);
        }
    }

    if (e.target.innerText === '💬') {
        f.createPopup(`You talk with ${targetCharacter.name}.`, targetCharacter.img.portrait)
        f.refreshUI()
    }

    // Actions
    if (e.target.innerText == 'Cash') {
        f.createPopup(`${targetCharacter?.name} hands you $10.`, targetCharacter.img.portrait)
    }
});