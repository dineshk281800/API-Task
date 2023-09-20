const resultView = document.querySelector(".result");
const errorMsg = document.querySelector(".error-msg");
const resetBtn = document.querySelector(".btn-2");
let markUp;
const init = async () => {
  const zipCode = document.querySelector("#zipcode").value;
  resultView.innerHTML = "";
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
    markUp = `<p class="country para">Country:${url.country}</p>
      <p class="state para">State:${url.state}</p>
      <p class="city para">City:${url.city}</p>`;
    resultView.insertAdjacentHTML("afterbegin", markUp);
  } else {
    errorMsg.innerHTML = "Enter the 5 digit number";
    errorMsg.style.color = "red";
  }
};

resetBtn.addEventListener("click", () => {
  errorMsg.innerHTML = "";
  resultView.innerHTML = "";
});
