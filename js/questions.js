/* ============================================================================
   CARTÃO — SIMULADOS PARA CONCURSOS
   questions.js
   ----------------------------------------------------------------------------
   Este arquivo concentra os DADOS da aplicação:
     1) Regras de pontuação por banca (fácil de editar/expandir).
     2) Preferência de tipo de questão por banca (usada apenas como SUGESTÃO
        inicial na tela de filtros — o usuário sempre pode sobrepor).
     3) Banco de questões demonstrativas.

   IMPORTANTE: as questões abaixo são TODAS demonstrativas/autorais, criadas
   apenas para testar o sistema. Nenhuma delas deve ser tratada como questão
   oficial de qualquer banca. Cada questão carrega oficial:false e um aviso
   próprio, e a interface exibe isso claramente ao usuário.
   ========================================================================== */

/* ---------------------------------------------------------------------------
   1) REGRAS DE PONTUAÇÃO POR BANCA
--------------------------------------------------------------------------- */
const BANCA_SCORING = {
  "CEBRASPE":     { acerto: 1, erro: -1, branco: 0 },
  "FCC":          { acerto: 1, erro: 0,  branco: 0 },
  "FGV":          { acerto: 1, erro: 0,  branco: 0 },
  "VUNESP":       { acerto: 1, erro: 0,  branco: 0 },
  "Instituto AOCP": { acerto: 1, erro: 0, branco: 0 },
  "IBFC":         { acerto: 1, erro: 0,  branco: 0 },
  "CESGRANRIO":   { acerto: 1, erro: 0,  branco: 0 },
  "CONSULPLAN":   { acerto: 1, erro: 0,  branco: 0 },
  "IDECAN":       { acerto: 1, erro: 0,  branco: 0 },
  "Instituto Avalia": { acerto: 1, erro: 0, branco: 0 },
  "DEFAULT":      { acerto: 1, erro: 0,  branco: 0 }
};

/* ---------------------------------------------------------------------------
   2) PREFERÊNCIA DE TIPO DE QUESTÃO POR BANCA (apenas sugestão de UI)
--------------------------------------------------------------------------- */
const BANCA_TIPO_PREFERENCIA = {
  "CEBRASPE":       "Certo ou Errado",
  "FCC":            "Múltipla Escolha",
  "FGV":            "Múltipla Escolha",
  "VUNESP":         "Múltipla Escolha",
  "Instituto AOCP": "Múltipla Escolha",
  "IBFC":           "Múltipla Escolha",
  "CESGRANRIO":     "Múltipla Escolha",
  "CONSULPLAN":     "Múltipla Escolha",
  "IDECAN":         "Múltipla Escolha"
};

/* ---------------------------------------------------------------------------
   3) BANCO DE QUESTÕES DEMONSTRATIVAS (200 itens)
--------------------------------------------------------------------------- */
const QUESTION_BANK = [
  {
    "id": 1,
    "disciplina": "Português",
    "assunto": "Interpretação de texto",
    "banca": "CEBRASPE",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Certo ou Errado",
    "enunciado": "Considere o período: \"Embora tenha estudado pouco, o candidato foi aprovado.\" Julgue o item: a oração \"Embora tenha estudado pouco\" expressa ideia de concessão.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "\"Embora\" é conjunção concessiva clássica, introduzindo um fato que, em tese, se oporia ao da oração principal, mas não o impede.",
    "fundamento": "Gramática normativa — classificação das conjunções subordinativas concessivas.",
    "oficial": false
  },

  {
    "id": 2,
    "disciplina": "Português",
    "assunto": "Concordância verbal",
    "banca": "FCC",
    "ano": 2022,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que a concordância verbal está de acordo com a norma-padrão.",
    "alternativas": {
      "A": "Fazem dois anos que o edital foi publicado.",
      "B": "Existem candidatos que não compareceram à prova.",
      "C": "Houveram falhas no sistema de inscrição.",
      "D": "Deve haviam mais vagas para o cargo."
    },
    "gabarito": "B",
    "comentario": "\"Existir\" é verbo pessoal e concorda normalmente com o sujeito \"candidatos\" (plural).",
    "fundamento": "Gramática normativa — verbos impessoais (haver, fazer) x verbos pessoais (existir).",
    "oficial": false
  },

  {
    "id": 3,
    "disciplina": "Português",
    "assunto": "Crase",
    "banca": "VUNESP",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que o emprego do acento grave (crase) está correto.",
    "alternativas": {
      "A": "O ofício foi entregue à ela pessoalmente.",
      "B": "A reunião começará à partir das 9 horas.",
      "C": "O processo foi encaminhado à Secretaria de Finanças.",
      "D": "Ele se dirigiu à diversos setores do órgão."
    },
    "gabarito": "C",
    "comentario": "Há crase pela regência do verbo \"encaminhar a\" somada ao artigo feminino de \"Secretaria\".",
    "fundamento": "Gramática normativa — regras de ocorrência da crase.",
    "oficial": false
  },

  {
    "id": 4,
    "disciplina": "Português",
    "assunto": "Pontuação",
    "banca": "IBFC",
    "ano": 2021,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que a vírgula foi empregada corretamente para isolar aposto explicativo.",
    "alternativas": {
      "A": "O servidor João, que atua no protocolo foi promovido.",
      "B": "O servidor, João, atua no protocolo.",
      "C": "João, servidor do setor de protocolo, foi promovido.",
      "D": "João servidor, do setor de protocolo foi promovido."
    },
    "gabarito": "C",
    "comentario": "O aposto explicativo \"servidor do setor de protocolo\" está corretamente isolado por vírgulas.",
    "fundamento": "Gramática normativa — uso da vírgula com aposto.",
    "oficial": false
  },

  {
    "id": 5,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Proposições e negação",
    "banca": "CEBRASPE",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "A negação da proposição \"Todos os candidatos entregaram o requerimento\" é \"Nenhum candidato entregou o requerimento\". Julgue o item.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "A negação correta de uma proposição universal é existencial com o predicado negado: \"Algum candidato não entregou o requerimento\".",
    "fundamento": "Lógica proposicional — leis de De Morgan para quantificadores.",
    "oficial": false
  },

  {
    "id": 6,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Lógica de argumentação",
    "banca": "FGV",
    "ano": 2022,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Considere verdadeira a afirmação: \"Se o candidato estuda, então ele é aprovado.\" Sabendo que Marcos não foi aprovado, é correto concluir que:",
    "alternativas": {
      "A": "Marcos estudou.",
      "B": "Marcos não estudou.",
      "C": "Marcos foi aprovado.",
      "D": "Nada se pode concluir sobre os estudos de Marcos."
    },
    "gabarito": "B",
    "comentario": "Aplicação do modus tollens: negado o consequente (não aprovado), nega-se necessariamente o antecedente (não estudou).",
    "fundamento": "Lógica proposicional — modus tollens.",
    "oficial": false
  },

  {
    "id": 7,
    "disciplina": "Informática",
    "assunto": "Conceitos de internet",
    "banca": "CESGRANRIO",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "No contexto de navegadores de internet, a navegação anônima (ou privada) tem por principal efeito:",
    "alternativas": {
      "A": "Tornar o usuário invisível para o provedor de internet.",
      "B": "Impedir qualquer rastreamento por sites visitados.",
      "C": "Não salvar, no navegador local, o histórico, cookies e dados de formulário da sessão.",
      "D": "Criptografar todo o tráfego de rede automaticamente."
    },
    "gabarito": "C",
    "comentario": "A navegação anônima apenas evita o armazenamento local de histórico/cookies da sessão; não impede rastreamento por terceiros nem oculta o IP do provedor.",
    "fundamento": "Noções de informática — navegadores web.",
    "oficial": false
  },

  {
    "id": 8,
    "disciplina": "Informática",
    "assunto": "Segurança da informação",
    "banca": "IBFC",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um arquivo malicioso que se disfarça de programa legítimo para induzir o usuário a executá-lo, sem se replicar automaticamente, é classificado como:",
    "alternativas": {
      "A": "Vírus de macro.",
      "B": "Worm.",
      "C": "Cavalo de Troia (Trojan).",
      "D": "Spyware de replicação automática."
    },
    "gabarito": "C",
    "comentario": "O Cavalo de Troia se disfarça de software legítimo e depende da ação do usuário para ser executado, diferentemente de worms, que se autorreplicam pela rede.",
    "fundamento": "Noções de segurança da informação — classificação de malwares.",
    "oficial": false
  },

  {
    "id": 9,
    "disciplina": "Direito Constitucional",
    "assunto": "Direitos e Garantias Fundamentais",
    "banca": "CEBRASPE",
    "ano": 2025,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Conforme a Constituição Federal de 1988, é livre a manifestação do pensamento, sendo vedado, contudo, o anonimato. Julgue o item considerando o disposto no art. 5º, IV, da CF/1988.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "O texto reproduz corretamente o art. 5º, IV, da CF/1988: liberdade de manifestação do pensamento, vedado o anonimato.",
    "fundamento": "Art. 5º, IV, da Constituição Federal de 1988.",
    "oficial": false
  },

  {
    "id": 10,
    "disciplina": "Direito Constitucional",
    "assunto": "Organização do Estado",
    "banca": "FGV",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 18 da Constituição Federal de 1988, a organização político-administrativa da República Federativa do Brasil compreende:",
    "alternativas": {
      "A": "Apenas a União e os Estados, sendo os Municípios meras subdivisões administrativas estaduais.",
      "B": "A União, os Estados, o Distrito Federal e os Municípios, todos autônomos, nos termos da Constituição.",
      "C": "Somente a União e o Distrito Federal, dotados de autonomia política.",
      "D": "A União como ente soberano e os demais entes como meramente administrativos, sem autonomia política."
    },
    "gabarito": "B",
    "comentario": "O art. 18 da CF/1988 estabelece que a organização político-administrativa compreende a União, os Estados, o Distrito Federal e os Municípios, todos autônomos entre si.",
    "fundamento": "Art. 18, caput, da Constituição Federal de 1988.",
    "oficial": false
  },

  {
    "id": 11,
    "disciplina": "Direito Constitucional",
    "assunto": "Controle de Constitucionalidade",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "No controle difuso de constitucionalidade, a decisão proferida em sede de recurso extraordinário produz, desde a origem e sem qualquer intervenção do Senado Federal, efeitos erga omnes e vinculantes automáticos sobre todos os demais processos em curso. Julgue o item.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "No controle difuso tradicional, a decisão tem, em regra, efeitos inter partes; a expansão de efeitos (abstrativização) é fenômeno debatido, mas a assertiva generaliza incorretamente a automaticidade e a dispensa de qualquer mecanismo de ampliação de efeitos.",
    "fundamento": "Doutrina de Direito Constitucional — controle difuso de constitucionalidade; art. 52, X, CF/1988 (função tradicional do Senado).",
    "oficial": false
  },

  {
    "id": 12,
    "disciplina": "Direito Constitucional",
    "assunto": "Direitos Sociais",
    "banca": "FCC",
    "ano": 2022,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "São direitos sociais previstos no art. 6º da Constituição Federal de 1988, EXCETO:",
    "alternativas": {
      "A": "A educação.",
      "B": "A saúde.",
      "C": "A propriedade privada dos meios de produção.",
      "D": "A moradia."
    },
    "gabarito": "C",
    "comentario": "A propriedade privada dos meios de produção não é direito social do art. 6º; educação, saúde e moradia estão expressamente previstas nesse rol.",
    "fundamento": "Art. 6º da Constituição Federal de 1988.",
    "oficial": false
  },

  {
    "id": 13,
    "disciplina": "Direito Administrativo",
    "assunto": "Atos Administrativos",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "A autoexecutoriedade é atributo presente em todo e qualquer ato administrativo, permitindo que a Administração execute suas decisões sem intervenção do Poder Judiciário, independentemente de previsão legal ou situação de urgência. Julgue o item.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "A autoexecutoriedade não é atributo universal: só existe quando há expressa previsão legal ou em situações de urgência/emergência que a justifiquem.",
    "fundamento": "Doutrina de Direito Administrativo — atributos do ato administrativo.",
    "oficial": false
  },

  {
    "id": 14,
    "disciplina": "Direito Administrativo",
    "assunto": "Princípios da Administração Pública",
    "banca": "FGV",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O princípio segundo o qual a Administração Pública deve tratar isonomicamente os administrados, vedados favorecimentos ou perseguições pessoais, denomina-se princípio da:",
    "alternativas": {
      "A": "Eficiência.",
      "B": "Impessoalidade.",
      "C": "Autotutela.",
      "D": "Especialidade."
    },
    "gabarito": "B",
    "comentario": "A impessoalidade impõe tratamento isonômico aos administrados, sem favorecimentos ou discriminações pessoais.",
    "fundamento": "Art. 37, caput, da Constituição Federal de 1988.",
    "oficial": false
  },

  {
    "id": 15,
    "disciplina": "Direito Administrativo",
    "assunto": "Licitações (Lei nº 14.133/2021)",
    "banca": "VUNESP",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Considerando a Lei nº 14.133/2021, a contratação de profissional de notória especialização para serviço técnico singular, em razão da inviabilidade de competição, caracteriza hipótese de:",
    "alternativas": {
      "A": "Dispensa de licitação.",
      "B": "Inexigibilidade de licitação.",
      "C": "Concorrência.",
      "D": "Pregão eletrônico obrigatório."
    },
    "gabarito": "B",
    "comentario": "A inviabilidade de competição, presente na contratação de profissional notoriamente especializado para serviço técnico singular, caracteriza inexigibilidade de licitação.",
    "fundamento": "Art. 74, III, da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 16,
    "disciplina": "Direito Administrativo",
    "assunto": "Poderes Administrativos",
    "banca": "CONSULPLAN",
    "ano": 2022,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O poder que autoriza a Administração a condicionar e restringir o exercício de direitos individuais em prol do interesse coletivo, como na fiscalização de estabelecimentos comerciais, denomina-se poder:",
    "alternativas": {
      "A": "Hierárquico.",
      "B": "Disciplinar.",
      "C": "De polícia.",
      "D": "Regulamentar."
    },
    "gabarito": "C",
    "comentario": "O poder de polícia autoriza a Administração a restringir direitos individuais em nome do interesse público, como na fiscalização de atividades privadas.",
    "fundamento": "Doutrina de Direito Administrativo — poderes administrativos.",
    "oficial": false
  },

  {
    "id": 17,
    "disciplina": "Direito Penal",
    "assunto": "Crimes contra a Administração Pública",
    "banca": "CEBRASPE",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "O funcionário público que exige, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida, comete o crime de corrupção passiva. Julgue o item.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "A conduta de \"exigir\" vantagem indevida em razão da função, ainda que fora dela ou antes de assumi-la, tipifica o crime de concussão (art. 316, CP), e não corrupção passiva, que pressupõe \"solicitar ou receber\" (art. 317, CP), condutas de menor gravidade coercitiva.",
    "fundamento": "Arts. 316 e 317 do Código Penal.",
    "oficial": false
  },

  {
    "id": 18,
    "disciplina": "Direito Penal",
    "assunto": "Teoria do Crime",
    "banca": "FCC",
    "ano": 2021,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a teoria adotada pelo Código Penal brasileiro para o momento e o lugar do crime (tempo e lugar do crime), é correto afirmar que:",
    "alternativas": {
      "A": "Quanto ao tempo, adota-se a teoria da atividade; quanto ao lugar, a teoria da ubiquidade.",
      "B": "Quanto ao tempo e ao lugar, adota-se, em ambos os casos, a teoria do resultado.",
      "C": "Quanto ao tempo, adota-se a teoria do resultado; quanto ao lugar, a teoria da atividade.",
      "D": "Quanto ao tempo e ao lugar, adota-se, em ambos os casos, a teoria da ubiquidade."
    },
    "gabarito": "A",
    "comentario": "O CP adota a teoria da atividade para o tempo do crime (art. 4º) e a teoria da ubiquidade para o lugar do crime (art. 6º).",
    "fundamento": "Arts. 4º e 6º do Código Penal.",
    "oficial": false
  },

  {
    "id": 19,
    "disciplina": "Administração Pública",
    "assunto": "Orçamento Público",
    "banca": "Instituto AOCP",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O instrumento de planejamento orçamentário de médio prazo (quatro anos), que estabelece diretrizes, objetivos e metas da Administração, é:",
    "alternativas": {
      "A": "A Lei Orçamentária Anual (LOA).",
      "B": "O Plano Plurianual (PPA).",
      "C": "A Lei de Diretrizes Orçamentárias (LDO).",
      "D": "O Balanço Patrimonial."
    },
    "gabarito": "B",
    "comentario": "O PPA é o instrumento de planejamento de médio prazo (4 anos), distinto da LDO e da LOA, que são anuais.",
    "fundamento": "Art. 165, §1º, da Constituição Federal de 1988.",
    "oficial": false
  },

  {
    "id": 20,
    "disciplina": "Administração Pública",
    "assunto": "Gestão de Pessoas",
    "banca": "CESGRANRIO",
    "ano": 2022,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Na Administração Pública, o processo de avaliação contínua do desempenho dos servidores, com vistas a subsidiar decisões de capacitação, progressão e, quando cabível, estabilidade, denomina-se:",
    "alternativas": {
      "A": "Recrutamento e seleção.",
      "B": "Avaliação de desempenho.",
      "C": "Plano de cargos e salários.",
      "D": "Terceirização de mão de obra."
    },
    "gabarito": "B",
    "comentario": "A avaliação de desempenho é o processo contínuo de mensuração do desempenho funcional, usado para embasar decisões de gestão de pessoas.",
    "fundamento": "Doutrina de Administração Pública — gestão de pessoas no setor público.",
    "oficial": false
  },

  {
    "id": 21,
    "disciplina": "Português",
    "assunto": "Regência nominal",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que a regência nominal está de acordo com a norma-padrão da língua portuguesa.",
    "alternativas": {
      "A": "O servidor é obediente às normas internas do órgão.",
      "B": "O relatório está isento de erros grosseiros, embora seja rico com detalhes técnicos.",
      "C": "O novo sistema é compatível às versões anteriores do software.",
      "D": "O gestor permanece alheio de qualquer pressão externa."
    },
    "gabarito": "A",
    "comentario": "\"Obediente\" rege a preposição \"a\" (obediente a algo/alguém), regência corretamente empregada na alternativa A.",
    "fundamento": "Gramática normativa — regência nominal.",
    "oficial": false
  },

  {
    "id": 22,
    "disciplina": "Português",
    "assunto": "Colocação pronominal",
    "banca": "IDECAN",
    "ano": 2022,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que a colocação pronominal está INCORRETA, segundo a norma-padrão da língua escrita formal.",
    "alternativas": {
      "A": "Nunca lhe disseram a verdade sobre o andamento do processo.",
      "B": "Entreguem-me o relatório amanhã.",
      "C": "Não se pode negar o mérito do projeto.",
      "D": "Me avisem assim que o processo chegar."
    },
    "gabarito": "D",
    "comentario": "Na norma-padrão escrita, evita-se iniciar oração com pronome oblíquo átono; o correto seria \"Avisem-me assim que o processo chegar\". As demais alternativas seguem corretamente as regras de próclise (após palavra negativa) e ênclise (verbo no imperativo sem termo atrativo antes).",
    "fundamento": "Gramática normativa — colocação pronominal (próclise, ênclise e mesóclise).",
    "oficial": false
  },

  {
    "id": 23,
    "disciplina": "Português",
    "assunto": "Correlação verbal",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que a correlação entre os tempos verbais está de acordo com a norma-padrão.",
    "alternativas": {
      "A": "Se o servidor tivesse entregado o documento a tempo, o processo não teria atrasado.",
      "B": "Se o servidor entregasse o documento a tempo, o processo não teria atrasado.",
      "C": "Se o servidor entregar o documento a tempo, o processo não atrasaria.",
      "D": "Caso o servidor entregue o documento a tempo, o processo atrasava."
    },
    "gabarito": "A",
    "comentario": "A hipótese não realizada no passado exige o pretérito mais-que-perfeito do subjuntivo na condição (\"tivesse entregado\") combinado com o futuro do pretérito composto na consequência (\"teria atrasado\"), correlação observada apenas na alternativa A. As demais alternativas rompem essa correlação de planos temporais.",
    "fundamento": "Gramática normativa — correlação verbal (períodos condicionais).",
    "oficial": false
  },

  {
    "id": 24,
    "disciplina": "Português",
    "assunto": "Concordância nominal",
    "banca": "IDECAN",
    "ano": 2021,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que a concordância nominal está de acordo com a norma-padrão.",
    "alternativas": {
      "A": "Seguem anexos ao processo os documentos solicitados.",
      "B": "É proibido a entrada de pessoas estranhas ao serviço.",
      "C": "A servidora está meia atrasada para a reunião.",
      "D": "Bastante servidores compareceram à assembleia."
    },
    "gabarito": "A",
    "comentario": "\"Anexos\" concorda corretamente com \"documentos\" (masculino plural). Em B, havendo artigo determinando \"entrada\", o correto é \"proibida\"; em C, \"meio\" usado como advérbio é invariável (\"meio atrasada\"); em D, \"bastante\" com sentido de \"muitos\" deve concordar (\"bastantes servidores\").",
    "fundamento": "Gramática normativa — concordância nominal.",
    "oficial": false
  },

  {
    "id": 25,
    "disciplina": "Português",
    "assunto": "Classes gramaticais — conjunções",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que a conjunção destacada expressa corretamente a relação indicada entre parênteses.",
    "alternativas": {
      "A": "\"O servidor foi advertido, contudo não reincidiu na falta.\" (adição)",
      "B": "\"Embora fosse feriado, o plantão funcionou normalmente.\" (concessão)",
      "C": "\"Como chovia muito, a cerimônia foi cancelada.\" (comparação)",
      "D": "\"Estudou bastante, portanto não foi aprovado.\" (adversidade)"
    },
    "gabarito": "B",
    "comentario": "\"Embora\" é conjunção subordinativa concessiva típica, corretamente classificada na alternativa B. Em A, \"contudo\" é adversativa, não aditiva; em C, \"como\" tem valor causal nesse contexto, não comparativo; em D, \"portanto\" é conclusiva, não adversativa.",
    "fundamento": "Gramática normativa — classificação das conjunções.",
    "oficial": false
  },

  {
    "id": 26,
    "disciplina": "Português",
    "assunto": "Interpretação de texto",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "\"O aprimoramento contínuo dos processos administrativos exige, além de recursos tecnológicos, o engajamento dos servidores na busca por soluções mais ágeis e transparentes para o cidadão.\" De acordo com o texto, o aprimoramento dos processos administrativos depende:",
    "alternativas": {
      "A": "exclusivamente de recursos tecnológicos.",
      "B": "unicamente do engajamento dos servidores, independentemente de tecnologia.",
      "C": "da combinação entre recursos tecnológicos e o engajamento dos servidores.",
      "D": "de fatores alheios à atuação do servidor público."
    },
    "gabarito": "C",
    "comentario": "O texto afirma que o aprimoramento exige recursos tecnológicos \"além\" do engajamento dos servidores, isto é, os dois fatores em conjunto, e não isoladamente.",
    "fundamento": "Compreensão e interpretação de textos.",
    "oficial": false
  },

  {
    "id": 27,
    "disciplina": "Português",
    "assunto": "Ortografia e acentuação",
    "banca": "IDECAN",
    "ano": 2022,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que todas as palavras estão grafadas corretamente, conforme o Acordo Ortográfico vigente.",
    "alternativas": {
      "A": "Ideia, assembleia, jiboia",
      "B": "Idéia, assembléia, jibóia",
      "C": "Ideia, assembléia, jiboia",
      "D": "Idéia, assembleia, jibóia"
    },
    "gabarito": "A",
    "comentario": "Após o Acordo Ortográfico, os ditongos abertos \"ei\" e \"oi\" em palavras paroxítonas deixaram de ser acentuados, daí a grafia correta \"ideia\", \"assembleia\" e \"jiboia\", sem acento.",
    "fundamento": "Acordo Ortográfico da Língua Portuguesa — acentuação de ditongos abertos em paroxítonas.",
    "oficial": false
  },

  {
    "id": 28,
    "disciplina": "Português",
    "assunto": "Regência verbal",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que a regência verbal está correta, segundo a norma-padrão.",
    "alternativas": {
      "A": "O diretor informou o servidor do novo regulamento.",
      "B": "As partes assistiram o julgamento com atenção.",
      "C": "Prefiro relatórios claros do que relatórios longos.",
      "D": "Obedeça o regulamento interno rigorosamente."
    },
    "gabarito": "A",
    "comentario": "\"Informar\" admite dupla regência, sendo correta a construção \"informar alguém de algo\". Em B, \"assistir\" no sentido de \"presenciar\" exige a preposição \"a\" (assistiram ao julgamento); em C, \"preferir\" exige \"a\", não \"do que\" (prefiro... a...); em D, \"obedecer\" exige \"a\" (obedeça ao regulamento).",
    "fundamento": "Gramática normativa — regência verbal.",
    "oficial": false
  },

  {
    "id": 29,
    "disciplina": "Português",
    "assunto": "Pontuação",
    "banca": "IDECAN",
    "ano": 2021,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que a pontuação está de acordo com a norma-padrão.",
    "alternativas": {
      "A": "Se possível, encaminhe o processo ainda hoje.",
      "B": "Encaminhe o processo, se possível ainda hoje.",
      "C": "Encaminhe, o processo se possível, ainda hoje.",
      "D": "Encaminhe o processo se, possível ainda hoje."
    },
    "gabarito": "A",
    "comentario": "A oração adverbial deslocada para o início do período (\"Se possível\") deve ser separada por vírgula da oração principal, o que ocorre corretamente apenas na alternativa A.",
    "fundamento": "Gramática normativa — uso da vírgula com orações deslocadas.",
    "oficial": false
  },

  {
    "id": 30,
    "disciplina": "Português",
    "assunto": "Coesão textual",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "\"Os servidores entregaram os relatórios à chefia. Esta, por sua vez, os encaminhou ao setor de arquivo.\" O pronome \"os\", em \"os encaminhou\", retoma:",
    "alternativas": {
      "A": "\"servidores\"",
      "B": "\"relatórios\"",
      "C": "\"chefia\"",
      "D": "\"setor de arquivo\""
    },
    "gabarito": "B",
    "comentario": "O pronome \"os\" (masculino plural) retoma \"relatórios\", objeto que foi encaminhado ao setor de arquivo pela chefia.",
    "fundamento": "Coesão textual — retomada pronominal (anáfora).",
    "oficial": false
  },

  {
    "id": 31,
    "disciplina": "Português",
    "assunto": "Semântica e ambiguidade",
    "banca": "IDECAN",
    "ano": 2022,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que a frase apresenta ambiguidade.",
    "alternativas": {
      "A": "O servidor entregou o relatório ao diretor em sua sala.",
      "B": "O servidor entregou o relatório ao diretor na sala 12.",
      "C": "O relatório foi entregue pelo servidor ao diretor.",
      "D": "O diretor recebeu o relatório do servidor pontualmente."
    },
    "gabarito": "A",
    "comentario": "Em \"em sua sala\", o possessivo \"sua\" pode se referir tanto ao servidor quanto ao diretor, gerando ambiguidade referencial ausente nas demais alternativas.",
    "fundamento": "Semântica — ambiguidade (anfibologia).",
    "oficial": false
  },

  {
    "id": 32,
    "disciplina": "Português",
    "assunto": "Crase",
    "banca": "IDECAN",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que o emprego do acento indicativo de crase está INCORRETO.",
    "alternativas": {
      "A": "O documento foi arquivado à parte, junto às demais pastas.",
      "B": "Os servidores atuaram à distância durante o período de trabalho remoto.",
      "C": "Chegou à noite e não pôde protocolar o requerimento a tempo.",
      "D": "Voltarei à naquela repartição amanhã."
    },
    "gabarito": "D",
    "comentario": "\"À naquela\" é combinação indevida: \"a\" já está contraído em \"àquela\" (a + aquela), não sendo correto empregar \"à\" antes de \"naquela\". As demais alternativas trazem locuções consagradas com crase (\"à parte\", \"à distância\", \"à noite\").",
    "fundamento": "Gramática normativa — emprego da crase.",
    "oficial": false
  },

  {
    "id": 33,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Proposições compostas",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Considere as proposições simples p: \"O processo foi protocolado\" (verdadeira) e q: \"O prazo foi cumprido\" (falsa). Assinale a alternativa que apresenta corretamente o valor lógico de p∧q e de p∨q, respectivamente.",
    "alternativas": {
      "A": "Falso e Falso",
      "B": "Falso e Verdadeiro",
      "C": "Verdadeiro e Falso",
      "D": "Verdadeiro e Verdadeiro"
    },
    "gabarito": "B",
    "comentario": "A conjunção (∧) só é verdadeira se ambas as proposições forem verdadeiras; como q é falsa, p∧q é falsa. A disjunção (∨) é verdadeira se ao menos uma for verdadeira; como p é verdadeira, p∨q é verdadeira.",
    "fundamento": "Lógica proposicional — operadores de conjunção e disjunção.",
    "oficial": false
  },

  {
    "id": 34,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Negação de proposições condicionais",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A negação da proposição condicional \"Se o servidor for aprovado, então será nomeado\" é logicamente equivalente a:",
    "alternativas": {
      "A": "\"O servidor não foi aprovado e não será nomeado.\"",
      "B": "\"O servidor foi aprovado e não será nomeado.\"",
      "C": "\"Se o servidor não for aprovado, não será nomeado.\"",
      "D": "\"O servidor não foi aprovado ou será nomeado.\""
    },
    "gabarito": "B",
    "comentario": "A negação de uma condicional (p→q) equivale a \"p e não q\": o servidor foi aprovado (p verdadeiro) e não será nomeado (q falso).",
    "fundamento": "Lógica proposicional — negação da condicional.",
    "oficial": false
  },

  {
    "id": 35,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Silogismo categórico",
    "banca": "IDECAN",
    "ano": 2022,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Considere as premissas: \"Todo servidor efetivo tem estabilidade\" e \"Nenhum servidor comissionado é efetivo\". É correto concluir que:",
    "alternativas": {
      "A": "Nenhum servidor comissionado tem estabilidade.",
      "B": "Todo servidor comissionado tem estabilidade.",
      "C": "Não é possível relacionar diretamente a estabilidade dos servidores comissionados a partir dessas premissas.",
      "D": "Todo servidor com estabilidade é comissionado."
    },
    "gabarito": "C",
    "comentario": "As premissas afirmam que todo efetivo é estável e que nenhum comissionado é efetivo, mas nada dizem sobre se os comissionados possuem ou não estabilidade por qualquer outra via; concluir que \"nenhum comissionado tem estabilidade\" seria uma falácia lógica não amparada pelas premissas.",
    "fundamento": "Lógica de argumentação — silogismos categóricos e falácias de conclusão indevida.",
    "oficial": false
  },

  {
    "id": 36,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Sequências lógicas",
    "banca": "IDECAN",
    "ano": 2021,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Considere a sequência: 2, 6, 12, 20, 30, ... O próximo termo dessa sequência é:",
    "alternativas": {
      "A": "40",
      "B": "42",
      "C": "44",
      "D": "46"
    },
    "gabarito": "B",
    "comentario": "As diferenças entre os termos consecutivos crescem de 2 em 2 (4, 6, 8, 10, 12); somando 12 ao último termo (30), obtém-se 42.",
    "fundamento": "Raciocínio lógico — sequências numéricas.",
    "oficial": false
  },

  {
    "id": 37,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Diagramas lógicos (conjuntos)",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Em uma repartição, 60 servidores atuam no setor de protocolo, 45 atuam no setor de arquivo, e 20 atuam em ambos os setores simultaneamente. Se cada servidor atua em pelo menos um desses dois setores, o total de servidores lotados nesses dois setores é:",
    "alternativas": {
      "A": "65",
      "B": "85",
      "C": "105",
      "D": "125"
    },
    "gabarito": "B",
    "comentario": "Pelo princípio da inclusão-exclusão, |A∪B| = |A| + |B| − |A∩B| = 60 + 45 − 20 = 85.",
    "fundamento": "Teoria dos conjuntos — princípio da inclusão-exclusão.",
    "oficial": false
  },

  {
    "id": 38,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Modus ponens",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Considere verdadeira a afirmação: \"Se o edital for publicado, então as inscrições serão abertas.\" Sabendo que o edital foi publicado, é correto concluir, por modus ponens, que:",
    "alternativas": {
      "A": "As inscrições serão abertas.",
      "B": "As inscrições não serão abertas.",
      "C": "O edital não foi publicado.",
      "D": "Nada se pode concluir."
    },
    "gabarito": "A",
    "comentario": "Pelo modus ponens, afirmado o antecedente (o edital foi publicado), conclui-se necessariamente o consequente (as inscrições serão abertas).",
    "fundamento": "Lógica proposicional — modus ponens.",
    "oficial": false
  },

  {
    "id": 39,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Princípio multiplicativo",
    "banca": "IDECAN",
    "ano": 2022,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um concurso público prevê a aplicação de prova em 3 turnos possíveis (manhã, tarde, noite) e em 4 locais distintos. De quantas formas diferentes um candidato pode ser alocado, considerando turno e local de prova?",
    "alternativas": {
      "A": "7",
      "B": "9",
      "C": "12",
      "D": "24"
    },
    "gabarito": "C",
    "comentario": "Pelo princípio fundamental da contagem (multiplicativo), multiplicam-se as possibilidades independentes: 3 turnos × 4 locais = 12 combinações possíveis.",
    "fundamento": "Análise combinatória — princípio multiplicativo.",
    "oficial": false
  },

  {
    "id": 40,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Valor lógico de proposições compostas",
    "banca": "IDECAN",
    "ano": 2025,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Considere as proposições: P1: \"5 + 3 = 8\" (verdadeira); P2: \"Todo número par é primo\" (falsa). O valor lógico da proposição \"¬P1 ∨ P2\" é:",
    "alternativas": {
      "A": "Verdadeiro",
      "B": "Falso",
      "C": "Indeterminado",
      "D": "Depende do contexto"
    },
    "gabarito": "B",
    "comentario": "Como P1 é verdadeira, ¬P1 é falsa; como P2 também é falsa, a disjunção entre duas proposições falsas (F ∨ F) resulta em uma proposição falsa.",
    "fundamento": "Lógica proposicional — negação e disjunção.",
    "oficial": false
  },

  {
    "id": 41,
    "disciplina": "Informática",
    "assunto": "Hardware",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Em relação aos componentes de um computador, é correto afirmar que a memória RAM:",
    "alternativas": {
      "A": "armazena dados permanentemente, mesmo com o computador desligado.",
      "B": "é um tipo de memória volátil, perdendo seu conteúdo quando o computador é desligado.",
      "C": "tem a mesma função do HD/SSD quanto ao armazenamento definitivo de arquivos.",
      "D": "é responsável exclusivamente pelo processamento gráfico do computador."
    },
    "gabarito": "B",
    "comentario": "A memória RAM (Random Access Memory) é volátil: seu conteúdo é perdido quando o computador é desligado, ao contrário dos dispositivos de armazenamento permanente, como HD e SSD.",
    "fundamento": "Noções de informática — hardware e memórias.",
    "oficial": false
  },

  {
    "id": 42,
    "disciplina": "Informática",
    "assunto": "Sistemas operacionais",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sobre os sistemas operacionais Windows e Linux, é correto afirmar que:",
    "alternativas": {
      "A": "O Linux é um sistema operacional proprietário, sendo vedada a alteração de seu código-fonte.",
      "B": "O Windows é um sistema operacional de código aberto (open source).",
      "C": "O Linux é um sistema operacional de núcleo (kernel) aberto, permitindo distribuições diversas mantidas por diferentes desenvolvedores.",
      "D": "Ambos os sistemas operacionais são incompatíveis com qualquer tipo de rede local."
    },
    "gabarito": "C",
    "comentario": "O Linux tem núcleo (kernel) de código aberto, o que permite a existência de diversas distribuições (Ubuntu, Fedora, Debian etc.) mantidas por diferentes comunidades e empresas — diferentemente do Windows, que é proprietário.",
    "fundamento": "Noções de informática — sistemas operacionais.",
    "oficial": false
  },

  {
    "id": 43,
    "disciplina": "Informática",
    "assunto": "Editor de texto",
    "banca": "IDECAN",
    "ano": 2022,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "No Microsoft Word (ou editor de texto compatível), o recurso que permite aplicar uma formatação predefinida (fonte, tamanho, cor) a diversos parágrafos de forma padronizada e reutilizável denomina-se:",
    "alternativas": {
      "A": "Marcadores e numeração.",
      "B": "Estilos (Styles).",
      "C": "Quebra de seção.",
      "D": "Controle de alterações."
    },
    "gabarito": "B",
    "comentario": "Os \"Estilos\" permitem padronizar e reaplicar formatações (fonte, tamanho, cor, espaçamento) de forma consistente ao longo do documento, facilitando alterações globais.",
    "fundamento": "Noções de informática — editores de texto.",
    "oficial": false
  },

  {
    "id": 44,
    "disciplina": "Informática",
    "assunto": "Planilhas eletrônicas",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Em uma planilha eletrônica, para somar automaticamente os valores contidos nas células de A1 até A10, deve-se utilizar a fórmula:",
    "alternativas": {
      "A": "=SOMA(A1:A10)",
      "B": "=SOMA(A1;A10)",
      "C": "=TOTAL(A1-A10)",
      "D": "=SOMAR(A1...A10)"
    },
    "gabarito": "A",
    "comentario": "A função padrão de soma em planilhas eletrônicas (Excel, LibreOffice Calc) utiliza o intervalo indicado por dois-pontos: =SOMA(A1:A10).",
    "fundamento": "Noções de informática — planilhas eletrônicas.",
    "oficial": false
  },

  {
    "id": 45,
    "disciplina": "Informática",
    "assunto": "Internet e navegadores",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Os \"cookies\" utilizados por sites na internet têm, entre outras finalidades, a função de:",
    "alternativas": {
      "A": "proteger o computador do usuário contra vírus e malwares.",
      "B": "armazenar, no navegador do usuário, pequenas informações sobre a navegação, como preferências e dados de sessão.",
      "C": "criptografar integralmente o tráfego de dados entre o navegador e o servidor.",
      "D": "impedir que o site identifique o usuário em visitas futuras."
    },
    "gabarito": "B",
    "comentario": "Cookies são pequenos arquivos armazenados no navegador que guardam informações sobre a navegação do usuário, como preferências, login e dados de sessão, permitindo, inclusive, o reconhecimento do usuário em visitas futuras — o oposto do descrito na alternativa D.",
    "fundamento": "Noções de informática — internet e navegadores.",
    "oficial": false
  },

  {
    "id": 46,
    "disciplina": "Informática",
    "assunto": "Segurança da informação",
    "banca": "IDECAN",
    "ano": 2025,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Em relação às boas práticas de segurança da informação, a cópia de segurança (backup) dos dados de um órgão público deve, preferencialmente:",
    "alternativas": {
      "A": "ser mantida em um único local físico, para facilitar o acesso.",
      "B": "ser realizada apenas uma vez, no momento da instalação do sistema.",
      "C": "ser realizada periodicamente e armazenada, se possível, em local diverso do ambiente de produção.",
      "D": "ser dispensada quando os dados estiverem protegidos por senha."
    },
    "gabarito": "C",
    "comentario": "A boa prática recomenda backups periódicos e armazenados em local diferente do ambiente de produção (regra 3-2-1), reduzindo o risco de perda total dos dados em caso de incidentes.",
    "fundamento": "Noções de segurança da informação — política de becapes (backup).",
    "oficial": false
  },

  {
    "id": 47,
    "disciplina": "Direito Constitucional",
    "assunto": "Princípios fundamentais",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "São fundamentos da República Federativa do Brasil, previstos no art. 1º da Constituição Federal de 1988, EXCETO:",
    "alternativas": {
      "A": "a soberania.",
      "B": "a cidadania.",
      "C": "a separação absoluta entre os Poderes, sem qualquer mecanismo de controle recíproco.",
      "D": "os valores sociais do trabalho e da livre iniciativa."
    },
    "gabarito": "C",
    "comentario": "O art. 1º da CF/1988 elenca como fundamentos a soberania, a cidadania, a dignidade da pessoa humana, os valores sociais do trabalho e da livre iniciativa e o pluralismo político — não havendo previsão de separação \"absoluta\" e sem controles recíprocos entre os Poderes, que, ao contrário, se fiscalizam mutuamente pelo sistema de freios e contrapesos.",
    "fundamento": "Art. 1º da Constituição Federal de 1988.",
    "oficial": false
  },

  {
    "id": 48,
    "disciplina": "Direito Constitucional",
    "assunto": "Remédios constitucionais",
    "banca": "IDECAN",
    "ano": 2022,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O remédio constitucional adequado para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, violado por ato de autoridade pública, é:",
    "alternativas": {
      "A": "Mandado de segurança.",
      "B": "Ação popular.",
      "C": "Mandado de injunção.",
      "D": "Habeas corpus."
    },
    "gabarito": "A",
    "comentario": "O mandado de segurança é o remédio constitucional destinado à proteção de direito líquido e certo não amparado por habeas corpus ou habeas data, quando violado por ilegalidade ou abuso de poder de autoridade.",
    "fundamento": "Art. 5º, LXIX, da Constituição Federal de 1988.",
    "oficial": false
  },

  {
    "id": 49,
    "disciplina": "Direito Constitucional",
    "assunto": "Organização dos Poderes",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Compete privativamente ao Senado Federal, nos termos do art. 52 da Constituição Federal de 1988:",
    "alternativas": {
      "A": "elaborar o orçamento anual da União.",
      "B": "processar e julgar o Presidente da República nos crimes de responsabilidade.",
      "C": "propor ações diretas de inconstitucionalidade.",
      "D": "editar medidas provisórias em caso de urgência."
    },
    "gabarito": "B",
    "comentario": "Compete privativamente ao Senado Federal processar e julgar o Presidente e o Vice-Presidente da República nos crimes de responsabilidade, entre outras competências privativas previstas no art. 52 da CF/1988.",
    "fundamento": "Art. 52, I, da Constituição Federal de 1988.",
    "oficial": false
  },

  {
    "id": 50,
    "disciplina": "Direito Constitucional",
    "assunto": "Administração Pública na CF/1988",
    "banca": "IDECAN",
    "ano": 2021,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 37 da Constituição Federal de 1988, a investidura em cargo ou emprego público depende de:",
    "alternativas": {
      "A": "livre nomeação pela autoridade competente, independentemente de qualquer processo seletivo.",
      "B": "aprovação prévia em concurso público de provas ou de provas e títulos, ressalvadas as nomeações para cargo em comissão.",
      "C": "indicação política do chefe do Poder Executivo, em qualquer hipótese.",
      "D": "tempo de experiência comprovado, dispensado qualquer certame público."
    },
    "gabarito": "B",
    "comentario": "A regra geral do art. 37, II, da CF/1988 exige aprovação prévia em concurso público de provas ou de provas e títulos, ressalvadas as nomeações para cargos em comissão declarados em lei de livre nomeação e exoneração.",
    "fundamento": "Art. 37, II, da Constituição Federal de 1988.",
    "oficial": false
  },

  {
    "id": 51,
    "disciplina": "Direito Constitucional",
    "assunto": "Direitos sociais",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "É direito social expressamente previsto no art. 6º da Constituição Federal de 1988:",
    "alternativas": {
      "A": "O lazer.",
      "B": "A liberdade de imprensa.",
      "C": "A soberania popular.",
      "D": "A livre concorrência."
    },
    "gabarito": "A",
    "comentario": "O art. 6º da CF/1988 prevê expressamente, entre outros, a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte e o lazer como direitos sociais.",
    "fundamento": "Art. 6º da Constituição Federal de 1988.",
    "oficial": false
  },

  {
    "id": 52,
    "disciplina": "Direito Constitucional",
    "assunto": "Processo legislativo",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a Constituição Federal de 1988, a espécie normativa destinada a regulamentar matérias expressamente reservadas pela Constituição, exigindo quórum de maioria absoluta para aprovação, denomina-se:",
    "alternativas": {
      "A": "Lei ordinária.",
      "B": "Lei complementar.",
      "C": "Medida provisória.",
      "D": "Decreto legislativo."
    },
    "gabarito": "B",
    "comentario": "A lei complementar destina-se a regulamentar matérias expressamente reservadas pela Constituição, exigindo, para sua aprovação, quórum de maioria absoluta, diferentemente da lei ordinária (maioria simples).",
    "fundamento": "Art. 69 da Constituição Federal de 1988.",
    "oficial": false
  },

  {
    "id": 53,
    "disciplina": "Direito Constitucional",
    "assunto": "Controle de constitucionalidade",
    "banca": "IDECAN",
    "ano": 2022,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A Ação Direta de Inconstitucionalidade (ADI) tem por finalidade:",
    "alternativas": {
      "A": "julgar crimes de responsabilidade praticados por autoridades públicas.",
      "B": "impugnar, em tese e perante o STF, lei ou ato normativo federal ou estadual em face da Constituição Federal.",
      "C": "garantir o exercício de direito líquido e certo lesado por ato de autoridade.",
      "D": "proteger a liberdade de locomoção do indivíduo."
    },
    "gabarito": "B",
    "comentario": "A ADI é instrumento de controle concentrado de constitucionalidade, destinado a impugnar, em tese (independentemente de caso concreto), lei ou ato normativo federal ou estadual perante o STF, em face da Constituição Federal.",
    "fundamento": "Art. 102, I, \"a\", da Constituição Federal de 1988.",
    "oficial": false
  },

  {
    "id": 54,
    "disciplina": "Direito Constitucional",
    "assunto": "Nacionalidade",
    "banca": "IDECAN",
    "ano": 2021,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "São considerados brasileiros natos, nos termos do art. 12, I, da Constituição Federal de 1988:",
    "alternativas": {
      "A": "os que adquirem a nacionalidade brasileira mediante naturalização ordinária.",
      "B": "os nascidos na República Federativa do Brasil, ainda que de pais estrangeiros, desde que estes não estejam a serviço de seu país.",
      "C": "os estrangeiros que residem no Brasil há mais de 15 anos ininterruptos.",
      "D": "os que, mesmo nascidos no exterior, nunca tiveram qualquer vínculo com o Brasil."
    },
    "gabarito": "B",
    "comentario": "São brasileiros natos, entre outras hipóteses, os nascidos na República Federativa do Brasil, ainda que de pais estrangeiros, desde que estes não estejam a serviço de seu país (critério do jus soli, com a ressalva do serviço estrangeiro).",
    "fundamento": "Art. 12, I, \"a\", da Constituição Federal de 1988.",
    "oficial": false
  },

  {
    "id": 55,
    "disciplina": "Direito Constitucional",
    "assunto": "Direitos políticos",
    "banca": "IDECAN",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Constitui hipótese de suspensão (e não de perda) dos direitos políticos, nos termos do art. 15 da Constituição Federal de 1988:",
    "alternativas": {
      "A": "O cancelamento da naturalização por sentença transitada em julgado.",
      "B": "A incapacidade civil absoluta.",
      "C": "A perda da nacionalidade brasileira originária, nos casos previstos em lei.",
      "D": "A cassação de mandato eletivo por infidelidade partidária."
    },
    "gabarito": "B",
    "comentario": "A incapacidade civil absoluta é hipótese de suspensão dos direitos políticos (art. 15, II, CF/1988). O cancelamento da naturalização e a perda da nacionalidade correspondem a hipóteses de perda, e a infidelidade partidária é disciplinada por matéria distinta, no âmbito eleitoral.",
    "fundamento": "Art. 15 da Constituição Federal de 1988.",
    "oficial": false
  },

  {
    "id": 56,
    "disciplina": "Direito Constitucional",
    "assunto": "Ordem social — saúde",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 196 da Constituição Federal de 1988, a saúde é direito de todos e dever do Estado, garantido mediante:",
    "alternativas": {
      "A": "políticas exclusivamente assistenciais, restritas à população de baixa renda.",
      "B": "políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos, e ao acesso universal e igualitário às ações e serviços de saúde.",
      "C": "contratação obrigatória de plano de saúde privado por todo cidadão brasileiro.",
      "D": "atendimento exclusivo em hospitais da rede privada conveniada ao SUS."
    },
    "gabarito": "B",
    "comentario": "O art. 196 da CF/1988 assegura a saúde como direito de todos e dever do Estado, garantida mediante políticas sociais e econômicas que reduzam o risco de doenças e garantam acesso universal e igualitário às ações e serviços de saúde.",
    "fundamento": "Art. 196 da Constituição Federal de 1988.",
    "oficial": false
  },

  {
    "id": 57,
    "disciplina": "Direito Administrativo",
    "assunto": "Atos administrativos — elementos",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "São elementos (requisitos) do ato administrativo, segundo a doutrina majoritária, EXCETO:",
    "alternativas": {
      "A": "Competência.",
      "B": "Finalidade.",
      "C": "Publicidade.",
      "D": "Motivo."
    },
    "gabarito": "C",
    "comentario": "Os elementos (ou requisitos) do ato administrativo são competência, finalidade, forma, motivo e objeto. A publicidade é princípio da Administração Pública, e não elemento do ato administrativo.",
    "fundamento": "Doutrina de Direito Administrativo — elementos do ato administrativo.",
    "oficial": false
  },

  {
    "id": 58,
    "disciplina": "Direito Administrativo",
    "assunto": "Atributos do ato administrativo",
    "banca": "IDECAN",
    "ano": 2022,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O atributo do ato administrativo que permite à Administração impor obrigações a terceiros unilateralmente, independentemente da concordância destes, denomina-se:",
    "alternativas": {
      "A": "Presunção de legitimidade.",
      "B": "Imperatividade.",
      "C": "Autoexecutoriedade.",
      "D": "Tipicidade."
    },
    "gabarito": "B",
    "comentario": "A imperatividade (ou coercibilidade) permite à Administração impor obrigações unilaterais a terceiros, independentemente de sua concordância, característica que distingue os atos administrativos dos atos de direito privado.",
    "fundamento": "Doutrina de Direito Administrativo — atributos do ato administrativo.",
    "oficial": false
  },

  {
    "id": 59,
    "disciplina": "Direito Administrativo",
    "assunto": "Atos vinculados e discricionários",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa correta a respeito dos atos administrativos vinculados e discricionários.",
    "alternativas": {
      "A": "No ato vinculado, a Administração pode escolher, segundo juízo de conveniência e oportunidade, o momento de sua prática.",
      "B": "No ato discricionário, a lei confere à Administração certa margem de liberdade quanto ao juízo de conveniência e oportunidade, dentro dos limites legais.",
      "C": "Todo ato administrativo é, por definição, discricionário.",
      "D": "O controle judicial é sempre integralmente vedado em relação aos atos discricionários, inclusive quanto aos seus aspectos de legalidade."
    },
    "gabarito": "B",
    "comentario": "No ato discricionário, a lei confere à Administração margem de liberdade de atuação (juízo de conveniência e oportunidade), sempre dentro dos limites legais, sendo os aspectos de legalidade sempre passíveis de controle judicial.",
    "fundamento": "Doutrina de Direito Administrativo — atos vinculados e discricionários.",
    "oficial": false
  },

  {
    "id": 60,
    "disciplina": "Direito Administrativo",
    "assunto": "Extinção dos atos administrativos",
    "banca": "IDECAN",
    "ano": 2021,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sobre a extinção dos atos administrativos, é correto afirmar que:",
    "alternativas": {
      "A": "a revogação opera efeitos retroativos (ex tunc), alcançando as relações jurídicas já constituídas sob a vigência do ato revogado.",
      "B": "a anulação é cabível para atos ilegais, produzindo, em regra, efeitos retroativos (ex tunc).",
      "C": "atos administrativos vinculados podem ser livremente revogados por conveniência e oportunidade da Administração.",
      "D": "a revogação e a anulação produzem exatamente os mesmos efeitos jurídicos."
    },
    "gabarito": "B",
    "comentario": "A anulação, cabível para atos ilegais, produz, em regra, efeitos retroativos (ex tunc), desfazendo o ato desde sua origem; já a revogação, cabível para atos legais mas inconvenientes/inoportunos, produz efeitos prospectivos (ex nunc).",
    "fundamento": "Doutrina de Direito Administrativo — anulação e revogação dos atos administrativos; Súmula 473 do STF.",
    "oficial": false
  },

  {
    "id": 61,
    "disciplina": "Direito Administrativo",
    "assunto": "Princípio da eficiência",
    "banca": "IDECAN",
    "ano": 2022,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O princípio constitucional expressamente incluído no art. 37, caput, da CF/1988 pela Emenda Constitucional nº 19/1998, relacionado à busca por melhores resultados na prestação dos serviços públicos, é o princípio da:",
    "alternativas": {
      "A": "Legalidade.",
      "B": "Impessoalidade.",
      "C": "Eficiência.",
      "D": "Publicidade."
    },
    "gabarito": "C",
    "comentario": "O princípio da eficiência foi incluído expressamente no art. 37, caput, da CF/1988 pela Emenda Constitucional nº 19/1998, voltado à busca por melhores resultados na atuação administrativa.",
    "fundamento": "Art. 37, caput, da Constituição Federal de 1988 (redação dada pela EC nº 19/1998).",
    "oficial": false
  },

  {
    "id": 62,
    "disciplina": "Direito Administrativo",
    "assunto": "Princípio da moralidade",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O princípio da moralidade administrativa exige que a atuação da Administração Pública observe:",
    "alternativas": {
      "A": "apenas os ditames da lei escrita, sendo irrelevante qualquer padrão ético de conduta.",
      "B": "padrões éticos de probidade, decoro e boa-fé, que se somam à legalidade estrita da atuação administrativa.",
      "C": "exclusivamente as convicções religiosas dos agentes públicos envolvidos.",
      "D": "critérios de conveniência política do governante, independentemente de qualquer parâmetro ético."
    },
    "gabarito": "B",
    "comentario": "A moralidade administrativa exige que a atuação da Administração observe padrões éticos de probidade, decoro e boa-fé, para além da mera legalidade formal.",
    "fundamento": "Art. 37, caput, da Constituição Federal de 1988; doutrina de Direito Administrativo.",
    "oficial": false
  },

  {
    "id": 63,
    "disciplina": "Direito Administrativo",
    "assunto": "Organização administrativa — autarquia",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A autarquia, entidade integrante da Administração Pública Indireta, caracteriza-se por:",
    "alternativas": {
      "A": "ser pessoa jurídica de direito privado, criada mediante registro de seus atos constitutivos.",
      "B": "ser pessoa jurídica de direito público, criada diretamente por lei específica, com capacidade de autoadministração.",
      "C": "admitir a participação de capital privado em seu quadro societário.",
      "D": "estar subordinada hierarquicamente ao órgão que a supervisiona, sem qualquer autonomia administrativa."
    },
    "gabarito": "B",
    "comentario": "A autarquia é pessoa jurídica de direito público, criada diretamente por lei específica (nascendo com a própria lei, sem necessidade de registro de atos constitutivos), dotada de capacidade de autoadministração, mas sem autonomia política.",
    "fundamento": "Art. 37, XIX, da Constituição Federal de 1988; doutrina de Direito Administrativo.",
    "oficial": false
  },

  {
    "id": 64,
    "disciplina": "Direito Administrativo",
    "assunto": "Organização administrativa — fundação pública",
    "banca": "IDECAN",
    "ano": 2021,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "As fundações públicas de direito privado, quando instituídas pelo Poder Público para a prestação de serviços de interesse social, submetem-se a:",
    "alternativas": {
      "A": "regime jurídico integralmente privado, sem qualquer incidência de normas de direito público.",
      "B": "regime jurídico híbrido, predominantemente privado, mas derrogado por normas de direito público, notadamente quanto ao controle e à responsabilidade civil.",
      "C": "regime jurídico idêntico ao das empresas privadas, inclusive quanto à falência.",
      "D": "regime exclusivamente castrense, próprio das entidades militares."
    },
    "gabarito": "B",
    "comentario": "As fundações públicas de direito privado submetem-se a regime híbrido: predominantemente privado, mas com derrogações por normas de direito público, sobretudo quanto ao controle finalístico e à responsabilidade civil do Estado.",
    "fundamento": "Doutrina de Direito Administrativo — organização da Administração Indireta.",
    "oficial": false
  },

  {
    "id": 65,
    "disciplina": "Direito Administrativo",
    "assunto": "Poder regulamentar",
    "banca": "IDECAN",
    "ano": 2022,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O poder que autoriza o Chefe do Poder Executivo a expedir decretos e regulamentos para a fiel execução das leis, sem inovar na ordem jurídica, denomina-se poder:",
    "alternativas": {
      "A": "Disciplinar.",
      "B": "Hierárquico.",
      "C": "Regulamentar.",
      "D": "De polícia."
    },
    "gabarito": "C",
    "comentario": "O poder regulamentar autoriza o Chefe do Executivo a expedir decretos e regulamentos destinados a explicitar a fiel execução das leis, sem inovar na ordem jurídica.",
    "fundamento": "Art. 84, IV, da Constituição Federal de 1988; doutrina de Direito Administrativo.",
    "oficial": false
  },

  {
    "id": 66,
    "disciplina": "Direito Administrativo",
    "assunto": "Poder disciplinar",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O poder que permite à Administração apurar infrações funcionais e aplicar penalidades aos servidores a ela vinculados, observado o devido processo legal, denomina-se poder:",
    "alternativas": {
      "A": "Regulamentar.",
      "B": "Disciplinar.",
      "C": "De polícia.",
      "D": "Vinculado."
    },
    "gabarito": "B",
    "comentario": "O poder disciplinar permite à Administração apurar infrações funcionais e aplicar penalidades a seus servidores, sempre observado o devido processo legal, o contraditório e a ampla defesa.",
    "fundamento": "Doutrina de Direito Administrativo — poderes administrativos.",
    "oficial": false
  },

  {
    "id": 67,
    "disciplina": "Direito Administrativo",
    "assunto": "Licitações — princípios",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "São princípios expressamente previstos na Lei nº 14.133/2021 para reger as licitações e contratos administrativos, EXCETO:",
    "alternativas": {
      "A": "Legalidade.",
      "B": "Julgamento objetivo.",
      "C": "Sigilo absoluto dos atos licitatórios.",
      "D": "Segregação de funções."
    },
    "gabarito": "C",
    "comentario": "A Lei nº 14.133/2021 consagra a publicidade e a transparência como regra dos processos licitatórios, não havendo previsão de \"sigilo absoluto\" dos atos licitatórios, que seria incompatível com os princípios da lei.",
    "fundamento": "Art. 5º da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 68,
    "disciplina": "Direito Administrativo",
    "assunto": "Licitações — modalidades",
    "banca": "IDECAN",
    "ano": 2025,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos da Lei nº 14.133/2021, são modalidades de licitação, EXCETO:",
    "alternativas": {
      "A": "Pregão.",
      "B": "Concorrência.",
      "C": "Tomada de preços.",
      "D": "Concurso."
    },
    "gabarito": "C",
    "comentario": "A \"tomada de preços\", modalidade prevista na revogada Lei nº 8.666/1993, foi extinta pela Lei nº 14.133/2021, que prevê como modalidades o pregão, a concorrência, o concurso, o leilão e o diálogo competitivo.",
    "fundamento": "Art. 28 da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 69,
    "disciplina": "Direito Administrativo",
    "assunto": "Improbidade administrativa",
    "banca": "IDECAN",
    "ano": 2021,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 9º da Lei nº 8.429/1992, constitui ato de improbidade administrativa que importa enriquecimento ilícito:",
    "alternativas": {
      "A": "receber vantagem econômica indevida, para si ou para outrem, em razão do exercício de cargo, mandato, função, emprego ou atividade públicos.",
      "B": "a mera perda de prazo processual, sem qualquer proveito patrimonial.",
      "C": "a divergência de interpretação jurídica razoável sobre matéria controvertida.",
      "D": "o exercício regular de direito, sem qualquer vantagem indevida."
    },
    "gabarito": "A",
    "comentario": "Constitui enriquecimento ilícito, nos termos do art. 9º da Lei nº 8.429/1992, auferir, para si ou para outrem, vantagem patrimonial indevida em razão do exercício de cargo, mandato, função, emprego ou atividade públicos.",
    "fundamento": "Art. 9º da Lei nº 8.429/1992.",
    "oficial": false
  },

  {
    "id": 70,
    "disciplina": "Direito Administrativo",
    "assunto": "Servidores públicos — estabilidade",
    "banca": "IDECAN",
    "ano": 2022,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 41 da Constituição Federal de 1988, são estáveis, após 3 anos de efetivo exercício, os servidores nomeados para cargo de provimento efetivo em virtude de:",
    "alternativas": {
      "A": "indicação política da autoridade nomeante.",
      "B": "concurso público.",
      "C": "contrato temporário de excepcional interesse público.",
      "D": "cargo em comissão de livre nomeação e exoneração."
    },
    "gabarito": "B",
    "comentario": "A estabilidade, após 3 anos de efetivo exercício, aplica-se aos servidores nomeados para cargo de provimento efetivo em virtude de concurso público, nos termos do art. 41 da CF/1988.",
    "fundamento": "Art. 41 da Constituição Federal de 1988.",
    "oficial": false
  },

  {
    "id": 71,
    "disciplina": "Direito Penal",
    "assunto": "Crimes contra a Administração — peculato",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O funcionário público que se apropria de dinheiro, valor ou bem móvel de que tem a posse em razão do cargo, desviando-o em proveito próprio ou alheio, comete o crime de:",
    "alternativas": {
      "A": "Peculato.",
      "B": "Concussão.",
      "C": "Corrupção passiva.",
      "D": "Prevaricação."
    },
    "gabarito": "A",
    "comentario": "A conduta descrita corresponde ao peculato-apropriação, previsto no art. 312, caput, do Código Penal.",
    "fundamento": "Art. 312 do Código Penal.",
    "oficial": false
  },

  {
    "id": 72,
    "disciplina": "Direito Penal",
    "assunto": "Aplicação da lei penal no tempo",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Em regra, a lei penal aplica-se ao fato praticado durante sua vigência (tempus regit actum). Contudo, é correto afirmar que:",
    "alternativas": {
      "A": "a lei penal mais gravosa pode retroagir para prejudicar o réu, se assim dispuser expressamente.",
      "B": "a lei penal mais benéfica ao réu retroage, ainda que o fato já tenha sido definitivamente julgado.",
      "C": "a irretroatividade é absoluta, não comportando exceções em nenhuma hipótese.",
      "D": "apenas normas processuais penais podem retroagir, nunca as de direito penal material."
    },
    "gabarito": "B",
    "comentario": "A lei penal mais benéfica (novatio legis in mellius) retroage em favor do réu, alcançando até mesmo fatos já definitivamente julgados, por força do princípio constitucional da retroatividade da lei penal benéfica.",
    "fundamento": "Art. 5º, XL, da Constituição Federal de 1988; art. 2º, parágrafo único, do Código Penal.",
    "oficial": false
  },

  {
    "id": 73,
    "disciplina": "Direito Penal",
    "assunto": "Teoria do crime — dolo e culpa",
    "banca": "IDECAN",
    "ano": 2022,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Age com culpa, e não com dolo, o agente que:",
    "alternativas": {
      "A": "quer diretamente o resultado.",
      "B": "assume o risco de produzir o resultado, aceitando-o.",
      "C": "dá causa ao resultado por imprudência, negligência ou imperícia, sem querê-lo ou assumir o risco de produzi-lo.",
      "D": "planeja premeditadamente a conduta criminosa."
    },
    "gabarito": "C",
    "comentario": "O crime culposo caracteriza-se pela inobservância de um dever objetivo de cuidado (imprudência, negligência ou imperícia), sem que o agente queira o resultado ou assuma o risco de produzi-lo, distinguindo-se do dolo direto e do dolo eventual.",
    "fundamento": "Art. 18 do Código Penal.",
    "oficial": false
  },

  {
    "id": 74,
    "disciplina": "Direito Penal",
    "assunto": "Crimes contra a Administração — prevaricação",
    "banca": "IDECAN",
    "ano": 2021,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O funcionário público que retarda ou deixa de praticar, indevidamente, ato de ofício, ou o pratica contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal, comete o crime de:",
    "alternativas": {
      "A": "Concussão.",
      "B": "Prevaricação.",
      "C": "Corrupção ativa.",
      "D": "Peculato culposo."
    },
    "gabarito": "B",
    "comentario": "A conduta descrita corresponde exatamente ao tipo penal de prevaricação, que exige o especial fim de satisfazer interesse ou sentimento pessoal.",
    "fundamento": "Art. 319 do Código Penal.",
    "oficial": false
  },

  {
    "id": 75,
    "disciplina": "Administração Pública",
    "assunto": "Planejamento estratégico",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Na Administração Pública, a ferramenta de diagnóstico que analisa forças, fraquezas, oportunidades e ameaças de uma organização, subsidiando o planejamento estratégico, denomina-se:",
    "alternativas": {
      "A": "Análise SWOT (ou FOFA).",
      "B": "Ciclo PDCA.",
      "C": "Diagrama de Ishikawa.",
      "D": "Balanced Scorecard exclusivamente."
    },
    "gabarito": "A",
    "comentario": "A análise SWOT (Strengths, Weaknesses, Opportunities, Threats), também conhecida como FOFA, é a ferramenta clássica de diagnóstico estratégico que analisa forças, fraquezas, oportunidades e ameaças.",
    "fundamento": "Administração Pública — planejamento estratégico.",
    "oficial": false
  },

  {
    "id": 76,
    "disciplina": "Administração Pública",
    "assunto": "Gestão de processos",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O mapeamento de processos administrativos, com vistas a identificar etapas, responsáveis e gargalos de um fluxo de trabalho, tem por principal objetivo:",
    "alternativas": {
      "A": "aumentar a burocracia do órgão, adicionando etapas desnecessárias.",
      "B": "compreender e otimizar o funcionamento do processo, eliminando redundâncias e melhorando a eficiência.",
      "C": "dificultar o acesso do cidadão às informações sobre o andamento de seu processo.",
      "D": "substituir integralmente a necessidade de servidores no órgão."
    },
    "gabarito": "B",
    "comentario": "O mapeamento de processos busca compreender o funcionamento do fluxo de trabalho para otimizá-lo, eliminando redundâncias e gargalos, em consonância com o princípio da eficiência administrativa.",
    "fundamento": "Administração Pública — gestão de processos.",
    "oficial": false
  },

  {
    "id": 77,
    "disciplina": "Administração Pública",
    "assunto": "Orçamento público",
    "banca": "IDECAN",
    "ano": 2022,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A Lei Orçamentária Anual (LOA) tem por finalidade:",
    "alternativas": {
      "A": "estabelecer o planejamento de médio prazo (quatro anos) da Administração Pública.",
      "B": "estimar a receita e fixar a despesa para o exercício financeiro correspondente, viabilizando a execução das políticas públicas.",
      "C": "substituir a Lei de Diretrizes Orçamentárias em todas as suas funções.",
      "D": "dispensar qualquer controle do Poder Legislativo sobre a execução orçamentária."
    },
    "gabarito": "B",
    "comentario": "A LOA estima a receita e fixa a despesa para o exercício financeiro correspondente (anual), sendo distinta do PPA (médio prazo) e da LDO (diretrizes anuais que orientam a própria LOA).",
    "fundamento": "Art. 165, III, da Constituição Federal de 1988; Lei nº 4.320/1964.",
    "oficial": false
  },

  {
    "id": 78,
    "disciplina": "Administração Pública",
    "assunto": "Atendimento ao público",
    "banca": "IDECAN",
    "ano": 2021,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "No atendimento ao cidadão, constitui boa prática de gestão pública, compatível com os princípios constitucionais aplicáveis:",
    "alternativas": {
      "A": "priorizar informalmente pessoas com relação pessoal com o servidor.",
      "B": "fornecer informações claras, tratar o cidadão com urbanidade e observar a ordem de atendimento, sem discriminações.",
      "C": "recusar-se a informar prazos e requisitos ao cidadão, para evitar questionamentos futuros.",
      "D": "exigir documentos não previstos em lei ou regulamento, a critério pessoal do atendente."
    },
    "gabarito": "B",
    "comentario": "O atendimento ao público deve observar impessoalidade e eficiência, fornecendo informações claras, tratando o cidadão com urbanidade e observando a ordem de atendimento, sem favorecimentos pessoais.",
    "fundamento": "Art. 37, caput, da Constituição Federal de 1988 — princípios da impessoalidade e da eficiência.",
    "oficial": false
  },

  {
    "id": 79,
    "disciplina": "Administração Pública",
    "assunto": "Arquivologia",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a teoria das três idades dos documentos de arquivo, os documentos que já não têm uso corrente, mas ainda podem ser consultados esporadicamente, aguardando prazo de guarda antes de sua destinação final, integram o arquivo:",
    "alternativas": {
      "A": "Corrente.",
      "B": "Intermediário.",
      "C": "Permanente.",
      "D": "Setorial."
    },
    "gabarito": "B",
    "comentario": "O arquivo intermediário reúne documentos de uso pouco frequente, que aguardam, em depósito de custódia temporária, o cumprimento de prazos antes de sua destinação final (eliminação ou recolhimento ao arquivo permanente).",
    "fundamento": "Arquivologia — teoria das três idades documentais.",
    "oficial": false
  },

  {
    "id": 80,
    "disciplina": "Administração Pública",
    "assunto": "Redação oficial",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o padrão ofício de redação oficial, os elementos que compõem um expediente como o ofício ou o memorando incluem, entre outros:",
    "alternativas": {
      "A": "cabeçalho, vocativo informal, gírias regionais e assinatura manuscrita obrigatória.",
      "B": "tipo e número do expediente, local e data, assunto, destinatário, texto e fecho.",
      "C": "apenas o texto corrido, sem qualquer padronização de formato.",
      "D": "exclusivamente linguagem coloquial, para aproximar o órgão do cidadão."
    },
    "gabarito": "B",
    "comentario": "O padrão ofício estrutura os expedientes com elementos padronizados: tipo e número, local e data, assunto, destinatário, texto e fecho, sempre em linguagem formal, clara e impessoal.",
    "fundamento": "Manual de Redação da Presidência da República — padrão ofício.",
    "oficial": false
  },

  {
    "id": 81,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Fases do processo licitatório",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 17 da Lei nº 14.133/2021, o processo de licitação observará as seguintes fases, em regra, nesta sequência:",
    "alternativas": {
      "A": "preparatória; divulgação do edital; apresentação de propostas; julgamento; habilitação; recursal; homologação.",
      "B": "habilitação; julgamento; divulgação do edital; apresentação de propostas; recursal; homologação; preparatória.",
      "C": "divulgação do edital; preparatória; habilitação; julgamento; apresentação de propostas; homologação; recursal.",
      "D": "preparatória; habilitação; divulgação do edital; julgamento; apresentação de propostas; homologação; recursal."
    },
    "gabarito": "A",
    "comentario": "O art. 17 da Lei nº 14.133/2021 estabelece a sequência: fase preparatória, divulgação do edital, apresentação de propostas e lances, julgamento, habilitação, fase recursal e homologação, invertendo-se, como regra geral, a ordem tradicional ao colocar o julgamento antes da habilitação.",
    "fundamento": "Art. 17, caput e incisos, da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 82,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Modalidades",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "No que se refere às modalidades de licitação previstas na Lei nº 14.133/2021, é correto afirmar que o pregão:",
    "alternativas": {
      "A": "pode ser utilizado para contratação de serviços técnicos especializados de natureza predominantemente intelectual.",
      "B": "é de uso obrigatório para aquisição de bens e serviços comuns, sendo o critério de julgamento sempre o de menor preço ou maior desconto.",
      "C": "admite julgamento pelo critério de melhor técnica ou técnica e preço, a critério do agente de contratação.",
      "D": "é modalidade reservada exclusivamente à contratação de obras de engenharia de grande vulto."
    },
    "gabarito": "B",
    "comentario": "O pregão é de uso obrigatório para aquisição de bens e serviços comuns, e o julgamento das propostas é feito exclusivamente pelo critério de menor preço ou maior desconto, não admitindo os critérios de técnica e preço nessa modalidade.",
    "fundamento": "Art. 6º, XLI, e art. 29 da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 83,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Diálogo competitivo",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A modalidade de licitação diálogo competitivo, inovação trazida pela Lei nº 14.133/2021, é cabível, entre outras hipóteses, quando:",
    "alternativas": {
      "A": "a Administração pretende contratar bens e serviços comuns de baixa complexidade técnica.",
      "B": "o objeto da contratação for a venda de bens móveis inservíveis à Administração.",
      "C": "envolver inovação tecnológica ou técnica, e a Administração não puder ter suas necessidades satisfeitas sem a adaptação de soluções disponíveis no mercado.",
      "D": "houver fornecedor exclusivo do bem ou serviço a ser contratado."
    },
    "gabarito": "C",
    "comentario": "O diálogo competitivo destina-se a contratações que envolvam inovação tecnológica ou técnica, impossibilidade de a Administração satisfazer suas necessidades sem a adaptação de soluções disponíveis no mercado, ou impossibilidade de as especificações técnicas serem definidas com precisão suficiente pela Administração.",
    "fundamento": "Art. 6º, XLII, e art. 32 da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 84,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Dispensa de licitação",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Acerca da dispensa de licitação na Lei nº 14.133/2021, é correto afirmar que:",
    "alternativas": {
      "A": "as hipóteses de dispensa constituem rol exemplificativo, podendo a Administração ampliá-las por ato infralegal.",
      "B": "a dispensa de licitação, ao contrário da inexigibilidade, pressupõe a impossibilidade jurídica de competição entre fornecedores.",
      "C": "a dispensa de licitação dispensa, em qualquer hipótese, a formalização de processo administrativo correspondente.",
      "D": "as hipóteses de dispensa constituem rol taxativo, previsto no art. 75 da Lei, não podendo ser ampliadas por vontade do administrador."
    },
    "gabarito": "D",
    "comentario": "Diferentemente da inexigibilidade (rol exemplificativo, pois decorre da inviabilidade fática de competição), as hipóteses de dispensa de licitação constituem rol taxativo previsto no art. 75 da Lei nº 14.133/2021, não comportando ampliação pelo administrador.",
    "fundamento": "Art. 75 da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 85,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Inexigibilidade",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sobre a inexigibilidade de licitação prevista no art. 74 da Lei nº 14.133/2021, é correto afirmar que:",
    "alternativas": {
      "A": "decorre da inviabilidade fática de competição entre fornecedores, constituindo rol meramente exemplificativo.",
      "B": "somente é cabível para contratação de serviços de valor inferior ao limite legal estabelecido para dispensa.",
      "C": "exige, sempre, autorização prévia do Tribunal de Contas competente para sua configuração.",
      "D": "é incompatível com a contratação de profissional de notória especialização para serviço técnico singular."
    },
    "gabarito": "A",
    "comentario": "A inexigibilidade decorre da inviabilidade fática (e não legal) de competição, sendo o rol do art. 74 meramente exemplificativo, ao contrário do rol taxativo da dispensa. A contratação de profissional de notória especialização para serviço técnico singular é, aliás, hipótese clássica de inexigibilidade.",
    "fundamento": "Art. 74 da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 86,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Credenciamento",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O credenciamento, previsto como procedimento auxiliar na Lei nº 14.133/2021, caracteriza-se por:",
    "alternativas": {
      "A": "ser modalidade autônoma de licitação, distinta do pregão e da concorrência.",
      "B": "configurar hipótese de inexigibilidade de licitação, viabilizando a contratação simultânea de todos os interessados que atendam a condições preestabelecidas, em situação de igualdade.",
      "C": "ser aplicável exclusivamente a contratos de obras públicas de grande vulto.",
      "D": "exigir, obrigatoriamente, a realização de certame competitivo entre os credenciados."
    },
    "gabarito": "B",
    "comentario": "O credenciamento é procedimento auxiliar que configura hipótese de inexigibilidade de licitação, pois viabiliza a contratação simultânea de todos os interessados que preencham as condições estabelecidas pela Administração, em situação de igualdade, sem competição entre eles.",
    "fundamento": "Art. 6º, XLIII, e art. 79 da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 87,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Sistema de Registro de Preços",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "No Sistema de Registro de Preços (SRP) disciplinado pela Lei nº 14.133/2021, o prazo de vigência da ata de registro de preços:",
    "alternativas": {
      "A": "é de 6 meses, improrrogável.",
      "B": "é de 5 anos, coincidindo com a vigência do Plano Plurianual.",
      "C": "é de 1 ano, podendo ser prorrogado por igual período, desde que comprovado o preço vantajoso.",
      "D": "não possui prazo definido em lei, ficando a critério exclusivo do órgão gerenciador."
    },
    "gabarito": "C",
    "comentario": "A ata de registro de preços tem prazo de vigência de 1 (um) ano, prorrogável por igual período, desde que comprovado o preço vantajoso, totalizando, no máximo, 2 (dois) anos de vigência.",
    "fundamento": "Art. 84 da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 88,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Matriz de risco",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A matriz de riscos, disciplinada na Lei nº 14.133/2021, tem por finalidade:",
    "alternativas": {
      "A": "eliminar integralmente o risco de qualquer das partes contratantes, transferindo-o à seguradora.",
      "B": "substituir a exigência de garantia contratual nos contratos de grande vulto.",
      "C": "ser aplicável exclusivamente aos contratos de aquisição de bens de consumo.",
      "D": "definir, em cláusula contratual, a alocação de riscos e responsabilidades entre as partes, caracterizando o equilíbrio econômico-financeiro inicial do contrato."
    },
    "gabarito": "D",
    "comentario": "A matriz de riscos é cláusula contratual que define a alocação de riscos e responsabilidades entre as partes contratantes, caracterizando o equilíbrio econômico-financeiro inicial do contrato, sendo obrigatória em contratações de obras e serviços de grande vulto ou que adotem regimes de contratação integrada ou semi-integrada.",
    "fundamento": "Art. 6º, XXVII, e art. 22 da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 89,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Garantias contratuais",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sobre as garantias contratuais previstas na Lei nº 14.133/2021, é correto afirmar que:",
    "alternativas": {
      "A": "podem ser prestadas nas modalidades de caução em dinheiro ou títulos da dívida pública, seguro-garantia ou fiança bancária, a critério do contratado.",
      "B": "são sempre facultativas, não podendo a Administração exigi-las em nenhuma hipótese.",
      "C": "limitam-se, em qualquer caso, a 1% do valor do contrato, independentemente de seu objeto ou complexidade.",
      "D": "somente podem ser prestadas em dinheiro, sendo vedadas as demais modalidades previstas na lei revogada."
    },
    "gabarito": "A",
    "comentario": "A Lei nº 14.133/2021 admite que a garantia contratual seja prestada, à escolha do contratado, em uma das modalidades: caução em dinheiro ou em títulos da dívida pública, seguro-garantia ou fiança bancária, com percentuais que variam, em regra, até 5% do valor do contrato (podendo chegar a 10% em hipóteses específicas).",
    "fundamento": "Art. 96 a 98 da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 90,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Sanções administrativas",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "São sanções administrativas aplicáveis ao licitante ou contratado nos termos do art. 156 da Lei nº 14.133/2021, EXCETO:",
    "alternativas": {
      "A": "advertência.",
      "B": "perda automática e imediata do registro profissional perante o respectivo conselho de classe.",
      "C": "multa.",
      "D": "impedimento de licitar e contratar."
    },
    "gabarito": "B",
    "comentario": "As sanções previstas no art. 156 da Lei nº 14.133/2021 são: advertência, multa, impedimento de licitar e contratar, e declaração de inidoneidade para licitar ou contratar. A perda de registro profissional perante conselho de classe não é sanção prevista nessa lei, dependendo de processo próprio no âmbito do respectivo conselho.",
    "fundamento": "Art. 156 da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 91,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Formalização da contratação direta",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Para a formalização de processo de contratação direta (dispensa ou inexigibilidade), a Lei nº 14.133/2021 exige, entre outros elementos:",
    "alternativas": {
      "A": "unicamente a autorização verbal da autoridade competente, dispensada qualquer formalização escrita.",
      "B": "prévia aprovação do Tribunal de Contas em todos os casos, sem exceção.",
      "C": "documento de formalização de demanda, estimativa de despesa, parecer jurídico e comprovação de que o contratado preenche os requisitos de habilitação.",
      "D": "realização de, no mínimo, três orçamentos de fornecedores distintos, em qualquer hipótese, sob pena de nulidade."
    },
    "gabarito": "C",
    "comentario": "O art. 72 da Lei nº 14.133/2021 exige, entre outros requisitos, documento de formalização de demanda, estimativa de despesa, parecer jurídico e técnico, comprovação de que o contratado preenche os requisitos de habilitação e qualificação mínima, e justificativa de preço.",
    "fundamento": "Art. 72 da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 92,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Agente de contratação",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a Lei nº 14.133/2021, o agente de contratação é:",
    "alternativas": {
      "A": "necessariamente um profissional terceirizado, contratado especificamente para cada certame.",
      "B": "sempre substituído, obrigatoriamente, por comissão de licitação em qualquer modalidade licitatória.",
      "C": "figura extinta pela Lei nº 14.133/2021, que não prevê mais essa designação.",
      "D": "pessoa designada pela autoridade competente, entre servidores efetivos ou empregados públicos dos quadros permanentes, para tomar decisões e conduzir o processo licitatório, podendo ser substituído por comissão em licitações que envolvam bens ou serviços especiais."
    },
    "gabarito": "D",
    "comentario": "O agente de contratação é designado pela autoridade competente, dentre servidores efetivos ou empregados públicos dos quadros permanentes, para tomar decisões, acompanhar o trâmite e impulsionar o processo licitatório, podendo ser substituído por comissão de contratação em licitações que envolvam bens ou serviços especiais.",
    "fundamento": "Art. 8º da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 93,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Plano de Contratações Anual",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O Plano de Contratações Anual (PCA), previsto na Lei nº 14.133/2021, tem por finalidade principal:",
    "alternativas": {
      "A": "consolidar as contratações planejadas pelo órgão ou entidade para o exercício subsequente, racionalizando as licitações e sinalizando intenções de contratação ao mercado.",
      "B": "substituir integralmente o edital de licitação em contratações de pequeno valor.",
      "C": "servir exclusivamente como instrumento de fiscalização financeira pelos Tribunais de Contas.",
      "D": "substituir a Lei Orçamentária Anual como instrumento de planejamento de despesas."
    },
    "gabarito": "A",
    "comentario": "O PCA é instrumento de planejamento que consolida as contratações que o órgão ou entidade pretende realizar no exercício subsequente, contribuindo para a racionalização das licitações e para o direcionamento das ações de compras públicas, além de sinalizar intenções ao mercado fornecedor.",
    "fundamento": "Art. 12, VII, da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 94,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Critérios de julgamento",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "São critérios de julgamento das propostas previstos na Lei nº 14.133/2021, EXCETO:",
    "alternativas": {
      "A": "menor preço.",
      "B": "menor prazo de entrega, isoladamente, como critério autônomo e exclusivo em qualquer modalidade.",
      "C": "maior desconto.",
      "D": "técnica e preço."
    },
    "gabarito": "B",
    "comentario": "Os critérios de julgamento previstos são: menor preço, maior desconto, melhor técnica ou conteúdo artístico, técnica e preço, maior lance (no leilão) e maior retorno econômico. O \"menor prazo de entrega\" isoladamente não constitui critério de julgamento autônomo previsto na lei.",
    "fundamento": "Art. 33 da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 95,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Impedimentos e vedações",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 14 da Lei nº 14.133/2021, é vedada a participação, direta ou indireta, em licitação ou na execução de contrato, entre outros, de:",
    "alternativas": {
      "A": "qualquer empresa privada, independentemente de vínculo com agentes públicos do órgão licitante.",
      "B": "empresas de grande porte, em favor exclusivo de microempresas e empresas de pequeno porte.",
      "C": "servidor ou empregado do órgão ou entidade contratante, ou de agente público que tenha relação de parentesco com autoridade do órgão contratante que atue na fiscalização ou gestão do contrato.",
      "D": "profissionais liberais que já tenham sido contratados pela Administração em exercícios anteriores."
    },
    "gabarito": "C",
    "comentario": "O art. 14 veda a participação de servidor ou empregado do órgão contratante, bem como de agentes que tenham relação de parentesco com autoridade do órgão que atue na fiscalização, gestão ou celebração do contrato, entre outras hipóteses de conflito de interesse.",
    "fundamento": "Art. 14 da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 96,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Recursos administrativos",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "No processo licitatório disciplinado pela Lei nº 14.133/2021, cabe recurso administrativo, no prazo geral de 3 (três) dias úteis, contra atos como:",
    "alternativas": {
      "A": "a mera publicação do edital de licitação, antes de qualquer ato decisório.",
      "B": "a simples divulgação do resultado de pesquisa de preços, sem qualquer efeito decisório.",
      "C": "atos de mero expediente interno, sem qualquer repercussão sobre direitos dos licitantes.",
      "D": "o julgamento das propostas, o ato de habilitação ou inabilitação do licitante, e a anulação ou revogação da licitação."
    },
    "gabarito": "D",
    "comentario": "Cabe recurso administrativo, no prazo geral de 3 dias úteis, contra atos como o julgamento das propostas, a habilitação ou inabilitação do licitante, e a anulação ou revogação da licitação, entre outros atos decisórios com repercussão sobre os direitos dos licitantes.",
    "fundamento": "Art. 165 a 168 da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 97,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Concorrência e concurso",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sobre as modalidades concorrência e concurso na Lei nº 14.133/2021, é correto afirmar que:",
    "alternativas": {
      "A": "a concorrência é utilizada para contratação de bens e serviços especiais e de obras e serviços comuns e especiais de engenharia; o concurso destina-se à escolha de trabalho técnico, científico ou artístico, mediante concessão de prêmio ou remuneração ao vencedor.",
      "B": "o concurso é utilizado exclusivamente para contratação de obras públicas de grande vulto.",
      "C": "a concorrência não admite critério de julgamento por melhor técnica ou técnica e preço, sendo restrita ao menor preço.",
      "D": "concorrência e concurso são modalidades idênticas, apenas com nomenclaturas distintas conforme a região do país."
    },
    "gabarito": "A",
    "comentario": "A concorrência destina-se, em regra, à contratação de bens e serviços especiais e de obras e serviços comuns e especiais de engenharia, admitindo diversos critérios de julgamento; o concurso destina-se à escolha de trabalho técnico, científico ou artístico, com concessão de prêmio ou remuneração ao vencedor.",
    "fundamento": "Art. 6º, XXXVIII e XXXIX, e arts. 29-30 da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 98,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Leilão",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A modalidade de licitação leilão, na Lei nº 14.133/2021, é utilizada para:",
    "alternativas": {
      "A": "a contratação de serviços técnicos especializados de natureza intelectual.",
      "B": "a venda de bens móveis inservíveis para a Administração ou de produtos legalmente apreendidos, ou ainda de bens imóveis, a quem oferecer o maior lance.",
      "C": "a contratação de obras públicas de grande vulto, mediante julgamento por técnica e preço.",
      "D": "a escolha de trabalho técnico, científico ou artístico mediante concessão de prêmio ao vencedor."
    },
    "gabarito": "B",
    "comentario": "O leilão destina-se à venda de bens móveis inservíveis para a Administração, de produtos legalmente apreendidos ou penhorados, ou de bens imóveis cuja aquisição derivou de procedimentos judiciais ou de dação em pagamento, a quem oferecer o maior lance.",
    "fundamento": "Art. 6º, XL, e art. 31 da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 99,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Contratação integrada e semi-integrada",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos regimes de contratação integrada e semi-integrada, previstos na Lei nº 14.133/2021, é correto afirmar que:",
    "alternativas": {
      "A": "ambos dispensam, em qualquer hipótese, a elaboração de matriz de riscos.",
      "B": "são regimes idênticos ao de execução por empreitada por preço unitário, apenas com nomenclatura distinta.",
      "C": "na contratação integrada, o contratado é responsável por elaborar e desenvolver os projetos básico e executivo, executar obras e serviços de engenharia e montagem, realizar testes e pré-operação, entregando ao final o objeto com as condições de operação, mediante metodologia de execução definida em termo de referência.",
      "D": "são vedados para contratações de obras e serviços de engenharia, sendo restritos a compras de bens de consumo."
    },
    "gabarito": "C",
    "comentario": "Na contratação integrada, o contratado elabora e desenvolve os projetos básico e executivo, executa obras e serviços de engenharia, realiza testes e entrega o objeto com as condições de operação, mediante anteprojeto e metodologia definidos pela Administração, sendo obrigatória, nesses regimes, a matriz de riscos.",
    "fundamento": "Art. 6º, XXXII e XXXIII, e art. 22 da Lei nº 14.133/2021.",
    "oficial": false
  },

  {
    "id": 100,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Licitações — Pesquisa de preços",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Para fins de estimativa do valor da contratação, a pesquisa de preços na Lei nº 14.133/2021 deve ser realizada, preferencialmente, mediante:",
    "alternativas": {
      "A": "consulta a um único fornecedor previamente indicado pelo setor requisitante, sem necessidade de comparação.",
      "B": "estimativa exclusivamente baseada no valor da última contratação realizada, independentemente da data.",
      "C": "consulta exclusiva a sítios eletrônicos de fornecedores, vedada a utilização de qualquer outro parâmetro.",
      "D": "utilização de parâmetros diversos, como painel de preços, contratações similares de outros entes públicos e pesquisa direta com fornecedores, sendo vedada a limitação a apenas um único parâmetro quando outros estiverem disponíveis."
    },
    "gabarito": "D",
    "comentario": "A pesquisa de preços deve utilizar parâmetros diversos e, preferencialmente, fontes como o Painel de Preços, contratações similares de outros entes públicos e pesquisa direta ou publicada em mídia especializada, evitando-se a limitação a um único parâmetro quando outros estiverem disponíveis.",
    "fundamento": "Art. 23 da Lei nº 14.133/2021 e regulamentação correlata.",
    "oficial": false
  },

  {
    "id": 101,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Principio da unidade",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O principio orcamentario segundo o qual cada ente federativo deve possuir apenas um orcamento, elaborado uniformemente, para determinado exercicio financeiro, denomina-se principio da:",
    "alternativas": {
      "A": "unidade.",
      "B": "universalidade.",
      "C": "exclusividade.",
      "D": "anualidade."
    },
    "gabarito": "A",
    "comentario": "O principio da unidade orcamentaria determina que cada ente federativo deve ter um unico orcamento, evitando a existencia de multiplos orcamentos paralelos para o mesmo exercicio financeiro.",
    "fundamento": "Art. 2 da Lei no 4.320/1964; doutrina de Direito Financeiro.",
    "oficial": false
  },

  {
    "id": 102,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Principio da universalidade",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O principio orcamentario segundo o qual todas as receitas e despesas do ente federativo devem constar da lei orcamentaria, vedada a existencia de receitas ou despesas extraorcamentarias, denomina-se principio da:",
    "alternativas": {
      "A": "nao afetacao de receitas.",
      "B": "universalidade.",
      "C": "especializacao.",
      "D": "publicidade."
    },
    "gabarito": "B",
    "comentario": "O principio da universalidade exige que todas as receitas e despesas do ente sejam incluidas na lei orcamentaria, sem excecoes, permitindo o controle integral sobre as financas publicas.",
    "fundamento": "Art. 3 e 4 da Lei no 4.320/1964.",
    "oficial": false
  },

  {
    "id": 103,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Principio da exclusividade",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o principio orcamentario da exclusividade, previsto no art. 165, paragrafo 8, da Constituicao Federal de 1988, a lei orcamentaria anual:",
    "alternativas": {
      "A": "pode conter qualquer dispositivo, inclusive de natureza estranha a previsao da receita e a fixacao da despesa.",
      "B": "deve necessariamente incluir normas de direito penal e processual penal.",
      "C": "nao contera dispositivo estranho a previsao da receita e a fixacao da despesa, ressalvada a autorizacao para abertura de creditos suplementares e a contratacao de operacoes de credito.",
      "D": "e incompativel com qualquer autorizacao de creditos adicionais."
    },
    "gabarito": "C",
    "comentario": "O principio da exclusividade veda que a lei orcamentaria contenha materia estranha a previsao da receita e a fixacao da despesa, ressalvando-se a autorizacao para abertura de creditos suplementares e a contratacao de operacoes de credito, inclusive por antecipacao de receita.",
    "fundamento": "Art. 165, paragrafo 8, da Constituicao Federal de 1988.",
    "oficial": false
  },

  {
    "id": 104,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Nao afetacao de receitas",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O principio orcamentario da nao afetacao (ou nao vinculacao) de receitas veda, como regra geral, que a receita de impostos seja vinculada a orgao, fundo ou despesa especifica, ressalvadas excecoes constitucionalmente previstas, tais como:",
    "alternativas": {
      "A": "qualquer despesa discricionaria definida por decreto do Chefe do Executivo.",
      "B": "despesas de publicidade institucional do governo, sem qualquer limitacao constitucional.",
      "C": "nao existem excecoes constitucionais a esse principio.",
      "D": "reparticao de receitas tributarias constitucionalmente prevista e acoes e servicos publicos de saude e manutencao e desenvolvimento do ensino."
    },
    "gabarito": "D",
    "comentario": "Embora a regra geral vede a vinculacao da receita de impostos, a propria Constituicao preve excecoes, como a reparticao constitucional de receitas tributarias e a vinculacao de percentuais minimos para acoes e servicos publicos de saude e para manutencao e desenvolvimento do ensino.",
    "fundamento": "Art. 167, IV, da Constituicao Federal de 1988.",
    "oficial": false
  },

  {
    "id": 105,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Ciclo orcamentario",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O ciclo orcamentario compreende, de forma sucessiva, as seguintes fases:",
    "alternativas": {
      "A": "elaboracao e proposta orcamentaria, discussao e aprovacao legislativa, execucao orcamentaria, e controle e avaliacao.",
      "B": "apenas a execucao orcamentaria, sem qualquer fase de planejamento ou controle.",
      "C": "exclusivamente a fase de discussao legislativa, seguida imediatamente da execucao.",
      "D": "controle e avaliacao, seguidos de elaboracao e execucao, nessa ordem."
    },
    "gabarito": "A",
    "comentario": "O ciclo orcamentario compreende as fases de elaboracao e proposta (Poder Executivo), discussao e aprovacao (Poder Legislativo), execucao (Poder Executivo) e controle e avaliacao (interno e externo), em sequencia logica e continua.",
    "fundamento": "Doutrina de Administracao Publica e Direito Financeiro - ciclo orcamentario.",
    "oficial": false
  },

  {
    "id": 106,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Plano Plurianual (PPA)",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O Plano Plurianual (PPA), nos termos do art. 165, paragrafo 1, da Constituicao Federal de 1988, estabelece, de forma regionalizada, as diretrizes, objetivos e metas da administracao publica para:",
    "alternativas": {
      "A": "exclusivamente as despesas correntes de um unico exercicio financeiro.",
      "B": "as despesas de capital e outras delas decorrentes, e para as relativas aos programas de duracao continuada, com vigencia de quatro anos.",
      "C": "um periodo de dez anos, coincidindo com duas legislaturas municipais.",
      "D": "apenas os investimentos em obras publicas de infraestrutura viaria."
    },
    "gabarito": "B",
    "comentario": "O PPA estabelece, de forma regionalizada, diretrizes, objetivos e metas para as despesas de capital e outras delas decorrentes, e para as relativas a programas de duracao continuada, com vigencia de quatro anos.",
    "fundamento": "Art. 165, paragrafo 1, da Constituicao Federal de 1988.",
    "oficial": false
  },

  {
    "id": 107,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Lei de Diretrizes Orcamentarias",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Compreende-se, entre as funcoes da Lei de Diretrizes Orcamentarias (LDO), nos termos do art. 165, paragrafo 2, da CF/1988:",
    "alternativas": {
      "A": "estabelecer, exclusivamente, o detalhamento das despesas por elemento de despesa.",
      "B": "substituir integralmente a necessidade de elaboracao da lei orcamentaria anual.",
      "C": "compreender as metas e prioridades da administracao publica, orientar a elaboracao da lei orcamentaria anual, dispor sobre alteracoes na legislacao tributaria e estabelecer a politica de aplicacao das agencias financeiras oficiais de fomento.",
      "D": "vigorar por quatro anos, coincidindo com o Plano Plurianual."
    },
    "gabarito": "C",
    "comentario": "A LDO compreende as metas e prioridades da administracao publica, orienta a elaboracao da LOA, dispoe sobre alteracoes na legislacao tributaria e estabelece a politica de aplicacao das agencias financeiras oficiais de fomento, entre outras funcoes previstas na CF/1988 e na LRF.",
    "fundamento": "Art. 165, paragrafo 2, da Constituicao Federal de 1988.",
    "oficial": false
  },

  {
    "id": 108,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Lei Orcamentaria Anual",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A Lei Orcamentaria Anual (LOA), segundo o art. 165, paragrafo 5, da Constituicao Federal de 1988, comprendera:",
    "alternativas": {
      "A": "somente o orcamento fiscal referente aos Poderes do ente federativo.",
      "B": "exclusivamente o orcamento da seguridade social.",
      "C": "apenas as despesas de capital, excluindo-se as despesas correntes.",
      "D": "o orcamento fiscal, o orcamento de investimento das empresas em que o ente detenha a maioria do capital social com direito a voto, e o orcamento da seguridade social."
    },
    "gabarito": "D",
    "comentario": "A LOA compreende tres orcamentos: o orcamento fiscal, o orcamento de investimento das empresas estatais em que o ente detenha a maioria do capital social com direito a voto, e o orcamento da seguridade social.",
    "fundamento": "Art. 165, paragrafo 5, da Constituicao Federal de 1988.",
    "oficial": false
  },

  {
    "id": 109,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Creditos suplementares",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Os creditos adicionais suplementares, previstos na Lei no 4.320/1964, destinam-se a:",
    "alternativas": {
      "A": "reforcar dotacao orcamentaria ja existente e insuficiente, sendo autorizados por lei e abertos por decreto do Executivo.",
      "B": "atender despesas sem dotacao orcamentaria especifica.",
      "C": "atender despesas urgentes e imprevistas decorrentes de guerra, comocao intestina ou calamidade publica.",
      "D": "substituir integralmente a Lei Orcamentaria Anual do exercicio seguinte."
    },
    "gabarito": "A",
    "comentario": "Os creditos suplementares destinam-se a reforcar dotacao orcamentaria ja existente, porem insuficiente, sendo autorizados por lei (podendo a propria LOA autorizar previamente, ate certo limite) e abertos por decreto do Poder Executivo.",
    "fundamento": "Art. 41, I, e art. 43 da Lei no 4.320/1964.",
    "oficial": false
  },

  {
    "id": 110,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Creditos especiais",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Os creditos adicionais especiais destinam-se a atender despesas para as quais nao haja dotacao orcamentaria especifica, sendo:",
    "alternativas": {
      "A": "abertos diretamente por decreto do Executivo, dispensada autorizacao legislativa.",
      "B": "autorizados por lei especifica e abertos por decreto do Poder Executivo, vigorando, em regra, ate o termino do exercicio financeiro em que forem abertos.",
      "C": "vedados pela Constituicao Federal de 1988 em qualquer hipotese.",
      "D": "de competencia exclusiva do Poder Judiciario para sua abertura."
    },
    "gabarito": "B",
    "comentario": "Os creditos especiais destinam-se a despesas sem dotacao orcamentaria especifica, sendo autorizados por lei especifica e abertos por decreto do Executivo, com vigencia, em regra, restrita ao exercicio financeiro em que forem abertos.",
    "fundamento": "Art. 41, II, e art. 45 da Lei no 4.320/1964.",
    "oficial": false
  },

  {
    "id": 111,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Creditos extraordinarios",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Os creditos adicionais extraordinarios, destinados a despesas urgentes e imprevistas, como as decorrentes de guerra, comocao intestina ou calamidade publica, sao abertos por:",
    "alternativas": {
      "A": "lei ordinaria, mediante previa autorizacao do Poder Legislativo, dada a urgencia da situacao.",
      "B": "resolucao do Tribunal de Contas, sem qualquer participacao do Poder Executivo.",
      "C": "medida provisoria ou decreto do Poder Executivo, independentemente de previa autorizacao legislativa, dada a urgencia e imprevisibilidade da despesa.",
      "D": "portaria do Ministerio da Fazenda, com eficacia retroativa de ate dois exercicios financeiros."
    },
    "gabarito": "C",
    "comentario": "Os creditos extraordinarios, por envolverem despesas urgentes e imprevistas (guerra, comocao intestina, calamidade publica), sao abertos por medida provisoria (na esfera federal) ou decreto do Poder Executivo, independentemente de previa autorizacao legislativa, justamente em razao da urgencia da situacao.",
    "fundamento": "Art. 41, III, da Lei no 4.320/1964; art. 167, paragrafo 3, da Constituicao Federal de 1988.",
    "oficial": false
  },

  {
    "id": 112,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Receita publica: classificacao",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Quanto a classificacao economica, a receita publica divide-se em receitas correntes e receitas de capital. Sao exemplos de receitas de capital:",
    "alternativas": {
      "A": "receitas tributarias e receitas de contribuicoes.",
      "B": "receita patrimonial e receita agropecuaria.",
      "C": "receita de servicos e transferencias correntes.",
      "D": "operacoes de credito, alienacao de bens e amortizacao de emprestimos concedidos."
    },
    "gabarito": "D",
    "comentario": "As receitas de capital compreendem, entre outras, as operacoes de credito, a alienacao de bens, a amortizacao de emprestimos concedidos e as transferencias de capital, distinguindo-se das receitas correntes (tributaria, de contribuicoes, patrimonial, agropecuaria, industrial, de servicos etc.).",
    "fundamento": "Art. 11 da Lei no 4.320/1964.",
    "oficial": false
  },

  {
    "id": 113,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Estagios da receita publica",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a doutrina de Direito Financeiro e o Manual de Contabilidade Aplicada ao Setor Publico, os estagios da receita publica compreendem, sucessivamente:",
    "alternativas": {
      "A": "previsao, lancamento, arrecadacao e recolhimento.",
      "B": "empenho, liquidacao e pagamento.",
      "C": "homologacao, adjudicacao e recolhimento.",
      "D": "fixacao, contingenciamento e execucao."
    },
    "gabarito": "A",
    "comentario": "Os estagios da receita publica, segundo a doutrina majoritaria e o MCASP, sao: previsao (na LOA), lancamento (identificacao do devedor e do valor devido), arrecadacao (recebimento do valor pelos agentes arrecadadores) e recolhimento (transferencia dos valores arrecadados a conta unica do Tesouro).",
    "fundamento": "Lei no 4.320/1964, arts. 51 a 58; Manual de Contabilidade Aplicada ao Setor Publico (MCASP).",
    "oficial": false
  },

  {
    "id": 114,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Despesa publica: classificacao",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Quanto a classificacao economica, sao exemplos de despesas de capital:",
    "alternativas": {
      "A": "despesas com pessoal e encargos sociais.",
      "B": "investimentos, inversoes financeiras e amortizacao da divida.",
      "C": "juros e encargos da divida.",
      "D": "outras despesas correntes, como material de consumo."
    },
    "gabarito": "B",
    "comentario": "As despesas de capital compreendem os investimentos, as inversoes financeiras e a amortizacao da divida, distinguindo-se das despesas correntes (pessoal e encargos sociais, juros e encargos da divida, e outras despesas correntes).",
    "fundamento": "Art. 12 da Lei no 4.320/1964.",
    "oficial": false
  },

  {
    "id": 115,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Estagios da despesa publica",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a Lei no 4.320/1964, os estagios formais da execucao da despesa publica sao, sucessivamente:",
    "alternativas": {
      "A": "liquidacao, empenho e pagamento.",
      "B": "pagamento, liquidacao e empenho.",
      "C": "empenho, liquidacao e pagamento.",
      "D": "programacao, empenho e liquidacao, sem estagio de pagamento."
    },
    "gabarito": "C",
    "comentario": "Os estagios formais da execucao da despesa publica, segundo a Lei no 4.320/1964, sao: empenho (reserva de dotacao), liquidacao (verificacao do direito adquirido pelo credor) e pagamento (entrega efetiva dos recursos ao credor).",
    "fundamento": "Arts. 58 a 65 da Lei no 4.320/1964.",
    "oficial": false
  },

  {
    "id": 116,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Restos a pagar",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Consideram-se restos a pagar, nos termos da Lei no 4.320/1964, as despesas:",
    "alternativas": {
      "A": "que nao foram sequer empenhadas ate o final do exercicio financeiro.",
      "B": "pagas antecipadamente, antes mesmo do empenho correspondente.",
      "C": "de exercicios anteriores ja canceladas por decurso de prazo, sem possibilidade de pagamento.",
      "D": "legalmente empenhadas, mas nao pagas ate o dia 31 de dezembro, distinguindo-se em processadas (ja liquidadas) e nao processadas (ainda nao liquidadas)."
    },
    "gabarito": "D",
    "comentario": "Restos a pagar sao as despesas legalmente empenhadas, mas nao pagas ate 31 de dezembro, distinguindo-se em processados (ja liquidados, ou seja, com o direito do credor ja verificado) e nao processados (ainda pendentes de liquidacao).",
    "fundamento": "Art. 36 da Lei no 4.320/1964.",
    "oficial": false
  },

  {
    "id": 117,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Suprimento de fundos",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O suprimento de fundos, no ambito da execucao orcamentaria, consiste em:",
    "alternativas": {
      "A": "adiantamento concedido a servidor para a realizacao de despesas que nao possam se subordinar ao processo normal de aplicacao, conforme regulamentacao especifica.",
      "B": "modalidade de credito adicional destinada a reforcar dotacao orcamentaria insuficiente.",
      "C": "especie de receita de capital destinada a amortizacao da divida publica.",
      "D": "instrumento de fiscalizacao exclusiva dos Tribunais de Contas sobre a execucao orcamentaria."
    },
    "gabarito": "A",
    "comentario": "O suprimento de fundos e o adiantamento de numerario concedido a servidor, mediante previa autorizacao, para realizar despesas que, por sua excepcionalidade, nao possam se subordinar ao processo normal de aplicacao (empenho, liquidacao, pagamento), sujeito a prestacao de contas posterior.",
    "fundamento": "Art. 68 e 69 da Lei no 4.320/1964; normas de execucao orcamentaria e financeira.",
    "oficial": false
  },

  {
    "id": 118,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Orcamento-programa",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A tecnica orcamentaria que vincula a alocacao de recursos publicos a objetivos e metas de programas de trabalho previamente definidos, articulando o planejamento governamental ao orcamento, denomina-se:",
    "alternativas": {
      "A": "orcamento base zero.",
      "B": "orcamento-programa.",
      "C": "orcamento incremental.",
      "D": "orcamento de desempenho isolado."
    },
    "gabarito": "B",
    "comentario": "O orcamento-programa e a tecnica orcamentaria que articula o planejamento governamental (objetivos, metas e programas de trabalho) a alocacao de recursos financeiros no orcamento, superando a logica meramente contabil do orcamento tradicional.",
    "fundamento": "Doutrina de Administracao Publica e Direito Financeiro - tecnicas orcamentarias.",
    "oficial": false
  },

  {
    "id": 119,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Transparencia orcamentaria",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A Lei Complementar no 131/2009 (Lei da Transparencia), ao alterar a Lei de Responsabilidade Fiscal, passou a exigir dos entes federativos:",
    "alternativas": {
      "A": "o sigilo absoluto sobre a execucao orcamentaria, salvo decisao judicial em contrario.",
      "B": "a divulgacao de dados orcamentarios apenas ao termino de cada mandato eletivo.",
      "C": "a divulgacao, em tempo real, de informacoes pormenorizadas sobre a execucao orcamentaria e financeira, em meios eletronicos de acesso publico (portais da transparencia).",
      "D": "a divulgacao de informacoes restrita exclusivamente aos orgaos de controle interno."
    },
    "gabarito": "C",
    "comentario": "A Lei Complementar no 131/2009 (Lei da Transparencia) determinou a divulgacao, em tempo real, de informacoes pormenorizadas sobre a execucao orcamentaria e financeira dos entes federativos, em meios eletronicos de acesso publico a populacao, os chamados portais da transparencia.",
    "fundamento": "Lei Complementar no 131/2009, alterando a Lei Complementar no 101/2000.",
    "oficial": false
  },

  {
    "id": 120,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "Orcamento Publico - Vigencia dos creditos adicionais",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Os creditos adicionais suplementares e especiais, salvo disposicao constitucional em contrario, vigoram:",
    "alternativas": {
      "A": "por prazo indeterminado, ate serem integralmente utilizados, ainda que ultrapassem varios exercicios financeiros.",
      "B": "por, no minimo, dois exercicios financeiros consecutivos, independentemente da data de abertura.",
      "C": "apenas durante o primeiro semestre do exercicio financeiro em que forem autorizados.",
      "D": "ate o termino do exercicio financeiro em que forem abertos, podendo os creditos abertos nos ultimos quatro meses do exercicio ser reabertos no exercicio subsequente, nos limites de seus saldos."
    },
    "gabarito": "D",
    "comentario": "Em regra, os creditos suplementares e especiais vigoram ate o termino do exercicio financeiro em que forem abertos; entretanto, quando abertos nos ultimos quatro meses do exercicio, poderao, por decreto, ser reabertos no exercicio financeiro subsequente, nos limites de seus saldos.",
    "fundamento": "Art. 167, paragrafo 2, da Constituicao Federal de 1988; art. 45 da Lei no 4.320/1964.",
    "oficial": false
  },

  {
    "id": 121,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Objetivo e conceito",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A Lei de Responsabilidade Fiscal (Lei Complementar no 101/2000) estabelece normas de financas publicas voltadas para:",
    "alternativas": {
      "A": "a responsabilidade na gestao fiscal, mediante acao planejada e transparente, prevencao de riscos e correcao de desvios capazes de afetar o equilibrio das contas publicas.",
      "B": "a extincao da obrigatoriedade de elaboracao do orcamento publico pelos entes federativos.",
      "C": "a autorizacao de endividamento ilimitado dos entes federativos, sem qualquer controle.",
      "D": "a transferencia da competencia orcamentaria ao Poder Judiciario."
    },
    "gabarito": "A",
    "comentario": "A LRF estabelece normas de financas publicas voltadas para a responsabilidade na gestao fiscal, por meio de acao planejada e transparente, em que se previnem riscos e corrigem desvios capazes de afetar o equilibrio das contas publicas.",
    "fundamento": "Art. 1, paragrafo 1, da Lei Complementar no 101/2000.",
    "oficial": false
  },

  {
    "id": 122,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Limite de despesa com pessoal (total)",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos da Lei de Responsabilidade Fiscal, a despesa total com pessoal, em cada ente da Federacao, nao podera exceder, em percentual da receita corrente liquida (RCL):",
    "alternativas": {
      "A": "40% para a Uniao e 50% para Estados e Municipios.",
      "B": "50% para a Uniao e 60% para Estados e Municipios.",
      "C": "60% para a Uniao e 70% para Estados e Municipios.",
      "D": "nao ha limite percentual definido, apenas recomendacoes tecnicas."
    },
    "gabarito": "B",
    "comentario": "O limite de despesa total com pessoal e de 50% da receita corrente liquida para a Uniao e de 60% para Estados e Municipios, distribuidos entre os Poderes e orgaos de cada ente, conforme os percentuais especificos fixados na LRF.",
    "fundamento": "Art. 19 da Lei Complementar no 101/2000.",
    "oficial": false
  },

  {
    "id": 123,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Repartição do limite de pessoal entre Poderes municipais",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "No ambito municipal, do limite maximo de 60% da receita corrente liquida para despesa total com pessoal, a Lei de Responsabilidade Fiscal reserva, como limite especifico:",
    "alternativas": {
      "A": "50% para o Poder Executivo e 10% para o Poder Legislativo.",
      "B": "60% integralmente para o Poder Executivo, nao havendo limite especifico para o Legislativo.",
      "C": "54% para o Poder Executivo e 6% para o Poder Legislativo, incluido o Tribunal de Contas do Municipio, quando houver.",
      "D": "30% para o Poder Executivo e 30% para o Poder Legislativo, em divisao igualitaria."
    },
    "gabarito": "C",
    "comentario": "No ambito municipal, dos 60% de limite maximo, a LRF reserva 54% para o Poder Executivo e 6% para o Poder Legislativo Municipal, incluido o Tribunal de Contas do Municipio, quando houver.",
    "fundamento": "Art. 20, III, da Lei Complementar no 101/2000.",
    "oficial": false
  },

  {
    "id": 124,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Limite prudencial de despesa com pessoal",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Ao atingir 95% do limite maximo de despesa total com pessoal (limite prudencial), o Poder ou orgao fica vedado, entre outras condutas, de:",
    "alternativas": {
      "A": "reduzir despesas com pessoal, medida que passa a ser obrigatoria em qualquer hipotese.",
      "B": "contratar servidores temporarios, ainda que para atender necessidade excepcional de interesse publico.",
      "C": "realizar concurso publico para reposicao de vagas ja existentes no quadro de pessoal.",
      "D": "conceder vantagem, aumento, reajuste ou adequacao de remuneracao a qualquer titulo, e criar cargo, emprego ou funcao."
    },
    "gabarito": "D",
    "comentario": "Atingido o limite prudencial de 95% do limite maximo de despesa com pessoal, ficam vedadas condutas como a concessao de vantagem, aumento, reajuste ou adequacao de remuneracao, e a criacao de cargo, emprego ou funcao, entre outras restricoes do art. 22, paragrafo unico, da LRF.",
    "fundamento": "Art. 22, paragrafo unico, da Lei Complementar no 101/2000.",
    "oficial": false
  },

  {
    "id": 125,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Excesso do limite de pessoal: prazo de enquadramento",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Caso a despesa total com pessoal ultrapasse o limite maximo definido na Lei de Responsabilidade Fiscal, o percentual excedente devera ser eliminado nos:",
    "alternativas": {
      "A": "dois quadrimestres seguintes, sendo pelo menos um terco no primeiro quadrimestre.",
      "B": "dois exercicios financeiros seguintes, sem qualquer distribuicao minima entre eles.",
      "C": "trinta dias seguintes a constatacao do excesso, sob pena de intervencao federal imediata.",
      "D": "quatro anos seguintes, coincidindo com o mandato do Chefe do Poder Executivo."
    },
    "gabarito": "A",
    "comentario": "Verificado o excesso, o percentual excedente devera ser eliminado nos dois quadrimestres seguintes ao da apuracao, sendo pelo menos um terco no primeiro quadrimestre, adotando-se, entre outras medidas, a reducao de cargos em comissao e funcoes de confianca e a exoneracao de servidores nao estaveis.",
    "fundamento": "Art. 23 da Lei Complementar no 101/2000.",
    "oficial": false
  },

  {
    "id": 126,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Divida publica: limites",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Os limites globais para o montante da divida consolidada dos entes federativos sao fixados por:",
    "alternativas": {
      "A": "decreto do Presidente da Republica, sem participacao do Poder Legislativo.",
      "B": "resolucao do Senado Federal, por proposta do Presidente da Republica.",
      "C": "lei ordinaria de cada ente federativo, sem qualquer parametro nacional uniforme.",
      "D": "portaria conjunta dos Tribunais de Contas estaduais."
    },
    "gabarito": "B",
    "comentario": "Nos termos da Constituicao Federal e da LRF, os limites globais para o montante da divida consolidada da Uniao, dos Estados, do Distrito Federal e dos Municipios sao fixados por resolucao do Senado Federal, por proposta do Presidente da Republica.",
    "fundamento": "Art. 30 da Lei Complementar no 101/2000; art. 52, VI e IX, da Constituicao Federal de 1988.",
    "oficial": false
  },

  {
    "id": 127,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Operacoes de credito (regra de ouro)",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A chamada 'regra de ouro' das financas publicas, disciplinada no art. 167, III, da Constituicao Federal de 1988 e complementada pela Lei de Responsabilidade Fiscal, veda:",
    "alternativas": {
      "A": "qualquer contratacao de operacao de credito pelos entes federativos, em qualquer hipotese.",
      "B": "a realizacao de despesas de capital com recursos de operacoes de credito.",
      "C": "a realizacao de operacoes de credito que excedam o montante das despesas de capital, ressalvadas as autorizadas mediante creditos suplementares ou especiais com finalidade precisa, aprovados pelo Legislativo por maioria absoluta.",
      "D": "a utilizacao de operacoes de credito exclusivamente pela Uniao, sendo vedadas a Estados e Municipios."
    },
    "gabarito": "C",
    "comentario": "A 'regra de ouro' veda a realizacao de operacoes de credito que excedam o montante das despesas de capital, ressalvadas as autorizadas mediante creditos suplementares ou especiais com finalidade precisa, aprovados pelo Poder Legislativo por maioria absoluta.",
    "fundamento": "Art. 167, III, da Constituicao Federal de 1988; art. 32 da Lei Complementar no 101/2000.",
    "oficial": false
  },

  {
    "id": 128,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Renuncia de receita",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A concessao ou ampliacao de incentivo ou beneficio de natureza tributaria da qual decorra renuncia de receita, nos termos da Lei de Responsabilidade Fiscal, devera estar acompanhada de:",
    "alternativas": {
      "A": "nenhuma exigencia formal, bastando ato discricionario do Chefe do Executivo.",
      "B": "aprovacao previa, exclusivamente, do Tribunal de Contas competente, dispensada qualquer estimativa de impacto.",
      "C": "compensacao obrigatoria apenas quando o valor da renuncia superar 50% da receita corrente liquida do exercicio.",
      "D": "estimativa do impacto orcamentario-financeiro no exercicio em que deva iniciar sua vigencia e nos dois seguintes, atendendo ao disposto na lei de diretrizes orcamentarias, e a pelo menos uma das condicoes: demonstracao de que a renuncia foi considerada na estimativa de receita da lei orcamentaria, ou apresentacao de medidas de compensacao."
    },
    "gabarito": "D",
    "comentario": "A LRF exige que a renuncia de receita venha acompanhada de estimativa do impacto orcamentario-financeiro no exercicio de inicio de vigencia e nos dois seguintes, atendendo a LDO, e de pelo menos uma condicao: constar da estimativa de receita da LOA e nao afetar as metas de resultados fiscais, ou vir acompanhada de medidas de compensacao.",
    "fundamento": "Art. 14 da Lei Complementar no 101/2000.",
    "oficial": false
  },

  {
    "id": 129,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Geracao de despesa",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A criacao, expansao ou aperfeicoamento de acao governamental que acarrete aumento de despesa devera ser acompanhada de:",
    "alternativas": {
      "A": "estimativa do impacto orcamentario-financeiro no exercicio em que deva entrar em vigor e nos dois subsequentes, e declaracao do ordenador da despesa de que o aumento tem adequacao orcamentaria e financeira com a LOA e compatibilidade com o PPA e a LDO.",
      "B": "autorizacao verbal da autoridade competente, dispensada qualquer formalizacao.",
      "C": "aprovacao popular mediante referendo, em qualquer hipotese de aumento de despesa.",
      "D": "unicamente comunicacao ao Tribunal de Contas, apos a realizacao da despesa."
    },
    "gabarito": "A",
    "comentario": "Nos termos do art. 16 da LRF, a geracao de despesa exige estimativa do impacto orcamentario-financeiro no exercicio em que deva entrar em vigor e nos dois subsequentes, alem de declaracao do ordenador da despesa quanto a adequacao orcamentaria e financeira e a compatibilidade com o PPA e a LDO.",
    "fundamento": "Art. 16 da Lei Complementar no 101/2000.",
    "oficial": false
  },

  {
    "id": 130,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Despesa obrigatoria de carater continuado",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Considera-se despesa obrigatoria de carater continuado, para fins da Lei de Responsabilidade Fiscal, a despesa corrente:",
    "alternativas": {
      "A": "de qualquer natureza, desde que realizada em um unico exercicio financeiro.",
      "B": "derivada de lei, medida provisoria ou ato administrativo normativo que fixe para o ente a obrigacao legal de sua execucao por periodo superior a dois exercicios.",
      "C": "exclusivamente relacionada a investimentos em infraestrutura, independentemente de sua duracao.",
      "D": "que nao produz qualquer efeito financeiro nos exercicios seguintes ao de sua criacao."
    },
    "gabarito": "B",
    "comentario": "Despesa obrigatoria de carater continuado e a despesa corrente derivada de lei, medida provisoria ou ato administrativo normativo que fixe para o ente a obrigacao legal de sua execucao por periodo superior a dois exercicios, exigindo, para sua criacao, a demonstracao de origem dos recursos e o cumprimento dos arts. 16 e 17 da LRF.",
    "fundamento": "Art. 17 da Lei Complementar no 101/2000.",
    "oficial": false
  },

  {
    "id": 131,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Relatorio Resumido de Execucao Orcamentaria",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O Relatorio Resumido de Execucao Orcamentaria (RREO), previsto na Lei de Responsabilidade Fiscal, deve ser publicado com periodicidade:",
    "alternativas": {
      "A": "mensal.",
      "B": "quadrimestral.",
      "C": "bimestral.",
      "D": "anual."
    },
    "gabarito": "C",
    "comentario": "O RREO deve ser publicado bimestralmente, conforme determina a Constituicao Federal (art. 165, paragrafo 3) e a Lei de Responsabilidade Fiscal, permitindo o acompanhamento periodico da execucao orcamentaria.",
    "fundamento": "Art. 165, paragrafo 3, da Constituicao Federal de 1988; art. 52 da Lei Complementar no 101/2000.",
    "oficial": false
  },

  {
    "id": 132,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Relatorio de Gestao Fiscal",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O Relatorio de Gestao Fiscal (RGF), assinado pelos titulares dos Poderes e orgaos referidos na LRF, deve ser publicado, em regra, com periodicidade:",
    "alternativas": {
      "A": "mensal, sem excecoes.",
      "B": "bimestral, coincidindo com o RREO.",
      "C": "anual, apenas ao final do exercicio financeiro.",
      "D": "quadrimestral, admitida periodicidade semestral para Municipios com populacao inferior a 50 mil habitantes que optarem por essa condicao."
    },
    "gabarito": "D",
    "comentario": "O RGF deve ser publicado quadrimestralmente, sendo admitida periodicidade semestral para Municipios com populacao inferior a 50 mil habitantes que optarem por essa condicao, nos termos da LRF.",
    "fundamento": "Art. 54 e art. 55, paragrafo 4, da Lei Complementar no 101/2000.",
    "oficial": false
  },

  {
    "id": 133,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Anexo de Metas Fiscais",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O Anexo de Metas Fiscais, que deve integrar a Lei de Diretrizes Orcamentarias nos termos da Lei de Responsabilidade Fiscal, estabelecera metas anuais relativas a:",
    "alternativas": {
      "A": "receitas, despesas, resultados nominal e primario e montante da divida publica, para o exercicio a que se referirem e para os dois seguintes.",
      "B": "exclusivamente o valor total da folha de pagamento do funcionalismo publico.",
      "C": "apenas o numero de cargos comissionados existentes no orgao.",
      "D": "unicamente as metas de arrecadacao tributaria do exercicio corrente, sem projecao futura."
    },
    "gabarito": "A",
    "comentario": "O Anexo de Metas Fiscais estabelecera metas anuais, em valores correntes e constantes, relativas a receitas, despesas, resultados nominal e primario, e montante da divida publica, para o exercicio a que se referir a LDO e para os dois seguintes.",
    "fundamento": "Art. 4, paragrafo 1, e art. 4, paragrafo 2, da Lei Complementar no 101/2000.",
    "oficial": false
  },

  {
    "id": 134,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Reserva de contingencia",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A reserva de contingencia, prevista na Lei de Diretrizes Orcamentarias nos termos da Lei de Responsabilidade Fiscal, destina-se a:",
    "alternativas": {
      "A": "financiar exclusivamente despesas de publicidade institucional do governo.",
      "B": "o atendimento de passivos contingentes e outros riscos e eventos fiscais imprevistos.",
      "C": "substituir integralmente o Fundo de Reserva do Regime Proprio de Previdencia Social.",
      "D": "pagamento de precatorios judiciais, com exclusividade, em qualquer hipotese."
    },
    "gabarito": "B",
    "comentario": "A reserva de contingencia, cujo montante e forma de utilizacao devem ser estabelecidos na LDO, destina-se ao atendimento de passivos contingentes e outros riscos e eventos fiscais imprevistos.",
    "fundamento": "Art. 5, III, alinea b, da Lei Complementar no 101/2000.",
    "oficial": false
  },

  {
    "id": 135,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Vedacoes em final de mandato (art. 42)",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 42 da Lei de Responsabilidade Fiscal, e vedado ao titular de Poder ou orgao, nos ultimos dois quadrimestres do seu mandato:",
    "alternativas": {
      "A": "realizar qualquer despesa publica, ainda que urgente e necessaria ao funcionamento dos servicos essenciais.",
      "B": "publicar o Relatorio de Gestao Fiscal referente ao ultimo quadrimestre do mandato.",
      "C": "contrair obrigacao de despesa que nao possa ser cumprida integralmente dentro dele, ou que tenha parcelas a serem pagas no exercicio seguinte sem que haja suficiente disponibilidade de caixa para esse efeito.",
      "D": "elaborar a proposta orcamentaria para o exercicio subsequente."
    },
    "gabarito": "C",
    "comentario": "O art. 42 da LRF veda ao titular de Poder ou orgao, nos ultimos dois quadrimestres do mandato, contrair obrigacao de despesa que nao possa ser cumprida integralmente dentro dele, ou que tenha parcelas a serem pagas no exercicio seguinte sem suficiente disponibilidade de caixa para esse efeito, medida conhecida informalmente como vedacao a heranca fiscal.",
    "fundamento": "Art. 42 da Lei Complementar no 101/2000.",
    "oficial": false
  },

  {
    "id": 136,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Transferencias voluntarias",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Constitui exigencia para que um ente federativo receba transferencias voluntarias de outro ente, nos termos da Lei de Responsabilidade Fiscal:",
    "alternativas": {
      "A": "a inexistencia de qualquer forma de controle ou prestacao de contas por parte do ente recebedor.",
      "B": "a dispensa de qualquer limite de despesa com pessoal, independentemente do montante transferido.",
      "C": "a exclusividade de recebimento apenas por Estados, sendo vedada a Municipios.",
      "D": "a comprovacao de que instituiu, previu e arrecada efetivamente todos os tributos de sua competencia constitucional, entre outras exigencias de regularidade fiscal."
    },
    "gabarito": "D",
    "comentario": "Entre as exigencias para o recebimento de transferencias voluntarias, a LRF exige a comprovacao de que o ente instituiu, previu e arrecada efetivamente os tributos de sua competencia constitucional, alem de observancia dos limites de despesa com pessoal e divida, entre outras condicoes de regularidade fiscal.",
    "fundamento": "Art. 25 da Lei Complementar no 101/2000.",
    "oficial": false
  },

  {
    "id": 137,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Fundos publicos",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sobre os fundos publicos disciplinados pela Lei de Responsabilidade Fiscal, e correto afirmar que:",
    "alternativas": {
      "A": "estao sujeitos as normas de financas publicas aplicaveis as entidades publicas, exigindo demonstracoes contabeis proprias e integracao ao orcamento do ente.",
      "B": "seus recursos, ressalvados os fundos de natureza previdenciaria e outras excecoes legais, poderao ser utilizados para fins diversos dos previstos na norma de sua criacao, a criterio da autoridade gestora.",
      "C": "sao integralmente isentos de qualquer fiscalizacao pelos Tribunais de Contas.",
      "D": "nao podem ser criados por nenhum ente federativo apos a vigencia da Lei de Responsabilidade Fiscal."
    },
    "gabarito": "A",
    "comentario": "Os fundos publicos estao sujeitos as normas de financas publicas aplicaveis as entidades publicas, exigindo demonstracoes contabeis proprias e integracao ao orcamento do ente instituidor, conforme disciplina da LRF e da Lei no 4.320/1964.",
    "fundamento": "Art. 56 e seguintes da Lei Complementar no 101/2000; Lei no 4.320/1964.",
    "oficial": false
  },

  {
    "id": 138,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Controle e fiscalizacao da gestao fiscal",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A fiscalizacao do cumprimento das normas de gestao fiscal previstas na Lei de Responsabilidade Fiscal sera exercida pelo Poder Legislativo, diretamente ou com o auxilio dos Tribunais de Contas, e pelo sistema de:",
    "alternativas": {
      "A": "controle exclusivamente externo, exercido apenas pelo proprio Poder Legislativo, sem auxilio de orgao tecnico.",
      "B": "controle interno de cada Poder e do Ministerio Publico.",
      "C": "controle privado, exercido por auditorias contratadas pelo mercado financeiro.",
      "D": "controle internacional, exercido por organismos multilaterais de credito."
    },
    "gabarito": "B",
    "comentario": "A fiscalizacao da gestao fiscal e exercida pelo Poder Legislativo, diretamente ou com o auxilio dos Tribunais de Contas, e pelo sistema de controle interno de cada Poder e do Ministerio Publico, na forma dos respectivos regimentos.",
    "fundamento": "Art. 59 da Lei Complementar no 101/2000.",
    "oficial": false
  },

  {
    "id": 139,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Consequencias do descumprimento",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O nao cumprimento das exigencias da Lei de Responsabilidade Fiscal pode sujeitar o ente federativo, entre outras consequencias, a:",
    "alternativas": {
      "A": "extincao automatica e imediata do ente federativo, independentemente de qualquer processo.",
      "B": "transferencia compulsoria da gestao orcamentaria para a Uniao, em qualquer hipotese de descumprimento.",
      "C": "vedacao ao recebimento de transferencias voluntarias, a contratacao de operacoes de credito e a obtencao de garantia de outro ente, ate que a irregularidade seja sanada.",
      "D": "nenhuma consequencia juridica relevante, tratando-se de norma de carater exclusivamente programatico."
    },
    "gabarito": "C",
    "comentario": "O descumprimento das exigencias da LRF pode acarretar, entre outras consequencias, a vedacao ao recebimento de transferencias voluntarias, a contratacao de operacoes de credito (ressalvadas as destinadas ao refinanciamento da divida e as que reduzam despesas com pessoal) e a obtencao de garantia de outro ente, ate que a irregularidade seja sanada.",
    "fundamento": "Art. 23, paragrafo 3, e dispositivos correlatos da Lei Complementar no 101/2000.",
    "oficial": false
  },

  {
    "id": 140,
    "disciplina": "Administração Financeira e Orçamentária",
    "assunto": "LRF - Distincao entre LRF e Lei no 4.320/1964",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Em relacao a distincao entre a Lei de Responsabilidade Fiscal (LC no 101/2000) e a Lei no 4.320/1964, e correto afirmar que:",
    "alternativas": {
      "A": "a LRF revogou integralmente a Lei no 4.320/1964, substituindo-a por completo no ordenamento juridico.",
      "B": "as duas leis tratam de materias absolutamente distintas, sem qualquer relacao de complementaridade.",
      "C": "a LRF e hierarquicamente inferior a Lei no 4.320/1964, por ser esta uma lei ordinaria anterior.",
      "D": "a Lei no 4.320/1964 disciplina, de forma geral, normas de direito financeiro para elaboracao e controle dos orcamentos e balancos, enquanto a LRF complementa esse arcabouco com regras especificas voltadas ao equilibrio e a responsabilidade na gestao fiscal."
    },
    "gabarito": "D",
    "comentario": "A Lei no 4.320/1964 (recepcionada com status de lei complementar em materia de normas gerais de direito financeiro) disciplina a elaboracao e o controle dos orcamentos e balancos, enquanto a LRF, complementar a ela, estabelece regras adicionais voltadas especificamente ao equilibrio e a responsabilidade na gestao fiscal, sem revoga-la integralmente.",
    "fundamento": "Lei no 4.320/1964; Lei Complementar no 101/2000; doutrina de Direito Financeiro.",
    "oficial": false
  },

  {
    "id": 141,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Livre exercicio",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 1 da Lei no 7.498/1986, o exercicio da enfermagem em todo o territorio nacional e:",
    "alternativas": {
      "A": "livre, observadas as disposicoes desta lei.",
      "B": "restrito exclusivamente aos profissionais com curso de pos-graduacao.",
      "C": "condicionado a autorizacao previa do Ministerio da Saude para cada caso concreto.",
      "D": "vedado a profissionais formados fora da regiao onde pretendem atuar."
    },
    "gabarito": "A",
    "comentario": "O art. 1 da Lei no 7.498/1986 estabelece que e livre o exercicio da enfermagem em todo o territorio nacional, observadas as disposicoes da propria lei.",
    "fundamento": "Art. 1 da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 142,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Inscricao no COREN",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 2 da Lei no 7.498/1986, a enfermagem e suas atividades auxiliares somente podem ser exercidas por pessoas:",
    "alternativas": {
      "A": "com curso superior completo em qualquer area da saude, independentemente de registro profissional.",
      "B": "legalmente habilitadas e inscritas no Conselho Regional de Enfermagem com jurisdicao na area onde ocorre o exercicio.",
      "C": "indicadas pelo diretor do estabelecimento de saude, dispensado qualquer registro em conselho profissional.",
      "D": "que possuam apenas experiencia pratica comprovada, independentemente de formacao formal."
    },
    "gabarito": "B",
    "comentario": "O art. 2 exige que a enfermagem e suas atividades auxiliares sejam exercidas por pessoas legalmente habilitadas e inscritas no Conselho Regional de Enfermagem (COREN) com jurisdicao na area onde ocorre o exercicio.",
    "fundamento": "Art. 2, caput, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 143,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Exercicio privativo",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Consoante o paragrafo unico do art. 2 da Lei no 7.498/1986, a enfermagem e exercida privativamente por:",
    "alternativas": {
      "A": "apenas pelo Enfermeiro, sendo os demais profissionais meros auxiliares sem competencia legal reconhecida.",
      "B": "qualquer profissional da area da saude que tenha realizado curso de primeiros socorros.",
      "C": "Enfermeiro, Tecnico de Enfermagem, Auxiliar de Enfermagem e Parteira, respeitados os respectivos graus de habilitacao.",
      "D": "Enfermeiro e Medico, exclusivamente, em regime de corresponsabilidade tecnica."
    },
    "gabarito": "C",
    "comentario": "O paragrafo unico do art. 2 estabelece que a enfermagem e exercida privativamente pelo Enfermeiro, pelo Tecnico de Enfermagem, pelo Auxiliar de Enfermagem e pela Parteira, respeitados os respectivos graus de habilitacao.",
    "fundamento": "Art. 2, paragrafo unico, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 144,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Planejamento e programacao",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "De acordo com o art. 3 da Lei no 7.498/1986, o planejamento e a programacao das instituicoes e servicos de saude:",
    "alternativas": {
      "A": "sao incumbencia exclusiva do setor administrativo-financeiro, sem qualquer participacao da enfermagem.",
      "B": "dispensam a participacao do Enfermeiro quando a instituicao for de pequeno porte.",
      "C": "sao regulados exclusivamente por normas do Ministerio da Saude, sem previsao na Lei no 7.498/1986.",
      "D": "incluem planejamento e programacao de enfermagem."
    },
    "gabarito": "D",
    "comentario": "O art. 3 estabelece que o planejamento e a programacao das instituicoes e servicos de saude incluem planejamento e programacao de enfermagem, integrando a enfermagem a gestao institucional.",
    "fundamento": "Art. 3 da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 145,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Programacao de enfermagem",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 4 da Lei no 7.498/1986, a programacao de enfermagem inclui:",
    "alternativas": {
      "A": "a prescricao da assistencia de enfermagem.",
      "B": "exclusivamente o controle de estoque de materiais hospitalares.",
      "C": "apenas a escala de plantoes da equipe de enfermagem.",
      "D": "a definicao do quadro de pessoal medico da instituicao."
    },
    "gabarito": "A",
    "comentario": "O art. 4 estabelece que a programacao de enfermagem inclui a prescricao da assistencia de enfermagem, atividade tecnica que orienta o cuidado a ser prestado.",
    "fundamento": "Art. 4 da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 146,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Quem sao enfermeiros",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 6 da Lei no 7.498/1986, e considerado Enfermeiro, entre outras hipoteses:",
    "alternativas": {
      "A": "qualquer profissional de saude com mais de dez anos de experiencia em ambiente hospitalar.",
      "B": "o titular do diploma de Enfermeiro conferido por instituicao de ensino, nos termos da lei.",
      "C": "o titular de certificado de curso de primeiros socorros com carga horaria superior a 40 horas.",
      "D": "o servidor publico designado pela chefia para exercer, interinamente, funcoes de enfermagem."
    },
    "gabarito": "B",
    "comentario": "O art. 6, I, da Lei no 7.498/1986 considera Enfermeiro o titular do diploma de Enfermeiro conferido por instituicao de ensino, nos termos da lei, alem de outras hipoteses relacionadas a titulos de Obstetriz/Enfermeira Obstetrica.",
    "fundamento": "Art. 6, I, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 147,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Quem sao tecnicos de enfermagem",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Consoante o art. 7 da Lei no 7.498/1986, e considerado Tecnico de Enfermagem:",
    "alternativas": {
      "A": "qualquer pessoa que tenha atuado informalmente em enfermagem por periodo superior a cinco anos.",
      "B": "exclusivamente quem possua diploma de nivel superior em qualquer area da saude.",
      "C": "o titular do diploma ou do certificado de Tecnico de Enfermagem, expedido de acordo com a legislacao e registrado pelo orgao competente.",
      "D": "o servidor administrativo lotado no setor de enfermagem, independentemente de formacao especifica."
    },
    "gabarito": "C",
    "comentario": "O art. 7, I, considera Tecnico de Enfermagem o titular do diploma ou certificado de Tecnico de Enfermagem, expedido de acordo com a legislacao e registrado pelo orgao competente.",
    "fundamento": "Art. 7, I, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 148,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Quem sao auxiliares de enfermagem",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 8 da Lei no 7.498/1986, e considerado Auxiliar de Enfermagem, entre outras hipoteses:",
    "alternativas": {
      "A": "qualquer familiar de paciente que auxilie nos cuidados basicos durante a internacao hospitalar.",
      "B": "o estudante de enfermagem regularmente matriculado, independentemente de conclusao do curso.",
      "C": "o profissional de outra area da saude que opte por atuar temporariamente na enfermagem.",
      "D": "o titular de certificado de Auxiliar de Enfermagem conferido por instituicao de ensino, nos termos da lei, e registrado no orgao competente."
    },
    "gabarito": "D",
    "comentario": "O art. 8, I, considera Auxiliar de Enfermagem o titular de certificado de Auxiliar de Enfermagem conferido por instituicao de ensino, nos termos da lei, e registrado no orgao competente.",
    "fundamento": "Art. 8, I, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 149,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Quem sao parteiras",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "De acordo com o art. 9 da Lei no 7.498/1986, e considerada Parteira, entre outras hipoteses:",
    "alternativas": {
      "A": "a titular do certificado previsto no art. 1 do Decreto-lei no 8.778, de 22 de janeiro de 1946, observado o disposto na Lei no 3.640/1959.",
      "B": "qualquer mulher que tenha acompanhado partos domiciliares informalmente na comunidade.",
      "C": "exclusivamente a titular de diploma de medicina com especializacao em obstetricia.",
      "D": "a profissional de enfermagem sem formacao especifica que atue eventualmente em maternidades."
    },
    "gabarito": "A",
    "comentario": "O art. 9, I, considera Parteira a titular do certificado previsto no art. 1 do Decreto-lei no 8.778/1946, observado o disposto na Lei no 3.640/1959, entre outras hipoteses relativas a formacao no exterior.",
    "fundamento": "Art. 9, I, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 150,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Atividades privativas do Enfermeiro",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 11, I, da Lei no 7.498/1986, constitui atividade PRIVATIVA do Enfermeiro:",
    "alternativas": {
      "A": "a execucao de tarefas de limpeza e organizacao do posto de enfermagem.",
      "B": "a direcao do orgao de enfermagem integrante da estrutura basica da instituicao de saude, publica e privada, e chefia de servico e de unidade de enfermagem.",
      "C": "o transporte de pacientes entre setores do hospital.",
      "D": "a reposicao de materiais de consumo no estoque da unidade de saude."
    },
    "gabarito": "B",
    "comentario": "O art. 11, I, a, atribui privativamente ao Enfermeiro a direcao do orgao de enfermagem integrante da estrutura basica da instituicao de saude, publica e privada, e a chefia de servico e de unidade de enfermagem.",
    "fundamento": "Art. 11, I, alinea a, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 151,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Consultoria e auditoria de enfermagem",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Constitui, entre outras, atividade privativa do Enfermeiro, nos termos do art. 11, I, da Lei no 7.498/1986:",
    "alternativas": {
      "A": "auditoria financeira e contabil da instituicao de saude, sem qualquer relacao com a assistencia de enfermagem.",
      "B": "consultoria juridica em processos administrativos disciplinares.",
      "C": "consultoria, auditoria e emissao de parecer sobre materia de enfermagem.",
      "D": "auditoria de obras de engenharia em unidades hospitalares."
    },
    "gabarito": "C",
    "comentario": "O art. 11, I, h, atribui privativamente ao Enfermeiro a consultoria, a auditoria e a emissao de parecer sobre materia de enfermagem, atividade tecnica que exige seu conhecimento especializado.",
    "fundamento": "Art. 11, I, alinea h, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 152,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Cuidados a pacientes graves",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 11, I, da Lei no 7.498/1986, sao atividades privativas do Enfermeiro, entre outras:",
    "alternativas": {
      "A": "apenas a triagem administrativa de pacientes na recepcao da unidade de saude.",
      "B": "unicamente o preenchimento de formularios de alta hospitalar.",
      "C": "a marcacao de consultas ambulatoriais para pacientes estaveis.",
      "D": "cuidados diretos de enfermagem a pacientes graves com risco de vida, e cuidados de enfermagem de maior complexidade tecnica que exijam conhecimentos de base cientifica e capacidade de tomar decisoes imediatas."
    },
    "gabarito": "D",
    "comentario": "O art. 11, I, l e m, atribui privativamente ao Enfermeiro os cuidados diretos a pacientes graves com risco de vida e os cuidados de enfermagem de maior complexidade tecnica, que exijam conhecimentos de base cientifica e capacidade de tomar decisoes imediatas.",
    "fundamento": "Art. 11, I, alineas l e m, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 153,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Enfermeiro na equipe de saude",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Alem das atividades privativas, o Enfermeiro exerce, como integrante da equipe de saude, nos termos do art. 11, II, da Lei no 7.498/1986:",
    "alternativas": {
      "A": "participacao no planejamento, execucao e avaliacao da programacao de saude, entre outras atividades compartilhadas com a equipe multiprofissional.",
      "B": "exclusivamente atividades administrativas de natureza financeira.",
      "C": "somente atividades de limpeza e desinfeccao de ambientes hospitalares.",
      "D": "unicamente a elaboracao de cardapios para pacientes internados."
    },
    "gabarito": "A",
    "comentario": "O art. 11, II, a, atribui ao Enfermeiro, como integrante da equipe de saude, a participacao no planejamento, execucao e avaliacao da programacao de saude, entre outras atividades nao privativas exercidas em equipe.",
    "fundamento": "Art. 11, II, alinea a, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 154,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Prescricao de medicamentos em programas de saude publica",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 11, II, da Lei no 7.498/1986, o Enfermeiro, como integrante da equipe de saude, pode realizar:",
    "alternativas": {
      "A": "prescricao de qualquer medicamento controlado, sem qualquer limitacao ou protocolo institucional.",
      "B": "prescricao de medicamentos estabelecidos em programas de saude publica e em rotina aprovada pela instituicao de saude.",
      "C": "prescricao medica plena, equiparando-se, para todos os efeitos, ao profissional medico.",
      "D": "prescricao exclusivamente de procedimentos ciruricos de grande porte."
    },
    "gabarito": "B",
    "comentario": "O art. 11, II, c, autoriza o Enfermeiro a prescrever medicamentos estabelecidos em programas de saude publica e em rotina aprovada pela instituicao de saude, atividade distinta da prescricao medica geral.",
    "fundamento": "Art. 11, II, alinea c, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 155,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Execucao do parto sem distocia",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 11, II, da Lei no 7.498/1986, compete ao Enfermeiro, como integrante da equipe de saude:",
    "alternativas": {
      "A": "realizacao de cirurgias obstetricas de alta complexidade, com exclusividade sobre o profissional medico.",
      "B": "prescricao de anestesia geral em procedimentos obstetricos.",
      "C": "acompanhamento da evolucao e do trabalho de parto, e execucao do parto sem distocia.",
      "D": "diagnostico definitivo de malformacoes fetais em exames de imagem."
    },
    "gabarito": "C",
    "comentario": "O art. 11, II, h e i, atribui ao Enfermeiro o acompanhamento da evolucao e do trabalho de parto e a execucao do parto sem distocia (isto e, sem complicacoes), no ambito de sua atuacao como integrante da equipe de saude.",
    "fundamento": "Art. 11, II, alineas h e i, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 156,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Atividades da Obstetriz/Enfermeira Obstetrica",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do paragrafo unico do art. 11 da Lei no 7.498/1986, as profissionais referidas no inciso II do art. 6 (Obstetriz ou Enfermeira Obstetrica) tem, ainda, incumbencia de:",
    "alternativas": {
      "A": "realizacao exclusiva de cesarianas em qualquer situacao clinica.",
      "B": "prescricao de quimioterapia em pacientes oncologicos.",
      "C": "emissao de laudos periciais em processos judiciais de natureza civel.",
      "D": "assistencia a parturiente e ao parto normal, identificacao das distocias obstetricas e tomada de providencias ate a chegada do medico, e realizacao de episiotomia e episiorrafia, com aplicacao de anestesia local, quando necessaria."
    },
    "gabarito": "D",
    "comentario": "O paragrafo unico do art. 11 atribui as Obstetrizes/Enfermeiras Obstetricas, alem das atividades gerais do Enfermeiro, a assistencia a parturiente e ao parto normal, a identificacao de distocias obstetricas com tomada de providencias ate a chegada do medico, e a realizacao de episiotomia e episiorrafia, com anestesia local quando necessaria.",
    "fundamento": "Art. 11, paragrafo unico, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 157,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Atividades do Tecnico de Enfermagem",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 12 da Lei no 7.498/1986, o Tecnico de Enfermagem exerce atividade de:",
    "alternativas": {
      "A": "nivel medio, envolvendo orientacao e acompanhamento do trabalho de enfermagem em grau auxiliar, e participacao no planejamento da assistencia de enfermagem.",
      "B": "nivel superior, com atribuicoes identicas as do Enfermeiro, sem qualquer distincao legal.",
      "C": "nivel elementar, restrita exclusivamente a tarefas de limpeza hospitalar.",
      "D": "nivel tecnico especializado em diagnostico por imagem, com exclusividade sobre essa area."
    },
    "gabarito": "A",
    "comentario": "O art. 12, caput, estabelece que o Tecnico de Enfermagem exerce atividade de nivel medio, envolvendo orientacao e acompanhamento do trabalho de enfermagem em grau auxiliar, e participacao no planejamento da assistencia de enfermagem.",
    "fundamento": "Art. 12, caput, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 158,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Limite de atuacao do Tecnico de Enfermagem",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 12, alinea b, da Lei no 7.498/1986, cabe ao Tecnico de Enfermagem:",
    "alternativas": {
      "A": "executar, sem qualquer restricao, todas as atividades privativas do Enfermeiro previstas no art. 11.",
      "B": "executar acoes assistenciais de enfermagem, exceto as privativas do Enfermeiro, observado o disposto no paragrafo unico do art. 11 da lei.",
      "C": "substituir o Enfermeiro na direcao do orgao de enfermagem, em caso de ferias ou afastamento.",
      "D": "emitir parecer tecnico sobre materia de enfermagem, em substituicao ao Enfermeiro."
    },
    "gabarito": "B",
    "comentario": "O art. 12, b, autoriza o Tecnico de Enfermagem a executar acoes assistenciais de enfermagem, ressalvadas expressamente as atividades privativas do Enfermeiro (art. 11) e as atividades das Obstetrizes/Enfermeiras Obstetricas (paragrafo unico do art. 11).",
    "fundamento": "Art. 12, alinea b, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 159,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Atividades do Auxiliar de Enfermagem",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 13 da Lei no 7.498/1986, o Auxiliar de Enfermagem exerce atividades de nivel medio, de natureza:",
    "alternativas": {
      "A": "estritamente gerencial, com competencia para dirigir servicos hospitalares inteiros.",
      "B": "cientifica avancada, equiparando-se as atribuicoes do Enfermeiro para todos os fins legais.",
      "C": "repetitiva, envolvendo servicos auxiliares de enfermagem sob supervisao, bem como participacao em nivel de execucao simples em processos de tratamento.",
      "D": "exclusivamente administrativa, sem qualquer contato direto com pacientes."
    },
    "gabarito": "C",
    "comentario": "O art. 13, caput, estabelece que o Auxiliar de Enfermagem exerce atividades de nivel medio, de natureza repetitiva, envolvendo servicos auxiliares de enfermagem sob supervisao, bem como participacao em nivel de execucao simples em processos de tratamento.",
    "fundamento": "Art. 13, caput, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 160,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Atribuicoes especificas do Auxiliar de Enfermagem",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Cabe especialmente ao Auxiliar de Enfermagem, nos termos do art. 13 da Lei no 7.498/1986:",
    "alternativas": {
      "A": "prescrever a assistencia de enfermagem para pacientes em estado grave.",
      "B": "dirigir o orgao de enfermagem da instituicao de saude.",
      "C": "realizar consultoria e auditoria sobre materia de enfermagem.",
      "D": "observar, reconhecer e descrever sinais e sintomas; executar acoes de tratamento simples; e prestar cuidados de higiene e conforto ao paciente."
    },
    "gabarito": "D",
    "comentario": "O art. 13, alineas a a c, atribui ao Auxiliar de Enfermagem observar, reconhecer e descrever sinais e sintomas, executar acoes de tratamento simples, e prestar cuidados de higiene e conforto ao paciente, alem de participar da equipe de saude.",
    "fundamento": "Art. 13, alineas a, b e c, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 161,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Supervisao do Enfermeiro",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 15 da Lei no 7.498/1986, as atividades referidas nos arts. 12 e 13 (Tecnico e Auxiliar de Enfermagem), quando exercidas em instituicoes de saude, publicas e privadas, e em programas de saude, somente podem ser desempenhadas:",
    "alternativas": {
      "A": "sob orientacao e supervisao de Enfermeiro.",
      "B": "sem qualquer supervisao, desde que o profissional possua mais de dois anos de experiencia.",
      "C": "sob supervisao exclusiva do diretor administrativo da instituicao.",
      "D": "sob orientacao do profissional medico responsavel pelo setor, dispensada a supervisao do Enfermeiro."
    },
    "gabarito": "A",
    "comentario": "O art. 15 exige que as atividades do Tecnico e do Auxiliar de Enfermagem, quando exercidas em instituicoes de saude ou em programas de saude, sejam desempenhadas sob orientacao e supervisao de Enfermeiro.",
    "fundamento": "Art. 15 da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 162,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Piso salarial nacional dos Enfermeiros (CLT)",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 15-A da Lei no 7.498/1986, incluido pela Lei no 14.434/2022, o piso salarial nacional dos Enfermeiros contratados sob o regime da CLT foi fixado em R$ 4.750,00 mensais, sendo o piso dos demais profissionais fixado com base nesse valor, na razao de:",
    "alternativas": {
      "A": "50% para o Tecnico de Enfermagem e 70% para o Auxiliar de Enfermagem e para a Parteira.",
      "B": "70% para o Tecnico de Enfermagem e 50% para o Auxiliar de Enfermagem e para a Parteira.",
      "C": "100% para todos os profissionais da equipe de enfermagem, sem distincao de categoria.",
      "D": "30% para o Tecnico de Enfermagem e 20% para o Auxiliar de Enfermagem e para a Parteira."
    },
    "gabarito": "B",
    "comentario": "O art. 15-A, paragrafo unico, fixa o piso salarial dos profissionais celetistas com base no piso do Enfermeiro, na razao de 70% para o Tecnico de Enfermagem e 50% para o Auxiliar de Enfermagem e para a Parteira.",
    "fundamento": "Art. 15-A, paragrafo unico, da Lei no 7.498/1986, incluido pela Lei no 14.434/2022.",
    "oficial": false
  },

  {
    "id": 163,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Administracao publica e provimento de cargos",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 20 da Lei no 7.498/1986, os orgaos de pessoal da administracao publica direta e indireta, federal, estadual, municipal, do Distrito Federal e dos Territorios, no provimento de cargos e funcoes e na contratacao de pessoal de enfermagem, de todos os graus, deverao:",
    "alternativas": {
      "A": "aplicar exclusivamente as normas do direito privado, afastando-se a Lei no 7.498/1986.",
      "B": "dispensar qualquer exigencia de habilitacao especifica, bastando a indicacao da chefia.",
      "C": "observar os preceitos desta lei.",
      "D": "seguir apenas regulamento interno de cada orgao, ainda que contrarie a lei federal."
    },
    "gabarito": "C",
    "comentario": "O art. 20 determina que os orgaos de pessoal da administracao publica, em qualquer esfera federativa, observem os preceitos da Lei no 7.498/1986 no provimento de cargos e funcoes e na contratacao de pessoal de enfermagem.",
    "fundamento": "Art. 20, caput, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 164,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Direitos adquiridos",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do paragrafo unico do art. 20 da Lei no 7.498/1986, os orgaos de pessoal da administracao publica promoverao as medidas necessarias a harmonizacao das situacoes ja existentes com as disposicoes da lei, respeitados:",
    "alternativas": {
      "A": "unicamente os interesses financeiros do orgao publico, ainda que em prejuizo do servidor.",
      "B": "apenas as decisoes administrativas mais recentes, independentemente de direito adquirido.",
      "C": "exclusivamente os criterios de conveniencia e oportunidade da autoridade nomeante.",
      "D": "os direitos adquiridos quanto a vencimentos e salarios."
    },
    "gabarito": "D",
    "comentario": "O paragrafo unico do art. 20 determina que a harmonizacao das situacoes existentes com a nova lei respeite os direitos adquiridos quanto a vencimentos e salarios dos profissionais ja em exercicio.",
    "fundamento": "Art. 20, paragrafo unico, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 165,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Atendentes de enfermagem",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 23 da Lei no 7.498/1986, o pessoal que exercia tarefas de enfermagem por carencia de recursos humanos de nivel medio, sem formacao especifica regulada em lei, poderia ser autorizado pelo Conselho Federal de Enfermagem a exercer atividades elementares de enfermagem, sendo tal autorizacao:",
    "alternativas": {
      "A": "limitada ao prazo de 10 anos a contar da promulgacao da lei, e, quanto aos atendentes admitidos antes de sua vigencia, assegurado o exercicio das atividades elementares nos termos do art. 15.",
      "B": "definitiva e vitalicia, equiparando integralmente o atendente ao Tecnico de Enfermagem.",
      "C": "condicionada exclusivamente a aprovacao em concurso publico, mesmo para quem ja atuava havia decadas.",
      "D": "restrita a atendentes com formacao superior em qualquer area, ainda que nao relacionada a saude."
    },
    "gabarito": "A",
    "comentario": "O art. 23 e seu paragrafo unico previam autorizacao do COFEN, limitada a 10 anos a contar da promulgacao da lei, para o exercicio de atividades elementares de enfermagem por pessoal sem formacao especifica, assegurando, ainda, aos atendentes ja admitidos, o exercicio dessas atividades nos termos do art. 15.",
    "fundamento": "Art. 23 e paragrafo unico da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 166,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Regulamentacao da lei",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 25 da Lei no 7.498/1986, o Poder Executivo regulamentaria a lei no prazo de:",
    "alternativas": {
      "A": "30 (trinta) dias a contar da data de sua publicacao.",
      "B": "120 (cento e vinte) dias a contar da data de sua publicacao.",
      "C": "1 (um) ano a contar da data de sua publicacao.",
      "D": "5 (cinco) anos a contar da data de sua publicacao."
    },
    "gabarito": "B",
    "comentario": "O art. 25 determinou que o Poder Executivo regulamentasse a lei no prazo de 120 dias a contar da publicacao, prazo que resultou na edicao do Decreto no 94.406/1987.",
    "fundamento": "Art. 25 da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 167,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Objeto da lei",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A ementa da Lei no 7.498, de 25 de junho de 1986, dispoe sobre:",
    "alternativas": {
      "A": "a criacao do Sistema Unico de Saude (SUS) e suas diretrizes de descentralizacao.",
      "B": "o codigo de etica medica e suas infracoes disciplinares.",
      "C": "a regulamentacao do exercicio da enfermagem, e da outras providencias.",
      "D": "a regulamentacao do exercicio da medicina veterinaria no territorio nacional."
    },
    "gabarito": "C",
    "comentario": "A Lei no 7.498/1986 dispoe sobre a regulamentacao do exercicio da enfermagem e da outras providencias, sendo o principal marco legal da profissao no Brasil.",
    "fundamento": "Ementa da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 168,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Hierarquia tecnica da equipe de enfermagem",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Comparando as atribuicoes previstas nos arts. 11, 12 e 13 da Lei no 7.498/1986, e correto afirmar que:",
    "alternativas": {
      "A": "as tres categorias profissionais possuem atribuicoes identicas, variando apenas a remuneracao.",
      "B": "o Auxiliar de Enfermagem possui atribuicoes mais complexas que o Tecnico de Enfermagem, invertendo a logica hierarquica tecnica.",
      "C": "apenas o Enfermeiro esta sujeito a fiscalizacao do Conselho Regional de Enfermagem.",
      "D": "ha uma gradacao de complexidade tecnica entre Enfermeiro (nivel superior, com atividades privativas de maior complexidade), Tecnico de Enfermagem (nivel medio, com participacao no planejamento) e Auxiliar de Enfermagem (nivel medio, de natureza repetitiva e execucao simples)."
    },
    "gabarito": "D",
    "comentario": "A leitura conjunta dos arts. 11 a 13 revela gradacao tecnica: o Enfermeiro (nivel superior) detem atividades privativas de maior complexidade; o Tecnico de Enfermagem (nivel medio) participa do planejamento e executa acoes assistenciais nao privativas; e o Auxiliar de Enfermagem (nivel medio) exerce atividades repetitivas e de execucao simples, sempre sob supervisao do Enfermeiro.",
    "fundamento": "Arts. 11, 12, 13 e 15 da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 169,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Distincao entre atividades privativas e de equipe",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Em relacao ao art. 11 da Lei no 7.498/1986, e correto afirmar que as atividades nele previstas se dividem em duas categorias:",
    "alternativas": {
      "A": "atividades privativas do Enfermeiro (inciso I) e atividades exercidas pelo Enfermeiro como integrante da equipe de saude (inciso II), sendo estas ultimas passiveis de compartilhamento com outros profissionais, no ambito de suas respectivas competencias.",
      "B": "atividades administrativas (inciso I) e atividades assistenciais (inciso II), sem qualquer relacao com a nocao de privatividade.",
      "C": "atividades obrigatorias (inciso I) e atividades facultativas (inciso II), a criterio exclusivo do Enfermeiro.",
      "D": "atividades remuneradas (inciso I) e atividades voluntarias (inciso II), sem previsao de contraprestacao financeira nestas ultimas."
    },
    "gabarito": "A",
    "comentario": "O art. 11 estrutura-se em dois incisos: o inciso I lista as atividades privativas do Enfermeiro (exclusivas, que nenhum outro profissional pode realizar), e o inciso II lista as atividades que o Enfermeiro exerce como integrante da equipe de saude, em articulacao com outros profissionais.",
    "fundamento": "Art. 11, I e II, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 170,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Objeto do decreto",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O Decreto no 94.406, de 8 de junho de 1987, tem por objeto:",
    "alternativas": {
      "A": "instituir o Conselho Federal de Medicina e os Conselhos Regionais de Medicina.",
      "B": "regulamentar a Lei no 7.498, de 25 de junho de 1986, que dispoe sobre o exercicio da enfermagem, e dar outras providencias.",
      "C": "criar o piso salarial nacional da categoria de tecnicos em radiologia.",
      "D": "regulamentar o exercicio da profissao de fisioterapeuta e terapeuta ocupacional."
    },
    "gabarito": "B",
    "comentario": "O Decreto no 94.406/1987 regulamenta a Lei no 7.498/1986, que dispoe sobre o exercicio da enfermagem, detalhando as atribuicoes de cada categoria profissional da area.",
    "fundamento": "Ementa do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 171,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Exercicio privativo",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 1 do Decreto no 94.406/1987, o exercicio da atividade de enfermagem, respeitados os graus de habilitacao, e privativo de:",
    "alternativas": {
      "A": "qualquer profissional de saude, independentemente de formacao ou registro em conselho profissional.",
      "B": "apenas do Enfermeiro, sendo vedado a qualquer outro profissional exercer atividades de enfermagem.",
      "C": "Enfermeiro, Tecnico de Enfermagem, Auxiliar de Enfermagem e Parteiro, e so sera permitido ao profissional inscrito no Conselho Regional de Enfermagem da respectiva Regiao.",
      "D": "Enfermeiro e Medico, exclusivamente, em regime de atuacao conjunta obrigatoria."
    },
    "gabarito": "C",
    "comentario": "O art. 1 do Decreto reproduz e reforca a regra da lei: o exercicio da enfermagem e privativo de Enfermeiro, Tecnico de Enfermagem, Auxiliar de Enfermagem e Parteiro, condicionado a inscricao no Conselho Regional de Enfermagem da respectiva Regiao.",
    "fundamento": "Art. 1 do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 172,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Planejamento institucional",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 2 do Decreto no 94.406/1987, as instituicoes e servicos de saude:",
    "alternativas": {
      "A": "estao dispensadas de considerar a enfermagem em seu planejamento institucional.",
      "B": "devem submeter seu planejamento exclusivamente a aprovacao do Conselho Federal de Medicina.",
      "C": "podem, a criterio da direcao, excluir a enfermagem da programacao de servicos de urgencia.",
      "D": "incluirao a atividade de enfermagem no seu planejamento e programacao."
    },
    "gabarito": "D",
    "comentario": "O art. 2 determina que as instituicoes e servicos de saude incluirao a atividade de enfermagem em seu planejamento e programacao, alinhando-se ao art. 3 da Lei no 7.498/1986.",
    "fundamento": "Art. 2 do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 173,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Prescricao da assistencia de enfermagem",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 3 do Decreto no 94.406/1987, a prescricao da assistencia de enfermagem e parte integrante:",
    "alternativas": {
      "A": "do programa de enfermagem.",
      "B": "exclusivamente do prontuario medico, sem qualquer relacao com a programacao de enfermagem.",
      "C": "do regimento interno do Conselho Regional de Enfermagem, sem efeito assistencial direto.",
      "D": "do plano de cargos e salarios da instituicao de saude."
    },
    "gabarito": "A",
    "comentario": "O art. 3 estabelece que a prescricao da assistencia de enfermagem e parte integrante do programa de enfermagem, reforcando o disposto no art. 4 da Lei no 7.498/1986.",
    "fundamento": "Art. 3 do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 174,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Quem sao Enfermeiros",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 4 do Decreto no 94.406/1987, e considerado Enfermeiro, entre outras hipoteses:",
    "alternativas": {
      "A": "qualquer pessoa que tenha concluido curso de primeiros socorros oferecido por entidade nao credenciada.",
      "B": "o titular do diploma de Enfermeiro conferido por instituicao de ensino, nos termos da lei.",
      "C": "o servidor publico ocupante de cargo de chefia administrativa em unidade de saude.",
      "D": "o profissional com registro em conselho de classe diverso do COREN, desde que atue na area da saude."
    },
    "gabarito": "B",
    "comentario": "O art. 4, I, do Decreto, em consonancia com o art. 6 da Lei no 7.498/1986, considera Enfermeiro o titular do diploma de Enfermeiro conferido por instituicao de ensino, nos termos da lei.",
    "fundamento": "Art. 4, I, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 175,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Quem sao Tecnicos de Enfermagem",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 5 do Decreto no 94.406/1987, e considerado Tecnico de Enfermagem:",
    "alternativas": {
      "A": "qualquer profissional com curso tecnico em area diversa da saude.",
      "B": "o estudante do curso tecnico ainda nao formado, desde que cursando o ultimo semestre.",
      "C": "o titular do diploma ou do certificado de Tecnico de Enfermagem, expedido de acordo com a legislacao e registrado no orgao competente.",
      "D": "o profissional formado exclusivamente no exterior, independentemente de revalidacao do diploma."
    },
    "gabarito": "C",
    "comentario": "O art. 5, I, considera Tecnico de Enfermagem o titular do diploma ou certificado de Tecnico de Enfermagem, expedido de acordo com a legislacao e registrado no orgao competente.",
    "fundamento": "Art. 5, I, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 176,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Quem sao Auxiliares de Enfermagem",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 6 do Decreto no 94.406/1987, e considerado Auxiliar de Enfermagem, entre outras hipoteses:",
    "alternativas": {
      "A": "qualquer cuidador informal contratado diretamente pela familia do paciente.",
      "B": "o profissional de limpeza hospitalar com mais de cinco anos de servico.",
      "C": "o estagiario de enfermagem, independentemente de supervisao docente.",
      "D": "o titular de certificado de Auxiliar de Enfermagem conferido por instituicao de ensino, nos termos da lei, e registrado no orgao competente."
    },
    "gabarito": "D",
    "comentario": "O art. 6, I, considera Auxiliar de Enfermagem o titular de certificado de Auxiliar de Enfermagem conferido por instituicao de ensino, nos termos da lei, e registrado no orgao competente.",
    "fundamento": "Art. 6, I, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 177,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Quem sao Parteiros",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 7 do Decreto no 94.406/1987, e considerado Parteiro, entre outras hipoteses:",
    "alternativas": {
      "A": "o titular do certificado previsto no art. 1 do Decreto-lei no 8.778, de 22 de janeiro de 1946, observado o disposto na Lei no 3.640/1959.",
      "B": "qualquer profissional medico com especializacao em ginecologia e obstetricia.",
      "C": "o Tecnico de Enfermagem que tenha atuado em maternidade por mais de um ano.",
      "D": "exclusivamente o titular de diploma de Enfermagem Obstetrica obtido apos o ano 2000."
    },
    "gabarito": "A",
    "comentario": "O art. 7, I, considera Parteiro o titular do certificado previsto no art. 1 do Decreto-lei no 8.778/1946, observado o disposto na Lei no 3.640/1959, reproduzindo a regra do art. 9 da Lei no 7.498/1986.",
    "fundamento": "Art. 7, I, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 178,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Atividades privativas do Enfermeiro",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 8, I, do Decreto no 94.406/1987, constitui atividade PRIVATIVA do Enfermeiro:",
    "alternativas": {
      "A": "limpeza terminal de leitos apos alta hospitalar.",
      "B": "direcao do orgao de enfermagem integrante da estrutura basica da instituicao de saude, publica ou privada, e chefia de servico e de unidade de enfermagem.",
      "C": "transporte de materiais entre a farmacia e as unidades de internacao.",
      "D": "atendimento telefonico da central de agendamento de consultas."
    },
    "gabarito": "B",
    "comentario": "O art. 8, I, a, atribui privativamente ao Enfermeiro a direcao do orgao de enfermagem integrante da estrutura basica da instituicao de saude, publica ou privada, e a chefia de servico e de unidade de enfermagem, em linha com o art. 11 da Lei no 7.498/1986.",
    "fundamento": "Art. 8, I, alinea a, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 179,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Cuidados de maior complexidade tecnica",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 8, I, h, do Decreto no 94.406/1987, constitui atividade privativa do Enfermeiro os cuidados de enfermagem de maior complexidade tecnica que exijam:",
    "alternativas": {
      "A": "apenas experiencia pratica, dispensado qualquer conhecimento tecnico-cientifico formal.",
      "B": "autorizacao previa e expressa do medico responsavel para cada procedimento especifico.",
      "C": "conhecimentos cientificos adequados e capacidade de tomar decisoes imediatas.",
      "D": "aprovacao do setor administrativo-financeiro da instituicao, por implicarem custo elevado."
    },
    "gabarito": "C",
    "comentario": "O art. 8, I, h, atribui ao Enfermeiro, privativamente, os cuidados de enfermagem de maior complexidade tecnica que exijam conhecimentos cientificos adequados e capacidade de tomar decisoes imediatas.",
    "fundamento": "Art. 8, I, alinea h, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 180,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Enfermeiro na equipe de saude",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O art. 8, II, do Decreto no 94.406/1987 detalha as atividades do Enfermeiro como integrante da equipe de saude, entre as quais NAO se inclui:",
    "alternativas": {
      "A": "participacao no planejamento, execucao e avaliacao da programacao de saude.",
      "B": "participacao em projetos de construcao ou reforma de unidades de internacao.",
      "C": "participacao nos programas de higiene e seguranca do trabalho e de prevencao de acidentes e de doencas profissionais e do trabalho.",
      "D": "direcao exclusiva e vitalicia do orgao de enfermagem, sem possibilidade de substituicao por outro Enfermeiro."
    },
    "gabarito": "D",
    "comentario": "As alternativas A, C e D reproduzem literalmente incumbencias do art. 8, II, do Decreto. Ja a 'direcao exclusiva e vitalicia sem possibilidade de substituicao' nao encontra correspondencia no texto legal, que trata a direcao do orgao de enfermagem como atividade privativa (inciso I), nao como atribuicao vitalicia e insubstituivel.",
    "fundamento": "Art. 8, I e II, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 181,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Participacao em bancas examinadoras",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 8, II, r, do Decreto no 94.406/1987, compete ao Enfermeiro, como integrante da equipe de saude:",
    "alternativas": {
      "A": "participacao em bancas examinadoras, em materias especificas de enfermagem, nos concursos para provimento de cargo ou contratacao de Enfermeiro ou pessoal tecnico e Auxiliar de Enfermagem.",
      "B": "presidencia obrigatoria de todas as bancas examinadoras de concursos publicos, independentemente da area do certame.",
      "C": "elaboracao exclusiva do edital de concursos publicos municipais.",
      "D": "homologacao final do resultado de concursos publicos, em substituicao a autoridade competente."
    },
    "gabarito": "A",
    "comentario": "O art. 8, II, r, atribui ao Enfermeiro a participacao em bancas examinadoras, em materias especificas de enfermagem, nos concursos para provimento de cargo ou contratacao de Enfermeiro ou pessoal tecnico e Auxiliar de Enfermagem — atividade tecnica de apoio ao certame, nao a presidencia ou homologacao do concurso.",
    "fundamento": "Art. 8, II, alinea r, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 182,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Prevencao de infeccao hospitalar",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 8, II, e, do Decreto no 94.406/1987, compete ao Enfermeiro:",
    "alternativas": {
      "A": "responsabilidade exclusiva e pessoal por qualquer caso de infeccao hospitalar ocorrido na instituicao.",
      "B": "prevencao e controle sistematico da infeccao hospitalar, inclusive como membro das respectivas comissoes.",
      "C": "fiscalizacao da limpeza predial externa da instituicao de saude.",
      "D": "auditoria financeira dos contratos de fornecimento de material de limpeza."
    },
    "gabarito": "B",
    "comentario": "O art. 8, II, e, atribui ao Enfermeiro a prevencao e o controle sistematico da infeccao hospitalar, inclusive como membro das respectivas comissoes (como a Comissao de Controle de Infeccao Hospitalar).",
    "fundamento": "Art. 8, II, alinea e, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 183,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Atividades da Obstetriz/Enfermeira Obstetrica",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 9 do Decreto no 94.406/1987, alem das atividades gerais do Enfermeiro, as profissionais titulares de diploma de Obstetriz ou de Enfermeira Obstetrica tem, ainda, incumbencia de:",
    "alternativas": {
      "A": "realizacao de partos cirurgicos (cesarianas) sem qualquer participacao do profissional medico.",
      "B": "prescricao de anestesia geral para procedimentos obstetricos de alta complexidade.",
      "C": "prestacao de assistencia a parturiente e ao parto normal; identificacao das distocias obstetricas e tomada de providencia ate a chegada do medico; e realizacao de episiotomia e episiorrafia, com aplicacao de anestesia local, quando necessaria.",
      "D": "emissao de atestado de obito em casos de morte materna."
    },
    "gabarito": "C",
    "comentario": "O art. 9 reproduz, de forma mais detalhada, o paragrafo unico do art. 11 da Lei no 7.498/1986: assistencia a parturiente e ao parto normal, identificacao de distocias obstetricas com providencias ate a chegada do medico, e realizacao de episiotomia/episiorrafia com anestesia local quando necessaria.",
    "fundamento": "Art. 9 do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 184,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Tecnico de Enfermagem assistindo o Enfermeiro",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 10, I, do Decreto no 94.406/1987, cabe ao Tecnico de Enfermagem assistir ao Enfermeiro:",
    "alternativas": {
      "A": "exclusivamente na elaboracao de relatorios financeiros da unidade de saude.",
      "B": "apenas na organizacao de eventos institucionais de confraternizacao.",
      "C": "unicamente na fiscalizacao de contratos de terceirizacao de servicos gerais.",
      "D": "no planejamento, programacao, orientacao e supervisao das atividades de assistencia de enfermagem, e na prestacao de cuidados diretos de enfermagem a pacientes em estado grave."
    },
    "gabarito": "D",
    "comentario": "O art. 10, I, alineas a e b, atribui ao Tecnico de Enfermagem assistir ao Enfermeiro no planejamento, programacao, orientacao e supervisao das atividades de assistencia de enfermagem, e na prestacao de cuidados diretos a pacientes em estado grave.",
    "fundamento": "Art. 10, I, alineas a e b, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 185,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Limite de atuacao do Tecnico de Enfermagem",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 10, II, do Decreto no 94.406/1987, o Tecnico de Enfermagem pode executar atividades de assistencia de enfermagem, EXCETUADAS:",
    "alternativas": {
      "A": "as privativas do Enfermeiro e as referidas no art. 9 do Decreto (atividades das Obstetrizes/Enfermeiras Obstetricas).",
      "B": "apenas as atividades de baixa complexidade, podendo executar livremente qualquer atividade privativa do Enfermeiro.",
      "C": "unicamente as atividades administrativas, podendo exercer, sem qualquer restricao, todas as atividades clinicas.",
      "D": "as atividades de higiene e conforto ao paciente, que seriam privativas do Auxiliar de Enfermagem."
    },
    "gabarito": "A",
    "comentario": "O art. 10, II, do Decreto autoriza o Tecnico de Enfermagem a executar atividades de assistencia de enfermagem, ressalvadas expressamente as privativas do Enfermeiro (art. 8) e as atividades especificas das Obstetrizes/Enfermeiras Obstetricas (art. 9).",
    "fundamento": "Art. 10, II, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 186,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Atividades do Auxiliar de Enfermagem",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 11, III, do Decreto no 94.406/1987, cabe ao Auxiliar de Enfermagem, entre outras atividades:",
    "alternativas": {
      "A": "prescrever a assistencia de enfermagem em situacoes de urgencia, dispensada qualquer supervisao.",
      "B": "ministrar medicamentos por via oral e parenteral, realizar controle hidrico, fazer curativos e aplicar oxigenoterapia, nebulizacao, enteroclisma, enema e calor ou frio.",
      "C": "dirigir o orgao de enfermagem em caso de ausencia temporaria do Enfermeiro.",
      "D": "realizar consultoria de enfermagem em processos de acreditacao hospitalar."
    },
    "gabarito": "B",
    "comentario": "O art. 11, III, alineas a a d, atribui ao Auxiliar de Enfermagem executar tratamentos especificamente prescritos ou de rotina, como ministrar medicamentos por via oral e parenteral, realizar controle hidrico, fazer curativos e aplicar oxigenoterapia, nebulizacao, enteroclisma, enema e calor ou frio.",
    "fundamento": "Art. 11, III, alineas a a d, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 187,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Auxiliar de Enfermagem em sala de cirurgia",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 11, III, j, do Decreto no 94.406/1987, cabe ao Auxiliar de Enfermagem:",
    "alternativas": {
      "A": "realizar, com exclusividade, a anestesia geral em procedimentos ciruricos.",
      "B": "assinar, isoladamente, o termo de consentimento livre e esclarecido do paciente.",
      "C": "circular em sala de cirurgia e, se necessario, instrumentar.",
      "D": "dirigir a equipe cirurgica na ausencia do cirurgiao responsavel."
    },
    "gabarito": "C",
    "comentario": "O art. 11, III, j, atribui ao Auxiliar de Enfermagem circular em sala de cirurgia e, se necessario, instrumentar, atividade de apoio tecnico ao ato cirurgico, sob supervisao do Enfermeiro.",
    "fundamento": "Art. 11, III, alinea j, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 188,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Cuidados de higiene e conforto",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 11, IV, do Decreto no 94.406/1987, cabe ao Auxiliar de Enfermagem prestar cuidados de higiene e conforto ao paciente e zelar por sua seguranca, inclusive:",
    "alternativas": {
      "A": "prescrever dieta hospitalar personalizada, em substituicao ao nutricionista.",
      "B": "administrar, isoladamente, medicacao de uso controlado, sem qualquer supervisao.",
      "C": "autorizar altas hospitalares em casos de melhora clinica evidente.",
      "D": "alimenta-lo ou auxilia-lo a alimentar-se, e zelar pela limpeza e ordem do material, de equipamentos e de dependencias de unidades de saude."
    },
    "gabarito": "D",
    "comentario": "O art. 11, IV, alineas a e b, atribui ao Auxiliar de Enfermagem alimentar o paciente ou auxilia-lo a alimentar-se, e zelar pela limpeza e ordem do material, de equipamentos e de dependencias das unidades de saude, no ambito dos cuidados de higiene, conforto e seguranca.",
    "fundamento": "Art. 11, IV, alineas a e b, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 189,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Procedimentos pos-morte",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 11, VIII, do Decreto no 94.406/1987, cabe ao Auxiliar de Enfermagem:",
    "alternativas": {
      "A": "participar dos procedimentos pos-morte.",
      "B": "emitir a declaracao de obito, em substituicao ao medico.",
      "C": "realizar necropsia em casos de morte suspeita.",
      "D": "decidir sobre a doacao de orgaos do paciente falecido, independentemente de autorizacao familiar."
    },
    "gabarito": "A",
    "comentario": "O art. 11, VIII, atribui ao Auxiliar de Enfermagem participar dos procedimentos pos-morte, como os cuidados com o corpo apos o obito, atividade de natureza tecnica e assistencial, distinta de atribuicoes medicas ou legais.",
    "fundamento": "Art. 11, VIII, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 190,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Atribuicoes do Parteiro",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 12 do Decreto no 94.406/1987, incumbe ao Parteiro:",
    "alternativas": {
      "A": "realizar exclusivamente partos ciruricos em ambiente hospitalar de alta complexidade.",
      "B": "prestar cuidados a gestante e a parturiente; assistir ao parto normal, inclusive em domicilio; e cuidar da puerpera e do recem-nascido.",
      "C": "prescrever medicamentos controlados para gestantes de alto risco.",
      "D": "substituir o Enfermeiro Obstetra na direcao da maternidade."
    },
    "gabarito": "B",
    "comentario": "O art. 12, incisos I a III, atribui ao Parteiro prestar cuidados a gestante e a parturiente, assistir ao parto normal (inclusive em domicilio) e cuidar da puerpera e do recem-nascido.",
    "fundamento": "Art. 12, I a III, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 191,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Supervisao das atividades do Parteiro",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do paragrafo unico do art. 12 do Decreto no 94.406/1987, as atividades do Parteiro sao exercidas:",
    "alternativas": {
      "A": "sem qualquer supervisao, em razao da autonomia plena conferida pela lei a essa categoria.",
      "B": "exclusivamente sob supervisao medica direta, em qualquer circunstancia.",
      "C": "sob supervisao de Enfermeiro Obstetra, quando realizadas em instituicoes de saude, e, sempre que possivel, sob controle e supervisao de unidade de saude, quando realizadas em domicilio ou onde se fizerem necessarias.",
      "D": "sob supervisao do Auxiliar de Enfermagem mais antigo da equipe."
    },
    "gabarito": "C",
    "comentario": "O paragrafo unico do art. 12 exige supervisao de Enfermeiro Obstetra quando as atividades do Parteiro sao realizadas em instituicoes de saude, e, sempre que possivel, controle e supervisao de unidade de saude quando realizadas em domicilio.",
    "fundamento": "Art. 12, paragrafo unico, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 192,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Supervisao geral do Enfermeiro",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 13 do Decreto no 94.406/1987, as atividades relacionadas nos arts. 10 e 11 (Tecnico e Auxiliar de Enfermagem) somente poderao ser exercidas sob:",
    "alternativas": {
      "A": "autorizacao previa do Conselho Federal de Medicina, dispensada qualquer supervisao de enfermagem.",
      "B": "fiscalizacao exclusiva do setor de recursos humanos da instituicao.",
      "C": "acompanhamento facultativo, a criterio pessoal do profissional executante.",
      "D": "supervisao, orientacao e direcao de Enfermeiro."
    },
    "gabarito": "D",
    "comentario": "O art. 13 exige que as atividades do Tecnico de Enfermagem (art. 10) e do Auxiliar de Enfermagem (art. 11) somente sejam exercidas sob supervisao, orientacao e direcao de Enfermeiro, reforcando a estrutura hierarquico-tecnica da equipe.",
    "fundamento": "Art. 13 do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 193,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Codigo de Deontologia e anotacao em prontuario",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 14 do Decreto no 94.406/1987, incumbe a todo o pessoal de enfermagem:",
    "alternativas": {
      "A": "cumprir e fazer cumprir o Codigo de Deontologia da Enfermagem, e, quando for o caso, anotar no prontuario do paciente as atividades da assistencia de enfermagem, para fins estatisticos.",
      "B": "elaborar, individualmente, o codigo de etica da instituicao de saude em que atua.",
      "C": "substituir o registro em prontuario por comunicacao verbal informal entre a equipe.",
      "D": "reportar-se exclusivamente ao setor juridico da instituicao em caso de duvida tecnica."
    },
    "gabarito": "A",
    "comentario": "O art. 14, I e II, impoe a todo o pessoal de enfermagem o dever de cumprir e fazer cumprir o Codigo de Deontologia da Enfermagem, e de anotar no prontuario do paciente as atividades da assistencia de enfermagem, quando for o caso, para fins estatisticos.",
    "fundamento": "Art. 14, I e II, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 194,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Inscricao no COREN como condicao para provimento de cargos",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 15 do Decreto no 94.406/1987, na administracao publica direta e indireta, federal, estadual, municipal, do Distrito Federal e dos Territorios, sera exigida como condicao essencial para provimento de cargos e funcoes e contratacao de pessoal de enfermagem, de todos os graus:",
    "alternativas": {
      "A": "unicamente a apresentacao de curriculo, dispensado qualquer registro profissional.",
      "B": "a prova de inscricao no Conselho Regional de Enfermagem da respectiva regiao.",
      "C": "a comprovacao de vinculo empregaticio anterior em instituicao privada de saude.",
      "D": "a aprovacao em exame psicotecnico, dispensada a inscricao no conselho de classe."
    },
    "gabarito": "B",
    "comentario": "O art. 15 exige, como condicao essencial para provimento de cargos e funcoes e contratacao de pessoal de enfermagem na administracao publica de qualquer esfera federativa, a prova de inscricao no Conselho Regional de Enfermagem da respectiva regiao.",
    "fundamento": "Art. 15, caput, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 195,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Harmonizacao de situacoes existentes",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do paragrafo unico do art. 15 do Decreto no 94.406/1987, os orgaos e entidades da administracao publica promoverao, em articulacao com o Conselho Federal de Enfermagem, as medidas necessarias a:",
    "alternativas": {
      "A": "extincao imediata de todos os cargos de auxiliares de enfermagem sem formacao de nivel superior.",
      "B": "reducao salarial dos profissionais ja em exercicio, para fins de equiparacao orcamentaria.",
      "C": "adaptacao das situacoes ja existentes com as disposicoes do Decreto, respeitados os direitos adquiridos quanto a vencimentos e salarios.",
      "D": "transferencia compulsoria de todo o pessoal de enfermagem para o regime celetista."
    },
    "gabarito": "C",
    "comentario": "O paragrafo unico do art. 15 determina que a adaptacao das situacoes existentes as disposicoes do Decreto seja feita em articulacao com o Conselho Federal de Enfermagem, respeitados os direitos adquiridos quanto a vencimentos e salarios.",
    "fundamento": "Art. 15, paragrafo unico, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 196,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Relacao entre o Decreto e a Lei no 7.498/86",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Em relacao ao Decreto no 94.406/1987 e a Lei no 7.498/1986, e correto afirmar que:",
    "alternativas": {
      "A": "o Decreto revogou integralmente a Lei no 7.498/1986, substituindo-a por completo no ordenamento juridico.",
      "B": "o Decreto e hierarquicamente superior a lei, podendo dispor de forma contraria ao texto legal.",
      "C": "o Decreto e a Lei tratam de materias absolutamente distintas, sem qualquer relacao de complementaridade.",
      "D": "o Decreto e ato normativo infralegal expedido para regulamentar a Lei no 7.498/1986, detalhando e explicitando as atribuicoes das categorias profissionais da enfermagem previstas na lei."
    },
    "gabarito": "D",
    "comentario": "O Decreto no 94.406/1987 e ato normativo infralegal (poder regulamentar do Executivo) expedido para regulamentar a Lei no 7.498/1986, detalhando e explicitando, com maior minucia, as atribuicoes de cada categoria profissional da equipe de enfermagem previstas na lei.",
    "fundamento": "Preambulo do Decreto no 94.406/1987; art. 25 da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 197,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Lei 7.498/86 - Enfermeiro Obstetra e execucao de parto",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Considerando os arts. 6, II, e 11, paragrafo unico, da Lei no 7.498/1986, a titular do diploma ou certificado de Obstetriz ou de Enfermeira Obstetrica:",
    "alternativas": {
      "A": "e considerada Enfermeira para os fins da lei e possui, ainda, incumbencias adicionais especificas relacionadas a assistencia obstetrica, como identificacao de distocias e realizacao de episiotomia e episiorrafia.",
      "B": "nao integra a categoria de Enfermeiro, sendo equiparada, para todos os efeitos legais, ao Tecnico de Enfermagem.",
      "C": "somente pode atuar mediante autorizacao expressa e casuistica do Conselho Federal de Medicina.",
      "D": "esta impedida de exercer qualquer atividade privativa do Enfermeiro prevista no art. 11, I, da lei."
    },
    "gabarito": "A",
    "comentario": "Nos termos do art. 6, II, a Obstetriz/Enfermeira Obstetrica e considerada Enfermeira para os fins da lei, exercendo todas as atividades gerais do Enfermeiro e, ainda, as incumbencias adicionais do paragrafo unico do art. 11, relacionadas especificamente a assistencia obstetrica.",
    "fundamento": "Arts. 6, II, e 11, paragrafo unico, da Lei no 7.498/1986.",
    "oficial": false
  },

  {
    "id": 198,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Educacao continuada",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 8, II, n, do Decreto no 94.406/1987, compete ao Enfermeiro, como integrante da equipe de saude:",
    "alternativas": {
      "A": "elaboracao exclusiva da grade curricular dos cursos de graduacao em enfermagem no pais.",
      "B": "participacao nos programas de treinamento e aprimoramento de pessoal de saude, particularmente nos programas de educacao continuada.",
      "C": "avaliacao final de todos os profissionais medicos da instituicao, para fins de progressao de carreira.",
      "D": "definicao do orcamento anual destinado a capacitacao de toda a equipe multiprofissional."
    },
    "gabarito": "B",
    "comentario": "O art. 8, II, n, atribui ao Enfermeiro a participacao nos programas de treinamento e aprimoramento de pessoal de saude, particularmente nos programas de educacao continuada, no ambito de sua atuacao na equipe de saude.",
    "fundamento": "Art. 8, II, alinea n, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 199,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Prevencao de doencas transmissiveis pelo Tecnico",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 10, I, c, do Decreto no 94.406/1987, cabe ao Tecnico de Enfermagem assistir ao Enfermeiro:",
    "alternativas": {
      "A": "na definicao das politicas nacionais de vigilancia epidemiologica, em substituicao ao Ministerio da Saude.",
      "B": "na emissao de notificacao compulsoria, com dispensa da assinatura do Enfermeiro responsavel.",
      "C": "na prevencao e controle das doencas transmissiveis em geral em programas de vigilancia epidemiologica.",
      "D": "na fiscalizacao sanitaria de estabelecimentos comerciais nao relacionados a saude."
    },
    "gabarito": "C",
    "comentario": "O art. 10, I, c, atribui ao Tecnico de Enfermagem assistir ao Enfermeiro na prevencao e controle das doencas transmissiveis em geral, no ambito dos programas de vigilancia epidemiologica da instituicao.",
    "fundamento": "Art. 10, I, alinea c, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 200,
    "disciplina": "Legislação de Enfermagem",
    "assunto": "Decreto 94.406/87 - Educacao em saude pelo Auxiliar de Enfermagem",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 11, VI, do Decreto no 94.406/1987, cabe ao Auxiliar de Enfermagem participar de atividades de educacao em saude, inclusive:",
    "alternativas": {
      "A": "elaborar, isoladamente, as diretrizes curriculares de educacao em saude do municipio.",
      "B": "substituir o Enfermeiro na coordenacao de campanhas nacionais de vacinacao.",
      "C": "representar a instituicao de saude perante o Conselho Municipal de Saude, com poder de voto deliberativo.",
      "D": "orientar os pacientes na pos-consulta quanto ao cumprimento das prescricoes de enfermagem e medicas, e auxiliar o Enfermeiro e o Tecnico de Enfermagem na execucao dos programas de educacao para a saude."
    },
    "gabarito": "D",
    "comentario": "O art. 11, VI, alineas a e b, atribui ao Auxiliar de Enfermagem orientar os pacientes na pos-consulta quanto ao cumprimento das prescricoes de enfermagem e medicas, e auxiliar o Enfermeiro e o Tecnico de Enfermagem na execucao dos programas de educacao para a saude.",
    "fundamento": "Art. 11, VI, alineas a e b, do Decreto no 94.406/1987.",
    "oficial": false
  },

  {
    "id": 201,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Lei 13.022/14 — Objeto da lei",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 1º da Lei nº 13.022/2014, essa Lei institui normas gerais para as guardas municipais, disciplinando:",
    "alternativas": {
      "A": "o parágrafo 8º do art. 144 da Constituição Federal.",
      "B": "o art. 37 da Constituição Federal, relativo aos princípios da Administração Pública.",
      "C": "o art. 5º da Constituição Federal, relativo aos direitos e garantias fundamentais.",
      "D": "o art. 18 da Constituição Federal, relativo à organização político-administrativa."
    },
    "gabarito": "A",
    "comentario": "O art. 1º da Lei nº 13.022/2014 estabelece expressamente que a Lei institui normas gerais para as guardas municipais, disciplinando o § 8º do art. 144 da Constituição Federal, que trata da faculdade de os Municípios constituírem guardas municipais para proteção de seus bens, serviços e instalações.",
    "fundamento": "Art. 1º da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 202,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Lei 13.022/14 — Natureza jurídica",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 2º da Lei nº 13.022/2014, as guardas municipais são instituições de caráter:",
    "alternativas": {
      "A": "militar, subordinadas ao comando da Polícia Militar estadual.",
      "B": "civil, uniformizadas e armadas conforme previsto em lei, com função de proteção municipal preventiva.",
      "C": "exclusivamente civil e desarmado, sendo vedado, em qualquer hipótese, o uso de armas.",
      "D": "misto civil-militar, com dupla subordinação ao Município e ao Estado."
    },
    "gabarito": "B",
    "comentario": "O art. 2º define as guardas municipais como instituições de caráter civil, uniformizadas e armadas conforme previsto em lei, com a função de proteção municipal preventiva, ressalvadas as competências da União, dos Estados e do Distrito Federal.",
    "fundamento": "Art. 2º da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 203,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Lei 13.022/14 — Princípios mínimos de atuação",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "São princípios mínimos de atuação das guardas municipais, nos termos do art. 3º da Lei nº 13.022/2014, EXCETO:",
    "alternativas": {
      "A": "proteção dos direitos humanos fundamentais, do exercício da cidadania e das liberdades públicas.",
      "B": "preservação da vida, redução do sofrimento e diminuição das perdas.",
      "C": "hierarquia e disciplina militar, nos mesmos moldes das Polícias Militares estaduais.",
      "D": "patrulhamento preventivo e uso progressivo da força."
    },
    "gabarito": "C",
    "comentario": "Os princípios mínimos do art. 3º são: proteção dos direitos humanos fundamentais; preservação da vida, redução do sofrimento e diminuição das perdas; patrulhamento preventivo; compromisso com a evolução social da comunidade; e uso progressivo da força. A ideia de hierarquia e disciplina 'nos mesmos moldes' das Polícias Militares não consta desse rol — ao contrário, a própria Lei veda que a guarda fique sujeita a regulamentos disciplinares de natureza militar (art. 14, parágrafo único).",
    "fundamento": "Art. 3º da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 204,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Lei 13.022/14 — Competência geral",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 4º da Lei nº 13.022/2014, é competência geral das guardas municipais a proteção de bens, serviços, logradouros públicos municipais e instalações do Município, sendo que os bens mencionados abrangem:",
    "alternativas": {
      "A": "apenas os bens de uso comum do povo, excluídos os demais.",
      "B": "exclusivamente os bens dominiais desafetados.",
      "C": "somente os bens móveis pertencentes diretamente ao patrimônio pessoal do Prefeito.",
      "D": "os de uso comum, os de uso especial e os dominiais."
    },
    "gabarito": "D",
    "comentario": "O parágrafo único do art. 4º esclarece que os bens mencionados no caput (protegidos pela guarda municipal) abrangem os de uso comum, os de uso especial e os dominiais, ou seja, toda a classificação tradicional dos bens públicos.",
    "fundamento": "Art. 4º, caput e parágrafo único, da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 205,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Lei 13.022/14 — Competências específicas",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Dentre as competências específicas das guardas municipais previstas no art. 5º da Lei nº 13.022/2014, está a de encaminhar ao delegado de polícia, diante de flagrante delito, o autor da infração, preservando o local do crime:",
    "alternativas": {
      "A": "quando possível e sempre que necessário, nos termos do inciso XIV do art. 5º.",
      "B": "sendo vedado, em qualquer hipótese, que a guarda municipal atue nessa situação, por faltar-lhe competência constitucional.",
      "C": "apenas mediante autorização prévia e expressa do Secretário Estadual de Segurança Pública.",
      "D": "somente se a infração for de natureza eleitoral."
    },
    "gabarito": "A",
    "comentario": "O art. 5º, XIV, da Lei nº 13.022/2014 estabelece, entre as competências específicas da guarda municipal, encaminhar ao delegado de polícia, diante de flagrante delito, o autor da infração, preservando o local do crime, quando possível e sempre que necessário.",
    "fundamento": "Art. 5º, XIV, da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 206,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Lei 13.022/14 — Criação e subordinação",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 6º da Lei nº 13.022/2014, o Município pode criar sua guarda municipal por lei, sendo que essa guarda fica subordinada:",
    "alternativas": {
      "A": "ao Presidente da Câmara Municipal.",
      "B": "ao chefe do Poder Executivo municipal.",
      "C": "ao Comandante-Geral da Polícia Militar do Estado.",
      "D": "ao Secretário Nacional de Segurança Pública."
    },
    "gabarito": "B",
    "comentario": "O art. 6º, parágrafo único, estabelece expressamente que a guarda municipal é subordinada ao chefe do Poder Executivo municipal (Prefeito).",
    "fundamento": "Art. 6º, caput e parágrafo único, da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 207,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Lei 13.022/14 — Limites de efetivo",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 7º da Lei nº 13.022/2014, as guardas municipais não poderão ter efetivo superior a 0,4% da população em Municípios com até 50.000 habitantes. Para Municípios com mais de 50.000 e menos de 500.000 habitantes, o limite é de:",
    "alternativas": {
      "A": "0,1% (um décimo por cento) da população.",
      "B": "0,2% (dois décimos por cento) da população.",
      "C": "0,3% (três décimos por cento) da população, desde que o efetivo não seja inferior ao limite do primeiro grupo.",
      "D": "0,5% (cinco décimos por cento) da população, sem qualquer limite inferior."
    },
    "gabarito": "C",
    "comentario": "O art. 7º estabelece uma escala regressiva: 0,4% para Municípios com até 50.000 habitantes; 0,3% para Municípios com mais de 50.000 e menos de 500.000 habitantes (desde que o efetivo não seja inferior ao limite anterior); e 0,2% para Municípios com mais de 500.000 habitantes (observada a mesma ressalva).",
    "fundamento": "Art. 7º, incisos I a III, da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 208,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Lei 13.022/14 — Requisitos para investidura",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "São requisitos básicos para investidura em cargo público na guarda municipal, nos termos do art. 10 da Lei nº 13.022/2014, EXCETO:",
    "alternativas": {
      "A": "nacionalidade brasileira e gozo dos direitos políticos.",
      "B": "quitação com as obrigações militares e eleitorais.",
      "C": "nível médio completo de escolaridade e idade mínima de 18 anos.",
      "D": "diploma de nível superior em Direito ou em Ciências Policiais."
    },
    "gabarito": "D",
    "comentario": "O art. 10 exige nacionalidade brasileira, gozo dos direitos políticos, quitação com obrigações militares e eleitorais, nível médio completo de escolaridade, idade mínima de 18 anos, aptidão física/mental/psicológica e idoneidade moral comprovada. Não há exigência de diploma de nível superior específico como requisito básico geral da Lei — o que não impede que o edital municipal, dentro de sua autonomia, exija mais.",
    "fundamento": "Art. 10, incisos I a VII, da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 209,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Lei 13.022/14 — Controle interno e externo",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 13 da Lei nº 13.022/2014, o controle interno das guardas municipais é exercido por corregedoria, obrigatória nas guardas com efetivo superior a:",
    "alternativas": {
      "A": "50 (cinquenta) servidores da guarda, e em todas as que utilizam arma de fogo.",
      "B": "10 (dez) servidores da guarda, em qualquer hipótese.",
      "C": "100 (cem) servidores da guarda, exclusivamente.",
      "D": "não há exigência de efetivo mínimo; a corregedoria é sempre facultativa."
    },
    "gabarito": "A",
    "comentario": "O art. 13, I, exige controle interno por corregedoria nas guardas municipais com efetivo superior a 50 (cinquenta) servidores e em todas as que utilizam arma de fogo, independentemente do efetivo. Já o controle externo, por ouvidoria, é exigido em todas as guardas municipais, qualquer que seja o número de servidores.",
    "fundamento": "Art. 13, I e II, da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 210,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Lei 13.022/14 — Vedações e natureza do regime disciplinar",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 14, parágrafo único, e do art. 19 da Lei nº 13.022/2014, é correto afirmar que:",
    "alternativas": {
      "A": "as guardas municipais devem, obrigatoriamente, adotar regulamento disciplinar idêntico ao do Exército Brasileiro.",
      "B": "as guardas municipais não podem ficar sujeitas a regulamentos disciplinares de natureza militar, nem podem utilizar denominação idêntica à das forças militares quanto a postos, graduações, títulos, uniformes, distintivos e condecorações.",
      "C": "é permitido às guardas municipais utilizar postos e graduações idênticos aos das Polícias Militares, desde que autorizado por lei municipal.",
      "D": "não há qualquer vedação quanto à nomenclatura de postos e graduações das guardas municipais."
    },
    "gabarito": "B",
    "comentario": "A Lei veda expressamente que as guardas municipais fiquem sujeitas a regulamentos disciplinares de natureza militar (art. 14, parágrafo único) e que a estrutura hierárquica da guarda utilize denominação idêntica à das forças militares quanto a postos, graduações, títulos, uniformes, distintivos e condecorações (art. 19), reforçando o caráter civil da instituição.",
    "fundamento": "Art. 14, parágrafo único, e art. 19 da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 211,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Situação-problema — Flagrante em bem municipal",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Durante ronda em uma escola municipal, um guarda civil municipal presencia um indivíduo subtraindo equipamentos de informática do laboratório. Considerando as competências previstas na Lei nº 13.022/2014, a conduta esperada do guarda é:",
    "alternativas": {
      "A": "abster-se de qualquer atuação, por faltar-lhe competência legal para tratar de infrações penais.",
      "B": "aplicar, por conta própria, sanção penal ao autor do fato, sem qualquer encaminhamento posterior.",
      "C": "encaminhar o autor da infração ao delegado de polícia, diante do flagrante delito, preservando o local do crime, quando possível e sempre que necessário.",
      "D": "aguardar a chegada exclusiva da Polícia Civil, sendo vedado ao guarda qualquer contato com o autor do fato."
    },
    "gabarito": "C",
    "comentario": "Trata-se de aplicação direta do art. 5º, XIV, da Lei nº 13.022/2014: encontrando-se em flagrante delito relacionado a bem municipal (competência específica da guarda), cabe ao guarda encaminhar o autor da infração ao delegado de polícia, preservando o local do crime quando possível e sempre que necessário.",
    "fundamento": "Art. 5º, XIV, da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 212,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Situação-problema — Apoio a órgão de segurança pública",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um guarda municipal aciona a Polícia Militar para apoio em ocorrência de maior gravidade que extrapola suas atribuições. Ao chegar a guarnição policial, o guarda municipal deve, nos termos do parágrafo único do art. 5º da Lei nº 13.022/2014:",
    "alternativas": {
      "A": "retirar-se imediatamente do local, sendo vedada qualquer permanência após a chegada do órgão de segurança pública.",
      "B": "assumir o comando da ocorrência, subordinando a atuação policial ao guarda municipal.",
      "C": "exigir que a Polícia Militar se retire, por entender que a competência é exclusiva da guarda municipal.",
      "D": "prestar todo o apoio à continuidade do atendimento, diante do comparecimento do órgão de segurança pública."
    },
    "gabarito": "D",
    "comentario": "O parágrafo único do art. 5º estabelece que, nas hipóteses de atendimento de ocorrências emergenciais (incisos XIII e XIV), diante do comparecimento de órgão de segurança pública do art. 144 da CF/1988, a guarda municipal deverá prestar todo o apoio à continuidade do atendimento, e não se retirar ou assumir o comando da ocorrência.",
    "fundamento": "Art. 5º, parágrafo único, da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 213,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Situação-problema — Cálculo de efetivo máximo",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um Município possui 300.000 (trezentos mil) habitantes e pretende definir o efetivo máximo de sua guarda municipal, já atuante e regularmente constituída. Nos termos do art. 7º da Lei nº 13.022/2014, esse Município deverá observar o limite de:",
    "alternativas": {
      "A": "0,3% da população, por se enquadrar na faixa de mais de 50.000 e menos de 500.000 habitantes.",
      "B": "0,4% da população, por se tratar do limite único aplicável a qualquer Município.",
      "C": "0,2% da população, por se enquadrar na faixa de Municípios com mais de 500.000 habitantes.",
      "D": "não há limite legal aplicável a Municípios com mais de 100.000 habitantes."
    },
    "gabarito": "A",
    "comentario": "Como o Município possui 300.000 habitantes (entre 50.000 e 500.000), aplica-se o limite de 0,3% da população previsto no art. 7º, II, da Lei nº 13.022/2014, desde que esse efetivo não seja inferior ao limite do inciso I.",
    "fundamento": "Art. 7º, II, da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 214,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Situação-problema — Denúncia de conduta irregular",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um cidadão deseja apresentar denúncia sobre a conduta de um guarda municipal durante uma abordagem, sem, contudo, ser ele próprio integrante do quadro da guarda. Nos termos do art. 13 da Lei nº 13.022/2014, essa manifestação deve ser dirigida:",
    "alternativas": {
      "A": "à corregedoria, órgão de controle interno destinado exclusivamente a apurar infrações disciplinares de integrantes do quadro.",
      "B": "à ouvidoria, órgão de controle externo, independente da direção da guarda, destinado a receber, examinar e encaminhar reclamações, sugestões, elogios e denúncias sobre a conduta de dirigentes, integrantes e atividades do órgão.",
      "C": "diretamente ao Ministério Público Estadual, sendo vedada qualquer manifestação perante a própria guarda municipal.",
      "D": "ao Comando da Polícia Militar do Estado, único órgão competente para apurar condutas de guardas municipais."
    },
    "gabarito": "B",
    "comentario": "A ouvidoria é o órgão de controle EXTERNO, independente da direção da guarda, destinado a receber, examinar e encaminhar reclamações, sugestões, elogios e denúncias de qualquer pessoa (não apenas integrantes do quadro) acerca da conduta de dirigentes e integrantes, bem como das atividades do órgão. Já a corregedoria (controle interno) apura infrações disciplinares atribuídas aos integrantes do próprio quadro.",
    "fundamento": "Art. 13, I e II, da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 215,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Situação-problema — Uniforme e símbolos militares",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Determinado Município pretende adotar, para sua guarda civil municipal, postos, graduações e distintivos idênticos aos utilizados pela Polícia Militar estadual. Essa prática:",
    "alternativas": {
      "A": "é plenamente compatível com a Lei nº 13.022/2014, que não trata desse tema.",
      "B": "é obrigatória por força do art. 19 da Lei nº 13.022/2014.",
      "C": "viola o art. 19 da Lei nº 13.022/2014, que veda a utilização de denominação idêntica à das forças militares quanto a postos, graduações, títulos, uniformes, distintivos e condecorações.",
      "D": "depende exclusivamente de autorização do Ministério da Defesa."
    },
    "gabarito": "C",
    "comentario": "O art. 19 veda expressamente que a estrutura hierárquica da guarda municipal utilize denominação idêntica à das forças militares quanto a postos e graduações, títulos, uniformes, distintivos e condecorações, reforçando o caráter civil da instituição.",
    "fundamento": "Art. 19 da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 216,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Situação-problema — Segurança escolar",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Durante patrulhamento nos arredores de uma escola municipal, guardas civis identificam situação de risco envolvendo estudantes na saída das aulas. A atuação preventiva do guarda nesse contexto encontra amparo específico:",
    "alternativas": {
      "A": "no art. 16 da Lei nº 13.022/2014, que trata do porte de arma de fogo.",
      "B": "no art. 18 da Lei nº 13.022/2014, que trata do recolhimento à cela do preso.",
      "C": "em nenhum dispositivo da Lei nº 13.022/2014, tratando-se de competência exclusiva da Polícia Militar.",
      "D": "no art. 5º, XVIII, da Lei nº 13.022/2014, que trata da atuação preventiva na segurança escolar, zelando pelo entorno e participando de ações educativas."
    },
    "gabarito": "D",
    "comentario": "O art. 5º, XVIII, prevê, entre as competências específicas das guardas municipais, atuar mediante ações preventivas na segurança escolar, zelando pelo entorno e participando de ações educativas com o corpo discente e docente das unidades de ensino municipal.",
    "fundamento": "Art. 5º, XVIII, da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 217,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Situação-problema — Prisão antes de condenação definitiva",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um guarda municipal, no exercício de suas funções, vem a ser preso preventivamente, ainda sem condenação definitiva. Nos termos do art. 18 da Lei nº 13.022/2014, esse guarda tem assegurado o direito de:",
    "alternativas": {
      "A": "recolhimento à cela isoladamente dos demais presos, enquanto não houver condenação definitiva.",
      "B": "ser posto em liberdade imediata, independentemente de decisão judicial.",
      "C": "cumprir a prisão em regime domiciliar automático, sem qualquer análise judicial.",
      "D": "ser processado exclusivamente pela Justiça Militar."
    },
    "gabarito": "A",
    "comentario": "O art. 18 assegura ao guarda municipal o recolhimento à cela isoladamente dos demais presos, quando sujeito à prisão antes de condenação definitiva.",
    "fundamento": "Art. 18 da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 218,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Situação-problema — Consórcio entre municípios",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Dois Municípios vizinhos, de pequeno porte, pretendem compartilhar os serviços de suas guardas municipais para otimizar recursos, sem que isso implique a criação de uma única guarda municipal comum. Essa possibilidade encontra amparo:",
    "alternativas": {
      "A": "em nenhum dispositivo legal, sendo vedada qualquer forma de cooperação entre guardas municipais de Municípios distintos.",
      "B": "no art. 8º da Lei nº 13.022/2014, que permite a Municípios limítrofes utilizar, reciprocamente, mediante consórcio público, os serviços da guarda municipal de maneira compartilhada.",
      "C": "apenas mediante fusão administrativa dos dois Municípios em um único ente federativo.",
      "D": "exclusivamente mediante autorização do Governador do Estado."
    },
    "gabarito": "B",
    "comentario": "O art. 8º da Lei nº 13.022/2014 autoriza expressamente que Municípios limítrofes, mediante consórcio público, utilizem reciprocamente os serviços da guarda municipal de maneira compartilhada.",
    "fundamento": "Art. 8º da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 219,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Situação-problema — Suspensão do porte de arma",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um guarda municipal, após avaliação médica, apresenta contraindicação temporária ao uso de arma de fogo. Nos termos do art. 16, parágrafo único, da Lei nº 13.022/2014, essa situação:",
    "alternativas": {
      "A": "não produz qualquer efeito sobre o porte de arma, que é direito absoluto e incondicionado do guarda municipal.",
      "B": "implica a exoneração automática e imediata do guarda municipal do seu cargo.",
      "C": "suspende o direito ao porte de arma de fogo, já que a lei prevê a suspensão em razão de restrição médica, decisão judicial ou justificativa do respectivo dirigente.",
      "D": "só pode ser aplicada mediante decisão do Ministério Público Federal."
    },
    "gabarito": "C",
    "comentario": "O art. 16, parágrafo único, estabelece que o direito ao porte de arma de fogo se suspende em razão de restrição médica, decisão judicial ou justificativa da adoção da medida pelo respectivo dirigente, sendo essa exatamente a hipótese de restrição médica temporária.",
    "fundamento": "Art. 16, parágrafo único, da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 220,
    "disciplina": "Estatuto Geral das Guardas Municipais",
    "assunto": "Situação-problema — Atuação conjunta em evento de grande porte",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Durante evento público de grande porte no Município, com a presença de autoridades, a guarda municipal atua em conjunto com órgãos estaduais de segurança pública na proteção dos dignatários presentes. Essa atuação está expressamente prevista:",
    "alternativas": {
      "A": "no art. 6º da Lei nº 13.022/2014, que trata da criação da guarda municipal por lei.",
      "B": "no art. 9º da Lei nº 13.022/2014, que trata do plano de cargos e salários.",
      "C": "no art. 12 da Lei nº 13.022/2014, que trata da formação e capacitação dos integrantes.",
      "D": "no art. 5º, XVII, da Lei nº 13.022/2014, que trata de auxiliar na segurança de grandes eventos e na proteção de autoridades e dignatários."
    },
    "gabarito": "D",
    "comentario": "O art. 5º, XVII, prevê, entre as competências específicas das guardas municipais, auxiliar na segurança de grandes eventos e na proteção de autoridades e dignatários.",
    "fundamento": "Art. 5º, XVII, da Lei nº 13.022/2014.",
    "oficial": false
  },

  {
    "id": 221,
    "disciplina": "Direito Penal",
    "assunto": "Teoria do crime — dolo e culpa",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 18 do Código Penal, diz-se o crime doloso quando o agente quis o resultado ou assumiu o risco de produzi-lo, e culposo quando o agente deu causa ao resultado por:",
    "alternativas": {
      "A": "imprudência, negligência ou imperícia.",
      "B": "dolo eventual exclusivamente, não havendo outras modalidades de culpa.",
      "C": "caso fortuito ou força maior, sempre que o resultado for objetivamente previsível.",
      "D": "erro de tipo escusável, ainda que evitável."
    },
    "gabarito": "A",
    "comentario": "O art. 18, II, do Código Penal define o crime culposo como aquele em que o agente deu causa ao resultado por imprudência, negligência ou imperícia, distinguindo-se do crime doloso (art. 18, I), em que o agente quis o resultado ou assumiu o risco de produzi-lo.",
    "fundamento": "Art. 18, I e II, do Código Penal.",
    "oficial": false
  },

  {
    "id": 222,
    "disciplina": "Direito Penal",
    "assunto": "Excludentes de ilicitude — legítima defesa",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 25 do Código Penal, entende-se em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem. São requisitos da legítima defesa, EXCETO:",
    "alternativas": {
      "A": "agressão injusta, atual ou iminente.",
      "B": "autorização prévia da autoridade policial para a reação defensiva.",
      "C": "uso moderado dos meios necessários.",
      "D": "proteção de direito próprio ou alheio."
    },
    "gabarito": "B",
    "comentario": "Os requisitos da legítima defesa (art. 25, CP) são: agressão injusta, atual ou iminente; uso moderado dos meios necessários para repeli-la; e proteção de direito próprio ou alheio. Não há exigência de autorização prévia de qualquer autoridade, sendo a legítima defesa, por natureza, reação imediata do próprio agredido ou de terceiro.",
    "fundamento": "Art. 25 do Código Penal.",
    "oficial": false
  },

  {
    "id": 223,
    "disciplina": "Direito Penal",
    "assunto": "Excludentes de ilicitude — estado de necessidade",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Considera-se em estado de necessidade, nos termos do art. 24 do Código Penal, quem pratica o fato para salvar de perigo atual, que não provocou por sua vontade, nem podia de outro modo evitar, direito próprio ou alheio, cujo sacrifício, nas circunstâncias, não era razoável exigir-se. Trata-se de:",
    "alternativas": {
      "A": "causa de aumento de pena.",
      "B": "causa de extinção da punibilidade.",
      "C": "excludente de ilicitude (causa de justificação).",
      "D": "circunstância agravante genérica."
    },
    "gabarito": "C",
    "comentario": "O estado de necessidade, previsto no art. 24 do CP, é uma das excludentes de ilicitude (causas de justificação) elencadas no art. 23 do Código Penal, ao lado da legítima defesa, do estrito cumprimento de dever legal e do exercício regular de direito.",
    "fundamento": "Art. 23, I, e art. 24 do Código Penal.",
    "oficial": false
  },

  {
    "id": 224,
    "disciplina": "Direito Penal",
    "assunto": "Iter criminis — tentativa",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 14, II, do Código Penal, diz-se o crime tentado quando, iniciada a execução, não se consuma por circunstâncias:",
    "alternativas": {
      "A": "dependentes da vontade do agente.",
      "B": "de arrependimento eficaz do próprio agente, em qualquer hipótese.",
      "C": "de desistência voluntária do próprio agente, em qualquer hipótese.",
      "D": "alheias à vontade do agente."
    },
    "gabarito": "D",
    "comentario": "O crime tentado, conforme o art. 14, II, do CP, ocorre quando, iniciada a execução, o crime não se consuma por circunstâncias alheias à vontade do agente — distinguindo-se da desistência voluntária e do arrependimento eficaz (art. 15, CP), em que a não consumação decorre da própria vontade do agente.",
    "fundamento": "Art. 14, II, do Código Penal.",
    "oficial": false
  },

  {
    "id": 225,
    "disciplina": "Direito Penal",
    "assunto": "Crimes contra a Administração Pública — resistência",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Opor-se à execução de ato legal, mediante violência ou ameaça a funcionário competente para executá-lo ou a quem lhe esteja auxiliando, caracteriza o crime de:",
    "alternativas": {
      "A": "resistência.",
      "B": "desobediência.",
      "C": "desacato.",
      "D": "coação no curso do processo."
    },
    "gabarito": "A",
    "comentario": "O crime de resistência (art. 329, CP) caracteriza-se pela oposição, mediante violência ou ameaça, à execução de ato legal, praticada contra funcionário competente para executá-lo ou contra quem esteja lhe auxiliando.",
    "fundamento": "Art. 329 do Código Penal.",
    "oficial": false
  },

  {
    "id": 226,
    "disciplina": "Direito Penal",
    "assunto": "Crimes contra a Administração Pública — desobediência",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Desobedecer a ordem legal de funcionário público caracteriza, em regra, o crime de:",
    "alternativas": {
      "A": "resistência, previsto no art. 329 do Código Penal.",
      "B": "desobediência, previsto no art. 330 do Código Penal.",
      "C": "prevaricação, previsto no art. 319 do Código Penal.",
      "D": "concussão, previsto no art. 316 do Código Penal."
    },
    "gabarito": "B",
    "comentario": "O crime de desobediência (art. 330, CP) consiste em desobedecer a ordem legal de funcionário público, distinguindo-se da resistência (que envolve violência ou ameaça) e de crimes próprios de funcionário público como a prevaricação e a concussão.",
    "fundamento": "Art. 330 do Código Penal.",
    "oficial": false
  },

  {
    "id": 227,
    "disciplina": "Direito Penal",
    "assunto": "Crimes contra a Administração Pública — desacato",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Desacatar funcionário público no exercício da função ou em razão dela caracteriza o crime de:",
    "alternativas": {
      "A": "injúria qualificada, prevista exclusivamente no Código Civil.",
      "B": "abuso de autoridade, previsto exclusivamente na Lei nº 13.869/2019.",
      "C": "desacato, previsto no art. 331 do Código Penal.",
      "D": "falso testemunho, previsto no art. 342 do Código Penal."
    },
    "gabarito": "C",
    "comentario": "O crime de desacato (art. 331, CP) consiste em desacatar funcionário público no exercício da função ou em razão dela, sendo distinto dos demais tipos penais mencionados nas demais alternativas.",
    "fundamento": "Art. 331 do Código Penal.",
    "oficial": false
  },

  {
    "id": 228,
    "disciplina": "Direito Penal",
    "assunto": "Crimes contra o patrimônio — furto e roubo",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A distinção fundamental entre os crimes de furto (art. 155, CP) e de roubo (art. 157, CP) reside no fato de que o roubo:",
    "alternativas": {
      "A": "é praticado exclusivamente contra bens públicos, ao passo que o furto é praticado exclusivamente contra bens privados.",
      "B": "é crime culposo, ao passo que o furto é sempre crime doloso.",
      "C": "só pode ser praticado por funcionário público, ao passo que o furto é crime comum.",
      "D": "envolve o emprego de violência ou grave ameaça a pessoa, ou a utilização de qualquer meio que reduza a capacidade de resistência da vítima, elementos ausentes no furto."
    },
    "gabarito": "D",
    "comentario": "O roubo (art. 157, CP) é a subtração de coisa alheia móvel mediante o emprego de violência ou grave ameaça a pessoa, ou depois de tê-la, por qualquer meio, reduzido à impossibilidade de resistência, elementos que o diferenciam do furto (art. 155, CP), que é a subtração sem esses meios.",
    "fundamento": "Arts. 155 e 157 do Código Penal.",
    "oficial": false
  },

  {
    "id": 229,
    "disciplina": "Direito Penal",
    "assunto": "Prisão em flagrante — modalidades",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 302 do Código de Processo Penal, considera-se em flagrante delito quem: está cometendo a infração penal; acaba de cometê-la; é perseguido, logo após, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser autor da infração; ou é encontrado, logo depois, com instrumentos, armas, objetos ou papéis que façam presumir ser ele autor da infração. Essas quatro hipóteses correspondem, respectivamente, ao flagrante:",
    "alternativas": {
      "A": "próprio, próprio, impróprio (ou quase-flagrante) e presumido (ou ficto).",
      "B": "presumido, presumido, próprio e impróprio.",
      "C": "impróprio, presumido, próprio e próprio.",
      "D": "próprio, presumido, presumido e impróprio."
    },
    "gabarito": "A",
    "comentario": "Os incisos I e II do art. 302 do CPP (estar cometendo ou acabar de cometer) correspondem ao flagrante próprio; o inciso III (perseguição logo após) corresponde ao flagrante impróprio (ou quase-flagrante); e o inciso IV (encontrado logo depois com instrumentos que façam presumir autoria) corresponde ao flagrante presumido (ou ficto).",
    "fundamento": "Art. 302, I a IV, do Código de Processo Penal.",
    "oficial": false
  },

  {
    "id": 230,
    "disciplina": "Direito Penal",
    "assunto": "Excludentes de ilicitude — rol do art. 23 CP",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Não há crime quando o agente pratica o fato em estado de necessidade, em legítima defesa, em estrito cumprimento de dever legal ou em exercício regular de direito. Essas hipóteses constituem, nos termos do art. 23 do Código Penal:",
    "alternativas": {
      "A": "causas de extinção da punibilidade.",
      "B": "causas excludentes de ilicitude (causas de justificação).",
      "C": "causas de aumento de pena em dobro.",
      "D": "circunstâncias que qualificam o crime."
    },
    "gabarito": "B",
    "comentario": "O art. 23 do Código Penal elenca as causas excludentes de ilicitude (também chamadas causas de justificação): estado de necessidade, legítima defesa, estrito cumprimento de dever legal e exercício regular de direito, que afastam a ilicitude da conduta típica.",
    "fundamento": "Art. 23, I a III, do Código Penal.",
    "oficial": false
  },

  {
    "id": 231,
    "disciplina": "Direito Penal",
    "assunto": "Situação-problema — Subtração sem violência",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um guarda municipal presencia um indivíduo subtraindo um objeto do interior de um veículo estacionado, sem uso de violência, grave ameaça ou qualquer meio que reduza a capacidade de resistência de quem quer que seja (o veículo estava vazio). Diante da narrativa, a conduta amolda-se, em tese, ao crime de:",
    "alternativas": {
      "A": "roubo, por se tratar de subtração de bem móvel.",
      "B": "latrocínio, por envolver veículo automotor.",
      "C": "furto, por ausência de violência ou grave ameaça a pessoa na subtração do bem.",
      "D": "extorsão, por envolver bem de terceiro."
    },
    "gabarito": "C",
    "comentario": "Ausente violência, grave ameaça a pessoa ou redução da capacidade de resistência de alguém, a subtração de coisa alheia móvel amolda-se, em tese, ao tipo de furto (art. 155, CP), e não ao de roubo, que pressupõe justamente esses elementos.",
    "fundamento": "Art. 155 do Código Penal (em contraste com o art. 157).",
    "oficial": false
  },

  {
    "id": 232,
    "disciplina": "Direito Penal",
    "assunto": "Situação-problema — Recusa a ordem legal",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Durante fiscalização de posturas municipais, um guarda civil determina, com base em competência legal, que um comerciante desobstrua a calçada. O comerciante, sem uso de violência ou ameaça, simplesmente se recusa a cumprir a determinação. Em tese, essa conduta pode configurar o crime de:",
    "alternativas": {
      "A": "resistência, por envolver oposição a ato legal.",
      "B": "desacato, por atingir a honra do agente público.",
      "C": "coação no curso do processo, por haver processo administrativo em curso.",
      "D": "desobediência, por consistir em mero descumprimento de ordem legal, sem violência ou ameaça."
    },
    "gabarito": "D",
    "comentario": "A simples recusa em cumprir ordem legal, sem o emprego de violência ou ameaça, amolda-se, em tese, ao crime de desobediência (art. 330, CP). O crime de resistência, por sua vez, exige o emprego de violência ou ameaça para se opor à execução do ato.",
    "fundamento": "Art. 330 do Código Penal (em contraste com o art. 329).",
    "oficial": false
  },

  {
    "id": 233,
    "disciplina": "Direito Penal",
    "assunto": "Situação-problema — Contenção de pessoa em surto",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um guarda municipal, durante patrulhamento, depara-se com pessoa em surto psiquiátrico armada com faca, ameaçando terceiros na via pública. Após tentativas de negociação, o guarda emprega força física moderada e estritamente necessária para desarmar o indivíduo e proteger os presentes, sem excessos. Essa conduta, em tese, pode ser amparada pela excludente de:",
    "alternativas": {
      "A": "legítima defesa de terceiro e/ou estrito cumprimento de dever legal, conforme as circunstâncias do caso concreto.",
      "B": "coação moral irresistível, unicamente.",
      "C": "inexigibilidade de conduta diversa, isoladamente considerada, sem qualquer outro fundamento.",
      "D": "nenhuma excludente é aplicável, respondendo o guarda civil objetivamente pelo resultado."
    },
    "gabarito": "A",
    "comentario": "A contenção proporcional e necessária de agressor que representa risco imediato a terceiros, realizada por agente público no exercício de suas funções, pode ser amparada, conforme as circunstâncias, pela legítima defesa de terceiro e/ou pelo estrito cumprimento de dever legal, desde que respeitados os limites da moderação e da necessidade.",
    "fundamento": "Arts. 23 e 25 do Código Penal.",
    "oficial": false
  },

  {
    "id": 234,
    "disciplina": "Direito Penal",
    "assunto": "Situação-problema — Perseguição e captura",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Após presenciar a subtração de um bem, um guarda municipal inicia perseguição ao autor, que foge do local. Minutos depois, ainda em perseguição contínua, o guarda consegue deter o indivíduo em via próxima. Essa situação caracteriza modalidade de flagrante delito denominada:",
    "alternativas": {
      "A": "flagrante próprio, por o indivíduo ainda estar cometendo a infração no momento da abordagem.",
      "B": "flagrante impróprio (ou quase-flagrante), por a perseguição ter ocorrido logo após o fato, em situação que faz presumir a autoria.",
      "C": "flagrante presumido, por o indivíduo ter sido encontrado com instrumentos do crime.",
      "D": "não há flagrante nessa hipótese, por ter havido decurso de tempo entre o fato e a abordagem."
    },
    "gabarito": "B",
    "comentario": "A perseguição iniciada logo após o fato, que resulta na captura do autor em situação que faz presumir a autoria, caracteriza o flagrante impróprio (ou quase-flagrante), previsto no art. 302, III, do CPP.",
    "fundamento": "Art. 302, III, do Código de Processo Penal.",
    "oficial": false
  },

  {
    "id": 235,
    "disciplina": "Direito Penal",
    "assunto": "Situação-problema — Intervenção em briga com risco de lesão grave",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um guarda municipal presencia briga generalizada em via pública, com risco iminente de lesão corporal grave a um dos envolvidos. O guarda intervém fisicamente, com força proporcional e necessária, para separar os agressores e evitar o dano. Essa intervenção, em tese, pode ser justificada pelo:",
    "alternativas": {
      "A": "estado de necessidade putativo, única excludente aplicável a agentes públicos.",
      "B": "erro de proibição inevitável, unicamente.",
      "C": "exercício regular de direito ou estrito cumprimento de dever legal, no exercício das atribuições de proteção da vida e da integridade física das pessoas.",
      "D": "nenhuma excludente é aplicável, respondendo o guarda civil pelo crime de lesão corporal em qualquer hipótese."
    },
    "gabarito": "C",
    "comentario": "A intervenção proporcional de agente público, no exercício de suas atribuições legais de proteção da vida e da integridade física, para conter agressão iminente entre terceiros, pode ser amparada pelo estrito cumprimento de dever legal ou pelo exercício regular de direito, excludentes de ilicitude previstas no art. 23 do Código Penal.",
    "fundamento": "Art. 23, III, do Código Penal.",
    "oficial": false
  },

  {
    "id": 236,
    "disciplina": "Direito Penal",
    "assunto": "Situação-problema — Ordem de afastamento de área interditada",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um guarda municipal determina, com base em interdição legalmente decretada, que um cidadão se afaste de área de risco. O cidadão, sem uso de violência, simplesmente ignora a ordem e permanece no local. Essa conduta pode configurar, em tese, o crime de:",
    "alternativas": {
      "A": "invasão de propriedade, exclusivamente.",
      "B": "dano qualificado, exclusivamente.",
      "C": "nenhum crime, por se tratar de mero ilícito administrativo em qualquer hipótese.",
      "D": "desobediência, por descumprimento de ordem legal sem emprego de violência ou ameaça."
    },
    "gabarito": "D",
    "comentario": "O descumprimento de ordem legal emanada de agente público competente, sem emprego de violência ou ameaça, amolda-se, em tese, ao crime de desobediência (art. 330, CP).",
    "fundamento": "Art. 330 do Código Penal.",
    "oficial": false
  },

  {
    "id": 237,
    "disciplina": "Direito Penal",
    "assunto": "Situação-problema — Tentativa interrompida",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um indivíduo inicia a execução de um furto em repartição pública municipal, mas é surpreendido e impedido de consumar a subtração pela chegada de um guarda civil, que interrompe a ação antes da retirada do bem da esfera de vigilância da vítima. Nessa hipótese, o crime, em tese, configura-se como:",
    "alternativas": {
      "A": "furto tentado, por ter sido iniciada a execução sem a consumação, em razão de circunstância alheia à vontade do agente.",
      "B": "furto consumado, independentemente de o bem ter sido efetivamente subtraído.",
      "C": "crime impossível, por absoluta ineficácia do meio empregado.",
      "D": "ato preparatório impunível, por não ter havido início de execução."
    },
    "gabarito": "A",
    "comentario": "Iniciada a execução do furto e interrompida a consumação por circunstância alheia à vontade do agente (a chegada do guarda civil), configura-se, em tese, o furto na forma tentada, nos termos do art. 14, II, do Código Penal.",
    "fundamento": "Art. 14, II, do Código Penal, c/c art. 155.",
    "oficial": false
  },

  {
    "id": 238,
    "disciplina": "Direito Penal",
    "assunto": "Situação-problema — Menor flagrado em conduta análoga a furto",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um guarda municipal flagra um adolescente de 15 anos subtraindo mercadoria de um estabelecimento comercial. Em razão da idade do envolvido, é correto afirmar que:",
    "alternativas": {
      "A": "o adolescente responderá normalmente por furto, nos termos do Código Penal, como qualquer maior de idade.",
      "B": "o adolescente é penalmente inimputável, sendo sua conduta tratada como ato infracional, sujeita às medidas socioeducativas do Estatuto da Criança e do Adolescente.",
      "C": "o adolescente está isento de qualquer consequência jurídica, por ser absolutamente incapaz.",
      "D": "cabe ao guarda civil aplicar, por conta própria, medida socioeducativa ao adolescente."
    },
    "gabarito": "B",
    "comentario": "Menores de 18 anos são penalmente inimputáveis (art. 27, CP; art. 228, CF/1988), sujeitando-se, no caso de prática de conduta descrita como crime, às normas do Estatuto da Criança e do Adolescente (Lei nº 8.069/1990), que prevê medidas socioeducativas, e não penas do Código Penal.",
    "fundamento": "Art. 27 do Código Penal; art. 228 da Constituição Federal de 1988; ECA (Lei nº 8.069/1990).",
    "oficial": false
  },

  {
    "id": 239,
    "disciplina": "Direito Penal",
    "assunto": "Situação-problema — Acidente de trânsito com vítima",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um guarda municipal é chamado a atender ocorrência de acidente de trânsito em área municipal, no qual o condutor, por falta de atenção ao dirigir, colide com outro veículo, causando lesão corporal na vítima, sem qualquer intenção de causar o resultado. Em tese, essa conduta caracteriza crime na modalidade:",
    "alternativas": {
      "A": "dolosa, por assunção do risco de produzir o resultado.",
      "B": "preterdolosa, exclusivamente, por haver resultado mais grave que o pretendido.",
      "C": "culposa, por o agente ter dado causa ao resultado por imprudência, negligência ou imperícia, sem a intenção de produzi-lo.",
      "D": "nenhuma das anteriores, por se tratar de ilícito exclusivamente civil."
    },
    "gabarito": "C",
    "comentario": "A falta de atenção ao dirigir, sem intenção de produzir o resultado lesivo, caracteriza, em tese, conduta culposa (por imprudência ou negligência), nos termos do art. 18, II, do Código Penal.",
    "fundamento": "Art. 18, II, do Código Penal.",
    "oficial": false
  },

  {
    "id": 240,
    "disciplina": "Direito Penal",
    "assunto": "Situação-problema — Abordagem com objeto ambíguo",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um guarda municipal aborda indivíduo que, ao ser surpreendido, empunha um objeto que, na penumbra do local, aparenta ser uma arma de fogo, mas que, após a contenção, revela-se um simulacro (arma de brinquedo). A avaliação da conduta do guarda, que reagiu proporcionalmente ao risco aparente no momento da ação, deve considerar:",
    "alternativas": {
      "A": "exclusivamente o resultado final constatado, desprezando-se qualquer análise sobre a percepção do agente no momento do fato.",
      "B": "a responsabilização automática e objetiva do guarda, independentemente das circunstâncias do caso concreto.",
      "C": "a impossibilidade absoluta de qualquer excludente, por não ter havido perigo real e efetivo.",
      "D": "a chamada legítima defesa putativa (ou descriminante putativa), em que se analisa a razoabilidade da percepção do agente diante das circunstâncias concretas, ainda que, posteriormente, se constate a inexistência real do perigo."
    },
    "gabarito": "D",
    "comentario": "Quando o agente, por erro plenamente justificado pelas circunstâncias, supõe situação de fato que, se existisse, tornaria a ação legítima, aplica-se a descriminante putativa (art. 20, § 1º, do Código Penal), avaliando-se a razoabilidade da percepção do agente no momento da ação.",
    "fundamento": "Art. 20, § 1º, do Código Penal (descriminantes putativas).",
    "oficial": false
  },

  {
    "id": 241,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "CF/88 — Vedação à tortura",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 5º, III, da Constituição Federal de 1988, é correto afirmar que:",
    "alternativas": {
      "A": "ninguém será submetido a tortura nem a tratamento desumano ou degradante.",
      "B": "a tortura é admitida em situações excepcionais de urgência policial.",
      "C": "o tratamento desumano é vedado apenas em relação a presos condenados definitivamente.",
      "D": "a vedação à tortura aplica-se exclusivamente aos agentes federais de segurança pública."
    },
    "gabarito": "A",
    "comentario": "O art. 5º, III, da CF/1988 estabelece, de forma absoluta e sem exceções, que ninguém será submetido a tortura nem a tratamento desumano ou degradante, garantia fundamental aplicável a qualquer pessoa, em qualquer circunstância.",
    "fundamento": "Art. 5º, III, da Constituição Federal de 1988.",
    "oficial": false
  },

  {
    "id": 242,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "Declaração Universal dos Direitos Humanos",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A Declaração Universal dos Direitos Humanos, adotada pela Assembleia Geral das Nações Unidas em 1948, estabelece, em seu artigo 1º, que:",
    "alternativas": {
      "A": "apenas os cidadãos de países signatários possuem direitos humanos garantidos.",
      "B": "todos os seres humanos nascem livres e iguais em dignidade e direitos.",
      "C": "os direitos humanos são concedidos exclusivamente pelo Estado, a critério deste.",
      "D": "a dignidade humana é um conceito exclusivamente religioso, sem aplicação jurídica."
    },
    "gabarito": "B",
    "comentario": "O artigo 1º da Declaração Universal dos Direitos Humanos (1948) proclama que todos os seres humanos nascem livres e iguais em dignidade e direitos, sendo dotados de razão e consciência.",
    "fundamento": "Art. 1º da Declaração Universal dos Direitos Humanos (ONU, 1948).",
    "oficial": false
  },

  {
    "id": 243,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "Princípios da ONU sobre uso da força e armas de fogo",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo os Princípios Básicos das Nações Unidas sobre o Uso da Força e Armas de Fogo pelos Funcionários Responsáveis pela Aplicação da Lei (1990), o uso de arma de fogo contra pessoas somente é admitido em casos de:",
    "alternativas": {
      "A": "qualquer resistência verbal a ordem legal, independentemente de risco concreto.",
      "B": "fuga de suspeito de contravenção penal de menor potencial ofensivo, em qualquer hipótese.",
      "C": "risco iminente de morte ou lesão grave, quando outros meios menos extremos se mostrarem insuficientes.",
      "D": "necessidade de dispersar aglomerações pacíficas em espaços públicos."
    },
    "gabarito": "C",
    "comentario": "Os Princípios Básicos da ONU (1990) estabelecem que o uso de arma de fogo é medida extrema, somente justificável diante de risco iminente de morte ou lesão grave, quando medidas menos extremas se mostrarem insuficientes.",
    "fundamento": "Princípios Básicos das Nações Unidas sobre o Uso da Força e Armas de Fogo (1990), Princípio 9.",
    "oficial": false
  },

  {
    "id": 244,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "Uso progressivo da força — conceito",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O princípio do uso progressivo (ou diferenciado) da força, aplicável a agentes de segurança pública, incluindo guardas municipais, pressupõe que a intensidade da força empregada deve:",
    "alternativas": {
      "A": "ser sempre a máxima disponível, independentemente do nível de resistência ou ameaça apresentado.",
      "B": "ser decidida exclusivamente após autorização judicial prévia, em cada caso concreto.",
      "C": "ser aplicada de forma idêntica em todas as situações, independentemente do contexto.",
      "D": "corresponder, de forma gradual e proporcional, ao nível de resistência ou ameaça efetivamente apresentado pela pessoa abordada, partindo da presença e verbalização até, em último caso, a força letal."
    },
    "gabarito": "D",
    "comentario": "O uso progressivo da força pressupõe uma escala gradual e proporcional de intervenção — presença, verbalização, controle de contato, uso de instrumentos de menor potencial ofensivo e, apenas em último caso, força letal —, correspondente ao nível de resistência ou ameaça efetivamente apresentado.",
    "fundamento": "Art. 3º, V, da Lei nº 13.022/2014; Princípios Básicos da ONU sobre Uso da Força (1990).",
    "oficial": false
  },

  {
    "id": 245,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "Lei 13.060/2014 — Princípios do uso de instrumentos de menor potencial ofensivo",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A Lei nº 13.060/2014, que disciplina o uso dos instrumentos de menor potencial ofensivo pelos agentes de segurança pública, estabelece que esse uso deverá obedecer aos princípios de:",
    "alternativas": {
      "A": "legalidade, necessidade, razoabilidade e proporcionalidade.",
      "B": "discricionariedade absoluta e sigilo, sem qualquer parâmetro normativo.",
      "C": "hierarquia militar e disciplina, exclusivamente.",
      "D": "conveniência política do gestor público, sem qualquer vinculação normativa."
    },
    "gabarito": "A",
    "comentario": "O art. 1º da Lei nº 13.060/2014 estabelece que o uso de instrumentos de menor potencial ofensivo pelos agentes de segurança pública, em todo o território nacional, obedecerá aos princípios de legalidade, necessidade, razoabilidade e proporcionalidade.",
    "fundamento": "Art. 1º da Lei nº 13.060/2014.",
    "oficial": false
  },

  {
    "id": 246,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "Lei 13.060/2014 — Vedação de arma de fogo contra pessoa em fuga desarmada",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 4º da Lei nº 13.060/2014, é vedado o uso de arma de fogo contra pessoa em fuga que esteja:",
    "alternativas": {
      "A": "portando qualquer objeto, ainda que não configure risco algum.",
      "B": "desarmada ou que, mesmo na posse de algum tipo de arma, não represente risco imediato de morte ou lesão aos agentes de segurança pública ou a terceiros.",
      "C": "acompanhada de qualquer pessoa, independentemente das circunstâncias.",
      "D": "em local público, ainda que armada e representando risco imediato."
    },
    "gabarito": "B",
    "comentario": "O art. 4º da Lei nº 13.060/2014 veda o uso de arma de fogo contra pessoa em fuga que esteja desarmada, ou que, mesmo portando algum tipo de arma, não represente risco imediato de morte ou lesão grave aos agentes de segurança pública ou a terceiros.",
    "fundamento": "Art. 4º da Lei nº 13.060/2014.",
    "oficial": false
  },

  {
    "id": 247,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "Diretrizes nacionais sobre uso da força",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A Portaria Interministerial nº 4.226/2010 (Ministério da Justiça e Secretaria de Direitos Humanos) estabelece diretrizes nacionais sobre o uso da força pelos agentes de segurança pública, tendo como princípios norteadores, entre outros:",
    "alternativas": {
      "A": "hierarquia militar absoluta e obediência cega a ordens superiores.",
      "B": "discricionariedade irrestrita do agente, sem qualquer controle posterior.",
      "C": "legalidade, necessidade, proporcionalidade, moderação e conveniência.",
      "D": "uso automático da força letal em qualquer abordagem de risco."
    },
    "gabarito": "C",
    "comentario": "A Portaria Interministerial nº 4.226/2010 estabelece, entre os princípios norteadores do uso da força por agentes de segurança pública, a legalidade, a necessidade, a proporcionalidade, a moderação e a conveniência.",
    "fundamento": "Portaria Interministerial MJ/SDH nº 4.226/2010.",
    "oficial": false
  },

  {
    "id": 248,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "Conceito de instrumento de menor potencial ofensivo",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 2º da Lei nº 13.060/2014, considera-se instrumento de menor potencial ofensivo:",
    "alternativas": {
      "A": "qualquer arma de fogo de calibre reduzido, independentemente de sua letalidade.",
      "B": "exclusivamente algemas e demais instrumentos de contenção mecânica.",
      "C": "qualquer equipamento de proteção individual do próprio agente de segurança pública.",
      "D": "todo aquele fabricado com a finalidade de, quando empregado, diminuir a probabilidade de lesões letais à integridade física de pessoas, em comparação com as armas de fogo de uso convencional."
    },
    "gabarito": "D",
    "comentario": "O art. 2º da Lei nº 13.060/2014 define instrumento de menor potencial ofensivo como todo aquele fabricado com a finalidade de, quando empregado, diminuir a probabilidade de lesões letais à integridade física de pessoas, em comparação com as armas de fogo de uso convencional.",
    "fundamento": "Art. 2º da Lei nº 13.060/2014.",
    "oficial": false
  },

  {
    "id": 249,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "Devido processo legal e ampla defesa",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 5º, LIV e LV, da Constituição Federal de 1988, é correto afirmar que:",
    "alternativas": {
      "A": "ninguém será privado da liberdade ou de seus bens sem o devido processo legal, e aos litigantes e acusados em geral são assegurados o contraditório e a ampla defesa, com os meios e recursos a ela inerentes.",
      "B": "o devido processo legal aplica-se exclusivamente a processos judiciais criminais, não alcançando processos administrativos.",
      "C": "a ampla defesa pode ser dispensada em situações de flagrante delito, a critério da autoridade que efetuar a prisão.",
      "D": "o contraditório e a ampla defesa são garantias exclusivas de acusados em processos perante o Tribunal do Júri."
    },
    "gabarito": "A",
    "comentario": "O art. 5º, LIV, consagra o devido processo legal, e o inciso LV assegura aos litigantes, em processo judicial ou administrativo, e aos acusados em geral, o contraditório e a ampla defesa, com os meios e recursos a ela inerentes.",
    "fundamento": "Art. 5º, LIV e LV, da Constituição Federal de 1988.",
    "oficial": false
  },

  {
    "id": 250,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "Princípio da proporcionalidade no uso da força",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O princípio da proporcionalidade, aplicável ao uso da força por agentes de segurança pública, incluindo guardas municipais, exige que:",
    "alternativas": {
      "A": "a intensidade da força empregada seja sempre a máxima disponível, independentemente da gravidade da ameaça.",
      "B": "haja equilíbrio entre o nível de força empregado e a gravidade da ameaça ou resistência efetivamente enfrentada, evitando-se excessos desnecessários.",
      "C": "a força seja empregada apenas mediante autorização judicial prévia e específica para cada ocorrência.",
      "D": "o agente público esteja isento de qualquer responsabilização pelo uso da força, independentemente das circunstâncias."
    },
    "gabarito": "B",
    "comentario": "O princípio da proporcionalidade exige equilíbrio entre a intensidade da força empregada e a gravidade da ameaça ou resistência efetivamente enfrentada, vedando-se o uso de força excessiva ou desnecessária em relação ao risco concreto apresentado.",
    "fundamento": "Portaria Interministerial MJ/SDH nº 4.226/2010; Princípios Básicos da ONU sobre Uso da Força (1990).",
    "oficial": false
  },

  {
    "id": 251,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "Situação-problema — Pessoa desarmada em fuga",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Durante abordagem, um indivíduo suspeito empreende fuga a pé, sem portar qualquer arma e sem apresentar risco imediato a terceiros ou aos agentes. Nos termos da Lei nº 13.060/2014, o guarda municipal, nessa situação:",
    "alternativas": {
      "A": "está autorizado a efetuar disparo de arma de fogo contra o indivíduo, para impedir a fuga a qualquer custo.",
      "B": "deve, obrigatoriamente, utilizar arma de fogo, sob pena de responsabilidade funcional por omissão.",
      "C": "está impedido de utilizar arma de fogo contra o indivíduo, por se tratar de pessoa desarmada que não representa risco imediato de morte ou lesão grave.",
      "D": "pode agir livremente, sem qualquer parâmetro legal aplicável a essa hipótese."
    },
    "gabarito": "C",
    "comentario": "Nos termos do art. 4º da Lei nº 13.060/2014, é vedado o uso de arma de fogo contra pessoa em fuga que esteja desarmada ou que não represente risco imediato de morte ou lesão grave, devendo o agente buscar outros meios de contenção proporcionais à situação.",
    "fundamento": "Art. 4º da Lei nº 13.060/2014.",
    "oficial": false
  },

  {
    "id": 252,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "Situação-problema — Resistência passiva",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Durante abordagem, uma pessoa não agride nem ameaça o guarda municipal, mas se recusa, de forma passiva, a se deslocar conforme solicitado (por exemplo, sentando-se no chão). Nos termos do princípio do uso progressivo da força, a resposta proporcional a essa resistência passiva é:",
    "alternativas": {
      "A": "o uso imediato de arma de fogo, por se tratar de qualquer forma de resistência.",
      "B": "o uso de instrumento de menor potencial ofensivo de máxima intensidade, independentemente do contexto.",
      "C": "nenhuma ação, devendo o guarda abandonar a abordagem em qualquer hipótese de resistência.",
      "D": "técnicas de controle de contato e imobilização de menor intensidade, adequadas ao baixo nível de resistência apresentado, evitando o uso de força excessiva."
    },
    "gabarito": "D",
    "comentario": "Diante de resistência passiva (sem agressividade ou ameaça), o uso progressivo da força recomenda técnicas de controle de contato e imobilização de menor intensidade, proporcionais ao baixo nível de resistência apresentado.",
    "fundamento": "Princípio do uso progressivo da força; Portaria Interministerial MJ/SDH nº 4.226/2010.",
    "oficial": false
  },

  {
    "id": 253,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "Situação-problema — Prioridade de instrumento de menor potencial ofensivo",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um guarda municipal precisa conter pessoa agressiva que ameaça terceiros, dispondo, entre seus equipamentos, de instrumento de menor potencial ofensivo (por exemplo, dispositivo de condução elétrica) e de arma de fogo. Nos termos dos princípios de uso progressivo e proporcional da força, o guarda deve:",
    "alternativas": {
      "A": "priorizar, sempre que a situação concreta permitir e for suficiente para neutralizar o risco, o uso do instrumento de menor potencial ofensivo, reservando a arma de fogo para situações de risco iminente de morte ou lesão grave.",
      "B": "utilizar diretamente a arma de fogo, por ser o instrumento mais eficaz para conter qualquer agressividade.",
      "C": "utilizar ambos os instrumentos simultaneamente, independentemente do nível de resistência.",
      "D": "abster-se de qualquer intervenção, aguardando a chegada exclusiva de outra corporação."
    },
    "gabarito": "A",
    "comentario": "O princípio do uso progressivo e proporcional da força recomenda que, sempre que a situação concreta permitir e o instrumento de menor potencial ofensivo for suficiente para neutralizar o risco, este seja priorizado, reservando-se a arma de fogo para hipóteses de risco iminente de morte ou lesão grave.",
    "fundamento": "Lei nº 13.060/2014; Princípios Básicos da ONU sobre Uso da Força (1990).",
    "oficial": false
  },

  {
    "id": 254,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "Situação-problema — Assistência médica após uso da força",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Após o emprego de força física necessária para conter um suspeito, que resulta em ferimento leve neste, o guarda municipal deve, nos termos dos princípios internacionais e nacionais sobre uso da força:",
    "alternativas": {
      "A": "ignorar o ferimento, por não ser de sua responsabilidade prestar qualquer assistência.",
      "B": "assegurar que seja prestada assistência médica ao ferido, o mais rápido possível, informando familiares ou pessoas próximas, quando pertinente.",
      "C": "aguardar decisão judicial para autorizar qualquer forma de assistência médica.",
      "D": "prestar assistência somente se o ferido for capaz de solicitá-la expressamente."
    },
    "gabarito": "B",
    "comentario": "Os Princípios Básicos da ONU sobre Uso da Força (1990) estabelecem o dever de assegurar assistência médica a qualquer pessoa ferida, o mais rápido possível, após o emprego da força, além de informar familiares ou pessoas próximas, quando pertinente e possível.",
    "fundamento": "Princípios Básicos da ONU sobre Uso da Força e Armas de Fogo (1990), Princípio 5.",
    "oficial": false
  },

  {
    "id": 255,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "Situação-problema — Uso desproporcional por colega",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um guarda municipal presencia um colega de corporação empregando força manifestamente desproporcional contra pessoa já contida e sem oferecer qualquer resistência. Diante dessa situação, a conduta esperada, à luz dos princípios de direitos humanos aplicáveis à atuação das guardas municipais, é:",
    "alternativas": {
      "A": "ignorar o ocorrido, por se tratar de assunto interno entre colegas de farda.",
      "B": "reproduzir a mesma conduta, por solidariedade profissional automática.",
      "C": "intervir, se possível, para cessar o excesso, e relatar o ocorrido aos canais de controle competentes, como a corregedoria ou a ouvidoria da guarda municipal.",
      "D": "aguardar denúncia espontânea da própria vítima, sem qualquer iniciativa do guarda que presenciou o fato."
    },
    "gabarito": "C",
    "comentario": "O compromisso com os direitos humanos fundamentais, princípio expresso no art. 3º, I, da Lei nº 13.022/2014, impõe ao guarda municipal o dever de intervir, quando possível, para cessar excessos, e de relatar condutas irregulares aos órgãos de controle competentes.",
    "fundamento": "Art. 3º, I, da Lei nº 13.022/2014; princípios de direitos humanos aplicados à segurança pública.",
    "oficial": false
  },

  {
    "id": 256,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "Situação-problema — Manifestação pública com tensão",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Durante manifestação pública pacífica, um pequeno grupo de participantes torna-se hostil, ameaçando a ordem pública. Nos termos dos princípios de moderação e gradualidade no uso da força, a atuação da guarda municipal deve priorizar:",
    "alternativas": {
      "A": "o uso imediato de força letal contra todos os presentes, para dispersar rapidamente a manifestação.",
      "B": "a proibição preventiva de qualquer manifestação pública, independentemente de autorização legal.",
      "C": "a retirada total da área, abandonando qualquer tentativa de controle da situação.",
      "D": "medidas graduais e proporcionais, como diálogo, isolamento dos indivíduos hostis e uso comedido da força, preservando o direito de reunião pacífica dos demais manifestantes."
    },
    "gabarito": "D",
    "comentario": "Os princípios de moderação, necessidade e proporcionalidade recomendam medidas graduais, preservando-se o direito constitucional de reunião pacífica dos demais manifestantes (art. 5º, XVI, CF/1988).",
    "fundamento": "Art. 5º, XVI, da CF/1988; princípios de moderação e proporcionalidade no uso da força.",
    "oficial": false
  },

  {
    "id": 257,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "Situação-problema — Necessidades básicas de pessoa detida",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Uma pessoa contida por guardas municipais, aguardando a chegada da autoridade policial competente, solicita acesso a água e a instalações sanitárias. Nos termos do respeito à dignidade da pessoa humana, a conduta correta é:",
    "alternativas": {
      "A": "atender, dentro do razoável e das condições de segurança disponíveis, as necessidades básicas da pessoa contida, em respeito à sua dignidade.",
      "B": "negar o pedido, independentemente das circunstâncias, até a chegada da autoridade policial.",
      "C": "condicionar o atendimento à confissão prévia da prática do ato investigado.",
      "D": "transferir a responsabilidade integralmente à família da pessoa contida, sem qualquer providência imediata."
    },
    "gabarito": "A",
    "comentario": "O respeito à dignidade da pessoa humana (art. 1º, III, CF/1988) impõe que necessidades básicas de qualquer pessoa sob custódia ou contenção, ainda que temporária, sejam atendidas dentro do razoável e das condições de segurança disponíveis.",
    "fundamento": "Art. 1º, III, da CF/1988; princípios de direitos humanos aplicados à atuação de agentes de segurança.",
    "oficial": false
  },

  {
    "id": 258,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "Situação-problema — Abordagem de adolescente",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um guarda municipal aborda adolescente suspeito da prática de ato infracional. Nos termos do Estatuto da Criança e do Adolescente e dos princípios de direitos humanos aplicáveis, essa abordagem deve observar:",
    "alternativas": {
      "A": "tratamento idêntico ao dispensado a adultos, sem qualquer distinção processual ou de garantias.",
      "B": "tratamento diferenciado, com preservação da integridade física e psicológica do adolescente, encaminhamento às autoridades competentes e respeito às garantias processuais próprias do sistema socioeducativo.",
      "C": "dispensa de qualquer garantia, por não se aplicar o devido processo legal a adolescentes.",
      "D": "aplicação imediata de medida socioeducativa pelo próprio guarda municipal, no local da abordagem."
    },
    "gabarito": "B",
    "comentario": "O ECA (Lei nº 8.069/1990) assegura ao adolescente suspeito de ato infracional tratamento diferenciado, com preservação de sua integridade física e psicológica, encaminhamento às autoridades competentes e observância das garantias processuais próprias do sistema de justiça juvenil.",
    "fundamento": "Estatuto da Criança e do Adolescente (Lei nº 8.069/1990); princípios de direitos humanos aplicados à infância e juventude.",
    "oficial": false
  },

  {
    "id": 259,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "Situação-problema — Uso de algemas",
    "banca": "IDECAN",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um guarda municipal efetua a condução de pessoa presa em flagrante que não oferece qualquer resistência, nem há fundado receio de fuga ou de perigo à integridade física própria, do agente ou de terceiros. Nos termos da Súmula Vinculante nº 11 do Supremo Tribunal Federal, o uso de algemas nessa hipótese:",
    "alternativas": {
      "A": "é sempre obrigatório, independentemente das circunstâncias do caso concreto.",
      "B": "é vedado em qualquer hipótese, mesmo diante de resistência ativa e risco concreto.",
      "C": "só se justifica em casos de resistência e de fundado receio de fuga ou de perigo à integridade física própria ou alheia, por parte do preso ou de terceiros, devendo a excepcionalidade ser justificada por escrito, sob pena de responsabilidade e de nulidade da prisão ou do ato processual.",
      "D": "depende exclusivamente do critério pessoal e discricionário do agente, sem qualquer necessidade de justificativa."
    },
    "gabarito": "C",
    "comentario": "A Súmula Vinculante nº 11 do STF estabelece que o uso de algemas só se justifica em caso de resistência e de fundado receio de fuga ou de perigo à integridade física própria ou alheia, justificada a excepcionalidade por escrito, sob pena de responsabilidade e de nulidade da prisão ou do ato processual a que se refere.",
    "fundamento": "Súmula Vinculante nº 11 do Supremo Tribunal Federal.",
    "oficial": false
  },

  {
    "id": 260,
    "disciplina": "Direitos Humanos e Uso da Força",
    "assunto": "Situação-problema — Revista pessoal e respeito à dignidade",
    "banca": "IDECAN",
    "ano": 2023,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Ao realizar revista pessoal em indivíduo abordado por suspeita fundada, o guarda municipal deve conduzir o procedimento de forma a:",
    "alternativas": {
      "A": "expor deliberadamente a pessoa revistada à humilhação pública, como forma de intimidação preventiva.",
      "B": "realizar a revista de forma idêntica, independentemente do gênero da pessoa revistada ou de qualquer outra circunstância.",
      "C": "dispensar qualquer fundamentação ou motivo para a revista, que pode ser realizada de forma aleatória e sem critério.",
      "D": "preservar, na medida do possível, a privacidade e a dignidade da pessoa revistada, limitando-se a revista ao estritamente necessário para a verificação de risco, sem excessos ou exposição desnecessária."
    },
    "gabarito": "D",
    "comentario": "O respeito à dignidade da pessoa humana impõe que a revista pessoal, ainda que necessária por suspeita fundada, seja conduzida de forma a preservar, na medida do possível, a privacidade e a dignidade da pessoa revistada, limitando-se ao estritamente necessário para a verificação do risco.",
    "fundamento": "Art. 1º, III, da CF/1988; princípios de direitos humanos aplicados à abordagem policial.",
    "oficial": false
  },

  {
    "id": 261,
    "disciplina": "Execução Penal",
    "assunto": "LEP - Objetivo da execucao penal",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 1o da Lei de Execucao Penal, a execucao penal tem por objetivo:",
    "alternativas": {
      "A": "efetivar as disposicoes de sentenca ou decisao criminal e proporcionar condicoes para a harmonica integracao social do condenado e do internado.",
      "B": "unicamente punir o condenado, sem qualquer preocupacao com sua reintegracao social.",
      "C": "substituir a atuacao do Poder Judiciario na fixacao da pena.",
      "D": "promover exclusivamente a assistencia material ao preso, excluidas as demais formas de assistencia.",
      "E": "regulamentar apenas o regime fechado de cumprimento de pena."
    },
    "gabarito": "A",
    "comentario": "O art. 1o da LEP estabelece que a execucao penal tem por objetivo efetivar as disposicoes de sentenca ou decisao criminal e proporcionar condicoes para a harmonica integracao social do condenado e do internado.",
    "fundamento": "Art. 1o da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 262,
    "disciplina": "Execução Penal",
    "assunto": "LEP - Direitos do condenado",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 3o da Lei de Execucao Penal, ao condenado e ao internado serao assegurados:",
    "alternativas": {
      "A": "apenas os direitos expressamente previstos na sentenca condenatoria.",
      "B": "todos os direitos nao atingidos pela sentenca ou pela lei.",
      "C": "nenhum direito, ate o cumprimento integral da pena.",
      "D": "somente o direito de peticao ao juiz da execucao, excluidos os demais.",
      "E": "apenas os direitos politicos, suspensos os demais direitos civis."
    },
    "gabarito": "B",
    "comentario": "O art. 3o da LEP assegura ao condenado e ao internado todos os direitos nao atingidos pela sentenca ou pela lei, preservando sua dignidade e cidadania no que nao for incompativel com a execucao da pena.",
    "fundamento": "Art. 3o da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 263,
    "disciplina": "Execução Penal",
    "assunto": "LEP - Assistencia ao preso",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A Lei de Execucao Penal preve, como formas de assistencia ao preso e ao internado, a assistencia material, a saude, juridica, educacional, social e:",
    "alternativas": {
      "A": "religiosa, sendo esta de carater compulsorio para todos os presos.",
      "B": "exclusivamente psicologica, nao havendo previsao de assistencia religiosa.",
      "C": "religiosa, sendo facultada ao preso a participacao em atividade religiosa e o auxilio dos representantes das diversas confissoes religiosas.",
      "D": "financeira direta, mediante pagamento mensal ao preso pelo Estado.",
      "E": "apenas a assistencia juridica, sendo as demais meramente facultativas ao Estado."
    },
    "gabarito": "C",
    "comentario": "A LEP preve, no art. 11, as assistencias material, a saude, juridica, educacional, social e religiosa; esta ultima, conforme o art. 24, e facultada ao preso a participacao em atividade religiosa, sem qualquer carater compulsorio.",
    "fundamento": "Arts. 11 e 24 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 264,
    "disciplina": "Execução Penal",
    "assunto": "LEP - Trabalho do preso",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sobre o trabalho do condenado disciplinado na Lei de Execucao Penal, e correto afirmar que:",
    "alternativas": {
      "A": "e sempre facultativo, independentemente do regime de cumprimento de pena.",
      "B": "deve ser remunerado em valor nunca inferior a um salario minimo integral.",
      "C": "e vedado ao condenado em regime semiaberto, permitido apenas no regime aberto.",
      "D": "constitui dever social e condicao de dignidade humana, com finalidade educativa e produtiva, sendo obrigatorio aos condenados em regime fechado e semiaberto, e facultativo ao regime aberto.",
      "E": "dispensa qualquer forma de remuneracao, por se tratar de contrapartida da pena imposta."
    },
    "gabarito": "D",
    "comentario": "O art. 28 da LEP estabelece que o trabalho do condenado constitui dever social e condicao de dignidade humana, com finalidade educativa e produtiva; o art. 31 torna o trabalho obrigatorio aos condenados em regime fechado e semiaberto, sendo facultativo ao regime aberto e ao preso provisorio. A remuneracao, pelo art. 29, nao pode ser inferior a 3/4 do salario minimo.",
    "fundamento": "Arts. 28, 29 e 31 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 265,
    "disciplina": "Execução Penal",
    "assunto": "LEP - Jornada de trabalho",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 33 da Lei de Execucao Penal, a jornada normal de trabalho do preso nao sera inferior a 6 (seis) nem superior a:",
    "alternativas": {
      "A": "10 (dez) horas.",
      "B": "12 (doze) horas.",
      "C": "9 (nove) horas, sem qualquer dia de descanso obrigatorio.",
      "D": "7 (sete) horas, vedado o trabalho aos sabados.",
      "E": "8 (oito) horas, com descanso nos domingos e feriados."
    },
    "gabarito": "E",
    "comentario": "O art. 33 da LEP fixa a jornada normal de trabalho em nao menos de 6 e nao mais de 8 horas, com descanso nos domingos e feriados, podendo ser atribuido horario especial para presos designados para tarefas de conservacao e manutencao.",
    "fundamento": "Art. 33 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 266,
    "disciplina": "Execução Penal",
    "assunto": "LEP - Faltas disciplinares graves",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Constitui falta grave do condenado a pena privativa de liberdade, nos termos do art. 50 da Lei de Execucao Penal:",
    "alternativas": {
      "A": "possuir, indevidamente, instrumento capaz de ofender a integridade fisica de outrem.",
      "B": "recusar-se, injustificadamente, a participar de atividade educacional facultativa.",
      "C": "manifestar-se criticamente sobre as condicoes do estabelecimento penal por escrito.",
      "D": "solicitar assistencia juridica ao Defensor Publico.",
      "E": "requerer progressao de regime antes do prazo legal, por erro de calculo."
    },
    "gabarito": "A",
    "comentario": "O art. 50, III, da LEP tipifica como falta grave possuir, indevidamente, instrumento capaz de ofender a integridade fisica de outrem, ao lado de outras condutas como fugir, incitar ou participar de movimento para subverter a ordem, e ter em sua posse aparelho telefonico ou de comunicacao (art. 50, VII).",
    "fundamento": "Art. 50 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 267,
    "disciplina": "Execução Penal",
    "assunto": "LEP - Regime Disciplinar Diferenciado (RDD)",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O Regime Disciplinar Diferenciado (RDD), previsto no art. 52 da Lei de Execucao Penal, pode ser aplicado ao preso provisorio ou condenado, nacional ou estrangeiro, que pratique fato previsto como crime doloso constituindo subversao da ordem ou disciplina interna, ou que apresente alto risco para a ordem e a seguranca, com duracao maxima de:",
    "alternativas": {
      "A": "30 dias, sem possibilidade de renovacao.",
      "B": "ate 2 anos, sem prejuizo de repeticao da sancao por nova falta grave da mesma especie.",
      "C": "6 meses, prorrogaveis por igual periodo em caso de reincidencia.",
      "D": "1 ano, vedada qualquer prorrogacao.",
      "E": "5 anos, correspondendo ao tempo maximo de pena a ser cumprida."
    },
    "gabarito": "B",
    "comentario": "Apos a alteracao promovida pela Lei no 13.964/2019 (Pacote Anticrime), o RDD pode ser aplicado por prazo maximo de ate 2 anos, sem prejuizo de repeticao da sancao por nova falta grave de mesma especie, alem de outras hipoteses especificas de prazo previstas no dispositivo.",
    "fundamento": "Art. 52 da Lei no 7.210/1984, com redacao dada pela Lei no 13.964/2019.",
    "oficial": false
  },

  {
    "id": 268,
    "disciplina": "Execução Penal",
    "assunto": "LEP - Estabelecimentos penais",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a Lei de Execucao Penal, o estabelecimento penal destinado ao cumprimento de pena em regime fechado, no qual o condenado fica sujeito a trabalho no periodo diurno e isolamento durante o repouso noturno, denomina-se:",
    "alternativas": {
      "A": "casa do albergado.",
      "B": "colonia agricola, industrial ou similar.",
      "C": "penitenciaria.",
      "D": "cadeia publica.",
      "E": "centro de observacao criminologica."
    },
    "gabarito": "C",
    "comentario": "A penitenciaria e o estabelecimento destinado ao condenado a pena privativa de liberdade em regime fechado, distinta da colonia agricola/industrial (regime semiaberto), da casa do albergado (regime aberto) e da cadeia publica (presos provisorios).",
    "fundamento": "Arts. 87 a 90 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 269,
    "disciplina": "Execução Penal",
    "assunto": "LEP - Progressao de regime",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A progressao de regime de cumprimento de pena, disciplinada pelo art. 112 da Lei de Execucao Penal, depende do cumprimento de fracao minima da pena, que varia conforme a natureza do crime e a reincidencia do condenado, e:",
    "alternativas": {
      "A": "de exame criminologico obrigatorio em qualquer hipotese, independentemente do regime de origem.",
      "B": "unicamente do decurso do tempo, sendo irrelevante o comportamento do apenado.",
      "C": "de pagamento integral e previo da pena de multa cumulativamente imposta, sob pena de nulidade da progressao.",
      "D": "de ostentar o condenado boa conduta carceraria, comprovada pelo diretor do estabelecimento.",
      "E": "de deliberacao do Conselho Penitenciario, dispensada qualquer manifestacao do juiz da execucao."
    },
    "gabarito": "D",
    "comentario": "Alem do cumprimento da fracao minima da pena (variavel conforme a natureza do crime e a reincidencia), o art. 112 exige que o condenado ostente boa conduta carceraria, comprovada pelo diretor do estabelecimento, respeitadas as normas que vedam a progressao per saltum.",
    "fundamento": "Art. 112 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 270,
    "disciplina": "Execução Penal",
    "assunto": "LEP - Regressao de regime",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 118 da Lei de Execucao Penal, o condenado fica sujeito a regressao de regime quando pratica fato definido como crime doloso ou falta grave, ou ainda quando:",
    "alternativas": {
      "A": "solicita, por escrito, transferencia para estabelecimento mais proximo de sua familia.",
      "B": "requer, sem fundamento, a concessao de saida temporaria.",
      "C": "e vitima de agressao por outro detento, sem qualquer participacao no fato.",
      "D": "atinge a idade de 70 anos durante o cumprimento da pena.",
      "E": "e condenado, por crime anterior, cuja pena, somada ao restante da pena em execucao, torne incabivel o regime atual."
    },
    "gabarito": "E",
    "comentario": "O art. 118 da LEP preve a regressao de regime tambem na hipotese de sobrevir condenacao, por crime anterior, cuja pena, somada ao restante da pena em execucao, torne incabivel o regime atualmente cumprido pelo condenado.",
    "fundamento": "Art. 118 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 271,
    "disciplina": "Execução Penal",
    "assunto": "LEP - Saida temporaria",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A saida temporaria, concedida pelo juiz da execucao sem vigilancia direta aos condenados que cumprem pena em regime semiaberto, exige, entre outros requisitos previstos no art. 123 da Lei de Execucao Penal:",
    "alternativas": {
      "A": "comportamento adequado, cumprimento minimo de 1/6 da pena se o condenado for primario e 1/4 se reincidente, e compatibilidade do beneficio com os objetivos da pena.",
      "B": "cumprimento integral da pena privativa de liberdade, restando apenas a pena de multa.",
      "C": "autorizacao previa do Ministerio Publico, dispensada qualquer decisao judicial.",
      "D": "exclusivamente o pagamento da reparacao do dano causado a vitima.",
      "E": "ser o condenado primario e ter cumprido, no minimo, metade da pena, independentemente da natureza do crime."
    },
    "gabarito": "A",
    "comentario": "O art. 123 da LEP exige, para a concessao da saida temporaria, comportamento adequado do condenado, cumprimento minimo de 1/6 da pena se primario e 1/4 se reincidente, e compatibilidade do beneficio com os objetivos da pena.",
    "fundamento": "Art. 123 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 272,
    "disciplina": "Execução Penal",
    "assunto": "LEP - Remicao pelo trabalho e pelo estudo",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sobre a remicao da pena disciplinada pela Lei de Execucao Penal, e correto afirmar que o condenado que cumpre pena em regime fechado ou semiaberto podera remir parte do tempo de execucao da pena:",
    "alternativas": {
      "A": "somente pelo trabalho, na proporcao de 1 dia de pena a cada 2 dias trabalhados.",
      "B": "pelo trabalho, na proporcao de 1 dia de pena a cada 3 dias trabalhados, e pelo estudo, na proporcao de 1 dia de pena a cada 12 horas de frequencia escolar, divididas em, no minimo, 3 dias.",
      "C": "apenas pelo estudo, sendo vedada a remicao pelo trabalho no regime fechado.",
      "D": "pelo trabalho, na proporcao de 1 dia de pena a cada dia integral trabalhado, sem qualquer limite.",
      "E": "unicamente mediante pagamento de valor pecuniario equivalente aos dias que se pretende remir."
    },
    "gabarito": "B",
    "comentario": "O art. 126 da LEP admite a remicao pelo trabalho (1 dia de pena a cada 3 dias trabalhados) e pelo estudo (1 dia de pena a cada 12 horas de frequencia escolar relativa a atividade de ensino fundamental, medio, superior, profissionalizante ou de requalificacao profissional, divididas em, no minimo, 3 dias).",
    "fundamento": "Art. 126 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 273,
    "disciplina": "Execução Penal",
    "assunto": "LEP - Livramento condicional",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O livramento condicional, disciplinado pela Lei de Execucao Penal em conjunto com o Codigo Penal, constitui:",
    "alternativas": {
      "A": "extincao antecipada e definitiva da pena, sem qualquer condicao a ser observada pelo liberado.",
      "B": "medida aplicavel exclusivamente aos condenados por crimes hediondos.",
      "C": "beneficio que antecipa a liberdade do condenado, mediante condicoes a serem observadas durante o restante da pena, podendo ser revogado em caso de descumprimento.",
      "D": "direito automatico e incondicionado apos o cumprimento de 1/3 da pena, independentemente de qualquer requisito.",
      "E": "sancao disciplinar imposta pelo diretor do estabelecimento penal."
    },
    "gabarito": "C",
    "comentario": "O livramento condicional antecipa a liberdade do condenado que preenche os requisitos legais, mediante condicoes a serem observadas durante o periodo de prova (restante da pena), podendo ser revogado em caso de descumprimento das condicoes ou pratica de novo crime.",
    "fundamento": "Arts. 131 a 146 da Lei no 7.210/1984; art. 83 do Codigo Penal.",
    "oficial": false
  },

  {
    "id": 274,
    "disciplina": "Execução Penal",
    "assunto": "LEP - Monitoracao eletronica",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A monitoracao eletronica, disciplinada nos arts. 146-B a 146-D da Lei de Execucao Penal, pode ser determinada pelo juiz, entre outras hipoteses, quando:",
    "alternativas": {
      "A": "o condenado cumpre pena em regime fechado, sem qualquer beneficio de saida.",
      "B": "houver mero pedido do condenado, independentemente de previsao legal ou decisao judicial fundamentada.",
      "C": "o condenado for beneficiado com o indulto, como condicao obrigatoria e universal.",
      "D": "aplicada pena restritiva de direitos que estabeleca a fiscalizacao por meio de monitoracao eletronica.",
      "E": "a pena de multa for convertida em prestacao de servicos comunitarios."
    },
    "gabarito": "D",
    "comentario": "A LEP autoriza a monitoracao eletronica, entre outras hipoteses, quando aplicada pena restritiva de direitos que estabeleca a fiscalizacao por meio de monitoracao eletronica, bem como na saida temporaria em regime semiaberto e na prisao domiciliar, conforme os arts. 146-B a 146-D.",
    "fundamento": "Arts. 146-B a 146-D da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 275,
    "disciplina": "Execução Penal",
    "assunto": "LEP - Indulto e comutacao",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O indulto e a comutacao de penas, previstos nos arts. 187 e 188 da Lei de Execucao Penal, sao concedidos por decreto do:",
    "alternativas": {
      "A": "Presidente do Tribunal de Justica competente, sem qualquer intervencao do Executivo.",
      "B": "juiz da execucao penal, mediante requerimento do condenado.",
      "C": "Procurador-Geral de Justica, mediante manifestacao do Conselho Nacional do Ministerio Publico.",
      "D": "Congresso Nacional, mediante decreto legislativo aprovado por maioria absoluta.",
      "E": "Presidente da Republica, podendo estabelecer condicoes para a concessao, ouvidos o Conselho Penitenciario e a autoridade administrativa."
    },
    "gabarito": "E",
    "comentario": "O indulto e a comutacao de penas competem ao Presidente da Republica, que os concede por decreto, podendo estabelecer condicoes para a concessao, ouvidos o Conselho Penitenciario e a autoridade administrativa.",
    "fundamento": "Arts. 187 e 188 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 276,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 8.072/90 - Rol de crimes hediondos",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sao considerados hediondos, nos termos do art. 1o da Lei no 8.072/1990, entre outros, os crimes de:",
    "alternativas": {
      "A": "latrocinio, extorsao mediante sequestro e estupro, ainda que na forma tentada.",
      "B": "furto simples e estelionato em sua forma basica.",
      "C": "ameaca e injuria, quando praticadas contra agente publico em razao da funcao.",
      "D": "receptacao culposa e apropriacao indebita simples.",
      "E": "todos os crimes previstos no Codigo de Transito Brasileiro, independentemente da pena cominada."
    },
    "gabarito": "A",
    "comentario": "O art. 1o da Lei no 8.072/1990 lista, entre outros, o latrocinio, a extorsao mediante sequestro e o estupro como crimes hediondos, sendo a lei expressa ao considerar hediondos tais crimes tambem na forma tentada.",
    "fundamento": "Art. 1o da Lei no 8.072/1990.",
    "oficial": false
  },

  {
    "id": 277,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 8.072/90 - Regime de cumprimento de pena",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Em relacao ao regime inicial de cumprimento de pena nos crimes hediondos e equiparados, e correto afirmar que:",
    "alternativas": {
      "A": "e sempre o regime aberto, independentemente da pena aplicada.",
      "B": "a progressao de regime observa percentuais mais rigorosos do que os crimes comuns, conforme o art. 112 da LEP.",
      "C": "e vedada qualquer forma de progressao de regime, devendo o condenado cumprir a pena integralmente em regime fechado.",
      "D": "depende exclusivamente da vontade do juiz, sem qualquer parametro legal objetivo.",
      "E": "e definido pelo Conselho Penitenciario, e nao pelo juiz da execucao."
    },
    "gabarito": "B",
    "comentario": "Apos as alteracoes legislativas (Lei no 13.964/2019), os crimes hediondos e equiparados observam percentuais mais rigorosos de cumprimento de pena para fins de progressao de regime, conforme as fracoes estabelecidas no art. 112 da LEP, diferenciando-se dos crimes comuns.",
    "fundamento": "Lei no 8.072/1990; art. 112 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 278,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 8.072/90 - Livramento condicional",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos crimes hediondos e equiparados, o livramento condicional, quando cabivel, exige o cumprimento de fracao da pena:",
    "alternativas": {
      "A": "igual a dos crimes comuns, sem qualquer distincao.",
      "B": "inferior a exigida nos crimes comuns, como estimulo a ressocializacao antecipada.",
      "C": "superior a exigida nos crimes comuns, sendo vedado, ainda, ao reincidente especifico em crimes dessa natureza.",
      "D": "dispensavel, bastando o decurso de metade da pena, independentemente de reincidencia.",
      "E": "irrelevante, pois o livramento condicional e vedado em qualquer hipotese de crime hediondo."
    },
    "gabarito": "C",
    "comentario": "A Lei no 8.072/1990 exige, para o livramento condicional nos crimes hediondos e equiparados, fracao de cumprimento de pena superior a exigida nos crimes comuns, sendo vedado o beneficio ao reincidente especifico em crimes dessa natureza.",
    "fundamento": "Art. 5o da Lei no 8.072/1990, alterando o art. 83 do Codigo Penal.",
    "oficial": false
  },

  {
    "id": 279,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 8.072/90 - Fianca e liberdade provisoria",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a Lei no 8.072/1990, os crimes hediondos e equiparados sao insuscetiveis de:",
    "alternativas": {
      "A": "recurso de apelacao, em qualquer hipotese.",
      "B": "defesa tecnica por advogado constituido, admitida apenas a defensoria publica.",
      "C": "citacao pessoal do acusado, admitida apenas a citacao editalicia.",
      "D": "anistia, graca e indulto, alem de fianca, nos termos constitucionais e legais.",
      "E": "producao de provas periciais, restrita a prova testemunhal."
    },
    "gabarito": "D",
    "comentario": "A Lei no 8.072/1990, em consonancia com o art. 5o, XLIII, da CF/1988, estabelece que os crimes hediondos e equiparados (tortura, trafico de drogas e terrorismo) sao insuscetiveis de anistia, graca e indulto, alem de fianca, nos termos da lei.",
    "fundamento": "Art. 2o da Lei no 8.072/1990; art. 5o, XLIII, da Constituicao Federal de 1988.",
    "oficial": false
  },

  {
    "id": 280,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 11.343/06 - Distincao usuario x traficante",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Para a diferenciacao entre o usuario de drogas (art. 28) e o traficante (art. 33) na Lei no 11.343/2006, o juiz devera atender, entre outros criterios expressamente previstos:",
    "alternativas": {
      "A": "exclusivamente a quantidade de droga apreendida, sendo irrelevantes as demais circunstancias.",
      "B": "unicamente a confissao do agente perante a autoridade policial.",
      "C": "somente o valor de mercado estimado da droga apreendida.",
      "D": "exclusivamente o local da apreensao, sendo irrelevante a quantidade.",
      "E": "a natureza e a quantidade da substancia apreendida, o local e as condicoes em que se desenvolveu a acao, as circunstancias sociais e pessoais, bem como a conduta e os antecedentes do agente."
    },
    "gabarito": "E",
    "comentario": "O art. 28, §2o, da Lei no 11.343/2006 estabelece que, para determinar se a droga se destinava a consumo pessoal, o juiz atendera a natureza e a quantidade da substancia, ao local e as condicoes em que se desenvolveu a acao, as circunstancias sociais e pessoais, bem como a conduta e aos antecedentes do agente.",
    "fundamento": "Art. 28, §2o, da Lei no 11.343/2006.",
    "oficial": false
  },

  {
    "id": 281,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 11.343/06 - Penas do usuario",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Ao usuario que adquire, guarda, tem em deposito, transporta ou traz consigo drogas para consumo pessoal, a Lei no 11.343/2006 comina, entre outras penas:",
    "alternativas": {
      "A": "advertencia sobre os efeitos das drogas, prestacao de servicos a comunidade e medida educativa de comparecimento a programa ou curso educativo, sem pena privativa de liberdade.",
      "B": "reclusao de 1 a 3 anos e multa.",
      "C": "detencao de 6 meses a 2 anos e multa.",
      "D": "reclusao de 5 a 15 anos, em regime inicialmente fechado.",
      "E": "prisao simples de 15 a 30 dias, convertida automaticamente em multa."
    },
    "gabarito": "A",
    "comentario": "O art. 28 da Lei no 11.343/2006 nao comina pena privativa de liberdade ao usuario, prevendo advertencia sobre os efeitos das drogas, prestacao de servicos a comunidade e medida educativa de comparecimento a programa ou curso educativo.",
    "fundamento": "Art. 28 da Lei no 11.343/2006.",
    "oficial": false
  },

  {
    "id": 282,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 11.343/06 - Trafico privilegiado",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A denominada causa de diminuicao de pena prevista no art. 33, §4o, da Lei no 11.343/2006 (conhecida como trafico privilegiado) aplica-se ao agente que seja:",
    "alternativas": {
      "A": "reincidente especifico em crimes de trafico de drogas, integrante de organizacao criminosa.",
      "B": "primario, de bons antecedentes, que nao se dedique as atividades criminosas nem integre organizacao criminosa.",
      "C": "servidor publico no exercicio de funcao de fiscalizacao aduaneira.",
      "D": "menor de idade, independentemente de qualquer outro requisito.",
      "E": "estrangeiro, ainda que reincidente em crimes de trafico."
    },
    "gabarito": "B",
    "comentario": "O art. 33, §4o, permite a reducao da pena de 1/6 a 2/3 quando o agente for primario, de bons antecedentes, nao se dedique as atividades criminosas nem integre organizacao criminosa, afastando-se, nessas hipoteses, do rigor do trafico comum.",
    "fundamento": "Art. 33, §4o, da Lei no 11.343/2006.",
    "oficial": false
  },

  {
    "id": 283,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 11.343/06 - Natureza hedionda",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O trafico ilicito de entorpecentes e considerado, para fins constitucionais e legais, crime:",
    "alternativas": {
      "A": "comum, sujeito ao mesmo tratamento dos crimes patrimoniais em geral.",
      "B": "de menor potencial ofensivo, processado perante o Juizado Especial Criminal.",
      "C": "equiparado a hediondo, insuscetivel de anistia, graca, indulto e fianca.",
      "D": "de acao penal privada, dependendo de queixa-crime do ofendido.",
      "E": "afiancavel em qualquer hipotese, mediante pagamento previo."
    },
    "gabarito": "C",
    "comentario": "O art. 5o, XLIII, da CF/1988 equipara o trafico ilicito de entorpecentes aos crimes hediondos, sendo insuscetivel de anistia, graca, indulto e fianca, conforme reforcado pela Lei no 8.072/1990 e pela propria Lei no 11.343/2006.",
    "fundamento": "Art. 5o, XLIII, da Constituicao Federal de 1988; Lei no 11.343/2006.",
    "oficial": false
  },

  {
    "id": 284,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 12.850/13 - Conceito de organizacao criminosa",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 1o, §1o, da Lei no 12.850/2013, considera-se organizacao criminosa a associacao de 4 (quatro) ou mais pessoas estruturalmente ordenada e caracterizada pela divisao de tarefas, ainda que informalmente, com o objetivo de obter, direta ou indiretamente, vantagem de qualquer natureza, mediante a pratica de infracoes penais cujas penas maximas sejam:",
    "alternativas": {
      "A": "superiores a 1 (um) ano, independentemente de qualquer outro requisito.",
      "B": "iguais ou inferiores a 2 (dois) anos, restrito a crimes patrimoniais.",
      "C": "exclusivamente crimes hediondos, vedada a aplicacao a outras infracoes.",
      "D": "superiores a 4 (quatro) anos, ou que sejam de carater transnacional.",
      "E": "irrelevantes, bastando a mera reuniao ocasional de duas pessoas."
    },
    "gabarito": "D",
    "comentario": "O art. 1o, §1o, da Lei no 12.850/2013 define organizacao criminosa como a associacao de 4 ou mais pessoas estruturalmente ordenada e caracterizada pela divisao de tarefas, com o objetivo de obter vantagem de qualquer natureza mediante a pratica de infracoes penais cujas penas maximas sejam superiores a 4 anos, ou que sejam de carater transnacional.",
    "fundamento": "Art. 1o, §1o, da Lei no 12.850/2013.",
    "oficial": false
  },

  {
    "id": 285,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 12.850/13 - Colaboracao premiada",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A colaboracao premiada, meio de obtencao de prova disciplinado pela Lei no 12.850/2013, pode resultar, entre outros beneficios ao colaborador que cumprir os requisitos legais:",
    "alternativas": {
      "A": "na aplicacao automatica de pena de morte substitutiva, o que e vedado no ordenamento brasileiro.",
      "B": "na extincao automatica de todos os processos em curso contra o colaborador, independentemente da eficacia da colaboracao.",
      "C": "na vedacao absoluta de qualquer beneficio, servindo a colaboracao apenas para fins investigativos.",
      "D": "na obrigatoriedade de o colaborador permanecer preso durante toda a instrucao processual.",
      "E": "no perdao judicial, na reducao de pena em ate 2/3 ou na substituicao da pena privativa de liberdade por restritiva de direitos."
    },
    "gabarito": "E",
    "comentario": "A colaboracao premiada, quando efetiva e voltada a resultados como a identificacao dos coautores, a revelacao da estrutura hierarquica ou a recuperacao de produto do crime, pode resultar no perdao judicial, na reducao de pena em ate 2/3 ou na substituicao da pena privativa de liberdade por restritiva de direitos.",
    "fundamento": "Art. 4o da Lei no 12.850/2013.",
    "oficial": false
  },

  {
    "id": 286,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 12.850/13 - Meios de obtencao de prova",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sao meios de obtencao de prova previstos na Lei no 12.850/2013 para a investigacao de organizacoes criminosas, entre outros:",
    "alternativas": {
      "A": "acao controlada e infiltracao de agentes de policia, mediante circunstanciada autorizacao judicial.",
      "B": "confissao extrajudicial obtida mediante coacao, admitida excepcionalmente.",
      "C": "presuncao absoluta de culpa dos investigados, dispensada qualquer instrucao probatoria.",
      "D": "tortura psicologica autorizada para obtencao de informacoes relevantes.",
      "E": "delacao anonima como unico meio de prova admissivel."
    },
    "gabarito": "A",
    "comentario": "A Lei no 12.850/2013 preve, como meios de obtencao de prova, entre outros, a colaboracao premiada, a captacao ambiental de sinais, a acao controlada e a infiltracao de agentes de policia, esta ultima mediante circunstanciada autorizacao judicial, resguardada a prevencao.",
    "fundamento": "Art. 3o da Lei no 12.850/2013.",
    "oficial": false
  },

  {
    "id": 287,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 12.850/13 - Acao controlada",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A acao controlada, disciplinada pela Lei no 12.850/2013, consiste em:",
    "alternativas": {
      "A": "prisao preventiva automatica de todos os integrantes de organizacao criminosa identificados.",
      "B": "retardar a intervencao policial ou administrativa relativa a acao praticada por organizacao criminosa, mantendo-a sob observacao e acompanhamento, para que a medida legal se concretize no momento mais eficaz para a formacao de provas.",
      "C": "interceptacao telefonica sem qualquer autorizacao judicial previa.",
      "D": "medida exclusivamente civel, sem qualquer repercussao penal.",
      "E": "confisco imediato de todos os bens dos investigados, independentemente de decisao judicial."
    },
    "gabarito": "B",
    "comentario": "A acao controlada consiste em retardar a intervencao policial ou administrativa relativa a acao praticada por organizacao criminosa, mantendo-a sob observacao e acompanhamento para que a medida legal se concretize no momento mais eficaz a formacao de provas e obtencao de informacoes.",
    "fundamento": "Art. 8o da Lei no 12.850/2013.",
    "oficial": false
  },

  {
    "id": 288,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 9.455/97 - Conceito de tortura",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Configura crime de tortura, nos termos do art. 1o da Lei no 9.455/1997, constranger alguem com emprego de violencia ou grave ameaca, causando-lhe sofrimento fisico ou mental, com o fim de:",
    "alternativas": {
      "A": "aplicar pena disciplinar leve prevista em regulamento interno.",
      "B": "realizar procedimento medico de urgencia sem consentimento do paciente.",
      "C": "obter informacao, declaracao ou confissao da vitima ou de terceira pessoa.",
      "D": "conter tumulto em via publica sem qualquer excesso.",
      "E": "cumprir mandado de busca e apreensao expedido por autoridade judicial."
    },
    "gabarito": "C",
    "comentario": "O art. 1o, I, \"a\", da Lei no 9.455/1997 tipifica como tortura constranger alguem com emprego de violencia ou grave ameaca, causando-lhe sofrimento fisico ou mental, com o fim de obter informacao, declaracao ou confissao da vitima ou de terceira pessoa.",
    "fundamento": "Art. 1o, I, da Lei no 9.455/1997.",
    "oficial": false
  },

  {
    "id": 289,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 9.455/97 - Tortura por omissao",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Constitui, tambem, crime de tortura na forma da Lei no 9.455/1997 a conduta de agente publico que:",
    "alternativas": {
      "A": "denuncia formalmente a pratica de tortura por colega de trabalho as autoridades competentes.",
      "B": "aplica sancao disciplinar previamente cominada em regulamento, apos processo administrativo regular.",
      "C": "presta socorro imediato a vitima de acidente de transito.",
      "D": "se omite em face de tais condutas de tortura, quando tinha o dever de evita-las ou apura-las, incorrendo na pena a este tipo correspondente diminuida de 1 a 2 tercos.",
      "E": "recusa-se a cumprir ordem manifestamente ilegal de superior hierarquico."
    },
    "gabarito": "D",
    "comentario": "O art. 1o, §2o, da Lei no 9.455/1997 pune aquele que se omite em face dessas condutas, quando tinha o dever de evita-las ou apura-las, incorrendo na pena correspondente ao crime de tortura, diminuida de 1 a 2 tercos, alcancando tipicamente agentes publicos omissos.",
    "fundamento": "Art. 1o, §2o, da Lei no 9.455/1997.",
    "oficial": false
  },

  {
    "id": 290,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 9.455/97 - Efeitos da condenacao",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A condenacao pelo crime de tortura, nos termos do art. 1o, §5o, da Lei no 9.455/1997, acarreta ao agente publico, como efeito da condenacao:",
    "alternativas": {
      "A": "nenhum efeito alem da pena privativa de liberdade e multa.",
      "B": "a mera advertencia disciplinar, sem qualquer repercussao no vinculo funcional.",
      "C": "a suspensao do cargo por 30 dias, independentemente da pena aplicada.",
      "D": "a transferencia compulsoria para outro orgao da Administracao, sem perda do cargo.",
      "E": "a perda do cargo, funcao ou emprego publico e a interdicao para seu exercicio pelo dobro do prazo da pena aplicada."
    },
    "gabarito": "E",
    "comentario": "O §5o do art. 1o da Lei no 9.455/1997 estabelece que a condenacao acarretara a perda do cargo, funcao ou emprego publico e a interdicao para seu exercicio pelo dobro do prazo da pena aplicada.",
    "fundamento": "Art. 1o, §5o, da Lei no 9.455/1997.",
    "oficial": false
  },

  {
    "id": 291,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 13.869/19 - Sujeito ativo",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sao sujeitos ativos dos crimes previstos na Lei no 13.869/2019 (Lei de Abuso de Autoridade):",
    "alternativas": {
      "A": "qualquer agente publico, servidor ou nao, que, no exercicio de suas funcoes ou a pretexto de exerce-las, abuse do poder que lhe tenha sido atribuido.",
      "B": "apenas os membros do Poder Judiciario, excluidas as demais autoridades publicas.",
      "C": "exclusivamente os integrantes das forcas policiais, civis e militares.",
      "D": "somente particulares em colaboracao com a Administracao Publica, excluidos os servidores efetivos.",
      "E": "apenas as autoridades com foro por prerrogativa de funcao."
    },
    "gabarito": "A",
    "comentario": "O art. 2o da Lei no 13.869/2019 estabelece que os sujeitos ativos dos crimes de abuso de autoridade sao quaisquer agentes publicos, servidores ou nao, que, no exercicio de suas funcoes ou a pretexto de exerce-las, abusem do poder que lhes tenha sido atribuido.",
    "fundamento": "Art. 2o da Lei no 13.869/2019.",
    "oficial": false
  },

  {
    "id": 292,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 13.869/19 - Elemento subjetivo",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Para a caracterizacao dos crimes previstos na Lei no 13.869/2019, exige-se, nos termos do art. 1o, §1o, a presenca de:",
    "alternativas": {
      "A": "mera culpa, sendo suficiente a negligencia do agente publico no exercicio da funcao.",
      "B": "dolo especifico, consistente na finalidade de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfacao pessoal.",
      "C": "responsabilidade objetiva do agente publico, independentemente de dolo ou culpa.",
      "D": "presuncao absoluta de abuso sempre que houver reclamacao do administrado, independentemente de prova.",
      "E": "interpretacao extensiva em desfavor do agente, admitida a analogia in malam partem."
    },
    "gabarito": "B",
    "comentario": "O art. 1o, §1o, exige, para a configuracao dos crimes de abuso de autoridade, a presenca do dolo especifico, consistente na especifica finalidade de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfacao pessoal, sendo vedada a interpretacao extensiva e a analogia in malam partem (art. 1o, §2o).",
    "fundamento": "Art. 1o, §§1o e 2o, da Lei no 13.869/2019.",
    "oficial": false
  },

  {
    "id": 293,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 13.869/19 - Exemplo de conduta tipificada",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Constitui exemplo de conduta tipificada como abuso de autoridade pela Lei no 13.869/2019 a de decretar, o agente publico, a condução coercitiva de testemunha ou investigado:",
    "alternativas": {
      "A": "apos regular intimacao e injustificado nao comparecimento da testemunha ou investigado.",
      "B": "mediante decisao judicial fundamentada, apos esgotadas as tentativas de intimacao.",
      "C": "sem previa intimacao de comparecimento ao juizo ou orgao competente.",
      "D": "em cumprimento a mandado expedido por autoridade competente, apos o transito em julgado.",
      "E": "por solicitacao expressa e voluntaria do proprio investigado."
    },
    "gabarito": "C",
    "comentario": "O art. 10 da Lei no 13.869/2019 tipifica como abuso de autoridade decretar a condução coercitiva de testemunha ou investigado manifestamente descabida ou sem previa intimacao de comparecimento ao juizo ou orgao competente.",
    "fundamento": "Art. 10 da Lei no 13.869/2019.",
    "oficial": false
  },

  {
    "id": 294,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 10.826/03 - Porte de arma por agente de seguranca",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos da Lei no 10.826/2003 (Estatuto do Desarmamento), os integrantes das policias, incluida a policia penal, e demais orgaos de seguranca publica elencados na Constituicao Federal, no exercicio de suas funcoes ou fora dele, quando previsto em lei especifica, possuem direito ao:",
    "alternativas": {
      "A": "registro obrigatorio de arma de fogo perante a Policia Civil, dispensada qualquer outra formalidade.",
      "B": "porte de arma de fogo apenas mediante autorizacao anual renovavel pelo Ministerio da Justica, independentemente da funcao exercida.",
      "C": "porte de arma exclusivamente durante o expediente, vedado o porte funcional fora do horario de trabalho.",
      "D": "porte de arma de fogo, sujeito as normas do respectivo orgao a que pertencem.",
      "E": "uso irrestrito de qualquer tipo de arma, inclusive as de uso restrito das Forcas Armadas, sem qualquer limitacao."
    },
    "gabarito": "D",
    "comentario": "O Estatuto do Desarmamento assegura aos integrantes das policias e demais orgaos de seguranca publica constitucionalmente previstos, entre eles a policia penal, o porte de arma de fogo no exercicio de suas funcoes, sujeito as normas do respectivo orgao a que pertencem.",
    "fundamento": "Art. 6o da Lei no 10.826/2003.",
    "oficial": false
  },

  {
    "id": 295,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 10.826/03 - Crimes do Estatuto do Desarmamento",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sao condutas tipificadas como crime pela Lei no 10.826/2003, entre outras:",
    "alternativas": {
      "A": "apenas a posse de arma de fogo com numeracao de serie visivel e registrada.",
      "B": "a mera aquisicao de municao mediante nota fiscal regular.",
      "C": "o transporte de arma de fogo desmuniciada, acondicionada em compartimento fechado, com registro e guia de trafego, para fins de manutencao.",
      "D": "a posse de arma de fogo com registro vencido ha menos de 24 horas, presumindo-se sua regularidade.",
      "E": "posse irregular de arma de fogo de uso permitido, o porte ilegal de arma de fogo de uso permitido e o comercio ilegal de arma de fogo."
    },
    "gabarito": "E",
    "comentario": "O Estatuto do Desarmamento tipifica, entre outras condutas, a posse irregular de arma de fogo de uso permitido (art. 12), o porte ilegal de arma de fogo de uso permitido (art. 14) e o comercio ilegal de arma de fogo (art. 17), com penas que se agravam conforme a arma seja de uso restrito ou proibido.",
    "fundamento": "Arts. 12, 14 e 17 da Lei no 10.826/2003.",
    "oficial": false
  },

  {
    "id": 296,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Teoria do crime - tipicidade, ilicitude e culpabilidade",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a teoria tripartite do crime, adotada predominantemente pela doutrina brasileira, o crime e composto pelos seguintes elementos:",
    "alternativas": {
      "A": "tipicidade, antijuridicidade (ilicitude) e culpabilidade.",
      "B": "apenas tipicidade e punibilidade, sendo a culpabilidade mero pressuposto da pena.",
      "C": "dolo, culpa e preterdolo, exclusivamente.",
      "D": "imputabilidade, potencial consciencia da ilicitude e exigibilidade de conduta diversa, apenas.",
      "E": "materialidade, autoria e nexo causal, exclusivamente."
    },
    "gabarito": "A",
    "comentario": "A teoria tripartite, majoritaria na doutrina brasileira, define o crime como fato tipico, antijuridico (ilicito) e culpavel, sendo a punibilidade consequencia, e nao elemento constitutivo, do crime.",
    "fundamento": "Doutrina de Direito Penal - teoria geral do crime.",
    "oficial": false
  },

  {
    "id": 297,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Concurso de pessoas",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "No concurso de pessoas disciplinado pelo art. 29 do Codigo Penal, aquele que, de qualquer modo, concorre para o crime incide nas penas a este cominadas, na medida de sua culpabilidade, admitindo-se a reducao de pena para o participe:",
    "alternativas": {
      "A": "que for autor intelectual do crime, sempre reduzida a metade.",
      "B": "cuja participacao for de menor importancia, podendo a pena ser diminuida de 1/6 a 1/3.",
      "C": "que praticar o nucleo do tipo penal, ainda que de forma relevante.",
      "D": "coautor que planejou toda a execucao do crime, com pena sempre reduzida.",
      "E": "que integrar organizacao criminosa, sem qualquer excecao."
    },
    "gabarito": "B",
    "comentario": "O art. 29, §1o, do Codigo Penal permite a reducao de pena de 1/6 a 1/3 para o participe cuja participacao for de menor importancia, distinguindo-se da autoria e da coautoria relevante para a execucao do nucleo do tipo.",
    "fundamento": "Art. 29, §1o, do Codigo Penal.",
    "oficial": false
  },

  {
    "id": 298,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Crimes contra a pessoa - homicidio qualificado",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Constitui circunstancia qualificadora do crime de homicidio, nos termos do art. 121, §2o, do Codigo Penal:",
    "alternativas": {
      "A": "a embriaguez culposa do agente no momento do fato.",
      "B": "a menoridade relativa da vitima, entre 18 e 21 anos.",
      "C": "o emprego de meio cruel, ou de que possa resultar perigo comum, e o motivo torpe ou futil.",
      "D": "a confissao espontanea do agente perante a autoridade policial.",
      "E": "o arrependimento posterior do agente, com reparacao integral do dano."
    },
    "gabarito": "C",
    "comentario": "O art. 121, §2o, do Codigo Penal qualifica o homicidio, entre outras hipoteses, quando cometido mediante paga ou promessa de recompensa, por motivo torpe ou futil, com emprego de meio cruel ou de que possa resultar perigo comum, ou mediante recurso que dificulte ou torne impossivel a defesa da vitima.",
    "fundamento": "Art. 121, §2o, do Codigo Penal.",
    "oficial": false
  },

  {
    "id": 299,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Crimes contra o patrimonio - roubo",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O crime de roubo, previsto no art. 157 do Codigo Penal, distingue-se do furto por caracterizar-se pela subtracao de coisa alheia movel mediante:",
    "alternativas": {
      "A": "mero descuido da vitima, sem qualquer emprego de forca ou ameaca.",
      "B": "erro da vitima induzido por artificio ou ardil, sem emprego de violencia.",
      "C": "abuso de confianca decorrente de relacao de trabalho, exclusivamente.",
      "D": "grave ameaca ou violencia a pessoa, ou depois de have-la, por qualquer meio, reduzido a impossibilidade de resistencia.",
      "E": "destruicao de obstaculo, sem qualquer contato com a vitima."
    },
    "gabarito": "D",
    "comentario": "O roubo caracteriza-se pela subtracao de coisa alheia movel mediante grave ameaca ou violencia a pessoa, ou depois de have-la, por qualquer meio, reduzido a impossibilidade de resistencia, distinguindo-se do furto (que dispensa violencia ou grave ameaca) e do estelionato (que se vale de fraude).",
    "fundamento": "Art. 157 do Codigo Penal.",
    "oficial": false
  },

  {
    "id": 300,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Aplicacao da pena - circunstancias judiciais",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Na fixacao da pena-base, o juiz devera considerar, nos termos do art. 59 do Codigo Penal, as circunstancias judiciais, tais como:",
    "alternativas": {
      "A": "apenas os antecedentes criminais do agente, sendo irrelevantes as demais circunstancias.",
      "B": "exclusivamente a gravidade abstrata do tipo penal, sem qualquer analise do caso concreto.",
      "C": "somente a reincidencia, sendo as demais circunstancias aplicaveis apenas na segunda fase da dosimetria.",
      "D": "unicamente o valor do bem juridico lesado, quando se tratar de crime patrimonial.",
      "E": "a culpabilidade, os antecedentes, a conduta social, a personalidade do agente, os motivos, as circunstancias e consequencias do crime, bem como o comportamento da vitima."
    },
    "gabarito": "E",
    "comentario": "O art. 59 do Codigo Penal elenca as circunstancias judiciais a serem consideradas na fixacao da pena-base: culpabilidade, antecedentes, conduta social, personalidade do agente, motivos, circunstancias e consequencias do crime, e comportamento da vitima.",
    "fundamento": "Art. 59 do Codigo Penal.",
    "oficial": false
  },

  {
    "id": 301,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Inquerito policial - natureza juridica",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O inquerito policial, disciplinado pelo Codigo de Processo Penal, caracteriza-se como procedimento:",
    "alternativas": {
      "A": "administrativo, inquisitorial, de carater informativo, destinado a apurar a materialidade e indicios de autoria de infracao penal.",
      "B": "jurisdicional, sujeito ao contraditorio pleno desde o seu inicio.",
      "C": "judicial, presidido obrigatoriamente por juiz de direito.",
      "D": "facultativo em qualquer hipotese, podendo o Ministerio Publico oferecer denuncia sem qualquer investigacao previa.",
      "E": "dispensavel sempre que houver flagrante delito, ainda que a materialidade nao esteja esclarecida."
    },
    "gabarito": "A",
    "comentario": "O inquerito policial e procedimento administrativo, inquisitorial e, em regra, sigiloso, presidido pela autoridade policial, com carater informativo, destinado a apurar a materialidade e os indicios de autoria de infracao penal, servindo de base a eventual acao penal.",
    "fundamento": "Arts. 4o e seguintes do Codigo de Processo Penal (Decreto-Lei no 3.689/1941).",
    "oficial": false
  },

  {
    "id": 302,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Prisao em flagrante - modalidades",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sao modalidades de flagrante delito previstas no art. 302 do Codigo de Processo Penal, EXCETO:",
    "alternativas": {
      "A": "flagrante proprio, quando o agente esta cometendo a infracao penal.",
      "B": "flagrante preparado, decorrente de induzimento pela propria autoridade policial, licito e valido em qualquer hipotese.",
      "C": "flagrante impropio (ou quase-flagrante), quando o agente e perseguido logo apos, em situacao que faca presumir ser autor da infracao.",
      "D": "flagrante presumido (ou ficto), quando o agente e encontrado logo depois, com instrumentos que facam presumir ser ele o autor da infracao.",
      "E": "flagrante proprio, quando o agente acaba de cometer a infracao penal."
    },
    "gabarito": "B",
    "comentario": "O flagrante preparado (crime de ensaio, provocado pela propria autoridade) nao configura hipotese licita de flagrante, sendo, conforme entendimento sumulado pelo STF (Sumula 145), considerado crime impossivel quando o agente e induzido a pratica do delito por policial disfarcado, sem possibilidade concreta de consumacao.",
    "fundamento": "Art. 302 do Codigo de Processo Penal; Sumula 145 do STF.",
    "oficial": false
  },

  {
    "id": 303,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Prisao preventiva - requisitos",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A prisao preventiva, medida cautelar de natureza pessoal disciplinada pelo Codigo de Processo Penal, podera ser decretada, entre outros requisitos, como garantia:",
    "alternativas": {
      "A": "automatica em qualquer crime punido com reclusao, independentemente de fundamentacao concreta.",
      "B": "exclusivamente decorrente de requerimento da vitima, vedada a iniciativa do Ministerio Publico.",
      "C": "da ordem publica ou da ordem economica, por conveniencia da instrucao criminal, ou para assegurar a aplicacao da lei penal, quando houver prova da existencia do crime e indicio suficiente de autoria.",
      "D": "de pena minima aplicavel ao delito, ainda que ausente qualquer risco processual.",
      "E": "de satisfacao da opiniao publica, quando o crime tiver grande repercussao midiatica."
    },
    "gabarito": "C",
    "comentario": "O art. 312 do CPP autoriza a prisao preventiva como garantia da ordem publica, da ordem economica, por conveniencia da instrucao criminal, ou para assegurar a aplicacao da lei penal, quando presentes prova da existencia do crime e indicio suficiente de autoria, alem da demonstracao de perigo gerado pelo estado de liberdade do imputado.",
    "fundamento": "Art. 312 do Codigo de Processo Penal.",
    "oficial": false
  },

  {
    "id": 304,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Medidas cautelares diversas da prisao",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sao exemplos de medidas cautelares diversas da prisao, previstas no art. 319 do Codigo de Processo Penal, EXCETO:",
    "alternativas": {
      "A": "comparecimento periodico em juizo.",
      "B": "proibicao de acesso ou frequencia a determinados lugares.",
      "C": "monitoracao eletronica.",
      "D": "pena de multa substitutiva, aplicavel apenas apos o transito em julgado da sentenca condenatoria.",
      "E": "recolhimento domiciliar no periodo noturno e nos dias de folga."
    },
    "gabarito": "D",
    "comentario": "A pena de multa e sancao penal aplicada apos condenacao com transito em julgado, e nao medida cautelar; as demais alternativas correspondem a medidas cautelares diversas da prisao expressamente previstas no art. 319 do CPP, aplicaveis durante o processo, como alternativa a prisao preventiva.",
    "fundamento": "Art. 319 do Codigo de Processo Penal.",
    "oficial": false
  },

  {
    "id": 305,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Cadeia de custodia da prova",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A cadeia de custodia, disciplinada pelo Codigo de Processo Penal apos as alteracoes da Lei no 13.964/2019, consiste no:",
    "alternativas": {
      "A": "prazo maximo para conclusao do inquerito policial, quando o indiciado estiver preso.",
      "B": "sequencia de recursos cabiveis contra a sentenca condenatoria.",
      "C": "procedimento de escolha do juiz natural da causa, conforme as regras de competencia.",
      "D": "conjunto de testemunhas arroladas pela acusacao e pela defesa.",
      "E": "conjunto de todos os procedimentos utilizados para manter e documentar a historia cronologica do vestigio coletado em locais ou vitimas de crimes, para rastrear sua posse e manuseio a partir de seu reconhecimento ate o descarte."
    },
    "gabarito": "E",
    "comentario": "A cadeia de custodia, prevista nos arts. 158-A e seguintes do CPP, e o conjunto de procedimentos que visa manter e documentar a historia cronologica do vestigio coletado em locais ou vitimas de crimes, para rastrear sua posse e manuseio desde o reconhecimento ate o descarte, garantindo a idoneidade da prova pericial.",
    "fundamento": "Arts. 158-A a 158-F do Codigo de Processo Penal, incluidos pela Lei no 13.964/2019.",
    "oficial": false
  },

  {
    "id": 306,
    "disciplina": "Execução Penal",
    "assunto": "Art. 112 LEP - fracoes de progressao",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 112 da LEP, na redacao dada pela Lei no 13.964/2019 (Pacote Anticrime), o condenado reincidente que pratica crime COM violencia a pessoa ou grave ameaca progride de regime apos cumprir:",
    "alternativas": {
      "A": "30% da pena.",
      "B": "20% da pena.",
      "C": "25% da pena.",
      "D": "40% da pena.",
      "E": "16% da pena."
    },
    "gabarito": "A",
    "comentario": "O inciso IV do art. 112 exige o cumprimento de 30% da pena para o reincidente em crime cometido com violencia a pessoa ou grave ameaca. Cuidado com a pegadinha: 20% e para reincidente SEM violencia (inciso II); 25% e para primario COM violencia (inciso III).",
    "fundamento": "Art. 112, IV, da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 307,
    "disciplina": "Execução Penal",
    "assunto": "Art. 83 CP - livramento condicional",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 83 do Codigo Penal, ao condenado reincidente em crime doloso, o livramento condicional podera ser concedido apos cumprida:",
    "alternativas": {
      "A": "1/3 da pena, desde que tenha bons antecedentes.",
      "B": "1/2 da pena.",
      "C": "2/3 da pena, vedado se reincidente especifico em crimes dessa natureza.",
      "D": "1/4 da pena, independentemente de qualquer requisito subjetivo.",
      "E": "3/4 da pena, em qualquer hipotese de reincidencia."
    },
    "gabarito": "B",
    "comentario": "O art. 83, II, do CP exige o cumprimento de mais da metade (1/2) da pena para o reincidente em crime doloso. A fracao de 1/3 e para o condenado nao reincidente com bons antecedentes (inciso I); a de 2/3, vedada ao reincidente especifico, aplica-se aos crimes hediondos e equiparados (art. 83, V).",
    "fundamento": "Art. 83, I, II e V, do Codigo Penal.",
    "oficial": false
  },

  {
    "id": 308,
    "disciplina": "Execução Penal",
    "assunto": "Art. 52 LEP - duracao do RDD",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O Regime Disciplinar Diferenciado (RDD), apos as alteracoes da Lei no 13.964/2019, tem duracao maxima de:",
    "alternativas": {
      "A": "360 dias, vedada qualquer repeticao.",
      "B": "180 dias, renovaveis por igual periodo em caso de reincidencia em falta grave da mesma especie.",
      "C": "ate 2 anos, sem prejuizo de repeticao da sancao por nova falta grave de mesma especie.",
      "D": "6 meses, prorrogaveis uma unica vez.",
      "E": "1 ano, improrrogaveis em qualquer circunstancia."
    },
    "gabarito": "C",
    "comentario": "A redacao atual do art. 52 fixa a duracao maxima do RDD em ate 2 anos, sem prejuizo de repeticao da sancao por nova falta grave de mesma especie. A antiga redacao (anterior a 2019) previa 360 dias, prorrogaveis por igual periodo ate o limite de 1/6 da pena aplicada — regra ja superada, classica pegadinha de prova.",
    "fundamento": "Art. 52 da Lei no 7.210/1984, com redacao dada pela Lei no 13.964/2019.",
    "oficial": false
  },

  {
    "id": 309,
    "disciplina": "Execução Penal",
    "assunto": "Art. 52 LEP - requisitos do RDD",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Constitui requisito para a inclusao do preso no Regime Disciplinar Diferenciado, nos termos do art. 52, §1o, da LEP, o fato de o preso apresentar alto risco para a ordem e a seguranca do estabelecimento penal ou da sociedade, ou:",
    "alternativas": {
      "A": "haver mera desconfianca da direcao do estabelecimento, dispensada qualquer fundamentacao.",
      "B": "ter o preso menos de 21 anos de idade na data do fato.",
      "C": "ter o preso descumprido, uma unica vez, ordem administrativa de natureza leve.",
      "D": "recair sobre o preso fundadas suspeitas de envolvimento ou participacao, a qualquer titulo, em organizacao criminosa, associacao criminosa ou milicia privada.",
      "E": "ser o preso, comprovadamente, primario e de bons antecedentes."
    },
    "gabarito": "D",
    "comentario": "O art. 52, §1o, autoriza a inclusao no RDD quando recaiam sobre o preso fundadas suspeitas de envolvimento ou participacao, a qualquer titulo, em organizacao criminosa, associacao criminosa ou milicia privada, independentemente da pratica de falta grave. A palavra-chave e \"fundadas suspeitas\" — mera desconfianca sem fundamentacao nao basta.",
    "fundamento": "Art. 52, §1o, da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 310,
    "disciplina": "Execução Penal",
    "assunto": "Art. 126 LEP - remicao pelo trabalho e estudo",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A remicao da pena pelo trabalho observa a proporcao de 1 dia de pena para cada 3 dias trabalhados; ja a remicao pelo estudo observa a proporcao de 1 dia de pena para cada:",
    "alternativas": {
      "A": "24 horas de frequencia escolar, divididas em, no minimo, 2 dias.",
      "B": "18 horas de frequencia escolar, em qualquer numero de dias.",
      "C": "6 horas de frequencia escolar, divididas em, no minimo, 5 dias.",
      "D": "12 horas de frequencia escolar, em um unico dia consecutivo.",
      "E": "12 horas de frequencia escolar, divididas, no minimo, em 3 dias."
    },
    "gabarito": "E",
    "comentario": "O art. 126, §1o, II, da LEP fixa a remicao pelo estudo na proporcao de 1 dia de pena a cada 12 horas de frequencia escolar (atividade de ensino fundamental, medio, superior, profissionalizante, requalificacao profissional ou remicao pela leitura), divididas, no minimo, em 3 dias.",
    "fundamento": "Art. 126, §1o, da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 311,
    "disciplina": "Execução Penal",
    "assunto": "Art. 123 LEP - requisitos da saida temporaria",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sao requisitos para a concessao de saida temporaria ao condenado que cumpre pena em regime semiaberto, EXCETO:",
    "alternativas": {
      "A": "comportamento adequado.",
      "B": "cumprimento minimo de 1/6 da pena, se o condenado for primario.",
      "C": "cumprimento minimo de 1/4 da pena, se o condenado for reincidente.",
      "D": "compatibilidade do beneficio com os objetivos da pena.",
      "E": "cumprimento minimo de 1/3 da pena, independentemente de reincidencia, por se tratar de regra geral unica."
    },
    "gabarito": "E",
    "comentario": "O art. 123 exige comportamento adequado, cumprimento minimo de 1/6 da pena (primario) ou 1/4 (reincidente), e compatibilidade do beneficio com os objetivos da pena — nao existe fracao unica de 1/3 independente da reincidencia, o que torna a alternativa E incorreta e, portanto, o gabarito da questao (que pede a excecao).",
    "fundamento": "Art. 123 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 312,
    "disciplina": "Execução Penal",
    "assunto": "Art. 122 LEP - saida temporaria e crime hediondo com resultado morte",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Tratando-se de condenado por crime hediondo com resultado morte, a jurisprudencia e a legislacao contemporanea sinalizam maior rigor para a saida temporaria, exigindo-se, nessa hipotese especifica, o cumprimento de fracao da pena:",
    "alternativas": {
      "A": "mais elevada que a fracao geral do art. 123, evidenciando tratamento mais severo para o resultado morte.",
      "B": "identica a exigida para os demais crimes, isto e, 1/6 ou 1/4.",
      "C": "inferior a exigida para os crimes comuns, como estimulo antecipado.",
      "D": "dispensada, sendo a saida temporaria automaticamente vedada em qualquer crime hediondo, sem excecao.",
      "E": "irrelevante, pois a saida temporaria e sempre concedida por mero decurso de tempo, independentemente da natureza do crime."
    },
    "gabarito": "A",
    "comentario": "A disciplina legal relativa a crimes hediondos com resultado morte estabelece exigencia de cumprimento de fracao mais elevada da pena para a saida temporaria, tratamento mais rigoroso do que a regra geral do art. 123 (1/6 ou 1/4), refletindo a maior gravidade do resultado morte.",
    "fundamento": "Art. 122 da Lei no 7.210/1984 e legislacao correlata sobre crimes hediondos.",
    "oficial": false
  },

  {
    "id": 313,
    "disciplina": "Execução Penal",
    "assunto": "Art. 50 LEP - rol de faltas graves",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Comete falta grave o condenado a pena privativa de liberdade que, nos termos do art. 50 da LEP:",
    "alternativas": {
      "A": "recusa-se a participar de curso de capacitacao profissional de carater facultativo.",
      "B": "tem em sua posse, utiliza ou fornece aparelho telefonico, de radio ou similar que permita a comunicacao com outros presos ou com o ambiente externo.",
      "C": "solicita, por escrito, revisao de sua classificacao penal perante a Comissao Tecnica.",
      "D": "deixa de comparecer a atividade religiosa, de carater facultativo.",
      "E": "critica, em correspondencia dirigida ao juiz da execucao, as condicoes do estabelecimento penal."
    },
    "gabarito": "B",
    "comentario": "O art. 50, VII, da LEP tipifica como falta grave ter o preso em sua posse, utilizar ou fornecer aparelho telefonico, de radio ou similar que permita a comunicacao com outros presos ou com o ambiente externo — dispositivo incluido pela Lei no 11.466/2007. As demais alternativas descrevem condutas licitas ou o exercicio de direitos do preso.",
    "fundamento": "Art. 50, VII, da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 314,
    "disciplina": "Execução Penal",
    "assunto": "Sumula 439 STJ - exame criminologico",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a Sumula no 439 do Superior Tribunal de Justica, a exigencia de exame criminologico para a progressao de regime:",
    "alternativas": {
      "A": "e sempre obrigatoria, independentemente de fundamentacao, em qualquer crime.",
      "B": "e vedada em qualquer hipotese, ainda que o juiz identifique peculiaridades do caso concreto.",
      "C": "e admissivel pelas peculiaridades do caso, desde que em decisao motivada.",
      "D": "depende exclusivamente de requerimento do Ministerio Publico, sendo vedada de oficio.",
      "E": "aplica-se apenas a condenados reincidentes, sendo vedada para primarios."
    },
    "gabarito": "C",
    "comentario": "A Sumula 439/STJ estabelece que \"admite-se o exame criminologico pelas peculiaridades do caso, desde que em decisao motivada\", nao se tratando, portanto, de exigencia automatica nem de vedacao absoluta.",
    "fundamento": "Sumula no 439 do Superior Tribunal de Justica.",
    "oficial": false
  },

  {
    "id": 315,
    "disciplina": "Execução Penal",
    "assunto": "Art. 118 LEP - regressao de regime",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A regressao de regime, prevista no art. 118 da LEP, exige, como regra, previa oitiva do condenado, sendo essa formalidade dispensada apenas na hipotese de:",
    "alternativas": {
      "A": "o condenado ser reincidente em crime doloso.",
      "B": "ter o condenado praticado falta grave de natureza leve.",
      "C": "o condenado ser primario, hipotese em que a oitiva e sempre dispensada.",
      "D": "o condenado estar foragido (fuga), circunstancia que impossibilita, por evidente, a sua oitiva previa.",
      "E": "haver mera suspeita, sem qualquer comprovacao, de descumprimento de dever."
    },
    "gabarito": "D",
    "comentario": "O art. 118, §2o, da LEP exige a previa oitiva do condenado antes da regressao de regime, ressalvada a hipotese de fuga, circunstancia que, por sua propria natureza, torna inviavel a oitiva previa do condenado foragido.",
    "fundamento": "Art. 118, §2o, da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 316,
    "disciplina": "Execução Penal",
    "assunto": "Art. 24 LEP - natureza da assistencia religiosa",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A assistencia religiosa, prevista na Lei de Execucao Penal, tem natureza:",
    "alternativas": {
      "A": "obrigatoria, sendo vedada ao preso a recusa de participacao em pelo menos um culto semanal.",
      "B": "restrita a uma unica confissao religiosa, definida pela direcao do estabelecimento.",
      "C": "condicionada ao bom comportamento carcerario do preso, podendo ser suspensa como sancao disciplinar.",
      "D": "vedada em estabelecimentos penais federais, por forca do principio da laicidade do Estado.",
      "E": "facultativa quanto a participacao do preso em atividade religiosa, com liberdade de culto."
    },
    "gabarito": "E",
    "comentario": "O art. 24 da LEP assegura a assistencia religiosa, com liberdade de culto, sendo facultada ao preso a participacao em atividade religiosa e permitida a posse de livros de instrucao religiosa — a participacao nao e obrigatoria nem pode ser imposta como condicao.",
    "fundamento": "Art. 24 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 317,
    "disciplina": "Execução Penal",
    "assunto": "Art. 25 LEP - assistencia ao egresso",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A assistencia ao egresso, nos termos do art. 25 da LEP, consiste em orientacao e apoio para reintegra-lo a vida em liberdade, incluindo, quando necessario, alojamento e alimentacao em estabelecimento adequado, pelo prazo de:",
    "alternativas": {
      "A": "2 meses, prorrogaveis uma unica vez, comprovado, por declaracao do assistente social, o empenho na obtencao de emprego.",
      "B": "1 mes, improrrogavel.",
      "C": "6 meses, prorrogaveis por igual periodo, uma unica vez.",
      "D": "15 dias, sem qualquer possibilidade de prorrogacao.",
      "E": "1 ano, renovavel indefinidamente, a criterio da direcao do estabelecimento."
    },
    "gabarito": "A",
    "comentario": "O art. 25, paragrafo unico, da LEP fixa o prazo de alojamento e alimentacao ao egresso em 2 meses, prorrogaveis uma unica vez, mediante comprovacao, por declaracao do assistente social, de empenho na obtencao de emprego.",
    "fundamento": "Art. 25, paragrafo unico, da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 318,
    "disciplina": "Execução Penal",
    "assunto": "Art. 36 LEP - trabalho externo em regime fechado",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O trabalho externo, admissivel aos condenados que cumprem pena em regime fechado, e limitado a servicos ou obras publicas realizadas por orgaos da Administracao ou entidades privadas, desde que tomadas as cautelas contra a fuga e em favor da disciplina, exigindo-se, ainda, o cumprimento minimo de:",
    "alternativas": {
      "A": "1/10 da pena.",
      "B": "1/6 da pena.",
      "C": "1/4 da pena.",
      "D": "1/3 da pena.",
      "E": "metade da pena."
    },
    "gabarito": "B",
    "comentario": "O art. 37 da LEP exige, para o trabalho externo do preso em regime fechado, o cumprimento minimo de 1/6 da pena, alem da aptidao, disciplina e responsabilidade do condenado, restrito o trabalho a servicos ou obras publicas realizadas por orgaos da Administracao ou entidades privadas, com as cautelas do art. 36.",
    "fundamento": "Arts. 36 e 37 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 319,
    "disciplina": "Execução Penal",
    "assunto": "Art. 70 LEP - Conselho Penitenciario",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O Conselho Penitenciario, orgao previsto na Lei de Execucao Penal, tem natureza:",
    "alternativas": {
      "A": "jurisdicional, competindo-lhe julgar recursos de decisoes do juiz da execucao.",
      "B": "meramente administrativa, sem qualquer atribuicao relacionada a livramento condicional ou indulto.",
      "C": "consultiva e fiscalizadora da execucao da pena, integrado por membros nomeados pelo Governador do Estado.",
      "D": "policial, com competencia para investigar faltas disciplinares no interior dos estabelecimentos.",
      "E": "exclusivamente federal, nao existindo Conselhos Penitenciarios estaduais."
    },
    "gabarito": "C",
    "comentario": "O Conselho Penitenciario e orgao consultivo e fiscalizador da execucao da pena, cujos membros sao nomeados pelo Governador do Estado, competindo-lhe, entre outras atribuicoes, emitir parecer sobre livramento condicional, indulto e comutacao de penas.",
    "fundamento": "Arts. 69 e 70 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 320,
    "disciplina": "Execução Penal",
    "assunto": "Art. 78 LEP - Patronato",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O Patronato, orgao previsto na Lei de Execucao Penal, destina-se a prestar assistencia aos albergados e aos egressos, competindo-lhe, ainda:",
    "alternativas": {
      "A": "julgar recursos administrativos interpostos pelos condenados.",
      "B": "decretar a prisao preventiva de condenados foragidos.",
      "C": "substituir integralmente as atribuicoes do juiz da execucao penal.",
      "D": "orientar os condenados a pena restritiva de direitos e fiscalizar o cumprimento das penas de prestacao de servicos a comunidade e de limitacao de fim de semana.",
      "E": "aplicar sancoes disciplinares no ambito das penitenciarias."
    },
    "gabarito": "D",
    "comentario": "O Patronato presta assistencia aos albergados e aos egressos, orienta os condenados a pena restritiva de direitos e fiscaliza o cumprimento das penas de prestacao de servicos a comunidade e de limitacao de fim de semana, conforme o art. 79 da LEP.",
    "fundamento": "Arts. 78 e 79 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 321,
    "disciplina": "Execução Penal",
    "assunto": "Art. 93/94 LEP - Casa do Albergado",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A Casa do Albergado, estabelecimento destinado ao cumprimento de pena privativa de liberdade em regime aberto e da pena de limitacao de fim de semana, caracteriza-se por:",
    "alternativas": {
      "A": "possuir obstaculos fisicos contra a fuga, como muros altos e grades reforcadas.",
      "B": "abrigar exclusivamente presos provisorios, jamais condenados definitivos.",
      "C": "exigir a presenca permanente de agentes penitenciarios armados em seu interior.",
      "D": "ser identica, em estrutura, a colonia agricola ou industrial do regime semiaberto.",
      "E": "nao possuir obstaculos fisicos contra a fuga, fundando-se o regime no senso de responsabilidade do condenado."
    },
    "gabarito": "E",
    "comentario": "O art. 94 da LEP estabelece que a Casa do Albergado nao devera ter obstaculos fisicos contra a fuga, fundando-se o regime aberto no senso de responsabilidade e no autodisciplinamento do condenado, distinguindo-se estruturalmente da penitenciaria (fechado) e da colonia (semiaberto).",
    "fundamento": "Arts. 93 e 94 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 322,
    "disciplina": "Execução Penal",
    "assunto": "Art. 102/103 LEP - Cadeia Publica",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A cadeia publica, estabelecimento destinado ao recolhimento de presos provisorios, deve ser instalada, em regra:",
    "alternativas": {
      "A": "em local proximo de centro urbano, com separacao dos presos por criterios que preservem a ordem e a disciplina, e separacao por sexo.",
      "B": "em area agricola distante do centro urbano, para facilitar o trabalho externo.",
      "C": "obrigatoriamente anexa a penitenciaria de regime fechado, sem qualquer separacao estrutural.",
      "D": "exclusivamente em capitais de Estado, sendo vedada sua existencia em outros municipios.",
      "E": "sem qualquer criterio legal de separacao entre presos, bastando a existencia de vagas."
    },
    "gabarito": "A",
    "comentario": "O art. 103 da LEP exige que a cadeia publica seja instalada proxima de centro urbano, observando-se, entre outros criterios, a separacao dos presos por sexo, alem de garantir a ordem e a disciplina no estabelecimento destinado aos presos provisorios.",
    "fundamento": "Arts. 102 e 103 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 323,
    "disciplina": "Execução Penal",
    "assunto": "Art. 41 LEP - direitos do preso",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Constitui direito do preso, expressamente previsto no art. 41 da LEP:",
    "alternativas": {
      "A": "porte de arma de fogo dentro do estabelecimento, para autodefesa.",
      "B": "contato com o mundo exterior por meio de correspondencia escrita, da leitura e de outros meios de informacao que nao comprometam a moral e os bons costumes.",
      "C": "livre transito entre estabelecimentos penais de regimes distintos, independentemente de autorizacao judicial.",
      "D": "isencao automatica de qualquer sancao disciplinar apos 5 anos de bom comportamento.",
      "E": "acesso irrestrito a aparelhos de telefonia movel, sem qualquer fiscalizacao."
    },
    "gabarito": "B",
    "comentario": "O art. 41, XV, da LEP assegura ao preso o contato com o mundo exterior por meio de correspondencia escrita, da leitura e de outros meios de informacao que nao comprometam a moral e os bons costumes — direito compativel com a disciplina do estabelecimento, distinto do acesso irrestrito a telefonia movel (vedado e tipificado como falta grave).",
    "fundamento": "Art. 41, XV, da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 324,
    "disciplina": "Execução Penal",
    "assunto": "Art. 39 LEP - deveres do condenado",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Constituem deveres do condenado, nos termos do art. 39 da LEP, entre outros:",
    "alternativas": {
      "A": "exclusivamente o comparecimento as audiencias judiciais, sendo os demais itens meras recomendacoes.",
      "B": "custeio integral de sua propria defesa tecnica, ainda que hipossuficiente.",
      "C": "execucao do trabalho, das tarefas e das ordens recebidas, submissao a sancao disciplinar imposta, e indenizacao ao Estado das despesas realizadas com sua manutencao, quando solvente.",
      "D": "participacao obrigatoria em qualquer culto religioso designado pela direcao do estabelecimento.",
      "E": "renuncia expressa a todos os direitos nao mencionados no art. 41."
    },
    "gabarito": "C",
    "comentario": "O art. 39 da LEP elenca, entre os deveres do condenado, a execucao do trabalho, das tarefas e das ordens recebidas, a submissao a sancao disciplinar imposta, e a indenizacao ao Estado, quando solvente, das despesas realizadas com sua manutencao, alem da indenizacao a vitima ou a seus sucessores.",
    "fundamento": "Art. 39 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 325,
    "disciplina": "Execução Penal",
    "assunto": "Art. 10/11 LEP - assistencia material",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A assistencia material ao preso e ao internado, prevista nos arts. 10 e 12 da LEP, consistira, no minimo, em fornecimento de:",
    "alternativas": {
      "A": "remuneracao mensal equivalente a um salario minimo, independentemente do exercicio de trabalho.",
      "B": "passagens aereas para visita familiar mensal, custeadas pelo estabelecimento penal.",
      "C": "aparelho de televisao individual em cada cela, como direito subjetivo incondicionado.",
      "D": "vestuario, alimentacao e instalacoes higienicas, sendo dever do Estado e nao mera liberalidade.",
      "E": "veiculo automotor para uso apos a progressao ao regime aberto."
    },
    "gabarito": "D",
    "comentario": "O art. 12 da LEP estabelece que a assistencia material ao preso e ao internado consistira no fornecimento de alimentacao, vestuario e instalacoes higienicas, sendo dever do Estado (art. 10) e nao mera liberalidade ou faculdade da Administracao Penitenciaria.",
    "fundamento": "Arts. 10 e 12 da Lei no 7.210/1984.",
    "oficial": false
  },

  {
    "id": 326,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 8.072/90 - rol taxativo de hediondos",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa que apresenta um crime que NAO consta do rol de crimes hediondos previsto no art. 1o da Lei no 8.072/1990:",
    "alternativas": {
      "A": "latrocinio.",
      "B": "estupro de vulneravel.",
      "C": "epidemia com resultado morte.",
      "D": "genocidio.",
      "E": "furto qualificado pelo concurso de pessoas, sem emprego de violencia ou grave ameaca."
    },
    "gabarito": "E",
    "comentario": "O furto qualificado, ainda que pelo concurso de pessoas, NAO integra o rol dos crimes hediondos da Lei no 8.072/1990 — esse rol e taxativo e abrange, entre outros, latrocinio, estupro de vulneravel, epidemia com resultado morte e genocidio (este ultimo por forca da Lei no 8.930/1994).",
    "fundamento": "Art. 1o da Lei no 8.072/1990.",
    "oficial": false
  },

  {
    "id": 327,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 8.072/90 - lesao corporal contra agente de seguranca",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Apos a alteracao promovida pela Lei no 13.142/2015, passou a ser considerada hedionda a lesao corporal:",
    "alternativas": {
      "A": "gravissima ou seguida de morte, quando praticada contra autoridade ou agente descrito nos arts. 142 e 144 da Constituicao Federal, integrantes do sistema prisional e da Forca Nacional de Seguranca Publica, no exercicio da funcao ou em decorrencia dela.",
      "B": "de natureza leve, praticada contra qualquer pessoa, independentemente da funcao exercida.",
      "C": "culposa, praticada em acidente de transito envolvendo agente de seguranca publica.",
      "D": "de natureza leve, praticada por agente de seguranca publica contra particular.",
      "E": "dolosa simples, praticada entre particulares, sem qualquer relacao com agentes de seguranca."
    },
    "gabarito": "A",
    "comentario": "A Lei no 13.142/2015 incluiu no rol de crimes hediondos a lesao corporal de natureza gravissima ou seguida de morte quando praticada contra autoridade ou agente descrito nos arts. 142 e 144 da CF/1988, integrantes do sistema prisional e da Forca Nacional de Seguranca Publica, no exercicio da funcao ou em decorrencia dela.",
    "fundamento": "Art. 1o, paragrafo unico, I, da Lei no 8.072/1990, incluido pela Lei no 13.142/2015.",
    "oficial": false
  },

  {
    "id": 328,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 8.072/90 - beneficios vedados",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sao insuscetiveis de anistia, graca, indulto e fianca, nos termos do art. 2o da Lei no 8.072/1990, os crimes hediondos e os equiparados, EXCETO:",
    "alternativas": {
      "A": "pratica da tortura.",
      "B": "furto simples, sem qualificadora.",
      "C": "trafico ilicito de entorpecentes.",
      "D": "terrorismo.",
      "E": "latrocinio, crime hediondo por definicao legal expressa."
    },
    "gabarito": "B",
    "comentario": "O furto simples nao e crime hediondo nem equiparado, de modo que nao se sujeita as vedacoes do art. 2o da Lei no 8.072/1990 (anistia, graca, indulto e fianca). Os equiparados a hediondos por forca constitucional (art. 5o, XLIII, CF) sao tortura, trafico ilicito de entorpecentes e terrorismo.",
    "fundamento": "Art. 2o da Lei no 8.072/1990; art. 5o, XLIII, da Constituicao Federal de 1988.",
    "oficial": false
  },

  {
    "id": 329,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 11.343/06 - pena do trafico (art. 33, caput)",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A pena cominada ao crime de trafico de drogas na forma do caput do art. 33 da Lei no 11.343/2006 e de reclusao de:",
    "alternativas": {
      "A": "2 a 6 anos, e multa.",
      "B": "3 a 10 anos, e multa.",
      "C": "5 a 15 anos, e multa.",
      "D": "8 a 20 anos, e multa.",
      "E": "1 a 4 anos, sem multa cumulativa."
    },
    "gabarito": "C",
    "comentario": "O art. 33, caput, da Lei no 11.343/2006 comina pena de reclusao de 5 a 15 anos e pagamento de 500 a 1.500 dias-multa para o trafico de drogas em sua forma basica.",
    "fundamento": "Art. 33, caput, da Lei no 11.343/2006.",
    "oficial": false
  },

  {
    "id": 330,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 11.343/06 - associacao para o trafico",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O crime de associacao para o trafico, previsto no art. 35 da Lei no 11.343/2006, exige a reuniao de duas ou mais pessoas, de forma estavel e permanente, para o fim de praticar os crimes dos arts. 33, caput e §1o, e 34, sendo a pena cominada de reclusao de:",
    "alternativas": {
      "A": "1 a 3 anos, sem multa cumulativa.",
      "B": "8 a 20 anos, equiparada ao trafico em sua forma qualificada.",
      "C": "4 a 6 anos e multa, identica a pena do porte para uso pessoal.",
      "D": "3 a 10 anos, e pagamento de 700 a 1.200 dias-multa.",
      "E": "6 meses a 2 anos, na forma de detencao."
    },
    "gabarito": "D",
    "comentario": "O art. 35 da Lei no 11.343/2006 comina pena de reclusao de 3 a 10 anos e pagamento de 700 a 1.200 dias-multa para a associacao de duas ou mais pessoas, de forma estavel e permanente, para a pratica dos crimes de trafico (art. 33, caput e §1o) e de maquinismo/insumo (art. 34).",
    "fundamento": "Art. 35 da Lei no 11.343/2006.",
    "oficial": false
  },

  {
    "id": 331,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 11.343/06 - liberdade provisoria",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sobre a liberdade provisoria no crime de trafico de drogas, e correto afirmar que:",
    "alternativas": {
      "A": "e vedada em qualquer hipotese, por expressa disposicao do art. 44 da Lei no 11.343/2006, ainda vigente e aplicavel.",
      "B": "e sempre concedida automaticamente, independentemente de qualquer analise dos requisitos cautelares.",
      "C": "depende exclusivamente do pagamento de fianca em valor fixado pela propria lei de drogas.",
      "D": "e vedada apenas ao reincidente especifico, sendo automatica para o agente primario.",
      "E": "a vedacao generica prevista originalmente no art. 44 da Lei no 11.343/2006 foi declarada inconstitucional pelo STF, exigindo-se analise fundamentada dos requisitos do art. 312 do CPP em cada caso concreto."
    },
    "gabarito": "E",
    "comentario": "O STF, no julgamento do HC 104.339, declarou incidentalmente a inconstitucionalidade da vedacao generica e abstrata a liberdade provisoria prevista no art. 44 da Lei no 11.343/2006, exigindo-se, desde entao, a analise fundamentada dos requisitos cautelares do art. 312 do CPP em cada caso concreto.",
    "fundamento": "STF, HC 104.339; art. 44 da Lei no 11.343/2006.",
    "oficial": false
  },

  {
    "id": 332,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 12.850/13 - pena da organizacao criminosa",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A pena cominada ao crime de promover, constituir, financiar ou integrar organizacao criminosa, previsto no art. 2o da Lei no 12.850/2013, e de reclusao de:",
    "alternativas": {
      "A": "3 a 8 anos, e multa, sem prejuizo das penas correspondentes as demais infracoes praticadas.",
      "B": "1 a 3 anos, e multa.",
      "C": "2 a 5 anos, e multa.",
      "D": "6 a 12 anos, e multa.",
      "E": "5 a 15 anos, equiparada ao trafico de entorpecentes."
    },
    "gabarito": "A",
    "comentario": "O art. 2o, caput, da Lei no 12.850/2013 comina pena de reclusao de 3 a 8 anos e multa, sem prejuizo das penas correspondentes as demais infracoes penais praticadas, para quem promove, constitui, financia ou integra, pessoalmente ou por interposta pessoa, organizacao criminosa.",
    "fundamento": "Art. 2o, caput, da Lei no 12.850/2013.",
    "oficial": false
  },

  {
    "id": 333,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 12.850/13 - causa de aumento por arma de fogo",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 2o, §2o, da Lei no 12.850/2013, a pena do crime de organizacao criminosa e aumentada:",
    "alternativas": {
      "A": "em ate 1/6, se ha qualquer tipo de arma, ainda que branca.",
      "B": "em ate metade, se ha emprego de arma de fogo.",
      "C": "em dobro, sempre que houver emprego de arma de fogo de uso restrito.",
      "D": "de 1/6 a 2/3, se a organizacao envolver menores de idade.",
      "E": "em ate a metade, se ha emprego de arma de fogo, mesma majorante aplicavel quando ha participacao de crianca ou adolescente."
    },
    "gabarito": "B",
    "comentario": "O §2o do art. 2o preve o aumento de ate a metade se ha emprego de arma de fogo; ja o §4o, IV, preve aumento de 1/6 a 2/3 se ha participacao de crianca ou adolescente — sao majorantes distintas, com fundamentos e percentuais diferentes, sendo comum a pegadinha de confundi-las.",
    "fundamento": "Art. 2o, §§2o e 4o, da Lei no 12.850/2013.",
    "oficial": false
  },

  {
    "id": 334,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 12.850/13 - prazo da infiltracao de agentes",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A infiltracao de agentes de policia, meio de obtencao de prova disciplinado pela Lei no 12.850/2013, sera autorizada pelo prazo:",
    "alternativas": {
      "A": "indeterminado, ate a conclusao da investigacao.",
      "B": "de ate 1 ano, prorrogavel uma unica vez.",
      "C": "nao superior a 6 meses, sem prejuizo de eventuais renovacoes, desde que comprovada sua necessidade.",
      "D": "de 30 dias, improrrogaveis.",
      "E": "de 2 anos, correspondente ao prazo maximo da acao controlada."
    },
    "gabarito": "C",
    "comentario": "O art. 10, §3o, da Lei no 12.850/2013 estabelece que a infiltracao sera autorizada pelo prazo nao superior a 6 meses, sem prejuizo de eventuais renovacoes, desde que comprovada sua necessidade, mediante decisao judicial fundamentada.",
    "fundamento": "Art. 10, §3o, da Lei no 12.850/2013.",
    "oficial": false
  },

  {
    "id": 335,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 9.455/97 - pena da tortura (caput)",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A pena cominada ao crime de tortura na forma basica do art. 1o, inciso I, da Lei no 9.455/1997, e de reclusao de:",
    "alternativas": {
      "A": "1 a 4 anos.",
      "B": "4 a 10 anos.",
      "C": "6 a 12 anos.",
      "D": "2 a 8 anos.",
      "E": "8 a 16 anos."
    },
    "gabarito": "D",
    "comentario": "O art. 1o, §caput e incisos, da Lei no 9.455/1997 comina pena de reclusao de 2 a 8 anos para as condutas de tortura descritas no inciso I; ja a modalidade de tortura-castigo (inciso II) tem pena de reclusao de 1 a 4 anos — distincao classica cobrada em pegadinhas.",
    "fundamento": "Art. 1o, §caput e §2o (penas), da Lei no 9.455/1997.",
    "oficial": false
  },

  {
    "id": 336,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 9.455/97 - tortura-castigo",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A modalidade de tortura conhecida como \"tortura-castigo\", prevista no art. 1o, II, da Lei no 9.455/1997, consiste em submeter alguem, sob guarda, poder ou autoridade, com emprego de violencia ou grave ameaca, a intenso sofrimento fisico ou mental, como forma de aplicar castigo pessoal ou medida de carater preventivo, sendo a pena cominada de reclusao de:",
    "alternativas": {
      "A": "2 a 8 anos.",
      "B": "3 a 6 anos.",
      "C": "5 a 10 anos.",
      "D": "6 a 14 anos.",
      "E": "1 a 4 anos."
    },
    "gabarito": "E",
    "comentario": "O art. 1o, II, da Lei no 9.455/1997 tipifica a tortura-castigo, cominando pena de reclusao de 1 a 4 anos — pena inferior a modalidade do inciso I (2 a 8 anos), o que costuma ser explorado em questoes de pegadinha por troca dos intervalos.",
    "fundamento": "Art. 1o, II e §caput (pena), da Lei no 9.455/1997.",
    "oficial": false
  },

  {
    "id": 337,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 9.455/97 - regime inicial de cumprimento",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O condenado por crime de tortura iniciara o cumprimento da pena, nos termos do art. 1o, §7o, da Lei no 9.455/1997, em regime:",
    "alternativas": {
      "A": "fechado.",
      "B": "aberto, salvo reincidencia especifica.",
      "C": "semiaberto, independentemente da pena aplicada.",
      "D": "a criterio exclusivo do condenado, mediante requerimento ao juiz.",
      "E": "domiciliar, por se tratar de crime praticado, em regra, por agente publico."
    },
    "gabarito": "A",
    "comentario": "O art. 1o, §7o, da Lei no 9.455/1997 determina que o condenado por crime de tortura iniciara o cumprimento da pena em regime fechado, regra especial que se sobrepoe as regras gerais de fixacao de regime do Codigo Penal.",
    "fundamento": "Art. 1o, §7o, da Lei no 9.455/1997.",
    "oficial": false
  },

  {
    "id": 338,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 13.869/19 - pena-regra geral",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos crimes previstos na Lei no 13.869/2019 (Lei de Abuso de Autoridade) para os quais nao haja cominacao de pena especifica no proprio tipo, aplica-se, como regra geral estabelecida no art. 32, a pena de:",
    "alternativas": {
      "A": "reclusao de 1 a 4 anos.",
      "B": "detencao de 6 meses a 2 anos.",
      "C": "reclusao de 2 a 8 anos.",
      "D": "detencao de 3 meses a 1 ano.",
      "E": "multa isolada, sem pena privativa de liberdade."
    },
    "gabarito": "B",
    "comentario": "A maioria dos tipos da Lei no 13.869/2019 comina expressamente detencao de 6 meses a 2 anos e multa, padrao que se repete ao longo da lei para diversas condutas, embora alguns tipos especificos tragam penas distintas.",
    "fundamento": "Lei no 13.869/2019 (v.g. arts. 9o, 10, 12, 13, 15, entre outros).",
    "oficial": false
  },

  {
    "id": 339,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 13.869/19 - natureza da acao penal",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A acao penal nos crimes previstos na Lei no 13.869/2019 e, nos termos do art. 3o, de iniciativa:",
    "alternativas": {
      "A": "privada, mediante queixa-crime exclusiva da vitima.",
      "B": "publica condicionada a representacao do ofendido.",
      "C": "publica incondicionada.",
      "D": "publica condicionada a requisicao do Ministro da Justica.",
      "E": "privada subsidiaria da publica, apenas em caso de inercia do Ministerio Publico."
    },
    "gabarito": "C",
    "comentario": "O art. 3o da Lei no 13.869/2019 estabelece que os crimes nela previstos sao de acao penal publica incondicionada, dispensando representacao da vitima ou qualquer outra condicao de procedibilidade.",
    "fundamento": "Art. 3o da Lei no 13.869/2019.",
    "oficial": false
  },

  {
    "id": 340,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 13.869/19 - exclusao de abuso de autoridade",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nao constitui abuso de autoridade, nos termos do art. 1o, §2o, da Lei no 13.869/2019:",
    "alternativas": {
      "A": "qualquer conduta de agente publico, desde que praticada sem dolo especifico, ainda que gravemente lesiva a direitos.",
      "B": "condutas praticadas por particulares em concurso com agente publico.",
      "C": "excesso de prazo na conclusao de investigacao, desde que superior a 1 ano.",
      "D": "a discordancia na interpretacao de lei ou na avaliacao de fatos e provas, desde que fundamentada, ainda que se conclua posteriormente por sua incorrecao.",
      "E": "a divulgacao de informacoes sigilosas, quando de interesse da imprensa."
    },
    "gabarito": "D",
    "comentario": "O art. 1o, §2o, expressamente exclui do ambito de incidencia da lei a divergencia na interpretacao de lei ou na avaliacao de fatos e provas, principio que resguarda a livre convicção fundamentada de autoridades e agentes publicos no exercicio regular de suas funcoes.",
    "fundamento": "Art. 1o, §2o, da Lei no 13.869/2019.",
    "oficial": false
  },

  {
    "id": 341,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 10.826/03 - pena da posse irregular",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A posse irregular de arma de fogo de uso permitido, tipificada no art. 12 da Lei no 10.826/2003, e punida com pena de:",
    "alternativas": {
      "A": "reclusao de 2 a 4 anos, e multa.",
      "B": "reclusao de 3 a 6 anos, e multa.",
      "C": "detencao de 6 meses a 2 anos, e multa.",
      "D": "reclusao de 4 a 8 anos, sem multa.",
      "E": "detencao de 1 a 3 anos, e multa."
    },
    "gabarito": "E",
    "comentario": "O art. 12 da Lei no 10.826/2003 comina pena de detencao de 1 a 3 anos e multa para a posse irregular de arma de fogo de uso permitido — a pena e mais branda que o porte ilegal (art. 14, reclusao de 2 a 4 anos), por se tratar de conduta praticada no interior da residencia ou local de trabalho.",
    "fundamento": "Art. 12 da Lei no 10.826/2003.",
    "oficial": false
  },

  {
    "id": 342,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 10.826/03 - pena do porte ilegal",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O porte ilegal de arma de fogo de uso permitido, tipificado no art. 14 da Lei no 10.826/2003, e punido com pena de reclusao de:",
    "alternativas": {
      "A": "2 a 4 anos, e multa.",
      "B": "1 a 3 anos, e multa.",
      "C": "6 meses a 2 anos, e multa.",
      "D": "3 a 6 anos, e multa.",
      "E": "4 a 8 anos, sem multa."
    },
    "gabarito": "A",
    "comentario": "O art. 14 da Lei no 10.826/2003 comina pena de reclusao de 2 a 4 anos e multa para o porte ilegal de arma de fogo de uso permitido, tratamento mais severo do que a posse irregular (art. 12, detencao de 1 a 3 anos), justamente por envolver o risco inerente ao transporte da arma fora do ambiente controlado.",
    "fundamento": "Art. 14 da Lei no 10.826/2003.",
    "oficial": false
  },

  {
    "id": 343,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 10.826/03 - arma de uso restrito",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A posse ou o porte de arma de fogo, acessorio ou municao de uso restrito, sem autorizacao e em desacordo com determinacao legal ou regulamentar, tipificado no art. 16 da Lei no 10.826/2003, e punido com pena de reclusao de:",
    "alternativas": {
      "A": "1 a 3 anos, e multa, identica a posse irregular de arma de uso permitido.",
      "B": "3 a 6 anos, e multa, pena mais grave que as condutas envolvendo arma de uso permitido.",
      "C": "2 a 4 anos, e multa, identica ao porte ilegal de arma de uso permitido.",
      "D": "6 meses a 2 anos, e multa, pena mais branda que as condutas de uso permitido.",
      "E": "4 a 10 anos, sem possibilidade de multa cumulativa."
    },
    "gabarito": "B",
    "comentario": "O art. 16 da Lei no 10.826/2003 comina pena de reclusao de 3 a 6 anos e multa para condutas envolvendo arma de fogo, acessorio ou municao de uso restrito ou proibido, tratamento mais severo que as condutas equivalentes envolvendo armas de uso permitido (arts. 12 e 14).",
    "fundamento": "Art. 16 da Lei no 10.826/2003.",
    "oficial": false
  },

  {
    "id": 344,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 10.826/03 - disparo de arma de fogo",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O crime de disparo de arma de fogo, tipificado no art. 15 da Lei no 10.826/2003, consiste em disparar arma de fogo ou acionar municao em local habitado ou em suas adjacencias, em via publica ou em direcao a ela, desde que a conduta:",
    "alternativas": {
      "A": "seja sempre punida cumulativamente com o crime posteriormente praticado, ainda que unico o contexto factico.",
      "B": "seja praticada exclusivamente por agente de seguranca publica em servico.",
      "C": "nao tenha como finalidade a pratica de outro crime, hipotese em que o disparo e absorvido pelo crime-fim.",
      "D": "envolva, obrigatoriamente, arma de fogo de uso restrito.",
      "E": "resulte, necessariamente, em lesao corporal a terceiro."
    },
    "gabarito": "C",
    "comentario": "O art. 15, paragrafo unico, da Lei no 10.826/2003 estabelece que o crime de disparo de arma de fogo e absorvido quando a conduta tem como finalidade a pratica de outro crime, aplicando-se, nesse caso, somente as penas relativas ao delito-fim.",
    "fundamento": "Art. 15 da Lei no 10.826/2003.",
    "oficial": false
  },

  {
    "id": 345,
    "disciplina": "Legislação Específica",
    "assunto": "Lei 12.850/13 - conceito de organizacao criminosa (requisito numerico)",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Para a caracterizacao da organizacao criminosa nos termos do art. 1o, §1o, da Lei no 12.850/2013, exige-se a associacao de, no minimo:",
    "alternativas": {
      "A": "2 (duas) pessoas.",
      "B": "3 (tres) pessoas.",
      "C": "5 (cinco) pessoas.",
      "D": "4 (quatro) pessoas.",
      "E": "10 (dez) pessoas, por analogia ao crime de rixa qualificada."
    },
    "gabarito": "D",
    "comentario": "O art. 1o, §1o, exige a associacao de 4 (quatro) ou mais pessoas — numero superior ao exigido para a associacao criminosa comum do art. 288 do Codigo Penal (3 ou mais pessoas), distincao classica explorada em pegadinhas de prova.",
    "fundamento": "Art. 1o, §1o, da Lei no 12.850/2013; art. 288 do Codigo Penal.",
    "oficial": false
  },

  {
    "id": 346,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 14 CP - tentativa",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Salvo disposicao em contrario, pune-se a tentativa com a pena correspondente ao crime consumado, diminuida de:",
    "alternativas": {
      "A": "1/6 a 1/3.",
      "B": "1/3 a 1/2.",
      "C": "1/2 a 2/3.",
      "D": "1/4 a 1/2.",
      "E": "1 a 2/3."
    },
    "gabarito": "E",
    "comentario": "O art. 14, paragrafo unico, do CP determina que, salvo disposicao em contrario, a pena do crime tentado e a do consumado diminuida de 1 (um) a 2/3 (dois tercos) — atencao a pegadinha: nao se trata de fracao entre dois numeros menores que 1, mas de 1 inteiro a 2/3.",
    "fundamento": "Art. 14, paragrafo unico, do Codigo Penal.",
    "oficial": false
  },

  {
    "id": 347,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 15 CP - desistencia voluntaria e arrependimento eficaz",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Na desistencia voluntaria e no arrependimento eficaz, disciplinados pelo art. 15 do CP, o agente que voluntariamente desiste de prosseguir na execucao ou impede que o resultado se produza:",
    "alternativas": {
      "A": "so responde pelos atos ja praticados, caso estes, por si sos, constituam crime.",
      "B": "e isento de qualquer pena, ainda que os atos ja praticados configurem, por si sos, outro crime.",
      "C": "responde sempre pela tentativa do crime originalmente pretendido, com pena reduzida.",
      "D": "e beneficiado com perdao judicial automatico, independentemente de qualquer outra circunstancia.",
      "E": "responde pelo crime consumado, mas com atenuante generica de arrependimento."
    },
    "gabarito": "A",
    "comentario": "Nos casos de desistencia voluntaria e arrependimento eficaz (\"ponte de ouro\"), o agente so responde pelos atos ja praticados, caso estes, por si sos, constituam crime — nao ha isencao total de pena se a conduta ja praticada configurar outro delito autonomo.",
    "fundamento": "Art. 15 do Codigo Penal.",
    "oficial": false
  },

  {
    "id": 348,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 16 CP - arrependimento posterior",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O arrependimento posterior, previsto no art. 16 do Codigo Penal, reduz a pena de 1/3 a 2/3 quando, nos crimes cometidos SEM violencia ou grave ameaca a pessoa, o agente repara o dano ou restitui a coisa ate:",
    "alternativas": {
      "A": "o transito em julgado da sentenca condenatoria.",
      "B": "o recebimento da denuncia ou queixa, por ato voluntario do agente.",
      "C": "o oferecimento da denuncia ou queixa.",
      "D": "a citacao do reu, independentemente de voluntariedade.",
      "E": "a audiencia de instrucao e julgamento, mediante requerimento da defesa."
    },
    "gabarito": "B",
    "comentario": "O art. 16 do CP exige a reparacao do dano ou a restituicao da coisa por ato voluntario do agente, ate o recebimento da denuncia ou da queixa, em crimes cometidos sem violencia ou grave ameaca a pessoa, para a reducao de pena de 1/3 a 2/3.",
    "fundamento": "Art. 16 do Codigo Penal.",
    "oficial": false
  },

  {
    "id": 349,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 20 CP - erro de tipo",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O erro sobre elemento constitutivo do tipo legal de crime (erro de tipo), disciplinado no art. 20 do CP, exclui o dolo, mas permite a punicao por crime culposo, se:",
    "alternativas": {
      "A": "o erro for inevitavel, ainda que preveja a lei a modalidade culposa.",
      "B": "o agente for reincidente, independentemente da previsao legal do crime culposo.",
      "C": "previsto em lei o crime culposo correspondente e o erro for evitavel (vencivel).",
      "D": "a vitima for menor de idade, independentemente de qualquer outro requisito.",
      "E": "o erro decorrer de embriaguez voluntaria, ainda que nao preexista previsao de modalidade culposa."
    },
    "gabarito": "C",
    "comentario": "O erro de tipo, quando evitavel (vencivel), exclui o dolo mas permite a punicao a titulo de culpa, desde que haja previsao legal expressa da modalidade culposa para aquele crime; se inevitavel (invencivel), exclui tanto o dolo quanto a culpa, isentando o agente de pena.",
    "fundamento": "Art. 20, caput, do Codigo Penal.",
    "oficial": false
  },

  {
    "id": 350,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 21 CP - erro de proibicao",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O erro sobre a ilicitude do fato (erro de proibicao), quando evitavel, permite a diminuicao da pena de:",
    "alternativas": {
      "A": "1/6 a 1/3.",
      "B": "1/3 a 1/2.",
      "C": "1/2 a 2/3.",
      "D": "1 a 2/3.",
      "E": "isenta integralmente de pena."
    },
    "gabarito": "A",
    "comentario": "O art. 21, caput, do CP estabelece que o erro de proibicao evitavel (vencivel) permite a diminuicao da pena de 1/6 a 1/3; ja o erro de proibicao inevitavel (invencivel) isenta de pena o agente — a alternativa E descreve, incorretamente, a consequencia do erro evitavel, quando na verdade se aplica ao inevitavel.",
    "fundamento": "Art. 21, caput, do Codigo Penal.",
    "oficial": false
  },

  {
    "id": 351,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 44 CP - substituicao por penas restritivas de direitos",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sao requisitos, entre outros, para a substituicao da pena privativa de liberdade por restritiva de direitos, nos termos do art. 44 do CP:",
    "alternativas": {
      "A": "pena aplicada nao superior a 8 anos, independentemente da natureza do crime.",
      "B": "ser o condenado primario, ainda que a pena aplicada seja superior a 4 anos e o crime cometido com violencia.",
      "C": "pena aplicada nao superior a 2 anos, exclusivamente em crimes culposos.",
      "D": "pena aplicada nao superior a 4 anos, em crime cometido sem violencia ou grave ameaca a pessoa, ou qualquer crime culposo, e nao ser o condenado reincidente em crime doloso.",
      "E": "reincidencia em crime doloso, desde que a reincidencia nao seja especifica."
    },
    "gabarito": "D",
    "comentario": "O art. 44, I, do CP exige, para a substituicao, que a pena aplicada nao seja superior a 4 anos, em crime cometido sem violencia ou grave ameaca a pessoa, ou que se trate de crime culposo, alem de o condenado nao ser reincidente em crime doloso (inciso II) e as circunstancias judiciais serem favoraveis (inciso III).",
    "fundamento": "Art. 44, I a III, do Codigo Penal.",
    "oficial": false
  },

  {
    "id": 352,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 65 CP - atenuantes genericas (idade)",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Constitui circunstancia que sempre atenua a pena, nos termos do art. 65, I, do Codigo Penal, ser o agente:",
    "alternativas": {
      "A": "menor de 18 (dezoito) anos, na data do fato, ou maior de 65 (sessenta e cinco) anos, na data da sentenca.",
      "B": "menor de 21 anos na data da sentenca, ou maior de 60 anos na data do fato.",
      "C": "maior de 18 e menor de 21 anos, exclusivamente, sem qualquer previsao para idosos.",
      "D": "maior de 70 anos, tanto na data do fato quanto na data da sentenca, cumulativamente.",
      "E": "menor de 21 (vinte e um) anos, na data do fato, ou maior de 70 (setenta) anos, na data da sentenca."
    },
    "gabarito": "E",
    "comentario": "O art. 65, I, do CP estabelece como circunstancia atenuante ser o agente menor de 21 anos, na data do fato, ou maior de 70 anos, na data da sentenca — atencao ao momento de afericao de cada idade, frequentemente trocado nas alternativas de pegadinha.",
    "fundamento": "Art. 65, I, do Codigo Penal.",
    "oficial": false
  },

  {
    "id": 353,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 61/62 CP - agravantes genericas",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Constitui circunstancia que sempre agrava a pena, quando nao integre ou qualifique o crime, ter o agente cometido o crime:",
    "alternativas": {
      "A": "por motivo futil ou torpe, ou a traicao, de emboscada, ou mediante dissimulacao ou outro recurso que dificulte a defesa do ofendido.",
      "B": "sob a influencia de multidao em tumulto, quando nao o provocou.",
      "C": "sob coacao resistivel, ou em cumprimento de ordem de autoridade superior manifestamente ilegal, quando reconhecida a ilegalidade.",
      "D": "para evitar mal maior, em situacao proxima ao estado de necessidade.",
      "E": "por relevante valor social ou moral, hipotese que configura, na verdade, atenuante e nao agravante."
    },
    "gabarito": "A",
    "comentario": "O art. 61, II, \"a\" e \"c\", do CP elenca como agravantes o motivo futil ou torpe, e a traicao, emboscada, dissimulacao ou outro recurso que dificulte ou torne impossivel a defesa do ofendido. A alternativa E descreve corretamente uma atenuante (art. 65, III, \"a\"), nao uma agravante — pegadinha classica de troca de categoria.",
    "fundamento": "Art. 61, II, do Codigo Penal.",
    "oficial": false
  },

  {
    "id": 354,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 5o CPP - instauracao do inquerito policial",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos crimes de acao penal publica, o inquerito policial sera iniciado, entre outras hipoteses, de oficio, ou mediante requisicao da autoridade judiciaria ou do Ministerio Publico, ou a requerimento:",
    "alternativas": {
      "A": "do ofendido ou de quem tiver qualidade para representa-lo.",
      "B": "exclusivo do Ministerio Publico, sendo vedada qualquer outra forma de provocacao.",
      "C": "exclusivo da autoridade policial, sem qualquer outra forma de instauracao.",
      "D": "do investigado, mediante autodenuncia formal.",
      "E": "de qualquer pessoa do povo, sem qualquer distincao quanto a legitimidade."
    },
    "gabarito": "A",
    "comentario": "O art. 5o, II, do CPP autoriza a instauracao do inquerito, nos crimes de acao publica, mediante requerimento do ofendido ou de quem tiver qualidade para representa-lo, alem da instauracao de oficio ou por requisicao da autoridade judiciaria ou do Ministerio Publico (inciso I).",
    "fundamento": "Art. 5o do Codigo de Processo Penal.",
    "oficial": false
  },

  {
    "id": 355,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 310 CPP - audiencia de custodia",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Apos a realizacao da prisao em flagrante, o preso devera ser conduzido a presenca do juiz, para a chamada audiencia de custodia, no prazo maximo de:",
    "alternativas": {
      "A": "12 horas.",
      "B": "24 horas.",
      "C": "48 horas.",
      "D": "72 horas.",
      "E": "5 dias."
    },
    "gabarito": "B",
    "comentario": "O art. 310, caput, do CPP, com redacao dada pela Lei no 13.964/2019, exige a apresentacao do preso ao juiz, para a audiencia de custodia, no prazo de ate 24 horas, contadas da lavratura do auto de prisao em flagrante.",
    "fundamento": "Art. 310, caput, do Codigo de Processo Penal.",
    "oficial": false
  },

  {
    "id": 356,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 311 CPP - vedacao a decretacao de oficio",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Apos as alteracoes promovidas pela Lei no 13.964/2019 (Pacote Anticrime), a prisao preventiva, durante a fase de investigacao:",
    "alternativas": {
      "A": "pode ser decretada de oficio pelo juiz, sempre que verificar a presenca dos requisitos legais.",
      "B": "depende exclusivamente de determinacao do Conselho Nacional de Justica.",
      "C": "somente pode ser decretada mediante representacao da autoridade policial ou por requerimento do Ministerio Publico, do querelante ou do assistente, sendo vedada a decretacao de oficio pelo juiz.",
      "D": "pode ser decretada de oficio, desde que o juiz fundamente a decisao em pelo menos dois requisitos do art. 312.",
      "E": "e sempre automatica em crimes hediondos, dispensada qualquer provocacao."
    },
    "gabarito": "C",
    "comentario": "Apos o Pacote Anticrime, o art. 311 do CPP passou a vedar expressamente a decretacao de oficio da prisao preventiva pelo juiz durante a investigacao criminal, exigindo representacao da autoridade policial ou requerimento do Ministerio Publico, do querelante ou do assistente — mudanca relevante e frequentemente cobrada em pegadinhas.",
    "fundamento": "Art. 311 do Codigo de Processo Penal, com redacao dada pela Lei no 13.964/2019.",
    "oficial": false
  },

  {
    "id": 357,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 313 CPP - hipoteses de cabimento da preventiva",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A prisao preventiva podera ser decretada, entre outras hipoteses do art. 313 do CPP, nos crimes dolosos punidos com pena privativa de liberdade maxima superior a:",
    "alternativas": {
      "A": "2 anos.",
      "B": "3 anos.",
      "C": "5 anos.",
      "D": "4 anos.",
      "E": "6 anos."
    },
    "gabarito": "D",
    "comentario": "O art. 313, I, do CPP admite a prisao preventiva nos crimes dolosos punidos com pena privativa de liberdade maxima superior a 4 anos, alem das demais hipoteses (reincidencia em crime doloso, violencia domestica com risco a medidas protetivas, ou duvida sobre a identidade civil).",
    "fundamento": "Art. 313, I, do Codigo de Processo Penal.",
    "oficial": false
  },

  {
    "id": 358,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 316 CPP - revisao periodica da preventiva",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Apos as alteracoes da Lei no 13.964/2019, o juiz que decretar a prisao preventiva devera revisar a necessidade de sua manutencao, mediante decisao fundamentada, de oficio ou mediante provocacao, no prazo maximo de:",
    "alternativas": {
      "A": "30 dias.",
      "B": "60 dias.",
      "C": "180 dias.",
      "D": "1 ano.",
      "E": "90 dias."
    },
    "gabarito": "E",
    "comentario": "O art. 316, paragrafo unico, do CPP exige a revisao da necessidade da prisao preventiva a cada 90 dias, mediante decisao fundamentada, de oficio ou mediante provocacao, sob pena de tornar a prisao ilegal, se descumprido o prazo.",
    "fundamento": "Art. 316, paragrafo unico, do Codigo de Processo Penal.",
    "oficial": false
  },

  {
    "id": 359,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 155 CPP - livre convicção motivada e elementos da investigacao",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O juiz formara sua convicção pela livre apreciacao da prova produzida em contraditorio judicial, nao podendo fundamentar sua decisao:",
    "alternativas": {
      "A": "exclusivamente nos elementos informativos colhidos na investigacao, ressalvadas as provas cautelares, nao repetiveis e antecipadas.",
      "B": "em qualquer prova pericial produzida durante a instrucao processual.",
      "C": "em depoimento de testemunhas ouvidas sob contraditorio judicial.",
      "D": "em confissao do reu, prestada em juizo na presenca de seu defensor.",
      "E": "em prova documental juntada aos autos com ciencia das partes."
    },
    "gabarito": "A",
    "comentario": "O art. 155, caput, do CPP veda ao juiz fundamentar sua decisao exclusivamente nos elementos informativos colhidos na investigacao (fase inquisitorial, sem contraditorio), ressalvando, contudo, as provas cautelares, nao repetiveis e antecipadas, que podem ser valoradas mesmo tendo sido produzidas na fase investigativa.",
    "fundamento": "Art. 155, caput, do Codigo de Processo Penal.",
    "oficial": false
  },

  {
    "id": 360,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 212 CPP - inquiricao de testemunhas",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Na inquiricao de testemunhas, o sistema adotado pelo art. 212 do CPP (apos a Lei no 11.690/2008) e o do exame direto e cruzado, segundo o qual:",
    "alternativas": {
      "A": "as perguntas sao formuladas exclusivamente pelo juiz, vedada qualquer pergunta direta das partes.",
      "B": "as perguntas sao formuladas diretamente pelas partes a testemunha, podendo o juiz complementar a inquiricao sobre pontos nao esclarecidos.",
      "C": "somente a acusacao pode formular perguntas diretamente, cabendo a defesa formula-las por intermedio do juiz.",
      "D": "as testemunhas sao inquiridas exclusivamente por escrito, mediante quesitos previamente formulados.",
      "E": "e vedada a reinquiricao de testemunha ja ouvida em fase de inquerito policial."
    },
    "gabarito": "B",
    "comentario": "O art. 212 do CPP, apos a Lei no 11.690/2008, adotou o sistema do exame direto e cruzado (\"cross examination\"), pelo qual as perguntas sao formuladas diretamente pelas partes a testemunha, cabendo ao juiz complementar a inquiricao sobre os pontos nao esclarecidos.",
    "fundamento": "Art. 212 do Codigo de Processo Penal.",
    "oficial": false
  },

  {
    "id": 361,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 5o, LXII, CF - comunicacao da prisao",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do art. 5o, LXII, da Constituicao Federal de 1988, a prisao de qualquer pessoa devera ser comunicada imediatamente:",
    "alternativas": {
      "A": "apenas ao Ministerio Publico, dispensada comunicacao a familia do preso.",
      "B": "somente ao juiz competente, vedada qualquer comunicacao a terceiros por sigilo do processo.",
      "C": "ao juiz competente e a familia do preso ou a pessoa por ele indicada.",
      "D": "exclusivamente a Defensoria Publica, independentemente da vontade do preso.",
      "E": "ao Conselho Nacional de Justica, para fins estatisticos."
    },
    "gabarito": "C",
    "comentario": "O art. 5o, LXII, da CF/1988 determina que a prisao de qualquer pessoa sera imediatamente comunicada ao juiz competente e a familia do preso ou a pessoa por ele indicada, garantia fundamental que viabiliza o controle judicial imediato e a assistencia ao preso.",
    "fundamento": "Art. 5o, LXII, da Constituicao Federal de 1988.",
    "oficial": false
  },

  {
    "id": 362,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 302 CPP - flagrante preparado (crime impossivel)",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a Sumula no 145 do STF, nao ha crime, quando a preparacao do flagrante pela policia torna impossivel a sua consumacao, hipotese conhecida como:",
    "alternativas": {
      "A": "flagrante proprio.",
      "B": "flagrante esperado.",
      "C": "flagrante prorrogado ou retardado (acao controlada), sempre licito.",
      "D": "flagrante preparado (crime de ensaio ou provocado), que configura crime impossivel.",
      "E": "flagrante ficto ou presumido."
    },
    "gabarito": "D",
    "comentario": "A Sumula 145/STF estabelece que nao ha crime quando a preparacao do flagrante pela policia torna impossivel a sua consumacao — hipotese do flagrante preparado (crime de ensaio ou provocado), distinta do flagrante esperado (licito, quando a policia apenas aguarda a pratica do crime ja planejado pelo agente, sem induzi-lo).",
    "fundamento": "Sumula no 145 do STF; art. 302 do Codigo de Processo Penal.",
    "oficial": false
  },

  {
    "id": 363,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 158-A CPP - cadeia de custodia (etapas)",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A cadeia de custodia, disciplinada pelos arts. 158-A a 158-F do CPP, compreende o rastreamento do vestigio, envolvendo etapas como reconhecimento, isolamento, fixacao, coleta, acondicionamento, transporte, recebimento, processamento, armazenamento e:",
    "alternativas": {
      "A": "leilao publico do material apreendido.",
      "B": "destruicao imediata, independentemente de qualquer registro.",
      "C": "doacao a instituicoes de ensino, sem qualquer formalidade.",
      "D": "venda a particulares, mediante autorizacao judicial.",
      "E": "descarte."
    },
    "gabarito": "E",
    "comentario": "O art. 158-A e seguintes do CPP disciplinam as etapas da cadeia de custodia, que vai do reconhecimento do vestigio ate seu descarte, passando por isolamento, fixacao, coleta, acondicionamento, transporte, recebimento, processamento e armazenamento, garantindo a rastreabilidade e a idoneidade da prova pericial.",
    "fundamento": "Arts. 158-A a 158-F do Codigo de Processo Penal.",
    "oficial": false
  },

  {
    "id": 364,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 33 CP - regimes de cumprimento de pena",
    "banca": "Instituto Avalia",
    "ano": 2025,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 33, §2o, do Codigo Penal, o condenado nao reincidente cuja pena seja superior a 4 anos e nao exceda a 8 anos podera, desde o inicio, cumprir a pena em regime:",
    "alternativas": {
      "A": "semiaberto.",
      "B": "fechado, exclusivamente.",
      "C": "aberto, independentemente de qualquer outro requisito.",
      "D": "fechado ou semiaberto, a livre escolha do condenado.",
      "E": "domiciliar, por forca de lei."
    },
    "gabarito": "A",
    "comentario": "O art. 33, §2o, \"b\", do CP estabelece que o condenado nao reincidente, cuja pena seja superior a 4 e nao exceda a 8 anos, podera, desde o inicio, cumprir a pena em regime semiaberto — regra que se soma a fixacao do regime fechado (pena superior a 8 anos) e do regime aberto (pena igual ou inferior a 4 anos, condenado nao reincidente).",
    "fundamento": "Art. 33, §2o, do Codigo Penal.",
    "oficial": false
  },

  {
    "id": 365,
    "disciplina": "Direito Penal e Processo Penal",
    "assunto": "Art. 63/64 CP - reincidencia e periodo depurador",
    "banca": "Instituto Avalia",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Verifica-se a reincidencia, nos termos do art. 63 do Codigo Penal, quando o agente comete novo crime depois de transitar em julgado a sentenca que, no Brasil ou no estrangeiro, o tenha condenado por crime anterior. Nao prevalece, todavia, a condenacao anterior para esse efeito, se entre a data do cumprimento ou extincao da pena e a infracao posterior tiver decorrido periodo de tempo superior a:",
    "alternativas": {
      "A": "2 anos.",
      "B": "5 anos, o chamado periodo depurador da reincidencia.",
      "C": "3 anos.",
      "D": "8 anos.",
      "E": "10 anos."
    },
    "gabarito": "B",
    "comentario": "O art. 64, I, do CP fixa em 5 anos o periodo depurador, contado da data do cumprimento ou extincao da pena (computado o periodo de prova da suspensao ou do livramento condicional, se nao ocorrer revogacao). Ultrapassado esse prazo, a condenacao anterior deixa de gerar reincidencia, podendo, ainda assim, ser considerada como maus antecedentes.",
    "fundamento": "Art. 64, I, do Codigo Penal.",
    "oficial": false
  },

  {
    "id": 366,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Fácil",
    "tipo": "Certo ou Errado",
    "enunciado": "Carlos trabalha, de segunda a sexta, como atendente em uma loja de roupas. Recebe salário mensal e cumpre ordens e horários definidos pela gerente. O proprietário nunca assinou a sua CTPS.\n\nNessa situação, Carlos é segurado obrigatório do RGPS na categoria de empregado, pois a falta de registro em carteira não afasta o enquadramento quando presentes não eventualidade, subordinação e onerosidade.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O enquadramento como empregado decorre da realidade da relação (trabalho não eventual, subordinado e remunerado), e não da formalidade do registro. A ausência de CTPS é irregularidade do empregador, que não retira a condição de segurado.",
    "fundamento": "Lei 8.213/91, art. 11, I, a; Decreto 3.048/99, art. 9º, I, a.",
    "oficial": false
  },
  {
    "id": 367,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Marina foi eleita diretora de uma sociedade anônima por decisão da assembleia. Ela não é subordinada a ninguém, recebe honorários mensais e jamais manteve vínculo de emprego com a companhia.\n\nNessa situação, Marina é segurada empregada da sociedade anônima, por exercer cargo de direção na empresa.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O diretor não empregado de S/A (e o membro de conselho de administração) é contribuinte individual. Só é empregado o diretor que mantém os requisitos da relação de emprego, em especial a subordinação.",
    "fundamento": "Lei 8.213/91, art. 11, V; Decreto 3.048/99, art. 9º, V.",
    "oficial": false
  },
  {
    "id": 368,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Roberto era contador com carteira assinada em uma sociedade anônima e foi promovido ao cargo de diretor. Continua cumprindo horário, submetido às ordens do presidente da companhia e recebendo salário com CTPS registrada.\n\nNessa situação, com a promoção, Roberto deixou de ser empregado e passou à condição de contribuinte individual.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O diretor que mantém a subordinação e os demais elementos da relação de emprego continua segurado empregado. O regulamento fala expressamente em empregado, \"inclusive como diretor empregado\".",
    "fundamento": "Lei 8.213/91, art. 11, I, a; Decreto 3.048/99, art. 9º, I, a.",
    "oficial": false
  },
  {
    "id": 369,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Ana foi contratada por uma empresa de trabalho temporário, nos termos da Lei 6.019/74, para atender por dois meses o aumento de vendas de uma rede de lojas, tomadora dos serviços.\n\nNessa situação, Ana é segurada empregada, e o vínculo previdenciário se estabelece com a empresa de trabalho temporário.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. Quem é contratado por empresa de trabalho temporário para atender necessidade transitória da tomadora é segurado empregado, sendo a empresa de trabalho temporário a responsável pelas obrigações previdenciárias.",
    "fundamento": "Lei 8.213/91, art. 11, I, b; Decreto 3.048/99, art. 9º, I, b.",
    "oficial": false
  },
  {
    "id": 370,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Paulo, brasileiro, foi contratado e é domiciliado no Brasil por uma empresa nacional para trabalhar na filial que ela mantém em Lisboa.\n\nNessa situação, Paulo é segurado obrigatório do RGPS, na categoria de empregado.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O brasileiro ou estrangeiro domiciliado e contratado no Brasil para trabalhar como empregado em sucursal ou agência de empresa nacional no exterior é segurado empregado.",
    "fundamento": "Lei 8.213/91, art. 11, I, c; Decreto 3.048/99, art. 9º, I, c.",
    "oficial": false
  },
  {
    "id": 371,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Fernanda, brasileira, mudou-se para Madri e lá foi contratada por uma empresa espanhola, sem qualquer vínculo com empresa brasileira ou com a União.\n\nNessa situação, Fernanda é segurada empregada obrigatória do RGPS, pois a nacionalidade brasileira basta para a filiação obrigatória.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. A nacionalidade não gera filiação obrigatória. Quem trabalha no exterior para empresa estrangeira, sem se enquadrar nas hipóteses do art. 11, não é segurado obrigatório, podendo apenas filiar-se como facultativo.",
    "fundamento": "Lei 8.213/91, arts. 11 e 13.",
    "oficial": false
  },
  {
    "id": 372,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Júlio foi nomeado para cargo exclusivamente em comissão, sem vínculo efetivo, em uma autarquia federal.\n\nNessa situação, por ser servidor público, Júlio está obrigatoriamente vinculado ao regime próprio de previdência da União, e não ao RGPS.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O servidor ocupante de cargo em comissão sem vínculo efetivo com a União, autarquias e fundações públicas federais é segurado empregado do RGPS.",
    "fundamento": "Lei 8.213/91, art. 11, I, g; Decreto 3.048/99, art. 9º, I.",
    "oficial": false
  },
  {
    "id": 373,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Sandra é servidora efetiva de um município que possui regime próprio de previdência (RPPS). Foi eleita vereadora no mesmo município.\n\nNessa situação, em relação ao mandato eletivo, Sandra não é enquadrada como segurada empregada do RGPS, pois está vinculada a regime próprio de previdência social.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O exercente de mandato eletivo é segurado empregado do RGPS somente se não estiver vinculado a regime próprio. Sendo Sandra vinculada ao RPPS, a regra não se aplica a ela.",
    "fundamento": "Lei 8.213/91, art. 11, I, j; Decreto 3.048/99, art. 9º, I.",
    "oficial": false
  },
  {
    "id": 374,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Antônio se aposentou por tempo de contribuição pelo RGPS e, meses depois, voltou a trabalhar com carteira assinada em uma padaria.\n\nNessa situação, Antônio é segurado obrigatório em relação à nova atividade e deve contribuir, mas não fará jus a nova prestação em razão dela, salvo salário-família e reabilitação profissional.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O aposentado que permanece ou retorna à atividade sujeita ao RGPS continua segurado obrigatório e contribui, mas, em regra, só tem direito a salário-família e reabilitação profissional, quando empregado.",
    "fundamento": "Lei 8.213/91, art. 11, § 3º, e art. 18, § 2º.",
    "oficial": false
  },
  {
    "id": 375,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Lucas, estudante universitário, faz estágio em empresa privada, nos termos da Lei 11.788/08, e recebe bolsa-auxílio.\n\nNessa situação, Lucas é segurado empregado da empresa concedente do estágio.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O estágio regular não cria vínculo empregatício. O estagiário não é segurado obrigatório, podendo inscrever-se e contribuir como segurado facultativo.",
    "fundamento": "Lei 11.788/08, arts. 3º e 12, § 2º; Decreto 3.048/99, art. 11.",
    "oficial": false
  },
  {
    "id": 376,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Gabriel, de 15 anos, foi contratado por uma indústria como aprendiz, com CTPS assinada e contrato de aprendizagem regular.\n\nNessa situação, Gabriel é segurado empregado, embora tenha menos de 16 anos.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. A Constituição veda o trabalho a menores de 16 anos, salvo na condição de aprendiz a partir dos 14. O aprendiz regularmente contratado é empregado e, portanto, segurado obrigatório.",
    "fundamento": "CF/88, art. 7º, XXXIII; CLT, art. 428; Decreto 3.048/99, art. 9º, I.",
    "oficial": false
  },
  {
    "id": 377,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Rafaela, de 15 anos, trabalha em uma lanchonete com horário fixo e salário, mas sem contrato de aprendizagem. Os pais autorizaram o trabalho.\n\nNessa situação, com a autorização dos pais, Rafaela pode filiar-se regularmente ao RGPS como segurada empregada.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. Abaixo de 16 anos, só é permitido o trabalho na condição de aprendiz (a partir de 14). A autorização dos pais não supre a vedação constitucional, e a filiação regular exige a idade mínima.",
    "fundamento": "CF/88, art. 7º, XXXIII; Lei 8.213/91, art. 11.",
    "oficial": false
  },
  {
    "id": 378,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Valdir foi contratado por um produtor rural pessoa física, por contrato de safra de quatro meses, para colher laranja. Cumpre horário, recebe ordens do contratante e é pago mensalmente.\n\nNessa situação, Valdir é segurado empregado, pois o art. 11 abrange o prestador de serviço urbano ou rural.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. A lei fala em prestador de serviço urbano ou rural a empresa ou equiparado, em caráter não eventual, sob subordinação e mediante remuneração. O contrato de safra é contrato por prazo determinado de empregado rural.",
    "fundamento": "Lei 8.213/91, art. 11, I, a; Lei 5.889/73.",
    "oficial": false
  },
  {
    "id": 379,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "João, pintor, foi chamado uma única vez por Dona Lúcia para pintar o muro da casa dela em dois dias. Combinou o preço da obra e trabalhou sem horário e sem receber ordens.\n\nNessa situação, João é segurado empregado de Dona Lúcia.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. Faltam não eventualidade e subordinação. O prestador de serviço eventual, sem vínculo empregatício, é contribuinte individual.",
    "fundamento": "Lei 8.213/91, art. 11, V, g; Decreto 3.048/99, art. 9º, V.",
    "oficial": false
  },
  {
    "id": 380,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Dois sócios cotistas de uma sociedade limitada administram o negócio. Um deles trabalha na gerência da empresa e retira pró-labore mensal.\n\nNessa situação, o sócio que recebe pró-labore pela atuação na gerência é segurado empregado da sociedade.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O sócio que participa da gestão e recebe pró-labore é contribuinte individual, e não empregado.",
    "fundamento": "Lei 8.213/91, art. 11, V, f; Decreto 3.048/99, art. 9º, V.",
    "oficial": false
  },
  {
    "id": 381,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Pedro é associado de uma cooperativa de trabalho de costureiros. A cooperativa o coloca para prestar serviços a diversas empresas, e ele recebe pela produção.\n\nNessa situação, Pedro é empregado da cooperativa, pois depende dela para obter trabalho.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O cooperado que presta serviços por intermédio da cooperativa de trabalho é contribuinte individual, não empregado, pois não há relação de emprego entre ele e a cooperativa.",
    "fundamento": "Lei 8.213/91, art. 11, V; Decreto 3.048/99, art. 9º, V.",
    "oficial": false
  },
  {
    "id": 382,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Hélio, brasileiro civil domiciliado em Genebra, foi lá contratado para trabalhar para a União em organismo internacional do qual o Brasil é membro efetivo. Ele não é segurado de nenhum regime previdenciário suíço.\n\nNessa situação, Hélio é segurado empregado do RGPS, ainda que domiciliado e contratado no exterior.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O brasileiro civil que trabalha para a União, no exterior, em organismos oficiais brasileiros ou internacionais dos quais o Brasil seja membro efetivo é empregado, ainda que lá domiciliado e contratado, salvo se segurado pela legislação do país do domicílio.",
    "fundamento": "Lei 8.213/91, art. 11, I, d; Decreto 3.048/99, art. 9º, I, d.",
    "oficial": false
  },
  {
    "id": 383,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Tânia, brasileira, foi contratada como secretária pela embaixada de um país estrangeiro em Brasília. Ela não é coberta por regime próprio do país de origem da embaixada.\n\nNessa situação, Tânia não é segurada obrigatória do RGPS, por trabalhar para entidade estrangeira.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O empregado de organismo oficial internacional ou estrangeiro em funcionamento no Brasil é segurado empregado, salvo quando coberto por regime próprio de previdência social.",
    "fundamento": "Lei 8.213/91, art. 11, I; Decreto 3.048/99, art. 9º, I.",
    "oficial": false
  },
  {
    "id": 384,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Lúcia, empregada com carteira assinada em uma farmácia, adoeceu e ficou incapacitada para o trabalho por 30 dias, com atestado médico.\n\nNessa situação, o INSS deve pagar o auxílio-doença a Lúcia desde o primeiro dia de afastamento da atividade.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. Ao segurado empregado, o auxílio-doença é devido a partir do 16º dia de afastamento. Nos primeiros 15 dias, cabe à empresa pagar o salário integral.",
    "fundamento": "Lei 8.213/91, art. 60, caput e § 3º.",
    "oficial": false
  },
  {
    "id": 385,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado empregado",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Marcos mantém dois empregos formais, em empresas diferentes. A soma das suas remunerações supera o limite máximo do salário de contribuição.\n\nNessa situação, por serem vínculos distintos, Marcos deve contribuir sobre o total das duas remunerações, sem limitação ao teto do salário de contribuição.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O salário de contribuição tem limite máximo, aplicado à soma das remunerações quando há atividades concomitantes. O segurado não contribui acima do teto.",
    "fundamento": "Lei 8.212/91, art. 28, §§ 3º a 5º.",
    "oficial": false
  },
  {
    "id": 386,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Fácil",
    "tipo": "Certo ou Errado",
    "enunciado": "Seu Antônio é proprietário de um sítio de 3 módulos fiscais, onde planta milho e feijão com a esposa e dois filhos maiores. A família vive da roça e não tem empregados permanentes.\n\nNessa situação, Antônio é segurado especial.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O produtor rural proprietário que explora atividade agropecuária em área de até 4 módulos fiscais, em regime de economia familiar e sem empregados permanentes, é segurado especial.",
    "fundamento": "Lei 8.213/91, art. 11, VII, a, e § 1º.",
    "oficial": false
  },
  {
    "id": 387,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Seu Osvaldo é proprietário de um imóvel rural de 6 módulos fiscais, onde cultiva soja com a família, sem empregados permanentes.\n\nNessa situação, Osvaldo é segurado especial, pois explora a terra em regime de economia familiar.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. A condição de produtor segurado especial exige exploração de área de até 4 módulos fiscais. Em área maior, o enquadramento é outro (contribuinte individual).",
    "fundamento": "Lei 8.213/91, art. 11, VII, a.",
    "oficial": false
  },
  {
    "id": 388,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Sebastião, meeiro outorgado, explora com a esposa e o filho a lavoura de mandioca de um imóvel de 2 módulos fiscais, mediante contrato de meação. Não há empregados permanentes.\n\nNessa situação, Sebastião é segurado especial.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. Parceiro e meeiro outorgados que exploram atividade agropecuária em regime de economia familiar são segurados especiais.",
    "fundamento": "Lei 8.213/91, art. 11, VII, a.",
    "oficial": false
  },
  {
    "id": 389,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Fácil",
    "tipo": "Certo ou Errado",
    "enunciado": "Josué pesca em embarcação pequena, com auxílio do filho adulto. Vende o pescado na comunidade, e a pesca é o seu principal meio de vida.\n\nNessa situação, Josué é segurado especial, na condição de pescador artesanal.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O pescador artesanal que faz da pesca profissão habitual ou principal meio de vida é segurado especial.",
    "fundamento": "Lei 8.213/91, art. 11, VII, b.",
    "oficial": false
  },
  {
    "id": 390,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Marcelo atua como pescador em traineira de uma empresa de pesca industrial. Tem carteira assinada e recebe salário.\n\nNessa situação, Marcelo é segurado especial, por ser pescador.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O pescador empregado de empresa pesqueira é segurado empregado. A condição de segurado especial é do pescador artesanal ou assemelhado, que trabalha de forma autônoma ou em regime de economia familiar.",
    "fundamento": "Lei 8.213/91, art. 11, I, a, e VII, b.",
    "oficial": false
  },
  {
    "id": 391,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Dona Rita é esposa de segurado especial, e o filho do casal, de 18 anos, também trabalha na lavoura. Comprovadamente, ambos trabalham com o grupo familiar.\n\nNessa situação, Rita e o filho também são segurados especiais.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O cônjuge ou companheiro e o filho maior de 16 anos (ou equiparado) do segurado especial, que comprovadamente trabalhem com o grupo familiar, são segurados especiais.",
    "fundamento": "Lei 8.213/91, art. 11, VII, c.",
    "oficial": false
  },
  {
    "id": 392,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Pedro, de 15 anos, ajuda os pais na roça nos fins de semana. Seus pais são segurados especiais.\n\nNessa situação, Pedro, por integrar o grupo familiar, é segurado especial independentemente da idade.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. A lei exige que o filho seja maior de 16 anos (ou equiparado) para ser segurado especial. O mero pertencimento ao grupo familiar não basta.",
    "fundamento": "Lei 8.213/91, art. 11, VII, c.",
    "oficial": false
  },
  {
    "id": 393,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Uma família proprietária de 3 módulos fiscais contratou 4 trabalhadores temporários por 20 dias na época da colheita, no mesmo ano civil, sem empregados permanentes.\n\nNessa situação, a contratação não descaracteriza a condição de segurado especial da família, porque a lei admite contratação em época de safra, até 120 pessoas/dia no ano civil.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O grupo familiar pode utilizar empregados contratados por prazo determinado em época de safra, à razão de no máximo 120 pessoas/dia no ano civil. Aqui foram 80 pessoas/dia (4 x 20).",
    "fundamento": "Lei 8.213/91, art. 11, § 7º.",
    "oficial": false
  },
  {
    "id": 394,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Um agricultor familiar, com 3 módulos fiscais, contratou durante todo o ano um empregado com carteira assinada para auxiliá-lo na lavoura.\n\nNessa situação, a contratação de empregado é compatível com a condição de segurado especial, que admite o auxílio de terceiros sem restrições.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O regime de economia familiar pressupõe a ausência de empregados permanentes. Auxílio de terceiros só é admitido a título de mútua colaboração ou por contratação temporária na safra, nos limites legais.",
    "fundamento": "Lei 8.213/91, art. 11, § 1º e § 7º.",
    "oficial": false
  },
  {
    "id": 395,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Pedro, segurado especial, é proprietário de imóvel de 3 módulos fiscais. Por contrato escrito de parceria, outorgou 40% do imóvel a outro agricultor, e ambos continuam a trabalhar na terra.\n\nNessa situação, a outorga não descaracteriza a condição de segurado especial de Pedro.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. Não descaracteriza a outorga, por contrato escrito de parceria, meação ou comodato, de até 50% de imóvel de área total não superior a 4 módulos, desde que outorgante e outorgado continuem exercendo a atividade.",
    "fundamento": "Lei 8.213/91, art. 11, § 8º, I.",
    "oficial": false
  },
  {
    "id": 396,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Uma família de segurados especiais explora, na propriedade rural, atividade turística com hospedagem, por 100 dias ao ano.\n\nNessa situação, a atividade turística não descaracteriza a condição de segurados especiais, pois não ultrapassa 120 dias por ano.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. A exploração da atividade turística da propriedade rural, inclusive com hospedagem, por não mais de 120 dias ao ano, não descaracteriza a condição.",
    "fundamento": "Lei 8.213/91, art. 11, § 8º, II.",
    "oficial": false
  },
  {
    "id": 397,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Seu José, segurado especial, trabalhou como pedreiro para uma construtora por 90 dias, corridos ou não, no período de entressafra do ano civil.\n\nNessa situação, José não perde a condição de segurado especial em razão dessa atividade remunerada.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. Não é excluído o membro do grupo familiar que exerce atividade remunerada em período de entressafra ou do defeso, por no máximo 120 dias, corridos ou intercalados, no ano civil.",
    "fundamento": "Lei 8.213/91, art. 11, § 9º, III.",
    "oficial": false
  },
  {
    "id": 398,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Seu Manoel, segurado especial, trabalhou 150 dias no ano civil como pedreiro para uma construtora, em período de entressafra.\n\nNessa situação, por se tratar de entressafra, Manoel mantém integralmente a condição de segurado especial, ainda que tenha trabalhado além de 120 dias.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O limite para atividade remunerada em entressafra ou defeso é de 120 dias no ano civil. Ultrapassado esse prazo, deixa de haver a ressalva e ocorre a exclusão da condição de segurado especial.",
    "fundamento": "Lei 8.213/91, art. 11, §§ 9º, III, e 10.",
    "oficial": false
  },
  {
    "id": 399,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Raimundo é segurado especial no município X, onde cultiva sua roça. Foi eleito vereador do mesmo município X.\n\nNessa situação, o exercício do mandato de vereador no município em que desenvolve a atividade rural não retira a condição de segurado especial de Raimundo.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O exercício de mandato de vereador do município em que desenvolva a atividade rural não descaracteriza a condição de segurado especial.",
    "fundamento": "Lei 8.213/91, art. 11, § 9º, V.",
    "oficial": false
  },
  {
    "id": 400,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Antônio, segurado especial no município X, foi eleito vereador do município vizinho Y.\n\nNessa situação, o mandato em município diferente daquele em que desenvolve a atividade rural não impede a manutenção da condição de segurado especial.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. A ressalva legal vale apenas para o mandato de vereador do município em que o segurado desenvolve a atividade rural. Em outro município, o segurado se enquadra em categoria diversa e deixa de ser especial.",
    "fundamento": "Lei 8.213/91, art. 11, §§ 9º, V, e 10.",
    "oficial": false
  },
  {
    "id": 401,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Luzia cultiva hortaliças com a família em área de 2 módulos fiscais e também é proprietária de uma loja de materiais de construção, da qual retira renda regular.\n\nNessa situação, Luzia continua sendo segurada especial, pois a renda do comércio é complementar à atividade rural.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. Não é segurado especial o membro do grupo familiar que possui outra fonte de rendimento, ressalvadas as exceções legais. O comércio próprio não está entre elas.",
    "fundamento": "Lei 8.213/91, art. 11, § 9º.",
    "oficial": false
  },
  {
    "id": 402,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Ana é segurada especial e recebe pensão por morte do RGPS em valor superior ao do menor benefício de prestação continuada da Previdência Social.\n\nNessa situação, o recebimento dessa pensão não afeta a condição de segurada especial de Ana.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. A pensão por morte, o auxílio-acidente ou o auxílio-reclusão só são admitidos sem perda da condição se o valor não superar o do menor benefício de prestação continuada.",
    "fundamento": "Lei 8.213/91, art. 11, § 9º, I.",
    "oficial": false
  },
  {
    "id": 403,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Valmir é segurado especial e vende toda a sua produção rural a um frigorífico, pessoa jurídica.\n\nNessa situação, o segurado especial contribui obrigatoriamente com 20% sobre o valor do salário mínimo mensal, independentemente da comercialização da produção.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. A contribuição do segurado especial incide sobre a receita bruta da comercialização da produção (1,2% mais 0,1% para o SAT, total 1,3%), e não sobre o salário mínimo. Sendo o adquirente pessoa jurídica, ele é responsável por reter e recolher.",
    "fundamento": "Lei 8.212/91, arts. 25 e 30, III.",
    "oficial": false
  },
  {
    "id": 404,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Maria, de 55 anos, trabalha desde jovem na lavoura em regime de economia familiar, com 18 anos de atividade rural comprovada. Requereu aposentadoria por idade.\n\nNessa situação, Maria faz jus à aposentadoria por idade como segurada especial, no valor de um salário mínimo, com idade reduzida em 5 anos em relação à urbana.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O trabalhador rural em economia familiar tem idade reduzida (60 anos para o homem e 55 para a mulher) e precisa comprovar 15 anos de atividade rural. O benefício, nessa modalidade, é de um salário mínimo.",
    "fundamento": "CF/88, art. 201, § 7º, II; Lei 8.213/91, arts. 39, I, e 48, §§ 1º e 2º.",
    "oficial": false
  },
  {
    "id": 405,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado especial",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Joana é segurada especial, está grávida e, nos 10 meses imediatamente anteriores ao parto, exerceu atividade rural, mesmo de forma descontínua.\n\nNessa situação, para receber o salário-maternidade, Joana precisa comprovar o recolhimento de 12 contribuições mensais.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. A segurada especial deve comprovar o exercício de atividade rural nos 10 meses imediatamente anteriores ao início do benefício, mesmo que de forma descontínua. Não se exige recolhimento de contribuições.",
    "fundamento": "Lei 8.213/91, art. 39, parágrafo único, e art. 25, III.",
    "oficial": false
  },
  {
    "id": 406,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Fácil",
    "tipo": "Certo ou Errado",
    "enunciado": "Helena trabalha cinco dias por semana, com salário mensal e horário fixo, como cozinheira na residência de uma família, em atividade sem fins lucrativos.\n\nNessa situação, Helena é empregada doméstica.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. Doméstico é quem presta serviço contínuo, subordinado, oneroso e pessoal, de finalidade não lucrativa, no âmbito residencial, por mais de dois dias por semana.",
    "fundamento": "LC 150/15, art. 1º; Decreto 3.048/99, art. 9º, II.",
    "oficial": false
  },
  {
    "id": 407,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Joana faz faxina na casa de Dr. Paulo às terças e quintas, recebendo por dia de trabalho. Só trabalha duas vezes por semana nessa residência.\n\nNessa situação, Joana é contribuinte individual, e não empregada doméstica.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. A diarista que trabalha até dois dias por semana na mesma residência não é empregada doméstica. É contribuinte individual.",
    "fundamento": "LC 150/15, art. 1º; Lei 8.213/91, art. 11, V.",
    "oficial": false
  },
  {
    "id": 408,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Mônica faz faxina três dias por semana, sempre na mesma residência, com pagamento mensal e horário combinado.\n\nNessa situação, Mônica é empregada doméstica.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. Prestando serviço por mais de dois dias por semana, de forma contínua, subordinada e onerosa, no âmbito residencial, ela é empregada doméstica.",
    "fundamento": "LC 150/15, art. 1º.",
    "oficial": false
  },
  {
    "id": 409,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Seu Ademir é caseiro de um sítio de lazer que uma família usa nos fins de semana. Não há qualquer exploração econômica, e ele trabalha diariamente, com salário e subordinação.\n\nNessa situação, Seu Ademir é empregado doméstico.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. A finalidade não lucrativa e o âmbito residencial (o sítio de lazer da família) caracterizam o trabalho doméstico, inclusive para o caseiro.",
    "fundamento": "LC 150/15, art. 1º; Decreto 3.048/99, art. 9º, II.",
    "oficial": false
  },
  {
    "id": 410,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Seu Raul é caseiro de uma fazenda em que o proprietário produz e comercializa gado e grãos. Mora no local, recebe salário e cumpre ordens.\n\nNessa situação, Seu Raul é empregado doméstico, pois exerce a função de caseiro.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. Há atividade com fim lucrativo. Falta a finalidade não lucrativa do trabalho doméstico, e Raul é empregado (rural) do empreendimento.",
    "fundamento": "LC 150/15, art. 1º; Lei 8.213/91, art. 11, I, a.",
    "oficial": false
  },
  {
    "id": 411,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Larissa, de 17 anos, foi contratada por uma família para trabalhar como babá, com salário e horário fixo, todos os dias da semana.\n\nNessa situação, a contratação de Larissa como empregada doméstica é vedada pela legislação, em razão da idade.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. É vedada a contratação de menor de 18 anos para o trabalho doméstico, conforme a Convenção 182 da OIT e o Decreto 6.481/08 (lista TIP).",
    "fundamento": "LC 150/15, art. 1º, parágrafo único.",
    "oficial": false
  },
  {
    "id": 412,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Renato dirige diariamente o veículo da empresa de seu empregador, levando executivos a reuniões. É pago mensalmente e cumpre ordens.\n\nNessa situação, Renato é empregado doméstico, pois exerce a função de motorista.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. Como serve à atividade empresarial, falta a finalidade não lucrativa e o âmbito residencial. Renato é segurado empregado, e não doméstico.",
    "fundamento": "LC 150/15, art. 1º; Lei 8.213/91, art. 11, I, a.",
    "oficial": false
  },
  {
    "id": 413,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Dona Zélia, cuidadora de idosos, é contratada por uma empresa especializada em home care, que a aloca para atender a idosa na residência da cliente, com salário pago pela empresa.\n\nNessa situação, Dona Zélia é empregada doméstica da idosa atendida.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O vínculo é com a empresa prestadora do serviço, que tem finalidade lucrativa. Dona Zélia é empregada da empresa. Doméstica seria a cuidadora contratada diretamente pela pessoa ou família.",
    "fundamento": "LC 150/15, art. 1º; Lei 8.213/91, art. 11, I, a.",
    "oficial": false
  },
  {
    "id": 414,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Uma família contratou Rita como empregada doméstica, de segunda a sexta, com registro e salário mensal.\n\nNessa situação, o empregador doméstico deve contribuir à Previdência com 8% sobre a remuneração do empregado e 0,8% para o financiamento do seguro contra acidentes do trabalho.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. A contribuição patronal do empregador doméstico é de 8% sobre a remuneração, somada a 0,8% de seguro contra acidentes de trabalho, no regime unificado (Simples Doméstico).",
    "fundamento": "LC 150/15, art. 34.",
    "oficial": false
  },
  {
    "id": 415,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Cláudia, empregada doméstica com registro, adoeceu e ficou incapacitada para o trabalho por 40 dias, conforme atestado médico.\n\nNessa situação, os primeiros 15 dias de afastamento devem ser pagos pelo empregador doméstico, cabendo ao INSS o auxílio-doença a partir do 16º dia.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. A regra dos 15 dias é do segurado empregado. Para os demais segurados, inclusive a doméstica, o auxílio-doença é devido a partir da data do início da incapacidade, pago pelo INSS.",
    "fundamento": "Lei 8.213/91, art. 60, caput.",
    "oficial": false
  },
  {
    "id": 416,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Fácil",
    "tipo": "Certo ou Errado",
    "enunciado": "Wellington, sindicalizado, é escalado pelo órgão gestor de mão de obra para estivar navios em porto organizado. Trabalha em dias diferentes para vários operadores portuários, sem vínculo empregatício.\n\nNessa situação, Wellington é trabalhador avulso.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. Avulso é quem presta serviço, a diversas empresas, sem vínculo empregatício, com intermediação do órgão gestor de mão de obra (portuário) ou do sindicato. A estiva é atividade típica de avulso.",
    "fundamento": "Lei 8.213/91, art. 11, VI; Decreto 3.048/99, art. 9º, VI.",
    "oficial": false
  },
  {
    "id": 417,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Edson ensaca café, em diversos armazéns, sem vínculo empregatício, sempre por intermédio do sindicato da categoria, que o escala para cada tomador.\n\nNessa situação, Edson é trabalhador avulso.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O ensacador de café, cacau, sal e similares, que presta serviço a diversas empresas por intermédio do sindicato, é trabalhador avulso.",
    "fundamento": "Lei 8.213/91, art. 11, VI; Decreto 3.048/99, art. 9º, VI.",
    "oficial": false
  },
  {
    "id": 418,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Cíntia foi contratada por um operador portuário, por prazo indeterminado, como conferente de carga, com CTPS assinada e vínculo de emprego.\n\nNessa situação, Cíntia é trabalhadora avulsa, porque exerce atividade portuária típica.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O avulso não tem vínculo empregatício. A natureza da atividade portuária não basta: com vínculo empregatício por prazo indeterminado, Cíntia é segurada empregada.",
    "fundamento": "Lei 8.213/91, art. 11, I, a, e VI; Lei 12.815/13, art. 40.",
    "oficial": false
  },
  {
    "id": 419,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Carlos faz carga e descarga de mercadorias em caminhões. É procurado diretamente por diferentes comerciantes, sem intermediação de sindicato ou de órgão gestor de mão de obra.\n\nNessa situação, Carlos é trabalhador avulso, pois presta serviço a diversas empresas sem vínculo empregatício.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. A intermediação do sindicato ou do órgão gestor de mão de obra é requisito do trabalhador avulso. Sem ela, Carlos é contribuinte individual (autônomo ou eventual).",
    "fundamento": "Decreto 3.048/99, art. 9º, VI; Lei 12.023/09.",
    "oficial": false
  },
  {
    "id": 420,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Operadores portuários utilizam avulsos escalados pelo órgão gestor de mão de obra (OGMO). Cabe ao OGMO efetuar o pagamento da remuneração dos avulsos.\n\nNessa situação, o OGMO é obrigado a recolher a contribuição previdenciária dos avulsos, descontada da remuneração deles.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O operador portuário e o órgão gestor de mão de obra ficam obrigados a recolher a contribuição do trabalhador portuário avulso, descontando-a da remuneração.",
    "fundamento": "Lei 8.212/91, art. 30, VI; Lei 12.815/13, art. 33.",
    "oficial": false
  },
  {
    "id": 421,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Mauro, trabalhador avulso portuário, adoeceu e ficou incapacitado por 30 dias.\n\nNessa situação, o auxílio-doença é devido a Mauro desde o início da incapacidade, pois a regra dos 15 dias a cargo da empresa vale apenas para o empregado.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. Somente para o segurado empregado o auxílio-doença é devido a partir do 16º dia. Para os demais, inclusive o avulso, é devido a partir do início da incapacidade.",
    "fundamento": "Lei 8.213/91, art. 60, caput.",
    "oficial": false
  },
  {
    "id": 422,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Fábio, trabalhador avulso, sofreu acidente de trabalho e, após a alta, ficou com sequela que reduz a sua capacidade para o trabalho que habitualmente exercia.\n\nNessa situação, Fábio não faz jus ao auxílio-acidente, por não ser segurado empregado.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O auxílio-acidente é devido ao empregado, ao avulso e ao segurado especial, entre outros. O avulso tem direito ao benefício.",
    "fundamento": "Lei 8.213/91, art. 18, § 1º, e art. 86.",
    "oficial": false
  },
  {
    "id": 423,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Fabiana, trabalhadora avulsa portuária, deu à luz.\n\nNessa situação, o salário-maternidade de Fabiana é pago diretamente pela Previdência Social.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. À trabalhadora avulsa o salário-maternidade é pago diretamente pela Previdência Social.",
    "fundamento": "Lei 8.213/91, arts. 71 e 72, § 3º.",
    "oficial": false
  },
  {
    "id": 424,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Roberto, conferente de carga em porto, não é filiado a sindicato, mas é escalado pelo órgão gestor de mão de obra e atende diversos operadores sem vínculo empregatício.\n\nNessa situação, Roberto não pode ser considerado trabalhador avulso, porque não é sindicalizado.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O avulso pode ser sindicalizado ou não. O que o caracteriza é a prestação a diversas empresas, sem vínculo empregatício, com a intermediação obrigatória do órgão gestor ou do sindicato.",
    "fundamento": "Decreto 3.048/99, art. 9º, VI.",
    "oficial": false
  },
  {
    "id": 425,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Um operador portuário utilizou avulsos escalados pelo OGMO ao longo do mês e lhes remunerou, por intermédio do OGMO.\n\nNessa situação, a empresa tomadora deve recolher contribuição de 20% sobre o total das remunerações pagas ou creditadas aos avulsos que lhe prestaram serviços.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. A contribuição da empresa é de 20% sobre o total das remunerações pagas ou creditadas, no decorrer do mês, aos segurados empregados e trabalhadores avulsos que lhe prestem serviços.",
    "fundamento": "Lei 8.212/91, art. 22, I.",
    "oficial": false
  },

  {
    "id": 426,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Fácil",
    "tipo": "Certo ou Errado",
    "enunciado": "Dr. Henrique é dentista e atende pacientes em consultório próprio, sem horário imposto por ninguém e sem vínculo com qualquer empresa.\n\nNessa situação, Henrique é segurado obrigatório do RGPS, na categoria de contribuinte individual.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. A pessoa física que exerce, por conta própria, atividade econômica de natureza urbana, com fins lucrativos ou não, é contribuinte individual.",
    "fundamento": "Lei 8.213/91, art. 11, V, h; Decreto 3.048/99, art. 9º, V.",
    "oficial": false
  },
  {
    "id": 427,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Rosana é titular de firma individual urbana, sem empregados, e administra pessoalmente o seu negócio de venda de calçados.\n\nNessa situação, Rosana é segurada empregada da própria firma, pois trabalha diariamente nela.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O titular de firma individual, urbana ou rural, é contribuinte individual. Não há subordinação nem contrato de trabalho consigo mesmo.",
    "fundamento": "Lei 8.213/91, art. 11, V, f; Decreto 3.048/99, art. 9º, V.",
    "oficial": false
  },
  {
    "id": 428,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Dois irmãos são sócios cotistas de uma sociedade limitada. Um deles não participa da gestão da empresa e não recebe nenhuma remuneração decorrente de trabalho nela. Apenas recebe a sua parte nos lucros.\n\nNessa situação, esse sócio cotista não é segurado obrigatório do RGPS como contribuinte individual por causa dessa condição de sócio.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O sócio cotista só é contribuinte individual se participar da gestão ou receber remuneração decorrente de seu trabalho na empresa. Distribuição de lucros não gera filiação.",
    "fundamento": "Lei 8.213/91, art. 11, V, f; Decreto 3.048/99, art. 9º, V.",
    "oficial": false
  },
  {
    "id": 429,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Frei Joaquim é membro de uma ordem religiosa e se dedica integralmente às atividades religiosas da congregação.\n\nNessa situação, Joaquim é segurado empregado da ordem religiosa, porque dela recebe o sustento.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O ministro de confissão religiosa e o membro de instituto de vida consagrada, de congregação ou de ordem religiosa são contribuintes individuais.",
    "fundamento": "Lei 8.213/91, art. 11, V, c; Decreto 3.048/99, art. 9º, V.",
    "oficial": false
  },
  {
    "id": 430,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Osvaldo é proprietário de uma fazenda de 6 módulos fiscais, onde explora atividade agropecuária com a ajuda da família e de alguns trabalhadores.\n\nNessa situação, Osvaldo é contribuinte individual, pois a área explorada supera 4 módulos fiscais.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. A pessoa física, proprietária ou não, que explora atividade agropecuária em área superior a 4 módulos fiscais é contribuinte individual.",
    "fundamento": "Lei 8.213/91, art. 11, V, a; Decreto 3.048/99, art. 9º, V.",
    "oficial": false
  },
  {
    "id": 431,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Mário é proprietário de um sítio de 3 módulos fiscais e mantém, durante todo o ano, dois empregados permanentes para ajudá-lo na lavoura.\n\nNessa situação, Mário é contribuinte individual, e não segurado especial.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. Mesmo em área de até 4 módulos fiscais, quem explora atividade agropecuária com o auxílio de empregados, fora das hipóteses permitidas, é contribuinte individual. A presença de empregados permanentes é incompatível com a economia familiar.",
    "fundamento": "Lei 8.213/91, art. 11, V, a, e § 1º.",
    "oficial": false
  },
  {
    "id": 432,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Sérgio explora, por conta própria, uma área de garimpo, trabalhando sozinho, sem empregados e sem prepostos.\n\nNessa situação, Sérgio é segurado especial, pois trabalha sem o auxílio de empregados.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. Quem explora atividade de extração mineral (garimpo), em caráter permanente ou temporário, com ou sem o auxílio de empregados, é contribuinte individual.",
    "fundamento": "Lei 8.213/91, art. 11, V, b; Decreto 3.048/99, art. 9º, V.",
    "oficial": false
  },
  {
    "id": 433,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Camila está cursando residência médica em hospital público e recebe bolsa nos termos da Lei 6.932/81.\n\nNessa situação, Camila é segurada empregada do hospital, por prestar serviços com subordinação.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O médico residente é segurado obrigatório do RGPS na categoria de contribuinte individual, nos termos da Lei 6.932/81.",
    "fundamento": "Lei 8.212/91, art. 12, V; Decreto 3.048/99, art. 9º, V; Lei 6.932/81.",
    "oficial": false
  },
  {
    "id": 434,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "O condomínio de um edifício elegeu Sr. Paulo como síndico e passou a pagar-lhe remuneração mensal pela administração.\n\nNessa situação, Paulo é segurado facultativo, pois o cargo de síndico é eletivo.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O síndico ou administrador eleito para atividade de direção condominial, quando recebe remuneração, é contribuinte individual. Seria facultativo se não fosse remunerado.",
    "fundamento": "Lei 8.213/91, art. 11, V, f; Decreto 3.048/99, art. 9º, V.",
    "oficial": false
  },
  {
    "id": 435,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Lauro é eletricista autônomo. Eventualmente, duas empresas diferentes o chamam para consertos pontuais, sem qualquer habitualidade ou subordinação.\n\nNessa situação, Lauro é contribuinte individual.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. Quem presta serviço de natureza urbana ou rural, em caráter eventual, a uma ou mais empresas, sem relação de emprego, é contribuinte individual.",
    "fundamento": "Lei 8.213/91, art. 11, V, g; Decreto 3.048/99, art. 9º, V.",
    "oficial": false
  },
  {
    "id": 436,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "A empresa Alfa Ltda. contratou os serviços de um engenheiro autônomo, pessoa física, e lhe pagou remuneração mensal pelo trabalho.\n\nNessa situação, a empresa deve descontar 11% da remuneração do contribuinte individual (observado o teto) e recolher o valor com a contribuição a seu cargo até o dia 20 do mês seguinte.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. A empresa é obrigada a arrecadar a contribuição do contribuinte individual a seu serviço, descontando-a da remuneração, e a recolhê-la juntamente com a sua até o dia 20 do mês seguinte.",
    "fundamento": "Lei 10.666/03, art. 4º; Lei 8.212/91, art. 30.",
    "oficial": false
  },
  {
    "id": 437,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Dona Marta, pessoa física, contratou um pintor autônomo para pintar o interior de sua casa. Pagou-lhe o valor da obra.\n\nNessa situação, Dona Marta, como tomadora pessoa física, é responsável por descontar e recolher a contribuição do pintor.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. A obrigação de reter e recolher recai sobre a empresa. Quando o serviço é prestado a pessoa física, o contribuinte individual recolhe a contribuição por iniciativa própria.",
    "fundamento": "Lei 8.212/91, art. 30, II; Lei 10.666/03, art. 4º.",
    "oficial": false
  },
  {
    "id": 438,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Rui, contribuinte individual, recolheu 11% sobre o salário mínimo (plano simplificado). Anos depois, quer contar esse tempo para fins de contagem recíproca em um regime próprio.\n\nNessa situação, Rui precisa complementar a contribuição, recolhendo a diferença entre o percentual pago e 20%, sobre o limite mínimo, com juros moratórios.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. Quem contribuiu pelo plano simplificado (11%) e quiser contar esse tempo para contagem recíproca (ou aposentadoria por tempo de contribuição) deve complementar a diferença até 20%, acrescida de juros.",
    "fundamento": "Lei 8.212/91, art. 21, §§ 2º e 3º.",
    "oficial": false
  },
  {
    "id": 439,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Beto é microempreendedor individual (MEI) e recolhe mensalmente o DAS, que inclui a contribuição previdenciária calculada sobre o salário mínimo.\n\nNessa situação, Beto é contribuinte individual, e a alíquota previdenciária do MEI é de 5% sobre o salário mínimo.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O MEI é contribuinte individual e contribui com 5% do limite mínimo do salário de contribuição, no regime simplificado do Simples Nacional.",
    "fundamento": "Lei 8.212/91, art. 21, § 2º, I; LC 123/06, art. 18-A.",
    "oficial": false
  },
  {
    "id": 440,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Teresa se inscreveu como contribuinte individual em junho de 2026 e pagou em dia essa primeira contribuição. Depois, recolheu em atraso as contribuições de janeiro a maio de 2026, em que já trabalhava por conta própria.\n\nNessa situação, essas contribuições em atraso, de competências anteriores, serão consideradas para fins de carência.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. Para o contribuinte individual, a carência conta a partir do pagamento da primeira contribuição sem atraso, não sendo consideradas as recolhidas em atraso referentes a competências anteriores.",
    "fundamento": "Lei 8.213/91, art. 27, II.",
    "oficial": false
  },
  {
    "id": 441,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Álvaro se aposentou por idade pelo RGPS e depois voltou a trabalhar como profissional autônomo.\n\nNessa situação, Álvaro é segurado obrigatório do RGPS em relação à nova atividade e deve contribuir.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O aposentado pelo RGPS que permanecer em atividade sujeita ao regime, ou a ele retornar, é segurado obrigatório e deve contribuir.",
    "fundamento": "Lei 8.213/91, art. 11, § 3º.",
    "oficial": false
  },
  {
    "id": 442,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Heloísa é advogada autônoma, tem três filhos menores e recebe remuneração baixa.\n\nNessa situação, por ser contribuinte individual com baixa renda, Heloísa faz jus ao salário-família.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O salário-família é devido ao segurado empregado (inclusive o doméstico) e ao trabalhador avulso, e não ao contribuinte individual.",
    "fundamento": "Lei 8.213/91, art. 65.",
    "oficial": false
  },
  {
    "id": 443,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Fábio, contribuinte individual, tem 8 contribuições mensais pagas em dia e adoeceu de doença comum, sem acidente e sem se enquadrar na lista de doenças graves que dispensam carência.\n\nNessa situação, Fábio não preenche a carência exigida para o auxílio por incapacidade temporária (auxílio-doença).",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. A carência do auxílio-doença é de 12 contribuições mensais, dispensada somente em casos como acidente de qualquer natureza, doença profissional ou do trabalho e doenças graves listadas.",
    "fundamento": "Lei 8.213/91, arts. 25, I, e 26, II.",
    "oficial": false
  },
  {
    "id": 444,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Lia, contribuinte individual, tem 7 contribuições mensais pagas e teve seu parto antecipado em 3 meses.\n\nNessa situação, a carência do salário-maternidade (10 contribuições) não é reduzida pelo parto antecipado, de modo que Lia não faz jus ao benefício.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. Ocorrendo parto antecipado, a carência é reduzida em número de contribuições equivalente ao número de meses de antecipação. Com 3 meses de antecipação, a carência cai para 7, que Lia possui.",
    "fundamento": "Lei 8.213/91, art. 25, III e parágrafo único.",
    "oficial": false
  },
  {
    "id": 445,
    "disciplina": "Direito Previdenciário",
    "assunto": "Contribuinte individual",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Júlio, contribuinte individual, contribuiu por 5 anos (60 contribuições mensais) e deixou de recolher as contribuições. Ele não recebe benefício e não exerce atividade que o enquadre em outra categoria.\n\nNessa situação, quinze meses após a última contribuição, Júlio ainda manteria a qualidade de segurado, por ter menos de 120 contribuições mensais.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O prazo geral de manutenção da qualidade de segurado após cessar as contribuições é de até 12 meses. A prorrogação para 24 meses exige mais de 120 contribuições sem perda da qualidade, o que Júlio não tem.",
    "fundamento": "Lei 8.213/91, art. 15, II e § 1º.",
    "oficial": false
  },
  {
    "id": 446,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Fácil",
    "tipo": "Certo ou Errado",
    "enunciado": "Joana é dona de casa, nunca trabalhou fora e não possui renda própria. Ela decide contribuir voluntariamente para a Previdência.\n\nNessa situação, Joana pode filiar-se ao RGPS como segurada facultativa.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. É segurado facultativo o maior de 14 anos que se filia ao RGPS mediante contribuição, desde que não incluído como segurado obrigatório. A dona de casa é exemplo clássico.",
    "fundamento": "Lei 8.213/91, art. 13; Decreto 3.048/99, art. 11.",
    "oficial": false
  },
  {
    "id": 447,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Tiago, de 14 anos, é estudante, não trabalha e quer contribuir para a Previdência por conta própria.\n\nNessa situação, Tiago pode inscrever-se como segurado facultativo, pois já completou a idade mínima.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. A idade mínima para a filiação como segurado facultativo é 14 anos completos.",
    "fundamento": "Lei 8.213/91, art. 13.",
    "oficial": false
  },
  {
    "id": 448,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Bia tem 13 anos, é estudante e quer contribuir para o RGPS por conta própria.\n\nNessa situação, Bia pode filiar-se como segurada facultativa, bastando a autorização dos pais.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. É segurado facultativo o maior de 14 anos. Aos 13 anos não há filiação, mesmo com autorização dos pais.",
    "fundamento": "Lei 8.213/91, art. 13.",
    "oficial": false
  },
  {
    "id": 449,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Sr. Valter é síndico de um condomínio. A assembleia dispensou o pagamento de qualquer remuneração pelo cargo, e ele não exerce nenhuma outra atividade.\n\nNessa situação, Valter pode filiar-se como segurado facultativo.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O síndico de condomínio, quando não remunerado, e que não exerça atividade que o torne segurado obrigatório, pode filiar-se como facultativo.",
    "fundamento": "Decreto 3.048/99, art. 11, § 1º.",
    "oficial": false
  },
  {
    "id": 450,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Dra. Sônia é servidora efetiva do estado, participante do regime próprio de previdência (RPPS), e deseja também contribuir ao RGPS como facultativa.\n\nNessa situação, Sônia pode se inscrever no RGPS como segurada facultativa, bastando recolher a contribuição.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. A Constituição veda a filiação ao RGPS, na qualidade de segurado facultativo, de pessoa participante de regime próprio de previdência social.",
    "fundamento": "CF/88, art. 201, § 5º; Lei 8.213/91, art. 13.",
    "oficial": false
  },
  {
    "id": 451,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Ricardo é brasileiro, mora e trabalha no exterior para empresa estrangeira e não está vinculado a nenhum regime previdenciário. Quer contribuir ao RGPS.\n\nNessa situação, Ricardo pode filiar-se como segurado facultativo.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O brasileiro residente ou domiciliado no exterior, desde que não vinculado a regime previdenciário, pode filiar-se como segurado facultativo.",
    "fundamento": "Decreto 3.048/99, art. 11, § 1º.",
    "oficial": false
  },
  {
    "id": 452,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Eliane trabalhou 6 anos como empregada, foi dispensada e não exerce mais nenhuma atividade. Quer manter-se filiada ao RGPS.\n\nNessa situação, Eliane pode contribuir como segurada facultativa.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. Quem deixou de ser segurado obrigatório e não exerce atividade que o enquadre nessa condição pode manter-se filiado como facultativo.",
    "fundamento": "Decreto 3.048/99, art. 11, § 1º.",
    "oficial": false
  },
  {
    "id": 453,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Letícia, segurada facultativa, pretende recolher sobre um valor inferior ao salário mínimo para pagar menos.\n\nNessa situação, o salário de contribuição do facultativo pode ser livremente fixado por ele, inclusive abaixo do salário mínimo.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O salário de contribuição do facultativo é o valor por ele declarado, mas observados os limites mínimo (salário mínimo) e máximo (teto) do RGPS.",
    "fundamento": "Lei 8.212/91, arts. 14 e 28, IV.",
    "oficial": false
  },
  {
    "id": 454,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Dona Clara, dona de casa, pertence a família de baixa renda inscrita no CadÚnico, com renda familiar de até 2 salários mínimos. Ela se dedica exclusivamente ao trabalho doméstico em sua residência e não tem renda própria.\n\nNessa situação, Clara pode optar pela alíquota de 5% sobre o salário mínimo, como segurada facultativa de baixa renda.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. A alíquota de 5% é aplicável ao facultativo sem renda própria que se dedique exclusivamente ao trabalho doméstico no âmbito de sua residência, em família de baixa renda (CadÚnico e renda de até 2 salários mínimos).",
    "fundamento": "Lei 8.212/91, art. 21, § 2º, II, b.",
    "oficial": false
  },
  {
    "id": 455,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Débora é dona de casa, mas também trabalha como diarista de segunda a quinta, o que lhe gera renda própria. A família tem renda inferior a 2 salários mínimos.\n\nNessa situação, Débora pode contribuir com a alíquota de 5%, pois sua família é de baixa renda.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. A alíquota de 5% exige dedicação exclusiva ao trabalho doméstico em sua residência e ausência de renda própria. Débora tem renda como diarista (contribuinte individual).",
    "fundamento": "Lei 8.212/91, art. 21, § 2º, II, b.",
    "oficial": false
  },
  {
    "id": 456,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Márcio, segurado facultativo, deixou de recolher as contribuições e está sem contribuir há 8 meses.\n\nNessa situação, Márcio já perdeu a qualidade de segurado, pois o prazo de manutenção para o facultativo é de 6 meses.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O segurado facultativo mantém a qualidade por até 6 meses após a cessação das contribuições. Passado esse prazo (8 meses), perdeu a qualidade.",
    "fundamento": "Lei 8.213/91, art. 15, VI.",
    "oficial": false
  },
  {
    "id": 457,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Nilza, que se inscreveu hoje como facultativa, deseja pagar contribuições referentes aos últimos 3 anos, para ter tempo retroativo, alegando que já poderia ter se filiado antes.\n\nNessa situação, a filiação do facultativo ocorre a partir da inscrição e do primeiro recolhimento, não sendo possível a filiação retroativa.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O segurado facultativo não pode recolher retroativamente contribuições de períodos em que não estava inscrito. A filiação se dá com a inscrição e o primeiro pagamento.",
    "fundamento": "Lei 8.213/91, art. 13; Decreto 3.048/99, art. 20.",
    "oficial": false
  },
  {
    "id": 458,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Roberta, segurada facultativa, sofreu um acidente doméstico e ficou com sequela que reduz sua capacidade para o trabalho.\n\nNessa situação, Roberta faz jus ao auxílio-acidente, benefício devido a todos os segurados que sofram redução da capacidade.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O auxílio-acidente só é devido ao empregado, ao empregado doméstico, ao trabalhador avulso e ao segurado especial, não ao facultativo nem ao contribuinte individual.",
    "fundamento": "Lei 8.213/91, art. 18, § 1º.",
    "oficial": false
  },
  {
    "id": 459,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Ilda é segurada facultativa, tem dois filhos pequenos e baixa renda familiar.\n\nNessa situação, Ilda faz jus ao salário-família, por ser segurada de baixa renda com filhos menores.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O salário-família é devido ao empregado (inclusive o doméstico) e ao trabalhador avulso. O facultativo não tem direito a ele.",
    "fundamento": "Lei 8.213/91, art. 65.",
    "oficial": false
  },
  {
    "id": 460,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Elisa, segurada facultativa, trabalhava apenas em casa. Há 3 meses começou a trabalhar com carteira assinada em uma padaria.\n\nNessa situação, com o início do emprego, Elisa passou a ser segurada obrigatória na categoria de empregada, deixando de ser facultativa.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O facultativo que passa a exercer atividade que o enquadre como segurado obrigatório deixa a categoria de facultativo e passa à categoria correspondente.",
    "fundamento": "Lei 8.213/91, art. 13 (\"desde que não incluído nas disposições do art. 11\").",
    "oficial": false
  },
  {
    "id": 461,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Nara, segurada facultativa, quer receber salário-maternidade pelo nascimento do filho. Ela possui 10 contribuições mensais pagas.\n\nNessa situação, Nara cumpriu a carência exigida para o salário-maternidade da segurada facultativa.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. A carência do salário-maternidade para a contribuinte individual, a facultativa e a segurada especial é de 10 contribuições mensais (no caso da especial, 10 meses de atividade rural).",
    "fundamento": "Lei 8.213/91, art. 25, III.",
    "oficial": false
  },
  {
    "id": 462,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Cláudio contribuiu pelo plano simplificado (11% sobre o salário mínimo) como facultativo e, depois, deseja contar o tempo para contagem recíproca sem pagar mais nada.\n\nNessa situação, Cláudio pode contar o tempo normalmente, pois o plano simplificado produz os mesmos efeitos do plano normal de 20%.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. Para contagem recíproca (ou aposentadoria por tempo de contribuição), o segurado que contribuiu a 11% precisa complementar a diferença até 20%, com juros moratórios.",
    "fundamento": "Lei 8.212/91, art. 21, § 3º.",
    "oficial": false
  },
  {
    "id": 463,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Aline é segurada facultativa e quer recolher a sua contribuição mensal.\n\nNessa situação, o prazo para o recolhimento é o dia 20 do mês seguinte ao da competência, por iniciativa do próprio facultativo.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O facultativo e o contribuinte individual (quando prestam serviço a pessoa física ou por conta própria) recolhem por iniciativa própria até o dia 15 do mês seguinte à competência. O dia 20 é o prazo da empresa para recolher o que reteve.",
    "fundamento": "Lei 8.212/91, art. 30, II.",
    "oficial": false
  },
  {
    "id": 464,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Gustavo, estudante, fez a inscrição como segurado facultativo no sistema da Previdência, mas ainda não pagou nenhuma contribuição.\n\nNessa situação, Gustavo já é segurado facultativo desde a mera inscrição, ainda que não tenha feito nenhum recolhimento.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. A filiação do facultativo só se concretiza com a inscrição e o pagamento da primeira contribuição. A mera inscrição, sem recolhimento, não gera a qualidade de segurado.",
    "fundamento": "Decreto 3.048/99, art. 20; Lei 8.213/91, art. 13.",
    "oficial": false
  },
  {
    "id": 465,
    "disciplina": "Direito Previdenciário",
    "assunto": "Segurado facultativo",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Rafael foi segurado facultativo, contribuiu por 3 anos e parou de recolher. Sem exercer atividade, tem menos de 120 contribuições.\n\nNessa situação, Rafael manterá a qualidade de segurado por 12 meses após a última contribuição, como os segurados obrigatórios.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O segurado facultativo mantém a qualidade de segurado por até 6 meses após a cessação das contribuições. O prazo de 12 meses é do segurado que deixa de exercer atividade ou de receber benefício (art. 15, II).",
    "fundamento": "Lei 8.213/91, art. 15, II e VI.",
    "oficial": false
  },
  {
    "id": 466,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Fabiana trabalha há dois meses como empregada doméstica de uma família, de segunda a sexta, com registro, e engravidou.\n\nNessa situação, Fabiana é dispensada da carência para o salário-maternidade, e o benefício é pago diretamente pelo INSS.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. Para a empregada doméstica, o salário-maternidade independe de carência e é pago diretamente pela Previdência Social.",
    "fundamento": "Lei 8.213/91, arts. 26, VI, e 73, I.",
    "oficial": false
  },
  {
    "id": 467,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Sr. Otávio é empregado doméstico, com registro e salário mensal. Tem quatro filhos menores de 14 anos e remuneração dentro do limite legal para o benefício.\n\nNessa situação, Otávio faz jus ao salário-família.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O salário-família é devido ao segurado empregado, inclusive o doméstico, e ao trabalhador avulso, observado o limite de renda.",
    "fundamento": "Lei 8.213/91, art. 65.",
    "oficial": false
  },
  {
    "id": 468,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Uma família contratou Iara como doméstica e recolhe mensalmente as contribuições por meio do regime unificado (Simples Doméstico), em guia única, sendo a parcela da empregada descontada de sua remuneração.\n\nNessa situação, a sistemática é correta, pois o empregador doméstico desconta a contribuição do empregado e recolhe-a com a sua em guia única do Simples Doméstico.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O Simples Doméstico unifica o recolhimento dos tributos, contribuições e encargos, e o empregador desconta a parcela previdenciária do empregado.",
    "fundamento": "LC 150/15, arts. 31 a 34.",
    "oficial": false
  },
  {
    "id": 469,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Maria trabalha três dias por semana na casa da família Silva e outros três dias por semana na casa da família Rocha, com horário e salário combinados em cada uma.\n\nNessa situação, Maria é empregada doméstica de cada uma das famílias, pois trabalha mais de dois dias por semana para cada uma delas.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O critério dos mais de dois dias por semana é aplicado em relação a cada família contratante. Havendo mais de dois dias por semana em cada residência, há dois vínculos domésticos.",
    "fundamento": "LC 150/15, art. 1º.",
    "oficial": false
  },
  {
    "id": 470,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Renato é motorista particular de uma família. Dirige o carro dos patrões todos os dias, levando os filhos à escola e a patroa às atividades pessoais. Tem registro e salário mensal.\n\nNessa situação, Renato é empregado doméstico.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O motorista particular da família, em serviço de natureza não lucrativa, é empregado doméstico.",
    "fundamento": "LC 150/15, art. 1º; Decreto 3.048/99, art. 9º, II.",
    "oficial": false
  },
  {
    "id": 471,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Sônia é cuidadora de idosos, contratada diretamente pelos filhos para acompanhar a mãe idosa, todos os dias, na residência da família, mediante salário.\n\nNessa situação, Sônia é empregada doméstica.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. Ela é contratada diretamente pela família, em atividade residencial e sem fim lucrativo. A cuidadora contratada por empresa de home care seria empregada da empresa.",
    "fundamento": "LC 150/15, art. 1º; Decreto 3.048/99, art. 9º, II.",
    "oficial": false
  },
  {
    "id": 472,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Adriano é empregado doméstico com registro em carteira. O empregador considera que, por ser trabalho no lar, a filiação previdenciária dele depende de seu pedido de inscrição, como se fosse facultativo.\n\nNessa situação, Adriano é segurado facultativo, e a contribuição depende de adesão voluntária dele.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O empregado doméstico é segurado obrigatório do RGPS. O empregador é obrigado a recolher as contribuições.",
    "fundamento": "Decreto 3.048/99, art. 9º, II; LC 150/15, art. 34.",
    "oficial": false
  },
  {
    "id": 473,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Dona Lúcia mantém uma chácara de recreio e a aluga para festas e eventos, cobrando por isso. Contratou Aderbal para cuidar do local, em tempo integral, com salário.\n\nNessa situação, Aderbal é empregado doméstico, pois exerce a função de caseiro no âmbito residencial.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O aluguel para eventos dá à atividade finalidade lucrativa, o que descaracteriza o trabalho doméstico. Aderbal é empregado comum.",
    "fundamento": "LC 150/15, art. 1º.",
    "oficial": false
  },
  {
    "id": 474,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Uma família contratou Helena como empregada doméstica, com registro em carteira e salário de um salário mínimo.\n\nNessa situação, a contribuição patronal do empregador doméstico é de 20% sobre a remuneração do empregado, como a das empresas em geral.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. A contribuição patronal do empregador doméstico é de 8% sobre a remuneração, mais 0,8% de seguro contra acidentes do trabalho. Os 20% são da empresa.",
    "fundamento": "LC 150/15, art. 34; Lei 8.212/91, art. 22, I.",
    "oficial": false
  },
  {
    "id": 475,
    "disciplina": "Direito Previdenciário",
    "assunto": "Empregado doméstico",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Dona Neide, empregada doméstica, aposentou-se por idade pelo RGPS e continuou trabalhando para a mesma família, com registro.\n\nNessa situação, Neide deixou de ser segurada obrigatória, pois quem já se aposentou não pode mais contribuir.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O aposentado pelo RGPS que permanece em atividade sujeita ao regime é segurado obrigatório e deve contribuir, mas, em regra, só terá direito a salário-família e reabilitação profissional.",
    "fundamento": "Lei 8.213/91, art. 11, § 3º, e art. 18, § 2º.",
    "oficial": false
  },
  {
    "id": 476,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Os trabalhadores portuários avulsos de um porto são cadastrados e escalados pelo OGMO, que organiza o trabalho entre os diversos operadores.\n\nNessa situação, o OGMO é o empregador dos avulsos, como em qualquer relação de emprego.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O trabalhador avulso não tem vínculo de emprego com o OGMO nem com o operador portuário. O OGMO apenas intermedia a mão de obra, escala os trabalhadores e arrecada e repassa a remuneração.",
    "fundamento": "Lei 12.815/13, arts. 32 e 33; Lei 8.213/91, art. 11, VI.",
    "oficial": false
  },
  {
    "id": 477,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Ivo opera guindastes em terminal portuário, escalado pelo OGMO, para diversos operadores, sem vínculo empregatício.\n\nNessa situação, Ivo, como guindasteiro, é trabalhador avulso.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O guindasteiro está entre as categorias de avulso previstas no regulamento, desde que a intermediação seja feita pelo OGMO ou pelo sindicato, sem vínculo empregatício.",
    "fundamento": "Decreto 3.048/99, art. 9º, VI, i.",
    "oficial": false
  },
  {
    "id": 478,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Zeca amarra embarcações no porto, sempre escalado pelo OGMO. Trabalha para diversos operadores, a cada vez que for chamado.\n\nNessa situação, por ser amarrador de embarcação, Zeca é empregado do operador portuário para o qual trabalhar em cada dia.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O amarrador de embarcação, escalado pelo OGMO e sem vínculo empregatício, é trabalhador avulso. Não se forma vínculo de emprego com cada tomador.",
    "fundamento": "Decreto 3.048/99, art. 9º, VI.",
    "oficial": false
  },
  {
    "id": 479,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Pedro carrega e descarrega mercadorias em um armazém não portuário, escalado pelo sindicato da sua categoria, e presta serviço, em dias diferentes, a várias empresas, sem vínculo de emprego.\n\nNessa situação, Pedro pode ser enquadrado como trabalhador avulso, ainda que não atue em atividade portuária.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. A atividade de avulso não se limita ao porto. Abrange serviços urbanos ou rurais, por intermédio do sindicato da categoria, como a movimentação de mercadorias em geral (Lei 12.023/09).",
    "fundamento": "Lei 8.213/91, art. 11, VI; Decreto 3.048/99, art. 9º, VI; Lei 12.023/09.",
    "oficial": false
  },
  {
    "id": 480,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Márcia trabalha na indústria de extração de sal, prestando serviço a diversas empresas por intermédio do sindicato da categoria, sem vínculo empregatício.\n\nNessa situação, Márcia é trabalhadora avulsa.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. O trabalhador na indústria de extração de sal, nessas condições, consta entre os que são enquadrados como avulsos.",
    "fundamento": "Decreto 3.048/99, art. 9º, VI, f.",
    "oficial": false
  },
  {
    "id": 481,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Os valores devidos a um avulso foram pagos pelo OGMO, com a contribuição previdenciária do trabalhador descontada na remuneração.\n\nNessa situação, o próprio avulso deve recolher sua contribuição mensal por carnê, por conta própria, como o contribuinte individual.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O OGMO (ou o sindicato, nas atividades não portuárias) é obrigado a descontar e recolher a contribuição do avulso. O avulso não recolhe por carnê.",
    "fundamento": "Lei 8.212/91, art. 30, VI.",
    "oficial": false
  },
  {
    "id": 482,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Cláudia é trabalhadora avulsa portuária, está grávida e tem filho menor de 14 anos de outra gestação. Sua remuneração está dentro do limite legal para o salário-família.\n\nNessa situação, Cláudia não faz jus ao salário-família, por não ser empregada.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O salário-família é devido ao empregado (inclusive o doméstico) e ao trabalhador avulso, na proporção do número de filhos, observado o limite de renda.",
    "fundamento": "Lei 8.213/91, art. 65.",
    "oficial": false
  },
  {
    "id": 483,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Paulo é trabalhador avulso portuário há mais de 20 anos, sempre escalado pelo OGMO, e acaba de completar 65 anos.\n\nNessa situação, para a aposentadoria por idade, o avulso, assim como os demais segurados, precisa cumprir a carência exigida em lei.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "C",
    "comentario": "Correto. A aposentadoria por idade exige carência de contribuições, aplicável ao avulso como aos demais segurados. O avulso não é dispensado dela.",
    "fundamento": "Lei 8.213/91, arts. 25, II, e 48.",
    "oficial": false
  },
  {
    "id": 484,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Médio",
    "tipo": "Certo ou Errado",
    "enunciado": "Letícia, trabalhadora avulsa portuária, deu à luz e deseja receber o salário-maternidade.\n\nNessa situação, o benefício será pago pelo OGMO, que arca com o valor e o compensa depois, como faz a empresa com a empregada.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. O salário-maternidade da trabalhadora avulsa é pago diretamente pela Previdência Social. A compensação pela empresa é regra da empregada.",
    "fundamento": "Lei 8.213/91, art. 72, § 3º.",
    "oficial": false
  },
  {
    "id": 485,
    "disciplina": "Direito Previdenciário",
    "assunto": "Trabalhador avulso",
    "banca": "CEBRASPE",
    "ano": 2024,
    "dificuldade": "Difícil",
    "tipo": "Certo ou Errado",
    "enunciado": "Antônio carrega bagagens de passageiros em um porto, sem escala, sem OGMO e sem sindicato. Cada passageiro o chama e lhe paga diretamente o serviço.\n\nNessa situação, Antônio é trabalhador avulso, pois presta serviço a pessoas diferentes sem vínculo empregatício.",
    "alternativas": {
      "C": "Certo",
      "E": "Errado"
    },
    "gabarito": "E",
    "comentario": "Errado. Sem a intermediação do OGMO ou do sindicato da categoria, falta requisito do avulso. Antônio é contribuinte individual (autônomo).",
    "fundamento": "Decreto 3.048/99, art. 9º, VI.",
    "oficial": false
  },

  {
    "id": 486,
    "disciplina": "Português",
    "assunto": "Interpretação de textos",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Leia o texto.\n\n“A segurança pública não se constrói apenas com viaturas e armamento; ela depende, sobretudo, da confiança que a população deposita em quem a protege. Quando o cidadão acredita no policial, colabora, denuncia e aceita orientações; quando desconfia, afasta-se, e a rua se torna território de ninguém.”\n\nSegundo o texto, a confiança da população nos policiais é",
    "alternativas": {
      "A": "dispensável quando há viaturas em número suficiente.",
      "B": "condição essencial para que a segurança pública seja eficaz.",
      "C": "consequência automática do uso de armamento moderno.",
      "D": "responsabilidade exclusiva do cidadão, e não do policial.",
      "E": "incompatível com a prática de denúncias pela comunidade."
    },
    "gabarito": "B",
    "comentario": "O texto afirma que a segurança pública depende “sobretudo” da confiança da população. Ela é, portanto, condição essencial. As demais alternativas contradizem o texto: a confiança estimula a denúncia e a colaboração e não decorre de equipamentos.",
    "fundamento": "Compreensão e interpretação de textos (edital: Língua Portuguesa, item 1).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 487,
    "disciplina": "Português",
    "assunto": "Interpretação de textos",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Leia o texto.\n\n“O edital determina que o candidato ausente na hora marcada para o início da prova será eliminado, e que não haverá segunda chamada. Mesmo assim, é comum que muitos cheguem nos últimos minutos antes do fechamento dos portões.”\n\nÉ possível inferir do texto que",
    "alternativas": {
      "A": "o edital admite segunda chamada para quem se atrasar.",
      "B": "chegar nos últimos minutos expõe o candidato ao risco de ficar de fora da prova.",
      "C": "a eliminação do candidato ausente depende de decisão posterior da banca.",
      "D": "os portões permanecem abertos até o fim da prova.",
      "E": "a maioria dos candidatos chega com muita antecedência."
    },
    "gabarito": "B",
    "comentario": "O texto diz que o atrasado é eliminado e que não há segunda chamada. Logo, quem chega nos últimos minutos corre o risco de perder o horário. Isso é uma inferência, e as demais alternativas contrariam o que está dito.",
    "fundamento": "Compreensão e interpretação de textos; inferência.",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 488,
    "disciplina": "Português",
    "assunto": "Figuras de linguagem",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que há uma metonímia.",
    "alternativas": {
      "A": "“Li Machado de Assis durante as férias.”",
      "B": "“Seu sorriso é um raio de sol.”",
      "C": "“Estou morrendo de fome há horas.”",
      "D": "“Subi para cima do telhado.”",
      "E": "“O mar estava calmo como um lago.”"
    },
    "gabarito": "A",
    "comentario": "Na correta, o autor é usado no lugar da obra (“li Machado” = li os livros de Machado), o que é metonímia. As outras são: “raio de sol” (metáfora), “morrendo de fome” (hipérbole), “subi para cima” (pleonasmo) e “calmo como um lago” (comparação).",
    "fundamento": "Figuras de linguagem (edital, item 3).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 489,
    "disciplina": "Português",
    "assunto": "Relações semânticas entre orações",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "No período “O policial manteve a calma, embora estivesse sob forte pressão”, a oração destacada expressa ideia de",
    "alternativas": {
      "A": "causa.",
      "B": "condição.",
      "C": "finalidade.",
      "D": "conformidade.",
      "E": "concessão."
    },
    "gabarito": "E",
    "comentario": "“Embora” introduz um fato que, em tese, se oporia ao da oração principal, mas não o impede. Isso caracteriza a concessão.",
    "fundamento": "Relações semânticas entre orações (edital, item 4); orações subordinadas adverbiais concessivas.",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 490,
    "disciplina": "Português",
    "assunto": "Ortografia e acentuação gráfica",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que todas as palavras estão corretamente acentuadas, segundo a ortografia oficial em vigor.",
    "alternativas": {
      "A": "ideía, ônibus, tênis, vovô",
      "B": "heróico, saúde, jacaré, vovó",
      "C": "ciúme, juíz, baú, saída",
      "D": "saída, país, miúdo, baú",
      "E": "pára, saída, país, baú"
    },
    "gabarito": "D",
    "comentario": "Em saída, país, miúdo e baú, o i e o u tônicos formam hiato com a vogal anterior, e por isso são acentuados. Erros nas demais: “ideía” e “heróico” (perderam o acento em 2009), “juíz” (oxítona em -z, sem acento) e “pára” (verbo, sem acento).",
    "fundamento": "Acordo Ortográfico da Língua Portuguesa (Decreto 6.583/2008); acentuação gráfica (edital, itens 5 e 6).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 491,
    "disciplina": "Português",
    "assunto": "Funções do “que” e do “se”",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "No período “Espero que o resultado saia logo”, a palavra “que” classifica-se como",
    "alternativas": {
      "A": "pronome relativo.",
      "B": "conjunção integrante.",
      "C": "conjunção causal.",
      "D": "advérbio de intensidade.",
      "E": "partícula expletiva."
    },
    "gabarito": "B",
    "comentario": "O “que” introduz a oração subordinada substantiva objetiva direta (“que o resultado saia logo”), que completa o verbo “espero”. Ele é conjunção integrante. O pronome relativo retomaria um termo antecedente, o que não ocorre aqui.",
    "fundamento": "Funções do “que” e do “se” (edital, item 10).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 492,
    "disciplina": "Português",
    "assunto": "Crase",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que o emprego do acento indicativo de crase está de acordo com a norma-padrão.",
    "alternativas": {
      "A": "O soldado obedeceu às ordens do comandante.",
      "B": "Chegamos à pé ao quartel.",
      "C": "Disse à todos que ficassem calmos.",
      "D": "Começaremos o curso à partir de segunda.",
      "E": "Estamos dispostos à colaborar com a investigação."
    },
    "gabarito": "A",
    "comentario": "Obedecer exige a preposição “a” e o substantivo “ordens” aceita o artigo “as”, logo “às ordens”. Nas demais, não há crase diante de palavra masculina (a pé), de pronome indefinido (a todos), da expressão “a partir de” e de verbo no infinitivo (a colaborar).",
    "fundamento": "Emprego do sinal indicativo de crase (edital, item 8).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 493,
    "disciplina": "Português",
    "assunto": "Concordância verbal",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que a concordância verbal está de acordo com a norma-padrão.",
    "alternativas": {
      "A": "Faz dez anos que ingressei na corporação.",
      "B": "Fazem dez anos que ingressei na corporação.",
      "C": "Haviam muitas vagas abertas no concurso.",
      "D": "Aluga-se casas para temporada.",
      "E": "Fui eu que resolveu o problema."
    },
    "gabarito": "A",
    "comentario": "O verbo “fazer”, indicando tempo decorrido, é impessoal e fica na 3ª pessoa do singular. Também “haver”, no sentido de existir, é impessoal (“havia vagas”). “Alugam-se casas” (voz passiva sintética) e “fui eu que resolvi” completam a correção.",
    "fundamento": "Concordância nominal e verbal (edital, item 13).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 494,
    "disciplina": "Português",
    "assunto": "Regência verbal",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que a regência verbal está de acordo com a norma-padrão.",
    "alternativas": {
      "A": "Prefiro mais estudar do que dormir.",
      "B": "Ele aspirava ao cargo de soldado desde a infância.",
      "C": "O sargento chegou no quartel às seis horas.",
      "D": "Ela namorava com o colega de farda.",
      "E": "O candidato simpatizou o instrutor."
    },
    "gabarito": "B",
    "comentario": "“Aspirar”, no sentido de almejar, exige a preposição “a”. Corrigindo as demais: “prefiro estudar a dormir”; “chegou ao quartel”; “namorava o colega”; “simpatizou com o instrutor”.",
    "fundamento": "Regência nominal e verbal (edital, item 14).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 495,
    "disciplina": "Português",
    "assunto": "Pontuação",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que a pontuação está de acordo com a norma-padrão.",
    "alternativas": {
      "A": "O soldado, entregou o relatório ao comandante.",
      "B": "O instrutor disse, que a prova seria difícil.",
      "C": "Os alunos, e os professores chegaram cedo.",
      "D": "Os candidatos aprovados, que são poucos, serão convocados.",
      "E": "O comandante, chegou cedo e, falou com a tropa."
    },
    "gabarito": "D",
    "comentario": "A oração explicativa “que são poucos” deve vir entre vírgulas. Nas demais há vírgula indevida entre sujeito e verbo, entre verbo e oração integrante, entre os núcleos de sujeito composto e entre o verbo e seus complementos.",
    "fundamento": "Emprego dos sinais de pontuação (edital, item 12).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 496,
    "disciplina": "História de Pernambuco",
    "assunto": "Ocupação e colonização: Capitanias Hereditárias",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A capitania de Pernambuco, também conhecida como Nova Lusitânia, foi doada em 1534 ao donatário",
    "alternativas": {
      "A": "Martim Afonso de Sousa.",
      "B": "Jerônimo de Albuquerque.",
      "C": "Maurício de Nassau.",
      "D": "Duarte Coelho.",
      "E": "Mem de Sá."
    },
    "gabarito": "D",
    "comentario": "Duarte Coelho Pereira recebeu a capitania e fundou a vila de Olinda, sede da capitania. Jerônimo de Albuquerque era seu cunhado e participou da colonização; Martim Afonso foi donatário de São Vicente; Nassau foi governador holandês; Mem de Sá foi governador-geral.",
    "fundamento": "Capitanias Hereditárias; Duarte Coelho (edital, item 1).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 497,
    "disciplina": "História de Pernambuco",
    "assunto": "A importância do açúcar; formação de Olinda e Recife",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sobre a formação de Olinda e do Recife no período colonial, é correto afirmar que",
    "alternativas": {
      "A": "o Recife foi a primeira sede da capitania e Olinda surgiu como seu porto.",
      "B": "Olinda se tornou o principal porto exportador de açúcar, e o Recife, o centro político da capitania.",
      "C": "o Recife se desenvolveu como porto de escoamento da produção açucareira, enquanto Olinda era o centro da elite senhorial.",
      "D": "o açúcar teve papel secundário no povoamento do litoral pernambucano.",
      "E": "ambas foram fundadas pelos holandeses, no século XVII."
    },
    "gabarito": "C",
    "comentario": "A economia do açúcar sustentou o povoamento. Olinda, fundada no século XVI, abrigava os senhores de engenho, e o povoado do Recife, ligado ao porto, cresceu com o comércio e o escoamento do açúcar. Os holandeses expandiram o Recife depois, mas não o fundaram.",
    "fundamento": "A importância do açúcar para a economia local; formação de Olinda e Recife (edital, itens 2 e 3).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 498,
    "disciplina": "História de Pernambuco",
    "assunto": "A presença holandesa e Maurício de Nassau",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sobre o governo de Maurício de Nassau em Pernambuco, é correto afirmar que",
    "alternativas": {
      "A": "foi marcado pela expulsão definitiva dos holandeses, em 1654.",
      "B": "iniciou-se em 1630, com a primeira invasão holandesa a Olinda.",
      "C": "promoveu a urbanização do Recife, com a construção de pontes e da Cidade Maurícia, entre 1637 e 1644.",
      "D": "extinguiu a produção açucareira para estimular a pecuária.",
      "E": "transferiu a capital da colônia holandesa de Recife para Olinda."
    },
    "gabarito": "C",
    "comentario": "Nassau governou o Brasil holandês de 1637 a 1644. Fez obras urbanas no Recife (pontes, a Cidade Maurícia, palácios) e trouxe artistas e cientistas. A primeira invasão foi em 1630, antes dele, e a expulsão ocorreu em 1654, depois de sua saída.",
    "fundamento": "A presença holandesa e o governo de Maurício de Nassau (edital, item 4).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 499,
    "disciplina": "História de Pernambuco",
    "assunto": "Insurreição Pernambucana (1654)",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A Insurreição Pernambucana (1645-1654) caracterizou-se por",
    "alternativas": {
      "A": "ser liderada por Maurício de Nassau contra a Coroa portuguesa.",
      "B": "defender a permanência dos holandeses e a independência do Brasil.",
      "C": "reunir luso-brasileiros, indígenas e negros na luta contra o domínio holandês, que se encerrou com a capitulação de 1654.",
      "D": "ter origem na revolta dos escravos contra os senhores de engenho de Olinda.",
      "E": "terminar com a vitória dos holandeses na batalha dos Guararapes."
    },
    "gabarito": "C",
    "comentario": "A insurreição teve líderes como João Fernandes Vieira, André Vidal de Negreiros, Henrique Dias (negros) e Felipe Camarão (indígenas). As batalhas dos Guararapes (1648-1649) foram vitórias dos insurgentes, e os holandeses capitularam em 1654, na Campina do Taborda.",
    "fundamento": "Movimentos de resistência: Insurreição Pernambucana, 1654 (edital, item 5).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 500,
    "disciplina": "História de Pernambuco",
    "assunto": "Guerra dos Mascates (1710)",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A Guerra dos Mascates (1710-1711) teve como principais causas",
    "alternativas": {
      "A": "a luta dos escravos de Palmares contra a Coroa portuguesa.",
      "B": "o conflito entre os senhores de engenho de Olinda e os comerciantes portugueses do Recife, após a elevação do Recife à categoria de vila.",
      "C": "a reação dos colonos ao fim do Pacto Colonial, em 1808.",
      "D": "a disputa entre republicanos e monarquistas pelo controle da província.",
      "E": "a insatisfação dos produtores de algodão com os impostos da Corte."
    },
    "gabarito": "B",
    "comentario": "Os senhores de engenho de Olinda, endividados, hostilizavam os “mascates” (comerciantes portugueses do Recife). O conflito explodiu quando o Recife foi elevado a vila e passou a ter câmara própria, em 1709, o que reduzia o poder de Olinda.",
    "fundamento": "Guerra dos Mascates, 1710 (edital, item 5).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 501,
    "disciplina": "História de Pernambuco",
    "assunto": "Revolução Pernambucana de 1817",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A Revolução Pernambucana de 1817 foi um movimento",
    "alternativas": {
      "A": "republicano e emancipacionista, que instalou um governo provisório e foi reprimido por tropas enviadas por D. João VI.",
      "B": "monarquista, que defendia a permanência da Corte em Pernambuco.",
      "C": "abolicionista, que decretou o fim imediato da escravidão no Brasil.",
      "D": "militar, liderado por Dom Pedro I contra a Constituição de 1824.",
      "E": "separatista, que pretendia unir Pernambuco a Portugal."
    },
    "gabarito": "A",
    "comentario": "O movimento nasceu da insatisfação com a carga tributária (que sustentava a Corte no Rio de Janeiro), as secas e as ideias iluministas. Os revolucionários proclamaram a república e formaram um governo provisório, mas foram vencidos em poucos meses.",
    "fundamento": "Revolução Pernambucana, 1817 (edital, item 5).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 502,
    "disciplina": "História de Pernambuco",
    "assunto": "Confederação do Equador (1824)",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A Confederação do Equador (1824), em Pernambuco, teve como fatores desencadeantes",
    "alternativas": {
      "A": "a Proclamação da República, em 1889.",
      "B": "a dissolução da Assembleia Constituinte por D. Pedro I e a outorga da Constituição de 1824, tendo Frei Caneca entre seus líderes.",
      "C": "a tentativa de restabelecer o domínio holandês no Nordeste.",
      "D": "a Guerra do Paraguai e o recrutamento forçado de soldados.",
      "E": "a abolição da escravatura e a indenização aos senhores de engenho."
    },
    "gabarito": "B",
    "comentario": "A confederação reagiu ao autoritarismo de D. Pedro I, que fechou a Constituinte e outorgou a Constituição de 1824. Tinha caráter republicano e federalista, e foi liderada por Manuel de Carvalho Paes de Andrade e Frei Caneca, executado em 1825.",
    "fundamento": "Confederação do Equador, 1824 (edital, item 5).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 503,
    "disciplina": "História de Pernambuco",
    "assunto": "Revolução Praieira (1848)",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A Revolução Praieira (1848-1849) é considerada",
    "alternativas": {
      "A": "a primeira revolta republicana do Brasil colonial.",
      "B": "uma rebelião dos quilombolas contra a escravidão.",
      "C": "o último grande levante liberal do período imperial, de caráter regional, em oposição ao domínio político conservador em Pernambuco.",
      "D": "um movimento de caráter conservador, em defesa da Coroa.",
      "E": "uma guerra civil entre brasileiros e holandeses."
    },
    "gabarito": "C",
    "comentario": "Os praieiros, ligados ao Partido Liberal, reivindicavam o voto livre e universal, a liberdade de imprensa, o fim do Poder Moderador e a nacionalização do comércio a varejo. A rebelião foi derrotada em 1849, e é lembrada como o último levante liberal do Império.",
    "fundamento": "Revolução Praieira, 1848 (edital, item 5).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 504,
    "disciplina": "História de Pernambuco",
    "assunto": "Manifestações da cultura popular pernambucana",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sobre a cultura popular pernambucana, é correto afirmar que",
    "alternativas": {
      "A": "o frevo é uma manifestação típica do sertão, sem relação com o carnaval do Recife.",
      "B": "o frevo foi reconhecido pela UNESCO, em 2012, como Patrimônio Cultural Imaterial da Humanidade.",
      "C": "o maracatu nação não tem relação com a cultura de matriz africana.",
      "D": "o bolo de rolo é um prato típico do Sul do país.",
      "E": "o Carnaval do Recife só ganhou relevância no século XXI."
    },
    "gabarito": "B",
    "comentario": "O frevo nasceu no carnaval do Recife, do fim do século XIX, e foi reconhecido pela UNESCO em 2012. O maracatu de baque virado (nação) tem forte ligação com a cultura afro-brasileira e com a coroação de reis do Congo, e o bolo de rolo é doce típico de Pernambuco.",
    "fundamento": "Manifestações da cultura popular pernambucana: frevo, maracatu, culinária e festas populares (edital, item 7).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 505,
    "disciplina": "História de Pernambuco",
    "assunto": "Quilombos e aspectos afro-brasileiros",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O Quilombo dos Palmares, na época situado na capitania de Pernambuco, foi",
    "alternativas": {
      "A": "uma comunidade formada exclusivamente por indígenas, aliada aos holandeses.",
      "B": "o maior e mais duradouro quilombo do período colonial, que resistiu a diversas expedições até 1694.",
      "C": "extinto pela Lei Áurea, em 1888.",
      "D": "estabelecido na Bahia, no século XIX.",
      "E": "criado por Duarte Coelho para abrigar escravos libertos."
    },
    "gabarito": "B",
    "comentario": "Palmares ficava na Serra da Barriga (hoje em Alagoas, antes território de Pernambuco). Resistiu por quase todo o século XVII e foi destruído em 1694, com a morte de Zumbi em 1695. A Lei Áurea é de 1888 e foi muito posterior a esses fatos.",
    "fundamento": "Formação de quilombos; aspectos afro-brasileiros em Pernambuco (edital, itens 5 e 8).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 506,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Proposições e conectivos lógicos",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Considere a proposição: “Se o soldado estuda, então é aprovado.” Essa proposição é FALSA quando",
    "alternativas": {
      "A": "o soldado não estuda e é aprovado.",
      "B": "o soldado não estuda e não é aprovado.",
      "C": "o soldado estuda e é aprovado.",
      "D": "o soldado estuda e não é aprovado.",
      "E": "o soldado não estuda, qualquer que seja o resultado, e é reprovado por faltas."
    },
    "gabarito": "D",
    "comentario": "A condicional “p → q” só é falsa quando p é verdadeira e q é falsa, isto é, quando o soldado estuda (V) e não é aprovado (F).",
    "fundamento": "Proposições e conectivos lógicos (edital, item 1).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 507,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Negação de proposições",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A negação da proposição “Se chove, então a rua fica molhada” é",
    "alternativas": {
      "A": "Não chove e a rua fica molhada.",
      "B": "Se não chove, então a rua não fica molhada.",
      "C": "Se a rua não fica molhada, então não chove.",
      "D": "Chove e a rua não fica molhada.",
      "E": "Não chove ou a rua fica molhada."
    },
    "gabarito": "D",
    "comentario": "A negação de p → q é p ∧ ~q. É a única forma em que a condicional é falsa. Atenção: “Se a rua não fica molhada, então não chove” é a contrapositiva (equivalente à original, mas não a negação) e “Não chove ou a rua fica molhada” é a forma equivalente com “ou”.",
    "fundamento": "Negação de proposições compostas; equivalência e implicação lógica (edital, itens 1 e 2).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 508,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Equivalência lógica",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A proposição “Se o policial é treinado, então atua com segurança” é logicamente equivalente a",
    "alternativas": {
      "A": "Se o policial atua com segurança, então é treinado.",
      "B": "Se o policial não é treinado, então não atua com segurança.",
      "C": "O policial é treinado e atua com segurança.",
      "D": "Se o policial não atua com segurança, então não é treinado.",
      "E": "O policial é treinado ou atua com segurança."
    },
    "gabarito": "D",
    "comentario": "A condicional é equivalente à sua contrapositiva (~q → ~p). “Se o policial atua com segurança, então é treinado” é a recíproca e “Se não é treinado, então não atua com segurança” é a inversa, e nenhuma é equivalente. As formas com “e” e com “ou” trocam o conectivo e mudam o valor lógico.",
    "fundamento": "Equivalência lógica; contrapositiva (edital, item 2).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 509,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Quantificadores",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A negação da proposição “Todo candidato foi aprovado” é",
    "alternativas": {
      "A": "Nenhum candidato foi aprovado.",
      "B": "Todo candidato foi reprovado.",
      "C": "Algum candidato foi aprovado.",
      "D": "Nenhum candidato deixou de ser aprovado.",
      "E": "Pelo menos um candidato não foi aprovado."
    },
    "gabarito": "E",
    "comentario": "A negação de “todo A é B” é “algum A não é B” (ou “existe A que não é B”). “Nenhum candidato foi aprovado” é mais forte e não é a negação lógica.",
    "fundamento": "Quantificadores (edital, item 1).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 510,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Inferências e deduções",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Admita verdadeiras as premissas: (I) “Se Ana é aprovada, então Bruno é aprovado”; (II) “Bruno não foi aprovado”. Conclui-se, logicamente, que",
    "alternativas": {
      "A": "Ana foi aprovada.",
      "B": "Ana foi aprovada e Bruno também.",
      "C": "Nada se pode concluir sobre Ana.",
      "D": "Bruno será aprovado mais tarde.",
      "E": "Ana não foi aprovada."
    },
    "gabarito": "E",
    "comentario": "É o modus tollens: se p → q é verdadeira e q é falsa, então p é falsa. Logo, Ana não foi aprovada.",
    "fundamento": "Lógica de argumentação: inferências e deduções (edital, item 2).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 511,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Diagramas lógicos",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Considere as premissas: “Todo soldado é treinado” e “Nenhum treinado é imprudente”. Uma conclusão que decorre necessariamente dessas premissas é",
    "alternativas": {
      "A": "Algum imprudente é soldado.",
      "B": "Todo treinado é soldado.",
      "C": "Todo imprudente é soldado.",
      "D": "Nenhum soldado é imprudente.",
      "E": "Algum soldado não é treinado."
    },
    "gabarito": "D",
    "comentario": "Pelos diagramas, o conjunto dos soldados está dentro do dos treinados, que é disjunto do conjunto dos imprudentes. Logo, os soldados e os imprudentes não têm elementos em comum.",
    "fundamento": "Diagramas lógicos (edital, item 3).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 512,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Princípio multiplicativo",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Uma senha é formada por duas letras distintas, escolhidas entre A, B, C, D e E, seguidas de dois algarismos quaisquer (de 0 a 9, podendo repetir). O número de senhas possíveis é",
    "alternativas": {
      "A": "2.500",
      "B": "2.000",
      "C": "200",
      "D": "1.000",
      "E": "5.000"
    },
    "gabarito": "B",
    "comentario": "Pelo princípio multiplicativo: 5 · 4 · 10 · 10 = 2.000. Com letras repetidas seriam 5 · 5 · 100 = 2.500.",
    "fundamento": "Princípios da contagem; princípio multiplicativo (edital, item 4).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 513,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Permutações com repetição",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O número de anagramas da palavra SOLDADO é",
    "alternativas": {
      "A": "5.040",
      "B": "2.520",
      "C": "1.260",
      "D": "630",
      "E": "840"
    },
    "gabarito": "C",
    "comentario": "SOLDADO tem 7 letras, com O repetida 2 vezes e D repetida 2 vezes. Portanto: 7! / (2! · 2!) = 5.040 / 4 = 1.260.",
    "fundamento": "Permutações; permutação com elementos repetidos (edital, item 4).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 514,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Combinações",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "De quantas maneiras é possível formar uma equipe de 3 soldados escolhidos entre 8 disponíveis?",
    "alternativas": {
      "A": "336",
      "B": "24",
      "C": "56",
      "D": "28",
      "E": "120"
    },
    "gabarito": "C",
    "comentario": "A ordem não importa, então é combinação: C(8,3) = 8·7·6 / (3·2·1) = 56. O valor 336 seria o arranjo A(8,3).",
    "fundamento": "Combinações simples (edital, item 4).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 515,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Probabilidade",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Uma urna contém 5 bolas vermelhas e 3 bolas azuis. Retiram-se duas bolas, sem reposição. A probabilidade de ambas serem vermelhas é",
    "alternativas": {
      "A": "25/64",
      "B": "5/8",
      "C": "3/14",
      "D": "5/14",
      "E": "5/28"
    },
    "gabarito": "D",
    "comentario": "P = (5/8) · (4/7) = 20/56 = 5/14. Equivale a C(5,2)/C(8,2) = 10/28 = 5/14. O valor 25/64 seria o resultado com reposição.",
    "fundamento": "Probabilidade (edital, item 4).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 516,
    "disciplina": "Informática",
    "assunto": "Segurança da informação: phishing",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O phishing é uma técnica que consiste em",
    "alternativas": {
      "A": "criptografar os arquivos da vítima e exigir pagamento para liberá-los.",
      "B": "enganar o usuário, por meio de mensagens ou páginas falsas, para obter dados pessoais ou financeiros.",
      "C": "registrar tudo o que o usuário digita no teclado.",
      "D": "sobrecarregar um servidor com acessos simultâneos para derrubá-lo.",
      "E": "propagar-se pela rede sem a necessidade de hospedeiro."
    },
    "gabarito": "B",
    "comentario": "Phishing é engenharia social: o golpista se passa por uma empresa ou instituição para induzir a vítima a fornecer dados. As demais descrevem o ransomware (criptografa e cobra resgate), o keylogger (registra o teclado), o ataque de negação de serviço (DDoS) e o worm (propaga-se sem hospedeiro).",
    "fundamento": "Segurança da informação: ameaças e phishing (edital, item 3).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 517,
    "disciplina": "Informática",
    "assunto": "Segurança da informação: malwares",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O malware que sequestra os dados do computador, normalmente por criptografia, e exige o pagamento de resgate para restabelecer o acesso é o",
    "alternativas": {
      "A": "spyware.",
      "B": "adware.",
      "C": "rootkit.",
      "D": "ransomware.",
      "E": "cavalo de troia (trojan)."
    },
    "gabarito": "D",
    "comentario": "Ransomware é o código malicioso que torna os dados inacessíveis e exige resgate (geralmente em criptomoedas). Spyware espiona o usuário, e adware exibe propagandas.",
    "fundamento": "Segurança da informação: malwares (edital, item 3).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 518,
    "disciplina": "Informática",
    "assunto": "Segurança da informação: criptografia e HTTPS",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Ao acessar um site cujo endereço inicia com “https://” e exibe o ícone de cadeado, o usuário sabe que",
    "alternativas": {
      "A": "o conteúdo do site é necessariamente confiável e legítimo.",
      "B": "o computador do usuário está imune a vírus.",
      "C": "o site não coleta dados pessoais do usuário.",
      "D": "o provedor de internet não tem acesso ao endereço do site.",
      "E": "a comunicação entre o navegador e o servidor é criptografada."
    },
    "gabarito": "E",
    "comentario": "O HTTPS usa o protocolo TLS para criptografar os dados em trânsito. Ele não garante que o site seja honesto: sites de golpe também podem usar HTTPS.",
    "fundamento": "Criptografia e boas práticas de segurança (edital, item 3).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 519,
    "disciplina": "Informática",
    "assunto": "Segurança da informação: autenticação",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A autenticação em dois fatores caracteriza-se por",
    "alternativas": {
      "A": "combinar duas categorias de credenciais, como uma senha e um código enviado ao celular.",
      "B": "exigir que o usuário digite a mesma senha duas vezes.",
      "C": "usar duas senhas, ambas memorizadas pelo usuário.",
      "D": "dispensar qualquer senha, usando apenas o nome de usuário.",
      "E": "armazenar a senha em dois computadores diferentes."
    },
    "gabarito": "A",
    "comentario": "Os fatores são categorias: algo que se sabe (senha), algo que se tem (celular, token) e algo que se é (biometria). Duas senhas pertencem à mesma categoria e não formam dois fatores.",
    "fundamento": "Autenticação e boas práticas de segurança (edital, item 3).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 520,
    "disciplina": "Informática",
    "assunto": "Backup",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O tipo de backup que copia apenas os arquivos alterados ou criados desde o último backup completo é o",
    "alternativas": {
      "A": "diferencial.",
      "B": "incremental.",
      "C": "completo (full).",
      "D": "espelhado.",
      "E": "normal sem marcação."
    },
    "gabarito": "A",
    "comentario": "O backup diferencial copia tudo o que mudou desde o último backup completo. Já o incremental copia só o que mudou desde o último backup de qualquer tipo, e o completo copia tudo.",
    "fundamento": "Cópia de segurança (backup): tipos e restauração (edital, item 4).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 521,
    "disciplina": "Informática",
    "assunto": "Internet, intranet e computação em nuvem",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A intranet é",
    "alternativas": {
      "A": "uma rede pública mundial, aberta a qualquer usuário.",
      "B": "uma rede que conecta apenas dois computadores por cabo.",
      "C": "uma rede privada de uma organização, que usa as tecnologias da internet e é restrita a seus usuários autorizados.",
      "D": "o conjunto de sites que não precisam de senha.",
      "E": "o serviço de correio eletrônico da internet."
    },
    "gabarito": "C",
    "comentario": "A intranet usa protocolos e ferramentas da internet (navegador, HTTP, e-mail) em ambiente fechado, geralmente de uma empresa ou órgão. Quando parte do conteúdo é aberta a parceiros externos, fala-se em extranet.",
    "fundamento": "Conceito de internet e intranet (edital, item 1).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 522,
    "disciplina": "Informática",
    "assunto": "Navegadores",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "No navegador Google Chrome, o atalho de teclado que abre uma nova janela anônima é",
    "alternativas": {
      "A": "Ctrl + Shift + N",
      "B": "Ctrl + N",
      "C": "Ctrl + T",
      "D": "Ctrl + Shift + T",
      "E": "Ctrl + H"
    },
    "gabarito": "A",
    "comentario": "Ctrl + Shift + N abre a janela anônima. Ctrl + N abre uma janela normal, Ctrl + T abre uma nova aba, Ctrl + Shift + T reabre a última aba fechada e Ctrl + H mostra o histórico.",
    "fundamento": "Navegadores e ferramentas associadas à internet (edital, item 2).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 523,
    "disciplina": "Informática",
    "assunto": "Organização de computadores",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A memória RAM (Memória de Acesso Aleatório) caracteriza-se por ser",
    "alternativas": {
      "A": "não volátil: mantém os dados após o desligamento.",
      "B": "somente de leitura.",
      "C": "volátil: perde o conteúdo quando o computador é desligado.",
      "D": "um dispositivo de armazenamento permanente do tipo HD.",
      "E": "usada exclusivamente para guardar o sistema operacional."
    },
    "gabarito": "C",
    "comentario": "A RAM guarda temporariamente os programas e dados em uso e é volátil. Os dados permanentes ficam em HD, SSD ou outros dispositivos de armazenamento.",
    "fundamento": "Organização de computadores: processador e memórias (edital, item 5).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 524,
    "disciplina": "Informática",
    "assunto": "Ambientes operacionais: Windows 11",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "No Windows 11, ao selecionar um arquivo no Explorador de Arquivos e pressionar Shift + Delete, o arquivo será",
    "alternativas": {
      "A": "enviado para a Lixeira.",
      "B": "movido para a Área de Trabalho.",
      "C": "copiado para a pasta Documentos.",
      "D": "compactado automaticamente.",
      "E": "excluído permanentemente, sem passar pela Lixeira (após confirmação)."
    },
    "gabarito": "E",
    "comentario": "Com Delete apenas, o arquivo vai para a Lixeira e pode ser restaurado. Com Shift + Delete, a exclusão é definitiva e não passa pela Lixeira, após o aviso de confirmação.",
    "fundamento": "Gerenciamento de arquivos e pastas; ambientes operacionais (edital, itens 5 e 6).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 525,
    "disciplina": "Informática",
    "assunto": "Planilhas eletrônicas (Excel)",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Em uma planilha do Microsoft Excel, as células A1, A2 e A3 contêm, respectivamente, os valores 10, 20 e 30. Ao digitar em outra célula a fórmula =SE(MÉDIA(A1:A3)>15;\"Aprovado\";\"Reprovado\"), o resultado exibido será",
    "alternativas": {
      "A": "Aprovado",
      "B": "Reprovado",
      "C": "15",
      "D": "20",
      "E": "#VALOR!"
    },
    "gabarito": "A",
    "comentario": "A média de 10, 20 e 30 é 20. Como 20 > 15, o teste do SE é verdadeiro e a fórmula retorna “Aprovado”, o texto, e não o número 20.",
    "fundamento": "Utilização de ferramentas de planilha: fórmulas e funções (edital, item 7).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 526,
    "disciplina": "Direito Constitucional",
    "assunto": "Direitos e garantias individuais: inviolabilidade do domicílio",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a Constituição Federal, sobre a inviolabilidade do domicílio, é correto afirmar que",
    "alternativas": {
      "A": "a ordem judicial autoriza o ingresso na casa, sem consentimento, a qualquer hora do dia ou da noite.",
      "B": "o consentimento do morador só vale durante o dia.",
      "C": "o ingresso para prestar socorro só pode ocorrer durante o dia.",
      "D": "a casa é inviolável mesmo em caso de desastre.",
      "E": "em caso de flagrante delito, é possível o ingresso na casa, sem consentimento do morador, a qualquer hora do dia ou da noite."
    },
    "gabarito": "E",
    "comentario": "A casa é asilo inviolável. Pode-se entrar sem consentimento em caso de flagrante delito, desastre ou para prestar socorro (a qualquer hora), ou, durante o dia, por determinação judicial.",
    "fundamento": "CF/88, art. 5º, XI.",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 527,
    "disciplina": "Direito Constitucional",
    "assunto": "Direitos e garantias individuais: prisão",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Quanto à prisão, a Constituição Federal estabelece que ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente, salvo",
    "alternativas": {
      "A": "nos casos de infração de trânsito de menor gravidade.",
      "B": "quando o preso for estrangeiro.",
      "C": "quando a prisão for determinada por autoridade policial civil.",
      "D": "quando houver mera suspeita da prática do crime.",
      "E": "nos casos de transgressão militar ou crime propriamente militar, definidos em lei."
    },
    "gabarito": "E",
    "comentario": "A CF admite a prisão por transgressão militar e por crime propriamente militar sem ordem judicial, nos termos da lei. Isso interessa diretamente aos militares estaduais.",
    "fundamento": "CF/88, art. 5º, LXI.",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 528,
    "disciplina": "Direito Constitucional",
    "assunto": "Remédios constitucionais",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O remédio constitucional adequado para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade ou abuso de poder for autoridade pública, é o",
    "alternativas": {
      "A": "mandado de injunção.",
      "B": "ação popular.",
      "C": "habeas corpus.",
      "D": "mandado de segurança.",
      "E": "habeas data."
    },
    "gabarito": "D",
    "comentario": "O mandado de segurança é residual: protege direito líquido e certo não amparado por habeas corpus (liberdade de locomoção) nem por habeas data (acesso e retificação de informações pessoais).",
    "fundamento": "CF/88, art. 5º, LXIX.",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 529,
    "disciplina": "Direito Constitucional",
    "assunto": "Nacionalidade",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "São brasileiros natos, nos termos da Constituição Federal, os",
    "alternativas": {
      "A": "nascidos no Brasil, de pais estrangeiros a serviço de seu país.",
      "B": "nascidos na República Federativa do Brasil, ainda que de pais estrangeiros, desde que estes não estejam a serviço de seu país.",
      "C": "estrangeiros originários de países de língua portuguesa, residentes no Brasil por um ano.",
      "D": "estrangeiros que adquiriram a nacionalidade por naturalização.",
      "E": "nascidos no estrangeiro, de pai brasileiro, independentemente de qualquer outro requisito."
    },
    "gabarito": "B",
    "comentario": "É o critério do território (jus soli) com a ressalva dos pais estrangeiros a serviço de seu país. Os nascidos no estrangeiro de pai ou mãe brasileiros precisam, além disso, ser registrados em repartição brasileira ou vir a residir no Brasil e optar pela nacionalidade.",
    "fundamento": "CF/88, art. 12, I.",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 530,
    "disciplina": "Direito Constitucional",
    "assunto": "Princípios fundamentais",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "NÃO constitui fundamento da República Federativa do Brasil, segundo o art. 1º da Constituição Federal,",
    "alternativas": {
      "A": "a soberania.",
      "B": "a cidadania.",
      "C": "a dignidade da pessoa humana.",
      "D": "a erradicação da pobreza e da marginalização.",
      "E": "o pluralismo político."
    },
    "gabarito": "D",
    "comentario": "Os fundamentos (art. 1º) são: soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa e pluralismo político. A erradicação da pobreza é objetivo fundamental (art. 3º).",
    "fundamento": "CF/88, arts. 1º e 3º.",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 531,
    "disciplina": "Direito Constitucional",
    "assunto": "Organização do Estado: repartição de competências",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Compete privativamente à União legislar sobre",
    "alternativas": {
      "A": "o planejamento urbano de cada município.",
      "B": "a criação e a extinção de cargos da polícia militar de cada Estado.",
      "C": "o policiamento ostensivo em cada Estado.",
      "D": "a organização das polícias civis estaduais.",
      "E": "normas gerais de organização, efetivos, material bélico, garantias, convocação e mobilização das polícias militares e dos corpos de bombeiros militares."
    },
    "gabarito": "E",
    "comentario": "A União legisla privativamente sobre normas gerais das PMs e dos bombeiros militares. A cada Estado cabe organizar a sua polícia dentro dessas normas.",
    "fundamento": "CF/88, art. 22, XXI.",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 532,
    "disciplina": "Direito Constitucional",
    "assunto": "Administração Pública: dos militares dos Estados",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Aos militares dos Estados, do Distrito Federal e dos Territórios aplicam-se, entre outras, as seguintes regras da Constituição Federal:",
    "alternativas": {
      "A": "ao militar são proibidas a sindicalização e a greve.",
      "B": "o militar em atividade pode filiar-se a partidos políticos.",
      "C": "é assegurado o direito de greve, desde que em serviços essenciais.",
      "D": "o militar não pode ser punido com prisão disciplinar.",
      "E": "é livre a sindicalização, desde que a atividade não seja de segurança pública."
    },
    "gabarito": "A",
    "comentario": "O art. 142, § 3º, IV, proíbe a sindicalização e a greve ao militar. Ele se aplica aos militares estaduais por força do art. 42, § 1º. O militar da ativa também não pode filiar-se a partidos políticos (inciso V).",
    "fundamento": "CF/88, arts. 42, § 1º, e 142, § 3º, IV e V.",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 533,
    "disciplina": "Direito Constitucional",
    "assunto": "Organização dos Poderes: Poder Legislativo",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a Constituição Federal, o Senado Federal compõe-se de representantes dos Estados e do Distrito Federal, eleitos segundo o princípio majoritário. Cada Estado e o Distrito Federal elegem",
    "alternativas": {
      "A": "três senadores, com mandato de oito anos.",
      "B": "dois senadores, com mandato de quatro anos.",
      "C": "três senadores, com mandato de quatro anos.",
      "D": "dois senadores, com mandato de oito anos.",
      "E": "um senador por 100 mil habitantes, com mandato de seis anos."
    },
    "gabarito": "A",
    "comentario": "Cada Estado e o DF elegem três senadores, com mandato de oito anos. A representação é renovada de quatro em quatro anos, alternadamente por um e por dois terços.",
    "fundamento": "CF/88, art. 46.",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 534,
    "disciplina": "Direito Constitucional",
    "assunto": "Defesa do Estado: segurança pública",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "As polícias militares e os corpos de bombeiros militares, forças auxiliares e reserva do Exército, subordinam-se, juntamente com as polícias civis, aos",
    "alternativas": {
      "A": "Prefeitos dos municípios onde atuam.",
      "B": "Comandantes do Exército, em tempo de paz.",
      "C": "Governadores dos Estados, do Distrito Federal e dos Territórios.",
      "D": "Ministro da Defesa.",
      "E": "Presidente da República, diretamente."
    },
    "gabarito": "C",
    "comentario": "Pelo art. 144, § 6º, as PMs e os bombeiros militares subordinam-se, com as polícias civis, aos governadores. As PMs exercem a polícia ostensiva e a preservação da ordem pública (§ 5º).",
    "fundamento": "CF/88, art. 144, §§ 5º e 6º.",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 535,
    "disciplina": "Direito Constitucional",
    "assunto": "Defesa do Estado e das instituições democráticas: estado de defesa",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sobre o estado de defesa, previsto na Constituição Federal, é correto afirmar que",
    "alternativas": {
      "A": "é decretado pelo Congresso Nacional, por prazo indeterminado.",
      "B": "pode ser decretado pelo Presidente da República, em locais restritos e determinados, por até 30 dias, prorrogáveis uma vez por igual período.",
      "C": "é cabível apenas em caso de guerra declarada.",
      "D": "pode abranger todo o território nacional, com duração máxima de 90 dias.",
      "E": "dispensa a oitiva do Conselho da República e do Conselho de Defesa Nacional."
    },
    "gabarito": "B",
    "comentario": "O Presidente decreta o estado de defesa, após ouvir o Conselho da República e o Conselho de Defesa Nacional, para preservar ou restabelecer a ordem pública ou a paz social em locais restritos e determinados. O prazo máximo é de 30 dias, prorrogável uma vez por igual período, se persistirem as razões.",
    "fundamento": "CF/88, art. 136, caput e § 2º.",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 536,
    "disciplina": "Direitos Humanos e Legislação Extravagante",
    "assunto": "Teoria geral dos direitos humanos: gerações",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Os direitos humanos de segunda geração (ou dimensão) correspondem aos direitos",
    "alternativas": {
      "A": "civis e políticos, ligados à liberdade.",
      "B": "de solidariedade, como o meio ambiente equilibrado.",
      "C": "sociais, econômicos e culturais, ligados à igualdade material.",
      "D": "relativos à engenharia genética e à biotecnologia.",
      "E": "exclusivos dos povos indígenas."
    },
    "gabarito": "C",
    "comentario": "A primeira geração traz os direitos civis e políticos (liberdade). A segunda, os direitos sociais, econômicos e culturais (igualdade). A terceira, os de solidariedade ou fraternidade (paz, meio ambiente, desenvolvimento).",
    "fundamento": "Evolução histórica e gerações de direitos humanos (edital, item 2).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 537,
    "disciplina": "Direitos Humanos e Legislação Extravagante",
    "assunto": "Declaração Universal dos Direitos Humanos (ONU, 1948)",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A Declaração Universal dos Direitos Humanos",
    "alternativas": {
      "A": "foi aprovada em 1948 pela Organização dos Estados Americanos (OEA).",
      "B": "foi adotada como tratado em 1969, com sanções aos Estados que a descumprissem.",
      "C": "foi proclamada em 1948 pela Assembleia Geral da ONU e afirma que todos os seres humanos nascem livres e iguais em dignidade e direitos.",
      "D": "não faz menção à dignidade da pessoa humana.",
      "E": "aplica-se somente aos países que a ratificaram, como tratado."
    },
    "gabarito": "C",
    "comentario": "A DUDH foi proclamada pela Assembleia Geral da ONU em 10 de dezembro de 1948. Seu art. 1º diz que todos nascem livres e iguais em dignidade e direitos. É uma declaração, que se tornou referência para os tratados posteriores. A Convenção Americana é de 1969 e do sistema da OEA.",
    "fundamento": "DUDH, 1948, art. 1º (edital, item 4).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 538,
    "disciplina": "Direitos Humanos e Legislação Extravagante",
    "assunto": "Incorporação dos tratados internacionais de Direitos Humanos",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a Constituição Federal, os tratados e convenções internacionais sobre direitos humanos que forem aprovados, em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros, serão",
    "alternativas": {
      "A": "equivalentes às leis complementares.",
      "B": "equivalentes às leis ordinárias.",
      "C": "equivalentes às emendas constitucionais.",
      "D": "hierarquicamente inferiores às leis ordinárias.",
      "E": "considerados normas meramente programáticas."
    },
    "gabarito": "C",
    "comentario": "O art. 5º, § 3º, dá aos tratados de direitos humanos aprovados pelo rito das emendas o status de emenda constitucional. Os aprovados sem esse rito têm, segundo o STF, caráter supralegal, ficando abaixo da Constituição e acima das leis.",
    "fundamento": "CF/88, art. 5º, §§ 2º e 3º (edital, item 3).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 539,
    "disciplina": "Direitos Humanos e Legislação Extravagante",
    "assunto": "Convenção Americana sobre Direitos Humanos (Pacto de San José)",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos da Convenção Americana sobre Direitos Humanos (Decreto 678/1992), toda pessoa detida ou retida deve ser conduzida",
    "alternativas": {
      "A": "no prazo máximo de 30 dias, à presença de um delegado de polícia.",
      "B": "somente se o crime for considerado grave.",
      "C": "à presença do Ministério Público, que decidirá sobre a manutenção da prisão.",
      "D": "ao juiz, apenas se houver requerimento da defesa.",
      "E": "sem demora, à presença de um juiz ou outra autoridade autorizada por lei a exercer funções judiciais."
    },
    "gabarito": "E",
    "comentario": "O art. 7.5 da Convenção prevê a condução sem demora à presença de um juiz (fundamento da audiência de custódia). A mesma Convenção, no art. 7.7, só admite a prisão por dívida de natureza alimentar.",
    "fundamento": "Convenção Americana, art. 7º, 5 e 7 (Decreto 678/1992) (edital, item 5).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 540,
    "disciplina": "Direitos Humanos e Legislação Extravagante",
    "assunto": "Estatuto da Criança e do Adolescente",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o Estatuto da Criança e do Adolescente (Lei 8.069/1990), considera-se",
    "alternativas": {
      "A": "criança a pessoa até 14 anos de idade, e adolescente aquela entre 14 e 21 anos.",
      "B": "criança a pessoa até 10 anos de idade, e adolescente aquela entre 10 e 16 anos.",
      "C": "adolescente a pessoa entre 12 e 21 anos de idade, em qualquer caso.",
      "D": "criança a pessoa até 16 anos de idade incompletos.",
      "E": "criança a pessoa até 12 anos de idade incompletos, e adolescente aquela entre 12 e 18 anos de idade."
    },
    "gabarito": "E",
    "comentario": "O art. 2º do ECA define criança como a pessoa até 12 anos incompletos e adolescente como a pessoa entre 12 e 18 anos de idade. Em casos expressos em lei, o Estatuto se aplica excepcionalmente a pessoas entre 18 e 21 anos.",
    "fundamento": "Lei 8.069/1990, art. 2º (edital, item 6).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 541,
    "disciplina": "Direitos Humanos e Legislação Extravagante",
    "assunto": "Estatuto da Criança e do Adolescente: apreensão do adolescente",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "De acordo com o ECA, nenhum adolescente será privado de sua liberdade senão",
    "alternativas": {
      "A": "por ordem verbal do delegado de polícia, em qualquer caso.",
      "B": "por determinação do Conselho Tutelar.",
      "C": "por decisão do Ministério Público, sem controle judicial.",
      "D": "em flagrante de crime, qualquer que seja a sua idade, para ser recolhido a presídio comum.",
      "E": "em flagrante de ato infracional ou por ordem escrita e fundamentada da autoridade judiciária competente."
    },
    "gabarito": "E",
    "comentario": "Segundo o art. 106, o adolescente só pode ser privado da liberdade em flagrante de ato infracional ou por ordem judicial escrita e fundamentada. A internação provisória é limitada a 45 dias (art. 108).",
    "fundamento": "Lei 8.069/1990, arts. 106 e 108 (edital, item 6).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 542,
    "disciplina": "Direitos Humanos e Legislação Extravagante",
    "assunto": "Lei de Abuso de Autoridade (Lei 13.869/2019)",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a Lei de Abuso de Autoridade (Lei 13.869/2019), é correto afirmar que",
    "alternativas": {
      "A": "os crimes são de ação penal privada.",
      "B": "somente servidores civis podem ser sujeitos ativos dos crimes.",
      "C": "basta a culpa para a configuração do crime, dispensando a finalidade específica.",
      "D": "a lei prevê apenas penas de multa.",
      "E": "a divergência na interpretação da lei ou na avaliação de fatos e provas não configura, por si só, abuso de autoridade."
    },
    "gabarito": "E",
    "comentario": "Os crimes de abuso de autoridade são de ação penal pública incondicionada, e podem ser praticados por servidores públicos e militares. Exige-se a finalidade específica de prejudicar outrem, beneficiar a si ou a terceiro, ou agir por mero capricho ou satisfação pessoal. A divergência de interpretação, por si só, não configura crime (art. 1º, § 2º).",
    "fundamento": "Lei 13.869/2019, arts. 1º a 3º (edital, item 7).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 543,
    "disciplina": "Direitos Humanos e Legislação Extravagante",
    "assunto": "Lei de Tortura (Lei 9.455/1997)",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A condenação por crime de tortura acarretará, nos termos da Lei 9.455/1997,",
    "alternativas": {
      "A": "a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada.",
      "B": "apenas a perda da função, se o agente for reincidente.",
      "C": "a suspensão do cargo por 30 dias.",
      "D": "a possibilidade de fiança e de anistia.",
      "E": "o regime inicial obrigatoriamente aberto."
    },
    "gabarito": "A",
    "comentario": "A perda do cargo e a interdição pelo dobro do prazo da pena são efeitos da condenação (art. 1º, § 5º). A tortura é crime inafiançável e insuscetível de graça ou anistia (CF, art. 5º, XLIII). O regime inicial de cumprimento é o fechado (art. 1º, § 7º).",
    "fundamento": "Lei 9.455/1997, art. 1º, §§ 5º e 7º; CF/88, art. 5º, XLIII (edital, item 8).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 544,
    "disciplina": "Direitos Humanos e Legislação Extravagante",
    "assunto": "Lei Maria da Penha (Lei 11.340/2006)",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a Lei Maria da Penha, a conduta de reter documentos pessoais da mulher configura violência",
    "alternativas": {
      "A": "patrimonial.",
      "B": "física.",
      "C": "sexual.",
      "D": "moral.",
      "E": "psicológica."
    },
    "gabarito": "A",
    "comentario": "O art. 7º, IV, define a violência patrimonial como retenção, subtração, destruição parcial ou total de objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos.",
    "fundamento": "Lei 11.340/2006, art. 7º, IV (edital, itens 9 e 17).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },
  {
    "id": 545,
    "disciplina": "Direitos Humanos e Legislação Extravagante",
    "assunto": "Lei de Drogas (Lei 11.343/2006)",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Quem adquire, guarda ou traz consigo drogas para consumo pessoal está sujeito, segundo a Lei 11.343/2006, a",
    "alternativas": {
      "A": "reclusão de 5 a 15 anos, em regime inicial fechado.",
      "B": "detenção de 6 meses a 2 anos.",
      "C": "multa e perda da primariedade, com prisão em flagrante obrigatória.",
      "D": "advertência, prestação de serviços à comunidade ou medida educativa de comparecimento a programa ou curso, sem pena de prisão.",
      "E": "nenhuma medida, por ser conduta atípica em qualquer circunstância."
    },
    "gabarito": "D",
    "comentario": "O art. 28 da Lei prevê para o usuário advertência, prestação de serviços à comunidade e comparecimento a programa ou curso educativo. Não há pena privativa de liberdade. O tráfico (art. 33) é punido com reclusão de 5 a 15 anos.",
    "fundamento": "Lei 11.343/2006, art. 28 (edital, item 13).",
    "oficial": false,
    "concurso": "PMPE – Soldado"
  },

  {
    "id": 546,
    "disciplina": "Português",
    "assunto": "Interpretação de textos",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Leia o texto.\n\n“O uso progressivo da força pelo policial não é uma faculdade, mas um dever jurídico: cabe-lhe escolher, entre os meios disponíveis, aquele que seja necessário e proporcional à ameaça. Excedê-lo converte a ação legítima em abuso; deixar de empregá-lo, por temor ou omissão, converte a prudência em negligência.”\n\nDepreende-se do texto que",
    "alternativas": {
      "A": "o uso da força é uma opção pessoal do policial, que a emprega quando quiser.",
      "B": "a omissão do policial diante da ameaça é sempre uma forma de prudência.",
      "C": "tanto o excesso quanto a omissão no uso da força configuram falhas do agente.",
      "D": "apenas o excesso de força é censurável, pois a omissão é irrelevante.",
      "E": "a proporcionalidade é dispensável diante de ameaça grave."
    },
    "gabarito": "C",
    "comentario": "O texto trata o uso da força como dever jurídico e condena os dois extremos: o excesso (abuso) e a omissão por temor (negligência). Nenhuma das outras alternativas se sustenta no texto.",
    "fundamento": "Compreensão e interpretação de textos (Língua Portuguesa, item 1).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 547,
    "disciplina": "Português",
    "assunto": "Interpretação de textos",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Leia o texto.\n\n“Os documentos produzidos por agentes públicos gozam de presunção de legitimidade, o que não significa que sejam incontestáveis: a presunção é relativa e cede diante de prova em contrário. Quem os impugna, porém, assume o ônus de demonstrar o desacerto.”\n\nSegundo o texto, a presunção de legitimidade dos documentos públicos",
    "alternativas": {
      "A": "torna esses documentos impossíveis de contestar.",
      "B": "dispensa o interessado de produzir qualquer prova ao impugná-los.",
      "C": "vale apenas para documentos elaborados por autoridades militares.",
      "D": "é absoluta e só se aplica a atos de natureza vinculada.",
      "E": "pode ser afastada por prova em contrário, cabendo a quem a contesta demonstrar o erro."
    },
    "gabarito": "E",
    "comentario": "O texto afirma que a presunção é relativa (admite prova em contrário) e que o ônus da prova é de quem impugna o documento. As demais alternativas contradizem uma dessas ideias ou inventam informação.",
    "fundamento": "Compreensão e interpretação de textos; inferência (item 1).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 548,
    "disciplina": "Português",
    "assunto": "Tipologias e gêneros textuais",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Um manual que orienta o policial sobre como proceder em uma abordagem, com verbos no imperativo e no infinitivo (“posicione-se”, “comunicar a central”), apresenta predomínio da tipologia",
    "alternativas": {
      "A": "injuntiva (instrucional).",
      "B": "narrativa.",
      "C": "descritiva.",
      "D": "dissertativo-argumentativa.",
      "E": "poética."
    },
    "gabarito": "A",
    "comentario": "O texto injuntivo, ou instrucional, dá ordens, instruções e orientações de procedimento, e tem verbos no imperativo e no infinitivo. É o caso de manuais, receitas e regulamentos.",
    "fundamento": "Tipologias e gêneros textuais (item 2).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 549,
    "disciplina": "Português",
    "assunto": "Mecanismos de coesão textual",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "No período “O policial agiu com cautela; entretanto, o suspeito fugiu”, o conectivo “entretanto” estabelece uma relação de",
    "alternativas": {
      "A": "causa.",
      "B": "conclusão.",
      "C": "finalidade.",
      "D": "explicação.",
      "E": "oposição (adversidade)."
    },
    "gabarito": "E",
    "comentario": "“Entretanto” é conjunção coordenativa adversativa, equivalente a “mas”, “porém” e “todavia”. Ela opõe a cautela do policial à fuga do suspeito.",
    "fundamento": "Mecanismos de coesão textual; relações semânticas (itens 4 e 11).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 550,
    "disciplina": "Português",
    "assunto": "Sintaxe da oração e do período",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "No período “Informei ao comandante que a operação fora concluída”, a oração “que a operação fora concluída” classifica-se como subordinada",
    "alternativas": {
      "A": "substantiva objetiva direta.",
      "B": "substantiva subjetiva.",
      "C": "substantiva completiva nominal.",
      "D": "adjetiva restritiva.",
      "E": "adverbial causal."
    },
    "gabarito": "A",
    "comentario": "O verbo “informar” é bitransitivo (informar algo a alguém). A oração “que a operação fora concluída” é o objeto direto, introduzida por conjunção integrante. Ela é, portanto, uma substantiva objetiva direta.",
    "fundamento": "Sintaxe da oração e do período (item 9).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 551,
    "disciplina": "Português",
    "assunto": "Colocação pronominal",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que a colocação do pronome átono está de acordo com a norma-padrão.",
    "alternativas": {
      "A": "Me informe quando a viatura chegar.",
      "B": "Quem disse-me isso?",
      "C": "Nunca o vi tão atento ao serviço.",
      "D": "Espero que entreguem-se logo.",
      "E": "Tudo cumprirá-se no prazo."
    },
    "gabarito": "C",
    "comentario": "O advérbio de negação (“nunca”) atrai o pronome, e a próclise é obrigatória. Corrigindo as demais: “informe-me” (sem pronome no início da frase), “quem me disse” (pronome interrogativo), “que se entreguem” (conjunção subordinativa) e “tudo se cumprirá” (pronome indefinido).",
    "fundamento": "Colocação pronominal (item 15).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 552,
    "disciplina": "Português",
    "assunto": "Processos de formação de palavras",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa que contém uma palavra formada por parassíntese.",
    "alternativas": {
      "A": "amanhecer",
      "B": "desleal",
      "C": "lealdade",
      "D": "guarda-roupa",
      "E": "pontapé"
    },
    "gabarito": "A",
    "comentario": "Na parassíntese, prefixo e sufixo são acrescentados ao mesmo tempo (a + manh(ã) + ecer), e não existem as formas intermediárias “amanh” nem “manhecer”. As outras são: “desleal” (derivação prefixal), “lealdade” (derivação sufixal), “guarda-roupa” (composição por justaposição) e “pontapé” (composição por aglutinação).",
    "fundamento": "Processos de formação de palavras (item 16).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 553,
    "disciplina": "Português",
    "assunto": "Concordância nominal",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que a concordância nominal está de acordo com a norma-padrão.",
    "alternativas": {
      "A": "Seguem anexo os documentos solicitados.",
      "B": "Ela mesmo preparou o relatório.",
      "C": "Seguem anexos os documentos solicitados.",
      "D": "Os soldados estavam meios cansados.",
      "E": "“Obrigado”, disse a comandante ao fim da reunião."
    },
    "gabarito": "C",
    "comentario": "“Anexo” é adjetivo e concorda com o substantivo a que se refere: “anexos os documentos”. Nas outras: “ela mesma”, “meio cansados” (“meio” é advérbio e fica invariável) e “obrigada” (concorda com quem fala).",
    "fundamento": "Concordância nominal e verbal (item 13).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 554,
    "disciplina": "Português",
    "assunto": "Emprego do sinal indicativo de crase",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Assinale a alternativa em que o sinal indicativo de crase está empregado de acordo com a norma-padrão.",
    "alternativas": {
      "A": "O delegado foi à Brasília nesta semana.",
      "B": "Chegaram à pé ao local da ocorrência.",
      "C": "O soldado falou à ele sobre o plano.",
      "D": "Prefiro treinar à descansar.",
      "E": "O capitão entregou o relatório àquela unidade."
    },
    "gabarito": "E",
    "comentario": "Há crase em “àquela”, que é a preposição “a” mais o pronome demonstrativo “aquela”. Nas outras, não há crase antes de nome de cidade sem artigo (“a Brasília”), de palavra masculina (“a pé”), de pronome pessoal (“a ele”) nem de verbo (“a descansar”).",
    "fundamento": "Emprego do sinal indicativo de crase (item 8).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 555,
    "disciplina": "Português",
    "assunto": "Significação das palavras",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "No período “O comandante foi taxativo: não haveria exceções”, o termo “taxativo” significa",
    "alternativas": {
      "A": "tímido, hesitante.",
      "B": "irônico, debochado.",
      "C": "categórico, que não admite ressalvas.",
      "D": "impreciso, vago.",
      "E": "tolerante, flexível."
    },
    "gabarito": "C",
    "comentario": "“Taxativo” é o que não admite contestação ou exceção, categórico. O próprio período completa o sentido, com “não haveria exceções”.",
    "fundamento": "Significação das palavras (item 17).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 556,
    "disciplina": "Língua Estrangeira (Inglês)",
    "assunto": "Compreensão e interpretação de textos",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Read the text.\n\n“Police officers must use force only when strictly necessary and in proportion to the seriousness of the offense. Excessive force can compromise public trust and lead to legal consequences.”\n\nAccording to the text, the use of force by police officers should be",
    "alternativas": {
      "A": "limited to what is necessary and proportionate.",
      "B": "unlimited whenever there is a suspect.",
      "C": "avoided in every situation, without exception.",
      "D": "decided by the public, not by the officers.",
      "E": "irrelevant to public trust."
    },
    "gabarito": "A",
    "comentario": "The text says force must be used “only when strictly necessary and in proportion to the seriousness of the offense”. That means limited, necessary and proportionate. It also warns that excessive force harms public trust.",
    "fundamento": "Compreensão e interpretação de gêneros textuais (Inglês, item 1).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 557,
    "disciplina": "Língua Estrangeira (Inglês)",
    "assunto": "Verbos modais",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Choose the alternative that correctly completes the sentence: “Police officers ______ obey the law, since no one is above it.”",
    "alternativas": {
      "A": "must",
      "B": "might",
      "C": "may",
      "D": "would",
      "E": "could"
    },
    "gabarito": "A",
    "comentario": "“Must” expresses obligation. “Might” and “may” express possibility, and “would” and “could” express hypothesis. They do not fit a duty imposed by law.",
    "fundamento": "Verbos modais: can, could, should, may, might, must, have to, would (item 3).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 558,
    "disciplina": "Língua Estrangeira (Inglês)",
    "assunto": "Present Perfect",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Choose the alternative that correctly completes the sentence: “She ______ for the military police for ten years and still works there.”",
    "alternativas": {
      "A": "worked",
      "B": "has worked",
      "C": "is working",
      "D": "had worked",
      "E": "will have worked"
    },
    "gabarito": "B",
    "comentario": "The present perfect (have/has + past participle) connects a past action to the present. It appears with “for” and “since” to say that something began in the past and continues now.",
    "fundamento": "Present Perfect Simple (item 3).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 559,
    "disciplina": "Língua Estrangeira (Inglês)",
    "assunto": "Orações condicionais",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Choose the alternative that expresses a correct third conditional.",
    "alternativas": {
      "A": "If the suspect surrendered earlier, the officers would not have used force.",
      "B": "If the suspect would surrender earlier, the officers had not used force.",
      "C": "If the suspect had surrendered earlier, the officers would not have used force.",
      "D": "If the suspect has surrendered earlier, the officers would not use force.",
      "E": "If the suspect surrenders earlier, the officers would not have used force."
    },
    "gabarito": "C",
    "comentario": "The third conditional (past unreal condition) is formed with “if + past perfect, would have + past participle”. It describes an imaginary situation in the past.",
    "fundamento": "Orações condicionais: third conditional (item 3).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 560,
    "disciplina": "Língua Estrangeira (Inglês)",
    "assunto": "Voz ativa e passiva",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Choose the alternative that correctly turns the sentence “The police are investigating the case” into the passive voice.",
    "alternativas": {
      "A": "The case is investigated by the police.",
      "B": "The case has been investigated by the police.",
      "C": "The case was being investigated by the police.",
      "D": "The case was investigating by the police.",
      "E": "The case is being investigated by the police."
    },
    "gabarito": "E",
    "comentario": "The passive of the present continuous is “am/is/are + being + past participle”. The object “the case” becomes the subject, and the verb stays in the present.",
    "fundamento": "Voz ativa e passiva (item 3).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 561,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Equivalência e negação (De Morgan)",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A negação da proposição “Carlos é policial ou Ana é delegada” é",
    "alternativas": {
      "A": "Carlos não é policial ou Ana não é delegada.",
      "B": "Carlos é policial e Ana é delegada.",
      "C": "Carlos não é policial e Ana não é delegada.",
      "D": "Carlos não é policial, se Ana é delegada.",
      "E": "Carlos é policial e Ana não é delegada."
    },
    "gabarito": "C",
    "comentario": "Pela lei de De Morgan, ~(p ∨ q) ≡ ~p ∧ ~q. Nega-se cada parte e troca-se “ou” por “e”.",
    "fundamento": "Proposições e conectivos lógicos; equivalência lógica (itens 1 e 2).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 562,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Conectivos lógicos: condicional",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Qual das proposições abaixo é verdadeira?",
    "alternativas": {
      "A": "Se 3 > 1, então 2 + 2 = 5.",
      "B": "Se 2 + 2 = 5, então 3 > 1.",
      "C": "2 + 2 = 5 e 3 > 1.",
      "D": "3 < 1 ou 2 + 2 = 5.",
      "E": "Não é verdade que 3 > 1."
    },
    "gabarito": "B",
    "comentario": "A condicional “p → q” só é falsa se p for verdadeira e q falsa. Em “Se 2 + 2 = 5, então 3 > 1”, o antecedente é falso, logo a condicional é verdadeira.",
    "fundamento": "Proposições e conectivos lógicos (item 1).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 563,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Argumentos válidos",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Considere as premissas: (I) “Se há treino, então há resultado”; (II) “Se há resultado, então há promoção”; (III) “Não houve promoção”. Logo, é válido concluir que",
    "alternativas": {
      "A": "houve treino.",
      "B": "houve resultado.",
      "C": "houve resultado, mas não treino.",
      "D": "não houve treino.",
      "E": "nada se pode concluir."
    },
    "gabarito": "D",
    "comentario": "Por silogismo hipotético, “se há treino, então há promoção”. Como não houve promoção, por modus tollens também não houve treino. Pela segunda premissa, a ausência de promoção também implica que não houve resultado.",
    "fundamento": "Lógica de argumentação: argumentos válidos e conclusões (item 2).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 564,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Combinações",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "De um grupo com 6 oficiais e 5 praças, deve-se formar uma comissão com 2 oficiais e 2 praças. O número de comissões possíveis é",
    "alternativas": {
      "A": "110",
      "B": "330",
      "C": "60",
      "D": "30",
      "E": "150"
    },
    "gabarito": "E",
    "comentario": "Escolhem-se os oficiais e os praças separadamente: C(6,2) · C(5,2) = 15 · 10 = 150.",
    "fundamento": "Técnicas de contagem; combinações (item 4).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 565,
    "disciplina": "Raciocínio Lógico",
    "assunto": "Probabilidade",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Lançam-se dois dados honestos de seis faces. A probabilidade de que a soma dos resultados seja 7 é",
    "alternativas": {
      "A": "1/9",
      "B": "7/36",
      "C": "1/12",
      "D": "5/36",
      "E": "1/6"
    },
    "gabarito": "E",
    "comentario": "Há 36 resultados possíveis. A soma 7 ocorre em 6 deles: (1,6), (2,5), (3,4), (4,3), (5,2) e (6,1). Logo, P = 6/36 = 1/6.",
    "fundamento": "Probabilidade (item 4).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 566,
    "disciplina": "Estatística",
    "assunto": "Conceitos: população, amostra e censo",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Em estatística, o censo é",
    "alternativas": {
      "A": "o estudo de uma pequena parte da população, escolhida ao acaso.",
      "B": "o conjunto de medidas de dispersão de uma amostra.",
      "C": "o gráfico que apresenta a distribuição das frequências.",
      "D": "o teste que compara duas médias.",
      "E": "o levantamento de dados de todos os elementos da população."
    },
    "gabarito": "E",
    "comentario": "No censo, todos os elementos da população são pesquisados. Quando se estuda apenas uma parte dela (amostra), fala-se em amostragem.",
    "fundamento": "Conceitos: população, censo, amostra aleatória (item 1).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 567,
    "disciplina": "Estatística",
    "assunto": "Medidas de tendência central",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Dado o conjunto de valores 5, 7, 7, 9 e 12, a média aritmética, a mediana e a moda são, respectivamente,",
    "alternativas": {
      "A": "7, 7 e 8.",
      "B": "8, 9 e 7.",
      "C": "9, 7 e 7.",
      "D": "8, 7 e 7.",
      "E": "8, 7 e 12."
    },
    "gabarito": "D",
    "comentario": "Média: (5 + 7 + 7 + 9 + 12)/5 = 40/5 = 8. Mediana: valor central dos dados ordenados, 7. Moda: valor mais frequente, 7.",
    "fundamento": "Medidas de centralidade e de posição (item 4).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 568,
    "disciplina": "Estatística",
    "assunto": "Medidas de dispersão",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A variância amostral (com divisor n − 1) dos valores 2, 4 e 6 é",
    "alternativas": {
      "A": "8/3",
      "B": "4",
      "C": "2",
      "D": "8",
      "E": "16/3"
    },
    "gabarito": "B",
    "comentario": "A média é 4. Os desvios quadráticos são 4, 0 e 4, somando 8. Dividindo por n − 1 = 2, obtém-se 4. Com divisor n (variância populacional), o resultado seria 8/3.",
    "fundamento": "Medidas de dispersão (item 4).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 569,
    "disciplina": "Estatística",
    "assunto": "Testes de hipóteses",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Em um teste de hipóteses, o erro do tipo I consiste em",
    "alternativas": {
      "A": "não rejeitar a hipótese nula quando ela é falsa.",
      "B": "rejeitar a hipótese nula quando ela é verdadeira.",
      "C": "aceitar a hipótese alternativa por haver amostra grande.",
      "D": "calcular erradamente a média amostral.",
      "E": "usar o teste t em vez do teste F."
    },
    "gabarito": "B",
    "comentario": "O erro do tipo I é rejeitar H0 sendo ela verdadeira (falso positivo), e sua probabilidade é o nível de significância α. O erro do tipo II é não rejeitar H0 sendo ela falsa.",
    "fundamento": "Testes de hipóteses (item 5).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 570,
    "disciplina": "Estatística",
    "assunto": "Análise de regressão linear",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Na reta de regressão linear ŷ = 2 + 3x, quando x aumenta em 1 unidade, o valor estimado de y",
    "alternativas": {
      "A": "aumenta em 2 unidades.",
      "B": "aumenta em 3 unidades.",
      "C": "aumenta em 5 unidades.",
      "D": "diminui em 3 unidades.",
      "E": "permanece constante."
    },
    "gabarito": "B",
    "comentario": "O coeficiente de x (3) é a inclinação da reta: a variação estimada de y para cada unidade de aumento em x. O 2 é o intercepto, valor estimado de y quando x = 0.",
    "fundamento": "Análise de regressão linear (item 6).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 571,
    "disciplina": "Informática",
    "assunto": "Segurança da informação: criptografia",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Na criptografia assimétrica, uma mensagem cifrada com a chave pública do destinatário só pode ser decifrada com",
    "alternativas": {
      "A": "a mesma chave pública, por qualquer pessoa.",
      "B": "a chave pública do remetente.",
      "C": "a chave privada do remetente.",
      "D": "a chave privada do próprio destinatário.",
      "E": "qualquer chave, desde que seja de 2048 bits."
    },
    "gabarito": "D",
    "comentario": "No par de chaves, o que uma cifra a outra decifra. A chave pública é distribuída livremente, e só o dono conhece a privada. Assim, só o destinatário lê a mensagem cifrada com a pública dele.",
    "fundamento": "Criptografia (item 3).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 572,
    "disciplina": "Informática",
    "assunto": "Ambientes operacionais: Prompt de Comando",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "No Prompt de Comando do Windows, o comando utilizado para listar o conteúdo de uma pasta é",
    "alternativas": {
      "A": "dir",
      "B": "ls",
      "C": "list",
      "D": "show",
      "E": "cd"
    },
    "gabarito": "A",
    "comentario": "“dir” lista arquivos e subpastas. O “ls” é do Linux, e o “cd” serve para mudar de pasta (“list” e “show” não são comandos do Prompt).",
    "fundamento": "Prompt de Comando (item 6).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 573,
    "disciplina": "Informática",
    "assunto": "Planilhas eletrônicas (Excel)",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Em uma planilha, as células A1 a A5 contêm os valores 5, 12, 8, 15 e 20. O resultado da fórmula =CONT.SE(A1:A5;\">10\") é",
    "alternativas": {
      "A": "2",
      "B": "4",
      "C": "60",
      "D": "3",
      "E": "5"
    },
    "gabarito": "D",
    "comentario": "A função CONT.SE conta quantas células do intervalo atendem ao critério. Os valores maiores que 10 são 12, 15 e 20, ou seja, 3 células.",
    "fundamento": "Fórmulas e funções em planilhas (item 7).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 574,
    "disciplina": "Informática",
    "assunto": "Editores de texto (Word)",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "No Microsoft Word 2019 em português, o atalho de teclado para aplicar negrito ao texto selecionado é",
    "alternativas": {
      "A": "Ctrl + B",
      "B": "Ctrl + S",
      "C": "Ctrl + I",
      "D": "Ctrl + T",
      "E": "Ctrl + N"
    },
    "gabarito": "E",
    "comentario": "No Word em português, Ctrl + N aplica negrito, Ctrl + I itálico e Ctrl + S sublinhado. Ctrl + B salva o documento e Ctrl + T seleciona tudo (Ctrl + B para negrito é do Word em inglês).",
    "fundamento": "Utilização de ferramentas de texto (item 7).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 575,
    "disciplina": "Informática",
    "assunto": "Computação em nuvem",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Quando um usuário utiliza serviços como Gmail ou Google Docs, por meio do navegador, sem instalar o programa em seu computador, o modelo de computação em nuvem utilizado é o",
    "alternativas": {
      "A": "SaaS (software como serviço).",
      "B": "IaaS (infraestrutura como serviço).",
      "C": "PaaS (plataforma como serviço).",
      "D": "DaaS (desktop como serviço).",
      "E": "intranet privada."
    },
    "gabarito": "A",
    "comentario": "No SaaS, o fornecedor entrega o aplicativo pronto pela internet, e o usuário apenas o utiliza. No IaaS, o cliente aluga infraestrutura (servidores, armazenamento), e no PaaS, uma plataforma para desenvolver aplicações.",
    "fundamento": "Computação em nuvem (item 2).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 576,
    "disciplina": "Direito Constitucional",
    "assunto": "Controle de constitucionalidade",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sobre o controle de constitucionalidade no Brasil, é correto afirmar que",
    "alternativas": {
      "A": "o controle concentrado é exercido por qualquer juiz, em qualquer processo.",
      "B": "a ação direta de inconstitucionalidade é julgada pelo Superior Tribunal de Justiça.",
      "C": "no controle difuso, a decisão tem sempre efeito vinculante e erga omnes.",
      "D": "o controle é apenas preventivo, antes da publicação da lei.",
      "E": "no controle difuso, qualquer juiz ou tribunal pode declarar, incidentalmente, a inconstitucionalidade de uma lei no caso concreto."
    },
    "gabarito": "E",
    "comentario": "O controle difuso é exercido por qualquer órgão do Judiciário, de modo incidental, e em regra com efeitos entre as partes. O controle concentrado (ADI, ADC, ADO e ADPF) é do STF, em regra.",
    "fundamento": "Controle de constitucionalidade (item 5).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 577,
    "disciplina": "Direito Constitucional",
    "assunto": "Poder constituinte",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O poder constituinte originário caracteriza-se por ser",
    "alternativas": {
      "A": "derivado, limitado e subordinado à Constituição anterior.",
      "B": "inicial, ilimitado juridicamente, autônomo e incondicionado.",
      "C": "exercido apenas pelo Congresso Nacional, por emenda.",
      "D": "condicionado às cláusulas pétreas da Constituição anterior.",
      "E": "limitado por tratados internacionais de direitos humanos."
    },
    "gabarito": "B",
    "comentario": "O poder originário inaugura a ordem jurídica e não se subordina ao direito anterior. Por isso é inicial, ilimitado (juridicamente), autônomo e incondicionado. O poder derivado (reformador) é limitado pela Constituição.",
    "fundamento": "Poder constituinte (item 3).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 578,
    "disciplina": "Direito Constitucional",
    "assunto": "Eficácia e aplicabilidade das normas constitucionais",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "As normas constitucionais de eficácia contida caracterizam-se por",
    "alternativas": {
      "A": "produzirem efeitos imediatos, mas poderem ter seu alcance restringido por lei posterior.",
      "B": "dependerem de lei para produzir qualquer efeito.",
      "C": "terem aplicabilidade imediata e não poderem ser restringidas.",
      "D": "serem meramente programáticas, sem eficácia jurídica.",
      "E": "exigirem sempre emenda constitucional para serem aplicadas."
    },
    "gabarito": "A",
    "comentario": "Na classificação de José Afonso da Silva, a norma de eficácia contida (ou restringível) produz efeitos desde a promulgação, mas o legislador pode restringir seu alcance. A de eficácia limitada depende de lei integradora, e a de eficácia plena produz todos os efeitos sem restrição possível.",
    "fundamento": "Eficácia e aplicabilidade das normas constitucionais (item 4).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 579,
    "disciplina": "Direito Constitucional",
    "assunto": "Organização do Estado: repartição de competências",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "É competência comum (administrativa) da União, dos Estados, do Distrito Federal e dos Municípios",
    "alternativas": {
      "A": "legislar sobre direito penal.",
      "B": "legislar sobre trânsito e transporte.",
      "C": "organizar o sistema monetário.",
      "D": "proteger o meio ambiente e combater a poluição em qualquer de suas formas.",
      "E": "legislar privativamente sobre desapropriação."
    },
    "gabarito": "D",
    "comentario": "O art. 23 da CF lista as competências comuns, entre elas a proteção do meio ambiente e o combate à poluição. Direito penal, trânsito e transporte e desapropriação são matérias de competência legislativa privativa da União (art. 22).",
    "fundamento": "CF/88, arts. 22 e 23 (item 7).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 580,
    "disciplina": "Direito Constitucional",
    "assunto": "Funções essenciais à Justiça",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "São princípios institucionais do Ministério Público, previstos na Constituição Federal,",
    "alternativas": {
      "A": "a unidade, a indivisibilidade e a independência funcional.",
      "B": "a hierarquia, a disciplina e a obediência funcional.",
      "C": "a unidade, a divisibilidade e a subordinação ao Poder Executivo.",
      "D": "a vitaliciedade, a irredutibilidade e a hierarquia funcional.",
      "E": "a legalidade, a moralidade e a subordinação funcional."
    },
    "gabarito": "A",
    "comentario": "O art. 127, § 1º, da CF estabelece como princípios institucionais do MP a unidade, a indivisibilidade e a independência funcional.",
    "fundamento": "CF/88, art. 127, § 1º (item 9).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 581,
    "disciplina": "Direito Administrativo",
    "assunto": "Regime jurídico-administrativo: princípios",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Não consta expressamente do rol de princípios do caput do art. 37 da Constituição Federal o princípio da",
    "alternativas": {
      "A": "legalidade.",
      "B": "impessoalidade.",
      "C": "moralidade.",
      "D": "razoabilidade.",
      "E": "eficiência."
    },
    "gabarito": "D",
    "comentario": "O art. 37, caput, prevê expressamente a legalidade, a impessoalidade, a moralidade, a publicidade e a eficiência. A razoabilidade é princípio implícito, extraído do devido processo legal.",
    "fundamento": "CF/88, art. 37, caput (item 1).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 582,
    "disciplina": "Direito Administrativo",
    "assunto": "Poderes administrativos: poder de polícia",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "São atributos do poder de polícia:",
    "alternativas": {
      "A": "vinculação, gratuidade e imperatividade.",
      "B": "discricionariedade, autoexecutoriedade e coercibilidade.",
      "C": "hierarquia, disciplina e subordinação.",
      "D": "omissão, gratuidade e coercibilidade.",
      "E": "regulamentação, hierarquia e discricionariedade."
    },
    "gabarito": "B",
    "comentario": "A doutrina aponta como atributos do poder de polícia a discricionariedade (em regra), a autoexecutoriedade (executar sem ir ao Judiciário) e a coercibilidade (imposição, mesmo contra a vontade do administrado).",
    "fundamento": "Poderes administrativos (item 2).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 583,
    "disciplina": "Direito Administrativo",
    "assunto": "Responsabilidade civil do Estado",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a Constituição Federal, as pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos respondem pelos danos que seus agentes, nessa qualidade, causarem a terceiros. Essa responsabilidade é",
    "alternativas": {
      "A": "subjetiva, dependendo sempre da prova de culpa do agente.",
      "B": "objetiva, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.",
      "C": "objetiva, sem direito de regresso contra o agente.",
      "D": "subjetiva, e o agente só responde se agir com dolo.",
      "E": "inexistente nos casos de omissão do poder público."
    },
    "gabarito": "B",
    "comentario": "O art. 37, § 6º, adota a responsabilidade objetiva (teoria do risco administrativo) do Estado e garante o direito de regresso contra o agente responsável, nos casos de dolo ou culpa.",
    "fundamento": "CF/88, art. 37, § 6º (item 5).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 584,
    "disciplina": "Direito Administrativo",
    "assunto": "Atos administrativos: anulação e revogação",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sobre a extinção dos atos administrativos, é correto afirmar que",
    "alternativas": {
      "A": "a revogação decorre de ilegalidade e tem efeitos retroativos.",
      "B": "a anulação é ato discricionário, baseado em conveniência e oportunidade.",
      "C": "a Administração não pode anular os próprios atos ilegais.",
      "D": "a anulação decorre de ilegalidade e, em regra, tem efeitos retroativos, enquanto a revogação decorre de conveniência e oportunidade e tem efeitos para o futuro.",
      "E": "a revogação só pode ser feita pelo Poder Judiciário."
    },
    "gabarito": "D",
    "comentario": "A Administração pode anular seus atos ilegais, e o Judiciário também pode. A anulação tem efeitos ex tunc, e a revogação, que só a Administração faz, tem efeitos ex nunc (Súmulas 346 e 473 do STF).",
    "fundamento": "Atos administrativos: extinção (item 4); Súmulas 346 e 473/STF.",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 585,
    "disciplina": "Direito Administrativo",
    "assunto": "Improbidade administrativa",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Com as alterações introduzidas pela Lei 14.230/2021 na Lei de Improbidade Administrativa (Lei 8.429/1992), a configuração dos atos de improbidade exige",
    "alternativas": {
      "A": "apenas a prova de culpa, ainda que leve.",
      "B": "somente a ocorrência de dano ao erário, independentemente de dolo.",
      "C": "a condenação criminal prévia do agente.",
      "D": "a existência de enriquecimento ilícito, em todos os casos.",
      "E": "a comprovação de dolo, estando excluída a modalidade culposa."
    },
    "gabarito": "E",
    "comentario": "Depois da Lei 14.230/2021, a improbidade exige conduta dolosa, com finalidade ilícita. A modalidade culposa, antes prevista para o dano ao erário, foi retirada da lei. A responsabilização por improbidade independe da criminal.",
    "fundamento": "Lei 8.429/1992, com redação da Lei 14.230/2021 (item 9).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 586,
    "disciplina": "Direito Penal",
    "assunto": "Lei penal: princípio da legalidade",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "De acordo com o Código Penal, o princípio da legalidade (ou da reserva legal) estabelece que",
    "alternativas": {
      "A": "o costume pode criar crimes e penas.",
      "B": "a lei penal retroage sempre, para punir fatos anteriores.",
      "C": "não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal.",
      "D": "o juiz pode criar penas por analogia contra o réu.",
      "E": "a pena pode ser definida por decreto do Poder Executivo."
    },
    "gabarito": "C",
    "comentario": "O art. 1º do CP e o art. 5º, XXXIX, da CF consagram a legalidade: só a lei, anterior ao fato, define crimes e penas. Isso proíbe a analogia contra o réu e a criação de crimes por costume.",
    "fundamento": "CP, art. 1º; CF/88, art. 5º, XXXIX (Direito Penal, itens 1 e 6).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 587,
    "disciplina": "Direito Penal",
    "assunto": "Erro de tipo",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sobre o erro sobre elemento constitutivo do tipo legal de crime (erro de tipo), previsto no art. 20 do Código Penal, é correto afirmar que",
    "alternativas": {
      "A": "exclui sempre a culpa, ainda que o erro seja evitável.",
      "B": "não tem qualquer efeito sobre a responsabilidade penal.",
      "C": "incide apenas sobre a ignorância da lei.",
      "D": "exclui o dolo, mas permite a punição por crime culposo, se o erro for evitável e houver previsão legal.",
      "E": "exclui a ilicitude da conduta."
    },
    "gabarito": "D",
    "comentario": "No erro de tipo o agente se engana sobre um elemento do tipo penal (por exemplo, leva a bolsa alheia achando que é sua). O dolo é excluído. Se o erro era evitável, responde por culpa, desde que o crime seja punido na forma culposa. Não se confunde com o erro de proibição, que é o erro sobre a ilicitude.",
    "fundamento": "CP, art. 20 (item 2.5).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 588,
    "disciplina": "Direito Penal",
    "assunto": "Excludentes de ilicitude: legítima defesa",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o Código Penal, entende-se em legítima defesa quem, usando moderadamente dos meios necessários, repele",
    "alternativas": {
      "A": "qualquer agressão, passada ou futura, ainda que justa.",
      "B": "apenas agressão a direito próprio, nunca de terceiros.",
      "C": "agressão futura e incerta.",
      "D": "injusta agressão, atual ou iminente, a direito seu ou de outrem.",
      "E": "agressão justa, praticada por autoridade no exercício de dever legal."
    },
    "gabarito": "D",
    "comentario": "O art. 25 exige agressão injusta, atual ou iminente, a direito próprio ou alheio, e uso moderado dos meios necessários. Não há legítima defesa contra agressão passada (seria vingança) nem contra agressão justa.",
    "fundamento": "CP, art. 25 (itens 2.9 e 2.10).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 589,
    "disciplina": "Direito Penal",
    "assunto": "Consumação e tentativa",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Salvo disposição em contrário, a pena do crime tentado corresponde à do crime consumado",
    "alternativas": {
      "A": "diminuída de metade.",
      "B": "aumentada de um terço.",
      "C": "diminuída de um a dois terços.",
      "D": "diminuída de um sexto a um terço.",
      "E": "reduzida a um quarto, em qualquer hipótese."
    },
    "gabarito": "C",
    "comentario": "O art. 14, parágrafo único, do CP adota a teoria objetiva: a pena da tentativa é a do crime consumado, diminuída de um a dois terços, conforme o quanto se aproximou da consumação.",
    "fundamento": "CP, art. 14, II e parágrafo único (itens 2.7 e 2.8).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 590,
    "disciplina": "Direito Penal",
    "assunto": "Crimes contra a administração pública",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "O funcionário público que se apropria de bem móvel público de que tem a posse em razão do cargo pratica o crime de",
    "alternativas": {
      "A": "concussão.",
      "B": "prevaricação.",
      "C": "peculato.",
      "D": "corrupção passiva.",
      "E": "advocacia administrativa."
    },
    "gabarito": "C",
    "comentario": "O peculato (art. 312 do CP) é a apropriação de dinheiro, valor ou bem móvel, público ou particular, de que o funcionário tem a posse em razão do cargo. Na concussão, o funcionário exige vantagem indevida, e na prevaricação retarda ou deixa de praticar ato de ofício.",
    "fundamento": "CP, art. 312 (item 5.5).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 591,
    "disciplina": "Direito Processual Penal",
    "assunto": "Inquérito policial",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Sobre o inquérito policial, é correto afirmar que",
    "alternativas": {
      "A": "é dispensável para a propositura da ação penal quando o titular da ação dispõe de elementos suficientes.",
      "B": "é indispensável, e a ação penal sem ele é sempre nula.",
      "C": "tem contraditório e ampla defesa plenos, como o processo.",
      "D": "é público e acessível a qualquer pessoa, sem restrição.",
      "E": "vícios nele ocorridos anulam automaticamente a ação penal."
    },
    "gabarito": "A",
    "comentario": "O inquérito é procedimento administrativo, inquisitório e dispensável. Seus vícios, em regra, não contaminam a ação penal. O sigilo é necessário às investigações, e o defensor tem acesso aos elementos já documentados (Súmula Vinculante 14).",
    "fundamento": "Inquérito policial: natureza e características (item 2.1); CPP, art. 12.",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 592,
    "disciplina": "Direito Processual Penal",
    "assunto": "Prisão em flagrante",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Considera-se em flagrante impróprio (ou quase flagrante) quem",
    "alternativas": {
      "A": "está cometendo a infração penal.",
      "B": "acaba de cometer a infração penal.",
      "C": "é perseguido, logo após cometer a infração, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser autor.",
      "D": "é encontrado, logo depois, com instrumentos, armas ou objetos que façam presumir ser autor da infração.",
      "E": "é induzido a cometer o crime por um policial, que prepara a ocorrência."
    },
    "gabarito": "C",
    "comentario": "A perseguição logo após o crime caracteriza o flagrante impróprio (art. 302, III). Estar cometendo ou acabar de cometer é o flagrante próprio, e ser encontrado logo depois com objetos é o flagrante presumido (ficto). O flagrante preparado é ilícito e torna o crime impossível (Súmula 145/STF).",
    "fundamento": "CPP, art. 302 (item 6).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 593,
    "disciplina": "Direito Processual Penal",
    "assunto": "Prisão preventiva",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "A prisão preventiva poderá ser decretada",
    "alternativas": {
      "A": "como antecipação do cumprimento da pena, após o recebimento da denúncia.",
      "B": "de ofício pelo juiz, na fase de investigação policial.",
      "C": "diretamente pela autoridade policial, sem a participação do Judiciário.",
      "D": "como garantia da ordem pública, da ordem econômica, por conveniência da instrução criminal ou para assegurar a aplicação da lei penal, havendo prova da existência do crime e indício suficiente de autoria.",
      "E": "sem necessidade de prova da existência do crime."
    },
    "gabarito": "D",
    "comentario": "O art. 312 do CPP traz os fundamentos e exige o fumus comissi delicti (prova da existência do crime e indício suficiente de autoria) e o perigo gerado pelo estado de liberdade. Desde a Lei 13.964/2019, o juiz não decreta a preventiva de ofício na fase investigativa (art. 311). A preventiva não é pena antecipada.",
    "fundamento": "CPP, arts. 311 e 312 (item 6).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 594,
    "disciplina": "Direito Processual Penal",
    "assunto": "Acordo de não persecução penal",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O Ministério Público poderá propor o acordo de não persecução penal quando o investigado tiver confessado formal e circunstanciadamente a prática de infração penal",
    "alternativas": {
      "A": "com violência ou grave ameaça, desde que a pena máxima seja inferior a 4 anos.",
      "B": "sem violência ou grave ameaça e com pena mínima inferior a 4 anos, desde que necessário e suficiente para reprovação e prevenção do crime.",
      "C": "com pena máxima superior a 4 anos, em qualquer caso.",
      "D": "sem necessidade de confissão, bastando a concordância da vítima.",
      "E": "a pedido do juiz, de ofício, ainda que o MP discorde."
    },
    "gabarito": "B",
    "comentario": "O art. 28-A do CPP exige, entre outros requisitos, confissão formal e circunstanciada, infração sem violência ou grave ameaça e pena mínima inferior a 4 anos. A proposta é do MP, e a homologação, do juiz.",
    "fundamento": "CPP, art. 28-A (item 2.4).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 595,
    "disciplina": "Direito Processual Penal",
    "assunto": "Provas: provas ilícitas",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o Código de Processo Penal, as provas ilícitas são",
    "alternativas": {
      "A": "admissíveis, desde que relevantes para a descoberta da verdade.",
      "B": "inadmissíveis, devendo ser desentranhadas do processo, assim entendidas as obtidas em violação a normas constitucionais ou legais.",
      "C": "válidas, se obtidas por agente público no exercício da função.",
      "D": "admissíveis apenas contra o réu.",
      "E": "consideradas somente depois de sentença transitada em julgado."
    },
    "gabarito": "B",
    "comentario": "O art. 157 do CPP e o art. 5º, LVI, da CF tornam inadmissíveis as provas obtidas por meios ilícitos. Elas devem ser desentranhadas, e o juiz que conhecer do conteúdo da prova declarada inadmissível não proferirá a sentença (§ 5º).",
    "fundamento": "CPP, art. 157; CF/88, art. 5º, LVI (item 5).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 596,
    "disciplina": "Direitos e Garantias Fundamentais",
    "assunto": "CF/88, art. 5º: sigilo das comunicações",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a Constituição Federal, é inviolável o sigilo da correspondência e das comunicações telegráficas, de dados e das comunicações telefônicas, salvo",
    "alternativas": {
      "A": "por determinação de qualquer autoridade policial, em investigação.",
      "B": "por requisição do Ministério Público, sem controle judicial, em qualquer caso.",
      "C": "quando o investigado for funcionário público.",
      "D": "no último caso, por ordem judicial, nas hipóteses e na forma que a lei estabelecer para fins de investigação criminal ou instrução processual penal.",
      "E": "por decisão do Conselho Tutelar, em qualquer caso."
    },
    "gabarito": "D",
    "comentario": "O art. 5º, XII, admite a quebra do sigilo apenas das comunicações telefônicas, por ordem judicial, para fins penais. A interceptação é regulada pela Lei 9.296/1996.",
    "fundamento": "CF/88, art. 5º, XII.",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 597,
    "disciplina": "Direitos e Garantias Fundamentais",
    "assunto": "CF/88, art. 5º: direitos do preso",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a Constituição Federal, o preso será informado de seus direitos, entre os quais",
    "alternativas": {
      "A": "o de permanecer calado, sendo-lhe assegurada a assistência da família e de advogado.",
      "B": "o de não ser identificado pelo responsável por sua prisão.",
      "C": "o de ser mantido incomunicável por até 30 dias.",
      "D": "o de ser ouvido apenas depois de confessar o crime.",
      "E": "o de receber visitas somente da autoridade policial."
    },
    "gabarito": "A",
    "comentario": "O art. 5º, LXIII, assegura ao preso o direito ao silêncio e a assistência da família e de advogado. O inciso LXIV garante que o preso tem direito à identificação dos responsáveis por sua prisão e por seu interrogatório policial.",
    "fundamento": "CF/88, art. 5º, LXIII e LXIV.",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 598,
    "disciplina": "Direitos e Garantias Fundamentais",
    "assunto": "CF/88, art. 144: polícias",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o art. 144 da Constituição Federal, às polícias civis incumbem, ressalvada a competência da União,",
    "alternativas": {
      "A": "a polícia ostensiva e a preservação da ordem pública.",
      "B": "as funções de polícia judiciária e a apuração de infrações penais, exceto as militares.",
      "C": "a execução de atividades de defesa civil.",
      "D": "o patrulhamento ostensivo das rodovias federais.",
      "E": "a apuração de infrações penais militares."
    },
    "gabarito": "B",
    "comentario": "As polícias civis exercem a polícia judiciária e apuram infrações penais comuns (exceto as militares). A polícia ostensiva e a preservação da ordem pública são das polícias militares (art. 144, § 5º).",
    "fundamento": "CF/88, art. 144, §§ 4º e 5º.",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 599,
    "disciplina": "Direitos e Garantias Fundamentais",
    "assunto": "CF/88, art. 42: militares dos Estados",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "De acordo com a Constituição Federal, os membros das polícias militares e dos corpos de bombeiros militares são",
    "alternativas": {
      "A": "servidores civis, com regime celetista.",
      "B": "militares dos Estados, do Distrito Federal e dos Territórios, e suas instituições são organizadas com base na hierarquia e disciplina.",
      "C": "militares federais, subordinados ao Exército.",
      "D": "agentes políticos, eleitos pelo voto popular.",
      "E": "servidores públicos civis, organizados em carreira de Estado."
    },
    "gabarito": "B",
    "comentario": "O art. 42 da CF define os membros das PMs e dos bombeiros militares como militares dos Estados, do DF e dos Territórios, e dispõe que suas instituições se organizam com base na hierarquia e disciplina, subordinados ao governador.",
    "fundamento": "CF/88, art. 42, caput.",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 600,
    "disciplina": "Direitos e Garantias Fundamentais",
    "assunto": "Declaração Universal dos Direitos Humanos",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a Declaração Universal dos Direitos Humanos (1948),",
    "alternativas": {
      "A": "o tratamento degradante é permitido em tempos de guerra.",
      "B": "a tortura é admitida para obtenção de confissão em crimes graves.",
      "C": "somente cidadãos de países signatários têm direito à vida e à liberdade.",
      "D": "a escravidão é permitida por contrato.",
      "E": "ninguém será submetido à tortura, nem a tratamento ou castigo cruel, desumano ou degradante."
    },
    "gabarito": "E",
    "comentario": "O art. 5º da DUDH proíbe a tortura e o tratamento ou castigo cruel, desumano ou degradante, sem exceção. O art. 4º proíbe a escravidão e a servidão em todas as suas formas.",
    "fundamento": "DUDH, 1948, arts. 4º e 5º.",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 601,
    "disciplina": "Direitos e Garantias Fundamentais",
    "assunto": "Lei Orgânica Nacional das Polícias Militares (Lei 14.751/2023)",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A Lei 14.751/2023, que institui a Lei Orgânica Nacional das Polícias Militares e dos Corpos de Bombeiros Militares, fundamenta-se na competência",
    "alternativas": {
      "A": "exclusiva dos Estados para legislar sobre suas polícias.",
      "B": "privativa da União para legislar sobre normas gerais dessas instituições (CF, art. 22, XXI).",
      "C": "comum dos Municípios para organizar a segurança pública.",
      "D": "legislativa dos Municípios sobre guardas municipais.",
      "E": "do Poder Judiciário para organizar as corporações militares."
    },
    "gabarito": "B",
    "comentario": "O art. 22, XXI, da CF dá à União a competência privativa para legislar sobre normas gerais de organização, efetivos, material bélico, garantias, convocação e mobilização das PMs e dos corpos de bombeiros militares. A Lei Orgânica Nacional é exercício dessa competência.",
    "fundamento": "Lei 14.751/2023; CF/88, art. 22, XXI.",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 602,
    "disciplina": "Direitos e Garantias Fundamentais",
    "assunto": "Convenção Interamericana para Prevenir e Punir a Tortura",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Para a Convenção Interamericana para Prevenir e Punir a Tortura (Decreto 98.386/1989), entende-se por tortura",
    "alternativas": {
      "A": "somente o ato que cause dor física intensa e lesão permanente.",
      "B": "apenas as condutas praticadas por particulares contra funcionários públicos.",
      "C": "apenas os atos praticados em tempo de guerra.",
      "D": "somente os atos que resultem em morte da vítima.",
      "E": "todo ato pelo qual se infligem intencionalmente penas ou sofrimentos físicos ou mentais, e também a aplicação de métodos tendentes a anular a personalidade da vítima, ainda que não causem dor física ou angústia psíquica."
    },
    "gabarito": "E",
    "comentario": "A Convenção tem um conceito amplo: abrange sofrimentos físicos ou mentais infligidos intencionalmente e também métodos que anulam a personalidade ou diminuem a capacidade física ou mental, mesmo sem dor física.",
    "fundamento": "Convenção Interamericana para Prevenir e Punir a Tortura, art. 2º (Decreto 98.386/1989).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 603,
    "disciplina": "Direitos e Garantias Fundamentais",
    "assunto": "Estatuto da Criança e do Adolescente: ato infracional",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o Estatuto da Criança e do Adolescente, considera-se ato infracional",
    "alternativas": {
      "A": "a conduta descrita como crime ou contravenção penal.",
      "B": "apenas a conduta descrita como crime.",
      "C": "qualquer infração administrativa praticada por adolescente.",
      "D": "somente o crime praticado com violência.",
      "E": "a conduta de criança que descumpre regras escolares."
    },
    "gabarito": "A",
    "comentario": "O art. 103 do ECA define ato infracional como a conduta descrita como crime ou contravenção penal. A criança que o pratica recebe medidas de proteção (art. 101), e o adolescente, medidas socioeducativas (art. 112).",
    "fundamento": "Lei 8.069/1990, art. 103.",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 604,
    "disciplina": "Direitos e Garantias Fundamentais",
    "assunto": "Estatuto da Pessoa Idosa",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do Estatuto da Pessoa Idosa (Lei 10.741/2003), é pessoa idosa aquela com idade",
    "alternativas": {
      "A": "igual ou superior a 65 anos, sem distinção entre as faixas etárias.",
      "B": "igual ou superior a 70 anos, para todos os fins.",
      "C": "superior a 80 anos, para todos os fins.",
      "D": "igual ou superior a 60 anos, e, entre elas, as maiores de 80 anos têm prioridade especial.",
      "E": "igual ou superior a 55 anos, para o atendimento prioritário."
    },
    "gabarito": "D",
    "comentario": "O art. 1º do Estatuto considera idosa a pessoa com 60 anos ou mais. O art. 3º, § 2º, dá prioridade especial aos maiores de 80 anos, dentro da prioridade geral dos idosos.",
    "fundamento": "Lei 10.741/2003, arts. 1º e 3º, § 2º.",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 605,
    "disciplina": "Direitos e Garantias Fundamentais",
    "assunto": "Lei 13.060/2014: instrumentos de menor potencial ofensivo",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo a Lei 13.060/2014, que disciplina o uso dos instrumentos de menor potencial ofensivo pelos agentes de segurança pública,",
    "alternativas": {
      "A": "é sempre legítimo o uso de arma de fogo contra quem foge.",
      "B": "o uso da força dispensa os princípios da legalidade e da necessidade.",
      "C": "não é legítimo o uso de arma de fogo contra pessoa em fuga que esteja desarmada ou que não represente risco imediato de morte ou lesão aos agentes ou a terceiros.",
      "D": "não se admite o uso de qualquer instrumento de menor potencial ofensivo.",
      "E": "o agente pode disparar contra veículo em fuga em qualquer hipótese."
    },
    "gabarito": "C",
    "comentario": "O art. 2º da Lei 13.060/2014 manda priorizar os instrumentos de menor potencial ofensivo e observar os princípios da legalidade, necessidade, razoabilidade e proporcionalidade. Veda o disparo de arma de fogo contra pessoa em fuga desarmada ou que não represente risco imediato.",
    "fundamento": "Lei 13.060/2014, art. 2º.",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 606,
    "disciplina": "Direito Penal Militar",
    "assunto": "Aplicação da lei penal militar: tempo do crime",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "De acordo com o Código Penal Militar, considera-se praticado o crime",
    "alternativas": {
      "A": "no momento do resultado, ainda que outro seja o da ação.",
      "B": "no momento da denúncia.",
      "C": "no momento da ação ou omissão, ainda que outro seja o do resultado.",
      "D": "no momento da sentença penal condenatória.",
      "E": "apenas no momento em que o fato chegou ao conhecimento da autoridade militar."
    },
    "gabarito": "C",
    "comentario": "O art. 5º do CPM adota a teoria da atividade (ou da ação): o tempo do crime é o da ação ou omissão, mesmo que o resultado ocorra depois.",
    "fundamento": "CPM (Decreto-Lei 1.001/1969), art. 5º (item 1).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 607,
    "disciplina": "Direito Penal Militar",
    "assunto": "Crimes militares: competência do júri",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Quando os crimes militares forem dolosos contra a vida e cometidos por militar contra civil, a competência para julgá-los será",
    "alternativas": {
      "A": "da Justiça Militar, por conselho de justiça.",
      "B": "do Tribunal do Júri.",
      "C": "do comandante da unidade, em processo administrativo.",
      "D": "do Superior Tribunal Militar.",
      "E": "da Justiça Federal, sempre."
    },
    "gabarito": "B",
    "comentario": "O art. 9º, § 1º, do CPM, com a redação da Lei 13.491/2017, atribui ao Tribunal do Júri os crimes dolosos contra a vida cometidos por militar contra civil. Os dolosos contra a vida de militar contra militar continuam na Justiça Militar.",
    "fundamento": "CPM, art. 9º, § 1º; CF/88, art. 125, § 4º (itens 1 e 9).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 608,
    "disciplina": "Direito Penal Militar",
    "assunto": "Concurso de agentes",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Segundo o Código Penal Militar, quem, de qualquer modo, concorre para o crime",
    "alternativas": {
      "A": "é sempre isento de pena.",
      "B": "responde apenas se for militar de patente superior.",
      "C": "não responde, se não for o executor material.",
      "D": "incide nas penas a este cominadas.",
      "E": "responde apenas por contravenção penal."
    },
    "gabarito": "D",
    "comentario": "O art. 53 do CPM adota, como regra, a teoria unitária: todos os que concorrem para o crime respondem pelas penas cominadas, na medida de sua culpabilidade.",
    "fundamento": "CPM, art. 53 (item 4).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 609,
    "disciplina": "Direito Penal Militar",
    "assunto": "Crimes militares em tempo de paz: deserção",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Fácil",
    "tipo": "Múltipla Escolha",
    "enunciado": "O militar que se ausenta, sem licença, da unidade em que serve ou do lugar em que deve permanecer, por mais de oito dias, pratica o crime de",
    "alternativas": {
      "A": "deserção.",
      "B": "abandono de posto.",
      "C": "insubordinação.",
      "D": "motim.",
      "E": "revolta."
    },
    "gabarito": "A",
    "comentario": "A deserção (art. 187 do CPM) exige a ausência sem licença por mais de oito dias. O abandono de posto é deixar o posto ou lugar de serviço sem ordem, e o motim e a revolta são reuniões de militares com agressão à ordem.",
    "fundamento": "CPM, art. 187 (item 9).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 610,
    "disciplina": "Direito Penal Militar",
    "assunto": "Crimes militares em tempo de paz: recusa de obediência",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "A conduta do militar que recusa obedecer a ordem do superior sobre assunto ou matéria de serviço configura o crime de",
    "alternativas": {
      "A": "desrespeito a superior.",
      "B": "deserção.",
      "C": "abandono de posto.",
      "D": "recusa de obediência.",
      "E": "covardia."
    },
    "gabarito": "D",
    "comentario": "O art. 163 do CPM define a recusa de obediência: recusar obedecer a ordem do superior sobre assunto ou matéria de serviço, ou relativamente a dever imposto em lei, regulamento ou instrução.",
    "fundamento": "CPM, art. 163 (item 9).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 611,
    "disciplina": "Direito Processual Penal Militar",
    "assunto": "Polícia judiciária militar",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "No processo penal militar, a polícia judiciária militar tem por função",
    "alternativas": {
      "A": "julgar os crimes militares, no lugar dos conselhos de justiça.",
      "B": "apurar apenas os crimes comuns praticados por militares.",
      "C": "executar as penas privativas de liberdade aplicadas aos militares.",
      "D": "oferecer a denúncia pelos crimes militares.",
      "E": "apurar os crimes militares e sua autoria, e é exercida por autoridades militares, nos termos da lei."
    },
    "gabarito": "E",
    "comentario": "Nos termos do CPPM, a polícia judiciária militar é exercida por autoridades militares e apura as infrações penais militares e sua autoria, oferecendo ao Ministério Público os elementos para a ação penal.",
    "fundamento": "CPPM (Decreto-Lei 1.002/1969), arts. 7º e 8º (item 2).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 612,
    "disciplina": "Direito Processual Penal Militar",
    "assunto": "Inquérito policial militar: prazo",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Nos termos do Código de Processo Penal Militar, o inquérito policial militar deve terminar no prazo de",
    "alternativas": {
      "A": "10 dias, se o indiciado estiver preso, e 30 dias, se estiver solto, sem possibilidade de prorrogação.",
      "B": "30 dias, se o indiciado estiver preso, e 60 dias, se estiver solto.",
      "C": "15 dias, em qualquer hipótese.",
      "D": "90 dias, se o indiciado estiver solto, e 30 dias, se estiver preso.",
      "E": "20 dias, se o indiciado estiver preso, e 40 dias, se estiver solto, podendo este último ser prorrogado por mais 20 dias."
    },
    "gabarito": "E",
    "comentario": "O art. 20 do CPPM fixa 20 dias para o indiciado preso (contados da execução da ordem de prisão) e 40 dias para o solto (contados da instauração), prorrogável por mais 20 dias pela autoridade militar superior, se as diligências indispensáveis não estiverem concluídas.",
    "fundamento": "CPPM, art. 20 (item 3).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 613,
    "disciplina": "Direito Processual Penal Militar",
    "assunto": "Ação penal militar",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "No processo penal militar, a ação penal é",
    "alternativas": {
      "A": "privada, promovida por queixa da vítima.",
      "B": "pública, promovida por portaria do comandante da unidade.",
      "C": "pública, promovida por denúncia do Ministério Público.",
      "D": "pública condicionada à representação do superior hierárquico, em todos os casos.",
      "E": "promovida pela própria autoridade de polícia judiciária militar."
    },
    "gabarito": "C",
    "comentario": "A ação penal militar é pública e promovida por denúncia do Ministério Público (CPPM, art. 29, e CPM, art. 121). O comandante apura os fatos, mas não oferece a denúncia.",
    "fundamento": "CPPM, art. 29 (item 4).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 614,
    "disciplina": "Direito Processual Penal Militar",
    "assunto": "Foro militar e competência",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Médio",
    "tipo": "Múltipla Escolha",
    "enunciado": "Compete à Justiça Militar estadual processar e julgar os militares dos Estados nos crimes militares definidos em lei e",
    "alternativas": {
      "A": "as ações judiciais contra atos disciplinares militares, ressalvada a competência do júri quando a vítima for civil.",
      "B": "as ações cíveis de responsabilidade do Estado, em geral.",
      "C": "os crimes comuns praticados por civis contra militares.",
      "D": "os crimes praticados por policiais civis.",
      "E": "os mandados de segurança contra qualquer ato administrativo estadual."
    },
    "gabarito": "A",
    "comentario": "O art. 125, § 4º, da CF atribui à Justiça Militar estadual o julgamento dos militares dos Estados nos crimes militares e das ações contra atos disciplinares militares, ressalvada a competência do júri nos crimes dolosos contra a vida de civis. Ela não julga civis.",
    "fundamento": "CF/88, art. 125, § 4º (item 8).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  },
  {
    "id": 615,
    "disciplina": "Direito Processual Penal Militar",
    "assunto": "Medidas preventivas: prisão preventiva",
    "banca": "Instituto AOCP",
    "ano": 2026,
    "dificuldade": "Difícil",
    "tipo": "Múltipla Escolha",
    "enunciado": "Entre os fundamentos da prisão preventiva previstos no Código de Processo Penal Militar está",
    "alternativas": {
      "A": "a vontade do comandante da unidade, independentemente de decisão judicial.",
      "B": "a simples gravidade abstrata do crime, em qualquer circunstância.",
      "C": "a exigência da manutenção das normas ou princípios de hierarquia e disciplina militares, quando ameaçados ou atingidos com a liberdade do indiciado ou acusado.",
      "D": "o desejo de antecipar o cumprimento da pena.",
      "E": "a mera instauração do inquérito policial militar."
    },
    "gabarito": "C",
    "comentario": "O CPPM (arts. 254 e 255) admite a preventiva, decretada pelo juiz, por vários fundamentos, entre eles a exigência de manutenção da hierarquia e disciplina militares quando ameaçadas ou atingidas com a liberdade do indiciado ou acusado.",
    "fundamento": "CPPM, arts. 254 e 255 (item 12).",
    "oficial": false,
    "concurso": "PMPE – 2º Tenente (QOPM)"
  }
];
