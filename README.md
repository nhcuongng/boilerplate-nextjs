# Convention Guide

## Structure

> Folder structure options and naming conventions for software projects

### A typical top-level directory layout

```bash
  .
  ├── pages # Chứa tất cả các trang của website, thường để dùng hiển thị và dùng các component trong folder component
  │   ├── _app.tsx
  │   ├── about.tsx
  │   ├── api # Chứa API mockup cho testing
  │   │   └── hello.ts
  │   ├── index.tsx
  │   └── posts
  │       ├── [id].tsx
  │       └── index.tsx
  ├── public # chứa ảnh và các file muốn public
  │   ├── favicon.ico
  │   └── vercel.svg
  ├── src # Chứa source code
  │   ├── @types # Chứa tất cả các types
  │   │   └── index.ts
  │   ├── components
  │   │   ├── general # Các component mang tính reuseable
  │   │   ├── home # Các component nằm trong trang home (hoặc những trang tượng tự sẽ có folder tương ứng) sẽ được viết ở đây và không mang tính tái sử dụng
  │   │   ├── hoc # Chứa HOC 
  │   │   │   ├── index.ts 
  │   │   └── layout # Chứa các component dùng để bao ngoài các trang như PageWrapper, Container
  │   │       ├── container
  │   │       │   ├── container.module.scss # CSS module cho component riêng biệt
  │   │       │   └── index.tsx
  │   │       └── index.ts
  │   ├── helpers # Các helpers xử lý logic 
  │   │   ├── index.ts
  │   │   └── log.ts
  │   └── store
  ├── styles # Các styles cho pages
  │   ├── globals.css
  │   └── post.module.scss
```

## Coding styles

- Một component để dễ đọc dễ viết chỉ nên viết khoảng 100-150 dòng
- Các component được tách ra từ component mẹ (không mang tính tái sử dụng) nên viết trong cùng một folder
- Viết js doc ở ngay phía trên các component, helper func tái sử dụng cao
- Không dùng export default component
- Type dùng để định nghĩa cho biến và Prop. Còn interface sẽ dùng cho implement class và cho các API
- Đặt tên type theo format ```Txxx``` ex: ```TProp, TPost```. Interface là ```IUser, IPost```
- Component chỉ nên code hooks hoặc chỉ class (để thống nhất trong cùng 1 project)
- Không nên truyền prop vào rồi làm state local (anti pattern trong react)
- dùng path alias được quy định trong tsconfig.json
