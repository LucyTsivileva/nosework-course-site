function intro(kicker, title, text = "") {
  return `
    <div class="section-kicker">${kicker}</div>
    <h2>${title}</h2>
    ${text ? `<p class="section-text">${text}</p>` : ""}
  `;
}

export function renderHero(hero) {
  return `
    <section class="hero" id="hero">
      <div class="hero-copy">
        <div class="eyebrow">${hero.kicker}</div>
        <h1>${hero.title}</h1>
        <p>${hero.description}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="${hero.primaryCta.href}">${hero.primaryCta.label}</a>
          <a class="button button-secondary" href="${hero.secondaryCta.href}">${hero.secondaryCta.label}</a>
        </div>
        <div class="hero-meta">
          ${hero.stats
            .map(
              (item) => `
                <article class="meta-card">
                  <strong>${item.title}</strong>
                  <span>${item.text}</span>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
      <div class="hero-art">
        <div class="hero-art-card">
          <img src="${hero.image}" alt="${hero.imageAlt}" />
        </div>
      </div>
    </section>
  `;
}

export function renderAbout(about) {
  return `
    <section class="section section-grid" id="about">
      <div class="section-main">
        ${intro(about.kicker, about.title, about.text)}
      </div>
      <div class="note-stack">
        ${about.notes
          .map(
            (note) => `
              <article class="note-card">
                <h3>${note.title}</h3>
                <p>${note.text}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

export function renderProgram(program) {
  return `
    <section class="section" id="program">
      ${intro(program.kicker, program.title, program.text)}
      <div class="feature-grid">
        ${program.items
          .map(
            (item) => `
              <article class="feature-card">
                <h3>${item.title}</h3>
                <p>${item.text}</p>
              </article>
            `,
          )
          .join("")}
      </div>
      <blockquote class="quote-banner">
        <p>${program.quote}</p>
        <span>${program.quoteAuthor}</span>
      </blockquote>
    </section>
  `;
}

export function renderBenefits(benefits) {
  return `
    <section class="section alt-section" id="benefits">
      ${intro(benefits.kicker, benefits.title)}
      <div class="benefit-grid">
        ${benefits.items
          .map(
            (item) => `
              <article class="benefit-card">
                <h3>${item.title}</h3>
                <p>${item.text}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

export function renderRoadmap(roadmap) {
  return `
    <section class="section" id="roadmap">
      ${intro(roadmap.kicker, roadmap.title)}
      <div class="learn-grid">
        ${roadmap.items
          .map(
            (item) => `
              <article class="learn-card">
                <h3>${item.title}</h3>
                <p>${item.text}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

export function renderHow(how) {
  return `
    <section class="section section-grid alt-section" id="how">
      <div class="section-main">
        ${intro(how.kicker, how.title, how.text)}
        <a class="button button-primary" href="${how.cta.href}">${how.cta.label}</a>
      </div>
      <div class="steps-list">
        ${how.steps
          .map(
            (step, index) => `
              <article class="step-row">
                <div class="step-number">${String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3>${step.title}</h3>
                  <p>${step.text}</p>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

export function renderInstructor(instructor) {
  return `
    <section class="section section-grid" id="instructor">
      <div class="media-card">
        <img src="${instructor.image}" alt="${instructor.imageAlt}" />
      </div>
      <div class="section-main">
        ${intro(instructor.kicker, instructor.title)}
        <div class="text-stack">
          ${instructor.body.map((text) => `<p>${text}</p>`).join("")}
        </div>
      </div>
    </section>
  `;
}

export function renderKit(kit) {
  return `
    <section class="section section-grid alt-section" id="kit">
      <div class="section-main">
        ${intro(kit.kicker, kit.title, kit.text)}
        <ul class="plain-list">
          ${kit.features.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <div class="price-inline">
          <div><span>Отдельно</span><strong>${kit.standalonePrice}</strong></div>
          <div><span>С курсом</span><strong>${kit.bundlePrice}</strong></div>
        </div>
      </div>
      <div class="media-card media-card-accent">
        <img src="${kit.image}" alt="${kit.imageAlt}" />
      </div>
    </section>
  `;
}

export function renderPricing(pricing) {
  return `
    <section class="section" id="pricing">
      ${intro(pricing.kicker, pricing.title)}
      <div class="pricing-grid">
        ${pricing.plans
          .map(
            (plan) => `
              <article class="pricing-card${plan.emphasis ? " pricing-card-featured" : ""}">
                <div class="pricing-badge">${plan.badge}</div>
                <h3>${plan.name}</h3>
                <div class="pricing-amount">${plan.amount}</div>
                <ul class="plain-list">
                  ${plan.features.map((item) => `<li>${item}</li>`).join("")}
                </ul>
                <a class="button button-primary" href="#lead">${plan.cta}</a>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

export function renderReviews(reviews) {
  return `
    <section class="section alt-section" id="reviews">
      ${intro(reviews.kicker, reviews.title)}
      <div class="reviews-grid">
        ${reviews.items
          .map(
            (item) => `
              <article class="review-card">
                <p>${item.quote}</p>
                <strong>${item.signature}</strong>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

export function renderFaq(faq) {
  return `
    <section class="section" id="faq">
      ${intro(faq.kicker, faq.title)}
      <div class="faq-list">
        ${faq.items
          .map(
            (item) => `
              <article class="faq-row">
                <h3>${item.question}</h3>
                <p>${item.answer}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

export function renderLead(lead) {
  return `
    <section class="section alt-section" id="lead">
      <div class="lead-layout">
        <div class="section-main">
          ${intro(lead.kicker, lead.title, lead.text)}
          <div class="text-stack">
            ${lead.notes.map((note) => `<p>${note}</p>`).join("")}
          </div>
        </div>
        <form class="lead-form" id="lead-form">
          <input type="text" name="name" placeholder="Ваше имя" required />
          <input type="text" name="contact" placeholder="Telegram или WhatsApp" required />
          <input type="email" name="email" placeholder="Email" />
          <select name="package" required>
            <option value="">Что хотите оформить?</option>
            <option value="course">Курс</option>
            <option value="course+kit">Курс + Nosework Kit</option>
            <option value="kit">Только Nosework Kit</option>
          </select>
          <textarea name="comment" rows="5" placeholder="Комментарий или вопрос"></textarea>
          <button class="button button-primary" type="submit">Отправить заявку</button>
          <div class="form-note" id="form-status">${lead.statusNote}</div>
        </form>
      </div>
    </section>
  `;
}

export function renderFooter(footer) {
  return `<footer class="footer">${footer.copyright}</footer>`;
}
