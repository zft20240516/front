"use strict";

var txtSrc;
var txtDst;
var fileSrc;
var Destination;

var Encoder = new TextEncoder();
var Decoder = new TextDecoder();
function encode(s){return Encoder.encode(s)}
function decode(a){return Decoder.decode(a)}

function getFileString(f){
}
function getFileByteArray(f){
}

var Source = {
  toString: function(){
    if(fileSrc.style.display == "block"){return getFileString(fileSrc.files[0])}
    if(txtSrc.style.display  == "block"){return txtSrc.value}
  },
  toByteArray: function(){
    if(fileSrc.style.display == "block"){return getFileByteArray(fileSrc.files[0])}
    if(txtSrc.style.display  == "block"){return encode(txtSrc.value)}
  },
}

function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte),
  ).join("");
  return btoa(binString);
}

function downloadBlob(data, fileName, mimeType) {
  var blob, url;
  blob = new Blob([data], {
    type: mimeType
  });
  url = window.URL.createObjectURL(blob);
  downloadURL(url, fileName);
  setTimeout(function() {
    return window.URL.revokeObjectURL(url);
  }, 1000);
};

function downloadURL(data, fileName) {
  var a;
  a = document.createElement('a');
  a.href = data;
  a.download = fileName;
  document.body.appendChild(a);
  a.style = 'display: none';
  a.click();
  a.remove();
};

function eClick_btnTest(e){
  //console.log(fileSrc);
  txtDst.value = JSON.parse('"' + txtSrc.value.replace(/\"/g, '\\"') + '"');
}

function eClick_btnToB64(e){txtDst.value = bytesToBase64(Source.toByteArray());}

function eClick_btnFromB64(e){
  Destination = base64ToBytes(txtSrc.value);
  txtDst.value = decode(Destination);
}

function eClick_btnToFile(e){
  downloadBlob(Destination, "data.bin", "application/octet-stream");
}

window.addEventListener("click", (e) => {
  let _EventName;
  let _Handler;
  if ((_EventName = e.target.id) && (_EventName = "eClick_" + _EventName)  && (_Handler = window[_EventName]) && (typeof(_Handler) == "function")){_Handler(e); return}
})

window.onload = function(e){
  txtSrc = document.getElementById("txtSource");
  fileSrc = document.getElementById("inpSourceFile");
  txtDst = document.getElementById("txtDestination");
}
