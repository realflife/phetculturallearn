<script setup>
import { onMounted, ref, shallowRef } from 'vue'
import { useRouter } from 'vue-router'
import * as L from 'leaflet'
import { communitiesData } from '../data/communities.js'

const router = useRouter()
const communities = ref(communitiesData)
const filteredCommunities = ref(communitiesData)
const selectedDistrict = ref('ทั้งหมด')
const mapContainer = shallowRef(null)
const map = shallowRef(null)
const markersMap = new Map()

const districts = ['ทั้งหมด', 'เขาย้อย', 'บ้านลาด', 'หนองหญ้าปล้อง / แก่งกระจาน', 'เมืองเพชรบุรี', 'บ้านแหลม']

const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/2776/2776067.png',
  iconSize: [42, 42],
  iconAnchor: [21, 42],
  popupAnchor: [0, -42]
})

onMounted(() => {
  // Initialize Leaflet Map
  map.value = L.map(mapContainer.value, {
    center: [13.1119, 99.9443],
    zoom: 10,
    zoomControl: false
  })
  
  L.control.zoom({ position: 'bottomright' }).addTo(map.value)
  
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO'
  }).addTo(map.value)

  // Render Map Markers
  communities.value.forEach(c => {
    const marker = L.marker([c.lat, c.lng], { icon: customIcon }).addTo(map.value)
    markersMap.set(c.id, marker)
    
    const popupContent = `
      <div class="popup-content">
        <h3>${c.name}</h3>
        <p class="district-tag">📍 อ.${c.district}</p>
        <p class="description">${c.description}</p>
        <button class="learn-more-btn" onclick="window.dispatchEvent(new CustomEvent('nav-community', {detail: ${c.id}}))">
          เข้าสู่แหล่งเรียนรู้ ✨
        </button>
      </div>
    `
    marker.bindPopup(popupContent, { className: 'custom-popup' })
  })

  window.addEventListener('nav-community', (e) => {
    router.push(`/community/${e.detail}`)
  })
})

const filterByDistrict = (dist) => {
  selectedDistrict.value = dist
  if (dist === 'ทั้งหมด') {
    filteredCommunities.value = communities.value
    map.value?.setView([13.1119, 99.9443], 10)
  } else {
    filteredCommunities.value = communities.value.filter(c => c.district === dist)
    if (filteredCommunities.value.length > 0) {
      const first = filteredCommunities.value[0]
      map.value?.setView([first.lat, first.lng], 12)
      const marker = markersMap.get(first.id)
      if (marker) marker.openPopup()
    }
  }
}

const goToCommunity = (id) => {
  router.push(`/community/${id}`)
}
</script>

<template>
  <div class="page-layout">
    <!-- Header Navbar -->
    <header class="navbar-header">
      <div class="nav-container">
        <div class="brand-logo" @click="router.push('/')">
          <img src="/logo.png" alt="Phetchaburi Cultural Learn Logo" class="app-logo" />
          <div class="brand-text">
            <span class="brand-title">Phetchaburi Cultural Learn</span>
            <span class="brand-sub">สื่อการเรียนรู้วัฒนธรรมเพชรบุรี</span>
          </div>
        </div>
        <nav class="nav-links">
          <a href="#map-section" class="nav-link active">🗺️ แผนที่วัฒนธรรม</a>
          <a href="#community-section" class="nav-link">🏛️ ชุมชนทั้งหมด</a>
          <a href="#about-section" class="nav-link">ℹ️ เกี่ยวกับแพลตฟอร์ม</a>
        </nav>
      </div>
    </header>

    <!-- Main Content Container -->
    <main class="main-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-badge">✨ Digital Cultural Learning Platform</div>
        <h1 class="hero-title">Phetchaburi Cultural Learn</h1>
        <p class="hero-subtitle">
          สำรวจเรื่องราว ประเพณี วัฒนธรรม และวิถีชีวิตชุมชนทรงคุณค่าแห่งเมืองพริบพรี ผ่านแผนที่ภูมิสารสนเทศอินเทอร์แอคทีฟ
        </p>

        <!-- Stats Counter Cards -->
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">🏛️</div>
            <div class="stat-num">5</div>
            <div class="stat-label">ชุมชนวัฒนธรรมต้นแบบ</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📍</div>
            <div class="stat-num">8</div>
            <div class="stat-label">อำเภอการเรียนรู้</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📚</div>
            <div class="stat-num">100%</div>
            <div class="stat-label">สื่อเรียนรู้ดิจิทัล</div>
          </div>
        </div>
      </section>

      <!-- Interactive Map Section -->
      <section id="map-section" class="map-section">
        <div class="section-header">
          <h2>🗺️ แผนที่วัฒนธรรมอินเทอร์แอคทีฟ</h2>
          <p>คลิกเลือกหมุดบนแผนที่ หรือเลือกอำเภอเพื่อเข้าสู่หน้าสื่อการเรียนรู้ของชุมชนนั้นๆ</p>
        </div>

        <!-- Filter Bar -->
        <div class="filter-bar">
          <button 
            v-for="dist in districts" 
            :key="dist"
            class="filter-pill"
            :class="{ active: selectedDistrict === dist }"
            @click="filterByDistrict(dist)"
          >
            {{ dist }}
          </button>
        </div>

        <!-- Leaflet Map Container -->
        <div class="map-wrapper">
          <div ref="mapContainer" class="leaflet-map-element"></div>
        </div>
      </section>

      <!-- Communities Showcase Section -->
      <section id="community-section" class="community-showcase">
        <div class="section-header">
          <h2>🏛️ แหล่งเรียนรู้วัฒนธรรมเพชรบุรี</h2>
          <p>เลือกเรียนรู้วิถีชีวิตและประเพณีของแต่ละชุมชนทรงคุณค่า</p>
        </div>

        <div class="cards-grid">
          <div 
            v-for="item in filteredCommunities" 
            :key="item.id" 
            class="community-card"
            @click="goToCommunity(item.id)"
          >
            <div class="card-img-wrapper">
              <img :src="item.image" :alt="item.name" class="card-img" />
              <span class="card-badge">อำเภอ{{ item.district }}</span>
            </div>
            <div class="card-body">
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
              <button class="card-btn">
                เข้าสู่สื่อการเรียนรู้ ✨
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about-section" class="about-section">
        <div class="about-card glass-panel">
          <div class="about-icon">🎓</div>
          <h2>เกี่ยวกับ Phetchaburi Cultural Learn</h2>
          <p>
            แพลตฟอร์มสื่อการเรียนรู้วัฒนธรรมจังหวัดเพชรบุรี พัฒนาขึ้นเพื่ออนุรักษ์ สืบสาน และรวบรวมภูมิปัญญาท้องถิ่น 
            วิถีชีวิตกลุ่มชาติพันธุ์ ประเพณีโบราณ และงานช่างศิลป์เมืองเพชร เพื่อใหักับนักเรียน นักศึกษา 
            และผู้ที่สนใจสามารถเข้ามาเรียนรู้ได้ทุกที่ ทุกเวลา ด้วยสื่อการเรียนรู้ดิจิทัลที่ทันสมัย
          </p>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="app-footer">
      <div class="footer-container">
        <div class="footer-brand">
          <div class="footer-logo-row">
            <img src="/logo.png" alt="Logo" class="footer-logo" />
            <span class="footer-title">Phetchaburi Cultural Learn</span>
          </div>
          <p class="footer-desc">
            คลังสื่อการเรียนรู้วัฒนธรรม ประเพณี และภูมิปัญญาท้องถิ่นจังหวัดเพชรบุรี
          </p>
        </div>

        <div class="footer-links">
          <h4>ลิงก์ทางลัด</h4>
          <ul>
            <li><a href="#map-section">แผนที่วัฒนธรรม</a></li>
            <li><a href="#community-section">ชุมชนทั้งหมด</a></li>
            <li><a href="#about-section">เกี่ยวกับโครงการ</a></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h4>ติดต่อเรา</h4>
          <p>📍 จังหวัดเพชรบุรี ประเทศไทย</p>
          <p>📧 contact@phetlearn.org</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 Phetchaburi Cultural Learn. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
