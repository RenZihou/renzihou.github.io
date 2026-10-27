// Keep the section index useful while reading; all navigation also works without JS.
const sections = [...document.querySelectorAll('main > section[id]')];
const links = [...document.querySelectorAll('.section-nav a')];
let scheduled = false;

function updateCurrentSection() {
  const threshold = Math.min(window.innerHeight * 0.3, 240);
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= threshold) current = section;
  }
  for (const link of links) {
    if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  scheduled = false;
}

window.addEventListener('scroll', () => {
  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(updateCurrentSection);
  }
}, { passive: true });
window.addEventListener('resize', updateCurrentSection);
window.addEventListener('pageshow', updateCurrentSection);
updateCurrentSection();
