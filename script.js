// SecureScan Triage & Scanner Logic
document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    document.getElementById('theme-toggle').innerText = newTheme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode';
});

// Scan Simulation
const scanForm = document.getElementById('scan-form');
const terminalSection = document.getElementById('terminal-section');
const terminalLog = document.getElementById('terminal-log');
const btnSpinner = document.getElementById('btn-spinner');

scanForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const targetUrl = document.getElementById('target-url').value;
    
    terminalSection.style.display = 'block';
    terminalLog.innerHTML = '';
    btnSpinner.style.display = 'inline-block';

    const logs = [
        `[+] Initializing SecureScan engine for https://${targetUrl}...`,
        `[+] Crawling endpoints & parsing application inputs...`,
        `[*] Testing A01:2021 - Broken Access Control on /user/profile`,
        `[!] High Severity Found: Reflected XSS detected on /user/profile`,
        `[*] Testing A03:2021 - Injection patterns on /api/v1/search`,
        `[!] Critical Severity Found: SQL Injection confirmed via time-based payload`,
        `[*] Checking HTTP Header Configuration...`,
        `[!] Warning: Missing HSTS and Content-Security-Policy headers`,
        `[+] Scan completed. Updating OWASP triage metrics dashboard.`
    ];

    logs.forEach((log, index) => {
        setTimeout(() => {
            const entry = document.createElement('div');
            entry.className = 'log-entry';
            if (log.includes('Critical') || log.includes('High')) entry.classList.add('error');
            else if (log.includes('Warning')) entry.classList.add('warn');
            else if (log.includes('completed')) entry.classList.add('success');
            
            entry.textContent = log;
            terminalLog.appendChild(entry);
            terminalLog.scrollTop = terminalLog.scrollHeight;

            if (index === logs.length - 1) {
                btnSpinner.style.display = 'none';
            }
        }, (index + 1) * 600);
    });
});

// Vulnerability Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const vulnCards = document.querySelectorAll('.vuln-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        vulnCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-severity') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Report Exports
document.getElementById('export-json').addEventListener('click', () => {
    const data = {
        scan_target: document.getElementById('target-url').value || "example.com",
        timestamp: new Date().toISOString(),
        owasp_alignment: "2021 Top 10",
        summary: { critical: 2, high: 4, medium: 7, low: 12 },
        findings: [
            { id: "SEC-001", type: "SQL Injection", severity: "Critical", owasp: "A03:2021", cwe: "CWE-89" },
            { id: "SEC-002", type: "Reflected XSS", severity: "High", owasp: "A01:2021", cwe: "CWE-79" }
        ]
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'securescan-triage-report.json';
    a.click();
});

document.getElementById('export-report').addEventListener('click', () => {
    alert('Generating PDF summary report... File download started.');
});
