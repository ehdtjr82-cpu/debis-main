/*amd /ui/ac/fi/stdinfomgnt/fi_100_13_02b.xml 24254 59b25acea326b510443118f5cce79e1d6f4f3a5d8f48e3ae2133a2a53e2173fd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vatNo',name:'부가세번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mainkey',name:'메인Key',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_urlList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vatNo',name:'부가세번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'silpNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'url',name:'URL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'displayText',name:'링크이름',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fileList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vatNo',name:'부가세번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSeq',name:'파일순번',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'fileId',name:'파일ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'FILE크기',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'fileClsCd',name:'파일종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileClsNm',name:'파일종류명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_urlListTemp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vatNo',name:'부가세번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'silpNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'url',name:'URL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'displayText',name:'링크이름',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_urlList',action:'/ac.fi.stdinfomgnt.RetrieveValueAddedTaxCertiCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_urlList","key":"OUT_DS"}]',target:'data:json,{"id":"ds_urlList","key":"OUT_DS"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_fileList',action:'/ac.fi.electaxinvc.RetreiveElecTaxinvcAttachInfoFileListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_urlListTemp","key":"OUT_DS1"},{"id":"ds_fileList","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_urlListTemp","key":"OUT_DS1"},{"id":"ds_fileList","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_100_13_02b
// 이름     : 외부거래명세서 리스트
// 경로     : 
// 사용계정 : 외부 사용자
// 비고     :
//            ds_urlListTemp : 파일 목록 조회시(sbm_fileList)  ds_urlList 원본이 지워지므로 대신 보냄
//
// 레포트   : random
//
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================

scwin.vatNo = "";
scwin.crn = "";
scwin.mainkey = "";
scwin.fileChk = "";
scwin.urlCnt = 0; // url 건수
scwin.fileCnt = 0; // file 건수

scwin.isLocal = false; // 로컬 여부 (true : 로컬, false : 개발/운영)
scwin.isProd = false; // 운영 여부 (true : 운영)

scwin.mainTop = 0; // 파일목록 높이 조절용

scwin.onpageload = function () {
  console.log("====== onpageload ==================v 1.05");
  scwin.onUdcCompleted();
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    // 초기엔 비어있다고 가정
    grp_empty.hide();
    grp_target.hide();
    grp_target_file.hide();
    scwin.initializeReportParameter();
    scwin.f_onLoadPage();

    // grp_container.getParent().redraw();

    // 오류 발생 : 아직 안그려짐
    // grp_container.setVisible(true);
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// f_onLoadPage : UI 생성을 위해 마지막에 호출 
//-------------------------------------------------------------------------
scwin.f_onLoadPage = async function () {
  console.log("=== f_onLoadPage");

  // debugger;
  await scwin.f_RetrieveUrl();
  if (scwin.fileChk == "Y") {
    // debugger;
    console.log("   [" + scwin.fileChk + "] --- 파일 목록 조회");
    await scwin.f_RetrieveFile();
  }

  // 링크 생성 (화면 구성) - UI 생성을 위해 마지막에 호출
  await scwin.makeLinkProcess();
};

//-------------------------------------------------------------------------
// makeLinkProcess 링크 생성
//-------------------------------------------------------------------------
scwin.makeLinkProcess = async function () {
  console.log("====== makeLinkProcess");

  //거래명세서가 1건 일경우는 바로 팝업을 띄운다.
  if (scwin.urlCnt > 0) {
    // 링크 생성
    await scwin.createLinkUrl();

    // XML로 링크 생성 : 라벨로 생성 (미사용)
    // setTimeout(function () {
    //     scwin.createLinkXml();
    // }, { delay: 10 });

    // 1건일 때에는 곧바로 레포트 로딩
    if (scwin.urlCnt == 1) {
      scwin.onClickLink(0);
    }
    grp_empty.hide();
    grp_target.show("");
    if (scwin.fileCnt > 0) {
      grp_target_file.show("");
      await scwin.createLinkFile();
    } else grp_target_file.hide();
  } else {
    grp_empty.show("");
    grp_target.hide();
    if (scwin.fileCnt > 0) {
      grp_target_file.show("");
      await scwin.createLinkFile();
    } else grp_target_file.hide();
  }
};

// @@ ====== 준비 ============================================================================== //

scwin.initializeReportParameter = function () {
  scwin.vatNo = scwin.getStartParameter("vatNo");
  scwin.crn = scwin.getStartParameter("crn");
  scwin.mainkey = scwin.getStartParameter("mainkey");
  scwin.fileChk = scwin.getStartParameter("fileChk");
  console.log("fi_100_13_02b vatNo", scwin.vatNo);
  console.log("fi_100_13_02b crn", scwin.crn);
  console.log("fi_100_13_02b mainkey", scwin.mainkey);
  console.log("fi_100_13_02b fileChk", scwin.fileChk);
};

//-------------------------------------------------------------------------
// 레포트 파라미터 추출
//   지정된 이름 추출 : & 로 구분
//     &certParam=param1=4A6  --> 이름 떼고, param1 부터 잘라냄
//-------------------------------------------------------------------------
scwin.getStartParameter = function (key) {
  try {
    const value = $p.getParameter(key);
    if (typeof value !== "undefined" && value !== null && value !== "") {
      return value;
    }
  } catch (e) {}
  try {
    const allParam = $p.getAllParameter() || {};
    const paramData = allParam.paramData || {};
    const nestedParamData = paramData.data || {};
    const menuInfo = paramData.menuInfo || {};
    const menuParam = menuInfo.menuParam || {};
    const dataObject = allParam.dataObject && allParam.dataObject.data ? allParam.dataObject.data : {};
    const candidate = paramData[key] || nestedParamData[key] || menuParam[key] || dataObject[key];
    if (typeof candidate !== "undefined" && candidate !== null && candidate !== "") {
      return candidate;
    }
  } catch (e) {}
  const query = window.location.search ? window.location.search.substring(1) : "";
  if (!query) {
    return "";
  }
  const parts = query.split("&");
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part) {
      continue;
    }
    const idx = part.indexOf("=");
    const queryKey = idx > -1 ? part.substring(0, idx) : part;
    if (decodeURIComponent(queryKey) !== key) {
      continue;
    }
    const queryValue = idx > -1 ? part.substring(idx + 1) : "";
    return decodeURIComponent(queryValue.replace(/\+/g, " "));
  }
  return "";
};

// @@ ====== 조회 (url) ========================================================================= //

//-------------------------------------------------------------------------
// 조회 (url 목록)
//-------------------------------------------------------------------------
scwin.f_RetrieveUrl = async function () {
  console.log("====== f_RetrieveUrl ==================");

  //vatNo 로 거래명세서 조회
  // ValueAddedTaxCertiCondDTO paramDTO = new ValueAddedTaxCertiCondDTO();
  // paramDTO.setVatNo(vatNo);
  // paramDTO.setCrn(crn);
  ds_search.setEmptyValue();
  ds_urlList.setJSON([]);
  const vatNo = (scwin.vatNo || "").trim();
  const crn = (scwin.crn || "").trim();
  ds_search.set("vatNo", vatNo);
  ds_search.set("crn", crn);
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  let e = await $c.sbm.execute($p, sbm_urlList);
  console.log("----- sbm_urlList_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) {
    console.log("실행오류. 거래명세서 조회가가 취소되었습니다. e [" + e.responseJSON.resultDataSet[0].Code + "]");
    await $c.gus.cfAlertMsg($p, "실행오류. 거래명세서 조회가가 취소되었습니다. [" + e.responseJSON.resultDataSet[0].Code + "]");
    return false;
  }
  scwin.urlCnt = ds_urlList.getTotalRow();
  console.log("  urlCnt (url 건수) [" + scwin.urlCnt + "]");

  // displayText 생성하여 옮기기 : generator 용 - 
  var list = ds_urlList.getAllJSON();
  for (var i = 0; i < list.length; i++) {
    list[i].displayText = "거래명세서 상세보기 " + (i + 1);
  }
  ds_urlList.setJSON(list);
  var dc = ds_urlList.getAllArray();
  console.log("  *** ds_urlList (" + ds_urlList.getTotalRow() + ") : " + JSON.stringify(dc));
};

//-------------------------------------------------------------------------
// url 변경
//-------------------------------------------------------------------------
scwin.changeUrl = function (idx) {
  let temp_url;
  console.log("  === changeUrl [" + idx + "][" + ds_urlList.getCellData(idx, "url") + "]    isLocal [" + scwin.isLocal + "]  isProd [" + scwin.isProd + "]");
  if (scwin.isLocal)
    // 로컬
    temp_url = ds_urlList.getCellData(idx, "url").replace("ebiz.debis.co.kr", "localhost:8080");else {
    if (scwin.isProd) {
      // 운영
      temp_url = ds_urlList.getCellData(idx, "url").replace("http://ebiz.debis.co.kr", "https://newdebis.dongwon.com");
    } else {
      // 개발
      temp_url = ds_urlList.getCellData(idx, "url").replace("http://ebiz.debis.co.kr", "https://newdevdebis.dongwon.com");
    }
  }
  return temp_url;
};

//-------------------------------------------------------------------------
// url 레포트 로딩
//-------------------------------------------------------------------------
scwin.onClickLink = function (e) {
  console.log("  onClickLink (url 레포트 로딩)");
  var idx = e; // generator에서 자동 제공

  console.log("  idx [" + idx + "]");
  let temp_url = scwin.changeUrl(idx);
  window.open(temp_url, "smpPop", "width=1100,height=700,scrollbars=no,resizable=yes");
};

//-------------------------------------------------------------------------
// 명세서 링크 생성  @@
//-------------------------------------------------------------------------
scwin.createLinkUrl = async function () {
  console.log("====== createLinkUrl (명세서 링크 생성) ==================");
  for (var i = 0; i < scwin.urlCnt; i++) {
    let idx = i; // 클로저 문제로 인해 클릭 시 값이 꼬이는 걸 방지
    var top = 20 + i * 35;
    scwin.mainTop = top; // 파일목록 높이 조절용

    var linkId = "btn_url_" + i;
    console.log("  linkId : " + linkId);

    // --------------- 버튼
    var _comp = $p.dynamicCreate(linkId, "trigger", {
      value: "거래명세서 상세보기 " + (i + 1),
      style: "position:absolute; width:150px;height:30px; left:20px;top:" + top + "px;" + "background:none;border:none;color:none; text-decoration:underline; cursor:pointer;" // 링크처럼 변경
      ,

      className: "btn_cm mr_def link_btn"
    }, grp_target //생성(추가)할 위치의 컴포넌트 객체 - 반드시 마지막
    );

    // 이벤트 바인딩
    _comp.bind("onclick", function (e) {
      console.log("동적 버튼 " + idx + " 클릭됨");

      // let temp_url;
      let temp_url = scwin.changeUrl(idx);
      let win_url = temp_url;
      console.log("  [" + idx + "] [" + win_url + "]");

      // width 는 개발서버에 적용됨
      window.open(win_url, "smpPop", "width=1100,height=700,scrollbars=no,resizable=yes");
    });
  } // end of for
};

// @@ ====== 조회 (file) ======================================================================== //

//-------------------------------------------------------------------------
// 조회 (파일 목록)
//-------------------------------------------------------------------------
scwin.f_RetrieveFile = async function () {
  console.log("====== f_RetrieveFile ==================");

  //vatNo 로 거래명세서 조회
  // ValueAddedTaxCertiCondDTO paramDTO = new ValueAddedTaxCertiCondDTO();
  // paramDTO.setVatNo(vatNo);
  // paramDTO.setCrn(crn);
  ds_search.setEmptyValue();
  ds_fileList.setJSON([]);
  ds_search.set("vatNo", scwin.vatNo);
  ds_search.set("crn", scwin.crn);
  ds_search.set("mainkey", scwin.mainkey);
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  let e = await $c.sbm.execute($p, sbm_fileList);
  if (e.responseJSON.resultDataSet[0].Code != 0) {
    console.log("실행오류. 거래명세서 조회가가 취소되었습니다. e [" + e.responseJSON.resultDataSet[0].Code + "]");
    await $c.gus.cfAlertMsg($p, "실행오류. 거래명세서 조회가가 취소되었습니다. [" + e.responseJSON.resultDataSet[0].Code + "]");
    return false;
  }
  scwin.fileCnt = ds_fileList.getTotalRow();
  console.log("  fileCnt (file 건수) [" + scwin.fileCnt + "]");
  var dc = ds_fileList.getAllArray();
  console.log("  *** ds_fileList (" + ds_fileList.getTotalRow() + ") : " + JSON.stringify(dc));
  if (scwin.fileCnt > 0) {
    // scwin.createFileLink();
  }
};

//-------------------------------------------------------------------------
// 파일목록 링크 생성
//-------------------------------------------------------------------------
scwin.createLinkFile = async function () {
  console.log("====== createFileLink (파일목록 링크 생성) ==================");
  for (var i = 0; i < scwin.fileCnt; i++) {
    let idx = i; // 클로저 문제로 인해 클릭 시 값이 꼬이는 걸 방지
    let idx2 = i; // 클로저 문제로 인해 클릭 시 값이 꼬이는 걸 방지

    var temp_top = 30 + i * 20 + scwin.mainTop; // 거래명세서 리스트 만큼 높이 조정

    // ===== 아이콘 생성
    var compId = "img_icon_" + i;
    var _compIco = $p.dynamicCreate(compId, "image", {
      src: "/cm/images/base/btn_file.png",
      style: "position:absolute; width:20px; height:20px; left:20px; top:" + temp_top + "px;"
    }, grp_target);

    // ===== 파일명 생성

    var linkId = "btn_file_" + i;

    // 생성된 trigger의 value 할당
    var tempValue = ds_fileList.getCellData(idx, "fileName").replace(/&/g, "&amp;").replace(/\+/g, " ");
    var charWidth = 9; // 글자당 대략 px
    //  & 가 &amp; 로 변환되므로, 길이 왜곡되므로 변환 시켜야 함
    var width = tempValue.replace(/&amp;/g, "&").length * charWidth + 10;
    console.log("  [" + idx + "]  파일명(linkId) [" + linkId + "]   value : [" + width + "] [" + tempValue + "]");

    // 버튼(링크) left
    var btnLeft = 40;
    var _comp2 = $p.dynamicCreate(linkId, "trigger", {
      value: tempValue
      // , style: "position:absolute; text-align:left; width:300px;height:30px; left:20px;top:"+temp_top+"px;"
      ,

      style: "position:absolute; text-align:left;height:30px; left:" + btnLeft + "px;top:" + temp_top + "px;width:" + width + "px;" + "background:none;border:none;color:blue; text-decoration:underline; cursor:pointer;" // 링크처럼 변경
      ,

      className: "btn_cm mr_def link_btn"
    }, grp_target //생성(추가)할 위치의 컴포넌트 객체
    );

    // 이벤트 바인딩 - 파일명에만 설정
    _comp2.bind("onclick", function (e) {
      console.log("동적 버튼 " + idx + " [" + this.id + "] 클릭됨");
      let file_name = ds_fileList.getCellData(idx, "fileName");
      let file_path = ds_fileList.getCellData(idx, "filePath");
      console.log(" [" + idx + "] [" + file_name + "][" + file_path + "]");
      $c.gus.cfDownloadFile($p, file_name, file_path);

      // 파일 다운로드
      // scwin.popupOpen(temp_url);
    });

    // ===== 라벨 생성

    var linkId2 = "lbl_file_" + i;

    // 생성된 trigger의 value 할당
    var labelValue = "[" + ds_fileList.getCellData(idx2, "fileClsNm") + "] (" + ds_fileList.getCellData(idx2, "fileSize") + " bytes)";
    console.log("  [" + idx2 + "] 파일종류/사이즈 [" + linkId2 + "]   value : " + labelValue + "");

    // KYU_TEST : 왼쪽 겹침 주의 : left:"+(20+width+20)
    //            left:"+(width+20)  으로 쓰면 컴포넌트가 앞에 파일명과 겹쳐져서 0 번 누르는데 1번 눌리게 됨
    var _comp3 = $p.dynamicCreate(linkId2, "trigger", {
      value: labelValue
      // , style: "position:absolute; text-align:left; width:150px;height:30px; left:350px;top:"+temp_top+"px;"
      ,

      style: "position:absolute; text-align:left; width:200px;height:30px; left:" + (btnLeft + width + 20) + "px;top:" + temp_top + "px;" + "background:none;border:none;color:none;" // 일반 문자
      ,

      className: "btn_cm mr_def link_btn"
    }, grp_target //생성(추가)할 위치의 컴포넌트 객체
    );
  } // end of for
};

// @@ ====== 미사용 ============================================================================ //

//-------------------------------------------------------------------------
// 링크 생성 xml (미사용)
//-------------------------------------------------------------------------
scwin.createLinkXml = function () {
  console.log("====== createLinkXml (xml 방식으로 링크 생성) ==================");

  // 로컬 여부 : false 로 해서 반영할 것
  scwin.isLocal = false;
  var parentObj = $p.getComponentById("grp_target");
  if (!parentObj || !parentObj.rendered) {
    console.log("     *** 아직 안그려짐 → 재시도");
    setTimeout(function () {
      scwin.createLinkXml();
    }, 1000);
    return;
  }

  // 기존 리스트 초기화
  if (parentObj && parentObj.removeAll) {
    parentObj.removeAll();
  }
  for (var i = 0; i < scwin.urlCnt; i++) {
    let idx = i; // 클로저 문제로 인해 클릭 시 값이 꼬이는 걸 방지
    var temp_top = 20 + i * 35;
    var liId = "li_" + idx;
    var aId = "a_" + idx;

    // 1. li 생성
    var liObj = $p.dynamicCreate(liId, "group", {
      // id: liId,
      tagname: "li"
    }, parentObj);
    var compId = "lbl_" + i;
    var temp_value = "거래명세서 상세보기 " + (idx + 1);

    // 2. anchor 생성 (li 안에)
    var anchorObj = $p.dynamicCreate(aId, "anchor", {
      // id: aId,
      className: "btn_cm mr_def",
      outerDiv: false
    }, liObj);

    // console.log("   li : "+liId+"  anchor : "+aId);

    // --------------- 라벨

    _comp = $p.dynamicCreate(compId, "label", {
      value: temp_value
      // , style: "position:absolute; width:150px;height:30px; left:20px;top:"+temp_top+"px;"
      // , style: "width:150px;height:30px; left:20px;top:"+temp_top+"px;"
      ,

      className: "btn_cm mr_def"
    }, anchorObj //생성(추가)할 위치의 컴포넌트 객체 - 반드시 마지막
    );

    // --------------- 버튼
    // _comp = $p.dynamicCreate(
    //         compId,
    //         "trigger",
    //         {
    //              value: "거래명세서 상세보기 " + (i + 1)
    //             , style: "position:absolute; width:150px;height:30px; left:20px;top:"+temp_top+"px;"
    //             , className: "btn_cm mr_def"
    //         },
    //         anchorObj  //생성(추가)할 위치의 컴포넌트 객체 - 반드시 마지막
    // );

    // // 클릭 이벤트 바인딩
    // comp.bind("onclick", function(e) {
    //     console.log("클릭된 라벨 ID:", this.getID());
    // });

    // 클릭 이벤트 연결
    // label.addEventListener("onclick", function(e) {
    //     console.log("클릭된 라벨 ID: " + e.target.id);
    // });

    // 클릭 이벤트
    // anchorObj.bind("onclick", function() {

    //     let temp_url;

    //     if (scwin.isLocal) {
    //         temp_url = ds_urlList.getCellData(idx, "url")
    //             .replace("ebiz.debis.co.kr", "localhost:8080");
    //     } else {
    //         temp_url = ds_urlList.getCellData(idx, "url")
    //             .replace("http://ebiz.debis.co.kr", "https://newdevdebis.dongwon.com");
    //     }

    //     window.open(
    //         temp_url,
    //         "smpPop",
    //         "width=1100,height=700,scrollbars=no,resizable=yes"
    //     );
    // });
  } // end of for
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'grp_empty',class:'',visible:'true'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래명세서가 존재하지 않습니다. ',style:''}}]},{T:1,N:'xf:group',A:{id:'grp_target',tagname:'ul',class:'',visible:'true',style:''}},{T:1,N:'xf:group',A:{id:'grp_target_file',tagname:'ul',class:'',visible:'true',style:''}}]}]}]}]}]})