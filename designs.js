document.addEventListener('submit', function(event) {
  const height = document.querySelector('#inputHeight').value;
  const width = document.querySelector('#inputWidth').value;
  // cause the 'submit' to not reset page
  event.preventDefault();
  // When size is submitted by the user, call makeGrid()
  makeGrid(height, width);
});

function makeGrid(wid, hi) {
  
  // Clear the canvas after every 'submit' event
  let pixelNode = document.querySelector('#pixelCanvas');
  while (pixelNode.firstChild) {
    pixelNode.removeChild(pixelNode.firstChild);
  }
  
  // Select size input
  let shelfWidth = "";
  for (let i = 0; i < hi; i++) {
    shelfWidth += '<td></td>';
  }
  
  let row = document.querySelector('#pixelCanvas');
  const HTMLToAdd = '<tr>' + shelfWidth + '</tr>';
  for (let j = 0; j < wid; j++) {
    row.insertAdjacentHTML('afterbegin', HTMLToAdd); 
  }
  
    let elementsArray = document.querySelectorAll('td');
  // Select color input
  elementsArray.forEach(function(elem) {
      elem.addEventListener('click', function() {
      let color = document.querySelector('#colorPicker').value;
      elem.style.background = color;
      });
  });
}