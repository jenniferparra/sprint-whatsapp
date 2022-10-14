const userRaw = localStorage.getItem("user");
console.log("Aiuda esto no quiere dar");
let user;

const validationSession = () => {
  if (!userRaw) {
    location.href = "http://127.0.0.1:5502/src/home.html";
  } else {
    user = JSON.parse(userRaw);
  }
};
validationSession();

const handleCloseSession = () => {
  localStorage.clear();
  location.href = "http://localhost:5501";
};

const btnCloseSession = document.getElementById("btnCloseSession");

btnCloseSession.addEventListener("click", handleCloseSession);

const textUserName = document.getElementById("nameUser");

textUserName.innerHTML += ` ${user.name}`;
