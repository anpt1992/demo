// gọi các thư viện (import dependencies)
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express(); // khởi tạo express (create your express app)

// cấu hình express sử dụng các thư viện (make app use dependencies)
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

app.get("/todo", (req, res) => {
    res.send(["Thing 1", "Thing 2"]);
});

console.log('Your backend locate at http://localhost:8081/')
app.listen(process.env.PORT || 8081); // backend sẽ chạy ở port 8081 (client is already running on 8080)