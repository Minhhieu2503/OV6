# OV6 - Trading Website

Website giới thiệu về trading và các dịch vụ đào tạo trader chuyên nghiệp.

## Cấu trúc dự án

```
ov6-fe/
├── src/
│   ├── components/          # Các component tái sử dụng
│   │   ├── Navigation.jsx   # Navigation bar
│   │   └── Footer.jsx       # Footer component
│   ├── sections/            # Các section của trang
│   │   ├── HomeSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── StrategySection.jsx
│   │   ├── ResultsSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── BlogSection.jsx
│   │   └── ContactSection.jsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useScroll.js     # Hook quản lý scroll state
│   │   └── useNavigation.js # Hook quản lý navigation
│   ├── constants/           # Dữ liệu và constants
│   │   ├── navigation.js    # Navigation items
│   │   ├── homeData.js      # Dữ liệu home section
│   │   ├── strategyData.js  # Dữ liệu strategy section
│   │   ├── resultsData.js   # Dữ liệu results section
│   │   ├── servicesData.js  # Dữ liệu services section
│   │   └── blogData.js      # Dữ liệu blog section
│   ├── App.jsx              # Component chính
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles với Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Công nghệ sử dụng

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Cài đặt và chạy

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm start
# hoặc
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview
```

## Cấu trúc code

### Components
- Tất cả components được tách riêng vào các file riêng biệt
- Components được tổ chức theo chức năng (components, sections)

### Hooks
- Custom hooks được tách ra để tái sử dụng logic
- `useScroll`: Quản lý scroll state
- `useNavigation`: Quản lý navigation state và scroll behavior

### Constants
- Tất cả dữ liệu tĩnh được tách ra vào thư mục `constants`
- Dễ dàng cập nhật và bảo trì

### Sections
- Mỗi section là một component độc lập
- Dễ dàng thêm, sửa, xóa sections

## Lợi ích của cấu trúc mới

1. **Dễ bảo trì**: Code được tổ chức rõ ràng, dễ tìm và sửa
2. **Tái sử dụng**: Components và hooks có thể tái sử dụng
3. **Mở rộng dễ dàng**: Dễ dàng thêm sections hoặc components mới
4. **Tách biệt concerns**: Logic, UI, và data được tách biệt rõ ràng
5. **Chuyên nghiệp**: Tuân theo best practices của React

