
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
    const arrResult = [];
    for (const product of products){
        if (Object.keys(product).includes(prop)) {
            arrResult.push(product[prop]);
        }
        // for (const obj of Object.keys(product)) {
        //    if (obj === prop) {
        //        arrResult.push(product[obj]);
        //    }
        // }
    }
    return arrResult;
   
        // let arr = [];
        // for (const product of arr) {
        //   if (prop in product) {
        //     arr.push(product[prop]);
      
        //   }
         
        // }
        // return arr;
      
};

console.log(getAllPropValues(products, 'name')); 
console.log(getAllPropValues(products, 'quantity')); 
console.log(getAllPropValues(products, 'category')); 