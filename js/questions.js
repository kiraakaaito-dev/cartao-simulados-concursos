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
  }
];
