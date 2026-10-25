# SecureScan 🛡️
> An automated web vulnerability scanner with an OWASP-aligned reporting dashboard for quick security triage.

## 🚀 Overview
SecureScan simplifies web application security assessments by pairing automated scanning capabilities with an intuitive OWASP Top 10 triage interface. Designed for security engineers and developers to quickly identify, categorize, and remediate web vulnerabilities.

## 📂 Project Structure
```
securescan/
├── index.html        # Main OWASP Dashboard & Scanner Interface
├── css/
│   └── style.css     # Cybersecurity Dark Theme & Metric Layouts
├── js/
│   └── script.js     # Scan Console Simulation, Filters & Exporting
└── README.md         # Documentation & Setup Guide
```

## 🛠️ Features
- **OWASP Top 10 Mapping:** Direct categorization to modern OWASP security standards (Injection, Broken Access Control, Misconfigurations).
- **Interactive Scan Engine:** Simulated live scanner console with real-time log outputs.
- **Triage Dashboard:** Categorized vulnerability cards sorted by Critical, High, and Medium severities.
- **JSON & Report Exporting:** Instant generation of machine-readable vulnerability reports.

## 📦 How to Push to GitHub
1. Download and extract `securescan.zip`.
2. Open terminal inside the project directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Add SecureScan project"
   ```
3. Link to your GitHub account and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/SecureScan.git
   git push -u origin main
   ```
