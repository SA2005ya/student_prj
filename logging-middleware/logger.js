const getToken = require("./auth");

async function Log(stack, level, packageName, message) {

    try {
        const token = await getToken();

        const res = await fetch("http://20.244.56.144/evaluation-service/logs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                stack,
                level,
                package: packageName,
                message
            })
        });

        if (res.ok) {
            console.log("Log sent");
        } else {
            console.log("Failed to send log");
        }

    } catch (err) {
        console.log("Logger error:", err.message);
    }
}

module.exports = Log;