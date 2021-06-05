import bcrypt from 'bcryptjs'
const users = [
    {name:"Mohammed Fayad",
     email:"mfayad@aitg.com",
     password : bcrypt.hashSync('1234321',10),
     isAdmin:true
    },
    {name:"Sai Srinivas Lakkakula",
     email:"saislakk@aitg.com",
     password : bcrypt.hashSync('1234321',10),
     isAdmin:true
     
    },
    {name:"Jane",
     email:"jane@example.com",
     password : bcrypt.hashSync('1234321',10),
     
    }
]
export default users