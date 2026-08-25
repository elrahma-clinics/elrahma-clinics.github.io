/*
  تعديل المواعيد لاحقًا:
  غيّر فقط النص بين علامات الاقتباس في السطور أدناه، ثم احفظ الملف وارفعه
  مكان الملف القديم في GitHub. لا تحتاج لتعديل index.html.
*/
const scheduleData = {
  lastUpdated: 'آخر تحديث للجدول: أغسطس 2026',
  rows: [
    { doctor: 'د. سامي عثمان', specialty: 'أطفال', time: 'الأحد والثلاثاء والخميس — 6:00 مساءً' },
    { doctor: 'د. محمد علي', specialty: 'مسالك بولية', time: 'الأربعاء — 7:00 مساءً' },
    { doctor: 'د. أحمد الشحات', specialty: 'تخاطب وسلوك', time: 'الأحد والجمعة — 2:00 ظهرًا' },
    { doctor: 'د. إسلام كمال', specialty: 'مخ وأعصاب', time: 'الخميس — 5:00 عصرًا' },
    { doctor: 'د. بسمة سعيد', specialty: 'جلدية', time: 'الجمعة — 6:00 مساءً' },
    { doctor: 'د. شيماء عبدالمجيد', specialty: 'أمراض نفسية', time: 'الأحد — 11:45 ظهرًا' },
    { doctor: 'د. عبدالكريم عزوز', specialty: 'جراحة عامة', time: 'الجمعة من كل شهر — يتم تحديده والإعلان عنه', note: 'أستاذ مساعد واستشاري الجراحة بالقصر العيني.' },
    { doctor: 'د. حسن عبدالباقي', specialty: 'عظام', time: 'السبت — 9:00 مساءً' },
    { doctor: 'د. أسامة سعد', specialty: 'عظام', time: 'الأربعاء — 2:00 ظهرًا' },
    { doctor: 'د. خالد صلاح', specialty: 'رمد', time: 'الأحد — 10:00 مساءً' },
    { doctor: 'د. محمود عبدالعزيز', specialty: 'رمد', time: 'الجمعة — 8:00 مساءً' },
    { doctor: 'د. أحمد العنتبلي', specialty: 'باطنة', time: 'الأربعاء — 4:00 عصرًا' },
    { doctor: 'د. فاطمة محروس', specialty: 'باطنة', time: 'السبت — 5:00 عصرًا' },
    { doctor: 'د. أحمد مصطفى', specialty: 'علاج طبيعي وتغذية', time: 'السبت والأربعاء — 7:00 مساءً' },
    { doctor: 'د. أماني محمد', specialty: 'علاج طبيعي وتغذية', time: 'الأحد والثلاثاء — 2:00 ظهرًا' },
    { doctor: 'د. محمود كمال', specialty: 'أسنان', time: 'يوميًا بعد العصر، ما عدا الثلاثاء' },
    { doctor: 'د. نورهان سيد', specialty: 'أسنان', time: 'الاثنين — 11:00 صباحًا' },
    { doctor: 'د. إسلام رمضان', specialty: 'تقويم أسنان', time: 'أول ثلاثاء من كل شهر' },
    { doctor: 'د. حازم نجيب', specialty: 'أنف وأذن وحنجرة', time: 'الأربعاء — 3:30 عصرًا' }
  ]
};

const filterContainer = document.getElementById('schedule-filter');
const cardsContainer = document.getElementById('schedule-cards');
const activeSpecialty = document.getElementById('active-specialty');
const specialties = [...new Set(scheduleData.rows.map((row) => row.specialty))];

document.getElementById('updated-at').textContent = scheduleData.lastUpdated;

function renderSchedule(selectedSpecialty = 'الكل') {
  const visibleRows = selectedSpecialty === 'الكل'
    ? scheduleData.rows
    : scheduleData.rows.filter((row) => row.specialty === selectedSpecialty);

  activeSpecialty.textContent = selectedSpecialty === 'الكل'
    ? 'كل الأطباء والمواعيد'
    : `أطباء تخصص ${selectedSpecialty}`;

  cardsContainer.innerHTML = visibleRows.length
    ? visibleRows.map((row) => `
      <article class="doctor-card">
        <h3>${row.doctor}</h3>
        <span class="doctor-specialty">${row.specialty}</span>
        <span class="appointment-label">الموعد</span>
        <div class="appointment">${row.time}</div>
        ${row.note ? `<span class="doctor-note">${row.note}</span>` : ''}
      </article>`).join('')
    : '<p class="empty-schedule">لا توجد مواعيد مضافة لهذا التخصص حاليًا.</p>';

  filterContainer.querySelectorAll('.filter-chip').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.specialty === selectedSpecialty);
  });

  document.querySelectorAll('.specialty-button').forEach((button) => {
    button.classList.toggle('is-selected', button.dataset.specialty === selectedSpecialty);
  });
}

filterContainer.innerHTML = ['الكل', ...specialties].map((specialty) => `
  <button class="filter-chip" type="button" data-specialty="${specialty}">${specialty === 'الكل' ? 'كل التخصصات' : specialty}</button>`).join('');

filterContainer.addEventListener('click', (event) => {
  const button = event.target.closest('.filter-chip');
  if (button) renderSchedule(button.dataset.specialty);
});

document.querySelectorAll('.specialty-button').forEach((button) => {
  button.addEventListener('click', () => {
    renderSchedule(button.dataset.specialty);
    document.getElementById('schedule').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

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

renderSchedule();
