console.log("Halo, kita akan belajar membuat server");

const http = require("http");

const requestListener = (req, res) => {
  const { method, url } = req;

  res.setHeader("Content-Type", "text/html");

  if (url === "/") {
    if (method === "GET") {
      res.statusCode = 200;
      res.end("<h1>Ini adalah dashboard</h1>");
    } else {
      res.statusCode = 400;
      res.end("undefined method " + method);
    }
  } else if (url === "/about") {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("X-Powered-By", "NodeJS");

    if (method === "GET") {
      res.statusCode = 200;
      res.end(
        JSON.stringify({
          message: `Halo, ${name}>! Ini adalah halaman about`,
        })
      );
    } else if (method === "POST") {
      let body = [];

      req.on("data", (chunk) => {
        body.push(chunk);
      });

      req.on("end", () => {
        res.statusCode = 200;

        body = Buffer.concat(body).toString();

        const { name } = JSON.parse(body);
        // res.end(`<h1>Halo, ${name}>! Ini adalah halaman about</h1>`);
        res.end(
          JSON.stringify({
            message: `Halo, ${name}>! Ini adalah halaman about`,
          })
        );
      });
    } else {
      res.statusCode = 400;
      res.end("undefined method " + method);
    }
  } else {
    res.statusCode = 404;
    res.end("<h1>Halaman tidak ditemukan</h1>");
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
