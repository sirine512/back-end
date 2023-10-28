const user = require ('../models/user')

exports.createUser = async (req, res) => {
try {
    console.log(req.body)
    const {  name,email , password,role } = req.body
//create new user
const newUser = new user({
   name: name,
    email : email ,
    password: password,
    role:role,
   
  });

  // Save the user to the database
  await newUser.save();
} catch (err) {
    console.log(err);
}
}
//create Users
exports.allUsers = async (res,req) => {
const users = [
  {name:"Ali",email:"ali@gmail.com" , password:"123",role:"Seller"},
  {name:"Sarra",email:"sarra@gmail.com" , password:"1234",role:"Buyer"},
  {name:"Aya",email:"aya@gmail.com" , password:"12345",role:"Buyer"},
  {name:"Salah",email:"salah@gmail.com" , password:"1231",role:"Buyer"},
  {name:"Ahmed",email:"ahmed@gmail.com" , password:"1232",role:"Buyer"}
];
try {
  
  var response = await user.create(users);
  console.log("Users created:", response);
  req.json(response);
} catch (error) {
  console.log(error);
}
}

