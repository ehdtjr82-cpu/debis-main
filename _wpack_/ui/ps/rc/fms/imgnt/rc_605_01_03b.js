/*amd /ui/ps/rc/fms/imgnt/rc_605_01_03b.xml 83630 10c3b87c9f857caccb529bf8862355d06c518dc18ac743f3ba9a582806f9fc33 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dtFrom',name:'발생기간 From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtTo',name:'발생기간 To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptCd',name:'부귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'고객사번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'div',name:'구분 (1:예약 / 2:실적)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfYn',name:'차량구분 (0:임차,',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userDeptCd',name:'사용자부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'travelDtcYn',name:'실적유무',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Retrieve_detail'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dtFrom',name:'발생기간 From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtTo',name:'발생기간 To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsvSeq',name:'예약순번',dataType:'number'}},{T:1,N:'w2:key',A:{id:'rsvDt',name:'예약일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfYn',name:'차량구분',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_excel',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'temp',name:'""',dataType:'text'}},{T:1,N:'w2:column',A:{id:'runDt',name:'신청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tskCd',name:'사용목적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'사용자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptTotTravelDtc',name:'주행전계기판의거리(Km)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvPlcNm',name:'행선지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totTravelDtc',name:'주행후계기판의거리(Km)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'TravelDtc',name:'주행거리(Km)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oilingVol',name:'주유량(L)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oilingAmt',name:'주유금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'repairAmt',name:'수리비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trafficAmt',name:'통행료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'parkingAmt',name:'주차료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etcAmt',name:'기타비용',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fileName',name:'증빙파일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_temp',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'temp',name:'""',dataType:'text'}},{T:1,N:'w2:column',A:{id:'runDt',name:'신청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tskCd',name:'사용목적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'사용자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptTotTravelDtc',name:'주행전계기판의거리(Km)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvPlcNm',name:'행선지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totTravelDtc',name:'주행후계기판의거리(Km)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'TravelDtc',name:'주행거리(Km)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oilingVol',name:'주유량(L)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oilingAmt',name:'주유금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'repairAmt',name:'수리비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trafficAmt',name:'통행료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'parkingAmt',name:'주차료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etcAmt',name:'기타비용',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fileName',name:'증빙파일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'deptCd',name:'관리부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptNm',name:'관리부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsvDt',name:'신청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'차명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsvSeq',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'사용자;ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'신청자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHh',name:'출발;시간;',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'도착;시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'runDt',name:'운행일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvPlcNm',name:'행선지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptTotTravelDtc',name:'전주행거리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'travelDtc1',name:'출퇴근',dataType:'text'}},{T:1,N:'w2:column',A:{id:'travelDtc2',name:'업무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'travelDtc3',name:'비업무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totTravelDtc',name:'주행거리;누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilingVol',name:'주유량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilingAmt',name:'주유;금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repairAmt',name:'수리비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trafficAmt',name:'통행료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'parkingAmt',name:'주차료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAmt',name:'기타;비용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fleecncyAmt',name:'연비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYn',name:'확정;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col28',name:'주행일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col29',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col30',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'마감일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closePic',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'runSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_detail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsvDt',name:'예약일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsvSeq',name:'예약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfYn',name:'차량구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'runDt',name:'주행일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'runSeq',name:'순번',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tskCls',name:'사용목적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'사용자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'사용자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptTotTravelDtc',name:'주행전;계기판의;거리(Km)',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'arvZip',name:'행선지주소',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'arvPlcNm',name:'행선지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totTravelDtc',name:'주행후;계기판의;거리(Km)',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'travelDtc',name:'주행;거리(Km)',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'oilingVol',name:'주유량(L)',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'oilingAmt',name:'주유;금액',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'repairAmt',name:'수리비',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'trafficAmt',name:'통행료',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'parkingAmt',name:'주차료',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'etcAmt',name:'기타;비용',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'filePath',name:'증빙파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'증빙파일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_admin',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCdNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name18',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/ps.rc.fms.imgnt.RetrieveInVehclRunningRsltsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Retrieve","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve_detail',action:'/ps.rc.fms.imgnt.RetrieveInVehclRunningRsltsDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Retrieve_detail","key":"IN_DS1"},{"id":"ds_detail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_detail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_detail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_save',action:'/ps.rc.fms.imgnt.RegistInVehclRunningRsltsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_detail","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_delete',action:'/ps.rc.fms.imgnt.cmd.DeleteInVehclRunningRslts3CMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_detail","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_admin',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=RC975&cd=&cdNm=',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_admin","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_admin_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 차량별 운행실적
 * 메뉴경로 : 공통/총무업무/업무용 차량관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ps/rc/fms/imgnt/rc_605_01_03b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-09
 * 수정이력  :
 *    - 2025-12-09      정승혜    최초작성
 *    - 2026-03-03      정승혜    기타수정
 * 메모 :
 * asis 엑셀업로드 정상작동하지 않음
 * 조회조건 : 20140101~20140630
 */
scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.memJson = $c.data.getMemInfo($p);
scwin.clntNo = scwin.memJson.clntNo;
scwin.clntNm = scwin.memJson.clntNm;
scwin.userId = scwin.memJson.userId;
scwin.userNm = scwin.memJson.userNm;
scwin.user_DeptCd = scwin.memJson.acctDeptCd;
scwin.params = "";
scwin.MOD = "";
scwin.deptCd = "";
scwin.vehclNo = "";
scwin.yyyymm = "";
scwin.notOncolumnChange = false;
scwin.user_id = "";
scwin.vcolid = "";
scwin.zipRow = "";
scwin.uploadRow = [];
scwin.fmsZipArvZip = [];
scwin.fmsZipArvPlcNm = [];
scwin.fmsZipUserId = [];
scwin.fmsZipUserNm = [];
scwin.MSG_SD_ERR_003 = "@행, @칼럼의 코드가 일치하지 않습니다.";
scwin.MSG_SD_ERR_003_1 = "행, ";
scwin.MSG_SD_ERR_003_2 = "칼럼의 코드가 일치하지 않습니다.";

//-------------------------------------------------------------------------
// 화면로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "RC978",
    compID: "gr_detail:tskCls"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.params = $c.data.getParameter($p);
  if (scwin.params["MOD"] == null) {
    scwin.MOD = "";
  } else {
    scwin.MOD = scwin.params["MOD"];
  } // 모드
  if (scwin.params["deptCd"] == null) {
    scwin.deptCd = "";
  } else {
    scwin.deptCd = scwin.params["deptCd"];
  } // 부서코드
  if (scwin.params["vehclNo"] == null) {
    scwin.vehclNo = "";
  } else {
    scwin.vehclNo = scwin.params["vehclNo"];
  } // 차량번호
  if (scwin.params["yyyymm"] == null) {
    scwin.yyyymm = "";
  } else {
    scwin.yyyymm = scwin.params["yyyymm"];
  } // 연월
  scwin.user_id = scwin.params["userId"];
  //scwin.MOD     = scwin.params["MOD"];   // 화면모드 
  //scwin.deptCd  = scwin.params["deptCd"];   // 관리부서코드 
  //scwin.vehclNo = scwin.params["vehclNo"];  // 차량번호 
  //scwin.yyyymm  = scwin.params["yyyymm"];  // 예약년월 
  scwin.user_DeptCd = scwin.params["user_DeptCd"]; // 사용자부서코드 

  scwin.f_setDtheader_results();
  scwin.f_setSearch_detail();
  scwin.f_SetDtheader_detail();
  scwin.f_ExcelUpHeaderCreate();
};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  // 탭 ADD 모드일경우, ( 차량예약화면에서 넘어온경우 ) 
  if (scwin.MOD == "TabAdded") {
    ed_dtFrom.setValue(scwin.yyyymm + "01");
    let mm_Check = scwin.yyyymm.charAt(4) + scwin.yyyymm.charAt(5);

    // 해당 월 말일 세팅
    if (mm_Check == "01" || mm_Check == "03" || mm_Check == "05" || mm_Check == "07" || mm_Check == "08" || mm_Check == "10" || mm_Check == "12") {
      ed_dtTo.setValue(scwin.yyyymm + "31");
    }
    if (mm_Check == "04" || mm_Check == "06" || mm_Check == "09" || mm_Check == "11") {
      ed_dtTo.setValue(scwin.yyyymm + "30");
    }
    if (mm_Check == "02") {
      let YYYY_Check = Number(scwin.yyyymm.charAt(0) + scwin.yyyymm.charAt(1) + scwin.yyyymm.charAt(2) + scwin.yyyymm.charAt(3));
      if (YYYY_Check % 4 == 0 && YYYY_Check % 100 != 0 || YYYY_Check % 400 == 0) {
        ed_dtTo.setValue(scwin.yyyymm + "29");
      } else {
        ed_dtTo.setValue(scwin.yyyymm + "28");
      }
    }
    ed_deptCd.setValue(scwin.deptCd);
    ed_vehcelNo.setValue(scwin.vehclNo);
    scwin.f_ChkOpenCommonPopUp(1, ed_vehcelNo, ed_vehcelNm);
    scwin.f_ChkOpenCommonPopUp(4, ed_deptCd, ed_deptNm);
  } else {
    ed_dtFrom.setValue(scwin.strFromDate);
    ed_dtTo.setValue(scwin.strFromDate);
    ed_reqId.setValue(scwin.userId);
    ed_reqNm.setValue(scwin.userNm);
  }

  //임시데이터
  //ed_dtFrom.setValue("20140101");
  //ed_dtTo.setValue("20140630");
  //ed_reqId.setValue("");
  //ed_reqNm.setValue("");

  $c.gus.cfDisableBtn($p, ['b_add', 'b_cancel', 'btn_save', 'b_Delete']);
};
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
// 조회조건 header Setting
//-------------------------------------------------------------------------
scwin.f_setDtheader_results = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// 상세 조회조건 header Setting
//-------------------------------------------------------------------------
scwin.f_setSearch_detail = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//실적상세 헤더
scwin.f_SetDtheader_detail = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// 엑셀 업로드 데이터셋헤더 생성
//-------------------------------------------------------------------------
scwin.f_ExcelUpHeaderCreate = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//실적상세 행추가
scwin.f_AddRow = function () {
  let row = ds_detail.insertRow();
  $c.gus.cfEnableBtnOnly($p, [b_add, b_cancel, btn_save, b_Delete]);
  if (ds_detail.getRowCount() == 1) {
    ds_detail.setCellData(0, "dptTotTravelDtc", ds_out.getCellData(row, "dptTotTravelDtc"));
  }
  ds_detail.setCellData(row, "vehclNo", ds_out.getCellData(ds_out.getRowPosition(), "vehclNo"));
  ds_detail.setCellData(row, "rsvDt", ds_out.getCellData(ds_out.getRowPosition(), "rsvDt"));
  ds_detail.setCellData(row, "dptDt", ds_out.getCellData(ds_out.getRowPosition(), "dptDt"));
  ds_detail.setCellData(row, "rsvSeq", ds_out.getCellData(ds_out.getRowPosition(), "rsvSeq"));
  ds_detail.setCellData(row, "selfYn", p_lc_selfYn.getValue());
  ds_detail.setCellData(row, "chk", "1");
  gr_detail.setFocusedCell(row, 0, false);
};

//실적상세 행취소
scwin.f_cancel = function () {
  if (ds_detail.getRowCount() == 0) {
    $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn]) < -[b_cancel, btn_save, b_Delete];
  } else {
    $c.gus.cfEnableBtnOnly($p, [b_cancel, btn_save, b_Delete]);
    let nowRow = ds_detail.getRowPosition();
    let sts = ds_detail.getRowStatus(ds_detail.getRowPosition());
    if (nowRow != null) {
      if (sts == "C") {
        ds_detail.removeRow(nowRow);
        gr_detail.setFocusedCell(nowRow - 1, 0, false);
      } else {
        ds_detail.undoRow(nowRow);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_tr_retrieve);
};

//-------------------------------------------------------------------------
// 상세 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve_detail = function (Row) {
  if (ds_out.getRowCount() > 0) {
    dma_Retrieve_detail.set("dtFrom", ed_dtFrom.getValue()); // 발생일자 From
    dma_Retrieve_detail.set("dtTo", ed_dtTo.getValue()); // 발생일자 To
    dma_Retrieve_detail.set("rsvSeq", ds_out.getCellData(Row, "rsvSeq")); // 예약순번 
    dma_Retrieve_detail.set("rsvDt", ds_out.getCellData(Row, "rsvDt")); // 예약일자 
    dma_Retrieve_detail.set("vehclNo", ds_out.getCellData(Row, "vehclNo")); // 차량번호
    dma_Retrieve_detail.set("selfYn", p_lc_selfYn.getValue()); // 차량구분[자가/임차/리스]  

    $c.sbm.execute($p, sbm_tr_retrieve_detail);
  }
};
scwin.gr_vehclRunList_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_Retrieve_detail(rowIndex);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let saveCount = 0;
  if (ds_detail.getModifiedIndex().length > 0 == false) {
    await $c.win.alert($p, "변경된 데이타가 없습니다.");
    return;
  }
  for (i = 0; i < ds_detail.getRowCount(); i++) {
    if (ds_detail.getCellData(i, "chk") == 1) {
      saveCount++;
    }
  }
  if (saveCount == 0) {
    await $c.win.alert($p, "선택된 수정항목이 없습니다.");
    return;
  }
  for (i = 0; i < ds_detail.getRowCount(); i++) {
    let sysStatus = ds_detail.getRowStatus(i);
    if (ds_detail.getCellData(i, "chk") == 1) {
      if (ds_detail.getCellData(i, "tskCls").trim() == "") {
        await $c.win.alert($p, "[사용목적]을 입력해 주십시오.");
        gr_detail.setFocusedCell(i, "tskCls", true);
        return;
      }
      if (ds_detail.getCellData(i, "userNm").trim() == "") {
        await $c.win.alert($p, "[사용자명]을 입력해 주십시오.");
        gr_detail.setFocusedCell(i, "userNm", true);
        return;
      }
      if (ds_detail.getCellData(i, "dptDt").trim() == "") {
        await $c.win.alert($p, "[일자]를 입력해 주십시오.");
        gr_detail.setFocusedCell(i, "dptDt", true);
        return;
      }
      if (ds_detail.getCellData(i, "arvPlcNm").trim() == "") {
        await $c.win.alert($p, "[행선지]를 입력해 주십시오.");
        gr_detail.setFocusedCell(i, "arvPlcNm", true);
        return;
      }
      if (ds_detail.getCellData(i, "totTravelDtc") == "0") {
        await $c.win.alert($p, "[도착시 누적거리]를 입력해 주십시오.");
        gr_detail.setFocusedCell(i, "totTravelDtc", true);
        return;
      }
    }
  }
  let confirm = await $c.win.confirm($p, "저장하시겠습니까?");
  if (!confirm) {
    return;
  }
  $c.sbm.execute($p, sbm_tr_save);
};

//-------------------------------------------------------------------------
// 선택항목 삭제 : 구매팀만 가능
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  let chkCnt = 0;
  for (i = 0; i < ds_detail.getRowCount(); i++) {
    if (ds_detail.getCellData(i, "chk") == 1) {
      chkCnt++;
    }
  }
  if (chkCnt == 0) {
    $c.win.alert($p, "선택된 삭제항목이 없습니다.");
    return;
  }
  let confirm = await $c.win.confirm($p, "선택한 항목을 삭제하시겠습니까?");
  if (!confirm) {
    return;
  } else {
    $c.sbm.execute($p, sbm_tr_delete);
  }
};

//-------------------------------------------------------------------------
// 파일 이미지 팝업
//-------------------------------------------------------------------------
scwin.f_ImgPopup = async function (row) {
  /* let callbackFn = "scwin.f_ImgPopup_callBackFunc";
  let data = {
      callbackFn: callbackFn
  }; */

  let opt = {};
  opt.width = "1110";
  opt.height = "480";
  opt.modal = true;
  opt.title = "title";
  opt.id = "popup";
  opt.popupName = "차량별 운행실적 파일업로드iframe";
  let rtnList = await $c.win.openPopup($p, "/ui/ps/rc/fms/imgnt/rc_605_01_03p.xml", opt);
  if (rtnList[0] == "Y") {
    return;
  }
  if (rtnList != null) {
    if (rtnList[0] != "" && rtnList[0] != "undefined") {
      let filePath = rtnList[0];
      let fileName = rtnList[1];
      if (fileName != "") {
        fileName = fileName + filePath.substring(filePath.indexOf("."), filePath.indexOf(".") + 6);
      }
      ds_detail.setCellData(ds_detail.getRowPosition(), "filePath", filePath);
      ds_detail.setCellData(ds_detail.getRowPosition(), "fileName", fileName);
    } else {
      ds_detail.setCellData(ds_detail.getRowPosition(), "filePath", rtnList[0]);
      ds_detail.setCellData(ds_detail.getRowPosition(), "fileName", rtnList[1]);
    }
  }
};
scwin.f_ImgPopup_callBackFunc = function (ret) {
  if (rtnList != null) {
    if (resultList[0] != "" && resultList[0] != "undefined") {
      let filePath = resultList[0];
      let fileName = resultList[1];
      if (fileName != "") {
        fileName = fileName + filePath.substring(filePath.indexOf("."), filePath.indexOf(".") + 6);
      }
      ds_detail.setCellData(ds_detail.getRowPosition(), "filePath", filePath);
      ds_detail.setCellData(ds_detail.getRowPosition(), "fileName", fileName);
    } else {
      ds_detail.setCellData(ds_detail.getRowPosition(), "filePath", resultList[0]);
      ds_detail.setCellData(ds_detail.getRowPosition(), "fileName", resultList[1]);
    }
  }
};
scwin.gr_fileName_ontextimageclick = function (rowIndex, columnIndex) {
  if (columnIndex == "fileName") {
    scwin.f_ImgPopup(rowIndex);
  }
};

//-------------------------------------------------------------------------
// 파일 확장자 체크
//-------------------------------------------------------------------------
scwin.f_CheckFileExt = function () {
  //tobe 는 필요없음
};

//-------------------------------------------------------------------------
// 엑셀 Upload
//-------------------------------------------------------------------------
scwin.f_Upload = async function () {
  let options = {};
  if (udc_detail.getUpExt() == "1") {
    // csv
    options = {
      "header": 1,
      "type": "1",
      "startRowIndex": 0,
      "footerExist": 0,
      "fileName": "gridDataUpload.csv"
    };
  } else {
    // 엑셀
    options = {
      "headerExist": 1,
      "type": "1",
      "startRowIndex": 0,
      "footerExist": 0,
      "fileName": "gridDataUpload.xlsx"
    };
  }
  if (ds_out.getRowCount() > 0) {
    await $c.win.alert($p, "uploding할 엑셀파일에 ',' 가 있다면, 잘못된 정보가 올라갈수 있으니, 제거해주시기 바랍니다.     사용자명은 사번으로 행선지는 우편번호로 입력바랍니다.");
    ds_excel.removeAll();
    ds_temp.removeAll();

    //await $c.data.uploadGridViewExcel(gr_excel);
    await udc_detail.uploadGridViewExcel(gr_excel, options);
  } else {
    await $c.win.alert($p, "조회 후 가능합니다");
    return;
  }
};
scwin.gr_excel_onfilereadend = async function (value) {
  let ret = await scwin.f_AddRowUploaded();
  if (!ret) {
    console.log("오류발생");
    return;
  } else {
    await scwin.f_AddRowUploadedAfter();
    await $c.gus.cfEnableBtnOnly($p, [b_add, b_cancel, btn_save, b_Delete]);
    await $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다.");
  }
};
scwin.f_AddRowUploadedAfter = async function () {
  for (let i = 0; i < scwin.uploadRow.length; i++) {
    if (ds_temp.getCellData(i, "userNm") != "") {
      ds_detail.setCellData(i, "userId", scwin.fmsZipUserId[i]);
      ds_detail.setCellData(i, "userNm", scwin.fmsZipUserNm[i]);
    }
    if (ds_temp.getCellData(i, "arvPlcNm") != "") {
      ds_detail.setCellData(i, "arvZip", scwin.fmsZipArvZip[i]);
      ds_detail.setCellData(i, "arvPlcNm", scwin.fmsZipArvPlcNm[i]);
    }
  }
};

//-------------------------------------------------------------------------
// 업로드 자료 추가
//-------------------------------------------------------------------------
scwin.f_AddRowUploaded = async function () {
  scwin.uploadRow = [];
  scwin.fmsZipArvZip = [];
  scwin.fmsZipArvPlcNm = [];
  scwin.fmsZipUserId = [];
  scwin.fmsZipUserNm = [];
  ds_temp.setJSON(ds_excel.getAllJSON());
  if (ds_excel.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다	
    return;
  }
  if (ds_temp.getRowCount() > 0) {
    ds_detail.removeAll();
    for (let i = 0; i < ds_temp.getRowCount(); i++) {
      row = ds_detail.insertRow();
      scwin.uploadRow.push(row);
      ds_detail.setCellData(row, "vehclNo", ds_out.getCellData(ds_out.getRowPosition(), "vehclNo"));
      ds_detail.setCellData(row, "rsvDt", ds_out.getCellData(ds_out.getRowPosition(), "rsvDt"));
      ds_detail.setCellData(row, "dptDt", ds_out.getCellData(ds_out.getRowPosition(), "dptDt"));
      ds_detail.setCellData(row, "rsvSeq", ds_out.getCellData(ds_out.getRowPosition(), "rsvSeq"));
      ds_detail.setCellData(row, "selfYn", ds_out.getCellData(ds_out.getRowPosition(), "selfYn"));
      ds_detail.setCellData(row, "chk", "1");
      if (ds_temp.getCellData(i, "runDt") == "") {
        //await $c.gus.cfAlertMsg($c.data.getMessage(MSG_SD_ERR_003,i,"일자"));
        await $c.gus.cfAlertMsg($p, i + 1 + scwin.MSG_SD_ERR_003_1 + "일자 " + scwin.MSG_SD_ERR_003_2);
        return;
      }
      ds_detail.setCellData(row, "dptDt", ds_temp.getCellData(i, "runDt").replace(/-/g, ""));
      if (ds_temp.getCellData(i, "tskCd") == "" || ds_temp.getCellData(i, "tskCd") != "A" && ds_temp.getCellData(i, "tskCd") != "B" && ds_temp.getCellData(i, "tskCd") != "C") {
        await $c.win.alert($p, "사용목적은 A,B,C만 가능합니다");
        return;
      }
      ds_detail.setCellData(row, "tskCls", ds_temp.getCellData(i, "tskCd"));
      if (ds_temp.getCellData(i, "userNm") == "") {
        //await $c.gus.cfAlertMsg($c.data.getMessage(MSG_SD_ERR_003,i,"사용자명"));
        await $c.gus.cfAlertMsg($p, i + 1 + scwin.MSG_SD_ERR_003_1 + "사용자명 " + scwin.MSG_SD_ERR_003_2);
        return;
      } else if (ds_temp.getCellData(i, "userNm") != "") {
        await scwin.f_OpenCommonPopUp(5, "", ds_temp.getCellData(i, "userNm"), "T", "T", row);
      }
      if (ds_temp.getCellData(i, "arvPlcNm") == "") {
        //await $c.gus.cfAlertMsg($c.data.getMessage(MSG_SD_ERR_003,i,"행선지"));
        await $c.gus.cfAlertMsg($p, i + 1 + scwin.MSG_SD_ERR_003_1 + "행선지 " + scwin.MSG_SD_ERR_003_2);
        return;
      } else {
        await scwin.f_OpenCommonPopUp(6, ds_temp.getCellData(i, "arvPlcNm"), "", "T", "T", row);
      }
      if (ds_temp.getCellData(i, "totTravelDtc") == "") {
        //await $c.gus.cfAlertMsg($c.data.getMessage(MSG_SD_ERR_003,i,"주행후계기판의거리(Km)"));
        await $c.gus.cfAlertMsg($p, i + 1 + scwin.MSG_SD_ERR_003_1 + "주행후계기판의거리(Km) " + scwin.MSG_SD_ERR_003_2);
        return;
      }
      ds_detail.setCellData(row, "totTravelDtc", ds_temp.getCellData(i, "totTravelDtc"));
      ds_detail.setCellData(row, "oilingVol", ds_temp.getCellData(i, "oilingVol"));
      ds_detail.setCellData(row, "oilingAmt", ds_temp.getCellData(i, "oilingAmt"));
      ds_detail.setCellData(row, "repairAmt", ds_temp.getCellData(i, "repairAmt"));
      ds_detail.setCellData(row, "trafficAmt", ds_temp.getCellData(i, "trafficAmt"));
      ds_detail.setCellData(row, "parkingAmt", ds_temp.getCellData(i, "parkingAmt"));
      ds_detail.setCellData(row, "etcAmt", ds_temp.getCellData(i, "etcAmt"));
    } //for
  }
  totalRows.setValue(ds_out.getRowCount());
  return true;
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
// 엑셀다운 4+8+16
scwin.f_runExcel = async function () {
  let confirm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  let totCnt = ds_out.getRowCount();
  if (totCnt != 0) {
    if (confirm) {
      const options = {
        fileName: "차량별 운행실적.xlsx",
        sheetName: "차량별 운행실적"
      };
      await $c.data.downloadGridViewExcel($p, gr_vehclRunList, options);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

// 엑셀다운 4+8+16
scwin.f_runExcel2 = async function () {
  let confirm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  let totCnt = ds_out.getRowCount();
  if (totCnt != 0) {
    if (confirm) {
      gr_detail.setColumnVisible("chk", false);
      const options = {
        fileName: "실적 상세.xlsx",
        sheetName: "실적 상세"
      };
      await $c.data.downloadGridViewExcel($p, gr_detail, options);
      gr_detail.setColumnVisible("chk", true);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 차량조회팝업
//-------------------------------------------------------------------------
scwin.f_vehclNoPopup = function () {
  // 호출되는곳 없음
};

//공통 PopUp 호출
scwin.f_OpenCommonPopUp = async function (gubun, pCode, pName, pClose, pAllSearch, row) {
  let pWtitleSearch = null;
  switch (gubun) {
    case 1:
      // 차량번호
      udc_workVehclInfo.cfCommonPopUp(scwin.udc_workVehclInfo_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능(비용관리여부)
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , pWtitleSearch // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // 그리드 userNm 사용자명
      udc_userInfo.cfCommonPopUp(scwin.udc_userInfo_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능(비용관리여부)
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , pWtitleSearch // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 5:
      // 엑셀업로드 사용자명
      udc_userInfo.cfCommonPopUpAsync(scwin.udc_userInfo_callBackFunc2, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능(비용관리여부)
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , pWtitleSearch // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 신청자
      udc_affairsUserInfo.cfCommonPopUp(scwin.udc_affairsUserInfo_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능(비용관리여부)
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , pWtitleSearch // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      // 관리부서
      udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능(비용관리여부)
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , pWtitleSearch // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 6:
      // 엑셀업로드 행선지명
      await udc_fmsZipList.cfCommonPopUpAsync(scwin.udc_fmsZipList_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능(비용관리여부)
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , pWtitleSearch // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

// 차량번호
scwin.udc_workVehclInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_vehcelNo.setValue(rtnList[0]);
    ed_vehcelNm.setValue(rtnList[1]);
  }
};

// 신청자
scwin.udc_affairsUserInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_reqId.setValue(rtnList[0]);
    ed_reqNm.setValue(rtnList[1]);
  }
};

// 관리부서
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_deptCd.setValue(rtnList[0]);
    ed_deptNm.setValue(rtnList[1]);
  }
};

// 그리드 사용자명
scwin.udc_userInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    let rowIdx = gr_detail.getFocusedRowIndex();
    ds_detail.setCellData(rowIdx, "userId", rtnList[0]);
    ds_detail.setCellData(rowIdx, "userNm", rtnList[1]);

    // 비어있는 사용자 채워넣기
    for (i = 0; i < ds_detail.getRowCount(); i++) {
      if (ds_detail.getCellData(i, "userNm") == "") {
        ds_detail.setCellData(i, "userId", rtnList[0]); // 유저ID
        ds_detail.setCellData(i, "userNm", rtnList[1]); // 유저명
      }
    }
  }
};

// 엑셀업로드 사용자명
scwin.udc_userInfo_callBackFunc2 = async function (rtnList) {
  if (rtnList == null || rtnList[0] == "N/A") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_SD_ERR_003, i, "사용자명"));
    return;
  } else {
    //ds_detail.setCellData(scwin.uploadRow, "userId", rtnList[0]);
    //ds_detail.setCellData(scwin.uploadRow, "userNm", rtnList[1]);
    scwin.fmsZipUserId.push(rtnList[0]);
    scwin.fmsZipUserNm.push(rtnList[1]);
  }
};

// 엑셀업로드 행선지명
scwin.udc_fmsZipList_callBackFunc = async function (rtnList) {
  if (rtnList == null || rtnList[0] == "N/A") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_SD_ERR_003, i, "행선지"));
    return;
  } else {
    //ds_detail.setCellData(scwin.uploadRow, "arvZip", rtnList[0]);
    //ds_detail.setCellData(scwin.uploadRow, "arvPlcNm", rtnList[1]);
    scwin.fmsZipArvZip.push(rtnList[0]);
    scwin.fmsZipArvPlcNm.push(rtnList[1]);
  }
};

// 차량번호
scwin.udc_workVehclInfo_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp(1, ed_vehcelNo.getValue(), ed_vehcelNm.getValue(), 'F', 'F');
};

// 신청자
scwin.udc_affairsUserInfo_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp(2, ed_reqId.getValue(), ed_reqNm.getValue(), 'F', 'F');
};

// 관리부서
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp(4, ed_deptCd.getValue(), ed_deptNm.getValue(), 'F', 'F');
};

// 그리드 사용자명
scwin.gr_userNm_ontextimageclick = function (rowIndex, columnIndex) {
  if (columnIndex == "userNm") {
    let userNm = ds_detail.getCellData(rowIndex, "userNm");
    scwin.f_OpenCommonPopUp(3, "", userNm, "F", "F", rowIndex);
  }
};

//-------------------------------------------------------------------------
// 조회 필드 Clear(휴지통)
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  ed_dtFrom.setValue(scwin.strFromDate);
  ed_dtTo.setValue(scwin.strFromDate);
  ed_vehcelNo.setValue("");
  ed_vehcelNm.setValue("");
  ed_reqId.setValue("");
  ed_reqNm.setValue("");
};
scwin.f_ChkOpenCommonPopUp = function (gubun, inObj, pairObj, isCode) {
  //값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  ;

  //짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  //검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  //inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_OpenCommonPopUp(gubun, pVal, '', 'T', 'T');
  } else {
    //inObj가 코드명 필드일 경우 팝업
    scwin.f_OpenCommonPopUp(gubun, '', pVal, 'T', 'T');
  }
};

// 관리부서
scwin.udc_acctDeptCdInfo_onviewchangeNameEvent = function (info) {
  scwin.f_ChkOpenCommonPopUp(4, ed_deptNm, ed_deptCd, false);
};

// 차량번호
scwin.udc_workVehclInfo_onviewchangeNameEvent = function (info) {
  scwin.f_ChkOpenCommonPopUp(1, ed_vehcelNm, ed_vehcelNo, false);
};

// 신청자
scwin.udc_affairsUserInfo_onviewchangeNameEvent = function (info) {
  scwin.f_ChkOpenCommonPopUp(2, ed_reqNm, ed_reqId, false);
};

//-------------------------------------------------------------------------
// 우편번호팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (check, row) {
  scwin.zipRow = row;
  let data = {
    callbackFn: scwin.btn_zip_callBackFunc
  };
  let v_url = "/ui/cm/zz/newzipcodePopup.xml";
  let opt = {
    id: "pupup",
    popupName: "우편번호 검색",
    modal: true,
    type: "browserPopup",
    width: 500,
    height: 550,
    title: "우편번호 검색"
  };
  $c.win.openPopup($p, v_url, opt, data);
};
scwin.btn_zip_callBackFunc = async function (popupResult) {
  if (popupResult != null) {
    ds_detail.setCellData(scwin.zipRow, "arvZip", popupResult.zip); // 도착지 우편번호
    ds_detail.setCellData(scwin.zipRow, "arvPlcNm", popupResult.addr1); // 도착지명
  } else {
    ed_zip.setValue("");
    ed_addr1.setValue("");
  }
};
scwin.gr_arvPlcNm_ontextimageclick = function (rowIndex, columnIndex) {
  if (columnIndex == "arvPlcNm") {
    scwin.f_openPopUp('F', rowIndex);
  }
};

// 서브미션
scwin.sbm_tr_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_out.getRowCount());
  if (ds_out.getRowCount() > 0) {
    $c.gus.cfEnableBtnOnly($p, [b_add]);
    gr_vehclRunList.setFocusedCell(0, "deptNm", false);
    scwin.f_Retrieve_detail(0);
  } else {
    ds_detail.removeAll();
  }
};

// 서브미션
scwin.sbm_tr_retrieve_detail_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows_detail.setValue(ds_detail.getRowCount());
  gr_detail.setFocusedCell(0, 0, false);
  if (ds_detail.getRowCount() > 0) {
    $c.gus.cfEnableBtnOnly($p, [b_add, b_cancel, btn_save, b_Delete]);
  }
};

// 서브미션
scwin.sbm_tr_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다    
  scwin.f_Retrieve();
};

// 서브미션
scwin.sbm_tr_delete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다    
  scwin.f_Retrieve();
};

// 서브미션
scwin.sbm_ds_admin_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let empNo = scwin.memJson.empNo;
  let admin = "";
  let count = 0;
  for (let i = 0; i < ds_admin.getRowCount(); i++) {
    admin = ds_admin.getCellData(i, "cd");
    if (empNo == admin) {
      count++;
    }
  }
  await scwin.f_Retrieve();
};
scwin.p_lc_selfYn_onchange = function (info) {
  $c.sbm.execute($p, sbm_ds_admin);
};
scwin.gr_detail_onafteredit = async function (rowIndex, columnIndex, value) {
  // dptDt 일자일경우
  if (columnIndex == 7) {
    let temp = ds_detail.getCellData(rowIndex, "dptDt");
    let regex = /^[0-9]{8}$/; // 8자리 숫자 (YYYYMMDD)

    if (ds_detail.getCellData(row, "dptDt") != "") {
      if (!regex.test(temp)) {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_018, "일자")); //은(는) 유효한 날자가 아님니다.
        ds_detail.setCellData(row, "dptDt", "");
        return;
      }
    }

    // 비어있는 일자 채워넣기
    for (i = 0; i < ds_detail.getRowCount(); i++) {
      if (ds_detail.getCellData(i, "dptDt") == "") {
        ds_detail.setCellData(i, "dptDt", ds_detail.getCellData(rowIndex, "dptDt"));
      }
    }
  }
};
scwin.gr_detail_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.vcolid = columnId;
  if (columnId == "fileName") {
    let fname = ds_detail.getCellData(rowIndex, "fileName");
    let fpath = ds_detail.getCellData(rowIndex, "filePath");
    $c.gus.cfDownloadFile($p, fname, fpath);
  }
};

// 차량번호
scwin.udc_workVehclInfo_onblurCodeEvent = function (e) {
  scwin.f_ChkOpenCommonPopUp(1, ed_vehcelNo, ed_vehcelNm);
};

// 신청자
scwin.udc_affairsUserInfo_onblurCodeEvent = function (e) {
  scwin.f_ChkOpenCommonPopUp(2, ed_reqId, ed_reqNm);
};

// 관리부서
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  scwin.f_ChkOpenCommonPopUp(4, ed_deptCd, ed_deptNm);
};
scwin.gr_detail_oneditkeyup = async function (info) {
  if (info.colID == "oilingVol") {
    if (info.keyCode == 109 || info.keyCode == 189) {
      await $c.win.alert($p, "주유량은 양수만 입력 가능합니다.");
      ds_detail.setCellData(info.rowIndex, info.colID, info.oldValue);
      return;
    }
  }
};

// 엑셀업로드 테스트를 위해 만들어놓음
scwin.gr_excel_arvPlcNm_ontextimageclick = function (rowIndex, colId, nowValue) {
  scwin.f_OpenCommonPopUp(6, ds_excel.getCellData(0, "arvPlcNm"), "", "T", "T", 0);
};

// 엑셀업로드 테스트를 위해 만들어놓음
scwin.f_AddRow2 = function () {
  let row = ds_excel.insertRow();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'운행기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'dma_Retrieve',refEdDt:'dtTo',refStDt:'dtFrom',style:'',edFromId:'ed_dtFrom',edToId:'ed_dtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_vehcelNo',nameId:'ed_vehcelNm',refDataCollection:'dma_Retrieve',code:'vehcelNo',selectID:'retrieveWorkVehclInfo',id:'udc_workVehclInfo','ev:onclickEvent':'scwin.udc_workVehclInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_workVehclInfo_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_workVehclInfo_onblurCodeEvent',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'p_lc_selfYn',style:'width:120px;',submenuSize:'auto',ref:'data:dma_Retrieve.selfYn','ev:onchange':'scwin.p_lc_selfYn_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'임차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'임차(현장용)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'리스'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_reqId',nameId:'ed_reqNm',refDataCollection:'dma_Retrieve',code:'userId',selectID:'retrieveAffairsUserInfo',id:'udc_affairsUserInfo','ev:onclickEvent':'scwin.udc_affairsUserInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_affairsUserInfo_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_affairsUserInfo_onblurCodeEvent',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_deptCd',nameId:'ed_deptNm',refDataCollection:'dma_Retrieve',code:'deptCd',selectID:'retrieveAcctDeptCdInfo',id:'udc_acctDeptCdInfo','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실적유무',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_travelDtcYn',style:'width:120px;',submenuSize:'auto',ref:'data:dma_Retrieve.travelDtcYn'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'차량별 운행실적',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'Y',gridID:'gr_vehclRunList',gridDownFn:'scwin.f_runExcel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox gvwfix'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_out',style:'',id:'gr_vehclRunList',visibleRowNum:'5',class:'wq_gvw',fixedColumn:'6',readOnly:'true','ev:oncellclick':'scwin.gr_vehclRunList_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column1',value:'관리부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column17',value:'관리부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column15',value:'신청일자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column13',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column11',value:'차명',displayMode:'label',fixColumnWidth:'5'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'60',inputType:'text',id:'column9',value:'rsvSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column3',value:'사용자<br/>ID',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column5',value:'신청자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column33',value:'출발일자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column31',value:'출발<br/>시간',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column29',value:'도착일자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column27',value:'도착<br/>시간',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column25',value:'운행일자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'130',inputType:'text',id:'column23',value:'행선지',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column21',value:'전주행거리',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'3',width:'210',inputType:'text',id:'column7',value:'주행거리(Km)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column51',value:'주행거리<br/>누계',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column49',value:'주유량',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column47',value:'주유<br/>금액',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column45',value:'수리비',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column43',value:'통행료',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column41',value:'주차료',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column35',value:'기타<br/>비용',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column37',value:'연비',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column100',value:'확정<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column97',value:'주행일자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column94',displayMode:'label',value:'dptDt2'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column91',displayMode:'label',value:'arvDt2'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column88',value:'마감일자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column85',value:'담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column82',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column39',value:'장비번호',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column103',value:'거래처번호',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column66',value:'출퇴근',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column65',value:'업무',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column64',value:'비업무',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'deptCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'deptNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rsvDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqModelNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'rsvSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'userId',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'userNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptDt',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvDt',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'runDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'arvPlcNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptTotTravelDtc',displayMode:'label',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'travelDtc1',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'travelDtc2',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'travelDtc3',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'totTravelDtc',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'oilingVol',displayMode:'label',textAlign:'right',displayFormat:'#,##0.000',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'oilingAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'repairAmt',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'trafficAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'parkingAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'etcAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'fleecncyAmt',displayMode:'label',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'closeYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'runDt2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'dptDt2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'arvDt2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'closeDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'closePic',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'runSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'eqCd',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',textAlign:'left',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',displayFormat:'#,##0',dataType:'number',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'실적 상세',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownYn:'Y',gridUpYn:'Y',gridID:'gr_detail',gridDownFn:'scwin.f_runExcel2',gridDownUserAuth:'X',gridUpUserAuth:'C',gridUpFn:'scwin.f_Upload',id:'udc_detail',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox gvwfix'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw',dataList:'data:ds_detail',id:'gr_detail',rowNumHeaderValue:'No',rowNumWidth:'50',style:'',visibleRowNum:'5',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'20','ev:onafteredit':'scwin.gr_detail_onafteredit','ev:oncelldblclick':'scwin.gr_detail_oncelldblclick','ev:oneditkeyup':'scwin.gr_detail_oneditkeyup'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column57',displayMode:'label',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'예약일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'예약번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'차량구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'주행일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'순번',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'일자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'사용목적',width:'130',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'사용자',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'사용자명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column33',value:'주행전 계기판의<br/>거리(Km)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'행선지주소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column37',value:'행선지',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column39',value:'주행후 계기판의<br/>거리(Km)',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'주행거리<br/>(Km)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'주유량(L)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'주유금액',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'수리비',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'통행료',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'주차료',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'기타비용',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'증빙파일경로',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'증빙파일',width:'150',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'chk',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsvDt',inputType:'text',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'rsvSeq',inputType:'text',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selfYn',inputType:'text',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'runDt',inputType:'text',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'runSeq',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDt',inputType:'calendar',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{id:'tskCls',inputType:'select',width:'130',textAlign:'left',displayFormat:'scwin.tskClsDisplayFm',displayMode:'value delim label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userId',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'userNm',displayMode:'label',imageClickFunction:'scwin.gr_userNm_ontextimageclick',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'dptTotTravelDtc',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvZip',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'textImage',id:'arvPlcNm',displayMode:'label',imageClickFunction:'scwin.gr_arvPlcNm_ontextimageclick',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'totTravelDtc',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'travelDtc',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'',id:'oilingVol',displayMode:'label',textAlign:'right',displayFormat:'#,###.000',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'oilingAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'repairAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'trafficAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'parkingAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'etcAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'filePath',displayMode:'label',textAlign:'right',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fileName',inputType:'textImage',width:'150',imageClickFunction:'scwin.gr_fileName_ontextimageclick',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column82',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column80',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column78',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column77',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column76',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column74',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'column71',displayMode:'label',expression:'SUM("TravelDtc")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column68',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column67',displayMode:'label',expression:'SUM("travelDtc")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column66',displayMode:'label',expression:'SUM("oilingVol")',textAlign:'right',displayFormat:'#,###.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column65',displayMode:'label',expression:'SUM("oilingAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column64',displayMode:'label',expression:'SUM("repairAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column63',displayMode:'label',expression:'SUM("trafficAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column62',displayMode:'label',expression:'SUM("parkingAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column61',displayMode:'label',expression:'SUM("etcAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column59',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',displayFormat:'#,##0',dataType:'number',style:'',id:'totalRows_detail',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'N',cancelFunction:'scwin.f_cancel',rowAddFunction:'scwin.f_AddRow',style:'',btnRowAddObj:'b_add',btnCancelObj:'b_cancel',rowAddObjType:'ctrlBtn',cancelObjType:'ctrlBtn'}}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'display : none;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'엑셀업로드',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridDownYn:'Y',gridUpYn:'Y',grp:'grd_section3',style:'',gridDownUserAuth:'X',gridID:'gr_excel',gridUpFn:'scwin.f_Upload',gridDownFn:'scwin.f_runExcel3',gridUpUserAuth:'C'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section3',class:'gvwbox gvwfix'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',dataList:'data:ds_excel',style:'',autoFit:'allColumn',id:'gr_excel',visibleRowNum:'5','ev:onfilereadend':'scwin.gr_excel_onfilereadend',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column78',value:'temp',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'신청일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column84',value:'사용목적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',class:'txt-red',value:'사용자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column33',value:'주행전 계기판의<br/>거리(Km)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column37',class:'txt-red',value:'행선지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column39',class:'txt-red',value:'주행후 계기판의<br/>거리(Km)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'주행거리<br/>(Km)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',class:'txt-blue',value:'주유량(L)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',class:'txt-blue',value:'주유금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',class:'txt-blue',value:'수리비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',class:'txt-blue',value:'통행료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',class:'txt-blue',value:'주차료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',class:'txt-blue',value:'기타비용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column19',class:'txt-blue',value:'증빙파일',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'temp',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'runDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'tskCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',id:'userNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'200',inputType:'text',id:'dptTotTravelDtc',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'130',inputType:'textImage',id:'arvPlcNm',displayMode:'label',imageClickFunction:'scwin.gr_excel_arvPlcNm_ontextimageclick'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'130',displayFormat:'#,##0',excelCellType:'number',inputType:'text',id:'totTravelDtc',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'TravelDtc',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,###.000',excelCellType:'number',inputType:'',id:'oilingVol',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',excelCellType:'number',inputType:'text',id:'oilingAmt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',excelCellType:'number',inputType:'text',id:'repairAmt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',excelCellType:'number',inputType:'text',id:'trafficAmt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',excelCellType:'number',inputType:'text',id:'parkingAmt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',excelCellType:'number',inputType:'text',id:'etcAmt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',id:'fileName',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{rowAddObjType:'ctrlBtn',rowAddFunction:'scwin.f_AddRow2',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',btnDelYn:'N',btnRowDelYn:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'info-box row-gap-8',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'info-ico ',escape:'false',id:'',label:'차량별 운행실적 Excel 업로드시 유의사항',style:''}},{T:1,N:'w2:textbox',A:{class:'info-con txt-dot',escape:'false',id:'',label:'<span class="txt-blue">업로드할 Excel파일에 \',\'가 있다면, 잘못된 정보가 올라갈 수 있으니 제거해주시기 바랍니다.</span>',style:''}},{T:1,N:'w2:textbox',A:{class:'info-con txt-dot',escape:'false',id:'',label:'<span class="txt-blue">업로드시 사용자명은 사번(123456)으로 행선지는 <span class="txt-red">우편번호(12345)</span> 로 입력바랍니다.</span>',style:''}},{T:1,N:'w2:textbox',A:{class:'info-con txt-dot',escape:'false',id:'',label:'<span class="txt-red">우편번호(12345)는 차량 예약 화면에서 확인할 수 있습니다.<span class="txt-red">',style:''}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_Delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Delete',objType:'ctrlBtn',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'','ev:onclickEvent':'scwin.udc_affairsUserInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_affairsUserInfo_onviewchangeNameEvent',hideName:'Y',id:'udc_userInfo',nameId:'',popupID:'',selectID:'retrieveUserInfo',style:';visibility:hidden;'}},{T:1,N:'w2:udc_comCode',A:{codeId:'','ev:onclickEvent':'scwin.udc_affairsUserInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_affairsUserInfo_onviewchangeNameEvent',id:'udc_fmsZipList',nameId:'',popupID:'',selectID:'retrieveFmsZipList',style:';visibility:hidden;'}}]}]}]}]}]})