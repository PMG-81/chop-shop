/* Barber-specific booking links. Add individual URLs below when received.
   Empty strings intentionally DO NOT redirect visitors to the general shop Booksy. */
const BARBER_BOOKSY = {
  chris: '',
  junior: '',
  samuel: '',
  sam: '',
  mando: '',
  mac: '',
  joey: '',
  angel: '',
  austin: '',
  jay: '',
  ale: '',
  kevin: '',
  bre: '',
  aj: '',
  rey: '',
  daniel: ''
};
const profile=document.querySelector('[data-barber-profile]');
if(profile){
 const slug=profile.dataset.barberProfile, link=BARBER_BOOKSY[slug];
 const buttons=[...document.querySelectorAll('[data-barber-booksy]')];
 buttons.forEach(button=>{if(link && /^https:\/\//i.test(link)){button.href=link;button.target='_blank';button.rel='noopener noreferrer';button.classList.remove('booking-pending');button.removeAttribute('aria-disabled');}else{button.removeAttribute('href');button.classList.add('booking-pending');button.setAttribute('aria-disabled','true');button.title='Personal Booksy link not supplied yet';button.addEventListener('click',e=>e.preventDefault());}});
 const floating=document.querySelector('.profile-floating-book');
 const destination=document.querySelector('#profile-booking');
 if(floating&&destination&&'IntersectionObserver' in window){
   const observer=new IntersectionObserver(entries=>{floating.classList.toggle('is-hidden',entries[0].isIntersecting)}, {threshold:.12});
   observer.observe(destination);
 }
}
