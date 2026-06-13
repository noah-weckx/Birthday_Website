// ── Scroll animation: progress bars ──────────────────────
const animateBars = () => {
  document.querySelectorAll('.progress-bar__fill').forEach(bar => {
    const rect = bar.closest('.progress-row').getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      const w = bar.dataset.width;
      if (bar.style.width === '0%') {
        bar.style.width = w + '%';
        // animate the number counter
        const pct = bar.closest('.progress-row').querySelector('.progress-row__pct');
        if (pct) {
          const target = parseInt(pct.dataset.target);
          let current = 0;
          const step = target / 50;
          const counter = setInterval(() => {
            current = Math.min(current + step, target);
            pct.textContent = Math.round(current) + '%';
            if (current >= target) clearInterval(counter);
          }, 20);
        }
      }
    }
  });
};
window.addEventListener('scroll', animateBars, { passive: true });
setTimeout(animateBars, 400); // trigger on load too

// ── Toast helper ─────────────────────────────────────────
const toastEl   = document.getElementById('toast');
const toastText = document.getElementById('toast-text');
const toastIcon = document.getElementById('toast-icon');
let toastTimer;

function showToast(msg, icon = '✓') {
  toastText.textContent = msg;
  toastIcon.textContent = icon;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2600);
}

// ── Interactive rows ──────────────────────────────────────
const rowMessages = {
  'trait-kindness':    ['💛', 'Kindness level: immutable. This is a read-only field.'],
  'trait-humor':       ['😂', 'Humor settings updated. (They were already perfect.)'],
  'trait-loyalty':     ['🤝', 'Loyalty: locked at maximum. Cannot be changed.'],
  'trait-adventure':   ['🗺️', 'Adventure mode: always on. No off switch found.'],
  'trait-chaos':       ['⚡', 'Chaos energy recalibrated. Good luck.'],
  'trait-passion':     ['🔥', 'Passion settings confirmed. Burning bright.'],
  'pref-vibe':         ['🌊', 'Vibe updated. Atmosphere adjusted accordingly.'],
  'pref-language':     ['🗣️', 'Language preference noted. Fluency verified.'],
  'pref-quality':      ['💎', 'Already at 4K Ultra HD. Nothing higher exists.'],
  'action-wishlist':   ['⭐', 'Season 21 wishlist opened. Dream big.'],
  'action-share':      ['📤', 'Profile link copied! Share your story.'],
  'action-credits':    ['🎬', 'Rolling credits… thank you for watching.'],
  'memory-1':          ['👶', 'Loading The Origin Story… 2006. The beginning.'],
  'memory-2':          ['🏙️', 'Köln Arc: fan-favourite episode. Playing now.'],
  'memory-3':          ['🍕', 'The Pizza Summit. A historic moment.'],
  'memory-4':          ['👩‍🍳', 'The Cooking Chronicles. Masterpiece unlocked.'],
  'memory-5':          ['🦝', 'The Raccoon Incident. Classified content.'],
  'memory-6':          ['🎂', 'Season 20 Premiere. Happy birthday, Amalia! 🎉'],
};

document.querySelectorAll('.settings-row[id], .memory-card[id]').forEach(el => {
  const id = el.id;
  const handler = (e) => {
    // Don't trigger if clicking a toggle
    if (e.target.closest('.toggle')) return;
    if (rowMessages[id]) {
      const [icon, msg] = rowMessages[id];
      showToast(msg, icon);
    }
  };
  el.addEventListener('click', handler);
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(e); }
  });
});

// ── Toggle toasts ─────────────────────────────────────────
const toggleMsgs = {
  'toggle-chaos':         ['⚡', 'Chaos energy {state}. Universe notified.'],
  'toggle-passion':       ['🔥', 'Passion {state}. The fire {verb}.'],
  'toggle-autoplay':      ['▶️', 'Autoplay {state}. Next adventure loading…'],
  'toggle-notifications': ['🔔', 'Birthday reminders {state}. June 21st is sacred.'],
};
Object.entries(toggleMsgs).forEach(([id, [icon, template]]) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('change', () => {
    const on = el.checked;
    const msg = template
      .replace('{state}', on ? 'enabled' : 'disabled')
      .replace('{verb}', on ? 'rages on' : 'dims briefly');
    showToast(msg, icon);
  });
});
