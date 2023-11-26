function login() {
  var email = document.querySelector('input[name="email"]').value;
  var password = document.querySelector('input[name="password"]').value;

  var loginData = {
    email: email,
    password: password,
  };
  console.log(loginData);

  axios
    .post(`http://localhost:8080/users/login`, loginData)
    .then((response) => {
      const user = response.data;
      console.log(user);
      if (user.Type == "Manager") {
        alert("Manager");
        return;
      } else if (user.Type == "Reader") {
        alert("Reader");
        return;
      }
      alert(
        "usuário ou senha incorretos. verifique seus dados e tente novamente."
      );
      return;
    });
}
document
  .querySelector('button[name = "login"]')
  .addEventListener("click", login);
