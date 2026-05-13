/*amd /ui/bp/fbp/bi/vi/ez_104_01_01Cp.xml 17417 93a5b40462d490d2dab32c74ec6432e3926f133b82cbee4db100e4f1c402b510 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_vehcl'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cond1',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cond2',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vehcl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ez108Idx',name:'108번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez110Idx',name:'110번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ofcNm',name:'소속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclCls',name:'분류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approve',name:'승인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picNm',name:'운전자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'handphoneNo',name:'핸드폰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pdaNo',name:'스마트폰',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realPdaYn',name:'실제;스마트폰여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refundamt',name:'미수금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nypay',name:'미지급금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carTont',name:'톤수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carTypt',name:'차종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefDistrict1',name:'선호;권역1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefDistrict2',name:'선호;권역2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefKcg1',name:'선호;화종1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefKcg2',name:'선호;화종2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coZipcode',name:'우편;번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coDtlAddr',name:'주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mtvehclAregYn',name:'매일공차등록',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dongbuSellClntNm',name:'동부주요화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dongbuSellWrkPlNm',name:'화주별작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDstCd',name:'작업구간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclOpentopblcYn',name:'24시간;오픈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filenm',name:'첨부파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtgKnd',name:'기록계구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtgNo',name:'DTG번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxShipwgtVol',name:'최대적재량',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_vehcl',action:'/ncall.bp.fbp.bi.vi.cmd.RetrieveVehclCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_vehcl","key":"IN_DS1"},{"id":"ds_vehcl","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_vehcl","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_vehcl_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// NTIS/배차관리/협력업체 차량팝업

scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.memJson = $c.data.getMemInfo($p);
scwin.UserID = scwin.memJson.userId;

//담당자명,담당자전화번호,원청수수료,거래처번호,담당자번호
scwin.commTxt = ["Addr", "coDtlAddr", "60", "400", "coZipcode", "", "", "", ""];
scwin.strCol = "allAddr, 주소,400";
scwin.strCols = scwin.strCol.split(",");
scwin.nextId = "dtlAddr_textbox";
scwin.heightPx = "100";
scwin.arrRtnVal = new Array();
// window.onerror = ErrorSetting;

scwin.ErrorSetting = function (msg, file_loc, line_no) {
  $c.win.alert($p, "에러메세지:" + msg + "\n에러파일:" + file_loc + "\n라인:" + line_no);
  return;
};
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  var vehclNo = $c.gus.cfIsNull($p, scwin.params["vehclNo"]) ? "" : scwin.params["vehclNo"];
  cond2.setValue(vehclNo);
  if (vehclNo != "") {
    scwin.retrieveVehcl();
  }
};
scwin.retrieveVehcl = function () {
  dma_vehcl.set("cond1", "1");
  dma_vehcl.set("cond2", cond2.getValue());
  $c.sbm.execute($p, sbm_vehcl);
};

// function retreveKeycheck()
scwin.cond2_onkeydown = function (e) {
  if (e.keyCode == 13) {
    scwin.retrieveVehcl();
  }
};
scwin.f_rtnValue = async function (rowIndex) {
  const arrRtnVal = new Array();
  if (rowIndex >= 0) {
    arrRtnVal[0] = ds_vehcl.getCellData(rowIndex, "vehclNo");
    arrRtnVal[1] = ds_vehcl.getCellData(rowIndex, "ez108Idx");
    arrRtnVal[2] = ds_vehcl.getCellData(rowIndex, "ez110Idx");
    arrRtnVal[3] = ds_vehcl.getCellData(rowIndex, "picNm");
    arrRtnVal[4] = ds_vehcl.getCellData(rowIndex, "telNo");
    arrRtnVal[5] = ds_vehcl.getCellData(rowIndex, "handphoneNo");
  } else {
    arrRtnVal[0] = "";
    arrRtnVal[1] = "";
    arrRtnVal[2] = "";
    arrRtnVal[3] = "";
    arrRtnVal[4] = "";
    arrRtnVal[5] = "";
  }
  if (ds_vehcl.getCellData(rowIndex, "vehclCls") == "2" && ds_vehcl.getCellData(rowIndex, "approve") == 0) {
    await $c.win.alert($p, "미승인된 자차는 배차할 수 없습니다");
    return;
  } else {
    $c.gus.cfSetReturnValue($p, arrRtnVal);
    $c.win.closePopup($p, arrRtnVal);
  }
};
scwin.sbm_vehcl_submitdone = function (e) {
  ds_vehcl.setJSON(e.responseJSON.GAUCE);
  var rowCnt = ds_vehcl.getTotalRow();
  totalRow.setValue(rowCnt);
  if (rowCnt < 1) {
    $c.win.alert($p, "조회결과가 없습니다.");
  } else if (rowCnt == 1) {
    scwin.f_rtnValue(0);
  }
};
scwin.gr_vehcl_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_rtnValue(rowIndex);
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};

// 그리드 포맷
scwin.gr_vehcl_formatter_vehclCls = function (data) {
  // 분류 Data='2:자차,4:용차,3:장기용차
  var map = {
    "2": "자차",
    "3": "장기용차",
    "4": "용차"
  };
  return map[data] || "";
};
scwin.gr_vehcl_formatter_approve = function (data) {
  // 승인여부
  var map = {
    "0": "미승인",
    "1": "승인"
  };
  return map[data] || "";
};
scwin.gr_vehcl_formatter_realPdaYn = function (data) {
  // 실제;스마트폰여부
  var map = {
    "0": "N",
    "1": "Y"
  };
  return map[data] || "";
};
scwin.gr_vehcl_formatter_mtvehclAregYn = function (data) {
  // 매일공차등록
  var map = {
    "0": "",
    "1": "등록"
  };
  return map[data] || "";
};
scwin.gr_vehcl_formatter_vehclOpentopblcYn = function (data) {
  // 24시간;오픈
  var map = {
    "0": "N",
    "1": "Y"
  };
  return map[data] || "";
};
scwin.gr_vehcl_formatter_dtgKnd = function (data) {
  // 기록계구분
  var map = {
    "1": "DTG",
    "2": "통합단말기"
  };
  return map[data] || "없음";
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cond2',placeholder:'',style:'width:200px;','ev:onkeydown':'scwin.cond2_onkeydown'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.retrieveVehcl'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_vehcl',id:'gr_vehcl',style:'','ev:oncelldblclick':'scwin.gr_vehcl_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'108번호',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'110번호',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'소속',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'분류',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'승인<br/>여부',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'운전자명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'전화번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'핸드폰번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'스마트폰',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column57',value:'실제<br/>스마트폰여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'미수금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'미지급금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column51',value:'톤수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column49',value:'차종',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column47',value:'선호<br/>권역1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',value:'선호<br/>권역2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column43',value:'선호<br/>화종1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',value:'선호<br/>화종2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'우편번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column37',value:'주소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'매일공차등록',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'동부주요화주',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'화주별작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'작업구간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',value:'24시간<br/>오픈',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'첨부파일명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'기록계구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'DTG번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'최대적재량',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ez108Idx',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ez110Idx',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ofcNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclCls',inputType:'text',width:'70',displayFormatter:'scwin.gr_vehcl_formatter_vehclCls',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'approve',inputType:'text',width:'70',displayFormatter:'scwin.gr_vehcl_formatter_approve',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'picNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'telNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'handphoneNo',inputType:'text',width:'100',dataType:'text',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pdaNo',inputType:'text',width:'100',displayFormat:'###-####-####',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'realPdaYn',displayMode:'label',displayFormatter:'scwin.gr_vehcl_formatter_realPdaYn',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'refundamt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'nypay',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'carTont',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'carTypt',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prefDistrict1',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prefDistrict2',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prefKcg1',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prefKcg2',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'coZipcode',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'coDtlAddr',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mtvehclAregYn',displayMode:'label',displayFormatter:'scwin.gr_vehcl_formatter_mtvehclAregYn',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dongbuSellClntNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dongbuSellWrkPlNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkDstCd',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'vehclOpentopblcYn',displayMode:'label',displayFormatter:'scwin.gr_vehcl_formatter_vehclOpentopblcYn',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'filenm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dtgKnd',displayMode:'label',displayFormatter:'scwin.gr_vehcl_formatter_dtgKnd',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dtgNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'maxShipwgtVol',displayMode:'label',textAlign:'left',dataType:'number',displayFormat:'#,###',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})