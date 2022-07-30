
  /* Note that:
  - app is still buggy, the network only pops up at the 5th press
  */
  let phoneNumber = document.querySelector("#phoneNumber");

  // Event listener that gets whatever a user inputs
  document.addEventListener("input", function detectNetworkCarrier() {
    let number = document.querySelector("#phoneNumber").value;

/*  
    if (number.startsWith("0802" || "0808" || "0708" || "0812" || "0701" || "0902")) {
      phoneNumber.style.backgroundImage = 'url("./icons/airtel-logo.svg")'
    } else if (number.startsWith("0803" || "0806" || "0703" || "0706" || "0813" || "0816" || "0810" || "0814" || "0903")) {
      phoneNumber.style.backgroundImage = 'url("./icons/mtn-logo.svg")'
    } else if (number.startsWith("0809" || "0818" || "0817" || "0909")) {
      phoneNumber.style.backgroundImage = 'url("./icons/9mobile-logo.svg")'
    } else if (number.startsWith("0805" || "0807" || "0705" || "0815" || "0811" || "0905")) {
      phoneNumber.style.backgroundImage = 'url("./icons/glo-logo.svg")'
    } else {
      phoneNumber.style.backgroundImage = 'url("./icons/phone-icon.svg")'
    }
*/
    if (number.match(new RegExp(/^(0803|0806|0703|0706|0813|0816|0810|0814|0903)\d+$/)) !== null) {
        phoneNumber.style.backgroundImage = 'url("./icons/mtn-logo.svg")'
        // console.log("mtn")
    } else if (number.match(new RegExp(/^(0802|0808|0708|0812|0701|0902)\d+$/)) !== null){
         phoneNumber.style.backgroundImage = 'url("./icons/airtel-logo.svg")'
        // console.log("airtel")
    }
    else if (number.match(new RegExp(/^(0809|0818|0817|0909)\d+$/)) !== null){
        phoneNumber.style.backgroundImage = 'url("./icons/9mobile-logo.svg")'
        // console.log("9mobile")
    }
    else if (number.match(new RegExp(/^(0805|0807|0705|0815|0811|0905)\d+$/)) !== null){
        phoneNumber.style.backgroundImage = 'url("./icons/glo-logo.svg")'
        // console.log("glo")
    }
    else {
        phoneNumber.style.backgroundImage = 'url("./icons/phone-icon.svg")'
    }
  })


