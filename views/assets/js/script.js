function onClick() {
  let clicks = parseInt(document.getElementById("clicks").innerHTML);
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
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