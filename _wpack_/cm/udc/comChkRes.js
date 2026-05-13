/*amd /cm/udc/comChkRes.xml 30830 b3594744a2ed2033cf2a063ee31e54e33d3a063cd47709bd6c768d68895fb06c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',A:{palette:'support'},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_comcode',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param11',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param12',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param13',name:'name16',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param14',name:'name17',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kngParam1',name:'name18',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kndParam2',name:'name19',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_comcodeList',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col4',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col5',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col6',name:'name6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col7',name:'name7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col8',name:'name8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col9',name:'name9'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col10',name:'name10'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_comcode',target:'data:json,{"id":"ds_comcodeList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchLastJobCloseDate',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_comcode',target:'data:json,{"id":"ds_comcodeList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchLastJobCloseDate_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.cfJobCloseYN,scwin.alertAsync,scwin.cfAfterCloseInfo,scwin.cfAfterCloseInfo2,scwin.cfGetSurveyCnt,scwin.cfGetExpireday,scwin.cfNodeMoveChkOfTreeMenu,scwin.cfCloseYnRequest,scwin.cfLastJobCloseDate,scwin.cfNodeMoveChkOfTreeMenuRequest'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @component
 * @componentName udc_comChkRes
 * @pluginName 
 * @company
 * @developer
 * @category /cm/udc
 * @notSupportBrowser 
 * @version
 * @htmlRender
 * @icon
 * @disableIcon
 * @description
 * @width %
 * @height px
 * @license
 * @imagePath
 * @homepage
 */

/**
 * @property
 * @name class
 * @category 01.Basic & ETC
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description HTML의 class 속성과 동일한 기능을 제공. CSS 파일이나 style 블럭에 정의한 여러 개의 class를 공백으로 구분하여 적용 가능.
 *  Engine 내부에서 각 컴포넌트 별로 지정된 class를 적용하나, class 속성을 이용하여 컴포넌트의 CSS를 제어 가능.
 */

/**
 * @property
 * @name style
 * @category 01.Basic & ETC
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description desc
 */

/**
 * @property
 * @name codeWidth
 * @category 01.Basic & ETC
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description code width size
 * 사용 예)
 * 100
 */

/**
 * @property
 * @name code
 * @category 02.컬럼id, 데이터리스트
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description bindColumn ID
 */

/**
 * @property
 * @name refDataCollection
 * @category 02.컬럼id, 데이터리스트
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 데이터컬렉션의 DataMap, DataList의 아이디
 */

/**
 * @property
 * @name selectID
 * @category 02.컬럼id, 데이터리스트
 * @type string
 * @option
 * @default
 * @necessary Y
 * @bindparent
 * @description 쿼리 SELECT_ID
 */

/**
 * @property
 * @name id
 * @category 03.컴포넌트 ID
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description udc 컴포넌트 아이디
 */

/**
 * @property
 * @name codeId
 * @category 03.컴포넌트 ID
 * @type string
 * @option
 * @default
 * @necessary Y
 * @bindparent
 * @description code ID
 */

/**
 * @property
 * @name nameId
 * @category 03.컴포넌트 ID
 * @type string
 * @option
 * @default
 * @necessary Y
 * @bindparent
 * @description name ID
 */

/**
 * @property
 * @name mandatoryCode
 * @category 05.code 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description [default:false, true] 필수 선택 적용 여부. validate 함수를 통해 입력값을 검증할 경우 필수 입력을 확인. 
 *  | (옵션 설명)
 *  | "false" (기본 값) 필수 선택 적용하지 않음. 
 *  | "true" 필수 선택 적용. 
 *  
 *  | (관련 함수)
 *  | validate();
 */

/**
 * @property
 * @name objTypeCode
 * @category 05.code 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 사용자 속성 type
 */

/**
 * @property
 * @name validExpCode
 * @category 05.code 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 사용자 속성 valid
 */

/**
 * @property
 * @name maxlengthCode
 * @category 05.code 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 입력 가능한 최대길이로 엔진에서 maxLength 이상의 글자를 입력하면 자동으로 잘라낸다.
 *   maxByteLength속성의 값과 본 속성에 지정한 값 중 더 작은 수가 우선 순위로 적용된다.
 */

/**
 * @property
 * @name allowCharCode
 * @category 05.code 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 허용 할 문자로 내부적으로 JavaScript의 RegExp로 구현되어있으며 한글/한자등의 경우 blur시점에 적용된다.
 */

/**
 * @property
 * @name UpperFlagCode
 * @category 05.code 속성
 * @type number
 * @option
 * @default 
 * @necessary N
 * @bindparent
 * @description 0. None(Default)
 * 1. 대문자 입력
 * 2. 소문자 입력
 */

/**
 * 
 * @property
 * @name editTypeCode
 * @category 05.code 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description [default:focus, select] 사용자가 컴포넌트 클릭 시 결과 동작 지정. 
 *  | (옵션 설명)
 *  | "select" (기본 값) 포커스가 발생할 때 선택된 텍스트를 선택.  
 *  | "focus" 텍스트의 맨 끝으로 커서를 이동.
 */

/**
 * 
 * @property
 * @name readOnlyCode
 * @category 05.code 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description [default:false, true]readonly의 여부로 HTML의 readonly속성과 동일한 기능을 제공한다.
 */

scwin.options;
scwin.onpageload = function () {
  // scwin.options = $p.getOptions();
};

/**
 * @type   : function
 * @access : public
 * @desc   : 작업ID별 마감여부를 체크하여 결과를 Return함.<br>
 * <pre>
 *     cfJobCloseYN(마감요청구분,마감년월,마감일,작업번호,관리번호,리턴구분,작업마감+선행마감체크구분);
 * </pre>
 * @sig    :
 * @param  : pReqKind  : 마감요청구분("PRE":선행마감체크, "CUR":작업마감체크)
 *           pCloseYM  : 마감년월(YYYYMM, MM이 '00'이 들어가는 경우는 년,월 마감일경우)
 *           pCloseDD  : 마감일 | 마감주기 (Y)년마감   : 00
 *                                     (H)반기마감 : 1:전기, 2:후기
 *                                     (Q)분기마감 : 1,2,3,4
 *                                     (M)월마감   : 00
 *                                     (W)주마감   : 1,2,3,4,5
 *                                     (D)일마감   : 해당일(01~31)
 *           pWorkNo   : 작업번호
 *           pMgntNo   : 관리번호(Default : "0")
 *           pRtnKind  : DAY:마감일리턴, ARR:결과를배열로, null:마감여부 결과리턴
 *           pDualChkYN: 작업마감체크기(CUR) 선행마감까지 체크를 할것인가 여부 Y:체크함
 *
 * @return : 0     : 마감중
 *           1     : 미마감
 *           2     : 마감완료
 *           DNF   : Data Not Found
 *           null  : 파라메터 오류
 *           마감일 : 리턴구분이 "DAY" 일경우(YYYYMMDD)
 *           ArrayObj : 리턴구분이 "ARR" 일경우 (리턴코드,작업번호,작업명,CUR or PRE)
 *           리턴구분이 DAY,ARR이 아닌경우 선행마감이 안된경우 (P0:마감중,P1:미마감 리턴함)
 * @author : kwkyung@lgcns.com
 */
/**
 * @method
 * @name cfJobCloseYN
 * @description desc
 * @param {string} pReqKind desc
 * @param {string} pCloseYM desc
 * @param {string} pCloseDD desc
 * @param {string} pWorkNo desc
 * @param {string} pMgntNo desc
 * @param {string} pRtnKind desc
 * @param {string} pDualChkYN desc
 * @param {string} pCoCd desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.cfJobCloseYN = function (pReqKind, pCloseYM, pCloseDD, pWorkNo, pMgntNo, pRtnKind, pDualChkYN, pCoCd) {
  if (!pCoCd) pCoCd = "000";
  return new Promise(function (resolve) {
    let strMgntNo = pMgntNo === "" ? "0" : pMgntNo;
    scwin._resolve = resolve;
    // scwin._step = "JOB_INFO";

    scwin._param = {
      pReqKind,
      pCloseYM,
      pCloseDD,
      pWorkNo,
      pRtnKind,
      pDualChkYN,
      pCoCd,
      strMgntNo,
      pCycle: "",
      pWrkNm: "",
      pPrecWrkNo: "",
      pPrecWrkNm: "",
      bValidity: true,
      bPreClose: true
    };
    if ((pReqKind == "CUR" || pReqKind == "PRE") && pCloseYM != "" && pWorkNo != "") {
      scwin._step = "JOB_INFO";
      ds_comcode.set("sysCd", "CommonEBC");
      ds_comcode.set("queryId", "retrieveCloseJobInfo");
      ds_comcode.set("userId", $c.data.getMemInfo($p, "userId"));
      ds_comcode.set("param3", pWorkNo);
      ds_comcode.set("param7", pCoCd);
      $c.sbm.execute($p, sbm_search);
    } else {
      let strMsg = ">>>>>> 마감정보확인!!! <<<<<<<br/><br/>";
      strMsg += "<br/>▶요청구분 : [" + pReqKind + "] ☞ PRE or CUR";
      strMsg += "<br/>▶작업번호 : [" + pWorkNo + "]";
      strMsg += "<br/>▶마감주기 : []";
      strMsg += "<br/>▶마감년월 : [" + pCloseYM + "]";
      strMsg += "<br/>▶관리번호 : [" + strMgntNo + "]";
      strMsg += "<br/>▶마감일   : [" + pCloseDD + "]";
      strMsg += "<br/>▶마감상태 : []";
      strMsg += "<br/><br/>==========================";
      strMsg += "<br/>마감주기-유효값";
      strMsg += "<br/>==========================";
      strMsg += "<br/>(Y) 년마감 : 00";
      strMsg += "<br/>(H) 반기마감 : 1:전기, 2:후기";
      strMsg += "<br/>(Q) 분기마감 : 1,2,3,4";
      strMsg += "<br/>(M) 월마감 : 00";
      strMsg += "<br/>(W) 주마감 : 1,2,3,4,5";
      strMsg += "<br/>(D) 일마감 : 해당일(01~31)";
      $c.win.alert($p, strMsg);
      scwin.clearJobState();
      resolve(null);
      return;
    }
  });
};

/* =========================================================
 *  SUBMIT DONE (async 처리)
 * ========================================================= */
scwin.sbm_search_submitdone = async function () {
  const p = scwin._param;
  const resolve = scwin._resolve;
  if (!p || !resolve) return;

  /* ================= 1단계 : 작업정보 ================= */
  if (scwin._step === "JOB_INFO") {
    p.pPrecWrkNo = ds_comcodeList.getCellData(0, "col2");
    p.pWrkNm = ds_comcodeList.getCellData(0, "col4");
    p.pCycle = ds_comcodeList.getCellData(0, "col5");

    // 해당작업의 선행마감명을 가져옴
    if (p.pPrecWrkNo != "") {
      scwin._step = "PREC_JOB";
      ds_comcode.set("sysCd", "CommonEBC");
      ds_comcode.set("queryId", "retrieveCloseJobInfo");
      ds_comcode.set("userId", $c.data.getMemInfo($p, "userId"));
      ds_comcode.set("param3", p.pPrecWrkNo);
      ds_comcode.set("param7", p.pCoCd);
      $c.sbm.execute($p, sbm_search);
      return;
    }
    scwin.validateCycle(p);
    scwin._step = "CLOSE_INFO";
  }

  /* ================= 2단계 : 선행작업 조회 ================= */
  if (scwin._step === "PREC_JOB") {
    p.pPrecWrkNm = ds_comcodeList.getCellData(0, "col4");
    scwin.validateCycle(p);
    scwin._step = "CLOSE_INFO";
  }

  /* ================= 3단계 : 마감정보 조회 ================= */
  if (scwin._step === "CLOSE_INFO") {
    scwin._step = "CUR_CLOSE";
    if (p.bValidity) {
      if (p.pReqKind === "CUR" && p.pPrecWrkNo != "") {
        scwin._step = "PRE_CLOSE";
        scwin.setCloseSubmitParam("PRE");
        $c.sbm.execute($p, sbm_search);
        return;
      }

      // scwin.preCloseCheck(p);
      if (p.pDualChkYN != "Y") p.bPreClose = true;
      if (p.bPreClose) {
        scwin._step = "CUR_CLOSE";
        scwin.setCloseSubmitParam(p.pReqKind);
        $c.sbm.execute($p, sbm_search);
        return;
      }
    }
  }

  /* ================= 4단계 : 선행마감 체크 ================= */
  if (scwin._step === "PRE_CLOSE") {
    scwin.preCloseCheck(p);
    if (p.bPreClose) {
      scwin._step = "CUR_CLOSE";
      scwin.setCloseSubmitParam(p.pReqKind);
      $c.sbm.execute($p, sbm_search);
      return;
    }
    scwin._step = "CUR_CLOSE";
  }

  /* ================= 5단계 : 최종 결과 ================= */
  if (scwin._step === "CUR_CLOSE") {
    let sCloseStat = ds_comcodeList.getCellData(0, "col1");
    let sCloseDay = ds_comcodeList.getCellData(0, "col2");
    let arrRtn = [];
    let strMsg = "";
    if (p.bValidity) {
      if (p.pReqKind === "CUR" && p.pPrecWrkNo) {
        if (sCloseStat != "2") {
          p.bPreClose = false;
          arrRtn[1] = p.pPrecWrkNo;
          arrRtn[2] = p.pPrecWrkNm;
          arrRtn[3] = "PRE";
        }
      }
      if (p.pDualChkYN != "Y") {
        p.bPreClose = true;
      }
      if (p.bPreClose) {
        arrRtn[1] = p.pReqKind == "PRE" ? p.pPrecWrkNo : p.pWorkNo;
        arrRtn[2] = p.pReqKind == "PRE" ? p.pPrecWrkNm : p.pWrkNm;
        arrRtn[3] = p.pReqKind == "PRE" ? "PRE" : "CUR";
      }
      if (p.pRtnKind === "ARR") {
        if (sCloseStat !== "0" && sCloseStat !== "1" && sCloseStat !== "2") {
          arrRtn[0] = "DNF";
        } else {
          arrRtn[0] = p.pRtnKind === "DAY" ? p.pCloseYM + sCloseDay : sCloseStat;
        }
        scwin.clearJobState();
        resolve(arrRtn);
        return;
      } else {
        if (sCloseStat !== "0" && sCloseStat !== "1" && sCloseStat !== "2") {
          scwin.clearJobState();
          resolve("DNF");
          return;
        }
        if (p.pRtnKind === "DAY") {
          scwin.clearJobState();
          resolve(p.pCloseYM + sCloseDay);
          return;
        }
        scwin.clearJobState();
        resolve(!p.bPreClose ? "P" + sCloseStat : sCloseStat);
        return;
      }
    } else {
      strMsg += ">>>>>> 마감정보확인!!! <<<<<<<br/><br/>";
      strMsg += "<br/>▶요청구분 : [" + p.pReqKind + "] ☞ PRE or CUR";
      strMsg += "<br/>▶작업번호 : [" + p.pWorkNo + "]";
      strMsg += "<br/>▶마감주기 : [" + p.pCycle + "]";
      strMsg += "<br/>▶마감년월 : [" + p.pCloseYM + "]";
      strMsg += "<br/>▶관리번호 : [" + p.strMgntNo + "]";
      strMsg += "<br/>▶마감일   : [" + p.pCloseDD + "]";
      strMsg += "<br/>▶마감상태 : [" + sCloseStat + "]";
      strMsg += "<br/><br/>==========================";
      strMsg += "<br/>마감주기-유효값";
      strMsg += "<br/>==========================";
      strMsg += "<br/>(Y) 년마감 : 00";
      strMsg += "<br/>(H) 반기마감 : 1:전기, 2:후기";
      strMsg += "<br/>(Q) 분기마감 : 1,2,3,4";
      strMsg += "<br/>(M) 월마감 : 00";
      strMsg += "<br/>(W) 주마감 : 1,2,3,4,5";
      strMsg += "<br/>(D) 일마감 : 해당일(01~31)";
      await scwin.alertAsync(strMsg);
      scwin.clearJobState();
      resolve(null);
      return;
    }
  }

  /* ================= AFTER 처리 공통 ================= */
  if (["AFTER_CLOSE", "AFTER_CLOSE2"].includes(scwin._step)) {
    let arrRtn = [];
    arrRtn[0] = ds_comcodeList.getCellData(0, "col1");
    arrRtn[1] = ds_comcodeList.getCellData(0, "col2");
    scwin.clearJobState();
    resolve(arrRtn);
    return;
  }
  if (scwin._step === "SURVEY_CNT") {
    var arrRtn = [];
    arrRtn[0] = ds_comcodeList.getCellData(0, "col1") || 0;
    scwin.clearJobState();
    resolve(arrRtn);
    return;
  }
  if (scwin._step === "NODE_MOVE_CHK") {
    let rtn = ds_comcodeList.getCellData(0, "col1");
    scwin.clearJobState();
    resolve(rtn);
    return;
  }
};
scwin.validateCycle = function (p) {
  if (p.pCycle !== "Y" && p.pCycle !== "H" && p.pCycle !== "Q" && p.pCycle !== "M" && p.pCycle !== "W" && p.pCycle !== "D") p.bValidity = false;else {
    let iCloseDD = Number(p.pCloseDD);
    if ((p.pCycle === "Y" || p.pCycle === "M") && p.pCloseDD !== "00") p.bValidity = false;
    if (p.pCycle === "H" && !(1 <= iCloseDD && iCloseDD <= 2)) p.bValidity = false;
    if (p.pCycle === "Q" && !(1 <= iCloseDD && iCloseDD <= 4)) p.bValidity = false;
    if (p.pCycle === "W" && !(1 <= iCloseDD && iCloseDD <= 5)) p.bValidity = false;
    if (p.pCycle === "D" && !(1 <= iCloseDD && iCloseDD <= 31)) p.bValidity = false;
  }
  if (p.pCloseDD == "") p.bValidity = false;
};
scwin.preCloseCheck = function (p) {
  let stat = ds_comcodeList.getCellData(0, "col1");
  if (stat !== "2") p.bPreClose = false;
  if (p.pDualChkYN !== "Y") p.bPreClose = true;
};
scwin.setCloseSubmitParam = function (kind) {
  const p = scwin._param;
  ds_comcode.set("sysCd", "CommonEBC");
  ds_comcode.set("queryId", "retrieveCloseInfo");
  ds_comcode.set("userId", $c.data.getMemInfo($p, "userId"));
  ds_comcode.set("param1", p.pCloseYM);
  ds_comcode.set("param2", p.pCloseDD);
  ds_comcode.set("param3", p.pWorkNo);
  ds_comcode.set("param4", p.strMgntNo);
  ds_comcode.set("param5", kind);
  ds_comcode.set("param6", p.pCycle);
  ds_comcode.set("param7", p.pCoCd);
};
scwin.clearJobState = function () {
  scwin._resolve = null;
  scwin._step = null;
  scwin._param = null;
};

/* =========================================================
 *  alert Async
 * ========================================================= */
/**
 * @method
 * @name alertAsync
 * @description desc
 * @param {string} msg desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.alertAsync = function (msg) {
  return new Promise(resolve => {
    $c.win.alert($p, msg, function () {
      resolve();
    });
  });
};

/**
 * @type   : function
 * @access : public
 * @desc   : 마감 후 정보 조회
 * @param  : pCloseYm - 마감년월
 * @param  : pWrkNo   - 작업번호
 * @return : Promise<Array> ([0]: col1, [1]: col2)
 */
/**
 * @method
 * @name cfAfterCloseInfo
 * @description desc
 * @param {string} pCloseYm desc
 * @param {string} pWrkNo desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.cfAfterCloseInfo = function (pCloseYm, pWrkNo) {
  return new Promise(function (resolve) {
    /* ===== 상태 변수 ===== */
    scwin._resolve = resolve;
    scwin._step = "AFTER_CLOSE";
    scwin._param = {
      pCloseYm: pCloseYm,
      pWrkNo: pWrkNo
    };

    /* ===== 서버 조회 ===== */
    ds_comcode.set("sysCd", "CommonEBC");
    ds_comcode.set("queryId", "retrieveAfterCloseInfo");
    ds_comcode.set("userId", $c.data.getMemInfo($p, "userId"));
    ds_comcode.set("param1", pCloseYm);
    ds_comcode.set("param2", pWrkNo);
    $c.sbm.execute($p, sbm_search);
  });
};

/**
 * @type   : function
 * @access : public
 * @desc   : 통합마감여부를 체크를위한 DataSet을가져옴.<br>
 * <pre>
 *     cfAfterCloseInfo(마감년월,작업번호)
 * </pre>
 * @sig    :
 * @param  : pCloseYm   : 마감년월
 *           pWrkNo : 작업번호
 *
 * @return : rtnList[0] : 건수
 *           rtnList[1] : 후행마감 정보
 * @author : kwkyung@lgcns.com
 */
/**
 * @method
 * @name cfAfterCloseInfo2
 * @description desc
 * @param {string} pCloseYm desc
 * @param {string} pWrkNo desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.cfAfterCloseInfo2 = function (pCloseYm, pWrkNo) {
  return new Promise(function (resolve) {
    /* ===== 상태 변수 ===== */
    scwin._resolve = resolve;
    scwin._step = "AFTER_CLOSE2";
    scwin._param = {
      pCloseYm: pCloseYm,
      pWrkNo: pWrkNo
    };

    /* ===== 서버 조회 ===== */
    ds_comcode.set("sysCd", "CommonEBC");
    ds_comcode.set("queryId", "retrieveAfterCloseInfo2");
    ds_comcode.set("userId", $c.data.getMemInfo($p, "userId"));
    ds_comcode.set("param1", pCloseYm);
    ds_comcode.set("param2", pWrkNo);
    $c.sbm.execute($p, sbm_search);
  });
};

/**
 * @type   : function
 * @access : public
 * @desc   : 설문조사 대상 카운트.<br>
 * <pre>
 *     cfGetSurveyCnt(메뉴ID,상위메뉴ID,pSQLID)
 * </pre>
 * @sig    :
 * @param  : None
 *
 * @return : 카운트
 *
 * @author : kwkyung@lgcns.com
 */
/**
 * @method
 * @name cfGetSurveyCnt
 * @description desc
 * @param
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.cfGetSurveyCnt = function () {
  return new Promise(function (resolve, reject) {
    try {
      // 상태 변수
      scwin._resolve = resolve;
      scwin._step = "SURVEY_CNT";
      scwin._param = {
        pSQLID: "getSurveyCnt"
      };

      // 공통 ds_comcode를 사용하여 조회
      ds_comcode.set("sysCd", "CommonEBC");
      ds_comcode.set("queryId", scwin._param.pSQLID);
      ds_comcode.set("userId", $c.data.getMemInfo($p, "userId"));

      // sbm_search 실행
      $c.sbm.execute($p, sbm_search);
    } catch (e) {
      reject(e);
    }
  });
};

/**
 * @type   : function
 * @access : public
 * @desc   : 입찰일정 팝업의 주기를 return 한다.
 * @sig    :
 * @param  : None
 * @return : DataSet
 * @author : 박홍준
 */
/**
 * @method
 * @name cfGetExpireday
 * @description desc
 * @param {string} popupCycClsCd desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.cfGetExpireday = function (popupCycClsCd) {
  var expireday = 0;
  switch (popupCycClsCd) {
    case '01':
      // 처음 로그인 시
      expireday = 31; // MAX 팝업 시점
      break;
    case '02':
      // 로그인마다
      expireday = 0;
      break;
    case '03':
      // 매일 한 번
      expireday = 1;
      break;
    case '04':
      // 3일 주기
      expireday = 3;
      break;
    case '05':
      // 7일 주기
      expireday = 7;
      break;
    default:
      expireday = 0;
      break;
  }
  return expireday;
};

/**
 * @type   : function
 * @access : public
 * @desc   : 시스템메뉴관리의 Node이동이 가능한가를 체크를위한 DataSet을가져옴.<br>
 * <pre>
 *     cfNodeMoveChkOfTreeMenu(메뉴ID,상위메뉴ID,pSQLID)
 * </pre>
 * @sig    :
 * @param  : pMenuID   : 메뉴ID
 *           pUpMenuID : 상위메뉴ID (이동하고자하는 상위메뉴ID)
 *           pSQLID    : SQL ID
 *
 * @return : T    : 이동가능
 *           F    : 이동불가능
 * @author : kwkyung@lgcns.com
 */
/**
 * @desc Tree Menu 이동 가능 여부 체크
 * @param pMenuID
 * @param pUpMenuID
 * @param pSQLID
 * @return Promise<string>  (col1 값)
 */
/**
 * @method
 * @name cfNodeMoveChkOfTreeMenu
 * @description desc
 * @param {string} pMenuID desc
 * @param {string} pUpMenuID desc
 * @param {string} pSQLID desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.cfNodeMoveChkOfTreeMenu = function (pMenuID, pUpMenuID, pSQLID) {
  return new Promise(function (resolve) {
    scwin._resolve = resolve;
    scwin._step = "NODE_MOVE_CHK";
    scwin._param = {
      pMenuID: pMenuID,
      pUpMenuID: pUpMenuID,
      pSQLID: pSQLID
    };
    ds_comcode.set("sysCd", "CommonEBC");
    ds_comcode.set("queryId", pSQLID);
    ds_comcode.set("userId", $c.data.getMemInfo($p, "userId"));
    ds_comcode.set("param1", pMenuID);
    ds_comcode.set("param2", pUpMenuID);
    $c.sbm.execute($p, sbm_search);
  });
};

/**
 * @type   : function
 * @access : public
 * @desc   : 아감여부를 가져옴(마감통제 TB_ZZ419)
 * @sig    :
 * @param  : pYearMonth,pYmd,pJobId,pMgmtNo,pReqKind,pCycle,pSQLID
 * @return : DataSet
 * @author : kwkyung@lgcns.com
 */
/**
 * CLOSE 여부 조회 요청
 * (기존 tmpDataSet_ Sync 방식 → WebSquare 비동기 방식 변환)
 */
/**
 * @method
 * @name cfCloseYnRequest
 * @description desc
 * @param {string} pCloseYM desc
 * @param {string} pCloseDD desc
 * @param {string} pWorkNo desc
 * @param {string} pMgntNo desc
 * @param {string} pReqKind desc
 * @param {string} pCycle desc
 * @param {string} pSQLID desc
 * @param {string} pCoCd desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.cfCloseYnRequest = function (pCloseYM, pCloseDD, pWorkNo, pMgntNo, pReqKind, pCycle, pSQLID, pCoCd) {
  if (typeof pCoCd === "undefined") {
    pCoCd = "000"; // DEFAULT : 동부 EXPRESS
  }
  return new Promise(function (resolve) {
    // 파라미터 저장
    scwin._param = {
      pCloseYM: pCloseYM,
      pCloseDD: pCloseDD,
      pWorkNo: pWorkNo,
      strMgntNo: pMgntNo,
      pReqKind: pReqKind,
      pCycle: pCycle,
      pSQLID: pSQLID,
      pCoCd: pCoCd
    };
    scwin._resolve = resolve;
    scwin._step = "AFTER_CLOSE2";
    ds_comcode.set("sysCd", "CommonEBC");
    ds_comcode.set("queryId", pSQLID);
    ds_comcode.set("userId", $c.data.getMemInfo($p, "userId"));
    ds_comcode.set("param1", pCloseYM);
    ds_comcode.set("param2", pCloseDD);
    ds_comcode.set("param3", pWorkNo);
    ds_comcode.set("param4", pMgntNo);
    ds_comcode.set("param5", pReqKind);
    ds_comcode.set("param6", pCycle);
    ds_comcode.set("param7", pCoCd);
    $c.sbm.execute($p, sbm_search);
  });
};

/**
 * @type   : function
 * @access : public
 * @desc   : 작업의 마지막 마감일잘자를 가져옴(마감통제 TB_ZZ419)
 * @sig    :
 * @param  : pWorkNo  : 작업번호
 *                 pRtnKind : 리턴구분(YM : 년월 , YMD : 년월일)
 * @return : CloseDate(YYYYMM or YYYYMMDD)
 *           null : 파라메터 오류 or Data Not Found
 * @author : kwkyung@lgcns.com
 */
/**
 * @method
 * @name cfLastJobCloseDate
 * @description desc
 * @param {string} pWorkNo desc
 * @param {string} pRtnKind desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.cfLastJobCloseDate = async function (pWorkNo, pRtnKind) {
  if (pRtnKind != "YM" && pRtnKind != "YMD") {
    await scwin.alertAsync("리턴구분을 확인해주세요. 작업번호:[" + pWorkNo + "] 리턴구분:[" + pRtnKind + "]");
    scwin.clearJobState();
    return null;
  }
  return new Promise(function (resolve) {
    try {
      scwin._resolve = resolve;
      scwin._param = {
        pRtnKind: pRtnKind
      };
      ds_comcode.setEmptyValue();
      ds_comcode.set("sysCd", "CommonEBC");
      ds_comcode.set("queryId", "getLastJonCloseDate");
      ds_comcode.set("userId", $c.data.getMemInfo($p, "userId"));
      ds_comcode.set("param1", pWorkNo);
      $c.sbm.execute($p, sbm_searchLastJobCloseDate);
    } catch (e) {
      resolve(e);
    }
  });
};

/* =========================================================
 *  마감일자 조회 SUBMIT DONE (async 처리)
 * ========================================================= */
scwin.sbm_searchLastJobCloseDate_submitdone = async function (e) {
  const p = scwin._param;
  const resolve = scwin._resolve;
  if (!p || !resolve) return;
  try {
    let strCloseYM = ds_comcodeList.getCellData(0, "col1");
    let strCloseDD = ds_comcodeList.getCellData(0, "col2");
    let = null;
    if (p.pRtnKind == "YM") {
      scwin.clearJobState();
      ret = !$c.util.isEmpty($p, strCloseYM) ? strCloseYM : null;
    } else {
      let strCloseYMDD = strCloseYM + strCloseDD;
      ret = !$c.util.isEmpty($p, strCloseYM) ? strCloseYMDD : null;
    }
  } catch (e) {
    resolve(e);
  } finally {
    scwin.clearJobState();
    resolve(ret);
  }
};

/**
 * @type   : function
 * @access : public
 * @desc   : 시스템메뉴관리의 Node이동이 가능한가를 체크를위한 DataSet을가져옴
 * @sig    :
 * @param  : pMenuID,pUpMenuID
 * @return : DataSet
 * @author : kwkyung@lgcns.com
 */
/**
 * @method
 * @name cfNodeMoveChkOfTreeMenuRequest
 * @description desc
 * @param {string} pMenuID desc
 * @param {string} pUpMenuID desc
 * @param {string} pSQLID desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.cfNodeMoveChkOfTreeMenuRequest = function (pMenuID, pUpMenuID, pSQLID) {
  return new Promise(function (resolve) {
    scwin._resolve = resolve;
    scwin._step = "NODE_MOVE_CHK";
    ds_comcode.set("sysCd", "CommonEBC");
    ds_comcode.set("queryId", pSQLID);
    ds_comcode.set("userId", $c.data.getMemInfo($p, "userId"));
    ds_comcode.set("param1", pMenuID);
    ds_comcode.set("param2", pUpMenuID);
    for (var i = 3; i <= 14; i++) {
      ds_comcode.set("param" + i, "");
    }
    $c.sbm.execute($p, sbm_search);
  });
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'grp_comCode',class:'sch-box',style:'height: 22px;'},E:[{T:1,N:'xf:input',A:{class:'form-control num',id:'ed_rsltU',placeholder:'',ref:'',style:'',enterBlur:'false'}}]}]}]}]})