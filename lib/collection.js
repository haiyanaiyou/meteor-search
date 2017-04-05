Books=new Mongo.Collection('books');
if(Meteor.isServer){
	//创建索引
	Books._ensureIndex({
		title:1,
		author:1,
		year:1
	});

}