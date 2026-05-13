/*amd /ui/to/in/bulk/tmlbulk/in_201_02_18b.xml 33624 a0aef2caf173c4935303fb80ed4317c70341a0922f51e91721778fbdf50942c5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkFrDt',name:'작업일자(시작)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkToDt',name:'작업일자(종료)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repKcgCd',name:'대표화종',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNoCls',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tmlAdmitckCd',name:'터미널출입증코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIndictPrgsStsCd',name:'작업지시진행상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPatternCd',name:'작업유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upperKcgCd',name:'상위화종코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tmlStockMgntNo',name:'터미널재고관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_List',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkShift',name:'작업SHIFT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsQty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'실적중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsCbm',name:'실적CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'gateInHhmm',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gateOutHhmm',name:'실적시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsRegClsCd',name:'작업실적등록구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictPrgsStsCd',name:'작업지시진행상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'작업유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_queryCondition',action:'/to.in.bulk.tmlbulk.RetrieveBulkWrkRsltsContCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_List","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_List","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_queryCondition_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*
화종 팝업 retrieveKcgInfo 으로 임시 대체 해놓음

/to/in/bulk/tmlbulk/in_201_02_10p.jsp // //화종,품목,품명 팝업
/to/in/bulk/tmlbulk/in_203_01_04p.jsp // 터미널재고관리번호조회 팝업
/to/in/bulk/tmlbulk/in_201_02_09p.jsp // 출입증코드검색 팝업
/to/in/bulk/tmlbulk/in_201_02_12p.jsp // 작업지시검색 팝업
현재 해당 화면 4건 개발 목록에 잡혀있지 않음
*/

scwin.empNo = "";
scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate();
; // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.empNo = memJson.userId;
  const codeOptions = [{
    grpCd: "TB040",
    compID: "lc_wrkPlCd,gr_List:wrkPlNm"
  },
  // 작업장
  {
    grpCd: "TB013",
    compID: "lc_wrkIndictPrgsStsCd,gr_List:wrkIndictPrgsStsCd"
  },
  // 작업진행상태
  {
    grpCd: "TB002",
    compID: "lc_wrkPatternCd,gr_List:wrkPatternCd"
  },
  // 작업유형
  {
    grpCd: "TB038",
    compID: "lc_upperKcgCd"
  },
  // 상위화종군
  {
    grpCd: "TB005",
    compID: "gr_List:wrkShift"
  },
  // 시프트
  {
    grpCd: "TB015",
    compID: "gr_List:wrkRsltsRegClsCd"
  } // 실적등록구분
  ];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_SetDefaultData();
  }, {
    "delay": 50
  });
};
scwin.f_SetDefaultData = function () {
  ed_wrkFrDt.setValue(scwin.vQryStDt); // 적용일자시작
  ed_wrkToDt.setValue(scwin.vQryEndDt); // 적용일자종료	

  ////임시
  //ed_wrkFrDt.setValue('20150101');
  //ed_wrkToDt.setValue('20150105');
  ////임시	
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  ds_List.removeAll();
  var chkVal = await $c.gus.cfValidate($p, [ed_wrkFrDt, ed_wrkToDt]);
  if (!chkVal) {
    return;
  }
  var chkCal = await $c.gus.cfIsAfterDate($p, ed_wrkFrDt.getValue(), ed_wrkToDt.getValue(), false);
  if (!chkCal) {
    $c.win.alert($p, "작업일자 시작일이 작업일자 종료일보다 이전이어야 합니다.");
    return;
  }
  $c.sbm.execute($p, sbm_queryCondition);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_mainData, null);
  scwin.f_SetDefaultData();
};
scwin.sbm_queryCondition_submitdone = function (e) {
  if (ds_List.getRowCount() < 1) {
    $c.win.alert($p, "조회결과가 존재하지 않습니다.");
  }
  spa_cnt.setValue(ds_List.getRowCount());
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  var rtnList; // 공통POP-UP -> 요청화면 
  var pWhere; // 조회조건				

  switch (disGubun) {
    case 1:
      //화주 팝업	
      //rtnList = await udc_comCodeClntNo.openPopup(pCode,pName);            
      rtnList = udc_comCodeClntNo.cfCommonPopUp(scwin.callbackCoopList,
      // callback
      pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , 'F' // 전체검색허용여부	("F")
      , "화주,화주코드,화주명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      /*
      if (rtnList != null && rtnList[0] != "") {
          ed_clntNo.setValue(rtnList[0]);
          ed_clntNm.setValue(rtnList[1]);
      } else {
          ed_clntNo.setValue("");
          ed_clntNm.setValue("");
      }
      */
      break;
    case 2:
      //화종,품목,품명 팝
      /*
          var win_url = "/to/in/bulk/tmlbulk/in_201_02_10p.jsp?"
                      + "repKcgCd=" + lc_repKcgCd.BindColVal
                      + "&cd="    + em_commCd.text
                      + "&nm="    + txt_commCdNm.value;
          var xwidth  = "500";
          var yheight = "400";
          var xloc = screen.width/2 - xwidth/2;
          var yloc = screen.height/2 - yheight/2;
      
          var win_style = "left="+xloc+",top="+yloc+",toolbar=no, location=no, directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width="+xwidth+",height="+yheight;
          
          var win_name = "POPUPWIN";
          var rtnValues = window.showModalDialog(win_url, win_name, win_style);
          
          if(rtnValues != null && rtnValues[0]!=""){
              ed_commCd.setValue(rtnValues[0]);
              ed_commCdNm.setValue(rtnValues[1]);	
              lc_repKcgCd.setValue(rtnValues[2]); 	
          } else {
              ed_commCd.setValue('');
              ed_commCdNm.setValue('');
          }
      */
      //rtnList = await udc_comCodeRepKcgCd.openPopup(pCode,pName);

      var win_url = "/ui/to/in/bulk/tmlbulk/in_201_02_10p.xml";
      var opts = scwin.opts || {};
      opts.modal = true;
      opts.type = "browserPopup";
      opts.id = scwin.popupID || "pupup";
      opts.width = 700;
      opts.height = 630;
      opts.popupName = '품목 검색';
      var param = {
        repKcgCd: lc_repKcgCd.getValue(),
        cd: ed_commCd.getValue(),
        nm: ed_commCdNm.getValue()
      };
      rtnList = await $c.win.openPopup($p, win_url, opts, param);
      console.log("rtnList : ", rtnList);
      if (rtnList != null && rtnList[0] != "") {
        ed_commCd.setValue(rtnList[0]);
        ed_commCdNm.setValue(rtnList[1]);
        lc_repKcgCd.setValue(rtnList[2]);
      } else {
        ed_commCd.setValue("");
        ed_commCdNm.setValue("");
      }
      break;
    case 6:
      // 본선관리번호검색 팝업
      var win_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
      var opts = scwin.opts || {};
      opts.modal = true;
      opts.type = "browserPopup";
      opts.id = scwin.popupID || "pupup";
      opts.width = 1250;
      opts.height = 620;
      opts.popupName = '본선관리번호검색팝업';
      var param = new Array();
      param[0] = ed_cvsslMgntNo.getValue(); //본선관리번호

      rtnList = await $c.win.openPopup($p, win_url, opts, param);
      console.log("rtnList : ", rtnList);
      if (rtnList != null && rtnList[0] != "") {
        ed_cvsslMgntNo.setValue(rtnList[0]);
      } else {
        ed_cvsslMgntNo.setValue("");
      }
      break;
    case 7:
      // 출입증코드검색 팝업
      var win_url = "/ui/to/in/bulk/tmlbulk/in_201_02_09p.xml";
      var opts = scwin.opts || {};
      opts.modal = true;
      opts.type = "browserPopup";
      opts.id = scwin.popupID || "pupup";
      opts.width = 1250;
      opts.height = 670;
      opts.popupName = '벌크 차량 검색';
      var param = {
        tmlAdmitckCd: ed_tmlAdmitckCd.getValue(),
        tmlAdmitckNm: ed_tmlAdmitckNm.getValue(),
        closeTF: pClose
      };
      rtnList = await $c.win.openPopup($p, win_url, opts, param);
      console.log("rtnList : ", rtnList);
      if (rtnList != null && rtnList[0] != "") {
        ed_tmlAdmitckCd.setValue(rtnList[0]); //  "tmlAdmitckCd"); 
        ed_tmlAdmitckNm.setValue(rtnList[6]); //  "tempBarcdVehclNo"); 	
      } else {
        ed_tmlAdmitckCd.setValue(""); //  "tmlAdmitckCd"); 
        ed_tmlAdmitckNm.setValue(""); //  "tempBarcdVehclNo"); 
      }
      break;
    case 8:
      // 작업지시검색 팝업
      var win_url = "/ui/to/in/bulk/tmlbulk/in_201_02_12p.xml";
      var opts = scwin.opts || {};
      opts.modal = true;
      opts.type = "browserPopup";
      opts.id = scwin.popupID || "pupup";
      opts.width = 1250;
      opts.height = 730;
      opts.popupName = '벌크 작업 지시 검색';
      var param = {
        wrkIndictNo: ed_wrkIndictNo.getValue()
      };
      rtnList = await $c.win.openPopup($p, win_url, opts, param);
      console.log("rtnList : ", rtnList);
      if (rtnList != null && rtnList[0] != "") {
        ed_wrkIndictNo.setValue(rtnList[0]);
      } else {
        ed_wrkIndictNo.setValue("");
      }
      break;
    case 9:
      // 터미널재고관리번호조회 팝업				
      var win_url = "/ui/to/in/bulk/tmlbulk/in_203_01_04p.xml";
      var opts = scwin.opts || {};
      opts.modal = true;
      opts.type = "browserPopup";
      opts.id = scwin.popupID || "pupup";
      opts.width = 1250;
      opts.height = 750;
      opts.popupName = '벌크재고관리번호검색';
      var param = {
        tmlStockMgntNo: ed_tmlStockMgntNo.getValue()
      };
      rtnList = await $c.win.openPopup($p, win_url, opts, param);
      console.log("rtnList : ", rtnList);
      if (rtnList != null && rtnList[0] != "") {
        ed_tmlStockMgntNo.setValue(rtnList[0]);
      } else {
        ed_tmlStockMgntNo.setValue("");
      }
      break;
  }
};
scwin.callbackCoopList = function (rtnList) {
  if (rtnList != null && rtnList[0] != "") {
    ed_clntNo.setValue(rtnList[0]);
    ed_clntNm.setValue(rtnList[1]);
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
  }
};
scwin.udc_comCodeClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'T', 'F');
};
scwin.udc_comCodeClntNo_onblurCodeEvent = function (e) {
  if (ed_clntNo.getValue() == "") {
    return;
  } else {
    scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'T', 'F');
  }
};
scwin.udc_comCodeClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'T', 'F');
};
scwin.udc_comCodeRepKcgCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_commCd.getValue(), ed_commCdNm.getValue(), 'T', 'F');
};
scwin.udc_comCodeRepKcgCd_onblurCodeEvent = function (e) {
  if (ed_commCd.getValue() == "") {
    return;
  } else {
    scwin.f_openCommonPopUp(2, ed_commCd.getValue(), ed_commCdNm.getValue(), 'T', 'F');
  }
};
scwin.udc_comCodeTmlAdmitckCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_tmlAdmitckCd.getValue(), ed_tmlAdmitckNm.getValue(), 'F', 'F');
};
scwin.udc_comCodeTmlAdmitckCd_onblurCodeEvent = function (e) {
  if (ed_tmlAdmitckCd.getValue() == "") {
    return;
  } else {
    scwin.f_openCommonPopUp(7, ed_tmlAdmitckCd.getValue(), ed_tmlAdmitckNm.getValue(), 'T', 'F');
  }
};
scwin.udc_comCodeTmlAdmitckCd_onviewchangeNameEvent = function (info) {};
scwin.btn_conCvsslMgntNo_onclick = function (e) {
  scwin.f_openCommonPopUp(6, '', '', 'T', 'F');
};
scwin.btn_wrkIndictNo_onclick = function (e) {
  scwin.f_openCommonPopUp(8, '', '', 'T', 'F');
};
scwin.btn_tmlStockMgntNo_onclick = function (e) {
  scwin.f_openCommonPopUp(9, 'ed_tmlStockMgntNo.getValue()', '', 'F', 'F');
};

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_cal',refDataMap:'dma_condition',refEdDt:'wrkToDt',refStDt:'wrkFrDt',style:'',edFromId:'ed_wrkFrDt',edToId:'ed_wrkToDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data',objTypeFrom:'data',objTypeTo:'data',validChkYn:'Y',titleFrom:'작업일자',titleTo:'작업일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_comCodeClntNo',codeId:'ed_clntNo',nameId:'ed_clntNm',btnId:'btn_clntNo',UpperFlagCode:'1',allowCharCode:'0-9,A-Z,a-z',selectID:'retrieveCoopList','ev:onclickEvent':'scwin.udc_comCodeClntNo_onclickEvent',popupTitle:'화주,화주코드,화주명',popupGridHeadTitle:'헙력업체코드,협력업체명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',refDataCollection:'dma_condition',code:'clntNo',maxlengthCode:'8','ev:onblurCodeEvent':'scwin.udc_comCodeClntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeClntNo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w100',editType:'select',id:'lc_repKcgCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_condition.repKcgCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'화종'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'품목'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'품명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_comCodeRepKcgCd',codeId:'ed_commCd',nameId:'ed_commCdNm',btnId:'btn_commCd',selectID:'retrieveKcgInfo','ev:onclickEvent':'scwin.udc_comCodeRepKcgCd_onclickEvent',popupTitle:'품목검색',popupGridHeadTitle:'품명코드,품명이름,품목코드,품목이름,화종코드,화종이름',refDataCollection:'dma_condition',code:'commCd',allowCharCode:'0-9,A-Z,a-z',UpperFlagCode:'1',maxlengthCode:'8','ev:onblurCodeEvent':'scwin.udc_comCodeRepKcgCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'lc_wrkPlCd',search:'start',style:'',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_condition.wrkPlCd'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출입증코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_comCodeTmlAdmitckCd',codeId:'ed_tmlAdmitckCd',nameId:'ed_tmlAdmitckNm',btnId:'btn_tmlAdmitckCd','ev:onclickEvent':'scwin.udc_comCodeTmlAdmitckCd_onclickEvent',refDataCollection:'dma_condition',code:'tmlAdmitckCd',allowCharCode:'0-9,A-Z,a-z',UpperFlagCode:'1',maxlengthCode:'8','ev:onblurCodeEvent':'scwin.udc_comCodeTmlAdmitckCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeTmlAdmitckCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w85',id:'ed_cvsslMgntNo',placeholder:'',style:'',ref:'data:dma_condition.cvsslMgntNo',allowChar:'0-9,A-Z,a-z',maxlength:'11','ev:onkeyup':'scwin.onkeyup'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_conCvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_conCvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업지시번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_wrkIndictNo',placeholder:'',style:'width:150px;',ref:'data:dma_condition.wrkIndictNo',allowChar:'0-9,A-Z,a-z',maxlength:'13','ev:onkeyup':'scwin.onkeyup'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_wrkIndictNo',style:'',type:'button','ev:onclick':'scwin.btn_wrkIndictNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'진행상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'lc_wrkIndictPrgsStsCd',search:'start',style:'',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_condition.wrkIndictPrgsStsCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'재고관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w85',id:'ed_tmlStockMgntNo',placeholder:'',style:'',ref:'data:dma_condition.tmlStockMgntNo',allowChar:'0-9,A-Z,a-z',maxlength:'13','ev:onkeyup':'scwin.onkeyup'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_tmlStockMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_tmlStockMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업유형 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'lc_wrkPatternCd',search:'start',style:'',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_condition.wrkPatternCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상위화종군 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'lc_upperKcgCd',search:'start',style:'',submenuSize:'auto',chooseOptionLabel:'전체',chooseOption:'true',ref:'data:dma_condition.upperKcgCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'벌크작업 실적 내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',grdDownOpts:'{"fileName":"작업지시내역목록.xlsx","sheetName" : "작업지시내역목록", "type":"4+8+16"}',gridID:'gr_List'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_List',id:'gr_List',style:'',rowStatusVisible:'false',autoFit:'allColumn',autoFitMinWidth:'1700',visibleRowNum:'10',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'시프트',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'화주',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'품명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'작업장코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'작업장',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'본선관리번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'본선명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'수량',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column61',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column58',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'실적일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'실적시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column49',value:'실적등록구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column46',value:'작업진행상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'작업지시번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'작업유형',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'비고',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkShift',inputType:'select',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlCd',inputType:'text',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsQty',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rsltsWt',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###,##',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rsltsCbm',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'gateInHhmm',displayMode:'label',displayFormat:'####/##/##',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'gateOutHhmm',displayMode:'label',displayFormat:'##:##:##',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'wrkRsltsRegClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'wrkIndictPrgsStsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'wrkIndictNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'wrkPatternCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'rsltsQty\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column63',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###,##',expression:'sum(\'rsltsWt\')',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column60',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'rsltsCbm\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})