function sectionHeading(kicker, title, text = "") {
  return `
    <div class="section-heading">
      ${kicker ? `<div class="section-kicker">${kicker}</div>` : ""}
      <h2>${title}</h2>
      ${text ? `<p class="section-text">${text}</p>` : ""}
    </div>
  `;
}

export function renderHero(hero) {
  return `
    <section class="hero" id="hero">
      <div class="hero-topline">${hero.topline}</div>
      <div class="hero-dog">
        <img src="${hero.image}" alt="${hero.imageAlt}" />
      </div>
      <div class="hero-bubble bubble-left-top">${hero.bubbles[0]}</div>
      <div class="hero-bubble bubble-right-top">${hero.bubbles[1]}</div>
      <div class="hero-bubble bubble-left-bottom">${hero.bubbles[2]}</div>
      <div class="hero-bubble bubble-right-bottom">${hero.bubbles[3]}</div>
      <h1>${hero.title.replace(/\n/g, "<br />")}</h1>
      <div class="hero-actions">
        <a class="button button-primary" href="${hero.primaryCta.href}">${hero.primaryCta.label}</a>
      </div>
    </section>
  `;
}

export function renderAbout(about) {
  return `
    <section class="section section-about" id="about">
      <div class="two-column">
        <div class="text-card text-card-plain">
          ${sectionHeading(about.kicker, about.title)}
          <div class="text-stack">
            ${about.body.map((item) => `<p>${item}</p>`).join("")}
          </div>
        </div>
        <div class="image-card image-card-yellow">
          <img src="${about.image}" alt="${about.imageAlt}" />
        </div>
      </div>
    </section>
  `;
}

export function renderProgram(program) {
  return `
    <section class="section section-band" id="program">
      ${sectionHeading(program.kicker, program.title, program.text)}
      <div class="program-list">
        ${program.items
          .map(
            (item) => `
              <article class="program-row">
                <h3>${item.title}</h3>
                <p>${item.text}</p>
              </article>
            `,
          )
          .join("")}
      </div>
      <blockquote class="program-quote">
        <p>${program.quote}</p>
        <span>${program.quoteAuthor}</span>
      </blockquote>
    </section>
  `;
}

export function renderBenefits(benefits) {
  return `
    <section class="section" id="benefits">
      ${sectionHeading(benefits.kicker, benefits.title)}
      <div class="icon-grid icon-grid-4">
        ${benefits.items
          .map(
            (item) => `
              <article class="mini-card center-card">
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
      ${sectionHeading(roadmap.kicker, roadmap.title)}
      <div class="icon-grid icon-grid-3">
        ${roadmap.items
          .map(
            (item) => `
              <article class="mini-card center-card">
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
    <section class="section section-band-light" id="how">
      ${sectionHeading(how.kicker, how.title)}
      <div class="steps-grid">
        ${how.steps
          .map(
            (step, index) => `
              <article class="step-card">
                <div class="step-index">0${index + 1}</div>
                <h3>${step.title}</h3>
                <p>${step.text}</p>
              </article>
            `,
          )
          .join("")}
      </div>
      <div class="center-actions">
        <a class="button button-primary" href="${how.cta.href}">${how.cta.label}</a>
      </div>
    </section>
  `;
}

export function renderInstructor(instructor) {
  return `
    <section class="section" id="instructor">
      <div class="two-column two-column-reverse">
        <div class="image-card image-card-plain">
          <img src="${instructor.image}" alt="${instructor.imageAlt}" />
        </div>
        <div class="text-card">
          ${sectionHeading(instructor.kicker, instructor.title)}
          <div class="text-stack">
            ${instructor.body.map((item) => `<p>${item}</p>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderKit(kit) {
  return `
    <section class="section" id="kit">
      <div class="two-column">
        <div class="text-card">
          ${sectionHeading(kit.kicker, kit.title, kit.text)}
          <ul class="plain-list">
            ${kit.features.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <div class="price-pair">
            <div><span>Стоимость набора</span><strong>${kit.standalonePrice}</strong></div>
            <div><span>При записи на курс</span><strong>${kit.bundlePrice}</strong></div>
          </div>
        </div>
        <div class="image-card image-card-blue">
          <img src="${kit.image}" alt="${kit.imageAlt}" />
        </div>
      </div>
    </section>
  `;
}

export function renderPricing(pricing) {
  return `
    <section class="section" id="pricing">
      ${sectionHeading(pricing.kicker, pricing.title)}
      <div class="pricing-grid">
        ${pricing.plans
          .map(
            (plan) => `
              <article class="pricing-card${plan.emphasis ? " pricing-card-primary" : ""}">
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
    <section class="section section-band-light" id="reviews">
      ${sectionHeading(reviews.kicker, reviews.title)}
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
      <div class="center-actions">
        <a class="button button-primary" href="#lead">${reviews.cta}</a>
      </div>
    </section>
  `;
}

export function renderFaq(faq) {
  return `
    <section class="section" id="faq">
      ${sectionHeading(faq.kicker, faq.title)}
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
    <section class="section section-band-light" id="lead">
      <div class="lead-wrap">
        <div class="text-card text-card-plain">
          ${sectionHeading(lead.kicker, lead.title, lead.text)}
          <div class="text-stack">
            ${lead.notes.map((item) => `<p>${item}</p>`).join("")}
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
