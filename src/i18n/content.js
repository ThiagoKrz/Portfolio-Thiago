const content = {
  'pt-BR': {
    nav: {
      home: 'Home',
      skills: 'Habilidades',
      projects: 'Projetos',
      about: 'Sobre',
      themeLabel: 'Alternar tema',
      languageLabel: 'Idioma',
    },
    home: {
      eyebrow: 'Portfólio de Desenvolvedor Iniciante',
      titleLead: 'Oi, eu sou',
      name: 'Thiago Krauzer',
      primaryRole: 'Desenvolvedor',
      rotatingRoles: ['Editor de Vídeo', 'Tradutor', 'Designer'],
      photoAlt: 'Foto de Thiago Krauzer',
      intro:
        'Construindo projetos em front-end com React e Vite, sempre evoluindo com foco em performance, clareza de código e boa experiência para o usuário.',
      ctaProjects: 'Projetos',
      ctaBio: 'Sobre mim',
      highlightsTitle: 'Destaques',
      cards: [
        {
          title: 'Front-end em evolução contínua',
          text: 'Estudos diários em React, componentização, hooks e consumo de APIs.',
        },
        {
          title: 'Tradução e adaptação de conteúdo',
          text: 'Experiência em adaptar textos para público técnico e não técnico.',
        },
        {
          title: 'Comunicação digital',
          text: 'Criação de materiais com foco em clareza, alcance e contexto.',
        },
      ],
    },
    skills: {
      title: 'Habilidades',
      categories: [
        {
          title: 'Desenvolvimento Frontend',
          items: [
            'React, TypeScript e ecossistema Vite',
            'Angular e integração com APIs',
            'Estilização utilitária com Tailwind CSS',
            'HTML semântico e componentização',
          ],
        },
        {
          title: 'Desenvolvimento Backend',
          items: [
            'APIs RESTful em C# e .NET',
            'Node.js para APIs e serviços',
            'Python para automação e scripts',
            'Banco de Dados SQL Server e ORM',
          ],
        },
        {
          title: 'Localização e Engenharia Reversa',
          items: [
            'Localização EN-US para PT-BR (Nível C1)',
            'Transcriação imersiva e adaptação cultural',
            'Engenharia reversa de engines proprietárias',
            'Criação de ferramentas de extração (Python/C#)',
          ],
        },
        {
          title: 'Soft Skills',
          items: [
            'Troubleshooting e resolução sob pressão (SLA)',
            'Comunicação empática e suporte a usuários',
            'Gestão e organização de projetos volumosos',
            'Aprendizado ágil de novas tecnologias',
          ],
        },
      ],
    },
    projects: {
      title: 'Projetos',
      sections: [
        {
          title: 'Desenvolvimento',
          projects: [
            {
              title: 'Fate Café React',
              description: 'Hub de Dados, Traduções, Guias, e Informações da desenvolvedora Type-Moon em Português.',
              longDescription:
                'Fate Café React é um hub criado para concentrar dados, traduções, guias e informações relacionadas ao universo Type-Moon em português. O projeto foi pensado para entregar navegação clara, leitura confortável e uma base sólida para expansão contínua de conteúdo na comunidade brasileira.',
              tech: ['React', 'Vite', 'CSS3', 'Vercel'],
              image: 'proj1',
              primaryAction: {
                type: 'github',
                label: 'GitHub',
                href: 'https://github.com/ThiagoKrz/fate-cafe-react',
              },
              secondaryAction: {
                type: 'demo',
                label: 'Demo',
                href: 'https://fatecafe.vercel.app/',
              },
            },
            {
              title: 'KrEventos',
              description: 'Sistema responsivo para cadastro de eventos, e estruturação de conteúdo.',
              longDescription:
                'KrEventos é um sistema web voltado para cadastro, organização e apresentação de eventos em uma interface responsiva. O foco do projeto está em estruturar bem as informações, facilitar a leitura dos dados e manter uma experiência visual objetiva e funcional.',
              tech: ['C#', '.NET', 'Angular'],
              image: 'proj2',
              primaryAction: {
                type: 'github',
                label: 'GitHub',
                href: 'https://github.com/ThiagoKrz/KrEventos',
              },
            },
            {
              title: 'Agenda Policlínica',
              description: 'Back-end para gerenciamento clínico com foco em rotas, estrutura de serviços e organização da aplicação.',
              longDescription:
                'Agenda Policlínica é um back-end desenvolvido para atender fluxos de gerenciamento clínico, com atenção à organização de rotas, serviços e estrutura interna da aplicação. O projeto prioriza clareza arquitetural, manutenção futura e base sólida para integração com front-end.',
              tech: ['Node.js', 'Angular', 'API REST'],
              image: 'proj3',
              primaryAction: {
                type: 'github',
                label: 'GitHub',
                href: 'https://github.com/ThiagoKrz/agendaclinicaser-server',
              },
            },
          ],
        },
        {
          title: 'Tradução',
          projects: [
            {
              title: 'Fate/Grand Order',
              description: 'Liderança de localização em larga escala para jogo live service, com tradução, revisão e conteúdo promocional para a comunidade brasileira.',
              longDescription:
                'Liderança da localização de Fate/Grand Order da singularidade Orleans ao Lostbelt 5.1, com gestão contínua de entregas em ciclo Live Service.\n\nPrincipais habilidades:\n• Gestão de atualizações e prazos regulares.\n• Transcriação EN-US para PT-BR preservando tom e personalidade dos personagens.\n• Edição, tradução e publicação de trailers para engajamento da comunidade.',
              tech: ['Live Service', 'Transcriação', 'Localização', 'Edição de Trailer'],
              image: 'game1',
              primaryAction: {
                type: 'youtube',
                label: 'YouTube',
                href: 'https://www.youtube.com/watch?v=tJPDcEIBF_4',
              },
              secondaryAction: {
                type: 'demo',
                label: 'Demo',
                href: 'https://chaldea-br.vercel.app/',
              },
            },
            {
              title: 'Tsukihime Remake ',
              description: 'Liderança de projeto multidisciplinar unindo gestão, romhacking, engenharia reversa e localização completa da Visual Novel.',
              longDescription:
                'Liderança de projeto e desenvolvimento da localização completa de Tsukihime, unindo romhacking, engenharia reversa e revisão textual.\n\nPrincipais habilidades:\n• Coordenação de tradutores e revisores com versionamento em Git e Drive.\n• Extração, modificação e reinjeção segura de textos na engine.\n• Localização de trailers e openings com consistência visual e linguística.',
              tech: ['Liderança', 'Romhacking', 'Engenharia Reversa', 'Git', 'Python', 'Linux', 'C#'],
              image: 'game2',
              primaryAction: {
                type: 'youtube',
                label: 'YouTube',
                href: 'https://www.youtube.com/watch?v=nopL0xeA4DM',
              },
              secondaryAction: {
                type: 'demo',
                label: 'Demo',
                href: 'https://fatecafe.vercel.app/#/traducoes/tsukihime-remake',
              },
            },
            {
              title: 'Witch on the Holy Night',
              description: 'Projeto pioneiro com automação por IA e revisão literária de alta exigência para manter estilo narrativo culto e poético.',
              longDescription:
                'Projeto de localização com automação por IA e revisão literária, focado em manter o estilo culto, poético e narrativo da obra original.\n\nPrincipais habilidades:\n• Engenharia de prompts para alta precisão contextual.\n• Refinamento gramatical em norma culta e vocabulário erudito.\n• Análise de estilo para evitar traduções mecânicas e preservar ritmo de leitura.',
              tech: ['Prompt Engineering', 'Automação IA', 'Norma Culta', 'Análise Textual'],
              image: 'game3',
              primaryAction: {
                type: 'youtube',
                label: 'YouTube',
                href: 'https://www.youtube.com/playlist?list=PL6dHvngBG8bomf_DftE3BdgQdNuoDLw1P',
              },
              secondaryAction: {
                type: 'demo',
                label: 'Demo',
                href: 'https://fatecafe.vercel.app/#/traducoes/mahou-tsukai-no-yoru',
              },
            },
          ],
        },
        {
          title: 'Criação de Conteúdo',
          projects: [
            {
              title: 'Cobertura de Evento',
              description: 'Documentário sobre a jornada no evento geek Anime Friends 2024, focando na união da comunidade e bastidores do canal.',
              tech: ['Roteiro', 'Edição', 'Storytelling', "Trabalho em equipe"],
              thumbnail: 'y-DoblS-J6A',
              primaryAction: {
                type: 'youtube',
                label: 'YouTube',
                href: 'https://www.youtube.com/watch?v=y-DoblS-J6A&t=587s',
              },
            },
            {
              title: 'Campeonato Ao Vivo',
              description: 'Organização, narração e transmissão de um campeonato competitivo de Melty Blood: Type Lumina, focado no fortalecimento da comunidade.',
              tech: ['Gestão de Eventos', 'Streaming(OBS)', 'Comunicação',],
              thumbnail: 'VdlFNCfNmL0',
              primaryAction: {
                type: 'youtube',
                label: 'YouTube',
                href: 'https://www.youtube.com/watch?v=VdlFNCfNmL0&t=12460s',
              },
            },
            {
              title: 'Ensaio Audiovisual',
              description: 'Vídeo-ensaio focado em pesquisa histórica, roteiro e edição para explicar a origem e a viralização de um mascote clássico dos jogos de luta na cultura da internet.',
              tech: ['Conteúdo', 'Edição', 'Publicação'],
              thumbnail: 'ohtHvN2MKU8',
              primaryAction: {
                type: 'youtube',
                label: 'YouTube',
                href: 'https://www.youtube.com/watch?v=ohtHvN2MKU8',
              },
            },
          ],
        },
      ],
    },
    about: {
      title: 'Sobre',
      eyebrow: 'Perfil Profissional',
      bio: 'Olá, meu nome é Thiago Krauzer, sou profissional de TI e graduado em Sistemas de Informação, com atuação em suporte técnico, gestão de incidentes e estabilidade de ambiente corporativo. Experiência com atendimento N1/N2, troubleshooting de hardware e software, provisionamento de usuários e comunicação clara com foco em SLA e experiência do usuário.',
      scrollHintLabel: 'Rolar para a seção de currículo',
      resumeTitle: 'Experiência e Competências',
      resumeSubtitle: 'Resumo curricular com foco técnico, operação e entrega de resultados em ambientes de missão crítica.',
      resumeSections: [
        {
          title: 'Resumo Profissional',
          items: [
            'Atuação em suporte técnico, atendimento ao usuário e resolução de incidentes via ITSM.',
            'Vivência com Windows, MacOS, Microsoft Office, Google Workspace, Active Directory e MDM.',
            'Perfil organizado, comunicativo e orientado à melhoria contínua e estabilidade operacional.',
          ],
        },
        {
          title: 'Formação Acadêmica',
          items: ['Bacharelado em Sistemas de Informação - UNINASSAU 2021/2024.'],
        },
        {
          title: 'Experiência Profissional',
          items: [
            'Técnico de Informática | UNINASSAU (fev/2025 - atual): incidentes e service requests, suporte remoto/presencial, provisionamento e documentação técnica.',
            'Técnico de TI Autônomo (PJ) | CERB Consulting (mai/2025 - mar/2026): suporte sob demanda, inventário de ativos e resolução de incidentes de média/alta complexidade.',
            'Estagiário de Suporte de TI | Tribunal de Justiça de Rondônia (mai/2022 - mai/2024): suporte N1/N2, manutenção de infraestrutura e participação em sistemas críticos.',
          ],
        },
        {
          title: 'Competências Técnicas',
          items: [
            'Gestão de incidentes e requests (Jira, Lecom), suporte remoto e troubleshooting.',
            'Windows Desktop/Server, MacOS, Microsoft Office, Google Workspace e Active Directory.',
            'Manutenção de hardware, infraestrutura, inventário de ativos e gestão de dispositivos móveis (MDM).',
          ],
        },
        {
          title: 'Idiomas e Diferenciais',
          items: [
            'Português nativo e Inglês fluente (C1 - CEFR).',
            'Comunicação empática, organização de demandas múltiplas e tomada de decisão sob pressão.',
            'Colaboração em equipes híbridas/remotas e aprendizado rápido de novas ferramentas.',
          ],
        },
      ],
      publicLinks: [
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/thiago-krauzer-74b83a206/',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/ThiagoKrz',
        },
      ],
      photoAlt: 'Foto de Thiago Krauzer',
    },
  },
  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      about: 'About',
      themeLabel: 'Toggle theme',
      languageLabel: 'Language',
    },
    home: {
      eyebrow: 'Junior Developer Portfolio',
      titleLead: 'Hi, I am',
      name: 'Thiago Krauzer',
      primaryRole: 'Developer',
      rotatingRoles: ['Video Editor', 'Translator', 'Designer'],
      photoAlt: 'Photo of Thiago Krauzer',
      intro:
        'Building front-end projects with React and Vite, always improving with focus on performance, code clarity, and user experience.',
      ctaProjects: 'See projects',
      ctaBio: 'Read my bio',
      highlightsTitle: 'Highlights',
      cards: [
        {
          title: 'Continuous front-end growth',
          text: 'Daily study on React, component architecture, hooks, and API usage.',
        },
        {
          title: 'Content translation and adaptation',
          text: 'Experience adapting text for technical and non-technical audiences.',
        },
        {
          title: 'Digital communication',
          text: 'Content creation focused on clarity, reach, and context.',
        },
      ],
    },
    skills: {
      title: 'Skills',
      categories: [
        {
          title: 'Front-end Development',
          items: [
            'React, TypeScript, and Vite ecosystem',
            'Angular and API integration',
            'Utility-first styling with Tailwind CSS',
            'Semantic HTML and component architecture',
          ],
        },
        {
          title: 'Back-end Development',
          items: [
            'RESTful APIs with C# and .NET',
            'Node.js for APIs and services',
            'Python for automation and scripting',
            'SQL Server databases and ORM',
          ],
        },
        {
          title: 'Localization and Reverse Engineering',
          items: [
            'EN-US to PT-BR localization (C1 level)',
            'Immersive transcreation and cultural adaptation',
            'Reverse engineering of proprietary engines',
            'Extraction tooling development (Python/C#)',
          ],
        },
        {
          title: 'Soft Skills',
          items: [
            'Troubleshooting and pressure-based resolution (SLA)',
            'Empathetic communication and user support',
            'Management and organization of high-volume projects',
            'Fast learning of new technologies',
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      sections: [
        {
          title: 'Development',
          projects: [
            {
              title: 'Fate Cafe React',
              description: 'A data, translations, guides, and information hub for Type-Moon content in Portuguese.',
              longDescription:
                'Fate Cafe React is a hub built to centralize data, translations, guides, and information related to the Type-Moon universe in Portuguese. The project was designed to provide clear navigation, comfortable reading, and a solid foundation for continuous content expansion within the Brazilian community.',
              tech: ['React', 'Vite', 'CSS3', 'Vercel'],
              image: 'proj1',
              primaryAction: {
                type: 'github',
                label: 'GitHub',
                href: 'https://github.com/ThiagoKrz/fate-cafe-react',
              },
              secondaryAction: {
                type: 'demo',
                label: 'Demo',
                href: 'https://fatecafe.vercel.app/',
              },
            },
            {
              title: 'KrEventos',
              description: 'A responsive system for event registration and content structuring.',
              longDescription:
                'KrEventos is a web system focused on event registration, organization, and presentation through a responsive interface. The project emphasizes well-structured information, better readability, and a visual experience that remains objective and functional.',
              tech: ['C#', '.NET', 'Angular'],
              image: 'proj2',
              primaryAction: {
                type: 'github',
                label: 'GitHub',
                href: 'https://github.com/ThiagoKrz/KrEventos',
              },
            },
            {
              title: 'Polyclinic Agenda',
              description: 'Clinical management back-end focused on routes, service structure, and application organization.',
              longDescription:
                'Polyclinic Agenda is a back-end developed to support clinical management workflows, with strong attention to route organization, services, and internal application structure. The project prioritizes architectural clarity, future maintainability, and a solid base for front-end integration.',
              tech: ['Node.js', 'Angular', 'REST API'],
              image: 'proj3',
              primaryAction: {
                type: 'github',
                label: 'GitHub',
                href: 'https://github.com/ThiagoKrz/agendaclinicaser-server',
              },
            },
          ],
        },
        {
          title: 'Translation',
          projects: [
            {
              title: 'Fate/Grand Order',
              description: 'Large-scale localization leadership for a live-service game, including translation, revision, and promotional content for the Brazilian community.',
              longDescription:
                'Localization leadership for Fate/Grand Order from Orleans to Lostbelt 5.1, with continuous delivery management under a live-service cycle.\n\nKey skills:\n• Management of regular updates and delivery deadlines.\n• EN-US to PT-BR transcreation preserving tone and character personality.\n• Editing, translation, and release of trailers to engage the community.',
              tech: ['Live-Service', 'Transcreation', 'Localization', 'Trailer Editing'],
              image: 'game1',
              primaryAction: {
                type: 'youtube',
                label: 'YouTube',
                href: 'https://www.youtube.com/watch?v=tJPDcEIBF_4',
              },
              secondaryAction: {
                type: 'demo',
                label: 'Demo',
                href: 'https://chaldea-br.vercel.app/',
              },
            },
            {
              title: 'Tsukihime Remake',
              description: 'Multidisciplinary project leadership combining management, romhacking, reverse engineering, and full Visual Novel localization.',
              longDescription:
                'Project leadership and development for the full localization of Tsukihime, combining romhacking, reverse engineering, and textual revision.\n\nKey skills:\n• Coordination of translators and reviewers with versioning in Git and Drive.\n• Safe text extraction, modification, and reinjection into the game engine.\n• Localization of trailers and openings with visual and linguistic consistency.',
              tech: ['Leadership', 'Romhacking', 'Reverse Engineering', 'Git', 'Python', 'Linux', 'C#'],
              image: 'game2',
              primaryAction: {
                type: 'youtube',
                label: 'YouTube',
                href: 'https://www.youtube.com/watch?v=nopL0xeA4DM',
              },
              secondaryAction: {
                type: 'demo',
                label: 'Demo',
                href: 'https://fatecafe.vercel.app/#/traducoes/tsukihime-remake',
              },
            },
            {
              title: 'Witch on the Holy Night',
              description: 'A pioneering project combining AI automation and high-standard literary revision to preserve a refined narrative style.',
              longDescription:
                'A localization project combining AI automation and literary revision, focused on preserving the original work\'s refined, poetic, and narrative style.\n\nKey skills:\n• Prompt engineering for high contextual accuracy.\n• Grammar refinement in formal standard language and elevated vocabulary.\n• Style analysis to avoid mechanical translations and preserve reading rhythm.',
              tech: ['Prompt Engineering', 'AI Automation', 'Formal Language', 'Textual Analysis'],
              image: 'game3',
              primaryAction: {
                type: 'youtube',
                label: 'YouTube',
                href: 'https://www.youtube.com/playlist?list=PL6dHvngBG8bomf_DftE3BdgQdNuoDLw1P',
              },
              secondaryAction: {
                type: 'demo',
                label: 'Demo',
                href: 'https://fatecafe.vercel.app/#/traducoes/mahou-tsukai-no-yoru',
              },
            },
          ],
        },
        {
          title: 'Content Creation',
          projects: [
            {
              title: 'Event Coverage',
              description: 'Documentary about the Anime Friends 2024 event journey, focused on community connection and channel behind-the-scenes.',
              tech: ['Scriptwriting', 'Editing', 'Storytelling', 'Teamwork'],
              thumbnail: 'y-DoblS-J6A',
              primaryAction: {
                type: 'youtube',
                label: 'YouTube',
                href: 'https://www.youtube.com/watch?v=y-DoblS-J6A&t=587s',
              },
            },
            {
              title: 'Live Championship',
              description: 'Organization, commentary, and live broadcast of a competitive Melty Blood: Type Lumina tournament, focused on community growth.',
              tech: ['Event Management', 'Streaming (OBS)', 'Communication'],
              thumbnail: 'VdlFNCfNmL0',
              primaryAction: {
                type: 'youtube',
                label: 'YouTube',
                href: 'https://www.youtube.com/watch?v=VdlFNCfNmL0&t=12460s',
              },
            },
            {
              title: 'Audiovisual Essay',
              description: 'Video essay focused on historical research, scriptwriting, and editing to explain the origin and viral spread of a classic fighting game mascot in internet culture.',
              tech: ['Content', 'Editing', 'Publishing'],
              thumbnail: 'ohtHvN2MKU8',
              primaryAction: {
                type: 'youtube',
                label: 'YouTube',
                href: 'https://www.youtube.com/watch?v=ohtHvN2MKU8',
              },
            },
          ],
        },
      ],
    },
    about: {
      title: 'About',
      eyebrow: 'Professional Profile',
      bio: 'Hello, my name is Thiago Krauzer. I am an IT professional and Information Systems graduate with experience in technical support, incident management, and corporate environment stability. I have hands-on experience with N1/N2 support, hardware and software troubleshooting, user provisioning, and clear communication focused on SLAs and user experience.',
      scrollHintLabel: 'Scroll to resume section',
      resumeTitle: 'Experience and Skills',
      resumeSubtitle: 'Resume summary focused on technical operations, execution, and result delivery in critical environments.',
      resumeSections: [
        {
          title: 'Professional Summary',
          items: [
            'Experience in technical support, user service, and incident resolution through ITSM workflows.',
            'Hands-on experience with Windows, macOS, Microsoft Office, Google Workspace, Active Directory, and MDM.',
            'Organized, communicative profile focused on continuous improvement and operational stability.',
          ],
        },
        {
          title: 'Education',
          items: ['Bachelor in Information Systems - UNINASSAU 2021/2024.'],
        },
        {
          title: 'Professional Experience',
          items: [
            'IT Technician | UNINASSAU (Feb/2025 - Present): incidents and service requests, remote/on-site support, provisioning, and technical documentation.',
            'Freelance IT Technician (PJ) | CERB Consulting (May/2025 - Mar/2026): on-demand support, asset inventory, and medium/high complexity incident resolution.',
            'IT Support Intern | Court of Justice of Rondônia (May/2022 - May/2024): N1/N2 support, infrastructure maintenance, and participation in critical systems.',
          ],
        },
        {
          title: 'Technical Skills',
          items: [
            'Incident and request management (Jira, Lecom), remote support, and troubleshooting.',
            'Windows Desktop/Server, macOS, Microsoft Office, Google Workspace, and Active Directory.',
            'Hardware maintenance, infrastructure support, asset inventory, and mobile device management (MDM).',
          ],
        },
        {
          title: 'Languages and Strengths',
          items: [
            'Native Portuguese and fluent English (C1 - CEFR).',
            'Empathetic communication, organization of multiple demands, and decision-making under pressure.',
            'Collaboration in hybrid/remote teams and fast learning of new tools.',
          ],
        },
      ],
      publicLinks: [
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/thiago-krauzer-74b83a206/',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/ThiagoKrz',
        },
      ],
      photoAlt: 'Photo of Thiago Krauzer',
    },
  },
}

export default content
