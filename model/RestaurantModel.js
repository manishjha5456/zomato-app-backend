const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
        name:{type:String},
        city:{type:String},
        location_id:{type:Number},
        mealtype_id:{type:Number},
        city_id:{type:Number},
        locality:{type:String},
        thumb:{type:Array},
        aggregate_rating:{type:Number},
        rating_text:{type:String},
        min_price:{type:Number},
        contact_number:{type:String},
        cuisine_id:{type:Array},
        cuisine:{type:Array},
        image:{type:String},
        collection_id:{type:Number}
});

const RestaurantModel = mongoose.model('restaurant',RestaurantSchema,'restaurants');

module.exports = RestaurantModel;