function dgebi(id){return document.getElementById(id)}

function doOnClick(e){
  let query = dgebi("query").value.split("\n");
  let action = query.shift().trim();
  let parameter = {}
  for (const s of query){
    let a = s.split(":",2);
    let name = a.shift().trim(); if (name == ""){continue}
    if (a.length == 0){a[0]=" "}
    parameter[name] = a[0].trim();
  }
  fetch(
      "https://script.google.com/macros/s/AKfycbxQIauCFmNGu_PPzqCrwxPVoDTQw4L5qoJmnGHje8ujTDFUj36EqaO1EKixgp8vsdk6/exec",
      {
        method: "POST",
        redirect: "follow",
        amode: "no-cors",
        headers: {"Content-Type": "text/plain"},
        body: `{"aaa": "bbb", "bbb": "aaa", "ccc": ["bbb", "aaa", "ccc"], "action": "${action}", "parameter": ${JSON.stringify(parameter)}}`
      }
  ).then((resp) => {
    console.log(resp);
    resp.text().then((s) => {
      console.log(s);
      dgebi("status").innerText = s;
    })
  })
}
