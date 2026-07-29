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
      title: "Catálogos e cardápios digitais",
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
      number: "04",
      title: "Pequenos sistemas e integrações",
      problem:
        "Para substituir tarefas manuais ou conectar formulários e informações em uma solução web organizada.",
      deliverables: [
        "Formulários integrados",
        "Painéis administrativos simples",
        "APIs e integrações compatíveis com o escopo",
        "Persistência e organização de dados"
      ],
      fit:
        "Projetos com necessidades específicas que possam ser atendidas por um escopo pequeno ou gradual."
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
        "https://github.com/Souzas-Dev/souzasdevback"
    },
    {
      slug: "cafeteria-conceito",
      category: "Website institucional / Cardápio digital",
      title: "Cafeteria Conceito",
      subtitle: "Experiência digital para uma cafeteria fictícia",
      status: "Projeto concluído",
      year: "2026",

      coverImage:
        "/assets/images/projects/cafeteria-conceito.webp",

      coverAlt:
        "Página inicial do projeto Cafeteria Conceito",

      overview:
        "Site conceitual de uma cafeteria, desenvolvido com foco em uma experiência minimalista, responsiva e agradável para apresentação de produtos e cardápio digital.",

      complementaryDescription:
        "Uma experiência digital clean e elegante para uma cafeteria fictícia, com cardápio interativo, filtros por categoria, informações institucionais e localização ilustrativa.",

      challenge:
        "Criar uma página que transmitisse a sensação de uma cafeteria moderna e acolhedora sem utilizar excesso de elementos, cores ou animações. O cardápio precisava ser fácil de consultar e funcionar bem em diferentes tamanhos de tela.",

      solution:
        "Foi desenvolvida uma interface minimalista, com tipografia editorial, paleta inspirada em tons de café e bastante espaço visual. O cardápio é renderizado dinamicamente com JavaScript e pode ser filtrado por categorias.",

      features: [
        "Cardápio digital",
        "Filtros de produtos",
        "Layout responsivo",
        "Menu mobile",
        "Informações institucionais",
        "Mapa ilustrativo",
        "Navegação por âncoras",
        "Tratamento de falhas no carregamento das imagens",
        "Boas práticas básicas de acessibilidade"
      ],

      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Git",
        "GitHub",
        "GitHub Pages"
      ],

      highlights: [
        "Desenvolvimento mobile-first",
        "Layout totalmente responsivo",
        "Identidade visual minimalista",
        "Cardápio digital dinâmico",
        "Filtros por categoria",
        "Produtos renderizados com JavaScript",
        "Imagens otimizadas e armazenadas localmente",
        "Navegação acessível",
        "Localização fictícia e mapa ilustrativo",
        "Publicação automatizada pelo GitHub Pages"
      ],

      result:
        "O resultado é uma demonstração leve, responsiva e profissional, preparada para representar uma solução real que poderia ser adaptada para cafeterias, restaurantes e outros negócios do setor alimentício.",

      demoUrl:
        "https://souzas-dev.github.io/cafeteria-frontend/",

      codeUrl:
        "https://github.com/Souzas-Dev/cafeteria-frontend",

      caseUrl:
        "/cases/cafeteria-conceito"
    }
  ]
};
