/*amd /ui/ps/rc/fms/imgnt/rc_605_01_02b.xml 20273 8fc9bfd6ee038af6a620da8af8dd625e6a27238cd6ee6aef0dda85847e930164 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dtFrom',name:'발생기간 From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtTo',name:'발생기간 To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'고객사번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'div',name:'구분 (1:예약 / 2:실적)',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptCd',name:'관리부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptNm',name:'관리부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsvDt',name:'예약일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rowSeq',name:'예약순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsvSeq',name:'예약순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'신청자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'신청자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendDt',name:'예약기간;(시작일자)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'예약기간;(종료일자)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitYn',name:'승인;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvMpNo',name:'SMS수신번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm2',name:'차종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitPic',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subject',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntn',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndMpNo',name:'name18',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/ps.rc.fms.imgnt.RetrieveInVehclAppovalCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_save',action:'/ps.rc.fms.imgnt.RegistInVehclAppovalCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_out","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 차량예약승인
 * 메뉴경로 : 공통/총무업무/업무용 차량관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ps/rc/fms/imgnt/rc_605_01_02b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-11-07
 * 수정이력  :
 *    - 2025-11-07      정승혜    최초작성
 *    - 2026-03-03      정승혜    기타수정
 * 메모 : 
 * 조회조건 : 예약기간-20200101~20200201 / 69건
 */

scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.first_day = scwin.strFromDate.substring(0, 6) + "01";
scwin.last_day = scwin.strFromDate.substring(0, 6) + new Date(scwin.strFromDate.substring(0, 4), scwin.strFromDate.substring(4, 6), 0).getDate();
scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId;
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "RC972",
    compID: "gr_vehclRunList:admitYn"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_setDtheader_results();
  $c.gus.cfDisableKey($p);
};
scwin.onUdcCompleted = function () {
  ed_dtFrom.setValue(scwin.first_day);
  ed_dtTo.setValue(scwin.last_day);
};

//-------------------------------------------------------------------------
// 조회조건 header Setting
//-------------------------------------------------------------------------
scwin.f_setDtheader_results = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_tr_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  if (ds_out.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 데이타가 없습니다.");
    return;
  }
  let stsCd = "";
  let rowSts = "";
  let cntn = "";
  for (i = 0; i <= ds_out.getRowCount(); i++) {
    stsCd = ds_out.getCellData(i, "admitYn");
    rowSts = ds_out.getRowStatus(i);
    if (rowSts == "U") {
      if (stsCd == 0 || stsCd == 1) {
        // 0 반려, 1 승인, 2 대기
        ds_out.setCellData(i, "admitPic", scwin.userId);
      }
      if (stsCd == 1) {
        ds_out.setCellData(i, "subject", "동부익스프레스"); //SMS 제목

        cntn += "[차량예약 승인] \r\n" + ds_out.getCellData(i, "vehclNo") + "(" + ds_out.getCellData(i, "eqModelNm2") + ") \r\n";
        cntn += "운행종료 후 반드시 실적 입력바랍니다.  \r\n \r\n";
        cntn += "차량실적 입력 URL \r\n";
        cntn += "m.debis.co.kr";
        ds_out.setCellData(i, "cntn", cntn); //SMS 내용
        ds_out.setCellData(i, "sndMpNo", "02-6363-2656"); //발신자번호 : 구매팀 차정호사원 사무실번호	

        let tempData = ds_out.getCellData(i, "rcvMpNo");
        tempData = tempData.replaceAll("-", ""); // 번호에서 '-' 제거

        ds_out.setCellData(i, "rcvMpNo", tempData);
      }
    }
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_tr_save);
  }
};

//-------------------------------------------------------------------------
// email 본문 만들기(1 insert ,2 delete ,3 update)
//-------------------------------------------------------------------------
scwin.f_makeEmailCntn = function () {
  //호출되는곳 없음
};

//-------------------------------------------------------------------------
// 그리드  컨트롤
//-------------------------------------------------------------------------

// 행추가 
scwin.f_AddRow = function () {};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
// 엑셀다운 4+8+16
scwin.f_runExcel = async function () {
  // {"fileName" : "차량별 운행실적.xlsx" ,"type" : "1" }
  let totCnt = ds_out.getRowCount();
  let sheetTitle = "차량별 운행실적";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: "차량별 운행실적.xlsx",
        sheetName: sheetTitle
      };
      await $c.data.downloadGridViewExcel($p, gr_vehclRunList, options);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 차량조회팝업
//-------------------------------------------------------------------------
scwin.f_vehclNoPopup = function () {
  //호출되는곳 없음
};

// 공통 PopUp 호출
scwin.f_OpenCommonPopUp = function (gubun, pCode, pName, pClose, pAllSearch, row) {
  let pWtitleSearch = null;
  if (gubun == 1) {
    udc_workVehclInfo.cfCommonPopUp(scwin.udc_workVehclInfo_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, pWtitleSearch);
  }
  if (gubun == 4) {
    udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, pWtitleSearch);
  }
};
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp(4, ed_deptCd.getValue(), ed_deptNm.getValue(), 'F', 'F');
};
scwin.udc_acctDeptCdInfo_onviewchangeCodeEvent = function (info) {
  if (ed_deptCd.getValue() != "" && ed_deptCd.getValue() != null) {
    scwin.f_OpenCommonPopUp(4, ed_deptCd.getValue(), ed_deptNm.getValue(), 'T', 'T');
  }
};
scwin.udc_acctDeptCdInfo_onviewchangeNameEvent = function (info) {
  if (ed_deptNm.getValue() != "" && ed_deptNm.getValue() != null) {
    scwin.f_OpenCommonPopUp(4, ed_deptCd.getValue(), ed_deptNm.getValue(), 'T', 'T');
  }
};
scwin.udc_workVehclInfo_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp(1, ed_vehcelNo.getValue(), ed_vehcelNm.getValue(), 'F', 'F');
};
scwin.udc_workVehclInfo_onviewchangeCodeEvent = function (info) {
  if (ed_vehcelNo.getValue() != "" && ed_vehcelNo.getValue() != null) {
    scwin.f_OpenCommonPopUp(1, ed_vehcelNo.getValue(), ed_vehcelNm.getValue(), 'T', 'T');
  }
};
scwin.udc_workVehclInfo_onviewchangeNameEvent = function (info) {
  if (ed_vehcelNm.getValue() != "" && ed_vehcelNm.getValue() != null) {
    scwin.f_OpenCommonPopUp(1, ed_vehcelNo.getValue(), ed_vehcelNm.getValue(), 'T', 'T');
  }
};
scwin.udc_workVehclInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_vehcelNo.setValue(rtnList[0]);
    ed_vehcelNm.setValue(rtnList[1]);
  }
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_deptCd.setValue(rtnList[0]);
    ed_deptNm.setValue(rtnList[1]);
  }
};

//-------------------------------------------------------------------------
// 조회 필드 Clear(휴지통)
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  ed_dtFrom.setValue(scwin.strFromDate);
  ed_dtTo.setValue(scwin.strFromDate);
  ed_vehcelNo.setValue("");
  ed_vehcelNm.setValue("");
};
scwin.f_ChkOpenCommonPopUp = function () {
  // f_OpenCommonPopUp 에 합침
};
scwin.dtDisplayFm = function (data) {
  let tempData = data.substring(0, 10);
  tempData = tempData.substring(0, 4) + "/" + tempData.substring(4, 6) + "/" + tempData.substring(6, 8) + " " + tempData.substring(8, 10);
  return tempData;
};
scwin.sbm_tr_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_out.getRowCount());
  if (ds_out.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
};
scwin.sbm_tr_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다    
  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예약기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'dtFrom',refDataMap:'dma_retrieve',style:'',id:'udc_fromToCalendar1',refEdDt:'dtTo',edFromId:'ed_dtFrom',edToId:'ed_dtTo',mandatoryTo:'true',mandatoryFrom:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo',codeId:'ed_deptCd',popupTitle:'',nameId:'ed_deptNm',style:'',objTypeName:'data',refDataCollection:'dma_retrieve',code:'deptCd',id:'udc_acctDeptCdInfo','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_acctDeptCdInfo_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_vehcelNo',nameId:'ed_vehcelNm',popupID:'',popupTitle:'',selectID:'retrieveWorkVehclInfo',style:'',objTypeName:'data',refDataCollection:'dma_retrieve',code:'vehcelNo',id:'udc_workVehclInfo','ev:onclickEvent':'scwin.udc_workVehclInfo_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_workVehclInfo_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_workVehclInfo_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 차량별 운행실적',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_vehclRunList',gridDownFn:'scwin.f_runExcel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_vehclRunList',style:'',visibleRowNum:'16',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'관리부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'관리부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'예약일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'예약순번',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'예약순번',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'신청자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'신청자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'예약기간</br>(시작일자)',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'예약기간</br>(종료일자)',width:'120'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'승인</br>여부',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'비고',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column25',value:'SMS수신번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'차종',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deptCd',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deptNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsvDt',inputType:'text',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rowSeq',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsvSeq',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userId',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptIntendDt',inputType:'text',style:'',value:'',width:'120',displayFormatter:'scwin.dtDisplayFm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvIntendDt',inputType:'text',style:'',value:'',width:'120',displayFormatter:'scwin.dtDisplayFm'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'admitYn',value:'',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',readOnly:'false',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'rcvMpNo',value:'',displayMode:'label',readOnly:'false',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'eqModelNm2',value:'',displayMode:'label',textAlign:'left',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})