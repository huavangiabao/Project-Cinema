/**
 * CINEMAX OS - Modern Minimalist Cinema Management & POS Application
 * Clean Light Theme • Vanilla JavaScript Engine
 */

// =============================================================================
// 1. MOCK CINEMA DATA REPOSITORY
// =============================================================================

const CINEMA_DATA = {
  branches: [
    'CGV Landmark 81 • TP.HCM',
    'BHD Star Thảo Điền • TP.HCM',
    'Galaxy Cinema Nguyễn Du • Q.1',
    'Lotte Cinema West Lake • Hà Nội'
  ],
  
  movies: [
    {
      id: 'm1',
      title: 'Ánh Nắng Mùa Hạ',
      originalTitle: 'Summer Sunlight',
      director: 'Trần Thành',
      duration: '124 phút',
      format: '2D Phụ đề',
      genre: 'Tâm lý, Lãng mạn',
      rating: 'T16',
      posterColor: 'linear-gradient(135deg, #FFEDD5, #FED7AA)',
      accentTag: '#EA580C',
      showtimes: [
        { time: '18:30', room: 'Screen 01', priceStandard: 100000, priceVip: 130000, priceCouple: 260000 },
        { time: '20:45', room: 'Screen 01', priceStandard: 100000, priceVip: 130000, priceCouple: 260000 },
        { time: '22:15', room: 'Screen 03', priceStandard: 90000, priceVip: 120000, priceCouple: 240000 }
      ]
    },
    {
      id: 'm2',
      title: 'Dune: Odyssey',
      originalTitle: 'Dune: Hành Tinh Cát',
      director: 'Elara Vance',
      duration: '166 phút',
      format: 'IMAX Laser 3D',
      genre: 'Khoa học viễn tưởng',
      rating: 'T13',
      posterColor: 'linear-gradient(135deg, #FEF3C7, #FDE68A)',
      accentTag: '#D97706',
      showtimes: [
        { time: '18:45', room: 'Screen 02', priceStandard: 140000, priceVip: 180000, priceCouple: 340000 },
        { time: '21:30', room: 'Screen 02', priceStandard: 140000, priceVip: 180000, priceCouple: 340000 }
      ]
    },
    {
      id: 'm3',
      title: 'Cyber Protocol',
      originalTitle: 'Giao Thức Điện Tử',
      director: 'Elias Thorn',
      duration: '115 phút',
      format: '2D Lồng tiếng',
      genre: 'Hành động, Cyberpunk',
      rating: 'T18',
      posterColor: 'linear-gradient(135deg, #E0E7FF, #C7D2FE)',
      accentTag: '#4F46E5',
      showtimes: [
        { time: '18:00', room: 'Screen 04', priceStandard: 95000, priceVip: 125000, priceCouple: 250000 },
        { time: '20:15', room: 'Screen 04', priceStandard: 95000, priceVip: 125000, priceCouple: 250000 }
      ]
    },
    {
      id: 'm4',
      title: 'Chuyến Bay Băng Giá',
      originalTitle: 'Arctic Flight 714',
      director: 'Sarah Jenkins',
      duration: '98 phút',
      format: '2D Phụ đề',
      genre: 'Kinh dị, Giật gân',
      rating: 'T16',
      posterColor: 'linear-gradient(135deg, #E2E8F0, #CBD5E1)',
      accentTag: '#475569',
      showtimes: [
        { time: '19:15', room: 'Screen 03', priceStandard: 90000, priceVip: 120000, priceCouple: 240000 },
        { time: '21:40', room: 'Screen 03', priceStandard: 90000, priceVip: 120000, priceCouple: 240000 }
      ]
    }
  ],

  fnbItems: [
    { id: 'fnb1', name: 'Combo Solo (1 Bắp + 1 Nước)', price: 85000, category: 'Combo' },
    { id: 'fnb2', name: 'Combo Đôi (1 Bắp Lớn + 2 Nước)', price: 115000, category: 'Combo' },
    { id: 'fnb3', name: 'Bắp Rang Bơ Caramel', price: 45000, category: 'Bắp' },
    { id: 'fnb4', name: 'Bắp Phô Mai Đặc Biệt', price: 50000, category: 'Bắp' },
    { id: 'fnb5', name: 'Nước Ngọt Có Ga (L)', price: 32000, category: 'Nước' },
    { id: 'fnb6', name: 'Trà Sữa Trân Châu Tươi', price: 45000, category: 'Nước' },
    { id: 'fnb7', name: 'Snack Khoai Tây Chiên', price: 25000, category: 'Snack' },
    { id: 'fnb8', name: 'Nước Khoáng Tinh Khiết', price: 20000, category: 'Nước' }
  ],

  rooms: [
    { id: 'Screen 01', name: 'Screen 01 (Tiêu chuẩn)', totalSeats: 88, status: 'playing', currentMovie: 'Ánh Nắng Mùa Hạ', progress: 75 },
    { id: 'Screen 02', name: 'Screen 02 (IMAX Laser)', totalSeats: 112, status: 'playing', currentMovie: 'Dune: Odyssey', progress: 40 },
    { id: 'Screen 03', name: 'Screen 03 (Standard)', totalSeats: 70, status: 'cleaning', currentMovie: 'Chuyến Bay Băng Giá', progress: 100 },
    { id: 'Screen 04', name: 'Screen 04 (Dolby Atmos)', totalSeats: 88, status: 'playing', currentMovie: 'Cyber Protocol', progress: 60 }
  ],

  transactions: [
    { id: 'TK-9821', time: '18:14:22', movie: 'Ánh Nắng Mùa Hạ', room: 'Screen 01', seats: ['D07', 'D08'], fnb: '1x Combo Solo', method: 'QR VNPay', total: 345000, status: 'Hoàn tất' },
    { id: 'TK-9820', time: '18:10:05', movie: 'Dune: Odyssey', room: 'Screen 02', seats: ['E10', 'E11'], fnb: '1x Combo Đôi', method: 'Thẻ Visa/Master', total: 475000, status: 'Hoàn tất' },
    { id: 'TK-9819', time: '18:04:48', movie: 'Cyber Protocol', room: 'Screen 04', seats: ['C04'], fnb: 'Không có', method: 'Tiền mặt', total: 95000, status: 'Hoàn tất' },
    { id: 'TK-9818', time: '17:58:12', movie: 'Ánh Nắng Mùa Hạ', room: 'Screen 01', seats: ['F01-Sweetbox'], fnb: '2x Bắp Caramel', method: 'QR VNPay', total: 350000, status: 'Hoàn tất' },
    { id: 'TK-9817', time: '17:45:30', movie: 'Chuyến Bay Băng Giá', room: 'Screen 03', seats: ['B05', 'B06'], fnb: '1x Combo Solo', method: 'Tiền mặt', total: 265000, status: 'Hoàn tất' },
    { id: 'TK-9816', time: '17:32:19', movie: 'Dune: Odyssey', room: 'Screen 02', seats: ['F07', 'F08', 'F09'], fnb: '2x Combo Đôi', method: 'QR VNPay', total: 770000, status: 'Hoàn tất' },
    { id: 'TK-9815', time: '17:20:00', movie: 'Ánh Nắng Mùa Hạ', room: 'Screen 01', seats: ['C02', 'C03'], fnb: 'Không có', method: 'Thẻ Visa/Master', total: 200000, status: 'Hoàn tất' },
    { id: 'TK-9814', time: '17:08:45', movie: 'Cyber Protocol', room: 'Screen 04', seats: ['D05'], fnb: '1x Nước Khoáng', method: 'Tiền mặt', total: 115000, status: 'Hoàn tất' }
  ]
};

// =============================================================================
// 2. APPLICATION STATE
// =============================================================================

const AppState = {
  activeView: 'dashboard',
  selectedBranch: CINEMA_DATA.branches[0],
  
  // POS Order State
  pos: {
    selectedMovie: CINEMA_DATA.movies[0],
    selectedShowtime: CINEMA_DATA.movies[0].showtimes[0],
    selectedSeats: [], // Array of { id, row, col, type, price }
    cartFnb: {},       // { fnbId: qty }
    appliedDiscount: 0,
    discountCode: ''
  },

  // Schedule & Seat Map State
  schedule: {
    activeDay: 0,
    activeRoomFilter: 'all',
    inspectingMovie: CINEMA_DATA.movies[0],
    inspectingShowtime: CINEMA_DATA.movies[0].showtimes[0],
    inspectingSeat: null
  },

  // Seeded Seat Map Matrices per Room
  seatLayouts: {}
};

// =============================================================================
// 3. SEAT MAP MATRIX GENERATOR
// =============================================================================

/**
 * Generates an 8-row x 12-column realistic seat layout for each cinema room.
 * Rows A-C: Standard (Pastel grey/slate)
 * Rows D-E: VIP (Pastel amber)
 * Row F: Couple / Sweetbox (Pastel blush)
 */
function initializeSeatMaps() {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const columns = 12;

  ['Screen 01', 'Screen 02', 'Screen 03', 'Screen 04'].forEach(room => {
    const matrix = [];
    rows.forEach(rowLetter => {
      // If row F, make it 4 couple seats
      if (rowLetter === 'F') {
        for (let i = 1; i <= 4; i++) {
          const seatId = `${rowLetter}0${i}`;
          // Deterministic booked state
          const isBooked = (i === 2 && room === 'Screen 01') || (i === 1 && room === 'Screen 02');
          matrix.push({
            id: seatId,
            row: rowLetter,
            num: i,
            type: 'couple',
            label: `Sweetbox ${i}`,
            booked: isBooked,
            price: 260000
          });
        }
      } else {
        const isVipRow = rowLetter === 'D' || rowLetter === 'E';
        for (let col = 1; col <= columns; col++) {
          const seatId = `${rowLetter}${col < 10 ? '0' + col : col}`;
          // Simulated pre-booked seats
          const isBooked = ((col === 4 || col === 5 || col === 6) && (rowLetter === 'D' || rowLetter === 'C')) ||
                           (col === 8 && rowLetter === 'B' && room === 'Screen 01') ||
                           (col > 7 && rowLetter === 'D' && room === 'Screen 02');

          matrix.push({
            id: seatId,
            row: rowLetter,
            num: col,
            type: isVipRow ? 'vip' : 'standard',
            label: seatId,
            booked: isBooked,
            price: isVipRow ? 130000 : 100000
          });
        }
      }
    });
    AppState.seatLayouts[room] = matrix;
  });
}

// =============================================================================
// 4. CORE VIEW NAVIGATION CONTROLLER
// =============================================================================

function setupNavigation() {
  const navButtons = document.querySelectorAll('#main-nav .nav-item');
  const viewPages = document.querySelectorAll('.view-page');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetView = btn.dataset.view;
      if (!targetView) return;

      // Update Navigation State
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update Viewports
      viewPages.forEach(page => {
        page.classList.remove('active');
        if (page.id === `view-${targetView}`) {
          page.classList.add('active');
        }
      });

      AppState.activeView = targetView;

      // View-specific re-renders
      if (targetView === 'dashboard') renderDashboardView();
      if (targetView === 'schedule') renderScheduleView();
      if (targetView === 'pos') renderPosView();
      if (targetView === 'reports') renderReportsView();
    });
  });

  // Fast Jump to POS button on Dashboard
  document.getElementById('btn-quick-goto-pos')?.addEventListener('click', () => {
    document.getElementById('nav-btn-pos')?.click();
  });
}

// =============================================================================
// 5. VIEW 1: DASHBOARD LOGIC
// =============================================================================

function renderDashboardView() {
  // 1. Render Upcoming Showtimes List
  const listContainer = document.getElementById('dashboard-showtimes-list');
  if (!listContainer) return;

  const showtimeItems = [
    { movie: 'Ánh Nắng Mùa Hạ', time: '18:30', room: 'Screen 01', format: '2D Phụ đề', booked: 74, total: 88, color: '#EA580C' },
    { movie: 'Dune: Odyssey', time: '18:45', room: 'Screen 02', format: 'IMAX 3D', booked: 96, total: 112, color: '#D97706' },
    { movie: 'Cyber Protocol', time: '19:15', room: 'Screen 04', format: '2D Lồng tiếng', booked: 52, total: 88, color: '#4F46E5' },
    { movie: 'Chuyến Bay Băng Giá', time: '19:40', room: 'Screen 03', format: '2D Phụ đề', booked: 38, total: 70, color: '#475569' }
  ];

  listContainer.innerHTML = showtimeItems.map(item => {
    const percentage = Math.round((item.booked / item.total) * 100);
    return `
      <div class="showtime-row-card">
        <div style="width: 44px; height: 58px; border-radius: 4px; background: linear-gradient(135deg, #F1F5F9, #E2E8F0); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 11px; color: ${item.color}; border: 1px solid var(--border-subtle);">
          ${item.movie.substring(0, 2).toUpperCase()}
        </div>
        <div class="showtime-details">
          <div class="showtime-meta">
            <span class="time-pill">${item.time}</span>
            <span class="screen-tag">${item.room}</span>
            <span class="format-badge">${item.format}</span>
          </div>
          <div class="showtime-title">${item.movie}</div>
        </div>
        <div class="showtime-occupancy">
          <div class="occupancy-numbers">${item.booked}/${item.total} ghế (${percentage}%)</div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${percentage}%;"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // 2. Render Live Room Monitors
  const roomsContainer = document.getElementById('dashboard-room-monitors');
  if (!roomsContainer) return;

  roomsContainer.innerHTML = CINEMA_DATA.rooms.map(room => {
    const isPlaying = room.status === 'playing';
    return `
      <div class="live-room-item">
        <div class="live-room-top">
          <span class="room-name">${room.name}</span>
          <span class="room-status-badge ${isPlaying ? 'status-active' : 'status-cleaning'}">
            <span style="width: 6px; height: 6px; border-radius: 50%; background: ${isPlaying ? '#10B981' : '#D97706'};"></span>
            ${isPlaying ? 'Đang chiếu' : 'Dọn phòng (15p)'}
          </span>
        </div>
        <div class="room-movie-title">${room.currentMovie}</div>
        <div style="display: flex; align-items: center; justify-content: space-between; font-size: 11.5px; color: var(--text-tertiary); margin-bottom: 4px;">
          <span>Tiến độ suất</span>
          <span class="tabular-num">${room.progress}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${room.progress}%; background: ${isPlaying ? 'var(--accent-indigo)' : '#D97706'};"></div>
        </div>
      </div>
    `;
  }).join('');
}

// =============================================================================
// 6. VIEW 2: LỊCH CHIẾU & SƠ ĐỒ GHẾ
// =============================================================================

function renderScheduleView() {
  renderGanttTimeline();
  renderScheduleSeatMatrix(AppState.schedule.inspectingShowtime.room);
}

function renderGanttTimeline() {
  const container = document.getElementById('timeline-rows-container');
  if (!container) return;

  const timelineData = [
    {
      room: 'Screen 01',
      blocks: [
        { title: 'Ánh Nắng Mùa Hạ', time: '10:00 - 12:04', startPercent: 0, widthPercent: 20 },
        { title: 'Ánh Nắng Mùa Hạ', time: '13:00 - 15:04', startPercent: 28, widthPercent: 20 },
        { title: 'Ánh Nắng Mùa Hạ', time: '18:30 - 20:34', startPercent: 65, widthPercent: 21 },
        { title: 'Ánh Nắng Mùa Hạ', time: '21:15 - 23:19', startPercent: 88, widthPercent: 12 }
      ]
    },
    {
      room: 'Screen 02',
      blocks: [
        { title: 'Dune: Odyssey (IMAX)', time: '11:00 - 13:46', startPercent: 10, widthPercent: 26 },
        { title: 'Dune: Odyssey (IMAX)', time: '15:00 - 17:46', startPercent: 42, widthPercent: 26 },
        { title: 'Dune: Odyssey (IMAX)', time: '18:45 - 21:31', startPercent: 70, widthPercent: 26 }
      ]
    },
    {
      room: 'Screen 03',
      blocks: [
        { title: 'Chuyến Bay Băng Giá', time: '10:30 - 12:08', startPercent: 5, widthPercent: 18 },
        { title: 'Chuyến Bay Băng Giá', time: '13:30 - 15:08', startPercent: 32, widthPercent: 18 },
        { title: 'Chuyến Bay Băng Giá', time: '19:15 - 20:53', startPercent: 72, widthPercent: 18 }
      ]
    },
    {
      room: 'Screen 04',
      blocks: [
        { title: 'Cyber Protocol', time: '12:00 - 13:55', startPercent: 18, widthPercent: 21 },
        { title: 'Cyber Protocol', time: '15:30 - 17:25', startPercent: 46, widthPercent: 21 },
        { title: 'Cyber Protocol', time: '18:00 - 19:55', startPercent: 62, widthPercent: 21 },
        { title: 'Cyber Protocol', time: '20:15 - 22:10', startPercent: 82, widthPercent: 18 }
      ]
    }
  ];

  container.innerHTML = timelineData.map(row => `
    <div class="timeline-row">
      <span class="timeline-room-label">${row.room}</span>
      <div class="timeline-track">
        ${row.blocks.map(b => `
          <div class="timeline-block" style="left: ${b.startPercent}%; width: ${b.widthPercent}%;" title="${b.title} (${b.time})">
            <span class="timeline-block-title">${b.title}</span>
            <span class="timeline-block-time">${b.time.split(' - ')[0]}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderScheduleSeatMatrix(roomName) {
  const container = document.getElementById('schedule-seat-matrix');
  if (!container) return;

  const seats = AppState.seatLayouts[roomName] || AppState.seatLayouts['Screen 01'];
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];

  let matrixHtml = '';
  let bookedCount = 0;
  let totalCount = seats.length;

  rows.forEach(r => {
    const rowSeats = seats.filter(s => s.row === r);
    matrixHtml += `<div class="seat-row"><div class="row-identifier">${r}</div>`;

    rowSeats.forEach((s, idx) => {
      if (s.booked) bookedCount++;

      // Walkway gaps at columns 4 and 8 for regular rows
      if (r !== 'F' && (idx === 4 || idx === 8)) {
        matrixHtml += `<div class="seat-walkway"></div>`;
      }

      matrixHtml += `
        <button class="seat-btn ${s.type} ${s.booked ? 'booked' : ''}" 
                data-seat-id="${s.id}" 
                data-room="${roomName}"
                title="${s.label} • ${formatCurrency(s.price)}"
                ${s.booked ? 'disabled' : ''}>
          ${s.type === 'couple' ? '♥ ' + s.num : s.num}
        </button>
      `;
    });

    matrixHtml += `</div>`;
  });

  container.innerHTML = matrixHtml;

  // Update Statistics Box
  const availableCount = totalCount - bookedCount;
  const fillPercentage = Math.round((bookedCount / totalCount) * 100);
  const estRevenue = bookedCount * 115000;

  document.getElementById('stat-total-seats').textContent = `${totalCount} ghế`;
  document.getElementById('stat-booked-seats').textContent = `${bookedCount} ghế`;
  document.getElementById('stat-available-seats').textContent = `${availableCount} ghế`;
  document.getElementById('stat-fill-rate').textContent = `${fillPercentage}%`;
  document.getElementById('stat-est-revenue').textContent = formatCurrency(estRevenue);

  // Bind Seat Inspector Hover Effects
  container.querySelectorAll('.seat-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      const seatId = btn.dataset.seatId;
      const seat = seats.find(s => s.id === seatId);
      if (seat) showSeatInspector(seat);
    });
  });
}

function showSeatInspector(seat) {
  const box = document.getElementById('seat-hover-details');
  if (!box) return;

  const typeName = seat.type === 'vip' ? 'Ghế VIP (Hàng giữa view chuẩn)' :
                   seat.type === 'couple' ? 'Sweetbox Couple (Hàng cuối lãng mạn)' : 'Ghế Tiêu Chuẩn';
  const statusBadge = seat.booked ? 
    '<span class="trend-badge trend-down">Đã bán</span>' : 
    '<span class="trend-badge trend-up">Còn trống</span>';

  box.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
      <span style="font-size: 16px; font-weight: 800; color: var(--accent-indigo);">${seat.label}</span>
      ${statusBadge}
    </div>
    <div style="font-size: 12.5px; color: var(--text-secondary); margin-bottom: 4px;">
      Loại ghế: <strong style="color: var(--text-primary);">${typeName}</strong>
    </div>
    <div style="font-size: 12.5px; color: var(--text-secondary); margin-bottom: 8px;">
      Giá niêm yết: <strong style="color: var(--text-primary); font-family: 'JetBrains Mono';">${formatCurrency(seat.price)}</strong>
    </div>
    <div style="font-size: 11px; color: var(--text-tertiary); border-top: 1px solid var(--border-light); padding-top: 6px;">
      Phù hợp: Thao tác bán vé ngay tại quầy POS
    </div>
  `;
}

// =============================================================================
// 7. VIEW 3: BÁN VÉ TẠI QUẦY (POS ALL-IN-ONE SINGLE SCREEN)
// =============================================================================

function renderPosView() {
  renderPosMoviesList();
  renderPosSeatMatrix();
  renderPosFnbGrid();
  updatePosOrderSummary();
}

function renderPosMoviesList() {
  const container = document.getElementById('pos-movie-list');
  if (!container) return;

  const searchQuery = (document.getElementById('pos-movie-search-input')?.value || '').toLowerCase();
  const filtered = CINEMA_DATA.movies.filter(m => 
    m.title.toLowerCase().includes(searchQuery) || 
    m.originalTitle.toLowerCase().includes(searchQuery)
  );

  container.innerHTML = filtered.map(movie => {
    const isSelected = movie.id === AppState.pos.selectedMovie.id;

    return `
      <div class="pos-movie-card ${isSelected ? 'active' : ''}" data-movie-id="${movie.id}">
        <div class="pos-movie-flex">
          <div class="pos-poster-img" style="background: ${movie.posterColor}; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 11px; color: ${movie.accentTag};">
            ${movie.title.substring(0, 2).toUpperCase()}
          </div>
          <div class="pos-movie-text">
            <div class="pos-movie-name">${movie.title}</div>
            <div class="pos-movie-sub">${movie.duration} • <span class="format-badge">${movie.format}</span></div>
          </div>
        </div>
        <div class="pos-showtime-pills">
          ${movie.showtimes.map(st => {
            const isStActive = isSelected && st.time === AppState.pos.selectedShowtime.time;
            return `
              <button class="showtime-select-pill ${isStActive ? 'active' : ''}" 
                      data-movie-id="${movie.id}" 
                      data-time="${st.time}">
                ${st.time}
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  // Event Listeners for Movie & Showtimes Selection
  container.querySelectorAll('.pos-movie-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const movieId = card.dataset.movieId;
      const movie = CINEMA_DATA.movies.find(m => m.id === movieId);
      if (!movie) return;

      // Check if user clicked a specific showtime pill
      const pill = e.target.closest('.showtime-select-pill');
      if (pill) {
        const time = pill.dataset.time;
        const showtime = movie.showtimes.find(s => s.time === time);
        selectPosMovieAndShowtime(movie, showtime);
      } else {
        selectPosMovieAndShowtime(movie, movie.showtimes[0]);
      }
    });
  });
}

function selectPosMovieAndShowtime(movie, showtime) {
  AppState.pos.selectedMovie = movie;
  AppState.pos.selectedShowtime = showtime;
  // Clear selected seats when switching showtime
  AppState.pos.selectedSeats = [];
  
  // Update Header Labels
  document.getElementById('pos-current-showing-header').textContent = `${movie.title} • Suất ${showtime.time}`;
  document.getElementById('pos-current-room-label').textContent = `Phòng ${showtime.room} • ${movie.format}`;

  renderPosMoviesList();
  renderPosSeatMatrix();
  updatePosOrderSummary();
}

function renderPosSeatMatrix() {
  const container = document.getElementById('pos-seat-matrix');
  if (!container) return;

  const room = AppState.pos.selectedShowtime.room;
  const seats = AppState.seatLayouts[room] || AppState.seatLayouts['Screen 01'];
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];

  let matrixHtml = '';

  rows.forEach(r => {
    const rowSeats = seats.filter(s => s.row === r);
    matrixHtml += `<div class="seat-row"><div class="row-identifier">${r}</div>`;

    rowSeats.forEach((s, idx) => {
      if (r !== 'F' && (idx === 4 || idx === 8)) {
        matrixHtml += `<div class="seat-walkway"></div>`;
      }

      const isSelected = AppState.pos.selectedSeats.some(sel => sel.id === s.id);

      matrixHtml += `
        <button class="seat-btn ${s.type} ${s.booked ? 'booked' : ''} ${isSelected ? 'active-selected' : ''}" 
                data-seat-id="${s.id}" 
                data-type="${s.type}"
                data-price="${s.price}"
                title="${s.label} (${formatCurrency(s.price)})"
                ${s.booked ? 'disabled' : ''}>
          ${s.type === 'couple' ? '♥ ' + s.num : s.num}
        </button>
      `;
    });

    matrixHtml += `</div>`;
  });

  container.innerHTML = matrixHtml;

  // Click handler to toggle seats
  container.querySelectorAll('.seat-btn:not(.booked)').forEach(btn => {
    btn.addEventListener('click', () => {
      const seatId = btn.dataset.seatId;
      const seatType = btn.dataset.type;
      const seatPrice = parseInt(btn.dataset.price, 10);

      const existingIndex = AppState.pos.selectedSeats.findIndex(s => s.id === seatId);
      if (existingIndex > -1) {
        // Deselect
        AppState.pos.selectedSeats.splice(existingIndex, 1);
        btn.classList.remove('active-selected');
      } else {
        // Select
        AppState.pos.selectedSeats.push({
          id: seatId,
          type: seatType,
          price: seatPrice
        });
        btn.classList.add('active-selected');
      }

      updatePosOrderSummary();
    });
  });
}

function renderPosFnbGrid() {
  const container = document.getElementById('pos-fnb-grid');
  if (!container) return;

  container.innerHTML = CINEMA_DATA.fnbItems.slice(0, 4).map(item => `
    <button class="fnb-btn-item" data-fnb-id="${item.id}">
      <span class="fnb-item-name">${item.name}</span>
      <span class="fnb-item-price">+ ${formatCurrency(item.price)}</span>
    </button>
  `).join('');

  container.querySelectorAll('.fnb-btn-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const fnbId = btn.dataset.fnbId;
      AppState.pos.cartFnb[fnbId] = (AppState.pos.cartFnb[fnbId] || 0) + 1;
      showToast(`Đã thêm ${CINEMA_DATA.fnbItems.find(f => f.id === fnbId)?.name} vào đơn!`, 'info');
      updatePosOrderSummary();
    });
  });
}

function updatePosOrderSummary() {
  const movie = AppState.pos.selectedMovie;
  const showtime = AppState.pos.selectedShowtime;
  const seats = AppState.pos.selectedSeats;
  const cartFnb = AppState.pos.cartFnb;

  // 1. Movie Summary Banner
  document.getElementById('cart-movie-title').textContent = movie ? movie.title : 'Chưa chọn phim';
  document.getElementById('cart-movie-time').textContent = showtime ? 
    `${showtime.time} • ${showtime.room} • ${movie.format}` : 'Chọn phim và giờ chiếu ở cột trái';

  // 2. Seats Breakdown
  const seatsContainer = document.getElementById('cart-seats-container');
  document.getElementById('cart-seat-count').textContent = seats.length;

  let seatsTotal = 0;
  if (seats.length === 0) {
    seatsContainer.innerHTML = `<p style="font-size: 12px; color: var(--text-tertiary); font-style: italic;">Chưa có ghế nào được chọn.</p>`;
  } else {
    seatsContainer.innerHTML = seats.map(s => {
      seatsTotal += s.price;
      const typeLabel = s.type === 'vip' ? 'VIP' : s.type === 'couple' ? 'Couple' : 'Thường';
      return `
        <div class="cart-item-row">
          <span class="cart-item-name">Ghế ${s.id} (${typeLabel})</span>
          <span class="cart-item-price">${formatCurrency(s.price)}</span>
        </div>
      `;
    }).join('');
  }

  // 3. F&B Breakdown
  const fnbContainer = document.getElementById('cart-fnb-container');
  let fnbTotal = 0;
  const fnbEntries = Object.entries(cartFnb).filter(([_, qty]) => qty > 0);

  if (fnbEntries.length === 0) {
    fnbContainer.innerHTML = `<p style="font-size: 12px; color: var(--text-tertiary); font-style: italic;">Chưa chọn bắp nước kèm.</p>`;
  } else {
    fnbContainer.innerHTML = fnbEntries.map(([fnbId, qty]) => {
      const item = CINEMA_DATA.fnbItems.find(f => f.id === fnbId);
      if (!item) return '';
      const linePrice = item.price * qty;
      fnbTotal += linePrice;

      return `
        <div class="cart-item-row">
          <div style="flex: 1; padding-right: 8px;">
            <div class="cart-item-name">${item.name}</div>
            <div style="font-size: 11px; color: var(--text-tertiary);">${formatCurrency(item.price)}/phần</div>
          </div>
          <div class="cart-stepper">
            <button class="stepper-btn" onclick="modifyFnbQty('${fnbId}', -1)">−</button>
            <span class="stepper-qty">${qty}</span>
            <button class="stepper-btn" onclick="modifyFnbQty('${fnbId}', 1)">+</button>
          </div>
          <span class="cart-item-price" style="min-width: 65px; text-align: right;">${formatCurrency(linePrice)}</span>
        </div>
      `;
    }).join('');
  }

  // 4. Totals Calculation
  const grandTotal = Math.max(0, seatsTotal + fnbTotal - AppState.pos.appliedDiscount);
  document.getElementById('cart-total-display').textContent = formatCurrency(grandTotal);

  // Enable/Disable Checkout Button
  const checkoutBtn = document.getElementById('btn-pos-checkout');
  if (checkoutBtn) {
    checkoutBtn.disabled = seats.length === 0;
  }
}

// Global helper for F&B stepper
window.modifyFnbQty = function(fnbId, delta) {
  const current = AppState.pos.cartFnb[fnbId] || 0;
  const updated = current + delta;
  if (updated <= 0) {
    delete AppState.pos.cartFnb[fnbId];
  } else {
    AppState.pos.cartFnb[fnbId] = updated;
  }
  updatePosOrderSummary();
};

// =============================================================================
// 8. VIEW 4: BÁO CÁO & DOANH THU LOGIC
// =============================================================================

function renderReportsView() {
  const tbody = document.getElementById('reports-table-tbody');
  if (!tbody) return;

  const roomFilter = document.getElementById('report-screen-filter')?.value || 'all';
  const paymentFilter = document.getElementById('report-payment-filter')?.value || 'all';
  const searchQuery = (document.getElementById('report-search-table')?.value || '').toLowerCase();

  const filtered = CINEMA_DATA.transactions.filter(t => {
    const matchRoom = roomFilter === 'all' || t.room === roomFilter;
    const matchPayment = paymentFilter === 'all' || t.method === paymentFilter;
    const matchSearch = t.id.toLowerCase().includes(searchQuery) ||
                        t.movie.toLowerCase().includes(searchQuery) ||
                        t.seats.join(', ').toLowerCase().includes(searchQuery);
    return matchRoom && matchPayment && matchSearch;
  });

  tbody.innerHTML = filtered.map(t => {
    const methodBadge = t.method.includes('QR') ? 
      '<span class="status-pill" style="background: var(--accent-indigo-light); color: var(--accent-indigo);">QR VNPay</span>' :
      t.method.includes('Tiền') ?
      '<span class="status-pill" style="background: var(--badge-green-bg); color: var(--badge-green-text);">Tiền mặt</span>' :
      '<span class="status-pill" style="background: #F1F5F9; color: var(--text-secondary);">Thẻ Ngân Hàng</span>';

    return `
      <tr>
        <td class="align-left"><strong style="font-family: 'JetBrains Mono';">${t.id}</strong></td>
        <td class="align-left tabular-num" style="color: var(--text-secondary);">${t.time}</td>
        <td class="align-left"><strong>${t.movie}</strong></td>
        <td class="align-center"><span class="format-badge">${t.room}</span></td>
        <td class="align-left"><span style="font-weight: 600; color: var(--accent-indigo);">${t.seats.join(', ')}</span></td>
        <td class="align-center" style="color: var(--text-secondary); font-size: 12px;">${t.fnb}</td>
        <td class="align-center">${methodBadge}</td>
        <td class="align-right tabular-num" style="font-weight: 700; color: var(--text-primary);">${formatCurrency(t.total)}</td>
        <td class="align-center"><span class="status-pill" style="background: var(--badge-green-bg); color: var(--badge-green-text);">✓ ${t.status}</span></td>
      </tr>
    `;
  }).join('');
}

// =============================================================================
// 9. MODALS, CHECKOUT & RECEIPT PRINT ENGINE
// =============================================================================

function setupModalsAndCheckout() {
  // Clear Cart
  document.getElementById('btn-clear-cart')?.addEventListener('click', () => {
    AppState.pos.selectedSeats = [];
    AppState.pos.cartFnb = {};
    AppState.pos.appliedDiscount = 0;
    renderPosSeatMatrix();
    updatePosOrderSummary();
    showToast('Đã xóa giỏ hàng.', 'info');
  });

  // Apply Coupon
  document.getElementById('btn-apply-coupon')?.addEventListener('click', () => {
    const input = document.getElementById('cart-coupon-input');
    const code = (input?.value || '').trim().toUpperCase();
    if (code === 'VIP10' || code === 'CINEMAX') {
      AppState.pos.appliedDiscount = 30000;
      showToast('Áp dụng mã giảm giá 30.000 đ thành công!', 'success');
    } else if (code) {
      showToast('Mã giảm giá không hợp lệ hoặc đã hết hạn.', 'info');
    }
    updatePosOrderSummary();
  });

  // Quick Payment Buttons
  document.getElementById('btn-pay-cash')?.addEventListener('click', () => {
    triggerCheckout('Tiền mặt');
  });

  document.getElementById('btn-pay-qr')?.addEventListener('click', () => {
    openQrPaymentModal();
  });

  document.getElementById('btn-pos-checkout')?.addEventListener('click', () => {
    openQrPaymentModal();
  });

  // QR Modal Buttons
  document.getElementById('btn-close-payment-modal')?.addEventListener('click', closePaymentModal);
  document.getElementById('btn-cancel-payment')?.addEventListener('click', closePaymentModal);
  document.getElementById('btn-confirm-payment-success')?.addEventListener('click', () => {
    closePaymentModal();
    triggerCheckout('QR VNPay');
  });

  // Receipt Modal Buttons
  document.getElementById('btn-close-receipt-modal')?.addEventListener('click', closeReceiptModal);
  document.getElementById('btn-close-receipt-done')?.addEventListener('click', closeReceiptModal);
  document.getElementById('btn-trigger-hardware-print')?.addEventListener('click', () => {
    showToast('Đang gửi lệnh in tới máy in nhiệt POS ESC/P...', 'success');
    setTimeout(() => {
      closeReceiptModal();
    }, 1200);
  });

  // Global Search Modal Events
  const searchModal = document.getElementById('modal-quick-search');
  document.getElementById('btn-open-search')?.addEventListener('click', openGlobalSearch);
  document.getElementById('btn-close-global-search')?.addEventListener('click', closeGlobalSearch);
  document.getElementById('global-search-query-input')?.addEventListener('input', handleGlobalSearchInput);

  // CSV Export
  document.getElementById('btn-export-csv')?.addEventListener('click', exportReportsCsv);
  document.getElementById('btn-print-report')?.addEventListener('click', () => {
    window.print();
  });

  // Filter Listeners
  document.getElementById('report-screen-filter')?.addEventListener('change', renderReportsView);
  document.getElementById('report-payment-filter')?.addEventListener('change', renderReportsView);
  document.getElementById('report-search-table')?.addEventListener('input', renderReportsView);
  document.getElementById('pos-movie-search-input')?.addEventListener('input', renderPosMoviesList);
}

function openQrPaymentModal() {
  if (AppState.pos.selectedSeats.length === 0) {
    showToast('Vui lòng chọn ít nhất 1 ghế trước khi thanh toán!', 'info');
    return;
  }
  const totalDisplay = document.getElementById('cart-total-display').textContent;
  document.getElementById('qr-modal-amount').textContent = totalDisplay;
  document.getElementById('modal-payment-qr').classList.add('open');
}

function closePaymentModal() {
  document.getElementById('modal-payment-qr').classList.remove('open');
}

function openGlobalSearch() {
  document.getElementById('modal-quick-search').classList.add('open');
  const input = document.getElementById('global-search-query-input');
  if (input) {
    input.value = '';
    input.focus();
    handleGlobalSearchInput();
  }
}

function closeGlobalSearch() {
  document.getElementById('modal-quick-search').classList.remove('open');
}

function handleGlobalSearchInput() {
  const query = (document.getElementById('global-search-query-input')?.value || '').toLowerCase().trim();
  const resultsContainer = document.getElementById('global-search-results');
  if (!resultsContainer) return;

  const results = [];

  // Match Movies
  CINEMA_DATA.movies.forEach(m => {
    if (m.title.toLowerCase().includes(query) || m.originalTitle.toLowerCase().includes(query)) {
      results.push({ type: 'Phim', title: m.title, sub: `${m.duration} • ${m.format}`, action: () => {
        document.getElementById('nav-btn-pos')?.click();
        selectPosMovieAndShowtime(m, m.showtimes[0]);
        closeGlobalSearch();
      }});
    }
  });

  // Match Transactions
  CINEMA_DATA.transactions.forEach(t => {
    if (t.id.toLowerCase().includes(query) || t.seats.join(' ').toLowerCase().includes(query)) {
      results.push({ type: 'Giao dịch', title: `Đơn ${t.id} - ${t.movie}`, sub: `Ghế: ${t.seats.join(', ')} • ${formatCurrency(t.total)}`, action: () => {
        document.getElementById('nav-btn-reports')?.click();
        closeGlobalSearch();
      }});
    }
  });

  if (results.length === 0) {
    resultsContainer.innerHTML = `<p style="text-align: center; color: var(--text-tertiary); font-size: 13px; padding: 20px;">Không tìm thấy kết quả phù hợp cho "${query}"</p>`;
  } else {
    resultsContainer.innerHTML = results.map((r, i) => `
      <div class="search-item" data-res-index="${i}">
        <div>
          <span style="font-size: 10px; font-weight: 700; text-transform: uppercase; background: var(--bg-subtle); padding: 2px 6px; border-radius: 4px; color: var(--text-secondary); margin-right: 6px;">${r.type}</span>
          <strong style="font-size: 13.5px; color: var(--text-primary);">${r.title}</strong>
          <div style="font-size: 11.5px; color: var(--text-secondary); margin-top: 2px;">${r.sub}</div>
        </div>
        <span style="font-size: 12px; color: var(--accent-indigo); font-weight: 600;">Xem chi tiết ›</span>
      </div>
    `).join('');

    resultsContainer.querySelectorAll('.search-item').forEach((item, index) => {
      item.addEventListener('click', () => {
        results[index].action();
      });
    });
  }
}

function triggerCheckout(methodName) {
  const seats = AppState.pos.selectedSeats;
  const movie = AppState.pos.selectedMovie;
  const showtime = AppState.pos.selectedShowtime;
  if (seats.length === 0) return;

  const orderId = `TK-${Math.floor(1000 + Math.random() * 9000)}`;
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

  // Calculate total
  const seatsTotal = seats.reduce((acc, s) => acc + s.price, 0);
  const fnbEntries = Object.entries(AppState.pos.cartFnb);
  const fnbTotal = fnbEntries.reduce((acc, [id, qty]) => {
    const item = CINEMA_DATA.fnbItems.find(f => f.id === id);
    return acc + (item ? item.price * qty : 0);
  }, 0);
  const finalTotal = Math.max(0, seatsTotal + fnbTotal - AppState.pos.appliedDiscount);

  // Mark seats as booked permanently in layout
  const roomSeats = AppState.seatLayouts[showtime.room];
  if (roomSeats) {
    seats.forEach(s => {
      const match = roomSeats.find(rs => rs.id === s.id);
      if (match) match.booked = true;
    });
  }

  // Prepend to transaction log
  const fnbSummary = fnbEntries.length > 0 ? 
    fnbEntries.map(([id, q]) => `${q}x ${CINEMA_DATA.fnbItems.find(f => f.id === id)?.name}`).join(', ') : 'Không có';

  CINEMA_DATA.transactions.unshift({
    id: orderId,
    time: timeStr,
    movie: movie.title,
    room: showtime.room,
    seats: seats.map(s => s.id),
    fnb: fnbSummary,
    method: methodName,
    total: finalTotal,
    status: 'Hoàn tất'
  });

  // Render receipt modal
  renderReceiptModal(orderId, timeStr, movie, showtime, seats, fnbEntries, finalTotal, methodName);

  // Reset cart
  AppState.pos.selectedSeats = [];
  AppState.pos.cartFnb = {};
  AppState.pos.appliedDiscount = 0;
  renderPosSeatMatrix();
  updatePosOrderSummary();
  showToast(`Bán vé ${orderId} thành công qua ${methodName}!`, 'success');
}

function renderReceiptModal(orderId, timeStr, movie, showtime, seats, fnbEntries, total, method) {
  const container = document.getElementById('ticket-receipt-content');
  if (!container) return;

  container.innerHTML = `
    <h4>CINEMAX LUXURY CINEMA</h4>
    <div style="text-align: center; color: var(--text-tertiary); font-size: 11px; margin-bottom: 12px;">
      ${AppState.selectedBranch}<br>
      Mã Hóa Đơn: <strong>${orderId}</strong> • ${timeStr}
    </div>
    <div style="border-top: 1px dashed #CBD5E1; border-bottom: 1px dashed #CBD5E1; padding: 10px 0; margin-bottom: 12px;">
      <div style="font-size: 14px; font-weight: 700; color: #0F172A;">${movie.title}</div>
      <div style="font-size: 11.5px; color: var(--text-secondary); margin-top: 2px;">
        Phòng: <strong>${showtime.room}</strong> • Suất chiếu: <strong>${showtime.time}</strong> (${movie.format})
      </div>
      <div style="font-size: 13px; margin-top: 6px;">
        Vị trí ghế: <strong style="color: var(--accent-indigo);">${seats.map(s => s.id).join(', ')}</strong>
      </div>
    </div>

    ${fnbEntries.length > 0 ? `
      <div style="margin-bottom: 10px; font-size: 11.5px;">
        <div style="font-weight: 700; color: var(--text-secondary); margin-bottom: 4px;">DỊCH VỤ BẮP NƯỚC:</div>
        ${fnbEntries.map(([id, q]) => {
          const item = CINEMA_DATA.fnbItems.find(f => f.id === id);
          return `<div style="display: flex; justify-content: space-between;"><span>${q}x ${item?.name}</span><span>${formatCurrency((item?.price || 0) * q)}</span></div>`;
        }).join('')}
      </div>
    ` : ''}

    <div style="display: flex; justify-content: space-between; font-size: 15px; font-weight: 800; border-top: 1px solid #E2E8F0; padding-top: 8px;">
      <span>TỔNG CỘNG:</span>
      <span style="color: var(--accent-indigo);">${formatCurrency(total)}</span>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 11.5px; color: var(--text-secondary); margin-top: 4px;">
      <span>Hình thức:</span>
      <span>${method}</span>
    </div>
    <div style="text-align: center; margin-top: 16px; font-size: 10px; color: var(--text-tertiary);">
      Chúc quý khách thưởng thức bộ phim trọn vẹn!
    </div>
  `;

  document.getElementById('modal-receipt-preview').classList.add('open');
}

function closeReceiptModal() {
  document.getElementById('modal-receipt-preview').classList.remove('open');
}

// =============================================================================
// 10. KEYBOARD SHORTCUTS ENGINE (POS SPEED-RUN)
// =============================================================================

function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Ctrl + K: Quick Search
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openGlobalSearch();
      return;
    }

    // Esc: Close any open modal
    if (e.key === 'Escape') {
      closePaymentModal();
      closeReceiptModal();
      closeGlobalSearch();
      return;
    }

    // F1: Focus Search in POS
    if (e.key === 'F1') {
      e.preventDefault();
      document.getElementById('nav-btn-pos')?.click();
      document.getElementById('pos-movie-search-input')?.focus();
      return;
    }

    // F9: Quick Pay Cash
    if (e.key === 'F9') {
      e.preventDefault();
      if (AppState.activeView === 'pos' && AppState.pos.selectedSeats.length > 0) {
        triggerCheckout('Tiền mặt');
      }
      return;
    }

    // F10: Quick Pay QR
    if (e.key === 'F10') {
      e.preventDefault();
      if (AppState.activeView === 'pos') {
        openQrPaymentModal();
      }
      return;
    }

    // F12: Complete Checkout
    if (e.key === 'F12') {
      e.preventDefault();
      if (AppState.activeView === 'pos') {
        openQrPaymentModal();
      }
      return;
    }
  });
}

// =============================================================================
// 11. CSV EXPORT & UTILITIES
// =============================================================================

function exportReportsCsv() {
  let csvContent = 'data:text/csv;charset=utf-8,\uFEFF';
  csvContent += 'Mã Vé,Thời Gian,Tên Phim,Phòng Chiếu,Vị Trí Ghế,Bắp Nước Kèm,Phương Thức,Tổng Tiền (VNĐ),Trạng Thái\n';

  CINEMA_DATA.transactions.forEach(t => {
    const row = [
      `"${t.id}"`,
      `"${t.time}"`,
      `"${t.movie}"`,
      `"${t.room}"`,
      `"${t.seats.join(' ')}"`,
      `"${t.fnb}"`,
      `"${t.method}"`,
      t.total,
      `"${t.status}"`
    ].join(',');
    csvContent += row + '\n';
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `BaoCao_DoanhThu_Cinemax_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('Đã tải xuống tệp dữ liệu CSV thành công!', 'success');
}

function startDigitalClock() {
  const clockEl = document.getElementById('header-live-clock');
  function update() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    if (clockEl) clockEl.textContent = `${h}:${m}:${s}`;
  }
  setInterval(update, 1000);
  update();
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span style="font-weight: 700; color: ${type === 'success' ? '#10B981' : 'var(--accent-indigo)'};">
      ${type === 'success' ? '✓' : 'ℹ'}
    </span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(16px)';
    setTimeout(() => toast.remove(), 240);
  }, 3200);
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
}

// =============================================================================
// 12. BOOTSTRAP APPLICATION
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initializeSeatMaps();
  setupNavigation();
  setupModalsAndCheckout();
  setupKeyboardShortcuts();
  startDigitalClock();

  // Initial View Rendering
  renderDashboardView();
  renderScheduleView();
  renderPosView();
  renderReportsView();

  showToast('Hệ thống Cinemax OS sẵn sàng. Chúc ca làm việc thuận lợi!', 'success');
});
