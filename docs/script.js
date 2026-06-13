/* ============================================================
   AMALIAFLIX – JavaScript
   script.js
   ============================================================ */

(function () {
  'use strict';

  // ============================================================
  // CARD DATA
  // Each entry maps to a card id and carries all modal content.
  // ============================================================
  const CARD_DATA = {

    // ── ROW 1: Just the Two of You ───────────────────────────
    'r1-c1': {
      title:    'Drinking Diaries',
      image:    'imgs/Just the Two of You/Snapchat-1022523399.jpg',
      match:    '98% Match',
      newEp:    false,
      year:     '2025-2026',
      duration: '1 Season · 10 Episodes',
      desc:     'A decades-long unscripted series documenting two people who absolutely should not be trusted to plan anything, yet somehow keep doing exactly that. Features back-to-back terrible ideas, zero regrets, and an impossibly high rate of "this is actually kind of iconic in retrospect." Critics say: "Somehow works every time."',
      meta: [
        { label: 'Cast:',    value: 'Amalia Cember (known for being a passenger princess), Noah Weckx (known for paying even if it means getting yelled at)' },
        { label: 'Genre:',   value: 'Buddy Comedy, Reality' },
        { label: 'Tone:',    value: 'Pure Chaos' },
        { label: 'Rating:',  value: '5/5' },
      ],
    },

    'r1-c2': {
      title:    'Down for Anything: A Documentary',
      image:    'imgs/Just the Two of You/Snapchat-1174439249.jpg',
      match:    null,
      newEp:    true,
      year:     '2024',
      duration: 'Ongoing',
      desc:     "Amaliaflix's algorithm has determined — with 100% confidence — that this is one of the top buddy comedies currently filming in the region. New episodes drop unpredictably, often at 2am, and always involve a situation that makes complete sense at the time. Now in its third consecutive 'best season yet.'.",
      meta: [
        { label: 'Cast:',    value: 'The Dynamic Duo (played by Amalia Cember and Noah Weckx)' },
        { label: 'Genre:',   value: 'Comedy, Friendship, Late Nights' },
        { label: 'Network:', value: 'Amaliaflix Originals' },
        { label: 'Vibe:',    value: 'Impulsive Chaos' },
      ],
    },

    'r1-c3': {
      title:    'Possibly Adorable',
      image:    'imgs/Just the Two of You/Snapchat-1669896129.jpg',
      match:    null,
      newEp:    false,
      year:     '2006–Present',
      duration: 'Unlimited Episodes',
      desc:     'An anthology series collecting the most spectacular, well-intentioned disasters in recent memory. What separates this from lesser disaster content is the sheer artistic commitment — every catastrophe is approached with full confidence and zero contingency planning. Awarded "Best Unplanned Adventure" three years running.',
      meta: [
        { label: 'Cast:',    value: 'The Dynamic Duo (played by Amalia Cember and Noah Weckx)' },
        { label: 'Genre:',   value: 'Drama, Comedy, Documentary' },
        { label: 'Acclaim:', value: 'Critically Acclaimed' },
        { label: 'Regrets:', value: 'None Whatsoever' },
      ],
    },

    'r1-c4': {
      title:    'Unscripted Reality: Season 20',
      image:    'imgs/Just the Two of You/Snapchat-196099087.jpg',
      match:    null,
      newEp:    true,
      year:     '2026',
      duration: 'Season 20 · New',
      desc:     'The landmark 20th season of the longest-running unscripted reality show in Amaliaflix history. This season follows our subject as she enters her third decade — somehow more chaotic, more radiant, and more herself than ever. Producers confirm there is still no script, no safety net, and no signs of slowing down.',
      meta: [
        { label: 'Season:',  value: '20 (The Big One)' },
        { label: 'Genre:',   value: 'Reality, Coming-of-Age' },
        { label: 'Status:',  value: '🎬 Currently Filming' },
        { label: 'Verdict:', value: 'Best season yet' },
      ],
    },

    'r1-c5': {
      title:    'Portrait of a Young Woman: Unfiltered',
      image:    'imgs/Just the Two of You/Selfie_5.jpg',
      match:    '94% Match',
      newEp:    false,
      year:     '2026',
      duration: 'Short Film',
      desc:     "A quiet, unscripted portrait study. No context, no caption, no explanation. Just a single frame that somehow says more than a whole season of any other show on the platform. Critics have called it 'devastating in its simplicity.' The director says she was just messing around. Same thing, really.",
      meta: [
        { label: 'Genre:',    value: 'Portrait, Art House, Short Film' },
        { label: 'Runtime:',  value: 'One frame, infinite meaning' },
        { label: 'Director:', value: 'Whoever had the camera' },
        { label: 'Verdict:',  value: 'Quietly iconic' },
      ],
    },

    'r1-c6': {
      title:    'Notes from the Field: Object Study',
      image:    'imgs/Just the Two of You/legos_notes_two_of_us.jpg',
      match:    null,
      newEp:    true,
      year:     '2026',
      duration: 'Miniseries',
      desc:     "An intimate still-life documentary cataloguing the objects left behind by two people who spend too much time together. Legos. Notes. The accumulated material evidence of a friendship conducted at full creative capacity. Curators are still debating whether this counts as art. The subjects don't care.",
      meta: [
        { label: 'Genre:',   value: 'Documentary, Still Life, Weird' },
        { label: 'Objects:', value: 'Legos, handwriting, vibes' },
        { label: 'Context:', value: 'Extremely specific' },
        { label: 'Status:',  value: 'New installment just dropped' },
      ],
    },

    // ── ROW 2: The Group Pictures ────────────────────────────
    'r2-c1': {
      title:    'Award-Winning Group Projects',
      image:    'imgs/The Group Pictures/20260511_171735.jpg',
      match:    null,
      newEp:    false,
      year:     '2024–2026',
      duration: 'Feature Length',
      desc:     'A sprawling ensemble piece documenting the rare phenomenon of a group of people who actually like each other. Unlike most group projects — which descend into chaos and resentment — this one somehow produced award-quality results. Nominated for Outstanding Chemistry and Best Collective Outfit Coordination.',
      meta: [
        { label: 'Cast:',    value: 'The Full Ensemble' },
        { label: 'Genre:',   value: 'Ensemble Drama, Feel-Good' },
        { label: 'Awards:',  value: '🏆 Multiple Nominations' },
        { label: 'Snacks:',  value: 'Confirmed Present' },
      ],
    },

    'r2-c2': {
      title:    'Teammate Drama & Betrayals',
      image:    'imgs/The Group Pictures/IMG_20260504_120258_643.jpg',
      match:    '95% Match',
      newEp:    false,
      year:     '2025',
      duration: '6 Episodes',
      desc:     "A tightly-plotted limited series exploring the interpersonal dynamics of a tight-knit group under pressure. Contains: exactly one mild betrayal (later resolved), several moments of 'I can't believe you did that,' and an emotionally satisfying finale where everyone ends up at someone's house eating chips. Highly recommended.",
      meta: [
        { label: 'Cast:',     value: 'The Inner Circle' },
        { label: 'Genre:',    value: 'Drama, Friendship, Light Chaos' },
        { label: 'Episodes:', value: '6 · Bingeable' },
        { label: 'Outcome:',  value: 'They made up, obviously' },
      ],
    },

    'r2-c3': {
      title:    'Epic Crossovers',
      image:    'imgs/The Group Pictures/IMG-20260519-WA0002.jpg',
      match:    null,
      newEp:    true,
      year:     '2026',
      duration: 'Crossover Event',
      desc:     'When multiple friend groups collide in one cinematic event, you either get chaos or magic. This is both. The definitive crossover episode, bringing together characters from separate storylines in a single, unmissable gathering. New episodes of this crossover series are still airing — and apparently getting bigger every time.',
      meta: [
        { label: 'Event:',   value: 'Crossover Special' },
        { label: 'Genre:',   value: 'Action-Comedy, Event TV' },
        { label: 'Scale:',   value: 'Increasingly Large' },
        { label: 'Verdict:', value: 'Worth the hype' },
      ],
    },

    'r2-c4': {
      title:    'Ensemble Casts You May Know',
      image:    'imgs/The Group Pictures/Snapchat-1970759983.jpg',
      match:    null,
      newEp:    false,
      year:     '2024–2026',
      duration: 'Ongoing Series',
      desc:     'A recurring anthology featuring a rotating cast of familiar faces — the people who keep showing up, keep making things better, and are somehow always exactly where the story needs them to be. The algorithm keeps recommending this one because, statistically speaking, you already know half these people.',
      meta: [
        { label: 'Cast:',    value: 'You Probably Know Them' },
        { label: 'Genre:',   value: 'Ensemble, Slice of Life' },
        { label: 'Vibe:',    value: 'Warm, chaotic, perfect' },
        { label: 'Status:',  value: 'Renewed · Always' },
      ],
    },

    'r2-c5': {
      title:    'MasterChef: The Friend Group Edition',
      image:    'imgs/The Group Pictures/cooking_group_pic.jpg',
      match:    null,
      newEp:    true,
      year:     '2026',
      duration: '1 Season · Ongoing',
      desc:     "A culinary competition series in which the stakes are unclear, the recipes are improvised, and nobody actually agreed to be judged. Features: a kitchen that was not designed for this many people, at least one moment of genuine teamwork, and a final dish that was better than anyone expected. Renewed for another season immediately.",
      meta: [
        { label: 'Genre:',    value: 'Cooking, Reality, Chaos' },
        { label: 'Judges:',   value: 'Everyone, simultaneously' },
        { label: 'Result:',   value: 'Actually really good' },
        { label: 'Renewed:',  value: 'Yes, indefinitely' },
      ],
    },

    'r2-c6': {
      title:    'The Great Pizza Symposium',
      image:    'imgs/The Group Pictures/pizza_day_group.jpg',
      match:    '91% Match',
      newEp:    false,
      year:     '2026',
      duration: 'Feature Event',
      desc:     "Gathered around a table. Pizza in front of them. Nothing else matters. This documentary captures a recurring phenomenon in which a group of people achieve perfect harmony through the simple act of eating pizza together. Scientists cannot explain it. We are not asking them to. This is a sacred tradition and it will continue.",
      meta: [
        { label: 'Genre:',    value: 'Slice of Life (literally)' },
        { label: 'Topping:',  value: 'Classified' },
        { label: 'Recurs:',   value: 'As often as possible' },
        { label: 'Verdict:',  value: 'Peak civilization' },
      ],
    },

    // ── ROW 3: The Lore & Inside Jokes ───────────────────────
    'r3-c1': {
      title:    'Nature & Wildlife: Raccoon Edition',
      image:    'imgs/The Lore & Inside Jokes/20260317_203804.jpg',
      match:    '99% Match',
      newEp:    false,
      year:     '2026',
      duration: '1 Season · 4 Episodes',
      desc:     "A bold entry into the nature documentary genre. This one takes an unflinching, David Attenborough-level lens to a subject that is deeply specific and will mean absolutely nothing to anyone who wasn't there — but will cause anyone who WAS there to absolutely lose it. Paired best with the inside knowledge required to understand why this is so funny.",
      meta: [
        { label: 'Genre:',   value: 'Wildlife Doc, Absurdist Comedy' },
        { label: 'Runtime:', value: 'Short but devastating' },
        { label: 'Context:', value: 'Required (ask Amalia)' },
        { label: 'Match:',   value: '99% if you know, you know' },
      ],
    },

    'r3-c2': {
      title:    'Sci-Fi, Fantasy & Girl Math',
      image:    'imgs/The Lore & Inside Jokes/Screenshot_20260604_220347_Samsung Notes.jpg',
      match:    null,
      newEp:    false,
      year:     '2025–2026',
      duration: 'Ongoing',
      desc:     'A genre-defying series that blends hard science fiction, high fantasy, and the uniquely powerful economic theory known as Girl Math. Watch as our protagonist constructs flawless logical frameworks for decisions that are, objectively, completely insane. The reasoning is airtight. The conclusions are chaotic. The vibes are immaculate.',
      meta: [
        { label: 'Genre:',   value: 'Sci-Fi, Fantasy, Economics' },
        { label: 'Logic:',   value: 'Internally consistent' },
        { label: 'Budget:',  value: 'Technically free (Girl Math)' },
        { label: 'Rating:',  value: '10/10 would justify again' },
      ],
    },

    'r3-c3': {
      title:    'Psychological Thrillers (Our Text History)',
      image:    'imgs/The Lore & Inside Jokes/Screenshot_20260604_220450_TikTok.jpg',
      match:    null,
      newEp:    false,
      year:     '2024–Present',
      duration: 'Infinite Episodes',
      desc:     'Scroll back far enough and you have a full psychological thriller on your hands. This documentary series archives the raw, unedited transcript of a friendship conducted largely via text message — featuring: the panic texts, the 3am rambles, the "okay but hear me out" chains, and at least one conversation that should probably be studied by scientists.',
      meta: [
        { label: 'Genre:',    value: 'Thriller, Archives, Drama' },
        { label: 'Episodes:', value: 'Estimated 47,000+' },
        { label: 'Evidence:', value: 'Screenshot-preserved' },
        { label: 'Rating:',   value: 'Not suitable for parents' },
      ],
    },

    'r3-c4': {
      title:    'Gritty Documentaries: Enemy of the State',
      image:    'imgs/The Lore & Inside Jokes/we_were_liars_for_website.jpg',
      match:    '97% Match',
      newEp:    false,
      year:     '2026',
      duration: 'Feature Documentary',
      desc:     'A searing, gritty exposé about a rivalry so specific and so justified that it barely requires explanation. The subject of this documentary is the enemy. We know who they are. We do not need to elaborate. This is their story, told from the perspective of the righteous side. Critically acclaimed. Extremely cathartic.',
      meta: [
        { label: 'Genre:',   value: 'Documentary, True Crime Adjacent' },
        { label: 'Subject:', value: 'The Enemy (you know who)' },
        { label: 'Verdict:', value: 'Completely in the wrong' },
        { label: 'Justice:', value: 'Pending' },
      ],
    },

    'r3-c5': {
      title:    'Creature Feature: A Love Story',
      image:    'imgs/The Lore & Inside Jokes/cute_little_guy_lore.jpg',
      match:    null,
      newEp:    true,
      year:     '2026',
      duration: '1 Episode · Legendary',
      desc:     "He is small. He is there. He did not ask to be part of the lore and yet here he is, fully part of the lore. This creature feature documents the unlikely encounter between an unremarkable little guy and two people who immediately decided he was the most important thing they had ever seen. He was not. And yet.",
      meta: [
        { label: 'Genre:',    value: 'Nature, Comedy, Creature Feature' },
        { label: 'Subject:',  value: 'A little guy' },
        { label: 'Threat level:', value: 'Zero. He is harmless.' },
        { label: 'Legacy:',   value: 'Immortalised' },
      ],
    },

    'r3-c6': {
      title:    'International Art House: Köln',
      image:    'imgs/The Lore & Inside Jokes/koln_fav_pic.jpg',
      match:    '96% Match',
      newEp:    false,
      year:     '2026',
      duration: 'Feature · Art House',
      desc:     "Submitted without comment to the international art house circuit, this entry from Köln speaks for itself. A favourite. The kind of image you take and immediately know you got it right — before you even lower the camera. No filter required. No context necessary. Just a place, and the people who were in it.",
      meta: [
        { label: 'Genre:',    value: 'Art House, International, Travel' },
        { label: 'Location:', value: 'Köln, Germany' },
        { label: 'Edited:',   value: 'Not at all. Didn\'t need it.' },
        { label: 'Rating:',   value: 'Certified favourite' },
      ],
    },

    // ── ROW 4: The Establishing Shots ────────────────────────
    'r4-c1': {
      title:    'Cinematic B-Roll & Establishing Shots',
      image:    'imgs/The Establishing Shots/20250928_164437.jpg',
      match:    null,
      newEp:    true,
      year:     '2025',
      duration: 'Ongoing Series',
      desc:     'The kind of shot a director uses to make you feel something before anything has even happened. This is a place. It has atmosphere. Something is about to begin here, or already ended, or both. New episodes of this ongoing series drop whenever somewhere beautiful gets pointed a camera at — which, it turns out, is fairly often.',
      meta: [
        { label: 'Genre:',    value: 'Cinematic, Travel, Atmospheric' },
        { label: 'Director:', value: 'Whoever had their phone out' },
        { label: 'Mood:',     value: 'Golden hour, always' },
        { label: 'Status:',   value: 'New Episodes Dropping' },
      ],
    },

    'r4-c2': {
      title:    'Action & Adventure: The Side Quests',
      image:    'imgs/The Establishing Shots/20260306_141510.jpg',
      match:    null,
      newEp:    false,
      year:     '2026',
      duration: '1 Season · 8 Episodes',
      desc:     "Not every adventure fits into the main plot. This series collects the tangents — the detours, the 'wait, let's just go see what that is,' the plans that became a completely different plan three minutes in. Faster-paced than the main series, shorter runtime, higher chaos-per-minute ratio. Often the best part of the trip.",
      meta: [
        { label: 'Genre:',    value: 'Action, Adventure, Detours' },
        { label: 'Planning:', value: 'Minimal' },
        { label: 'Results:',  value: 'Surprisingly good' },
        { label: 'Sequel:',   value: 'Inevitable' },
      ],
    },

    'r4-c3': {
      title:    'On Location: Places We Got Lost',
      image:    'imgs/The Establishing Shots/20260407_115421.jpg',
      match:    '96% Match',
      newEp:    false,
      year:     '2025–2026',
      duration: 'Travel Series',
      desc:     "A travel series honoring every location where the map became irrelevant. Getting lost, it turns out, is one of the most reliable ways to find something worth remembering. This series visits the wrong turns, the 'let's just try this road,' and the places that didn't appear on any itinerary but ended up being the whole point.",
      meta: [
        { label: 'Genre:',      value: 'Travel, Adventure, Discovery' },
        { label: 'Navigation:', value: 'Vibes-based' },
        { label: 'Found:',      value: 'Something better' },
        { label: 'Would go:',   value: 'Absolutely again' },
      ],
    },

    'r4-c4': {
      title:    'Travel Documentaries & Escapades',
      image:    'imgs/The Establishing Shots/20260411_153146.jpg',
      match:    null,
      newEp:    false,
      year:     '2024–2026',
      duration: 'Multi-Season',
      desc:     "The flagship travel series, covering the full spectrum of escapades from 'this was extremely well-planned' to 'we are figuring this out as we go.' Across multiple seasons, the recurring theme is the same: go somewhere, do things, take a photo that doesn't fully capture it, and come back slightly changed. Highly recommended. Highly rewatch-able.",
      meta: [
        { label: 'Genre:',   value: 'Travel, Documentary, Life' },
        { label: 'Seasons:', value: 'Multiple & Counting' },
        { label: 'Vibe:',    value: 'Always worth it' },
        { label: 'Next:',    value: 'TBD (suggestions welcome)' },
      ],
    },

    'r4-c5': {
      title:    "Women's Day Special: Feature Length",
      image:    'imgs/The Establishing Shots/womens_day_establishing_shots.jpg',
      match:    null,
      newEp:    true,
      year:     '2026',
      duration: 'Annual Special',
      desc:     "The annual Women's Day special — shot on location, unplanned, and better for it. This establishing shot sets the scene for a day that needed no embellishment. The light was good. The company was better. Critics awarded it the full runtime simply for existing. New episodes of this annual special drop every March 8th, without fail.",
      meta: [
        { label: 'Genre:',    value: 'Annual Special, Documentary' },
        { label: 'Date:',     value: 'March 8th, every year' },
        { label: 'Vibe:',     value: 'Celebratory, warm, non-negotiable' },
        { label: 'Status:',   value: 'New episode just aired' },
      ],
    },

    'r4-c6': {
      title:    "Birthday Special: Director's Cut",
      image:    'imgs/The Establishing Shots/birthday_establishing_shots.jpg',
      match:    '100% Match',
      newEp:    true,
      year:     '2026',
      duration: 'Season 20 · The Big One',
      desc:     "The landmark establishing shot for Season 20. This is the frame the whole series has been building toward — the image that sets the scene for what is, by any objective measure, the best season yet. Shot on the occasion of a 20th birthday, it captures the specific quality of light that only exists when something worth remembering is about to happen. Rated 100% by all known critics.",
      meta: [
        { label: 'Occasion:', value: "Amalia's 20th Birthday 🎂" },
        { label: 'Genre:',    value: 'Birthday Special, Cinematic' },
        { label: 'Rating:',   value: '100% — unanimous' },
        { label: 'Status:',   value: 'Now streaming 🎉' },
      ],
    },

  };


  // ============================================================
  // MODAL LOGIC
  // ============================================================
  const backdrop  = document.getElementById('modal-backdrop');
  const closeBtn  = document.getElementById('modal-close');
  const bannerImg = document.getElementById('modal-banner-img');
  const titleEl   = document.getElementById('modal-title-text');
  const matchEl   = document.getElementById('modal-match');
  const badgeEl   = document.getElementById('modal-badge');
  const yearEl    = document.getElementById('modal-year');
  const durationEl= document.getElementById('modal-duration');
  const descEl    = document.getElementById('modal-desc');
  const metaList  = document.getElementById('modal-meta-list');

  function openModal(cardId) {
    const data = CARD_DATA[cardId];
    if (!data) return;

    // Populate content
    bannerImg.src       = data.image;
    bannerImg.alt       = data.title;
    titleEl.textContent = data.title;
    matchEl.textContent = data.match || '';
    matchEl.style.display = data.match ? 'inline' : 'none';
    badgeEl.style.display = data.newEp ? 'inline-block' : 'none';
    yearEl.textContent    = data.year;
    durationEl.textContent= data.duration;
    descEl.textContent    = data.desc;

    // Build meta list
    metaList.innerHTML = '';
    (data.meta || []).forEach(({ label, value }) => {
      const li = document.createElement('li');
      li.className = 'modal__meta-item';
      li.innerHTML = `<span class="modal__meta-label">${label}</span> <span class="modal__meta-value">${value}</span>`;
      metaList.appendChild(li);
    });

    // Show modal
    document.body.style.overflow = 'hidden';
    backdrop.classList.add('is-open');
    closeBtn.focus();
  }

  function closeModal() {
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Close on button
  closeBtn.addEventListener('click', closeModal);

  // Close on backdrop click (outside modal box)
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('is-open')) {
      closeModal();
    }
  });


  // ============================================================
  // ATTACH CLICK HANDLERS TO ALL CARDS
  // ============================================================
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', e => {
      e.preventDefault();
      openModal(card.id);
    });
  });


  // ============================================================
  // NAVBAR SCROLL EFFECT
  // ============================================================
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });


  // ============================================================
  // ROW CHEVRON SCROLLING
  // ============================================================
  const rowConfigs = [
    { track: 'row1-track', left: 'r1-left', right: 'r1-right' },
    { track: 'row2-track', left: 'r2-left', right: 'r2-right' },
    { track: 'row3-track', left: 'r3-left', right: 'r3-right' },
    { track: 'row4-track', left: 'r4-left', right: 'r4-right' },
  ];

  rowConfigs.forEach(({ track, left, right }) => {
    const trackEl = document.getElementById(track);
    const leftBtn = document.getElementById(left);
    const rightBtn = document.getElementById(right);
    if (!trackEl || !leftBtn || !rightBtn) return;

    const amt = () => trackEl.clientWidth * 0.75;
    rightBtn.addEventListener('click', () => trackEl.scrollBy({ left:  amt(), behavior: 'smooth' }));
    leftBtn.addEventListener( 'click', () => trackEl.scrollBy({ left: -amt(), behavior: 'smooth' }));
  });


  // ============================================================
  // BIRTHDAY CONFETTI BURST ON LOAD
  // ============================================================
  const confettiColors = ['#e50914', '#ffd700', '#ffffff', '#46d369', '#ff6b6b', '#6ec6ff'];

  function createConfetti() {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes fall {
        0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
        80%  { opacity: 1; }
        100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
      }
    `;
    document.head.appendChild(styleEl);

    for (let i = 0; i < 80; i++) {
      const el = document.createElement('div');
      el.style.cssText = `
        position: fixed;
        top: -10px;
        left: ${Math.random() * 100}vw;
        width: ${Math.random() * 8 + 4}px;
        height: ${Math.random() * 8 + 4}px;
        background: ${confettiColors[Math.floor(Math.random() * confettiColors.length)]};
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        opacity: ${Math.random() * 0.8 + 0.2};
        pointer-events: none;
        z-index: 9999;
        animation: fall ${Math.random() * 3 + 2}s ease-in ${Math.random() * 1.5}s forwards;
      `;
      document.body.appendChild(el);
      el.addEventListener('animationend', () => el.remove());
    }
  }

  // ============================================================
  // MORE INFO / FEEDBACK MODAL LOGIC
  // ============================================================
  const infoModal = document.getElementById('more-info-modal');
  const infoModalCloseBtn = document.getElementById('info-modal-close');
  const moreInfoBtn = document.getElementById('more-info-btn');
  const feedbackForm = document.getElementById('feedback-form');
  const feedbackInput = document.getElementById('feedback-input');
  const feedbackList = document.getElementById('feedback-list');
  const feedbackCount = document.getElementById('feedback-count');

  let reviews = [];
  try {
    reviews = JSON.parse(localStorage.getItem('amalia_reviews')) || [
      'Her incredible laugh and warm presence.',
      'Always up for a spontaneous coffee or adventure.',
      'Her loyalty as a friend and how she is down for anything.'
    ];
  } catch (e) {
    reviews = [
      'Her incredible laugh and warm presence.',
      'Always up for a spontaneous coffee or adventure.',
      'Her loyalty as a friend and how she is down for anything.'
    ];
  }

  function renderReviews() {
    if (!feedbackList || !feedbackCount) return;
    feedbackList.innerHTML = '';
    reviews.forEach((review, index) => {
      const li = document.createElement('li');
      li.className = 'feedback-item';
      li.innerHTML = `
        <span>${review}</span>
        <button class="feedback-delete-btn" data-index="${index}" aria-label="Delete review">✕</button>
      `;
      feedbackList.appendChild(li);
    });
    feedbackCount.textContent = reviews.length;
  }

  function saveReviews() {
    localStorage.setItem('amalia_reviews', JSON.stringify(reviews));
  }

  if (moreInfoBtn && infoModal) {
    moreInfoBtn.addEventListener('click', () => {
      renderReviews();
      document.body.style.overflow = 'hidden';
      infoModal.classList.add('is-open');
      if (feedbackInput) feedbackInput.focus();
    });
  }

  function closeInfoModal() {
    if (infoModal) {
      infoModal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }

  if (infoModalCloseBtn) {
    infoModalCloseBtn.addEventListener('click', closeInfoModal);
  }

  if (infoModal) {
    infoModal.addEventListener('click', (e) => {
      if (e.target === infoModal) closeInfoModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeInfoModal();
    }
  });

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = feedbackInput.value.trim();
      if (val) {
        reviews.unshift(val);
        saveReviews();
        renderReviews();
        feedbackInput.value = '';
        const container = document.getElementById('feedback-list-container');
        if (container) container.scrollTop = 0;
      }
    });
  }

  if (feedbackList) {
    feedbackList.addEventListener('click', (e) => {
      if (e.target.classList.contains('feedback-delete-btn')) {
        const index = parseInt(e.target.getAttribute('data-index'));
        if (!isNaN(index)) {
          reviews.splice(index, 1);
          saveReviews();
          renderReviews();
        }
      }
    });
  }

  window.addEventListener('load', () => setTimeout(createConfetti, 400));

})();
