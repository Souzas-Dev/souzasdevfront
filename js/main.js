import { siteData } from "./site-data.js";

const $ = (selector) =>
  document.querySelector(selector);

const $$ = (selector) =>
  document.querySelectorAll(selector);

const menuButton = $("#menu-button");
const navigation = $("#navigation");
const navigationLinks = $$(".navigation a[href^='#']");
const header = $("#header");
const scrollProgress = $("#scroll-progress");
const heroSection = $("#inicio");
const whatsappButton = $("#whatsapp-button");

const whatsappMobileQuery =
  window.matchMedia("(max-width: 620px)");

const contactForm = $("#contact-form");
const contactSubmit = $("#contact-submit");
const formFeedback = $("#form-feedback");
const serviceStatus = $("#service-status");
const serviceMessage = $("#service-message");

const nameInput = $("#name");
const emailInput = $("#email");
const whatsappInput = $("#whatsapp");
const projectTypeInput = $("#project-type");
const deadlineInput = $("#deadline");
const messageInput = $("#message");
const messageCounter = $("#message-counter");

const fieldErrors = {
  name: $("#name-error"),
  email: $("#email-error"),
  whatsapp: $("#whatsapp-error"),
  projectType: $("#project-type-error"),
  deadline: $("#deadline-error"),
  message: $("#message-error")
};

const validProjectTypes = new Set([
  "site_institutional",
  "landing_page",
  "portfolio_profissional",
  "sistema_web",
  "api_integracao",
  "manutencao_melhoria",
  "nao_sei",
  "outro"
]);

const validDeadlines = new Set([
  "sem_prazo",
  "assim_que_possivel",
  "ate_30_dias",
  "entre_1_3_meses",
  "mais_3_meses",
  "conversar_primeiro"
]);

function setText(selector, value) {
  const element = $(selector);

  if (element) {
    element.textContent = value;
  }
}

function createElement(
  tagName,
  className = "",
  text = ""
) {
  const element =
    document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  return element;
}

function populateMainContent() {
  setText(
    "#current-year",
    new Date().getFullYear()
  );
}

function renderAbout() {
  const container = $("#about-text");
  const fragment =
    document.createDocumentFragment();

  siteData.about.paragraphs.forEach(
    (paragraph) => {
      fragment.append(
        createElement("p", "", paragraph)
      );
    }
  );

  container.replaceChildren(fragment);
}

function renderStats() {
  const container = $("#stats-grid");
  const fragment =
    document.createDocumentFragment();

  siteData.stats.forEach((stat) => {
    const article =
      createElement("article", "stat-card");

    article.append(
      createElement(
        "strong",
        "",
        stat.value
      ),
      createElement(
        "p",
        "",
        stat.label
      )
    );

    fragment.append(article);
  });

  container.replaceChildren(fragment);
}

function renderServices() {
  const container = $("#services-grid");
  const fragment =
    document.createDocumentFragment();

  siteData.services.forEach(
    (service) => {
      const article =
        createElement(
          "article",
          "service-card reveal"
        );

      article.append(
        createElement(
          "span",
          "service-card__number",
          service.number
        ),
        createElement(
          "h3",
          "",
          service.title
        ),
        createElement(
          "p",
          "",
          service.description
        ),
        createElement(
          "span",
          "service-card__arrow",
          "↗"
        )
      );

      fragment.append(article);
    }
  );

  container.replaceChildren(fragment);
}

function renderTechnologies() {
  const container =
    $("#technologies-list");

  const fragment =
    document.createDocumentFragment();

  let technologyIndex = 0;

  const setTechnologyState = (
    item,
    isOpen
  ) => {
    const description =
      item.querySelector(
        ".technology-item__description"
      );

    item.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    item.setAttribute(
      "aria-label",
      `${item.dataset.technology}: ${
        isOpen
          ? "ocultar descrição"
          : "mostrar descrição"
      }`
    );

    description.hidden =
      !isOpen;
  };

  const createTechnologyItem = (
    technology
  ) => {
    technologyIndex += 1;

    const item =
      createElement(
        "button",
        "technology-item"
      );

    item.type = "button";

    item.dataset.technology =
      technology.name;

    item.setAttribute(
      "aria-expanded",
      "false"
    );

    item.setAttribute(
      "aria-label",
      `${technology.name}: mostrar descrição`
    );

    let visual;

    if (technology.icon) {
      visual = createElement(
        "i",
        technology.icon
      );
    } else if (technology.image) {
      visual = createElement(
        "img",
        "technology-item__image"
      );

      visual.src =
        technology.image;

      visual.alt = "";
      visual.width = 52;
      visual.height = 52;
      visual.loading = "lazy";
      visual.decoding = "async";

      visual.referrerPolicy =
        "no-referrer";
    } else {
      visual = createElement(
        "span",
        "technology-item__symbol",
        technology.symbol
      );
    }

    visual.setAttribute(
      "aria-hidden",
      "true"
    );

    const name =
      createElement(
        "strong",
        "",
        technology.name
      );

    const description =
      createElement(
        "span",
        "technology-item__description",
        technology.description
      );

    description.id =
      `technology-description-${technologyIndex}`;

    description.hidden =
      true;

    item.setAttribute(
      "aria-controls",
      description.id
    );

    const toggle =
      createElement(
        "span",
        "technology-item__toggle",
        "+"
      );

    toggle.setAttribute(
      "aria-hidden",
      "true"
    );

    item.append(
      visual,
      name,
      description,
      toggle
    );

    item.addEventListener(
      "click",
      () => {
        const shouldOpen =
          item.getAttribute(
            "aria-expanded"
          ) !== "true";

        container
          .querySelectorAll(
            '.technology-item[aria-expanded="true"]'
          )
          .forEach(
            (openItem) => {
              setTechnologyState(
                openItem,
                false
              );
            }
          );

        if (shouldOpen) {
          setTechnologyState(
            item,
            true
          );
        }
      }
    );

    item.addEventListener(
      "keydown",
      (event) => {
        if (
          event.key === "Escape" &&
          item.getAttribute(
            "aria-expanded"
          ) === "true"
        ) {
          setTechnologyState(
            item,
            false
          );

          item.focus();
        }
      }
    );

    return item;
  };

  siteData.technologies.forEach(
    (group, groupIndex) => {
      const section =
        createElement(
          "section",
          "technology-group"
        );

      const title =
        createElement(
          "h3",
          "technology-group__title",
          group.category
        );

      title.id =
        `technology-group-${groupIndex + 1}`;

      section.setAttribute(
        "aria-labelledby",
        title.id
      );

      const grid =
        createElement(
          "div",
          "technology-group__grid"
        );

      group.items.forEach(
        (technology) => {
          grid.append(
            createTechnologyItem(
              technology
            )
          );
        }
      );

      section.append(
        title,
        grid
      );

      fragment.append(section);
    }
  );

  container.replaceChildren(fragment);
}
function renderProjects() {
  const container =
    $("#projects-grid");

  const fragment =
    document.createDocumentFragment();

  const createProjectLink = ({
    project,
    label,
    href,
    className,
    external = false
  }) => {
    const link =
      createElement(
        "a",
        className,
        label
      );

    link.href = href;

    if (external) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      link.setAttribute(
        "aria-label",
        `${label} de ${project.title} em nova aba`
      );
    }

    return link;
  };

  siteData.projects.forEach(
    (project) => {
      const article =
        createElement(
          "article",
          "project-preview reveal"
        );

      const visual =
        createElement(
          "div",
          "project-preview__visual"
        );

      const category =
        createElement(
          "span",
          "project-preview__category",
          project.category
        );

      visual.append(category);

      if (project.coverImage) {
        article.classList.add(
          "project-preview--with-cover"
        );

        visual.classList.add(
          "project-preview__visual--cover"
        );

        const image =
          createElement(
            "img",
            "project-preview__image"
          );

        image.src =
          project.coverImage;

        image.alt =
          project.coverAlt ??
          `Imagem de capa do projeto ${project.title}`;

        image.width = 1200;
        image.height = 750;
        image.loading = "lazy";
        image.decoding = "async";

        visual.append(image);
      } else {
        const iconWrapper =
          createElement(
            "div",
            "project-preview__icon"
          );

        const icon =
          createElement(
            "i",
            project.icon
          );

        icon.setAttribute(
          "aria-hidden",
          "true"
        );

        iconWrapper.append(icon);
        visual.append(iconWrapper);
      }

      const content =
        createElement(
          "div",
          "project-preview__content"
        );

      const tags =
        createElement(
          "div",
          "project-preview__tags"
        );

      project.technologies
        .slice(0, 5)
        .forEach(
          (technology) => {
            tags.append(
              createElement(
                "span",
                "",
                technology
              )
            );
          }
        );

      const actions =
        createElement(
          "div",
          "project-preview__actions"
        );

      if (project.demoUrl) {
        actions.append(
          createProjectLink({
            project,
            label: "Ver projeto",
            href: project.demoUrl,
            className:
              "project-preview__link",
            external: true
          })
        );
      }

      const fallbackCaseUrl =
        project.title === "Souzas Dev"
          ? "/cases/souzas-dev"
          : "";

      const caseUrl =
        project.caseUrl ??
        fallbackCaseUrl;

      if (caseUrl) {
        actions.append(
          createProjectLink({
            project,
            label: project.demoUrl
              ? "Conhecer o case"
              : "Ver case completo",
            href: caseUrl,
            className:
              project.demoUrl
                ? "project-preview__case-link"
                : "project-preview__link"
          })
        );
      }

      content.append(
        tags,
        createElement(
          "h3",
          "",
          project.title
        ),
        createElement(
          "p",
          "project-preview__subtitle",
          project.subtitle
        ),
        createElement(
          "p",
          "project-preview__description",
          project.overview
        ),
        actions
      );

      article.append(
        visual,
        content
      );

      fragment.append(article);
    }
  );

  container.replaceChildren(fragment);
}
function createContactLink(
  label,
  value,
  href
) {
  if (!value) {
    return null;
  }

  const link =
    createElement(
      "a",
      "contact-link"
    );

  link.href = href;
  link.target =
    href.startsWith("http")
      ? "_blank"
      : "_self";

  if (link.target === "_blank") {
    link.rel = "noopener noreferrer";
  }

  link.append(
    createElement("span", "", label),
    createElement("strong", "", value)
  );

  return link;
}

function getWhatsAppUrl() {
  const rawNumber =
    (siteData.contact.whatsapp || "")
      .replace(/\D/g, "");

  if (!rawNumber) {
    return "";
  }

  const number =
    rawNumber.startsWith("55")
      ? rawNumber
      : `55${rawNumber}`;

  const message =
    encodeURIComponent(
      "Olá! Conheci a Souzas Dev pelo site e gostaria de conversar sobre um projeto."
    );

  return `https://wa.me/${number}?text=${message}`;
}

function renderContactLinks() {
  const container =
    $("#contact-links");

  const links = [
    createContactLink(
      "E-mail",
      siteData.contact.email,
      `mailto:${siteData.contact.email}`
    ),

    createContactLink(
      "WhatsApp",
      siteData.contact.whatsapp,
      getWhatsAppUrl()
    ),

    createContactLink(
      "Instagram",
      siteData.contact.instagramHandle,
      siteData.contact.instagram
    )
  ].filter(Boolean);

  const location =
    siteData.contact.location
      ? createElement(
          "p",
          "contact-location",
          `Atendimento em ${siteData.contact.location} e também de forma remota.`
        )
      : null;

  container.replaceChildren(
    ...links,
    ...(location ? [location] : [])
  );
}

function renderSocials() {
  const container =
    $("#hero-socials");

  const socials = [
    {
      label: "WhatsApp",
      url: getWhatsAppUrl()
    },
    {
      label: "Instagram",
      url: siteData.contact.instagram
    },
    {
      label: "E-mail",
      url: siteData.contact.email
        ? `mailto:${siteData.contact.email}`
        : ""
    }
  ].filter((item) => item.url);

  socials.forEach((social) => {
    const link =
      createElement(
        "a",
        "",
        social.label
      );

    link.href = social.url;

    if (social.url.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }

    container.append(link);
  });
}

function configureWhatsApp() {
  const whatsappUrl =
    getWhatsAppUrl();

  if (!whatsappUrl) {
    whatsappButton.hidden = true;
    return;
  }

  whatsappButton.href = whatsappUrl;
  whatsappButton.title =
    "Conversar com a Souzas Dev pelo WhatsApp";

  whatsappButton.hidden = false;
  updateWhatsAppVisibility();
}

function updateWhatsAppVisibility() {
  if (
    !heroSection ||
    !whatsappButton ||
    whatsappButton.hidden
  ) {
    return;
  }

  const heroIsVisible =
    heroSection
      .getBoundingClientRect()
      .bottom > 0;

  const shouldHide =
    whatsappMobileQuery.matches &&
    heroIsVisible;

  whatsappButton.classList.toggle(
    "whatsapp-button--mobile-hidden",
    shouldHide
  );

  whatsappButton.setAttribute(
    "aria-hidden",
    String(shouldHide)
  );

  if (shouldHide) {
    whatsappButton.setAttribute(
      "tabindex",
      "-1"
    );
  }
  else {
    whatsappButton.removeAttribute(
      "tabindex"
    );
  }
}

function toggleMenu() {
  const isOpen =
    navigation.classList.toggle("active");

  menuButton.classList.toggle(
    "active",
    isOpen
  );

  document.body.classList.toggle(
    "menu-open",
    isOpen
  );

  menuButton.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuButton.setAttribute(
    "aria-label",
    isOpen
      ? "Fechar menu"
      : "Abrir menu"
  );
}

function closeMenu(
  {
    restoreFocus = false
  } = {}
) {
  navigation.classList.remove("active");
  menuButton.classList.remove("active");

  document.body.classList.remove(
    "menu-open"
  );

  menuButton.setAttribute(
    "aria-expanded",
    "false"
  );

  menuButton.setAttribute(
    "aria-label",
    "Abrir menu"
  );

  if (restoreFocus) {
    menuButton.focus();
  }
}

function handleMenuKeydown(event) {
  const isOpen =
    navigation.classList.contains("active");

  if (
    event.key !== "Escape" ||
    !isOpen
  ) {
    return;
  }

  closeMenu({
    restoreFocus: true
  });
}

function handleOutsideMenuPointer(event) {
  const isOpen =
    navigation.classList.contains("active");

  if (!isOpen) {
    return;
  }

  const clickedNavigation =
    navigation.contains(event.target);

  const clickedMenuButton =
    menuButton.contains(event.target);

  if (
    clickedNavigation ||
    clickedMenuButton
  ) {
    return;
  }

  closeMenu();
}

function handleMenuResize() {
  const isDesktop =
    window.innerWidth > 820;

  const isOpen =
    navigation.classList.contains("active");

  if (
    isDesktop &&
    isOpen
  ) {
    closeMenu();
  }
}

function updateHeader() {
  const scrollTop =
    window.scrollY;

  header.classList.toggle(
    "scrolled",
    scrollTop > 20
  );

  const documentHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progress =
    documentHeight > 0
      ? (scrollTop / documentHeight) * 100
      : 0;

  scrollProgress.style.width =
    `${progress}%`;
}

function initializeSectionNavigation() {
  const sections =
    $$("main section[id]");

  const observer =
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          navigationLinks.forEach(
            (link) => {
              const target =
                link.getAttribute("href");

              link.classList.toggle(
                "active",
                target ===
                  `#${entry.target.id}`
              );
            }
          );
        });
      },
      {
        rootMargin:
          "-35% 0px -55% 0px",
        threshold: 0
      }
    );

  sections.forEach((section) => {
    observer.observe(section);
  });
}

function initializeRevealAnimations() {
  const elements =
    $$(".reveal");

  const observer =
    new IntersectionObserver(
      (entries, revealObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add(
            "visible"
          );

          revealObserver.unobserve(
            entry.target
          );
        });
      },
      {
        threshold: 0.12
      }
    );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

function showFormFeedback(
  message = "",
  type = ""
) {
  formFeedback.textContent = message;
  formFeedback.className =
    "form-feedback";

  if (type) {
    formFeedback.classList.add(type);
  }
}

function setFormLoading(isLoading) {
  contactSubmit.disabled = isLoading;

  contactSubmit.innerHTML = isLoading
    ? "Enviando..."
    : 'Enviar para análise <span aria-hidden="true">↗</span>';
}

async function apiRequest(
  path,
  options = {}
) {
  const response = await fetch(
    `${siteData.apiUrl}${path}`,
    options
  );

  const data = await response
    .json()
    .catch(() => ({
      message:
        "O servidor retornou uma resposta inválida."
    }));

  if (!response.ok) {
    const error = new Error(
      data.message ||
      "Não foi possível concluir a operação."
    );

    error.data = data;
    throw error;
  }

  return data;
}

async function checkApiStatus() {
  try {
    await apiRequest("/api/status");

    serviceStatus.className =
      "service-status online";

    serviceMessage.textContent =
      "Formulário disponível";
  } catch {
    serviceStatus.className =
      "service-status offline";

    serviceMessage.textContent =
      "Serviço temporariamente indisponível";
  }
}

function setFieldError(
  input,
  message = ""
) {
  const hasError =
    Boolean(message);

  input.classList.toggle(
    "is-invalid",
    hasError
  );

  input.setAttribute(
    "aria-invalid",
    String(hasError)
  );

  const errorElement =
    fieldErrors[input.name];

  if (errorElement) {
    errorElement.textContent = message;
  }
}

function clearFieldError(input) {
  setFieldError(input);
}

function updateMessageCounter() {
  const currentLength =
    messageInput.value.length;

  messageCounter.textContent =
    `${currentLength}/2000`;

  messageCounter.classList.toggle(
    "near-limit",
    currentLength >= 1800
  );
}

function formatWhatsAppInput(value) {
  const digits =
    value.replace(/\D/g, "").slice(0, 11);

  if (!digits) {
    return "";
  }

  if (digits.length <= 2) {
    return `(${digits}`;
  }

  const areaCode =
    digits.slice(0, 2);

  const localNumber =
    digits.slice(2);

  const firstPartLength =
    localNumber.length > 8
      ? 5
      : 4;

  const firstPart =
    localNumber.slice(0, firstPartLength);

  const secondPart =
    localNumber.slice(firstPartLength);

  return (
    `(${areaCode}) ${firstPart}` +
    (secondPart ? `-${secondPart}` : "")
  );
}

async function handleContactSubmit(event) {
  event.preventDefault();

  showFormFeedback("");

  const inputs = [
    nameInput,
    emailInput,
    whatsappInput,
    projectTypeInput,
    deadlineInput,
    messageInput
  ];

  inputs.forEach(clearFieldError);

  const formData =
    new FormData(contactForm);

  const contact = {
    name:
      formData.get("name")?.trim() || "",

    email:
      formData.get("email")?.trim() || "",

    whatsapp:
      formData.get("whatsapp")?.trim() || "",

    projectType:
      formData.get("projectType")?.trim() || "",

    deadline:
      formData.get("deadline")?.trim() || "",

    message:
      formData.get("message")?.trim() || ""
  };

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const whatsappDigits =
    contact.whatsapp.replace(/\D/g, "");

  if (
    contact.name.length < 2 ||
    contact.name.length > 80
  ) {
    setFieldError(
      nameInput,
      "Informe um nome com pelo menos 2 caracteres."
    );
  }

  if (
    contact.email.length > 254 ||
    !emailPattern.test(contact.email)
  ) {
    setFieldError(
      emailInput,
      "Informe um e-mail válido para contato."
    );
  }

  if (
    contact.whatsapp &&
    ![10, 11].includes(
      whatsappDigits.length
    )
  ) {
    setFieldError(
      whatsappInput,
      "Informe um WhatsApp válido com DDD."
    );
  }

  if (
    !validProjectTypes.has(
      contact.projectType
    )
  ) {
    setFieldError(
      projectTypeInput,
      "Selecione o tipo de projeto."
    );
  }

  if (
    contact.deadline &&
    !validDeadlines.has(contact.deadline)
  ) {
    setFieldError(
      deadlineInput,
      "Selecione um prazo válido."
    );
  }

  if (
    contact.message.length < 10 ||
    contact.message.length > 2000
  ) {
    setFieldError(
      messageInput,
      "Descreva sua necessidade com pelo menos 10 caracteres."
    );
  }

  const firstInvalidInput =
    inputs.find(
      (input) =>
        input.getAttribute(
          "aria-invalid"
        ) === "true"
    );

  if (firstInvalidInput) {
    showFormFeedback(
      "Revise os campos destacados antes de enviar.",
      "error"
    );

    firstInvalidInput.focus();
    return;
  }

  setFormLoading(true);

  try {
    const data = await apiRequest(
      "/api/contact",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify(contact)
      }
    );

    showFormFeedback(
      data.message ||
        "Mensagem enviada com sucesso.",
      "success"
    );

    contactForm.reset();
    updateMessageCounter();
    inputs.forEach(clearFieldError);
  } catch (error) {
    const inputByName = {
      name: nameInput,
      email: emailInput,
      whatsapp: whatsappInput,
      projectType: projectTypeInput,
      deadline: deadlineInput,
      message: messageInput
    };

    if (error.data?.errors) {
      Object.entries(
        error.data.errors
      ).forEach(([field, message]) => {
        const input =
          inputByName[field];

        if (input) {
          setFieldError(
            input,
            message
          );
        }
      });
    }

    const validationMessages =
      error.data?.errors
        ? Object.values(
            error.data.errors
          ).join(" ")
        : error.message;

    showFormFeedback(
      validationMessages ||
        "Não foi possível enviar a mensagem. Tente novamente mais tarde.",
      "error"
    );
  } finally {
    setFormLoading(false);
  }
}

function initialize() {
  populateMainContent();
  renderAbout();
  renderStats();
  renderServices();
  renderTechnologies();
  renderProjects();
  renderContactLinks();
  renderSocials();
  configureWhatsApp();

  window.addEventListener(
    "scroll",
    updateWhatsAppVisibility,
    {
      passive: true
    }
  );

  window.addEventListener(
    "resize",
    updateWhatsAppVisibility,
    {
      passive: true
    }
  );

  menuButton.addEventListener(
    "click",
    toggleMenu
  );

  navigationLinks.forEach((link) => {
    link.addEventListener(
      "click",
      closeMenu
    );
  });


  document.addEventListener(
    "keydown",
    handleMenuKeydown
  );

  document.addEventListener(
    "pointerdown",
    handleOutsideMenuPointer
  );

  window.addEventListener(
    "resize",
    handleMenuResize,
    {
      passive: true
    }
  );
  contactForm.addEventListener(
    "submit",
    handleContactSubmit
  );

  [
    nameInput,
    emailInput,
    whatsappInput,
    projectTypeInput,
    deadlineInput,
    messageInput
  ].forEach((input) => {
    const eventName =
      input.tagName === "SELECT"
        ? "change"
        : "input";

    input.addEventListener(
      eventName,
      () => {
        if (input === whatsappInput) {
          input.value =
            formatWhatsAppInput(
              input.value
            );
        }

        clearFieldError(input);

        if (input === messageInput) {
          updateMessageCounter();
        }
      }
    );
  });

  updateMessageCounter();

  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive: true
    }
  );

  updateHeader();
  initializeSectionNavigation();
  initializeRevealAnimations();
  checkApiStatus();
}

initialize();
