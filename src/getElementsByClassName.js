// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var docBod = document.body;
	//console.log(docBod.childNodes);

	var foundElements = [];

	var findingChildren = function(currentElement){
		var element = currentElement;
	
		var elementsChildren = currentElement.childNodes;
		
		//If current element has the class name that matches then push to the found elements array.

		//console.log(listOfClasses);
		if(element.className === className || element.classList.contains(className)){
			foundElements.push(element);
			//console.log(foundElements);
		}
		
		if(elementsChildren){
		//If that element has children, it searches through each child and pushes that child into the function.
			for (var i = 0; i < elementsChildren.length; i++){
				//console.log(elementsChildren[i]);
				findingChildren(elementsChildren[i]);
				}
		};


	};

	findingChildren(docBod);		
	console.log(foundElements);
	return foundElements;
  // your code here
};

