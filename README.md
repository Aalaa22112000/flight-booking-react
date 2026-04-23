# ArabiFly - طيران العرب ✈️


**ArabiFly** is a modern, responsive, and visually stunning flight booking frontend application tailored for the MENA region. It features a custom "Frosted Glass" (Glassmorphism) UI design, delivering a premium user experience reminiscent of high-end travel agencies.

---

## 🌟 مميزات المشروع (Features)

*   **تصميم عصري (Glassmorphism UI):** واجهة مستخدم تعتمد على الشفافية والتأثيرات الزجاجية الجذابة.
*   **تجربة بحث ذكية (Smart Search Autocomplete):** نظام إكمال تلقائي مخصص للبحث عن المطارات والدول بتصميم احترافي ومنسدل.
*   **تفاعلية ممتازة (Interactive Components):** نوافذ منبثقة (Modals) مخصصة بعيداً عن أساليب التنبيهات التقليدية المزعجة (No Default Alerts).
*   **متجاوب بالكامل (Fully Responsive):** مبني ليعمل بكفاءة على كافة أحجام الشاشات (Mobile, Tablet, Desktop).
*   **دعم اللغة العربية (RTL & Arabic First):** المشروع مبني من الأساس ليدعم اللغة العربية من اليمين إلى اليسار بشكل سليم مع استخدام خط `Cairo`.
*   **أكواد نظيفة (Clean Code):** هيكلة مكونات React نموذجية، وفصل تام للمنطق (Logic) عن واجهة العرض (UI)، مما يجعله مثالياً للعمل الجماعي.

## 🛠️ التقنيات المستخدمة (Tech Stack)

*   **Frontend Library:** React (Functional Components & Hooks)
*   **Build Tool:** Vite
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (Modern utility-first framework)
*   **Icons:** Lucide React
*   **Fonts:** Cairo (Google Fonts)

## 📁 هيكلية المشروع (Folder Structure)

```text
src/
├── components/          # Reusable UI components
│   ├── FlightDeals.tsx  # Flight cards listing component
│   ├── Footer.tsx       # Website footer
│   ├── Header.tsx       # Responsive navigation bar
│   └── SearchForm.tsx   # Complex flight search & autocomplete logic
├── types.ts             # TypeScript interfaces and types
├── mockData.ts          # Static data (Airlines, Airports, Offers)
├── App.tsx              # Main application layout and routes
├── main.tsx             # Application entry point
└── index.css            # Global CSS, Font imports, Tailwind directives
```

## 🚀 كيفية تشغيل المشروع محلياً (Getting Started)

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YourUsername/arabifly-react.git
    cd arabifly-react
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:3000` to view the application.

## 📸 لقطات الشاشة (Screenshots)

*(Add your screenshots here! Take screenshots of the Homepage, Search Dropdown, and the Booking Modal before publishing to GitHub)*

## 🤝 المساهمة (Contributing)

We believe in teamwork! Feel free to fork the repository, make your changes, and submit a pull request. Clean code practices are highly encouraged.

## 📜 الترخيص (License)

This project is open-sourced under the MIT License.
