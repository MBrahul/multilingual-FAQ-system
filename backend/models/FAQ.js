const mongoose = require('mongoose');

const faq = new mongoose.Schema({
    question:{
        type:String,
        require:true
    },
    answer:{
        type:String,
        require:true
    },
    question_translations:{
        type:Object,
        default:{}
    },
    answer_translations:{
        type:Object,
        default:{}
    }
},{timestamps:true});

module.exports = mongoose.model("FAQS",faq);