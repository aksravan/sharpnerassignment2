
function addUserData(event){
    event.preventDefault();
    console.log(event);
    const name = event.target.name.value;
    const email = event.target.email.value;

    localStorage.setItem(email, name);
}