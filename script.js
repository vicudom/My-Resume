var checklist = document.getElementById('checklist')
var item = checklist.querySelectorAll('li');
var inputs = checklist.querySelectorAll('input')

for (var i = 0; i < item.length; i++) {
    item[i].addEventListener('click', editItem)
    inputs[i].addEventListener('blur', blurItem)
    inputs[i].addEventListener('keypress', itemKeypress)
}
function editItem () {
this.className = 'edit'
var input = this.querySelector('input')
input.focus();
input.setSelectionRange(0, input.value.length)
}

function blurItem() {
this.previousElementSibling.innerHTML = this.value;
this.parentNode.className = "";
}

function itemKeypress (event) {
    if (event.which === 13) {
        blurItem.call(this)
    }
}