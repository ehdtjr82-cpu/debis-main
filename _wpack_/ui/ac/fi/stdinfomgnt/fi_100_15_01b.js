/*amd /ui/ac/fi/stdinfomgnt/fi_100_15_01b.xml 29158 6473b7571b0d90e9e32cfc91e6c003e032b21c4a7487c3049d80c38dcd492b05 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'pchsSellClsCd',name:'pchsSellClsCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'opusCode',name:'opusCode'}},{T:1,N:'w2:key',A:{dataType:'text',id:'opusCodeNm',name:'opusCodeNm'}},{T:1,N:'w2:key',A:{dataType:'text',id:'useYn',name:'useYn'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'opusCode',name:'opusCode'}},{T:1,N:'w2:column',A:{dataType:'text',id:'opusCodeNm',name:'opusCodeNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsSellClsCd',name:'pchsSellClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptCd',name:'acctDeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'drAcctCd',name:'drAcctCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crAcctCd',name:'crAcctCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptNm',name:'acctDeptNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'drAcctNm',name:'drAcctNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crAcctNm',name:'crAcctNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'useYn',name:'useYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmk',name:'rmk'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.stdinfomgnt.RetrieveOpusCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieve_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.stdinfomgnt.SaveOpusCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_master","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_save_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*
    회계/공통/OPUS CODE 매핑
    해외법인 계정으로 로그인
*/

scwin.memJson = $c.data.getMemInfo($p);
scwin.pos_item = 0;
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 회사코드
scwin.vCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; // 회사구분코드('CO035' : 0:동부 EXPRESS)

scwin.txt_tempCostClsCd = ""; //히든컴포넌트

scwin.onpageload = async function () {
  const codeOptions = [{
    grpCd: "FI019",
    compID: "cnd_lc_pchsSellClsCd, rd_pchsSellClsCd, gr_master:pchsSellClsCd"
  }, {
    grpCd: "FM051",
    compID: "cnd_lc_useYn, gr_master:useYn"
  }];
  await $c.data.setCommonCode($p, codeOptions, function () {
    cnd_lc_useYn.addItem("-1", "전체", 0);
    cnd_lc_useYn.setSelectedIndex(2);
  });
};
scwin.onUdcCompleted = function () {
  scwin.f_set("ONLOAD");
};

//function desc : 화면 open시 초기 데이타 setting
scwin.f_set = function (gubun) {
  $c.gus.cfEnableBtnOnly($p, [btn_add, btn_delete, btn_cancel, btn_update, btn_save]);
  switch (gubun) {
    case "ONLOAD":
      $c.gus.cfDisableBtn($p, [btn_add, btn_delete, btn_cancel, btn_update, btn_save]);
      scwin.f_ContentsYn("ONLOAD");
      break;
    case "RETRIEVE":
      if (ds_master.getRowPosition() >= 0) {
        $c.gus.cfDisableBtn($p, [btn_cancel, btn_save]);
      } else {
        $c.gus.cfDisableBtn($p, [btn_delete, btn_cancel, btn_update, btn_save]);
      }
      scwin.f_ContentsYn("RETRIEVE");
      break;
    case "DELETE":
      $c.gus.cfDisableBtn($p);
      break;
    case "UPDATE":
      $c.gus.cfDisableBtn($p, [btn_add, btn_delete, btn_update]);
      scwin.f_ContentsYn("UPDATE");
      break;
    case "ADD":
      $c.gus.cfDisableBtn($p, [btn_add, btn_update, btn_delete]);
      scwin.f_ContentsYn("ADD");
      break;
  }
};

// 조회조건 Clear
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_cndArea);
};
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_Add = function () {
  var rowCnt = ds_master.getTotalRow();
  ds_master.insertRow(rowCnt);
  gr_master.setFocusedCell(rowCnt, 0);
  scwin.f_set("ADD");
  ds_master.setCellData(ds_master.getRowPosition(), "useYn", "1");
  txt_opusCode.focus();
};
scwin.f_Delete = function () {
  var rowIdx = ds_master.getRowPosition();
  ds_master.deleteRow(rowIdx);
  gr_master.setFocusedCell(rowIdx, 0);
  scwin.f_set("DELETE");
};
scwin.f_Cancel = function () {
  // ds_master.Undo(ds_master.RowPosition);
  var selectIdx = ds_master.getRowPosition();
  if (ds_master.getRowStatus(selectIdx) == "C") {
    ds_master.undoRow(selectIdx);
    ds_master.removeRow(selectIdx);
  } else {
    ds_master.undoRow(selectIdx);
  }
  scwin.f_set("RETRIEVE");
};
scwin.f_Update = function () {
  scwin.f_set("UPDATE");
};
scwin.f_Save = async function () {
  // 필수입력사항 확인
  if (!(await $c.gus.cfValidate($p, [tbl_detailArea]))) {
    return;
  }

  //매입인경우 차변계정코드 계정체크
  if (rd_pchsSellClsCd.getValue() == "2") {
    var rtnVal = await scwin.f_checkDeptAcctCd(ed_drAcctCd.getValue(), ed_acctDeptCd.getValue(), "D");
    if (!rtnVal) {
      return;
    }
  }
  if (ds_master.getRowStatus(ds_master.getRowPosition()) != "R") {
    //if (ds_master.getModifiedIndex().length != 0) {
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      //저장하시겠습니까?
      scwin.pos_item = ds_master.getRowPosition();
      $c.sbm.execute($p, sbm_save);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["OPUS CODE"]); //@은(는) 변경된 사항이 없습니다
  }
};

// 팝업열기 전에 체크
scwin.f_openPopUpBefore = function (gubun, nmObj, cdObj, pWinCloseTF) {
  if (nmObj.getValue() == nmObj.hidVal) {
    return;
  } else {
    if (nmObj.getValue() == "") {
      cdObj.setValue("");
      return;
    } else {
      cdObj.setValue("");
    }
  }
  scwin.f_openPopUp(gubun, pWinCloseTF);
};

// function desc : 팝업열기
// gubun : dept=부서 dr=차변계정, cr=대변계정
scwin.f_openPopUp = function (gubun, pWinCloseTF) {
  var pCode = "";
  var pName = "";
  var pWhere = "";
  var pTitle = "";
  var pWindowTitle = "";
  var udcID = "";
  var callBackFun;
  if (gubun == "dr") {
    //차변계정코드
    udcID = udc_drAcctCd;
    callBackFun = scwin.udc_drAcctCd_callBackFun;
    pCode = ed_drAcctCd.getValue();
    pName = txt_drAcctNm.getValue();
    pWhere = "T,,,D";
    pTitle = "계정코드,계정명";
    pWindowTitle = "차변계정코드조회,계정코드,계정명";
  } else if (gubun == "cr") {
    //대변계정코드
    udcID = udc_crAcctCd;
    callBackFun = scwin.udc_crAcctCd_callBackFun;
    pCode = ed_crAcctCd.getValue();
    pName = txt_crAcctNm.getValue();
    pWhere = "T,,,C";
    pTitle = "계정코드,계정명";
    pWindowTitle = "대변계정코드조회,계정코드,계정명";
  } else if (gubun == "dept") {
    //귀속부서
    udcID = udc_acctDeptCd;
    callBackFun = scwin.udc_acctDeptCd_callBackFun;
    pCode = ed_acctDeptCd.getValue();
    pName = txt_acctDeptNm.getValue();
    pWhere = "" + ",," + scwin.vCoCd + "," + scwin.vCoClsCd;
    pTitle = "귀속부서코드,귀속부서명";
    pWindowTitle = "귀속부서조회,귀속부서코드,귀속부서명";
  }
  udcID.cfCommonPopUp(callBackFun // XML상의 SELECT ID	
  , pCode // 화면에서의 ??? Code Element의	Value
  , pName // 화면에서의 ??? Name Element의	Value
  , pWinCloseTF // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , pTitle // Title순서	
  , '200,250' // 보여주는 각 컬럼들의 폭	
  , null // 컬럼중에서 숨기는	컬럼 지정	
  , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , '450' // POP-UP뛰을때 원도우의	사용자 정의	폭
  , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , 'F' // 전체검색허용여부	("F")
  , pWindowTitle // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};

// 차변계정코드 callbackfun
scwin.udc_drAcctCd_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_drAcctCd, txt_drAcctNm);
};

// 대변계정코드 callbackfun
scwin.udc_crAcctCd_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_crAcctCd, txt_crAcctNm);
};

// 귀속부서 callbackfun
scwin.udc_acctDeptCd_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_acctDeptCd, txt_acctDeptNm);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    scwin.txt_tempCostClsCd = rtnList[9]; //비용구분코드비교값
  }
};

// function desc : 엑셀저장
scwin.f_runExcel = async function () {
  // cfGridToExcel(gr_master, "OPUS코드", "OPUS CODE매핑", 2+4+8+16);
  await $c.data.downloadGridViewExcel($p, gr_master, {
    fileName: "OPUS CODE매핑" + ".xlsx",
    sheetName: "OPUS코드"
  });
};

// 항목 활성화 제어
scwin.f_ContentsYn = function (gubun) {
  var _enableYn = true;
  if (gubun == "ONLOAD" || gubun == "RETRIEVE") {
    _enableYn = false;
    $c.gus.cfEnableObj($p, txt_opusCode, false);
  } else if (gubun == "ADD") {
    _enableYn = true;
    $c.gus.cfEnableObj($p, txt_opusCode, true);
  } else if (gubun == "UPDATE") {
    _enableYn = true;
    $c.gus.cfEnableObj($p, txt_opusCode, false);
  }
  $c.gus.cfEnableObj($p, txt_opusCodeNm, _enableYn);
  $c.gus.cfEnableObj($p, rd_pchsSellClsCd, _enableYn);
  $c.gus.cfEnableObj($p, ed_acctDeptCd, _enableYn); //귀속부서코드
  $c.gus.cfEnableObj($p, txt_acctDeptNm, _enableYn);
  $c.gus.cfEnableObj($p, ed_drAcctCd, _enableYn); //차변계정코드
  $c.gus.cfEnableObj($p, txt_drAcctNm, _enableYn);
  $c.gus.cfEnableObj($p, btn_drAcctCd, _enableYn);
  $c.gus.cfEnableObj($p, ed_crAcctCd, _enableYn); //대변계정코드
  $c.gus.cfEnableObj($p, txt_crAcctNm, _enableYn);
  $c.gus.cfEnableObj($p, btn_crAcctCd, _enableYn);
  $c.gus.cfEnableObj($p, rd_useYn, _enableYn); //사용유무
  $c.gus.cfEnableObj($p, txt_rmk, _enableYn); //비고
};
scwin.f_checkDeptAcctCd = function (edAcctCd, edAcctDeptCd, _drcrClsCd) {
  scwin.vCheckStatusUpload = "false";
  return new Promise(resolve => {
    if (edAcctDeptCd == "") {
      resolve(true);
      return;
    }
    var param = "" + ",," + scwin.vCoCd + "," + scwin.vCoClsCd;
    scwin.udc_acctDeptCd_callBackFun2 = function (rtnList1) {
      // 귀속부서 체크
      if (!rtnList1 || rtnList1[0] == "N/A") {
        finish(false);
        return;
      }
      ed_acctDeptCd.setValue(rtnList1[0]);
      txt_acctDeptNm.setValue(rtnList1[1]);
      scwin.txt_tempCostClsCd = rtnList1[9];
      var txt_costClsCdCheck = "";
      if (scwin.txt_tempCostClsCd == "" || scwin.txt_tempCostClsCd == "03") {
        txt_costClsCdCheck = "03";
      } else if (scwin.txt_tempCostClsCd == "01") {
        txt_costClsCdCheck = "01";
      } else if (scwin.txt_tempCostClsCd == "02") {
        txt_costClsCdCheck = "02";
      }
      var where = "T,,," + _drcrClsCd + ",," + txt_costClsCdCheck;

      // 차변계정 팝업 호출
      scwin.udc_drAcctCd_callBackFun2 = function (rtnList2) {
        ed_drAcctCd.setValue(rtnList2[0]);
        txt_drAcctNm.setValue(rtnList2[1]);

        // 차변계정 체크
        if (!rtnList2 || rtnList2[0] == "N/A") {
          finish(false);
        } else {
          finish(true);
        }
      };
      udc_drAcctCd.cfCommonPopUp(scwin.udc_drAcctCd_callBackFun2, edAcctCd, '', 'T', null, null, null, null, where, null, null, null, null);
    };
    udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFun2, edAcctDeptCd, '', 'T', null, null, null, null, param, null, null, null, null);
    async function finish(result) {
      if (!result) {
        await $c.win.alert($p, "판관비/원가 부서 구분에 맞는 계정이 세팅되어야 합니다. 확인하시고 다시 저장 하시기 바랍니다.");
        resolve(false);
      } else {
        resolve(true);
      }
    }
  });
};
scwin.sbm_retrieve_submitdone = async function (e) {
  var rowCnt = ds_master.getTotalRow();
  if (rowCnt > 0) {
    ds_master.sort("opusCode", 0); // 코드 오름차순 정렬
    // gr_master.setFocusedCell(0, 0);

    totalRows.setValue(rowCnt);
    $c.gus.cfGoPrevPosition($p, gr_master, scwin.pos_item);
    scwin.f_set("RETRIEVE");
  } else {
    ds_master.removeAll();
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    $c.gus.cfEnableBtnOnly($p, [btn_add]);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};

// 귀속부서 udc
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  // 26.03.25 개선요청: pWinCloseTF 'F' > 'T' 변경
  scwin.f_openPopUp('dept', 'T');
};
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {
  scwin.f_openPopUpBefore('dept', txt_acctDeptNm, ed_acctDeptCd, 'T');
};

// 차변계정코드 udc
scwin.udc_drAcctCd_onclickEvent = function (e) {
  // 26.03.25 개선요청: pWinCloseTF 'F' > 'T' 변경
  scwin.f_openPopUp('dr', 'T');
};
scwin.udc_drAcctCd_onblurNameEvent = function (e) {
  scwin.f_openPopUpBefore('dr', txt_drAcctNm, ed_drAcctCd, 'T');
};

// 대변계정코드 udc
scwin.udc_crAcctCd_onclickEvent = function (e) {
  // 26.03.25 개선요청: pWinCloseTF 'F' > 'T' 변경
  scwin.f_openPopUp('cr', 'T');
};
scwin.udc_crAcctCd_onblurNameEvent = function (e) {
  scwin.f_openPopUpBefore('cr', txt_crAcctNm, ed_crAcctCd, 'T');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_cndArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'cnd_lc_pchsSellClsCd',style:'width: 100px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:ds_search.pchsSellClsCd',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_txt_opusCode',style:'width: 150px;',ref:'data:ds_search.opusCode',objType:'data',mandatory:'true',title:'OPUS코드',maxlength:'10'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'코드명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_txt_opusCodeNm',style:'width: 150px;',ref:'data:ds_search.opusCodeNm',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'cnd_lc_useYn',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_search.useYn',displayMode:'label',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'OPUS코드 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_runExcel',gridID:'gr_master',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true',fixedColumn:'3',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'매출입구분',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'코드',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'코드명',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'귀속부서코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'귀속부서명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'차변계정코드',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'차변계정명',width:'120'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column27',value:'대변계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'대변계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'사용여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'pchsSellClsCd',inputType:'select',removeBorderStyle:'false',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'opusCode',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'opusCodeNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctDeptCd',inputType:'text',removeBorderStyle:'false',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',textAlign:'left',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drAcctCd',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drAcctNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'crAcctCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'crAcctNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'useYn',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_detailArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출입구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_pchsSellClsCd',ref:'data:ds_master.pchsSellClsCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data',mandatory:'true',title:'매출입구분'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'OPUS코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_opusCode',style:'width: 150px;',ref:'data:ds_master.opusCode',title:'OPUS코드',mandatory:'true',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'코드명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_opusCodeNm',style:'width: 200px;',ref:'data:ds_master.opusCodeNm',objType:'data',mandatory:'true',title:'코드명'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo3',codeId:'ed_acctDeptCd',validTitle:'귀속부서',nameId:'txt_acctDeptNm',style:'',id:'udc_acctDeptCd',btnId:'btn_acctDeptCd','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent',refDataCollection:'ds_master',code:'acctDeptCd',name:'acctDeptNm',mandatoryCode:'true',objTypeCode:'data',objTypeName:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차변계정코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_drAcctCd',nameId:'txt_drAcctNm',popupID:'',selectID:'retrieveAcctCdInfo',style:'',validTitle:'차변계정코드',id:'udc_drAcctCd',btnId:'btn_drAcctCd','ev:onclickEvent':'scwin.udc_drAcctCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_drAcctCd_onblurNameEvent',refDataCollection:'ds_master',code:'drAcctCd',name:'drAcctNm',mandatoryCode:'true',objTypeCode:'data',objTypeName:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대변계정코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_crAcctCd',nameId:'txt_crAcctNm',popupID:'',selectID:'retrieveAcctCdInfo',style:'',validTitle:'대변계정코드',id:'udc_crAcctCd',btnId:'btn_crAcctCd','ev:onclickEvent':'scwin.udc_crAcctCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_crAcctCd_onblurNameEvent',refDataCollection:'ds_master',code:'crAcctCd',name:'crAcctNm',mandatoryCode:'true',objTypeCode:'data',objTypeName:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_useYn',ref:'data:ds_master.useYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_rmk',style:'',ref:'data:ds_master.rmk',objType:'data'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_add',style:'',type:'button','ev:onclick':'scwin.f_Add',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'btn_update',style:'',type:'button','ev:onclick':'scwin.f_Update',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.f_Delete',objType:'ctrlBtn',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})