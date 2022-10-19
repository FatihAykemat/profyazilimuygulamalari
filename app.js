const express=require("express");
const bodyParser=require("body-parser");

const app = express();
const PORT = 5000;
app.use(bodyParser.json());

const middleware = function (req, res, next) {
    console.log("Middleware start..");
    next();
  };

  const postware= function(req,res,next){
    console.log("Post için istek gönderildi");
    next();
  }
  
  app.use(middleware);
  
  app.get("/hello", function (req, res) {
    console.log("Merhaba GET isteği attınız");
    res.json("GET");
  });

  app.post("/hello",postware, function (req, res) {
    console.log("Merhaba POST isteği attınız");
    res.json("POST");
  });

  app.put("/hello", function (req, res) {
    console.log("Merhaba PUT isteği attınız");
    res.json("PUT");
  });

  app.delete("/hello", function (req, res) {
    console.log("Merhaba DELETE isteği attınız");
    res.json("DELETE");
  });

  app.listen(PORT, () => {
    console.log("Ready on http://localhost:" + PORT);
  });