/*amd /ui/cm/bc/rentloan/zz_900_01_05b.xml 30307 881b23387833177848b75be69347a07e711ebd959f4a6e41a7caa45f2cc3e251 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_ctrt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'rentloanNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rentloanSeq',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'examOpin',name:'',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'refferItm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtDeptExamOpin',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'betAdmitExamOpin',name:'',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'finalAdmitExamOpin',name:'',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'dcsnYn',name:'',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'rentloanNo',name:'name1',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'rentloanSeq',name:'name2',dataType:'text',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_uppermostBizdom',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_uppermostBizdom_param'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',E:[{T:1,N:'sysCd'},{T:1,N:'queryId'}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_tr_chk_param'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'rentloanNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rentloanSeq',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_out',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rentloanClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanShapeCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanStDt',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanEndDt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnYn',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_out2',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'rentloanClsCd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rentloanShapeCd',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNo',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNm',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rentloanStDt',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rentloanEndDt',name:'name6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'closeDt',name:'name7'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_ctrt","key":"OUT_DS1"},{"id":"dma_search","key":"IN_DS1"}]',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_save',action:'/cm.bc.rentloan.SaveExamRefferInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_ctrt","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_uppermostBizdom',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_uppermostBizdom_param","key":"IN_DS1"}',target:'data:json,{"id":"ds_uppermostBizdom","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_uppermostBizdom_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_tr_chk',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_out","key":"OUT_DS1"},{"id":"ds_out2","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_out","key":"OUT_DS1"},{"id":"ds_out2","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_tr_chk_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 임대차[전대차] 검토의견 및 참고사항
 * 메뉴경로 : 공통/총무업무/임대차관리/임대차[전대차] 계약관리/임대차[전대차] 계약기본정보
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/rentloan/zz_900_01_05b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-10-22
 * 수정이력  :
 *    - 2025-10-22      정승혜    최초작성
 *    - 2025-11-26      정승혜    준수사항 적용
 *    - 2025-12-23      정승혜    pub 경로 -> ui로 변경 / f_winOpen수정
 *    - 2025-12-24      정승혜    popTitleCh 적용
 *    - 2026-01-06      정승혜    기타수정
 *    - 2026-01-19      정승혜    submitdone 조건수정
 * 메모 :
 * 데이터 있는 계약번호 D20110208004
 * 해야함 리스트 : 
 */

//hidden
scwin.hid_rentloanNo = "";
scwin.hid_rentloanSeq = "";
scwin.hid_uppermostBizDomCd = "";
scwin.params = "";
scwin.strBasSdId = "/ui/cm/bc/rentloan/zz_900_01_01b.xml";
scwin.strCtrtBaseSdId = "/ui/cm/bc/rentloan/zz_900_01_02b.xml";
scwin.rentloanNo = "";
scwin.rentloanSeq = "";
scwin.mode = "";
scwin.eqSelBizDom = "";
scwin.cfValue = "";
scwin.iCfVal = "";
scwin.memJson = "";
scwin.regId = "";
scwin.sysAdminYn = "";

//////////////////////////////
scwin.uppermostBizDomCd = ""; //최상위사업영역
scwin.selBizDom = scwin.eqSelBizDom;
scwin.popYn = "";
scwin.sRentloanNo = "";
scwin.sRentloanSeq = "";
scwin.sMode = "";
scwin.tempExamOpin = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.regId = scwin.memJson.userId;
  scwin.sysAdminYn = scwin.memJson.sysAdminYn;

  // getCodeList
  const codeOptions = [{
    grpCd: "ZZ910",
    compID: "lc_rentloanClsCd"
  }, {
    grpCd: "ZZ911",
    compID: "lc_rentloanShapeCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.params = $c.data.getParameter($p);
  if (scwin.params["rentloanNo"] == null) {
    scwin.rentloanNo = "";
  } else {
    scwin.rentloanNo = scwin.params["rentloanNo"];
  } //계약번호
  if (scwin.params["rentloanSeq"] == null) {
    scwin.rentloanSeq = "";
  } else {
    scwin.rentloanSeq = scwin.params["rentloanSeq"];
  } //계약순번
  if (scwin.params["mode"] == null) {
    scwin.mode = "";
  } else {
    scwin.mode = scwin.params["mode"];
  } //NEW, CHG, REN, MOD, DEL, ''
  if (scwin.params["selBizDom"] == null) {
    scwin.eqSelBizDom = "";
  } else {
    scwin.eqSelBizDom = scwin.params["selBizDom"];
  }
  if (scwin.params["cf"] == null) {
    scwin.cfValue = "";
  } else {
    scwin.cfValue = scwin.params["cf"];
  }
  scwin.iCfVal = parseInt(scwin.cfValue);
  if (scwin.params["popYn"] == null) {
    scwin.popYn = "";
  } else {
    scwin.popYn = scwin.params["popYn"];
  }
  scwin.sRentloanNo = scwin.params["rentloanNo"];
  scwin.sRentloanSeq = scwin.params["rentloanSeq"];
  scwin.sMode = scwin.params["sMode"];
  switch (scwin.iCfVal) {
    case 1:
      scwin.strBasSdId = "/ui/cm/bc/rentloan/zz_900_01_01b.xml";
      break;
    case 2:
      scwin.strBasSdId = "/ui/cm/bc/rentloan/zz_900_04_01b.xml";
      break;
    case 3:
      scwin.strBasSdId = "/ui/cm/bc/rentloan/zz_900_03_01b.xml";
      break;
    case 4:
      scwin.strBasSdId = "/ui/cm/bc/rentloan/zz_900_03_02b.xml";
      break;
    case 5:
      scwin.strBasSdId = "/ui/cm/bc/rentloan/zz_900_03_04b.xml";
      break;
    case 8:
      scwin.strBasSdId = "/ui/cm/bc/rentloan/zz_900_08_01b.xml";
      break;
    case 9:
      scwin.strBasSdId = "/ui/cm/bc/rentloan/zz_900_09_01b.xml";
      break;
    default:
      scwin.strBasSdId = "/ui/cm/bc/rentloan/zz_900_01_01b.xml";
      break;
  }
};
scwin.ondataload = function () {
  //로그인한 사번으로 최상위사업영역을 가져오는 데이타셋 실행
  scwin.f_uppermostBizdom();
  scwin.f_tr_chk();
  scwin.f_HeaderCreate();
  ed_rentloanNo.setValue(scwin.sRentloanNo + "-" + scwin.sRentloanSeq);
  scwin.f_Retrieve();
  if (scwin.popYn == 'Y')
    // 팝업으로 넘어오는 항목인 경우 목록 버튼 비활성화
    {
      $c.gus.cfDisableObjects($p, [btn_save, btn_list]);
    }
  scwin.hid_uppermostBizDomCd = scwin.uppermostBizDomCd;
};
scwin.f_OnLoad_done = function () {
  // 임대 전대일때 담보버튼 비활성화
  if (lc_rentloanShapeCd.getValue() == "03" || lc_rentloanShapeCd.getValue() == "04") {
    $c.gus.cfDisableObjects($p, [pu_pledge]);
  } else {
    $c.gus.cfEnableObjects($p, [pu_pledge]);
  }
};
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "임대차[전대차] 검토의견 및 참고사항");
};
scwin.f_HeaderCreate = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// function name : f_RentloanShapeCdChange
// function desc : 계약형태 변경 시
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_RentloanShapeCdChange = function () {
  let vRentloanShapeCd = lc_rentloanShapeCd.getValue();
  if (vRentloanShapeCd == "01" || vRentloanShapeCd == "02") {
    ChainedISNm.setLabel("경매현황");
  } else if (vRentloanShapeCd == "03" || vRentloanShapeCd == "04") {
    ChainedISNm.setLabel("명도소송현황");
  } else {}
};

//-------------------------------------------------------------------------
// function name : f_winOpen
// function desc : 화면이동
// function Parameter : strIndex : 버튼
//-------------------------------------------------------------------------  
scwin.f_winOpen = function (strIndex) {
  let strPath = "";
  let vRentloanShapeCd = lc_rentloanShapeCd.getValue();
  scwin.uppermostBizDomCd = scwin.hid_uppermostBizDomCd;
  let pgmId = $c.data.getParameter($p, "menuInfo").pgmId;
  let rentloan = scwin.sRentloanNo + scwin.sRentloanSeq;
  let data = {};
  data.mode = scwin.sMode;
  data.cf = scwin.cfValue;
  data.selBizDom = scwin.uppermostBizDomCd;
  data.rentloanNo = scwin.sRentloanNo;
  data.rentloanSeq = scwin.sRentloanSeq;
  let opt = {};
  opt.width = "2500";
  opt.height = "1300";
  opt.modal = true;
  opt.title = "title";
  opt.id = "popup";
  switch (strIndex) {
    case 0:
      if (scwin.popYn == 'Y') {
        data.popYn = "Y";
        opt.popupName = "계약기본정보";
        let sURL = "/ui/cm/bc/rentloan/zz_900_01_02b.xml";
        $c.win.openPopup($p, sURL, opt, data);
      } else {
        strPath = "/ui/cm/bc/rentloan/zz_900_01_02b.xml";
        $c.win.openMenu($p, '계약기본정보', strPath, strPath.substring(strPath.lastIndexOf("/") + 1).replace(/.xml/g, "") + ".jsp", data, {
          openAction: "exist",
          menuCode: rentloan,
          menuCode2: "new"
        });
        let tabObj = $p.top().tac_layout;
        tabObj.setLabelText(tabObj.getSelectedTabIndex(), "계약기본정보");
      }
      break;
    case 1:
      if (scwin.popYn == 'Y') {
        data.popYn = "Y";
        opt.popupName = "담보평가";
        let sURL = "/ui/cm/bc/rentloan/zz_900_01_03b.xml";
        $c.win.openPopup($p, sURL, opt, data);
      } else {
        strPath = "/ui/cm/bc/rentloan/zz_900_01_03b.xml";
        $c.win.openMenu($p, '담보평가', strPath, strPath.substring(strPath.lastIndexOf("/") + 1).replace(/.xml/g, "") + ".jsp", data, {
          openAction: "exist",
          menuCode: rentloan,
          menuCode2: "new"
        });
        let tabObj = $p.top().tac_layout;
        tabObj.setLabelText(tabObj.getSelectedTabIndex(), "담보평가");
      }
      break;
    case 2:
      if (scwin.popYn == 'Y') {
        data.popYn = "Y";
        opt.popupName = "계약조건";
        let sURL = "/ui/cm/bc/rentloan/zz_900_01_04b.xml";
        $c.win.openPopup($p, sURL, opt, data);
      } else {
        strPath = "/ui/cm/bc/rentloan/zz_900_01_04b.xml";
        $c.win.openMenu($p, '계약조건', strPath, strPath.substring(strPath.lastIndexOf("/") + 1).replace(/.xml/g, "") + ".jsp", data, {
          openAction: "exist",
          menuCode: rentloan,
          menuCode2: "new"
        });
        let tabObj = $p.top().tac_layout;
        tabObj.setLabelText(tabObj.getSelectedTabIndex(), "계약조건");
      }
      break;
    case 3:
      if (scwin.popYn == 'Y') {
        data.popYn = "Y";
        opt.popupName = "검토의견 및 참고사항";
        let sURL = "/ui/cm/bc/rentloan/zz_900_01_05b.xml";
        $c.win.openPopup($p, sURL, opt, data);
      } else {
        strPath = "/ui/cm/bc/rentloan/zz_900_01_05b.xml";
        $c.win.openMenu($p, '검토의견 및 참고사항', strPath, strPath.substring(strPath.lastIndexOf("/") + 1).replace(/.xml/g, "") + ".jsp", data, {
          openAction: "exist",
          menuCode: rentloan,
          menuCode2: "new"
        });
        let tabObj = $p.top().tac_layout;
        tabObj.setLabelText(tabObj.getSelectedTabIndex(), "검토의견 및 참고사항");
      }
      break;
    case 4:
      if (vRentloanShapeCd == "01" || vRentloanShapeCd == "02") {
        if (scwin.popYn == 'Y') {
          data.popYn = "Y";
          opt.popupName = "경매현황";
          let sURL = "/ui/cm/bc/rentloan/zz_900_01_06b.xml";
          $c.win.openPopup($p, sURL, opt, data);
        } else {
          strPath = "/ui/cm/bc/rentloan/zz_900_01_06b.xml";
          $c.win.openMenu($p, '경매현황', strPath, strPath.substring(strPath.lastIndexOf("/") + 1).replace(/.xml/g, "") + ".jsp", data, {
            openAction: "exist",
            menuCode: rentloan,
            menuCode2: "new"
          });
          let tabObj = $p.top().tac_layout;
          tabObj.setLabelText(tabObj.getSelectedTabIndex(), "경매현황");
        }
        break;
      } else if (vRentloanShapeCd == "03" || vRentloanShapeCd == "04") {
        if (scwin.popYn == 'Y') {
          data.popYn = "Y";
          opt.popupName = "명도소송현황";
          let sURL = "/ui/cm/bc/rentloan/zz_900_02_06b.xml";
          $c.win.openPopup($p, sURL, opt, data);
        } else {
          strPath = "/ui/cm/bc/rentloan/zz_900_02_06b.xml";
          $c.win.openMenu($p, '명도소송현황', strPath, strPath.substring(strPath.lastIndexOf("/") + 1).replace(/.xml/g, "") + ".jsp", data, {
            openAction: "exist",
            menuCode: rentloan,
            menuCode2: "new"
          });
          let tabObj = $p.top().tac_layout;
          tabObj.setLabelText(tabObj.getSelectedTabIndex(), "명도소송현황");
        }
        break;
      } else {}
    case 5:
      if (scwin.popYn == 'Y') {
        data.popYn = "Y";
        data.fileClsCd = "03";
        opt.popupName = "첨부파일";
        let sURL = "/ui/cm/bc/rentloan/zz_900_01_07b.xml";
        $c.win.openPopup($p, sURL, opt, data);
      } else {
        data.fileClsCd = "03";
        strPath = "/ui/cm/bc/rentloan/zz_900_01_07b.xml";
        $c.win.openMenu($p, '첨부파일', strPath, strPath.substring(strPath.lastIndexOf("/") + 1).replace(/.xml/g, "") + ".jsp", data, {
          openAction: "exist",
          menuCode: rentloan,
          menuCode2: "new"
        });
        let tabObj = $p.top().tac_layout;
        tabObj.setLabelText(tabObj.getSelectedTabIndex(), "첨부파일");
      }
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 조회 : 데이터를 조회한다.
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  dma_search.set("rentloanNo", scwin.sRentloanNo);
  dma_search.set("rentloanSeq", scwin.sRentloanSeq);
  let condition = "";
  condition = "?rentloanNo=" + scwin.sRentloanNo + "&rentloanSeq=" + scwin.sRentloanSeq;
  sbm_retrieve.action = "/cm.bc.rentloan.RetrieveExamRefferInfoCMD.do" + condition;
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장 : 
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (scwin.tempExamOpin == ds_ctrt.get("examOpin")) {
    await $c.gus.cfAlertMsg($p, "변경된 내용이 없습니다.");
    return;
  }
  let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirm) {
    $c.sbm.execute($p, sbm_tr_save);
  }
  scwin.ondataload();
};
scwin.f_Ctrt = function () {
  //호출되는곳 없음
};
scwin.f_tr_chk = function () {
  sbm_ds_tr_chk.action = "/cm.bc.rentloan.RetrieveRentLoanContractBasisInformationCMD.do?rentloanNo=" + scwin.sRentloanNo + "&rentloanSeq=" + scwin.sRentloanSeq;
  $c.sbm.execute($p, sbm_ds_tr_chk);
};
scwin.cfTabMenuAdd = function () {
  let sURL = scwin.strBasSdId;
  $c.win.openMenu($p, '계약관리', sURL, sURL.substring(sURL.lastIndexOf("/") + 1).replace(/.xml/g, ""));
};
scwin.f_rentloan_keyup = function (e) {
  let input = e.target;
  let val = input.value;

  // 1️ 아무것도 없으면 종료
  if (!val) return;

  // 2️ 첫 글자는 영문만 허용, 소문자면 대문자로 자동변환
  let first = val.charAt(0).toUpperCase();
  if (!/[A-Z]/.test(first)) {
    // 첫 글자가 영문이 아니면 제거
    first = '';
  }

  // 3️ 나머지 글자는 숫자만 남김
  let rest = val.substring(1).replace(/[^0-9]/g, '');

  // 4️ 12자리 넘으면 '-' 추가
  if (rest.length > 11) {
    rest = rest.substring(0, 11) + '-' + rest.substring(11, 15);
  }

  // 5️ 전체 조합 및 길이 제한
  let formatted = (first + rest).substring(0, 16);

  // 6️ 결과 반영
  input.value = formatted;
};
scwin.f_rentloan_click = function (e) {
  let input = e.target;
  let val = input.value;

  // 1️ 아무것도 없으면 종료
  if (!val) return;

  // 2️ 첫 글자는 영문만 허용, 소문자면 대문자로 자동변환
  let first = val.charAt(0).toUpperCase();
  if (!/[A-Z]/.test(first)) {
    // 첫 글자가 영문이 아니면 제거
    first = '';
  }

  // 3️ 나머지 글자는 숫자만 남김
  let rest = val.substring(1).replace(/[^0-9]/g, '');

  // 4️ 12자리 넘으면 '-' 추가
  if (rest.length > 11) {
    rest = rest.substring(0, 11) + '-' + rest.substring(11, 15);
  }

  // 5️ 전체 조합 및 길이 제한
  let formatted = (first + rest).substring(0, 16);

  // 6️ 결과 반영
  input.value = formatted;
};
scwin.f_displayFm = function (e) {
  let val = e;
  let first = val.charAt(0).toUpperCase();
  if (!/[A-Z]/.test(first)) {
    // 첫 글자가 영문이 아니면 제거
    first = '';
  }
  let rest = val.substring(1).replace(/[^0-9]/g, '');
  if (rest.length > 11) {
    rest = rest.substring(0, 11) + '-' + rest.substring(11, 15);
  }
  let formatted = (first + rest).substring(0, 16);
  return formatted;
};
scwin.f_uppermostBizdom = function () {
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveUppermostBizDomInfo",
    param1: scwin.memJson.empNo
  };
  dma_uppermostBizdom_param.setJSON(params);
  $c.sbm.execute($p, sbm_ds_uppermostBizdom);
};
scwin.sbm_ds_uppermostBizdom_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_uppermostBizdom.getCellData(0, "col1") != "" && ds_uppermostBizdom.getCellData(0, "col1") != null) {
    if (scwin.selBizDom == "" || scwin.selBizDom == null) {
      scwin.uppermostBizDomCd = ds_uppermostBizdom.getCellData(0, "col1");
    } else {
      scwin.uppermostBizDomCd = scwin.selBizDom;
    }
  } else {
    scwin.uppermostBizDomCd = "252";
  }
};

// 서브미션
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_ctrt.setJSON(e.responseJSON.GAUCE[0]);
  scwin.hid_rentloanNo = scwin.sRentloanNo;
  scwin.hid_rentloanSeq = scwin.sRentloanSeq;
  ds_ctrt.set("rentloanNo", scwin.hid_rentloanNo);
  ds_ctrt.set("rentloanSeq", scwin.hid_rentloanSeq);
  scwin.tempExamOpin = ds_ctrt.get("examOpin");
};

// 서브미션
scwin.sbm_tr_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

// 서브미션
scwin.sbm_ds_tr_chk_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_out.setRowPosition(0);
  if (ds_out.getCellData(0, "dcsnYn") == "1") {
    // 확정
    $c.gus.cfDisableObjects($p, [txt_examOpin, pu_examine, btn_save]);
    $c.gus.cfDisableObjects($p, [oRecevInfo, pu_examine, txt_betAdmitExamOpin, txt_finalAdmitExamOpin]);
  } else {
    // 미확정
    $c.gus.cfEnableObjects($p, [txt_examOpin, btn_save]);
    $c.gus.cfDisableObjects($p, [oRecevInfo, pu_examine, txt_betAdmitExamOpin, txt_finalAdmitExamOpin]);
  }
  scwin.f_OnLoad_done();
  scwin.f_RentloanShapeCdChange();
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box ',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'oRecevInfo',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_rentloanNo',class:'form-control w150',ref:'','ev:onclick':'scwin.f_rentloan_click(event)','ev:onkeyup':'scwin.f_rentloan_keyup(event)',displayFormatter:'scwin.f_displayFm',maxlength:'16'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_clntNo',placeholder:'',class:'form-control w100',allowChar:'0-9',maxlength:'6',mandatory:'true',ref:'data:ds_out.clntNo'}},{T:1,N:'xf:input',A:{style:'',id:'ed_clntNm',class:'form-control',ref:'data:ds_out.clntNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'',allOption:'',id:'lc_rentloanClsCd',class:'form-control w150',direction:'auto',mandatory:'true',ref:'data:ds_out.rentloanClsCd',chooseOptionLabel:'&nbsp;'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약형태',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'',allOption:'',id:'lc_rentloanShapeCd',class:'form-control w150',direction:'auto',mandatory:'true',chooseOptionLabel:'&nbsp;',ref:'data:ds_out.rentloanShapeCd'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약개시일',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_rentloanStDt',class:'form-control cal',calendarValueType:'yearMonthDate',mandatory:'false',displayFormat:'yyyy/MM/dd',placeholder:' ',ref:'data:ds_out.rentloanStDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약종료일',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ed_rentloanEndDt',style:'',displayFormat:'yyyy/MM/dd',ref:'data:ds_out.rentloanEndDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'해지일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_closeDt',class:'form-control cal',calendarValueType:'yearMonthDate',mandatory:'false',displayFormat:'yyyy/MM/dd',ref:'data:ds_out.closeDt'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'담당자 검토의견 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txt_examOpin',style:'min-height:150px;',ref:'data:ds_ctrt.examOpin',maxByteLength:'1000'}}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'중간승인자 검토의견 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:textarea',A:{class:'form-control',id:'txt_betAdmitExamOpin',style:'min-height:150px;',ref:'data:ds_ctrt.betAdmitExamOpin'}}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'최종승인자 검토의견 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:textarea',A:{class:'form-control',id:'txt_finalAdmitExamOpin',style:'min-height:150px;',ref:'data:ds_ctrt.finalAdmitExamOpin'}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_ctrt',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(0)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약기본정보'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_pledge',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(1)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'담보평가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_cond',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(2)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약조건'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_examine',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(3)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검토의견 및 참고사항'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'ChainedISNm',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(4)'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_file',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(5)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'첨부파일'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_list',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.cfTabMenuAdd'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'목록'}]}]}]}]}]}]}]}]}]})