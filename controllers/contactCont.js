const contact = require ('../models/contact')

exports.createcontact = async (req, res) => {
try {
    const {sender,email,message } = req.body
//create new contact
const newContact = new contact({
   sender:sender,
   email:email,
   message:message
  });

  // Save the contact to the database
  await newContact.save();
}
 catch (err) {
    console.log(err);
}
}