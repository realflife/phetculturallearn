<script setup>
import { useRouter } from 'vue-router'
import img1 from '../assets/picture/tantanod/IMG_9665.JPG'
import img2 from '../assets/picture/tantanod/IMG_9666.JPG'
import img3 from '../assets/picture/tantanod/IMG_9667.JPG'
import img4 from '../assets/picture/tantanod/IMG_9668.JPG'

const router = useRouter()
</script>

<template>
  <main class="slide-container palm-theme">
    <!-- Fixed Back Button -->
    <button class="fixed-back-btn" @click="router.push('/')">
      ← กลับสู่แผนที่
    </button>

    <!-- Slide 1: Hero Cover -->
    <section class="slide slide-1">
      <div class="slide-overlay">
        <div class="content-box glass-panel fade-in-up">
          <span class="badge palm-badge">ภูมิปัญญาเกษตรกรรม อ.บ้านลาด</span>
          <h1 class="title palm-title">วิถีชีวิตคนทำตาลโตนด</h1>
          <p class="subtitle">ลมหายใจแห่งทุ่งนาและรสหวานจากธรรมชาติ</p>
          <div class="scroll-indicator">เลื่อนลงเพื่อสำรวจวิถีชีวิต ↓</div>
        </div>
      </div>
    </section>

    <!-- Slide 2: Palm Sugar Wisdom -->
    <section class="slide slide-2">
      <div class="slide-content dual-col">
        <div class="text-col fade-in-left">
          <h2>🌴 ภูมิปัญญาตาลโตนด</h2>
          <p>
            เพชรบุรีเป็นจังหวัดที่มีต้นตาลโตนดมากที่สุดในประเทศ 
            ชาวบ้านลาดมีความผูกพันและสืบทอดทักษะการปีนต้นตาลเพื่อเก็บน้ำตาลสดจากงวงตาลมาตั้งแต่บรรพบุรุษ
          </p>
          <ul class="feature-list palm-list">
            <li><strong>การนวดงวงตาล:</strong> ศิลปะการทำให้น้ำตาลไหลออกมามากที่สุดด้วยไม้คาบ</li>
            <li><strong>การปีนตาล:</strong> อาชีพที่ต้องใช้ทักษะ ความกล้า และความชำนาญ</li>
            <li><strong>พะยอม:</strong> ไม้ฝาดที่ใส่ในกระบอกเพื่อกันน้ำตาลบูด</li>
          </ul>
        </div>
        <div class="img-col fade-in-right">
          <img :src="img2" alt="ภูมิปัญญาการปีนตาล" class="slide-img rounded shadow-glow" />
        </div>
      </div>
    </section>

    <!-- Slide 3: Video 1 -->
    <section class="slide slide-3">
      <div class="slide-content center-layout">
        <h2 class="text-center mb-1">🎥 วิถีชีวิตคนขึ้นตาล</h2>
        <p class="text-center mb-2">ชมบรรยากาศทุ่งตาลและการเก็บน้ำตาลสดในตอนเช้าตรู่</p>
        <div class="video-container glass-panel fade-in-up">
          <iframe 
            class="custom-video" 
            src="https://www.youtube.com/embed/uigfIDauL04" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </section>

    <!-- Slide 4: Boiling Process -->
    <section class="slide slide-4">
      <div class="slide-content dual-col reverse">
        <div class="text-col fade-in-right">
          <h2>🔥 การเคี่ยวน้ำตาลปึก</h2>
          <p>
            น้ำตาลใสที่เก็บมาได้ต้องนำมาเคี่ยวในเตาตาลด้วยไฟแรงทันที 
            จนเดือดพล่านและงวดกลายเป็นน้ำตาลโตนดแท้ที่มีความหอมหวานเป็นเอกลักษณ์
          </p>
          <div class="palm-benefits">
            <div class="benefit-tag">เตาฟืนดั้งเดิม กลิ่นหอมควันไม้อ่อนๆ</div>
            <div class="benefit-tag">น้ำตาลปึก รสชาติหวานมัน กลมกล่อม</div>
            <div class="benefit-tag">ปราศจากสารเคมี ธรรมชาติ 100%</div>
          </div>
        </div>
        <div class="img-col fade-in-left">
          <img :src="img3" alt="การเคี่ยวน้ำตาล" class="slide-img rounded shadow-glow" />
        </div>
      </div>
    </section>

    <!-- Slide 5: Video 2 -->
    <section class="slide slide-5">
      <div class="slide-content center-layout">
        <h2 class="text-center mb-1">🎥 กระบวนการเคี่ยวน้ำตาล</h2>
        <p class="text-center mb-2">เตาตาลที่ยังคงส่งกลิ่นหอมกรุ่นในชุมชน</p>
        <div class="video-container glass-panel fade-in-up">
          <iframe 
            class="custom-video" 
            src="https://www.youtube.com/embed/SXXCoglPCLU" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </section>

    <!-- Slide 6: Lifestyle & Food -->
    <section class="slide slide-6">
      <div class="slide-content dual-col">
        <div class="text-col fade-in-left">
          <h2>🍽 เสน่ห์อาหารและของหวาน</h2>
          <p>
            ความหวานของน้ำตาลโตนดคือหัวใจสำคัญของ <strong>"อาหารและขนมหวานเมืองเพชร"</strong> 
            ทำให้มีรสชาติที่กลมกล่อม ไม่หวานแหลม และมีกลิ่นหอมเฉพาะตัว
          </p>
          <ul class="feature-list palm-list">
            <li><strong>ขนมหม้อแกง:</strong> หอมน้ำตาลโตนดและหอมเจียว</li>
            <li><strong>แกงหัวตาล:</strong> อาหารพื้นถิ่นที่หาทานยาก ทำจากลูกตาลอ่อน</li>
            <li><strong>จาวตาลเชื่อม:</strong> ของหวานชั้นเลิศจากลูกตาลสุก</li>
          </ul>
        </div>
        <div class="img-col fade-in-right">
          <img :src="img4" alt="อาหารและขนมจากตาลโตนด" class="slide-img rounded shadow-glow" />
        </div>
      </div>
    </section>

    <!-- Slide 7: Video 3 -->
    <section class="slide slide-7">
      <div class="slide-content center-layout">
        <h2 class="text-center mb-1">🎥 รสชาติแห่งเพชรบุรี</h2>
        <p class="text-center mb-2">เมื่อตาลโตนดผสานเข้ากับวิถีชีวิตและวัฒนธรรมอาหาร</p>
        <div class="video-container glass-panel fade-in-up">
          <iframe 
            class="custom-video" 
            src="https://www.youtube.com/embed/gqjC1myQzYg" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </section>

    <!-- Slide 8: Footer -->
    <footer class="slide-footer">
      <div class="footer-content">
        <h3>Phetchaburi Cultural Learn</h3>
        <p>สืบสาน อนุรักษ์ และเผยแพร่วิถีชีวิตเกษตรกรรมและคนทำตาลโตนด อ.บ้านลาด</p>
        <p class="copyright">© 2026 Phetchaburi Cultural Learn. All rights reserved.</p>
      </div>
    </footer>
  </main>
</template>

<style scoped>
/* Palm Theme Styling */
.palm-theme {
  background: linear-gradient(135deg, #1f1406 0%, #b86b25 100%);
  color: #fffaf0;
}

.palm-badge {
  background: linear-gradient(45deg, #e67e22, #d35400) !important;
}

.palm-title {
  background: linear-gradient(45deg, #f1c40f, #ff9f43, #f1c40f) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}

.palm-list li {
  border-left-color: #f39c12 !important;
  background: rgba(243, 156, 18, 0.08) !important;
}

.shadow-glow {
  box-shadow: 0 15px 35px rgba(243, 156, 18, 0.25) !important;
}

.palm-benefits {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1.5rem;
}

.benefit-tag {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px 18px;
  border-radius: 30px;
  font-weight: 500;
  color: #ffecd2;
}

.section-desc {
  font-size: 1.2rem;
  color: #fbdfb9;
  max-width: 800px;
  margin: 0 auto;
}

.single-img-card {
  padding: 1rem;
  max-width: 850px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
}

.featured-photo {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
}

.highlight-pills {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.pill {
  background: rgba(243, 156, 18, 0.2);
  border: 1px solid rgba(243, 156, 18, 0.4);
  color: #ffecd2;
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 600;
}

/* Base Slide Container */
.slide-container {
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

.slide-container::-webkit-scrollbar {
  display: none;
}
.slide-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.fixed-back-btn {
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 1000;
  background: rgba(43, 27, 10, 0.7);
  backdrop-filter: blur(10px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px 22px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Prompt', sans-serif;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.4);
}

.fixed-back-btn:hover {
  background: #d35400;
  transform: translateY(-2px);
}

.slide {
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.slide-1 {
  background: linear-gradient(rgba(31, 20, 6, 0.6), rgba(31, 20, 6, 0.8)), url('../assets/picture/tantanod/IMG_9665.JPG') center/cover;
}
.slide-2 { background: linear-gradient(135deg, #2b1807, #5c300f); }
.slide-3 { background: linear-gradient(135deg, #170d04, #361b07, #693710); }
.slide-4 { background: linear-gradient(135deg, #3d1f0a, #824213, #b86b25); }
.slide-5 { background: linear-gradient(135deg, #170d04, #4a2509, #824213); }
.slide-6 { background: linear-gradient(135deg, #2a1506, #5c300f, #a6581c); }
.slide-7 { background: linear-gradient(135deg, #170d04, #3a1e09, #703b12); }

.glass-panel {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}

.content-box {
  padding: 4rem;
  text-align: center;
  max-width: 850px;
}
.title {
  font-size: 4.2rem;
  font-weight: 800;
  margin: 1rem 0;
}
.subtitle {
  font-size: 1.4rem;
  color: #fbdfb9;
}
.badge {
  color: white;
  padding: 6px 18px;
  border-radius: 20px;
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.scroll-indicator {
  margin-top: 3rem;
  font-size: 1rem;
  color: rgba(255,255,255,0.75);
  animation: bounce 2s infinite;
}

.slide-content {
  width: 90%;
  max-width: 1200px;
  padding: 2rem;
}
.dual-col {
  display: flex;
  align-items: center;
  gap: 4rem;
}
.dual-col.reverse {
  flex-direction: row-reverse;
}
.text-col {
  flex: 1;
}
.text-col h2 {
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  color: #f1c40f;
}
.text-col p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1rem;
}
.img-col {
  flex: 1;
}
.slide-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}
.rounded { border-radius: 20px; }

.feature-list {
  list-style: none;
  padding: 0;
}
.feature-list li {
  font-size: 1.15rem;
  line-height: 1.8;
  margin-bottom: 1.2rem;
  padding: 1.2rem;
  border-left: 5px solid #f39c12;
  border-radius: 0 10px 10px 0;
}

.center-layout h2 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.mb-1 { margin-bottom: 0.5rem !important; }
.mb-2 { margin-bottom: 1.5rem !important; }
.text-center { text-align: center; }

.slide-3 .slide-content, .slide-5 .slide-content, .slide-7 .slide-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 4rem 2rem 2rem 2rem;
}

.video-container {
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16 / 9;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
.custom-video {
  width: 100%;
  height: 100%;
  border: none;
}

.slide-footer {
  width: 100%;
  height: 100vh;
  background: #0f0803;
  padding: 4rem 2rem;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid rgba(255,255,255,0.05);
}
.footer-content h3 {
  color: #f39c12;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}
.footer-content p {
  color: #d1b8a3;
  margin-bottom: 0.5rem;
}
.copyright {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #9c8471 !important;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-15px); }
  60% { transform: translateY(-7px); }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .slide {
    height: 100dvh;
    padding: 1rem;
  }
  .fixed-back-btn {
    top: 1rem;
    left: 1rem;
    padding: 6px 14px;
    font-size: 0.85rem;
  }
  .content-box {
    padding: 1.5rem 1rem;
    max-width: 100%;
  }
  .title {
    font-size: 2.2rem;
    margin: 0.5rem 0;
  }
  .subtitle {
    font-size: 1rem;
  }
  .scroll-indicator {
    margin-top: 1.5rem;
    font-size: 0.85rem;
  }
  .slide-content {
    width: 100%;
    padding: 3.5rem 1rem 1rem 1rem;
    max-height: 100vh;
    overflow-y: auto;
  }
  .dual-col {
    flex-direction: column;
    text-align: center;
    gap: 0.8rem;
  }
  .dual-col.reverse {
    flex-direction: column;
  }
  .text-col h2 {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }
  .text-col p {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }
  .feature-list li {
    font-size: 0.9rem;
    padding: 0.8rem;
    margin-bottom: 0.5rem;
  }
  .slide-img {
    height: auto;
    max-height: 25vh;
    width: 100%;
    object-fit: cover;
  }
  .multi-img-col {
    flex-direction: row;
    gap: 0.5rem;
  }
  .multi-img-col .slide-img {
    height: auto;
    max-height: 20vh;
    flex: 1;
  }
  .featured-photo {
    max-height: 25vh;
  }
  .video-container {
    max-width: 100%;
    max-height: 35vh;
  }
}
</style>
