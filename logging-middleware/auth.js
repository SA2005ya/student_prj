async function getToken() {

    const res = await fetch("http://20.244.56.144/evaluation-service/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: "your_email",
            name: "your_name",
            rollNo: "your_rollno",
            accessCode: "your_access_code",
            clientID: "your_client_id",
            clientSecret: "your_client_secret"
        })
    });

    const data = await res.json();
    return data.access_token;
}

module.exports = getToken;