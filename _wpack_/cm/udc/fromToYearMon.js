/*amd /cm/udc/fromToYearMon.xml 15683 dd8b524860230690a790799cf47af042cf78fdda7f6dc74859de92263974370b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',A:{palette:'support'},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:publicInfo',A:{method:'scwin.setInitDate,scwin.setInitDate2'}},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:aliasDataMap',A:{id:'aliasDataMap',scope:''}},{T:1,N:'w2:aliasDataList',A:{id:'aliasDataList',scope:''}}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @component
 * @componentName udc_fromToYearMon
 * @pluginName 
 * @company 
 * @developer user
 * @category /cm/udc
 * @variableClone true
 * @notSupportBrowser 
 * @version 
 * @htmlRender 
 * @icon 
 * @disableIcon 
 * @width %
 * @height px
 * @description 
 */

/**
 * @property
 * @name id
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default udc_fromToCal
 * @necessary Y
 * @description 메인화면에서 사용할 UDC ID
 */

/**
 * @property
 * @name class
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @description Class ID
 */

/**
 * @property
 * @name style
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @description 메안화면의 style
 */

/**
 * @property
 * @name refStDt
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary Y
 * @description bind 할 메인화면의  dataMap 컬럼 ID ( 시작날짜 )
 */

/**
 * @property
 * @name refEdDt
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary Y
 * @description bind 할 메인화면의  dataMap 컬럼 ID ( 종료날짜 )
 */

/**
 * @property
 * @name refDataMap
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary Y
 * @description bind 할 메인화면의 dataMap  ID (메인화면의 데이타 맵인 경우   예: ../dataMapid )
 */

/**
 * @property
 * @name mandatoryFrom
 * @category 03.Data
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description From 필수입력 여부
 */

/**
 * @property
 * @name objTypeTo
 * @category 03.Data
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description To 달력 objType
 */

/**
 * @property
 * @name objTypeFrom
 * @category 03.Data
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description From 달력 objType
 */

/**
 * @property
 * @name objTypeBtn
 * @category 03.Data
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 달력 버튼 objTypeBtn
 */

/**
 * @property
 * @name edFromId
 * @category 03.Data
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description From 객체 아이디
 */

/**
 * @property
 * @name edToId
 * @category 03.Data
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description To 객체 아이디
 */

/**
 * @property
 * @name mandatoryTo
 * @category 03.Data
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description To 필수입력 여부
 */

/**
 * @property
 * @name userAuthBtn
 * @category 03.Data
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 버튼 userAuth 속성
 */

/**
 * @property
 * @name titleFrom
 * @category 03.Data
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description from 타이틀
 */

/**
 * @property
 * @name titleTo
 * @category 03.Data
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description to 타이틀
 */

/**
 * @method
 * @name setInit
 * @description desc
 * @return None|없음.
 * @param 
 * @hidden Y
 * @exception 
 * @sample 
 */
scwin.onpageload = function () {
  scwin.setInit();
  scwin.disFlag = true;
  scwin.initFlag = true; // 초기화면 셋팅시 달력도 일치하게 처리
};
scwin.setInit = function () {
  var opts = $p.getOptions();
  var refDataMap = opts.refDataMap;
  let pFrame = $p.parent();
  let alias, aliasId;
  if (opts.edFromId) {
    pFrame[opts.edFromId] = ipt_from;
  }
  if (opts.edToId) {
    pFrame[opts.edToId] = ipt_to;
  }
  if (opts.mandatoryFrom == "true") {
    ipt_from.setMandatory(true);
    ipt_from.options.dateValidSet = true;
  } else if (opts.mandatoryFrom == "false") {
    ipt_from.setMandatory(false);
    ipt_from.options.dateValidSet = false;
  }
  if (opts.mandatoryTo == "true") {
    ipt_to.setMandatory(true);
    ipt_to.options.dateValidSet = true;
  } else if (opts.mandatoryTo == "false") {
    ipt_to.setMandatory(false);
    ipt_to.options.dateValidSet = false;
  }
  if (opts.objTypeFrom) {
    ipt_from.options.objType = opts.objTypeFrom;
  }
  if (opts.objTypeTo) {
    ipt_to.options.objType = opts.objTypeTo;
  }
  if (opts.objTypeBtn) {
    img_Cal.options.objType = opts.objTypeBtn;
  }
  if (opts.userAuthBtn) {
    img_Cal.options.userAuth = opts.userAuthBtn;
  }
  if (opts.titleFrom) {
    ipt_from.options.invalidMessage = opts.titleFrom;
  }
  if (opts.titleTo) {
    ipt_to.options.invalidMessage = opts.titleTo;
  }
  if (!refDataMap) return;
  switch (pFrame[refDataMap].options.pluginName) {
    case "dataMap":
      alias = aliasDataMap;
      aliasId = aliasDataMap.org_id + ".";
      break;
    case "dataList":
      alias = aliasDataList;
      aliasId = aliasDataList.org_id + ".";
      break;
  }
  alias.setScope("../" + refDataMap);
  ipt_from.setRef("data:" + aliasId + opts.refStDt);
  ipt_to.setRef("data:" + aliasId + opts.refEdDt);
  // let refStDt = alias.get(opts.refStDt);
  // let refEdDt = alias.get(opts.refEdDt);

  // scwin.setInitDate(refStDt,refEdDt);
};

/**
 * @method
 * @name setInitDate
 * @description desc
 * @return None|없음
 * @param <String>|fromDate|desc
 * @param <String>|toDate|desc 
 * @hidden N
 * @exception 
 * @sample 
 */
scwin.setInitDate = function (fromDate, toDate) {
  gr_cal.setStyle("display", "none");
  scwin.disFlag = true;
  if (fromDate.length == 6) {
    scwin.setInitFromDate(fromDate);
  }
  if (toDate.length == 6) {
    scwin.setInitToDate(toDate);
  }
  cal_fr.gotoCalendar(fromDate);
  cal_to.gotoCalendar(toDate);

  // scwin.disableBeforeDate(fromDate);
  // scwin.disableAfterDate(toDate);
};
/**
 * @method
 * @name setInitFromDate
 * @description desc
 * @return None|없음
 * @param <String>|dateStr|desc 
 * @hidden Y
 * @exception 
 * @sample 
 */
scwin.setInitFromDate = function (dateStr) {
  ipt_from.setValue(dateStr);
  //scwin.setMainFromDate(dateStr);
};

/**
 * @method
 * @name setInitToDate
 * @description desc
 * @return None|없음
 * @param <String>|dateStr|desc 
 * @hidden Y
 * @exception 
 * @sample 
 */
scwin.setInitToDate = function (dateStr) {
  ipt_to.setValue(dateStr);
  //scwin.setMainFromDate(dateStr);
};

/**
 * @method
 * @name setInitDate2
 * @description desc
 * @param {string} strDate desc
 * @param {string} toDate desc
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.setInitDate2 = function (strDate, toDate) {
  gr_cal.setStyle("display", "none");
  scwin.disFlag = true;
  if (strDate.length == 6) {
    scwin.setInitFromDate(strDate);
  }
  if (toDate.length == 6) {
    scwin.setInitToDate(toDate);
  }
};
scwin.img_Cal_onclick = function (e) {
  if (scwin.disFlag) {
    //$c.win.gridSettingsClose();
    gr_cal.focus();
    scwin.disFlag = false;
    let left = 0;
    if ($("#" + this.id).offset().left > 560 + 220) {
      left = -320;
    }
    let top = this.getPosition("top") + 24;
    gr_cal.setStyle('top', top + 'px');
    gr_cal.setStyle('left', left + 'px');
    gr_cal.show("");
    if (scwin.initFlag && ipt_to.getValue() && ipt_to.getValue().length == 6) {
      cal_to.gotoCalendar(ipt_to.getValue());
    } else {
      cal_to.gotoCalendar($p.getCurrentServerDate("yyyyMM"));
    }
    if (scwin.initFlag && ipt_from.getValue() && ipt_from.getValue().length == 6) {
      cal_fr.gotoCalendar(ipt_from.getValue());
    } else {
      cal_fr.gotoCalendar($p.getCurrentServerDate("yyyyMM"));
    }
  } else {
    scwin.disFlag = true;
    gr_cal.setStyle("display", "none");
  }
};
scwin.ipt_from_onviewchange = function (info) {
  var val = info.newValue;
  // scwin.cal_fr_ondateselect(val);
  scwin.cal_fr_onmonthselect(info);
};
scwin.ipt_to_onviewchange = function (info) {
  var val = info.newValue;
  // scwin.cal_to_ondateselect(val);
  scwin.cal_to_onmonthselect(info);
};
scwin.cal_fr_onmonthselect = function (info) {
  //debugger;
  let dateStr = info.newValue;
  if (dateStr > ipt_to.getValue() && ipt_to.getValue() != "" && dateStr.length == 6) {
    $c.win.alert($p, "TO DATE 보다 미래일자 입니다.", function () {
      // ipt_from.setValue(info.oldValue);
      // cal_fr.gotoCalendar(info.oldValue);
      ipt_from.setValue("");
      ipt_from.focus();
    });
    return;
  } else {
    let minY = $W.configCacheObj.calendar.minYear || 1978;
    let maxY = $W.configCacheObj.calendar.maxYear || 2030;
    let strY = dateStr.substring(0, 4);
    if (!$c.date.isDate($p, dateStr) && dateStr.length == 6 || parseInt(strY) < minY || parseInt(strY) > maxY) {
      $c.win.alert($p, "날짜 형식이 올바르지 않습니다1.", function () {
        if (gr_cal.getStyleValue("display") !== "none") {
          ipt_from.setValue(info.oldValue);
          cal_fr.gotoCalendar(info.oldValue);
        } else {
          ipt_from.setValue("");
          ipt_from.focus();
        }
        return;
      });
    }
    ipt_from.setValue(dateStr);
    if (dateStr) {
      cal_fr.gotoCalendar(dateStr);
    } else {
      cal_fr.gotoCalendar($p.getCurrentServerDate("yyyyMM"));
    }
    //cal_to.options.disableBeforeDate = dateStr;
    if (ipt_to.getValue()) {
      scwin.disFlag = true;
      gr_cal.setStyle("display", "none");
    }
  }
  // scwin.disableBeforeDate( dateStr);		
};
scwin.cal_to_onmonthselect = function (info) {
  //debugger;
  let dateStr = info.newValue;
  if (dateStr < ipt_from.getValue() && ipt_from.getValue() != "" && dateStr.length == 6) {
    $c.win.alert($p, "FROM DATE 보다 과거일자 입니다.", function () {
      ipt_to.setValue("");
      ipt_to.focus();
      // ipt_to.setValue(info.oldValue);
      // cal_to.gotoCalendar(info.oldValue);
      return;
    });
  } else {
    let minY = $W.configCacheObj.calendar.minYear || 1978;
    let maxY = $W.configCacheObj.calendar.maxYear || 2030;
    let strY = dateStr.substring(0, 4);
    if (!$c.date.isDate($p, dateStr) && dateStr.length == 6 || parseInt(strY) < minY || parseInt(strY) > maxY) {
      $c.win.alert($p, "날짜 형식이 올바르지 않습니다.", function () {
        if (gr_cal.getStyleValue("display") !== "none") {
          ipt_to.setValue(info.oldValue);
          cal_to.gotoCalendar(info.oldValue);
        } else {
          ipt_to.setValue("");
          ipt_to.focus();
        }
        return;
      });
    }
    ipt_to.setValue(dateStr);
    cal_to.gotoCalendar(dateStr);
    if (dateStr) {
      cal_to.gotoCalendar(dateStr);
    } else {
      cal_to.gotoCalendar($p.getCurrentServerDate("yyyyMM"));
    }
    if (ipt_from.getValue()) {
      scwin.disFlag = true;
      gr_cal.setStyle("display", "none");
    }
  }
  // scwin.disableAfterDate	( dateStr );	
};

/**
 * @event
 * @name onBlurFrom
 * @description from blur 이벤트
 * @param {object} e desc
 * @example
 */
scwin.emit_onBlurFrom = function (e) {
  $p.emit("onBlurFrom", e);
};

/**
 * @event
 * @name onBlurTo
 * @description blurTo 이벤트
 * @param {object} e desc
 * @example
 */
scwin.emit_onBlurTo = function (e) {
  $p.emit("onBlurTo", e);
};
scwin.onBlurTo = function (e) {
  let dateStr = this.getValue();
  // if(this.getValue() && this.getValue().length != 6 ) {
  if (dateStr != "" && dateStr.length != 6 || !$c.date.isDate($p, dateStr) && dateStr.length == 6) {
    $c.win.alert($p, "날짜 형식이 올바르지 않습니다.", function () {
      ipt_to.setValue("");
      ipt_to.focus();
      return;
    });
  }
  $p.emit("onBlurTo", e);
};
scwin.ipt_from_onblur = function (e) {
  let dateStr = this.getValue();
  // if(this.getValue() && this.getValue().length != 6 ) {
  if (dateStr != "" && dateStr.length != 6 || !$c.date.isDate($p, dateStr) && dateStr.length == 6) {
    $c.win.alert($p, "날짜 형식이 올바르지 않습니다.", function () {
      ipt_from.setValue("");
      ipt_from.focus();
      return;
    });
  }
  $p.emit("onBlurFrom", e);
};
scwin.btn_trigger1_onclick = function (e) {
  if (cal_fr.getDate() == "" || cal_fr.getDate().length != 6) {
    $c.win.alert($p, "시작일자를 입력하세요.", function () {
      // cal_fr.setValue("");
      cal_fr.focus();
      return;
    });
  } else if (cal_to.getDate() == "" || cal_to.getDate().length != 6) {
    $c.win.alert($p, "종료일자를 입력하세요.", function () {
      // cal_to.setValue("");
      cal_to.focus();
      return;
    });
  } else if (cal_fr.getDate() > cal_to.getDate() && cal_fr.getDate().length == 6) {
    $c.win.alert($p, "시작일자가 종료일자 이전이여야 합니다.", function () {
      // cal_fr.setValue("");
      cal_fr.focus();
      return;
    });
  } else {
    ipt_from.setValue(cal_fr.getDate());
    ipt_to.setValue(cal_to.getDate());
    scwin.disFlag = true;
    gr_cal.setStyle("display", "none");
  }
};
scwin.ipt_from_onfocus = function (e) {
  scwin.disFlag = true;
  gr_cal.setStyle("display", "none");
};
scwin.ipt_to_onfocus = function (e) {
  scwin.disFlag = true;
  gr_cal.setStyle("display", "none");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload()'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'cal-wrap'},E:[{T:1,N:'xf:group',A:{id:'grp_group1',class:'cal-input',localeRef:'cal-box'},E:[{T:1,N:'xf:input',A:{ref:'',rightAlign:'false',dataType:'date',displayFormat:'yyyy/MM',adjustMaxLength:'false',style:'',id:'ipt_from',renderType:'',class:'form-control',ioFormat:'yyyyMM',invalidMessage:'시작일자',validateOnInput:'true',allowChar:'0-9','ev:onblur':'scwin.ipt_from_onblur',maxlength:'6','ev:onfocus':'scwin.ipt_from_onfocus'}},{T:1,N:'w2:span',A:{style:'',id:'',label:'~'}},{T:1,N:'xf:input',A:{rightAlign:'false',dataType:'date',displayFormat:'yyyy/MM',adjustMaxLength:'false',style:'',id:'ipt_to',renderType:'',class:'form-control',ioFormat:'yyyyMM',invalidMessage:'종료일자',validateOnInput:'true',allowChar:'0-9','ev:onblur':'scwin.onBlurTo',maxlength:'6','ev:onfocus':'scwin.ipt_to_onfocus'}},{T:1,N:'xf:trigger',A:{anchorWithGroupClass:'','ev:onclick':'scwin.img_Cal_onclick',style:'',id:'img_Cal',type:'button',class:'btn ico btn_calender'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'calendar'}]}]}]},{T:1,N:'xf:group',A:{style:'z-index:2000;display:none',id:'gr_cal',class:'gr_cal calender-wrap'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'cal-grp',id:'',style:''},E:[{T:1,N:'w2:calendar',A:{calendarValueType:'yearMonth','ev:ondateselect':'',footerDiv:'true',id:'cal_fr',pickerType:'dynamic',style:'','ev:onmonthselect':''}}]},{T:1,N:'xf:group',A:{class:'cal-grp',id:'',style:''},E:[{T:1,N:'w2:calendar',A:{calendarValueType:'yearMonth','ev:ondateselect':'',footerDiv:'true',id:'cal_to',pickerType:'dynamic',style:'','ev:onmonthselect':''}}]},{T:1,N:'xf:trigger',A:{class:'btn pt-blue',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.btn_trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]}]}]}]}]}]})