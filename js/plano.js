/* ============================================================================
   CARTÃO — PLANO DE ESTUDOS
   Fluxo: 1 Edital → 2 Diagnóstico → 3 Relatório → 4 Rotina → 5 Cronograma
   Tudo roda no navegador; os dados ficam no localStorage ("cartao_plano").
   Depende de app.js (state, iniciarSimulado, setView, mostrarToast...) e de
   questions.js (QUESTION_BANK).
   ============================================================================ */
(function () {
  "use strict";

  const KEY = "cartao_plano";
  const DIAS = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const DIAS_CURTO = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  /* ---------------------------------------------------------------- editais */
  const EDITAIS = [
    {
      id: "pmpe-soldado", nome: "PMPE — Soldado (QPMG)", banca: "Instituto AOCP", tag: "PMPE – Soldado",
      resumo: "60 questões objetivas, 10 por disciplina.",
      disciplinas: [
        { nome: "Português", questoes: 10 }, { nome: "História de Pernambuco", questoes: 10 },
        { nome: "Raciocínio Lógico", questoes: 10 }, { nome: "Informática", questoes: 10 },
        { nome: "Direito Constitucional", questoes: 10 },
        { nome: "Direitos Humanos e Legislação Extravagante", questoes: 10 }
      ]
    },
    {
      id: "pmpe-oficial", nome: "PMPE — 2º Tenente (QOPM)", banca: "Instituto AOCP", tag: "PMPE – 2º Tenente (QOPM)",
      resumo: "70 questões em 3 blocos: básico (30), jurídico (20) e específico (20).",
      disciplinas: [
        { nome: "Português", questoes: 10 }, { nome: "Língua Estrangeira (Inglês)", questoes: 5 },
        { nome: "Raciocínio Lógico", questoes: 5 }, { nome: "Estatística", questoes: 5 },
        { nome: "Informática", questoes: 5 }, { nome: "Direito Constitucional", questoes: 5 },
        { nome: "Direito Administrativo", questoes: 5 }, { nome: "Direito Penal", questoes: 5 },
        { nome: "Direito Processual Penal", questoes: 5 }, { nome: "Direitos e Garantias Fundamentais", questoes: 10 },
        { nome: "Direito Penal Militar", questoes: 5 }, { nome: "Direito Processual Penal Militar", questoes: 5 }
      ]
    }
    ,
    {
      id: "cbmpe-soldado", nome: "CBMPE — Soldado (QBMG)", banca: "Instituto AOCP", tag: "CBMPE",
      resumo: "60 questões em 3 blocos: básico (30), ciências (10) e específico (20).",
      disciplinas: [
        { nome: "Português", questoes: 10 }, { nome: "Informática", questoes: 5 }, { nome: "Matemática", questoes: 10 },
        { nome: "Raciocínio Lógico", questoes: 5 }, { nome: "Física", questoes: 5 }, { nome: "Biologia", questoes: 5 },
        { nome: "Direito Constitucional", questoes: 10 }, { nome: "Atualidades", questoes: 5 }, { nome: "História de Pernambuco", questoes: 5 }
      ]
    },
    {
      id: "cbmpe-oficial", nome: "CBMPE — 2º Tenente (QOC)", banca: "Instituto AOCP", tag: "CBMPE",
      resumo: "60 das 70 questões (falta a legislação militar de PE no banco).",
      disciplinas: [
        { nome: "Português", questoes: 5 }, { nome: "Língua Estrangeira (Inglês)", questoes: 5 }, { nome: "Informática", questoes: 5 },
        { nome: "Estatística", questoes: 5 }, { nome: "Matemática", questoes: 5 }, { nome: "Física", questoes: 5 },
        { nome: "Química", questoes: 5 }, { nome: "Biologia", questoes: 5 }, { nome: "Direito Constitucional", questoes: 8 },
        { nome: "Direito Administrativo", questoes: 7 }, { nome: "Direito Penal Militar", questoes: 5 }
      ]
    }
  ];

  const ALIASES = { // nome que costuma aparecer no edital → disciplina do banco
    "lingua portuguesa": "Português", "portugues": "Português",
    "raciocinio logico": "Raciocínio Lógico", "informatica": "Informática",
    "direito constitucional": "Direito Constitucional", "direito administrativo": "Direito Administrativo",
    "direito penal militar": "Direito Penal Militar", "direito processual penal militar": "Direito Processual Penal Militar",
    "direito processual penal": "Direito Processual Penal", "direito penal": "Direito Penal",
    "estatistica": "Estatística", "historia de pernambuco": "História de Pernambuco",
    "direitos humanos": "Direitos Humanos e Legislação Extravagante",
    "legislacao extravagante": "Direitos Humanos e Legislação Extravagante",
    "direitos e garantias fundamentais": "Direitos e Garantias Fundamentais",
    "lingua estrangeira": "Língua Estrangeira (Inglês)", "ingles": "Língua Estrangeira (Inglês)",
    "direito previdenciario": "Direito Previdenciário", "fisica": "Física", "quimica": "Química", "biologia": "Biologia", "matematica": "Matemática", "atualidades": "Atualidades"
  };

  /* ---------------------------------------------------------------- utilidades */
  const $ = (id) => document.getElementById(id);
  const norm = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const pad = (n) => String(n).padStart(2, "0");
  const isoData = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const doIso = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const hoje = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
  const addDias = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  const fmtData = (d) => `${pad(d.getDate())}/${pad(d.getMonth() + 1)}`;
  const banco = () => (typeof QUESTION_BANK !== "undefined" ? QUESTION_BANK : []);

  function carregar() {
    try { const v = JSON.parse(localStorage.getItem(KEY)); if (v && typeof v === "object") return v; } catch (e) { /* ignora */ }
    return null;
  }
  function salvar() { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) { /* sem storage */ } }

  const rotinaPadrao = () => ({
    horasUteis: 2, horasFds: 3, dias: [1, 2, 3, 4, 5, 6], turno: "noite", inicioHora: "19:30",
    bloco: 50, estilo: "alternar", nivel: "intermediario", diaSimulado: 6, diaRevisao: 0
  });
  let P = carregar() || { passo: 1, edital: null, usarHistorico: true, rotina: rotinaPadrao(), cronograma: null, feitos: {}, semana: 0 };
  if (!P.rotina) P.rotina = rotinaPadrao();
  if (!P.feitos) P.feitos = {};

  /* ---------------------------------------------------------------- edital → universo de temas */
  function universoDe(nomeDisc, tag, filtroTexto) {
    const doBanco = banco().filter((q) => q.disciplina === nomeDisc);
    let assuntos = [...new Set(doBanco.map((q) => q.assunto))];
    if (tag) {
      const tagged = [...new Set(doBanco.filter((q) => q.concurso === tag).map((q) => q.assunto))];
      if (tagged.length) assuntos = tagged;
    }
    if (filtroTexto) {
      const achados = assuntos.filter((a) => temaNoTexto(a, filtroTexto));
      if (achados.length) assuntos = achados;
    }
    return assuntos.sort((a, b) => a.localeCompare(b, "pt-BR"));
  }
  function relevancia(nomeDisc, assunto, tag) {
    if (!tag) return 1;
    return banco().some((q) => q.disciplina === nomeDisc && q.assunto === assunto && q.concurso === tag) ? 1.5 : 1;
  }
  function temaNoTexto(assunto, texto) {
    const t = norm(texto), a = norm(assunto);
    if (t.includes(a)) return true;
    const palavras = a.split(/[^a-z0-9]+/).filter((w) => w.length > 3);
    if (!palavras.length) return false;
    const achou = palavras.filter((w) => t.includes(w)).length;
    return achou / palavras.length >= 0.6;
  }

  function montarEdital(base, extra) {
    const universo = {};
    base.disciplinas.forEach((d) => { universo[d.nome] = universoDe(d.nome, base.tag || null, extra && extra.texto); });
    return {
      id: base.id, nome: base.nome, banca: base.banca || "", tag: base.tag || null,
      disciplinas: base.disciplinas.map((d) => ({ nome: d.nome, questoes: d.questoes })),
      universo, prova: (P.edital && P.edital.prova) || ""
    };
  }

  /* ---------------------------------------------------------------- estatísticas de desempenho */
  function estatisticas() {
    const E = P.edital;
    const out = {}; // disc -> assunto -> {w, ok}
    if (!E) return out;
    const discSet = new Set(E.disciplinas.map((d) => d.nome));
    const hist = (window.state && state.history) ? state.history : [];
    const agora = Date.now();
    hist.forEach((r) => {
      if (!P.usarHistorico && !r.diagnostico) return;
      const dias = Math.max(0, (agora - new Date(r.data).getTime()) / 86400000);
      const w = Math.max(0.3, Math.pow(0.5, dias / 45)); // desempenho recente pesa mais
      (r.questions || []).forEach((q) => {
        if (!discSet.has(q.disciplina)) return;
        if (!(E.universo[q.disciplina] || []).includes(q.assunto)) return;
        const resp = r.answers ? r.answers[q.id] : undefined;
        const ok = resp !== undefined && resp !== null && respostaEstaCorreta(q, resp) ? 1 : 0;
        const slot = (out[q.disciplina] = out[q.disciplina] || {});
        const s = (slot[q.assunto] = slot[q.assunto] || { w: 0, ok: 0, n: 0, certas: 0 });
        s.w += w; s.ok += w * ok; s.n += 1; s.certas += ok;
      });
    });
    return out;
  }

  const K_SUAVIZA = 1.5;
  function classe(d, avaliado) {
    if (!avaliado) return { k: "na", rotulo: "Não avaliado", cor: "muted" };
    if (d >= 0.75) return { k: "forte", rotulo: "Dominado", cor: "good" };
    if (d >= 0.55) return { k: "bom", rotulo: "Em evolução", cor: "mid" };
    if (d >= 0.35) return { k: "atencao", rotulo: "Precisa melhorar", cor: "warn" };
    return { k: "critico", rotulo: "Crítico", cor: "bad" };
  }

  function analisar() {
    const E = P.edital;
    if (!E) return null;
    const est = estatisticas();
    const somaPeso = E.disciplinas.reduce((a, d) => a + d.questoes, 0) || 1;
    const disciplinas = E.disciplinas.map((d) => {
      const pesoNorm = d.questoes / somaPeso;
      const assuntos = (E.universo[d.nome] || []).map((a) => {
        const s = (est[d.nome] || {})[a];
        const avaliado = !!s;
        const dom = avaliado ? (s.ok + 0.5 * K_SUAVIZA) / (s.w + K_SUAVIZA) : 0.5;
        const conf = !avaliado ? "nenhuma" : s.w >= 3 ? "alta" : s.w >= 1.5 ? "média" : "baixa";
        return {
          disc: d.nome, nome: a, dom, avaliado, conf, n: s ? s.n : 0, certas: s ? s.certas : 0,
          rel: relevancia(d.nome, a, E.tag), cls: classe(dom, avaliado)
        };
      });
      const somaRel = assuntos.reduce((x, a) => x + a.rel, 0) || 1;
      const avaliados = assuntos.filter((a) => a.avaliado);
      const dom = assuntos.length ? assuntos.reduce((x, a) => x + a.dom * a.rel, 0) / somaRel : 0.5;
      const cobertura = assuntos.length ? avaliados.length / assuntos.length : 0;
      assuntos.forEach((a) => { a.bruto = pesoNorm * (a.rel / somaRel) * (1 - a.dom); });
      return { nome: d.nome, questoes: d.questoes, pesoNorm, assuntos, dom, cobertura, cls: classe(dom, avaliados.length > 0), nAval: avaliados.length };
    });
    const todos = disciplinas.flatMap((d) => d.assuntos);
    const maxBruto = Math.max(...todos.map((a) => a.bruto), 1e-9);
    todos.forEach((a) => { a.prioridade = Math.round((a.bruto / maxBruto) * 100); a.nivelPrio = a.prioridade >= 60 ? "Alta" : a.prioridade >= 30 ? "Média" : "Baixa"; });
    // fatia de tempo recomendada por disciplina: peso na prova × (necessidade + manutenção)
    const need = disciplinas.map((d) => d.pesoNorm * (0.3 + (1 - d.dom)));
    const sn = need.reduce((a, b) => a + b, 0) || 1;
    disciplinas.forEach((d, i) => { d.fatia = need[i] / sn; });
    const avaliadosTot = todos.filter((a) => a.avaliado).length;
    const domGeral = disciplinas.reduce((x, d) => x + d.dom * d.pesoNorm, 0);
    return { disciplinas, todos, avaliadosTot, totalTemas: todos.length, domGeral };
  }

  /* ---------------------------------------------------------------- montagem de questões */
  const ORDEM_DIF = { "Fácil": 0, "Médio": 1, "Difícil": 2 };
  function questoesDoTema(disc, assunto, tag) {
    const respondidas = new Set((window.state && state.answeredIds) || []);
    const lista = banco().filter((q) => q.disciplina === disc && q.assunto === assunto);
    const emb = typeof embaralhar === "function" ? embaralhar(lista) : lista.slice();
    return emb.sort((a, b) =>
      (respondidas.has(a.id) ? 1 : 0) - (respondidas.has(b.id) ? 1 : 0) ||
      (ORDEM_DIF[a.dificuldade] ?? 1) - (ORDEM_DIF[b.dificuldade] ?? 1));
  }

  function montarDiagnostico(total) {
    const E = P.edital, A = analisar();
    const soma = E.disciplinas.reduce((a, d) => a + d.questoes, 0);
    const lista = [];
    A.disciplinas.forEach((d) => {
      const quota = Math.max(1, Math.round(total * d.questoes / soma));
      // temas menos conhecidos primeiro; depois os de maior relevância
      const ordem = d.assuntos.slice().sort((x, y) => (x.avaliado - y.avaliado) || (y.rel - x.rel) || (x.conf === "baixa") - (y.conf === "baixa"));
      const filas = ordem.map((a) => ({ a, q: questoesDoTema(d.nome, a.nome, E.tag) }));
      const pegas = [];
      for (let rodada = 0; rodada < 3 && pegas.length < quota; rodada++) {
        for (const f of filas) {
          if (pegas.length >= quota) break;
          const q = f.q.shift();
          if (q) pegas.push(q);
        }
      }
      lista.push(...pegas);
    });
    return lista;
  }

  function montarPorTemas(temas, porTema, max) {
    const E = P.edital, lista = [];
    temas.forEach((t) => {
      if (lista.length >= max) return;
      lista.push(...questoesDoTema(t.disc, t.nome, E && E.tag).slice(0, porTema));
    });
    return lista.slice(0, max);
  }

  function iniciar(lista, modo, titulo, diag) {
    if (!lista.length) { mostrarToast("Não há questões suficientes para esse recorte."); return; }
    iniciarSimulado(lista, modo, "up", titulo);
    if (diag && state.sim) state.sim.diagnostico = { edital: P.edital ? P.edital.id : null };
  }

  /* ---------------------------------------------------------------- cronograma */
  function minutosDoDia(dow, r) {
    if (!r.dias.includes(dow)) return 0;
    const h = (dow === 0 || dow === 6) ? r.horasFds : r.horasUteis;
    return Math.round(h * 60);
  }

  function gerarCronograma() {
    const A = analisar(), r = P.rotina, E = P.edital;
    const inicio = hoje();
    let fim;
    if (E.prova && doIso(E.prova) > inicio) fim = addDias(doIso(E.prova), -1);
    else fim = addDias(inicio, 7 * 8 - 1); // sem data de prova: 8 semanas
    const totalDias = Math.max(1, Math.round((fim - inicio) / 86400000) + 1);

    // filas de temas por disciplina (temas prioritários aparecem mais vezes)
    const filas = {};
    A.disciplinas.forEach((d) => {
      const ord = d.assuntos.slice().sort((a, b) => b.prioridade - a.prioridade);
      const seq = [];
      ord.forEach((a) => { const rep = a.prioridade >= 60 ? 3 : a.prioridade >= 30 ? 2 : 1; for (let i = 0; i < rep; i++) seq.push(a); });
      // intercala para não repetir o mesmo tema em sequência
      const ciclo = [];
      for (let i = 0; i < 3; i++) ord.forEach((a) => { if (seq.filter((s) => s === a).length > i) ciclo.push(a); });
      filas[d.nome] = { seq: ciclo.length ? ciclo : [{ nome: "Revisão geral", disc: d.nome, prioridade: 0 }], i: 0 };
    });

    const alvo = {}; A.disciplinas.forEach((d) => { alvo[d.nome] = d.fatia; });
    const atribuido = {}; A.disciplinas.forEach((d) => { atribuido[d.nome] = 0; });
    const cont = {}; A.disciplinas.forEach((d) => { cont[d.nome] = 0; });
    let total = 0;
    const blocos = [];
    const padraoTeoria = { iniciante: 0.6, intermediario: 0.4, avancado: 0.25 }[r.nivel] || 0.4;

    for (let n = 0; n < totalDias; n++) {
      const data = addDias(inicio, n), dow = data.getDay();
      const ehUltimoDia = n === totalDias - 1 && !!E.prova;
      const frac = n / totalDias;
      const restantes = totalDias - n;
      const fase = (E.prova && restantes <= 7) || frac >= 0.85 ? "Revisão final" : frac >= 0.55 ? "Aprofundamento" : "Base";
      const min = minutosDoDia(dow, r);
      let slots = Math.floor(min / r.bloco);
      if (slots < 1 && min >= r.bloco * 0.6) slots = 1;
      if (slots < 1) continue;
      const dia = []; // {tipo,...}

      if (ehUltimoDia) {
        dia.push({ tipo: "Revisão", disc: "Geral", assunto: "Revisão leve dos pontos-chave e descanso", min: Math.min(min, r.bloco) });
      } else {
        let restante = slots;
        if (dow === r.diaSimulado) {
          const s = Math.min(restante, Math.max(1, Math.ceil(120 / r.bloco)));
          dia.push({ tipo: "Simulado", disc: "Geral", assunto: "Simulado cronometrado e correção comentada", min: s * r.bloco });
          restante -= s;
        }
        if (dow === r.diaRevisao && restante > 0) {
          dia.push({ tipo: "Revisão", disc: "Geral", assunto: "Refazer questões erradas e revisar resumos", min: r.bloco });
          restante -= 1;
        }
        if (fase === "Revisão final" && dow !== r.diaSimulado && restante > 1 && (dow + 3) % 7 === r.diaSimulado) {
          dia.push({ tipo: "Simulado", disc: "Geral", assunto: "Mini-simulado (30 questões) e correção", min: Math.min(restante, Math.ceil(90 / r.bloco)) * r.bloco });
          restante -= Math.min(restante, Math.ceil(90 / r.bloco));
        }
        const usadas = [];
        for (let b = 0; b < restante; b++) {
          // disciplina com maior déficit em relação à fatia recomendada
          let escolha = null, melhor = -1e9;
          A.disciplinas.forEach((d) => {
            const def = alvo[d.nome] * (total + 1) - atribuido[d.nome];
            let bonus = 0;
            if (r.estilo === "focar" && usadas.length) bonus = usadas[0] === d.nome ? 1.5 : -1.5;
            if (r.estilo === "alternar" && usadas.length >= 2 && !usadas.includes(d.nome)) bonus = -3;
            if (r.estilo === "alternar" && usadas.length && usadas[usadas.length - 1] === d.nome) bonus -= 0.4;
            if (def + bonus > melhor) { melhor = def + bonus; escolha = d.nome; }
          });
          usadas.push(escolha);
          atribuido[escolha]++; total++;
          const f = filas[escolha];
          const tema = f.seq[f.i % f.seq.length]; f.i++;
          const k = cont[escolha]++;
          let tipo;
          if (fase === "Base") tipo = (k % 10) / 10 < padraoTeoria ? "Teoria" : "Questões";
          else if (fase === "Aprofundamento") tipo = (k % 5 === 0) ? "Teoria" : "Questões";
          else tipo = (k % 3 === 2) ? "Revisão" : "Questões";
          dia.push({ tipo, disc: escolha, assunto: tema.nome, min: r.bloco });
        }
      }
      dia.forEach((b, i) => {
        blocos.push({
          id: `${isoData(data)}#${i}`, data: isoData(data), dow, ordem: i, fase,
          tipo: b.tipo, disc: b.disc, assunto: b.assunto, min: b.min
        });
      });
    }
    P.cronograma = { geradoEm: new Date().toISOString(), inicio: isoData(inicio), fim: isoData(fim), blocos, semanas: Math.ceil(totalDias / 7) };
    // preserva progresso apenas dos blocos que continuam existindo
    const ids = new Set(blocos.map((b) => b.id));
    Object.keys(P.feitos).forEach((id) => { if (!ids.has(id)) delete P.feitos[id]; });
    P.semana = 0;
    salvar();
  }

  /* ---------------------------------------------------------------- .ics */
  function baixarICS() {
    const C = P.cronograma; if (!C) return;
    const [hh, mm] = (P.rotina.inicioHora || "19:30").split(":").map(Number);
    const porDia = {};
    C.blocos.forEach((b) => { (porDia[b.data] = porDia[b.data] || []).push(b); });
    const dt = (d, minutos) => {
      const x = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, minutos);
      return `${x.getFullYear()}${pad(x.getMonth() + 1)}${pad(x.getDate())}T${pad(x.getHours())}${pad(x.getMinutes())}00`;
    };
    const linhas = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Cartao Simulados//Plano de Estudos//PT-BR", "CALSCALE:GREGORIAN", "X-WR-CALNAME:Plano de estudos — " + P.edital.nome];
    Object.keys(porDia).sort().forEach((data) => {
      let cursor = hh * 60 + mm;
      porDia[data].forEach((b) => {
        const d = doIso(data);
        const titulo = b.disc === "Geral" ? `${b.tipo}: ${b.assunto}` : `${b.disc} — ${b.tipo}`;
        linhas.push("BEGIN:VEVENT", `UID:${b.id.replace("#", "-")}@cartao-simulados`, `DTSTAMP:${dt(new Date(), 0)}`,
          `DTSTART:${dt(d, cursor)}`, `DTEND:${dt(d, cursor + b.min)}`,
          `SUMMARY:${titulo.replace(/[,;]/g, " ")}`,
          `DESCRIPTION:${(b.disc === "Geral" ? b.assunto : "Foco: " + b.assunto).replace(/[,;]/g, " ")} (${b.min} min, fase ${b.fase})`,
          "END:VEVENT");
        cursor += b.min;
      });
    });
    linhas.push("END:VCALENDAR");
    const blob = new Blob([linhas.join("\r\n")], { type: "text/calendar;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "plano-de-estudos.ics";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }

  /* ---------------------------------------------------------------- renderização */
  const PASSOS = [
    { n: 1, t: "Edital" }, { n: 2, t: "Diagnóstico" }, { n: 3, t: "Relatório" }, { n: 4, t: "Rotina" }, { n: 5, t: "Cronograma" }
  ];

  function podeIr(n) {
    if (n === 1) return true;
    if (!P.edital) return false;
    if (n === 2) return true;
    if (n === 3) return !!analisar().avaliadosTot;
    if (n === 4) return !!analisar().avaliadosTot;
    if (n === 5) return !!P.cronograma;
    return false;
  }

  function stepper() {
    return `<div class="pl-steps">${PASSOS.map((p) => {
      const ativo = P.passo === p.n, ok = podeIr(p.n);
      const feito = ok && p.n < P.passo;
      return `<button class="pl-step ${ativo ? "active" : ""} ${feito ? "done" : ""}" data-step="${p.n}" ${ok ? "" : "disabled"}><span class="pl-step-n">${feito ? "✓" : p.n}</span><span class="pl-step-t">${p.t}</span></button>`;
    }).join("")}</div>`;
  }

  function render() {
    const root = $("planoRoot");
    if (!root) return;
    const fn = { 1: renderEdital, 2: renderDiagnostico, 3: renderRelatorio, 4: renderRotina, 5: renderCronograma }[P.passo] || renderEdital;
    root.innerHTML = stepper() + fn();
    root.querySelectorAll("[data-step]").forEach((b) => b.addEventListener("click", () => { P.passo = Number(b.dataset.step); salvar(); render(); window.scrollTo({ top: 0 }); }));
    const bind = { 1: bindEdital, 2: bindDiagnostico, 3: bindRelatorio, 4: bindRotina, 5: bindCronograma }[P.passo];
    if (bind) bind(root);
  }

  /* ---- passo 1: edital ---- */
  let customSel = null; // {disc: {on, q}} para edital personalizado

  function renderEdital() {
    const E = P.edital;
    const cards = EDITAIS.map((e) => `
      <button class="pl-edital ${E && E.id === e.id ? "sel" : ""}" data-edital="${e.id}">
        <strong>${esc(e.nome)}</strong>
        <span>${esc(e.banca)} • ${e.disciplinas.length} disciplinas</span>
        <small>${esc(e.resumo)}</small>
      </button>`).join("");
    const discs = [...new Set(banco().map((q) => q.disciplina))].sort((a, b) => a.localeCompare(b, "pt-BR"));
    if (!customSel) {
      customSel = {};
      discs.forEach((d) => { customSel[d] = { on: !!(E && E.id === "custom" && E.disciplinas.some((x) => x.nome === d)), q: (E && E.id === "custom" && (E.disciplinas.find((x) => x.nome === d) || {}).questoes) || 10 }; });
    }
    const lista = discs.map((d) => `
      <label class="pl-disc"><input type="checkbox" data-cd="${esc(d)}" ${customSel[d].on ? "checked" : ""}> <span>${esc(d)}</span>
        <input type="number" min="1" max="100" value="${customSel[d].q}" data-cq="${esc(d)}" title="Questões dessa disciplina na prova"></label>`).join("");
    return `
      <div class="card">
        <div class="section-title"><h2>1. Escolha o seu edital</h2><span class="hint">É a base do relatório e do cronograma</span></div>
        <div class="pl-editais">${cards}
          <button class="pl-edital ${E && E.id === "custom" ? "sel" : ""}" data-edital="custom"><strong>Outro concurso</strong><span>Monte o seu</span><small>Marque as disciplinas, informe quantas questões cada uma tem e, se quiser, cole o conteúdo programático.</small></button>
        </div>
        <div id="plCustom" class="pl-custom ${E && E.id === "custom" || P._abrirCustom ? "" : "hidden"}">
          <h3>Seu edital</h3>
          <label class="pl-lbl">Nome do concurso <input type="text" id="plNome" placeholder="Ex.: Concurso PM — Soldado" value="${E && E.id === "custom" ? esc(E.nome) : ""}"></label>
          <label class="pl-lbl">Cole aqui o conteúdo programático (opcional)
            <textarea id="plTexto" rows="5" placeholder="Cole o texto do edital. Eu identifico as disciplinas e os temas que existem no banco de questões."></textarea>
          </label>
          <div class="pl-row"><button class="btn btn-ghost btn-sm" id="plDetectar">🔎 Identificar disciplinas e temas no texto</button><span class="hint" id="plDetectarMsg"></span></div>
          <p class="hint">Disciplinas disponíveis no banco (marque e informe o nº de questões na prova):</p>
          <div class="pl-disc-list">${lista}</div>
        </div>
      </div>
      <div class="card">
        <div class="section-title"><h2>Data da prova</h2><span class="hint">Opcional, mas deixa o cronograma sob medida</span></div>
        <div class="pl-row">
          <input type="date" id="plProva" value="${E ? esc(E.prova || "") : ""}" min="${isoData(addDias(hoje(), 1))}">
          <span class="hint" id="plProvaInfo">${infoProva(E && E.prova)}</span>
        </div>
      </div>
      <div class="pl-nav"><span></span><button class="btn btn-accent" id="plIr2" ${E ? "" : "disabled"}>Continuar para o diagnóstico →</button></div>`;
  }
  function infoProva(v) {
    if (!v) return "Sem data, o plano cobre as próximas 8 semanas.";
    const dias = Math.round((doIso(v) - hoje()) / 86400000);
    if (dias <= 0) return "Escolha uma data futura.";
    return `Faltam ${dias} dias (${Math.floor(dias / 7)} semanas e ${dias % 7} dias).`;
  }

  function bindEdital(root) {
    root.querySelectorAll("[data-edital]").forEach((b) => b.addEventListener("click", () => {
      const id = b.dataset.edital;
      if (id === "custom") { P._abrirCustom = true; aplicarCustom(); render(); return; }
      const base = EDITAIS.find((e) => e.id === id);
      P._abrirCustom = false;
      P.edital = montarEdital(base);
      P.cronograma = null;
      salvar(); render();
    }));
    const prova = $("plProva");
    if (prova) prova.addEventListener("change", () => {
      if (!P.edital) { mostrarToast("Escolha primeiro o edital."); prova.value = ""; return; }
      P.edital.prova = prova.value; $("plProvaInfo").textContent = infoProva(prova.value); salvar();
    });
    root.querySelectorAll("[data-cd]").forEach((c) => c.addEventListener("change", () => { customSel[c.dataset.cd].on = c.checked; aplicarCustom(); }));
    root.querySelectorAll("[data-cq]").forEach((c) => c.addEventListener("input", () => { customSel[c.dataset.cq].q = clamp(parseInt(c.value) || 1, 1, 100); aplicarCustom(); }));
    const nome = $("plNome"); if (nome) nome.addEventListener("input", () => aplicarCustom(true));
    const det = $("plDetectar");
    if (det) det.addEventListener("click", () => {
      const texto = $("plTexto").value;
      if (texto.trim().length < 20) { $("plDetectarMsg").textContent = "Cole o texto do edital primeiro."; return; }
      const t = norm(texto);
      let achouDisc = 0;
      Object.keys(customSel).forEach((d) => {
        const apelidos = Object.keys(ALIASES).filter((k) => ALIASES[k] === d);
        const nd = norm(d);
        const bate = t.includes(nd) || apelidos.some((k) => t.includes(k));
        customSel[d].on = bate; if (bate) achouDisc++;
      });
      P._textoEdital = texto;
      aplicarCustom();
      $("plDetectarMsg").textContent = achouDisc ? `${achouDisc} disciplina(s) identificada(s). Ajuste o nº de questões.` : "Não reconheci disciplinas. Marque manualmente.";
      render();
      $("plCustom").classList.remove("hidden");
      $("plTexto").value = texto;
    });
    const ir = $("plIr2");
    if (ir) ir.addEventListener("click", () => { P.passo = 2; salvar(); render(); window.scrollTo({ top: 0 }); });
  }

  function aplicarCustom(soNome) {
    const sel = Object.keys(customSel).filter((d) => customSel[d].on);
    if (!sel.length) { if (P.edital && P.edital.id === "custom") { P.edital = null; salvar(); const b = $("plIr2"); if (b) b.disabled = true; } return; }
    const nome = ($("plNome") && $("plNome").value.trim()) || "Meu concurso";
    const base = { id: "custom", nome, banca: "", tag: null, disciplinas: sel.map((d) => ({ nome: d, questoes: customSel[d].q })) };
    const prova = P.edital ? P.edital.prova : "";
    P.edital = montarEdital(base, { texto: P._textoEdital || ($("plTexto") && $("plTexto").value) || "" });
    P.edital.prova = prova;
    P.cronograma = null;
    salvar();
    const b = $("plIr2"); if (b) b.disabled = false;
  }

  /* ---- passo 2: diagnóstico ---- */
  function renderDiagnostico() {
    const E = P.edital, A = analisar();
    const nHist = (state.history || []).filter((r) => (r.questions || []).some((q) => E.disciplinas.some((d) => d.nome === q.disciplina))).length;
    const totalBanco = E.disciplinas.reduce((x, d) => x + banco().filter((q) => q.disciplina === d.nome && (E.universo[d.nome] || []).includes(q.assunto)).length, 0);
    const opts = [
      { n: 20, t: "Rápido", d: "~20 questões • cerca de 30 min", rec: false },
      { n: 40, t: "Padrão", d: "~40 questões • cerca de 1h", rec: true },
      { n: 60, t: "Completo", d: "~60 questões • cerca de 1h30", rec: false }
    ].map((o) => `<button class="pl-edital pl-diag ${o.rec ? "rec" : ""}" data-diag="${Math.min(o.n, totalBanco)}"><strong>${o.t}${o.rec ? " <em>recomendado</em>" : ""}</strong><span>${o.d}</span><small>Questões básicas e médias, distribuídas pelo peso de cada disciplina no edital.</small></button>`).join("");
    return `
      <div class="card">
        <div class="section-title"><h2>2. Diagnóstico inicial</h2><span class="hint">${esc(E.nome)}</span></div>
        <p class="pl-p">Vou aplicar questões básicas sobre os temas do edital. Quanto mais temas eu medir, mais certeiro é o relatório. As questões saem dos <strong>${E.disciplinas.length} blocos do edital</strong>, na proporção do peso de cada um.</p>
        <div class="pl-editais">${opts}</div>
        <p class="hint">Dica: responda sem consultar nada. Se não souber, deixe em branco. Em branco conta como ponto a reforçar.</p>
      </div>
      <div class="card">
        <div class="section-title"><h2>Já treinou por aqui?</h2></div>
        <p class="pl-p">${nHist ? `Encontrei <strong>${nHist}</strong> simulado(s) seu(s) com disciplinas deste edital. Dá para usar o histórico no relatório.` : "Você ainda não tem simulados com as disciplinas deste edital."}</p>
        <label class="pl-check"><input type="checkbox" id="plUsaHist" ${P.usarHistorico ? "checked" : ""}> Considerar todo o meu histórico no relatório (desempenho recente pesa mais)</label>
        <div class="pl-row" style="margin-top:10px"><button class="btn btn-ghost" id="plPularDiag" ${A.avaliadosTot ? "" : "disabled"}>Ver relatório com o que já tenho (${A.avaliadosTot}/${A.totalTemas} temas avaliados)</button></div>
      </div>
      <div class="pl-nav"><button class="btn btn-ghost" data-step="1">← Edital</button><span></span></div>`;
  }
  function bindDiagnostico(root) {
    root.querySelectorAll("[data-diag]").forEach((b) => b.addEventListener("click", () => {
      const lista = montarDiagnostico(Number(b.dataset.diag));
      iniciar(lista, "simulado", "Diagnóstico — " + P.edital.nome, true);
    }));
    const u = $("plUsaHist"); if (u) u.addEventListener("change", () => { P.usarHistorico = u.checked; salvar(); render(); });
    const p = $("plPularDiag"); if (p) p.addEventListener("click", () => { P.passo = 3; salvar(); render(); });
    root.querySelectorAll(".pl-nav [data-step]").forEach((b) => b.addEventListener("click", () => { P.passo = Number(b.dataset.step); salvar(); render(); }));
  }

  /* ---- passo 3: relatório ---- */
  function pctTxt(x) { return Math.round(x * 100) + "%"; }
  function barra(pct, cor) { return `<div class="pl-bar"><i class="${cor}" style="width:${clamp(pct, 0, 100)}%"></i></div>`; }

  function renderRelatorio() {
    const A = analisar();
    if (!A.avaliadosTot) return `<div class="card"><h2>3. Relatório</h2><p class="pl-p">Ainda não há dados. Faça o diagnóstico primeiro.</p><button class="btn btn-accent" data-step="2">Ir para o diagnóstico</button></div>`;
    const aval = A.todos.filter((a) => a.avaliado);
    const fortes = aval.filter((a) => a.dom >= 0.75).sort((x, y) => y.dom - x.dom).slice(0, 5);
    const prioridades = A.todos.slice().sort((x, y) => y.prioridade - x.prioridade).slice(0, 8);
    const incertos = A.todos.filter((a) => !a.avaliado || a.conf === "baixa");
    const cobertura = Math.round((A.avaliadosTot / A.totalTemas) * 100);
    const geral = classe(A.domGeral, true);

    const resumo = `
      <div class="grid cols-4">
        <div class="card stat-card"><div class="stat-icon">🎯</div><div class="stat-value mono">${pctTxt(A.domGeral)}</div><div class="stat-label">Domínio estimado • ${geral.rotulo}</div></div>
        <div class="card stat-card"><div class="stat-icon">🧭</div><div class="stat-value mono">${A.avaliadosTot}/${A.totalTemas}</div><div class="stat-label">Temas avaliados (${cobertura}%)</div></div>
        <div class="card stat-card"><div class="stat-icon">💪</div><div class="stat-value mono">${aval.filter((a) => a.dom >= 0.75).length}</div><div class="stat-label">Temas dominados</div></div>
        <div class="card stat-card"><div class="stat-icon">🚩</div><div class="stat-value mono">${aval.filter((a) => a.dom < 0.55).length}</div><div class="stat-label">Temas a melhorar</div></div>
      </div>`;

    const porDisc = A.disciplinas.slice().sort((a, b) => b.fatia - a.fatia).map((d) => `
      <div class="pl-disc-row">
        <div class="pl-disc-head"><strong>${esc(d.nome)}</strong><span class="badge pl-b-${d.cls.cor}">${d.cls.rotulo}</span></div>
        <div class="pl-disc-bars">
          <div><small>Domínio</small>${barra(d.dom * 100, d.cls.cor === "muted" ? "mid" : d.cls.cor === "warn" ? "mid" : d.cls.cor)}<span class="mono">${pctTxt(d.dom)}</span></div>
          <div><small>Peso na prova (${d.questoes}q)</small>${barra(d.pesoNorm * 100 * 2.5, "mid")}<span class="mono">${pctTxt(d.pesoNorm)}</span></div>
          <div><small>Fatia de estudo sugerida</small>${barra(d.fatia * 100 * 2.5, "good")}<span class="mono">${pctTxt(d.fatia)}</span></div>
        </div>
      </div>`).join("");

    const tabPrio = prioridades.map((a, i) => `
      <tr><td class="mono">${i + 1}</td><td><strong>${esc(a.nome)}</strong><br><small>${esc(a.disc)}</small></td>
      <td><span class="badge pl-b-${a.cls.cor}">${a.cls.rotulo}</span></td><td class="mono">${a.avaliado ? `${a.certas}/${a.n}` : "—"}</td>
      <td><span class="pl-prio pl-p-${a.nivelPrio}">${a.nivelPrio}</span></td></tr>`).join("");

    const detalhes = A.disciplinas.map((d) => `
      <details class="pl-det"><summary>${esc(d.nome)} <small>• ${d.nAval}/${d.assuntos.length} temas avaliados</small></summary>
        <div class="pl-temas">${d.assuntos.slice().sort((x, y) => y.prioridade - x.prioridade).map((a) => `
          <div class="pl-tema"><span class="pl-tema-n">${esc(a.nome)}</span>${barra(a.avaliado ? a.dom * 100 : 0, a.cls.cor === "muted" ? "mid" : a.cls.cor === "warn" ? "mid" : a.cls.cor)}
            <span class="mono">${a.avaliado ? pctTxt(a.dom) : "—"}</span><span class="badge pl-b-${a.cls.cor}">${a.cls.rotulo}</span><span class="pl-prio pl-p-${a.nivelPrio}">${a.nivelPrio}</span></div>`).join("")}
        </div></details>`).join("");

    const leitura = montarLeitura(A, fortes, prioridades);
    return `
      <div class="section-title"><h2>3. Seu relatório de desempenho</h2><span class="hint">${esc(P.edital.nome)}</span></div>
      ${resumo}
      <div class="card"><div class="section-title"><h2>Leitura rápida</h2></div><div class="pl-leitura">${leitura}</div></div>
      <div class="card"><div class="section-title"><h2>Prioridades de estudo</h2><span class="hint">peso na prova × incidência do tema × o quanto falta dominar</span></div>
        <div class="pl-tablewrap"><table class="pl-table"><thead><tr><th>#</th><th>Tema</th><th>Situação</th><th>Acertos</th><th>Prioridade</th></tr></thead><tbody>${tabPrio}</tbody></table></div>
        <div class="pl-row" style="margin-top:12px">
          <button class="btn btn-primary" id="plTreinar">🎯 Treinar as 5 prioridades agora</button>
          ${incertos.length ? `<button class="btn btn-ghost" id="plReforcar">🔍 Reforçar ${Math.min(incertos.length, 20)} temas ainda incertos</button>` : ""}
        </div>
      </div>
      <div class="card"><div class="section-title"><h2>Por disciplina</h2></div>${porDisc}</div>
      <div class="card"><div class="section-title"><h2>Detalhe por tema</h2></div>${detalhes}
        <p class="hint">Confiança: poucas questões por tema geram estimativas instáveis. Quanto mais você treina, mais o relatório se ajusta.</p></div>
      <div class="pl-nav"><button class="btn btn-ghost" data-step="2">← Refazer diagnóstico</button><button class="btn btn-accent" id="plIr4">Montar minha rotina →</button></div>`;
  }

  function montarLeitura(A, fortes, prio) {
    const linhas = [];
    const piores = A.disciplinas.slice().filter((d) => d.nAval).sort((a, b) => a.dom - b.dom);
    const melhores = A.disciplinas.slice().filter((d) => d.nAval).sort((a, b) => b.dom - a.dom);
    if (melhores.length) linhas.push(`<p>💪 <strong>Onde você está mais forte:</strong> ${melhores.slice(0, 2).map((d) => `${esc(d.nome)} (${pctTxt(d.dom)})`).join(" e ")}.${fortes.length ? ` Temas dominados: ${fortes.slice(0, 3).map((a) => esc(a.nome)).join(", ")}.` : ""}</p>`);
    if (piores.length) linhas.push(`<p>🚩 <strong>O que mais precisa melhorar:</strong> ${piores.slice(0, 2).map((d) => `${esc(d.nome)} (${pctTxt(d.dom)})`).join(" e ")}.</p>`);
    const top = prio.slice(0, 3);
    if (top.length) linhas.push(`<p>🥇 <strong>Prioridade absoluta:</strong> ${top.map((a) => `${esc(a.nome)} <small>(${esc(a.disc)})</small>`).join("; ")}. Pesam muito na prova e ainda têm espaço para crescer.</p>`);
    const sem = A.totalTemas - A.avaliadosTot;
    if (sem > 0) linhas.push(`<p>🔎 <strong>Atenção:</strong> ${sem} tema(s) ainda não foram avaliados e entram no plano como “prováveis lacunas”. Use “Reforçar temas incertos” para medir melhor.</p>`);
    return linhas.join("");
  }

  function bindRelatorio(root) {
    root.querySelectorAll("[data-step]").forEach((b) => { if (!b.classList.contains("pl-step")) b.addEventListener("click", () => { P.passo = Number(b.dataset.step); salvar(); render(); }); });
    const A = analisar();
    const t = $("plTreinar");
    if (t) t.addEventListener("click", () => {
      const top = A.todos.slice().sort((x, y) => y.prioridade - x.prioridade).slice(0, 5);
      iniciar(montarPorTemas(top, 2, 12), "estudo", "Treino das prioridades — " + P.edital.nome, true);
    });
    const r = $("plReforcar");
    if (r) r.addEventListener("click", () => {
      const inc = A.todos.filter((a) => !a.avaliado || a.conf === "baixa").sort((x, y) => (x.avaliado - y.avaliado) || (y.prioridade - x.prioridade)).slice(0, 20);
      iniciar(montarPorTemas(inc, 1, 20), "simulado", "Reforço do diagnóstico — " + P.edital.nome, true);
    });
    const n4 = $("plIr4"); if (n4) n4.addEventListener("click", () => { P.passo = 4; salvar(); render(); window.scrollTo({ top: 0 }); });
  }

  /* ---- passo 4: rotina ---- */
  function renderRotina() {
    const r = P.rotina;
    const dias = [1, 2, 3, 4, 5, 6, 0].map((d) => `<label class="pl-chipcheck"><input type="checkbox" data-dia="${d}" ${r.dias.includes(d) ? "checked" : ""}><span>${DIAS_CURTO[d]}</span></label>`).join("");
    const sel = (id, opts, val) => `<select id="${id}">${opts.map(([v, t]) => `<option value="${v}" ${String(val) === String(v) ? "selected" : ""}>${t}</option>`).join("")}</select>`;
    const diasOpts = [1, 2, 3, 4, 5, 6, 0].map((d) => [d, DIAS[d]]);
    return `
      <div class="card">
        <div class="section-title"><h2>4. Sobre a sua rotina</h2><span class="hint">Respostas rápidas para o plano caber na sua vida</span></div>
        <div class="pl-form">
          <div class="pl-q"><label>Em quais dias você pode estudar?</label><div class="pl-chips">${dias}</div></div>
          <div class="pl-q"><label>Horas por dia (segunda a sexta)</label><input type="number" id="rHU" min="0" max="12" step="0.5" value="${r.horasUteis}"></div>
          <div class="pl-q"><label>Horas por dia (sábado e domingo)</label><input type="number" id="rHF" min="0" max="14" step="0.5" value="${r.horasFds}"></div>
          <div class="pl-q"><label>Melhor período do dia</label>${sel("rTurno", [["manha", "Manhã (6h–12h)"], ["tarde", "Tarde (13h–18h)"], ["noite", "Noite (19h–23h)"]], r.turno)}</div>
          <div class="pl-q"><label>Horário em que costuma começar</label><input type="time" id="rHora" value="${esc(r.inicioHora)}"></div>
          <div class="pl-q"><label>Duração de cada bloco de estudo</label>${sel("rBloco", [[30, "30 min (curto, para pouca concentração)"], [50, "50 min (clássico, com 10 de pausa)"], [90, "90 min (foco profundo)"]], r.bloco)}</div>
          <div class="pl-q"><label>Como prefere organizar o dia?</label>${sel("rEstilo", [["alternar", "Alternar até 2 matérias por dia"], ["focar", "Focar numa matéria principal por dia"]], r.estilo)}</div>
          <div class="pl-q"><label>Seu nível de preparo</label>${sel("rNivel", [["iniciante", "Iniciante: preciso de mais teoria"], ["intermediario", "Intermediário: já vi boa parte"], ["avancado", "Avançado: foco em questões"]], r.nivel)}</div>
          <div class="pl-q"><label>Dia do simulado semanal</label>${sel("rDS", diasOpts, r.diaSimulado)}</div>
          <div class="pl-q"><label>Dia da revisão de erros</label>${sel("rDR", diasOpts, r.diaRevisao)}</div>
        </div>
        <p class="hint" id="rResumo">${resumoRotina()}</p>
      </div>
      <div class="pl-nav"><button class="btn btn-ghost" data-step="3">← Relatório</button><button class="btn btn-accent" id="plGerar">Gerar meu cronograma →</button></div>`;
  }
  function resumoRotina() {
    const r = P.rotina;
    const sem = [0, 1, 2, 3, 4, 5, 6].reduce((s, d) => s + minutosDoDia(d, r), 0);
    if (!sem) return "Marque ao menos um dia com horas disponíveis.";
    return `Isso dá cerca de ${(sem / 60).toFixed(1).replace(".", ",")} h de estudo por semana.`;
  }
  function bindRotina(root) {
    const r = P.rotina;
    const upd = () => {
      r.horasUteis = clamp(parseFloat($("rHU").value) || 0, 0, 12);
      r.horasFds = clamp(parseFloat($("rHF").value) || 0, 0, 14);
      r.turno = $("rTurno").value; r.inicioHora = $("rHora").value || "19:30";
      r.bloco = Number($("rBloco").value); r.estilo = $("rEstilo").value; r.nivel = $("rNivel").value;
      r.diaSimulado = Number($("rDS").value); r.diaRevisao = Number($("rDR").value);
      r.dias = [...root.querySelectorAll("[data-dia]")].filter((c) => c.checked).map((c) => Number(c.dataset.dia));
      $("rResumo").textContent = resumoRotina(); salvar();
    };
    root.querySelectorAll("input,select").forEach((el) => el.addEventListener("change", upd));
    $("rTurno").addEventListener("change", () => { const h = { manha: "07:00", tarde: "14:00", noite: "19:30" }[$("rTurno").value]; $("rHora").value = h; upd(); });
    root.querySelectorAll(".pl-nav [data-step]").forEach((b) => b.addEventListener("click", () => { P.passo = Number(b.dataset.step); salvar(); render(); }));
    $("plGerar").addEventListener("click", () => {
      upd();
      if (!resumoRotina().startsWith("Isso")) { mostrarToast("Marque ao menos um dia com horas disponíveis."); return; }
      gerarCronograma(); P.passo = 5; salvar(); render(); window.scrollTo({ top: 0 });
    });
  }

  /* ---- passo 5: cronograma ---- */
  function semanasDoPlano() {
    const C = P.cronograma, ini = doIso(C.inicio);
    const out = [];
    for (let i = 0; i < C.semanas; i++) {
      const a = addDias(ini, i * 7), b = addDias(a, 6);
      out.push({ i, a, b, blocos: C.blocos.filter((x) => { const d = doIso(x.data); return d >= a && d <= b; }) });
    }
    return out;
  }
  const ICONE = { "Teoria": "📖", "Questões": "✏️", "Revisão": "🔁", "Simulado": "⏱️" };

  function renderCronograma() {
    const C = P.cronograma;
    if (!C) return `<div class="card"><h2>5. Cronograma</h2><p class="pl-p">Responda a rotina para gerar o cronograma.</p><button class="btn btn-accent" data-step="4">Ir para a rotina</button></div>`;
    const A = analisar();
    const total = C.blocos.length, feitos = C.blocos.filter((b) => P.feitos[b.id]).length;
    const minTot = C.blocos.reduce((s, b) => s + b.min, 0);
    const minFeito = C.blocos.filter((b) => P.feitos[b.id]).reduce((s, b) => s + b.min, 0);
    const sems = semanasDoPlano();
    const hojeIso = isoData(hoje());
    if (P.semana == null || P.semana >= sems.length) P.semana = 0;
    const semHoje = sems.findIndex((s) => s.blocos.some((b) => b.data === hojeIso) || (hoje() >= s.a && hoje() <= s.b));
    const w = sems[P.semana];
    const fases = [...new Set(w.blocos.map((b) => b.fase))].join(" / ") || "—";
    const dist = {};
    C.blocos.forEach((b) => { if (b.disc !== "Geral") dist[b.disc] = (dist[b.disc] || 0) + b.min; });
    const somaDist = Object.values(dist).reduce((a, b) => a + b, 0) || 1;
    const distHtml = Object.entries(dist).sort((a, b) => b[1] - a[1]).map(([d, m]) => `<div class="bar-row"><span>${esc(d)}</span><div class="bar-track"><div class="bar-fill good" style="width:${Math.round(m / somaDist * 100)}%"></div></div><span class="mono">${Math.round(m / somaDist * 100)}%</span><span class="bar-count">${(m / 60).toFixed(1).replace(".", ",")} h</span></div>`).join("");

    const tabs = sems.map((s) => {
      const f = s.blocos.filter((b) => P.feitos[b.id]).length;
      return `<button class="chip ${s.i === P.semana ? "active" : ""} ${s.i === semHoje ? "pl-hoje" : ""}" data-sem="${s.i}">Sem ${s.i + 1}${s.blocos.length && f === s.blocos.length ? " ✓" : ""}</button>`;
    }).join("");

    const colunas = [];
    for (let k = 0; k < 7; k++) {
      const d = addDias(w.a, k), iso = isoData(d);
      const bs = w.blocos.filter((b) => b.data === iso);
      const [hh, mm] = (P.rotina.inicioHora || "19:30").split(":").map(Number);
      let cur = hh * 60 + mm;
      const itens = bs.map((b) => {
        const ini = `${pad(Math.floor(cur / 60) % 24)}:${pad(cur % 60)}`; cur += b.min;
        const feito = !!P.feitos[b.id];
        const praticavel = b.tipo === "Questões" || b.tipo === "Simulado" || b.tipo === "Revisão";
        return `<div class="pl-bloco pl-t-${b.tipo} ${feito ? "feito" : ""}">
          <label class="pl-bloco-top"><input type="checkbox" data-feito="${esc(b.id)}" ${feito ? "checked" : ""}><span class="pl-bloco-h">${ICONE[b.tipo]} ${b.tipo}</span><span class="pl-bloco-min">${ini} • ${b.min}min</span></label>
          <div class="pl-bloco-d">${b.disc === "Geral" ? esc(b.assunto) : `<strong>${esc(b.disc)}</strong><br>${esc(b.assunto)}`}</div>
          ${praticavel && !feito ? `<button class="btn btn-ghost btn-sm" data-praticar="${esc(b.id)}">Praticar agora</button>` : ""}
        </div>`;
      }).join("");
      colunas.push(`<div class="pl-dia ${iso === hojeIso ? "hoje" : ""} ${bs.length ? "" : "livre"}">
        <div class="pl-dia-h"><strong>${DIAS_CURTO[d.getDay()]}</strong> <span>${fmtData(d)}</span>${iso === hojeIso ? '<em>hoje</em>' : ""}</div>
        ${itens || '<div class="pl-livre">Dia livre 🌿</div>'}</div>`);
    }

    return `
      <div class="section-title"><h2>5. Seu cronograma</h2><span class="hint">${esc(P.edital.nome)} • ${fmtData(doIso(C.inicio))} a ${fmtData(doIso(C.fim))}${P.edital.prova ? " • prova em " + fmtData(doIso(P.edital.prova)) : ""}</span></div>
      <div class="grid cols-4">
        <div class="card stat-card"><div class="stat-icon">📅</div><div class="stat-value mono">${C.semanas}</div><div class="stat-label">Semanas de plano</div></div>
        <div class="card stat-card"><div class="stat-icon">⏳</div><div class="stat-value mono">${(minTot / 60).toFixed(0)}h</div><div class="stat-label">Horas planejadas</div></div>
        <div class="card stat-card"><div class="stat-icon">✅</div><div class="stat-value mono">${feitos}/${total}</div><div class="stat-label">Blocos concluídos</div></div>
        <div class="card stat-card"><div class="stat-icon">📈</div><div class="stat-value mono">${minTot ? Math.round(minFeito / minTot * 100) : 0}%</div><div class="stat-label">Do plano cumprido</div></div>
      </div>
      <div class="card">
        <div class="pl-actions">
          <button class="btn btn-primary btn-sm" id="plIcs">📆 Baixar calendário (.ics)</button>
          <button class="btn btn-ghost btn-sm" id="plPrint">🖨️ Imprimir / salvar PDF</button>
          <button class="btn btn-ghost btn-sm" id="plRecalc">🔄 Recalcular com meu desempenho atual</button>
          <button class="btn btn-ghost btn-sm" data-step="4">✏️ Ajustar rotina</button>
        </div>
        <p class="hint">“Recalcular” usa os simulados feitos depois do diagnóstico. Os temas que você já domina perdem espaço, e os que continuam fracos ganham.</p>
      </div>
      <div class="card"><div class="section-title"><h2>Onde seu tempo vai</h2><span class="hint">proporcional ao peso na prova e à sua necessidade</span></div>${distHtml}</div>
      <div class="card pl-semana">
        <div class="section-title"><h2>Semana ${P.semana + 1} <small class="pl-fase">${fases}</small></h2><span class="hint">${fmtData(w.a)} a ${fmtData(w.b)}</span></div>
        <div class="tabs-row">${tabs}</div>
        <div class="pl-grid">${colunas.join("")}</div>
        <div class="pl-legenda"><span>📖 Teoria</span><span>✏️ Questões</span><span>🔁 Revisão</span><span>⏱️ Simulado</span></div>
      </div>
      <div class="pl-nav"><button class="btn btn-ghost" data-step="3">← Ver relatório</button><span></span></div>`;
  }

  function bindCronograma(root) {
    root.querySelectorAll("[data-sem]").forEach((b) => b.addEventListener("click", () => { P.semana = Number(b.dataset.sem); salvar(); render(); }));
    root.querySelectorAll("[data-feito]").forEach((c) => c.addEventListener("change", () => {
      if (c.checked) P.feitos[c.dataset.feito] = true; else delete P.feitos[c.dataset.feito];
      salvar(); render();
    }));
    root.querySelectorAll("[data-praticar]").forEach((b) => b.addEventListener("click", () => {
      const blk = P.cronograma.blocos.find((x) => x.id === b.dataset.praticar);
      if (!blk) return;
      let lista;
      if (blk.tipo === "Simulado") {
        lista = montarDiagnostico(blk.min >= 90 ? 30 : 20);
        iniciar(lista, "simulado", "Simulado do plano — " + P.edital.nome, true);
      } else if (blk.tipo === "Revisão" && blk.disc === "Geral") {
        const erradas = banco().filter((q) => state.wrongIds.includes(q.id) && P.edital.disciplinas.some((d) => d.nome === q.disciplina));
        iniciar(erradas.slice(0, 20), "revisao", "Revisão de erros — " + P.edital.nome, false);
      } else {
        lista = questoesDoTema(blk.disc, blk.assunto, P.edital.tag).slice(0, 10);
        if (lista.length < 5) {
          const extra = banco().filter((q) => q.disciplina === blk.disc && !lista.includes(q) && (P.edital.universo[blk.disc] || []).includes(q.assunto));
          lista = lista.concat(embaralhar(extra).slice(0, 10 - lista.length));
        }
        iniciar(lista, "estudo", `${blk.disc} — ${blk.assunto}`, true);
      }
    }));
    $("plIcs").addEventListener("click", baixarICS);
    $("plPrint").addEventListener("click", () => window.print());
    $("plRecalc").addEventListener("click", () => { gerarCronograma(); render(); mostrarToast("Cronograma recalculado com o seu desempenho atual."); });
    root.querySelectorAll(".pl-actions [data-step], .pl-nav [data-step]").forEach((b) => b.addEventListener("click", () => { P.passo = Number(b.dataset.step); salvar(); render(); }));
  }

  /* ---------------------------------------------------------------- migração (assuntos renomeados) */
  function migrarPlano() {
    if (!P.edital) return;
    const base = EDITAIS.find((e) => e.id === P.edital.id);
    const prova = P.edital.prova || "";
    const disciplinas = P.edital.disciplinas;
    const universo = {};
    disciplinas.forEach((d) => { universo[d.nome] = universoDe(d.nome, P.edital.tag || null, P._textoEdital || ""); });
    const mudou = disciplinas.some((d) => JSON.stringify(universo[d.nome]) !== JSON.stringify((P.edital.universo || {})[d.nome]));
    if (!mudou) return;
    P.edital.universo = universo; P.edital.prova = prova;
    if (P.cronograma) {
      const desatualizado = P.cronograma.blocos.some((b) => b.disc !== "Geral" && !(universo[b.disc] || []).includes(b.assunto) && b.assunto !== "Revisão geral");
      if (desatualizado && analisar().avaliadosTot) gerarCronograma();
    }
    salvar();
  }
  try { migrarPlano(); } catch (e) { /* plano antigo incompatível: segue sem migrar */ }

  /* ---------------------------------------------------------------- integração com o app */
  window.Plano = {
    render,
    abrir() { render(); },
    // chamado por app.js ao finalizar um simulado marcado como diagnóstico
    aoFinalizarDiagnostico() {
      P = carregar() || P;
      if (P.edital) { P.passo = 3; salvar(); }
      render();
      setView("plano");
    },
    _estado: () => P,
    _analisar: analisar,
    _gerar: gerarCronograma
  };
})();
