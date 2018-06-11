var mongoose= require("mongoose");
var Schema= mongoose.Schema;
var ArticleSchema= new Schema({
title:{
    type:string,
    require:true
},
link:{
    type:string,
    require:true
},
saved:{
    type:boolean,
    default:false
},
comment:{
    type:Schema.Types.ObjectId,
    ref:comment

}});
var Article = mongoose.model("Article", ArticleSchema);

//export model
module.exports = Article;







