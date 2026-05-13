
var dscommon = dscommon || {};
//----------------------------- 1. 영업 메세지 - START -------------------------------//
var MSG_SD_WRN_001   =  "오더번호 은(는) %1(이)므로 %2을(를) 등록할 수 없습니다.";
var MSG_SD_WRN_002   =  "실적이 발생한 %1은(는) 삭제할 수 없습니다";
var MSG_SD_WRN_003   =  "컨테이너 목록에  [%1]컨테이너가 존재하고 있으므로 해당 품명을 수정할 수 없습니다.";
var MSG_SD_WRN_004   =  "컨테이너목록의 도착지 정보와 상이합니다.";
var MSG_SD_WRN_005   =  "컨테이너는 품명목록의 총수량 이상 입력할 수 없습니다.";
var MSG_SD_WRN_006   =  "%1은(는) %2입니다."

var MSG_SD_ERR_001   =  "%1컨테이너를 지정할 수 없습니다.";

dscommon.MSG_SD_WRN_001   =  "오더번호 은(는) %1(이)므로 %2을(를) 등록할 수 없습니다.";
dscommon.MSG_SD_WRN_002   =  "실적이 발생한 %1은(는) 삭제할 수 없습니다";
dscommon.MSG_SD_WRN_003   =  "컨테이너 목록에  [%1]컨테이너가 존재하고 있으므로 해당 품명을 수정할 수 없습니다.";
dscommon.MSG_SD_WRN_004   =  "컨테이너목록의 도착지 정보와 상이합니다.";
dscommon.MSG_SD_WRN_005   =  "컨테이너는 품명목록의 총수량 이상 입력할 수 없습니다.";
dscommon.MSG_SD_WRN_006   =  "%1은(는) %2입니다."

dscommon.MSG_SD_ERR_001   =  "%1컨테이너를 지정할 수 없습니다.";


//----------------------------- 1. 영업 메세지 - END -------------------------------//


//----------------------------- 1. 영업 상수 - START -------------------------------//
//컨테이너번호에 해당하는 컨테이너정보 세팅하기 위한 컬럼명 배열 변수
//사용하는 페이지 : 컨테이너오더(sd_402_01_11b.jsp), 수출본선컨테이너목록조회(sd_402_01_42p.jsp)
var ARR_CNTR_COLUMN = [
						 "cntrNo",					"cntrSizCd",			"cntrTypCd",			"fullEmptyClsCd",		"arrvlportDtm",
						 "impSealNo",				"impDangerCd",			"impTemper",			"impWt",				"impOverLength",
						 "impOverHeight",			"impOverWidTh",			"impMgsetYn",			"impCntrWrkKndCd",		"impTransCondCd",
						 "impCntrWtCondCd",			"xrayLupTrgtYn",		"expSealNo",			"expDangerCd",			"expTemper",				
						 "expWt",					"expOverLength",		"expOverHeight",		"expOverWidth",			"expMgsetYn",			
						 "expCntrWrkKndCd",			"expTransCondCd",		"expCntrWtCondCd",		"impExpClsCd",			"cntrStsCd",			
						 "stsChgDt",				"destPortCd",			"offRtrnClsCd",			"leaseYn",				"socYn",				
						 "portCd",					"term",					"currPosCd",			"lineCd",				"shpCoClntNo",			
						 "lblock",					"lbay",					"lrow",					"ltier",				"wrkIndictNo",			
						 "transRsltsSeq",			"creatOdrNo",			"trmntOdrNo",			"crryinDt",				"crryinHh",
						 "legalAccfCargoDdCnt",		"selfAccfCargoDdCnt",	"cargoProcMthdCd",		"strRateOutbrYn",		"sndoutInspRateOutbrYn",
						 "frzMonOutbrYn",			"bookingNo",			"blNo",					"extdDueDt",			"extdMgntNo",
						 "mgntClsYn",				"offRtrnClsCd",			"rmk",					"cntrModDtm",			"portNm",					
						 "currPosNm"	
					  ];
					  
dscommon.ARR_CNTR_COLUMN = [
						 "cntrNo",					"cntrSizCd",			"cntrTypCd",			"fullEmptyClsCd",		"arrvlportDtm",
						 "impSealNo",				"impDangerCd",			"impTemper",			"impWt",				"impOverLength",
						 "impOverHeight",			"impOverWidTh",			"impMgsetYn",			"impCntrWrkKndCd",		"impTransCondCd",
						 "impCntrWtCondCd",			"xrayLupTrgtYn",		"expSealNo",			"expDangerCd",			"expTemper",				
						 "expWt",					"expOverLength",		"expOverHeight",		"expOverWidth",			"expMgsetYn",			
						 "expCntrWrkKndCd",			"expTransCondCd",		"expCntrWtCondCd",		"impExpClsCd",			"cntrStsCd",			
						 "stsChgDt",				"destPortCd",			"offRtrnClsCd",			"leaseYn",				"socYn",				
						 "portCd",					"term",					"currPosCd",			"lineCd",				"shpCoClntNo",			
						 "lblock",					"lbay",					"lrow",					"ltier",				"wrkIndictNo",			
						 "transRsltsSeq",			"creatOdrNo",			"trmntOdrNo",			"crryinDt",				"crryinHh",
						 "legalAccfCargoDdCnt",		"selfAccfCargoDdCnt",	"cargoProcMthdCd",		"strRateOutbrYn",		"sndoutInspRateOutbrYn",
						 "frzMonOutbrYn",			"bookingNo",			"blNo",					"extdDueDt",			"extdMgntNo",
						 "mgntClsYn",				"offRtrnClsCd",			"rmk",					"cntrModDtm",			"portNm",					
						 "currPosNm"	
					  ];
//----------------------------- 1. 영업 상수 - END -------------------------------//

/** 
 * @type : intro
 * @desc : dscommon.js는 프로젝트 전반에 걸쳐 물류 (DS) 시스템에서 공통으로 사용하는 자바 스크립트를 기술한 
 * 자바스크립트 파일이다. 빈번히 사용되는 자바스크립트들이 화면마다 반복적으로 개발되지 
 * 않도록 미리 정의되어 있어서 dscommon.js를 업무화면에 import시키기만 하면 dscommon.js에 정의되어
 * 있는 스크립트들에 대해서는 각 개발자가 별도로 개발할 필요가 없다.
 * <pre>
 * </pre>
 * 함수 Naming Rule은 다음과 같다.
 * <pre>
 *     - cf_  : common function 
 * </pre>
 * <font color=red>※주의사항</font>
 * <pre>
 *
 * </pre>
 * @version : 1.0
 * @author : 이상유
 * @change  : 
 * <pre>
 *     <font color="blue">V1.0</font>
 *     - 
  * </pre>
 */
 
 /* ********************************************************************************
 *                                  물류 시스템 공통 함수
 * *******************************************************************************/
 
/**
 * @type   : function
 * @access : public
 * @desc   : Object id(배열)의 style.display 속성값을 inline으로 설정하여 화면에 표시되게 한다.
 * <pre>
 *     사용예:) cf_ShowObject(lay_tr);
 * </pre>
 * 위와같이 사용했을 경우 lay_tr 이라고 설정된 오브젝트의 style.display 속성값을 'inline' 으로 변경한다.
 * @sig    : objectArray
 * @param  : objectArray required 화면표시 대상 오브젝트 id(배열)
 * @author : 이상유
 */
dscommon.cf_ShowObject = function (objectArray) {
    if (!Array.isArray(objectArray)) return;

    objectArray.forEach(obj => {
        if (!obj) return;

        // WebSquare Component
        if (typeof obj.show === "function") {
            obj.show("");
        }
    });
};

/**
 * @type   : function
 * @access : public
 * @desc   : Object id(배열)의 style.display 속성값을 none으로 설정하여 화면에 표시되지 않게 한다.
 * <pre>
 *     사용예:) cf_ShowObject(lay_tr);
 * </pre>
 * 위와같이 사용했을 경우 lay_tr 이라고 설정된 오브젝트의 style.display 속성값을 'none' 으로 변경한다.
 * @sig    : objectArray
 * @param  : objectArray required 화면표시 대상 오브젝트 id(배열)
 * @author : 이상유
 */
dscommon.cf_HideObject = function (objectArray) {
    if (!Array.isArray(objectArray)) return;

    objectArray.forEach(obj => {
        if (!obj) return;

        // WebSquare Component
        if (typeof obj.hide === "function") {
            obj.hide();
        }
    });
};
  
/**
 * @type   : function
 * @access : public
 * @desc   : Object id(배열)의 style.display 속성값을 설정한다. 
 * <pre>
 * 	style.display 속성값 : 
 *		block 개체가 블럭엘레멘트로 표현된다. 
 *		none 개체가 디스플레이되지 않는다. 
 *		inline 디폴트이며, 개체가 내용의 크기에따라 인라인 엘레멘트로 표현된다. 
 *		inline-block 개체가 인라인으로 표현되지만, 개체의 내용은 블럭 엘레멘트로 표현된다. 인접 인라인 엘레멘트는 간격을 허용하며 같은 라인에 표현된다. 
 *		list-item IE6 이후, 개체가 블럭엘레멘트로 표현되고 목록항목 마크가 추가된다. 
 *		table-header-group 테이블의 머릿부분(header)이 항상 모든 줄과 줄의 그룹보다 먼저, 그리고 윗 제목(caption) 아래 디스플레이된다. 이 머릿부분은 테이블이 확장된 각 페이지에 디스플레이된다. 
 *		table-footer-group 테이블의 바닥부분(footer)이 항상 모든 줄과 줄의 그룹 다음, 그리고 바닥 제목(caption) 위에 디스플레이된다. 이 바닥부분은 테이블이 확장된 각 페이지에 디스플레이된다. 
 *
 *     사용예:) cf_SetStyleDisplayObject(lay_tr, 'inline');
 * </pre>
 * 위와같이 사용했을 경우 lay_tr 이라고 설정된 오브젝트의 style.display 속성값을 'none' 으로 변경한다.
 * @sig    : object, value
 * @param  : object required 화면표시 대상 오브젝트 id
 * @param  : value required style.display 속성값
 * @author : 이상유
 */  
 dscommon.cf_SetStyleDisplayObject = function (obj, value) {
     if (!obj) return;

     // WebSquare 컴포넌트인 경우
     if (typeof obj.setVisible === "function") {
         obj.setVisible(value !== "none");
         return;
     }

     // DOM Element인 경우
     if (obj.style) {
         obj.style.display = value;
     }
 };

/**
 * @type   : function
 * @access : public
 * @desc   : Object에 입력값이 숫자,대시(-)로 되어있는지 체크
 * <pre>
 *     cf_isNumDash(value);
 * </pre>
 * 위와같이 사용했을 경우 value 값이 "-0123456789" 인지 확인한다.
 * @sig    : object
 * @param  : object required 입력 Object
 * @author : 이상유
 */
dscommon.cf_IsNumDash = function (value) {
    return /^[0-9-]*$/.test(value);
};
    
/**
 * @type   : function
 * @access : public
 * @desc   : Object에 입력값이 특정 문자(chars)만으로 되어있는지 체크, 특정 문자만 허용하려 할 때 사용
 * <pre>
 *     사용예:) cf_containsCharsOnly(object, chars);
 * </pre>
 * 위와같이 사용했을 경우 value 값이 특정 문자(chars)만으로 되어있는지 확인한다.
 * @sig    : object, chars
 * @param  : object required 입력 Object
 * @param  : chars required 체크 문자
 * @author : 이상유
 */ 
dscommon.cf_ContainsCharsOnly = function (obj, chars) {
    var value = obj.getValue();
    var pattern = new RegExp("^[" + chars.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&") + "]*$");
    return pattern.test(value);
};

/**
 * @type   : function
 * @access : public
 * @desc   : 전화번호 체크, 입력된 형식이 : /0\d{1,3}\-\d\d{1,3}\-\d\d\d\d/g pattern 형식과 같은지 확인
 * <pre>
 *		참조 - mask 패턴 사용 방법 
 *			0 : 숫자 0
 * 			\d : 숫자 문자를 찾는다. [0-9]와 같다.
 *    		+ : 부분식의 선행 문자를 한 개 이상 찾는다.
 *    		- : 문자 "-" 
 * 			g : 플래그 (발생할 모든 pattern에 대한 전역 검색 )
 *
 *		전화번호 입력 예 
 *     	사용예:) cf_PhoneCheck(object); 02-222-2222, 031-22-2222, 052-2222-2222, 011-1111-1111
 * </pre>
 * 위와같이 사용했을 경우 Object에 입력된 값이 전화번호 형식과 맞는지 확인한다.
 * @sig    : object
 * @param  : object required 입력 Object
 * @author : 김효상, 이상유
 */ 
 dscommon.cf_PhoneCheck = function (obj, label) {
     var numberValue = obj.getValue();   // WebSquare 컴포넌트 값
     if (!label) label = "전화번호";

     if (!dscommon.cf_IsNumDash(numberValue)) {
         $c.gus.cfAlertMsg(obj?.getScopeWindow()?.$p, MSG_CM_ERR_007, [label]).then(() => obj.focus());   // cfAlertMsg → WebSquare alert
         //obj.focus();
         return false;
     }

     return true;
 };

/**
 * @type   : function
 * @access : public
 * @desc   : 그리드 전호번호 체크, 입력된 형식이 : /0\d{1,3}\-\d\d{1,3}\-\d\d\d\d/g pattern 형식과 같은지 확인
 * <pre>
 *		참조 - mask 패턴 사용 방법 
 *			0 : 숫자 0
 * 			\d : 숫자 문자를 찾는다. [0-9]와 같다.
 *    		+ : 부분식의 선행 문자를 한 개 이상 찾는다.
 *    		- : 문자 "-" 
 * 			g : 플래그 (발생할 모든 pattern에 대한 전역 검색 )
 *
 *		전화번호 입력 예 
 *     	사용예:) cf_PhoneCheck(object); 02-222-2222, 031-22-2222, 052-2222-2222, 011-1111-1111
 * </pre>
 * 위와같이 사용했을 경우 Object에 입력된 값이 전화번호 형식과 맞는지 확인한다.
 * @sig    : string
 * @param  : string required 입력 string
 * @author : 김효상, 이상유, 장윤기
 */ 
 dscommon.cf_gidPhoneCheck = function (strPhoneNum) {
     if (!strPhoneNum) return true; // 빈 값 허용

     return /^[0-9-]+$/.test(strPhoneNum);
 };

/**
 * @type   : function
 * @access : public
 * @desc   : 헤더는 같지만, 헤더의 순서가 다른 경우 데이터셋정보 Copy하기
 * <pre>
 *     사용예:) f_CopyDataSetValue(ds1, ds2);
 * </pre>
 * 위와같이 사용했을 경우 value 값이 특정 문자(chars)만으로 되어있는지 확인한다.
 * @sig    : object, chars
 * @param  : DataSet required 원본 데이터셋
 * @param  : DataSet required 대상 데이터셋
 * @author : 이상유
 */ 
dscommon.cf_CopyDataSetValue = function (srcDL, dstDL) {

    // 전체 Row 조회
    const rows = srcDL.getRows();   // [{col1:..., col2:...}, ...]
    const columnIds = srcDL.getColumnIds(); // ["col1","col2",...]

    // ds2 초기화 (선택)
    dstDL.clear();

    // Row 단위 복사
    rows.forEach((rowData) => {
        const newRow = dstDL.insertRow();

        columnIds.forEach(colId => {
            dstDL.setValue(newRow, colId, rowData[colId]);
        });
    });
};

/**
 * @type   : function
 * @access : public
 * @desc   : iFrame이 있는 경우 iFrame Size 재조정
 * <pre>
 *     사용예:) cf_frameHeight()
 * </pre>
 * @author : 이상유
 */ 
dscommon.cf_frameHeight = function () {
    // 현재 윈도우 객체 가져오기
    const win = $p.getWindow();

    // 팝업이 아닌 경우 리사이즈 불가
    if (!win || !win.resizeTo) {
        console.warn("This window cannot be resized (not a popup window).");
        return;
    }

    // WebSquare 페이지 전체 높이 측정
    const pageHeight = document.documentElement.scrollHeight;
    const pageWidth = document.documentElement.scrollWidth;

    // 팝업 창 크기 변경
    win.resizeTo(pageWidth, pageHeight);
};

/**
 * @type   : function
 * @access : public
 * @desc   : object변경
 * <pre>
 *     사용예:) cf_chgField(txt_dptDistrictCd, txt_dptDistrictNm,'retrieveDistrictList','기점코드,기점명','기점,기점코드,기점명','cd');
 * </pre>
 * @param  : 코드 입력필드 object
 * @param  : 코드명 입력필드 object
 * @param  : selectId 입력필드 - String
 * @param  : 팝업 칼럼 헤더 - String
 * @param  : 조회부 라벨 - String
 * @param  : 변경된 데이타  - String
 * @author : 장윤기
 */ 
dscommon.cf_chgField = function (codeId, nameId, pSelectId, pColTitle, pCndTitle,
                              pDispCnt, pWidth, pWhere, chgType,
                              pWinCloseTF, pHidden, pW, pH) {

    const codeObj = $p.getComponent(codeId);
    const nameObj = $p.getComponent(nameId);

    if (!codeObj || !nameObj) {
        console.warn("Component not found:", codeId, nameId);
        return;
    }

    // 기본 크기 처리
    const winW = pW && pW !== "" ? pW : "440";
    const winH = pH && pH !== "" ? pH : "500";

    // 값 읽기
    const codeVal = (codeObj.getValue() || "").trim();
    const nameVal = (nameObj.getValue() || "").trim();

    // 이전 값 기억 메커니즘 (Modified 대체)
    if (!codeObj.__oldValue) codeObj.__oldValue = codeVal;
    if (!nameObj.__oldValue) nameObj.__oldValue = nameVal;

    //----------------------------------------
    // 코드 → 이름 변경(chgType == 'cd')
    //----------------------------------------
    if (chgType === "cd") {

        // 1) 코드가 비어 있으면 이름 초기화
        if (codeVal === "") {
            nameObj.setValue("");
            codeObj.__oldValue = "";
            return;
        }

        // 2) 값이 바뀌지 않았으면 팝업 호출 안 함
        if (codeObj.__oldValue === codeVal) {
            return;
        }

        // 3) 값 변경 처리
        nameObj.setValue("");
        codeObj.__oldValue = codeVal;

        dscommon.f_openPopUp(
            codeObj, nameObj, pSelectId, pColTitle, pCndTitle,
            pDispCnt, pWidth, pWhere, pWinCloseTF, pHidden, winW, winH
        );
        return;
    }

    //----------------------------------------
    // 이름 → 코드 변경(chgType != 'cd')
    //----------------------------------------
    else {

        // 1) 이름이 비어 있으면 코드 초기화
        if (nameVal === "") {
            codeObj.setValue("");
            nameObj.__oldValue = "";
            return;
        }

        // 2) 값이 안 바뀌었으면 팝업 호출 안 함
        if (nameObj.__oldValue === nameVal) {
            return;
        }

        // 3) 값 변경 처리
        codeObj.setValue("");
        nameObj.__oldValue = nameVal;

        dscommon.f_openPopUp(
            codeObj, nameObj, pSelectId, pColTitle, pCndTitle,
            pDispCnt, pWidth, pWhere, pWinCloseTF, pHidden, winW, winH
        );
    }
};

dscommon.cf_initObject = function (objId) {
    const obj = $p.getComponent(objId);

    if (!obj) {
        console.warn("Component not found:", objId);
        return;
    }

    const type = obj.getClass();  // 컴포넌트 타입 확인

    switch (type) {
        case "w2:input":              // 일반 input
        case "w2:textbox":           // textbox
        case "w2:maskedinput":       // EMEdit에 해당
            obj.setValue("");
            break;

        case "w2:hidden":            // hidden field
            obj.setValue("");
            break;

        default:
            console.warn("Unsupported component type:", type);
    }
};

/**
 * @type   : function
 * @access : public
 * @desc   : 그리드 높이를 조정 : 지정된 그리드의 Height 를 size 만큼 증감 시킨다.
 * <pre>
 *     사용예:) cf_grdHeiht(그리드명, 증감 사이즈)
 * </pre>
 * @author : 이상유
 */ 
dscommon.cf_grdHeight = function (grdId, size) {
    const grd = $p.getComponent(grdId);

    if (!grd) {
        console.warn("Grid component not found:", grdId);
        return;
    }

    let height = grd.getStyle("height"); // "200px" 형식

    if (!height) {
        console.warn("No height style found for:", grdId);
        return;
    }

    let intHeight = parseInt(height.replace("px", ""), 10);

    if (isNaN(intHeight)) {
        console.warn("Invalid height value:", height);
        return;
    }

    intHeight += size;

    if (intHeight > 0) {
        grd.setStyle("height", intHeight + "px");
        // cf_frameHeight();   // 필요 시 호출
    }
};

/**
 * @type   : function
 * @access : public
 * @desc   : 그리드 시간 체크, 입력된 형식이 : 1330 pattern 형식과 같은지 확인
 * <pre>
 *
 *
 *		입력 예 
 *     	사용예:) cf_gidHourCheck(object); 23:30
 * </pre>
 * 위와같이 사용했을 경우 Object에 입력된 값이 시간 형식과 맞는지 확인한다.
 * @sig    : string
 * @param  : string required 입력 string
 * @author : 김효상, 이상유, 장윤기
 */ 
 dscommon.cf_gidHourCheck = function(strHour) {

     if (!strHour) {
         return false;
     }

     const numberValue = String(strHour).trim();

     // 4자리 아니면 실패
     if (numberValue.length !== 4) {
         return false;
     }

     // 각 자리 숫자 체크
     if (!/^\d{4}$/.test(numberValue)) {
         return false;
     }

     // HHMM 분리
     const inputHours = parseInt(numberValue.substr(0, 2), 10);
     const inputMinutes = parseInt(numberValue.substr(2, 2), 10);

     // 분이 빈 문자열일 일은 없음(이미 4자리 숫자이므로), 그래도 원본 코드와 동작 동일하게
     if (numberValue.substr(2, 2) === "") {
         return false;
     }

     // Date 이용하여 역검증
     const now = new Date();
     now.setHours(inputHours);
     now.setMinutes(inputMinutes);

     if (now.getHours() !== inputHours) return false;
     if (now.getMinutes() !== inputMinutes) return false;

     return true;
 };

/**
 * @type   : function
 * @access : public
 * @desc   : null값 포함하는 그리드 시간 체크, 입력된 형식이 : 1330 pattern 형식과 같은지 확인
 * <pre>
 *
 *
 *		입력 예 
 *     	사용예:) cf_gidHourNullCheck(object); 23:30
 * </pre>
 * 위와같이 사용했을 경우 Object에 입력된 값이 시간 형식과 맞는지 확인한다 null값 허용.
 * @sig    : string
 * @param  : string required 입력 string
 * @author : 김효상, 이상유, 장윤기
 */ 
 dscommon.cf_gidHourNullCheck = function(strHour) {

     // 입력값이 null 또는 빈 문자열이면 valid
     if (!strHour) {
         return true;
     }

     const numberValue = String(strHour).trim();

     // 숫자가 아니거나 길이가 4가 아니면 false
     if (!/^\d{4}$/.test(numberValue)) {
         return false;
     }

     const inputHours = parseInt(numberValue.substr(0, 2), 10);
     const inputMinutes = parseInt(numberValue.substr(2, 2), 10);

     // 시간 유효 범위 체크
     if (inputHours < 0 || inputHours > 23) return false;
     if (inputMinutes < 0 || inputMinutes > 59) return false;

     // Date 를 사용하여 "역검증"
     const now = new Date();
     now.setHours(inputHours);
     now.setMinutes(inputMinutes);

     // Date가 받아들인 값과 원래 입력값이 다른 경우 → 잘못된 시간
     if (now.getHours() !== inputHours) return false;
     if (now.getMinutes() !== inputMinutes) return false;

     return true;
 };


/**
 * @type   : function
 * @access : public
 * @desc   : 다중 보고서양식 출력시 사용
 * <pre>
 *
 *
 *		입력 예 
 *     	사용예:) cf_OZReport("chb_printCheck", "chb_previewCheck", "/ds/sd/salesactiv/ctrtmgnt/sd_202_01_01.ozr", odiParam, viewerParam, formParam);
 * </pre>
 * 
 * @sig    : 
 * @param  : string required 입력 string
 * @author : 장윤기
 */ 
 dscommon.cf_OZReport = function(printCheckId, previewCheckId, reportName, argsOZParam, appendOZParam, argsOZFormParam) {

     // 1. Print 체크 여부
     let printMode = false;
     const printCmp = $p.getComponent(printCheckId);
     if (printCmp && printCmp.getChecked && printCmp.getChecked()) {
         printMode = true;
     }

     // 2. Preview 체크 여부
     let previewMode = false;
     const previewCmp = $p.getComponent(previewCheckId);
     if (previewCmp && previewCmp.getChecked && previewCmp.getChecked()) {
         previewMode = true;
     }

     // 3. appendOZParam 기본값 설정
     if (!appendOZParam) {
         appendOZParam = new ViewerParam();
     }

     // 4. printMode가 false이면 silent 모드로 세팅
     if (!printMode) {
         appendOZParam.add("print.mode", "silent");
     }

     // 5. Preview 선택 시 PREVIEW 모드 실행
     if (previewMode) {
         dscommon.cf_OZPreview(reportName, argsOZParam, appendOZParam, argsOZFormParam);
     }
     // 6. 아니면 Print 모드 실행
     else {
         dscommon.cf_OZPrint(reportName, argsOZParam, appendOZParam, argsOZFormParam);
     }
 };
  
/**
 * @type   : function
 * @access : public
 * @desc   : 다중 보고서양식 출력시 사용(미리보기)
 * <pre>
 *
 *
 *		입력 예 
 *     	사용예:) 
 * </pre>
 * 
 * @sig    : 
 * @param  : string required 입력 string
 * @author : 장윤기
 */ 
 dscommon.cf_OZPreview = function(reportname, argsOZParam, appendOZParam, argsOZFormParam) {

     // 1) reportname 여러 개 처리
     const arrReportName = reportname.split(";");
     let queryString = "/ds/common/jsp/ozviewer.jsp?";

     arrReportName.forEach((name, idx) => {
         queryString += `reportname${idx + 1}=${name}&`;
     });

     queryString += `reportCnt=${arrReportName.length}&MODE=PREVIEW`;

     // 2) 파라미터 문자열 생성
     let parameterValues = "";

     // ----- argsOZParam 처리 -----
     if (argsOZParam) {
         if (argsOZParam instanceof MultiODIParam) {
             parameterValues += dscommon.cfGetOZParameterValues(argsOZParam)
                              + argsOZParam.getODINames();
         } else if (argsOZParam instanceof ODIParam) {
             parameterValues += argsOZParam.getParameterValues()
                              + argsOZParam.getODIName();
         }
     }

     // ----- appendOZParam 처리 -----
     if (!appendOZParam) {
         appendOZParam = new ViewerParam();
     }

     appendOZParam.add("viewer.mode", "preview");
     parameterValues += appendOZParam.getParameterValues();

     // ----- argsOZFormParam 처리 -----
     if (argsOZFormParam) {
         parameterValues += argsOZFormParam.getParameterValues();
     }

     // 3) OZ Viewer 호출
     dscommon.cfCallReportFile(queryString, parameterValues);
 };

/**
 * @type   : function
 * @access : public
 * @desc   : 다중 보고서양식 출력시 사용(출력)
 * <pre>
 *
 *
 *		입력 예 
 *     	사용예:) 
 * </pre>
 * 
 * @sig    : 
 * @param  : string required 입력 string
 * @author : 장윤기
 */ 
 dscommon.cf_OZPrint = function(reportname, argsOZParam, appendOZParam, argsOZFormParam) {

     // base URL
     let queryString = `/ds/common/jsp/ozviewer.jsp?reportname=${reportname}&MODE=PRINT`;
     let parameterValues = "";

     // ---------- 1. argsOZParam 처리 ----------
     if (argsOZParam) {
         if (argsOZParam instanceof MultiODIParam) {
             parameterValues += dscommon.cfGetOZParameterValues(argsOZParam)
                              + argsOZParam.getODINames();
         } else if (argsOZParam instanceof ODIParam) {
             parameterValues += argsOZParam.getParameterValues()
                              + argsOZParam.getODIName();
         }
     }

     // ---------- 2. appendOZParam 처리 ----------
     // 인자가 없으면 ViewerParam 생성
     if (!appendOZParam) {
         appendOZParam = new ViewerParam();
     }

     // viewer 모드는 print
     appendOZParam.add("viewer.mode", "print");
     parameterValues += appendOZParam.getParameterValues();

     // ---------- 3. argsOZFormParam 처리 ----------
     if (argsOZFormParam) {
         parameterValues += argsOZFormParam.getParameterValues();
     }

     // ---------- 4. 최종 호출 ----------
     dscommon.cfCallReportFile(queryString, parameterValues);
 };

/**
 * @type   : function
 * @access : public
 * @desc   : 다중 보고서양식 출력시 사용(PDF파일로 EXPORT)
 * <pre>
 *
 *
 *		입력 예 
 *     	사용예:) 
 * </pre>
 * 
 * @sig    : 
 * @param  : string required 입력 string
 * @author : 장윤기
 */ 
 dscommon.cf_OZExport = function(reportname, argsOZParam, appendOZParam, argsOZFormParam) {

     // base queryString
     let queryString = `/ds/common/jsp/ozviewer.jsp?reportname=${reportname}&MODE=EXPORT`;
     let parameterValues = "";

     // ----- 1. argsOZParam 처리 -----
     if (argsOZParam) {
         if (argsOZParam instanceof MultiODIParam) {
             parameterValues += dscommon.cfGetOZParameterValues(argsOZParam) 
                              + argsOZParam.getODINames();
         } 
         else if (argsOZParam instanceof ODIParam) {
             parameterValues += argsOZParam.getParameterValues() 
                              + argsOZParam.getODIName();
         }
     }

     // ----- 2. appendOZParam 처리 -----
     // 없으면 ViewerParam 생성
     if (!appendOZParam) {
         appendOZParam = new ViewerParam();
     }

     // export 모드 지정
     appendOZParam.add("viewer.mode", "export");
     parameterValues += appendOZParam.getParameterValues();

     // ----- 3. argsOZFormParam 처리 -----
     if (argsOZFormParam) {
         parameterValues += argsOZFormParam.getParameterValues();
     }

     // ----- 4. 최종 호출 -----
     dscommon.cfCallReportFile(queryString, parameterValues);
 };

/**
 * @type   : function
 * @access : public
 * @desc   : 지정한 날짜와의 Gap만큼의 날짜를 리턴해준다.<br>
 * <pre>사용예 :
 *
 * 1. cfGetGapDate( '20060123', -1 ); => 20060122
 * </pre>
 * @sig    :
 * @param  : 지정하고자 하는 날짜, 간격(Gap)
 * @author : 김정자 
 */
dscommon.cf_GetGapDate = function(yyyymmdd, gap) {

    const year = parseInt(yyyymmdd.substring(0, 4), 10);
    const month = parseInt(yyyymmdd.substring(4, 6), 10) - 1;
    const day = parseInt(yyyymmdd.substring(6, 8), 10);

    const gapDays = parseInt(gap, 10) || 0;

    // 날짜 조정
    let date = new Date(year, month, day);
    date.setDate(date.getDate() + gapDays);

    let yy = date.getFullYear().toString();
    let mm = (date.getMonth() + 1).toString().padStart(2, "0");
    let dd = date.getDate().toString().padStart(2, "0");

    return yy + mm + dd;
};

/**
 * @type   : function
 * @access : public
 * @desc   : 지정한 날짜시간과의 Gap시간, Gap분 만큼의 날짜시간을 리턴해준다.<br>
 * <pre>사용예 :
 *
 * 1. cfGetGapDateTime( '200601231111', -1, -1 ); => 200601231010
 * </pre>
 * @sig    :
 * @param  : 지정하고자 하는 시간간격, 분간격
 * @author : 이동철
 */
dscommon.cf_GetGapDateTime = function(dateTime, gapHour, gapMinute) {

    const yyyy = dateTime.substring(0, 4);
    const MM = parseInt(dateTime.substring(4, 6), 10) - 1;
    const dd = dateTime.substring(6, 8);

    const hh = dateTime.substring(8, 10);
    const mm = dateTime.substring(10, 12);

    const gapH = parseInt(gapHour, 10) || 0;
    const gapM = parseInt(gapMinute, 10) || 0;

    // 날짜 객체 생성
    let ffday = new Date(yyyy, MM, dd, hh, mm);

    // 시간/분 추가
    ffday.setHours(ffday.getHours() + gapH);
    ffday.setMinutes(ffday.getMinutes() + gapM);

    // 결과값 구성
    let to_yyyy = ffday.getFullYear().toString();
    let to_MM = (ffday.getMonth() + 1).toString().padStart(2, "0");
    let to_dd = ffday.getDate().toString().padStart(2, "0");
    let to_hh = ffday.getHours().toString().padStart(2, "0");
    let to_mm = ffday.getMinutes().toString().padStart(2, "0");

    return to_yyyy + to_MM + to_dd + to_hh + to_mm;
};

/**
 * @type   : function
 * @access : public
 * @desc   : 컨테이너번호 유효성 체크.<br>
 * <pre>사용예 :
 *
 * 1. cf_CheckCntrNo( 'CAXU2520345' );
 * </pre>
 * @sig    :
 * @param  : 컨테이너번호
 * @author : 최수빈 
 */
dscommon.cf_CheckCntrNo = function(parCntrNo) {
    const tempData = "1012131415161718192021232425262728293031323435363738";
    let cntrNo = (parCntrNo || "").trim();

    // 기본 형식 체크
    if (cntrNo === "" || cntrNo.length !== 11) {
        return false;
    }

    // 정규식 체크: 영문자 4 + 숫자 7
    const regex = /^[A-Z]{4}[0-9]{7}$/;
    if (!regex.test(cntrNo)) {
        return false;
    }

    // 문자 코드 계산
    const tempPos1 = tempData.substr((cntrNo.charCodeAt(0) - 65) * 2, 2) * 1;
    const tempPos2 = tempData.substr((cntrNo.charCodeAt(1) - 65) * 2, 2) * 2;
    const tempPos3 = tempData.substr((cntrNo.charCodeAt(2) - 65) * 2, 2) * 4;
    const tempPos4 = tempData.substr((cntrNo.charCodeAt(3) - 65) * 2, 2) * 8;

    const tempSum =
        tempPos1 + tempPos2 + tempPos3 + tempPos4 +
        (cntrNo.substr(4, 1) * 16) +
        (cntrNo.substr(5, 1) * 32) +
        (cntrNo.substr(6, 1) * 64) +
        (cntrNo.substr(7, 1) * 128) +
        (cntrNo.substr(8, 1) * 256) +
        (cntrNo.substr(9, 1) * 512);

    const tempMod = (tempSum % 11) + "";
    const checkDigit = tempMod.charAt(tempMod.length - 1);

    // 마지막 자릿수 비교
    return cntrNo.substr(10, 1) === checkDigit;
};

/**
 * @type   : function
 * @access : public
 * @desc   : 소숫점 반올림 함수  <br>
 * <pre>사용예 :
 *
 * 1. Math.roundf( "123.12", 1);	=> 123.1 
 * </pre>
 * @sig    :
 * @param  : 반올림할 숫자 , 반올림하여 보여질 소숫점 자릿수 
 * @author : 김정자 
 */
	Math.roundf = function( val, precision ) {
		var p = this.pow( 10, precision );
		return this.round( val * p ) / p;
	}

/**
 * @type   : function
 * @access : public
 * @desc   : 사용자의 입력값이 Byte로 환산된 최대길이를 넘을 경우 입력이 안되도록 하는 함수. <br>
 *           안타깝게도 Windows XP 환경에서는 한글에 대한 키이벤트가 발생하지 않아서 동작하지 않는다.<br>
 *           오브젝트 선언시 onkeydown 이벤트에 다음과 같이 기술해 주어야만 한다.
 * <pre>
 *     cf_ValidateMaxByteLengthEmEdit(this, max_byte_length, keyCode)
 *     (여기서 max_byte_length 자리에는 Byte로 환산시 최대길이를 숫자로 적어준다.)
 *
 *     예)
 *     &lt;script language=JavaScript for=ed_cndBookingNo event=onKeyDown(kcode,scode)&gt;
 *			cf_ValidateMaxByteLengthEmEdit(this, max_byte_length, kcode);
 * 	   &lt;/script&gt;
 * </pre>
 *           현재는 가우스의 EMEdit 에만 적용된다.
 * @sig    : oElement, length
 * @param  : oElement required 입력필드 객체
 * @param  : length   required max byte length
 * @author : 이상유
 */
 dscommon.cf_ValidateMaxByteLengthEmEdit = function (oElement, maxLen, keyCode) {

     // 이동/삭제 등 컨트롤 키는 그대로 허용
     const allowKeys = [8, 35, 36, 37, 38, 39, 40, 46]; 
     if (allowKeys.includes(keyCode)) {
         return true;
     }

     let value = oElement.getValue() || "";

     // 현재 바이트 길이 초과 여부
     if (dscommon.cfGetByteLength(value) > maxLen) {

         // 초과하면 마지막 입력 제거
         value = value.substr(0, value.length - 1);
         oElement.setValue(value);

         // 포커스 유지 (Gauce 대응)
         oElement.blur();
         oElement.focus();

         return false;
     }

     // onkeyup 이벤트 한 번만 등록
     if (!oElement.__byteHandlerAdded) {

         oElement.bind("onkeyup", function () {
             let v = oElement.getValue() || "";
             if (dscommon.cfGetByteLength(v) > maxLen) {
                 v = v.substr(0, v.length - 1);
                 oElement.setValue(v);
                 oElement.blur();
                 oElement.focus();
             }
         });

         oElement.__byteHandlerAdded = true;
     }

     // 바이트 길이가 정확히 max라면 한글 조합 중인지 체크
     if (dscommon.cfGetByteLength(value) === maxLen) {
         const c = value.charCodeAt(value.length - 1);

         const isHangulComplete = (c >= 0xAC00 && c <= 0xD7A3);
         const isHangulJamo     = (c >= 0x3131 && c <= 0x318E);

         // 한글 조합 중이면 입력 지속 가능
         if (isHangulComplete || isHangulJamo) {
             return true;
         } else {
             return false;
         }
     }

     return true;
 };


/**
 * @type   : function
 * @access : public
 * @desc   : 데이터셋에서 삭제행을 제외한  모든 행수를 count한다.<br>
 * <pre>사용예 :
 *
 * 1. cf_CountRowExceptDeleteRow( dataset )
 * </pre>
 * @sig    :
 * @param  : 데이터셋
 * @author : 최수빈 
 */
dscommon.cf_CountRowExceptDeleteRow = function (ds) {
    if (!ds) return 0;

    const rowCount = ds.getRowCount();
    let totalRows = 0;

    for (let i = 0; i < rowCount; i++) {
        const status = ds.getRowStatus(i);

        // 삭제행이 아니면 count
        if (status !== "DELETE") {
            totalRows++;
        }
    }

    return totalRows;
};

/**
 * @type   : function
 * @access : public
 * @desc   : 공백 제거하기<br>
 * <pre>사용예 :
 *
 * 1. cf_IgnoreSpaces( string )
 * </pre>
 * @sig    :
 * @param  : string
 * @author : 최수빈 
 */
dscommon.cf_IgnoreSpaces = function (str) {
    if (str == null) return "";

    return String(str).replace(/ /g, "");
};


/**
 * @type   : function
 * @access : public
 * @desc   : 마지막일자 return
 * <pre>사용예 : cf_lastDate('2006','02');
 *
 * 1. cf_lastDate( year, month )
 * </pre>
 * @sig    :
 * @param  : 데이터셋
 * @author : 장윤기 
 */
dscommon.cf_lastDate = function (year, month) {

    // 숫자 안전 변환
    const y = Number(year);
    const m = Number(month);

    if (isNaN(y) || isNaN(m) || m < 1 || m > 12) {
        return null;   // 잘못된 입력 처리
    }

    const monthIndex = m - 1;

    // 기본 월별 일수
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // 윤년 체크 → 2월만 29일
    const isLeap = (y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0);
    if (monthIndex === 1 && isLeap) {
        return 29;
    }

    return daysInMonth[monthIndex];
};

/**
 * @type   : function
 * @access : public
 * @desc   : null값 포함하는 그리드 년월일 체크, 입력된 형식이 : 20060504 pattern 형식과 같은지 확인
 * <pre>
 *		입력 예 
 *     	사용예:) cf_gidYearNullCheck(object); 2006/05/04
 * </pre>
 * 위와같이 사용했을 경우 Object에 입력된 값이 년월일 형식과 맞는지 확인한다 null값 허용.
 * @sig    : string
 * @param  : string required 입력 string
 * @author : 김효상, 이상유, 장윤기
 */ 
 dscommon.cf_gidYearNullCheck = function (strYear) {
     const numberValue = strYear ? String(strYear) : "";

     if (numberValue === "") {
         return true;     // 값이 없으면 true
     }

     // 최소한 8자리(YYYYMMDD)가 안되는 경우 무효
     if (numberValue.length < 8) {
         return false;
     }

     const inputYear = Number(numberValue.substr(0, 4));
     const inputMonth = Number(numberValue.substr(4, 2)) - 1; // JS month = 0~11
     const inputDate = Number(numberValue.substr(6, 2));

     const resultDate = new Date(inputYear, inputMonth, inputDate);

     // 연/월/일이 정확히 일치해야 유효한 날짜
     return (
         resultDate.getFullYear() === inputYear &&
         resultDate.getMonth() === inputMonth &&
         resultDate.getDate() === inputDate
     );
 };

