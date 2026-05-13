/*amd /ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_02_02b.xml 110939 9a3948307f72aa17066831884938d4787b1c32d3273e994082df4fe0f791b141 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_page'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'targetRow',name:'name1',dataType:'number'}},{T:1,N:'w2:key',A:{id:'numOfRowPerPage',name:'name2',dataType:'number'}},{T:1,N:'w2:key',A:{id:'numOfIndexPerPage',name:'name3',dataType:'number'}},{T:1,N:'w2:key',A:{id:'currentPage',name:'name4',dataType:'number'}},{T:1,N:'w2:key',A:{id:'totalPage',name:'name5',dataType:'number'}},{T:1,N:'w2:key',A:{id:'totalRecords',name:'name6',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_pageOut'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'targetRow',name:'name1',dataType:'number'}},{T:1,N:'w2:key',A:{id:'numOfRowPerPage',name:'name2',dataType:'number'}},{T:1,N:'w2:key',A:{id:'numOfIndexPerPage',name:'name3',dataType:'number'}},{T:1,N:'w2:key',A:{id:'currentPage',name:'name4',dataType:'number'}},{T:1,N:'w2:key',A:{id:'totalPage',name:'name5',dataType:'number'}},{T:1,N:'w2:key',A:{id:'totalRecords',name:'name6',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'lodeptCd',name:'물류부서코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'occptypeCd',name:'직종코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'사번',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'copCoClntNo',name:'협력업체거래처번호',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'lubCd',name:'분회코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'partyCd',name:'partyCd',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'chkRetireYn',name:'chkRetireYn',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'staffNo',name:'사번',dataType:'text',length:'255',defaultValue:'',encYN:'',nullYN:''}},{T:1,N:'w2:key',A:{id:'employeeNumber',name:'사번',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_dupYn'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'employeeNumber',name:'사번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'ssn',name:'주민등록번호',dataType:'text',length:'4000'}},{T:1,N:'w2:column',A:{id:'ssn1',name:'주민등록번호',dataType:'text',length:'4000'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급코드',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급명',dataType:'text',length:'30'}},{T:1,N:'w2:column',A:{id:'salclass',name:'호봉',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'직종코드명',dataType:'text',length:'300'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세직종코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm',name:'상세직종코드명',dataType:'text',length:'300'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text',length:'7'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'entDt',name:'입사일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'retireDt',name:'퇴사일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'houseTelNo',name:'자택전화번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'연락처',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'lubCd',name:'분회코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'lubNm',name:'분회명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'partyCd',name:'반코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'partyNm',name:'반명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'chiefYn',name:'반장여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'apprenticeYn',name:'신입여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'salYn',name:'급여여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'sal',name:'급여',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'daypayAmt',name:'일당금액',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',length:'70'}},{T:1,N:'w2:column',A:{id:'servCtrtTmnYn',name:'용역계약해지여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'hdofficeCtrtDrtYn',name:'본사계약직여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'fixedSalYn',name:'고정급여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'adptStDt',name:'적용시작일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'extdScRt',name:'연장할증율',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'offDayScRt',name:'휴일할증률',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'trffcCost',name:'trffcCost',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'dayFood',name:'주간식대',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'ngtFood',name:'야간식대',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'pyDdDayDaypayAmt',name:'평일주간일당금액',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'pyDdNgtDaypayAmt',name:'평일야간일당금액',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'offDayDayDaypayAmt',name:'휴일주간일당금액',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'offDayNgtDaypayAmt',name:'휴일야간일당금액',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'ntnalPensionAdptYn',name:'국민연금적용여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'fixedArrangeYn',name:'고정배치여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'refNo',name:'PALLETIZING 번호',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text',length:'30'}},{T:1,N:'w2:column',A:{id:'acntNo',name:'계좌번호',dataType:'text',length:'30'}},{T:1,N:'w2:column',A:{id:'address',name:'주소',dataType:'text',length:'500'}},{T:1,N:'w2:column',A:{id:'liaisonYn',name:'연락원여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'liaisonAmtRt',name:'연락원금액계산비율',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'jsNm',name:'',dataType:'text',length:'5'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'ssn',name:'주민등록번호',dataType:'text',length:'4000'}},{T:1,N:'w2:column',A:{id:'ssn1',name:'주민등록번호',dataType:'text',length:'4000'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'직종코드명',dataType:'text',length:'300'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세직종코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm',name:'상세직종코드명',dataType:'text',length:'300'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text',length:'7'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'entDt',name:'입사일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'retireDt',name:'퇴사일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'houseTelNo',name:'자택전화번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'연락처',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'lubCd',name:'분회코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'lubNm',name:'분회명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'partyCd',name:'반코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'partyNm',name:'반명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'chiefYn',name:'반장여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'apprenticeYn',name:'신입여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'salYn',name:'급여여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'sal',name:'급여',dataType:'number',length:'13'}},{T:1,N:'w2:column',A:{id:'daypayAmt',name:'일당금액',dataType:'number',length:'13'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',length:'70'}},{T:1,N:'w2:column',A:{id:'servCtrtTmnYn',name:'용역계약해지여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'hdofficeCtrtDrtYn',name:'본사계약직여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'adptStDt',name:'적용시작일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직급코드',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'ntnalPensionAdptYn',name:'국민연금적용여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'fixedSalYn',name:'고정급여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'pyDdDayDaypayAmt',name:'평일주간일당금액',dataType:'number',length:'13'}},{T:1,N:'w2:column',A:{id:'pyDdNgtDaypayAmt',name:'평일야간일당금액',dataType:'number',length:'13'}},{T:1,N:'w2:column',A:{id:'offDayDayDaypayAmt',name:'휴일주간일당금액',dataType:'number',length:'13'}},{T:1,N:'w2:column',A:{id:'offDayNgtDaypayAmt',name:'휴일야간일당금액',dataType:'number',length:'13'}},{T:1,N:'w2:column',A:{id:'dayFood',name:'주간식대',dataType:'number',length:'13'}},{T:1,N:'w2:column',A:{id:'ngtFood',name:'야간식대',dataType:'number',length:'13'}},{T:1,N:'w2:column',A:{id:'extdScRt',name:'연장할증율',dataType:'number',length:'5'}},{T:1,N:'w2:column',A:{id:'offDayScRt',name:'휴일할증률',dataType:'number',length:'5'}},{T:1,N:'w2:column',A:{id:'trffcCost',name:'trffcCost',dataType:'number',length:'5'}},{T:1,N:'w2:column',A:{id:'fixedArrangeYn',name:'고정배치여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'salclass',name:'호봉',dataType:'number',length:'2'}},{T:1,N:'w2:column',A:{id:'gubun',name:'상태값',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'refNo',name:'PALLETIZING 번호',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'acntNo',name:'계좌번호',dataType:'text',length:'30'}},{T:1,N:'w2:column',A:{id:'address',name:'주소',dataType:'text',length:'500'}},{T:1,N:'w2:column',A:{id:'liaisonYn',name:'연락원여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'liaisonAmtRt',name:'연락원금액계산비율',dataType:'number',length:'5'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_injr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'injrSeq',name:'공상순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partyLunionOrgCd',name:'반노조조직코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'injrStDt',name:'공상시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'injrEndDt',name:'공상종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dayJobHistoryYn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'historyYn',name:'이력여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dupYn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dupYn',name:'중복여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_salclass',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'number'}},{T:1,N:'w2:column',A:{id:'nm',name:'코드명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.RetrieveStaffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_page","key":"IN_DS1"},{"id":"dma_retrieve","key":"IN_DS2"},{"id":"dma_page","key":"OUT_DS1"},{"id":"ds_emp","key":"OUT_DS2"}]',target:'data:json,[{"id":"dma_page","key":"OUT_DS1"},{"id":"ds_emp","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ds.op.RetrieveStaffInjrInDutyHistoryCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',id:'sbm_injr',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,[{"id":"dma_retrieve2","key":"IN_DS1"},{"id":"ds_injr","key":"OUT_DS1"}]',replace:'',target:'data:json,{"id":"ds_injr","key":"OUT_DS1"}',style:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ds.op.RetrieveDayJobWorkerHistoryYnCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_dayJobHistoryYn_submitdone','ev:submiterror':'',id:'sbm_dayJobHistoryYn',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,[{"id":"dma_retrieve2","key":"IN_DS1"},{"id":"ds_dayJobHistoryYn","key":"OUT_DS1"}]',replace:'',style:'',target:'data:json,{"id":"ds_dayJobHistoryYn","key":"OUT_DS1"}'}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ds.op.RetrieveEmployeeNumberDuplicationYnCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_dupYn_submitdone','ev:submiterror':'',id:'sbm_dupYn',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,["dma_dupYn",{"id":"ds_dupYn","key":"OUT_DS1"}]',replace:'',style:'',target:'data:json,{"id":"ds_dupYn","key":"OUT_DS1"}'}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ds.op.SaveStaffCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveEmp_submitdone','ev:submiterror':'',id:'sbm_saveEmp',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,[{"id":"ds_emp2","key":"IN_DS1"},{"id":"ds_injr","key":"IN_DS2"},{"id":"ds_emp","key":"OUT_DS1"}]',replace:'',style:'',target:'data:json,{"id":"ds_emp","key":"OUT_DS1"}'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sortOption = null;
scwin.prevJobLevel = null;
scwin.prevDept = null;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.memInfo = $c.data.getMemInfo($p);
  scwin.gAll = true;
  scwin.gCd = "";
  scwin.gDtlOccptypeCd = "";
  scwin.gCmd = "";
  scwin.sRegId = ""; // 새로입력한 사번사용가능여부 > Y:중복첵크 사용가능,N:사용불가(중복) "":첵크안했음
  scwin.gDate = ""; //적용일자 체크용
  scwin.ssn = "";

  //화면제어
  gr_injr.setDisabled("grid", true);

  //호봉, 직원정보 hide
  txt_salclass.hide();
  ed_salclass.hide();
  tbl_empInfo.hide();
  pgl_pageList1.hide();
  scwin.f_default();
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableKeyData($p);
  ed_staffNo.setDisabled(true);
  ed_occptypeCd.setDisabled(true);
  $c.gus.cfDisableObjects($p, [btn_copCoClntNo, btn_lodeptCd, btn_partyCd, btn_lubCd, btn_detailPartyCd, btn_occpgrdCd, btn_wrkPlCd, btn_dtlOccptypeCd, btn_bankCd, btn_staffNo, chk_dayJobWorkerHistoryYn]);
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Modify, btn_Save, btn_Cancel, btn_addRow, btn_deleteRow, btn_cancelRow, btn_dayJobWorkerHistory]);
};

//-------------------------------------------------------------------------
// 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_default = function () {
  scwin.f_srchCMD("/ds.co.RetreiveLoBranCMD.do", "ds_joblevel");
  let info = {
    "nodeset": "data:ds_joblevel",
    "label": "lobranNm",
    "value": "lobranCd",
    "width": 50,
    "height": 200,
    "item": [{
      "ref": "lobranNm",
      "header": "label"
    }, {
      "ref": "lobranCd",
      "header": "value"
    }]
  };
  co_lc_srchJoblevel.setGridItemset(info);
  let params = {
    lobranCd: "OP160",
    empYn: "Y"
  };
  scwin.f_srchCMDOption(params, "/ds.co.RetreiveLubCMD.do", "ds_dept");
  occptypeCd.setNodeSet("data:ds_dept", "cdNm", "cd");
  occptypeCd.changeChooseOption("", "전체");
  ed_occptypeCd.setNodeSet("data:ds_dept", "cdNm", "cd");
  for (let i = 0; i <= 50; i++) {
    ds_salclass.insertRow(i);
    if (i == 0) {
      ds_salclass.setCellData(i, "cd", i);
      ds_salclass.setCellData(i, "nm", "내용없음");
    } else {
      ds_salclass.setCellData(i, "cd", i);
      ds_salclass.setCellData(i, "nm", i + "호봉");
    }
  }
  let options = {};
  options.sortIndex = "cd";
  options.sortOrder = "1";
  ds_salclass.multisort(options);
};
scwin.f_srchCMD = function (url, dsName) {
  //submission 동적 생성 
  let sbmOption = {
    id: dsName,
    action: url,
    isProcessMsg: false
  };
  $c.sbm.executeDynamic($p, sbmOption).then(e => {
    if (e.responseJSON.resultDataSet[0].Code < 0) {
      return;
    }

    //dataList 동적 생성 
    const dcoptions = {
      baseNode: "list",
      repeatNode: "map",
      saveRemovedData: "true"
    };
    let dsKeys = Object.keys(e.responseJSON.GAUCE[0]);
    let dsId = [],
      dsType = [];
    for (let i = 0; i < dsKeys.length; i++) {
      dsId.push(dsKeys[i]);
      dsType.push("text");
    }
    $c.data.createDataList($p, dsName, dsId, dsType, dcoptions);
    $c.util.getComponent($p, dsName).setJSON(e.responseJSON.GAUCE);
  });
};
scwin.f_srchCMDOption = function (params, url, dsName) {
  let dmaName = "dma_srch" + dsName.split("_")[1];
  if (params != null) {
    //조회용 datamap 생성
    let paramKey = Object.keys(params);
    let paramVal = Object.values(params);
    let dmaId = [],
      dmaValue = [],
      dmaType = [];
    for (let i = 0; i < paramKey.length; i++) {
      dmaId.push(paramKey[i]);
      dmaValue.push(paramVal[i]);
      dmaType.push("text");
    }
    $c.data.createDataMap($p, dmaName, dmaId, dmaType);

    //조회용 datamap에 값 설정 
    for (let i = 0; i < paramKey.length; i++) {
      $c.util.getComponent($p, dmaName).setJSON(params);
    }
  }

  //submission 동적 생성 
  let sbmOption = {
    id: dsName,
    action: url,
    isProcessMsg: false
  };
  if (params != null) {
    $c.sbm.executeDynamic($p, sbmOption, $c.util.getComponent($p, dmaName).getJSON()).then(e => {
      if (e.responseJSON.resultDataSet[0].Code < 0) {
        return;
      }

      //dataList 동적 생성 
      const dcoptions = {
        baseNode: "list",
        repeatNode: "map",
        saveRemovedData: "true"
      };
      let dsKeys = Object.keys(e.responseJSON.GAUCE[0]);
      let dsId = [],
        dsType = [];
      for (let i = 0; i < dsKeys.length; i++) {
        dsId.push(dsKeys[i]);
        dsType.push("text");
      }
      $c.data.createDataList($p, dsName, dsId, dsType, dcoptions);
      $c.util.getComponent($p, dsName).setJSON(e.responseJSON.GAUCE);
    });
  }
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ed_dept_01.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["사업부서"]);
    ed_dept_01.focus();
    return;
  }
  if (ed_dept_02.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["사업부서"]);
    ed_dept_02.focus();
    return;
  }

  //화면제어 
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableObjects($p, [btn_copCoClntNo, btn_lodeptCd, btn_partyCd, btn_lubCd, btn_detailPartyCd, btn_occpgrdCd, btn_wrkPlCd, btn_dtlOccptypeCd, btn_bankCd]);
  gr_emp.setDisabled("grid", false);
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify]);
  $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel, btn_addRow, btn_deleteRow, btn_cancelRow]);
  await scwin.f_MoveToPage(pgl_pageList1.getSelectedIndex() - 1);
};

// 조회(페이지이동)
scwin.f_MoveToPage = async function (targetRow) {
  scwin.sortOption = null;
  if (ds_emp.sortStatusArr?.length) {
    let sortIndex = [];
    let sortOrder = [];
    for (let info of ds_emp.sortStatusArr) {
      sortIndex.push(info.colID);
      sortOrder.push(info.sortOrder.toString());
    }
    scwin.sortOption = {
      "sortIndex": sortIndex.join(" "),
      "sortOrder": sortOrder.join(" ")
    };
  }
  if (scwin.prevJobLevel !== co_lc_srchJoblevel.getValue() || scwin.prevDept !== ed_dept_01.getValue()) {
    scwin.prevJobLevel = co_lc_srchJoblevel.getValue();
    scwin.prevDept = ed_dept_01.getValue();
    targetRow = 0;
  }
  dma_page.set("targetRow", targetRow * 300 + 1);
  let e = await $c.sbm.execute($p, sbm_retrieve);
  await scwin.sbm_retrieve_submitdone(e);
};
scwin.f_retrieveInjr = async function () {
  dma_retrieve2.set("staffNo", ed_staffNo.getValue());
  await $c.sbm.execute($p, sbm_injr);
};
scwin.f_dayJobWorkerHistoryYn = function () {
  dma_retrieve2.set("employeeNumber", ed_staffNo.getValue());
  ds_dayJobHistoryYn.removeAll();
  ds_dayJobHistoryYn.reform();
  $c.sbm.execute($p, sbm_dayJobHistoryYn);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  let row = ds_injr.insertRow();
  ds_injr.setCellData(row, "staffNo", ed_staffNo.getValue());
  ds_injr.setCellData(row, "staffNm", ed_staffNm.getValue());
  ds_injr.setCellData(row, "partyLunionOrgCd", ed_detailPartyCd.getValue());
  //ds_injr.ColSelect = "true";
  gr_injr.setFocusedCell(row, gr_emp.getFocusedColumnIndex() ?? 0);
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  let row = ds_emp.insertRow();
  gr_emp.setFocusedCell(row, gr_emp.getFocusedColumnIndex() ?? 0);
  ed_ssn.setValue("");
  ds_emp.setCellData(row, "salclass", "0");
  ds_emp.setCellData(row, "jsNm", co_lc_srchJoblevel.getValue());
  ds_emp.setCellData(row, "occptypeCd", occptypeCd.getValue());
  ds_emp.setCellData(row, "dtloccptypeCd", ds_emp.getCellData(row - 1, "dtloccptypeCd"));
  const cols = ["chiefYn", "apprenticeYn", "salYn", "sal", "daypayAmt", "servCtrtTmnYn", "hdofficeCtrtDrtYn", "ntnalPensionAdptYn", "fixedSalYn", "pyDdDayDaypayAmt", "pyDdNgtDaypayAmt", "offDayDayDaypayAmt", "offDayNgtDaypayAmt", "dayFood", "ngtFood", "extdScRt", "offDayScRt", "trffcCost", "fixedArrangeYn", "salclass", "liaisonYn", "liaisonAmtRt"];
  for (let colid of cols) {
    ds_emp.setCellData(row, colid, "0");
  }

  //화면제어
  btn_staffNo.show("");
  $c.gus.cfEnableObjects($p, [ed_occptypeCd, ed_staffNo, btn_staffNo]);
  scwin.f_salYn_click(); //월급제여부

  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel]);
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Modify]);
  $c.gus.cfEnableObjects($p, [btn_copCoClntNo, btn_lodeptCd, btn_partyCd, btn_lubCd, btn_detailPartyCd, btn_occpgrdCd, btn_wrkPlCd, btn_dtlOccptypeCd, btn_bankCd]);
  scwin.f_salYn_click();
  scwin.gCmd = "C";
  gr_emp.setDisabled("grid", true);
  ds_injr.removeAll();
  ds_injr.reform();
  ed_dtlOccptypeCd.setValue("");
  ed_dtlOccptypeNm.setValue("");
  ed_staffNo.setAllowChar("0-9");
  scwin.f_displayFunction(scwin.gCmd);
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = async function () {
  if (ds_emp.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
    return;
  }

  //화면제어
  $c.gus.cfDisableObjects($p, [ed_staffNo, ed_occptypeCd]);
  ed_staffNo.setAllowChar("0-9a-zA-Z"); //신규인 경우 사번은 숫자만 입력가능하다;

  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableObjects($p, [btn_copCoClntNo, btn_lodeptCd, btn_partyCd, btn_lubCd, btn_detailPartyCd, btn_occpgrdCd, btn_wrkPlCd, btn_dtlOccptypeCd, btn_bankCd]);
  $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_addRow, btn_deleteRow, btn_cancelRow]);
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Modify]);
  ed_staffNm.focus();
  scwin.gDate = ed_adptStDt.getValue();
  gr_emp.setDisabled("grid", true);
  gr_injr.setDisabled("grid", false);
  gr_injr.setReadOnly("column", "staffNo", true);
  gr_injr.setReadOnly("column", "staffNm", true);
  gr_injr.setReadOnly("column", "partyLunionOrgCd", true);
  scwin.f_salYn_click();
  scwin.gCmd = "U";
  scwin.f_displayFunction(scwin.gCmd);
  scwin.f_enable(gr_emp.getFocusedRowIndex());
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  let row = gr_emp.getFocusedRowIndex();
  $c.gus.cfDisableKeyData($p);
  gr_emp.setDisabled("grid", false);
  scwin.undoAll(ds_emp);
  scwin.undoAll(ds_injr);
  $c.gus.cfDisableObjects($p, [btn_copCoClntNo, btn_lodeptCd, btn_partyCd, btn_lubCd, btn_detailPartyCd, btn_occpgrdCd, btn_wrkPlCd, btn_dtlOccptypeCd, btn_bankCd, btn_staffNo]);
  $c.gus.cfDisableObjects($p, [ed_staffNo, ed_occptypeCd]);
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify]);
  $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel, btn_addRow, btn_deleteRow, btn_cancelRow]);
  ed_staffNo.setAllowChar("0-9a-zA-Z");
  scwin.ssn = "";
  scwin.gCmd = "";
  if (row >= ds_emp.getRowCount()) {
    row = 0;
  }
  gr_emp.setFocusedCell(row, 0);
  scwin.f_displayFunction();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_emp.getRowCount() == 0) {
    return;
  }

  //변경한 데이터가 있는지 체크한다.
  if (!$c.data.isModified($p, ds_emp) && !$c.data.isModified($p, ds_injr)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["외부하역인원"]);
    return;
  }
  if (scwin.gCmd == "C") {
    if (ed_occptypeCd.getValue() == "02") {
      if ($c.util.isEmpty($p, ed_staffNo.getValue())) {
        await $c.win.alert($p, "사번은(는) 필수 입력 항목입니다.");
        return;
      }
      if (scwin.sRegId == "N") {
        await $c.win.alert($p, "이미 등록되어있는 사번입니다.");
        return;
      } else if (scwin.sRegId == "") {
        await $c.win.alert($p, "사원번호 중복확인을 해주시기 바랍니다.");
        return;
      }
    }
  }

  //validation 체크
  if (ed_staffNm.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["사원명"]);
    ed_staffNm.focus();
    return;
  }
  if (ed_occptypeCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["직종"]);
    ed_occptypeCd.focus();
    return;
  }
  if (ed_dtlOccptypeCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["세부직종"]);
    ed_dtlOccptypeCd.focus();
    return;
  }
  if (ed_dtlOccptypeNm.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["세부직종"]);
    ed_dtlOccptypeCd.focus();
    return;
  }

  // 소속업체를 항운노조나 계약직이 아닌 경우는 입력
  if (ed_copCoClntNo.getValue() == "" && ed_occptypeCd.getValue() != "05" && ed_occptypeCd.getValue() != "02" && ed_occptypeCd.getValue() != "03") {
    await $c.win.alert($p, "소속업체를 입력하십시오.");
    ed_copCoClntNo.focus();
    return;
  }
  if (ed_copCoClntNm.getValue() == "" && ed_occptypeCd.getValue() != "05" && ed_occptypeCd.getValue() != "02" && ed_occptypeCd.getValue() != "03") {
    await $c.win.alert($p, "소속업체를 입력하십시오.");
    ed_clntNm.focus();
    return;
  }

  //입사일자
  if (ed_entDt.getValue() != "") {
    if (!(await $c.gus.cfValidate($p, [ed_entDt]))) {
      return;
    }
  }
  if (ed_entDt.getValue() == "") {
    await $c.win.alert($p, "입사날짜를  입력해주세요");
    return;
  }
  if (ed_lodeptCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["사업부서"]);
    ed_lodeptCd.focus();
    return;
  }
  if (ed_lodeptNm.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["사업부서"]);
    ed_lodeptNm.focus();
    return;
  }
  if (ed_occptypeCd.getValue() == "05" && ed_detailPartyCd.getValue() == "") {
    await $c.win.alert($p, "직종이 항운노조인 경우, 반입력은 필수입니다");
    ed_detailPartyCd.focus();
    return;
  }
  if (ck_chiefYn.getValue() == "1" && ck_apprenticeYn.getValue() == "1") {
    await $c.win.alert($p, "반장여부와 신입여부를 동시에 체크할 수 없습니다.");
    return;
  }
  if (ed_occptypeCd.getValue() == "05" && ed_dtlOccptypeCd.getValue() == "12" && ed_wrkPlCd.getValue() == "6F02") {
    //항운노조/동부감만CFS;
    if (ed_salclass.getValue() == "0") {
      await $c.win.alert($p, "호봉(1~25)을 입력하십시오");
      ed_salclass.focus();
      return;
    }
  }
  if (ck_salYn.getValue() === "Y") {
    if (ed_sal.getValue() == "" || ed_sal.getValue() == "0" || eval(ed_sal.getValue()) < 0) {
      await $c.win.alert($p, "월급여액을 입력하십시오.");
      return;
    }
  } else if (ck_salYn.getValue() == "N") {
    if (ed_daypayAmt.getValue() == "" || ed_daypayAmt.getValue() == "0" || eval(ed_daypayAmt.getValue()) < 0) {
      await $c.win.alert($p, "일당금액을 입력하십시오.");
      return;
    }
  }
  //적용일자 mandatory=true 적용 안됨
  if (ed_adptStDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["적용일자"]);
    ed_adptStDt.focus();
    return;
  }

  //퇴사일자
  if (ed_retireDt.getValue() != "") {
    if (!(await $c.gus.cfValidate($p, [ed_retireDt]))) {
      return;
    }

    //입사일자
    if (ed_entDt.getValue() != "") {
      chkVal = await $c.gus.cfValidate($p, [ed_entDt]);
      if (!ed_entDt) {
        return;
      }
      if (ed_retireDt.getValue() < ed_entDt.getValue()) {
        await $c.win.alert($p, "퇴사일자는 입사일자 이후 이어야 합니다.");
        ed_retireDt.focus();
        return;
      }
    }
  }

  // 공상 내역 일자 체크
  if (!(await $c.gus.cfValidate($p, [gr_injr], null, true))) {
    return;
  }
  if ($c.data.isModified($p, ds_injr)) {
    for (let i = 0; i < ds_injr.getRowCount(); i++) {
      if (ds_injr.getCellData(i, "injrStDt") != "" && ds_injr.getCellData(i, "injrEndDt") != "") {
        if (ds_injr.getCellData(i, "injrStDt") > ds_injr.getCellData(i, "injrEndDt")) {
          await $c.win.alert($p, "공상내역의 " + (i + 1) + "번째 행의 공상 종료일자는 공상 시작일자 이후여야 합니다.");
          return false;
        }
      }
    }
  }
  ds_emp2.removeAll();
  ds_emp2.reform();
  let row = 0;
  let data = ds_emp.getRowJSON(gr_emp.getFocusedRowIndex());
  ds_emp2.insertJSON(row, [data]);

  // SysStatus: 0 Normal  1 Insert 2 Delete 3 Update4 Logical
  // UserStatus:1 Insert 2 Delete

  if (!(await $c.gus.cfValidate($p, [ed_adptStDt]))) {
    return;
  }
  if (ds_emp.getRowStatus(ds_emp.getRowPosition()) == "C") {
    ds_emp2.setCellData(row, "gubun", "C");
  } else if (ds_emp.getRowStatus(ds_emp.getRowPosition()) == "U") {
    ds_emp2.setCellData(row, "gubun", "U");
    if (ed_adptStDt.getValue() < scwin.gDate) {
      await $c.win.alert($p, "적용일자는 이전 적용일자 [" + scwin.gDate + "] 이후 날짜로 입력하셔야 합니다.");
      return;
    }
  } else if (ds_emp.getRowStatus(ds_emp.getRowPosition()) == "D") {
    ds_emp2.modifyRowStatus(row, "D");
    ds_emp2.setCellData(row, "gubun", "D");
  }
  if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) {
    scwin.f_Cancel();
    return;
  }
  if (ck_fixedArrangeYn.getValue() == "1") {
    ds_emp2.setCellData(row, "fixedArrangeYn", "1");
  } else {
    ds_emp2.setCellData(row, "fixedArrangeYn", "0");
  }
  if (ck_liaisonYn.getValue() == "1") {
    ds_emp2.setCellData(row, "liaisonYn", "1");
  } else {
    ds_emp2.setCellData(row, "liaisonYn", "0");
  }
  $c.sbm.execute($p, sbm_saveEmp);
};

//-------------------------------------------------------------------------
// 공통팝업호출
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);
  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    await scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    await scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let lodeptCd = co_lc_srchJoblevel.getValue();
  let paramList = "";
  switch (disGubun) {
    case 1:
      //조회영역 부서
      udc_dept_01.cfCommonPopUp(scwin.callBackDept01, pCode, pName, pClose, null, null, null, null, lodeptCd, null, null, null, null);
      break;
    case 2:
      //조회영역 작업장  			
      paramList = "," + lodeptCd + ",7";
      udc_works_01.cfCommonPopUp(scwin.callBackWorks01, pCode, pName, pClose, null, null, null, null, paramList, null, null, null, null);
      break;
    case 3:
      //조회영역 소속업체
      udc_dept_03.cfCommonPopUp(scwin.callBackDept03, pCode, pName, pClose, null, null, null, null, "05", null, null, null, null, null, null, "소속업체,소속코드,소속명"); //소속업체
      break;
    case 4:
      //조회영역 사원
      if (ed_dept_01.getValue() == "") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["사업부서"]);
        ed_dept_01.focus();
        return;
      }
      if (ed_dept_02.getValue() == "") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["사업부서"]);
        ed_dept_02.focus();
        return;
      }
      if (co_lc_srchJoblevel.getValue() == "4AA") {
        chk_includeRetireYn.setValue("1");
      }
      paramList = ed_dept_01.getValue() + "," + (chk_includeRetireYn.getValue() == "1" ? "1" : "0");
      udc_emp_01.cfCommonPopUp(scwin.callBackEmp01, pCode, pName, pClose, 5, "외부인원코드,외부인원명,소속점소,소속작업장,퇴사여부,,칼럼7", "100,100,100,150,200,100,100,100,100,300", "5,6,8,9,10", paramList, null, null, null, null);
      break;
    case 5:
      //정보영역 소속업체
      udc_copCoClntNo.cfCommonPopUp(scwin.callBackClnt, pCode, pName, pClose, null, null, null, null, "05", null, null, null, null, null, null, "소속업체,소속코드,소속명"); // 소속업체2
      break;
    case 6:
      //정보영역 부서
      lodeptCd = null;
      udc_lodeptCd.cfCommonPopUp(scwin.callBackLodept, pCode, pName, pClose, null, null, null, null, lodeptCd, null, null, null, null); // 부서
      break;
    case 7:
      //정보영역 작업장
      paramList = "," + lodeptCd + ",7";
      udc_wrkPlCd.cfCommonPopUp(scwin.callBackWrkPl, pCode, pName, pClose, null, null, null, null, paramList, null, null, null, null); // 작업장2
      break;
    case 8:
      //조회영역 반	    	
      udc_partyCd.cfCommonPopUp(scwin.callBackParty, pCode, pName, pClose, null, null, null, null, lodeptCd, null, null, null, null); // 노임(반)
      break;
    case 9:
      //정보영역 반
      udc_detailPartyCd.cfCommonPopUp(scwin.callBackDetailParty, pCode, pName, pClose, null, null, null, null, lodeptCd, null, null, null, null); // 노임(반)
      break;
    case 10:
      //조회영역 분회
      udc_lubCd.cfCommonPopUp(scwin.callBackLub, pCode, pName, pClose, null, null, null, null, lodeptCd, null, null, null, null); // 분회
      break;
    case 11:
      //정보영역 직급
      udc_occpgrdCd.cfCommonPopUp(scwin.callBackOccp, pCode, pName, pClose, null, null, null, null, null, null, null, null, null); //직급
      break;
    case 12:
      //정보영역 상세직종
      let param = ed_occptypeCd.getValue();
      if (param == "") {
        await $c.win.alert($p, "직종을 먼저 선택하십시오.");
        ed_occptypeCd.focus();
        return;
      }
      udc_dtlOccptypeCd.cfCommonPopUp(scwin.callBackDtlOccp, pCode, pName, pClose, null, null, null, null, param, null, null, null, null); //직급
      break;
    case 13:
      //정보영역 은행
      udc_bankCd.cfCommonPopUp(scwin.callBackBank, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", null, null);
      break;
    default:
      return;
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
//조회영역 부서
scwin.callBackDept01 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dept_01, ed_dept_02);
};

//조회영역 작업장  	
scwin.callBackWorks01 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_works_01, ed_works_02);
};

//조회영역 소속업체
scwin.callBackDept03 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dept_03, ed_dept_04);
};

//조회영역 사원
scwin.callBackEmp01 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_emp_01, ed_emp_02);
};

//정보영역 소속업체
scwin.callBackClnt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_copCoClntNo, ed_copCoClntNm);
};

//정보영역 부서
scwin.callBackLodept = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lodeptCd, ed_lodeptNm);
};

//정보영역 작업장
scwin.callBackWrkPl = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, ed_wrkPlNm);
};

//조회영역 반
scwin.callBackParty = function (rtnList) {
  if (rtnList == null || rtnList[0] == 'N/A') {
    ed_partyCd.setValue("");
    ed_partyNm.setValue("");
  } else {
    ed_partyCd.setValue(rtnList[2]);
    ed_partyNm.setValue(rtnList[3]);
  }
};

//정보영역 반
scwin.callBackDetailParty = function (rtnList) {
  if (rtnList == null || rtnList[0] == 'N/A') {
    ed_detailPartyCd.setValue("");
    ed_detailPartyNm.setValue("");
  } else {
    ed_detailPartyCd.setValue(rtnList[2]);
    ed_detailPartyNm.setValue(rtnList[3]);
  }
};

//조회영역 분회
scwin.callBackLub = function (rtnList) {
  if (rtnList == null || rtnList[0] == 'N/A') {
    ed_lubCd.setValue("");
    ed_lubNm.setValue("");
  } else {
    ed_lubCd.setValue(rtnList[2]);
    ed_lubNm.setValue(rtnList[3]);
  }
};

//정보영역 직급
scwin.callBackOccp = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_occpgrdCd, ed_occpgrdNm);
};

//정보영역 상세직종
scwin.callBackDtlOccp = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dtlOccptypeCd, ed_dtlOccptypeNm);
};

//정보영역 은행
scwin.callBackBank = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bankCd, ed_bankNm);
};

//-------------------------------------------------------------------------
// 일용직 이력조회 팝업
//-------------------------------------------------------------------------
scwin.f_DayJobWorkerHistory = function () {
  let data = {
    empNo: ed_staffNo.getValue()
  };
  let opts = {
    id: "op_103_02_04b",
    popupName: "일용직이력조회",
    modal: true,
    type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    ,

    width: 550,
    height: 450
  };
  $c.win.openPopup($p, "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_02_04b.xml", opts, data);
};

//-------------------------------------------------------------------------
// 월급제여부 선택
//-------------------------------------------------------------------------
scwin.f_salYn_click = function () {
  if (ck_salYn.getValue() == "1") {
    ed_daypayAmt.setValue("0");
    ed_sal.show("");
    ed_daypayAmt.hide();
  } else {
    ed_sal.setValue("0");
    ed_sal.hide();
    ed_daypayAmt.show("");
  }
  scwin.f_enable(gr_emp.getFocusedRowIndex());
};

//-------------------------------------------------------------------------
// 컴포넌트 Display
//-------------------------------------------------------------------------
scwin.f_enable = function (row) {
  if (row < 0) {
    return;
  }
  if (ds_emp.getCellData(row, "occptypeCd") == "03" || ds_emp.getCellData(row, "occptypeCd") == "04") {
    grp_serv.show("");
  } else {
    grp_serv.hide();
  }
  if (ds_emp.getCellData(row, "occptypeCd") == "05") {
    grp_injr.show("");
  } else {
    grp_injr.hide();
  }
  if (co_lc_srchJoblevel.getValue() == "4AA" && ds_emp.getCellData(row, "occptypeCd") == "03") {
    tbl_empInfo.show("");
  } else {
    tbl_empInfo.hide();
  }
  if (btn_Modify.getDisabled()) {
    ed_extdScRt.setDisabled(false);
    ed_offDayScRt.setDisabled(false);
    ed_pyDdDayDaypayAmt.setDisabled(false);
    ed_pyDdNgtDaypayAmt.setDisabled(false);
    ed_offDayDayDaypayAmt.setDisabled(false);
    ed_offDayNgtDaypayAmt.setDisabled(false);
    ed_dayFood.setDisabled(false);
    ed_ngtFood.setDisabled(false);
    if (ds_emp.getCellData(row, "salYn") == "0") {
      ed_extdScRt.setDisabled(true);
      ed_offDayScRt.setDisabled(true);
      ed_extdScRt.setValue("0");
      ed_offDayScRt.setValue("0");
    } else {
      ed_pyDdDayDaypayAmt.setDisabled(true);
      ed_pyDdNgtDaypayAmt.setDisabled(true);
      ed_offDayDayDaypayAmt.setDisabled(true);
      ed_offDayNgtDaypayAmt.setDisabled(true);
      ed_pyDdDayDaypayAmt.setValue("0");
      ed_pyDdNgtDaypayAmt.setValue("0");
      ed_offDayDayDaypayAmt.setValue("0");
      ed_offDayNgtDaypayAmt.setValue("0");
    }
  }
};
scwin.f_salclass = function (row) {
  if (ds_emp.getCellData(row, "occptypeCd") == "05") {
    //호봉 
    txt_salclass.show("");
    ed_salclass.show("");
  } else {
    txt_salclass.hide();
    ed_salclass.hide();
  }
  if (ds_emp.getCellData(row, "occptypeCd") == "03") {
    //직원정보
    tbl_empInfo.show("");
  } else {
    tbl_empInfo.hide();
  }
};

//-------------------------------------------------------------------------
// Foramtter
//-------------------------------------------------------------------------
scwin.f_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  let colId = gr_emp.getColumnID(colIndex);
  if (colId == "chiefYn" || colId == "apprenticeYn") {
    return $c.gus.decode($p, data, 0, "N", 1, "Y");
  }
};

//-------------------------------------------------------------------------
// undoAll
//-------------------------------------------------------------------------
scwin.undoAll = function (dltObj) {
  dltObj.setBroadcast(false);
  for (let idx = dltObj.getRowCount() - 1; idx >= 0; --idx) {
    if (dltObj.getRowStatus(idx) == "C") {
      dltObj.removeRow(idx);
    } else {
      dltObj.undoRow(idx);
    }
  }
  dltObj.setBroadcast(true, true);
};

//페이징 갯수 세팅
scwin.setPageListCount = function (totrowcnt) {
  let cnt = Number(totrowcnt) / dma_pageOut.get("numOfRowPerPage");
  cnt = Math.ceil(cnt);
  if (pgl_pageList1.getCount() !== cnt) {
    pgl_pageList1.setCount(cnt);
  }
  pgl_pageList1.setValue(dma_page.get('currentPage'));
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//외부하역인원 조회
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  }
  dma_pageOut.setJSON(e.responseJSON.IN_DS1[0]);
  let rowCnt = ds_emp.getRowCount();
  spn_totalRowEmp.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
    pgl_pageList1.setCount(1, false);
    pgl_pageList1.setDisabled(true);
  } else {
    pgl_pageList1.show("");
    pgl_pageList1.setDisabled(false);
    scwin.setPageListCount(dma_pageOut.get("totalRecords"));
    scwin.gCd = ds_emp.getCellData(0, "occptypeCd");
    scwin.gDtlOccptypeCd = ds_emp.getCellData(0, "dtlOccptypeCd");
    scwin.f_enable(0);
  }
  $c.util.setTimeout($p, async function () {
    if (scwin.sortOption) {
      ds_emp.multisort(scwin.sortOption);
      scwin.f_salclass(0);
      gr_emp.setFocusedCell(0, gr_emp.getFocusedColumnIndex() ?? 0);
      scwin.f_displayFunction();
      await scwin.f_retrieveInjr();
      scwin.f_dayJobWorkerHistoryYn();
    }
  }, {
    delay: 20
  });
  scwin.f_salclass(0);
  gr_emp.setFocusedCell(0, gr_emp.getFocusedColumnIndex() ?? 0);
  scwin.f_displayFunction();
  await scwin.f_retrieveInjr();
  scwin.f_dayJobWorkerHistoryYn();
};

//일용직이력여부 조회
scwin.sbm_dayJobHistoryYn_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  }
  if (ds_dayJobHistoryYn.getCellData(0, "historyYn") == 'T') {
    chk_dayJobWorkerHistoryYn.setValue("1");
    $c.gus.cfEnableBtnOnly($p, [chk_dayJobWorkerHistoryYn]);
  } else {
    chk_dayJobWorkerHistoryYn.setValue("0");
    $c.gus.cfDisableBtnOnly($p, [chk_dayJobWorkerHistoryYn]);
  }
};

//사원번호 중복 조회
scwin.sbm_dupYn_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  }
  let rowCnt = ds_dupYn.getRowCount();
  if (rowCnt > 0) {
    if (ds_dupYn.getCellData(0, "dupYn") == "Y") {
      await $c.win.alert($p, "이미 등록된 사번입니다.");
      scwin.sRegId = "N";
    } else {
      await $c.win.alert($p, "등록 가능한 사번입니다.");
      scwin.sRegId = "Y";
    }
  }
};

//저장
scwin.sbm_saveEmp_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code >= 0) {
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableObjects($p, [btn_copCoClntNo, btn_lodeptCd, btn_partyCd, btn_lubCd, btn_detailPartyCd, btn_occpgrdCd, btn_wrkPlCd, btn_dtlOccptypeCd, btn_bankCd]);
    $c.gus.cfDisableBtn($p, [btn_Save]);
    await scwin.f_Retrieve();
    await scwin.f_retrieveInjr();
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001, [""]);
  }
  ed_staffNo.setDisabled(true);
  ed_staffNo.setAllowChar("0-9a-zA-Z");
  ed_occptypeCd.setDisabled(true);
  scwin.sRegId = "";
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Save, btn_Cancel]);
  $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel, btn_addRow, btn_deleteRow, btn_cancelRow]);
  gr_emp.setDisabled("grid", false);
  scwin.gCmd = "";
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//직종 > 분회, 반 변경 
scwin.occptypeCd_onchange = function (info) {
  if (info.newValue == "05") {
    tb_lub.show("");
    tb_party.show("");
  } else {
    tb_lub.hide();
    tb_party.hide();
  }
};

//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};

//점소 항목 변경 > 사업부서 값 적용
scwin.co_lc_srchJoblevel_onchange = function (info) {
  if (info.oldValue == null) {
    co_lc_srchJoblevel.setValue(scwin.memInfo.loUpperLobranCd);
  }
  ed_dept_01.setValue(info.newValue);
  ed_dept_02.setValue(co_lc_srchJoblevel.getText(true));
  ed_works_01.setValue("");
  ed_works_02.setValue("");
  ed_lodeptCd.setValue("");
  ed_lodeptNm.setValue("");
  ed_wrkPlCd.setValue("");
  ed_wrkPlNm.setValue("");
};

//조회영역 사업부서 찾기 버튼
scwin.udc_dept_01_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(1, ed_dept_01.getValue(), ed_dept_02.getValue(), 'F', 'F');
};
scwin.udc_dept_01_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_dept_01, ed_dept_02, 1);
};
scwin.udc_dept_01_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_dept_02, ed_dept_01, 1, false);
};

//조회영역 성명 찾기 버튼 
scwin.udc_emp_01_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(4, ed_emp_01.getValue(), ed_emp_02.getValue(), 'F', 'F');
};
scwin.udc_emp_01_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_emp_01, ed_emp_02, 4);
};
scwin.udc_emp_01_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_emp_02, ed_emp_01, 4, false);
};

//조회영역 분회 찾기 버튼
scwin.udc_lubCd_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(10, ed_lubCd.getValue(), ed_lubNm.getValue(), 'F', 'F');
};
scwin.udc_lubCd_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_lubCd, ed_lubNm, 10);
};
scwin.udc_lubCd_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_lubNm, ed_lubCd, 10, false);
};

//조회영역 작업장 찾기 버튼
scwin.udc_works_01_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(2, ed_works_01.getValue(), ed_works_02.getValue(), 'F', 'F');
};
scwin.udc_works_01_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_works_01, ed_works_02, 2);
};
scwin.udc_works_01_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_works_02, ed_works_01, 2, false);
};

//조회영역 소속업체 찾기 버튼
scwin.udc_dept_03_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(3, ed_dept_03.getValue(), ed_dept_04.getValue(), 'F', 'F');
};
scwin.udc_dept_03_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_dept_03, ed_dept_04, 3);
};
scwin.udc_dept_03_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_dept_04, ed_dept_03, 3, false);
};

//조회영역 반 찾기 버튼
scwin.udc_partyCd_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(8, ed_partyCd.getValue(), ed_partyNm.getValue(), 'F', 'F');
};
scwin.udc_partyCd_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_partyCd, ed_partyNm, 8);
};
scwin.udc_partyCd_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_partyNm, ed_partyCd, 8, false);
};

//정보영역 상세직종 찾기 버튼
scwin.udc_dtlOccptypeCd_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(12, ed_dtlOccptypeCd.getValue(), ed_dtlOccptypeNm.getValue(), 'F', 'F');
};
scwin.udc_dtlOccptypeCd_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_dtlOccptypeCd, ed_dtlOccptypeNm, 12);
};
scwin.udc_dtlOccptypeCd_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_dtlOccptypeNm, ed_dtlOccptypeCd, 12, false);
};

//정보영역 소속업체 찾기 버튼 
scwin.udc_copCoClntNo_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(5, ed_copCoClntNo.getValue(), ed_copCoClntNm.getValue(), 'F', 'F');
};
scwin.udc_copCoClntNo_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_copCoClntNo, ed_copCoClntNm, 5);
};
scwin.udc_copCoClntNo_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_copCoClntNm, ed_copCoClntNo, 5, false);
};

//정보영역 사업부서 찾기 버튼
scwin.udc_lodeptCd_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(6, ed_lodeptCd.getValue(), ed_lodeptNm.getValue(), 'F', 'F');
};
scwin.udc_lodeptCd_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_lodeptCd, ed_lodeptNm, 6);
};
scwin.udc_lodeptCd_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_lodeptNm, ed_lodeptCd, 6, false);
};

//정보영역 작업장 찾기 버튼
scwin.udc_wrkPlCd_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(7, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'F', 'F');
};
scwin.udc_wrkPlCd_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlNm, 7);
};
scwin.udc_wrkPlCd_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 7, false);
};

//정보영역 반 찾기 버튼
scwin.udc_detailPartyCd_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(9, ed_detailPartyCd.getValue(), ed_detailPartyNm.getValue(), 'F', 'F');
};
scwin.udc_detailPartyCd_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_detailPartyCd, ed_detailPartyNm, 9);
};
scwin.udc_detailPartyCd_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_detailPartyNm, ed_detailPartyCd, 9, false);
};

//정보영역 직급 찾기 버튼 
scwin.udc_occpgrdCd_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(11, ed_occpgrdCd.getValue(), ed_occpgrdNm.getValue(), 'F', 'F');
};
scwin.udc_occpgrdCd_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_occpgrdCd, ed_occpgrdNm, 11);
};
scwin.udc_occpgrdCd_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_occpgrdNm, ed_occpgrdCd, 11, false);
};

//정보영역 은행 찾기 버튼 
scwin.udc_bankCd_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(13, ed_bankCd.getValue(), ed_bankNm.getValue(), 'F', 'F');
};
scwin.udc_bankCd_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_bankCd, ed_bankNm, 13);
};
scwin.udc_bankCd_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_bankNm, ed_bankCd, 13, false);
};
scwin.gr_emp_oncellclick = async function (rowIndex, columnIndex, columnId) {
  scwin.f_displayFunction();
  scwin.gCd = ds_emp.getCellData(rowIndex, "occptypeCd");
  scwin.gDtlOccptypeCd = ds_emp.getCellData(rowIndex, "dtlOccptypeCd");

  //월급제여부, 컴포넌트 Display
  scwin.f_salYn_click();
  scwin.f_enable(rowIndex);
  scwin.f_salclass(rowIndex);
  await scwin.f_retrieveInjr();
  if (ds_emp.getCellData(rowIndex, "lobranCd") == '4AA' && ds_emp.getCellData(rowIndex, "occptypeCd") == '03') {
    scwin.f_dayJobWorkerHistoryYn();
  }
};

//사원번호 중복 버튼
scwin.btn_staffNo_onclick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ed_staffNo], null, true))) {
    return;
  }
  dma_dupYn.set("employeeNumber", ed_staffNo.getValue());
  ds_dupYn.removeAll();
  ds_dupYn.reform();
  $c.sbm.execute($p, sbm_dupYn);
};

//이력조회 버튼
scwin.btn_dayJobWorkerHistory_onclick = function (e) {
  scwin.f_DayJobWorkerHistory();
};

//신규 버튼
scwin.btn_Create_onclick = function (e) {
  scwin.f_Create();
};

//수정 버튼
scwin.btn_Modify_onclick = async function (e) {
  await scwin.f_Update();
};

//취소 버튼
scwin.btn_Cancel_onclick = function (e) {
  scwin.f_Cancel();
};

//저장 버튼
scwin.btn_Save_onclick = async function (e) {
  await scwin.f_Save();
};

//정보영역 직종 변경
scwin.ed_occptypeCd_onafteredit = function () {
  scwin.gCd = ed_occptypeCd.getValue();
  if (scwin.gCmd == "C") {
    ed_staffNo.setValue("");
    ds_emp.setIgnoreStatus("staffNo", true);
  }
  if (scwin.gCmd == "C" && ed_occptypeCd.getValue() == "02") {
    //계약직
    ed_staffNo.setDisabled(false);
    ed_staffNo.setAllowChar("0-9"); //신규인 경우 사번은 숫자만 입력가능하다
    $c.gus.cfEnableObj($p, ed_staffNo, true);
    $c.gus.cfEnableObjects($p, [btn_staffNo]);
    btn_staffNo.show("");
  } else {
    ed_staffNo.setDisabled(true);
    ed_staffNo.setAllowChar("0-9a-zA-Z");
    $c.gus.cfEnableObj($p, ed_staffNo, false);
    $c.gus.cfDisableObjects($p, [btn_staffNo]);
    btn_staffNo.hide();
  }
  if (ed_occptypeCd.getValue() == "05") {
    //항운노조
    tr_lub.show("");
  } else {
    ck_chiefYn.setValue("0");
    ck_apprenticeYn.setValue("0");
    tr_lub.hide();
  }
  ds_emp.setCellData(gr_emp.getFocusedRowIndex(), "occptypeNm", ed_occptypeCd.getText(true));

  // 상세직종이 일용직/용역직인 경우만 용역비기준을 보여준다.
  if (ed_occptypeCd.getValue() == "03" || ed_occptypeCd.getValue() == "04") {
    grp_serv.show("");
    tbl_empInfo.show("");
  } else {
    grp_serv.hide();
    tbl_empInfo.hide();
  }

  //직종이 없는 경우, 상세직종을 클리어
  if (ed_occptypeCd.getValue() == "") {
    ed_dtlOccptypeCd.setValue("");
    ed_dtlOccptypeNm.setValue("");
  }
};

//사원번호 keyUp
scwin.ed_staffNo_onkeyup = function (e) {
  scwin.sRegId = "";
  this.setValue(e.target.value);
};
scwin.ed_staffNm_onkeyup = function (e) {
  this.setValue(e.target.value);
};
scwin.ed_ssn_onfocus = function (e) {
  if (ed_ssn.getDisabled()) {
    ed_ssn.setEditFormat("XXXXXX-*******");
  } else {
    ed_ssn.setEditFormat("XXXXXX-XXXXXXX");
  }
};
scwin.ed_ssn_onviewchange = function (info) {
  let ssn = ed_ssn.getValue().replace("-", "");
  ds_emp.setCellData(gr_emp.getFocusedRowIndex(), "ssn", ssn);
};

//주민번호 값 display
scwin.f_displayFunction = function (sts) {
  if (!$c.util.isEmpty($p, ed_ssn.getValue())) {
    scwin.ssn = ed_ssn.getValue();
  }
  if (sts == "C") {
    ed_ssn.setValue("");
    ed_ssn.setEditFormat("XXXXXX-XXXXXXX");
  } else if (sts == "U") {
    ds_emp.setIgnoreStatus("ssn1", true);
    ed_ssn.setEditFormat("XXXXXX-XXXXXXX");
    if (!$c.util.isEmpty($p, scwin.ssn)) {
      ed_ssn.setValue(scwin.ssn.substring(0, 6));
    }
  } else {
    ed_ssn.setEditFormat("XXXXXX-*******");
    if (scwin.ssn.length === 6) {
      ds_emp.setIgnoreStatus("ssn1", true);
      ed_ssn.setValue(scwin.ssn + "*******");
    }
  }
};

//월급제 여부 선택
scwin.ck_salYn_onchange = function (info) {
  scwin.f_salYn_click();
};
scwin.pgl_pageList1_onclick = async function (index) {
  await scwin.f_MoveToPage(index - 1);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'co_lc_srchJoblevel',search:'start',style:'',submenuSize:'auto',searchTarget:'value',ref:'data:dma_retrieve.lobranCd','ev:onchange':'scwin.co_lc_srchJoblevel_onchange',sortOption:'label',visibleRowNum:'10'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직종',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'form-control w120',editType:'select',id:'occptypeCd',search:'start',style:'',submenuSize:'auto',ref:'data:dma_retrieve.occptypeCd',searchTarget:'label','ev:onchange':'scwin.occptypeCd_onchange',visibleRowNum:'10'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupDept01',style:'',id:'udc_dept_01',maxlengthCode:'4',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',nameId:'ed_dept_02',codeId:'ed_dept_01',btnId:'btn_dept_01',refDataCollection:'dma_retrieve',code:'lodeptCd',selectID:'retrieveOpDeptCdInfo','ev:onclickEvent':'scwin.udc_dept_01_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dept_01_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_dept_01_onviewchangeNameEvent',validTitle:'사업부서',mandatoryName:'true',mandatoryCode:'true',codeWidth:'60'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'성명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupEmp01',style:'',id:'udc_emp_01',codeId:'ed_emp_01',btnId:'btn_emp_01',nameId:'ed_emp_02',refDataCollection:'dma_retrieve',code:'staffNo',selectID:'retrieveOpExEmpCdInfo','ev:onclickEvent':'scwin.udc_emp_01_onclickEvent','ev:onblurCodeEvent':'scwin.udc_emp_01_onblurCodeEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6','ev:onviewchangeNameEvent':'scwin.udc_emp_01_onviewchangeNameEvent',codeWidth:'60'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'td',style:'',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'tb_lub',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'textbox1',label:'분회 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'5',refDataCollection:'dma_retrieve',code:'lubCd',popupID:'popupLubCd',UpperFlagCode:'1',btnId:'btn_lubCd','ev:onclickEvent':'scwin.udc_lubCd_onclickEvent',allowCharCode:'a-zA-Z0-9',codeId:'ed_lubCd',selectID:'wageLunionOrgCdLevel2',nameId:'ed_lubNm',style:'',id:'udc_lubCd','ev:onblurCodeEvent':'scwin.udc_lubCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_lubCd_onviewchangeNameEvent',codeWidth:'60'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupWorks01',style:'',id:'udc_works_01',validExpCode:'작업장:yes',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',nameId:'ed_works_02',codeId:'ed_works_01',btnId:'btn_works_01',code:'wrkPlCd',refDataCollection:'dma_retrieve',selectID:'retrieveWrkPlInfo','ev:onclickEvent':'scwin.udc_works_01_onclickEvent','ev:onblurCodeEvent':'scwin.udc_works_01_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_works_01_onviewchangeNameEvent',codeWidth:'60'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속업체',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupDept03',style:'',id:'udc_dept_03',codeId:'ed_dept_03',nameId:'ed_dept_04',btnId:'btn_dept_03',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6',refDataCollection:'dma_retrieve',code:'copCoClntNo',selectID:'retrieveClntNoInfo','ev:onclickEvent':'scwin.udc_dept_03_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dept_03_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_dept_03_onviewchangeNameEvent',codeWidth:'60'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'',style:''},E:[{T:1,N:'xf:group',A:{tagname:'td',style:'',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'tb_party',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'width: 24px;',id:'textbox2',label:'반 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'5',refDataCollection:'dma_retrieve',code:'partyCd',popupID:'popupPartyCd',UpperFlagCode:'1',btnId:'btn_partyCd','ev:onclickEvent':'scwin.udc_partyCd_onclickEvent',allowCharCode:'a-zA-Z0-9',codeId:'ed_partyCd',selectID:'wageLunionOrgCdLevel3',nameId:'ed_partyNm',style:'',id:'udc_partyCd','ev:onblurCodeEvent':'scwin.udc_partyCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_partyCd_onviewchangeNameEvent',codeWidth:'60'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'퇴사자포함',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',cols:'',id:'chk_includeRetireYn',ref:'data:dma_retrieve.chkRetireYn',rows:'',selectedindex:'-1',style:'',renderType:'checkboxgroup'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'외부하역인원등록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_emp',id:'udc_grEmp',grdDownOpts:'{"fileName":"외부하역인원등록.xlsx", "sheetName" : "외부하역인원등록", "type":"4+8+16"}',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',dataList:'data:ds_emp',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_emp',visibleRowNum:'6',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',rowStatusVisible:'true',readOnly:'true',dataDragSelect:'false',rowStatusWidth:'20','ev:oncellclick':'scwin.gr_emp_oncellclick',columnMoveWithFooter:'true',focusFlow:'linear',fixedColumnNoMove:'true',readOnlyTabIgnore:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption11',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'column1',value:'사원',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'column2',value:'사원명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column6',value:'사업부서',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column7',value:'사업부서',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'column8',value:'직종',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'column9',value:'직종',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',value:'상세직종',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column11',value:'상세직종',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column12',value:'소속업체',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column13',value:'반',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column14',value:'반장여부',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column15',value:'신입여부',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column16',value:'작업장',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'staffNo',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'80',inputType:'text',id:'staffNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'lobranCd',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'100',inputType:'text',id:'lobranNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'occptypeCd',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'occptypeNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'dtlOccptypeCd',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'dtlOccptypeNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'120',inputType:'text',id:'clntNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'120',inputType:'text',id:'partyNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'chiefYn',blockSelect:'false',displayMode:'label',customFormatter:'scwin.f_customFormatter'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'apprenticeYn',blockSelect:'false',displayMode:'label',customFormatter:'scwin.f_customFormatter'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'100',inputType:'text',id:'wrkPlNm',blockSelect:'false',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spn_totalRowEmp',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]},{T:1,N:'w2:pageList',A:{class:'wq_pglist',displayButtonType:'display',displayFormat:'#',id:'pgl_pageList1',pageSize:'10',pagingType:'2',style:'','ev:onclick':'scwin.pgl_pageList1_onclick'}}]},{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'tbl_info',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사원번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group w150',id:''},E:[{T:1,N:'xf:input',A:{class:'form-control',id:'ed_staffNo',placeholder:'',allowChar:'0-9a-zA-Z',maxlength:'6',ref:'data:ds_emp.staffNo',maxByteLength:'6','ev:onkeyup':'scwin.ed_staffNo_onkeyup',mandatory:'true',validExp:'사번:yes:length=6'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_staffNo',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_staffNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중복'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사원명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_staffNm',placeholder:'',style:'',objType:'key',ref:'data:ds_emp.staffNm','data-length':'20',maxByteLength:'20',editType:'focus','ev:onkeyup':'scwin.ed_staffNm_onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주민번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_ssn',placeholder:'',style:'',objType:'key',validExp:'주민등록번호:yes:ssn',editType:'focus',ref:'data:ds_emp.ssn1','data-length':'4000',maxByteLength:'4000',maxlength:'14',displayFormat:'######-#######',applyFormat:'all',allowChar:'a-zA-Z0-9',editFormat:'XXXXXX-*******','ev:onfocus':'scwin.ed_ssn_onfocus','ev:onviewchange':'scwin.ed_ssn_onviewchange'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'직종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'ed_occptypeCd',search:'start',style:'',submenuSize:'auto',searchTarget:'value',sortOption:'value',ref:'data:ds_emp.occptypeCd','data-length':'2',allOption:'',chooseOption:'true',chooseOptionLabel:'$blank','ev:onafteredit':'scwin.ed_occptypeCd_onafteredit',visibleRowNum:'10'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상세직종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'popupDtlOccptypeCd',style:'',class:'w250',id:'udc_dtlOccptypeCd',codeId:'ed_dtlOccptypeCd',btnId:'btn_dtlOccptypeCd',nameId:'ed_dtlOccptypeNm',maxlengthCode:'2',allowCharCode:'a-zA-Z0-9',objTypeCode:'data',maxlengthName:'',objTypeName:'key',selectID:'retrieveDtlOccptype','ev:onclickEvent':'scwin.udc_dtlOccptypeCd_onclickEvent',refDataCollection:'ds_emp',code:'dtlOccptypeCd',name:'dtlOccptypeNm','ev:onblurCodeEvent':'scwin.udc_dtlOccptypeCd_onblurCodeEvent',UpperFlagCode:'1','ev:onviewchangeNameEvent':'scwin.udc_dtlOccptypeCd_onviewchangeNameEvent',validTitle:'상세직종',codeWidth:'60'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속업체',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'popupCopCoClntNo',style:'',class:'w250',id:'udc_copCoClntNo',codeId:'ed_copCoClntNo',btnId:'btn_copCoClntNo',nameId:'ed_copCoClntNm',maxlengthCode:'6',objType:'data',objTypeCode:'data',objTypeName:'key',maxlengthName:'',selectID:'retrieveClntNoInfo','ev:onclickEvent':'scwin.udc_copCoClntNo_onclickEvent',refDataCollection:'ds_emp',code:'copCoClntNo',name:'clntNm','ev:onblurCodeEvent':'scwin.udc_copCoClntNo_onblurCodeEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9','ev:onviewchangeNameEvent':'scwin.udc_copCoClntNo_onviewchangeNameEvent',codeWidth:'60'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입사일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ed_entDt',style:'',objType:'data',validExp:'적용일자:yes:date=YYYYMMDD',displayFormat:'yyyy/MM/dd',ref:'data:ds_emp.entDt','data-length':'8'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'popupLodeptCd',style:'',class:'w250',id:'udc_lodeptCd',codeId:'ed_lodeptCd',btnId:'btn_lodeptCd',nameId:'ed_lodeptNm',objTypeCode:'data',objTypeName:'key',maxlengthCode:'4',maxlengthName:'',selectID:'retrieveOpDeptCdInfo','ev:onclickEvent':'scwin.udc_lodeptCd_onclickEvent',refDataCollection:'ds_emp',code:'lobranCd',name:'lobranNm','ev:onblurCodeEvent':'scwin.udc_lodeptCd_onblurCodeEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9','ev:onviewchangeNameEvent':'scwin.udc_lodeptCd_onviewchangeNameEvent',codeWidth:'60'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'popupWrkPlCd',style:'',class:'w250',id:'udc_wrkPlCd',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',btnId:'btn_wrkPlCd',objTypeCode:'data',objTypeName:'key',maxlengthName:'',maxlengthCode:'5',allowCharCode:'a-zA-Z0-9',selectID:'retrieveWrkPlInfo','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent',refDataCollection:'ds_emp',code:'wrkPlCd',name:'wrkPlNm','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent',codeWidth:'60',UpperFlagCode:'1'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr',id:'tr_lub'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'popupDetailPartyCd',style:'',class:'w250',id:'udc_detailPartyCd',codeId:'ed_detailPartyCd',btnId:'btn_detailPartyCd',nameId:'ed_detailPartyNm',objTypeCode:'data',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',UpperFlagCode:'1',objTypeName:'key',maxlengthName:'10',selectID:'wageLunionOrgCdLevel3','ev:onclickEvent':'scwin.udc_detailPartyCd_onclickEvent',refDataCollection:'ds_emp',code:'partyCd',name:'partyNm','ev:onblurCodeEvent':'scwin.udc_detailPartyCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_detailPartyCd_onviewchangeNameEvent',codeWidth:'60'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'국민연금적용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'ck_ntnalPensionAdptYn',ref:'data:ds_emp.ntnalPensionAdptYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key','data-length':'1',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반장여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'ck_chiefYn',ref:'data:ds_emp.chiefYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key','data-length':'1',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신입여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'ck_apprenticeYn',ref:'data:ds_emp.apprenticeYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key','data-length':'1',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직급',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'popupOccpgrdCd',style:'',class:'w250',id:'udc_occpgrdCd',objTypeCode:'data',validExpCode:'직급:yes',maxlengthCode:'2',allowCharCode:'a-zA-Z0-9',nameId:'ed_occpgrdNm',maxlengthName:'10',objTypeName:'key',selectID:'retrieveOccpgrd','ev:onclickEvent':'scwin.udc_occpgrdCd_onclickEvent',codeId:'ed_occpgrdCd',btnId:'btn_occpgrdCd',refDataCollection:'ds_emp',code:'occpgrdCd',name:'occpgrdNm','ev:onblurCodeEvent':'scwin.udc_occpgrdCd_onblurCodeEvent',UpperFlagCode:'1','ev:onviewchangeNameEvent':'scwin.udc_occpgrdCd_onviewchangeNameEvent',codeWidth:'60'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자택전화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_houseTelNo',placeholder:'',style:'',maxlength:'20',objType:'key',ref:'data:ds_emp.houseTelNo','data-length':'20',maxByteLength:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'휴대전화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_mpNo',placeholder:'',style:'',maxlength:'20',objType:'key',ref:'data:ds_emp.mpNo','data-length':'20',maxByteLength:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'월급제여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'ck_salYn',ref:'data:ds_emp.salYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key','data-length':'1',falseValue:'0','ev:onchange':'scwin.ck_salYn_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'txt_sal',label:'월급여액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control w150 tar',id:'ed_sal',placeholder:'',style:'',objType:'data',ref:'data:ds_emp.sal','data-length':'13',dataType:'float',displayFormat:'#,###',applyFormat:'all',maxlength:'18',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_daypayAmt',label:'일당(shift)금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control w150 tar',id:'ed_daypayAmt',placeholder:'',style:'',objType:'data',ref:'data:ds_emp.daypayAmt','data-length':'13',dataType:'float',displayFormat:'#,###',applyFormat:'all',maxlength:'18',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'퇴사일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ed_retireDt',style:'',objType:'data',validExp:'적용일자:yes:date=YYYYMMDD',displayFormat:'yyyy/MM/dd',ref:'data:ds_emp.retireDt','data-length':'8'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'고정급여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'ck_fixedSalYn',ref:'data:ds_emp.fixedSalYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key','data-length':'1',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ed_adptStDt',style:'',objType:'data',validExp:'적용일자:yes:date=YYYYMMDD',displayFormat:'yyyy/MM/dd',ref:'data:ds_emp.adptStDt','data-length':'1',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'고정배치',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'ck_fixedArrangeYn',ref:'data:ds_emp.fixedArrangeYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key','data-length':'1',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'txt_salclass',label:'호봉',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{submenuSize:'auto','ev:onchange':'scwin.ed_salclass_onchange',chooseOption:'',allOption:'','data-length':'4000',searchTarget:'value',ref:'data:ds_emp.salclass',search:'start',editType:'select',style:'',id:'ed_salclass',class:'form-control w150',objType:'data',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_salclass'},E:[{T:1,N:'w2:label',A:{ref:'nm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_empInfo',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'직원번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{ref:'data:ds_emp.refNo',maxlength:'10',style:'',id:'ed_refNo',placeholder:'',class:'form-control w150',objType:'key'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'은행',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'2',objTypeCode:'data',refDataCollection:'ds_emp',popupID:'',code:'bankCd',maxlengthName:'',btnId:'btn_bankCd','ev:onclickEvent':'scwin.udc_bankCd_onclickEvent',allowCharCode:'0-9',codeId:'ed_bankCd',selectID:'retrieveBankCdInfo',objTypeName:'key',name:'bankNm',nameId:'ed_bankNm',style:'',id:'udc_bankCd',class:'w250','ev:onblurCodeEvent':'scwin.udc_bankCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_bankCd_onviewchangeNameEvent',codeWidth:'60'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계좌번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{ref:'data:ds_emp.acntNo',maxByteLength:'30',editType:'focus',validExp:'주민등록번호:yes:ssn',style:'',id:'txt_acntNo',placeholder:'',class:'form-control w150',objType:'key','data-length':'30'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'연락원유무',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{ref:'data:ds_emp.liaisonYn',appearance:'full',style:'',id:'ck_liaisonYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'key','data-length':'1',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'금액비율',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{ref:'data:ds_emp.liaisonAmtRt',maxlength:'3.2',style:'',id:'ed_liaisonAmtRt',placeholder:'',class:'form-control w150 tar',objType:'key',displayFormat:'#,###.##',dataType:'float',applyFormat:'all'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'직원번호 변경 이력',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{falseValue:'F',ref:'data:ds_dayJobHistoryYn.historyYn',appearance:'full',style:'',id:'chk_dayJobWorkerHistoryYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'key'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'T'}]}]}]}]},{T:1,N:'xf:trigger',A:{userAuth:'R','ev:onclick':'scwin.btn_dayJobWorkerHistory_onclick',style:'',id:'btn_dayJobWorkerHistory',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이력조회'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'주소',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'7'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{ref:'data:ds_emp.address',maxByteLength:'500',style:'',id:'txt_address',placeholder:'',class:'form-control',objType:'key','data-length':'500'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'grp_serv',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'용역비기준',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'연장할증율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control w85 tar',id:'ed_extdScRt',placeholder:'',style:'',objType:'data',maxlength:'3.2',dataType:'float',ref:'data:ds_emp.extdScRt','data-length':'1',displayFormat:'#,###.##',applyFormat:'all'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'휴일할증율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w85 tar',id:'ed_offDayScRt',placeholder:'',style:'',objType:'data',maxlength:'3.2',ref:'data:ds_emp.offDayScRt','data-length':'1',displayFormat:'#,###.##',dataType:'float',applyFormat:'all'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주간식대',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150 tar',id:'ed_dayFood',placeholder:'',style:'',objType:'data',maxlength:'13',ref:'data:ds_emp.dayFood','data-length':'1',dataType:'float',displayFormat:'#,###',applyFormat:'all',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'야간식대',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150 tar',id:'ed_ngtFood',placeholder:'',style:'',objType:'data',maxlength:'13',ref:'data:ds_emp.ngtFood','data-length':'1',dataType:'float',displayFormat:'#,###',applyFormat:'all',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'평일주간(일당)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150 tar',id:'ed_pyDdDayDaypayAmt',placeholder:'',style:'',objType:'data',maxlength:'13',ref:'data:ds_emp.pyDdDayDaypayAmt','data-length':'30',dataType:'float',displayFormat:'#,###',applyFormat:'all',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'평일야간(일당)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150 tar',id:'ed_pyDdNgtDaypayAmt',placeholder:'',style:'',objType:'data',maxlength:'13',ref:'data:ds_emp.pyDdNgtDaypayAmt','data-length':'13',dataType:'float',displayFormat:'#,###',applyFormat:'all',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'휴일주간(일당)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150 tar',id:'ed_offDayDayDaypayAmt',placeholder:'',style:'',maxlength:'13',objType:'data',ref:'data:ds_emp.offDayDayDaypayAmt','data-length':'13',dataType:'float',displayFormat:'#,###',applyFormat:'all',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'휴일야간(일당)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150 tar',id:'ed_offDayNgtDaypayAmt',placeholder:'',style:'',maxlength:'13',objType:'data',ref:'data:ds_emp.offDayNgtDaypayAmt','data-length':'13',dataType:'float',displayFormat:'#,###',applyFormat:'all',allowChar:'0-9'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'grp_injr',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'공상내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''}}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_injr',id:'gr_injr',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'3',visibleRowNumFix:'true',editModeEvent:'ondblclick',rowStatusVisible:'true',dataName:'공상내역',validFeatures:'ignoreStatus=no',validExp:'injrStDt:공상시작일자:yes:length=8,injrEndDt:공상종료일자:no:length=8,rmk:비고:no:length=200',rowStatusWidth:'20',readOnlyTabIgnore:'true',focusFlow:'linear',fixedColumnNoMove:'true',columnMoveWithFooter:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column1',inputType:'text',removeBorderStyle:'false',value:'사원',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column2',inputType:'text',removeBorderStyle:'false',value:'사원명',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column6',inputType:'text',removeBorderStyle:'false',value:'반코드',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'공상시작일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'공상종료일자',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',removeBorderStyle:'false',value:'비고',width:'200',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'staffNo',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'staffNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partyLunionOrgCd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',style:'',id:'injrStDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',style:'',id:'injrEndDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'rmk',inputType:'text',removeBorderStyle:'false',width:'200',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRowInjr',label:'0',style:'',tagname:'span',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',EngYn:'N',btnRowDelYn:'Y',style:'',btnRowAddYn:'Y',btnCancelYn:'Y',id:'udc_btGrInjr',gridID:'gr_injr',rowAddFunction:'scwin.f_AddRow',cancelFunctoion:'scwin.f_CancelRow',rowAddUserAuth:'C',rowDelUserAuth:'D',btnRowAddObj:'btn_addRow',btnRowDelObj:'btn_deleteRow',btnCancelObj:'btn_cancelRow'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Create',style:'',type:'button',objType:'bCreate',userAuth:'C','ev:onclick':'scwin.btn_Create_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Modify',style:'',type:'button',objType:'bUpdate',userAuth:'U','ev:onclick':'scwin.btn_Modify_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',style:'',type:'button',objType:'bCancel','ev:onclick':'scwin.btn_Cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})