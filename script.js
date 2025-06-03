// في ملف js/script.js

document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.main-nav .nav-links .dropdown');

    // **للتحكم في زر القائمة (أيقونة الهامبرغر) في وضع الجوال**
    if (dropdownToggle && navLinks) {
        dropdownToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active'); // يضيف/يزيل فئة 'active' لإظهار/إخفاء القائمة الرئيسية
        });
    }

    // **للتحكم في القوائم المنسدلة الفرعية عند النقر (خاصة في وضع الجوال)**
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a'); // الرابط الرئيسي للقائمة المنسدلة (مثلاً "عن العقيق اليماني")
        const dropdownContent = dropdown.querySelector('.dropdown-content'); // محتوى القائمة الفرعية

        if (dropdownLink && dropdownContent) {
            dropdownLink.addEventListener('click', function(e) {
                // منع الانتقال للصفحة عند النقر على رابط القائمة المنسدلة
                e.preventDefault();

                // إغلاق أي قوائم منسدلة أخرى مفتوحة
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) { // إذا لم تكن هذه القائمة هي القائمة الحالية
                        otherDropdown.querySelector('.dropdown-content').style.display = 'none';
                    }
                });

                // تبديل عرض القائمة المنسدلة الحالية
                if (dropdownContent.style.display === 'block') {
                    dropdownContent.style.display = 'none';
                } else {
                    dropdownContent.style.display = 'block';
                }
            });
        }
    });

    // **إغلاق القوائم المنسدلة والقائمة الرئيسية عند النقر خارجها**
    document.addEventListener('click', function(event) {
        // لإغلاق قائمة الجوال إذا كانت مفتوحة والنقر خارجها
        if (navLinks && !navLinks.contains(event.target) && !dropdownToggle.contains(event.target)) {
            navLinks.classList.remove('active');
        }

        // لإغلاق القوائم المنسدلة الفرعية إذا كانت مفتوحة والنقر خارجها
        dropdowns.forEach(dropdown => {
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            if (dropdownContent && !dropdown.contains(event.target)) {
                dropdownContent.style.display = 'none';
            }
        });
    });

    // **كود لمعرض الصور المتحرك (Hero Slider)**
    const sliderImages = document.querySelectorAll('.slider-image');
    const prevButton = document.querySelector('.slider-nav.prev');
    const nextButton = document.querySelector('.slider-nav.next');
    let currentImageIndex = 0;

    function showImage(index) {
        sliderImages.forEach((img, i) => {
            if (i === index) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    }

    if (prevButton && nextButton && sliderImages.length > 0) {
        prevButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
            showImage(currentImageIndex);
        });

        nextButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
            showImage(currentImageIndex);
        });

        // لتشغيل الشريحة تلقائيًا (اختياري)
        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
            showImage(currentImageIndex);
        }, 5000); // تغيير الصورة كل 5 ثوانٍ
    }

    // **كود لآراء العملاء (Testimonials Slider)**
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    let currentTestimonialIndex = 0;

    function showTestimonial(index) {
        testimonialItems.forEach((item, i) => {
            if (i === index) {
                item.style.display = 'block'; // أو 'flex' إذا كان الـ item flexbox
            } else {
                item.style.display = 'none';
            }
        });
    }

    if (testimonialItems.length > 0) {
        showTestimonial(currentTestimonialIndex); // عرض أول رأي عند التحميل

        // يمكنك إضافة أزرار للتنقل أو تشغيله تلقائيًا
        setInterval(() => {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialItems.length;
            showTestimonial(currentTestimonialIndex);
        }, 7000); // تغيير الرأي كل 7 ثوانٍ
    }

});
