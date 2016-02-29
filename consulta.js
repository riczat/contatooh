var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

// ObjectID de algum contato existente
var _idProcurado = new ObjectID('56d3df0072516e7703cc8e1b');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh', 
	function(erro, db) {
		if(erro) throw err;		
		db.collection('contatos').findOne({_id : _idProcurado}, 
			function(erro, contato) {
				if(erro) throw err;
				console.log(contato);
			}
		);
	}
);