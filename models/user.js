const mongoose= require ('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email : {type: String},
    password: { type: String},
    role:  { type: String},
    
})
const user = mongoose.model('user', userSchema);

module.exports = user;