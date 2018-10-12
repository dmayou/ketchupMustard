let clickCount = 0;

// add listener to Create button
document.getElementById('btn').addEventListener("click", createDiv);

function createDiv() {
  // create a new div element
  var newDiv = document.createElement('div');
  // newDiv.className = '.color-div';
  newDiv.setAttribute("class", ".color-div" ); // not sure if this does anything
  newDiv.style.backgroundColor = 'red'; // init as 'ketchup'
  makeDeleteButton(newDiv);
  // add Switch button
  makeSwitchButton(newDiv);
  // add text to div
  var newContent = document.createTextNode(`Pressed ${++clickCount} time${
                   clickCount===1 ? '' : 's'}!`);
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("heading");
  document.body.appendChild(newDiv, currentDiv);
};

function makeDeleteButton(parent) {
  var delBtn = document.createElement('button');
  parent.appendChild(delBtn);
  delBtn.appendChild(document.createTextNode('Delete'));
  delBtn.addEventListener("click", deleteDiv);
}

function makeSwitchButton(parent) {
  var switchBtn = document.createElement('button');
  parent.appendChild(switchBtn);
  switchBtn.appendChild(document.createTextNode('Switch Color'));
  switchBtn.addEventListener("click", switchColor);
}

function deleteDiv() {
  this.parentElement.remove();
}

function switchColor() {
  var div = this.parentElement;
  if (div.style.backgroundColor === 'red') {
    div.style.backgroundColor = 'yellow'; // mustard
  } else {
    div.style.backgroundColor = 'red';  //ketchup
  }
}
