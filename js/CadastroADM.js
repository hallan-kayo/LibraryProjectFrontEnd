const form = document.getElementById("form");
const username = document.getElementById("username");
const sexo = document.getElementById("sexo");
const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");
const cep = document.getElementById("cep");
const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const sexoValue = sexo.value;
  const cpfValue = cpf.value;
  const telefoneValue = telefone.value;
  const cepValue = cep.value;
  const ruaValue = rua.value;
  const bairroValue = bairro.value;
  const cidadeValue = cidade.value;
  const estadoValue = estado.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;
  

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório!");
  } else {
    setSuccessFor(username);
  }

  if (sexoValue === "") {
    setErrorFor(sexo, "O sexo do usuário é obrigatório!");
  } else {
    setSuccessFor(sexo);
  }

  if (cpfValue === "") {
    setErrorFor(cpf, "O CPF é obrigatório!");
  } else if (cpfValue.length < 11) {
    setErrorFor(cpf, "O CPF precisa ter no mínimo 11 dígitos!");
  } else {
    setSuccessFor(cpf);
  }

  if (telefoneValue === "") {
    setErrorFor(telefone, "O telefone é obrigatório!");
  } else if (telefoneValue.length < 11) {
    setErrorFor(telefone, "O telefone precisa ter no mínimo 11 dígitos!");
  } else {
    setSuccessFor(telefone);
  }

  if (cepValue === "") {
    setErrorFor(cep, "O CEP é obrigatório!");
  } else if (cepValue.length < 8) {
    setErrorFor(cep, "O CEP precisa ter no mínimo 8 dígitos!");
  } else {
    setSuccessFor(cep);
  }

  if (ruaValue === "") {
    setErrorFor(rua, "O nome da Rua do usuário é obrigatória!");
  } else {
    setSuccessFor(rua);
  }

  if (bairroValue === "") {
    setErrorFor(bairro, "O Bairro do usuário é obrigatório!");
  } else {
    setSuccessFor(bairro);
  }

  if (cidadeValue === "") {
    setErrorFor(cidade, "A Cidade do usuário é obrigatória!");
  } else {
    setSuccessFor(cidade);
  }

  if (estadoValue === "") {
    setErrorFor(estado, "O Estado do usuário é obrigatório!");
  } else {
    setSuccessFor(estado);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido!");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória!");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "A senha precisa ter no mínimo 8 caracteres!");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória!");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem!");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O cadastro está completo!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}