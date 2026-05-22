import json
import os
import urllib.request
import urllib.parse
import smtplib
# force redeploy v2
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def send_telegram(token: str, chat_id: str, text: str):
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    data = json.dumps({"chat_id": chat_id, "text": text, "parse_mode": "HTML"}).encode()
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
    urllib.request.urlopen(req, timeout=10)


def send_emails(emails: list, subject: str, body: str):
    smtp_host = os.environ.get("SMTP_HOST", "smtp.yandex.ru")
    smtp_port = int(os.environ.get("SMTP_PORT", "587"))
    smtp_user = os.environ.get("SMTP_USER", "")
    smtp_pass = os.environ.get("SMTP_PASS", "")

    if not smtp_user or not smtp_pass:
        return

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = smtp_user
    msg["To"] = ", ".join(emails)
    msg.attach(MIMEText(body, "html", "utf-8"))

    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.ehlo()
        server.starttls()
        server.login(smtp_user, smtp_pass)
        server.sendmail(smtp_user, emails, msg.as_string())


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта и отправляет уведомления в Telegram и на email."""
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, X-User-Id, X-Auth-Token, X-Session-Id",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "")
    phone = body.get("phone", "")
    city = body.get("city", "")
    goal = body.get("goal", "")
    message = body.get("message", "")

    tg_token = os.environ.get("TELEGRAM_BOT_TOKEN", "")
    tg_chat_id = os.environ.get("TELEGRAM_CHAT_ID", "")
    notify_emails_raw = os.environ.get("NOTIFY_EMAILS", "")
    notify_emails = [e.strip() for e in notify_emails_raw.split(",") if e.strip()]

    tg_text = (
        "📋 <b>Новая заявка с сайта</b>\n\n"
        f"👤 <b>Имя:</b> {name}\n"
        f"📞 <b>Телефон:</b> {phone}\n"
        f"🏙 <b>Город:</b> {city or '—'}\n"
        f"🎯 <b>Цель:</b> {goal}\n"
        f"💬 <b>Сообщение:</b> {message or '—'}"
    )

    email_body = f"""
    <h2>Новая заявка с сайта личные-финансы.рф</h2>
    <table>
      <tr><td><b>Имя:</b></td><td>{name}</td></tr>
      <tr><td><b>Телефон:</b></td><td>{phone}</td></tr>
      <tr><td><b>Город:</b></td><td>{city or '—'}</td></tr>
      <tr><td><b>Цель:</b></td><td>{goal}</td></tr>
      <tr><td><b>Сообщение:</b></td><td>{message or '—'}</td></tr>
    </table>
    """

    errors = []

    if tg_token and tg_chat_id:
        try:
            send_telegram(tg_token, tg_chat_id, tg_text)
        except Exception as e:
            errors.append(f"telegram: {e}")

    if notify_emails:
        try:
            send_emails(notify_emails, "Новая заявка с сайта личные-финансы.рф", email_body)
        except Exception as e:
            errors.append(f"email: {e}")

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"ok": True, "errors": errors}),
    }