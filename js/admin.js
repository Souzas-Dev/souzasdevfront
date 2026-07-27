const API_URL =
  ["localhost", "127.0.0.1"].includes(
    window.location.hostname
  )
    ? `http://${window.location.hostname}:3000`
    : "https://api.souzasdev.com";

const logoutButton =
  document.querySelector("#logout-button");

let csrfToken = "";
let loadedContacts = [];

const statusFilter =
  document.querySelector("#status-filter");

const messageSearch =
  document.querySelector("#message-search");

const messagesContainer =
  document.querySelector(
    "#messages-container"
  );

const dashboardFeedback =
  document.querySelector(
    "#dashboard-feedback"
  );

const adminName =
  document.querySelector("#admin-name");

const adminEmail =
  document.querySelector("#admin-email");

const totalCount =
  document.querySelector("#total-count");

const newCount =
  document.querySelector("#new-count");

const readCount =
  document.querySelector("#read-count");

const archivedCount =
  document.querySelector(
    "#archived-count"
  );

const statusLabels = {
  new: "Nova",
  read: "Lida",
  archived: "Arquivada"
};

const projectTypeLabels = {
  site_institutional:
    "Site institucional",

  landing_page:
    "Landing page",

  portfolio_profissional:
    "Portfólio profissional",

  sistema_web:
    "Sistema web",

  api_integracao:
    "API ou integração",

  manutencao_melhoria:
    "Manutenção ou melhoria",

  nao_sei:
    "Ainda não tenho certeza",

  outro:
    "Outro"
};

const deadlineLabels = {
  sem_prazo:
    "Sem prazo definido",

  assim_que_possivel:
    "Assim que possível",

  ate_30_dias:
    "Dentro de 30 dias",

  entre_1_3_meses:
    "Entre 1 e 3 meses",

  mais_3_meses:
    "Mais de 3 meses",

  conversar_primeiro:
    "Quero conversar primeiro"
};

function getCsrfTokenFromCookie() {
  const cookies = document.cookie
    .split(";")
    .map((item) => item.trim())
    .filter(Boolean);

  const csrfCookie = cookies.find((item) =>
    item.startsWith("portfolio_csrf=")
  );

  if (!csrfCookie) {
    return "";
  }

  const value = csrfCookie.split("=")[1];

  return decodeURIComponent(value || "");
}

async function refreshCsrfToken() {
  try {
    const data = await apiRequest(
      "/api/auth/csrf"
    );

    csrfToken = data.csrfToken || "";
  } catch {
    csrfToken = "";
  }
}

async function apiRequest(
  path,
  options = {}
) {
  const response = await fetch(
    `${API_URL}${path}`,
    {
      ...options,
      credentials: "include",

      headers: {
        ...(options.body
          ? {
              "Content-Type":
                "application/json"
            }
          : {}),

        ...(csrfToken
          ? {
              "X-CSRF-Token": csrfToken
            }
          : {}),

        ...options.headers
      }
    }
  );

  const data = await response
    .json()
    .catch(() => ({
      message:
        "Resposta inválida do servidor."
    }));

  if (!response.ok) {
    if (response.status === 401) {
      window.location.replace(
        "/login"
      );
    }

    const error = new Error(
      data.message ||
      "Não foi possível concluir a operação."
    );

    error.status = response.status;
    throw error;
  }

  return data;
}

function showFeedback(
  message = "",
  type = ""
) {
  dashboardFeedback.textContent =
    message;

  dashboardFeedback.className =
    "feedback";

  if (type) {
    dashboardFeedback.classList.add(
      type
    );
  }
}

function updateStats(stats) {
  totalCount.textContent =
    stats.total;

  newCount.textContent =
    stats.new;

  readCount.textContent =
    stats.read;

  archivedCount.textContent =
    stats.archived;
}

function createTextElement(
  tagName,
  className,
  text
) {
  const element =
    document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  element.textContent = text;

  return element;
}

function formatDate(dateValue) {
  const date = new Date(dateValue);

  return new Intl.DateTimeFormat(
    "pt-BR",
    {
      dateStyle: "long",
      timeStyle: "short"
    }
  ).format(date);
}

function getReadableLabel(
  labels,
  value
) {
  return (
    labels[value] ||
    "Não informado"
  );
}

function formatWhatsApp(value) {
  const digits = String(value ?? "")
    .replace(/\D/g, "");

  const nationalNumber =
    digits.startsWith("55") &&
    [12, 13].includes(digits.length)
      ? digits.slice(2)
      : digits;

  if (nationalNumber.length === 11) {
    return (
      `(${nationalNumber.slice(0, 2)}) ` +
      `${nationalNumber.slice(2, 7)}-` +
      nationalNumber.slice(7)
    );
  }

  if (nationalNumber.length === 10) {
    return (
      `(${nationalNumber.slice(0, 2)}) ` +
      `${nationalNumber.slice(2, 6)}-` +
      nationalNumber.slice(6)
    );
  }

  return (
    nationalNumber ||
    "Não informado"
  );
}

function getWhatsAppUrl(value) {
  const digits = String(value ?? "")
    .replace(/\D/g, "");

  if (!digits) {
    return "";
  }

  const internationalNumber =
    digits.startsWith("55")
      ? digits
      : `55${digits}`;

  return (
    `https://wa.me/${internationalNumber}`
  );
}

function createDetailItem(
  label,
  value
) {
  const item =
    document.createElement("div");

  item.className =
    "message-card__detail";

  const term =
    createTextElement(
      "dt",
      "message-card__detail-label",
      label
    );

  const description =
    document.createElement("dd");

  description.className =
    "message-card__detail-value";

  if (typeof value === "string") {
    description.textContent = value;
  } else {
    description.append(value);
  }

  item.append(
    term,
    description
  );

  return item;
}

async function changeStatus(
  contactId,
  status
) {
  showFeedback(
    "Atualizando status..."
  );

  try {
    await apiRequest(
      `/api/admin/contacts/${
        encodeURIComponent(contactId)
      }`,
      {
        method: "PATCH",
        body: JSON.stringify({
          status
        })
      }
    );

    showFeedback(
      "Status atualizado.",
      "success"
    );

    await loadContacts();
  } catch (error) {
    showFeedback(
      error.message,
      "error"
    );
  }
}

async function removeContact(
  contactId
) {
  const confirmed = window.confirm(
    "Deseja excluir esta mensagem permanentemente?"
  );

  if (!confirmed) {
    return;
  }

  try {
    await apiRequest(
      `/api/admin/contacts/${
        encodeURIComponent(contactId)
      }`,
      {
        method: "DELETE"
      }
    );

    showFeedback(
      "Mensagem excluída.",
      "success"
    );

    await loadContacts();
  } catch (error) {
    showFeedback(
      error.message,
      "error"
    );
  }
}

function createMessageCard(contact) {
  const article =
    document.createElement("article");

  article.className =
    "message-card";

  const header =
    document.createElement("div");

  header.className =
    "message-card__header";

  const identity =
    document.createElement("div");

  identity.append(
    createTextElement(
      "h2",
      "message-card__name",
      contact.name
    )
  );

  const email =
    createTextElement(
      "a",
      "message-card__email",
      contact.email
    );

  email.href =
    `mailto:${contact.email}`;

  identity.append(email);

  identity.append(
    createTextElement(
      "p",
      "message-card__date",
      formatDate(contact.createdAt)
    )
  );

  const select =
    document.createElement("select");

  select.className =
    "message-card__status";

  Object.entries(
    statusLabels
  ).forEach(([status, label]) => {
    const option =
      document.createElement("option");

    option.value = status;
    option.textContent = label;
    option.selected =
      status === contact.status;

    select.append(option);
  });

  select.addEventListener(
    "change",
    () => {
      changeStatus(
        contact.id,
        select.value
      );
    }
  );

  header.append(identity, select);

  const details =
    document.createElement("dl");

  details.className =
    "message-card__details";

  const whatsappUrl =
    getWhatsAppUrl(
      contact.whatsapp
    );

  let whatsappValue =
    "Não informado";

  if (whatsappUrl) {
    const whatsappLink =
      createTextElement(
        "a",
        "message-card__detail-link",
        formatWhatsApp(
          contact.whatsapp
        )
      );

    whatsappLink.href =
      whatsappUrl;

    whatsappLink.target =
      "_blank";

    whatsappLink.rel =
      "noopener noreferrer";

    whatsappLink.setAttribute(
      "aria-label",
      `Abrir conversa no WhatsApp com ${formatWhatsApp(
        contact.whatsapp
      )}`
    );

    whatsappValue =
      whatsappLink;
  }

  details.append(
    createDetailItem(
      "WhatsApp",
      whatsappValue
    ),

    createDetailItem(
      "Tipo de projeto",
      getReadableLabel(
        projectTypeLabels,
        contact.projectType
      )
    ),

    createDetailItem(
      "Prazo esperado",
      getReadableLabel(
        deadlineLabels,
        contact.deadline
      )
    )
  );

  const message =
    createTextElement(
      "p",
      "message-card__body",
      contact.message
    );

  const actions =
    document.createElement("div");

  actions.className =
    "message-card__actions";

  const deleteButton =
    document.createElement("button");

  deleteButton.type = "button";

  deleteButton.className =
    "button button--danger";

  deleteButton.textContent =
    "Excluir mensagem";

  deleteButton.addEventListener(
    "click",
    () => removeContact(contact.id)
  );

  actions.append(deleteButton);

  article.append(
    header,
    details,
    message,
    actions
  );

  return article;
}

function normalizeSearchText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR")
    .trim();
}

function getVisibleContacts() {
  const searchTerm = normalizeSearchText(
    messageSearch.value
  );

  if (!searchTerm) {
    return loadedContacts;
  }

  return loadedContacts.filter((contact) => {
    return [
      contact.name,
      contact.email,
      contact.whatsapp,
      formatWhatsApp(
        contact.whatsapp
      ),
      contact.projectType,
      projectTypeLabels[
        contact.projectType
      ],
      contact.deadline,
      deadlineLabels[
        contact.deadline
      ],
      contact.message
    ].some((value) =>
      normalizeSearchText(value).includes(
        searchTerm
      )
    );
  });
}

function renderContacts(contacts) {
  messagesContainer.replaceChildren();

  if (contacts.length === 0) {
    messagesContainer.append(
      createTextElement(
        "p",
        "empty-state",
        "Nenhuma mensagem encontrada."
      )
    );

    return;
  }

  const fragment =
    document.createDocumentFragment();

  contacts.forEach((contact) => {
    fragment.append(
      createMessageCard(contact)
    );
  });

  messagesContainer.append(fragment);
}

async function loadContacts() {
  showFeedback(
    "Carregando mensagens..."
  );

  const filter =
    statusFilter.value;

  const query = filter
    ? `?status=${
        encodeURIComponent(filter)
      }`
    : "";

  const data = await apiRequest(
    `/api/admin/contacts${query}`
  );

  loadedContacts = data.contacts;

  updateStats(data.stats);
  renderContacts(loadedContacts);
  showFeedback("");
}

async function loadAuthenticatedUser() {
  const data =
    await apiRequest("/api/auth/me");

  adminName.textContent =
    data.user.name;

  adminEmail.textContent =
    data.user.email;
}

async function logout() {
  logoutButton.disabled = true;
  logoutButton.textContent =
    "Saindo...";

  try {
    await apiRequest(
      "/api/auth/logout",
      {
        method: "POST"
      }
    );
  } finally {
    window.location.replace(
      "/login"
    );
  }
}

messageSearch.addEventListener(
  "input",
  () => {
    renderContacts(getVisibleContacts());
  }
);

statusFilter.addEventListener(
  "change",
  () => {
    loadContacts().catch((error) => {
      showFeedback(
        error.message,
        "error"
      );
    });
  }
);

logoutButton.addEventListener(
  "click",
  logout
);

async function initialize() {
  try {
    csrfToken = getCsrfTokenFromCookie();
    await refreshCsrfToken();
    await loadAuthenticatedUser();
    await loadContacts();
  } catch (error) {
    showFeedback(
      error.message,
      "error"
    );
  }
}

initialize();
