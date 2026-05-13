/*amd /ui/il/common/xml/ilpopupdefine.xml 140406 faf554d41a8de4c1855206d320abb611cdf420e9029c7df972b57f478f678ed7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',A:{ttc:''},E:[{T:3,text:'COMMON'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.setParamset,scwin.getPopupUrl,scwin.setGridLogic'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @component
 * @componentName udc_ilpopupdefine
 * @pluginName 
 * @company
 * @developer
 * @category /ui/il/common/xml
 * @notSupportBrowser 
 * @version
 * @htmlRender
 * @icon
 * @disableIcon
 * @description
 * @width
 * @height
 * @license 
 * @imagePath 
 * @homepage 
 */

scwin.onpageload = function ($p) {};

/**
 * @method
 * @name setParamset
 * @description 파라미터 추가
 * @param {string} selectId 팝업 SELECT ID
 * @param {array} param1 desc
 * @param {string} param2 desc
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.setParamset = function ($p, pSelectID, param1, param2) {
  switch (pSelectID) {
    case "retrieveAccdVehclInfo":
      if (scwin.options.pWhere == "TR") {
        param1[0][0] = "차량코드조회"; //타이틀
        param1[0][1] = "단축코드"; //조회조건명 1
        param1[0][2] = "차량번호"; //조회조건명 2
      } else if (scwin.options.pWhere == "LO") {
        param1[0][0] = "차량코드조회"; //타이틀
        param1[0][1] = "장비번호"; //조회조건명 1
        param1[0][2] = "차량번호"; //조회조건명 2
      }
      break;
    default:
  }
};

/**
 * @method
 * @name getPopupUrl
 * @description url 정보
 * @param {string} selectId 팝업 SELECT ID
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.getPopupUrl = function ($p, pSelectID) {
  let url;
  switch (pSelectID) {
    case "retrieveRentloanList":
      url = "/ui/ac/fm/collmoneymgnt/rcptmgnt/fm_502_03_04p.xml";
      break;
    case "retrieveAcctDeptCdInfo10":
      url = "/cm/zz/commonPopup2.xml";
      break;
    case "retrieveCarNrmCdInfo":
      url = "/ui/ds/op/rscconfirm/transrscconfirm/op_101_01_17p.xml";
      break;
    case "retrieveContainerNo":
      url = "/cm/zz/commonContainerPopup.xml";
      break;
    case "retrieveConteinerInfo":
      url = "/ui/ds/op/wrkrslts/railroadwrkrslts/op_205_01_01p.xml";
      break;
    case "retrieveTchPcVehclList":
    case "retrieveTchPcLotNo":
    case "retrieveTmlAdmitckCdInfo":
    case "retrieveTchPcVehclShortNoPopup":
    case "retrieveTchPcSizePopup":
      url = "/cm/zz/commonToPopup.xml";
      break;
    case "retrieveBlNo":
    case "retrieveBookingNo":
    case "retrieveOdrNo":
      url = "/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_03p1.xml";
      break;
    case "retrieveOrderVolume":
      url = "/ui/ds/op/wrkplan/railroadwrkplan/op_203_01_01p.xml";
      break;
    case "retrieveRentCarVehclNewInfo":
      url = "/ui/ps/rc/op/accdmgnt/rc_330_01_n02p.xml";
      break;
    case "retrieveVatDeclarAcctDeptCd":
    case "retrieveVatDeclarAcctDeptCdAcctDeptCd":
      url = "/ui/ac/fi/stdinfomgnt/fi_100_06_01p.xml";
      break;
    case "retrieveIFRSAcctCdInfo":
      url = "/ui/ac/fi/ifrs/stdinfomgnt/fi_500_01_01p.xml";
      break;
    case "retrieveIFRSAcctCdInfo2":
      url = "/ui/ac/fi/ifrs/stdinfomgnt/fi_500_02_01p.xml";
      break;
    case "retrieveDongbuGroupCompanyInfo":
      url = "/ui/ac/fi/stdinfomgnt/fi_100_02_02p.xml";
      break;
    default:
      url = "/ui/il/common/xml/ilCommonPopup.xml";
  }
  return url;
};

/**
 * @method
 * @name setGridLogic
 * @description 팝업 그리드 세팅 로직
 * @param {string} selectId 팝업 SELECT ID
 * @param {object} options desc
 * @param {array} arrParm desc
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.setGridLogic = function ($p, selectId, options, arrParm) {
  let sTitle;
  let sHidden;
  switch (selectId) {
    //타이틀,조회조건Title1,조회조건Title2,XML_SELECT_ID,PopupClose유무(T/F),Display칼럼개수,중복체크여부,전체검색여부,입력Len(CD),입력Len(NM),POPUP조건입력Disable여부
    case "retrieveZipList":
      arrParm[0] = ["우편번호", "우편번호", "동이름", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "우편번호,주소,주소,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "2,4,5,6,7,8,9,10";
      break;
    case "retrievelocNmInfo":
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrievelocNmInfo2":
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "getCommonCodeInfo":
      arrParm[0] = ["공통코드", "코드그룹", "코드명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "공통코드명,COL2,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveClntList":
      arrParm[0] = ["거래처팝업", "거래처코드", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "거래처코드,거래처명,그룹거래처여부,상위거래처번호,사업자번호,거래처구분,거래처직원,주소,요율연결여부,Info";
      sHidden = "3,4,6,10";
      break;
    case "retrieveClntInfo":
      arrParm[0] = ["거래처팝업", "거래처코드", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "거래처코드,거래처명,상위거래처코드,거래처구분,거래처구분명,거래처주소,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveClntInfo2":
      arrParm[0] = ["거래처팝업", "거래처코드", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "거래처코드,거래처명,상위거래처코드,거래처구분,거래처구분명,거래처주소,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrievePchsClntInfo":
      arrParm[0] = ["매입거래처팝업", "거래처번호", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "매입거래처코드,매입거래처명,거래처구분,거래처구분명,거래처주소,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveEqListInfo":
      arrParm[0] = ["장비팝업", "단축코드", "장비명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "단축코드,장비명,차량FULL번호,모델코드,모델명,구분,분류,종류,장비코드,Info";
      sHidden = "4,9,10";
      break;
    case "retrieveEqCdListInfo":
      arrParm[0] = ["장비팝업", "장비코드", "장비명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "장비코드,장비명,차량FULL번호,모델명,제조사,분류,종류,소유구분,배정점소코드,점소명";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveEqBasicListInfo":
      arrParm[0] = ["장비팝업", "장비코드", "차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "장비코드,차량FULL번호,단축코드,모델명,제조사,분류,종류,소유구분,배정점소코드,점소명";
      sHidden = "";
      break;
    case "retrieveEqModelListInfo":
      arrParm[0] = ["장비모델팝업", "모델코드", "모델명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "모델코드,모델명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveVehclNoListInfo":
      arrParm[0] = ["차량번호팝업", "차량번호", "차량단축코드", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량번호,차량단축코드,차량번호소속,상태코드,소속명,장비상태명,COL7,COL8,COL9,Info";
      sHidden = "3,4,7,8,9,10";
      break;
    case "retrievePartInfo":
      arrParm[0] = ["부품", "부품코드", "부품명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "부품코드,부품명,단위코드,단위명,COL5,COL6,장비모델명,COL8,COL9,Info";
      sHidden = "5,6,8,9,10";
      break;
    case "retrievePartBasicInfo":
      arrParm[0] = ["부품", "부품코드", "부품명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "부품코드,부품명,COL3,COL4,COL5,COL6,COL7,COL8,모델명,Info";
      sHidden = "3,4,5,6,7,8,10";
      break;
    case "retrieveRcPartInfo":
      arrParm[0] = ["부품", "부품코드", "부품명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "부품코드,부품명,단위코드,단위명,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveChgBfUPrInfo":
      arrParm[0] = ["부품단가", "부품단가", "부품단가", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "부품단가,COL2,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveMgntAcctCdInfo":
      arrParm[0] = ["관리계정", "관리계정코드", "관리계정명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "관리계정코드,관리계정명,COL3,COL4,COL5,계정레벨,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveMgntAcctCdInfo2":
      arrParm[0] = ["관리계정", "계정코드", "계정명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "계정코드,계정명,COL3,COL4,COL5,계정레벨,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveMgntAcctCdInfo3":
      arrParm[0] = ["관리계정", "계정코드", "계정명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "계정코드,계정명,COL3,COL4,COL5,계정레벨,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveAcctCdInfo":
      arrParm[0] = ["계정", "계정코드", "계정명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "계정코드,계정명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCommCdInfo":
      arrParm[0] = ["공통코드", "코드", "코드명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "코드,코드명,영문명,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveEmpInfo":
      arrParm[0] = ["사번", "사원", "사원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = ",,,,,,,,,";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveEmpInfoLo":
      arrParm[0] = ["사원조회[물류]", "사원번호", "사원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "점소명,사원번호,사원명,직급,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveLoBranEmpInfo":
      arrParm[0] = ["사번", "사원", "사원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사번,사원명,물류부서코드,물류부서명,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCommInfo":
      arrParm[0] = ["거래처품명", "품명코드", "품명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "품명코드,품명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveKcgInfo":
      arrParm[0] = ["화종", "화종코드", "화종", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "화종코드,화종,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveLogisDeptInfo":
      arrParm[0] = ["물류점소", "점소코드", "점소명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "점소코드,점소명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveWrkPlInfo":
      arrParm[0] = ["작업장", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장코드,작업장명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveWrkPlInfo2":
      arrParm[0] = ["작업장", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장코드,작업장명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveWrkPlInfo3":
      arrParm[0] = ["작업장", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장코드,작업장명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveWrkPlInfoByKind":
      arrParm[0] = ["작업장", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장코드,작업장명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveWrkPlInfoNoDataAutoClose":
      arrParm[0] = ["작업장", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장코드,작업장명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveWrkPlInfoEdi":
      arrParm[0] = ["작업장", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장코드,작업장명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveWorkPlaceInfo":
      arrParm[0] = ["정비작업장", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장코드,작업장명,COL3,COL4,COL5,COL6,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveLobranInfo":
      arrParm[0] = ["소속점소", "소속점소코드", "소속점소명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "소속점소코드,소속점소명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveVsslCdInfo":
      arrParm[0] = ["선박정보", "선박코드", "선박명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "선박코드,선박명,선박영문명,선박거래처번호,LINE거래처번호,관세청선박코드,선박용도코드,신호부자코드,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrievePortInfo":
      arrParm[0] = ["항구정보", "항구코드", "항구명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "항구코드,항구명,물류점소코드,국가코드,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrievePrivGrpIdInfo":
      arrParm[0] = ["권한그룹조회", "권한그룹코드", "권한그룹명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "권한그룹코드,권한그룹명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveAcctDeptCdInfo":
      arrParm[0] = ["귀속부서조회", "귀속부서코드", "귀속부서명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "귀속코드,부서명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveAcctDeptCdInfoBef":
      arrParm[0] = ["귀속부서조회", "귀속부서코드", "귀속부서명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "귀속코드,부서명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveAcctDeptCdInfo2":
      arrParm[0] = ["귀속부서조회", "귀속부서코드", "귀속부서명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "귀속코드,부서명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveTaxOfficeCdInfo":
      arrParm[0] = ["세무서조회", "세무서코드", "세무서명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "세무서코드,세무서명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveDOfficeCdInfo":
      arrParm[0] = ["구청조회", "구청코드", "구청명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "구청코드,구청명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveBankCdInfo":
      arrParm[0] = ["은행조회", "은행코드", "은행명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "은행코드,은행명,COL3,COL4,COL5,COL6,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveBankBookCdInfo":
      arrParm[0] = ["통장조회", "통장코드", "통장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "통장번호,은행코드,통장명,관리부서코드,계좌번호,통장종류코드,은행명,관리부서명,COL9,Info";
      sHidden = "2,4,6,9,10";
      break;
    case "retrieveAcEmpInfo":
      arrParm[0] = ["사원조회", "사원코드", "사원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사원코드,사원명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveFixEmpInfo":
      arrParm[0] = ["사원조회", "사원코드", "사원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사원코드,사원명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveVehiclesModelInfo":
      arrParm[0] = ["자동차모델조회", "모델코드", "모델명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "모델코드,모델명,제조사코드,제조사명,연료종류코드,배기량코드,COL7,COL8,COL9,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveBizDomCdInfo":
      arrParm[0] = ["사업영역조회", "사업영역코드", "사업영역명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사업영역코드,사업영역명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveBizdivCdInfo":
      arrParm[0] = ["사업부조회", "사업부코드", "사업부명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사업부코드,사업부명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveOpDeptCdInfo":
      arrParm[0] = ["부서조회", "부서코드", "부서명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "부서코드,부서명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveOpDeptCdInfo2":
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrievePathCdInfo":
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveOpEmpCdInfo":
      arrParm[0] = ["정규직조회", "정규직원코드", "정규직원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "정규직원코드,정규직원명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveOpExEmpCdInfo":
      arrParm[0] = ["외부인원조회", "외부인원코드", "외부인원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "외부인원코드,외부인원명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveOpClntCdInfo":
      arrParm[0] = ["소속업체조회", "소속업체코드", "소속업체명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "소속업체코드,소속업체명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveSelfOilStationInfo":
      arrParm[0] = ["자가주유소", "주유소코드", "주유소명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "주유소코드,주유소명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveFixedAsetPatternCdInfo":
      arrParm[0] = ["고정자산유형조회", "유형코드", "유형명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "유형코드,유형명,COL3,COL4,COL5,COL6,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveLineInfo":
      arrParm[0] = ["LINE조회", "LINE코드", "LINE명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "LINE코드,LINE명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveTrEmpInfo":
      arrParm[0] = ["고속기사조회", "고속기사코드", "고속기사명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "고속기사코드,고속기사명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "";
      break;
    case "retrieveAcctCdContentsInfo":
      arrParm[0] = ["계정조회", "계정코드", "계정명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "계정코드,계정명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveRgnInfo":
      arrParm[0] = ["지역조회", "지역코드", "지역명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "지역코드,지역명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveRentCarContractVehiclesInfo":
      arrParm[0] = ["차량번호팝업", "차량코드", "차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량코드,차량번호,모델,배기량,장비코드, ,렌터카상태코드,계약시작일,계약종료일,계약번호";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveShortRentCarVehiclesInfo":
      arrParm[0] = ["차량번호팝업", "차량코드", "대여영업소코드", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량코드,차량번호,모델,장비코드,모델코드 , ,렌터카상태코드,계약시작일,계약종료일,대여영업소코드";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveEvidInfo":
      arrParm[0] = ["증빙조회", "증빙코드", "증빙명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "증빙코드,증빙명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCardInfo":
      arrParm[0] = ["카드조회", "카드번호", "사용자", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "카드번호,카드종류,사용자,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveCrnInfo":
      arrParm[0] = ["사업자번호조회", "사업자번호", "사업자명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사업자번호,사업자명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCreditCrnInfo":
      arrParm[0] = ["사업자번호조회", "사업자번호", "사업자명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사업자번호,사업자명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveRentCarClntInfo":
      arrParm[0] = ["거래처팝업", "거래처코드", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "코드,거래처명,사업자번호,사업자구분코드,사업자구분명,거래처주소,COL7,COL8,COL9,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveExpressEmpInfo":
      arrParm[0] = ["고속직원찾기팝업", "사원", "사원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사원번호,성명,직위코드,직위구분,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,5,6,7,8,9,10";
      break;
    case "retrieveExpressPersonInfo":
      arrParm[0] = ["고속직원찾기팝업", "사원", "사원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "영업소코드,영업소,사원번호,성명,직위/기사구분,COL6,COL7,COL8,COL9,Info";
      sHidden = "1,6,7,8,9,10";
      break;
    case "retrieveHirecarCompanyInfo":
      // popupdefine과 타이틀 상이
      arrParm[0] = ["용차사찾기팝업", "용차사코드", "용차사명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "용차사코드,용차사명,대표전화,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveOfcInfo":
      arrParm[0] = ["고속영업소조회", "영업소코드", "영업소명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "영업소코드,영업소명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveOfcAllInfo":
      arrParm[0] = ["고속영업소조회", "영업소코드", "영업소명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "영업소코드,영업소명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveHeavyMachineryInfo":
      arrParm[0] = ["가용장비조회", "중기단축번호", "중기명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "중기번호,단축번호,중기명,장비FULL명,중기종류,규격(ton),소속,COL8,COL9,Info";
      sHidden = "1,8,9,10";
      break;
    case "retrieveHeavyMachineryClntInfo":
      arrParm[0] = ["중기협력업체조회", "협력업체코드", "협력업체명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "협력업체코드,협력업체명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveClntHeavyMachineryInfo":
      arrParm[0] = ["중기조회", "중기코드", "중기명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "중기코드,중기명,규격코드,규격,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,5,6,7,8,9,10";
      break;
    case "retrieveBankInfo":
      arrParm[0] = ["은행조회", "은행코드", "은행명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "은행코드,은행명,COL3,COL4,COL5,COL6,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveRouteInfo":
      arrParm[0] = ["노선조회", "노선코드", "노선명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "노선코드,노선명,COL3,COL4,COL5,COL6,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveEmpDeptClntInfo":
      arrParm[0] = ["사원조회", "사원코드", "사원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사원코드,사원명,부서코드,부서명,거래처코드,거래처명,COL7,COL8,COL9,Info";
      sHidden = "7,8,9,10";
      break;
    case "retrieveVehiclesInformation":
      arrParm[0] = ["차량조회", "차량코드", "차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "COL1,코드,차량번호,거래처명,COL5,COL6,COL7,COL8,거래처코드,Info";
      sHidden = "1,5,6,7,8,10";
      break;
    case "retrieveVehiclesNoWrkDt":
      arrParm[0] = ["차량번호조회", "차량단축코드", "차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량단축코드,차량번호,COL3,COL4,COL5,COL6,COL7,COL8,거래처코드,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveAsetKndInfo":
      arrParm[0] = ["자산종류조회", "자산종류코드", "자산종류명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "자산종류코드,자산종류명,COL3,COL4,COL5,COL6,COL7,COL8,거래처코드,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveBondZone":
      arrParm[0] = ["보세구역조회", "보세구역코드", "보세구역명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "보세구역코드,보세구역명,COL3,COL4,COL5,COL6,COL7,COL8,거래처코드,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveVehiclesNo":
      arrParm[0] = ["차량번호조회", "차량코드", "차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량코드,차량단축코드,차량번호,COL4,COL5,COL6,COL7,COL8,거래처코드,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveChassis":
      arrParm[0] = ["샤시조회", "단축코드", "샤시번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "단축번호,샤시번호,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveEmpNoDeptInfo":
      arrParm[0] = ["관리사원", "사원번호", "사원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사원번호,사원명,직급,부서명,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveSelpchItemInfo":
      arrParm[0] = ["매출입항목", "항목코드", "항목명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "매출입항목코드,매출입항목명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCtrtSelpchItemInfo":
      arrParm[0] = ["매출입항목", "항목코드", "항목명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "매출입항목코드,매출입항목명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveSellingOfcInfo":
      arrParm[0] = ["고속영업소조회", "영업소코드", "영업소명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "영업소코드,영업소명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveTrainWorkPlace":
      arrParm[0] = ["철도작업장조회", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장코드,작업장명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveSlipKndCd":
      arrParm[0] = ["전표종류조회", "전표코드", "전표종류", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "전표코드,전표종류,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrievePgmInfo":
      arrParm[0] = ["프로그램정보조회", "프로그램ID", "프로그램명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "프로그램ID,프로그램명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveWordDictInfo":
      arrParm[0] = ["단어사전조회", "단어사전ID", "단어한글명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "단어사전ID,단어한글명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCountryCodeInfo":
      arrParm[0] = ["국가코드조회", "국가코드", "국가명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "국가코드,국가명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveAFRSCACCodeInfo":
      // il Only
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveAFRCALLSIGNCodeInfo":
      // il Only
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveAFRSPCCodeInfo":
      // il Only
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveAFRUNCodeInfo":
      // il Only
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCountryEngCodeInfo":
      // il Only
      arrParm[0] = ["", "", "", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "";
      sHidden = "";
      break;
    case "retrieveCvsslMgntNo":
      arrParm[0] = ["본선관리번호조회", "본선관리번호", "수출입구분코드", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "본선관리번호,선박코드,항구코드,마감일시,선사항차,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveClntTansList":
      arrParm[0] = ["거래처팝업", "거래처코드", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "거래처코드,거래처명,거래처종류코드,사업자구분코드,업체구분코드,그룹거래처여부,상위거래처번호,사업자등록번호,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveBilgMchtList":
      arrParm[0] = ["화주팝업", "화주코드", "화주명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "화주코드,화주명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveDistrictList":
      arrParm[0] = ["권역조회", "권역코드", "권역명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "권역코드,권역명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveRentCarVehclInfo":
      arrParm[0] = ["차량번호조회", "차량코드", "차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량코드,차량번호,모델명,,배기량,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,6,7,8,9,10";
      break;
    case "retrieveRentCarAllVehclInfo":
      arrParm[0] = ["차량번호조회", "차량코드", "차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량코드,차량번호,모델명,,배기량,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,6,7,8,9,10";
      break;
    case "retrieveBlNoList":
      arrParm[0] = ["B/L번호조회", "B/L번호", "MRN", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "MRN,H B/L,MSN,HSN,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveVehclListInfo":
      arrParm[0] = ["장비조회", "차량번호", "장비코드", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량번호,장비코드,년식,배정물류점소,정기검사만료일자,정밀검사만료일자,정기점검만료일자";
      sHidden = "8,9,10";
      break;
    case "retrieveFixWrkSdListInfo":
      arrParm[0] = ["작업표준", "작업표준코드", "작업표준명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업표준코드,작업표준명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrievePartYnInfo":
      arrParm[0] = ["부품", "부품코드", "부품명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "부품코드,부품명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveLineInfoList":
      //selectId 변경되는 대상
      arrParm[0] = ["LINE조회", "LINE코드", "LINE명", "retrieveLineInfo", options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "LINE코드,LINE명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveCoopList":
      arrParm[0] = ["협력업체조회", "협력업체코드", "협력업체명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "협력업체코드,협력업체명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveLineCoopList":
      arrParm[0] = ["협력업체조회", "협력업체코드", "협력업체명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "협력업체코드,협력업체명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveSellClntList":
      arrParm[0] = ["협력업체조회", "협력업체코드", "협력업체명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "협력업체코드,협력업체명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveVehicleCoopList":
      arrParm[0] = ["협력업체조회", "협력업체코드", "협력업체명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "협력업체코드,협력업체명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCarNoInfo":
      arrParm[0] = ["차량번호조회", "차량번호", "년식", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량번호,차량구분,년식,COL4,COL5,COL6,좌석수,COL8,COL9,Info";
      sHidden = "4,5,6,8,9,10";
      break;
    case "retrieveCarNrmCdInfo":
      arrParm[0] = ["차량규격조회", "차량규격코드", "차량규격명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량규격코드,차량규격명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrievevehclShortListInfo":
      arrParm[0] = ["매각차량", "차량코드", "차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량코드,차량번호,모델,배기량,COL5,COL6,COL7,COL8,소유구분,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveCarKindClntInfo":
      arrParm[0] = ["차량중기 협력업체조회", "협력업체코드", "협력업체명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "협력업체코드,협력업체명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveClntTansTRList":
      arrParm[0] = ["거래처조회", "거래처코드", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "거래처코드,거래처명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveClntNoTansTRList":
      arrParm[0] = ["고속거래처조회", "거래처코드", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "거래처코드,거래처명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveVehclNoTRList":
      arrParm[0] = ["차량조회", "차량번호", "장비코드", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "eqCd,차량번호,좌석수,차량번호(Full),COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "1,3,5,6,7,8,9,10";
      break;
    case "retrieveFundAcctCdInfo":
      arrParm[0] = ["자금계정코드 조회", "계정코드", "계정명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "계정코드,계정명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveRentCarBadClntInfo":
      arrParm[0] = ["렌터카불량거래처팝업", "주민등록번호", "불량거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "주민등록번호,불량거래처명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveClntCrnInfo":
      arrParm[0] = ["거래처사업자(주민)번호팝업", "사업자(주민)번호", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사업자(주민)번호,거래처명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveClntCrnInfo2":
      arrParm[0] = ["거래처사업자(주민)번호팝업", "사업자(주민)번호", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사업자(주민)번호,거래처명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveHandlingChargeClntInfo":
      arrParm[0] = ["조작료매입처조회", "업체코드", "업체명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "업체코드,업체명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveDsCommCdInfo":
      arrParm[0] = ["공통코드조회", "코드", "코드명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "코드,코드명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveBuyClntList":
      arrParm[0] = ["소유업체조회", "소유업체코드", "소유업체명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "소유업체코드,소유업체명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveBorrLedgNoInfo":
      arrParm[0] = ["차입번호조회", "차입번호", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차입번호,차입기관,차입일자,만기일,이율,차입원화,COL7,COL8,COL9,Info";
      sHidden = "7,8,9,10";
      break;
    case "retrieveSpotCarInfo":
      arrParm[0] = ["SPOT차량조회", "협력업체코드", "SPOT차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "SPOT차량번호,기사명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveSpotCarInfo2":
      arrParm[0] = ["SPOT차량조회", "SPOT차량번호", "SPOT차량명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "SPOT차량번호,기사명,업체번호,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrievePortcntInfo":
      arrParm[0] = ["선명항차 조회", "선명항차", "", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "선명항차,COL2,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "2,3,4,5,6,7,8,9,10";
      break;
    case "retrieveRouteSalesInfo":
      arrParm[0] = ["노선조회", "노선코드", "노선명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "노선코드,노선명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCarModelCdInfo":
      arrParm[0] = ["모델명조회", "모델코드", "모델명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "모델코드,모델명,구분코드,구분명,분류코드,분류명,종류코드,종류명,규격코드,규격명";
      sHidden = "";
      break;
    case "retrieveVatDeclarAcctDeptCdAcctDeptCd":
      arrParm[0] = ["", "", "", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "";
      sHidden = "";
      break;
    case "retrieveVatDeclarAcctDeptCd":
      arrParm[0] = ["", "", "", "retrieveVatDeclarAcctDeptCdAcctDeptCd", options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "";
      sHidden = "";
      break;
    case "retrieveFixClntList":
      arrParm[0] = ["정비거래처조회", "거래처코드", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "거래처코드,거래처명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "";
      break;
    case "retrieveVehclList":
      arrParm[0] = ["차량번호팝업", "차량단축코드", "차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량단축코드,차량FULL번호,장비상태명,소속코드,소속명,장비명,규격,규격코드,기사명,기사핸드폰번호 ";
      sHidden = "8";
      break;
    case "retrieveVehclList2":
      arrParm[0] = ["차량번호팝업", "차량단축코드", "차량번호", "retrieveVehclList", options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량단축코드,차량FULL번호,장비상태명,소속코드,소속명,장비명,규격,규격코드,기사명,Info";
      sHidden = "8,10";
      break;
    case "retrieveKndVehclListInfo":
      arrParm[0] = ["장비조회", "장비단축번호", "장비번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "단축번호,장비번호,장비코드,년식,배정물류점소,정기검사만료일자,정밀검사만료일자,정기점검만료일자";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveObsoleteTargetRentCarVehclInfo":
      arrParm[0] = ["말소대상 차량번호 조회", "차량코드", "차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량코드,차량번호,모델명,,배기량,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,6,7,8,9,10";
      break;
    case "retrieveObsoleteChangeRentCarVehclInfo":
      arrParm[0] = ["말소변경 차량번호 조회", "차량코드", "차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량코드,차량번호,모델명,,배기량,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,6,7,8,9,10";
      break;
    case "retrieveEqModelList":
      arrParm[0] = ["장비모델조회", "장비모델코드", "장비모델명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "장비모델코드,장비모델명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveUserInfo":
      arrParm[0] = ["사용자조회", "사용자ID", "사용자명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사용자ID,사용자명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveSelpchItemPchsInfo":
      arrParm[0] = ["매출입항목", "항목코드", "항목명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "매출입항목코드,매출입항목명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrievePartInfoUPR":
      arrParm[0] = ["부품조회", "부품코드", "부품명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "부품코드,부품명,단위,장비모델명,단가,상태,소모품여부,COL8,COL9,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveCatInfo":
      arrParm[0] = ["계통조회", "계통코드", "계통명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "계통코드,계통명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveVehclNoDoubleChk":
      arrParm[0] = ["계통조회", "계통코드", "계통명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "계통코드,계통명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveJumsoCarDoubleChk":
      arrParm[0] = ["계통조회", "계통코드", "계통명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "계통코드,계통명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveBudgetCtrlDeptInfo":
      arrParm[0] = ["귀속부서조회", "귀속부서코드", "귀속부서명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "부서코드,부서명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveDmndList":
      arrParm[0] = ["수요가조회", "수요가번호", "수요가명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "수요가번호,수요가명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveDcScList":
      arrParm[0] = ["할증사유조회", "할증코드", "할증사유", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "할증코드,할증사유,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveStaffSerList":
      arrParm[0] = ["인원조회", "인원번호", "인원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "인원번호,인원명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveAsetCostCdInfo":
      arrParm[0] = ["자산비용코드조회", "자산비용코드", "자산비용코드명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "자산비용코드,자산비용코드명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveWrkImple":
      arrParm[0] = ["작업도구조회", "작업도구번호", "작업도구명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업도구번호,작업도구명,작업도구종류,작업도구규격,소속부서,소유구분,임차기간,거래처";
      sHidden = "9,10";
      break;
    case "retrieveClntNoInfo":
      arrParm[0] = ["매입거래처", "거래처코드", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "거래처코드,거래처명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveHwajongInfo":
      arrParm[0] = ["화종구분조회", "화종코드", "화종명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "화종코드,화종명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveFixedAssetInfo":
      arrParm[0] = ["고정자산정보", "고정자산번호", "고정자산명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "고정자산번호,고정자산명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveOldFixedAssetInfo":
      arrParm[0] = ["고정자산정보", "구 자산번호", "고정자산명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "자산번호,고정자산명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,구 자산정보";
      sHidden = "3,4,5,6,7,8,9";
      break;
    case "retrieveDoorDistrictList":
      arrParm[0] = ["권역조회", "권역코드", "권역명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "권역코드,권역명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveHeavyEquipList":
      arrParm[0] = ["중기번호조회", "중기코드", "중기번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "중기코드,중기번호,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveLongTermLendEstimateList":
      arrParm[0] = ["장기대여견적조회", "견적번호", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "견적번호,거래처,견적담당자,차종,대여기간,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveBudgetCtrlAcctCdInfo":
      arrParm[0] = ["예산통제계정조회", "계정코드", "계정명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "계정코드,계정명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveFixWrkUnitListInfo":
      arrParm[0] = ["작업단위", "작업단위코드", "작업단위명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업단위코드,작업단위명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveAdptDtEachDistrict":
      arrParm[0] = ["권역", "권역코드", "권역", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "권역코드,권역코드,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveLHWrkPlInfo":
      arrParm[0] = ["작업장", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장코드,작업장명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrievePartMakerInfo":
      arrParm[0] = ["제조원조회", "제조원코드", "제조원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "제조원코드,제조원명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveOccpgrd":
      arrParm[0] = ["직급 코드 조회", "직급코드", "직급명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "직급코드,직급명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrievePartsTransferStock":
      arrParm[0] = ["부품코드 조회", "부품코드", "부품명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "거래처,정비작업장,부품코드,부품명,재고량,COL6,COL7,COL8,장비모델,Info";
      sHidden = "6,7,8,10";
      break;
    case "retrieveDoorArea":
      arrParm[0] = ["Door조회", "Door코드", "Door명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "Door코드,Door명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveConteinerInfo":
      arrParm[0] = ["Door조회", "Door코드", "Door명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "번호,사이즈,F/E구분,오더번호,화주명,수출입구분코드,COL8,COL9,Info";
      sHidden = "7,8,9,10";
      break;
    case "retrieveRentCarEmpInfo":
      arrParm[0] = ["영업사원조회", "사원코드", "사원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사원코드,사원명,COL3,COL4,COL5,COL6,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveFrtcarNoInfo":
      arrParm[0] = ["화차번호 조회", "화차번호", "화차용량", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "화차번호,화차용량,화차종류,COL4,COL5,COL6,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveVehclListNotJAGA":
      arrParm[0] = ["차량번호팝업", "차량단축코드", "차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량단축코드,차량FULL번호,장비상태명,소속코드,소속명,장비명,규격,규격코드,COL9,Info";
      sHidden = "8,9,10";
      break;
    case "retrieveEdiMapping":
      arrParm[0] = ["조회", "코드", "코드명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "코드,코드명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveWorkImplementKindNorm":
      arrParm[0] = ["조회", "종류코드", "종류명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "종류코드,종류명,규격코드,규격명,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveWorkImplementKind":
      arrParm[0] = ["조회", "종류코드", "종류명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "종류코드,종류명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveWrkUnitListInfo":
      arrParm[0] = ["작업단위", "작업단위코드", "작업단위명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업단위코드,작업단위명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveLotNo":
      arrParm[0] = ["LotNo팝업", "LotNo", "품명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "LotNo,품명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveLotNo2":
      arrParm[0] = ["LotNo팝업", "품명", "품명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "LotNo,품명코드,재고중량,재고거래처번호,재고관리번호,재고수량,LBLOCK,상세위치정보,품명명,생산일자";
      sHidden = "3,4,5,6,7,8,10";
      break;
    case "retrieveRentCarAcctDeptCdInfo":
      arrParm[0] = ["귀속부서조회", "귀속부서코드", "귀속부서명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "귀속부서코드,귀속부서명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveTmlClntNo":
      arrParm[0] = ["거래처조회", "거래처코드", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "거래처코드,거래처명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCloseWorkInfo":
      arrParm[0] = ["마감작업정보", "마감작업ID", "마감작업명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "마감작업ID,마감작업명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveEqModelInfo":
      arrParm[0] = ["장비모델조회", "장비모델코드", "장비모델명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "마감작업ID,마감작업명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveDtlOccptypeWrkPlanTrgt":
      arrParm[0] = ["정규직조회", "정규직원코드", "정규직원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "정규직원코드,정규직원명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveClsVehclInfo":
      arrParm[0] = ["", "차량번호", "차량단축코드", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량번호,차량단축코드,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveRentEqModelListInfo":
      arrParm[0] = ["장비모델조회", "모델코드", "모델명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "모델코드,모델명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveRentEstDoc":
      arrParm[0] = ["견적서조회", "견적서번호", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "견적서번호,거래처명,견적일자,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveDepositSavingAccountInfo":
      arrParm[0] = ["예적금원장번호조회", "예적금원장번호", "통장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "예적금번호,예적금종류,예적금거래상태,부서,가입일자,만기일자,계약금액,불입금액,통장명,Info";
      sHidden = "10";
      break;
    case "retriveFixUseUpManagement":
      arrParm[0] = ["구입업체 조회", "구입업체코드", "구입업체명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "업체코드,구입업체명,사업자번호,COL4,COL5,COL6,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retriveFixPartUpr":
      arrParm[0] = ["정비부품단가조회", "부품코드", "부품명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "부품코드,제조사코드,장비모델코드,단가,COL5,COL6,COL8,COL9,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveDoorRgn":
      arrParm[0] = ["Door조회", "Door코드", "Door지역명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "Door코드,Door명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveSelfClnt":
      arrParm[0] = ["자가운송사조회", "자가운송사코드", "자가운송사명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "자가운송사코드,자가운송사명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveMchtOdrKnd":
      arrParm[0] = ["조회", "코드", "코드명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "코드,코드명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveShotVehcl":
      arrParm[0] = ["차량번호조회", "차량번호", "차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량단축번호,차량번호,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retriveLobranCd":
      arrParm[0] = ["차량번호조회", "차량번호", "차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량단축번호,차량번호,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retriveWrkLobranCd":
      arrParm[0] = ["작업장조회", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장코드,작업장명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveOccpgrdCdInfo":
      arrParm[0] = ["직급조회", "직급코드", "직급명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "직급코드,직급명,COL3,COL4,COL5,COL6,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveMileageCdInfo":
      arrParm[0] = ["마일리지코드조회", "마일리지코드", "마일리지명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "코드,마일리지명,점수,구분,COL5,COL6,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveCntrWorkPlace":
      arrParm[0] = ["컨테이너작업장조회", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장코드,작업장명,COL3,COL4,COL5,COL6,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveTaxInfo":
      arrParm[0] = ["세무서조회", "세무서코드", "세무서명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "세무서코드,세무서명,계좌번호,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveBlNo":
      arrParm[0] = ["B/L조회", "B/L코드", "", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "B/L코드,COL2,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "2,3,4,5,6,7,8,9,10";
      break;
    case "retrieveBookingNo":
      arrParm[0] = ["BookingNo조회", "Booking No", "", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "Booking 코드,COL2,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "2,3,4,5,6,7,8,9,10";
      break;
    case "retrieveSelfTransClntNo":
      arrParm[0] = ["자가운송사조회", "자가운송사", "자가운송사명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "자가운송사코드,자가운송사명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveOdrNo":
      arrParm[0] = ["오더조회", "오더코드", "", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "오더코드,COL2,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "2,3,4,5,6,7,8,9,10";
      break;
    case "retrieveLine":
      arrParm[0] = ["Line조회", "Line코드", "Line명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "Line코드,Line명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveDoor":
      arrParm[0] = ["Door조회", "Door코드", "Door지역명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "Door코드,Door지역명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveTimesheetRemarkContents":
      arrParm[0] = ["TIME SHEET REMARK", "REMARK코드", "REMARK", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "REMARK코드,REMARK,귀책종류,귀책종류,COL5,COL6,COL8,COL9,Info";
      sHidden = "3,5,6,7,8,9,10";
      break;
    case "retrieveBorrowingInst":
      arrParm[0] = ["차입기관조회", "차입기관코드", "차입기관명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차입기관코드,차입기관명,COL3,COL4,COL5,COL6,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveConteinerNo":
      arrParm[0] = ["컨테이너번호조회", "컨테이너번호", "오더번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "컨테이너번호,오더번호,Size,규격,F/E,COL6,COL8,COL9,Info";
      sHidden = "2,6,7,8,9,10";
      break;
    case "retrieveWorkStepEachWorkPlaceInfo":
      arrParm[0] = ["작업장", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장코드,작업장명,작업장영문명,작업장 구분코드,상위작업장코드,물류점소코드,물류점소명,매출귀속부서코드,매출귀속부서명,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveWrkStp":
      arrParm[0] = ["작업단계조회", "작업단계코드", "작업단계", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업단계코드,작업단계,COL3,COL4,COL5,COL6,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveAccdNoInfo":
      arrParm[0] = ["사고번호 조회", "사고번호", "사고일자", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사고번호,기사명,사고유형,차량번호,COL5,COL6,COL8,COL9,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveRentcarHirecar":
      arrParm[0] = ["용차번호조회", "용차코드", "용차번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "용차코드,용차번호,,,모델명,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,6,7,8,9,10";
      break;
    case "retrieveStockCustomer":
      arrParm[0] = ["거래처 및 재고 조회", "정비작업장", "부품코드", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "거래처,금액,수량,COL4,COL5,COL6,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveOrdVsslInfo":
      arrParm[0] = ["선박정보", "선박코드", "선박명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "선박코드,선박명,선박영문명,선박거래처번호,LINE거래처번호,관세청선박코드,선박용도코드,신호부자코드,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveReturnPartInfo":
      arrParm[0] = ["부품조회", "부품코드", "부품명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "부품코드,부품명,단위,장비모델명,단가,재고금액,재고수량,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveContainerShuttleWrkPlInfo":
      arrParm[0] = ["작업장", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장코드,작업장명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveASEmpInfo":
      // popupdefine과 타이틀 상이
      arrParm[0] = ["A/S담당자", "담당자코드", "담당자명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "담당자코드,담당자명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveGateInOutVehclInfo":
      arrParm[0] = ["차량번호팝업", "차량단축코드", "차량번호", "retrieveVehclList", options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량단축코드,차량FULL번호,장비상태명,소속코드,소속명,장비명,규격,규격코드,기사명,기사핸드폰번호 ";
      sHidden = "8";
      break;
    case "retrieveTrusteeTariffItemInfo":
      arrParm[0] = ["위수탁요율항목", "항목코드", "항목명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "위수탁요율항목코드,위수탁요율항목명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveDistrictListGrpCd":
      arrParm[0] = ["권역조회", "권역코드", "권역명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "권역코드,권역명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveAccdVehclInfo":
      arrParm[0] = ["차량코드조회", "단축코드", "차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "단축코드,차량번호,장비코드,도입일자,좌석수,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveAccdEmpInfo":
      arrParm[0] = ["사고기사조회", "사원번호", "사원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사원번호,사원명,구분,기사구분,입사일자,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,6,7,8,9,10";
      break;
    case "retrieveVsslEqNo":
      arrParm[0] = ["본선장비조회", "선박코드", "선박명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "본선장비번호,본선장비명,장비종류,장비종류명,장비규격,장비규격명,COL7,COL8,COL9,COL10";
      sHidden = "7,8,9,10";
      break;
    case "retrievePartCdInfo":
      arrParm[0] = ["부품", "부품코드", "부품명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "부품코드,부품명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveWrkImple2":
      arrParm[0] = ["권역조회", "권역코드", "권역명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업도구번호,작업도구명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrievePortEachDistrictNoimList":
      arrParm[0] = ["노임항목조회", "노임항목코드", "노임항목명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "노임항목코드,노임항목명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveAccdDisciplineInfo":
      arrParm[0] = ["기사징계사항조회", "사원번호", "사원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사원번호,사원명,징계일자,징계코드,징계구분명,징계내용,비고,COL8,COL9,Info";
      sHidden = "4,8,9,10";
      break;
    case "retrieveChassis2":
      arrParm[0] = ["샤시조회", "단축번호", "샤시번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "단축번호,샤시번호,샤시종류코드,샤시종류명,장비코드,규격코드,규격명,물류연결장비코드";
      sHidden = "10";
      break;
    case "retrieveVsslLineClnt":
      arrParm[0] = ["본선조회", "본선코드", "본선명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "본선코드,본선명,라인코드,라인명,선사코드,선사명,COL7,COL8,COL9,Info";
      sHidden = "7,8,9,10";
      break;
    case "retrieveAccdEmpNoInfo":
      arrParm[0] = ["사고담당사원", "사원번호", "사원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사원번호,사원명,직급,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveAccdLoVehclNoInfo":
      arrParm[0] = ["대물사고장비번호", "장비코드", "장비번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "장비코드,장비번호,장비모델명,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveVsslInfo":
      arrParm[0] = ["선박코드1", "선박명2", "항차3", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "거래처코드,거래처명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "wageLunionOrgCdLevel1":
      arrParm[0] = ["노조조직코드조회", "노조코드", "노조명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "분회코드,분회명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "wageLunionOrgCdLevel2":
      arrParm[0] = ["노조조직코드조회(반)", "분회코드", "분회명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "노조코드,노조명,분회코드,분회명,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveRetirePersonInfo":
      arrParm[0] = ["고속직원찾기팝업", "사원", "사원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "영업소코드,영업소,사원번호,성명,직위/기사구분,COL6,COL7,COL8,COL9,Info";
      sHidden = "1,6,7,8,9,10";
      break;
    case "wageLunionOrgCdLevel3":
      arrParm[0] = ["노조조직코드조회(반)", "반코드", "반명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "분회코드,분회명,반코드,반명,반장명,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveWithHoldInfo":
      arrParm[0] = ["신고부서", "부서코드", "부서명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "코드,부서코드,부서명,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveTrChargeEmpInfo":
      arrParm[0] = ["담당자조회", "사번", "사원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사번,사원명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveNonledgerAsetPatternCdInfo":
      arrParm[0] = ["부외자산유형조회", "유형코드", "유형명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "유형코드,유형명,COL3,COL4,COL5,COL6,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveSellPlanClsCdInfo":
      arrParm[0] = ["매출계획조회", "매출계획코드", "매출계획명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "매출계획코드,매출계획명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveWrkPortInfo":
      arrParm[0] = ["부두정보", "부두코드", "부두명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "부두코드,부두명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveApplyReasonInfo":
      arrParm[0] = ["신청사유", "신청사유코드", "신청사유", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "신청사유코드,신청사유,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCustomInfo":
      arrParm[0] = ["세관", "세관코드", "세관명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "세관코드,세관명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCustomSectionInfo":
      arrParm[0] = ["세관과", "세관과코드", "세관과명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "세관과코드,세관과명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveBondedTransBLInfo":
      arrParm[0] = ["B/L조회", "MRN", "MSN", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "MRN,MSN,HSN,MBL,HBL,품명,포장단위,포장개수,중량합계,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveBondedTransBLInfo2":
      arrParm[0] = ["보세운송 B/L조회", "M B/L", "H B/L", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "M B/L,H B/L,MRN,MSN,HSN,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveOrderVolume":
      arrParm[0] = ["오더물량 조회", "출발역", "도착역", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "번호,사이즈,F/E구분,오더번호,화주명,수출입구분코드,COL8,COL9,Info";
      sHidden = "7,8,9,10";
      break;
    case "retrieveBLContainerInfo":
      arrParm[0] = ["B/L 컨테이너 조회", "컨테이너 NO", "MRN", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "컨테이너 NO,MRN,MSN,HSN,순번,봉인번호1,포장개수,중량,컨테이너크기,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveInvestPlanClsInfo":
      arrParm[0] = ["투자계획구분 조회", "구분코드", "구분명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "구분코드,구분명,COL3,COL4,COL5,계정레벨,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveContainerInfo":
      arrParm[0] = ["컨테이너 조회", "컨테이너 No", "MRN", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "컨테이너 No,MRN,MSN,HSN,순번,COL6,COL7,COL8,COL9,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveEqLoLHList":
      arrParm[0] = ["임대장비조회", "단축번호", "중기Full번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "단축번호,중기Full번호,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveGateInOutCntrNo":
      arrParm[0] = ["컨테이너번호 조회", "", "컨테이너 No", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "컨테이너 No,입항일시,SIZE,TYPE,F/E,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveAccdWrkPlInfo":
      arrParm[0] = ["작업장", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장코드,작업장명,점소코드,상위작업장,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveRentACarFixedAssetInfo":
      arrParm[0] = ["고정자산", "고정자산코드", "고정자산명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "고정자산코드,고정자산명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveRentCarAccdVehcl":
      arrParm[0] = ["사고차량-렌터카", "사고번호", "차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사고번호,차량번호,장비코드,사고발생일,사고시간,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveHeavyMachineryKind":
      arrParm[0] = ["중기종류조회", "중기코드", "중기코드명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "중기코드,중기코드명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveBondZoneCdInfo":
      arrParm[0] = ["보세구역조회", "보세구역코드", "보세구역명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "보세구역코드,보세구역코드명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveWrkPlDepotInfo":
      arrParm[0] = ["DEPOT조회", "DEPOT코드", "DEPOT명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "DEPOT코드,DEPOT코드명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveStdWrkPathNoInfo":
      arrParm[0] = ["기준작업경로조회", "기준작업경로번호", "기준작업경로명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "기준작업경로번호,기준작업경로명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveStaffLaborList":
      arrParm[0] = ["인원조회", "인원번호", "인원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "인원번호,인원명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveExpenseTransferInfo":
      arrParm[0] = ["통장조회", "통장코드", "통장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "통장번호,은행코드,통장명,관리부서코드,계좌번호,통장종류코드,은행명,관리부서명,COL9,Info";
      sHidden = "2,4,6,9,10";
      break;
    case "retrieveElectricApproveInfo":
      arrParm[0] = ["통장조회", "통장코드", "통장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "통장번호,은행코드,통장명,관리부서코드,계좌번호,통장종류코드,은행명,관리부서명,COL9,Info";
      sHidden = "2,4,6,9,10";
      break;
    case "retrieveUserEmpInfo":
      arrParm[0] = ["사용자ID 조회", "사용자ID", "사용자명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사용자ID,사용자명,부서,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveCardClntInfo":
      arrParm[0] = ["카드정산처조회", "카드정산처", "카드정산처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "카드정산처,카드정산처명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveSizeTypeFe":
      arrParm[0] = ["규격조회", "규격", "규격명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "규격,규격명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "2,3,4,5,6,7,8,9,10";
      break;
    case "retrieveWrkPlCd":
      arrParm[0] = ["규격조회", "규격", "규격명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "규격,규격명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "2,3,4,5,6,7,8,9,10";
      break;
    case "retrieveCommGoodsInfo":
      arrParm[0] = ["거래처 품목/품명", "코드", "품목/품명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "코드,품목/품명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveBondedTransInfoByBL":
      arrParm[0] = ["보세운송조회", "M B/L번호", "H B/L번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "M B/L번호,H B/L번호,신고일자,순번,신고번호,MRN,MSN,HSN,COL9,Info";
      sHidden = "9,10";
      break;
    case "retrieveBondZoneRound":
      arrParm[0] = ["보세구역조회", "보세구역코드", "보세구역명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "보세구역코드,보세구역명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveMcomDsmbrk":
      arrParm[0] = ["작업장조회", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장코드,작업장명,보세구역코드,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveCrryinCntrNo":
      arrParm[0] = ["반출입 컨테이너 조회", "컨테이너번호", "F/E구분", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "컨테이너번호,SIZE,TYPE,F/E,Gatelog번호,입항일시,반입일시,COL8,COL9,Info";
      sHidden = "8,9,10";
      break;
    case "retrieveDriverTrafficCard":
      arrParm[0] = ["통행카드 조회", "사원번호", "운행일자", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "통행카드,사번,성명,잔액,사용일자,지급액,지급일자,COL8,COL9,Info";
      sHidden = "8,9,10";
      break;
    case "retrieveReturnWrkPlInfo":
      arrParm[0] = ["반납지 조회", "반납지코드", "반납지명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "반납지코드,반납지명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveStaffList":
      arrParm[0] = ["일용직원", "사원번호", "사원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사원번호,사원명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveWrkPlCarryInfo":
      arrParm[0] = ["작업장조회", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장코드,작업장명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveBilgSellLobranCd":
      arrParm[0] = ["부서조회", "부서코드", "부서명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "부서코드,부서명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveEdiMappingList":
      arrParm[0] = ["EDI", "코드", "코드명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "코드,코드명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retriveEqKind":
      arrParm[0] = ["장비종류", "장비코드", "장비명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "장비코드,장비명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveWorkImplementByEquipment":
      arrParm[0] = ["조회", "종류코드", "종류명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "종류코드,종류명,구분,규격명,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveClntNo":
      arrParm[0] = ["거래업체조회", "업체번호", "업체명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "업체번호,업체명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveSalaryTransferInfo":
      arrParm[0] = ["통장조회", "통장코드", "통장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "통장번호,은행코드,통장명,관리부서코드,계좌번호,통장종류코드,은행명,관리부서명,COL9,Info";
      sHidden = "2,4,6,9,10";
      break;
    case "retrieveOldRentACarFixedAssetInfo":
      arrParm[0] = ["고정자산", "구 자산번호", "고정자산명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "자산번호,고정자산명,구 자산정보,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveVehclInfoOil":
      arrParm[0] = ["차량조회", "단축코드", "차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "장비코드,단축코드,차량번호,모델명,좌석수,귀속부서코드,귀속부서,COL8,COL9,Info";
      sHidden = "1,5,6,7,8,9,10";
      break;
    case "retrieveExchangeRate":
      arrParm[0] = ["환율조회", "통화", "적용일", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "통화,적용일,기준환율,매입환율,매도환율,COL6,COL7,COL8,COL9,Info";
      sHidden = "1,5,6,7,8,9,10";
      break;
    case "retrieveDivsCrryinoutClsCd":
      arrParm[0] = ["부서조회", "부서코드", "부서명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "부서코드,부서명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveOdrCommInfo":
      arrParm[0] = ["품명조회", "품명코드", "품명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "품명코드,품명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "divsCrryinoutClsCdWt":
      arrParm[0] = ["", "", "", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "부서코드,부서명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveDsmbrkPlcCd":
      arrParm[0] = ["", "", "", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "부서코드,부서명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCommWtInfo":
      arrParm[0] = ["거래처품명", "품명", "품명코드", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "품명코드,품명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCfsLineInfo":
      arrParm[0] = ["LINE조회", "LINE코드", "LINE명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "LINE코드,LINE명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveDtlOccptype":
      arrParm[0] = ["상세직종조회", "상세직종코드", "상세직종명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "상세직종코드,상세직종명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveOdrWrkPathList":
      arrParm[0] = ["오더작업경로", "작업경로번호", "작업경로명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업경로번호,작업경로번호,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveOdrWrkPathEachWrkStpList":
      arrParm[0] = ["오더작업경로별 작업단계", "작업단계코드", "작업단계명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업경로번호,작업경로번호,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveClntCrnList":
      arrParm[0] = ["거래처팝업", "거래처코드", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "거래처코드,거래처명,사업자번호,대표자명,주소,상세주소,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCrnClntList":
      arrParm[0] = ["사업자번호 조회팝업", "사업자번호", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사업자번호,거래처명,거래처코드,대표자명,주소,상세주소,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveLineInfoOrigin":
      arrParm[0] = ["LINE조회", "LINE코드", "LINE명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "LINE코드,LINE명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveSellSimulationInfo":
      arrParm[0] = ["매출시뮬레이션 조회팝업", "부서코드", "부서명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "부서코드,부서명,실적기간,추정기간,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveDistrictList2":
      arrParm[0] = ["권역조회", "권역코드", "권역명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "권역코드,권역명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveDtlOccptype2":
      arrParm[0] = ["상세직종조회", "상세직종코드", "상세직종명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "상세직종코드,상세직종명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveExternalTrChargeEmpInfo":
      arrParm[0] = ["담당자조회", "사번", "사원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사번,사원명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveClntEmpNoList":
      arrParm[0] = ["거래처팝업", "거래처코드", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "거래처코드,거래처명,그룹거래처여부,상위거래처번호,사업자번호,거래처구분,거래처직원,주소,요율연결여부,Info";
      sHidden = "3,4,6,10";
      break;
    case "wageLunionOrgCdLevel12":
      arrParm[0] = ["노조조직코드조회", "노조코드", "노조명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "분회코드,분회명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveClntNoFind":
      arrParm[0] = ["", "", "", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "부서코드,부서명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveBudgetAcctCd":
      arrParm[0] = ["예산계정", "계정코드", "계정명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "계정코드,계정명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveRentalTargetVehicles":
      arrParm[0] = ["덤프트럭", "단축코드", "FULL번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "단축코드,FULL번호,상태,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveWorkPlaceLobranCd":
      arrParm[0] = ["작업장", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장코드,작업장명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveHeavyMachineryKind2":
      arrParm[0] = ["작업장", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장코드,작업장명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retriveGateWrkPlCd":
      arrParm[0] = ["작업장", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장코드,작업장명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveRalMarDistrictList":
      arrParm[0] = ["지역", "지역코드", "지역명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "지역코드,지역명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveRouteExprEmp":
      arrParm[0] = ["운행정보조회", "일시", "장비코드", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사원번호,기사명,노선코드,노선명,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveForeignBankbookInfo":
      arrParm[0] = ["통장조회", "통장코드", "통장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "통장번호,은행코드,통장명,관리부서코드,계좌번호,통장종류코드,은행명,관리부서명,COL9,Info";
      sHidden = "2,4,6,9,10";
      break;
    case "retrieveQuestionnaireRentACarInfo":
      arrParm[0] = ["렌터카계약차량", "차량단축번호", "차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량단축번호,차량번호,장비코드,장비코드명,거래처번호,부서코드,거래처명,COL9,Info";
      sHidden = "9,10";
      break;
    case "retrieveWrkPlAndBondZoneCdForCargo":
      arrParm[0] = ["작업장조회", "작업장코드", "작업장명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "작업장,작업장명,보세구역구분,자유무역지역,COL5,COL6,COL7,COL8,COL9,COL10";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveCstmrList":
      arrParm[0] = ["고객팝업", "고객번호", "고객명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "고객번호,고객명,고객구분,COL4,COL5,COL6,COL7,COL8,COL9,COL10";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveAssgnWhouseList":
      arrParm[0] = ["배정창고", "배정창고", "배정창고명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "배정창고,배정창고명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveWarrentInformationList":
      arrParm[0] = ["", "", "", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "COL1,COL2,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveEstmtCopCoClnt":
      arrParm[0] = ["평가대상협력업체", "협력업체번호", "업체명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "협력업체번호,업체명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCommonCodeInfo":
      arrParm[0] = ["공통코드", "코드", "코드명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "코드,코드명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveMasterBLInfo":
      arrParm[0] = ["Master B/L 조회", "M B/L", "MRN", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "M B/L,MRN,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveFixPlanInfo":
      arrParm[0] = ["정비계획", "계획번호", "단축번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "계획번호,접수일자,대여업체,차량번호,담당자,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveOsideUser":
      arrParm[0] = ["", "", "", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "";
      sHidden = "";
      break;
    case "retrieveDoorInfo":
      arrParm[0] = ["Door지 조회", "Door코드", "Door명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "Door코드,Door명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCtrtClntInfo":
      arrParm[0] = ["계약거래처 조회", "거래처코드", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "거래처코드,거래처명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCreditCrnLimitInfo":
      arrParm[0] = ["사업자번호조회", "사업자번호", "사업자명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사업자번호,사업자명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCreditLimitTargetCrnInfo":
      arrParm[0] = ["사업자번호조회", "사업자번호", "사업자명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사업자번호,사업자명,신용등급,부채비율,매출액증가율,담보금액,COL7,COL8,COL9,Info";
      sHidden = "7,8,9,10";
      break;
    case "retrieveConsignmentSetoffSlipNo":
      arrParm[0] = ["전표번호 조회", "전표번호", "상계거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "전표번호,상계거래처명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveSavebizLongInfo":
      arrParm[0] = ["저장장소 조회", "저장장소코드", "저장장소명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "저장장소코드,저장장소명,COL3,CLO4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveCntrSelfIn":
      arrParm[0] = ["반납예정정보조회", "컨테이너번호", "컨테이너번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "운송사,운송사명,요청번호,수출입,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "5,6,7,8,9,10";
      break;
    case "retrieveDitUserEmpInfo":
      arrParm[0] = ["사원조회", "사원코드", "사원명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사원코드,사원명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveTskDtlCntnInfo":
      arrParm[0] = ["업무 상세 조회", "업무구분코드", "업무상세내용", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "업무;구분,업무상세내용,ITSM;구분,COL4,COL5,COL6,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveTskDtlCntnInfo1":
      arrParm[0] = ["업무 상세 조회", "ITSM;관리번호", "업무내용", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "ITSM;구분코드,ITSM;관리번호,업무상세내용,COL4,COL5,COL6,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveClntMgntList":
      arrParm[0] = ["거래처코드", "구분", "관리번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "구분,관리번호,관리번호명,COL5,COL6,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveRoutePrflosPrtnCd":
      arrParm[0] = ["손익항목 조회", "손익항목코드", "손익항목명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "손익항목코드,손익항목명,Remark,COL4,COL5,COL6,COL8,COL9,Info";
      sHidden = "4,5,6,7,8,9,10";
      break;
    case "retrieveAccountCodeCodeNm":
      arrParm[0] = ["관리회계계정조회", "관리회계계정코드", "", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "관리회계계정코드,관리회계계정코드,COL3,COL4,COL5,COL6,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveUpperAccountCode":
      arrParm[0] = ["상위계정조회", "상위계정코드", "", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "상위계정코드,상위계정명,COL3,COL4,COL5,COL6,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveASRegionEmpInfo":
      arrParm[0] = ["사번", "사원명", "", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사번,사원명,도/시,시/군/구,동,COL6,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrievePsVariableAcctCdInfo":
      arrParm[0] = ["변동비비용계정", "계정코드", "계정명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "계정코드,계정명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveItsmUserEmpInfo":
      arrParm[0] = ["ITSM사용자", "사용자ID", "성명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "사용자ID,성명,관리자ID,관리자성명,주요업무,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveMgntList":
      arrParm[0] = ["KBS프로그램", "프로그램코드", "프로그램명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "프로그램코드,프로그램명,상위코드명,비고,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveRcPartUprInfo":
      arrParm[0] = ["부품단가정보", "부품코드", "부품명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "코드,부품명,단위,단가,장비모델,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveDrvNmInfo":
      arrParm[0] = ["차량번호조회", "차량번호", "기사명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "차량번호,기사명,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveLongTermSalesListInfo":
      arrParm[0] = ["장기대여 계약조회", "차량단축코드", "차량번호", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "계약번호,단축코드,차량번호,대여업체,시작일,종료일,실종료일,월대여료,영업소,장비코드";
      sHidden = "";
      break;
    case "retrieveAirPortCode":
      // il only                               
      arrParm[0] = ["거래처팝업", "거래처코드", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "EQ,PIC Name,Customer Code,Customer Name,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,6,10";
      break;
    case "retrieveAreaCode":
      // il only                               
      arrParm[0] = ["거래처팝업", "거래처코드", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "거래처코드,거래처명,그룹거래처여부,상위거래처번호,사업자번호,거래처구분,거래처직원,주소,요율연결여부,Info";
      sHidden = "3,4,6,10";
      break;
    case "retrieveEngClntInfo":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveEngClntInfo2":
      // il only                               
      arrParm[0] = ["Clnt", "Clnt Code/Name", "", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "Clnt Code,Clnt Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveKorClntInfo":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveClntPicInfo":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,Customer Code,Customer Name,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retriveFreightPchsDrAcctCd":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retriveFreightCodeInfo":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveEngCarrInfo":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveEngCarrInfoCust":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retriveContainerTypeCodeInfo":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retriveContainerTypeCodeInfo2":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retriveCurrencyCodeInfo":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveBoneZoneCode":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveAirBoneZoneCode":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrievePackageCode":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveAirOutCustomerInfo":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveAirInCustomerInfo":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveAirAmsClntInfo":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveWeightUnitCode":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrievePackageCode2":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,5,6,7,8,9,10";
      break;
    case "retrieveEmpDeptInfoLo":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle + " Code", options.pTitle + " Name", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,,,,,,,,";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveAirOceanPortCode":
      // il only                               
      arrParm[0] = ["거래처팝업", "거래처코드", "거래처명", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "SEQ,PIC Name,Customer Code,Customer Name,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "3,4,6,10";
      break;
    case "retrieveWareHouseInfo":
      // il only                               
      arrParm[0] = ["WARE HOUSE INFO", "CODE", "NAME", selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = "CODE,NAME,ENG CODE,COL4,COL5,COL6,COL7,COL8,COL9,COL10";
      sHidden = "";
      break;
    case "retriveHanseemCustCode":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle, options.pTitle, selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retriveShinsegaeShipperCode":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle, options.pTitle, selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retriveOcrHouseBlList":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle, options.pTitle, selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,COL3,COL4,COL5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    case "retrieveClntPicInfoInvoice":
      // il only                               
      arrParm[0] = [options.pTitle + " Search", options.pTitle, options.pTitle, selectId, options.pWinCloseTF, options.iDispCnt, options.pExistTF, options.pAllSearchTF, null, null, null];
      sTitle = options.pTitle + " Code," + options.pTitle + " Name,Customer Code,Customer Name,칼럼5,COL6,COL7,COL8,COL9,Info";
      sHidden = "6,7,8,9,10";
      break;
    default:
      return false;
  }
  if (options.pWtitleSearch != null) {
    let strArr = options.pWtitleSearch.split(",");
    if (strArr != null) {
      arrParm[0][0] = strArr[0];
      arrParm[0][1] = strArr[1];
      arrParm[0][2] = strArr[2];
    }
  }
  // sTitle = (options.pTitle == null) ? sTitle : options.pTitle;
  arrParm[2] = sTitle.split(","); // 컬럼Title's
  sHidden = options.pHidden == null ? sHidden : options.pHidden;
  arrParm[5] = sHidden.split(","); // Hidden칼럼

  return true;
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'}}]}]})