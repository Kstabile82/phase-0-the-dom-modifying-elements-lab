const mai = document.getElementById("main");
mai.remove();
const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = 'victory';
newHeader.innerHTML = "<h1>YOUR-NAME is the champion</h1>";
