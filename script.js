/* ============================================================
   ASTRAGALOI.STORE — Oracle & UI Logic
   ============================================================ */

'use strict';

/* ── Oracle Table ─────────────────────────────────────────
   Keys: sorted values joined by comma, e.g. "1,3,4,6"
   Face values (per Pollux 9.100–101; Eustathius 1289.58):
     χῖος = 1  |  πρανής = 3  |  ὑπτία = 4  |  κῷος = 6
   Oracle phrases composed in the style of the attested
   Lycian and Pisidian inscriptions (Heinevetter 1912; Nollé 2007).
   ──────────────────────────────────────────────────────── */
const ORACLE = {
  '1,1,1,1': {
    deity:      'Ἑρμῆς',
    named:      'κύων — The Dog',
    greek:      'Κύων σε βάλλει· μένε καὶ μὴ πράσσε νῦν.',
    text:       'The Dog strikes you. Stay still and act not now.',
    omen:       'inauspicious',
  },
  '1,1,1,3': {
    deity:      'Ἑρμῆς',
    greek:      'Ἀδύνατα πράσσεις· ἀναμεῖναι καιρόν.',
    text:       'You press on impossible things. Await the right moment.',
    omen:       'inauspicious',
  },
  '1,1,1,4': {
    deity:      'Τύχη',
    greek:      'Μικρὰ κερδαίνεις· ἀλλὰ μὴ ὀλιγώρει.',
    text:       'Small gain comes to you; yet do not be negligent.',
    omen:       'mixed',
  },
  '1,1,1,6': {
    deity:      'Ἑρμῆς',
    greek:      'Μία δύναμίς σοι· αἱ δὲ ἄλλαι ἀσθενεῖς. ἐπίμεινον.',
    text:       'One strength is yours; the rest are weak. Wait.',
    omen:       'mixed',
  },
  '1,1,3,3': {
    deity:      'Τύχη',
    greek:      'Τὸ ἔργον μέσον ἐστίν· μηδὲν σπεύσης.',
    text:       'The matter stands middling. Hasten nothing.',
    omen:       'neutral',
  },
  '1,1,3,4': {
    deity:      'Ἀπόλλων',
    greek:      'Οὔτε εὐτυχεῖς οὔτε δυστυχεῖς· ἐν σοὶ τὸ τέλος.',
    text:       'Neither fortunate nor unfortunate; the outcome lies in you.',
    omen:       'neutral',
  },
  '1,1,4,4': {
    deity:      'Ἑρμῆς',
    greek:      'Βεβαία ἡ ὁδός· πορεύου μετὰ φυλακῆς.',
    text:       'The road is steady. Travel it with watchfulness.',
    omen:       'neutral',
  },
  '1,1,4,6': {
    deity:      'Ἀπόλλων',
    greek:      'Μέγα ἀγαθόν σοι πλησιάζει· ἀλλ\u02bc ὄκνει τὸ κακόν.',
    text:       'A great good draws near you; but beware the ill that accompanies it.',
    omen:       'mixed',
  },
  '1,1,6,6': {
    deity:      'Ἀπόλλων',
    greek:      'Ἡ ἀρχὴ σαθρά· ἐπανόρθωσαι πρὶν ἢ ἄρξῃ.',
    text:       'The foundation is unsound. Correct it before you begin.',
    omen:       'inauspicious',
  },
  '1,3,3,3': {
    deity:      'Γῆ',
    greek:      'Γαῖα δίδωσίν σοι τοὺς ὡραίους καρπούς· πράσσε τὰ γήινα.',
    text:       'The Earth gives you ripe fruit. Attend to earthly matters.',
    omen:       'favorable',
  },
  '1,3,3,4': {
    deity:      'Ἀπόλλων',
    greek:      'Ἐρώτα σαφέστερον· ὁ θεὸς ἀκούει.',
    text:       'Ask more clearly. The god hears.',
    omen:       'neutral',
  },
  '1,3,3,6': {
    deity:      'Τύχη',
    greek:      'Ἐναντία σημεῖα· τρισὶν ἡμέραις αὖθις βάλε.',
    text:       'Contrary signs. Cast again in three days.',
    omen:       'mixed',
  },
  '1,3,4,4': {
    deity:      'Ἑρμῆς',
    greek:      'Πράσσε μετρίως· οὕτω κερδαίνεις μέτρια.',
    text:       'Proceed moderately. Thus you gain what is moderate.',
    omen:       'neutral',
  },
  '1,3,4,6': {
    deity:      'Ἀφροδίτη',
    named:      'Ἀφροδίτη — The Supreme Throw',
    greek:      'Ἡ θεὰ Ἀφροδίτη σοι εὐμενής· πάντα καλῶς πράξεις.',
    text:       'The goddess Aphrodite is favorable to you. All will go well.',
    omen:       'supreme',
  },
  '1,3,6,6': {
    deity:      'Ἑρμῆς',
    greek:      'Εὐοδία σοι· ἓν δ\u02bc ἐμπόδιον ὑπολείπεται.',
    text:       'The road is fair; one obstacle yet remains.',
    omen:       'favorable',
  },
  '1,4,4,4': {
    deity:      'Ἀπόλλων',
    greek:      'Ἀσφαλὴς ἡ πρᾶξις· ἡ καρτερία σε σῴζει.',
    text:       'The action is safe. Steadfastness preserves you.',
    omen:       'favorable',
  },
  '1,4,4,6': {
    deity:      'Ἀπόλλων',
    greek:      'Τὸ μεῖζον ἀγαθὸν νικᾷ τὸ ἔλαττον κακόν· πρόβαινε.',
    text:       'The greater good overcomes the lesser ill. Go forward.',
    omen:       'favorable',
  },
  '1,4,6,6': {
    deity:      'Ζεύς',
    greek:      'Εὐτυχὴς ἡ ἔκβασις· τίμα τοὺς θεοὺς πρὶν ἄρξῃ.',
    text:       'The outcome is fortunate. Honor the gods before you begin.',
    omen:       'very favorable',
  },
  '1,6,6,6': {
    deity:      'Ἀπόλλων',
    greek:      'Κράτιστα πράξεις· ἀλλ\u02bc ἓν κρυπτὸν σφάλμα ὁρᾷ ὁ θεός.',
    text:       'You will act splendidly; yet the god sees one hidden fault.',
    omen:       'favorable',
  },
  '3,3,3,3': {
    deity:      'Γῆ',
    greek:      'Γῆς ἀγαθὰ λαμβάνεις· ἀλλ\u02bc οὐρανοῦ οὔπω ἐφάπτῃ.',
    text:       'You receive the earth\'s goods; but you do not yet touch heaven.',
    omen:       'favorable',
  },
  '3,3,3,4': {
    deity:      'Ἀπόλλων',
    greek:      'Τὸ θεμέλιον ἰσχυρόν· ἐπὶ τούτου οἰκοδόμει.',
    text:       'The foundation is strong. Build upon it.',
    omen:       'favorable',
  },
  '3,3,3,6': {
    deity:      'Ἑρμῆς',
    greek:      'Εὔφορος ἡ ὁδός· ἀγαθὸν σύμβολον ταῖς πορείαις.',
    text:       'The road is favorable. A good sign for journeys.',
    omen:       'favorable',
  },
  '3,3,4,4': {
    deity:      'Τύχη',
    greek:      'Ἰσορροπία νῦν κρατεῖ· καιρὸς τοῦ ἔχειν, οὐ τοῦ κινεῖν.',
    text:       'Balance now prevails. A time for holding, not for moving.',
    omen:       'neutral',
  },
  '3,3,4,6': {
    deity:      'Ἀπόλλων',
    greek:      'Οἱ θεοὶ συγχωροῦσιν· ἄρξαι μὴ μέλλων.',
    text:       'The gods permit it. Begin without delay.',
    omen:       'favorable',
  },
  '3,3,6,6': {
    deity:      'Ζεύς',
    greek:      'Ἄριστα ἕξει τὸ πρᾶγμα· καλῶς τελευτήσει.',
    text:       'The matter will stand excellent and come to a good end.',
    omen:       'very favorable',
  },
  '3,4,4,4': {
    deity:      'Ζεύς',
    greek:      'Τὰ δημόσια εὐοδεῖταί σοι· θάρσει.',
    text:       'Public affairs go well for you. Be bold.',
    omen:       'favorable',
  },
  '3,4,4,6': {
    deity:      'Ἀπόλλων',
    greek:      'Ἡ ἐπιμέλεια νῦν πολὺ κερδαίνει· πράσσε.',
    text:       'Diligence now yields much. Act.',
    omen:       'favorable',
  },
  '3,4,6,6': {
    deity:      'Ζεύς',
    greek:      'Νέον ἔργον ἀρξάμενος νῦν θαλήσει.',
    text:       'A new undertaking begun now will flourish.',
    omen:       'very favorable',
  },
  '3,6,6,6': {
    deity:      'Ἀφροδίτη',
    greek:      'Ἐγγὺς ἡ Ἀφροδίτη· μεγάλη εὐτυχία παρ\u02bc ὀλίγον σοί.',
    text:       'Aphrodite is near. Great fortune is very close to you.',
    omen:       'very favorable',
  },
  '4,4,4,4': {
    deity:      'Ζεύς',
    greek:      'Πᾶν ὀρθόν· ἡ ἀξία σε σῴζει. πράσσε τὰ τῆς τιμῆς.',
    text:       'All is upright. Honor preserves you. Attend to matters of dignity.',
    omen:       'very favorable',
  },
  '4,4,4,6': {
    deity:      'Ζεύς',
    greek:      'Γενναῖος ὁ κλῆρος· ἡ ἐρώτησις περὶ τιμῆς· ναί.',
    text:       'A noble cast. The question touches on honor. The answer is yes.',
    omen:       'very favorable',
  },
  '4,4,6,6': {
    deity:      'Ἑρμῆς',
    greek:      'Ἐγγὺς τὸ τέλειον· ὁ Ἑρμῆς σοὶ σύνεστιν.',
    text:       'The perfect is near. Hermes is with you.',
    omen:       'very favorable',
  },
  '4,6,6,6': {
    deity:      'Ἀφροδίτη',
    greek:      'Βῆμα ἓν μόνον πρὸ τῆς Ἀφροδίτης· μεγάλη ἀγαθὴ τύχη σοι ἐγγιστα.',
    text:       'One step before the Aphrodite. Great good fortune is at hand.',
    omen:       'very favorable',
  },
  '6,6,6,6': {
    deity:      'Ἀφροδίτη',
    named:      'Ἀφροδίτη — The Hexas',
    greek:      'Ἄριστος ὁ κλῆρος· ἡ θεὸς πάντα σοὶ δίδωσιν· πράσσε εὐθύς.',
    text:       'The cast is supreme. The goddess gives you all things. Act at once.',
    omen:       'supreme',
  },
};

/* ── Face data (Pollux 9.100–101; Eustathius 1289.58) ───── */
const FACES = [
  { value: 1, greek: 'χ',  name: 'χῖος'   },   // narrow flat — lowest value
  { value: 3, greek: 'π',  name: 'πρανής' },   // broad concave (belly)
  { value: 4, greek: 'υ',  name: 'ὑπτία'  },   // broad convex (back)
  { value: 6, greek: 'κ',  name: 'κῷος'   },   // narrow indented — highest value
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

  bonesArena.textContent = '';

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

  const delay = (0.18 * 3 + 0.9 + 0.35) * 1000;
  setTimeout(() => showOracle(rolls), delay);
}

function showOracle(rolls) {
  const sorted = rolls.map(f => f.value).sort((a, b) => a - b);
  const key    = sorted.join(',');
  const entry  = ORACLE[key];

  if (!entry || !oracleResult) return;

  const deityEl = oracleResult.querySelector('.oracle-deity');
  const namedEl = oracleResult.querySelector('.oracle-named');
  const greekEl = oracleResult.querySelector('.oracle-greek');
  const textEl  = oracleResult.querySelector('.oracle-text');
  const sumEl   = oracleResult.querySelector('.oracle-sum');

  if (deityEl) deityEl.textContent = entry.deity;
  if (namedEl) {
    namedEl.textContent = entry.named || '';
    namedEl.style.display = entry.named ? 'block' : 'none';
  }
  if (greekEl) greekEl.textContent = entry.greek;
  if (textEl)  textEl.textContent  = entry.text;

  const sum       = sorted.reduce((a, b) => a + b, 0);
  const faceNames = sorted.map(v => FACES.find(f => f.value === v).name).join(' \u00b7 ');
  if (sumEl) sumEl.textContent = faceNames + '  \u00b7  sum\u00a0' + sum + '  \u00b7  ' + entry.omen;

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
