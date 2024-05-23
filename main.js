function doOnClick(e){
  alert("unknown click")
  fetch("").then(resp) => {
    resp.text().then(s) => {
      document.getElementById("status").innerText = s
    }
  }
}
