src/
├── core/
│ ├── ...
├── data/
│ ├── repositories/
│ ├── services/
│ └── ...
├── domain/
│ ├── ...
└── presentation/
├── components/
├── pages/
├── redux/
│ ├── actions/
│ ├── reducers/
│ ├── store.js
│ └── ...
└── ...
I. Core: Thư mục này chứa các thành phần cốt lõi của ứng dụng, bao gồm các hàm tiện ích, hằng số, và các loại dữ liệu chung mà các phần khác của ứng dụng có thể sử dụng.

II. Data: Thư mục này thường chứa logic liên quan đến việc truy xuất dữ liệu từ các nguồn như API, cơ sở dữ liệu, hoặc bất kỳ nguồn dữ liệu nào khác. Bạn có thể có các module như services, repositories, hoặc API clients ở đây.

III. Domain: Thư mục này chứa các phần liên quan đến logic kinh doanh và các đối tượng (entities) của ứng dụng. Đây là nơi bạn định nghĩa các đối tượng, giao diện, và logic liên quan đến domain cụ thể của ứng dụng.

IV. Presentation: Thư mục này chứa các thành phần liên quan đến giao diện người dùng (UI) của ứng dụng, bao gồm các component React và các trang. Đây là nơi bạn sẽ xây dựng giao diện người dùng dựa trên các dữ liệu từ domain và các dữ liệu được truy vấn từ data layer.

- Components: Tạo một thư mục có tên là components để chứa các thành phần UI nhỏ, tái sử dụng được, như buttons, input fields, cards, và các thành phần khác. Điều này giúp bạn tái sử dụng các thành phần này ở nhiều nơi trong ứng dụng của bạn.

- Pages: Tạo một thư mục có tên là pages để chứa các trang (pages) của ứng dụng. Mỗi trang sẽ có một tệp tin JavaScript/TypeScript riêng, đại diện cho giao diện và logic của trang đó.

- Layouts: Nếu bạn có các layout chung được sử dụng trong nhiều trang, bạn có thể tạo một thư mục layouts để chứa các thành phần layout này.

- Containers hoặc Containers: Tạo một thư mục có tên là containers hoặc screens để chứa các thành phần giao diện cao cấp, nơi kết hợp các thành phần nhỏ thành các giao diện hoàn chỉnh. Các containers thường chứa logic kinh doanh và có thể kết nối với state của ứng dụng thông qua Redux hoặc Context API.
