document.querySelector('main#main').remove();

let header1 = document.createElement('h1');
header1.setAttribute("id", "victory")
header1.innerHTML = "Brian is the champion";
document.body.appendChild(header1);

const newHeader = document.querySelector('h1#victory');