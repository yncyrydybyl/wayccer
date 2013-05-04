/**
 * Netmera Javascript SDK v1.4.0
 * 
 * Copyright 2012 Inomera Research
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author Serdar Kuzucu
 */

/**
 * @class NetmeraClient class contains the configuration methods.
 * @name NetmeraClient
 */
var NetmeraClient;

/**
 * @class The NetmeraContent object is used to run CRUD operations over the
 *        data. After creating object use add() method to fill data and call
 *        create() method to add data into cloud.
 * @name NetmeraContent
 * @description Constructor that takes content name as parameter. After creating
 *              object use add() method to fill data and call create() method to
 *              add data into cloud.
 * @param {String}
 *            objectName Name of the content
 */
var NetmeraContent;

/**
 * @class NetmeraService is used to get NetmeraContent object by its search()
 *        and get() methods. Many query options defined to help finding exact
 *        object.
 * @name NetmeraService
 * @description Default constructor for the NetmeraService that sets objectName
 *              and other default parameters. Default value for the max = 10 and
 *              page = 0. It returns 10 result in each page. It skips page * max
 *              in each iteration.
 * @param {String}
 *            objectName Name of the content
 */
var NetmeraService;

/**
 * @class NetmeraGeoLocation is used to create location with the given latitude and longitude values. 
 * It is used to set location into the content and then use it on the search queries.
 * @name NetmeraGeoLocation
 * @example
 * var location = new NetmeraGeoLocation(41, 29);
 * var content = new NetmeraContent("SampleContent");
 * content.add("location", location);
 * content.create(function() {
 *      // content.getPath();
 * }, function(error) {
 *      // error.getMessage();
 * });
 * @description Creates location with the given latitude and longitude.
 * @param {Number}
 *            latitude must be between the range of (-90,90)
 * @param {Number}
 *            longitude must be between the range of (-180,180)
 */
var NetmeraGeoLocation;

/**
 * @class NetmeraUser object is for managing users of the application. You can register, update, login users with this class.
 * @name NetmeraUser
 * @description Default constructor to create user object.
 */
var NetmeraUser;

/**
 * @class Exception handling mechanism for Netmera API. 
 * It throws an exception when there is a failure while creating, editing, deleting and searching data. 
 * Also it throws and exception when there is an network connection error.
 * @name NetmeraException
 * @description Creates an exception
 * @param {Integer} errorCode Code of this exception
 * @param {String} message message of this exception
 */
var NetmeraException;

/**
 * @class Its constructor is used to create different types of media content.
 * @name NetmeraMedia
 * @description Constructor that takes file as a parameter and creates
 *              NetmeraMedia object.
 * @param file
 *            file object
 * @example 
 * // &lt;input type="file" id="fileInput" /&gt; 
 * 
 * var file = document.getElementById("fileInput").files[0];
 * var media = new NetmeraMedia(file); 
 * var content = new NetmeraContent("Blog");
 * content.add("title", "My Blog Title");
 * content.add("image", media);
 * content.create();
 */
var NetmeraMedia;

/**
 * @class
 * @name BasePush
 */
var BasePush;

/**
 * @class NetmeraPush class is used to send push notifications into ANDROID, IOS, and Windows Phone devices from javascript code.
 * @augments BasePush
 * @name NetmeraPush
 * @description Constructor that creates a new push notification object to send push notifications to IOS, Android, or Windows Phone devices.
 * @example
 * var push = new NetmeraPush();
 * push.setSendToIos(true);
 * push.setSendToAndroid(true);
 * push.setSendToWindowsPhone(true);
 * push.setAppName("12345");
 * push.setMessage("This is the message that will be sended as a notification");
 * push.sendNotification(function(details) {
 *     // your push notification is sent.
 *     var androidDetail = details[PushChannel.android];
 *     var iosDetail = details[PushChannel.ios];
 *     var windowsPhoneDetail = details[PushChannel.windowsPhone];
 *     console.log(androidDetail.getStatus());
 *     console.log(iosDetail.getStatus());
 *     console.log(windowsPhoneDetail.getStatus());
 * }, function(error) {
 *     // There is an error. Check error.getMessage();
 * });
 */
var NetmeraPush;

/**
 * @class NetmeraIOSPush class is used to send push notifications into IOS devices
 * @augments BasePush
 * @name NetmeraIOSPush
 * @description Creates a new push notification object to send push notifications to IOS devices.
 * @example
 * var push = new NetmeraIOSPush();
 * // Set the message you want to send 
 * // to registered devices in your app.
 * push.setMessage("Hello, IOS Devices!");
 *
 * // Send the notification
 * push.sendNotification(function(details) {
 *     // your push notification is sent.
 *     var iosDetail = details[PushChannel.ios];
 *     console.log(iosDetail.getStatus()); 
 * }, function(error) {
 *     // There is an error. Check error.getMessage();
 * });
 */
var NetmeraIOSPush;

/**
 * @class NetmeraPushDetail class is used in the parameter map of callback function when a push notification is sent.
 * @name NetmeraPushDetail
 * @description Creates a new NetmeraPushDetail object which contains details about push notification sent.
 */
var NetmeraPushDetail;

/**
 * @class Enumeration type which includes privacy types for contents, such as public or private
 * @name NetmeraPrivacy
 * @description Enumeration type which includes privacy types
 */
var NetmeraPrivacy;

/**
 * @class Enumeration type which includes channels such as android and ios
 * @name PushChannel
 * @description Enumeration type which includes channels
 */
var PushChannel;

/**
 * @class NetmeraAndroidPush class is used to send push notifications into Android devices
 * @augments BasePush
 * @name NetmeraAndroidPush
 * @description Creates a new push notification object to send push notifications to Android devices.
 * @example
 * var push = new NetmeraAndroidPush();
 *
 * // Set the message you want to send 
 * // to registered devices in your app.
 * push.setMessage("Hello, Android Devices!");
 *
 * // Send the notification
 * push.sendNotification(function(details) {
 *     // your push notification is sent.
 *     var androidDetail = details[PushChannel.android];
 *     console.log(androidDetail.getStatus()); 
 * }, function(error) {
 *     // There is an error. Check error.getMessage();
 * });
 */
var NetmeraAndroidPush;

/**
 * @class NetmeraWindowsPhonePush class is used to send push notifications into Windows Phone devices
 * @augments BasePush
 * @name NetmeraWindowsPhonePush
 * @description Creates a new push notification object to send push notifications to Windows Phone devices.
 * @example
 * var push = new NetmeraWindowsPhonePush();
 *
 * // Set the message you want to send 
 * // to registered devices in your app.
 * push.setMessage("Hello, Windows Phone Devices!");
 *
 * // Send the notification
 * push.sendNotification(function(details) {
 *     // your push notification is sent.
 *     var wpDetail = details[PushChannel.windowsPhone];
 *     console.log(wpDetail.getStatus()); 
 * }, function(error) {
 *     // There is an error. Check error.getMessage();
 * });
 */
var NetmeraWindowsPhonePush;

/**
 * @class NetmeraFacebookUtils class is used to login into Netmera with Facebook
 * @name NetmeraFacebookUtils
 * @description Creates a new NetmeraFacebookUtils object which is useless because all methods in the class are static.
 */
var NetmeraFacebookUtils;

/**
 * @class NetmeraTwitterUtils class is used to login into Netmera with Twitter and also send HTTP requests to Twitter.
 * @name NetmeraTwitterUtils
 * @description Creates a new NetmeraTwitterUtils object which is useless because all methods in the class are static.
 */
var NetmeraTwitterUtils;

/**
 * @class NetmeraPushService is a service class which helps you to see registered push groups.
 * @name NetmeraPushService
 * @description constructor of NetmeraPushService. Don't construct because its instances are useless.
 */
var NetmeraPushService;

(function () {
    var _st = null;
    var _currentUser = null;
    var _currentUserSt = null;

    var _request = {};
    
    _request.domain = "netmera.com";
    _request.url = "http://" + _request.domain;
    _request.rpcUrl = "/social/rest";
    _request.rpcAlternateUrl = "/social/rpc?";
    _request.post = "POST";
    _request.get = "GET";
    _request.st = "st=";
    _request.cdnDomain = _request.url + "/cdn";
    _request.actionTokenMethod = "/content/createActionToken?";
    _request.createContentMethod = "/content/createContentWithoutActionToken?";
    _request.updateContentMethod = "/content/updateContentWithoutActionToken?";
    _request.removeContentMethod = "/content/deleteContent?";
    _request.searchContentMethod = "/content/search?";
    _request.getContentMethod = "/content/get?";
    _request.locationSearchContentMethod = "/content/locationSearch?";
    _request.registerUserMethod = "/site/register?";
    _request.loginUserMethod = "site.login";
    _request.loginGuestUserMethod = "site.guestLogin";
    _request.activateUserMethod = "site.activateUser";
    _request.deactivateUserMethod = "site.deactivateUser";
    _request.peopleSearchMethod = "/people/search?";
    _request.profileUpdateMethod = "people.profileUpdate";
    _request.accountUpdateMethod = "people.accountUpdate";
    _request.facebookLoginMethod = "site.facebookLogin";
    _request.twitterLoginMethod = "site.twitterLogin";
    
    _request.params = {};
    _request.params.contentActionToken = "contentActionToken";
    _request.params.path = "path";
    _request.params.contentType = "contentType";
    _request.params.contentName = "contentName";
    _request.params.content = "content";
    _request.params.max = "max";
    _request.params.page = "page";
    _request.params.customCondition = "customCondition";
    _request.params.searchText = "searchText";
    _request.params.sortBy = "sortBy";
    _request.params.sortOrder = "sortOrder";
    _request.params.contentPrivacy = "contentPrivacy";
    _request.params.moderationStatus = "moderationStatus";
    _request.params.searchType = "searchType";
    _request.params.fieldName = "fieldName";
    _request.params.latitude = "latitude";
    _request.params.longitude = "longitude";
    _request.params.distance = "distance";
    _request.params.locationSuffix = "_netmera_mobile_loc";
    _request.params.latitudeSuffix = "_netmera_mobile_latitude";
    _request.params.longitudeSuffix = "_netmera_mobile_longitude";
    _request.params.sdk = "sdk";
    _request.params.sdkVersion = "sdkVersion";
    _request.params.service = "service";
    _request.params.action = "action";
    _request.params.method = "method";
    _request.params.oauthHeaders = "oauthHeaders";
    
    _request.userParams = {};
    _request.userParams.user = "user";
    _request.userParams.email = "email";
    _request.userParams.emailValue = "value";
    _request.userParams.emails = "emails";
    _request.userParams.password = "password";
    _request.userParams.loginPassword = "pwd";
    _request.userParams.nickname = "nickname";
    _request.userParams.defaultNickname = "defaultNickname";
    _request.userParams.name = "name";
    _request.userParams.givenName = "givenName";
    _request.userParams.familyName = "familyName";
    _request.userParams.surname = "surname";
    _request.userParams.facebookId = "facebookId";
    _request.userParams.twitterId = "twitterId";
    _request.userParams.securityToken = "st";
    _request.userParams.profileAttributes = "profile";
    
    _request.media = {};
    _request.media.uploadUrl = "http://" + _request.domain + "/photo/app/upload/entry?";
    _request.media.swfUrl = "http://" + _request.domain + "/cdn/app/upload/swfUpl?";
    _request.media.savePhotoUrl = "http://" + _request.domain + "/photo/app/upload/save?";
    
    _request.mediaParams = {};
    _request.mediaParams.osViewerId = "opensocial_viewer_id";
    _request.mediaParams.contentPath = "contentPath";
    _request.mediaParams.osNetmeraDomain = "opensocial_netmera_domain";
    _request.mediaParams.osAppId = "opensocial_app_id";
    _request.mediaParams.album = "album";
    _request.mediaParams.uploadedPhotoHash = "uploadedPhotoHash";
    _request.mediaParams.cdnDomain = "cdnDomain";
    
    _request.push = {};
    _request.push.url = "/mobimera/app/push/";
    _request.push.send = "sendPush?";
    _request.push.deviceGroups = "getDeviceGroups?";
    
    _request.pushParams = {};
    _request.pushParams.apiKey = "apiKey=";
    _request.pushParams.channels = "channels";
    _request.pushParams.message = "message";
    _request.pushParams.deviceGroups = "deviceGroups";
    _request.pushParams.lat1 = "lat1";
    _request.pushParams.lng1 = "lng1";
    _request.pushParams.lat2 = "lat2";
    _request.pushParams.lng2 = "lng2";
    _request.pushParams.loctype = "locationType";
    _request.pushParams.distance = "distance";
    _request.pushParams.circle = "circle";
    _request.pushParams.box = "box";
    
    _request.twitter = {};
    _request.twitter.oauthToken = "oauth_token";
    _request.twitter.oauthVersion = "oauth_version";
    _request.twitter.nickname = "screen_name";
    _request.twitter.userid = "id";
    _request.twitter.name = "name";
    _request.twitter.oauthVerifier = "oauth_verifier";
    _request.twitter.oauthSecret = "oauth_token_secret";
    _request.twitter.oauthVersionValue = "1.0";
    _request.twitter.oauthCallback = "oauth_callback";
    _request.twitter.netmeraCallback = _request.url + "/mobimera/callbacks/twittercallback.html";
    _request.twitter.requestTokenUrl = "https://api.twitter.com/oauth/request_token";
    _request.twitter.authenticateUrl = "https://api.twitter.com/oauth/authenticate?oauth_token=";
    _request.twitter.accessTokenUrl = "https://api.twitter.com/oauth/access_token";
    _request.twitter.verifyCredentialsUrl = "https://api.twitter.com/1/account/verify_credentials.json?skip_status=true";
    
    _request.facebook = {};
    _request.facebook.userid = "id";
    _request.facebook.username = "username";
    _request.facebook.email = "email";
    _request.facebook.firstName = "first_name";
    _request.facebook.lastName = "last_name";
    _request.facebook.me = "/me";
    _request.facebook.connected = "connected";
    _request.facebook.notAuth = "not_authorized";
    
    var _defaultParams = {};
    _defaultParams.serviceName = "netmera-mobimera";
    _defaultParams.parentPath = "/mobimeracontents";
    _defaultParams.peoplePath = "/people";
    _defaultParams.contentType = "netmera-mobimera:mobimera";
    _defaultParams.createAction = "netmera-mobimera:create-mobimera";
    _defaultParams.updateAction = "netmera-mobimera:update-mobimera";
    _defaultParams.apiContentType = "netmera-mobimera:api-content-type";
    _defaultParams.privacyTypePublic = "public";
    _defaultParams.privacyTypePrivate = "private";
    _defaultParams.moderationStatus = "production";
    _defaultParams.circleSearch = "circle";
    _defaultParams.boxSearch = "box";
    _defaultParams.sdk = "js";
    _defaultParams.sdkVersion = "1.4.0";

    var cookie_user_email = "netmera_user_email";
    var cookie_user_nickname = "netmera_user_nickname";
    var cookie_user_name = "netmera_user_name";
    var cookie_user_surname = "netmera_user_surname";
    var cookie_user_st = "netmera_user_apikey";
    var cookie_twitter_accessToken = "netmera_twitter_accessToken";
    var cookie_twitter_secretToken = "netmera_twitter_secretToken";
    var cookie_expiration = 30; // 30 days as default
    
    function objToMediaArray(obj) {
        var arr = new Array();
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                arr.push({
                    "key": key,
                    "val": obj[key]
                });
            }
        }
        return arr;
    }
    
    function setCookie(name, value, expireDays) {
    	var exdate = null;
    	if (expireDays) {
    		exdate = new Date();
            exdate.setDate(exdate.getDate() + expireDays);
    	}
    	
        document.cookie = name + "=" + escape(value) + ((expireDays === null) ? "" : ";expires="+exdate.toGMTString());
    }
    
    function getCookie(name) {
    	var cookies = document.cookie.split(";");
    	for(var i = 0; i < cookies.length; i++) {
    		var cookie = cookies[i].split("=");
    		cookie[0] = cookie[0].replace(/^\s+|\s+$/g, "");
    		if (cookie[0] == name) {
    			return unescape(cookie[1]);
    		}
    	}
    	return null;
    }
    
    function deleteCookie(name) {
        document.cookie = name + '="";expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    
    function cacheUser(user, userSt) {
    	if (user.getEmail()) {
    		setCookie(cookie_user_email, user.getEmail(), cookie_expiration);
    	}
    	
    	if (user.getNickname()) {
    		setCookie(cookie_user_nickname, user.getNickname(), cookie_expiration);
    	}
    	
    	if (user.getName()) {
    		setCookie(cookie_user_name, user.getName(), cookie_expiration);
    	}
    	
    	if (user.getSurname()) {
    		setCookie(cookie_user_surname, user.getSurname(), cookie_expiration);
    	}
    	
    	if (userSt) {
    		setCookie(cookie_user_st, userSt, cookie_expiration);
    	}
    }
    
    function cacheTwitter(twitter) {
    	setCookie(cookie_twitter_accessToken, twitter.getAccessToken(), cookie_expiration);
    	setCookie(cookie_twitter_secretToken, twitter.getSecretToken(), cookie_expiration);
    }
    
    function readCaches() {
    	var userSt = getCookie(cookie_user_st);
    	var nickname = getCookie(cookie_user_nickname);
    	var name = getCookie(cookie_user_name);
    	var surname = getCookie(cookie_user_surname);
    	var email = getCookie(cookie_user_email);
    	if (userSt && nickname) {
    		var user = new NetmeraUser();
    		user.setEmail(email);
    		user.setNickname(nickname);
    		user.setName(name);
    		user.setSurname(surname);
    		_currentUserSt = userSt;
    		_currentUser = user;
    	}
    	
    	var accessToken = getCookie(cookie_twitter_accessToken);
    	var secretToken = getCookie(cookie_twitter_secretToken);
    	_twitter = new Twitter();
    	_twitter.setAccessToken(accessToken);
    	_twitter.setSecretToken(secretToken);
    }
    
    function clearCaches() {
    	deleteCookie(cookie_twitter_accessToken);
    	deleteCookie(cookie_twitter_secretToken);
    	deleteCookie(cookie_user_email);
    	deleteCookie(cookie_user_nickname);
    	deleteCookie(cookie_user_name);
    	deleteCookie(cookie_user_surname);
    	deleteCookie(cookie_user_st);
    }

    /**
	 * @constructor
	 * @param {Number} errorCode
	 * @param {String} message
	 */
    NetmeraException = function (errorCode, message) {
        var _code = errorCode;
        var _message = message;

        /**
		 * Returns the message of this exception
		 * 
		 * @return {String} the message of the exception
		 */
        this.getMessage = function () {
            return _message;
        };

        /**
		 * Returns the code of the exception.
		 * 
		 * @return {Integer} the code of the exception
		 */
        this.getErrorCode = function () {
            return _code;
        };
    };

    /**
	 * @class Error codes that you can use to identify NetmeraExceptions
	 * @name NetmeraException.ErrorCode
	 */
    NetmeraException.ErrorCode = {
        // ErrorCodes related to general exceptions
    	
        /** @constant */
        EC_INTERNAL_SERVER_ERROR: 100,
        /** @constant */
        EC_IO_EXCEPTION: 101,
        /** @constant */
        EC_NULL_EXCEPTION: 102,
        /** @constant */
        EC_HTTP_PROTOCOL_EXCEPTION: 103,
        /** @constant */
        EC_INVALID_URL: 104,
        /** @constant */
        EC_INVALID_JSON: 105,
        /** @constant */
        EC_INVALID_DATE_FORMAT: 106,
        /** @constant */
        EC_INVALID_REQUEST: 107,
        /** @constant */
        EC_INVALID_RESPONSE: 108,
        /** @constant */
        EC_UNSUPPORTED_ENCODING: 109,
        /** @constant */
        EC_INVALID_ACTION_TOKEN: 110,
        /** @constant */
        EC_ASSERTION_ERROR: 111,

        // ErrorCodes related to data exceptions
        
        /** @constant */
        EC_REQUIRED_FIELD: 131,
        /** @constant */
        EC_INVALID_DATA_TYPE: 132,
        /** @constant */
        EC_INVALID_KEY: 133,
        /** @constant */
        EC_INVALID_PATH: 134,
        /** @constant */
        EC_INVALID_OBJECT_NAME: 135,
        /** @constant */
        EC_API_KEY_NOT_FOUND: 136,

        // ErrorCodes related to user exceptions
        
        /** @constant */
        EC_INVALID_EMAIL: 151,
        /** @constant */
        EC_INVALID_PASSWORD: 152,
        /** @constant */
        EC_ALREADY_REGISTERED_EMAIL: 153,
        /** @constant */
        EC_USER_LOGIN_ERROR: 154,
        /** @constant */
        EC_USER_REGISTER_ERROR: 155,
        /** @constant */
        EC_USER_UPDATE_ERROR: 156,

        // ErrorCodes related to geo-location
        
        /** @constant */
        EC_INVALID_LATITUDE: 171,
        /** @constant */
        EC_INVALID_LONGITUDE: 172,
        
        // ErrorCodes for Push
        
        /** @constant */
        EC_PUSH_SEND: 181,
        /** @constant */
        EC_PUSH_MESSAGE: 182
    };

    var EC = NetmeraException.ErrorCode;
    var _exceptions = {};
    _exceptions[EC.EC_IO_EXCEPTION] = "Cannot connect to the server";
    _exceptions[EC.EC_REQUIRED_FIELD] = " is required";
    _exceptions[EC.EC_INVALID_REQUEST] = "Invalid request";
    _exceptions[EC.EC_INVALID_RESPONSE] = "Error occurred while extracting data from response";
    _exceptions[EC.EC_NULL_EXCEPTION] = "Response of the query is null";
    _exceptions[EC.EC_USER_LOGIN_ERROR] = "Error occurred while logging user";
    _exceptions[EC.EC_PUSH_MESSAGE] = "Push message cannot be empty";
    _exceptions[EC.EC_PUSH_SEND] = "Error occured while sending push notification.";
    _exceptions[EC.EC_API_KEY_NOT_FOUND] = "You didn't set your api key. Please use NetmeraClient.init(apiKey).";
    
    var type = {
        func: function (arg) {
            return typeof arg === 'function';
        },
        object: function (arg) {
            return typeof arg === 'object';
        },
        string: function (arg) {
        	return typeof arg === 'string';
        },
        undef: function (arg) {
        	return typeof arg === 'undefined';
        },
        bool: function (arg) {
        	return typeof arg === 'boolean';
        },
        number: function (arg) {
        	return typeof arg === 'number';
        }
    };
    
    function checkApiKey(apikey, onfail) {
    	if (apikey) {
    		return true;
    	}
    	errorCallback(onfail, EC.EC_API_KEY_NOT_FOUND);
    	return false;
    }

    /**
	 * jQuery's $.each function
	 * 
	 * @param obj
	 * @param callback
	 */
    function each(obj, callback) {
        var i = 0, length = obj.length, isObj = length === undefined || type.object(obj);

        if (isObj) {
            for (var name in obj) {
                if (callback.call(obj[name], name, obj[name]) === false) {
                    break;
                }
            }
        } else {
            for (; i < length;) {
                if (callback.call(obj[i], i, obj[i++]) === false) {
                    break;
                }
            }
        }
    }

    function serialize(obj, prefix) {
        var str = [];
        for (var p in obj) {
            var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
            str.push(type.object(v) ? serialize(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
        return str.join("&");
    }

    function getXMLHttpRequest() {
        if (window.XMLHttpRequest) {
            return new window.XMLHttpRequest;
        } else {
            try {
                return new ActiveXObject("MSXML2.XMLHTTP.3.0");
            } catch (e) {
                return null;
            }
        }
    }
    
    function putDefaultParams(params) {
    	if (type.undef(params.data)) {
    		params.data = {};
    	}
    	params.data[_request.params.sdk] = _defaultParams.sdk;
    	params.data[_request.params.sdkVersion] = _defaultParams.sdkVersion;
    }

    function send(params, successCB, errorCB) {
        var request = getXMLHttpRequest();
        if (!request) {
            errorCallback(errorCB, EC.EC_IO_EXCEPTION);
            return;
        }
        
        putDefaultParams(params);
        var url = params.url + "&" + serialize(params.data);

        if (params.content) {
        	url = url + "&content=" + encodeURIComponent(JSON.stringify(params.content));
        }

        request.open(params.method, url, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    successCB(JSON.parse(request.responseText));
                } else {
                    errorCallback(errorCB, EC.EC_IO_EXCEPTION);
                }
            }
        };
        request.ontimeout = function () {
            errorCallback(errorCB, EC.EC_IO_EXCEPTION);
        };
		request.send(null);
    }

    function sendRpc(params, successCB, errorCB) {
        var request = getXMLHttpRequest();
        if (!request) {
            errorCallback(errorCB, EC.EC_IO_EXCEPTION);
            return;
        }
        
        putDefaultParams(params);
        var data = JSON.stringify(params.data);

        request.open(params.method, params.url, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    successCB(JSON.parse(request.responseText));
                } else {
                    errorCallback(errorCB, EC.EC_IO_EXCEPTION);
                }
            }
        };
        request.ontimeout = function () {
            errorCallback(errorCB, EC.EC_IO_EXCEPTION);
        };

        request.send(data);
    }
    
    /**
     * Calls the error callback function by creating the specified NetmeraException
     * @param {Function} callback callback function which will be called.
     * @param {Number} code error code specific to the NetmeraException
     * @param {String} prefix string to be added in front of the error message
     * @param {String} customMessage string to ignore the real message and to be set as NetmeraException's message. 
     */
    function errorCallback(callback, code, prefix, customMessage) {
        if (type.func(callback)) {
        	var error;
        	if (prefix) {
        		error = new NetmeraException(code, prefix + _exceptions[code]);
        	} else if (customMessage) {
        		error = new NetmeraException(code, customMessage);
        	} else {
        		error = new NetmeraException(code, _exceptions[code]);
        	}
        	callback(error);
        }
    }

    /**
     * Creates and Throws an instance of NetmeraException
     * @param {Number} code code of the error. Can be found in NetmeraException.ErrorCode
     * @param {String} prefix string to be added in front of the message.
     * @param {String} customMessage a custom message to be set as exception message
     */
    function throwNetmeraException(code, prefix, customMessage) {
        if (prefix) {
        	throw new NetmeraException(code, prefix + _exceptions[code]);
        } else if (customMessage) {
        	throw new NetmeraException(code, customMessage);
        } else {
        	throw new NetmeraException(code, _exceptions[code]);
        }
    }

    function search(data, stoken, callback, onfail) {
        var params = {};
        params.url = _request.url + _request.rpcUrl + _request.searchContentMethod + _request.st + stoken;
        params.method = _request.post;
        params.data = data;
        params.data[_request.params.path] = _defaultParams.parentPath;
        params.data[_request.params.contentType] = _defaultParams.contentType;

        send(params, function (response) {
            if (response) {
                if (type.func(callback))
                    callback(response);
            } else {
                errorCallback(EC.EC_NULL_EXCEPTION);
            }
        }, onfail);
    }

    function boxSearch(data, stoken, callback, onerror) {
        var params = {};
        params.url = _request.url + _request.rpcUrl + _request.locationSearchContentMethod + _request.st + stoken;
        params.method = _request.post;
        params.data = data;
        params.data[_request.params.searchType] = _defaultParams.boxSearch;
        params.data[_request.params.path] = _defaultParams.parentPath;
        params.data[_request.params.contentType] = _defaultParams.contentType;

        send(params, function (response) {
            if (response) {
                if (type.func(callback))
                    callback(response);
            } else {
                errorCallback(onerror, EC.EC_NULL_EXCEPTION);
            }
        }, onerror);
    }

    function circleSearch(data, stoken, callback, onerror) {
        var params = {};
        params.url = _request.url + _request.rpcUrl + _request.locationSearchContentMethod + _request.st + stoken;
        params.method = _request.post;
        params.data = data;
        params.data[_request.params.searchType] = _defaultParams.circleSearch;
        params.data[_request.params.path] = _defaultParams.parentPath;
        params.data[_request.params.contentType] = _defaultParams.contentType;

        send(params, function (response) {
            if (response) {
                if (type.func(callback))
                    callback(response);
            } else {
                errorCallback(onerror, EC.EC_NULL_EXCEPTION);
            }
        }, onerror);
    }

    function get(data, stoken, callback, onerror) {
        var params = {};
        params.url = _request.url + _request.rpcUrl + _request.getContentMethod + _request.st + stoken;
        params.method = _request.get;
        params.data = {};
        params.data[_request.params.path] = data[_request.params.path];

        send(params, function (response) {
            if (response && response.entry) {
                if (type.func(callback))
                    callback(response.entry);
            } else {
                errorCallback(onerror, EC.EC_NULL_EXCEPTION);
            }
        }, onerror);
    }

    function create(data, stoken, callback, onfail) {
        var params = {};
        params.url = _request.url + _request.rpcUrl + _request.createContentMethod + _request.st + stoken;
        params.method = _request.post;
        params.data = {};
        params.content = data;
        params.data[_request.params.path] = _defaultParams.parentPath;
        params.data[_request.params.contentType] = _defaultParams.contentType;
        params.data[_request.params.contentName] = Math.floor((Math.random() * 1000000) + 1);
        params.data[_request.params.service] = _defaultParams.serviceName;
        params.data[_request.params.action] = _defaultParams.createAction;

        send(params, function (response) {
            if (response && response.entry) {
                if (type.func(callback))
                    callback(response.entry);
            } else {
                errorCallback(onfail, EC.EC_NULL_EXCEPTION);
            }
        }, onfail);
    }

    function update(data, stoken, callback, onfail) {
        var updatePath = data[_request.params.path];
        var params = {};
        params.url = _request.url + _request.rpcUrl + _request.updateContentMethod + _request.st + stoken;
        params.method = _request.post;
        params.data = {};
        params.content = data;
        params.data[_request.params.contentPrivacy] = data[_request.params.contentPrivacy];
        params.data[_request.params.moderationStatus] = data[_request.params.moderationStatus];
        params.data[_request.params.path] = updatePath;
        params.data[_request.params.contentType] = _defaultParams.contentType;
        params.data[_request.params.contentName] = Math.floor((Math.random() * 1000) + 1);
        params.data[_request.params.service] = _defaultParams.serviceName;
        params.data[_request.params.action] = _defaultParams.updateAction;

        send(params, function (response) {
            if (response && response.entry) {
                if (type.func(callback))
                    callback(response.entry);
            } else {
                errorCallback(onfail, EC.EC_NULL_EXCEPTION);
            }
        }, onfail);
    }

    function remove(path, stoken, callback, onfail) {
        var params = {};
        params.url = _request.url + _request.rpcUrl + _request.removeContentMethod + _request.st + stoken;
        params.method = _request.post;
        params.data = {};
        params.data[_request.params.path] = path;

        send(params, function (response) {
            if (type.func(callback))
                callback();
        }, onfail);
    }

    function createUser(json) {
        var user = new NetmeraUser();
        if (json[_request.userParams.emails] && json[_request.userParams.emails][0]) {
        	var email = json[_request.userParams.emails][0].value;
        	user.setEmail(email);
        }

        if (json[_request.userParams.name]) {
            if (json[_request.userParams.name][_request.userParams.givenName])
                user.setName(json[_request.userParams.name][_request.userParams.givenName]);

            if (json[_request.userParams.name][_request.userParams.familyName])
                user.setSurname(json[_request.userParams.name][_request.userParams.familyName]);
        }

        if (json[_request.userParams.nickname])
            user.setNickname(json[_request.userParams.nickname]);

        return user;
    }

    function getAlbumData(content, file, onsuccess, onfail) {
    	var params = {};
    	params.url = _request.media.uploadUrl + _request.st + _st;
    	params.data = {};
    	params.data[_request.mediaParams.osViewerId] = content.owner.nodeName;
    	params.data[_request.mediaParams.contentPath] = content.content.path;
    	params.data[_request.mediaParams.osNetmeraDomain] = _request.domain;
    	params.data[_request.mediaParams.osAppId] = content.site;
    	params.method = _request.get;
    	
    	send(params, function(response) {
    		var site = null;
            var domain = null;
            var path = null;

            if (response.site) {
                site = response.site;
            } else {
            	errorCallback(onfail, EC.EC_IO_EXCEPTION, false, "Cannot get site.");
                return;
            }

            if (response.domain) {
                domain = response.domain;
            } else {
            	errorCallback(onfail, EC.EC_IO_EXCEPTION, false, "Cannot get domain.");
                return;
            }

            if (response.albumList && response.albumList.length > 0) {
                path = response.albumList[0].content.path;
            } else {
            	errorCallback(onfail, EC.EC_IO_EXCEPTION, false, "Cannot get album list.");
                return;
            }

            onsuccess(site, domain, path);
    	}, onfail);
    }

    function getUploadKey(site, domain, file, onsuccess, onfail) {
        var xhr = getXMLHttpRequest();
        var url = _request.media.swfUrl + "uploadType_site_domain=image_" + site + "_" + domain;
        xhr.open(_request.post, url, true);
        var formdata = new FormData();
        formdata.append("Filedata", file, "file.jpg");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    if (response.uploadKey) {
                        onsuccess(response.uploadKey);
                    } else {
                    	errorCallback(onfail, EC.EC_IO_EXCEPTION, false, "Cannot get upload key.");
                    }
                } else {
                	errorCallback(onfail, EC.EC_IO_EXCEPTION, false, "Cannot upload this image.");
                }
            }
        };
        xhr.ontimeout = function () {
        	errorCallback(onfail, EC.EC_IO_EXCEPTION, false, "Request Timeout!");
        };
        xhr.send(formdata);
    }

    function getUploadUrl(content, path, uploadKey, site, domain, onsuccess, onfail) {
    	var params = {};
    	params.method = _request.get;
    	params.url = _request.media.savePhotoUrl + _request.st + _st;
    	params.data = {};
    	params.data[_request.mediaParams.album] = path;
    	params.data[_request.mediaParams.uploadedPhotoHash] = uploadKey;
    	params.data[_request.mediaParams.cdnDomain] = _request.cdnDomain;
    	params.data[_request.mediaParams.osAppId] = site;
    	params.data[_request.mediaParams.osNetmeraDomain] = domain;
    	params.data[_request.mediaParams.osViewerId] = content.owner.nodeName;
    	
    	send(params, function(response) {
            if (response && response.photo && response.photo.content && response.photo.content.data && response.photo.content.data.thumbnailUrl) {
                onsuccess(response.photo.content.data.thumbnailUrl);
            } else {
            	errorCallback(onfail, EC.EC_IO_EXCEPTION, false, "Cannot get thumbnail url.");
            }
    	}, onfail);
    }

    function createMedia(content, file, onsuccess, onfail) {
        getAlbumData(content, file, function (site, domain, path) {
            getUploadKey(site, domain, file, function (uploadKey) {
                getUploadUrl(content, path, uploadKey, site, domain, function (thumbnailUrl) {
                    onsuccess(thumbnailUrl);
                }, onfail);
            }, onfail);
        }, onfail);
    }

    /**
	 * @constructor
	 */
    NetmeraService = function (objectName) {
        var _objectName = objectName;
        var _queries = new Array();
        var _searchText = null;
        var _max = 10;
        var _page = 0;
        var _path = null;
        var _totalResults = {};
        var _data = {};
        var _whereKeys = {};
        var _sortBy = null;
        var _sortOrder = NetmeraService.SortOrder.ascending;
        var _hasOwner = false;

        function clearEntries() {
            _entries = new Array();
        }

        function pushWhereKey(key, value) {
            if (key in _whereKeys) {
                _whereKeys[key] += "," + value;
            } else {
                _whereKeys[key] = "{" + value;
            }
        }

        function searchParams(pageParam, maxParam) {
			_data = {};
            var customCondition = "{";
            each(_queries, function (index, val) {
                customCondition += val + ",";
            });

            for (key in _whereKeys) {
                customCondition += "'" + key + "':" + _whereKeys[key] + "},";
            }

            customCondition += "'" + _defaultParams.apiContentType + "':'" + _objectName + "'}";
            _data[_request.params.page] = pageParam;
            _data[_request.params.max] = maxParam;
            _data[_request.params.customCondition] = customCondition;

            if (_searchText && !type.object(_searchText)) {
                _data[_request.params.searchText] = _searchText;
            }
            
            if(_sortBy) {
				_data[_request.params.sortBy] = _sortBy;
				_data[_request.params.sortOrder] = _sortOrder;
            }
        }

        function userSearchParams(pageParam, maxParam) {
			_data = {};
            var customCondition = "{";
            each(_queries, function (index, val) {
                customCondition += val + ",";
            });
            for (key in _whereKeys) {
                customCondition += "'" + key + "':" + _whereKeys[key] + "}, ";
            }
            customCondition += "}";
            _data[_request.params.page] = pageParam;
            _data[_request.params.max] = maxParam;
            _data[_request.params.customCondition] = customCondition;
            if (_searchText && !type.object(_searchText)) {
                _data[_request.params.searchText] = _searchText;
            } 
            
            if (_sortBy) {
                _data[_request.params.sortBy] = _sortBy;
                _data[_request.params.sortOrder] = _sortOrder;
            }
        }
        
        /**
		 * Adds the searchText into the query.
		 * 
		 * @param {String}
		 *            searchText Text to search
		 */
        this.addSearchText = function (searchText) {
            _searchText = searchText;
        };

        /**
		 * Sorts the content with the given key.
		 * 
		 * @param {String}
		 *            sortBy key to sort content
		 */
        this.setSortBy = function (sortBy) {
            _sortBy = sortBy;
        };

        /**
		 * Sorts the content with the given order. If not setted then by default
		 * it is sorted by ascending order.
		 * 
		 * @param {String}
		 *            sortOrder order of the sort
		 * @example
		 * var service = new NetmeraService("__CONTENT_TYPE_NAME__");
		 * service.setSortBy("__A_FIELD_NAME__");
		 * service.setSortOrder(NetmeraService.SortOrder.ascending);
		 * //service.setSortOrder(NetmeraService.SortOrder.descending);
		 */
        this.setSortOrder = function (sortOrder) {
            _sortOrder = sortOrder;
        };

        /**
		 * Returns the path of the content.
		 * 
		 * @return {String} path the path of the content.
		 */
        this.getPath = function () {
            return _path;
        };

        /**
		 * Sets the path of the content.This is used to find the content to
		 * remove and update.
		 * 
		 * @param {String}
		 *            path path ofthe content
		 */
        this.setPath = function (path) {
            _path = path;
        };

        /**
		 * Sets the total number of results to return. If it is less than or
		 * equal to 0 then it is setted to 10.
		 * 
		 * @param {Integer}
		 *            max the total number of results to return
		 */
        this.setMax = function (max) {
            _max = max;
        };

        /**
		 * Sets the current page of items to return. If it is less than 0 then it is setted to 0.<br/>
		 * For example, if you set max as 10 and set page as 3, search results start with the 30. content
		 * 
		 * @param {Integer} page the current page of items to return
		 */
        this.setPage = function (page) {
            if (page < 0 || !type.number(page)) {
                _page = 0;
            } else {
                _page = page;
            }
        };

        /**
		 * Adds an options to the query where value that matches with the query
		 * is equal to the given value.
		 * 
		 * @param {String}
		 *            key key to identify specified value
		 * @param {Object}
		 *            value value associates with the specified key
		 */
        this.whereEqual = function (key, value) {
            if (type.string(value))
                value = "'" + value + "'";

            if (value instanceof NetmeraGeoLocation) {
                this.whereEqual(key + _request.params.latitudeSuffix, value.getLatitude());
                this.whereEqual(key + _request.params.longitudeSuffix, value.getLongitude());
            } else {
                _queries.push("'" + key + "':" + value);
            }
        };

        /**
		 * Adds an options to the query where value that matches with the query
		 * is greater than the given value.
		 * 
		 * @param {String}
		 *            key key to identify specified value
		 * @param {Object}
		 *            value value associates with the specified key
		 */
        this.whereGreaterThan = function (key, value) {
            if (type.string(value)) {
            	value = "'" + value + "'";
            }
            pushWhereKey(key, "$gt:" + value);
        };

        /**
		 * Adds an options to the query where value that matches with the query
		 * is less than the given value.
		 * 
		 * @param {String}
		 *            key key to identify specified value
		 * @param {Object}
		 *            value value associates with the specified key
		 */
        this.whereLessThan = function (key, value) {
            if (type.string(value)) {
            	value = "'" + value + "'";
            }
            pushWhereKey(key, "$lt:" + value);
        };

        /**
		 * Adds an options to the query where value that matches with the query
		 * is not equal to the given value.
		 * 
		 * @param {String}
		 *            key key to identify specified value
		 * @param {String}
		 *            value value associates with the specified key
		 */
        this.whereNotEqual = function (key, value) {
            if (type.string(value)) {
            	value = "'" + value + "'";
            }
            pushWhereKey(key, "$ne:" + value);
        };

        /**
		 * Adds an options to the query where value that matches with the query
		 * is greater than or equal to the given value.
		 * 
		 * @param {String}
		 *            key key to identify specified value
		 * @param {Object}
		 *            value value associates with the specified key
		 */
        this.whereGreaterThanOrEqual = function (key, value) {
            if (type.string(value)) {
            	value = "'" + value + "'";
            }
            pushWhereKey(key, "$gte:" + value);
        };

        /**
		 * Adds an options to the query where value that matches with the query
		 * is less than or equal to the given value.
		 * 
		 * @param {String}
		 *            key key to identify specified value
		 * @param {Object}
		 *            value value associates with the specified key
		 */
        this.whereLessThanOrEqual = function (key, value) {
            if (type.string(value)) {
            	value = "'" + value + "'";
            }
            pushWhereKey(key, "$lte:" + value);
        };

        /**
		 * Adds an options to the query where the given key is exists or not. If
		 * value is true then it checks whether key exists, if value is false
		 * then it checks whether key not exists.
		 * 
		 * @param {String}
		 *            key key to identify specified value
		 * @param {Boolean}
		 *            value value associates with the specified key
		 */
        this.whereExists = function (key, value) {
            var bool = (value) ? true : false;
            _queries.push("'" + key + "':{$exists:" + bool + "}");
        };

        /**
		 * Adds an options to the query where value that returns from the query
		 * matches with the given regex.
		 * 
		 * @param {String}
		 *            key key to identify specified value
		 * @param {String}
		 *            regex value associates with the specified key
		 */
        this.whereMatches = function (key, regex) {
            _queries.push("'" + key + "':{$regex:'" + regex + "'}");
        };

        /**
		 * Adds an options to the query where value that matches with the query
		 * starts with the given prefix.
		 * 
		 * @param {String}
		 *            key key to identify specified value
		 * @param {String}
		 *            prefix value associates with the specified key
		 */
        this.whereStartsWith = function (key, prefix) {
            _queries.push("'" + key + "':{$regex:'^" + prefix + "'}");
        };

        /**
		 * Adds an options to the query where value that matches with the query
		 * ends with the given suffix.
		 * 
		 * @param {String}
		 *            key key to identify specified value
		 * @param {String}
		 *            suffix value associates with the specified key
		 */
        this.whereEndsWith = function (key, suffix) {
            _queries.push("'" + key + "':{$regex:'" + suffix + "$'}");
        };

        /**
		 * Adds an options to the query where value that matches with the query
		 * contains any of the values in the given collection.
		 * 
		 * @param {String}
		 *            key key to identify specified value
		 * @param {Array}
		 *            value value associates with the specified key
		 */
        this.whereContainedIn = function (key, value) {
        	var _value = JSON.stringify(value);
        	if (!(value instanceof Array)) {
        		_value = "[" + _value + "]";
        	}
            
            _queries.push("'" + key + "':{$in:" + _value + "}");
        };

        /**
		 * Adds an options to the query where value that matches with the query
		 * contains all of the values in the given collection.
		 * 
		 * @param {String}
		 *            key key to identify specified value
		 * @param {Array}
		 *            value value associates with the specified key
		 */
        this.whereAllContainedIn = function (key, value) {
            var _value = JSON.stringify(value);
        	if (!(value instanceof Array)) {
        		_value = "[" + _value + "]";
        	}
            _queries.push("'" + key + "':{$all:" + _value + "}");
        };

        /**
		 * Adds an option to the query where returning contents have owner as
		 * current logged user A user must be logged before using this method
		 * 
		 * @throws NetmeraException
		 *             if there is no user logged in
		 */
        this.whereOwnerEqual = function () {
            if (_currentUserSt === null) {
            	throwNetmeraException(EC.EC_ASSERTION_ERROR, false, "You must be logged in before doing this action!");
            }

            _hasOwner = true;
        };

        /**
		 * Gets the total number of results that matches the query.
		 * 
		 * @param {Function}
		 *            onsuccess callback function called when count is
		 *            successful
		 * @param {Function}
		 *            onfail callback function called when count failed
		 * @example
		 * var service = new NetmeraService("ContentName");
		 * service.count(function(num) {
		 *     // Number of contents is 'num'
		 * }, function(error) {
		 *     // Operation failed, look at 'error' to identify the error
		 * });
		 */
        this.count = function (onsuccess, onfail) {
            var stoken = (_hasOwner) ? _currentUserSt : _st;
            if (checkApiKey(stoken, onfail)) {
            	searchParams(0, 1);
            	search(_data, stoken, function (response) {
                    _totalResults = response.totalResults;
                    clearEntries();
                    if (type.func(onsuccess)) {
                    	onsuccess(_totalResults);
                    }
                }, onfail);
            }
        };

        /**
		 * Retrieves the Array of NetmeraContent objects that matches with the query.
		 * 
		 * @param {Function} onsuccess callback function called when search is successful
		 * @param {Function} onfail callback function called when search failed
		 * @example 
		 * var service = new NetmeraService("ContentName");
		 * service.search(function(entries) {
		 *     // iterate through 'entries' array 
		 * }, function(error) {
		 *     // Do something with 'error' 
		 * });
		 */
        this.search = function (onsuccess, onfail) {
            var stoken = (_hasOwner) ? _currentUserSt : _st;
            if (checkApiKey(stoken, onfail)) {
            	searchParams(_page, _max);
            	search(_data, stoken, function (response) {
                    if (response.entry) {
                        var totalResults = response.totalResults;
                        var entries = new Array();
                        each(response.entry, function (key, val) {
                            var ctx = new NetmeraContent(val.content.data[_defaultParams.apiContentType]);
                            ctx.init(val);
                            entries.push(ctx);
                        });
                        if (type.func(onsuccess))
                            onsuccess(entries, totalResults);
                    } else {
                        errorCallback(onfail, EC.EC_INVALID_RESPONSE);
                    }
                }, onfail);
            }
        };

        /**
		 * Creates box using the given two location (latitude,longitude) data and searches inside that box.
		 * 
		 * @param {NetmeraGeoLocation} firstGeoPoint NetmeraGeoLocation object, which is the corner of the box
		 * @param {NetmeraGeoLocation} secondGeoPoint NetmeraGeoLocation object, which the other corner of the box
		 * @param {String} locationField name of the field that holds location data.
		 * @param {Function} onsuccess callback function called when boxSearch is successful
		 * @param {Function} onfail callback function called when boxSearch failed
		 * @example 
		 * var service = new NetmeraService("ContentName"); 
		 * var corner1 = new NetmeraGeoLocation(40.7, 28.6);
		 * var corner2 = new NetmeraGeoLocation(41.2, 29.4);
		 * service.boxSearch(corner1, corner2, "myLocationField", function(entries) { 
		 *     // entries[0], entries[1], ...., entries[entries.length-1]
		 * }, function(error) {
		 *     // Identify 'error' with error.getCode()
		 * });
		 */
        this.boxSearch = function (firstGeoPoint, secondGeoPoint, locationField, onsuccess, onfail) {
            var stoken = (_hasOwner) ? _currentUserSt : _st;
            
            if (checkApiKey(stoken, onfail)) {
            	searchParams(_page, _max);
                _data[_request.params.latitude] = firstGeoPoint.getLatitude() + "," + secondGeoPoint.getLatitude();
                _data[_request.params.longitude] = firstGeoPoint.getLongitude() + "," + secondGeoPoint.getLongitude();
                _data[_request.params.fieldName] = locationField + _request.params.locationSuffix;
                
            	boxSearch(_data, stoken, function (response) {
                    if (response.entry) {
                        var totalResults = response.totalResults;
                        var entries = new Array();
                        each(response.entry, function (key, val) {
                            var ctx = new NetmeraContent(val.content.data[_defaultParams.apiContentType]);
                            ctx.init(val);
                            entries.push(ctx);
                        });
                        if (type.func(onsuccess))
                            onsuccess(entries, totalResults);
                    } else {
                        errorCallback(onfail, EC.EC_INVALID_RESPONSE);
                    }
                }, onfail);
            }
        };

        /**
		 * Searches the content by taking given location as a base and retrieves the contents that located given distance far away.
		 * 
		 * @param {NetmeraGeoLocation} geoPoint base location to search near it.
		 * @param {Number} distance distance used to create circle by taking the startLocation as a center.
		 * @param {String} locationField name of the field that holds location data.
		 * @param {Function} onsuccess callback function called when circleSearch is successful
		 * @param {Function} onfail callback function called when circleSearch failed
		 * @example
		 * var service = new NetmeraService("ContentName");
		 * var center = new NetmeraGeoLocation(41, 29);
		 * var distance = 4; // 4 kilometers
		 * service.circleSearch(center, distance, "myLocationField", function(entries) { 
		 *     // entries[0], entries[1], ...., entries[entries.length-1]
		 * }, function(error) {
		 *     // Identify 'error' with error.getCode()
		 * });
		 */
        this.circleSearch = function (geoPoint, distance, locationField, onsuccess, onfail) {
            var stoken = (_hasOwner) ? _currentUserSt : _st;
            
            if (checkApiKey(stoken, onfail)) {
            	searchParams(_page, _max);
                _data[_request.params.latitude] = geoPoint.getLatitude();
                _data[_request.params.longitude] = geoPoint.getLongitude();
                _data[_request.params.distance] = distance;
                _data[_request.params.fieldName] = locationField + _request.params.locationSuffix;
                
            	circleSearch(_data, stoken, function (response) {
                    var totalResults = response.totalResults;
                    if (response.entry) {
                        var entries = new Array();
                        each(response.entry, function (key, val) {
                            var ctx = new NetmeraContent(val.content.data[_defaultParams.apiContentType]);
                            ctx.init(val);
                            entries.push(ctx);
                        });
                        if (type.func(onsuccess))
                            onsuccess(entries, totalResults);
                    } else {
                        errorCallback(onfail, EC.EC_INVALID_RESPONSE);
                    }
                }, onfail);
            }
        };

        /**
		 * Gets the single NetmeraContent object whose path is equal to the given path with setPath(path).
		 * 
		 * @param {Function} onsuccess callback function called when get is successful
		 * @param {Function} onfail callback function called when get method failed
		 * @example
		 * var service = new NetmeraService("ContentName");
		 * service.setPath("Your Content's Path");
		 * service.get(function(content) {
		 *     var path = content.getPath();
		 * }, function(error) {
		 *     // Identify 'error' with error.getCode() 
		 * });
		 */
        this.get = function (onsuccess, onfail) {
            var stoken = (_hasOwner) ? _currentUserSt : _st;
            if (checkApiKey(stoken, onfail)) {
            	_data[_request.params.path] = _path;
            	
            	get(_data, stoken, function (entry) {
                    var ctx = new NetmeraContent(entry.content.data[_defaultParams.apiContentType]);
                    ctx.init(entry);
                    if (type.func(onsuccess))
                        onsuccess(ctx);
                }, onfail);
            }
        };

        /**
		 * Retrieves the Array of NetmeraUser objects that matches with the query.
		 * 
		 * @param {Function} onsuccess callback function called when searchUser is successful
		 * @param {Function} onfail callback function called when searchUser failed
		 * @example
		 * var service = NetmeraService.getNetmeraUserService();
		 * service.searchUser(function(users) {
		 *     for(var i=0; i < users.length; i++) {
		 *         console.log(users[i].getNickname());
		 *     }
		 * }, function(error) {
		 *     console.log(error.getMessage());
		 * });
		 */
        this.searchUser = function (onsuccess, onfail) {
            var stoken = (_hasOwner) ? _currentUserSt : _st;
            
            if (checkApiKey(stoken, onfail)) {
            	this.setPath(_defaultParams.peoplePath);
                userSearchParams(_page, _max);
                
                var params = {};
                params.url = _request.url + _request.rpcUrl + _request.peopleSearchMethod + _request.st + stoken;
                params.method = _request.post;
                params.data = _data;
                params.data[_request.params.path] = _defaultParams.peoplePath;

                send(params, function (response) {
                    if (response) {
                        if (type.func(onsuccess)) {
                            var users = new Array();
                            each(response.entry, function (key, val) {
                                var user = createUser(val);
                                users.push(user);
                            });
                            
                            var totalResults = response.totalResults;
                            onsuccess(users, totalResults);
                        }
                    } else {
                        errorCallback(onfail, EC.EC_INVALID_RESPONSE);
                    }
                }, onfail);
            }
        };
    };

    /**
	 * @constructor
	 * @param {String} objectName
	 */
    NetmeraContent = function (objectName) {
        var _objectName = objectName;
        var _createDate = null;
        var _updateDate = null;
        var _data = {};
        var _path = "";
        var _privacy = _defaultParams.privacyTypePublic;
        var _moderationStatus = {};
        var _hasOwner = false;
        var _mediaData = {};

        function setContent(entry) {
            _data = entry.content.data;
            _objectName = entry.content.data[_defaultParams.apiContentType];
            _path = entry.content.path;
            _privacy = entry.content.privacyTypeName;
            _moderationStatus = entry.content.moderationStatus;
            _createDate = new Date(entry.content.createDate);
            _updateDate = new Date(entry.content.updateDate);
        }

        function clearContent() {
            _data = {};
            _objectName = {};
            _path = {};
            _privacy = {};
            _moderationStatus = {};
        }
        
        function get(key) {
        	if (!type.undef(_data[key])) {
                return _data[key];
            } else {
                return null;
            }
        }

        /**
		 * Adds key,value pairs into the object. If the object contains key, the
		 * old value is replaced.
		 * 
		 * @param {String}
		 *            key key to identify specified value
		 * @param {Object}
		 *            val value associates with the specified key
		 */
        this.add = function (key, val) {
            if (!type.string(key) || !key)
                throwNetmeraException(EC.EC_REQUIRED_FIELD, "key");
            if (val === null || type.undef(val))
                throwNetmeraException(EC.EC_REQUIRED_FIELD, "val");

            if (val instanceof NetmeraGeoLocation) {
                _data[key + _request.params.locationSuffix] = val.getLatitude() + "," + val.getLongitude();
                _data[key + _request.params.latitudeSuffix] = val.getLatitude();
                _data[key + _request.params.longitudeSuffix] = val.getLongitude();
            } else if (val instanceof NetmeraMedia) {
                _mediaData[key] = val;
            } else {
                _data[key] = val;
            }
        };
        
        /**
         * allows user to set the privacy of the content
         * @param {NetmeraPrivacy} privacy 
         * 			to set the privacy of the content
         */
        this.setPrivacy = function (privacy) {
        	_privacy = privacy;
        };

        /**
		 * Adds data to the cloud.
		 * 
		 * @param {Function}
		 *            onsuccess callback function called when create is
		 *            successful
		 * @param {Function}
		 *            onfail callback function called when create failed
		 */
        this.create = function (onsuccess, onfail) {
            var stoken = (_hasOwner) ? _currentUserSt : _st;
            
            if (checkApiKey(stoken, onfail)) {
            	_data[_defaultParams.apiContentType] = _objectName;
            	var thisContent = this;
            	
            	create(_data, stoken, function (entry) {
                    setContent(entry);
                    var arr = objToMediaArray(_mediaData);
                    if (arr.length > 0) {
                        var updateContent = new NetmeraContent(_objectName);
                        updateContent.setPath(_path);
                        var createdMediaCount = 0;

                        each(arr, function (index, media) {
                            createMedia(entry, media.val.getFile(), function (thumbnailUrl) {
                                updateContent.add(media.key, thumbnailUrl + NetmeraMedia.PhotoSize.DEFAULT);
    							thisContent.add(media.key, thumbnailUrl + NetmeraMedia.PhotoSize.DEFAULT);
                                _mediaData[media.key].init(thumbnailUrl + NetmeraMedia.PhotoSize.DEFAULT);
                                if (++createdMediaCount == arr.length) {
                                    updateContent.update(function () {
                                        onsuccess();
                                    }, function (e) {
                                        console.log(e.getMessage());
                                    });
                                }
                            }, function (error) {
                                if (++createdMediaCount == arr.length) {
                                    updateContent.update(function () {
                                        onsuccess();
                                    }, function (e) {
                                        console.log(e.getMessage());
                                    });
                                }
                            });
                        });
                    } else {
                        if (type.func(onsuccess))
                            onsuccess();
                    }
                }, onfail);
            }
        };

        /**
		 * Updates data
		 * 
		 * @param {Function}
		 *            onsuccess callback function called when update is
		 *            successful
		 * @param {Function}
		 *            onfail callback function called when update failed
		 */
        this.update = function (onsuccess, onfail) {
            var stoken = (_hasOwner) ? _currentUserSt : _st;
            
            if (checkApiKey(stoken, onfail)) {
            	var thisContent = this;
            	_data[_defaultParams.apiContentType] = _objectName;
                _data[_request.params.contentPrivacy] = _privacy;
                _data[_request.params.moderationStatus] = _moderationStatus;
                _data[_request.params.path] = _path;
                
                update(_data, stoken, function (entry) {
                    setContent(entry);
                    var arr = objToMediaArray(_mediaData);
                    if (arr.length > 0) {
                        var updateContent = new NetmeraContent(_objectName);
                        updateContent.setPath(_path);
                        var createdMediaCount = 0;

                        each(arr, function (index, media) {
                            createMedia(entry, media.val.getFile(), function (thumbnailUrl) {
                                updateContent.add(media.key, thumbnailUrl + NetmeraMedia.PhotoSize.DEFAULT);
    							thisContent.add(media.key, thumbnailUrl + NetmeraMedia.PhotoSize.DEFAULT);
                                _mediaData[media.key].init(thumbnailUrl + NetmeraMedia.PhotoSize.DEFAULT);
                                if (++createdMediaCount == arr.length) {
                                    updateContent.update(function () {
                                        onsuccess();
                                    }, function (e) {
                                        console.log(e.getMessage());
                                    });
                                }
                            }, function (error) {
                                if (++createdMediaCount == arr.length) {
                                    updateContent.update(function () {
                                        onsuccess();
                                    }, function (e) {
                                        console.log(e.getMessage());
                                    });
                                }
                            });
                        });
                    } else {
                        if (type.func(onsuccess))
                            onsuccess();
                    }
                }, onfail);
            }
        };

        /**
         * @name NetmeraContent#remove
         * @function
         * @description
		 * Removes data from the cloud. Before calling this method path of the
		 * data should be setted by calling setPath(String) method.
		 * 
		 * @param {Function}
		 *            onsuccess callback function called when remove is
		 *            successful
		 * @param {Function}
		 *            onfail callback function called when remove failed
		 */
        this.remove = function (onsuccess, onfail) {
            var stoken = (_hasOwner) ? _currentUserSt : _st;

            if (checkApiKey(stoken, onfail)) {
            	remove(_path, stoken, function () {
                    clearContent();
                    if (type.func(onsuccess)) {
                    	onsuccess();
                    }
                }, onfail);
            }
        };
        
        /**
         * @name NetmeraContent#delete
         * @function
         * @description
         * Deprecated.
		 * Removes data from the cloud. Before calling this method path of the
		 * data should be setted by calling setPath(String) method.
		 * @see NetmeraContent#remove
		 * @deprecated
		 * Avoid using this method. Instead, use NetmeraContent#remove
		 * 
		 * @param {Function}
		 *            onsuccess callback function called when remove is
		 *            successful
		 * @param {Function}
		 *            onfail callback function called when remove failed
		 */
        this['delete'] = this.remove;

        /**
		 * Gets the Object with the specified key.
		 * 
		 * @param {String}
		 *            key key to get value
		 * @returns {Object} the Object with the specified key.If the object
		 *          type is not Object or key does not exists then it returns
		 *          null.
		 */
        this.get = function (key) {
            return get(key);
        };
        
        /**
		 * Returns the boolean value with the specified key. If value is not a
		 * boolean or key does not exists then it returns false.
		 * 
		 * @param {String}
		 *            key key to get value
		 * @return {Boolean} the boolean value with the specified key.If value
		 *         is not a boolean or key does not exists then it returns
		 *         false.
		 */
        this.getBoolean = function (key) {
            var val = get(key);
            if (type.bool(val)) {
                return val;
            } else {
                return false;
            }
        };

        /**
		 * Returns the number value with the specified key. If value is not a
		 * number or key does not exists then it returns 0.
		 * 
		 * @param key
		 *            key to get value
		 * @return {Number} the number value with the specified key. If value is
		 *         not a number or key does not exists then it returns 0.
		 */
        this.getNumber = function (key) {
            var val = get(key);
            if (type.number(val)) {
                return val;
            } else {
                return 0;
            }
        };

        /**
		 * Gets the String object with the specified key.
		 * 
		 * @param key
		 *            key to get value
		 * @returns {String} the String with the specified key. If the object
		 *          type is not String or key does not exists then it returns
		 *          null.
		 */
        this.getString = function (key) {
            var val = get(key);
            if (type.string(val)) {
                return val;
            } else {
                return null;
            }
        };

        /**
		 * Returns the NetmeraGeoLocation object with the specified key. If the
		 * object type is not an NetmeraGeoLocation or key does not exists then
		 * it returns null.
		 * 
		 * @param {String}
		 *            key key to get value
		 * @return {NetmeraGeoLocation} Returns the NetmeraGeoLocation object
		 *         with the specified key. If the object type is not an
		 *         NetmeraGeoLocation or key does not exists then it returns
		 *         null.
		 */
        this.getNetmeraGeoLocation = function (key) {
            var lat = get(key + _request.params.latitudeSuffix);
            var lng = get(key + _request.params.longitudeSuffix);
            if (lat && lng) {
                return new NetmeraGeoLocation(lat, lng);
            } else {
                return null;
            }
        };

        /**
		 * Gets the NetmeraMedia object with the specified key.
		 * 
		 * @param {String}
		 *            key key to get value
		 * @return {NetmeraMedia} the NetmeraMedia object with the specified
		 *         key. If the object type is not a NetmeraMedia or key does not
		 *         exists then it returns null.
		 */
        this.getNetmeraMedia = function (key) {
            var url = get(key);
            if (url) {
                var media = new NetmeraMedia(null);
                media.init(url);
                return media;
            } else {
                return null;
            }
        };

        /**
		 * Gets the Object object with the specified key.
		 * 
		 * @param {String}
		 *            key key to get value
		 * @return {Object} Returns the object with the specified key. If the
		 *         object type is not an Object or key does not exists then it
		 *         returns null.
		 */
        this.getJSONObject = function (key) {
            var value = get(key);
            if (type.object(value)) {
                return value;
            } else {
                return null;
            }
        };

        /**
		 * Gets the Array object with the specified key.
		 * 
		 * @param {String}
		 *            key key to get value
		 * @return {Array} Returns the Array object with the specified key. If
		 *         the object type is not an Array or key does not exists then
		 *         it returns null.
		 */
        this.getJSONArray = function (key) {
            var value = get(key);
            if (type.object(value) && value instanceof Array) {
                return value;
            } else {
                return null;
            }
        };
        
        /**
		 * The privacy of the content
		 * 
		 * @return {String} the privacy of the content
		 */
        this.getPrivacy = function () {
            return _privacy;
        };

        /**
		 * Returns the path of the content.
		 * 
		 * @return {String} the path of the content
		 */
        this.getPath = function () {
            return _path;
        };

        /**
		 * Sets the path of the content.This is used to find the content to
		 * remove and update.
		 * 
		 * @param {String}
		 *            path path of the content
		 */
        this.setPath = function (path) {
            _path = path;
        };

        /**
		 * Returns the name of the content.
		 * 
		 * @return {String} the name of the content
		 */
        this.getObjectName = function () {
            return _objectName;
        };
        
        /**
         * Gets the createDate of the content.
         * @return {Date} the date that this content was created.
         */
        this.getCreateDate = function() {
        	return _createDate;
        };
        
        /**
         * Gets the updateDate of the content.
         * @return {Date} the date that this content was updated.
         */
        this.getUpdateDate = function() {
        	return _updateDate;
        };

        /**
		 * Sets the owner of this content as logged user. The user must login
		 * before calling this method.
		 * 
		 * @throws {NetmeraException}
		 *             if there is no logged user
		 */
        this.setOwner = function () {
            if (_currentUserSt === null)
                throw new NemeraException(EC.EC_USER_LOGIN_ERROR);

            _hasOwner = true;
        };

        /**
		 * @ignore
		 */
        this.init = function (entry) {
            setContent(entry);
        };
    };

    /**
	 * @constructor
	 * @param {Number} latitude
	 * @param {Number} longitude
	 */
    NetmeraGeoLocation = function (latitude, longitude) {
        var _latitude = latitude;
        var _longitude = longitude;

        /**
		 * Get latitude.
		 * 
		 * @return {Number} the latitude of the given location.
		 */
        this.getLatitude = function () {
            return _latitude;
        };

        /**
		 * Get longitude
		 * 
		 * @return {Number} the longitude of the given location
		 */
        this.getLongitude = function () {
            return _longitude;
        };

        /**
		 * Set latitude into the location. Latitude must be between the range of
		 * (-90.0, 90.0).
		 * 
		 * @param {Number}
		 *            latitude Location's latitude
		 */
        this.setLatitude = function (latitude) {
            _latitude = latitude;
        };

        /**
		 * Set longitude into the location. Longitude must be between the range
		 * of (-180.0, 180.0).
		 * 
		 * @param {Number}
		 *            longitude Location's longitude
		 */
        this.setLongitude = function (longitude) {
            _longitude = longitude;
        };
    };
    
    function setCurrentUser(json) {
        if (json[_request.userParams.securityToken]) {
            _currentUserSt = json[_request.userParams.securityToken];
        }

        var user = new NetmeraUser();

        if (json[_request.userParams.email]) {
            user.setEmail(json[_request.userParams.email]);
        }

        if (json[_request.userParams.nickname]) {
            user.setNickname(json[_request.userParams.nickname]);
        }

        if (json[_request.userParams.name]) {
            user.setName(json[_request.userParams.name]);
        }

        if (json[_request.userParams.surname]) {
            user.setSurname(json[_request.userParams.surname]);
        }

        _currentUser = user;
        cacheUser(user, _currentUserSt);
    }

    /**
	 * @constructor
	 */
    NetmeraUser = function () {
        var _email = null;
        var _password = null;
        var _nickname = null;
        var _name = null;
        var _surname = null;

        function setUser(json) {
            if (json[_request.userParams.emails]) {
                var emailJson = json[_request.userParams.emails][0];

                if (emailJson[_request.userParams.emailValue]) {
                    _email = emailJson[_request.userParams.emailValue];
                }
            }

            if (json[_request.userParams.nickname]) {
                _nickname = json[_request.userParams.nickname];
            }

            if (json[_request.userParams.name]) {
                var nameObj = json[_request.userParams.name];

                if (nameObj[_request.userParams.givenName]) {
                    _name = nameObj[_request.userParams.givenName];
                }

                if (nameObj[_request.userParams.familyName]) {
                    _surname = nameObj[_request.userParams.familyName];
                }
            }
        }

        function accountUpdate(onsuccess, onfail) {
            var params = {};
            params.url = _request.url + _request.rpcAlternateUrl + _request.st + _st;
            params.method = _request.post;
            params.data = {};
            params.data[_request.params.method] = _request.accountUpdateMethod;
            params.data["params"] = {};

            if (_email) {
                params.data["params"][_request.userParams.email] = _email;
            } else {
            	errorCallback(onfail, EC.EC_REQUIRED_FIELD, _request.userParams.email);
            	return;
            }

            if (_password) {
                params.data["params"][_request.userParams.password] = _password;
            } else {
            	errorCallback(onfail, EC.EC_REQUIRED_FIELD, _request.userParams.password);
            	return;
            }

            if (_name) {
                params.data["params"][_request.userParams.name] = _name;
            }

            if (_surname) {
                params.data["params"][_request.userParams.surname] = _surname;
            }

            sendRpc(params, onsuccess, onfail);
        }

        function profileUpdate(onsuccess, onfail) {
            var params = {};
            params.url = _request.url + _request.rpcAlternateUrl + _request.st + _st;
            params.method = _request.post;
            params.data = {};

            params.data[_request.params.method] = _request.profileUpdateMethod;
            params.data["params"] = {};

            if (_email) {
                params.data["params"][_request.userParams.email] = _email;
            } else {
            	errorCallback(onfail, EC.EC_REQUIRED_FIELD, _request.userParams.email);
            	return;
            }

            if (_nickname) {
                params.data["params"][_request.userParams.nickname] = _nickname;
            } else {
            	errorCallback(onfail, EC.EC_REQUIRED_FIELD, _request.userParams.nickname);
            	return;
            }

            if (_name) {
                params.data["params"][_request.userParams.name] = _name;
            }

            if (_surname) {
                params.data["params"][_request.userParams.surname] = _surname;
            }

            sendRpc(params, onsuccess, onfail);
        }

        /**
		 * Registers new user. Before calling this method email,password and
		 * nickname fields of the NetmeraUser should be setted. Those are the
		 * compulsory fields. There are also optional name and surname fields.
		 * 
		 * @param {Function}
		 *            onsuccess callback function called when register is
		 *            successful
		 * @param {Function}
		 *            onfail callback function called when register failed
		 */
        this.register = function (onsuccess, onfail) {
        	if (checkApiKey(_st, onfail)) {
        		var params = {};
                params.url = _request.url + _request.rpcUrl + _request.registerUserMethod + _request.st + _st;
                params.method = _request.post;
                params.data = {};
                if (_email) {
                    params.data[_request.userParams.email] = _email;
                } else {
                    errorCallback(onfail, EC.EC_REQUIRED_FIELD, _request.userParams.email);
                    return;
                }

                if (_nickname) {
                    params.data[_request.userParams.nickname] = _nickname;
                } else {
                	errorCallback(onfail, EC.EC_REQUIRED_FIELD, _request.userParams.nickname);
                	return;
                }

                if (_password) {
                    params.data[_request.userParams.password] = _password;
                } else {
                	errorCallback(onfail, EC.EC_REQUIRED_FIELD, _request.userParams.password);
                	return;
                }

                if (_name) {
                    params.data[_request.userParams.name] = _name;
                }

                if (_surname) {
                    params.data[_request.userParams.surname] = _surname;
                }

                send(params, function (response) {
                    if (response.entry) {
                        setUser(response.entry);
                        if (type.func(onsuccess)) {
                            onsuccess();
                        }
                    } else {
                        errorCallback(onfail, EC.EC_INVALID_RESPONSE);
                    }
                }, onfail);
        	}
        };

        /**
		 * Updates user info. Before calling this method email,password and
		 * nickname fields of the NetmeraUser should be setted. Those are the
		 * compulsory fields.
		 * 
		 * @param {Function}
		 *            onsuccess callback function called when update is
		 *            successful
		 * @param {Function}
		 *            onfail callback function called when update failed.
		 */
        this.update = function (onsuccess, onfail) {
        	if (checkApiKey(_st, onfail)) {
        		if (!_email) {
        			errorCallback(onfail, EC.EC_REQUIRED_FIELD, _request.userParams.email);
                    return;
                }

                if (_nickname) {
                    profileUpdate(function (response) {
                        if (response && response.data) {
                            if (_password) {
                                accountUpdate(function (response) {
                                    if (!response || !response.data) {
                                        errorCallback(onfail, EC.EC_INVALID_RESPONSE);
                                    } else {
    									setUser(response.data);
                                        if (type.func(onsuccess)) {
                                            onsuccess();
                                        }
                                    }
                                }, onfail);
                            } else {
    							setUser(response.data);
                                if (type.func(onsuccess)) {
                                    onsuccess();
                                }
                            }
                        } else {
                            errorCallback(onfail, EC.EC_INVALID_RESPONSE);
                        }
                    }, onfail);
                } else if (_password) {
                    accountUpdate(function (response) {
                        if (response && response.data) {
                            setUser(response.data);
                            if (type.func(onsuccess)) {
                                onsuccess();
                            }
                        } else {
                            errorCallback(onfail, EC.EC_INVALID_RESPONSE);
                        }
                    }, onfail);
                }
        	}
        };

        /**
		 * Activates the registered User.
		 * 
		 * @param {String}
		 *            email email address of the user to be activated
		 * @param {Function}
		 *            onsuccess callback function called when activateUser is
		 *            successful
		 * @param {Function}
		 *            onfail callback function called when activateUser failed
		 */
        this.activateUser = function (email, onsuccess, onfail) {
        	if (checkApiKey(_st, onfail)) {
        		var params = {};
                params.url = _request.url + _request.rpcAlternateUrl + _request.st + _st;
                params.method = _request.post;
                params.data = {};

                params.data[_request.params.method] = _request.activateUserMethod;
                params.data["params"] = {};

                if (email) {
                    params.data["params"][_request.userParams.email] = email;
                } else {
                	errorCallback(onfail, EC.EC_REQUIRED_FIELD, _request.userParams.email);
                	return;
                }

                sendRpc(params, function (response) {
                    if (response && response.data) {
                        if (type.func(onsuccess)) {
                            onsuccess();
                        }
                    } else {
                        errorCallback(onfail, EC.EC_INVALID_RESPONSE);
                    }
                }, onfail);
        	}
        };

        /**
		 * Deactivates the registered User.
		 * 
		 * @param {String}
		 *            email email address of the user to be deactivated
		 * @param {Function}
		 *            onsuccess callback function called when deactivateUser is
		 *            successful
		 * @param {Function}
		 *            onfail callback function called when deactivateUser failed
		 */
        this.deactivateUser = function (email, onsuccess, onfail) {
        	if (checkApiKey(_st, onfail)) {
        		var params = {};
                params.url = _request.url + _request.rpcAlternateUrl + _request.st + _st;
                params.method = _request.post;
                params.data = {};

                params.data[_request.params.method] = _request.deactivateUserMethod;
                params.data["params"] = {};

                if (email) {
                    params.data["params"][_request.userParams.email] = email;
                } else {
                	errorCallback(onfail, EC.EC_REQUIRED_FIELD, _request.userParams.email);
                	return;
                }

                sendRpc(params, function (response) {
                    if (response && response.data) {
                        if (type.func(onsuccess)) {
                            onsuccess();
                        }
                    } else {
                        errorCallback(onfail, EC.EC_INVALID_RESPONSE);
                    }
                }, onfail);
        	}
        };

        /**
		 * Returns the email of the user
		 * 
		 * @return {String} the email of the user
		 */
        this.getEmail = function () {
            return _email;
        };

        /**
		 * Sets the email of the user
		 * 
		 * @param {String}
		 *            email email of the user
		 */
        this.setEmail = function (email) {
            _email = email;
        };

        /**
		 * Sets the password of the user
		 * 
		 * @param {String}
		 *            password password of the user
		 */
        this.setPassword = function (password) {
            _password = password;
        };

        /**
		 * Returns the nickname of the user
		 * 
		 * @return {String} the nickname of the user
		 */
        this.getNickname = function () {
            return _nickname;
        };

        /**
		 * Sets the nickname of the user
		 * 
		 * @param {String}
		 *            nickname the nickname of the user
		 */
        this.setNickname = function (nickname) {
            _nickname = nickname;
        };

        /**
		 * Returns the name of the user
		 * 
		 * @return {String} the name of the user
		 */
        this.getName = function () {
            return _name;
        };

        /**
		 * Sets the name of the user
		 * 
		 * @param {String}
		 *            name the name of the user
		 */
        this.setName = function (name) {
            _name = name;
        };

        /**
		 * Returns the surname of the user
		 * 
		 * @return {String} the surname of the user
		 */
        this.getSurname = function () {
            return _surname;
        };

        /**
		 * Sets the surname of the user
		 * 
		 * @param {String}
		 *            surname the surname of the user
		 */
        this.setSurname = function (surname) {
            _surname = surname;
        };
    };

    /**
	 * @constructor
	 */
    NetmeraClient = function () { };
    /**
	 * Authenticates user and application. It is recommended to call this method
	 * at the beginning of the program.
	 * 
	 * @param {String}
	 *            apiKey User and Application specific key
	 */
    NetmeraClient.init = function (apiKey) {
        _st = encodeURIComponent(apiKey);
    };

    /**
	 * It creates the NetmeraUser service object. It is used to search users.
	 * 
	 * @return {NetmeraService} the NetmeraUser service object to search users
	 */
    NetmeraService.getNetmeraUserService = function () {
        return new NetmeraService();
    };

    /**
	 * @class Enumeration which is used to set sort order of NetmeraService
	 * @name NetmeraService.SortOrder
	 */
    NetmeraService.SortOrder = {
        /**
		 * Sort order type used to sort the data in an ascending order
		 */
        ascending: "ascending",

        /**
		 * Sort order type used to sort the data in a descending order
		 */
        descending: "descending"
    };
	
	/**
	 * @class Enumeration which is used to set sort by of NetmeraService
	 * @name NetmeraService.SortBy
	 */
	NetmeraService.SortBy = {
		/**
		 * @constant
		 * @description Sort by type to be able to sort data by their distance to the center
		 * in location based searches.
		 */
		NEARBY: "nearyby_netmera_forlocation"
	};

    /**
	 * Returns the current logged user. If no user logged in then it returns
	 * null.
	 * 
	 * @return {NetmeraUser} Returns current logged user if a user is logged,
	 *         otherwise it returns null
	 */
    NetmeraUser.getCurrentUser = function () {
        return _currentUser;
    };

    /**
	 * Logs a user into the registered application. Email and password fields of
	 * user is used for this operation.
	 * 
	 * @param {String}
	 *            email email of the user
	 * @param {String}
	 *            password password of the user
	 * @param {Function}
	 *            onsuccess callback function called when login is successful
	 * @param {Function}
	 *            onfail callback function called when login failed
	 */
    NetmeraUser.login = function (email, password, onsuccess, onfail) {
    	if (checkApiKey(_st, onfail)) {
    		var params = {};
            params.url = _request.url + _request.rpcAlternateUrl + _request.st + _st;
            params.method = _request.post;
            params.data = {};
            params.data[_request.params.method] = _request.loginUserMethod;
            params.data["params"] = {};

            if (email) {
                params.data["params"][_request.userParams.email] = email;
            } else {
            	errorCallback(onfail, EC.EC_REQUIRED_FIELD, _request.userParams.email);
            	return;
            }

            if (password) {
                params.data["params"][_request.userParams.password] = password;
            } else {
            	errorCallback(onfail, EC.EC_REQUIRED_FIELD, _request.userParams.password);
                return;
            }

            sendRpc(params, function (response) {
                if (response && response.data) {
                    setCurrentUser(response.data);
                    if (type.func(onsuccess)) {
                        onsuccess(_currentUser);
                    }
                } else {
                    errorCallback(onfail, EC.EC_INVALID_RESPONSE);
                }
            }, onfail);
    	}
    };
    
    /**
     * Logs a guest into the application.
     */
    NetmeraUser.loginAsGuest = function(onsuccess, onfail) {
    	if (checkApiKey(_st, onfail)) {
    		var params = {};
            params.url = _request.url + _request.rpcAlternateUrl + _request.st + _st;
            params.method = _request.post;
            params.data = {};
            params.data[_request.params.method] = _request.loginGuestUserMethod;
            
            sendRpc(params, function (response) {
                if (response && response.data) {
                    setCurrentUser(response.data);
                    if (type.func(onsuccess)) {
                        onsuccess(_currentUser);
                    }
                } else {
                    errorCallback(onfail, EC.EC_INVALID_RESPONSE);
                }
            }, onfail);
    	}
    };

    /**
	 * User logged out from the application.
	 */
    NetmeraUser.logout = function () {
        _currentUserSt = null;
        _currentUser = null;
        clearCaches();
    };

    /**
	 * @constructor
	 * @param {String} mediaUrl
	 */
    NetmeraMedia = function (mediaUrl) {
        var _mediaUrl = mediaUrl;
        var _url = null;

        /** @ignore */
        this.getFile = function () {
            return _mediaUrl;
        };

        /**
		 * Returns the URL of file with the given size.
		 * 
		 * @param {NetmeraMedia.PhotoSize} size size of the image
		 * @return {String} the URL of file with the given size.
		 * @example 
		 * var service = new NetmeraService("Blog");
		 * service.setPath("/mobimeracontents/_34");
		 * service.get(function(content) {
		 *     var media = content.getNetmeraMedia("image");
		 *     var url = media.getUrl(NetmeraMedia.PhotoSize.THUMBNAIL);
		 *     // do something with the url
		 * }, function(error) {
		 *     // handle exception
		 * });
		 */
        this.getUrl = function (size) {
            if (_url) {
                switch (size) {
                    case NetmeraMedia.PhotoSize.LARGE:
                    case NetmeraMedia.PhotoSize.MEDIUM:
                    case NetmeraMedia.PhotoSize.SMALL:
                    case NetmeraMedia.PhotoSize.THUMBNAIL:
                        return _url.replace("/org", size);
                    case NetmeraMedia.PhotoSize.DEFAULT:
                    default:
                    	return _url;
                }
            } else {
                return null;
            }
        };

        /** @ignore */
        this.init = function (url) {
            _url = url;
        };
    };

    /**
	 * @class Type of the photo size.
	 * @name NetmeraMedia.PhotoSize
	 */
    NetmeraMedia.PhotoSize = {
        /**
		 * @constant
		 * @description This is the original image size.If no photo size is setted then original size is used.
		 */
        DEFAULT: '/org',
        /**
		 * @constant
		 * @description Image size is defined as 300x350 px
		 */
        LARGE: '/large',
        /**
		 * @constant
		 * @description Image size is defined as 180x250 px
		 */
        MEDIUM: '/medium',
        /**
		 * @constant
		 * @description Image size is defined as 82x82 px
		 */
        SMALL: '/small',
        /**
		 * @constant
		 * @description Image size is defined as 41x41
		 */
        THUMBNAIL: '/thumbnail'
    };
    
    PushChannel = {};
    
    /**
     * @constant
     * @description IOS channel
     */
    PushChannel.ios = "ios";
    
    /**
     * @constant
     * @description Android channel
     */
    PushChannel.android = "android";
    
    /**
     * @constant
     * @description Windows Phone channel
     */
    PushChannel.windowsPhone = "wp";
    
    NetmeraPrivacy = {};
    
    /**
     * @constant
     */
    NetmeraPrivacy.PUBLIC = "public";
    
    /**
     * @constant
     */
    NetmeraPrivacy.PRIVATE = "private";
    
    /**
     * @constructor
     */
    NetmeraPushService = {};
    
    /**
     * Returns device groups registered in the app.
     * @param {Function} onsuccess callback function which is called when device groups are returned by the server.
     * @param {Function} onfail callback function which is called when any error occur.
     */
    NetmeraPushService.getDeviceGroups = function(onsuccess, onfail) {
    	if (checkApiKey(_st, onfail)) {
    		var params = {};
    		params.url = _request.url + _request.push.url + _request.push.deviceGroups + _request.pushParams.apiKey + _st;
    		params.method = _request.post;
    		
    		send(params, function(response) {
    			if (response.code == 1000) {
    				if (type.func(onsuccess)) {
    					var groupArr = [];
    					for (var i = 0; i < response.result.length; i++) {
    						groupArr.push(response.result[i].groupName);
    					}
    					onsuccess(groupArr);
    				}
    			} else {
    				errorCallback(onfail, EC.EC_IO_EXCEPTION);
    			}
    		}, onfail);
    	}
    };
    
    /**
     * @constructor
     */
    NetmeraPushDetail = function() {
    	var _path = "";
    	var _status = "";
    	var _error = "";
    	var _successful = 0;
    	var _failed = 0;
    	var _message = "";
    	var _sendDate = null;
    	
    	/**
    	 * Returns the path of NetmeraPushDetail object
    	 * @returns {String} path of NetmeraPushDetail object
    	 */
    	this.getPath = function() {
    		return _path;
    	};
    	
    	/**
    	 * Sets the path of NetmeraPushDetail object
    	 * @param {String} path path to set
    	 */
    	this.setPath = function(path) {
    		_path = path;
    	};
    	
    	/**
    	 * Returns the status of NetmeraPushDetail object
    	 * @returns {String} status of NetmeraPushDetail object
    	 */
    	this.getStatus = function() {
    		return _status;
    	};
    	
    	/**
    	 * Sets the status of NetmeraPushDetail object
    	 * @param {String} status status to set
    	 */
    	this.setStatus = function(status) {
    		_status = status;
    	};
    	
    	/**
    	 * Returns the error message of the push message
    	 * @returns {String} error message of the push message
    	 */
    	this.getError = function() {
    		return _error;
    	};
    	
    	/**
    	 * Sets the error message of the push message
    	 * @param {String} error error message to set 
    	 */
    	this.setError = function(error) {
    		_error = error;
    	};
    	
    	/**
    	 * Returns the success count of the push message
    	 * @returns {Number} the success count of the push message
    	 */
    	this.getSuccessful = function() {
    		return _successful;
    	};
    	
    	/**
    	 * Sets the success count of the push message
    	 * @param {Number} successful success count to set 
    	 */
    	this.setSuccessful = function(successful) {
    		_successful = successful;
    	};
    	
    	/**
    	 * Returns the number of failed devices while sending the push message
    	 * @returns {Number} the number of failed devices while sending the push message
    	 */
    	this.getFailed = function() {
    		return _failed;
    	};
    	
    	/**
    	 * Sets the number of failed devices.
    	 * @param {Number} failed the number of failed devives to set.
    	 */
    	this.setFailed = function(failed) {
    		_failed = failed;
    	};
    	
    	/**
    	 * Returns the message sent as push notification.
    	 * @returns {String} the message sent as push notification.
    	 */
    	this.getMessage = function() {
    		return _message;
    	};
    	
    	/**
    	 * Sets the message of this NetmeraPushDetail object.
    	 * @param message the message to set.
    	 */
    	this.setMessage = function(message) {
    		_message = message;
    	};
    	
    	/**
    	 * Returns the send date of this push message.
    	 * @returns {Date} the send date of this push message.
    	 */
    	this.getSendDate = function() {
    		return _sendDate;
    	};
    	
    	/**
    	 * Sets the send date of this NetmeraPushDetail object.
    	 * @param sendDate the send date to set.
    	 */
    	this.setSendDate = function(sendDate) {
    		_sendDate = sendDate;
    	};
    };
    
    function createPushDetail(json) {
    	var detail = new NetmeraPushDetail();
    	if (json.code == 1000) {
    		var result = json.result;
    		detail.setError(result.error);
    		detail.setFailed(result.failed);
    		detail.setMessage(result.message);
    		detail.setPath(result.path);
    		detail.setSendDate(new Date(result.sendDate));
    		detail.setStatus(result.status);
    		detail.setSuccessful(result.successful);
    	} else {
    		detail.setError(json.message);
    	}
    	return detail;
    }
    
    function createPushDetailMap(json) {
    	var pushDetails = {};
    	if (json.result) {
    		if (json.result.ios) {
    			pushDetails[PushChannel.ios] = createPushDetail(json.result.ios);
    		}
    		
    		if (json.result.android) {
    			pushDetails[PushChannel.android] = createPushDetail(json.result.android);
    		}
    	}
    	return pushDetails;
    }
    
    var PUSH_LOCTYPE_NORMAL = 0;
	var PUSH_LOCTYPE_BOX = 1;
	var PUSH_LOCTYPE_CIRCLE = 2;
    
    function sendPush(message, deviceGroups, types, locParams, onsuccess, onfail) {
    	if (!message) {
			errorCallback(onfail, EC.EC_PUSH_MESSAGE);
			return;
		}
		
    	var params = {};
		params.url = _request.url + _request.push.url + _request.push.send + _request.pushParams.apiKey + _st;
		params.method = _request.post;
		params.data = {};
		params.data[_request.pushParams.message] = message;
		params.data[_request.pushParams.channels] = JSON.stringify(types);
		
		if (deviceGroups) {
			params.data[_request.pushParams.deviceGroups] = JSON.stringify(deviceGroups);
		}
		
		switch(locParams.type) {
			case PUSH_LOCTYPE_BOX:
				params.data[_request.pushParams.loctype] = _request.pushParams.box;
				params.data[_request.pushParams.lat1] = locParams.geoloc1.getLatitude();
				params.data[_request.pushParams.lng1] = locParams.geoloc1.getLongitude();
				params.data[_request.pushParams.lat2] = locParams.geoloc2.getLatitude();
				params.data[_request.pushParams.lng2] = locParams.geoloc2.getLongitude();
				break;
			case PUSH_LOCTYPE_CIRCLE:
				params.data[_request.pushParams.loctype] = _request.pushParams.circle;
				params.data[_request.pushParams.lat1] = locParams.geoloc1.getLatitude();
				params.data[_request.pushParams.lng1] = locParams.geoloc1.getLongitude();
				params.data[_request.pushParams.distance] = locParams.distance;
				break;
		}
		
		send(params, function(response) {
			if (response.code == 1000) {
				if (type.func(onsuccess)) {
					var details = createPushDetailMap(response);
					onsuccess(details);
				}
			} else {
				errorCallback(onfail, EC.EC_PUSH_SEND);
			}
		}, onfail);
    }
    
    /**
     * @constructor
     */
    BasePush = function() {
    	var _message = null;
    	var _deviceGroups = null;
    	var _locParams = {};
    	_locParams.type = PUSH_LOCTYPE_NORMAL;
    	
    	/**
    	 * Sets device groups that will receive this push notification.
    	 * @param {Array} deviceGroups string array that holds device groups being set.
    	 */
    	this.setDeviceGroups = function(deviceGroups) {
    		_deviceGroups = deviceGroups;
    	};
    	
    	/**
    	 * Sets a single device group that will receive this push notification.
    	 * This will remove other device groups which are set before.
    	 * @param  {String} deviceGroup the deviceGroup which will receive this push notification.
    	 */
    	this.setDeviceGroup = function(deviceGroup) {
    		_deviceGroups = [];
    		_deviceGroups.push(deviceGroup);
    	};
    	
    	/**
    	 * Returns device groups which will receive this push notification.
    	 * @return {Array} deviceGroups device groups which will receive this push notification. 
    	 */
    	this.getDeviceGroups = function() {
    		return _deviceGroups;
    	};
    	
    	/**
    	 * Sets the message of this push notification
    	 * @param {String} message the message to be sent as push notification.
    	 */
    	this.setMessage = function(message) {
    		_message = message;
    	};
    	
    	/**
    	 * Returns the message which will be sent as push notification.
    	 * @return {String} the message which will be sent.
    	 */
    	this.getMessage = function() {
    		return _message;
    	};
    	
    	/**
    	 * Sends the push notification.
    	 */
    	this.sendNotification = function() {};
    	
    	/**
    	 * Sets the search type of this push notification to circle search.
    	 * @param {NetmeraGeoLocation} center center point of the circle.
    	 * @param {Number} distance radius of the circle in kilometers. 
    	 */
    	this.setCirclePush = function(center, distance) {
    		_locParams.type = PUSH_LOCTYPE_CIRCLE;
    		_locParams.geoloc1 = center;
    		_locParams.distance = distance;
    	};
    	
    	/**
    	 * Sets the search type of this push notification to box search. 
    	 * @param {NetmeraGeoLocation} geosw south-west point of the box 
    	 * @param {NetmeraGeoLocation} geone north-east point of the box
    	 */
    	this.setBoxPush = function(geosw, geone) {
    		_locParams.type = PUSH_LOCTYPE_BOX;
    		_locParams.geoloc1 = geosw;
    		_locParams.geoloc2 = geone;
    	};
    	
    	/**
    	 * @ignore
    	 */
    	this._getLocParams = function() {
    		return _locParams;
    	};
    	
    };
    
    /**
     * @constructor
     */
    NetmeraPush = function() {
    	var _sendToIos = false;
    	var _sendToAndroid = false;
    	var _sendToWP = false;
    	
    	/**
    	 * Sets this push notification to send to ios devices.
    	 * @param {Boolean} sendToIos decides whether or not this push notification will be sent to ios devices. 
    	 */
    	this.setSendToIos = function(sendToIos) {
    		_sendToIos = sendToIos;
    	};
    	
    	/**
    	 * Sets this push notification to send to android devices.
    	 * @param {Boolean} sendToAndroid decides whether or not this push notification will be sent to android devices. 
    	 */
    	this.setSendToAndroid = function(sendToAndroid) {
    		_sendToAndroid = sendToAndroid;
    	};
    	
    	/**
    	 * Sets this push notification to send to windows phone devices.
    	 * @param {Boolean} sendToWP decides whether or not this push notification will be sent to windows phone devices.
    	 */
    	this.setSendToWindowsPhone = function(sendToWP) {
    		_sendToWP = sendToWP;
    	};
    	
    	/**
    	 * Sends this push notification to the related devices, which are set with <code>setSendToIos</code> and <code>setSendToAndroid</code> methods.
    	 * @param {Function} onsuccess success callback which is called when the operation is successful.
    	 * @param {Function} onfail failure callback which is called when the operation is failed. 
    	 */
    	this.sendNotification = function(onsuccess, onfail) {
    		if (checkApiKey(_st, onfail)) {
    			var types = [];
        		if (_sendToIos) {
        			types.push(PushChannel.ios);
        		}
        		
        		if (_sendToAndroid) {
        			types.push(PushChannel.android);
        		}
        		
        		if (_sendToWP) {
        			types.push(PushChannel.windowsPhone);
        		}
        		sendPush(this.getMessage(), this.getDeviceGroups(), types, this._getLocParams(), onsuccess, onfail);
    		}
    	};
    };
    
    NetmeraPush.prototype = new BasePush();
    
    /**
     * @constructor
     */
    NetmeraAndroidPush = function() {
    	/**
    	 * Sends this push notification to the related devices, which are set with <code>setDeviceGroups</code> or <code>setDeviceGroup</code> methods.
    	 * @param {Function} onsuccess success callback which is called when the operation is successful.
    	 * @param {Function} onfail failure callback which is called when the operation is failed. 
    	 */
    	this.sendNotification = function(onsuccess, onfail) {
    		if (checkApiKey(_st, onfail)) {
    			var types = [PushChannel.android];
        		sendPush(this.getMessage(), this.getDeviceGroups(), types, this._getLocParams(), onsuccess, onfail);
    		}
    	};
    };
    
    NetmeraAndroidPush.prototype = new BasePush();
    
    /**
     * @constructor
     */
    NetmeraIOSPush = function() {
    	/**
    	 * Sends this push notification to the related devices, which are set with <code>setDeviceGroups</code> or <code>setDeviceGroup</code> methods.
    	 * @param {Function} onsuccess success callback which is called when the operation is successful.
    	 * @param {Function} onfail failure callback which is called when the operation is failed. 
    	 */
    	this.sendNotification = function(onsuccess, onfail) {
    		if (checkApiKey(_st, onfail)) {
    			var types = [PushChannel.ios];
        		sendPush(this.getMessage(), this.getDeviceGroups(), types, this._getLocParams(), onsuccess, onfail);
    		}
    	};
    };
    
    NetmeraIOSPush.prototype = new BasePush();
    
    /**
     * @constructor
     */
    NetmeraWindowsPhonePush = function() {
    	/**
    	 * Sends this push notification to the related devices, which are set with <code>setDeviceGroups</code> or <code>setDeviceGroup</code> methods.
    	 * @param {Function} onsuccess success callback which is called when the operation is successful.
    	 * @param {Function} onfail failure callback which is called when the operation is failed. 
    	 */
    	this.sendNotification = function(onsuccess, onfail) {
    		if (checkApiKey(_st, onfail)) {
    			var types = [PushChannel.windowsPhone];
    			sendPush(this.getMessage(), this.getDeviceGroups(), types, this._getLocParams(), onsuccess, onfail);
    		}
    	};
    };
    
    NetmeraWindowsPhonePush.prototype = new BasePush();
    
    function facebookStatus(onsuccess, onfail) {
    	FB.getLoginStatus(function(response) {
			if (response.status === _request.facebook.connected) {
				onsuccess();
			} else if (response.status === _request.facebook.notAuth) {
				onfail();
			} else {
				onfail();
			}
		}, true);
    }
    
    function facebookLogin(permissions, onsuccess, onfail) {
    	var perms = permissions.join(",");
    	FB.login(function(response) {
	        if (response.authResponse) {
	            onsuccess();
	        } else {
	            errorCallback(onfail, EC.EC_FACEBOOK_LOGIN);
	        }
	    }, {scope: perms});
    }
    
    function facebookGetMe(permissions, onsuccess, onfail) {
    	facebookStatus(function() {
    		FB.api(_request.facebook.me, function(response) {
                onsuccess(response);
            });
    	}, function() {
    		facebookLogin(permissions, function() {
    			FB.api(_request.facebook.me, function(response) {
                    onsuccess(response);
                });
    		}, onfail);
    	});
    }
    
    function registerAndLogin(fbId, nickname, name, surname, email, onsuccess, onfail) {
    	var params = {};
        params.url = _request.url + _request.rpcAlternateUrl + _request.st + _st;
        params.method = _request.post;
        params.data = {};
        params.data[_request.params.method] = _request.facebookLoginMethod;
        params.data.params = {};
        params.data.params[_request.userParams.facebookId] = fbId;
        params.data.params[_request.userParams.nickname] = nickname;
        params.data.params[_request.userParams.name] = name;
        params.data.params[_request.userParams.surname] = surname;
        params.data.params[_request.userParams.email] = email;
        
        sendRpc(params, function(response) {
        	if (response.data && response.data.nickname) {
        		setCurrentUser(response.data);
        		onsuccess(_currentUser);
        	} else {
        		errorCallback(onfail, EC.EC_FACEBOOK_RESPONSE);
        	}
        }, onfail);
    }
    
    /**
     * @constructor
     */
    NetmeraFacebookUtils = function() {};
    
    /**
     * Initiliazes facebook object
     * @param {Object} params map of parameters needed to initialize Facebook JS SDK.
     */
    NetmeraFacebookUtils.initialize = function(params) {
    	if (type.undef(FB) || !FB || !FB.init) {
    		throwNetmeraException(EC.EC_ASSERTION_ERROR, false, "Please call initialize method inside window.fbAsyncInit function.");
    	}
    	
    	FB.init(params);
    };
    
    /**
     * Logs a user into the registered application with Facebook account with Facebook permissions.
     * @param {Array} permissions a string array which contains permissions to be asked to user.
     * @param {Function} onsuccess callback function which is called when login operation is successful
     * @param {Function} onfail callback function which is called when login operation is unsuccessful
     */
    NetmeraFacebookUtils.login = function(permissions, onsuccess, onfail) {
    	if (checkApiKey(_st, onfail)) {
    		facebookGetMe(permissions, function(response) {
        		var askForEmail = false;
        		if (permissions instanceof Array && permissions.indexOf(_request.facebook.email) != -1) {
        			askForEmail = true;
        		}
        		
        		var fbId;
        		if (response[_request.facebook.userid]) {
        			fbId = response[_request.facebook.userid];
        		} else {
        			onfail();
        			return;
        		}
        		
        		var nickname;
        		if (response[_request.facebook.username]) {
        			nickname = response[_request.facebook.username];
        		} else {
        			onfail();
        			return;
        		}
        		
        		var name = "";
        		if (response[_request.facebook.firstName]) {
        			name = response[_request.facebook.firstName];
        		}
        		
        		var surname = "";
        		if (response[_request.facebook.lastName]) {
        			surname = response[_request.facebook.lastName];
        		}
        		
        		var email = "";
        		if (askForEmail && response[_request.facebook.email]) {
        			email = response[_request.facebook.email];
        		}
        		
        		registerAndLogin(fbId, nickname, name, surname, email, onsuccess, onfail);
        	}, function() {
        		onfail();
        	});
    	}
    };
    
    function Twitter() {
    	var _token = "";
    	var _secret = "";
    	
    	this.setAccessToken = function(token) {
    		_token = token;
    	};
    	
    	this.getAccessToken = function() {
    		return _token;
    	};
    	
    	this.setSecretToken = function(token) {
    		_secret = token;
    	};
    	
    	this.getSecretToken = function() {
    		return _secret;
    	};
    }
    
    /**
     * @constructor
     */
    NetmeraTwitterUtils = function() {};
    
    var _consumerKey = "";
    var _consumerSecret = "";
    var _twitter = null;
    
    function sendSigned(params, onsuccess, onfail) {
    	var request = getXMLHttpRequest();
    	if (!request) {
    		errorCallback(onfail, EC.EC_IO_EXCEPTION);
    		return;
    	}
    	
    	request.open(params.method, params.url, true);
    	request.setRequestHeader("Authorization", params[_request.params.oauthHeaders]);
    	request.onreadystatechange = function() {
    		if (request.readyState == 4) {
    			if (request.status == 200) {
    				onsuccess(request.responseText);
    			} else {
    				errorCallback(onfail, EC.EC_IO_EXCEPTION);
    			}
    		}
    	};
    	request.ontimeout = function() {
    		errorCallback(onfail, EC.EC_IO_EXCEPTION);
    	};
    	
    	request.send(null);
    }
    
    function createOAuthHeaders(url, params, accessor, method) {
    	var message = {
        	"action": url,
        	"method": method.toLowerCase(),
        	"parameters": [
      			["oauth_consumer_key", _consumerKey],
      			["oauth_signature_method", "HMAC-SHA1"],
      			["oauth_timestamp",""],
      			["oauth_nonce",""],
      			["oauth_signature",""]
      		]
        };
    	
    	if (params.oauth_callback) {
    		message.parameters.push([_request.twitter.oauthCallback, params.oauth_callback]);
    	}
    	
    	if (params.oauth_token) {
    		message.parameters.push([_request.twitter.oauthToken, params.oauth_token]);
    	}
    	
    	if (params.oauth_verifier) {
    		message.parameters.push([_request.twitter.oauthVerifier, params.oauth_verifier]);
    	}
    	
    	if (params.oauth_version) {
    		message.parameters.push([_request.twitter.oauthVersion, params.oauth_version]);
    	}
    	
    	OAuth.setTimestampAndNonce(message);
        OAuth.SignatureMethod.sign(message, accessor);
        var oauthParams = OAuth.getAuthorizationHeader("", message.parameters);
        return oauthParams;
    }
    
    function getVariable(query, variable) {
		var vars = query.split("&");
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split("=");
			if (pair[0] == variable) {
				return pair[1];
			}
		}
		return false;
	}
    
    function twitterPopup (url, onsuccess, onfail) {
    	var newwindow = window.open(url, 'Sign In With Twitter', 'height=800,width=600');
    	if (window.focus) {
    		newwindow.focus();
    	}
    	
    	window.netmeraTwitterCallback = function(oauthToken, oauthVerifier) {
    		onsuccess(oauthToken, oauthVerifier);
    	};
    	
    	window.netmeraTwitterFailCallback = function() {
    		errorCallback(onfail, EC.EC_IO_EXCEPTION);
    	};
    	
    	return newwindow;
    }
    
    function getAccessor(consumerSecret, secretToken) {
    	var accessor = {};
    	accessor.consumerSecret = consumerSecret;
    	accessor.tokenSecret = secretToken;
    	return accessor;
    }
    
    function getQueryParams(query) {
    	var params = {};
    	var pairs = query.split('&');
    	for (var i = 0; i < pairs.length; i++) {
    		var pair = pairs[i].split('=');
    		params[pair[0]] = pair[1];
    	}
    	return params;
    }
    
    function getRequestToken(onsuccess, onfail) {
    	var params = {};
    	params[_request.twitter.oauthCallback] = _request.twitter.netmeraCallback;
    	
    	var accessor = getAccessor(_consumerSecret, "");
      	var oauthHeaders = createOAuthHeaders(_request.twitter.requestTokenUrl, params, accessor, _request.post);
      	var requestParams = {};
      	requestParams.url = _request.twitter.requestTokenUrl;
      	requestParams.method = _request.post;
      	requestParams[_request.params.oauthHeaders] = oauthHeaders;
      	sendSigned(requestParams, function(resp) {
      		var token = getQueryParams(resp);
      		if (token[_request.twitter.oauthToken]) {
      			onsuccess(token[_request.twitter.oauthToken]);
      		} else {
      			errorCallback(onfail, EC.EC_IO_EXCEPTION);
      		}
      	}, onfail);
    }
    
    function getActionToken(oauthToken, oauthVerifier, onsuccess, onfail) {
    	var params = {};
    	params[_request.twitter.oauthToken] = oauthToken;
    	params[_request.twitter.oauthVerifier] = oauthVerifier;
    	
    	var accessor = getAccessor(_consumerSecret, "");
    	var oauthHeaders = createOAuthHeaders(_request.twitter.accessTokenUrl, params, accessor, _request.post);
    	var requestParams = {};
    	requestParams.url = _request.twitter.accessTokenUrl;
    	requestParams.method = _request.post;
    	requestParams[_request.params.oauthHeaders] = oauthHeaders;
    	sendSigned(requestParams, function(resp) {
    		var accessToken = "", secretToken = "";
    		var token = getQueryParams(resp);
    		
    		if (!token[_request.twitter.oauthToken] || !token[_request.twitter.oauthSecret]) {
    			errorCallback(onfail, EC.EC_IO_EXCEPTION);
    			return;
    		} else {
    			accessToken = token[_request.twitter.oauthToken];
    			secretToken = token[_request.twitter.oauthSecret];
    		}
    		
    		var twitter = new Twitter();
    		twitter.setAccessToken(accessToken);
    		twitter.setSecretToken(secretToken);
    		cacheTwitter(twitter);
    		onsuccess(twitter);
    	}, onfail);
    }
    
    function getTwitterUserData(onsuccess, onfail) {
    	if (_twitter) {
    		var params = {};
    		params[_request.twitter.oauthToken] = _twitter.getAccessToken();
    		params[_request.twitter.oauthVersion] = _request.twitter.oauthVersionValue;
    		
    		var accessor = getAccessor(_consumerSecret, _twitter.getSecretToken());
    		var oauthHeaders = createOAuthHeaders(_request.twitter.verifyCredentialsUrl, params, accessor, _request.get);
    		var requestParams = {};
        	requestParams.url = _request.twitter.verifyCredentialsUrl;
        	requestParams.method = _request.get;
        	requestParams[_request.params.oauthHeaders] = oauthHeaders;
        	sendSigned(requestParams, function(response) {
        		var resp = JSON.parse(response);
        		var nickname = "";
        		var name = "";
        		var surname = "";
        		var userid = "";
        		
        		if (resp[_request.twitter.userid] && resp[_request.twitter.nickname]) {
        			userid = resp[_request.twitter.userid];
        			nickname = resp[_request.twitter.nickname];
        		} else {
        			errorCallback(onfail, EC.EC_IO_EXCEPTION);
        			return;
        		}
        		
        		if (resp[_request.twitter.name]) {
        			var fullname = resp[_request.twitter.name];
        			var index = fullname.indexOf(" ");
        			if (index != -1) {
        				name = fullname.substr(0, index);
        				surname = fullname.substr(index + 1);
        			} else {
        				name = fullname;
        			}
        		}
        		
        		onsuccess(nickname, userid, name, surname);
        	}, onfail);
    	} else {
    		errorCallback(onfail, EC.EC_IO_EXCEPTION);
    	}
    }
    
    function twitterRegisterAndLogin(nickname, userid, name, surname, onsuccess, onfail) {
    	var params = {};
        params.url = _request.url + _request.rpcAlternateUrl + _request.st + _st;
        params.method = _request.post;
        params.data = {};
        params.data[_request.params.method] = _request.twitterLoginMethod;
        params.data.params = {};
        params.data.params[_request.userParams.twitterId] = userid;
        params.data.params[_request.userParams.nickname] = nickname;
        params.data.params[_request.userParams.name] = name;
        params.data.params[_request.userParams.surname] = surname;
        
        sendRpc(params, function(response) {
        	if (response.data && response.data.nickname) {
        		setCurrentUser(response.data);
        		onsuccess(_currentUser);
        	} else {
        		errorCallback(onfail, EC.EC_FACEBOOK_RESPONSE);
        	}
        }, onfail);
    }
    
    /**
	 * Initialiazes twitter object
	 *
	 * @param {String} consumerKey consumerKey of the twitter applicaton
	 * @param {String} consumerSecret consumerSecret of the twitter application
	 */
    NetmeraTwitterUtils.initialize = function(consumerKey, consumerSecret) {
    	_consumerKey = consumerKey;
    	_consumerSecret = consumerSecret;
    };
    
    /**
     * Logs a user into the registered application with Twitter.
     * @param {Function} onsuccess success callback called with a NetmeraUser parameter when the login operation is successful
     * @param {Function} onfail callback function which is called when an error happened.
     */
    NetmeraTwitterUtils.login = function(onsuccess, onfail) {
    	if (checkApiKey(_st, onfail)) {
    		getRequestToken(function(requestToken) {
        		twitterPopup(_request.twitter.authenticateUrl + requestToken, function(oauthToken, oauthVerifier) {
        			getActionToken(oauthToken, oauthVerifier, function(twitter) {
        				_twitter = twitter;
        				getTwitterUserData(function(nickname, userid, name, surname) {
        					twitterRegisterAndLogin(nickname, userid, name, surname, onsuccess, onfail);
        				}, onfail);
        			}, onfail);
        		}, onfail);
        	}, onfail);
    	}
    };
    
    function makeTwitterRequest(url, params, requestMethod, onsuccess, onfail) {
    	var urlWithParams = url + "?" + serialize(params);
    	var oauthParams = {};
    	oauthParams[_request.twitter.oauthToken] = _twitter.getAccessToken();
    	oauthParams[_request.twitter.oauthVersion] = _request.twitter.oauthVersionValue;
    	
    	var accessor = getAccessor(_consumerSecret, _twitter.getSecretToken());
    	var oauthHeaders = createOAuthHeaders(urlWithParams, oauthParams, accessor, requestMethod);
    	
    	var requestParams = {};
		requestParams.url = urlWithParams;
		requestParams.method = requestMethod;
		requestParams[_request.params.oauthHeaders] = oauthHeaders;
		
		sendSigned(requestParams, function(response) {
			if (type.func(onsuccess)) {
				onsuccess(response);
			}
		}, onfail);
    }
    
    /**
     * Wrapper method to send POST requests to Twitter REST API
     * @param {String} url url to send the request
     * @param {Object} params a map which contains parameters to send as request parameters.
     * @param {Function} onsuccess callback function which is called when the response's status is 200.
     * @param {Function} onfail callback function which is called when the response's status isn't 200.
     */
    NetmeraTwitterUtils.requestPost = function(url, params, onsuccess, onfail) {
    	if (checkApiKey(_st, onfail)) {
    		makeTwitterRequest(url, params, _request.post, onsuccess, onfail);
    	}
    };
    
    /**
     * Wrapper method to send GET requests to Twitter REST API
     * @param {String} url url to send the request
     * @param {Object} params a map which contains parameters to send as request parameters.
     * @param {Function} onsuccess callback function which is called when the response's status is 200.
     * @param {Function} onfail callback function which is called when the response's status isn't 200.
     */
    NetmeraTwitterUtils.requestGet = function(url, params, onsuccess, onfail) {
    	if (checkApiKey(_st, onfail)) {
    		makeTwitterRequest(url, params, _request.get, onsuccess, onfail);
    	}
    };
    
    readCaches();
}());