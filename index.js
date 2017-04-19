// #4

// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/jsclasses', function(err, db) {
// 	if (err) {
// 		console.log('Error', err);
// 	} else {
//   console.log("Connected correctly to server");
//    db.close();
//  }
 
// });

// --------------------------------------------------------------------------
// #5

// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/jsclasses', function(err, db) {
// 	console.log("Connected correctly to server");
	
//   db.collection('students').find().toArray(function(err, docs) {
//   	if (err) {
//   		console.log('Error', err)
//   	} else {
//   		console.log(docs);
//   	}
//   	 db.close();
//  	});
//   });

// -----------------------------------------------------------------------------

// #6

// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/jsclasses', function(err, db) {
// 	console.log("Connected correctly to server");
	
// 	  db.collection('students').find().limit(5).toArray(function(err, docs) {
//   	if (err) {
//   		console.log('Error', err)
//   	} else {
//   		console.log(docs);
//   	}
//   	 db.close();
//  	});
//   });

// --------------------------------------------------------------------------------
// #7

// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/jsclasses', function(err, db) {
// 	console.log("Connected correctly to server");
	
// 	  db.collection('students').find().skip(5).limit(5).toArray(function(err, docs) {
//   	if (err) {
//   		console.log('Error', err)
//   	} else {
//   		console.log(docs);
//   	}
//   	 db.close();
//  	});
//   });

// ----------------------------------------------------------------------------------------

// #8

// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/jsclasses', function(err, db) {
// 	console.log("Connected correctly to server");
	
// 	  db.collection('students').find().sort({id: -1}).limit(20).toArray(function(err, docs) {
//   	if (err) {
//   		console.log('Error', err)
//   	} else {
//   		console.log(docs);
//   	}
//   	 db.close();
//  	});
//   });

// --------------------------------------------------------------------------------

// #9

// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/jsclasses', function(err, db) {
// 	console.log("Connected correctly to server");
	
// 	  db.collection('students').find().project({id: true, name: true, address: true}).toArray(function(err, docs) {
//   	if (err) {
//   		console.log('Error', err)
//   	} else {
//   		console.log(docs);
//   	}
//   	 db.close();
//  	});
//   });

// -----------------------------------------------------------------------------

// #10 didn't sort

// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/jsclasses', function(err, db) {
// 	console.log("Connected correctly to server");
// 	db.collection('students').find()
// 	.sort({ bonus: -1})
// 	.limit(15).toArray(function(err, docs){
// 		if (err) {
// 			console.log('Error', err);
// 		}
// 		else{
// 			console.log(docs);
// 			db.close();
// 		}
// 	});
// });
// -----------------------------------------------------------------------------------

// #11

// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/jsclasses', function(err, db) {
// 	console.log("Connected correctly to server");
// 	db.collection('students').insertOne({
// 		name: 'nazar', 
// 		lastname: 'karabinovych',
// 		age: 28,
// 		hobby: 'singing',
// 		git: 'narka9379992'
// 	}, function (err) {
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Success!");
//             db.close();
//         }
//     });
// });

// ----------------------------------------------------------------------

// #12

// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/jsclasses', function(err, db) {
// 	console.log("Connected correctly to server");
// 	db.collection('students').insertMany([{
// 		name: 'anna', 
// 		lastname: 'ponomarchuk',
// 		age: 22,
// 		hobby: 'traveling',
// 		git: 'ponama'},
// 	 	{name: 'ivan', 
// 		lastname: 'blakyta',
// 		age: 20,
// 		hobby: 'volleyball',
// 		git: 'IvkoSaw'}, 
// 		{name: 'uluke', 
// 		lastname: 'albybekov',
// 		age: 22,
// 		hobby: 'walking',
// 		git: 'Ebrusnev'}], function (err) {
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Success!");
//             db.close();
//         }
//     });
// });

// -----------------------------------------------------------------------

// #13


// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/jsclasses', function(err, db) {
// 	console.log("Connected correctly to server");
// 	db.collection('students').updateMany({sport:"Judo"}, {$set:{company:""} }
// 	, function (err) {
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Success!");
//             db.close();
//         }
//     });
// });

// ------------------------------------------------------------------------------


// #14

// var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/jsclasses', function(err, db) {
// 	console.log("Connected correctly to server");
// 	db.collection('students').deleteMany({eye:"Brown"}, function (err) {
//         if(err){
//             console.log(err);
//         }else{
//             console.log('Success');
//             db.close();
//         }
//     });
// });

// ----------------------------------Done--------------------------------------




		

