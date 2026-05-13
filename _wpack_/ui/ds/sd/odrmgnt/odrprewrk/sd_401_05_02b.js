/*amd /ui/ds/sd/odrmgnt/odrprewrk/sd_401_05_02b.xml 207185 163e9b22cb0461acf23500b47fb0baec093f3102d72b0c6273452bea801753e1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'declarDt',name:'신고일자',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'declarSeq',name:'신고순번',dataType:'text',length:'3'}},{T:1,N:'w2:key',A:{id:'declarNo',name:'신고번호',dataType:'text',length:'20'}},{T:1,N:'w2:key',A:{id:'mblNo',name:'mblNo',dataType:'text',length:'20'}},{T:1,N:'w2:key',A:{id:'hblNo',name:'H B/L번호',dataType:'text',length:'20'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchEBC'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'param5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_master',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'declarDt',name:'신고일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'declarSeq',name:'신고순번',dataType:'text',length:'40'}},{T:1,N:'w2:column',A:{id:'declarAdmitClsCd',name:'신고승인구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'mchtNmCmpy',name:'화주상호',dataType:'text',length:'35'}},{T:1,N:'w2:column',A:{id:'mchtBusiNo',name:'화주사업자번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'mchtAddr1',name:'화주주소1',dataType:'text',length:'35'}},{T:1,N:'w2:column',A:{id:'mchtAddr2',name:'화주주소2',dataType:'text',length:'35'}},{T:1,N:'w2:column',A:{id:'mchtNm',name:'화주명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'declarNo',name:'신고번호',dataType:'text',length:'25'}},{T:1,N:'w2:column',A:{id:'declarNoSeq',name:'신고번호순번',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'transPrd',name:'운송기한',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'transCntShtCd1',name:'운송수단코드1',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'transCntShtCd2',name:'운송수단코드2',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'sendBondZoneCd',name:'발송보세구역코드',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'sendBondZoneNm',name:'발송보세구역명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'viaBondZoneCd',name:'경유보세구역코드',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'viaBondZoneNm',name:'경유보세구역명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'arvBondZoneCd',name:'도착지보세구역코드',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'arvBondZoneNm',name:'도착지보세구역명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'appRsnCd',name:'신청사유코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'appRsn',name:'신청사유',dataType:'text',length:'255'}},{T:1,N:'w2:column',A:{id:'declarCstmCd',name:'신고세관코드',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'declarCstmNm',name:'신고세관명',dataType:'text',length:'255'}},{T:1,N:'w2:column',A:{id:'declarSecCd',name:'신고과코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'declarSecNm',name:'신고과명',dataType:'text',length:'255'}},{T:1,N:'w2:column',A:{id:'bondInspClsCd',name:'보세검사구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'pldgClsCd',name:'담보구분',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'jdgPrcCondCd',name:'감정가격조건코드',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'declarPrcSum',name:'신고가격합계',dataType:'text',length:'16'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text',length:'9'}},{T:1,N:'w2:column',A:{id:'jdgPrcSum',name:'감정가격합계',dataType:'text',length:'18'}},{T:1,N:'w2:column',A:{id:'pldgAmt',name:'담보가액',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'crryinDt',name:'반입일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'승인일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'sndClsCd',name:'발송구분',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'sndProcWay',name:'전송처리방식',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'ucomWrkPlApprNo',name:'타사작업장허가번호',dataType:'text',length:'16'}},{T:1,N:'w2:column',A:{id:'cstmStateItm',name:'세관기재사항',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text',length:'11'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text',length:'40'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'procClsCd',name:'처리구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'mainMainClsCd',name:'정정구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'returnYn',name:'결과수신 여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'bulkYn',name:'벌크여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'배차담당자ID',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'alloccarPicNm',name:'배차담당자명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'mchtRoadNmCd',name:'도로명코드',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'mchtBldMgntNo',name:'화주 건물관리번호',dataType:'text',length:'25'}},{T:1,N:'w2:column',A:{id:'mchtZip',name:'우편번호',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'dangerYn',name:'위험물여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'casYn',name:'화학물질여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'transTyp',name:'운송타입',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'exclusionYn',name:'화학물질관리법적용배제여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'dsmbrkFrgtClsCd',name:'하선물품구분코드',dataType:'text',length:'2'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_arrive',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'declarDt',name:'신고일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'declarSeq',name:'신고순번',dataType:'text',length:'40'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text',length:'11'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text',length:'40'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'arvBondZoneCd',name:'도착지보세구역코드',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'arvBondZoneNm',name:'도착지보세구역명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'ucomWrkPlApprNo',name:'타사작업장허가번호',dataType:'text',length:'16'}},{T:1,N:'w2:column',A:{id:'mblNo',name:'M B/L번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'hblNo',name:'H B/L번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text',length:'100'}},{T:1,N:'w2:column',A:{id:'packUnitCd',name:'포장단위코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'포장개수',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'totWt',name:'중량',dataType:'text',length:'18'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'declarDt',name:'신고일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'declarSeq',name:'신고순번',dataType:'text',length:'40'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text',length:'11'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text',length:'40'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text',length:'11'}},{T:1,N:'w2:column',A:{id:'sealNo1',name:'봉인번호1',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'포장개수',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text',length:'18'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'mblNo',name:'M B/L번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'hblNo',name:'H B/L번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'inspMthd',name:'검사방법',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'arvRepoYn',name:'도착보고여부',dataType:'text',length:'38'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mainMain',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'declarDt',name:'신고일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'declarSeq',name:'신고순번',dataType:'text',length:'40'}},{T:1,N:'w2:column',A:{id:'mainMainSeq',name:'정정순번',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'declarAdmitClsCd',name:'신고승인구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'declarNo',name:'신고번호',dataType:'text',length:'25'}},{T:1,N:'w2:column',A:{id:'declarNoSeq',name:'신고번호순번',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'mainMainClsCd',name:'정정구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'mainMainDeclarDt',name:'정정신고일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'bfDeclarPrd',name:'전신고기한',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'afDeclarPrd',name:'후신고기한',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'mainMainRsn',name:'정정사유',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'mainMainRsnCd',name:'정정사유코드(SD217)',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'declarCstmCd',name:'신고세관코드',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'declarSecCd',name:'신고과코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'sndProcWay',name:'전송처리방식',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'procClsCd',name:'처리구분코드',dataType:'text',length:''}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text',length:'11'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text',length:'40'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'bfArvBondZoneCd',name:'전도착보세구역코드',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'bfArvBondZoneNm',name:'전도착보세구역코드명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'afArvBondZoneCd',name:'후도착보세구역코드',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'afArvBondZoneNm',name:'후도착보세구역코드명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'ediTrgtYn',name:'EDI대상여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'bfDeclarPrd_01',name:'전신고기한',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'afDeclarPrd_01',name:'후신고기한',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'bfDeclarPrd_02',name:'전신고기한',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'afDeclarPrd_02',name:'후신고기한',dataType:'text',length:'8'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'declarDt',name:'신고일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'declarSeq',name:'신고순번',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'declarNo',name:'신고번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text',length:'20'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.sd.odrmgnt.odrprewrk.RetrieveBondedTransAdmissionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"},{"id":"ds_arrive","key":"OUT_DS2"},{"id":"ds_cntr","key":"OUT_DS3"},{"id":"ds_mainMain","key":"OUT_DS4"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"},{"id":"ds_arrive","key":"OUT_DS2"},{"id":"ds_cntr","key":"OUT_DS3"},{"id":"ds_mainMain","key":"OUT_DS4"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/SdConstants.js',type:'text/javascript',scopeVariable:'SdConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.params = $c.data.getParameter($p);
scwin.key = $c.util.isEmpty($p, scwin.params.key) ? "" : scwin.params.key;
scwin.declarNo = $c.util.isEmpty($p, scwin.params.declarNo) ? "" : scwin.params.declarNo;
scwin.declarDt = $c.util.isEmpty($p, scwin.params.declarDt) ? "" : scwin.params.declarDt;
scwin.declarSeq = $c.util.isEmpty($p, scwin.params.declarSeq) ? "" : scwin.params.declarSeq;
scwin.bondZoneCd = $c.util.isEmpty($p, scwin.params.bondZoneCd) ? "" : scwin.params.bondZoneCd;
scwin.bondZoneNm = $c.util.isEmpty($p, scwin.params.bondZoneNm) ? "" : scwin.params.bondZoneNm;

//전송방식
scwin.SEND_PROC_BATCH = SdConstants.EDI_SEND_PROC_BATCH;
scwin.SEND_PROC_IMMEDIATE = SdConstants.EDI_SEND_PROC_IMMEDIATE;

//처리구분
scwin.PROC_CLS_NOT_SEND = SdConstants.EDI_PROC_CLS_NOT_SEND; //미전송
scwin.PROC_CLS_SEND_COMPLETE = SdConstants.EDI_PROC_CLS_SEND_COMPLETE; //전송완료
scwin.PROC_CLS_ACCEPT = SdConstants.EDI_PROC_CLS_ACCEPT; //접수
scwin.PROC_CLS_DENIED = SdConstants.EDI_PROC_CLS_DENIED; //거절
scwin.PROC_CLS_ERROR = SdConstants.EDI_PROC_CLS_ERROR; //오류
scwin.PROC_CLS_REPAIR = SdConstants.EDI_PROC_CLS_REPAIR; //수리
scwin.PROC_CLS_OK = SdConstants.EDI_PROC_CLS_OK; //승인
scwin.PROC_CLS_REJECT = SdConstants.EDI_PROC_CLS_REJECT; //기각
scwin.PROC_CLS_SUSPEND = SdConstants.EDI_PROC_CLS_SUSPEND; //보류

//정정구분
scwin.MAIN_MAIN_TRANS_PRD = SdConstants.MAIN_MAIN_CLS_TRANS_PRD; //운송기한 정정
scwin.MAIN_MAIN_ARRIVE = SdConstants.MAIN_MAIN_CLS_ARRIVE; //도착지 정정
scwin.MAIN_MAIN_ALL_CANCEL = SdConstants.MAIN_MAIN_CLS_ALL_CANCEL; //전체취하
scwin.MAIN_MAIN_PART_CANCEL = SdConstants.MAIN_MAIN_CLS_PART_CANCEL; //부분취하
scwin.MAIN_MAIN_ARV_TRANS_CNT_SHT = SdConstants.MAIN_MAIN_CLS_ARV_TRANS_CNT_SHT; //도착지운송수단정정
scwin.MAIN_MAIN_VIA_TRANS_CNT_SHT = SdConstants.MAIN_MAIN_CLS_VIA_TRANS_CNT_SHT; //경유지운송수단정정
scwin.MAIN_MAIN_VIA = SdConstants.MAIN_MAIN_CLS_VIA; //경유지정정
scwin.MAIN_MAIN_DPT = SdConstants.MAIN_MAIN_CLS_DPT; //출발지정정
scwin.MAIN_MAIN_PLDG_AMT = SdConstants.MAIN_MAIN_CLS_PLDG_AMT; //담보금액정정

//서버일자
scwin.PLDG_CLS_FACILE_TRANS = "06"; //간이보운자 운송											

//서버일자
scwin.SYSTEM_DATE = $c.date.getServerDateTime($p);
scwin.gv_paramMapKey = scwin.key;
scwin.gv_paramDeclarNo = scwin.declarNo;
scwin.gv_paramDeclarDt = scwin.declarDt;
scwin.gv_paramDeclarSeq = scwin.declarSeq;
scwin.gv_paramBondZoneCd = scwin.bondZoneCd;
scwin.gv_paramBondZoneNm = scwin.bondZoneNm;

//편집모드에 따라 화면의 상태, 버튼의 상태, TR 컴포넌트의 Action 및 KeyValue를 설정
scwin.EDIT_MODE_INIT = "0";
scwin.EDIT_MODE_RETRIEVE = "1";
scwin.EDIT_MODE_NEW = "2";
scwin.EDIT_MODE_UPDATE = "3";
scwin.EDIT_MODE_MAIN_MAIN = "4";
scwin.EDIT_MODE_ADMIT = "5";
scwin.EDIT_MODE_DELETE = "6";
scwin.gv_editMode = scwin.EDIT_MODE_INIT;

//메인 버턴의 상태 상수
// scwin.MAIN_BTN_ALL_DISABLE    = "1";
// scwin.MAIN_BTN_ALL_ENABLE     = "2";
scwin.MAIN_BTN_NEW_ONLY = "3";
scwin.MAIN_BTN_NEW_UPDATE = "4";
scwin.MAIN_BTN_UPDATE_DISABLE = "5";
scwin.MAIN_BTN_NEW_SEND = "6";
scwin.MAIN_BTN_NEW_SAVE = "7";
scwin.MAIN_BTN_DELETE = "8";
scwin.check = 0;
scwin.action = "";
scwin.ref = "";
scwin.target = "";

//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.ds_masterInit();
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  //공통코드조회 
  const codeOptions = [{
    grpCd: "SD106",
    compID: "lc_transCntShtCd1,lc_transCntShtCd2,gr_mainMain:bfDeclarPrd,gr_mainMain:afDeclarPrd"
  }, {
    grpCd: "OP266",
    compID: "lc_dsmbrkFrgtClsCd",
    opt: {
      "range": "1,USE"
    }
  }, {
    grpCd: "SD111",
    compID: "lc_pldgClsCd"
  }, {
    grpCd: "SD116",
    compID: "lc_packUnitCd"
  }, {
    grpCd: "SD112",
    compID: "lc_mainMainClsCd"
  }, {
    grpCd: "OP101",
    compID: "gr_cntr:cntrSizCd"
  }, {
    grpCd: "SD217",
    compID: "gr_mainMain:mainMainRsnCd"
  }, {
    grpCd: "SD135",
    compID: "lc_sndProcWay,gr_mainMain:sndProcWay"
  }, {
    grpCd: "SD103",
    compID: "lc_procClsCd,gr_mainMain:procClsCd",
    opt: {
      "range": "1,1"
    }
  }];
  await scwin.callBackFntoPromise($c.data.setCommonCode, codeOptions);
  const dltId = "dlt_commonCodeSD112";
  const copyDltId = dltId + "_1";
  $c.gus.copy($p, dltId, copyDltId, true);
  let dlt1 = $c.gus.object($p, copyDltId); // 객체화
  $c.data.dataListFilter($p, dlt1, "fltrCd1 == '1'");
  gr_mainMain.setColumnNodeSet("mainMainClsCd", "data:" + copyDltId, "cdNm", "cd");
  await scwin.f_resetJdgCond(); //감정가격조건 조회
  scwin.f_setEditMode(scwin.EDIT_MODE_INIT);
  scwin.f_clearSummary();
  scwin.f_fieldClear();
  await scwin.f_procRequest();
  cbx_printCheck.setValue("1");
  cbx_previewCheck.setValue("1");

  //검색조건 데이터 설절
  ed_mchtBusiNo.setDisplayFormat("###-##-#####");

  // QA요청 udc_comCode[id='udc_hsn'] code 중앙정렬 요청 
  ed_hsn.setStyle("textAlign", "center");
};

//-------------------------------------------------------------------------
// callback함수를 Promise로 전환 하는 함수.
//-------------------------------------------------------------------------         
scwin.callBackFntoPromise = function (callFunction, ...param) {
  return new Promise(function (resolve, reject) {
    try {
      callFunction($p, ...param, function (rtnParam) {
        resolve(rtnParam);
      });
    } catch (e) {
      reject(e);
    }
  });
};

//-------------------------------------------------------------------------
// 공통 코드 조회
//-------------------------------------------------------------------------
scwin.f_srchEBC = async function (ebcOption) {
  for (let i = 0; i < ebcOption.length; i++) {
    let url = ebcOption[i].url;
    let params = ebcOption[i];
    let dsName = params.dsName;
    let dmaName = "dma_srch" + dsName.split("_")[1];
    let doneName = ebcOption[i].doneName;

    //조회용 datamap 생성 및 값 설정
    let paramKey = Object.keys(params);
    let paramVal = Object.values(params);
    let dmaId = [],
      dmaValue = [],
      dmaType = [];
    for (let i = 0; i < paramKey.length; i++) {
      if (paramKey[i] != "dsName") {
        dmaId.push(paramKey[i]);
        dmaValue.push(paramVal[i]);
        dmaType.push("text");
      }
    }
    $c.data.createDataMap($p, dmaName, dmaId, dmaType);
    $c.util.getComponent($p, dmaName).setJSON(params);
    //submission 동적 생성 
    let sbmOption = {
      id: "sbm_" + dsName.split("_")[1],
      action: url,
      //            submitDoneHandler: doneName,
      isProcessMsg: false
    };
    const result = await $c.sbm.executeDynamic($p, sbmOption, $c.util.getComponent($p, dmaName).getJSON());
    if (result.responseJSON.resultDataSet[0].Code < 0) return;

    //dataList 동적 생성 
    const dcoptions = {
      baseNode: "list",
      repeatNode: "map",
      saveRemovedData: "true"
    };
    let dsKeys = Object.keys(result.responseJSON.GAUCE[0]);
    let dsId = [],
      dsType = [];
    for (let j = 0; j < dsKeys.length; j++) {
      dsId.push(dsKeys[j]);
      dsType.push("text");
    }
    $c.data.createDataList($p, dsName, dsId, dsType, dcoptions);
    $c.util.getComponent($p, dsName).setJSON(result.responseJSON.GAUCE);

    //공통코드 조회 결과 처리
    scwin.f_srchEbcResult(dsName);
    /*
    $c.sbm.executeDynamic(sbmOption, $c.util.getComponent(dmaName).getJSON()).then((e) => {
        if (e.responseJSON.resultDataSet[0].Code < 0) return;
         //dataList 동적 생성 
        const dcoptions = {
            baseNode: "list",
            repeatNode: "map",
            saveRemovedData: "true"
        };
        let dsKeys = Object.keys(e.responseJSON.GAUCE[0]);
        let dsId = [], dsType = [];
        for (var i = 0; i < dsKeys.length; i++) {
            dsId.push(dsKeys[i]);
            dsType.push("text");
        }
        $c.data.createDataList(dsName, dsId, dsType, dcoptions);
        $c.util.getComponent(dsName).setJSON(e.responseJSON.GAUCE);
         //공통코드 조회 결과 처리
        scwin.f_srchEbcResult(dsName);
    })        
    */
  }
};

//-------------------------------------------------------------------------
//공통코드 조회 결과 처리
//-------------------------------------------------------------------------
scwin.f_srchEbcResult = function (dsName) {
  switch (dsName) {
    case "ds_custom":
      if (ds_custom.getRowCount() == 0) return;
      ed_declarCstmCd.setValue(ds_custom.getCellData(0, "col1"));
      ed_declarCstmNm.setValue(ds_custom.getCellData(0, "col2"));
      scwin.f_setValueEx(ed_declarCstmCd, ds_custom.getCellData(0, "col1"));
      scwin.f_setValueEx(ed_declarCstmNm, ds_custom.getCellData(0, "col2"));
      break;
    case "ds_bondZone":
      if (ds_bondZone.getRowCount() == 0) return;
      var bondZoneCd = ds_bondZone.getCellData(0, "col1");
      var bondZoneNm = ds_bondZone.getCellData(0, "col2");
      scwin.f_setSendBondZone(bondZoneCd, bondZoneNm);
      break;
    case "ds_jdgCond":
      if (ds_jdgCond.getRowCount() == 0) return;
      lc_jdgPrcCondCd.setNodeSet("data:ds_jdgCond", "col2", "col1");
      lc_jdgPrcCondCd.setSelectedIndex(1);
      break;
    case "ds_section":
      if (ds_section.getRowCount() == 0) return;
      scwin.f_setValueEx(ed_declarSecCd, ds_section.getCellData(0, "col1"));
      scwin.f_setValueEx(ed_declarSecNm, ds_section.getCellData(0, "col2"));
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 다른 화면에서의 요청 처리
//-------------------------------------------------------------------------
scwin.f_procRequest = async function () {
  if (!$c.gus.cfIsNull($p, scwin.gv_paramMapKey)) {
    //HashMap의 키가 전달된 경우
    await scwin.f_setTransferedData(scwin.gv_paramMapKey);
  } else if (!$c.gus.cfIsNull($p, scwin.gv_paramDeclarNo)) {
    //저장된 데이터의 키가 전달된 경우\
    if ($c.util.isEmpty($p, scwin.gv_paramDeclarNo) && $c.util.isEmpty($p, scwin.gv_paramDeclarDt) && $c.util.isEmpty($p, scwin.gv_paramDeclarSeq)) {
      dma_search.set("declarDt", "20200626");
      dma_search.set("declarSeq", "1");
      dma_search.set("declarNo", "02110010007120008453");
      scwin.f_retrieve();
      return;
    }
    ed_srchDeclarNo.setValue(scwin.gv_paramDeclarNo);
    ica_srchDeclarDt.setValue(scwin.gv_paramDeclarDt);
    ed_srchDeclarSeq.setValue(scwin.gv_paramDeclarSeq);
    scwin.f_retrieve();
  }
};

//-------------------------------------------------------------------------
// 보세운송 승인대상 데이터를 Map에 꺼내서 데이터셋에 설정
//-------------------------------------------------------------------------
scwin.f_setTransferedData = async function (transferKey) {
  await scwin.f_new();
  let row = ds_arrive.getRowPosition();
  ds_arrive.setCellData(row, "mrn", $c.gus.getMapValue($p, transferKey + "_mrn"));
  ds_arrive.setCellData(row, "msn", $c.gus.getMapValue($p, transferKey + "_msn"));
  ds_arrive.setCellData(row, "hsn", $c.gus.getMapValue($p, transferKey + "_hsn"));
  ds_arrive.setCellData(row, "mblNo", $c.gus.getMapValue($p, transferKey + "_mblNo"));
  ds_arrive.setCellData(row, "hblNo", $c.gus.getMapValue($p, transferKey + "_hblNo"));
  ds_arrive.setCellData(row, "commNm", $c.gus.getMapValue($p, transferKey + "_commNm"));
  ds_arrive.setCellData(row, "packUnitCd", $c.gus.getMapValue($p, transferKey + "_packUnitCd"));
  ds_arrive.setCellData(row, "packCnt", $c.gus.getMapValue($p, transferKey + "_packCnt"));
  ds_arrive.setCellData(row, "totWt", $c.gus.getMapValue($p, transferKey + "_totWt"));
  scwin.f_setArriveObjHidVal(row);
  scwin.f_resetContainer();
  if (!$c.gus.cfIsNull($p, scwin.gv_paramBondZoneCd)) {
    await scwin.f_setSendBondZone(scwin.gv_paramBondZoneCd, scwin.gv_paramBondZoneNm);
  }
  ed_clntNo.focus();
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ica_srchDeclarDt]);
  scwin.f_setSrchDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_setSrchDefault = function () {
  $c.gus.cfInitHidVal($p, tbl_search, [ica_srchDeclarDt, ed_srchDeclarSeq]);
  ica_srchDeclarDt.setValue(scwin.SYSTEM_DATE);
  ica_srchDeclarDt.focus();
  ed_srchDeclarSeq.setValue("");
};

//-------------------------------------------------------------------------
// 저장모드에 따라 화면의 상태, 버튼의 상태, TR 컴포넌트의 Action, KeyValue를 설정
//-------------------------------------------------------------------------
scwin.f_setEditMode = function (editMode) {
  scwin.gv_editMode = editMode;
  switch (editMode) {
    case scwin.EDIT_MODE_NEW:
      //신규(2)
      udc_mblNo.setDisabled(false);
      udc_hblNo.setDisabled(false);
      btn_hsn.setDisabled(false);
      scwin.f_toggleObj(true, [tbl_master, gr_cntr, ed_mrn, ed_msn, btn_hsn]);
      scwin.f_toggleObj(true, [ed_sendBondZoneCd, ed_sendBondZoneNm, btn_sendBondZoneCd, ed_declarCstmCd, btn_declarCstmCd, ed_declarCstmNm, ed_declarSecCd, btn_declarSecCd, ed_declarSecNm]);
      scwin.f_toggleMainMainEdit(false);
      scwin.f_toggleMainBtn(scwin.MAIN_BTN_UPDATE_DISABLE);
      scwin.f_toggleObj(false, [ica_admitDt, ed_hsn]);
      scwin.action = "/ds.sd.odrmgnt.odrprewrk.RegistBondedTransAdmissionCMD.do";
      scwin.ref = 'data:json,[{"id":"ds_master","key":"IN_DS1"},{"id":"ds_arrive","key":"IN_DS2"},{"id":"ds_cntr","key":"IN_DS3"},{"id":"ds_result","key":"OUT_DS1"}]';
      scwin.target = 'data:json,{"id":"ds_result","key":"OUT_DS1"}';
      break;
    case scwin.EDIT_MODE_UPDATE:
      //수정(3)
      scwin.f_toggleObj(true, [tbl_master, gr_cntr]);
      //scwin.f_toggleObj(true, [tbl_master, gr_cntr, udc_mrn, udc_mblNo, udc_hblNo]);
      scwin.f_toggleMainMainEdit(false);
      scwin.f_toggleMainBtn(scwin.MAIN_BTN_UPDATE_DISABLE);
      scwin.f_toggleObj(false, [tbl_arrive, ica_declarDt, ed_declarCstmCd, btn_hsn, btn_declarCstmCd, ed_declarCstmNm, ed_declarSecCd, btn_declarSecCd, ed_declarSecNm, ica_admitDt, ed_sendBondZoneCd, ed_sendBondZoneNm, btn_sendBondZoneCd]);
      scwin.action = "/ds.sd.odrmgnt.odrprewrk.UpdateBondedTransAdmissionCMD.do";
      scwin.ref = 'data:json,[{"id":"ds_master","key":"IN_DS1"},{"id":"ds_arrive","key":"IN_DS2"},{"id":"ds_cntr","key":"IN_DS3"}]';
      break;
    case scwin.EDIT_MODE_ADMIT:
      //승인(5)
      scwin.f_toggleObj(false, [tbl_master, gr_cntr, tbl_arrive, gr_mainMain, btn_hsn]);
      scwin.f_toggleMainMainEdit(false);
      scwin.f_toggleMainBtn(scwin.MAIN_BTN_NEW_SAVE);
      scwin.f_toggleObj(true, [ica_admitDt]); //, btn_admitDt 접수 상태이면 승인일자를 입력 및 수정 가능

      scwin.action = "/ds.sd.odrmgnt.odrprewrk.UpdateBondedTransAdmissionCMD.do";
      scwin.ref = 'data:json,[{"id":"ds_master","key":"IN_DS1"},{"id":"ds_arrive","key":"IN_DS2"},{"id":"ds_cntr","key":"IN_DS3"}]';
      break;
    case scwin.EDIT_MODE_MAIN_MAIN:
      //정정(4)
      scwin.f_toggleObj(false, [tbl_master, tbl_arrive, gr_cntr, btn_hsn]);
      scwin.f_toggleObj(!scwin.f_existMainMain(), [ica_admitDt]); //, btn_admitDt
      scwin.f_toggleMainMainEdit(true);
      scwin.f_toggleMainBtn(scwin.MAIN_BTN_UPDATE_DISABLE);
      scwin.action = "/ds.sd.odrmgnt.odrprewrk.SaveBondedTransAdmissionMainMainCMD.do";
      scwin.ref = 'data:json,[{"id":"ds_mainMain","key":"IN_DS1"},{"id":"ds_master","key":"IN_DS2"}]';
      break;
    case scwin.EDIT_MODE_RETRIEVE:
      //조회(1)
      scwin.f_toggleObj(false, [tbl_master, tbl_arrive, gr_cntr, gr_mainMain, btn_hsn]);
      scwin.f_toggleMainMainEdit(false);
      scwin.f_setMainBtnState();
      scwin.action = "";
      scwin.ref = "";
      break;
    case scwin.EDIT_MODE_DELETE:
      //삭제(6)
      scwin.f_toggleObj(true, [tbl_master, gr_cntr, ed_mrn, ed_msn, udc_mblNo, udc_hblNo, btn_hsn]);
      scwin.f_toggleMainMainEdit(false);
      scwin.f_toggleMainBtn(scwin.MAIN_BTN_UPDATE_DISABLE);
      scwin.f_toggleObj(false, [ica_admitDt]);
      scwin.action = "/ds.sd.odrmgnt.odrprewrk.DeleteBondedTransDeclarationCMD.do";
      scwin.ref = 'data:json,[{"id":"ds_master","key":"IN_DS1"}]';
      break;
    case scwin.EDIT_MODE_INIT:
      //초기화(0)
      scwin.f_toggleObj(false, [tbl_master, tbl_summary, tbl_arrive, gr_cntr, btn_hsn]);
      scwin.f_toggleMainMainEdit(false);
      scwin.f_toggleMainBtn(scwin.MAIN_BTN_NEW_ONLY);
      scwin.action = "";
      scwin.ref = "";
      break;
  }
  scwin.f_setDisplayOnly();
};

//-------------------------------------------------------------------------
// 처리구분에 따라 버튼을 enable/disbale
//-------------------------------------------------------------------------
scwin.f_setMainBtnState = function () {
  if (scwin.f_existMainMain()) {
    var procCls = scwin.f_getMaxProcCls();
    if (scwin.f_isNotSend(procCls) || scwin.f_isProcErr(procCls) || scwin.f_canAddMainMain()) {
      scwin.f_toggleMainBtn(scwin.MAIN_BTN_NEW_UPDATE);
    } else {
      scwin.f_toggleMainBtn(scwin.MAIN_BTN_NEW_ONLY);
    }
  } else {
    var orgProcCls = ds_master.getCellData(ds_master.getRowPosition(), "procClsCd");
    if (scwin.f_isNotSend(orgProcCls) || scwin.f_isProcErr(orgProcCls) || scwin.f_isProcAccept(orgProcCls)) {
      scwin.f_toggleMainBtn(scwin.MAIN_BTN_NEW_UPDATE);
    } else {
      scwin.f_toggleMainBtn(scwin.MAIN_BTN_NEW_ONLY);
    }
  }
};

//-------------------------------------------------------------------------
// 기본적으로 disable 상태로  설정해야 하는 objects
//-------------------------------------------------------------------------
scwin.f_setDisplayOnly = function () {
  scwin.f_toggleObj(false, [ed_declarNo, ed_declarSeq, ed_regId, ed_regNm, ed_jdgPrcSum, lc_pldgClsCd, ed_pldgAmt, lc_mainMainClsCd, lc_procClsCd, tbl_summary]);
};

//-------------------------------------------------------------------------
// 메인 버튼 enable/disable
//-------------------------------------------------------------------------
scwin.f_toggleMainBtn = function (btnState) {
  switch (btnState) {
    case scwin.MAIN_BTN_ALL_DISABLE:
      //사용여부 확인 
      scwin.f_toggleObj(false, [btn_new, btn_update, btn_send, btn_save, btn_delete]);
      break;
    case scwin.MAIN_BTN_ALL_ENABLE:
      //사용여부 확인 
      scwin.f_toggleObj(true, [btn_new, btn_update, btn_send, btn_save, btn_delete]);
      break;
    case scwin.MAIN_BTN_NEW_ONLY:
      scwin.f_toggleObj(true, [btn_new]);
      scwin.f_toggleObj(false, [btn_update, btn_send, btn_save, btn_delete]);
      break;
    case scwin.MAIN_BTN_NEW_UPDATE:
      scwin.f_toggleObj(true, [btn_new, btn_update]);
      scwin.f_toggleObj(false, [btn_send, btn_save, btn_delete]);
      break;
    case scwin.MAIN_BTN_UPDATE_DISABLE:
      scwin.f_toggleObj(true, [btn_new, btn_send, btn_save, btn_delete]);
      scwin.f_toggleObj(false, [btn_update]);
      break;
    case scwin.MAIN_BTN_NEW_SEND:
      scwin.f_toggleObj(true, [btn_new, btn_send]);
      scwin.f_toggleObj(false, [btn_update, btn_save, btn_delete]);
      break;
    case scwin.MAIN_BTN_NEW_SAVE:
      scwin.f_toggleObj(true, [btn_new, btn_save, btn_delete]);
      scwin.f_toggleObj(false, [btn_update, btn_send]);
      break;
    case scwin.MAIN_BTN_DELETE:
      scwin.f_toggleObj(true, [btn_new, btn_send]);
      scwin.f_toggleObj(false, [btn_save, btn_update, btn_delete]);
      break;
  }
};

//-------------------------------------------------------------------------
// 정정 편집 enable/disable
//-------------------------------------------------------------------------
scwin.f_toggleMainMainEdit = function (mode) {
  if (!scwin.f_isMainMainMode()) mode = false;
  gr_mainMain.setReadOnly("column", "mainMainClsCd", !mode);
  gr_mainMain.setReadOnly("column", "mainMainRsnCd", !mode);
  if (mode == true) {
    scwin.f_toggleObj(scwin.f_canAddMainMain(), [btn_addMainMain]);
    scwin.f_toggleObj(scwin.f_canDelMainMain(), [btn_delMainMain]);
    scwin.f_toggleObj(mode, [gr_mainMain]);
    scwin.f_setMainMainRowEdit(ds_mainMain, scwin.f_getMaxRow());
  } else {
    scwin.f_toggleMainMainBtn(mode);
    scwin.f_toggleObj(mode, [gr_mainMain]);
  }
};

//-------------------------------------------------------------------------
// 정정구분에 따라 정정도착지 목록 그리드의 편집 상태를 설정
//-------------------------------------------------------------------------
scwin.f_setMainMainRowEdit = function (dataSet, row, mainMainCls) {
  var mainMainCls = $c.util.isEmpty($p, mainMainCls) ? dataSet.getCellData(row, "mainMainClsCd") : mainMainCls;
  var procCls = dataSet.getCellData(row, "procClsCd");
  console.log("f_setMainMainRowEdit : " + row + ", " + mainMainCls + ", " + procCls);

  //4세대 국종망 관련 정정항목그리드 정정전/후 에디트스타일수정 황창기 20160222
  if (scwin.f_isNotSend(procCls) || scwin.f_isProcErr(procCls)) {
    // 처리 구분 : 미전송, 전송오류
    if (scwin.f_isTransPrd(mainMainCls)) {
      // 정정 구분 : 운송기한정정 여부

      gr_mainMain.setReadOnly("column", "bfDeclarPrd_01", false);
      gr_mainMain.setReadOnly("column", "afDeclarPrd_01", false);
      gr_mainMain.setColumnVisible("bfDeclarPrd_01", true);
      gr_mainMain.setColumnVisible("afDeclarPrd_01", true);
      gr_mainMain.setReadOnly("column", "bfDeclarPrd_02", true);
      gr_mainMain.setReadOnly("column", "afDeclarPrd_02", true);
      gr_mainMain.setColumnVisible("bfDeclarPrd_02", false);
      gr_mainMain.setColumnVisible("afDeclarPrd_02", false);
      gr_mainMain.setReadOnly("column", "bfArvBondZoneNm", true);
      gr_mainMain.setReadOnly("column", "afArvBondZoneNm", true);
      var sValidExp = "mainMainClsCd:정정구분:yes";
      sValidExp = sValidExp + ",mainMainRsnCd:정정사유:yes:maxByteLength=50";
      sValidExp = sValidExp + ",bfDeclarPrd:운송기한(Fr):no:date=YYYYMMDD";
      sValidExp = sValidExp + ",afDeclarPrd_01:운송기한(To):no:date=YYYYMMDD";
      sValidExp = sValidExp + ",mainMainDeclarDt:신고일자:yes:date=YYYYMMDD";
      sValidExp = sValidExp + ",afArvBondZoneNm:변경후 도착지:no:maxByteLength=50";
      gr_mainMain.options.validExp = sValidExp;
    } else if (scwin.f_isArrive(mainMainCls)) {
      // 정정 구분 : 도착지정정 여부
      gr_mainMain.setReadOnly("column", "bfDeclarPrd_02", false);
      gr_mainMain.setReadOnly("column", "afDeclarPrd_02", false);
      gr_mainMain.setColumnVisible("bfDeclarPrd_02", true);
      gr_mainMain.setColumnVisible("afDeclarPrd_02", true);
      gr_mainMain.setReadOnly("column", "bfDeclarPrd_01", true);
      gr_mainMain.setReadOnly("column", "afDeclarPrd_01", true);
      gr_mainMain.setColumnVisible("bfDeclarPrd_01", false);
      gr_mainMain.setColumnVisible("afDeclarPrd_01", false);
      gr_mainMain.setReadOnly("column", "bfArvBondZoneNm", false);
      gr_mainMain.setReadOnly("column", "afArvBondZoneNm", false);
      var sValidExp = "mainMainClsCd:정정구분:yes";
      sValidExp = sValidExp + ",mainMainRsnCd:정정사유:yes:maxByteLength=50";
      sValidExp = sValidExp + ",mainMainDeclarDt:신고일자:yes:date=YYYYMMDD";
      sValidExp = sValidExp + ",afArvBondZoneNm:변경후 도착지:no:maxByteLength=50";
      gr_mainMain.options.validExp = sValidExp;
    } else {
      gr_mainMain.setReadOnly("column", "bfDeclarPrd_01", true);
      gr_mainMain.setReadOnly("column", "afDeclarPrd_01", true);
      gr_mainMain.setColumnVisible("bfDeclarPrd_01", true);
      gr_mainMain.setColumnVisible("afDeclarPrd_01", true);
      gr_mainMain.setReadOnly("column", "bfArvBondZoneNm", true);
      gr_mainMain.setReadOnly("column", "bfDeclarPrd_02", true);
      gr_mainMain.setReadOnly("column", "afDeclarPrd_02", true);
      gr_mainMain.setColumnVisible("bfDeclarPrd_02", false);
      gr_mainMain.setColumnVisible("afDeclarPrd_02", false);
      gr_mainMain.setReadOnly("column", "bfDeclarPrd", true);
      gr_mainMain.setReadOnly("column", "afDeclarPrd", true);
      gr_mainMain.setReadOnly("column", "afArvBondZoneNm", true);
    }
  } else {
    scwin.f_toggleObj(false, [gr_mainMain]);
  }
};
scwin.f_setMainMainRowEdit_old = function (dataSet, row) {
  var mainMainCls = dataSet.getCellData(row, "mainMainClsCd");
  var procCls = dataSet.getCellData(row, "procClsCd");
  console.log("f_setMainMainRowEdit : " + row + ", " + mainMainCls + ", " + procCls);

  //4세대 국종망 관련 정정항목그리드 정정전/후 에디트스타일수정 황창기 20160222
  if (scwin.f_isNotSend(procCls) || scwin.f_isProcErr(procCls)) {
    // 처리 구분 : 미전송, 전송오류
    if (scwin.f_isTransPrd(mainMainCls)) {
      // 정정 구분 : 운송기한정정 여부

      gr_mainMain.setHeaderValue("column13", "운송기한(Fr)");
      gr_mainMain.setReadOnly("column", "bfDeclarPrd", false);
      gr_mainMain.setCellInputType(row, "bfDeclarPrd", {
        inputType: "calender"
      });
      gr_mainMain.setHeaderValue("column11", "운송기한(To)");
      gr_mainMain.setReadOnly("column", "afDeclarPrd", false);
      gr_mainMain.setCellInputType(row, "afDeclarPrd", {
        inputType: "calendar"
      });
      gr_mainMain.setReadOnly("column", "bfArvBondZoneNm", true);
      var sValidExp = "mainMainClsCd:정정구분:yes";
      sValidExp = sValidExp + ",mainMainRsnCd:정정사유:yes:maxByteLength=50";
      sValidExp = sValidExp + ",bfDeclarPrd:운송기한(Fr):no:date=YYYYMMDD";
      sValidExp = sValidExp + ",afDeclarPrd:운송기한(To):no:date=YYYYMMDD";
      sValidExp = sValidExp + ",mainMainDeclarDt:신고일자:yes:date=YYYYMMDD";
      sValidExp = sValidExp + ",afArvBondZoneNm:변경후 도착지:no:maxByteLength=50";
      scwin.setValidExp(gr_mainMain, sValidExp);
    } else if (scwin.f_isArrive(mainMainCls)) {
      // 정정 구분 : 도착지정정 여부

      var gridHeader = '<w2:column displayMode="label" id="column1"  inputType="text" value="정정차수"        width="100"></w2:column>' + '<w2:column displayMode="label" id="column17" inputType="text" value="정정구분"        width="110"class="txt-red"></w2:column>' + '<w2:column displayMode="label" id="column15" inputType="text" value="정정사유"        width="230"class="txt-red"></w2:column>' + '<w2:column displayMode="label" id="column13" inputType="text" value="정정 전"         width="120"class="txt-blue"></w2:column>' + '<w2:column displayMode="label" id="column11" inputType="text" value="정정 후"         width="120"class="txt-blue"></w2:column>' + '<w2:column displayMode="label" id="column9"  inputType="text" value="전송방법"        width="100" hidden="true"></w2:column>' + '<w2:column displayMode="label" id="column3"  inputType="text" value="처리구분"        width="100"></w2:column>' + '<w2:column displayMode="label" id="column5"  inputType="text" value="신고일자"        width="100" class="txt-red"></w2:column>' + '<w2:column displayMode="label" id="column7"  inputType="text" value="변경전도착지코드" width="150" hidden="true"></w2:column>' + '<w2:column displayMode="label" id="column19" inputType="text" value="변경전 도착지"    width="120"class="txt-blue"></w2:column>' + '<w2:column displayMode="label" id="column23" inputType="text" value="변경후도착지코드" width="150" hidden="true"></w2:column>' + '<w2:column displayMode="label"id="column21"  inputType="text" value="변경후 도착지"    width="120" class="txt-blue"></w2:column>';
      var gridBody = '<w2:column id="mainMainSeq"      name="정정차수"        width="60"  displayMode="label" inputType="text" readOnly="true"></w2:column>' + '<w2:column id="mainMainClsCd"    name="정정구분"        width="110" displayMode="label" inputType="select"></w2:column>' + '<w2:column id="mainMainRsnCd"    name="정정사유"        width="230" displayMode="label" inputType="select" textAlign="left" ></w2:column>' + '<w2:column id="bfDeclarPrd"      name="정정 전"         width="80"  displayMode="label" inputType="text" ></w2:column>' + '<w2:column id="afDeclarPrd"      name="정정 후"         width="80"  displayMode="label" inputType="text" ></w2:column>' + '<w2:column id="sndProcWay"       name="전송방법"        width="80"  displayMode="label" inputType="select" ></w2:column>' + '<w2:column id="procClsCd"        name="처리구분"        width="90"  displayMode="label" inputType="select" readOnly="true"></w2:column>' + '<w2:column id="mainMainDeclarDt" name="신고일자"        width="80"  displayMode="label" inputType="calendar" ></w2:column>' + '<w2:column id="bfArvBondZoneCd"  name="변경전도착지코드" width="100" displayMode="label" inputType="text"></w2:column>' + '<w2:column id="bfArvBondZoneNm"  name="변경전 도착지"    width="100" displayMode="label" inputType="textImage" textAlign="left"></w2:column>' + '<w2:column id="afArvBondZoneCd"  name="변경후도착지코드" width="60"  displayMode="label" inputType="text"></w2:column>' + '<w2:column id="afArvBondZoneNm"  name="변경후 도착지"    width="100" displayMode="label" inputType="textImage" textAlign="left"></w2:column>';
      var gridStr = '<w2:gridView xmlns:w2="http://www.inswave.com/websquare" xmlns:ev="http://www.w3.org/2001/xml-events" autoFit="allColumn" checkAllType="false" class="wq_gvw" dataList="data:ds_mainMain" id="gr_mainMain"' + '		style="" visibleRowNum="5" visibleRowNumFix="true" resize="true" dataDragDrop="true" validExp=""' + '		dataName="보세운송정정목록" rowStatusVisible="true" rowStatusWidth="40" ev:ontextimageclick="scwin.gr_mainMain_ontextimageclick" ev:onafteredit="scwin.gr_mainMain_onafteredit" setCellInputTypeCustom="true" dynamic="true">' + '		<w2:caption id="caption2" style="" value="this is a grid caption."></w2:caption>' + '		<w2:header id="header1" style="">' + '			<w2:row id="row1" style="">' + gridHeader + '			</w2:row>' + '		</w2:header>' + '		<w2:gBody id="gBody1" style="">' + '	        <w2:row id="row2" style="">' + gridBody + '			</w2:row>' + '		</w2:gBody>' + '</w2:gridView>';
      gr_mainMain.setGridStyle(WebSquare.xml.parse(gridStr, true));
      var sValidExp = "mainMainClsCd:정정구분:yes";
      sValidExp = sValidExp + ",mainMainRsnCd:정정사유:yes:maxByteLength=50";
      sValidExp = sValidExp + ",mainMainDeclarDt:신고일자:yes:date=YYYYMMDD";
      sValidExp = sValidExp + ",afArvBondZoneNm:변경후 도착지:no:maxByteLength=50";
      scwin.setValidExp(gr_mainMain, sValidExp);
    } else if (scwin.f_isArvTransCntSht(mainMainCls)) {
      // 정정구분 : 출발지운송수단여부

      gr_mainMain.setHeaderValue("column13", "정정 전");
      gr_mainMain.setReadOnly("column", "bfDeclarPrd", false);
      gr_mainMain.setCellInputType(row, "bfDeclarPrd", {
        inputType: "Combo"
      });
      gr_mainMain.setHeaderValue("column11", "정정 후");
      gr_mainMain.setReadOnly("column", "afDeclarPrd", false);
      gr_mainMain.setCellInputType(row, "afDeclarPrd", {
        inputType: "Combo"
      });
      gr_mainMain.setReadOnly("column", "bfArvBondZoneNm", true);
      var sValidExp = "mainMainClsCd:정정구분:yes";
      sValidExp = sValidExp + ",mainMainRsnCd:정정사유:yes:maxByteLength=50";
      sValidExp = sValidExp + ",mainMainDeclarDt:신고일자:yes:date=YYYYMMDD";
      sValidExp = sValidExp + ",afArvBondZoneNm:변경후 도착지:no:maxByteLength=50";
      scwin.setValidExp(gr_mainMain, sValidExp);
    } else if (scwin.f_isViaTransCntSht(mainMainCls)) {
      // 정정 구분 : 경유지운송수단여부

      gr_mainMain.setHeaderValue("column13", "정정 전");
      gr_mainMain.setReadOnly("column", "bfDeclarPrd", false);
      gr_mainMain.setCellInputType(row, "bfDeclarPrd", {
        inputType: "Combo"
      });
      gr_mainMain.setHeaderValue("column11", "정정 후");
      gr_mainMain.setReadOnly("column", "afDeclarPrd", false);
      gr_mainMain.setCellInputType(row, "afDeclarPrd", {
        inputType: "Combo"
      });
      gr_mainMain.setReadOnly("column", "bfArvBondZoneNm", true);
      var sValidExp = "mainMainClsCd:정정구분:yes";
      sValidExp = sValidExp + ",mainMainRsnCd:정정사유:yes:maxByteLength=50";
      sValidExp = sValidExp + ",mainMainDeclarDt:신고일자:yes:date=YYYYMMDD";
      sValidExp = sValidExp + ",afArvBondZoneNm:변경후 도착지:no:maxByteLength=50";
      scwin.setValidExp(gr_mainMain, sValidExp);
    } else if (scwin.f_isVia(mainMainCls)) {
      // 정정 구분 : 경유지여부

      var gridHeader = '<w2:column displayMode="label" id="column1"  inputType="text" value="정정차수"        width="100"></w2:column>' + '<w2:column displayMode="label" id="column17" inputType="text" value="정정구분"        width="110"class="txt-red"></w2:column>' + '<w2:column displayMode="label" id="column15" inputType="text" value="정정사유"        width="230"class="txt-red"></w2:column>' + '<w2:column displayMode="label" id="column13" inputType="text" value="정정 전"         width="120"class="txt-blue"></w2:column>' + '<w2:column displayMode="label" id="column11" inputType="text" value="정정 후"         width="120"class="txt-blue"></w2:column>' + '<w2:column displayMode="label" id="column9"  inputType="text" value="전송방법"        width="100" hidden="true"></w2:column>' + '<w2:column displayMode="label" id="column3"  inputType="text" value="처리구분"        width="100"></w2:column>' + '<w2:column displayMode="label" id="column5"  inputType="text" value="신고일자"        width="100" class="txt-red"></w2:column>' + '<w2:column displayMode="label" id="column7"  inputType="text" value="변경전도착지코드" width="150" hidden="true"></w2:column>' + '<w2:column displayMode="label" id="column19" inputType="text" value="변경전 도착지"    width="120"class="txt-blue"></w2:column>' + '<w2:column displayMode="label" id="column23" inputType="text" value="변경후도착지코드" width="150" hidden="true"></w2:column>' + '<w2:column displayMode="label"id="column21"  inputType="text" value="변경후 도착지"    width="120" class="txt-blue"></w2:column>';
      var gridBody = '<w2:column id="mainMainSeq"      name="정정차수"        width="60"  displayMode="label" inputType="text" readOnly="true"></w2:column>' + '<w2:column id="mainMainClsCd"    name="정정구분"        width="110" displayMode="label" inputType="select"></w2:column>' + '<w2:column id="mainMainRsnCd"    name="정정사유"        width="230" displayMode="label" inputType="select" textAlign="left" ></w2:column>' + '<w2:column id="bfDeclarPrd"      name="정정 전"         width="80"  displayMode="label" inputType="text" ></w2:column>' + '<w2:column id="afDeclarPrd"      name="정정 후"         width="80"  displayMode="label" inputType="text" ></w2:column>' + '<w2:column id="sndProcWay"       name="전송방법"        width="80"  displayMode="label" inputType="select" ></w2:column>' + '<w2:column id="procClsCd"        name="처리구분"        width="90"  displayMode="label" inputType="select" readOnly="true"></w2:column>' + '<w2:column id="mainMainDeclarDt" name="신고일자"        width="80"  displayMode="label" inputType="calendar" ></w2:column>' + '<w2:column id="bfArvBondZoneCd"  name="변경전도착지코드" width="100" displayMode="label" inputType="text"></w2:column>' + '<w2:column id="bfArvBondZoneNm"  name="변경전 도착지"    width="100" displayMode="label" inputType="textImage" textAlign="left"></w2:column>' + '<w2:column id="afArvBondZoneCd"  name="변경후도착지코드" width="60"  displayMode="label" inputType="text"></w2:column>' + '<w2:column id="afArvBondZoneNm"  name="변경후 도착지"    width="100" displayMode="label" inputType="textImage" textAlign="left"></w2:column>';
      var gridStr = '<w2:gridView xmlns:w2="http://www.inswave.com/websquare" xmlns:ev="http://www.w3.org/2001/xml-events" autoFit="allColumn" checkAllType="false" class="wq_gvw" dataList="data:ds_mainMain" id="gr_mainMain"' + '		style="" visibleRowNum="5" visibleRowNumFix="true" resize="true" dataDragDrop="true" validExp=""' + '		dataName="보세운송정정목록" rowStatusVisible="true" rowStatusWidth="40" ev:ontextimageclick="scwin.gr_mainMain_ontextimageclick" ev:onafteredit="scwin.gr_mainMain_onafteredit" setCellInputTypeCustom="true" dynamic="true">' + '		<w2:caption id="caption2" style="" value="this is a grid caption."></w2:caption>' + '		<w2:header id="header1" style="">' + '			<w2:row id="row1" style="">' + gridHeader + '			</w2:row>' + '		</w2:header>' + '		<w2:gBody id="gBody1" style="">' + '	        <w2:row id="row2" style="">' + gridBody + '			</w2:row>' + '		</w2:gBody>' + '</w2:gridView>';
      gr_mainMain.setGridStyle(WebSquare.xml.parse(gridStr, true));
      var sValidExp = "mainMainClsCd:정정구분:yes";
      sValidExp = sValidExp + ",mainMainRsnCd:정정사유:yes:maxByteLength=50";
      sValidExp = sValidExp + ",mainMainDeclarDt:신고일자:yes:date=YYYYMMDD";
      sValidExp = sValidExp + ",afArvBondZoneNm:변경후 도착지:no:maxByteLength=50";
      scwin.setValidExp(gr_mainMain, sValidExp);
    } else if (scwin.f_isDpt(mainMainCls)) {
      // 정정 구분 : 출발지여부
      var gridHeader = '<w2:column displayMode="label" id="column1"  inputType="text" value="정정차수"        width="100"></w2:column>' + '<w2:column displayMode="label" id="column17" inputType="text" value="정정구분"        width="110"class="txt-red"></w2:column>' + '<w2:column displayMode="label" id="column15" inputType="text" value="정정사유"        width="230"class="txt-red"></w2:column>' + '<w2:column displayMode="label" id="column13" inputType="text" value="정정 전"         width="120"class="txt-blue"></w2:column>' + '<w2:column displayMode="label" id="column11" inputType="text" value="정정 후"         width="120"class="txt-blue"></w2:column>' + '<w2:column displayMode="label" id="column9"  inputType="text" value="전송방법"        width="100" hidden="true"></w2:column>' + '<w2:column displayMode="label" id="column3"  inputType="text" value="처리구분"        width="100"></w2:column>' + '<w2:column displayMode="label" id="column5"  inputType="text" value="신고일자"        width="100" class="txt-red"></w2:column>' + '<w2:column displayMode="label" id="column7"  inputType="text" value="변경전도착지코드" width="150" hidden="true"></w2:column>' + '<w2:column displayMode="label" id="column19" inputType="text" value="변경전 도착지"    width="120"class="txt-blue"></w2:column>' + '<w2:column displayMode="label" id="column23" inputType="text" value="변경후도착지코드" width="150" hidden="true"></w2:column>' + '<w2:column displayMode="label"id="column21"  inputType="text" value="변경후 도착지"    width="120" class="txt-blue"></w2:column>';
      var gridBody = '<w2:column id="mainMainSeq"      name="정정차수"        width="60"  displayMode="label" inputType="text" readOnly="true"></w2:column>' + '<w2:column id="mainMainClsCd"    name="정정구분"        width="110" displayMode="label" inputType="select"></w2:column>' + '<w2:column id="mainMainRsnCd"    name="정정사유"        width="230" displayMode="label" inputType="select" textAlign="left" ></w2:column>' + '<w2:column id="bfDeclarPrd"      name="정정 전"         width="80"  displayMode="label" inputType="text" ></w2:column>' + '<w2:column id="afDeclarPrd"      name="정정 후"         width="80"  displayMode="label" inputType="text" ></w2:column>' + '<w2:column id="sndProcWay"       name="전송방법"        width="80"  displayMode="label" inputType="select" ></w2:column>' + '<w2:column id="procClsCd"        name="처리구분"        width="90"  displayMode="label" inputType="select" readOnly="true"></w2:column>' + '<w2:column id="mainMainDeclarDt" name="신고일자"        width="80"  displayMode="label" inputType="calendar" ></w2:column>' + '<w2:column id="bfArvBondZoneCd"  name="변경전도착지코드" width="100" displayMode="label" inputType="text"></w2:column>' + '<w2:column id="bfArvBondZoneNm"  name="변경전 도착지"    width="100" displayMode="label" inputType="textImage" textAlign="left"></w2:column>' + '<w2:column id="afArvBondZoneCd"  name="변경후도착지코드" width="60"  displayMode="label" inputType="text"></w2:column>' + '<w2:column id="afArvBondZoneNm"  name="변경후 도착지"    width="100" displayMode="label" inputType="textImage" textAlign="left"></w2:column>';
      var gridStr = '<w2:gridView xmlns:w2="http://www.inswave.com/websquare" xmlns:ev="http://www.w3.org/2001/xml-events" autoFit="allColumn" checkAllType="false" class="wq_gvw" dataList="data:ds_mainMain" id="gr_mainMain"' + '		style="" visibleRowNum="5" visibleRowNumFix="true" resize="true" dataDragDrop="true" validExp=""' + '		dataName="보세운송정정목록" rowStatusVisible="true" rowStatusWidth="40" ev:ontextimageclick="scwin.gr_mainMain_ontextimageclick" ev:onafteredit="scwin.gr_mainMain_onafteredit" setCellInputTypeCustom="true" dynamic="true">' + '		<w2:caption id="caption2" style="" value="this is a grid caption."></w2:caption>' + '		<w2:header id="header1" style="">' + '			<w2:row id="row1" style="">' + gridHeader + '			</w2:row>' + '		</w2:header>' + '		<w2:gBody id="gBody1" style="">' + '	        <w2:row id="row2" style="">' + gridBody + '			</w2:row>' + '		</w2:gBody>' + '</w2:gridView>';
      gr_mainMain.setGridStyle(WebSquare.xml.parse(gridStr, true));
      var sValidExp = "mainMainClsCd:정정구분:yes";
      sValidExp = sValidExp + ",mainMainRsnCd:정정사유:yes:maxByteLength=50";
      sValidExp = sValidExp + ",mainMainDeclarDt:신고일자:yes:date=YYYYMMDD";
      sValidExp = sValidExp + ",afArvBondZoneNm:변경후 도착지:no:maxByteLength=50";
      scwin.setValidExp(gr_mainMain, sValidExp);
    } else if (scwin.f_isPldgAmt(mainMainCls)) {
      //  정정 구분 : 담보금액여부
      var gridHeader = '<w2:column displayMode="label" id="column1"  inputType="text" value="정정차수"        width="100"></w2:column>' + '<w2:column displayMode="label" id="column17" inputType="text" value="정정구분"        width="110"class="txt-red"></w2:column>' + '<w2:column displayMode="label" id="column15" inputType="text" value="정정사유"        width="230"class="txt-red"></w2:column>' + '<w2:column displayMode="label" id="column13" inputType="text" value="정정 전"         width="120"class="txt-blue"></w2:column>' + '<w2:column displayMode="label" id="column11" inputType="text" value="정정 후"         width="120"class="txt-blue"></w2:column>' + '<w2:column displayMode="label" id="column9"  inputType="text" value="전송방법"        width="100" hidden="true"></w2:column>' + '<w2:column displayMode="label" id="column3"  inputType="text" value="처리구분"        width="100"></w2:column>' + '<w2:column displayMode="label" id="column5"  inputType="text" value="신고일자"        width="100" class="txt-red"></w2:column>' + '<w2:column displayMode="label" id="column7"  inputType="text" value="변경전도착지코드" width="150" hidden="true"></w2:column>' + '<w2:column displayMode="label" id="column19" inputType="text" value="변경전 도착지"    width="120"class="txt-blue"></w2:column>' + '<w2:column displayMode="label" id="column23" inputType="text" value="변경후도착지코드" width="150" hidden="true"></w2:column>' + '<w2:column displayMode="label"id="column21"  inputType="text" value="변경후 도착지"    width="120" class="txt-blue"></w2:column>';
      var gridBody = '<w2:column id="mainMainSeq"      name="정정차수"        width="60"  displayMode="label" inputType="text" readOnly="true"></w2:column>' + '<w2:column id="mainMainClsCd"    name="정정구분"        width="110" displayMode="label" inputType="select"></w2:column>' + '<w2:column id="mainMainRsnCd"    name="정정사유"        width="230" displayMode="label" inputType="select" textAlign="left" ></w2:column>' + '<w2:column id="bfDeclarPrd"      name="정정 전"         width="80"  displayMode="label" inputType="text" ></w2:column>' + '<w2:column id="afDeclarPrd"      name="정정 후"         width="80"  displayMode="label" inputType="text" ></w2:column>' + '<w2:column id="sndProcWay"       name="전송방법"        width="80"  displayMode="label" inputType="select" ></w2:column>' + '<w2:column id="procClsCd"        name="처리구분"        width="90"  displayMode="label" inputType="select" readOnly="true"></w2:column>' + '<w2:column id="mainMainDeclarDt" name="신고일자"        width="80"  displayMode="label" inputType="calendar" ></w2:column>' + '<w2:column id="bfArvBondZoneCd"  name="변경전도착지코드" width="100" displayMode="label" inputType="text"></w2:column>' + '<w2:column id="bfArvBondZoneNm"  name="변경전 도착지"    width="100" displayMode="label" inputType="textImage" textAlign="left"></w2:column>' + '<w2:column id="afArvBondZoneCd"  name="변경후도착지코드" width="60"  displayMode="label" inputType="text"></w2:column>' + '<w2:column id="afArvBondZoneNm"  name="변경후 도착지"    width="100" displayMode="label" inputType="textImage" textAlign="left"></w2:column>';
      var gridStr = '<w2:gridView xmlns:w2="http://www.inswave.com/websquare" xmlns:ev="http://www.w3.org/2001/xml-events" autoFit="allColumn" checkAllType="false" class="wq_gvw" dataList="data:ds_mainMain" id="gr_mainMain"' + '		style="" visibleRowNum="5" visibleRowNumFix="true" resize="true" dataDragDrop="true" validExp=""' + '		dataName="보세운송정정목록" rowStatusVisible="true" rowStatusWidth="40" ev:ontextimageclick="scwin.gr_mainMain_ontextimageclick" ev:onafteredit="scwin.gr_mainMain_onafteredit" setCellInputTypeCustom="true" dynamic="true">' + '		<w2:caption id="caption2" style="" value="this is a grid caption."></w2:caption>' + '		<w2:header id="header1" style="">' + '			<w2:row id="row1" style="">' + gridHeader + '			</w2:row>' + '		</w2:header>' + '		<w2:gBody id="gBody1" style="">' + '	        <w2:row id="row2" style="">' + gridBody + '			</w2:row>' + '		</w2:gBody>' + '</w2:gridView>';
      gr_mainMain.setGridStyle(WebSquare.xml.parse(gridStr, true));
      var sValidExp = "mainMainClsCd:정정구분:yes";
      sValidExp = sValidExp + ",mainMainRsnCd:정정사유:yes:maxByteLength=50";
      sValidExp = sValidExp + ",mainMainDeclarDt:신고일자:yes:date=YYYYMMDD";
      sValidExp = sValidExp + ",afArvBondZoneNm:변경후 도착지:no:maxByteLength=50";
      scwin.setValidExp(gr_mainMain, sValidExp);
    } else {
      gr_mainMain.setReadOnly("column", "bfDeclarPrd", true);
      gr_mainMain.setReadOnly("column", "afDeclarPrd", true);
      gr_mainMain.setReadOnly("column", "afArvBondZoneNm", true);
    }
  } else {
    scwin.f_toggleObj(false, [gr_mainMain]);
  }
};

//-------------------------------------------------------------------------
// 정정 추가/삭제 버튼 enable/disable
//-------------------------------------------------------------------------
scwin.f_toggleMainMainBtn = function (mode) {
  scwin.f_toggleObj(mode, [btn_addMainMain, btn_delMainMain]);
};

//-------------------------------------------------------------------------
// 테이블 또는 Objects 중 조회조건이 하나라도 입력되었는 지 여부를 반환
//-------------------------------------------------------------------------
scwin.f_isAllEmpty = function (inObj) {
  var objArray = scwin.f_isArray(inObj) ? inObj : $c.util.getChildren($p, inObj);
  for (var i = 0; i < objArray.length; i++) {
    switch ($c.gus.cfGetElementType($p, objArray[i])) {
      case "GE":
      case "TEXT":
      case "GLC":
        if (!$c.gus.cfIsNull($p, $c.gus.cfGetValue($p, objArray[i]))) return false;
    }
  }
  for (var i = 0; i < inObj.length; i++) {
    switch ($c.gus.cfGetElementType($p, inObj[i])) {
      case "input":
      case "inputCalendar":
        if (!$c.gus.cfIsNull($p, $c.gus.cfGetValue($p, inObj[i]))) return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 데이터를 조회하기 전 조회 조건 및 복수의 자료가 있는 지 체크
//-------------------------------------------------------------------------
scwin.f_preRetrieve = async function () {
  if (scwin.f_isAllEmpty([ica_srchDeclarDt, ed_srchDeclarSeq, ed_srchDeclarNo, ed_srchMblNo, ed_srchHblNo])) {
    await $c.win.alert($p, "신고일자/신고순번, 신고번호, M B/L, H B/L번호 중 하나 이상 입력해 주십시요.");
    ica_srchDeclarDt.focus();
    return false;
  }
  let chkVal = await $c.gus.cfValidate($p, [tbl_search], null, true);
  if (!chkVal) return;
  if (!$c.gus.cfIsNull($p, ica_srchDeclarDt.getValue()) && $c.gus.cfIsNull($p, ed_srchDeclarSeq.getValue())) {
    await $c.win.alert($p, "신고일자와 신고순번 조회조건은 함께 지정되어야 합니다.");
    ica_srchDeclarDt.focus();
    return false;
  }
  if (scwin.f_isAllEmpty([ica_srchDeclarDt, ed_srchDeclarSeq, ed_srchDeclarNo]) && !scwin.f_isAllEmpty([ed_srchMblNo, ed_srchHblNo])) {
    scwin.f_srchPrePopUp();
  }
  scwin.f_retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  let chkVal = await $c.gus.cfValidate($p, [tbl_search], null, true);
  if (!chkVal) return;
  if (scwin.check == 1) {
    ica_srchDeclarDt.setValue(scwin.SYSTEM_DATE);
    ed_srchDeclarSeq.setValue(scwin.declarSeq);
  }
  $c.sbm.execute($p, sbm_search);
  scwin.check = 0;
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_save = async function (msg, sndProcWay) {
  let conf = await $c.win.confirm($p, msg + $c.data.getMessage($p, MSG_CM_CRM_001));
  if (conf) {
    scwin.f_preparePost(sndProcWay);
    const executeOption = {
      id: "sbm_master",
      action: scwin.action,
      ref: scwin.ref,
      target: scwin.target,
      submitDoneHandler: scwin.sbm_master_submitdone
      // , isProcessMsg: false
    };
    await $c.sbm.executeDynamic($p, executeOption);
  }
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_allDelete = async function () {
  var procClsCd = lc_procClsCd.getValue();
  if (ds_master.getCellData(ds_master.getRowPosition(), "declarDt") != "" && ds_master.getCellData(ds_master.getRowPosition(), "declarSeq") != "") {
    if (scwin.f_isNotSend(procClsCd) || scwin.f_isProcErr(procClsCd)) {
      scwin.f_setEditMode(scwin.EDIT_MODE_DELETE);
      for (var i = 0; i < ds_master.getRowCount(); i++) {
        ds_master.deleteRow(i);
      }
      scwin.check = 1;
      // $c.sbm.execute(sbm_master);

      const executeOption = {
        id: "sbm_master",
        action: scwin.action,
        ref: scwin.ref,
        target: scwin.target,
        submitDoneHandler: scwin.sbm_master_submitdone
        // , isProcessMsg: false
      };
      $c.sbm.executeDynamic($p, executeOption);
    }
  } else {
    await $c.win.alert($p, "삭제할 정보가 없습니다.");
  }
};
scwin.sbm_master_submitdone = async function (e) {
  console.log("scwin.sbm_master_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (scwin.check == 1) {
    await $c.win.alert($p, "성공적으로 삭제되었습니다.");
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    if (ds_result.getRowCount() > 0 && ds_result.getCellData(0, "declarDt") != "") {
      ica_declarDt.setValue(ds_result.getCellData(0, "declarDt"));
      ed_declarSeq.setValue(ds_result.getCellData(0, "declarSeq"));
      ed_declarNo.setValue(ds_result.getCellData(0, "declarNo"));
    }
  }
  ica_srchDeclarDt.setValue(ica_declarDt.getValue());
  ed_srchDeclarSeq.setValue(ed_declarSeq.getValue());
  ed_srchDeclarNo.setValue(ed_declarNo.getValue());
  ed_hblNo.setValue("");
  scwin.f_retrieve();
};
//-------------------------------------------------------------------------
// EDI 전송방식을 설정
//-------------------------------------------------------------------------
scwin.f_preparePost = function (sndProcWay) {
  if (scwin.f_isMainMainMode() || scwin.f_existMainMain()) {
    ds_mainMain.setCellData(scwin.f_getMaxRow(), "sndProcWay", sndProcWay);
    scwin.f_prepareMainMainPost();
  } else if (!scwin.f_isAdmitMode()) {
    if (scwin.f_isProcErr(lc_procClsCd.getValue())) lc_procClsCd.setValue(scwin.PROC_CLS_NOT_SEND);
    ds_master.setCellData(ds_master.getRowPosition(), "sndProcWay", sndProcWay);
    if (scwin.f_isDataUpdated([ds_master])) {
      ds_arrive.setCellData(ds_arrive.getRowPosition(), "arvBondZoneCd", ds_master.getCellData(ds_master.getRowPosition(), "arvBondZoneCd"));
      ds_arrive.setCellData(ds_arrive.getRowPosition(), "ucomWrkPlApprNo", ds_master.getCellData(ds_master.getRowPosition(), "ucomWrkPlApprNo"));
      ds_arrive.setCellData(ds_arrive.getRowPosition(), "cstmStateItm", ds_master.getCellData(ds_master.getRowPosition(), "cstmStateItm"));
      if (ds_master.getCellData(ds_master.getRowPosition(), "casYn") == 'Y') {
        if (String(cbx_exclusionYn.getValue()) == 'true') {
          ds_master.setCellData(ds_master.getRowPosition(), "exclusionYn", "1");
        } else {
          ds_master.setCellData(ds_master.getRowPosition(), "exclusionYn", "0");
        }
      } else {
        ds_master.setCellData(ds_master.getRowPosition(), "exclusionYn", "");
      }
    } else {
      // ds_master.UseChangeInfo = false;
    }
  }
};

//-------------------------------------------------------------------------
// 전송
//-------------------------------------------------------------------------
scwin.f_sendImmediate = async function () {
  var msg = "즉시 전송됩니다.\n\n";
  if (scwin.f_isAdmitMode()) {
    await $c.win.alert($p, "접수된 자료의 승인일자 입력은 EDI전송대상이 아닙니다.");
    return;
  }
  if (!(await scwin.f_validation())) return false;
  if (scwin.f_isMainMainMode() || scwin.f_existMainMain()) {
    if (ds_mainMain.getRowStatus(scwin.f_getMaxRow()) == 2) {
      //삭제된 경우이면
      await $c.win.alert($p, "정정 신고내역 삭제는 EDI전송대상이 아닙니다.");
      return;
    }
  }
  scwin.f_save(msg, scwin.SEND_PROC_IMMEDIATE);
};

//-------------------------------------------------------------------------
// 전송
//-------------------------------------------------------------------------
scwin.f_sendBatch = async function (gubun) {
  if (gubun == 1) {
    var msg = "추후 일괄전송됩니다.\n\n";
    var sndProcWay = scwin.SEND_PROC_BATCH;
    if (!(await scwin.f_validation())) return false;
    if (scwin.f_isAdmitMode()) {
      msg = "";
      sndProcWay = lc_sndProcWay.getValue();
    } else {
      if (scwin.f_isMainMainMode() || scwin.f_existMainMain()) {
        let chkVal = await $c.gus.cfValidate($p, [ica_admitDt], null, true);
        if (!chkVal) return;
        if (ds_mainMain.getRowStatus(scwin.f_getMaxRow()) == 2) msg = ""; //정정내역이 삭제된 경우
      }
    }
    scwin.f_save(msg, sndProcWay);
  } else if (gubun == 2) {
    var msg = "삭제 하시겠습니까 ? \n";
    let conf = await $c.win.confirm($p, msg);
    if (!conf) return;
    scwin.f_allDelete();
  }
};

//-------------------------------------------------------------------------
// Validation
//-------------------------------------------------------------------------
scwin.f_validation = async function () {
  if (scwin.f_isMainMainMode() || scwin.f_existMainMain()) {
    return await scwin.f_validateMainMain(); //정정내역 확인 
  } else if (scwin.f_isAdmitMode()) {
    if ($c.gus.cfIsNull($p, ica_admitDt.getValue())) return false;else {
      return await $c.gus.cfValidate($p, [ica_admitDt], null, true);
      // return await $c.gus.cfValidate(ica_admitDt.getValue() );        //TODO 오류인데 ASIS 에서도 이렇게 처리해서 걍 진행함.
    }
  } else {
    return await scwin.f_validateAdmit();
  }
};

//-------------------------------------------------------------------------
// 원 신고정보 Validation
//-------------------------------------------------------------------------
scwin.f_validateAdmit = async function () {
  let chkVal = "";

  //승인정보 입력 검증
  if (ds_master.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["승인정보"]);
    return false;
  }
  chkVal = await $c.gus.cfValidate($p, [tbl_master], null, true);
  if (!chkVal) return false;
  if (!(await scwin.f_checkHidVal([ed_clntNo, ed_sendBondZoneCd, ed_viaBondZoneCd, ed_arvBondZoneCd, ed_appRsnCd, ed_declarCstmCd, ed_declarSecCd]))) return false;
  if (!$c.gus.cfIsNull($p, ed_viaBondZoneCd.getValue()) && $c.gus.cfIsNull($p, lc_transCntShtCd2.getValue())) {
    await $c.win.alert($p, "경유지 입력 시 두번째 운송수단도 입력하셔야 합니다.");
    lc_transCntShtCd2.focus();
    return false;
  }
  if ($c.gus.cfIsNull($p, ed_viaBondZoneCd.getValue()) && !$c.gus.cfIsNull($p, lc_transCntShtCd2.getValue())) {
    await $c.win.alert($p, "두번째 운송수단 입력 시 경유지도 입력하셔야 합니다.");
    ed_viaBondZoneCd.focus();
    return false;
  }

  //화물정보 입력 검증
  if (ds_arrive.getTotalRow() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_003, ["화물정보내역"]);
    return false;
  }
  chkVal = await $c.gus.cfValidate($p, [tbl_arrive], null, true);
  if (!chkVal) return false;

  //컨테이너 입력 검증
  if (ds_cntr.getTotalRow() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_003, ["컨테이너내역"]);
    return false;
  }
  chkVal = await $c.gus.cfValidate($p, [gr_cntr], null, true);
  if (!chkVal) return false;
  return true;
};

//-------------------------------------------------------------------------
// 정정 내역 Validation
//-------------------------------------------------------------------------
scwin.f_validateMainMain = async function () {
  let chkVal = "";

  //정정 입력 검증
  if (!scwin.f_existMainMain()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["정정내역"]);
    return false;
  }
  chkVal = await $c.gus.cfValidate($p, [gr_mainMain], null, true);
  if (!chkVal) return false;
  var row = scwin.f_getMaxRow();
  var mainMainCls = scwin.f_getMaxMainMainCls();
  var procCls = scwin.f_getMaxProcCls();
  if (!scwin.f_isNotSend(procCls)) {
    await $c.win.alert($p, "미전송 자료만 전송 및 저장할 수 있습니다.");
    return false;
  }

  //운송기한 체크
  if (scwin.f_isTransPrd(mainMainCls)) {
    var bfDeclarPrd = ds_mainMain.getCellData(row, "bfDeclarPrd_01");
    if ($c.gus.cfIsNull($p, bfDeclarPrd)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["운송기한(Fr)"]);
      return false;
    }
    var afDeclarPrd = ds_mainMain.getCellData(row, "afDeclarPrd_01");
    if ($c.gus.cfIsNull($p, afDeclarPrd)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["운송기한(to)"]);
      return false;
    }
    if (!$c.gus.cfIsAfterDate($p, bfDeclarPrd, afDeclarPrd, false)) {
      await $c.win.alert($p, "운송기한(to)이 운송기한(Fr)보다 이후여야 합니다.");
      return false;
    }
  } else if (scwin.f_isArrive(mainMainCls)) {
    if ($c.gus.cfIsNull($p, ds_mainMain.getCellData(row, "afArvBondZoneNm"))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["변경 후 도착지"]);
      return false;
    }
    if (ds_mainMain.getCellData(row, "afArvBondZoneCd") == ds_mainMain.getCellData(row, "bfArvBondZoneCd")) {
      await $c.win.alert($p, "변경전 도착지와 변경후 도착지가 동일합니다.");
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 데이터셋의 자료 변경 여부를 반환 :
//-------------------------------------------------------------------------
scwin.f_isDataUpdated = function (dataSetArray) {
  if (dataSetArray == null) return false;
  for (var i = 0; i < dataSetArray.length; i++) {
    if ($c.data.isModified($p, dataSetArray[i])) return true;
  }
  return false;
};
scwin.ds_masterInit = function () {
  ds_master.removeAll();
  let insMas = ds_master.insertRow();
  ds_master.setRowPosition(insMas);
  ds_master.setIgnoreStatus(false);
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_new = async function () {
  if (scwin.f_isDataUpdated([ds_master, ds_arrive, ds_cntr, ds_mainMain])) {
    if (scwin.gv_editMode != scwin.EDIT_MODE_INIT) {
      let conf = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_005));
      if (!conf) return;
    }
  }
  scwin.f_fieldClear();
  ds_master.removeAll();
  ds_arrive.removeAll();
  ds_cntr.removeAll();
  ds_mainMain.removeAll();
  ds_result.removeAll();
  scwin.f_clearSummary();
  let insMas = ds_master.insertRow();
  ds_master.setRowPosition(insMas);
  ds_master.setIgnoreStatus(false);
  let insArr = ds_arrive.insertRow();
  ds_arrive.setRowPosition(insArr);
  ds_arrive.setIgnoreStatus(false);
  ica_declarDt.setValue(scwin.SYSTEM_DATE);
  scwin.f_setTransPrd();
  lc_pldgClsCd.setValue(scwin.PLDG_CLS_FACILE_TRANS);
  scwin.f_setEditMode(scwin.EDIT_MODE_NEW);
  await scwin.f_resetSection();
  ed_clntNo.focus();
  cbx_exclusionYn.setValue(false);
  cbx_exclusionYn.setDisabled(true);
  ed_pldgAmt.setValue("0");
  ed_declarPrcSum.setValue("0");
  ed_exchRt.setValue("0");
  ed_jdgPrcSum.setValue("0");
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_update = function () {
  var procClsCd = lc_procClsCd.getValue();
  if (scwin.f_isNotSend(procClsCd) || scwin.f_isProcErr(procClsCd)) {
    //미전송, 오류
    scwin.f_setEditMode(scwin.EDIT_MODE_UPDATE);
  } else if (scwin.f_isProcAccept(procClsCd)) {
    //접수
    if ($c.gus.cfIsNull($p, ica_admitDt.getValue())) {
      //승인일자만 입력 가능하도록 한다.
      scwin.f_setEditMode(scwin.EDIT_MODE_ADMIT);
    } else {
      //정정 내역을 등록 가능하도록 한다.
      scwin.f_setEditMode(scwin.EDIT_MODE_MAIN_MAIN);
    }
  } else {
    scwin.f_setEditMode(scwin.EDIT_MODE_NEW);
  }
};

//-------------------------------------------------------------------------
// 정정 추가
//-------------------------------------------------------------------------
scwin.f_addMainMain = async function () {
  var mainMainSeq = scwin.f_getMaxSeq();
  var sourceDataSet = null;
  var sourceRow = 0;
  if (mainMainSeq == 0) {
    scwin.f_copyMainMainFromOrg(mainMainSeq);
  } else if (mainMainSeq > 0) {
    if (!scwin.f_canAddMainMain()) {
      await $c.win.alert($p, "승인된 자료 중 전체취하가 아닌 경우만\n\n정정내역을 추가 할 수 있습니다.");
      return;
    }
    scwin.f_copyMainMainFromPrev(mainMainSeq);
  }
  scwin.f_toggleObj(false, [btn_addMainMain]);
  scwin.f_toggleMainMainEdit(true);
};

//-------------------------------------------------------------------------
// 정정 삭제
//-------------------------------------------------------------------------
scwin.f_delMainMain = async function () {
  if (ds_mainMain.getTotalRow() == 0) {
    await $c.win.alert($p, "삭제할 대상이 없습니다.");
    return;
  }
  if (ds_mainMain.getRowPosition() < 0) {
    await $c.win.alert($p, "삭제할 대상을 선택해 주십시요.");
    return;
  }
  if (!scwin.f_isNotSend(scwin.f_getMaxProcCls())) {
    await $c.win.alert($p, "처리구분이 미전송인 경우만 삭제할 수 있습니다.");
    return;
  }
  ds_mainMain.deleteRow(ds_mainMain.getRowPosition());
  scwin.f_toggleObj(scwin.f_canAddMainMain(), [btn_addMainMain]);
  scwin.f_toggleObj(scwin.f_canDelMainMain(), [btn_delMainMain]);
  scwin.f_toggleObj(false, [btn_send]);
};

//-------------------------------------------------------------------------
// 이전 정정차수의 자료로부터 정정내역 생성
//-------------------------------------------------------------------------
scwin.f_copyMainMainFromPrev = function (mainMainSeq) {
  if (mainMainSeq == 0) return;
  var mainMainCls = scwin.f_getMaxMainMainCls();
  var commonColumns = ["declarDt", "declarSeq", "declarAdmitClsCd", "declarNo", "declarNoSeq", "declarCstmCd", "declarSecCd"];
  var sourceColumns = commonColumns.concat(["bfArvBondZoneCd", "bfArvBondZoneNm"]);
  var targetColumns = sourceColumns;
  ds_mainMain.InsertRow(1);
  var targetRow = ds_mainMain.getRowPosition();
  var sourceRow = ds_mainMain.getCellData("mainMainSeq", mainMainSeq);
  scwin.f_copyDataRow(ds_mainMain, ds_mainMain, sourceRow, targetRow, sourceColumns, targetColumns);
  scwin.f_setAfterMainMainCopy(ds_mainMain, mainMainSeq, targetRow);
};

//-------------------------------------------------------------------------
// 원 신고로부터 정정내역을 생성
//-------------------------------------------------------------------------
scwin.f_copyMainMainFromOrg = function (mainMainSeq) {
  if (mainMainSeq > 0) return;
  var mainMainCls = scwin.f_getMaxMainMainCls();
  var sourceRow = scwin.f_getMaxRow() || 0;
  var commonColumns = ["declarDt", "declarSeq", "declarAdmitClsCd", "declarNo", "declarNoSeq", "declarCstmCd", "declarSecCd"];
  var sourceColumns = commonColumns.concat(["arvBondZoneCd", "arvBondZoneNm"]);
  var targetColumns = commonColumns.concat(["bfArvBondZoneCd", "bfArvBondZoneNm"]);
  ds_mainMain.insertRow();
  gr_mainMain.setFocusedCell(0, 0);
  var targetRow = ds_mainMain.getRowPosition();
  scwin.f_copyDataRow(ds_master, ds_mainMain, sourceRow, targetRow, sourceColumns, targetColumns);
  scwin.f_setAfterMainMainCopy(ds_mainMain, mainMainSeq, targetRow);
};

//-------------------------------------------------------------------------
// 정정 내역을 추가할 때 이전 정정차수로부터 복사한 후 나머지정보 설정
//-------------------------------------------------------------------------
scwin.f_setAfterMainMainCopy = function (dataSet, mainMainSeq, targetRow) {
  dataSet.setCellData(targetRow, "mainMainSeq", mainMainSeq + 1);
  dataSet.setCellData(targetRow, "procClsCd", scwin.PROC_CLS_NOT_SEND);
  dataSet.setCellData(targetRow, "mainMainDeclarDt", scwin.SYSTEM_DATE);
  dataSet.setCellData(targetRow, "ediTrgtYn", "0"); //<%=DGlobalValue.FALSE%>

  ds_arrive.initRowStatus();
};

//-------------------------------------------------------------------------
// 데이터셋의 행을 추가하고 RowPosition을 반환
//-------------------------------------------------------------------------
scwin.f_addDataRow = function (dataSet) {
  return dataSet.insertRow();
};

//-------------------------------------------------------------------------
// 데이터셋 Row 복사
//-------------------------------------------------------------------------
scwin.f_copyDataRow = async function (sourceDataset, targetDataset, sourceRow, targetRow, sourceColumns, targetColumns, actionAfterRowAdded) {
  try {
    if (sourceDataset == null) throw "원본 데이터셋이 정의되지 않았습니다.";
    if (targetDataset == null) throw "대상 데이터셋이 정의되지 않았습니다.";
    if (sourceColumns == null) sourceColumns = scwin.f_getColumnNames(sourceDataset);
    if (targetColumns == null) targetColumns = sourceColumns;
    if (sourceRow == null) sourceRow = sourceDataset.getRowPosition();
    if (targetRow == null) targetRow = scwin.f_addDataRow(targetDataset);
    for (var i = 0; i < sourceColumns.length; i++) {
      if ($c.gus.cfIsNull($p, sourceColumns[i]) || $c.gus.cfIsNull($p, targetColumns[i])) continue;
      targetDataset.setCellData(targetRow, targetColumns[i], sourceDataset.getCellData(sourceRow, sourceColumns[i]));

      // console.log(targetColumns[i] + " : " + sourceColumns[i] + " : " + sourceDataset.getCellData(sourceRow, sourceColumns[i]));

      if (actionAfterRowAdded != null) eval(actionAfterRowAdded);
    }
    return targetRow;
  } catch (e) {
    await $c.win.alert($p, "[f_CopyDataRow]" + e);
  }
};

//-------------------------------------------------------------------------
// 데이터셋의 모든 컬럼명을 배열로 반환
//-------------------------------------------------------------------------
scwin.f_getColumnNames = async function (dataSet) {
  try {
    if (dataSet == null) throw "데이터셋이 정의되지 않았습니다.";
    if (dataSet.getTotalCol() == 0) return null;
    var rtnArray = new Array(dataSet.getTotalCol());
    for (var i = 0; i < dataSet.getTotalCol(); i++) {
      rtnArray[i] = dataSet.getColumnID(i + 1);
    }
    if (rtnArray.length == 0) return null;else return rtnArray;
  } catch (e) {
    await $c.win.alert($p, "[f_GetColumnNames] " + e.Description);
  }
};

//-------------------------------------------------------------------------
// 정정신고인 경우 정정 구분에 따라 필요한 정보만 저장되도록 설정
//-------------------------------------------------------------------------
scwin.f_prepareMainMainPost = function () {
  if (!scwin.f_existMainMain()) return;
  var maxRow = scwin.f_getMaxRow();
  var maxSeq = scwin.f_getMaxSeq();
  var mainMainCls = scwin.f_getMaxMainMainCls();
  if (!scwin.f_isNotSend(scwin.f_getMaxProcCls())) return;
  ds_mainMain.setCellData(maxRow, "mrn", ds_arrive.getCellData(ds_arrive.getRowPosition(), "mrn"));
  ds_mainMain.setCellData(maxRow, "msn", ds_arrive.getCellData(ds_arrive.getRowPosition(), "msn"));
  ds_mainMain.setCellData(maxRow, "hsn", ds_arrive.getCellData(ds_arrive.getRowPosition(), "hsn"));
  if (scwin.f_isArrive(mainMainCls)) {
    ds_mainMain.setCellData(maxRow, "bfDeclarPrd", ds_mainMain.getCellData(maxRow, "bfDeclarPrd_02"));
    ds_mainMain.setCellData(maxRow, "afDeclarPrd", ds_mainMain.getCellData(maxRow, "afDeclarPrd_02"));
    ds_mainMain.setCellData(maxRow, "ediTrgtYn", "1");
  } else if (scwin.f_isTransPrd(mainMainCls)) {
    ds_mainMain.setCellData(maxRow, "bfDeclarPrd", ds_mainMain.getCellData(maxRow, "bfDeclarPrd_01"));
    ds_mainMain.setCellData(maxRow, "afDeclarPrd", ds_mainMain.getCellData(maxRow, "afDeclarPrd_01"));
    ds_mainMain.setCellData(maxRow, "afArvBondZoneCd", "");
    ds_mainMain.setCellData(maxRow, "ediTrgtYn", "0");
  } else {
    ds_mainMain.setCellData(maxRow, "afArvBondZoneCd", "");
    ds_mainMain.setCellData(maxRow, "ediTrgtYn", "0");
  }
};

//-------------------------------------------------------------------------
// Array 여부를 반환
//-------------------------------------------------------------------------
scwin.f_isArray = function (inObj) {
  return inObj instanceof Array;
};

//-------------------------------------------------------------------------
// 코드와 Hidden 값이 같은 지 여부를 반환
//-------------------------------------------------------------------------
scwin.f_checkHidVal = async function (inObj) {
  var objName = "";
  if (scwin.f_isArray(inObj)) {
    for (var i = 0; i < inObj.length; i++) {
      if ((await scwin.f_checkHidVal(inObj[i])) == false) return false;
    }
  } else {
    // console.log(inObj.getValue() + " : " + inObj.options.validExp);
    if (!$c.gus.cfIsNull($p, inObj.validExp)) objName = inObj.validExp.split(":")[0]; //advancedSplit(":", "i"))[0];
    else if (!$c.gus.cfIsNull($p, inObj.options.validExp)) objName = inObj.options.validExp.split(":")[0]; //advancedSplit(":", "i"))[0];
    else objName = "코드";
    if ($c.gus.cfIsNull($p, $c.gus.cfGetValue($p, inObj))) return true;
    if ($c.gus.cfGetValue($p, inObj) != $c.gus.cfGetHiddenValue($p, inObj)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, [objName]);
      inObj.focus();
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 공통 팝업 호출
//-------------------------------------------------------------------------
scwin.popupCheck = {};
scwin.f_openCommonPopUp = async function (disGubun, e) {
  if (typeof scwin.popupCheck[`popup_${disGubun}`] != "undefined" && scwin.popupCheck[`popup_${disGubun}`] == true) {
    window.setTimeout(() => {
      scwin.popupCheck[`popup_${disGubun}`] = false;
    }, 200);
    return;
  }
  scwin.popupCheck[`popup_${disGubun}`] = true;
  let rtnList;
  let objArray;
  switch (disGubun) {
    case 1:
      //화주상호

      var codeObj = ed_clntNo;
      var nameObj = ed_mchtNmCmpy;
      var paramArray = new Object();
      paramArray.pCode = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, codeObj)) ? "" : $c.gus.cfGetValue($p, codeObj);
      paramArray.pName = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, nameObj)) ? "" : $c.gus.cfGetValue($p, nameObj);
      paramArray.pWinCloseTF = scwin.f_eventCheck(e);
      paramArray.pAllSearchTF = 'F';
      rtnList = await udc_clntNo.cfCommonPopUpAsync(await function (rtnList) {
        return rtnList;
      }, paramArray.pCode, paramArray.pName, paramArray.pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
      $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_mchtNmCmpy, [ed_mchtBusiNo, ed_mchtNm, ed_mchtAddr1, ed_mchtAddr2]);
      break;
    case 2:
      //사업자등록번호
      var codeObj = ed_mchtBusiNo;
      var nameObj = ed_mchtNmCmpy;
      var paramArray = new Object();
      paramArray.pCode = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, codeObj)) ? "" : $c.gus.cfGetValue($p, codeObj);
      paramArray.pWinCloseTF = scwin.f_eventCheck(e);
      paramArray.pAllSearchTF = 'F';
      if (paramArray.pWinCloseTF == 'T' && scwin.f_canOpenPopup(codeObj, nameObj) == false) {
        return;
      }
      rtnList = await udc_mchtBusiNo.cfCommonPopUpAsync(await function (rtnList) {
        return rtnList;
      }, paramArray.pCode, paramArray.pName, paramArray.pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
      $c.gus.cfSetReturnValue($p, rtnList, ed_mchtBusiNo, ed_mchtNmCmpy, [ed_clntNo, ed_mchtNm, ed_mchtAddr1, ed_mchtAddr2]);
      break;
    case 3:
      //신청사유
      var codeObj = ed_appRsnCd;
      var nameObj = ed_appRsn;
      var paramArray = new Object();
      paramArray.pCode = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, codeObj)) ? "" : $c.gus.cfGetValue($p, codeObj);
      paramArray.pName = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, nameObj)) ? "" : $c.gus.cfGetValue($p, nameObj);
      paramArray.pWinCloseTF = scwin.f_eventCheck(e);
      paramArray.pAllSearchTF = 'T';
      rtnList = await udc_appRsnCd.cfCommonPopUpAsync(await function (rtnList) {
        return rtnList;
      }, paramArray.pCode, paramArray.pName, paramArray.pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
      $c.gus.cfSetReturnValue($p, rtnList, ed_appRsnCd, ed_appRsn);
      break;
    case 4:
      //발송지
      var codeObj = ed_sendBondZoneCd;
      var nameObj = ed_sendBondZoneNm;
      var paramArray = new Object();
      paramArray.pCode = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, codeObj)) ? "" : $c.gus.cfGetValue($p, codeObj);
      paramArray.pName = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, nameObj)) ? "" : $c.gus.cfGetValue($p, nameObj);
      paramArray.pWinCloseTF = scwin.f_eventCheck(e);
      paramArray.pAllSearchTF = 'F';
      // scwin.callBackSendZone
      rtnList = await udc_sendBondZoneCd.cfCommonPopUpAsync(await function (rtnList) {
        return rtnList;
      }, paramArray.pCode, paramArray.pName, paramArray.pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
      $c.gus.cfSetReturnValue($p, rtnList, ed_sendBondZoneCd, ed_sendBondZoneNm);
      if (rtnList != null && rtnList[0] != "N/A") {
        await scwin.f_resetCustom(rtnList[0].substring(0, 3));
      }

      //신고과 자동셋팅
      if (rtnList[0] == "03012312" || rtnList[0] == "03012226" || rtnList[0] == "03077016" || rtnList[0] == "03012240" || rtnList[0] == "03012343" || rtnList[0] == "03086311" || rtnList[0] == "03077083" || rtnList[0] == "02010014" || rtnList[0] == "02077010" || rtnList[0] == "02010621" || rtnList[0] == "02010043" || rtnList[0] == "02019701" || rtnList[0] == "02010010" || rtnList[0] == "02010039" || rtnList[0] == "02010028" || rtnList[0] == "02070001" || rtnList[0] == "02012007" || rtnList[0] == "02077002" || rtnList[0] == "03012010") {
        ed_declarSecCd.setValue("D8");
      } else if (rtnList[0] == "02012016" || rtnList[0] == "02012014") {
        ed_declarSecCd.setValue("09");
      } else {
        ed_declarSecCd.setValue("D1");
      }
      await scwin.f_openCommonPopUp(8, e);
      break;
    case 5:
      //경유지
      var codeObj = ed_viaBondZoneCd;
      var nameObj = ed_viaBondZoneNm;
      var paramArray = new Object();
      paramArray.pCode = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, codeObj)) ? "" : $c.gus.cfGetValue($p, codeObj);
      paramArray.pName = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, nameObj)) ? "" : $c.gus.cfGetValue($p, nameObj);
      paramArray.pWinCloseTF = scwin.f_eventCheck(e);
      paramArray.pAllSearchTF = 'F';
      rtnList = await udc_viaBondZoneCd.cfCommonPopUpAsync(await function (rtnList) {
        return rtnList;
      }, paramArray.pCode, paramArray.pName, paramArray.pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
      $c.gus.cfSetReturnValue($p, rtnList, ed_viaBondZoneCd, ed_viaBondZoneNm);
      break;
    case 6:
      //도착지
      var codeObj = ed_arvBondZoneCd;
      var nameObj = ed_arvBondZoneNm;
      var paramArray = new Object();
      paramArray.pCode = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, codeObj)) ? "" : $c.gus.cfGetValue($p, codeObj);
      paramArray.pName = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, nameObj)) ? "" : $c.gus.cfGetValue($p, nameObj);
      paramArray.pWinCloseTF = scwin.f_eventCheck(e);
      paramArray.pAllSearchTF = 'F';
      rtnList = await udc_arvBondZoneCd.cfCommonPopUpAsync(await function (rtnList) {
        return rtnList;
      }, paramArray.pCode, paramArray.pName, paramArray.pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
      $c.gus.cfSetReturnValue($p, rtnList, ed_arvBondZoneCd, ed_arvBondZoneNm);
      break;
    case 7:
      //신고세관
      var codeObj = ed_declarCstmCd;
      var nameObj = ed_declarCstmNm;
      var paramArray = new Object();
      paramArray.pCode = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, codeObj)) ? "" : $c.gus.cfGetValue($p, codeObj);
      paramArray.pName = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, nameObj)) ? "" : $c.gus.cfGetValue($p, nameObj);
      paramArray.pWinCloseTF = scwin.f_eventCheck(e);
      paramArray.pAllSearchTF = 'T';
      rtnList = await udc_declarCstmCd.cfCommonPopUpAsync(await function (rtnList) {
        return rtnList;
      }, paramArray.pCode, paramArray.pName, paramArray.pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
      $c.gus.cfSetReturnValue($p, rtnList, ed_declarCstmCd, ed_declarCstmNm);
      break;
    case 8:
      //신고과
      var codeObj = ed_declarSecCd;
      var nameObj = ed_declarSecNm;
      var paramArray = new Object();
      paramArray.pCode = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, codeObj)) ? "" : $c.gus.cfGetValue($p, codeObj);
      paramArray.pName = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, nameObj)) ? "" : $c.gus.cfGetValue($p, nameObj);
      paramArray.pWinCloseTF = scwin.f_eventCheck(e);
      paramArray.pAllSearchTF = 'T';
      rtnList = await udc_declarSecCd.cfCommonPopUpAsync(await function (rtnList) {
        return rtnList;
      }, paramArray.pCode, paramArray.pName, paramArray.pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
      $c.gus.cfSetReturnValue($p, rtnList, ed_declarSecCd, ed_declarSecNm);
      // $c.gus.cfSetReturnValue  에서 아래 부분 삭제 되어 여기서 추가
      if (rtnList != null && rtnList[0] == "N/A") {
        $c.gus.cfSetValue($p, ed_declarSecCd, $c.gus.cfGetHiddenValue($p, ed_declarSecCd));
        $c.gus.cfSetValue($p, ed_declarSecNm, $c.gus.cfGetHiddenValue($p, ed_declarSecNm));
      }
      break;
    case 9:
      //배차담당자
      var codeObj = ed_alloccarPicId;
      var nameObj = ed_alloccarPicNm;
      var paramArray = new Object();
      paramArray.pCode = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, codeObj)) ? "" : $c.gus.cfGetValue($p, codeObj);
      paramArray.pName = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, nameObj)) ? "" : $c.gus.cfGetValue($p, nameObj);
      paramArray.pWinCloseTF = 'T';
      paramArray.pWhere = "0";
      paramArray.pAllSearchTF = 'T';
      rtnList = await udc_alloccarPicId.cfCommonPopUpAsync(await function (rtnList) {
        return rtnList;
      }, paramArray.pCode, paramArray.pName, paramArray.pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
      $c.gus.cfSetReturnValue($p, rtnList, ed_alloccarPicId, ed_alloccarPicNm);
      break;
    case 10:
      //HSN

      var codeObj = ed_mrn;
      var nameObj = ed_msn;
      objArray = [ed_hsn, ed_mblNo, ed_hblNo, ed_commNm, lc_packUnitCd, ed_packCnt, ed_totWt];
      var paramArray = new Object();
      paramArray.pCode = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, codeObj)) ? "" : $c.gus.cfGetValue($p, codeObj);
      paramArray.pName = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, nameObj)) ? "" : $c.gus.cfGetValue($p, nameObj);
      paramArray.pWinCloseTF = scwin.f_eventCheck(e);
      paramArray.pAllSearchTF = 'F';
      if (paramArray.pWinCloseTF == 'T') {
        if (!scwin.f_canOpenPopup(codeObj, nameObj)) {
          if ($c.gus.cfIsNull($p, $c.gus.cfGetValue($p, codeObj)) || $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, nameObj))) {
            scwin.f_clearObj(objArray);
          }
          return;
        }
      }
      rtnList = await udc_hsn.cfCommonPopUpAsync(await function (rtnList) {
        return rtnList;
      }, paramArray.pCode, paramArray.pName, paramArray.pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
      console.log("scwin.callBackTransBLInfo : " + rtnList);
      $c.gus.cfSetReturnValue($p, rtnList, ed_mrn, ed_msn, objArray);
      if (rtnList != null && rtnList[0] != "N/A") {
        for (var i = 2; i < 9; i++) {
          scwin.f_setValueEx(objArray[i - 2], rtnList[i]);
        }
        if (!$c.gus.cfIsNull($p, rtnList[9])) await scwin.f_resetBondZone(rtnList[9]); //발송지 설정
        await scwin.f_resetContainer(); //컨테이너 설정
      }
      break;
    case 11:
      //M B/L
      var codeObj = ed_mblNo;
      var nameObj = ed_hblNo;
      objArray = [ed_mrn, ed_msn, ed_hsn, ed_commNm, lc_packUnitCd, ed_packCnt, ed_totWt];
      var paramArray = new Object();
      paramArray.pCode = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, codeObj)) ? "" : $c.gus.cfGetValue($p, codeObj);
      paramArray.pName = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, nameObj)) ? "" : $c.gus.cfGetValue($p, nameObj);
      paramArray.pWinCloseTF = scwin.f_eventCheck(e);
      paramArray.pAllSearchTF = 'F';
      if (paramArray.pWinCloseTF == 'T') {
        if (!scwin.f_canOpenPopup(codeObj, nameObj)) {
          if ($c.gus.cfIsNull($p, $c.gus.cfGetValue($p, codeObj)) || $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, nameObj))) {
            scwin.f_clearObj(objArray);
          }
          return;
        }
      }
      rtnList = await udc_mblNo.cfCommonPopUpAsync(await function (rtnList) {
        return rtnList;
      }, paramArray.pCode, paramArray.pName, paramArray.pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
      console.log("scwin.callBackTransBLInfo2M");
      $c.gus.cfSetReturnValue($p, rtnList, ed_mblNo, ed_hblNo, objArray);
      if (rtnList != null && rtnList[0] != "N/A") {
        //결과를 Objects에 설정(보세구역코드는 제외)
        for (var i = 2; i < 9; i++) {
          scwin.f_setValueEx(objArray[i - 2], rtnList[i]);
        }
        //발송지 설정
        if (!$c.gus.cfIsNull($p, rtnList[9])) await scwin.f_resetBondZone(rtnList[9]);

        //컨테이너 목록을 설정
        await scwin.f_resetContainer();
      }
      break;
    case 12:
      //H B/L
      var codeObj = ed_mblNo;
      var nameObj = ed_hblNo;
      objArray = [ed_mrn, ed_msn, ed_hsn, ed_commNm, lc_packUnitCd, ed_packCnt, ed_totWt];
      var paramArray = new Object();
      paramArray.pCode = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, codeObj)) ? "" : $c.gus.cfGetValue($p, codeObj);
      paramArray.pName = $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, nameObj)) ? "" : $c.gus.cfGetValue($p, nameObj);
      paramArray.pWinCloseTF = scwin.f_eventCheck(e);
      paramArray.pAllSearchTF = 'F';
      if (paramArray.pWinCloseTF == 'T') {
        if (!scwin.f_canOpenPopup(codeObj, nameObj)) {
          if ($c.gus.cfIsNull($p, $c.gus.cfGetValue($p, codeObj)) || $c.gus.cfIsNull($p, $c.gus.cfGetValue($p, nameObj))) {
            scwin.f_clearObj(objArray);
          }
          return;
        }
      }
      rtnList = await udc_hblNo.cfCommonPopUpAsync(await function (rtnList) {
        return rtnList;
      }, paramArray.pCode, paramArray.pName, paramArray.pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
      console.log("scwin.callBackTransBLInfo2H");

      // console.log(rtnList);
      let row = ds_arrive.getRowPosition();

      //값 설정
      $c.gus.cfSetReturnValue($p, rtnList, ed_mblNo, ed_hblNo, objArray);
      if (rtnList != null && rtnList[0] != "N/A") {
        //결과를 Objects에 설정(보세구역코드는 제외)
        for (var i = 2; i < 9; i++) {
          scwin.f_setValueEx(objArray[i - 2], rtnList[i]);
        }
        //발송지 설정
        if (!$c.gus.cfIsNull($p, rtnList[9])) await scwin.f_resetBondZone(rtnList[9]);

        //컨테이너 목록을 설정
        await scwin.f_resetContainer();
      }
      break;
    default:
      break;
  }
  scwin.popupCheck[`popup_${disGubun}`] = false;
};

//-------------------------------------------------------------------------
// 공통 팝업 호출 callBack
//-------------------------------------------------------------------------
//화주상호
scwin.callBackClntCrn = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_mchtNmCmpy, [ed_mchtBusiNo, ed_mchtNm, ed_mchtAddr1, ed_mchtAddr2]);
};

//사업자등록번호
scwin.callBackCrnClnt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_mchtBusiNo, ed_mchtNmCmpy, [ed_clntNo, ed_mchtNm, ed_mchtAddr1, ed_mchtAddr2]);
};

//신청사유
scwin.callBackReason = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_appRsnCd, ed_appRsn);
};

// 발송지
// event가 없어서 async 으로 변경 삭제 요망 
scwin.callBackSendZone = async function (rtnList, e) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_sendBondZoneCd, ed_sendBondZoneNm);
  if (rtnList != null && rtnList[0] != "N/A") {
    await scwin.f_resetCustom(rtnList[0].substring(0, 3));
    //신고과 자동셋팅
    if (rtnList[0] == "03012312" || rtnList[0] == "03012226" || rtnList[0] == "03077016" || rtnList[0] == "03012240" || rtnList[0] == "03012343" || rtnList[0] == "03086311" || rtnList[0] == "03077083" || rtnList[0] == "02010014" || rtnList[0] == "02077010" || rtnList[0] == "02010621" || rtnList[0] == "02010043" || rtnList[0] == "02019701" || rtnList[0] == "02010010" || rtnList[0] == "02010039" || rtnList[0] == "02010028" || rtnList[0] == "02070001" || rtnList[0] == "02012007" || rtnList[0] == "02077002" || rtnList[0] == "03012010") {
      ed_declarSecCd.setValue("D8");
    } else if (rtnList[0] == "02012016" || rtnList[0] == "02012014") {
      ed_declarSecCd.setValue("09");
    } else {
      ed_declarSecCd.setValue("D1");
    }
    scwin.f_openCommonPopUp(8, e);
  }
};

//경유지
scwin.callBackViaZone = function (rtnList) {
  console.log("scwin.callBackViaZone");
  $c.gus.cfSetReturnValue($p, rtnList, ed_viaBondZoneCd, ed_viaBondZoneNm);
};

//도착지
scwin.callBackArvZone = function (rtnList) {
  console.log("scwin.callBackArvZone");
  $c.gus.cfSetReturnValue($p, rtnList, ed_arvBondZoneCd, ed_arvBondZoneNm);
};

//신고세관
scwin.callBackCustom = function (rtnList) {
  console.log("scwin.callBackCustom");
  $c.gus.cfSetReturnValue($p, rtnList, ed_declarCstmCd, ed_declarCstmNm);
};

//신고과
scwin.callBackCustomSection = function (rtnList) {
  console.log("scwin.callBackCustomSection");
  $c.gus.cfSetReturnValue($p, rtnList, ed_declarSecCd, ed_declarSecNm);
  // $c.gus.cfSetReturnValue  에서 아래 부분 삭제 되어 여기서 추가
  if (rtnList != null && rtnList[0] == "N/A") {
    $c.gus.cfSetValue($p, ed_declarSecCd, $c.gus.cfGetHiddenValue($p, ed_declarSecCd));
    $c.gus.cfSetValue($p, ed_declarSecNm, $c.gus.cfGetHiddenValue($p, ed_declarSecNm));
  }
};

//배차담당자
scwin.callBackUserEmp = function (rtnList) {
  console.log("scwin.callBackUserEmp");
  $c.gus.cfSetReturnValue($p, rtnList, ed_alloccarPicId, ed_alloccarPicNm);
};

//HSN, M B/L
scwin.callBackTransBLInfo = async function (rtnList) {
  console.log("scwin.callBackTransBLInfo : " + rtnList);
  var objArray = [ed_hsn, ed_mblNo, ed_hblNo, ed_commNm, lc_packUnitCd, ed_packCnt, ed_totWt];
  $c.gus.cfSetReturnValue($p, rtnList, ed_mrn, ed_msn, objArray);
  if (rtnList != null && rtnList[0] != "N/A") {
    //결과를 Objects에 설정(보세구역코드는 제외)
    for (var i = 2; i < 9; i++) {
      // console.log(i + " : " + objArray[i-2].getID() + " : " + rtnList[i]);
      scwin.f_setValueEx(objArray[i - 2], rtnList[i]);
    }
    if (!$c.gus.cfIsNull($p, rtnList[9])) await scwin.f_resetBondZone(rtnList[9]); //발송지 설정
    scwin.f_resetContainer(); //컨테이너 설정
  }
};

//M B/L
scwin.callBackTransBLInfo2M = async function (rtnList) {
  console.log("scwin.callBackTransBLInfo2M");
  var objArray = [ed_mrn, ed_msn, ed_hsn, ed_commNm, lc_packUnitCd, ed_packCnt, ed_totWt];
  $c.gus.cfSetReturnValue($p, rtnList, ed_mblNo, ed_hblNo, objArray);
  if (rtnList != null && rtnList[0] != "N/A") {
    //결과를 Objects에 설정(보세구역코드는 제외)
    for (var i = 2; i < 9; i++) {
      scwin.f_setValueEx(objArray[i - 2], rtnList[i]);
    }
    //발송지 설정
    if (!$c.gus.cfIsNull($p, rtnList[9])) await scwin.f_resetBondZone(rtnList[9]);

    //컨테이너 목록을 설정
    scwin.f_resetContainer();
  }
};

//H B/L
scwin.callBackTransBLInfo2H = async function (rtnList) {
  console.log("scwin.callBackTransBLInfo2H");
  // console.log(rtnList);
  var objArray = [ed_mrn, ed_msn, ed_hsn, ed_commNm, lc_packUnitCd, ed_packCnt, ed_totWt];
  let row = ds_arrive.getRowPosition();

  //값 설정
  $c.gus.cfSetReturnValue($p, rtnList, ed_mblNo, ed_hblNo, objArray);
  if (rtnList != null && rtnList[0] != "N/A") {
    //결과를 Objects에 설정(보세구역코드는 제외)
    for (var i = 2; i < 9; i++) {
      scwin.f_setValueEx(objArray[i - 2], rtnList[i]);
    }
    //발송지 설정
    if (!$c.gus.cfIsNull($p, rtnList[9])) await scwin.f_resetBondZone(rtnList[9]);

    //컨테이너 목록을 설정
    scwin.f_resetContainer();
  }
};

//-------------------------------------------------------------------------
// 조회 체크 팝업
//-------------------------------------------------------------------------
scwin.f_srchPrePopUp = function () {
  var codeObj = ed_srchMblNo;
  var nameObj = ed_srchHblNo;
  var paramArray = new Object();
  //paramArray.pSelectID = "retrieveBondedTransInfoByBL";
  paramArray.pCode = $c.gus.cfGetValue($p, codeObj);
  paramArray.pName = $c.gus.cfGetValue($p, nameObj);
  paramArray.pWinCloseTF = 'T';
  paramArray.pWhere = "1";
  paramArray.pW = '850';
  paramArray.pAllSearchTF = 'T';
  udc_comCode.cfCommonPopUp(scwin.callBackInfoByBL, paramArray.pCode, paramArray.pName, paramArray.pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
};

//-------------------------------------------------------------------------
// 조회 체크 팝업 호출 callBack
//-------------------------------------------------------------------------
scwin.callBackInfoByBL = async function (rtnList) {
  if (rtnList == null || rtnList[0] == "N/A") {
    await $c.win.alert($p, "조회 대상이 없거나 선택하지 않았습니다.");
    return false;
  }
  $c.gus.cfSetValue($p, ed_srchMblNo, rtnList[0]);
  $c.gus.cfSetValue($p, ed_srchHblNo, rtnList[1]);
  $c.gus.cfSetValue($p, ica_srchDeclarDt, rtnList[2]);
  $c.gus.cfSetValue($p, ed_srchDeclarSeq, rtnList[3]);
  $c.gus.cfSetValue($p, ed_srchDeclarNo, rtnList[4]);
};

//-------------------------------------------------------------------------
// 행추가 
//-------------------------------------------------------------------------
scwin.f_addRow = async function () {
  if (ds_cntr.getTotalRow() == 0) {
    await $c.win.alert($p, '화물정보 입력 후 행추가 하실수 있습니다.');
    return;
  }
  ds_cntr.insertRow();
  ds_cntr.setCellData(ds_cntr.getRowPosition(), "mrn", ds_cntr.getCellData(ds_cntr.getRowPosition() - 1, "mrn"));
  ds_cntr.setCellData(ds_cntr.getRowPosition(), "msn", ds_cntr.getCellData(ds_cntr.getRowPosition() - 1, "msn"));
  ds_cntr.setCellData(ds_cntr.getRowPosition(), "hsn", ds_cntr.getCellData(ds_cntr.getRowPosition() - 1, "hsn"));
  ds_cntr.setCellData(ds_cntr.getRowPosition(), "cntrSeq", 0);
  ds_cntr.setCellData(ds_cntr.getRowPosition(), "hblNo", ds_cntr.getCellData(ds_cntr.getRowPosition() - 1, "hblNo"));
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_delRow = function () {
  ds_cntr.deleteRow(ds_cntr.getRowPosition());
};

//-------------------------------------------------------------------------
// emobject, input text의 hidVal 까지 초기화 (Object Array 일 경우 각각을 초기화)
//-------------------------------------------------------------------------
scwin.f_clearObj = function (inObj) {
  if (inObj == null) return;
  if (scwin.f_isArray(inObj)) {
    for (var i = 0; i < inObj.length; i++) {
      scwin.f_clearObj(inObj[i]);
    }
  } else {
    $c.gus.cfSetValue($p, inObj, "");
    $c.gus.cfSetHiddenValue($p, inObj, "");
  }
};

//-------------------------------------------------------------------------
// emobject, input text의 hidVal 까지 초기화
//-------------------------------------------------------------------------
scwin.f_clearObjArray = function (inObj) {
  if (inObj == null) return;
  $c.gus.cfSetValue($p, inObj, "");
  $c.gus.cfSetHiddenValue($p, inObj, "");
};

//-------------------------------------------------------------------------
// 감정가격조건 조회
//-------------------------------------------------------------------------
scwin.f_resetJdgCond = async function () {
  const ebcOption = [{
    sysCd: "CommonEBC",
    queryId: "retrieveEdiMapping",
    param4: "JUDGMENT",
    dsName: "ds_jdgCond",
    url: "/cm.zz.RetrieveCommonPopupCMD.do"
  }];
  await scwin.f_srchEBC(ebcOption);
};

//-------------------------------------------------------------------------
// 팝업 이벤트에 따라 팝업창의 자동닫기 여부를 반환
//-------------------------------------------------------------------------
scwin.f_eventCheck = function (e) {
  if (e == null) return 'F';

  //var tagName = window.event.srcElement.tagName.toUpperCase();
  //tagName == "IMG" || tagName == "A")
  if (e.target.type == "button") return 'F';else return 'T';
};

//-------------------------------------------------------------------------
// 팝업 여부 체크
//-------------------------------------------------------------------------
scwin.f_canOpenPopup = function (codeObj, nameObj) {
  // if (scwin.f_eventCheck() == 'F') return true;

  return $c.gus.cfCanOpenPopup($p, codeObj, nameObj);
};

//-------------------------------------------------------------------------
// Object enable/disbale
//-------------------------------------------------------------------------
scwin.f_toggleObj = function (mode, obj) {
  if ($c.gus.cfIsNull($p, obj)) return;
  if (scwin.f_isArray(obj)) {
    mode == true ? $c.gus.cfEnableObjects($p, obj) : $c.gus.cfDisableObjects($p, obj);
  } else {
    mode == true ? $c.gus.cfEnableObjects($p, obj) : $c.gus.cfDisableObjects($p, obj);
    if (obj.tagName != null && obj.tagName.toUpperCase() == "TABLE") {
      scwin.f_toggleImg(mode, obj);
    }
  }
};

//-------------------------------------------------------------------------
// 이미지 enable/disbale
//-------------------------------------------------------------------------
scwin.f_toggleImg = function (mode, obj) {
  if ($c.gus.cfIsNull($p, obj)) return;
  // console.log("scwin.f_toggleImg : " + mode);

  if (scwin.f_isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      scwin.f_toggleImg(mode, obj[i]);
    }
  } else {
    if (obj.tagName == null) return;
    var objType = obj.tagName.toUpperCase();
    if (objType == "IMG") {
      scwin.f_toggleObj(mode, obj);
    } else if (objType == "TABLE") {
      for (var i = 0; i < obj.all.length; i++) {
        scwin.f_toggleImg(mode, obj[i]);
      }
    }
  }
};

//-------------------------------------------------------------------------
// B/L 컨테이너 데이터셋을 Reset
//-------------------------------------------------------------------------
scwin.f_resetContainer = async function () {
  var row = ds_arrive.getRowPosition();
  ds_cntr.removeAll();
  dma_searchEBC.set("sysCd", "CommonEBC");
  dma_searchEBC.set("queryId", "retrieveBLContainerInfo");
  dma_searchEBC.set("param1", "");
  dma_searchEBC.set("param2", ds_arrive.getCellData(row, "mrn"));
  dma_searchEBC.set("param3", ds_arrive.getCellData(row, "msn"));
  dma_searchEBC.set("param4", ds_arrive.getCellData(row, "hsn"));
  let ref = 'data:json,[{"id":"dma_searchEBC","key":"IN_DS1"}, {"id":"ds_cntrTemp","key":"OUT_DS1"}]';
  let target = 'data:json,[{"id":"ds_cntrTemp","key":"OUT_DS1"}]';
  let sbmOption = {
    id: "sbm_searchEBC",
    action: "/cm.zz.RetrieveCommonPopupCMD.do",
    ref: ref,
    target: target,
    isProcessMsg: false
  };
  $c.sbm.executeDynamic($p, sbmOption, dma_searchEBC.getJSON()).then(e => {
    console.log("scwin.sbm_cntrTemp_submitdone");
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    let dsName = "ds_cntrTemp";
    //dataList 동적 생성 
    const dcoptions = {
      baseNode: "list",
      repeatNode: "map",
      saveRemovedData: "true"
    };
    let dsKeys = Object.keys(e.responseJSON.GAUCE[0]);
    let dsId = [],
      dsType = [];
    for (var i = 0; i < dsKeys.length; i++) {
      dsId.push(dsKeys[i]);
      dsType.push("text");
    }
    $c.data.createDataList($p, dsName, dsId, dsType, dcoptions);
    $c.util.getComponent($p, dsName).setJSON(e.responseJSON.GAUCE);
    if (ds_cntrTemp.getTotalRow() == 0) {
      $c.win.alert($p, "B/L 컨테이너 내역이 없습니다.");
    } else {
      scwin.f_copyTempToCntr();
    }
    scwin.f_computeSummary();
  });
};
scwin.cntrTempCallBack = function (e) {
  /*console.log("scwin.sbm_cntrTemp_submitdone");
   if (e.responseJSON.resultDataSet[0].Code < 0) return; 
   
   if(ds_cntrTemp.getTotalRow() == 0) {
       $c.win.alert("B/L 컨테이너 내역이 없습니다.");
   } else {
       scwin.f_copyTempToCntr();
   }
     scwin.f_computeSummary();*/
};

//-------------------------------------------------------------------------
// 신고세관 데이터셋을 리셋
//-------------------------------------------------------------------------
scwin.f_resetCustom = async function (code) {
  const ebcOption = [{
    sysCd: "CommonEBC",
    queryId: "retrieveCustomInfo",
    param1: code,
    param2: "",
    dsName: "ds_custom",
    url: "/cm.zz.RetrieveCommonPopupCMD.do"
  }];
  await scwin.f_srchEBC(ebcOption);
};

//-------------------------------------------------------------------------
// 신고과 데이터셋을 리셋
//-------------------------------------------------------------------------
scwin.f_resetSection = async function () {
  const ebcOption = [{
    sysCd: "CommonEBC",
    queryId: "retrieveCustomSectionInfo",
    param1: "",
    param2: "",
    dsName: "ds_section",
    url: "/cm.zz.RetrieveCommonPopupCMD.do"
  }];
  await scwin.f_srchEBC(ebcOption);
};

//-------------------------------------------------------------------------
// 보세구역 데이터셋을 리셋
//-------------------------------------------------------------------------
scwin.f_resetBondZone = async function (bondZoneCd) {
  console.log("scwin.f_resetBondZone");
  const ebcOption = [{
    sysCd: "CommonEBC",
    queryId: "retrieveBondZoneRound",
    param1: bondZoneCd,
    param2: "",
    dsName: "ds_bondZone",
    url: "/cm.zz.RetrieveCommonPopupCMD.do"
  }];
  await scwin.f_srchEBC(ebcOption);
};

//-------------------------------------------------------------------------
// 컨테이너 집계 내역을 계산
//-------------------------------------------------------------------------
scwin.f_computeSummary = function () {
  console.log("scwin.f_computeSummary");
  var cntrArray = new Array();
  var cntrSizArray = new Array();
  for (var i = 0; i < ds_cntr.getTotalRow(); i++) {
    cntrArray[i] = ds_cntr.getCellData(i, "cntrNo");
    cntrSizArray[cntrArray[i]] = ds_cntr.getCellData(i, "cntrSizCd");
  }
  var sortedArray = cntrArray.sort();
  var cntrCnt = feet20 = feet40 = feet45 = 0;
  var prevCntrNo = "";
  for (var j = 0; j < sortedArray.length; j++) {
    cntrNo = sortedArray[j];
    if (!$c.gus.cfIsNull($p, cntrNo) && prevCntrNo != cntrNo) {
      cntrCnt++;
      switch (cntrSizArray[cntrNo]) {
        case "20":
          feet20++;
          break;
        case "40":
          feet40++;
          break;
        case "45":
          feet45++;
          break;
      }
      prevCntrNo = sortedArray[j];
    }
  }
  ed_20FeetCnt.setValue(feet20);
  ed_40FeetCnt.setValue(feet40);
  ed_45FeetCnt.setValue(feet45);
  ed_cntrCnt.setValue(cntrCnt);
  ed_packCntSum.setValue(ds_arrive.getCellData(0, "packCnt"));
  ed_wtSum.setValue(ds_arrive.getCellData(0, "totWt"));
};

//-------------------------------------------------------------------------
// 컨테이너 집계 내역 초기화
//-------------------------------------------------------------------------
scwin.f_clearSummary = function () {
  ed_20FeetCnt.setValue(0);
  ed_40FeetCnt.setValue(0);
  ed_45FeetCnt.setValue(0);
  ed_cntrCnt.setValue(0);
  ed_packCntSum.setValue(0);
  ed_wtSum.setValue(0);
};

//-------------------------------------------------------------------------
// 운송기한을 설정
//-------------------------------------------------------------------------
scwin.f_setTransPrd = async function () {
  let declarDt = ica_declarDt.getValue();
  if (!$c.date.isDate($p, declarDt)) return;
  if (cbx_returnYn.getValue() == "1") {
    ica_transPrd.setValue($c.date.addDate($p, declarDt, 7));
  } else {
    ica_transPrd.setValue($c.date.addDate($p, declarDt, 10));
  }
};

//-------------------------------------------------------------------------
// 편집모드가 신규 등록 상태인 지 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_isNewMode = function () {
  return scwin.gv_editMode == scwin.EDIT_MODE_NEW;
};

//-------------------------------------------------------------------------
// 편집모드가 수정 상태인 지 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_isUpdateMode = function () {
  return scwin.gv_editMode == scwin.EDIT_MODE_UPDATE;
};

//-------------------------------------------------------------------------
// 편집모드가 승인일자 입력 상태인 지 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_isMainMainMode = function () {
  return scwin.gv_editMode == scwin.EDIT_MODE_MAIN_MAIN;
};

//-------------------------------------------------------------------------
// 정정 상태인 지 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_isAdmitMode = function () {
  return scwin.gv_editMode == scwin.EDIT_MODE_ADMIT;
};

//-------------------------------------------------------------------------
// 정정 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_existMainMain = function () {
  return ds_mainMain.getTotalRow() > 0;
};

//-------------------------------------------------------------------------
// 미전송 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_isNotSend = function (procClsCd) {
  return procClsCd == SdConstants.EDI_PROC_CLS_NOT_SEND;
};

//-------------------------------------------------------------------------
// 전송오류 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_isProcErr = function (procClsCd) {
  return procClsCd == scwin.PROC_CLS_ERROR;
};

//-------------------------------------------------------------------------
// 전송 수리 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_isProcRepair = function (procClsCd) {
  return procClsCd == scwin.PROC_CLS_REPAIR;
};

//-------------------------------------------------------------------------
// 전송 승인 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_isProcOk = function (procClsCd) {
  return procClsCd == scwin.PROC_CLS_OK;
};

//-------------------------------------------------------------------------
// 전송 승인 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_isProcAccept = function (procClsCd) {
  return procClsCd == scwin.PROC_CLS_ACCEPT;
};

//-------------------------------------------------------------------------
// 정정 처리구분을 구한다.
//-------------------------------------------------------------------------
scwin.f_getMaxProcCls = function () {
  return ds_mainMain.getCellData(scwin.f_getMaxRow(), "procClsCd");
};

//-------------------------------------------------------------------------
// 정정차수 최대값을 구한다.
//-------------------------------------------------------------------------
scwin.f_getMaxSeq = function () {
  var vMainMainSeq = 0;
  for (var i = 0; i < ds_mainMain.getRowCount(); i++) {
    if (i == 0) {
      vMainMainSeq = ds_mainMain.getCellData(i, "mainMainSeq");
    } else {
      if (vMainMainSeq < ds_mainMain.getCellData(i, "mainMainSeq")) {
        vMainMainSeq = ds_mainMain.getCellData(i, "mainMainSeq");
      }
    }
  }
  return vMainMainSeq;
};

//-------------------------------------------------------------------------
// 정정차수 최대값을 구한다.
//-------------------------------------------------------------------------
scwin.f_getMaxRow = function () {
  return ds_mainMain.getMatchedIndex("mainMainSeq", scwin.f_getMaxSeq())?.at(0);
  //return ds_mainMain.NameValueRow("mainMainSeq", scwin.f_getMaxSeq());
};

//-------------------------------------------------------------------------
// 최대 정정차수의 정정구분을 구한다.
//-------------------------------------------------------------------------
scwin.f_getMaxMainMainCls = function (row) {
  return ds_mainMain.getCellData(scwin.f_getMaxRow(), "mainMainClsCd");
};

//-------------------------------------------------------------------------
// 정정 존재 여부를 반환
//-------------------------------------------------------------------------
scwin.f_existMainMain = function () {
  return ds_mainMain.getTotalRow() > 0;
};

//-------------------------------------------------------------------------
// 정정을 추가할 수 있는 지 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_canAddMainMain = function () {
  if (scwin.f_isProcAccept(lc_procClsCd.getValue()) && ds_mainMain.getTotalRow() == 0) return true;
  return scwin.f_isProcOk(scwin.f_getMaxProcCls()) && !scwin.f_isAllCancel(scwin.f_getMaxMainMainCls());
};

//-------------------------------------------------------------------------
// 정정을 삭제할 수 있는 지 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_canDelMainMain = function () {
  if (ds_mainMain.getTotalRow() == 0) return false;
  return scwin.f_isNotSend(scwin.f_getMaxProcCls());
};

//-------------------------------------------------------------------------
// 부분취하 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_isPartCancel = function (mainMainCls) {
  return mainMainCls == scwin.MAIN_MAIN_PART_CANCEL;
};

//-------------------------------------------------------------------------
// 정정구분이 전체취하인 지 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_isAllCancel = function (mainMainCls) {
  return mainMainCls == scwin.MAIN_MAIN_ALL_CANCEL;
};

//-------------------------------------------------------------------------
// 운송기한정정 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_isTransPrd = function (mainMainCls) {
  return mainMainCls == scwin.MAIN_MAIN_TRANS_PRD;
};

//-------------------------------------------------------------------------
// 도착지정정 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_isArrive = function (mainMainCls) {
  return mainMainCls == scwin.MAIN_MAIN_ARRIVE;
};

//-------------------------------------------------------------------------
// 발지운송수단여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_isArvTransCntSht = function (mainMainCls) {
  return mainMainCls == scwin.MAIN_MAIN_ARV_TRANS_CNT_SHT;
};

//-------------------------------------------------------------------------
// 경유지운송수단여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_isViaTransCntSht = function (mainMainCls) {
  return mainMainCls == scwin.MAIN_MAIN_VIA_TRANS_CNT_SHT;
};

//-------------------------------------------------------------------------
// 경유지여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_isVia = function (mainMainCls) {
  return mainMainCls == scwin.MAIN_MAIN_VIA;
};

//-------------------------------------------------------------------------
// 출발지여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_isDpt = function (mainMainCls) {
  return mainMainCls == scwin.MAIN_MAIN_DPT;
};

//-------------------------------------------------------------------------
// 담보금액여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_isPldgAmt = function (mainMainCls) {
  return mainMainCls == scwin.MAIN_MAIN_PLDG_AMT;
};

//-------------------------------------------------------------------------
// B/L 컨테이너 임시 데이터셋의 데이터를 원본 데이터셋으로 복사
//-------------------------------------------------------------------------
scwin.f_copyTempToCntr = function () {
  mrn = ds_arrive.getCellData(ds_arrive.getRowPosition(), "mrn");
  msn = ds_arrive.getCellData(ds_arrive.getRowPosition(), "msn");
  hsn = ds_arrive.getCellData(ds_arrive.getRowPosition(), "hsn");
  mblNo = ds_arrive.getCellData(ds_arrive.getRowPosition(), "mblNo");
  hblNo = ds_arrive.getCellData(ds_arrive.getRowPosition(), "hblNo");
  ds_cntr.removeAll();
  for (var i = 0; i < ds_cntrTemp.getTotalRow(); i++) {
    let insRow = ds_cntr.insertRow();
    ds_cntr.setCellData(insRow, "mrn", mrn);
    ds_cntr.setCellData(insRow, "msn", msn);
    ds_cntr.setCellData(insRow, "hsn", hsn);
    ds_cntr.setCellData(insRow, "mblNo", mblNo);
    ds_cntr.setCellData(insRow, "hblNo", hblNo);
    ds_cntr.setCellData(insRow, "cntrNo", ds_cntrTemp.getCellData(i, "col1"));
    ds_cntr.setCellData(insRow, "cntrSeq", ds_cntrTemp.getCellData(i, "col5"));
    ds_cntr.setCellData(insRow, "sealNo1", ds_cntrTemp.getCellData(i, "col6"));
    ds_cntr.setCellData(insRow, "packCnt", ds_cntrTemp.getCellData(i, "col7"));
    ds_cntr.setCellData(insRow, "wt", ds_cntrTemp.getCellData(i, "col8"));
    ds_cntr.setCellData(insRow, "cntrSizCd", ds_cntrTemp.getCellData(i, "col9"));
  }
};

//-------------------------------------------------------------------------
// 발송지를 설정한다.
//-------------------------------------------------------------------------
scwin.f_setSendBondZone = async function (bondZoneCd, bondZoneNm) {
  scwin.f_setValueEx(ed_sendBondZoneCd, bondZoneCd);
  scwin.f_setValueEx(ed_sendBondZoneNm, bondZoneNm);
  await scwin.f_resetCustom(bondZoneCd.substring(0, 3));
};

//-------------------------------------------------------------------------
// cfSetValue 확장. Object의 값과 Hidden Value를 설정한다.
//-------------------------------------------------------------------------
scwin.f_setValueEx = function (inObj, inVal) {
  console.log("scwin.f_setValueEx " + inObj.getID() + " : " + inVal);
  $c.gus.cfSetValue($p, inObj, inVal);
  $c.gus.cfSetHiddenValue($p, inObj, inVal);
};

//-------------------------------------------------------------------------
// 화물정보의 Hidden Value를 설정한다.
//-------------------------------------------------------------------------
scwin.f_setArriveObjHidVal = function (row) {
  var colArray = ["mrn", "msn", "hsn", "mblNo", "hblNo", "commNm", "", "packCnt", "totWt"];
  var objArray = [ed_mrn, ed_msn, ed_hsn, ed_mblNo, ed_hblNo, ed_commNm, "", ed_packCnt, ed_totWt];
  $c.gus.cfPrepareObjectHidVal($p, ds_arrive, row, colArray, objArray);
};

//-------------------------------------------------------------------------
// 승인정보의 Hidden Value를 설정한다.
//-------------------------------------------------------------------------
scwin.f_setMasterObjHidVal = function (row) {
  var colArray = ["clntNo", "mchtNmCmpy", "mchtBusiNo", "mchtNm", "mchtAddr1", "mchtAddr2", "appRsnCd", "appRsn", "declarCstmCd", "declarCstmNm", "declarSecCd", "declarSecNm", "sendBondZoneCd", "sendBondZoneNm", "viaBondZoneCd", "viaBondZoneNm", "arvBondZoneCd", "arvBondZoneNm"];
  var objArray = [ed_clntNo, ed_mchtNmCmpy, ed_mchtBusiNo, ed_mchtNm, ed_mchtAddr1, ed_mchtAddr2, ed_appRsnCd, ed_appRsn, ed_declarCstmCd, ed_declarCstmNm, ed_declarSecCd, ed_declarSecNm, ed_sendBondZoneCd, ed_sendBondZoneNm, ed_viaBondZoneCd, ed_viaBondZoneNm, ed_arvBondZoneCd, ed_arvBondZoneNm];
  $c.gus.cfPrepareObjectHidVal($p, ds_master, row, colArray, objArray);
};

//-------------------------------------------------------------------------
// 발행
//-------------------------------------------------------------------------
scwin.f_ozReport = async function () {
  if (ds_master.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  if ($c.gus.cfIsNull($p, ed_declarNo.getValue())) {
    await $c.win.alert($p, "등록되지 않은 자료입니다.");
    return false;
  }
  const rowIndex = ds_master.getRowPosition();
  const declarDt = ds_master.getCellData(rowIndex, "declarDt");
  const declarSeq = ds_master.getCellData(rowIndex, "declarSeq");
  const odiParam = {
    sysPath: "dbl.ds.sd.odrmgnt.odrprewrk",
    declarDt,
    declarSeq
  };
  const odiName = "sd_401_05_02";
  const reportNameList = String("/ds/sd/odrmgnt/odrprewrk/sd_401_05_02_1.ozr;" + "/ds/sd/odrmgnt/odrprewrk/sd_401_05_02_2.ozr;" + "/ds/sd/odrmgnt/odrprewrk/sd_401_05_02_3.ozr").split(";");
  const formName = "";
  const formParamObj = {
    dispName0: "",
    dispName1: "신청인용",
    dispName2: "반입신고용",
    dispName3: "보관용"
  };
  const displayNameList = ["신청인용", "반입신고용", "보관용"];
  const viewerParam = {
    useprogressbar: false,
    // 프로그레스바 쓸지 말지
    ismultidocassub: false,
    smartframesize: true,
    printcommand: true,
    zoom: 100 // 배율 설정
  };
  const printMode = cbx_printCheck.getValue() == "1" ? 'view' : 'silent'; // 인쇄옵션처리
  const previewMode = cbx_previewCheck.getValue() == "1"; // 미리보기처리    
  if (previewMode) {
    //미리보기시
    const dataInfo = {
      odiParam,
      viewerParam: {
        ...viewerParam,
        mode: "preview"
      },
      formParam: {}
    };
    const data = reportNameList.map((report, idx) => {
      return {
        reportName: report,
        displayName: displayNameList.at(idx),
        ...dataInfo
      };
    });
    let opts = {
      type: 'viewer',
      // viewer, print, download
      printMode: "view",
      exportFilename: odiName,
      exportPath: 'C:\\OZExport',
      exportFormat: 'pdf',
      exportMode: 'view'
    };
    console.log(data, opts);
    $c.ext.openMultiOzReport($p, data, opts);
  } else {
    const data = {
      reportName,
      odiParam,
      viewerParam,
      formParam: {
        formParamObj
      }
    };
    if (printMode == "view") {
      let opts = {
        type: 'viewer',
        // viewer, print, download
        printMode: "view",
        exportFilename: odiName,
        exportPath: 'C:\\OZExport',
        exportFormat: 'pdf',
        exportMode: 'view'
      };
      $c.ext.printOzReport($p, data, opts);
    } else {
      $c.ext.downloadOzReport($p, data, {});
    }
  }
};
scwin.f_ozReportPreView = function () {
  var data = [{
    displayName: "신청인용",
    formParam: {
      odiName: "sd_401_05_01",
      pgmId: "sd_401_05_03b.jsp",
      reportTime: "2026/04/22 15:01"
    },
    odiName: "sd_401_05_01",
    odiParam: {
      declarDt: "20250730",
      declarSeq: "17",
      sysPath: "dbl.ds.sd.odrmgnt.odrprewrk"
    },
    reportName: "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_1.ozr",
    viewerParam: {
      useprogressbar: false,
      ismultidocassub: false,
      smartframesize: true
    }
  }, {
    displayName: "반입신고용",
    formParam: {
      odiName: "sd_401_05_01",
      pgmId: "sd_401_05_03b.jsp",
      reportTime: "2026/04/22 15:01"
    },
    odiName: "sd_401_05_01",
    odiParam: {
      declarDt: "20250730",
      declarSeq: "17",
      sysPath: "dbl.ds.sd.odrmgnt.odrprewrk"
    },
    reportName: "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_2.ozr",
    viewerParam: {
      useprogressbar: false,
      ismultidocassub: false,
      smartframesize: true
    }
  }, {
    displayName: "보관용",
    formParam: {
      odiName: "sd_401_05_01",
      pgmId: "sd_401_05_03b.jsp",
      reportTime: "2026/04/22 15:01"
    },
    odiName: "sd_401_05_01",
    odiParam: {
      declarDt: "20250730",
      declarSeq: "17",
      sysPath: "dbl.ds.sd.odrmgnt.odrprewrk"
    },
    reportName: "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_3.ozr",
    viewerParam: {
      useprogressbar: false,
      ismultidocassub: false,
      smartframesize: true
    }
  }];
  var opts = {
    exportMode: '',
    exportConfirmsave: 'false',
    printMode: '',
    printCopies: 1,
    viewerFocus_doc_index: data.length - 1,
    globalConcatpage: 'false'
  };
  $c.ext.openMultiOzReport($p, data, opts);
};
scwin.f_ozReport1 = async function () {
  if (ds_master.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  if ($c.gus.cfIsNull($p, ed_declarNo.getValue())) {
    await $c.win.alert($p, "등록되지 않은 자료입니다.");
    return false;
  }
  var row = ds_master.getRowPosition();
  /* 
      var vMode = "";
      if (chb_pre.getValue() == "T") {
          vMode = "preview";
      } 
  
      if (chb_directSave.getValue() == "T") {
          vMode = "print";
      }
   */
  let ozOptions = {
    filename: "보세운송승인등록",
    path: "C:\\OZExport",
    format: "pdf"
  };
  let data = {
    odiName: "sd_401_05_02",
    reportName: "/ds/sd/odrmgnt/odrprewrk/sd_401_05_02_1.ozr;" + "/ds/sd/odrmgnt/odrprewrk/sd_401_05_02_2.ozr;" + "/ds/sd/odrmgnt/odrprewrk/sd_401_05_02_3.ozr;",
    odiParam: {
      sysPath: "dbl.ds.sd.odrmgnt.odrprewrk",
      declarDt: ds_master.getCellData(row, "declarDt"),
      declarSeq: ds_master.getCellData(row, "declarSeq")
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      ismultidocassub: false,
      smartframesize: true,
      printcommand: true,
      zoom: 100 // 배율 설정
    },
    formParam: {
      formParamObj: {
        dispName0: "",
        dispName1: "신청인용",
        dispName2: "반입신고용",
        dispName3: "보관용"
      }
    }
  };
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };

  // $c.ext.openOzReport(data, ozOptions);

  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);

  /*
  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  var row = ds_master.getRowPosition();
  var odiName = "sd_401_05_02";
  var odiParam = new ODIParam(odiName);
  odiParam.add("sysPath"  , "dbl.ds.sd.odrmgnt.odrprewrk");
  odiParam.add("declarDt" , ds_master.getCellData(row, "declarDt"));
  odiParam.add("declarSeq", ds_master.getCellData(row, "declarSeq"));
   var formParam = new FormParam() ;
   // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  var viewerParam = new ViewerParam();
  viewerParam.add("viewer.useprogressbar","false");
  viewerParam.add("viewer.ismultidocassub","false");
  viewerParam.add("viewer.smartframesize","true");
   var reportname = "";
  formParam.add("dispName0", "");
  formParam.add("dispName1", "신청인용");
  formParam.add("dispName2", "반입신고용");
  formParam.add("dispName3", "보관용");
   reportname += "/ds/sd/odrmgnt/odrprewrk/sd_401_05_02_1.ozr;"
              + "/ds/sd/odrmgnt/odrprewrk/sd_401_05_02_2.ozr;"
              + "/ds/sd/odrmgnt/odrprewrk/sd_401_05_02_3.ozr;";
  cf_OZReport("chb_printCheck", "chb_previewCheck", reportname, odiParam, viewerParam, formParam);
  */
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_search_submitdone = async function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let mainMainList = ds_mainMain.getAllJSON();
  mainMainList.map(m => {
    if (m["mainMainClsCd"] == "1") {
      ;
      m["bfDeclarPrd_01"] = m["bfDeclarPrd"];
      m["afDeclarPrd_01"] = m["afDeclarPrd"];
    }
    return m;
  });
  ds_mainMain.setJSON(mainMainList);
  ds_master.setIgnoreStatus(true);
  ds_arrive.setIgnoreStatus(true);
  ds_master.setRowPosition(0);
  ds_arrive.setRowPosition(0);
  ds_master.setIgnoreStatus(false);
  ds_arrive.setIgnoreStatus(false);
  if (ds_master.getRowCount() > 0) {
    scwin.f_setMasterObjHidVal(0);
    if (ds_master.getCellData(0, "casYn") == 'N') {
      cbx_exclusionYn.setValue(true);
    } else {
      if (ds_master.getCellData(0, "exclusionYn") == "0") {
        cbx_exclusionYn.setValue(false);
      } else {
        cbx_exclusionYn.setValue(true);
      }
    }
  }
  if (ds_master.getTotalRow() > 0) {
    scwin.f_setEditMode(scwin.EDIT_MODE_RETRIEVE);
  } else {
    await $c.win.alert($p, MSG_CM_WRN_002);
    scwin.f_setEditMode(scwin.EDIT_MODE_INIT);
  }
  scwin.f_computeSummary();
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  scwin.f_fieldClear();
};

//조회 버튼 
scwin.btn_search_onclick = function (e) {
  scwin.f_preRetrieve();
};

//발행 버튼 
scwin.btn_print_onclick = function (e) {
  scwin.f_ozReport1();
};

//전송 버튼
scwin.btn_send_onclick = function (e) {
  scwin.f_sendImmediate();
};

//신규 버튼
scwin.btn_new_onclick = function (e) {
  scwin.f_new();
};

//수정 버튼
scwin.btn_update_onclick = function (e) {
  scwin.f_update();
};

//저장 버튼 
scwin.btn_save_onclick = function (e) {
  scwin.f_sendBatch(1);
};

//삭제 버튼
scwin.btn_delete_onclick = function (e) {
  scwin.f_sendBatch(2);
};

//유해화학여부 값 변경 > 체크박스 활성화
scwin.lc_casYn_onchange = function (info) {
  if (info.newValue != "Y") {
    cbx_exclusionYn.setValue(false);
    cbx_exclusionYn.setDisabled(true);
  } else {
    cbx_exclusionYn.setDisabled(false);
  }
};
scwin.oneditkeyup = function (info, e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, e) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);
  scwin.f_openCommonPopUp(disGubun, e);
};

//========================================
//화주상호 팝업
//========================================
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, e);
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_mchtNmCmpy, 1, e);
};
scwin.udc_clntNo_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_mchtNmCmpy, ed_clntNo, 1, e);
};

//========================================
//사업자등록번호 팝업
//========================================
scwin.udc_mchtBusiNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2);
};

//========================================
//신청사유 팝업
//========================================
scwin.udc_appRsnCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, e);
};
scwin.udc_appRsnCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_appRsnCd, ed_appRsn, 3, e);
};
scwin.udc_appRsnCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_appRsn, ed_appRsnCd, 3, e);
};

//========================================
//발송지 팝업
//========================================
scwin.udc_sendBondZoneCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, e);
};
scwin.udc_sendBondZoneCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_sendBondZoneCd, ed_sendBondZoneNm, 4, e);
};
scwin.udc_sendBondZoneCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_sendBondZoneNm, ed_sendBondZoneCd, 4, e);
};

//========================================
//경유지 팝업
//========================================
scwin.udc_viaBondZoneCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, e);
};
scwin.udc_viaBondZoneCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_viaBondZoneCd, ed_viaBondZoneNm, 5, e);
};
scwin.udc_viaBondZoneCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_viaBondZoneNm, ed_viaBondZoneCd, 5, e);
};

//========================================
//도착지 팝업
//========================================
scwin.udc_arvBondZoneCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, e);
};
scwin.udc_arvBondZoneCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_arvBondZoneCd, ed_arvBondZoneNm, 6, e);
};
scwin.udc_arvBondZoneCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_arvBondZoneNm, ed_arvBondZoneCd, 6, e);
};

//========================================
//신고세관 팝업
//========================================
scwin.udc_declarCstmCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(7, e);
};
scwin.udc_declarCstmCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_declarCstmCd, ed_declarCstmNm, 7, e);
};
scwin.udc_declarCstmCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_declarCstmNm, ed_declarCstmCd, 7, e);
};

//========================================
//신고과 팝업
//========================================
scwin.udc_declarSecCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, e);
};
scwin.udc_declarSecCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_declarSecCd, ed_declarSecNm, 8, e);
};
scwin.udc_declarSecCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_declarSecNm, ed_declarSecCd, 8, e);
};

//========================================
//배차담당자 팝업
//========================================
scwin.udc_alloccarPicId_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(9, e);
};
scwin.udc_alloccarPicId_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_alloccarPicId, ed_alloccarPicNm, 9, e);
};
scwin.udc_alloccarPicId_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_alloccarPicNm, ed_alloccarPicId, 9, e);
};

//========================================
//HSN 팝업
//========================================
scwin.udc_hsn_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(10);
};
scwin.ed_mrn_onblur = async function (e) {
  if ($c.gus.cfIsNull($p, ed_mrn.getValue())) return;
  scwin.f_openCommonPopUp(10, e);
};
scwin.ed_msn_onblur = async function (e) {
  if ($c.gus.cfIsNull($p, ed_msn.getValue())) return;
  scwin.f_openCommonPopUp(10, e);
};

//========================================
//M B/L 팝업
//========================================
scwin.udc_mblNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(11);
};
scwin.udc_mblNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_mblNo, ed_hblNo, 11, e);
};

//========================================
//H B/L 팝업
//========================================
scwin.udc_hblNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(12);
};
scwin.udc_hblNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_hblNo, ed_mblNo, 12, e);
};

//정정추가 버튼 Click Event
scwin.btn_addMainMain_onclick = function (e) {
  scwin.f_addMainMain();
};

//정정삭제 버튼 Click Event
scwin.btn_delMainMain_onclick = function (e) {
  scwin.f_delMainMain();
};

//정정내역 Grid Popup 호출
scwin.isEventRunning = false;
scwin.gr_mainMain_ontextimageclick = async function (rowIndex, columnIndex) {
  await new Promise(resolve => setTimeout(resolve, 200));
  if (scwin.isEventRunning) return false;
  scwin.isEventRunning = true;
  let columnId = gr_mainMain.getColumnID(columnIndex);
  if (columnId == "bfArvBondZoneNm") {
    await scwin.f_openCommonGridPopUp(ds_mainMain, 'F', columnId, ["bfArvBondZoneCd", "bfArvBondZoneNm"]);
  } else if (columnId == "afArvBondZoneNm") {
    await scwin.f_openCommonGridPopUp(ds_mainMain, 'F', columnId, ["afArvBondZoneCd", "afArvBondZoneNm"]);
  }
  scwin.isEventRunning = false;
};
scwin.gr_mainMain_onafteredit = async function (rowIndex, columnIndex, value) {
  if (scwin.isEventRunning) return false;
  scwin.isEventRunning = true;
  let columnId = gr_mainMain.getColumnID(columnIndex);
  if (columnId == "bfArvBondZoneNm") {
    await scwin.f_openCommonGridPopUp(ds_mainMain, 'T', columnId, ["bfArvBondZoneCd", "bfArvBondZoneNm"]);
  } else if (columnId == "afArvBondZoneNm") {
    await scwin.f_openCommonGridPopUp(ds_mainMain, 'T', columnId, ["afArvBondZoneCd", "afArvBondZoneNm"]);
  } else if (columnId == "mainMainClsCd") {
    scwin.f_setMainMainRowEdit(ds_mainMain, rowIndex, value);
  }
  scwin.isEventRunning = false;
};

//-------------------------------------------------------------------------
// 공통 Grid 팝업 호출
//-------------------------------------------------------------------------
scwin.f_openCommonGridPopUp = async function (dataSet, pWinCloseTF, columnId, colArr) {
  var row = dataSet.getRowPosition();
  if (row < 0) return;
  var newData = dataSet.getCellData(row, columnId);
  var oldData = scwin.f_getGridHidden(dataSet, row, columnId);
  if (pWinCloseTF == "T") {
    if (!scwin.f_canGridPopup(dataSet, columnId, newData, oldData, colArr)) return false;
  }
  udc_gridComCode.setSelectId("retrieveBondZoneRound");
  const rtnList = await udc_gridComCode.cfCommonPopUpAsync(await function (rtnList) {
    return rtnList;
  }, "", newData, pWinCloseTF);
  console.log("rtnList : " + JSON.stringify(rtnList));
  if (rtnList != 'N/A' && !$c.util.isEmpty($p, rtnList)) {
    scwin.f_setGridColumn(dataSet, row, colArr, rtnList);
  } else if (rtnList == null) {
    // 팝업을 X 버튼으로 닫았을 때
    scwin.f_clearGridColumn(dataSet, row, colArr);
  } else {
    scwin.f_redoGridColumn(dataSet, row, colArr);
  }
};

//-------------------------------------------------------------------------
// 그리드 팝업 여부를 반환
//-------------------------------------------------------------------------
scwin.f_canGridPopup = function (dataSet, colid, newData, oldData, colArray) {
  var row = dataSet.getRowPosition();
  if (row < 0) return false;
  if (newData == null) newData = "";
  if (oldData == null) oldData = "";
  if ($c.gus.cfIsNull($p, newData)) {
    scwin.f_clearGridColumn(dataSet, row, colArray);
    return false;
  }
  if (newData == oldData) return false;
  return true;
};

//-------------------------------------------------------------------------
// 데이서 셋의 값과 Hidden 값을 초기화
//-------------------------------------------------------------------------
scwin.f_clearGridColumn = function (dataSet, row, col) {
  if (row < 0) return false;
  if (scwin.f_isArray(col)) {
    for (var i = 0; i < col.length; i++) scwin.f_clearGridColumn(dataSet, row, col[i]);
  } else {
    if (col == null) col = "";
    dataSet.getCellData(row, col, "");
    // dataSet.setAttribute(col, "");
  }
};

//-------------------------------------------------------------------------
// 데이서 셋의 값과 Hidden 값을 설정
//-------------------------------------------------------------------------
scwin.f_setGridColumn = function (dataSet, row, col, val) {
  if (row < 0) return false;
  if (scwin.f_isArray(col)) {
    for (var i = 0; i < col.length; i++) {
      scwin.f_setGridColumn(dataSet, row, col[i], val[i] == null ? "" : val[i]);
    }
  } else {
    if (col == null) col = "";
    if (val == null) val = "";
    dataSet.setCellData(row, col, val);
    // dataSet.setAttribute(col, val);

    dataSet.setUserData(col, val);
  }
};

//-------------------------------------------------------------------------
// 데이서 셋의 값과 Hidden 값을 설정
//-------------------------------------------------------------------------
scwin.f_redoGridColumn = function (dataSet, row, col) {
  if (row < 0) return false;
  if (scwin.f_isArray(col)) {
    for (var i = 0; i < col.length; i++) {
      scwin.f_redoGridColumn(dataSet, row, col[i]);
    }
  } else {
    dataSet.setCellData(row, col, scwin.f_getGridHidden(dataSet, row, col));
  }
};

//-------------------------------------------------------------------------
// 데이서 셋의 값을 Hidden 값으로 복원
//-------------------------------------------------------------------------
scwin.f_getGridHidden = function (dataSet, row, colid) {
  if (row < 0) return "";
  if (colid == null) return "";
  if (dataSet.setUserData(colid) == null) return "";
  return dataSet.setUserData(colid);
};
scwin.ed_declarPrcSum_onviewchange = function (info) {
  ed_jdgPrcSum.setValue(scwin.f_getJdgPrcSum());
};
scwin.ed_exchRt_onviewchange = function (info) {
  ed_jdgPrcSum.setValue(scwin.f_getJdgPrcSum());
};
scwin.lc_jdgPrcCondCd_onviewchange = function (info) {
  ed_jdgPrcSum.setValue(scwin.f_getJdgPrcSum());
};

//-------------------------------------------------------------------------
// 감정가격을 반환한다.
//-------------------------------------------------------------------------
scwin.f_getJdgPrcSum = function () {
  //var exchRt = (Number(ed_exchRt.text)==0 ? 1 : Number(ed_exchRt.text));
  var exchRt = $c.gus.cfIsNull($p, ed_exchRt.getValue()) ? 0 : Number(ed_exchRt.getValue());
  return Number(ed_declarPrcSum.getValue()) * scwin.f_getJdbCond() * exchRt;
};
//-------------------------------------------------------------------------
// 감정가격조건 데이터셋을 Reset
//-------------------------------------------------------------------------
scwin.f_getJdbCond = function () {
  if (lc_jdgPrcCondCd.getValue() == "") {
    return 0;
  } else {
    return Number(ds_jdgCond.getAllJSON().find(f => f["col1"] == lc_jdgPrcCondCd.getValue())?.["col2"]) || 0;
  }
};
scwin.ed_ucomWrkPlApprNo_onkeyup = function (e) {
  const value = ed_ucomWrkPlApprNo.getValue().toLocaleUpperCase();
  ed_ucomWrkPlApprNo.setValue(value);
};
scwin.ed_srchMblNo_onkeyup = function (e) {
  const value = ed_srchMblNo.getValue().toLocaleUpperCase();
  ed_srchMblNo.setValue(value);
};
scwin.ed_srchHblNo_onkeyup = function (e) {
  const value = ed_srchHblNo.getValue().toLocaleUpperCase();
  ed_srchHblNo.setValue(value);
};
scwin.cbx_exclusionYn_onchange = function (info) {
  if (ds_master.getCellData(ds_master.getRowPosition(), "casYn") == 'Y') {
    if (String(cbx_exclusionYn.getValue()) == 'true') {
      ds_master.setCellData(ds_master.getRowPosition(), "exclusionYn", "1");
    } else {
      ds_master.setCellData(ds_master.getRowPosition(), "exclusionYn", "0");
    }
  } else {
    ds_master.setCellData(ds_master.getRowPosition(), "exclusionYn", "");
  }
};
scwin.cbx_returnYn_onviewchange = function (info) {
  scwin.f_setTransPrd();
};
scwin.cbx_bulkYn_onviewchange = function (info) {
  scwin.f_setTransPrd();
};

//반송 체크박스 onchange Event
scwin.cbx_returnYn_onchange = async function (info) {
  scwin.f_setTransPrd();
};

//벌크 체크박스 onchange Event
scwin.cbx_bulkYn_onchange = async function (info) {
  scwin.f_setTransPrd();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신고일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_srchDeclarDt',objType:'data',validExp:'신고일자:no:date=YYYYMMDD',style:'',ref:'data:dma_search.declarDt','data-length':'8',editType:'select'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신고순번',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w70',id:'ed_srchDeclarSeq',objType:'data',validExp:'신고순번:no',placeholder:'',style:'',allowChar:'0-9',maxlength:'3',ref:'data:dma_search.declarSeq','data-length':'3'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신고번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w200',id:'ed_srchDeclarNo',objType:'data',validExp:'세관신고번호:no',placeholder:'',style:'',allowChar:'0-9A-Za-z',displayFormat:'#####-######-#-########',ref:'data:dma_search.declarNo','data-length':'20',maxlength:'23',editFormat:'XXXXX-######-#-########'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'M B/L',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_srchMblNo',objType:'data',validExp:'H B/L번호:no',placeholder:'',style:'',maxlength:'20',allowChar:'0-9A-Za-z',ref:'data:dma_search.mblNo','data-length':'20',maxByteLength:'20','ev:onkeyup':'scwin.ed_srchMblNo_onkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'H B/L',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_srchHblNo',objType:'data',validExp:'H B/L번호:no',placeholder:'',style:'',maxlength:'20',allowChar:'0-9A-Za-z',ref:'data:dma_search.hblNo','data-length':'20','ev:onkeyup':'scwin.ed_srchHblNo_onkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'보세운송 승인정보 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_master',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'화주상호',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_clntNo',selectID:'retrieveClntCrnList',popupID:'popupClntNo',class:'w250',style:'',codeId:'ed_clntNo',nameId:'ed_mchtNmCmpy',code:'clntNo',name:'mchtNmCmpy',refDataCollection:'ds_master',btnId:'btn_clntNo',objTypeCode:'data',objTypeName:'data',validExpCode:'화주상호:yes:length=6',UpperFlagCode:'0',allowCharCode:'0-9',maxlengthCode:'6',maxlengthName:'30',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'성명',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_mchtNm',objType:'data',validExp:'성명:yes:maxByteLength=50',placeholder:'',style:'',ref:'data:ds_master.mchtNm','data-length':'50',maxByteLength:'50',mandatory:'true',maxlength:'50'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업자등록번호',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_mchtBusiNo',selectID:'retrieveCrnClntList',popupID:'pop_mchtBusiNo',class:'w250',style:'',codeId:'ed_mchtBusiNo',nameId:'',code:'mchtBusiNo',objTypeCode:'data',refDataCollection:'ds_master',btnId:'btn_mchtBusiNo',hideName:'true',UpperFlagCode:'0',allowCharCode:'0-9',mandatoryCode:'true',validExpCode:'사업자등록번호:yes:csn','ev:onclickEvent':'scwin.udc_mchtBusiNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_mchtBusiNo_onclickEvent',maxlengthCode:'10'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'주소',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_mchtAddr1',objType:'data',validExp:'주소:yes:maxByteLength=35',placeholder:'',class:' w250',ref:'data:ds_master.mchtAddr1','data-length':'35',maxByteLength:'70',maxlength:'35'}},{T:1,N:'xf:input',A:{style:'',id:'ed_mchtAddr2',objType:'data',validExp:'상세주소:no:maxByteLength=35',placeholder:'',class:' w300',ref:'data:ds_master.mchtAddr2','data-length':'35',maxByteLength:'70',maxlength:'35'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'세관신고번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w250',id:'ed_declarNo',objType:'key',validExp:'세관신고번호:no:length=20',placeholder:'',style:'',allowChar:'0-9A-Za-z',displayFormat:'#####-######-#-########',ref:'data:ds_master.declarNo','data-length':'25',maxByteLength:'25'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'신청일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_declarDt',objType:'data',validExp:'신청일자:no:date=YYYYMMDD',class:' cal',calendarValueType:'yearMonthDate',ref:'data:ds_master.declarDt','data-length':'8'}},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',maxlength:'3',label:'순번',class:''}},{T:1,N:'xf:input',A:{style:';text-align:center;',id:'ed_declarSeq',placeholder:'',class:' w50',validExp:'신고순번:no',maxlength:'3',allowChar:'0-9',ref:'data:ds_master.declarSeq','data-length':'40',maxByteLength:'40'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'운송기한',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'col-gap-14',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_transPrd',objType:'data',validExp:'운송기한:yes:date=YYYYMMDD',style:'',ref:'data:ds_master.transPrd','data-length':'8'}},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_returnYn',ref:'data:ds_master.returnYn',renderType:'checkboxgroup',rows:'',selectedindex:'',style:'',falseValue:'0','data-length':'1','ev:onviewchange':'scwin.cbx_returnYn_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'반송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_bulkYn',ref:'data:ds_master.bulkYn',renderType:'checkboxgroup',rows:'',selectedindex:'',style:'',falseValue:'0','data-length':'1','ev:onviewchange':'scwin.cbx_bulkYn_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'운송수단',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group w250'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_transCntShtCd1',validExp:'운송수단:yes',style:'',submenuSize:'fixed',ref:'data:ds_master.transCntShtCd1','data-length':'2',chooseOptionLabel:'선택안함',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_transCntShtCd2',validExp:'운송수단:no',style:'',submenuSize:'fixed',ref:'data:ds_master.transCntShtCd2','data-length':'2',chooseOptionLabel:'선택안함'},E:[{T:1,N:'xf:choices'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청사유',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_appRsnCd',selectID:'retrieveApplyReasonInfo',popupID:'pop_appRsnCd',class:'w250',style:'',codeId:'ed_appRsnCd',nameId:'ed_appRsn',code:'appRsnCd',name:'appRsn',btnId:'btn_appRsnCd',objTypeCode:'data',objTypeName:'data',validExpCode:'신청사유:yes:length=2',maxlengthName:'30',refDataCollection:'ds_master',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onclickEvent':'scwin.udc_appRsnCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_appRsnCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_appRsnCd_onblurNameEvent',allowCharCode:'0-9',maxlengthCode:'2'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'타장허가번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_ucomWrkPlApprNo',objType:'data',validExp:'타장허가번호:no:maxByteLength=7',allowChar:'0-9A-Za-z',placeholder:'',style:'',maxByteLength:'7',ref:'data:ds_master.ucomWrkPlApprNo','data-length':'16','ev:onkeyup':'scwin.ed_ucomWrkPlApprNo_onkeyup',maxlength:'7'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세관기재사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w250',id:'ed_cstmStateItm',objType:'data',validExp:'세관기재사항:no:maxByteLength=50',placeholder:'',style:'',ref:'data:ds_master.cstmStateItm','data-length':'50',maxByteLength:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'발송지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_sendBondZoneCd',selectID:'retrieveBondZoneRound',class:'w250',popupID:'popupSendBondZoneCd',style:'',btnId:'btn_sendBondZoneCd',objTypeCode:'data',validExpCode:'발송지:yes::maxByteLength=10',maxlengthName:'30',objTypeName:'data',maxlengthCode:'10',code:'sendBondZoneCd',name:'sendBondZoneNm',codeId:'ed_sendBondZoneCd',nameId:'ed_sendBondZoneNm',refDataCollection:'ds_master',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onclickEvent':'scwin.udc_sendBondZoneCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_sendBondZoneCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_sendBondZoneCd_onblurNameEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'경유지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_viaBondZoneCd',selectID:'retrieveBondZoneRound',popupID:'pop_viaBondZoneCd',class:'w250',style:'',codeId:'ed_viaBondZoneCd',nameId:'ed_viaBondZoneNm',btnId:'btn_viaBondZoneCd',objTypeCode:'data',validExpCode:'경유지:no:maxByteLength=10',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z',maxlengthName:'30',objTypeName:'data',maxlengthCode:'10',code:'viaBondZoneCd',name:'viaBondZoneNm',refDataCollection:'ds_master',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onclickEvent':'scwin.udc_viaBondZoneCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_viaBondZoneCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_viaBondZoneCd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'도착지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_arvBondZoneCd',selectID:'retrieveBondZoneRound',popupID:'pop_arvBondZoneCd',class:'w250',style:'',btnId:'btn_arvBondZoneCd',objType:'data',objTypeName:'data',code:'arvBondZoneCd',name:'arvBondZoneNm',codeId:'ed_arvBondZoneCd',nameId:'ed_arvBondZoneNm',refDataCollection:'ds_master',validExpCode:'도착지:yes:maxByteLength=10',maxlengthCode:'10',maxlengthName:'30',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onclickEvent':'scwin.udc_arvBondZoneCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_arvBondZoneCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_arvBondZoneCd_onblurNameEvent',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신고세관',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'w250',id:'udc_declarCstmCd',selectID:'retrieveCustomInfo',popupID:'pop_declarCstmCd',style:'',btnId:'btn_declarCstmCd',objTypeCode:'data',objTypeName:'data',code:'declarCstmCd',name:'declarCstmNm',codeId:'ed_declarCstmCd',nameId:'ed_declarCstmNm',refDataCollection:'ds_master',validExpCode:'신고세관:yes:length=3',maxlengthName:'30',allowCharCode:'0-9',UpperFlagCode:'0',maxlengthCode:'3',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onclickEvent':'scwin.udc_declarCstmCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_declarCstmCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_declarCstmCd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신고과',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_declarSecCd',selectID:'retrieveCustomSectionInfo',popupID:'pop_declarSecCd',style:'',class:'w250',btnId:'btn_declarSecCd',codeId:'ed_declarSecCd',validExpCode:'신고과:yes:length=2',maxlengthCode:'2',nameId:'ed_declarSecNm',maxlengthName:'30',objTypeCode:'data',objTypeName:'data',code:'declarSecCd',name:'declarSecNm',refDataCollection:'ds_master',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onclickEvent':'scwin.udc_declarSecCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_declarSecCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_declarSecCd_onblurNameEvent',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하선물품특성',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dsmbrkFrgtClsCd',style:'',submenuSize:'auto',validExp:'하선물품특성:no',chooseOption:'true',chooseOptionLabel:'선택안함',ref:'data:ds_master.dsmbrkFrgtClsCd','data-length':'2',labelWidthAuto:'true',renderType:'component',emptyItem:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담보구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'w250',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_pldgClsCd',style:'',submenuSize:'fixed',validExp:'담보구분:no',ref:'data:ds_master.pldgClsCd','data-length':'2',chooseOptionLabel:'$blank',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담보금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_pldgAmt',objType:'data',validExp:'담보금액:no',placeholder:'',style:'',editType:'select',maxlength:'30',dataType:'number',textAlign:'right',ref:'data:ds_master.pldgAmt','data-length':'13',maxByteLength:'13',displayFormat:'#,###',initValue:'0',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신고가격',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_declarPrcSum',validExp:'신고가격:yes:minNumber=1',textAlign:'right',editType:'select',dataType:'number',maxlength:'13',ref:'data:ds_master.declarPrcSum',displayFormat:'#,##0',initValue:'0','ev:onviewchange':'scwin.ed_declarPrcSum_onviewchange',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조건',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',class:'w250',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_jdgPrcCondCd',style:'',submenuSize:'fixed',validExp:'조건:yes',ref:'data:ds_master.jdgPrcCondCd','data-length':'3','ev:onviewchange':'scwin.lc_jdgPrcCondCd_onviewchange',emptyItem:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'환율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_exchRt',objType:'data',validExp:'환율:yes:minNumber=0.0001',placeholder:'',style:'',textAlign:'right',editType:'select',ref:'data:ds_master.exchRt','data-length':'9',displayFormat:'#,###.####',dataType:'float',initValue:'0',allowChar:'0-9.',maxlength:'13.4',applyFormat:'all','ev:onviewchange':'scwin.ed_exchRt_onviewchange'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'감정가격',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_jdgPrcSum',objType:'data',placeholder:'',style:'',textAlign:'right',editType:'select',maxlength:'18',ref:'data:ds_master.jdgPrcSum','data-length':'18',maxByteLength:'18',displayFormat:'#,###',dataType:'number',initValue:'0'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'위험물여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'w85',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dangerYn',style:'',submenuSize:'fixed',validExp:'위험물여부:yes',ref:'data:ds_master.dangerYn',chooseOptionLabel:'선택','data-length':'1',sortOption:'value',sortMethod:'ascending',displayMode:'value'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'유해화학여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'w85',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_casYn',ref:'data:ds_master.casYn',style:'',submenuSize:'fixed',validExp:'유해화학여부:yes',chooseOptionLabel:'선택','data-length':'1','ev:onchange':'scwin.lc_casYn_onchange',sortOption:'value',sortMethod:'ascending',displayMode:'value'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_exclusionYn',renderType:'checkboxgroup',rows:'',selectedindex:'',class:'chk-grp',cols:'','data-length':'1',falseValue:'false','ev:onchange':'scwin.cbx_exclusionYn_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화학물질관리법 적용배제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'true'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'운송차량유형',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_transTyp',ref:'data:ds_master.transTyp',style:'',submenuSize:'auto',validExp:'운송차량유형:yes','data-length':'2',displayMode:'label',renderType:'component',emptyItem:'true',labelWidthAuto:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'직영차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'위수탁계약(지입)차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력업체(알선차량)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정정구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'$blank',class:'w250',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_mainMainClsCd',ref:'data:ds_master.mainMainClsCd',style:'',submenuSize:'fixed',validExp:'정정구분:no',objType:'data','data-length':'1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'직영차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'위수탁계약(지입)차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력업체(알선차량)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_admitDt',objType:'data',validExp:'승인일자:no:date=YYYYMMDD',style:'',ref:'data:ds_master.admitDt','data-length':'8'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신고자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group w250'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_regId',maxlength:'30',objType:'key',placeholder:'',class:' ',ref:'data:ds_master.regId','data-length':'8',maxByteLength:'8'}},{T:1,N:'xf:input',A:{style:'',id:'ed_regNm',maxlength:'30',objType:'key',placeholder:'',class:' w85',ref:'data:ds_master.regNm','data-length':'50',maxByteLength:'50'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'처리구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'$blank',class:'w250',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_procClsCd',ref:'data:ds_master.procClsCd',style:'',submenuSize:'fixed',validExp:'처리구분:no',objType:'data','data-length':'1'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반입일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_crryinDt',objType:'data',validExp:'반입일자:no:date=YYYYMMDD',style:'',ref:'data:ds_master.crryinDt','data-length':'8'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차담당자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'w250',popupID:'pop_alloccarPicId',style:'',id:'udc_alloccarPicId',codeId:'ed_alloccarPicId',btnId:'btn_alloccarPicId',nameId:'ed_alloccarPicNm',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'6',objTypeName:'data',maxlengthName:'30',selectID:'retrieveUserEmpInfo','ev:onclickEvent':'scwin.udc_alloccarPicId_onclickEvent',refDataCollection:'ds_master',code:'alloccarPicId',name:'alloccarPicNm',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onblurCodeEvent':'scwin.udc_alloccarPicId_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_alloccarPicId_onblurNameEvent'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'화물 정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_arrive',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물관리번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'MRN',class:'req'}},{T:1,N:'xf:input',A:{style:'',id:'ed_mrn',objType:'data',validExp:'MRN:yes',placeholder:'',class:' w150',maxlength:'11',allowChar:'0-9A-Za-z',ref:'data:ds_arrive.mrn','data-length':'11','ev:onblur':'scwin.ed_mrn_onblur','ev:oneditkeyup':'scwin.oneditkeyup'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'MSN',class:'req'}},{T:1,N:'xf:input',A:{style:';text-align:center;',id:'ed_msn',objType:'data',validExp:'MSN:yes',placeholder:'',class:' w85',maxlength:'4',allowChar:'0-9',ref:'data:ds_arrive.msn','data-length':'40','ev:onblur':'scwin.ed_msn_onblur'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'HSN',class:''}},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'0',allowCharCode:'0-9',btnId:'btn_hsn',class:'w250',codeId:'ed_hsn',id:'udc_hsn',maxlengthCode:'4',nameId:'',objTypeCode:'key',popupID:'pop_hsn',selectID:'retrieveBondedTransBLInfo',style:'',validExpCode:'HSN:no',hideName:'true','ev:onclickEvent':'scwin.udc_hsn_onclickEvent',refDataCollection:'ds_arrive',code:'hsn'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'M B/L',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9a-zA-Z',btnId:'btn_mblNo',class:'w250',codeId:'ed_mblNo',id:'udc_mblNo',maxlengthCode:'20',nameId:'ed_mblNm',objTypeCode:'data',popupID:'pop_mblNo',selectID:'retrieveBondedTransBLInfo2',style:'',hideName:'true',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_mblNo_onclickEvent',code:'mblNo',refDataCollection:'ds_arrive',codeWidth:'150',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onblurCodeEvent':'scwin.udc_mblNo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'H B/L',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9a-zA-Z',btnId:'btn_hblNo',class:'w250',codeId:'ed_hblNo',id:'udc_hblNo',maxlengthCode:'20',nameId:'ed_hblNm',objTypeCode:'data',popupID:'pop_hblNo',selectID:'retrieveBondedTransBLInfo2',style:'',hideName:'true',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_hblNo_onclickEvent',code:'hblNo',refDataCollection:'ds_arrive',codeWidth:'150','ev:onblurCodeEvent':'scwin.udc_hblNo_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w250',id:'ed_commNm',maxlength:'30',objType:'key',placeholder:'',style:'',ref:'data:ds_arrive.commNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'포장단위',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'$blank',class:'w250',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_packUnitCd',objType:'data',ref:'data:ds_arrive.packUnitCd',style:'',submenuSize:'fixed','data-length':'100'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'포장개수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_packCnt',objType:'key',placeholder:'',style:'',editType:'select',maxlength:'13',ref:'data:ds_arrive.packCnt','data-length':'10',initValue:'0',dataType:'number',displayFormat:'#,###'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총중량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_totWt',objType:'key',placeholder:'',style:'',textAlign:'right',editType:'select',maxlength:'13.3',ref:'data:ds_arrive.totWt','data-length':'18',initValue:'0',dataType:'number',displayFormat:'#,###.###'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'컨테이너 정보',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'N',gridUpYn:'N',templateYn:'N',gridID:'gr_cntr',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_cntr',style:'',id:'gr_cntr',class:'wq_gvw',visibleRowNum:'3',visibleRowNumFix:'true',validExp:'cntrNo:컨테이너:yes:maxByteLength=11',dataDragDrop:'true',resize:'true',rowStatusVisible:'true',rowStatusWidth:'40'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column3',value:'컨테이너',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column21',value:'봉인번호1',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너',width:'150',displayMode:'label',inputType:'text',style:'',maxByteLength:'11',maxLength:'11',allowChar:'!-~'}},{T:1,N:'w2:column',A:{id:'sealNo1',name:'봉인번호',width:'140',displayMode:'label',inputType:'text',style:'',readOnly:'true'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'컨테이너 집계',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_summary',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:110px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:110px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:110px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:110px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:110px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:110px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'20 Feet',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' tar',id:'ed_20FeetCnt',objType:'key',placeholder:'',style:'',maxlength:'13',dataType:'number',textAlign:'right',displayFormat:'#,###.###'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'40 Feet',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' tar',id:'ed_40FeetCnt',placeholder:'',style:'',objType:'key',maxlength:'13',dataType:'number',textAlign:'right',displayFormat:'#,###.###'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'45 Feet',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' tar',id:'ed_45FeetCnt',objType:'key',textAlign:'right',editType:'select',placeholder:'',style:'',maxlength:'13',dataType:'number',displayFormat:'#,###.###'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너 총개수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' tar',id:'ed_cntrCnt',objType:'key',placeholder:'',style:'',maxlength:'13',textAlign:'right',editType:'select',dataType:'number',displayFormat:'#,###.###'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'포장개수 합계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' tar',id:'ed_packCntSum',objType:'key',placeholder:'',style:'',maxlength:'13',textAlign:'right',editType:'select',dataType:'number',displayFormat:'#,###.###'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총중량 합계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' tar',id:'ed_wtSum',objType:'key',placeholder:'',style:'',maxlength:'13',textAlign:'right',editType:'select',dataType:'number',displayFormat:'#,###.###'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'col-gap-14 '},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_print',userAuth:'P',label:'발행',style:'',type:'button','ev:onclick':'scwin.btn_print_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_send',userAuth:'U',objType:'bSave',label:'전송',style:'',type:'button','ev:onclick':'scwin.btn_send_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전송'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_new',userAuth:'C',objType:'bCreate',label:'신규',style:'',type:'button','ev:onclick':'scwin.btn_new_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_update',userAuth:'U',objType:'bUpdate',label:'수정',style:'',type:'button','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',userAuth:'U',objType:'bSave',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',userAuth:'U',objType:'bDelete',label:'삭제',style:'',type:'button','ev:onclick':'scwin.btn_delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'정정내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownYn:'N',gridUpYn:'N',templateYn:'N',gridID:'gr_mainMain',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_mainMain',id:'gr_mainMain',style:'',visibleRowNum:'5',visibleRowNumFix:'true',resize:'true',dataDragDrop:'true',validExp:'mainMainClsCd:정정구분:yes,mainMainRsnCd:정정사유:yes:maxByteLength=50,bfDeclarPrd:운송기한(Fr):no:date=YYYYMMDD,afDeclarPrd:운송기한(To):no:date=YYYYMMDD,mainMainDeclarDt:신고일자:yes:date=YYYYMMDD,afArvBondZoneNm:변경후 도착지:no:maxByteLength=50',dataName:'보세운송정정목록',rowStatusVisible:'true',rowStatusWidth:'40','ev:ontextimageclick':'scwin.gr_mainMain_ontextimageclick','ev:onafteredit':'scwin.gr_mainMain_onafteredit',setCellInputTypeCustom:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'h_mainMainSeq',inputType:'text',value:'정정차수',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_mainMainClsCd',inputType:'text',value:'정정구분',width:'110',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_mainMainRsnCd',inputType:'text',value:'정정사유',width:'230',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_bfDeclarPrd_01',inputType:'text',value:'운송기한(Fr)',width:'120',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_afDeclarPrd_01',inputType:'text',value:'운송기한(To)',width:'120',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_bfDeclarPrd_02',inputType:'text',value:'정정 전',width:'120',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_afDeclarPrd_02',inputType:'text',value:'정정 후',width:'120',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_sndProcWay',inputType:'text',value:'전송방법',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_procClsCd',inputType:'text',value:'처리구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_mainMainDeclarDt',inputType:'text',value:'신고일자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_bfArvBondZoneCd',inputType:'text',value:'변경전도착지코드',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_bfArvBondZoneNm',inputType:'text',value:'변경전 도착지',width:'120',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_afArvBondZoneCd',inputType:'text',value:'변경후도착지코드',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_afArvBondZoneNm',inputType:'text',value:'변경후 도착지',width:'120',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_bfDeclarPrd',inputType:'text',value:'',width:'120',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'h_afDeclarPrd',inputType:'text',value:'',width:'120',class:'txt-blue',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{id:'mainMainSeq',name:'정정차수',width:'60',displayMode:'label',inputType:'text',style:'',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'mainMainClsCd',name:'정정구분',width:'110',displayMode:'label',inputType:'select',style:'',validExp:'mainMainClsCd:정정구분:yes'}},{T:1,N:'w2:column',A:{id:'mainMainRsnCd',name:'정정사유',width:'230',displayMode:'label',inputType:'select',style:'',textAlign:'left'}},{T:1,N:'w2:column',A:{id:'bfDeclarPrd_01',width:'80',displayMode:'label',inputType:'calendar',style:''}},{T:1,N:'w2:column',A:{id:'afDeclarPrd_01',width:'80',displayMode:'label',inputType:'calendar',style:''}},{T:1,N:'w2:column',A:{id:'bfDeclarPrd_02',width:'80',displayMode:'label',inputType:'text',style:''}},{T:1,N:'w2:column',A:{id:'afDeclarPrd_02',width:'80',displayMode:'label',inputType:'text',style:''}},{T:1,N:'w2:column',A:{id:'sndProcWay',name:'전송방법',width:'80',displayMode:'label',inputType:'text',style:''}},{T:1,N:'w2:column',A:{id:'procClsCd',name:'처리구분',width:'90',displayMode:'label',inputType:'select',style:'',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'mainMainDeclarDt',width:'80',displayMode:'label',inputType:'calendar',style:''}},{T:1,N:'w2:column',A:{id:'bfArvBondZoneCd',name:'변경전도착지코드',width:'100',displayMode:'label',inputType:'text',style:''}},{T:1,N:'w2:column',A:{id:'bfArvBondZoneNm',name:'변경전',width:'100',displayMode:'label',inputType:'textImage',style:'',hidden:'false',textAlign:'left'}},{T:1,N:'w2:column',A:{id:'afArvBondZoneCd',name:'변경후도착지코드',width:'60',displayMode:'label',inputType:'text',style:''}},{T:1,N:'w2:column',A:{id:'afArvBondZoneNm',name:'변경후',width:'100',displayMode:'label',inputType:'textImage',style:'',textAlign:'left',hidden:'false'}},{T:1,N:'w2:column',A:{id:'bfDeclarPrd',width:'80',displayMode:'label',inputType:'calendar',style:''}},{T:1,N:'w2:column',A:{id:'afDeclarPrd',width:'80',displayMode:'label',inputType:'calendar',style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'w2:udc_comCode',A:{class:'',codeId:'',id:'udc_gridComCode',nameId:'',popupID:'',selectID:'',style:';visibility:hidden;'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_addMainMain',style:'',type:'button','ev:onclick':'scwin.btn_addMainMain_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정정추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_delMainMain',style:'',type:'button','ev:onclick':'scwin.btn_delMainMain_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정정삭제'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'pop_comCode',selectID:'retrieveBondedTransInfoByBL',codeId:'ed_comCode',validTitle:'',nameId:'ed_comCodeNm',style:'width:%;height:px;display: none;',id:'udc_comCode',btnId:'btn_comCode'}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'$blank',class:'w250','data-length':'1',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_sndProcWay',objType:'data',ref:'data:ds_master.sndProcWay',style:'display: none;',submenuSize:'fixed',validExp:'처리구분:no'},E:[{T:1,N:'xf:choices'}]}]}]}]}]}]})