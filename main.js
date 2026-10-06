/* ============================================
   DRIVE WITH WABORARO — Interactions
============================================ */

/* ============================================
   QUIZ DATA
============================================ */
const quizQuestions = [
    {
        q: "What does a red octagonal sign mean?",
        options: ["Slow down", "Stop completely", "Yield to traffic", "No entry"],
        correct: 1,
        explanation: "A red octagonal sign is the universal STOP sign. You must come to a complete stop, check for traffic, and only proceed when it is safe."
    },
    {
        q: "At a four-way stop, who has the right of way?",
        options: ["The fastest vehicle", "The vehicle on the right", "The vehicle that arrived first", "Whoever honks first"],
        correct: 2,
        explanation: "At a four-way stop, the first vehicle to arrive and come to a complete stop has the right of way. If two arrive at the same time, yield to the vehicle on your right."
    },
    {
        q: "What is the maximum speed limit in a residential area in Botswana?",
        options: ["40 km/h", "60 km/h", "80 km/h", "100 km/h"],
        correct: 1,
        explanation: "In built-up residential areas, the default speed limit is 60 km/h unless otherwise signposted. Always watch for signs as they may lower it further."
    },
    {
        q: "When are you allowed to overtake on the left?",
        options: ["Whenever you want", "On a multi-lane road when traffic is moving in the same direction", "On a single-lane road", "Never"],
        correct: 1,
        explanation: "On a multi-lane road, when traffic is moving in the same direction and it is safe, you may overtake on the left. On single-lane roads, overtaking is done on the right."
    },
    {
        q: "What does a yellow diamond sign with a pedestrian symbol mean?",
        options: ["Pedestrians are prohibited", "Pedestrian crossing ahead — be alert", "Parking area for pedestrians", "School zone ends"],
        correct: 1,
        explanation: "Yellow diamond warning signs indicate hazards ahead. A pedestrian symbol means there's a pedestrian crossing coming up — slow down and watch for people."
    },
    {
        q: "How far before a turn should you indicate?",
        options: ["10 metres", "20 metres", "30 metres", "50 metres"],
        correct: 2,
        explanation: "In Botswana, you should signal at least 30 metres before turning or changing lanes. This gives other drivers time to react."
    },
    {
        q: "What is the legal blood alcohol limit for a learner driver in Botswana?",
        options: ["0.08%", "0.05%", "0.02%", "0.00% (zero tolerance)"],
        correct: 3,
        explanation: "Learner and newly qualified drivers must have ZERO alcohol in their system. For experienced drivers, the legal limit is 0.08%, but the safest choice is always zero."
    },
    {
        q: "A solid white line across the road means:",
        options: ["You must stop if safe", "You must not cross it", "You may cross when turning", "It is a give way line"],
        correct: 0,
        explanation: "A solid white line across the road is a stop line. You must come to a complete stop before proceeding when safe."
    },
    {
        q: "When driving in fog, you should use:",
        options: ["High beam headlights", "Low beam headlights or fog lights", "Hazard lights only", "No lights"],
        correct: 1,
        explanation: "High beams reflect off fog and make visibility worse. Use low beams or dedicated fog lights to see and be seen."
    },
    {
        q: "What is the minimum safe following distance in dry conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "5 seconds"],
        correct: 2,
        explanation: "The 3-second rule is a minimum. In wet or poor conditions, double it. This gives you time to react and brake safely."
    }
];

/* ============================================
   SOCIAL MEDIA FEED DATA
============================================ */
const socialPosts = [
    { platform: "tiktok", caption: "The #1 question in the theory test — and how to answer it", views: "142K", likes: "8.4K", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "https://tiktok.com" },
    { platform: "tiktok", caption: "Road signs explained in 60 seconds 🚦", views: "98K", likes: "5.2K", img: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "https://tiktok.com" },
    { platform: "instagram", caption: "3 signs every student forgets on test day", views: "45K", likes: "2.8K", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "https://instagram.com" },
    { platform: "tiktok", caption: "POV: You're taking your theory test tomorrow", views: "210K", likes: "12.6K", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "https://tiktok.com" },
    { platform: "facebook", caption: "Free practice question of the day — check the comments 👀", views: "18K", likes: "1.1K", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "https://facebook.com" },
    { platform: "tiktok", caption: "What to do if you fail your test (don't panic!)", views: "76K", likes: "4.9K", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "https://tiktok.com" }
];

/* ============================================
   TESTIMONIAL WALL DATA
============================================ */
const wallComments = [
    { name: "Neo M.", handle: "@neom_22", platform: "tiktok", text: "Bro I literally passed because of your videos! Thank you so much 🔥🔥", likes: 342, time: "2 days ago", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    { name: "Kefilwe S.", handle: "@kefi.bw", platform: "instagram", text: "The way you explain things makes sense the FIRST time. That's rare.", likes: 189, time: "5 days ago", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    { name: "Thabo R.", handle: "@thaboramotswe", platform: "tiktok", text: "POV: Watching this 10 minutes before my test 💀 but it worked!", likes: 567, time: "1 week ago", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    { name: "Naledi P.", handle: "@naledi_p", platform: "facebook", text: "Booked a private session with Waboraro — worth every Pula. Passed 94%!", likes: 234, time: "3 days ago", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    { name: "Boitumelo K.", handle: "@boity_k", platform: "tiktok", text: "I've watched every one of your videos 3 times. Please never stop 🙏", likes: 421, time: "4 days ago", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    { name: "Lesego T.", handle: "@lesego_t", platform: "instagram", text: "Your energy on camera makes learning fun. Wish my school teachers were like you 😂", likes: 156, time: "6 days ago", avatar: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    { name: "Amantle B.", handle: "@amantle.bw", platform: "tiktok", text: "Second attempt and I PASSED. This man is a legend 🇧🇼", likes: 789, time: "1 week ago", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    { name: "Kabo M.", handle: "@kabomothibi", platform: "facebook", text: "Told my whole class about your page. You deserve way more followers 🙌", likes: 298, time: "2 weeks ago", avatar: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" }
];

/* ============================================
   HOME QUIZ PREVIEW
============================================ */
let previewIndex = 0;

function initQuizPreview() {
    const container = document.getElementById('home-quiz');
    if (!container) return;
    renderPreviewQuestion();
}

function renderPreviewQuestion() {
    const q = quizQuestions[previewIndex];
    const progressEl = document.getElementById('preview-progress');
    const numEl = document.getElementById('preview-num');
    const qEl = document.getElementById('preview-question');
    const optionsEl = document.getElementById('preview-options');
    const feedbackEl = document.getElementById('preview-feedback');
    const nextBtn = document.getElementById('preview-next');

    if (!qEl) return;

    feedbackEl.classList.remove('show');
    nextBtn.classList.remove('show');

    progressEl.style.width = ((previewIndex + 1) / quizQuestions.length * 100) + '%';
    numEl.innerText = `Question ${previewIndex + 1} of ${quizQuestions.length}`;
    qEl.innerText = q.q;
    optionsEl.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.innerHTML = `<span class="letter">${letters[i]}</span> ${opt}`;
        btn.onclick = () => answerPreview(i, btn);
        optionsEl.appendChild(btn);
    });
}

function answerPreview(selectedIndex, btn) {
    const q = quizQuestions[previewIndex];
    const optionsEl = document.getElementById('preview-options');
    const feedbackEl = document.getElementById('preview-feedback');
    const nextBtn = document.getElementById('preview-next');

    optionsEl.querySelectorAll('.quiz-option').forEach(b => {
        b.style.pointerEvents = 'none';
    });

    const allBtns = optionsEl.querySelectorAll('.quiz-option');
    if (selectedIndex === q.correct) {
        btn.classList.add('correct');
        feedbackEl.innerHTML = `<strong>✓ Correct!</strong> ${q.explanation}`;
    } else {
        btn.classList.add('wrong');
        allBtns[q.correct].classList.add('correct');
        feedbackEl.innerHTML = `<strong>✗ Not quite.</strong> ${q.explanation}`;
    }

    feedbackEl.classList.add('show');
    nextBtn.classList.add('show');
}

function nextPreviewQuestion() {
    previewIndex = (previewIndex + 1) % quizQuestions.length;
    renderPreviewQuestion();
}

/* ============================================
   FULL QUIZ PAGE
============================================ */
let fullQuizIndex = 0;
let fullQuizScore = 0;

function initFullQuiz() {
    const container = document.getElementById('full-quiz');
    if (!container) return;
    renderFullQuestion();
}

function renderFullQuestion() {
    const q = quizQuestions[fullQuizIndex];
    const numEl = document.getElementById('full-num');
    const progressEl = document.getElementById('full-progress');
    const qEl = document.getElementById('full-question');
    const optionsEl = document.getElementById('full-options');
    const feedbackEl = document.getElementById('full-feedback');
    const nextBtn = document.getElementById('full-next');
    const resultEl = document.getElementById('full-result');

    if (!qEl) return;

    if (fullQuizIndex >= quizQuestions.length) {
        document.getElementById('full-quiz-body').style.display = 'none';
        resultEl.classList.add('show');
        const percent = Math.round((fullQuizScore / quizQuestions.length) * 100);
        document.getElementById('score-num').innerText = percent + '%';
        document.getElementById('score-correct').innerText = fullQuizScore;
        document.getElementById('score-total').innerText = quizQuestions.length;

        const title = document.getElementById('result-title');
        const msg = document.getElementById('result-msg');
        if (percent >= 80) {
            title.innerText = "🎉 Excellent work!";
            msg.innerText = "You're well on your way to passing your theory test. Keep practising and you'll be ready in no time.";
        } else if (percent >= 60) {
            title.innerText = "👍 Good effort!";
            msg.innerText = "You're getting there. Review the questions you missed and try again — you'll improve fast.";
        } else {
            title.innerText = "📚 Keep studying!";
            msg.innerText = "Every expert was once a beginner. Review the lessons, try again, and you'll get there.";
        }
        return;
    }

    feedbackEl.classList.remove('show');
    nextBtn.classList.remove('show');

    numEl.innerText = `Question ${fullQuizIndex + 1} of ${quizQuestions.length}`;
    progressEl.style.width = ((fullQuizIndex + 1) / quizQuestions.length * 100) + '%';
    qEl.innerText = q.q;
    optionsEl.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-full-option';
        btn.innerHTML = `<span class="letter">${letters[i]}</span> ${opt}`;
        btn.onclick = () => answerFull(i, btn);
        optionsEl.appendChild(btn);
    });
}

function answerFull(selectedIndex, btn) {
    const q = quizQuestions[fullQuizIndex];
    const optionsEl = document.getElementById('full-options');
    const feedbackEl = document.getElementById('full-feedback');
    const nextBtn = document.getElementById('full-next');

    optionsEl.querySelectorAll('.quiz-full-option').forEach(b => {
        b.classList.add('disabled');
    });

    const allBtns = optionsEl.querySelectorAll('.quiz-full-option');
    if (selectedIndex === q.correct) {
        btn.classList.add('correct');
        fullQuizScore++;
        feedbackEl.innerHTML = `<strong>✓ Correct!</strong> ${q.explanation}`;
    } else {
        btn.classList.add('wrong');
        allBtns[q.correct].classList.add('correct');
        feedbackEl.innerHTML = `<strong>✗ Not quite.</strong> ${q.explanation}`;
    }

    feedbackEl.classList.add('show');
    nextBtn.classList.add('show');
    nextBtn.innerText = fullQuizIndex === quizQuestions.length - 1 ? "See Results →" : "Next Question →";
}

function nextFullQuestion() {
    fullQuizIndex++;
    renderFullQuestion();
}

function restartQuiz() {
    fullQuizIndex = 0;
    fullQuizScore = 0;
    document.getElementById('full-quiz-body').style.display = 'block';
    document.getElementById('full-result').classList.remove('show');
    renderFullQuestion();
}

/* ============================================
   VIDEO HERO — Auto-load + Mute Toggle
============================================ */
function initVideoHeroes() {
    const videoHeroes = document.querySelectorAll('.video-hero');

    videoHeroes.forEach(hero => {
        const video = hero.querySelector('video');
        if (!video) return;

        video.muted = true;
        video.playsInline = true;
        video.loop = true;
        video.setAttribute('playsinline', '');
        video.setAttribute('muted', '');
        video.setAttribute('loop', '');

        video.addEventListener('canplaythrough', () => {
            video.classList.add('loaded');
        });

        const tryPlay = () => {
            const p = video.play();
            if (p !== undefined) {
                p.then(() => {
                    video.classList.add('loaded');
                }).catch(() => {
                    console.info('Video autoplay blocked — showing poster');
                });
            }
        };

        tryPlay();
        document.addEventListener('touchstart', tryPlay, { once: true });
        document.addEventListener('click', tryPlay, { once: true });

        video.addEventListener('error', () => {
            video.style.display = 'none';
        });
    });

    document.querySelectorAll('.video-hero-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const video = btn.closest('.video-hero').querySelector('video');
            if (!video) return;
            video.muted = !video.muted;
            const icon = btn.querySelector('i');
            if (video.muted) {
                icon.className = 'fas fa-volume-mute';
            } else {
                icon.className = 'fas fa-volume-up';
                video.play().catch(() => {});
            }
        });
    });
}

/* ============================================
   RENDER SOCIAL FEED
============================================ */
function renderSocialFeed() {
    const grid = document.getElementById('social-feed-grid');
    if (!grid) return;

    const platformIcons = {
        tiktok: 'fab fa-tiktok',
        instagram: 'fab fa-instagram',
        facebook: 'fab fa-facebook-f'
    };

    grid.innerHTML = socialPosts.map(post => `
        <a href="${post.link}" target="_blank" rel="noopener" class="feed-card">
            <div class="feed-card-img" style="background-image: url('${post.img}');"></div>
            <div class="feed-platform">
                <i class="${platformIcons[post.platform]}"></i>
                ${post.platform}
            </div>
            <div class="feed-play"><i class="fas fa-play"></i></div>
            <div class="feed-meta">
                <div class="feed-caption">${post.caption}</div>
                <div class="feed-stats">
                    <span><i class="fas fa-eye"></i> ${post.views}</span>
                    <span><i class="fas fa-heart"></i> ${post.likes}</span>
                </div>
            </div>
        </a>
    `).join('');
}

/* ============================================
   RENDER TESTIMONIAL WALL
============================================ */
function renderTestimonialWall() {
    const grid = document.getElementById('testimonial-wall');
    if (!grid) return;

    const platformIcons = {
        tiktok: 'fab fa-tiktok',
        instagram: 'fab fa-instagram',
        facebook: 'fab fa-facebook-f'
    };

    grid.innerHTML = wallComments.map(c => `
        <div class="wall-comment">
            <div class="wall-header">
                <div class="wall-avatar" style="background-image: url('${c.avatar}');"></div>
                <div class="wall-user">
                    <div class="wall-name">${c.name}</div>
                    <div class="wall-handle">${c.handle}</div>
                </div>
                <i class="${platformIcons[c.platform]} wall-platform-icon ${c.platform}"></i>
            </div>
            <div class="wall-text">${c.text}</div>
            <div class="wall-footer">
                <span class="wall-likes"><i class="fas fa-heart"></i> ${c.likes}</span>
                <span class="wall-time">${c.time}</span>
            </div>
        </div>
    `).join('');
}

/* ============================================
   CONTACT FORM
============================================ */
function submitContact(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value || 'friend';
    alert(`Thank you, ${name}!\n\nWaboraro will get back to you within 24 hours.\n\nFor faster response, WhatsApp him directly: +267 71 234 567`);
    e.target.reset();
}

/* ============================================
   INITIALISE
============================================ */
document.addEventListener('DOMContentLoaded', () => {
    initQuizPreview();
    initFullQuiz();
    initVideoHeroes();
    renderSocialFeed();
    renderTestimonialWall();
});
