/* ============================================================
   ASTRAGALOI.STORE — Oracle & UI Logic
   ============================================================ */

'use strict';

/* ── Oracle Table ─────────────────────────────────────────
   Keys: sorted values joined by comma, e.g. "1,3,4,6"
   Faces: κῷος=1, χῖος=3, πλευρός=4, ὕπτιος=6
   ──────────────────────────────────────────────────────── */
const ORACLE = {
  '1,1,1,1': {
    deity: 'Kronos',
    title: 'The Titan Withholds',
    text: 'Four κῷος — the lowest throw. Kronos, lord of time, bids you pause. This is not your moment. Withdraw, reflect in silence, and return to the bones when the stars have moved. What you seek now will be given freely in another season.',
    omen: 'inauspicious',
  },
  '1,1,1,3': {
    deity: 'Hades',
    title: 'The Deep Counsels Caution',
    text: 'The lord of the unseen realm speaks from beneath the earth. Something you pursue conceals a hidden danger. Look below the surface of what is offered. Not all that gleams at the threshold leads inward to light.',
    omen: 'inauspicious',
  },
  '1,1,1,4': {
    deity: 'Nemesis',
    title: 'Measure and Balance',
    text: 'The goddess of retribution watches with cool eyes. An action taken from pride or haste has already set a wheel in motion. Reconsider before you proceed further. What is given in excess shall be reclaimed with interest.',
    omen: 'inauspicious',
  },
  '1,1,1,6': {
    deity: 'Ares',
    title: 'Conflict Without Resolution',
    text: 'Three dogs and one belly — conflict is present, but the field is not yet decided. The war god neither promises victory nor defeat. You must prepare carefully and choose your battle wisely. The moment to strike has not yet arrived.',
    omen: 'mixed',
  },
  '1,1,3,3': {
    deity: 'Artemis',
    title: 'The Huntress Moves Alone',
    text: 'The silver goddess runs through moonlit forest without counsel. Trust your own instincts above all advice you have received. Act alone if you must — the prey is real, the aim is true. Those who wait for permission miss the mark.',
    omen: 'mixed',
  },
  '1,1,3,4': {
    deity: 'Demeter',
    title: 'Tend What Is Already Yours',
    text: 'Earth-mother sets her hand upon your shoulder. What you have planted will grow, but the season is not yet full. Seek no new fields before this one is harvested. Patience is not weakness here — it is the whole art.',
    omen: 'neutral',
  },
  '1,1,3,6': {
    deity: 'Demeter',
    title: 'The Barren Season Passes',
    text: 'Even the goddess of harvest knew winter. Demeter\'s cycle turns without ceasing: what is lost returns, what is stripped bare will grow green again. The cold in your situation is not permanent. Hold steadily until the thaw.',
    omen: 'neutral',
  },
  '1,1,4,4': {
    deity: 'Hephaestus',
    title: 'Steady Work Is Its Own Oracle',
    text: 'The forge-god honors those who return to the anvil each day without complaint. Your effort is good and your material is sound — continue building, stone by stone, without distraction. The thing you are making will last.',
    omen: 'neutral',
  },
  '1,1,4,6': {
    deity: 'Poseidon',
    title: 'Turbulence Beneath Still Water',
    text: 'The earth-shaker warns: what appears calm on the surface holds deep movement beneath. Prepare your foundations before the upheaval arrives. Those who build on sand when the sea is quiet are caught without warning when the ground shifts.',
    omen: 'mixed',
  },
  '1,1,6,6': {
    deity: 'Ares',
    title: 'Two Forces in Tension',
    text: 'Two powerful currents pull in opposing directions. Ares speaks plainly: delay here is its own defeat. Choose your side with full commitment and advance. A soldier who hesitates at the charge is already lost.',
    omen: 'mixed',
  },
  '1,3,3,3': {
    deity: 'Poseidon',
    title: 'The Tide Has Turned',
    text: 'What once held you in place now loosens its grip. Poseidon\'s tide has shifted in your direction — move with the current rather than against it, and you will cover great distance with less effort than before. The way opens.',
    omen: 'favorable',
  },
  '1,3,3,4': {
    deity: 'Athena',
    title: 'One Flaw Remains',
    text: 'The owl-eyed goddess surveys your plan carefully. It has real merit and the approach is sound — but there is one overlooked flaw that could undo the whole. Search for it before you commit. Her wisdom is given freely; use it.',
    omen: 'mixed',
  },
  '1,3,3,6': {
    deity: 'Athena',
    title: 'Wisdom Before Advance',
    text: 'Caution and wisdom are paired gifts of the goddess. Study the full terrain of your situation before committing forces. The outcome you desire is reachable — but only by those who see clearly, not those who act on first impulse.',
    omen: 'neutral',
  },
  '1,3,4,4': {
    deity: 'Athena',
    title: 'Strategy Bears Fruit',
    text: 'Skill and strategy converge in your favor. The goddess of clear-eyed craft approves your method. Apply both with precision and the desired outcome draws steadily near. What you have prepared for is exactly what approaches.',
    omen: 'favorable',
  },
  '1,3,4,6': {
    deity: 'Hermes',
    title: 'A Message on the Road',
    text: 'The swift god is already running in your direction. A message, opportunity, or unexpected encounter approaches from the road. The journey you contemplate will yield rewards that cannot yet be foreseen. Begin and trust the motion.',
    omen: 'favorable',
  },
  '1,3,6,6': {
    deity: 'Ares',
    title: 'Hesitation Is the Enemy',
    text: 'Ares speaks through iron and fire: the only thing standing between you and your object is your own reluctance to act. The field has been cleared. The hour is now. Advance with full commitment — the gods have already decided.',
    omen: 'favorable',
  },
  '1,4,4,4': {
    deity: 'Ares',
    title: 'Courage Alone Suffices',
    text: 'You do not need more preparation, more resources, or more permission. Courage alone will see you through what stands ahead. The war god\'s blessing is upon the bold. Advance without looking back — the way is already open.',
    omen: 'favorable',
  },
  '1,4,4,6': {
    deity: 'Aphrodite',
    title: 'Reconcile Desire and Form',
    text: 'The golden goddess requires an accounting. Desire and practical form must be brought into accord. What you want is real and worth wanting — but only in the shape that can actually be held. Seek what is both true and beautiful.',
    omen: 'neutral',
  },
  '1,4,6,6': {
    deity: 'Aphrodite',
    title: 'The Golden Apple Falls for You',
    text: 'Aphrodite\'s favor has landed in your court. Follow what your heart finds most beautiful — it will not lead you astray in this season. Love, creative work, and genuine connection are all blessed by this throw. Reach out.',
    omen: 'favorable',
  },
  '1,6,6,6': {
    deity: 'Hermes',
    title: "Fortune's Gate Swings Open",
    text: 'Hermes stands at the threshold, grinning. What appears at first glance to be loss or misfortune is in fact the god opening a better gate than the one you were watching. Step through without grief for what you leave behind.',
    omen: 'favorable',
  },
  '3,3,3,3': {
    deity: 'Athena',
    title: 'Four Equal Measures of Wisdom',
    text: 'Four χῖος — a rare balance. Pure reason governs this moment. Athena asks that you study every angle of the situation before committing to any path. The answer is present and visible; it simply requires unhurried attention to find it.',
    omen: 'favorable',
  },
  '3,3,3,4': {
    deity: 'Athena',
    title: 'The Answer Lies in Plain Sight',
    text: 'The owl of Athena turns its gaze directly at something you have been overlooking. The strategy requires revision — not rebuilding, only refinement. The insight you need is not hidden from you; it waits where you have already looked.',
    omen: 'favorable',
  },
  '3,3,3,6': {
    deity: 'Aphrodite',
    title: 'Closer Than You Believe',
    text: 'Aphrodite smiles at your situation with great warmth. A union, reconciliation, or outcome of genuine beauty is far closer than you presently believe. Do not draw back from what wishes to come toward you.',
    omen: 'favorable',
  },
  '3,3,4,4': {
    deity: 'Hephaestus',
    title: 'Raw Material Into Lasting Value',
    text: 'The master of the forge recognizes patient craft. Your steady work is transforming raw and uncertain material into something of real and lasting value. The fire is at the right temperature. Keep working.',
    omen: 'favorable',
  },
  '3,3,4,6': {
    deity: 'Hermes',
    title: 'The Transaction Prospers',
    text: 'Hermes, god of commerce and crossed roads, blesses this venture. Commerce, communication, travel, and exchange all move in your favor in this season. The deal, the journey, the negotiation — whichever applies — goes well.',
    omen: 'favorable',
  },
  '3,3,6,6': {
    deity: 'Hermes',
    title: 'News Arrives at Speed',
    text: 'The quick god is running toward you with news you have been waiting for. Be ready to move at equal speed when it arrives. Opportunities carried by Hermes stay open for only a moment. Do not still be preparing when he knocks.',
    omen: 'favorable',
  },
  '3,4,4,4': {
    deity: 'Hermes',
    title: 'Profit and Safe Passage',
    text: 'Hermes, lord of fortunate encounters, throws his caduceus in your direction. The exchange you seek will be profitable; the road you contemplate is safe. Proceed with confidence — the quick god walks ahead of you.',
    omen: 'favorable',
  },
  '3,4,4,6': {
    deity: 'Poseidon',
    title: 'Change Carries You Forward',
    text: 'Great waves rise, then fall — this is the sea\'s nature, and it is also yours. The changes occurring around you are not disasters to be survived but currents to be ridden. Poseidon moves you toward new shore.',
    omen: 'favorable',
  },
  '3,4,6,6': {
    deity: 'Apollo',
    title: 'Harmony Is Restored',
    text: 'Apollo\'s lyre sounds clearly over the noise of your situation. Harmony returns — what was discordant finds resolution, what was scattered finds form. Trust the rhythm of events. The music beneath the difficulty is beautiful.',
    omen: 'favorable',
  },
  '3,6,6,6': {
    deity: 'Zeus',
    title: 'Seek the Highest',
    text: 'The Olympian leans forward on his throne. His word: do not settle for less than what you truly desire. Seek the highest version of what is possible here and pursue it without apology. The father approves the full ambition.',
    omen: 'very favorable',
  },
  '4,4,4,4': {
    deity: 'Apollo',
    title: 'Complete Illumination',
    text: 'Four πλευρός — Apollo\'s light falls on your situation without shadow or obscurity. All shall become clear. The answer you have been seeking will arrive with the sun. Prepare to see with full clarity what has been hidden.',
    omen: 'very favorable',
  },
  '4,4,4,6': {
    deity: 'Apollo',
    title: 'Truth Heals',
    text: 'The Far-Shooter\'s arrow finds its mark. The truth you have been holding back — from yourself or from another — must now be spoken. Apollo is the god of both prophecy and healing: the disclosure and the cure arrive together.',
    omen: 'very favorable',
  },
  '4,4,6,6': {
    deity: 'Zeus',
    title: 'The Way Is Cleared',
    text: 'Thunder and lightning clear the road ahead of you. What has been blocking your path dissolves now by divine will — not by force of your own effort alone, but because the gods have decided. Walk forward without hesitation.',
    omen: 'very favorable',
  },
  '4,6,6,6': {
    deity: 'Zeus',
    title: 'An Ally Stands Ready',
    text: 'The father of gods extends protection over your cause. A powerful ally — seen or as yet unseen — stands ready to assist you. You do not pursue this alone. Look to whom has already offered help and accept it without pride.',
    omen: 'very favorable',
  },
  '6,6,6,6': {
    deity: 'Zeus',
    title: 'The Highest Throw',
    text: 'Four ὕπτιος — the rarest and most blessed cast. Zeus himself has pronounced judgment. What you seek is granted by divine will. Move forward without hesitation, without doubt, without looking back. The gods are with you entirely.',
    omen: 'very favorable',
  },
};

/* ── Face data ───────────────────────────────────────────── */
const FACES = [
  { value: 1, greek: 'κ',  name: 'κῷος'    },
  { value: 3, greek: 'χ',  name: 'χῖος'    },
  { value: 4, greek: 'π',  name: 'πλευρός' },
  { value: 6, greek: 'υ',  name: 'ὕπτιος'  },
];

function randomFace() {
  return FACES[Math.floor(Math.random() * 4)];
}

/* ── Build a bone element using safe DOM methods ─────────── */
function createBoneEl(face, index) {
  const bone = document.createElement('div');
  bone.className = 'bone';
  const angle = (Math.random() * 16 - 8).toFixed(1);
  bone.style.setProperty('--land-angle', angle + 'deg');
  bone.style.animationDelay = (index * 0.18) + 's';

  const greekSpan = document.createElement('span');
  greekSpan.className = 'bone-greek';
  greekSpan.textContent = face.greek;

  const numSpan = document.createElement('span');
  numSpan.className = 'bone-num';
  numSpan.textContent = face.name;

  bone.appendChild(greekSpan);
  bone.appendChild(numSpan);
  return bone;
}

/* ── DOM references ──────────────────────────────────────── */
const castBtn      = document.getElementById('cast-btn');
const bonesArena   = document.getElementById('bones-arena');
const oracleResult = document.getElementById('oracle-result');

/* ── Cast the bones ──────────────────────────────────────── */
function castBones() {
  if (!castBtn || castBtn.disabled) return;
  castBtn.disabled = true;
  castBtn.textContent = 'The bones are falling\u2026';

  if (oracleResult) oracleResult.classList.remove('revealed');

  const rolls = [randomFace(), randomFace(), randomFace(), randomFace()];

  bonesArena.textContent = ''; // clear previous bones (safe, no innerHTML)

  rolls.forEach((face, i) => {
    const bone = createBoneEl(face, i);
    bonesArena.appendChild(bone);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bone.classList.add('throwing', 'face-' + face.value);
        bone.addEventListener('animationend', () => {
          bone.classList.remove('throwing');
          bone.classList.add('revealed');
        }, { once: true });
      });
    });
  });

  // show oracle after last bone settles
  const delay = (0.18 * 3 + 0.9 + 0.35) * 1000;
  setTimeout(() => showOracle(rolls), delay);
}

function showOracle(rolls) {
  const sorted = rolls.map(f => f.value).sort((a, b) => a - b);
  const key    = sorted.join(',');
  const entry  = ORACLE[key];

  if (!entry || !oracleResult) return;

  const deityEl = oracleResult.querySelector('.oracle-deity');
  const titleEl = oracleResult.querySelector('.oracle-title');
  const textEl  = oracleResult.querySelector('.oracle-text');
  const sumEl   = oracleResult.querySelector('.oracle-sum');

  if (deityEl) deityEl.textContent = 'Under the aegis of ' + entry.deity;
  if (titleEl) titleEl.textContent = entry.title;
  if (textEl)  textEl.textContent  = entry.text;

  const sum       = sorted.reduce((a, b) => a + b, 0);
  const faceNames = sorted.map(v => FACES.find(f => f.value === v).name).join(' \u00b7 ');
  if (sumEl) sumEl.textContent = faceNames + '  \u00b7  sum ' + sum + '  \u00b7  omen: ' + entry.omen;

  oracleResult.classList.add('revealed');

  castBtn.disabled = false;
  castBtn.textContent = 'Cast Again';
}

/* ── Nav: transparent → solid on scroll ─────────────────── */
const nav = document.querySelector('nav');
if (nav) {
  const handleScroll = () => {
    nav.classList.toggle('solid', window.scrollY > 60);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ── Smooth-scroll for anchor links ─────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

/* ── Intersection-based fade-in for sections ─────────────── */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('section:not(#hero)').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(28px)';
  section.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(section);
});
