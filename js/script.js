const resultView = document.querySelector(".result");

const errorMsg = document.querySelector(".error-msg");
let markUp;
const init = async () => {
  const zipCode = document.querySelector("#zipcode").value;
  // document.querySelector("#zipcode").value = "";
  console.log(zipCode);
  if (zipCode.length === 5) {
    errorMsg.innerHTML = "";
    const urls = await fetch(`https://ziptasticapi.com/${zipCode}`);
    console.log(urls);
    const url = await urls.json();
    console.log(url);

    if (!url.country) {
      errorMsg.innerHTML = "Enter the correct zip-code";
      errorMsg.style.color = "red";
      return;
    }
    markUp = `<p class="country">Country:${url.country}</p>
      <p class="state">State:${url.state}</p>
      <p class="city">City:${url.city}</p>`;
    resultView.insertAdjacentHTML("afterbegin", markUp);
  } else {
    errorMsg.innerHTML = "Enter the 5 digit number";
    errorMsg.style.color = "red";
  }
};

// const reset = () => {
//   const zipCode = document.querySelector("#zipcode").value;
//   zipCode = "";
//   // markUp = `<p class="country"></p>
//   //     <p class="state"></p>
//   //     <p class="city"></p>`;
//   // resultView.insertAdjacentHTML("afterbegin", markUp);
// };

// -----source code-----

// const urls = await fetch(`https://ziptasticapi.com/${zipCode}`);
// // console.log(createObject(url));
// const url = await urls.json();
// console.log(url);
// const resultView = document.querySelector(".result");
// const markUp = `<p class="country">Country:${url.country}</p>
// <p class="state">State:${url.state}</p>
// <p class="city">City:${url.city}</p>`;
// resultView.insertAdjacentHTML("afterbegin", markUp);

// ------------

// const searchBtn = document.querySelector(".btn-1");
// searchBtn.addEventListener("click", init());

//----- 5 digit------

// if (zipCode.length > 5) {
//   errorMsg.innerHTML = "Enter the 5 digit number";
//   errorMsg.style.color = "red";
//   return;
// } else if (zipCode.length < 4) {
//   errorMsg.innerHTML = "Enter the 5 digit number";
//   errorMsg.style.color = "red";
//   return;
// } else {
//   errorMsg.innerHTML = "";
// }
