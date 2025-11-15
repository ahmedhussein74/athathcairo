"use client";

import styles from "../style/Marquee.module.css";

const places = [
  "مدينة نصر",
  "التجمع الأول",
  "التجمع الثالث",
  "التجمع الخامس",
  "مصر الجديدة",
  "المعادي",
  "العباسية",
  "شبرا",
  "رمسيس",
  "وسط البلد",
  "الزيتون",
  "عين شمس",
  "السلام",
  "المرج",
  "المطرية",
  "فيصل",
  "الهرم",
  "الدقي",
  "المهندسين",
  "العجوزة",
  "الجيزة",
  "إمبابة",
  "6 أكتوبر",
  "الشيخ زايد",
  "حدائق الأهرام",
  "حلوان",
  "15 مايو",
  "البدرشين",
  "الرحاب",
  "مدينتي",
  "الإسكندرية",
  "الأقصر",
  "الساحل الشمالي",
  "العين السخنة",
  "الجونة",
  "المنيا",
  "سوهاج",
  "قنا",
  "بني سويف",
  "الفيوم",
  "الدقهلية",
  "الغربية",
  "المنوفية",
  "كفر الشيخ",
  "دمياط",
  "القليوبية",
];

const content = [...places, ...places]; // duplicate for smooth scroll

export default function Marquee() {
  return (
    <div className={styles.marqueeWrapper}>
      {/* Inner container: applies the animation and flex layout */}
      <div className={styles.marqueeContainer}>
        {content.map((place, index) => (
          <span key={`${place}-${index}`} className={styles.marqueeText}>
            {place}
          </span>
        ))}
      </div>
    </div>
  );
}
