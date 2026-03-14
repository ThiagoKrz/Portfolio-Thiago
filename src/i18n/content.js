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
                'Fate Café React é um hub criado para concentrar dados, traduções, guias e informações relacionadas ao universo Type-Moon em português. O projeto foi pensado para entregar navegação clara, leitura confortável e uma base sólida para expansão contínua de conteúdo.',
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
              title: 'Fate/GO',
              description: 'Projeto de tradução com foco em adaptação de texto, contexto narrativo e consistência terminológica.',
              longDescription:
                'O projeto de Fate/GO envolve tradução e adaptação de conteúdo com atenção especial ao contexto narrativo, consistência terminológica e qualidade final do texto em português. O trabalho inclui coordenação, revisão e decisões de localização pensadas para preservar identidade e fluidez.',
              tech: ["Liderança de equipe", 'Localização', 'Revisão', 'Terminologia'],
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
              description: 'Trabalho de tradução e adaptação textual com cuidado especial em fluidez, tom e fidelidade de conteúdo.',
              longDescription:
                'Tsukihime Remake reúne tradução, adaptação textual e cuidado editorial para manter tom, fluidez e fidelidade ao material original. O foco do projeto é entregar uma leitura natural em português sem perder nuances narrativas, estilo e intenção de cena.',
              tech: ["Liderança de equipe", 'Localização', 'Revisão', 'Terminologia'],
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
              description: 'Projeto de localização com foco em experiência do jogador, clareza de leitura e contexto narrativo.',
              longDescription:
                'Witch on the Holy Night é um projeto de localização voltado para experiência de leitura, clareza textual e adaptação cuidadosa do contexto narrativo. O trabalho envolve decisões de estilo, terminologia e automação de fluxo para manter consistência ao longo do projeto.',
              tech: ['Automação de Localização', 'Terminologia', "Português Formal"],
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
              title: 'Vídeo de Conteúdo 01',
              description: 'Conteúdo em vídeo com foco em apresentação, ritmo narrativo e organização clara da informação, e experiência.',
              tech: ['Roteiro', 'Edição', 'YouTube'],
              thumbnail: 'y-DoblS-J6A',
              primaryAction: {
                type: 'youtube',
                label: 'YouTube',
                href: 'https://www.youtube.com/watch?v=y-DoblS-J6A&t=587s',
              },
            },
            {
              title: 'Vídeo de Conteúdo 02',
              description: 'Produção de vídeo longa com atenção a estrutura de pauta, comunicação e retenção do público.',
              tech: ['Apresentação', 'Edição', 'Storytelling'],
              thumbnail: 'VdlFNCfNmL0',
              primaryAction: {
                type: 'youtube',
                label: 'YouTube',
                href: 'https://www.youtube.com/watch?v=VdlFNCfNmL0&t=12460s',
              },
            },
            {
              title: 'Vídeo de Conteúdo 03',
              description: 'Projeto audiovisual voltado para entrega de conteúdo com clareza, ritmo e suporte visual.',
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
      bio: 'Sou Thiago Krauzer, profissional em transicao para tecnologia, construindo uma base forte em desenvolvimento front-end com React. Tenho perfil multidisciplinar, unindo visao tecnica, traducao e comunicacao para criar experiencias digitais mais completas.',
      resumeTitle: 'Curriculo completo',
      resumeSubtitle: 'Espaco pronto para voce escrever seu curriculo detalhado a mao.',
      resumeParagraphs: [
        'Escreva aqui seu resumo profissional, experiencias, formacao, certificacoes, idiomas, conquistas e links relevantes.',
        'Sugestao: divida o conteudo em secoes com titulos claros para facilitar leitura por recrutadores.',
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
      bio: 'I am Thiago Krauzer, a professional transitioning into technology and building a solid foundation in front-end development with React. I have a multidisciplinary profile, combining technical perspective, translation, and communication to create more complete digital experiences.',
      resumeTitle: 'Full resume',
      resumeSubtitle: 'Space ready for you to write your full resume by hand.',
      resumeParagraphs: [
        'Write your professional summary, experience, education, certifications, languages, achievements, and relevant links here.',
        'Tip: split your content into clear sections to make it easier for recruiters to scan.',
      ],
      photoAlt: 'Photo of Thiago Krauzer',
    },
  },
}

export default content
