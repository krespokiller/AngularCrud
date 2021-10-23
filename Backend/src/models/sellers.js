const {Schema,model} = require('mongoose')
const schema = new Schema({
    role: String,
    language: [String],
    email: String,
    name: String,
    lastname: String,
    currency: {
        type: Map,
        of: String
    },
    country: String,
    countryCode: String,
    countryCodeName: String,
    phone:String
   },{
       versionKey:false
   })
   module.exports=model('seller', schema)