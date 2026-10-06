# 🚗 Drive With Waboraro

**Botswana's friendliest driving theory coach.** A mobile-first, interactive learning website for Waboraro — a Lobatse-based theory instructor with 1,200+ students and a 95% pass rate.

![Status](https://img.shields.io/badge/Status-Live-success)
![Made in Botswana](https://img.shields.io/badge/Made%20in-Botswana%20🇧🇼-blue)

---

## ✨ Features

- 🎯 **Interactive quiz on the homepage** — real exam-style question with instant feedback
- 📝 **Full 10-question practice test** with scoring and results
- 📚 **Free lessons library** with video-style thumbnails
- 🚦 **Road signs visual guide** — warning, regulatory, information signs, and road markings
- 🎥 **Live video backgrounds** on Home, Lessons, Road Signs, About, Pricing & Contact pages
- 💬 **TikTok testimonial wall** — real-feeling comments from students
- 📱 **Social media feed** — TikTok, Instagram & Facebook posts
- 📄 **Printable study guide** — ready-to-print PDF layout
- 💰 **Simple pricing** — Free, Full Course (P350), Private Coaching (P150/session)
- 📲 **Mobile-first design** — built for TikTok students on their phones
- 🟢 **WhatsApp integration** — floating button and direct contact channels

---

## 📁 File Structure

---

## 🎨 Design

| Element | Choice |
|---------|--------|
| **Primary** | Deep Sky Blue `#0284C7` |
| **Accent** | Warm Yellow `#FACC15` |
| **Text** | Charcoal `#1A1A1A` |
| **Background** | Soft Cream `#FBF9F4` |
| **Font** | Inter (body) · Fraunces Italic (accents) |

The aesthetic is warm, friendly, and mobile-app-like — designed to feel approachable for students on TikTok.

---

## 🚀 Deploy to GitHub Pages

1. Create a new repo: `drive-with-waboraro`
2. Upload all 11 files to the root
3. Go to **Settings → Pages**
4. Select `main` branch → `/root` → **Save**
5. Live at: `https://YOUR-USERNAME.github.io/drive-with-waboraro/`

Takes 1–2 minutes to go live.

---

## 🛠️ Customisation

### Change Contact Details
Search & replace across all files:
- `+267 71 234 567` → your real number
- `hello@waboraro.co.bw` → your real email
- `@waboraro_drives` → real social handles

### Update Quiz Questions
Edit the `quizQuestions` array in `main.js`.

### Update Social Media Feed
Edit `socialPosts` and `wallComments` arrays in `main.js`.

### Change Videos
Replace the Pexels URLs in each `<source>` tag with your own videos.

### Study Guide
Edit `study-guide.html` — it's plain HTML, easy to update.

---

## 🎬 Video Backgrounds

Each page uses free Pexels videos as placeholders:
- **Home:** Driving / road footage
- **Lessons:** Teaching footage
- **Road Signs:** Traffic signage
- **About:** Personal/coaching
- **Pricing:** Car footage
- **Contact:** Ambience

Videos autoplay muted, loop, and pause automatically if the browser blocks them — the poster image remains visible.

---

## 💛 Made With Heart

This site was built **free of charge** for Waboraro — a Motswana educator helping hundreds pass their theory test.

Made in Gaborone, Botswana 🇧🇼
