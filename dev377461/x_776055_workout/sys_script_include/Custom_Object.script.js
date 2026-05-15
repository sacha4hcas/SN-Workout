var Custom_Object = Class.create();

/**
 * Used to initialize a record-backed script object.
 * Works for Custom_Object and any subclass that inherits these statics.
 * @param {Object} fieldMap : Javascript object of key value pairs of every field to initialize
 *  Values can be function to evaluate
 */
Custom_Object.initialize = function(fieldMap){
	var ScriptClass = this;
	var script = new ScriptClass();
	var record = new GlideRecord(script.TABLE_NAME);
	record.initialize();
	fieldMap = fieldMap || {};
	for (var field in fieldMap){
		let value = fieldMap[field];
		if (typeof(value) == "function")
			record.setValue(field, value());
		else record.setValue(field, value);
	}
	script.r = record;
	return script;
};
Custom_Object.new = function(fieldMap){
	var script = this.initialize(fieldMap);
	script.r.insert();
	return script;
};
Custom_Object.get = function(record){
	var scriptClass = this;
	return new scriptClass(record);
}

/**
 * Copies static factory methods from Custom_Object to a subclass constructor.
 * @param {Function} childClass
 */
Custom_Object.inheritStatics = function(childClass){
	for (var prop in Custom_Object) {
		if (Custom_Object.hasOwnProperty(prop) && prop != "prototype")
			childClass[prop] = Custom_Object[prop];
	}
	return childClass;
};

/**
 * Creates a subclass that automatically inherits static and prototype logic.
 * @param {Object} prototypeProps
 */
Custom_Object.extend = function(prototypeProps){
	if (!prototypeProps || !prototypeProps.TABLE_NAME)
		throw new Error("Custom_Object.extend requires TABLE_NAME in prototypeProps");

	var Child = Class.create();
	Custom_Object.inheritStatics(Child);
	Child.prototype = Object.extendsObject(Custom_Object, prototypeProps);
	return Child;
};

Custom_Object.prototype = {
	/**
	 * @param {GlideRecord|GlideElement|String} record : Used to initialize current record (this.r).
	 * 	can be either a gliderecord, a glideElement or a sys_id
	 */
    initialize: function(record) {
		if (typeof(record) == "string" || record instanceof GlideElement)
            this.r = new global.GlideRecordUtil().getGR(this.TABLE_NAME, record);
        else if (record instanceof GlideRecord)
			this.r = record;
            
    },

    type: 'Custom_Object'
};