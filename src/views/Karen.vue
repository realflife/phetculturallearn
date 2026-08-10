<script setup>
import { useRouter } from 'vue-router'
import img1 from '../assets/picture/kareang/IMG_9669.JPG'
import img2 from '../assets/picture/kareang/IMG_9670.WEBP'
import img3 from '../assets/picture/kareang/IMG_9671.JPG'
import img4 from '../assets/picture/kareang/IMG_9672.JPG'

const router = useRouter()
</script>

<template>
  <main class="slide-container karen-theme">
    <!-- Fixed Back Button -->
    <button class="fixed-back-btn" @click="router.push('/')">
      ← กลับสู่แผนที่
    </button>

    <!-- Slide 1: Hero Cover -->
    <section class="slide slide-1">
      <div class="slide-overlay">
        <div class="content-box glass-panel fade-in-up">
          <span class="badge karen-badge">จิตวิญญาณแห่งผืนป่า แก่งกระจาน</span>
          <h1 class="title karen-title">วิถีชีวิตปกาเกอะญอ</h1>
          <p class="subtitle">ความเรียบง่ายและสมดุลแห่งธรรมชาติ</p>
          <div class="scroll-indicator">เลื่อนลงเพื่อสัมผัสวิถีชีวิต ↓</div>
        </div>
      </div>
    </section>

    <!-- Slide 2: Forest Wisdom -->
    <section class="slide slide-2">
      <div class="slide-content dual-col">
        <div class="text-col fade-in-left">
          <h2>🌿 วิถีคนอยู่กับป่า</h2>
          <p>
            ชาวปกาเกอะญอ (กะเหรี่ยง) ในพื้นที่แก่งกระจาน จ.เพชรบุรี ดำรงชีวิตด้วยความเคารพและผูกพันกับธรรมชาติ 
            ป่าไม้ สายน้ำ และขุนเขา คือสายเลือดและบ้านของพวกเขา
          </p>
          <ul class="feature-list karen-list">
            <li><strong>ไร่หมุนเวียน:</strong> ภูมิปัญญาการทำเกษตรที่ไม่ทำลายป่า แต่ช่วยฟื้นฟูระบบนิเวศ</li>
            <li><strong>การทอผ้า:</strong> ผ้าทอกี่เอว สีสันและลวดลายที่เป็นเอกลักษณ์</li>
            <li><strong>ความพอเพียง:</strong> การหาของป่าและการดำรงชีวิตแบบเรียบง่าย</li>
          </ul>
        </div>
        <div class="img-col fade-in-right">
          <img :src="img2" alt="วิถีคนอยู่กับป่า" class="slide-img rounded shadow-glow" />
        </div>
      </div>
    </section>

    <!-- Slide 3: Video 1 -->
    <section class="slide slide-3">
      <div class="slide-content center-layout">
        <h2 class="text-center mb-1">🎥 วัฒนธรรมและการแต่งกาย</h2>
        <p class="text-center mb-2">เอกลักษณ์ผ้าทอมือและรอยยิ้มที่สดใสกลางหุบเขา</p>
        <div class="video-container glass-panel fade-in-up">
          <iframe 
            class="custom-video" 
            src="https://www.youtube.com/embed/3Y_SUaoBRTo" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </section>

    <!-- Slide 4: Traditional Farming -->
    <section class="slide slide-4">
      <div class="slide-content dual-col reverse">
        <div class="text-col fade-in-right">
          <h2>🌾 เกษตรกรรมที่เคารพธรรมชาติ</h2>
          <p>
            ความเชื่อเรื่องจิตวิญญาณแห่งธรรมชาติ ทำให้ชาวกะเหรี่ยงดูแลผืนป่าเสมือนญาติผู้ใหญ่
            ไร่หมุนเวียนคือห้องสมุดพันธุ์พืชและแหล่งอาหารที่ยั่งยืนที่สุด
          </p>
          <div class="karen-benefits">
            <div class="benefit-tag">ดูแลดิน ป้องกันไฟป่า รักษาน้ำ</div>
            <div class="benefit-tag">ความหลากหลายทางชีวภาพ</div>
            <div class="benefit-tag">พิธีกรรมก่อนการเพาะปลูกและเก็บเกี่ยว</div>
          </div>
        </div>
        <div class="img-col fade-in-left">
          <img :src="img3" alt="การเกษตรและการดำรงชีวิต" class="slide-img rounded shadow-glow" />
        </div>
      </div>
    </section>

    <!-- Slide 5: Video 2 -->
    <section class="slide slide-5">
      <div class="slide-content center-layout">
        <h2 class="text-center mb-1">🎥 เสียงเพลงและจิตวิญญาณ</h2>
        <p class="text-center mb-2">สัมผัสจังหวะชีวิตของชาวปกาเกอะญอ</p>
        <div class="video-container glass-panel fade-in-up">
          <iframe 
            class="custom-video" 
            src="https://www.youtube.com/embed/FDlTEdQ2hQc" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </section>

    <!-- Slide 6: Beliefs & Traditions -->
    <section class="slide slide-6">
      <div class="slide-content dual-col">
        <div class="text-col fade-in-left">
          <h2>🙏 ประเพณีและความเชื่อ</h2>
          <p>
            ชาวปกาเกอะญอมีการประกอบพิธีกรรมที่แสดงถึงความกตัญญูต่อสิ่งศักดิ์สิทธิ์ที่คุ้มครองป่า 
            และมัดมือผูกข้อมือเพื่อเรียกขวัญและให้กำลังใจกันในชุมชน
          </p>
          <ul class="feature-list karen-list">
            <li><strong>ประเพณีผูกข้อมือ:</strong> เพื่อความเป็นสิริมงคลในเดือนเก้า</li>
            <li><strong>พิธีเลี้ยงผีฝาย:</strong> ขอขมาและขอบคุณสายน้ำที่หล่อเลี้ยง</li>
            <li><strong>เครื่องดนตรีเตหน่า:</strong> เสียงพิณประจำเผ่าที่สื่อถึงความรัก</li>
          </ul>
        </div>
        <div class="img-col fade-in-right">
          <img :src="img4" alt="ประเพณีและความเชื่อ" class="slide-img rounded shadow-glow" />
        </div>
      </div>
    </section>

    <!-- Slide 7: Footer -->
    <footer class="slide-footer">
      <div class="footer-content">
        <h3>Phetchaburi Cultural Learn</h3>
        <p>สืบสาน อนุรักษ์ และเผยแพร่วิถีชีวิตกลุ่มชาติพันธุ์กะเหรี่ยง (ปกาเกอะญอ) จ.เพชรบุรี</p>
        <p class="copyright">© 2026 Phetchaburi Cultural Learn. All rights reserved.</p>
      </div>
    </footer>
  </main>
</template>

<style scoped>
/* Karen Theme Styling */
.karen-theme {
  background: linear-gradient(135deg, #0e1e12 0%, #1e3a24 100%);
  color: #f1f8f3;
}

.karen-badge {
  background: linear-gradient(45deg, #27ae60, #2ecc71) !important;
}

.karen-title {
  background: linear-gradient(45deg, #a8e063, #56ab2f, #a8e063) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}

.karen-list li {
  border-left-color: #2ecc71 !important;
  background: rgba(46, 204, 113, 0.08) !important;
}

.shadow-glow {
  box-shadow: 0 15px 35px rgba(46, 204, 113, 0.2) !important;
}

.karen-benefits {
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
  color: #e8f5e9;
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
  background: rgba(18, 38, 25, 0.7);
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
  background: #27ae60;
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
  background: linear-gradient(rgba(14, 30, 18, 0.6), rgba(14, 30, 18, 0.8)), url('../assets/picture/kareang/IMG_9669.JPG') center/cover;
}
.slide-2 { background: linear-gradient(135deg, #0e1e12, #18331d); }
.slide-3 { background: linear-gradient(135deg, #112615, #214327); }
.slide-4 { background: linear-gradient(135deg, #0a170d, #1a3820); }
.slide-5 { background: linear-gradient(135deg, #142e1a, #275430); }
.slide-6 { background: linear-gradient(135deg, #0c1b0f, #1e4225); }

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
  color: #c8e6c9;
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
  color: #a8e063;
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
  border-left: 5px solid #2ecc71;
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

.slide-3 .slide-content, .slide-5 .slide-content {
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
  background: #060d08;
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
  color: #2ecc71;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}
.footer-content p {
  color: #92b89c;
  margin-bottom: 0.5rem;
}
.copyright {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #557760 !important;
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
