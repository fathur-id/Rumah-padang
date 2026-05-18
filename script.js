// Mengatur fungsi Hamburger Menu untuk tampilan Mobile
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Perubahan ikon hamburger menu menjadi ikon "X" saat aktif
    const icon = mobileMenu.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Otomatis menutup menu navigasi mobile ketika salah satu link diklik
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if(navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenu.querySelector('i').classList.remove('fa-xmark');
            mobileMenu.querySelector('i').classList.add('fa-bars');
        }
    });
});