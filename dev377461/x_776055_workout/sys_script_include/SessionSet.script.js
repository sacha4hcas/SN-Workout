var SessionSet = Custom_Object.extend({
	TABLE_NAME: "x_776055_workout_session_sets",

	validateLink: function() {},
	isLinked: function() {},
	link: function(sessionDefSysId, setSysId, repetition, order) {},
	unlink: function(sessionDefSysId, setSysId) {},
	setRepetition: function(repetition) {},
	reorderInDefinition: function(sessionDefSysId, orderedSetSysIds) {},
	getSessionDefinition: function() {},
	getSet: function() {},

    type: 'SessionSet'
});