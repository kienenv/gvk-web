<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=1280" />
  <title>GVK Web — Desenvolvimento Web</title>
  <link rel="stylesheet" href="css/style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
</head>
<body>

  <!-- CURSOR -->
  <div class="cursor" id="cursor"></div>
  <div class="cursor-dot" id="cursorDot"></div>

  <!-- NOISE OVERLAY -->
  <div class="noise"></div>

  <!-- NAV -->
  <nav class="nav">
    <div class="nav-logo">GVK<span>WEB</span></div>
    <ul class="nav-links">
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#servicos">Serviços</a></li>
      <li><a href="#portfolio">Portfólio</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
    <a href="#contato" class="nav-cta">Solicitar Orçamento →</a>
  </nav>

  <!-- HERO -->
  <section class="hero" id="hero">
    <div class="hero-bg-text">DESIGN</div>
    <div class="hero-content">
      <div class="hero-badge">
        <span class="dot"></span> Disponível para projetos
      </div>
      <h1 class="hero-title">
        <span class="line" data-text="Criamos">Criamos</span>
        <span class="line accent" data-text="experiências">experiências</span>
        <span class="line" data-text="digitais.">digitais.</span>
      </h1>
      <p class="hero-sub">Sites que vendem. Páginas que convertem. <br/>Lojas que crescem. Isso é GVK Web.</p>
      <div class="hero-btns">
        <a href="#portfolio" class="btn-primary">Ver trabalhos</a>
        <a href="#servicos" class="btn-ghost">O que fazemos</a>
      </div>
    </div>
    <div class="hero-scroll">
      <div class="scroll-line"></div>
      <span>scroll</span>
    </div>
    <div class="hero-stats">
      <div class="stat">
        <span class="stat-num" data-target="80">0</span>+
        <span class="stat-label">Projetos entregues</span>
      </div>
      <div class="stat">
        <span class="stat-num" data-target="100">0</span>%
        <span class="stat-label">Clientes satisfeitos</span>
      </div>
      <div class="stat">
        <span class="stat-num" data-target="5">0</span>+
        <span class="stat-label">Anos de experiência</span>
      </div>
    </div>
  </section>

  <!-- MARQUEE -->
  <div class="marquee-wrap">
    <div class="marquee">
      <span>Landing Pages</span>
      <span class="sep">✦</span>
      <span>Lojas Virtuais</span>
      <span class="sep">✦</span>
      <span>Sites Institucionais</span>
      <span class="sep">✦</span>
      <span>E-commerce</span>
      <span class="sep">✦</span>
      <span>Sites para Comércios</span>
      <span class="sep">✦</span>
      <span>Portfólios</span>
      <span class="sep">✦</span>
      <span>Landing Pages</span>
      <span class="sep">✦</span>
      <span>Lojas Virtuais</span>
      <span class="sep">✦</span>
      <span>Sites Institucionais</span>
      <span class="sep">✦</span>
      <span>E-commerce</span>
      <span class="sep">✦</span>
      <span>Sites para Comércios</span>
      <span class="sep">✦</span>
      <span>Portfólios</span>
      <span class="sep">✦</span>
    </div>
  </div>

  <!-- SOBRE -->
  <section class="sobre" id="sobre">
    <div class="sobre-left">
      <div class="sobre-img-wrap">
        <div class="sobre-img-inner">
          <div class="code-block">
            <div class="code-line"><span class="c-pink">const</span> <span class="c-blue">gvk</span> = {</div>
            <div class="code-line pad">foco: <span class="c-green">"resultados"</span>,</div>
            <div class="code-line pad">design: <span class="c-green">"impactante"</span>,</div>
            <div class="code-line pad">entrega: <span class="c-green">"rápida"</span>,</div>
            <div class="code-line pad">suporte: <span class="c-green">"dedicado"</span></div>
            <div class="code-line">};</div>
            <div class="code-line">&nbsp;</div>
            <div class="code-line"><span class="c-pink">return</span> <span class="c-blue">gvk</span>.<span class="c-yellow">sucesso</span>();</div>
            <div class="cursor-blink">▋</div>
          </div>
        </div>
        <div class="float-badge badge-1">HTML5</div>
        <div class="float-badge badge-2">CSS3</div>
        <div class="float-badge badge-3">JS</div>
      </div>
    </div>
    <div class="sobre-right">
      <span class="section-tag">// sobre nós</span>
      <h2>Transformamos ideias em <em>sites de impacto</em></h2>
      <p>A GVK Web é especialista em desenvolvimento web para negócios reais. Criamos desde landing pages de alta conversão até lojas virtuais completas — sempre com foco em resultado e estética apurada.</p>
      <p>Cada projeto é único. Cada linha de código é pensada para o seu negócio crescer online.</p>
      <div class="sobre-pills">
        <span>React</span>
        <span>Next.js</span>
        <span>WordPress</span>
        <span>WooCommerce</span>
        <span>Figma</span>
        <span>Shopify</span>
      </div>
    </div>
  </section>

  <!-- SERVIÇOS -->
  <section class="servicos" id="servicos">
    <div class="servicos-header">
      <span class="section-tag">// serviços</span>
      <h2>O que a GVK Web entrega</h2>
    </div>
    <div class="servicos-grid">

      <div class="servico-card" data-num="01">
        <div class="card-icon">⚡</div>
        <h3>Landing Pages</h3>
        <p>Páginas criadas para converter visitantes em clientes. Copy persuasivo, design irresistível e carregamento ultra-rápido.</p>
        <div class="card-tags"><span>Alta conversão</span><span>Rápido</span></div>
      </div>

      <div class="servico-card" data-num="02">
        <div class="card-icon">🛍️</div>
        <h3>Lojas Virtuais</h3>
        <p>E-commerce completo com gestão de produtos, pagamento integrado e experiência de compra impecável.</p>
        <div class="card-tags"><span>WooCommerce</span><span>Shopify</span></div>
      </div>

      <div class="servico-card" data-num="03">
        <div class="card-icon">🏪</div>
        <h3>Sites para Comércios</h3>
        <p>Presença digital profissional para seu negócio físico. Cardápio, catálogo, localização e muito mais.</p>
        <div class="card-tags"><span>Restaurantes</span><span>Clínicas</span></div>
      </div>

      <div class="servico-card" data-num="04">
        <div class="card-icon">🏢</div>
        <h3>Sites Institucionais</h3>
        <p>A cara da sua empresa na internet. Profissional, moderno e otimizado para o Google (SEO).</p>
        <div class="card-tags"><span>SEO</span><span>Corporativo</span></div>
      </div>

      <div class="servico-card" data-num="05">
        <div class="card-icon">🎨</div>
        <h3>Portfólios</h3>
        <p>Mostre seu trabalho com elegância. Portfólios criativos para fotógrafos, designers, artistas e profissionais.</p>
        <div class="card-tags"><span>Criativo</span><span>Visual</span></div>
      </div>

      <div class="servico-card" data-num="06">
        <div class="card-icon">🔧</div>
        <h3>Manutenção & Suporte</h3>
        <p>Seu site sempre no ar, atualizado e seguro. Planos de manutenção mensal com suporte dedicado.</p>
        <div class="card-tags"><span>Suporte</span><span>Segurança</span></div>
      </div>

    </div>
  </section>

  <!-- PORTFOLIO -->
  <section class="portfolio" id="portfolio">
    <div class="portfolio-header">
      <span class="section-tag">// portfólio</span>
      <h2>Projetos em destaque</h2>
      <p>Uma amostra do que criamos para nossos clientes</p>
    </div>
    <div class="portfolio-grid">

      <div class="port-card port-large">
        <div class="port-mock">
          <div class="mock-bar"><span></span><span></span><span></span></div>
          <div class="mock-content restaurant">
            <div class="mock-hero-text">Sabor & Arte</div>
            <div class="mock-subtitle">Restaurante Italiano</div>
            <div class="mock-btn-fake">Ver Cardápio</div>
          </div>
        </div>
        <div class="port-info">
          <span class="port-tag">Site para Comércio</span>
          <h4>Restaurante Sabor & Arte</h4>
          <p>Site completo com cardápio digital e reservas online</p>
        </div>
      </div>

      <div class="port-card">
        <div class="port-mock">
          <div class="mock-bar"><span></span><span></span><span></span></div>
          <div class="mock-content loja">
            <div class="mock-products">
              <div class="mock-product">👟</div>
              <div class="mock-product">👗</div>
              <div class="mock-product">👜</div>
            </div>
            <div class="mock-btn-fake green">Comprar agora</div>
          </div>
        </div>
        <div class="port-info">
          <span class="port-tag">Loja Virtual</span>
          <h4>ModaBrasil Store</h4>
          <p>E-commerce de moda com +500 produtos</p>
        </div>
      </div>

      <div class="port-card">
        <div class="port-mock">
          <div class="mock-bar"><span></span><span></span><span></span></div>
          <div class="mock-content landing">
            <div class="mock-headline">Transforme seu corpo</div>
            <div class="mock-form">
              <div class="mock-input"></div>
              <div class="mock-btn-fake orange">Quero começar!</div>
            </div>
          </div>
        </div>
        <div class="port-info">
          <span class="port-tag">Landing Page</span>
          <h4>Academia FitLife</h4>
          <p>LP de captação com 38% de conversão</p>
        </div>
      </div>

      <div class="port-card">
        <div class="port-mock">
          <div class="mock-bar"><span></span><span></span><span></span></div>
          <div class="mock-content clinica">
            <div class="mock-logo-fake">🏥 ClínicaVida</div>
            <div class="mock-services">
              <div class="mock-svc">Consultas</div>
              <div class="mock-svc">Exames</div>
            </div>
            <div class="mock-btn-fake blue">Agendar</div>
          </div>
        </div>
        <div class="port-info">
          <span class="port-tag">Site Institucional</span>
          <h4>ClínicaVida</h4>
          <p>Site com agendamento online integrado</p>
        </div>
      </div>

    </div>
  </section>

  <!-- PROCESSO -->
  <section class="processo">
    <div class="processo-header">
      <span class="section-tag">// como funciona</span>
      <h2>Do briefing ao lançamento</h2>
    </div>
    <div class="processo-steps">
      <div class="step">
        <div class="step-num">01</div>
        <div class="step-line"></div>
        <h4>Briefing</h4>
        <p>Entendemos seu negócio, objetivos e público-alvo</p>
      </div>
      <div class="step">
        <div class="step-num">02</div>
        <div class="step-line"></div>
        <h4>Design</h4>
        <p>Criamos o visual único e aprovamos com você</p>
      </div>
      <div class="step">
        <div class="step-num">03</div>
        <div class="step-line"></div>
        <h4>Desenvolvimento</h4>
        <p>Codamos com as melhores tecnologias do mercado</p>
      </div>
      <div class="step">
        <div class="step-num">04</div>
        <div class="step-line"></div>
        <h4>Lançamento</h4>
        <p>Publicamos, testamos e entregamos 🚀</p>
      </div>
    </div>
  </section>

  <!-- DEPOIMENTOS -->
  <section class="depos">
    <div class="depos-header">
      <span class="section-tag">// depoimentos</span>
      <h2>O que nossos clientes dizem</h2>
    </div>
    <div class="depos-grid">
      <div class="depo-card">
        <div class="depo-stars">★★★★★</div>
        <p>"A GVK Web transformou meu restaurante. As reservas online aumentaram 60% no primeiro mês!"</p>
        <div class="depo-author">
          <div class="depo-avatar">MR</div>
          <div>
            <strong>Marcos Ribeiro</strong>
            <span>Dono do Sabor & Arte</span>
          </div>
        </div>
      </div>
      <div class="depo-card featured">
        <div class="depo-stars">★★★★★</div>
        <p>"Profissionalismo do início ao fim. Minha loja virtual ficou linda e as vendas dispararam. Super recomendo!"</p>
        <div class="depo-author">
          <div class="depo-avatar">AC</div>
          <div>
            <strong>Ana Carolina</strong>
            <span>ModaBrasil Store</span>
          </div>
        </div>
      </div>
      <div class="depo-card">
        <div class="depo-stars">★★★★★</div>
        <p>"Landing page com resultado real. Em 2 semanas já tinha recuperado o investimento. Valeu demais!"</p>
        <div class="depo-author">
          <div class="depo-avatar">PT</div>
          <div>
            <strong>Pedro Torres</strong>
            <span>Academia FitLife</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTATO -->
  <section class="contato" id="contato">
    <div class="contato-left">
      <span class="section-tag">// contato</span>
      <h2>Vamos criar algo <em>incrível</em> juntos?</h2>
      <p>Entre em contato agora e receba um orçamento personalizado sem compromisso.</p>
      <div class="contato-info">
        <div class="info-item">
          <span class="info-icon">📧</span>
          <span>contato@gvkweb.com.br</span>
        </div>
        <div class="info-item">
          <span class="info-icon">📱</span>
          <span>(11) 9 9999-9999</span>
        </div>
        <div class="info-item">
          <span class="info-icon">🌐</span>
          <span>www.gvkweb.com.br</span>
        </div>
      </div>
      <div class="social-links">
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">WhatsApp</a>
      </div>
    </div>
    <div class="contato-right">
      <div class="form-wrap">
        <div class="form-group">
          <label>Seu nome</label>
          <input type="text" placeholder="João Silva" />
        </div>
        <div class="form-group">
          <label>E-mail</label>
          <input type="email" placeholder="joao@email.com" />
        </div>
        <div class="form-group">
          <label>Tipo de projeto</label>
          <select>
            <option>Landing Page</option>
            <option>Loja Virtual</option>
            <option>Site para Comércio</option>
            <option>Site Institucional</option>
            <option>Portfólio</option>
            <option>Outro</option>
          </select>
        </div>
        <div class="form-group">
          <label>Mensagem</label>
          <textarea placeholder="Me conta sobre seu projeto..."></textarea>
        </div>
        <button class="btn-submit" id="submitBtn">
          <span>Enviar mensagem</span>
          <span class="btn-arrow">→</span>
        </button>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-logo">GVK<span>WEB</span></div>
      <p>Desenvolvendo o futuro digital do seu negócio.</p>
    </div>
    <div class="footer-bottom">
      <span>© 2025 GVK Web — Todos os direitos reservados</span>
      <span>Feito com ❤️ e muito código</span>
    </div>
  </footer>

  <script src="js/script.js"></script>
</body>
</html>