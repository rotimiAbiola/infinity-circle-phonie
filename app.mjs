function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  let phoneNumber = document.querySelector("#phoneNumber");

  // Event listener that gets whatever a user inputs
  document.addEventListener("input", function detectNetworkCarrier() {
    let number = document.querySelector("#phoneNumber").value;

    if (number.match(new RegExp(/^(0803|0806|0703|0706|0813|0816|0810|0814|0903)\d+$/)) !== null) {
      phoneNumber.style.backgroundImage = 'url("./icons/mtn-logo.svg")'
      // console.log("mtn")
    } else if (number.match(new RegExp(/^(0802|0808|0708|0812|0701|0902)\d+$/)) !== null) {
      phoneNumber.style.backgroundImage = 'url("./icons/airtel-logo.svg")'
      // console.log("airtel")
    }
    else if (number.match(new RegExp(/^(0809|0818|0817|0909)\d+$/)) !== null) {
      phoneNumber.style.backgroundImage = 'url("./icons/9mobile-logo.svg")'
      // console.log("9mobile")
    }
    else if (number.match(new RegExp(/^(0805|0807|0705|0815|0811|0905)\d+$/)) !== null) {
      phoneNumber.style.backgroundImage = 'url("./icons/glo-logo.svg")'
      // console.log("glo")
    }
    else {
      phoneNumber.style.backgroundImage = 'url("./icons/phone-icon.svg")'
    }
  })

  let airtime = document.querySelector(".buttonAirtime");
  let data = document.querySelector(".buttonData");
  let submit = document.querySelector(".buttonSubmit")

  data.addEventListener("click", (e) => {

    airtime.style.backgroundColor = "rgba(255, 250, 250, 1)"
    data.style.backgroundColor = "rgba(58, 52, 52, 1)"
    data.style.color = "#FFFFFF"
    airtime.style.color = "#3A3434"
    e.preventDefault()

  })

  airtime.addEventListener("click", (e) => {

    data.style.backgroundColor = "rgba(255, 250, 250, 1)"
    airtime.style.backgroundColor = "rgba(58, 52, 52, 1)"
    airtime.style.color = "#FFFFFF"
    data.style.color = "#3A3434"
    e.preventDefault()

  })

  submit.addEventListener("click", (e) => {
    e.preventDefault()
    alert("Recharge successful")
  })

};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //