/*amd /ui/ac/fm/paymgnt/advcdmgnt/fm_303_01_03_n02b.xml 110839 168bd018d674699993c27be6fa9fa0b5552d4bdf6c307948559f1e2aef428135 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'mgntDtClsCd',name:'일자구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntStDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntSlipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntEmpClsCd',name:'사용자구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntEmpNo',name:'사용자사원번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntEmpNm',name:'사용자명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntClntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAdvcdPrgStsCd',name:'결재상태',dataType:'text',defaultValue:'99'}},{T:1,N:'w2:key',A:{id:'mgntApprvGrpDt',name:'승인자그룹번호날짜',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntApprvGrpNum',name:'승인자그룹번호차수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_List1',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_List1_oncelldatachange','ev:onbeforerowpositionchange':'scwin.ds_List1_onbeforerowpositionchange','ev:ondataload':'scwin.ds_List1_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'number'}},{T:1,N:'w2:column',A:{id:'advcdPrgStsCd',name:'상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'작성귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'전표작성자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqId',name:'신청자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqNm',name:'신청자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL Number',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'입금은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'입금은행',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'입금계좌',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqAmt',name:'전도금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitAmt',name:'승인금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsNm',name:'결재상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNo',name:'결재자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNm',name:'결재자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commFeeAmt',name:'수수료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdPayDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitId',name:'승인자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitNm',name:'승인자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdGrpCd',name:'요청자그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvGrpCd',name:'승인자그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdPrgStsNm',name:'상태명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnId',name:'반려자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnNm',name:'반려자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitCancelId',name:'승인취소사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitCancelNm',name:'승인취소자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'excelGrpYn',name:'일괄이체여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo1',name:'전표번호1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo2',name:'전표번호2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo3',name:'전표번호3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo4',name:'전표번호4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo5',name:'전표번호5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo6',name:'전표번호6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo7',name:'전표번호7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo8',name:'전표번호8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo9',name:'전표번호9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo10',name:'전표번호10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_copy',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'number'}},{T:1,N:'w2:column',A:{id:'advcdPrgStsCd',name:'상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'작성귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'전표작성자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqId',name:'신청자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqNm',name:'신청자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL Number',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'입금은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'입금은행',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'입금계좌',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqAmt',name:'전도금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitAmt',name:'승인금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsNm',name:'결재상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNo',name:'결재자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNm',name:'결재자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commFeeAmt',name:'수수료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdPayDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitId',name:'승인자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitNm',name:'승인자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdGrpCd',name:'요청자그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvGrpCd',name:'승인자그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdPrgStsNm',name:'상태명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnId',name:'반려자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnNm',name:'반려자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitCancelId',name:'승인취소사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitCancelNm',name:'승인취소자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'excelGrpYn',name:'일괄이체여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo1',name:'전표번호1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo2',name:'전표번호2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo3',name:'전표번호3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo4',name:'전표번호4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo5',name:'전표번호5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo6',name:'전표번호6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo7',name:'전표번호7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo8',name:'전표번호8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo9',name:'전표번호9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo10',name:'전표번호10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_auth'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_advcdPrgStsCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_advcdPrgStsCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_advcdPrgStsCdForGrid'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mgntAdvcdPrgStsCd','ev:ondataload':'scwin.ds_mgntAdvcdPrgStsCd_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_List2','ev:ondataload':'scwin.ds_List2_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'number'}},{T:1,N:'w2:column',A:{id:'advcdPrgStsCd',name:'상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'작성귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'전표작성자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqId',name:'신청자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqNm',name:'신청자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL Number',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'입금은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'입금은행',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'입금계좌',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqAmt',name:'전도금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitAmt',name:'승인금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsNm',name:'결재상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNo',name:'결재자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNm',name:'결재자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commFeeAmt',name:'수수료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdPayDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitId',name:'승인자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitNm',name:'승인자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdGrpCd',name:'요청자그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvGrpCd',name:'승인자그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'excelGrpYn',name:'일괄이체여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo1',name:'전표번호1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo2',name:'전표번호2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo3',name:'전표번호3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo4',name:'전표번호4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo5',name:'전표번호5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo6',name:'전표번호6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo7',name:'전표번호7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo8',name:'전표번호8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo9',name:'전표번호9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo10',name:'전표번호10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_List3',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'number'}},{T:1,N:'w2:column',A:{id:'advcdPrgStsCd',name:'상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'작성귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'전표작성자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqId',name:'신청자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqNm',name:'신청자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL Number',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'입금은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'입금은행',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'입금계좌',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqAmt',name:'전도금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitAmt',name:'승인금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsNm',name:'결재상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNo',name:'결재자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNm',name:'결재자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commFeeAmt',name:'수수료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdPayDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitId',name:'승인자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitNm',name:'승인자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdGrpCd',name:'요청자그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvGrpCd',name:'승인자그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo1',name:'전표번호1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo2',name:'전표번호2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo3',name:'전표번호3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo4',name:'전표번호4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo5',name:'전표번호5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo6',name:'전표번호6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo7',name:'전표번호7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo8',name:'전표번호8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo9',name:'전표번호9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo10',name:'전표번호10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_List4',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'number'}},{T:1,N:'w2:column',A:{id:'advcdPrgStsCd',name:'상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'작성귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'전표작성자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqId',name:'신청자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqNm',name:'신청자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL Number',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'입금은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'입금은행',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'입금계좌',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdReqAmt',name:'전도금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitAmt',name:'승인금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsNm',name:'결재상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNo',name:'결재자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNm',name:'결재자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commFeeAmt',name:'수수료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdPayDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitId',name:'승인자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitNm',name:'승인자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdGrpCd',name:'요청자그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvGrpCd',name:'승인자그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo1',name:'전표번호1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo2',name:'전표번호2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo3',name:'전표번호3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo4',name:'전표번호4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo5',name:'전표번호5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo6',name:'전표번호6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo7',name:'전표번호7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo8',name:'전표번호8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo9',name:'전표번호9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo10',name:'전표번호10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_email'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emailFrom',name:'발신이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'사용자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emailTo',name:'수신이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvGrpDt',name:'승인그룹일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvGrpNum',name:'승인그룹차수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fm.paymgnt.advcdmgnt.RetrieveAdvancedPaymentAdmitListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_List1","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_List1","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_search_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fm.paymgnt.advcdmgnt.SaveApproveAdvancedPaymentCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_List1","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_approve',action:'/ac.fm.paymgnt.advcdmgnt.SaveAdvancedPaymentAdmitListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_List1","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_approve_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_approveCancel',action:'/ac.fm.paymgnt.advcdmgnt.CancelAdvancedPaymentAdmitListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_List1","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_approveCancel_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_return',action:'/ac.fm.paymgnt.advcdmgnt.CancelAdvancedPaymentReturnListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_List1","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_return_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_apprvGrpCreate',action:'/ac.fm.paymgnt.advcdmgnt.CreateApprvGrpCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_List1","key":"IN_DS1"}]',target:'','ev:submitdone':'scwin.sbm_apprvGrpCreate_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_apprvGrpDelete',action:'/ac.fm.paymgnt.advcdmgnt.DeleteApprvGrpCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_List1","key":"IN_DS1"}]',target:'','ev:submitdone':'scwin.sbm_apprvGrpDelete_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_email',action:'/ac.fm.paymgnt.advcdmgnt.SendEmailCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_email","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_email_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_searchExcel',action:'/ac.fm.paymgnt.advcdmgnt.RetrieveAdvancedPaymentAdmitExcelListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_List2","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_List2","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_searchExcel_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_advcdPrgStsCd',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,dma_advcdPrgStsCd','ev:submitdone':''}},{T:1,N:'xf:submission',A:{id:'sbm_advcdPrgStsCdForGrid',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,dma_advcdPrgStsCd','ev:submitdone':''}},{T:1,N:'xf:submission',A:{id:'sbm_auth',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',ref:'data:json,dma_auth',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.chkSave = 0;
scwin.stopFlag = false;
scwin.userNm = $c.data.getMemInfo($p, "userNm");
scwin.userEmail = $c.data.getMemInfo($p, "email");
scwin.g_sUserId = $c.data.getMemInfo($p, "empNo");
scwin.vAuthYn = "N";
scwin.hidden_upperAcctCd = "";
scwin.txt_mgntClntNo = "";
scwin.currentRowIndex = -1;
scwin.onpageload = async function () {
  dma_advcdPrgStsCd.set("sysCd", "CommonEBC");
  dma_advcdPrgStsCd.set("queryId", "retrieveCommonFilterPopup");
  dma_advcdPrgStsCd.set("param1", "FM118");
  dma_advcdPrgStsCd.set("param2", "1");
  await scwin.executeSubmission(sbm_advcdPrgStsCd);
};
scwin.onUdcCompleted = async function () {
  scwin.f_FieldClear();
  dma_advcdPrgStsCd.set("sysCd", "CommonEBC");
  dma_advcdPrgStsCd.set("queryId", "retrieveCommonFilterPopup");
  dma_advcdPrgStsCd.set("param1", "FM118");
  dma_advcdPrgStsCd.set("param2", null);
  await scwin.executeSubmission(sbm_advcdPrgStsCdForGrid);
  $c.gus.cfInitObjects($p, tbl_inputData);
  $c.gus.cfDisableObjects($p, [tbl_inputData, btn_Save]);

  // 귀속부서 무조건 해외사업(01185)로 자동설정
  ed_mgntAcctDeptCd.setValue("01185");
  scwin.f_checkPopEd(ed_mgntAcctDeptCd, txt_mgntAcctDeptNm, '1');
  ed_advcdReqAmt.setValue("0"); // 전도금
  ed_commFeeAmt.setValue("0"); // 수수료

  //메일주소 기본값 설정
  txt_email.setValue("kuyoo @dongwon.com, yunho @dongwon.com, ismilei @dongwon.com,  yelin @dongwon.com, minon38 @dongwon.com, yje920 @dongwon.com");
  scwin.f_retrieveAuth();

  //테스트데이터
  //ed_mgntStDt.setValue("20200131");
  //ed_mgntEndDt.setValue("20200131");
};
scwin.executeSubmission = async function (sbmObj) {
  let rtn = await $c.sbm.execute($p, sbmObj);
  let jsonRtn = rtn.responseJSON;
  let success = jsonRtn.resultDataSet[0].Code == "0";
  switch (sbmObj.org_id) {
    case "sbm_auth":
      let authData = jsonRtn.GAUCE;
      scwin.vAuthYn = authData == null || authData.length == 0 ? "N " : "Y";
      break;
    case "sbm_advcdPrgStsCd":
      if (success) {
        ds_advcdPrgStsCd.setJSON(jsonRtn.GAUCE);
        let newRowIndex = ds_advcdPrgStsCd.getRowCount();
        ds_advcdPrgStsCd.insertRow(newRowIndex);
        ds_advcdPrgStsCd.setCellData(newRowIndex, "col1", "99");
        ds_advcdPrgStsCd.setCellData(newRowIndex, "col2", "승인대기");
        $c.gus.cfCopyDataSet($p, ds_advcdPrgStsCd, ds_mgntAdvcdPrgStsCd, "");
      }
      break;
    case "sbm_advcdPrgStsCdForGrid":
      if (success) {
        ds_advcdPrgStsCdForGrid.setJSON(jsonRtn.GAUCE);
      }
      break;
  }
};

//-------------------------------------------------------------------------
// function name : f_FieldClear
// function desc : 조회 필드 Clear
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_FieldClear = async function () {
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// function name : f_SetSrchDefault
// function desc : 조회 기본값 설정
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = async function () {
  let curDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  lc_mgntDtClsCd.setValue("1"); // 일자구분
  ed_mgntStDt.setValue(curDate.substring(0, 6) + "01"); // 시작일자
  ed_mgntEndDt.setValue(curDate); // 종료일자
  lc_mgntEmpClsCd.setValue("1"); // 사용자구분
  ed_apprvGrpDt.setValue(curDate); // 승인자 그룹번호 생성 날짜
};

//-------------------------------------------------------------------------
// function name : f_SearchPopUp
// function desc : 조회 팝업
// function Parameter : flag : 케이스, check : 창여부 
//-------------------------------------------------------------------------
scwin.f_SearchPopUp = async function (flag, check) {
  let rtnList = [];
  switch (flag) {
    case '1':
      let param_yy = ed_mgntStDt.getValue().trim();
      udc_mgntAcctDept.setSelectId("retrieveAcctDeptCdInfo9");
      udc_mgntAcctDept.cfCommonPopUp(scwin.udc_mgntAcctDeptCallback, ed_mgntAcctDeptCd.getValue().trim(), txt_mgntAcctDeptNm.getValue(), check, null, null, null, null, param_yy, ",,,,,,1", "450", "500", null, null);
      break;
    case '2':
      let param2 = '';
      udc_mgntEmp.setSelectId("retrieveAcEmpInfo");
      udc_mgntEmp.cfCommonPopUp(scwin.udc_mgntEmpCallback, ed_mgntEmpNo.getValue().trim(), txt_mgntEmpNm.getValue(), check, null, null, null, null, param2, null, null, null, null, null, 'F');
      break;
    case '3':
      udc_mgntClnt.setSelectId("retrieveClntList");
      udc_mgntClnt.cfCommonPopUp(scwin.udc_mgntClntCallback, ed_mgntClntNo.getValue().trim(), txt_mgntClntNm.getValue(), check, null, null, null, null, null, null, null, null, null);
      break;
    case '4':
      udc_bank.setSelectId("retrieveBankCdInfo");
      udc_bank.cfCommonPopUp(scwin.udc_mgntBankCallback, ed_bankCd.getValue().trim(), txt_bankNm.getValue(), check, null, null, null, null, null, null, null, null, null);
      break;
  }
};
scwin.udc_mgntAcctDeptCallback = function (rtnList) {
  scwin.f_resultPopEd(ed_mgntAcctDeptCd, txt_mgntAcctDeptNm, rtnList);
};
scwin.udc_mgntEmpCallback = function (rtnList) {
  scwin.f_resultPopEd(ed_mgntEmpNo, txt_mgntEmpNm, rtnList);
};
scwin.udc_mgntClntCallback = function (rtnList) {
  scwin.f_resultPopEd(ed_mgntClntNo, txt_mgntClntNm, rtnList);
};
scwin.udc_mgntBankCallback = function (rtnList) {
  scwin.f_resultPopEd(ed_bankCd, txt_bankNm, rtnList);
};

//-------------------------------------------------------------------------
// function name : f_checkPopEd
// function desc : 팝업체크
// function Parameter : strCd : 코드, strNm : 코드명, flag : 플래그
//-------------------------------------------------------------------------
scwin.f_checkPopEd = async function (strCd, strNm, flag) {
  strNm.setValue("");
  if (strCd.getValue().trim() != "") {
    scwin.f_SearchPopUp(flag, 'T');
  }
};

//-------------------------------------------------------------------------
// function name : f_resultPopEd
// function desc : 팝업결과 셋팅
// function Parameter : strCd : 코드, strNm : 코드명, rtnList : 결과 리스트
//-------------------------------------------------------------------------
scwin.f_resultPopEd = async function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명
  } else {
    strCd.setValue("");
    strNm.setValue("");
  }
};

//권한체크
scwin.f_retrieveAuth = async function () {
  dma_auth.set("sysCd", "CommonEBC");
  dma_auth.set("queryId", "retrieveBorrowAcqKindInfo");
  dma_auth.set("param1", "IL113");
  dma_auth.set("param2", scwin.g_sUserId);
  await scwin.executeSubmission(sbm_auth);
};

/**
 * YYYYMMDD 포맷 문자열을 MM.DD 로 변환하는 함수
 * @param {string} yyyymmdd - 8자리 날짜 문자열 (예: "20250905")
 * @returns {string} 변환된 날짜 문자열 (예: "09.05")
 */
scwin.formatToMMDD = function (yyyymmdd) {
  if (!yyyymmdd || yyyymmdd.length !== 8) return '';
  let mm = yyyymmdd.substring(4, 6);
  let dd = yyyymmdd.substring(6, 8);
  return mm + '.' + dd;
};

//-------------------------------------------------------------------------
// function name : f_downExcelSheet
// function desc : 엑셀다운
// function Parameter : objGrd : 그리드
//-------------------------------------------------------------------------
scwin.f_downExcelSheet = async function (objGrd) {
  let objDs = null;
  let title = "";
  let objGrdId = objGrd.getOriginalID();
  if (objGrdId == "gr_List1") {
    objDs = ds_List1;
  } else if (objGrdId == "gr_List2") {
    objDs = ds_List2;
  } else if (objGrdId == "gr_List4") {
    objDs = ds_List4;
  }
  if (objDs.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
    return;
  }
  if (objGrdId == "gr_List1") {
    $c.data.downloadGridViewExcel($p, gr_List1, {
      "fileName": "전도금승인내역.xlsx",
      "sheetName": "전도금승인내역"
    });
  } else if (objGrdId == "gr_List2") {
    title = (scwin.formatToMMDD(ed_apprvGrpDt.getValue()) + " 전도금 리스트 " + ed_apprvGrpNum.getValue()).trim();
    $c.data.downloadGridViewExcel($p, gr_List2, {
      "fileName": title + ".xlsx",
      "sheetName": title
    });
  } else {
    if (scwin.vAuthYn == "Y") {
      title = "이체표" + ed_apprvGrpNum.getValue();
      $c.data.downloadGridViewExcel($p, gr_List4, {
        "fileName": title + ".xlsx",
        "sheetName": title,
        "useHeader": false,
        "removeHeaderRows": "0"
      });
    } else {
      await $c.win.alert($p, "다운로드 권한이 없습니다.");
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  dma_search.set("mgntAdvcdPrgStsCd", lc_mgntAdvcdPrgStsCd.getValue());
  if (!(await scwin.f_Validation("Search"))) {
    return;
  }
  await $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// function name : f_Update
// function desc : 전도금 수정
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Update = async function () {
  if (!(await scwin.f_AuthYnCheck("수정"))) {
    return;
  }
  let nRow = -1;
  for (let i = 0; i < ds_List1.getRowCount(); i++) {
    if (ds_List1.getCellData(i, "chk") == "1") {
      nRow = i;
      break;
    }
  }
  if (ds_List1.getRowCount() > 0) {
    let curRow = ds_List1.getRowPosition();
    // 상태가 요청(02), 승인(04)이면 수정 불가능
    if (ds_List1.getCellData(curRow, "advcdPrgStsCd") != "02" && ds_List1.getCellData(curRow, "advcdPrgStsCd") != "06") {
      await $c.win.alert($p, "요청/승인취소 상태에서만 수정이 가능합니다.");
      return;
    }
  }
  if (nRow >= 0) {
    let chk = await $c.win.confirm($p, "건별 수정 가능하므로 선택한 건이 모두 취소됩니다.\n계속 진행하시겠습니까?");
    if (chk) {
      for (let i = 0; i < ds_List1.getRowCount(); i++) {
        ds_List1.setCellData(i, "chk", "0");
      }
    } else {
      return;
    }
  }
  $c.gus.cfEnableObjects($p, [ed_bankCd, txt_bankNm, txt_bankAcntNo, img_bankCd, ed_advcdReqAmt, ed_commFeeAmt, ed_advcdPayDt, txt_summary]);
  $c.gus.cfDisableBtn($p, [btn_Update]);
  $c.gus.cfEnableObjects($p, [btn_Save]);

  //focus 설정
  ed_bankCd.focus();
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 전도금 저장
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (!(await scwin.f_AuthYnCheck("저장"))) {
    return;
  }
  if (!(await scwin.f_Validation("Save"))) {
    return;
  }
  let chk = await $c.win.confirm($p, "선택한 전도금을 저장하시겠습니까?");
  if (chk) {
    scwin.chkSave = 1;
    await $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// function name : f_Approve
// function desc : 전도금 승인 
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Approve = async function () {
  if (!(await scwin.f_AuthYnCheck("승인"))) {
    return;
  }
  if (!(await scwin.f_Validation("approve"))) {
    return;
  }
  await $c.sbm.execute($p, sbm_approve);
};

//-------------------------------------------------------------------------
// function name : f_Cancel
// function desc : 전도금 승인취소 
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_ApproveCancel = async function () {
  if (!(await scwin.f_AuthYnCheck("승인취소"))) {
    return;
  }
  if (!(await scwin.f_Validation("approveCancel"))) {
    return;
  }
  let chk = await $c.win.confirm($p, "선택한 전도금내역을 승인취소 처리하시겠습니까?");
  if (chk) {
    await $c.sbm.execute($p, sbm_approveCancel);
  }
};

//-------------------------------------------------------------------------
// function name : f_Return
// function desc : 전도금 반려
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Return = async function () {
  if (!(await scwin.f_AuthYnCheck("반려"))) {
    return;
  }
  if (!(await scwin.f_Validation("Return"))) {
    return;
  }
  let chk = await $c.win.confirm($p, "선택한 전도금내역을 반려 처리하시겠습니까?");
  if (chk) {
    await $c.sbm.execute($p, sbm_return);
  }
};

//-------------------------------------------------------------------------
// function name : f_Validation
// function desc : 조회 조건 검증
// function Parameter : sType : 검증 타입
//-------------------------------------------------------------------------
scwin.f_Validation = async function (sType) {
  let nRow = -1;
  for (let i = 0; i < ds_List1.getRowCount(); i++) {
    if (ds_List1.getCellData(i, "chk") == "1") {
      nRow = i;
      break;
    }
  }
  if (sType == "Search") {
    let chk1 = await $c.gus.cfValidate($p, [ed_mgntStDt]);
    if (!chk1) {
      return false;
    }
    let chk2 = await $c.gus.cfValidate($p, [ed_mgntEndDt]);
    if (!chk2) {
      return false;
    }
    let chk3 = await $c.gus.cfValidate($p, [ed_mgntAcctDeptCd]);
    if (!chk3) {
      return false;
    }
  } else if (sType == "Save") {
    if (ds_List1.getUpdatedIndex().length == 0) {
      await $c.win.alert($p, MSG_CM_ERR_001, ["데이타"]);
      return false;
    }
    let curRow = ds_List1.getRowPosition();
    if ($c.gus.cfIsNull($p, ds_List1.getCellData(curRow, "bankCd"))) {
      await $c.win.alert($p, "입금은행을(를) 입력하십시요");
      gr_List1.setFocusedCell(curRow, "bankCd");
      ed_bankCd.focus();
      return false;
    }
    if ($c.gus.cfIsNull($p, ds_List1.getCellData(curRow, "bankAcntNo"))) {
      await $c.win.alert($p, "계좌번호을(를) 입력하십시요");
      gr_List1.setFocusedCell(curRow, "bankAcntNo");
      txt_bankAcntNo.focus();
      return false;
    }
    if ($c.gus.cfIsNull($p, ds_List1.getCellData(curRow, "advcdReqAmt"))) {
      await $c.win.alert($p, "전도금을(를) 입력하십시요");
      gr_List1.setFocusedCell(curRow, "advcdReqAmt");
      ed_advcdReqAmt.focus();
      return false;
    }
    if ($c.gus.cfIsNull($p, ds_List1.getCellData(curRow, "advcdPayDt"))) {
      await $c.win.alert($p, "지급일자을(를) 입력하십시요");
      gr_List1.setFocusedCell(curRow, "advcdPayDt");
      ed_advcdPayDt.focus();
      return false;
    }
  } else if (sType == "approve") {
    if (nRow < 0) {
      await $c.win.alert($p, "선택한 행이 존재하지 않습니다.");
      return false;
    }
    if (ds_List1.getUpdatedIndex().length == 0) {
      await $c.win.alert($p, MSG_CM_ERR_001, ["데이타"]);
      return false;
    }
    for (let i = 0; i < ds_List1.getRowCount(); i++) {
      if (ds_List1.getCellData(i, "chk") == "1") {
        if (ds_List1.getCellData(i, "apprvStsCd") != "05") {
          await $c.win.alert($p, "'승인대기' 상태의 요청만 승인 가능합니다.");
          ds_List1.setRowPosition(i);
          return false;
        }
        if ($c.gus.cfIsNull($p, ds_List1.getCellData(i, "bankCd"))) {
          await $c.win.alert($p, "입금은행을(를) 입력하십시요");
          ds_List1.setRowPosition(i);
          gr_List1.setFocusedCell(i, "bankCd");
          return false;
        }
        if ($c.gus.cfIsNull($p, ds_List1.getCellData(i, "bankAcntNo"))) {
          await $c.win.alert($p, "계좌번호을(를) 입력하십시요");
          ds_List1.setRowPosition(i);
          gr_List1.setFocusedCell(i, "bankAcntNo");
          return false;
        }
        if ($c.gus.cfIsNull($p, ds_List1.getCellData(i, "admitAmt"))) {
          await $c.win.alert($p, "전도금을(를) 입력하십시요");
          ds_List1.setRowPosition(i);
          gr_List1.setFocusedCell(i, "admitAmt");
          return false;
        }
        if ($c.gus.cfIsNull($p, ds_List1.getCellData(i, "advcdPayDt"))) {
          await $c.win.alert($p, "지급일자을(를) 입력하십시요");
          ds_List1.setRowPosition(i);
          gr_List1.setFocusedCell(i, "advcdPayDt");
          return false;
        }
      }
    }
  } else if (sType == "approveCancel") {
    if (nRow < 0) {
      await $c.win.alert($p, "선택한 행이 존재하지 않습니다.");
      return false;
    }
  } else if (sType == "Return") {
    if (nRow < 0) {
      await $c.win.alert($p, "선택한 행이 존재하지 않습니다.");
      return false;
    }
  } else {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// function name : f_setFileUpDownFrame
// function desc : 파일업로드 프레임
// function Parameter : sAdvcdGrpCd : 그룹번호, sAdvcdPrgStsCd : 상태
//-------------------------------------------------------------------------
scwin.f_setFileUpDownFrame = async function (sAdvcdGrpCd, sSeq, sAdvcdPrgStsCd) {
  let data = {
    "advcdGrpCd": sAdvcdGrpCd,
    "seq": sSeq,
    "advcdPrgStsCd": sAdvcdPrgStsCd
  };
  var options = {
    "dataObject": {
      "type": "json",
      "name": "wframeParam",
      "data": data
    }
  };
  let url = "/ui/ac/fm/paymgnt/advcdmgnt/fm_303_01_03p.xml";
  await wfm_wframe1.setSrc(url, options);
};
scwin.f_AuthYnCheck = async function (btnNm) {
  //return true;
  if (scwin.vAuthYn != "Y") {
    await $c.win.alert($p, btnNm + " 권한이 없습니다.");
    return false;
  } else {
    return true;
  }
};

// 승인자 그룹번호 생성
scwin.f_GrpCreate = async function () {
  if (!(await scwin.f_AuthYnCheck("그룹생성"))) {
    return;
  }
  if (ds_List1.getRowCount() == 0) {
    return;
  }
  let flag = false;
  for (let i = 0; i < ds_List1.getRowCount(); i++) {
    if (ds_List1.getCellData(i, "chk") == "1") {
      if (!$c.gus.cfIsNull($p, ds_List1.getCellData(i, "apprvGrpCd"))) {
        await $c.win.alert($p, "이미 승인자 그룹번호가 존재합니다.");
        return;
      }
      flag = true;
      break;
    }
  }
  if (!flag) {
    await $c.win.alert($p, "선택된 열이 없습니다.");
    return;
  }
  await $c.sbm.execute($p, sbm_apprvGrpCreate);
};

// 승인자 그룹번호 삭제
scwin.f_GrpDelete = async function () {
  if (!(await scwin.f_AuthYnCheck("그룹삭제"))) {
    return;
  }
  if (ds_List1.getRowCount() == 0) {
    return;
  }
  let flag = false;
  for (let i = 0; i < ds_List1.getRowCount(); i++) {
    if (ds_List1.getCellData(i, "chk") == "1") {
      if ($c.gus.cfIsNull($p, ds_List1.getCellData(i, "apprvGrpCd"))) {
        await $c.win.alert($p, "승인자 그룹번호가 존재하지 않습니다.");
        return;
      }
      flag = true;
      break;
    }
  }
  if (!flag) {
    await $c.win.alert($p, "선택된 열이 없습니다.");
    return;
  }
  await $c.sbm.execute($p, sbm_apprvGrpDelete);
};

// 체크 선택 or 해제 시 합계 계산
scwin.f_CalSum = function () {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < ds_List1.getRowCount(); i++) {
    if (ds_List1.getCellData(i, "chk") == "1") {
      sum1 = sum1 + Number(ds_List1.getCellData(i, "advcdReqAmt")); //전도금
      sum2 = sum2 + Number(ds_List1.getCellData(i, "commFeeAmt")); //수수료
    }
  }
  ed_advcdReqSumAmt.setValue(sum1);
  ed_commFeeSumAmt.setValue(sum2);
};

// 내부용DN 메일 보내기
scwin.f_sendEmail = async function () {
  let emailAddr = txt_email.getValue().trim();
  if (!emailAddr) {
    await $c.win.alert($p, "이메일 주소를 입력해주세요.");
    return;
  }
  if (ed_apprvGrpNum.getValue() == "") {
    await $c.win.alert($p, "그룹생성날짜 차수를 먼저 선택해주세요");
    return;
  }
  ds_email.removeAll();
  ds_email.insertRow(0);
  let opts = {
    id: "fm_303_01_03_n02p",
    popupName: "첨부파일등록",
    modal: true,
    type: "browserPopup",
    width: 900,
    height: 440,
    title: "첨부파일등록"
  };
  let argPath = "/ui/ac/fm/paymgnt/advcdmgnt/fm_303_01_03_n02p.xml";
  let resultList = await $c.win.openPopup($p, argPath, opts);
  if (resultList != null) {
    if (resultList[1] != "" && resultList[1] != "undefined") {
      ds_email.setCellData(0, "filePath", "/wasnfs/fileupload/" + resultList[1]);
      ds_email.setCellData(0, "emailTo", txt_email.getValue().trim());
      ds_email.setCellData(0, "userNm", scwin.userNm);
      ds_email.setCellData(0, "emailFrom", scwin.userEmail);
      ds_email.setCellData(0, "apprvGrpDt", ed_apprvGrpDt.getValue());
      ds_email.setCellData(0, "apprvGrpNum", ed_apprvGrpNum.getValue());
      await $c.sbm.execute($p, sbm_email);
    }
  }
};
scwin.sbm_search_submitdone = async function (e) {
  let rowCnt = ds_List1.getRowCount();
  ds_List1_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      await $c.win.alert($p, MSG_CM_WRN_002);
    }
  } else {
    $c.gus.cfCopyDataSet($p, ds_List1, ds_copy, "");
    scwin.currentRowIndex = 0;
    ds_List1.getRowPosition(scwin.currentRowIndex);
    gr_List1.setFocusedCell(scwin.currentRowIndex, 1);

    // let advcdGrpCd = ds_List1.getCellData(ds_List1.getRowPosition(), "advcdGrpCd");
    // let advcdPrgStsCd = ds_List1.getCellData(ds_List1.getRowPosition(), "advcdPrgStsCd");
    // scwin.f_setFileUpDownFrame(advcdGrpCd, 1, advcdPrgStsCd);// 첨부파일
  }
  scwin.chkSave = 0;
  ed_advcdReqSumAmt.setValue("0"); // 전도금
  ed_commFeeSumAmt.setValue("0"); // 수수료
  $c.gus.cfDisableObjects($p, [btn_Save]);

  // 상태: "요청", 결재상태: "최종승인"인 경우, "승인대기" 상태로 변경
  for (let i = 0; i < rowCnt; i++) {
    if (ds_List1.getCellData(i, "advcdPrgStsCd") == "02" && ds_List1.getCellData(i, "apprvStsCd") == "05") {
      ds_List1.setCellData(i, "advcdPrgStsNm", "승인대기");
    }
  }
  if (ds_List1.getRowCount() > 0) {
    await $c.sbm.execute($p, sbm_searchExcel);
  }
};
scwin.sbm_email_submitdone = async function (e) {
  let jsonRtn = e.responseJSON;
  let success = jsonRtn.resultDataSet[0].Code == "0";
  if (success) {
    await $c.win.alert($p, '성공적으로 메일을 전송했습니다.');
  }
};
scwin.sbm_searchExcel_submitdone = function (e) {
  ds_List3.removeAll();
  ds_List4.removeAll();
  if (ds_List1.getRowCount() > 0) {
    for (let i = 0; i < ds_List2.getRowCount(); i++) {
      ds_List3.insertRow(i);
      ds_List4.insertRow(i);
      let mgntClntNm = ds_List2.getCellData(i, "mgntClntNm").substring(0, 20);
      let summary = ds_List2.getCellData(i, "summary").substring(0, 10);
      ds_List3.setCellData(i, "advcdGrpCd", ds_List2.getCellData(i, "advcdGrpCd"));
      ds_List3.setCellData(i, "mgntClntNm", ds_List2.getCellData(i, "mgntClntNm"));
      ds_List3.setCellData(i, "advcdReqAmt", ds_List2.getCellData(i, "advcdReqAmt"));
      ds_List3.setCellData(i, "bankNm", ds_List2.getCellData(i, "bankNm"));
      ds_List3.setCellData(i, "bankAcntNo", ds_List2.getCellData(i, "bankAcntNo"));
      ds_List3.setCellData(i, "admitAmt", ds_List2.getCellData(i, "admitAmt"));
      ds_List3.setCellData(i, "drawEmpNm", ds_List2.getCellData(i, "drawEmpNm"));
      ds_List3.setCellData(i, "slipNo1", ds_List2.getCellData(i, "slipNo1"));
      ds_List3.setCellData(i, "slipNo2", ds_List2.getCellData(i, "slipNo2"));
      ds_List3.setCellData(i, "slipNo3", ds_List2.getCellData(i, "slipNo3"));
      ds_List3.setCellData(i, "slipNo4", ds_List2.getCellData(i, "slipNo4"));
      ds_List3.setCellData(i, "slipNo5", ds_List2.getCellData(i, "slipNo5"));
      ds_List3.setCellData(i, "slipNo6", ds_List2.getCellData(i, "slipNo6"));
      ds_List3.setCellData(i, "slipNo7", ds_List2.getCellData(i, "slipNo7"));
      ds_List3.setCellData(i, "slipNo8", ds_List2.getCellData(i, "slipNo8"));
      ds_List3.setCellData(i, "slipNo9", ds_List2.getCellData(i, "slipNo9"));
      ds_List3.setCellData(i, "slipNo10", ds_List2.getCellData(i, "slipNo10"));
      ds_List4.setCellData(i, "bankNm", ds_List2.getCellData(i, "bankNm"));
      ds_List4.setCellData(i, "bankAcntNo", ds_List2.getCellData(i, "bankAcntNo"));
      ds_List4.setCellData(i, "admitAmt", ds_List2.getCellData(i, "admitAmt"));
      ds_List4.setCellData(i, "mgntClntNm", mgntClntNm);
      ds_List4.setCellData(i, "summary", summary);
    }
  } else {
    ds_List2.removeAll();
    ds_List3.removeAll();
    ds_List4.removeAll();
  }
};
scwin.sbm_save_submitdone = async function (e) {
  let jsonRtn = e.responseJSON;
  let success = jsonRtn.resultDataSet[0].Code == "0";
  if (success) {
    await $c.win.alert($p, MSG_CM_INF_002);
    scwin.f_Retrieve();
  }
};
scwin.sbm_approve_submitdone = async function (e) {
  let jsonRtn = e.responseJSON;
  let success = jsonRtn.resultDataSet[0].Code == "0";
  if (success) {
    await $c.win.alert($p, "성공적으로 승인하였습니다");
    scwin.f_Retrieve();
  }
};
scwin.sbm_approveCancel_submitdone = async function (e) {
  let jsonRtn = e.responseJSON;
  let success = jsonRtn.resultDataSet[0].Code == "0";
  if (success) {
    await $c.win.alert($p, "성공적으로 승인취소하였습니다");
    scwin.f_Retrieve();
  }
};
scwin.sbm_return_submitdone = async function (e) {
  let jsonRtn = e.responseJSON;
  let success = jsonRtn.resultDataSet[0].Code == "0";
  if (success) {
    await $c.win.alert($p, "성공적으로 반려하였습니다");
    scwin.f_Retrieve();
  }
};
scwin.sbm_apprvGrpCreate_submitdone = async function (e) {
  let jsonRtn = e.responseJSON;
  let success = jsonRtn.resultDataSet[0].Code == "0";
  if (success) {
    await $c.win.alert($p, "성공적으로 생성하였습니다");
    scwin.f_Retrieve();
  }
};
scwin.sbm_apprvGrpDelete_submitdone = async function (e) {
  let jsonRtn = e.responseJSON;
  let success = jsonRtn.resultDataSet[0].Code == "0";
  if (success) {
    await $c.win.alert($p, "성공적으로 삭제하였습니다");
    scwin.f_Retrieve();
  }
};
scwin.btn_Srch_onclick = async function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = async function (e) {
  scwin.f_FieldClear();
};
scwin.btn_Update_onclick = async function (e) {
  scwin.f_Update();
};
scwin.btn_Save_onclick = async function (e) {
  scwin.f_Save();
};
scwin.btn_Admit_onclick = async function (e) {
  scwin.f_Approve();
};
scwin.btn_AdmitCancel_onclick = async function (e) {
  scwin.f_ApproveCancel();
};
scwin.btn_Return_onclick = async function (e) {
  scwin.f_Return();
};
scwin.btn_GrpCreate_onclick = async function (e) {
  scwin.f_GrpCreate();
};
scwin.btn_GrpDelete_onclick = async function (e) {
  scwin.f_GrpDelete();
};
scwin.btn_email_onclick = async function (e) {
  scwin.f_sendEmail();
};
scwin.btn_bankExcelDown_onclick = function (e) {
  scwin.f_downExcelSheet(gr_List4);
};
scwin.btn_interExcelDown_onclick = function (e) {
  scwin.f_downExcelSheet(gr_List2);
};

//귀속부서
scwin.udc_mgntAcctDept_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_mgntAcctDeptCd, txt_mgntAcctDeptNm, '1');
};
scwin.udc_mgntAcctDept_onclickEvent = function (e) {
  scwin.f_SearchPopUp('1', 'F');
};
scwin.img_acctDeptCd_onclick = function (e) {
  $c.gus.cfInitObjects($p, [ed_mgntAcctDeptCd, txt_mgntAcctDeptNm]);
};

//계약등록자
scwin.udc_mgntEmp_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_mgntEmpNo, txt_mgntEmpNm, '2');
};
scwin.udc_mgntEmp_onclickEvent = function (e) {
  scwin.f_SearchPopUp('2', 'F');
};
scwin.img_mgntEmpNo_onclick = function (e) {
  $c.gus.cfInitObjects($p, [ed_mgntEmpNo, txt_mgntEmpNm]);
};

//계약거래처
scwin.udc_mgntClnt_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_mgntClntNo, txt_mgntClntNm, '3');
};
scwin.udc_mgntClnt_onclickEvent = function (e) {
  scwin.f_SearchPopUp('3', 'F');
};
scwin.img_clntNo_onclick = function (e) {
  $c.gus.cfInitObjects($p, [ed_mgntClntNo, txt_mgntClntNm]);
};

//입금은행
scwin.udc_bank_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_bankCd, txt_bankNm, '4');
};
scwin.udc_bank_onclickEvent = function (e) {
  scwin.f_SearchPopUp('4', 'F');
};

//지급일자
scwin.ed_advcdPayDt_onblur = function (e) {
  let payDt = ed_advcdPayDt.getValue();
  let curRow = ds_List1.getRowPosition();
  let groupNo = "";
  if (curRow >= 0) {
    groupNo = ds_List1.getCellData(curRow, "advcdGrpCd");
  }
  if (payDt != "" && payDt.length == 8 && groupNo != "") {
    for (let i = 0; i < ds_List1.getRowCount(); i++) {
      if (ds_List1.getCellData(i, "advcdGrpCd") == groupNo && ds_List1.getCellData(i, "advcdPayDt") == "") {
        ds_List1.setCellData(i, "advcdPayDt", payDt);
      }
    }
  }
};
scwin.gr_List1_onheaderclick = async function (headerId) {
  if (ds_List1.getRowCount() == 0) {
    return;
  }
  if (headerId != "chk") {
    return;
  }
  let allChecked = true; //모두 체크된건지 확인
  for (let i = 0; i < ds_List1.getRowCount(); i++) {
    if (ds_List1.getCellData(i, "chk") != "1") {
      allChecked = false;
      break;
    }
  }
  if (allChecked) {
    //모두 체크되었다면 체크된 값들이 같이 체크가 가능한지 확인한다.
    scwin.stopFlag = true;

    //같이 선택될 수 있는 기준 값을 첫번째 행에서 가져온다.
    let tmpApprvGrpCd = ds_List1.getCellData(0, "apprvGrpCd");
    let tmpAdvcdPrgStsCd = ds_List1.getCellData(0, "advcdPrgStsCd");
    let flagOk = true;
    for (let i = 0; i < ds_List1.getRowCount(); i++) {
      if (i == 0) continue;
      if (tmpApprvGrpCd != ds_List1.getCellData(i, "apprvGrpCd")) {
        await $c.win.alert($p, "승인자 그룹번호가 다른 열은 선택이 불가합니다.");
        flagOk = false;
        break;
      }
      if (flagOk && (tmpAdvcdPrgStsCd == "02" || tmpAdvcdPrgStsCd == "06") && ds_List1.getCellData(i, "advcdPrgStsCd") != "02" && ds_List1.getCellData(i, "advcdPrgStsCd") != "06") {
        await $c.win.alert($p, "상태를 확인해주세요.");
        flagOk = false;
        break;
      } else if (flagOk && tmpAdvcdPrgStsCd != ds_List1.getCellData(i, "advcdPrgStsCd")) {
        await $c.win.alert($p, "상태를 확인해주세요.");
        flagOk = false;
        break;
      }
    }
    if (!flagOk) {
      //허용되지 않는 항목이 있을 경우 모두 체크를 해제한다.
      for (let i = 0; i < ds_List1.getRowCount(); i++) {
        ds_List1.setCellData(i, "chk", "0");
      }
    }
    scwin.stopFlag = false;
  }
  scwin.f_CalSum();
};
scwin.ds_List1_ondataload = function () {
  let num = ds_List1.getRowCount();
  for (let idx = 0; idx < num; idx++) {
    let code = ds_List1.getCellData(idx, "advcdPrgStsCd");
    let color = code == "04" ? "red" : code == "02" ? "blue" : "";
    gr_List1.setCellColor(idx, "advcdPrgStsNm", color);
  }
  ds_List1.setRowPosition(0);
  gr_List1.setFocusedCell(0, 2);
};
scwin.ds_List1_oncelldatachange = async function (info) {
  let oldValue = info.oldValue;
  let newValue = info.newValue;
  let row = info.rowIndex;
  let colID = info.colID;
  if (row < 0) return;
  if (scwin.stopFlag) {
    return;
  }

  // "chk" 체크 열 값을 바꾼 경우
  if (colID != "chk") {
    return;
  }
  if (newValue == "1") {
    // 기존 체크 여부 확인
    let nRow = -1;
    for (let i = 0; i < ds_List1.getRowCount(); i++) {
      if (i != row && ds_List1.getCellData(i, "chk") == "1") {
        nRow = i;
        break;
      }
    }

    // 체크된 값이 있다면 
    if (nRow >= 0) {
      // 상태 유효 조건 확인 (승인 / 승인취소 / 반려)
      if (ds_List1.getCellData(row, "advcdPrgStsCd") == "02" || ds_List1.getCellData(row, "advcdPrgStsCd") == "06") {
        if (ds_List1.getCellData(nRow, "advcdPrgStsCd") != "02" && ds_List1.getCellData(nRow, "advcdPrgStsCd") != "06") {
          await $c.win.alert($p, "요청/승인취소 건은 다른 상태와 함께 선택이 불가합니다.");
          scwin.stopFlag = true;
          ds_List1.setCellData(row, "chk", "0");
          scwin.stopFlag = false;
          return;
        }
      } else if (ds_List1.getCellData(row, "advcdPrgStsCd") == "04" && ds_List1.getCellData(nRow, "advcdPrgStsCd") != "04") {
        await $c.win.alert($p, "승인 건은 다른 상태와 함께 선택이 불가합니다.");
        scwin.stopFlag = true;
        ds_List1.setCellData(row, "chk", "0");
        scwin.stopFlag = false;
        return;
      } else if (ds_List1.getCellData(row, "advcdPrgStsCd") != ds_List1.getCellData(nRow, "advcdPrgStsCd")) {
        await $c.win.alert($p, "상태가 동일한 열 끼리 체크해주세요.");
        scwin.stopFlag = true;
        ds_List1.setCellData(row, "chk", "0");
        scwin.stopFlag = false;
        return;
      }
      if (ds_List1.getCellData(nRow, "apprvGrpCd") != ds_List1.getCellData(row, "apprvGrpCd")) {
        await $c.win.alert($p, "승인자 그룹번호가 다른 열은 선택이 불가합니다.");
        scwin.stopFlag = true;
        ds_List1.setCellData(row, "chk", "0");
        scwin.stopFlag = false;
        return;
      }
    }

    // 승인자 그룹번호가 있으면 모든 승인자그룹번호 체크되도록
    if (!$c.gus.cfIsNull($p, ds_List1.getCellData(row, "apprvGrpCd"))) {
      scwin.stopFlag = true;
      for (let i = 0; i < ds_List1.getRowCount(); i++) {
        if (ds_List1.getCellData(i, "apprvGrpCd") == ds_List1.getCellData(row, "apprvGrpCd")) {
          ds_List1.setCellData(i, "chk", "1");
        }
      }
      scwin.stopFlag = false;
    }
    // 모든 해당 요청자 그룹번호 체크 되도록 
    else if (!$c.gus.cfIsNull($p, ds_List1.getCellData(row, "advcdGrpCd"))) {
      scwin.stopFlag = true;
      for (let i = 0; i < ds_List1.getRowCount(); i++) {
        if (ds_List1.getCellData(i, "advcdGrpCd") == ds_List1.getCellData(row, "advcdGrpCd")) {
          ds_List1.setCellData(i, "chk", "1");
        }
      }
      scwin.stopFlag = false;
    }
  }
  // 체크를 0으로 바꾸는 경우 -> 요청자 그룹번호가 같은 것을 다  0으로 같이 바꿔준다.
  else {
    if (!$c.gus.cfIsNull($p, ds_List1.getCellData(row, "advcdGrpCd"))) {
      scwin.stopFlag = true;
      for (let i = 0; i < ds_List1.getRowCount(); i++) {
        if (ds_List1.getCellData(i, "advcdGrpCd") == ds_List1.getCellData(row, "advcdGrpCd")) {
          ds_List1.setCellData(i, "chk", "0");
        }
      }
      scwin.stopFlag = false;
    }
  }
  scwin.f_CalSum(); // 체크 끝나고 합계 계산
};
scwin.gr_List1_onrowindexchange = function (rowIndex, oldRow) {
  if (rowIndex < 0) {
    return;
  }
  scwin.currentRowIndex = rowIndex;
  lc_advcdPrgStsCd.setValue(ds_List1.getCellData(rowIndex, "advcdPrgStsCd"));
  let advcdGrpCd = ds_List1.getCellData(rowIndex, "advcdGrpCd");
  let advcdPrgStsCd = ds_List1.getCellData(rowIndex, "advcdPrgStsCd");
  scwin.f_setFileUpDownFrame(advcdGrpCd, 1, advcdPrgStsCd);
};
scwin.ds_List1_onbeforerowpositionchange = async function (info) {
  let row = info.oldRowIndex;
  if (row < 0) return true;
  scwin.currentRowIndex = info.newRowIndex;
  if (scwin.chkSave == 0) {
    let slipNoVal = ds_List1.getCellData(row, "slipNo");
    let nRow = -1;
    for (let k = 0; k < ds_copy.getRowCount(); k++) {
      if (ds_copy.getCellData(k, "slipNo") == slipNoVal) {
        nRow = k;
        break;
      }
    }
    if (nRow >= 0) {
      if (ds_List1.getCellData(row, "advcdGrpCd") != ds_copy.getCellData(nRow, "advcdGrpCd") || ds_List1.getCellData(row, "advcdPrgStsCd") != ds_copy.getCellData(nRow, "advcdPrgStsCd") || ds_List1.getCellData(row, "bankCd") != ds_copy.getCellData(nRow, "bankCd") || ds_List1.getCellData(row, "bankNm") != ds_copy.getCellData(nRow, "bankNm") || ds_List1.getCellData(row, "bankAcntNo") != ds_copy.getCellData(nRow, "bankAcntNo") || ds_List1.getCellData(row, "advcdReqAmt") != ds_copy.getCellData(nRow, "advcdReqAmt") || ds_List1.getCellData(row, "commFeeAmt") != ds_copy.getCellData(nRow, "commFeeAmt") || ds_List1.getCellData(row, "summary") != ds_copy.getCellData(nRow, "summary")) {
        let chk = await $c.win.confirm($p, MSG_CM_CRM_005);
        if (chk) {
          ds_List1.undoRow(row);
          $c.gus.cfDisableObjects($p, [ed_bankCd, txt_bankNm, txt_bankAcntNo, img_bankCd, ed_advcdReqAmt, ed_commFeeAmt, ed_advcdPayDt, txt_summary]);
          $c.gus.cfEnableObjects($p, [btn_Update]);
          $c.gus.cfDisableObjects($p, [btn_Save]);
          return true;
        } else {
          $c.gus.cfDisableObjects($p, [btn_Update]);
          $c.gus.cfEnableObjects($p, [btn_Save]);
          return false;
        }
      } else {
        $c.gus.cfEnableObjects($p, [btn_Update]);
        return true;
      }
    }
  }
  return true;
};
scwin.gr_List1_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo" && rowIndex >= 0 && !$c.gus.cfIsNull($p, ds_List1.getCellData(rowIndex, "slipNo"))) {
    $c.gus.cfShowSlipInfo($p, ds_List1.getCellData(ds_List1.getRowPosition(), "slipNo"));
  }
};
scwin.gr_List1_onbeforecolumnmove = function (info) {
  if (info.startColumnID == "chk") return false;
  return true;
};
scwin.ds_List2_ondataload = function () {
  let num = ds_List2.getRowCount();
  for (let idx = 0; idx < num; idx++) {
    let code = ds_List2.getCellData(idx, "advcdPrgStsCd");
    let color = code == "04" ? "red" : code == "02" ? "blue" : "";
    gr_List2.setCellColor(idx, "advcdPrgStsCd", color);
  }
};
scwin.lc_advcdPrgStsCd_onchange = function (info) {
  let rowIndex = ds_List1.getRowPosition();
  ds_List1.setCellData(rowIndex, "advcdPrgStsCd", lc_advcdPrgStsCd.getValue());
};
scwin.ds_mgntAdvcdPrgStsCd_ondataload = function () {
  //0.1초 뒤에 세팅하도록 처리
  setTimeout(function () {
    lc_mgntAdvcdPrgStsCd.setValue("99");
  }, 100);
};
scwin.excelGrpYnLabelDisplayFormatterFunc = function (value) {
  return value == "1" ? "Y" : "N";
};
scwin.advcdPrgStsCdNmDisplayFormatterFunc = function (value) {
  let dataList = ds_advcdPrgStsCdForGrid.getAllJSON();
  for (let i = 0, n = dataList.length; i < n; i++) {
    if (dataList[i].col1 == value) return dataList[i].col2;
  }
  return "";
};
scwin.apprvGrpCdDisplayFormatterFunc = function (value) {
  //########-## 형태로 반환한다.
  if (value.length == 10) {
    return value.substring(0, 8) + "-" + value.substring(8, 10);
  }
  return value;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_mgntDtClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_search.mgntDtClsCd',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'작성일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회계일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지급일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:' &nbsp;',style:'',escape:'false'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_mgntDt',refDataMap:'dma_search',refEdDt:'mgntEndDt',refStDt:'mgntStDt',style:'',edFromId:'ed_mgntStDt',edToId:'ed_mgntEndDt',titleFrom:'신청일자',titleTo:'신청일자',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_mgntAcctDept',codeId:'ed_mgntAcctDeptCd',selectID:'',popupID:'',validTitle:'',nameId:'txt_mgntAcctDeptNm',style:'',objTypeCode:'data',objTypeName:'data',validExpCode:'귀속부서:yes:format=00000',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'5',mandatoryCode:'true',refDataCollection:'dma_search',code:'mgntAcctDeptCd',name:'mgntAcctDeptNm','ev:onblurCodeEvent':'scwin.udc_mgntAcctDept_onblurCodeEvent','ev:onclickEvent':'scwin.udc_mgntAcctDept_onclickEvent'}},{T:1,N:'xf:trigger',A:{style:'',id:'img_acctDeptCd',type:'button',class:'btn ico refresh','ev:onclick':'scwin.img_acctDeptCd_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mgntSlipNo',placeholder:'',style:'width:130px;text-transform:uppercase;',objType:'data',validExp:'전표번호:no:format=0000000000',maxlength:'10',ref:'data:dma_search.mgntSlipNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'그룹생성날짜',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',id:'ed_apprvGrpDt',class:'',calendarValueType:'yearMonthDate',mandatory:'true',validExp:'생성일자:yes:length=8',title:'생성일자',ref:'data:dma_search.mgntApprvGrpDt'}},{T:1,N:'xf:input',A:{style:'width:30px;',id:'ed_apprvGrpNum',placeholder:'',class:'',objType:'data',validExp:'차수:no:format=00',allowChar:'0-9',ref:'data:dma_search.mgntApprvGrpNum',maxlength:'2'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'차',class:''}}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_mgntEmpClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_search.mgntEmpClsCd',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전표작성자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'신청자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'승인자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_mgntEmp',codeId:'ed_mgntEmpNo',selectID:'',popupID:'',validTitle:'계약등록자',nameId:'txt_mgntEmpNm',style:'',objTypeCode:'data',objTypeName:'data',validExpCode:'계약등록자:no:format=000000',UpperFlagCode:'1',maxlengthCode:'6',allowCharCode:'0-9',refDataCollection:'dma_search',code:'mgntEmpNo',name:'mgntEmpNm','ev:onblurCodeEvent':'scwin.udc_mgntEmp_onblurCodeEvent','ev:onclickEvent':'scwin.udc_mgntEmp_onclickEvent'}},{T:1,N:'xf:trigger',A:{style:'',id:'img_mgntEmpNo',type:'button',class:'btn ico refresh','ev:onclick':'scwin.img_mgntEmpNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_mgntClnt',codeId:'ed_mgntClntNo',selectID:'',popupID:'',validTitle:'거래처',nameId:'txt_mgntClntNm',style:'',objTypeCode:'data',validExpCode:'거래처:no',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',refDataCollection:'dma_search',name:'mgntClntNm',code:'mgntClntNo','ev:onblurCodeEvent':'scwin.udc_mgntClnt_onblurCodeEvent','ev:onclickEvent':'scwin.udc_mgntClnt_onclickEvent'}},{T:1,N:'xf:trigger',A:{style:'',id:'img_clntNo',type:'button',class:'btn ico refresh','ev:onclick':'scwin.img_clntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'lc_mgntAdvcdPrgStsCd',chooseOption:'',style:'width:130px; height:21px; ',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_mgntAdvcdPrgStsCd'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Srch',style:'',type:'button','ev:onclick':'scwin.btn_Srch_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전도금관리내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_bankExcelDown',type:'button',class:'btn','ev:onclick':'scwin.btn_bankExcelDown_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'은행용 DN'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_interExcelDown',type:'button',class:'btn','ev:onclick':'scwin.btn_interExcelDown_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내부용DN'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{gridDownYn:'N',gridUpYn:'N',grp:'grd_section1',style:'',btnUser:'N',gridID:'gr_List1',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'ds_List1',id:'gr_List1',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false','ev:onheaderclick':'scwin.gr_List1_onheaderclick','ev:onrowindexchange':'scwin.gr_List1_onrowindexchange','ev:oncellclick':'scwin.gr_List1_oncellclick','ev:onbeforecolumnmove':'scwin.gr_List1_onbeforecolumnmove'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'70',colSpan:'',rowSpan:'2',value:'선택',checkboxLabel:'선택',keepFocusOnCheckHeaderClick:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvGrpCd',inputType:'text',value:'승인자<br/>그룹번호',width:'110',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdGrpCd',inputType:'text',value:'요청자<br/>그룹번호',width:'110',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdPrgStsCd',inputType:'text',value:'상태',width:'70',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdPrgStsNm',inputType:'text',value:'상태',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'',inputType:'text',value:'전표정보',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNo',inputType:'text',width:'70',value:'거래처<br/>번호',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNm',inputType:'text',width:'110',value:'거래처명',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'advcdReqAmt',displayMode:'label',value:'전도금',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'apprvStsCd',displayMode:'label',value:'결재상태<br/>코드',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'apprvStsNm',displayMode:'label',value:'결재상태',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'advcdPayDt',displayMode:'label',value:'지급일자',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'postDt',displayMode:'label',value:'회계<br/>처리일자',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'advcdReqId',displayMode:'label',value:'신청자<br/>사원번호',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'advcdReqNm',displayMode:'label',value:'신청자',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drawAcctDeptCd',displayMode:'label',value:'작성귀속<br/>부서코드',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'drawAcctDeptNm',displayMode:'label',value:'작성<br/>귀속부서',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'slipNo',displayMode:'label',value:'전표번호',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'95',inputType:'text',id:'blNo',displayMode:'label',value:'BL<br/>Number',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'summary',displayMode:'label',value:'적요<br/>(현대상선<br/>B/L NO)',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bankCd',displayMode:'label',value:'입금은행<br/>코드',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bankNm',displayMode:'label',value:'입금은행',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bankAcntNo',displayMode:'label',value:'입금계좌',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'admitAmt',displayMode:'label',value:'승인금액',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'apprvEmpNo',displayMode:'label',value:'결재자<br/>사원번호',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'apprvEmpNm',value:'결재자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'commFeeAmt',value:'수수료',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'admitId',value:'승인자<br/>사원번호',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'admitNm',value:'승인자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'returnId',value:'반려자<br/>사원번호',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'returnNm',value:'반려자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'admitCancelId',value:'승인취소<br/>사원번호',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'admitCancelNm',value:'승인<br/>취소자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'excelGrpYn',value:'일괄이체<br/>여부',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipDt',displayMode:'label',value:'전표<br/>작성일자',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drawEmpNo',displayMode:'label',value:'작성자<br/>사원번호',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drawEmpNm',displayMode:'label',value:'전표<br/>작성자',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'40',value:'',trueValue:'1',falseValue:'0',defaultValue:'0',emptyValue:'F',valueType:'other',readOnly:'false',keepFocusOnCheckHeaderClick:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvGrpCd',inputType:'text',width:'70',readOnly:'true',displayFormat:'',colMerge:'true',excelFormatter:'',excelFormat:'',displayFormatter:'scwin.apprvGrpCdDisplayFormatterFunc'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdGrpCd',inputType:'text',width:'70',readOnly:'true',displayFormat:'########-###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdPrgStsCd',inputType:'text',width:'70',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdPrgStsNm',inputType:'text',width:'70',readOnly:'true',style:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'calendar',width:'70',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawEmpNo',inputType:'text',width:'70',readOnly:'true',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawEmpNm',inputType:'text',width:'70',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNo',inputType:'text',width:'70',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNm',inputType:'text',width:'70',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'advcdReqAmt',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'apprvStsCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'apprvStsNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'calendar',id:'advcdPayDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'calendar',id:'postDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'advcdReqId',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'advcdReqNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drawAcctDeptCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drawAcctDeptNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'slipNo',displayMode:'label',readOnly:'true',class:'underline',style:'color:blue; cursor:pointer;'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'blNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'summary',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bankCd',displayMode:'label',readOnly:'true',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bankNm',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bankAcntNo',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'admitAmt',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'apprvEmpNo',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'apprvEmpNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commFeeAmt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'admitId',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'admitNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'returnId',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'returnNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'admitCancelId',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'admitCancelNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'excelGrpYn',value:'',displayMode:'label',readOnly:'true',allOption:'',ref:'',displayFormatter:'scwin.excelGrpYnLabelDisplayFormatterFunc'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'text',style:'',id:'column163',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column162',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column161',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column160',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column159',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column158',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column157',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column156',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column155',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column154',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column153',value:'',displayMode:'label',expression:'sum(\'advcdReqAmt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column152',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column151',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column150',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column149',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column148',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column147',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column146',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column145',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column144',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column143',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column142',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column141',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column140',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column139',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column138',value:'',displayMode:'label',expression:'sum(\'admitAmt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column137',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column136',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column135',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column134',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column133',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column132',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column131',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column130',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column129',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column128',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ds_List1_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전도금관리',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_inputData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'그룹번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_advcdGrpCd',placeholder:'',style:'width:150px;',ref:'data:ds_List1.advcdGrpCd',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{id:'lc_advcdPrgStsCd',chooseOption:'true',style:'width:150px; height:21px; ',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',chooseOptionLabel:'&nbsp;','ev:onchange':'scwin.lc_advcdPrgStsCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_advcdPrgStsCd'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_advcdPayDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_List1.advcdPayDt',mandatory:'true',title:'지급일자','ev:onblur':'scwin.ed_advcdPayDt_onblur'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입금은행',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_bank',codeId:'ed_bankCd',nameId:'txt_bankNm',popupID:'',selectID:'',style:'',validTitle:'입금은행',objTypeCode:'data',objTypeName:'data',maxlengthCode:'2',validExpCode:'입금은행:yes:legnth=2',maxlengthName:'20',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_bank_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bank_onclickEvent',refDataCollection:'ds_List1',code:'bankCd',name:'bankNm',btnId:'img_bankCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입금계좌',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_bankAcntNo',placeholder:'',style:'width:150px;',ref:'data:ds_List1.bankAcntNo',objType:'data',validExp:'입금계좌:yes:maxByteLength=20',maxlength:'20',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전도금승인금액',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_advcdReqAmt',placeholder:'',style:'width:150px;text-align:right;',ref:'data:ds_List1.advcdReqAmt',objType:'data',validExp:'전도금승인금액:true:notAllowed=0&maxLength=13',maxlength:'13',title:'전도금승인금액',mandatory:'true',displayFormat:'#,###,###,###,###'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수수료',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_commFeeAmt',placeholder:'',style:'width:150px;text-align:right;',ref:'data:ds_List1.commFeeAmt',mandatory:'true',objType:'data',maxlength:'13',allowChar:'0-9',validExp:'수수료:no:maxLength=13',displayFormat:'#,###,###,###,###'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'받는 분 통장 표시 (미기재시 동원로엑스로 송금)',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_summary',placeholder:'',style:'width:250px;',ref:'data:ds_List1.summary',objType:'data',maxlength:'30',validExp:'적요:no:maxByteLength=30'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전도금(합계)',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_advcdReqSumAmt',placeholder:'',style:'width:150px;text-align:right;',mandatory:'true',objType:'data',validExp:'전도금:true:notAllowed=0&maxLength=13',title:'전도금',maxlength:'13',displayFormat:'#,###,###,###,###',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수수료(합계)',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_commFeeSumAmt',placeholder:'',style:'width:150px;text-align:right;',mandatory:'true',objType:'data',allowChar:'0-9',displayFormat:'#,###,###,###,###',title:'수수료',maxlength:'13',validExp:'수수료:no:maxLength=13'}}]}]}]}]},{T:1,N:'w2:wframe',A:{style:'width:100%;height:312px;',id:'wfm_wframe1'}},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Email Sending',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'txt_email',placeholder:'',style:'width: 250px;',objType:'data'}},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_email',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_email_onclick',userAuth:'P',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Email전송'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_GrpCreate',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_GrpCreate_onclick',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'그룹생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_GrpDelete',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_GrpDelete_onclick',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'그룹삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Update',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Update_onclick',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Admit',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Admit_onclick',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'승인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_AdmitCancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_AdmitCancel_onclick',userAuth:'U',objType:'bCancel'},E:[{T:1,N:'xf:label',E:[{T:3,text:'승인취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Return',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Return_onclick',userAuth:'U',objType:'bReturn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'반려'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:';display:none;'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'ds_List2',id:'gr_List2',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvGrpCd',inputType:'text',value:'승인자<br/>그룹번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdGrpCd',inputType:'text',value:'그룹번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdPrgStsCd',inputType:'text',value:'상태',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawEmpNm',inputType:'text',value:'전표<br/>작성자',width:'63'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNo',inputType:'text',value:'거래처<br/>번호',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNm',inputType:'text',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdReqAmt',inputType:'text',value:'전도금',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvStsCd',inputType:'text',value:'결재상태<br/>코드',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvStsNm',inputType:'text',value:'결재상태',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdPayDt',inputType:'text',value:'지급일자',width:'80',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdReqId',inputType:'text',value:'신청자<br/>사원번호',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdReqNm',inputType:'text',value:'신청자',width:'63'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'excelGrpYn',inputType:'text',value:'일괄송금여부',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',value:'BL<br/>Number',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',value:'적요<br/>(현대상선<br/>B/L NO)',width:'140',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankCd',inputType:'text',value:'입금은행<br/>코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankNm',inputType:'text',value:'입금은행',width:'140',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankAcntNo',inputType:'text',value:'입금계좌',width:'110',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'admitAmt',inputType:'text',value:'승인금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvEmpNo',inputType:'text',value:'결재자<br/>사원번호',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvEmpNm',inputType:'text',value:'결재자',width:'63'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commFeeAmt',inputType:'text',value:'수수료',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo1',inputType:'text',value:'전표번호1',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo2',inputType:'text',value:'전표번호2',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo3',inputType:'text',value:'전표번호3',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo4',inputType:'text',value:'전표번호4',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo5',inputType:'text',value:'전표번호5',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo6',inputType:'text',value:'전표번호6',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo7',inputType:'text',value:'전표번호7',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo8',inputType:'text',value:'전표번호8',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo9',inputType:'text',value:'전표번호9',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo10',inputType:'text',value:'전표번호10',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvGrpCd',inputType:'text',width:'100',displayFormat:'########-##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdGrpCd',inputType:'text',width:'100',displayFormat:'########-###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdPrgStsCd',inputType:'text',value:'',width:'60',displayFormatter:'scwin.advcdPrgStsCdNmDisplayFormatterFunc'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawEmpNm',inputType:'text',value:'',width:'63'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNo',inputType:'text',value:'',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNm',inputType:'text',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdReqAmt',inputType:'text',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'bigDecimal'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvStsCd',inputType:'text',value:'',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvStsNm',inputType:'text',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdPayDt',inputType:'text',value:'',width:'80',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdReqId',inputType:'text',value:'',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdReqNm',inputType:'text',value:'',width:'63'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'excelGrpYn',inputType:'text',value:'',width:'120',displayFormatter:'scwin.excelGrpYnLabelDisplayFormatterFunc'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',value:'',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankCd',inputType:'text',value:'',width:'100',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankNm',inputType:'text',value:'',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankAcntNo',inputType:'text',value:'',width:'110',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'admitAmt',inputType:'text',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'bigDecimal'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvEmpNo',inputType:'text',value:'',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvEmpNm',inputType:'text',value:'',width:'63'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commFeeAmt',inputType:'text',value:'',width:'100',hidden:'true',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo1',inputType:'text',value:'',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo2',inputType:'text',value:'',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo3',inputType:'text',value:'',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo4',inputType:'text',value:'',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo5',inputType:'text',value:'',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo6',inputType:'text',value:'',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo7',inputType:'text',value:'',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo8',inputType:'text',value:'',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo9',inputType:'text',value:'',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo10',inputType:'text',value:'',width:'100',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvGrpCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdGrpCd',inputType:'text',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdPrgStsCd',inputType:'select',value:'',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawEmpNm',inputType:'text',value:'',width:'63'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNo',inputType:'text',value:'',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNm',inputType:'text',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdReqAmt',inputType:'expression',value:'',width:'100',dataType:'number',displayFormat:'#,###',expression:'sum(\'advcdReqAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvStsCd',inputType:'text',value:'',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvStsNm',inputType:'text',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdPayDt',inputType:'text',value:'',width:'80',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdReqId',inputType:'text',value:'',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdReqNm',inputType:'text',value:'',width:'63'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'excelGrpYn',inputType:'text',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',value:'',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankCd',inputType:'text',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankNm',inputType:'text',value:'',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankAcntNo',inputType:'text',value:'',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'admitAmt',inputType:'expression',value:'',width:'100',dataType:'number',displayFormat:'#,###',expression:'sum(\'admitAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvEmpNo',inputType:'text',value:'',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvEmpNm',inputType:'text',value:'',width:'63'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commFeeAmt',inputType:'text',value:'',width:'100',hidden:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo1',inputType:'text',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo2',inputType:'text',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo3',inputType:'text',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo4',inputType:'text',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo5',inputType:'text',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo6',inputType:'text',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo7',inputType:'text',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo8',inputType:'text',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo9',inputType:'text',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo10',inputType:'text',width:'100'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section4',style:';display:none;'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'ds_List4',id:'gr_List4',style:';display:none;',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bankNm',inputType:'text',value:'입금은행',width:'140',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankAcntNo',inputType:'text',value:'입금계좌',width:'110',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'admitAmt',inputType:'text',value:'승인금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNm',inputType:'text',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',value:'적요',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bankNm',inputType:'text',value:'',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankAcntNo',inputType:'text',value:'',width:'110',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'admitAmt',inputType:'text',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'bigDecimal'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNm',inputType:'text',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',value:'',width:'100',textAlign:'left'}}]}]}]}]}]}]}]}]})