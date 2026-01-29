// Translations Dictionary
const translations = {
    th: {
        nav_home: "หน้าแรก",
        nav_about: "เกี่ยวกับฉัน",
        nav_projects: "ผลงาน",
        nav_contact: "ติดต่อ",
        hero_greeting: "สวัสดีครับ, ผมชื่อ",
        hero_title: "ภูรินทร์ สุขมั่น",
        hero_subtitle: "นักศึกษา CS ปี 3 | Web Developer",
        btn_projects: "ดูผลงาน",
        btn_resume: "ดาวน์โหลด Resume",
        btn_contact: "ติดต่อสอบถาม",
        about_title: "เกี่ยวกับ",
        about_title_accent: "ฉัน",
        about_desc1: "ผมเป็นนักศึกษาชั้นปีที่ 3 สาขาวิทยาการคอมพิวเตอร์ที่หลงใหลในการพัฒนาเว็บไซต์ (Web Development) และสนุกกับการสร้างระบบทั้ง Frontend และ Backend ที่ทำงานร่วมกันได้อย่างราบรื่น",
        about_desc2: "ผมมีประสบการณ์ในการพัฒนา Python API ด้วย Flask และ FastAPI รวมถึงการทำงานกับ MongoDB และการผสานเทคโนโลยี Machine Learning อย่าง YOLO เข้ากับระบบเว็บ ตอนนี้กำลังมองหาตำแหน่ง Software Developer Internship เพื่อพัฒนาทักษะและประสบการณ์จริงในสายงาน",
        passion_title: "แรง",
        passion_title_accent: "บันดาลใจ",
        passion_desc: "นิสัยส่วนตัวผมคือเวลาทำงานอะไร ชอบตั้งคำถามกับตัวเองเสมอว่า 'ทำยังไงให้มันเสร็จเร็วกว่านี้?' ผมจึงชอบเขียนโค้ดเพื่อสร้างเครื่องมือมาช่วยลดขั้นตอนการทำงานซ้ำซากครับ เพราะผมเชื่อว่ายิ่งเราให้คอมพิวเตอร์ช่วยทำงานจุกจิกได้มากเท่าไหร่ เราก็ยิ่งมีเวลาไปโฟกัสกับเรื่องที่สำคัญกว่าได้มากขึ้นเท่านั้น",
        goal_title: "เป้า",
        goal_title_accent: "หมาย",
        goal_desc: "เป้าหมายตอนนี้ของผม คือการได้เข้าไปฝึกงานในตำแหน่ง Software Developer กับทีมที่เปิดโอกาสให้ได้ลงมือทำจริงครับ ผมอยากเอาทักษะที่มีไปช่วยแก้ปัญหาให้ทีม และพร้อมจะเรียนรู้เทคนิคใหม่ๆ จากพี่ๆ มืออาชีพ เพื่อพัฒนาตัวเองจากนักศึกษาให้กลายเป็นนักพัฒนาที่ทำงานได้จริงครับ",
        skills_title: "Technical ",
        education_title: "ประวัติการ",
        education_title_accent: "ศึกษา",
        edu_uni_degree: "ปริญญาตรี วิทยาศาสตร์บัณฑิต",
        edu_uni_major: "สาขาวิทยาการคอมพิวเตอร์",
        edu_uni_faculty: "คณะเทคโนโลยีสารสนเทศและการสื่อสาร",
        edu_uni_school: "มหาวิทยาลัยพะเยา",
        edu_uni_date: "2566 - ปัจจุบัน",
        edu_hs_degree: "มัธยมศึกษาตอนปลาย",
        edu_hs_program: "สายญี่ปุ่น-อังกฤษ",
        edu_hs_school: "โรงเรียนลำปางกัลยาณี",
        edu_hs_date: "2563 - 2566",
        gpa_label: "เกรดเฉลี่ยสะสม:",
        projects_title: "ผลงาน",
        projects_title_accent: "ล่าสุด",
        proj1_title: "Inappropriate Content Detection API",
        proj1_desc: "ระบบตรวจจับเนื้อหาไม่เหมาะสมด้วย YOLO (YOLOv11m, อาร์มส์, บลูร์) ด้วยเทคนิค YOLO*Time ที่ผมคิดขึ้น ทำงานแบบ RESTful API บน FastAPI พร้อม Frontend สำหรับทดสอบ ใช้ MongoDB เก็บข้อมูลพร้อม auto-expire และมี OCR System สำหรับตรวจสอบข้อความในรูป",
        proj2_title: "Medical Knowledge Chatbot (Flask)",
        proj2_desc: "ระบบตอบคำถามด้านสุขภาพแบบ Real-time ที่ออกแบบให้ใช้งานง่ายด้วย HTML, CSS และ JavaScript พร้อม UI/UX ที่ทันสมัย Backend ใช้ Flask (Python) ร่วมกับ JSON data และได้ผสาน LangChain กับ OpenRouter API ใช้โมเดล DeepSeek-R1 เพื่อตอบคำถามได้แม่นยำและรวดเร็ว",
        proj3_title: "Medical Knowledge Chatbot (ML)",
        proj3_desc: "พัฒนาระบบให้คำแนะนำด้านสุขภาพด้วย Machine Learning โมเดล TF-IDF + Logistic Regression Backend ใช้ FastAPI พร้อม endpoint management ระบบติดตาม confidence score และ latency (ms) เพื่อวัดผลได้แม่นยำ ออกแบบ Frontend ด้วย Jinja2 templating พร้อม static assets",
        contact_title: "ร่วมงานกับ<span class='text-accent'>ผม</span>",
        contact_desc: "สนใจจ้างงาน หรือต้องการสอบถามข้อมูลเพิ่มเติม สามารถติดต่อผมได้ทางช่องทางด้านล่างนี้",
        btn_email: "อีเมลติดต่อ",
        btn_view_all_projects: "ดูผลงานทั้งหมด",
        nav_certificates: "ใบประกาศ",
        certificates_title: "ใบ",
        certificates_title_accent: "ประกาศนียบัตร",
        cert1_title: "ชื่อใบประกาศนียบัตร 1",
        cert1_issuer: "หน่วยงานที่ออกใบประกาศ",
        cert1_date: "มกราคม 2024",
        cert2_title: "ชื่อใบประกาศนียบัตร 2",
        cert2_issuer: "หน่วยงานที่ออกใบประกาศ",
        cert2_date: "กุมภาพันธ์ 2024",
        cert3_title: "ชื่อใบประกาศนียบัตร 3",
        cert3_issuer: "หน่วยงานที่ออกใบประกาศ",
        cert3_date: "มีนาคม 2024"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Hello, I am",
        hero_title: "Phurin Sukman",
        hero_subtitle: "3rd Year CS Student | Web Developer",
        btn_projects: "View Projects",
        btn_resume: "Download Resume",
        btn_contact: "Contact Me",
        about_title: "About",
        about_title_accent: "Me",
        about_desc1: "I'm a third-year Computer Science student passionate about Web Development. I love building seamless systems that work across both Frontend and Backend.",
        about_desc2: "I have experience developing Python APIs with Flask and FastAPI, working with MongoDB, and integrating Machine Learning technologies like YOLO into web systems. Currently seeking a Software Developer Internship to enhance my skills and gain hands-on experience in the industry.",
        passion_title: "The",
        passion_title_accent: "Passion",
        passion_desc: "My personal habit whenever I work on something is to always ask myself, 'How can I finish this faster?' That's why I love writing code to build tools that automate repetitive tasks. I believe the more we let computers handle the tedious stuff, the more time we have to focus on what truly matters.",
        goal_title: "The",
        goal_title_accent: "Goal",
        goal_desc: "My current goal is to land a Software Developer internship with a team that gives me real hands-on opportunities. I want to use my skills to help solve real problems and learn new techniques from experienced professionals, evolving from a student into a developer who can actually deliver in the real world.",
        skills_title: "Technical ",
        education_title: "Educational",
        education_title_accent: "Background",
        edu_uni_degree: "Bachelor of Science",
        edu_uni_major: "Computer Science",
        edu_uni_faculty: "Faculty of Information Technology and Communication",
        edu_uni_school: "University of Phayao",
        edu_uni_date: "2023 - Present",
        edu_hs_degree: "High School Diploma",
        edu_hs_program: "Japanese-English Program",
        edu_hs_school: "Lampang Kanlayanee School",
        edu_hs_date: "2020 - 2023",
        gpa_label: "GPA:",
        projects_title: "Featured",
        projects_title_accent: "Projects",
        proj1_title: "Inappropriate Content Detection API",
        proj1_desc: "A content moderation system powered by YOLO (YOLOv11m, arms, blur) using my custom YOLO*Time technique. Built as a RESTful API with FastAPI, includes a testing Frontend, uses MongoDB with auto-expire, and has an OCR System for text detection in images.",
        proj2_title: "Medical Knowledge Chatbot (Flask)",
        proj2_desc: "A real-time healthcare FAQ chatbot with modern UI/UX design using HTML, CSS, and JavaScript. Backend built with Flask (Python) and JSON data, integrated with LangChain and OpenRouter API using DeepSeek-R1 model for accurate and fast responses.",
        proj3_title: "Medical Knowledge Chatbot (ML)",
        proj3_desc: "A healthcare information system using Machine Learning (TF-IDF + Logistic Regression). Built with FastAPI backend including endpoint management, confidence score and latency tracking. Frontend designed with Jinja2 templating and static assets.",
        contact_title: "Work with <span class='text-accent'>Me</span>",
        contact_desc: "Interested in hiring me or have any questions? Feel free to reach out via the channels below.",
        btn_email: "Email Me",
        btn_view_all_projects: "View All Projects",
        nav_certificates: "Certificates",
        certificates_title: "My",
        certificates_title_accent: "Certificates",
        cert1_title: "Certificate Name 1",
        cert1_issuer: "Issuing Organization",
        cert1_date: "January 2024",
        cert2_title: "Certificate Name 2",
        cert2_issuer: "Issuing Organization",
        cert2_date: "February 2024",
        cert3_title: "Certificate Name 3",
        cert3_issuer: "Issuing Organization",
        cert3_date: "March 2024"
    }
};

let currentLang = 'th';

function changeLanguage(lang) {
    currentLang = lang;

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if content contains HTML tags (like <span class='text-accent'>)
            if (translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Language
    const savedLang = localStorage.getItem('preferredLanguage') || 'th';
    changeLanguage(savedLang);

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // 3. Scroll Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // 4. Custom Smooth Scroll (Better than CSS)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            // Get target position with offset for fixed header
            const headerHeight = 80; // match --header-height
            const extraOffset = 20; // extra spacing
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - extraOffset;

            // Smooth scroll with custom easing
            smoothScrollTo(targetPosition, 800); // 800ms duration
        });
    });

    // 5. Certificate Modal Functionality for PDF
    const modal = document.getElementById('certificateModal');
    const pdfViewer = document.getElementById('pdfViewer');
    const modalCaption = document.getElementById('modalCaption');
    const downloadBtn = document.getElementById('downloadPdf');
    const closeBtn = document.querySelector('.modal-close');

    // Add click event to all certificate cards
    document.querySelectorAll('.certificate-card').forEach(card => {
        card.addEventListener('click', function () {
            const pdfPath = this.getAttribute('data-pdf');
            if (!pdfPath) return;

            // 👉 ดึงชื่อไฟล์จาก path
            const fileName = pdfPath.split('/').pop().replace('.pdf', '');

            // 👉 แปลงชื่อให้อ่านง่าย
            const displayName = fileName
                .replace(/[_-]/g, ' ')
                .replace(/\b\w/g, c => c.toUpperCase());

            modal.style.display = 'block';
            pdfViewer.src = pdfPath;
            modalCaption.textContent = displayName;

            downloadBtn.href = pdfPath;
            downloadBtn.download = fileName + '.pdf';
        });
    });

    // Close modal when clicking the X
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            modal.style.display = 'none';
            pdfViewer.src = ''; // Clear iframe
        });
    }

    // Close modal when clicking outside the content
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            pdfViewer.src = ''; // Clear iframe
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            pdfViewer.src = ''; // Clear iframe
        }
    });

    // 6. Skills Slider - Mouse Wheel & Drag Scrolling with Infinite Loop
    const skillsSlider = document.querySelector('.skills-slider');
    const skillsTrack = document.querySelector('.skills-track');

    if (skillsSlider && skillsTrack) {
        let isDown = false;
        let startX;
        let currentTranslate = 0;
        let previousTranslate = 0;
        let pauseTimeout;

        // Get current transform value
        function getCurrentTransform() {
            const style = window.getComputedStyle(skillsTrack);
            const matrix = new DOMMatrix(style.transform);
            return matrix.m41; // translateX value
        }

        // Calculate half width for seamless loop
        function getLoopWidth() {
            // Count only the original items (not duplicates)
            const items = skillsTrack.querySelectorAll('.skill-item');
            const itemCount = items.length / 2; // Half because items are duplicated
            let width = 0;

            for (let i = 0; i < itemCount; i++) {
                width += items[i].offsetWidth;
                if (i < itemCount - 1) {
                    width += parseFloat(getComputedStyle(skillsTrack).gap || 48); // 3rem = 48px
                }
            }

            return width;
        }

        // Seamlessly wrap position for infinite loop
        function wrapPosition(position) {
            const loopWidth = getLoopWidth();

            // If scrolled too far right (too negative)
            if (position < -loopWidth) {
                return position + loopWidth;
            }
            // If scrolled too far left (positive)
            else if (position > 0) {
                return position - loopWidth;
            }

            return position;
        }

        // Custom animation for smooth auto-scroll
        let animationFrameId = null;
        let isAutoScrolling = false;

        function startCustomAutoScroll() {
            if (isAutoScrolling) return;

            isAutoScrolling = true;
            const scrollSpeed = 0.5; // pixels per frame (adjust for speed)

            function animate() {
                if (!isAutoScrolling) return;

                currentTranslate = getCurrentTransform() - scrollSpeed;
                currentTranslate = wrapPosition(currentTranslate);
                skillsTrack.style.transform = `translateX(${currentTranslate}px)`;

                animationFrameId = requestAnimationFrame(animate);
            }

            animate();
        }

        function stopCustomAutoScroll() {
            isAutoScrolling = false;
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        }

        // Smoothly transition back to auto-scroll
        function resumeAutoScroll() {
            clearTimeout(pauseTimeout);
            pauseTimeout = setTimeout(() => {
                // Start custom smooth auto-scroll from current position
                startCustomAutoScroll();
            }, 1500); // Resume after 1.5 seconds of inactivity
        }

        // Mouse wheel scrolling (fast horizontal scroll)
        skillsSlider.addEventListener('wheel', (e) => {
            e.preventDefault();

            // Stop custom auto-scroll
            stopCustomAutoScroll();

            // Pause CSS animation and get current position
            skillsTrack.style.animationPlayState = 'paused';
            skillsTrack.style.animation = 'none';
            skillsTrack.style.transition = '';

            const scrollSpeed = 3;
            currentTranslate = getCurrentTransform() - (e.deltaY * scrollSpeed);

            // Apply infinite loop wrapping
            currentTranslate = wrapPosition(currentTranslate);

            skillsTrack.style.transform = `translateX(${currentTranslate}px)`;

            resumeAutoScroll();
        });

        // Drag to scroll functionality
        skillsSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            skillsSlider.style.cursor = 'grabbing';
            skillsSlider.style.userSelect = 'none';

            startX = e.pageX;

            // Stop custom auto-scroll
            stopCustomAutoScroll();

            // Stop CSS animation and get current position
            skillsTrack.style.animationPlayState = 'paused';
            skillsTrack.style.animation = 'none';
            skillsTrack.style.transition = '';
            previousTranslate = getCurrentTransform();
        });

        skillsSlider.addEventListener('mouseleave', () => {
            if (isDown) {
                isDown = false;
                skillsSlider.style.cursor = 'grab';
                skillsSlider.style.userSelect = 'auto';
                resumeAutoScroll();
            }
        });

        skillsSlider.addEventListener('mouseup', () => {
            if (isDown) {
                isDown = false;
                skillsSlider.style.cursor = 'grab';
                skillsSlider.style.userSelect = 'auto';
                resumeAutoScroll();
            }
        });

        skillsSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();

            const currentX = e.pageX;
            const diff = currentX - startX;
            currentTranslate = previousTranslate + diff;

            // Apply infinite loop wrapping
            currentTranslate = wrapPosition(currentTranslate);

            // Update previousTranslate if we wrapped
            const wrappedDiff = currentTranslate - previousTranslate;
            if (Math.abs(wrappedDiff) > 1000) {
                // We wrapped, so update startX to maintain smooth dragging
                previousTranslate = currentTranslate;
                startX = currentX;
            }

            skillsTrack.style.transform = `translateX(${currentTranslate}px)`;
        });

        // Set initial cursor
        skillsSlider.style.cursor = 'grab';
    }
});

// Custom Smooth Scroll Function with Easing
function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Easing function (easeInOutCubic)
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + (distance * ease));

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// ===============================
// Certificates (auto from filename)
// ===============================
const certificateFiles = [
    "Screenshot 2026-01-29 135240.png",
    "Screenshot 2026-01-29 135251.png",
    "Screenshot 2026-01-29 135306.png",
    "Screenshot 2026-01-29 135322.png",
    "Screenshot 2026-01-29 135335.png",
    "Screenshot 2026-01-29 135347.png",
    "Screenshot 2026-01-29 135400.png",
    "Screenshot 2026-01-29 135425.png",
    "Screenshot 2026-01-29 135441.png",
    "Screenshot 2026-01-29 135452.png",
    "Screenshot 2026-01-29 135506.png",
    "Screenshot 2026-01-29 135515.png",
    "Screenshot 2026-01-29 135535.png",
    "Screenshot 2026-01-29 135553.png",
    "Screenshot 2026-01-29 135608.png",
    "Screenshot 2026-01-29 135620.png",
    "Screenshot 2026-01-29 135637.png",
    "Screenshot 2026-01-29 135650.png",
    "Screenshot 2026-01-29 135708.png",
    "Screenshot 2026-01-29 135721.png",
    "Screenshot 2026-01-29 135737.png",
    "Screenshot 2026-01-29 135754.png",
    "Screenshot 2026-01-29 135805.png",
    "Screenshot 2026-01-29 135825.png",
    "Screenshot 2026-01-29 135844.png",
    "Screenshot 2026-01-29 135854.png",
    "Screenshot 2026-01-29 135906.png"
];

const certGrid = document.getElementById("certificatesGrid");

certificateFiles.forEach((file, index) => {
    const fileName = file.replace(".png", "");
    const displayName = `Certificate ${index + 1}`;

    const card = document.createElement("div");
    card.className = "certificate-card";
    card.dataset.image = `./src/certificates/${file}`;

    card.innerHTML = `
    <div class="certificate-image">
      <img src="./src/certificates/${file}" alt="${displayName}" loading="lazy">
      <div class="certificate-overlay">
        <i class="fas fa-search-plus"></i>
      </div>
    </div>
    <div class="certificate-info">
      <h3>${displayName}</h3>
    </div>
  `;

    card.addEventListener("click", () => {
        openImageModal(card.dataset.image, displayName);
    });

    certGrid.appendChild(card);
});

// Image Modal Function
function openImageModal(imageSrc, title) {
    const modal = document.getElementById('certificateModal');
    const pdfViewer = document.getElementById('pdfViewer');
    const modalCaption = document.getElementById('modalCaption');
    const modalBody = document.querySelector('.modal-body');

    // Hide PDF viewer and show image instead
    pdfViewer.style.display = 'none';

    // Remove existing image if any
    const existingImg = modalBody.querySelector('.modal-image');
    if (existingImg) {
        existingImg.remove();
    }

    // Create and insert image
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = title;
    img.className = 'modal-image';
    img.style.cssText = 'max-width: 90%; max-height: 85vh; object-fit: contain; margin: auto;';

    modalBody.insertBefore(img, modalBody.firstChild);
    modalCaption.textContent = title;
    modal.style.display = 'block';

    // Update download button
    const downloadBtn = document.getElementById('downloadPdf');
    downloadBtn.href = imageSrc;
    downloadBtn.download = imageSrc.split('/').pop();
    downloadBtn.innerHTML = '<i class="fas fa-download"></i> ดาวน์โหลดรูปภาพ';
}