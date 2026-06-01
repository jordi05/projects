const langSwitch = document.getElementById("lang-switch");
const themeToggle = document.getElementById("theme-toggle");
const exportPdfButton = document.getElementById("export-pdf");
const exportPngButton = document.getElementById("export-png");

const subnetButton = document.getElementById("subnet-run");
const subnetError = document.getElementById("subnet-error");

const ipInput = document.getElementById("ip-input");
const maskInput = document.getElementById("mask-input");

const netOutput = document.getElementById("net-output");
const broadcastOutput = document.getElementById("broadcast-output");
const rangeOutput = document.getElementById("range-output");
const hostsOutput = document.getElementById("hosts-output");

const pwdInput = document.getElementById("pwd-input");
const pwdVisibility = document.getElementById("pwd-visibility");
const pwdOffline = document.getElementById("pwd-offline");
const strengthBar = document.getElementById("strength-bar");
const strengthLabel = document.getElementById("strength-label");
const entropyOutput = document.getElementById("entropy-output");
const timeOutput = document.getElementById("time-output");
const poolOutput = document.getElementById("pool-output");
const adviceOutput = document.getElementById("advice-output");

const regexButton = document.getElementById("regex-run");
const regexError = document.getElementById("regex-error");
const logInput = document.getElementById("log-input");
const regexInput = document.getElementById("regex-input");
const replaceInput = document.getElementById("replace-input");
const langSelect = document.getElementById("lang-select");
const regexGlobal = document.getElementById("regex-global");
const regexIgnore = document.getElementById("regex-ignore");
const logPreview = document.getElementById("log-preview");
const snippetOutput = document.getElementById("snippet-output");

const i18nElements = document.querySelectorAll("[data-i18n]");
const i18nPlaceholders = document.querySelectorAll("[data-i18n-placeholder]");

const ipRegex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;

const translations = {
  es: {
    brand: "Toolkit de Redes",
    language: "Idioma",
    themeDark: "Modo oscuro",
    themeLight: "Modo claro",
    exportPdf: "Exportar PDF",
    exportPng: "Exportar PNG",
    heroEyebrow: "Toolbox web para estudiar y practicar",
    heroTitle: "Redes, claves y logs en una sola pagina.",
    heroLead:
      "Tres utilidades enfocadas a estudio rapido: calculo de subred, analisis de robustez de contrasenas y limpieza de logs con regex.",
    heroSubnet: "Ir a Subredes",
    heroRegex: "Ir a Regex Logs",
    heroChecklist: "Checklist rapido",
    heroCheck1: "Subnetting en tiempo real",
    heroCheck2: "Entropia estimada y consejos",
    heroCheck3: "Regex con preview y snippet",
    subnetTitle: "Calculadora de Subredes IP",
    subnetLead:
      "Introduce una IP y una mascara (CIDR o mascara decimal). Obtienes red, broadcast, rango util y numero de hosts.",
    subnetIp: "IP",
    subnetIpPlaceholder: "192.168.10.34",
    subnetMask: "Mascara (CIDR o decimal)",
    subnetMaskPlaceholder: "/24 o 255.255.255.0",
    subnetRun: "Calcular",
    subnetNet: "Red",
    subnetBroadcast: "Broadcast",
    subnetRange: "Rango util",
    subnetHosts: "Hosts",
    pwdTitle: "Analizador de Robustez de Contrasenas",
    pwdLead:
      "Analiza la contrasena localmente. Calcula entropia estimada y tiempo de fuerza bruta segun un modelo simple.",
    pwdLabel: "Contrasena",
    pwdPlaceholder: "Escribe aqui",
    pwdShow: "Ver",
    pwdOffline: "Ataque offline",
    pwdLocal: "No se envia nada a ningun servidor.",
    pwdTime: "Tiempo estimado",
    pwdPool: "Pool de caracteres",
    pwdAdvice: "Consejo",
    regexTitle: "Generador / Limpiador de Regex para Logs",
    regexLead:
      "Pega un log, define un patron y genera un filtro rapido. Incluye un snippet en JavaScript o Python.",
    regexLog: "Log de entrada",
    regexLogPlaceholder: "Pega tu log aqui",
    regexPattern: "Regex",
    regexPatternPlaceholder: "(ERROR|WARN).*",
    regexReplace: "Reemplazo (opcional)",
    regexLang: "Lenguaje",
    regexGlobal: "Global",
    regexIgnore: "Ignore case",
    regexRun: "Aplicar",
    regexPreview: "Preview",
    regexSnippet: "Snippet",
    footer: "Hecho para estudio rapido. Todo corre en el navegador.",
    errorIp: "IP invalida.",
    errorMask: "Mascara invalida.",
    rangeNA: "No aplica",
    strengthEmpty: "-",
    entropyEmpty: "Entropia: -",
    strengthWeak: "Debil",
    strengthMedium: "Media",
    strengthStrong: "Fuerte",
    strengthVeryStrong: "Muy fuerte",
    adviceLength: "Sube la longitud a 12+ caracteres.",
    adviceCase: "Combina mayusculas y minusculas.",
    adviceDigit: "Anade numeros.",
    adviceSymbol: "Incluye simbolos.",
    adviceGood: "Bien. Considera una frase larga y unica.",
    regexEmpty: "Regex vacia.",
    regexInvalid: "Regex invalida.",
    regexNoMatch: "(sin coincidencias)",
    exportPngError: "No se pudo cargar el exportador de PNG.",
    unitSec: "seg",
    unitMin: "min",
    unitHour: "h",
    unitDay: "dias",
    unitYear: "anos",
  },
  en: {
    brand: "Network Toolkit",
    language: "Language",
    themeDark: "Dark mode",
    themeLight: "Light mode",
    exportPdf: "Export PDF",
    exportPng: "Export PNG",
    heroEyebrow: "Web toolbox for study and practice",
    heroTitle: "Networks, passwords, and logs in one page.",
    heroLead:
      "Three study-focused utilities: subnet math, password strength analysis, and regex log cleanup.",
    heroSubnet: "Go to Subnets",
    heroRegex: "Go to Regex Logs",
    heroChecklist: "Quick checklist",
    heroCheck1: "Subnetting in real time",
    heroCheck2: "Estimated entropy and tips",
    heroCheck3: "Regex with preview and snippet",
    subnetTitle: "IP Subnet Calculator",
    subnetLead:
      "Enter an IP and mask (CIDR or dotted). Get network, broadcast, usable range, and host count.",
    subnetIp: "IP",
    subnetIpPlaceholder: "192.168.10.34",
    subnetMask: "Mask (CIDR or dotted)",
    subnetMaskPlaceholder: "/24 or 255.255.255.0",
    subnetRun: "Calculate",
    subnetNet: "Network",
    subnetBroadcast: "Broadcast",
    subnetRange: "Usable range",
    subnetHosts: "Hosts",
    pwdTitle: "Password Strength Analyzer",
    pwdLead:
      "Analyze locally. Estimates entropy and brute-force time using a simple model.",
    pwdLabel: "Password",
    pwdPlaceholder: "Type here",
    pwdShow: "Show",
    pwdOffline: "Offline attack",
    pwdLocal: "Nothing is sent to any server.",
    pwdTime: "Estimated time",
    pwdPool: "Character pool",
    pwdAdvice: "Advice",
    regexTitle: "Regex Generator / Log Cleaner",
    regexLead:
      "Paste logs, define a pattern, and generate a quick filter. Includes JavaScript or Python snippet.",
    regexLog: "Input log",
    regexLogPlaceholder: "Paste your log here",
    regexPattern: "Regex",
    regexPatternPlaceholder: "(ERROR|WARN).*",
    regexReplace: "Replacement (optional)",
    regexLang: "Language",
    regexGlobal: "Global",
    regexIgnore: "Ignore case",
    regexRun: "Apply",
    regexPreview: "Preview",
    regexSnippet: "Snippet",
    footer: "Made for fast study. Everything runs in the browser.",
    errorIp: "Invalid IP.",
    errorMask: "Invalid mask.",
    rangeNA: "N/A",
    strengthEmpty: "-",
    entropyEmpty: "Entropy: -",
    strengthWeak: "Weak",
    strengthMedium: "Medium",
    strengthStrong: "Strong",
    strengthVeryStrong: "Very strong",
    adviceLength: "Increase length to 12+ characters.",
    adviceCase: "Mix upper and lower case.",
    adviceDigit: "Add numbers.",
    adviceSymbol: "Include symbols.",
    adviceGood: "Good. Consider a long, unique passphrase.",
    regexEmpty: "Regex is empty.",
    regexInvalid: "Invalid regex.",
    regexNoMatch: "(no matches)",
    exportPngError: "PNG exporter failed to load.",
    unitSec: "sec",
    unitMin: "min",
    unitHour: "h",
    unitDay: "days",
    unitYear: "years",
  },
};

const state = {
  lang: "es",
  theme: "light",
};

const t = (key) => translations[state.lang]?.[key] ?? key;

const applyTranslations = () => {
  i18nElements.forEach((el) => {
    const key = el.dataset.i18n;
    const value = t(key);
    if (value) {
      el.textContent = value;
    }
  });

  i18nPlaceholders.forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const value = t(key);
    if (value) {
      el.setAttribute("placeholder", value);
    }
  });

  themeToggle.textContent =
    state.theme === "dark" ? t("themeLight") : t("themeDark");
};

const cidrToMask = (cidr) => {
  const bits = Number(cidr);
  if (!Number.isInteger(bits) || bits < 0 || bits > 32) {
    return null;
  }
  const mask = bits === 0 ? 0 : (~0 << (32 - bits)) >>> 0;
  return mask;
};

const dottedToMask = (mask) => {
  if (!ipRegex.test(mask)) {
    return null;
  }
  const parts = mask.split(".").map(Number);
  const maskNum = parts.reduce((acc, part) => (acc << 8) + part, 0) >>> 0;
  const isValid = ((maskNum + 1) & maskNum) === 0;
  return isValid ? maskNum : null;
};

const ipToNumber = (ip) =>
  ip.split(".").map(Number).reduce((acc, part) => (acc << 8) + part, 0) >>> 0;

const numberToIp = (num) =>
  [24, 16, 8, 0].map((shift) => (num >>> shift) & 255).join(".");

const formatHosts = (hosts) =>
  hosts < 0 ? "0" : hosts.toLocaleString(state.lang === "es" ? "es-ES" : "en-US");

const calculateSubnet = () => {
  const ipValue = ipInput.value.trim();
  const maskValue = maskInput.value.trim().replace("/", "");
  subnetError.textContent = "";

  if (!ipRegex.test(ipValue)) {
    subnetError.textContent = t("errorIp");
    return;
  }

  const maskNum = maskValue.includes(".") ? dottedToMask(maskValue) : cidrToMask(maskValue);
  if (maskNum === null) {
    subnetError.textContent = t("errorMask");
    return;
  }

  const ipNum = ipToNumber(ipValue);
  const network = ipNum & maskNum;
  const broadcast = network | (~maskNum >>> 0);
  const cidrBits = maskNum === 0 ? 0 : 32 - Math.clz32(maskNum);
  const totalHosts = Math.pow(2, 32 - cidrBits);
  const usableHosts = totalHosts <= 2 ? 0 : totalHosts - 2;

  netOutput.textContent = numberToIp(network);
  broadcastOutput.textContent = numberToIp(broadcast);

  if (usableHosts === 0) {
    rangeOutput.textContent = t("rangeNA");
  } else {
    rangeOutput.textContent = `${numberToIp(network + 1)} - ${numberToIp(broadcast - 1)}`;
  }

  hostsOutput.textContent = formatHosts(usableHosts);
};

const analyzePassword = () => {
  const pwd = pwdInput.value;
  if (!pwd) {
    strengthBar.style.setProperty("--strength", "0% ");
    strengthLabel.textContent = t("strengthEmpty");
    entropyOutput.textContent = t("entropyEmpty");
    timeOutput.textContent = "-";
    poolOutput.textContent = "-";
    adviceOutput.textContent = "-";
    return;
  }

  const hasLower = /[a-z]/.test(pwd);
  const hasUpper = /[A-Z]/.test(pwd);
  const hasDigit = /\d/.test(pwd);
  const hasSymbol = /[^A-Za-z0-9]/.test(pwd);

  let pool = 0;
  if (hasLower) pool += 26;
  if (hasUpper) pool += 26;
  if (hasDigit) pool += 10;
  if (hasSymbol) pool += 33;

  const entropy = Math.log2(Math.pow(pool || 1, pwd.length));
  const guessesPerSecond = pwdOffline.checked ? 1e10 : 1e7;
  const seconds = Math.pow(2, entropy) / guessesPerSecond;

  const strengthScore = Math.min(100, Math.round((entropy / 80) * 100));
  strengthBar.style.setProperty("--strength", `${strengthScore}%`);

  let label = t("strengthWeak");
  if (entropy > 70) label = t("strengthVeryStrong");
  else if (entropy > 50) label = t("strengthStrong");
  else if (entropy > 30) label = t("strengthMedium");

  strengthLabel.textContent = label;
  entropyOutput.textContent = `${t("entropyEmpty").replace("-", "").trim()} ${entropy.toFixed(
    1
  )} bits`;
  poolOutput.textContent = pool.toString();
  timeOutput.textContent = formatDuration(seconds);
  adviceOutput.textContent = getAdvice(pwd.length, hasLower, hasUpper, hasDigit, hasSymbol);
};

const formatDuration = (seconds) => {
  if (!Number.isFinite(seconds) || seconds <= 0) return "-";
  const units = [
    [60, t("unitSec")],
    [60, t("unitMin")],
    [24, t("unitHour")],
    [365, t("unitDay")],
    [1000, t("unitYear")],
  ];
  let value = seconds;
  let unit = "seg";
  for (const [step, nextUnit] of units) {
    if (value < step) break;
    value /= step;
    unit = nextUnit;
  }
  return `${value.toFixed(1)} ${unit}`;
};

const getAdvice = (len, lower, upper, digit, symbol) => {
  if (len < 12) return t("adviceLength");
  if (!(lower && upper)) return t("adviceCase");
  if (!digit) return t("adviceDigit");
  if (!symbol) return t("adviceSymbol");
  return t("adviceGood");
};

const applyRegex = () => {
  regexError.textContent = "";
  const pattern = regexInput.value.trim();
  const input = logInput.value;
  if (!pattern) {
    regexError.textContent = t("regexEmpty");
    return;
  }

  const flags = `${regexGlobal.checked ? "g" : ""}${regexIgnore.checked ? "i" : ""}`;
  try {
    const regex = new RegExp(pattern, flags);
    const replacement = replaceInput.value;
    const output = replacement
      ? input.replace(regex, replacement)
      : input.match(regex)?.join("\n") || "";

    logPreview.textContent = output || t("regexNoMatch");
    snippetOutput.textContent = buildSnippet(pattern, flags, replacement, langSelect.value);
  } catch (error) {
    regexError.textContent = t("regexInvalid");
  }
};

const buildSnippet = (pattern, flags, replacement, lang) => {
  const escapedPattern = pattern.replace(/\\/g, "\\\\");
  if (lang === "py") {
    const pyFlags = flags.includes("i") ? "re.IGNORECASE" : "0";
    return `import re\n\nregex = re.compile(r"${escapedPattern}", ${pyFlags})\noutput = regex.sub("${replacement}", logs)\nprint(output)`;
  }
  return `const regex = /${escapedPattern}/${flags};\nconst output = logs.replace(regex, "${replacement}");\nconsole.log(output);`;
};

subnetButton.addEventListener("click", calculateSubnet);
[ipInput, maskInput].forEach((el) => el.addEventListener("input", calculateSubnet));

pwdVisibility.addEventListener("change", () => {
  pwdInput.type = pwdVisibility.checked ? "text" : "password";
});

[pwdInput, pwdOffline].forEach((el) => el.addEventListener("input", analyzePassword));

regexButton.addEventListener("click", applyRegex);
[logInput, regexInput, replaceInput, langSelect, regexGlobal, regexIgnore].forEach((el) =>
  el.addEventListener("input", applyRegex)
);

const setTheme = (theme) => {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.textContent =
    state.theme === "dark" ? t("themeLight") : t("themeDark");
  localStorage.setItem("toolkit-theme", theme);
};

const setLanguage = (lang) => {
  state.lang = lang;
  langSwitch.value = lang;
  applyTranslations();
  calculateSubnet();
  analyzePassword();
  applyRegex();
  localStorage.setItem("toolkit-lang", lang);
};

themeToggle.addEventListener("click", () => {
  setTheme(state.theme === "dark" ? "light" : "dark");
});

langSwitch.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

exportPdfButton.addEventListener("click", () => {
  window.print();
});

exportPngButton.addEventListener("click", async () => {
  if (!window.html2canvas) {
    alert(t("exportPngError"));
    return;
  }
  const target = document.querySelector("main");
  const canvas = await window.html2canvas(target, {
    backgroundColor: null,
    scale: 2,
  });
  const link = document.createElement("a");
  link.download = `toolkit-${Date.now()}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
});

const savedTheme = localStorage.getItem("toolkit-theme");
const savedLang = localStorage.getItem("toolkit-lang");
setTheme(savedTheme === "dark" ? "dark" : "light");
setLanguage(savedLang === "en" ? "en" : "es");

calculateSubnet();
analyzePassword();
applyRegex();
