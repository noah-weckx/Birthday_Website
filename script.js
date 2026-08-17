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
      title: 'Drinking Diaries',
      image: 'imgs/Just the Two of You/Snapchat-1022523399.jpg',
      match: '98% Match',
      newEp: false,
      year: '2025-2026',
      duration: '1 Season · 10 Episodes',
      desc: 'When I first moved from the US, I was definitely a lightweight and would exclusively drink beer. I can now proudly say that I am continuously learning how to drink properly. Give me vodka (with juice, I still need something with it) over regular beer any day. Ooo, or prosecco, which I now will fully debate is not champagne, but in its own entire category.',
      meta: [
        { label: 'Cast:', value: 'Amalia Cember (known for being a passenger princess), Noah Weckx (known for paying even if it means getting yelled at)' },
        { label: 'Genre:', value: 'Buddy Comedy, Reality' },
        { label: 'Tone:', value: 'Pure Chaos' },
        { label: 'Rating:', value: '5/5' },
      ],
    },

    'r1-c2': {
      title: 'Down for Anything: A Documentary',
      image: 'imgs/Just the Two of You/Snapchat-1174439249.jpg',
      match: null,
      newEp: true,
      year: '2024',
      duration: 'Ongoing',
      desc: "I’ve said it time and time again, but all you have to do is call, and I’ll be there in 30 minutes (20 if it’s late enough and I go fast). I learned that saying “we should” or “lets” is taken more seriously than I thought, so I promise to follow through with whatever comes after. And no matter what, I will always have fun because it’s with you.",
      meta: [
        { label: 'Cast:', value: 'The Dynamic Duo (played by Amalia Cember and Noah Weckx)' },
        { label: 'Genre:', value: 'Comedy, Friendship, Late Nights' },
        { label: 'Network:', value: 'Amaliaflix Originals' },
        { label: 'Vibe:', value: 'Impulsive Chaos' },
      ],
    },

    'r1-c3': {
      title: 'Possibly Adorable',
      image: 'imgs/Just the Two of You/Snapchat-1669896129.jpg',
      match: null,
      newEp: false,
      year: '2006–Present',
      duration: 'Unlimited Episodes',
      desc: 'The picture I used was supposed to be submitted for the like, class mascot challenges, never uploaded it, but that little guy is still sitting on my bed. And I know it’s a really random photo, but I think it also shows how random we are. We don’t ever really have a plan, things just kinda happen for the better, and I really like that about us.',
      meta: [
        { label: 'Cast:', value: 'The Dynamic Duo (played by Amalia Cember and Noah Weckx)' },
        { label: 'Genre:', value: 'Drama, Comedy, Documentary' },
        { label: 'Acclaim:', value: 'Critically Acclaimed' },
        { label: 'Regrets:', value: 'None Whatsoever' },
      ],
    },

    'r1-c4': {
      title: 'Unscripted Reality: Season 20',
      image: 'imgs/Just the Two of You/Snapchat-196099087.jpg',
      match: null,
      newEp: true,
      year: '2026',
      duration: 'Season 20 · New',
      desc: "I really liked that you guys came to Wallonia and got to see my aunt and uncle’s place. I really like being there, it just naturally makes me feel more at peace. I absolutely love their kitchen and backyard, and of course the puppies. And I really liked getting to play for you on the guitar. Yes, I fucked up a few times, and even was hesitant to play at all, but I do enjoy playing for you.",
      meta: [
        { label: 'Season:', value: '20 (The Big One)' },
        { label: 'Genre:', value: 'Reality, Coming-of-Age' },
        { label: 'Status:', value: 'Currently Filming' },
        { label: 'Verdict:', value: 'Best season yet' },
      ],
    },

    'r1-c5': {
      title: "Torture (Just Kidding, It's Only Mild Abuse)",
      image: 'imgs/Just the Two of You/Selfie_5.jpg',
      match: '94% Match',
      newEp: false,
      year: '2026',
      duration: 'Short Film',
      desc: "I genuinely don’t know how you can just lay out in the sun all day for a tan, that is insane. I only survived for like, 5 minutes before I wanted to be back inside. The mindset was not there, I was not locked in. But I really liked the conversation that we had, and talking with you really took my mind off everything and gave me some nice down time to relax.",
      meta: [
        { label: 'Genre:', value: 'Portrait, Art House, Short Film' },
        { label: 'Runtime:', value: 'One frame, infinite meaning' },
        { label: 'Director:', value: 'Whoever had the camera' },
        { label: 'Verdict:', value: 'Quietly iconic' },
      ],
    },

    'r1-c6': {
      title: 'Legos, Puzzles, and Good Memories',
      image: 'imgs/Just the Two of You/legos_notes_two_of_us.jpg',
      match: null,
      newEp: true,
      year: '2026',
      duration: 'Miniseries',
      desc: "I really liked building Legos while we watched the series, and I really enjoyed the little notes that we sat and read before I started the build. Seeing that you put so much time and effort into my birthday meant so much to me. And I know I’ve said it a million times, but I mean it, and I’m going to keep saying it because I don’t think I’ll ever be able to thank you enough for that day and the gifts.",
      meta: [
        { label: 'Genre:', value: 'Documentary, Still Life, Weird' },
        { label: 'Objects:', value: 'Legos, Handwriting, Vibes' },
        { label: 'Context:', value: 'Extremely specific' },
        { label: 'Status:', value: 'New installment just dropped' },
      ],
    },

    // ── ROW 2: The Group Pictures ────────────────────────────
    'r2-c1': {
      title: 'Award-Winning Group Projects: ZombieWare',
      image: 'imgs/The Group Pictures/20260511_171735.jpg',
      match: null,
      newEp: false,
      year: '2025–2026',
      duration: 'Feature Length',
      desc: "I genuinely think that your guy’s project was by far the best one (don’t tell Bohdan or Valentyn I said that though). And I know that I wasn’t in your guy’s group, but the reason I included it was because I just liked the memories of testing out your guy’s game, and any projects that we got to work on together. I know that FullStack and IoT were stressful, but you made them so much easier to get through, and I’m so thankful that I had you there as my person to keep me in line. I really appreciate it.",
      meta: [
        { label: 'Cast:', value: 'The Full Ensemble' },
        { label: 'Genre:', value: 'Ensemble Drama, Feel-Good' },
        { label: 'Awards:', value: 'Multiple Nominations' },
        { label: 'Snacks:', value: "Always Available: I got a car, don't worry, I'll get the drinks and snacks" },
      ],
    },

    'r2-c2': {
      title: 'The Cookout',
      image: 'imgs/The Group Pictures/IMG_20260504_120258_643.jpg',
      match: '95% Match',
      newEp: false,
      year: '2025',
      duration: '6 Episodes',
      desc: "I had so much fun when you guys all came over to my place to cook. I know it got hectic at points, but that was an experience that I will never forget. I never really got this close with my friends in the US, and maybe that’s on me, but I’m so thankful for getting close with all of you guys, and hope we get to do more things like that in the future.",
      meta: [
        { label: 'Cast:', value: 'The Inner Circle' },
        { label: 'Genre:', value: 'Drama, Friendship, Light Chaos' },
        { label: 'Episodes:', value: '6 · Bingeable' },
        { label: 'Outcome:', value: 'Broken sunglasses, bruises, soaked clothes, best food on Earth, almost broken roof, but totally worth it.' },
      ],
    },

    'r2-c3': {
      title: 'Fancy Zombies and The Joker',
      image: 'imgs/The Group Pictures/IMG-20260519-WA0002.jpg',
      match: null,
      newEp: true,
      year: '2026',
      duration: 'Crossover Event',
      desc: "I’m pretty sure it was a teacher who said I looked like the Joker, but I find it funny that we went into McDonalds looking like that. I also am a little shocked that you got all of us to agree to the makeup after presentations. I mean, for me personally, you know I can’t ever really say no to you (and I’m not complaining). I just think it’s funny that we all met up there looking really formal and then just in zombie makeup. And we did the same thing with formal clothes at Pizza Hut too. Both of those days were actually really nice to hang out as the big class friend group.",
      meta: [
        { label: 'Event:', value: 'Crossover Special' },
        { label: 'Genre:', value: 'Action-Comedy, Event TV' },
        { label: 'Scale:', value: 'Increasingly Large' },
        { label: 'Verdict:', value: "Why was I the Joker? I mean, I know I'm funny (looking), but c'mon." },
      ],
    },

    'r2-c4': {
      title: 'Bonjour From Wallonia',
      image: 'imgs/The Group Pictures/Snapchat-1970759983.jpg',
      match: null,
      newEp: false,
      year: '2024–2026',
      duration: 'Ongoing Series',
      desc: "I know that in my song I mention you coming to my hometown to see the town and people that raised me, but I like to think you kind of got that when you guys came to Wallonia. That house is where we stay every summer, and I’ve been going to Belgium for so long that my family there also helped raise me. In fact, my aunt is the first person in my family who made me feel like an adult and actually treated me like one. And she absolutely loved you.",
      meta: [
        { label: 'Cast:', value: 'You Probably Know Them' },
        { label: 'Genre:', value: 'Ensemble, Slice of Life' },
        { label: 'Vibe:', value: 'Warm, chaotic, perfect' },
        { label: 'Status:', value: 'Renewed - Always' },
      ],
    },

    'r2-c5': {
      title: 'Culturing the Uncultured American',
      image: 'imgs/The Group Pictures/cooking_group_pic.jpg',
      match: null,
      newEp: true,
      year: '2026',
      duration: '1 Season · Ongoing',
      desc: "The food we made that day was by far some of the best I’ve ever had. And the pictures that came from that experience are peak, truly. And aside from the food, it was nice to just hang out in the kitchen with you guys. I think part of the reason that I enjoyed the food so much was because it was something I made with you guys, not just something that was made for me. The experience itself made it that much more enjoyable if that makes sense.",
      meta: [
        { label: 'Genre:', value: 'Cooking, Reality, Chaos' },
        { label: 'Judges:', value: 'Everyone, simultaneously' },
        { label: 'Result:', value: "Actually really good. Best food you'll ever have." },
        { label: 'Renewed:', value: 'Yes, indefinitely' },
      ],
    },

    'r2-c6': {
      title: 'Badasses in Sunglasses',
      image: 'imgs/The Group Pictures/pizza_day_group.jpg',
      match: '91% Match',
      newEp: false,
      year: '2026',
      duration: 'Feature Event',
      desc: "I love that we all just wore the sunglasses inside, legitimately it was a really nice vibe. I’m pretty sure that we filmed a tiktok or smth, and we did the pictures where tiktok chooses the sound. All I remember is that yours was unhinged, pretty sure mine was relatively normal. I know that I got kinda off towards the end, which I do apologize for, but up until that point, I really enjoyed my time, and I wanna do something similar again.",
      meta: [
        { label: 'Genre:', value: 'Slice of Life (literally)' },
        { label: 'Topping:', value: 'Classified' },
        { label: 'Recurs:', value: 'As often as possible' },
        { label: 'Verdict:', value: "Still think you guys are weird for the tuna and corn and olives, but it's growing on me the more I eat it." },
      ],
    },

    // ── ROW 3: The Lore & Inside Jokes ───────────────────────
    'r3-c1': {
      title: 'Music as a Connection',
      image: 'imgs/The Lore & Inside Jokes/20260317_203804.jpg',
      match: '99% Match',
      newEp: false,
      year: '2026',
      duration: '1 Season · 4 Episodes',
      desc: "The day that we went to Mechelen was completely random, I really enjoyed going. I think sometimes that us doing random things ends up being the time I enjoy the most. I’m not sure if that night was something I enjoyed more, cuz I know it was random and I enjoy music more. Anyways, yeah, hope you enjoyed the night as much as I did.",
      meta: [
        { label: 'Genre:', value: 'Drama' },
        { label: 'Runtime:', value: 'Short but devastating' },
        { label: 'Context:', value: 'Required (ask Amalia)' },
        { label: 'Quality:', value: "Top-Notch (As long as your name isn't Noah)" },
      ],
    },

    'r3-c2': {
      title: 'Unhinged Forever and Always',
      image: 'imgs/The Lore & Inside Jokes/Screenshot_20260604_220347_Samsung Notes.jpg',
      match: null,
      newEp: false,
      year: '2025–2026',
      duration: 'Ongoing',
      desc: "That screenshot should eventually be updated. It is crazy without context or the added information, but I don’t think that the context would make it any less crazy. I think my favorite quote in there will always be “Am I crazy for having his skin?”. Mainly because it’s what started the note, but also because no amount of context could ever make it better or more understandable.",
      meta: [
        { label: 'Genre:', value: 'Sci-Fi, Fantasy' },
        { label: 'Logic:', value: 'Shockingly consistent' },
        { label: 'Budget:', value: 'Unlimited Insanity' },
        { label: 'Rating:', value: '10/10, but lowkey scared for my life' },
      ],
    },

    'r3-c3': {
      title: "Girl Math: I'm Still Confused",
      image: 'imgs/The Lore & Inside Jokes/Screenshot_20260604_220450_TikTok.jpg',
      match: null,
      newEp: false,
      year: '2024–Present',
      duration: 'Infinite Episodes',
      desc: "I think that racoon has taught me more than any teacher ever could. I still don’t understand your logic, but I’m getting there. If they made an account to teach languages, I would for sure follow to learn Romanian. I think I learn best when it’s an AI voiceover of a racoon XD",
      meta: [
        { label: 'Genre:', value: 'Education, Psychology' },
        { label: 'Episodes:', value: 'Estimated 47,000+' },
        { label: 'Evidence:', value: 'Screenshot-preserved' },
        { label: 'Rating:', value: '10/10, AI racoons are surprisingly good teachers' },
      ],
    },

    'r3-c4': {
      title: 'Just One More Episode',
      image: 'imgs/The Lore & Inside Jokes/we_were_liars_for_website.jpg',
      match: '97% Match',
      newEp: false,
      year: '2026',
      duration: 'Feature Documentary',
      desc: "I never expected to enjoy the show as much as I did, I’m being so fr. And ever since, all the movies or shows that you recommend have been amazing. I don’t think any show has made me that emotionally distressed though. Like, the ending, insane. Perfect, but insane, and I cried so much. Still, bomb ass show.",
      meta: [
        { label: 'Genre:', value: 'Documentary, True Crime Adjacent' },
        { label: 'Subject:', value: 'The Enemy (you know who)' },
        { label: 'Verdict:', value: 'Sleep is Forever Elusive' },
        { label: 'Attitude:', value: 'Safe and Thankful' },
      ],
    },

    'r3-c5': {
      title: 'Aggressive Cuteness',
      image: 'imgs/The Lore & Inside Jokes/cute_little_guy_lore.jpg',
      match: null,
      newEp: true,
      year: '2026',
      duration: '1 Episode · Legendary',
      desc: "He is small. He is there. He did not ask to be part of the lore and yet here he is, fully part of the lore. This creature feature documents the unlikely encounter between an unremarkable little guy and two people who immediately decided he was the most important thing they had ever seen. He was not. And yet.",
      meta: [
        { label: 'Genre:', value: 'Nature, Comedy, Creature Feature' },
        { label: 'Subject:', value: 'A little guy' },
        { label: 'Threat level:', value: 'Zero. He is harmless.' },
        { label: 'Legacy:', value: 'Immortalised' },
      ],
    },

    'r3-c6': {
      title: 'Köln: My Favorite Image, My Favorite Person',
      image: 'imgs/The Lore & Inside Jokes/koln_fav_pic.jpg',
      match: '96% Match',
      newEp: false,
      year: '2026',
      duration: 'Feature · Art House',
      desc: "Submitted without comment to the international art house circuit, this entry from Köln speaks for itself. A favourite. The kind of image you take and immediately know you got it right — before you even lower the camera. No filter required. No context necessary. Just a place, and the people who were in it.",
      meta: [
        { label: 'Genre:', value: 'Art House, International, Travel' },
        { label: 'Location:', value: 'Köln, Germany' },
        { label: 'Edited:', value: 'Never, you are just that beautiful' },
        { label: 'Rating:', value: 'Certified favorite' },
      ],
    },

    // ── ROW 4: The Establishing Shots ────────────────────────
    'r4-c1': {
      title: 'The Start of My End',
      image: 'imgs/The Establishing Shots/20250928_164437.jpg',
      match: null,
      newEp: true,
      year: '2025',
      duration: 'Ongoing Series',
      desc: 'The kind of shot a director uses to make you feel something before anything has even happened. This is a place. It has atmosphere. Something is about to begin here, or already ended, or both. New episodes of this ongoing series drop whenever somewhere beautiful gets pointed a camera at — which, it turns out, is fairly often.',
      meta: [
        { label: 'Genre:', value: 'Cinematic, Travel, Atmospheric' },
        { label: 'Director:', value: 'The Wind' },
        { label: 'Mood:', value: 'Chaotic, Impulsive' },
        { label: 'Status:', value: 'Always Down For Anything' },
      ],
    },

    'r4-c2': {
      title: 'The Beauty in the Little Things',
      image: 'imgs/The Establishing Shots/20260306_141510.jpg',
      match: null,
      newEp: false,
      year: '2026',
      duration: '1 Season - 8 Episodes',
      desc: "Not every adventure fits into the main plot. This series collects the tangents — the detours, the 'wait, let's just go see what that is,' the plans that became a completely different plan three minutes in. Faster-paced than the main series, shorter runtime, higher chaos-per-minute ratio. Often the best part of the trip.",
      meta: [
        { label: 'Genre:', value: 'Action, Adventure, Detours' },
        { label: 'Planning:', value: 'Minimal' },
        { label: 'Results:', value: 'Surprisingly good' },
        { label: 'Sequel:', value: 'Inevitable' },
      ],
    },

    'r4-c3': {
      title: 'Most Beautiful Sight',
      image: 'imgs/The Establishing Shots/20260407_115421.jpg',
      match: '96% Match',
      newEp: false,
      year: '2025–2026',
      duration: 'Travel Series',
      desc: "A travel series honoring every location where the map became irrelevant. Getting lost, it turns out, is one of the most reliable ways to find something worth remembering. This series visits the wrong turns, the 'let's just try this road,' and the places that didn't appear on any itinerary but ended up being the whole point.",
      meta: [
        { label: 'Genre:', value: 'Travel, Adventure, Discovery' },
        { label: 'Navigation:', value: 'Vibes-based' },
        { label: 'Found:', value: 'Something better' },
        { label: 'Would go:', value: 'In a heartbeat, no questions asked' },
      ],
    },

    'r4-c4': {
      title: 'Antwerp: Watch Out',
      image: 'imgs/The Establishing Shots/20260411_153146.jpg',
      match: null,
      newEp: false,
      year: '2024–2026',
      duration: 'Multi-Season',
      desc: "The flagship travel series, covering the full spectrum of escapades from 'this was extremely well-planned' to 'we are figuring this out as we go.' Across multiple seasons, the recurring theme is the same: go somewhere, do things, take a photo that doesn't fully capture it, and come back slightly changed. Highly recommended. Highly rewatch-able.",
      meta: [
        { label: 'Genre:', value: 'Travel, Documentary, Life' },
        { label: 'Seasons:', value: 'Multiple & Counting' },
        { label: 'Vibe:', value: 'Always worth it' },
        { label: 'Next:', value: 'TBD (suggestions welcome)' },
      ],
    },

    'r4-c5': {
      title: "A Rose for You",
      image: 'imgs/The Establishing Shots/womens_day_establishing_shots.jpg',
      match: null,
      newEp: true,
      year: '2026',
      duration: 'Annual Special',
      desc: "The annual Women's Day special — shot on location, unplanned, and better for it. This establishing shot sets the scene for a day that needed no embellishment. The light was good. The company was better. Critics awarded it the full runtime simply for existing. New episodes of this annual special drop every March 8th, without fail.",
      meta: [
        { label: 'Genre:', value: 'Annual Special, Documentary' },
        { label: 'Date:', value: 'March 8th, every year' },
        { label: 'Vibe:', value: 'Celebratory, warm, non-negotiable' },
        { label: 'Status:', value: 'Already planning for next year' },
      ],
    },

    'r4-c6': {
      title: "Birthday Surprise",
      image: 'imgs/The Establishing Shots/birthday_establishing_shots.jpg',
      match: '100% Match',
      newEp: true,
      year: '2026',
      duration: 'Season 20 · The Big One',
      desc: "The landmark establishing shot for Season 20. This is the frame the whole series has been building toward — the image that sets the scene for what is, by any objective measure, the best season yet. Shot on the occasion of a 20th birthday, it captures the specific quality of light that only exists when something worth remembering is about to happen. Rated 100% by all known critics.",
      meta: [
        { label: 'Occasion:', value: "Noah's Birthday" },
        { label: 'Genre:', value: 'Birthday Special, Cinematic' },
        { label: 'Rating:', value: '100% — unanimous' },
        { label: 'Status:', value: 'Now streaming 🎉' },
      ],
    },

  };


  // ============================================================
  // MODAL LOGIC
  // ============================================================
  const backdrop = document.getElementById('modal-backdrop');
  const closeBtn = document.getElementById('modal-close');
  const bannerImg = document.getElementById('modal-banner-img');
  const titleEl = document.getElementById('modal-title-text');
  const matchEl = document.getElementById('modal-match');
  const badgeEl = document.getElementById('modal-badge');
  const yearEl = document.getElementById('modal-year');
  const durationEl = document.getElementById('modal-duration');
  const descEl = document.getElementById('modal-desc');
  const metaList = document.getElementById('modal-meta-list');

  function openModal(cardId) {
    const data = CARD_DATA[cardId];
    if (!data) return;

    // Populate content
    bannerImg.src = data.image;
    bannerImg.alt = data.title;
    titleEl.textContent = data.title;
    matchEl.textContent = data.match || '';
    matchEl.style.display = data.match ? 'inline' : 'none';
    badgeEl.style.display = data.newEp ? 'inline-block' : 'none';
    yearEl.textContent = data.year;
    durationEl.textContent = data.duration;
    descEl.textContent = data.desc;

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
    rightBtn.addEventListener('click', () => trackEl.scrollBy({ left: amt(), behavior: 'smooth' }));
    leftBtn.addEventListener('click', () => trackEl.scrollBy({ left: -amt(), behavior: 'smooth' }));
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
