const init = async () => {
  // 01094
  // 20505
  const zipCode = "20505";
  const urls = await fetch(`https://ziptasticapi.com/${zipCode}`);
  // console.log(createObject(url));
  const url = await urls.json();
  console.log(url);
  const resultView = document.querySelector(".result");
  const markUp = `<p class="country">Country:${url.country}</p>
  <p class="state">State:${url.state}</p>
  <p class="city">City:${url.city}</p>`;
  resultView.insertAdjacentHTML("afterbegin", markUp);
};
init();
