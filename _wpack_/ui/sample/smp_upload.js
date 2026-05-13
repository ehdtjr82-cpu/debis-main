/*amd /ui/sample/smp_upload.xml 6623 8e1c08132793c53d21f149349e0030baf882ec449b98caccaf2ce14c0d633ce7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  try {
    // 샘플 화면은 메뉴 메타와 무관하게 제목이 바로 보이도록 헤더를 직접 세팅한다.
    wfm_header.getWindow().scwin.setTitle("CommonFilePopup 샘플 예제");
  } catch (e) {}
};
scwin.btn_commonFilePopup_onclick = function () {
  // 범용 첨부파일 관리형 팝업 예제.
  // 별도 browserPopup 으로 열어서 commonFilePopup 단독 동작을 확인할 때 쓴다.
  $c.win.openPopup($p, "/ui/cm/zz/commonFilePopup.xml", {
    id: "commonFilePopup",
    popupName: "공통파일팝업",
    type: "browserPopup",
    width: 900,
    height: 700
  }, scwin.buildGeneralCommonFilePopupParam());
};
scwin.btn_commonFilePopupFm303_onclick = function () {
  // fm_303_01_03p.xml 과 유사한 선급금 첨부 예제.
  // 샘플 화면이므로 실제 화면처럼 파라미터를 받지 않고 예시 그룹번호/순번을 고정한다.
  const advcdGrpCd = "20200207014";
  const seq = "1";
  $c.win.openPopup($p, "/ui/cm/zz/commonFilePopup.xml", {
    id: "commonFilePopupFm303",
    popupName: "선급금 첨부파일",
    type: "browserPopup",
    width: 900,
    height: 700
  }, {
    // 이 케이스에서는 houseNo 대신 advcdGrpCd가 파일 조회 기준 키 역할을 한다.
    fileKeyName: "advcdGrpCd",
    fileKeyValue: advcdGrpCd,
    // 샘플 오픈 즉시 결과를 보려는 목적이라 키 입력 없이 바로 조회하도록 한다.
    fileKeyRequiredYn: "N",
    retrieveOnloadYn: "Y",
    // 원본 화면처럼 검색 헤더는 숨기고 파일영역 위주로만 보여준다.
    sbHeaderYn: "N",
    // 저장/삭제 CMD에서 같이 참고할 기준값.
    requestData: {
      advcdGrpCd: advcdGrpCd,
      seq: seq
    },
    // 조회는 fm_303 화면과 동일하게 query string 기반 액션을 그대로 사용한다.
    retrieveAction: "/ac.fm.paymgnt.advcdmgnt.RetreiveAdvancedPaymentAttachFileListCMD.do?advcdGrpCd=" + encodeURIComponent(advcdGrpCd) + "&seq=" + encodeURIComponent(seq),
    // 저장/삭제도 원본 화면에서 사용하는 CMD와 동일하게 맞춘다.
    saveAction: "/ac.fm.paymgnt.advcdmgnt.SaveAdvancedPaymentAttachFile2CMD.do",
    deleteAction: "/ac.fm.paymgnt.advcdmgnt.DeleteAdvancedPaymentAttachFileCMD.do",
    // 실제 업로드 파일 저장 경로도 fm_303 화면 규칙과 동일하게 사용한다.
    subDir: "FM/paymgnt/advcdmgnt/AdvancedPayment/" + advcdGrpCd + "/" + seq + "/",
    subDirYearMonthYn: "N",
    saveNextAction: "auto",
    deleteNextAction: "retrieve",
    // 조회 응답에서 파일 목록을 어떤 필드명으로 읽을지 명시한다.
    // 이 케이스는 OUT_DS1 에 filePath/fileName/fileSize/fileSeq 구조로 내려온다.
    responseListKey: "OUT_DS1",
    filePathField: "filePath",
    fileNameField: "fileName",
    originFileNameField: "fileName",
    fileSizeField: "fileSize",
    fileSeqField: "fileSeq"
  });
};
scwin.btn_commonFilePopupWframe_onclick = function () {
  // commonFilePopup 을 별도 팝업이 아니라 현재 화면 하단 wframe 안에 직접 로드하는 예제.
  // 공통팝업이 paramData 기반으로 동작하므로 setPageFrameSrc 로 같은 파라미터를 그대로 넘긴다.
  const param = scwin.buildGeneralCommonFilePopupParam();

  // wframe 은 browserPopup 과 달리 일반 화면 권한체크를 타므로,
  // 샘플에서는 공통팝업 로딩 자체가 권한에 막히지 않도록 bypass 정보를 같이 넘긴다.
  param.menuInfo = {
    src: "/ui/cm/zz/commonFilePopup.xml",
    pgmId: "commonFilePopup.jsp",
    menuId: "commonFilePopup",
    menuNm: "공통파일팝업 샘플",
    popupName: "공통파일팝업 샘플",
    popupTitle: "공통파일팝업 샘플",
    authBypassYn: "Y"
  };
  param.messageType = "popup";
  $c.win.setPageFrameSrc($p, wfm_commonFilePopupSample, "/ui/cm/zz/commonFilePopup.xml", param);
};
scwin.buildGeneralCommonFilePopupParam = function () {
  // 브라우저 팝업 예제와 wframe 예제가 같은 파라미터를 쓰도록 공통화한다.
  // 이렇게 두면 팝업/내장형(wframe) 차이만 비교하기 쉽다.
  return {
    fileKeyName: "houseNo",
    fileKeyValue: "H20260420001",
    requestData: {
      blno: "H20260420001",
      houseNo: "H20260420001"
    },
    retrieveAction: "/il.comm.util.cmd.RetrieveAttachedFileCMD.do",
    saveAction: "/il.comm.util.cmd.SaveFileMgntCMD.do",
    deleteAction: "/il.comm.util.cmd.DeleteFileMgntCMD.do",
    subDir: "FI/electaxinvc/evid",
    subDirYearMonthYn: "Y",
    saveNextAction: "auto",
    deleteNextAction: "retrieve"
  };
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'grp_contents',style:''},E:[{T:1,N:'w2:wframe',A:{id:'wfm_header',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{id:'grp_body',style:'padding:24px; min-height:480px; background-color:#ffffff;'},E:[{T:1,N:'xf:group',A:{id:'grp_buttons',style:'display:flex; gap:12px; align-items:center; margin-bottom:20px;'},E:[{T:1,N:'xf:trigger',A:{id:'btn_commonFilePopup',type:'button','ev:onclick':'scwin.btn_commonFilePopup_onclick',style:'width:180px;'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일반 파일 Popup 샘플'}]}]},{T:1,N:'xf:trigger',A:{id:'btn_commonFilePopup2',type:'button','ev:onclick':'scwin.btn_commonFilePopupFm303_onclick',style:'width:220px;'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급금 파일 Popup 샘플'}]}]},{T:1,N:'xf:trigger',A:{id:'btn_commonFilePopupWframe',type:'button','ev:onclick':'scwin.btn_commonFilePopupWframe_onclick',style:'width:220px;'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일반 파일 WFrame 샘플'}]}]}]},{T:1,N:'xf:group',A:{id:'grp_wframeSample',style:'margin-top:8px;'},E:[{T:1,N:'w2:textbox',A:{id:'tbx_wframeGuide',label:'아래 영역은 commonFilePopup.xml을 wframe으로 직접 붙인 샘플입니다.',tagname:'p',style:'display:block; margin-bottom:8px;'}},{T:1,N:'w2:wframe',A:{id:'wfm_commonFilePopupSample',src:'',style:'width:100%; height:460px; border:1px solid #d9d9d9; display:block;'}}]}]}]}]}]}]})