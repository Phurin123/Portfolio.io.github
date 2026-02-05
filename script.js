// Translations Dictionary
const translations = {
    th: {
        nav_home: "หน้าแรก",
        nav_about: "เกี่ยวกับฉัน",
        nav_projects: "ผลงาน",
        nav_contact: "ติดต่อ",
        hero_greeting: "สวัสดีครับ, ผมชื่อ",
        hero_title: "ภูรินทร์ สุขมั่น",
        hero_subtitle: "นักศึกษา CS ปี 3 | Full Stack Developer",
        btn_projects: "ดูผลงาน",
        btn_resume: "ดาวน์โหลด Resume",
        btn_course_structure: "โครงสร้างหลักสูตร",
        btn_contact: "ติดต่อสอบถาม",
        about_title: "เกี่ยวกับ",
        about_title_accent: "ฉัน",
        about_desc1: "ผมเป็นนักศึกษาชั้นปีที่ 3 สาขาวิทยาการคอมพิวเตอร์ที่สนใจด้าน    Full-Stack Web Development และมีความสนุกกับการออกแบบและพัฒนาระบบที่ครอบคลุมทั้งฝั่ง Frontend และ Backend ให้สามารถทำงานร่วมกันได้อย่างมีประสิทธิภาพ",
        about_desc2: "ผมมีประสบการณ์ในการพัฒนา Python API ด้วย Flask และ FastAPI รวมถึงการทำงานกับ MongoDB และการผสานเทคโนโลยี Machine Learning อย่าง YOLO เข้ากับระบบเว็บ ตอนนี้กำลังมองหาตำแหน่ง Full-Stack Web Development Internship เพื่อพัฒนาทักษะและประสบการณ์จริงในสายงาน",
        passion_title: "แรง",
        passion_title_accent: "บันดาลใจ",
        passion_desc: "นิสัยส่วนตัวผมคือเวลาทำงานอะไร ชอบตั้งคำถามกับตัวเองเสมอว่า 'ทำยังไงให้มันเสร็จเร็วกว่านี้?' ผมจึงชอบเขียนโค้ดเพื่อสร้างเครื่องมือมาช่วยลดขั้นตอนการทำงานซ้ำซากครับ เพราะผมเชื่อว่ายิ่งเราให้คอมพิวเตอร์ช่วยทำงานจุกจิกได้มากเท่าไหร่ เราก็ยิ่งมีเวลาไปโฟกัสกับเรื่องที่สำคัญกว่าได้มากขึ้นเท่านั้น",
        goal_title: "เป้า",
        goal_title_accent: "หมาย",
        goal_desc: "เป้าหมายตอนนี้ของผม คือการได้เข้าไปฝึกงานในตำแหน่ง Full-Stack Web Development กับทีมที่เปิดโอกาสให้ได้ลงมือทำจริงครับ ผมอยากเอาทักษะที่มีไปช่วยแก้ปัญหาให้ทีม และพร้อมจะเรียนรู้เทคนิคใหม่ๆ จากพี่ๆ มืออาชีพ เพื่อพัฒนาตัวเองจากนักศึกษาให้กลายเป็นนักพัฒนาที่ทำงานได้จริงครับ",
        skills_title: "Technical ",
        education_title: "ประวัติการ",
        education_title_accent: "ศึกษา",
        edu_uni_degree: "ปริญญาตรี วิทยาศาสตร์บัณฑิต",
        edu_uni_major: "สาขาวิทยาการคอมพิวเตอร์",
        edu_uni_faculty: "คณะเทคโนโลยีสารสนเทศและการสื่อสาร",
        edu_uni_school: "มหาวิทยาลัยพะเยา",
        edu_uni_date: "2566 - ปัจจุบัน",
        edu_hs_degree: "มัธยมศึกษาตอนปลาย",
        edu_hs_program: "สายเกาหลี-อังกฤษ",
        edu_hs_school: "โรงเรียนจักรคำคณาทร จังหวัดลำพูน",
        edu_hs_date: "2563 - 2566",
        gpa_label: "เกรดเฉลี่ยสะสม:",
        projects_title: "ผลงาน",
        projects_title_accent: "ล่าสุด",
        proj1_title: "Inappropriate Content Detection API",
        proj1_desc: "พัฒนาระบบตรวจจับเนื้อหาไม่เหมาะสมด้วยโมเดล YOLOv11m ที่เทรนเอง รองรับภาพและวิดีโอ พร้อมแสดง bounding box และ blur อัตโนมัติ ทำงานผ่าน RESTful API บน FastAPI มีหน้าเว็บสำหรับอัปโหลดและทดสอบระบบ ใช้ MongoDB จัดเก็บข้อมูลพร้อม auto-expire และมี OCR สำหรับตรวจสอบสลิปโอนเงินภาษาไทย เพื่อปลดล็อกการใช้งาน APIkey",
        proj2_title: "Medical Knowledge Chatbot",
        proj2_desc: "ระบบตอบคำถามด้านสุขภาพแบบ Real-time ที่ออกแบบให้ใช้งานง่ายด้วย HTML, CSS และ JavaScript พร้อม UI/UX ที่ทันสมัย Backend ใช้ Flask (Python) ร่วมกับ JSON data และได้ผสาน LangChain กับ OpenRouter API ใช้โมเดล DeepSeek-R1 เพื่อตอบคำถามได้แม่นยำและรวดเร็ว",
        proj3_title: "Thai Sentiment Analysis System Using TF IDF",
        proj3_desc: "พัฒนาเว็บแอปพลิเคชันวิเคราะห์ความรู้สึกจากข้อความภาษาไทยด้วยเทคนิค Machine Learning โดยใช้โมเดล TF-IDF ร่วมกับ Logistic Regression พร้อมออกแบบและพัฒนา API ด้วย FastAPI สำหรับการทำนายผลแบบเรียลไทม์ ระบบสามารถคำนวณและแสดงค่า confidence score, latency (มิลลิวินาที) และเวอร์ชันของโมเดล เพื่อสนับสนุนการประเมินประสิทธิภาพเชิงเทคนิคของระบบ พร้อมทั้งออกแบบส่วนติดต่อผู้ใช้ด้วย Jinja2 templating และ static assets เพื่อให้สามารถทดสอบการทำงานผ่านเว็บเบราว์เซอร์ได้อย่างสะดวก",
        contact_title: "ติดต่อ<span class='text-accent'>ผม</span>",
        contact_email_label: "อีเมล",
        contact_phone_label: "เบอร์โทรศัพท์",
        contact_github_label: "GitHub",
        btn_send_email: "ส่งอีเมล",
        btn_call_now: "โทรเลย",
        btn_view_github: "ดู GitHub",
        btn_view_all_projects: "ดูผลงานทั้งหมด",
        nav_certificates: "ใบประกาศ",
        certificates_title: "ใบ",
        certificates_title_accent: "ประกาศนียบัตร",

    },
    en: {
        nav_home: "Home",
        nav_about: "About Me",
        nav_projects: "Projects",
        nav_contact: "Contact",

        hero_greeting: "Hello, my name is",
        hero_title: "Phurin Sukman",
        hero_subtitle: "3rd Year CS Student | Full Stack Developer",

        btn_projects: "View Projects",
        btn_resume: "Download Resume",
        btn_course_structure: "Course Structure",
        btn_contact: "Contact Me",

        about_title: "About",
        about_title_accent: "Me",
        about_desc1: "I am a third-year Computer Science student with a strong interest in Full-Stack Web Development. I enjoy designing and developing systems that seamlessly integrate both Frontend and Backend to work efficiently together.",
        about_desc2: "I have experience developing Python APIs using Flask and FastAPI, working with MongoDB, and integrating Machine Learning technologies such as YOLO into web-based systems. I am currently seeking a Full-Stack Web Development Internship to further develop my skills and gain real-world experience.",

        passion_title: "My",
        passion_title_accent: "Passion",
        passion_desc: "Whenever I work on something, I always ask myself, 'How can I finish this faster?' This mindset drives me to write code that automates repetitive tasks. I believe the more we let computers handle routine work, the more time we can focus on what truly matters.",

        goal_title: "My",
        goal_title_accent: "Goal",
        goal_desc: "My current goal is to secure a Full-Stack Web Development internship with a team that offers hands-on experience. I want to apply my existing skills to help solve real problems while learning new techniques from experienced developers, growing from a student into a professional software developer.",

        skills_title: "Technical ",

        education_title: "Educational",
        education_title_accent: "Background",
        edu_uni_degree: "Bachelor of Science",
        edu_uni_major: "Computer Science",
        edu_uni_faculty: "Faculty of Information and Communication Technology",
        edu_uni_school: "University of Phayao",
        edu_uni_date: "2023 - Present",

        edu_hs_degree: "High School",
        edu_hs_program: "Korean-English Program",
        edu_hs_school: "Chakkham Khanathon School, Lamphun",
        edu_hs_date: "2020 - 2023",

        gpa_label: "Cumulative GPA:",

        projects_title: "Latest",
        projects_title_accent: "Projects",

        proj1_title: "Inappropriate Content Detection API",
        proj1_desc: "An inappropriate content detection system developed using a self-trained YOLOv11m model. It supports both image and video analysis, automatically displays bounding boxes, and applies blur to detected content. The system is built as a RESTful API using FastAPI, includes a web interface for uploading and testing, uses MongoDB with auto-expire for data management, and integrates an OCR system for Thai payment slip verification to unlock API key access.",

        proj2_title: "Medical Knowledge Chatbot",
        proj2_desc: "A real-time medical Q&A chatbot designed with a clean and modern UI using HTML, CSS, and JavaScript. The backend is built with Flask (Python) and JSON-based data, integrated with LangChain and the OpenRouter API using the DeepSeek-R1 model for accurate and fast responses.",

        proj3_title: "Thai Sentiment Analysis System Using TF-IDF",
        proj3_desc: "A Thai sentiment analysis web application developed using Machine Learning techniques, combining TF-IDF with Logistic Regression. The system includes a FastAPI-based backend for real-time predictions, displaying confidence scores, latency (in milliseconds), and model version information. The frontend is built using Jinja2 templating and static assets, allowing users to conveniently test the system via a web browser.",

        contact_title: "Contact <span class='text-accent'>Me</span>",
        contact_email_label: "Email",
        contact_phone_label: "Phone",
        contact_github_label: "GitHub",

        btn_send_email: "Send Email",
        btn_call_now: "Call Now",
        btn_view_github: "View GitHub",
        btn_view_all_projects: "View All Projects",

        nav_certificates: "Certificates",
        certificates_title: "My",
        certificates_title_accent: "Certificates"
    }
};

let currentLang = 'th';

function changeLanguage(lang) {
    if (!lang || !translations[lang]) return;
    currentLang = lang;

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const langBtn = document.getElementById(`btn-${lang}`);
    if (langBtn) langBtn.classList.add('active');

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = translations[lang] && translations[lang][key];
        if (typeof value === 'string') {
            if (value.indexOf('<') !== -1) {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        }
    });

    // Update any language-dependent UI created after initial load
    const showBtn = document.getElementById('showAllCertsBtn');
    if (showBtn) {
        const isExpanded = showBtn.textContent === (currentLang === 'th' ? 'ซ่อน' : 'Show Less') || showBtn.dataset.expanded === 'true';
        showBtn.textContent = isExpanded ? (currentLang === 'th' ? 'ซ่อน' : 'Show Less') : (currentLang === 'th' ? 'ดูเพิ่มเติม' : 'View All');
    }

    localStorage.setItem('preferredLanguage', lang);
}

// ===============================
// Certificate Modal Functions
// ===============================
function openImageModal(imageSrc, title) {
    const modal = document.getElementById('certificateModal');
    const modalBody = document.querySelector('.modal-body');
    const modalCaption = document.getElementById('modalCaption');
    const downloadBtn = document.getElementById('downloadPdf');

    // Clear previous content
    modalBody.innerHTML = '';

    // Create image
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = title;
    img.style.cssText = 'max-width: 90%; max-height: 85vh; object-fit: contain; display: block; margin: 0 auto;';
    img.className = 'modal-image';

    modalBody.appendChild(img);
    modalCaption.textContent = title;

    // Update download button
    if (downloadBtn) {
        downloadBtn.href = imageSrc;
        downloadBtn.download = imageSrc.split('/').pop();
        downloadBtn.innerHTML = '<i class="fas fa-download"></i> ' + (currentLang === 'th' ? 'ดาวน์โหลดรูปภาพ' : 'Download Image');
    }

    modal.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Language
    const savedLang = localStorage.getItem('preferredLanguage') || 'th';
    changeLanguage(savedLang);

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

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
    }

    // Attach click handlers to language buttons (robust fallback to inline onclick)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            let lang = btn.dataset.lang || null;
            if (!lang) {
                const id = btn.id || '';
                if (id.startsWith('btn-')) lang = id.replace('btn-', '');
            }
            if (!lang) {
                const onclick = btn.getAttribute('onclick') || '';
                const m = onclick.match(/changeLanguage\(['\"](.+?)['\"]\)/);
                if (m) lang = m[1];
            }
            if (lang) changeLanguage(lang);
        });
    });

    // 3. Scroll Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // 4. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId) return;
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            const headerHeight = 80;
            const extraOffset = 20;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - extraOffset;
            smoothScrollTo(targetPosition, 800);
        });
    });

    // 5. Close Modal
    const modal = document.getElementById('certificateModal');
    const closeBtn = document.querySelector('.modal-close');
    if (modal && closeBtn) {
        const closeModal = () => {
            modal.style.display = 'none';
        };
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') closeModal();
        });
    }

    // 6. Skills Slider (keep your existing code)
    const skillsSlider = document.querySelector('.skills-slider');
    const skillsTrack = document.querySelector('.skills-track');
    if (skillsSlider && skillsTrack) {
        // ... (keep your existing slider code as-is)
        let isDown = false;
        let startX;
        let currentTranslate = 0;
        let previousTranslate = 0;
        let pauseTimeout;

        function getCurrentTransform() {
            const style = window.getComputedStyle(skillsTrack);
            const matrix = new DOMMatrix(style.transform);
            return matrix.m41;
        }

        function getLoopWidth() {
            const items = skillsTrack.querySelectorAll('.skill-item');
            const itemCount = items.length / 2;
            let width = 0;
            for (let i = 0; i < itemCount; i++) {
                width += items[i].offsetWidth;
                if (i < itemCount - 1) {
                    width += parseFloat(getComputedStyle(skillsTrack).gap || 48);
                }
            }
            return width;
        }

        function wrapPosition(position) {
            const loopWidth = getLoopWidth();
            if (position < -loopWidth) return position + loopWidth;
            else if (position > 0) return position - loopWidth;
            return position;
        }

        let animationFrameId = null;
        let isAutoScrolling = false;

        function startCustomAutoScroll() {
            if (isAutoScrolling) return;
            isAutoScrolling = true;
            const scrollSpeed = 0.5;

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

        function resumeAutoScroll() {
            clearTimeout(pauseTimeout);
            pauseTimeout = setTimeout(() => startCustomAutoScroll(), 1500);
        }

        skillsSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            skillsSlider.style.cursor = 'grabbing';
            skillsSlider.style.userSelect = 'none';
            startX = e.pageX;
            stopCustomAutoScroll();
            skillsTrack.style.animationPlayState = 'paused';
            skillsTrack.style.animation = 'none';
            skillsTrack.style.transition = '';
            previousTranslate = getCurrentTransform();
        });

        ['mouseleave', 'mouseup'].forEach(evt => {
            skillsSlider.addEventListener(evt, () => {
                if (isDown) {
                    isDown = false;
                    skillsSlider.style.cursor = 'grab';
                    skillsSlider.style.userSelect = 'auto';
                    resumeAutoScroll();
                }
            });
        });

        skillsSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const currentX = e.pageX;
            const diff = currentX - startX;
            currentTranslate = previousTranslate + diff;
            currentTranslate = wrapPosition(currentTranslate);
            const wrappedDiff = currentTranslate - previousTranslate;
            if (Math.abs(wrappedDiff) > 1000) {
                previousTranslate = currentTranslate;
                startX = currentX;
            }
            skillsTrack.style.transform = `translateX(${currentTranslate}px)`;
        });

        skillsSlider.style.cursor = 'grab';
        // Start auto-scroll
        setTimeout(resumeAutoScroll, 1000);
    }

    // ===============================
    // Certificates Grid (Clean Version)
    // ===============================
    const certificateFiles = [{
            file: "certificate_dapp_66020981.png",
            title: "JavaScript"
        },
        {
            file: "Screenshot_2026-01-29_135240.png",
            title: "ทักษะการเขียนโปรแกรมคอมพิวเตอร์ด้วยภาษาซี"
        },
        {
            file: "Screenshot_2026-01-29_135251.png",
            title: "ภาษา Python สำหรับวิทยาการข้อมูล"
        },
        {
            file: "Screenshot_2026-01-29_135306.png",
            title: "โปรแกรมคอมพิวเตอร์และขั้นตอนวิธีทางคอมพิวเตอร์"
        },
        {
            file: "Screenshot_2026-01-29_135322.png",
            title: "อบรมปัญญาประดิษฐ์กับภาพทางการเเพทย์"
        },
        {
            file: "Screenshot_2026-01-29_135335.png",
            title: "โครงการหลักสูตรการใช้ LLM เชื่อมต่อ API"
        },
        {
            file: "Screenshot_2026-01-29_135347.png",
            title: "การรู้เทคโนโลยีสารสนเทศ"
        },
        {
            file: "Screenshot_2026-01-29_135400.png",
            title: "ก้าวสู่การเป็นนักวิเคราะห์และออกแบบระบบมืออาชีพ"
        },
        {
            file: "Screenshot_2026-01-29_135425.png",
            title: "เทคโนโลยีคอมพิวเตอร์และการจัดการสารสนเทศเพื่อสังคมและเศรษฐกิจ"
        },
        {
            file: "Screenshot_2026-01-29_135441.png",
            title: "โปรแกรมคอมพิวเตอร์และขั้นตอนวิธีทางคอมพิวเตอร์"
        },
        {
            file: "Screenshot_2026-01-29_135452.png",
            title: "ทักษาคอมพิวเตอร์และเทคโนโลยีสารสนเทศและการสื่อสาร"
        },
        {
            file: "Screenshot_2026-01-29_135506.png",
            title: "การเขียนโปรแกรมคอมพิวเตอร์พื้นฐาน ด้วยภาษาซี 1"
        },
        {
            file: "Screenshot_2026-01-29_135515.png",
            title: "นวัตกรรมและเทคโนโลยีดิจิตอลเพื่อการศึกษา"
        },
        {
            file: "Screenshot_2026-01-29_135535.png",
            title: "บทนำปัญญาประดิษฐ์"
        },
        {
            file: "Screenshot_2026-01-29_135553.png",
            title: "การเขียนโปรเเกรมพื้นฐานสำหรับ AI"
        },
        {
            file: "Screenshot_2026-01-29_135608.png",
            title: "การสร้าง AI โดยใช้ Python"
        },
        {
            file: "Screenshot_2026-01-29_135637.png",
            title: "เริ่มต้นเรียนรู้ปัญญาประดิษฐ์เเละการเขียนโปรเเกรม"
        },
        {
            file: "Screenshot_2026-01-30_140255.png",
            title: "การประยุกต์ใช้ปัญญาประดิษฐ์ขั้นสูง"
        },
        {
            file: "Screenshot_2026-01-29_135650.png",
            title: "ปัญญาประดิษฐ์เเบบดั้งเดิมสู่ปัญญาประดิษฐ์ขั้นสูง"
        },
        {
            file: "Screenshot_2026-01-29_135708.png",
            title: "เทคนิคการเรียนรู้ของเครื่อง ทำงานอย่างไร"
        },
        {
            file: "Screenshot_2026-01-29_135721.png",
            title: "ปัญญาประดิษฐ์เเละเทคโนโลยีการปฎิสัมพันธ์ระหว่างมนุษย์เเละเครื่องจักร"
        },
        {
            file: "Screenshot_2026-01-29_135737.png",
            title: "ไมโครซอฟท์ เวิร์ด"
        },
        {
            file: "Screenshot_2026-01-29_135754.png",
            title: "ไมโครซอฟท์ เพาเวอร์ เเอป"
        },
        {
            file: "Screenshot_2026-01-29_135805.png",
            title: "คอมพิวเตอร์สารสนเทศขั้นพื้นฐาน"
        },
        {
            file: "Screenshot_2026-01-29_135825.png",
            title: "ภาษาอังกฤษเทคโนโลยีช่างอุตสาหกรรม"
        },
        {
            file: "Screenshot_2026-01-29_135844.png",
            title: "การออกเเบบการนำเสนองานอย่างสร้างสรรค์เเละทันสมัย"
        },
        {
            file: "Screenshot_2026-01-29_135854.png",
            title: "ภาษา Python สำหรับวิทยาการข้อมูล"
        },
        {
            file: "Screenshot_2026-01-29_135620.png",
            title: "การประยุกต์ใช้ปัญญาประดิษฐ์ขั้นสูง"
        },
        {
            file: "Screenshot_2026-01-29_135906.png",
            title: "เทคโนโลยีสารสนเทศในยุคดิจิทัล"
        },
        {
            file: "Screenshot_2026-01-30_140816.png",
            title: "การบริหารจัดการระบบและเครือข่าย | System and Network Management"
        },
        {
            file: "Screenshot_2026-01-30_140830.png",
            title: "ภาษาอังกฤษสำหรับนักคอมพิวเตอร์"
        },
        {
            file: "Screenshot_2026-01-30_140842.png",
            title: "เครือข่ายและความปลอดภัย | Network and Security"
        },
        {
            file: "Screenshot_2026-01-30_140901.png",
            title: "โปรแกรม Python สำหรับการคำนวณทางวิทยาศาสตร์"
        },
        {
            file: "Screenshot_2026-01-30_141023.png",
            title: "การเขียนโปรแกรมคอมพิวเตอร์เบื้องต้นสำหรับระบบสารสนเทศ"
        },
        {
            file: "Screenshot_2026-01-30_141209.png",
            title: "เทคโนโลยีสารสนเทศเพื่อชีวิต"
        },
        {
            file: "Screenshot_2026-01-30_141219.png",
            title: "วิทยาการข้อมูลเบื้องต้น"
        },
        {
            file: "Screenshot_2026-01-30_141230.png",
            title: "วิทยาการข้อมูลและการประยุกต์ใช้"
        },
        {
            file: "Screenshot_2026-01-30_141248.png",
            title: "ความรู้พื้นฐานเกี่ยวกับบิ๊กดาตา"
        },
        {
            file: "Screenshot_2026-01-30_141310.png",
            title: "โปรแกรมคอมพิวเตอร์และขั้นตอนวิธีทางคอมพิวเตอร์"
        },
        {
            file: "Screenshot_2026-01-30_141320.png",
            title: "พื้นฐาน Internet of Things (IoTs)"
        },
        {
            file: "Screenshot_2026-01-30_141336.png",
            title: "เทคโนโลยีฮาร์ดแวร์และซอฟต์แวร์ระบบ"
        },
        {
            file: "Screenshot_2026-01-30_141400.png",
            title: "ระบบสมองกลฝังตัวและเทคโนโลยีอินเทอร์เน็ตของสรรพสิ่ง"
        },
        {
            file: "Screenshot_2026-01-30_141419.png",
            title: "การเข้าใจดิจิทัล"
        },
        {
            file: "Screenshot_2026-01-30_141445.png",
            title: "ทักษะความเข้าใจ การใช้เทคโนโลยีดิจิทัล และความมั่นคงปลอดภัยทางไซเบอร์"
        },
        {
            file: "Screenshot_2026-01-30_141525.png",
            title: "ทักษะคอมพิวเตอร์และเทคโนโลยีสารสนเทศและการสื่อสาร"
        },
        {
            file: "Screenshot_2026-01-30_141542.png",
            title: "หลักสูตรการประยุกต์และพัฒนาเว็บไซต์ด้วย Google Sites"
        }
    ];

    const certGrid = document.getElementById("certificatesGrid");
    if (!certGrid) return;

    const INITIAL_VISIBLE = 9; // 3 rows × 4 columns
    let expanded = false;
    const cards = [];

    // Create all cards
    certificateFiles.forEach(cert => {
        const displayName = cert.title;
        const imagePath = `./src/certificates/${cert.file}`;
        const card = document.createElement("div");
        card.className = "certificate-card";
        card.innerHTML = `
            <div class="certificate-image">
                <img src="${imagePath}" alt="${displayName}" loading="lazy" />
                <div class="certificate-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="certificate-info">
                <h3>${displayName}</h3>
            </div>
        `;
        card.addEventListener("click", () => openImageModal(imagePath, displayName));
        certGrid.appendChild(card);
        cards.push(card);
    });

    // Hide extra cards initially
    cards.forEach((card, idx) => {
        if (idx >= INITIAL_VISIBLE) card.style.display = 'none';
    });

    // Add "Show More" button
    const showMoreContainer = document.createElement('div');
    showMoreContainer.className = 'cert-show-more';
    showMoreContainer.style.textAlign = 'center';
    showMoreContainer.style.marginTop = '1.5rem';

    const showMoreBtn = document.createElement('button');
    showMoreBtn.id = 'showAllCertsBtn';
    showMoreBtn.className = 'btn btn-outline';
    showMoreBtn.textContent = currentLang === 'th' ? 'ดูเพิ่มเติม' : 'View All';
    showMoreBtn.addEventListener('click', () => {
        expanded = !expanded;
        cards.forEach((card, idx) => {
            card.style.display = (expanded || idx < INITIAL_VISIBLE) ? '' : 'none';
        });
        showMoreBtn.textContent = expanded ?
            (currentLang === 'th' ? 'ซ่อน' : 'Show Less') :
            (currentLang === 'th' ? 'ดูเพิ่มเติม' : 'View All');
    });

    showMoreContainer.appendChild(showMoreBtn);
    certGrid.parentNode.insertBefore(showMoreContainer, certGrid.nextSibling);

    // Update button text on language change
    const originalChangeLanguage = changeLanguage;
    window.changeLanguage = function (lang) {
        originalChangeLanguage(lang);
        const btn = document.getElementById('showAllCertsBtn');
        if (btn) {
            if (expanded) {
                btn.textContent = lang === 'th' ? 'ซ่อน' : 'Show Less';
            } else {
                btn.textContent = lang === 'th' ? 'ดูเพิ่มเติม' : 'View All';
            }
        }
    };

    // Replace project placeholders with images from src/projects
    // Update this array when you add/remove images in the folder
    const projectImages = [
        './src/projects/Screenshot 2026-01-30 153624.png',
        './src/projects/Screenshot 2026-01-30 160849.png',
        './src/projects/Screenshot 2026-01-30 155921.png'
    ];

    const projectImgEls = document.querySelectorAll('.project-row .project-image img');
    projectImgEls.forEach((imgEl, idx) => {
        if (projectImages[idx]) {
            imgEl.src = projectImages[idx];
            const placeholder = imgEl.parentElement.querySelector('.image-placeholder');
            if (placeholder) placeholder.style.display = 'none';
        }
    });
});

// Custom Smooth Scroll Function
function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        window.scrollTo(0, startPosition + (distance * ease));
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
}