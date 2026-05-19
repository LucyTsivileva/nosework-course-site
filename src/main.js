import { siteData } from "./data/site.js";
import {
  renderAbout,
  renderBenefits,
  renderFaq,
  renderFooter,
  renderHero,
  renderHow,
  renderInstructor,
  renderKit,
  renderLead,
  renderPricing,
  renderProgram,
  renderRoadmap,
  renderReviews,
} from "./components/sections.js";

document.title = siteData.meta.title;
const descriptionTag = document.querySelector('meta[name="description"]');
if (descriptionTag) descriptionTag.setAttribute("content", siteData.meta.description);

const app = document.querySelector("#app");
app.innerHTML = [
  renderHero(siteData.hero),
  renderAbout(siteData.about),
  renderProgram(siteData.program),
  renderBenefits(siteData.benefits),
  renderRoadmap(siteData.roadmap),
  renderHow(siteData.how),
  renderInstructor(siteData.instructor),
  renderKit(siteData.kit),
  renderPricing(siteData.pricing),
  renderReviews(siteData.reviews),
  renderFaq(siteData.faq),
  renderLead(siteData.lead),
  renderFooter(siteData.footer),
].join("");

const form = document.querySelector("#lead-form");
const status = document.querySelector("#form-status");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());
  payload.kit = formData.get("kit") === "yes";

  try {
    status.textContent = "Отправляем заявку...";
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    form.reset();
    status.textContent = "Заявка отправлена. После подключения продакшн-секретов она будет приходить в Telegram и Google Sheets.";
  } catch (error) {
    console.error(error);
    status.textContent =
      "Форма пока не подключена к боевым секретам. Каркас готов, но Telegram и Google Sheets нужно будет включить в Cloudflare.";
  }
});
