function emailCheck(email, confirmEmail) {
  return email === confirmEmail;
}

function passwordCheck(password, confirmPassword) {
  return password === confirmPassword;
}

function saveManager() {
  var form = document.getElementById("form").value;
  var username = document.getElementById("inputNome").value;
  var sobrenome = document.getElementById("inputSobrenome").value;
  var dataNascimento = document.getElementById("date").value;
  var cpf = document.getElementById("inputCPF").value;
  var telefone = document.getElementById("inputTelefone").value;
  var cep = document.getElementById("inputCEP").value;
  var rua = document.getElementById("inputRua").value;
  var numero = document.getElementById("inputNumero").value;
  var bairro = document.getElementById("inputBairro").value;
  var cidade = document.getElementById("inputCidade").value;
  var estado = document.getElementById("inputEstado").value;
  var email = document.getElementById("inputEmail").value;
  var emailConfirmation = document.getElementById("inputConfirmarEmail").value;
  var password = document.getElementById("inputSenha").value;
  var passwordConfirmation = document.getElementById(
    "inputConfirmarSenha"
  ).value;

  var confirmEmail = emailCheck(email, emailConfirmation);
  var confirmPassword = passwordCheck(password, passwordConfirmation);

  var addressData = {
    publicPlace: rua,
    number: numero,
    neighborhood: bairro,
    city: cidade,
    state: estado,
    cep: cep,
  };

  var managerData = {
    name: username,
    username: sobrenome,
    phone: telefone,
    email: email,
    cpf: cpf,
    dateOfBirth: dataNascimento,
    Type: "Manager",
    password: password,
    adress: addressData,
  };

  if (confirmEmail && confirmPassword) {
    axios
      .post(`http://localhost:8080/managers`, managerData)
      .then((response) => {
        if (response.data != null) {
          console.log("salvo com sucesso");
          return;
        } else {
          console.log("algo deu errado");
          return;
        }
        return;
      });
  } else {
    console.log("algo errado");
  }
}

document
  .querySelector('button[name = "submit"]')
  .addEventListener("click", saveManager);
