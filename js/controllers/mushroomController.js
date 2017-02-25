"use strict";

app.controller("MushroomController", function($scope, GetShrooms){

	GetShrooms.getMushrooms()
    .then((mushroomObject)=> {
		    let mushroomBag = [];

		    for (var i in mushroomObject.data.mushrooms) {
		    	let newObject = {};
		    	newObject.name = Object.keys(mushroomObject.data.mushrooms[i]);
		    	newObject.description = mushroomObject.data.mushrooms[i][newObject.name].description;
		    	newObject.edible = mushroomObject.data.mushrooms[i][newObject.name].edible;
		    	mushroomBag.push(newObject);
		    }

		$scope.mushrooms = mushroomBag;
    });

});
