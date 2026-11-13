/* Verificador do banco de questões.  Uso:  node tools/check-banco.js
   Aponta: ids repetidos, gabarito inexistente, assuntos duplicados por grafia
   (maiúscula/acento), assuntos com uma única questão e, nas matérias jurídicas,
   assuntos sem lei/artigo entre parênteses. */
const fs = require("fs");
const path = require("path");
const src = fs.readFileSync(path.join(__dirname, "..", "js", "questions.js"), "utf8");
const Q = new Function(src + ";return QUESTION_BANK;")();

const JURIDICAS = new Set(["Direito Constitucional", "Direito Administrativo", "Direito Penal", "Direito Penal Militar",
  "Direito Processual Penal", "Direito Processual Penal Militar", "Direito Penal e Processo Penal", "Direito Previdenciário",
  "Direitos Humanos e Legislação Extravagante", "Direitos Humanos e Uso da Força", "Direitos e Garantias Fundamentais",
  "Estatuto Geral das Guardas Municipais", "Execução Penal", "Legislação Específica", "Legislação de Enfermagem",
  "Administração Financeira e Orçamentária"]);
const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/\s+/g, " ").trim();
let erros = 0, avisos = 0;
const erro = (m) => { erros++; console.log("ERRO  " + m); };
const aviso = (m) => { avisos++; console.log("AVISO " + m); };

const ids = new Set();
Q.forEach((q) => {
  if (ids.has(q.id)) erro("id repetido: " + q.id);
  ids.add(q.id);
  if (!q.alternativas || !q.alternativas[q.gabarito]) erro("gabarito inexistente na questão " + q.id);
  if (!q.assunto || !q.disciplina) erro("falta disciplina/assunto na questão " + q.id);
});

const porDisc = {};
Q.forEach((q) => { ((porDisc[q.disciplina] = porDisc[q.disciplina] || {})[q.assunto] = (porDisc[q.disciplina][q.assunto] || 0) + 1); });
Object.entries(porDisc).forEach(([d, assuntos]) => {
  const grupos = {};
  Object.keys(assuntos).forEach((a) => { (grupos[norm(a)] = grupos[norm(a)] || []).push(a); });
  Object.values(grupos).filter((g) => g.length > 1).forEach((g) => erro(`[${d}] assuntos que diferem só na grafia: ${g.join(" | ")}`));
  Object.entries(assuntos).forEach(([a, n]) => {
    if (JURIDICAS.has(d) && !/\([^)]*\)\s*$/.test(a)) aviso(`[${d}] sem lei/artigo entre parênteses: "${a}"`);
    if (n === 1 && Object.keys(assuntos).length > 12) aviso(`[${d}] assunto com 1 questão (considere agrupar): "${a}"`);
  });
});
console.log(`\n${Q.length} questões, ${Object.values(porDisc).reduce((s, a) => s + Object.keys(a).length, 0)} assuntos. ${erros} erro(s), ${avisos} aviso(s).`);
process.exit(erros ? 1 : 0);
