function createACT() {
	var table = document.getElementById("acTable");
	for (var index in autoclickItems) {
		var item = autoclickItems[index];
		var tableLength = table.rows.length;
		table.insertRow(tableLength).outerHTML = "<tr>" +
			"<td>" + item.name + "</td>" +
			"<td class='buy' id='buy" + item.name + "' onclick='buyAutoclick(" + index + ")'>$$$</td>" +
    	"<td id='quantity" + item.name + "'>" + item.quantity + "</td>" +
    	"<td id='cost" + item.name + "'>" + item.cost + "</td>" +
    	"<td>+" + item.rate + "</td>" +
    	"<td>" + item.description + "</td></tr>";
	}
}

function createMCT() {
	var table = document.getElementById("mcTable");
	for (var index in multiclickItems) {
		var item = multiclickItems[index];
		var tableLength = table.rows.length;
		table.insertRow(tableLength).outerHTML = "<tr>" +
			"<td>" + item.name + "</td>" +
			"<td class='buy' id='buy" + item.name + "' onclick='buyMulticlick(" + index + ")'>$$$</td>" +
    	"<td id='quantity" + item.name + "'>" + item.quantity + "</td>" +
    	"<td id='cost" + item.name + "'>" + item.cost + "</td>" +
    	"<td>+" + item.rate + "</td>" +
    	"<td>" + item.description + "</td></tr>";
	}
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

function updateMCT() {
  for (var index in multiclickItems) {
    item = multiclickItems[index];
    document.getElementById("quantity" + item.name).innerHTML = item.quantity;
    document.getElementById("cost" + item.name).innerHTML = item.cost;
  }
  document.getElementById("cookieCount").innerHTML = cookies;
  document.getElementById("cpc").innerHTML = cpc;
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