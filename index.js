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
  createSelect();
};

function createSelect() {
  var select = "";
  for (var image in images) {
    select += "<option value='" + image + "'>" + image + "</option>";
  }
  document.getElementById("select").innerHTML = select;
  updateSelect();
}

function updateSelect() {
  document.getElementById("img").src = images[document.getElementById("select").value];
}

setInterval(function() {
  cookies += cps; // Autoclicks
  document.getElementById("cookieCount").innerHTML = cookies;
  updateBuy();
  if (showHelp && cookies >= 100) {
    document.getElementById("help").style.display="none";
    showHelp = false;
  }
}, 1000);

function bakeCookie() {
  cookies += cpc; // Multiclicks
  document.getElementById("cookieCount").innerHTML = cookies;
  updateBuy();
}

function buyAutoclick(index) {
  item = autoclickItems[index];
  if (cookies >= item.cost) {
    cookies -= item.cost;
    item.quantity++;
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
    item.quantity++;
    item.cost = Math.floor(item.initialCost * Math.pow(3, 0.1 * item.quantity));
    cpc += item.rate;
    updateMCT();
    updateBuy();
  }
}