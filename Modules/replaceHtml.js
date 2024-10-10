module.exports = function (template, product) {
  let output = template
    .replace("{{%IMAGE%}}", product.productImage)
    .replace("{{%NAME%}}", product.name)
    .replace("{{%MODELNAME%}}", product.modeName)
    .replace("{{%MODEL_NO%}}", product.modelNumber)
    .replace("{{%SIZE%}}", product.size)
    .replace("{{%CAMERA%}}", product.camera)
    .replace("{{%PRICE%}}", product.price)
    .replace("{{%COLOR%}}", product.color)
    .replace("{{%ID%}}", product.id);
  output = output.replace("{{%ROM%}}", product.ROM);
  output = output.replace("{{%DESC%}}", product.Description);

  return output;
}


// function replaceHtml (template, product){

//     let output = template
//       .replace("{{%IMAGE%}}", product.productImage)
//       .replace("{{%NAME%}}", product.name)
//       .replace("{{%MODELNAME%}}", product.modeName)
//       .replace("{{%MODEL_NO%}}", product.modelNumber)
//       .replace("{{%SIZE%}}", product.size)
//       .replace("{{%CAMERA%}}", product.camera)
//       .replace("{{%PRICE%}}", product.price)
//       .replace("{{%COLOR%}}", product.color)
//       .replace("{{%ID%}}", product.id);
//       output = output.replace("{{%ROM%}}", product.ROM);
//       output = output.replace("{{%DESC%}}", product.Description);

//     return output;
// }



// let productHtmlArray = products.map((prod) => {
//   let output = productListHtml.replace("{{%IMAGE%}}", prod.productImage)
//     .replace("{{%NAME%}}", prod.name)
//     .replace("{{%MODELNAME%}}", prod.modeName)
//     .replace("{{%MODEL_NO%}}", prod.modelNumber)
//     .replace("{{%SIZE%}}", prod.size)
//     .replace("{{%CAMERA%}}", prod.camera)
//     .replace("{{%PRICE%}}", prod.price)
//     .replace("{{%COLOR%}}", prod.color)
//     .replace("{{%ID%}}", prod.id);

//   return output;
// });
