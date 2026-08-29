const sharedHeaderMarkup = `
  <header class="site-header">
    <div class="container site-header__inner">
      <a class="brand" href="index.html" aria-label="Fintax Visor home">
        <img class="brand__logo" src="logo.png" alt="Fintax Visor logo">
      </a>

      <nav class="nav" aria-label="Primary navigation">
        <ul class="nav__links">
          <li><a class="nav__link" href="index.html" data-nav="index">Home</a></li>
          <li><a class="nav__link" href="about.html" data-nav="about">About</a></li>
          <li class="nav__item--has-dropdown">
            <a class="nav__link" href="services.html" data-nav="services" aria-haspopup="true">Services</a>
            <ul class="nav__dropdown" aria-label="Services submenu">
              <li><a href="company-formation.html">Company Formation</a></li>
              <li><a href="tax-legal-services.html">Tax &amp; Legal Services</a></li>
              <li><a href="ein-itin.html">EIN &amp; ITIN</a></li>
              <li><a href="business-bank-account.html">Business Bank Account</a></li>
              <li><a href="trademark-registration.html">Trademark Registration</a></li>
              <li><a href="bookkeeping.html">Bookkeeping</a></li>
              <li><a href="payroll.html">Payroll Processing</a></li>
              <li><a href="irs-notice-resolution.html">IRS Notice Resolution</a></li>
              <li><a href="tax-refunds.html">Tax Refunds</a></li>
              <li><a href="legal-reports-certificates.html">Legal Reports and Certificates</a></li>
            </ul>
          </li>
                <!-- Packages section commented until price is decided -->
          <!-- <li><a class="nav__link" href="packages.html" data-nav="packages">Packages</a></li> -->
          <li><a class="nav__link" href="blog.html" data-nav="blog">Blog</a></li>
          <li><a class="nav__link" href="faqs.html" data-nav="faqs">FAQs</a></li>
          <li><a class="nav__link" href="contact.html" data-nav="contact">Contact</a></li>
        </ul>
      </nav>

      <div class="nav__actions">
        <a class="btn btn--primary" href="book-consultation.html">Book a Consultation</a>
        <button class="nav-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" data-nav-toggle>
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <div class="mobile-nav" aria-label="Mobile navigation">
      <div class="container mobile-nav__inner">
        <ul class="mobile-nav__links">
          <li><a data-mobile-link href="index.html">Home</a></li>
          <li><a data-mobile-link href="about.html">About</a></li>
          <li class="mobile-nav__service-item">
            <a data-mobile-link data-mobile-services-toggle href="services.html" aria-expanded="false" aria-controls="mobile-services-submenu">Services</a>
            <ul class="mobile-nav__service-links" id="mobile-services-submenu" hidden>
              <li><a data-mobile-link href="company-formation.html">Company Formation</a></li>
              <li><a data-mobile-link href="tax-legal-services.html">Tax &amp; Legal Services</a></li>
              <li><a data-mobile-link href="ein-itin.html">EIN &amp; ITIN</a></li>
              <li><a data-mobile-link href="business-bank-account.html">Business Bank Account</a></li>
              <li><a data-mobile-link href="trademark-registration.html">Trademark Registration</a></li>
              <li><a data-mobile-link href="bookkeeping.html">Bookkeeping</a></li>
              <li><a data-mobile-link href="payroll.html">Payroll Processing</a></li>
              <li><a data-mobile-link href="irs-notice-resolution.html">IRS Notice Resolution</a></li>
              <li><a data-mobile-link href="tax-refunds.html">Tax Refunds</a></li>
              <li><a data-mobile-link href="legal-reports-certificates.html">Legal Reports and Certificates</a></li>
            </ul>
          </li>
                <!-- Packages section commented until price is decided -->          
          <!-- <li><a data-mobile-link href="packages.html">Packages</a></li> --> 
          <li><a data-mobile-link href="blog.html">Blog</a></li>
          <li><a data-mobile-link href="faqs.html">FAQs</a></li>
          <li><a data-mobile-link href="contact.html">Contact</a></li>
        </ul>
        <a class="mobile-nav__cta" data-mobile-link href="book-consultation.html">Book a Consultation</a>
      </div>
    </div>
  </header>
`;

const sharedFooterMarkup = `
  <footer class="footer">
    <div class="container footer__top">
      <div class="footer__brand">
        <a href="index.html"><img src="logo.png" alt="Fintax Visor logo"></a>
        <p class="footer__text">Fintax Visor helps entrepreneurs and growing businesses bring company formation, tax, accounting, payroll, banking, and compliance support together in one place.</p>
      </div>
      <div>
        <h3 class="footer__title">Company</h3>
        <ul class="footer__links">
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
                <!-- Packages section commented until price is decided -->          
        <!--  <li><a href="packages.html">Packages</a></li> -->
          <li><a href="blog.html">Blog</a></li>
          <li><a href="faqs.html">FAQs</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 class="footer__title">Services</h3>
        <ul class="footer__links">
          <li><a href="company-formation.html">Company Formation</a></li>
          <li><a href="tax-legal-services.html">Tax Services</a></li>
          <li><a href="ein-itin.html">EIN &amp; ITIN</a></li>
          <li><a href="business-bank-account.html">Banking</a></li>
          <li><a href="trademark-registration.html">Trademark</a></li>
          <li><a href="bookkeeping.html">Bookkeeping</a></li>
          <li><a href="payroll.html">Payroll Processing</a></li>
          <li><a href="irs-notice-resolution.html">IRS Resolution</a></li>
          <li><a href="tax-refunds.html">Tax Refunds</a></li>
          <li><a href="legal-reports-certificates.html">Legal Reports and Certificates</a></li>
        </ul>
      </div>
      <div>
        <h3 class="footer__title">Contact</h3>
        <div class="footer__contact">
          <span>fintaxvisor@gmail.com</span>
          <span>+1 505 528 3808</span>
          <span>1209 MOUNTAIN ROAD PL NE STE R ALBUQUERQUE, NM 87110</span>
            <!-- business hours hide until decided -->
          <!--<span>[Business Hours]</span> -->
        </div>
        <h3 class="footer__title" style="margin-top:22px;">Legal</h3>
        <ul class="footer__links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Disclaimer</a></li>
        </ul>
      </div>
    </div>
    <div class="container footer__bottom">
      <span>Content is for general informational purposes and should not be considered legal, tax, or financial advice for a specific situation.</span>
      <span>© <span data-current-year></span> Fintax Visor. All rights reserved.</span>
    </div>
  </footer>
`;

const loadSharedTemplate = async () => {
  const headerTarget = document.querySelector("[data-header]");
  if (headerTarget) {
    try {
      const response = await fetch("header.html");
      if (response.ok) {
        headerTarget.outerHTML = await response.text();
      } else {
        headerTarget.outerHTML = sharedHeaderMarkup;
      }
    } catch (error) {
      headerTarget.outerHTML = sharedHeaderMarkup;
    }
  }

  const footerTarget = document.querySelector("[data-footer]");
  if (footerTarget) {
    try {
      const response = await fetch("footer.html");
      if (response.ok) {
        footerTarget.outerHTML = await response.text();
      } else {
        footerTarget.outerHTML = sharedFooterMarkup;
      }
    } catch (error) {
      footerTarget.outerHTML = sharedFooterMarkup;
    }
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  await loadSharedTemplate();

  const body = document.body;
  const toggle = document.querySelector("[data-nav-toggle]");
  const mobileLinks = document.querySelectorAll("[data-mobile-link]");
  const mobileServicesToggle = document.querySelector("[data-mobile-services-toggle]");
  const mobileServicesSubmenu = document.getElementById("mobile-services-submenu");
  const accordions = document.querySelectorAll("[data-accordion-button]");
  const forms = document.querySelectorAll("[data-validate-form]");
  const revealItems = document.querySelectorAll(".reveal");

  const pageName = location.pathname.split("/").pop() || "index.html";
  const normalizedPage = pageName.replace(/\.html?$/i, "") || "index";
  const navLinks = document.querySelectorAll("[data-nav]");

  navLinks.forEach((link) => {
    const linkName = link.getAttribute("data-nav");
    if (linkName === normalizedPage) {
      link.classList.add("nav__link--active");
    }
  });

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (mobileServicesToggle && mobileServicesSubmenu) {
    mobileServicesToggle.addEventListener("click", (event) => {
      event.preventDefault();
      const isOpen = mobileServicesToggle.getAttribute("aria-expanded") === "true";
      mobileServicesToggle.setAttribute("aria-expanded", String(!isOpen));
      mobileServicesSubmenu.hidden = isOpen;
    });
  }

  mobileLinks.forEach((link) => {
    if (link === mobileServicesToggle) {
      return;
    }
    link.addEventListener("click", () => {
      body.classList.remove("menu-open");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
      if (mobileServicesToggle && mobileServicesSubmenu) {
        mobileServicesToggle.setAttribute("aria-expanded", "false");
        mobileServicesSubmenu.hidden = true;
      }
    });
  });

  accordions.forEach((button) => {
    const panelId = button.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;

    const closePanel = () => {
      button.setAttribute("aria-expanded", "false");
      if (panel) {
        panel.style.maxHeight = "0px";
      }
    };

    const openPanel = () => {
      button.setAttribute("aria-expanded", "true");
      if (panel) {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    };

    closePanel();

    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      accordions.forEach((otherButton) => {
        if (otherButton !== button) {
          const otherPanelId = otherButton.getAttribute("aria-controls");
          const otherPanel = otherPanelId
            ? document.getElementById(otherPanelId)
            : null;
          otherButton.setAttribute("aria-expanded", "false");
          if (otherPanel) {
            otherPanel.style.maxHeight = "0px";
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
    const status = form.querySelector("[data-form-status]");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      let firstInvalid = null;
      let isValid = true;

      form.querySelectorAll("[required]").forEach((field) => {
        field.setCustomValidity("");
        let message = "";

        if (!field.value.trim()) {
          message = "This field is required.";
        } else if (field.type === "email" && !field.checkValidity()) {
          message = "Enter a valid email address.";
        } else if (field.type === "tel" && field.value.trim().length < 7) {
          message = "Enter a valid phone number.";
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
          status.textContent =
            "Please complete the highlighted fields before submitting.";
          status.style.display = "block";
        }
        return;
      }

      form.reset();
      if (status) {
        status.textContent =
          "This form is ready for backend integration. Connect your scheduling or CRM service to receive submissions.";
        status.style.display = "block";
      }
    });
  });

  if ("IntersectionObserver" in window && revealItems.length) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const currentYear = document.querySelector("[data-current-year]");
  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }
});
