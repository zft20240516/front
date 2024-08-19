function eClick_btnTest(e){
  console.log("Click handler for <btnTest> fired.")
}

window.addEventListener("click", (e) => {
  if ((let _EventName = "eClick_" + e.target.id) && (let _Handler = window[_EventName]) && (typeOf(_Handler == "function"))){_Handler(e); return}
  console.log(e);
})
