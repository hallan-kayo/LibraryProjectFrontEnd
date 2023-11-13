const form = document.getElementById("form");
const username = document.getElementById("inputNome");
const sobrenome = document.getElementById("inputSobrenome")
const sexo = document.getElementById("selectSexo");
const cpf = document.getElementById("inputCPF");
const telefone = document.getElementById("inputTelefone");
const cep = document.getElementById("inputCEP");
const rua = document.getElementById("inputRua");
const numero = document.getElementById("inputNumero")
const bairro = document.getElementById("inputBairro");
const cidade = document.getElementById("inputCidade");
const estado = document.getElementById("inputEstado");
const email = document.getElementById("inputEmail");
const emailConfirmation = document.getElementById("inputConfirmarEmail")
const password = document.getElementById("inputSenha");
const passwordConfirmation = document.getElementById("inputConfirmarSenha");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const sobrenomeValue = sobrenome.value;
  const sexoValue = sexo.value;
  const cpfValue = cpf.value;
  const telefoneValue = telefone.value;
  const cepValue = cep.value;
  const ruaValue = rua.value;
  const numeroValue = numero.value;
  const bairroValue = bairro.value;
  const cidadeValue = cidade.value;
  const estadoValue = estado.value;
  const emailValue = email.value;
  const emailConfirmationValue = emailConfirmation.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;
  

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório!");
  } else {
    setSuccessFor(username);
  }

  if (sobrenomeValue === "") {
    setErrorFor(sobrenome, "O sobrenome de usuário é obrigatório!");
  } else {
    setSuccessFor(sobrenome);
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

  if (numeroValue === "") {
    setErrorFor(numero, "O número da residência do usuário é obrigatório!");
  } else {
    setSuccessFor(numero);
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
    setErrorFor(email, "O email é obrigatório!");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido!");
  } else {
    setSuccessFor(email);
  }

  if (emailConfirmationValue === "") {
    setErrorFor(emailConfirmation, "A confirmação de email é obrigatória!");
  } else if (!checkEmail(emailConfirmationValue)) {
    setErrorFor(emailConfirmation, "Por favor, insira um email válido!");
  } else {
    setSuccessFor(emailConfirmation);
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