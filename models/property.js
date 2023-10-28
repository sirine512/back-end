const mongoose= require ('mongoose')

const propertySchema = new mongoose.Schema({
    type:{type:String},
    functionality:{type:String},
    location : {type: String},
    price: { type: Number},
    roomNumber : { type: Number},
    description:  { type: String},
    imgUrl:{type:String },
})


const property = mongoose.model('property', propertySchema);
module.exports = property;