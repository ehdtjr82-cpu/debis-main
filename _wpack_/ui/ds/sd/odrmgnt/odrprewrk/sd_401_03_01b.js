/*amd /ui/ds/sd/odrmgnt/odrprewrk/sd_401_03_01b.xml 86880 216069cac2fd1b4b6ab737dd40f753cbaabddba3445a7727b6718d659adc20ca */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrAssignList',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_cntrAssignList_onrowpositionchange','ev:onaftercolumnfilterchange':'scwin.ds_cntrAssignList_onaftercolumnfilterchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'serCd',name:'선사서비스코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'String'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mblNo',name:'M B/L번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'hblNo',name:'H B/L번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'blTypCd',name:'BL_TYPE코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shpCoMark',name:'선사부호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomLineCd',name:'당사LINE코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomLineNm',name:'당사LINE명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkFrgtCd',name:'하선물품코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkBondZoneCd',name:'하선보세구역코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkPlcCd',name:'하선장소코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkPlcNm',name:'하선장소명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcCd',name:'당사하선장소코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcNm',name:'당사하선장소명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnBondZoneCd',name:'배정보세구역코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnWhouseCd',name:'배정창고코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnWhouseNm',name:'배정창고명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnClsCd',name:'배정구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnClsNm',name:'배정구분명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'당사배정구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsNm',name:'당사배정구분명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mfCommNm',name:'적하목록품명명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'포장개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'packUnitCd',name:'포장단위코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'totWt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totCbm',name:'총CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cargoAttrCd',name:'화물속성코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'lupDtmFrom',name:'검색일시FROM',dataType:'String'}},{T:1,N:'w2:column',A:{id:'lupDtmTo',name:'검색일시TO',dataType:'String'}},{T:1,N:'w2:column',A:{id:'rettlPosCd',name:'검색기위치코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cnt20Feet',name:'20FEET개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cnt40Feet',name:'40FEET개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cnt45Feet',name:'45FEET개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'lodCvsslOrder',name:'#N/A',dataType:'String'}},{T:1,N:'w2:column',A:{id:'impCvsslOrder',name:'수입본선오더 생성여부',dataType:'String'}},{T:1,N:'w2:column',A:{id:'impGnrlOrder',name:'수입일반오더 생성여부',dataType:'String'}},{T:1,N:'w2:column',A:{id:'impCtOrder',name:'#N/A',dataType:'String'}},{T:1,N:'w2:column',A:{id:'impCsOrder',name:'#N/A',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcClsCd',name:'#N/A',dataType:'String'}},{T:1,N:'w2:column',A:{id:'stdBlYn',name:'기준BL여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'blProcYn',name:'BL처리여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'changeCheck',name:'0',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcChangeCheck',name:'0',dataType:'number'}},{T:1,N:'w2:column',A:{id:'blCheck',name:'#N/A',dataType:'number'}},{T:1,N:'w2:column',A:{id:'che',name:'선택여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrCreateYn',name:'오더생성여부구분',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'선박관리번호',dataType:'String'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_blCntrList',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_blCntrList_onrowpositionchange','ev:onaftercolumnfilterchange':'scwin.ds_blCntrList_onaftercolumnfilterchange','ev:oncelldatachange':'scwin.ds_blCntrList_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'isoCd',name:'ISO_CD',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'String'}},{T:1,N:'w2:column',A:{id:'sealNo1',name:'봉인번호1',dataType:'String'}},{T:1,N:'w2:column',A:{id:'sealNo2',name:'봉인번호2',dataType:'String'}},{T:1,N:'w2:column',A:{id:'sealNo3',name:'봉인번호3',dataType:'String'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'포장개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'packUnitCd',name:'포장단위코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'xrayLupTrgtYn',name:'XRAY검색대상여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'autoSetting',name:'0',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'String'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_cntrAssignQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'mrn',name:'MRN',dataType:'String',defaultValue:''}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'String',defaultValue:''}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN',dataType:'number',defaultValue:'-1'}},{T:1,N:'w2:key',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number',defaultValue:'-1'}},{T:1,N:'w2:key',A:{id:'msnFrom',name:'MSNFROM',dataType:'String',defaultValue:''}},{T:1,N:'w2:key',A:{id:'msnTo',name:'MSNTO',dataType:'String',defaultValue:''}},{T:1,N:'w2:key',A:{id:'fioBtClsCd',name:'FIO_BT구분코드',dataType:'String',defaultValue:''}},{T:1,N:'w2:key',A:{id:'bulkYn',name:'벌크여부',dataType:'String',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'stdBlYn',name:'기준BL여부',dataType:'Integer',defaultValue:'1'}},{T:1,N:'w2:key',A:{id:'mcomDsmbrkPlcCd',name:'당사하선장소코드',dataType:'String',defaultValue:''}},{T:1,N:'w2:key',A:{id:'assgnClsCd',name:'배정구분코드',dataType:'String',defaultValue:''}},{T:1,N:'w2:key',A:{id:'mcomAssgnClsCd',name:'당사배정구분코드',dataType:'String',defaultValue:''}},{T:1,N:'w2:key',A:{id:'ttAssgnWhouseCd',name:'타창고',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'tsExclusiveCd',name:'T/S제외',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrAssignListSave',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_tmp_bl',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mblNo',name:'M B/L번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_cntrAssignListUpload',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'String',id:'serCd',name:'선사서비스코드'}},{T:1,N:'w2:column',A:{dataType:'String',id:'mrn',name:'MRN'}},{T:1,N:'w2:column',A:{dataType:'number',id:'msn',name:'MSN'}},{T:1,N:'w2:column',A:{dataType:'number',id:'hsn',name:'화물관리번호-HSN'}},{T:1,N:'w2:column',A:{dataType:'String',id:'mblNo',name:'M B/L번호'}},{T:1,N:'w2:column',A:{dataType:'String',id:'hblNo',name:'H B/L번호'}},{T:1,N:'w2:column',A:{dataType:'String',id:'blTypCd',name:'BL_TYPE코드'}},{T:1,N:'w2:column',A:{dataType:'String',id:'cargoClsCd',name:'화물구분코드'}},{T:1,N:'w2:column',A:{dataType:'String',id:'shpCoMark',name:'선사부호'}},{T:1,N:'w2:column',A:{dataType:'String',id:'mcomLineCd',name:'당사LINE코드'}},{T:1,N:'w2:column',A:{dataType:'String',id:'mcomLineNm',name:'당사LINE명'}},{T:1,N:'w2:column',A:{dataType:'String',id:'dsmbrkFrgtCd',name:'하선물품코드'}},{T:1,N:'w2:column',A:{dataType:'String',id:'dsmbrkBondZoneCd',name:'하선보세구역코드'}},{T:1,N:'w2:column',A:{dataType:'String',id:'dsmbrkPlcCd',name:'하선장소코드'}},{T:1,N:'w2:column',A:{dataType:'String',id:'dsmbrkPlcNm',name:'하선장소명'}},{T:1,N:'w2:column',A:{dataType:'String',id:'mcomDsmbrkPlcCd',name:'당사하선장소코드'}},{T:1,N:'w2:column',A:{dataType:'String',id:'mcomDsmbrkPlcNm',name:'당사하선장소명'}},{T:1,N:'w2:column',A:{dataType:'String',id:'assgnBondZoneCd',name:'배정보세구역코드'}},{T:1,N:'w2:column',A:{dataType:'String',id:'assgnWhouseCd',name:'배정창고코드'}},{T:1,N:'w2:column',A:{dataType:'String',id:'assgnWhouseNm',name:'배정창고명'}},{T:1,N:'w2:column',A:{dataType:'String',id:'assgnClsCd',name:'배정구분코드'}},{T:1,N:'w2:column',A:{dataType:'String',id:'assgnClsNm',name:'배정구분명'}},{T:1,N:'w2:column',A:{dataType:'String',id:'mcomAssgnClsCd',name:'당사배정구분코드'}},{T:1,N:'w2:column',A:{dataType:'String',id:'mcomAssgnClsNm',name:'당사배정구분명'}},{T:1,N:'w2:column',A:{dataType:'String',id:'mfCommNm',name:'적하목록품명명'}},{T:1,N:'w2:column',A:{dataType:'number',id:'packCnt',name:'포장개수'}},{T:1,N:'w2:column',A:{dataType:'String',id:'packUnitCd',name:'포장단위코드'}},{T:1,N:'w2:column',A:{dataType:'number',id:'totWt',name:'중량'}},{T:1,N:'w2:column',A:{dataType:'number',id:'totCbm',name:'총CBM'}},{T:1,N:'w2:column',A:{dataType:'String',id:'cargoAttrCd',name:'화물속성코드'}},{T:1,N:'w2:column',A:{dataType:'String',id:'lupDtmFrom',name:'검색일시FROM'}},{T:1,N:'w2:column',A:{dataType:'String',id:'lupDtmTo',name:'검색일시TO'}},{T:1,N:'w2:column',A:{dataType:'String',id:'rettlPosCd',name:'검색기위치코드'}},{T:1,N:'w2:column',A:{dataType:'number',id:'cnt20Feet',name:'20FEET개수'}},{T:1,N:'w2:column',A:{dataType:'number',id:'cnt40Feet',name:'40FEET개수'}},{T:1,N:'w2:column',A:{dataType:'number',id:'cnt45Feet',name:'45FEET개수'}},{T:1,N:'w2:column',A:{dataType:'String',id:'lodCvsslOrder',name:'#N/A'}},{T:1,N:'w2:column',A:{dataType:'String',id:'impCvsslOrder',name:'수입본선오더 생성여부'}},{T:1,N:'w2:column',A:{dataType:'String',id:'impGnrlOrder',name:'수입일반오더 생성여부'}},{T:1,N:'w2:column',A:{dataType:'String',id:'impCtOrder',name:'#N/A'}},{T:1,N:'w2:column',A:{dataType:'String',id:'impCsOrder',name:'#N/A'}},{T:1,N:'w2:column',A:{dataType:'String',id:'mcomDsmbrkPlcClsCd',name:'#N/A'}},{T:1,N:'w2:column',A:{dataType:'number',id:'stdBlYn',name:'기준BL여부'}},{T:1,N:'w2:column',A:{dataType:'number',id:'blProcYn',name:'BL처리여부'}},{T:1,N:'w2:column',A:{dataType:'number',id:'changeCheck',name:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'mcomDsmbrkPlcChangeCheck',name:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'blCheck',name:'#N/A'}},{T:1,N:'w2:column',A:{dataType:'number',id:'che',name:'선택여부'}},{T:1,N:'w2:column',A:{dataType:'String',id:'odrCreateYn',name:'오더생성여부구분'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_temp_param'},E:[{T:1,N:'w2:key',A:{id:'mblNo',name:'M B/L번호',dataType:'text'}}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.odrmgnt.odrprewrk.UpdateContainerAssignListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cntrAssignList","key":"IN_DS1"},{"id":"ds_blCntrList","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrprewrk.RetrieveContainerAssignListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cntrAssignQueryCondition","key":"IN_DS1"},{"id":"ds_cntrAssignList","key":"OUT_DS1"},{"id":"ds_blCntrList","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_cntrAssignList","key":"OUT_DS1"},{"id":"ds_blCntrList","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_blUpload',action:'',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',type:'text/javascript',scopeVariable:'DsConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strContainerOrderUrl = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_11t.xml"; // 컨테이너 오더

scwin.uploadExcelYn = 0;
scwin.pos_groupCode = 0;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: "SD104",
    compID: "lc_assgnClsCd,lc_assgnClsCd2,gr_cntrAssignList:assgnClsCd"
  } // 배정구분
  , {
    grpCd: "SD144",
    compID: "lc_mcomAssgnClsCd,lc_mcomAssgnClsCd2,gr_cntrAssignList:mcomAssgnClsCd"
  } // 당사배정구분
  , {
    grpCd: "OP266",
    compID: "gr_cntrAssignList:dsmbrkFrgtCd"
  } // 하선물품코드
  , {
    grpCd: "OP101",
    compID: "gr_blCntrList:cntrSizCd"
  } // cntr Size
  , {
    grpCd: "OP102",
    compID: "gr_blCntrList:cntrTypCd"
  } // cntr type
  , {
    grpCd: "SD116",
    compID: "gr_blCntrList:packUnitCd"
  } // 포장단위코드
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.commonCodeCallbackFunc);
  lc_mcomAssgnClsCd.setSelectedIndex(0);
  lc_assgnClsCd.setSelectedIndex(0);
  scwin.f_defaultValue();
};
scwin.colIdList = ["assgnClsCd", "mcomAssgnClsCd", "dsmbrkFrgtCd"];
scwin.commonCodeCallbackFunc = function () {
  // 컨테이너 배정목록 콤보박스 Label에 [코드] 라벨로 보이게 수정
  for (let i = 0; i < scwin.colIdList.length; i++) {
    let columnID = scwin.colIdList[i];
    let dataListInfo = gr_cntrAssignList.getColumnDataListInfo(columnID);
    scwin.setCodeLabel(dataListInfo);
  }

  // B/L별 컨테이너목록;
  let columnID = "packUnitCd";
  let dataListInfo = gr_blCntrList.getColumnDataListInfo(columnID);
  scwin.setCodeLabel(dataListInfo);
};
scwin.setCodeLabel = function (dataListInfo) {
  let dataList = $p.getComponentById(dataListInfo.id);
  let valueID = dataListInfo.value;
  let labelID = dataListInfo.label;
  let rowCount = dataList.getRowCount();
  for (let idx = 0; idx < rowCount; idx++) {
    let data = dataList.getRowJSON(idx);
    dataList.setCellData(idx, labelID, data[valueID] + " : " + data[labelID]);
  }
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  // Key 비활성화
  $c.gus.cfDisableKey($p);

  // POP-UP 버튼 비활성화
  $c.gus.cfDisableObjects($p, [btn_linkC1, btn_linkC2, btn_linkCt, btn_linkCs]);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다. - EMEDIT / Text Box
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var pWhere = "";
  switch (disGubun) {
    case 1:
      // 사용하는 곳 없음
      var win_url = "/ui/ds/op/rscconfirm/transrscconfirm/op_101_02_05p.xml?vsslCls=1";
      let opts = {
        id: "portPop",
        popupName: "선명항차조회",
        modal: true,
        type: "browserPopup",
        width: 800,
        height: 470,
        title: "선명항차조회"
      };
      let paramObject = {}; // 필요하면 파라미터 세팅

      let rtnList = await $c.win.openPopup($p, win_url, opts, paramObject);
      if (rtnList != null) {
        if (rtnList[1] == "0") {
          ed_vsslCd.setValue(rtnList[0]); //선명코드
          ed_vsslNm.setValue(rtnList[13]); //선명
          ed_portcnt.setValue(rtnList[2]); //항차
          ed_mrn.setValue(rtnList[15]); //mrn
        } else {
          ed_vsslCd.setValue(rtnList[0]); //선명코드
          ed_vsslNm.setValue(rtnList[14]); //선명
          ed_portcnt.setValue(rtnList[2]); //항차
          ed_mrn.setValue(rtnList[16]); //mrn
        }
      }
      break;
    case 2:
      // 선사코드팝업			
      udc_comCode1.cfCommonPopUp(scwin.callBackLineInfo // XML상의 SELECT ID	
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
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "LINE,Line코드,Line명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // 선사코드팝업			  			
      udc_comCode3.cfCommonPopUp(scwin.callBackLineInfo2 // XML상의 SELECT ID	
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
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "LINE,Line코드,Line명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      // 하선장소코드팝업   retrieveBondZoneRound

      udc_comCode2.cfCommonPopUp(scwin.callbackMcomDsmbrk // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "하선장소,하선장소코드,하선장소명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 5:
      // 하선장소코드팝업   retrieveBondZoneRound

      udc_comCode4.cfCommonPopUp(scwin.callbackMcomDsmbrk2 // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "하선장소,하선장소코드,하선장소명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 6:
      // 서비스코드팝업   retrievService
      udc_comCode5.cfCommonPopUp(scwin.callbackService // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "서비스,서비스코드,서비스명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = function (disGubun, row, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var chkValue = false;
  var pWhere = "";
  switch (disGubun) {
    case 1:
      // 하선장소코드팝업	- 물류점소 - 보세구분코드 	
      pWhere = "04";
      udc_comCode_Grid.setSelectId("retrieveMcomDsmbrk");
      udc_comCode_Grid.cfCommonPopUp(scwin.callbackGridMcomDsmbrk // XML상의 SELECT ID	
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
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "하선장소,하선장소코드,하선장소명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 배정장소코드팝업	- 물류점소 - 보세구분코드 	
      pWhere = "04";
      udc_comCode_Grid.setSelectId("retrieveMcomDsmbrk");
      udc_comCode_Grid.cfCommonPopUp(scwin.callbackGridAssgnWhouse // XML상의 SELECT ID	
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
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "배정창고,배정창고코드,배정창고명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      // 당사LINE코드팝업	- 물류점소 - LINE코드 	
      //pWhere = "04";
      udc_comCode_Grid.setSelectId("retrieveLineInfo");
      udc_comCode_Grid.cfCommonPopUp(scwin.callbackGridLineInfo // XML상의 SELECT ID	
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
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "LINE,Line코드,Line명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 5:
      // 선사서비스코드팝업	- 선사서비스코드 	
      udc_comCode_Grid.setSelectId("retrievService");
      udc_comCode_Grid.cfCommonPopUp(scwin.callbackGridService // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "서비스,서비스코드,서비스명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
  return chkValue;
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // f_chkOpenCommonPopUp(inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);
  //let pCode = ''
  //let pName = ''
  //let pClose = 'F'
  //let pAllSearch = 'T'

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    //pClose = 'T'
    //pAllSearch = 'T'
    //pCode = pVal
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  }
  // inObj가 코드명 필드일 경우 팝업
  else {
    //pClose = 'T'
    //pAllSearch = 'T'
    //pName = pVal
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
// 선사코드
scwin.callBackLineInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
};

// 선사2
scwin.callBackLineInfo2 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo2, ed_clntNm2);
};

// 하선장소
scwin.callbackMcomDsmbrk = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_mcomDsmbrkPlcCd, ed_mcomDsmbrkPlcNm);
};

// 하선장소2
scwin.callbackMcomDsmbrk2 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_mcomDsmbrkPlcCd2, ed_mcomDsmbrkPlcNm2);
};

// 서비스
scwin.callbackService = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_serviceCd, ed_serviceNm);
};
scwin.lineCode = "";
scwin.serviceCode = "";
//-------------------------------------------------------------------------
// 공통 GRID 팝업 호출 callBack
//-------------------------------------------------------------------------
scwin.callbackGridMcomDsmbrk = function (rtnList) {
  var row = ds_cntrAssignList.getRowPosition();
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      //return value Assign
      ds_cntrAssignList.setCellData(row, "mcomDsmbrkPlcCd", rtnList[0]); //하선장소코드
      ds_cntrAssignList.setCellData(row, "mcomDsmbrkPlcNm", rtnList[1]); //하선장소

      ds_cntrAssignListSave.setCellData(row, "mcomDsmbrkPlcCd", rtnList[0]); //하선장소코드
      ds_cntrAssignListSave.setCellData(row, "mcomDsmbrkPlcNm", rtnList[1]); //하선장소
    }
    chkValue = true;
  } else {
    ds_cntrAssignList.setCellData(row, "mcomDsmbrkPlcCd", ""); //하선장소코드
    ds_cntrAssignList.setCellData(row, "mcomDsmbrkPlcNm", ""); //하선장소

    ds_cntrAssignListSave.setCellData(row, "mcomDsmbrkPlcCd", ""); //하선장소코드
    ds_cntrAssignListSave.setCellData(row, "mcomDsmbrkPlcNm", ""); //하선장소
  }
  if (ds_cntrAssignList.getCellData(row, "mcomLineCd") == ds_cntrAssignList.getOriginalCellData(row, "mcomLineCd") && ds_cntrAssignList.getCellData(row, "dsmbrkFrgtCd") == ds_cntrAssignList.getOriginalCellData(row, "dsmbrkFrgtCd") && ds_cntrAssignList.getCellData(row, "mcomDsmbrkPlcNm") == ds_cntrAssignList.getOriginalCellData(row, "mcomDsmbrkPlcNm")) {
    ds_cntrAssignList.setCellData(row, "mcomDsmbrkPlcChangeCheck", 0);
  } else {
    ds_cntrAssignList.setCellData(row, "mcomDsmbrkPlcChangeCheck", 1);
  }
};
scwin.callbackGridAssgnWhouse = function (rtnList) {
  var row = ds_cntrAssignList.getRowPosition();
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      //return value Assign
      ds_cntrAssignList.setCellData(row, "assgnWhouseCd", rtnList[0]); //배정장소코드
      ds_cntrAssignList.setCellData(row, "assgnWhouseNm", rtnList[1]); //배정창고

      ds_cntrAssignListSave.setCellData(row, "assgnWhouseCd", rtnList[0]); //배정장소코드
      ds_cntrAssignListSave.setCellData(row, "assgnWhouseNm", rtnList[1]); //배정창고
    }
    chkValue = true;
  } else {
    ds_cntrAssignList.setCellData(row, "assgnWhouseCd", ""); //배정장소코드
    ds_cntrAssignList.setCellData(row, "assgnWhouseNm", ""); //배정창고

    ds_cntrAssignListSave.setCellData(row, "assgnWhouseCd", ""); //배정장소코드
    ds_cntrAssignListSave.setCellData(row, "assgnWhouseNm", ""); //배정창고
  }
  if (ds_cntrAssignList.getCellData(row, "assgnClsCd") == ds_cntrAssignList.getOriginalCellData(row, "assgnClsCd") && ds_cntrAssignList.getCellData(row, "mcomAssgnClsCd") == ds_cntrAssignList.getOriginalCellData(row, "mcomAssgnClsCd") && ds_cntrAssignList.getCellData(row, "assgnWhouseNm") == ds_cntrAssignList.getOriginalCellData(row, "assgnWhouseNm")) {
    ds_cntrAssignList.setCellData(row, "changeCheck", 0);
  } else {
    ds_cntrAssignList.setCellData(row, "changeCheck", 1);
  }
};
scwin.callbackGridLineInfo = function (rtnList) {
  var row = ds_cntrAssignList.getRowPosition();
  if (rtnList[0] == "N/A") {
    $c.gus.cfSetGridReturnValue($p, scwin.lineCode, ds_cntrAssignList, row, "mcomLineCd", "");
    return;
  }
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_cntrAssignList, row, "mcomLineCd", "mcomLineNm");
  scwin.lineCode = rtnList;
  if (ds_cntrAssignList.getCellData(row, "mcomLineCd") == ds_cntrAssignList.getOriginalCellData(row, "mcomLineCd") && ds_cntrAssignList.getCellData(row, "dsmbrkFrgtCd") == ds_cntrAssignList.getOriginalCellData(row, "dsmbrkFrgtCd") && ds_cntrAssignList.getCellData(row, "mcomDsmbrkPlcNm") == ds_cntrAssignList.getOriginalCellData(row, "mcomDsmbrkPlcNm")) {
    ds_cntrAssignList.setCellData(row, "mcomDsmbrkPlcChangeCheck", 0);
  } else {
    ds_cntrAssignList.setCellData(row, "mcomDsmbrkPlcChangeCheck", 1);
  }
};
scwin.callbackGridService = function (rtnList) {
  var row = ds_cntrAssignList.getRowPosition();
  if (rtnList[0] == "N/A") {
    $c.gus.cfSetGridReturnValue($p, scwin.serviceCode, ds_cntrAssignList, row, "serCd", "");
    return;
  }
  scwin.serviceCode = rtnList;
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_cntrAssignList, row, "serCd", "");
};

// 당사 Line 팝업
scwin.udc_comCode1_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_comCode1_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 2, true);
};
scwin.udc_comCode1_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 2, false);
};

// 당사 하선장소 팝업
scwin.udc_comCode2_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_mcomDsmbrkPlcCd.getValue(), ed_mcomDsmbrkPlcNm.getValue(), 'F', 'F');
};
scwin.udc_comCode2_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_mcomDsmbrkPlcCd, ed_mcomDsmbrkPlcNm, 4, true);
};
scwin.udc_comCode2_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_mcomDsmbrkPlcNm, ed_mcomDsmbrkPlcCd, 4, false);
};

// 당사 Line2 팝업
scwin.udc_comCode3_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_clntNo2.getValue(), ed_clntNm2.getValue(), 'F', 'F');
};
scwin.udc_comCode3_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo2, ed_clntNm2, 3, true);
};
scwin.udc_comCode3_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm2, ed_clntNo2, 3, false);
};

// 당사 하선장소2 팝업
scwin.udc_comCode4_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_mcomDsmbrkPlcCd2.getValue(), ed_mcomDsmbrkPlcNm2.getValue(), 'F', 'F');
};
scwin.udc_comCode4_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_mcomDsmbrkPlcCd2, ed_mcomDsmbrkPlcNm2, 5, true);
};
scwin.udc_comCode4_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_mcomDsmbrkPlcNm2, ed_mcomDsmbrkPlcCd2, 4, false);
};

// 서비스 팝업
scwin.udc_comCode5_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_serviceCd.getValue(), ed_serviceNm.getValue(), 'F', 'F');
};
scwin.udc_comCode5_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_serviceCd, ed_serviceNm, 6, true);
};
scwin.udc_comCode5_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_serviceNm, ed_serviceCd, 6, false);
};

//-------------------------------------------------------------------------
// 타창고
//-------------------------------------------------------------------------
scwin.disabledCombo = function () {
  if (cbx_tAssgnWhouseCdCheck.getValue() != "") {
    lc_assgnClsCd.setDisabled(true);
    lc_mcomAssgnClsCd.setDisabled(true);
  } else {
    lc_assgnClsCd.setDisabled(false);
    lc_mcomAssgnClsCd.setDisabled(false);
  }
};

//-------------------------------------------------------------------------
// 배정구분에서 T/S선택하고, T/S제외가 선택되어 있는경우 확인
//-------------------------------------------------------------------------
scwin.checkCombo = function () {
  // 배정구분에서 T/S선택하고, T/S제외가 선택되어 있을 경우
  if (lc_assgnClsCd.getText(true) == 'T/S' && cbx_tsExclusiveCdCheck.getValue() != "") {
    $c.win.alert($p, "배정구분를 다시 선택해주세요");
    lc_assgnClsCd.focus();
    cbx_tsExclusiveCdCheck.setValue(0);
  }
};

// 리셋
scwin.f_Reset = function (e) {
  $c.gus.cfInitObjects($p, tbl_searchCondition);
};

// 조회
scwin.f_Retrieve = async function (e) {
  if (ed_mrn.getValue().trim() == "") {
    // 필수 조회조건 확인 (MRN)
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("MRN"));
    ed_mrn.focus();
    return;
  }

  //MSN (From - To) 확인
  if (ed_msnFrom.getValue().trim() != "" && ed_msnTo.getValue().trim() != "" && eval(ed_msnFrom.getValue().trim()) > eval(ed_msnTo.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_045, new Array("MSN"));
    return;
  }

  // 그리드 조회건수 초기화
  tbx_totalRows.setValue(0);
  tbx_totalRows2.setValue(0);

  // 비수정 모드로 전환
  gr_cntrAssignList.setHeaderDisabled("checkHeader", true);
  gr_cntrAssignList.setGridReadOnly(true);
  gr_blCntrList.setGridReadOnly(true);
  scwin.setGridRowReadonly(gr_cntrAssignList, scwin.cntrAssignCols, true);
  scwin.setGridRowReadonly(gr_blCntrList, scwin.blCntrCols, true);
  $c.gus.cfDisableAllBtn($p);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 오더 LINK
//-------------------------------------------------------------------------
scwin.f_CntrOrderLink = function (odrKndCd) {
  var row = ds_cntrAssignList.getRowPosition();
  var odrNo = ""; //오더번호
  var lineCd = ds_cntrAssignList.getCellData(row, "mcomLineCd"); //라인코드
  var cvsslMgntNo = ds_cntrAssignList.getCellData(row, "cvsslMgntNo"); //본선관리번호
  var blNo = ds_cntrAssignList.getCellData(row, "hblNo"); //BL번호
  var mcomAssgnClsCd = ds_cntrAssignList.getCellData(row, "mcomAssgnClsCd"); //당사배정구분코드
  var odrNo_c1 = ds_cntrAssignList.getCellData(row, "impCvsslOrder"); //C1오더번호
  var odrNo_c2 = ds_cntrAssignList.getCellData(row, "impGnrlOrder"); //C2오더번호
  var odrNo_ct = ds_cntrAssignList.getCellData(row, "impCtOrder"); //CT오더번호	
  var odrNo_cs = ds_cntrAssignList.getCellData(row, "impCsOrder"); //CS오더번호	

  if ($c.gus.cfIsNull($p, lineCd)) lineCd = "";
  if ($c.gus.cfIsNull($p, cvsslMgntNo)) cvsslMgntNo = "";
  if ($c.gus.cfIsNull($p, mcomAssgnClsCd)) mcomAssgnClsCd = "";

  //오더번호값  세팅
  if (odrKndCd == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR) {
    //C1	
    odrNo = odrNo_c1;
  } else if (odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    //C2	
    odrNo = odrNo_c2;
  } else if (odrKndCd == DsConstants.ODR_KND_CD_TS_ODR) {
    //CT
    odrNo = odrNo_ct;
  } else if (odrKndCd == DsConstants.ODR_KND_CD_CY_IMP_TS_ODR) {
    //CS	
    odrNo = odrNo_cs;
  }
  let paramObj = {
    odrKndCd: odrKndCd //오더종류
    ,

    lineCd: lineCd //라인코드
    ,

    cvsslMgntNo: cvsslMgntNo //본선관리번호
    ,

    blNo: blNo //BL번호
    ,

    mcomAssgnClsCd: mcomAssgnClsCd //당사배정구분코드
    ,

    odrNo: odrNo //오더번호
    ,

    linkPage: "manifest" //링크페이지 종류
    ,

    type: "create"
  };
  $c.win.openMenu($p, "컨테이너 오더", scwin.strContainerOrderUrl, "sd_402_01_11t", paramObj);
};

// 일괄적용
scwin.f_Apply = function (e) {
  var msnArray = new Array();
  var k = 0;
  for (i = 0; i < ds_cntrAssignList.getRowCount(); i++) {
    if (ds_cntrAssignList.getCellData(i, "che") == 1) {
      msnArray[k] = ds_cntrAssignList.getCellData(i, "msn");
      k++;
    }
  }
  if (ed_clntNo2.getValue() != "") {
    //LINE
    for (j = 0; j < msnArray.length; j++) {
      for (h = 0; h < ds_cntrAssignList.getRowCount(); h++) {
        if (msnArray[j] == ds_cntrAssignList.getCellData(h, "msn")) {
          ds_cntrAssignList.setCellData(h, "mcomLineCd", ed_clntNo2.getValue());
          ds_cntrAssignList.setCellData(h, "che", 0);
        }
      }
    }
  }
  if (ed_mcomDsmbrkPlcCd2.getValue() != "") {
    //당사하선장소 
    for (j = 0; j < msnArray.length; j++) {
      for (h = 0; h < ds_cntrAssignList.getRowCount(); h++) {
        if (msnArray[j] == ds_cntrAssignList.getCellData(h, "msn")) {
          ds_cntrAssignList.setCellData(h, "mcomDsmbrkPlcCd", ed_mcomDsmbrkPlcCd2.getValue());
          ds_cntrAssignList.setCellData(h, "mcomDsmbrkPlcNm", ed_mcomDsmbrkPlcNm2.getValue());
          ds_cntrAssignList.setCellData(h, "che", 0);
        }
      }
    }
  }
  if (ed_serviceCd.getValue() != "") {
    //선사서비스
    for (j = 0; j < msnArray.length; j++) {
      for (h = 0; h < ds_cntrAssignList.getRowCount(); h++) {
        if (msnArray[j] == ds_cntrAssignList.getCellData(h, "msn")) {
          ds_cntrAssignList.setCellData(h, "serCd", ed_serviceCd.getValue());
          ds_cntrAssignList.setCellData(h, "che", 0);
        }
      }
    }
  }
  if (lc_mcomAssgnClsCd2.getValue() != "") {
    //당사배정구분
    for (j = 0; j < msnArray.length; j++) {
      for (h = 0; h < ds_cntrAssignList.getRowCount(); h++) {
        if (msnArray[j] == ds_cntrAssignList.getCellData(h, "msn")) {
          ds_cntrAssignList.setCellData(h, "mcomAssgnClsCd", lc_mcomAssgnClsCd2.getValue());
          ds_cntrAssignList.setCellData(h, "mcomAssgnClsNm", lc_mcomAssgnClsCd2.getText());
          ds_cntrAssignList.setCellData(h, "che", 0);
        }
      }
    }
  }
  if (lc_assgnClsCd2.getValue() != "") {
    //배정구분
    for (j = 0; j < msnArray.length; j++) {
      for (h = 0; h < ds_cntrAssignList.getRowCount(); h++) {
        if (msnArray[j] == ds_cntrAssignList.getCellData(h, "msn")) {
          ds_cntrAssignList.setCellData(h, "assgnClsCd", lc_assgnClsCd2.getValue());
          ds_cntrAssignList.setCellData(h, "assgnClsNm", lc_assgnClsCd2.getText());
          ds_cntrAssignList.setCellData(h, "che", 0);
        }
      }
    }
  }
};

// 수정
scwin.f_Update = function (e) {
  // 수정 모드로 전환
  gr_cntrAssignList.setHeaderDisabled("checkHeader", false);
  gr_cntrAssignList.setGridReadOnly(false);
  gr_blCntrList.setGridReadOnly(false);

  // 해당 목록의 수정 여부 확인
  scwin.f_chkEditRowCntrAssignList();
  scwin.f_chkEditRowBlCntrList();
  $c.gus.cfDisableBtnOnly($p, [btn_Update]);
  $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Apply]);
};

// readonly 함수
scwin.setGridRowReadonly = function (gridObj, cols, flag) {
  for (var i = 0; i < cols.length; i++) {
    gridObj.setCellReadOnly("column", cols[i], flag);
  }
};

// 컨테이너 배정목록 readonly설정할 cols
scwin.cntrAssignCols = ["assgnClsCd", "mcomDsmbrkPlcNm", "assgnWhouseNm", "mcomAssgnClsNm", "mcomAssgnClsCd"];

//B/L별 컨테이너 readonly설정할 cols
scwin.blCntrCols = ["cntrNo", "cntrSizCd", "cntrTypCd", "sealNo1", "sealNo2", "sealNo3", "packCnt", "packUnitCd"];

//-------------------------------------------------------------------------
// 수정가능 여부 확인 - 컨테이너 배정목록 
//-------------------------------------------------------------------------
scwin.f_chkEditRowCntrAssignList = function () {
  var rowIndex = ds_cntrAssignList.getRowPosition();
  if (ds_cntrAssignList.getCellData(rowIndex, "impCvsslOrder") != "" || ds_cntrAssignList.getCellData(rowIndex, "impGnrlOrder") != "") {
    // 본선 오더 또는 일반 오더가 생성된 경우 EDIT : False
    scwin.setGridRowReadonly(gr_cntrAssignList, scwin.cntrAssignCols, true);
  } else {
    scwin.setGridRowReadonly(gr_cntrAssignList, scwin.cntrAssignCols, false);
  }
};

//-------------------------------------------------------------------------
// 수정가능 여부 확인 -  B/L별 컨테이너 리스트  
//-------------------------------------------------------------------------
scwin.f_chkEditRowBlCntrList = function () {
  var rowIndex = ds_cntrAssignList.getRowPosition();
  if (ds_cntrAssignList.getCellData(rowIndex, "impCvsslBulkOrderYn") == "1" || ds_cntrAssignList.getCellData(rowIndex, "impGnrlBulkOrderYn") == "1") {
    // 본선 오더 또는 일반 오더가 생성된 경우 EDIT : False
    scwin.setGridRowReadonly(gr_blCntrList, scwin.blCntrCols, true);
  } else {
    // 본선 오더 와 일반 오더가 생성되지 않은 경우 EDIT : True
    scwin.setGridRowReadonly(gr_blCntrList, scwin.blCntrCols, false);
  }
};

// 저장
scwin.f_Save = async function (e) {
  //컨테이너 배정목록의  변경한 데이터가 있는지 체크한다. 
  if (ds_cntrAssignList.getModifiedIndex().length == 0) {
    //B/L별 컨테이너 목록의  변경한 데이터가 있는지 체크한다. 
    if (ds_blCntrList.getModifiedIndex().length == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("컨테이너 배정목록")); //변경된 정보가 없습니다.
      $c.gus.cfGoPrevPosition($p, ds_cntrAssignList, ds_cntrAssignList.getRowPosition());
      gr_cntrAssignList.setFocusedCell(ds_cntrAssignList.getRowPosition(), "assgnClsCd");
      return;
    }
  }

  // 필수 입력사항을 체크    
  if (scwin.f_validChk()) {
    let ret = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (ret) {
      // disable 처리
      //cfDisableKeyData();
      //cfDisableAllBtn();

      //alert(ds_cntrAssignList.Text);
      //alert(ds_blCntrList.Text);
      scwin.pos_groupCode = ds_cntrAssignList.getRowPosition();

      //tr_save.Post();
      $c.sbm.execute($p, sbm_save);
    } else {
      //cfHideDSWaitMsg(gr_cntrAssignList);
      //cfHideDSWaitMsg(gr_blCntrList);
    }
  } else {
    //cfHideDSWaitMsg(gr_cntrAssignList);
    //cfHideDSWaitMsg(gr_blCntrList);
  }
};

//-------------------------------------------------------------------------
// 저장전 validation check
//-------------------------------------------------------------------------
scwin.f_validChk = async function () {
  //필수 입력사항을 체크
  if (await $c.gus.cfValidate($p, [gr_cntrAssignList])) {
    return true;
  } else {
    return false;
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  // 조회 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    // 수정 버튼 활성화	    	
    $c.gus.cfEnableBtnOnly($p, [btn_Update, lc_mcomAssgnClsCd2, lc_assgnClsCd2]);

    //업로드 구분을 업로드 안한 상태로 수정
    scwin.uploadExcelYn = 0;
    if (ds_cntrAssignList.getRowCount() > 0) {
      //ds_cntrAssignList.setRowPosition(0);

      //컨테이너오더 Link 버튼 활성/비활성화
      $c.gus.cfEnableObjects($p, [btn_linkC1, btn_linkC2, btn_linkCt, btn_linkCs]);
    } else {
      $c.gus.cfDisableObjects($p, [btn_linkC1, btn_linkC2, btn_linkCt, btn_linkCs]);
    }

    // 그리드 DECODE
    for (let i = 0; i < ds_cntrAssignList.getRowCount(); i++) {
      // Decode(impCvsslOrder,,impCtOrder,impCvsslOrder)
      if (ds_cntrAssignList.getCellData(i, "impCvsslOrder") == "") {
        ds_cntrAssignList.setCellData(i, "impCvsslOrder", ds_cntrAssignList.getCellData(i, "impCtOrder"));
      }
      // Decode(impGnrlOrder,,impCsOrder,impGnrlOrder)
      if (ds_cntrAssignList.getCellData(i, "impGnrlOrder") == "") {
        ds_cntrAssignList.setCellData(i, "impGnrlOrder", ds_cntrAssignList.getCellData(i, "impCsOrder"));
      }
    }

    // 그리드 조회건수
    tbx_totalRows.setValue(ds_cntrAssignList.getRowCount());
    if (ds_cntrAssignList.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, new Array("컨테이너 배정목록 조회결과"));
    }

    // 데이타셋 복사
    $c.gus.cfCopyDataSet($p, ds_cntrAssignList, ds_cntrAssignListSave);
    ds_cntrAssignListSave.modifyAllStatus("R");

    // 그리드 조회건수
    tbx_totalRows2.setValue(ds_blCntrList.getRowCount());
    $c.gus.cfGoPrevPosition($p, gr_cntrAssignList, scwin.pos_groupCode);
  }
};
scwin.sbm_save_submitdone = function (e) {
  // 저장 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

    if (scwin.uploadExcelYn == 1) {
      $c.gus.cfEnableBtnOnly($p, [btn_Update, lc_mcomAssgnClsCd2, lc_assgnClsCd2]);
    } else {
      scwin.f_Retrieve();
    }
  }
};
scwin.sbm_save_submiterror = function (e) {
  // 저장 버튼 활성화
  ds_cntrAssignList.removeAll();
  ds_cntrAssignListSave.removeAll();
  ds_blCntrList.removeAll();
  $c.gus.cfDisableBtnOnly($p, [btn_Update]);
  $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Apply]);
};
scwin.ds_cntrAssignList_onrowpositionchange = function (info) {
  var row = info.newRowIndex;

  // null / undefined / -1 방어
  if (row == null || row < 0) {
    return;
  }

  // 수정 모드일때
  if (!gr_cntrAssignList.getGridReadOnly()) {
    // 데이터 셋 ROW 가 변경되었을때 해당 ROW 수정여부 확인 (오더 생성 확인)  오류
    scwin.f_chkEditRowCntrAssignList();
  }
  if (row >= 0) {
    var v_mrn = ds_cntrAssignList.getCellData(row, "mrn");
    var v_msn = ds_cntrAssignList.getCellData(row, "msn");
    var v_hsn = ds_cntrAssignList.getCellData(row, "hsn");
    var condition = "mrn == '" + v_mrn + "' && " + "msn == '" + v_msn + "' && " + "hsn == '" + v_hsn + "'";
    ds_blCntrList.removeColumnFilterAll();
    $c.data.dataListFilter($p, ds_blCntrList, condition);

    // 그리드 조회건수
    tbx_totalRows2.setValue(ds_blCntrList.getRowCount());
  }
};
scwin.ds_cntrAssignList_onaftercolumnfilterchange = function () {
  if (ds_cntrAssignList.getRowCount() > 0) ds_cntrAssignList.setRowPosition(0);
};
scwin.ds_blCntrList_onrowpositionchange = function (info) {
  // 수정 모드일때
  if (!gr_blCntrList.getGridReadOnly()) {
    // 데이터 셋 ROW 가 변경되었을때 해당 ROW 수정여부 확인 (오더 생성 확인)
    scwin.f_chkEditRowBlCntrList();
  }
};
scwin.ds_blCntrList_onaftercolumnfilterchange = function () {
  if (ds_blCntrList.getRowCount > 0) ds_blCntrList.setRowPosition(0);
};
scwin.ds_blCntrList_oncelldatachange = function () {
  // B/L별 컨테이너 목록이 변경되면
  // 해당 컨테이너 배정목록 상태 변경
  if (ds_blCntrList.getModifiedIndex().length > 0) {
    ds_cntrAssignList.modifyRowStatus(ds_cntrAssignList.getRowPosition(), 'U');
  }
};
scwin.gr_cntrAssignList_ontextimageclick = function (row, columnIndex) {
  switch (gr_cntrAssignList.getColumnID(columnIndex)) {
    case "mcomDsmbrkPlcNm":
      scwin.f_openCommPopUpGrid(1, row, ds_cntrAssignList.getCellData(ds_cntrAssignList.getRowPosition(), "mcomDsmbrkPlcCd"), ds_cntrAssignList.getCellData(ds_cntrAssignList.getRowPosition(), "mcomDsmbrkPlcNm"), 'F', 'F');
      break;
    case "assgnWhouseNm":
      scwin.f_openCommPopUpGrid(2, row, ds_cntrAssignList.getCellData(ds_cntrAssignList.getRowPosition(), "assgnWhouseCd"), ds_cntrAssignList.getCellData(ds_cntrAssignList.getRowPosition(), "assgnWhouseNm"), 'F', 'F');
      break;
    //  case "mcomAssgnClsNm":
    //      scwin.f_openCommPopUpGrid(3, row
    //         , ds_cntrAssignList.getCellData(ds_cntrAssignList.getRowPosition(), "mcomAssgnClsCd")
    //         , ds_cntrAssignList.getCellData(ds_cntrAssignList.getRowPosition(), "mcomAssgnClsNm")
    //         , 'F', 'F');
    //      break;
    case "mcomLineCd":
      scwin.f_openCommPopUpGrid(4, row, ds_cntrAssignList.getCellData(ds_cntrAssignList.getRowPosition(), "mcomLineCd"), '', 'F', 'F');
      break;
    case "serCd":
      //선사서비스 코드 검색
      scwin.f_openCommPopUpGrid(5, row, ds_cntrAssignList.getCellData(ds_cntrAssignList.getRowPosition(), "serCd"), '', 'F', 'F');
      break;
    default:
      break;
  }
};

// onexit
scwin.gr_cntrAssignList_oneditend = function (rowIndex, columnIndex, newData) {
  switch (gr_cntrAssignList.getColumnID(columnIndex)) {
    // 당사하선장소
    case "mcomDsmbrkPlcNm":
      if (newData == "") {
        ds_cntrAssignList.setCellData(rowIndex, "mcomDsmbrkPlcNm", "");
      } else if (ds_cntrAssignList.getCellData(rowIndex, "mcomDsmbrkPlcCd") != newData) {
        scwin.f_openCommPopUpGrid(1, rowIndex, "", newData, 'T', 'F');
      }
      break;
    // 배정창고
    case "assgnWhouseNm":
      if (newData == "") {
        ds_cntrAssignList.setCellData(rowIndex, "assgnWhouseNm", "");
      } else if (ds_cntrAssignList.getCellData(rowIndex, "assgnWhouseCd") != newData) {
        scwin.f_openCommPopUpGrid(2, rowIndex, "", newData, 'T', 'F');
      }
      break;
    // case "mcomAssgnClsNm":
    //     if(ds_cntrAssignList.getCellData(rowIndex, "mcomAssgnClsNm") != newData){
    //         scwin.f_openCommPopUpGrid(3, rowIndex, "", newData, 'T', 'F');
    //     } 
    //     break;
    // 당사LINE;
    case "mcomLineCd":
      if (newData == "") {
        ds_cntrAssignList.setCellData(rowIndex, "mcomLineNm", "");
      } else if (ds_cntrAssignList.getCellData(rowIndex, "mcomLineCd") != newData) {
        scwin.f_openCommPopUpGrid(4, rowIndex, newData, "", 'T', 'F');
      }
      break;
    case "serCd":
      if (newData == "") {
        ds_cntrAssignList.setCellData(rowIndex, "assgnWhoserCduseNm", "");
      } else if (ds_cntrAssignList.getCellData(rowIndex, "serCd") != newData) {
        scwin.f_openCommPopUpGrid(5, rowIndex, newData, "", 'T', 'F');
      }
      break;
    default:
      break;
  }
};
scwin.gr_cntrAssignList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex > 0) {
    if (columnId == "stdBlYn") {
      ds_cntrAssignListSave.setCellData(rowIndex, "stdBlYn", ds_cntrAssignList.getCellData(rowIndex, "stdBlYn"));
    }
  } else {
    if (columnId == "blProcYn") {
      if (gr_cntrAssignList.getGridReadOnly() == false) {
        for (i = 1; i <= ds_cntrAssignList.getRowCount(); i++) {
          ds_cntrAssignList.setCellData(i, "blProcYn", 1);
          ds_cntrAssignListSave.setCellData(i, "blProcYn", 1);
        }
      }
    }
  }
};
scwin.gr_blCntrList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "xrayLupTrgtYn") {
    if (ds_blCntrList.getCellData(ds_blCntrList.getRowPosition(), "xrayLupTrgtYn") != ds_blCntrList.getOriginalCellData(rowIndex, "xrayLupTrgtYn")) {
      ds_cntrAssignList.setCellData(ds_cntrAssignList.getRowPosition(), "odrCreateYn", ds_cntrAssignList.getCellData(ds_cntrAssignList.getRowPosition(), "odrCreateYn") + 1);
    }
  }
};

/**
 * 컨테이너 번호 유효성 체크 (ISO 6346 기준)
 * @param {String} parCntrNo - 컨테이너 번호 (11자리)
 * @returns {Boolean} 유효 여부
 */
scwin.cf_CheckCntrNo = function (parCntrNo) {
  if (parCntrNo == null) return false;
  let cntrNo = parCntrNo.trim();
  let tempData = "1012131415161718192021232425262728293031323435363738";
  if (cntrNo === "" || cntrNo.length !== 11) {
    return false;
  }
  let re = /^[A-Z]{4}[0-9]{7}$/;
  if (!re.test(cntrNo)) {
    return false;
  }
  let tempSum = 0;
  for (let i = 0; i < 4; i++) {
    let idx = (cntrNo.charCodeAt(i) - 65) * 2;
    let val = Number(tempData.substring(idx, idx + 2));
    tempSum += val * Math.pow(2, i);
  }
  for (let j = 4; j < 10; j++) {
    let val = Number(cntrNo.charAt(j));
    tempSum += val * Math.pow(2, j);
  }
  let calcMod = tempSum % 11;
  if (calcMod === 10) calcMod = 0;
  let lastDigit = Number(cntrNo.charAt(10));
  return lastDigit === calcMod;
};
scwin.gr_blCntrList_oneditend = async function (rowIndex, columnIndex, newData) {
  var colid = gr_blCntrList.getColumnID(columnIndex);
  if (colid == "cntrNo") {
    if (!scwin.cf_CheckCntrNo(newData)) {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_038, "컨테이너")); //유효한 @가 아닙니다
    }
  }
  if (colid == "packUnitCd") {
    ds_cntrAssignList.setCellData(ds_cntrAssignList.getRowPosition(), "odrCreateYn", ds_cntrAssignList.getCellData(ds_cntrAssignList.getRowPosition(), "odrCreateYn") + 1);
  }
  if (colid == "cntrSizCd") {
    ds_cntrAssignList.setCellData(ds_cntrAssignList.getRowPosition(), "odrCreateYn", ds_cntrAssignList.getCellData(ds_cntrAssignList.getRowPosition(), "odrCreateYn") + 1);
  }
  if (colid == "cntrTypCd") {
    ds_cntrAssignList.setCellData(ds_cntrAssignList.getRowPosition(), "odrCreateYn", ds_cntrAssignList.getCellData(ds_cntrAssignList.getRowPosition(), "odrCreateYn") + 1);
  }
};
scwin.gr_cntrAssignList_onheaderclick = function (headerId) {
  var i = 0;
  if (headerId == "che") {
    if (bCheck == 1) {
      for (i = 1; i <= ds_cntrAssignList.getRowCount(); i++) {
        ds_cntrAssignList.setCellData(i, "che", 1);
      }
    } else {
      for (i = 1; i <= ds_cntrAssignList.getRowCount(); i++) {
        ds_cntrAssignList.setCellData(i, "che", 0);
      }
    }
  }
};
scwin.f_upload = function () {
  let options = {
    headerExist: 1,
    header: 1,
    startRowIndex: 0
  };
  ds_tmp_bl.removeAll();
  ds_cntrAssignList.removeAll();
  udc_topGrp1.uploadGridViewExcel(gr_tmp_bl, options);
};
scwin.gr_tmp_bl_onfilereadend = function () {
  scwin.f_import();
};
scwin.f_import = async function () {
  for (var i = 0; i < ds_tmp_bl.getRowCount(); i++) {
    var mblNo = ds_tmp_bl.getCellData(i, "mblNo");
    sbm_blUpload.action = "/ds.sd.odrmgnt.odrprewrk.RetrieveBillOfLadingUploadCMD.do?mblNo=" + mblNo;
    let rtn = await $c.sbm.execute($p, sbm_blUpload);
    await scwin.sbm_blUploadDataProcess(rtn);
  }
  tbx_totalRows.setValue(ds_cntrAssignList.getRowCount());
  if (ds_cntrAssignList.getRowCount() > 0) {
    uploadExcelYn = 1;
  }
};
scwin.sbm_blUploadDataProcess = async function (rtn) {
  let responseJSON = rtn.responseJSON;
  if (responseJSON.resultDataSet[0].Code == '0') {
    let resultJSON = responseJSON.GAUCE;
    if (resultJSON.length == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, new Array("bl목록 조회결과"));
      return;
    }
    resultJSON.forEach(element => {
      let dupCheck = false;
      let mblNo = element.mblNo;
      for (var j = 0; j < ds_cntrAssignList.getRowCount(); j++) {
        if (ds_cntrAssignList.getCellData(j, "mblNo") == mblNo) {
          dupCheck = true;
          break;
        }
      }
      if (!dupCheck) {
        var row = ds_cntrAssignList.insertRow();
        Object.keys(element).forEach(function (key) {
          if (ds_cntrAssignList.getColumnIndex(key) > -1) {
            ds_cntrAssignList.setCellData(row, key, element[key]);
          }
        });
      }
    });
  }
};
scwin.toUpperCase = function (e) {
  // toUpperCase
  var val = e.target.value.toUpperCase();
  this.setValue(val);
};
scwin.gr_blCntrList_onafteredit = function (row, columnIndex, value) {
  var colId = gr_blCntrList.getColumnID(columnIndex);
  if (colId == "packCnt") {
    if ($c.gus.cfIsNull($p, value)) {
      ds_blCntrList.setCellData(row, colId, 0);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'MRN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'width: 230px;',mandatory:'true',maxlength:'11',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.toUpperCase',objType:'Data',ref:'data:ds_cntrAssignQueryCondition.mrn'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MSN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width:160px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_msnFrom',placeholder:'',style:'',maxlength:'5',allowChar:'0-9',objType:'Data',ref:'data:ds_cntrAssignQueryCondition.msnFrom'}},{T:1,N:'w2:textbox',A:{id:'',label:'-',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_msnTo',placeholder:'',style:'width:70px;',maxlength:'5',allowChar:'0-9',objType:'Data',ref:'data:ds_cntrAssignQueryCondition.msnTo'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당사LINE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveLineInfoPopup',readOnlyName:'true',allowCharCode:'a-zA-Z0-9',style:'',codeId:'ed_clntNo',maxlengthCode:'6',UpperFlagCode:'1',nameId:'ed_clntNm',id:'udc_comCode1',objTypeCode:'Data',refDataCollection:'ds_cntrAssignQueryCondition',code:'clntNo',name:'clntNm',selectID:'retrieveLineInfo',btnId:'btn_comCode1','ev:onclickEvent':'scwin.udc_comCode1_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode1_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode1_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당사하선장소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveMcomDsmbrkPopup',style:'',codeId:'ed_mcomDsmbrkPlcCd',nameId:'ed_mcomDsmbrkPlcNm',id:'udc_comCode2',maxlengthCode:'5',UpperFlagCode:'1',objTypeCode:'Data',code:'mcomDsmbrkPlcCd',name:'mcomDsmbrkPlcNm',refDataCollection:'ds_cntrAssignQueryCondition',selectID:'retrieveMcomDsmbrk',btnId:'btn_comCode2','ev:onclickEvent':'scwin.udc_comCode2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode2_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode2_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',class:' ',displayMode:'label',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_assgnClsCd',ref:'data:ds_cntrAssignQueryCondition.assgnClsCd',renderType:'',style:'width:160px;',submenuSize:'auto',objType:'data',chooseOptionLabel:'전체',chooseOption:'true'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당사배정구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' ',displayMode:'label',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_mcomAssgnClsCd',ref:'data:ds_cntrAssignQueryCondition.mcomAssgnClsCd',renderType:'',style:'width:230px;',submenuSize:'auto',objType:'data',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',disabled:'',id:'cbx_tAssgnWhouseCdCheck',objType:'data',ref:'data:ds_cntrAssignQueryCondition.ttAssgnWhouseCd',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'','ev:onviewchange':'scwin.disabledCombo'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'타창고'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',disabled:'',id:'cbx_tsExclusiveCdCheck',objType:'data',ref:'data:ds_cntrAssignQueryCondition.tsExclusiveCd',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'','ev:onviewchange':'scwin.checkCombo'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'T/S제외'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.f_Reset'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveLineInfoPopup2',readOnlyName:'true',style:'width:250px;',codeId:'ed_clntNo2',nameId:'ed_clntNm2',id:'udc_comCode3',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',objTypeCode:'Data',UpperFlagCode:'1',btnId:'btn_comCode3',selectID:'retrieveLineInfo','ev:onclickEvent':'scwin.udc_comCode3_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode3_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode3_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당사하선장소 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveMcomDsmbrkPopup2',readOnlyName:'true',style:'width:250px;',codeId:'ed_mcomDsmbrkPlcCd2',id:'udc_comCode4',nameId:'ed_mcomDsmbrkPlcNm2',maxlengthCode:'5',objTypeCode:'Data',UpperFlagCode:'1',btnId:'btn_comCode4',selectID:'retrieveMcomDsmbrk','ev:onclickEvent':'scwin.udc_comCode4_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode4_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode4_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정구분 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' ',displayMode:'label',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_assgnClsCd2',ref:'',renderType:'',style:'width:250px;',submenuSize:'auto',objType:'data',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'서비스 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrievServicePopup',style:'width:250px;',codeId:'ed_serviceCd',objType:'Data',UpperFlagCode:'1',maxlengthCode:'6',nameId:'ed_serviceNm',objTypeName:'key',objTypeCode:'Data',id:'udc_comCode5',btnId:'btn_comCode5',selectID:'retrievService','ev:onclickEvent':'scwin.udc_comCode5_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode5_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode5_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당사배정구분 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',class:' ',displayMode:'label',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_mcomAssgnClsCd2',ref:'',renderType:'',style:'width:250px;',submenuSize:'auto',objType:'data',chooseOptionLabel:'전체',chooseOption:'true'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Apply',label:'저장',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.f_Apply'},E:[{T:1,N:'xf:label',E:[{T:3,text:'일괄적용'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'컨테이너 배정목록 ',class:'tit'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'Y',gridUpFn:'scwin.f_upload',grdDownOpts:'{"fileName" : "컨테이너 배정목록.xlsx" ,"type" : "4+8+16", "sheetName": "컨테이너 배정목록" }',gridID:'gr_cntrAssignList',id:'udc_topGrp1',btnUser:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',rowStatusVisible:'true',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_cntrAssignList',scrollByColumn:'false',style:'',id:'gr_cntrAssignList',visibleRowNum:'7',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',fixedColumn:'5',autoFit:'none',readOnly:'false','ev:ontextimageclick':'scwin.gr_cntrAssignList_ontextimageclick','ev:oncellclick':'scwin.gr_cntrAssignList_oncellclick','ev:onheaderclick':'scwin.gr_cntrAssignList_onheaderclick','ev:oneditend':'scwin.gr_cntrAssignList_oneditend'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'checkHeader',displayMode:'label',rowSpan:'2',fixColumnWidth:'true',value:'',keepFocusOnCheckHeaderClick:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'MSN',blockSelect:'false',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column11',value:'M B/L',blockSelect:'false',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',value:'HSN',blockSelect:'false',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column9',value:'H B/L',blockSelect:'false',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'B/L TYPE',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'당사LINE',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'서비스',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column38',value:'하선물품코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column39',value:'하선장소',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column44',value:'당사하선장소',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column40',value:'배정구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column42',value:'당사배정구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column84',value:'배정창고',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column46',value:'컨테이너 개수',displayMode:'label',colSpan:'3'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',value:'B/L처리 여부',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column50',value:'하역오더',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'본선오더',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'일반오더',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column86',displayMode:'label',value:'20'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column71',value:'40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column70',value:'45',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'che',displayMode:'label',textAlign:'center',sortable:'true',fixColumnWidth:'true',keepFocusOnCheckHeaderClick:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'msn',blockSelect:'false',displayMode:'label',textAlign:'center',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'mblNo',blockSelect:'false',displayMode:'label',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'hsn',blockSelect:'false',displayMode:'label',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'hblNo',blockSelect:'false',displayMode:'label',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blTypCd',displayMode:'label',textAlign:'center',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'mcomLineCd',displayMode:'label',textAlign:'center',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'serCd',displayMode:'label',textAlign:'center',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'autoComplete',emptyItem:'true',id:'dsmbrkFrgtCd',displayMode:'value',textAlign:'center',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dsmbrkPlcNm',displayMode:'label',textAlign:'center',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'mcomDsmbrkPlcNm',displayMode:'label',textAlign:'center',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'autoComplete',emptyItem:'true',id:'assgnClsCd',displayMode:'label',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'autoComplete',emptyItem:'true',id:'mcomAssgnClsCd',displayMode:'label',textAlign:'center',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'assgnWhouseNm',displayMode:'label',textAlign:'center',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cnt20Feet',displayMode:'label',textAlign:'center',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cnt40Feet',displayMode:'label',textAlign:'center',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cnt45Feet',displayMode:'label',textAlign:'center',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'blProcYn',displayMode:'label',textAlign:'center',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lodCvsslOrder',displayMode:'label',textAlign:'center',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'impCvsslOrder',displayMode:'label',textAlign:'center',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'impGnrlOrder',displayMode:'label',textAlign:'center',sortable:'true',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_comCode_Grid'}}]},{T:1,N:'xf:group',A:{class:'row-gap-8 flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'B/L별 컨테이너목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',grdDownOpts:'{"fileName" : "B/L별 컨테이너목록.xlsx" ,"type" : "4+8+16", "sheetName": "B/L별 컨테이너목록" }',gridID:'gr_blCntrList',id:'udc_topGrp2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',rowStatusVisible:'true',dataList:'data:ds_blCntrList',fixedColumn:'2',focusMode:'row',id:'gr_blCntrList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'7',visibleRowNumFix:'true',readOnly:'false','ev:oncellclick':'scwin.gr_blCntrList_oncellclick','ev:onafteredit':'scwin.gr_blCntrList_onafteredit','ev:oneditend':'scwin.gr_blCntrList_oneditend',useFilterList:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'컨테이너번호',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'ISO_CD',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'Size',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'Type',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'Seal-No',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'Seal-No2',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Seal-No3',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'false',id:'column38',inputType:'text',value:'포장개수',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'false',id:'column39',inputType:'text',value:'포장단위코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'text',value:'XRAY검색대상',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntrNo',inputType:'text',removeBorderStyle:'false',width:'70',sortable:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'isoCd',inputType:'text',removeBorderStyle:'false',width:'70',sortable:'true',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'value',id:'cntrSizCd',inputType:'select',removeBorderStyle:'false',width:'70',sortable:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'value',id:'cntrTypCd',inputType:'select',removeBorderStyle:'false',width:'70',sortable:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo1',inputType:'text',width:'70',sortable:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo2',inputType:'text',width:'70',sortable:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo3',inputType:'text',width:'70',sortable:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'packCnt',inputType:'text',width:'70',sortable:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'packUnitCd',inputType:'autoComplete',emptyItem:'true',width:'70',sortable:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'xrayLupTrgtYn',inputType:'checkbox',width:'70',sortable:'true',textAlign:'center'}}]}]}]},{T:1,N:'w2:gridView',A:{dataList:'data:ds_tmp_bl',id:'gr_tmp_bl',visible:'false','ev:onfilereadend':'scwin.gr_tmp_bl_onfilereadend'},E:[{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column11',value:'M B/L',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'mblNo',blockSelect:'false',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_linkC1',label:'C1 오더',style:'',type:'button','ev:onclick':'scwin.f_CntrOrderLink(\'C1\')'},E:[{T:1,N:'xf:label',E:[{T:3,text:'C1 오더'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_linkC2',label:'C2 오더',style:'',type:'button','ev:onclick':'scwin.f_CntrOrderLink(\'C2\')'},E:[{T:1,N:'xf:label',E:[{T:3,text:'C2 오더'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_linkCt',label:'CT 오더',style:'',type:'button','ev:onclick':'scwin.f_CntrOrderLink(\'CT\')'},E:[{T:1,N:'xf:label',E:[{T:3,text:'CT 오더'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_linkCs',label:'CS 오더',style:'',type:'button','ev:onclick':'scwin.f_CntrOrderLink(\'CS\')'},E:[{T:1,N:'xf:label',E:[{T:3,text:'CS 오더'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update',label:'저장',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.f_Update'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})