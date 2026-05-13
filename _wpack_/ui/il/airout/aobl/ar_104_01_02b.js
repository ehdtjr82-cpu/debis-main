/*amd /ui/il/airout/aobl/ar_104_01_02b.xml 31225 7be8a5e0c0b46f8d8d9873bf4c8781c771048f2f4507e287d1670161a9c51691 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_HouseSearchList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'blno',name:'House',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ondt',name:'Onboard   sort=true',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltno',name:'FLT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm1',name:'Shipper   sort=true',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm1',name:'Consignee',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm1',name:'Notify',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mftpkg',name:'PKG',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tcwht',name:'Wt.',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frpc',name:'F;',dataType:'text'}},{T:1,N:'w2:column',A:{id:'otpc',name:'O;',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpnm',name:'Departure   sort=true',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsnm1',name:'Destination  sort=true',dataType:'text'}},{T:1,N:'w2:column',A:{id:'void',name:'Void',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'Consol',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pic',name:'PIC    show=false',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpnm',name:'PIC    sort=true',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'Regist;',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'STATUS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'issueYn',name:'ISSUE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngnm1',name:'EDI',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'kcomcd',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'blno',name:'출발일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblno',name:'마스터 번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'영업사원코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ondtFrom',name:'출발일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ondtTo',name:'출발일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fltno',name:'편명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shnm1',name:'SHIPPER',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cnnm1',name:'CONSIGNEE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'CONSOL 번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dpcd',name:'출발지 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dstn',name:'도착지 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pic',name:'B/L 담당자 ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpdt',name:'입력일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cscd',name:'Customer Code',dataType:'text'}},{T:1,N:'w2:key',A:{id:'csnm',name:'Customer Name',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ngnm1',name:'EDI ITEM',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kcomcd',name:'name17',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lrgb',name:'name18',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.airout.aobl.RetrieveAirHouseBlListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search", "key":"IN_DS1"}, {"id":"ds_HouseSearchList", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_HouseSearchList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//---------------------------------------------------------
// 전역변수
//---------------------------------------------------------    
scwin.hid_kcomcd = "DBEX";
scwin.onpageload = function () {
  let param = $c.data.getParameter($p);
  let iogb = param?.iogb ?? param?.menuInfo?.menuParam?.iogb;
  cnd_lc_iogb.setValue(iogb);
};

//---------------------------------------------------------
// UDC
//---------------------------------------------------------    
scwin.onUdcCompleted = function () {
  function normalizeYyyyMMdd(yyyymmdd) {
    if (typeof yyyymmdd !== "string") return "";
    if (!/^\d{8}$/.test(yyyymmdd)) return "";
    var year = Number(yyyymmdd.slice(0, 4));
    var month = Number(yyyymmdd.slice(4, 6));
    var day = Number(yyyymmdd.slice(6, 8));

    // 월 보정
    if (month < 1) month = 1;
    if (month > 12) month = 12;

    // 해당 월의 말일 계산 (윤년 자동 처리)
    var lastDay = new Date(year, month, 0).getDate();

    // 일 보정
    if (day < 1) day = 1;
    if (day > lastDay) day = lastDay;
    return String(year) + String(month).padStart(2, "0") + String(day).padStart(2, "0");
  }
  today = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  month = WebSquare.date.dateTimeAdd(today.substr(0, 6), -1, "month");
  cnd_ed_stdtFrom.setValue(normalizeYyyyMMdd(month + today.substr(6, 2)));
  cnd_ed_stdtTo.setValue(today);
};

//---------------------------------------------------------
// 사용자 함수
//---------------------------------------------------------    
scwin.f_HouseDetail = function () {
  let row = gr_houseList.getFocusedRowIndex();
  let strExpertDetailUrl = "/ui/il/airout/aobl/ar_104_01_06b.xml"; // Export House B/L (New)
  let strImportDetailUrl = "/ui/il/airinb/aibl/ar_203_01_03b.xml"; // Import House B/L (New)

  if (row > -1) {
    //선택된 오더 정보 : 오더번호 / 화물구분
    let v_kmcom = ds_HouseSearchList.getCellData(row, "kcomcd");
    let v_blno = ds_HouseSearchList.getCellData(row, "blno");
    let src = cnd_lc_iogb.getValue() == "O" ? strExpertDetailUrl : strImportDetailUrl;
    let menuNm = cnd_lc_iogb.getValue() == "O" ? "Export House B/L (New)" : "Import House B/L (New)";
    let menuId = cnd_lc_iogb.getValue() == "O" ? "ar_104_01_06b" : "ar_203_01_03b";
    let paramObj = {
      kcomcd: v_kmcom,
      blno: v_blno
    };
    $c.win.openMenu($p, menuNm, src, menuId, paramObj, {
      openAction: "exist"
    });
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056);
  }
};
scwin.f_PopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  switch (disGubun) {
    case "Departure":
      //Search Departure
      udc_dp.setSelectId("retrieveAirPortCode");
      udc_dp.ilCommonPopUp(scwin.udc_dp_callbackFunc, cnd_ed_dpcd.getValue().trim(), txt_dpnm.getValue(), pWinCloseTF, '6', 'Port Code, Port Name', '130,300', "3,4,5,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, 'Departure Search, Port Code, Port Name', pNoDataCloseTF);
      break;
    case "Destination":
      //Search Destination
      udc_ds.setSelectId("retrieveAirPortCode");
      udc_ds.ilCommonPopUp(scwin.udc_dc_callbackFunc, cnd_ed_dscd.getValue().trim(), txt_dsnm1.getValue(), pWinCloseTF, '2', 'Port Code, Port Name', '130,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, 'Destination Search, Port Code, Port Name', pNoDataCloseTF);
      break;
    case "Customer":
      //거래처 팝업(Search Shipper)
      udc_cs.setSelectId("retrieveEngClntInfo");
      udc_cs.ilCommonPopUp(scwin.udc_cs_callbackFunc, cnd_ed_cscd.getValue().trim(), cnd_ed_csnm.getValue(), pWinCloseTF, '6', 'Customer', '140,300', null, null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
      break;
    case "B/L PIC":
      //B/L 담당자 팝업
      udc_pic.setSelectId("retrieveEmpInfo");
      udc_pic.ilCommonPopUp(scwin.udc_pic_callbackFunc, cnd_ed_pic.getValue().trim(), cnd_txt_pic.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "B/L PIC,Code,Name", pNoDataCloseTF);
      break;
    default:
      break;
  }
};
scwin.udc_dp_callbackFunc = function (rtnList) {
  if (typeof rtnList != "undefined") {
    if (rtnList[0] != "N/A") {
      $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_dpcd, txt_dpnm);
    }
  }
};
scwin.udc_dc_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_dscd, txt_dsnm1);
};
scwin.udc_cs_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_cscd, cnd_ed_csnm);
};
scwin.udc_pic_callbackFunc = function (rtnList) {
  rtnList[0] = rtnList[0].replace(/[A-Za-z]/g, "");
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_pic, cnd_txt_pic);
};
scwin.excel = async function () {
  let cfrm = await $c.win.confirm($p, "House B/L List를 EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) $c.data.downloadGridViewExcel($p, gr_houseList, {
    fileName: "House BL List.xls",
    sheetName: "House BL List"
  });
};
scwin.oneditkeyup = function (info, e) {
  this.setValue(e.target.value.toUpperCase());
};
//---------------------------------------------------------
// 컴포넌트 이벤트
//---------------------------------------------------------    
scwin.btn_retrieve_onclick = async function (e) {
  if (cnd_ed_stdtFrom.getValue().trim() == '' || cnd_ed_stdtTo.getValue().trim() == '') {
    // $c.gus.cfAlertMsg(MSG_CM_ERR_002, Array("ONBOARD"));
    await $c.win.alert($p, "ONBOARD is mandatory.");
    cnd_ed_stdtFrom.focus();
    return false;
  }
  if ($c.gus.cfIsAfterDate($p, cnd_ed_stdtFrom.getValue(), cnd_ed_stdtTo.getValue()) == false) {
    // await $c.gus.cfAlertMsg(MSG_CM_ERR_039);  // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    await $c.win.alert($p, "Start date must be before End date.");
    cnd_ed_stdtFrom.focus();
    return false;
  }

  // if (cnd_chk_lrgb.getValue() == "L") {
  //     ds_search.set("lrgb", "L");
  // } else {
  //     ds_search.get("lrgb", "");
  // }

  //EDI ITEM 검색 시 대소문자 구분없게
  if (cnd_txt_item.getValue() != "" || cnd_txt_item.getValue() != null) {
    ds_search.get("ngnm1", ds_search.get("ngnm1").toUpperCase());
  }
  ds_search.set("kcomcd", scwin.hid_kcomcd);
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.btn_fieldClear_onclick = function (e) {
  ds_search.setEmptyValue();
  txt_dpnm.setValue("");
  txt_dsnm1.setValue("");
  cnd_txt_pic.setValue("");
  cnd_ed_csnm.setValue("");
  cnd_chk_lrgb.setValue("");
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  ed_totlaRow.setValue(ds_HouseSearchList.getTotalRow());
  if (ds_HouseSearchList.getTotalRow() == 0) {
    await $c.win.alert($p, "No data found./Could not find any relevant data.");
  }
};
scwin.gr_houseList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_HouseDetail();
};
scwin.udc_dp_onblurCodeEvent = function (e) {
  var strClntNo = cnd_ed_dpcd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_dpnm.setValue("");
    scwin.f_PopUp("Departure", "T", "F", "F");
  } else {
    txt_dpnm.setValue("");
  }
};
scwin.udc_dp_onclickEvent = function (e) {
  scwin.f_PopUp('Departure', 'F', 'F', 'F');
};
scwin.udc_dp_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('Departure', 'T', 'F', 'F');
};
scwin.udc_ds_onblurCodeEvent = function (e) {
  var strClntNo = cnd_ed_dscd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_dsnm1.setValue("");
    scwin.f_PopUp("Destination", "T", "F", "F");
  } else {
    txt_dsnm1.setValue("");
  }
};
scwin.udc_ds_onclickEvent = function (e) {
  scwin.f_PopUp('Destination', 'F', 'F', 'F');
};
scwin.udc_ds_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('Destination', 'T', 'F', 'F');
};
scwin.udc_pic_onblurCodeEvent = function (e) {
  var strClntNo = cnd_ed_pic.getValue().trim();
  if (strClntNo.length > 0) {
    cnd_txt_pic.setValue("");
    scwin.f_PopUp("B/L PIC", "T", "F", "F");
  } else {
    cnd_txt_pic.setValue("");
  }
};
scwin.udc_pic_onclickEvent = function (e) {
  scwin.f_PopUp('B/L PIC', 'F', 'F', 'F');
};
scwin.udc_pic_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('B/L PIC', 'F', 'F', 'F');
};
scwin.udc_cs_onblurCodeEvent = function (e) {
  var strPic = cnd_ed_cscd.getValue().trim();
  if (strPic.length > 0) {
    cnd_ed_csnm.setValue("");
    scwin.f_PopUp("Customer", "T", "F", "F");
  } else {
    cnd_ed_csnm.setValue("");
  }
};
scwin.udc_cs_onclickEvent = function (e) {
  scwin.f_PopUp('Customer', 'F', 'F', 'F');
};
scwin.udc_cs_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('Customer', 'F', 'F', 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Export/Import',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_iogb',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_search.iogb'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Onboard Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_stdt',refDataMap:'ds_search',refEdDt:'ondtTo',refStDt:'ondtFrom',style:'',edFromId:'cnd_ed_stdtFrom',edToId:'cnd_ed_stdtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_blno',placeholder:'',style:'width:230px;',ref:'data:ds_search.blno',validateOnInput:'true',allowChar:'0-9|a-z|A-Z','ev:oneditkeyup':'scwin.oneditkeyup',maxlength:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_mblno',placeholder:'',style:'width:230px;',ref:'data:ds_search.mblno',validateOnInput:'true',allowChar:'0-9|a-z|A-Z','ev:oneditkeyup':'scwin.oneditkeyup',displayFormat:'###-#################',maxlength:'20'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Shipper',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_shnm1',placeholder:'',style:'width:120px;',ref:'data:ds_search.shnm1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consignee',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_cnnm1',placeholder:'',style:'width:208px;',ref:'data:ds_search.cnnm1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Departure',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'cnd_ed_dpcd',nameId:'txt_dpnm',popupID:'',selectID:'',style:'',validTitle:'',btnId:'img_dpcd',id:'udc_dp',refDataCollection:'ds_search',code:'dpcd','ev:onblurCodeEvent':'scwin.udc_dp_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dp_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_dp_onviewchangeNameEvent',allowCharCode:'0-9|a-z|A-Z',maxlengthCode:'3',UpperFlagCode:'1',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Destination',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'cnd_ed_dscd',nameId:'txt_dsnm1',popupID:'',selectID:'',style:'',validTitle:'',btnId:'img_dscd1',id:'udc_ds',refDataCollection:'ds_search',code:'dstn','ev:onblurCodeEvent':'scwin.udc_ds_onblurCodeEvent','ev:onclickEvent':'scwin.udc_ds_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_ds_onviewchangeNameEvent',allowCharCode:'0-9|a-z|A-Z',maxlengthCode:'3',UpperFlagCode:'1',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consol No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_mhno',placeholder:'',style:'width:120px;',ref:'data:ds_search.mhno',validateOnInput:'true',allowChar:'0-9|a-z|A-Z','ev:oneditkeyup':'scwin.oneditkeyup',maxlength:'20'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Flight No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_fltno',placeholder:'',style:'width:208px;;',ref:'data:ds_search.fltno',validateOnInput:'true',allowChar:'0-9|a-z|A-Z','ev:oneditkeyup':'scwin.oneditkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PIC',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'cnd_ed_pic',nameId:'cnd_txt_pic',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_pic',btnId:'btn_pic',refDataCollection:'ds_search',code:'pic','ev:onblurCodeEvent':'scwin.udc_pic_onblurCodeEvent','ev:onclickEvent':'scwin.udc_pic_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_pic_onviewchangeNameEvent',allowCharCode:'0-9',maxlengthCode:'8',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Regist Date',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'cnd_ed_userdt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_search.inpdt',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Co-Load',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cnd_chk_lrgb',ref:'data:ds_search.lrgb',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'L'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'cnd_ed_cscd',nameId:'cnd_ed_csnm',popupID:'',selectID:'',style:'',validTitle:'',btnId:'img_cscd',refDataCollection:'ds_search',code:'cscd',id:'udc_cs','ev:onblurCodeEvent':'scwin.udc_cs_onblurCodeEvent','ev:onclickEvent':'scwin.udc_cs_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_cs_onviewchangeNameEvent',maxlengthCode:'8',allowCharCode:'0-9|a-z|A-Z',UpperFlagCode:'1',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ITEM',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_txt_item',placeholder:'',style:'width:230px;',ref:'data:ds_search.ngnm1'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'House B/L List',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridUpYn:'N',gridID:'gr_houseList',gridDownFn:'scwin.excel',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_HouseSearchList',id:'gr_houseList',style:'',visibleRowNum:'12',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_houseList_oncelldblclick',fixedColumnNoMove:'true',fixedColumn:'1'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'House B/L No',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Master B/L No',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'Onboard',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'FLT No',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'Shipper',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'Consignee',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'Notify',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'PKG',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'Wt.',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'F<br/>P/C',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column70',value:'O<br/>P/C',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column67',value:'Departure',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column64',value:'Destination',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column61',value:'Void',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column58',value:'Consol No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column55',value:'PIC',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column52',value:'PIC',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'Regist<br/>Date',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'STATUS',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'ISSUE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'EDI ITEM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'blno',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mblno',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ondt',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fltno',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shnm1',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnnm1',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ntnm1',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mftpkg',inputType:'text',width:'80',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tcwht',inputType:'text',width:'80',dataType:'number',displayFormat:'#,##0.000',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'frpc',inputType:'text',width:'80',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'otpc',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dpnm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dsnm1',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'void',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Void'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mhno',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pic',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'inpnm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inpdt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'status',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'issueYn',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Approved'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Not Approved'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ngnm1',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label',value:'총 중량(kg)'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column22',displayMode:'label',dataType:'number',displayFormat:'#,##0.000',expression:'SUM(\'tcwht\')',excelFormat:'#,##0.000',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totlaRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})