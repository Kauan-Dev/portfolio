document.addEventListener('DOMContentLoaded', () => {
  const darkModeIcon = document.getElementById('dark-mode-icon');
  const lightModeIcon = document.getElementById('light-mode-icon');
  const body = document.body;

  // Função para aplicar o modo escuro
  function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  }

  // Função para aplicar o modo claro
  function enableLightMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }

  // Alterna entre os modos
  function toggleTheme() {
    if (body.classList.contains('dark-mode')) {
      enableLightMode();
    } else {
      enableDarkMode();
    }
  }

  // Verifica o tema salvo no localStorage
  function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      enableDarkMode();
    } else {
      enableLightMode();
    }
  }

  // Inicializa o tema ao carregar a página
  loadTheme();

  // Adiciona eventos de clique e Enter aos ícones
  function addEventListeners(icon) {
    icon.addEventListener('click', toggleTheme);
    icon.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.keyCode === 13) {
        toggleTheme();
      }
    });
    icon.setAttribute('tabindex', '0'); // Garante que o ícone seja focável
  }

  addEventListeners(darkModeIcon);
  addEventListeners(lightModeIcon);

  // Verifica se o usuário está usando o tema escuro
  const preferDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  // Aplica a classe "dark-mode" se o usuário estiver no modo escuro
  if (preferDarkScheme.matches) {
    document.body.classList.add("dark-mode");
  }

  // Detecta mudanças no tema do sistema
  preferDarkScheme.addEventListener("change", (e) => {
    if (e.matches) {
      document.body.classList.add("dark-mode"); // Ativa o modo escuro
    } else {
      document.body.classList.remove("dark-mode"); // Remove o modo escuro
    }
  });
});
