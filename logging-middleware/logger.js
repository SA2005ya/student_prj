const getToken = require("./auth");

async function Log(stack, level, packageName, message){

    try{

        if(!stack || !level || !packageName || !message){
            console.log("missing log parameters");
            return;
        }

        const token = await getToken();

        const logData = {
            token,
            stack,
            level,
            package: packageName,
            message,
            time: new Date()
        };

        console.log(logData);
    }

    catch(err){
        console.error("logger error:", err.message);
    }
}

module.exports = Log;
// const axios = require("axios");
// const getToken = require("./auth");

// async function Log(stack, level, packageName, message){

//     try{

//         // get token first
//         const token = await getToken();

//         // send log
//         await axios.post(
//             "http://20.244.56.144/evaluation-service/logs",

//             {
//                 stack: stack,
//                 level: level,
//                 package: packageName,
//                 message: message
//             },

//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             }
//         );

//         console.log("Log sent");

//     }

//     catch(err){
//         console.log("Logger error:", err.message);
//     }
// }

// module.exports = Log;