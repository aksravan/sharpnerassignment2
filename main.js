var ul = document.getElementById("users");
function addUserData(event){
    event.preventDefault();
    //console.log(event);
    const name = event.target.name.value;
    const email = event.target.email.value;

    // localStorage.setItem(email, name);
    var obj = {
        name: name,
        email: email 
    };
    const serialized_data = JSON.stringify(obj);
    localStorage.setItem("user_data" + email, serialized_data);
    for(let o in localStorage){
        if(o.startsWith("user_data")){
            console.log(localStorage[o]);
        }
    }
    addNewItem(obj);
}

function addNewItem(object) {
  var ul = document.getElementById("users");
  var li = document.createElement("li");
  li.appendChild(
    document.createTextNode(object.email)
  ); // li.appendChild()

  console.log(document.createElement("i"));
  var a1 = document.createElement("input");
  a1.id = "yash";
  a1.type = "button";
  a1.value = "Edit";
  a1.addEventListener("click", function () {
    console.log(object);
    document.getElementById("name").value = object.name;
    document.getElementById("email").value = object.email;
    li.remove();
  });
  a1.className = "delete";
  a1.style.border = "2px solid green";
  
  li.appendChild(a1);
  var a = document.createElement("input");
  a.type = "button";
  a.value = "delete";
  a.addEventListener("click", function () {
    localStorage.removeItem("user_data" + object.email); // axios.delete(${apiendpoint}/registeruser/${object._id});

    li.remove();
  });
  a.className = "delete";
  a.style.border = "2px solid red";
 
  li.appendChild(a);
  ul.appendChild(li);
}