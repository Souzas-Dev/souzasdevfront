import {
  QUESTIONS
} from "./questions.js";

const RECOMMENDATION_RULES = Object.freeze({
  "presence-site": {
    positiveTitle:
      "Presença própria já estabelecida",
    opportunityTitle:
      "Estrutura do site próprio",
    actions: {
      none:
        "Avalie criar uma presença própria simples que reúna seus principais serviços, informações do negócio e um caminho claro para contato.",
      partial:
        "Priorize atualizar o site existente, começando por informações essenciais, clareza da oferta e boa experiência no celular."
    }
  },

  "presence-google": {
    positiveTitle:
      "Presença no Google estruturada",
    opportunityTitle:
      "Perfil da Empresa no Google",
    actions: {
      none:
        "Considere criar e estruturar um Perfil da Empresa no Google, especialmente se o negócio atende clientes de uma cidade ou região.",
      partial:
        "Revise as informações do Perfil da Empresa no Google e mantenha dados como contato, horário, área atendida e demais informações relevantes atualizados."
    }
  },

  "presence-channels": {
    positiveTitle:
      "Canais digitais ativos",
    opportunityTitle:
      "Atualização dos canais digitais",
    actions: {
      none:
        "Escolha apenas os canais digitais que realmente fazem sentido para o negócio e mantenha as informações essenciais atualizadas.",
      partial:
        "Priorize consistência no principal canal digital antes de tentar manter muitas plataformas ao mesmo tempo."
    }
  },

  "presence-contact": {
    positiveTitle:
      "Contato fácil de localizar",
    opportunityTitle:
      "Visibilidade das informações de contato",
    actions: {
      none:
        "Deixe o principal canal de contato visível nos pontos mais importantes da presença digital do negócio.",
      partial:
        "Padronize telefone, WhatsApp, endereço ou outro contato relevante nos principais canais utilizados pelo negócio."
    }
  },

  "positioning-offer": {
    positiveTitle:
      "Oferta compreensível",
    opportunityTitle:
      "Clareza sobre o que o negócio oferece",
    actions: {
      none:
        "Simplifique a apresentação do negócio para que uma pessoa consiga entender rapidamente o que você oferece.",
      partial:
        "Revise títulos e textos principais para reduzir explicações desnecessárias e tornar a oferta mais direta."
    }
  },

  "positioning-audience": {
    positiveTitle:
      "Direção comercial definida",
    opportunityTitle:
      "Definição da oferta e do público",
    actions: {
      none:
        "Defina primeiro qual serviço ou produto deve receber mais destaque e para quem ele é mais relevante.",
      partial:
        "Refine a apresentação da oferta principal e deixe mais evidente para qual perfil de cliente ela foi pensada."
    }
  },

  "positioning-differentials": {
    positiveTitle:
      "Diferenciais apresentados",
    opportunityTitle:
      "Comunicação dos diferenciais",
    actions: {
      none:
        "Identifique diferenciais reais do negócio e transforme-os em mensagens simples e verificáveis para os clientes.",
      partial:
        "Traga os diferenciais que já existem para pontos mais visíveis da comunicação, usando exemplos concretos sempre que possível."
    }
  },

  "positioning-information": {
    positiveTitle:
      "Informações bem organizadas",
    opportunityTitle:
      "Organização das informações essenciais",
    actions: {
      none:
        "Reúna e organize as informações essenciais que um cliente precisa para entender o negócio e entrar em contato.",
      partial:
        "Revise os principais canais e elimine informações divergentes, desatualizadas ou difíceis de localizar."
    }
  },

  "conversion-cta": {
    positiveTitle:
      "Próximo passo bem indicado",
    opportunityTitle:
      "Chamadas para ação",
    actions: {
      none:
        "Inclua chamadas claras como pedir orçamento, falar no WhatsApp, agendar ou realizar a ação principal esperada do cliente.",
      partial:
        "Torne as chamadas para ação mais específicas e visíveis nos pontos em que uma pessoa normalmente decide avançar."
    }
  },

  "conversion-mobile-contact": {
    positiveTitle:
      "Contato facilitado no celular",
    opportunityTitle:
      "Facilidade de contato pelo celular",
    actions: {
      none:
        "Reduza as etapas necessárias para iniciar contato, priorizando o canal que o negócio realmente consegue atender bem.",
      partial:
        "Revise o caminho até o contato principal e elimine passos que não sejam necessários."
    }
  },

  "conversion-flow": {
    positiveTitle:
      "Fluxo comercial compreensível",
    opportunityTitle:
      "Organização do processo de conversão",
    actions: {
      none:
        "Defina um fluxo simples para orçamento, agendamento, pedido ou contratação, deixando claro o que acontece depois do primeiro contato.",
      partial:
        "Organize o processo atual em poucas etapas claras e padronize as informações necessárias para avançar."
    }
  },

  "conversion-next-step": {
    positiveTitle:
      "Próximo passo compreensível",
    opportunityTitle:
      "Orientação para o interessado",
    actions: {
      none:
        "Mostre de forma explícita o que uma pessoa interessada deve fazer depois de conhecer o serviço.",
      partial:
        "Revise os principais pontos da jornada para que o próximo passo não dependa de interpretação do visitante."
    }
  },

  "trust-reviews": {
    positiveTitle:
      "Avaliações públicas presentes",
    opportunityTitle:
      "Avaliações de clientes",
    actions: {
      none:
        "Considere criar uma rotina simples e ética para solicitar avaliações públicas de clientes reais após experiências concluídas.",
      partial:
        "Retome gradualmente a solicitação de avaliações reais para manter provas sociais mais atuais."
    }
  },

  "trust-social-proof": {
    positiveTitle:
      "Exemplos reais apresentados",
    opportunityTitle:
      "Depoimentos, trabalhos e cases",
    actions: {
      none:
        "Organize exemplos reais que possam demonstrar o trabalho do negócio, respeitando autorizações e o contexto de cada material.",
      partial:
        "Dê mais visibilidade aos trabalhos, depoimentos ou exemplos reais que já estão disponíveis."
    }
  },

  "trust-about": {
    positiveTitle:
      "Informações institucionais presentes",
    opportunityTitle:
      "Apresentação de quem está por trás do negócio",
    actions: {
      none:
        "Inclua uma apresentação simples de quem presta o serviço, da empresa ou da equipe responsável pelo atendimento.",
      partial:
        "Complete as informações institucionais para ajudar novos clientes a compreender melhor quem está por trás do negócio."
    }
  },

  "trust-evidence": {
    positiveTitle:
      "Evidências reais do trabalho",
    opportunityTitle:
      "Demonstração do trabalho realizado",
    actions: {
      none:
        "Comece a organizar evidências reais da atividade, como fotos, projetos, demonstrações ou outros exemplos adequados ao negócio.",
      partial:
        "Atualize e organize melhor as evidências que já existem para facilitar a compreensão do trabalho realizado."
    }
  },

  "automation-leads": {
    positiveTitle:
      "Contatos organizados",
    opportunityTitle:
      "Organização de possíveis clientes",
    actions: {
      none:
        "Comece com uma forma simples de registrar contatos, status e próximo passo. Uma planilha bem organizada já pode resolver a primeira necessidade.",
      partial:
        "Centralize os contatos que hoje ficam espalhados em conversas ou anotações e defina uma rotina mínima de acompanhamento."
    }
  },

  "automation-intake": {
    positiveTitle:
      "Atendimento inicial padronizado",
    opportunityTitle:
      "Padronização do primeiro atendimento",
    actions: {
      none:
        "Liste as perguntas e informações que se repetem em quase todo atendimento e crie um roteiro inicial simples.",
      partial:
        "Transforme mensagens e modelos informais em um pequeno padrão de atendimento para reduzir retrabalho."
    }
  },

  "automation-follow-up": {
    positiveTitle:
      "Acompanhamento de interessados",
    opportunityTitle:
      "Rotina de acompanhamento",
    actions: {
      none:
        "Crie uma rotina simples para revisar contatos que demonstraram interesse e ainda possuem um próximo passo pendente.",
      partial:
        "Defina quando e como os contatos devem ser retomados para que o acompanhamento não dependa apenas da memória."
    }
  },

  "automation-repetitive-tasks": {
    positiveTitle:
      "Tarefas repetitivas já simplificadas",
    opportunityTitle:
      "Simplificação de tarefas repetitivas",
    actions: {
      none:
        "Identifique primeiro as tarefas digitais que mais se repetem e simplifique uma de cada vez antes de pensar em automações maiores.",
      partial:
        "Observe quais atividades ainda consomem tempo mesmo com modelos ou atalhos e avalie pequenas melhorias antes de adicionar ferramentas."
    }
  }
});

function validateRecommendationRules() {
  const questionIds =
    new Set(
      QUESTIONS.map(
        (question) =>
          question.id
      )
    );

  const ruleIds =
    Object.keys(
      RECOMMENDATION_RULES
    );

  const missingRules =
    QUESTIONS
      .filter(
        (question) =>
          !RECOMMENDATION_RULES[
            question.id
          ]
      )
      .map(
        (question) =>
          question.id
      );

  if (missingRules.length > 0) {
    throw new Error(
      `Faltam regras de recomendação para: ${missingRules.join(", ")}.`
    );
  }

  const unexpectedRules =
    ruleIds.filter(
      (ruleId) =>
        !questionIds.has(ruleId)
    );

  if (unexpectedRules.length > 0) {
    throw new Error(
      `Existem regras para perguntas inexistentes: ${unexpectedRules.join(", ")}.`
    );
  }

  for (const question of QUESTIONS) {
    const rule =
      RECOMMENDATION_RULES[
        question.id
      ];

    if (
      !rule.positiveTitle ||
      !rule.opportunityTitle
    ) {
      throw new Error(
        `A regra "${question.id}" precisa possuir títulos para ponto positivo e oportunidade.`
      );
    }

    for (
      const optionValue
      of [
        "none",
        "partial"
      ]
    ) {
      const option =
        question.options.find(
          (item) =>
            item.value === optionValue
        );

      if (!option) {
        throw new Error(
          `A pergunta "${question.id}" não possui a opção "${optionValue}".`
        );
      }

      if (
        !rule.actions ||
        !rule.actions[
          optionValue
        ]
      ) {
        throw new Error(
          `A regra "${question.id}" não possui ação para "${optionValue}".`
        );
      }
    }
  }

  return {
    questionCount:
      QUESTIONS.length,
    ruleCount:
      ruleIds.length
  };
}

function assertDiagnosticResult(
  diagnostic
) {
  if (
    !diagnostic ||
    typeof diagnostic !== "object" ||
    !Array.isArray(
      diagnostic.breakdown
    ) ||
    !Array.isArray(
      diagnostic.pillars
    )
  ) {
    throw new Error(
      "Resultado de diagnóstico inválido."
    );
  }
}

function createPillarScoreMap(
  diagnostic
) {
  return Object.fromEntries(
    diagnostic.pillars.map(
      (pillar) => [
        pillar.id,
        pillar.score
      ]
    )
  );
}

function createQuestionIndexMap() {
  return Object.fromEntries(
    QUESTIONS.map(
      (
        question,
        index
      ) => [
        question.id,
        index
      ]
    )
  );
}

function sortOpportunityItems(
  items
) {
  return [...items]
    .sort(
      (a, b) => {
        if (
          a.score !==
          b.score
        ) {
          return (
            a.score -
            b.score
          );
        }

        if (
          a.pillarScore !==
          b.pillarScore
        ) {
          return (
            a.pillarScore -
            b.pillarScore
          );
        }

        return (
          a.questionIndex -
          b.questionIndex
        );
      }
    );
}

export function buildRecommendationReport(
  diagnostic
) {
  assertDiagnosticResult(
    diagnostic
  );

  const pillarScores =
    createPillarScoreMap(
      diagnostic
    );

  const questionIndexes =
    createQuestionIndexMap();

  const positives = [];
  const opportunityCandidates = [];

  for (
    const item
    of diagnostic.breakdown
  ) {
    const rule =
      RECOMMENDATION_RULES[
        item.questionId
      ];

    if (!rule) {
      throw new Error(
        `Não existe regra para a pergunta "${item.questionId}".`
      );
    }

    const confirmedAnswer =
      item.answerLabel;

    if (item.score >= 4) {
      positives.push({
        questionId:
          item.questionId,
        pillarId:
          item.pillarId,
        score:
          item.score,
        title:
          rule.positiveTitle,
        text:
          `Sua resposta: ${confirmedAnswer}`
      });

      continue;
    }

    if (item.score <= 2) {
      const action =
        rule.actions[
          item.answerValue
        ];

      if (!action) {
        throw new Error(
          `Não existe ação para "${item.questionId}" com resposta "${item.answerValue}".`
        );
      }

      opportunityCandidates.push({
        questionId:
          item.questionId,
        pillarId:
          item.pillarId,
        score:
          item.score,
        pillarScore:
          pillarScores[
            item.pillarId
          ],
        questionIndex:
          questionIndexes[
            item.questionId
          ],
        title:
          rule.opportunityTitle,
        confirmedAnswer,
        action
      });
    }
  }

  const sortedOpportunities =
    sortOpportunityItems(
      opportunityCandidates
    );

  const opportunities =
    sortedOpportunities
      .slice(0, 6)
      .map(
        (item) => ({
          questionId:
            item.questionId,
          pillarId:
            item.pillarId,
          score:
            item.score,
          title:
            item.title,
          text:
            `Sua resposta: ${item.confirmedAnswer}`
        })
      );

  const recommendations =
    sortedOpportunities
      .slice(0, 6)
      .map(
        (item) => ({
          questionId:
            item.questionId,
          pillarId:
            item.pillarId,
          score:
            item.score,
          title:
            item.title,
          text:
            item.action
        })
      );

  const priorities =
    sortedOpportunities
      .slice(0, 3)
      .map(
        (item) => ({
          questionId:
            item.questionId,
          pillarId:
            item.pillarId,
          score:
            item.score,
          title:
            item.title,
          text:
            item.action
        })
      );

  const sortedPositives =
    [...positives]
      .sort(
        (a, b) => {
          if (
            a.score !==
            b.score
          ) {
            return (
              b.score -
              a.score
            );
          }

          return (
            questionIndexes[
              a.questionId
            ] -
            questionIndexes[
              b.questionId
            ]
          );
        }
      );

  return {
    positives:
      sortedPositives.slice(
        0,
        5
      ),
    opportunities,
    priorities,
    recommendations,
    counts: {
      totalPositives:
        positives.length,
      totalOpportunities:
        opportunityCandidates.length,
      criticalOpportunities:
        opportunityCandidates.filter(
          (item) =>
            item.score === 0
        ).length,
      partialOpportunities:
        opportunityCandidates.filter(
          (item) =>
            item.score === 2
        ).length
    }
  };
}

export {
  RECOMMENDATION_RULES,
  validateRecommendationRules
};

validateRecommendationRules();