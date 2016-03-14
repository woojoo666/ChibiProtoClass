function ChibiClass (proto) {
	function chibi () {
		return chibi.construct.apply(chibi, arguments);
	}
	chibi.prototype = proto;
	chibi.construct = function () {
		var instance = Object.create(this.prototype);
		instance.constructor.apply(instance, arguments);
		return instance;
	};
	chibi.extend = function (props) {
		var newproto = Object.create(this.prototype);
		for (var prop in props) {
			if(props.hasOwnProperty(prop)) {
				newproto[prop] = props[prop];
			}
		}
		return ChibiClass(newproto);
	};
	return chibi;
}
