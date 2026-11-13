/* ============================================================================
   CARTÃO — REDAÇÃO
   Fluxo: 1 Edital e critérios → 2 Temas prováveis → 3 Escrever (opcional) →
          4 Correção (pedido pronto p/ enviar com a foto) e registro da nota
   Tudo roda no navegador; dados em localStorage ("cartao_redacao").
   A correção em si é feita no chat com o Claude (foto da redação + pedido gerado aqui).
   ============================================================================ */
(function () {
  "use strict";
  const KEY = "cartao_redacao";

  /* ----------------------------------------------------------- modelos de critérios */
  const PENAL_PADRAO = [
    "Fuga total ao tema, ou texto em outro gênero (poema, carta, narrativa): nota zero",
    "Texto com menos linhas que o mínimo exigido: desconto ou nota zero (conferir no edital)",
    "Identificação do candidato fora do local indicado: anulação (conferir no edital)",
    "Cópia dos textos motivadores: as linhas copiadas não contam",
    "Letra ilegível: trechos podem não ser avaliados"
  ];
  const MODELOS = {
    geral: {
      nome: "Dissertativo-argumentativo — modelo geral de banca",
      linhas: [20, 30],
      criterios: [
        { n: "Adequação ao tema e ao tipo textual", d: "Aborda o tema inteiro, sem fugir nem tangenciar, e mantém o gênero dissertativo-argumentativo (tese, argumentos, conclusão).", max: 30 },
        { n: "Desenvolvimento e argumentação", d: "Tese clara, argumentos consistentes e repertório (dados, leis, exemplos); proposta de intervenção, se pedida.", max: 30 },
        { n: "Organização, coesão e coerência", d: "Introdução, desenvolvimento e conclusão; parágrafos; conectivos; progressão sem contradição.", max: 20 },
        { n: "Norma culta", d: "Ortografia, acentuação, pontuação, concordância, regência, crase e registro formal.", max: 20 }
      ]
    },
    cebraspe: {
      nome: "Estilo Cebraspe — macro e microestrutura (aproximado)",
      linhas: [20, 30],
      criterios: [
        { n: "Apresentação e estrutura textual", d: "Legibilidade, margens, parágrafos, respeito ao limite de linhas, estrutura de texto dissertativo.", max: 10 },
        { n: "Desenvolvimento do tema (conteúdo)", d: "Domínio do tema, pertinência e profundidade dos argumentos, coerência e coesão do raciocínio.", max: 50 },
        { n: "Domínio da modalidade escrita (microestrutura)", d: "Ortografia, morfossintaxe, pontuação, escolha vocabular e registro. Em provas desse estilo, cada erro costuma descontar nota.", max: 40 }
      ]
    },
    curta: {
      nome: "Discursiva curta (resposta objetiva, ~15 a 20 linhas)",
      linhas: [15, 20],
      criterios: [
        { n: "Atendimento ao comando e ao tema", d: "Responde exatamente ao que foi pedido.", max: 40 },
        { n: "Clareza, objetividade e coesão", d: "Texto direto, bem encadeado, sem rodeios.", max: 30 },
        { n: "Norma culta", d: "Ortografia, pontuação, concordância e regência.", max: 30 }
      ]
    }
  };

  /* ----------------------------------------------------------- editais (reaproveita o plano) */
  const EDITAIS = [
    { id: "pmpe-soldado", nome: "PMPE — Soldado", eixos: ["seg", "dh", "soc", "tec", "pol", "edu", "reg"] },
    { id: "pmpe-oficial", nome: "PMPE — 2º Tenente (QOPM)", eixos: ["seg", "dh", "pol", "soc", "tec", "edu", "reg"] },
    { id: "cbmpe-soldado", nome: "CBMPE — Soldado", eixos: ["amb", "saude", "soc", "tec", "edu", "pol", "reg"] },
    { id: "cbmpe-oficial", nome: "CBMPE — 2º Tenente (QOC)", eixos: ["amb", "saude", "pol", "soc", "tec", "edu", "reg"] },
    { id: "outro", nome: "Outro concurso (judiciário, polícia civil/federal etc.)", eixos: ["seg", "dh", "pol", "soc", "tec", "edu", "saude", "amb"] }
  ];
  const EIXOS = {
    seg: "Segurança pública", dh: "Direitos humanos e cidadania", soc: "Violência e sociedade", tec: "Tecnologia e meio digital",
    pol: "Ética e instituições", edu: "Educação", saude: "Saúde", amb: "Meio ambiente e defesa civil", reg: "Pernambuco e Nordeste"
  };
  const PALAVRAS = [
    [/seguran|pol[ií]c|crim|penal|viol[eê]nc|penit|prisional/i, "seg"],
    [/direitos? humanos|cidadan|igualdade|discrimin|racis|g[eê]nero|mulher/i, "dh"],
    [/tecnolog|digital|internet|cibern|inform[aá]tica|redes sociais/i, "tec"],
    [/[eé]tica|servi[cç]o p[uú]blico|administra[cç][aã]o|probidade|corrup/i, "pol"],
    [/educa[cç][aã]o|escola|ensino/i, "edu"],
    [/sa[uú]de|sanit|epidem|primeiros socorros/i, "saude"],
    [/ambient|inc[eê]ndio|desastre|defesa civil|clim|salvamento|bombeir/i, "amb"],
    [/pernambuc|nordeste|recife/i, "reg"]
  ];

  /* ----------------------------------------------------------- temas prováveis */
  // t = enunciado no estilo de prova; tese = caminho possível; rep = repertório (conferir antes de usar)
  const TEMAS = [
    { t: "O papel da polícia comunitária na redução da violência urbana", txt: ["Policiar não é apenas perseguir quem já cometeu um crime. Quando agentes conhecem a rotina do bairro, os comerciantes, as escolas e as lideranças locais, passam a identificar problemas antes que eles virem ocorrência. A confiança entre comunidade e polícia funciona como uma forma silenciosa de prevenção.", "O art. 144 da Constituição Federal estabelece que a segurança pública é dever do Estado, direito e responsabilidade de todos. A norma, portanto, não coloca o cidadão como mero espectador: cabe também a ele colaborar, denunciar e participar das decisões que afetam o território em que vive."], e: ["seg", "soc"],
      tese: "A aproximação entre polícia e população fortalece a prevenção e a confiança, mais do que o policiamento apenas reativo.",
      rep: ["CF/88, art. 144: segurança pública é dever do Estado, direito e responsabilidade de todos", "Lei 13.675/2018 (SUSP) e o foco em prevenção", "Beccaria, Dos delitos e das penas: prevenir é melhor que punir"] },
    { t: "Os desafios do sistema prisional brasileiro e a ressocialização", txt: ["Em muitas unidades prisionais, pessoas dividem celas projetadas para um número bem menor de detentos, sem acesso regular a estudo ou trabalho. Ao deixar o sistema, parte delas volta a delinquir, e o ciclo recomeça com novas vítimas.", "A Lei de Execução Penal prevê que a execução da pena deve proporcionar condições para a integração social do condenado. Ao mesmo tempo, parte da população entende que o preso deve apenas cumprir castigo, o que torna o debate sobre a ressocialização um tema de grande disputa social."], e: ["seg", "dh", "soc"],
      tese: "Superlotação e ausência de trabalho e estudo dentro das unidades alimentam a reincidência; ressocializar é também segurança pública.",
      rep: ["Lei de Execução Penal (Lei 7.210/84): finalidade de reintegração social", "STF reconheceu estado de coisas inconstitucional no sistema prisional (ADPF 347)", "Foucault, Vigiar e Punir"] },
    { t: "Violência contra a mulher e os limites da legislação como solução", txt: ["Quando uma mulher consegue denunciar, a violência quase sempre já se arrastava por muito tempo. Medo, dependência financeira e vergonha costumam calar as vítimas, e a resposta do Estado muitas vezes chega depois do dano maior.", "A Lei Maria da Penha criou mecanismos como as medidas protetivas de urgência. Especialistas lembram, porém, que a lei sozinha não basta: sem delegacias preparadas, rede de acolhimento e educação que combata o machismo, o texto legal perde parte de sua eficácia."], e: ["dh", "soc", "seg"],
      tese: "Leis rigorosas são necessárias, mas só funcionam com rede de acolhimento, educação e fiscalização efetiva das medidas protetivas.",
      rep: ["Lei 11.340/2006 (Maria da Penha)", "Lei 13.104/2015 (feminicídio)", "CF/88, art. 226, §8º: Estado assegura assistência à família e coíbe a violência no âmbito de suas relações"] },
    { t: "Cibercrimes e a segurança no ambiente digital", txt: ["Golpes por aplicativo de mensagem, falsos sites de compra e vazamento de dados atingem pessoas de todas as idades. O criminoso age a distância, muitas vezes em outro estado ou país, e dificulta a identificação e a punição.", "O Marco Civil da Internet e a Lei Geral de Proteção de Dados estabelecem direitos e deveres no ambiente digital. Apesar disso, parte dos usuários ainda ignora cuidados básicos, como senhas fortes e desconfiança diante de ofertas muito vantajosas."], e: ["tec", "seg"],
      tese: "O crescimento de golpes e crimes virtuais exige educação digital, cooperação entre instituições e policiais especializados.",
      rep: ["Marco Civil da Internet (Lei 12.965/2014)", "LGPD (Lei 13.709/2018)", "Bauman, modernidade líquida: relações e riscos fluidos"] },
    { t: "O uso de câmeras corporais por policiais e a transparência da atuação policial", txt: ["As câmeras acopladas ao uniforme registram abordagens e ocorrências. Defensores do uso afirmam que as imagens protegem tanto o cidadão, contra eventuais abusos, quanto o policial, contra acusações sem fundamento.", "A Constituição determina que a administração pública obedeça ao princípio da publicidade e da eficiência. Para estudiosos, a tecnologia só cumpre esse papel se houver regras claras sobre quando gravar, por quanto tempo guardar as imagens e quem pode acessá-las."], e: ["seg", "pol", "tec", "dh"],
      tese: "As câmeras ampliam o controle e a proteção de cidadãos e agentes, desde que haja política clara de uso, guarda e acesso às imagens.",
      rep: ["Princípio da publicidade e da eficiência (CF/88, art. 37)", "Lei de Acesso à Informação (Lei 12.527/2011)", "Hobbes: poder do Estado exige limites para não virar arbítrio"] },
    { t: "Drogas e saúde pública: repressão, prevenção e tratamento", txt: ["O uso de drogas costuma ser tratado ora como caso de polícia, ora como caso de saúde. Quando o foco é apenas a repressão, o usuário dependente raramente encontra caminho para o tratamento, e o tráfico segue lucrando.", "A Constituição afirma que a saúde é direito de todos e dever do Estado. Profissionais da área defendem que prevenção nas escolas e acompanhamento na rede pública de saúde caminhem junto com o combate ao tráfico organizado."], e: ["seg", "saude", "soc"],
      tese: "O enfrentamento depende de articular repressão ao tráfico com prevenção nas escolas e tratamento na rede de saúde.",
      rep: ["Lei 11.343/2006 (Lei de Drogas)", "CF/88, art. 196: saúde é direito de todos e dever do Estado", "Durkheim: fatores sociais e anomia"] },
    { t: "Desigualdade social como fator de criminalidade", txt: ["Bairros com pouca infraestrutura, escolas precárias e escassez de emprego formam o cenário em que a violência encontra terreno fértil. Jovens sem perspectiva podem ser recrutados por grupos criminosos com promessa de renda imediata.", "Há quem alerte que associar pobreza e crime de forma automática é um erro: a maioria dos moradores de áreas vulneráveis não comete crimes e, com frequência, é a principal vítima. A discussão exige cuidado para não estigmatizar quem vive em situação de desigualdade."], e: ["soc", "dh", "seg"],
      tese: "A violência tem raízes em exclusão e falta de oportunidades; políticas sociais e segurança precisam andar juntas, sem determinismo simplista.",
      rep: ["CF/88, art. 3º: redução das desigualdades como objetivo fundamental", "Art. 6º: direitos sociais", "Bauman e a exclusão social"] },
    { t: "Bullying e cyberbullying: responsabilidade da escola, da família e do Estado", txt: ["A intimidação já não termina no portão da escola. Mensagens ofensivas, montagens e exposição de fotos em redes sociais podem alcançar a vítima a qualquer hora, inclusive dentro de casa, e deixar marcas profundas na autoestima.", "A Lei nº 13.185/2015 instituiu o Programa de Combate à Intimidação Sistemática. Educadores sustentam que o combate ao bullying exige diálogo com as famílias, formação dos professores e ações contínuas, e não apenas punições pontuais."], e: ["edu", "soc", "tec"],
      tese: "A intimidação sistemática exige prevenção na escola, atenção da família e responsabilização prevista em lei.",
      rep: ["Lei 13.185/2015 (combate à intimidação sistemática)", "ECA, Lei 8.069/90", "Paulo Freire: educação como prática de humanização"] },
    { t: "Fake news e seus impactos na democracia e na segurança", txt: ["Uma informação falsa pode circular por milhares de pessoas em minutos, muito antes de ser desmentida. Boatos sobre saúde, eleições e segurança já provocaram pânico, agressões e perda de confiança nas instituições.", "A Constituição protege a liberdade de expressão e veda a censura prévia. O desafio do debate público é combater a desinformação sem restringir a livre manifestação de ideias, o que torna a educação midiática uma ferramenta central."], e: ["tec", "pol", "soc"],
      tese: "A desinformação mina a confiança nas instituições; combatê-la pede educação midiática, responsabilização de plataformas e liberdade de expressão preservada.",
      rep: ["CF/88, art. 5º, IV e IX (liberdade de expressão) e art. 220", "Hannah Arendt: verdade factual e política", "Marco Civil da Internet"] },
    { t: "O uso excessivo de redes sociais e a saúde mental dos jovens", txt: ["Adolescentes passam horas diante de telas, comparando a própria vida com imagens cuidadosamente editadas de outras pessoas. Pesquisadores relacionam o uso sem limites a ansiedade, distúrbios do sono e queda de rendimento escolar.", "A Constituição determina prioridade absoluta à criança e ao adolescente, com dever compartilhado entre família, sociedade e Estado. Para muitos especialistas, a solução não passa pela proibição pura e simples, mas pelo uso mediado e orientado."], e: ["tec", "saude", "edu"],
      tese: "O uso sem mediação afeta saúde e aprendizado; cabe à família, à escola e ao poder público promover uso consciente.",
      rep: ["CF/88, art. 227: prioridade absoluta à criança e ao adolescente", "ECA", "Bauman, vínculos frágeis"] },
    { t: "Corrupção e ética no serviço público", txt: ["Quando recursos públicos são desviados, falta dinheiro para hospitais, escolas e viaturas. O dano da corrupção vai além do valor desviado, pois abala a confiança do cidadão no Estado.", "O art. 37 da Constituição exige que a administração pública obedeça aos princípios da legalidade, impessoalidade, moralidade, publicidade e eficiência. Servidores que atuam com ética tornam esses princípios realidade no cotidiano do atendimento ao público."], e: ["pol"],
      tese: "A corrupção desvia recursos da segurança, saúde e educação; transparência, controle social e educação ética são caminhos.",
      rep: ["CF/88, art. 37: legalidade, impessoalidade, moralidade, publicidade, eficiência", "Lei de Improbidade (Lei 8.429/92)", "Lei 12.527/2011 (LAI)"] },
    { t: "Direitos humanos e atuação policial: conflito ou complementaridade?", txt: ["Existe a ideia de que respeitar direitos humanos enfraquece a ação policial. Em sentido contrário, instituições de segurança que respeitam a lei ganham legitimidade e colaboração da população, o que facilita investigações e reduz conflitos.", "A dignidade da pessoa humana é fundamento da República, segundo a Constituição. Isso significa que a atuação do Estado, inclusive a de quem usa a força em seu nome, encontra limites e deve ser sempre proporcional e controlada."], e: ["dh", "seg", "pol"],
      tese: "Respeito aos direitos humanos legitima a ação policial e a torna mais eficaz, pois reforça a confiança da população.",
      rep: ["Declaração Universal dos Direitos Humanos (1948)", "CF/88, art. 1º, III (dignidade da pessoa humana) e art. 5º", "Bobbio, A era dos direitos"] },
    { t: "Racismo estrutural e abordagem policial", txt: ["A discriminação racial pode se manifestar de modo explícito, mas também de forma silenciosa, nas escolhas de quem é considerado suspeito, de quem é seguido numa loja ou de quem é abordado na rua. Esse padrão compromete a confiança entre população e polícia.", "A Constituição considera o racismo crime inafiançável e imprescritível. Especialistas defendem que treinamento, protocolos objetivos de abordagem e transparência na coleta de dados ajudam a reduzir o viés nas decisões do dia a dia."], e: ["dh", "seg", "soc"],
      tese: "A discriminação se reproduz nas instituições; treinamento, protocolos e transparência reduzem o viés na abordagem.",
      rep: ["CF/88, art. 5º, XLII (racismo é crime inafiançável e imprescritível)", "Lei 7.716/89", "Estatuto da Igualdade Racial (Lei 12.288/2010)"] },
    { t: "Proteção da criança e do adolescente contra a violência e a exploração", txt: ["Crianças e adolescentes são, muitas vezes, vítimas de violências que ocorrem dentro da própria casa ou em ambientes que deveriam protegê-los. O silêncio da vítima e o medo de denunciar dificultam a atuação das autoridades.", "O Estatuto da Criança e do Adolescente adota a doutrina da proteção integral. Na prática, ela exige a atuação articulada de família, escola, conselhos tutelares, serviços de saúde e polícia para que a denúncia se transforme em proteção real."], e: ["dh", "soc", "edu"],
      tese: "A proteção integral depende de rede articulada entre família, escola, conselhos tutelares e polícia.",
      rep: ["CF/88, art. 227", "ECA (Lei 8.069/90)", "Lei 14.811/2024 (medidas de proteção contra violência em estabelecimentos educacionais)"] },
    { t: "Envelhecimento da população e a proteção da pessoa idosa", txt: ["Com o aumento da expectativa de vida, o número de pessoas idosas cresce e traz novos desafios. Saúde, transporte, moradia e renda precisam acompanhar essa mudança, sob pena de transformar a longevidade em fonte de vulnerabilidade.", "O Estatuto da Pessoa Idosa assegura direitos como prioridade no atendimento e proteção contra negligência e violência. Mesmo assim, casos de abandono e de abuso financeiro dentro da própria família ainda desafiam o poder público."], e: ["dh", "saude", "soc"],
      tese: "O aumento da população idosa exige políticas de saúde, previdência e combate à violência e ao abandono.",
      rep: ["Estatuto da Pessoa Idosa (Lei 10.741/2003)", "CF/88, art. 230", "Norberto Bobbio e os direitos de grupos vulneráveis"] },
    { t: "Educação como instrumento de prevenção da criminalidade", txt: ["Escolas que mantêm o estudante por mais tempo, com atividades esportivas, culturais e acompanhamento, oferecem alternativas aos riscos da rua. A evasão escolar, por sua vez, costuma ser um dos primeiros sinais de afastamento de jovens de redes de proteção.", "A Constituição afirma que a educação visa ao pleno desenvolvimento da pessoa, ao preparo para a cidadania e à qualificação para o trabalho. A discussão que se coloca é como transformar esse princípio em ações concretas que reduzam a vulnerabilidade de jovens à criminalidade."], e: ["edu", "seg", "soc"],
      tese: "Escola em tempo integral, evasão baixa e cultura de paz reduzem a vulnerabilidade de jovens ao crime.",
      rep: ["CF/88, art. 205: educação visa ao pleno desenvolvimento da pessoa e ao preparo para a cidadania", "Paulo Freire", "Plano Nacional de Educação"] },
    { t: "Mudanças climáticas e eventos extremos: o papel da defesa civil", txt: ["Chuvas intensas, secas prolongadas e ondas de calor ficaram mais frequentes em diversas regiões do mundo. Comunidades que vivem em encostas ou áreas alagáveis estão entre as mais expostas, sobretudo quando faltam moradia segura e sistemas de alerta.", "A Política Nacional de Proteção e Defesa Civil prevê ações de prevenção, mitigação, preparação, resposta e recuperação. Para especialistas, o investimento em prevenção costuma custar menos do que a reconstrução depois da tragédia."], e: ["amb", "pol"],
      tese: "Enchentes, secas e deslizamentos exigem prevenção, alerta antecipado e preparo da população, e não apenas resposta ao desastre.",
      rep: ["Lei 12.608/2012 (Política Nacional de Proteção e Defesa Civil)", "CF/88, art. 225: meio ambiente ecologicamente equilibrado", "Acordo de Paris (2015)"] },
    { t: "Incêndios florestais e a responsabilidade ambiental", txt: ["Boa parte das queimadas tem origem em ação humana, seja por descuido, seja de forma intencional para abrir áreas. Em períodos de seca, o fogo se alastra com facilidade e atinge fauna, flora e a qualidade do ar de cidades distantes.", "A Constituição garante a todos o direito ao meio ambiente ecologicamente equilibrado e impõe ao poder público e à coletividade o dever de defendê-lo e preservá-lo. A Lei de Crimes Ambientais prevê sanções para quem provoca incêndios em florestas."], e: ["amb", "reg"],
      tese: "As queimadas combinam fatores climáticos e ação humana; fiscalização, punição e educação ambiental reduzem a ocorrência.",
      rep: ["CF/88, art. 225", "Lei de Crimes Ambientais (Lei 9.605/98)", "Código Florestal (Lei 12.651/2012)"] },
    { t: "Prevenção de incêndios e a cultura de segurança nas edificações", txt: ["Extintores vencidos, saídas de emergência bloqueadas e instalações elétricas improvisadas aumentam o risco de tragédias em prédios comerciais e residenciais. Muitas vezes, o problema é descoberto apenas depois de um acidente.", "Os corpos de bombeiros militares têm entre suas atribuições a prevenção e o combate a incêndios, por meio de vistorias e exigências técnicas. A efetividade dessas medidas depende de proprietários, empresas e moradores que levem a sério as orientações de segurança."], e: ["amb", "pol", "edu"],
      tese: "Exigir vistorias, treinamentos e planos de abandono evita tragédias; a prevenção deve virar hábito do cidadão e da empresa.",
      rep: ["Competência do corpo de bombeiros militar na prevenção (CF/88, art. 144, §5º)", "Segurança como dever coletivo (art. 144, caput)", "Exemplos de grandes incêndios que mudaram a legislação"] },
    { t: "A importância dos primeiros socorros ensinados à população", txt: ["Nos primeiros minutos de um engasgo, de uma parada cardíaca ou de um acidente doméstico, a atitude de quem está por perto pode salvar uma vida antes da chegada do socorro profissional. Poucas pessoas, porém, sabem agir com segurança nesses momentos.", "A Lei nº 13.722/2018, conhecida como Lei Lucas, tornou obrigatória a capacitação em noções de primeiros socorros para profissionais de escolas e estabelecimentos de recreação infantil. Há quem defenda ampliar essa formação para toda a população."], e: ["saude", "edu", "amb"],
      tese: "Noções básicas de primeiros socorros salvam vidas antes da chegada do resgate e deveriam ser ensinadas nas escolas e no trabalho.",
      rep: ["Lei 13.722/2018 (Lei Lucas): capacitação em primeiros socorros em escolas e estabelecimentos de recreação infantil", "CF/88, art. 196", "Princípio da solidariedade (art. 3º, I)"] },
    { t: "Os desafios do Sistema Único de Saúde e o acesso universal", txt: ["O Sistema Único de Saúde atende desde procedimentos simples até transplantes e vacinação em massa. Mesmo assim, filas de espera, falta de profissionais e desigualdades regionais mostram que o princípio do acesso universal ainda enfrenta obstáculos.", "A Constituição estabelece a saúde como direito de todos e dever do Estado. O debate público costuma se concentrar em como financiar e gerir um sistema tão grande de modo a garantir atendimento de qualidade em todo o território."], e: ["saude", "pol"],
      tese: "O SUS é conquista constitucional, mas sofre com subfinanciamento e desigualdade regional; gestão e financiamento são o ponto central.",
      rep: ["CF/88, arts. 196 a 200", "Lei 8.080/90", "Pandemia de covid-19 e o papel do SUS"] },
    { t: "Saúde mental e o bem-estar de profissionais de segurança e resgate", txt: ["Policiais e bombeiros presenciam com frequência cenas de violência, acidentes e perdas. Essa exposição contínua, somada a escalas pesadas e à pressão por resultados, pode levar a estresse, ansiedade e depressão.", "A dignidade da pessoa humana e o direito à saúde se aplicam também a quem trabalha na proteção da sociedade. Em corporações que oferecem apoio psicológico regular, o cuidado com o profissional é visto como investimento na qualidade do serviço prestado à população."], e: ["saude", "seg", "amb"],
      tese: "Policiais e bombeiros enfrentam estresse extremo; apoio psicológico contínuo é política de eficiência, não privilégio.",
      rep: ["Dignidade da pessoa humana (CF/88, art. 1º, III)", "CF/88, art. 196", "Durkheim e os fatores sociais do suicídio"] },
    { t: "Trânsito violento: educação, fiscalização e responsabilidade", txt: ["Excesso de velocidade, uso do celular ao volante e mistura de álcool com direção figuram entre as causas mais comuns de acidentes. Além das mortes, muitas vítimas ficam com sequelas permanentes, o que sobrecarrega famílias e sistemas de saúde.", "O Código de Trânsito Brasileiro prevê penalidades para infrações e crimes de trânsito, e a chamada Lei Seca endureceu as regras sobre álcool e direção. Para especialistas, a punição só funciona se vier acompanhada de fiscalização constante e de educação para o trânsito."], e: ["seg", "saude", "edu"],
      tese: "Os acidentes de trânsito são um problema de saúde e segurança públicas; educação e fiscalização rigorosa reduzem mortes.",
      rep: ["Código de Trânsito Brasileiro (Lei 9.503/97)", "Lei Seca (Lei 11.705/2008)", "Década de Ação pela Segurança no Trânsito (ONU)"] },
    { t: "Armas de fogo e o debate sobre controle", txt: ["Para uns, o acesso facilitado a armas permite que o cidadão se proteja. Para outros, mais armas em circulação aumentam o risco de acidentes domésticos, de conflitos cotidianos que terminam em morte e de desvio para o crime.", "O Estatuto do Desarmamento disciplina o registro, a posse e o porte de armas de fogo. A discussão envolve o direito à segurança, previsto na Constituição, e a necessidade de que as decisões se baseiem em evidências e em fiscalização eficiente."], e: ["seg", "pol", "soc"],
      tese: "O debate envolve direito à segurança e risco de ampliar a violência; qualquer posição exige análise de evidências e fiscalização.",
      rep: ["Estatuto do Desarmamento (Lei 10.826/2003)", "CF/88, art. 5º, caput (direito à vida e à segurança)", "Hobbes: monopólio da força pelo Estado"] },
    { t: "Segurança pública no interior: a interiorização da violência e do policiamento", txt: ["Cidades pequenas e médias, antes vistas como mais tranquilas, passaram a registrar aumento de violência. Em muitas delas, o número de policiais e a estrutura de atendimento continuam semelhantes ao de décadas atrás.", "A Lei nº 13.675/2018 criou o Sistema Único de Segurança Pública, com a proposta de integrar órgãos e ações. Entre os desafios está a distribuição de recursos e de efetivo de forma que o interior também seja contemplado."], e: ["seg", "reg", "soc"],
      tese: "A violência migrou das capitais para cidades médias e pequenas, que têm menos efetivo e estrutura; é preciso redistribuir recursos e integrar polícias.",
      rep: ["CF/88, art. 144", "Lei 13.675/2018 (SUSP)", "Desigualdades regionais no Nordeste"] },
    { t: "Seca, convivência com o semiárido e a segurança hídrica no Nordeste", txt: ["No semiárido nordestino, a escassez de chuvas convive com soluções que melhoram a vida das famílias, como cisternas para armazenar água e técnicas de manejo adaptadas ao clima. O desafio é ampliar esse acesso a quem ainda depende de carro-pipa.", "A Constituição elege a redução das desigualdades regionais como objetivo da República. Para estudiosos, a convivência com a seca depende menos de soluções emergenciais e mais de políticas permanentes de acesso à água e de desenvolvimento local."], e: ["reg", "amb", "soc"],
      tese: "A convivência com o semiárido depende de tecnologias de captação, políticas hídricas e combate à desigualdade, e não de assistencialismo.",
      rep: ["Cisternas e programas de convivência com o semiárido", "Obra de Josué de Castro, Geografia da Fome", "CF/88, art. 225 e art. 3º, III (redução das desigualdades regionais)"] },
    { t: "Pernambuco: patrimônio cultural, identidade e o papel do Estado em sua preservação", txt: ["Frevo, maracatu, cavalo-marinho e os casarios históricos formam um conjunto que expressa a identidade de Pernambuco. Quando a transmissão desses saberes depende apenas de poucos mestres, corre-se o risco de que se percam com a nova geração.", "A Constituição determina que o Estado garanta a todos o pleno exercício dos direitos culturais e proteja as manifestações das culturas populares. A preservação do patrimônio exige políticas públicas, mas também a participação das comunidades que o mantêm vivo."], e: ["reg", "edu", "pol"],
      tese: "Preservar frevo, maracatu e o patrimônio histórico exige políticas públicas, educação patrimonial e participação da comunidade.",
      rep: ["CF/88, arts. 215 e 216 (cultura e patrimônio)", "Frevo, patrimônio imaterial reconhecido pela Unesco", "Gilberto Freyre e Ariano Suassuna"] },
    { t: "Inteligência artificial no trabalho e na segurança: oportunidades e riscos", txt: ["Programas de inteligência artificial já ajudam a analisar grandes volumes de dados, identificar padrões de crimes e agilizar tarefas repetitivas. Ao mesmo tempo, sistemas treinados com dados enviesados podem repetir preconceitos e errar de forma injusta.", "A Lei Geral de Proteção de Dados e a garantia constitucional à intimidade e à proteção de dados pessoais impõem limites ao uso dessas ferramentas. Defende-se, por isso, que decisões de grande impacto sempre contem com supervisão humana."], e: ["tec", "pol", "seg"],
      tese: "A IA melhora análise e prevenção, mas pode reproduzir vieses e ameaçar a privacidade; exige regulação e supervisão humana.",
      rep: ["LGPD (Lei 13.709/2018)", "CF/88, art. 5º, X (privacidade) e LXXIX (proteção de dados)", "Hannah Arendt e a responsabilidade humana"] },
    { t: "Participação social e controle da atuação do Estado: o papel do cidadão", txt: ["Conselhos municipais, ouvidorias e audiências públicas permitem que o cidadão acompanhe e questione as ações do Estado. Quando poucas pessoas participam, as decisões tendem a refletir apenas os interesses dos grupos mais organizados.", "A Constituição afirma que todo o poder emana do povo, que o exerce por representantes eleitos ou diretamente. A Lei de Acesso à Informação reforça esse princípio ao garantir que dados públicos possam ser consultados por qualquer pessoa."], e: ["pol", "dh"],
      tese: "Conselhos, ouvidorias, denúncia e voto fortalecem a democracia; o cidadão deve ser agente, e não só destinatário.",
      rep: ["CF/88, art. 1º, parágrafo único (todo poder emana do povo)", "Lei de Acesso à Informação", "Montesquieu: poder limita poder"] },
    { t: "Trabalho, desemprego e violência entre os jovens", txt: ["Jovens sem emprego e sem qualificação enfrentam dificuldades para planejar o futuro. Em contextos de pouca oportunidade, aumentam as chances de aproximação com atividades ilegais ou de situações de risco.", "O Estatuto da Juventude reconhece direitos como a educação, a profissionalização e o trabalho. A discussão atual passa por como ampliar o primeiro emprego e os cursos de formação sem precarizar as relações de trabalho."], e: ["soc", "edu", "seg"],
      tese: "A falta de emprego e de qualificação eleva a vulnerabilidade de jovens; programas de primeiro emprego e formação reduzem riscos.",
      rep: ["CF/88, art. 6º e art. 7º", "Estatuto da Juventude (Lei 12.852/2013)", "Dados de jovens que não estudam nem trabalham"] }
  ];

  /* ----------------------------------------------------------- estado */
  const vazio = () => ({
    passo: 1, edital: null, modelo: "geral", criterios: null, penal: PENAL_PADRAO.slice(),
    linhasMin: 20, linhasMax: 30, textoEdital: "", tema: "", temaCustom: "", texto: "", historico: [], filtroEixo: "prov"
  });
  let R = carregar() || vazio();
  function carregar() { try { const s = JSON.parse(localStorage.getItem(KEY)); return s ? Object.assign(vazio(), s) : null; } catch (e) { return null; } }
  function salvar() { try { localStorage.setItem(KEY, JSON.stringify(R)); } catch (e) { /* sem storage */ } }
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const root = () => document.getElementById("redacaoRoot");
  const criterios = () => R.criterios || MODELOS[R.modelo].criterios.map(c => Object.assign({}, c));
  const totalMax = () => criterios().reduce((a, c) => a + (Number(c.max) || 0), 0);
  const temaAtual = () => (R.tema === "__custom" ? R.temaCustom : R.tema || "").trim();

  /* ----------------------------------------------------------- lógica */
  function eixosDoEdital() {
    const ed = EDITAIS.find(e => e.id === R.edital);
    const base = ed ? ed.eixos : [];
    const achados = [];
    PALAVRAS.forEach(([re, eixo]) => { if (re.test(R.textoEdital) && !achados.includes(eixo)) achados.push(eixo); });
    return { base, achados };
  }
  function temasRankeados() {
    const { base, achados } = eixosDoEdital();
    return TEMAS.map(t => {
      let s = 0;
      t.e.forEach(x => {
        const i = base.indexOf(x);
        if (i >= 0) s += Math.max(1, 7 - i);
        if (achados.includes(x)) s += 6;
      });
      return { t, s };
    }).sort((a, b) => b.s - a.s);
  }
  function detectarLinhas(txt) {
    let m = txt.match(/(\d{1,2})\s*(?:a|e|até|–|-)\s*(\d{1,2})\s*linhas/i);
    if (m) return [Math.min(+m[1], +m[2]), Math.max(+m[1], +m[2])];
    m = txt.match(/m[ií]nimo\s+de\s+(\d{1,2})\s*(?:\(.*?\)\s*)?linhas?/i);
    const mx = txt.match(/m[aá]ximo\s+de\s+(\d{1,2})\s*(?:\(.*?\)\s*)?linhas?/i);
    if (m && mx) return [+m[1], +mx[1]];
    return null;
  }
  const palavras = s => (s.trim().match(/\S+/g) || []).length;

  function montarPedido() {
    const crit = criterios();
    const ed = EDITAIS.find(e => e.id === R.edital);
    const L = [];
    L.push("Quero que você CORRIJA a redação da foto anexa, como a banca corrigiria, e me diga a nota que eu tiraria.", "");
    L.push("CONCURSO: " + (ed ? ed.nome : "(não informado)"));
    L.push("TEMA ESCOLHIDO: " + (temaAtual() || "(informe aqui o tema)"));
    L.push("EXTENSÃO EXIGIDA: " + R.linhasMin + " a " + R.linhasMax + " linhas");
    L.push("", "CRITÉRIOS E PONTUAÇÃO (nota máxima " + totalMax() + "):");
    crit.forEach((c, i) => L.push((i + 1) + ". " + c.n + " — até " + c.max + " pts. " + c.d));
    if (R.penal.length) { L.push("", "PENALIDADES / REGRAS ELIMINATÓRIAS:"); R.penal.forEach(p => L.push("- " + p)); }
    const tm = TEMAS.find(x => x.t === R.tema);
    if (tm && tm.txt) L.push("", "TEXTOS MOTIVADORES DA PROPOSTA:", "Texto I: " + tm.txt[0], "Texto II: " + tm.txt[1]);
    if (R.textoEdital.trim()) L.push("", "TRECHO DO EDITAL SOBRE A REDAÇÃO (se divergir dos critérios acima, vale o edital):", R.textoEdital.trim());
    if (R.texto.trim()) L.push("", "TEXTO DIGITADO POR MIM (se a foto estiver ilegível, use este):", R.texto.trim());
    L.push("", "COMO RESPONDER:",
      "1) Transcreva o que leu na foto (aponte trechos ilegíveis).",
      "2) Dê a nota de cada critério, com justificativa curta e citando trechos.",
      "3) Liste os erros de norma culta (ortografia, pontuação, concordância, crase, regência) com a correção.",
      "4) Diga se houve fuga ao tema ou ao tipo textual e quantas linhas escrevi.",
      "5) Mostre a nota final e o que eu faria para subir a nota.",
      "6) Avise que a nota é uma estimativa e que a banca pode ser mais rígida ou mais branda.");
    return L.join("\n");
  }

  /* ----------------------------------------------------------- render */
  const PASSOS = ["Edital e critérios", "Temas prováveis", "Escrever", "Correção"];
  function render() {
    const r = root(); if (!r) return;
    const barra = `<div class="pl-steps">${PASSOS.map((n, i) => {
      const p = i + 1;
      const bloqueado = p > 1 && !R.edital;
      return `<button class="pl-step ${R.passo === p ? "active" : ""} ${R.passo > p ? "done" : ""}" data-rd-passo="${p}" ${bloqueado ? "disabled" : ""}><span class="pl-step-n">${p}</span>${n}</button>`;
    }).join("")}</div>`;
    const corpo = [null, p1, p2, p3, p4][R.passo]();
    r.innerHTML = `<div class="rd-head"><h2>✍️ Redação</h2><p class="hint">Escolha o edital, veja os temas mais prováveis, treine e envie a foto da sua redação para receber a correção com os critérios da prova.</p></div>` + barra + corpo;
    ligar();
  }

  function p1() {
    const crit = criterios();
    const dt = detectarLinhas(R.textoEdital);
    return `
    <div class="card">
      <h3>1. Qual é o seu concurso?</h3>
      <div class="pl-editais">${EDITAIS.map(e => `<button class="pl-edital ${R.edital === e.id ? "sel" : ""}" data-rd-edital="${e.id}"><b>${esc(e.nome)}</b></button>`).join("")}</div>
      <label class="pl-lbl">Cole aqui o trecho do edital sobre a prova de redação (critérios, pontuação, número de linhas)
        <textarea id="rdEdital" rows="5" placeholder="Ex.: A prova discursiva valerá 20 pontos... texto de 20 a 30 linhas... serão avaliados: ...">${esc(R.textoEdital)}</textarea>
      </label>
      <p class="hint" id="rdDetect">${dt ? `🔎 Encontrei "${dt[0]} a ${dt[1]} linhas" no texto e usei como extensão.` : "Se o edital trouxer outros critérios, ajuste a tabela abaixo ou cole o trecho: ele vai junto no pedido de correção e vale mais que o modelo."}</p>
    </div>
    <div class="card">
      <h3>Critérios de pontuação</h3>
      <p class="hint">Modelos aproximados, escritos de memória: confira com o seu edital e edite os pontos à vontade.</p>
      <div class="pl-row" style="margin-bottom:10px">${Object.keys(MODELOS).map(k => `<button class="btn btn-sm ${R.modelo === k && !R.criterios ? "btn-accent" : "btn-ghost"}" data-rd-modelo="${k}">${esc(MODELOS[k].nome)}</button>`).join("")}</div>
      <div class="rd-crit">${crit.map((c, i) => `
        <div class="rd-crit-row">
          <div><input class="rd-in" data-rd-cn="${i}" value="${esc(c.n)}"><textarea class="rd-in" rows="2" data-rd-cd="${i}">${esc(c.d)}</textarea></div>
          <label>pts<input type="number" min="0" class="rd-pts" data-rd-cm="${i}" value="${c.max}"></label>
          <button class="btn btn-ghost btn-sm" data-rd-delcrit="${i}" title="Remover critério">✕</button>
        </div>`).join("")}</div>
      <div class="pl-row"><button class="btn btn-ghost btn-sm" id="rdAddCrit">+ Critério</button><strong id="rdTotal">Total: ${totalMax()} pontos</strong></div>
      <div class="pl-row" style="margin-top:12px">
        <label>Linhas: mín <input type="number" class="rd-pts" id="rdLMin" min="1" value="${R.linhasMin}"></label>
        <label>máx <input type="number" class="rd-pts" id="rdLMax" min="1" value="${R.linhasMax}"></label>
      </div>
      <h4 style="margin:14px 0 6px">Penalidades e regras eliminatórias</h4>
      <textarea class="rd-in" id="rdPenal" rows="5">${esc(R.penal.join("\n"))}</textarea>
      <p class="hint">Uma por linha. Confira no edital o que realmente zera ou desconta.</p>
    </div>
    <div class="pl-nav"><span></span><button class="btn btn-accent" id="rdIr2" ${R.edital ? "" : "disabled"}>Ver temas prováveis →</button></div>`;
  }

  function propostaHtml(t) {
    if (!t || !t.txt) return "";
    return `<div class="rd-prova">
      <div class="rd-prova-h">PROPOSTA DE REDAÇÃO</div>
      <p class="rd-cmd">A partir da leitura dos textos motivadores seguintes e com base nos conhecimentos construídos ao longo de sua formação, redija texto dissertativo-argumentativo sobre o tema <b>“${esc(t.t)}”</b>, apresentando proposta de intervenção que respeite os direitos humanos. Selecione, organize e relacione, de forma coerente e coesa, argumentos e fatos para defesa de seu ponto de vista. Escreva de ${R.linhasMin} a ${R.linhasMax} linhas.</p>
      <div class="rd-txt"><b>TEXTO I</b><p>${esc(t.txt[0])}</p></div>
      <div class="rd-txt"><b>TEXTO II</b><p>${esc(t.txt[1])}</p></div>
      <small class="hint">Textos elaborados para este treino, no estilo das coletâneas de prova. Servem de referência e não são trechos de provas reais.</small>
    </div>`;
  }
  function grupoTemas() {
    const rank = temasRankeados().map(x => x.t);
    const f = R.filtroEixo;
    if (f === "todos") return rank;
    if (f === "prov" || !EIXOS[f]) return rank.slice(0, 8);
    return rank.filter(t => t.e.includes(f));
  }
  function p2() {
    const { achados } = eixosDoEdital();
    const grupo = grupoTemas();
    const t = TEMAS.find(x => x.t === R.tema);
    const f = R.filtroEixo;
    const cardTema = t ? `<div class="rd-tema sel">
        <div class="rd-tema-t">${esc(t.t)}</div>
        <div class="rd-tags">${t.e.map(x => `<span>${esc(EIXOS[x])}</span>`).join("")}</div>
        <p><b>Caminho de tese:</b> ${esc(t.tese)}</p>
        <p><b>Repertório:</b> ${t.rep.map(esc).join(" · ")}</p>
      </div>${propostaHtml(t)}` : (R.tema === "__custom" && R.temaCustom ? `<div class="rd-tema sel"><div class="rd-tema-t">${esc(R.temaCustom)}</div><p class="hint">Tema digitado por você.</p></div>` : `<p class="hint">Escolha um tema nos menus acima ou clique em sortear.</p>`);
    return `
    <div class="card">
      <h3>2. Tema da redação</h3>
      <p class="hint">Os temas são previsões a partir do que as bancas costumam cobrar${achados.length ? " e do edital colado (" + achados.map(a => EIXOS[a]).join(", ") + ")" : ""}, não garantia. Confira as leis citadas antes de usar na prova.</p>
      <div class="rd-menus">
        <label>Assunto
          <select id="rdFiltro" class="rd-in">
            <option value="prov" ${f === "prov" || !EIXOS[f] && f !== "todos" ? "selected" : ""}>⭐ Mais prováveis para o meu concurso</option>
            <option value="todos" ${f === "todos" ? "selected" : ""}>Todos os temas</option>
            ${Object.keys(EIXOS).map(k => `<option value="${k}" ${f === k ? "selected" : ""}>${esc(EIXOS[k])}</option>`).join("")}
          </select>
        </label>
        <label>Tema
          <select id="rdSelTema" class="rd-in">
            <option value="">Selecione um tema…</option>
            ${grupo.map(x => `<option value="${esc(x.t)}" ${R.tema === x.t ? "selected" : ""}>${esc(x.t)}</option>`).join("")}
          </select>
        </label>
        <button class="btn btn-accent" id="rdSortear">🎲 Sortear</button>
      </div>
      ${cardTema}
      <details class="rd-custom"><summary>Tenho outro tema</summary>
        <input class="rd-in" id="rdTemaCustom" placeholder="Digite o tema do seu treino" value="${esc(R.temaCustom)}">
        <div class="pl-row" style="margin-top:8px"><button class="btn btn-ghost btn-sm" id="rdUsarCustom">Usar este tema</button></div>
      </details>
    </div>
    <div class="pl-nav"><button class="btn btn-ghost" data-rd-passo="1">← Critérios</button><button class="btn btn-accent" id="rdIr3" ${temaAtual() ? "" : "disabled"}>Escrever →</button></div>`;
  }

  function p3() {
    const n = palavras(R.texto);
    return `
    <div class="card">
      <h3>3. Hora de escrever</h3>
      <p><b>Tema:</b> ${esc(temaAtual() || "(escolha um tema no passo 2)")}</p>
      <details class="rd-custom"><summary>Ver proposta e textos motivadores</summary>${propostaHtml(TEMAS.find(x => x.t === R.tema)) || '<p class="hint">Tema próprio: sem coletânea.</p>'}</details>
      <p class="hint">Escreva à mão, na folha, como na prova (essa é a que vale). Se quiser, também pode digitar abaixo para contar palavras. Isso é opcional.</p>
      <div class="pl-row"><button class="btn btn-ghost btn-sm" id="rdCron">⏱ <span id="rdCronTxt">Cronômetro: 00:00</span></button><span class="hint">Meta de prova: ${R.linhasMin} a ${R.linhasMax} linhas, normalmente em 1 hora.</span></div>
      <textarea class="rd-in" id="rdTexto" rows="14" placeholder="Digite aqui se quiser (opcional)…" style="margin-top:10px">${esc(R.texto)}</textarea>
      <p class="hint" id="rdContagem">${n} palavras · cerca de ${Math.round(n / 11)} linhas manuscritas (estimativa de 11 palavras por linha)</p>
    </div>
    <div class="pl-nav"><button class="btn btn-ghost" data-rd-passo="2">← Temas</button><button class="btn btn-accent" id="rdIr4">Ir para a correção →</button></div>`;
  }

  function p4() {
    const crit = criterios();
    const hist = R.historico.slice().reverse();
    const media = R.historico.length ? (R.historico.reduce((a, h) => a + h.nota / h.max * 100, 0) / R.historico.length) : null;
    return `
    <div class="card">
      <h3>4. Correção</h3>
      <ol class="rd-ol">
        <li>Clique em <b>Copiar pedido de correção</b>.</li>
        <li>Abra a conversa com o Claude, cole o texto e <b>anexe a foto da redação</b>.</li>
        <li>Volte aqui e registre a nota de cada critério para acompanhar sua evolução.</li>
      </ol>
      <p class="hint">A correção é feita no chat, não dentro do site, porque o site não envia fotos para o Claude. O pedido já leva o tema, os critérios, os pontos e as penalidades.</p>
      <textarea class="rd-in" id="rdPedido" rows="12" readonly>${esc(montarPedido())}</textarea>
      <div class="pl-row" style="margin-top:8px"><button class="btn btn-accent" id="rdCopiar">📋 Copiar pedido de correção</button><span class="hint" id="rdCopiado"></span></div>
    </div>
    <div class="card">
      <h3>Registrar a nota</h3>
      <p><b>Tema:</b> ${esc(temaAtual() || "—")}</p>
      <div class="rd-crit">${crit.map((c, i) => `<div class="rd-crit-row rd-nota"><div><b>${esc(c.n)}</b></div><label><input type="number" class="rd-pts" min="0" max="${c.max}" step="0.5" data-rd-nota="${i}"> / ${c.max}</label></div>`).join("")}</div>
      <div class="pl-row"><strong id="rdSoma">Total: 0 / ${totalMax()}</strong><button class="btn btn-accent btn-sm" id="rdSalvarNota">Salvar na evolução</button></div>
    </div>
    <div class="card">
      <h3>Minha evolução</h3>
      ${hist.length ? `<p class="hint">${hist.length} redação(ões) · média de aproveitamento: ${media.toFixed(0)}%</p>
        <div class="rd-hist">${hist.map(h => `<div class="rd-hist-row"><div><b>${esc(h.tema)}</b><br><small>${esc(h.data)}</small></div><div class="rd-bar"><i style="width:${Math.min(100, h.nota / h.max * 100)}%"></i></div><b>${h.nota}/${h.max}</b><button class="btn btn-ghost btn-sm" data-rd-delhist="${h.id}" title="Apagar">✕</button></div>`).join("")}</div>`
        : `<p class="hint">Quando salvar a primeira nota, ela aparece aqui.</p>`}
    </div>
    <div class="pl-nav"><button class="btn btn-ghost" data-rd-passo="3">← Escrever</button><button class="btn btn-ghost" id="rdNovo">Novo treino (outro tema)</button></div>`;
  }

  /* ----------------------------------------------------------- eventos */
  let cron = null, cronS = 0;
  function ligar() {
    const r = root();
    const $ = s => r.querySelector(s), $$ = s => r.querySelectorAll(s);
    $$("[data-rd-passo]").forEach(b => b.addEventListener("click", () => { if (b.disabled) return; R.passo = +b.dataset.rdPasso; salvar(); render(); }));
    $$("[data-rd-edital]").forEach(b => b.addEventListener("click", () => { R.edital = b.dataset.rdEdital; salvar(); render(); }));
    $$("[data-rd-modelo]").forEach(b => b.addEventListener("click", () => {
      R.modelo = b.dataset.rdModelo; R.criterios = null;
      R.linhasMin = MODELOS[R.modelo].linhas[0]; R.linhasMax = MODELOS[R.modelo].linhas[1]; salvar(); render();
    }));
    const ed = $("#rdEdital");
    if (ed) ed.addEventListener("change", () => {
      R.textoEdital = ed.value;
      const d = detectarLinhas(ed.value); if (d) { R.linhasMin = d[0]; R.linhasMax = d[1]; }
      salvar(); render();
    });
    const lerCrit = () => {
      const c = criterios();
      $$("[data-rd-cn]").forEach(e => { c[+e.dataset.rdCn].n = e.value; });
      $$("[data-rd-cd]").forEach(e => { c[+e.dataset.rdCd].d = e.value; });
      $$("[data-rd-cm]").forEach(e => { c[+e.dataset.rdCm].max = Math.max(0, Number(e.value) || 0); });
      R.criterios = c; salvar(); return c;
    };
    $$("[data-rd-cn],[data-rd-cd]").forEach(e => e.addEventListener("change", lerCrit));
    $$("[data-rd-cm]").forEach(e => e.addEventListener("input", () => { lerCrit(); $("#rdTotal").textContent = "Total: " + totalMax() + " pontos"; }));
    $$("[data-rd-delcrit]").forEach(b => b.addEventListener("click", () => { const c = lerCrit(); c.splice(+b.dataset.rdDelcrit, 1); R.criterios = c; salvar(); render(); }));
    const add = $("#rdAddCrit"); if (add) add.addEventListener("click", () => { const c = lerCrit(); c.push({ n: "Novo critério", d: "", max: 10 }); R.criterios = c; salvar(); render(); });
    const lmin = $("#rdLMin"), lmax = $("#rdLMax");
    if (lmin) { lmin.addEventListener("change", () => { R.linhasMin = Math.max(1, +lmin.value || 1); salvar(); }); lmax.addEventListener("change", () => { R.linhasMax = Math.max(1, +lmax.value || 1); salvar(); }); }
    const pen = $("#rdPenal"); if (pen) pen.addEventListener("change", () => { R.penal = pen.value.split("\n").map(s => s.trim()).filter(Boolean); salvar(); });
    const ir2 = $("#rdIr2"); if (ir2) ir2.addEventListener("click", () => { R.passo = 2; salvar(); render(); });
    const ir3 = $("#rdIr3"); if (ir3) ir3.addEventListener("click", () => { R.passo = 3; salvar(); render(); });
    const ir4 = $("#rdIr4"); if (ir4) ir4.addEventListener("click", () => { R.passo = 4; salvar(); render(); });
    const st = $("#rdSelTema"); if (st) st.addEventListener("change", () => { R.tema = st.value; salvar(); render(); });
    const fil = $("#rdFiltro"); if (fil) fil.addEventListener("change", () => { R.filtroEixo = fil.value; salvar(); render(); });
    const sor = $("#rdSortear"); if (sor) sor.addEventListener("click", () => {
      const g = grupoTemas(); if (!g.length) return;
      let novo; do { novo = g[Math.floor(Math.random() * g.length)].t; } while (g.length > 1 && novo === R.tema);
      R.tema = novo; salvar(); render();
    });
    const uc = $("#rdUsarCustom"); if (uc) uc.addEventListener("click", () => {
      const v = $("#rdTemaCustom").value.trim(); if (!v) return; R.temaCustom = v; R.tema = "__custom"; salvar(); render();
    });
    const tx = $("#rdTexto"); if (tx) tx.addEventListener("input", () => {
      R.texto = tx.value; salvar(); const n = palavras(R.texto);
      $("#rdContagem").textContent = n + " palavras · cerca de " + Math.round(n / 11) + " linhas manuscritas (estimativa de 11 palavras por linha)";
    });
    const cb = $("#rdCron"); if (cb) cb.addEventListener("click", () => {
      if (cron) { clearInterval(cron); cron = null; return; }
      cron = setInterval(() => {
        const t = document.getElementById("rdCronTxt");
        if (!t) { clearInterval(cron); cron = null; return; }
        cronS++; t.textContent = "Cronômetro: " + String(Math.floor(cronS / 60)).padStart(2, "0") + ":" + String(cronS % 60).padStart(2, "0");
      }, 1000);
    });
    const cp = $("#rdCopiar"); if (cp) cp.addEventListener("click", async () => {
      const ta = $("#rdPedido"); let ok = false;
      try { await navigator.clipboard.writeText(ta.value); ok = true; } catch (e) { try { ta.select(); ok = document.execCommand("copy"); } catch (e2) { /* sem cópia */ } }
      $("#rdCopiado").textContent = ok ? "✓ Copiado! Cole no chat e anexe a foto." : "Não consegui copiar. Selecione o texto e copie manualmente.";
    });
    const notas = Array.from($$("[data-rd-nota]"));
    const somar = () => {
      const c = criterios(); let s = 0;
      notas.forEach(e => { let v = Number(e.value) || 0; v = Math.max(0, Math.min(v, c[+e.dataset.rdNota].max)); s += v; });
      $("#rdSoma").textContent = "Total: " + s + " / " + totalMax(); return s;
    };
    notas.forEach(e => e.addEventListener("input", somar));
    const sn = $("#rdSalvarNota"); if (sn) sn.addEventListener("click", () => {
      const s = somar(); if (!notas.some(e => e.value !== "")) return;
      R.historico.push({ id: Date.now(), tema: temaAtual() || "Tema livre", nota: s, max: totalMax(), data: new Date().toLocaleDateString("pt-BR") });
      salvar(); render();
    });
    $$("[data-rd-delhist]").forEach(b => b.addEventListener("click", () => { R.historico = R.historico.filter(h => String(h.id) !== b.dataset.rdDelhist); salvar(); render(); }));
    const nv = $("#rdNovo"); if (nv) nv.addEventListener("click", () => { R.tema = ""; R.temaCustom = ""; R.texto = ""; R.passo = 2; cronS = 0; salvar(); render(); });
  }

  window.Redacao = { render, _estado: () => R, _temas: TEMAS, _pedido: montarPedido, _detectar: detectarLinhas };
})();
