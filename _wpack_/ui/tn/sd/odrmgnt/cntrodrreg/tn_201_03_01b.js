/*amd /ui/tn/sd/odrmgnt/cntrodrreg/tn_201_03_01b.xml 91138 fa3243b0f25932691c1f878a369b8b4120600067f2b69135ce1ee5ff616bdb74 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'소속지사',dataType:'text'}},{T:1,N:'w2:key',A:{id:'uploadDtFrom',name:'업로드 시작 날짜',dataType:'text'}},{T:1,N:'w2:key',A:{id:'uploadDtTo',name:'업로드 종료 날짜',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result_FillUse',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'doNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lotNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr20Qty',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr40Qty',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr40Type',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etdDt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fwdNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrLine',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRmk',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvOprCd',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvTmlVsslPortcnt',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldWrkPlCd',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldHh',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgrId',name:'name32',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Tmp_FillUse',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'errCol',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doNo',name:'DO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNo',name:'작업NO(INV_NO)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lotNo',name:'제품번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr20Qty',name:'컨테이너수량20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr40Qty',name:'컨테이너수량40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr40Type',name:'컨테이너TYPE40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etdDt',name:'출항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fwdNm',name:'포워더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrLine',name:'오더지라인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'PORT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvOprCd',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvTmlVsslPortcnt',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldWrkPlCd',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldHh',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgrId',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uploadDt',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr20Type',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldDt',name:'name73',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'name74',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'name75',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'name80',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'name81',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'name83',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldZip',name:'name84',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvZip',name:'name85',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptZip',name:'name86',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name87',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'name88',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsCvsslMgntNo',name:'name90',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name93',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true','ev:oninsertrow':'scwin.ds_result_oninsertrow','ev:onremoverow':'scwin.ds_result_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'uploadDt',name:'업로드일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doNo',name:'DO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNo',name:'작업NO(INV_NO)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lotNo',name:'제품번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr20Type',name:'컨테이너TYPE20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr40Type',name:'컨테이너TYPE40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr20Qty',name:'컨테이너수량20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr40Qty',name:'컨테이너수량40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etdDt',name:'출항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fwdNm',name:'포워더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrLine',name:'오더지라인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'PORT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvOprCd',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvTmlVsslPortcnt',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldWrkPlCd',name:'상차지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'작업지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldHh',name:'상차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'도착시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldDt',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldZip',name:'상차지우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvZip',name:'도착지우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptZip',name:'작업지우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsCvsslMgntNo',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgrId',name:'배차담당ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errCol',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvOprCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvTmlVsslPortcnt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldWrkPlCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldHh',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldDt',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrDsgYn',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldZip',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvZip',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptZip',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkNo',name:'BOOKING',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsCvsslMgntNo',name:'name42',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_odrLine'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lineCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_lineCd',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lineCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cntrType'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrType',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'COL1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL10',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.RetrieveExcelUploadAndAutoOrderCreationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lineCd',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.GetLineCdByCdCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_odrLine","key":"IN_DS1"},{"id":"ds_lineCd","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_lineCd","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.RegistExcelUploadAndAutoOrderCreationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_result","key":"IN_DS1"},{"id":"ds_result2","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cntrType',action:'/ncall.cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,["dma_cntrType",{"id":"ds_cntrType","key":"GAUCE"}]',target:'data:json,{"id":"ds_cntrType","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 부산지사
// 20201202 ~ 20201202

scwin.strCurrDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.memJson = $c.data.getMemInfo($p);
scwin.empNo = scwin.memJson.empNo;
scwin.regId = scwin.memJson.regId;
scwin.userId = scwin.memJson.userId;
scwin.lobranCd = scwin.memJson.lobranCd; // 점소명
scwin.loUpperLobranCd = scwin.memJson.loUpperLobranCd; // 확인 필요.
scwin.strCntrOdrRegUrlC4 = "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_04b.xml";
scwin.onpageload = async function () {
  let lobranCd = scwin.lobranCd; // 점소명
  let currentDate = scwin.strCurrDate;

  // scwin.f_defaultValue(); // scwin.onUdcCompleted 이걸로 대체하여 쓰는중
  await scwin.f_getCntrType(); // 임시 주석

  const param = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "lc_lobranCd"
  }];
  $c.data.setGauceUtil($p, param);
  lc_lobranCd.setValue(scwin.loUpperLobranCd);
};

// UDC에 값 세팅 방법
// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  console.log("----------- onUdcCompleted");
  var curDate = scwin.strCurrDate;
  ed_uploadDtFrom.setValue(curDate.substring(0, 8));
  ed_uploadDtTo.setValue(curDate.substring(0, 8));
  setTimeout(() => {
    lc_lobranCd.setValue(scwin.loUpperLobranCd);
  }, 100);
};

//-----------------------------------------------------------------------------
// 조회
//-----------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //날짜형식확인
  if ($c.gus.cfIsNull($p, ed_uploadDtFrom.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Receiving Data"]);
    ed_uploadDtFrom.focus();
    return;
  } else if ($c.gus.cfIsNull($p, ed_uploadDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Receiving Data"]);
    ed_uploadDtTo.focus();
    return;
  }

  // var rtn = await $c.gus.cfValidate([ed_uploadDtFrom, ed_uploadDtTo]);
  // if (!rtn) { return rtn; }

  if (!$c.gus.cfIsAfterDate($p, ed_uploadDtFrom.getValue(), ed_uploadDtTo.getValue(), false)) {
    // 날짜 검사( 시작, 끝 , 검사 날짜)
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ['시작범위[' + ed_uploadDtFrom.getValue() + '] ', '종료범위[' + ed_uploadDtTo.getValue() + '] 보다 이전 ']);
    ed_uploadDtTo.focus();
    return;
  }

  // tr_retrieve.Post();
  $c.sbm.execute($p, sbm_retrieve);

  // 그리드 포맷을 바꾸는거 같음.. 일단 주석.. // to-do
  // var gr_format =
  //     ' <C> id="uploadDt"        name="업로드;일자" width=75 align=center sort=true edit=none  mask="XXXX/XX/XX"</c>' +
  //     ' <C> id="seq"         	name="관리;번호"       width=60 align=center sort=false edit=none show=true Value={String(seq)}</c>' +
  //     ' <C> id="odrNo"         	name="오더번호"   width=95 align=center sort=true edit=none FontStyle=under color="<%=DCSS.OPTIONAL_COLOR%>"</c>' +
  //     ' <C> id="doNo"            name="DO"         width=100 align=center sort=true edit=none  </c>' +
  //     ' <C> id="wrkNo"         	name="INV;NO"     width=60 align=center sort=true edit=none  </c>' +
  //     ' <C> id="wt"         		name="중량"       width=50 align=center sort=true edit=none dec=2 </c>' +
  //     ' <C> id="cntr20Qty"       name="20"    	  width=40 align=center sort=true edit=none  </c>' +
  //     ' <C> id="cntr20Type"      name="20TYPE"     width=80 align=center sort=true edit=none show=false </c>' +
  //     '<g> name="40"' +
  //     ' <C> id="cntr40Qty"       name="QTY"    	  width=50 align=center sort=true edit=none  </c>' +
  //     ' <C> id="cntr40Type"      name="TYPE"    	  width=58 align=center sort=true edit=none  </c>' +
  //     '</g>' +
  //     ' <C> id="etdDt"         	name="출항;일자"   width=75 align=center sort=true edit=none  mask="XXXX/XX/XX"</c>' +
  //     ' <C> id="fwdNm"           name="포워더명"   width=70 align=center sort=true edit=none  </c>' +
  //     ' <C> id="odrLine"         name="오더지;라인" width=80 align=center sort=true edit=none  </c>' +
  //     ' <C> id="bookingNo"       name="BOOKING"    width=80 align=center sort=true edit=none  </c>' +
  //     ' <C> id="portNm"        name="PORT"       width=80 alialign=centerrt=true edit=none  </c>' +
  //     ' <C> id="vsslNm"          name="VSSL"   width=80 align=left   sort=true edit=none  </c>' +
  //     ' <C> id="odrRmk"          name="비고"       width=120 align=left 	sort=true </c>' +
  //     ' <C> id="mgrId"			name="배차담당ID" width=90	align=left		sort=true	edit=none</c>'
  //     ;
  // var gr_format =

  //     '<w2:column displayMode="label" id="column1" inputType="text" value="업로드&lt;br/&gt;일자" width="80" colSpan="" rowSpan="2"></w2:column>' +
  //     '<w2:column displayMode="label" id="column17" inputType="text" value="관리&lt;br/&gt;번호" width="70" colSpan="" rowSpan="2" sortable="true"></w2:column>' +
  //     '<w2:column displayMode="label" id="column15" inputType="text" value="오더번호" width="100" colSpan="" rowSpan="2"></w2:column>' +
  //     '<w2:column displayMode="label" id="column13" inputType="text" value="DO" width="100" colSpan="" rowSpan="2"></w2:column>' +
  //     '<w2:column displayMode="label" id="column11" inputType="text" value="INV&lt;br/&gt;NO" width="70" colSpan="" rowSpan="2"></w2:column>' +
  //     '<w2:column displayMode="label" id="column9" inputType="text" value="중량" width="70" colSpan="" rowSpan="2"></w2:column>' +
  //     '<w2:column displayMode="label" id="column3" inputType="text" value="20" width="70" colSpan="" rowSpan="2"></w2:column>' +
  //     '<w2:column displayMode="label" id="column5" inputType="text" value="20TYPE" width="100" colSpan="" rowSpan="2"></w2:column>' +
  //     '<w2:column displayMode="label" id="column7" inputType="text" value="40" width="140" colSpan="2" rowSpan=""></w2:column>' +
  //     '<w2:column width="100" inputType="text" id="column33" value="출항일자" displayMode="label" colSpan="" rowSpan="2"></w2:column>' +
  //     '<w2:column width="100" inputType="text" id="column31" value="포워더명" displayMode="label" colSpan="" rowSpan="2"></w2:column>' +
  //     '<w2:column width="80" inputType="text" id="column29" value="오더지&lt;br/&gt;라인" displayMode="label" colSpan="" rowSpan="2"></w2:column>' +
  //     '<w2:column width="100" inputType="text" id="column27" value="BOOKING" displayMode="label" colSpan="" rowSpan="2"></w2:column>' +
  //     '<w2:column width="80" inputType="text" id="column21" value="PORT" displayMode="label" colSpan="" rowSpan="2" sortable="false"></w2:column>' +
  //     '<w2:column width="80" inputType="text" id="column23" value="VSSL" displayMode="label" colSpan="" rowSpan="2"></w2:column>' +
  //     '<w2:column width="140" inputType="text" id="column25" value="비고" displayMode="label" colSpan="" rowSpan="2"></w2:column>' +
  //     '<w2:column width="100" inputType="text" style="" id="column35" value="배차담당ID" displayMode="label" colSpan="" rowSpan="2"></w2:column>'

  // gr_result.setGridStyle(WebSquare.xml.parse(gr_format, true));
  // gr_result.Format = gr_format; 

  gr_result.show('');
  gr_resultCsv.hide();
};
scwin.f_excel_down = function () {
  scwin.f_Excel('gr_result', 'ds_result', '수출일반 오더 업로드');
};

//-------------------------------------------------------------------------
// 엑셀 다운로드 
//-------------------------------------------------------------------------
scwin.f_Excel = function (objGrd, objDs, title) {
  var objGrd = $p.getComponentById(objGrd);
  var objDs = $p.getComponentById(objDs);
  if (objDs.getTotalRow() == 0) return;
  // cfGridToExcel(objGrd, "엑셀업로드 오더현황", title + ".xls", 2);
  // 수출일반 오더 업로드
  title = "수출일반 오더 업로드";
  let excelName = "엑셀업로드 오더현황";
  const grdObj = objGrd;
  const infoArr = [];
  const options = {
    fileName: title + ".xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: excelName
  };
  $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
};

//-------------------------------------------------------------------------
// 엑셀 업로드 
//-------------------------------------------------------------------------
scwin.drmFileSubmit = function () {
  var formObj = document.frm;
  // formObj, fileUpload DataSet, 파일업로드 후 호출할 함수
  cfDrmUploadFile(formObj, fileUploadGDS, "scwin.f_Upload");
};
scwin.f_Upload = async function () {
  if (ds_result.getModifiedIndex().length) {
    let confirmVal = await $c.win.confirm($p, "변경사항이 있습니다. 계속하시겠습니까?");
    if (!confirmVal) {
      resetForm('frm');
      return;
    }
  }
  const excelLoad = await udc_grd.getUpExt();
  switch (excelLoad) {
    case '1':
      {
        let options = {
          type: 1,
          startRowIndex: 1
        };
        await $c.data.uploadGridViewCSV($p, gr_result_filluse, options); // CSV를 선택하였을 경우
        break;
      }
    default:
      {
        let options = {
          startRowIndex: 1,
          type: 1
        };
        await $c.data.uploadGridViewExcel($p, gr_result_filluse, options);
        break;
      }
  }
};

// // 엑셀 데이터 처리 함수
// scwin.f_Import
scwin.excelUploadBefore = async function (value) {
  gr_result.hide('');
  gr_resultCsv.show('');
  ds_Tmp_FillUse.setJSON(ds_result_FillUse.getAllJSON());
  if (ds_result_FillUse.getTotalRow() == 0) {
    $c.gus.cfProgressWinClose($p);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }
  ds_result.removeAll();
  let curDate = scwin.strCurrDate;
  for (var i = 0; i < ds_Tmp_FillUse.getTotalRow(); i++) {
    var errorColumn = scwin.f_errorColumn(i);
    if (ds_Tmp_FillUse.getCellData(i, "lduldHh").length < 4) {
      ds_Tmp_FillUse.setCellData(i, "lduldHh", "0" + ds_Tmp_FillUse.getCellData(i, "lduldHh"));
    }
    if (ds_Tmp_FillUse.getCellData(i, "wrkStHh").length < 4) {
      ds_Tmp_FillUse.setCellData(i, "wrkStHh", "0" + ds_Tmp_FillUse.getCellData(i, "wrkStHh"));
    }
    if (ds_Tmp_FillUse.getCellData(i, "wrkEndHh").length < 4) {
      ds_Tmp_FillUse.setCellData(i, "wrkEndHh", "0" + ds_Tmp_FillUse.getCellData(i, "wrkEndHh"));
    }

    /* 업로드된 엑셀 grid에 그려질때 lineCd 인식 */
    ds_odrLine.set("lineCd", ds_Tmp_FillUse.getCellData(i, "odrLine").toUpperCase());
    await scwin.submitExcute(sbm_lineCd);
    var lineCd = ds_lineCd.getCellData(0, "lineCd");
    ds_odrLine.setEmptyValue(); // ds_odrLine.ClearData();
    ds_lineCd.removeAll(); // ds_lineCd.ClearData();

    ds_result.insertRow();
    ds_result.setCellData(i, "errCol", errorColumn);
    ds_result.setCellData(i, "uploadDt", scwin.strCurrDate);
    ds_result.setCellData(i, "doNo", ds_Tmp_FillUse.getCellData(i, "doNo"));
    ds_result.setCellData(i, "wrkNo", ds_Tmp_FillUse.getCellData(i, "wrkNo"));
    ds_result.setCellData(i, "lotNo", ds_Tmp_FillUse.getCellData(i, "lotNo"));
    ds_result.setCellData(i, "wt", ds_Tmp_FillUse.getCellData(i, "wt"));
    ds_result.setCellData(i, "cntr20Qty", ds_Tmp_FillUse.getCellData(i, "cntr20Qty"));
    ds_result.setCellData(i, "cntr40Qty", ds_Tmp_FillUse.getCellData(i, "cntr40Qty"));
    ds_result.setCellData(i, "cntr40Type", ds_Tmp_FillUse.getCellData(i, "cntr40Type"));
    ds_result.setCellData(i, "etdDt", curDate.substring(0, 4) + ds_Tmp_FillUse.getCellData(i, "etdDt").substring(0, 2) + ds_Tmp_FillUse.getCellData(i, "etdDt").substring(4, 6));
    ds_result.setCellData(i, "fwdNm", ds_Tmp_FillUse.getCellData(i, "fwdNm"));
    ds_result.setCellData(i, "odrLine", ds_Tmp_FillUse.getCellData(i, "odrLine").toUpperCase());
    ds_result.setCellData(i, "vsslNm", ds_Tmp_FillUse.getCellData(i, "vsslNm"));
    ds_result.setCellData(i, "portNm", ds_Tmp_FillUse.getCellData(i, "portNm"));
    ds_result.setCellData(i, "odrRmk", ds_Tmp_FillUse.getCellData(i, "odrRmk"));
    ds_result.setCellData(i, "bookingNo", ds_Tmp_FillUse.getCellData(i, "bookingNo").replace(/ /gi, ''));
    ds_result.setCellData(i, "ctrtClntNo", ds_Tmp_FillUse.getCellData(i, "ctrtClntNo"));
    ds_result.setCellData(i, "ctrtNo", ds_Tmp_FillUse.getCellData(i, "ctrtNo"));
    ds_result.setCellData(i, "bilgClntNo", scwin.f_settingBilgClntNo(ds_Tmp_FillUse.getCellData(i, "wrkNo"))); //ds_Tmp_FillUse.NameValue(i, "bilgClntNo");
    ds_result.setCellData(i, "ctrtWrkPathSeq", ds_Tmp_FillUse.getCellData(i, "ctrtWrkPathSeq"));
    ds_result.setCellData(i, "cvsslMgntNo", ds_Tmp_FillUse.getCellData(i, "cvsslMgntNo"));
    ds_result.setCellData(i, "sellLodeptCd", ds_Tmp_FillUse.getCellData(i, "sellLodeptCd"));
    ds_result.setCellData(i, "bilgLodeptCd", ds_Tmp_FillUse.getCellData(i, "bilgLodeptCd"));
    // ds_result.setCellData(i, "destPortCd", await scwin.f_openCommonPopUp(1, null, 'T', 'F', 'T', i));
    await scwin.f_openCommonPopUp(1, null, 'T', 'F', 'T', i);
    ds_result.setCellData(i, "lineCd", lineCd);
    ds_result.setCellData(i, "arvOprCd", ds_Tmp_FillUse.getCellData(i, "arvOprCd").toUpperCase());
    ds_result.setCellData(i, "arvTmlVsslPortcnt", ds_Tmp_FillUse.getCellData(i, "arvTmlVsslPortcnt").toUpperCase());
    ds_result.setCellData(i, "lduldWrkPlCd", ds_Tmp_FillUse.getCellData(i, "lduldWrkPlCd"));
    ds_result.setCellData(i, "dptWrkPlCd", ds_Tmp_FillUse.getCellData(i, "dptWrkPlCd"));
    ds_result.setCellData(i, "arvWrkPlCd", ds_Tmp_FillUse.getCellData(i, "arvWrkPlCd"));
    ds_result.setCellData(i, "dptDtl", ds_Tmp_FillUse.getCellData(i, "dptDtl"));
    ds_result.setCellData(i, "lduldDt", scwin.strCurrDate);
    ds_result.setCellData(i, "lduldHh", ds_Tmp_FillUse.getCellData(i, "lduldHh"));
    ds_result.setCellData(i, "wrkStDt", scwin.strCurrDate);
    ds_result.setCellData(i, "wrkStHh", ds_Tmp_FillUse.getCellData(i, "wrkStHh"));
    ds_result.setCellData(i, "wrkEndDt", scwin.strCurrDate);
    ds_result.setCellData(i, "wrkEndHh", ds_Tmp_FillUse.getCellData(i, "wrkEndHh"));
    ds_result.setCellData(i, "odrKndCd", "C4");
    ds_result.setCellData(i, "selfClsCd", ds_Tmp_FillUse.getCellData(i, "selfClsCd"));
    // ds_result.setCellData(i, "shpCoClntNo", await scwin.f_openCommonPopUp(4, 'LINECD', 'T', 'F', 'T', i));
    await scwin.f_openCommonPopUp(4, 'LINECD', 'T', 'F', 'T', i);
    ds_result.setCellData(i, "crcCd", "KRW");
    ds_result.setCellData(i, "transCondCd", "2"); //ds_Tmp_FillUse.NameValue(i, "transCondCd");
    ds_result.setCellData(i, "cntrWtCondCd", "H");
    ds_result.setCellData(i, "impExpDomesticClsCd", "O");
    // ds_result.setCellData(i, "arvZip", await scwin.f_openCommonPopUp(5, 'ARV', 'T', 'F', 'T', i));
    await scwin.f_openCommonPopUp(5, 'ARV', 'T', 'F', 'T', i);
    // ds_result.setCellData(i, "dptZip", await scwin.f_openCommonPopUp(5, 'DPT', 'T', 'F', 'T', i));
    await scwin.f_openCommonPopUp(5, 'DPT', 'T', 'F', 'T', i);
    // ds_result.setCellData(i, "lduldZip", await scwin.f_openCommonPopUp(5, 'LDULD', 'T', 'F', 'T', i));
    await scwin.f_openCommonPopUp(5, 'LDULD', 'T', 'F', 'T', i);
    ds_result.setCellData(i, "regBranCd", scwin.lobranCd); // "<%= DCheckIf.isNull(loginDTO.getLobranCd())? "" : loginDTO.getLobranCd()%>";
    ds_result.setCellData(i, "mgrId", ds_Tmp_FillUse.getCellData(i, "mgrId"));
    if ($c.gus.cfIsNull($p, ds_result.getCellData(i, "cntr20Type"))) {
      ds_result.setCellData(i, "cntr20Type", "DC");
    }
    if ($c.gus.cfIsNull($p, ds_result.getCellData(i, "cntr40Type"))) {
      ds_result.setCellData(i, "cntr40Type", "DC");
    }
    ds_result.setCellData(i, "tsCvsslMgntNo", "");
    await scwin.f_setCntrType(i);
    await scwin.f_setDate(i);
    await scwin.f_setBooking(i);
    await scwin.f_setPortcnt(i);
  }
};
scwin.gr_resultCsv_onfilereadend = async function (value) {
  gr_resultCsv.show('');
  gr_result.hide();

  // ds_Tmp_FillUse.ImportData(ds_result_FillUse.ExportData(1, ds_result_FillUse.getRowCount(), true));
  ds_Tmp_FillUse.setJSON(ds_result_FillUse.getAllJSON());
  if (ds_result_FillUse.getTotalRow() == 0) {
    $c.gus.cfProgressWinClose($p);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }
  let curDate = scwin.strCurrDate;
  for (var i = 0; i < ds_Tmp_FillUse.getTotalRow(); i++) {
    var errorColumn = scwin.f_errorColumn(i);
    if (ds_Tmp_FillUse.getCellData(i, "lduldHh").length < 4) {
      ds_Tmp_FillUse.setCellData(i, "lduldHh", "0") + ds_Tmp_FillUse.getCellData(i, "lduldHh");
    }
    if (ds_Tmp_FillUse.getCellData(i, "wrkStHh").length < 4) {
      ds_Tmp_FillUse.setCellData(i, "wrkStHh", "0") + ds_Tmp_FillUse.getCellData(i, "wrkStHh");
    }
    if (ds_Tmp_FillUse.getCellData(i, "wrkEndHh").length < 4) {
      ds_Tmp_FillUse.setCellData(i, "wrkEndHh", "0") + ds_Tmp_FillUse.getCellData(i, "wrkEndHh");
    }

    /* 업로드된 엑셀 grid에 그려질때 lineCd 인식 */
    ds_odrLine.set("lineCd", ds_Tmp_FillUse.getCellData(i, "odrLine").toUpperCase());

    // $c.sbm.execute(sbm_lineCd); // tr_lineCd.Post();
    await scwin.submitExcute(sbm_lineCd);
    var lineCd = ds_lineCd.get("lineCd");
    ds_odrLine.setEmptyValue(); // ds_odrLine.ClearData();
    ds_lineCd.setEmptyValue(); // ds_lineCd.ClearData();
    // ds_result_FillUse
    // ds_result_FillUse
    ds_result.insertRow();
    ds_result.setCellData(i, "errCol", errorColumn);
    ds_result.setCellData(i, "uploadDt", scwin.strCurrDate);
    ds_result.setCellData(i, "doNo", ds_Tmp_FillUse.getCellData(i, "doNo"));
    ds_result.setCellData(i, "wrkNo", ds_Tmp_FillUse.getCellData(i, "wrkNo"));
    ds_result.setCellData(i, "lotNo", ds_Tmp_FillUse.getCellData(i, "lotNo"));
    ds_result.setCellData(i, "wt", ds_Tmp_FillUse.getCellData(i, "wt"));
    ds_result.setCellData(i, "cntr20Qty", ds_Tmp_FillUse.getCellData(i, "cntr20Qty"));
    ds_result.setCellData(i, "cntr40Qty", ds_Tmp_FillUse.getCellData(i, "cntr40Qty"));
    ds_result.setCellData(i, "cntr40Type", ds_Tmp_FillUse.getCellData(i, "cntr40Type"));
    ds_result.setCellData(i, "etdDt", curDate.substring(0, 4) + ds_Tmp_FillUse.getCellData(i, "etdDt").substring(0, 2) + ds_Tmp_FillUse.getCellData(i, "etdDt").substring(4, 6));
    ds_result.setCellData(i, "fwdNm", ds_Tmp_FillUse.getCellData(i, "fwdNm"));
    ds_result.setCellData(i, "odrLine", ds_Tmp_FillUse.getCellData(i, "odrLine").toUpperCase());
    ds_result.setCellData(i, "vsslNm", ds_Tmp_FillUse.getCellData(i, "vsslNm"));
    ds_result.setCellData(i, "portNm", ds_Tmp_FillUse.getCellData(i, "portNm"));
    ds_result.setCellData(i, "odrRmk", ds_Tmp_FillUse.getCellData(i, "odrRmk"));
    ds_result.setCellData(i, "bookingNo", ds_Tmp_FillUse.getCellData(i, "bookingNo").replace(/ /gi, ''));
    ds_result.setCellData(i, "ctrtClntNo", ds_Tmp_FillUse.getCellData(i, "ctrtClntNo"));
    ds_result.setCellData(i, "ctrtNo", ds_Tmp_FillUse.getCellData(i, "ctrtNo"));
    ds_result.setCellData(i, "bilgClntNo", scwin.f_settingBilgClntNo(ds_Tmp_FillUse.getCellData(i, "wrkNo"))); //ds_Tmp_FillUse.NameValue(i, "bilgClntNo");
    ds_result.setCellData(i, "ctrtWrkPathSeq", ds_Tmp_FillUse.getCellData(i, "ctrtWrkPathSeq"));
    ds_result.setCellData(i, "cvsslMgntNo", ds_Tmp_FillUse.getCellData(i, "cvsslMgntNo"));
    ds_result.setCellData(i, "sellLodeptCd", ds_Tmp_FillUse.getCellData(i, "sellLodeptCd"));
    ds_result.setCellData(i, "bilgLodeptCd", ds_Tmp_FillUse.getCellData(i, "bilgLodeptCd"));
    ds_result.setCellData(i, "destPortCd", await scwin.f_openCommonPopUp(1, null, 'T', 'F', 'T', i));
    ds_result.setCellData(i, "lineCd", lineCd);
    ds_result.setCellData(i, "arvOprCd", ds_Tmp_FillUse.getCellData(i, "arvOprCd").toUpperCase());
    ds_result.setCellData(i, "arvTmlVsslPortcnt", ds_Tmp_FillUse.getCellData(i, "arvTmlVsslPortcnt").toUpperCase());
    ds_result.setCellData(i, "lduldWrkPlCd", ds_Tmp_FillUse.getCellData(i, "lduldWrkPlCd"));
    ds_result.setCellData(i, "dptWrkPlCd", ds_Tmp_FillUse.getCellData(i, "dptWrkPlCd"));
    ds_result.setCellData(i, "arvWrkPlCd", ds_Tmp_FillUse.getCellData(i, "arvWrkPlCd"));
    ds_result.setCellData(i, "dptDtl", ds_Tmp_FillUse.getCellData(i, "dptDtl"));
    ds_result.setCellData(i, "lduldDt", scwin.strCurrDate);
    ds_result.setCellData(i, "lduldHh", ds_Tmp_FillUse.getCellData(i, "lduldHh"));
    ds_result.setCellData(i, "wrkStDt", scwin.strCurrDate);
    ds_result.setCellData(i, "wrkStHh", ds_Tmp_FillUse.getCellData(i, "wrkStHh"));
    ds_result.setCellData(i, "wrkEndDt", scwin.strCurrDate);
    ds_result.setCellData(i, "wrkEndHh", ds_Tmp_FillUse.getCellData(i, "wrkEndHh"));
    ds_result.setCellData(i, "odrKndCd", "C4");
    ds_result.setCellData(i, "selfClsCd", ds_Tmp_FillUse.getCellData(i, "selfClsCd"));
    ds_result.setCellData(i, "shpCoClntNo", await scwin.f_openCommonPopUp(4, 'LINECD', 'T', 'F', 'T', i));
    ds_result.setCellData(i, "crcCd", "KRW");
    ds_result.setCellData(i, "transCondCd", "2"); //ds_Tmp_FillUse.NameValue(i, "transCondCd");
    ds_result.setCellData(i, "cntrWtCondCd", "H");
    ds_result.setCellData(i, "impExpDomesticClsCd", "O");
    ds_result.setCellData(i, "arvZip", await scwin.f_openCommonPopUp(5, 'ARV', 'T', 'F', 'T', i));
    ds_result.setCellData(i, "dptZip", await scwin.f_openCommonPopUp(5, 'DPT', 'T', 'F', 'T', i));
    ds_result.setCellData(i, "lduldZip", await scwin.f_openCommonPopUp(5, 'LDULD', 'T', 'F', 'T', i));
    ds_result.setCellData(i, "regBranCd", scwin.lobranCd); // "<%= DCheckIf.isNull(loginDTO.getLobranCd())? "" : loginDTO.getLobranCd()%>";
    ds_result.setCellData(i, "mgrId", ds_Tmp_FillUse.getCellData(i, "mgrId"));
    if ($c.gus.cfIsNull($p, ds_result.getCellData(i, "cntr20Type"))) {
      ds_result.setCellData(i, "cntr20Type", "DC");
    }
    if ($c.gus.cfIsNull($p, ds_result.getCellData(i, "cntr40Type"))) {
      ds_result.setCellData(i, "cntr40Type", "DC");
    }
    ds_result.setCellData(i, "tsCvsslMgntNo", "");
    await scwin.f_setCntrType(i);
    await scwin.f_setDate(i);
    await scwin.f_setBooking(i);
    await scwin.f_setPortcnt(i);
  }
};

/**
 * @method 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_lineCd:
      break;
    case sbm_save:
      await scwin.sbm_save_submitdone(e);
      break;
    case sbm_cntrType:
      break;
    default:
      break;
  }
};

/* 에러컬럼 validate */
scwin.f_errorColumn = function (i) {
  var rtnString = "";
  var doNo = ds_Tmp_FillUse.getCellData(i, "doNo");
  var wrkNo = ds_Tmp_FillUse.getCellData(i, "wrkNo");
  var lotNo = ds_Tmp_FillUse.getCellData(i, "lotNo");
  var bookingNo = ds_Tmp_FillUse.getCellData(i, "bookingNo");
  var mgrId = ds_Tmp_FillUse.getCellData(i, "mgrId");
  if (!scwin.f_isNumericString(doNo) || doNo.length > 10) rtnString += "DO(10자이내숫자), ";
  if (wrkNo.length > 20) rtnString += "INV NO(20자이내), ";
  if (lotNo.length > 5) rtnString += "제품번호(5자이내), ";
  if (bookingNo.length > 20) rtnString += "BOOKING(20자이내), ";
  if (mgrId.length != 0 && (!scwin.f_isNumericString(mgrId) || mgrId.length > 6)) rtnString += "배차담당ID(6자이내숫자), ";

  // return rtnString.substr(0, rtnString.length - 2);
  return rtnString.slice(0, rtnString.length - 2);
};
scwin.f_isNumericString = function (str) {
  var pattern = /^[0-9\s]+$/;
  return pattern.test(str);
};

//-----------------------------------------------------------------------------
//오더실적일괄생성 저장 
//-----------------------------------------------------------------------------
scwin.f_Save = async function () {
  //변경사항 확인
  if (!ds_result.getModifiedIndex().length) {
    $c.win.alert($p, "변경사항이 없습니다."); //변경사항이 없습니다.
    return;
  }

  // 필수값 체크
  let ret = await $c.gus.cfValidate($p, [gr_result]);
  if (!ret) return;
  for (var i = 0; i < ds_result.getTotalRow(); i++) {
    if (ds_result.getCellData(i, "cntr20Qty") == 0 && ds_result.getCellData(i, "cntr40Qty") == 0) {
      $c.win.alert($p, i + "번째의 컨테이너 수량을 입력하세요.");
      return;
    }
    if (parseInt(ds_result.getCellData(i, "wt")) <= 0) {
      $c.win.alert($p, i + "번째의 컨테이너 중량을 입력하세요.");
      return;
    }
    if (ds_result.getCellData(i, "errCol").length != 0) {
      $c.win.alert($p, i + "번째 열의 데이터를 확인해주세요.");
      return;
    }

    // gr_result.redraw = "false";
    if (ds_result.getRowStatusValue(i) == "2") {
      // 1 -> 2
      ///////////////////////오더정보 세팅START
      // ds_result2.AddRow();
      ds_result2.insertRow();
      ds_result2.setCellData(i, "ctrtClntNo", ds_result.getCellData(i, "ctrtClntNo"));
      ds_result2.setCellData(i, "ctrtNo", ds_result.getCellData(i, "ctrtNo"));
      ds_result2.setCellData(i, "bilgClntNo", ds_result.getCellData(i, "bilgClntNo"));
      ds_result2.setCellData(i, "reqClntNo", ds_result.getCellData(i, "ctrtClntNo"));
      ds_result2.setCellData(i, "realMchtClntNo", ds_result.getCellData(i, "ctrtClntNo"));
      ds_result2.setCellData(i, "sellLodeptCd", ds_result.getCellData(i, "sellLodeptCd"));
      ds_result2.setCellData(i, "bilgLodeptCd", ds_result.getCellData(i, "bilgLodeptCd"));
      ds_result2.setCellData(i, "lineCd", ds_result.getCellData(i, "lineCd"));
      ds_result2.setCellData(i, "vsslCd", ds_result.getCellData(i, "vsslCd"));
      ds_result2.setCellData(i, "arvOprCd", ds_result.getCellData(i, "arvOprCd"));
      ds_result2.setCellData(i, "arvTmlVsslPortcnt", ds_result.getCellData(i, "arvTmlVsslPortcnt"));
      ds_result2.setCellData(i, "lduldWrkPlCd", ds_result.getCellData(i, "lduldWrkPlCd"));
      ds_result2.setCellData(i, "dptWrkPlCd", ds_result.getCellData(i, "dptWrkPlCd"));
      ds_result2.setCellData(i, "arvWrkPlCd", ds_result.getCellData(i, "arvWrkPlCd"));
      ds_result2.setCellData(i, "dptDtl", ds_result.getCellData(i, "dptDtl"));
      ds_result2.setCellData(i, "lduldDt", ds_result.getCellData(i, "lduldDt"));
      ds_result2.setCellData(i, "lduldHh", ds_result.getCellData(i, "lduldHh"));
      ds_result2.setCellData(i, "wrkStDt", ds_result.getCellData(i, "wrkStDt"));
      ds_result2.setCellData(i, "wrkStHh", ds_result.getCellData(i, "wrkStHh"));
      ds_result2.setCellData(i, "wrkEndDt", ds_result.getCellData(i, "wrkEndDt"));
      ds_result2.setCellData(i, "wrkEndHh", ds_result.getCellData(i, "wrkEndHh"));
      ds_result2.setCellData(i, "odrKndCd", ds_result.getCellData(i, "odrKndCd"));
      ds_result2.setCellData(i, "selfClsCd", ds_result.getCellData(i, "selfClsCd"));
      ds_result2.setCellData(i, "crcCd", ds_result.getCellData(i, "crcCd"));
      ds_result2.setCellData(i, "transCondCd", ds_result.getCellData(i, "transCondCd"));
      ds_result2.setCellData(i, "cntrWtCondCd", ds_result.getCellData(i, "cntrWtCondCd"));
      ds_result2.setCellData(i, "impExpDomesticClsCd", ds_result.getCellData(i, "impExpDomesticClsCd"));
      ds_result2.setCellData(i, "regBranCd", ds_result.getCellData(i, "regBranCd"));
      ds_result2.setCellData(i, "sellYn", 1);
      ds_result2.setCellData(i, "adptExchRt", 0);
      ds_result2.setCellData(i, "cntrDsgYn", 1);
      ds_result.setCellData(i, "odrRmk", ds_result.getCellData(i, "doNo") + " / " + ds_result.getCellData(i, "odrRmk"));
      ds_result2.setCellData(i, "rmk", ds_result.getCellData(i, "odrRmk"));
      ds_result2.setCellData(i, "taxnClsCd", "01");
      ds_result2.setCellData(i, "lduldZip", ds_result.getCellData(i, "lduldZip"));
      ds_result2.setCellData(i, "arvZip", ds_result.getCellData(i, "arvZip"));
      ds_result2.setCellData(i, "dptZip", ds_result.getCellData(i, "dptZip"));
      ds_result2.setCellData(i, "shpCoClntNo", ds_result.getCellData(i, "shpCoClntNo"));
      ds_result2.setCellData(i, "crcCd", ds_result.getCellData(i, "crcCd"));
      ds_result2.setCellData(i, "bkNo", ds_result.getCellData(i, "bookingNo"));
      ds_result2.setCellData(i, "destPortCd", ds_result.getCellData(i, "destPortCd"));
      ds_result2.setCellData(i, "cvsslMgntNo", "");
      ds_result2.setCellData(i, "tsCvsslMgntNo", "");
      ds_result2.setCellData(i, "mgrId", ds_result.getCellData(i, "mgrId"));
      ///////////////////////오더정보 세팅END
    }
  }
  let confirmVal = await $c.win.confirm($p, MSG_CM_CRM_001);
  //저장 여부 확인
  if (confirmVal) {
    // 저장 하시겠습니까?
    await scwin.submitExcute(sbm_save);
  }
};

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    if (e.responseJSON.resultDataSet[0].Code == -1) return;
    await scwin.submitdone(e);
  }
  ;
};

//-------------------------------------------------------------------------
// 파일 명 체크하는 로직(CSV)  
//-------------------------------------------------------------------------
scwin.f_CheckFileExt = function (ext, path) {
  ext = ext.toUpperCase();
  path = path.toUpperCase();
  elen = ext.length;
  flen = path.length;
  return ext == path.substring(flen - elen, flen);
};

//-------------------------------------------------------------------------
// 행 추가
//-------------------------------------------------------------------------
// 해당 소스 버튼 주석처리 되어있음.
// scwin.f_AddRow = function () {
//     ds_result.insertRow(); // ds_result.AddRow();
// }

//-------------------------------------------------------------------------
// 행 삭제
//-------------------------------------------------------------------------
// 해당 소스 버튼 주석처리 되어있음.
// scwin.f_DelRow = function () {
//     ds_result.deleteRow(ds_result.rowPosition);
// }

//-------------------------------------------------------------------------
// 행 취소 : 없음
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  // ds_result.Undo(ds_result.rowPosition);
  ds_result.undoRow(ds_result.rowPosition);
};

//-------------------------------------------------------------------------
// 파일 다운로드하기
//-------------------------------------------------------------------------    
scwin.f_formDown = function () {
  // let messageStr = "해당파일 [/tn/sd/odrmgnt/엑셀업로드 오더현황2.csv]이 존재하지 않습니다."
  // $c.win.alert(messageStr)
  // var fileName = "엑셀업로드 오더현황2.csv";
  // var filePath = "/ui/tn/sd/odrmgnt/엑셀업로드 오더현황2.csv";
  // $c.gus.cfDownloadFile(fileName, filePath);

  var fileName = "엑셀업로드 오더현황2.csv";
  var filePath = "tn/sd/odrmgnt/엑셀업로드 오더현황2.csv";
  $c.gus.cfDownloadFile($p, fileName, filePath);
};

//청구처 세팅
scwin.f_settingBilgClntNo = function (num) {
  var clntNo = "";
  if (num.length == 3) {
    if (num == "101") {
      clntNo = "103981";
    } else if (num == "102") {
      clntNo = "103987";
    } else if (num == "104") {
      clntNo = "103988";
    }
    return clntNo;
  } else {
    var clntCd = num.substring(0, 2);
    if (clntCd == "B1" || clntCd == "B3" || clntCd == "B6") {
      clntNo = "103987";
    } else if (clntCd == "B2") {
      clntNo = "103981";
    } else if (clntCd == "B4") {
      clntNo = "103988";
    } else if (clntCd == "B5") {
      clntNo = "103989";
    } else if (clntCd == "D8") {
      clntNo = "133781";
    }
    return clntNo;
  }
};

//공통팝업 열기
scwin.f_openCommonPopUp = async function (gubun1, gubun2, pWinCloseTF, pAllSearchTF, pNoDataCloseTF, row) {
  var pCode = "";
  var pWhere = "HU," + ds_Tmp_FillUse.getCellData(row, "odrLine");
  var pWtitleSearch = "";
  var pSelectID = "";
  var rtnList = new Array();
  switch (gubun1) {
    case 1:
      //목적항 조회
      pCode = ds_Tmp_FillUse.getCellData(row, "destPortCd"); //목적항
      pWhere = "";
      pWtitleSearch = "목적항구,항구코드/명";
      udc_code.setSelectId("retrievePortInfo_port");
      await udc_code.cfCommonPopUpAsync(async rtnList => {
        if (rtnList != null) {
          if (rtnList[0] != "N/A") {
            ds_result.setCellData(row, "destPortCd", rtnList[0]);
          } else {
            ds_result.setCellData(row, "destPortCd", "");
          }
        } else {
          ds_result.setCellData(row, "destPortCd", "");
        }
      },
      //pSelectID
      pCode,
      //pCode
      pCode,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      null,
      //pDispCnt
      null,
      //pTitle
      null,
      //pWidth
      null,
      //pHidden
      pWhere,
      //pWhere
      null,
      //pW
      null,
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부	("F")
      pWtitleSearch,
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      pNoDataCloseTF,
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      null);
      break;
    case 3:
      //Line조회 - Line코드, Line명, 선사코드, 선사코드명
      pCode = ds_Tmp_FillUse.getCellData(row, "odrLine"); //휴비스 lineCd
      pWtitleSearch = "LINE,LINE코드/명";
      udc_code.setSelectId("retrieveEdiMappingList_lineCd");
      await udc_code.cfCommonPopUpAsync(async rtnList => {
        if (rtnList != null) {
          if (rtnList[0] != "N/A") {
            ds_result.setCellData(row, "lineCd", rtnList[0]);
          } else {
            ds_result.setCellData(row, "lineCd", "");
          }
        } else {
          ds_result.setCellData(row, "lineCd", "");
        }
      },
      //pSelectID
      pCode,
      //pCode
      pCode,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      null,
      //pDispCnt
      null,
      //pTitle
      null,
      //pWidth
      null,
      //pHidden
      pWhere,
      //pWhere
      null,
      //pW
      null,
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부	("F")
      pWtitleSearch,
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      pNoDataCloseTF,
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      null);
      break;
    case 4:
      //Line조회 - Line코드, Line명, 선사코드, 선사코드명
      pCode = ds_result.getCellData(row, "lineCd"); //휴비스 lineCd
      if (pNoDataCloseTF == "T") {
        pWhere = "T";
      }
      pWtitleSearch = "LINE,LINE코드/명";
      udc_code.setSelectId("retrieveLineInfoList_clntNo");
      await udc_code.cfCommonPopUpAsync(async rtnList => {
        if (rtnList != null) {
          if (rtnList[0] != "N/A") {
            ds_result.setCellData(row, "shpCoClntNo", rtnList[4]);
          } else {
            ds_result.setCellData(row, "shpCoClntNo", "");
          }
        } else {
          ds_result.setCellData(row, "shpCoClntNo", "");
        }
      },
      //pSelectID
      pCode,
      //pCode
      pCode,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      null,
      //pDispCnt
      null,
      //pTitle
      null,
      //pWidth
      null,
      //pHidden
      pWhere,
      //pWhere
      null,
      //pW
      null,
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부	("F")
      pWtitleSearch,
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      pNoDataCloseTF,
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      null);
      break;
    case 5:
      //출발/도착 작업장 조회 - 코드/명 가져오기
      if (gubun2 == "DPT") {
        //작업지
        pCode = ds_result.getCellData(row, "dptWrkPlCd").trim();
        pWtitleSearch = "작업지,작업장코드/명";
        pSelectID = "retrieveWrkPlInfo_zip";
        pWhere = ",,,,,,," + pCode;
      } else if (gubun2 == "ARV") {
        //하차지
        pCode = ds_result.getCellData(row, "arvWrkPlCd").trim();
        pWtitleSearch = "하차지,작업장코드/명";
        pSelectID = "retrieveWrkPlInfo_zip";
        pWhere = ",,,,,,," + pCode;
      } else if (gubun2 == "LDULD") {
        //상차지
        pCode = ds_result.getCellData(row, "lduldWrkPlCd").trim();
        pWtitleSearch = "상차지,작업장코드/명";
        pSelectID = "retrieveWrkPlInfo_zip";
        pWhere = ",,,,,,," + pCode;
      }
      udc_code.setSelectId(pSelectID);
      await udc_code.cfCommonPopUpAsync(rtnList => {
        if (gubun2 == "DPT") {
          //작업지
          //cfSetReturnValue(rtnList, ed_dptWrkPlCd, ed_dptWrkPlNm);
          if (rtnList != null) {
            ds_result.setCellData(row, "dptZip", rtnList[6]);
          }
        } else if (gubun2 == "ARV") {
          //하차지
          if (rtnList != null) {
            ds_result.setCellData(row, "arvZip", rtnList[6]);
          }
        } else if (gubun2 == "LDULD") {
          //상차지
          //cfSetReturnValue(rtnList, ed_lduldWrkPlCd, ed_lduldWrkPlNm);
          if (rtnList != null) {
            ds_result.setCellData(row, "lduldZip", rtnList[6]);
          }
        } else if (gubun2 == "RAILDPT") {
          //철송출발작업장
          $c.gus.cfSetReturnValue($p, rtnList, ed_railroadDptWrkPlCd, ed_railroadDptWrkPlNm);
        } else if (gubun2 == "RAILARV") {
          //철송도착작업장
          $c.gus.cfSetReturnValue($p, rtnList, ed_railroadArvWrkPlCd, ed_railroadArvWrkPlNm);
        }
      },
      //pSelectID
      pCode,
      //pCode
      pCode,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      null,
      //pDispCnt
      null,
      //pTitle
      null,
      //pWidth
      null,
      //pHidden
      pWhere,
      //pWhere
      null,
      //pW
      null,
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부	("F")
      pWtitleSearch,
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      pNoDataCloseTF,
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      null);
      break;
  }
};
scwin.f_getCntrType = async function () {
  // SELECT 절 
  var param1 = " CD 		as COL1 " + ",''	 	as COL2 " + ",'' 		as COL3 " + ",'' 		as COL4 " + ",'' 		as COL5 " + ",'' 		as COL6 " + ",''      as COL7 " + ",''      as COL8 " + ",''      as COL9 " + ",''      as COL10";

  // 대상테이블 	
  var param2 = " TB_ZZ002 ";

  // 조건절
  var param3 = " AND GRP_CD = 'OP102'";
  " AND USE_YN = 1 ";

  // 정렬     
  var param4 = " COL1 ";

  // sbm_cntrType.action =
  //     "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=dinymicQueryTest" 
  //     + "&param1=" + param1
  //     + "&param2=" + param2
  //     + "&param3=" + param3
  //     + "&param4=" + param4;

  dma_cntrType.set("sysCd", "NcallCommonEBC");
  dma_cntrType.set("queryId", "dinymicQueryTest");
  dma_cntrType.set("param1", param1);
  dma_cntrType.set("param2", param2);
  dma_cntrType.set("param3", param3);
  dma_cntrType.set("param4", param4);
  $c.sbm.execute($p, sbm_cntrType); // ds_cntrType.Reset();
};
scwin.f_setCntrType = async function (num) {
  // 컨테이너 사이즈 타입 세팅
  var v_type = ds_result.getCellData(num, "cntr40Type");
  for (i = 0; i < ds_cntrType.getTotalRow(); i++) {
    if (ds_cntrType.getCellData(i, "COL1") == v_type) {
      ds_result.setCellData(num, "cntr40Type", v_type);
      return;
    } else {
      ds_result.setCellData(num, "cntr40Type", "");
    }
  }
};
scwin.f_setDate = async function (num) {
  var v_date = ds_result.getCellData(num, "etdDt");
  var v_year = parseInt(scwin.strCurrDate.substring(0, 4)) + 1;
  if (!$c.gus.cfIsAfterDate($p, scwin.strCurrDate, v_date)) {
    ds_result.setCellData(num, "etdDt", v_year + v_date.substring(4));
  }
};
scwin.f_setBooking = async function (num) {
  var v_line = ds_result.getCellData(num, "lineCd");
  switch (v_line) {
    case "APL":
      ds_result.setCellData(num, "bookingNo", ds_result.getCellData(num, "bookingNo").substring(4));
      break;
    case "EVER":
      ds_result.setCellData(num, "bookingNo", "0" + ds_result.getCellData(num, "bookingNo"));
      break;
    default:
      break;
  }
};
scwin.f_setPortcnt = async function (num) {
  // 터미널 모선항차 세팅
  ds_result.setCellData(num, "arvTmlVsslPortcnt", ds_result.getCellData(num, "arvTmlVsslPortcnt").replace(/ /gi, ''));
  ds_result.setCellData(num, "arvTmlVsslPortcnt", ds_result.getCellData(num, "arvTmlVsslPortcnt").replace(/\-/g, ''));
  ds_result.setCellData(num, "bookingNo", ds_result.getCellData(num, "bookingNo").replace(/\n/gi, ''));
};

// for=tr_save event=OnSuccess()
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  await $c.win.alert($p, "정상적으로 반영되었습니다.");
  scwin.f_Retrieve();
};

// for=ds_result event=OnLoadCompleted(rowCnt)
scwin.sbm_retrieve_submitdone = function (e) {
  // cfShowTotalRows(totalRows, rowCnt);
  let rowCnt = ds_result.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, "조회결과가 존재하지 않습니다.");
  }
  ds_result.sort("odrNo", 1); // 오더번호 기준 내림차순 정렬
  gr_result.setColumnStyle("odrNo", "color", "blue");
  gr_result.setColumnStyle("odrNo", "text-decoration", "underline");
};
scwin.gr_result_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  var strOrderDetailUrl = "";
  var v_odrNo = ds_result.getCellData(rowIndex, "odrNo");

  // condition += "odrNo=" + v_odrNo + "&linkPage=odrList";
  // let programId = "tn_201_02_04b";
  let programId = "tn_201_02_04b.jsp";
  let paramObj = {
    odrNo: ds_result.getCellData(rowIndex, "odrNo"),
    // to-do 아래 두개 값 어떤식으로 들어오는지 확인해야됨...
    linkPage: "odrList",
    PARAM_MAINTAIN_YN: "N"
  };
  switch (columnId) {
    case "odrNo":
      strOrderDetailUrl = scwin.strCntrOdrRegUrlC4;
      // cfTabMenuUpdate(strOrderDetailUrl + condition, "수출일반오더");
      // let strUrl = "/tn/op/transwrkindict/cntr/tn_304_01_01b.xml";
      // let programId = "tn_304_01_01b";
      $c.win.openMenu($p, "수출일반오더", strOrderDetailUrl, programId, paramObj);
      break;
    default:
      break;
  }
};
scwin.f_defaultValue = function (e) {
  var curDate = scwin.strCurrDate;
  ed_uploadDtFrom.setValue(curDate.substring(0, 8));
  ed_uploadDtTo.setValue(curDate.substring(0, 8));
};
scwin.ds_result_oninsertrow = function (info) {
  totalRows.setValue(this.getRowCount());
};
scwin.ds_result_onremoverow = function (info) {
  totalRows.setValue(this.getRowCount());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'searchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lobranCd',search:'contain',style:'width:200px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_search.lobranCd',validExp:'소속지사:Yes',mandatory:'false',visibleRowNum:'20',displayMode:'value delim label'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'업로드일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_calendar',refDataMap:'ds_search',refEdDt:'uploadDtTo',refStDt:'uploadDtFrom',style:'',edFromId:'ed_uploadDtFrom',edToId:'ed_uploadDtTo',mandatoryFrom:'true',mandatoryTo:'true',validExp:'Receiving Date:yes:date=YYYYMMDD&length=8',objTypeTo:'data',objTypeFrom:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_defaultValue'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:textbox',A:{class:'txt-dot txt-red',id:'',label:'엑셀 업로드후 LINE코드를 확인해주세요.',ref:'',style:'',userData2:''}},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'Y',templateYn:'N',btnUser:'N',gridDownFn:'scwin.f_excel_down',gridDownUserAuth:'X',gridID:'gr_result',gridUpFn:'scwin.f_Upload',id:'udc_grd'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_result',id:'gr_result',style:'',visibleRowNum:'15',visibleRowNumFix:'true',columnMove:'false',readOnly:'true','ev:oncelldblclick':'scwin.gr_result_oncelldblclick',sortable:'true',cellStatusVisible:'true',gridName:'오더배차',rowStatusVisible:'true','ev:onfilereadend':'scwin.excelUploadBefore'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'업로드<br/>일자',width:'80',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'관리<br/>번호',width:'70',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'오더번호',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'DO',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'INV<br/>NO',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'중량',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'20',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'20TYPE',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'40',width:'140',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'출항일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'포워더명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column29',value:'오더지<br/>라인',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'BOOKING',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',value:'PORT',displayMode:'label',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',value:'VSSL',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column25',value:'비고',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'배차담당ID',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lineCd_header',value:'라인코드',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lduldWrkPlCd_header',value:'상차지',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlCd_header',value:'작업지',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlCd_header',value:'도착지',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lduldHh_header',value:'상차시간',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStHh_header',value:'작업시간',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkEndHh_header',value:'도착시간',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrKndCd_header',value:'오더종류',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lduldZip_header',value:'상차지우편번호',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptZip_header',value:'작업지우편번호',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvZip_header',value:'도착지우편번호',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'selfClsCd_header',value:'자가구분',displayMode:'label',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column46',value:'QTY',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',value:'TYPE',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'uploadDt',inputType:'text',width:'80',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',width:'70',sortable:'false',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'doNo',inputType:'text',width:'100',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkNo',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,###.#0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntr20Qty',inputType:'text',width:'70',dataType:'n',selectedData:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntr20Type',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntr40Qty',inputType:'text',width:'70',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntr40Type',inputType:'text',width:'70',validExp:'cntr40Type:40TYPE:yes'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'etdDt',displayMode:'label',dataType:'date',validExp:'etdDt:출항일자:yes:date=YYYYMMDD&length=8',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fwdNm',displayMode:'label',textAlign:'center',style:';text-align:center;'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'odrLine',displayMode:'label',validExp:'odrLine:오더지라인:yes'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bookingNo',displayMode:'label',validExp:'bookingNo:BOOKING:yes'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'portNm',displayMode:'label',sortable:'false',textAlign:'left',style:';text-align:left;'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'vsslNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'odrRmk',displayMode:'label',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mgrId',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lineCd',displayMode:'label',textAlign:'left',hidden:'true',validExp:'lineCd:라인코드:yes'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lduldWrkPlCd',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlCd',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlCd',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lduldHh',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStHh',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkEndHh',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrKndCd',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lduldZip',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptZip',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvZip',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'selfClsCd',displayMode:'label',textAlign:'left',hidden:'true'}}]}]}]},{T:1,N:'w2:gridView',A:{gridName:'오더배차',readOnly:'true',sortable:'true',rowStatusVisible:'true',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_result',columnMove:'false',style:'display: none;',autoFit:'none','ev:oncelldblclick':'scwin.gr_result_oncelldblclick',id:'gr_resultCsv',visibleRowNum:'15',class:'wq_gvw',cellStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column1',value:'오류내용',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column17',sortable:'true',value:'DO',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'120',inputType:'text',id:'column15',value:'INV<br/>NO',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column13',value:'제품<br/>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column11',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column9',value:'20',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'2',width:'140',inputType:'text',id:'column7',sortable:'false',value:'40',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column33',value:'출항<br/>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column31',value:'포워더명',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column29',value:'오더지<br/>라인',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column27',value:'LINE',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column21',sortable:'true',value:'비고',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column23',value:'BOOKING',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'140',inputType:'text',id:'column25',value:'계약<br/>거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column35',value:'계약번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column87',value:'청구거래처',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column90',value:'작업경로<br/>순번',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column93',value:'매출<br/>부서',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column96',value:'청구<br/>부서',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column99',value:'목정항',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column105',value:'OPR',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column108',value:'TML<br/>모선항차',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column111',value:'상차지',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column114',value:'작업지',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column117',value:'도착지',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column120',value:'작업지<br/>상세',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column123',value:'상차일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column126',value:'상차시간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column129',value:'작업일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column132',value:'작업시간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column135',value:'도착일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column138',value:'도착시간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column141',value:'오더종류',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column144',value:'arvZip',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column147',value:'dptZip',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column150',value:'IduldZip',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column153',value:'shpCoClntNowidth',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column156',value:'자가<br/>구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column159',value:'배차담당ID',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column46',value:'QTY',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',value:'TYPE',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{dataType:'date',width:'80',displayFormat:'yyyy/MM/dd',inputType:'text',id:'errCol',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'doNo',sortable:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lotNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',inputType:'text',id:'cntr20Qty',displayMode:'label',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntr40Qty',displayMode:'label',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',validExp:'cntr40Type:40TYPE:yes',inputType:'text',id:'cntr40Type',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'date',width:'100',displayFormat:'yyyy/MM/dd',validExp:'etdDt:출항일자:yes:date=YYYYMMDD&length=8',inputType:'text',id:'etdDt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'text',style:';text-align:center;',id:'fwdNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',validExp:'odrLine:오더지라인:yes',inputType:'text',id:'odrLine',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',validExp:'bookingNo:BOOKING:yes',inputType:'text',id:'lineCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'80',inputType:'text',style:';text-align:left;',id:'odrRmk',sortable:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'80',inputType:'text',id:'bookingNo',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'140',inputType:'text',readOnly:'false',id:'ctrtClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'ctrtNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bilgClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtWrkPathSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellLodeptCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bilgLodeptCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'destPortCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arvOprCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arvTmlVsslPortcnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lduldWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dptWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arvWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dptDtl',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lduldDt',displayMode:'label',dataType:'date'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lduldHh',displayMode:'label',dataType:'time'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkStDt',displayMode:'label',dataType:'date'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkStHh',displayMode:'label',dataType:'time'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkEndDt',displayMode:'label',dataType:'date'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkEndHh',displayMode:'label',dataType:'time'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'odrKndCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arvZip',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dptZip',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lduldZip',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'shpCoClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'selfClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mgrId',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'330Upload',style:'',class:'btn','ev:onclick':'scwin.f_formDown'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀양식다운'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_trigger1',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'',style:'display: none;',id:'udc_code'}}]}]}]},{T:1,N:'xf:group',A:{style:'display: none',id:'hideGroup'},E:[{T:1,N:'w2:gridView',A:{gridName:'오더배차',readOnly:'true',sortable:'true',rowStatusVisible:'true',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_result_FillUse',columnMove:'false',style:'',autoFit:'none',id:'gr_result_filluse',visibleRowNum:'15',class:'wq_gvw',cellStatusVisible:'true','ev:onfilereadend':'scwin.excelUploadBefore'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption4',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column1',value:'DO',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column17',sortable:'true',value:'INV NO',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'120',inputType:'text',id:'column15',value:'Lot',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column13',value:'WT',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column11',value:'20',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column9',value:'40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column7',sortable:'false',value:'TYPE',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',id:'column142',value:'ETD',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column33',value:'FWD',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column31',value:'LINE',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column29',value:'VSL NAME',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column27',value:'Desti.',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column21',sortable:'true',value:'비고',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'column23',value:'BOOKING NO',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'140',inputType:'text',id:'column25',value:'계약처',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column35',value:'계약번호',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column87',value:'작업경로',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column90',value:'매출부서',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column93',value:'청구부서',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column96',value:'목적항',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column99',value:'OPERATER',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column105',value:'항차',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column108',value:'상차지',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column111',value:'작업지',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column114',value:'도착지',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column117',value:'작업지상세',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column120',value:'상차일시',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column123',value:'작업일시',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column126',value:'도착일시',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column129',value:'오더종류',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column132',value:'자가구분',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column135',value:'관리자ID',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'}}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'doNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'lotNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'2',inputType:'text',id:'cntr20Qty',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntr40Qty',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntr40Type',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etdDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fwdNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrLine',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'vsslNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'portNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'odrRmk',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'bookingNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'ctrtClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtWrkPathSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellLodeptCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bilgLodeptCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'destPortCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arvOprCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arvTmlVsslPortcnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lduldWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dptWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arvWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dptDtl',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lduldHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkStHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkEndHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'odrKndCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'selfClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mgrId',displayMode:'label'}}]}]}]}]}]}]}]}]})