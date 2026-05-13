/*amd /ui/tn/sd/odrmgnt/bulkodrreg/tn_202_02_02p.xml 21381 debdf550a254f8987c770bd0a5246f4ec57800c33841f1c0d89d810b1489efea */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ctrtNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'contractNumber',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_reqClntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bilgClntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_realMchtClntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'ctrtNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'clntPicNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'ctrtStDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'ctrtEndDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'taxnClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'rmk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'mgntTrgtClntYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'empNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'empNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocRt',name:'allocRt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDistrictCd',name:'ctrtDistrictCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'crcCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'regBranNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'label',name:'클릭시 표기할 라벨용',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveClntNo',action:'/ncall.ds.sd.odrmgnt.odrreg.RetrieveContractBasisCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_ctrtNo","key":"IN_DS1"},{"id":"ds_reqClntNo","key":"OUT_DS1"},{"id":"ds_bilgClntNo","key":"OUT_DS2"},{"id":"ds_realMchtClntNo","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_reqClntNo","key":"OUT_DS1"},{"id":"ds_bilgClntNo","key":"OUT_DS2"},{"id":"ds_realMchtClntNo","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveClntNo_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*
    NTIS/오더관리/벌크오더등록/계약번호조회

    호출가능한화면
    tn_202_02_01b 웹연계벌크오더등록
    tn_202_02_05b 벌크오더등록 - 계약번호 팝업
*/

// scwin.arrRtnVal = new Array();
scwin.paramTitle = "";
scwin.indexCtrtNo = "";
scwin.gubun2 = "";

//화면로딩시
scwin.onpageload = async function () {
  scwin.params = $c.data.getParameter($p);
  scwin.paramTitle = scwin.params["paramTitle"];
  scwin.indexCtrtNo = scwin.params["indexCtrtNo"];
  var ds = scwin.params["ds_ctrtNo"];
  if (ds != null && ds != "") {
    $c.gus.cfCopyDataSet($p, ds, ds_ctrtNo);
  }
  var idx;
  if (scwin.indexCtrtNo != "") {
    lc_ctrtNo.setValue(scwin.indexCtrtNo);
    idx = lc_ctrtNo.getSelectedIndex();
  } else {
    lc_ctrtNo.setSelectedIndex(-1);
    idx = null;
  }
  if (!(idx < 0 || idx == null)) {
    scwin.f_retrieveClntList();
  }
};
scwin.onUdcCompleted = function () {
  if (scwin.params["hid_reqClntNo"] != null && scwin.params["hid_reqClntNo"] != "") {
    ed_reqClntNo.setValue(scwin.params["hid_reqClntNo"]);
  }
  if (scwin.params["hid_reqClntNm"] != null && scwin.params["hid_reqClntNm"] != "") {
    ed_reqClntNo.setValue(scwin.params["hid_reqClntNm"]);
  }
  if (scwin.params["hid_bilgClntNo"] != null && scwin.params["hid_bilgClntNo"] != "") {
    ed_bilgClntNo.setValue(scwin.params["hid_bilgClntNo"]);
  }
  if (scwin.params["hid_bilgClntNm"] != null && scwin.params["hid_bilgClntNm"] != "") {
    txt_bilgClntNm.setValue(scwin.params["hid_bilgClntNm"]);
  }
  if (scwin.params["hid_realMchtClntNo"] != null && scwin.params["hid_realMchtClntNo"] != "") {
    ed_realMchtClntNo.setValue(scwin.params["hid_realMchtClntNo"]);
  }
  if (scwin.params["hid_realMchtClntNm"] != null && scwin.params["hid_realMchtClntNm"] != "") {
    txt_realMchtClntNm.setValue(scwin.params["hid_realMchtClntNm"]);
  }
};

//계약번호에 해당 되는 청구/요청거래처/실화주거래처 정보 조회
scwin.f_retrieveClntList = function () {
  var ctrtNo = lc_ctrtNo.getValue();
  if (ctrtNo == "선택") {
    //청구/요청거래처/실화주거래처 정보 clear	
    scwin.f_clearDataByClntNos();
  } else {
    // tr_retrieveClntNo.Action = "/ds.sd.odrmgnt.odrreg.RetrieveContractBasisCMD.do?contractNumber=" + ctrtNo; 
    // tr_retrieveClntNo.Post();
    dma_ctrtNo.set("contractNumber", ctrtNo);
    $c.sbm.execute($p, sbm_retrieveClntNo);
  }
};
scwin.f_save = function () {
  var arrRtnVal = [];
  arrRtnVal[0] = lc_ctrtNo.getSelectedIndex();
  arrRtnVal[1] = ed_reqClntNo.getValue();
  arrRtnVal[2] = ed_bilgClntNo.getValue();
  arrRtnVal[3] = ed_realMchtClntNo.getValue();
  arrRtnVal[4] = txt_reqClntNm.getValue();
  arrRtnVal[5] = txt_bilgClntNm.getValue();
  arrRtnVal[6] = txt_realMchtClntNm.getValue();
  $c.win.closePopup($p, arrRtnVal);
};
scwin.f_close = function () {
  var arrRtnVal = [];
  arrRtnVal[0] = lc_ctrtNo.getSelectedIndex();
  arrRtnVal[1] = ed_reqClntNo.getValue();
  arrRtnVal[2] = ed_bilgClntNo.getValue();
  arrRtnVal[3] = ed_realMchtClntNo.getValue();
  if (arrRtnVal[0] == 0) {
    arrRtnVal[0] = -1;
  }
  $c.win.closePopup($p, arrRtnVal);
};

//공통팝업 열기
scwin.f_openCommonPopUp = function (gubun1, gubun2, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var pCode = "";
  var pName = "";
  var pWhere = "";
  var pWtitleSearch = "";
  var pSelectID = "";
  var pWhere = "";
  var rtnList = new Array();
  var udcNm = "";
  scwin.gubun2 = gubun2;
  switch (gubun1) {
    case 1:
      //계약거래처 팝업
      if (gubun2 == "CTRT") {//계약거래처
        /*
        pCode = ed_ctrtClntNo.Text.trim();							
        if(pNoDataCloseTF == "T"){
            ed_reqClntNo.hidVal	 = pCode;
            txt_reqClntNm.Index	 = -1;
        }
        pName = ed_ctrtClntNm.Text;
        pWtitleSearch = "계약 거래처,거래처코드,거래처명";
        pWhere = ",CTRT,CTRT";
        */
      } else if (gubun2 == "REQ") {
        //요청거래처
        pCode = ed_reqClntNo.getValue().trim();
        if (pNoDataCloseTF == "T") {
          // ed_reqClntNo.hidVal	 = pCode;
          ed_reqClntNo.setValue(pCode);
          // txt_reqClntNm.Index	 = -1;
        }
        pName = txt_reqClntNm.getValue();
        pWtitleSearch = "요청 거래처,거래처코드/명";
        pWhere = ",,CTRT";
        udcNm = udc_reqClntNo;
      } else if (gubun2 == "BILG") {
        //청구거래처
        pCode = ed_bilgClntNo.getValue().trim();
        if (pNoDataCloseTF == "T") {
          // ed_bilgClntNo.hidVal = pCode;
          ed_reqClntNo.setValue(pCode);
          // txt_bilgClntNm.Index	 = -1;
        }
        pName = txt_bilgClntNm.getValue();
        pWtitleSearch = "청구 거래처,거래처코드/명";
        pWhere = ",,CTRT";
        udcNm = udc_bilgClntNo;
      } else if (gubun2 == "REAL") {
        //실화주거래처
        pCode = ed_realMchtClntNo.getValue().trim();
        if (pNoDataCloseTF == "T") {
          // ed_realMchtClntNo.hidVal = pCode;
          ed_realMchtClntNo.setValue(pCode);
          // txt_realMchtClntNm.Index	 = -1;
        }
        pName = txt_realMchtClntNm.getValue();
        pWtitleSearch = "실화주 거래처,거래처코드/명";
        pWhere = ",,CTRT";
        udcNm = udc_realMchtClntNo;
      }

      // rtnList = cfCommonPopUp("retrieveClntInfo_tpro",		//pSelectID
      udcNm.cfCommonPopUp(scwin.udc_callBackFun, pCode,
      //pCode
      pName,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      '9',
      //pDispCnt
      "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,",
      //pTitle
      '100,100,0,120,100,0,100,100,100,0',
      //pWidth
      "3,10",
      //pHidden
      pWhere,
      //pWhere
      '800',
      //pW
      '600',
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부	("F")
      pWtitleSearch,
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      pNoDataCloseTF,
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      null);
      break;
  }
};
scwin.udc_callBackFun = function (rtnList) {
  var gubun2 = scwin.gubun2;
  scwin.gubun2 = "";
  if (gubun2 == "CTRT") {//계약거래처
    /*
    cfSetReturnValue(rtnList, ed_ctrtClntNo, ed_ctrtClntNm);	
    f_retrieveCtrtNo(); //계약번호 가져오기		
    */
  } else {
    if (rtnList != null) {
      if (rtnList[0] != "N/A") {
        if (gubun2 == "REQ") {
          //요청거래처
          ed_reqClntNo.setValue(rtnList[0]);
          // ed_reqClntNo.hidVal = rtnList[0]; 
          txt_reqClntNm.setValue(rtnList[1]);

          //사용자편의를 위하여 데이터셋에 추가
          var sameYn = "N";
          for (i = 0; i < ds_reqClntNo.getTotalRow(); i++) {
            if (ed_reqClntNo.getValue() == ds_reqClntNo.getCellData(i, "clntNo")) {
              sameYn = "Y";
              // txt_reqClntNm.Index = i-1; ?
              return;
            }
          }
          if (sameYn == "N") {
            ds_reqClntNo.insertRow();
            ds_reqClntNo.setCellData(ds_reqClntNo.getRowPosition(), "clntNo", rtnList[0]);
            txt_reqClntNm.setValue(rtnList[1]);
          }
        } else if (gubun2 == "BILG") {
          //청구거래처
          ed_bilgClntNo.setValue(rtnList[0]);
          // ed_bilgClntNo.hidVal = rtnList[0];
          txt_bilgClntNm.setValue(rtnList[1]);

          //사용자편의를 위하여 데이터셋에 추가
          var sameYn = "N";
          for (i = 0; i < ds_bilgClntNo.getTotalRow(); i++) {
            if (ed_bilgClntNo.getValue() == ds_bilgClntNo.getCellData(i, "clntNo")) {
              sameYn = "Y";
              // txt_bilgClntNm.Index = i; ?
              return;
            }
          }
          if (sameYn == "N") {
            ds_bilgClntNo.insertRow();
            ds_bilgClntNo.setCellData(ds_bilgClntNo.getRowPosition(), "clntNo", rtnList[0]);
            txt_bilgClntNm.setValue(rtnList[1]);
          }
        } else if (gubun2 == "REAL") {
          //실화주거래처
          ed_realMchtClntNo.setValue(rtnList[0]);
          // ed_realMchtClntNo.hidVal = rtnList[0];
          txt_realMchtClntNm.setValue(rtnList[1]);

          //사용자편의를 위하여 데이터셋에 추가
          var sameYn = "N";
          for (i = 0; i < ds_realMchtClntNo.getTotalRow(); i++) {
            if (ed_realMchtClntNo.getValue() == ds_realMchtClntNo.getCellData(i, "clntNo")) {
              sameYn = "Y";
              // txt_realMchtClntNm.Index = i; ?
              return;
            }
          }
          if (sameYn == "N") {
            ds_realMchtClntNo.insertRow();
            ds_realMchtClntNo.setCellData(ds_realMchtClntNo.getRowPosition(), "clntNo", rtnList[0]);
            txt_realMchtClntNm.setValue(rtnList[1]);
          }
        }
      }
    } else {
      if (gubun2 == "REQ") {
        //요청거래처
        $c.gus.cfInitObjects($p, [ed_reqClntNo]);
        $c.gus.cfInitHidVal($p, [ed_reqClntNo]);
        // txt_reqClntNm.Index = -1;
      } else if (gubun2 == "BILG") {
        //청구거래처
        $c.gus.cfInitObjects($p, [ed_bilgClntNo]);
        $c.gus.cfInitHidVal($p, [ed_bilgClntNo]);
        // txt_bilgClntNm.Index = -1;
      } else if (gubun2 == "REAL") {
        //실화주거래처
        $c.gus.cfInitObjects($p, [ed_realMchtClntNo]);
        $c.gus.cfInitHidVal($p, [ed_realMchtClntNo]);
        // txt_realMchtClntNm.Index = -1;
      }
    }
  }
};
scwin.lc_ctrtNo_onchange = function (info) {
  scwin.f_retrieveClntList();
};
scwin.sbm_retrieveClntNo_submitdone = function (e) {
  //요청거래처 데이터가 없는 경우, 계약거래처를 default로 세팅
  if (ds_reqClntNo.getTotalRow() == 0) {
    ds_reqClntNo.removeAll();
    $c.gus.cfInitObjects($p, [ed_reqClntNo]);
    $c.gus.cfInitHidVal($p, [ed_reqClntNo]);
    ed_reqClntNo.setValue(ds_reqClntNo.getCellData(0, "ctrtClntNo"));
    scwin.f_openCommonPopUp(1, 'REQ', 'T', 'F', 'T');
  } else {
    txt_reqClntNm.setValue(ds_reqClntNo.getCellData(0, "clntNm"));
    ed_reqClntNo.setValue(ds_reqClntNo.getCellData(0, "clntNo"));
  }

  //청구거래처 데이터가 없는 경우
  if (ds_bilgClntNo.getTotalRow() == 0) {
    ds_bilgClntNo.removeAll();
    $c.gus.cfInitObjects($p, [ed_bilgClntNo]);
    $c.gus.cfInitHidVal($p, [ed_bilgClntNo]);
  } else {
    //f_retrieveCtrtNo2();
    txt_bilgClntNm.setValue(ds_bilgClntNo.getCellData(0, "clntNm"));
    ed_bilgClntNo.setValue(ds_bilgClntNo.getCellData(0, "clntNo"));
  }

  //실화주거래처 데이터가 없는 경우, 계약거래처를 default로 세팅
  if (ds_realMchtClntNo.getTotalRow() == 0) {
    ds_realMchtClntNo.removeAll();
    $c.gus.cfInitObjects($p, [ed_realMchtClntNo]);
    $c.gus.cfInitHidVal($p, [ed_realMchtClntNo]);
    ed_realMchtClntNo.setValue(ds_reqClntNo.getCellData(0, "ctrtClntNo"));
    scwin.f_openCommonPopUp(1, 'REAL', 'T', 'F', 'T');
  } else {
    txt_realMchtClntNm.setValue(ds_realMchtClntNo.getCellData(0, "clntNm"));
    ed_realMchtClntNo.setValue(ds_realMchtClntNo.getCellData(0, "clntNo"));
  }
};
scwin.udc_reqClntNo_onviewchangeCodeEvent = function (info) {
  if (ed_reqClntNo.getValue() != "") {
    scwin.f_openCommonPopUp(1, 'REQ', 'T', 'F', 'F');
  } else {
    txt_reqClntNm.setValue("");
  }
};
scwin.udc_bilgClntNo_onviewchangeCodeEvent = function (info) {
  if (ed_bilgClntNo.getValue() != "") {
    scwin.f_openCommonPopUp(1, 'BILG', 'T', 'F', 'F');
  } else {
    txt_bilgClntNm.setValue("");
  }
};
scwin.udc_realMchtClntNo_onviewchangeCodeEvent = function (info) {
  if (ed_realMchtClntNo.getValue() != "") {
    scwin.f_openCommonPopUp(1, 'REAL', 'T', 'F', 'F');
  } else {
    txt_realMchtClntNm.setValue("");
  }
};
scwin.udc_reqClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, 'REQ', 'F', 'F', 'F');
};
scwin.udc_bilgClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, 'BILG', 'F', 'F', 'F');
};
scwin.udc_realMchtClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, 'REAL', 'F', 'F', 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_cndArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_ctrtNo',style:'width:200px;',submenuSize:'auto',mandatory:'true','ev:onchange':'scwin.lc_ctrtNo_onchange',ref:'',objType:'data',validExp:'계약번호:yes',title:'계약번호',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'w2:gridViewItemset',A:{hideHeader:'',rowMouseOver:'',nodeset:'data:ds_ctrtNo',width:'700',selectedRowColor:'',label:'clntPicNm',visibleRowNum:'',autoFit:'',value:'ctrtNo',rowMouseOverColor:'',height:''},E:[{T:1,N:'w2:item',A:{ref:'ctrtNo',hidden:'',header:'',style:'width: 80px;',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'clntPicNm',hidden:'',header:'',style:'width: 60px;',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'empNm',hidden:'',header:'',style:'width: 60px;',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'regBranNm',hidden:'',header:'',style:'width: 100px;',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'rmk',hidden:'',header:'',style:'width: 180px;',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'crcCd',hidden:'',header:'',style:'width: 60px;',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtStDt',hidden:'',header:'',style:'width: 60px;',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtEndDt',hidden:'',header:'',style:'width: 60px;',headerStyle:''}}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_odrInfoArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_reqClntNo',id:'udc_reqClntNo',btnId:'btn_reqClntNo',nameId:'txt_reqClntNm',selectID:'retrieveClntInfo_tpro','ev:onviewchangeCodeEvent':'scwin.udc_reqClntNo_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_reqClntNo_onclickEvent',objTypeCode:'data',objTypeName:'data',validExpCode:'요청처:yes',validExpName:'요청처명:no:maxByteLength=50',readOnlyName:'true',maxlengthName:'50'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_bilgClntNo',codeId:'ed_bilgClntNo',btnId:'btn_bilgClntNo',nameId:'txt_bilgClntNm',selectID:'retrieveClntInfo_tpro','ev:onviewchangeCodeEvent':'scwin.udc_bilgClntNo_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent',objTypeCode:'data',objTypeName:'data',validExpName:'청구처명:no:maxByteLength=50',validExpCode:'청구처:yes',readOnlyName:'true',maxlengthName:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실화주',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_realMchtClntNo',codeId:'ed_realMchtClntNo',btnId:'btn_realMchtClntNo',nameId:'txt_realMchtClntNm',selectID:'retrieveClntInfo_tpro','ev:onviewchangeCodeEvent':'scwin.udc_realMchtClntNo_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_realMchtClntNo_onclickEvent',readOnlyName:'true',objTypeName:'data',objTypeCode:'data',validExpCode:'실화주:yes',validExpName:'실화주명:no:maxByteLength=50',maxlengthName:'50'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_close',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})