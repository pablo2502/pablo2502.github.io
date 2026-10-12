// Traducciones al inglés. El español está escrito directamente en index.html.
const EN = {
  'nav.about': 'About', 'nav.exp': 'Experience', 'nav.projects': 'Projects', 'nav.skills': 'Skills', 'nav.contact': 'Contact',
  'hero.eyebrow': "Hi, I'm",
  'hero.role': 'Software Engineering Student',
  'hero.lead': 'I lead development teams at FUSOFT and build web applications focused on the people who use them. I am interested in backend, databases and technology project management.',
  'hero.btnProjects': 'View projects', 'hero.btnCv': 'Download CV',
  'hero.semester': '5th semester · Uniempresarial',
  'about.title': 'About me',
  'about.p1': 'I am a fifth-semester Software Engineering student at Universidad de la Cámara de Comercio de Bogotá (Uniempresarial). I am proactive, sociable and service-oriented.',
  'about.p2': "At FUSOFT, the university's technology solutions lab, I went from web development intern to leading student teams: I coordinate tasks, track objectives and work directly with clients to understand what they need.",
  'about.p3': 'I learn quickly, adapt well to dynamic environments and enjoy representing our projects to clients and at events such as GoFest.',
  'about.s1': 'roles at FUSOFT', 'about.s2': 'English level', 'about.s3': 'started my degree',
  'exp.title': 'Experience',
  'exp.j1.when': '2026 – Present',
  'exp.j1.title': 'Project Leader and Manager',
  'exp.j1.b1': 'Lead student teams in the development of web applications and technology projects.',
  'exp.j1.b2': 'Coordinate activities, assign tasks and track progress toward objectives.',
  'exp.j1.b3': 'Maintain ongoing communication with clients to identify needs and requirements.',
  'exp.j2.title': 'Web Development Intern',
  'exp.j2.b1': 'Developed web pages using HTML and CSS.',
  'exp.j2.b2': 'Contributed to building the Evaluación 365 platform.',
  'exp.j2.b3': 'Supported user experience and visual presentation improvements.',
  'exp.j3.title': 'Promoter and Customer Service at Business Events',
  'exp.j3.b1': 'Represented technology projects to visitors and potential clients.',
  'exp.j3.b2': 'Presented products and services and provided guidance on technology solutions.',
  'proj.title': 'Projects', 'proj.sub': 'Some of the projects I have worked on.',
  'proj.p1.desc': 'Web platform for tracking results and reviewing evaluation history. I worked on building the pages and improving the user experience.',
  'proj.p2.title': 'Comprehensive Competency and Performance Evaluation System',
  'proj.p2.desc': "A system for Uniempresarial's Human Talent department to evaluate staff based on competencies and performance.",
  'proj.p3.title': 'Web projects for clients',
  'proj.p3.desc': 'Coordinating student teams that build web applications for real clients: gathering requirements, assigning tasks and following up through delivery.',
  'proj.db': 'Databases', 'proj.lead': 'Leadership', 'proj.mgmt': 'Project management',
  'proj.soon': 'Demo coming soon',
  'skills.title': 'Skills', 'skills.tech': 'Technical', 'skills.soft': 'Soft skills', 'skills.lang': 'Languages',
  'skills.s1': 'Team leadership', 'skills.s2': 'Verbal communication', 'skills.s3': 'Customer service',
  'skills.s4': 'Teamwork', 'skills.s5': 'Problem solving', 'skills.s6': 'Fast learning',
  'skills.es': 'Spanish', 'skills.native': 'Native', 'skills.en': 'English',
  'edu.title': 'Education',
  'edu.e1.when': '2024 – Present', 'edu.e1.title': 'Software Engineering',
  'edu.e1.desc': 'Fifth semester. Outstanding performance in Backend and Databases.',
  'edu.e2.title': 'English as a Second Language', 'edu.e2.desc': 'B2-C1 level. Communication in professional settings.',
  'edu.e3.title': 'Academic High School Diploma',
  'contact.title': "Let's talk",
  'contact.sub': 'I am open to internships, projects and new opportunities in software development.'
};

const CV = { es: 'assets/CV_Pablo_Montealegre_ES.pdf', en: 'assets/CV_Pablo_Montealegre_EN.pdf' };
const nodes = [...document.querySelectorAll('[data-i18n]')];
nodes.forEach(n => n.dataset.es = n.textContent);

const store = {
  get: k => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
};

function setLang(lang) {
  nodes.forEach(n => n.textContent = lang === 'en' ? (EN[n.dataset.i18n] ?? n.dataset.es) : n.dataset.es);
  document.documentElement.lang = lang;
  document.getElementById('lang').textContent = lang === 'en' ? 'ES' : 'EN';
  document.getElementById('cvBtn').href = CV[lang];
  store.set('lang', lang);
}

setLang(store.get('lang') || ((navigator.language || '').startsWith('en') ? 'en' : 'es'));

document.getElementById('lang').addEventListener('click', () =>
  setLang(document.documentElement.lang === 'en' ? 'es' : 'en'));

// Menú móvil
const links = document.getElementById('links');
document.getElementById('burger').addEventListener('click', () => links.classList.toggle('open'));
links.addEventListener('click', e => e.target.tagName === 'A' && links.classList.remove('open'));

// Año actual
document.getElementById('year').textContent = new Date().getFullYear();

// Animación al hacer scroll
const els = document.querySelectorAll('.sec .title, .about-body, .timeline > li, .card, .skill-box, .edu-item');
els.forEach(el => el.classList.add('reveal'));
const io = 'IntersectionObserver' in window
  ? new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: .12 })
  : null;
els.forEach(el => io ? io.observe(el) : el.classList.add('in'));
