const form = document.querySelector("form")
const input = document.querySelector("input")
const img = document.querySelector(".qrimg")
const select = document.querySelector("select")



const Qrcode = async (e) => {
  e.preventDefault()
  const resposne = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${select.value}&data=${input.value}`);
  img.setAttribute("src", resposne.url)

form.reset()
}



form.addEventListener("submit", Qrcode)