document.addEventListener('DOMContentLoaded', () => {
    // 1. وظيفة القائمة المنسدلة (Mobile Dropdown)
    const dropdownToggle = document.querySelector('.dropdown-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (dropdownToggle && navLinks) {
        dropdownToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. وظيفة الرأس - معرض صور متحرك
    const heroSlider = document.querySelector('.hero-slider');
    const sliderImages = document.querySelectorAll('.hero-slider .slider-image');
    const prevBtn = document.querySelector('.hero-slider .slider-nav.prev');
    const nextBtn = document.querySelector('.hero-slider .slider-nav.next');
    let currentSlide = 0;

    function showSlide(index) {
        sliderImages.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % sliderImages.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
        showSlide(currentSlide);
    }

    // أزرار التنقل
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }

    // تشغيل تلقائي للشريحة (اختياري)
    let autoSlideInterval = setInterval(nextSlide, 5000); // كل 5 ثوانٍ

    // إيقاف التشغيل التلقائي عند التفاعل اليدوي واستئنافه
    heroSlider.addEventListener('mouseover', () => clearInterval(autoSlideInterval));
    heroSlider.addEventListener('mouseleave', () => autoSlideInterval = setInterval(nextSlide, 5000));

    // عرض الشريحة الأولى عند التحميل
    showSlide(currentSlide);


    // 3. وظيفة أهم ما قيل عن الكلية - شريحة آراء (Testimonial Slider)
    const testimonialItems = document.querySelectorAll('.testimonials-section .testimonial-item');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonialItems.forEach((item, i) => {
            item.style.display = 'none'; // إخفاء الكل
            if (i === index) {
                item.style.display = 'block'; // عرض العنصر النشط
            }
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
        showTestimonial(currentTestimonial);
    }

    // تشغيل تلقائي لآراء الطلاب
    setInterval(nextTestimonial, 7000); // كل 7 ثوانٍ

    // عرض الرأي الأول عند التحميل
    if (testimonialItems.length > 0) {
        showTestimonial(currentTestimonial);
    }
});
