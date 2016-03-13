var ChibiProto = {
	construct: function () {
		var instance = Object.create(this);
		instance.constructor.apply(instance, arguments);
		return instance;
	},
	extend: function (props) {
		var newproto = Object.create(this);
		for (var prop in props) {
			if(props.hasOwnProperty(prop)) {
				newproto[prop] = props[prop];
			}
		}
		return newproto;
	},
};
