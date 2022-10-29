const main = document.querySelector(".main"),
qrInput = main.querySelector(".form input"),
generateBtn = main.querySelector(".form button"),
qrImg = main.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    ///The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string
    if(!qrValue || preValue === qrValue){
        modal.style.display = "block";
        modalText.innerHTML = `Please Enter a Text or URL in the QR Input`;  
    }else{

    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        main.classList.add("active"); // to increase main size 
        generateBtn.innerText = "Generate QR Code";
    });
}});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        main.classList.remove("active");
        preValue = "";
    }
});