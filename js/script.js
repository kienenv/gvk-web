/* ==========================================
   GVK WEB — script.js
   ========================================== */

// ====== CURSOR ======
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

let mouseX = -100, mouseY = -100;
let curX = -100, curY = -100;

// Esconde até o mouse entrar na página
cursor.style.opacity = '0';
cursorDot.style.opacity = '0';

document.addEventListener('mouseenter', () => {
  cursor.style.opacity = '1';
  cursorDot.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
  cursor.style.opacity = '0';
  cursorDot.style.opacity = '0';
});

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top = mouseY + 'px';
  cursor.style.opacity = '1';
  cursorDot.style.opacity = '1';
});

function animateCursor() {
  curX += (mouseX - curX) * 0.12;
  curY += (mouseY - curY) * 0.12;
  cursor.style.left = curX + 'px';
  cursor.style.top = curY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover effects
document.querySelectorAll('a, button, .servico-card, .port-card, .depo-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1.6)';
    cursor.style.borderColor = 'rgba(232,255,71,0.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursor.style.borderColor = 'var(--accent)';
  });
});

// ====== NAV SCROLL ======
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ====== SMOOTH ACTIVE NAV LINKS ======
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--text)';
        }
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => navObserver.observe(s));

// ====== REVEAL ON SCROLL ======
const revealItems = document.querySelectorAll(
  '.servico-card, .port-card, .step, .depo-card, .sobre-left, .sobre-right, .portfolio-header, .servicos-header, .depos-header, .processo-header, .contato-left, .form-wrap'
);

revealItems.forEach((item, i) => {
  item.classList.add('reveal');
  if (i % 3 === 1) item.classList.add('reveal-delay-1');
  if (i % 3 === 2) item.classList.add('reveal-delay-2');
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ====== COUNTER ANIMATION ======
const counters = document.querySelectorAll('.stat-num');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.target);
      animateCounter(entry.target, 0, target, 1800);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));

function animateCounter(el, start, end, duration) {
  const range = end - start;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    el.textContent = Math.floor(start + range * eased);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ====== FORM SUBMIT ======
const submitBtn = document.getElementById('submitBtn');
const toast = createToast();

submitBtn.addEventListener('click', () => {
  const inputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
  let valid = true;

  inputs.forEach(input => {
    input.style.borderColor = '';
    if (!input.value.trim()) {
      input.style.borderColor = '#ff4747';
      valid = false;
    }
  });

  if (valid) {
    submitBtn.innerHTML = '<span>Enviado! ✓</span><span class="btn-arrow">→</span>';
    submitBtn.style.background = '#87e897';
    showToast('Mensagem enviada! Entraremos em contato em breve.');
    inputs.forEach(input => input.value = '');
    setTimeout(() => {
      submitBtn.innerHTML = '<span>Enviar mensagem</span><span class="btn-arrow">→</span>';
      submitBtn.style.background = '';
    }, 3000);
  } else {
    submitBtn.style.animation = 'shake 0.4s ease';
    setTimeout(() => submitBtn.style.animation = '', 400);
  }
});

function createToast() {
  const t = document.createElement('div');
  t.className = 'toast';
  document.body.appendChild(t);
  return t;
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// ====== PARALLAX HERO BG TEXT ======
const heroBgText = document.querySelector('.hero-bg-text');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (heroBgText) {
    heroBgText.style.transform = `translateY(calc(-50% + ${scrollY * 0.3}px)) rotate(90deg)`;
  }
});

// ====== CARD TILT EFFECT ======
document.querySelectorAll('.servico-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -5;
    const rotateY = (x - centerX) / centerX * 5;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ====== SHAKE KEYFRAME INJECT ======
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-5px); }
    80% { transform: translateX(5px); }
  }
`;
document.head.appendChild(shakeStyle);

// ====== SMOOTH ANCHOR SCROLL ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ====== MARQUEE PAUSE ON HOVER ======
const marqueeEl = document.querySelector('.marquee');
if (marqueeEl) {
  marqueeEl.parentElement.addEventListener('mouseenter', () => {
    marqueeEl.style.animationPlayState = 'paused';
  });
  marqueeEl.parentElement.addEventListener('mouseleave', () => {
    marqueeEl.style.animationPlayState = 'running';
  });
}

// ====== INIT LOG ======
console.log(
  '%cGVK WEB\n%cDesenvolvimento Web Profissional\n%ccontato@gvkweb.com.br',
  'font-size:28px;font-weight:bold;color:#e8ff47;',
  'font-size:14px;color:#888;',
  'font-size:12px;color:#555;'
);