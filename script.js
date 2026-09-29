// Carousel State Management
let currentSeminarIndex = 0;
let currentBadgeIndex = 0;

// Seminar Carousel Navigation
function changeSeminarSlide(direction) {
  const seminars = document.querySelectorAll('.seminar-card');
  const totalSeminars = seminars.length;

  seminars[currentSeminarIndex].classList.remove('active');
  
  currentSeminarIndex = (currentSeminarIndex + direction + totalSeminars) % totalSeminars;
  
  seminars[currentSeminarIndex].classList.add('active');
  
  document.getElementById('seminarSlideCounter').textContent = `Webinar ${currentSeminarIndex + 1} of ${totalSeminars}`;
}

// Badge Carousel Navigation
function changeBadgeSlide(direction) {
  const badges = document.querySelectorAll('.badge-card-slide');
  const totalBadges = badges.length;

  badges[currentBadgeIndex].classList.remove('active');
  
  currentBadgeIndex = (currentBadgeIndex + direction + totalBadges) % totalBadges;
  
  badges[currentBadgeIndex].classList.add('active');
  
  document.getElementById('badgeSlideCounter').textContent = `Badge ${currentBadgeIndex + 1} of ${totalBadges}`;
}

// Lightbox Proof Modal Functionality
function openProofModal(imageArray) {
  const modal = document.getElementById('proofModal');
  const gallery = document.getElementById('proofGallery');
  
  gallery.innerHTML = '';
  
  imageArray.forEach(imgSrc => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'Proof Image';
    gallery.appendChild(img);
  });
  
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeProofModal() {
  const modal = document.getElementById('proofModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

// Close Modal on Escape Key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProofModal();
  }
});