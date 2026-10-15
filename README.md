# DrawerReactNativeApp

🌍 **Dil / Language:** [Türkçe](#-proje-amacı) | [English](#-project-purpose)

---

## 🎯 Proje Amacı
DrawerReactNativeApp, modern mobil uygulamalarda sıkça tercih edilen çekmece (drawer) navigasyon yapısını React Native ve Expo ekosistemi üzerinde optimize edilmiş bir mimariyle sunmak amacıyla geliştirilmiştir. Çoklu ekran yapılarında kullanıcı deneyimini artıracak akıcı geçişler ve sezgisel bir arayüz gezintisi sağlamayı hedefler.

Proje; React Navigation 7, Reanimated ve Gesture Handler kütüphanelerinin en güncel sürümlerini kullanarak, performans kaybı yaşamadan donanım hızlandırmalı jest ve animasyon yönetimini örneklemektedir. Geliştiricilere modüler bir ekran mimarisi ve genişletilebilir bir temel sağlar.

## 🛠️ Kullanılan Teknolojiler
- **Framework & Runtime:** React Native (v0.79.5), Expo (v53.0.20)
- **Kütüphane:** React (v19.0.0)
- **Navigasyon:** `@react-navigation/native` (v7.1.17), `@react-navigation/drawer` (v7.5.6)
- **Animasyon & Jest Yönetimi:** `react-native-reanimated` (v3.17.4), `react-native-gesture-handler` (v2.24.0)
- **Platform Yardımcıları:** `expo-status-bar`
- **Geliştirici Araçları:** Babel Core, Node.js & npm

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. **Depoyu Klonlayın:**
```bash
git clone https://github.com/Merenylmz/DrawerReactNativeApp.git
cd DrawerReactNativeApp
```

2. **Bağımlılıkları Yükleyin:**
```bash
npm install
```

3. **Geliştirici Sunucusunu Başlatın:**
```bash
npx expo start
```

4. **Platforma Özel Çalıştırma (Opsiyonel):**
```bash
# Android için
npm run android

# iOS için (macOS gerektirir)
npm run ios

# Web tarayıcısı için
npm run web
```

## 📌 Ek Bilgiler ve Özellikler
- **Modüler Ekran Mimarisi:** Ekran bileşenleri `Screens` dizini altında organize edilerek projenin ölçeklenebilirliği artırılmıştır.
- **Yüksek Performanslı Jestler:** `react-native-gesture-handler` ve `react-native-reanimated` entegrasyonu sayesinde çekmece menü açılış-kapanış hareketleri doğal ve takılmasız (60+ FPS) çalışır.
- **Çapraz Platform Desteği:** Tek bir kod tabanı üzerinden Android, iOS ve Web platformlarına uyumlu yapıdadır.
- **Kolay Özelleştirilebilirlik:** Drawer menü içeriği, stil ve başlık ayarları `@react-navigation/drawer` API'si üzerinden kolayca kişiselleştirilebilir.

---

# DrawerReactNativeApp (English)

## 🎯 Project Purpose
DrawerReactNativeApp is designed to deliver a modern, intuitive, and performant drawer-based navigation experience within the React Native and Expo ecosystems. It addresses the common architectural challenge of structuring multi-screen mobile applications with clean navigation flow and seamless transitions.

By integrating the latest versions of React Navigation 7, Reanimated, and Gesture Handler, the application serves as a clean baseline for gesture-driven screen transitions with hardware-accelerated animations, providing developers with a solid architectural starting point.

## 🛠️ Technologies Used
- **Framework & Runtime:** React Native (v0.79.5), Expo (v53.0.20)
- **Core Library:** React (v19.0.0)
- **Navigation:** `@react-navigation/native` (v7.1.17), `@react-navigation/drawer` (v7.5.6)
- **Animations & Gestures:** `react-native-reanimated` (v3.17.4), `react-native-gesture-handler` (v2.24.0)
- **Platform Utilities:** `expo-status-bar`
- **Developer Tools:** Babel Core, Node.js & npm

## 🚀 Installation and Usage

Follow the steps below to set up and run the project locally:

1. **Clone the Repository:**
```bash
git clone https://github.com/Merenylmz/DrawerReactNativeApp.git
cd DrawerReactNativeApp
```

2. **Install Dependencies:**
```bash
npm install
```

3. **Start the Development Server:**
```bash
npx expo start
```

4. **Platform-Specific Execution (Optional):**
```bash
# For Android
npm run android

# For iOS (Requires macOS)
npm run ios

# For Web
npm run web
```

## 📌 Additional Information & Features
- **Modular Directory Structure:** Screen components are separated into the `Screens` directory for better maintainability and scale.
- **Fluid Gestures & Native Performance:** Backed by `react-native-gesture-handler` and `react-native-reanimated`, delivering smooth 60+ FPS drawer animations.
- **Cross-Platform Compatibility:** Single codebase running seamlessly on Android, iOS, and Web.
- **Extensible Configuration:** Navigation styling, screen routes, and drawer behaviors are fully customizable via React Navigation drawer configuration options.

---