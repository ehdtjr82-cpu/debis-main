/*amd /ui/cm/bc/clnt/clntmgnt/zz_210_02_07b.xml 164624 d19f41d7e05fddf1158aa281dcc81f3d4e1226f5fb5ab22b4975d480a663bc12 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_logisticsCustomer',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_logisticsCustomer_onrowpositionchange','ev:onremoverow':'scwin.ds_logisticsCustomer_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'appNo',name:'신청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regClntYn',name:'등록번호 사용유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regClntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldClntNo',name:'이전거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntBusiClsCd',name:'거래처사업자구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntDeptNm',name:'거래처부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPersPstNm',name:'거래처직원직위명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPersNm',name:'거래처직원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'거래처 전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMpNo',name:'거래처 핸드폰 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntEmail',name:'거래처 EMAIL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntFaxNo',name:'거래처 팩스번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntYn',name:'물류매출거래처여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntYn',name:'물류매입거래처여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'intrlnsClsCd',name:'계열구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntClsCd',name:'매출거래처구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplGrpCd',name:'3자물류그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDivCntrYn',name:'사업부문컨테이너여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDivBulkYn',name:'사업부문벌크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transBizYn',name:'운송사업여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transIntcdBizYn',name:'운송주선사업여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomTplYn',name:'사업영역3자물류여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomStrYn',name:'사업영역보관여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomTransYn',name:'사업영역운송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomStvYn',name:'사업영역하역여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomInatYn',name:'사업영역국제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperClntNo',name:'상위거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstTxnDt',name:'최초거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoEstmtYn',name:'협력업체평가여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inatPartnerYn',name:'국제물류파트너',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecAuthTrgtYn',name:'매입계산서역발행여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomPicEmpNo',name:'당사담당자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'receiveSellingYn',name:'영세거래처여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'수금조건-적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyCntShtCd',name:'수금조건-수금수단코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCnt',name:'수금조건-어음일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyCrcCd',name:'수금조건-수금통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtPrdClsCd',name:'수금조건-결제조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtPrdDd',name:'수금조건-결제기일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inchnClntNo',name:'인천회계거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exSellAmt',name:'예상매출액(연간)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crdLimitAmt',name:'여신금액(월)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgPattern',name:'담보종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgAmt',name:'담보가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecApprvChkYn',name:'전자결재제외여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'creditRating',name:'신용등급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thiisPrflos',name:'당기손익',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debtRatio',name:'부채비율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomEtcYn',name:'사업영역-기타여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsNm',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawUserNm',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modUserNm',name:'수정자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcondNm',name:'업태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'biztypeNm',name:'업종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'대표자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiAddr',name:'사업장주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntYn',name:'매출입구분(매출)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntYn',name:'매출입구분(매입)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDivCntrYn',name:'사업부문(벌크)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDivBulkYn',name:'사업부문(컨테이너)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transBizYn',name:'운송사업구분(운송사업)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transIntcdBizYn',name:'운송사업구분(운송주선업)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomTransYn',name:'사업영역(운송)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomStvYn',name:'사업영역(하역)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomStrYn',name:'사업영역(보관)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomTplYn',name:'사업영역(3자물류)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomInatYn',name:'사업영역(국제)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomEtcYn',name:'사업영역(기타)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptNm',name:'담당자부서/직위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtPrdClsCd',name:'결제조건(구분)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtPrdDd',name:'결제조건(결제기한)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyCntShtCd',name:'결제방식(구분)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCnt',name:'결제방식(지급기한)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawUserId',name:'name86',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modUserId',name:'name87',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperClntNm',name:'name118',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name120',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'name137',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiClsNm',name:'name139',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_judge',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_manager',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'param4',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_logisticsCustomer'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryCntn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntLupCond',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regModCond',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regModCntn',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'appNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regClntYn',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regClntNo',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oldClntNo',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntBusiClsCd',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntDeptNm',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntPersPstNm',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntPersNm',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntTelNo',name:'name16',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntMpNo',name:'name17',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntEmail',name:'name18',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntFaxNo',name:'name19',dataType:'text'}},{T:1,N:'w2:key',A:{id:'zip',name:'name20',dataType:'text'}},{T:1,N:'w2:key',A:{id:'addr1',name:'name21',dataType:'text'}},{T:1,N:'w2:key',A:{id:'addr2',name:'name22',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellClntYn',name:'name23',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntYn',name:'name24',dataType:'text'}},{T:1,N:'w2:key',A:{id:'intrlnsClsCd',name:'name25',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellClntClsCd',name:'name26',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tplGrpCd',name:'name27',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDivCntrYn',name:'name28',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDivBulkYn',name:'name29',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transBizYn',name:'name30',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transIntcdBizYn',name:'name31',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomTplYn',name:'name32',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomStrYn',name:'name33',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomTransYn',name:'name34',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomStvYn',name:'name35',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomInatYn',name:'name36',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upperClntNo',name:'name37',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'name38',dataType:'text'}},{T:1,N:'w2:key',A:{id:'firstTxnDt',name:'name39',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoEstmtYn',name:'name40',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inatPartnerYn',name:'name41',dataType:'text'}},{T:1,N:'w2:key',A:{id:'elecAuthTrgtYn',name:'name42',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mcomPicEmpNo',name:'name43',dataType:'text'}},{T:1,N:'w2:key',A:{id:'receiveSellingYn',name:'name44',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'name45',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyCntShtCd',name:'name46',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftDdCnt',name:'name47',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyCrcCd',name:'name48',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stmtPrdClsCd',name:'name49',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stmtPrdDd',name:'name50',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvReqNo',name:'name51',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inchnClntNo',name:'name52',dataType:'text'}},{T:1,N:'w2:key',A:{id:'exSellAmt',name:'name53',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crdLimitAmt',name:'name54',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pldgPattern',name:'name55',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pldgAmt',name:'name56',dataType:'text'}},{T:1,N:'w2:key',A:{id:'elecApprvChkYn',name:'name57',dataType:'text'}},{T:1,N:'w2:key',A:{id:'creditRating',name:'name58',dataType:'text'}},{T:1,N:'w2:key',A:{id:'thiisPrflos',name:'name59',dataType:'text'}},{T:1,N:'w2:key',A:{id:'debtRatio',name:'name60',dataType:'text'}},{T:1,N:'w2:key',A:{id:'summary',name:'name61',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomEtcYn',name:'name62',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvStsNm',name:'name63',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNm',name:'name64',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawUserNm',name:'name65',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modUserNm',name:'name66',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizcondNm',name:'name67',dataType:'text'}},{T:1,N:'w2:key',A:{id:'biztypeNm',name:'name68',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repstNm',name:'name69',dataType:'text'}},{T:1,N:'w2:key',A:{id:'busiAddr',name:'name70',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptNm',name:'name83',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvStsCd',name:'name88',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawUserId',name:'name89',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modUserId',name:'name90',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_judge'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_customer'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCls',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntLupCond',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCntn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntDelYn',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_reqApprove_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprvDocKndCd',name:'결재문서종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqUserId',name:'결재요청자 ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'epUserId',name:'EP사용자 ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvTitle',name:'결재제목',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDtlInfo',name:'결재상세정보',dataType:'text'}},{T:1,N:'w2:key',A:{id:'appNo',name:'신청번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ElectronicApprovalRequestFrame',name:'전자결재요청화면 여부',dataType:'text',defaultValue:'YES'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dma_customerDetail',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntBusiClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcondNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'biztypeNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntDeptNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPersPstNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPersNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntEmail',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMpNo',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntFaxNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiAddr',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntYn',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntYn',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'intrlnsClsCd',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntClsCd',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplGrpCd',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDivCntrYn',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDivBulkYn',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transBizYn',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transIntcdBizYn',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomTplYn',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomStrYn',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomTransYn',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomStvYn',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomInatYn',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperClntNo',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperClntNm',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstTxnDt',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoEstmtYn',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inchnClntNo',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inatPartnerYn',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecAuthTrgtYn',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptNm',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomPicEmpNo',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'name41',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_manager',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_manager","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_logisticsCustomer',action:'/cm.bc.clnt.clntmgnt.RetrieveCustomerApproveRequestTargetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_logisticsCustomer","key":"IN_DS1"}',target:'data:json,{"id":"ds_logisticsCustomer","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_logisticsCustomer_submit','ev:submitdone':'scwin.sbm_logisticsCustomer_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_judge',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_judge","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_customer',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"dma_customerDetail","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_customer_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveLogisticsCustomer',action:'/cm.bc.clnt.clntmgnt.SaveCustomerApproveCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_logisticsCustomer","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_saveLogisticsCustomer_submit','ev:submitdone':'scwin.sbm_saveLogisticsCustomer_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.pos_clnt = 0;
  scwin.gJudgeYn = "0";
  scwin.g_sLoginDept = scwin.memJson.acctDeptCd; // "00009";
  scwin.g_sUserId = scwin.memJson.userId; // "inswave";
  scwin.g_sEmpNo = scwin.memJson.empNo; // "350013";
  scwin.manager = "";
  scwin.managerYn = ""; //관리자 여부

  scwin.f_ContentsDisable();
  scwin.f_retrieveJudge();
  $c.gus.cfDisableBtn($p, [b_Update, b_Cancel, b_Save, b_Aprv, b_Delete]);
  // scwin.setLogisticsCustomerHeader();

  scwin.getManager(); //관리자 여부 조회

  for (var i = 0; i < ds_judge.getTotalRow(); i++) {
    if (scwin.g_sLoginDept == ds_judge.getCellData(i, "col1")) {
      scwin.gJudgeYn = "1";
    }
  }
  qryCntn.focus();
};

//-------------------------------------------------------------------------
// 담당자 정보를 가져온다.
//-------------------------------------------------------------------------
scwin.getManager = async function () {
  // SELECT 절 
  var param1 = "CD_NM 			as COL1 " + ",CD 				as COL2 " + ",''   			as COL3 " + ",''   			as COL4 " + ",''  			as COL5 " + ",'' 				as COL6 " + ",'' 				as COL7 " + ",'' 				as COL8 " + ",'' 				as COL9 " + ",'' 				as COL10 ";

  // 대상테이블 	
  var param2 = "TB_ZZ002";
  var param3 = "AND GRP_CD = 'ZZ502' AND USE_YN='1'";
  var param4 = "COL1";
  // ds_manager.DataId =
  // "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=dinymicQueryTest" + "&param1=" + param1
  // + "&param2=" + param2
  // + "&param3=" + param3
  // + "&param4=" + param4;

  // let dataParam = {
  //     "sysCd": "CommonEBC",
  //     "queryId": "dinymicQueryTest",
  //     "param1": param1,
  //     "param2": param2,
  //     "param3": param3,
  //     "param4": param4,
  // }
  // ds_manager.setJSON(dataParam);

  sbm_manager.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=dinymicQueryTest" + "&param1=" + param1 + "&param2=" + param2 + "&param3=" + param3 + "&param4=" + param4;
  await $c.sbm.execute($p, sbm_manager); // ds_manager.Reset();
  // scwin.f_getManager();
};
scwin.f_getManager = function () {
  var comma = "";
  for (j = 0; j < ds_manager.getTotalRow(); j++) {
    if (scwin.manager != "") {
      comma = ",";
    }
    scwin.manager = scwin.manager + comma + ds_manager.get("col1");
    if (ds_manager.get("col2") == scwin.g_sUserId) {
      //접속자가 관리자 일때
      scwin.managerYn = "Y";
    }
  }
  txt_manager.setValue("* 결제상신시 주관부서 담당자(" + scwin.manager + ")는 반드시 포함하셔야 합니다.");
};

//-------------------------------------------------------------------------
// 물류 거래처 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // tobe 신규를 할시에 행추가된곳에 데이터가 남아있어 지워주고 재조회
  ds_logisticsCustomer.removeAll();
  txt_saveType.setValue("2"); // 0:신규, 1:수정, 2:조회
  scwin.f_ContentsDisable();
  let txt_qryCntn = qryCntn.getValue().trimAll();
  var vRegModCntn = regModCntn.getValue().trim();
  let byteLengthVal = scwin.bytelength(txt_qryCntn);
  if (byteLengthVal < 2) {
    let msgArr = new Array(2);
    msgArr[0] = "검색어";
    msgArr[1] = "글자(숫자) 한(두)";
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_011, msgArr);
    qryCntn.focus();
    return false;
  }
  let condition = {
    "qryCntn": qryCntn.getValue(),
    "clntLupCond": lux_clntLupCond.getValue(),
    "regModCond": lux_regModCond.getValue(),
    "regModCntn": vRegModCntn
  };
  dma_logisticsCustomer.setJSON(condition);

  // ds_logisticsCustomer.DataID = "/cm.bc.clnt.clntmgnt.RetrieveCustomerApproveRequestTargetCMD.do" + condition;
  $c.sbm.execute($p, sbm_logisticsCustomer); // ds_logisticsCustomer.Reset();

  // 조회완료후 결재요청 버튼 활성화
  b_Aprv.setDisabled(false);
};

//-------------------------------------------------------------------------
// 항목 Enable
//-------------------------------------------------------------------------
scwin.f_ContentsEnable = function () {
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableObj($p, bilgClntNo_search, true); // 상위거래처번호 이미지 활성화
  $c.gus.cfEnableObj($p, upperClnt_search, true); // 상위거래처번호 이미지 활성화
  $c.gus.cfEnableObj($p, crn_search, true); // 사업자등록번호 이미지 활성화
  $c.gus.cfEnableObj($p, zip_search, true); // 우편번호찾기 이미지 활성화
  $c.gus.cfEnableObj($p, crn_regist, true); // 사업자등록번호 이미지 활성화
  $c.gus.cfEnableObj($p, emp_search, true); // 담당자조회 이미지
  $c.gus.cfEnableObj($p, clntBusiClsCd, true); // 거래처사업자구분코드
  $c.gus.cfEnableObj($p, tplGrpCd, true); // 3자물류그룹코드
  $c.gus.cfEnableObj($p, intrlnsClsCd, true); // 계열구분
  $c.gus.cfEnableObj($p, sellClntClsCd, false); // 매출거래처구분
  // $c.gus.cfEnableObj(zip, true);	 				// 우편번호
  $c.gus.cfEnableObj($p, clntBusiClsCd, false); // 거래처사업자구분코드

  //수금조건
  $c.gus.cfEnableObj($p, collMoneyCrcCd, true); //화폐
  $c.gus.cfEnableObj($p, stmtPrdClsCd, true); //결제조건-구분
  $c.gus.cfEnableObj($p, collMoneyCntShtCd, true); //결제방식-구분

  //여신 및 담보현황
  $c.gus.cfEnableObj($p, pldgPattern, true); //담보종류

  //신용정보
  $c.gus.cfEnableObj($p, creditRating, true); //신용등급
  $c.gus.cfEnableObj($p, thiisPrflos, true); //당기손익
  $c.gus.cfEnableObj($p, debtRatio, true); //부채비율
  $c.gus.cfEnableObj($p, summary, true); //비고

  // disable 되어 있어 추가함.
  exSellAmt.setDisabled(false);
  crdLimitAmt.setDisabled(false);
  pldgAmt.setDisabled(false);
};

//-------------------------------------------------------------------------
// 항목 Disable
//-------------------------------------------------------------------------
scwin.f_ContentsDisable = function () {
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableObj($p, bilgClntNo_search, false); // 상위거래처번호 이미지 비활성화
  $c.gus.cfEnableObj($p, upperClnt_search, false); // 상위거래처번호 이미지 비활성화
  $c.gus.cfEnableObj($p, crn_search, false); // 사업자등록번호 이미지 비활성화
  // $c.gus.cfEnableObj(zip_search, false);  		// 우편번호찾기 이미지 비활성화
  $c.gus.cfEnableObj($p, crn_regist, false); // 사업자등록번호 이미지 비활성화
  $c.gus.cfEnableObj($p, emp_search, false); // 담당자조회 이미지
  $c.gus.cfEnableObj($p, img_clntNo, false); // 거래처번호팝업 이미지
  $c.gus.cfEnableObj($p, regClntYn, false); // 등록번호 사용유무
  $c.gus.cfEnableObj($p, clntBusiClsCd, false); // 거래처사업자구분코드
  $c.gus.cfEnableObj($p, tplGrpCd, false); // 3자물류그룹코드
  $c.gus.cfEnableObj($p, intrlnsClsCd, false); // 계열구분
  $c.gus.cfEnableObj($p, sellClntClsCd, false); // 매출거래처구분
  // $c.gus.cfEnableObj(zip, false);	 			// 우편번호

  // $c.gus.cfEnableObj(zip_search, false);	
  $c.gus.cfEnableObj($p, clntNo, false);
  $c.gus.cfEnableObj($p, regClntNo, false);
  $c.gus.cfEnableObj($p, ipx_crn, false);
  $c.gus.cfEnableObj($p, bizcondNm, false);
  $c.gus.cfEnableObj($p, biztypeNm, false);
  $c.gus.cfEnableObj($p, repstNm, false);
  $c.gus.cfEnableObj($p, busiAddr, false);
  // $c.gus.cfEnableObj(addr1, false);
  // $c.gus.cfEnableObj(upperClntNm, false);
  // $c.gus.cfEnableObj(bilgClntNm, false);
  $c.gus.cfEnableObj($p, deptNm, false);

  //수금조건
  $c.gus.cfEnableObj($p, adptDt, false); //적용일자
  $c.gus.cfEnableObj($p, collMoneyCrcCd, false); //화폐
  $c.gus.cfEnableObj($p, stmtPrdClsCd, false); //결제조건-구분
  $c.gus.cfEnableObj($p, collMoneyCntShtCd, false); //결제방식-구분

  //여신 및 담보현황
  $c.gus.cfEnableObj($p, pldgPattern, false); //담보종류
  $c.gus.cfEnableObjects($p, [txt_manager]);
  $c.gus.cfEnableObj($p, chb_elecApprvChkYn, false); // 전자결재제외여부 비활성화

  //신용정보
  $c.gus.cfEnableObj($p, creditRating, false); //신용등급
  $c.gus.cfEnableObj($p, thiisPrflos, false); //당기손익
  $c.gus.cfEnableObj($p, debtRatio, false); //부채비율
  $c.gus.cfEnableObj($p, summary, false); //비고

  // 거래처정보
  ipx_clntNm.setDisabled(true);
  clntPersNm.setDisabled(true);
  regClntNo.setDisabled(true);
  ipx_crn.setDisabled(true);
  crn_search.setDisabled(true);
  crn_regist.setDisabled(true);
  receiveSellingYn.setDisabled(true);
  chb_elecApprvChkYn.setDisabled(true);
  clntDeptNm.setDisabled(true);
  clntPersPstNm.setDisabled(true);
  clntTelNo.setDisabled(true);
  clntEmail.setDisabled(true);
  clntMpNo.setDisabled(true);
  clntFaxNo.setDisabled(true);
  // zip.setDisabled(true);
  addr2.setDisabled(true);
  chkRegistInfo2.setDisabled(true);
  oldClntNo.setDisabled(true);
  chkRegistInfo2.setDisabled(true);
  chkCollMoneyCond.setDisabled(true);
  chkRegistInfo3.setDisabled(true);
  chkRegistInfo4.setDisabled(true);

  // exSellAmt.setDisabled(true);
  // crdLimitAmt.setDisabled(true);
  // pldgPattern.setDisabled(true);
  // pldgAmt.setDisabled(true);
  // creditRating.setDisabled(true);
  // thiisPrflos.setDisabled(true);
  // debtRatio.setDisabled(true);
  // summary.setDisabled(true);

  // disable이 안되어서 추가한 코드.
  scwin.clntNm_disable();
};
scwin.clntNm_disable = function () {
  chkRegistInfo.setDisabled(true);
  // address_group.setDisabled(true);
  // $c.gus.cfEnableObj(zip, false); // 우편번호
  addr2.setDisabled(true);
  address_form.setDisabled(true);
};
scwin.clntNm_enable = function () {
  chkRegistInfo.setDisabled(false);
  clntNo.setDisabled(true);
  ipx_crn.setDisabled(true);
  crn_group.setDisabled(true);
  crn_search.setDisabled(false);
  crn_regist.setDisabled(false);

  // chb_elecApprvChkYn.setDisabled(true);
  chb_elecApprvChkYn_group.setDisabled(true);
  bizcondNm.setDisabled(true);
  repstNm.setDisabled(true);
  busiAddr.setDisabled(true);
  clntBusiClsCd.setDisabled(true);
  biztypeNm.setDisabled(true);
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  scwin.f_ContentsEnable();
  ds_logisticsCustomer.insertRow(); // to-do
  let insertedRow = ds_logisticsCustomer.getTotalRow() - 1;
  gr_logisticsCustomer.setFocusedCell(insertedRow, "clntNo", true);
  txt_createYn.setValue("1");
  txt_updateYn.setValue("0");
  txt_saveType.setValue("0"); // 0:신규, 1:수정, 2:조회, 3:저장, 4:취소

  sellClntYn.setValue("1"); //물류매출거래처여부
  bizDivCntrYn.setValue("1"); //사업부문컨테이너여부
  transBizYn.setValue("1"); //물류 운송사업여부
  bizDomTransYn.setValue("1"); //사업영역운송여부

  $c.gus.cfEnableObj($p, sellClntClsCd, true); // 매출거래처구분

  intrlnsClsCd.setDisabled(false);
  intrlnsClsCd.setValue(0); //계열구분코드
  clntBusiClsCd.setValue(0); //거래처사업자구분코드
  sellClntClsCd.setValue(1); //매출거래처구분코드
  tplGrpCd.setValue(0); //3자물류그룹코드
  copCoEstmtYn.setValue(1); //협력업체평가여부 (예)
  inatPartnerYn.setValue(0); //국제물류파트너 (아니오)
  elecAuthTrgtYn.setValue(0); //매입계산서역발행여부 (미적용)

  collMoneyCrcCd.setValue(0); //수금조건-화폐

  chb_elecApprvChkYn.setValue("0"); //전자결재 제외 여부
  $c.gus.cfEnableObj($p, chb_elecApprvChkYn, false);
  $c.gus.cfDisableBtn($p, [b_Create, b_Update, b_Aprv, b_Delete]);
  $c.gus.cfEnableObj($p, bizDomEtcYn, false); //사업영역-기타여부

  $c.gus.cfEnableObj($p, regClntYn, true); //등록번호 사용여부
  $c.gus.cfEnableObj($p, regClntNo, false);

  // 신규 버튼 클릭시 disable 해제해야되는 input들..
  regClntYn.setDisabled(false);

  // chkRegistInfo.setDisabled(false);
  ipx_clntNm.setDisabled(false);

  // clntNm이 enable이 안되어서 추가함.
  scwin.clntNm_enable();
  clntPersNm.setDisabled(false);
  regClntNo.setDisabled(false);
  crn_search.setDisabled(false);
  crn_regist.setDisabled(false);
  receiveSellingYn.setDisabled(false);
  clntDeptNm.setDisabled(false);
  clntPersPstNm.setDisabled(false);
  clntTelNo.setDisabled(false);
  clntEmail.setDisabled(false);
  clntMpNo.setDisabled(false);
  clntFaxNo.setDisabled(false);
  // zip.setDisabled(false);
  addr2.setDisabled(false);
  chkRegistInfo2.setDisabled(false);
  oldClntNo.setDisabled(false);
  // mcomPicEmpNo.setDisabled(false); // 에러 발생하는지 확인필요.
  // chkCollMoneyCond.setDisabled(false);
  // chkRegistInfo3.setDisabled(false);
  // chkRegistInfo4.setDisabled(false);

  // 신규일때 기본값 세팅
  sellClntYn.setValue("1");
  bizDivCntrYn.setValue("1");
  bizDomTransYn.setValue("1");
  stmtPrdDd.setValue(0);
  draftDdCnt.setValue(0);
  exSellAmt.setValue(0);
  crdLimitAmt.setValue(0);
  thiisPrflos.setValue(0);
  debtRatio.setValue(0);
  pldgAmt.setValue(0);
  adptDt.setDisabled(false);
  b_Cancel.setDisabled(false);
  b_Save.setDisabled(false);
  regClntNo.setDisabled(true);
  img_clntNo.setDisabled(true);
  addr1.setDisabled(true);
  sellClntClsCd.setSelectedIndex(1);
  transBizYn.setValue("1");
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  ds_logisticsCustomer.rowPosition = ds_logisticsCustomer.getRowPosition();
  let row = ds_logisticsCustomer.getRowPosition();
  var vApprvStsCd = ds_logisticsCustomer.getCellData(row, "apprvStsCd"); // apprvStsCd -> apprvStsNm

  if (!(vApprvStsCd == "01" || vApprvStsCd == "03")) {
    $c.win.alert($p, "상태가 대기 또는 반려인 경우만 수정 가능합니다.");
    return false;
  }
  scwin.f_ContentsEnable();

  // 거래처명, 사업자번호 enable 추가
  scwin.clntNm_enable();
  txt_createYn.setValue("0");
  txt_updateYn.setValue("1"); // 수정인경우
  txt_saveType.setValue("1"); // 0:신규, 1:수정, 2:조회, 3:저장, 4:취소

  $c.gus.cfDisableBtn($p, [b_Create, b_Update, b_Aprv, b_Delete]);

  // 버튼 enable
  b_Cancel.setDisabled(false);
  b_Save.setDisabled(false);
  $c.gus.cfEnableObj($p, bizDomEtcYn, false); //사업영역-기타여부

  $c.gus.cfEnableObj($p, img_clntNo, false);
  $c.gus.cfEnableObj($p, regClntNo, false);

  // 수정 버튼 클릭시 disable 해제해야되는 input들..
  regClntYn.setDisabled(false);
  ipx_clntNm.setDisabled(false);
  clntPersNm.setDisabled(false);
  regClntNo.setDisabled(false);
  regClntNo.setDisabled(true);
  crn_group.setDisabled(false);
  ipx_crn.setDisabled(false);
  crn_search.setDisabled(false);
  crn_regist.setDisabled(false);
  receiveSellingYn.setDisabled(false);
  chb_elecApprvChkYn.setDisabled(false);
  clntDeptNm.setDisabled(false);
  clntPersPstNm.setDisabled(false);
  clntTelNo.setDisabled(false);
  clntEmail.setDisabled(false);
  clntMpNo.setDisabled(false);
  clntFaxNo.setDisabled(false);
  // zip.setDisabled(false);
  addr2.setDisabled(false);
  chkRegistInfo2.setDisabled(false);
  sellClntClsCd.setDisabled(true);
  mcomPicEmpNo.setDisabled(false); // 에러 발생하는지 확인필요.
  chkCollMoneyCond.setDisabled(false);
  chkRegistInfo3.setDisabled(false);
  chkRegistInfo4.setDisabled(false);
  bilgClntNm.setDisabled(true);
  addr1.setDisabled(true);
  ipx_crn.setDisabled(true);
};

//-------------------------------------------------------------------------
// 거래처 등록, 수정 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  scwin.f_ContentsDisable();
  ds_logisticsCustomer.undoAll();
  // 신규후 그리드에 추가된 행 지워주는 소스
  let insertRow = ds_logisticsCustomer.getInsertedIndex();
  let focusedCol = gr_logisticsCustomer.getFocusedColumnIndex();
  let focusedRow = gr_logisticsCustomer.getFocusedRowIndex();
  ds_logisticsCustomer.removeRows(insertRow);
  gr_logisticsCustomer.setFocusedCell(focusedRow, focusedCol);
  $c.gus.cfDisableObjects($p, [elecAuthTrgtYn]); //매입계산서역발행여부

  if (ds_logisticsCustomer.getRowPosition() > -1) {
    $c.gus.cfDisableBtn($p, [b_Cancel, b_Save]);

    // 버튼 enable
    b_Create.setDisabled(false);
    b_Update.setDisabled(false);
    b_Delete.setDisabled(false);
  } else {
    $c.gus.cfDisableBtn($p, [b_Cancel, b_Update, b_Save, b_Aprv, b_Delete]);
  }
  txt_saveType.setValue("4"); // 0:신규, 1:수정, 2:조회, 3:저장, 4:취소
  txt_createYn.setValue("0");
  txt_updateYn.setValue("0");
  b_Create.setDisabled(false);
  b_Aprv.setDisabled(false);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  // stmtPrdClsCd
  // 매출입구분
  var vSellClntYn = sellClntYn.getValue(); // 매출
  var vPchsClntYn = pchsClntYn.getValue(); // 매입

  // 사업부문
  var vBizDivCntrYn = bizDivCntrYn.getValue(); // 벌크
  var vBizDivBulkYn = bizDivBulkYn.getValue(); // 컨테이너

  // 운송사업구분
  var vTransBizYn = transBizYn.getValue(); // 운송사업
  var vTransIntcdBizYn = transIntcdBizYn.getValue(); // 운송주선업	

  // 사업영역
  var vBizDomTransYn = bizDomTransYn.getValue(); // 운송
  var vBizDomStvYn = bizDomStvYn.getValue(); // 하역
  var vBizDomStrYn = bizDomStrYn.getValue(); // 보관
  var vBizDomTplYn = bizDomTplYn.getValue(); // 3자물류
  var vBizDomInatYn = bizDomInatYn.getValue(); // 국제
  var vBizDomEtcYn = bizDomEtcYn.getValue(); // 기타
  var vRegClnttYn = regClntYn.getValue(); // 등록번호 사용여부

  // 결제구분은 Bill 수령후를 선택할 수 없게함
  if (stmtPrdClsCd.getValue() == "02") {
    $c.win.alert($p, "결제 구분은 Bill 수령후를 선택하실 수 없습니다.");
    return 0;
  }
  let validVal = await $c.gus.cfValidate($p, [chkRegistInfo]);
  if (!validVal) {
    //거래처정보 필수값체크
    return false;
  }
  let validVal2 = await $c.gus.cfValidate($p, [chkRegistInfo2]);
  if (!validVal2) {
    //거래처분류 필수값체크
    return false;
  }

  // 여신한도 및 담보 필수 체크
  if (exSellAmt.getValue() == 0) {
    $c.win.alert($p, "예상매출액(연간)은  필수입력사항입니다.");
    return false;
  }
  if (crdLimitAmt.getValue() == 0) {
    $c.win.alert($p, "여신금액(월)은  필수입력사항입니다");
    return false;
  }
  if (pldgAmt.getValue() == 0 && pldgPattern.getValue() != "") {
    $c.win.alert($p, "담보종류 입력시 담보가액은 필수입력사항입니다");
    return false;
  }

  // 신규로 등록시에는 수금조건을 필수입력해야된다.

  if (txt_createYn.getValue() == "1" && sellClntYn.getValue() == true) {
    let validVal = await $c.gus.cfValidate($p, [chkCollMoneyCond]);
    if (!validVal) {
      await $c.win.alert($p, "거래처를 신규로 등록시 수금조건은 필수입력사항입니다.");
      return false;
    }

    // 결제조건 구분 항목 체크
    if (stmtPrdClsCd.getValue() < 1) {
      await $c.win.alert($p, "결제조건 구분은 필수입력 사항입니다.");
      sellClntClsCd.setValue(1);
      sellClntClsCd.setSelectedIndex(1);
      return false;
    }
  }

  //수금조건 필수 체크(2006.12월 추가) 
  if (vSellClntYn == true) {
    // '매출이 선택된 경우 '
    if (intrlnsClsCd.getValue() != "02" && sellClntClsCd.getValue() == "02" && tplGrpCd.getValue() == "") {} else {
      if (!$c.gus.cfValidate($p, [chkCollMoneyCond])) {
        $c.win.alert($p, "수금조건을 입력해주세요");
        return false;
      }
    }
  }
  if (vRegClnttYn == "0") {
    vRegClnttYn = false;
  } else {
    vRegClnttYn = true;
  }

  // 등록번호 사용여부  체크 확인
  if (vRegClnttYn) {
    if (regClntNo.getValue() == "") {
      $c.win.alert($p, "등록번호 사용여부를 체크한 경우 거래처 코드 입력은 필수합니다.");
      return;
    }
    if (vSellClntYn == false) {
      $c.win.alert($p, "등록번호 사용여부를 체크한 경우 매출입구분 매출 선택은 필수합니다.");
      sellClntYn.setValue("1");
      $c.gus.cfEnableObj($p, sellClntClsCd, true); // 매출거래처구분
      sellClntClsCd.setSelectedIndex(1);
      return;
    }
  }

  // 매출입구분 항목 체크
  if (vSellClntYn == false && vPchsClntYn == false) {
    $c.win.alert($p, "매출입구분은 필수입력 사항입니다.");
    sellClntYn.setValue("1");
    $c.gus.cfEnableObj($p, sellClntClsCd, true); // 매출거래처구분
    sellClntClsCd.setSelectedIndex(1);
    return false;
  }

  // 사업부문 항목 체크
  if (sellClntClsCd.getValue() < 1) {
    $c.win.alert($p, "거래처구분은 필수입력 사항입니다.");
    sellClntClsCd.setSelectedIndex(1);
    return false;
  }

  //매출거래처 필수 항목
  if (vSellClntYn) {
    // 사업부문 항목 체크
    if (vBizDivCntrYn == false && vBizDivBulkYn == false) {
      $c.win.alert($p, "사업부문은 매출거래처 필수입력 사항입니다.");
      bizDivCntrYn.setValue("1");
      return false;
    }

    // 사업영역 항목 체크
    if (vBizDomTransYn == false && vBizDomStvYn == false && vBizDomStrYn == false && vBizDomTplYn == false && vBizDomInatYn == false && vBizDomEtcYn == false) {
      $c.win.alert($p, "사업영역은 매출거래처 필수입력 사항입니다.");
      bizDomTransYn.setValue("1");
      return false;
    }
    if ($c.gus.cfIsNull($p, sellClntClsCd.getValue())) {
      $c.win.alert($p, MSG_CM_ERR_056, ["거래처구분"]);
      return false;
    }
  }

  //매입거래처 필수 항목
  if (vPchsClntYn) {
    // 운송사업구분 항목 체크
    if (vTransBizYn == false && vTransIntcdBizYn == false) {
      $c.win.alert($p, "운송사업구분은 매입거래처 필수입력 사항입니다.");
      transBizYn.setValue("1");
      return false;
    }
  }
  var vCreateYn = txt_createYn.getValue();
  if (vCreateYn == "1") {
    lux_clntLupCond.setValue(0);
    qryCntn.setValue(ds_logisticsCustomer.getCellData(ds_logisticsCustomer.getRowPosition(), "clntNm"));
  }

  // to-do 
  // let validVal3 = await $c.gus.cfValidate([firstTxnDt])
  // if (!validVal3) return;

  //변경한 데이터가 있는지 체크한다. 
  if (ds_logisticsCustomer.getModifiedIndex().length == false) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if (ds_logisticsCustomer.getCellData(ds_logisticsCustomer.getRowPosition(), "inchnClntNo") != "") {
    if (ds_logisticsCustomer.getCellData(ds_logisticsCustomer.getRowPosition(), "inchnClntNo").length != 6) {
      $c.win.alert($p, "인천회계거래처 " + ds_logisticsCustomer.getCellData(ds_logisticsCustomer.getRowPosition(), "inchnClntNo") + "는 6자리로 입력해야 합니다.");
      return false;
    }
  }
  if (clntBusiClsCd.getValue() == 0) {
    $c.win.alert($p, "사업자구분이 설정되지 않았습니다. 사업자등록번호 란의 등록 버튼을 눌러 사업자정보를 새로 등록해주십시오.");
    return false;
  }
  // 저장확인 
  let messageStr = "저장하시겠습니까?";
  let confirmRet = await $c.win.confirm($p, messageStr);
  if (confirmRet) {
    scwin.pos_clnt = ds_logisticsCustomer.getRowPosition();
    if (qryCntn.getValue().trimAll() == "") {
      qryCntn.setValue(ipx_clntNm.getValue());
    }
    $c.sbm.execute($p, sbm_saveLogisticsCustomer);
  }
};

//삭제
scwin.f_Delete = async function () {
  let focusedIdx = ds_logisticsCustomer.getRowPosition();
  var vClntNm = ds_logisticsCustomer.getCellData(focusedIdx, "clntNm");
  var vDrawUserNm = ds_logisticsCustomer.getCellData(focusedIdx, "drawUserNm");
  if (scwin.g_sUserId != ds_logisticsCustomer.getCellData(focusedIdx, "drawUserId")) {
    $c.win.alert($p, "거래처[" + vClntNm + "] 의 삭제는 등록자[" + vDrawUserNm + "] 만 가능 합니다.");
    return;
  }
  if (ds_logisticsCustomer.getCellData(focusedIdx, "apprvStsCd") != "01") {
    $c.win.alert($p, "상태가 대기인 경우만 삭제할 수 있습니다.");
    return false;
  }
  let messageStr = "삭제하시겠습니까?";
  let confirmVal = await $c.win.confirm($p, messageStr);
  if (confirmVal) {
    // ds_logisticsCustomer.DeleteMarked();
    // to-do 아래 소스 전환이 작동하는지 확인 필요.
    // let deletedIdx = ds_logisticsCustomer.getDeletedIndex();
    let deletedIdx = gr_logisticsCustomer.getFocusedRowIndex();
    ds_logisticsCustomer.deleteRow(deletedIdx);
    $c.sbm.execute($p, sbm_saveLogisticsCustomer);
  }
};

//-------------------------------------------------------------------------
// 바이트 크기 체크
//-------------------------------------------------------------------------
scwin.bytelength = function (bstr) {
  let len = bstr.length;
  for (ii = 0; ii < bstr.length; ii++) {
    xx = bstr.substring(ii, 1).charCodeAt(0);
    if (xx > 127) {
      len++;
    }
  }
  return len;
};

//-------------------------------------------------------------------------
// 엑셀 다운
//-------------------------------------------------------------------------
scwin.f_logisDownLoadExcelSheet = async function () {
  var vResultCountRow = ds_logisticsCustomer.getTotalRow();
  if (vResultCountRow <= 0) {
    $c.win.alert($p, "거래처목록이 없습니다.");
    return false;
  }
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    // cfGridToExcel(gr_logisticsCustomerExcel, "신규거래처 요청 리스트", "거래처", 2 + 4 + 8 + 16);
    let exelTitle = "신규거래처 요청 리스트";
    const grdObj = gr_logisticsCustomerExcel;
    // const infoArr = [];
    const options = {
      fileName: "거래처" + ".xlsx",
      //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      sheetName: exelTitle,
      bodyWordwrap: true
    };
    await $c.data.downloadGridViewExcel($p, grdObj, options);
  }
};

//-------------------------------------------------------------------------
// 우편번호 코드조회 팝업
//-------------------------------------------------------------------------
scwin.f_openZipPopUp = async function () {
  var rtnList = new Array();
  // var popupResult = window.showModalDialog("/ui/cm/zz/newzipcodePopup.jsp", "",
  //     "dialogHeight:400px;dialogWidth:530px;center:yes;scroll:no;status:no;help:no");

  let v_url = "/ui/cm/zz/newzipcodePopup.xml";
  let opts = {
    id: "pupup",
    popupName: "",
    modal: true,
    type: "browserPopup",
    width: 530,
    height: 400,
    title: ""
  };
  let popupResult = await $c.win.openPopup($p, v_url, opts, rtnList);

  // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
  if (popupResult != null) {
    if (rtnList[0] == "N/A") return;
    // zip.setValue(popupResult.zip);
    zip_search.setValue(popupResult.zip);
    addr1.setValue(popupResult.addr1);
    addr2.focus();
  } else {
    // zip.setValue("");
    zip_search.setValue("");
    addr1.setValue("");
    addr2.setValue("");
  }
};

//-------------------------------------------------------------------------
// 사원팝업 돋보기 클릭 이벤트
//-------------------------------------------------------------------------
scwin.empPopup_onClick = function () {
  scwin.f_openEmpPopUp();
};

//-------------------------------------------------------------------------
// 사원팝업 콜백
//-------------------------------------------------------------------------
scwin.empPopup_callBack = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    mcomPicEmpNo.setValue(rtnList[0]); //사원번호
    empNm.setValue(rtnList[1]); //사원명
  }
};

//-------------------------------------------------------------------------
// 사원팝업 
//-------------------------------------------------------------------------
scwin.f_openEmpPopUp = function () {
  var rtnList = new Array();
  rtnList = emp_search.cfCommonPopUp(scwin.empPopup_callBack, '', '', "T", null, null, "100,100,0,130", "3,5,6,7,8,9,10", null, null, null, null, null, null, null, null, null); //  사원코드
};

//-------------------------------------------------------------------------
// 거래처정보 중복확인
//-------------------------------------------------------------------------
scwin.f_openClntNoDupPopUp = function () {
  // idx =0 : 거래처, idx =1 : 상위거래처
  var vClntNo = clntNo.getValue().trimAll();
  if (vClntNo == "") {
    var msgArr = new Array(1);
    msgArr[0] = "거래처번호";
    $c.win.alert($p, MSG_CM_ERR_002, msgArr);
    clntNo.focus();
    return false;
  }
  var txtClntNo = vClntNo.length < 6 ? $c.gus.cfGetLeftPad($p, vClntNo, 6) : vClntNo;

  // retrieveClntList
  rtnList = upperClnt_search.cfCommonPopUp(scwin.f_openUpperClntPopUpCallBack, txtClntNo, '', null, null, null, null, null, null, null, null, null, null, "T", null, null); //  거래처정보

  var msgClntDupArr = new Array(1);
  msgClntDupArr[0] = "거래처번호";
  if (rtnList > 0) {
    //거래처번호 중복체크결과 , 0: 중복없음, 1이상: 중복
    $c.win.alert($p, MSG_CM_WRN_011, msgClntDupArr);
    txt_clntNoValChk.setValue("1");
    clntNo.focus();
  } else {
    $c.win.alert($p, "등록가능한 거래처번호입니다.");
    txt_clntNoValChk.getValue("0");
    clntNo.setValue(txtClntNo);
    ipx_clntNm.focus();
  }
};

//-------------------------------------------------------------------------
// 사업자등록정보 등록팝업
//-------------------------------------------------------------------------
scwin.f_registCrn = async function (param) {
  await $c.gus.cfShowCrnInfo($p, param);
};

//-------------------------------------------------------------------------
// 상위 거래처정보 아이콘 버튼 클릭 이벤트
//-------------------------------------------------------------------------
scwin.f_UpperClntPopUpOnClick = function () {
  scwin.f_openUpperClntPopUp();
};

//-------------------------------------------------------------------------
// 상위 거래처정보
//-------------------------------------------------------------------------
scwin.f_openUpperClntPopUp = function () {
  var rtnList = new Array();
  rtnList = upperClnt_search.cfCommonPopUp(scwin.f_openUpperClntPopUpCallBack, '', '', "T", null, null, null, null, ",UPPER_CLNT", null, null, null, null, null, null, null); //  거래처정보
};

//-------------------------------------------------------------------------
// 상위 거래처정보 콜백
//-------------------------------------------------------------------------
scwin.f_openUpperClntPopUpCallBack = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    upperClntNo.setValue(rtnList[0]); //거래처번호
    upperClntNm.setValue(rtnList[1]); //거래처명
  }
};

//-------------------------------------------------------------------------
// 매출, 매입 거래처 체크박스
//-------------------------------------------------------------------------
scwin.f_checkPurchaseClntType = function (idx) {
  if (idx == "0") {
    //매출
    if (sellClntYn.getValue() == true) {
      sellClntClsCd.setDisabled(false);
      sellClntClsCd.setValue(1);
      elecAuthTrgtYn.setValue("0");
      $c.gus.cfDisableObjects($p, [elecAuthTrgtYn]);
    } else {
      sellClntClsCd.setDisabled(false);
      sellClntClsCd.setValue(1);
    }
    if (pchsClntYn.getValue() == true && sellClntYn.getValue() == true) {
      $c.gus.cfEnableObjects($p, [elecAuthTrgtYn]);
    }
  } else if (idx == "1") {
    // 매입	
    if (pchsClntYn.getValue() == true) {
      // 			cfEnableBtnOnly([bAddRow, bUpdateRow, bDeleteRow]); // 매입거래처 버튼
      $c.gus.cfEnableObjects($p, [elecAuthTrgtYn]);
    } else {
      //    			cfDisableBtnOnly([bAddRow, bUpdateRow, bDeleteRow]); // 매입거래처 버튼
      elecAuthTrgtYn.setValue("0");
      $c.gus.cfDisableObjects($p, [elecAuthTrgtYn]);
    }
  }
};

//-------------------------------------------------------------------------
// 전화번호 유효성 체크
//-------------------------------------------------------------------------
scwin.f_CheckTelNumber = function (vIndex) {
  var vTelNo = "";
  var vAlertMsg = "";
  var vRtrurnId = "";
  if (vIndex == "1") {
    // 휴대폰번호
    vTelNo = clntMpNo.getValue();
    vAlertMsg = "휴대폰전화번호를 정확하게 입력해 주십시오.";
    vRtrurnId = "clntMpNo";
  } else if (vIndex == "2") {
    // 유선전화
    vTelNo = clntTelNo.getValue();
    vAlertMsg = "유선전화번호를 정확하게 입력해 주십시오.";
    vRtrurnId = "clntTelNo";
  } else {
    // FAX
    vTelNo = clntFaxNo.getValue();
    vAlertMsg = "FAX번호를 정확하게 입력해 주십시오.";
    vRtrurnId = "clntFaxNo";
  }
  if (vTelNo.trim() != "") {
    // var vValidTelNumber = covTelNumberValidator_validate(vTelNo);
    var vValidTelNumber = $c.str.isPhone($p, vTelNo);
    if (!vValidTelNumber) {
      $c.win.alert($p, vAlertMsg);
      var vId = $p.getComponentById(vRtrurnId);
      vId.focus();
      return false;
    }
  }
};

//-------------------------------------------------------------------------
// 달력 팝업
//-------------------------------------------------------------------------
scwin.f_PopupCalendar = function (target, dest) {
  // 입력창이 비활성 상태면 팝업 안됨
  if (!target.enable) return;

  // cfOpenCalendar(target); // 웹스퀘어 컴포넌트로 대체

  // 입력후 포커스 이동
  if (dest != null) dest.focus();
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.(그리드용)
//-------------------------------------------------------------------------
scwin.f_retrieveJudge = function () {
  //심사권한 조회
  // ds_judge.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC"
  //     + "&queryId=retrieveBorrowAcqKindInfo&param1=ZZ023";
  // ds_judge.Reset();

  // let dataParam = {
  //     "sysCd": "CommonEBC",
  //     "queryId": "retrieveBorrowAcqKindInfo",
  //     "param1": "ZZ023",
  // }
  // dma_judge.setJSON(dataParam);

  sbm_judge.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" + "&queryId=retrieveBorrowAcqKindInfo&param1=ZZ023";
  $c.sbm.execute($p, sbm_judge);
};

//-------------------------------------------
// 휴대전화번호 입력 : '숫자', '-'
//-------------------------------------------
scwin.f_checkCharacter = function (event) {
  if (event.keyCode != 45 && (event.keyCode < 48 || event.keyCode > 57)) {
    $c.win.alert($p, "휴대전화번호는 '숫자', '-' 만 입력 가능 합니다.");
    event.returnValue = false;
    //return;
  }
};
scwin.clearTable = function () {
  $c.gus.cfInitObjects($p, tbl_search);
};

// 이전거래처 input 대문자 전환
scwin.oldClntNo_onblur = function (e) {
  $c.gus.cfToUpper($p, oldClntNo);
};

//-------------------------------------------------------------------------
// 전자결재요청
//-------------------------------------------------------------------------
scwin.f_aprv = async function () {
  try {
    let focusedIdx = ds_logisticsCustomer.getRowPosition();
    var vApprvStsCd = ds_logisticsCustomer.getCellData(focusedIdx, "apprvStsCd");
    if (!(vApprvStsCd == "01" || vApprvStsCd == "03")) {
      $c.win.alert($p, "상태가 대기 또는 반려인 경우만 수정 가능합니다.");
      return false;
    }
    var vClntNm = ds_logisticsCustomer.getCellData(focusedIdx, "clntNm");
    var vDrawUserNm = ds_logisticsCustomer.getCellData(focusedIdx, "drawUserNm");
    var vModUserNm = ds_logisticsCustomer.getCellData(focusedIdx, "modUserNm");
    var vDrawUserId = ds_logisticsCustomer.getCellData(focusedIdx, "drawUserId");
    var vModUserId = ds_logisticsCustomer.getCellData(focusedIdx, "modUserId");
    if (!(scwin.g_sUserId == vDrawUserId || scwin.g_sUserId == vModUserId)) {
      if (vDrawUserId != vModUserId) {
        $c.win.alert($p, "거래처[" + vClntNm + "] 의 결재는 등록자[" + vDrawUserNm + "] 또는 수정자[" + vModUserNm + " 만 가능 합니다.");
        return;
      } else {
        $c.win.alert($p, "거래처[" + vClntNm + "] 의 결재는 등록자[" + vDrawUserNm + "] 만 가능 합니다.");
        return;
      }
    }
    let requestTran = await $c.win.confirm($p, "전자결재 요청하시겠습니까?");
    if (requestTran != true) {
      return;
    }

    //결재요청내역 START>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    var vReqApprvDocKndCd = "037"; // 결재문서종류 -- 신규거래처개설 신청(공통코드 ZZ022)
    var vReqUserId = scwin.g_sUserId; // 결재요청자 ID
    var vEpUsrId = scwin.g_sEmpNo; // EP사용자 ID
    var vReqApprvTitle = "신규거래처[ " + ds_logisticsCustomer.getCellData(focusedIdx, "clntNm") + " ] 개설";
    var toDay = new Date().format("YYYYMMDD");
    var vAddr = "(" + ds_logisticsCustomer.getCellData(focusedIdx, "zip") + ")" + ds_logisticsCustomer.getCellData(focusedIdx, "addr1") + " " + ds_logisticsCustomer.getCellData(focusedIdx, "addr2");

    // to-do

    var vApprvDtlInfo = "";
    vApprvDtlInfo = "<span style='font-size:10pt; font-weight: bold;'>[거래처정보]</span>";
    vApprvDtlInfo += "<table border='1' width='720' cellspacing='0' bordercolordark='white' bordercolorlight='black' style='margin-top:2px;margin-bottom: 2px;'>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>거래처명</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240' colspan='3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ipx_clntNm.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>사업자번호</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + ipx_crn.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>사업자구분</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + clntBusiClsCd.getText() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>업태</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + bizcondNm.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>업종</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + biztypeNm.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>대표자</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + repstNm.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>거래처부서</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + clntDeptNm.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>거래처직원직위</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + clntPersPstNm.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>거래처직원명</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + clntPersNm.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>유선전화번호</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + clntTelNo.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>휴대전화번호</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + clntMpNo.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>FAX번호</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + clntFaxNo.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>E-mail</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + clntEmail.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>사업장주소</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240' colspan='3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + busiAddr.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>청구처주소</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240' colspan='3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + vAddr + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "</table>";

    // 매출입구분
    var vSellClntYn = sellClntYn.getValue(); // 매출
    var vPchsClntYn = pchsClntYn.getValue(); // 매입

    // 사업부문
    var vBizDivCntrYn = bizDivCntrYn.getValue(); // 벌크
    var vBizDivBulkYn = bizDivBulkYn.getValue(); // 컨테이너

    // 운송사업구분
    var vTransBizYn = transBizYn.getValue(); // 운송사업
    var vTransIntcdBizYn = transIntcdBizYn.getValue(); // 운송주선업	

    // 사업영역
    var vBizDomTransYn = bizDomTransYn.getValue(); // 운송
    var vBizDomStvYn = bizDomStvYn.getValue(); // 하역
    var vBizDomStrYn = bizDomStrYn.getValue(); // 보관
    var vBizDomTplYn = bizDomTplYn.getValue(); // 3자물류
    var vBizDomInatYn = bizDomInatYn.getValue(); // 국제
    var vBizDomEtcYn = bizDomEtcYn.getValue(); // 기타

    vApprvDtlInfo += "<span style='font-size:10pt; font-weight: bold;'>[거래처분류]</span>";
    vApprvDtlInfo += "<table border='1' width='720' cellspacing='0' bordercolordark='white' bordercolorlight='black' style='margin-top:2px;margin-bottom:2px;'>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>매출입구분</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>";
    if (vSellClntYn == '1') {
      vApprvDtlInfo += "<input type='checkbox' checked disabled='disabled'>매출 ";
    } else {
      vApprvDtlInfo += "<input type='checkbox' disabled='disabled'>매출 ";
    }
    if (vPchsClntYn == '1') {
      vApprvDtlInfo += "<input type='checkbox' checked disabled='disabled'>매입";
    } else {
      vApprvDtlInfo += "<input type='checkbox' disabled='disabled'>매입";
    }
    vApprvDtlInfo += "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>계열구분</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + intrlnsClsCd.getText() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>거래처구분</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + sellClntClsCd.getText(true) + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>3자물류구분</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    if (tplGrpCd.getValue() != "") {
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + tplGrpCd.getValue() + "</span></font></p>";
    } else {
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'></span></font></p>";
    }
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>사업부문</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>";
    if (vBizDivCntrYn == "1") {
      vApprvDtlInfo += "<input type='checkbox' checked disabled='disabled'>벌크 ";
    } else {
      vApprvDtlInfo += "<input type='checkbox' disabled='disabled'>벌크 ";
    }
    if (vBizDivBulkYn == "1") {
      vApprvDtlInfo += "<input type='checkbox' checked disabled='disabled'>컨테이너";
    } else {
      vApprvDtlInfo += "<input type='checkbox' disabled='disabled'>컨테이너";
    }
    vApprvDtlInfo += "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>운송사업구분</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>";
    if (vTransBizYn == "1") {
      vApprvDtlInfo += "<input type='checkbox' checked disabled='disabled'>운송사업 ";
    } else {
      vApprvDtlInfo += "<input type='checkbox' disabled='disabled'>운송사업 ";
    }
    if (vTransIntcdBizYn == "1") {
      vApprvDtlInfo += "<input type='checkbox' checked disabled='disabled'>운송주선업";
    } else {
      vApprvDtlInfo += "<input type='checkbox' disabled='disabled'>운송주선업";
    }
    vApprvDtlInfo += "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>사업영역</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240' colspan='3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>";
    if (vBizDomTransYn == "1") {
      vApprvDtlInfo += "<input type='checkbox' checked disabled='disabled'>운송 ";
    } else {
      vApprvDtlInfo += "<input type='checkbox' disabled='disabled'>운송 ";
    }
    if (vBizDomStvYn == "1") {
      vApprvDtlInfo += "<input type='checkbox' checked disabled='disabled'>하역 ";
    } else {
      vApprvDtlInfo += "<input type='checkbox' disabled='disabled'>하역 ";
    }
    if (vBizDomStrYn == "1") {
      vApprvDtlInfo += "<input type='checkbox' checked disabled='disabled'>보관 ";
    } else {
      vApprvDtlInfo += "<input type='checkbox' disabled='disabled'>보관 ";
    }
    if (vBizDomTplYn == "1") {
      vApprvDtlInfo += "<input type='checkbox' checked disabled='disabled'>3자물류 ";
    } else {
      vApprvDtlInfo += "<input type='checkbox' disabled='disabled'>3자물류 ";
    }
    if (vBizDomInatYn == "1") {
      vApprvDtlInfo += "<input type='checkbox' checked disabled='disabled'>국제";
    } else {
      vApprvDtlInfo += "<input type='checkbox' disabled='disabled'>국제";
    }
    if (vBizDomEtcYn == "1") {
      vApprvDtlInfo += "<input type='checkbox' checked disabled='disabled'>기타";
    } else {
      vApprvDtlInfo += "<input type='checkbox' disabled='disabled'>기타";
    }
    vApprvDtlInfo += "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>상위거래처</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + upperClntNm.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>청구거래처</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + bilgClntNm.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>최초거래일자</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    var firstTxnDt = "";
    if (ds_logisticsCustomer.getCellData(focusedIdx, "firstTxnDt") != "") {
      firstTxnDt = ds_logisticsCustomer.getCellData(focusedIdx, "firstTxnDt");
      firstTxnDt = firstTxnDt.substring(0, 4) + "/" + firstTxnDt.substring(4, 2) + "/" + firstTxnDt.substring(6, 2);
    }
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + firstTxnDt + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>협력업체평가여부</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>";
    if (ds_logisticsCustomer.getCellData(focusedIdx, "copCoEstmtYn") == "1") {
      vApprvDtlInfo += "<input type='radio' checked disabled='disabled'>예 <input type='radio' disabled='disabled'>아니오";
    } else {
      vApprvDtlInfo += "<input type='radio' disabled='disabled'>예 <input type='radio' checked disabled='disabled'>아니오";
    }
    vApprvDtlInfo += "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>인천회계거래처</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + inchnClntNo.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>국제물류파트너</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>";
    if (ds_logisticsCustomer.getCellData(focusedIdx, "inatPartnerYn") == "1") {
      vApprvDtlInfo += "<input type='radio' checked disabled='disabled'>예 <input type='radio' disabled='disabled'>아니오";
    } else {
      vApprvDtlInfo += "<input type='radio' disabled='disabled'>예 <input type='radio' checked disabled='disabled'>아니오";
    }
    vApprvDtlInfo += "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>매입계산서역발행</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='240'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>";
    if (ds_logisticsCustomer.getCellData(focusedIdx, "elecAuthTrgtYn") == "1") {
      vApprvDtlInfo += "<input type='radio' checked disabled='disabled'>적용 <input type='radio' disabled='disabled'>미적용";
    } else {
      vApprvDtlInfo += "<input type='radio' disabled='disabled'>적용 <input type='radio' checked disabled='disabled'>미적용";
    }
    vApprvDtlInfo += "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3'></td>";
    vApprvDtlInfo += "<td width='240'></td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "</table>";
    vApprvDtlInfo += "<span style='font-size:10pt; font-weight: bold;'>[수금조건]</span>";
    vApprvDtlInfo += "<table border='1' width='720' cellspacing='0' bordercolordark='white' bordercolorlight='black' style='margin-top:2px;margin-bottom:2px;'>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3' colspan='3'>";
    var adptDt = "";
    if (ds_logisticsCustomer.getCellData(focusedIdx, "adptDt") != "") {
      adptDt = ds_logisticsCustomer.getCellData(focusedIdx, "adptDt");
      adptDt = adptDt.substring(0, 4) + "/" + adptDt.substring(4, 6) + "/" + adptDt.substring(6, 8);
    }
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>적용일자</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='150'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + adptDt + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3' colspan='3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>화폐</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='150'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + collMoneyCrcCd.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3' rowspan='2'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>결제조건</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3' colspan='2'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>구분</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='150'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + stmtPrdClsCd.getText(true) + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3' rowspan='2'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>결제방식</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3' colspan='2'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>구분</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='150'>";
    if (collMoneyCntShtCd.getValue() != "") {
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + collMoneyCntShtCd.getValue() + "</span></font></p>";
    } else {
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'></span></font></p>";
    }
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3' colspan='2'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>결제기한</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='150'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + stmtPrdDd.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='120' style='background-color:F3F3F3' colspan='2'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>지급기한</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='150'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + draftDdCnt.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "</table>";
    vApprvDtlInfo += "<span style='font-size:10pt; font-weight: bold;'>[여신 및 담보 현황]</span>";
    vApprvDtlInfo += "<table border='1' width='720' cellspacing='0' bordercolordark='white' bordercolorlight='black' style='margin-top:2px;margin-bottom:2px;'>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='180' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>예상매출액(연간)</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='180' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>여신금액(월)</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='180' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>담보종류</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='180' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>담보가액</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='180'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + $c.gus.cfInsertComma($p, exSellAmt.getValue()) + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='180'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + $c.gus.cfInsertComma($p, crdLimitAmt.getValue()) + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='180'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + pldgPattern.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='180'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + $c.gus.cfInsertComma($p, pldgAmt.getValue()) + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "</table>";
    vApprvDtlInfo += "<span style='font-size:10pt; font-weight: bold;'>[기업정보]</span>";
    vApprvDtlInfo += "<table border='1' width='720' cellspacing='0' bordercolordark='white' bordercolorlight='black' style='margin-top:2px;margin-bottom:2px;'>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='180' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>신용등급</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='180' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>당기손익</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='180' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>부채비율</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='180' style='background-color:F3F3F3'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>비고</span></font><span style='font-size:10pt;'></span></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "<tr>";
    vApprvDtlInfo += "<td width='180'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + creditRating.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='180'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + $c.gus.cfInsertComma($p, thiisPrflos.getValue()) + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='180'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + $c.gus.cfInsertComma($p, debtRatio.getValue()) + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "<td width='180'>";
    vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>" + summary.getValue() + "</span></font></p>";
    vApprvDtlInfo += "</td>";
    vApprvDtlInfo += "</tr>";
    vApprvDtlInfo += "</table>";
    //결재요청내역 END>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const params = {
      apprvDocKndCd: vReqApprvDocKndCd,
      reqUserId: vReqUserId,
      epUserId: vEpUsrId,
      apprvTitle: vReqApprvTitle,
      apprvDtlInfo: vApprvDtlInfo,
      appNo: ds_logisticsCustomer.getCellData(ds_logisticsCustomer.getRowPosition(), "appNo")
    };

    // DataMap에 세팅
    ds_reqApprove_condition.setJSON(params);
    let url = "/cm.bc.clnt.clntmgnt.CustomerApproveCMD.do";
    let targetName = "aprvPopup"; // 고정 이름 재사용

    var data = ds_reqApprove_condition.getJSON() || {};
    const form = document.createElement("form");
    form.method = "POST";
    form.action = url;
    form.target = targetName;

    // 팝업 차단 회피: 사용자 confirm 이후 즉시 open
    const win = window.open("", targetName);
    if (!win) {
      console.warn("Popup blocked");
      // 필요하면 여기서 alert 처리
      // $c.win.alert("팝업이 차단되었습니다. 팝업 허용 후 다시 시도해 주세요.");
    }
    Object.keys(data).forEach(key => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;

      // 배열/객체는 서버가 JSON 문자열로 받는 구조인지 확인 필요.
      // 보통은 stringify 해서 보내는 게 안전함.
      const val = data[key];
      input.value = val && typeof val === "object" ? JSON.stringify(val) : (val ?? "").toString();
      form.appendChild(input);
    });
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  } catch (e) {
    console.log("f_aprv : " + e);
  }
};

//-------------------------------------------------------------------------
// 영수거래처여부 체크박스 클릭 시
//-------------------------------------------------------------------------
scwin.f_clickReceiveSelling = function () {
  var vReceiveSellingYn = receiveSellingYn.getValue(); // 영수거래처 여부 
  if (vReceiveSellingYn == true) {
    $c.win.alert($p, "해당 신규거래처 등록은 영수매출 전용입니다, 선입금 확인 후 등록하시기 바라며 외상매출신규등록은 불가능하오니 영수거래처 체크박스 해제 후 등록하시기 바랍니다.");
  }
};

// 등록번호 사용여부 체크
scwin.f_checkClntNo = function () {
  var vRegClntYn = regClntYn.getValue(); // 등록번호 사용여부 
  if (vRegClntYn == true) {
    $c.gus.cfEnableObj($p, img_clntNo, true); // 거래처팝업 이미지
    $c.gus.cfEnableObj($p, regClntNo, true); // 거래처코드
    $c.gus.cfEnableObj($p, crn_search, false); // 사업자번호팝업 이미지
    $c.gus.cfEnableObj($p, crn, false); // 사업자번호
  } else {
    $c.gus.cfEnableObj($p, img_clntNo, false); // 거래처팝업 이미지
    $c.gus.cfEnableObj($p, regClntNo, false); // 거래처코드
    $c.gus.cfEnableObj($p, crn_search, true); // 사업자번호팝업 이미지
    $c.gus.cfEnableObj($p, crn, true); // 사업자번호
  }
};
scwin.bilgClntPopUpClick = function () {
  scwin.f_openPopUp("3");
};
scwin.bilgClntPopUpClick_CallBack = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    bilgClntNo.setValue(rtnList[0]); //거래처번호
    bilgClntNm.setValue(rtnList[1]); //거래처명
  }
};

//사업자 팝업
scwin.crn_searchPopup_click = function () {
  scwin.udc_crn_search_Hidden_onclickEvent();
};
scwin.udc_crn_search_Hidden_onclickEvent = function (e) {
  scwin.f_openPopUp("2");
};
scwin.udc_crn_search_Hidden_CallBack = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    var vCrn = ipx_crn.getValue();
    var vClntNm = ipx_clntNm.getValue();
    var vZip = "";
    var vBusiAddr = "";
    var vTmpZip = zip_search.getValue();
    var vTmpAddr1 = addr1.getValue();
    var vTmpAddr2 = addr1.getValue();
    let crnVal = rtnList[0];

    // udc 와 input의 이름이 같아 값이 안찍히는거 같아서 id를 다르게 바꿔줌.
    ipx_crn.setValue(crnVal); //사업자등록번호  crn -> ipx_crn

    if (vClntNm.trimAll() == "") {
      ipx_clntNm.setValue(rtnList[1]); //사업자명
    }
    clntBusiClsCd.setValue(rtnList[2]);
    repstNm.setValue(rtnList[3]);
    bizcondNm.setValue(rtnList[4]);
    biztypeNm.setValue(rtnList[5]);
    if (vTmpZip.trim() == "" && vTmpAddr1.trim() == "" && vTmpAddr2.trim() == "") {
      zip_search.setValue(rtnList[6]);
      addr1.setValue(rtnList[7]);
      addr2.setValue(rtnList[8]);
    }
    if (rtnList[6] != "" && rtnList[6].length > 5) {
      vZip = "(" + rtnList[6].substring(0, 3) + "-" + rtnList[6].substring(3, 6) + ") ";
    }
    vBusiAddr = vZip + rtnList[7] + "  " + rtnList[8];
    busiAddr.setValue(vBusiAddr);
    if (rtnList[9] == 1) {
      chb_elecApprvChkYn.setValue("1"); // true -> "1"
    } else {
      chb_elecApprvChkYn.setValue("0"); // false -> "0"
    }

    // 사업자등록번호가 거래처로 등록여부에 대한 메시지
    // retrieveClntCrnInfo
    // udc_crn_search2
    rtnList2 = udc_crn_search2.cfCommonPopUp(scwin.udc_crn_search_hidden2_callback, ipx_crn.getValue(), '', null, null, null, null, null, null, null, null, null, null, "T", null, null); //  거래처정보

    // if (rtnList2 > 0) {
    //     $c.win.alert("사업자등록번호가 이미 다른 거래처에 등록되어 있습니다.");
    // }
  }
};
scwin.udc_crn_search_hidden2_callback = function (rtnList2) {
  if (rtnList2 > 0) {
    $c.win.alert($p, "사업자등록번호가 이미 다른 거래처에 등록되어 있습니다.");
  }
};
scwin.udc_clnt_search_onclickEvent = function (e) {
  scwin.f_openPopUp("1");
};
scwin.udc_clnt_search_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    var vSellClntYn = rtnList[3]; // 매출여부
    var vPchsClntYn = rtnList[4]; // 매입여부
    var vRegClntYn = rtnList[5]; // 전자결재 등록여부

    if (vSellClntYn == "1") {
      $c.win.alert($p, "이미 매출거래처로 등록된 거래처번호입니다.");
      regClntNo.setValue("");
      ipx_clntNm.setValue("");
      ipx_crn.setValue("");
      return;
    } else {
      if (vRegClntYn != "0") {
        $c.win.alert($p, "매출거래처로 요청한 이력이 존재합니다.");
        regClntNo.setValue("");
        ipx_clntNm.setValue("");
        ipx_crn.setValue("");
        return;
      }
      regClntNo.setValue(rtnList[0]); // 코드
      ipx_clntNm.setValue(rtnList[1]); // 명
      ipx_crn.setValue(rtnList[2]); // 사업자번호

      //거래처관라-물류Tab 조회 참고
      var condition = "?";
      condition += "sysCls=0" //조회조건-시스템 : 전체
      + "&clntLupCond=1" //조회조건-거래처번호	  
      + "&qryCntn=" + rtnList[0] //거래처번호
      + "&clntDelYn=0" //거래처삭제유무 (미사용포함)
      + "&coCd=000" //회사코드
      ;
      sbm_customer.action = "/cm.bc.clnt.clntmgnt.RetrieveLogisticsCustomerListCMD.do" + condition;
      $c.sbm.execute($p, sbm_customer);
    }
  } else {
    regClntNo.setValue("");
    ipx_clntNm.setValue("");
    ipx_crn.setValue("");
  }
};

// 팝업
scwin.f_openPopUp = function (flag, check) {
  var rtnList = new Array();
  switch (flag) {
    case '1':
      // 거래처
      var param = "000,0";
      rtnList = udc_clnt_search.cfCommonPopUp(scwin.udc_clnt_search_callback // XML상의 SELECT ID
      , regClntNo.getValue().trim() // 화면에서의 ??? Code Element의  Value
      , '' // 화면에서의 ??? Name Element의  Value
      , "T" // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는  컬럼 지정
      , param // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의  사용자 정의 폭
      , null // POP-UP뛰을때 우도우의  사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , "F" // 전체검색허용여부 ("F")
      , "거래처조회,거래처코드,거래처명" // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      // 				f_resultPopEd(regClntNo, clntNm, rtnList);
      break;
    case '2':
      //사업자
      //법인사업자와 개인사업자 구분
      var rtnList = new Array();
      rtnList = udc_crn_search_Hidden.cfCommonPopUp(scwin.udc_crn_search_Hidden_CallBack, '', '', "F", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, null); //  사업자등록번호
      break;
    case '3':
      //청구 거래처정보
      var rtnList = new Array();
      rtnList = bilgClntNo_search.cfCommonPopUp(scwin.bilgClntPopUpClick_CallBack, '', '', "T", null, null, null, null, null, null, null, null, null, null, null, null); //  거래처정보
      break;
    default:
      break;
  }
};

// <!-- LuxCombo 조회조건2 선택  -->
// for="lux_clntLupCond" event=onSelChange()
scwin.lux_clntLupCond_onchange = function (info) {
  txt_clntLupCond.setValue(lux_clntLupCond.getValue());
};

// <!-- 거래처 등록이 성공했을 경우 -->
// <!-- 저장 TR -->       
scwin.sbm_saveLogisticsCustomer_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

  scwin.f_ContentsDisable();
  $c.gus.cfDisableBtn($p, [b_Cancel, b_Save]);
  scwin.f_Retrieve();
  txt_createYn.setValue("0");
  txt_updateYn.setValue("0");
};

// <!-- 거래처 조회  -->
// for=ds_logisticsCustomer event=OnLoadCompleted(rowCnt)
scwin.sbm_logisticsCustomer_submitdone = function (e) {
  let rowCnt = ds_logisticsCustomer.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
    qryCntn.focus();
    scwin.f_ContentsDisable();
  } else {
    txt_clntNo.setValue(ds_logisticsCustomer.getCellData(0, "clntNo"));
    txt_rowCount.setValue(ds_logisticsCustomer.getTotalRow());
  }

  // 조회후 버튼 Enable, Disable
  if (rowCnt < 1) {
    $c.gus.cfDisableBtn($p, [b_Update, b_Cancel, b_Save, b_Aprv, b_Delete]);
  } else {
    $c.gus.cfDisableBtn($p, [b_Cancel, b_Save, elecAuthTrgtYn]);
    b_Create.setDisabled(false);
    b_Update.setDisabled(false);
    b_Delete.setDisabled(false);
  }

  // $c.gus.cfGoPrevPosition(ds_logisticsCustomer, pos_clnt);  // 저장 이전 로우

  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  // 	cfShowTotalRows(totalRows,rowCnt);

  gr_logisticsCustomer.setFocusedCell(0, "clntNo", true);
  txt_createYn.setValue("0");
  txt_updateYn.setValue("0");
};
scwin.ds_logisticsCustomer_onrowpositionchange = async function (info) {
  let row = info.newRowIndex;
  if (row == null) return;
  var vCountRow = ds_logisticsCustomer.getTotalRow();
  var vChgCount = 0;
  var vChgRow = 0;
  for (var i = 0; i < vCountRow; i++) {
    var vCurRowStatus = ds_logisticsCustomer.getRowStatusValue(i);
    if (vCurRowStatus == 1 || vCurRowStatus == 2) {
      vChgCount++;
      vChgRow = i;
    }
  }
  if (vChgCount > 0 && row != vChgRow) {
    await $c.win.alert($p, "거래처 신규등록이나 변경사항을 저장하신 후에 다른 거래처정보로 이동하실수 있습니다.");
    let focusCol = gr_logisticsCustomer.getFocusedColumnIndex();
    gr_logisticsCustomer.setFocusedCell(vChgRow, focusCol, false);
    return false;
  }
  var vRowStatus = ds_logisticsCustomer.getRowStatusValue(row);
  if (vRowStatus == 0) {
    scwin.f_ContentsDisable();
    $c.gus.cfDisableBtn($p, [b_Cancel, b_Save]);
  } else if (vRowStatus == undefined) {
    scwin.f_ContentsEnable();
    // $c.gus.cfEnableObj(zip, false);

    exSellAmt.setDisabled(true);
    crdLimitAmt.setDisabled(true);
    pldgPattern.setDisabled(true);
    pldgAmt.setDisabled(true);
    creditRating.setDisabled(true);
    thiisPrflos.setDisabled(true);
    debtRatio.setDisabled(true);
    summary.setDisabled(true);
    $c.gus.cfDisableBtn($p, [b_Create, b_Update, b_Delete]);
  } else {
    scwin.f_ContentsEnable();
    $c.gus.cfDisableBtn($p, [b_Create, b_Update, b_Delete]);
  }
};

// <!-- 거래처 번호 입력시 -->
// for=clntNo event=OnKillFocus()
scwin.clntNo_onblur = function (e) {
  clntNo.setValue($c.gus.cfGetLeftPad($p, clntNo.getValue(), '6'));
};

// <!-- 사업자구분 선택시 -->
// for=clntBusiClsCd event=OnSelChange()
scwin.clntBusiClsCd_onchange = function (info) {
  var vClntBusiClsCdIndex = clntBusiClsCd.getValue();
  var vClntNo = ds_logisticsCustomer.getCellData(ds_logisticsCustomer.getRowPosition(), "clntNo");
  if (vClntBusiClsCdIndex == 0) {
    //법인사업자
    ipx_crn.setMandatory(true);
    // crn.validExp = "사업자번호:yes"; // to-do
    // $c.gus.cfRefreshMandSign(); // to-do
  } else if (vClntBusiClsCdIndex == 1) {
    //개인사업자
    ipx_crn.setMandatory(true);
    // crn.validExp = "사업자번호:yes"; // to-do
    // $c.gus.cfRefreshMandSign();
  } else if (vClntBusiClsCdIndex == 2 || vClntBusiClsCdIndex == 3) {
    ipx_crn.setMandatory(false);
    ipx_crn.validExp = "";
    // $c.gus.cfRefreshMandSign();
  }
};
scwin.gr_logisticsCustomer_oncellclick = function (rowIndex, columnIndex, columnId) {
  // test용
  let clntNoVal = ds_logisticsCustomer.getCellData(rowIndex, "clntNo");
  let clntNmVal = ds_logisticsCustomer.getCellData(rowIndex, "clntNm");
};
scwin.sbm_saveLogisticsCustomer_submit = function (e) {};
scwin.gridExcelFormatYn = function (value) {
  switch ($c.num.parseInt($p, value)) {
    case 1:
      return 'O';
    default:
      return '';
  }
  ;
};
scwin.ds_logisticsCustomer_onremoverow = function (info) {
  clntNo.setValue('');
  regClntYn.setValue('');
  regClntNo.setValue('');
  clntNo.setValue('');
  oldClntNo.setValue('');
  clntBusiClsCd.setValue('');
  clntDeptNm.setValue('');
  clntPersPstNm.setValue('');
  clntPersNm.setValue('');
  clntTelNo.setValue('');
  clntMpNo.setValue('');
  clntEmail.setValue('');
  clntFaxNo.setValue('');
  sellClntYn.setValue('');
  pchsClntYn.setValue('');
  intrlnsClsCd.setValue('');
  sellClntClsCd.setValue('');
  tplGrpCd.setValue('');
  bizDivCntrYn.setValue('');
  bizDivBulkYn.setValue('');
  transBizYn.setValue('');
  transIntcdBizYn.setValue('');
  bizDomTplYn.setValue('');
  bizDomStrYn.setValue('');
  bizDomTransYn.setValue('');
  bizDomStvYn.setValue('');
  bizDomInatYn.setValue('');
  bilgClntNm.setValue('');
  firstTxnDt.setValue('');
  copCoEstmtYn.setValue('');
  inatPartnerYn.setValue('');
  elecAuthTrgtYn.setValue('');
  deptNm.setValue('');
  adptDt.setValue('');
  collMoneyCntShtCd.setValue('');
  draftDdCnt.setValue('');
  collMoneyCrcCd.setValue('');
  stmtPrdClsCd.setValue('');
  stmtPrdDd.setValue('');
  inchnClntNo.setValue('');
  busiAddr.setValue('');
  repstNm.setValue('');
  biztypeNm.setValue('');
  bizcondNm.setValue('');
  receiveSellingYn.setValue('');
  exSellAmt.setValue('');
  crdLimitAmt.setValue('');
  pldgPattern.setValue('');
  pldgAmt.setValue('');
  chb_elecApprvChkYn.setValue('');
  creditRating.setValue('');
  thiisPrflos.setValue('');
  debtRatio.setValue('');
  summary.setValue('');
};
scwin.sbm_customer_submitdone = function (e) {
  let ret = dma_customerDetail.getRowJSON(0) || {};
  clntBusiClsCd.setValue(ret["clntBusiClsCd"]);
  bizcondNm.setValue(ret["bizcondNm"]);
  biztypeNm.setValue(ret["biztypeNm"]);
  repstNm.setValue(ret["repstNm"]);
  clntDeptNm.setValue(ret["clntDeptNm"]);
  clntPersPstNm.setValue(ret["clntPersPstNm"]);
  clntPersNm.setValue(ret["clntPersNm"]);
  clntTelNo.setValue(ret["clntTelNo"]);
  clntEmail.setValue(ret["clntEmail"]);
  clntMpNo.setValue(ret["clntMpNo"]);
  clntFaxNo.setValue(ret["clntFaxNo"]);
  busiAddr.setValue(ret["busiAddr"]);
  zip_search.setValue(ret["zip"]); // zip -> zip_search
  addr1.setValue(ret["addr1"]);
  addr2.setValue(ret["addr2"]);
  sellClntYn.setValue(ret["sellClntYn"]);
  pchsClntYn.setValue(ret["pchsClntYn"]);
  intrlnsClsCd.setValue(ret["intrlnsClsCd"]);
  sellClntClsCd.setValue(ret["sellClntClsCd"]);
  tplGrpCd.setValue(ret["tplGrpCd"]);
  bizDivCntrYn.setValue(ret["bizDivCntrYn"]);
  bizDivBulkYn.setValue(ret["bizDivBulkYn"]);
  transBizYn.setValue(ret["transBizYn"]);
  transIntcdBizYn.setValue(ret["transIntcdBizYn"]);
  bizDomTplYn.setValue(ret["bizDomTplYn"]);
  bizDomStrYn.setValue(ret["bizDomStrYn"]);
  bizDomTransYn.setValue(ret["bizDomTransYn"]);
  bizDomStvYn.setValue(ret["bizDomStvYn"]);
  bizDomInatYn.setValue(ret["bizDomInatYn"]);
  upperClntNo.setValue(ret["upperClntNo"]);
  upperClntNm.setValue(ret["upperClntNm"]);
  bilgClntNo.setValue(ret["bilgClntNo"]);
  bilgClntNm.setValue(ret["bilgClntNm"]);
  firstTxnDt.setValue(ret["firstTxnDt"]);
  copCoEstmtYn.setValue(ret["copCoEstmtYn"]);
  inchnClntNo.setValue(ret["inchnClntNo"]);
  inatPartnerYn.setValue(ret["inatPartnerYn"]);
  elecAuthTrgtYn.setValue(ret["elecAuthTrgtYn"]);
  deptNm.setValue(ret["deptNm"]);
  mcomPicEmpNo.setValue(ret["mcomPicEmpNo"]);
  empNm.setValue(ret["empNm"]);
};
scwin.regClntNo_onblur = function (e) {
  scwin.f_openPopUp("1");
};
scwin.sbm_logisticsCustomer_submit = function (e) {};

// 부채비율 포맷터 정수 6자리, 소수 4자리까지 표시하는 formatter
scwin.fn_amountFormatter = function (value) {
  if (value == null || value === "") {
    return "";
  }
  let str = String(value).replace(/,/g, "");

  // +는 제거
  str = str.replace(/\+/g, "");

  // 마이너스 여부 확인
  let isMinus = str.indexOf("-") === 0;

  // 숫자와 소수점만 남김
  str = str.replace(/-/g, "");
  str = str.replace(/[^0-9.]/g, "");
  let dotIndex = str.indexOf(".");
  if (dotIndex > -1) {
    let intPart = str.substring(0, dotIndex).substring(0, 6);
    let decimalPart = str.substring(dotIndex + 1).replace(/\./g, "").substring(0, 4);
    intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (isMinus ? "-" : "") + intPart + "." + decimalPart;
  }
  str = str.substring(0, 6);
  str = str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (isMinus ? "-" : "") + str;
};
scwin.debtRatio_onkeyup = function (e) {
  let value = debtRatio.getValue();
  if (value == null || value === "") {
    return;
  }
  value = String(value).replace(/,/g, "");

  // +는 무조건 제거
  value = value.replace(/\+/g, "");

  // 숫자, 소수점, 마이너스만 허용
  value = value.replace(/[^0-9.-]/g, "");

  // 마이너스 여부 확인
  // -는 맨 앞에 1개만 허용
  let isMinus = value.indexOf("-") > -1;

  // 모든 - 제거 후 나중에 맨 앞에만 다시 붙임
  value = value.replace(/-/g, "");

  // 소수점 기준 분리
  let parts = value.split(".");

  // 정수부 최대 6자리
  let intPart = parts[0].substring(0, 6);
  let result = "";
  if (parts.length > 1) {
    // 소수점 여러 개 입력 방지
    // 소수부 최대 4자리
    let decimalPart = parts.slice(1).join("").substring(0, 4);
    result = intPart + "." + decimalPart;
  } else {
    result = intPart;
  }

  // 마이너스는 숫자 자리수와 별도로 맨 앞에만 허용
  if (isMinus && result !== "") {
    result = "-" + result;
  }

  // 값이 달라졌을 때만 세팅
  if (value !== result.replace("-", "")) {
    debtRatio.setValue(result);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'전자결재 요청 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lux_regModCond',style:'width:100px;',submenuSize:'auto',ref:'data:dma_logisticsCustomer.regModCond'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록자ID'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록자명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:100px;',id:'regModCntn',placeholder:'',class:'',ref:'data:dma_logisticsCustomer.regModCntn'}},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width:120px;',allOption:'',id:'lux_clntLupCond',class:'',direction:'auto',ref:'data:dma_logisticsCustomer.clntLupCond','ev:onchange':'scwin.lux_clntLupCond_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사업자번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대표자명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]},{T:1,N:'xf:input',A:{style:'width:200px;',id:'qryCntn',placeholder:'',class:'',ref:'data:dma_logisticsCustomer.qryCntn'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.clearTable'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridUpYn:'N',btnPlusYn:'Y',gridDownFn:'scwin.f_logisDownLoadExcelSheet',gridID:'gr_logisticsCustomer',gridDownYn:'Y',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_logisticsCustomer',style:'',autoFit:'allColumn',id:'gr_logisticsCustomer',visibleRowNum:'4',class:'wq_gvw',readOnly:'true','ev:oncellclick':'scwin.gr_logisticsCustomer_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'신청번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'230',inputType:'text',id:'column15',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column11',value:'담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column100',value:'등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column9',value:'수정자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column3',value:'상태',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'appNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'230',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntDeptNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'clntPersNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'drawUserNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'modUserNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'apprvStsNm',displayMode:'label'}}]}]}]},{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_logisticsCustomer',style:'height:150px;display: none;',id:'gr_logisticsCustomerExcel',defaultCellHeight:'20'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column12',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column10',value:'대표자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'매입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column8',value:'매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column7',value:'거래처부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column6',value:'거래처직원명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'전화번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column4',value:'우편번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column3',value:'주소1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column2',value:'주소2',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'clntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'repstNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.gridExcelFormatYn',width:'80',inputType:'text',id:'sellClntYn',displayMode:'label'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.gridExcelFormatYn',width:'80',inputType:'text',id:'pchsClntYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'clntDeptNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'word-wrap: break-word;',id:'clntPersNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntTelNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'zip',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'230',inputType:'text',style:'word-wrap: break-word;',id:'addr1',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'230',inputType:'text',id:'addr2',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h4',style:'',id:'',label:'거래처정보',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'( 이전거래처 :',style:''}},{T:1,N:'xf:input',A:{class:'',id:'oldClntNo',placeholder:'',style:'width:150px;','ev:onblur':'scwin.oldClntNo_onblur'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:')',style:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'chkRegistInfo',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'거래처번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:100px;',id:'clntNo',placeholder:'',class:'','ev:onblur':'scwin.clntNo_onblur',ref:'data:ds_logisticsCustomer.clntNo'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'(자동부여)',class:''}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'등록번호 사용여부',class:''}},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'regClntYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'','ev:onchange':'scwin.f_checkClntNo',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 100px;',id:'regClntNo',placeholder:'',class:'',validExp:'거래처:no:format=000000','ev:onblur':'scwin.regClntNo_onblur'}},{T:1,N:'xf:trigger',A:{style:'',id:'img_clntNo',type:'button',class:'btn ico sch','ev:onclick':'scwin.udc_clnt_search_onclickEvent'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'거래처명',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ipx_clntNm',placeholder:'',style:'width:150px;',ref:'data:ds_logisticsCustomer.clntNm',mandatory:'true',title:'거래처명'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사업자번호',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'crn_group',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ipx_crn',placeholder:'',style:'width: 150px;',ref:'data:ds_logisticsCustomer.crn'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'crn_search',style:'',type:'button','ev:onclick':'scwin.crn_searchPopup_click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'crn_regist',style:'',type:'button','ev:onclick':'scwin.f_registCrn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업자구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'clntBusiClsCd',style:'width:150px;',submenuSize:'auto',ref:'data:ds_logisticsCustomer.clntBusiClsCd','ev:onchange':'scwin.clntBusiClsCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'법인사업자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'개인사업자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'주민등록신고자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'재외국인사업자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업태',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'bizcondNm',placeholder:'',style:'width:200px;',ref:'data:ds_logisticsCustomer.bizcondNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업종',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'biztypeNm',placeholder:'',style:'width:200px;',ref:'data:ds_logisticsCustomer.biztypeNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'영수거래처 여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'receiveSellingYn',ref:'data:ds_logisticsCustomer.receiveSellingYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0','ev:onviewchange':'scwin.f_clickReceiveSelling'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:input',A:{class:'',id:'input1',placeholder:'',style:'width:150px;display: none;',ref:'data:ds_logisticsCustomer.receiveSellingYn'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전자결재 제외 여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',id:'chb_elecApprvChkYn_group'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_elecApprvChkYn',ref:'data:ds_logisticsCustomer.elecApprvChkYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'repstNm',placeholder:'',style:'width:100px;',ref:'data:ds_logisticsCustomer.repstNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처부서',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'clntDeptNm',placeholder:'',style:'width:150px;',mandatory:'',ref:'data:ds_logisticsCustomer.clntDeptNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처직원직위',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'clntPersPstNm',placeholder:'',style:'width:150px;',ref:'data:ds_logisticsCustomer.clntPersPstNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처직원명',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'clntPersNm',placeholder:'',style:'width:150px;',mandatory:'true',ref:'data:ds_logisticsCustomer.clntPersNm',title:'거래처직원명'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유선전화번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'clntTelNo',placeholder:'',class:'',ref:'data:ds_logisticsCustomer.clntTelNo'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'(\'-\' 포함)',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'E-mail',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'clntEmail',placeholder:'',style:'width:200px;',ref:'data:ds_logisticsCustomer.clntEmail'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'휴대전화번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'clntMpNo',placeholder:'',class:'',ref:'data:ds_logisticsCustomer.clntMpNo'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'(\'-\' 포함)',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'FAX번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'clntFaxNo',placeholder:'',class:'',ref:'data:ds_logisticsCustomer.clntFaxNo'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'(\'-\' 포함)',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업장주소',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'busiAddr',placeholder:'',style:'',ref:'data:ds_logisticsCustomer.busiAddr'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구처주소',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0',id:'address_form'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'address_group',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',hideName:'Y',id:'udc_zip',codeId:'zip_search',nameId:'addr1',mandatoryCode:'true',mandatoryName:'true','ev:onclickEvent':'scwin.f_openZipPopUp',refDataCollection:'ds_logisticsCustomer',code:'zip',name:'addr1',validTitle:'주소'}},{T:1,N:'xf:input',A:{style:'width:300px;',id:'addr2',placeholder:'',class:'',ref:'data:ds_logisticsCustomer.addr2',mandatory:'true',title:'상세주소'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처분류',style:'',tagname:'h4'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'chkRegistInfo2',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출입구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select',A:{ref:'data:ds_logisticsCustomer.sellClntYn',appearance:'full',style:'',id:'sellClntYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'','ev:onchange':'scwin.f_checkPurchaseClntType',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'data:ds_logisticsCustomer.pchsClntYn',appearance:'full',style:'',id:'pchsClntYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'','ev:onchange':'scwin.f_checkPurchaseClntType',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계열구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'intrlnsClsCd',style:'width:150px;',submenuSize:'auto',ref:'data:ds_logisticsCustomer.intrlnsClsCd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'타법인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계열사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'금융권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sellClntClsCd',style:'width:150px;',submenuSize:'auto',ref:'data:ds_logisticsCustomer.sellClntClsCd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화주'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'포워더'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'3자물류그룹',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'tplGrpCd',style:'width:150px;',submenuSize:'auto',ref:'data:ds_logisticsCustomer.tplGrpCd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'동부한농화학'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DH'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'동부제강'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DJ'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'동부한농화학'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'HN'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'라파즈'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'LA'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신대양제지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'SH'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업부문',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'bizDivCntrYn',ref:'data:ds_logisticsCustomer.bizDivCntrYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'bizDivBulkYn',ref:'data:ds_logisticsCustomer.bizDivBulkYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송사업구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'transBizYn',ref:'data:ds_logisticsCustomer.transBizYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송사업'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'transIntcdBizYn',ref:'data:ds_logisticsCustomer.transIntcdBizYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송주선업'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업영역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'bizDomTransYn',ref:'data:ds_logisticsCustomer.bizDomTransYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'bizDomStvYn',ref:'data:ds_logisticsCustomer.bizDomStvYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하역'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'bizDomStrYn',ref:'data:ds_logisticsCustomer.bizDomStrYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보관'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'bizDomTplYn',ref:'data:ds_logisticsCustomer.bizDomTplYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3자물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'bizDomInatYn',ref:'data:ds_logisticsCustomer.bizDomInatYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'bizDomEtcYn',ref:'data:ds_logisticsCustomer.bizDomEtcYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상위거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width: 250px;',codeId:'upperClntNo',nameId:'upperClntNm',id:'upperClnt_search','ev:onclickEvent':'scwin.f_UpperClntPopUpOnClick',refDataCollection:'ds_logisticsCustomer',code:'upperClntNo',name:'upperClntNm',selectID:'retrieveClntList'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width: 250px;',codeId:'bilgClntNo',nameId:'bilgClntNm',id:'bilgClntNo_search','ev:onclickEvent':'scwin.bilgClntPopUpClick',refDataCollection:'ds_logisticsCustomer',code:'bilgClntNo',name:'bilgClntNm',selectID:'retrieveClntList'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최초거래일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'firstTxnDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_logisticsCustomer.firstTxnDt',mandatory:'false'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체평가여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'copCoEstmtYn',ref:'data:ds_logisticsCustomer.copCoEstmtYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인천회계거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'inchnClntNo',placeholder:'',style:'width:150px;',ref:'data:ds_logisticsCustomer.inchnClntNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'국제물류파트너',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'inatPartnerYn',ref:'data:ds_logisticsCustomer.inatPartnerYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입계산서역발행',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'elecAuthTrgtYn',ref:'data:ds_logisticsCustomer.elecAuthTrgtYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'적용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미적용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'담당정보',style:'',tagname:'h4'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자부서/직위',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'deptNm',placeholder:'',style:'width:150px;',ref:'data:ds_logisticsCustomer.deptNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width: 250px;',codeId:'mcomPicEmpNo',nameId:'empNm',id:'emp_search','ev:onclickEvent':'scwin.empPopup_onClick',refDataCollection:'ds_logisticsCustomer',code:'mcomPicEmpNo',name:'empNm',selectID:'retrieveEmpNoDeptInfo'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'수금조건',style:'',tagname:'h4'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'chkCollMoneyCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:80.00px;'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'adptDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_logisticsCustomer.adptDt',mandatory:'true',title:'적용일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화폐',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'collMoneyCrcCd',style:'width:150px;',submenuSize:'auto',ref:'data:ds_logisticsCustomer.collMoneyCrcCd',mandatory:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원화 KRW'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'KRW'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미국 USD'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'USD'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일본 JPY 100'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'JPY'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유로통화 EUR'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'EUR'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대만 TWD'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'TWD'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중국 CNY'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CNY'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'홍콩 HKD'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'HKD'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'싱가포르 SGD'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'SGD'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영국 GBP'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'GBP'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'스위스 CHF'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CHF'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'말레이지아 MYR'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'MYR'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아랍에미리 AED'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'AED'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'폴란드 PLN'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'PLN'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'바레인 BHD'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'BHD'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'캐나다 CAD'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CAD'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인도 INR'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'INR'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'스웨덴 SEK'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'SEK'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'뉴질랜드 NZD'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'NZD'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'호주 AUD'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'AUD'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'덴마크 DKK'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DKK'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사우디 SAR'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'SAR'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'노르웨이 NOK'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'NOK'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'네덜란드 NLG'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'NLG'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'태국 THB'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'THB'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'방글라데시 BDT'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'BDT'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'브루나이 BND'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'BND'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'칠레 CLP'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CLP'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'몽골 MNT'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'MNT'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'카자흐스탄 KZT'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'KZT'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'쿠웨이트 KWD'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'KWD'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'요르단 JOD'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'JOD'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이스라엘 ILS'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ILS'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인도네시아 IDR'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'IDR'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'헝가리 HUF'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'HUF'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'체코 CZK'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CZK'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'러시아 RUB'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'RUB'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파키스탄 PKR'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'PKR'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'필리핀 PHP'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'PHP'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오만 OMR'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'OMR'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'멕시코 MXN'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'MXN'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'남아공화국 ZAR'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ZAR'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'베트남 VND'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'VND'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'터키 TRY'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'TRY'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'브라질 BRL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'BRL'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결제조건',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'stmtPrdClsCd',style:'width:150px;',submenuSize:'auto',ref:'data:ds_logisticsCustomer.stmtPrdClsCd',title:'결제조건',chooseOptionLabel:'선택'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'청구서월말'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'현금선수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'청구서발행후'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결제방식',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'collMoneyCntShtCd',style:'width:150px;',submenuSize:'auto',ref:'data:ds_logisticsCustomer.collMoneyCntShtCd',chooseOptionLabel:'선택'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'현금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'어음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'20'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결제기한',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'stmtPrdDd',placeholder:'',style:'width:150px;',ref:'data:ds_logisticsCustomer.stmtPrdDd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급기한',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'draftDdCnt',placeholder:'',style:'width:150px;',ref:'data:ds_logisticsCustomer.draftDdCnt'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'여신 및 담보현황',style:'',tagname:'h4'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'chkRegistInfo3',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예상매출액(연간)',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'여신금액(월)',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담보종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담보가액',style:''}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:input',A:{class:'',id:'exSellAmt',placeholder:'',style:';text-align:right;',ref:'data:ds_logisticsCustomer.exSellAmt',dataType:'number',displayFormat:'#,###',maxlength:'13',allowChar:'0-9-',adjustMaxLength:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'crdLimitAmt',placeholder:'',style:';text-align:right;',ref:'data:ds_logisticsCustomer.crdLimitAmt',dataType:'number',displayFormat:'#,###',maxlength:'13',allowChar:'0-9-',adjustMaxLength:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'pldgPattern',placeholder:'',style:'',ref:'data:ds_logisticsCustomer.pldgPattern'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'pldgAmt',placeholder:'',style:';text-align:right;',ref:'data:ds_logisticsCustomer.pldgAmt',dataType:'number',displayFormat:'#,###',maxlength:'13',allowChar:'0-9-',adjustMaxLength:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h4',style:'',id:'',label:'신용정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'chkRegistInfo4',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'신용등급',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th tac'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당기손익',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'부채비율',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:input',A:{class:'',id:'creditRating',placeholder:'',style:'',ref:'data:ds_logisticsCustomer.creditRating'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'thiisPrflos',placeholder:'',style:';text-align:right;',ref:'data:ds_logisticsCustomer.thiisPrflos',dataType:'number',maxlength:'13',allowChar:'0-9-',adjustMaxLength:'true',displayFormat:'#,###'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:';text-align:right;',id:'debtRatio',placeholder:'',class:'',ref:'data:ds_logisticsCustomer.debtRatio',dataType:'number',displayFormat:'#,###.####',maxlength:'11',adjustMaxLength:'true',allowChar:'0-9-.',displayFormatter:'scwin.fn_amountFormatter','ev:onkeyup':'scwin.debtRatio_onkeyup'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'%',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'summary',placeholder:'',style:'',ref:'data:ds_logisticsCustomer.summary'}}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'txt-dot',escape:'false',id:'',label:'결제상신시 주관부서 담당자(박주령,조정욱)는 반드시 포함하셔야 합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'b_Aprv',type:'button',class:'btn link','ev:onclick':'scwin.f_aprv'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'결제요청'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_Create',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Create'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Update',label:'저장',style:'',type:'button',disabled:'true','ev:onclick':'scwin.f_Update'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_Cancel',label:'저장',style:'',type:'button',disabled:'true','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_Save',label:'저장',style:'',type:'button',disabled:'true','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_Delete',label:'저장',style:'',type:'button',disabled:'true','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'display: none;'},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_clntNoValChk',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:input',A:{class:'',id:'txt_clntNo',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:input',A:{class:'',id:'txt_clntLupCond',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:input',A:{class:'',id:'txt_createYn',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:input',A:{class:'',id:'txt_updateYn',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:input',A:{class:'',id:'txt_rowCount',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:input',A:{class:'',id:'txt_saveType',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:input',A:{class:'',id:'txt_manager',placeholder:'',style:'width:150px;'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCrnInfo',codeId:'crn',validTitle:'',nameId:'clntNm',style:'width:%; height:px; ',id:'udc_crn_search_Hidden','ev:onclickEvent':'scwin.udc_crn_search_Hidden_onclickEvent'}},{T:1,N:'w2:udc_comCode',A:{selectID:'retrieveBuyClntList',codeId:'',popupID:'',validTitle:'',nameId:'',style:'width:%; height:px; ',id:'udc_clnt_search','ev:onclickEvent':'scwin.udc_clnt_search_onclickEvent'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntCrnInfo',codeId:'crn',validTitle:'',nameId:'',style:'width:%; height:px; ',id:'udc_crn_search2'}}]}]}]}]}]}]})