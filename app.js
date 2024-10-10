//!Core Modules
const readline = require("readline");
const fs = require("fs"); //fs means file system
const http = require("http");
const url = require("url");
const events = require("events")


//!Coustum Module

let replaceHtml = require("./Modules/replaceHtml");

//! *******************************************  √ 4th class  *********************************************************************************************************
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("please enter your name: ", (name)=>{
//     console.log("you are mr."+ name)
//     rl.close()
// })

//! ************************************** √ fs module file system  ************************************************************************************************

// let textIn = fs.readFileSync(`./files/input.txt`, "utf-8");
// console.log(textIn);

// let content = `there are some problems that we have \nto face when we are developing new hobies`;

// fs.writeFileSync("./files/example.txt", content)

//! ******************************* √ Creating a server using http & first node app **************************************************

const html = fs.readFileSync("./template/index.html", "utf-8");
const products = JSON.parse(fs.readFileSync("./Data/products.json", "utf-8"));
let productListHtml = fs.readFileSync("./template/product-list.html", "utf-8");
let productDetailsHtml = fs.readFileSync("./template/product-details.html", "utf-8");



const server = http.createServer();
server.on("request",(req, res) => {
    let {query,pathname:path} = url.parse(req.url, true )

    // console.log(path);

  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    res.writeHead(200, {
      "Contant-Type": "text/html",
      "my-header": "hello world",
    });
    res.end(html.replace("{{%CONTENT%}}", "You are in home page"));
  } else if (path.toLocaleLowerCase() === "/about") {
    res.writeHead(200, {
      "Contant-Type": "text/html",
      "my-header": "hello world",
    });
    res.end(html.replace("{{%CONTENT%}}", "You are in about page"));
  } else if (path.toLocaleLowerCase() === "/contact") {
    res.writeHead(200, {
      "Contant-Type": "text/html",
      "my-header": "hello world",
    });
    res.end(html.replace("{{%CONTENT%}}", "You are in contact page"));
  } else if (path.toLocaleLowerCase() === "/products") {
    if(!query.id){
        let productHtmlArray = products.map((prod) => replaceHtml(productListHtml, prod));

        let productResponseHtml = html.replace("{{%CONTENT%}}",productHtmlArray.join(""));
        
        res.writeHead(200, {
          "Contant-Type": "text/html",
        });
        res.end(productResponseHtml);
    } else{
        let prod = products[query.id]
        let productDetailsResponseHtml = replaceHtml(productDetailsHtml, prod);

        res.writeHead(200, {
          "Contant-Type": "text/html",
        });

        // console.log(productDetailsHtmlArray)
        res.end(html.replace("{{%CONTENT%}}", productDetailsResponseHtml));
    }
    

    
    // console.log(productResponseHtml)
    // console.log(productHtmlArray);
  } else{
    res.writeHead(404,
      {
        "Contant-Type": "text/html",
      });

    res.end(html.replace("{{%CONTENT%}}", "404 page not found"));
  }

  console.log("request reseved");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server is running on http://localhost:3000");
});


//! ******************************* √ Emitting & Handling Custom Events **************************************************************

// let myEmitter = new events.EventEmitter();

// myEmitter.emit("userCreated");

// myEmitter.on("userCreated", () => {
//     console.log("a new user is created")
// })




