"use strict";

app.factory('GetShrooms', function ($q, $http) {

	let getMushrooms = (function () {
		return $q (function(resolve, reject) {
			$http.get("../../mushrooms.json")
			.then(function (mushroomObject) {
				resolve (mushroomObject);
			});
		});
	});

	return {getMushrooms};
});
