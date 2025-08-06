import express from "express";

const app = express();
const port = 3000;

app.get("/", function (req, res) {
    res.send("Hello, world!");
});

app.listen(port, function () {
    console.log(
        `애플리케이션이 http://localhost:${port.toString()}/ 에서 작동 중입니다.`
    );
});
