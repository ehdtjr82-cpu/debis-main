/*amd /cm/udc/comCode.xml 55477 2bad8fe37eb4bad0f5b85437ce96db7e2a634bcf200e29812c4d99dbf2f43041 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',A:{palette:'support'},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:aliasDataMap',A:{scope:'',id:'aliasDataMap'}},{T:1,N:'w2:aliasDataList',A:{scope:'',id:'aliasDataList'}},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_comcode',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param11',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param12',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param13',name:'name16',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param14',name:'name17',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kngParam1',name:'name18',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kndParam2',name:'name19',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_comcodeList',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col4',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col5',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col6',name:'name6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col7',name:'name7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col8',name:'name8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col9',name:'name9'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col10',name:'name10'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_comcode',target:'data:json,{"id":"ds_comcodeList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.cfCommonPopUp,scwin.setSelectId,scwin.cfCommonPopUpAsync,scwin.cfCommonPopUpSilentAsync'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @component
 * @componentName udc_comCode
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
 * @name name
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
 * @name btnId
 * @category 03.컴포넌트 ID
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 버튼 ID
 */

/**
 * @property
 * @name popupID
 * @category 03.컴포넌트 ID
 * @type string
 * @option
 * @default
 * @necessary Y
 * @bindparent
 * @description 공통코드 팝업 아이디
 */

/**
 * @property
 * @name validTitle
 * @category 04.팝업 속성
 * @type string
 * @option
 * @default
 * @necessary Y
 * @bindparent
 * @description HTML의 title 속성과 동일. 마우스 오버 시, title로 저장한 값이 툴팁으로 표시됨. 일반적으로 웹접근성 지원용으로 설정.
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
 * @name maxByteLengthCode
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

/**
 * @property
 * @name skipOnBlurCodeValueEmpty
 * @category 05.code 속성
 * @type string
 * @option
 * @default Y
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description [default:Y, N]onblur 시 코드 값이 없는 경우 업무 onBlur 스킵 유무
 */

/**
 * @property
 * @name allowCharCodeLength
 * @category 05.code 속성
 * @type number
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description allowChar를 길이별로 쪼개서 지정해야할 필요가 있는 경우 각 allowChar를 나눠 줄 length 지정(EX: A15에 A와 15의 allowChar를 각각 지정해야할 경우) beforeAllowCharCode, afterAllowCharCode 세트
 */

/**
 * @property
 * @name beforeAllowCharCode
 * @category 05.code 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description allowChar를 길이별로 쪼개서 지정해야할 필요가 있는 경우 앞쪽 allowChar(EX: A15에 A) allowCharCodeLength, afterAllowCharCode 세트
 */

/**
 * @property
 * @name afterAllowCharCode
 * @category 05.code 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description allowChar를 길이별로 쪼개서 지정해야할 필요가 있는 경우 뒤쪽 allowChar(EX: A15에 15) allowCharCodeLength, beforeAllowCharCode 세트
 */

/**
 * @property
 * @name codeDisplayFormat
 * @category 05.code 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description code의 displayFormat을 지정한다.
 */

/**
 * @property
 * @name codeOnFocus
 * @category 05.code 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description code의 onFocus 지정한다.
 */

/**
 * @property
 * @name maxlengthName
 * @category 06.name 속성
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
 * @name maxByteLengthName
 * @category 06.name 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 입력 가능한 최대길이로 엔진에서 maxByteLength 이상의 글자를 입력하면 자동으로 잘라낸다.
 *   maxByteLength속성의 값과 본 속성에 지정한 값 중 더 작은 수가 우선 순위로 적용된다.
 */

/**
 * @property
 * @name editTypeName
 * @category 06.name 속성
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
 * @property
 * @name hideName
 * @category 06.name 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description [default:false, true] 컴포넌트 hide 여부. 
 */

/**
 * @property
 * @name mandatoryName
 * @category 06.name 속성
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
 * 
 * @property
 * @name readOnlyName
 * @category 06.name 속성
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
 * @property
 * @name objTypeName
 * @category 06.name 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 사용자 속성 type
 */

/**
 * @property
 * @name validExpName
 * @category 06.name 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 사용자 속성 valid
 */

/**
 * @property
 * @name UpperFlagName
 * @category 06.name 속성
 * @type number
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description 0. None(Default)
 * 1. 대문자 입력
 * 2. 소문자 입력
 */

/**
 * @property
 * @name allowCharName
 * @category 06.name 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 허용 할 문자로 내부적으로 JavaScript의 RegExp로 구현되어있으며 한글/한자등의 경우 blur시점에 적용된다.
 */

/**
 * @property
 * @name skipOnBlurNameValueEmpty
 * @category 06.name 속성
 * @type string
 * @option
 * @default Y
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description [default:Y, N]onblur 시 코드명 값이 없는 경우 업무 onBlur 스킵 유무
 */

/**
 * @property
 * @name allowCharNameLength
 * @category 06.name 속성
 * @type number
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description allowChar를 길이별로 쪼개서 지정해야할 필요가 있는 경우 각 allowChar를 나눠 줄 length 지정(EX: A15에 A와 15의 allowChar를 각각 지정해야할 경우)  beforeAllowCharName, afterAllowCharName 세트
 */

/**
 * @property
 * @name beforeAllowCharName
 * @category 06.name 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description allowChar를 길이별로 쪼개서 지정해야할 필요가 있는 경우 앞쪽 allowChar(EX: A15에 A) allowCharNameLength, afterAllowCharName 세트
 */

/**
 * @property
 * @name afterAllowCharName
 * @category 06.name 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description allowChar를 길이별로 쪼개서 지정해야할 필요가 있는 경우 뒤쪽 allowChar(EX: A15에 15) allowCharNameLength, beforeAllowCharName 세트
 */

/**
 * @property
 * @name nameDisplayFormat
 * @category 06.name 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description name의 displayFormat을 지정한다.
 */

/**
 * @property
 * @name nameOnFocus
 * @category 06.name 속성
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description name의 onFocus 지정한다.
 */

/**
 * @property
 * @name progressBarSwitch
 * @category 07. on/off 스위치
 * @type string
 * @option Y,N
 * @default Y
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description code 컴포넌트 on/off 관련 기능
 */

/**
 * @property
 * @name keepCodeSwitch
 * @category 07. on/off 스위치
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description code 컴포넌트 on/off 관련 기능
 */

/**
 * @property
 * @name keepNameSwitch
 * @category 07. on/off 스위치
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description name 컴포넌트 on/off 관련 기능
 */

scwin.options;
scwin.onpageload = function () {
  scwin.options = $p.getOptions();
  scwin.udc_properties($p.parent(), scwin.options);
  scwin.__commonPopupAsyncClosed = null;
};
scwin.udc_properties = function (pFrame, options) {
  let code = options.codeId || grp_comCode.id + "_code";
  let btn = options.btnId || grp_comCode.id + "_btn";
  let name = options.nameId || grp_comCode.id + "_name";
  let refDataCollection = options.refDataCollection;
  let alias, aliasId;
  pFrame[code] = ed_codeU;
  pFrame[btn] = btn_triggerU;
  pFrame[name] = ed_nameU;
  if (refDataCollection) {
    switch (pFrame[refDataCollection].options.pluginName) {
      case "dataMap":
        alias = aliasDataMap;
        aliasId = aliasDataMap.org_id + ".";
        break;
      case "dataList":
        alias = aliasDataList;
        aliasId = aliasDataList.org_id + ".";
        break;
    }
    alias.setScope("../" + refDataCollection);
    ed_codeU.setRef("data:" + aliasId + options.code);
    ed_nameU.setRef("data:" + aliasId + options.name);
  }

  //code
  if (options.codeWidth) {
    ed_codeU.setStyle("width", options.codeWidth + "px");
  }
  if (options.mandatoryCode) {
    ed_codeU.setMandatory(options.mandatoryCode === "true");
  }
  if (options.readOnlyCode) {
    ed_codeU.setReadOnly(options.readOnlyCode);
  }
  if (options.allowCharCode) {
    ed_codeU.setAllowChar(options.allowCharCode);
  }
  if (options.maxlengthCode) {
    ed_codeU.setMaxLength(options.maxlengthCode);
  }
  if (options.maxByteLengthCode) {
    ed_codeU.setMaxByteLength(options.maxByteLengthCode);
  }
  if (options.readOnlyCode) {
    ed_codeU.setReadOnly(options.readOnlyCode === "true");
  }
  if (options.objTypeCode) {
    ed_codeU.options.objType = options.objTypeCode;
  }
  if (options.validExpCode) {
    ed_codeU.options.validExp = options.validExpCode;
  }
  if (options.validTitle) {
    ed_codeU.options.title = options.validTitle;
  }
  if (!options.skipOnBlurCodeValueEmpty) {
    options.skipOnBlurCodeValueEmpty = "Y";
  }
  if (options.codeDisplayFormat) {
    ed_codeU.setDisplayFormat(options.codeDisplayFormat);
  }

  //name    
  if (options.maxlengthName) {
    ed_nameU.setMaxLength(options.maxlengthName);
  }
  if (options.maxByteLengthName) {
    ed_nameU.setMaxByteLength(options.maxByteLengthName);
  }
  if (options.mandatoryName) {
    ed_nameU.setMandatory(options.mandatoryName === "true");
  }
  if (options.readOnlyName) {
    ed_nameU.setReadOnly(options.readOnlyName === "true");
  }
  if (options.objTypeName) {
    ed_nameU.options.objType = options.objTypeName;
  }
  if (options.validExpName) {
    ed_nameU.options.validExp = options.validExpName;
  }
  if (options.hideName == "true") {
    ed_nameU.hide();
  }
  if (options.allowCharName) {
    ed_nameU.setAllowChar(options.allowCharName);
  }
  if (!options.skipOnBlurNameValueEmpty) {
    options.skipOnBlurNameValueEmpty = "Y";
  }

  //button
  if (options.objTypeBtn) {
    btn_triggerU.options.objType = options.objTypeBtn;
  }
  if (options.nameDisplayFormat) {
    ed_nameU.setDisplayFormat(options.nameDisplayFormat);
  }
};

// 대문자 변경(코드)
scwin._onkeyup = function (e) {
  // 엔터키 (AS-IS는 엔터키로 작동안하는 것으로 판단되어 주석처리)
  /*
  // 엔터키
  if(e.keyCode == 13) {
      btn_triggerU.click();
  }
  */

  if (scwin.options.UpperFlagCode == '1') {
    this.setValue(e.target.value.toUpperCase());
  } else if (scwin.options.UpperFlagCode == '2') {
    this.setValue(e.target.value.toLowerCase());
  }
};

// 대문자 변경(코드명)
scwin.__keyup = function (e) {
  // 엔터키 (AS-IS는 엔터키로 작동안하는 것으로 판단되어 주석처리)
  /*
  // 엔터키
  if(e.keyCode == 13) {
      btn_triggerU.click();
  }
  */

  if (scwin.options.UpperFlagName == '1') {
    this.setValue(e.target.value.toUpperCase());
  } else if (scwin.options.UpperFlagName == '2') {
    this.setValue(e.target.value.toLowerCase());
  }
};

/**
 * @event
 * @name onblurCodeEvent
 * @description code 포커스를 잃었을 때 발생한다.
 * @param {object} e 
 * @example desc
 */
scwin.emit_onblurCodeEvent = function (e) {
  if (!$c.util.isEmpty($p, ed_codeU.getValue()) || scwin.options.skipOnBlurCodeValueEmpty == "N") {
    $p.emit("onblurCodeEvent", e);
  } else {
    if (scwin.options.keepNameSwitch !== "Y") {
      ed_nameU.setValue("");
    }
  }
};

/**
 * @event
 * @name onviewchangeCodeEvent
 * @description code 컴포넌트의 value가 변경되었을 때 발생하는 이벤트로 focus out 시점에 발생한다.
 *   스크립트를 통해 값이 변경 된 경우에도 발생한다.
 * @param {object} info desc
 * @example desc
 */
scwin.emit_onviewchangeCodeEvent = function (info) {
  $p.emit("onviewchangeCodeEvent", info);
};

/**
 * @event
 * @name onblurNameEvent
 * @description name 포커스를 잃었을 때 발생한다.
 * @param {object} e desc
 * @example
 */
scwin.emit_onblurNameEvent = function (e) {
  if (!$c.util.isEmpty($p, ed_nameU.getValue()) || scwin.options.skipOnBlurNameValueEmpty == "N") {
    $p.emit("onblurNameEvent", e);
  } else {
    if (scwin.options.keepNameSwitch !== "Y") {
      ed_nameU.setValue("");
    }
  }
};

/**
 * @event
 * @name onviewchangeNameEvent
 * @description name 컴포넌트의 value가 변경되었을 때 발생하는 이벤트로 focus out 시점에 발생한다.
 *   스크립트를 통해 값이 변경 된 경우에도 발생한다.
 * @param {object} info desc
 * @example desc
 */
scwin.emit_onviewchangeNameEvent = function (info) {
  $p.emit("onviewchangeNameEvent", info);
};

/**
 * @event
 * @name onclickEvent
 * @description 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생. 
 *  단, type="image"인 경우, 마우스 클릭 시에만 발생.
 * @param {object} e desc
 * @example
 */
scwin.emit_onclickEvent = function (e) {
  $p.emit("onclickEvent", e);
};
scwin.sbm_search_submitdone = function (e) {
  if (ds_comcodeList.getRowCount() == 0 && (scwin.options.pSelectID == "retrieveDongbuGroupCompanyInfo" || scwin.options.pNoDataCloseTF == "T")) {
    if (typeof scwin.options.pCallback === "function") {
      scwin.options.pCallback(null);
    }
    return;
  }
  scwin.openPopup();
};

/**
 * @event
 * @name onFocusCodeEvent
 * @description code 컴포넌트의 value가 변경되었을 때 발생하는 이벤트로 focus out 시점에 발생한다.
 *   스크립트를 통해 값이 변경 된 경우에도 발생한다.
 * @param {object} info desc
 * @example desc
 */
scwin.emit_onFocusCodeEvent = function (e) {
  $p.emit("onFocusCodeEvent", e);
};

/**
 * @event
 * @name onFocusNameEvent
 * @description code 컴포넌트의 value가 변경되었을 때 발생하는 이벤트로 focus out 시점에 발생한다.
 *   스크립트를 통해 값이 변경 된 경우에도 발생한다.
 * @param {object} info desc
 * @example desc
 */
scwin.emit_onFocusNameEvent = function (e) {
  $p.emit("onFocusNameEvent", e);
};

/**
 * @method
 * @name cfCommonPopUp
 * @description 공통 코드 조회 팝업
 * @param {function} pCallback  : 팝업 콜백 리턴결과 Array 형태로 SQL Select 순서로 Return됨cfCommonPopUp.
 * @param {string} pCode     : 화면에서의 ??? Code Element의 Value           null    "1234"
 * @param {string} pName     : 화면에서의 ??? Name Element의 Value           null    "동부"
 * @param {string} pWinCloseTF   : 결과가 1건 일때  원도우를 AutoClose 여부  (T:Close,F:Opened)  null(F)   "T","F"
 * @param {string} pDispCnt    : 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10     null(2)   "5"
 * @param {string} pTitle      : Title명's                         null    "100,200"
 * @param {string} pWidth      : 보여주는 각 컬럼들의 폭                     null    "100,200"
 * @param {string} pHidden     : 컬럼중에서 숨기는 컬럼 지정                   null    "7,8,9,10"
 * @param {string} pWhere      : SQL절의 WHERE절에 원하는 조건을 선택함 MAX:12개까지 가능     null    "SHIP"
 * @param {string} pW        : POP-UP뛰을때 원도우의 사용자 정의 폭              null    "500"
 * @param {string} pH        : POP-UP뛰을때 우도우의 사용자 정의 높이              null    "600"
 * @param {string} pTop      : 윈도우 위치 Y좌표                       null    "10"
 * @param {string} pLeft     : 윈도우 위치 X좌표                       null    "10"
 * @param {string} pExistTF    : 중복체크여부                          null    "F"
 * @param {string} pAllSearchTF  : 전체검색허용여부                        null    "F"
 * @param {string} pWtitleSearch : POP-UP Window Title 검색어1,2(각화면에서 변경할경우)        null    "Win타이틀,검색어1,검색어2"
 * @param {string} pNoDataCloseTF  : Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"          null    "F"
 * @returns {N/A} N/A
 * @hidden N
 * @exception
 * @example 사용예)
 *     ex) udc_comCode1.cfCommonPopUp(ed_mgntClntNo.getValue(),ed_mgntClntNm.getValue(),null,null,null,null,null,null,null,null,null,null,null,null,null,null,scwin.udc_comCode1_callBackFunc);
 */
scwin.cfCommonPopUp = function (pCallback, pCode, pName, pWinCloseTF, pDispCnt, pTitle, pWidth, pHidden, pWhere, pW, pH, pTop, pLeft, pExistTF, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, tmpDataSet, pYear, pCodeObj, pNameObj) {
  //scwin.options = $p.getOptions();
  if (pCode?.startsWith("%")) {
    $c.win.alert($p, "검색어 첫번째문자로 %는 올 수 없습니다");
    ed_codeU.setValue("");
    return;
  }
  if (pName?.startsWith("%")) {
    $c.win.alert($p, "검색어 첫번째문자로 %는 올 수 없습니다");
    ed_nameU.setValue("");
    return;
  }

  // pCodeObj(코드로 사용할 컴포넌트를 보내 준 경우 코드를 사용할 컴포넌트를 비운다) 
  if (pCodeObj) {
    pCodeObj.setValue("");
  } else {
    if (scwin.options.keepCodeSwitch !== "Y") {
      ed_codeU.setValue("");
    }
  }

  // pNameObj(코드명으로 사용할 컴포넌트를 보내 준 경우 코드를 사용할 컴포넌트를 비운다)
  if (pNameObj) {
    pNameObj.setValue("");
  } else {
    if (scwin.options.keepNameSwitch !== "Y") {
      ed_nameU.setValue("");
    }
  }
  scwin.options.pSelectID = scwin.options.selectID;
  scwin.options.pCode = pCode;
  scwin.options.pName = pName;
  scwin.options.pWinCloseTF = pWinCloseTF;
  scwin.options.pDispCnt = pDispCnt;
  scwin.options.pTitle = pTitle;
  scwin.options.pWidth = pWidth;
  scwin.options.pHidden = pHidden;
  scwin.options.pWhere = pWhere;
  scwin.options.pW = pW;
  scwin.options.pH = pH;
  scwin.options.pTop = pTop;
  scwin.options.pLeft = pLeft;
  scwin.options.pExistTF = pExistTF;
  scwin.options.pAllSearchTF = pAllSearchTF;
  scwin.options.pWtitleSearch = pWtitleSearch;
  scwin.options.pNoDataCloseTF = pNoDataCloseTF;
  scwin.options.pCallback = pCallback;
  scwin.options.pYear = pYear;
  let pSelectID = scwin.options.selectID;
  // ==================================================
  // cfPreRequest 체크
  // ==================================================
  if ((pWinCloseTF == null || pWinCloseTF == "T") && scwin.options.pSelectID != "retrieveBudgetCtrlDeptInfo") {
    if (scwin.options.pSelectID == "retrieveCarModelCdInfo_tpro") {} else if (scwin.options.pSelectID == "retrieveLafargeVehicleInfo") {} else if (scwin.options.pSelectID == "retrieveModexCarListInfo") {} else {
      pAllSearchTF = "F";
    }
  }

  // 다음 Query는 전체검색을 무조건 허용하지 않음
  if (pSelectID == "retrieveClntInfo" || pSelectID == "retrieveClntList" || pSelectID == "retrieveClntList2" || pSelectID == "retrieveClntCrnList" || pSelectID == "retrieveCrnClntList" || pSelectID == "retrieveClntInfo2" || pSelectID == "retrieveClntInfo3" || pSelectID == "retrieveClntInfo_tpro" || pSelectID == "retrieveClntCrnList_tpro" || pSelectID == "retrieveCrnClntList" || pSelectID == "retrieveClntListWrkIndict_tpro" || pSelectID == "retrieveClntListPhone_tpro" || pSelectID == "retrieveMgntEmpNoList" || pSelectID == "retrieveClntEmpNoList") pAllSearchTF = "F";

  // 다음 Query는 전체검색을 무조건 허용함
  if (pSelectID == "retrieveTplCommCd" || pSelectID == "retrieveTplCommCd_tpro" || pSelectID == "retrieveCarKindClntInfo_tpro") pAllSearchTF = "T";
  scwin.options.pAllSearchTF = pAllSearchTF;
  if (pSelectID == "retrieveAcctDeptCdInfo10" || pSelectID == "retrieveRentloanList") {
    //총계정원장 부서팝업
    scwin.cfPreRequest(pSelectID, pCode, pName, pWhere, pAllSearchTF, pWinCloseTF, pYear); //pYear추가  2012.02.15
  } else {
    scwin.cfPreRequest(pSelectID, pCode, pName, pWhere, pAllSearchTF, pWinCloseTF);
  }
};

/**
 * @method
 * @name setSelectId
 * @description 쿼리 select Id 변경
 * @param {string} pSelectId 쿼리 id
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.setSelectId = function (pSelectID) {
  if (pSelectID) scwin.options.selectID = pSelectID;
};
scwin.expandPopupInfoTail = function (selectID, rtnList, expandInfoTail) {
  if (expandInfoTail != "Y" || !rtnList || rtnList.length < 10) {
    return rtnList;
  }
  if (selectID != "retrieveTransferAcctCdInfo" && selectID != "retrieveTransferAcctCdInfo2" && selectID != "retrieveMgntEmpNoList" && selectID != "retrieveClntEmpNoList") {
    return rtnList;
  }
  if ($c.util.isEmpty($p, rtnList[9])) {
    return rtnList;
  }
  return rtnList.concat(("" + rtnList[9]).split("^"));
};
scwin.openPopup = function () {
  scwin.options.pDispCnt = scwin.options.pDispCnt == null ? "8" : scwin.options.pDispCnt;
  scwin.options.pWinCloseTF = scwin.options.pWinCloseTF == null ? "F" : scwin.options.pWinCloseTF;
  scwin.options.pExistTF = scwin.options.pExistTF == null ? "F" : scwin.options.pExistTF;
  scwin.options.pAllSearchTF = scwin.options.pAllSearchTF == null ? "T" : scwin.options.pAllSearchTF;
  let bNoDataCloseTF = scwin.options.pNoDataCloseTF == null ? "F" : scwin.options.pNoDataCloseTF;
  let sTitle = null;
  let sWidth = null;
  let sHidden = null;
  let arrParm = [];
  let rtnList = [];

  // 결과가 1건이면서 Window AutoClose 일 ModalDialog 뛰우지 않음

  if (ds_comcodeList.getRowCount() == 1 && scwin.options.pWinCloseTF == 'T') {
    for (let b in ds_comcodeList.cellIdList) {
      rtnList.push(ds_comcodeList.getCellData(0, parseInt(b)));
    }
    rtnList = scwin.expandPopupInfoTail(scwin.options.selectID, rtnList, scwin.options.expandInfoTail);
    if (typeof scwin.options.pCallback == "function") {
      scwin.options.pCallback.call(this, rtnList);
    }
    return;
  }

  // 결과가 0건이면서 No Data AutoClose 일때 ModalDialog 뛰우지 않음
  if (ds_comcodeList.getRowCount() == 0 && bNoDataCloseTF == "T") {
    rtnList[0] = "N/A";
    scwin.options.pCallback.call(this, rtnList);
    return;
  }

  //로직처리
  if (!$c.comm.setGridLogic($p, scwin.options.selectID, scwin.options, arrParm)) {
    $c.win.alert($p, "SELECT ID가 업습니다.");
    return;
  }
  arrParm[1] = [scwin.options.pCode, scwin.options.pName]; //PopUP Parameter-->코드,명
  $c.comm.setParamset($p, scwin.options.selectID, scwin.options, arrParm[0], arrParm[1]);
  sWidth = scwin.options.pWidth == null ? "70,0,140,0,150,0,120,100,100,100" : scwin.options.pWidth;
  arrParm[3] = sWidth.split(","); // 컬럼의Width's

  arrParm[4] = ["Center", "Left", "Left", "Left", "Left", "Left", "Left", "Left", "Left", "Left"]; // 컬럼정렬

  if (scwin.options.pHidden != null) {
    arrParm[5] = scwin.options.pHidden.split(","); //Hidden칼럼
  }
  let arrParm6Len = 0; // commonPopup.xml에 콤보박스 띄워야 할 경우 사용

  if (scwin.options.pWhere != null) {
    if (scwin.options.pSelectID == "retrieveVatDeclarAcctDeptCd" || scwin.options.pSelectID == "retrieveVatDeclarAcctDeptCdAcctDeptCd") {
      var strArr = scwin.options.pWhere.advancedSplit(",", "t");
      arrParm[6] = {};
      arrParm[6].pUseYn = strArr[0];
      arrParm[6].pCode = strArr[1];
      arrParm[6].pCoCd = strArr[3];
      arrParm[6].pCoClsCd = strArr[4];
      arrParm[6].pAdptYr = strArr[5];
      var valueObject = {};
      valueObject.callbackFn = scwin.options.pCallback;
      valueObject.pUseYn = strArr[0];
      valueObject.pCode = $c.util.isEmpty($p, strArr[1]) ? scwin.options.pCode : strArr[1];
      valueObject.pCoCd = strArr[3];
      valueObject.pCoClsCd = strArr[4];
      valueObject.pAdptYr = strArr[5];
      valueObject.pWinCloseTF = scwin.options.pWinCloseTF;
    } else {
      arrParm[6] = scwin.options.pWhere.split(","); // 추가옵션 Where절
      arrParm6Len = arrParm[6].length;
    }
  }
  arrParm[7] = ds_comcodeList.getAllJSON();
  /** 공통팝업에 콤보박스 노출되어야해서 추가 */
  if (scwin.options.pSelectID == "retrieveWrkImple") {
    let pKind = ["점소", "OP230", !$c.util.isEmpty($p, arrParm[6][arrParm[6].length - 1]) ? arrParm[6][arrParm[6].length - 1] : ""];
    arrParm[8] = pKind;
  }
  let data = {
    callbackFn: scwin.options.pCallback,
    selectID: scwin.options.selectID,
    expandInfoTail: scwin.options.expandInfoTail,
    arrParm: arrParm
  };
  let pop;
  let opts = scwin.opts || {};
  opts.modal = true;
  opts.type = "browserPopup";
  opts.id = scwin.popupID || "pupup" + "_" + Date.now();
  if (scwin.options.pSelectID == "retrieveVatDeclarAcctDeptCd" || scwin.options.pSelectID == "retrieveVatDeclarAcctDeptCdAcctDeptCd") {
    // 팝업크기 설정(한승준 PM님 요청 사항 업무에서 크기조절 불가능하고 grid visible rownum 15로 통일)
    opts.width = scwin.options.pW == null ? 1180 : Number(scwin.options.pW) + 330;
    opts.height = 720; // scwin.options.pH;
    opts.popupName = arrParm[0][0] || "공통팝업";

    // valueObject에 플래그 심기
    valueObject.__cbFired = false;
    const __userCb_vo = valueObject.callbackFn;
    valueObject.callbackFn = function (rt) {
      valueObject.__cbFired = true;
      let r;
      if (typeof __userCb_vo === "function") {
        r = __userCb_vo.call(this, rt);
      }
      return r;
    };
    pop = $c.win.openPopup($p, $c.comm.getPopupUrl($p, scwin.options.selectID), opts, valueObject);
    console.log("[comCode openPopup] pop: ", pop);
  } else {
    // 팝업크기 설정(한승준 PM님 요청 사항 업무에서 크기조절 불가능하고 grid visible rownum 15로 통일)
    scwin.options.pW = scwin.options.pW == null ? 770 : Number(scwin.options.pW) + 330;
    scwin.options.pH = 720; // (scwin.options.pH == null) ? 600 : Number(scwin.options.pH);

    opts.width = scwin.options.pW;
    opts.height = scwin.options.pH;
    opts.popupName = arrParm[0][0] || "공통팝업";

    // data에 플래그 심기
    data.__cbFired = false;
    const __userCb_data = data.callbackFn;
    data.callbackFn = function (rt) {
      data.__cbFired = true;
      let r;
      if (typeof __userCb_data === "function") {
        r = __userCb_data.call(this, rt);
      }
      return r;
    };
    pop = $c.win.openPopup($p, $c.comm.getPopupUrl($p, scwin.options.selectID), opts, data);
    console.log("[comCode openPopup] pop: ", pop);
  }

  // data 또는 valueObject 중 실제로 팝업에 넘긴 carrier를 잡아둠
  const carrier = scwin.options.pSelectID == "retrieveVatDeclarAcctDeptCd" || scwin.options.pSelectID == "retrieveVatDeclarAcctDeptCdAcctDeptCd" ? valueObject : data;
  pop.then(function (rtn) {
    console.log("[comCode openPopup] resolved:", rtn);

    // 콜백이 '안 탔다'면 = X(또는 콜백 미호출 종료)로 보고 보험 처리
    if (carrier && carrier.__cbFired !== true && typeof scwin.__commonPopupAsyncClosed === "function") {
      scwin.__commonPopupAsyncClosed();
    }
  }).catch(function (e) {
    console.error("[comCode openPopup] rejected:", e);
    if (carrier && carrier.__cbFired !== true && typeof scwin.__commonPopupAsyncClosed === "function") {
      scwin.__commonPopupAsyncClosed();
    }
  });
};

/**
 * @type   : function
 * @access : public 
 * @desc   : 화면상에서 onChange event 발생 결과가 1건일경우 ModalDialog 위도우를 뛰우지 않고 결과만 Return 하기위함.
 * @sig    :
 * @param  : DataSet ID
 * @return : void
 * @author : kwkyung@lgcns.com
 */
scwin.cfPreRequest = function (pSelectID, pCode, pName, pWhere, pAllSearchTF, pWinCloseTF, pYear) {
  scwin.arrOptCnd = pWhere ? pWhere.split(",") : [];
  scwin.code = pCode;
  scwin.name = pName;
  let param3 = pYear ? pYear : scwin.arrOptCnd[0];
  const forceAutoQuerySelect = pSelectID == "retrieveTplCommCd" || pSelectID == "retrieveTplCommCd_tpro";
  if ((pCode != "" || pName != "") && pWinCloseTF != "F" && (pAllSearchTF != "T" || forceAutoQuerySelect)) {
    ds_comcode.set("sysCd", "CommonEBC");
    ds_comcode.set("queryId", pSelectID);
    ds_comcode.set("userId", $c.data.getMemInfo($p, "userId"));
    ds_comcode.set("param1", pCode);
    ds_comcode.set("param2", pName);
    ds_comcode.set("param3", param3);
    ds_comcode.set("param4", scwin.arrOptCnd[1]);
    ds_comcode.set("param5", scwin.arrOptCnd[2]);
    ds_comcode.set("param6", scwin.arrOptCnd[3]);
    ds_comcode.set("param7", scwin.arrOptCnd[4]);
    ds_comcode.set("param8", scwin.arrOptCnd[5]);
    ds_comcode.set("param9", scwin.arrOptCnd[6]);
    ds_comcode.set("param10", scwin.arrOptCnd[7]);
    ds_comcode.set("param11", scwin.arrOptCnd[8]);
    ds_comcode.set("param12", scwin.arrOptCnd[9]);
    ds_comcode.set("param13", scwin.arrOptCnd[10]);
    ds_comcode.set("param14", scwin.arrOptCnd[11]);
    if ($c.comm.getPopupUrl($p, scwin.options.selectID) == "/cm/xml/commonPopupNcall.xml") {
      ds_comcode.set("sysCd", "NcallCommonEBC");
      sbm_search.action = "/ncall.cm.zz.RetrieveCommonPopupCMD.do";
      // queryId에서 "Ncall" 제거
      let queryId = ds_comcode.get("queryId");
      if (queryId && queryId.indexOf("Ncall") > -1) {
        queryId = queryId.replace(/Ncall/g, "");
        ds_comcode.set("queryId", queryId);
      }
    }
    if (scwin.options.progressBarSwitch == "N") {
      sbm_search.processMsg = "none"; //  로딩바 제거
    }
    $c.sbm.execute($p, sbm_search);
  } else {
    ds_comcodeList.removeAll();
    scwin.openPopup();
  }
};

//Ncall(Ntis) 
scwin.cfCommonPopUpEx = function (paramObj) {
  const {
    pCallback,
    pCode = "",
    pName = "",
    pWinCloseTF,
    pDispCnt,
    pTitle,
    pWidth,
    pHidden,
    pWhere,
    pW,
    pH,
    pTop,
    pLeft,
    pExistTF,
    pAllSearchTF,
    pWtitleSearch,
    pNoDataCloseTF,
    tmpDataSet,
    pYear
  } = paramObj || {};
  return scwin.cfCommonPopUp({
    pCallback,
    pCode,
    pName,
    pWinCloseTF,
    pDispCnt,
    pTitle,
    pWidth,
    pHidden,
    pWhere,
    pW,
    pH,
    pTop,
    pLeft,
    pExistTF,
    pAllSearchTF,
    pWtitleSearch,
    pNoDataCloseTF,
    tmpDataSet,
    pYear
  });
};
scwin.ed_codeU_onchange = function (info) {
  if (!$c.util.isEmpty($p, scwin.options.maxlengthCode) && scwin.options.maxlengthCode > 0 && !$c.util.isEmpty($p, info.newValue) && info.newValue.length > scwin.options.maxlengthCode) {
    ed_codeU.setEventPause(null, true);
    ed_codeU.setValue(info.newValue.substr(0, scwin.options.maxlengthCode));
    ed_codeU.setEventPause(null, false);
  }
  if (!$c.util.isEmpty($p, scwin.options.allowCharCodeLength) && !$c.util.isEmpty($p, scwin.options.beforeAllowCharCode) && !$c.util.isEmpty($p, scwin.options.afterAllowCharCode) && info.newValue.length > 0) {
    const ret = scwin.normalizeFirstAlphaRestDigit(info.newValue, scwin.options.allowCharCodeLength, scwin.options.beforeAllowCharCode, scwin.options.afterAllowCharCode);
    ed_codeU.setValue(ret);
  }
};
scwin.ed_nameU_onchange = function (info) {
  if (!$c.util.isEmpty($p, scwin.options.maxlengthName) && scwin.options.maxlengthName > 0 && !$c.util.isEmpty($p, info.newValue) && info.newValue.length > scwin.options.maxlengthName) {
    ed_nameU.setEventPause(null, true);
    ed_nameU.setValue(info.newValue.substr(0, scwin.options.maxlengthName));
    ed_nameU.setEventPause(null, false);
  }
  if (!$c.util.isEmpty($p, scwin.options.allowCharCodeLength) && !$c.util.isEmpty($p, scwin.options.beforeAllowCharCode) && !$c.util.isEmpty($p, scwin.options.afterAllowCharCode) && info.newValue.length > 0) {
    const ret = scwin.normalizeFirstAlphaRestDigit(info.newValue, scwin.options.allowCharNameLength, scwin.options.beforeAllowCharName, scwin.options.afterAllowCharName);
    ed_nameU.setValue(ret);
  }
};
scwin.ed_codeU_onkeydown = function (e) {
  if (e.key.length !== 1) return;
  if (!$c.util.isEmpty($p, scwin.options.allowCharCodeLength) && !$c.util.isEmpty($p, scwin.options.beforeAllowCharCode) && !$c.util.isEmpty($p, scwin.options.afterAllowCharCode)) {
    const start = typeof e.target?.selectionStart === "number" ? e.target.selectionStart : ed_codeU.getSelectionStart ? ed_codeU.getSelectionStart() : (ed_codeU.getValue() || "").length;
    const allowClass = start < scwin.options.allowCharCodeLength ? `^[${scwin.options.beforeAllowCharCode}]$` : `^[${scwin.options.afterAllowCharCode}]$`;
    const ok = new RegExp(allowClass).test(e.key);
    if (!ok) {
      e.preventDefault?.();
      e.stopPropagation?.();
    }
  }
};
scwin.ed_nameU_onkeydown = function (e) {
  if (e.key.length !== 1) return;
  if (!$c.util.isEmpty($p, scwin.options.allowCharNameLength) && !$c.util.isEmpty($p, scwin.options.beforeAllowCharName) && !$c.util.isEmpty($p, scwin.options.afterAllowCharName)) {
    const start = typeof e.target?.selectionStart === "number" ? e.target.selectionStart : ed_nameU.getSelectionStart ? ed_nameU.getSelectionStart() : (ed_nameU.getValue() || "").length;
    const allowClass = start < scwin.options.allowCharNameLength ? `^[${scwin.options.beforeAllowCharName}]$` : `^[${scwin.options.afterAllowCharName}]$`;
    const ok = new RegExp(allowClass).test(e.key);
    if (!ok) {
      e.preventDefault?.();
      e.stopPropagation?.();
    }
  }
};
scwin.normalizeFirstAlphaRestDigit = function (raw, allowCharCodeLength, beforeAllowCharCode, afterAllowCharCode) {
  raw = (raw ?? "").toString();
  const limit = Number(allowCharCodeLength);
  const beforeClass = beforeAllowCharCode;
  const afterClass = afterAllowCharCode;
  if (!beforeClass || !afterClass || !limit) return raw;

  // before 영역
  const beforePart = raw.slice(0, limit).replace(new RegExp(`[^${beforeClass}]`, "g"), "");
  if (!beforePart) return "";

  // 필요 시 첫 글자 대문자 정책
  const fixedBefore = beforePart.charAt(0).toUpperCase() + beforePart.slice(1);

  // after 영역
  const afterPart = raw.slice(limit).replace(new RegExp(`[^${afterClass}]`, "g"), "");
  return fixedBefore + afterPart;
};
scwin.btn_triggerU_onmousedown = function (e) {
  $p.emit("onclickEvent", e);
};

// 전역 락(동시 실행 방지) - comCode.xml UDC 스코프에 1개만
scwin.__commonPopupAsyncLock = scwin.__commonPopupAsyncLock || Promise.resolve();

/**
 * @method
 * @name cfCommonPopUpAsync
 * @description cfCommonPopUp를 Promise로 감싼 Async 버전
 * @param {string} pCode desc
 * @param {string} pName desc
 * @param {string} pWinCloseTF desc
 * @param {string} pDispCnt desc
 * @param {string} pTitle desc
 * @param {string} pWidth desc
 * @param {string} pHidden desc
 * @param {string} pWhere desc
 * @param {string} pW desc
 * @param {string} pH desc
 * @param {string} pTop desc
 * @param {string} pLeft desc
 * @param {string} pExistTF desc
 * @param {string} pAllSearchTF desc
 * @param {string} pWtitleSearch desc
 * @param {string} pNoDataCloseTF desc
 * @param {string} tmpDataSet desc
 * @param {string} pYear desc
 * @param {string} pCodeObj desc
 * @param {string} pNameObj desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.cfCommonPopUpAsync = function (pCallback, pCode, pName, pWinCloseTF, pDispCnt, pTitle, pWidth, pHidden, pWhere, pW, pH, pTop, pLeft, pExistTF, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, tmpDataSet, pYear, pCodeObj, pNameObj) {
  // 큐에 태워서 순차 실행되게 함 (팝업/submitdone 덮어쓰기 꼬임 방지)
  const run = () => new Promise(resolve => {
    scwin.__isAsyncCommonPopup = false;
    let finished = false;
    const callUserCallback = async val => {
      try {
        if (typeof pCallback === "function") {
          return await pCallback(val);
        }
      } catch (e) {
        console.error("[comCode.xml cfCommonPopUpAsync] error: ", e);
      }
    };
    const done = val => {
      if (finished) return;
      finished = true;

      // submitdone 원복
      if (scwin.__orig_sbm_search_submitdone_for_async) {
        scwin.sbm_search_submitdone = scwin.__orig_sbm_search_submitdone_for_async;
        scwin.__orig_sbm_search_submitdone_for_async = null;
      }
      scwin.__isAsyncCommonPopup = true; // 종료
      scwin.__commonPopupAsyncClosed = null; // 정리

      Promise.resolve(callUserCallback(val ?? null)).finally(function () {
        resolve(val ?? null);
      });
    };

    // ====== (1) % 시작 케이스: 기존은 alert 후 return이라 async는 done(null)로 종료 보장 ======
    const _code = (pCode ?? "").toString();
    const _name = (pName ?? "").toString();
    if (_code.startsWith("%") || _name.startsWith("%")) {
      // 기존 함수가 alert를 띄우고 return 할 것
      // 여기서는 Promise/콜백만 먼저 종료 보장
      done(null);
      scwin.__isAsyncCommonPopup = true;

      // 기존 로직 실행(Alert띄우기 위함)
      scwin.cfCommonPopUp(function () {}, pCode, pName, pWinCloseTF, pDispCnt, pTitle, pWidth, pHidden, pWhere, pW, pH, pTop, pLeft, pExistTF, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, tmpDataSet, pYear, pCodeObj, pNameObj);
      return;
    }

    // ====== (2) submitdone 특수 return 케이스도 async에서는 done(null)로 종료 ======
    if (!scwin.__orig_sbm_search_submitdone_for_async) {
      scwin.__orig_sbm_search_submitdone_for_async = scwin.sbm_search_submitdone;
      scwin.sbm_search_submitdone = function (e) {
        // return 해주던 부분은 비동기 함수에서도 그대로 return 되도록 promise 종료와 함께 넣어주기
        if (ds_comcodeList.getRowCount() == 0 && (scwin.options.pSelectID == "retrieveDongbuGroupCompanyInfo" || scwin.options.pNoDataCloseTF == "T")) {
          done(null);
          return;
        }
        return scwin.__orig_sbm_search_submitdone_for_async.call(this, e);
      };
    }

    // ====== (3) 실제 호출: 기존 cfCommonPopUp의 콜백을 done으로 연결 ======
    scwin.cfCommonPopUp(function (rt) {
      console.log("[comCode cfCommonPopUpAsync] rt: ", rt);
      done(rt);
    }, pCode, pName, pWinCloseTF, pDispCnt, pTitle, pWidth, pHidden, pWhere, pW, pH, pTop, pLeft, pExistTF, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, tmpDataSet, pYear, pCodeObj, pNameObj);
    scwin.__commonPopupAsyncClosed = function () {
      done(null);
    };
  });

  // 큐잉: 이전 작업 끝난 다음 실행
  scwin.__commonPopupAsyncLock = (scwin.__commonPopupAsyncLock || Promise.resolve()).then(run, run);

  // 호출자는 await 가능
  return scwin.__commonPopupAsyncLock;
};

/**
 * @method
 * @name cfCommonPopUpSilentAsync
 * @description desc
 * @param
 * @returns
 * @hidden N
 * @exception
 * @migrationStatus
 * @example
 */

scwin.prepareCommonPopupSearch = function (pCode, pName, pWinCloseTF, pDispCnt, pTitle, pWidth, pHidden, pWhere, pW, pH, pTop, pLeft, pExistTF, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, tmpDataSet, pYear, pCodeObj, pNameObj) {
  scwin.options = scwin.options || {};
  scwin.options.pCode = pCode;
  scwin.options.pName = pName;
  scwin.options.pWinCloseTF = pWinCloseTF;
  scwin.options.pDispCnt = pDispCnt;
  scwin.options.pTitle = pTitle;
  scwin.options.pWidth = pWidth;
  scwin.options.pHidden = pHidden;
  scwin.options.pWhere = pWhere;
  scwin.options.pW = pW;
  scwin.options.pH = pH;
  scwin.options.pTop = pTop;
  scwin.options.pLeft = pLeft;
  scwin.options.pExistTF = pExistTF;
  scwin.options.pAllSearchTF = pAllSearchTF;
  scwin.options.pWtitleSearch = pWtitleSearch;
  scwin.options.pNoDataCloseTF = pNoDataCloseTF;
  scwin.options.tmpDataSet = tmpDataSet;
  scwin.options.pYear = pYear;
  scwin.options.pCodeObj = pCodeObj;
  scwin.options.pNameObj = pNameObj;
};
scwin.cfCommonPopUpDataAsync = function (pSelectID, pCode, pName, pWhere, pDispCnt, pTitle, pWidth, pHidden, pW, pH, pTop, pLeft, pExistTF, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, tmpDataSet, pYear, pCodeObj, pNameObj) {
  return new Promise((resolve, reject) => {
    try {
      // =========================
      // 1. 옵션/상태값 세팅
      // =========================
      scwin.options = scwin.options || {};
      scwin.options.pSelectID = pSelectID;
      scwin.options.pCode = pCode;
      scwin.options.pName = pName;
      scwin.options.pWhere = pWhere;
      scwin.options.pDispCnt = pDispCnt;
      scwin.options.pTitle = pTitle;
      scwin.options.pWidth = pWidth;
      scwin.options.pHidden = pHidden;
      scwin.options.pW = pW;
      scwin.options.pH = pH;
      scwin.options.pTop = pTop;
      scwin.options.pLeft = pLeft;
      scwin.options.pExistTF = pExistTF;
      scwin.options.pAllSearchTF = pAllSearchTF;
      scwin.options.pWtitleSearch = pWtitleSearch;
      scwin.options.pNoDataCloseTF = pNoDataCloseTF;
      scwin.options.tmpDataSet = tmpDataSet;
      scwin.options.pYear = pYear;
      scwin.options.pCodeObj = pCodeObj;
      scwin.options.pNameObj = pNameObj;

      // =========================
      // 2. pWhere 분해
      // =========================
      scwin.arrOptCnd = [];
      if (!$c.util.isEmpty($p, pWhere)) {
        scwin.arrOptCnd = String(pWhere).split(",");
      }

      // cfCommonPopUp 내부에서 쓰던 param3 계산 로직 있으면 그거 맞춰야 함
      // 우선 일반적으로 dispCnt 또는 year 등이 들어가던 부분이면 네 원본 기준으로 맞춰야 함
      let param3 = "";
      if (!$c.util.isEmpty($p, pDispCnt)) {
        param3 = pDispCnt;
      }

      // =========================
      // 3. ds_comcode 세팅
      // =========================
      ds_comcode.set("sysCd", "CommonEBC");
      ds_comcode.set("queryId", pSelectID);
      ds_comcode.set("userId", $c.data.getMemInfo($p, "userId"));
      ds_comcode.set("param1", pCode);
      ds_comcode.set("param2", pName);
      ds_comcode.set("param3", param3);
      ds_comcode.set("param4", scwin.arrOptCnd[1]);
      ds_comcode.set("param5", scwin.arrOptCnd[2]);
      ds_comcode.set("param6", scwin.arrOptCnd[3]);
      ds_comcode.set("param7", scwin.arrOptCnd[4]);
      ds_comcode.set("param8", scwin.arrOptCnd[5]);
      ds_comcode.set("param9", scwin.arrOptCnd[6]);
      ds_comcode.set("param10", scwin.arrOptCnd[7]);
      ds_comcode.set("param11", scwin.arrOptCnd[8]);
      ds_comcode.set("param12", scwin.arrOptCnd[9]);
      ds_comcode.set("param13", scwin.arrOptCnd[10]);
      ds_comcode.set("param14", scwin.arrOptCnd[11]);

      // =========================
      // 4. submitdone / error 가로채기
      // =========================
      const origDone = scwin.sbm_search_submitdone;
      const origError = scwin.sbm_search_submiterror;
      let finished = false;
      const cleanup = () => {
        scwin.sbm_search_submitdone = origDone;
        scwin.sbm_search_submiterror = origError;
      };
      scwin.sbm_search_submitdone = function (e) {
        if (finished) return;
        finished = true;
        try {
          let result = [];
          const rowCnt = ds_comcodeList.getRowCount();
          for (let i = 0; i < rowCnt; i++) {
            if (typeof ds_comcodeList.getRowJSON === "function") {
              result.push(ds_comcodeList.getRowJSON(i));
            } else {
              let rowObj = {};
              let colCnt = ds_comcodeList.getColumnCount();
              for (let j = 0; j < colCnt; j++) {
                let colId = ds_comcodeList.getColumnID(j);
                rowObj[colId] = ds_comcodeList.getCellData(i, colId);
              }
              result.push(rowObj);
            }
          }
          cleanup();
          resolve(result);
        } catch (err) {
          cleanup();
          reject(err);
        }
      };
      scwin.sbm_search_submiterror = function (e) {
        if (finished) return;
        finished = true;
        cleanup();
        reject(e);
      };

      // =========================
      // 5. 팝업 없이 조회만 실행
      // =========================
      $c.sbm.execute($p, sbm_search);
    } catch (e) {
      reject(e);
    }
  });
};
scwin.ed_codeU_onfocus = function (e) {
  let fnName = scwin.options.codeOnFocus;
  if (!fnName) return;
  let parent = $p.parent();
  if (!parent) {
    console.warn("[UDC] parent not found");
    return;
  }
  let target = parent;
  let path = fnName.split(".");
  for (let i = 0; i < path.length; i++) {
    target = target[path[i]];
    if (target == null) break;
  }
  if (typeof target === "function") {
    target.call(parent, e);
  } else {
    console.warn("[UDC] codeOnFocus is not a function:", fnName, target);
  }
};
scwin.ed_nameU_onfocus = function (e) {
  let fnName = scwin.options.nameOnFocus;
  if (!fnName) return;
  let parent = $p.parent();
  if (!parent) {
    console.warn("[UDC] parent not found");
    return;
  }
  let target = parent;
  let path = fnName.split(".");
  for (let i = 0; i < path.length; i++) {
    target = target[path[i]];
    if (target == null) break;
  }
  if (typeof target === "function") {
    target.call(parent, e);
  } else {
    console.warn("[UDC] nameOnFocus is not a function:", fnName, target);
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'grp_comCode',class:'sch-box',style:'height: 22px;'},E:[{T:1,N:'xf:input',A:{class:'form-control num',id:'ed_codeU',placeholder:'',ref:'',style:'','ev:onblur':'scwin.emit_onblurCodeEvent','ev:onkeyup':'scwin._onkeyup','ev:onviewchange':'scwin.emit_onviewchangeCodeEvent',enterBlur:'false','ev:onchange':'scwin.ed_codeU_onchange','ev:onfocus':'scwin.emit_onFocusCodeEvent','ev:onkeydown':'scwin.ed_codeU_onkeydown'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_triggerU',style:'',type:'button','ev:onclick':'scwin.emit_onclickEvent','ev:onmousedown':'scwin.btn_triggerU_onmousedown'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{class:'form-control',id:'ed_nameU',placeholder:'',style:'','ev:onviewchange':'scwin.emit_onviewchangeNameEvent','ev:onblur':'scwin.emit_onblurNameEvent',enterBlur:'false','ev:onkeyup':'scwin.__keyup','ev:onchange':'scwin.ed_nameU_onchange','ev:onfocus':'scwin.emit_onFocusNameEvent','ev:onkeydown':'scwin.ed_nameU_onkeydown'}}]}]}]}]})