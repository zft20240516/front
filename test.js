function eClick_btnTest(e){
  console.log("Click handler for <btnTest> fired.")
}

window.addEventListener("click", (e) => {
  if ((_EventName = "eClick_" + e.target.id) && (_Handler = window[_EventName]) && (typeOf(_Handler == "function"))){_Handler(e); return}
  console.log(e);
})
