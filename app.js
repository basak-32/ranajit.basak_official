const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', event => {
  event.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const phone = contactForm.phone.value.trim();
  const querryOrSuggestion = contactForm.querryOrSuggestion.value.trim();
  // console.log(name, email, phone, querryOrSuggestion);
  contactForm.reset();

  const now = new Date();

  db.collection('user-entries').add({
    name: name,
    email: email,
    phone: phone,
    querryOrSuggestion: querryOrSuggestion,
    sent_at: firebase.firestore.Timestamp.fromDate(now)
  })
})