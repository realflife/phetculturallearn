<script setup>
import { useRouter } from 'vue-router'
// We use a relative path to import the asset, Vite will bundle it correctly
import videoSrc from '../assets/video/thai_song_dum.mp4'
import img1 from '../assets/picture/1.jpeg'
import img2 from '../assets/picture/2.jpeg'
import imgHouse from '../assets/picture/3.jpg'
import imgCulture from '../assets/picture/4.jpg'

const router = useRouter()
</script>

<template>
  <main class="slide-container">
    <!-- Back Button overlay -->
    <button class="fixed-back-btn" @click="router.push('/')">
      ← กลับสู่แผนที่
    </button>

    <!-- Slide 1: Cover & Intro -->
    <section class="slide slide-1">
      <div class="slide-overlay">
        <div class="content-box glass-panel fade-in-up">
          <span class="badge">ชาติพันธุ์ในเพชรบุรี</span>
          <h1 class="title">ลาวโซ่ง (ไทยทรงดำ)</h1>
          <p class="subtitle">ร่องรอยแห่งวิถีชีวิตจากเมืองแถง สู่ผืนดินเพชรบุรี</p>
          <div class="scroll-indicator">เลื่อนลงเพื่อสำรวจ ↓</div>
        </div>
      </div>
    </section>

    <!-- Slide 2: History -->
    <section class="slide slide-2">
      <div class="slide-content dual-col">
        <div class="text-col fade-in-left">
          <h2>📜 ประวัติความเป็นมา</h2>
          <p>
            ชาวไทยทรงดำมีถิ่นกำเนิดเดิมอยู่ที่ <strong>"เมืองแถง" (เดียนเบียนฟู)</strong> ในแคว้นสิบสองจุไทย (เวียดนามตอนเหนือ)
            อพยพเข้ามาในไทยตั้งแต่สมัยกรุงธนบุรีจนถึงรัตนโกสินทร์ตอนต้น
          </p>
          <p>
            โดยเฉพาะในสมัยรัชกาลที่ 3 ได้เข้ามาตั้งถิ่นฐานหนาแน่นที่ <strong>อำเภอเขาย้อย จังหวัดเพชรบุรี</strong> 
            เนื่องจากภูมิประเทศมีภูเขาและป่าไม้คล้ายคลึงกับบ้านเกิดของตน จึงเปรียบเสมือน "เมืองแม่" ของชาวลาวโซ่งในไทย
          </p>
        </div>
        <div class="img-col fade-in-right">
          <img :src="img1" alt="ประวัติลาวโซ่ง" class="slide-img rounded" />
        </div>
      </div>
    </section>

    <!-- Slide 3: Culture & Architecture -->
    <section class="slide slide-3">
      <div class="slide-content dual-col reverse">
        <div class="text-col fade-in-right">
          <h2>👗 วัฒนธรรมและเอกลักษณ์</h2>
          <ul class="feature-list">
            <li><strong>การแต่งกาย:</strong> สวมเสื้อผ้าสีดำเป็นหลัก คำว่า "โซ่ง" หรือ "ซ่วง" แปลว่า กางเกง (ผู้สวมกางเกงดำ)</li>
            <li><strong>ทรงผมสตรี:</strong> มีทรงผมถึง 8 แบบ บ่งบอกสถานภาพ เช่น โสด แต่งงานแล้ว หรือมีบุตร</li>
            <li><strong>สถาปัตยกรรม:</strong> "เรือนเครื่องผูก" ยกพื้นสูง หลังคาโค้งต่ำคลุมถึงพื้นเพื่อกันลมหนาว ยอดหน้าจั่วมีไม้แกะสลักไขว้กันเรียกว่า <strong>"ขอกุด"</strong> (คล้ายเขากวาง)</li>
          </ul>
        </div>
        <div class="img-col fade-in-left multi-img-col">
          <img :src="img2" alt="วัฒนธรรมการแต่งกาย" class="slide-img rounded mb-1" />
          <img :src="imgHouse" alt="สถาปัตยกรรมเรือนไทยทรงดำ" class="slide-img rounded" />
        </div>
      </div>
    </section>

    <!-- Slide 4: Beliefs & Traditions -->
    <section class="slide slide-4">
      <div class="slide-bg-overlay">
        <img :src="imgCulture" class="bg-blur" alt="Background Culture" />
      </div>
      <div class="slide-content center-layout text-center fade-in-up relative-z">
        <h2>🙏 ประเพณีและความเชื่อ</h2>
        <div class="cards-wrapper">
          <div class="belief-card glass-panel">
            <h3>พิธีเสนเรือน</h3>
            <p>การเซ่นไหว้ผีเรือนและบรรพบุรุษเพื่อความเป็นสิริมงคล เป็นพิธีกรรมที่สำคัญที่สุดของชาวไทยทรงดำ แสดงถึงความกตัญญูและผูกพันกับผีบรรพชน</p>
          </div>
          <div class="belief-card glass-panel">
            <h3>ประเพณีเล่นลาน</h3>
            <p>การละเล่นเพื่อสร้างความสามัคคีและให้หนุ่มสาวได้พบปะกัน เช่น การอิ้นกอน, การเล่นลูกช่วง, และการฟ้อนแคน</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Slide 5: Video Documentary -->
    <section class="slide slide-5">
      <div class="slide-content center-layout">
        <h2 class="text-center mb-1">🎥 สารคดีวิถีชีวิตไทยทรงดำ</h2>
        <p class="text-center mb-2">ชมภาพบรรยากาศจริงของประเพณีและวัฒนธรรม</p>
        
        <div class="video-container glass-panel fade-in-up">
          <video 
            class="custom-video" 
            controls 
            preload="metadata"
            :src="videoSrc"
          >
            <source :src="videoSrc" type="video/mp4" />
            เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ
          </video>
        </div>
      </div>
    </section>

    <!-- Slide 6: Footer -->
    <footer class="slide-footer">
      <div class="footer-content">
        <h3>Phetchaburi Cultural Map</h3>
        <p>สร้างสรรค์ด้วย ❤️ เพื่อสืบสานและอนุรักษ์วัฒนธรรมท้องถิ่น</p>
        <p class="copyright">© 2026 PhetLearn Platform. All rights reserved.</p>
      </div>
    </footer>

  </main>
</template>

<style scoped>
/* Full Page Scroll Snapping Container */
.slide-container {
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background-color: var(--dark-bg);
  color: var(--text-light);
}

/* Hide Scrollbar for cleaner presentation */
.slide-container::-webkit-scrollbar {
  display: none;
}
.slide-container {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Fixed Back Button */
.fixed-back-btn {
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Prompt', sans-serif;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.fixed-back-btn:hover {
  background: var(--primary-color);
  transform: translateY(-2px);
}

/* Individual Slide */
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

/* Slide Backgrounds */
.slide-1 {
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1542640244-7e672d6cb466?auto=format&fit=crop&q=80&w=2000') center/cover;
}
.slide-2 { background: linear-gradient(135deg, #2c3e50, #000000); }
.slide-3 { background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d); }
.slide-4 { background: linear-gradient(135deg, #4b1248, #f0c27b); }
.slide-5 { background: linear-gradient(135deg, #0f2027, #203a43, #2c5364); }

/* Glass Panel Utility */
.glass-panel {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

/* Slide 1 Content */
.content-box {
  padding: 4rem;
  text-align: center;
  max-width: 800px;
}
.title {
  font-size: 5rem;
  font-weight: 700;
  margin: 1rem 0;
  background: -webkit-linear-gradient(45deg, #ff9ff3, #feca57);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.subtitle {
  font-size: 1.5rem;
  color: #e0e0e0;
}
.badge {
  background: var(--primary-color);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.scroll-indicator {
  margin-top: 3rem;
  font-size: 1rem;
  color: rgba(255,255,255,0.7);
  animation: bounce 2s infinite;
}

/* General Layouts */
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
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #feca57;
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
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}
.rounded { border-radius: 20px; }

/* Feature List */
.feature-list {
  list-style: none;
  padding: 0;
}
.feature-list li {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  background: rgba(255,255,255,0.05);
  padding: 1.5rem;
  border-left: 5px solid var(--primary-color);
  border-radius: 0 10px 10px 0;
}

/* Center Layout & Cards */
.center-layout h2 {
  font-size: 3rem;
  margin-bottom: 3rem;
  color: #fff;
}
.cards-wrapper {
  display: flex;
  gap: 2rem;
  justify-content: center;
}
.belief-card {
  padding: 3rem 2rem;
  flex: 1;
  max-width: 450px;
  transition: transform 0.3s ease;
}
.belief-card:hover {
  transform: translateY(-10px);
  background: rgba(255,255,255,0.15);
}
.belief-card h3 {
  font-size: 1.8rem;
  color: #ff9ff3;
  margin-bottom: 1rem;
}
.belief-card p {
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Video Section */
.mb-1 { margin-bottom: 0.5rem !important; }
.mb-2 { margin-bottom: 1.5rem !important; }
.text-center { text-align: center; }

/* Constrain content height for slide 5 to prevent top/bottom cutoff */
.slide-5 .slide-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 4rem 2rem 2rem 2rem;
}

.video-container {
  width: 100%;
  max-width: 1200px;
  max-height: 65vh;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
}
.custom-video {
  width: 100%;
  height: 100%;
  max-height: 65vh;
  object-fit: contain; /* Prevents video from being eaten/cropped */
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  background: transparent;
}

/* Background Blur effect for Slide 4 */
.slide-bg-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 1;
  overflow: hidden;
}
.bg-blur {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  filter: blur(8px);
  transform: scale(1.1);
}
.relative-z {
  position: relative;
  z-index: 2;
}

/* Multi Image Col */
.multi-img-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.multi-img-col .slide-img {
  height: 250px;
}

/* Footer Slide */
.slide-footer {
  width: 100%;
  background: #0f172a;
  padding: 4rem 2rem;
  scroll-snap-align: end;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid rgba(255,255,255,0.1);
}
.footer-content h3 {
  color: var(--primary-color);
  font-size: 1.8rem;
  margin-bottom: 1rem;
}
.footer-content p {
  color: #94a3b8;
  margin-bottom: 0.5rem;
}
.copyright {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #64748b !important;
}

/* Animations */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-15px); }
  60% { transform: translateY(-7px); }
}

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
    padding: 3.5rem 0.5rem 1rem 0.5rem;
    max-height: 90vh;
    overflow-y: auto;
  }
  .dual-col {
    flex-direction: column;
    text-align: center;
    gap: 1.2rem;
  }
  .dual-col.reverse {
    flex-direction: column;
  }
  .text-col h2 {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }
  .text-col p {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
  .slide-img {
    height: 200px;
    border-radius: 12px;
  }
  .multi-img-col .slide-img {
    height: 130px;
  }
  .feature-list li {
    text-align: left;
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 0.8rem;
  }
  .center-layout h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
  .cards-wrapper {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .belief-card {
    padding: 1.2rem 1rem;
    max-width: 100%;
  }
  .belief-card h3 {
    font-size: 1.3rem;
  }
  .belief-card p {
    font-size: 0.9rem;
  }
  .slide-5 .slide-content {
    padding: 3.5rem 0.5rem 1rem 0.5rem;
  }
  .video-container {
    max-height: 45vh;
  }
  .custom-video {
    max-height: 45vh;
  }
  .slide-footer {
    padding: 3rem 1rem;
  }
}
</style>
