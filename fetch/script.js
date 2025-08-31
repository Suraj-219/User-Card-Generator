function getUsers(){
fetch("https://randomuser.me/api/?results=3")
.then((raw) => raw.json())
.then((data) => {
    document.querySelector(".users").innerHTML="";
    data.results.forEach(function(user){
       const card = document.createElement("div");
       card.className = "bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full mb-4";

       const innerFlex = document.createElement("div");
       innerFlex.className = "flex items-center space-x-4";

       const avatar = document.createElement("img");
       avatar.className = "w-16 h-16 rounded-full object-cover border-2 border-gray-700";
       avatar.src = user.picture.large;
       avatar.alt = "User avatar";

       const textContainer = document.createElement("div");

       const name = document.createElement("h2");
       name.className = "text-xl font-semibold text-gray-100";
       name.textContent = user.name.first + " " + user.name.last;

       const email = document.createElement("p");
       email.className = "text-gray-400";
       email.textContent = user.email;

       const badge = document.createElement("span");
       badge.className = "inline-block mt-2 px-3 py-1 bg-blue-900 text-blue-200 text-xs rounded-full";
       badge.textContent = "Active";

       textContainer.appendChild(name);
       textContainer.appendChild(email);
       textContainer.appendChild(badge);

       innerFlex.appendChild(avatar);
       innerFlex.appendChild(textContainer);

       card.appendChild(innerFlex);

       document.querySelector(".users").appendChild(card);
    });
});
}
getUsers();

document.querySelector("#refreshBtn")
.addEventListener("click", function(){
    getUsers();
})