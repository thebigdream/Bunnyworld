export const hobbies = [ "athletics", "dancing", "gaming", "gardening", "reading", "swimming" ]
export const items = [ "coffee", "Switch 2"]
export const locations = [
    { name: "Residential District", loot: ["Switch 2"], description: "Bustling rows of residential houses and apartments which are home to most of the city's population." },
    { name: "Commercial District", loot: ["coffee"], description: "Dozens of storefronts teaming with all the goods your heart could ever desire (and more!)." },
    { name: "Farmland", loot: ["carrot"], description: "Self-managed plots of agricultural farmland growing everything from carrots to bananas."},
]
export const presets = [ 
    { 
        "desires": [ "carrot", "chocolate egg" ],
        "img": {
            "gender": "male",
            "portrait": "./img/bunny01.png",
        },
        "interests": [ "egg hunting", "picking cabbages", ],
        "names": {
            "first": [ "James", "Robert", ],
            "last": [ "Field", "Rabbitson" ]
        },
        "race": "bunny"
    },
    { 
        "desires": [ "carrot", "chocolate egg" ],
        "img": {
            "gender": "female",
            "portrait": "./img/bunny02.png",
        },
        "interests": [ "ballet", "egg hunting" ],
        "names": {
            "first": [ "Angelina", "Simone", ],
            "last": [ "Field", "Rabbitson" ]
        },
        "race": "bunny"
    },
    { 
        "desires": [ "hat", "spade" ],
        "img": {
            "gender": "male",
            "portrait": "./img/gnome02.png",
        },
        "interests": [ "bird watching", "gardening" ],
        "names": {
            "first": [ "Bill", "Harold", "Samuel", ],
            "last": [ "Barren", "Ditch", "Nackle" ]
        },
        "race": "gnome"
    },
]
export const mapObjects = [
    {
    id: 'farmhouse01',
    name: 'The Farming Estates',
    position: [1210, 645],
    icon: {
      iconUrl: './img/farmhouse01.png',
      iconSize: [41, 41],
      iconAnchor: [16, 32],
      popupAnchor: [-80, -110],
      className: 'farmhouse'
    }
  },
    {
    id: 'commercial01',
    name: 'Commercial District',
    position: [1302, 420],
    icon: {
      iconUrl: './img/commercial01.png',
      iconSize: [41, 41],
      iconAnchor: [16, 32],
      popupAnchor: [-85, -110],
      className: 'commercial'
    }
  },
  {
    id: 'residential01',
    name: 'Residential District',
    position: [1435, 375],
    icon: {
      iconUrl: './img/residential01.png',
      iconSize: [41, 41],
      iconAnchor: [16, 16],
      popupAnchor: [-85, -72],
      className: 'residential'
    }
  },
];