function initPopup() {
	if (WebSquare.isWebSquarePopup === true) {
		return;
	}
	WebSquare.isWebSquarePopup = true;
	var parentobj = opener || parent;
	var popupInfo;
	if (parentobj.WebSquare && parentobj.WebSquare._popupInfo) {
		popupInfo = parentobj.JSON.parse(parentobj.WebSquare._popupInfo);
		if (popupInfo) {
			WebSquare.net._setParameter(popupInfo);
		}
		parentobj.WebSquare._popupInfo = "";
	}
}
(function() {
	initPopup();

	promiseObj = WebSquare.startApplication();
	promiseObj.then(function(resolve, reject) {
		// to do
	});
})();

window.onbeforeunload = function (e) {
	var parentobj = opener || parent;
    var _PARENT_RESOLVE_ = null;
	
	_PARENT_RESOLVE_ = parentobj._POP_RESOLVE_;
	
	if(typeof parentobj._POP_CALLBK_ === "function") { // callback 함수가 있을때
		parentobj._POP_CALLBK_($p.top().scwin._popup.callbackParam);
	} else {		
		if(typeof $p.top().scwin._popup !== "undefined") {
			_PARENT_RESOLVE_($p.top().scwin._popup.callbackParam);
		} else {

			 let ret = null;
			 if(typeof parentobj.$p.top().scwin.closeArr !== "undefined") {			
				 ret = parentobj.$p.top().scwin.closeArr.length > 0 ?  parentobj.$p.top().scwin.closeArr : null;
			 }
			_PARENT_RESOLVE_(ret);
		}
	}

};