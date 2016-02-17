var ChibiProto = {
	extend: function (props) {
		var newproto = Object.create(this);
		for (var prop in props) {
			if(props.hasOwnProperty(prop)) {
				newproto[prop] = props[prop];
			}
		}
		return newproto;
	},
	create: function () {
		var instance = Object.create(this);
		instance.init.apply(instance, arguments);
		return instance;
	}
};
