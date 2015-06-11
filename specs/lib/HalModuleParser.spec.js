/**
 * Created by middleca on 6/11/15.
 */

var path = require("path");
var should = require("should");
var HalModuleParser = require('../../lib/HalModuleParser.js');

var settings = {
	binaries: path.resolve(path.join(__dirname, "../binaries"))
};

console.log("binaries dir is " + settings.binaries);


describe("HalModuleParser", function() {
	it("should fail gracefully when the file doesn't exist or is empty", function(done) {
		var filename = path.join(settings.binaries, "emptybin.bin");
		var parser = new HalModuleParser();
		parser._loadFile(filename)
			.then(
				done.bind(null, "should have failed"),
				done.bind(null, null)
			);
	});

	it("should succeed when the file exists", function(done) {
		var filename = path.join(settings.binaries, "../binaries/040_system-part1.bin");
		var parser = new HalModuleParser();
		parser._loadFile(filename)
			.then(
				done.bind(null, null),
				done.bind(null, "should have passed")
			);
	});





	it("should validate the CRC in the binary");

	it("should read info from a system module part 1");
	it("should read info from a system module part 2");
	it("should read info from a user module");
	it("should read info from a bootloader module");
	it("should know what kind of module it's looking at");
});