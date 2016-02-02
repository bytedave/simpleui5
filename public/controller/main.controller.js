sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.ibm.de.bytedave.simpleui5.controller.main", {
		sayHello : function(oControlEvent){
			alert("Hello, Bluemix!");
		}
	});

});