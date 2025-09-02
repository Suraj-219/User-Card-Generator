function getUsers(){
fetch("https://randomuser.me/api/?results=3")
.then((raw) => raw.json())
.then((data) => {
    document.querySelector(".users").innerHTML="";
    data.results.forEach(function(user, idx){
       const card = document.createElement("div");
       card.className = "bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 max-w-sm w-full mb-4 transition-transform duration-300 hover:scale-105 hover:shadow-blue-400/40 flex flex-col items-center";
       card.style.opacity = 0;
       card.style.transform = "translateY(40px) scale(0.95)";

       const innerFlex = document.createElement("div");
       innerFlex.className = "flex flex-col items-center gap-4";

       const avatar = document.createElement("img");
       avatar.className = "w-20 h-20 rounded-full object-cover border-4 border-blue-500 shadow-lg transition-all duration-300 hover:border-blue-300 hover:shadow-blue-400";
       avatar.src = user.picture.large;
       avatar.alt = "User avatar";

       const textContainer = document.createElement("div");
       textContainer.className = "text-center";

       const name = document.createElement("h2");
       name.className = "text-2xl font-bold text-white mb-1 tracking-wide";
       name.textContent = user.name.first + " " + user.name.last;

       const email = document.createElement("p");
       email.className = "text-blue-200 text-sm mb-2";
       email.textContent = user.email;

       const badge = document.createElement("span");
       badge.className = "inline-block mt-2 px-4 py-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs rounded-full shadow";
       badge.textContent = "Active";

       textContainer.appendChild(name);
       textContainer.appendChild(email);
       textContainer.appendChild(badge);

       innerFlex.appendChild(avatar);
       innerFlex.appendChild(textContainer);

       card.appendChild(innerFlex);

       document.querySelector(".users").appendChild(card);

       setTimeout(() => {
         card.style.transition = "all 0.7s cubic-bezier(.21,1.02,.73,1)";
         card.style.opacity = 1;
         card.style.transform = "translateY(0) scale(1)";
       }, 120 * idx);
    });
});
}
getUsers();

document.querySelector("#refreshBtn")
.addEventListener("click", function(){
    getUsers();
})
