console.log("Halo, kita akan belajar membuat server");

const http = require("http");

/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 *
 * @param req: objek yang berisikan informasi terkait permintaan
 * @param res: objek yang digunakan untuk menanggapi permintaan
 *
 * Untuk tes koneksi gunakan perintah:
 * - No req body => curl -X GET http://localhost:5000/ => pada cmd
 * - With req body => curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Dicoding\"}" => pada cmd
 */

const requestListener = (req, res) => {
  const { method } = req;

  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;

  if (method === "GET") {
    // response ketika GET
    res.end("<h1>Respon dari request curl -X GET</h1>");
  }

  if (method === "POST") {
    // response ketika POST
    // tanpa json / tanpa request body
    //
    // res.end("<h1>Respon dari request curl -X POST</h1>");
    //
    // dengan json / request body
    //
    let body = [];

    req.on("data", (chunk) => {
      //stream proses
      body.push(chunk);
    });

    req.on("end", () => {
      //unite the stream
      body = Buffer.concat(body).toString();
      //   const name  = JSON.parse(body);
      const { name } = JSON.parse(body);
      res.end(`<h1>Hai, ${name}!</h1>`);
    });
  }

  if (method === "PUT") {
    // response ketika POST
    res.end("<h1>Respon dari request curl -X PUT</h1>");
  }

  if (method === "DELETE") {
    // response ketika DELETE
    res.end("<h1>Respon dari request curl -X DELETE</h1>");
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
