function doOnClick(e){
  alert("unknown click")
  fetch(
      "https://script.google.com/macros/s/AKfycbxQIauCFmNGu_PPzqCrwxPVoDTQw4L5qoJmnGHje8ujTDFUj36EqaO1EKixgp8vsdk6/exec/api/ping/",
      {redirect: "follow",}
  ).then((resp) => {
    resp.text().then((s) => {
      document.getElementById("status").innerText = s
    })
  })
}
