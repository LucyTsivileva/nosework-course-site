export async function onRequestPost(context) {
  const payload = await context.request.json();
  const env = context.env || {};

  const result = {
    received: true,
    telegramConfigured: Boolean(env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID),
    sheetsConfigured: Boolean(env.GOOGLE_SHEETS_WEBHOOK_URL),
  };

  const lines = [
    "Новая заявка с nosework-course-site",
    `Имя: ${payload.name || "-"}`,
    `Email: ${payload.email || "-"}`,
    `Контакт: ${payload.contact || "-"}`,
    `Пакет: ${payload.package || "-"}`,
    `Nosework Kit: ${payload.kit ? "да" : "нет"}`,
    `Комментарий: ${payload.comment || "-"}`,
  ];

  if (result.telegramConfigured) {
    await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: env.TELEGRAM_CHAT_ID,
        text: lines.join("\n"),
      }),
    });
  }

  if (result.sheetsConfigured) {
    await fetch(env.GOOGLE_SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  return Response.json(result, { status: 200 });
}
