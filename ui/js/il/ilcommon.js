ilcommon = {};
//----------------------------- 1. 공통 메세지 -------------------------------//
var E_MSG_CM_INF_001   = "Data was saved successfully.";  
var E_MSG_CM_INF_002   = "Data was registered successfully.";
var E_MSG_CM_INF_003   = "Data was modified successfullly.";
var E_MSG_CM_INF_004   = "Data was deleted successfullly.";
var E_MSG_CM_INF_005   = "Welcome, %1!";
var E_MSG_CM_INF_008   = "Please contact the system administrator.";
var E_MSG_CM_INF_009   = "Data was printed successully.";
var E_MSG_CM_INF_010   = "%1 was saved successfully.";
var E_MSG_CM_INF_011   = "%1 was deleted.";
var E_MSG_CM_INF_012   = "%1 was created successfully.";
var E_MSG_CM_INF_013   = "Process cancelled.";
var E_MSG_CM_INF_014   = "%1 has been applied sucessully.";
var E_MSG_CM_INF_007   = "This data is valid.";
var E_MSG_CM_INF_015   = "%1 is valid.";
var E_MSG_CM_INF_018   = "Data was send successfully.";

var E_MSG_CM_CRM_001   = "Do you wish to save?";
var E_MSG_CM_CRM_002   = "Do you wish register?";
var E_MSG_CM_CRM_003   = "Do you wish modify?";
var E_MSG_CM_CRM_004   = "Do you wish delete?";
var E_MSG_CM_CRM_005   = "Data was not updated. Do you wish to continue?";
var E_MSG_CM_CRM_006   = "%1 already exists. Do you wish to add?";
var E_MSG_CM_CRM_008   = "Do you wish to delete %1?";
var E_MSG_CM_CRM_009   = "Do you wish to create %1?";
var E_MSG_CM_CRM_010   = "Do you wish to apply %1?";
var E_MSG_CM_CRM_011   = "Do you wish to cancel?";
var E_MSG_CM_CRM_013   = "Do you wish to validate/approve immediately?";
var E_MSG_CM_CRM_014   = "If you delete %1, %2 will also be deleted. Do you wish to continue?";
var E_MSG_CM_CRM_015   = "There have been changes. Do you wish to save?";
var E_MSG_CM_CRM_016   = "Do you wish to batch create?";
var E_MSG_CM_CRM_017   = "%1 is incorrect. Do you wish to %2?";


var E_MSG_CM_ERR_001   = "There have been no changes for %1.";
var E_MSG_CM_ERR_002   = "%1 is mandatory.";
var E_MSG_CM_ERR_003   = "No data found./Could not find any relevant data.";
var E_MSG_CM_ERR_004   = "Blank space is not allowed for %1.";
var E_MSG_CM_ERR_005   = "%1 must be %2 digits.";
var E_MSG_CM_ERR_006   = "%1 must be between %2 and %3.";
var E_MSG_CM_ERR_007   = "%1 must be numeric.";
var E_MSG_CM_ERR_008   = "%1 must be letters.";
var E_MSG_CM_ERR_009   = "%1 must be alphanumeric.(Blank space not allowed.)";
var E_MSG_CM_ERR_010   = "%1 must be alphanumeric.(Blank space allowed.)";
var E_MSG_CM_ERR_011   = "%1 must be at least %2 digits.";
var E_MSG_CM_ERR_012   = "%1 must be at most %2 digits.";
var E_MSG_CM_ERR_013   = "%1 must be at least %2.";
var E_MSG_CM_ERR_014   = "%1 must be at most %2.";
var E_MSG_CM_ERR_015   = "Year is incorrect for %1.";
var E_MSG_CM_ERR_016   = "%1 is not a valid resident registration number.";
var E_MSG_CM_ERR_017   = "%1 is not a valid business registration number.";
var E_MSG_CM_ERR_018   = "%1 is not a valid date.";
var E_MSG_CM_ERR_019   = "Month is incorrect for %1.";
var E_MSG_CM_ERR_020   = "Day is incorrect for %1.";
var E_MSG_CM_ERR_021   = "Hour is incorrect for %1.";
var E_MSG_CM_ERR_022   = "Minute is incorrect for %1.";
var E_MSG_CM_ERR_023   = "Second is incorrect for %1.";
var E_MSG_CM_ERR_025   = "%1 must be on or after %2-%3-%4";
var E_MSG_CM_ERR_024   = "%1 must be on or before %2-%3-%4";
var E_MSG_CM_ERR_026   = "%1 must be the following format '%2'.";
                            "  - # : Letters or numbers.\n" +
                            "  - h, H : Korean(H includes blank)\n" +
                            "  - A, Z : Letters(Z includes blank)\n" +
                            "  - 0, 9 : Numbers(9 includes blank)";
var E_MSG_CM_ERR_027   =  "%1 must be %2 characters. (%3 for Korean).";
var E_MSG_CM_ERR_028   =  "%1 must be at least %2 characters. (%3 for Korean).";
var E_MSG_CM_ERR_029   =  "%1 must be at most %2 characters. (%3 for Korean).";
var E_MSG_CM_ERR_030   =  "%1은(는) ";
var E_MSG_CM_ERR_031   =  "%1th data of %2 ";
var E_MSG_CM_ERR_032   =  "%1 already exists.";
var E_MSG_CM_ERR_033   =  "Cannot use letters as below.";
var E_MSG_CM_ERR_034   =  "There is a problem with the page setup.";
var E_MSG_CM_ERR_035   =  "Cannot print more than %1 pages.";
var E_MSG_CM_ERR_036   =  "Can use letters as below.";
var E_MSG_CM_ERR_037   =  "%1 is not a valid email address.";
var E_MSG_CM_ERR_038   =  "Not a valid %1.";
var E_MSG_CM_ERR_039   =  "Start date must be before End date.";
var E_MSG_CM_ERR_040   =  "The first password does not match with the second password.";
var E_MSG_CM_ERR_041   =  "%1 operation cannot be performed for %2.";
var E_MSG_CM_ERR_042   =  "There have been changes in %1. \n Please save first and try again.";
var E_MSG_CM_ERR_043   =  "%1 is not valid. Please input again.";
var E_MSG_CM_ERR_045   =  "Start period must be less than End period.";
var E_MSG_CM_ERR_046   =  "%1 does not exist.";
var E_MSG_CM_ERR_047   =  "System error. Please contact the system administrator.";
var E_MSG_CM_ERR_048   =  "%1 must be smaller than %2.";
var E_MSG_CM_ERR_049   =  "%1 does not exist.";
var E_MSG_CM_ERR_050   =  "System error. Please try again from the start.";
var E_MSG_CM_ERR_051   =  "%1 operation failed.";
var E_MSG_CM_ERR_052   =  "Cannot find %1 with given condition.";
var E_MSG_CM_ERR_053   =  "%1 has been omitted.";
var E_MSG_CM_ERR_054   =  "%1 creation failed.";
var E_MSG_CM_ERR_055   =  "Please check %1.";
var E_MSG_CM_ERR_056   =  "Nothing has been selected.";
var E_MSG_CM_ERR_057   =  "%1 must be larger than %2.";
var E_MSG_CM_ERR_058   =  "Start time must be before End time.";
var E_MSG_CM_ERR_059   =  "%1 must be an integer of %2 digits or less.";
var E_MSG_CM_ERR_060   =  "%1 must be %2 decimals or less.";
var E_MSG_CM_ERR_061   =  "%1 must be %2.";
var E_MSG_CM_ERR_062   =  "%1 is not a valid business registration number.";
var E_MSG_CM_ERR_063   =  "%1 is required at %2.";
var E_MSG_CM_ERR_064   =  "%1 cannot %2. Please %3.";
var E_MSG_CM_ERR_065   =  "%1 is required.";
var E_MSG_CM_ERR_066   =  "%1 can be input.";

var E_MSG_CM_WRN_001   =  "Nothing to save. Please retrieve data first.";
var E_MSG_CM_WRN_002   =  "Data not found.";
var E_MSG_CM_WRN_003   =  "Please enter %1.";
var E_MSG_CM_WRN_004   =  "Nothing to delete.";
var E_MSG_CM_WRN_005   =  "Please press "+" button first and input data.";
var E_MSG_CM_WRN_006   =  "Please press "+" button first and input %1.";
var E_MSG_CM_WRN_007   =  "Please choose %1.";
var E_MSG_CM_WRN_008   =  "Data not found. Please search %1 first.";
var E_MSG_CM_WRN_009   =  "Nothing to print.";
var E_MSG_CM_WRN_010   =  "Please use %1 button.";
var E_MSG_CM_WRN_011   =  "%1 alreay exists.";
var E_MSG_CM_WRN_012   =  "%1 was not applied.";
var E_MSG_CM_INF_016   =  "%1 is not valid.";
var E_MSG_CM_INF_017   =  "Alreay logged out.";
var E_MSG_CM_WRN_018   =  "%1 does not exist. Please %2 first.";

ilcommon.E_MSG_CM_INF_001   = "Data was saved successfully.";  
ilcommon.E_MSG_CM_INF_002   = "Data was registered successfully.";
ilcommon.E_MSG_CM_INF_003   = "Data was modified successfullly.";
ilcommon.E_MSG_CM_INF_004   = "Data was deleted successfullly.";
ilcommon.E_MSG_CM_INF_005   = "Welcome, %1!";
ilcommon.E_MSG_CM_INF_008   = "Please contact the system administrator.";
ilcommon.E_MSG_CM_INF_009   = "Data was printed successully.";
ilcommon.E_MSG_CM_INF_010   = "%1 was saved successfully.";
ilcommon.E_MSG_CM_INF_011   = "%1 was deleted.";
ilcommon.E_MSG_CM_INF_012   = "%1 was created successfully.";
ilcommon.E_MSG_CM_INF_013   = "Process cancelled.";
ilcommon.E_MSG_CM_INF_014   = "%1 has been applied sucessully.";
ilcommon.E_MSG_CM_INF_007   = "This data is valid.";
ilcommon.E_MSG_CM_INF_015   = "%1 is valid.";
ilcommon.E_MSG_CM_INF_018   = "Data was send successfully.";

ilcommon.E_MSG_CM_CRM_001   = "Do you wish to save?";
ilcommon.E_MSG_CM_CRM_002   = "Do you wish register?";
ilcommon.E_MSG_CM_CRM_003   = "Do you wish modify?";
ilcommon.E_MSG_CM_CRM_004   = "Do you wish delete?";
ilcommon.E_MSG_CM_CRM_005   = "Data was not updated. Do you wish to continue?";
ilcommon.E_MSG_CM_CRM_006   = "%1 already exists. Do you wish to add?";
ilcommon.E_MSG_CM_CRM_008   = "Do you wish to delete %1?";
ilcommon.E_MSG_CM_CRM_009   = "Do you wish to create %1?";
ilcommon.E_MSG_CM_CRM_010   = "Do you wish to apply %1?";
ilcommon.E_MSG_CM_CRM_011   = "Do you wish to cancel?";
ilcommon.E_MSG_CM_CRM_013   = "Do you wish to validate/approve immediately?";
ilcommon.E_MSG_CM_CRM_014   = "If you delete %1, %2 will also be deleted. Do you wish to continue?";
ilcommon.E_MSG_CM_CRM_015   = "There have been changes. Do you wish to save?";
ilcommon.E_MSG_CM_CRM_016   = "Do you wish to batch create?";
ilcommon.E_MSG_CM_CRM_017   = "%1 is incorrect. Do you wish to %2?";


ilcommon.E_MSG_CM_ERR_001   = "There have been no changes for %1.";
ilcommon.E_MSG_CM_ERR_002   = "%1 is mandatory.";
ilcommon.E_MSG_CM_ERR_003   = "No data found./Could not find any relevant data.";
ilcommon.E_MSG_CM_ERR_004   = "Blank space is not allowed for %1.";
ilcommon.E_MSG_CM_ERR_005   = "%1 must be %2 digits.";
ilcommon.E_MSG_CM_ERR_006   = "%1 must be between %2 and %3.";
ilcommon.E_MSG_CM_ERR_007   = "%1 must be numeric.";
ilcommon.E_MSG_CM_ERR_008   = "%1 must be letters.";
ilcommon.E_MSG_CM_ERR_009   = "%1 must be alphanumeric.(Blank space not allowed.)";
ilcommon.E_MSG_CM_ERR_010   = "%1 must be alphanumeric.(Blank space allowed.)";
ilcommon.E_MSG_CM_ERR_011   = "%1 must be at least %2 digits.";
ilcommon.E_MSG_CM_ERR_012   = "%1 must be at most %2 digits.";
ilcommon.E_MSG_CM_ERR_013   = "%1 must be at least %2.";
ilcommon.E_MSG_CM_ERR_014   = "%1 must be at most %2.";
ilcommon.E_MSG_CM_ERR_015   = "Year is incorrect for %1.";
ilcommon.E_MSG_CM_ERR_016   = "%1 is not a valid resident registration number.";
ilcommon.E_MSG_CM_ERR_017   = "%1 is not a valid business registration number.";
ilcommon.E_MSG_CM_ERR_018   = "%1 is not a valid date.";
ilcommon.E_MSG_CM_ERR_019   = "Month is incorrect for %1.";
ilcommon.E_MSG_CM_ERR_020   = "Day is incorrect for %1.";
ilcommon.E_MSG_CM_ERR_021   = "Hour is incorrect for %1.";
ilcommon.E_MSG_CM_ERR_022   = "Minute is incorrect for %1.";
ilcommon.E_MSG_CM_ERR_023   = "Second is incorrect for %1.";
ilcommon.E_MSG_CM_ERR_025   = "%1 must be on or after %2-%3-%4";
ilcommon.E_MSG_CM_ERR_024   = "%1 must be on or before %2-%3-%4";
ilcommon.E_MSG_CM_ERR_026   = "%1 must be the following format '%2'.";
                            "  - # : Letters or numbers.\n" +
                            "  - h, H : Korean(H includes blank)\n" +
                            "  - A, Z : Letters(Z includes blank)\n" +
                            "  - 0, 9 : Numbers(9 includes blank)";
ilcommon.E_MSG_CM_ERR_027   =  "%1 must be %2 characters. (%3 for Korean).";
ilcommon.E_MSG_CM_ERR_028   =  "%1 must be at least %2 characters. (%3 for Korean).";
ilcommon.E_MSG_CM_ERR_029   =  "%1 must be at most %2 characters. (%3 for Korean).";
ilcommon.E_MSG_CM_ERR_030   =  "%1은(는) ";
ilcommon.E_MSG_CM_ERR_031   =  "%1th data of %2 ";
ilcommon.E_MSG_CM_ERR_032   =  "%1 already exists.";
ilcommon.E_MSG_CM_ERR_033   =  "Cannot use letters as below.";
ilcommon.E_MSG_CM_ERR_034   =  "There is a problem with the page setup.";
ilcommon.E_MSG_CM_ERR_035   =  "Cannot print more than %1 pages.";
ilcommon.E_MSG_CM_ERR_036   =  "Can use letters as below.";
ilcommon.E_MSG_CM_ERR_037   =  "%1 is not a valid email address.";
ilcommon.E_MSG_CM_ERR_038   =  "Not a valid %1.";
ilcommon.E_MSG_CM_ERR_039   =  "Start date must be before End date.";
ilcommon.E_MSG_CM_ERR_040   =  "The first password does not match with the second password.";
ilcommon.E_MSG_CM_ERR_041   =  "%1 operation cannot be performed for %2.";
ilcommon.E_MSG_CM_ERR_042   =  "There have been changes in %1. \n Please save first and try again.";
ilcommon.E_MSG_CM_ERR_043   =  "%1 is not valid. Please input again.";
ilcommon.E_MSG_CM_ERR_045   =  "Start period must be less than End period.";
ilcommon.E_MSG_CM_ERR_046   =  "%1 does not exist.";
ilcommon.E_MSG_CM_ERR_047   =  "System error. Please contact the system administrator.";
ilcommon.E_MSG_CM_ERR_048   =  "%1 must be smaller than %2.";
ilcommon.E_MSG_CM_ERR_049   =  "%1 does not exist.";
ilcommon.E_MSG_CM_ERR_050   =  "System error. Please try again from the start.";
ilcommon.E_MSG_CM_ERR_051   =  "%1 operation failed.";
ilcommon.E_MSG_CM_ERR_052   =  "Cannot find %1 with given condition.";
ilcommon.E_MSG_CM_ERR_053   =  "%1 has been omitted.";
ilcommon.E_MSG_CM_ERR_054   =  "%1 creation failed.";
ilcommon.E_MSG_CM_ERR_055   =  "Please check %1.";
ilcommon.E_MSG_CM_ERR_056   =  "Nothing has been selected.";
ilcommon.E_MSG_CM_ERR_057   =  "%1 must be larger than %2.";
ilcommon.E_MSG_CM_ERR_058   =  "Start time must be before End time.";
ilcommon.E_MSG_CM_ERR_059   =  "%1 must be an integer of %2 digits or less.";
ilcommon.E_MSG_CM_ERR_060   =  "%1 must be %2 decimals or less.";
ilcommon.E_MSG_CM_ERR_061   =  "%1 must be %2.";
ilcommon.E_MSG_CM_ERR_062   =  "%1 is not a valid business registration number.";
ilcommon.E_MSG_CM_ERR_063   =  "%1 is required at %2.";
ilcommon.E_MSG_CM_ERR_064   =  "%1 cannot %2. Please %3.";
ilcommon.E_MSG_CM_ERR_065   =  "%1 is required.";
ilcommon.E_MSG_CM_ERR_066   =  "%1 can be input.";

ilcommon.E_MSG_CM_WRN_001   =  "Nothing to save. Please retrieve data first.";
ilcommon.E_MSG_CM_WRN_002   =  "Data not found.";
ilcommon.E_MSG_CM_WRN_003   =  "Please enter %1.";
ilcommon.E_MSG_CM_WRN_004   =  "Nothing to delete.";
ilcommon.E_MSG_CM_WRN_005   =  "Please press "+" button first and input data.";
ilcommon.E_MSG_CM_WRN_006   =  "Please press "+" button first and input %1.";
ilcommon.E_MSG_CM_WRN_007   =  "Please choose %1.";
ilcommon.E_MSG_CM_WRN_008   =  "Data not found. Please search %1 first.";
ilcommon.E_MSG_CM_WRN_009   =  "Nothing to print.";
ilcommon.E_MSG_CM_WRN_010   =  "Please use %1 button.";
ilcommon.E_MSG_CM_WRN_011   =  "%1 alreay exists.";
ilcommon.E_MSG_CM_WRN_012   =  "%1 was not applied.";
ilcommon.E_MSG_CM_INF_016   =  "%1 is not valid.";
ilcommon.E_MSG_CM_INF_017   =  "Alreay logged out.";
ilcommon.E_MSG_CM_WRN_018   =  "%1 does not exist. Please %2 first.";

/**
작성하기전 결정되어야 할사항.
1. 복합운송 common.js 명은 ilcommon.js 이다.
2. method 명은 cf_methodName()으로 한다.
**/

/**
 * @type   : function
 * @access : public
 * @desc   : 그리드 높이를 조정 : 지정된 그리드의 Height 를 size 만큼 증감 시킨다.
 * <pre>
 *     사용예:) cf_grdHeiht(그리드명, 증감 사이즈)
 * </pre>
 * @author : 이상유
 */
ilcommon.cf_grdHeight = function (grdId, size) {
    // WebSquare 컴포넌트 객체 가져오기
    var grdObj = $c.util.getComponent(grdId);
    if (!grdObj) {
        console.warn("그리드 객체를 찾을 수 없습니다 :", grdId);
        return;
    }

    // 현재 height(px) 가져오기
    var curHeight = grdObj.getStyle("height");   // 예: "200px"

    // px 제거 후 숫자로 변환
    var intHeight = parseInt(curHeight.replace("px", ""), 10);

    // 높이 조정
    intHeight += size;

    if (intHeight > 0) {
        grdObj.setStyle("height", intHeight + "px");
        // 필요 시 부모 프레임 resize 호출
        // ilcommon.cf_frameHeight();
    }
};

/*
	문자열 공백없애기
	lvStr : Trim할 문자열
*/
ilcommon.cf_LTrim = function (lvStr) {
    if (typeof lvStr !== "string") return lvStr;
    return lvStr.replace(/^\s+/, "");
};

/*
	문자열 공백없애기
	lvStr : Trim할 문자열
*/
ilcommon.cf_RTrim = function (lvStr) {
    if (typeof lvStr !== "string") return lvStr;
    return lvStr.replace(/\s+$/, "");
};

/*
	문자열 공백없애기
	lvStr : Trim할 문자열
*/
ilcommon.cf_Trim = function (lvStr) {
    if (typeof lvStr !== "string") return lvStr;
    return lvStr.replace(/^\s+|\s+$/g, "");
};

/*
	기존문자열에 삽입문자를 왼쪽에 붙여 문자열길이를 전체문자열길이로 맞춤
	lvStr : 문자열, lvInsStr : 삽입할 문자열, lvLen : 전체문자열길이
*/
ilcommon.cf_LPad = function (lvStr, lvInsStr, lvLen) {
    lvStr = ilcommon.cf_Trim(lvStr);

    if (!lvInsStr || lvInsStr.length !== 1) {
        $c.alert("삽입할 문자는 1자만 가능합니다.");
        return lvStr;
    }

    return lvStr.padStart(lvLen, lvInsStr);
};

/**
 * @type   : function
 * @access : public
 * @desc   : Tab Key 버튼시 focus 이동 <br>
 * <pre>
  *     cf_objFocus(obj)
 * </pre>
 * @author : 김형준
 */
ilcommon.cf_objFocus = function (obj, e) {
    const key = e.keyCode || e.which;

    // Tab 키(9)
    if (key === 9) {
        e.preventDefault();   // event.returnValue = false 대체
        obj.focus();          // WebSquare 컴포넌트 focus
        return true;
    }

    return false;
};

/**
 * @type   : function
 * @access : public
 * @desc   : 형식에 맞는 데이타 타입 이외의 데이타 타입false <br>
 *			 Input type에만 적용 emedit 적용안됨 <br>
 * <pre>
  *     cf_DataType(obj,flag)
 * </pre>
 * @author : 장상만
 */
 ilcommon.cf_DataType = function (obj, flag) {
     let chars = "";

     switch (flag) {
         case "E":
             chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
             break;

         case "LE":
             chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
             break;

         case "N":
             chars = "0123456789.";
             if (obj.value.length === 0) obj.value = "0";
             break;

         case "NN":
             chars = "0123456789.";
             break;

         case "NC":
             chars = ",.-0123456789";
             break;

         case "EN":
             chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.";
             break;

         default:
             return true;
     }

     // 입력 문자 검증
     for (let i = 0; i < obj.value.length; i++) {
         if (chars.indexOf(obj.value.charAt(i)) === -1) {

             // 잘못 입력된 경우 값 초기화
             if (flag === "E" || flag === "EN") {
                 obj.value = "";
             } else {
                 obj.value = "0";
             }

             obj.focus();
             return false;
         }
     }
     return true;
 };

/**
 * @type   : function
 * @access : public
 * @desc   : 해당 span에 그리드의 총건수를 표시한다.
 * @sig    : spanId, totalRows
 * @param  : spanId required 건수를 표시할 span
 * @param  : totalRows required 총건수
 * @author : 송동혁
 */
ilcommon.cf_ShowTotalRows = function (spanId, totalRows) {
    totalRows = String(totalRows);

    // 3자리 콤마 처리 (간단 버전)
    if (totalRows.length > 3) {
        totalRows = totalRows.substr(0, totalRows.length - 3) + "," +
                    totalRows.substr(totalRows.length - 3);
    }

    // spanId가 DOM Element 또는 WebSquare 객체 둘 다 지원
    if (typeof spanId === "string") {
        // WebSquare 컴포넌트 (id)
        const obj = $w.getComponentById(spanId);
        if (obj && obj.setValue) {
            obj.setValue("Total " + totalRows);
        } else {
            // 일반 DOM ID
            const dom = document.getElementById(spanId);
            if (dom) dom.innerHTML = "Total " + totalRows;
        }
    } else {
        // 직접 Element 넘겨준 경우
        spanId.innerHTML = "Total " + totalRows;
    }
};

ilcommon.checkInputs = function () {

    // 결과 HTML
    let html = "";
    html += "<table width='600' border='1' cellspacing='0' cellpadding='3'>";
    html += "<tr><th>컴포넌트</th><th>Validation</th><th>ID / 컬럼명</th></tr>";

    // -------------------------------------------------------
    // 1) 페이지 내 모든 WebSquare 컴포넌트 조회
    // -------------------------------------------------------
    const compList = $w.components;

    for (const comp of compList) {

        // -----------------------------
        //  INPUT 계열
        // -----------------------------
        if (comp.getClassType && ["w2:textbox", "w2:password", "w2:textarea", "w2:hidden", "w2:radio", "w2:selectbox"].includes(comp.getClassType())) {

            let validExp = comp.getAttribute("data-valid") || "";
            let compId = comp.id || "(no id)";

            html += "<tr>";
            html += `<td>${comp.getClassType()}</td>`;
            html += `<td>${validExp}</td>`;
            html += `<td>${compId}</td>`;
            html += "</tr>";
        }

        // -----------------------------
        //  GRID 컴포넌트
        // -----------------------------
        else if (comp.getClassType && comp.getClassType() === "w2:grid") {

            let compId = comp.id;

            let colList = comp.getColumnInfoList(); // WebSquare6 API

            colList.forEach(col => {
                html += "<tr>";
                html += `<td>${compId}</td>`;
                html += `<td>${col.name || ""}</td>`;
                html += `<td>${col.id}</td>`;
                html += "</tr>";
            });
        }
    }

    html += "</table>";

    // -------------------------------------------------------
    // 팝업창 오픈하여 결과 표시
    // -------------------------------------------------------
    const newwin = window.open("", "checkInputsWin", "width=900,height=700,scrollbars=1,resizable=yes");
    newwin.document.write(html);
    newwin.document.close();
    newwin.focus();
};


/**
 * @type   : function
 * @access : public
 * @desc   : 숫자를 영문으로 전환 <br>
 * <pre>
  *     cf_NumChangeEng(obj)
 * </pre>
 * @author : 김진모	 2007-08-02
 */

ilcommon.d1 = function (x) { // 한 자리 숫자 영문 변환
    switch (x) {
        case '0': return "";
        case '1': return " ONE ";
        case '2': return " TWO ";
        case '3': return " THREE ";
        case '4': return " FOUR ";
        case '5': return " FIVE ";
        case '6': return " SIX ";
        case '7': return " SEVEN ";
        case '8': return " EIGHT ";
        case '9': return " NINE ";
        default:  return "Not a Number";
    }
};

ilcommon.d2 = function (x) { // 십의 자리 숫자 영문 변환
    switch (x) {
        case '0': return "";
        case '1': return "";
        case '2': return " TWENTY ";
        case '3': return " THIRTY ";
        case '4': return " FORTY ";
        case '5': return " FIFTY ";
        case '6': return " SIXTY ";
        case '7': return " SEVENTY ";
        case '8': return " EIGHTY ";
        case '9': return " NINETY ";
        default:  return "Not a Number";
    }
};

ilcommon.d3 = function (x) { // 10~19 Teen 숫자 변환
    switch (x) {
        case '0': return " TEN ";
        case '1': return " ELEVEN ";
        case '2': return " TWELVE ";
        case '3': return " THIRTEEN ";
        case '4': return " FOURTEEN ";
        case '5': return " FIFTEEN ";
        case '6': return " SIXTEEN ";
        case '7': return " SEVENTEEN ";
        case '8': return " EIGHTEEN ";
        case '9': return " NINETEEN ";
        default:  return "Not a Number";
    }
};

ilcommon.cf_NumChangeEng = function (input) {

    if (!input || isNaN(input)) {
        return "Invalid Input";
    }

    input = input.toString();
    let len = input.length;

    if (len > 9) {
        return "Invalid Input"; // 기존 함수도 9자리까지만 처리
    }

    // 오른쪽 정렬
    let digit = new Array(10);
    for (let i = 0; i < len; i++) {
        digit[len - i] = input.charAt(i);
    }

    let store = new Array(10).fill("");
    let invalid = false;

    let teen1 = "";
    let teen2 = "";
    let teen3 = "";

    // 자리수별 변환
    for (let pos = 1; pos <= len; pos++) {
        let x = pos;

        switch (x) {
            case 9: // millions - hundreds
                store[x] = ilcommon.d1(digit[x]);
                break;

            case 8: // millions - tens
                if (digit[x] === "1") teen3 = "yes";
                store[x] = ilcommon.d2(digit[x]);
                break;

            case 7: // millions - ones
                if (teen3 === "yes") {
                    teen3 = "";
                    store[x] = ilcommon.d3(digit[x]);
                } else {
                    store[x] = ilcommon.d1(digit[x]);
                }
                break;

            case 6: // thousands - hundreds
                store[x] = ilcommon.d1(digit[x]);
                break;

            case 5: // thousands - tens
                if (digit[x] === "1") teen2 = "yes";
                store[x] = ilcommon.d2(digit[x]);
                break;

            case 4: // thousands - ones
                if (teen2 === "yes") {
                    teen2 = "";
                    store[x] = ilcommon.d3(digit[x]);
                } else {
                    store[x] = ilcommon.d1(digit[x]);
                }
                break;

            case 3: // hundreds
                store[x] = ilcommon.d1(digit[x]);
                break;

            case 2: // tens
                if (digit[x] === "1") teen1 = "yes";
                store[x] = ilcommon.d2(digit[x]);
                break;

            case 1: // ones
                if (teen1 === "yes") {
                    teen1 = "";
                    store[x] = ilcommon.d3(digit[x]);
                } else {
                    store[x] = ilcommon.d1(digit[x]);
                }
                break;
        }

        if (store[x] === "Not a Number") {
            invalid = true;
        }
    }

    if (invalid) return "Invalid Input";

    // 단위 (million, thousand, hundred)
    const a1 = store[9] !== "" ? " HUNDRED " : "";
    const a2 = (store[9] || store[8] || store[7]) ? " MILLION " : "";

    const a3 = store[6] !== "" ? " HUNDRED " : "";
    const a4 = (store[6] || store[5] || store[4]) ? " THOUSAND " : "";

    const a5 = store[3] !== "" ? " HUNDRED " : "";

    let result =
        store[9] + a1 + store[8] + store[7] +
        a2 +
        store[6] + a3 + store[5] + store[4] +
        a4 +
        store[3] + a5 + store[2] + store[1];

    result = result.trim();

    return result === "" ? "ZERO" : result;
};

/*
특수문자로만 구성되어있는지 CHECK
 */
ilcommon.cf_ChkInputOnlyNumberAndAlphabet = function (value) {

    if (!value) return false;

    // 공백 제거
    const chr = value.replace(/\s+/g, "");

    // 한 글자라도 영문/숫자가 포함되어 있으면 true
    for (let i = 0; i < chr.length; i++) {
        const code = chr.charCodeAt(i);

        // a~z
        if (code >= 0x61 && code <= 0x7A) return true;

        // A~Z
        if (code >= 0x41 && code <= 0x5A) return true;

        // 0~9
        if (code >= 0x30 && code <= 0x39) return true;
    }

    // 영문/숫자가 하나도 없고 특수문자만 있으면 false
    return false;
};

/**
 * @type   : function
 * @access : public
 * @desc   : Byte Length 계산 (한글일 경우 3바이트, 그 외 1바이트)
 * @author : 이연희
 */
ilcommon.getByte = function (str) {
    if (!str) return 0;

    let byte = 0;

    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);

        // ASCII(1바이트) / 그 외(3바이트) 처리
        byte += (code > 127) ? 3 : 1;
    }

    return byte;
};	

/**
 * @type   : function
 * @access : public
 * @desc   : Freight Name이 바이트 기준으로 45자를 초과하지 않도록 check
 * @author : 이연희
 */
ilcommon.freightNameValidation = function (dsSelling, dsPartner, dsBuying) {

    const MAX_BYTE = 45;

    // 공통 검사 함수 (중복 제거)
    function validate(ds, certiField, listName) {
        if (!ds || !ds.isUpdated()) return true;

        const rowCount = ds.getRowCount();

        for (let i = 0; i < rowCount; i++) {

            const certiNo = (ds.getValue(i, certiField) || "").trim();
            const fareNm  = ds.getValue(i, "fareEngNm") || "";
            const byteLen = ilcommon.getByte(fareNm);

            // certiNo 없는 경우만 검사 + 45byte 초과 시 에러
            if (certiNo === "" && byteLen > MAX_BYTE) {
                $c.alert(
                    "Freight Name은 45바이트 초과로 입력할 수 없습니다.\n" +
                    listName + " List를 확인하세요.\n" +
                    (i + 1) + "번째 행 입력 바이트 수: " + byteLen
                );
                return false;
            }
        }
        return true;
    }

    // Selling
    if (!validate(dsSelling, "certiNo", "Selling")) return false;

    // Partner
    if (!validate(dsPartner, "certiNo", "Partner")) return false;

    // Buying
    if (!validate(dsBuying, "pchsCertiNo", "Buying")) return false;

    return true;
};

/**
 * @type   : function
 * @access : public
 * @desc   : DataSet Debug
 * @author : 이연희
 */
ilcommon.dataSetDebug = function (ds) {

    if (!ds) {
        $c.alert("Dataset이 존재하지 않습니다.");
        return;
    }

    let str = "[[[[" + ds.id + "]]]]\n";

    const rowCount = ds.getRowCount();
    const colCount = ds.getColumnCount();
    const colIds   = ds.getColumnIds();   // WebSquare6에서 전체 컬럼 ID 배열 가져오기

    for (let r = 0; r < rowCount; r++) {

        for (let c = 0; c < colCount; c++) {
            const colId = colIds[c];
            const val   = ds.getValue(r, colId);
            str += "[" + colId + "] " + val + ", ";
        }
        str += "\n\n";
    }

    $c.alert(str);
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
ilcommon.checkContainerNo = (cntrNo) => {
    const tempData = "1012131415161718192021232425262728293031323435363738";
    const val = (cntrNo || "").trim();

    if (val.length !== 11) return false;
    if (!/^[A-Z]{4}[0-9]{7}$/.test(val)) return false;

    const letterValue = (ch) => {
        const idx = (ch.charCodeAt(0) - 65) * 2;
        return Number(tempData.substr(idx, 2));
    };

    let sum = 0;
    sum += letterValue(val[0]) * 1;
    sum += letterValue(val[1]) * 2;
    sum += letterValue(val[2]) * 4;
    sum += letterValue(val[3]) * 8;

    const weights = [16, 32, 64, 128, 256, 512];

    for (let i = 0; i < 6; i++) {
        sum += Number(val[4 + i]) * weights[i];
    }

    const checkDigit = (sum % 11).toString().slice(-1);
    return checkDigit === val[10];
};
