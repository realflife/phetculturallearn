<script setup>
import { useRouter } from 'vue-router'
import img1 from '../assets/picture/na_k/IMG_9656.JPG'
import img2 from '../assets/picture/na_k/IMG_9657.JPG'
import img3 from '../assets/picture/na_k/IMG_9658.JPG'
import img4 from '../assets/picture/na_k/IMG_9659.JPG'

const router = useRouter()
</script>

<template>
  <main class="slide-container coastal-theme">
    <!-- Fixed Back Button -->
    <button class="fixed-back-btn" @click="router.push('/')">
      ← กลับสู่แผนที่
    </button>

    <!-- Slide 1: Hero Cover -->
    <section class="slide slide-1">
      <div class="slide-overlay">
        <div class="content-box glass-panel fade-in-up">
          <span class="badge coastal-badge">ภูมิปัญญาชายฝั่งทะเล อ.บ้านแหลม</span>
          <h1 class="title coastal-title">วิถีนาเกลือ & ประมงพื้นบ้าน</h1>
          <p class="subtitle">สายลม แสงแดด และผืนเลนทรงคุณค่าแห่งเมืองเพชรบุรี</p>
          <div class="scroll-indicator">เลื่อนลงเพื่อสำรวจวิถีชีวิต ↓</div>
        </div>
      </div>
    </section>

    <!-- Slide 2: Salt Farming History & Culture -->
    <section class="slide slide-2">
      <div class="slide-content dual-col">
        <div class="text-col fade-in-left">
          <h2>🧂 วิถีชาวนาเกลือสมุทร</h2>
          <p>
            อำเภอบ้านแหลม จังหวัดเพชรบุรี คือ <strong>แหล่งผลิตเกลือสมุทรที่ใหญ่ที่สุดในประเทศไทย</strong> 
            ทอดยาวไปตามถนนสายเกลือ ภูมิปัญญานี้สืบทอดกันมาหลายชั่วอายุคน
          </p>
          <ul class="feature-list coastal-list">
            <li><strong>ฤดูกาลผลิต:</strong> ทำนาเกลือในช่วงฤดูแล้ง (พฤศจิกายน – พฤษภาคม) ใช้พลังลมและแดดตากน้ำทะเล</li>
            <li><strong>ประเพณีทำขวัญเกลือ:</strong> พิธีกรรมโบราณสร้างขวัญกำลังใจให้เกษตรกรก่อนเปิดฤดูกาล</li>
          </ul>
        </div>
        <div class="img-col fade-in-right">
          <img :src="img1" alt="วิถีนาเกลือบ้านแหลม" class="slide-img rounded shadow-glow" />
        </div>
      </div>
    </section>

    <!-- Slide 3: Fleur de Sel (ดอกเกลือ) -->
    <section class="slide slide-3">
      <div class="slide-content dual-col reverse">
        <div class="text-col fade-in-right">
          <h2>💎 ดอกเกลือ: ราชาแห่งเกลือทะเล</h2>
          <p>
            <strong>"ดอกเกลือ" (Fleur de Sel)</strong> ผลึกเกลือบริสุทธิ์ชุดแรกที่ลอยตัวบนผิวน้ำยามเช้าตรู่ 
            ต้องช้อนเก็บด้วยมืออย่างประณีตก่อนที่แสงแดดจะจัด
          </p>
          <div class="salt-benefits">
            <div class="benefit-tag">✨ รสชาติกลมกล่อม หวานปลาย</div>
            <div class="benefit-tag">🌿 อุดมด้วยแร่ธาตุธรรมชาติสูง</div>
            <div class="benefit-tag">🍳 นิยมใช้ใน Fine Dining & สปา</div>
          </div>
        </div>
        <div class="img-col fade-in-left multi-img-col">
          <img :src="img2" alt="ช้อนดอกเกลือยามเช้า" class="slide-img rounded mb-1" />
          <img :src="img3" alt="ผลึกดอกเกลือบริสุทธิ์" class="slide-img rounded" />
        </div>
      </div>
    </section>

    <!-- Slide 4: Mud Skating & Blood Clam Fishing -->
    <section class="slide slide-4">
      <div class="slide-content center-layout text-center fade-in-up">
        <h2>🛹 ภูมิปัญญาถีบกระดานเลนชายฝั่ง</h2>
        <p class="section-desc mb-2">
          ภาพจำอันงดงามของชาวประมงปากอ่าวบางขุนไทร ใช้ "กระดานเลน" วางเข่าและไถตัวไปบนโคลนยามน้ำลดเพื่อเก็บหอยแครงและหอยเสียบ
        </p>

        <div class="single-img-card glass-panel mb-2">
          <img :src="img4" alt="วิถีถีบกระดานเลนเก็บหอยแครง" class="featured-photo" />
        </div>

        <div class="highlight-pills">
          <span class="pill">🌊 เอกลักษณ์อ่าวบางขุนไทร</span>
          <span class="pill">🐚 ประมงพื้นบ้านยั่งยืน</span>
          <span class="pill">🏆 งานเทศกาลเปิดโลกทะเลโคลน</span>
        </div>
      </div>
    </section>

    <!-- Slide 5: Video Documentary -->
    <section class="slide slide-5">
      <div class="slide-content center-layout">
        <h2 class="text-center mb-1">🎥 สารคดีวิถีชีวิตนาเกลือบ้านแหลม</h2>
        <p class="text-center mb-2">สัมผัสภาพบรรยากาศจริงของผืนนาเกลือและภูมิปัญญาท้องถิ่น</p>

        <div class="video-container glass-panel fade-in-up">
          <iframe 
            class="custom-video" 
            src="https://www.youtube.com/embed/MmJucTyyn8A?si=Aj8uS-bL63uwrMDc" 
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
        <p>สืบสาน อนุรักษ์ และเผยแพร่วิถีชีวิตชาวนาเกลือและประมงพื้นบ้าน อ.บ้านแหลม</p>
        <p class="copyright">© 2026 Phetchaburi Cultural Learn. All rights reserved.</p>
      </div>
    </footer>
  </main>
</template>

<style scoped>
/* Coastal Theme Styling */
.coastal-theme {
  background: linear-gradient(135deg, #0b192c 0%, #1e3e62 100%);
  color: #f1f5f9;
}

.coastal-badge {
  background: linear-gradient(45deg, #06b6d4, #3b82f6) !important;
}

.coastal-title {
  background: linear-gradient(45deg, #38bdf8, #feca57, #ffffff) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}

.coastal-list li {
  border-left-color: #38bdf8 !important;
  background: rgba(56, 189, 248, 0.08) !important;
}

.shadow-glow {
  box-shadow: 0 15px 35px rgba(56, 189, 248, 0.25) !important;
}

.salt-benefits {
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
  color: #e0f2fe;
}

.section-desc {
  font-size: 1.2rem;
  color: #cbd5e1;
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
  background: rgba(6, 182, 212, 0.2);
  border: 1px solid rgba(6, 182, 212, 0.4);
  color: #7dd3fc;
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
  background: rgba(15, 23, 42, 0.7);
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
  background: #0284c7;
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
  background: linear-gradient(rgba(11, 25, 44, 0.5), rgba(11, 25, 44, 0.8)), url('../assets/picture/na_k/IMG_9656.JPG') center/cover;
}
.slide-2 { background: linear-gradient(135deg, #0b192c, #1e3e62); }
.slide-3 { background: linear-gradient(135deg, #0f2942, #2563eb, #0284c7); }
.slide-4 { background: linear-gradient(135deg, #082f49, #0c4a6e, #0284c7); }
.slide-5 { background: linear-gradient(135deg, #021526, #0e2f44, #1e3e62); }

.glass-panel {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
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
  color: #e0f2fe;
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
  color: #7dd3fc;
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

.feature-list {
  list-style: none;
  padding: 0;
}
.feature-list li {
  font-size: 1.15rem;
  line-height: 1.8;
  margin-bottom: 1.2rem;
  padding: 1.2rem;
  border-left: 5px solid #0284c7;
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
  object-fit: contain;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  background: transparent;
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
  background: #07111e;
  padding: 4rem 2rem;
  scroll-snap-align: end;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid rgba(255,255,255,0.1);
}
.footer-content h3 {
  color: #38bdf8;
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
  }
  .slide-img {
    height: 200px;
  }
  .multi-img-col .slide-img {
    height: 130px;
  }
  .featured-photo {
    max-height: 240px;
  }
  .highlight-pills {
    flex-direction: column;
    gap: 0.5rem;
  }
  .video-container {
    max-height: 45vh;
  }
  .custom-video {
    max-height: 45vh;
  }
}
</style>
