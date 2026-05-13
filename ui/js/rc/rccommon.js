/**
 * 렌터카 공통 자바 스크립트
 * @version : 1.0
 */

//----------------------------- 1. 공통 메세지 -------------------------------//

//----------------------------- 공통 메세지 END ------------------------------//

//------------------------------ 2. 공통 변수 --------------------------------//

//------------------------------ 공통 변수 END -------------------------------//

/* ********************************************************************************
 *                                  함수
 * *******************************************************************************/
var rccommon = rccommon || {};
/**
 * @type   : function
 * @access : public
 * @desc   : Gauce TR Parameter 전송 시 ',' → '^:' , '=' → '^&' 로 변환
 * @sig    : val
 * @param  : val - 변환할 문자열
 * @author :
 */
rccommon.RcfReplaceContents = function (val) {
    if ($c.util.isEmpty(val)) return val;

    var re1 = new RegExp('=', 'mg');
    var replaceStr1 = val.replace(re1, '^&');

    var re2 = new RegExp(',', 'mg');
    var replaceStr2 = replaceStr1.replace(re2, '^:');

    return replaceStr2;
};

/**
 * @type   : function
 * @access : public
 * @desc   : 금액 반올림
 * @author : 정재형
 * @ 수정     : 2007년 4월 13일
 */
// Num = 반올림할 수
// Position = 반올림할 자릿수(정수로만)
// Base = i 이면 소숫점위의 자릿수에서, f 이면 소숫점아래의 자릿수에서 반올림
rccommon.RcfRound = function(Num, Position, Base) {

    if (Position == 0) {
        // 소숫점 0자리 반올림
        return Math.round(Num);
    } else if (Position > 0) {

        var cipher = "1";
        for (var i = 0; i < Position; i++) {
            cipher = cipher + "0";
        }

        var no = Number(cipher);

        if (Base == "F") {
            // 소숫점 아래에서 반올림
            return Math.round(Num * no) / no;
        } else {
            // 소숫점 위에서 반올림
            return Math.round(Num / no) * no;
        }

    } else {
        // Position < 0인 경우
        if (typeof cfAlertMsg === "function") {
            cfAlertMsg("자릿수는 정수로만 구분합니다.");
        } else {
            console.error("자릿수는 정수로만 구분합니다.");
        }
        return false;
    }
};

/**
 * @type   : function
 * @access : public
 * @desc   : 전화번호에서 -포함부분을 제거하여 저장하기 위한 Function.
 * @sig    : val
 * @param  : val  -를 포함한 전화번호
 * @author : 이정학
 */
rccommon.RcfLupTelFormat = function(val) {
    if (val == null || val === "") return val;

    var re = new RegExp('-', 'mg');
    return val.replace(re, '');
};

/**
 * @type   : function
 * @access : public
 * @desc   : 입력된 시작년월일시분 끝년월일시분을 계산하여 차이나는 일자와 시간을 계산한다.
 * @sig    : val
 * @param  : startDtm  시작년월일시분
 * @param  : endDtm  끝년월일시분
 * @param  : dayObj  계산된 날짜값을 지정한 Object
 * @param  : hourObj 계산된 시간값을 지정한 Object
 * @author : 이정학
 */
rccommon.RcfCalDayHour = function(startDtm, endDtm, dayObj, hourObj) {

    if (!startDtm || !endDtm || startDtm.length !== 12 || endDtm.length !== 12) {
        rccommon._setValue(dayObj, 0);
        rccommon._setValue(hourObj, 0);
        return;
    }

    // 날짜 계산용
    var endDate = new Date(
        parseInt(endDtm.substring(0, 4), 10),
        parseInt(endDtm.substring(4, 6), 10) - 1,
        parseInt(endDtm.substring(6, 8), 10)
    );
    endDate.setHours(0, 0, 0, 0);

    var startDate = new Date(
        parseInt(startDtm.substring(0, 4), 10),
        parseInt(startDtm.substring(4, 6), 10) - 1,
        parseInt(startDtm.substring(6, 8), 10)
    );
    startDate.setHours(0, 0, 0, 0);

    var dateTime = endDate.getTime() - startDate.getTime();

    // 시간 계산용
    var endHour = new Date();
    endHour.setHours(parseInt(endDtm.substring(8, 10), 10));
    endHour.setMinutes(parseInt(endDtm.substring(10, 12), 10));
    endHour.setSeconds(0);

    var startHour = new Date();
    startHour.setHours(parseInt(startDtm.substring(8, 10), 10));
    startHour.setMinutes(parseInt(startDtm.substring(10, 12), 10));
    startHour.setSeconds(0);

    var hourTime = endHour.getTime() - startHour.getTime();

    // 단위 값
    var xSec = 1000;
    var xMin = xSec * 60;
    var xHour = xMin * 60;
    var xDate = xHour * 24;

    var dayCnt = Math.round(dateTime / xDate);
    var hourCnt = Math.round(hourTime / xHour);

    // 음수 시간 보정
    if (hourCnt < 0) {
        hourCnt += 24;
        dayCnt -= 1;
    }

    // 24시간 이상 보정
    if (hourCnt >= 24) {
        var tempCnt = parseInt(hourCnt / 24, 10);
        hourCnt -= (tempCnt * 24);
        dayCnt += tempCnt;
    }

    rccommon._setValue(dayObj, dayCnt);
    rccommon._setValue(hourObj, hourCnt);
};

rccommon._setValue = function(obj, val) {
    if (!obj) return;

    if (typeof obj.setValue === "function") {
        obj.setValue(val);
    } else if (obj.tagName) {
        if (obj.tagName.toUpperCase() === "INPUT") {
            obj.value = val;
        } else {
            obj.text = val;
        }
    } else {
        console.warn("Unknown object type:", obj);
    }
};

/**
 * @type   : function
 * @access : public
 * @desc   : 이벤트 키코드를 강제로 UPPER로 변경, input text에서 영문을 UPPER로 변환 하기위함(지점코드입력 text에 사용) - 사용법: onkeypress="RcfUppercase();"
 * @sig    : val
 * @author : 오경근
 */
rccommon.RcfUppercase = function(e) {
    // WebSquare 이벤트 객체 우선
    let key = e?.key || window.event?.key;

    if (!key) return;

    // 소문자(a~z)인지 확인
    if (key >= 'a' && key <= 'z') {
        // 입력값 자체를 대문자로 변환
        let upper = key.toUpperCase();

        // WebSquare input/EMEDIT 처리
        let target = e?.target || window.event?.srcElement;

        if (target) {
            // WebSquare 컴포넌트 (eg. setValue)
            if (typeof target.setValue === "function") {
                let v = target.getValue();
                // 마지막 입력 글자만 대문자로 치환
                target.setValue(v.slice(0, -1) + upper);
            } 
            // HTML input
            else if (target.value != null) {
                let v = target.value;
                target.value = v.slice(0, -1) + upper;
            } 
            // EMEDIT 등 텍스트 기반 객체
            else if (target.text != null) {
                let v = target.text;
                target.text = v.slice(0, -1) + upper;
            }
        }
    }
};

/**
 * @type   : function
 * @access : public
 * @desc   : Gauce Tr Parameter Data전송시  ',' --> '^:', '=' --> '^&' 로 변환하여 전송하기위함
 * @sig    : val
 * @param  : val Parameter전송할Data
 * @author : 이정학
 */
rccommon.RcfReplaceContents = function(val) {

    if (val == null || val === "") return val;

    // '=' → '^&'
    var replaced = val.replace(/=/mg, '^&');

    // ',' → '^:'
    replaced = replaced.replace(/,/mg, '^:');

    return replaced;
};

/**
 * @type   : function
 * @access : public
 * @desc   : Object를 status 변수에 따라 enable하거나 disable(Readonly) 상태로 변경한다.
 * <pre>
 *     cfEnableObj2(txt_empNo, false);
 * </pre>
 * 위와같이 사용했을 경우 txt_empNo라는 오브젝트를 ReadOnly 상태로 변경한다. 기존의 cfEnableObj경우 Text, Emedit의 글자가 잘 보이지 않아서 검은색으로 처리.
 * @sig    : ObjectItem, Status
 * @param  : ObjectItem required 상태변경 대상 오브젝트
 * @param  : Status required 목표상태
 * @author : 이정학
 */
rccommon.cfEnableObj2 = function (obj, status) {

    if (!obj) return;

    // WebSquare 컴포넌트(HTML ID 문자열 전달 시)
    if (typeof obj === "string") {
        let comp = $p.getComponent(obj);
        if (comp) obj = comp;   // 컴포넌트 객체로 전환
    }

    // WebSquare 컴포넌트 여부 판단
    if (obj && typeof obj.setEnabled === "function") {
        // WebSquare 기본 컴포넌트 처리 (버튼, inputText 등)
        obj.setEnabled(status);
        return;
    }

    // HTML Element 기반 처리
    let tag = (obj.tagName || "").toUpperCase();

    switch (tag) {

        case "INPUT":
            let type = (obj.type || "").toUpperCase();

            // 버튼류
            if (["CHECKBOX", "IMAGE", "RADIO", "FILE", "BUTTON", "RESET", "SUBMIT"].includes(type)) {
                obj.disabled = !status;
                break;
            }

            // 텍스트 입력
            if (["TEXT", "PASSWORD"].includes(type)) {
                obj.readOnly = !status;
                obj.style.backgroundColor = status ? "#FFFFFF" : DISABLE_BGCOLOR;
                obj.style.color = "#000000";
                break;
            }
            break;

        case "SELECT":
            obj.disabled = !status;
            break;

        case "TEXTAREA":
            obj.readOnly = !status;
            obj.style.backgroundColor = status ? "#FFFFFF" : DISABLE_BGCOLOR;
            obj.style.color = "#000000";
            break;

        case "A":
        case "IMG":
        case "TABLE":
        case "TR":
        case "TD":
            obj.disabled = !status;
            break;

        case "OBJECT":
            let classid = (obj.attributes.classid?.nodeValue || "").toUpperCase();

            switch (classid) {
                case CLSID_GRID:
                    obj.Editable = status;
                    break;

                case CLSID_INPUTFILE:
                    obj.Enable = status;
                    break;

                case CLSID_EMEDIT:
                    obj.ReadOnly = !status;
                    obj.ReadOnlyForeColor = "#000000";
                    obj.ReadOnlyBackColor = DISABLE_BGCOLOR;
                    break;

                case CLSID_LUXECOMBO:
                    obj.Enable = status;
                    if (!status) obj.DisableBackColor = DISABLE_BGCOLOR;
                    break;

                case CLSID_RADIO:
                    obj.Enable = status;
                    break;

                case CLSID_TEXTAREA:
                    obj.Enable = status;
                    if (!status) obj.style.bgColor = DISABLE_BGCOLOR;
                    break;
            }
            break;
    }
};





