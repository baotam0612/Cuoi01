const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const form = document.querySelector('#rsvp-form');
const status = document.querySelector('#form-status');
const setError = (id, message) => { document.querySelector(id).textContent = message; };

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements['guest-name'];
  const count = form.elements['guest-count'];
  let valid = true;

  setError('#name-error', ''); setError('#count-error', '');
  if (name.value.trim().length < 2) { setError('#name-error', 'Vui lòng cho chúng mình biết tên của bạn.'); valid = false; }
  if (!count.value) { setError('#count-error', 'Vui lòng chọn số lượng khách.'); valid = false; }
  if (!valid) { status.textContent = 'Vui lòng kiểm tra lại các trường được đánh dấu.'; return; }
  status.textContent = 'Cảm ơn bạn! Xác nhận của bạn đã được ghi nhận.';
  form.reset();
});

