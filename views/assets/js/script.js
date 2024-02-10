function onClick() {
  let clicks = parseInt(document.getElementById("clicks").innerHTML);
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
  saveClicksToServer(clicks);
}

function onClick2() {
  let clicks = parseInt(document.getElementById("clicks2").innerHTML);
  clicks += 1;
  document.getElementById("clicks2").innerHTML = clicks;
  saveClicksToServer(clicks);
}

function onClick3() {
  let clicks = parseInt(document.getElementById("clicks3").innerHTML);
  clicks += 1;
  document.getElementById("clicks3").innerHTML = clicks;
  saveClicksToServer(clicks);
}

function onClick4() {
  let clicks = parseInt(document.getElementById("clicks4").innerHTML);
  clicks += 1;
  document.getElementById("clicks4").innerHTML = clicks;
  saveClicksToServer(clicks);
}

function onClick5() {
  let clicks = parseInt(document.getElementById("clicks5").innerHTML);
  clicks += 1;
  document.getElementById("clicks5").innerHTML = clicks;
  saveClicksToServer(clicks);
}

function saveClicksToServer(clicks) {
  axios
    .post("/handleClick", { clicks })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
}
