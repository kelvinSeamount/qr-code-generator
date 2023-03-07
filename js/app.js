// select the DOMS
const btnGen = document.querySelector(".btn-primary");
const btnSave = document.querySelector(".btn-secondary");
const textEl = document.querySelector("#text");
const resultEl = document.querySelector(".result");

//ADD EVENTLISTNERS

btnGen.addEventListener("click", genQr);
btnSave.addEventListener("click", saveImg);

//FUNCTIONS
//To generate QR-code function
function genQr() {
  const inputValue = text.value;

  //create a variable to store the API
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
  //store the resulted API

  resultEl.src = apiUrl;
}

//To implement save function
async function saveImg() {
  const inputValue = text.value;
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;

  //Fetch the API & store as IMG
  const image = await fetch(apiUrl);

  //Convert the img to blob object
  const blobImage = await image.blob();

  //Create a URL for the blob object to enable download
  const urlImage = URL.createObjectURL(blobImage);

  // Create an href link
  const hrefLink = document.createElement("a");
  hrefLink.href = urlImage;

  //Name the fliename for Download
  hrefLink.download = "MyQrCode";

  //Add the link to DOM
  document.body.appendChild(hrefLink);

  hrefLink.click();

  document.body.remove(hrefLink);
}
