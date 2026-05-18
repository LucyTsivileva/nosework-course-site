function sectionIntro(kicker, title, body = "") {
  return `
    <div class="section-kicker">${kicker}</div>
    <h2>${title}</h2>
    ${body ? `<p>${body}</p>` : ""}
  `;
}

export function renderHero(hero) {
  return `
    <section class="section hero" id="hero">
      <article class="hero-card hero-copy">
        <div class="section-kicker">${hero.kicker}</div>
        <h1>${hero.title.replace("\n", "<br />")}</h1>
        <p>${hero.description}</p>
        <div class="button-row">
          <a class="button button-primary" href="${hero.primaryCta.href}">${hero.primaryCta.label}</a>
          <a class="button button-secondary" href="${hero.secondaryCta.href}">${hero.secondaryCta.label}</a>
        </div>
      </article>
      <aside class="hero-card hero-art">
        <img src="${hero.image}" alt="${hero.imageAlt}" />
      </aside>
      <div class="hero-meta">
        ${hero.stats
          .map(
            (item) => `
              <div class="card">
                <h3>${item.title}</h3>
                <p>${item.text}</p>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

export function renderAbout(about) {
  return `
    <section class="section" id="about">
      ${sectionIntro(about.kicker, about.title)}
      <div class="grid-2" style="margin-top: 22px;">
        <article class="card">
          ${about.body.map((text) => `<p>${text}</p>`).join("<div style='height:12px'></div>")}
        </article>
        <article class="card">
          <h3>Почему этот блок важен</h3>
          <ul class="list">
            ${about.bullets.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      </div>
    </section>
  `;
}

export function renderProgram(program) {
  return `
    <section class="section" id="program">
      ${sectionIntro(program.kicker, program.title)}
      <div class="grid-2" style="margin-top: 22px;">
        ${program.items
          .map(
            (item) => `
              <article class="card">
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

export function renderBenefits(benefits) {
  return `
    <section class="section" id="benefits">
      ${sectionIntro(benefits.kicker, benefits.title)}
      <div class="grid-3" style="margin-top: 22px;">
        ${benefits.items
          .map(
            (item) => `
              <article class="card">
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
      <div class="roadmap" style="margin-top: 22px;">
        ${roadmap.items
          .map(
            (item, index) => `
              <article class="card roadmap-item">
                <div class="roadmap-index">0${index + 1}</div>
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

export function renderInstructor(instructor) {
  return `
    <section class="section" id="instructor">
      <div class="instructor">
        <article class="hero-card hero-copy">
          ${sectionIntro(instructor.kicker, instructor.title)}
          ${instructor.body.map((text) => `<p>${text}</p>`).join("<div style='height:12px'></div>")}
        </article>
        <aside class="hero-card hero-art">
          <img src="${instructor.image}" alt="${instructor.imageAlt}" />
        </aside>
      </div>
    </section>
  `;
}

export function renderKit(kit) {
  return `
    <section class="section" id="kit">
      ${sectionIntro(kit.kicker, kit.title, kit.text)}
      <div class="card" style="margin-top: 22px;">
        <ul class="list">
          ${kit.features.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    </section>
  `;
}

export function renderPricing(pricing) {
  return `
    <section class="section" id="pricing">
      ${sectionIntro(pricing.kicker, pricing.title)}
      <div class="pricing-grid" style="margin-top: 22px;">
        ${pricing.plans
          .map(
            (plan) => `
              <article class="hero-card price-card">
                <div class="price-badge">${plan.badge}</div>
                <h3>${plan.name}</h3>
                <div class="price-amount">${plan.amount}</div>
                <ul class="list">
                  ${plan.features.map((item) => `<li>${item}</li>`).join("")}
                </ul>
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
      ${sectionIntro(reviews.kicker, reviews.title)}
      <div class="review-grid" style="margin-top: 22px;">
        ${reviews.items
          .map(
            (item) => `
              <article class="card">
                <p class="review-quote">${item.quote}</p>
                <div class="review-signature">${item.signature}</div>
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
      ${sectionIntro(faq.kicker, faq.title)}
      <div class="faq-grid" style="margin-top: 22px;">
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
      <div class="form-card">
        ${sectionIntro(lead.kicker, lead.title, lead.text)}
        <form class="lead-form" id="lead-form">
          <input type="text" name="name" placeholder="Имя и фамилия" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="contact" placeholder="Телефон или Telegram" required />
          <select name="package">
            <option value="one-session">Одна тренировка</option>
            <option value="five-sessions">5 тренировок</option>
            <option value="ten-sessions">10 тренировок</option>
          </select>
          <textarea name="comment" rows="4" placeholder="Что важно знать о собаке и вашей задаче"></textarea>
          <label class="tiny">
            <input type="checkbox" name="kit" value="yes" />
            Хочу добавить Nosework Kit
          </label>
          <button class="button button-primary" type="submit">Отправить заявку</button>
          <div class="form-note" id="form-status">Форма пока работает как заготовка до подключения секретов Cloudflare.</div>
        </form>
      </div>
    </section>
  `;
}

export function renderFooter(footer) {
  return `
    <footer class="footer">
      <div>${footer.copyright}</div>
      <div>
        ${footer.links.map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join(" · ")}
      </div>
    </footer>
  `;
}
