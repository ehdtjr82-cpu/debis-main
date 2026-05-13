/*amd /ui/ps/eq/fixwrkmgnt/fixwrkmgnt/eq_330_01_04b.xml 252634 a4663748afc612c7044c6e944dd3a786965e10fbc5dc0a6e31cd332c561e5a25 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fix_work_re'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkNo',name:'정비작업번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_fix_work',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'homeClsCd',name:'소속구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlNm',name:'정비작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkNo',name:'작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixKndCd',name:'정비종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'차량단축코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'makerNm',name:'제조사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClssNm',name:'장비분류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'장비종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'직위구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranNm',name:'배정점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfOutordClsCd',name:'자가외주구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixCauseCd',name:'정비원인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixCatCd',name:'정비계통',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outordFixClntNo',name:'외주정비거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outordFixClntNm',name:'외주정비거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkStsCd',name:'정비상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accdRecptNo',name:'사고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'travelDtc',name:'주행거리',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totOprtHhCnt',name:'총가동시간',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkIntendDt',name:'작업예정일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'endIntendDt',name:'종료예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업완료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업완료시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'needDt',name:'소요일',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkPlanDt',name:'작업계획일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inHh',name:'입고시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outDt',name:'출고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outHh',name:'출고시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvWaitYn',name:'기사대기여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioNesYn',name:'입출고필요여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'검사만료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'circulPartCd',name:'수리순환품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'circulPartNm',name:'수리순환품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'passYn',name:'검사결과',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspDt',name:'검사시행일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspKndCd',name:'검사종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nextExpireDt',name:'다음검사예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileNm',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSiz',name:'파일크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSavePath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspAgencyClntNo',name:'검사대행업체코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspAgencyClntNm',name:'검사대행업체명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspCost',name:'정기검사비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'agencyCost',name:'정기점검료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'applyFixWorkStandardYn',name:'작업표준적용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdProcYn',name:'전도금처리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspCostVat',name:'검사비부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rglintChkExpireDt',name:'정기점검만료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rglintInspExpireDt',name:'정기검사만료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mntnInspExpireDt',name:'종합검사만료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptWages',name:'적용공임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totTimeYn',name:'총가동시간필수여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClssCd',name:'장비분류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'배정점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfOutordClsNm',name:'자가외주구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNo',name:'판매거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_work_standard',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_fix_work_standard_onbeforerowpositionchange','ev:onremoverow':'scwin.ds_fix_work_standard_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'소속구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkNo',name:'작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkStndNo',name:'작업표준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStndNm',name:'작업표준명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_work_unit',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_fix_work_unit_onbeforerowpositionchange','ev:onremoverow':'scwin.ds_fix_work_unit_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkStndNo',name:'작업표준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkUnitNo',name:'작업단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkUnitNm',name:'작업단위명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'소속구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkNo',name:'작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stndWrkHhCnt',name:'표준정비시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkHhCnt',name:'실제정비시간',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bilgWages',name:'청구공임',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dayNgtClsCd',name:'주야간구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDayClsCd',name:'휴일구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'nrm',name:'규격',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'upr',name:'단가',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'총금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_driver',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_fix_driver_oncelldatachange','ev:onbeforerowpositionchange':'scwin.ds_fix_driver_onbeforerowpositionchange','ev:onremoverow':'scwin.ds_fix_driver_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkNo',name:'작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkUnitNo',name:'작업단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkHhCnt',name:'정비시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixEmpNm',name:'정비사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixEmpNo',name:'정비사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'소속구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_repair_circula_parts',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_repair_circula_parts_onbeforerowpositionchange','ev:onremoverow':'scwin.ds_repair_circula_parts_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkNo',name:'작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attDetClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'circulPartCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'circulPartNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockReflectYn',name:'재고반영여부',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ym',name:'작업년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPfmYn',name:'정비실행여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'소속구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_work_parts',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_fix_work_parts_oncelldatachange','ev:onbeforerowpositionchange':'scwin.ds_fix_work_parts_onbeforerowpositionchange','ev:onremoverow':'scwin.ds_fix_work_parts_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkNo',name:'작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkUnitNo',name:'작업단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'소속구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partUnitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partUnitNm',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partQty',name:'사용수량',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'inClsCd',name:'입고구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'capExpdYn',name:'자본적지출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'현재고',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'useExpectQty',name:'사용예상수량',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'catCd',name:'부품계통코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catNm',name:'부품계통',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partMakerCd',name:'부품제조사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partMakerNm',name:'부품제조사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outUpr',name:'출고예상단가',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'VAT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'금액',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'realOutDt',name:'실출고일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partOutNo',name:'부품출고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnCls',name:'과세구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_login_query_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixEmpNo',name:'로그인ID',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_login'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixEmpClsCd',name:'정비사구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_fix_work_no',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkNo',name:'정비작업번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_re_pl'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'사업부문코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_work_pl',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'repFixWrkPlCd',name:'대표작업장코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_delivery'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_work_unit_apply'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkStndNo',name:'작업표준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkUnitNo',name:'작업단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkUnitNm',name:'작업단위명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'소속구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkNo',name:'작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stndWrkHhCnt',name:'표준정비시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkHhCnt',name:'실제정비시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgWages',name:'청구공임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dayNgtClsCd',name:'주야간구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDayClsCd',name:'휴일구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'nrm',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'upr',name:'단가',dataType:'text',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_work_parts_apply'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkNo',name:'작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkUnitNo',name:'작업단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'소속구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partUnitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partUnitNm',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partQty',name:'사용수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inClsCd',name:'입고구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'capExpdYn',name:'자본적지출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'현재고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useExpectQty',name:'사용예상수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catCd',name:'부품계통코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catNm',name:'부품계통',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partMakerCd',name:'부품제조사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partMakerNm',name:'부품제조사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outUpr',name:'출고예상단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'VAT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realOutDt',name:'실출고일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partOutNo',name:'부품출고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnCls',name:'과세구분',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_fix_work_re","key":"IN_DS1"},{"id":"ds_fix_work","key":"OUT_DS1"},{"id":"ds_fix_work_standard","key":"OUT_DS2"},{"id":"ds_fix_work_unit","key":"OUT_DS3"},{"id":"ds_fix_driver","key":"OUT_DS4"},{"id":"ds_repair_circula_parts","key":"OUT_DS5"},{"id":"ds_fix_work_parts","key":"OUT_DS6"}]',target:'data:json,[{"id":"ds_fix_work","key":"OUT_DS1"},{"id":"ds_fix_work_standard","key":"OUT_DS2"},{"id":"ds_fix_work_unit","key":"OUT_DS3"},{"id":"ds_fix_driver","key":"OUT_DS4"},{"id":"ds_repair_circula_parts","key":"OUT_DS5"},{"id":"ds_fix_work_parts","key":"OUT_DS6"}]',action:'/ps.eq.fixwrkmgnt.fixwrkmgnt.RetrieveFixWorkCMD.do'}},{T:1,N:'xf:submission',A:{id:'sbm_applyFixWorkStandard',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_fix_work_standard","key":"IN_DS1"},{"id":"ds_fix_work_unit_apply","key":"OUT_DS1"},{"id":"ds_fix_work_parts_apply","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_fix_work_unit_apply","key":"OUT_DS1"},{"id":"ds_fix_work_parts_apply","key":"OUT_DS2"}]',action:'/ps.eq.fixwrkmgnt.fixwrkmgnt.ApplyFixWorkStandardCMD.do'}},{T:1,N:'xf:submission',A:{id:'sbm_applyFixWorkUnit',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_fix_work_parts_apply","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_fix_work_parts_apply","key":"OUT_DS1"}]',action:'/ps.eq.fixwrkmgnt.fixwrkmgnt.ApplyFixWorkUnitCMD.do'}},{T:1,N:'xf:submission',A:{id:'sbm_save',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_fix_work","key":"IN_DS1"},{"id":"ds_fix_work_standard","key":"IN_DS2"},{"id":"ds_fix_work_unit","key":"IN_DS3"},{"id":"ds_fix_driver","key":"IN_DS4"},{"id":"ds_repair_circula_parts","key":"IN_DS5"},{"id":"ds_fix_work_parts","key":"IN_DS6"},{"id":"ds_fix_work_no","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_fix_work_no","key":"OUT_DS1"}]',action:''}},{T:1,N:'xf:submission',A:{id:'sbm_login',action:'/ps.eq.opinfomgnt.opinfomgnt.RetrieveFixEmployeeListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_login_query_condition","key":"IN_DS1"},{"id":"dma_login","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_login","key":"OUT_DS1"}]'}},{T:1,N:'xf:submission',A:{id:'sbm_repFixWrkPl',action:'/ps.eq.opinfomgnt.opinfomgnt.RetrieveFixWorkPlaceListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_re_pl","key":"IN_DS1"},{"id":"ds_work_pl","key":"OUT_DS1"},{"id":"ds_delivery","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_work_pl","key":"OUT_DS1"},{"id":"ds_delivery","key":"OUT_DS2"}]'}},{T:1,N:'xf:submission',A:{id:'sbm_fixEquipment',action:'',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin._SAVE_TR_REGIST_URL = "/ps.eq.fixwrkmgnt.fixwrkmgnt.RegistFixWorkConsequenceCMD.do"; // 작업완료 TR
scwin._SAVE_TR_TEMPORARY_URL = "/ps.eq.fixwrkmgnt.fixwrkmgnt.SaveFixWorkConsequenceTemporaryCMD.do"; // 신규 등록 TR / 임시저장
scwin._SAVE_TR_UPDATE_URL = "/ps.eq.fixwrkmgnt.fixwrkmgnt.UpdateFixWorkConsequenceCMD.do"; // 수정 TR / 임시저장
scwin._SAVE_TR_DELETE_URL = "/ps.eq.fixwrkmgnt.fixwrkmgnt.DeleteFixWorkConsequenceCMD.do"; // 삭제 TR

scwin.cvNNew = false;
scwin.cvUpdate = false;
scwin.cvDelete = false;
scwin.onRollBack = false;
scwin.userId = "";
scwin.cvFixWrkStsCd = "";
scwin.cvTabIndex = 0;
scwin.repFixWrkPlCd = "";
scwin._vehclShortCd = "";
scwin._txt_fileSiz = "";
scwin._fileSavePath = "";
scwin.arg_fixWrkNo = "";
scwin.arg_fixWrkPlCd = "";
scwin.arg_homeClsCd = "";
scwin.arg_eqCd = "";
scwin.arg_vehclNo = "";
scwin.arg_fixKndCd = "";
scwin.arg_selfOutordClsCd = "";
scwin.returnValue = null; //창 닫을때 반환할 값.

scwin.onpageload = function () {
  scwin.userId = $c.data.getMemInfo($p, "userId");
};
scwin.onUdcCompleted = async function () {
  let param = $c.data.getParameter($p);
  scwin.arg_fixWrkNo = param.fixWrkNo ?? "";
  scwin.arg_fixWrkPlCd = param.fixWrkPlCd ?? "";
  scwin.arg_homeClsCd = param.homeClsCd ?? "";
  scwin.arg_eqCd = param.eqCd ?? "";
  scwin.arg_vehclNo = param.vehclNo ?? "";
  scwin.arg_fixKndCd = param.fixKndCd ?? "";
  scwin.arg_selfOutordClsCd = param.selfOutordClsCd ?? "";

  //공통코드 조회
  try {
    const results = await Promise.all([scwin.loadCommonCodePromise(), scwin.loadGauceUtilPromise()]);
  } catch (error) {
    //console.error("공통코드 조회 중 오류 발생", error)
  }
  if (scwin.arg_fixWrkNo != "") {
    grp_ozreport.show();
  } else {
    grp_ozreport.hide();
  }
  img_outordFixClntNo.setDisabled(true);
  img_circulPartCd.setDisabled(true);
  scwin.f_OnLoad();
};
scwin.loadCommonCodePromise = function () {
  const codeOptions = [{
    grpCd: "EQ010",
    compID: "lux_fixKndCd"
  }, {
    grpCd: "EQ012",
    compID: "lux_selfOutordClsCd"
  }, {
    grpCd: "EQ011",
    compID: "lux_fixCauseCd"
  }, {
    grpCd: "EQ005",
    compID: "lux_fixCatCd"
  }, {
    grpCd: "EQ905",
    compID: "lux_fixWrkStsCd"
  }, {
    grpCd: "EQ020",
    compID: "lux_passYn"
  }, {
    grpCd: "EQ006",
    compID: "lux_inspKndCd"
  }, {
    grpCd: "EQ047",
    compID: "gr_fix_work_unit:dayNgtClsCd"
  }, {
    grpCd: "ZZ212",
    compID: "gr_fix_work_unit:offDayClsCd"
  }, {
    grpCd: "EQ017",
    compID: "gr_fix_work_parts:inClsCd, gr_fix_work_parts2:inClsCd",
    useLocalCache: false
  }
  //{ grpCd: "EQ045", compID: "gr_repair_circula_parts:attDetClsCd, gr_repair_circula_parts2:attDetClsCd", useLocalCache: false },
  ];

  // Promise 반환
  return new Promise(resolve => {
    $c.data.setCommonCode($p, codeOptions, function () {
      resolve(true);
    });
  });
};
scwin.loadGauceUtilPromise = function () {
  const comboOptions = [{
    method: "getGridCombo",
    param1: "EQ045",
    param2: 1,
    param3: "EQ",
    param4: false,
    param5: 1,
    compID: "gr_repair_circula_parts:attDetClsCd, gr_repair_circula_parts2:attDetClsCd"
  }];

  // Promise 반환
  return new Promise(resolve => {
    $c.data.setGauceUtil($p, comboOptions, function () {
      resolve(true);
    });
  });
};
scwin.f_OnLoad = async function () {
  dma_login_query_condition.set("fixEmpNo", scwin.userId);
  sbm_login.userData1 = "noError";
  let rtn = await $c.sbm.execute($p, sbm_login);
  let jsonRtn = rtn.responseJSON;
  let isMechanic = false;
  if (jsonRtn.resultDataSet[0].Code == "0") {
    let outDs = jsonRtn.OUT_DS1;
    isMechanic = (outDs.length > 0 ? outDs[0].fixEmpClsCd : "") == "2";
  } else {
    await $c.win.alert($p, jsonRtn.resultDataSet[1].Msg);
  }

  // 기본 disabled objects
  $c.gus.cfDisableObjects($p, [txt_fixWrkPlNm, ica_rglintChkExpireDt, txt_eqClssNm, txt_eqKndNm, txt_eqModelNm, ica_rglintInspExpireDt, txt_acctDeptNm, txt_assgnLobranNm, txt_damageWrongTyp, ica_wrkPlanDt, em_adptWages, ica_mntnInspExpireDt, em_partAmt, em_wages, em_totAmt, em_vatAmt]);

  //$c.gus.cfSetIMEModeActiveObjects([txt_vehclNo]);

  if (scwin.arg_fixWrkNo != "") {
    //작업지시목록 조회화면에서 조회했을 경우
    em_fixWrkPlCd.setValue(scwin.arg_fixWrkPlCd); // 정비작업장코드
    em_fixWrkNo.setValue(scwin.arg_fixWrkNo); // 정비작업번호

    await scwin.f_Retrieve();

    //- 그리드 편집 관련 / 자가외주구분에 따라 편집 가능여부 설정
    scwin.f_ctrlGrdEnable(false);
    scwin.f_ctrlApplyFixWorkStandardBtn(true); // 작업표준적용 버튼 (Disable)
    scwin.f_ctrlGrdBtn(true); // 그리드 버튼 (Disable)

    scwin.f_ioNesYn(); //입출고필요여부에 대해 필수 입력항목 설정

    // ----
    // 정비 정산 정보
    // ----
    scwin.f_setAdjustment();
  } else {
    // 작업지시목록 조회화면에서 신규버튼으로 실행했을 경우
    scwin.cvNNew = true; // 신규
    await scwin.retrieve();
    ds_fix_work.setCellData(0, "homeClsCd", scwin.arg_homeClsCd ?? "");
    ds_fix_work.setCellData(0, "travelDtc", "0");
    ds_fix_work.setCellData(0, "applyFixWorkStandardYn", "0");
    em_fixWrkPlCd.setValue(scwin.arg_fixWrkPlCd); // 정비작업장코드
    await scwin.f_openCommonPopUp(1, em_fixWrkPlCd.getValue(), '', 'T', 'T'); // 정비작업장코드에 해당하는 명칭

    em_eqCd.setValue(scwin.arg_eqCd ?? ""); // 장비등록코드
    txt_vehclNo.setValue(scwin.arg_vehclNo ?? "");
    $c.gus.cfEnableObjects($p, [btn_Edit, btn_SaveTemporary, btn_Save, btn_Del, btn_Close]);
    scwin.f_ctrlApplyFixWorkStandardBtn(false); // 작업표준적용 버튼 (Enable)

    scwin.f_ctrlGrdBtn(false); // 그리드 버튼 (Enable)

    // 신규등록에서 필요없는 버튼을 감춘다.
    btn_Edit.hide();
    btn_Del.hide();
    if (scwin.arg_fixKndCd != "") {
      lux_fixKndCd.setValue(scwin.arg_fixKndCd);
    } else {
      lux_fixKndCd.setSelectedIndex(0);
    }
    if (scwin.arg_selfOutordClsCd != "") {
      lux_selfOutordClsCd.setValue(scwin.arg_selfOutordClsCd);
    } else {
      lux_selfOutordClsCd.setSelectedIndex(0);
    }
    lux_fixCauseCd.setSelectedIndex(0); // 정비원인
    lux_fixCatCd.setSelectedIndex(0); // 정비계통

    // 정비종류가 "사고"   일때만 사고번호 입력 가능
    // 정비종류가 "순환품" 일때만 수리순환품 입력 가능
    $c.gus.cfDisableObjects($p, [txt_accdRecptNo, em_circulPartCd, txt_circulPartNm, img_accdRecptNo]);
    lux_fixWrkStsCd.setValue("R"); // 정비상태(R:결과입력중)
    ds_fix_work.setCellData(0, "fixWrkStsCd", lux_fixWrkStsCd.getValue());
    chk_ioNesYn.setValue("1"); // 입출고 필요 여부
    scwin.f_ioNesYn(); // 입출고필요여부에 대해 필수 입력항목 설정

    //README : 20260423 비활성화 되는 항목이라 포커스 필요없다.
    //em_fixWrkPlCd.focus();

    // 장비기본정보세팅
    if (em_eqCd.getValue() != "" && txt_vehclNo.getValue() != "") {
      scwin.f_openCommonPopUp(2, em_eqCd.getValue(), txt_vehclNo.getValue(), 'T', 'T');
    }
  }
  await scwin.f_selfOutordCls(); // 자가외주구분에 대해 필수 입력항목 설정
  scwin.setGridViewFocusedCell();
  ds_fix_work.setCellData(0, "applyFixWorkStandardYn", 0); // 작업표준적용여부

  // 정비사(EQ004, "2" )는 작업완료를 할수 없다.
  // 고속이면서 작업장이 201이 아닌 사원은 이 룰을 적용받지 않는다.
  if (!(scwin.arg_homeClsCd == "TR" && em_fixWrkPlCd.getValue() != "201")) {
    //if (dma_login.get("fixEmpClsCd") == "2") {
    if (isMechanic) {
      btn_Save.hide();
    }
  }
  scwin.repFixWrkPlCd = await scwin.f_retrieveRepFixWrkPl();
};
scwin.f_Retrieve = async function () {
  await scwin.retrieve();

  //- 조회시점의 정비작업상태코드 저장
  scwin.cvFixWrkStsCd = ds_fix_work.getCellData(0, "fixWrkStsCd");
  lux_fixWrkStsCd.setValue(ds_fix_work.getCellData(0, "fixWrkStsCd"));
  ds_fix_work.setCellData(0, "applyFixWorkStandardYn", "0"); // 작업표준적용여부

  $c.gus.cfEnableObjects($p, [btn_Edit, btn_SaveTemporary, btn_Save, btn_Del, btn_Close]);
  $c.gus.cfDisableObjects($p, [btn_Save, btn_SaveTemporary]);
  $c.gus.cfDisableObjects($p, [img_eqCd, img_outordFixClntNo, img_accdRecptNo, img_circulPartCd]);
  $c.gus.cfDisableKeyData($p);
  let wrkStDtVal = ica_wrkStDt.getValue();
  let wrkEndDtVal = ica_wrkEndDt.getValue();
  if (wrkStDtVal != "" && wrkEndDtVal != "") {
    em_needDt.setValue($c.date.diffDate($p, wrkStDtVal, wrkEndDtVal));
  }
};
scwin.retrieve = async function () {
  sbm_retrieve.userData1 = "noError";
  let result = await $c.sbm.execute($p, sbm_retrieve);
  let jsonRtn = result.responseJSON;
  if (jsonRtn.resultDataSet[0].Code == "0") {
    ds_fix_work.setJSON(jsonRtn.OUT_DS1);
    if (ds_fix_work.getRowCount() == 0) {
      ds_fix_work.setRowPosition(ds_fix_work.insertRow());
    }
    ds_fix_work_standard.setJSON(jsonRtn.OUT_DS2);
    ds_fix_work_unit.setJSON(jsonRtn.OUT_DS3);
    ds_fix_driver.setJSON(jsonRtn.OUT_DS4);
    ds_repair_circula_parts.setJSON(jsonRtn.OUT_DS5);
    ds_fix_work_parts.setJSON(jsonRtn.OUT_DS6);
    scwin.updateFixWorkDataBinding();
    scwin.updateRowCountDisplay();
    scwin.f_setAdjustment();
    scwin.setGridViewFocusedCell();
    return true;
  } else {
    await $c.win.alert($p, jsonRtn.resultDataSet[1].Msg);
    return false;
  }
};
scwin.setGridViewFocusedCell = function () {
  let isSelf = tab_main.getSelectedTabIndex() == 0;
  if (ds_fix_work_parts.getRowCount() > 0) {
    ds_fix_work_parts.setCellData(0, "realOutDt", ica_wrkEndDt.getValue());
    if (isSelf) gr_fix_work_parts.setFocusedCell(0, gr_fix_work_parts.getColumnIndex("fixWrkUnitNo"));else gr_fix_work_parts2.setFocusedCell(0, gr_fix_work_parts2.getColumnIndex("fixWrkUnitNo"));
  }
  if (ds_repair_circula_parts.getRowCount() > 0) {
    ds_repair_circula_parts.setRowPosition(0);
    if (isSelf) gr_repair_circula_parts.setFocusedCell(0, gr_repair_circula_parts.getColumnIndex("attDetClsCd"));else gr_repair_circula_parts2.setFocusedCell(0, gr_repair_circula_parts2.getColumnIndex("attDetClsCd"));
  }
  if (ds_fix_driver.getRowCount() > 0) {
    ds_fix_driver.setRowPosition(0);
    gr_fix_driver.setFocusedCell(0, gr_fix_driver.getColumnIndex("fixWrkUnitNo"));
  }
  if (ds_fix_work_unit.getRowCount() > 0) {
    ds_fix_work_unit.setRowPosition(0);
    if (isSelf) gr_fix_work_unit.setFocusedCell(0, gr_fix_work_unit.getColumnIndex("fixWrkUnitNo"));else gr_fix_work_unit2.setFocusedCell(0, gr_fix_work_unit2.getColumnIndex("fixWrkUnitNo"));
  }
  if (ds_fix_work_standard.getRowCount() > 0) {
    ds_fix_work_standard.setRowPosition(0);
    if (isSelf) gr_fix_work_standard.setFocusedCell(0, gr_fix_work_standard.getColumnIndex("fixWrkStndNo"));else gr_fix_work_standard2.setFocusedCell(0, gr_fix_work_standard2.getColumnIndex("fixWrkStndNo"));
  }
  setTimeout(function () {
    grp_total.render.scrollTop = 0;
  }, 100);
};
scwin.f_Update = async function () {
  let wrkEndDtVal = ica_wrkEndDt.getValue();
  if (wrkEndDtVal != "") {
    let jobCloseYn = await udc_closeYn.cfJobCloseYN("CUR", wrkEndDtVal.substring(0, 6), "00", "EQ01", scwin.repFixWrkPlCd, null, "N");
    if (jobCloseYn == 2) {
      await $c.win.alert($p, wrkEndDtVal.substring(0, 4) + "년 " + wrkEndDtVal.substring(4, 6) + "월의 마감이 이미 완료되었습니다.");
      return;
    }
  }
  scwin.cvUpdate = true; // 수정

  //-
  //- disable, enable 처리
  //-
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);
  $c.gus.cfEnableObjects($p, [btn_Edit, btn_SaveTemporary, btn_Save, btn_Del, btn_Close]);
  $c.gus.cfDisableObjects($p, [btn_Edit, em_partAmt, em_wages, em_totAmt, em_vatAmt]);

  //$c.gus.cfEnableObjects([ img_inDt ,img_outDt ,img_wrkIntendDt ,img_endIntendDt ,img_wrkStDt ,img_wrkEndDt ]);

  await scwin.f_selfOutordCls();
  ds_fix_work.setCellData(0, "applyFixWorkStandardYn", "0"); // 작업표준적용여부

  // 자가외주구분에 대해 필수 입력항목 설정
  await scwin.f_ctrlFixKndCd();
  scwin.f_ctrlGrdBtn(false); // 그리드 버튼 (Enable)

  //- 정비작업상태가 작업완료(C) 이면 임시저장을 할 수 없음, 작업완료일시도 수정할 수 없음.
  if (scwin.cvFixWrkStsCd == "C") {
    $c.gus.cfDisableObjects($p, [btn_SaveTemporary]);
    scwin.f_ctrlApplyFixWorkStandardBtn(true); // 작업표준적용 버튼 (Disable)
    $c.gus.cfDisableObjects($p, [ica_wrkEndDt, em_wrkEndHh]);
  } else if (scwin.cvFixWrkStsCd == "I") {
    scwin.f_ctrlApplyFixWorkStandardBtn(false); // 작업표준적용 버튼 (Enable)
  } else {
    scwin.f_ctrlApplyFixWorkStandardBtn(true); // 작업표준적용 버튼 (Disable)
  }
  scwin.f_ioNesYn(); // 입출고필요여부에 대해 필수 입력항목 설정

  $c.gus.cfDisableObjects($p, [ica_wrkPlanDt, lux_selfOutordClsCd]); // 작업계획일자, 자가외주구분

  //- 그리드 편집 관련 / 자가외주구분에 따라 편집 가능여부 설정
  scwin.f_ctrlGrdEnable(true);
};
scwin.f_SaveTemporary = async function () {
  scwin.setDsFixWorkData();

  // 변경한 데이터가 있는지 체크한다.
  if (ds_fix_work.getModifiedIndex().length == 0 && ds_fix_work_standard.getModifiedIndex().length == 0 && ds_fix_work_unit.getModifiedIndex().length == 0 && ds_fix_driver.getModifiedIndex().length == 0 && ds_repair_circula_parts.getModifiedIndex().length == 0 && ds_fix_work_parts.getModifiedIndex().length == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "작업지시 기본정보 및 상세정보"));
    return;
  }
  //- 임시저장을 위한 입력 값 검증, 설정
  let saveResult = await scwin.f_SaveValid("SaveTemporary");
  if (!saveResult) {
    return;
  }

  // 외주인 경우 부가세 체크
  if (lux_selfOutordClsCd.getValue() == "OT") {
    let vatCheck = await scwin.f_vatChk();
    if (vatCheck) {
      return;
    }
  }
  let fixWrkStsCdPre = lux_fixWrkStsCd.getValue();
  lux_fixWrkStsCd.setValue("R"); // 정비상태(R:임시저장)
  ds_fix_work.setCellData(0, "fixWrkStsCd", lux_fixWrkStsCd.getValue());
  ds_fix_work_no.removeAll();
  sbm_save.userData1 = "noError";
  let result = await $c.sbm.execute($p, sbm_save);
  let saveSuccess = await scwin.afterSaveAction(result);
  if (saveSuccess == false) {
    // 저장이 실패했을 경우 정비상태를 원래대로 돌려놓고 리턴
    lux_fixWrkStsCd.setValue(fixWrkStsCdPre);
    ds_fix_work.setCellData(0, "fixWrkStsCd", lux_fixWrkStsCd.getValue());
    return;
  }
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableObjects($p, [btn_Edit, btn_SaveTemporary, btn_Save, btn_Del, btn_Close]);
  $c.gus.cfDisableObjects($p, [btn_Save, btn_SaveTemporary]);
  scwin.f_ctrlApplyFixWorkStandardBtn(true); // 작업표준적용 버튼 (Disable)
  scwin.f_ctrlGrdBtn(true); // 그리드 버튼 (Disable)

  await scwin.f_Retrieve();

  //- 그리드 편집 관련 / 자가외주구분에 따라 편집 가능여부 설정
  scwin.f_ctrlGrdEnable(false);
  em_fixWrkPlCd.setReadOnly(true);

  //opener를 새로 조회할것을 알려줌
  scwin.returnValue = "REFRESH";
};
scwin.f_Save = async function () {
  scwin.setDsFixWorkData();

  //- 작업완료를 위한 입력 값 검증, 설정
  let saveValidResult = await scwin.f_SaveValid("Save");
  if (!saveValidResult) {
    return;
  }

  // 외주인 경우 부가세 체크
  if (lux_selfOutordClsCd.getValue() == "OT") {
    let vatCheck = await scwin.f_vatChk();
    if (vatCheck) {
      return;
    }
  }

  // 정기점검, 정기검사, 종합검사시 자동차등록증 첨부 체크
  let fixKndCdVal = lux_fixKndCd.getValue();
  if (fixKndCdVal == "13" || fixKndCdVal == "14" || fixKndCdVal == "15") {
    if (txt_fileNm.getValue() == "") {
      await $c.win.alert($p, "정기점검, 정기검사, 종합검사시 자동차등록증 첨부는 필수입니다.");
      return;
    }
  }
  //- 소요부품 목록에서 기존에 등록된 ROW에 대해서 출고처리를 하기위해
  //- Row Status를 Insert(1) 로 바꿔서 서버에 보낸다
  for (let row = 0; row < ds_fix_work_parts.getRowCount(); row++) {
    if (ds_fix_work_parts.getRowStatus(row) == "R") {
      ds_fix_work_parts.setRowStatus(row, "C");
    }
  }

  //- 수리순환품  목록에서 기존에 등록된 Row에 대해서 출고처리를 하기위해
  //- Row Status를 Insert(1) 로 바꿔서 서버에 보낸다
  for (let row = 0; row < ds_repair_circula_parts.getRowCount(); row++) {
    if (ds_repair_circula_parts.getRowStatus(row) == "R") {
      ds_repair_circula_parts.setRowStatus(row, "C");
    }
  }
  let fixWrkStsCdPre = lux_fixWrkStsCd.getValue();
  lux_fixWrkStsCd.setValue("C"); // 정비상태(C:작업완료)
  ds_fix_work.setCellData(0, "fixWrkStsCd", lux_fixWrkStsCd.getValue());
  ds_fix_work_no.removeAll();
  sbm_save.userData1 = "noError";
  let result = await $c.sbm.execute($p, sbm_save);
  let saveSuccess = await scwin.afterSaveAction(result);
  if (saveSuccess == false) {
    // 저장이 실패했을 경우 정비상태를 원래대로 돌려놓고 리턴
    lux_fixWrkStsCd.setValue(fixWrkStsCdPre);
    ds_fix_work.setCellData(0, "fixWrkStsCd", lux_fixWrkStsCd.getValue());
    return;
  }
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableObjects($p, [btn_Edit, btn_SaveTemporary, btn_Save, btn_Del, btn_Close]);
  $c.gus.cfDisableObjects($p, [btn_Save, btn_SaveTemporary]);
  scwin.f_ctrlApplyFixWorkStandardBtn(true); // 작업표준적용 버튼 (Disable)
  scwin.f_ctrlGrdBtn(true); // 그리드 버튼 (Disable)

  await scwin.f_Retrieve();

  //- 그리드 편집 관련 / 자가외주구분에 따라 편집 가능여부 설정
  scwin.f_ctrlGrdEnable(false);
  em_fixWrkPlCd.setReadOnly(true);
  scwin.f_ctrlGrdBtn(true); // 그리드 버튼 (Disable)
  scwin.f_ioNesYn(); //입출고필요여부에 대해 필수 입력항목 설정
  scwin.f_setAdjustment();

  //opener를 새로 조회할것을 알려줌
  scwin.returnValue = "REFRESH";
};
scwin.f_SaveValid = async function (saveType) {
  $c.gus.cfRefreshMandSign($p, ['grp_total']); // mandatory 적용

  //- 필수 입력 항목 검증 : 장비기본정보, 정비기본정보
  let chk = await $c.gus.cfValidate($p, [tb_work], null, true);
  if (!chk) {
    return false;
  }
  let wrkEndDtVal = ica_wrkEndDt.getValue();
  if (wrkEndDtVal != "") {
    let jobCloseYn = await udc_closeYn.cfJobCloseYN("CUR", wrkEndDtVal.substring(0, 6), "00", "EQ01", scwin.repFixWrkPlCd, null, "N");
    if (jobCloseYn == 2) {
      await $c.win.alert($p, wrkEndDtVal.substring(0, 4) + "년 " + wrkEndDtVal.substring(4, 6) + "월의 마감이 이미 완료되었습니다.");
      return false;
    }
  }

  // 정비종류가 정기점검(13), 정기검사(14), 정밀검사(15) 일 경우 : 전도금처리가 이닌 경우 거래처 필수
  let fixKndCdVal = lux_fixKndCd.getValue();
  if (fixKndCdVal == "13" || fixKndCdVal == "14" || fixKndCdVal == "15") {
    let inspAgencyClntNo = em_inspAgencyClntNo.getValue();
    if (inspAgencyClntNo.length == 0) {
      await $c.win.alert($p, "점검/검사인 경우 검사대행업체는 필수입력입니다.");
      return false;
    }
    let inspDtVal = ica_inspDt.getValue();
    if (inspDtVal.length > 0 && chk_advcdProcYn.getValue() != "1") {
      if (inspAgencyClntNo.length == 0) {
        await $c.win.alert($p, "점검/검사이고 전도금이 아닌 경우 검사대행업체는 필수입력입니다.");
        return false;
      }
      let inspCost = parseInt(em_inspCost.getValue()) + parseInt(em_agencyCost.getValue());
      let inspCostVat = parseInt(em_inspCostVat.getValue());
      if (inspCost > 0 && inspCostVat == 0) {
        await $c.win.alert($p, "점검/검사이고 전도금이 아닌 경우 검사비부가세는 필수입력입니다.");
        return false;
      }
    } else if (inspDtVal.length > 0 && chk_advcdProcYn.getValue() == "1") {
      let inspCost = parseInt(em_inspCost.getValue() || "0") + parseInt(em_agencyCost.getValue() || "0");
      let inspCostVat = parseInt(em_inspCostVat.getValue() || "0");
      if (inspCost > 0 && inspCostVat > 0) {
        await $c.win.alert($p, "점검/검사이고 전도금인 경우 검사비부가세는 입력할 수 없습니다.");
        return false;
      }
    }
  }
  if (saveType == "Save") {
    //작업완료일때는
    let chk2 = await $c.gus.cfValidate($p, [tbl_eq], null, true);
    if (!chk2) return false;
    let chk3 = await $c.gus.cfValidate($p, [tb_work_detail], null, true);
    if (!chk3) return false;
    if (ds_fix_work.getCellData(0, "homeClsCd") == "TR") {
      // 고속일경우 작업시작일자,종료일자가 동일 월 이어야 한다.
      let wrkStDtVal = ica_wrkStDt.getValue().trim();
      let wrkEndDtValTrim = ica_wrkEndDt.getValue().trim();
      if (wrkStDtVal != "" && wrkEndDtValTrim != "") {
        if (wrkStDtVal.substring(0, 6) != wrkEndDtValTrim.substring(0, 6)) {
          await $c.win.alert($p, "작업시작월과 종료월은 동일 해야 합니다.");
          return false;
        }
      }
    }
    let wrkStDtVal = ica_wrkStDt.getValue().trim();
    let wrkEndDtValTrim = ica_wrkEndDt.getValue().trim();
    if (wrkStDtVal != "" && wrkEndDtValTrim != "") {
      if (wrkStDtVal + "" + em_wrkStHh.getValue().trim() > wrkEndDtValTrim + "" + em_wrkEndHh.getValue().trim()) {
        await $c.win.alert($p, "작업시작일시는 작업완료일시 이전이어야 합니다.");
        ica_wrkStDt.focus();
        return false;
      }
    }
    let inDtVal = ica_inDt.getValue().trim();
    let outDtVal = ica_outDt.getValue().trim();
    if (inDtVal != "" && outDtVal != "") {
      if (inDtVal + "" + em_inHh.getValue().trim() > outDtVal + "" + em_outHh.getValue().trim()) {
        await $c.win.alert($p, "입고일시는 출고일시 이전이어야 합니다.");
        ica_inDt.focus();
        return false;
      }
    }
    if (ica_inDt.getMandatory() == true) {
      // 입고일시과 작업시작일 비교
      if (inDtVal != "" && wrkStDtVal != "") {
        if (inDtVal + "" + em_inHh.getValue().trim() > wrkStDtVal + "" + em_wrkStHh.getValue().trim()) {
          await $c.win.alert($p, "입고일시는 작업시작일시보다 이전이어야 합니다.");
          ica_inDt.focus();
          return false;
        }
      }
    }
    if (ica_outDt.getMandatory() == true) {
      // 출고일시과 작업완료일시 비교 
      if (outDtVal != "" && wrkEndDtValTrim != "") {
        if (outDtVal + "" + em_outHh.getValue().trim() < wrkEndDtValTrim + "" + em_wrkEndHh.getValue().trim()) {
          await $c.win.alert($p, "출고일시는 작업완료일시보다 이후이어야 합니다.");
          ica_outDt.focus();
          return false;
        }
      }
    }

    // 검사결과는 정비종류가  정기검사(14), 정밀검사(15) 일 경우만 필수입력 검증
    if (fixKndCdVal == "14" || fixKndCdVal == "15") {
      //- 필수 입력 항목 검증 : 자가,외주,검사결과
      // 해당하는 탭을 옮긴후 따로따로 검사한다.
      if (lux_selfOutordClsCd.getValue() == "IN") {
        await scwin.f_ViewTab(0);
        let checkTab = await $c.gus.cfValidate($p, [tab_main.getFrame(0)], null, true);
        if (!checkTab) return false;
        for (let i = 0; i < ds_fix_work_parts.getRowCount(); i++) {
          if (ds_fix_work_parts.getRowStatus(i) == "D") continue;
          if ((ds_fix_work_parts.getCellData(i, "stockQty") < ds_fix_work_parts.getCellData(i, "partQty") || ds_fix_work_parts.getCellData(i, "stockQty") <= 0) && ds_fix_work_parts.getCellData(i, "partOutNo") == "") {
            await $c.win.alert($p, "부품재고가 없습니다.");
            ds_fix_work_parts.setRowPosition(i);
            if (lux_selfOutordClsCd.getValue() != "OT") {
              // 외주
              gr_fix_work_parts.setFocusedCell(i, "stockQty");
            } else {
              // 자가
              gr_fix_work_parts2.setFocusedCell(i, "stockQty");
            }
            return false;
          }
        }
        await scwin.f_ViewTab(2);
        checkTab = await $c.gus.cfValidate($p, [tab_main.getFrame(2)], null, true);
        if (!checkTab) return false;
      } else {
        await scwin.f_ViewTab(1);
        let checkTab = await $c.gus.cfValidate($p, [tab_main.getFrame(1)], null, true);
        if (!checkTab) return false;
        if (ds_fix_work_unit.getRowCount() < 1) {
          await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_003, "작업단위 정보"));
          return false;
        }
        for (let i = 0; i < ds_fix_work_parts.getRowCount(); i++) {
          if (ds_fix_work_parts.getRowStatus(i) == "D") continue;
          if ((ds_fix_work_parts.getCellData(i, "stockQty") < ds_fix_work_parts.getCellData(i, "partQty") || ds_fix_work_parts.getCellData(i, "stockQty") <= 0) && ds_fix_work_parts.getCellData(i, "partOutNo") == "") {
            await $c.win.alert($p, "부품재고가 없습니다.");
            ds_fix_work_parts.setRowPosition(i);
            if (lux_selfOutordClsCd.getValue() != "OT") {
              // 외주
              gr_fix_work_parts.setFocusedCell(i, "stockQty");
            } else {
              // 자가
              gr_fix_work_parts2.setFocusedCell(i, "stockQty");
            }
            return false;
          }
        }
        await scwin.f_ViewTab(2);
        checkTab = await $c.gus.cfValidate($p, [tab_main.getFrame(2)], null, true);
        if (!checkTab) return false;
      }
    } else if (fixKndCdVal == "13") {
      // 정비종류가 정기점검일때 필수값 체크 
      await scwin.f_ViewTab(2);
      let nextExpireDtVal = ica_nextExpireDt.getValue();
      if (nextExpireDtVal.length > 0) {
        if (nextExpireDtVal.length != 8) {
          await $c.win.alert($p, "다음검사 예정일은 8자리수만큼 입력하십시오");
          return false;
        }
      }
      let chkInsp = await $c.gus.cfValidate($p, [ica_inspDt, em_agencyCost, em_inspCost], null, true);
      if (!chkInsp) return false;
    } else {
      // 검사가 아닐때

      //- 필수 입력 항목 검증 : 자가,외주
      if (lux_selfOutordClsCd.getValue() == "IN") {
        let checkTab = await $c.gus.cfValidate($p, [tab_main.getFrame(0)], null, true);
        if (!checkTab) return false;
        if (ds_fix_driver.getRowCount() < 1) {
          await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_003, "정비사 정보"));
          return false;
        }
        // 정비사 그리드 필수값 체크
        let chkDriver = await $c.gus.cfValidate($p, [gr_fix_driver], null, true);
        if (!chkDriver) return false;
        for (let i = 0; i < ds_fix_driver.getRowCount(); i++) {
          if (ds_fix_driver.getCellData(i, "wrkHhCnt") == 0) {
            await $c.win.alert($p, "정비사의 정비시간은 0보다 커야 합니다.");
            gr_fix_driver.setFocusedCell(i, "wrkHhCnt");
            return false;
          }
        }
      } else {
        let checkTab = await $c.gus.cfValidate($p, [tab_main.getFrame(1)], null, true);
        if (!checkTab) return false;
      }
      for (let i = 0; i < ds_fix_work_parts.getRowCount(); i++) {
        if (ds_fix_work_parts.getRowStatus(i) == "D") continue;
        if ((ds_fix_work_parts.getCellData(i, "stockQty") < ds_fix_work_parts.getCellData(i, "partQty") || ds_fix_work_parts.getCellData(i, "stockQty") <= 0) && ds_fix_work_parts.getCellData(i, "partOutNo") == "") {
          await $c.win.alert($p, "부품재고가 없습니다.");
          ds_fix_work_parts.setRowPosition(i);
          if (lux_selfOutordClsCd.getValue() != "OT") {
            // 외주
            gr_fix_work_parts.setFocusedCell(i, "stockQty");
          } else {
            // 자가
            gr_fix_work_parts2.setFocusedCell(i, "stockQty");
          }
          return false;
        }
      }
    }
  } else {
    // 임시저장일때 체크사항
    let chk4 = await $c.gus.cfValidate($p, [tbl_eq], null, true);
    if (!chk4) return false;
    // 작업예정일자, 종료예정일자만 필수 입력 검증
    let chk5 = await $c.gus.cfValidate($p, [ica_wrkIntendDt, ica_endIntendDt], null, true);
    if (!chk5) return false;
    let wrkStDtVal = ica_wrkStDt.getValue().trim();
    let wrkEndDtValTrim = ica_wrkEndDt.getValue().trim();
    if (wrkStDtVal != "" && wrkEndDtValTrim != "") {
      if (ds_fix_work.getCellData(0, "homeClsCd") == "TR") {
        // 고속일경우 작업시작일자,종료일자가 동일 월 이어야 한다.
        if (wrkStDtVal.substring(0, 6) != wrkEndDtValTrim.substring(0, 6)) {
          await $c.win.alert($p, "작업시작월과 종료월은 동일 해야 합니다.");
          return false;
        }
      }
      if (wrkStDtVal + "" + em_wrkStHh.getValue().trim() > wrkEndDtValTrim + "" + em_wrkEndHh.getValue().trim()) {
        await $c.win.alert($p, "작업시작일시는 작업완료일시 이전이어야 합니다.");
        ica_wrkStDt.focus();
        return false;
      }
    }
    let inDtVal = ica_inDt.getValue().trim();
    let outDtVal = ica_outDt.getValue().trim();
    if (inDtVal != "" && outDtVal != "") {
      if (inDtVal + "" + em_inHh.getValue().trim() > outDtVal + "" + em_outHh.getValue().trim()) {
        await $c.win.alert($p, "입고일시는 출고일시 이전이어야 합니다.");
        ica_inDt.focus();
        return false;
      }
    }
    if (ica_inDt.getMandatory() == true) {
      // 입고일시과 작업시작일 비교
      if (ica_inDt.getValue() != "" && wrkStDtVal != "") {
        if (inDtVal + "" + em_inHh.getValue().trim() > wrkStDtVal + "" + em_wrkStHh.getValue().trim()) {
          await $c.win.alert($p, "입고일시는 작업시작일시보다 이전이어야 합니다.");
          ica_inDt.focus();
          return false;
        }
      }
    }
    if (ica_outDt.getMandatory() == true) {
      // 출고일시과 작업완료일시 비교 
      if (ica_outDt.getValue() != "" && ica_wrkEndDt.getValue() != "") {
        if (outDtVal + "" + em_outHh.getValue().trim() < wrkEndDtVal + "" + em_wrkEndHh.getValue().trim()) {
          await $c.win.alert($p, "출고일시는 작업완료일시보다 이후이어야 합니다.");
          ica_outDt.focus();
          return false;
        }
      }
    }

    // 검사결과는 정비종류가 정기점검(13), 정기검사(14), 정밀검사(15) 일 경우만 필수입력 검증
    if (fixKndCdVal == "13" || fixKndCdVal == "14" || fixKndCdVal == "15") {
      //- 필수 입력 항목 검증 : 자가,외주,검사결과
      // 해당하는 탭을 옮긴후 따로따로 검사한다.

      if (lux_selfOutordClsCd.getValue() == "IN") {
        await scwin.f_ViewTab(0);
        let checkTab = await $c.gus.cfValidate($p, [tab_main.getFrame(0)], null, true);
        if (!checkTab) return false;
        for (let i = 0; i < ds_fix_driver.getRowCount(); i++) {
          if (ds_fix_driver.getCellData(i, "wrkHhCnt") == 0) {
            await $c.win.alert($p, "정비사의 정비시간은 0보다 커야 합니다.");
            gr_fix_driver.setFocusedCell(i, "wrkHhCnt");
            return false;
          }
        }
      } else {
        await scwin.f_ViewTab(1);
        let checkTab = await $c.gus.cfValidate($p, [tab_main.getFrame(1)], null, true);
        if (!checkTab) return false;
      }
    } else {
      // 검사가 아닐때

      //- 필수 입력 항목 검증 : 자가,외주
      if (lux_selfOutordClsCd.getValue() == "IN") {
        let checkTab = await $c.gus.cfValidate($p, [tab_main.getFrame(0)], null, true);
        if (!checkTab) return false;
        for (let i = 0; i < ds_fix_driver.getRowCount(); i++) {
          if (ds_fix_driver.getCellData(i, "wrkHhCnt") == 0) {
            await $c.win.alert($p, "정비사의 정비시간은 0보다 커야 합니다.");
            gr_fix_driver.setFocusedCell(i, "wrkHhCnt");
            return false;
          }
        }
      } else {
        let checkTab = await $c.gus.cfValidate($p, [tab_main.getFrame(1)], null, true);
        if (!checkTab) return false;
      }
    }
  }

  // 총가동시간  체크 로직. 
  if (scwin.arg_homeClsCd == "LO") {
    // 사업부문이 물류인 경우에만 체크 .
    if (ds_fix_work.getCellData(0, "totTimeYn") == "Y") {
      let totOprtVal = em_totOprtHhCnt.getValue();
      if (totOprtVal <= 0 || totOprtVal == null || totOprtVal == "") {
        await $c.win.alert($p, "총가동 시간을 입력해 주세요.");
        em_totOprtHhCnt.focus();
        return false;
      }
    }
  }

  //- 차량번호
  ds_fix_work.setCellData(0, "vehclNo", txt_vehclNo.getValue());
  let wrkStDtFinal = ica_wrkStDt.getValue();
  let wrkEndDtFinal = ica_wrkEndDt.getValue();
  if (wrkStDtFinal != "" && wrkEndDtFinal != "") {
    em_needDt.setValue($c.date.diffDate($p, wrkStDtFinal, wrkEndDtFinal));
  }

  //- 수정모드일 경우에 DataSet의 Data RowStatus를 입력상태로 간주시킴
  if (scwin.cvUpdate == true) {
    //TODO : ds_fix_work.UseChangeInfo = false;
  }
  if (saveType == "Save") {
    // 작업완료
    for (let row = 0; row < ds_fix_work_unit.getRowCount(); row++) {
      if (ds_fix_work_unit.getCellData(row, "wrkHhCnt") == "0") {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_013, "작업단위의 실제정비시간", "0"));
        return false;
      }
    }
    for (let row = 0; row < ds_fix_work_parts.getRowCount(); row++) {
      if (ds_fix_work_parts.getCellData(row, "partQty") == "0") {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_013, "소요부품의 사용수량", "0"));
        return false;
      }
      if (ds_fix_work_parts.getCellData(row, "realOutDt").trim() != "" && wrkEndDtFinal.trim() != "") {
        if (ds_fix_work_parts.getCellData(row, "realOutDt").substr(0, 6) != wrkEndDtFinal.substr(0, 6)) {
          await $c.win.alert($p, "실 출고일자는 작업완료일자와 같은 월이어야 합니다.");
          return false;
        }
      }
    }
    sbm_save.action = scwin._SAVE_TR_REGIST_URL; // 작업완료 TR
  } else if (saveType == "SaveTemporary") {
    // 임시저장
    //- 신규
    if (scwin.cvNNew == true) {
      sbm_save.action = scwin._SAVE_TR_TEMPORARY_URL; // 신규 등록 TR / 임시저장
    }
    //- 수정
    if (scwin.cvUpdate == true) {
      sbm_save.action = scwin._SAVE_TR_UPDATE_URL; // 수정 TR / 임시저장
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  //기존 작업 완료 인경우는 삭제를 할수 없었음, 현업 요청에 따라 마감을 제외한 작업 완료 상태도 삭제 가능하게 변경 하였다.2006.06.23. by 송규엽
  // if (lux_fixWrkStsCd.getValue() == "C") {
  // 	$c.win.alert("작업완료된 결과는 삭제할 수 없습니다.");
  // 	return;
  // }

  let wrkEndDtVal = ica_wrkEndDt.getValue();
  if (wrkEndDtVal != "") {
    let jobCloseYn = await udc_closeYn.cfJobCloseYN("CUR", wrkEndDtVal.substring(0, 6), "00", "EQ01", scwin.repFixWrkPlCd, null, "N");
    if (jobCloseYn == 2) {
      await $c.win.alert($p, wrkEndDtVal.substring(0, 4) + "년 " + wrkEndDtVal.substring(4, 6) + "월의 마감이 이미 완료되었습니다.");
      return;
    }
  }
  let chk = await $c.win.confirm($p, "삭제하시겠습니까?");
  if (chk) {
    scwin.cvDelete = true; // 삭제

    sbm_save.userData1 = "noError";
    sbm_save.action = scwin._SAVE_TR_DELETE_URL; // 삭제 TR
    let result = await $c.sbm.execute($p, sbm_save);
    await scwin.afterSaveAction(result);
    $c.win.closePopup($p, "REFRESH");
  }
};

//-------------------------------------------------------------------------
// 작업단위 삭제시에 그에 해당하는 부품도 삭제
//-------------------------------------------------------------------------
scwin.f_DeleteMarked = function () {
  let pos = ds_fix_work_unit.getRowPosition();
  if (pos < 0) {
    return;
  }
  let fixWrkUnitNo = ds_fix_work_unit.getCellData(pos, "fixWrkUnitNo");
  for (let row = ds_fix_work_parts.getRowCount() - 1; row >= 0; row--) {
    if (ds_fix_work_parts.getCellData(row, "fixWrkUnitNo") == fixWrkUnitNo) {
      let rowStatus = ds_fix_work_parts.getRowStatus(row);
      if (rowStatus == "C") {
        ds_fix_work_parts.removeRow(row);
      } else {
        ds_fix_work_parts.deleteRow(row);
      }
    }
  }
  for (let row = ds_fix_driver.getRowCount() - 1; row >= 0; row--) {
    if (ds_fix_driver.getCellData(row, "fixWrkUnitNo") == fixWrkUnitNo) {
      let rowStatus = ds_fix_driver.getRowStatus(row);
      if (rowStatus == "C") {
        ds_fix_driver.removeRow(row);
      } else {
        ds_fix_driver.deleteRow(row);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 작업단위 삭제 취소 시에 그에 해당하는 부품도 삭제 취소
//-------------------------------------------------------------------------
scwin.f_UndoMarked = function () {
  let pos = ds_fix_work_unit.getRowPosition();
  if (pos < 0) {
    return;
  }
  let fixWrkUnitNo = ds_fix_work_unit.getCellData(pos, "fixWrkUnitNo");
  for (let row = 0; row < ds_fix_work_parts.getRowCount(); row++) {
    if (ds_fix_work_parts.getCellData(row, "fixWrkUnitNo") == fixWrkUnitNo) {
      let rowStatus = ds_fix_work_parts.getRowStatus(row);
      if (rowStatus == "C") {
        ds_fix_work_parts.removeRow(row);
      } else {
        ds_fix_work_parts.undoRow(row);
      }
    }
  }
  for (let row = 0; row < ds_fix_driver.getRowCount(); row++) {
    if (ds_fix_driver.getCellData(row, "fixWrkUnitNo") == fixWrkUnitNo) {
      let rowStatus = ds_fix_driver.getRowStatus(row);
      if (rowStatus == "C") {
        ds_fix_driver.removeRow(row);
      } else {
        ds_fix_driver.undoRow(row);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 코드팝업
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  return new Promise(async function (resolve, reject) {
    // 공통 콜백 처리 함수 
    let handleCallback = async function (callbackFn, data) {
      try {
        if (callbackFn) {
          await callbackFn(data); // 기존 async callBack 함수 실행 완료 대기
        }
        resolve(data); // Promise 완료 및 데이터 반환
      } catch (e) {
        //console.error("Popup Callback Error:", e);
        reject(e); // 에러 발생 시 처리
      }
    };
    switch (disGubun) {
      case 1:
        // 작업장
        udc_comCode.setSelectId('retrieveWorkPlaceInfo'); // XML상의 SELECT ID / 작업장 조회
        udc_comCode.cfCommonPopUpAsync(function (res) {
          handleCallback(scwin.fixWrkPl_commonPopupCallbackFunc, res);
        }, pCode // 화면에서의 Code Element의 Value
        , pName // 화면에서의 Name Element의 Value
        , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
        , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , scwin.arg_homeClsCd // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 우도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , pAllSearch // 전체검색허용여부 ("F")
        , "작업장조회,작업장코드,작업장명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case 2:
        // 장비
        let wrkEndDtVal = ica_wrkEndDt.getValue().trim();
        let argDt = wrkEndDtVal == "" ? "XXXX" : wrkEndDtVal;
        udc_eqCd.setSelectId('retrieveEqBasicListInfo'); // XML상의 SELECT ID / 작업장 조회
        udc_eqCd.cfCommonPopUpAsync(function (res) {
          handleCallback(scwin.eq_commonPopupCallbackFunc, res);
        }, pCode // 화면에서의 Code Element의 Value
        , pName // 화면에서의 Name Element의 Value
        , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
        , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , scwin.arg_homeClsCd + ",,," + argDt + "," + argDt // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 우도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , "F" // 전체검색허용여부 ("F")
        , "장비,장비코드,차량번호" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case 3:
        // 외주정비거래처
        udc_outordFixClnt.setSelectId('retrieveFixClntList'); // XML상의 SELECT ID / 거래처 조회 (정비)
        udc_outordFixClnt.cfCommonPopUpAsync(function (res) {
          handleCallback(scwin.outordFixClnt_commonPopupCallbackFunc, res);
        }, pCode // 화면에서의 Code Element의 Value
        , pName // 화면에서의 Name Element의 Value
        , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
        , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 우도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , "F" // 전체검색허용여부 ("F")
        , "외주정비거래처조회,거래처코드,거래처명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case 4:
        // 부품조회 (수리순환)
        udc_circulPart.setSelectId('retrievePartYnInfo'); // XML상의 SELECT ID / 부품조회 (수리순환)
        udc_circulPart.cfCommonPopUpAsync(function (res) {
          handleCallback(scwin.circulPart_commonPopupCallbackFunc, res);
        }, pCode // 화면에서의 Code Element의 Value
        , pName // 화면에서의 Name Element의 Value
        , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
        , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 우도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , pAllSearch // 전체검색허용여부 ("F")
        , "수리순환부품조회,부품코드,부품명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case 5:
        // 검사대행업체
        udc_inspAgencyClnt.setSelectId('retrieveFixClntList'); // XML상의 SELECT ID / 거래처 조회 (정비)
        udc_inspAgencyClnt.cfCommonPopUpAsync(function (res) {
          handleCallback(scwin.inspAgencyClnt_commonPopupCallbackFunc, res);
        }, pCode // 화면에서의 Code Element의 Value
        , pName // 화면에서의 Name Element의 Value
        , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
        , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 우도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , "F" // 전체검색허용여부 ("F")
        , "검사대행업체,거래처코드,거래처명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case 6:
        // 사고번호
        udc_accdRecpt.setSelectId('retrieveAccdNoInfo'); // XML상의 SELECT ID / 거래처 조회 (정비)
        udc_accdRecpt.cfCommonPopUpAsync(function (res) {
          handleCallback(scwin.accdRecpt_commonPopupCallbackFunc, res);
        }, pCode // 화면에서의 Code Element의 Value
        , pName // 화면에서의 Name Element의 Value
        , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
        , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , "," + em_eqCd.getValue() // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 우도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , pAllSearch // 전체검색허용여부 ("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case 7:
        // 총가동시간 필수 여부 조회.
        udc_comCode.setSelectId('retrieveEqTotTimeInfo'); // XML상의 SELECT ID / 거래처 조회 (정비)
        udc_comCode.cfCommonPopUpAsync(function (res) {
          handleCallback(scwin.eqTotTime_commonPopupCallbackFunc, res);
        }, pCode // 화면에서의 Code Element의 Value
        , pName // 화면에서의 Name Element의 Value
        , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
        , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 우도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , 'T' // 전체검색허용여부 ("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      default:
        break;
    }
  });
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (disGubun, inObj, pairObj, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  let rtn = $c.gus.cfCanOpenPopup($p, inObj, pairObj);
  if (!rtn) {
    if (disGubun == 2) {
      //장비조회일 경우
      ica_rglintChkExpireDt.setValue(""); //정기점검일
      txt_eqClssNm.setValue(""); //분류[5]
      txt_eqKndNm.setValue(""); //종류[6]
      txt_eqModelNm.setValue(""); //모델명[3]
      ica_rglintInspExpireDt.setValue(""); //정기만료일
      txt_acctDeptNm.setValue(""); //귀속부서명
      txt_assgnLobranNm.setValue(""); //점소명[9]
    } else if (disGubun == 1) {
      em_adptWages.setValue("0");
    }
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);
  if (disGubun == 2) {
    //장비조회일 경우
    ica_rglintChkExpireDt.setValue(""); //정기점검일
    txt_eqClssNm.setValue(""); //분류[5]
    txt_eqKndNm.setValue(""); //종류[6]
    txt_eqModelNm.setValue(""); //모델명[3]
    ica_rglintInspExpireDt.setValue(""); //정기만료일
    txt_acctDeptNm.setValue(""); //귀속부서명
    txt_assgnLobranNm.setValue(""); //점소명[9]
  }

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) await scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else await scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 명칭 조회 Popup 처리 : 그리드에서 입력된 코드정보로 명을 조회
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = async function (disGubun, row, pClose, newCode = null) {
  return new Promise(async function (resolve, reject) {
    // 선언부
    let pCode = "";
    let pName = "";
    let addWhere = "";
    switch (disGubun) {
      case 1:
        // 작업표준 코드팝업
        pCode = newCode != null ? newCode : ds_fix_work_standard.getCellData(row, "fixWrkStndNo"); // 작업표준코드
        udc_comCode.setSelectId('retrieveFixWrkSdListInfo'); // XML상의 SELECT ID / 작업장 조회
        udc_comCode.cfCommonPopUpAsync(function (rtnList) {
          try {
            $c.gus.cfSetGridReturnValue($p, rtnList, ds_fix_work_standard, row, "fixWrkStndNo", "wrkStndNm");
            resolve(rtnList);
          } catch (e) {
            reject(e);
          }
        }, pCode // 화면에서의 Code Element의  Value
        , pName // 화면에서의 Name Element의  Value
        , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
        , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는  컬럼 지정
        , scwin.arg_homeClsCd // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의  사용자 정의 폭
        , null // POP-UP뛰을때 우도우의  사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , "T" // 전체검색허용여부 ("F")
        , "작업표준정보,작업표준코드,작업표준명" // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case 2:
        // 작업단위_작업단위그리드 코드팝업
        pCode = newCode != null ? newCode : ds_fix_work_unit.getCellData(row, "fixWrkUnitNo"); // 작업단위코드
        udc_comCode.setSelectId('retrieveFixWrkUnitListInfo'); // XML상의 SELECT ID 
        udc_comCode.cfCommonPopUpAsync(async function (rtnList) {
          try {
            $c.gus.cfSetGridReturnValue($p, rtnList, ds_fix_work_unit, row, "fixWrkUnitNo", "fixWrkUnitNm", ["stndWrkHhCnt"]);
            if (rtnList != null && rtnList[0] != "N/A" && rtnList != undefined) {
              await scwin.f_applyFixWorkUnit(row, rtnList[0]);
            }
            resolve(rtnList);
          } catch (e) {
            reject(e);
          } finally {}
        }, pCode // 화면에서의 Code Element의  Value
        , pName // 화면에서의 Name Element의  Value
        , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
        , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는  컬럼 지정
        , scwin.arg_homeClsCd // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의  사용자 정의 폭
        , null // POP-UP뛰을때 우도우의  사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , "F" // 전체검색허용여부 ("F")
        , "작업단위정보,작업단위코드,작업단위명" // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case 3:
        // 작업단위_정비사그리드 코드팝업
        pCode = newCode != null ? newCode : ds_fix_driver.getCellData(row, "fixWrkUnitNo"); // 작업단위코드
        udc_comCode.setSelectId('retrieveFixWrkUnitListInfo'); // XML상의 SELECT ID
        udc_comCode.cfCommonPopUpAsync(async function (rtnList) {
          try {
            let sameFixWrkUnitNo = 0;
            if (rtnList != null && rtnList[0] != "N/A" && rtnList != undefined) {
              for (let i = 0; i < ds_fix_work_unit.getRowCount(); i++) {
                if (ds_fix_work_unit.getCellData(i, "fixWrkUnitNo") == rtnList[0]) {
                  sameFixWrkUnitNo = 1;
                  break;
                }
              }
              if (sameFixWrkUnitNo == 0) {
                ds_fix_driver.setCellData(ds_fix_driver.getRowPosition(), "fixWrkUnitNo", "");
                await $c.win.alert($p, "작업단위에 등록된 작업단위번호만 입력가능합니다.");
                return false;
              }
            }
            $c.gus.cfSetGridReturnValue($p, rtnList, ds_fix_driver, row, "fixWrkUnitNo", "");
            resolve(rtnList);
          } catch (e) {
            reject(e);
          }
        }, pCode // 화면에서의 Code Element의  Value
        , pName // 화면에서의 Name Element의  Value
        , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
        , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는  컬럼 지정
        , scwin.arg_homeClsCd // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의  사용자 정의 폭
        , null // POP-UP뛰을때 우도우의  사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , "F" // 전체검색허용여부 ("F")
        , "작업단위정보,작업단위코드,작업단위명" // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case 4:
        // 정비사_정비사그리드 코드팝업
        pName = newCode != null ? newCode : ds_fix_driver.getCellData(row, "fixEmpNm"); // 정비사명
        addWhere = "," + scwin.arg_fixWrkPlCd + ",2";
        udc_comCode.setSelectId('retrieveFixEmpInfo'); // XML상의 SELECT ID
        udc_comCode.cfCommonPopUpAsync(function (rtnList) {
          try {
            $c.gus.cfSetGridReturnValue($p, rtnList, ds_fix_driver, row, "fixEmpNo", "fixEmpNm");
            resolve(rtnList);
          } catch (e) {
            reject(e);
          }
        }, pCode // 화면에서의 Code Element의  Value
        , pName // 화면에서의 Name Element의  Value
        , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
        , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는  컬럼 지정
        , addWhere // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의  사용자 정의 폭
        , null // POP-UP뛰을때 우도우의  사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , "T" // 전체검색허용여부 ("F")
        , "정비사정보,정비사코드,정비사명" // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case 5:
        // 수리순환품 코드팝업
        pCode = newCode != null ? newCode : ds_repair_circula_parts.getCellData(row, "circulPartCd"); // 수리순환품코드

        udc_comCode.setSelectId('retrievePartYnInfo'); // XML상의 SELECT ID
        udc_comCode.cfCommonPopUpAsync(function (rtnList) {
          try {
            $c.gus.cfSetGridReturnValue($p, rtnList, ds_repair_circula_parts, row, "circulPartCd", "circulPartNm");
            resolve(rtnList);
          } catch (e) {
            reject(e);
          }
        }, pCode // 화면에서의 Code Element의  Value
        , pName // 화면에서의 Name Element의  Value
        , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
        , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는  컬럼 지정
        , scwin.arg_homeClsCd // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의  사용자 정의 폭
        , null // POP-UP뛰을때 우도우의  사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , "T" // 전체검색허용여부 ("F")
        , "수리순환품정보,부품코드,부품명" // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case 6:
        // 작업단위_코드팝업
        pCode = newCode != null ? newCode : ds_fix_work_parts.getCellData(row, "fixWrkUnitNo"); // 작업단위

        udc_comCode.setSelectId('retrieveFixWrkUnitListInfo'); // XML상의 SELECT ID
        udc_comCode.cfCommonPopUpAsync(function (rtnList) {
          try {
            let sameFixWrkUnitNo = 0;
            if (rtnList != null && rtnList[0] != "N/A" && rtnList != undefined) {
              for (let i = 0; i < ds_fix_work_unit.getRowCount(); i++) {
                if (ds_fix_work_unit.getCellData(i, "fixWrkUnitNo") == rtnList[0]) {
                  sameFixWrkUnitNo = 1;
                  break;
                }
              }
              if (sameFixWrkUnitNo == 0) {
                ds_fix_work_parts.setCellData(ds_fix_work_parts.getRowPosition(), "fixWrkUnitNo", "");
                $c.win.alert($p, "작업단위에 등록된 작업단위번호만 입력가능합니다.");
                return false;
              }
            }
            $c.gus.cfSetGridReturnValue($p, rtnList, ds_fix_work_parts, row, "fixWrkUnitNo", "");
            resolve(rtnList);
          } catch (e) {
            reject(e);
          }
        }, pCode // 화면에서의 Code Element의  Value
        , pName // 화면에서의 Name Element의  Value
        , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
        , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는  컬럼 지정
        , scwin.arg_homeClsCd // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의  사용자 정의 폭
        , null // POP-UP뛰을때 우도우의  사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , "F" // 전체검색허용여부 ("F")
        , "작업단위정보,작업단위코드,작업단위명" // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case 7:
        // 부품_소요부품 코드팝업
        pCode = newCode != null ? newCode : ds_fix_work_parts.getCellData(row, "partCd"); // 부품코드
        addWhere = em_fixWrkPlCd.getValue() + "," + ds_fix_work_parts.getCellData(ds_fix_work_parts.getRowPosition(), "inClsCd");
        udc_comCode.setSelectId('retrievePartBasicInfo'); // XML상의 SELECT ID
        udc_comCode.cfCommonPopUpAsync(async function (rtnList) {
          try {
            if (rtnList != null && rtnList[0] != "N/A" && rtnList != undefined) {
              ds_fix_work_parts.setCellData(row, "partCd", rtnList[0]); // 부품코드
              ds_fix_work_parts.setCellData(row, "partNm", rtnList[1]); // 부품명
              ds_fix_work_parts.setCellData(row, "partUnitNm", rtnList[3]); // 단위

              ds_fix_work_parts.setCellData(row, "clntNo", ""); // 거래처;
              ds_fix_work_parts.setCellData(row, "clntNm", ""); // 거래처;
              ds_fix_work_parts.setCellData(row, "stockQty", rtnList[7]); // 현재고;

              let outUpr = Number(rtnList[6] / rtnList[7]);
              ds_fix_work_parts.setCellData(row, "outUpr", !isFinite(outUpr) ? 0 : Math.trunc(outUpr)); // 출고예상단가;

              if (ds_fix_work_parts.getCellData(row, "partQty") == "0") {
                ds_fix_work_parts.setCellData(row, "totAmt", "0");
                ds_fix_work_parts.setCellData(row, "vatAmt", "0");
              } else {
                let partQty = Number(ds_fix_work_parts.getCellData(row, "partQty"));
                let outUpr = Number(ds_fix_work_parts.getCellData(row, "outUpr"));
                let totAmt = partQty * outUpr;
                ds_fix_work_parts.setCellData(row, "totAmt", !isFinite(totAmt) ? 0 : Math.trunc(totAmt));
                // 부가세 계산(간이과세/면세 - 0, 그 외 - 10%
                let taxnCls = "";
                taxnCls = ds_fix_work_parts.getCellData(row, "taxnCls");
                if (taxnCls == "20" || taxnCls == "30") {
                  ds_fix_work_parts.setCellData(row, "vatAmt", 0);
                } else {
                  ds_fix_work_parts.setCellData(row, "vatAmt", Math.trunc(ds_fix_work_parts.getCellData(row, "totAmt") / 10));
                }
              }
              if (ds_fix_work_parts.getCellData(ds_fix_work_parts.getRowPosition(), "inClsCd") == "3") {
                await scwin.f_openCommPopUpGrid(8, row, 'T');
              }
            } else {
              ds_fix_work_parts.setCellData(row, "inClsCd", "1"); // 입고구분 : 일반(1)
              ds_fix_work_parts.setCellData(row, "partCd", ""); // 부품코드
              ds_fix_work_parts.setCellData(row, "partNm", ""); // 부품명
              ds_fix_work_parts.setCellData(row, "partUnitNm", ""); // 단위

              ds_fix_work_parts.setCellData(row, "clntNo", ""); // 거래처;
              ds_fix_work_parts.setCellData(row, "clntNm", ""); // 거래처;
              ds_fix_work_parts.setCellData(row, "stockQty", ""); // 현재고;
              ds_fix_work_parts.setCellData(row, "outUpr", 0); // 출고예상단가;

              ds_fix_work_parts.setCellData(row, "partQty", "0");
              ds_fix_work_parts.setCellData(row, "totAmt", "0");
              ds_fix_work_parts.setCellData(row, "vatAmt", "0");
            }
            resolve(rtnList);
          } catch (e) {
            reject(e);
          }
        }, pCode // 화면에서의 Code Element의  Value
        , pName // 화면에서의 Name Element의  Value
        , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
        , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는  컬럼 지정
        , addWhere // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의  사용자 정의 폭
        , null // POP-UP뛰을때 우도우의  사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , "T" // 전체검색허용여부 ("F")
        , "부품정보,부품코드,부품명" // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case 8:
        // 부품_입고구분에 따라 거래처 및 재고 팝업
        pCode = em_fixWrkPlCd.getValue(); // 정비작업장
        pName = newCode != null ? newCode : ds_fix_work_parts.getCellData(row, "partCd"); // 부품코드
        addWhere = ds_fix_work_parts.getCellData(row, "inClsCd"); // 입고구분

        udc_comCode.setSelectId('retrieveStockCustomer'); // XML상의 SELECT ID
        udc_comCode.cfCommonPopUpAsync(function (rtnList) {
          try {
            if (rtnList != null && rtnList[0] != "N/A" && rtnList != undefined) {
              $c.gus.cfSetGridReturnValue($p, rtnList, ds_fix_work_parts, ds_fix_work_parts.getRowPosition(), "clntNm", "totAmt");
              ds_fix_work_parts.setCellData(row, "clntNo", rtnList[3]); // 거래처코드
              ds_fix_work_parts.setCellData(row, "stockQty", rtnList[2]); // 수량
              ds_fix_work_parts.setCellData(row, "taxnCls", rtnList[4]); // 과세구분(거래처)

              let outUpr = Number(rtnList[1] / rtnList[2]);
              ds_fix_work_parts.setCellData(row, "outUpr", !isFinite(outUpr) ? 0 : Math.trunc(outUpr)); // 출고예상단가 = 금액 / 수량

              if (ds_fix_work_parts.getCellData(row, "partQty") == "0") {
                ds_fix_work_parts.setCellData(row, "totAmt", "0");
                ds_fix_work_parts.setCellData(row, "vatAmt", "0");
              } else {
                let partQty = Number(ds_fix_work_parts.getCellData(row, "partQty"));
                let outUpr = Number(ds_fix_work_parts.getCellData(row, "outUpr"));
                let totAmt = partQty * outUpr;
                ds_fix_work_parts.setCellData(row, "totAmt", !isFinite(totAmt) ? 0 : Math.trunc(totAmt));
                // 부가세 계산(간이과세/면세 - 0, 그 외 - 10%
                let taxnCls = "";
                taxnCls = ds_fix_work_parts.getCellData(row, "taxnCls");
                if (taxnCls == "20" || taxnCls == "30") {
                  ds_fix_work_parts.setCellData(row, "vatAmt", 0);
                } else {
                  ds_fix_work_parts.setCellData(row, "vatAmt", Math.trunc(ds_fix_work_parts.getCellData(row, "totAmt") / 10));
                }
              }
            } else {
              ds_fix_work_parts.setCellData(row, "inClsCd", "1"); // 입고구분 : 일반(1)
            }
            resolve(rtnList);
          } catch (e) {
            reject(e);
          }
        }, pCode // 화면에서의 Code Element의  Value
        , pName // 화면에서의 Name Element의  Value
        , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
        , 8 // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , "거래처,금액,수량,거래처코드,,부품코드,작업장,입고구분" // Title순서
        , "80,50,45,60,0,100,70,60" // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는  컬럼 지정
        , addWhere // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의  사용자 정의 폭
        , null // POP-UP뛰을때 우도우의  사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , "T" // 전체검색허용여부 ("F")
        , "부품정보,정비작업장,부품코드" // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
    }
  });
};
scwin.tab_main_onbeforeselect = function (oldIndex, newIndex) {
  scwin.f_ViewTab(newIndex);
  return false;
};

//-------------------------------------------------------------------------
// Tab Display 처리
//-------------------------------------------------------------------------
scwin.f_ViewTab = async function (idx) {
  // 탭_검사결과는 정비종류가 정기점검(13), 정기검사(14), 정밀검사(15) 일경우만 가능
  if (idx == 2) {
    let fixKndCd = lux_fixKndCd.getValue();
    if (fixKndCd != "13" && fixKndCd != "14" && fixKndCd != "15") {
      return;
    }
  }
  let selfOutordClsCdIdx = lux_selfOutordClsCd.getSelectedIndex();
  if (idx != 2 && (scwin.cvNNew == false && scwin.cvUpdate == false || scwin.cvNNew == false && scwin.cvUpdate == true) && selfOutordClsCdIdx != idx) return;

  // 탭_검사결과 일경우에는 자가외주구분을 변경하지 않음
  if (idx != 2 && selfOutordClsCdIdx != idx) {
    if (ds_fix_work_standard.getModifiedIndex().length != 0 || ds_fix_work_unit.getModifiedIndex().length != 0 || ds_fix_driver.getModifiedIndex().length != 0 || ds_repair_circula_parts.getModifiedIndex().length != 0 || ds_fix_work_parts.getModifiedIndex().length != 0) {
      //"변경사항이 반영되지 않았습니다. 계속 하시겠습니까?"
      let rtn = await $c.win.confirm($p, MSG_CM_CRM_005);
      if (!rtn) {
        // '자가'로 변경되었으면 '외주'로, '외주'로 바뀌었으면 '자가'로 변경
        return;
      }
    }
    lux_selfOutordClsCd.setSelectedIndex(idx);
    await scwin.f_selfOutorChange();
  }

  //README : tabControl이 onbeforeselect 핸들러에서는 async 선언하면 동작하지 않아서 옮기는 로직을 우선 실행 후 옮기기전 이벤트 전달 중단 후 옮기고 이벤트 전달 활성화 함.
  tab_main.setEventPause("onbeforeselect", true);
  await tab_main.setSelectedTabIndex(idx);
  tab_main.setEventPause("onbeforeselect", false);
};

//-------------------------------------------------------------------------
// 첫번째 그리드추가 - 코드 적용
//-------------------------------------------------------------------------
scwin.f_AddRow = async function (grd) {
  if (scwin.cvUpdate == false && scwin.cvNNew == false) return;

  //Mandatory 항목이 누락하지 않았는지 체크한다.
  let chk = await $c.gus.cfValidate($p, [em_fixWrkNo, em_fixWrkPlCd], null, true);
  if (!chk) return;
  let isSelf = tab_main.getSelectedTabIndex() == 0;
  let index = -1;
  switch (grd) {
    case 1:
      // 작업표준 목록
      index = ds_fix_work_standard.getRowCount();
      ds_fix_work_standard.insertRow(index);
      ds_fix_work_standard.setCellData(index, "fixWrkPlCd", em_fixWrkPlCd.getValue());
      ds_fix_work_standard.setCellData(index, "fixWrkNo", em_fixWrkNo.getValue());
      ds_fix_work_standard.setCellData(index, "homeClsCd", scwin.arg_homeClsCd || "");
      ds_fix_work_standard.setRowPosition(index);
      if (isSelf) gr_fix_work_standard.setFocusedCell(index, gr_fix_work_standard.getColumnIndex("fixWrkStndNo"));else gr_fix_work_standard2.setFocusedCell(index, gr_fix_work_standard2.getColumnIndex("fixWrkStndNo"));
      break;
    case 2:
      // 작업단위
      index = ds_fix_work_unit.getRowCount();
      ds_fix_work_unit.insertRow(index);
      ds_fix_work_unit.setCellData(index, "fixWrkPlCd", em_fixWrkPlCd.getValue());
      ds_fix_work_unit.setCellData(index, "fixWrkNo", em_fixWrkNo.getValue());
      ds_fix_work_unit.setCellData(index, "homeClsCd", scwin.arg_homeClsCd || "");
      ds_fix_work_unit.setCellData(index, "dayNgtClsCd", "D"); // 주야간구분 [D]주간
      ds_fix_work_unit.setCellData(index, "offDayClsCd", "D"); // 휴일구분   [D]평일
      ds_fix_work_unit.setRowPosition(index);
      if (isSelf) gr_fix_work_unit.setFocusedCell(index, gr_fix_work_unit.getColumnIndex("fixWrkUnitNo"));else gr_fix_work_unit2.setFocusedCell(index, gr_fix_work_unit2.getColumnIndex("fixWrkUnitNo"));
      break;
    case 3:
      // 정비사
      index = ds_fix_driver.getRowCount();
      ds_fix_driver.insertRow(index);
      ds_fix_driver.setCellData(index, "fixWrkPlCd", em_fixWrkPlCd.getValue());
      ds_fix_driver.setCellData(index, "fixWrkNo", em_fixWrkNo.getValue());
      ds_fix_driver.setCellData(index, "homeClsCd", scwin.arg_homeClsCd || "");
      ds_fix_driver.setCellData(index, "wrkStDt", ica_wrkStDt.getValue());
      ds_fix_driver.setCellData(index, "wrkStHh", em_wrkStHh.getValue());
      ds_fix_driver.setCellData(index, "wrkEndDt", ica_wrkEndDt.getValue());
      ds_fix_driver.setCellData(index, "wrkEndHh", em_wrkEndHh.getValue());
      ds_fix_driver.setRowPosition(index);
      if (ds_fix_work_unit.getRowCount() > 0) {
        let unitRowPos = ds_fix_work_unit.getRowPosition() ?? 0;
        ds_fix_driver.setCellData(index, "fixWrkUnitNo", ds_fix_work_unit.getCellData(unitRowPos, "fixWrkUnitNo"));
      }
      ds_fix_driver.setCellData(index, "wrkHhCnt", 0.5);
      scwin.f_calcWrkTime();
      gr_fix_driver.setFocusedCell(index, gr_fix_driver.getColumnIndex("fixWrkUnitNo"));
      break;
    case 4:
      // 수리순환품
      index = ds_repair_circula_parts.getRowCount();
      ds_repair_circula_parts.insertRow(index);
      ds_repair_circula_parts.setCellData(index, "fixWrkPlCd", em_fixWrkPlCd.getValue());
      ds_repair_circula_parts.setCellData(index, "fixWrkNo", em_fixWrkNo.getValue());
      ds_repair_circula_parts.setCellData(index, "homeClsCd", scwin.arg_homeClsCd || "");
      ds_repair_circula_parts.setRowPosition(index);
      if (isSelf) gr_repair_circula_parts.setFocusedCell(index, gr_repair_circula_parts.getColumnIndex("attDetClsCd"));else gr_repair_circula_parts2.setFocusedCell(index, gr_repair_circula_parts2.getColumnIndex("attDetClsCd"));
      break;
    case 5:
      // 소요부품
      index = ds_fix_work_parts.getRowCount();
      ds_fix_work_parts.insertRow(index);
      ds_fix_work_parts.setCellData(index, "fixWrkPlCd", em_fixWrkPlCd.getValue());
      ds_fix_work_parts.setCellData(index, "fixWrkNo", em_fixWrkNo.getValue());
      ds_fix_work_parts.setCellData(index, "inClsCd", "1");
      ds_fix_work_parts.setCellData(index, "homeClsCd", scwin.arg_homeClsCd || "");
      ds_fix_work_parts.setRowPosition(index);
      if (ds_fix_work_unit.getRowCount() > 0) {
        let unitRowPos2 = ds_fix_work_unit.getRowPosition() ?? 0;
        ds_fix_work_parts.setCellData(index, "fixWrkUnitNo", ds_fix_work_unit.getCellData(unitRowPos2, "fixWrkUnitNo"));
      }
      ds_fix_work_parts.setCellData(index, "realOutDt", ica_wrkEndDt.getValue());
      if (isSelf) gr_fix_work_parts.setFocusedCell(index, gr_fix_work_parts.getColumnIndex("fixWrkUnitNo"));else gr_fix_work_parts2.setFocusedCell(index, gr_fix_work_parts2.getColumnIndex("fixWrkUnitNo"));
      break;
  }
  scwin.updateRowCountDisplay();
};

//-------------------------------------------------------------------------
// 작업표준 목록의 작업표준코드에 해당하는 작업단위와 부품을 목록에 적용
//-------------------------------------------------------------------------
scwin.f_ApplyFixWorkStandard = async function () {
  // 신규이거나 수정 모드일 경우만 작업
  if (scwin.cvNNew == false && scwin.cvUpdate == false || ds_fix_work_standard.getRowCount() < 1) return;
  for (row = 0; row < ds_fix_work_standard.getRowCount(); row++) {
    if (ds_fix_work_standard.getCellData(row, "fixWrkStndNo") == "") return;
  }
  if (ds_fix_work_unit.getModifiedIndex().length > 0 || ds_fix_work_parts.getModifiedIndex().length > 0) {
    // "변경사항이 반영되지 않았습니다. 계속 하시겠습니까?"
    let confirm = await $c.win.confirm($p, MSG_CM_CRM_005);
    if (!confirm) {
      return;
    }
  }
  // 그리드에 해당하는 DataSet의 내용을 모두 Clear
  ds_fix_work_unit.removeAll();
  ds_fix_work_parts.removeAll();
  ds_fix_driver.removeAll();
  for (let row = 0; row < ds_fix_work_standard.getRowCount(); row++) {
    ds_fix_work_standard.setCellData(row, "eqCd", em_eqCd.getValue()); // 장비코드
    ds_fix_work_standard.setCellData(row, "homeClsCd", scwin.arg_homeClsCd || ""); // 소속구분코드
  }
  sbm_applyFixWorkStandard.userData1 = "noError";
  let rtn = await $c.sbm.execute($p, sbm_applyFixWorkStandard);
  let jsonRtn = rtn.responseJSON;
  if (jsonRtn.resultDataSet[0].Code != "0") {
    await $c.win.alert($p, jsonRtn.resultDataSet[1].Msg);
  }
  for (let row = 0; row < ds_fix_work_unit_apply.getRowCount(); row++) {
    ds_fix_work_unit_apply.setCellData(row, "dayNgtClsCd", "D");
    ds_fix_work_unit_apply.setCellData(row, "offDayClsCd", "D");
    ds_fix_work_unit_apply.setCellData(row, "wrkHhCnt", "0");
  }
  ds_fix_work_unit.setJSON(ds_fix_work_unit_apply.getAllJSON());
  ds_fix_work_unit.modifyAllStatus("C");
  ds_fix_work_unit.setRowPosition(0);

  // 정비사 설정.
  // 정비사 자동반영 ( 자가일때만 )

  if (lux_selfOutordClsCd.getValue() == "IN") {
    for (let row = 0; row < ds_fix_work_unit.getRowCount(); row++) {
      if (ds_fix_work_unit.getRowStatus(row) != "C" || ds_fix_work_unit.getCellData(row, "fixWrkUnitNo") == "") return;
      await scwin.f_AddRow(3);
      ds_fix_driver.setCellData(ds_fix_driver.getRowPosition(), "fixWrkUnitNo", ds_fix_work_unit.getCellData(row, "fixWrkUnitNo"));
    }
  }
  ds_fix_work_parts.setJSON(ds_fix_work_parts_apply.getAllJSON());
  ds_fix_work.setCellData(0, "applyFixWorkStandardYn", 1); // 작업표준적용여부
};

//-------------------------------------------------------------------------
// 작업단위 목록의 작업단위코드에 해당하는 부품을 목록에 적용
//-------------------------------------------------------------------------
scwin.f_applyFixWorkUnit = async function (row, fixWrkUnitNo) {
  sbm_applyFixWorkUnit.userData1 = "noError";
  sbm_applyFixWorkUnit.action = "/ps.eq.fixwrkmgnt.fixwrkmgnt.ApplyFixWorkUnitCMD.do?fixWorkUnitNumber=" + fixWrkUnitNo + "&homeClsCd=" + (scwin.arg_homeClsCd || "") + "&eqCd=" + em_eqCd.getValue() + "&fixWrkPlCd=" + em_fixWrkPlCd.getValue();
  let rtn = await $c.sbm.execute($p, sbm_applyFixWorkUnit);
  let jsonRtn = rtn.responseJSON;
  if (jsonRtn.resultDataSet[0].Code != "0") {
    await $c.win.alert($p, jsonRtn.resultDataSet[1].Msg);
  }
  let fixWrkPlCd = em_fixWrkPlCd.getValue();
  let fixWrkNo = em_fixWrkNo.getValue();
  let partRow = ds_fix_work_parts.getRowCount();
  for (let r = 0; r < ds_fix_work_parts_apply.getRowCount(); r++, partRow++) {
    ds_fix_work_parts.setRowPosition(ds_fix_work_parts.insertRow(partRow));
    ds_fix_work_parts.setCellData(partRow, "fixWrkPlCd", fixWrkPlCd);
    ds_fix_work_parts.setCellData(partRow, "fixWrkNo", fixWrkNo);
    ds_fix_work_parts.setCellData(partRow, "fixWrkUnitNo", ds_fix_work_parts_apply.getCellData(r, "fixWrkUnitNo"));
    ds_fix_work_parts.setCellData(partRow, "partCd", ds_fix_work_parts_apply.getCellData(r, "partCd"));
    ds_fix_work_parts.setCellData(partRow, "partNm", ds_fix_work_parts_apply.getCellData(r, "partNm"));
    ds_fix_work_parts.setCellData(partRow, "partUnitNm", ds_fix_work_parts_apply.getCellData(r, "partUnitNm"));
    ds_fix_work_parts.setCellData(partRow, "inClsCd", "1");
    ds_fix_work_parts.setCellData(partRow, "outUpr", ds_fix_work_parts_apply.getCellData(r, "outUpr"));
    ds_fix_work_parts.setCellData(partRow, "partQty", ds_fix_work_parts_apply.getCellData(r, "partQty"));
    ds_fix_work_parts.setCellData(partRow, "stockQty", ds_fix_work_parts_apply.getCellData(r, "stockQty"));
  }
};

//-------------------------------------------------------------------------
// 작업표전적용 버튼 관련
//-------------------------------------------------------------------------
scwin.f_ctrlApplyFixWorkStandardBtn = function (ctrl) {
  btnApplyFixWorkStandard.setDisabled(ctrl);
  btnApplyFixWorkStandard2.setDisabled(ctrl);
  udc_gr_fix_work_standard_bottomGrdBtn.setDisabled(ctrl);
  udc_gr_fix_work_standard2_bottomGrdBtn.setDisabled(ctrl);
};

//-------------------------------------------------------------------------
// 그리드 편집 관련
//-------------------------------------------------------------------------
scwin.f_ctrlGrdEnable = function (ctrl) {
  // 자가외주구분이 자가(IN) 일 경우
  if (lux_selfOutordClsCd.getValue() == "IN") {
    gr_fix_work_standard.setReadOnly("grid", !ctrl);
    gr_fix_work_unit.setReadOnly("grid", !ctrl);
    gr_fix_driver.setReadOnly("grid", !ctrl);
    gr_repair_circula_parts.setReadOnly("grid", !ctrl);
    gr_fix_work_parts.setReadOnly("grid", !ctrl);
    gr_fix_work_parts.setReadOnly("column", "capExpdYn", !ctrl);
    gr_fix_work_parts.setReadOnly("column", "fixWrkUnitNo", !ctrl);
    gr_fix_work_parts.setReadOnly("column", "partCd", !ctrl);
    gr_fix_work_parts.setReadOnly("column", "partQty", !ctrl);
    gr_fix_work_parts.setReadOnly("column", "inClsCd", !ctrl);
  } else {
    gr_fix_work_standard2.setReadOnly("grid", !ctrl);
    gr_fix_work_unit2.setReadOnly("grid", !ctrl);
    gr_repair_circula_parts2.setReadOnly("grid", !ctrl);
    gr_fix_work_parts2.setReadOnly("grid", !ctrl);
    gr_fix_work_parts2.setReadOnly("column", "capExpdYn", !ctrl);
    gr_fix_work_parts2.setReadOnly("column", "fixWrkUnitNo", !ctrl);
    gr_fix_work_parts2.setReadOnly("column", "partCd", !ctrl);
    gr_fix_work_parts2.setReadOnly("column", "partQty", !ctrl);
    gr_fix_work_parts2.setReadOnly("column", "inClsCd", !ctrl);
  }
};

//-------------------------------------------------------------------------
// 그리드 row 추가/삭제/취소 버튼 관련
//-------------------------------------------------------------------------
scwin.f_ctrlGrdBtn = function (ctrl) {
  udc_gr_fix_work_standard_bottomGrdBtn.setDisabled(ctrl);
  udc_gr_fix_work_unit_bottomGrdBtn.setDisabled(ctrl);
  btn_rowCopy.setDisabled(ctrl);
  udc_gr_fix_driver_bottomGrdBtn.setDisabled(ctrl);
  udc_gr_repair_circula_parts_bottomGrdBtn.setDisabled(ctrl);
  udc_gr_fix_work_parts_bottomGrdBtn.setDisabled(ctrl);
  udc_gr_fix_work_standard2_bottomGrdBtn.setDisabled(ctrl);
  udc_gr_repair_circula_parts2_bottomGrdBtn.setDisabled(ctrl);
  udc_gr_fix_work_unit2_bottomGrdBtn.setDisabled(ctrl);
  udc_gr_fix_work_parts2_bottomGrdBtn.setDisabled(ctrl);
};

//-------------------------------------------------------------------------
// 전도금여부 대해 필수 입력항목 설정
//-------------------------------------------------------------------------
scwin.f_advcdProcYn = function () {};

//-------------------------------------------------------------------------
// 입출고필요여부에 대해 필수 입력항목 설정
//-------------------------------------------------------------------------
scwin.f_ioNesYn = function () {
  let checked = chk_ioNesYn.getValue() == "1";
  if (checked) {
    ica_inDt.options.validExp = "입고일:yes:date=YYYYMMDD";
    em_inHh.options.validExp = "입고시간:yes:date=HHmm";
    ica_outDt.options.validExp = "출고일:yes:date=YYYYMMDD";
    em_outHh.options.validExp = "출고시간:yes:date=HHmm";

    // mandatory : 필수
    ica_inDt.setMandatory(true);
    em_inHh.setMandatory(true);
    ica_outDt.setMandatory(true);
    em_outHh.setMandatory(true);
    ica_inDt.setReadOnly(false);
    em_inHh.setReadOnly(false);
    ica_outDt.setReadOnly(false);
    em_outHh.setReadOnly(false);
  } else {
    ica_inDt.options.validExp = "입고일:no:date=YYYYMMDD";
    em_inHh.options.validExp = "입고시간:no:date=HHmm";
    ica_outDt.options.validExp = "출고일:no:date=YYYYMMDD";
    em_outHh.options.validExp = "출고간:no:date=HHmm";
    ica_inDt.setValue("");
    em_inHh.setValue("");
    ica_outDt.setValue("");
    em_outHh.setValue("");

    // mandatory : 옵션
    ica_inDt.setMandatory(false);
    em_inHh.setMandatory(false);
    ica_outDt.setMandatory(false);
    em_outHh.setMandatory(false);
    ica_inDt.setReadOnly(true);
    em_inHh.setReadOnly(true);
    ica_outDt.setReadOnly(true);
    em_outHh.setReadOnly(true);
  }
  $c.gus.cfRefreshMandSign($p, ['grp_total']); // mandatory 적용
};

//-------------------------------------------------------------------------
// 정비종류에 따라 필수 입력항목 설정
//-------------------------------------------------------------------------
scwin.f_ctrlFixKndCd = async function () {
  chk_ioNesYn.setValue("1"); // 입출고 필요 여부
  $c.gus.cfDisableObjects($p, [chk_ioNesYn]);
  $c.gus.cfDisableObjects($p, [txt_accdRecptNo, img_accdRecptNo]);
  txt_accdRecptNo.setMandatory(false);
  txt_accdRecptNo.options.validExp = "사고번호:no:";
  txt_accdRecptNo.setTitle("사고번호");
  let fixKndCdVal = lux_fixKndCd.getValue();
  // 정비종류가 '사고(02)' 일경우에만 사고번호가 필수 입력 항목
  if (fixKndCdVal == "02") {
    $c.gus.cfEnableObjects($p, [txt_accdRecptNo, img_accdRecptNo]);
    txt_accdRecptNo.setMandatory(true);
    txt_accdRecptNo.options.validExp = "사고번호:yes:";
    txt_accdRecptNo.setTitle("사고번호");

    // 수리순환품 관련
    em_circulPartCd.setMandatory(false);
    em_circulPartCd.options.validExp = "";
    $c.gus.cfDisableObjects($p, [em_circulPartCd, txt_circulPartNm, img_circulPartCd]);
  }
  // 정비종류가 '순환품(04)' 일경우에만 수리순환품이 필수 입력 항목
  else if (fixKndCdVal == "04") {
    em_circulPartCd.setMandatory(true);
    em_circulPartCd.options.validExp = "수리순환품:yes:";
    $c.gus.cfEnableObjects($p, [em_circulPartCd, txt_circulPartNm, img_circulPartCd]);
    em_circulPartCd.focus();
    chk_ioNesYn.setValue("0"); // 입출고 필요 여부
    $c.gus.cfDisableObjects($p, [chk_ioNesYn]);
    scwin.f_ioNesYn(); // 입출고필요여부에 대해 필수 입력항목 설정

    txt_damageWrongTyp.setValue("");
  } else if (fixKndCdVal == "13") {
    // 정기점검
    lux_passYn.setValue("1");
    lux_inspKndCd.setValue("2");
    ica_nextExpireDt.setMandatory(false);
    $c.gus.cfEnableObjects($p, [ica_nextExpireDt]);
    txt_damageWrongTyp.setValue("");
  } else if (fixKndCdVal == "14") {
    // 정기검사
    lux_passYn.setValue("1");
    lux_inspKndCd.setValue("1");
    ica_nextExpireDt.setMandatory(true);
    ica_nextExpireDt.options.validExp = "다음 검사 예정일:yes";
    $c.gus.cfEnableObjects($p, [ica_nextExpireDt]);
    txt_damageWrongTyp.setValue("");
  } else if (fixKndCdVal == "15") {
    // 정밀검사
    lux_passYn.setValue("1");
    lux_inspKndCd.setValue("3");
    ica_nextExpireDt.setMandatory(true);
    ica_nextExpireDt.options.validExp = "다음 검사 예정일:yes";
    $c.gus.cfEnableObjects($p, [ica_nextExpireDt]);
    txt_damageWrongTyp.setValue("");
  } else {
    txt_damageWrongTyp.setValue("");
    em_circulPartCd.setMandatory(false);
    em_circulPartCd.options.validExp = "";
    $c.gus.cfDisableObjects($p, [em_circulPartCd, txt_circulPartNm, img_circulPartCd]);
  }
  await scwin.f_initFixResult(fixKndCdVal); // 검사결과 관련 초기화
  scwin.f_ioNesYn(); // 입출고필요여부에 대해 필수 입력항목 설정
  $c.gus.cfRefreshMandSign($p, ['grp_total']); // mandatory 적용
};

//-------------------------------------------------------------------------
// 검사결과 관련 초기화
//-------------------------------------------------------------------------
scwin.f_initFixResult = async function (fixKndCd) {
  // 정비종류가 정기점검(13), 정기검사(14), 정밀검사(15) 일 경우
  let fixKndCdVal = lux_fixKndCd.getValue();
  if (fixKndCdVal == "13" || fixKndCdVal == "14" || fixKndCdVal == "15") {
    return;
  }
  await scwin.f_ViewTab(lux_selfOutordClsCd.getSelectedIndex()); // 자가외주구분에 따라 탭 변경
  $c.gus.cfInitObjects($p, tb_fix_result, null); // 검사결과 초기화

  lux_passYn.setSelectedIndex("-1"); // 검사결과
  lux_inspKndCd.setSelectedIndex("-1"); // 검사종류
};

// 작업장 팝업 콜백 함수
scwin.fixWrkPl_commonPopupCallbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, em_fixWrkPlCd, txt_fixWrkPlNm);
  if (rtnList != null && rtnList[0] != "N/A") {
    em_adptWages.setValue(parseInt(rtnList[3])); // 적용공임	
  }
};

//-------------------------------------------------------------------------
// 자가외주구분에 대해 필수 입력항목 설정
//-------------------------------------------------------------------------
scwin.f_selfOutordCls = async function () {
  // 자가외주구분이 외주(OT) 일경우는 외주정비거래처는 필수 입력 항목
  if (lux_selfOutordClsCd.getValue() == "OT") {
    em_outordFixClntNo.options.validExp = "외주정비거래처:yes:";
    if (scwin.cvUpdate == true || scwin.cvNNew == true) {
      $c.gus.cfEnableObjects($p, [em_outordFixClntNo, txt_outordFixClntNm, img_outordFixClntNo]);
    } else {
      $c.gus.cfDisableObjects($p, [em_outordFixClntNo, txt_outordFixClntNm, img_outordFixClntNo]);
    }
    await scwin.f_ViewTab(1); // 외주_탭

    txt_outordFixClntNm.setMandatory(true); // 외주정비처-필수
  } else {
    em_outordFixClntNo.options.validExp = "";
    em_outordFixClntNo.setValue("");
    txt_outordFixClntNm.setValue("");
    await scwin.f_ViewTab(0); // 자가_탭
    em_outordFixClntNo.options.validExp = "외주정비거래처:no:";
    $c.gus.cfDisableObjects($p, [em_outordFixClntNo, txt_outordFixClntNm, img_outordFixClntNo]);
    txt_outordFixClntNm.setMandatory(false); // 외주정비처-옵션
  }
  $c.gus.cfRefreshMandSign($p, ['grp_total']); // mandatory 적용
};

//-------------------------------------------------------------------------
// 소요부품에서 입고구분에 따라 거래처와 재고를 설정한다
//-------------------------------------------------------------------------
scwin.f_RetrieveStockCustomer = async function (row, inClsCd) {
  switch (inClsCd) {
    case "1":
      // 일반(1)
      if (ds_fix_work_parts.getCellData(row, "partCd") == "") return; // 부품이 없을 경우 재고 조회 취소

      await scwin.f_openCommPopUpGrid(7, row, 'T', inClsCd);
      break;
    case "2":
      // 무상(2)
      if (ds_fix_work_parts.getCellData(row, "partCd") == "") {
        ds_fix_work_parts.setCellData(row, "clntNo", ""); // 거래처
        ds_fix_work_parts.setCellData(row, "clntNm", ""); // 거래처
        ds_fix_work_parts.setCellData(row, "outUpr", 0); // 출고예상단가
        ds_fix_work_parts.setCellData(row, "totAmt", 0); // 금액
        ds_fix_work_parts.setCellData(row, "vatAmt", 0); // VAT
        ds_fix_work_parts.setCellData(row, "stockQty", 0); // 현재고
      }
      await scwin.f_openCommPopUpGrid(7, row, 'T', inClsCd);
      break;
    case "3":
      // 선입고(3)
      if (ds_fix_work_parts.getCellData(row, "partCd") == "") return; // 부품이 없을 경우 재고 조회 취소

      await scwin.f_openCommPopUpGrid(8, row, 'T', inClsCd);
      break;
  }
};

//-------------------------------------------------------------------------
// OZ 리포트 : 정비지시서
//-------------------------------------------------------------------------
scwin.f_OzReport = function () {
  let odiName = "eq_330_01_01b";
  let reportName = "/ps/eq/fixwrkmgnt/fixwrkmgnt/eq_330_01_01b.ozr";
  let odiParam = {
    "fixWrkPlCd": em_fixWrkPlCd.getValue(),
    "fixWrkNo": em_fixWrkNo.getValue(),
    "selfOutordClsCd": lux_selfOutordClsCd.getValue()
  };
  let opts = {
    type: 'viewer',
    printMode: 'view',
    exportFilename: '',
    exportMode: 'view'
  };
  let data = {
    "odiName": odiName,
    "reportName": reportName,
    "odiParam": odiParam,
    "viewerParam": {
      "useprogressbar": false
    },
    "formParam": {}
  };
  if (cb_printCheck.getValue() == "1" && cb_previewCheck1.getValue() == "1") {
    // 인쇄옵션, 미리보기 둘다 체크된 경우
    data.viewerParam.mode = "preview";
    $c.ext.openOzReport($p, data, opts);
  } else if (cb_printCheck.getValue() == "1") {
    // 인쇄옵션만 체크된 경우
    $c.ext.printOzReport($p, data, opts);
  } else if (cb_previewCheck1.getValue() == "1") {
    // 미리보기만 체크된 경우
    opts.printMode = 'silent';
    $c.ext.openOzReport($p, data, opts);
  } else {
    opts.type = "";
    opts.printMode = "";
    opts.exportFormat = "";
    opts.exportMode = "";
    $c.ext.printOzReport($p, data, opts);
  }
};
scwin.f_calcWrkTime = function () {
  // 작업단위별로 정비시간을 합산하여 해당 작업단위의 실제 정비시간을 update해준다.

  /*                                          /* ds_fix_driver
  * ds_fix_work_unit                          *  id=fixWrkUnitNo name=작업단위
  *  id=fixWrkUnitNo name=작업단위            *  id=fixEmpNm     name=정비사
  *  id=fixWrkUnitNm name=작업단위명          *  id=wrkHhCnt     name=정비시간
  *  id=stndWrkHhCnt name=표준정비시간        *  id=wrkStDt      name=시작일자
  *  id=dayNgtClsCd  name=주야간구분          *  id=wrkStHh      name=시작시간
  *  id=offDayClsCd  name=휴일구분            *  id=wrkEndDt     name=종료일자
  *  id=wrkHhCnt     name=실제정비시간        *  id=wrkEndHh     name=종료시간 
  *  id=bilgWages    name=청구공임            *  id=fixEmpNo     name=정비사 
  *                                          */

  // 작업단위의 실제정비시간을 clear
  let fixWorkUnitCount = ds_fix_work_unit.getRowCount();
  for (let i = 0; i < fixWorkUnitCount; i++) {
    ds_fix_work_unit.setCellData(i, "wrkHhCnt", 0);
  }

  // 정비사 DataSet
  let fixDriverCount = ds_fix_driver.getRowCount();
  for (let i = 0; i < fixDriverCount; i++) {
    if (ds_fix_driver.getRowStatus(i) == "D") continue;
    let unitNo = ds_fix_driver.getCellData(i, "fixWrkUnitNo");
    let unitIdx = -1;
    for (let j = 0; j < fixWorkUnitCount; j++) {
      if (ds_fix_work_unit.getCellData(j, "fixWrkUnitNo") == unitNo) {
        unitIdx = j;
        break;
      }
    }
    if (unitIdx >= 0) {
      let cur = parseFloat(ds_fix_work_unit.getCellData(unitIdx, "wrkHhCnt") || "0");
      let add = parseFloat(ds_fix_driver.getCellData(i, "wrkHhCnt") || "0");
      ds_fix_work_unit.setCellData(unitIdx, "wrkHhCnt", cur + add);
    }
  }
};

//-------------------------------------------------------------------------
// 소요부품에서 입고구분에 따라 거래처와 재고를 설정한다
//-------------------------------------------------------------------------
scwin.f_setIntendDt = function () {
  if (ica_wrkIntendDt.getValue() == "" && ica_wrkStDt.getValue() != "") {
    ica_wrkIntendDt.setValue(ica_wrkStDt.getValue());
  }
  if (ica_endIntendDt.getValue() == "" && ica_wrkEndDt.getValue() != "") {
    ica_endIntendDt.setValue(ica_wrkEndDt.getValue());
  }
};

//-------------------------------------------------------------------------
// 정비정산정보 계산
//-------------------------------------------------------------------------
scwin.f_setAdjustment = function () {
  // 부품비 합계
  let partAmt = 0;
  let vatAmt = 0;
  for (let row = 0; row < ds_fix_work_parts.getRowCount(); row++) {
    partAmt += parseInt(ds_fix_work_parts.getCellData(row, "totAmt") || "0");
  }
  em_partAmt.setValue(partAmt);
  if (em_wages.getValue() == "") {
    em_wages.setValue("0");
  }
  if (lux_selfOutordClsCd.getValue() == "IN") {
    // 자가일때
    // 공임 = 적용공임 * 표준정비시간
    let wages = 0;
    for (let row = 0; row < ds_fix_work_unit.getRowCount(); row++) {
      if (em_adptWages.getValue() == "") em_adptWages.setValue("0");
      if (em_adptWages.getValue() != "0" && ds_fix_work_unit.getCellData(row, "wrkHhCnt") != 0) {
        wages += parseInt(em_adptWages.getValue()) * parseInt(ds_fix_work_unit.getCellData(row, "wrkHhCnt"));
      }
    }
    em_wages.setValue(wages);
    // 총금액 = 부품비 
    em_totAmt.setValue(parseInt(em_partAmt.getValue())); //자가일때는 부품비용만
  } else {
    // 외주일때는 청구공임의 합
    let wages = 0;
    for (let row = 0; row < ds_fix_work_unit.getRowCount(); row++) {
      // 청구공임
      if (ds_fix_work_unit.getCellData(row, "qty") != 0 && ds_fix_work_unit.getCellData(row, "upr") != 0) {
        ds_fix_work_unit.setCellData(row, "bilgWages", parseInt(ds_fix_work_unit.getCellData(row, "qty")) * parseInt(ds_fix_work_unit.getCellData(row, "upr")));
        ds_fix_work_unit.setCellData(row, "vatAmt", ds_fix_work_unit.getCellData(row, "bilgWages") / 10);
      }
      wages += Number(ds_fix_work_unit.getCellData(row, "bilgWages"));
      vatAmt += Number(ds_fix_work_unit.getCellData(row, "vatAmt"));
    }
    em_wages.setValue(wages);
    // 총금액 = 부품비 + 공임
    em_totAmt.setValue(parseInt(em_wages.getValue()) + parseInt(em_partAmt.getValue())); // 외주일때는 부품과 공임
  }

  // VAT금액
  if (em_totAmt.getValue() != "") {
    em_vatAmt.setValue(Math.trunc(parseFloat(em_totAmt.getValue()) / 10));
    if (lux_selfOutordClsCd.getValue() == "OT" && vatAmt != 0) {
      em_vatAmt.setValue(Math.trunc(vatAmt));
    }
  }
};

//-------------------------------------------------------------------------
// 자가 외주 구분 변경
//-------------------------------------------------------------------------
scwin.f_selfOutorChange = async function () {
  // 그리드에 해당하는 DataSet의 내용을 모두 Clear
  ds_fix_work_standard.removeAll();
  ds_fix_work_unit.removeAll();
  ds_fix_driver.removeAll();
  ds_repair_circula_parts.removeAll();
  ds_fix_work_parts.removeAll();
  em_wages.setValue("0");
  em_totAmt.setValue("0");
  em_vatAmt.setValue("0");
  em_partAmt.setValue("0");
  await scwin.f_selfOutordCls(); // 자가외주구분에 대해 필수 입력항목 설정
};

//-------------------------------------------------------------------------
// 대표작업장 조회
//-------------------------------------------------------------------------
scwin.f_retrieveRepFixWrkPl = async function () {
  ds_re_pl.set("wrkPlCd", em_fixWrkPlCd.getValue());
  ds_re_pl.set("homeClsCd", ds_fix_work.getCellData(0, "homeClsCd"));
  sbm_repFixWrkPl.userData1 = "noError";
  let rtn = await $c.sbm.execute($p, sbm_repFixWrkPl);
  let jsonRtn = rtn.responseJSON;
  if (jsonRtn.resultDataSet[0].Code != "0") {
    await $c.win.alert($p, jsonRtn.resultDataSet[1].Msg);
  }
  if (ds_work_pl.getRowCount() == 0) {
    await $c.win.alert($p, "해당하는 작업장이 없습니다.");
    return "";
  }
  if (ds_work_pl.getCellData(0, "repFixWrkPlCd").trim() == "") {
    await $c.win.alert($p, "작업장에 해당하는 대표작업장이 없습니다.");
    return "";
  }
  return ds_work_pl.getCellData(0, "repFixWrkPlCd").trim();
};

//-------------------------------------------------------------------------
// 정비사 행복사
//-------------------------------------------------------------------------
scwin.f_copyFixDriver = function () {
  let copyRow = ds_fix_driver.getRowPosition();
  let newRow = ds_fix_driver.insertRow();
  ds_fix_driver.setRowPosition(newRow);
  ds_fix_driver.setCellData(newRow, "fixWrkPlCd", ds_fix_driver.getCellData(copyRow, "fixWrkPlCd"));
  ds_fix_driver.setCellData(newRow, "fixWrkNo", ds_fix_driver.getCellData(copyRow, "fixWrkNo"));
  ds_fix_driver.setCellData(newRow, "homeClsCd", ds_fix_driver.getCellData(copyRow, "homeClsCd"));
  ds_fix_driver.setCellData(newRow, "wrkStDt", ds_fix_driver.getCellData(copyRow, "wrkStDt"));
  ds_fix_driver.setCellData(newRow, "wrkStHh", ds_fix_driver.getCellData(copyRow, "wrkStHh"));
  ds_fix_driver.setCellData(newRow, "wrkEndDt", ds_fix_driver.getCellData(copyRow, "wrkEndDt"));
  ds_fix_driver.setCellData(newRow, "wrkEndHh", ds_fix_driver.getCellData(copyRow, "wrkEndHh"));
  ds_fix_driver.setCellData(newRow, "fixWrkUnitNo", ds_fix_driver.getCellData(copyRow, "fixWrkUnitNo"));
  ds_fix_driver.setCellData(newRow, "wrkHhCnt", 0.5);
  gr_fix_driver.setFocusedCell(newRow, gr_fix_driver.getColumnIndex("fixWrkUnitNo"));
  scwin.f_calcWrkTime();
};

//-------------------------------------------------------------------------
// 부가세 ±50 체크 
//-------------------------------------------------------------------------
scwin.f_vatChk = async function () {
  let spplyAmt = Number(em_wages.getValue() ?? 0); // 공임
  let vatAmt = Number(em_vatAmt.getValue() ?? 0); // 입력된 부가세
  let chkSpplyAmt = vatAmt * 10;
  let tmpVat = Math.round(spplyAmt * 0.1); // 실제 부가세
  let absAmt = Math.abs(chkSpplyAmt - spplyAmt);
  if (absAmt > 50) {
    let strTmpVat = tmpVat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 천단위 콤마
    await $c.win.alert($p, "입력한 부가세액은 공급금액의 10%금액과 차이 ±50원 이내이어햐 합니다.(정상부가세액 : " + strTmpVat + ")");
    return true;
  } else {
    return false;
  }
};

//-------------------------------------------------------------------------
// function desc : 파일 첨부하기
//-------------------------------------------------------------------------    
scwin.f_fileSet = async function () {
  if (txt_vehclNo.getValue() == "") {
    await $c.win.alert($p, "차량번호를 먼저 입력해주세요.");
    return;
  }
  const vehclNo = txt_vehclNo.getValue();
  const displayFileName = txt_fileNm.getValue() || "자동차등록증_" + vehclNo;
  const popupParam = {
    popupTitle: "자동차등록증 업로드",
    fileNameLabel: "파일명",
    fileName: displayFileName,
    filePath: scwin._fileSavePath,
    fileSize: scwin._txt_fileSiz,
    subDir: "/ps/eq/adjmmgnt/fixrslts"
  };
  const popupOption = {
    id: "popEq3300104bSingleFile",
    popupName: "자동차등록증 업로드",
    type: "browserPopup",
    width: 900,
    height: 500,
    modal: true,
    resizable: "yes",
    scroll: "yes",
    status: "no"
  };
  let resultList = await $c.win.openPopup($p, "/ui/cm/zz/commonSingleFilePopup.xml", popupOption, popupParam);
  if (resultList != null) {
    if (resultList[0] != "" && resultList[0] != "undefined") {
      txt_fileNm.setValue(resultList[1]);
      scwin._fileSavePath = resultList[0];
      scwin._txt_fileSiz = resultList[2];
      if (ds_fix_work.getRowCount() > 0) {
        ds_fix_work.setCellData(0, "fileNm", resultList[1]);
        ds_fix_work.setCellData(0, "fileSavePath", resultList[0]);
        ds_fix_work.setCellData(0, "fileSiz", resultList[2]);
      }
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_Download
//-------------------------------------------------------------------------
scwin.f_Download = async function () {
  if (txt_fileNm.getValue() == "") {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_056, "첨부파일"));
    return;
  } else {
    let fileName = txt_fileNm.getValue();
    let filePath = scwin._fileSavePath;
    if (filePath.trim().length == 0) {
      await $c.win.alert($p, "해당 파일이 등록되어 있지 않습니다.");
    } else {
      if (filePath.indexOf(".") > 0) {
        fileName += filePath.substring(filePath.indexOf("."), filePath.indexOf(".") + 4);
        $c.gus.cfDownloadFile($p, fileName, filePath);
      }
    }
  }
};

/////////////////////////////////////////////////////////////////////// 여기까지 작업
///////////////////////////////////////////////////////////////////////////////////

//// 장비코드
scwin.udc_eqCd_onblurNameEvent = async function () {
  await scwin.f_chkOpenCommonPopUp(2, this, txt_vehclNo);
};
scwin.udc_eqCd_onviewchangeNameEvent = async function () {
  await scwin.f_chkOpenCommonPopUp(2, this, em_eqCd, false);
};
scwin.udc_eqCd_onclickEvent = async function () {
  await scwin.f_openCommonPopUp(2, em_eqCd.getValue(), txt_vehclNo.getValue(), 'F', 'T');
};

// 장비코드 팝업 콜백 함수
scwin.eq_commonPopupCallbackFunc = async function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    em_eqCd.setValue(rtnList[0]); //장비코드[0]
    txt_vehclNo.setValue(rtnList[1]); //차량FULL번호[1]
    scwin._vehclShortCd = rtnList[2]; //차량단축코드[2]
    ica_rglintInspExpireDt.setValue(rtnList[4]); //정기검사만료일
    txt_eqClssNm.setValue(rtnList[5]); //분류[5]
    txt_eqKndNm.setValue(rtnList[6]); //종류[6]
    txt_eqModelNm.setValue(rtnList[3]); //모델명[3]
    ica_rglintChkExpireDt.setValue(rtnList[7]); //정기점검만료일
    txt_acctDeptNm.setValue(rtnList[8]); //귀속부서
    txt_assgnLobranNm.setValue(rtnList[9]); //점소명[9]

    let condition = "?";
    let vEqCd = rtnList[0];
    let vEqClssCd = "";
    condition += "sysCls=0" + "&qryCond=1" + "&qryCntn=" + vEqCd + "&eqClssCd=" + vEqClssCd + "&eqDelYn=0";
    // dma_fixEquipment.set("sysCls", 0);
    // dma_fixEquipment.set("qryCond", 1);
    // dma_fixEquipment.set("qryCntn", vEqCd);
    // dma_fixEquipment.set("eqClssCd", vEqClssCd);
    // dma_fixEquipment.set("eqDelYn", 0);

    sbm_fixEquipment.userData1 = "noError";
    sbm_fixEquipment.action = "/cm.bc.eq.eqmgnt.cmd.RetrieveFixEquipmentListCMD.do" + condition;
    let fixEquipmentValue = await $c.sbm.execute($p, sbm_fixEquipment);
    let response = fixEquipmentValue.responseJSON;
    if (response.resultDataSet[0].Code == '0') {
      let v_em_mntnInspExpireDt = response.GAUCE[0].mntnInspExpireDt ?? "";
      ica_mntnInspExpireDt.setValue(v_em_mntnInspExpireDt); //종합검사만료일
    } else {
      await $c.win.alert($p, response.resultDataSet[1].Msg);
    }
    if (scwin.arg_homeClsCd == "LO") {
      await scwin.f_openCommonPopUp(7, em_eqCd.getValue(), '', 'T', 'F');
    }
  } else {
    em_eqCd.setValue(""); //장비코드[0]
    txt_vehclNo.setValue(""); //차량FULL번호[1]
    scwin._vehclShortCd = ""; //차량단축코드[2]
    ica_rglintInspExpireDt.setValue(""); //정기검사만료일
    txt_eqClssNm.setValue(""); //분류[5]
    txt_eqKndNm.setValue(""); //종류[6]
    txt_eqModelNm.setValue(""); //모델명[3]
    ica_rglintChkExpireDt.setValue(""); //정기점검만료일
    txt_acctDeptNm.setValue(""); //귀속부서명
    txt_assgnLobranNm.setValue(""); //점소명[9]
    ica_mntnInspExpireDt.setValue(""); //종합검사만료일            
  }
};

////장비등록번호
scwin.udc_eq_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(2, em_eqCd, txt_vehclNo);
};
scwin.udc_eq_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(2, em_eqCd.getValue(), txt_vehclNo.getValue(), 'F', 'T');
};
scwin.udc_eq_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(2, txt_vehclNo, em_eqCd, false);
};

//// 외주정비거래처
scwin.udc_outordFixClnt_onblurNameEvent = async function () {
  await scwin.f_chkOpenCommonPopUp(3, em_outordFixClntNo, txt_outordFixClntNm);
};
scwin.udc_outordFixClnt_onviewchangeNameEvent = async function () {
  await scwin.f_chkOpenCommonPopUp(3, txt_outordFixClntNm, em_outordFixClntNo, true);
};
scwin.udc_outordFixClnt_onclickEvent = async function () {
  await scwin.f_openCommonPopUp(3, em_outordFixClntNo.getValue(), txt_outordFixClntNm.getValue(), 'F', 'T');
};

// 외주정비거래처 팝업 콜백 함수
scwin.outordFixClnt_commonPopupCallbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, em_outordFixClntNo, txt_outordFixClntNm);
};

//// 사고번호
scwin.udc_accdRecpt_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(6, txt_accdRecptNo, null, true);
};
scwin.udc_accdRecpt_onclickEvent = function (info) {
  scwin.f_openCommonPopUp(6, txt_accdRecptNo.getValue(), '', 'F', 'T');
};

//// 수리순환부품
scwin.udc_circulPart_onblurNameEvent = async function () {
  await scwin.f_chkOpenCommonPopUp(4, em_circulPartCd, txt_circulPartNm);
};
scwin.udc_circulPart_onviewchangeNameEvent = async function () {
  await scwin.f_chkOpenCommonPopUp(4, txt_circulPartNm, em_circulPartCd, true);
};
scwin.udc_circulPart_onclickEvent = async function () {
  await scwin.f_openCommonPopUp(4, em_circulPartCd.getValue(), txt_circulPartNm.getValue(), 'F', 'T');
};
// 수리순환부품 팝업 콜백 함수
scwin.circulPart_commonPopupCallbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, em_circulPartCd, txt_circulPartNm);
};

//// 검사대행업체 
scwin.udc_inspAgencyClnt_onblurNameEvent = function () {};
scwin.udc_inspAgencyClnt_onviewchangeNameEvent = function () {};
scwin.udc_inspAgencyClnt_onclickEvent = async function () {
  await scwin.f_openCommonPopUp(5, em_inspAgencyClntNo.getValue(), txt_inspAgencyClntNm.getValue(), 'F', 'T');
};
// 검사대행업체 팝업 콜백 함수
scwin.inspAgencyClnt_commonPopupCallbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, em_inspAgencyClntNo, txt_inspAgencyClntNm);
  if (rtnList != null && rtnList[0] != "N/A") {
    em_inspCost.focus();
  }
};

// 사고번호 팝업 콜백 함수
scwin.accdRecpt_commonPopupCallbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, txt_accdRecptNo, null, [txt_damageWrongTyp]);
};

// 총가동시간 필수 여부 팝업 콜백 함수
scwin.eqTotTime_commonPopupCallbackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ds_fix_work.setCellData(0, "totTimeYn", rtnList[7]);
  }
};

//자동차등록증 첨부 버튼 클릭 핸들러
scwin.img_fileSet_onclick = async function (e) {
  await scwin.f_fileSet();
};

//자동차등록증 다운로드 버튼 클릭 핸들러
scwin.bFile05_onclick = async function (e) {
  let fileName = txt_fileNm.getValue();
  if (fileName == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["첨부파일"]);
    return;
  }
  let filePath = ds_fix_work.getCellData(0, "fileSavePath");
  if (filePath.trim().length == 0) {
    await $c.win.alert($p, "해당 파일이 등록되어 있지 않습니다.");
    return;
  }
  if (filePath.indexOf(".") > 0) {
    fileName += filePath.substring(filePath.indexOf("."), filePath.indexOf(".") + 4);
    $c.gus.cfDownloadFile($p, fileName, filePath);
  }
};
scwin.afterSaveAction = async function (result) {
  let body = result.responseJSON;
  if (body.resultDataSet[0].Code != "0") {
    await $c.win.alert($p, body.resultDataSet[1].Msg);
    return false;
  }
  if (body.OUT_DS1 != null) {
    ds_fix_work_no.setJSON(body.OUT_DS1);
    let fixWrkNo = ds_fix_work_no.getCellData(0, "fixWrkNo");
    em_fixWrkNo.setValue(fixWrkNo);
  }
  if (scwin.cvDelete == true) {
    await $c.win.alert($p, MSG_CM_INF_004); // 성공적으로 삭제하였습니다
  } else {
    await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  }
  return true;
};

//정비종류 변경시
scwin.lux_fixKndCd_onchange = async function (e) {
  // 정비종류에 따라 필수 입력항목 설정
  await scwin.f_ctrlFixKndCd();
};

//자가외주구분 변경시
scwin.lux_selfOutordClsCd_onchange = async function (e) {
  if (ds_fix_work_standard.getModifiedIndex().length > 0 || ds_fix_work_unit.getModifiedIndex().length > 0 || ds_fix_driver.getModifiedIndex().length > 0 || ds_repair_circula_parts.getModifiedIndex().length > 0 || ds_fix_work_parts.getModifiedIndex().length > 0) {
    //"변경사항이 반영되지 않았습니다. 계속 하시겠습니까?"
    let rtn = await $c.win.confirm($p, MSG_CM_CRM_005);
    if (!rtn) {
      // '자가'로 변경되었으면 '외주'로, '외주'로 바뀌었으면 '자가'로 변경
      if (lux_selfOutordClsCd.getSelectedIndex() == 0) lux_selfOutordClsCd.setSelectedIndex(1); // 외주
      else lux_selfOutordClsCd.setSelectedIndex(0); // 자가
      return;
    }
  }
  await scwin.f_selfOutorChange();
};

//작업표준적용버튼
scwin.btnApplyFixWorkStandard_onclick = function (e) {
  scwin.f_ApplyFixWorkStandard();
};

//작업표준 Grid PopUp
scwin.gr_fix_work_standard_openPopup = async function (rowIndex, colId, nowValue) {
  await scwin.f_openCommPopUpGrid(1, rowIndex, 'F');
};

//작업표준 Grid PopUp : 코드 입력후 Focus 이동시
scwin.gr_fix_work_standard_oneditend = async function (row, columnIndex, newData) {
  if (row > -1 && ds_fix_work_standard.getRowCount() > row) {
    let colId = gr_fix_work_standard.getColumnID(columnIndex);
    let oldData = ds_fix_work_standard.getCellData(row, colId);
    switch (colId) {
      case "fixWrkStndNo":
        if (newData != "" && newData != oldData) {
          ds_fix_work_standard.setCellData(row, "wrkStndNm", "");
          await scwin.f_openCommPopUpGrid(1, row, 'T', newData);
        } else if (newData == "") {
          ds_fix_work_standard.setCellData(row, "fixWrkStndNo", "");
          ds_fix_work_standard.setCellData(row, "wrkStndNm", "");
        }
        break;
    }
  }
};

//작업단위 Grid PopUp
scwin.gr_fix_work_unit_openPopup = async function (rowIndex, colId, nowValue) {
  if (nowValue != "") {
    return;
  }
  await scwin.f_openCommPopUpGrid(2, rowIndex, 'F');
  if (lux_selfOutordClsCd.getValue() == "IN") {
    if (ds_fix_work_unit.getRowStatus(rowIndex) != "C") return;
    if (ds_fix_work_unit.getCellData(rowIndex, "fixWrkUnitNo") == "") return;
    await scwin.f_AddRow(3);
    ds_fix_driver.setCellData(ds_fix_driver.getRowPosition(), "fixWrkUnitNo", ds_fix_work_unit.getCellData(rowIndex, colId));
  }
};

//작업단위 Grid PopUp : 코드 입력후 Focus 이동시
scwin.gr_fix_work_unit_oneditend = async function (row, columnIndex, newData) {
  if (row > -1 && ds_fix_work_unit.getRowCount() > row) {
    let colId = gr_fix_work_unit.getColumnID(columnIndex);
    let oldData = ds_fix_work_unit.getCellData(row, colId);
    switch (colId) {
      case "fixWrkUnitNo":
        if (newData != "" && newData != oldData) {
          ds_fix_work_unit.setCellData(row, "fixWrkUnitNm", "");
          await scwin.f_openCommPopUpGrid(2, row, 'T', newData);
        } else if (newData == "") {
          ds_fix_work_unit.setCellData(row, "fixWrkUnitNo", "");
          ds_fix_work_unit.setCellData(row, "fixWrkUnitNm", "");
          await scwin.f_applyFixWorkUnit(row, newData);
        }

        // 정비사 자동반영 ( 자가일때만 )
        if (lux_selfOutordClsCd.getValue() == "IN") {
          if (ds_fix_work_unit.getRowStatus(row) != "C") return;
          if (newData == "") return;
          await scwin.f_AddRow(3);
          ds_fix_driver.setCellData(ds_fix_driver.getRowPosition(), "fixWrkUnitNo", newData);
        }
        break;
    }
  }
};
scwin.gr_fix_work_unit_onafteredit = function (rowIndex, columnIndex, value) {
  scwin.f_setAdjustment();
};

//정비사 Grid PopUp
scwin.gr_fix_driver_openPopup = async function (rowIndex, colId, nowValue) {
  if (rowIndex > -1 && ds_fix_driver.getRowCount() > rowIndex) {
    switch (colId) {
      case "fixWrkUnitNo":
        await scwin.f_openCommPopUpGrid(3, rowIndex, 'F');
        break;
      case "fixEmpNm":
        //alert("on popup");
        await scwin.f_openCommPopUpGrid(4, rowIndex, 'F');
        break;
    }
  }
};

//정비사 Grid PopUp : 코드 입력후 Focus 이동시
scwin.gr_fix_driver_oneditend = async function (rowIndex, columnIndex, newData) {
  if (rowIndex > -1 && ds_fix_driver.getRowCount() > rowIndex) {
    let colId = gr_fix_driver.getColumnID(columnIndex);
    let oldData = ds_fix_driver.getCellData(rowIndex, colId);
    switch (colId) {
      case "fixWrkUnitNo":
        if (newData != "" && newData != oldData) {
          await scwin.f_openCommPopUpGrid(3, rowIndex, 'T', newData);
        } else if (newData == "") {
          ds_fix_driver.setCellData(rowIndex, "fixWrkUnitNo", "");
        }
        break;
      case "fixEmpNm":
        if (newData != "" && newData != oldData) {
          await scwin.f_openCommPopUpGrid(4, rowIndex, 'T', newData);
        } else if (newData == "") {
          ds_fix_driver.setCellData(rowIndex, "fixEmpNo", "");
          ds_fix_driver.setCellData(rowIndex, "fixEmpNm", "");
        }
        break;
    }
  }
};
scwin.gr_fix_driver_onafteredit = function (rowIndex, columnIndex, value) {
  if (rowIndex > -1 && ds_fix_driver.getRowCount() > rowIndex) {
    let colId = gr_fix_driver.getColumnID(columnIndex);
    switch (colId) {
      case "wrkHhCnt":
        if (value == "") {
          ds_fix_driver.setCellData(rowIndex, colId, "0");
        }
        break;
    }
  }
};

//수리순환품 Grid PopUp
scwin.gr_repair_circula_parts_openPopup = async function (rowIndex, colId, nowValue) {
  await scwin.f_openCommPopUpGrid(5, rowIndex, 'F');
};

//수리순환품 Grid PopUp : 코드 입력후 Focus 이동시
scwin.gr_repair_circula_parts_oneditend = async function (rowIndex, columnIndex, newData) {
  if (rowIndex > -1 && ds_repair_circula_parts.getRowCount() > rowIndex) {
    let colId = gr_repair_circula_parts.getColumnID(columnIndex);
    let oldData = ds_repair_circula_parts.getCellData(rowIndex, colId);
    switch (colId) {
      case "circulPartCd":
        if (newData != "" && newData != oldData) {
          ds_repair_circula_parts.setCellData(rowIndex, "circulPartNm", "");
          await scwin.f_openCommPopUpGrid(5, rowIndex, 'T', newData);
        } else if (newData == "") {
          ds_repair_circula_parts.setCellData(rowIndex, "circulPartCd", "");
          ds_repair_circula_parts.setCellData(rowIndex, "circulPartNm", "");
        }
        break;
    }
  }
};

//소요부품 Grid PopUp
scwin.gr_fix_work_parts_openPopup = async function (rowIndex, colId, nowValue) {
  if (rowIndex > -1 && ds_fix_work_parts.getRowCount() > rowIndex) {
    switch (colId) {
      case "fixWrkUnitNo":
        await scwin.f_openCommPopUpGrid(6, rowIndex, 'F');
        break;
      case "partCd":
        await scwin.f_openCommPopUpGrid(7, rowIndex, 'F');
        break;
      // case "realOutDt":
      // 	cfOpenCalendar(gr_fix_work_parts, row, colId);
      // 	break;
    }
  }
};

//소요부품 Grid PopUp : 코드 입력후 Focus 이동시 및 콤보박스 변경시
scwin.gr_fix_work_parts_oneditend = async function (rowIndex, columnIndex, newData) {
  let colId = gr_fix_work_parts.getColumnID(columnIndex);
  if (colId == "inClsCd") {
    //입고구분
    await scwin.f_RetrieveStockCustomer(rowIndex, newData);
  } else {
    if (rowIndex > -1 && ds_fix_work_parts.getRowCount() > rowIndex) {
      let oldData = ds_fix_work_parts.getCellData(rowIndex, colId);
      switch (colId) {
        case "fixWrkUnitNo":
          //작업단위
          if (newData != "" && newData != oldData) {
            await scwin.f_openCommPopUpGrid(6, rowIndex, 'T', newData);
          } else if (oldData == "") {
            ds_fix_work_parts.setCellData(rowIndex, "fixWrkUnitNo", "");
          }
          break;
        case "partCd":
          //부품코드
          if (newData != "" && newData != oldData) {
            ds_fix_work_parts.setCellData(rowIndex, "partNm", "");
            ds_fix_work_parts.setCellData(rowIndex, "partUnitNm", "");
            await scwin.f_openCommPopUpGrid(7, rowIndex, 'T', newData);
          } else if (oldData == "") {
            ds_fix_work_parts.setCellData(rowIndex, "partCd", "");
            ds_fix_work_parts.setCellData(rowIndex, "partNm", "");
            ds_fix_work_parts.setCellData(rowIndex, "partUnitNm", "");
          }
          break;
        case "partQty":
          //사용수량
          if (newData == "") {
            newData = "0";
            ds_fix_work_parts.setCellData(colId, newData);
          }
          if (newData == "0") {
            ds_fix_work_parts.setCellData(rowIndex, "totAmt", "0");
            ds_fix_work_parts.setCellData(rowIndex, "vatAmt", "0");
          } else {
            ds_fix_work_parts.setCellData(rowIndex, "totAmt", Number(newData) * ds_fix_work_parts.getCellData(rowIndex, "outUpr"));
            // 부가세 계산(간이과세/면세 - 0, 그 외 - 10%
            let taxnCls = ds_fix_work_parts.getCellData(rowIndex, "taxnCls");
            if (taxnCls == "20" || taxnCls == "30") {
              ds_fix_work_parts.setCellData(rowIndex, "vatAmt", 0);
            } else {
              ds_fix_work_parts.setCellData(rowIndex, "vatAmt", ds_fix_work_parts.getCellData(rowIndex, "totAmt") / 10);
            }
          }
          break;
      }
    }
  }
};
scwin.gr_fix_work_parts_onafteredit = function (rowIndex, columnIndex, newData) {
  if (rowIndex > -1 && ds_fix_work_parts.getRowCount() > rowIndex) {
    let colId = gr_fix_work_parts.getColumnID(columnIndex);
    switch (colId) {
      case "partQty":
        //사용수량
        if (newData == "") {
          newData = "0";
          ds_fix_work_parts.setCellData(rowIndex, colId, newData);
        }
        if (newData == "0") {
          ds_fix_work_parts.setCellData(rowIndex, "totAmt", "0");
          ds_fix_work_parts.setCellData(rowIndex, "vatAmt", "0");
        } else {
          ds_fix_work_parts.setCellData(rowIndex, "totAmt", Number(newData) * ds_fix_work_parts.getCellData(rowIndex, "outUpr"));
          // 부가세 계산(간이과세/면세 - 0, 그 외 - 10%
          let taxnCls = ds_fix_work_parts.getCellData(rowIndex, "taxnCls");
          if (taxnCls == "20" || taxnCls == "30") {
            ds_fix_work_parts.setCellData(rowIndex, "vatAmt", 0);
          } else {
            ds_fix_work_parts.setCellData(rowIndex, "vatAmt", ds_fix_work_parts.getCellData(rowIndex, "totAmt") / 10);
          }
        }
        break;
    }
  }
  scwin.f_setAdjustment();
};

//작업표준(외주) Grid PopUp
scwin.gr_fix_work_standard2_openPopup = async function (rowIndex, colId, nowValue) {
  await scwin.f_openCommPopUpGrid(1, rowIndex, 'F');
};

//작업표준(외주) Grid PopUp : 코드 입력후 Focus 이동시
scwin.gr_fix_work_standard2_oneditend = async function (rowIndex, columnIndex, newData) {
  if (rowIndex > -1 && gr_fix_work_standard2.getRowCount() > rowIndex) {
    let colId = gr_fix_work_standard2.getColumnID(columnIndex);
    let oldData = ds_fix_work_standard.getCellData(rowIndex, colId);
    switch (colId) {
      case "fixWrkStndNo":
        if (newData != "" && newData != oldData) {
          ds_fix_work_standard.setCellData(rowIndex, "wrkStndNm", "");
          await scwin.f_openCommPopUpGrid(1, rowIndex, 'T', newData);
        } else if (newData == "") {
          ds_fix_work_standard.setCellData(rowIndex, "fixWrkStndNo", "");
          ds_fix_work_standard.setCellData(rowIndex, "wrkStndNm", "");
        }
        break;
    }
  }
};

//작업단위(외주) Grid PopUp
scwin.gr_fix_work_unit2_openPopup = async function (rowIndex, colId, nowValue) {
  await scwin.f_openCommPopUpGrid(2, rowIndex, 'F');
};

//작업단위(외주) Grid PopUp : 코드 입력후 Focus 이동시
scwin.gr_fix_work_unit2_oneditend = async function (rowIndex, columnIndex, newData) {
  if (rowIndex > -1 && ds_fix_work_unit.getRowCount() > rowIndex) {
    let colId = gr_fix_work_unit2.getColumnID(columnIndex);
    let oldData = ds_fix_work_unit.getCellData(rowIndex, colId);
    switch (colId) {
      case "fixWrkUnitNo":
        if (newData != "" && newData != oldData) {
          ds_fix_work_unit.setCellData(rowIndex, "fixWrkUnitNm", "");
          await scwin.f_openCommPopUpGrid(2, rowIndex, 'T', newData);
        } else if (newData == "") {
          ds_fix_work_unit.setCellData(rowIndex, "fixWrkUnitNo", "");
          ds_fix_work_unit.setCellData(rowIndex, "fixWrkUnitNm", "");
        }
        break;
    }
  }
};
scwin.gr_fix_work_unit2_onafteredit = function (rowIndex, columnIndex, newData) {
  if (rowIndex > -1 && ds_fix_work_unit.getRowCount() > rowIndex) {
    let colId = gr_fix_work_unit2.getColumnID(columnIndex);
    switch (colId) {
      case "qty":
        //수량
        if (newData == "") {
          ds_fix_work_unit.setCellData(rowIndex, colId, "0");
        }
        scwin.f_setAdjustment();
        break;
      case "upr":
        //단가
        if (newData == "") {
          ds_fix_work_unit.setCellData(rowIndex, colId, "0");
        }
        scwin.f_setAdjustment();
        break;
      case "wrkHhCnt":
        //실제정비시간
        if (newData == "") {
          ds_fix_work_unit.setCellData(rowIndex, colId, "0");
        }
        break;
      case "bilgWages":
        //청구공임
        if (newData == "") {
          ds_fix_work_unit.setCellData(rowIndex, colId, "0");
          newData = "0";
        }
        let wages = 0;
        let vatAmt = 0;

        // 부가세 계산
        ds_fix_work_unit.setCellData(rowIndex, "vatAmt", Number(newData) / 10);
        for (let i = 0; i < ds_fix_work_unit.getRowCount(); i++) {
          wages += Number(ds_fix_work_unit.getCellData(i, "bilgWages"));
          vatAmt += Number(ds_fix_work_unit.getCellData(i, "vatAmt"));
        }
        em_wages.setValue(wages); // 청구공임
        em_vatAmt.setValue(vatAmt); // 부가세 
        em_totAmt.setValue(parseInt(em_wages.getValue()) + parseInt(em_partAmt.getValue())); // 총금액
        break;
      case "vatAmt":
        //VAT
        if (newData == "") {
          ds_fix_work_unit.setCellData(rowIndex, colId, "0");
        }
        let vatAmtTmp = 0;
        for (let i = 0; i < ds_fix_work_unit.getRowCount(); i++) {
          vatAmtTmp += Number(ds_fix_work_unit.getCellData(i, "vatAmt"));
        }
        em_vatAmt.setValue(vatAmtTmp);
        em_totAmt.setValue(parseInt(em_wages.getValue()) + parseInt(em_partAmt.getValue()));
        break;
    }
  }
};

//수리순환품(외주) Grid PopUp
scwin.gr_repair_circula_parts2_openPopup = async function (rowIndex, colId, nowValue) {
  await scwin.f_openCommPopUpGrid(5, rowIndex, 'F');
};

//수리순환품(외주) Grid PopUp : 코드 입력후 Focus 이동시
scwin.gr_repair_circula_parts2_oneditend = async function (rowIndex, columnIndex, newData) {
  if (rowIndex > -1 && ds_repair_circula_parts.getRowCount() > rowIndex) {
    let colId = gr_repair_circula_parts2.getColumnID(columnIndex);
    let oldData = ds_repair_circula_parts.getCellData(rowIndex, colId);
    switch (colId) {
      case "circulPartCd":
        if (newData != "" && newData != oldData) {
          ds_repair_circula_parts.setCellData(rowIndex, "circulPartNm", "");
          await scwin.f_openCommPopUpGrid(5, rowIndex, 'T', newData);
        } else if (newData == "") {
          ds_repair_circula_parts.setCellData(rowIndex, "circulPartCd", "");
          ds_repair_circula_parts.setCellData(rowIndex, "circulPartNm", "");
        }
        break;
    }
  }
};

//소요부품(외주) Grid PopUp
scwin.gr_fix_work_parts2_openPopup = async function (rowIndex, colId, nowValue) {
  if (rowIndex > -1 && ds_fix_work_parts.getRowCount() > rowIndex) {
    switch (colId) {
      case "fixWrkUnitNo":
        await scwin.f_openCommPopUpGrid(6, rowIndex, 'F');
        break;
      case "partCd":
        await scwin.f_openCommPopUpGrid(7, rowIndex, 'F');
        break;

      // case "realOutDt":
      // 	cfOpenCalendar(gr_fix_work_parts2, rowIndex, colId);
      // 	break;
    }
  }
};

//소요부품(외주) Grid PopUp : 코드 입력후 Focus 이동시 및 콤보박스 변경시
scwin.gr_fix_work_parts2_oneditend = async function (rowIndex, columnIndex, newData) {
  let colId = gr_fix_work_parts2.getColumnID(columnIndex);
  if (colId == "inClsCd") {
    //입고구분
    await scwin.f_RetrieveStockCustomer(rowIndex, newData);
  } else {
    if (rowIndex > -1 && ds_fix_work_parts.getRowCount() > rowIndex) {
      let oldData = ds_fix_work_parts.getCellData(rowIndex, colId);
      switch (colId) {
        case "fixWrkUnitNo":
          //작업단위
          if (newData != "" && newData != oldData) {
            await scwin.f_openCommPopUpGrid(6, rowIndex, 'T');
          } else if (ds_fix_work_parts.getCellData(rowIndex, colId) == "") {
            ds_fix_work_parts.setCellData(rowIndex, "fixWrkUnitNo", "", newData);
          }
          break;
        case "partCd":
          //부품코드
          if (newData != "" && newData != oldData) {
            ds_fix_work_parts.setCellData(rowIndex, "partNm", "");
            ds_fix_work_parts.setCellData(rowIndex, "partUnitNm", "");
            await scwin.f_openCommPopUpGrid(7, rowIndex, 'T', newData);
          } else if (ds_fix_work_parts.getCellData(rowIndex, colId) == "") {
            ds_fix_work_parts.setCellData(rowIndex, "partCd", "");
            ds_fix_work_parts.setCellData(rowIndex, "partNm", "");
            ds_fix_work_parts.setCellData(rowIndex, "partUnitNm", "");
          }
          break;
        case "partQty":
          //사용수량
          if (newData == "") {
            newData = "0";
            ds_fix_work_parts.setCellData(colId, newData);
          }
          if (newData == "0") {
            ds_fix_work_parts.setCellData(rowIndex, "totAmt", "0");
            ds_fix_work_parts.setCellData(rowIndex, "vatAmt", "0");
          } else {
            ds_fix_work_parts.setCellData(rowIndex, "totAmt", Number(newData) * Number(ds_fix_work_parts.getCellData(rowIndex, "outUpr")));
            // 부가세 계산(간이과세/면세 - 0, 그 외 - 10%
            let taxnCls = ds_fix_work_parts.getCellData(rowIndex, "taxnCls");
            if (taxnCls == "20" || taxnCls == "30") {
              ds_fix_work_parts.setCellData(rowIndex, "vatAmt", 0);
            } else {
              ds_fix_work_parts.setCellData(rowIndex, "vatAmt", Number(ds_fix_work_parts.getCellData(rowIndex, "totAmt")) / 10);
            }
          }
          break;
      }
    }
  }
};
scwin.gr_fix_work_parts2_onafteredit = function (rowIndex, columnIndex, newData) {
  if (rowIndex > -1 && ds_fix_work_parts.getRowCount() > rowIndex) {
    let colId = gr_fix_work_parts2.getColumnID(columnIndex);
    switch (colId) {
      case "partQty":
        //사용수량
        if (newData == "") {
          newData = "0";
          ds_fix_work_parts.setCellData(rowIndex, colId, newData);
        }
        if (newData == "0") {
          ds_fix_work_parts.setCellData(rowIndex, "totAmt", "0");
          ds_fix_work_parts.setCellData(rowIndex, "vatAmt", "0");
        } else {
          ds_fix_work_parts.setCellData(rowIndex, "totAmt", Number(newData) * Number(ds_fix_work_parts.getCellData(rowIndex, "outUpr")));
          // 부가세 계산(간이과세/면세 - 0, 그 외 - 10%
          let taxnCls = ds_fix_work_parts.getCellData(rowIndex, "taxnCls");
          if (taxnCls == "20" || taxnCls == "30") {
            ds_fix_work_parts.setCellData(rowIndex, "vatAmt", 0);
          } else {
            ds_fix_work_parts.setCellData(rowIndex, "vatAmt", Number(ds_fix_work_parts.getCellData(rowIndex, "totAmt")) / 10);
          }
        }
        break;
    }
  }
  scwin.f_setAdjustment();
};

//입고일시 Focus 이동시 
scwin.ica_inDt_onblur = function (e) {
  if (ica_wrkStDt.getValue().trim() == "") {
    ica_wrkStDt.setValue(ica_inDt.getValue());
  }
};

//출고일시 Focus 이동시
scwin.ica_outDt_onblur = function (e) {
  if (ica_wrkEndDt.getValue().trim() == "") {
    ica_wrkEndDt.setValue(ica_outDt.getValue());
  }
};

//입고시간 Focus 이동시 
scwin.em_inHh_onblur = async function (e) {
  // 입고시각 검증
  if (em_inHh.getValue().trim() != "" && (em_inHh.getValue().length < 4 || em_inHh.getValue().substring(0, 2) > 24 || em_inHh.getValue().substring(2, 4) > 59 || em_inHh.getValue() > "2459")) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_055, "입고시각"));
    em_inHh.setValue("");
    em_inHh.focus();
  }
  if (em_wrkStHh.getValue().trim() == "") {
    em_wrkStHh.setValue(em_inHh.getValue());
  }
};

//출고시간 Focus 이동시
scwin.em_outHh_onblur = async function (e) {
  // 출고시각 검증
  if (em_outHh.getValue().trim() != "" && (em_outHh.getValue().length < 4 || em_outHh.getValue().substring(0, 2) > 24 || em_outHh.getValue().substring(2, 4) > 59 || em_outHh.getValue() > "2459")) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_055, "출고시각"));
    em_outHh.setValue("");
    em_outHh.focus();
  }
  if (em_wrkEndHh.getValue().trim() == "") {
    em_wrkEndHh.setValue(em_outHh.getValue());
  }
};

//작업예정일자 Focus 이동시
scwin.em_wrkIntendDt_onblur = function (e) {
  if (ica_endIntendDt.getValue().trim() == "") {
    ica_endIntendDt.setValue(ica_wrkIntendDt.getValue());
  }
};

//작업시작시간 Focus 이동시
scwin.ica_wrkStDt_onblur = async function (e) {
  // 소요일 계산
  if (ica_wrkEndDt.getValue().trim() != "") {
    let chk = await $c.gus.cfValidate($p, [ica_wrkEndDt], null, true);
    if (chk) {
      if (ica_wrkStDt.getValue().trim() != "") {
        let chk2 = await $c.gus.cfValidate($p, [ica_wrkStDt], null, true);
        if (chk2) {
          em_needDt.setValue($c.date.diffDate($p, ica_wrkStDt.getValue(), ica_wrkEndDt.getValue()));
        }
      }
    }
  }
  if (ica_wrkIntendDt.getValue().trim() == "") {
    ica_wrkIntendDt.setValue(ica_wrkStDt.getValue());
  }
  if (ica_inDt.getValue().trim() == "") {
    ica_inDt.setValue(ica_wrkStDt.getValue());
  }
};

//작업완료시간 Focus 이동시
scwin.ica_wrkEndDt_onblur = async function (e) {
  // 소요일 계산
  if (ica_wrkStDt.getValue().trim() != "") {
    let chk = await $c.gus.cfValidate($p, [ica_wrkEndDt], null, true);
    if (chk) {
      if (ica_wrkEndDt.getValue().trim() != "") {
        let chk2 = await $c.gus.cfValidate($p, [ica_wrkStDt], null, true);
        if (chk2) {
          em_needDt.setValue($c.date.diffDate($p, ica_wrkStDt.getValue(), ica_wrkEndDt.getValue()));
        }
      }
    }
  }
  if (ica_endIntendDt.getValue().trim() == "") {
    ica_endIntendDt.setValue(ica_wrkEndDt.getValue());
  }
  if (ica_outDt.getValue().trim() == "") {
    ica_outDt.setValue(ica_wrkEndDt.getValue());
  }
};

//작업시작시간 Focus 이동시
scwin.em_wrkStHh_onblur = async function (e) {
  // 작업시작시각 검증
  if (em_wrkStHh.getValue().trim() != "" && (em_wrkStHh.getValue().length < 4 || em_wrkStHh.getValue().substring(0, 2) > 24 || em_wrkStHh.getValue().substring(2, 4) > 59 || em_wrkStHh.getValue() > "2459")) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_055, "작업시작시각"));
    em_wrkStHh.setValue("");
    em_wrkStHh.focus();
  }
  if (em_inHh.getValue().trim() == "") {
    em_inHh.setValue(em_wrkStHh.getValue());
  }
};

//작업완료시간 Focus 이동시
scwin.em_wrkEndHh_onblur = async function (e) {
  // 작업완료시각 검증
  if (em_wrkEndHh.getValue().trim() != "" && (em_wrkEndHh.getValue().length < 4 || em_wrkEndHh.getValue().substring(0, 2) > 24 || em_wrkEndHh.getValue().substring(2, 4) > 59 || em_wrkEndHh.getValue() > "2459")) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_055, "작업완료시각"));
    em_wrkEndHh.setValue("");
    em_wrkEndHh.focus();
  }
  if (em_outHh.getValue().trim() == "") {
    em_outHh.setValue(em_wrkEndHh.getValue());
  }
};
scwin.ds_fix_work_parts_oncelldatachange = function (info) {
  let rowIndex = info.rowIndex;
  let colID = info.colID;
  let oldValue = info.oldValue;
  let newValue = info.newValue;

  // 이미 출고된 부품인지 확인
  if (colID == "capExpdYn") {
    if (ds_fix_work_parts.getCellData(rowIndex, "partOutNo") != "") {
      //출고완료( 수정불가능 ) 
      if (scwin.onRollBack == false) {
        scwin.onRollBack = true;
        if (ds_fix_work_parts.getCellData(rowIndex, colID) == 0) {
          ds_fix_work_parts.setCellData(rowIndex, colID, 1);
        } else {
          ds_fix_work_parts.setCellData(rowIndex, colID, 0);
        }
        $c.win.alert($p, "출고가 완료된 부품은 수정할 수 없습니다.");
      } else {
        scwin.onRollBack = false;
      }
    }
  }
};
scwin.ds_fix_driver_oncelldatachange = function (info) {
  let rowIndex = info.rowIndex;
  let colID = info.colID;
  let oldValue = info.oldValue;
  let newValue = info.newValue;
  if (rowIndex < 0) return;
  switch (colID) {
    case "fixWrkUnitNo":
    case "wrkHhCnt":
      scwin.f_calcWrkTime();
      break;
  }
};
scwin.ds_fix_work_standard_onbeforerowpositionchange = function (info) {
  let rowIndex = info.newRowIndex;
  if (ds_fix_work_standard.getRowStatus(rowIndex) == "C") {
    gr_fix_work_standard.setReadOnly("column", "fixWrkStndNo", false);
    gr_fix_work_standard2.setReadOnly("column", "fixWrkStndNo", false);
  } else {
    gr_fix_work_standard.setReadOnly("column", "fixWrkStndNo", true);
    gr_fix_work_standard2.setReadOnly("column", "fixWrkStndNo", true);
  }
};
scwin.ds_fix_work_unit_onbeforerowpositionchange = function (info) {
  let rowIndex = info.newRowIndex;
  if (ds_fix_work_unit.getRowStatus(rowIndex) == "C") {
    gr_fix_work_unit.setReadOnly("column", "fixWrkUnitNo", false);
    gr_fix_work_unit2.setReadOnly("column", "fixWrkUnitNo", false);
    gr_fix_work_unit2.setReadOnly("column", "nrm", false);
    gr_fix_work_unit2.setReadOnly("column", "qty", false);
    gr_fix_work_unit2.setReadOnly("column", "upr", false);
  } else {
    gr_fix_work_unit.setReadOnly("column", "fixWrkUnitNo", true);
    gr_fix_work_unit2.setReadOnly("column", "fixWrkUnitNo", true);
    gr_fix_work_unit2.setReadOnly("column", "nrm", true);
    gr_fix_work_unit2.setReadOnly("column", "qty", true);
    gr_fix_work_unit2.setReadOnly("column", "upr", true);
  }
};
scwin.ds_fix_driver_onbeforerowpositionchange = function (info) {
  let rowIndex = info.newRowIndex;
  if (ds_fix_driver.getRowStatus(rowIndex) == "C") {
    gr_fix_driver.setReadOnly("column", "fixWrkUnitNo", false);
    gr_fix_driver.setReadOnly("column", "fixEmpNm", false);
  } else {
    gr_fix_driver.setReadOnly("column", "fixWrkUnitNo", true);
    gr_fix_driver.setReadOnly("column", "fixEmpNm", true);
  }
};
scwin.ds_repair_circula_parts_onbeforerowpositionchange = function (info) {
  let rowIndex = info.newRowIndex;
  if (ds_repair_circula_parts.getRowStatus(rowIndex) == "C") {
    gr_repair_circula_parts.setReadOnly("column", "attDetClsCd", false);
    gr_repair_circula_parts.setReadOnly("column", "circulPartCd", false);
    gr_repair_circula_parts2.setReadOnly("column", "attDetClsCd", false);
    gr_repair_circula_parts2.setReadOnly("column", "circulPartCd", false);
  } else {
    gr_repair_circula_parts.setReadOnly("column", "attDetClsCd", true);
    gr_repair_circula_parts.setReadOnly("column", "circulPartCd", true);
    gr_repair_circula_parts2.setReadOnly("column", "attDetClsCd", true);
    gr_repair_circula_parts2.setReadOnly("column", "circulPartCd", true);
  }
};
scwin.ds_fix_work_parts_onbeforerowpositionchange = function (info) {
  let rowIndex = info.newRowIndex;
  if (rowIndex < 0) return;
  if (ds_fix_work_parts.getCellData(rowIndex, "partOutNo") != "") {
    // 편집불가능
    if (lux_selfOutordClsCd.getValue() == "IN") {
      //자가일경우
      gr_fix_work_parts.setReadOnly("column", "fixWrkUnitNo", true);
      gr_fix_work_parts.setReadOnly("column", "partCd", true);
      gr_fix_work_parts.setReadOnly("column", "partQty", true);
      gr_fix_work_parts.setReadOnly("column", "inClsCd", true);
    } else {
      //외주
      gr_fix_work_parts2.setReadOnly("column", "fixWrkUnitNo", true);
      gr_fix_work_parts2.setReadOnly("column", "partCd", true);
      gr_fix_work_parts2.setReadOnly("column", "partQty", true);
      gr_fix_work_parts2.setReadOnly("column", "inClsCd", true);
    }
  } else {
    // 편집가능상태
    if (lux_selfOutordClsCd.getValue() == "IN") {
      //자가일경우
      gr_fix_work_parts.setReadOnly("column", "fixWrkUnitNo", false);
      gr_fix_work_parts.setReadOnly("column", "partCd", false);
      gr_fix_work_parts.setReadOnly("column", "partQty", false);
      gr_fix_work_parts.setReadOnly("column", "inClsCd", false);
    } else {
      //외주
      gr_fix_work_parts2.setReadOnly("column", "fixWrkUnitNo", false);
      gr_fix_work_parts2.setReadOnly("column", "partCd", false);
      gr_fix_work_parts2.setReadOnly("column", "partQty", false);
      gr_fix_work_parts2.setReadOnly("column", "inClsCd", false);
    }
  }
};
scwin.gr_fix_work_standard_addrow = async function () {
  await scwin.f_AddRow(1);
};
scwin.gr_fix_work_unit_addrow = async function () {
  await scwin.f_AddRow(2);
};
scwin.gr_fix_driver_addrow = async function () {
  await scwin.f_AddRow(3);
};
scwin.gr_repair_circula_parts_addrow = async function () {
  await scwin.f_AddRow(4);
};
scwin.gr_fix_work_parts_addrow = async function () {
  await scwin.f_AddRow(5);
};
scwin.gr_fix_work_unit_delrow = async function () {
  //작업단위 삭제시에 그에 해당하는 부품도 삭제
  let targetIndex = ds_fix_work_unit.getRowPosition();
  let fixWrkUnitNo = ds_fix_work_unit.getCellData(targetIndex, "fixWrkUnitNo");

  //관련 소요부품 삭제
  for (let row = ds_fix_work_parts.getRowCount(); row >= 0; row--) {
    if (ds_fix_work_parts.getCellData(row, "fixWrkUnitNo") == fixWrkUnitNo) {
      if (ds_fix_work_parts.getRowStatus(row) == "C") ds_fix_work_parts.removeRow(row);else ds_fix_work_parts.deleteRow(row);
    }
  }
  //관련 정비사 삭제
  for (let row = ds_fix_driver.getRowCount(); row >= 0; row--) {
    if (ds_fix_driver.getCellData(row, "fixWrkUnitNo") == fixWrkUnitNo) {
      if (ds_fix_driver.getRowStatus(row) == "C") ds_fix_driver.removeRow(row);else ds_fix_driver.deleteRow(row);
    }
  }
  if (ds_fix_work_unit.getRowStatus(targetIndex) == "C") {
    ds_fix_work_unit.removeRow(targetIndex);
  } else {
    ds_fix_work_unit.deleteRow(targetIndex);
  }
};
scwin.gr_fix_work_unit_cencelrow = async function () {
  //작업단위 삭제 취소 시에 그에 해당하는 부품도 삭제 취소
  let targetIndex = ds_fix_work_unit.getRowPosition();
  let fixWrkUnitNo = ds_fix_work_unit.getCellData(targetIndex, "fixWrkUnitNo");

  //관련 소요부품 취소
  for (let row = ds_fix_work_parts.getRowCount(); row >= 0; row--) {
    if (ds_fix_work_parts.getCellData(row, "fixWrkUnitNo") == fixWrkUnitNo) {
      if (ds_fix_work_parts.getRowStatus(row) == "C") ds_fix_work_parts.removeRow(row);else ds_fix_work_parts.undoRow(row);
    }
  }
  //관련 정비사 취소
  for (let row = ds_fix_driver.getRowCount(); row >= 0; row--) {
    if (ds_fix_driver.getCellData(row, "fixWrkUnitNo") == fixWrkUnitNo) {
      if (ds_fix_driver.getRowStatus(row) == "C") ds_fix_driver.removeRow(row);else ds_fix_driver.undoRow(row);
    }
  }
  if (ds_fix_work_unit.getRowStatus(targetIndex) == "C") {
    ds_fix_work_unit.removeRow(targetIndex);
  } else {
    ds_fix_work_unit.undoRow(targetIndex);
  }
};
scwin.btn_Close_onclick = function (e) {
  $c.win.closePopup($p, scwin.returnValue ?? "");
};
scwin.updateRowCountDisplay = function () {
  txt_fix_work_standard_cnt.setValue(ds_fix_work_standard.getRowCount());
  txt_fix_work_unit_cnt.setValue(ds_fix_work_unit.getRowCount());
  txt_fix_driver_cnt.setValue(ds_fix_driver.getRowCount());
  txt_repair_circula_parts_cnt.setValue(ds_repair_circula_parts.getRowCount());
  txt_fix_work_parts_cnt.setValue(ds_fix_work_parts.getRowCount());
  txt_fix_work_standard2_cnt.setValue(ds_fix_work_standard.getRowCount());
  txt_repair_circula_parts2_cnt.setValue(ds_repair_circula_parts.getRowCount());
  txt_fix_work_unit2_cnt.setValue(ds_fix_work_unit.getRowCount());
  txt_fix_work_parts2_cnt.setValue(ds_fix_work_parts.getRowCount());
};
scwin.updateFixWorkDataBinding = function () {
  if (ds_fix_work.getRowCount() == 0) return;
  let fixWorkData = ds_fix_work.getRowJSON(0);

  // 1. 기본 정보 및 차량 정보
  em_fixWrkPlCd.setValue(fixWorkData.fixWrkPlCd); // 정비작업장코드
  txt_fixWrkPlNm.setValue(fixWorkData.fixWrkPlNm); // 정비작업장명
  em_fixWrkNo.setValue(fixWorkData.fixWrkNo); // 작업번호
  lux_fixKndCd.setValue(fixWorkData.fixKndCd); // 정비종류
  em_eqCd.setValue(fixWorkData.eqCd); // 장비코드
  txt_vehclNo.setValue(fixWorkData.vehclNo); // 차량번호
  scwin._vehclShortCd = fixWorkData.vehclShortCd; // 차량단축코드

  // 2. 장비 상세 및 소속 정보
  txt_eqClssNm.setValue(fixWorkData.eqClssNm); // 장비분류명
  txt_eqKndNm.setValue(fixWorkData.eqKndNm); // 장비종류명
  txt_eqModelNm.setValue(fixWorkData.eqModelNm); // 장비모델명
  txt_acctDeptNm.setValue(fixWorkData.acctDeptNm); // 귀속부서명
  txt_assgnLobranNm.setValue(fixWorkData.assgnLobranNm); // 배정점소명

  // 3. 정비 상세 정보
  lux_selfOutordClsCd.setEventPause("onchange", true);
  lux_selfOutordClsCd.setValue(fixWorkData.selfOutordClsCd); // 자가외주구분
  lux_selfOutordClsCd.setEventPause("onchange", false);
  lux_fixCauseCd.setValue(fixWorkData.fixCauseCd); // 정비원인
  lux_fixCatCd.setValue(fixWorkData.fixCatCd); // 정비계통
  em_outordFixClntNo.setValue(fixWorkData.outordFixClntNo); // 외주정비거래처코드
  txt_outordFixClntNm.setValue(fixWorkData.outordFixClntNm); // 외주정비거래처명
  lux_fixWrkStsCd.setValue(fixWorkData.fixWrkStsCd); // 정비상태
  txt_accdRecptNo.setValue(fixWorkData.accdRecptNo); // 사고번호

  // 4. 수치 및 가동 정보
  em_travelDtc.setValue(fixWorkData.travelDtc); // 주행거리
  em_totOprtHhCnt.setValue(fixWorkData.totOprtHhCnt); // 총가동시간
  em_needDt.setValue(fixWorkData.needDt); // 소요일
  em_adptWages.setValue(fixWorkData.adptWages); // 적용공임

  // 5. 날짜 및 시간 정보
  ica_wrkIntendDt.setValue(fixWorkData.wrkIntendDt); // 작업예정일자
  ica_endIntendDt.setValue(fixWorkData.endIntendDt); // 종료예정일자
  ica_wrkStDt.setValue(fixWorkData.wrkStDt); // 작업시작일
  em_wrkStHh.setValue(fixWorkData.wrkStHh); // 작업시작시
  ica_wrkEndDt.setValue(fixWorkData.wrkEndDt); // 작업완료일
  em_wrkEndHh.setValue(fixWorkData.wrkEndHh); // 작업완료시
  ica_wrkPlanDt.setValue(fixWorkData.wrkPlanDt); // 작업계획일자
  ica_inDt.setValue(fixWorkData.inDt); // 입고일자
  em_inHh.setValue(fixWorkData.inHh); // 입고시
  ica_outDt.setValue(fixWorkData.outDt); // 출고일자
  em_outHh.setValue(fixWorkData.outHh); // 출고시

  // 6. 여부(Checkbox) 정보
  chk_drvWaitYn.setValue(fixWorkData.drvWaitYn); // 기사대기여부
  chk_ioNesYn.setValue(fixWorkData.ioNesYn); // 입출고필요여부
  chk_advcdProcYn.setValue(fixWorkData.advcdProcYn); // 전도금처리여부

  // 7. 검사 및 만료일 관련
  ica_expireDt.setValue(fixWorkData.expireDt); // 검사만료일
  lux_passYn.setValue(fixWorkData.passYn); // 검사결과(합격여부)
  ica_inspDt.setValue(fixWorkData.inspDt); // 검사시행일
  lux_inspKndCd.setValue(fixWorkData.inspKndCd); // 검사종류
  ica_nextExpireDt.setValue(fixWorkData.nextExpireDt); // 다음검사예정일
  ica_rglintChkExpireDt.setValue(fixWorkData.rglintChkExpireDt); // 정기점검만료일
  ica_rglintInspExpireDt.setValue(fixWorkData.rglintInspExpireDt); // 정기검사만료일
  ica_mntnInspExpireDt.setValue(fixWorkData.mntnInspExpireDt); // 종합검사만료일

  // 8. 업체 및 비용 정보
  em_inspAgencyClntNo.setValue(fixWorkData.inspAgencyClntNo); // 검사대행업체코드
  txt_inspAgencyClntNm.setValue(fixWorkData.inspAgencyClntNm); // 검사대행업체명
  em_inspCost.setValue(fixWorkData.inspCost); // 정기검사비
  em_agencyCost.setValue(fixWorkData.agencyCost); // 정기점검료
  em_inspCostVat.setValue(fixWorkData.inspCostVat); // 검사비부가세

  // 9. 파일 및 기타
  txt_fileNm.setValue(fixWorkData.fileNm); // 파일명
  scwin._fileSavePath = fixWorkData.fileSavePath; // 파일경로
  scwin._txt_fileSiz = fixWorkData.fileSiz; // 파일크기
  em_circulPartCd.setValue(fixWorkData.circulPartCd); // 수리순환품코드
  txt_circulPartNm.setValue(fixWorkData.circulPartNm); // 수리순환품명
  ta_rmk.setValue(fixWorkData.rmk); // 특이사항(비고)
};
scwin.setDsFixWorkData = function () {
  if (ds_fix_work.getRowCount() == 0) {
    ds_fix_work.setRowPosition(ds_fix_work.insertRow());
  }
  // 데이터셋의 0번째 행에 컴포넌트의 값들을 세팅합니다.
  let rowIndex = 0;

  // 1. 기본 정보 및 차량 정보
  ds_fix_work.setCellData(rowIndex, "fixWrkPlCd", em_fixWrkPlCd.getValue()); // 정비작업장코드
  ds_fix_work.setCellData(rowIndex, "fixWrkPlNm", txt_fixWrkPlNm.getValue()); // 정비작업장명
  ds_fix_work.setCellData(rowIndex, "fixWrkNo", em_fixWrkNo.getValue()); // 작업번호
  ds_fix_work.setCellData(rowIndex, "fixKndCd", lux_fixKndCd.getValue()); // 정비종류
  ds_fix_work.setCellData(rowIndex, "eqCd", em_eqCd.getValue()); // 장비코드
  ds_fix_work.setCellData(rowIndex, "vehclNo", txt_vehclNo.getValue()); // 차량번호
  ds_fix_work.setCellData(rowIndex, "vehclShortCd", scwin._vehclShortCd); // 차량단축코드

  // 2. 장비 상세 및 소속 정보
  ds_fix_work.setCellData(rowIndex, "eqClssNm", txt_eqClssNm.getValue()); // 장비분류명
  ds_fix_work.setCellData(rowIndex, "eqKndNm", txt_eqKndNm.getValue()); // 장비종류명
  ds_fix_work.setCellData(rowIndex, "eqModelNm", txt_eqModelNm.getValue()); // 장비모델명
  ds_fix_work.setCellData(rowIndex, "acctDeptNm", txt_acctDeptNm.getValue()); // 귀속부서명
  ds_fix_work.setCellData(rowIndex, "assgnLobranNm", txt_assgnLobranNm.getValue()); // 배정점소명

  // 3. 정비 상세 정보
  ds_fix_work.setCellData(rowIndex, "selfOutordClsCd", lux_selfOutordClsCd.getValue()); // 자가외주구분
  ds_fix_work.setCellData(rowIndex, "fixCauseCd", lux_fixCauseCd.getValue()); // 정비원인
  ds_fix_work.setCellData(rowIndex, "fixCatCd", lux_fixCatCd.getValue()); // 정비계통
  ds_fix_work.setCellData(rowIndex, "outordFixClntNo", em_outordFixClntNo.getValue()); // 외주정비거래처코드
  ds_fix_work.setCellData(rowIndex, "outordFixClntNm", txt_outordFixClntNm.getValue()); // 외주정비거래처명
  ds_fix_work.setCellData(rowIndex, "fixWrkStsCd", lux_fixWrkStsCd.getValue()); // 정비상태
  ds_fix_work.setCellData(rowIndex, "accdRecptNo", txt_accdRecptNo.getValue()); // 사고번호

  // 4. 수치 및 가동 정보
  ds_fix_work.setCellData(rowIndex, "travelDtc", em_travelDtc.getValue()); // 주행거리
  ds_fix_work.setCellData(rowIndex, "totOprtHhCnt", em_totOprtHhCnt.getValue()); // 총가동시간
  ds_fix_work.setCellData(rowIndex, "needDt", em_needDt.getValue()); // 소요일
  ds_fix_work.setCellData(rowIndex, "adptWages", em_adptWages.getValue()); // 적용공임

  // 5. 날짜 및 시간 정보
  ds_fix_work.setCellData(rowIndex, "wrkIntendDt", ica_wrkIntendDt.getValue()); // 작업예정일자
  ds_fix_work.setCellData(rowIndex, "endIntendDt", ica_endIntendDt.getValue()); // 종료예정일자
  ds_fix_work.setCellData(rowIndex, "wrkStDt", ica_wrkStDt.getValue()); // 작업시작일
  ds_fix_work.setCellData(rowIndex, "wrkStHh", em_wrkStHh.getValue()); // 작업시작시
  ds_fix_work.setCellData(rowIndex, "wrkEndDt", ica_wrkEndDt.getValue()); // 작업완료일
  ds_fix_work.setCellData(rowIndex, "wrkEndHh", em_wrkEndHh.getValue()); // 작업완료시
  ds_fix_work.setCellData(rowIndex, "wrkPlanDt", ica_wrkPlanDt.getValue()); // 작업계획일자
  ds_fix_work.setCellData(rowIndex, "inDt", ica_inDt.getValue()); // 입고일자
  ds_fix_work.setCellData(rowIndex, "inHh", em_inHh.getValue()); // 입고시
  ds_fix_work.setCellData(rowIndex, "outDt", ica_outDt.getValue()); // 출고일자
  ds_fix_work.setCellData(rowIndex, "outHh", em_outHh.getValue()); // 출고시

  // 6. 여부(Checkbox) 정보
  ds_fix_work.setCellData(rowIndex, "drvWaitYn", chk_drvWaitYn.getValue()); // 기사대기여부
  ds_fix_work.setCellData(rowIndex, "ioNesYn", chk_ioNesYn.getValue()); // 입출고필요여부
  ds_fix_work.setCellData(rowIndex, "advcdProcYn", chk_advcdProcYn.getValue()); // 전도금처리여부

  // 7. 검사 및 만료일 관련
  ds_fix_work.setCellData(rowIndex, "expireDt", ica_expireDt.getValue()); // 검사만료일
  ds_fix_work.setCellData(rowIndex, "passYn", lux_passYn.getValue()); // 검사결과
  ds_fix_work.setCellData(rowIndex, "inspDt", ica_inspDt.getValue()); // 검사시행일
  ds_fix_work.setCellData(rowIndex, "inspKndCd", lux_inspKndCd.getValue()); // 검사종류
  ds_fix_work.setCellData(rowIndex, "nextExpireDt", ica_nextExpireDt.getValue()); // 다음검사예정일
  ds_fix_work.setCellData(rowIndex, "rglintChkExpireDt", ica_rglintChkExpireDt.getValue()); // 정기점검만료일
  ds_fix_work.setCellData(rowIndex, "rglintInspExpireDt", ica_rglintInspExpireDt.getValue()); // 정기검사만료일
  ds_fix_work.setCellData(rowIndex, "mntnInspExpireDt", ica_mntnInspExpireDt.getValue()); // 종합검사만료일

  // 8. 업체 및 비용 정보
  ds_fix_work.setCellData(rowIndex, "inspAgencyClntNo", em_inspAgencyClntNo.getValue()); // 검사대행업체코드
  ds_fix_work.setCellData(rowIndex, "inspAgencyClntNm", txt_inspAgencyClntNm.getValue()); // 검사대행업체명
  ds_fix_work.setCellData(rowIndex, "inspCost", em_inspCost.getValue()); // 정기검사비
  ds_fix_work.setCellData(rowIndex, "agencyCost", em_agencyCost.getValue()); // 정기점검료
  ds_fix_work.setCellData(rowIndex, "inspCostVat", em_inspCostVat.getValue()); // 검사비부가세

  // 9. 파일 및 기타
  ds_fix_work.setCellData(rowIndex, "fileNm", txt_fileNm.getValue()); // 파일명
  ds_fix_work.setCellData(rowIndex, "fileSavePath", scwin._fileSavePath); // 파일경로
  ds_fix_work.setCellData(rowIndex, "fileSiz", scwin._txt_fileSiz); // 파일크기
  ds_fix_work.setCellData(rowIndex, "circulPartCd", em_circulPartCd.getValue()); // 수리순환품코드
  ds_fix_work.setCellData(rowIndex, "circulPartNm", txt_circulPartNm.getValue()); // 수리순환품명
  ds_fix_work.setCellData(rowIndex, "rmk", ta_rmk.getValue()); // 특이사항
};
scwin.ds_fix_work_standard_onremoverow = function (info) {
  scwin.updateRowCountDisplay();
};
scwin.ds_fix_work_unit_onremoverow = function (info) {
  scwin.updateRowCountDisplay();
};
scwin.ds_fix_driver_onremoverow = function (info) {
  scwin.updateRowCountDisplay();
};
scwin.ds_repair_circula_parts_onremoverow = function (info) {
  scwin.updateRowCountDisplay();
};
scwin.ds_fix_work_parts_onremoverow = function (info) {
  scwin.updateRowCountDisplay();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'grp_total',style:''},E:[{T:1,N:'w2:wframe',A:{id:'contentHeader',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_work',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'em_fixWrkNo',style:'width: 150px;',ref:'data:dma_fix_work_re.fixWrkNo',objType:'key',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정비작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 100px;',id:'em_fixWrkPlCd',class:'',ref:'data:dma_fix_work_re.fixWrkPlCd',objType:'key',readOnly:'true',validExp:'작업장:yes'}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'txt_fixWrkPlNm',class:'',readOnly:'true',mandatory:'true',objType:'key'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정비종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledclass:'selectbox_disabled',id:'lux_fixKndCd',style:'width:175px;',submenuSize:'fixed','ev:onchange':'scwin.lux_fixKndCd_onchange',objType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'padding-top:5px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'장비기본정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_eq',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'장비등록번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{id:'udc_eqCd',popupID:'',selectID:'',codeId:'em_eqCd',btnId:'img_eqCd',validTitle:'장비등록번호',nameId:'txt_vehclNo',style:'',UpperFlagCode:'0',allowCharCode:'0-9',maxlengthCode:'7',objTypeCode:'key',validExpCode:'장비등록번호:yes',mandatoryCode:'true',validExpName:'장비:yes:',mandatoryName:'true',objTypeName:'key',objTypeBtn:'key','ev:onblurCodeEvent':'scwin.udc_eq_onblurCodeEvent','ev:onclickEvent':'scwin.udc_eq_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_eq_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정기검사만료일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_rglintInspExpireDt',objType:'key',readOnly:'true'},E:[{T:3,text:'style="" objType="key">'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비분류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_eqClssNm',style:'width: 150px;',objType:'key',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_eqKndNm',style:'width: 150px;',objType:'key',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비모델명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_eqModelNm',objType:'key',readOnly:'true'},E:[{T:3,text:'style="" objType="key">'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'종합검사만료일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_mntnInspExpireDt',objType:'key',readOnly:'true'},E:[{T:3,text:'style="" objType="key">'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정기점검만료일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_rglintChkExpireDt',objType:'key',readOnly:'true'},E:[{T:3,text:'style="" objType="key">'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정점소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_assgnLobranNm',style:'width: 150px;',objType:'key',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_acctDeptNm',style:'width: 150px;',objType:'key',readOnly:'true',validExp:'귀속부서:yes',mandatory:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'padding-top:5px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'정비기본정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_work_detail',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120.00px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'자가외주구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledclass:'selectbox_disabled',id:'lux_selfOutordClsCd',style:'width: 150px',submenuSize:'fixed',mandatory:'true','ev:onchange':'scwin.lux_selfOutordClsCd_onchange',objType:'data',title:'자가외주구분',validExp:'자가외주구분:yes'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정비원인',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledclass:'selectbox_disabled',id:'lux_fixCauseCd',style:'width: 150px',submenuSize:'fixed',mandatory:'true',objType:'data',title:'정비원인',validExp:'정비원인:yes'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정비계통',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledclass:'selectbox_disabled',id:'lux_fixCatCd',style:'width: 150px',submenuSize:'fixed',mandatory:'true',objType:'data',title:'정비계통',validExp:'정비계통:yes'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정비상태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'true',disabledclass:'selectbox_disabled',id:'lux_fixWrkStsCd',style:'width: 150px',submenuSize:'fixed',mandatory:'true',title:'정비상태'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'외주정비거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{id:'udc_outordFixClnt',codeId:'em_outordFixClntNo',nameId:'txt_outordFixClntNm',btnId:'img_outordFixClntNo',mandatoryCode:'',UpperFlagCode:'0',maxlengthCode:'6',validExpCode:'외주정비거래처:yes:',validTitle:'외주정비거래처','ev:onblurCodeEvent':'scwin.udc_outordFixClnt_onblurNameEvent','ev:onviewchangeNameEvent':'scwin.udc_outordFixClnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_outordFixClnt_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사고번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_accdRecpt',codeId:'txt_accdRecptNo',nameId:'',btnId:'img_accdRecptNo',mandatoryCode:'',UpperFlagCode:'0',maxlengthCode:'11',objTypeCode:'data','ev:onclickEvent':'scwin.udc_accdRecpt_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_accdRecpt_onviewchangeCodeEvent',hideName:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'피해가해구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_damageWrongTyp',style:'width: 150px;',objType:'data',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주행KM',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'em_travelDtc',style:'width: 150px;',displayFormat:'#,##0.#',objType:'data',dataType:'float',allowChar:'0-9.',maxlength:'7.1'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'총가동시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'em_totOprtHhCnt',style:'width: 150px;',mandatory:'true',displayFormat:'#,##0',objType:'data',title:'총가동시간',dataType:'number',maxlength:'6',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업계획일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkPlanDt',style:'',objType:'data',validExp:'작업계획일자:no:date=YYYYMMDD'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group5',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_inDt',style:'','ev:onblur':'scwin.ica_inDt_onblur',objType:'data',title:'입고일',validExp:'입고일:yes:date=YYYYMMDD'}},{T:1,N:'xf:input',A:{class:'tac',dataType:'text',id:'em_inHh',style:'width: 50px;',mandatory:'true','ev:onblur':'scwin.em_inHh_onblur',objType:'data',title:'입고시',validExp:'입고시간:no:date=HHmm',allowChar:'0-9',displayFormat:'##:##',maxlength:'4'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출고일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group7',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_outDt',style:'','ev:onblur':'scwin.ica_outDt_onblur',objType:'data',title:'출고일',validExp:'출고일:yes:date=YYYYMMDD'}},{T:1,N:'xf:input',A:{class:'tac',dataType:'text',id:'em_outHh',style:'width: 50px;',mandatory:'true','ev:onblur':'scwin.em_outHh_onblur',objType:'data',title:'출고시간',validExp:'출고시간:no:Date=HHmm',displayFormat:'##:##',allowChar:'0-9',maxlength:'4'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업예정일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkIntendDt',style:'',mandatory:'true','ev:onblur':'scwin.em_wrkIntendDt_onblur',objType:'data',title:'작업예정일자',validExp:'작업예정일자:yes:date=YYYYMMDD'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'종료예정일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_endIntendDt',style:'',mandatory:'true',objType:'data',title:'종료예정일자',validExp:'종료예정일자:yes:date=YYYYMMDD'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업시작일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group6',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkStDt',style:'','ev:onblur':'scwin.ica_wrkStDt_onblur',objType:'data',title:'작업시작일',validExp:'작업시작일:yes:date=YYYYMMDD'}},{T:1,N:'xf:input',A:{class:'tac',dataType:'text',id:'em_wrkStHh',style:'width: 50px;',mandatory:'true','ev:onblur':'scwin.em_wrkStHh_onblur',objType:'data',title:'작업시작시간',validExp:'작업시작시간:no:date=HHmm',displayFormat:'##:##',allowChar:'0-9',maxlength:'4'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업완료일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group8',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkEndDt',style:'','ev:onblur':'scwin.ica_wrkEndDt_onblur',objType:'data',title:'작업완료일',validExp:'작업완료일:yes:date=YYYYMMDD'}},{T:1,N:'xf:input',A:{class:'tac',dataType:'text',id:'em_wrkEndHh',style:'width: 50px;',mandatory:'true','ev:onblur':'scwin.em_wrkEndHh_onblur',objType:'data',title:'작업완료시간',validExp:'작업완료시간:no:date=HHmm',allowChar:'0-9',displayFormat:'##:##',maxlength:'4'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소요일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 150px;',id:'em_needDt',class:'tar',dataType:'number',displayFormat:'#,##0',objType:'data',readOnly:'true',disabled:'true'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'일',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기사대기여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_drvWaitYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입출고필요여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_ioNesYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'검사만료일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_expireDt',style:'',objType:'data',readOnly:'true',disabled:'true',validExp:'검사만료일:no:date=YYYYMMDD'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용공임',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'em_adptWages',style:'width: 150px;',displayFormat:'#,##0',objType:'data',dataType:'number',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수리순환품',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{id:'udc_circulPart',codeId:'em_circulPartCd',nameId:'txt_circulPartNm',btnId:'img_circulPartCd',UpperFlagCode:'0',maxlengthCode:'6',objectTypeCode:'data',mandatoryCode:'false',validTitle:'수리순환품',allowCharCode:'0-9',objTypeCode:'data',objTypeName:'data',objTypeBtn:'data','ev:onblurCodeEvent':'scwin.udc_circulPart_onblurNameEvent','ev:onviewchangeNameEvent':'scwin.udc_circulPart_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_circulPart_onclickEvent',style:'width:30%;'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:' row-gap-8',id:'',style:'padding-top:5px;'},E:[{T:1,N:'xf:group',A:{class:'lybox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'정비정산정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부품비',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'tar',id:'em_partAmt',style:'width: 150px;',displayFormat:'#,##0',objType:'data',dataType:'number',allowChar:'0-9',initValue:'0'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공임',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'em_wages',style:'width: 150px;',displayFormat:'#,##0',objType:'data',dataType:'number',allowChar:'0-9',initValue:'0'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'em_totAmt',style:'width: 150px;',displayFormat:'#,##0',objType:'data',dataType:'number',allowChar:'0-9',initValue:'0'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'VAT',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'em_vatAmt',style:'width: 150px;',displayFormat:'#,##0',objType:'data',dataType:'number',allowChar:'0-9',initValue:'0'}}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'txt-dot txt-red',id:'',label:'총가동시간을 필수로 입력해주세요.(트레일러등 일부 장비제외) ',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'특이사항',class:'tit'}}]}]},{T:1,N:'xf:textarea',A:{style:'',id:'ta_rmk',class:'h-full mt8',objType:'data'}}]}]}]},{T:1,N:'xf:group',A:{class:'tabbox ',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',class:'wq_tab',id:'tab_main',style:'','ev:onbeforeselect':'scwin.tab_main_onbeforeselect'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'자가',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'외주',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'height:40px',id:'tabs3',label:'검사결과'}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content1',style:'height: auto;'},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업표준 목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_gr_fix_work_standard_topGridBtn',gridUpYn:'N',gridDownYn:'N',gridID:'gr_fix_work_standard'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_fix_work_standard',id:'gr_fix_work_standard',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false',gridName:'작업표준목록',dataName:'작업표준목록',validFeatures:'ignoreStatus=no',validExp:'fixWrkStndNo:작업표준코드:yes::key,wrkStndNm:작업표준명:yes::key',rowStatusVisible:'true',rowStatusWidth:'50','ev:oneditend':'scwin.gr_fix_work_standard_oneditend'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',style:'',value:'장비코드',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClsCd',inputType:'text',style:'',value:'소속구분',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkStndNo',inputType:'text',style:'',value:'작업표준코드',width:'130',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStndNm',inputType:'text',style:'',value:'작업표준명',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',style:'',value:'',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClsCd',inputType:'text',style:'',value:'',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkStndNo',inputType:'textImage',style:'',value:'',width:'130',imageClickFunction:'scwin.gr_fix_work_standard_openPopup',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStndNm',inputType:'text',style:'',value:'',width:'120',readOnly:'true',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_fix_work_standard_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{id:'udc_gr_fix_work_standard_bottomGrdBtn',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',rowAddUserAuth:'C',rowDelUserAuth:'D',gridID:'gr_fix_work_standard',rowAddFunction:'scwin.gr_fix_work_standard_addrow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btnApplyFixWorkStandard',style:'',type:'button','ev:onclick':'scwin.btnApplyFixWorkStandard_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업표준적용'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업단위',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',id:'udc_gr_fix_work_unit_topGrdBtn',gridUpYn:'N',gridDownYn:'N',gridID:'gr_fix_work_unit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_fix_work_unit',id:'gr_fix_work_unit',gridName:'작업단위',dataName:'작업단위',validFeatures:'ignoreStatus=no',validExp:'fixWrkUnitNo:작업단위:yes::key,fixWrkUnitNm:작업단위명:yes::key,wrkHhCnt:실제정비시간:yes::key',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false',rowStatusVisible:'true','ev:oneditend':'scwin.gr_fix_work_unit_oneditend','ev:onafteredit':'scwin.gr_fix_work_unit_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption6',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkUnitNo',inputType:'text',style:'',value:'작업단위',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkUnitNm',inputType:'text',style:'',value:'작업단위명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stndWrkHhCnt',inputType:'text',style:'',value:'표준정비시간',width:'85'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dayNgtClsCd',inputType:'text',style:'',value:'주야간구분',width:'75',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offDayClsCd',inputType:'text',style:'',value:'휴일구분',width:'75',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkHhCnt',inputType:'text',style:'',value:'실제정비시간',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgWages',inputType:'text',style:'',value:'청구공임',hidden:'true',width:'130'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkUnitNo',inputType:'textImage',style:'',value:'',width:'100',maxLength:'6',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',imageClickFunction:'scwin.gr_fix_work_unit_openPopup',allowChar:'0-9a-zA-Z'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkUnitNm',inputType:'text',style:'',value:'',width:'120',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stndWrkHhCnt',inputType:'text',style:'',value:'',width:'130',readOnly:'true',textAlign:'right',displayFormat:'#,##0',dataType:'number',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'dayNgtClsCd',inputType:'select',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'offDayClsCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkHhCnt',inputType:'text',style:'',value:'',width:'130',readOnly:'true',dataType:'float',displayFormat:'#,##0.0',textAlign:'right',allowChar:'0-9.'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgWages',inputType:'text',style:'',value:'',hidden:'true',width:'130',dataType:'number',displayFormat:'#,##0',editType:'focus',allowChar:'0-9',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_fix_work_unit_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',style:'',id:'udc_gr_fix_work_unit_bottomGrdBtn',rowAddUserAuth:'C',rowDelUserAuth:'D',gridID:'gr_fix_work_unit',rowAddFunction:'scwin.gr_fix_work_unit_addrow',rowDelFunction:'scwin.gr_fix_work_unit_delrow',cancelFunction:'scwin.gr_fix_work_unit_cencelrow'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'정비사',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',id:'udc_gr_fix_driver_topGrdBtn',gridUpYn:'N',gridDownYn:'N',gridID:'gr_fix_driver'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_fix_driver',id:'gr_fix_driver',gridName:'정비사',dataName:'정비사',validFeatures:'ignoreStatus=no',validExp:'fixWrkUnitNo:작업단위:yes::key,fixEmpNm:정비사:yes::key,wrkStDt:시작일자:yes::,wrkStHh:시작시간:yes::,wrkEndDt:종료일자:yes::,wrkEndHh:종료시간:yes::',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false',rowStatusVisible:'true','ev:oneditend':'scwin.gr_fix_driver_oneditend','ev:onafteredit':'scwin.gr_fix_driver_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption7',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'fixWrkUnitNo',inputType:'text',style:'',value:'작업단위',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixEmpNm',inputType:'text',style:'',value:'정비사',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkHhCnt',value:'정비시간',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'wrkStDt',value:'시작일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'wrkStHh',value:'시작시간',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'wrkEndDt',value:'종료일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'wrkEndHh',value:'종료시간',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkUnitNo',inputType:'textImage',style:'',value:'',width:'100',maxLength:'6',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',imageClickFunction:'scwin.gr_fix_driver_openPopup',allowChar:'0-9a-zA-Z'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixEmpNm',inputType:'textImage',style:'',value:'',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',imageClickFunction:'scwin.gr_fix_driver_openPopup',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkHhCnt',value:'',displayMode:'label',dataType:'float',maxLength:'4.1',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'wrkStDt',value:'',displayMode:'label',maxLength:'8',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkStHh',value:'',displayMode:'label',maxLength:'4',displayFormat:'##:##',allowChar:'0-9',dataType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'wrkEndDt',value:'',displayMode:'label',maxLength:'8',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkEndHh',value:'',displayMode:'label',maxLength:'4',displayFormat:'##:##',dataType:'text',allowChar:'0-9'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_fix_driver_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_rowCopy',label:'행복사',class:'btn','ev:onclick':'scwin.f_copyFixDriver',userAuth:'C'}},{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',style:'',id:'udc_gr_fix_driver_bottomGrdBtn',rowAddUserAuth:'C',rowDelUserAuth:'D',gridID:'gr_fix_driver',rowAddFunction:'scwin.gr_fix_driver_addrow'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'수리순환품 탈부착',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section4',style:'',id:'udc_gr_repair_circula_parts_topGrdBtn',gridUpYn:'N',gridDownYn:'N',gridID:'gr_repair_circula_parts'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section4',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_repair_circula_parts',id:'gr_repair_circula_parts',gridName:'수리순환품 탈부착',dataName:'수리순환품 탈부착',validFeatures:'ignoreStatus=no',validExp:'attDetClsCd:구분:yes::key,circulPartCd:부품코드:yes::key',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false',rowStatusVisible:'true','ev:oneditend':'scwin.gr_repair_circula_parts_oneditend'},E:[{T:1,N:'w2:caption',A:{id:'caption8',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'attDetClsCd',inputType:'text',style:'',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'circulPartCd',inputType:'text',style:'',value:'부품코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'circulPartNm',inputType:'text',style:'',value:'부품명',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'stockReflectYn',inputType:'text',style:'',value:'재고반영여부',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'attDetClsCd',inputType:'select',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'circulPartCd',inputType:'textImage',style:'',value:'',width:'100',maxLength:'15',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',imageClickFunction:'scwin.gr_repair_circula_parts_openPopup'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'circulPartNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockReflectYn',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_repair_circula_parts_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',style:'',id:'udc_gr_repair_circula_parts_bottomGrdBtn',rowAddUserAuth:'C',rowDelUserAuth:'D',gridID:'gr_repair_circula_parts',rowAddFunction:'scwin.gr_repair_circula_parts_addrow'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col',style:'padding-top:12px;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'소요부품',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section5',style:'',id:'udc_gr_fix_work_parts_topGrdBtn',gridUpYn:'N',gridDownYn:'N',gridID:'gr_fix_work_parts'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section5',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_fix_work_parts',style:'',autoFit:'allColumn',id:'gr_fix_work_parts',visibleRowNum:'5',class:'wq_gvw',readOnly:'false',gridName:'소요부품',dataName:'소요부품',validFeatures:'ignoreStatus=no',validExp:'fixWrkUnitNo:작업단위:yes::key,partCd:부품코드:yes::key,partQty:사용수량:yes::,realOutDt:실출고일:no:date=YYYYMMDD&length=8:','ev:oneditend':'scwin.gr_fix_work_parts_oneditend',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_fix_work_parts_onafteredit'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption9',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'fixWrkUnitNo',value:'작업</br>단위',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'partCd',value:'부품코드',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'partNm',value:'부품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockQty',value:'현재고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'partUnitNm',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'65',inputType:'text',style:'',id:'partQty',value:'사용</br>수량',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'outUpr',value:'출고</br>단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'totAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'inClsCd',value:'입고</br>구분',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'capExpdYn',value:'자본적</br>지출',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vatAmt',value:'VAT',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'partOutNo',value:'출고</br>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'realOutDt',value:'실출고일',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'fixWrkUnitNo',value:'',displayMode:'label',maxLength:'6',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',imageClickFunction:'scwin.gr_fix_work_parts_openPopup',allowChar:'0-9a-zA-Z'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',style:'',id:'partCd',value:'',displayMode:'label',maxLength:'15',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',imageClickFunction:'scwin.gr_fix_work_parts_openPopup',allowChar:'0-9a-zA-Z.-'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'partNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'stockQty',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'partUnitNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'partQty',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',maxLength:'5',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'outUpr',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'totAmt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'inClsCd',value:'',displayMode:'value delim label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',style:'',id:'capExpdYn',value:'',displayMode:'label',trueValue:'1',falseValue:'0',defaultValue:'0',emptyValue:'0',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vatAmt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0',hidden:'true',allowChar:'0-9',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'partOutNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'realOutDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'txt_fix_work_parts_cnt',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',id:'udc_gr_fix_work_parts_bottomGrdBtn',rowAddUserAuth:'C',rowDelUserAuth:'D',gridID:'gr_fix_work_parts',rowAddFunction:'scwin.gr_fix_work_parts_addrow'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업표준 목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section6',style:'',id:'udc_gr_fix_work_standard2_topGrdBtn',gridUpYn:'N',gridDownYn:'N',gridID:'gr_fix_work_standard2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section6',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_fix_work_standard',id:'gr_fix_work_standard2',gridName:'작업표준목록',dataName:'작업표준목록',validFeatures:'ignoreStatus=no',validExp:'fixWrkStndNo:작업표준코드:yes::key,wrkStndNm:작업표준명:yes::key',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false',rowStatusVisible:'true','ev:oneditend':'scwin.gr_fix_work_standard2_oneditend'},E:[{T:1,N:'w2:caption',A:{id:'caption11',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',style:'',value:'장비코드',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClsCd',inputType:'text',style:'',value:'소속구분',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkStndNo',inputType:'text',style:'',value:'작업표준코드',width:'130',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStndNm',inputType:'text',style:'',value:'작업표준명',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',style:'',value:'',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClsCd',inputType:'text',style:'',value:'',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkStndNo',inputType:'textImage',style:'',value:'',width:'130',imageClickFunction:'scwin.gr_fix_work_standard2_openPopup',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStndNm',inputType:'text',style:'',value:'',width:'120',readOnly:'true',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_fix_work_standard2_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{id:'udc_gr_fix_work_standard2_bottomGrdBtn',EngYn:'N',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',style:'',rowAddUserAuth:'C',rowDelUserAuth:'D',gridID:'gr_fix_work_standard2',rowAddFunction:'scwin.gr_fix_work_standard_addrow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btnApplyFixWorkStandard2',style:'',type:'button','ev:onclick':'scwin.btnApplyFixWorkStandard_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업표준적용'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''}}]},{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'수리순환품 탈부착',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section7',style:'',id:'udc_gr_repair_circula_parts2_topGrdBtn',gridUpYn:'N',gridDownYn:'N',gridID:'gr_repair_circula_parts2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section7',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_repair_circula_parts',id:'gr_repair_circula_parts2',gridName:'수리순환품 탈부착',dataName:'수리순환품 탈부착',validFeatures:'ignoreStatus=no',validExp:'attDetClsCd:구분:yes::key,circulPartCd:부품코드:yes::key',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false',rowStatusVisible:'true','ev:oneditend':'scwin.gr_repair_circula_parts2_oneditend'},E:[{T:1,N:'w2:caption',A:{id:'caption14',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'attDetClsCd',inputType:'text',style:'',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'circulPartCd',inputType:'text',style:'',value:'부품코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'circulPartNm',inputType:'text',style:'',value:'부품명',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'stockReflectYn',inputType:'text',style:'',value:'재고반영여부',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'attDetClsCd',inputType:'select',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'circulPartCd',inputType:'textImage',style:'',value:'',width:'100',maxLength:'15',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',imageClickFunction:'scwin.gr_repair_circula_parts2_openPopup',allowChar:'0-9a-zA-Z.-'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'circulPartNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockReflectYn',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_repair_circula_parts2_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',style:'',id:'udc_gr_repair_circula_parts2_bottomGrdBtn',rowDelUserAuth:'D',rowAddUserAuth:'C',gridID:'gr_repair_circula_parts2',rowAddFunction:'scwin.gr_repair_circula_parts_addrow'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업단위',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section8',style:'',id:'udc_gr_fix_work_unit2_topGrdBtn',gridUpYn:'N',gridDownYn:'N',gridID:'gr_fix_work_unit2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section8',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_fix_work_unit',id:'gr_fix_work_unit2',gridName:'작업단위',dataName:'작업단위',validFeatures:'ignoreStatus=no',validExp:'fixWrkUnitNo:작업단위:yes::key,fixWrkUnitNm:작업단위명:yes::key,wrkHhCnt:실제정비시간:yes,bilgWages:청구공임:yes',style:'',visibleRowNum:'4',visibleRowNumFix:'true',readOnly:'false',rowStatusVisible:'true','ev:oneditend':'scwin.gr_fix_work_unit2_oneditend','ev:onafteredit':'scwin.gr_fix_work_unit2_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption12',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{id:'h_fixWrkUnitNo',class:'txt-red',width:'70',inputType:'text',value:'작업단위'}},{T:1,N:'w2:column',A:{id:'h_fixWrkUnitNm',width:'130',inputType:'text',value:'작업단위명'}},{T:1,N:'w2:column',A:{id:'h_stndWrkHhCnt',width:'80',inputType:'text',value:'표준정비시간',hidden:'true'}},{T:1,N:'w2:column',A:{id:'h_nrm',width:'50',inputType:'text',value:'규격',class:'txt-blue'}},{T:1,N:'w2:column',A:{id:'h_qty',width:'40',inputType:'text',value:'수량',class:'txt-blue'}},{T:1,N:'w2:column',A:{id:'h_upr',width:'60',inputType:'text',value:'단가',class:'txt-blue'}},{T:1,N:'w2:column',A:{id:'h_wrkHhCnt',class:'txt-red',width:'80',inputType:'text',value:'실제정비시간'}},{T:1,N:'w2:column',A:{id:'h_bilgWages',width:'80',inputType:'text',value:'청구공임',class:'txt-blue'}},{T:1,N:'w2:column',A:{id:'h_vatAmt',width:'80',inputType:'text',value:'VAT',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{id:'fixWrkUnitNo',inputType:'textImage',width:'70',maxLength:'6',editModeEvent:'onclick',imageClickFunction:'scwin.gr_fix_work_unit2_openPopup',allowChar:'0-9a-zA-Z'}},{T:1,N:'w2:column',A:{id:'fixWrkUnitNm',inputType:'text',width:'130',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{id:'stndWrkHhCnt',inputType:'text',width:'80',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{id:'nrm',inputType:'text',width:'50',maxByteLength:'20'}},{T:1,N:'w2:column',A:{id:'qty',inputType:'text',width:'40',dataType:'number',textAlign:'right',displayFormat:'#,##0',allowChar:'0-9',maxByteLength:'3'}},{T:1,N:'w2:column',A:{id:'upr',inputType:'text',width:'60',dataType:'number',textAlign:'right',displayFormat:'#,##0',allowChar:'0-9',maxByteLength:'13'}},{T:1,N:'w2:column',A:{id:'wrkHhCnt',inputType:'text',width:'80',dataType:'float',displayFormat:'#,##0.0',textAlign:'right',allowChar:'0-9.',maxLength:'4.1'}},{T:1,N:'w2:column',A:{id:'bilgWages',inputType:'text',width:'80',dataType:'number',displayFormat:'#,##0',textAlign:'right',allowChar:'0-9',maxByteLength:'13'}},{T:1,N:'w2:column',A:{id:'vatAmt',inputType:'text',width:'80',dataType:'number',displayFormat:'#,##0',textAlign:'right',allowChar:'0-9',maxByteLength:'13'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{id:'f_fixWrkUnitNo',width:'70',inputType:'text',value:'합계'}},{T:1,N:'w2:column',A:{id:'f_fixWrkUnitNm',width:'130',inputType:'text'}},{T:1,N:'w2:column',A:{id:'f_stndWrkHhCnt',width:'80',inputType:'text',hidden:'true'}},{T:1,N:'w2:column',A:{id:'f_nrm',width:'50',inputType:'text'}},{T:1,N:'w2:column',A:{id:'f_qty',width:'40',inputType:'text'}},{T:1,N:'w2:column',A:{id:'f_upr',width:'60',inputType:'text'}},{T:1,N:'w2:column',A:{id:'f_wrkHhCnt',width:'80',inputType:'text'}},{T:1,N:'w2:column',A:{id:'f_bilgWages',width:'80',inputType:'expression',expression:'sum(\'bilgWages\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{id:'f_vatAmt',width:'80',inputType:'expression',expression:'sum(\'vatAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_fix_work_unit2_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',style:'',id:'udc_gr_fix_work_unit2_bottomGrdBtn',rowDelUserAuth:'D',rowAddUserAuth:'C',gridID:'gr_fix_work_unit2',rowAddFunction:'scwin.gr_fix_work_unit_addrow',rowDelFunction:'scwin.gr_fix_work_unit_delrow',cancelFunction:'scwin.gr_fix_work_unit_cencelrow'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'padding-top:12px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'소요부품',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section9',style:'',id:'udc_gr_fix_work_parts2_topGrdBtn',gridUpYn:'N',gridDownYn:'N',gridID:'gr_fix_work_parts2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section9',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_fix_work_parts',id:'gr_fix_work_parts2',gridName:'소요부품',dataName:'소요부품',validFeatures:'ignoreStatus=no',validExp:'fixWrkUnitNo:작업단위:yes::key,partCd:부품코드:yes::key,realOutDt:실출고일:no:date=YYYYMMDD&length=8:',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false','ev:oneditend':'scwin.gr_fix_work_parts2_oneditend',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_fix_work_parts2_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption15',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{id:'h_fixWrkUnitNo',class:'txt-red',displayMode:'label',inputType:'text',width:'70',value:'작업</br>단위'}},{T:1,N:'w2:column',A:{id:'h_partCd',class:'txt-red',displayMode:'label',inputType:'text',width:'140',value:'부품코드'}},{T:1,N:'w2:column',A:{id:'h_partNm',displayMode:'label',inputType:'text',width:'90',value:'부품명'}},{T:1,N:'w2:column',A:{id:'h_partUnitNm',displayMode:'label',inputType:'text',width:'50',value:'단위'}},{T:1,N:'w2:column',A:{id:'h_partQty',class:'txt-red',displayMode:'label',inputType:'text',width:'60',value:'사용</br>수량'}},{T:1,N:'w2:column',A:{id:'h_inClsCd',class:'txt-blue',displayMode:'label',inputType:'text',width:'60',value:'입고</br>구분'}},{T:1,N:'w2:column',A:{id:'h_clntNm',displayMode:'label',inputType:'text',width:'100',value:'거래처'}},{T:1,N:'w2:column',A:{id:'h_capExpdYn',class:'txt-blue',displayMode:'label',inputType:'text',width:'70',value:'자본적</br>지출'}},{T:1,N:'w2:column',A:{id:'h_stockQty',displayMode:'label',inputType:'text',width:'70',value:'현재고'}},{T:1,N:'w2:column',A:{id:'h_outUpr',displayMode:'label',inputType:'text',width:'70',value:'출고단가'}},{T:1,N:'w2:column',A:{id:'h_totAmt',displayMode:'label',inputType:'text',width:'96',value:'금액'}},{T:1,N:'w2:column',A:{id:'h_vatAmt',displayMode:'label',inputType:'text',width:'70',value:'VAT',hidden:'true'}},{T:1,N:'w2:column',A:{id:'h_realOutDt',class:'txt-blue',displayMode:'label',inputType:'text',width:'80',value:'실출고일'}},{T:1,N:'w2:column',A:{id:'h_partOutNo',displayMode:'label',inputType:'text',width:'70',value:'출고번호'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{id:'fixWrkUnitNo',inputType:'textImage',width:'70',maxLength:'6',editModeEvent:'onclick',editModeEventIcon:'onclick',imageClickFunction:'scwin.gr_fix_work_parts2_openPopup',allowChar:'0-9a-zA-Z'}},{T:1,N:'w2:column',A:{id:'partCd',inputType:'textImage',width:'140',maxLength:'15',editModeEvent:'onclick',editModeEventIcon:'onclick',imageClickFunction:'scwin.gr_fix_work_parts2_openPopup',allowChar:'0-9a-zA-Z.-'}},{T:1,N:'w2:column',A:{id:'partNm',inputType:'text',width:'90',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'partUnitNm',inputType:'text',width:'50',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'partQty',inputType:'text',width:'60',dataType:'number',displayFormat:'#,##0',allowChar:'0-9',textAlign:'right',maxLength:'5'}},{T:1,N:'w2:column',A:{id:'inClsCd',inputType:'select',width:'60',displayMode:'value delim label'}},{T:1,N:'w2:column',A:{id:'clntNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'capExpdYn',inputType:'checkbox',width:'70',trueValue:'1',falseValue:'0',valueType:'other',emptyValue:'0',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'stockQty',inputType:'text',width:'70',readOnly:'true',dataType:'number',displayFormat:'#,##0',allowChar:'0-9',textAlign:'right'}},{T:1,N:'w2:column',A:{id:'outUpr',inputType:'text',width:'70',readOnly:'true',dataType:'number',displayFormat:'#,##0',allowChar:'0-9',textAlign:'right'}},{T:1,N:'w2:column',A:{id:'totAmt',inputType:'text',width:'96',readOnly:'true',dataType:'number',displayFormat:'#,##0',allowChar:'0-9',textAlign:'right'}},{T:1,N:'w2:column',A:{id:'vatAmt',inputType:'text',width:'70',readOnly:'true',dataType:'number',displayFormat:'#,##0',hidden:'true',allowChar:'0-9',textAlign:'right'}},{T:1,N:'w2:column',A:{id:'realOutDt',inputType:'calendar',width:'80',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{id:'partOutNo',inputType:'text',width:'70',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_fix_work_parts2_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',style:'',id:'udc_gr_fix_work_parts2_bottomGrdBtn',rowAddUserAuth:'C',rowDelUserAuth:'D',gridID:'gr_fix_work_parts2',rowAddFunction:'scwin.gr_fix_work_parts_addrow'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content3'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'검사결과',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'tb_fix_result',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'검사결과',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledclass:'selectbox_disabled',id:'lux_passYn',style:'width: 150px',submenuSize:'fixed',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'검사시행일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_inspDt',style:'',mandatory:'true',objType:'data',title:'검사시행',validExp:'검사시행일:yes:'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'검사종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledclass:'selectbox_disabled',id:'lux_inspKndCd',style:'width: 150px',submenuSize:'fixed',objType:'key'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'다음 검사 예정일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_nextExpireDt',style:'',objType:'data',title:'다음 검사 예정일',validExp:'다음 검사 예정일:yes:'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'검사대행업체',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_inspAgencyClnt',codeId:'em_inspAgencyClntNo',validTitle:'검사대행업체',nameId:'txt_inspAgencyClntNm',mandatoryCode:'',refDataCollection:'ds_fix_work',code:'inspAgencyClntNo',name:'inspAgencyClntNm',UpperFlagCode:'0',maxlengthCode:'6',objectTypeCode:'data',validExpCode:'검사대행업체:no:','ev:onblurCodeEvent':'scwin.udc_inspAgencyClnt_onblurNameEvent','ev:onviewchangeNameEvent':'scwin.udc_inspAgencyClnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_inspAgencyClnt_onclickEvent',readOnlyName:'true',objTypeName:'data',objTypeCode:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정기검사비',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'em_inspCost',style:'width: 150px',mandatory:'true',objType:'data',title:'정기검사비',validExp:'정기검사비:yes:',displayFormat:'#,##0',allowChar:'0-9',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정기점검료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'em_agencyCost',style:'width: 150px',mandatory:'true',objType:'data',title:'정기점검료',validExp:'정기점검료:yes:',displayFormat:'#,##0',dataType:'number',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'검사비부가세',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'em_inspCostVat',style:'width: 150px',objType:'data',validExp:'검사비부가세:no:',displayFormat:'#,##0',dataType:'number',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전도금처리여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_advcdProcYn',renderType:'checkboxgroup',rows:'',style:'',objType:'data',falseValue:'0',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'자동차등록증',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'txt_fileNm',style:'width: 150px;',objType:'key',disabled:'true',title:'자동차등록증',validExp:'자동차등록증:yes',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_fileSet',style:'',type:'button','ev:onclick':'scwin.img_fileSet_onclick',objType:'data'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'bFile05',style:'',type:'button','ev:onclick':'scwin.bFile05_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DownLoad'}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'grp_ozreport',class:'left'},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cb_printCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cb_previewCheck1',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'0',style:'padding-right:10px;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_ozprint',style:'',title:'작업지시서',type:'button','ev:onclick':'scwin.f_OzReport'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업지시서'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'btn_Edit',style:'',type:'button','ev:onclick':'scwin.f_Update',objType:'bUpdate',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_SaveTemporary',style:'',type:'button','ev:onclick':'scwin.f_SaveTemporary',objType:'bSave2',userAuth:'C:U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'임시저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bSave',userAuth:'C:U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업완료'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Del',style:'',type:'button','ev:onclick':'scwin.f_Delete',objType:'bDelete',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Close',style:'',type:'button','ev:onclick':'scwin.btn_Close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'width:%; height:px;visibility:hidden;display: none;',id:'udc_closeYn'}},{T:1,N:'w2:udc_comCode',A:{id:'udc_comCode',style:'display: none;visibility:hidden;'}}]}]}]})