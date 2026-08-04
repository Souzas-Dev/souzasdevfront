export const siteData = {
  brand: "Souzas Dev",
  logo: "<Dev.>",

  apiUrl: ["localhost", "127.0.0.1"].includes(
    window.location.hostname
  )
    ? `http://${window.location.hostname}:3000`
    : "https://api.souzasdev.com",

  contact: {
    owner: "Eduardo Souza",
    role: "Fundador e Desenvolvedor Web",
    email: "contato@souzasdev.com",
    whatsapp: "(67) 98119-3789",
    instagram: "https://www.instagram.com/souzasdev/",
    instagramHandle: "@souzasdev",
    github: "https://github.com/Souzas-Dev",
    location: "Campo Grande – MS"
  },

  about: {
    paragraphs: [
      "A Souzas Dev desenvolve soluções web para profissionais e pequenos negócios que precisam apresentar seus serviços, organizar informações e fortalecer sua presença digital.",
      "Cada projeto é avaliado individualmente. Antes de iniciar, definimos com clareza as funcionalidades, o prazo, as responsabilidades e os limites do escopo.",
      "A solução é planejada de acordo com a necessidade real do projeto, evitando complexidade desnecessária e promessas incompatíveis com o escopo."
    ]
  },
  stats: [
    {
      value: "Escopo claro",
      label: "Funcionalidades e limites definidos antes do desenvolvimento"
    },
    {
      value: "Atendimento direto",
      label: "Comunicação próxima durante as etapas do projeto"
    },
    {
      value: "Responsividade",
      label: "Experiência planejada para celular, tablet e desktop"
    },
    {
      value: "Evolução responsável",
      label: "Estrutura organizada para melhorias futuras"
    }
  ],
  services: [
    {
      number: "01",
      title: "Sites institucionais",
      route: "/servicos/sites-institucionais",
      problem:
        "Para negócios que precisam reunir informações, serviços e contatos em um endereço profissional.",
      deliverables: [
        "Página inicial e seções institucionais",
        "Apresentação clara dos serviços",
        "Chamadas para contato ou orçamento",
        "Layout responsivo"
      ],
      fit:
        "Profissionais autônomos, prestadores de serviço e pequenos negócios."
    },
    {
      number: "02",
      title: "Landing pages",
      route: "/servicos/landing-pages",
      problem:
        "Para divulgar uma oferta, campanha ou serviço específico em uma página direta e focada.",
      deliverables: [
        "Estrutura orientada a uma oferta",
        "Chamadas para ação",
        "Integração com formulário ou WhatsApp",
        "Experiência responsiva"
      ],
      fit:
        "Campanhas, lançamentos, eventos e divulgação de serviços específicos."
    },
    {
      number: "03",
      title: "Portfólios digitais",
      route: "/servicos/portfolios",
      problem:
        "Para profissionais que precisam apresentar projetos, competências e formas de contato em um espaço próprio.",
      deliverables: [
        "Apresentação profissional",
        "Projetos e estudos de caso",
        "Competências e serviços",
        "Canais de contato"
      ],
      fit:
        "Desenvolvedores, designers, freelancers e profissionais que desejam organizar sua presença digital."
    },
    {
      number: "04",
      title: "Catálogos e cardápios digitais",
      route: "/servicos/catalogos-cardapios",
      problem:
        "Para organizar produtos, serviços ou itens de um cardápio de forma acessível pelo celular.",
      deliverables: [
        "Categorias e organização dos itens",
        "Descrições, preços e imagens",
        "Filtros ou navegação simplificada",
        "Contato ou pedido por WhatsApp"
      ],
      fit:
        "Lojas, cafeterias, restaurantes e negócios com catálogo de produtos."
    },
    {
      number: "05",
      title: "Pequenas soluções e integrações web",
      route: "/servicos/solucoes-integracoes",
      problem:
        "Para organizar formulários, informações ou tarefas simples em uma solução compatível com um escopo pequeno ou gradual.",
      deliverables: [
        "Formulários integrados",
        "Painéis administrativos simples",
        "APIs e integrações compatíveis com o escopo",
        "Persistência e organização de dados"
      ],
      fit:
        "Projetos com necessidades específicas que possam ser atendidas de maneira gradual e organizada."
    }
  ],
  technologies: [
    {
      category: "Frontend",
      items: [
        {
          name: "HTML5",
          icon: "devicon-html5-plain colored",
          description:
            "Estrutura e organiza o conteúdo das páginas."
        },
        {
          name: "CSS3",
          icon: "devicon-css3-plain colored",
          description:
            "Define estilos, layouts e adaptação responsiva."
        },
        {
          name: "JavaScript",
          icon: "devicon-javascript-plain colored",
          description:
            "Adiciona interatividade e comportamento às páginas."
        }
      ]
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          icon: "devicon-nodejs-plain colored",
          description:
            "Executa a API e as regras da aplicação no servidor."
        },
        {
          name: "API REST",
          symbol: "API",
          description:
            "Conecta frontend e backend por meio de endpoints HTTP."
        }
      ]
    },
    {
      category: "Banco de dados",
      items: [
        {
          name: "PostgreSQL",
          icon: "devicon-postgresql-plain colored",
          description:
            "Banco relacional utilizado para persistência em produção."
        },
        {
          name: "Supabase",
          image: "https://cdn.simpleicons.org/supabase/3ECF8E?viewbox=auto",
          description:
            "Hospeda e gerencia o PostgreSQL utilizado pela aplicação."
        },
        {
          name: "SQLite",
          icon: "devicon-sqlite-plain colored",
          description:
            "Banco leve utilizado no desenvolvimento e nos testes locais."
        }
      ]
    },
    {
      category: "Infraestrutura",
      items: [
        {
          name: "Vercel",
          image: "https://cdn.simpleicons.org/vercel/FFFFFF?viewbox=auto",
          description:
            "Publica e entrega o frontend com deploy contínuo."
        },
        {
          name: "Render",
          image: "https://cdn.simpleicons.org/render/46E3B7?viewbox=auto",
          description:
            "Hospeda e executa a API Node.js em produção."
        },
        {
          name: "Cloudflare",
          image: "https://cdn.simpleicons.org/cloudflare/F38020?viewbox=auto",
          description:
            "Gerencia DNS, SSL, proxy e camadas de segurança."
        }
      ]
    },
    {
      category: "Ferramentas",
      items: [
        {
          name: "Git",
          icon: "devicon-git-plain colored",
          description:
            "Registra e controla as alterações do código."
        },
        {
          name: "GitHub",
          icon: "devicon-github-original",
          description:
            "Hospeda os repositórios e integra o fluxo de deploy."
        },
        {
          name: "npm",
          icon: "devicon-npm-original-wordmark colored",
          description:
            "Gerencia dependências e scripts dos projetos Node.js."
        },
        {
          name: "VS Code",
          icon: "devicon-vscode-plain colored",
          description:
            "Editor utilizado para escrever e organizar o código."
        }
      ]
    }
  ],
  projects: [
    {
      category: "Projeto autoral em evolução",
      title: "Souzas Dev",
      subtitle: "Portfólio e plataforma administrativa",
      icon: "devicon-javascript-plain colored",

      coverImage:
        "/assets/images/projects/souzas-dev.webp",

      coverAlt:
        "Página inicial do projeto Souzas Dev",

      overview:
        "A Souzas Dev é um projeto autoral criado para transformar meus estudos em uma aplicação web real, reunindo apresentação profissional, contato com visitantes e gerenciamento administrativo.",

      challenge:
        "O desafio foi desenvolver uma solução completa sem depender de frameworks no frontend, conectando interface, API, autenticação e banco de dados em uma estrutura organizada.",

      solution:
        "Desenvolvi um site responsivo com formulário integrado ao backend, área de login protegida e painel administrativo para visualizar e organizar as mensagens recebidas.",

      features: [
        "Site institucional responsivo",
        "Formulário conectado à API",
        "Login administrativo com JWT",
        "Cookie de autenticação HttpOnly",
        "Painel de gerenciamento de mensagens",
        "Status de mensagens novas, lidas e arquivadas",
        "Banco de dados SQLite",
        "Frontend e backend em repositórios separados"
      ],

      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Node.js",
        "SQLite",
        "JWT",
        "Git",
        "GitHub"
      ],

      learning: [
        "Estruturação de uma aplicação frontend sem frameworks",
        "Criação de uma API utilizando recursos nativos do Node.js",
        "Integração entre formulário, servidor e banco de dados",
        "Autenticação com JWT e cookies protegidos",
        "Organização de código em módulos",
        "Controle de versões com Git e GitHub"
      ],

      nextSteps: [
        "Publicar frontend e backend",
        "Configurar domínio e HTTPS",
        "Adicionar proteção antispam",
        "Criar testes automatizados",
        "Melhorar acessibilidade e experiência mobile",
        "Adicionar novos projetos reais ao portfólio"
      ],

      frontendUrl:
        "https://github.com/Souzas-Dev/souzasdevfront",

      backendUrl:
        "https://github.com/Souzas-Dev/souzasdevback",

      caseUrl:
        "/cases/souzas-dev"
    },
    {
      slug: "cafeteria-conceito",
      category: "Website institucional / Catálogo digital",
      title: "Estação Café & Prosa",
      subtitle: "Identidade editorial para uma cafeteria fictícia",
      status: "Evolução publicada em 2026",
      year: "2026",

      coverImage:
        "/assets/images/projects/estacao-cafe-prosa.webp",

      coverAlt:
        "Página inicial da demo Estação Café & Prosa",

      overview:
        "Site institucional e catálogo digital para uma cafeteria fictícia, com identidade editorial, animações suaves, experiência responsiva e narrativa visual sobre o ritual do café.",

      complementaryDescription:
        "A Estação Café & Prosa representa a evolução da primeira demo Cafeteria Conceito, preservada no case como registro da origem do projeto.",

      challenge:
        "Evoluir a primeira demonstração para uma presença digital com personalidade própria, equilibrando narrativa visual, conteúdo institucional e um catálogo fácil de consultar.",

      solution:
        "A aplicação foi reconstruída com Next.js, React e TypeScript, utilizando componentes reutilizáveis, imagens amplas, animações suaves e catálogo com busca e filtros.",

      features: [
        "Catálogo digital",
        "Busca de produtos",
        "Filtros por categoria",
        "Layout responsivo",
        "Menu adaptado para dispositivos móveis",
        "Narrativa sobre o ritual do café",
        "Animações suaves",
        "Boas práticas de acessibilidade"
      ],

      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "CSS",
        "Git",
        "GitHub",
        "GitHub Actions",
        "GitHub Pages"
      ],

      highlights: [
        "Evolução da demo Cafeteria Conceito",
        "Identidade visual editorial",
        "Catálogo digital filtrável",
        "Componentes reutilizáveis em React",
        "Código tipado com TypeScript",
        "Experiência responsiva",
        "Exportação estática",
        "Publicação automatizada"
      ],

      result:
        "O resultado é uma demonstração conceitual com identidade própria, catálogo navegável e narrativa visual, criada exclusivamente para o portfólio da Souzas Dev.",

      demoUrl:
        "https://souzas-dev.github.io/estacao-cafe-prosa/",

      codeUrl:
        "https://github.com/Souzas-Dev/estacao-cafe-prosa",

      caseUrl:
        "/cases/estacao-cafe-prosa"
    }
  ]
};
