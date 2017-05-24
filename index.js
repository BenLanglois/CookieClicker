var cookies = 0;
var cps = 0;
var cpc = 1;
var showHelp = true;

/*
Copy for new item:
,
  {
    name: "",
    quantity: 0,
    initialCost: #,
    rate: #,
    description: ""
  }
*/

var autoclickItems = [
  {
    name: "Pointer",
    quantity: 0,
    initialCost: 10,
    rate: 1,
    description: "More cursors, more cookies!"
  },
  {
    name: "Gramma",
    quantity: 0,
    initialCost: 250,
    rate: 5,
    description: "Who doesn't love grammas?"
  },
  {
    name: "Cookie Tree",
    quantity: 0,
    initialCost: 5000,
    rate: 25,
    description: "Whoever said that cookies don't grow on trees?"
  },
  {
    name: "Cookie Farm",
    quantity: 0,
    initialCost: 12345,
    rate: 100,
    description: "Plant those cookie seeds!"
  }
];

var multiclickItems = [
  {
    name: "Candle",
    quantity: 0,
    initialCost: 100,
    rate: 1,
    description: "Heat up your cookie oven... with a candle!"
  },
  {
    name: "Wood",
    quantity: 0,
    initialCost: 1337,
    rate: 5,
    description: "Your oven will burn hotter with wood!"
  },
  {
    name: "Coal",
    quantity: 0,
    initialCost: 25000,
    rate: 15,
    description: "Burn those fossil fuels!"
  },
  {
    name: "Hydrogen",
    quantity: 0,
    initialCost: 666666,
    rate: 25,
    description: "Explosive!"
  }
];

for (var index in autoclickItems) {
  item = autoclickItems[index];
  item.cost = item.initialCost;
} // Add cost property

for (var index in multiclickItems) {
  item = multiclickItems[index];
  item.cost = item.initialCost;
} // Add cost property

window.onload = function() {
  document.getElementById("cookieCount").innerHTML = cookies;
  document.getElementById("cps").innerHTML = cps;
  document.getElementById("cpc").innerHTML = cpc;
  createACT();
  createMCT();
};

function bakeCookie() {
  cookies += cpc;
  document.getElementById("cookieCount").innerHTML = cookies;
  updateACB();
  updateMCB();
}

setInterval(function() {
  cookies += cps; // Autoclicks
  document.getElementById("cookieCount").innerHTML = cookies;
  updateACB();
  updateMCB();
  if (showHelp && cookies >= 100) {
    document.getElementById("help").style.display="none";
    showHelp = false;
  };
}, 1000);

function createACT() {
  var acTable = "<tr><th>Item</th>" +
                "<th>Purchase</th>" +
                "<th>Quantity</th>" +
                "<th>Cost</th>" +
                "<th>Cookies per Second</th>" +
                "<th>Description</th></tr>"; // Table head
  for (var index in autoclickItems) {
    item = autoclickItems[index];
    acTable += "<tr><td>" + item.name + "</td>"
    + "<td class='buy' id='buy" + item.name + "' onclick='buyAutoclick(" + index + ")'>$$$</td>"
    + "<td id='quantity" + item.name + "'>" + item.quantity + "</td>"
    + "<td id='cost" + item.name + "'>" + item.cost + "</td>"
    + "<td>+" + item.rate + "</td>"
    + "<td>" + item.description + "</td></tr>"; // Table rows
  }
  document.getElementById("acTable").innerHTML = acTable;
}

function updateACT() {
  for (var index in autoclickItems) {
    item = autoclickItems[index];
    document.getElementById("quantity" + item.name).innerHTML = item.quantity;
    document.getElementById("cost" + item.name).innerHTML = item.cost;
  }
  document.getElementById("cookieCount").innerHTML = cookies;
  document.getElementById("cps").innerHTML = cps;
}

function createMCT() {
  var mcTable = "<tr><th>Item</th>" +
                "<th>Purchase</th>" +
                "<th>Quantity</th>" +
                "<th>Cost</th>" +
                "<th>Cookies per Click</th>" +
                "<th>Description</th></tr>"; // Table head
  for (var index in multiclickItems) {
    item = multiclickItems[index];
    mcTable += "<tr><td>" + item.name + "</td>"
    + "<td class='buy' id='buy" + item.name + "' onclick='buyMulticlick(" + index + ")'>$$$</td>"
    + "<td id='quantity" + item.name + "'>" + item.quantity + "</td>"
    + "<td id='cost" + item.name + "'>" + item.cost + "</td>"
    + "<td>+" + item.rate + "</td>"
    + "<td>" + item.description + "</td></tr>"; // Table rows
  }
  document.getElementById("mcTable").innerHTML = mcTable;
}

function updateMCT() {
  for (var index in multiclickItems) {
    item = multiclickItems[index];
    document.getElementById("quantity" + item.name).innerHTML = item.quantity;
    document.getElementById("cost" + item.name).innerHTML = item.cost;
  }
  document.getElementById("cookieCount").innerHTML = cookies;
  document.getElementById("cpc").innerHTML = cpc;
}

function buyAutoclick(index) {
  item = autoclickItems[index];
  if (cookies >= item.cost) {
    cookies -= item.cost;
    item.quantity += 1;
    item.cost = Math.floor(item.initialCost * Math.pow(3, 0.1 * item.quantity));
    cps += item.rate;
    updateACT();
    updateACB();
  }
}

function buyMulticlick(index) {
  item = multiclickItems[index];
  if (cookies >= item.cost) {
    cookies -= item.cost;
    item.quantity += 1;
    item.cost = Math.floor(item.initialCost * Math.pow(3, 0.1 * item.quantity));
    cpc += item.rate;
    updateMCT();
    updateMCB();
  }
}

function updateACB() {
  for (var index in autoclickItems) {
    var item = autoclickItems[index];
    if (cookies >= item.cost) {
      document.getElementById("buy" + item.name).style.backgroundColor = "lightgreen";
    } else {
      document.getElementById("buy" + item.name).style.backgroundColor = "red";
    }
  }
}

function updateMCB() {
  for (var index in multiclickItems) {
    var item = multiclickItems[index];
    if (cookies >= item.cost) {
      document.getElementById("buy" + item.name).style.backgroundColor = "lightgreen";
    } else {
      document.getElementById("buy" + item.name).style.backgroundColor = "red";
    }
  }
}