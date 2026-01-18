TÊN ĐỀ TÀI : XÂY DỰNG HỆ THỐNG THƯƠNG MẠI ĐIỆN TỬ THỜI TRANG TORANO TÍCH HỢP THANH TOÁN TRỰC TUYẾN VNPAY SỬ DỤNG REACT VÀ NODE.JS
CÔNG NGHỆ SỬ DỤNG : REACT , NODE.JS , MONGO DB 
HƯỚNG DẪN CÀI ĐẶT :
#  E. HƯỚNG DẪN CHẠY CHƯƠNG TRÌNH

##  1. Yêu cầu môi trường
- Các công nghệ được sử dụng :
* Node.js: môi trường chạy server (phiên bản >=18)
* Express.js: framework Node.js để xây dựng API RESTful
* MongoDB: cơ sở dữ liệu NoSQL
* React.js: thư viện xây dựng giao diện người dùng

Để chạy được hệ thống, máy cần cài đặt các công cụ sau:
- Node.js : phiên bản >= 18.0.0  và MongoDB Compass

  * Cách cài Node.js phiên bản > 18 trên Windows
  ### Tải và cái đặt Nodejs
Bước 1. Vào trang tải chính thức
 Truy cập: https://nodejs.org
Tại trang chủ, bạn sẽ thấy 2 lựa chọn:
LTS (Long Term Support) — ổn định, khuyên dùng cho hầu hết dự án.
Current — mới nhất, nhưng đôi khi chưa ổn định.
🔹 Chọn LTS (v20.x.x) → đây là phiên bản >18 và rất ổn định.
Bước 2. Tải về và cài đặt
Nhấn vào nút “Windows Installer (.msi)” dưới mục LTS.
Sau khi tải xong, mở file .msi để cài.
Cứ nhấn Next → Next → Install, giữ nguyên tùy chọn mặc định.
Khi hoàn tất, nhấn Finish.

## Tải và cài đặt MongoDB Compass
### Windows / macOS / Linux
1. Mở trang tải chính thức:  
   https://www.mongodb.com/try/download/compass  
2. Chọn hệ điều hành của bạn (Windows / macOS / Linux).  
   - Windows: tải file **MSI (Windows Installer)**.  
   - macOS: tải file **macOS (PKG)**.  
   - Linux: chọn gói tương ứng (deb/rpm/ tar).  
3. Chạy file cài đặt vừa tải:
   - Windows: chạy `.msi` → Next → Next → Install → Finish.  
   - macOS: mở `.pkg` → Next → Install → nhập mật khẩu → Finish.  
   - Linux: cài theo hướng dẫn gói (ví dụ `sudo dpkg -i <file>.deb` hoặc dùng trình quản lý gói).
- **npm** (đi kèm Node.js)  

## - 

---

##  2. Cách cài đặt và khởi chạy dự ánD

###  Bước 1: Giải nén source code
```bash
  Giải nén file zip được nộp trong source code

### Bước 2: Cài đặt Backend
Thầy cài MongoDB Compass, sau đó:

Tạo database mới tên là test 

Trong từng collection (user, product, order), chọn Import Data → chọn file .json tương ứng trong thư mục Database/ của em.”

Khi đó, dữ liệu trong MongoDB sẽ giống 100% dữ liệu em dùng.”

Sau đó, khi thầy chạy backend (npm start), server kết nối đến mongodb://localhost:27017/test là chạy được ngay.

---

###  Bước 3: Cài đặt Frontend
Mở tab terminal mới, di chuyển đến thư mục `Mern-stack`:
```bash
cd Mern-stack
npm install
```

Chạy ứng dụng React:
```bash
npm start
```
 Frontend chạy tại: **http://localhost:3000**

---

###  Bước 4: Kết nối Frontend ↔ Backend
Trong file `Mern-stack/package.json` đã có:
```json
"proxy": "http://localhost:3001"

 Vì vậy, các request từ frontend sẽ tự động gọi tới backend, không cần cấu hình thêm.



##  3. Tài khoản đăng nhập mặc định
Email : vanh@gmail.com
Pass : 1234 

Email : admin@gmail.com (tài khoản này là admin)
Pass :1234

##  4. Cấu trúc thư mục và mô tả chức năng chính
```
Ecommerce-Project/
│
├── Ecommerce-backend/              # Backend (Node.js + Express + MongoDB)
│   ├── src/
│   │   ├── index.js               # File chạy chính của server
│   │   ├── controllers/           # Xử lý logic cho các API
│   │   ├── models/                # Định nghĩa schema (User, Product, Order, ...)
│   │   ├── routes/                # Các tuyến API (user, product, order, ...)
│   │   └── middlewares/           # Xác thực, xử lý lỗi, token,...
│   ├── .env                       # Biến môi trường
│   └── package.json               # Thông tin project và dependencies
│
├── Mern-stack/                     # Frontend (React + Redux + Ant Design)
│   ├── src/
│   │   ├── components/            # Thành phần UI (Header, Footer, ProductCard, ...)
│   │   ├── pages/                 # Các trang chính (Home, Login, Admin, ...)
│   │   ├── redux/                 # Quản lý state (store, slice, action)
│   │   ├── utils/                 # Xử lý token, call API, format dữ liệu
│   │   └── App.js                 # File chính khởi tạo Router
│   ├── public/
│   ├── package.json
│   └── .env
│
└── Database/                       # Dữ liệu export từ MongoDB
    ├── users.json
    ├── products.json
    └── orders.json
```

---

## 5. Chức năng chính
- **Người dùng:**
  - Đăng ký / Đăng nhập  
  - Xem và tìm kiếm sản phẩm  
  - Thêm sản phẩm vào giỏ hàng  
  - Thanh toán qua PayPal  
- **Quản trị viên (Admin):**
  - Quản lý sản phẩm (thêm, sửa, xóa)  
  - Quản lý đơn hàng và người dùng  

<img width="915" height="519" alt="image" src="https://github.com/user-attachments/assets/e3eaaeeb-cf0c-4d98-8749-1664b432295b" />
TRANG CHỦ

<img width="915" height="515" alt="image" src="https://github.com/user-attachments/assets/ffd01e4e-b78a-4746-9e42-2421d9511569" />
TRANG CHI TIẾT SẢN PHẨM


<img width="915" height="515" alt="image" src="https://github.com/user-attachments/assets/2a60241d-2bf3-47f3-a758-1ad69de3b2fc" />
TRANG GIỎ HÀNG


<img width="845" height="743" alt="image" src="https://github.com/user-attachments/assets/08b4f890-4638-40a3-8544-616c8f484998" />
TRANG THANH TOÁN VNPAY


<img width="915" height="515" alt="image" src="https://github.com/user-attachments/assets/9de49c14-bcf7-4644-a45c-835227e87aff" />
TRANG TRẠNG THÁI ĐƠN HÀNG






