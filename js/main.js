document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggle = document.querySelector('[data-nav-toggle]');
  const mobileLinks = document.querySelectorAll('[data-mobile-link]');
  const accordions = document.querySelectorAll('[data-accordion-button]');
  const forms = document.querySelectorAll('[data-validate-form]');
  const revealItems = document.querySelectorAll('.reveal');

  if (toggle) {
    toggle.addEventListener('click', () => {
      const isOpen = body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      body.classList.remove('menu-open');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  accordions.forEach((button) => {
    const panelId = button.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;

    const closePanel = () => {
      button.setAttribute('aria-expanded', 'false');
      if (panel) {
        panel.style.maxHeight = '0px';
      }
    };

    const openPanel = () => {
      button.setAttribute('aria-expanded', 'true');
      if (panel) {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    };

    closePanel();

    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      accordions.forEach((otherButton) => {
        if (otherButton !== button) {
          const otherPanelId = otherButton.getAttribute('aria-controls');
          const otherPanel = otherPanelId ? document.getElementById(otherPanelId) : null;
          otherButton.setAttribute('aria-expanded', 'false');
          if (otherPanel) {
            otherPanel.style.maxHeight = '0px';
          }
        }
      });
      if (expanded) {
        closePanel();
      } else {
        openPanel();
      }
    });
  });

  forms.forEach((form) => {
    const status = form.querySelector('[data-form-status]');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      let firstInvalid = null;
      let isValid = true;

      form.querySelectorAll('[required]').forEach((field) => {
        field.setCustomValidity('');
        let message = '';

        if (!field.value.trim()) {
          message = 'This field is required.';
        } else if (field.type === 'email' && !field.checkValidity()) {
          message = 'Enter a valid email address.';
        } else if (field.type === 'tel' && field.value.trim().length < 7) {
          message = 'Enter a valid phone number.';
        }

        if (message) {
          isValid = false;
          field.setCustomValidity(message);
          if (!firstInvalid) {
            firstInvalid = field;
          }
        }
      });

      if (!isValid) {
        if (firstInvalid) {
          firstInvalid.reportValidity();
          firstInvalid.focus();
        }
        if (status) {
          status.textContent = 'Please complete the highlighted fields before submitting.';
          status.style.display = 'block';
        }
        return;
      }

      form.reset();
      if (status) {
        status.textContent = 'This form is ready for backend integration. Connect your scheduling or CRM service to receive submissions.';
        status.style.display = 'block';
      }
    });
  });

  if ('IntersectionObserver' in window && revealItems.length) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const currentYear = document.querySelector('[data-current-year]');
  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }
});
