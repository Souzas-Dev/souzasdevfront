export const DIAGNOSTIC_CONFIG = Object.freeze({
  pillarCount: 5,
  questionsPerPillar: 4,
  maxScorePerQuestion: 5,
  maxScorePerPillar: 20,
  maxTotalScore: 100,
  scoreLevels: Object.freeze([
    0,
    2,
    4,
    5
  ])
});

export const PILLARS = Object.freeze([
  {
    id: "presence",
    label: "Presença Digital",
    maxScore: 20
  },
  {
    id: "positioning",
    label: "Posicionamento e Clareza",
    maxScore: 20
  },
  {
    id: "conversion",
    label: "Conversão",
    maxScore: 20
  },
  {
    id: "trust",
    label: "Confiança e Autoridade",
    maxScore: 20
  },
  {
    id: "automation",
    label: "Automação e Processos",
    maxScore: 20
  }
]);

export const QUESTIONS = Object.freeze([
  {
    id: "presence-site",
    pillarId: "presence",
    title: "Seu negócio possui um site próprio?",
    help:
      "Considere um site controlado pelo próprio negócio, além de redes sociais ou páginas em plataformas de terceiros.",
    options: [
      {
        value: "none",
        label: "Não possui site próprio.",
        score: 0
      },
      {
        value: "partial",
        label:
          "Possui, mas está incompleto ou desatualizado.",
        score: 2
      },
      {
        value: "good",
        label:
          "Possui e apresenta bem o negócio.",
        score: 4
      },
      {
        value: "structured",
        label:
          "Possui, está atualizado e funciona bem no celular.",
        score: 5
      }
    ]
  },
  {
    id: "presence-google",
    pillarId: "presence",
    title:
      "Seu negócio possui um Perfil da Empresa no Google atualizado?",
    help:
      "Considere informações como endereço ou área atendida, horário, telefone, site e outros dados apresentados no Google.",
    options: [
      {
        value: "none",
        label: "Não possui.",
        score: 0
      },
      {
        value: "partial",
        label:
          "Possui, mas está pouco atualizado.",
        score: 2
      },
      {
        value: "good",
        label:
          "Possui com as principais informações corretas.",
        score: 4
      },
      {
        value: "structured",
        label:
          "Está completo e é mantido atualizado.",
        score: 5
      }
    ]
  },
  {
    id: "presence-channels",
    pillarId: "presence",
    title:
      "Seus principais canais digitais são mantidos atualizados?",
    help:
      "Considere apenas os canais que seu negócio realmente utiliza para se apresentar ou atender clientes.",
    options: [
      {
        value: "none",
        label:
          "Não utiliza ou os canais estão abandonados.",
        score: 0
      },
      {
        value: "partial",
        label:
          "A atualização acontece de forma irregular.",
        score: 2
      },
      {
        value: "good",
        label:
          "O principal canal é mantido atualizado.",
        score: 4
      },
      {
        value: "structured",
        label:
          "Os canais relevantes estão atualizados e coerentes entre si.",
        score: 5
      }
    ]
  },
  {
    id: "presence-contact",
    pillarId: "presence",
    title:
      "As informações de contato são fáceis de encontrar online?",
    help:
      "Pense em telefone, WhatsApp, endereço, formulário ou outro canal principal usado pelo negócio.",
    options: [
      {
        value: "none",
        label:
          "São difíceis de encontrar.",
        score: 0
      },
      {
        value: "partial",
        label:
          "Aparecem apenas em alguns locais.",
        score: 2
      },
      {
        value: "good",
        label:
          "São fáceis de localizar.",
        score: 4
      },
      {
        value: "structured",
        label:
          "Estão claras e consistentes nos principais canais.",
        score: 5
      }
    ]
  },

  {
    id: "positioning-offer",
    pillarId: "positioning",
    title:
      "Ao encontrar seu negócio online, fica claro rapidamente o que você oferece?",
    help:
      "Considere se uma pessoa que ainda não conhece o negócio entenderia a atividade principal sem precisar procurar muito.",
    options: [
      {
        value: "none",
        label:
          "Não fica claro.",
        score: 0
      },
      {
        value: "partial",
        label:
          "É necessário procurar ou receber alguma explicação.",
        score: 2
      },
      {
        value: "good",
        label:
          "Geralmente fica claro.",
        score: 4
      },
      {
        value: "structured",
        label:
          "Fica claro imediatamente.",
        score: 5
      }
    ]
  },
  {
    id: "positioning-audience",
    pillarId: "positioning",
    title:
      "Seu principal serviço, produto ou público está bem definido?",
    help:
      "Pense no que o negócio prioriza e para quem essa oferta é mais relevante.",
    options: [
      {
        value: "none",
        label:
          "Ainda não estão bem definidos.",
        score: 0
      },
      {
        value: "partial",
        label:
          "Existe uma direção, mas ainda é pouco clara.",
        score: 2
      },
      {
        value: "good",
        label:
          "Estão definidos.",
        score: 4
      },
      {
        value: "structured",
        label:
          "Estão definidos e claramente apresentados.",
        score: 5
      }
    ]
  },
  {
    id: "positioning-differentials",
    pillarId: "positioning",
    title:
      "Os diferenciais reais do seu negócio são apresentados aos clientes?",
    help:
      "Considere características concretas que ajudam uma pessoa a entender por que escolher o seu negócio.",
    options: [
      {
        value: "none",
        label:
          "Não apresentamos diferenciais.",
        score: 0
      },
      {
        value: "partial",
        label:
          "Conhecemos alguns diferenciais, mas quase não os comunicamos.",
        score: 2
      },
      {
        value: "good",
        label:
          "Alguns diferenciais são apresentados.",
        score: 4
      },
      {
        value: "structured",
        label:
          "Os diferenciais relevantes são apresentados claramente.",
        score: 5
      }
    ]
  },
  {
    id: "positioning-information",
    pillarId: "positioning",
    title:
      "As informações essenciais do negócio estão organizadas e consistentes?",
    help:
      "Considere serviços, horários, localização ou área atendida, contato e outras informações importantes para o cliente.",
    options: [
      {
        value: "none",
        label:
          "As informações estão dispersas ou são difíceis de entender.",
        score: 0
      },
      {
        value: "partial",
        label:
          "Estão parcialmente organizadas.",
        score: 2
      },
      {
        value: "good",
        label:
          "A maioria das informações está organizada.",
        score: 4
      },
      {
        value: "structured",
        label:
          "Estão claras e consistentes nos principais canais.",
        score: 5
      }
    ]
  },

  {
    id: "conversion-cta",
    pillarId: "conversion",
    title:
      "Seus canais possuem uma chamada clara para o próximo passo?",
    help:
      "Exemplos: pedir orçamento, chamar no WhatsApp, agendar, fazer uma reserva ou enviar uma solicitação.",
    options: [
      {
        value: "none",
        label:
          "Não existe uma chamada clara.",
        score: 0
      },
      {
        value: "partial",
        label:
          "Existem algumas chamadas, mas são genéricas ou pouco visíveis.",
        score: 2
      },
      {
        value: "good",
        label:
          "Existe uma chamada clara nos principais pontos.",
        score: 4
      },
      {
        value: "structured",
        label:
          "As chamadas são claras, visíveis e adequadas ao contexto.",
        score: 5
      }
    ]
  },
  {
    id: "conversion-mobile-contact",
    pillarId: "conversion",
    title:
      "É fácil iniciar contato com seu negócio pelo celular?",
    help:
      "Considere quantos passos uma pessoa precisa dar até iniciar uma conversa ou solicitação.",
    options: [
      {
        value: "none",
        label:
          "Não. O contato é difícil ou pouco evidente.",
        score: 0
      },
      {
        value: "partial",
        label:
          "É possível, mas exige vários passos.",
        score: 2
      },
      {
        value: "good",
        label:
          "O contato é fácil.",
        score: 4
      },
      {
        value: "structured",
        label:
          "O principal canal de contato pode ser iniciado rapidamente.",
        score: 5
      }
    ]
  },
  {
    id: "conversion-flow",
    pillarId: "conversion",
    title:
      "Existe um caminho organizado para orçamento, agendamento, pedido ou contratação?",
    help:
      "Considere o processo que acontece depois que uma pessoa demonstra interesse.",
    options: [
      {
        value: "none",
        label:
          "Não existe um processo definido.",
        score: 0
      },
      {
        value: "partial",
        label:
          "Existe, mas é bastante manual ou confuso.",
        score: 2
      },
      {
        value: "good",
        label:
          "Existe um fluxo compreensível.",
        score: 4
      },
      {
        value: "structured",
        label:
          "Existe um fluxo claro e bem definido.",
        score: 5
      }
    ]
  },
  {
    id: "conversion-next-step",
    pillarId: "conversion",
    title:
      "Um interessado consegue entender o que fazer depois de conhecer seu serviço?",
    help:
      "Avalie se o próximo passo está evidente para uma pessoa que chegou até seus canais digitais.",
    options: [
      {
        value: "none",
        label:
          "Geralmente não.",
        score: 0
      },
      {
        value: "partial",
        label:
          "Nem sempre.",
        score: 2
      },
      {
        value: "good",
        label:
          "Na maioria das vezes.",
        score: 4
      },
      {
        value: "structured",
        label:
          "O próximo passo está claramente indicado.",
        score: 5
      }
    ]
  },

  {
    id: "trust-reviews",
    pillarId: "trust",
    title:
      "Existem avaliações públicas de clientes sobre o negócio?",
    help:
      "Considere avaliações reais em plataformas públicas relevantes para seu tipo de negócio.",
    options: [
      {
        value: "none",
        label:
          "Não existem avaliações públicas.",
        score: 0
      },
      {
        value: "partial",
        label:
          "Existem poucas avaliações ou são antigas.",
        score: 2
      },
      {
        value: "good",
        label:
          "Existem avaliações relevantes.",
        score: 4
      },
      {
        value: "structured",
        label:
          "Existem avaliações relevantes e há uma rotina para solicitar novas avaliações reais.",
        score: 5
      }
    ]
  },
  {
    id: "trust-social-proof",
    pillarId: "trust",
    title:
      "Você apresenta depoimentos, trabalhos, cases ou exemplos reais?",
    help:
      "Considere apenas evidências verdadeiras e autorizadas que ajudem a demonstrar a experiência do negócio.",
    options: [
      {
        value: "none",
        label:
          "Não apresentamos.",
        score: 0
      },
      {
        value: "partial",
        label:
          "Temos alguns materiais, mas quase não os apresentamos.",
        score: 2
      },
      {
        value: "good",
        label:
          "Apresentamos alguns exemplos reais.",
        score: 4
      },
      {
        value: "structured",
        label:
          "As evidências estão organizadas e são relevantes para o público.",
        score: 5
      }
    ]
  },
  {
    id: "trust-about",
    pillarId: "trust",
    title:
      "As pessoas conseguem entender quem está por trás do negócio?",
    help:
      "Considere informações institucionais, apresentação profissional e outras informações que ajudem a contextualizar quem presta o serviço.",
    options: [
      {
        value: "none",
        label:
          "Não apresentamos essas informações.",
        score: 0
      },
      {
        value: "partial",
        label:
          "Apresentamos muito pouco.",
        score: 2
      },
      {
        value: "good",
        label:
          "Existem informações suficientes.",
        score: 4
      },
      {
        value: "structured",
        label:
          "As informações são claras e consistentes.",
        score: 5
      }
    ]
  },
  {
    id: "trust-evidence",
    pillarId: "trust",
    title:
      "Seus canais apresentam evidências reais do trabalho, estrutura ou serviço prestado?",
    help:
      "Exemplos podem incluir fotos, projetos, resultados apresentados com contexto ou demonstrações reais da atividade.",
    options: [
      {
        value: "none",
        label:
          "Quase não existem evidências.",
        score: 0
      },
      {
        value: "partial",
        label:
          "Existem algumas evidências.",
        score: 2
      },
      {
        value: "good",
        label:
          "Existem evidências suficientes para entender melhor o trabalho.",
        score: 4
      },
      {
        value: "structured",
        label:
          "As evidências são variadas, atuais e bem apresentadas.",
        score: 5
      }
    ]
  },

  {
    id: "automation-leads",
    pillarId: "automation",
    title:
      "Como os contatos de possíveis clientes são organizados?",
    help:
      "Considere como o negócio registra e acompanha pessoas que pediram informações, orçamento ou demonstraram interesse.",
    options: [
      {
        value: "none",
        label:
          "Não existe uma organização definida.",
        score: 0
      },
      {
        value: "partial",
        label:
          "Usamos principalmente conversas ou anotações manuais.",
        score: 2
      },
      {
        value: "good",
        label:
          "Usamos planilha, agenda ou outra ferramenta organizada.",
        score: 4
      },
      {
        value: "structured",
        label:
          "Existe um processo ou sistema claramente definido.",
        score: 5
      }
    ]
  },
  {
    id: "automation-intake",
    pillarId: "automation",
    title:
      "O atendimento inicial segue algum padrão?",
    help:
      "Considere perguntas recorrentes, informações que precisam ser coletadas e mensagens usadas no primeiro contato.",
    options: [
      {
        value: "none",
        label:
          "Cada atendimento começa do zero.",
        score: 0
      },
      {
        value: "partial",
        label:
          "Existem algumas mensagens ou modelos informais.",
        score: 2
      },
      {
        value: "good",
        label:
          "Existem perguntas ou modelos padronizados.",
        score: 4
      },
      {
        value: "structured",
        label:
          "A entrada das informações segue um processo bem estruturado.",
        score: 5
      }
    ]
  },
  {
    id: "automation-follow-up",
    pillarId: "automation",
    title:
      "Existe acompanhamento de pessoas que demonstraram interesse?",
    help:
      "Considere contatos que não contrataram ou não concluíram uma solicitação no primeiro momento.",
    options: [
      {
        value: "none",
        label:
          "Não fazemos acompanhamento.",
        score: 0
      },
      {
        value: "partial",
        label:
          "O acompanhamento acontece ocasionalmente.",
        score: 2
      },
      {
        value: "good",
        label:
          "Existe uma rotina manual de acompanhamento.",
        score: 4
      },
      {
        value: "structured",
        label:
          "Existe um processo organizado com lembretes ou automações adequadas.",
        score: 5
      }
    ]
  },
  {
    id: "automation-repetitive-tasks",
    pillarId: "automation",
    title:
      "Tarefas digitais repetitivas já foram simplificadas?",
    help:
      "Considere tarefas como responder perguntas recorrentes, coletar informações, organizar solicitações ou registrar contatos.",
    options: [
      {
        value: "none",
        label:
          "Praticamente tudo é feito manualmente.",
        score: 0
      },
      {
        value: "partial",
        label:
          "Alguns modelos ou atalhos ajudam no trabalho.",
        score: 2
      },
      {
        value: "good",
        label:
          "Algumas ferramentas já reduzem trabalho repetitivo.",
        score: 4
      },
      {
        value: "structured",
        label:
          "Automações simples são utilizadas onde realmente fazem sentido.",
        score: 5
      }
    ]
  }
]);

export function validateQuestionCatalog() {
  const {
    pillarCount,
    questionsPerPillar,
    maxScorePerQuestion,
    maxScorePerPillar,
    maxTotalScore,
    scoreLevels
  } = DIAGNOSTIC_CONFIG;

  if (PILLARS.length !== pillarCount) {
    throw new Error(
      `Esperados ${pillarCount} pilares; encontrados ${PILLARS.length}.`
    );
  }

  const pillarIds =
    new Set(PILLARS.map((pillar) => pillar.id));

  if (pillarIds.size !== PILLARS.length) {
    throw new Error(
      "Existem identificadores de pilares duplicados."
    );
  }

  const questionIds = new Set();

  for (const pillar of PILLARS) {
    if (pillar.maxScore !== maxScorePerPillar) {
      throw new Error(
        `O pilar "${pillar.label}" deve valer exatamente ${maxScorePerPillar} pontos.`
      );
    }

    const pillarQuestions =
      QUESTIONS.filter(
        (question) =>
          question.pillarId === pillar.id
      );

    if (
      pillarQuestions.length !==
      questionsPerPillar
    ) {
      throw new Error(
        `O pilar "${pillar.label}" deve possuir exatamente ${questionsPerPillar} perguntas.`
      );
    }
  }

  for (const question of QUESTIONS) {
    if (!pillarIds.has(question.pillarId)) {
      throw new Error(
        `A pergunta "${question.id}" referencia um pilar inexistente.`
      );
    }

    if (questionIds.has(question.id)) {
      throw new Error(
        `Identificador de pergunta duplicado: "${question.id}".`
      );
    }

    questionIds.add(question.id);

    const optionValues =
      new Set(
        question.options.map(
          (option) => option.value
        )
      );

    if (
      optionValues.size !==
      question.options.length
    ) {
      throw new Error(
        `A pergunta "${question.id}" possui valores de resposta duplicados.`
      );
    }

    const scores =
      question.options
        .map((option) => option.score)
        .sort((a, b) => a - b);

    const expectedScores =
      [...scoreLevels]
        .sort((a, b) => a - b);

    if (
      JSON.stringify(scores) !==
      JSON.stringify(expectedScores)
    ) {
      throw new Error(
        `A pergunta "${question.id}" deve possuir exatamente os níveis de pontuação ${scoreLevels.join(", ")}.`
      );
    }

    const questionMaximum =
      Math.max(...scores);

    if (
      questionMaximum !==
      maxScorePerQuestion
    ) {
      throw new Error(
        `A pergunta "${question.id}" deve valer no máximo ${maxScorePerQuestion} pontos.`
      );
    }
  }

  const expectedQuestionCount =
    pillarCount *
    questionsPerPillar;

  if (
    QUESTIONS.length !==
    expectedQuestionCount
  ) {
    throw new Error(
      `Esperadas ${expectedQuestionCount} perguntas; encontradas ${QUESTIONS.length}.`
    );
  }

  const calculatedMaximum =
    QUESTIONS.reduce(
      (total, question) =>
        total +
        Math.max(
          ...question.options.map(
            (option) => option.score
          )
        ),
      0
    );

  if (
    calculatedMaximum !==
    maxTotalScore
  ) {
    throw new Error(
      `A pontuação máxima calculada foi ${calculatedMaximum}; o esperado é ${maxTotalScore}.`
    );
  }

  return {
    pillarCount: PILLARS.length,
    questionCount: QUESTIONS.length,
    maxTotalScore: calculatedMaximum
  };
}

validateQuestionCatalog();