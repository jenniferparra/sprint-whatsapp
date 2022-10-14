const URL_API = "https://whatsapp-back.onrender.com/";

console.log("Holo");

class UI {
  constructor(targetID) {
    this.target = document.getElementById(targetID);
  }

  getValue() {
    return this.target.value;
  }

  get getItem() {
    return this.target;
  }
}

const name = new UI("name");
const phone = new UI("phone");
const password = new UI("password");
const image = new UI("img");
const info = new UI("info");

const form = new UI("form__login");

const handleSubmit = async (e) => {
  e.preventDefault();
  //new object from values
  const newUser = {
    name: name.getValue(),
    phone: phone.getValue(),
    password: password.getValue(),
    img: image.getValue(),
    flag: false,
    info: info.getValue(),
  };
  console.log(newUser);
  //validations
  for (const key in newUser) {
    const element = newUser[key];
    if (element === "") {
      alert(`Falta llenar el campo ${key}`);
      return;
    }
  }
  //send to back
  try {
    let response = await axios.post(`${URL_API}users`, newUser);
    if (response.status === 201) {
      Swal.fire("Excelente!", "Usuario creado con éxito!", "success");
      // location.href = "http://127.0.0.1:5502/src/index.html";
    }
  } catch (error) {
    Swal.fire("Oops!", "Se ha presentado un error!", "error");
  }
};

form.getItem.addEventListener("submit", (e) => {
  handleSubmit(e);
});
