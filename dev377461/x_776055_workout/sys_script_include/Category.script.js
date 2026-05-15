var Category = Custom_Object.extend({
	TABLE_NAME: "x_776055_workout_category",

	validateParent: function() {
		if (!this.validateNoCycle())
			return false;

		return true;
	},
	validateNoCycle: function() {
		return _validateNoCycleRecursive([]);
	},
	_validateNoCycleRecursive: function(visited) {
		visited.push(this.r.getUniqueValue());

		if (this.r.parent == "")
			return true;

		if (visited.includes(this.r.parent.toString()))
			return false;

		return new Category(this.r.parent)._validateNoCycleRecursive(visited);
	},

    type: 'Category'
});