
let circleA = document.getElementById("circleA");
let circleB = document.getElementById("circleB");
let circleC = document.getElementById("circleC");
let locked = document.getElementById("locked");
let paddleLock = document.getElementById("paddle_lock");
let door = document.getElementById("door");
let doorSpace = document.getElementById("doorSpace");

function checkOrder() {
  let order = circleA.textContent + circleB.textContent + circleC.textContent;
  if (order === "CAB") {
    paddleLock.classList.toggle("changing_lock");
    door.classList.toggle("changing_door");
    doorSpace.classList.toggle("changing_space");
    document.getElementById('door').addEventListener('click', function(e) {
      window.location.href = 'https://youtu.be/dQw4w9WgXcQ?si=sOu7HeMbaOLTK5DM';
  }, false);
  }
  console.log(order);
}

function swapCircles(circle1, circle2) {
  let temp = circle1.textContent;
  circle1.textContent = circle2.textContent;
  circle2.textContent = temp;
}
function handleDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}
function handleDrop(event) {
  event.preventDefault();
  let draggedId = event.dataTransfer.getData("text/plain");
  let draggedCircle = document.getElementById(draggedId);
  swapCircles(event.target,draggedCircle);
  checkOrder();
}
function handleDragOver(event) {
    event.preventDefault();
}

circleA.addEventListener("dragstart", handleDragStart);
circleB.addEventListener("dragstart", handleDragStart);
circleC.addEventListener("dragstart", handleDragStart);
circleA.addEventListener("dragover", handleDragOver);
circleB.addEventListener("dragover", handleDragOver);
circleC.addEventListener("dragover", handleDragOver);
circleA.addEventListener("drop", handleDrop);
circleB.addEventListener("drop", handleDrop);
circleC.addEventListener("drop", handleDrop);
