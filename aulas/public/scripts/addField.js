const button = document.querySelector("#add-time");

button.addEventListener('click', cloneField);

function cloneField() {

    const newFieldCOntainer = document.querySelector('.schedule-item').cloneNode(true);
    const parentField = document.querySelector('#schedule-items');
    const fields = newFieldCOntainer.querySelectorAll('input');
    
    fields.forEach(function(field) {
        field.value = "";     
    });
    
    parentField.appendChild(newFieldCOntainer);
}