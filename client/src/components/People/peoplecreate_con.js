
const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://saritadpandey2016:sarita123@cluster0.lbybxew.mongodb.net/test",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`connection sucessful`);
}).catch((e)=>{
    console.log(`no connection`);
})