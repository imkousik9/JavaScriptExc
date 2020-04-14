function myValidation() {
    let myValue = document.getElementById('myFrom').value
    const myPElements = document.querySelector('#idOne')

    if (isNaN(myValue) || myValue < 1 || myValue > 20) {
        myPElements.textContent = 'Not a valid input'
    } else {
        myPElements.textContent = 'This input is ok'
    }
}


//form validation

document.querySelector('.myform').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.firstname.value);
    event.target.username.value = '';
    event.target.firstname.value = '';
})