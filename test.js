function eClick_btnTest(e){
  console.log("Click handler for <btnTest> fired.")
}

window.addEventListener("click", (e) => {
  if ((const _EventName = "eClick_" + e.target.id) && (const _Handler = window[_EventName]) && (typeOf(_Handler == "function"))){_Handler(e); return}
  console.log(e);
})
