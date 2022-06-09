// 1. API url//
const url = "https://jsonplaceholder.typicode.com/users";

//2. fetch users from API url
function fetchUsers(){
    //2.1 Make use of the browser fetch API
fetch(url)
.then((response) =>response.json())
.then((data) => {
    //2.2 Passing the users data to renderUsers function
    renderUsers(data);
});
}

//3. Render the users in the DOM
function renderUsers(usersData){
    console.log("from renderUsers");
    console.log(usersData);
    const ul = document.getElementById("user-list-container");
    console.log(ul);

    //3.1 Render an li tag for each of the users
    usersData.forEach((user, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${index + 1}.</span>
        <span>${user.name}</span>
        <span>-</span>
        <span class="username">${user.username}</span>
        `;
    //3.2 Append the current user li tag to the ul tag
        ul.appendChild(li)
});
}

//4. add a search function to the DOM
function searchUsersByUsername(){
    const input = document.getElementById("search");
    const ul = document.getElementById("user-list-container");
    const inputValue = input.value.toUpperCase();
    const usersList = ul.querySelectorAll("li"); // this is an Array of all the tags []


    //loop through all the users and render the one that matches the search
    for( let index = 0; index < usersList.length; index++) {
        const usersnameSpanTag = usersList[index].querySelector(".username");
        const usersnameSpanTagValue = usersnameSpanTag.innerText.toUpperCase();
        const isMatch = usersnameSpanTagValue.indexOf(inputValue) > -1;

        if (isMatch){
            usersList[index].style.display = "block";
        } else {
            usersList[index].style.display = "none";
        }
    }
}
    
//Calling the fetc function
fetchUsers();