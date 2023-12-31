//Criação da janela Aluno//

function openModalAluno() {
  const modal = document.getElementById("aluno-container");
  modal.classList.add("abrir");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "aluno-container" || e.target.id == "fechar") {
      modal.classList.remove("abrir");
      localStorage.fechaModal = "aluno-container";
    }
  });
}

//Criação da janela Professor//

function openModalProfessor() {
  const modal = document.getElementById("professor-container");
  modal.classList.add("abrir");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "professor-container" || e.target.id == "fechar") {
      modal.classList.remove("abrir");
      localStorage.fechaModal = "professor-container";
    }
  });
}

//Criação da janela Administrador//

function openModalAdministrador() {
  const modal = document.getElementById("administrador-container");
  modal.classList.add("abrir");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "administrador-container" || e.target.id == "fechar") {
      modal.classList.remove("abrir");
      localStorage.fechaModal = "administrador-container";
    }
  });
}

//Criação da janela Quero ser Colaborador//

function openModalColaborador() {
  const modal = document.getElementById("colaborador-container");
  modal.classList.add("abrir");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "colaborador-container" || e.target.id == "fechar") {
      modal.classList.remove("abrir");
      localStorage.fechaModal = "colaborador-container";
    }
  });
}

//Confirmação Senha//

function validatePassword(passwordId, confirmPasswordId) {
  var password = document.getElementById("password-novo");
  var confirm_password = document.getElementById("confirm-password");

  if (password.value !== confirm_password.value) {
    confirm_password.setCustomValidity("As senhas não coincidem!");
    return false;
  } else {
    confirm_password.setCustomValidity("");
    return true;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var password = document.getElementById("password-novo");
  var confirm_password = document.getElementById("confirm-password");

  function handleFormSubmit(event) {
    if (!validatePassword("password-novo", "confirm-password")) {
      // Impede o envio do formulário se as senhas não coincidirem
      event.preventDefault();
    }
  }

  password.addEventListener("input", function () {
    validatePassword("password-novo", "confirm-password");
  });

  confirm_password.addEventListener("input", function () {
    validatePassword("password-novo", "confirm-password");
  });

  document
    .getElementById("formulario")
    .addEventListener("submit", handleFormSubmit);
});

//Criação da janela Feedback//

function openModalFeedback() {
  const modal = document.getElementById("feedback-container");
  modal.classList.add("abrir");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "feedback-container" || e.target.id == "fechar") {
      modal.classList.remove("abrir");
      localStorage.fechaModal = "feedback-container";
    }
  });
}

//Criação da janela Calendário//

function openModalCalendario() {
  const modal = document.getElementById("calendário-container");
  modal.classList.add("abrir");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "calendário-container" || e.target.id == "fechar") {
      modal.classList.remove("abrir");
      localStorage.fechaModal = "calendário-container";
    }
  });
}

//Criação do Calendário//

const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = date.getFullYear();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Adicione a classe "passado" aos dias passados
    if (
      date.getMonth() < currentMonth ||
      date.getFullYear() < currentYear ||
      (date.getMonth() === currentMonth && i < currentDate.getDate())
    ) {
      days += `<div class="passado">${i}</div>`;
    } else if (
      i === currentDate.getDate() &&
      date.getMonth() === currentMonth
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

//Criação da janela Horário//

function openModalHorario() {
  const modal = document.getElementById("horarios-container");
  const passados = document.querySelectorAll(".passado");

  modal.classList.add("abrir");

  modal.addEventListener("click", (e) => {
    if (
      e.target.id == "horarios-container" ||
      e.target.id == "fechar" ||
      e.target.classList.contains("passado")
    ) {
      modal.classList.remove("abrir");
      localStorage.fechaModal = "horarios-container";
    }
  });

  // Adicione o seguinte código para impedir a abertura da janela de horários
  passados.forEach((diaPassado) => {
    diaPassado.addEventListener("click", (e) => {
      e.stopPropagation(); // Impede a propagação do evento para evitar a abertura da janela
    });
  });
}

//Criação da janela Confirmação de Agendamento//

function openModalAgendamento() {
  const modal = document.getElementById("confirmação-container");
  modal.classList.add("abrir");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "confirmação-container" || e.target.id == "fechar") {
      modal.classList.remove("abrir");
      localStorage.fechaModal = "confirmação-container";
    }
  });
}
