document.addEventListener("DOMContentLoaded", () => {
    // 1. LOGIKA SLIDER 3 SLIDE (HOMEPAGE BARU)
    const homeTrack = document.getElementById('homePortfolioTrack');
    if (homeTrack) {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length; // Otomatis bernilai 3
        const nextBtn = document.getElementById('nextSlide');
        const prevBtn = document.getElementById('prevSlide');
        const dots = document.querySelectorAll('.dot');

        function updateSlider() {
            // Menggeser kontainer sebesar 100% dari layar untuk tiap slide
            homeTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

            // Memperbarui indikator titik
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentSlide].classList.add('active');
        }

        // Tombol Next (Looping kembali ke awal jika sudah di akhir)
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        });

        // Tombol Prev (Looping maju ke akhir jika sudah di awal)
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        });

        // Fitur klik navigasi titik/dot
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                currentSlide = parseInt(e.target.getAttribute('data-index'));
                updateSlider();
            });
        });
    }

    // 2. FUNGSI CAROUSEL KLASIK (HALAMAN PORTFOLIO)
    const carousels = document.querySelectorAll('.carousel-wrapper');
    carousels.forEach(wrapper => {
        const track = wrapper.querySelector('.carousel-track');
        const prevBtn = wrapper.querySelector('.prev-btn');
        const nextBtn = wrapper.querySelector('.next-btn');

        if (track && prevBtn && nextBtn) {
            // Lebar gambar (260px) + gap (25px) = 285px pergeseran yang pas
            prevBtn.addEventListener('click', () => {
                track.scrollBy({ left: -285, behavior: 'smooth' });
            });

            nextBtn.addEventListener('click', () => {
                track.scrollBy({ left: 285, behavior: 'smooth' });
            });
        }
    });

    // 3. FUNGSI POPUP GAMBAR (LIGHTBOX)
    const modal = document.getElementById("imagePopup");
    const modalImg = document.getElementById("popupImage");

    if (modal && modalImg) {
        const closeBtn = document.querySelector(".close-popup");
        // Sensor otomatis mengambil gambar dari class popup-trigger
        const triggers = document.querySelectorAll(".popup-trigger img");

        triggers.forEach(img => {
            img.addEventListener("click", function() {
                modal.classList.add("active");
                modalImg.src = this.src; // Salin foto murni ke popup
            });
        });

        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });
    }
});