
function addUserData(event){
    event.preventDefault();
    console.log(event);
    const name = event.target.name.value;
    const email = event.target.email.value;

    // localStorage.setItem(email, name);
    var obj = {
        name: name,
        email: email 
    };
    const serialized_data = JSON.stringify(obj);
    localStorage.setItem("user_data", serialized_data);
}