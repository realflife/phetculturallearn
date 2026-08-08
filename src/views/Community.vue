<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { communitiesData } from '../data/communities.js'

const route = useRoute()
const router = useRouter()
const data = ref(null)
const loading = ref(true)

onMounted(() => {
  const communityId = route.params.id
  data.value = communitiesData.find(c => c.id == communityId) || null
  loading.value = false
})
</script>

<template>
  <div v-if="loading" class="loading-screen">
    <div class="spinner"></div>
    กำลังโหลดข้อมูลชุมชน...
  </div>
  <div v-else-if="!data" class="error-screen">
    <p>ไม่พบข้อมูลชุมชนที่ระบุ</p>
    <button class="back-btn mt-2" @click="router.push('/')">← กลับสู่หน้าหลัก</button>
  </div>
  <main v-else class="learning-platform">
    <nav class="navbar">
      <button class="back-btn" @click="router.push('/')">← กลับสู่แผนที่</button>
      <h2>แพลตฟอร์มสื่อการเรียนรู้</h2>
    </nav>
    <div class="content-container">
      <header class="community-header">
        <h1>{{ data.name }}</h1>
        <span class="badge">อำเภอ{{ data.district }}</span>
        <p class="community-desc">{{ data.description }}</p>
      </header>
      <section class="media-section">
        <div class="video-placeholder">
          <img :src="data.image" :alt="data.name" class="hero-img" />
          <div class="play-icon">▶</div>
        </div>
      </section>
      <div class="info-grid">
        <section class="info-card">
          <h3>📚 หัวข้อการเรียนรู้</h3>
          <ul>
            <li v-for="(topic, idx) in data.learning_content?.topics" :key="idx">{{ topic }}</li>
          </ul>
        </section>
        <section class="info-card">
          <h3>📍 สถานที่สำคัญ</h3>
          <ul>
            <li v-for="(lm, idx) in data.learning_content?.landmarks" :key="idx">{{ lm }}</li>
          </ul>
        </section>
      </div>
    </div>
  </main>
</template>
