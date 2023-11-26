const form = document.getElementById("form");
const username = document.getElementById("inputNome");
const sobrenome = document.getElementById("inputSobrenome");
const sexo = document.getElementById("selectSexo");
const cpf = document.getElementById("inputCPF");
const telefone = document.getElementById("inputTelefone");
const cep = document.getElementById("inputCEP");
const rua = document.getElementById("inputRua");
const numero = document.getElementById("inputNumero");
const bairro = document.getElementById("inputBairro");
const cidade = document.getElementById("inputCidade");
const estado = document.getElementById("inputEstado");
const email = document.getElementById("inputEmail");
const emailConfirmation = document.getElementById("inputConfirmarEmail");
const password = document.getElementById("inputSenha");
const passwordConfirmation = document.getElementById("inputConfirmarSenha");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // se tiver algum campo errado ele retorna
  const formIsCorrectly = checkInputs();

  if (!formIsCorrectly) return;

  //se os campos estiverem corretos ele limpa o form
  form.reset();
});

function checkInputs() {
  if (username.value === "") {
    setErrorFor(username, "O nome de usuário é obrigatório!");
  } else {
    setSuccessFor(username);
  }

  if (sobrenome.value === "") {
    setErrorFor(sobrenome, "O sobrenome de usuário é obrigatório!");
  }
  setSuccessFor(sobrenome);

  if (sexo.value === "") {
    setErrorFor(sexo, "O sexo do usuário é obrigatório!");
  } else {
    setSuccessFor(sexo);
  }

  if (cpf.value === "") {
    setErrorFor(cpf, "O CPF é obrigatório!");
    console.log("CPF");
  } else if (cpf.value.length < 11) {
    setErrorFor(cpf, "O CPF precisa ter no mínimo 11 dígitos!");
  } else {
    setSuccessFor(cpf);
  }

  if (telefone.value === "") {
    setErrorFor(telefone, "O telefone é obrigatório!");
  } else if (telefone.value.length < 11) {
    setErrorFor(telefone, "O telefone precisa ter no mínimo 11 dígitos!");
  } else {
    setSuccessFor(telefone);
  }

  if (cep.value === "") {
    setErrorFor(cep, "O CEP é obrigatório!");
  } else if (cep.value.length < 8) {
    setErrorFor(cep, "O CEP precisa ter no mínimo 8 dígitos!");
  } else {
    setSuccessFor(cep);
  }

  if (rua.value === "") {
    setErrorFor(rua, "O nome da Rua do usuário é obrigatória!");
  } else {
    setSuccessFor(rua);
  }

  if (numero.value === "") {
    setErrorFor(numero, "O número da residência do usuário é obrigatório!");
  } else {
    setSuccessFor(numero);
  }

  if (bairro.value === "") {
    setErrorFor(bairro, "O Bairro do usuário é obrigatório!");
  } else {
    setSuccessFor(bairro);
  }

  if (cidade.value === "") {
    setErrorFor(cidade, "A Cidade do usuário é obrigatória!");
  } else {
    setSuccessFor(cidade);
  }

  if (estado.value === "") {
    setErrorFor(estado, "O Estado do usuário é obrigatório!");
  } else {
    setSuccessFor(estado);
  }

  if (email.value === "") {
    setErrorFor(email, "O email é obrigatório!");
  } else if (!checkEmail(email.value)) {
    setErrorFor(email, "Por favor, insira um email válido!");
  } else {
    setSuccessFor(email);
  }

  if (emailConfirmation.value === "") {
    setErrorFor(emailConfirmation, "A confirmação de email é obrigatória!");
  } else if (!checkEmail(emailConfirmation.value)) {
    setErrorFor(emailConfirmation, "Por favor, insira um email válido!");
  } else if (email.value !== emailConfirmation.value) {
    setErrorFor(emailConfirmation, "Os emails não conferem!");
  } else {
    setSuccessFor(emailConfirmation);
  }

  if (password.value === "") {
    setErrorFor(password, "A senha é obrigatória!");
  } else if (password.value.length < 8) {
    setErrorFor(password, "A senha precisa ter no mínimo 8 caracteres!");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmation.value === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória!");
  } else if (passwordConfirmation.value !== password.value) {
    setErrorFor(passwordConfirmation, "As senhas não conferem!");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");

  console.log("formControls", ...formControls);

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    alert("O cadastro está completo!");
    console.log("O cadastro está completo!");
  }

  console.log("passowd", password.value);
  console.log("confirmPass", passwordConfirmation);
  return formIsValid;
}

function setErrorFor(input, message) {
  //cria uma tag span para add a msg de erro
  var errorMessage = document.createElement("span");
  errorMessage.innerHTML = message;

  // adiciona a tag span depois do input
  input.parentNode.insertBefore(errorMessage, input.nextSibling);

  //adiciona a classe de erro
  input.classList.add("error");
}

function setSuccessFor(input) {
  // Se o input tiver a classe error ele remove
  if (input.classList.contains("error")) {
    input.classList.remove("error");

    // remove o elemento span de mensagem de erro no HTML
    var errorMessage = input.nextElementSibling;
    if (errorMessage && errorMessage.tagName === "SPAN") {
      errorMessage.parentNode.removeChild(errorMessage);
    }
  }

  // adiciona a classe success
  input.classList.add("success");
}

function checkEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
