/*amd /ui/ja/dn/workrslts/ja_401_01_06b.xml 58654 3d01847258c27828c16a31b3c7ea3bfce6b929ea1a81af9ceaf5b95b053ab386 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsStdDtSt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsStdDtEnd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'uploadDt',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt01',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt02',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt03',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt04',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt05',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt06',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt07',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt08',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt09',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt10',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt11',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt12',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt13',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt14',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt15',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt16',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt17',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt18',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt19',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc01',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc02',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc03',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc04',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc05',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc06',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc07',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc08',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc09',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc10',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc11',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc12',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc13',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc14',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc15',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc16',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc17',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uploadNo',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsMgntNo',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'name45',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ja.dn.workrslts.RetrieveJa210ExcelCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submiterror':'',abortTrigger:'','ev:submitdone':'scwin.sbm_retrieve_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ja.dn.workrslts.SaveJa210ExcelCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_results","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ja.dn.workrslts.SaveJa210ExcelCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_results","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_apply',action:'/ja.dn.workrslts.SaveJa210ExcelCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_results","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submitdone':'scwin.sbm_apply_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurrDate = $c.date.getServerDateTime($p, 'yyyyMMdd'); // 서버를 기준으로 현재 날짜 반환
scwin.strStartDate = $c.date.addDate($p, scwin.strCurrDate, -2);
scwin.strFirstDate = scwin.strCurrDate.substring(0, 6) + '01';
scwin.adptYm = scwin.strCurrDate;
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  ed_adptYm.setValue(scwin.adptYm.substring(0, 6));
  ed_rsltsStdDtSt.setValue(scwin.strCurrDate);
  ed_rsltsStdDtEnd.setValue(scwin.strCurrDate);
};
scwin.f_Retrieve = function () {
  if (ds_condition.get('rsltsStdDtSt') == '' || ds_condition.get('rsltsStdDtEnd') == '') {
    $c.win.alert($p, '실적기간은 필수 입력 항목입니다.');
    return false;
  }
  let chkDate = $c.date.diffDate($p, ed_rsltsStdDtSt.getValue(), ed_rsltsStdDtEnd.getValue());
  if (chkDate < 0) {
    $c.win.alert($p, MSG_CM_ERR_039);
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_Save = async function () {
  let checkedCnt = 0;
  let rowStatus = '';
  for (let i = 0; i < ds_results.getTotalRow(); i++) {
    rowStatus = ds_results.getRowStatus(i);

    //insert
    if (rowStatus == 'C') {
      if (!$c.date.isDate($p, ds_results.getCellData(i, 'rsltsStdDt'))) {
        $c.win.alert($p, i + '번째 데이터의 실적일자는 유효한 날짜 형식이 아닙니다.');
        return;
      }
      if (ds_results.getCellData(i, 'rsltsStdDt') == '') {
        $c.win.alert($p, i + '행의 실적일자는 필수 입력 항목 입니다.');
        return false;
      }
      if (ds_results.getCellData(i, 'vehclNo') == '') {
        $c.win.alert($p, i + '행의 차량번호는 필수 입력 항목 입니다.');
        return false;
      }
      if (ds_results.getCellData(i, 'homeClntNo') == '') {
        $c.win.alert($p, i + '행의 소속거래처는 필수 입력 항목 입니다.');
        return false;
      }
      if (ds_results.getCellData(i, 'clntNo') == '' && ds_results.getCellData(i, 'clntNm') == '') {
        $c.win.alert($p, i + '행의 매니저코드/명  중 하나는 필수 입력 항목 입니다.');
        return false;
      }
      checkedCnt++;
    }
    //DELETE
    if (rowStatus == 'D') {
      checkedCnt++;
    }
  } //for

  if (checkedCnt == 0) {
    $c.win.alert($p, '저장 할 데이터가 없습니다.');
    return false;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.f_Apply = async function () {
  let checkedCnt = 0;
  let rowStatus;
  for (let i = 0; i < ds_results.getTotalRow(); i++) {
    rowStatus = ds_results.getRowStatus(i);

    //update
    if (rowStatus == 'U') {
      //3:update
      if (ds_results.getCellData(i, 'uploadNo') == '') {
        $c.win.alert($p, '업로드 후 적용해주세요');
        return;
      }
      if (ds_results.getCellData(i, 'rsltsMgntNo') != '') {
        $c.win.alert($p, '적용된 데이터는 재 적용할 수 없습니다.');
        return;
      }
      checkedCnt++;
    }
  } //for

  if (checkedCnt == 0) {
    $c.win.alert($p, '적용 할 데이터가 없습니다.');
    return false;
  }
  if (await $c.win.confirm($p, '업로드 한 운송임을 등록하시겠습니까?')) {
    $c.sbm.execute($p, sbm_apply);
  }
};
scwin.f_FieldClear = function () {
  ed_homeClntNoCd.setValue(''); //거래처번호
  ed_homeClntNoNm.setValue(''); //거래처명

  ed_clntNoCd.setValue(''); //매니져코드
  ed_clntNoNm.setValue(''); //매출입항목명

  ed_vehclNoCd.setValue(''); // 차량번호
  ed_vehclNoNm.setValue(''); // 차량번호

  cbx_repClntYn.setValue('999999999');
  ed_rsltsStdDtSt.setValue(scwin.strCurrDate);
  ed_rsltsStdDtEnd.setValue(scwin.strCurrDate);
};
scwin.f_chkOpenCommonPopUp = function (type, disGubun, codeObj, nameObj, pClose, pAllSearch) {
  let codeVal = codeObj.getValue();
  let nameVal = nameObj.getValue();
  if (type == 'CODE') {
    nameObj.setValue('');
    if (codeVal == '') {
      codeObj.setValue('');
      return;
    }
  } else if (type == 'NAME') {
    codeObj.setValue('');
    if (nameVal == '') {
      nameObj.setValue('');
      return;
    }
  }
  if (type == 'CODE') {
    scwin.f_openCommonPopUp(disGubun, codeVal, '', pClose, pAllSearch);
  } else if (type == 'NAME') {
    scwin.f_openCommonPopUp(disGubun, '', nameVal, pClose, pAllSearch);
  } else if (type == 'SEARCH') {
    scwin.f_openCommonPopUp(disGubun, codeVal, nameVal, pClose, pAllSearch);
  }
};
scwin.rowPos = -1;
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let pWhere = '';
  switch (disGubun) {
    //거래처
    case 1:
      if (cbx_repClntYn.checked) {
        pWhere = 'RP';
      }
      udc_comCodeHomeClntNo.setSelectId('retrieveSubsidaryClntList');
      udc_comCodeHomeClntNo.cfCommonPopUp(scwin.udc_comCodeHomeClntNo_callback // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - ndefault (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	('F')
      , pAllSearch // 전체검색허용여부	('F')
      , '거래처,거래처코드,거래처명' // POP-UP Window Title 검색어1,2	 ('Win타이틀,첫번검색Nm,두번?검색Nm')
      );
      break;
    //매니져
    case 11:
      udc_comCodeClntNo.setSelectId('retrieveSubsidaryClntList');
      udc_comCodeClntNo.cfCommonPopUp(scwin.udc_comCodeClntNo_callback // XML상의 SELECT ID
      , pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch // 전체검색허용여부	("F")
      , "거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")	
      );
      break;
    //매출입항목	
    case 2:
      pWhere = ',,,,,';
      ud_comCodeSelpchItem.setSelectId('retrieveSelpchItemInfo');
      ud_comCodeSelpchItem.cfCommonPopUp(scwin.ud_comCodeSelpchItem_callback // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부
      , pAllSearch // 전체검색허용여부
      , null // POP-UP Window Title 검색어1,2(각화면에서 변경할경우)	  							
      );
      break;
    //차량번호	
    case 3:
      udc_comCodeVehclNo.setSelectId('retrieveSubsidaryVehclList');
      udc_comCodeVehclNo.cfCommonPopUp(scwin.udc_comCodeVehclNo_callback // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '400' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	('F')
      , pAllSearch // 전체검색허용여부	('F')
      , '차량번호,차량단축코드,차량번호' // POP-UP Window Title 검색어1,2	 ('Win타이틀,첫번검색Nm,두번?검색Nm')
      );
      break;

    //그리드차량번호	
    case 4:
      udc_comCode_grid_VehclNo.setSelectId('retrieveSubsidaryVehclList');
      udc_comCode_grid_VehclNo.cfCommonPopUp(scwin.udc_comCode_grid_VehclNo_callback // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '400' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	('F')
      , pAllSearch // 전체검색허용여부	('F')
      , '차량번호,차량단축코드,차량번호' // POP-UP Window Title 검색어1,2	 ('Win타이틀,첫번검색Nm,두번?검색Nm')
      );
      break;

    //그리드소속거래처	
    case 5:
      udc_comCode_grid_homeClntNo.setSelectId('retrieveSubsidaryClntList');
      udc_comCode_grid_homeClntNo.cfCommonPopUp(scwin.udc_comCode_grid_homeClntNo_callback // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	('F')
      , pAllSearch // 전체검색허용여부	('F')
      , '거래처,거래처코드,거래처명' // POP-UP Window Title 검색어1,2	 ('Win타이틀,첫번검색Nm,두번?검색Nm')
      );
      break;

    //그리드매니저	
    case 6:
      udc_comCode_grid_clntNo.setSelectId('retrieveSubsidaryClntList');
      udc_comCode_grid_clntNo.cfCommonPopUp(scwin.udc_comCode_grid_clntNo_callback // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , '150,170' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	('F')
      , pAllSearch // 전체검색허용여부	('F')
      , '거래처,거래처코드,거래처명' // POP-UP Window Title 검색어1,2	 ('Win타이틀,첫번검색Nm,두번?검색Nm')
      );
      break;

    //그리드매출입항목
    case 7:
      udc_comCode_grid_selpchItemInfo.setSelectId('retrieveSelpchItemInfo');
      udc_comCode_grid_selpchItemInfo.cfCommonPopUp(scwin.udc_comCode_grid_selpchItemInfo_callback // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부
      , pAllSearch // 전체검색허용여부
      , null // POP-UP Window Title 검색어1,2(각화면에서 변경할경우)	  							
      );
      break;
    default:
      break;
  }
};
scwin.udc_comCodeHomeClntNo_callback = function (rtnList) {
  if (rtnList != null && rtnList[0] != 'N/A') {
    $c.gus.cfSetReturnValue($p, rtnList, ed_homeClntNoCd, ed_homeClntNoNm);
    ds_condition.set('upperClntNo', rtnList[5]);
  } else {
    ed_homeClntNoCd.setValue('');
    ed_homeClntNoNm.setValue('');
  }
};
scwin.udc_comCodeClntNo_callback = function (rtnList) {
  if (rtnList != null && rtnList[0] != 'N/A') {
    $c.gus.cfSetReturnValue($p, rtnList, ed_clntNoCd, ed_clntNoNm);
  } else {
    ed_homeClntNoCd.setValue('');
    ed_homeClntNoNm.setValue('');
  }
};
scwin.ud_comCodeSelpchItem_callback = function (rtnList) {
  if (rtnList != null && rtnList[0] != 'N/A') {
    $c.gus.cfSetReturnValue($p, rtnList, ed_selpchItemCd, ed_selpchItemNm);
  } else {
    ed_selpchItemCd.setValue('');
    ed_selpchItemNm.setValue('');
  }
};
scwin.udc_comCodeVehclNo_callback = function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_vehclNoCd, ed_vehclNoNm);
    ed_homeClntNoCd.setValue(rtnList[3]);
    ed_homeClntNoNm.setValue(rtnList[4]);
  } else {
    ed_vehclNoCd.setValue('');
    ed_vehclNoNm.setValue('');
  }
};
scwin.udc_comCode_grid_VehclNo_callback = function (rtnList) {
  let row = ds_results.getRowPosition();
  if (rtnList != null) {
    ds_results.setCellData(row, 'vehclNo', rtnList[1]);
    ds_results.setCellData(row, 'homeClntNo', rtnList[3]);
    ds_results.setCellData(row, 'homeClntNm', rtnList[4]);
    ds_results.setCellData(row, 'clntNo', rtnList[5]);
    ds_results.setCellData(row, 'clntNm', rtnList[6]);
    ds_results.setCellData(row, 'eqCd', rtnList[7]);
    let colIndex = gr_results.getColumnIndex('rsltsStdDt');
    gr_results.setFocusedCell(row, colIndex);
  } else {
    ds_results.setCellData(row, 'vehclNo', '');
  }
};
scwin.udc_comCode_grid_clntNo_callback = function (rtnList) {
  let row = ds_results.getRowPosition();
  if (rtnList != null) {
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_results, row, 'homeClntNo', 'homeClntNm');
  } else {
    ds_results.setCellData(row, 'homeClntNo', '');
    ds_results.setCellData(row, 'homeClntNm', '');
  }
};
scwin.udc_comCode_grid_homeClntNo_callback = function (rtnList) {
  let row = ds_results.getRowPosition();
  if (rtnList != null) {
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_results, row, 'clntNo', 'clntNm');
  } else {
    ds_results.setCellData(row, 'clntNo', '');
    ds_results.setCellData(row, 'clntNm', '');
  }
};
scwin.udc_comCode_grid_selpchItemInfo_callback = function (rtnList) {
  let row = ds_results.getRowPosition();
  if (rtnList != null && rtnList[0] != 'N/A') {
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_results, row, 'selpchItemCd', 'selpchItemNm');
    if (rtnList[2] == 0) {
      ds_results.setCellData(row, 'taxnClsCd', '03');
      ds_results.setCellData(row, 'clntVat', 0);
    } else {
      ds_results.setCellData(row, 'taxnClsCd', '01');
    }
  } else {
    ds_results.setCellData(row, 'selpchItemCd', '');
    ds_results.setCellData(row, 'selpchItemNm', '');
  }
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_addRow = function () {
  ds_results.insertData(ds_results.getRowCount());
  let row = ds_results.getRowPosition();
  ds_results.setCellData(row, 'chk', '1');
  ds_results.setCellData(row, 'rsltsStdDt', ed_rsltsStdDtSt.getValue());
  ds_results.setCellData(row, 'selPchItemCd', ed_selpchItemCd.getValue());
  ds_results.setCellData(row, 'selPchItemNm', ed_selpchItemNm.getValue());
  ds_results.setCellData(row, 'sellClntNo', ed_homeClntNoCd.getValue());
  ds_results.setCellData(row, 'sellClntNm', ed_homeClntNoNm.getValue());
  ds_results.setCellData(row, 'vehclNo', ed_vehclNoNm.getValue());
  ds_results.setCellData(row, 'dcsnYn', 1); //확정여부 (1.미확정)
};

//-------------------------------------------------------------------------
// 행삭제
//------------------------------------------------------------------------- 
scwin.f_Delete = async function () {
  var idx = [];
  for (let i = 0; i < ds_results.getTotalRow(); i++) {
    if (ds_results.getCellData(i, 'chk') == '1') {
      if (ds_results.getCellData(i, 'rsltsMgntNo') != '') {
        $c.win.alert($p, '적용 후 실적번호가 생성된경우 삭제할 수 없습니다.');
        return;
      }
      idx.push(i);
    }
  }
  if (idx.length == 0) {
    $c.win.alert($p, '삭제할 운송임및비용을 선택해 주십시오.');
    return;
  }
  let confirm = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (confirm) {
    for (var i = 0; i < idx.length; i++) {
      ds_results.deleteRow(idx[i]);
    }
    $c.sbm.execute($p, sbm_delete);
  }
};

//-----------------------------------------------------------------------------
//    C O M P O N E N T' S   E V E N T S  
//------------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  let rowCnt = ds_results.getTotalRow();
  txt_totalCnt.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};
scwin.sbm_delete_submitdone = async function (e) {
  await $c.win.alert($p, MSG_CM_INF_004); // 성공적으로 삭제하였습니다
  scwin.f_Retrieve();
};
scwin.sbm_apply_submitdone = async function (e) {
  await $c.win.alert($p, MSG_CM_INF_002); // 성공적으로 등록하였습니다.
  scwin.f_Retrieve();
};
scwin.gr_results_onheaderclick = function (headerId) {
  if (headerId == 'chkHeader') {
    let bCheck = gr_results.getHeaderValue(headerId);
    grd_results.checkAll('chk', bCheck);
  }
};

// 거래처 코드
scwin.udc_comCodeHomeClntNo_onclickEvent = function (e) {
  scwin.f_chkOpenCommonPopUp('SEARCH', 1, ed_homeClntNoCd, ed_homeClntNoNm, 'F', 'F');
};
scwin.udc_comCodeHomeClntNo_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenCommonPopUp('CODE', 1, ed_homeClntNoCd, ed_homeClntNoNm, 'T', 'F');
};
scwin.udc_comCodeHomeClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp('NAME', 1, ed_homeClntNoCd, ed_homeClntNoNm, 'T', 'F');
};

// 메니져
scwin.udc_comCodeClntNo_onclickEvent = function (e) {
  scwin.f_chkOpenCommonPopUp('SEARCH', 11, ed_clntNoCd, ed_clntNoNm, 'F', 'F');
};
scwin.udc_comCodeClntNo_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenCommonPopUp('CODE', 11, ed_clntNoCd, ed_clntNoNm, 'T', 'F');
};
scwin.udc_comCodeClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp('NAME', 11, ed_clntNoCd, ed_clntNoNm, 'T', 'F');
};

// 차량번호
scwin.udc_comCodeVehclNo_onclickEvent = function (e) {
  scwin.f_chkOpenCommonPopUp('SEARCH', 3, ed_vehclNoCd, ed_vehclNoNm, 'F', 'T');
};
scwin.udc_comCodeVehclNo_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenCommonPopUp('CODE', 3, ed_vehclNoCd, ed_vehclNoNm, 'T', 'T');
};
scwin.udc_comCodeVehclNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp('NAME', 3, ed_vehclNoCd, ed_vehclNoNm, 'T', 'T');
};
scwin.f_import = function () {
  ds_results.removeAll();
};
scwin.gr_results_onfilereadend = function (value) {
  let data = ds_results.getAllJSON();
  let newData = [];
  let excelColId = {
    "rsltsStdDt": "chk",
    "vehclNo": "uploadNo",
    "homeClntNo": "rsltsMgntNo",
    "clntNo": "rsltsStdDt",
    "clntNm": "vehclNo",
    "amt01": "homeClntNo",
    "amt02": "clntNo",
    "amt03": "clntNm",
    "amt04": "amt01",
    "amt05": "amt02",
    "amt06": "amt03",
    "amt07": "amt04",
    "amt08": "amt05",
    "amt09": "amt06",
    "amt10": "amt07",
    "amt11": "amt08",
    "amt12": "amt09",
    "amt13": "amt10",
    "amt14": "amt11",
    "amt15": "amt12",
    "amt16": "amt13",
    "amt17": "amt14",
    "amt18": "amt15",
    "amt19": "amt16",
    "etc01": "amt17",
    "etc02": "amt18",
    "etc03": "amt19",
    "etc04": "etc01",
    "etc05": "etc02",
    "etc06": "etc03",
    "etc07": "etc04",
    "etc08": "etc05",
    "etc09": "etc06",
    "etc10": "etc07",
    "etc11": "etc08",
    "etc12": "etc09",
    "etc13": "etc10",
    "etc14": "etc11",
    "etc15": "etc12",
    "etc16": "etc13",
    "etc17": "etc14"
  };

  // 업로드 데이터 가공
  for (let i = 1; i < data.length; i++) {
    let addItem = {};
    for (var item in excelColId) {
      addItem[item] = data[i][excelColId[item]];
    }
    newData.push(addItem);
  }

  // 코드명 조회
  ds_results.setJSON(newData);
  ds_results.modifyAllStatus('C');
  let altMsg = [];
  for (let i = 0; i < newData.length; i++) {
    if (newData[i]["rsltsStdDt"] == "") continue;
    scwin.rowPos = i;
    ds_results.setRowPosition(i);

    // 기타매출 vs 기타매출상세 합계 체크
    let amt10 = Number(newData[i]["amt10"]);
    let etcSum = 0;
    for (let item in newData[i]) {
      if (item.startsWith("etc")) {
        if (isNaN(newData[i][item])) {
          ds_results.setCellData(i, item, 0);
        } else {
          etcSum += Number(newData[i][item]);
        }
      }
    }
    if (amt10 != etcSum) {
      altMsg.push(i + 1);
    }
  }
  if (altMsg.length != 0) {
    $c.win.alert($p, altMsg.join(',') + "열의 기타매출액과 기타매출상세의 합이 일치하지 않습니다.");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_comCodeHomeClntNo','ev:onclickEvent':'scwin.udc_comCodeHomeClntNo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeHomeClntNo_onviewchangeNameEvent',code:'homeClntNo',codeId:'ed_homeClntNoCd',nameId:'ed_homeClntNoNm',allowCharCode:'0-9',objTypeCode:'Data',refDataCollection:'ds_condition',maxlengthCode:'6','ev:onviewchangeCodeEvent':'scwin.udc_comCodeHomeClntNo_onviewchangeCodeEvent'}},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_repClntYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대표거래처'}]},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매니저코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_comCodeClntNo','ev:onclickEvent':'scwin.udc_comCodeClntNo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeClntNo_onviewchangeNameEvent',codeId:'ed_clntNoCd',nameId:'ed_clntNoNm',code:'clntNo',refDataCollection:'ds_condition',allowCharCode:'0-9',objTypeCode:'Data',maxlengthCode:'6','ev:onviewchangeCodeEvent':'scwin.udc_comCodeClntNo_onviewchangeCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_calendar',refDataMap:'ds_condition',refEdDt:'rsltsStdDtEnd',refStDt:'rsltsStdDtSt',style:'',edFromId:'ed_rsltsStdDtSt',edToId:'ed_rsltsStdDtEnd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_comCodeVehclNo','ev:onclickEvent':'scwin.udc_comCodeVehclNo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodeVehclNo_onviewchangeNameEvent',codeId:'ed_vehclNoCd',nameId:'ed_vehclNoNm',refDataCollection:'ds_condition',allowCharCode:'0-9',maxlengthCode:'4',name:'vehclNo','ev:onviewchangeCodeEvent':'scwin.udc_comCodeVehclNo_onviewchangeCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'운송임및비용',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:anchor',A:{download:'운송임및비용등록_SAMPLE.csv',outerDiv:'false',style:'',href:'/ui/ja/dn/workrslts/운송임및비용등록(일괄)_SAMPLE.csv',id:'anchor2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'SAMPLE'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',gridUpYn:'Y',gridID:'gr_results',grdDownOpts:'{"fileName":"운송임및비용등록.xlsx","sheetName":"운송임및비용등록","type":"8+16"}',grdUpOpts:'{"startRowIndex":0}',btnUser:'N',gridDownUserAuth:'X',id:'udc_btn'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',fixedColumn:'1',fixedColumnLineDiv:'1',visibleRowNum:'15',visibleRowNumFix:'true','ev:onheaderclick':'scwin.gr_results_onheaderclick',readOnly:'true',rowStatusVisible:'true','ev:onfilereadend':'scwin.gr_results_onfilereadend',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'headerId',inputType:'checkbox',width:'50',rowSpan:'2',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'업로드번호',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'실적번호',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'실적일자',width:'100',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'차량번호',width:'100',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'소속거래처',width:'100',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'매니저',width:'140',colSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'운송임항목(지급:17건,공제:2건)',width:'1330',colSpan:'19'}},{T:1,N:'w2:column',A:{width:'1260',inputType:'text',id:'column61',value:'기타매출상세(17건)',displayMode:'label',colSpan:'17'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column136',value:'등록자ID',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column133',value:'등록일시',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column127',value:'수정자ID',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column130',value:'수정일시',displayMode:'label',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column47',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'운송비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',value:'근속수당',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'도로비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',value:'하이패스(지급)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'주차비(지급)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'유류비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'유류비차액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column38',value:'반장수당',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'소독비(과세)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column86',value:'기타매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column83',value:'문서수발대금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column80',value:'특근수당',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column77',value:'연장근무',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column74',value:'인센티브',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column71',value:'기타수입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column68',value:'기타비용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',value:'매출세액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column56',value:'지입료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'기타관리비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column110',value:'추가배송비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column107',value:'2회전배송비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column104',value:'장거리수당',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column101',value:'휴무보전비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column98',value:'내부용차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column89',value:'외부용차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column92',value:'대차용차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column95',value:'용차수수료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column125',value:'용차공제',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column122',value:'상하차지원비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column119',value:'세차비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column113',value:'통신비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column116',value:'경조사지원금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column149',value:'공제(페널티 외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column146',value:'기타(수당)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column143',value:'기타(지원금)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column140',value:'기타(용차)',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'uploadNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsMgntNo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClntNo',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'60',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt01',inputType:'text',width:'100',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'amt02',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'amt03',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'amt04',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'amt05',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'amt06',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'amt07',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'amt08',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'amt09',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'amt10',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'amt11',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'amt12',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'amt13',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'amt14',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'amt15',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'amt16',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'amt17',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'amt18',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'amt19',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etc01',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etc02',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etc03',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etc04',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etc05',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etc06',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etc07',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etc08',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etc09',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'etc10',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etc11',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etc12',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'etc13',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'etc14',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etc15',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etc16',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etc17',displayMode:'label',textAlign:'right',excelFormat:'#,##0',displayFormat:'#,##0',dataType:'number',maxLength:'15',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regId',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regDtm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'modId',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'modDtm',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column200',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column199',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column198',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column197',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column196',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column194',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column193',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column192',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_amt01',displayMode:'label',textAlign:'right',expression:'sum(\'amt01\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_amt02',displayMode:'label',textAlign:'right',expression:'sum(\'amt02\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_amt03',displayMode:'label',textAlign:'right',expression:'sum(\'amt03\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'sum_amt04',displayMode:'label',textAlign:'right',expression:'sum(\'amt04\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_amt05',displayMode:'label',textAlign:'right',expression:'sum(\'amt05\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_amt06',displayMode:'label',textAlign:'right',expression:'sum(\'amt06\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_amt07',displayMode:'label',textAlign:'right',expression:'sum(\'amt07\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_amt08',displayMode:'label',textAlign:'right',expression:'sum(\'amt08\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_amt09',displayMode:'label',textAlign:'right',expression:'sum(\'amt09\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_amt10',displayMode:'label',textAlign:'right',expression:'sum(\'amt10\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'sum_amt11',displayMode:'label',textAlign:'right',expression:'sum(\'amt11\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_amt12',displayMode:'label',textAlign:'right',expression:'sum(\'amt12\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_amt13',displayMode:'label',textAlign:'right',expression:'sum(\'amt13\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_amt14',displayMode:'label',textAlign:'right',expression:'sum(\'amt14\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_amt15',displayMode:'label',textAlign:'right',expression:'sum(\'amt15\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',displayMode:'label',textAlign:'right',expression:'sum(\'amt16\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number',id:'sum_amt16'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_amt17',displayMode:'label',textAlign:'right',expression:'sum(\'amt17\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_amt18',displayMode:'label',textAlign:'right',expression:'sum(\'amt18\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_amt19',displayMode:'label',textAlign:'right',expression:'sum(\'amt9\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_etc01',displayMode:'label',textAlign:'right',expression:'sum(\'etc01\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_etc02',displayMode:'label',textAlign:'right',expression:'sum(\'etc02\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_etc03',displayMode:'label',textAlign:'right',expression:'sum(\'etc03\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_etc04',displayMode:'label',textAlign:'right',expression:'sum(\'etc04\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_etc05',displayMode:'label',textAlign:'right',expression:'sum(\'etc05\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_etc06',displayMode:'label',textAlign:'right',expression:'sum(\'etc06\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_etc07',displayMode:'label',textAlign:'right',expression:'sum(\'etc07\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_etc08',displayMode:'label',textAlign:'right',expression:'sum(\'etc08\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_etc09',displayMode:'label',textAlign:'right',expression:'sum(\'etc09\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'sum_etc10',displayMode:'label',textAlign:'right',expression:'sum(\'etc10\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_etc11',displayMode:'label',textAlign:'right',expression:'sum(\'etc11\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_etc12',displayMode:'label',textAlign:'right',expression:'sum(\'etc12\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'sum_etc13',displayMode:'label',textAlign:'right',expression:'sum(\'etc13\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'sum_etc14',displayMode:'label',textAlign:'right',expression:'sum(\'etc14\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_etc15',displayMode:'label',textAlign:'right',expression:'sum(\'etc15\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_etc16',displayMode:'label',textAlign:'right',expression:'sum(\'etc16\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_etc17',displayMode:'label',textAlign:'right',expression:'sum(\'etc17\')',displayFormat:'#,##0',excelFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column154',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column153',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column152',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column151',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalCnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_apply',style:'',type:'button','ev:onclick':'scwin.f_Apply'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'적용'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_del',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'display:none;'},E:[{T:1,N:'xf:input',A:{style:'width:144px; height:21px; ',id:'ed_adptYm'}}]}]}]}]}]}]})