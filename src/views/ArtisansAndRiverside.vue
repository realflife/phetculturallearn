<script setup>
import { useRouter } from 'vue-router'
import img1 from '../assets/picture/sil_phet/IMG_9660.JPG'
import img2 from '../assets/picture/sil_phet/IMG_9661.JPG'
import img3 from '../assets/picture/sil_phet/IMG_9662.JPG'
import img4 from '../assets/picture/sil_phet/IMG_9664.JPG'

const router = useRouter()
</script>

<template>
  <main class="slide-container art-theme">
    <!-- Fixed Back Button -->
    <button class="fixed-back-btn" @click="router.push('/')">
      ← กลับสู่แผนที่
    </button>

    <!-- Slide 1: Hero Cover -->
    <section class="slide slide-1">
      <div class="slide-overlay">
        <div class="content-box glass-panel fade-in-up">
          <span class="badge art-badge">งานศิลป์ชั้นครู อ.เมืองเพชรบุรี</span>
          <h1 class="title art-title">วิถีชีวิตช่างศิลป์ & ชุมชนริมน้ำ</h1>
          <p class="subtitle">สืบสานงานปูนปั้น งานสลักหยวก และลมหายใจแห่งแม่น้ำเพชร</p>
          <div class="scroll-indicator">เลื่อนลงเพื่อสำรวจวิถีชีวิต ↓</div>
        </div>
      </div>
    </section>

    <!-- Slide 2: Phetchaburi Artisans -->
    <section class="slide slide-2">
      <div class="slide-content dual-col">
        <div class="text-col fade-in-left">
          <h2>🎨 สกุลช่างเมืองเพชร</h2>
          <p>
            เมืองเพชรบุรีเปรียบเสมือน <strong>"อยุธยาที่ยังมีชีวิต"</strong> แหล่งรวมงานช่างชั้นครู 
            ที่สืบทอดภูมิปัญญากันมาแต่โบราณ ทั้งงานปูนปั้น งานแกะสลักไม้ และงานแทงหยวก
          </p>
          <ul class="feature-list art-list">
            <li><strong>งานปูนปั้น:</strong> อ่อนช้อย มีชีวิตชีวา ประดับตามวัดวาอารามสำคัญ</li>
            <li><strong>งานสลักหยวก:</strong> ศิลปะแห่งความศรัทธาในงานพิธีกรรม</li>
            <li><strong>ช่างทองเมืองเพชร:</strong> ความประณีตวิจิตรระดับราชสำนัก</li>
          </ul>
        </div>
        <div class="img-col fade-in-right">
          <img :src="img1" alt="งานช่างศิลป์เมืองเพชร" class="slide-img rounded shadow-glow" />
        </div>
      </div>
    </section>

    <!-- Slide 3: Riverside Life -->
    <section class="slide slide-3">
      <div class="slide-content dual-col reverse">
        <div class="text-col fade-in-right">
          <h2>🌊 ลมหายใจริมแม่น้ำเพชร</h2>
          <p>
            วิถีชีวิตชาวริมน้ำที่ผูกพันกับสายน้ำเพชรบุรีมาอย่างยาวนาน ทั้งด้านเกษตรกรรม 
            การสัญจร และความเชื่อ ประเพณีที่สืบทอดต่อกันมาในชุมชนย่านคลองกระแชง
          </p>
          <div class="art-benefits">
            <div class="benefit-tag">บ้านเรือนไม้ทรงไทยโบราณริมน้ำ</div>
            <div class="benefit-tag">อาหารพื้นถิ่นและขนมหวานเมืองเพชร</div>
            <div class="benefit-tag">ศิลปะบนกำแพง (Street Art) เล่าเรื่องราวชุมชน</div>
          </div>
        </div>
        <div class="img-col fade-in-left multi-img-col">
          <img :src="img2" alt="ชุมชนริมแม่น้ำ" class="slide-img rounded mb-1" />
          <img :src="img3" alt="บรรยากาศย่านคลองกระแชง" class="slide-img rounded" />
        </div>
      </div>
    </section>

    <!-- Slide 4: Cultural Performance -->
    <section class="slide slide-4">
      <div class="slide-content center-layout text-center fade-in-up">
        <h2>🎭 มรดกวัฒนธรรมและการแสดง</h2>
        <p class="section-desc mb-2">
          มนต์เสน่ห์ของการแสดงพื้นบ้าน เช่น การเชิดหนังใหญ่ และละครชาตรี 
          ที่มักแสดงคู่กับการเฉลิมฉลองและการบวงสรวงสิ่งศักดิ์สิทธิ์
        </p>

        <div class="single-img-card glass-panel mb-2">
          <img :src="img4" alt="วัฒนธรรมและการแสดงเมืองเพชร" class="featured-photo" />
        </div>

        <div class="highlight-pills">
          <span class="pill">วัดมหาธาตุวรวิหาร</span>
          <span class="pill">หนังใหญ่วัดพลับพลาชัย</span>
          <span class="pill">ละครชาตรีเมืองเพชร</span>
        </div>
      </div>
    </section>

    <!-- Slide 5: Video Documentary -->
    <section class="slide slide-5">
      <div class="slide-content center-layout">
        <h2 class="text-center mb-1">🎥 สารคดีสกุลช่างเมืองเพชร</h2>
        <p class="text-center mb-2">เรื่องราวแห่งความประณีตของช่างศิลป์และวิถีคนริมน้ำ</p>

        <div class="video-container glass-panel fade-in-up">
          <iframe 
            class="custom-video" 
            src="https://www.youtube.com/embed/3LYpWtt6zFY?si=MLqNazsU-g4a7uFE" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </section>

    <!-- Slide 6: Footer -->
    <footer class="slide-footer">
      <div class="footer-content">
        <h3>Phetchaburi Cultural Learn</h3>
        <p>สืบสาน อนุรักษ์ และเผยแพร่วิถีชีวิตช่างศิลป์และชุมชนริมน้ำ อ.เมืองเพชรบุรี</p>
        <p class="copyright">© 2026 Phetchaburi Cultural Learn. All rights reserved.</p>
      </div>
    </footer>
  </main>
</template>

<style scoped>
/* Art Theme Styling */
.art-theme {
  background: linear-gradient(135deg, #1f1c18 0%, #8e4420 100%);
  color: #f8f4e6;
}

.art-badge {
  background: linear-gradient(45deg, #d4af37, #aa6c39) !important;
}

.art-title {
  background: linear-gradient(45deg, #f9d423, #ff4e50, #f9d423) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}

.art-list li {
  border-left-color: #d4af37 !important;
  background: rgba(212, 175, 55, 0.08) !important;
}

.shadow-glow {
  box-shadow: 0 15px 35px rgba(212, 175, 55, 0.25) !important;
}

.art-benefits {
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
  color: #fcedda;
}

.section-desc {
  font-size: 1.2rem;
  color: #e2d1c3;
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
  background: rgba(212, 175, 55, 0.2);
  border: 1px solid rgba(212, 175, 55, 0.4);
  color: #fcedda;
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
  background: rgba(43, 27, 23, 0.7);
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
  background: #aa6c39;
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
  background: linear-gradient(rgba(31, 28, 24, 0.7), rgba(31, 28, 24, 0.9)), url('../assets/picture/sil_phet/IMG_9660.JPG') center/cover;
}
.slide-2 { background: linear-gradient(135deg, #1f1c18, #4a2e1b); }
.slide-3 { background: linear-gradient(135deg, #322514, #734322, #aa6c39); }
.slide-4 { background: linear-gradient(135deg, #1a1005, #4d2612, #8e4420); }
.slide-5 { background: linear-gradient(135deg, #0f0a06, #2d180d, #4a2e1b); }

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
  color: #e2d1c3;
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
  color: #f9d423;
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
  border-left: 5px solid #d4af37;
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

.slide-5 .slide-content {
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

.multi-img-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.multi-img-col .slide-img {
  height: 230px;
}

.slide-footer {
  width: 100%;
  height: 100vh;
  background: #120a06;
  padding: 4rem 2rem;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid rgba(255,255,255,0.05);
}
.footer-content h3 {
  color: #d4af37;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}
.footer-content p {
  color: #b5a496;
  margin-bottom: 0.5rem;
}
.copyright {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #837265 !important;
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
  .highlight-pills {
    flex-direction: column;
    gap: 0.5rem;
  }
  .video-container {
    max-width: 100%;
    max-height: 35vh;
  }
}
</style>
