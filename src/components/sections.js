function sectionIntro(kicker, title, body = "") {
  return `
    <div class="section-kicker">${kicker}</div>
    <h2>${title}</h2>
    ${body ? `<p style="margin-top:16px;max-width:760px;">${body}</p>` : ""}
  `;
}

export function renderHero(hero) {
  return `
    <section class="section section-tight" id="hero">
      <div class="hero surface">
        <div class="hero-inner">
          <article class="hero-copy">
            <div class="section-kicker">${hero.kicker}</div>
            <h1>${hero.title.replace("\n", "<br />")}</h1>
            <p>${hero.description}</p>
            <div class="button-row">
              <a class="button button-primary" href="${hero.primaryCta.href}">${hero.primaryCta.label}</a>
              <a class="button button-secondary" href="${hero.secondaryCta.href}">${hero.secondaryCta.label}</a>
            </div>
          </article>
          <aside class="hero-art">
            <div class="hero-cloud cloud-a">подходит собакам<br />любого уровня</div>
            <div class="hero-cloud cloud-b">онлайн +<br />понятная структура</div>
            <div class="hero-cloud cloud-c">10 минут в день</div>
            <img class="hero-figure" src="${hero.image}" alt="${hero.imageAlt}" />
          </aside>
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
      <div class="split">
        <article class="panel panel-blue">
          ${sectionIntro(about.kicker, about.title)}
          <div style="margin-top:18px; display:grid; gap:14px;">
            ${about.body.map((text) => `<p>${text}</p>`).join("")}
          </div>
        </article>
        <aside class="panel illustration-card panel-yellow">
          <img src="./public/images/source-assets/super-dogs-course/sup-dog-1.png" alt="Собака и обучение ноузворку" />
        </aside>
      </div>
    </section>
  `;
}

export function renderBenefits(benefits) {
  return `
    <section class="section" id="benefits">
      ${sectionIntro(benefits.kicker, benefits.title)}
      <div class="grid-3" style="margin-top:22px;">
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

export function renderProgram(program) {
  return `
    <section class="section" id="program">
      <div class="band">
        ${sectionIntro(program.kicker, program.title)}
        <div class="grid-2" style="margin-top:24px;">
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
      </div>
    </section>
  `;
}

export function renderRoadmap(roadmap) {
  return `
    <section class="section" id="roadmap">
      ${sectionIntro(roadmap.kicker, roadmap.title)}
      <div class="roadmap" style="margin-top:22px;">
        ${roadmap.items
          .map(
            (item, index) => `
              <article class="card roadmap-item">
                <div class="roadmap-index">${String(index + 1).padStart(2, "0")}</div>
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
      <div class="split reverse">
        <aside class="panel illustration-card panel-yellow">
          <img src="${instructor.image}" alt="${instructor.imageAlt}" />
        </aside>
        <article class="panel">
          ${sectionIntro(instructor.kicker, instructor.title)}
          <div style="margin-top:18px; display:grid; gap:14px;">
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
          <div class="button-row">
            <a class="button button-primary" href="#lead">Записаться</a>
          </div>
        </article>
        <aside class="panel illustration-card">
          <img src="./public/images/source-assets/super-dogs-course/sup-dogs-course-19.png" alt="Nosework kit" />
        </aside>
      </div>
    </section>
  `;
}

export function renderPricing(pricing) {
  return `
    <section class="section" id="pricing">
      ${sectionIntro(pricing.kicker, pricing.title)}
      <div class="pricing-grid" style="margin-top:22px;">
        ${pricing.plans
          .map(
            (plan) => `
              <article class="price-card">
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
      <div class="review-section">
        ${sectionIntro(reviews.kicker, reviews.title)}
        <div class="review-grid" style="margin-top:22px;">
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
        ${sectionIntro(lead.kicker, lead.title, lead.text)}
        <form class="lead-form" id="lead-form">
          <input type="text" name="name" placeholder="Имя и фамилия" required />
          <input type="email" name="email" placeholder="Ваш e-mail" required />
          <input type="text" name="contact" placeholder="Телефон или Telegram" required />
          <select name="package">
            <option value="one-session">1 онлайн-занятие — 80 €</option>
            <option value="three-sessions">3 онлайн-занятия — 200 €</option>
            <option value="five-sessions-kit">5 онлайн-занятий + Nosework Kit — 350 €</option>
          </select>
          <textarea name="comment" rows="5" placeholder="Расскажите кратко о собаке и вашей задаче"></textarea>
          <label class="tiny form-row-full">
            <input type="checkbox" name="kit" value="yes" />
            Хочу добавить или отдельно заказать Nosework Kit
          </label>
          <button class="button button-primary" type="submit">Записаться</button>
          <div class="form-note" id="form-status">Форма пока подключена как технический черновик до финальной настройки Telegram и Google Sheets.</div>
        </form>
      </div>
    </section>
  `;
}

export function renderFooter(footer) {
  return `
    <footer class="footer">
      <div>${footer.copyright}</div>
      <div>${footer.links.map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join(" · ")}</div>
    </footer>
  `;
}
