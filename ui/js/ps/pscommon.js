/**
 * FMS 공통 자바 스크립트
 * @version : 1.0
 */

//----------------------------- 1. 공통 메세지 -------------------------------//

//----------------------------- 공통 메세지 END ------------------------------//

//------------------------------ 2. 공통 변수 --------------------------------//

//------------------------------ 공통 변수 END -------------------------------//

/* ********************************************************************************
 *                                  함수
 * *******************************************************************************/

// namespace 안전하게 선언
var pscommon = pscommon || {};
var scwin = scwin || {};

/**
 * 공통 유틸
 */
pscommon.isEmpty = function(v){
    return v === undefined || v === null || v === "";
};


/**
 * ★ 주유소 코드 검색 (싱글조회 대응)
 */
pscommon.searchOilStation = async function(param){

    return new Promise(function(resolve){

        var req = {
            IN_DS1: {
				oilStationPatternCd : param.oilStationPatternCd || "전체",
	            oilOilStatNo        : param.oilOilStatNo || "",
	            oilStatNm           : param.oilStatNm || "",
	            dsaleYn             : param.dsaleYn || "전체"
			},
			OUT_DS1: [{}]
        };
		
		$.ajax({
            url: "/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveFmsOilStationCodeListCMD.do",
            type: "POST",
            async: false,
            contentType: "application/json; charset=UTF-8",
            dataType: "text",
            data: JSON.stringify(req),
            success: function (resJsonObj) {
				var resJsonObj = JSON.parse(resJsonObj);
				if(typeof resJsonObj.resultDataSet !== "undefined" && resJsonObj.resultDataSet[0].Code == -1) {
			        var msgObj1 = {
			            statusCode: "E",
			            errorCode: resJsonObj.resultDataSet[1].Code,
			            message: resJsonObj.resultDataSet[1].Msg
			        };

			        $c.sbm.resultMsg($p, msgObj1);
			        return false;
			    }
				resolve(resJsonObj.OUT_DS1);
            },
            error: function (xhr) {
                var msg = xhr.responseText;
                if (!msg) {
                    msg = "HTTP " + xhr.status + " (" + xhr.statusText + ")";
                    if (xhr.status === 0) {
                        msg = "Network Failure (HTTP 0). Check URL: " + "/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveFmsOilStationCodeListCMD.do";
                    }
                }

                throw new Error("주유소코드조회 통신 오류: " + msg);
            }
        });
    });
};



/**
 * ★ 공통 팝업 호출
 */
pscommon.openOilPopup = async function(param){
    return new Promise(function(resolve){
        $c.win.openPopup($p, "/ui/ps/eq/fmsmgnt/fmsoilmgnt/eq_610_01_01p.xml", {
            id      : "oilPopup",
			popupName : "주유소코드조회",
            width   : "1120px",
            height  : "770px"
        }, {
			callbackFn: function(result){
	            resolve(result);
	        },
			param
		});
    });
};



/**
 * ------------------------------------------------------------------
 * 1) 화면 INPUT 대상 팝업  (기존 RcfOilStatPop)
 * ------------------------------------------------------------------
 */
pscommon.RcfOilStatPop = async function(oilOilStatNo, oilStatNm, isCdYn, dsaleYn, oilStationPatternCd, isEnable){
    var param = {
        oilOilStatNo        : oilOilStatNo?.getValue?.() || "",
        oilStatNm           : oilStatNm?.getValue?.() || "",
        isCdYn              : isCdYn || "IMG",
        dsaleYn             : dsaleYn || "전체",
        oilStationPatternCd : oilStationPatternCd || "전체",
        isEnable            : isEnable || "E"
    };
	
	oilOilStatNo.setValue("");
	oilStatNm.setValue("");
    // 코드 or 명칭만 입력된 경우 자동 단건 조회
    if(param.isCdYn !== "IMG" && (param.oilOilStatNo || param.oilStatNm)){
        var result = await pscommon.searchOilStation(param);
        if(result && result.length === 1){
            oilOilStatNo.setValue(result[0].oilOilStatNo);
            oilStatNm.setValue(result[0].oilStatNm);
            return;
        }
    }

    // 팝업 호출
    var popupResult = await pscommon.openOilPopup(param);

    if(popupResult){
        oilOilStatNo.setValue(popupResult.oilOilStatNo);
        oilStatNm.setValue(popupResult.oilStatNm);
    }else{
        oilOilStatNo.setValue("");
        oilStatNm.setValue("");
    }
};



/**
 * ------------------------------------------------------------------
 * 2) Grid 용 팝업 (기존 RcfGridOilStatPop)
 * ------------------------------------------------------------------
 */
pscommon.RcfGridOilStatPop = async function(oilOilStatNo, oilStatNm, isCdYn, dsaleYn, oilStationPatternCd){

    var param = {
        oilOilStatNo        : oilOilStatNo || "",
        oilStatNm           : oilStatNm || "",
        isCdYn              : isCdYn || "IMG",
        oilStationPatternCd : oilStationPatternCd || "전체",
        dsaleYn             : dsaleYn || "전체"
    };

    var rtnList = ["","","","",""];

    // 단건 자동 조회
    if(param.isCdYn !== "IMG" && (param.oilOilStatNo || param.oilStatNm)){
        var result = await pscommon.searchOilStation(param);

        if(result && result.length === 1){
            rtnList[0] = result[0].oilOilStatNo;
            rtnList[1] = result[0].oilStatNm;
            rtnList[2] = result[0].dsaleYn;
            return rtnList;
        }
    }

    // 팝업 호출
    var popupResult = await pscommon.openOilPopup(param);

    if(popupResult){
        rtnList[0] = popupResult.oilOilStatNo;
        rtnList[1] = popupResult.oilStatNm;
        rtnList[2] = popupResult.dsaleYn;
        rtnList[3] = popupResult.sellClntNo;
        rtnList[4] = popupResult.sellClntNm;
    }

    return rtnList;
};



/**
 * ------------------------------------------------------------------
 * 3) 무조건 팝업 호출 (기존 RcfGridOilStatPops)
 * ------------------------------------------------------------------
 */
pscommon.RcfGridOilStatPops = async function(oilOilStatNo, oilStatNm, isCdYn, dsaleYn, oilStationPatternCd){

    var param = {
        oilOilStatNo        : oilOilStatNo || "",
        oilStatNm           : oilStatNm || "",
        isCdYn              : isCdYn || "IMG",
        oilStationPatternCd : oilStationPatternCd || "전체",
        dsaleYn             : dsaleYn || "전체"
    };

    var rtnList = ["","","","",""];

    var popupResult = await pscommon.openOilPopup(param);

    if(popupResult){
        rtnList[0] = popupResult.oilOilStatNo;
        rtnList[1] = popupResult.oilStatNm;
        rtnList[2] = popupResult.dsaleYn;
        rtnList[3] = popupResult.sellClntNo;
        rtnList[4] = popupResult.sellClntNm;
    }

    return rtnList;
};
