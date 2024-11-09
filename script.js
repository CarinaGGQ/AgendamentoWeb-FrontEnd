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

// Criação da janela Calendário
function openModalCalendario() {
  const modal = document.getElementById("calendário-container");
  modal.classList.add("abrir");

  // Renderize o calendário sempre que o modal for aberto, após garantir que o DOM está carregado
  setTimeout(renderCalendar, 0);

  modal.addEventListener("click", (e) => {
    if (e.target.id == "calendário-container" || e.target.id == "fechar") {
      modal.classList.remove("abrir");
      localStorage.fechaModal = "calendário-container";
    }
  });
}

// Criação do Calendário
const date = new Date();

// Função que renderiza o calendário
const renderCalendar = () => {
  // Ajusta o primeiro dia do mês
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate(); // Último dia do mês atual
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate(); // Último dia do mês anterior
  const firstDayIndex = date.getDay(); // Índice do primeiro dia da semana
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay(); // Índice do último dia da semana
  const prevDays = firstDayIndex; // Quantos dias do mês anterior mostrar

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

  // Atualiza o título do mês e do ano no calendário
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML = date.getFullYear();

  let days = "";

  // Mostrar os dias do mês anterior, se houver espaço no início
  for (let x = prevLastDay - prevDays + 1; x <= prevLastDay; x++) {
    days += `<div class="prev-date">${x}</div>`; // Dias do mês anterior
  }

  // Mostrar os dias do mês atual
  for (let i = 1; i <= lastDay; i++) {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Adiciona classes para os dias passados, o dia de hoje e outros dias
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

  // Atualiza os dias visíveis no mês
  monthDays.innerHTML = days;
};

// Impede a navegação para o ano anterior ou ano seguinte
document.querySelector(".prev").addEventListener("click", () => {
  // Restringe a navegação ao ano atual
  if (date.getFullYear() === new Date().getFullYear()) {
    // Somente altera o mês, não o ano
    if (date.getMonth() > 0) {
      date.setMonth(date.getMonth() - 1); // Vai para o mês anterior
      renderCalendar();
    }
  }
});

document.querySelector(".next").addEventListener("click", () => {
  // Restringe a navegação ao ano atual
  if (date.getFullYear() === new Date().getFullYear()) {
    // Somente altera o mês, não o ano
    if (date.getMonth() < 11) {
      date.setMonth(date.getMonth() + 1); // Vai para o mês seguinte
      renderCalendar();
    }
  }
});

// Adiciona um evento de clique ao calendário que verifica se o dia clicado é válido
document.querySelector(".days").addEventListener("click", function (e) {
  const clickedDay = e.target;
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth(); // Mês atual
  const currentYear = currentDate.getFullYear(); // Ano atual

  const clickedDayNumber = parseInt(clickedDay.innerText); // Número do dia clicado
  const clickedDayClass = clickedDay.classList; // Classes do dia clicado

  // Verifica se o dia clicado é do mês anterior ou de meses anteriores
  const isPreviousMonth = clickedDayClass.contains("prev-date");
  const isPastDay = clickedDayClass.contains("passado");

  // Se o dia clicado for do mês anterior ou um dia passado, não faz nada
  if (
    isPreviousMonth || // Verifica se o dia é do mês anterior
    isPastDay || // Verifica se o dia é passado no mês atual
    (currentYear === date.getFullYear() &&
      currentMonth === date.getMonth() &&
      clickedDayNumber < currentDay) // Verifica se o dia é anterior ao dia atual
  ) {
    // Se for um dia inválido (passado ou mês anterior), não faz nada
    return; // Aqui a função retorna e **não abre** a janela de horários
  }

  // Caso contrário, abre a janela de horários
  openModalHorario();
});

// Inicializa o calendário com o mês atual
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
