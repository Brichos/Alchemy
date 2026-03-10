const baseURL = "https://alchemy-kd0l.onrender.com";
const startURL = `${baseURL}/start`
const statusURL = `${baseURL}/status`;
const submitURL = `${baseURL}/submit`;
const clueURL = `${baseURL}/clue`

let token = null

//Start
const userConfig = {
    "email" : "nicholasak@uia.no",
    "nick" : "nicholasak", 
    "pin" : "1234"
};

//Starting -get Token
let response =  await(await fetch(startURL, { 
    body: JSON.stringify(userConfig),
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    }
})).json();

token = response.token;


//get status = what you're supposed to do
console.log(token);

response = await (await fetch(statusURL,{
    method: "GET",
    headers: {
        "Accept": "application/json",
        "Content-Type" : "application/json",
        "Authorization" : token,
    }
})).json();
console.log(response)

//Answer
response = await(await fetch(submitURL, {
    method: "POST",
    headers:{
        "Authorization": token,
        "Content-Type": "application/json"
    },
    body:JSON.stringify({answer:4})
})).json();

