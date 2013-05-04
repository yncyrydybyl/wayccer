//NetmeraClient.init("WVhCd1ZYSnNQV2gwZEhBbE0wRWxNa1lsTWtaM1lYbGpZMlZ5TG01bGRHMWxjbUV1WTI5dEptNXRVMmwwWlZWeWJEMTNZWGxqWTJWeUxtNWxkRzFsY21FdVkyOXRKbTF2WkhWc1pVbGtQVEFtWVhCd1NXUTlkMkY1WTJObGNpWnViVlJsYlhCc1lYUmxQVzF2WW1sMFpXMXdiR0YwWlNadmQyNWxja2xrUFdGalkyOTFiblJsY2laa2IyMWhhVzQ5Ylc5aWFXMWxjbUVtYm0xVGFYUmxQWGRoZVdOalpYSW1iM2R1WlhKU2IyeGxWSGx3WlQweUpuWnBaWGRsY2xKdmJHVlVlWEJsUFRJbWRtbGxkMlZ5U1dROVlXTmpiM1Z1ZEdWeUpn");
NetmeraClient.init("WVhCd1ZYSnNQV2gwZEhBbE0wRWxNa1lsTWtZMk1UUTFOamMyTkM1dVpYUnRaWEpoTG1OdmJTWnViVk5wZEdWVmNtdzlOakUwTlRZM05qUXVibVYwYldWeVlTNWpiMjBtYlc5a2RXeGxTV1E5TUNaaGNIQkpaRDAyTVRRMU5qYzJOQ1p1YlZSbGJYQnNZWFJsUFcxdlltbDBaVzF3YkdGMFpTWnZkMjVsY2tsa1BXVnRjbUZvZVhWalpTWmtiMjFoYVc0OWJXOWlhVzFsY21FbWJtMVRhWFJsUFRZeE5EVTJOelkwSm05M2JtVnlVbTlzWlZSNWNHVTlNaVoyYVdWM1pYSlNiMnhsVkhsd1pUMHlKblpwWlhkbGNrbGtQV1Z0Y21Gb2VYVmpaU1k=");
var twitter_key = "agAQsuo4LYCyfJZ9iqbg";
var twitter_secret = "Opa0TbCucuikWBS7ZfqhEZUUXJa7r9eUGkQaheeE";
function contentCreateTest() {
	var content = new NetmeraContent("Blog");
	content.add("title", "My First Blog");
	content.add("description", "This is my first blog content.");
	content.create(function () {
	    console.log("Path = " + content.getPath());
	    console.log("Title = " + content.get("title"));
	    console.log("Description = " + content.get("description"));
	}, function (error) {
	    // error is an instance of NetmeraException
	    console.log(error.getMessage());
	});
};

function search() {
	var service = new NetmeraService("Notes");
	var center = new NetmeraGeoLocation(52.5125137, 13.4315345);
	var distance = 4; // 4 kilometers
	service.circleSearch(center, distance, "noteLocation", function(entries) { 
		console.log(entries);    		
	}, function(error) {
		console.log(error.getMessage());
		console.log(error.getErrorCode());
	});

}
function get() {
	var service = new NetmeraService("notes");
	service.setPath("/mobimeracontents/_59");
	service.get(function(content) {
	    // var path = content.getPath();
		console.log(content.get("description"));
	}, function(error) {
		console.log(error.getMessage());
		console.log(error.getErrorCode());
	});
}

function storeGeo() {
	var content = new NetmeraContent("alarms");
	var location = new NetmeraGeoLocation(52.5, 13.4);
	content.add("msg", "omg");
	content.add("location", location);
	content.create(function() {
     		// content.getPath();
	}, function(error) {
     		//error.getMessage();
	});
}
function getGeo() {
	var service = new NetmeraService("alarms");
	var corner1 = new NetmeraGeoLocation(52, 13);
	var corner2 = new NetmeraGeoLocation(53, 14);
	service.boxSearch(corner1, corner2, "location", function(entries) { 
	console.log(entries.length);
}, function(error) {
    // Identify 'error' with error.getCode()
});

}
function createUser() {
	var user = new NetmeraUser();
	user.setEmail("test@test.com");
	user.setPassword("123456");
	user.setNickname("test");
	user.setName("testName"); // optional
	user.setSurname("testSurname"); // optional
	user.register(function () {
	    // Registering the new user is successful
	}, function (error) {
	    console.log(error.getMessage());
	});
}
function doAsUser(){
	NetmeraUser.login("test@test.com", "123456", function() {
    		var currentUser = NetmeraUser.getCurrentUser();
    		if (currentUser != null) {
        		var content = new NetmeraContent("testContent");
			content.add("title", "content with user");
			content.setOwner();
			content.create(function () {
			    console.log("Creating content is successful. Path: " + content.getPath());
			}, function (error) {
			    console.log(error.getMessage());
			});
		    }
	}, function(error) {
    		console.log(error.getMessage());
	});
}
function deleteOwnContent() {
	NetmeraUser.login("test@test.com", "123456", function() {
    		var currentUser = NetmeraUser.getCurrentUser();
    		if (currentUser != null) {
        		var content = new NetmeraContent("testContent");
			content.setPath("/mobimeracontents/_62820");
			content.remove(function () {
    				// Content is deleted
			}, function (error) {
    				// error is an instance of NetmeraException
    				console.log(error.getMessage());
			});
		}
	});
}
function deleteFremdContent() {
        		var content = new NetmeraContent("testContent");
			content.setPath("/mobimeracontents/__2338");
			content.remove(function () {
    				// Content is deleted
			}, function (error) {
    				// error is an instance of NetmeraException
    				console.log(error.getMessage());
			});
}
function logintwitter() {
	NetmeraTwitterUtils.initialize('agAQsuo4LYCyfJZ9iqbg', 'Opa0TbCucuikWBS7ZfqhEZUUXJa7r9eUGkQaheeE');
	NetmeraTwitterUtils.login(
		function(user){
			console.log(user);
		}, 
		function(e){
			
			console.log(e);
			console.log(e.getMessage());
			console.log(e.getErrorCode());
		});

}
logintwitter();
//deleteFremdContent();
//deleteOwnContent();
//doAsUser();
//createUser();
//contentCreateTest();
//storeGeo();
//getGeo();
//get();
