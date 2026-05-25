/* ============================
   PORTFOLIO 2026 — MAIN SCRIPT
   ============================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ===== DATA ===== */
  const projects = [
    {
      id: 'kisan-bandhu', title: 'Kisan Bandhu',
      tag: 'SIH 2025 Winner',
      desc: 'Multi-language farmer assistance platform with AI chatbot, crop disease detection & community support.',
      tech: ['ML', 'React', 'Flask'],
      gradient: 'linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)',
      live: '#', github: '#',
      details: 'Kisan Bandhu is a multi-language farmer assistance platform designed to bridge the gap between farmers and modern agricultural technology. It integrates an AI-powered chatbot for real-time query resolution, crop disease detection using machine learning models, and a community support forum for knowledge sharing among farmers.',
    },
    {
      id: 'clicknbuy', title: 'ClickNBuy', tag: 'Full Stack',
      desc: 'Full-stack e-commerce app with secure auth, shopping cart, product catalog & order tracking.',
      tech: ['Spring Boot', 'React', 'MySQL'],
      gradient: 'linear-gradient(135deg,#1a1a2e,#2d1b69,#6930c3)',
      live: '#', github: '#',
      details: 'A full-stack e-commerce web application built with Spring Boot and React JS. Features include secure user authentication, product catalog with search and filtering, shopping cart management, and order tracking system.',
    },
    {
      id: 'ai-cattle-health', title: 'AI Cattle Health', tag: 'AI / ML',
      desc: 'AI-powered system for early detection of cattle health issues using ML & Flask-based interface.',
      tech: ['Python', 'Flask', 'ML'],
      gradient: 'linear-gradient(135deg,#1a1a2e,#3d0c11,#7b2d26)',
      live: '#', github: '#',
      details: 'An AI-powered system for early detection and monitoring of cattle health issues. Uses sensor data and machine learning models to predict potential health risks and provide timely alerts to farmers.',
    },
  ]

  /* ===== REDUCED MOTION CHECK ===== */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  /* ===== NAVBAR ===== */
  const navbar = document.querySelector('nav')
  const navToggle = document.getElementById('navToggle')
  const navMenu = document.getElementById('navMenu')
  const navLinks = document.querySelectorAll('.nav-link')

  function onNavScroll() {
    const y = window.scrollY
    if (y > 300) {
      navbar.classList.add('nav-hidden')
    } else {
      navbar.classList.remove('nav-hidden')
    }
    if (y > 80) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }

    // active section
    const sections = ['hero', 'about', 'education', 'skills', 'projects', 'experience', 'achievements', 'contact']
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i])
      if (el && el.getBoundingClientRect().top < 300) {
        navLinks.forEach(l => {
          l.style.color = ''
          l.style.background = ''
          l.classList.remove('active')
        })
        const active = document.querySelector(`.nav-link[href="#${sections[i]}"]`)
        if (active) {
          active.style.color = 'var(--gold)'
          active.style.background = 'rgba(212,167,74,0.1)'
          active.classList.add('active')
        }
        break
      }
    }
  }

  window.addEventListener('scroll', onNavScroll, { passive: true })

  if (navToggle) {
    navToggle.addEventListener('click', () => navMenu.classList.toggle('active'))
  }

  navLinks.forEach(l => {
    l.addEventListener('click', (e) => {
      e.preventDefault()
      navMenu.classList.remove('active')
      const id = l.getAttribute('href').slice(1)
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
  })

  /* ===== REVEAL OBSERVER ===== */
  function observeReveal(selector, cls = 'visible') {
    const els = document.querySelectorAll(selector)
    if (!els.length || prefersReduced) {
      els.forEach(el => el.classList.add(cls))
      return
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(cls)
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '-40px' })
    els.forEach(el => obs.observe(el))
  }

  observeReveal('.reveal')
  observeReveal('.reveal-left')
  observeReveal('.reveal-scale')
  observeReveal('.reveal-3d')
  observeReveal('.reveal-blur')
  observeReveal('.stagger')
  observeReveal('.stagger-3d')

  /* ===== EDUCATION BARS ===== */
  function observeBars() {
    const bars = document.querySelectorAll('.edu-bar-fill')
    if (!bars.length || prefersReduced) {
      bars.forEach(b => { b.style.width = b.dataset.progress + '%' })
      return
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.progress + '%'
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })
    bars.forEach(b => obs.observe(b))
  }
  observeBars()

  /* ===== SKILLS STAGGER ===== */
  function staggerSkills() {
    const groups = document.querySelectorAll('.skill-group')
    if (!groups.length) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })
    groups.forEach((g, i) => {
      g.style.opacity = '0'
      g.style.transform = 'translateY(40px)'
      g.style.transition = `opacity 0.6s var(--smooth) ${i * 0.06}s, transform 0.6s var(--smooth) ${i * 0.06}s`
      obs.observe(g)
    })
  }
  staggerSkills()

  /* ===== EXPERIENCE STAGGER ===== */
  function staggerExp() {
    const cards = document.querySelectorAll('.exp-card')
    if (!cards.length) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '-50px' })
    cards.forEach((c, i) => {
      c.style.opacity = '0'
      c.style.transform = 'translateY(40px)'
      c.style.transition = `opacity 0.6s var(--smooth) ${i * 0.15}s, transform 0.6s var(--smooth) ${i * 0.15}s`
      obs.observe(c)
    })
  }
  staggerExp()

  /* ===== PROJECTS STAGGER ===== */
  function staggerProjects() {
    const cards = document.querySelectorAll('.project-card')
    if (!cards.length) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '-60px' })
    cards.forEach((c, i) => {
      c.style.opacity = '0'
      c.style.transform = 'translateY(50px)'
      c.style.transition = `opacity 0.7s var(--smooth) ${i * 0.15}s, transform 0.7s var(--smooth) ${i * 0.15}s`
      obs.observe(c)
    })
  }
  staggerProjects()

  /* ===== ACHIEVEMENTS STAGGER ===== */
  function staggerAchieve() {
    const cards = document.querySelectorAll('.achieve-card')
    if (!cards.length) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '-40px' })
    cards.forEach((c, i) => {
      c.style.opacity = '0'
      c.style.transform = 'translateY(40px)'
      c.style.transition = `opacity 0.6s var(--smooth) ${i * 0.12}s, transform 0.6s var(--smooth) ${i * 0.12}s`
      obs.observe(c)
    })
  }
  staggerAchieve()

  /* ===== MODAL ===== */
  const modalOverlay = document.getElementById('modalOverlay')
  const modalBody = document.getElementById('modalBody')
  const modalClose = document.getElementById('modalClose')

  function openModal(project) {
    modalBody.innerHTML = `
      <div class="modal-banner" style="background:${project.gradient}">
        <button class="modal-close" id="modalCloseInner"><i class="fas fa-times"></i></button>
      </div>
      <div class="modal-body">
        <span class="modal-tag">${project.tag}</span>
        <h2 class="modal-title">${project.title}</h2>
        <div class="modal-tech">${project.tech.map(t => `<span>${t}</span>`).join('')}</div>
        <p class="modal-desc">${project.details}</p>
      </div>
    `
    modalOverlay.classList.add('active')
    document.body.style.overflow = 'hidden'

    document.getElementById('modalCloseInner')?.addEventListener('click', closeModal)
  }

  function closeModal() {
    modalOverlay.classList.remove('active')
    document.body.style.overflow = ''
  }

  modalClose?.addEventListener('click', closeModal)
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal()
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal()
  })

  // Project click handlers
  document.querySelectorAll('.project-card').forEach((card, i) => {
    card.addEventListener('click', () => openModal(projects[i]))
  })

  /* ===== BACK TO TOP ===== */
  const backToTop = document.getElementById('backToTop')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) backToTop.classList.add('visible')
    else backToTop.classList.remove('visible')
  }, { passive: true })
  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))

  /* ===== CONTACT FORM ===== */
  const contactForm = document.getElementById('contactForm')
  const formStatus = document.getElementById('formStatus')
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.getElementById('formName').value.trim()
    const email = document.getElementById('formEmail').value.trim()
    const message = document.getElementById('formMessage').value.trim()
    if (!name || !email || !message) {
      formStatus.style.display = 'block'
      formStatus.textContent = 'Please fill in all fields.'
      formStatus.style.color = '#ef4444'
      return
    }
    formStatus.style.display = 'block'
    formStatus.textContent = 'Thanks, ' + name + '! Your message has been sent.'
    formStatus.style.color = 'var(--gold)'
    contactForm.reset()
  })

  /* ===== CURSOR ===== */
  if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    const dot = document.querySelector('.cursor-dot')
    const ring = document.querySelector('.cursor-ring')
    let mx = 0, my = 0, rx = 0, ry = 0

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`
    })

    function loop() {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`
      requestAnimationFrame(loop)
    }
    loop()

    document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0' })
    document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1' })

    document.querySelectorAll('a, button, .btn, .chip, .project-card, .skill-group, .achieve-card, .edu-card, .exp-card, .contact-social, .modal-close, .nav-link, .form-input').forEach(el => {
      el.addEventListener('mouseenter', () => { dot.classList.add('hover'); ring.classList.add('hover') })
      el.addEventListener('mouseleave', () => { dot.classList.remove('hover'); ring.classList.remove('hover') })
    })
  }

  /* ===== CANVAS: VANILLA 2D PHYSICS PARTICLES ===== */
  if (!prefersReduced) {
    const canvas3d = document.getElementById('scene3d');
    const canvasP = document.getElementById('particles');
    if (canvasP) canvasP.style.display = 'none'; // hide old 2D canvas

    if (canvas3d) {
      const ctx = canvas3d.getContext('2d');
      let w = window.innerWidth;
      let h = window.innerHeight;

      function resize() {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas3d.width = w;
        canvas3d.height = h;
      }
      resize();
      window.addEventListener('resize', resize);

      const mouse = { x: null, y: null };
      window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });
      window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
      });

      window.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
          mouse.x = e.touches[0].clientX;
          mouse.y = e.touches[0].clientY;
        }
      }, { passive: true });

      window.addEventListener('touchend', () => {
        mouse.x = null;
        mouse.y = null;
      });

      // Particle class
      class Particle {
        constructor() {
          this.x = Math.random() * w;
          this.y = Math.random() * h;
          // Random drift velocities
          this.vx = (Math.random() - 0.5) * 0.7;
          this.vy = (Math.random() - 0.5) * 0.7;
          this.r = Math.random() * 2.2 + 0.8;
          // Gold and Cyan random mix (cyberpunk dashboard theme)
          const goldColor = `rgba(212, 167, 74, ${Math.random() * 0.4 + 0.15})`;
          const cyanColor = `rgba(0, 240, 255, ${Math.random() * 0.4 + 0.15})`;
          this.color = Math.random() > 0.45 ? goldColor : cyanColor;
        }
        update() {
          // Ambient movement
          this.x += this.vx;
          this.y += this.vy;

          // Wrap boundaries
          if (this.x < 0) this.x = w;
          if (this.x > w) this.x = 0;
          if (this.y < 0) this.y = h;
          if (this.y > h) this.y = 0;

          // Mouse physics repulsion
          if (mouse.x !== null) {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 160;
            if (dist < maxDistance) {
              const force = (maxDistance - dist) / maxDistance;
              const angle = Math.atan2(dy, dx);
              // Accelerate/push particles away from cursor
              this.x += Math.cos(angle) * force * 5.0;
              this.y += Math.sin(angle) * force * 5.0;
            }
          }
        }
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }
      }

      const particleCount = Math.min(100, Math.floor((w * h) / 15000));
      const particles = Array.from({ length: particleCount }, () => new Particle());

      function animateConstellation() {
        ctx.clearRect(0, 0, w, h);

        // Draw and update particles
        particles.forEach(p => {
          p.update();
          p.draw();
        });

        // Draw connecting constellation lines
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 140) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              const opacity = (1 - dist / 140) * 0.08;
              ctx.strokeStyle = `rgba(212, 167, 74, ${opacity})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }

        requestAnimationFrame(animateConstellation);
      }

      animateConstellation();
    }
  }

  /* ===== AVATAR 3D TILT ===== */
  const avatar3d = document.querySelector('.avatar-3d')
  if (avatar3d) {
    const img = avatar3d.querySelector('.avatar-frame')
    avatar3d.addEventListener('mousemove', e => {
      const r = avatar3d.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      img.style.transform = `rotateY(${x * 20}deg) rotateX(${-y * 20}deg) translateZ(15px)`
      img.style.transition = 'transform 0.1s ease-out'
    })
    avatar3d.addEventListener('mouseleave', () => {
      img.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0px)'
      img.style.transition = 'transform 0.5s ease-out'
    })
    avatar3d.addEventListener('touchmove', e => {
      if (e.touches.length > 0) {
        const r = avatar3d.getBoundingClientRect();
        const x = (e.touches[0].clientX - r.left) / r.width - 0.5;
        const y = (e.touches[0].clientY - r.top) / r.height - 0.5;
        img.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(8px)`;
      }
    }, { passive: true });
    avatar3d.addEventListener('touchend', () => {
      img.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0px)';
    });
  }

  /* ===== INTERACTIVE 3D CARD TILT & GLOW ===== */
  const tiltCards = document.querySelectorAll('.project-card, .edu-card, .exp-card, .achieve-card, .skill-group, .about-card');
  tiltCards.forEach(card => {
    // Add glow overlay inside card
    const glow = document.createElement('div');
    glow.className = 'card-glow-reflection';
    glow.style.position = 'absolute';
    glow.style.inset = '0';
    glow.style.zIndex = '1';
    glow.style.pointerEvents = 'none';
    glow.style.background = 'radial-gradient(circle 120px at var(--glow-x, 0px) var(--glow-y, 0px), rgba(0, 240, 255, 0.12), transparent 70%)';
    glow.style.opacity = '0';
    glow.style.transition = 'opacity 0.4s';
    
    card.style.position = 'relative';
    card.style.overflow = 'hidden';
    card.appendChild(glow);

    // Inject cyber-template corner brackets dynamically
    card.classList.add('cyber-card');
    ['top-left', 'top-right', 'bottom-left', 'bottom-right'].forEach(pos => {
      const bracket = document.createElement('span');
      bracket.className = `corner-bracket ${pos}`;
      card.appendChild(bracket);
    });

    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--glow-x', `${x}px`);
      card.style.setProperty('--glow-y', `${y}px`);
      glow.style.opacity = '1';

      const rotX = -((y / rect.height) - 0.5) * 8;
      const rotY = ((x / rect.width) - 0.5) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
      card.style.boxShadow = '0 12px 30px rgba(0, 240, 255, 0.08)';
    });

    card.addEventListener('mouseleave', () => {
      glow.style.opacity = '0';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      card.style.boxShadow = '';
    });

    card.addEventListener('touchmove', e => {
      if (e.touches.length > 0) {
        const rect = card.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;

        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          card.style.setProperty('--glow-x', `${x}px`);
          card.style.setProperty('--glow-y', `${y}px`);
          glow.style.opacity = '1';

          const rotX = -((y / rect.height) - 0.5) * 6;
          const rotY = ((x / rect.width) - 0.5) * 6;

          card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-2px)`;
        }
      }
    }, { passive: true });

    card.addEventListener('touchend', () => {
      glow.style.opacity = '0';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
})
