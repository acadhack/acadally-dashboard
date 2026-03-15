/**
 * landing.js — Landing page: hero reveal, typing, cursor glow, coords.
 * All stats load dynamically from meta.json.
 * acad_INFO v5.0
 */

/* ── 120fps Hero letter-by-letter reveal ──────────── */

function initHeroReveal() {
    const lines = document.querySelectorAll('.hero-line');
    if (!lines.length) return;

    lines.forEach(line => {
        const text = line.textContent;
        line.textContent = '';
        line.classList.add('hero-gradient');

        const chars = [];
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.className = 'hero-char';
            span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
            span.style.opacity = '0';
            span.style.transform = 'translateY(100%)';
            line.appendChild(span);
            chars.push(span);
        }
        line._chars = chars;
    });

    // Observe for scroll visibility
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            obs.unobserve(e.target);
            animateHeroLines(lines);
        });
    }, { threshold: 0.3 });

    obs.observe(lines[0].closest('.hero-inner') || lines[0]);
}

function animateHeroLines(lines) {
    let globalDelay = 0;

    lines.forEach((line, lineIdx) => {
        const chars = line._chars;
        if (!chars) return;

        const lineDelay = lineIdx * 300; // stagger between lines

        chars.forEach((span, charIdx) => {
            const delay = lineDelay + charIdx * 30;
            const startTime = performance.now() + delay;
            const duration = 600;

            function animate(now) {
                const elapsed = now - startTime;
                if (elapsed < 0) {
                    requestAnimationFrame(animate);
                    return;
                }

                const t = Math.min(elapsed / duration, 1);
                // Smooth ease-out cubic
                const eased = 1 - Math.pow(1 - t, 3);

                span.style.opacity = eased;
                span.style.transform = `translateY(${(1 - eased) * 100}%)`;

                if (t < 1) requestAnimationFrame(animate);
            }

            requestAnimationFrame(animate);
        });
    });
}


/* ── Typing effect with realistic mistakes ────────── */

function typeWithMistakes(el, phrases, opts = {}) {
    const {
        typeSpeed   = 55,
        deleteSpeed = 30,
        pauseAfter  = 2600,
        mistakeRate = 0.05,
    } = opts;

    const textEl = el.querySelector('.hero-typing-text');
    if (!textEl) return;

    let phraseIdx = 0, charIdx = 0, deleting = false;
    let current = '', mistakeBuffer = '', isCorrecting = false;

    function nearby(ch) {
        const map = {
            a:'sq',b:'vn',c:'xv',d:'sf',e:'wr',f:'dg',g:'fh',h:'gj',
            i:'uo',j:'hk',k:'jl',l:'k;',m:'n,',n:'bm',o:'ip',p:'o[',
            q:'wa',r:'et',s:'ad',t:'ry',u:'yi',v:'cb',w:'qe',x:'zc',
            y:'tu',z:'xa',' ':' ',
        };
        const pool = map[ch.toLowerCase()] || ch;
        return pool[Math.floor(Math.random() * pool.length)];
    }

    function tick() {
        const phrase = phrases[phraseIdx];

        if (isCorrecting) {
            current = current.slice(0, -1);
            textEl.textContent = current;
            if (current.length <= charIdx) {
                isCorrecting = false;
                setTimeout(tick, typeSpeed + Math.random() * 40);
            } else {
                setTimeout(tick, deleteSpeed);
            }
            return;
        }

        if (!deleting) {
            if (charIdx < phrase.length) {
                const ch = phrase[charIdx];
                if (!mistakeBuffer && Math.random() < mistakeRate && charIdx > 2) {
                    current += nearby(ch);
                    mistakeBuffer = ch;
                    textEl.textContent = current;
                    setTimeout(() => {
                        isCorrecting = true;
                        setTimeout(tick, 150 + Math.random() * 100);
                    }, 200 + Math.random() * 150);
                    return;
                }
                if (mistakeBuffer) {
                    current += mistakeBuffer;
                    mistakeBuffer = '';
                    charIdx++;
                } else {
                    current += ch;
                    charIdx++;
                }
                textEl.textContent = current;
                let d = typeSpeed + Math.random() * 30;
                if (ch === '.' || ch === ',') d += 200;
                if (ch === ' ') d += 40;
                setTimeout(tick, d);
            } else {
                setTimeout(() => { deleting = true; tick(); }, pauseAfter);
            }
        } else {
            if (current.length > 0) {
                current = current.slice(0, -1);
                textEl.textContent = current;
                setTimeout(tick, deleteSpeed + Math.random() * 15);
            } else {
                deleting = false;
                charIdx = 0;
                phraseIdx = (phraseIdx + 1) % phrases.length;
                setTimeout(tick, 400);
            }
        }
    }

    setTimeout(tick, 2000);
}


/* ── Cursor glow orb ─────────────────────────────── */

function initCursorGlow() {
    if (window.matchMedia('(hover: none)').matches) return;
    if (window.matchMedia('(max-width: 480px)').matches) return;

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    let targetX = -400, targetY = -400;
    let currentX = -400, currentY = -400;
    const lerp = 0.08;

    document.addEventListener('mousemove', e => {
        targetX = e.clientX - 200;
        targetY = e.clientY - 200;
        if (!glow.classList.contains('visible')) glow.classList.add('visible');
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
        glow.classList.remove('visible');
    });

    function tick() {
        currentX += (targetX - currentX) * lerp;
        currentY += (targetY - currentY) * lerp;
        glow.style.transform = `translate(${currentX}px, ${currentY}px)`;
        requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}


function initCoords() {
    const el = document.querySelector('.l-nav-coords');
    if (!el) return;
    document.addEventListener('mousemove', e => {
        el.textContent = `X:${String(e.clientX).padStart(4,'0')} Y:${String(e.clientY).padStart(4,'0')}`;
    });
}


/* ── Format the "last updated" display ────────────── */

function formatUpdated(isoString) {
    try {
        const d = new Date(isoString);
        const now = new Date();
        const diffMs = now - d;
        const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMins = Math.floor(diffMs / (1000 * 60));

        let relative;
        if (diffMins < 1) relative = 'just now';
        else if (diffMins < 60) relative = `${diffMins}m ago`;
        else if (diffHrs < 24) relative = `${diffHrs}h ago`;
        else {
            const diffDays = Math.floor(diffHrs / 24);
            relative = `${diffDays}d ago`;
        }

        const dateStr = d.toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric'
        });
        const timeStr = d.toLocaleTimeString('en-US', {
            hour: '2-digit', minute: '2-digit', hour12: false
        });

        return { relative, full: `${dateStr} at ${timeStr}` };
    } catch (e) {
        return { relative: '', full: '' };
    }
}


/* ── Init ─────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', async () => {
    let meta = null;

    try {
        const r = await fetch('data/meta.json');
        if (r.ok) {
            meta = await r.json();

            // Set all counter targets from live data
            document.querySelectorAll('.counter[data-key]').forEach(el => {
                const key = el.dataset.key;
                let val;
                if (key === 'total_schools') {
                    val = (meta.schools || []).length;
                } else {
                    val = meta[key];
                }
                if (val != null) el.dataset.target = val;
            });

                // Update the "last updated" badge
                if (meta.last_updated) {
                    const updated = formatUpdated(meta.last_updated);
                    const updatedEl = document.getElementById('landing-updated');
                    if (updatedEl) {
                        updatedEl.textContent = `UPDATED ${updated.relative.toUpperCase()}`;
                        updatedEl.title = updated.full;
                    }
                }

                // Update typing phrases with live data
                const studentCount = (meta.total_students || 0).toLocaleString();
                const teacherCount = meta.total_teachers_found || 0;

                // Dynamically build phrases with real numbers
                window._typingPhrases = [
                    `All data extracted. No rate limits encountered.`,
                    `${studentCount} student profiles. 18 fields each. Indexed.`,
                    `Default passwords. Predictable usernames. Zero friction.`,
                    `${teacherCount} teacher accounts discovered and explored.`,
                    `The system had no defenses. We walked in.`,
                ];
        }
    } catch (_) {}

    initPage();
    initHeroReveal();
    initCursorGlow();
    initCoords();

    const typingEl = document.querySelector('.hero-typing');
    if (typingEl) {
        const phrases = window._typingPhrases || [
            'All data extracted. No rate limits encountered.',
            'Default passwords. Predictable usernames. Zero friction.',
            'The system had no defenses. We walked in.',
        ];
        typeWithMistakes(typingEl, phrases);
    }
});
