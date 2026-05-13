/*amd /pub/cm/bc/rentloan/zz_900_01_07b.xml 41977 c503cd726e1ae84b5f236045681023eac0e7b0897cb705e4e31dcb247f183f9b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_img',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rentloanNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanSeq',name:'계약순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSeq',name:'파일;번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'정렬;순서',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'fileClsCd',name:'파일첨부구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileNm',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSavePath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_msg'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'rentloanNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rentloanClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanShapeCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanStDt',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanEndDt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnYn',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_uppermostBizdom_param'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',E:[{T:1,N:'sysCd'},{T:1,N:'queryId'}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_uppermostBizdom',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieveImg',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_img","key":"OUT_DS1"}',target:'data:json,{"id":"ds_img","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieveImg_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_saveImg',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_img","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_saveImg_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_uppermostBizdom',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_uppermostBizdom_param","key":"IN_DS1"}',target:'data:json,{"id":"ds_uppermostBizdom","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_uppermostBizdom_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_chk',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_out","key":"OUT_DS1"},{"id":"ds_out2","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_out","key":"OUT_DS1"},{"id":"ds_out2","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_chk_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DFWConstants.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 임대차[전대차] 첨부파일
 * 메뉴경로 : 공통/총무업무/임대차관리/임대차[전대차] 계약관리/임대차[전대차] 계약기본정보
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/rentloan/zz_900_01_07b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-11-18
 * 수정이력  :
 *    - 2025-11-18      정승혜    최초작성
 *    - 2025-12-23      정승혜    pub 경로 -> ui로 변경 / f_winOpen수정
 *    - 2025-12-24      정승혜    popTitleCh 적용
 *    - 2026-01-14      정승혜    기타수정
 * 메모 : 
 * 다른페이지들과 일치시키기 위하여 구조 조금 바꿈 / 명소소송현황 버튼 하나더 사용하지 않고 조건처리 / f_RentloanShapeCdChange 함수추가
 * 엑셀다운 2+4+8+16
 * 모듈 Scope 변수 비워야함(js 바로 쓸수있게 만들어져있음)
 * insert 시 sortSeq 쿼리에 없음 / update 시에만 있어서 저장후에 순서 재저장 해주어야 함
 * 조회조건: A20251028001
 * 해야할 리스트 : 
 * cfGetFileURL
 * cfGetTargetFileURL
 */

//hidden
let hid_rentloanNo = "";
let hid_rentloanSeq = "";
let hid_uppermostBizDomCd = "";
scwin.systemPathKey = "";
scwin.strBasSdId = "/ui/cm/bc/rentloan/zz_900_01_01b.xml";
scwin.params = "";
scwin.rentloanNo = "";
scwin.rentloanSeq = "";
scwin.systemPathVal = "";
scwin.eqSelBizDom = "";
scwin.cfValue = "";
scwin.popYn = "";
scwin.iCfVal = "";
scwin.fileClsCd = "";
scwin.memJson = $c.data.getMemInfo($p);
scwin.regId = scwin.memJson.userId;
scwin.sysAdminYn = scwin.memJson.sysAdminYn;

//////////////////////////////
scwin.uppermostBizDomCd = ""; //최상위사업영역
scwin.selBizDom = scwin.eqSelBizDom;

//////////////////////////////
scwin.pos_rowSts = 0;
scwin.PAGE_MOVE_CONFIRM = true;
scwin.fileNameInco = "";
scwin.subDir = "";
scwin.sRentloanNo = "";
scwin.sRentloanSeq = "";

// 파일 다운로드 URL
scwin.FILE_DOWNLOAD_URL = "/s3upload.do";
scwin.pgmId = "";
scwin.src = "";

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//-------------------------------------------------------------------------  
scwin.onpageload = function () {
  console.log("zz_900_01_07b_pgmId : " + $c.data.getParameter($p).menuInfo.pgmId);
  const codeOptions = [{
    grpCd: "ZZ910",
    compID: "lc_rentloanClsCd"
  }, {
    grpCd: "ZZ911",
    compID: "lc_rentloanShapeCd"
  }, {
    grpCd: "ZZ917",
    compID: "lc_reCtrtCondCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.systemPathKey = DFWConstants.FILE_UPLOAD_SYSTEM_PATH;
  scwin.params = $c.data.getParameter($p);
  scwin.rentloanNo = scwin.params["rentloanNo"];
  scwin.rentloanSeq = scwin.params["rentloanSeq"];
  scwin.systemPathVal = "ui/cm/bc/rentloan/rentloan/" + scwin.rentloanNo + "/" + scwin.rentloanSeq;
  scwin.subDir = "cm/bc/rentloan/rentloan/" + scwin.rentloanNo + "/" + scwin.rentloanSeq + "/";
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
  if (scwin.params["popYn"] == null) {
    scwin.popYn = "";
  } else {
    scwin.popYn = scwin.params["popYn"];
  }
  scwin.sRentloanNo = scwin.params["rentloanNo"];
  scwin.sRentloanSeq = scwin.params["rentloanSeq"];
  scwin.iCfVal = scwin.params["cfValue"];
  switch (scwin.iCfVal) {
    case 1:
      strBasSdId = "/ui/cm/bc/rentloan/zz_900_01_01b.xml";
      break;
    case 2:
      strBasSdId = "/ui/cm/bc/rentloan/zz_900_04_01b.xml";
      break;
    case 3:
      strBasSdId = "/ui/cm/bc/rentloan/zz_900_03_01b.xml";
      break;
    case 4:
      strBasSdId = "/ui/cm/bc/rentloan/zz_900_03_02b.xml";
      break;
    case 5:
      strBasSdId = "/ui/cm/bc/rentloan/zz_900_03_04b.xml";
      break;
    case 8:
      strBasSdId = "/ui/cm/bc/rentloan/zz_900_08_01b.xml";
      break;
    case 9:
      strBasSdId = "/ui/cm/bc/rentloan/zz_900_09_01b.xml";
      break;
    default:
      strBasSdId = "/ui/cm/bc/rentloan/zz_900_01_01b.xml";
      break;
  }
  scwin.fileClsCd = scwin.params["fileClsCd"];
  try {
    let menuInfo = $p.parent().$p.getParameter("paramData").menuInfo;
    if (typeof menuInfo !== "undefined") {
      scwin.pgmId = menuInfo.pgmId;
      scwin.src = menuInfo.src;
    }
  } catch (e) {
    console.log("#### parameter ###");
  }
};
scwin.ondataload = function () {
  //로그인한 사번으로 최상위사업영역을 가져오는 데이타셋 실행
  scwin.f_uppermostBizdom();
  lc_reCtrtCondCd.setValue(scwin.fileClsCd);
  sbm_tr_chk.action = "/cm.bc.rentloan.RetrieveRentLoanContractBasisInformationCMD.do?rentloanNo=" + scwin.rentloanNo + "&rentloanSeq=" + scwin.rentloanSeq;
  $c.sbm.execute($p, sbm_tr_chk);
  $c.gus.cfDisableObjects($p, [pu_img]);
  scwin.f_createHeader();
  scwin.f_defaultValue();
  // scwin.f_Retrieve(); -> f_defaultValue로 옮김

  $c.gus.cfDisableObjects($p, [ed_rentloanNo, pu_img, lc_rentloanShapeCd, lc_rentloanClsCd, ed_clntNo, ed_clntNm, ed_rentloanStDt, ed_rentloanEndDt, ed_closeDt]);
  if (scwin.popYn == 'Y')
    // 팝업으로 넘어오는 항목인 경우 목록 버튼 비활성화
    {
      $c.gus.cfDisableObjects($p, [btn_save, btn_list]);
    }
  scwin.hid_uppermostBizDomCd = scwin.uppermostBizDomCd;
};
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "임대차[전대차] 첨부파일");
};

//-------------------------------------------------------------------------
// function name : f_defaultValue
// function desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  let rentloanNo = scwin.rentloanNo;
  let rentloanSeq = scwin.rentloanSeq;
  ed_rentloanNo.setValue(rentloanNo + '-' + rentloanSeq);
  scwin.f_Retrieve();

  //scwin.f_previewImg(); 0  ->  sbm_tr_retrieveImg_submitdone 로 이동
};

//-------------------------------------------------------------------------
// function name : f_createHeader
// function desc : Grid Header정보 Setting
//-------------------------------------------------------------------------
scwin.f_createHeader = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 계약서 이미지 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  let condition = "";
  condition = "?rentloanNo=" + ed_rentloanNo.getValue() + lc_reCtrtCondCd.getValue();
  sbm_tr_retrieveImg.action = "/cm.bc.rentloan.RetrieveRentLoanDocumentImageListCMD.do" + condition;
  $c.sbm.execute($p, sbm_tr_retrieveImg);
};

//-------------------------------------------------------------------------
// function name : fileSubmit
// function desc : File Upload 
//-------------------------------------------------------------------------
scwin.fileSubmit = async function () {
  let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!confirm) {
    return false;
  }
  await scwin.saveFile();
  return true;
};

//-------------------------------------------------------------------------
// function name : uploadComplete
// function desc : Upload File complete 
//-------------------------------------------------------------------------
scwin.uploadComplete = function () {
  //udc
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 이미지 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  scwin.pos_rowSts = ds_img.getRowPosition();
  console.log("sortSeq : " + ds_img.getCellData(ds_img.getRowPosition(), "sortSeq"));
  if (ds_img.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_001, "임대차[전대차]계약이미지")); // 변경된 사항이 없습니다.
    scwin.PAGE_MOVE_CONFIRM = false;
    return;
  } else {
    sbm_tr_saveImg.action = "/cm.bc.rentloan.SaveRentLoanDocumentImageListCMD.do";
    $c.sbm.execute($p, sbm_tr_saveImg);
  }
};

//-------------------------------------------------------------------------
// function name : f_previewImg
// function desc : 이미지 미리보기
//-------------------------------------------------------------------------
scwin.f_previewImg = function (rowNum) {
  console.log("f_previewImg");
  ds_img.getCellData(rowNum, "fileSavePath");
  let tempData = ds_img.getCellData(rowNum, "fileSavePath");
  let filePath = tempData.substring(0, tempData.lastIndexOf("/") + 1);
  let fileNm = tempData.substring(tempData.lastIndexOf("/") + 1);
  img_preview.setSrc(scwin.buildDownloadUrl(scwin.buildPreviewParam(rowNum), "Link"));
};
scwin.buildDownloadUrl = function (paramJson, flag) {
  return scwin.FILE_DOWNLOAD_URL + "?" + new URLSearchParams({
    path: scwin.buildStoredFileKey(paramJson.FILE_PATH, paramJson.FILE_NAME),
    fileName: paramJson.FILE_NAME || "",
    fileType: flag == "Link" ? "LINK" : "DOWN",
    direct: "true",
    fallback: "true",
    PGM_ID: paramJson.PGM_ID || "",
    CALLER_URL: paramJson.CALLER_URL || ""
  }).toString();
};
scwin.buildPreviewParam = function (rowIndex) {
  let tempData = ds_img.getCellData(rowIndex, "fileSavePath");
  let filePath = tempData.substring(0, tempData.lastIndexOf("/") + 1);
  let fileNm = tempData.substring(tempData.lastIndexOf("/") + 1);
  return {
    "FILE_NAME": fileNm,
    "STORED_FILE_NAME": ds_img.getCellData(rowIndex, "fileNm"),
    "FILE_PATH": filePath,
    "PGM_ID": scwin.pgmId,
    "CALLER_URL": scwin.src,
    "FILE_TYPE": "LINK"
  };
};
scwin.buildStoredFileKey = function (filePath, fileName) {
  if (!filePath) {
    return fileName;
  }
  if (filePath.endsWith(fileName)) {
    return filePath;
  }
  if (filePath.endsWith("/")) {
    return filePath + fileName;
  }
  return filePath + "/" + fileName;
};
scwin.f_ZoomIn = function () {
  let opts = {
    id: "Pop",
    popupName: "미리보기",
    modal: true,
    type: "browserPopup",
    title: "pop",
    width: "850",
    height: "700"
  };
  let strUrl = "/cm/xml/zoom.xml";
  let list1NowRow = JSON.stringify(gr_img.getFocusedRowIndex());
  let data = {
    fileName: ds_img.getCellData(ds_img.getRowPosition(), "fileNm"),
    filePath: ds_img.getCellData(ds_img.getRowPosition(), "fileSavePath")
  };
  $c.win.openPopup($p, strUrl, opts, data);
};

//-------------------------------------------------------------------------
// 화면이동
//-------------------------------------------------------------------------
// 버튼6개 
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
        //data.fileClsCd = "01"; // 해당파일에는 없음
        opt.popupName = "첨부파일";
        let sURL = "/ui/cm/bc/rentloan/zz_900_01_07b.xml";
        $c.win.openPopup($p, sURL, opt, data);
      } else {
        //data.fileClsCd = "01"; // 해당파일에는 없음
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

// 서브미션
scwin.sbm_tr_retrieveImg_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    totalRows.setValue(ds_img.getRowCount());
    $c.gus.cfGoPrevPosition($p, gr_img, scwin.pos_rowSts);
    scwin.f_previewImg(0);
  } else {
    $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
  }
};

// 서브미션
scwin.sbm_tr_saveImg_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
    scwin.PAGE_MOVE_CONFIRM = false;
  } else {
    $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
  }
};

// 서브미션
scwin.sbm_tr_chk_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    ds_out.setRowPosition(0);
    scwin.f_RentloanShapeCdChange();

    // 쿼리 조건에 A.DEL_YN = 0 있어서 해당부분 타지 않음
    if (ds_out.getCellData(0, "dcsnYn") == 1) {
      $c.gus.cfDisableObjects($p, [btn_save]);
    }
    scwin.f_Retrieve();
  } else {
    $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
  }
};

// 최상위사업영역 서브미션
scwin.sbm_ds_uppermostBizdom_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_uppermostBizdom.getCellData(0, "col1") != "" && ds_uppermostBizdom.getCellData(0, "col1") != null) {
      if (scwin.selBizDom == "" || scwin.selBizDom == null) {
        scwin.uppermostBizDomCd = ds_uppermostBizdom.getCellData(0, "col1");
      } else {
        scwin.uppermostBizDomCd = scwin.selBizDom;
      }
    } else {
      scwin.uppermostBizDomCd = "252";
    }
  } else {
    $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
};

// 최상위사업영역
scwin.f_uppermostBizdom = function () {
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveUppermostBizDomInfo",
    param1: scwin.memJson.empNo
  };
  dma_uppermostBizdom_param.setJSON(params);
  $c.sbm.execute($p, sbm_ds_uppermostBizdom);
};

// btn_download
scwin.btn_download_onclick = function (e) {
  let list1NowRow = JSON.stringify(gr_img.getFocusedRowIndex());
  $c.gus.cfDownloadFile($p, ds_img.getCellData(list1NowRow, "fileNm"), ds_img.getCellData(list1NowRow, "fileSavePath"));
};
scwin.f_cancelRow = function () {
  ds_img.undoRow(ds_img.getRowPosition());
};
scwin.f_delRow = function () {
  ds_img.deleteRow(ds_img.getRowPosition());
};

// 목록
scwin.cfTabMenuAdd = function () {
  let sURL = scwin.strBasSdId;
  $c.win.openMenu($p, '계약관리', sURL, sURL.substring(sURL.lastIndexOf("/") + 1).replace(/.xml/g, ""));
};

// 이미지 클릭
scwin.previewimg_onclick = function (e) {
  // 이미지 없을때
  // DIV_IMG_NONE
  // 이미지 있을때
  // DIV_IMG
  scwin.f_ZoomIn();
};
scwin.btn_save_onclick = async function (e) {
  let ret = await scwin.fileSubmit();
  if (!ret) {
    return;
  }
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
scwin.lc_reCtrtCondCd_onchange = function (info) {
  scwin.f_Retrieve();
};

// 그리드 클릭하여 이미지 미리보기
scwin.gr_img_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_previewImg(rowIndex);
};

// 그리드 더블클릭하여 이미지 다운
scwin.gr_img_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == 'fileNm') {
    img_preview.setSrc($c.gus.cfGetFileURL($p, ds_img.getCellData(ds_img.getRowPosition(), "fileNm"), ds_img.getCellData(ds_img.getRowPosition(), "fileSavePath")));
  }
};
scwin.saveFile = function () {
  udc_fielUpload.setSubDir(scwin.subDir);
  console.log("-------------------scwin.saveFile");
  console.log("length : " + udc_fielUpload.getData().length);
  if (udc_fielUpload.getData().length > 0) {
    udc_fielUpload.startFileUpload();
  } else {
    scwin.f_Save();
  }
};
scwin.saveDone = async function () {
  console.log("-------------------scwin.saveDone");
};

// uploadComplete
scwin.udc_fielUpload_onFileUploadDone = async function (isSuccess) {
  console.log("udc_fielUpload_onFileUploadDone");
  if (!isSuccess) {
    return;
  }
  ;
  let data = udc_fielUpload.getData();
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    let insRow = ds_img.insertRow();
    let result = ed_rentloanNo.getValue().split("-");
    console.log("insRow : " + insRow);
    ds_img.setCellData(insRow, "rentloanNo", result[0]);
    ds_img.setCellData(insRow, "rentloanSeq", result[1]);
    ds_img.setCellData(insRow, "fileClsCd", lc_reCtrtCondCd.getValue());
    if (insRow != 0) {
      let fltNxtSeq = parseFloat(ds_img.getCellData(insRow - 1, "fileSeq")) + 1;
      let strNxtSeq = "000" + fltNxtSeq;
      strNxtSeq = strNxtSeq.substring(strNxtSeq.length - 4, strNxtSeq.length);

      //asis 에서 로직이 있지만 0004 -> 4 로 바뀌어서 parseInt 처리함
      strNxtSeq = parseInt(strNxtSeq);
      ds_img.setCellData(insRow, "fileSeq", strNxtSeq);
      ds_img.setCellData(insRow, "sortSeq", "0");
    } else {
      //ds_img.setCellData(insRow, "fileSeq", "0001");
      ds_img.setCellData(insRow, "fileSeq", "1");
    }
    var strFileExeName = data[i].STORED_FILE_NM.substring(data[i].STORED_FILE_NM.length - 4, data[i].STORED_FILE_NM.length);
    let tempData = data[i].ORIGIN_FILE_NM.substring(data[i].ORIGIN_FILE_NM.lastIndexOf("."));
    ds_img.setCellData(insRow, "fileNm", ds_img.getCellData(insRow, "rentloanNo") + "_" + ds_img.getCellData(insRow, "rentloanSeq") + "_" + ds_img.getCellData(insRow, "fileSeq") + tempData);
    console.log("tempData : " + tempData);
    ds_img.setCellData(insRow, "fileSavePath", data[i].FILE_STORED_PATH + data[i].STORED_FILE_NM);
  }
  await udc_fielUpload.setGridClear();
  scwin.f_Save();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_rentloanNo',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w100',id:'ed_clntNo',placeholder:'',style:'',maxlength:'6',allowChar:'0-9',objType:'Data',ref:'data:ds_out.clntNo'}},{T:1,N:'xf:input',A:{class:'',id:'ed_clntNm',placeholder:'',style:'',objType:'data',ref:'data:ds_out.clntNm'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_rentloanClsCd',style:'',submenuSize:'auto',objType:'data',ref:'data:ds_out.rentloanClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약형태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_rentloanShapeCd',style:'',submenuSize:'auto',ref:'data:ds_out.rentloanShapeCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'첨부파일구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_reCtrtCondCd',style:'',submenuSize:'auto',objType:'data',mandatory:'true',visibleRowNum:'10',title:'첨부파일구분','ev:onchange':'scwin.lc_reCtrtCondCd_onchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약개시일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_rentloanStDt',style:'',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:ds_out.rentloanStDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약종료일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_rentloanEndDt',style:'',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:ds_out.rentloanEndDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'해지일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_closeDt',style:'',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:ds_out.closeDt'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계약서 이미지 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_img',grdDownOpts:'{"fileName" : "계약서이미지목록.xlsx" ,"type" : "1" }',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_img',id:'gr_img',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.gr_img_oncellclick','ev:oncelldblclick':'scwin.gr_img_oncelldblclick',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'계약번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'계약순번',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'파일</br>번호',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'정렬</br>순서',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'파일첨부구분',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'파일명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'파일경로',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'등록자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'등록일시',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'수정자',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'수정일시',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanNo',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanSeq',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fileSeq',inputType:'text',style:'',value:'',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sortSeq',inputType:'text',style:'',value:'',width:'70',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fileClsCd',inputType:'text',style:'',value:'',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fileNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fileSavePath',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modDtm',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modId',value:'',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_download',style:'',type:'button',userAuth:'D','ev:onclick':'scwin.btn_download_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Download'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowDelFunction:'scwin.f_delRow',cancelFunction:'scwin.f_cancelRow',btnRowAddYn:'N',btnRowDelYn:'Y',btnDelYn:'N',btnCancelYn:'Y',rowDelUserAuth:'D'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'미리보기',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'height: 200px',tagname:'td',id:'previewimg','ev:onclick':'scwin.previewimg_onclick'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'img_ofy'},E:[{T:1,N:'xf:image',A:{src:'',style:'',id:'img_preview',class:'w-full'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'file-wrap no-title'},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',style:'',totalFileSize:'2009715200',maxFileSize:'536870912',fileGrpSeq:'',id:'udc_fielUpload',saveFn:'scwin.saveFile','ev:onFileUploadDone':'scwin.udc_fielUpload_onFileUploadDone',addButtonName:'첨부파일추가',saveButtonName:'첨부파일저장',saveButtonYn:'N'}}]}]}]},{T:1,N:'xf:group',A:{class:'info-list txt-red row-gap-8',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'필수 첨부 서류: 임대차 계약서 완본, 등기부등본, 채권담보 관련 서류(전세권 및 근저당), 임대인/임차인 사업자 등록증 (단 개인인 경우 신분증)',ref:'',style:'',tagname:'p',userData2:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'첨부파일 미리보기 기능은 jpg, gif, bmp, png 파일만 지원됩니다',ref:'',style:'',tagname:'p',userData2:''}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_ctrt',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(0)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약기본정보'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_place',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(1)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'담보평가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_path',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(2)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약조건'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_rate',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(3)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검토의견 및 참고사항'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'ChainedISNm',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(4)'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_img',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(5)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'첨부파일'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_list',style:'',type:'button','ev:onclick':'scwin.cfTabMenuAdd'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'목록'}]}]}]}]}]}]}]}]}]})