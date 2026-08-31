/*
  تعديل المواعيد لاحقًا:
  ------------------------------------------------------------------
  كل طبيب عبارة عن سطر بين قوسين { } جوه مصفوفة rows بالأسفل. لإضافة
  طبيب جديد، انسخ سطر طبيب موجود والصقه، وعدّل البيانات بين علامات
  الاقتباس. مش محتاج تلمس أي حاجة تانية في الملف، ولا تعدّل index.html.

  الحقول المتاحة لكل طبيب:
    doctor     : اسم الطبيب.
    specialty  : التخصص (لازم يطابق بالظبط أحد التخصصات في index.html).
    days       : مصفوفة بأيام الأسبوع التي يتواجد فيها الطبيب، مثال:
                 days: ['الأحد', 'الثلاثاء']
    time       : نص وقت الموعد كما تريد أن يظهر، مثال: '6:00 مساءً'
                 (اتركه فارغًا '' لو مفيش وقت محدد بعد).
    note       : ملاحظة اختيارية تظهر تحت بطاقة الطبيب (اختياري).

  حالات خاصة (اختياري، استخدمها بدل days لو الموعد مش أسبوعي عادي):
    frequency: 'daily-except'  → الطبيب موجود يوميًا ما عدا أيام معيّنة.
               استخدم مع: exceptDays: ['الثلاثاء']
    frequency: 'monthly'       → موعد شهري بدون يوم ثابت معروف مسبقًا
               (مثال: "الجمعة من كل شهر، يُعلن عنه"). استخدم مع days
               لذكر اسم اليوم في العرض فقط: days: ['الجمعة']
    frequency: 'monthly-first' → أول يوم معيّن من كل شهر (مثال: أول
               ثلاثاء من كل شهر). استخدم مع: days: ['الثلاثاء']

  آخر تحديث: عدّل النص بعد "lastUpdated" بالأسفل مباشرة.
  ------------------------------------------------------------------
*/
const scheduleData = {
  lastUpdated: 'آخر تحديث للجدول: 1 سبتمبر 2026',
  rows: [
    { doctor: 'د. سامي عثمان', specialty: 'أطفال', days: ['الأحد', 'الثلاثاء', 'الخميس'], time: '6:00 مساءً' },
    { doctor: 'د. محمد علي', specialty: 'مسالك بولية', days: ['الأربعاء'], time: '7:00 مساءً' },
    { doctor: 'د. أحمد الشحات', specialty: 'تخاطب وسلوك', days: ['الأحد', 'الجمعة'], time: '2:00 ظهرًا' },
    { doctor: 'د. إسلام كمال', specialty: 'مخ وأعصاب', days: ['الخميس'], time: '5:00 عصرًا' },
    { doctor: 'د. بسمة سعيد', specialty: 'جلدية', days: ['الجمعة'], time: '6:00 مساءً' },
    { doctor: 'د. شيماء عبدالمجيد', specialty: 'أمراض نفسية', days: ['الأحد'], time: '11:45 ظهرًا', note: 'الجلسات تتم أونلاين عبر تطبيق ZOOM.' },
    { doctor: 'د. عبدالكريم عزوز', specialty: 'جراحة عامة', frequency: 'monthly', days: ['الجمعة'], time: 'يتم تحديده والإعلان عنه', note: 'أستاذ مساعد واستشاري الجراحة بالقصر العيني.' },
    { doctor: 'د. حسن عبدالباقي', specialty: 'عظام', days: ['السبت'], time: '9:00 مساءً' },
    { doctor: 'د. أسامة سعد', specialty: 'عظام', days: ['الأربعاء'], time: '2:00 ظهرًا' },
    { doctor: 'د. خالد صلاح', specialty: 'رمد', days: ['الأحد'], time: '10:00 مساءً' },
    { doctor: 'د. محمود عبدالعزيز', specialty: 'رمد', days: ['الجمعة'], time: '8:00 مساءً' },
    { doctor: 'د. أحمد العنتبلي', specialty: 'باطنة', days: ['الأربعاء'], time: '4:00 عصرًا' },
    { doctor: 'د. فاطمة محروس', specialty: 'باطنة', days: ['السبت'], time: '5:00 عصرًا' },
    { doctor: 'د. أحمد مصطفى', specialty: 'علاج طبيعي وتغذية', days: ['السبت', 'الأربعاء'], time: '7:00 مساءً' },
    { doctor: 'د. أماني محمد', specialty: 'علاج طبيعي وتغذية', days: ['الأحد', 'الثلاثاء'], time: '2:00 ظهرًا' },
    { doctor: 'د. محمود كمال', specialty: 'أسنان', frequency: 'daily-except', exceptDays: ['الثلاثاء'], time: 'بعد العصر' },
    { doctor: 'د. نورهان سيد', specialty: 'أسنان', days: ['الاثنين'], time: '11:00 صباحًا' },
    { doctor: 'د. إسلام رمضان', specialty: 'تقويم أسنان', frequency: 'monthly-first', days: ['الثلاثاء'], time: '' },
    { doctor: 'د. حازم نجيب', specialty: 'أنف وأذن وحنجرة', days: ['الأربعاء'], time: '3:30 عصرًا' },
    { doctor: 'د. محمد جمال أبو خضرة', specialty: 'قلب وأوعية دموية', frequency: 'monthly', days: ['الجمعة'], time: 'يتم تحديده والإعلان عنه', note: 'دكتوراة في القلب والأوعية الدموية.' }
  ]
};

/* ============================ أدوات مساعدة ============================ */

const AR_DAYS = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

function todayName(date = new Date()) {
  return AR_DAYS[date.getDay()];
}

function tomorrowName(date = new Date()) {
  const d = new Date(date);
  d.setDate(d.getDate() + 1);
  return AR_DAYS[d.getDay()];
}

function firstWeekdayOfMonth(weekdayName, date = new Date()) {
  const targetIndex = AR_DAYS.indexOf(weekdayName);
  const d = new Date(date.getFullYear(), date.getMonth(), 1);
  while (d.getDay() !== targetIndex) d.setDate(d.getDate() + 1);
  return d;
}

function isSameDate(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

// هل الطبيب موجود فعلًا في اليوم المحدد (بالاسم العربي)؟
function rowOccursOn(row, dayName, refDate = new Date()) {
  if (row.frequency === 'daily-except') {
    return !(row.exceptDays || []).includes(dayName);
  }
  if (row.frequency === 'monthly-first') {
    const weekday = row.days[0];
    if (weekday !== dayName) return false;
    return isSameDate(firstWeekdayOfMonth(weekday, refDate), refDate);
  }
  if (row.frequency === 'monthly') {
    // اليوم الشهري بيتحدد ويتم الإعلان عنه، فمش هنجزم إنه موجود دلوقتي بالظبط.
    return false;
  }
  return (row.days || []).includes(dayName);
}

function arabicDoctorCount(n) {
  if (n === 0) return 'لا يوجد أطباء متاحون حاليًا';
  if (n === 1) return 'طبيب واحد متاح';
  if (n === 2) return 'طبيبان متاحان';
  if (n >= 3 && n <= 10) return `${n} أطباء متاحون`;
  return `${n} طبيبًا متاحًا`;
}

// تقدير الوقت بالدقائق لترتيب البطاقات فقط (لا يظهر للمستخدم أبدًا).
function estimateMinutes(timeStr) {
  if (!timeStr) return null;
  const m = timeStr.match(/(\d{1,2})(?::(\d{2}))?\s*(صباحًا|صباحا|ظهرًا|ظهرا|عصرًا|عصرا|مساءً|مساء)/);
  if (!m) return null;
  let hour = parseInt(m[1], 10);
  const minute = m[2] ? parseInt(m[2], 10) : 0;
  const period = m[3];
  if (period.startsWith('صباح')) {
    if (hour === 12) hour = 0;
  } else if (hour < 12) {
    hour += 12;
  }
  return hour * 60 + minute;
}

// تطبيع بسيط للنص العربي عشان البحث يشتغل حتى لو اختلفت الألف/التاء المربوطة.
function normalizeArabic(str) {
  return (str || '')
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .replace(/[إأآا]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function daysChipsHtml(row) {
  const today = todayName();
  if (row.frequency === 'daily-except') {
    return `<span class="day-chip">يوميًا ما عدا ${row.exceptDays.join('، ')}</span>`;
  }
  if (row.frequency === 'monthly') {
    return `<span class="day-chip">${row.days.join('، ')} من كل شهر</span>`;
  }
  if (row.frequency === 'monthly-first') {
    const bareDay = row.days[0].replace(/^ال/, '');
    return `<span class="day-chip">أول ${bareDay} من كل شهر</span>`;
  }
  return row.days
    .map((d) => `<span class="day-chip${d === today ? ' is-today' : ''}">${d}</span>`)
    .join('');
}

function cardTemplate(row) {
  const availableToday = rowOccursOn(row, todayName());
  const timeHtml = row.time
    ? `<div class="appointment-time"><svg class="icon-svg" aria-hidden="true"><use href="#icon-clock"></use></svg><span>${row.time}</span></div>`
    : '';
  return `
    <article class="doctor-card">
      <div class="doctor-card-top">
        <h3>${row.doctor}</h3>
        ${availableToday ? '<span class="today-badge">● متاح اليوم</span>' : ''}
      </div>
      <span class="doctor-specialty">${row.specialty}</span>
      <div class="doctor-days">${daysChipsHtml(row)}</div>
      ${timeHtml}
      ${row.note ? `<span class="doctor-note">${row.note}</span>` : ''}
    </article>`;
}

/* ============================ حالة الصفحة ============================ */

const state = {
  scope: 'all', // 'all' | 'today' | 'tomorrow'
  specialty: 'الكل',
  specialtyLabel: null,
  query: ''
};

const filterContainer = document.getElementById('schedule-filter');
const cardsContainer = document.getElementById('schedule-cards');
const activeSpecialty = document.getElementById('active-specialty');
const scopeTabsContainer = document.getElementById('scope-tabs');
const searchInput = document.getElementById('schedule-search-input');
const specialties = [...new Set(scheduleData.rows.map((row) => row.specialty))];

document.getElementById('updated-at').textContent = scheduleData.lastUpdated;

function getVisibleRows() {
  let rows = scheduleData.rows;

  if (state.scope === 'today') {
    rows = rows.filter((row) => rowOccursOn(row, todayName()));
  } else if (state.scope === 'tomorrow') {
    rows = rows.filter((row) => rowOccursOn(row, tomorrowName()));
  }

  if (state.specialty !== 'الكل') {
    const list = state.specialty.split(',');
    rows = rows.filter((row) => list.includes(row.specialty));
  }

  if (state.query.trim()) {
    const q = normalizeArabic(state.query);
    rows = rows.filter(
      (row) => normalizeArabic(row.doctor).includes(q) || normalizeArabic(row.specialty).includes(q)
    );
  }

  // ترتيب حسب الوقت (الأقرب أولًا)؛ المواعيد بدون وقت واضح تُترك في الآخر.
  return rows
    .map((row, index) => ({ row, index, minutes: estimateMinutes(row.time) }))
    .sort((a, b) => {
      if (a.minutes === null && b.minutes === null) return a.index - b.index;
      if (a.minutes === null) return 1;
      if (b.minutes === null) return -1;
      return a.minutes - b.minutes || a.index - b.index;
    })
    .map((entry) => entry.row);
}

function emptyStateMessage() {
  if (state.query.trim()) {
    return '<p class="empty-schedule">لا توجد نتائج مطابقة لبحثك. جرّبوا اسمًا أو تخصصًا آخر.</p>';
  }
  if (state.scope === 'today') {
    return '<p class="empty-schedule">لا توجد مواعيد ثابتة اليوم لهذا الاختيار. للتأكد، اتصلوا بالعيادة.</p>';
  }
  if (state.scope === 'tomorrow') {
    return '<p class="empty-schedule">لا توجد مواعيد ثابتة غدًا لهذا الاختيار. للتأكد، اتصلوا بالعيادة.</p>';
  }
  return '<p class="empty-schedule">لا توجد مواعيد مضافة لهذا التخصص حاليًا.</p>';
}

function renderSchedule() {
  const rows = getVisibleRows();

  const scopeLabel = {
    all: 'كل الأطباء والمواعيد',
    today: `مواعيد اليوم (${todayName()})`,
    tomorrow: `مواعيد الغد (${tomorrowName()})`
  }[state.scope];

  activeSpecialty.textContent =
    state.specialty === 'الكل' ? scopeLabel : `${scopeLabel} — تخصص ${state.specialtyLabel || state.specialty}`;

  cardsContainer.innerHTML = rows.length ? rows.map(cardTemplate).join('') : emptyStateMessage();

  filterContainer.querySelectorAll('.filter-chip').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.specialty === state.specialty);
  });

  document.querySelectorAll('.specialty-button').forEach((button) => {
    button.classList.toggle('is-selected', button.dataset.specialty === state.specialty);
  });

  if (scopeTabsContainer) {
    scopeTabsContainer.querySelectorAll('.scope-tab').forEach((tab) => {
      const isActive = tab.dataset.scope === state.scope;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
    });
  }
}

/* ============================ الفلاتر والتفاعلات ============================ */

filterContainer.innerHTML = ['الكل', ...specialties]
  .map(
    (specialty) => `
  <button class="filter-chip" type="button" data-specialty="${specialty}">${specialty === 'الكل' ? 'كل التخصصات' : specialty}</button>`
  )
  .join('');

filterContainer.addEventListener('click', (event) => {
  const button = event.target.closest('.filter-chip');
  if (!button) return;
  state.specialty = button.dataset.specialty;
  state.specialtyLabel = null;
  renderSchedule();
});

document.querySelectorAll('.specialty-button').forEach((button) => {
  button.addEventListener('click', () => {
    const label = button.querySelector('h3')?.textContent.trim();
    state.specialty = button.dataset.specialty;
    state.specialtyLabel = label;
    state.scope = 'all';
    state.query = '';
    if (searchInput) searchInput.value = '';
    renderSchedule();
    document.getElementById('schedule').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

if (scopeTabsContainer) {
  scopeTabsContainer.addEventListener('click', (event) => {
    const tab = event.target.closest('.scope-tab');
    if (!tab) return;
    state.scope = tab.dataset.scope;
    renderSchedule();
  });
}

if (searchInput) {
  searchInput.addEventListener('input', () => {
    state.query = searchInput.value;
    renderSchedule();
  });
}

// عدد الأطباء المتاحين لكل تخصص، يُحسب تلقائيًا من بيانات المواعيد.
document.querySelectorAll('.specialty-button').forEach((button) => {
  const list = button.dataset.specialty.split(',');
  const count = scheduleData.rows.filter((row) => list.includes(row.specialty)).length;
  const description = button.querySelector('p');
  if (description) description.textContent = arabicDoctorCount(count);
});

/* ============================ شريط "مواعيد اليوم" ============================ */

function updateTodayHighlight() {
  const titleEl = document.getElementById('today-highlight-title');
  const subEl = document.getElementById('today-highlight-sub');
  if (!titleEl || !subEl) return;

  const today = todayName();
  const todayRows = scheduleData.rows.filter((row) => rowOccursOn(row, today));

  if (todayRows.length) {
    titleEl.textContent = `اليوم ${today}: ${arabicDoctorCount(todayRows.length)}`;
    const todaySpecialties = [...new Set(todayRows.map((row) => row.specialty))];
    const shown = todaySpecialties.slice(0, 4).join('، ');
    const extra = todaySpecialties.length > 4 ? ` و${todaySpecialties.length - 4} تخصصات أخرى` : '';
    subEl.textContent = `التخصصات المتاحة: ${shown}${extra}`;
  } else {
    titleEl.textContent = `اليوم ${today}`;
    subEl.textContent = 'لا توجد مواعيد ثابتة اليوم — اتصلوا بالعيادة للاستفسار.';
  }
}

const todayHighlightCta = document.getElementById('today-highlight-cta');
if (todayHighlightCta) {
  todayHighlightCta.addEventListener('click', (event) => {
    event.preventDefault();
    state.scope = 'today';
    state.specialty = 'الكل';
    state.specialtyLabel = null;
    state.query = '';
    if (searchInput) searchInput.value = '';
    renderSchedule();
    document.getElementById('schedule').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/* ============================ القائمة على الموبايل ============================ */

const menuButton = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'إغلاق القائمة' : 'فتح القائمة');
  menuButton.textContent = isOpen ? '×' : '☰';
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'فتح القائمة');
    menuButton.textContent = '☰';
  });
});

/* ============================ حالة الخدمات المساندة (مفتوح الآن / مغلق الآن) ============================ */
/*
  الحالة بتتحسب من وقت مصر الحالي (Africa/Cairo) مقارنة بمواعيد الفتح المذكورة
  فعليًا في index.html لكل خدمة. مفيش وقت إغلاق معلن لأي من الخدمتين، فالمنطق
  هنا بيعتبر الخدمة "متاحة" من وقت الفتح المذكور لحد نهاية اليوم، و"مغلقة" قبل
  ميعاد الفتح فقط. لو حبيت تضيف وقت إغلاق فعلي في المستقبل، عدّل getOpenMinutes
  بالأسفل (وأضف سقف إغلاق لو لزم الأمر) من غير ما تلمس أي حاجة تانية.
*/

function getCairoNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Africa/Cairo',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  }).formatToParts(date);
  const map = {};
  parts.forEach((p) => { map[p.type] = p.value; });
  let hour = parseInt(map.hour, 10);
  if (hour === 24) hour = 0;
  return { weekday: map.weekday, hour, minute: parseInt(map.minute, 10) };
}

function formatArabicClockTime(h, m) {
  let period;
  let displayHour;
  if (h < 12) {
    period = 'صباحًا';
    displayHour = h === 0 ? 12 : h;
  } else if (h < 15) {
    period = 'ظهرًا';
    displayHour = h === 12 ? 12 : h - 12;
  } else if (h < 18) {
    period = 'عصرًا';
    displayHour = h - 12;
  } else {
    period = 'مساءً';
    displayHour = h > 12 ? h - 12 : h;
  }
  const mm = String(m).padStart(2, '0');
  return `${displayHour}:${mm} ${period}`;
}

const SERVICE_OPENING_RULES = {
  glasses: () => 12 * 60, // نور العيون للنظارات: يوميًا من 12 ظهرًا
  lab: (weekday) => (weekday === 'Friday' ? 14 * 60 : 9 * 60 + 30) // معمل العربي الحديث: يوميًا 9:30، الجمعة 2 ظهرًا
};

function computeServiceStatus(getOpenMinutes) {
  const { weekday, hour, minute } = getCairoNow();
  const nowMinutes = hour * 60 + minute;
  const openMinutes = getOpenMinutes(weekday);
  if (nowMinutes >= openMinutes) return { open: true };
  const h = Math.floor(openMinutes / 60);
  const m = openMinutes % 60;
  return { open: false, opensAt: formatArabicClockTime(h, m) };
}

function renderServiceStatus(elementId, getOpenMinutes) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const status = computeServiceStatus(getOpenMinutes);
  if (status.open) {
    el.textContent = '🟢 متاح الآن';
    el.classList.add('is-open');
    el.classList.remove('is-closed');
  } else {
    el.textContent = `🔴 مغلق الآن — يفتح الساعة ${status.opensAt}`;
    el.classList.add('is-closed');
    el.classList.remove('is-open');
  }
}

function updateServiceStatuses() {
  renderServiceStatus('service-status-glasses', SERVICE_OPENING_RULES.glasses);
  renderServiceStatus('service-status-lab', SERVICE_OPENING_RULES.lab);
}

updateServiceStatuses();
setInterval(updateServiceStatuses, 60000);

/* ============================ بدء التشغيل ============================ */

updateTodayHighlight();
renderSchedule();
