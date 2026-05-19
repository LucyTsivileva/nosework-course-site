function sectionIntro(kicker, title, body = "") {
  return `
    <div class="section-kicker">${kicker}</div>
    <h2>${title}</h2>
    ${body ? `<p class="section-copy">${body}</p>` : ""}
  `;
}

export function renderHero(hero) {
  return `
    <section class="section hero-section" id="hero">
      <div class="hero surface">
        <div class="hero-caption">${hero.kicker}</div>
        <div class="hero-topline">${hero.topline}</div>
        <div class="hero-floating hero-floating-left">${hero.bubbleLeft}</div>
        <div class="hero-floating hero-floating-right">${hero.bubbleRight}</div>
        <div class="hero-floating hero-floating-bottom-left">${hero.bubbleBottomLeft}</div>
        <div class="hero-floating hero-floating-bottom-right">${hero.bubbleBottomRight}</div>

        <div class="hero-dog-wrap">
          <img class="hero-dog" src="${hero.image}" alt="${hero.imageAlt}" />
        </div>

        <div class="hero-inner">
          <article class="hero-copy">
            <h1>${hero.title.replace(/\n/g, "<br />")}</h1>
            <p>${hero.description}</p>
            <div class="button-row">
              <a class="button button-primary" href="${hero.primaryCta.href}">${hero.primaryCta.label}</a>
              <a class="button button-secondary" href="${hero.secondaryCta.href}">${hero.secondaryCta.label}</a>
            </div>
          </article>
        </div>

        <div class="hero-meta">
          ${hero.stats
            .map(
              (item) => `
                <div class="hero-stat">
                  <h3>${item.title}</h3>
                  <p>${item.text}</p>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function renderAbout(about) {
  return `
    <section class="section" id="about">
      <div class="split about-grid">
        <article class="panel panel-plain">
          ${sectionIntro(about.kicker, about.title)}
          <div class="stack-md">
            ${about.body.map((text) => `<p>${text}</p>`).join("")}
          </div>
        </article>
        <aside class="mini-gallery">
          ${about.cards
            .map(
              (card) => `
                <article class="mini-gallery-card ${card.tone}">
                  ${card.image ? `<img src="${card.image}" alt="${card.alt}" />` : `<h3>${card.title}</h3><p>${card.text}</p>`}
                </article>
              `,
            )
            .join("")}
        </aside>
      </div>
    </section>
  `;
}

export function renderProgram(program) {
  return `
    <section class="section" id="program">
      <div class="band course-band">
        <div class="course-band-head">
          <div>
            ${sectionIntro(program.kicker, program.title, program.text)}
          </div>
          <blockquote class="quote-panel">
            <p>${program.quote}</p>
            <span>${program.quoteAuthor}</span>
          </blockquote>
        </div>
        <div class="grid-2 band-grid">
          ${program.items
            .map(
              (item) => `
                <article class="card card-on-band">
                  <h3>${item.title}</h3>
                  <p>${item.text}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function renderBenefits(benefits) {
  return `
    <section class="section" id="benefits">
      ${sectionIntro(benefits.kicker, benefits.title)}
      <div class="grid-4" style="margin-top:22px;">
        ${benefits.items
          .map(
            (item) => `
              <article class="card benefit-card">
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
      ${sectionIntro(roadmap.kicker, roadmap.title)}
      <div class="grid-3" style="margin-top:22px;">
        ${roadmap.items
          .map(
            (item) => `
              <article class="card learn-card">
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
    <section class="section" id="how">
      <div class="band steps-band">
        ${sectionIntro(how.kicker, how.title)}
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
        <div class="button-row">
          <a class="button button-primary" href="#lead">${how.cta.label}</a>
        </div>
      </div>
    </section>
  `;
}

export function renderInstructor(instructor) {
  return `
    <section class="section" id="instructor">
      <div class="split reverse instructor-grid">
        <aside class="panel illustration-card panel-yellow">
          <img src="${instructor.image}" alt="${instructor.imageAlt}" />
        </aside>
        <article class="panel">
          ${sectionIntro(instructor.kicker, instructor.title)}
          <div class="stack-md">
            ${instructor.body.map((text) => `<p>${text}</p>`).join("")}
          </div>
        </article>
      </div>
    </section>
  `;
}

export function renderKit(kit) {
  return `
    <section class="section" id="kit">
      <div class="split">
        <article class="panel panel-blue">
          ${sectionIntro(kit.kicker, kit.title, kit.text)}
          <ul class="list" style="margin-top:18px;">
            ${kit.features.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <div class="kit-price-row">
            <div class="kit-price">
              <span>Отдельно</span>
              <strong>${kit.standalonePrice}</strong>
            </div>
            <div class="kit-price">
              <span>С курсом</span>
              <strong>${kit.bundlePrice}</strong>
            </div>
          </div>
          <div class="button-row">
            <a class="button button-primary" href="#pricing">Смотреть стоимость</a>
          </div>
        </article>
        <aside class="panel illustration-card kit-card">
          <img src="${kit.image}" alt="${kit.imageAlt}" />
        </aside>
      </div>
    </section>
  `;
}

export function renderPricing(pricing) {
  return `
    <section class="section" id="pricing">
      ${sectionIntro(pricing.kicker, pricing.title)}
      <div class="pricing-grid pricing-grid-2" style="margin-top:22px;">
        ${pricing.plans
          .map(
            (plan) => `
              <article class="price-card ${plan.emphasis ? "price-card-emphasis" : ""}">
                <div class="price-badge">${plan.badge}</div>
                <h3>${plan.name}</h3>
                <div class="price-amount">${plan.amount}</div>
                <ul class="list">
                  ${plan.features.map((item) => `<li>${item}</li>`).join("")}
                </ul>
                <a class="button button-primary price-button" href="#lead">${plan.cta}</a>
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
    <section class="section" id="reviews">
      <div class="review-section">
        ${sectionIntro(reviews.kicker, reviews.title)}
        <div class="review-grid review-grid-3" style="margin-top:22px;">
          ${reviews.items
            .map(
              (item) => `
                <article class="quote-card">
                  <p class="review-quote">${item.quote}</p>
                  <div class="review-signature">${item.signature}</div>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function renderFaq(faq) {
  return `
    <section class="section" id="faq">
      ${sectionIntro(faq.kicker, faq.title)}
      <div class="faq-grid" style="margin-top:22px;">
        ${faq.items
          .map(
            (item) => `
              <article class="faq-item">
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
    <section class="section" id="lead">
      <div class="lead-card">
        <div class="lead-grid">
          <div>
            ${sectionIntro(lead.kicker, lead.title, lead.text)}
            <div class="stack-md lead-notes">
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
            <label class="checkbox-row form-row-full">
              <input type="checkbox" name="kit" value="yes" />
              <span>Хочу, чтобы ты написала мне и помогла выбрать, нужен ли Nosework Kit</span>
            </label>
            <textarea name="comment" rows="4" placeholder="Комментарий или вопрос"></textarea>
            <button class="button button-primary" type="submit">Отправить заявку</button>
            <div class="form-note" id="form-status">${lead.statusNote}</div>
          </form>
        </div>
      </div>
    </section>
  `;
}

export function renderFooter(footer) {
  return `
    <footer class="footer">
      <div>${footer.copyright}</div>
    </footer>
  `;
}
