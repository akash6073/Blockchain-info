// For usd
var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
// var bnb = document.getElementById("binance");
var doge = document.getElementById("dogecoin");

var settings = {
  async: true,
  sourceDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinance%2Cdogecoin&vs_currencies=usd&include_24hr_change=true",
  method: "GET",
  headers: {},
};
$.ajax(settings).done(function (response) {
  console.log(response);
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
//   bnb.innerHTML = response.binance.usd;
  doge.innerHTML = response.dogecoin.usd;
});

// For inr
var btc1 = document.getElementById("bitcoin1");
var eth1 = document.getElementById("ethereum1");
var doge1 = document.getElementById("dogecoin1");

var settings1 = {
  async: true,
  sourceDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr&include_24hr_change=true",
  method: "GET",
  headers: {},
};
$.ajax(settings1).done(function (response) {
  console.log(response);
  btc1.innerHTML = response.bitcoin.inr;
  eth1.innerHTML = response.ethereum.inr;
  doge1.innerHTML = response.dogecoin.inr;
});

// // For 24hr change
// var btc2 = document.getElementById("bitcoin2");
// // var eth1 = document.getElementById("ethereum1");
// // var doge1 = document.getElementById("dogecoin1");

// var settings2 = {
//   async: true,
//   sourceDomain: true,
//   url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2C%20ethereum%20%2C%20dogecoin&vs_currencies=usd&include_24hr_change=true",
//   method: "GET",
//   headers: {},
// };
// $.ajax(settings2).done(function (response) {
//   console.log(response);
//   btc2.innerHTML = response.bitcoin.percent_change_24hr;
// //   eth1.innerHTML = response.ethereum.inr;
// //   doge1.innerHTML = response.dogecoin.inr;
// });
