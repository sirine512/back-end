const mongoose= require ('mongoose')

const categorySchema = new mongoose.Schema({
    style:{type:String},
})
const category = mongoose.model('category', categorySchema);

module.exports = category;