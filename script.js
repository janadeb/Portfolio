(function(){
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('portfolio-theme');

  function setTheme(mode){
    body.classList.toggle('dark-mode', mode === 'dark');
    if(toggle) toggle.checked = (mode === 'dark');
    localStorage.setItem('portfolio-theme', mode);
  }

  if(saved){
    setTheme(saved);
  }else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    setTheme('dark');
  }else{
    setTheme('light');
  }

  toggle?.addEventListener('change', () => {
    setTheme(toggle.checked ? 'dark' : 'light');
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();