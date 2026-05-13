/*amd /ui/bp/fbp/op/ac/ez_204_01_01p.xml 26554 45937e60a17561e42eb4246d21e6751ba0b7a5f4f36e6a0035b61330e412a9a0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ez110Idx',name:'차량idx',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:key',A:{id:'mtvehclDd',name:'공차예정일',dataType:'text',length:'20'}},{T:1,N:'w2:key',A:{id:'UserID',name:'사용자ID',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Commission'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ez110Idx',name:'차량idx',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:key',A:{id:'vehclDate',name:'공차예정일(배차일)',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'commission',name:'수수료',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:key',A:{id:'userId',name:'사용자 아이디',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'outData',name:'name5',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_List',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'regDd',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'idx',name:'주문번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ofcNm',name:'소속점',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picNm',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onDd',name:'상차;요청일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onHh',name:'상차;요청시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPos',name:'상차지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPosNm',name:'상차지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'상차지;담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicTel',name:'상차담;당전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDd',name:'하차;요청일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offHh',name:'하차;요청시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPos',name:'하차지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPosNm',name:'하차지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'하차지;담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicTel',name:'하차;담당전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payReal',name:'실운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAdvn',name:'선불운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDvly',name:'착불운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'defrAmt',name:'지불운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strAmt',name:'보관금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmis',name:'수수료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarDd',name:'배차일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_value',saveRemovedData:'true','ev:ondataload':'scwin.ds_value_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'calcBasicAmt',name:'기본수수료',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_car',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'xpos',name:'X좌표',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'ypos',name:'Y좌표',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'mtvehclRegDt',name:'공차등록일',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'mtvehclDd',name:'공차등록일',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'mtvehclDt',name:'#N/A',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'vehclSts',name:'차량상태',dataType:'text',defaultValue:'',length:'82'}},{T:1,N:'w2:column',A:{id:'ofcNm',name:'영업소명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'carCls',name:'차량구분(공통코드:DELI01)',dataType:'text',defaultValue:'',length:'40'}},{T:1,N:'w2:column',A:{id:'handphoneNo',name:'휴대전화번호',dataType:'text',defaultValue:'',length:'15'}},{T:1,N:'w2:column',A:{id:'pdaNo',name:'PDANO',dataType:'text',defaultValue:'',length:'15'}},{T:1,N:'w2:column',A:{id:'picNm',name:'담당자명',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'tonCdNm',name:'#N/A',dataType:'text',defaultValue:'',length:'300'}},{T:1,N:'w2:column',A:{id:'typeCdNm',name:'#N/A',dataType:'text',defaultValue:'',length:'300'}},{T:1,N:'w2:column',A:{id:'mtvehclRt',name:'공차율',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'refundamt',name:'선급비용환급금액',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'nypay',name:'미지급금',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'posTxt',name:'위치문자',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'prefKcg1',name:'선호화종1',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'prefKcg2',name:'선호화종2',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'hopeStartPos',name:'희망상차지',dataType:'text',defaultValue:'',length:'60'}},{T:1,N:'w2:column',A:{id:'hopeAlhtPos',name:'희망하차지',dataType:'text',defaultValue:'',length:'60'}},{T:1,N:'w2:column',A:{id:'txnDate',name:'#N/A',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text',defaultValue:'',length:'200'}},{T:1,N:'w2:column',A:{id:'finalAlloccarDt',name:'최종배차시간',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'smsRecvYn',name:'#N/A',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'ez110Idx',name:'배차차량IDX',dataType:'number',defaultValue:'0',length:'10'}},{T:1,N:'w2:column',A:{id:'rfidNo',name:'RFID 번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'maxShipwgtVol',name:'최대적재량',dataType:'number',defaultValue:'0',length:'5'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_car_blk',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_car_cntr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_car_matching',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_car_mb',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultDT',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'outMsg',name:'#N/A',dataType:'text',length:'100'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_DayCommission',action:'/ncall.bp.fbp.op.ac.RetrieveDayCommissionCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_common',action:'/ncall.bp.fbp.op.ac.RetriveCommissionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_searchParam',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Commission',action:'/ncall.bp.fbp.op.ac.SaveDayCommissionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Commission","key":"IN_COMMISSION"}, {"id":"ds_resultDT","key":"OUT_COMMISSION"}]',target:'data:json,[{"id":"ds_resultDT","key":"OUT_COMMISSION"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Commission_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : ez_204_01_01p
// 이름     : 수수료
// 경로     : NTIS/배차관리/배차일보(협력사)
// 작 성 자 : 최지수
// 작 업 일 : 2026-03-19
//==================================================================================================================
scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환

scwin.UserID = $c.data.getParameter($p, "userId"); //사용자ID
scwin.UserName = $c.data.getParameter($p, "userNm"); //사용자명

scwin.onpageload = async function () {
  const {
    selectedvehclRow,
    CargoType,
    vehclType,
    sFrame
  } = $c.data.getParameter($p);
  var vehclRow = selectedvehclRow; // 선택된 차량정보

  // opener의 하단 wframe(차량정보) 접근
  const btmFrame = opener.$p.getComponentById(sFrame).scope;
  var object = null;
  switch (vehclType) {
    case 'all':
      object = btmFrame.dtl_car;
      break;
    case 'blk':
      object = btmFrame.dtl_car_blk;
      break;
    case 'cntr':
      object = btmFrame.dtl_car_cntr;
      break;
    case 'matching':
      object = btmFrame.dtl_car_matching;
      break;
    case 'mb':
      object = btmFrame.dtl_car_mb;
      break;
    default:
      break;
  }
  if (!object) {
    await $c.win.alert($p, "차량정보를 확인할 수 없습니다.");
    $c.win.closePopup($p);
    return;
  }
  if (vehclRow === "" || vehclRow == null) {
    await $c.win.alert($p, '차량정보가선택되지 않았습니다. 차량정보를 선택하여 주시기 바랍니다.');
    $c.win.closePopup($p);
    return;
  }

  // 차량정보 세팅
  tbx_vehclNo.setValue(object.getCellData(vehclRow, "vehclNo")); // 차량번호
  tbx_vehclSts.setValue(object.getCellData(vehclRow, "vehclSts")); // 상태
  tbx_regDd.setValue(object.getCellData(vehclRow, "mtvehclRegDt")); // 등록일자
  tbx_drvNm.setValue(object.getCellData(vehclRow, "picNm")); // 기사성명
  tbx_moTel.setValue(object.getCellData(vehclRow, "handphoneNo")); // 휴대전화
  tbx_vehclCls.setValue(object.getCellData(vehclRow, "typeCdNm")); // 차량종류

  // 배차 된 차량인지 확인
  var ez110Idx = object.getCellData(vehclRow, "ez110Idx"); //차량idx
  var mtvehclDd = object.getCellData(vehclRow, "mtvehclDd"); //공차예정일
  var UserID = scwin.UserID;

  // 1차: 화물목록 조회 (RetrieveDayCommissionCMD) - 쿼리스트링으로 전달 (ASIS 방식)
  var queryStr = "?ez110Idx=" + ez110Idx + "&mtvehclDd=" + mtvehclDd.replaceAll("-", "") + "&UserID=" + UserID;
  sbm_DayCommission.action = "/ncall.bp.fbp.op.ac.RetrieveDayCommissionCMD.do" + queryStr;
  let ret = await $c.sbm.execute($p, sbm_DayCommission);
  if (ret.responseJSON.resultDataSet[0].Code == 0) {
    ds_List.setJSON(ret.responseJSON.GAUCE);
    tbx_totalRows.setValue(ds_List.getTotalRow());
  }

  // 2차: 수수료 기본값 조회 (RetriveCommissionCMD)
  dma_searchParam.setEmptyValue();
  dma_searchParam.set("ez110Idx", ez110Idx);
  dma_searchParam.set("mtvehclDd", mtvehclDd.replaceAll("-", ""));
  ret = await $c.sbm.execute($p, sbm_common);
  if (ret.responseJSON.resultDataSet[0].Code == 0) {
    ds_value.setJSON(ret.responseJSON.GAUCE);
  }
};

// 확인버튼
scwin.Commission = function () {
  if (ed_comm.getValue() == "") {
    $c.win.alert($p, "수수료를 입력하세요.");
    return;
  }
  const {
    selectedvehclRow,
    vehclType,
    sFrame
  } = $c.data.getParameter($p);
  const btmFrame = opener.$p.getComponentById(sFrame).scope;
  var object = null;
  switch (vehclType) {
    case "all":
      object = btmFrame.dtl_car;
      break;
    case "blk":
      object = btmFrame.dtl_car_blk;
      break;
    case "cntr":
      object = btmFrame.dtl_car_cntr;
      break;
    case "matching":
      object = btmFrame.dtl_car_matching;
      break;
    case "mb":
      object = btmFrame.dtl_car_mb;
      break;
    default:
      object = null;
      break;
  }
  if (!object) {
    $c.win.alert($p, "차량정보를 확인할 수 없습니다.");
    return;
  }
  var ez110Idx = object.getCellData(selectedvehclRow, "ez110Idx"); //차량IDX
  var mtvehclDd = (object.getCellData(selectedvehclRow, "mtvehclDd") || "").replace(/-/g, ""); //공차예정일(배차일)
  var commission = String(ed_comm.getValue()).replaceAll(",", ""); //수수료금액

  ds_Commission.setEmptyValue();
  ds_Commission.set("ez110Idx", ez110Idx);
  ds_Commission.set("vehclDate", mtvehclDd);
  ds_Commission.set("commission", commission);
  ds_Commission.set("userId", scwin.UserID);
  $c.sbm.execute($p, sbm_Commission);
};
scwin.ds_value_ondataload = function () {
  ed_comm.focus();
  if (ds_value.getTotalRow() == 0) ed_comm.setValue("0");else {
    ed_comm.setValue(ds_value.getCellData(0, "calcBasicAmt"));
  }
};
scwin.sbm_Commission_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    var outMsg = ds_resultDT.getCellData(0, "outMsg");
    if (outMsg) {
      await $c.win.alert($p, outMsg);
    }
    $c.win.closePopup($p);
  }
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'tbx_vehclNo',placeholder:'',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'tbx_vehclSts',placeholder:'',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'tbx_regDd',pickerType:'dynamic',style:'',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기사성명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'tbx_drvNm',placeholder:'',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'휴대전화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'tbx_moTel',placeholder:'',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'tbx_vehclCls',placeholder:'',style:'',readOnly:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_List',id:'gr_List',style:'',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'등록일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'주문번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'상태',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'소속점',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'담당자',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'전화번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'상차<br/>요청일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'상차<br/>요청시간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'상차지',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'상차지역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column55',value:'상차지<br/>담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'상차<br/>담당전화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'하차요청일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'하차<br/>요청시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'하차지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'하차지역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column43',value:'하차지<br/>담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'하차<br/>담당전화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'실운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'청구운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'선불운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'착불운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'지불운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'보관금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'수수료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'배차일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column59',value:'등록자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{name:'등록일자',displayMode:'label',id:'regDd',inputType:'text',width:'100',editFormat:'XXXX-XX-XX',textAlign:'center'}},{T:1,N:'w2:column',A:{name:'주문번호',displayMode:'label',id:'idx',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{name:'상태',displayMode:'label',id:'status',inputType:'text',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{name:'소속점',displayMode:'label',id:'ofcNm',inputType:'text',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{name:'거래처명',displayMode:'label',id:'clntNm',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{name:'담당자',displayMode:'label',id:'picNm',inputType:'text',width:'80',textAlign:'center'}},{T:1,N:'w2:column',A:{name:'전화번호',displayMode:'label',id:'telNo',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{name:'상차;요청일',displayMode:'label',id:'onDd',inputType:'text',width:'100',editFormat:'XXXX-XX-XX',textAlign:'center'}},{T:1,N:'w2:column',A:{name:'상차;요청시간',displayMode:'label',id:'onHh',inputType:'text',width:'100',editFormat:'XX:XX',textAlign:'center'}},{T:1,N:'w2:column',A:{name:'상차지',displayMode:'label',id:'onPos',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{name:'상차지역',width:'100',inputType:'text',id:'onPosNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{name:'상차지;담당자',width:'80',inputType:'text',id:'onPicNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{name:'상차담;당전화',width:'100',inputType:'text',id:'onPicTel',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{name:'하차;요청일',width:'100',inputType:'text',id:'offDd',displayMode:'label',editFormat:'XXXX-XX-XX'}},{T:1,N:'w2:column',A:{name:'하차;요청시간',width:'100',inputType:'text',id:'offHh',displayMode:'label',editFormat:'XX:XX'}},{T:1,N:'w2:column',A:{name:'하차지',width:'100',inputType:'text',id:'offPos',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{name:'하차지역',width:'100',inputType:'text',id:'offPosNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{name:'하차지;담당자',width:'80',inputType:'text',id:'offPicNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{name:'하차;담당전화',width:'100',inputType:'text',id:'offPicTel',displayMode:'label'}},{T:1,N:'w2:column',A:{name:'실운임',width:'100',inputType:'text',id:'payReal',displayMode:'label',textAlign:'right',maxLength:'5',dataType:'float'}},{T:1,N:'w2:column',A:{name:'청구운임',width:'100',inputType:'text',id:'bilgAmt',displayMode:'label',textAlign:'right',maxLength:'5',dataType:'float'}},{T:1,N:'w2:column',A:{name:'선불운임',width:'100',inputType:'text',id:'payAdvn',displayMode:'label',textAlign:'right',maxLength:'5',dataType:'float'}},{T:1,N:'w2:column',A:{name:'착불운임',width:'100',inputType:'text',id:'payDvly',displayMode:'label',textAlign:'right',maxLength:'5',dataType:'float'}},{T:1,N:'w2:column',A:{name:'지불운임',width:'100',inputType:'text',id:'defrAmt',displayMode:'label',textAlign:'right',maxLength:'5',dataType:'float'}},{T:1,N:'w2:column',A:{name:'보관금',width:'100',inputType:'text',id:'strAmt',displayMode:'label',textAlign:'right',maxLength:'5',dataType:'float'}},{T:1,N:'w2:column',A:{name:'수수료',width:'100',inputType:'text',id:'cmis',displayMode:'label',textAlign:'right',maxLength:'5',dataType:'float'}},{T:1,N:'w2:column',A:{name:'배차일자',width:'100',inputType:'text',id:'alloccarDd',displayMode:'label',editFormat:'XXXX-XX-XX',textAlign:'center'}},{T:1,N:'w2:column',A:{name:'등록자',width:'80',inputType:'text',id:'regId',displayMode:'label',textAlign:'center'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차수수료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_comm',placeholder:'',style:'width: 200px;text-align:right;',maxlength:'15',dataType:'number',displayFormat:'#,##0'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.Commission'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]}]}]}]}]}]})