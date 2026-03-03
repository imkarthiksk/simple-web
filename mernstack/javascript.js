// // var a=23;
// // var b='23';
// // console.log(a==b)
  
// // var c='21';
// // var d=20;
// // console.log(c===d)
 
// // // var e=20;
// // // var f=20;
// // // console.log(e===f)

// // // var g=20;
// // // var h='21';
// // // console.log(g!==h);

// // // //logical operators
// // // var price=21;
// // // var product=20;
// // // console.log(price>product && product>price);

// // // var Tax=21;
// // // var Gst=20;
// // // console.log(Tax>=Gst || Tax<=Gst);
 

// // // var laptop=5;
// // // var iphone=5;
// // // console.log(laptop!== iphone)

// // function add(a,b){
// //     return(a+b)
// // }

// //  console.log(add(10,20));


// // function ka(t,e){
// //     return(t-e)
    
// // }
// // console.log(ka(5,2));

// // function mu(a,b){
// //     return(a*b)
// // }
// // console.log(mu(5,2))



// // function hello(string){
// //     console.log("hello")
// // }
// // hello()
// // // arrow function
// // var store =(a,b)=>{
// //     (a+b);
// // }
// // console.log(store(30,30));


// // let name="karthi"
// // let name1="ajay"

// //   function stri(f1,f2){
// //     console.log("hello world "+f1," "+f2)
// // }
// // stri(name,name1)
// // function division(){
// //     console.log("result:",8/4)
// // }
// // division()


// // var store=()=>{
// //     console.log("hello")
// // }
// // store()

// // let k=function(a,b){
// //     return(a*b)
    
// // }
// // console.log(k(23,33))

// // var a=20;
// // var b=21;
// // if(a>b){
// //     console.log("a is less than b");
    
// // }
// // else if(b<=a){
// //     console.log(" b is greater than a")
    
// // }
// // else if(b>=a){
// //     console.log("b greater than equal to a");
    
// // }
// // else{
// //     console.log("nothing");
    
// // }


// // var ra=true;
// // if(ra){
// //     console.log("take a umberla ")
// // }
// // else{
// //     console.log("dont take a umberla");
    
// // }

// // //switch is use to multiple case
// // var num=29;
// // var nu=29;
// // switch(num){ // it give one varaible
// //     case 29:
// //         console.log("29")
// //     case 22:
// //         console.log("22")
// //     case 33:
// //         console.log("33")
        
// // }

// // let sum=function(a){
// //     console.log("ka")
// // }

// // let saum=function karthik(){
// //     console.log("karthik")
// // }
// // console.log(saum|| true)

// let karthik=function(){
//     console.log(karthik)
// }
// karthik()
// let oo=()=>{

// }


// bus_stops=["ambattur ot","srm","canara bank","ti miller","dunlop"]
// destination=["ti miller"]
// st=["ambattur ot"]
// journey=[]
// for(value of bus_stops){
//     if (value==destination) {
//         journey.push(value)
//         console.log(journey);
//     break;
//     }
// else if(st==value){
//     console.log("your journey started")
// }
//     else{
//         console.log(value)
//     }
// }

// let fruits = ["Apple", "Mango"];
// let myFruits = fruits;

// myFruits.push("Banana");
// fruits = ["Grape"];

// console.log(myFruits.length);
// console.log(fruits.length+"fruit");

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// const c = a;

// console.log(a === b);
// console.log(a === c);


// // 1. Creating the first object
// let user1 = { 
//     name: "Suriya", 
//     level: 10 
// };

// // 2. Assigning by reference
// let user2 = user1;

// // 3. Creating a brand new object with same data
// let user3 = { 
//     name: "Suriya", 
//     level: 10 
// };

// // 4. Changing a value
// user2.level = 20;
// console.log("Result 1:", user2.level); 

// console.log("Result 2:", user1 === user3);


// let list1 = [1, 2];
// let list2 = list1.concat([3]);
// list1.push(4);
// console.log(list2);
// console.log(list);



// // let items = [10, 20];
// // let updated = items.map(x => x * 2);
// // items.push(30);
// // console.log(updated);


// // let array=[23,3,3,3]
// // a=[...array]
// // console.log(a)



// //     let decision = new Promise((resolve, reject) => {
// //     if(true)
// //         resolve("approved")
// //     else{
// //         reject("not approved")
// //     }
// // })

// // decision
// // .then((resolve)=>{console.log(resolve)})
// // .catch((reject)=>{console.log(reject)})
// // .finally(()=>{console.log("finally")})


// // let order = new Promise((resolve, reject) =>{
// //     let payment=paymentfunction();
// //     if (payment) {
// //         locationfunction(location)}
// //     else{
// //         console.log("payment has been canceled")
// //     }
// //     function locationfunction() {
// //         if (location=="chennai") {
// //             console.log("order")
// //         }
// //         else{
// //             console.log("this product is not available for your location")
// //         }
        
// //     }
// //     }
// // )

// // order
// // .then((resolve)=>{console.log(resolve)})
// // .catch((reject)=>{console.log(reject)})
// // .finally(()=>{console.log("finally")})


// // let dlocation = "chennai"; // Variable define panniyachu

// // let order = new Promise((resolve, reject) => {
// //     let payment = true; // Inga payment check nadakkuthu (Just example-ku true)

// //     if (payment) {
// //         // Payment success aana adutha logic-ku porom
// //         if (dlocation === "chennai") {
// //             resolve("✅ Order Confirmed in Chennai!"); // SUCCESS
// //         } else {
// //             reject("❌ This product is not available for your location."); // FAILURE (Location)
// //         }
// //     } else {
// //         reject("❌ Payment has been canceled."); // FAILURE (Payment)
// //     }
// // });

// // // Implementation
// // order
// //     .then((successMsg) => { 
// //         console.log(successMsg); // Resolve call aana ithu run aagum
// //     })
// //     .catch((errorMsg) => { 
// //         console.log(errorMsg); // Reject call aana ithu run aagum
// //     })
// //     .finally(() => { 
// //         console.log("Process finished."); 
// //     });















// let arr=[12,34,55,89]

// let arr4=arr
// arr.push(90,98)
// console.log(arr4)
// // why we used spread....
// // spread operators used to copy the data array and object 
// // see the example i copy arr data to arr4 so i usually created the assign the varaible
// // but if used this way affect the arr and but you think this not affect arr you used spread operator



// let arr2=[12,34,55,89]

// let arr5=[...arr2]
// arr.push(90,98)
// console.log(arr5)
// let a;
// function fun() {
//     a=23;
   
// }
// fun()
// console.log(a)
// function kart() {
//     let c=34
//     console.log(c)
    
// }
// kart()


// let count = 10;
// while (count < 15) {
//   console.log("Hello");
//   count++;
// }
// let energy = 20;

// while (energy > 15) {
//   console.log("Keep running!");
//   energy--;
// }
// /// rest operator
// let fu=((itemv,...items)=>{
//   console.log(items)
//   console.log(`main item ${itemv}`)
// })
// fu("briyani","egg","rice")

// // 1. Function with a callback argument
// function processOrder(orderId, callback) {
//     console.log("Order " + orderId + " process aagitu iruku...");

//     // Oru 2 seconds delay create panrom (Simulation of a task)
//     setTimeout(() => {
//         console.log("Order " + orderId + " ready!");
        
//         // Task mudinjadhum, namma anupuna callback-ah inga call panrom
//         callback(); 
//     }, 4000);
// }

// // 2. Intha function thaan callback-ah poga pogudhu
// function notifyUser() {
//     console.log("SMS sent: Unga order ready aayiduchu. Vandhu vaangikkonga!");
// }

// // 3. Main Execution
// // 'notifyUser' function-ai 'processOrder'-ku argument-ah anuprom
// processOrder(101, notifyUser);

// console.log("Intha message munnadiye print aagidum!");

















// const friendPromise = new Promise((resolve, reject) => {
//     let penIrukku = true; // Intha condition-ah vechu thaan result maarum

//     console.log("Friend: Machan, naan pen tharaen-nu Promise panraen!");

//     setTimeout(() => {
//         if (penIrukku) {
//             resolve("Indha machan Pen!"); // Success case
//         } else {
//             reject("Sorry da, pen tholanjiduchu."); // Failure case
//         }
//     }, 3000); // 3 seconds wait panna solrom
// });
// friendPromise
//     .then((message) => {
//         // Resolve aana intha block run aagum
//         console.log("Enoda Reaction: " + message + " Thanks da!");
//     })
//     .catch((error) => {
//         // Reject aana intha block run aagum
//         console.log("Enoda Reaction: " + error + " Paravaala vidu.");
//     });


    let randomNum =Math.floor(Math.random()*10000);
console.log(randomNum);