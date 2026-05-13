/*amd /ui/ds/fs/bilg/fs_202_06_04p.xml 86566 67d8eb4ebbab6dc4a5e56a7fba1d9700eb9b936cef92af9456ccac8b58210512 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sellWrkRsltsNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellWrkRsltsClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pldgMgntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'taxnClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaClsCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaPatternCd',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellingEvidence',saveRemovedData:'true','ev:ondataload':'scwin.ds_sellingEvidence_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'대표자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr',name:'주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcondNm',name:'업태명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'biztypeNm',name:'종목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'receiveSellingYn',name:'영수매출거래처여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prsnClntClsNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'세금계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLobranNm',name:'청구부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptCd',name:'수금귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptNm',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcrcAcctRecvNo',name:'외화채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiCnt',name:'Certi갯수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidRglClsCd',name:'세금계산서상태구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'receptClsCd',name:'영수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsNm',name:'과세구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatDrawDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cancelSpplyDt',name:'수정공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급가액원화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급가액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cashSellAmt',name:'현금매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액원화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcrcBilgAmt',name:'외화청구원화금액(환율이적용된금액)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc',name:'청구금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'initamtGrtDrAmt',name:'선수금보증처변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'initamtGrtRtnDrAmt',name:'선수금보증환불차변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cashRtnAmt',name:'현금환불금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fireInsrRateAmt',name:'화재보험료금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipCreatDt',name:'전표생성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리(마감)일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetNo',name:'매출부가세번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goods',name:'품명적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipCreatYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'서식구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctEvidClsCd',name:'(회계)증빙구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctZeroTaxClsCd',name:'(회계)영세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDtFr',name:'거래명세서일자-FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDtTo',name:'거래명세서일자-TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsNm',name:'확정구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'button',name:'BUTTON',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvSellAmt',name:'가수금매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cashPldgAmt',name:'현금담보금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvSellRtnDrAmt',name:'가수금매출환불차변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvPldgAmt',name:'가수금담보금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvPldgRtnDrAmt',name:'가수금담보환불차변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'initamtGrtCrAmt',name:'선수금보증대변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'매출유형의그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptCdNm',name:'수금귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curRow',name:'선택된ROW',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgPicNo',name:'청구담당자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgAmt',name:'담보금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'egain',name:'잔액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtClsCd',name:'가수금선수금구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgMgntNo',name:'담보관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outIntendNo',name:'출고예정번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntctPlNm',name:'연락처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntctPlPicNm',name:'연락처담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntctPlTelNo',name:'연락처전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgPlTelNo',name:'청구처전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtClsNm',name:'생성금액구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCertiNo',name:'상위거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetVatNo',name:'싱대매출부가세번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidRglClsNm',name:'증빙정상구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipCloseYm',name:'전표마감월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxCloseYm',name:'세무마감월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDtMm',name:'계약일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'위수탁매입부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호-저장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드-저장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilSubsidyPayStdDt',name:'유류보조금일자-저장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'calnDocDrawDt',name:'세금계산서일자-저장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'SEQ-저장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'정산금액-저장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvAdjmAmt',name:'기사정산금액-저장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'위수탁매입거래처-저장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'위수탁매입거래처명-저장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffSlipNo',name:'상계전표번호-저장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costItemCd',name:'비용항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffSlpNo',name:'상계전표번호-updateby김태원(2006.11.30)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hitekSendYn',name:'동부하이텍운임전송여부-(2008.06.27)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarExceptYn',name:'신고제외여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'url',name:'전자세금계산서조회URL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntceNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgCrn',name:'지급처사업자등록번호(대성냉동대납)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'지급방법(대성냉동대납)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'지급일자(대성냉동대납)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selPchsClsCd',name:'선사대리점에서사용하는구분값(0:매출,1:대납,2:알선수탁,3:일반관리비)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDrAcctCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustCrn',name:'청구거래처사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'imntSupplyAmt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctGubun',name:'전도금/미지급금구분추가0:전도금1:미지급금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'printChk',name:'매출세금계산서출력용',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_certiDetailList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seq',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNoSeq',name:'거래명세서번호순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRtAdptDt',name:'환율적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'매출순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNoSeq',name:'매출순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCd',name:'할인할증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수입수출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'매출단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'매출금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVol',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitClsCd',name:'작업단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'사업부문코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellGoodsPatternCd',name:'매출입품목유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invoiceNo',name:'송장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrowDdCnt',name:'경과일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'freeday',name:'FREEDAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jdgAmt',name:'감정금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmdtAmt',name:'관세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strDeg',name:'보관차수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scRt',name:'할증율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onWrkPlCd',name:'상차작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offWrkPlCd',name:'하차작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstOn',name:'운송구간_상차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstOff',name:'운송구간_하차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDst',name:'운송구간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdFrom',name:'선박코드From',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcntFrom',name:'항차From',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdTo',name:'선박코드To',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcntTo',name:'항차To',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retrvDt',name:'회수일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shippingDt',name:'선적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL/NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLoofcCd',name:'청구물류지점',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiInscrpSellItemNm',name:'매출항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNmX',name:'품명명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDepPortDt',name:'입출항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsArDepPortDt',name:'TS입출항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_collMoney',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seq',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvSellAmt',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtOutbrDt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptrNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgPicNo',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_certiCommon',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpVsslCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpPortcnt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDepPortDt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcrcBilgAmt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaClsCd',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaPatternCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmId',name:'name27',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveSellingInfo',action:'/ds.fs.bilg.bilg.RetrieveReceiptCustomerSellingInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_queryCondition","key":"IN_DS1"},{"id":"ds_sellingEvidence","key":"OUT_DS1"},{"id":"ds_certiDetailList","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_sellingEvidence","key":"OUT_DS1"},{"id":"ds_certiDetailList","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveSellingInfo_submitdone','ev:submiterror':'scwin.sbm_RetrieveSellingInfo_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveTaxInvoice',action:'/ds.fs.bilg.bilg.RetrieveReceiptTaxInvoiceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_queryCondition","key":"IN_DS1"},{"id":"ds_sellingEvidence","key":"OUT_DS1"},{"id":"ds_certiDetailList","key":"OUT_DS2"},{"id":"ds_certiCommon","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_sellingEvidence","key":"OUT_DS1"},{"id":"ds_certiDetailList","key":"OUT_DS2"},{"id":"ds_certiCommon","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveTaxInvoice_submitdone','ev:submiterror':'scwin.sbm_RetrieveTaxInvoice_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_createReceiptTaxInvoice',action:'/ds.fs.bilg.bilg.CreateReceiptTaxInvoiceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_sellingEvidence","key":"IN_DS1"},{"id":"ds_certiDetailList","key":"IN_DS2"},{"id":"ds_collMoney","key":"IN_DS3"},{"id":"ds_sellingEvidence","key":"OUT_DS1"},{"id":"ds_certiCommon","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_sellingEvidence","key":"OUT_DS1"},{"id":"ds_certiCommon","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_createReceiptTaxInvoice_submitdone','ev:submiterror':'scwin.sbm_createReceiptTaxInvoice_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteReceiptTaxInvoice',action:'/ds.fs.bilg.bilg.DeleteReceiptTaxInvoiceCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,[{"id":"ds_sellingEvidence","key":"IN_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_deleteReceiptTaxInvoice_submitdone','ev:submiterror':'scwin.sbm_deleteReceiptTaxInvoice_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//삭제 활성-[화면 로딩시 전표번호 있고 조회 후 or 저장 실행 후] - 매출증빙 내역이 있을 때
scwin.onpageload = function () {
  //var	arrParent = $p.getAllParameter().paramData.data; //배열

  var arrParent = $c.data.getParameter($p); //JSON

  //console.log('scwin.onpageload~~~');
  //console.log(arrParent);

  //메인화면에서 넘어온 값.
  scwin.sellWrkRsltsNo = arrParent.sellWrkRsltsNo;
  scwin.sellWrkRsltsClsCd = arrParent.sellWrkRsltsClsCd;
  scwin.pldgMgntNo = arrParent.pldgMgntNo;
  scwin.slipNo = arrParent.slipNo;
  scwin.bilgLodeptCd = arrParent.bilgLodeptCd;
  scwin.bilgClntNo = arrParent.bilgClntNo;
  scwin.taxnClsCd = arrParent.taxnClsCd;
  scwin.fmlaClsCd = arrParent.fmlaClsCd;
  scwin.fmlaPatternCd = arrParent.fmlaPatternCd;
  scwin.summary = arrParent.summary;

  /*
      scwin.slipNo="";
      //메인화면에서 넘어온 값.
      scwin.sellWrkRsltsNo = "0000000070";
      //scwin.sellWrkRsltsNo = "0001177078";
      scwin.sellWrkRsltsClsCd = "05";
      scwin.pldgMgntNo = "";
      scwin.slipNo = "";
      scwin.bilgLodeptCd = "4B2";
      scwin.bilgClntNo = "117081";
      scwin.taxnClsCd = "01";
      scwin.fmlaClsCd = "01";
      scwin.fmlaPatternCd = "07";
      scwin.summary = "";
  */

  //화면 전역변수
  scwin.saveflag = "N"; // 저장상태구분
  scwin.sumAmtAll = 0; //매출합계금액
  scwin.cashSellAmt = 0; //현금매출액 		
  scwin.susRecvSellRtnDrAmt = 0; //가수금매출환불차변금액
  scwin.susRecvSellAmt = 0; //가수금매출금액
  scwin.susRecvSellAmtTot = 0; //가수금매출금액+가수금매출환불차변금액
  scwin.pldgAmt = 0; //담보금액
  scwin.initamtGrtDrAmt = 0; //선수금보증차변금액
  scwin.egain = 0; //잡이익
  scwin.sumAmtDtl = 0; //합계
  scwin.initamtGrtRtnDrAmt = 0; //선수금보증환불차변금액
  scwin.cashRtnAmt = 0; //현금환불금액
  scwin.maxSusRtnAmt = 0; //MAX가수금매출환불차변금액
  scwin.maxInitRtnAmt = 0; //MAX선수금보증환불차변금액

  scwin.susRecvInitamtClsCd = "01";
  scwin.p_summary = "";

  //scwin.slipNo = "";

  scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.

  scwin.f_OnLoad();
};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  //var	arrParent =	window.dialogArguments ;

  //scwin.f_CreatDataSet();

  ds_queryCondition.set("sellWrkRsltsNo", scwin.sellWrkRsltsNo);
  ds_queryCondition.set("sellWrkRsltsClsCd", scwin.sellWrkRsltsClsCd);
  ds_queryCondition.set("pldgMgntNo", scwin.pldgMgntNo);
  ds_queryCondition.set("slipNo", scwin.slipNo);
  ds_queryCondition.set("bilgLodeptCd", scwin.bilgLodeptCd);
  ds_queryCondition.set("bilgClntNo", scwin.bilgClntNo);
  ds_queryCondition.set("taxnClsCd", scwin.taxnClsCd);
  ds_queryCondition.set("fmlaClsCd", scwin.fmlaClsCd);
  ds_queryCondition.set("fmlaPatternCd", scwin.fmlaPatternCd);
  scwin.p_summary = scwin.summary == null ? "" : scwin.summary;
  $c.gus.cfEnableObj($p, ed_slipCloseYm, false);
  $c.gus.cfEnableObj($p, ed_taxCloseYm, false);

  //전자세금계산서 반영
  //$c.gus.cfDisableObjects([ed_email]);

  //if(arrParent.slipNo == null || arrParent.slipNo == ""){

  if (scwin.slipNo == null || scwin.slipNo == "" || $c.gus.cfIsNull($p, scwin.slipNo)) {
    scwin.f_RetrieveSellingInfo();
    //전표번호가 존재하지 않는다면
    //E-mail 및 신고제외여부 disabled
    //$c.gus.cfEnableObjects([chb_declarExceptYn, img_email]);			
  } else {
    scwin.f_RetrieveTaxInvoice();
    //E-mail 및 신고제외여부 enabled
    //$c.gus.cfDisableObjects([ed_email, chb_declarExceptYn, img_email]);
  }
};

//-------------------------------------------------------------------------
// 화면종료시
//-------------------------------------------------------------------------
scwin.f_OnUnload = function () {
  var returnObject = new Object();
  if (scwin.saveflag == "C" || scwin.saveflag == "E") {
    returnObject.sellVatNo = ds_sellingEvidence.getCellData(0, "sellVatNo");
    returnObject.slipNo = ds_sellingEvidence.getCellData(0, "slipNo");
    returnObject.delYn = "0";
  } else if (scwin.saveflag == "D") {
    returnObject.sellVatNo = "";
    returnObject.slipNo = "";
    returnObject.delYn = "1";
  } else {
    returnObject.sellVatNo = "";
    returnObject.slipNo = "";
    returnObject.delYn = "0";
  }
  returnObject.trClsCd = scwin.saveflag;
  //window.returnValue = returnObject;

  $c.win.closePopup($p, returnObject);
};

//-------------------------------------------------------------------------
// 수령거래처매출정보조회
//-------------------------------------------------------------------------
scwin.f_RetrieveSellingInfo = function () {
  /*
  	var command = "";
  	if(ds_queryCondition.getCellData(0, "fmlaPatternCd") == "05"
  	|| ds_queryCondition.getCellData(0, "fmlaPatternCd") == "10"
  	|| ds_queryCondition.getCellData(0, "fmlaPatternCd") == "12"
  	|| ds_queryCondition.getCellData(0, "fmlaPatternCd") == "13"
  	|| ds_queryCondition.getCellData(0, "fmlaPatternCd") == "20"
  	|| ds_queryCondition.getCellData(0, "fmlaPatternCd") == "21"
  	|| ds_queryCondition.getCellData(0, "fmlaPatternCd") == "22"
  	|| ds_queryCondition.getCellData(0, "fmlaPatternCd") == "23")
  	{
  		command = "/ds.fs.bilg.bilg.RetrieveReceiptCustomerSellingInfoCMD.do";
  	}
  */
  $c.sbm.execute($p, sbm_RetrieveSellingInfo); //tr_RetrieveSellingInfo.Post();
};

//-------------------------------------------------------------------------
// 수령세금계산서조회
//-------------------------------------------------------------------------
scwin.f_RetrieveTaxInvoice = function () {
  //ds_sellingEvidence.setJSON([]);
  $c.sbm.execute($p, sbm_RetrieveTaxInvoice); //tr_RetrieveTaxInvoice.Post();

  //tr_RetrieveTaxInvoice.Action = "/ds.fs.bilg.bilg.RetrieveReceiptTaxInvoiceCMD.do";
  //tr_RetrieveTaxInvoice.Post();    		
};

//-------------------------------------------------------------------------
// 가수금 내역 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_susRecvPop = async function () {
  ed_susRecvSellAmtTot.setValue(0);
  tbx_susRecvSellAmtTot.setValue($c.gus.cfInsertComma($p, 0));
  scwin.f_setAmtSusRecvSellAmtTot();
  ds_collMoney.setJSON([]);
  var valueObject = new Object();
  valueObject.prov = ds_collMoney;
  valueObject.fromDate = scwin.strFromDate;
  valueObject.toDate = scwin.strFrDate;
  valueObject.clsCd = acb_susRecvInitamtClsCd.getValue() == "01" ? "2" : "3"; // 1:가수금/선수금, 2:가수금, 3:선수금
  valueObject.clntNo = ed_bilgClnt.getValue();
  valueObject.bankbookNo = ""; //통장번호 -> 필요없을경우 Setting 안해도됨.;

  let v_url = "/ui/ac/fm/collmoneymgnt/rcptmgnt/fm_502_03_00p.xml";
  let opt = {
    id: "pupup",
    popupName: "가수금/선수금POPUP",
    modal: true,
    type: "browserPopup",
    width: 1280,
    height: 550,
    title: "가수금/선수금 내역"
  };
  let data = valueObject;
  var rt = await $c.win.openPopup($p, v_url, opt, data);
  var remainAmt = 0;
  var remainAmt_in = 0;
  for (var i = 0; i < ds_collMoney.getRowCount(); i++) {
    remainAmt_in = $c.gus.cfIsNull($p, ds_collMoney.getCellData(i, "remainAmt")) ? 0 : parseInt(ds_collMoney.getCellData(i, "remainAmt"));
    remainAmt += remainAmt_in;
  }
  ed_susRecvSellAmtTot.setValue(remainAmt);
  tbx_susRecvSellAmtTot.setValue($c.gus.cfInsertComma($p, remainAmt));
  scwin.f_setAmtSusRecvSellAmtTot();
};

//-------------------------------------------------------------------------
// 매출증빙 내역 Set...
//-------------------------------------------------------------------------
scwin.f_setsellingEvidence = function () {
  tbx_sellVatNo.setValue(ds_sellingEvidence.getCellData(0, "sellVatNo")); //세금계산서번호
  tbx_crn.setValue($c.gus.cfGetFormatStr($p, ds_sellingEvidence.getCellData(0, "crn"), "###-##-#####")); //사업자번호
  tbx_busiNm.setValue(ds_sellingEvidence.getCellData(0, "busiNm")); //상호
  tbx_repstNm.setValue(ds_sellingEvidence.getCellData(0, "repstNm")); //대표자

  ica_spplyDt.setValue(ds_sellingEvidence.getCellData(0, "spplyDt")); //공급일자
  tbx_taxnClsCd.setValue(ds_sellingEvidence.getCellData(0, "taxnClsCd") + " (" + ds_sellingEvidence.getCellData(0, "taxnClsNm") + ")"); //부가세구분
  ed_bilgClnt.setValue(ds_sellingEvidence.getCellData(0, "bilgClntNo")); //거래처
  ed_bilgClntNm.setValue(ds_sellingEvidence.getCellData(0, "bilgClntNm")); //거래처
  tbx_bilgLodept.setValue(ds_sellingEvidence.getCellData(0, "bilgLodeptCd") + " " + ds_sellingEvidence.getCellData(0, "bilgLobranNm")); //청구부서
  tbx_slipNo.setValue(ds_sellingEvidence.getCellData(0, "slipNo")); //전표번호
  tbx_pldgMgntNo.setValue(ds_sellingEvidence.getCellData(0, "pldgMgntNo")); //담보관리번호
  ica_slipDt.setValue(ds_sellingEvidence.getCellData(0, "slipDt")); //전표생성일자
  tbx_adptExchRt.setValue(ds_sellingEvidence.getCellData(0, "adptExchRt")); //환율
  tbx_spplyAmt.setValue($c.gus.cfInsertComma($p, ds_sellingEvidence.getCellData(0, "spplyAmt"))); //원화공급액
  tbx_spplyAmtFcrc.setValue($c.gus.cfInsertComma($p, ds_sellingEvidence.getCellData(0, "spplyAmtFcrc"))); //외화매출액
  tbx_vatAmt.setValue($c.gus.cfInsertComma($p, ds_sellingEvidence.getCellData(0, "vatAmt"))); //부가세
  tbx_fireInsrRateAmt.setValue($c.gus.cfInsertComma($p, ds_sellingEvidence.getCellData(0, "fireInsrRateAmt"))); //화재보험표
  ed_summary.setValue(ds_sellingEvidence.getCellData(0, "summary")); //적요
  ed_goods.setValue(ds_sellingEvidence.getCellData(0, "goods")); //적요
  tbx_sumAmt.setValue($c.gus.cfInsertComma($p, ds_sellingEvidence.getCellData(0, "sumAmt"))); //합계
  acb_susRecvInitamtClsCd.setValue(0, ds_sellingEvidence.getCellData(0, "susRecvInitamtClsCd")); //선/가수금구분코드	
  scwin.susRecvInitamtClsCd = ds_sellingEvidence.getCellData(0, "susRecvInitamtClsCd");
  ed_cntctPlNm.setValue(ds_sellingEvidence.getCellData(0, "cntctPlNm")); //연락처명
  ed_cntctPlPicNm.setValue(ds_sellingEvidence.getCellData(0, "cntctPlPicNm")); //연락처담당자명
  ed_cntctPlTelNo.setValue(ds_sellingEvidence.getCellData(0, "cntctPlTelNo")); //연락처전화번호

  var v_susRecvSellRtnDrAmt = $c.gus.cfIsNull($p, ds_sellingEvidence.getCellData(0, "susRecvSellRtnDrAmt")) ? 0 : parseInt(ds_sellingEvidence.getCellData(0, "susRecvSellRtnDrAmt"));
  var v_susRecvSellAmt = $c.gus.cfIsNull($p, ds_sellingEvidence.getCellData(0, "susRecvSellAmt")) ? 0 : parseInt(ds_sellingEvidence.getCellData(0, "susRecvSellAmt"));
  var v_cashSellAmt = $c.gus.cfIsNull($p, ds_sellingEvidence.getCellData(0, "cashSellAmt")) ? 0 : parseInt(ds_sellingEvidence.getCellData(0, "cashSellAmt"));
  var v_pldgAmt = $c.gus.cfIsNull($p, ds_sellingEvidence.getCellData(0, "pldgAmt")) ? 0 : parseInt(ds_sellingEvidence.getCellData(0, "pldgAmt"));
  tbx_susRecvSellAmtTot.setValue($c.gus.cfInsertComma($p, v_susRecvSellRtnDrAmt + v_susRecvSellAmt)); //무통장입금

  //tbx_susRecvSellAmtTot.setValue($c.gus.cfInsertComma(eval(ds_sellingEvidence.getCellData(0, "susRecvSellRtnDrAmt")+ds_sellingEvidence.getCellData(0, "susRecvSellAmt"))));		//무통장입금

  ed_cashSellAmt.setValue($c.gus.cfInsertComma($p, v_cashSellAmt)); //현금매출금액
  tbx_pldgAmt.setValue($c.gus.cfInsertComma($p, v_pldgAmt)); //담보금액
  ed_pldgAmt.setValue(v_pldgAmt);
  tbx_initamtGrtDrAmt.setValue($c.gus.cfInsertComma($p, ds_sellingEvidence.getCellData(0, "initamtGrtDrAmt"))); //선수금보증차변금액
  tbx_egain.setValue($c.gus.cfInsertComma($p, ds_sellingEvidence.getCellData(0, "egain"))); //잔액

  tbx_sumAmtDtl.setValue($c.gus.cfInsertComma($p, v_cashSellAmt + v_susRecvSellRtnDrAmt + v_susRecvSellAmt + v_pldgAmt));

  //tbx_sumAmtDtl.setValue($c.gus.cfInsertComma(eval(ds_sellingEvidence.getCellData(0, "cashSellAmt")+ds_sellingEvidence.getCellData(0, "susRecvSellRtnDrAmt")+ds_sellingEvidence.getCellData(0, "susRecvSellAmt")+ds_sellingEvidence.getCellData(0, "pldgAmt"))));

  ed_cashRtnAmt.setValue($c.gus.cfInsertComma($p, ds_sellingEvidence.getCellData(0, "cashRtnAmt")));
  tbx_offsetVatNo.setValue(ds_sellingEvidence.getCellData(0, "offsetVatNo"));
  tbx_offsetNo.setValue(ds_sellingEvidence.getCellData(0, "offsetNo"));
  tbx_dcsnClsNm.setValue(ds_sellingEvidence.getCellData(0, "dcsnClsNm"));
  ica_postDt.setValue(ds_sellingEvidence.getCellData(0, "postDt")); //회계처리일자		

  ed_slipCloseYm.setValue(ds_sellingEvidence.getCellData(0, "slipCloseYm")); //회계마감월
  ed_taxCloseYm.setValue(ds_sellingEvidence.getCellData(0, "taxCloseYm")); //세무마감월

  //전자세금계산서 반영
  /*
  ed_email.text		= ds_sellingEvidence.getCellData(0, "email"));					//이메일
  chb_declarExceptYn.checked		= ds_sellingEvidence.getCellData(0, "declarExceptYn"));	//신고제외여부
  f_mandatoryCheck();
  */
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //var	arrParent =	window.dialogArguments ; 

  // 가수금인 경우 가수금의 입금일자가 전표일자보다 크면 세금계산서 생성 불가 2017.01.09
  var chkSlipMm = ica_slipDt.getValue().substring(0, 6);
  var chkSusMn = "";
  if (ds_collMoney.getRowCount() > 0) {
    for (var i = 0; i < ds_collMoney.getRowCount(); i++) {
      chkSusMn = ds_collMoney.getCellData(i, "susRecvInitamtOutbrDt").substring(0, 6);
      //alert("전표일자"+chkSlipMm+"입금월"+chkSusMn);
      if (chkSusMn > chkSlipMm) {
        await $c.win.alert($p, "가수금의 입금월은 전표월보다 이전이거나 같아야 합니다. \n다시 확인하십시오.");
        return;
      }
    }
  }

  //필수입력항목 체크
  let ret = await $c.gus.cfValidate($p, [ica_spplyDt, ed_summary, ed_goods], null, true);
  if (!ret) {
    return;
  }
  if (scwin.sumAmtAll < 1) {
    await $c.gus.cfAlertMsg($p, "금액이 0 이면 저장할 수 없습니다.");
    return;
  }
  //수금 내역 금액 검증
  if (!scwin.f_chkAmt()) {
    await $c.gus.cfAlertMsg($p, "수금정보의 금액항목 오류입니다.\n다시 확인하십시오.");
    return;
  }

  //환불(전도금-현금)계정이 발생하면 에러처리 2011.07.01
  if (ed_cashRtnAmt.getValue() != 0) {
    await $c.gus.cfAlertMsg($p, "전도금계정 전표는 생성할 수 없습니다.\n다시 확인하십시오.");
    return;
  }
  if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) return;
  ds_sellingEvidence.setCellData(0, "spplyDt", ica_spplyDt.getValue());
  ds_sellingEvidence.setCellData(0, "slipDt", ica_slipDt.getValue());
  ds_sellingEvidence.setCellData(0, "collMoneyAcctDeptCd", ds_sellingEvidence.getCellData(0, "acctDeptCd"));
  ds_sellingEvidence.setCellData(0, "summary", ed_summary.getValue());
  ds_sellingEvidence.setCellData(0, "goods", ed_goods.getValue());
  ds_sellingEvidence.setCellData(0, "crcCd", "KRW");
  ds_sellingEvidence.setCellData(0, "spplyAmt", ed_spplyAmt.getValue().replaceAll(",", ""));
  ds_sellingEvidence.setCellData(0, "spplyAmtFcrc", ed_spplyAmtFcrc.getValue().replaceAll(",", ""));
  ds_sellingEvidence.setCellData(0, "vatAmt", ed_vatAmt.getValue().replaceAll(",", ""));
  ds_sellingEvidence.setCellData(0, "sumAmt", ed_sumAmt.getValue().replaceAll(",", ""));
  //ds_sellingEvidence.setCellData(0, "fmlaClsCd"        , ds_queryCondition.getCellData(0, "fmlaClsCd"));
  //ds_sellingEvidence.setCellData(0, "fmlaPatternCd"    , ds_certiDetailList.getCellData(0, "fmlaPatternCd"));
  ds_sellingEvidence.setCellData(0, "receptClsCd", "01"); // 영수
  ds_sellingEvidence.setCellData(0, "evidRglClsCd", "01"); //세금계산서 상태 : 01 '정상', 02 '적자', 99 '삭제'
  ds_sellingEvidence.setCellData(0, "certiCnt", "1"); //거래명세서건수
  ds_sellingEvidence.setCellData(0, "bilgAmt", "0");
  ds_sellingEvidence.setCellData(0, "bilgAmtFcrc", "0");
  ds_sellingEvidence.setCellData(0, "fcrcBilgAmt", "0");
  ds_sellingEvidence.setCellData(0, "cntctPlNm", ed_cntctPlNm.getValue()); //연락처명
  ds_sellingEvidence.setCellData(0, "cntctPlPicNm", ed_cntctPlPicNm.getValue()); //연락처담당자명
  ds_sellingEvidence.setCellData(0, "cntctPlTelNo", ed_cntctPlTelNo.getValue()); //연락처전화번호

  ds_sellingEvidence.setCellData(0, "cashSellAmt", ed_cashSellAmt.getValue().replaceAll(",", ""));
  ds_sellingEvidence.setCellData(0, "susRecvSellRtnDrAmt", ed_susRecvSellRtnDrAmt.getValue().replaceAll(",", ""));
  ds_sellingEvidence.setCellData(0, "susRecvSellAmt", ed_susRecvSellAmt.getValue().replaceAll(",", ""));
  ds_sellingEvidence.setCellData(0, "pldgAmt", ed_pldgAmt.getValue().replaceAll(",", ""));
  ds_sellingEvidence.setCellData(0, "initamtGrtDrAmt", ed_initamtGrtDrAmt.getValue().replaceAll(",", ""));
  ds_sellingEvidence.setCellData(0, "egain", ed_egain.getValue());
  ds_sellingEvidence.setCellData(0, "initamtGrtRtnDrAmt", ed_initamtGrtRtnDrAmt.getValue().replaceAll(",", ""));
  ds_sellingEvidence.setCellData(0, "initamtGrtCrAmt", scwin.initamtGrtDrAmt + scwin.egain + scwin.initamtGrtRtnDrAmt);
  ds_sellingEvidence.setCellData(0, "cashRtnAmt", ed_cashRtnAmt.getValue().replaceAll(",", ""));
  ds_sellingEvidence.setCellData(0, "susRecvInitamtClsCd", acb_susRecvInitamtClsCd.getValue());
  ds_sellingEvidence.setCellData(0, "fireInsrRateAmt", ed_fireInsrRateAmt.getValue().replaceAll(",", ""));
  $c.sbm.execute($p, sbm_createReceiptTaxInvoice); //tr_createReceiptTaxInvoice.Post();

  //tr_createReceiptTaxInvoice.Action = "/ds.fs.bilg.bilg.CreateReceiptTaxInvoiceCMD.do";
  //tr_createReceiptTaxInvoice.Post();		
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  if (ds_sellingEvidence.getCellData(0, "postDt") != "") {
    if (!(await $c.win.confirm($p, "회계처리되었습니다. 삭제하시겠습니까?"))) return;
  }
  if (!(await $c.gus.cfAlertMsg($p, MSG_CM_CRM_008, ['세금계산서(' + ds_sellingEvidence.getCellData(0, "sellVatNo") + ')']))) return;
  if (!(await scwin.f_CheckTaxCancelSpplyDt())) return;
  ds_sellingEvidence.getCellData(0, "fmlaClsCd", "01"); //거래명세서 : 01, Bill : 02
  ds_sellingEvidence.getCellData(0, "cancelSpplyDt", ica_cancelSpplyDt.getValue());
  $c.sbm.execute($p, sbm_deleteReceiptTaxInvoice); //tr_deleteReceiptTaxInvoice.Post();

  //tr_deleteReceiptTaxInvoice.Action = "/ds.fs.bilg.bilg.DeleteReceiptTaxInvoiceCMD.do";
  //tr_deleteReceiptTaxInvoice.Post();	 
};

//-------------------------------------------------------------------------
// 세금계산서 취소 때  세무마감여부 CHECK
//-------------------------------------------------------------------------
scwin.f_CheckTaxCancelSpplyDt = async function () {
  var taxCloseYm = ed_taxCloseYm.getValue();
  var spplyYm = ica_spplyDt.getValue().substring(0, 6);
  var isTrue;
  if (taxCloseYm >= spplyYm) {
    isTrue = !(await $c.win.confirm($p, "세무마감된 계산서를 취소할 경우에는 반드시 거래처에 수정세금계산서를 발행해야 합니다.(거래처와 합의 요함)\n\n세금계산서 및 전표를 취소하시겠습니까?"));
    if (!isTrue) return;
    if ($c.gus.cfIsNull($p, ica_cancelSpplyDt.getValue())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["[수정세금계산서 공급일자 ]"]); //@은(는) 필수 입력 항목입니다
      ica_cancelSpplyDt.focus();
      return false;
    }
    if (!(await $c.gus.cfValidate($p, [ica_cancelSpplyDt], null, true))) {
      ica_cancelSpplyDt.focus();
      return;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 신고제외여부에 따른 E-mail 입력 불/가능 제어
//-------------------------------------------------------------------------
/*
scwin.f_mandatoryCheck = function() {
//체크되었다면
if (chb_declarExceptYn.checked) {
//이메일을 입력받을 필요가 없다.
ed_email.setValue("");
$c.gus.cfDisableObjects([ed_email, img_email]);
} else {
$c.gus.cfEnableObjects([img_email]);
}
};
*/

//-------------------------------------------------------------------------
// 인쇄 (통합발행)
//-------------------------------------------------------------------------
scwin.f_totalPrint = async function () {
  //cbx_sumCheck : 0-할인할증집계여부, 1-인쇄옵션,2-미리보기
  //console.log('통합발행~'+cbx_sumCheck.getSelectedIndex(',').length);
  //console.log('통합발행~'+cbx_sumCheck.getSelectedIndex(','));

  if (ds_sellingEvidence.getCellData(0, "sellVatNo") == null || ds_sellingEvidence.getCellData(0, "sellVatNo") == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["발행할 통합발행내역"]);
    return;
  }
  if (!(await $c.win.confirm($p, "통합발행 하시겠습니까?"))) {
    return;
  }

  //if(cbx_sumCheck.getSelectedIndex(',').length < 1){
  //    return;
  //}

  //OZStartBatch();
  var arrChk = cbx_sumCheck.getSelectedIndex(',');
  var arrChk2 = cbx_wt.getSelectedIndex(',');
  var sumGbnYn = 'N';
  var wtGbnYn = 'N';
  if (arrChk.length > 0 && arrChk.search('0') > -1) {
    sumGbnYn = 'Y';
  }
  if (arrChk2.length > 0) {
    wtGbnYn = 'Y';
  }
  var odiParam = {};
  var odi1 = "01";
  var viewerParam = {
    // "viewer.zoom" : "100"
    //,"viewer.useprogressbar" : "false"
  };
  var formParam = {};
  var odi2 = "";
  let reportDataList = [];
  for (var i = 0; i < ds_certiCommon.getRowCount(); i++) {
    odi2 = ds_certiCommon.getCellData(i, "inscrpFmlaPatternCd");
    // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
    odiParam = {
      "bilgLodeptCd": ds_certiCommon.getCellData(i, "bilgLodeptCd"),
      "bilgClntNo": ds_certiCommon.getCellData(i, "bilgClntNo"),
      "qryConKnd": "02",
      "confirmDtFm": "",
      "confirmDtTo": "",
      "spplyDtFm": "",
      "spplyDtTo": "",
      "modId": "",
      "printFg": "",
      "certiAggregateFg": "",
      "dcsnClsCd": "",
      "certiNo": ds_certiCommon.getCellData(i, "certiNo"),
      "fmlaClsCd": ds_certiCommon.getCellData(i, "fmlaClsCd"),
      "fmlaPatternCd": ds_certiCommon.getCellData(i, "fmlaPatternCd"),
      "upperFmlaClsCd": "",
      "upperFmlaPatternCd": "",
      "sellVatNo": "",
      "inscrpFmlaClsCd": ds_certiCommon.getCellData(i, "inscrpFmlaClsCd"),
      "inscrpFmlaPatternCd": ds_certiCommon.getCellData(i, "inscrpFmlaPatternCd"),
      "spplyFg": lc_spplyFg.getValue(),
      "sumGbn": sumGbnYn //추가
      ,

      "wtGbn": wtGbnYn //추가
    };
    reportDataList.push({
      odiName: "fs_202_06_10_" + odi1 + "_" + odi2,
      reportName: "/ds/fs/fs_202_06_10_" + odi1 + "_" + odi2 + ".ozr",
      odiParam: odiParam,
      viewerParam: {
        useprogressbar: false // 프로그레스바 쓸지 말지
      },
      formParam: {}
    });
  }
  if (reportDataList.length === 0) {
    await $c.win.alert($p, "선택된 내역이 없습니다.");
    return;
  }

  /*
  로컬(레포트)
  1. 할인할증집계여부 만 선택 : 다운로드
  2. 인쇄옵션까지 선택 : 인쇄 관련 옵션화면 나옴
  3. 인쇄옵션만 선택 : 인쇄 관련 옵션화면 나옴
  4. 둘다 미선택 : 1번과 동일한 파일 다운로드 나옴 
  */
  if (cbx_sumCheck.getSelectedIndex(",").indexOf("2") > -1 && reportDataList.length == 1) {
    //미리보기 단건 (다운로드)
    let opts = {
      type: 'download',
      // viewer, print, download
      printMode: 'silent',
      // silent, view
      viewerMode: "export"
    };
    await $c.ext.openOzReport($p, reportDataList[0], opts);
  } else if (cbx_sumCheck.getSelectedIndex(",").indexOf("2") > -1 && reportDataList.length > 1) {
    //미리보기 다건 (다운로드)
    let opts = {
      type: 'download',
      // viewer, print, download
      printMode: 'silent',
      // silent, view
      viewerMode: "export"
    };
    await $c.ext.openOzReport($p, reportDataList[0], opts);
    reportDataList.shift();
    let opts2 = {
      type: 'download',
      // viewer, print, download
      printMode: 'silent',
      // silent, view
      viewerMode: "export"
    };
    await $c.ext.openBatchOzReport($p, reportDataList, opts2);
  } else if (cbx_sumCheck.getSelectedIndex(",").indexOf("1") > -1) {
    //인쇄옵션(인쇄옵션)
    let opts = {
      type: 'print',
      // viewer, print, download
      viewerMode: 'print',
      printMode: 'silent' // silent, view
    };
    await $c.ext.openBatchOzReport($p, reportDataList, opts);
  } else if (cbx_sumCheck.getSelectedIndex(",").indexOf("0") > -1) {
    //할증집계(인쇄옵션)
    let opts = {
      type: 'print',
      // viewer, print, download
      viewerMode: 'print',
      printMode: 'silent' // silent, view
    };
    await $c.ext.openBatchOzReport($p, reportDataList, opts);
    ;
  } else {
    //체크없음(다운로드)
    let opts = {
      type: 'download',
      // viewer, print, download
      printMode: 'silent',
      // silent, view
      viewerMode: "export"
    };
    await $c.ext.openOzReport($p, reportDataList[0], opts);
    reportDataList.shift();
    let opts2 = {
      type: 'download',
      // viewer, print, download
      printMode: 'silent',
      // silent, view
      viewerMode: "export"
    };
    await $c.ext.openBatchOzReport($p, reportDataList, opts2);
  }
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};
//-------------------------------------------------------------------------
// 금액계산 최초 조회시
//-------------------------------------------------------------------------
scwin.f_setAmtFirst = function () {
  scwin.f_setMethAmt();
  scwin.initamtGrtDrAmt = scwin.sumAmtAll - scwin.pldgAmt >= 0 ? scwin.pldgAmt : scwin.sumAmtAll;
  scwin.initamtGrtRtnDrAmt = scwin.sumAmtAll - scwin.pldgAmt >= 0 ? 0 : scwin.pldgAmt - scwin.sumAmtAll;
  scwin.maxInitRtnAmt = scwin.sumAmtAll - scwin.pldgAmt >= 0 ? 0 : scwin.pldgAmt - scwin.sumAmtAll;
  scwin.sumAmtDtl = scwin.cashSellAmt + scwin.susRecvSellAmtTot + scwin.pldgAmt;
  scwin.cashRtnAmt = scwin.initamtGrtRtnDrAmt + scwin.susRecvSellRtnDrAmt;
  ed_susRecvSellRtnDrAmt.setValue(scwin.susRecvSellRtnDrAmt);
  ed_susRecvSellAmt.setValue(scwin.susRecvSellAmt);
  ed_sumAmtAll.setValue(scwin.sumAmtAll);
  ed_initamtGrtDrAmt.setValue(scwin.initamtGrtDrAmt);
  ed_egain.setValue(scwin.egain);
  ed_sumAmtDtl.setValue(scwin.sumAmtDtl);
  ed_initamtGrtRtnDrAmt.setValue(scwin.initamtGrtRtnDrAmt);
  ed_cashRtnAmt.setValue($c.gus.cfInsertComma($p, scwin.cashRtnAmt));
  ed_maxSusRtnAmt.setValue(scwin.maxSusRtnAmt);
  ed_maxInitRtnAmt.setValue(scwin.maxInitRtnAmt);
  tbx_initamtGrtDrAmt.setValue($c.gus.cfInsertComma($p, scwin.initamtGrtDrAmt));
  tbx_sumAmtDtl.setValue($c.gus.cfInsertComma($p, scwin.sumAmtDtl));
  ed_cashSellAmtCon.setValue(scwin.sumAmtAll - scwin.susRecvSellRtnDrAmt - scwin.susRecvSellAmt - scwin.pldgAmt + scwin.egain + scwin.cashRtnAmt);
};

//-------------------------------------------------------------------------
// 금액계산 현금 매출액 입력시
//-------------------------------------------------------------------------
scwin.f_setAmtCashSellAmt = function () {
  scwin.f_setMethAmt();
  sumAmtDtl = scwin.cashSellAmt + scwin.susRecvSellAmtTot + scwin.pldgAmt;
  ed_susRecvSellRtnDrAmt.setValue(scwin.susRecvSellRtnDrAmt);
  ed_susRecvSellAmt.setValue(scwin.susRecvSellAmt);
  ed_sumAmtAll.setValue(scwin.sumAmtAll);
  ed_initamtGrtDrAmt.setValue(scwin.initamtGrtDrAmt);
  ed_egain.setValue(scwin.egain);
  ed_sumAmtDtl.setValue(scwin.sumAmtDtl);
  ed_initamtGrtRtnDrAmt.setValue(scwin.initamtGrtRtnDrAmt);
  ed_cashRtnAmt.setValue($c.gus.cfInsertComma($p, scwin.cashRtnAmt));
  ed_maxSusRtnAmt.setValue(scwin.maxSusRtnAmt);
  ed_maxInitRtnAmt.setValue(scwin.maxInitRtnAmt);
  tbx_sumAmtDtl.setValue($c.gus.cfInsertComma($p, sumAmtDtl));
  ed_cashSellAmtCon.setValue(scwin.sumAmtAll - scwin.susRecvSellRtnDrAmt - scwin.susRecvSellAmt - scwin.pldgAmt + scwin.egain + scwin.cashRtnAmt);
};

//-------------------------------------------------------------------------
// 금액계산 가수금액 입력시
//-------------------------------------------------------------------------
scwin.f_setAmtSusRecvSellAmtTot = function () {
  scwin.f_setMethAmt();
  var amt = scwin.sumAmtAll - scwin.pldgAmt;
  scwin.susRecvSellAmt = amt <= 0 ? 0 : amt - scwin.susRecvSellAmtTot >= 0 ? scwin.susRecvSellAmtTot : amt;
  scwin.susRecvSellRtnDrAmt = scwin.susRecvSellAmtTot - scwin.susRecvSellAmt;
  scwin.maxSusRtnAmt = scwin.susRecvSellAmtTot - scwin.susRecvSellAmt;
  scwin.sumAmtDtl = scwin.cashSellAmt + scwin.susRecvSellAmtTot + scwin.pldgAmt;
  scwin.cashRtnAmt = scwin.initamtGrtRtnDrAmt + scwin.susRecvSellRtnDrAmt;
  ed_susRecvSellRtnDrAmt.setValue(scwin.susRecvSellRtnDrAmt);
  ed_susRecvSellAmt.setValue(scwin.susRecvSellAmt);
  ed_sumAmtAll.setValue(scwin.sumAmtAll);
  ed_initamtGrtDrAmt.setValue(scwin.initamtGrtDrAmt);
  ed_egain.setValue(scwin.egain);
  ed_sumAmtDtl.setValue(scwin.sumAmtDtl);
  ed_initamtGrtRtnDrAmt.setValue(scwin.initamtGrtRtnDrAmt);
  ed_cashRtnAmt.setValue($c.gus.cfInsertComma($p, scwin.cashRtnAmt));
  ed_maxSusRtnAmt.setValue(scwin.maxSusRtnAmt);
  ed_maxInitRtnAmt.setValue(scwin.maxInitRtnAmt);
  tbx_sumAmtDtl.setValue($c.gus.cfInsertComma($p, scwin.sumAmtDtl));
  ed_cashSellAmtCon.setValue(scwin.sumAmtAll - scwin.susRecvSellRtnDrAmt - scwin.susRecvSellAmt - scwin.pldgAmt + scwin.egain + scwin.cashRtnAmt);
};

//-------------------------------------------------------------------------
// 금액계산 전도현금 입력시
//-------------------------------------------------------------------------
scwin.f_setAmtCashRtnAmt = function () {
  scwin.f_setMethAmt();
  var amt = scwin.maxSusRtnAmt + scwin.maxInitRtnAmt;
  if (scwin.cashRtnAmt > amt) {
    $c.gus.cfAlertMsg($p, "환불금액 입력한도 초과입니다.");
    scwin.cashRtnAmt = scwin.susRecvSellRtnDrAmt + scwin.initamtGrtRtnDrAmt;
  }
  if (scwin.cashRtnAmt < scwin.susRecvSellRtnDrAmt) {
    $c.gus.cfAlertMsg($p, "환불금액은 가수금매출환불차변금액 보다 작을 수 없습니다.");
    scwin.cashRtnAmt = scwin.susRecvSellRtnDrAmt + scwin.initamtGrtRtnDrAmt;
  }
  scwin.egain = amt - scwin.cashRtnAmt;
  scwin.initamtGrtRtnDrAmt = scwin.cashRtnAmt - scwin.susRecvSellRtnDrAmt;
  ed_susRecvSellRtnDrAmt.setValue(scwin.susRecvSellRtnDrAmt);
  ed_susRecvSellAmt.setValue(scwin.susRecvSellAmt);
  ed_sumAmtAll.setValue(scwin.sumAmtAll);
  ed_initamtGrtDrAmt.setValue(scwin.initamtGrtDrAmt);
  ed_egain.setValue(scwin.egain);
  ed_sumAmtDtl.setValue(scwin.sumAmtDtl);
  ed_initamtGrtRtnDrAmt.setValue(scwin.initamtGrtRtnDrAmt);
  ed_cashRtnAmt.setValue($c.gus.cfInsertComma($p, scwin.cashRtnAmt));
  ed_maxSusRtnAmt.setValue(scwin.maxSusRtnAmt);
  ed_maxInitRtnAmt.setValue(scwin.maxInitRtnAmt);
  tbx_egain.setValue($c.gus.cfInsertComma($p, scwin.egain));
  ed_cashSellAmtCon.setValue(scwin.sumAmtAll - scwin.susRecvSellRtnDrAmt - scwin.susRecvSellAmt - scwin.pldgAmt + scwin.egain + scwin.cashRtnAmt);
};

//-------------------------------------------------------------------------
// 금액계산 입력시 검증
//-------------------------------------------------------------------------
scwin.f_chkAmt = function () {
  scwin.f_setMethAmt();
  if (scwin.sumAmtAll == scwin.cashSellAmt + scwin.susRecvSellRtnDrAmt + scwin.susRecvSellAmt + scwin.pldgAmt - scwin.egain - (scwin.initamtGrtRtnDrAmt + scwin.susRecvSellRtnDrAmt + scwin.cashRtnAmt) / 2) {
    return true;
  } else {
    return false;
  }
};

//-------------------------------------------------------------------------
// 금액계산
//-------------------------------------------------------------------------
scwin.f_setMethAmt = function () {
  scwin.sumAmtAll = $c.gus.cfIsNull($p, ed_sumAmtAll.getValue()) ? 0 : ed_sumAmtAll.getValue().replaceAll(",", "");
  scwin.cashSellAmt = $c.gus.cfIsNull($p, ed_cashSellAmt.getValue()) ? 0 : ed_cashSellAmt.getValue().replaceAll(",", "");
  scwin.susRecvSellRtnDrAmt = $c.gus.cfIsNull($p, ed_susRecvSellRtnDrAmt.getValue()) ? 0 : ed_susRecvSellRtnDrAmt.getValue().replaceAll(",", "");
  scwin.susRecvSellAmt = $c.gus.cfIsNull($p, ed_susRecvSellAmt.getValue()) ? 0 : ed_susRecvSellAmt.getValue().replaceAll(",", "");
  scwin.susRecvSellAmtTot = $c.gus.cfIsNull($p, ed_susRecvSellAmtTot.getValue()) ? 0 : ed_susRecvSellAmtTot.getValue().replaceAll(",", "");
  scwin.pldgAmt = $c.gus.cfIsNull($p, ed_pldgAmt.getValue()) ? 0 : ed_pldgAmt.getValue().replaceAll(",", "");
  scwin.initamtGrtDrAmt = $c.gus.cfIsNull($p, ed_initamtGrtDrAmt.getValue()) ? 0 : ed_initamtGrtDrAmt.getValue().replaceAll(",", "");
  scwin.egain = $c.gus.cfIsNull($p, ed_egain.getValue()) ? 0 : ed_egain.getValue().replaceAll(",", "");
  scwin.sumAmtDtl = $c.gus.cfIsNull($p, ed_sumAmtDtl.getValue()) ? 0 : ed_sumAmtDtl.getValue().replaceAll(",", "");
  scwin.initamtGrtRtnDrAmt = $c.gus.cfIsNull($p, ed_initamtGrtRtnDrAmt.getValue()) ? 0 : ed_initamtGrtRtnDrAmt.getValue().replaceAll(",", "");
  scwin.cashRtnAmt = $c.gus.cfIsNull($p, ed_cashRtnAmt.getValue()) ? 0 : ed_cashRtnAmt.getValue().replaceAll(",", "");
  scwin.maxSusRtnAmt = $c.gus.cfIsNull($p, ed_maxSusRtnAmt.getValue()) ? 0 : ed_maxSusRtnAmt.getValue().replaceAll(",", "");
  scwin.maxInitRtnAmt = $c.gus.cfIsNull($p, ed_maxInitRtnAmt.getValue()) ? 0 : ed_maxInitRtnAmt.getValue().replaceAll(",", "");
  scwin.sumAmtAll = Number(scwin.sumAmtAll);
  scwin.cashSellAmt = Number(scwin.cashSellAmt);
  scwin.susRecvSellRtnDrAmt = Number(scwin.susRecvSellRtnDrAmt);
  scwin.susRecvSellAmt = Number(scwin.susRecvSellAmt);
  scwin.susRecvSellAmtTot = Number(scwin.susRecvSellAmtTot);
  scwin.pldgAmt = Number(scwin.pldgAmt);
  scwin.initamtGrtDrAmt = Number(scwin.initamtGrtDrAmt);
  scwin.egain = Number(scwin.egain);
  scwin.sumAmtDtl = Number(scwin.sumAmtDtl);
  scwin.initamtGrtRtnDrAmt = Number(scwin.initamtGrtRtnDrAmt);
  scwin.cashRtnAmt = Number(scwin.cashRtnAmt);
  scwin.maxSusRtnAmt = Number(scwin.maxSusRtnAmt);
  scwin.maxInitRtnAmt = Number(scwin.maxInitRtnAmt);
};
scwin.sbm_RetrieveSellingInfo_submitdone = function (e) {
  if (ds_sellingEvidence.getRowCount() > 0) {
    $c.gus.cfDisableBtnOnly($p, [btn_del]);
    $c.gus.cfEnableBtnOnly($p, [btn_save]);
  } else {
    $c.gus.cfDisableBtnOnly($p, [btn_save]);
    $c.gus.cfDisableBtnOnly($p, [btn_del]);
  }
  ica_slipDt.setValue(scwin.strToDate);
  ica_spplyDt.setValue(scwin.strToDate);
  var spplyAmt = 0;
  var spplyAmtFcrc = 0;
  var vatAmt = 0;
  var totAmt = 0;
  var fireInsrRateAmt = 0;
  for (var i = 0; i < ds_certiDetailList.getRowCount(); i++) {
    if (ds_certiDetailList.getCellData(i, "sellYn") == 1) {
      spplyAmt += $c.gus.cfIsNull($p, ds_certiDetailList.getCellData(i, "spplyAmt")) ? 0 : parseInt(ds_certiDetailList.getCellData(i, "spplyAmt"));
      spplyAmtFcrc += $c.gus.cfIsNull($p, ds_certiDetailList.getCellData(i, "spplyAmtFcrc")) ? 0 : parseInt(ds_certiDetailList.getCellData(i, "spplyAmtFcrc"));
      vatAmt += $c.gus.cfIsNull($p, ds_certiDetailList.getCellData(i, "vatAmt")) ? 0 : parseInt(ds_certiDetailList.getCellData(i, "vatAmt"));
      totAmt += $c.gus.cfIsNull($p, ds_certiDetailList.getCellData(i, "totAmt")) ? 0 : parseInt(ds_certiDetailList.getCellData(i, "totAmt"));
    } else if (ds_certiDetailList.getCellData(i, "sellItemCd") == "0255") {
      fireInsrRateAmt += $c.gus.cfIsNull($p, ds_certiDetailList.getCellData(i, "spplyAmt")) ? 0 : parseInt(ds_certiDetailList.getCellData(i, "spplyAmt"));
    }
  }
  tbx_spplyAmt.setValue($c.gus.cfInsertComma($p, spplyAmt));
  tbx_spplyAmtFcrc.setValue($c.gus.cfInsertComma($p, spplyAmtFcrc));
  tbx_vatAmt.setValue($c.gus.cfInsertComma($p, vatAmt));
  tbx_sumAmt.setValue($c.gus.cfInsertComma($p, totAmt));
  tbx_fireInsrRateAmt.setValue($c.gus.cfInsertComma($p, fireInsrRateAmt));
  ed_spplyAmt.setValue(spplyAmt);
  ed_spplyAmtFcrc.setValue(spplyAmtFcrc);
  ed_vatAmt.setValue(vatAmt);
  ed_sumAmt.setValue(totAmt);
  ed_fireInsrRateAmt.setValue(fireInsrRateAmt);
  ed_sumAmtAll.setValue(totAmt + fireInsrRateAmt);
  scwin.f_setAmtFirst();
  scwin.saveflag = "N";
};
scwin.sbm_RetrieveSellingInfo_submiterror = function (e) {};
scwin.sbm_RetrieveTaxInvoice_submitdone = function (e) {
  if (ds_sellingEvidence.getRowCount() > 0) {
    $c.gus.cfEnableBtnOnly($p, [btn_del]);
    $c.gus.cfDisableBtnOnly($p, [btn_save]);
    scwin.saveflag = "E";
  } else {
    $c.gus.cfDisableBtnOnly($p, [btn_save]);
    $c.gus.cfDisableBtnOnly($p, [btn_del]);
    scwin.saveflag = "N";
  }
};
scwin.sbm_RetrieveTaxInvoice_submiterror = function (e) {};
scwin.sbm_createReceiptTaxInvoice_submitdone = function (e) {
  if (ds_sellingEvidence.getRowCount() > 0) {
    $c.gus.cfEnableBtnOnly($p, [btn_del]);
    $c.gus.cfDisableBtnOnly($p, [btn_save]);
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.saveflag = "C";
  }
};
scwin.sbm_createReceiptTaxInvoice_submiterror = function (e) {};
scwin.sbm_deleteReceiptTaxInvoice_submitdone = function (e) {
  scwin.saveflag = "D";
  $c.win.closePopup($p);
};
scwin.sbm_deleteReceiptTaxInvoice_submiterror = function (e) {};
scwin.ds_sellingEvidence_ondataload = function () {
  var rowcnt = ds_sellingEvidence.getRowCount();
  if (rowcnt < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  } else {
    scwin.f_setsellingEvidence();
    if (ds_sellingEvidence.getCellData(0, "slipNo") != null && ds_sellingEvidence.getCellData(0, "slipNo") != "") {
      ed_cashSellAmt.setReadOnly(true);
      $c.gus.cfEnableObj($p, acb_susRecvInitamtClsCd, false);
      ed_cashRtnAmt.setReadOnly(true);
      ica_spplyDt.setReadOnly(true);
      ica_slipDt.setReadOnly(true);
      $c.gus.cfEnableObj($p, ed_cntctPlNm, false);
      $c.gus.cfEnableObj($p, ed_cntctPlPicNm, false);
      $c.gus.cfEnableObj($p, ed_cntctPlTelNo, false);
      $c.gus.cfEnableObj($p, ed_summary, false);
      $c.gus.cfEnableObj($p, ed_goods, false);

      //acb_susRecvInitamtClsCd.setDisabled(false);
      //acb_susRecvInitamtClsCd.Enable = "true";
      //ed_cashRtnAmt.ReadOnly = "true";
      //ica_spplyDt.ReadOnly = "true";
      //ica_slipDt.ReadOnly = "true";
    } else {
      ed_summary.setValue(scwin.p_summary);
      ed_goods.setValue(scwin.p_summary);
      ed_cashSellAmt.setReadOnly(true);
      $c.gus.cfEnableObj($p, acb_susRecvInitamtClsCd, true);
      ed_cashRtnAmt.setReadOnly(false);
      ica_spplyDt.setReadOnly(false);
      ica_slipDt.setReadOnly(false);
      $c.gus.cfEnableObj($p, ed_cntctPlNm, true);
      $c.gus.cfEnableObj($p, ed_cntctPlPicNm, true);
      $c.gus.cfEnableObj($p, ed_cntctPlTelNo, true);
      $c.gus.cfEnableObj($p, ed_summary, true);
      $c.gus.cfEnableObj($p, ed_goods, true);

      //ed_cashSellAmt.ReadOnly = "true";
      //acb_susRecvInitamtClsCd.setDisabled(false);
      //acb_susRecvInitamtClsCd.Enable = "true";
      //ed_cashRtnAmt.ReadOnly = "false";
      //ica_spplyDt.ReadOnly = "false";
      //ica_slipDt.ReadOnly = "false";
    }
  }
};
scwin.ed_summary_onblur = function (e) {
  ed_goods.setValue(ed_summary.getValue());
};
scwin.tbx_amt_onclick = function (e) {
  scwin.f_susRecvPop();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_del_onclick = function (e) {
  scwin.f_Delete();
};
scwin.btn_totPrint_onclick = function (e) {
  scwin.f_totalPrint();
};
scwin.ed_cashSellAmt_onblur = function (e) {
  scwin.f_setAmtCashSellAmt();
};
scwin.ed_cashRtnAmt_onblur = function (e) {
  scwin.f_setAmtCashRtnAmt();
};
scwin.acb_susRecvInitamtClsCd_onviewchange = function (info) {
  //console.log('acb_susRecvInitamtClsCd_onviewchange~');
  if (scwin.susRecvInitamtClsCd != acb_susRecvInitamtClsCd.getValue()) {
    scwin.susRecvInitamtClsCd = acb_susRecvInitamtClsCd.getValue();
    scwin.susRecvSellAmtTot = 0;
    tbx_susRecvSellAmtTot.setValue($c.gus.cfInsertComma($p, 0));
    scwin.f_setAmtSusRecvSellAmtTot();
    ds_collMoney.setJSON([]);
  }
};

/**
 * 입력이 가능한 컬럼에서 포커스가 빠져나가는 시점에 본 속성에 정의한 함수를 실행
 * 빈값인 경우 0으로 설정
 */
scwin.validatorNumber = function (val) {
  if ($c.gus.cfIsNull($p, val)) {
    return "0";
  }
  return val;
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no ',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'세금계산서 번호',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세금계산서번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_sellVatNo',label:'text',ref:'',style:'',userData2:''}},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_offsetVatNo',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_crn',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_busiNm',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_repstNm',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공급일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_spplyDt',style:'',title:'공급일자',validateOnInput:'true',mandatory:'true',objType:'data',validExp:'공급일자:yes:date=YYYYMMDD'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_taxnClsCd',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_bilgClnt',placeholder:'',style:'width: 85px;',readOnly:'true',objType:'key'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'/',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_bilgClntNm',placeholder:'',style:'',readOnly:'true',objType:'key'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'연락처명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntctPlNm',style:'width:150px;',maxlength:'50',objType:'key'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'연락처담당자명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntctPlPicNm',style:'width:150px;',maxlength:'50',objType:'key'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'연락처전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntctPlTelNo',style:'width:150px;',maxlength:'50',objType:'key'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회계처리일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_postDt',style:'',title:'회계처리일자',objType:'data',readOnly:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매출확정 정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_bilgLodept',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_slipNo',label:'text',ref:'',style:'',userData2:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:' ',ref:'',style:'',userData2:''}},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_offsetNo',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',readOnly:'true',id:'ica_slipDt',class:'',calendarValueType:'yearMonthDate',title:'전표일자',objType:'data'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_dcsnClsNm',label:'text',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담보관리번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',style:'text-align:right;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_pldgMgntNo',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'환율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',style:'text-align:right;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_adptExchRt',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화재보험료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td ',style:'text-align:right;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_fireInsrRateAmt',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원화공급가액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td ',style:'text-align:right;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_spplyAmt',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'외화공급가액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td ',style:'text-align:right;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_spplyAmtFcrc',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td ',style:'text-align:right;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_vatAmt',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'금액합계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td ',style:'text-align:right;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_sumAmt',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적요/품명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' ',id:'ed_summary',placeholder:'',style:'',maxlength:'50',mandatory:'true',imeMode:'active','ev:onblur':'scwin.ed_summary_onblur',title:'적요',objType:'key',validExp:'적요:yes'}},{T:1,N:'xf:input',A:{class:'',id:'ed_goods',placeholder:'',style:'',maxlength:'50',mandatory:'true',imeMode:'active',title:'품명',objType:'key',validExp:'품명:yes'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8 flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'수금 정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:10%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:10%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:10%;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'xf:group',A:{class:'row-gap-2 algn-center',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'현금',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:' tar',id:'ed_cashSellAmtCon',style:'',maxlength:'13',adjustMaxLength:'true',allowChar:'0-9',readOnly:'true',objType:'data'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'선/가수금<br/>구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'underline txt-blue',escape:'false',id:'tbx_amt',label:'무통장입금<br/>가수금',ref:'',style:'',userData2:'','ev:onclick':'scwin.tbx_amt_onclick'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'담보(선수현금)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'합계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'환불<br/>(전도현금)',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'담보금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'정산금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'잔액',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' tar',id:'ed_cashSellAmt',style:'',allowChar:'0-9',maxlength:'13','ev:onblur':'scwin.ed_cashSellAmt_onblur',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'acb_susRecvInitamtClsCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'','ev:onviewchange':'scwin.acb_susRecvInitamtClsCd_onviewchange',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'가수금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'선수금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td tar',tagname:'td',style:'background:var(--form-dis-bgcolor);'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_susRecvSellAmtTot',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar',style:'background:var(--form-dis-bgcolor);'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_pldgAmt',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar',style:'background:var(--form-dis-bgcolor);'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_initamtGrtDrAmt',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar',style:'background:var(--form-dis-bgcolor);'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_egain',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tar',tagname:'td',style:'background:var(--form-dis-bgcolor);'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_sumAmtDtl',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' tar',id:'ed_cashRtnAmt',style:'',maxlength:'13',allowChar:'0-9','ev:onblur':'scwin.ed_cashRtnAmt_onblur',validator:'scwin.validatorNumber',objType:'data'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-10',id:''},E:[{T:1,N:'xf:group',A:{class:'col-gap-6',id:'group1',style:''},E:[{T:1,N:'xf:group',A:{class:'col-gap-4',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_spplyFg',ref:'',style:'width: 180px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공급받는자 보관용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'receive'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공급자 보관용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'spply'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_sumCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'할인할증집계여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_wt',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'margin-left:55px'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'flex-between',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col-gap-8',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'col-gap-4'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'회계마감월',class:''}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_slipCloseYm',class:' cal',calendarValueType:'yearMonth'}}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-4'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'세무마감월',class:''}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_taxCloseYm',class:' cal',calendarValueType:'yearMonth'}}]}]},{T:1,N:'xf:group',A:{class:'col-gap-4',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수정세금계산서 공급일자',style:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_cancelSpplyDt',style:'',objType:'data',validExp:'수정세금계산서 공급일자:no:length=8'}},{T:1,N:'xf:input',A:{id:'ed_spplyAmt',style:'display:none'}},{T:1,N:'xf:input',A:{id:'ed_spplyAmtFcrc',style:'display:none'}},{T:1,N:'xf:input',A:{id:'ed_vatAmt',style:'display:none'}},{T:1,N:'xf:input',A:{id:'ed_sumAmt',style:'display:none'}},{T:1,N:'xf:input',A:{id:'ed_fireInsrRateAmt',style:'display:none'}},{T:1,N:'xf:input',A:{id:'ed_sumAmtAll',style:'display:none'}},{T:1,N:'xf:input',A:{id:'ed_susRecvSellAmtTot',style:'display:none',initValue:'0'}},{T:1,N:'xf:input',A:{id:'ed_susRecvSellAmt',style:'display:none',initValue:'0'}},{T:1,N:'xf:input',A:{id:'ed_susRecvSellRtnDrAmt',style:'display:none',initValue:'0'}},{T:1,N:'xf:input',A:{id:'ed_pldgAmt',style:'display:none',initValue:'0'}},{T:1,N:'xf:input',A:{id:'ed_initamtGrtDrAmt',style:'display:none',initValue:'0'}},{T:1,N:'xf:input',A:{id:'ed_egain',style:'display:none',initValue:'0'}},{T:1,N:'xf:input',A:{id:'ed_sumAmtDtl',style:'display:none',initValue:'0'}},{T:1,N:'xf:input',A:{id:'ed_initamtGrtRtnDrAmt',style:'display:none',initValue:'0'}},{T:1,N:'xf:input',A:{id:'ed_maxSusRtnAmt',style:'display:none',initValue:'0'}},{T:1,N:'xf:input',A:{id:'ed_maxInitRtnAmt',style:'display:none',initValue:'0'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_OnUnload'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_totPrint',style:'',type:'button','ev:onclick':'scwin.btn_totPrint_onclick',objType:'bCreate',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통합발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_del',style:'',type:'button','ev:onclick':'scwin.btn_del_onclick',userAuth:'D',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]})