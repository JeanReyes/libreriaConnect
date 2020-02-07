// import axios from 'axios';
// const axios = require('axios');
// const fetch = require('fetch').fetchUrl;
//  import axios from 'axios';
// var Buffer = require('buffer/').Buffer

const baseURL = "https://apidev.beaware360.com/ba360/apir/v10";
const company = "devportal";
const company2 = "servicedesk";

const input = {
    user: "gmedina",
    pass: "gmedina2"
}

const input2 = {
    user: "orojas@mpgroup.cl",
    pass: "P24UHA8W"
}

const miNombre = (name)=>{
    return `Hola, ${name}`;
}

const Login = (input)=>{   
    const data = {
        "company": company,
        "user": input.user,
        "pass": input.pass
    }
    // return await axios.post(`${baseURL}/login/auth/login`, {
    //     data
    // })
    const headers = {
        "Content-Type": "application/json"
    }
    fetch(`${baseURL}/login/auth`,{
        method: 'POST', 
        headers:headers, 
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
  
    .catch((err)=>{
        err
    })   
}

const LoginCp = (input2)=>{  
    const data = {
        "company": company,
        "email": input2.user,
        "pass": input2.pass
    }
    // return await axios.post(`${baseURL}/login/auth/login`, {
    //     data
    // })
    const headers = {
        "Content-Type": "application/json"
    }
    fetch(`${baseURL}/cp/auth/login`,{
        method: 'POST', 
        headers:headers, 
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
  
    .catch((err)=>{
        err
    })   
}


// console.log(Login(input));
console.log(LoginCp(input2));

// Login(input);

// module.exports = {
//     miNombre
// };