var SessionDef = Custom_Object.extend({
	TABLE_NAME: "x_776055_workout_session_definition",

	validateDefinition: function() {},
	isSetBased: function() {},
	isCategoryBased: function() {},
	getSetLinks: function() {},
	getCategoryLinks: function() {},
	attachSet: function(setSysId, repetition, order) {},
	detachSet: function(setSysId) {},
	attachCategory: function(categorySysId, weight) {},
	detachCategory: function(categorySysId) {},
	createSession: function(options) {},
	generateOrderedExercices: function() {},

    type: 'SessionDef'
});