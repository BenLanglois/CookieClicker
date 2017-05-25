var cookies = 0;
var cps = 0;
var cpc = 1;
var showHelp = true;

var images = {
  "Chocolate Chip": "http://images.clipartpanda.com/chocolate-chip-cookie-clipart-mordida_do_biscoito_dos_desenhos_animados_escultura_fotografias-r56b8af72f9664abab0be513d37b081d1_x7sa6_8byvr_512.jpg",
  "Oreo": "http://cdn.skim.gs/image/upload/v1456337658/msi/oreo-cookie-isolated_s9xwjo.jpg",
  "M&M Cookie": "https://cdn.shopify.com/s/files/1/0302/2969/products/great-cookie-m_and_m-cookie-03_1024x1024.jpg?v=1390499314",
  "Oatmeal Raisin": "https://soulfullysweet.com/wp-content/uploads/2015/05/crop-oatmeal-cookie.jpg"
};

/*
Copy for new item:
,
  {
    name: "",
    initialCost: #,
    rate: #,
    description: ""
  }
*/

var autoclickItems = [
  {
    name: "Pointer",
    initialCost: 10,
    rate: 1,
    description: "More cursors, more cookies!"
  },
  {
    name: "Gramma",
    initialCost: 250,
    rate: 5,
    description: "Who doesn't love grammas?"
  },
  {
    name: "Cookie Tree",
    initialCost: 5000,
    rate: 25,
    description: "Whoever said that cookies don't grow on trees?"
  },
  {
    name: "Cookie Farm",
    initialCost: 12345,
    rate: 100,
    description: "Plant those cookie seeds!"
  },
  {
    name: "Cookie Factory",
    initialCost: 99999,
    rate: 500,
    description: "Warning: Cookies may be slightly toxic."
  },
  {
    name: "Cookie Mine",
    initialCost: 2000000,
    rate: 1200,
    description: "As good as gold!"
  }
];

var multiclickItems = [
  {
    name: "Candle",
    initialCost: 100,
    rate: 1,
    description: "Heat up your cookie oven... with a candle!"
  },
  {
    name: "Wood",
    initialCost: 1337,
    rate: 5,
    description: "Your oven will burn hotter with wood!"
  },
  {
    name: "Coal",
    initialCost: 25000,
    rate: 20,
    description: "Burn those fossil fuels!"
  },
  {
    name: "Methane",
    initialCost: 420420,
    rate: 100,
    description: "Smells bad, but great for cooking!"
  },
  {
    name: "Flame Thrower",
    initialCost: 7777777,
    rate: 575,
    description: "Light 'em up!"
  },
  {
    name: "C4",
    initialCost: 31415926,
    rate: 1500,
    description: "Caution: Explosive."
  }
];