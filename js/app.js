/* ============================================================================
   CARTÃO — SIMULADOS PARA CONCURSOS
   app.js
   ----------------------------------------------------------------------------
   Lógica da aplicação. Depende de questions.js já ter sido carregado antes
   (variáveis globais: QUESTION_BANK, BANCA_SCORING, BANCA_TIPO_PREFERENCIA).

   Organização deste arquivo:
     1. Chaves de armazenamento e estado global
     2. Persistência (localStorage)
     3. Utilitários
     4. Filtros e sorteio de questões
     5. Motor do simulado (iniciar, navegar, responder, marcar, cronômetro)
     6. Correção e cálculo de desempenho
     7. Renderização de telas
     8. Eventos / inicialização
   ========================================================================== */

/* ---------------------------------------------------------------------------
   1) CHAVES DE ARMAZENAMENTO E ESTADO GLOBAL
--------------------------------------------------------------------------- */
const STORAGE_KEYS = {
  HISTORY: "cartao_historico_simulados",
  WRONG_IDS: "cartao_questoes_erradas",
  ANSWERED_IDS: "cartao_questoes_respondidas",
  THEME: "cartao_tema"
};

const state = {
  theme: "light",
  history: [],          // array de resultados de simulados já finalizados
  wrongIds: [],          // ids de questões atualmente "em aberto" como erradas
  answeredIds: [],       // ids de questões já respondidas alguma vez (qualquer simulado)
  filters: {
    disciplinas: [],
    bancas: [],
    assuntos: [],
    tipo: "Todos",
    dificuldade: "Todas",
    quantidade: 10,
    modo: "simulado",
    timerMode: "up",
    anoDe: null,
    anoAte: null,
    somenteErradas: false,
    ocultarRespondidas: false
  },
  sim: null,             // simulado em andamento
  revTab: "todas",
  mobileMenuOpen: false
};
window.state = state; // exposto para depuração via console do navegador

/* ---------------------------------------------------------------------------
   2) PERSISTÊNCIA (localStorage)
--------------------------------------------------------------------------- */
function carregarHistorico() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY)) || []; }
  catch (e) { return []; }
}
function salvarHistorico() {
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(state.history));
}
function carregarListaSimples(key) {
  try { return JSON.parse(localStorage.getItem(key)) || []; }
  catch (e) { return []; }
}
function salvarListaSimples(key, arr) {
  localStorage.setItem(key, JSON.stringify(arr));
}
function carregarTema() {
  return localStorage.getItem(STORAGE_KEYS.THEME) || "light";
}
function salvarTema(tema) {
  localStorage.setItem(STORAGE_KEYS.THEME, tema);
}

/* ---------------------------------------------------------------------------
   3) UTILITÁRIOS
--------------------------------------------------------------------------- */
function embaralhar(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatarTempo(segundosTotais) {
  const h = Math.floor(segundosTotais / 3600);
  const m = Math.floor((segundosTotais % 3600) / 60);
  const s = Math.floor(segundosTotais % 60);
  const pad = n => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function formatarTempoLegivel(segundosTotais) {
  const m = Math.floor(segundosTotais / 60);
  const s = Math.floor(segundosTotais % 60);
  return `${m}min ${s}s`;
}

function mostrarToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(mostrarToast._t);
  mostrarToast._t = setTimeout(() => toast.classList.remove("show"), 2600);
}

function abrirModalConfirmacao(titulo, mensagem, onConfirmar, textoConfirmar = "Confirmar") {
  const root = document.getElementById("modalRoot");
  root.innerHTML = `
    <div class="modal-overlay" id="modalOverlay">
      <div class="modal-box">
        <h3>${titulo}</h3>
        <p style="color:var(--muted)">${mensagem}</p>
        <div class="modal-actions">
          <button class="btn btn-ghost" id="modalCancelBtn">Cancelar</button>
          <button class="btn btn-primary" id="modalConfirmBtn">${textoConfirmar}</button>
        </div>
      </div>
    </div>`;
  document.getElementById("modalCancelBtn").onclick = () => { root.innerHTML = ""; };
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "modalOverlay") root.innerHTML = "";
  });
  document.getElementById("modalConfirmBtn").onclick = () => {
    root.innerHTML = "";
    onConfirmar();
  };
}

function unico(arr) { return [...new Set(arr)]; }

/* ---------------------------------------------------------------------------
   4) FILTROS E SORTEIO DE QUESTÕES
--------------------------------------------------------------------------- */
function lerFiltrosDaTela() {
  // disciplinas, bancas e assuntos já são mantidos em state.filters pelos dropdowns (ver criarDropdownMultiselect)
  state.filters.anoDe = document.getElementById("fAnoDe").value ? Number(document.getElementById("fAnoDe").value) : null;
  state.filters.anoAte = document.getElementById("fAnoAte").value ? Number(document.getElementById("fAnoAte").value) : null;
  return state.filters;
}

function filtrarQuestoes(filters) {
  return QUESTION_BANK.filter(q => {
    if (filters.disciplinas.length && !filters.disciplinas.includes(q.disciplina)) return false;
    if (filters.bancas.length && !filters.bancas.includes(q.banca)) return false;
    if (filters.assuntos.length && !filters.assuntos.includes(q.assunto)) return false;
    if (filters.tipo !== "Todos" && q.tipo !== filters.tipo) return false;
    if (filters.dificuldade !== "Todas" && q.dificuldade !== filters.dificuldade) return false;
    if (filters.anoDe && q.ano < filters.anoDe) return false;
    if (filters.anoAte && q.ano > filters.anoAte) return false;
    if (filters.somenteErradas && !state.wrongIds.includes(q.id)) return false;
    if (filters.ocultarRespondidas && state.answeredIds.includes(q.id)) return false;
    if (filters.modo === "revisao" && !state.wrongIds.includes(q.id)) return false;
    return true;
  });
}

function sortearQuestoes(lista, quantidade) {
  const embaralhada = embaralhar(lista);
  if (quantidade === "all" || quantidade >= embaralhada.length) return embaralhada;
  return embaralhada.slice(0, quantidade);
}

/* ---------------------------------------------------------------------------
   5) MOTOR DO SIMULADO
--------------------------------------------------------------------------- */
function iniciarSimulado(listaQuestoes, modo, timerMode) {
  if (!listaQuestoes.length) {
    mostrarToast("Nenhuma questão encontrada com os filtros selecionados.");
    return;
  }
  state.sim = {
    questions: listaQuestoes.map(q => ({ ...q })),
    answers: {},          // id -> letra escolhida (ou null)
    marked: new Set(),
    revealed: new Set(),  // ids de questões já "respondidas" (botão Responder clicado)
    currentIndex: 0,
    modo: modo,
    timerMode: timerMode,
    elapsedSeconds: 0,
    paused: false,
    finished: false,
    startedAt: new Date().toISOString(),
    countdownTotal: listaQuestoes.length * 180 // heurística: 3min por questão no regressivo
  };
  iniciarCronometro();
  setView("simulado");
  renderSimulado();
}

function cronometroTick() {
  if (state.sim.paused || state.sim.finished) return;
  state.sim.elapsedSeconds++;
  atualizarDisplayCronometro();
}
function iniciarCronometro() {
  clearInterval(iniciarCronometro._interval);
  iniciarCronometro._interval = setInterval(cronometroTick, 1000);
}
function pararCronometro() {
  clearInterval(iniciarCronometro._interval);
}
function atualizarDisplayCronometro() {
  const el = document.getElementById("timerDisplay");
  if (!el || !state.sim) return;
  if (state.sim.timerMode === "down") {
    const restante = Math.max(0, state.sim.countdownTotal - state.sim.elapsedSeconds);
    el.textContent = formatarTempo(restante);
    if (restante === 0) mostrarToast("Tempo esgotado! Você ainda pode revisar e finalizar o simulado.");
  } else {
    el.textContent = formatarTempo(state.sim.elapsedSeconds);
  }
}

function questaoAtual() {
  return state.sim.questions[state.sim.currentIndex];
}

function selecionarResposta(letra) {
  const sim = state.sim;
  const q = questaoAtual();
  if (sim.finished) return;
  if (sim.revealed.has(q.id)) return; // já confirmada: precisa "Limpar resposta" para trocar
  sim.answers[q.id] = letra;
  registrarQuestaoRespondida(q.id);
  renderSimulado();
}

function responderQuestaoAtual() {
  const sim = state.sim;
  const q = questaoAtual();
  if (sim.finished) return;
  const resposta = sim.answers[q.id];
  if (resposta === undefined || resposta === null) return; // precisa escolher uma alternativa antes
  sim.revealed.add(q.id);
  renderSimulado();
}

function limparResposta() {
  const sim = state.sim;
  const q = questaoAtual();
  if (sim.finished) return;
  delete sim.answers[q.id];
  sim.revealed.delete(q.id);
  renderSimulado();
}

function alternarMarcacao() {
  const sim = state.sim;
  const q = questaoAtual();
  if (sim.marked.has(q.id)) sim.marked.delete(q.id);
  else sim.marked.add(q.id);
  renderSimulado();
}

function irParaQuestao(index) {
  const sim = state.sim;
  if (index < 0 || index >= sim.questions.length) return;
  sim.currentIndex = index;
  renderSimulado();
  fecharOmrMobile();
}
function proximaQuestao() { irParaQuestao(state.sim.currentIndex + 1); }
function questaoAnterior() { irParaQuestao(state.sim.currentIndex - 1); }

function registrarQuestaoRespondida(id) {
  if (!state.answeredIds.includes(id)) {
    state.answeredIds.push(id);
    salvarListaSimples(STORAGE_KEYS.ANSWERED_IDS, state.answeredIds);
  }
}

function respostaEstaCorreta(q, letraEscolhida) {
  return letraEscolhida === q.gabarito;
}

/* ---------------------------------------------------------------------------
   6) CORREÇÃO E CÁLCULO DE DESEMPENHO
--------------------------------------------------------------------------- */
function calcularPontuacao(sim) {
  let pontos = 0;
  sim.questions.forEach(q => {
    const regra = BANCA_SCORING[q.banca] || BANCA_SCORING.DEFAULT;
    const resposta = sim.answers[q.id];
    if (resposta === undefined || resposta === null) { pontos += regra.branco; return; }
    if (respostaEstaCorreta(q, resposta)) pontos += regra.acerto;
    else pontos += regra.erro;
  });
  return pontos;
}

function calcularResultado(sim) {
  let acertos = 0, erros = 0, brancos = 0;
  const porDisciplina = {}; // disciplina -> {questoes,acertos}
  const porAssunto = {};    // assunto -> {questoes,acertos}
  const novosErrados = [];
  const novosCorrigidos = [];

  sim.questions.forEach(q => {
    const resposta = sim.answers[q.id];
    porDisciplina[q.disciplina] = porDisciplina[q.disciplina] || { questoes: 0, acertos: 0 };
    porAssunto[q.assunto] = porAssunto[q.assunto] || { questoes: 0, acertos: 0 };
    porDisciplina[q.disciplina].questoes++;
    porAssunto[q.assunto].questoes++;

    if (resposta === undefined || resposta === null) {
      brancos++;
      novosErrados.push(q.id); // em branco entra como pendente de revisão também
      return;
    }
    if (respostaEstaCorreta(q, resposta)) {
      acertos++;
      porDisciplina[q.disciplina].acertos++;
      porAssunto[q.assunto].acertos++;
      novosCorrigidos.push(q.id);
    } else {
      erros++;
      novosErrados.push(q.id);
    }
  });

  // atualiza lista de questões "em aberto" como erradas (para Modo Revisão)
  novosCorrigidos.forEach(id => { state.wrongIds = state.wrongIds.filter(w => w !== id); });
  novosErrados.forEach(id => { if (!state.wrongIds.includes(id)) state.wrongIds.push(id); });
  salvarListaSimples(STORAGE_KEYS.WRONG_IDS, state.wrongIds);

  const total = sim.questions.length;
  const aproveitamento = total ? Math.round((acertos / total) * 100) : 0;

  return {
    id: Date.now(),
    data: new Date().toISOString(),
    modo: sim.modo,
    totalQuestoes: total,
    acertos, erros, brancos,
    aproveitamento,
    tempoSegundos: sim.elapsedSeconds,
    pontuacao: calcularPontuacao(sim),
    porDisciplina,
    porAssunto,
    // guarda cópia das questões + respostas para permitir revisão detalhada depois
    questions: sim.questions,
    answers: { ...sim.answers },
    marked: Array.from(sim.marked)
  };
}

function finalizarSimulado() {
  const sim = state.sim;
  const totalRespondidas = Object.keys(sim.answers).length;
  const naoRespondidas = sim.questions.length - totalRespondidas;

  const executarFinalizacao = () => {
    pararCronometro();
    sim.finished = true;
    const resultado = calcularResultado(sim);
    state.history.unshift(resultado);
    salvarHistorico();
    state.ultimoResultado = resultado;
    renderResultado(resultado);
    setView("resultado");
  };

  if (naoRespondidas > 0) {
    abrirModalConfirmacao(
      "Finalizar simulado?",
      `Você ainda possui ${naoRespondidas} questão(ões) não respondida(s). Deseja realmente finalizar?`,
      executarFinalizacao,
      "Finalizar mesmo assim"
    );
  } else {
    executarFinalizacao();
  }
}

/* ---------------------------------------------------------------------------
   7) RENDERIZAÇÃO DE TELAS
--------------------------------------------------------------------------- */

/* ----- navegação entre "views" (seções) ----- */
function setView(viewName) {
  ["home", "dashboard", "simulado", "resultado"].forEach(v => {
    document.getElementById("view-" + v).classList.toggle("hidden", v !== viewName);
  });
  document.querySelectorAll("#navTabs button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === viewName);
  });
  try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch (e) { /* ambiente sem suporte a scrollTo */ }
  if (viewName === "dashboard") renderDashboard();
  if (viewName === "home") atualizarContagemFiltro();
}

/* ----- popular selects de filtro ----- */
function popularSelectsDeFiltro() {
  const disciplinas = unico(QUESTION_BANK.map(q => q.disciplina)).sort();
  const bancas = unico(QUESTION_BANK.map(q => q.banca)).sort();
  const assuntos = unico(QUESTION_BANK.map(q => q.assunto)).sort();

  dropdowns.disciplina = criarDropdownMultiselect("fDisciplina", disciplinas, "disciplinas");
  dropdowns.banca = criarDropdownMultiselect("fBanca", bancas, "bancas");
  dropdowns.assunto = criarDropdownMultiselect("fAssunto", assuntos, "assuntos");
}

const dropdowns = {}; // guarda os handles dos dropdowns (disciplina/banca/assunto) para poder resetá-los

/**
 * Cria um dropdown de múltipla seleção compacto (checkboxes escondidos por padrão),
 * evitando o gasto de espaço vertical de um <select multiple>.
 * filtroKey: chave correspondente em state.filters (ex.: "disciplinas").
 */
function criarDropdownMultiselect(containerId, valores, filtroKey) {
  const container = document.getElementById(containerId);
  container.classList.add("dropdown-ms");
  container.innerHTML = `
    <button type="button" class="dd-toggle">
      <span class="dd-label">Todas</span><span class="dd-arrow">▾</span>
    </button>
    <div class="dd-panel hidden">
      ${valores.map(v => `<label class="dd-option"><input type="checkbox" value="${v}"> ${v}</label>`).join("")}
      <div class="dd-actions">
        <button type="button" data-action="all">Selecionar todas</button>
        <button type="button" data-action="none">Limpar</button>
      </div>
    </div>`;

  const toggle = container.querySelector(".dd-toggle");
  const panel = container.querySelector(".dd-panel");
  const label = container.querySelector(".dd-label");

  function atualizarLabel() {
    const marcados = Array.from(container.querySelectorAll("input:checked")).map(i => i.value);
    state.filters[filtroKey] = marcados;
    label.textContent = marcados.length === 0 ? "Todas"
      : marcados.length === 1 ? marcados[0]
      : `${marcados.length} selecionadas`;
    atualizarContagemFiltro();
  }

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelectorAll(".dropdown-ms .dd-panel").forEach(p => { if (p !== panel) p.classList.add("hidden"); });
    document.querySelectorAll(".dropdown-ms").forEach(d => { if (d !== container) d.classList.remove("open"); });
    panel.classList.toggle("hidden");
    container.classList.toggle("open", !panel.classList.contains("hidden"));
  });
  panel.addEventListener("click", (e) => e.stopPropagation());
  container.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.addEventListener("change", atualizarLabel));
  container.querySelector('[data-action="all"]').addEventListener("click", () => {
    container.querySelectorAll('input[type="checkbox"]').forEach(cb => (cb.checked = true));
    atualizarLabel();
  });
  container.querySelector('[data-action="none"]').addEventListener("click", () => {
    container.querySelectorAll('input[type="checkbox"]').forEach(cb => (cb.checked = false));
    atualizarLabel();
  });

  return {
    reset: () => {
      container.querySelectorAll('input[type="checkbox"]').forEach(cb => (cb.checked = false));
      atualizarLabel();
    }
  };
}
// fecha qualquer dropdown aberto ao clicar fora dele
document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown-ms .dd-panel").forEach(p => p.classList.add("hidden"));
  document.querySelectorAll(".dropdown-ms").forEach(d => d.classList.remove("open"));
});

/* ----- contagem dinâmica de questões disponíveis ----- */
function atualizarContagemFiltro() {
  const filtros = lerFiltrosDaTela();
  const encontradas = filtrarQuestoes(filtros);
  document.getElementById("matchCount").textContent = encontradas.length;
}

/* ----- tela do simulado: cabeçalho, questão, alternativas, cartão-resposta ----- */
function renderSimulado() {
  const sim = state.sim;
  const q = questaoAtual();
  const total = sim.questions.length;

  document.getElementById("examTitle").textContent =
    sim.modo === "estudo" ? "Simulado — Modo Estudo" :
    sim.modo === "revisao" ? "Simulado — Modo Revisão" : "Simulado de Concurso";

  document.getElementById("examBreadcrumb").innerHTML =
    `Questão <b>${sim.currentIndex + 1} de ${total}</b> &nbsp;•&nbsp; ${q.disciplina} • ${q.assunto} &nbsp;•&nbsp; ${q.banca} • ${q.dificuldade}`;

  document.getElementById("qProgressBar").style.width = `${((sim.currentIndex + 1) / total) * 100}%`;
  document.getElementById("qDisciplinaBadge").textContent = q.disciplina;
  document.getElementById("qBancaBadge").textContent = q.banca;
  document.getElementById("qDificuldadeBadge").textContent = q.dificuldade;
  document.getElementById("qAnoBadge").textContent = q.ano;
  document.getElementById("qDemoFlag").classList.toggle("hidden", q.oficial !== false);
  document.getElementById("qEnunciado").textContent = q.enunciado;

  const respostaDada = sim.answers[q.id];
  const revelado = sim.revealed.has(q.id);
  const jaFinalizado = sim.finished;
  const mostrarGabarito = revelado || jaFinalizado;

  renderAlternativas(q, respostaDada, mostrarGabarito);
  renderFeedback(q, respostaDada, mostrarGabarito);

  const btnResponder = document.getElementById("btnResponder");
  const temResposta = respostaDada !== undefined && respostaDada !== null;
  btnResponder.classList.toggle("hidden", mostrarGabarito);
  btnResponder.disabled = !temResposta || jaFinalizado;

  document.getElementById("btnMark").textContent = sim.marked.has(q.id) ? "★ Marcada para revisão" : "☆ Marcar para revisão";
  document.getElementById("btnPrev").disabled = sim.currentIndex === 0;
  document.getElementById("btnNext").disabled = sim.currentIndex === total - 1;
  document.getElementById("btnClearAnswer").disabled = !temResposta || sim.finished;

  atualizarDisplayCronometro();
  renderOmrGrid();
}

function renderAlternativas(q, respostaDada, revelarGabarito) {
  const cont = document.getElementById("qAltList");
  const letras = Object.keys(q.alternativas);
  cont.innerHTML = letras.map(letra => {
    let classe = "alt-item";
    if (respostaDada === letra) classe += " selected";
    if (revelarGabarito) {
      classe += " disabled";
      if (letra === q.gabarito) classe += " correct";
      else if (letra === respostaDada) classe += " wrong";
    }
    return `
      <div class="${classe}" data-letra="${letra}">
        <span class="alt-letter">${letra}</span>
        <span class="alt-text">${q.alternativas[letra]}</span>
      </div>`;
  }).join("");

  cont.querySelectorAll(".alt-item").forEach(el => {
    el.addEventListener("click", () => {
      if (el.classList.contains("disabled")) return;
      selecionarResposta(el.dataset.letra);
    });
  });
}

function renderFeedback(q, respostaDada, revelarGabarito) {
  const area = document.getElementById("feedbackArea");
  const breve = state.sim.modo === "simulado";
  if (!revelarGabarito || respostaDada === undefined || respostaDada === null) {
    area.innerHTML = state.sim.finished && (respostaDada === undefined || respostaDada === null)
      ? `<div class="feedback-banner bad">⚪ Questão não respondida</div>${gabaritoBoxHtml(q, breve)}`
      : "";
    return;
  }
  const correta = respostaEstaCorreta(q, respostaDada);
  area.innerHTML =
    (correta
      ? `<div class="feedback-banner ok">🟢 Resposta correta!</div>`
      : `<div class="feedback-banner bad">🔴 Resposta incorreta.</div>`) +
    gabaritoBoxHtml(q, breve);
}

function gabaritoBoxHtml(q, breve = false) {
  if (breve) {
    // comentário breve: só a essência do gabarito, sem a análise alternativa por alternativa
    return `
      <div class="gabarito-box">
        <h4>Gabarito: <span class="g-answer">${q.gabarito}</span></h4>
        <p style="margin:0">${q.comentario}</p>
      </div>`;
  }
  let comentariosAlternativas = "";
  if (q.comentarioAlternativas) {
    comentariosAlternativas = `<div class="g-block"><h5>Análise das alternativas</h5>` +
      Object.keys(q.comentarioAlternativas).map(letra =>
        `<div class="alt-comment"><b>${letra})</b> ${q.comentarioAlternativas[letra]}</div>`
      ).join("") + `</div>`;
  }
  return `
    <div class="gabarito-box">
      <h4>Gabarito: <span class="g-answer">${q.gabarito}</span></h4>
      <div class="g-block">
        <h5>Gabarito comentado</h5>
        <p style="margin:0">${q.comentario}</p>
      </div>
      ${comentariosAlternativas}
      <div class="g-block">
        <h5>Fundamento</h5>
        <p style="margin:0">${q.fundamento}</p>
      </div>
    </div>`;
}

/* ----- cartão-resposta (painel de navegação entre questões) ----- */
function renderOmrGrid() {
  const sim = state.sim;
  const grid = document.getElementById("omrGrid");
  grid.innerHTML = sim.questions.map((q, i) => {
    const resposta = sim.answers[q.id];
    const respondida = resposta !== undefined && resposta !== null;
    const revelar = sim.revealed.has(q.id) || sim.finished;
    let classe = "omr-bubble";
    if (i === sim.currentIndex) classe += " current";
    if (sim.marked.has(q.id)) classe += " marked";
    if (respondida) {
      classe += " answered";
      if (revelar) classe += respostaEstaCorreta(q, resposta) ? " correct" : " wrong";
    }
    return `<button type="button" class="${classe}" data-index="${i}" title="Questão ${i + 1}">${i + 1}</button>`;
  }).join("");
  grid.querySelectorAll(".omr-bubble").forEach(el => {
    el.addEventListener("click", () => irParaQuestao(Number(el.dataset.index)));
  });
}

function abrirOmrMobile() {
  document.getElementById("omrPanel").classList.add("open");
  document.getElementById("omrScrim").classList.add("show");
}
function fecharOmrMobile() {
  document.getElementById("omrPanel").classList.remove("open");
  document.getElementById("omrScrim").classList.remove("show");
}

/* ----- tela de resultado ----- */
function renderResultado(resultado) {
  document.getElementById("scoreRing").style.setProperty("--pct", resultado.aproveitamento);
  document.getElementById("scoreRingText").textContent = resultado.aproveitamento + "%";
  document.getElementById("resAcertos").textContent = resultado.acertos;
  document.getElementById("resErros").textContent = resultado.erros;
  document.getElementById("resBrancos").textContent = resultado.brancos;
  document.getElementById("resTotal").textContent = resultado.totalQuestoes;
  document.getElementById("resTempo").textContent = formatarTempoLegivel(resultado.tempoSegundos);
  document.getElementById("resPontos").textContent = resultado.pontuacao;

  renderBarrasPorGrupo("resByDiscipline", resultado.porDisciplina);

  // pontos fracos por assunto (ordenado do pior para o melhor, top 5)
  const assuntosOrdenados = Object.entries(resultado.porAssunto)
    .map(([assunto, v]) => ({ assunto, pct: v.questoes ? Math.round((v.acertos / v.questoes) * 100) : 0, questoes: v.questoes }))
    .sort((a, b) => a.pct - b.pct)
    .slice(0, 5);
  const weakEl = document.getElementById("resWeakSubjects");
  weakEl.innerHTML = assuntosOrdenados.map((a, i) =>
    `<div class="rev-item"><span>${i + 1}. ${a.assunto}</span><span class="mono">${a.pct}% de acerto (${a.questoes} questão(ões))</span></div>`
  ).join("") || `<p style="color:var(--muted)">Sem dados suficientes.</p>`;

  state.revTab = "todas";
  renderTabsRevisao();
  renderListaRevisao(resultado);
}

function renderBarrasPorGrupo(containerId, grupo) {
  const el = document.getElementById(containerId);
  const entradas = Object.entries(grupo);
  el.innerHTML = entradas.map(([nome, v]) => {
    const pct = v.questoes ? Math.round((v.acertos / v.questoes) * 100) : 0;
    const classe = pct >= 80 ? "good" : pct >= 60 ? "mid" : "bad";
    const icone = pct >= 80 ? "🟢" : pct >= 60 ? "🟡" : "🔴";
    return `
      <div class="bar-row">
        <span>${nome}</span>
        <div class="bar-track"><div class="bar-fill ${classe}" style="width:${pct}%"></div></div>
        <span class="mono">${pct}%</span>
        <span class="bar-count">${icone} ${v.acertos}/${v.questoes}</span>
      </div>`;
  }).join("") || `<p style="color:var(--muted)">Sem dados.</p>`;
}

function renderTabsRevisao() {
  document.querySelectorAll("#revTabs .chip").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.value === state.revTab);
  });
}

function renderListaRevisao(resultado) {
  const cont = document.getElementById("revList");
  let lista = resultado.questions;
  if (state.revTab === "acertos") {
    lista = lista.filter(q => respostaEstaCorreta(q, resultado.answers[q.id]));
  } else if (state.revTab === "erros") {
    lista = lista.filter(q => {
      const r = resultado.answers[q.id];
      return r === undefined || r === null || !respostaEstaCorreta(q, r);
    });
  } else if (state.revTab === "marcadas") {
    lista = lista.filter(q => resultado.marked.includes(q.id));
  }

  if (!lista.length) {
    cont.innerHTML = `<p style="color:var(--muted)">Nenhuma questão nesta categoria.</p>`;
    return;
  }

  cont.innerHTML = lista.map(q => {
    const resposta = resultado.answers[q.id];
    const respondida = resposta !== undefined && resposta !== null;
    const correta = respondida && respostaEstaCorreta(q, resposta);
    const statusTxt = !respondida ? "Não respondida" : correta ? "Correta" : "Incorreta";
    const statusCor = !respondida ? "var(--muted)" : correta ? "var(--success)" : "var(--danger)";
    return `
      <div class="review-q" data-id="${q.id}">
        <div class="rq-head">
          <div><b>${q.disciplina}</b> — ${q.assunto} <span class="badge badge-muted">${q.banca}</span></div>
          <span class="rq-status" style="color:${statusCor}">${statusTxt}</span>
        </div>
        <div>${q.enunciado.length > 120 ? q.enunciado.slice(0, 120) + "…" : q.enunciado}</div>
        <div class="rq-detail">
          ${Object.keys(q.alternativas).map(l => {
            let tag = "";
            if (l === q.gabarito) tag = " ✅";
            else if (l === resposta) tag = " ❌ (sua resposta)";
            return `<div style="margin-bottom:4px"><b>${l})</b> ${q.alternativas[l]}${tag}</div>`;
          }).join("")}
          ${gabaritoBoxHtml(q)}
        </div>
      </div>`;
  }).join("");

  cont.querySelectorAll(".review-q").forEach(el => {
    el.addEventListener("click", () => el.classList.toggle("detail-open"));
  });
}

/* ----- dashboard / meu painel ----- */
function renderDashboard() {
  state.history = carregarHistorico();
  state.wrongIds = carregarListaSimples(STORAGE_KEYS.WRONG_IDS);
  state.answeredIds = carregarListaSimples(STORAGE_KEYS.ANSWERED_IDS);

  const totalSimulados = state.history.length;
  const totalQuestoes = state.history.reduce((acc, r) => acc + r.totalQuestoes, 0);
  const totalAcertos = state.history.reduce((acc, r) => acc + r.acertos, 0);
  const mediaAcerto = totalQuestoes ? Math.round((totalAcertos / totalQuestoes) * 100) : 0;

  document.getElementById("dashStats").innerHTML = `
    <div class="card stat-card"><div class="stat-icon">📝</div><div class="stat-value mono">${totalSimulados}</div><div class="stat-label">Simulados realizados</div></div>
    <div class="card stat-card"><div class="stat-icon">❓</div><div class="stat-value mono">${totalQuestoes}</div><div class="stat-label">Questões respondidas</div></div>
    <div class="card stat-card"><div class="stat-icon">🎯</div><div class="stat-value mono">${mediaAcerto}%</div><div class="stat-label">Taxa média de acerto</div></div>
    <div class="card stat-card"><div class="stat-icon">📌</div><div class="stat-value mono">${state.wrongIds.length}</div><div class="stat-label">Questões para revisar</div></div>
  `;

  // agregação por disciplina em todo o histórico
  const porDisciplina = {};
  state.history.forEach(r => {
    Object.entries(r.porDisciplina).forEach(([disc, v]) => {
      porDisciplina[disc] = porDisciplina[disc] || { questoes: 0, acertos: 0 };
      porDisciplina[disc].questoes += v.questoes;
      porDisciplina[disc].acertos += v.acertos;
    });
  });
  renderBarrasPorGrupo("dashByDiscipline", porDisciplina);

  const histEl = document.getElementById("dashHistory");
  histEl.innerHTML = state.history.slice(0, 20).map(r => {
    const data = new Date(r.data).toLocaleString("pt-BR");
    return `<div class="rev-item">
      <span>${data} — ${r.totalQuestoes} questões (${r.modo})</span>
      <span class="mono">${r.aproveitamento}% • ${r.acertos}/${r.totalQuestoes}</span>
    </div>`;
  }).join("") || `<p style="color:var(--muted)">Você ainda não finalizou nenhum simulado. Monte o primeiro na aba "Montar simulado".</p>`;
}

/* ---------------------------------------------------------------------------
   8) TEMA CLARO/ESCURO
--------------------------------------------------------------------------- */
function aplicarTema(tema) {
  state.theme = tema;
  document.documentElement.setAttribute("data-theme", tema);
  document.getElementById("themeToggleBtn").textContent = tema === "dark" ? "☀️" : "🌙";
  salvarTema(tema);
}
function alternarTema() {
  aplicarTema(state.theme === "dark" ? "light" : "dark");
}

/* ---------------------------------------------------------------------------
   9) EVENTOS / INICIALIZAÇÃO
--------------------------------------------------------------------------- */
function configurarChips(containerId, callback, multi = false) {
  const container = document.getElementById(containerId);
  container.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      if (multi) {
        chip.classList.toggle("active");
      } else {
        container.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
      }
      callback(chip);
      atualizarContagemFiltro();
    });
  });
}

function valorChipAtivo(containerId) {
  const ativo = document.querySelector(`#${containerId} .chip.active`);
  return ativo ? ativo.dataset.value : null;
}

function inicializarEventos() {
  // navegação principal
  document.querySelectorAll("#navTabs button").forEach(btn => {
    btn.addEventListener("click", () => setView(btn.dataset.view));
  });
  document.getElementById("btnScrollDashboard").addEventListener("click", () => setView("dashboard"));

  // tema
  document.getElementById("themeToggleBtn").addEventListener("click", alternarTema);

  // menu suspenso (hambúrguer) — sempre disponível, com opções visíveis
  const menuDropdown = document.getElementById("menuDropdown");
  const menuPanel = document.getElementById("menuDropdownPanel");
  document.getElementById("menuToggleBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    menuPanel.classList.toggle("hidden");
  });
  menuPanel.querySelectorAll("button[data-view]").forEach(btn => {
    btn.addEventListener("click", () => {
      setView(btn.dataset.view);
      menuPanel.classList.add("hidden");
    });
  });
  document.addEventListener("click", (e) => {
    if (!menuDropdown.contains(e.target)) menuPanel.classList.add("hidden");
  });

  // botão "Início" dentro do painel (Meu desempenho)
  document.getElementById("btnDashboardHome").addEventListener("click", () => setView("home"));

  // clicar na marca/logo também leva para a tela inicial
  document.querySelector(".brand").style.cursor = "pointer";
  document.querySelector(".brand").addEventListener("click", () => setView("home"));

  // filtros — ano
  document.getElementById("fAnoDe").addEventListener("input", atualizarContagemFiltro);
  document.getElementById("fAnoAte").addEventListener("input", atualizarContagemFiltro);

  // chips: tipo de questão
  configurarChips("chipTipo", chip => { state.filters.tipo = chip.dataset.value; });

  // chips: dificuldade
  configurarChips("chipDificuldade", chip => { state.filters.dificuldade = chip.dataset.value; });

  // chips: quantidade
  configurarChips("chipQtd", chip => {
    const val = chip.dataset.value;
    const inputCustom = document.getElementById("qtdCustomInput");
    if (val === "custom") {
      inputCustom.classList.remove("hidden");
      state.filters.quantidade = Number(inputCustom.value) || 10;
    } else {
      inputCustom.classList.add("hidden");
      state.filters.quantidade = val === "all" ? "all" : Number(val);
    }
  });
  document.getElementById("qtdCustomInput").addEventListener("input", (e) => {
    state.filters.quantidade = Number(e.target.value) || 1;
  });

  // chips: modo de estudo
  configurarChips("chipModo", chip => {
    state.filters.modo = chip.dataset.value;
    document.querySelectorAll("#chipModo .chip").forEach(c => c.classList.remove("mode-accent"));
    chip.classList.add("mode-accent");
  });

  // chips: cronômetro
  configurarChips("chipTimer", chip => { state.filters.timerMode = chip.dataset.value; });

  // chips: filtros avançados (multi-seleção)
  configurarChips("chipAvancado", chip => {
    if (chip.dataset.value === "somenteErradas") state.filters.somenteErradas = chip.classList.contains("active");
    if (chip.dataset.value === "ocultarRespondidas") state.filters.ocultarRespondidas = chip.classList.contains("active");
  }, true);

  // limpar filtros
  document.getElementById("btnClearFilters").addEventListener("click", () => {
    document.getElementById("fAnoDe").value = "";
    document.getElementById("fAnoAte").value = "";
    dropdowns.disciplina.reset();
    dropdowns.banca.reset();
    dropdowns.assunto.reset();
    state.filters = {
      disciplinas: [], bancas: [], assuntos: [], tipo: "Todos", dificuldade: "Todas",
      quantidade: 10, modo: "simulado", timerMode: "up", anoDe: null, anoAte: null,
      somenteErradas: false, ocultarRespondidas: false
    };
    ["chipTipo", "chipDificuldade", "chipQtd", "chipModo", "chipTimer", "chipAvancado"].forEach(id => {
      document.querySelectorAll(`#${id} .chip`).forEach(c => c.classList.remove("active", "mode-accent"));
    });
    document.querySelector("#chipTipo .chip[data-value='Todos']").classList.add("active");
    document.querySelector("#chipDificuldade .chip[data-value='Todas']").classList.add("active");
    document.querySelector("#chipQtd .chip[data-value='10']").classList.add("active");
    document.querySelector("#chipModo .chip[data-value='simulado']").classList.add("active", "mode-accent");
    document.querySelector("#chipTimer .chip[data-value='up']").classList.add("active");
    document.getElementById("qtdCustomInput").classList.add("hidden");
    atualizarContagemFiltro();
  });

  // iniciar simulado
  document.getElementById("btnStartSim").addEventListener("click", () => {
    const filtros = lerFiltrosDaTela();
    let candidatas = filtrarQuestoes(filtros);

    if (filtros.modo === "revisao" && !candidatas.length) {
      mostrarToast("Você não possui questões erradas com esses filtros. Responda mais simulados primeiro!");
      return;
    }
    const escolhidas = sortearQuestoes(candidatas, filtros.quantidade);
    if (!escolhidas.length) {
      mostrarToast("Nenhuma questão encontrada com os filtros selecionados.");
      return;
    }
    iniciarSimulado(escolhidas, filtros.modo === "revisao" ? "estudo" : filtros.modo, filtros.timerMode);
  });

  // navegação do simulado
  document.getElementById("btnPrev").addEventListener("click", questaoAnterior);
  document.getElementById("btnNext").addEventListener("click", proximaQuestao);
  document.getElementById("btnClearAnswer").addEventListener("click", limparResposta);
  document.getElementById("btnResponder").addEventListener("click", responderQuestaoAtual);
  document.getElementById("btnMark").addEventListener("click", alternarMarcacao);
  document.getElementById("btnFinishSim").addEventListener("click", finalizarSimulado);

  // cronômetro: pausar/continuar
  document.getElementById("btnPauseTimer").addEventListener("click", (e) => {
    state.sim.paused = !state.sim.paused;
    e.target.textContent = state.sim.paused ? "▶" : "⏸";
    mostrarToast(state.sim.paused ? "Simulado pausado." : "Simulado retomado.");
  });

  // painel de questões no mobile
  document.getElementById("btnOpenOmr").addEventListener("click", abrirOmrMobile);
  document.getElementById("omrScrim").addEventListener("click", fecharOmrMobile);

  // abas de revisão no resultado
  document.querySelectorAll("#revTabs .chip").forEach(btn => {
    btn.addEventListener("click", () => {
      state.revTab = btn.dataset.value;
      renderTabsRevisao();
      renderListaRevisao(state.ultimoResultado);
    });
  });

  // refazer questões erradas
  document.getElementById("btnRedoWrong").addEventListener("click", () => {
    const errIds = state.ultimoResultado.questions
      .filter(q => {
        const r = state.ultimoResultado.answers[q.id];
        return r === undefined || r === null || !respostaEstaCorreta(q, r);
      })
      .map(q => q.id);
    const questoes = QUESTION_BANK.filter(q => errIds.includes(q.id));
    if (!questoes.length) {
      mostrarToast("Você acertou tudo! Nenhuma questão para refazer.");
      return;
    }
    iniciarSimulado(embaralhar(questoes), "estudo", "up");
  });

  document.getElementById("btnBackHome").addEventListener("click", () => setView("home"));

  // atalhos de teclado durante o simulado (setas para navegar)
  document.addEventListener("keydown", (e) => {
    if (document.getElementById("view-simulado").classList.contains("hidden")) return;
    if (e.key === "ArrowRight") proximaQuestao();
    if (e.key === "ArrowLeft") questaoAnterior();
  });
}

function inicializarApp() {
  aplicarTema(carregarTema());
  state.history = carregarHistorico();
  state.wrongIds = carregarListaSimples(STORAGE_KEYS.WRONG_IDS);
  state.answeredIds = carregarListaSimples(STORAGE_KEYS.ANSWERED_IDS);

  popularSelectsDeFiltro();
  inicializarEventos();
  atualizarContagemFiltro();
  setView("home");
}

document.addEventListener("DOMContentLoaded", inicializarApp);
