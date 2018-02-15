var downTrigger = false;
var moveTrigger = false;

function onDocumentReady() {
  let el = document.body;

  el.addEventListener('pointerup', onPointerUp);
  el.addEventListener('pointermove', onPointerMove);
  el.addEventListener('pointerdown', onPointerDown);
  el.addEventListener('pointerleave', onPointerLeave);
}

function onPointerUp(evt) {
  downTrigger = false;
  moveTrigger = false;
  console.log(downTrigger);
  
  // let el = getOrCreate(evt);
  // el.classList.remove("down");
  // console.log(el.id + " up, " + "X: " + el.style.left + ", Y: " + el.style.top);
}

function onPointerDown(evt) {
  downTrigger = true;
  console.log(downTrigger);
  
  // let el = getOrCreate(evt);
  // el.classList.add("down");

  // // Position the element from its middle
  // let rect = el.getBoundingClientRect();
  // el.style.left = (evt.clientX - rect.width / 2) + "px";
  // el.style.top = (evt.clientY - rect.height / 2) + "px";
  // console.log(rect);
  

  // Log ID and location of pointer
  console.log(el.id + " down, " + "X: " + el.style.left + ", Y: " + el.style.top);
}

function onPointerLeave(evt) {
  downTrigger = false;
  moveTrigger = false;
  // let el = getOrCreate(evt);
  // document.body.removeChild(el);
  // // Log ID and location of pointer
  // console.log(el.id + " left, " + "X: " + el.style.left + ", Y: " + el.style.top);
}

function onPointerMove(evt) {
  moveTrigger = true;

  if (downTrigger === true && moveTrigger === true){
  let el = getOrCreate(evt);
  
  // Position the element from its middle
  let rect = el.getBoundingClientRect();
   el.style.left = (evt.clientX - rect.width / 2) + "px";
   el.style.top = (evt.clientY - rect.height / 2) + "px";
  }
}

// Returns an existing element for a pointer id, or makes a new one
function getOrCreate(evt) {
  // Get or create a new element with a unique ID
  const id = 'pointer-' + evt.pointerId;
  let el = document.getElementById(id);

  // If an element with that ID already exists, return it to the function it was called from.
  // Else if the element doesn't already exist, create and return it.
  if (el) {
    return el;
  } else {
    el = document.createElement('div');
    el.classList.add('pointer');
    //el.id = id;
    document.body.appendChild(el);
    return el;
  }
}

if (document.readyState != 'loading') onDocumentReady();
else document.addEventListener('DOMContentLoaded', onDocumentReady);
