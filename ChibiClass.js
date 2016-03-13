function ChibiClass (proto) {
	function chibi () {
		return chibi.construct.apply(chibi, arguments);
	}
	chibi.proto = proto;
	chibi.construct = function () {
		var instance = Object.create(this.proto);
		instance.constructor.apply(instance, arguments);
		return instance;
	};
	chibi.extend = function (props) {
		var newproto = Object.create(this.proto);
		for (var prop in props) {
			if(props.hasOwnProperty(prop)) {
				newproto[prop] = props[prop];
			}
		}
		return ChibiClass(newproto);
	};
	return chibi;
}
