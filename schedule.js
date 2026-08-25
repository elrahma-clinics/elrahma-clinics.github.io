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
    { doctor: 'د. عبدالكريم عزوز', specialty: 'جراحة عامة', time: 'الجمعة من كل شهر', note: 'أستاذ مساعد واستشاري الجراحة بالقصر العيني.' },
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

document.getElementById('updated-at').textContent = scheduleData.lastUpdated;
document.getElementById('schedule-body').innerHTML = scheduleData.rows.map((row) => `
  <tr>
    <td>${row.doctor}${row.note ? `<span class="doctor-note">${row.note}</span>` : ''}</td>
    <td>${row.specialty}</td>
    <td>${row.time}</td>
  </tr>`).join('');
