/*amd /ui/ds/op/rscconfirm/transrscconfirm/op_101_01_21p.xml 16304 76ffa98192120776b4540e1f7cb30196ea2174d6bad7dfccc8bcc3c517c3bbbb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'샤시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'샤시종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'소속업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranNm',name:'배정점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisSiz',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisTyp',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rglintInspExpireDt',name:'name13',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vehclShortCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'assgnLobranCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'usblDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tlvehclNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'posnClsCd',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_ds_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveUsableChassisCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// hidden 컴포넌트 전역변수 선언
scwin.hid_con_usblDt = "";
scwin.hid_tlvehclNo = ""; // TL번호
scwin.hid_posnClsCd = ""; // 소속구분

// 파라미터 수신 및 서버 정보 수신
scwin.paramTitle = $c.data.getParameter($p, "paramTitle") == null ? "샤시조회팝업" : $c.data.getParameter($p, "paramTitle");
scwin.toDay = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.gv_userClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자구분코드
scwin.gv_clntNo = $c.data.getMemInfo($p, "clntNo"); // 거래처번호
scwin.gv_clntNm = $c.data.getMemInfo($p, "clntNm"); // 거래처명
scwin.gv_strExistTF = "";
scwin.arrParent = new Array();
//scwin.arrParent = $c.data.getParameter();
scwin.arrRtnVal = new Array();

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // 점소 auto complete 정보 가져오기
  $c.sbm.execute($p, sbm_ds_lobran);

  // if(scwin.arrParent[1].length() > 0){
  //     scwin.gv_strExistTF = arrParent[1][0];
  // }

  // ed_vehclShortCd.setValue(scwin.arrParent[0][0]);
  // acb_lobran.setValue(scwin.arrParent[0][1]);
  // ica_usblDt.setValue(scwin.arrParent[0][2]);
  // scwin.hid_tlvehclNo = scwin.arrParent[0][3];
  // scwin.hid_posnClsCd = scwin.arrParent[0][4];

  // dma_search.set("vehclShortCd", scwin.arrParent[0][0]);
  // dma_search.set("assgnLobranCd", scwin.arrParent[0][1]);
  // dma_search.set("usblDt", scwin.arrParent[0][2]);
  // dma_search.set("tlvehclNo", scwin.arrParent[0][3]);
  // dma_search.set("posnClsCd", scwin.arrParent[0][4]);

  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 점소리스트 조회
//-------------------------------------------------------------------------
scwin.sbm_ds_lobran_submitdone = function (e) {
  ds_lobran.insertData(0, ["", "전체-"]);
  ds_lobran.insert;
};

//-------------------------------------------------------------------------
// 조회버튼 클릭시
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = function (e) {
  // let ret = await $c.gus.cfValidate([acb_lobran.getValue(), ica_usblDt.getValue()])

  // if(!ret) return;

  dma_search.set("vehclShortCd", ed_vehclShortCd.getValue());
  dma_search.set("vehclNo", ed_vehclNo.getValue());
  dma_search.set("assgnLobranCd", acb_lobran.getValue());
  dma_search.set("usblDt", ica_usblDt.getValue());
  dma_search.set("tlvehclNo", scwin.hid_tlvehclNo);
  dma_search.set("posnClsCd", scwin.hid_posnClsCd);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회 서브미션 완료시
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitDone = function (e) {
  let totalRow = ds_results.getTotalRow();
  if (totalRow == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  if (totalRow == 1 && scwin.gv_strExistTF == "T") {
    scwin.btn_rtnValue_onClick();
  }
  ds_results.setRowPosition(1);
  gr_results.setFocusedCell(1);
  spa_totalRows.setValue(totalRow);
};

//-------------------------------------------------------------------------
// 선택 버튼 클릭시
//-------------------------------------------------------------------------
scwin.btn_rtnValue_onClick = function (e) {
  let row = ds_results.getRowPosition();
  let toDay = String(scwin.toDay);
  toDay = new Date(toDay.substring(0, 4), toDay.substring(4, 6) + 1, toDay.substring(6, 8));
  console.log(toDay);
  let expireDt = String(ds_results.getCellData(row, "rglintInspExpireDt"));
  expireDt = new Date(expireDt.substring(0, 4), expireDt.substring(4, 6) + 1, expireDt.substring(6, 8));
  let remainDtInsp = Math.floor(expireDt.valueOf() / (24 * 60 * 60 * 1000) - toDay.valueOf() / (24 * 60 * 60 * 1000));
  console.log(expireDt);
  console.log(remainDtInsp);
  if (remainDtInsp <= 30 && remainDtInsp > -30) {
    alert("차량번호" + ds_results.getCellData(row, "vehclShortCd") + "는 \n정기검사만료일이" + ds_results.getCellData(row, "rglintInspExpireDt") + "일 입니다.");
  }
  let expireDtMntn = toString(ds_results.getCellData(row, "mntnInspExpireDt"));
  expireDtMntn = new Date(expireDtMntn.substring(0, 4), expireDtMntn.substring(4, 2), expireDtMntn.substring(6, 2));
  let remainDtMntn = Math.floor(expireDtMntn.valueOf() / (24 * 60 * 60 * 1000) - toDay.valueOf() / (24 * 60 * 60 * 1000));
  if (remainDtMntn <= 30 && remainDtMntn > -30) {
    alert("차량번호" + ds_results.getCellData(row, "vehclShortCd") + "는 \n정밀검사만료일이" + ds_results.getCellData(row, "mntnInspExpireDt") + "일 입니다.");
  }
  let expireDtChk = toString(ds_results.getCellData(row, "rglintChkExpireDt"));
  expireDtChk = new Date(expireDtChk.substring(0, 4), expireDtChk.substring(4, 2), expireDtChk.substring(6, 2));
  let remainDtChk = Math.floor(expireDtChk.valueOf() / (24 * 60 * 60 * 1000) - toDay.valueOf() / (24 * 60 * 60 * 1000));
  if (remainDtChk <= 30 && remainDtChk > -30) {
    alert("차량번호" + ds_results.getCellData(row, "vehclShortCd") + "는 \n정기정검만료일이" + ds_results.getCellData(row, "rglintChkExpireDt") + "일 입니다.");
  }
  if (ds_results.getCellData(row, "posnClsCd") == "N") {
    alert("차량번호(트렉터TR)" + scwin.hid_tlvehclNo + "위수탁 차량이므로 자차만 선택될수 있습니다");
    return;
  }
  if (row > 0) {
    scwin.arrRtnVal[0] = ds_results.getCellData(row, "eqCd");
    scwin.arrRtnVal[1] = ds_results.getCellData(row, "vehclShortCd");
    scwin.arrRtnVal[2] = ds_results.getCellData(row, "vehclNo");
    scwin.arrRtnVal[3] = ds_results.getCellData(row, "eqKndCd");
    scwin.arrRtnVal[4] = ds_results.getCellData(row, "eqNrmCd");
    scwin.arrRtnVal[5] = ds_results.getCellData(row, "clntNo");
    scwin.arrRtnVal[6] = ds_results.getCellData(row, "assgnLobranCd");
    scwin.arrRtnVal[7] = ds_results.getCellData(row, "chassisSiz");
    scwin.arrRtnVal[8] = ds_results.getCellData(row, "chassisTyp");
  } else {
    scwin.arrRtnVal[0] = "N/A";
  }
  $c.win.closePopup($p, scwin.arrRtnVal);
};

//-------------------------------------------------------------------------
// 닫기 버튼 클릭시
//-------------------------------------------------------------------------
scwin.btn_close_onClick = function (e) {
  scwin.arrRtnVal[0] = "N/A";
  $c.win.closePopup($p, scwin.arrRtnVal);
};

//-------------------------------------------------------------------------
// 새로고침 버튼 클릭시
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onClick = function (e) {
  $c.gus.cfInitObjects($p, [acb_lobran, ica_usblDt]);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'sp_title',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배차점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobran',search:'start',style:'width: 150px;',submenuSize:'auto',mandatory:'true',searchTarget:'label',delimiter:'-',displayMode:'value delim label',ref:'',allOption:'',chooseOption:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'샤시번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group ',id:'',style:'width: 250px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_vehclShortCd',placeholder:'',style:'width: 85px;',maxlength:'6',allowChar:'0-9'}},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNo',placeholder:'',style:''}}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_usblDt',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box flex-full',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',visibleRowNumFix:'true',resize:'true',columnMove:'true','ev:oncelldblclick':'scwin.btn_rtnValue_onClick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'샤시종류',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'단축번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'샤시번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'장비코드',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'배정점소',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'소속업체',width:'110'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndNm',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclShortCd',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnLobranNm',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'110'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_rtnValue',style:'',type:'button','ev:onclick':'scwin.btn_rtnValue_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택'}]}]}]}]}]}]}]})