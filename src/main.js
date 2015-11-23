function HCase() {
	this.cases = {}; // Map Object
}

HCase.prototype.case = function(name) {
	var options = this.cases[name];
	
};

HCase.prototype.all = function() {
	
};

HCase.prototype.list = function() {
	
};

HCase.prototype.showInBorwser = function() {
	
};

HCase.prototype.add = function(name, func) {
	var options = func();
	this.cases[name] = options;
};

HCase.prototype.start = function(name) {

};

module.exports.HCase = new HCase();