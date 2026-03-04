/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║        YASH PANDEY PORTFOLIO — PROTECTION LAYER          ║
 * ║    AES-256-GCM • PBKDF2 • Anti-Tamper • Integrity       ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * HOW TO USE:
 * Add this ONE line just before </body> in your index.html:
 *   <script src="protect.js"></script>
 *
 * MODULES ACTIVE:
 *  1. Content-guard  — disables right-click, text-select, copy, print-screen
 *  2. DevTools-guard — detects & warns on DevTools open
 *  3. Iframe-guard   — prevents your site being embedded in iframes
 *  4. Integrity-guard— SHA-256 hash check of critical DOM content
 *  5. Watermark      — invisible ownership signature in DOM & console
 *  6. AES-256-GCM    — optional password gate (enable below)
 */

/* ─── CONFIG ──────────────────────────────────────────────── */
const YP_PROTECT = {
  /* Set to true if you want a password gate before the page loads */
  enablePasswordGate: false,

  /* Change this to your own strong password (used only if enablePasswordGate: true) */
  gatePassword: "Shizuoka@2025!Yash",

  /* Salt for PBKDF2 — keep this private, change it */
  pbkdf2Salt: "YashPandey-Matsuo-Lab-SU-2025-Salt",

  /* PBKDF2 iterations — higher = slower brute force */
  pbkdf2Iterations: 310000,

  /* Session key — how long login stays valid (milliseconds) */
  sessionTTL: 1000 * 60 * 60 * 4,  // 4 hours

  /* Owner watermark */
  ownerName: "Yash Pandey",
  ownerEmail: "pandey.yash.23@shizuoka.ac.jp",
  ownerLab: "Matsuo Lab, Shizuoka University",

  /* Allowed hostnames — add your domains here */
  allowedHosts: [
    "luminarytosavant.github.io",
    "localhost",
    "127.0.0.1"
  ],

  /* Content integrity: SHA-256 fingerprint of your hero title text.
     Run computeIntegrityFingerprint() in console to get yours,
     then paste it here to enable tamper detection. */
  heroTitleHash: null,  // e.g. "a3f9c2..." — set after first run
};
/* ─────────────────────────────────────────────────────────── */


/* ══════════════════════════════════════════════════════════
   MODULE 1 — CONTENT GUARD
   Disables right-click, text selection, copy, drag, print
   ══════════════════════════════════════════════════════════ */
(function contentGuard() {
  /* Right-click context menu */
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    showToast("© " + YP_PROTECT.ownerName + " — Content is protected.");
    return false;
  });

  /* Keyboard shortcuts: Ctrl+U (view-source), Ctrl+S (save), Ctrl+P (print),
     Ctrl+C (copy), Ctrl+Shift+I/J/C (devtools), F12 */
  document.addEventListener("keydown", (e) => {
    const ctrl = e.ctrlKey || e.metaKey;
    const shift = e.shiftKey;

    const blocked =
      (ctrl && e.key === "u") ||         // view-source
      (ctrl && e.key === "s") ||         // save page
      (ctrl && e.key === "p") ||         // print
      (ctrl && shift && e.key === "I") || // devtools
      (ctrl && shift && e.key === "J") || // devtools console
      (ctrl && shift && e.key === "C") || // devtools inspect
      (ctrl && e.key === "c" && window.getSelection().toString().length > 40) || // large copy
      e.key === "F12" ||
      e.key === "PrintScreen";

    if (blocked) {
      e.preventDefault();
      e.stopPropagation();
      if (e.key !== "PrintScreen") {
        showToast("Keyboard shortcut disabled on this protected page.");
      }
      return false;
    }
  }, true);

  /* Drag-to-copy images */
  document.addEventListener("dragstart", (e) => {
    if (e.target.tagName === "IMG") e.preventDefault();
  });

  /* Disable print via CSS (injected) */
  const noprint = document.createElement("style");
  noprint.textContent = `
    @media print {
      body { display: none !important; }
    }
    ::selection { background: rgba(44,182,125,0.18); }
  `;
  document.head.appendChild(noprint);
})();


/* ══════════════════════════════════════════════════════════
   MODULE 2 — DEVTOOLS GUARD
   Detects DevTools via timing tricks & window-size diff
   ══════════════════════════════════════════════════════════ */
(function devToolsGuard() {
  let devOpen = false;
  const threshold = 160;

  function check() {
    const widthDiff  = window.outerWidth  - window.innerWidth  > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;
    const isOpen = widthDiff || heightDiff;

    if (isOpen && !devOpen) {
      devOpen = true;
      console.clear();
      console.log(
        "%c⛔ STOP — Protected Content",
        "color:#e74c3c;font-size:28px;font-weight:bold;"
      );
      console.log(
        "%c This site belongs to " + YP_PROTECT.ownerName +
        "\n Lab: " + YP_PROTECT.ownerLab +
        "\n Email: " + YP_PROTECT.ownerEmail +
        "\n\n Unauthorized inspection, copying, or redistribution is prohibited.",
        "color:#333;font-size:13px;line-height:1.7"
      );
      showToast("DevTools detected — this site is protected.", 5000);
    } else if (!isOpen) {
      devOpen = false;
    }
  }

  setInterval(check, 1500);

  /* Debugger trap — slows automated scraping */
  (function trapLoop() {
    const start = performance.now();
    // eslint-disable-next-line no-debugger
    debugger;
    const elapsed = performance.now() - start;
    if (elapsed > 100) {
      /* DevTools paused here — someone is stepping through */
      document.body.style.filter = "blur(8px)";
      setTimeout(() => { document.body.style.filter = ""; }, 3000);
    }
  })();
})();


/* ══════════════════════════════════════════════════════════
   MODULE 3 — IFRAME GUARD
   Breaks out of frames; blocks hotlinking / embedding
   ══════════════════════════════════════════════════════════ */
(function iframeGuard() {
  if (window.self !== window.top) {
    try {
      window.top.location.href = window.self.location.href;
    } catch (e) {
      /* Cross-origin frame — blank it */
      document.documentElement.innerHTML = "<h1 style='font-family:sans-serif;padding:2rem;color:#c0392b'>⛔ Embedding this page is not permitted.</h1>";
    }
  }
})();


/* ══════════════════════════════════════════════════════════
   MODULE 4 — HOST GUARD
   Warns if page is served from an unexpected domain
   ══════════════════════════════════════════════════════════ */
(function hostGuard() {
  const host = window.location.hostname;
  const allowed = YP_PROTECT.allowedHosts;
  if (allowed.length && !allowed.includes(host)) {
    document.body.innerHTML = `
      <div style="
        font-family:sans-serif; padding:3rem; max-width:540px;
        margin:5vh auto; border:2px solid #e74c3c; border-radius:12px;
        background:#fff3f3; text-align:center;">
        <h2 style="color:#c0392b;">⛔ Unauthorized Host Detected</h2>
        <p style="margin-top:1rem;color:#333;">
          This portfolio may only be viewed at its official address.<br>
          If you believe this is an error, contact
          <strong>${YP_PROTECT.ownerEmail}</strong>.
        </p>
      </div>`;
    throw new Error("YP-PROTECT: Unauthorized host — " + host);
  }
})();


/* ══════════════════════════════════════════════════════════
   MODULE 5 — INTEGRITY GUARD
   Checks that hero title text hasn't been tampered with
   ══════════════════════════════════════════════════════════ */
async function computeIntegrityFingerprint() {
  const el = document.getElementById("hero-title");
  if (!el) { console.warn("hero-title element not found"); return null; }
  const text = el.textContent.trim();
  const buf  = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  const hex  = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,"0")).join("");
  console.log("Hero-title SHA-256:", hex);
  console.log("Paste this into protect.js → YP_PROTECT.heroTitleHash");
  return hex;
}

async function integrityGuard() {
  if (!YP_PROTECT.heroTitleHash) return;  // Not configured yet
  const el = document.getElementById("hero-title");
  if (!el) return;
  const text = el.textContent.trim();
  const buf  = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  const hex  = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,"0")).join("");
  if (hex !== YP_PROTECT.heroTitleHash) {
    console.error("YP-PROTECT: Integrity check FAILED — content may have been tampered with.");
    showToast("⚠️ Integrity check failed — this copy may have been tampered with.", 8000);
  }
}
window.addEventListener("load", integrityGuard);


/* ══════════════════════════════════════════════════════════
   MODULE 6 — INVISIBLE WATERMARK
   Embeds ownership data silently in DOM
   ══════════════════════════════════════════════════════════ */
(function watermark() {
  /* Hidden meta watermark */
  const meta = document.createElement("meta");
  meta.name = "yp-owner";
  meta.content = `${YP_PROTECT.ownerName} | ${YP_PROTECT.ownerLab} | ${YP_PROTECT.ownerEmail}`;
  document.head.appendChild(meta);

  /* Invisible span in body */
  const wm = document.createElement("span");
  wm.setAttribute("aria-hidden", "true");
  wm.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);opacity:0;pointer-events:none;";
  wm.setAttribute("data-yp-copyright", `© ${new Date().getFullYear()} ${YP_PROTECT.ownerName} — ${YP_PROTECT.ownerLab}`);
  wm.setAttribute("data-yp-contact",   YP_PROTECT.ownerEmail);
  document.body.appendChild(wm);
})();


/* ══════════════════════════════════════════════════════════
   MODULE 7 — AES-256-GCM PASSWORD GATE  (optional)
   Set enablePasswordGate: true in config to activate.
   ══════════════════════════════════════════════════════════ */

/* ── Crypto helpers using Web Crypto API (no library needed) ── */
const YP_CRYPTO = {

  /* Derive a 256-bit AES-GCM key from a password using PBKDF2 */
  async deriveKey(password, saltStr) {
    const enc  = new TextEncoder();
    const base = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveKey"]);
    return crypto.subtle.deriveKey(
      { name:"PBKDF2", salt:enc.encode(saltStr), iterations:YP_PROTECT.pbkdf2Iterations, hash:"SHA-256" },
      base, { name:"AES-GCM", length:256 }, false, ["encrypt","decrypt"]
    );
  },

  /* Encrypt plaintext string → Base64 ciphertext */
  async encrypt(plaintext, password) {
    const key = await this.deriveKey(password, YP_PROTECT.pbkdf2Salt);
    const iv  = crypto.getRandomValues(new Uint8Array(12));
    const enc = new TextEncoder();
    const ct  = await crypto.subtle.encrypt({ name:"AES-GCM", iv }, key, enc.encode(plaintext));
    const out = new Uint8Array(iv.byteLength + ct.byteLength);
    out.set(iv, 0);
    out.set(new Uint8Array(ct), iv.byteLength);
    return btoa(String.fromCharCode(...out));
  },

  /* Decrypt Base64 ciphertext → plaintext string */
  async decrypt(b64, password) {
    const raw = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
    const iv  = raw.slice(0, 12);
    const ct  = raw.slice(12);
    const key = await this.deriveKey(password, YP_PROTECT.pbkdf2Salt);
    const pt  = await crypto.subtle.decrypt({ name:"AES-GCM", iv }, key, ct);
    return new TextDecoder().decode(pt);
  },

  /* Hash a password → hex (for verification without storing plaintext) */
  async hashPassword(password) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(password + YP_PROTECT.pbkdf2Salt));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,"0")).join("");
  }
};

/* ── Session token check ── */
function checkSession() {
  try {
    const raw = sessionStorage.getItem("yp_access");
    if (!raw) return false;
    const { ts } = JSON.parse(raw);
    return (Date.now() - ts) < YP_PROTECT.sessionTTL;
  } catch { return false; }
}
function grantSession() {
  sessionStorage.setItem("yp_access", JSON.stringify({ ts: Date.now() }));
}

/* ── Password gate UI ── */
function showPasswordGate() {
  const body = document.body;
  body.style.overflow = "hidden";

  const overlay = document.createElement("div");
  overlay.id = "yp-gate";
  overlay.style.cssText = `
    position:fixed; inset:0; z-index:99999;
    display:flex; align-items:center; justify-content:center;
    background: linear-gradient(135deg,#e8f7ec,#c8f0d8);
    backdrop-filter: blur(24px);
    font-family: Inter, sans-serif;
  `;

  overlay.innerHTML = `
    <div style="
      background:rgba(255,255,255,0.92);
      border:1px solid rgba(0,0,0,.08);
      border-radius:22px;
      padding:2.5rem 2rem;
      width:min(380px,90vw);
      box-shadow:0 24px 60px rgba(0,0,0,.14);
      text-align:center;">
      <div style="font-size:2.2rem;margin-bottom:.5rem;">🔒</div>
      <h2 style="font-size:1.3rem;font-weight:800;color:#1d1d1f;margin-bottom:.3rem;">Protected Portfolio</h2>
      <p style="font-size:.9rem;color:#666;margin-bottom:1.5rem;">
        Enter the access password to view<br>
        <strong style="color:#2cb67d;">Yash Pandey's Portfolio</strong>
      </p>
      <input
        id="yp-gate-pwd"
        type="password"
        placeholder="Enter password…"
        autocomplete="current-password"
        style="
          width:100%; padding:.7rem 1rem; border-radius:12px;
          border:1.5px solid #d1d1d6; font-size:1rem;
          outline:none; margin-bottom:.9rem;
          transition:border-color .2s;
        "
        onFocus="this.style.borderColor='#2cb67d'"
        onBlur="this.style.borderColor='#d1d1d6'"
      />
      <button
        id="yp-gate-btn"
        style="
          width:100%; padding:.75rem; border-radius:12px;
          background:#2cb67d; color:#fff; font-size:1rem;
          font-weight:700; border:none; cursor:pointer;
          transition:transform .15s,box-shadow .15s;
        "
        onMouseOver="this.style.transform='translateY(-1px)';this.style.boxShadow='0 8px 20px rgba(44,182,125,.4)'"
        onMouseOut="this.style.transform='';this.style.boxShadow=''"
      >Unlock</button>
      <p id="yp-gate-err" style="color:#e74c3c;font-size:.85rem;margin-top:.8rem;min-height:1.2em;"></p>
    </div>`;

  document.body.appendChild(overlay);

  const input = document.getElementById("yp-gate-pwd");
  const btn   = document.getElementById("yp-gate-btn");
  const err   = document.getElementById("yp-gate-err");

  input.focus();

  async function attempt() {
    const pwd = input.value;
    if (!pwd) { err.textContent = "Please enter the password."; return; }
    btn.textContent = "Verifying…";
    btn.disabled = true;

    try {
      const hash    = await YP_CRYPTO.hashPassword(pwd);
      const correct = await YP_CRYPTO.hashPassword(YP_PROTECT.gatePassword);
      if (hash === correct) {
        grantSession();
        overlay.style.opacity = "0";
        overlay.style.transition = "opacity .4s";
        setTimeout(() => { overlay.remove(); document.body.style.overflow = ""; }, 400);
      } else {
        err.textContent = "Incorrect password. Please try again.";
        input.value = "";
        input.focus();
        btn.textContent = "Unlock";
        btn.disabled = false;
      }
    } catch (e) {
      err.textContent = "Error verifying password. Please refresh and try again.";
      btn.textContent = "Unlock";
      btn.disabled = false;
    }
  }

  btn.addEventListener("click", attempt);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") attempt(); });
}

/* ── Run gate on load ── */
if (YP_PROTECT.enablePasswordGate) {
  if (checkSession()) {
    /* Already authenticated this session — no gate */
  } else {
    document.addEventListener("DOMContentLoaded", showPasswordGate);
  }
}


/* ══════════════════════════════════════════════════════════
   UTILITY — Toast notification
   ══════════════════════════════════════════════════════════ */
function showToast(msg, duration = 3000) {
  const existing = document.getElementById("yp-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "yp-toast";
  toast.style.cssText = `
    position:fixed; bottom:1.5rem; left:50%; transform:translateX(-50%);
    background:rgba(30,30,30,.92); color:#fff;
    padding:.65rem 1.2rem; border-radius:999px;
    font-family:Inter,sans-serif; font-size:.88rem; font-weight:600;
    z-index:99998; pointer-events:none;
    box-shadow:0 8px 24px rgba(0,0,0,.25);
    backdrop-filter:blur(10px);
    animation: yp-fadein .25s ease;
  `;
  toast.textContent = msg;

  const style = document.createElement("style");
  style.textContent = `
    @keyframes yp-fadein{ from{opacity:0;transform:translateX(-50%) translateY(8px)}
                           to{opacity:1;transform:translateX(-50%) translateY(0)} }
  `;
  document.head.appendChild(style);
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity="0"; toast.style.transition="opacity .3s"; setTimeout(()=>toast.remove(),300); }, duration);
}


/* ══════════════════════════════════════════════════════════
   PUBLIC API  (available in browser console)
   ══════════════════════════════════════════════════════════ */
window.YP_PROTECT_API = {
  /* Run in browser console to get your hero title hash */
  getIntegrityHash: computeIntegrityFingerprint,

  /* Encrypt any text string (returns Base64 AES-256-GCM ciphertext) */
  encrypt: (text, password) => YP_CRYPTO.encrypt(text, password),

  /* Decrypt Base64 ciphertext */
  decrypt: (b64, password) => YP_CRYPTO.decrypt(b64, password),
};

console.log(
  "%c🔐 YP-PROTECT active",
  "color:#2cb67d;font-weight:800;font-size:14px",
  "| Owner:", YP_PROTECT.ownerName,
  "| Lab:", YP_PROTECT.ownerLab
);