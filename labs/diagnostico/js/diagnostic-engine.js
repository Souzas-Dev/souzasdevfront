import {
  DIAGNOSTIC_CONFIG,
  PILLARS,
  QUESTIONS
} from "./questions.js";

const CLASSIFICATIONS = Object.freeze([
  {
    min: 0,
    max: 39,
    label: "Crítico"
  },
  {
    min: 40,
    max: 59,
    label: "Em desenvolvimento"
  },
  {
    min: 60,
    max: 79,
    label: "Boa base"
  },
  {
    min: 80,
    max: 100,
    label: "Avançado"
  }
]);

const PILLAR_STATUSES = Object.freeze([
  {
    min: 0,
    max: 7,
    label: "Precisa de atenção"
  },
  {
    min: 8,
    max: 13,
    label: "Em evolução"
  },
  {
    min: 14,
    max: 17,
    label: "Boa estrutura"
  },
  {
    min: 18,
    max: 20,
    label: "Ponto forte"
  }
]);

function assertIntegerInRange(
  value,
  minimum,
  maximum,
  fieldName
) {
  if (
    !Number.isInteger(value) ||
    value < minimum ||
    value > maximum
  ) {
    throw new Error(
      `${fieldName} deve ser um número inteiro entre ${minimum} e ${maximum}.`
    );
  }
}

export function getClassification(score) {
  assertIntegerInRange(
    score,
    0,
    DIAGNOSTIC_CONFIG.maxTotalScore,
    "A nota geral"
  );

  const classification =
    CLASSIFICATIONS.find(
      (item) =>
        score >= item.min &&
        score <= item.max
    );

  if (!classification) {
    throw new Error(
      `Não foi possível classificar a nota ${score}.`
    );
  }

  return classification.label;
}

export function getPillarStatus(score) {
  assertIntegerInRange(
    score,
    0,
    DIAGNOSTIC_CONFIG.maxScorePerPillar,
    "A nota do pilar"
  );

  const status =
    PILLAR_STATUSES.find(
      (item) =>
        score >= item.min &&
        score <= item.max
    );

  if (!status) {
    throw new Error(
      `Não foi possível determinar o estado do pilar com nota ${score}.`
    );
  }

  return status.label;
}

export function getQuestionOption(
  questionId,
  optionValue
) {
  const question =
    QUESTIONS.find(
      (item) =>
        item.id === questionId
    );

  if (!question) {
    throw new Error(
      `Pergunta inexistente: "${questionId}".`
    );
  }

  const option =
    question.options.find(
      (item) =>
        item.value === optionValue
    );

  if (!option) {
    throw new Error(
      `Resposta "${optionValue}" inválida para a pergunta "${questionId}".`
    );
  }

  return {
    question,
    option
  };
}

export function calculateDiagnostic(
  answers
) {
  if (
    !answers ||
    typeof answers !== "object" ||
    Array.isArray(answers)
  ) {
    throw new Error(
      "As respostas devem ser fornecidas em um objeto."
    );
  }

  const expectedQuestionIds =
    new Set(
      QUESTIONS.map(
        (question) =>
          question.id
      )
    );

  const providedQuestionIds =
    Object.keys(answers);

  const unexpectedQuestionIds =
    providedQuestionIds.filter(
      (questionId) =>
        !expectedQuestionIds.has(questionId)
    );

  if (unexpectedQuestionIds.length > 0) {
    throw new Error(
      `Foram recebidas respostas para perguntas inexistentes: ${unexpectedQuestionIds.join(", ")}.`
    );
  }

  const missingQuestionIds =
    QUESTIONS
      .filter(
        (question) =>
          !Object.prototype.hasOwnProperty.call(
            answers,
            question.id
          )
      )
      .map(
        (question) =>
          question.id
      );

  if (missingQuestionIds.length > 0) {
    throw new Error(
      `O diagnóstico está incompleto. Faltam respostas para: ${missingQuestionIds.join(", ")}.`
    );
  }

  const pillarScores =
    Object.fromEntries(
      PILLARS.map(
        (pillar) => [
          pillar.id,
          0
        ]
      )
    );

  const breakdown =
    QUESTIONS.map(
      (question) => {
        const {
          option
        } =
          getQuestionOption(
            question.id,
            answers[question.id]
          );

        pillarScores[question.pillarId] +=
          option.score;

        return {
          questionId: question.id,
          pillarId: question.pillarId,
          answerValue: option.value,
          answerLabel: option.label,
          score: option.score
        };
      }
    );

  const pillars =
    PILLARS.map(
      (pillar) => {
        const score =
          pillarScores[pillar.id];

        assertIntegerInRange(
          score,
          0,
          pillar.maxScore,
          `A nota do pilar "${pillar.label}"`
        );

        return {
          id: pillar.id,
          label: pillar.label,
          score,
          maxScore: pillar.maxScore,
          status:
            getPillarStatus(score)
        };
      }
    );

  const totalScore =
    pillars.reduce(
      (total, pillar) =>
        total + pillar.score,
      0
    );

  assertIntegerInRange(
    totalScore,
    0,
    DIAGNOSTIC_CONFIG.maxTotalScore,
    "A nota geral"
  );

  const summedBreakdown =
    breakdown.reduce(
      (total, item) =>
        total + item.score,
      0
    );

  if (summedBreakdown !== totalScore) {
    throw new Error(
      `Inconsistência de pontuação: respostas somam ${summedBreakdown}, mas os pilares somam ${totalScore}.`
    );
  }

  return {
    score: totalScore,
    maxScore:
      DIAGNOSTIC_CONFIG.maxTotalScore,
    classification:
      getClassification(totalScore),
    pillars,
    breakdown
  };
}

export function createUniformAnswers(
  optionValue
) {
  const answers = {};

  for (const question of QUESTIONS) {
    const optionExists =
      question.options.some(
        (option) =>
          option.value === optionValue
      );

    if (!optionExists) {
      throw new Error(
        `A opção "${optionValue}" não existe em todas as perguntas.`
      );
    }

    answers[question.id] =
      optionValue;
  }

  return answers;
}

export {
  CLASSIFICATIONS,
  PILLAR_STATUSES
};