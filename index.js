for (var index in autoclickItems) {
  item = autoclickItems[index];
  item.cost = item.initialCost;
  item.quantity = 0;
} // Add cost & quantity properties

for (var index in multiclickItems) {
  item = multiclickItems[index];
  item.cost = item.initialCost;
  item.quantity = 0;
} // Add cost & quantity properties

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
  updateBuy();
}

setInterval(function() {
  cookies += cps; // Autoclicks
  document.getElementById("cookieCount").innerHTML = cookies;
  updateBuy();
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
    updateBuy();
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
    updateBuy();
  }
}

function updateBuy() {
  for (var index in autoclickItems) {
    var item = autoclickItems[index];
    if (cookies >= item.cost) {
      document.getElementById("buy" + item.name).style.backgroundColor = "lightgreen";
    } else {
      document.getElementById("buy" + item.name).style.backgroundColor = "red";
    }
  }

  for (var index in multiclickItems) {
    var item = multiclickItems[index];
    if (cookies >= item.cost) {
      document.getElementById("buy" + item.name).style.backgroundColor = "lightgreen";
    } else {
      document.getElementById("buy" + item.name).style.backgroundColor = "red";
    }
  }
}
