function addContact() {
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    
    if (name === '' || phone === '') {
        alert('Por favor, complete ambos campos.');
        return;
    }

    
    const li = document.createElement('li');
    li.textContent = `${name} - ${phone}`;

    
    document.getElementById('contacts').appendChild(li);

    
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
}