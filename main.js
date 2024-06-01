function doOnClick(e){
  alert("unknown click")
  fetch(
      "https://script.google.com/macros/s/AKfycbxQIauCFmNGu_PPzqCrwxPVoDTQw4L5qoJmnGHje8ujTDFUj36EqaO1EKixgp8vsdk6/exec",
      {method: "POST", redirect: "follow", amode: "no-cors", headers: {"Content-Type": "text/plain"}, body: '{"aaa": "bbb", "bbb": "aaa", "ccc": ["bbb", "aaa", "ccc"], "action": "pinga"}'}
  ).then((resp) => {
    console.log(resp);
    resp.text().then((s) => {
      console.log(s);
      document.getElementById("status").innerText = s;
    })
  })
}
