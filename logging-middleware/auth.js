// auth.js
function getToken(){
    console.log("hi");
    return "dummy_token_123";
}

module.exports = getToken;

// const axios = require("axios");

// async function getToken(){

//     try{

//         const response = await axios.post(
//             "http://20.244.56.144/evaluation-service/auth",//Given api
//             {
//                 email: "your_email",
//                 name: "your_name",
//                 rollNo: "your_rollno",
//                 accessCode: "your_access_code",
//                 clientID: "your_client_id",
//                 clientSecret: "your_client_secret"
//             }
//         );

//         return response.data.access_token;
//     }

//     catch(err){
//         console.log(err.message);
//     }
// }

// module.exports = getToken;