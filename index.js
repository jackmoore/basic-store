var assign = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];
		for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}
	return target;
};

function store(state) {
	var listeners = [];

	state = state || {};

	return {
		subscribe: function(listener) {
			listeners.push(listener);
		},
		unsubscribe: function(listener) {
			var index = listeners.indexOf(listener);

			if (index !== -1) {
				listeners.splice(index, 1);
			}
		},
		setState: function(newState) {
			var prevState = state;

			state = assign({}, state, newState);

			for (var i = 0; i < listeners.length; i++) {
				listeners[i](state, prevState);
			}
		},
		getState: function() {
			return state;
		}
	};
};

module.exports = store;