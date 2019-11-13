function addLi()
{
  event.preventDefault();
  var textValue = document.getElementById('textValue').value,
    listNode = document.getElementById('list'), 
    liNode = document.createElement("LI"), 
    txtNode = document.createTextNode(textValue);

    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
}

function removeToDo()
{
  var el = event.target;
  var parentEl = el.parentNode;
  parentEl.removeChild(el);
}