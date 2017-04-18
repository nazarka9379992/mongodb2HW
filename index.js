// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/myproject', function(err, db) {
// 	if (err) {
// 		console.log('Error', err);
// 	} else {
//   console.log("Connected correctly to server");
//    db.close();
//  }
 
// });
// --------------------------------------------------------------------

// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/mydb', function(err, db) {
// 	console.log("Connected correctly to server");

//   db.collection('mycollection').insertMany([{name: 'nazar', age: 28},
//    {name: 'luke', age: 22},
//    {name: 'anna', age: 22} ], function(err) {
//   	if (err) {
//   		console.log('Error', err)
//   	} else {
//   		console.log('Success!');
//   	}
//   	 db.close();
 
//   });
// });
// -------------------------------------------------------------

// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/mydb', function(err, db) {
// 	console.log("Connected correctly to server");
	
//   db.collection('mycollection').find().toArray(function(err, docs) {
//   	if (err) {
//   		console.log('Error', err)
//   	} else {
//   		console.log(docs);
//   	}
//   	 db.close();
//  	});
//   });
// ---------------------------------------------------------------------

// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/mydb', function(err, db) {
// 	console.log("Connected correctly to server");
	
//   db.collection('mycollection').updateOne({name: 'nazar'}, { $set: {age:23} }, { $set: {lastname: 'karabinovych'} }, function(err) {
//   	if (err) {
//   		console.log('Error', err)
//   	} else {
//   		console.log('Success!');
//   	}
//   	 db.close();
//  	});
//   });
// ----------------------------------------------------------------------

// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/mydb', function(err, db) {
// 	console.log("Connected correctly to server");
	
//   db.collection('mycollection').deleteOne({name: 'nazar'}, function(err) {
//   	if (err) {
//   		console.log('Error', err)
//   	} else {
//   		console.log('Success!');
//   	}
//   	 db.close();
//  	});
//   });

// ----------------------------------------------------------------------------

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/mydb', function(err, db) {
	console.log("Connected correctly to server");
	
	// db.collection('mycollection').insertMany([{name: 'anna', age: 21},
	//  {name: 'anna', age: 22}, 
	// 	{name: 'anna', age: 23}], function(err) {
	// 		if (err) {
	// 			return console.log('Error!')
	// 		}
	// 		console.log('Success!')
	// 		db.close()
	// 	});
  db.collection('mycollection').find({name: 'anna'})
  .sort({age: 1})
  .limit(2)
  .skip(1)
  .project({age: true, name: true})
  .toArray(function(err, docs) {
  	if (err) {
  		console.log('Error', err)
  	} else {
  		console.log(docs);
  	}
  	 db.close();
 	});
  });

toArray змінити на count - кількісь файлів