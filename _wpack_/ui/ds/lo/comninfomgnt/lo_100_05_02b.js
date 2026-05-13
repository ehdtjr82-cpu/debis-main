/*amd /ui/ds/lo/comninfomgnt/lo_100_05_02b.xml 39933 b03b64c3e05dde4fec586c47720d4d730e0baba0bc616adc6ba048a0b4efca3c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lo370',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goodsCd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goodsNm',name:'품목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'balUnpaidProcUnitClsCd',name:'처리단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'balUnpaidRndClsCd',name:'반올림구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'volBalUnpaidProcUnitClscd',name:'처리단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'volRndClsCd',name:'반올림구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareTonAdptUnitClsCd',name:'운임톤;기본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareTonAdptRt',name:'운임톤;적용비율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col13',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col14',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col15',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col16',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col17',name:'name17',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'selpchItemCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'goodsCd',name:'goodsCd',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comninfomgnt.RetrieveManagementPatternListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_lo370","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_lo370","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comninfomgnt.SaveManagementPatternListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_lo370","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.pos_rowSts = 0;
scwin.olddata = "";
scwin.onpageload = function () {
  //공통코드- 소유구분
  const codeOptions = [{
    grpCd: "SD143",
    compID: "gr_lo370:balUnpaidProcUnitClsCd,gr_lo370:volBalUnpaidProcUnitClscd"
  }, {
    grpCd: "FS090",
    compID: "gr_lo370:balUnpaidRndClsCd,gr_lo370:volRndClsCd"
  }, {
    grpCd: "LO101",
    compID: "gr_lo370:fareTonAdptUnitClsCd",
    opt: {
      "range": "1,Y"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//초기화
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
  $c.gus.cfDisableKey($p);
  ed_clntNo.focus();
};

//조회
scwin.f_Retrieve = async function (e) {
  if (ds_lo370.getModifiedIndex().length > 0) {
    let confirm = await $c.win.confirm($p, "변경 사항이 존재합니다. 진행하시겠습니까?");
    if (confirm) {
      ds_lo370.removeAll();
      dma_retrieve.set("clntNo", ed_clntNo.getValue());
      dma_retrieve.set("selpchItemCd", ed_selpchItemCd.getValue());
      dma_retrieve.set("goodsCd", ed_goodsCd.getValue());
      $c.sbm.execute($p, sbm_retrieve);
    }
  } else {
    ds_lo370.removeAll();
    dma_retrieve.set("clntNo", ed_clntNo.getValue());
    dma_retrieve.set("selpchItemCd", ed_selpchItemCd.getValue());
    dma_retrieve.set("goodsCd", ed_goodsCd.getValue());
    $c.sbm.execute($p, sbm_retrieve);
  }
};

//조회 callback
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

  let nCnt = ds_lo370.getRowCount();
  if (nCnt > 0) {
    ds_lo370.setRowPosition(0);
    gr_lo370.setFocusedCell(0, 0);
    total.setValue(nCnt);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// function name : f_openCommonPopUp
// function desc : popup
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    //거래처 조회	    
    case 1:
      udc_comCode_clnt.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, txt_clntNm);
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , '150,170' // 보여주는 각 컬럼들의 폭	
      , '3,4,5,6,7,8,9,10' // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , '거래처 조회,거래처코드 ,거래처명 ' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;

    //매출입항목
    case 2:
      udc_comCode_selp.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_selpchItemCd, txt_selpchItemNm);
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , '150,170' // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , '매출입항목조회,항목코드,항목명' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;

    //품목			
    case 3:
      udc_comCode_good.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_goodsCd, txt_goodsNm);
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '3' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "품목코드,품목" // Title순서	
      , '150,170' // 보여주는 각 컬럼들의 폭	
      , '3,4,5,6,7,8,9,10' // 컬럼중에서 숨기는	컬럼 지정	
      , '2,3' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '440' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , 'F' // 전체검색허용여부	("F")
      , "품목조회,품목코드,품목" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 품명 조회 Popup 처리 : 그리드에서 입력된 코드정보로 품명을 조회
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = function (row, pColid, pClose) {
  var pCode = "";
  var pName = "";
  var pAllSearch = 'F';
  switch (pColid) {
    //거래처코드
    case "clntNo":
      pCode = ds_lo370.getCellData(row, "clntNo");
      ds_lo370.setCellData(row, "clntNo", "");
      ds_lo370.setCellData(row, "clntNm", "");
      udc_grd.setSelectId('retrieveClntList');
      udc_grd.cfCommonPopUp(function (rtnList) {
        scwin.popupOpen = false;
        if (rtnList == null || rtnList[0] == "N/A") {
          return;
        }
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_lo370, row, "clntNo", "clntNm");
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , '150,170' // 보여주는 각 컬럼들의 폭	
      , '3,4,5,6,7,8,9,10' // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , '거래처 조회,거래처코드 ,거래처명 ' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;

    //거래처명
    case "clntNm":
      pName = ds_lo370.getCellData(row, "clntNm");
      ds_lo370.setCellData(row, "clntNo", "");
      ds_lo370.setCellData(row, "clntNm", "");
      udc_grd.setSelectId('retrieveClntList');
      udc_grd.cfCommonPopUp(function (rtnList) {
        scwin.popupOpen = false;
        if (rtnList == null || rtnList[0] == "N/A") {
          return;
        }
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_lo370, row, "clntNo", "clntNm");
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , '150,170' // 보여주는 각 컬럼들의 폭	
      , '3,4,5,6,7,8,9,10' // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , '거래처 조회,거래처코드 ,거래처명 ' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;

    //매출입항목코드  
    case "selpchItemCd":
      pCode = ds_lo370.getCellData(row, "selpchItemCd");
      ds_lo370.setCellData(row, "selpchItemCd", "");
      ds_lo370.setCellData(row, "selpchItemNm", "");
      udc_grd.setSelectId('retrieveSelpchItemInfo');
      udc_grd.cfCommonPopUp(function (rtnList) {
        scwin.popupOpen = false;
        if (rtnList == null || rtnList[0] == "N/A") {
          return;
        }
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_lo370, row, "selpchItemCd", "selpchItemNm");
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , '150,170' // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , '매출입항목조회,항목코드,항목명' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;

    //매출입항목  
    case "selpchItemNm":
      pName = ds_lo370.getCellData(row, "selpchItemNm");
      ds_lo370.setCellData(row, "selpchItemCd", "");
      ds_lo370.setCellData(row, "selpchItemNm", "");
      udc_grd.setSelectId('retrieveSelpchItemInfo');
      udc_grd.cfCommonPopUp(function (rtnList) {
        scwin.popupOpen = false;
        if (rtnList == null || rtnList[0] == "N/A") {
          return;
        }
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_lo370, row, "selpchItemCd", "selpchItemNm");
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , '150,170' // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , '매출입항목조회,항목코드,항목명' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;

    //품목코드  
    case "goodsCd":
      pCode = ds_lo370.getCellData(row, "goodsCd");
      ds_lo370.setCellData(row, "goodsCd", "");
      ds_lo370.setCellData(row, "goodsNm", "");
      udc_grd.setSelectId('retrieveCommInfo');
      udc_grd.cfCommonPopUp(function (rtnList) {
        scwin.popupOpen = false;
        if (rtnList == null || rtnList[0] == "N/A") {
          return;
        }
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_lo370, row, "goodsCd", "goodsNm");
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '3' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "품목코드,품목" // Title순서	
      , '150,170' // 보여주는 각 컬럼들의 폭	
      , '3,4,5,6,7,8,9,10' // 컬럼중에서 숨기는	컬럼 지정	
      , '2,3' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '440' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , 'F' // 전체검색허용여부	("F")
      , "품목조회,품목코드,품목" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;

    //품목  
    case "goodsNm":
      pName = ds_lo370.getCellData(row, "goodsNm");
      ds_lo370.setCellData(row, "goodsCd", "");
      ds_lo370.setCellData(row, "goodsNm", "");
      udc_grd.setSelectId('retrieveCommInfo');
      udc_grd.cfCommonPopUp(function (rtnList) {
        scwin.popupOpen = false;
        if (rtnList == null || rtnList[0] == "N/A") {
          return;
        }
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_lo370, row, "goodsCd", "goodsNm");
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '3' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "품목코드,품목" // Title순서	
      , '150,170' // 보여주는 각 컬럼들의 폭	
      , '3,4,5,6,7,8,9,10' // 컬럼중에서 숨기는	컬럼 지정	
      , '2,3' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '440' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , 'F' // 전체검색허용여부	("F")
      , "품목조회,품목코드,품목" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

// for=gr_lo370 event=OnPopup(row,colid,data)
scwin.gr_lo370_ontextimageclick = function (row, columnIndex) {
  var colid = gr_lo370.getFocusedColumnID();
  if (scwin.popupOpen) {
    // onafteredit 이벤트랑 중복발생방지
    return;
  }
  switch (colid) {
    case "clntNo":
      scwin.f_openCommPopUpGrid(row, "clntNo", 'F');
      break;
    case "clntNm":
      scwin.f_openCommPopUpGrid(row, "clntNm", 'F');
      break;
    case "selpchItemCd":
      scwin.f_openCommPopUpGrid(row, "selpchItemCd", 'F');
      break;
    case "selpchItemNm":
      scwin.f_openCommPopUpGrid(row, "selpchItemNm", 'F');
      break;
    case "goodsCd":
      scwin.f_openCommPopUpGrid(row, "goodsCd", 'F');
      break;
    case "goodsNm":
      scwin.f_openCommPopUpGrid(row, "goodsNm", 'F');
      break;
  }
};
scwin.gr_lo370_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.olddata = value;
};

// for=gr_lo370 event=OnExit(row,Colid,olddata)
scwin.gr_lo370_onafteredit = function (row, columnIndex, value) {
  var Colid = gr_lo370.getFocusedColumnID();
  switch (Colid) {
    case "clntNo":
      if (value != "" && value != scwin.olddata) {
        ds_lo370.setCellData(row, "clntNm", "");
        ds_lo370.setCellData(row, "clntNo", value);
        scwin.popupOpen = true;
        scwin.f_openCommPopUpGrid(row, "clntNo", 'T');
      } else if (value == "") {
        ds_lo370.setCellData(row, "clntNo", "");
        ds_lo370.setCellData(row, "clntNm", "");
      }
      break;
    case "clntNm":
      if (value != "" && value != scwin.olddata) {
        ds_lo370.setCellData(row, "clntNo", "");
        ds_lo370.setCellData(row, "clntNm", value);
        scwin.popupOpen = true;
        scwin.f_openCommPopUpGrid(row, "clntNm", 'T');
      } else if (value == "") {
        ds_lo370.setCellData(row, "clntNo", "");
        ds_lo370.setCellData(row, "clntNm", "");
      }
      break;
    case "selpchItemCd":
      if (value != "" && value != scwin.olddata) {
        ds_lo370.setCellData(row, "selpchItemNm", "");
        ds_lo370.setCellData(row, "selpchItemCd", value);
        scwin.popupOpen = true;
        scwin.f_openCommPopUpGrid(row, "selpchItemCd", 'T');
      } else if (value == "") {
        ds_lo370.setCellData(row, "selpchItemCd", "");
        ds_lo370.setCellData(row, "selpchItemNm", "");
      }
      break;
    case "selpchItemNm":
      if (value != "" && value != scwin.olddata) {
        ds_lo370.setCellData(row, "selpchItemCd", "");
        ds_lo370.setCellData(row, "selpchItemNm", value);
        scwin.popupOpen = true;
        scwin.f_openCommPopUpGrid(row, "selpchItemNm", 'T');
      } else if (value == "") {
        ds_lo370.setCellData(row, "selpchItemCd", "");
        ds_lo370.setCellData(row, "selpchItemNm", "");
      }
      break;
    case "goodsCd":
      if (value != "" && value != scwin.olddata) {
        ds_lo370.setCellData(row, "goodsNm", "");
        ds_lo370.setCellData(row, "goodsCd", value);
        scwin.popupOpen = true;
        scwin.f_openCommPopUpGrid(row, "goodsCd", 'T');
      } else if (value == "") {
        ds_lo370.setCellData(row, "goodsCd", "");
        ds_lo370.setCellData(row, "goodsNm", "");
      }
      break;
    case "goodsNm":
      if (value != "" && value != scwin.olddata) {
        ds_lo370.setCellData(row, "goodsCd", "");
        ds_lo370.setCellData(row, "goodsNm", value);
        scwin.popupOpen = true;
        scwin.f_openCommPopUpGrid(row, "goodsNm", 'T');
      } else if (value == "") {
        ds_lo370.setCellData(row, "goodsCd", "");
        ds_lo370.setCellData(row, "goodsNm", "");
      }
      break;
  }
};

//grid row change....
scwin.gr_lo370_onrowindexchange = function (rowIndex, oldRow) {
  $c.gus.cfPrepareHidVal($p, ds_lo370, rowIndex, ["clntNo", "clntNm", "selpchItemCd", "selpchItemNm", "goodsCd", "goodsNm"]);

  /*grid row의 status값에 따라 수정가능 여부 check*/
  if (ds_lo370.getRowStatusValue(rowIndex) != "0") {
    //조회(초기상태) 가 아니면
    gr_lo370.setCellReadOnly(rowIndex, "clntNo", false);
    gr_lo370.setCellReadOnly(rowIndex, "clntNm", false);
    gr_lo370.setCellReadOnly(rowIndex, "selpchItemCd", false);
    gr_lo370.setCellReadOnly(rowIndex, "selpchItemNm", false);
    gr_lo370.setCellReadOnly(rowIndex, "goodsCd", false);
    gr_lo370.setCellReadOnly(rowIndex, "goodsNm", false);
  } else {
    gr_lo370.setCellReadOnly(rowIndex, "clntNo", true);
    gr_lo370.setCellReadOnly(rowIndex, "clntNm", true);
    gr_lo370.setCellReadOnly(rowIndex, "selpchItemCd", true);
    gr_lo370.setCellReadOnly(rowIndex, "selpchItemNm", true);
    gr_lo370.setCellReadOnly(rowIndex, "goodsCd", true);
    gr_lo370.setCellReadOnly(rowIndex, "goodsNm", true);
  }
};

//행추가 (선택된 행의 data값을 복사 -> CopyRecord)
scwin.addRow = function () {
  let rowIndex = ds_lo370.getRowCount();
  if (ds_lo370.getRowCount() == 0) {
    ds_lo370.insertRow(rowIndex);
    ds_lo370.setCellData(rowIndex, "fareTonAdptRt", 1.133);
  } else {
    if (ds_lo370.getRowPosition() == null) {
      gr_lo370.setFocusedCell(0, 0);
    }
    $c.gus.cfCopyRecord($p, gr_lo370);
  }

  // "행추가" 시 추가된 행으로 포커스 이동하도록 개선요청
  gr_lo370.setFocusedCell(rowIndex, 0);
};
scwin.deleteRow = function () {
  var rowIndex = ds_lo370.getRowPosition();
  if (ds_lo370.getRowStatus(rowIndex) == "C") {
    ds_lo370.removeRow(rowIndex);
  } else {
    ds_lo370.deleteRow(rowIndex);
  }

  // "행삭제", "취소" 시 추가된 행 바로 위 행으로 포커스 이동하도록 개선요청
  gr_lo370.setFocusedCell(rowIndex - 1, 0);
};
scwin.cancelRow = function () {
  var rowIndex = ds_lo370.getRowPosition();
  $c.data.undoRow($p, ds_lo370, "Y");

  // "행삭제", "취소" 시 추가된 행 바로 위 행으로 포커스 이동하도록 개선요청
  gr_lo370.setFocusedCell(rowIndex - 1, 0);
};

//저장 
scwin.f_Save = async function (e) {
  if (await scwin.f_ReqFieldChk()) {
    let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirm) {
      $c.sbm.execute($p, sbm_save);
    }
  }
};
//저장 validate 체크
scwin.f_ReqFieldChk = async function () {
  //변경한 데이터가 있는지 체크한다. 
  if (ds_lo370.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["금액물량관리유형"]); //"@은(는) 변경된 사항이 없습니다.";
    return;
  }
  //거래처, 매출입항목, 품목 Primary Key 
  for (i = 0; i < ds_lo370.getRowCount(); i++) {
    for (j = i + 1; j < ds_lo370.getRowCount(); j++) {
      if (ds_lo370.getCellData(i, "clntNo") == ds_lo370.getCellData(j, "clntNo") && ds_lo370.getCellData(i, "selpchItemCd") == ds_lo370.getCellData(j, "selpchItemCd") && ds_lo370.getCellData(i, "goodsCd") == ds_lo370.getCellData(j, "goodsCd")) {
        await $c.gus.cfAlertMsg($p, "금액물량관리유형 " + j + "번째 데이터에서 거래처, 매출입항목, 품목은(는) 중복될 수 없습니다.");
        return;
      }
    }
  }
  if (!(await $c.gus.cfValidate($p, [gr_lo370], null, true))) {
    return;
  }
  return true;
};

//저장 callback
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  ds_lo370.modifyAllStatus("R");
  await scwin.f_Retrieve();
};

// 엑셀다운로드 함수
scwin.cfGridToExcel = async function () {
  var fileName = "거래처별금액물량관리유형 목록";
  await $c.data.downloadGridViewExcel($p, gr_lo370, {
    fileName: fileName + ".xlsx",
    sheetName: fileName
  });
};

// ----------------------------------------------------------------------------------
// 조회조건 udc 이벤트
// ----------------------------------------------------------------------------------

// 거래처
scwin.udc_comCode_clnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, txt_clntNm, 1);
};
scwin.udc_comCode_clnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_clntNm, ed_clntNo, 1, false);
};
scwin.udc_comCode_clnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), txt_clntNm.getValue(), 'F', 'F');
};

// 매출입항목
scwin.udc_comCode_selp_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_selpchItemCd, txt_selpchItemNm, 2);
};
scwin.udc_comCode_selp_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_selpchItemNm, ed_selpchItemCd, 2, false);
};
scwin.udc_comCode_selp_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_selpchItemCd.getValue(), txt_selpchItemNm.getValue(), 'F', 'F');
};

// 품목
scwin.udc_comCode_good_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_goodsCd, txt_goodsNm, 3);
};
scwin.udc_comCode_good_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_goodsNm, ed_goodsCd, 3, false);
};
scwin.udc_comCode_good_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_goodsCd.getValue(), txt_goodsNm.getValue(), 'F', 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_clntNo',nameId:'txt_clntNm',id:'udc_comCode_clnt',allowCharCode:'0-9',selectID:'retrieveClntList','ev:onclickEvent':'scwin.udc_comCode_clnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_clnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_clnt_onviewchangeNameEvent',maxlengthCode:'6',objTypeCode:'data',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_selpchItemCd',nameId:'txt_selpchItemNm',id:'udc_comCode_selp',UpperFlagCode:'1',maxlengthCode:'4',selectID:'retrieveSelpchItemInfo','ev:onclickEvent':'scwin.udc_comCode_selp_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_selp_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_selp_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9',objTypeName:'data',objTypeCode:'data',maxlengthName:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_goodsCd',nameId:'txt_goodsNm',id:'udc_comCode_good',maxlengthCode:'8',selectID:'retrieveCommInfo','ev:onclickEvent':'scwin.udc_comCode_good_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_good_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_good_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',objTypeCode:'data',objTypeName:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처별금액물량관리유형 목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_lo370',btnUser:'Y',btnPlusYn:'Y',gridDownYn:'Y',templateYn:'N',gridDownUserAuth:'X',gridDownFn:'scwin.cfGridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_lo370',id:'gr_lo370',style:'',visibleRowNum:'16',visibleRowNumFix:'true',focusMode:'row',focusMove:'true',rowStatusVisible:'true','ev:onrowindexchange':'scwin.gr_lo370_onrowindexchange','ev:ontextimageclick':'scwin.gr_lo370_ontextimageclick','ev:onbeforeedit':'scwin.gr_lo370_onbeforeedit','ev:onafteredit':'scwin.gr_lo370_onafteredit',validFeatures:'ignoreStatus=no',dataName:'금액물량관리유형',validExp:'balUnpaidProcUnitClsCd:금액관리 처리단위:yes:minLength=1,balUnpaidRndClsCd:금액관리 반올림구분:yes:minLength=1,volBalUnpaidProcUnitClscd:물량관리 처리단위:yes:minLength=1,volRndClsCd:물량관리 반올림구분:yes:minLength=1,fareTonAdptRt:운임톤 적용비율:ye:minNumber=0.001 '},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'거래처',width:'140',colSpan:'2',rowSpan:'',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'매출입항목',width:'140',colSpan:'2',rowSpan:'',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'품목',width:'140',colSpan:'2',rowSpan:'',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'금액관리',width:'140',colSpan:'2',rowSpan:'',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'물량관리',width:'140',colSpan:'2',rowSpan:'',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column21',value:'운임톤<br/>기본',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'운임톤<br/>적용비율',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'코드',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'거래처명',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'코드',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'항목명',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'코드',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'품목명',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'처리단위',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'반올림구분',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'처리단위',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'반올림구분',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'70',allowChar:'0-9',maxLength:'6'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'textImage',style:'',value:'',width:'100',textAlign:'left',viewType:'default',maxLength:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',style:'',value:'',width:'70',maxLength:'4',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'textImage',style:'',value:'',width:'100',textAlign:'left',viewType:'default',maxLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'goodsCd',inputType:'text',style:'',value:'',width:'70',maxLength:'8',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'goodsNm',inputType:'textImage',style:'',value:'',width:'100',textAlign:'left',viewType:'default',maxLength:'100'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'balUnpaidProcUnitClsCd',inputType:'select',style:'',value:'',width:'100',mandatory:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'balUnpaidRndClsCd',inputType:'select',style:'',value:'',width:'100',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'volBalUnpaidProcUnitClscd',inputType:'select',style:'',value:'',width:'100',mandatory:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'volRndClsCd',value:'',displayMode:'value delim label',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',style:'',id:'fareTonAdptUnitClsCd',value:'',displayMode:'value delim label',emptyItem:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fareTonAdptRt',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###.###',mandatory:'true',maxLength:'3.3',excelCellType:'number',excelFormat:'#,##0.##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',progressBarSwitch:'Y',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'',style:'display: none;',id:'udc_grd'}},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',btnCancelYn:'Y',gridID:'gr_lo370',rowAddFunction:'scwin.addRow',id:'udc_bottomGrdBtn',cancelObjType:'data',rowAddObjType:'data',rowDelObjType:'data',rowDelUserAuth:'D',rowAddUserAuth:'C',btnRowAddObj:'btn_add',btnRowDelObj:'btn_del',btnCancelObj:'btn_cls',rowDelFunction:'scwin.deleteRow',cancelFunction:'scwin.cancelRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})