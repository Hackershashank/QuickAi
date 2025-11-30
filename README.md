# ⚡ Quick AI — Multi-Tool AI Platform Powered by Google Gemini

Quick AI is an advanced and responsive AI-powered application that brings multiple intelligent tools together in one platform.  
Powered by the **Google Gemini API** and built with the **PERN Stack**, this app delivers fast, scalable, and real-time AI responses with a clean and modern UI.

---

## 🚀 Features

✔️ **Resume Analyzer** — Analyze resumes and generate insights, improvement suggestions, and ATS-friendly feedback.  
✔️ **Code Generator** — Generate code in multiple languages, debug existing code, and improve logic.  
✔️ **Image Generator** — Create AI-generated images using text prompts.  
✔️ **Highly Responsive UI** — Modern design with mobile-first responsiveness and smooth UX.  
✔️ **Secure & Scalable Backend** — JWT authentication, protected API routing, and database integration.

---

## 🛠️ Tech Stack

| Category | Tools / Technologies |
|---------|----------------------|
| Frontend | React, TailwindCSS, Context API / Redux (optional) |
| Backend | Node.js, Express.js |
| Database | PostgreSQL |
| AI Integration | Google Gemini API |
| Deployment | Vercel / Render / Railway (optional) |

---

## 🔧 System Architecture

Frontend (React + Tailwind)
⬇️
Backend (Express + Gemini API)
⬇️
Database (PostgreSQL)
---

## 📸 Screenshots
Home page
<img width="2128" height="1139" alt="home" src="https://github.com/user-attachments/assets/50c98d88-0f6f-4622-a99a-970974546c11" /> 
DashBoard page
<img width="2135" height="1142" alt="dashboard" src="https://github.com/user-attachments/assets/1aac3426-88d1-4d49-b517-cd1f5b864b97" />
Tools page
<img width="2135" height="1146" alt="tool" src="https://github.com/user-attachments/assets/337ea416-4a1b-4cdc-bcf7-f1f0f935cdea" />


---

## 📁 Project Structure


```plaintext
quick-ai/
│── client/                # Frontend (React + Tailwind)
│── server/                # Backend (Node + Express)
│── .env                   # API Keys and secrets
│── package.json
│── README.md
```

---

## ▶️ Run Locally

### 1️⃣ Clone Repository
```bash
git clone <repository-url>
cd quick-ai
```
2️⃣ Install Dependencies
```bash
npm install
cd client && npm install
cd ../server && npm install
```
3️⃣ Add Environment Variables
Create a .env file in /server:
```bash
# Database
DATABASE_URL=

# Clerk
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Api
GEMINI_API_KEY=
CLIPDROP_API_KEY=

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=z
```
Create a .env file in /client:
```bash
VITE_CLERK_PUBLISHABLE_KEY=pk_test_ZGFybGluZy1mYXduLTMxLmNsZXJrLmFjY291bnRzLmRldiQ
VITE_BASE_URL=http://localhost:3000
```

4️⃣ Start Application
Backend:
```bash
cd server
npm run dev
```
Frontend:
```bash
cd client
npm run dev
```

🔒 Security
Uses JWT authentication for securing API endpoints
Environment variables stored securely (not committed to GitHub)

📈 Future Enhancements
🔹 Voice-to-text AI interaction
🔹 AI PDF / Document Chat
🔹 Cloud storage support
🔹 Model fine-tuning and custom embeddings

🤝 Contributing
Pull requests are welcome!
For major changes, please open an issue to discuss what you'd like to modify.

📄 License
This project is licensed under the MIT License.

⭐ Support
If you like this project, consider giving it a star 🌟 — it helps a lot!
