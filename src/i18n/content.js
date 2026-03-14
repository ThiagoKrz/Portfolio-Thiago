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
      eyebrow: 'Portfolio de Desenvolvedor Iniciante',
      titleLead: 'Oi, eu sou',
      name: 'Thiago Krauzer',
      primaryRole: 'Desenvolvedor',
      rotatingRoles: ['Editor de Video', 'Tradutor', 'Designer'],
      photoAlt: 'Foto de Thiago Krauzer',
      intro:
        'Construindo projetos em front-end com React e Vite, sempre evoluindo com foco em performance, clareza de codigo e boa experiencia para o usuario.',
      ctaProjects: 'Projetos',
      ctaBio: 'Sobre mim',
      highlightsTitle: 'Destaques',
      cards: [
        {
          title: 'Front-end em evolucao continua',
          text: 'Estudos diarios em React, componentizacao, hooks e consumo de APIs.',
        },
        {
          title: 'Traducao e adaptacao de conteudo',
          text: 'Experiencia em adaptar textos para publico tecnico e nao tecnico.',
        },
        {
          title: 'Comunicacao digital',
          text: 'Criacao de materiais com foco em clareza, alcance e contexto.',
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
      bio: 'Profissional de TI e graduando em Sistemas de Informacao, com atuacao em suporte tecnico, gestao de incidentes e estabilidade de ambiente corporativo. Experiencia com atendimento N1/N2, troubleshooting de hardware e software, provisionamento de usuarios e comunicacao clara com foco em SLA e experiencia do usuario.',
      scrollHintLabel: 'Rolar para a seção de currículo',
      resumeTitle: 'Experiência e Competências',
      resumeSubtitle: 'Resumo curricular com foco técnico, operação e entrega de resultados em ambientes de missão crítica.',
      resumeSections: [
        {
          title: 'Resumo Profissional',
          items: [
            'Atuacao em suporte tecnico, atendimento ao usuario e resolucao de incidentes via ITSM.',
            'Vivencia com Windows, MacOS, Microsoft Office, Google Workspace, Active Directory e MDM.',
            'Perfil organizado, comunicativo e orientado a melhoria continua e estabilidade operacional.',
          ],
        },
        {
          title: 'Formação Acadêmica',
          items: ['Bacharelado em Sistemas de Informacao - UNINASSAU 2021/2024.'],
        },
        {
          title: 'Experiência Profissional',
          items: [
            'Tecnico de Informatica | UNINASSAU (fev/2025 - atual): incidentes e service requests, suporte remoto/presencial, provisionamento e documentacao tecnica.',
            'Tecnico de TI Autonomo (PJ) | CERB Consulting (mai/2025 - mar/2026): suporte sob demanda, inventario de ativos e resolucao de incidentes de media/alta complexidade.',
            'Estagiario de Suporte de TI | Tribunal de Justica de Rondonia (mai/2022 - mai/2024): suporte N1/N2, manutencao de infraestrutura e participacao em sistemas criticos.',
          ],
        },
        {
          title: 'Competências Técnicas',
          items: [
            'Gestao de incidentes e requests (Jira, Lecom), suporte remoto e troubleshooting.',
            'Windows Desktop/Server, MacOS, Microsoft Office, Google Workspace e Active Directory.',
            'Manutencao de hardware, infraestrutura, inventario de ativos e gestao de dispositivos moveis (MDM).',
          ],
        },
        {
          title: 'Idiomas e Diferenciais',
          items: [
            'Portugues nativo e Ingles fluente (C1 - CEFR).',
            'Comunicacao empatica, organizacao de demandas multiplas e tomada de decisao sob pressao.',
            'Colaboracao em equipes hibridas/remotas e aprendizado rapido de novas ferramentas.',
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
      subtitle: 'My skills are organized into four main areas.',
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
      subtitle: 'A curated selection of projects in development, translation, and content creation.',
      sections: [
        {
          title: 'Development',
          projects: [
            {
              title: 'Fate Cafe React',
              description: 'A themed landing page focused on responsive layout and polished visual presentation.',
              longDescription:
                'Fate Cafe React is a hub designed to centralize Type-Moon data, translations, guides, and information in Portuguese. The project was built to offer clear navigation, comfortable reading, and a solid foundation for continuous content expansion.',
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
              description: 'A web project built around event presentation, information structure, and clean visual organization.',
              longDescription:
                'KrEventos is a web system focused on registering, organizing, and presenting events in a responsive interface. The project emphasizes structured information, easier readability, and a visual experience that stays objective, clean, and functional.',
              tech: ['React', 'JavaScript', 'CSS3'],
              image: 'proj2',
              primaryAction: {
                type: 'github',
                label: 'GitHub',
                href: 'https://github.com/ThiagoKrz/KrEventos',
              },
            },
            {
              title: 'AgendaClinicaSer Server',
              description: 'A clinical management back-end focused on routes, services, and application structure.',
              longDescription:
                'AgendaClinicaSer Server is a back-end project created to support clinical management flows, with a strong focus on route organization, services, and internal application structure. The project prioritizes architectural clarity, maintainability, and front-end integration readiness.',
              tech: ['Node.js', 'Express', 'REST API'],
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
              title: 'Fate/GO',
              description: 'A translation project focused on text adaptation, narrative context, and terminology consistency.',
              longDescription:
                'The Fate/GO translation project focuses on content adaptation with special attention to narrative context, terminology consistency, and final reading quality in Portuguese. The work includes coordination, review, and localization decisions meant to preserve identity and flow.',
              tech: ['Localization', 'Review', 'Terminology'],
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
              description: 'A translation and cultural adaptation effort focused on tone, readability, and fidelity.',
              longDescription:
                'Tsukihime Remake combines translation, textual adaptation, and editorial care to preserve tone, readability, and fidelity to the source material. The project aims to deliver natural Portuguese while keeping narrative nuances, style, and scene intent intact.',
              tech: ['Translation', 'Cultural adaptation', 'Text QA'],
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
              description: 'A localization project focused on player experience, clarity, and narrative context.',
              longDescription:
                'Witch on the Holy Night is a localization project centered on reading experience, textual clarity, and careful narrative adaptation. The work involves style choices, terminology management, and workflow automation to maintain consistency throughout the project.',
              tech: ['PT-BR Localization', 'Review', 'Terminology'],
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
              title: 'Content Video 01',
              description: 'Video content project focused on presentation, pacing, and clear information structure.',
              tech: ['Script', 'Editing', 'YouTube'],
              thumbnail: 'y-DoblS-J6A',
              primaryAction: {
                type: 'youtube',
                label: 'YouTube',
                href: 'https://www.youtube.com/watch?v=y-DoblS-J6A&t=587s',
              },
            },
            {
              title: 'Content Video 02',
              description: 'Long-form video production with attention to structure, communication, and audience retention.',
              tech: ['Presentation', 'Editing', 'Storytelling'],
              thumbnail: 'VdlFNCfNmL0',
              primaryAction: {
                type: 'youtube',
                label: 'YouTube',
                href: 'https://www.youtube.com/watch?v=VdlFNCfNmL0&t=12460s',
              },
            },
            {
              title: 'Content Video 03',
              description: 'Audiovisual project built to deliver content with clarity, pacing, and visual support.',
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
      bio: 'IT professional and Information Systems undergraduate with hands-on experience in technical support, incident management, and enterprise environment stability. Strong background in N1/N2 support, hardware/software troubleshooting, user provisioning, and clear communication focused on SLAs and user experience.',
      scrollHintLabel: 'Scroll to resume section',
      resumeTitle: 'Experience and Skills',
      resumeSubtitle: 'Public resume overview focused on technical operations and consistent delivery in critical environments.',
      resumeSections: [
        {
          title: 'Professional Summary',
          items: [
            'Experience with technical support, end-user service, and incident handling through ITSM workflows.',
            'Hands-on support across Windows, MacOS, Microsoft Office, Google Workspace, Active Directory, and MDM.',
            'Organized and user-focused profile with strong communication and operational discipline.',
          ],
        },
        {
          title: 'Education',
          items: ['Bachelor in Information Systems - UNINASSAU (graduated in 2025).'],
        },
        {
          title: 'Professional Experience',
          items: [
            'IT Technician | UNINASSAU (Feb/2025 - Present): incident/request handling, on-site and remote support, provisioning, and technical documentation.',
            'Freelance IT Technician (PJ) | CERB Consulting (May/2025 - Mar/2026): on-demand support projects, asset inventory, and medium/high complexity incidents.',
            'IT Support Intern | Court of Justice of Rondonia (May/2022 - May/2024): N1/N2 support, infrastructure maintenance, and critical system continuity.',
          ],
        },
        {
          title: 'Technical Skills',
          items: [
            'Incident/request management (Jira, Lecom), remote support, and troubleshooting.',
            'Windows Desktop/Server, MacOS, Microsoft Office, Google Workspace, and Active Directory.',
            'Hardware maintenance, infrastructure support, asset inventory, and mobile device management (MDM).',
          ],
        },
        {
          title: 'Languages and Strengths',
          items: [
            'Native Portuguese and fluent English (C1 - CEFR).',
            'Empathetic communication, prioritization, and pressure-ready problem solving.',
            'Collaboration in hybrid/remote teams and fast adoption of new tools.',
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
