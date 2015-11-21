// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
   var arrayKeyVals = [];
  var arrVals = [];
  var objKeys = [];

  if(typeof obj === 'number' || typeof obj === 'boolean' || obj === null){
  	return ''+ obj;
  }else if (typeof obj === 'string'){
  	return '"'+obj+'"';
  
  }else if(Array.isArray(obj)){
  	if(obj[0] === undefined){
  		return '[]';
  	}else{
  		obj.forEach(function (value) {
  			arrVals.push(stringifyJSON(value));
  		});
  		return '['+arrVals+']';
  	}
  
  }else if(obj instanceof Object){
  	objKeys = Object.keys(obj);
  	objKeys.forEach(function (key) {
  		var keyInObj = '"'+key+'":';
  		var keyValsInObj = obj[key];

  		if(keyValsInObj instanceof Function || typeof keyValsInObj === undefined){
  			arrayKeyVals.push('');
  		}else if(typeof keyValsInObj === 'string'){
  			arrayKeyVals.push(keyInObj + '"'+ keyValsInObj+'"');
  		}else if(typeof keyValsInObj === 'boolean' || typeof keyValsInObj === 'number' || typeof keyValsInObj === 'object'){
  			arrayKeyVals.push(keyInObj+stringifyJSON(keyValsInObj));
  		}
  	});
  	return '{'+arrayKeyVals+'}';
  }



};
