import {
  PILLARS,
  QUESTIONS
} from "./questions.js";

import {
  calculateDiagnostic
} from "./diagnostic-engine.js";

import {
  buildRecommendationReport
} from "./recommendations.js";

const WHATSAPP_BASE_URL =
  "https://wa.me/5567981193789";

const state = {
  currentQuestionIndex: -1,
  answers: {},
  business: null
};

function getElement(id) {
  const element =
    document.getElementById(id);

  if (!element) {
    throw new Error(
      `Elemento obrigatório não encontrado: #${id}`
    );
  }

  return element;
}

const intro =
  getElement("diagnostic-intro");

const startButton =
  getElement("diagnostic-start");

const app =
  getElement("diagnostic-app");

const form =
  getElement("diagnostic-form");

const identificationScreen =
  getElement("diagnostic-identification");

const identificationTitle =
  getElement("identification-title");

const questionScreen =
  getElement("diagnostic-question-screen");

const questionPillar =
  getElement("question-pillar");

const questionTitle =
  getElement("question-title");

const questionHelp =
  getElement("question-help");

const questionOptions =
  getElement("question-options");

const progressLabel =
  getElement("diagnostic-progress-label");

const stepTitle =
  getElement("diagnostic-step-title");

const progressCount =
  getElement("diagnostic-progress-count");

const progressBar =
  getElement("diagnostic-progress-bar");

const progressValue =
  getElement("diagnostic-progress-value");

const backButton =
  getElement("diagnostic-back");

const nextButton =
  getElement("diagnostic-next");

const businessNameInput =
  getElement("business-name");

const businessSegmentInput =
  getElement("business-segment");

const businessLocationInput =
  getElement("business-location");

const businessNameError =
  getElement("business-name-error");

const businessSegmentError =
  getElement("business-segment-error");

const resultSection =
  getElement("diagnostic-result");

const resultBusinessName =
  getElement("result-business-name");

const resultTitle =
  getElement("result-title");

const resultScore =
  getElement("result-score");

const resultClassification =
  getElement("result-classification");

const resultSummary =
  getElement("result-summary");

const resultPillars =
  getElement("result-pillars");

const resultPositives =
  getElement("result-positives");

const resultOpportunities =
  getElement("result-opportunities");

const resultPriorities =
  getElement("result-priorities");

const resultRecommendations =
  getElement("result-recommendations");

const contactLink =
  getElement("diagnostic-contact-link");

const restartButton =
  getElement("diagnostic-restart");

const prefersReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

function scrollToSection(
  section
) {
  section.scrollIntoView({
    behavior:
      prefersReducedMotion.matches
        ? "auto"
        : "smooth",
    block: "start"
  });
}

function focusHeading(
  heading
) {
  heading.setAttribute(
    "tabindex",
    "-1"
  );

  heading.focus({
    preventScroll: true
  });

  heading.addEventListener(
    "blur",
    () => {
      heading.removeAttribute(
        "tabindex"
      );
    },
    {
      once: true
    }
  );
}

function setProgress(
  percentage
) {
  const safePercentage =
    Math.min(
      Math.max(
        percentage,
        0
      ),
      100
    );

  progressValue.style.width =
    `${safePercentage}%`;

  progressBar.setAttribute(
    "aria-valuenow",
    String(
      Math.round(
        safePercentage
      )
    )
  );
}

function setNextButtonLabel(
  label
) {
  nextButton.replaceChildren();

  nextButton.append(
    document.createTextNode(
      label
    )
  );

  const arrow =
    document.createElement(
      "span"
    );

  arrow.setAttribute(
    "aria-hidden",
    "true"
  );

  arrow.textContent = "→";

  nextButton.append(
    document.createTextNode(" "),
    arrow
  );
}

function clearIdentificationErrors() {
  businessNameInput.removeAttribute(
    "aria-invalid"
  );

  businessSegmentInput.removeAttribute(
    "aria-invalid"
  );

  businessNameError.textContent = "";
  businessSegmentError.textContent = "";
}

function validateIdentification() {
  clearIdentificationErrors();

  const name =
    businessNameInput.value.trim();

  const segment =
    businessSegmentInput.value.trim();

  const location =
    businessLocationInput.value.trim();

  let firstInvalid = null;

  if (!name) {
    businessNameInput.setAttribute(
      "aria-invalid",
      "true"
    );

    businessNameError.textContent =
      "Informe o nome da empresa ou profissional.";

    firstInvalid =
      businessNameInput;
  }

  if (!segment) {
    businessSegmentInput.setAttribute(
      "aria-invalid",
      "true"
    );

    businessSegmentError.textContent =
      "Informe o segmento do negócio.";

    if (!firstInvalid) {
      firstInvalid =
        businessSegmentInput;
    }
  }

  if (firstInvalid) {
    firstInvalid.focus();
    return false;
  }

  businessNameInput.value = name;
  businessSegmentInput.value = segment;
  businessLocationInput.value = location;

  state.business = {
    name,
    segment,
    location
  };

  return true;
}

function renderIdentification() {
  state.currentQuestionIndex = -1;

  identificationScreen.hidden = false;
  questionScreen.hidden = true;

  backButton.hidden = true;

  progressLabel.textContent =
    "Preparando diagnóstico";

  stepTitle.textContent =
    "Sobre o seu negócio";

  progressCount.textContent =
    "Início";

  setProgress(0);

  setNextButtonLabel(
    "Continuar"
  );

  scrollToSection(app);
  focusHeading(
    identificationTitle
  );
}

function getCurrentQuestion() {
  return QUESTIONS[
    state.currentQuestionIndex
  ];
}

function clearQuestionError() {
  const error =
    document.getElementById(
      "question-error"
    );

  if (error) {
    error.remove();
  }

  questionOptions.removeAttribute(
    "aria-invalid"
  );
}

function showQuestionError() {
  clearQuestionError();

  questionOptions.setAttribute(
    "aria-invalid",
    "true"
  );

  const error =
    document.createElement(
      "p"
    );

  error.id =
    "question-error";

  error.className =
    "diagnostic-field__error";

  error.setAttribute(
    "aria-live",
    "polite"
  );

  error.textContent =
    "Selecione uma resposta para continuar.";

  questionOptions.insertAdjacentElement(
    "afterend",
    error
  );

  const firstOption =
    questionOptions.querySelector(
      'input[type="radio"]'
    );

  firstOption?.focus();
}

function createQuestionOption(
  question,
  option
) {
  const wrapper =
    document.createElement(
      "label"
    );

  wrapper.className =
    "diagnostic-option";

  const input =
    document.createElement(
      "input"
    );

  input.type = "radio";
  input.name =
    "diagnostic-answer";
  input.value =
    option.value;

  input.checked =
    state.answers[
      question.id
    ] === option.value;

  input.addEventListener(
    "change",
    () => {
      state.answers[
        question.id
      ] = option.value;

      clearQuestionError();
    }
  );

  const content =
    document.createElement(
      "span"
    );

  content.className =
    "diagnostic-option__content";

  content.textContent =
    option.label;

  wrapper.append(
    input,
    content
  );

  return wrapper;
}

function renderQuestion() {
  const question =
    getCurrentQuestion();

  if (!question) {
    throw new Error(
      "Não foi possível localizar a pergunta atual."
    );
  }

  const pillarIndex =
    PILLARS.findIndex(
      (pillar) =>
        pillar.id ===
        question.pillarId
    );

  const pillar =
    PILLARS[
      pillarIndex
    ];

  identificationScreen.hidden = true;
  questionScreen.hidden = false;

  backButton.hidden = false;

  progressLabel.textContent =
    `Pilar ${pillarIndex + 1} de ${PILLARS.length}`;

  stepTitle.textContent =
    pillar.label;

  progressCount.textContent =
    `Pergunta ${state.currentQuestionIndex + 1} de ${QUESTIONS.length}`;

  const percentage =
    (
      (
        state.currentQuestionIndex +
        1
      ) /
      QUESTIONS.length
    ) *
    100;

  setProgress(
    percentage
  );

  questionPillar.textContent =
    pillar.label;

  questionTitle.textContent =
    question.title;

  questionHelp.textContent =
    question.help || "";

  const legend =
    document.createElement(
      "legend"
    );

  legend.className =
    "sr-only";

  legend.textContent =
    "Escolha uma resposta";

  const optionElements =
    question.options.map(
      (option) =>
        createQuestionOption(
          question,
          option
        )
    );

  questionOptions.replaceChildren(
    legend,
    ...optionElements
  );

  clearQuestionError();

  setNextButtonLabel(
    state.currentQuestionIndex ===
      QUESTIONS.length - 1
      ? "Ver resultado"
      : "Continuar"
  );

  scrollToSection(app);

  focusHeading(
    questionTitle
  );
}

function saveCurrentAnswer() {
  const question =
    getCurrentQuestion();

  const selected =
    questionOptions.querySelector(
      'input[name="diagnostic-answer"]:checked'
    );

  if (!selected) {
    showQuestionError();
    return false;
  }

  state.answers[
    question.id
  ] = selected.value;

  clearQuestionError();

  return true;
}

function createPillarElement(
  pillar
) {
  const article =
    document.createElement(
      "article"
    );

  article.className =
    "diagnostic-pillar";

  const header =
    document.createElement(
      "div"
    );

  header.className =
    "diagnostic-pillar__header";

  const title =
    document.createElement(
      "strong"
    );

  title.textContent =
    pillar.label;

  const score =
    document.createElement(
      "span"
    );

  score.className =
    "diagnostic-pillar__score";

  score.textContent =
    `${pillar.score}/${pillar.maxScore}`;

  header.append(
    title,
    score
  );

  const track =
    document.createElement(
      "div"
    );

  track.className =
    "diagnostic-pillar__track";

  track.setAttribute(
    "role",
    "progressbar"
  );

  track.setAttribute(
    "aria-label",
    `${pillar.label}: ${pillar.score} de ${pillar.maxScore} pontos`
  );

  track.setAttribute(
    "aria-valuemin",
    "0"
  );

  track.setAttribute(
    "aria-valuemax",
    String(
      pillar.maxScore
    )
  );

  track.setAttribute(
    "aria-valuenow",
    String(
      pillar.score
    )
  );

  const value =
    document.createElement(
      "span"
    );

  value.className =
    "diagnostic-pillar__value";

  value.style.width =
    `${
      (
        pillar.score /
        pillar.maxScore
      ) *
      100
    }%`;

  track.append(
    value
  );

  const status =
    document.createElement(
      "p"
    );

  status.className =
    "diagnostic-pillar__status";

  status.textContent =
    pillar.status;

  article.append(
    header,
    track,
    status
  );

  return article;
}

function createResultCard({
  label,
  title,
  text,
  modifier = ""
}) {
  const article =
    document.createElement(
      "article"
    );

  article.className =
    "diagnostic-result-card";

  if (modifier) {
    article.classList.add(
      `diagnostic-result-card--${modifier}`
    );
  }

  const labelElement =
    document.createElement(
      "p"
    );

  labelElement.className =
    "diagnostic-result-card__label";

  labelElement.textContent =
    label;

  const titleElement =
    document.createElement(
      "h4"
    );

  titleElement.textContent =
    title;

  const textElement =
    document.createElement(
      "p"
    );

  textElement.textContent =
    text;

  article.append(
    labelElement,
    titleElement,
    textElement
  );

  return article;
}

function renderPositives(
  positives
) {
  resultPositives.replaceChildren();

  if (positives.length === 0) {
    resultPositives.append(
      createResultCard({
        label:
          "Leitura do diagnóstico",
        title:
          "Nenhum ponto forte foi destacado entre as respostas",
        text:
          "Com base apenas no que foi informado, o diagnóstico identificou principalmente pontos que merecem atenção. Isso não significa que o negócio não possua outras qualidades fora do que foi perguntado."
      })
    );

    return;
  }

  for (const item of positives) {
    resultPositives.append(
      createResultCard({
        label:
          "Ponto positivo",
        title:
          item.title,
        text:
          item.text,
        modifier:
          "positive"
      })
    );
  }
}

function renderOpportunities(
  opportunities
) {
  resultOpportunities.replaceChildren();

  if (
    opportunities.length ===
    0
  ) {
    resultOpportunities.append(
      createResultCard({
        label:
          "Leitura do diagnóstico",
        title:
          "Nenhuma oportunidade principal foi sinalizada",
        text:
          "As respostas não receberam pontuação 0 ou 2 nos itens avaliados. Ainda podem existir melhorias fora do escopo deste diagnóstico."
      })
    );

    return;
  }

  for (
    const item
    of opportunities
  ) {
    resultOpportunities.append(
      createResultCard({
        label:
          item.score === 0
            ? "Requer atenção"
            : "Pode evoluir",
        title:
          item.title,
        text:
          item.text,
        modifier:
          "opportunity"
      })
    );
  }
}

function renderPriorities(
  priorities
) {
  resultPriorities.replaceChildren();

  if (priorities.length === 0) {
    const item =
      document.createElement(
        "li"
      );

    item.textContent =
      "As respostas não geraram prioridades principais de correção entre os itens avaliados. Preserve o que já funciona e revise esses pontos periodicamente.";

    resultPriorities.append(
      item
    );

    return;
  }

  for (
    const priority
    of priorities
  ) {
    const item =
      document.createElement(
        "li"
      );

    const title =
      document.createElement(
        "strong"
      );

    title.textContent =
      priority.title;

    item.append(
      title,
      document.createTextNode(
        ` — ${priority.text}`
      )
    );

    resultPriorities.append(
      item
    );
  }
}

function renderRecommendations(
  recommendations
) {
  resultRecommendations.replaceChildren();

  if (
    recommendations.length ===
    0
  ) {
    resultRecommendations.append(
      createResultCard({
        label:
          "Manutenção",
        title:
          "Continue revisando a estrutura digital",
        text:
          "As respostas indicaram boa estrutura nos itens avaliados. Mantenha informações atualizadas e revise periodicamente se os canais continuam adequados ao negócio."
      })
    );

    return;
  }

  for (
    const item
    of recommendations
  ) {
    resultRecommendations.append(
      createResultCard({
        label:
          "Recomendação",
        title:
          item.title,
        text:
          item.text
      })
    );
  }
}

function getResultSummary(
  classification
) {
  const summaries = {
    "Crítico":
      "As respostas indicam que vários pontos básicos da presença digital ainda merecem atenção. O caminho mais útil é evoluir por etapas, começando pelas prioridades abaixo.",

    "Em desenvolvimento":
      "As respostas mostram uma presença digital em formação. Já existem elementos aproveitáveis, mas alguns pontos ainda precisam de organização e consistência.",

    "Boa base":
      "As respostas indicam uma base digital funcional, com oportunidades específicas para melhorar clareza, confiança, conversão ou organização.",

    "Avançado":
      "As respostas indicam que boa parte dos itens avaliados está bem estruturada. Ainda assim, o diagnóstico é orientativo e não significa que não existam melhorias possíveis."
  };

  return (
    summaries[
      classification
    ] ||
    "O resultado foi calculado exclusivamente a partir das respostas informadas."
  );
}

function buildWhatsappUrl(
  businessName,
  score
) {
  const message =
    `Olá, Souzas Dev! Fiz o Diagnóstico Digital da minha empresa ${businessName} e obtive ${score}/100. Gostaria de conversar sobre as melhorias recomendadas.`;

  return (
    `${WHATSAPP_BASE_URL}?text=${
      encodeURIComponent(
        message
      )
    }`
  );
}

function renderResult(
  diagnostic,
  report
) {
  resultBusinessName.textContent =
    state.business.name;

  resultScore.textContent =
    String(
      diagnostic.score
    );

  resultClassification.textContent =
    diagnostic.classification;

  resultSummary.textContent =
    getResultSummary(
      diagnostic.classification
    );

  resultPillars.replaceChildren(
    ...diagnostic.pillars.map(
      createPillarElement
    )
  );

  renderPositives(
    report.positives
  );

  renderOpportunities(
    report.opportunities
  );

  renderPriorities(
    report.priorities
  );

  renderRecommendations(
    report.recommendations
  );

  contactLink.href =
    buildWhatsappUrl(
      state.business.name,
      diagnostic.score
    );
}

function finishDiagnostic() {
  const diagnostic =
    calculateDiagnostic(
      state.answers
    );

  const report =
    buildRecommendationReport(
      diagnostic
    );

  setProgress(100);

  renderResult(
    diagnostic,
    report
  );

  app.hidden = true;
  intro.hidden = true;
  resultSection.hidden = false;

  scrollToSection(
    resultSection
  );

  focusHeading(
    resultTitle
  );
}

function startDiagnostic() {
  intro.hidden = true;
  resultSection.hidden = true;
  app.hidden = false;

  renderIdentification();
}

function handleNext() {
  if (
    state.currentQuestionIndex ===
    -1
  ) {
    if (
      !validateIdentification()
    ) {
      return;
    }

    state.currentQuestionIndex = 0;

    renderQuestion();

    return;
  }

  if (!saveCurrentAnswer()) {
    return;
  }

  if (
    state.currentQuestionIndex ===
    QUESTIONS.length - 1
  ) {
    finishDiagnostic();
    return;
  }

  state.currentQuestionIndex += 1;

  renderQuestion();
}

function handleBack() {
  if (
    state.currentQuestionIndex <=
    0
  ) {
    renderIdentification();
    return;
  }

  state.currentQuestionIndex -= 1;

  renderQuestion();
}

function restartDiagnostic() {
  state.currentQuestionIndex = -1;
  state.answers = {};
  state.business = null;

  form.reset();

  clearIdentificationErrors();
  clearQuestionError();

  setProgress(0);

  contactLink.href =
    WHATSAPP_BASE_URL;

  app.hidden = true;
  resultSection.hidden = true;
  intro.hidden = false;

  scrollToSection(
    intro
  );

  focusHeading(
    getElement(
      "diagnostic-title"
    )
  );
}

form.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
  }
);

startButton.addEventListener(
  "click",
  startDiagnostic
);

nextButton.addEventListener(
  "click",
  handleNext
);

backButton.addEventListener(
  "click",
  handleBack
);

restartButton.addEventListener(
  "click",
  restartDiagnostic
);