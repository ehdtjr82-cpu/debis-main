	//-------------------------------------------------------------------------
	// 전역변수
	//-------------------------------------------------------------------------
	scwin.params 			= $c.data.getParameter();
	scwin.certiNo 			= $c.gus.cfIsNull(scwin.params.certiNo) ? "" : scwin.params.certiNo; // 거래명세서번호
	scwin.bilgLodeptCd 	= $c.gus.cfIsNull(scwin.params.bilgLodeptCd) ? "" : scwin.params.bilgLodeptCd; // 청구부서
	scwin.flag 				= $c.gus.cfIsNull(scwin.params.flag) ? "" : scwin.params.flag; // 프레임ID	
	scwin.link 	    		= $c.gus.cfIsNull(scwin.params.link) ? "" : scwin.params.link; // 링크구분자		
	scwin.strCurDate 		= $c.date.getServerDateTime("yyyyMMdd");
	
	// 메세지용 전역변수 SETTING
	let MSG_FS_WRN_001 = "적용환율이 2개 이상이면 거래명세서 작성이 불가합니다.";
	let MSG_FS_WRN_002 = "거래명세서가 존재하지 않습니다.";
	let MSG_FS_WRN_003 = "모두 선택할 수 없습니다.";
	let MSG_FS_WRN_009 = "청구처 조건이 내용과 일치하지 않습니다.";	
	let MSG_FS_WRN_010 = "변경된 사항을 먼저 저장해야 합니다.";		
	let MSG_FS_WRN_011 = "청구부서를 먼저 선택해야 합니다.";			
	let MSG_FS_WRN_012 = "저장할 데이타가 존재하지 않습니다.";				
	let MSG_FS_WRN_014 = "라인 조건이 내용과 일치하지 않습니다.";				
	let MSG_FS_WRN_015 = "이미 확정된 거래명세서(CERTI)입니다.";
	let MSG_FS_WRN_016 = "상위서식유형코드가 존재하지 않습니다.";		
	let MSG_FS_WRN_017 = "EDI전송여부를 No로 수정할수 없습니다.";			
	let MSG_FS_WRN_018 = "EDI전송된 건입니다. 삭제하시겠습니까?";
	let MSG_FS_WRN_019 = "BILL종류를 먼저 선택해야 합니다.";			
	
	scwin.dcsnClsCd      		= "2";  							// 확정구분코드
	
	//-------------------------------------------------------------------------
	// CERTI 조회
	//-------------------------------------------------------------------------
	scwin.f_CertiRetrieve = function () {
		// ds_certidetail.UseFilter = "false";
		
		// 링크조회시
		if (scwin.certiNo != "" && scwin.link == "true") {
			ed_certiNo.setValue(scwin.certiNo);
			ed_bilgLodeptCd.setValue(scwin.bilgLodeptCd);			
			scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, txt_bilgLodeptNm, 1);
		}
	
		// validation check        
		if (!$c.gus.cfValidate([ed_bilgLodeptCd, ed_certiNo, ed_confirmDt])) {
			return;
		}		
		
		
		let colInfoArr = ["bilgLodeptCd", "certiNo", "sumDc"];
		let dataArr = [];
	 	ds_orderselling_con.setArray({"columnInfo": colInfoArr, "data": dataArr});
		ds_orderselling_con.insertRow();
	    ds_orderselling_con.setCellData(0, "bilgLodeptCd", ed_bilgLodeptCd.getValue());
	    ds_orderselling_con.setCellData(0, "certiNo", ed_certiNo.getValue());
		
	    if (scwin.pgmId == "fs_202_04_01b.jsp" || scwin.pgmId == "fs_202_05_01b.jsp") {
			if ($c.util.isEmpty(chb_sumDc.getValue())) {
				ds_orderselling_con.setCellData(0, "sumDc", "Y");
			} else {
				ds_orderselling_con.setCellData(0, "sumDc", "N");
			}
		}		
	
		sbm_certi_retrieve.action = "/ds.fs.bilg.bilg.RetrieveCertiCMD.do";
		$c.sbm.execute(sbm_certi_retrieve);
		
		scwin.link = ""; 							// 링크구분자 초기화
		ds_certicommonsavepost.removeAll();
	
	}


  	//-------------------------------------------------------------------------
  	// 저장
 	//-------------------------------------------------------------------------
  	scwin.f_Save = async function (separation) {
	  	// 날짜형식 체크
    	if (!$c.gus.cfValidate([ed_confirmDt])) {
    		return;
    	}				

		//거래명세서번호순번  Value 세팅
		let j = 1;
		for (let i = 0; i < ds_certidetail.getRowCount(); i++) {
			if (ds_certidetail.getCellData(i, "choice") == "T") {		
				ds_certidetail.setCellData(i, "certiNoSeq", j);
				j = j + 1;	
			}
		}
		
		if (j == 1) {
			$c.gus.cfAlertMsg(MSG_FS_WRN_012);
        	return;        		
		}		
		
		let ret = await $c.win.confirm(MSG_CM_CRM_001);
		if (!ret) {
			return;
		} else {
			if (ds_certicommon.getRowCount() < 1) ds_certicommon.insertRow();
			ds_certicommon.setCellData(0, "confirmDt", ed_confirmDt.getValue());					// 확인일자
			ds_certicommon.setCellData(0, "fmlaPatternCd", dtl_fmlaPatternCd.getValue());			// 서식유형코드 (ASIS BindColVal이었는데 좀 애매함) 
			ds_certicommon.setCellData(0, "bankAcntNoInscrpYn", rd_bankAcntNoInscrpYn.getValue());		// 계좌번호표기여부 
			ds_certicommon.setCellData(0, "summary", dtl_summary.getValue());					// 적요 
			ds_certicommon.setCellData(0, "spplyAmt", ed_spplyAmt.getValue());						// 공급금액 
			ds_certicommon.setCellData(0, "fireInsrRateAmt", ed_fireInsrRateAmt.getValue());				// 화재보험금액
			ds_certicommon.setCellData(0, "spplyAmtFcrc", ed_spplyAmtFcrc.getValue());					// 공급금액_외화 
			ds_certicommon.setCellData(0, "vatAmt", ed_vatAmt.getValue());						// 부가세금액
			ds_certicommon.setCellData(0, "prebilgYn", rd_prebilgYn.getValue());				// 선청구여부					
			ds_certicommon.setCellData(0, "certiNo", ed_certiNo.getValue());						// 거래명세서번호
			ds_certicommon.setCellData(0, "oldCertiNo", dtl_oldCertiNo.getValue());					// 거래명세서번호
			ds_certicommon.setCellData(0, "vsslCd", ds_certidetail.getCellData(0, "vsslCd"));// 선박코드
			ds_certicommon.setCellData(0, "portcnt", ds_certidetail.getCellData(0, "portcnt"));// 항차
			ds_certicommon.setCellData(0, "arDepPortDt", ed_arDepPortDt.getValue());					// 입출항일자
			ds_certicommon.setCellData(0, "billTitleNm", dtl_billTitleNm.getValue());				// BILLTITLE명 
			ds_certicommon.setCellData(0, "dcsnClsCd", scwin.dcsnClsCd);							// 확정구분코드
			
			if (scwin.pgmId == "fs_202_04_01b.jsp" || scwin.pgmId == "fs_202_05_01b.jsp") {
				if ($c.util.isEmpty(chb_sumDc.getValue())) {
					ds_certicommon.setCellData(0, "sumDc", "Y");
				} else {
					ds_certicommon.setCellData(0, "sumDc", "N");
				}
			}
	
			// 통화코드 Value 세팅
			for (let i = 0; i < ds_certidetail.getRowCount(); i++) {		
				if (ds_certidetail.getCellData(i, "choice") == "T") {				
					if (ds_certidetail.getCellData(i, "crcCd") == "KRW") {
						ds_certicommon.setCellData(0, "crcCd", "KRW");
					} else {
						ds_certicommon.setCellData(0, "crcCd", ds_certidetail.getCellData(i, "crcCd"));			
						break;
					}		
				}		
			}
	
			// 적용환율 Value 비교/ 세팅
			let pre_i = 0;
			
			for (let i = 0; i < ds_certidetail.getRowCount(); i++) {
				if (ds_certidetail.getCellData(i, "choice") == "T" && ds_certidetail.getCellData(i, "crcCd") == "USD") {
					if (i > 1) {
						if (ds_certidetail.getCellData(i, "adptExchRt") == ds_certidetail.getCellData(pre_i, "adptExchRt")) {
							ds_certicommon.setCellData(0, "adptExchRt", ds_certidetail.getCellData(i, "adptExchRt"));
							pre_i = i;
						} else {
							if (pre_i != 0) {	//ds_certidetail.getCellData(0, "adptExchRt")하고 비교해서 제외
								ds_certicommon.setCellData(0, "adptExchRt", "0");
								$c.gus.cfAlertMsg(MSG_FS_WRN_001);
								return;	
							}
						}					
					} else {
						pre_i = i;
						ds_certicommon.setCellData(0, "adptExchRt", ds_certidetail.getCellData(i, "adptExchRt"));
					}		
				}				
			}
	
			// 환율적용일자 Value 세팅
			for (let i = 0; i < ds_certidetail.getRowCount(); i++) {		
				if (ds_certidetail.getCellData(i, "crcCd") != "KRW") {
					ds_certicommon.setCellData(0, "exchRtAdptDt", ds_certidetail.getCellData(i, "exchRtAdptDt"));			
					break;
				}			
			}
	
			// 수출입구분코드 Value 세팅	
			for (let i = 0; i < ds_certidetail.getRowCount(); i++) {		
				if (i > 0) {
					if (ds_certidetail.getCellData(i, "impExpDomesticClsCd") == ds_certidetail.getCellData(i-1, "impExpDomesticClsCd")) {
						ds_certicommon.setCellData(0, "impExpDomesticClsCd", ds_certidetail.getCellData(i, "impExpDomesticClsCd"));
					} else {
						ds_certicommon.setCellData(0, "impExpDomesticClsCd", "");
						break;			
					}					
				} else {
					ds_certicommon.setCellData(0, "impExpDomesticClsCd", ds_certidetail.getCellData(i, "impExpDomesticClsCd"));
				}
			}			
	
			// 사업부문코드 Value 세팅	
			for (let i = 0; i < ds_certidetail.getRowCount(); i++) {		
				if (ds_certidetail.getCellData(i, "sellGoodsPatternCd") == "01" || ds_certidetail.getCellData(i, "sellGoodsPatternCd") == "02") {		
					ds_certicommon.setCellData(0, "transCargoClsCd", ds_certidetail.getCellData(i, "transCargoClsCd"));
					break;
				}		
	
			}
			
			// SIZE코드 Value 세팅			
			for (let i = 0; i < ds_certidetail.getRowCount(); i++) {		
				if (ds_certidetail.getCellData(i, "choice") == "T") {						
					if (i > 0) {
						if (ds_certidetail.getCellData(i, "cntrSizCd") == ds_certidetail.getCellData(i-1, "cntrSizCd")) {
							ds_certicommon.setCellData(0, "cntrSizCd", ds_certidetail.getCellData(i, "cntrSizCd"));
						} else {
							ds_certicommon.setCellData(0, "cntrSizCd", '');
							break;
						}		
					} else {
						ds_certicommon.setCellData(0, "cntrSizCd", ds_certidetail.getCellData(i, "cntrSizCd"));
					}		
				}				
			}
					
			// TYPE코드 Value 세팅							
			for (let i = 0; i < ds_certidetail.getRowCount(); i++) {
				if(ds_certidetail.getCellData(i, "choice") == "T"){										
					if (i > 0) {
						if(ds_certidetail.getCellData(i, "cntrTypCd") == ds_certidetail.getCellData(i-1, "cntrTypCd")) {
							ds_certicommon.setCellData(0, "cntrTypCd", ds_certidetail.getCellData(i, "cntrTypCd"));
						} else {
							ds_certicommon.setCellData(0, "cntrTypCd", '');
							break;
						}		
					} else {
						ds_certicommon.setCellData(0, "cntrTypCd", ds_certidetail.getCellData(i, "cntrTypCd"));
					}		
				}				
			}
	
			// E/F코드 Value 세팅							
			for (let i = 0; i < ds_certidetail.getRowCount(); i++) {		
				if (ds_certidetail.getCellData(i, "choice") == "T") {						
					if (i > 0) {				
						if(ds_certidetail.getCellData(i, "fullEmptyClsCd") == ds_certidetail.getCellData(i-1, "fullEmptyClsCd")) {
							ds_certicommon.setCellData(0, "fullEmptyClsCd", ds_certidetail.getCellData(i, "fullEmptyClsCd"));
						} else {
							ds_certicommon.setCellData(0, "fullEmptyClsCd", '');
							break;
						}		
					} else {
						ds_certicommon.setCellData(0, "fullEmptyClsCd", ds_certidetail.getCellData(i, "fullEmptyClsCd"));
					}		
				}				
			}
			
			// MRN Value 세팅							
			for (let i = 0; i < ds_certidetail.getRowCount(); i++) {		
				if (ds_certidetail.getCellData(i, "choice") == "T") {						
					if (i > 0) {				
						if (ds_certidetail.getCellData(i, "mrn") == ds_certidetail.getCellData(i-1, "mrn")) {
							ds_certicommon.setCellData(0, "mrn", ds_certidetail.getCellData(i, "mrn"));
						} else {
							ds_certicommon.setCellData(0, "mrn", '');
							break;
						}		
					} else {
						ds_certicommon.setCellData(0, "mrn", ds_certidetail.getCellData(i, "mrn"));
					}		
				}				
			}		
			
			// MSN Value 세팅							
			for (let i = 0; i < ds_certidetail.getRowCount(); i++) {		
				if (ds_certidetail.getCellData(i, "choice") == "T") {						
					if (i > 0) {				
						if (ds_certidetail.getCellData(i, "msn") == ds_certidetail.getCellData(i-1, "msn")) {
							ds_certicommon.setCellData(0, "msn", ds_certidetail.getCellData(i, "msn"));
						} else {
							ds_certicommon.setCellData(0, "msn", 0);
							break;
						}		
					} else {
						ds_certicommon.setCellData(0, "msn", ds_certidetail.getCellData(i, "msn"));
					}		
				}				
			}				
	
			// HSN Value 세팅							
			for(let i = 0; i < ds_certidetail.getRowCount(); i++) {		
				if (ds_certidetail.getCellData(i, "choice") == "T") {						
					if (i > 0) {				
						if (ds_certidetail.getCellData(i, "hsn") == ds_certidetail.getCellData(i-1, "hsn")) {
							ds_certicommon.setCellData(0, "hsn", ds_certidetail.getCellData(i, "hsn"));
						} else {
							ds_certicommon.setCellData(0, "hsn", 0);
							break;
						}		
					} else {
						ds_certicommon.setCellData(0, "hsn", ds_certidetail.getCellData(i, "hsn"));
					}		
				}				
			}		
			
			// 모선코드 Value 세팅									
			for (let i = 0; i < ds_certidetail.getRowCount(); i++) {		
				if (ds_certidetail.getCellData(i, "choice") == "T") {						
					ds_certicommon.setCellData(0, "vsslCd", ds_certidetail.getCellData(i, "vsslCdFrom"));
					break;
				}				
			}
			
			// 항차코드 Value 세팅											
			for (let i = 0; i < ds_certidetail.getRowCount(); i++) {		
				if (ds_certidetail.getCellData(i, "choice") == "T") {						
					ds_certicommon.setCellData(0, "portcnt", ds_certidetail.getCellData(i, "portcntFrom"));
					break;
				}				
			}		
			
			// From모선코드 Value 세팅									
			for (let i = 0; i < ds_certidetail.getRowCount(); i++) {		
				if (ds_certidetail.getCellData(i, "choice") == "T") {						
					ds_certicommon.setCellData(0, "vsslCdFrom", ds_certidetail.getCellData(i, "vsslCdFrom"));
					break;
				}				
			}
	
			// To모선코드 Value 세팅									
			for (let i = 0; i < ds_certidetail.getRowCount(); i++) {		
				if (ds_certidetail.getCellData(i, "choice") == "T") {						
					ds_certicommon.setCellData(0, "vsslCdTo", ds_certidetail.getCellData(i, "vsslCdto"));
					break;
				}				
			}		
			
			// From항차코드 Value 세팅											
			for (let i = 0; i < ds_certidetail.getRowCount(); i++) {		
				if (ds_certidetail.getCellData(i, "choice") == "T") {						
					ds_certicommon.setCellData(0, "portcntFrom", ds_certidetail.getCellData(i, "portcntFrom"));
					break;
				}				
			}				
			
			// To항차코드 Value 세팅											
			for (let i = 0; i < ds_certidetail.getRowCount(); i++) {		
				if (ds_certidetail.getCellData(i, "choice") == "T") {						
					ds_certicommon.setCellData(0, "portcntTo", ds_certidetail.getCellData(i, "portcntTo"));
					break;
				}				
			}						
			
			// 표기선박코드 Value 세팅									
			for (let i = 0; i < ds_certidetail.getRowCount(); i++) {		
				if (ds_certidetail.getCellData(i, "choice") == "T") {						
					if (rd_selTsVsslCd.getValue() == 'F') {
						ds_certicommon.setCellData(0, "inscrpVsslCd", ds_certidetail.getCellData(i, "vsslCdFrom"));
						break;
					} else if(rd_selTsVsslCd.getValue() == 'T') {
						ds_certicommon.setCellData(0, "inscrpVsslCd", ds_certidetail.getCellData(i, "vsslCdTo"));
						break;				
					}	
				}				
			}		
			
			// 표기항차코드 Value 세팅									
			for (let i = 0; i < ds_certidetail.getRowCount(); i++) {		
				if (ds_certidetail.getCellData(i, "choice") == "T") {						
					if (rd_selTsVsslCd.getValue() == 'F') {
						ds_certicommon.setCellData(0, "inscrpPortcnt", ds_certidetail.getCellData(i, "portcntFrom"));
						break;
					} else if(rd_selTsVsslCd.getValue() == 'T') {
						ds_certicommon.setCellData(0, "inscrpPortcnt", ds_certidetail.getCellData(i, "portcntTo"));
						break;				
					}	
				}				
			}				
	
			// ??
			// 01 : 원화확정, 02 : 외화확정, 03 : 원화외화 확정 - 환종 확정은 계약요율의 근거가 됨(채권관리 시 필요)
			if (ds_certicommon.getCellData(0, "taxnClsCd") == '01' || ds_certicommon.getCellData(0, "taxnClsCd") == '04') {
				ds_certicommon.setCellData(0, "bilgAmt", Number(ed_spplyAmt.getValue()) + Number(ed_vatAmt.getValue()));
				ds_certicommon.setCellData(0, "wcrcDcsnClsCd", '01');		// 원화확정구분코드
				ds_certicommon.setCellData(0, "crcCd", 'KRW');			
	
			} else {				
				// 원화확정구분코드 Value 세팅		 		
				for (let i = 0; i < ds_certidetail.getRowCount(); i++) {		
					if (ds_certidetail.getCellData(i, "choice") == "T") {								
						if (i > 0) {
							if (ds_certidetail.getCellData(i, "crcCd") == ds_certidetail.getCellData(i-1, "crcCd")) {
								if (ds_certidetail.getCellData(i, "crcCd") == "KRW") {
									ds_certicommon.setCellData(0, "wcrcDcsnClsCd", '01');
								} else if (ds_certidetail.getCellData(i, "crcCd") == "USD") {
									ds_certicommon.setCellData(0, "wcrcDcsnClsCd", '02');
								} 	
							} else {
								ds_certicommon.setCellData(0, "wcrcDcsnClsCd", '03');
								break;						
							}
						} else {
							if(ds_certidetail.getCellData(i, "crcCd") == "KRW") {		
								ds_certicommon.setCellData(0, "wcrcDcsnClsCd", '01');
							} else {
								ds_certicommon.setCellData(0, "wcrcDcsnClsCd", '02');
							}								
						}		
					}
				}				
				
				// 청구금액, 외화청구금액, 청구금액외화 Value 세팅		 		
				let bilgAmt     = 0;	
				let fcrcBilgAmt = 0;
				let bilgAmtFcrc = 0;
						
				for (let i = 0; i < ds_certidetail.getRowCount(); i++) {		
					if (ds_certidetail.getCellData(i, "choice") == "T") {								
						if (ds_certidetail.getCellData(i, "crcCd") == "KRW") {
							bilgAmt += Number(ds_certidetail.getCellData(i, "spplyAmt"));
							ds_certicommon.setCellData(0, "bilgAmt", bilgAmt);
						} else if (ds_certidetail.getCellData(i, "crcCd") == "USD") {
							fcrcBilgAmt += Number(ds_certidetail.getCellData(i, "spplyAmt"));
							bilgAmtFcrc += Number(ds_certidetail.getCellData(i, "spplyAmtFcrc"));
							ds_certicommon.setCellData(0, "fcrcBilgAmt", fcrcBilgAmt);
							ds_certicommon.setCellData(0, "bilgAmtFcrc", bilgAmtFcrc);
						}		
					}
				}						
				
			}	
			
			// EDI전송구분
			if (rd_ediSndTrgtYn.getValue() == 1) {
				ds_certicommon.setCellData(0, "ediSndTrgtYn", 1);			
				ds_certicommon.setCellData(0, "ediSndClsCd", "0");
				
				for (let i = 0; i < ds_certidetail.getRowCount(); i++) {		
					ds_certidetail.setCellData(i, "ediSndTrgtYn", 1);			
					ds_certidetail.setCellData(i, "ediSndClsCd", "0");
				}			
				
			}	
			
			/** TODO: submission에서 dataset action을 all로 해야해서 js에서 처리 불가능
	   		ds_certidetail.UseChangeInfo = "false";
	   		ds_certicommon.UseChangeInfo = "false";		
			*/
			
			if (separation == 'true') {
				scwin.f_SaveCertiSeparation();
			} else {
				// 신규 입력
		    	if ( scwin.addflag == "REG" ) {
			       	sbm_certi_save.action = "/ds.fs.bilg.bilg.RegistCertiCMD.do";
				// 수정
		      	} else if (scwin.addflag == "" || scwin.addflag == "MOD"){
			       	sbm_certi_save.action = "/ds.fs.bilg.bilg.UpdateCertiCMD.do";
				}
				
			    $c.sbm.execute(sbm_certi_save);
	  		}
		}
  	}

  	//-------------------------------------------------------------------------
  	// 분리저장
 	//-------------------------------------------------------------------------
  	scwin.f_SaveCertiSeparation = function () {
       	sbm_certiseparation_save.action = "/ds.fs.bilg.bilg.SaveCertiSeparationCMD.do";
		$c.sbm.execute(sbm_certiseparation_save);
  	}

  	//-------------------------------------------------------------------------
  	// 신규
  	//-------------------------------------------------------------------------
  	scwin.f_Create = function () {
		//f_ClearCertiCondition();
		scwin.addflag = "REG";
		scwin.f_ClearCerti();
   		$c.gus.cfEnableKeyData();
  	}
  	
  	//-------------------------------------------------------------------------
  	// 조회조건 Clear
  	//-------------------------------------------------------------------------  	
  	scwin.f_ClearCertiCondition = function () {
		/* TODO: 초기화는 화면개발자와 상의 해봐야 할 듯 
  		let skipArr = new Array(7);
  		skipArr[0] = ed_bilgLodeptCd;
  		skipArr[1] = txt_bilgLodeptNm;
  		skipArr[2] = ed_bilgClntNo;
  		skipArr[3] = txt_bilgClntNm;
  		skipArr[4] = ed_lineCd;
  		skipArr[5] = ed_qryConDtFm;
  		skipArr[6] = ed_qryConDtTo;
		scwin.f_ClearData(ed_bilgLodeptCd, ed_offWrkPlCd, skipArr);
		*/
  	}
  	
  	//-------------------------------------------------------------------------
  	// 거래명세서 공통정보 ,상세정보 Clear
  	//-------------------------------------------------------------------------  	  	
  	scwin.f_ClearCerti = function () {
		/* TODO: 초기화는 화면개발자와 상의 해봐야 할 듯 
  		let skipArr = new Array(3);  
  		skipArr[0] = ed_confirmDt;
  		skipArr[1] = ed_arDepPortDt;
  		skipArr[2] = ed_bilgIntendDt;  		
  		scwin.f_ClearData(ed_certiNo, ed_totAmt, skipArr);
  		ds_certicommon.removeAll();
  		ds_certidetail.removeAll();
		tbx_totalRows.setValue(0); 
		*/	
  	}
  	
  	//-------------------------------------------------------------------------
  	// Clear 처리 함수
  	//-------------------------------------------------------------------------  	  	  	
  	scwin.f_ClearData = function (fstObj, lstObj, skipArr) {
		/* TODO: 초기화는 화면개발자와 상의 해봐야 할 듯
  		let fstIdx = fstObj.sourceIndex;
  		let lstIdx = lstObj.sourceIndex;
  		let ynSkip;
		let CLSID_EMEDIT = "<%=DGauceCLSID.EMEDIT%>";  		
  		
  		if (skipArr == null) skipArr = new Array();
  		for (var i=fstIdx;i<=lstIdx;i++){
  			ynSkip	= 'N';
  			
  			for(var j=0; j<skipArr.length;j++){
  				if (skipArr[j].id == document.all.item(i).id) {
  					ynSkip ='Y';
  					break;
  				}
  			}
  			if (ynSkip =='Y') continue;
			if (document.all.item(i).tagName == 'OBJECT' ){
				if(document.all.item(i).classid == CLSID_EMEDIT){
  					document.all.item(i).text = '';  				
  				} else {
  					document.all.item(i).value = '';  				  				
  				}	
  			}	
  			if (document.all.item(i).tagName == 'INPUT' &&
  				(document.all.item(i).type == 'text' ||
  			     document.all.item(i).type == 'hidden' ||
  				 document.all.item(i).type == 'password')) {
  				 document.all.item(i).value = '';
  			}
  		}
		*/
  	}

  	//-------------------------------------------------------------------------
  	// 삭제
  	//-------------------------------------------------------------------------
  	scwin.f_Delete = async function () {
		if (ds_certidetail.getRowCount() < 1) {
			$c.gus.cfAlertMsg(MSG_CM_WRN_004, ["DATA"]);
			return;			
		}
		
        if (ed_certiNo.getValue() == "") {
		    $c.gus.cfAlertMsg(MSG_CM_WRN_004,["CERTI-NO"]);
			return;			        
        }
		
		let ret;
		
        if (scwin.pgmId == "fs_202_04_01b.jsp" && ed_ediSndDt.getValue() != "") {
			ret = await $c.win.confirm(MSG_FS_WRN_018);
	   		if (ret) {
				/** TODO: submission에서 dataset action을 all로 해야해서 js에서 처리 불가능 ds_certicommon.UseChangeInfo = "False"; */			
				ds_certicommon.setCellData(0, "certiNo", ed_certiNo.getValue());
	
				scwin.delflag = "DEL";
	
	       		sbm_certi_save.action = "/ds.fs.bilg.bilg.DeleteCertiCMD.do";
	   			$c.sbm.execute(sbm_certi_save);
	
	    	}        
        } else {
			ret = await $c.win.confirm(MSG_CM_CRM_004);
	   		if (ret) {
				/** TODO: submission에서 dataset action을 all로 해야해서 js에서 처리 불가능 ds_certicommon.UseChangeInfo = "False"; */
				ds_certicommon.setCellData(0, "certiNo", ed_certiNo.getValue());
	
				scwin.delflag = "DEL";
	
	       		sbm_certi_save.action = "/ds.fs.bilg.bilg.DeleteCertiCMD.do";
	   			$c.sbm.execute(sbm_certi_save);
	
	    	}
	    }	
  	}
  	
  	//-------------------------------------------------------------------------
    // 전자세금계산서 거래처관리 화면으로 이동
    //  : 공통으로 사용
    //-------------------------------------------------------------------------
    scwin.f_regstEmail = function () {
    	let fileURL = "/ui/ac/fi/stdinfomgnt/fi_100_01_03b.xml";
    	let tabTitle = "전자세금계산서거래처관리 ";
		let paramObj = {};
	    $c.win.openMenu(tabTitle, fileURL, "fi_100_01_03b.jsp", paramObj);
    }
	
  	//-------------------------------------------------------------------------
  	// 팝업창 처리
  	//-------------------------------------------------------------------------
	scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch, pUdcCompObj) {
	  	// 선언부
		let rtnList  = new Array();  // 공통POP-UP -> 요청화면 
		let clntNo   = ed_bilgClntNo.getValue();		
		let param;
		let param1;
		let param2;
		
		switch (disGubun) {
			case 1:
				// 청구부서코드팝업(selectId: retrieveOpDeptCdInfo)			
				rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_1_callbackFunc,pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null,null);
				break;		
			
	  		case 2:  			
				//청구처코드팝업(selectId: retrieveClntInfo)
				rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_2_callbackFunc,pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null,null);	  			
				break;

			// 오더코드 팝업			
	  		case 3:  		
				//rtnList = cfCommonPopUp('',pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null);	  				  			
				//cfSetReturnValue(rtnList, ed_qryConCd, txt_qryConNm);  // 오더코드, 오더명
				break;

			// 품명코드 팝업(selectId: retrieveCommInfo)			
	  		case 4:
				rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_4_callbackFunc,pCode.trim(),pName,pClose,null,null,null,null,',,4,,',null,null,null,null,null,pAllSearch,'품명,품명코드,품명', null);	  				  			
				break;

			// 화종코드 팝업(selectId: retrieveKcgInfo)			
	  		case 5:
				rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_5_callbackFunc,pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null,null);	  				  			
				break;

			// 라인코드 팝업(selectId: retrieveLineInfo)		
	  		case 6:
				rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_6_callbackFunc,pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null,null);	  				  			
				break;

			// 선박코드 팝업(selectId: retrieveVsslCdInfo) 			
	  		case 7:
				rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_7_callbackFunc,pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null,null);	  				  			
				break;
				
			// 작업장코드 팝업(selectId: retrieveWrkPlInfo)		
	  		case 8:
				rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_8_callbackFunc,pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null,null);	  				  			
				break;
				
			// 작업장코드 팝업(selectId: retrieveWrkPlInfo)			
	  		case 9:
				rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_9_callbackFunc,pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null,null);	  				  			
				break;
				
			// B/L코드 팝업(selectId: retrieveBlNoList)		
	  		case 10:
				rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_10_callbackFunc,pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null,null);	  				  			
				break;
				
			// 품명코드 팝업(selectId: retrieveCommInfo)	
	  		case 11:
		        param = "2,4,,,"+"";
				parma1 = "";
				param2 = ed_qryConCd2.getValue();
				//pClose = "T";
				pAllSearch = "F";
		
				rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_11_callbackFunc	
										,parma1
										,param2	
										,'T'		
										,'3'
										,'품목／품명코드,품목／품명,구분'
										,'120,170,70'
										,'4,5,6,7,8,9,10'
										,param
										,'440'	
										,'500'	
										,null		
										,null
										,null
										,null
										,'품목／품명,품목／품명코드,품목／품명'
									    ,null);		
				break;
				
			// 화종코드 팝업(selectId: retrieveKcgInfo)		
	  		case 12:
				rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_12_callbackFunc,pCode.trim(),pName,pClose,null,null,null,null,'1',null,null,null,null,null,pAllSearch,null,null);	  				  			
				break;																			

			// 품목코드 팝업(selectId: retrieveCommInfo)
	  		case 13:
		        param = "2,4,,,"+"";
				parma1 = "";
				param2 = ed_qryConCd2.getValue();
				//pClose = "T";
				pAllSearch = "F";
		
				rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_13_callbackFunc
										,parma1
										,param2	
										,'T'		
										,'3'
										,'품목／품명코드,품목／품명,구분'
										,'120,170,70'
										,'4,5,6,7,8,9,10'
										,param
										,'440'	
										,'500'	
										,null		
										,null
										,null
										,null
										,'품목／품명,품목／품명코드,품목／품명'
									    ,null);		
				break;																			

			// CNTR-NO코드 팝업(selectId: retrieveConteinerNo)	
	  		case 14:  		
				rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_14_callbackFunc,pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null,null);	  				  			
				break;

			// 권역코드 팝업(selectId: retrieveDistrictList)		
	  		case 15:  		
				rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_15_callbackFunc,pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null,null);	  				  			
				break;
				
			// 권역코드 팝업(selectId: retrieveDistrictList)		
	  		case 16:  		
				rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_16_callbackFunc,pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null,null);	  				  			
				break;				

			// CNTR-NO코드 팝업(selectId: retrieveConteinerNo)		
	  		case 17:  		
				rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_17_callbackFunc,pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null,null);	  				  			
				break;

			// 청구처코드팝업(selectId: retrieveClntInfo)		
	  		case 18:  			
				rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_18_callbackFunc,			//pSelectID
									pCode,							//pCode
									pName,							//pName
									pClose,							//pWinCloseTF
									'9',							//pDispCnt
									"거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,",							//pTitle
									'100,100,0,120,100,0,100,100,100,0',							//pWidth
									"3,10",							//pHidden
									",,CTRT",						//pWhere
									'800',							//pW
									'600',							//pH
									null,							//pTop
									null,							//pLeft
  									null,							//pExistTF - 중복체크여부	("F")
  									null,							//pAllSearchTF - 전체검색허용여부	("F")
  									"청구 거래처,거래처코드,거래처명",	//pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  									null,							//Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
									null
  									); 
				break;
				
			// 매출부서코드팝업(selectId: retrieveOpDeptCdInfo)			
			case 19:
				rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_19_callbackFunc,pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null,null);
				break;	
				
	  		// 등록자(selectId: retrieveUserInfo)
			case 20:
	  			rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_20_callbackFunc	// XML상의 SELECT ID	
	  									,pCode					// 화면에서의 ??? Code Element의	Value
	  									,pName					// 화면에서의 ??? Name Element의	Value
	  									,pClose					// 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
	  									,null					// 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
	  									,null					// Title순서	
	  									,null					// 보여주는 각 컬럼들의 폭	
	  									,null					// 컬럼중에서 숨기는	컬럼 지정	
	  									,null					// SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
	  									,null					// POP-UP뛰을때 원도우의	사용자 정의	폭
	  									,null					// POP-UP뛰을때 우도우의	사용자 정의	높이	
	  									,null					// 윈도우 위치 Y좌표	
	  									,null					// 윈도우 위치 X좌표
	  									,null					// 중복체크여부	("F")
	  									,pAllSearch					// 전체검색허용여부	("F")
	  									,"등록자,사용자ID,사용자명"				// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
										,null
	  									);
  				break;	
  				  				
	  		// 수정자(selectId: retrieveUserInfo)
			case 21:
	  			rtnList = await pUdcCompObj.cfCommonPopUp(scwin.f_openCommonPopUp_21_callbackFunc	// XML상의 SELECT ID	
	  									,pCode					// 화면에서의 ??? Code Element의	Value
	  									,pName					// 화면에서의 ??? Name Element의	Value
	  									,pClose					// 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
	  									,null					// 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
	  									,null					// Title순서	
	  									,null					// 보여주는 각 컬럼들의 폭	
	  									,null					// 컬럼중에서 숨기는	컬럼 지정	
	  									,null					// SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
	  									,null					// POP-UP뛰을때 원도우의	사용자 정의	폭
	  									,null					// POP-UP뛰을때 우도우의	사용자 정의	높이	
	  									,null					// 윈도우 위치 Y좌표	
	  									,null					// 윈도우 위치 X좌표
	  									,null					// 중복체크여부	("F")
	  									,pAllSearch					// 전체검색허용여부	("F")
	  									,"수정자,사용자ID,사용자명"				// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
										,null
	  									);
  				break;	

	  		default:
	  			break;
		}
	}
	
	//-------------------------------------------------------------------------
	// f_openCommonPopUp 1번 팝업 callback
	//-------------------------------------------------------------------------
	scwin.f_openCommonPopUp_1_callbackFunc = async function (rtnList) {
		if ( rtnList != null && rtnList[0] != "N/A") {
	        // 거래명세서 유형 가져오기
			await scwin.f_RetrieveFmalPattern();	
	        // 상세 거래명세서 유형 가져오기
	        scwin.f_RetrieveDtlFmalPattern();	        						
		} else {
			$c.gus.cfSetReturnValue(rtnList, ed_bilgLodeptCd, txt_bilgLodeptNm);  // 청구부서코드, 청구부서명
		}
	}
	
	//-------------------------------------------------------------------------
	// f_openCommonPopUp 2번 팝업 callback
	//-------------------------------------------------------------------------
	scwin.f_openCommonPopUp_2_callbackFunc = function (rtnList) {
		if (rtnList != null) {
			if ( rtnList[0] == '100002' || rtnList[0] == '100003' ) {
				// 특정거래명세유형 세팅
				scwin.f_SetFmalPattern('B1');
			} else if (rtnList[0] == '100001') {
				scwin.f_SetFmalPattern('A4');				
			}
			
			$c.gus.cfSetReturnValue(rtnList, ed_bilgClntNo, txt_bilgClntNm);  // 청구처코드, 청구처명
		}
	}
	
	//-------------------------------------------------------------------------
	// f_openCommonPopUp 4번 팝업 callback
	//-------------------------------------------------------------------------
	scwin.f_openCommonPopUp_4_callbackFunc = function (rtnList) {
		if (rtnList != null && rtnList[0] != "N/A") {
			$c.gus.cfSetReturnValue(rtnList, ed_qryConCd, txt_qryConNm);  // 품명코드, 품명명
		}
	}
	
	//-------------------------------------------------------------------------
	// f_openCommonPopUp 5번 팝업 callback
	//-------------------------------------------------------------------------
	scwin.f_openCommonPopUp_5_callbackFunc = function (rtnList) {
		if (rtnList != null && rtnList[0] != "N/A") {
			$c.gus.cfSetReturnValue(rtnList, ed_kcgCd, txt_kcgNm);  //화종코드, 화종명
		}		
	}
	
	//-------------------------------------------------------------------------
	// f_openCommonPopUp 6번 팝업 callback
	//-------------------------------------------------------------------------
	scwin.f_openCommonPopUp_6_callbackFunc = function (rtnList) {
		if (rtnList != null && rtnList[0] != "N/A") {
			$c.gus.cfSetReturnValue(rtnList, ed_lineCd, txt_lineNm);  // 라인코드, 라인명				
	        //매출항목 가져오기
			scwin.f_RetrieveFormulasellitem(ed_lineCd.text);	
		}
	}
	
	//-------------------------------------------------------------------------
	// f_openCommonPopUp 7번 팝업 callback
	//-------------------------------------------------------------------------
	scwin.f_openCommonPopUp_7_callbackFunc = function (rtnList) {
		if (rtnList != null && rtnList[0] != "N/A") {
			$c.gus.cfSetReturnValue(rtnList, ed_vsslCd, txt_vsslNm);  // 선박코드, 선박명
		}	
	}
	
	//-------------------------------------------------------------------------
	// f_openCommonPopUp 8번 팝업 callback
	//-------------------------------------------------------------------------
	scwin.f_openCommonPopUp_8_callbackFunc = function (rtnList) {
		if (rtnList != null && rtnList[0] != "N/A") {
			$c.gus.cfSetReturnValue(rtnList, ed_onWrkPlCd, txt_onWrkPlNm);  // 작업장코드, 작업장명
		}
	}
	
	//-------------------------------------------------------------------------
	// f_openCommonPopUp 9번 팝업 callback
	//-------------------------------------------------------------------------
	scwin.f_openCommonPopUp_9_callbackFunc = function (rtnList) {
		if (rtnList != null && rtnList[0] != "N/A") {
			$c.gus.cfSetReturnValue(rtnList, ed_offWrkPlCd, txt_offWrkPlNm);  // 작업장코드, 작업장명
		}
	}
	
	//-------------------------------------------------------------------------
	// f_openCommonPopUp 10번 팝업 callback
	//-------------------------------------------------------------------------
	scwin.f_openCommonPopUp_10_callbackFunc = function (rtnList) {
		//cfSetReturnValue(rtnList, ed_qryConCd3, txt_qryConNm3);  // B/L코드, B/L명				
		if(rtnList != undefined && rtnList != null && rtnList[0] != "N/A"){
			$c.gus.cfSetValue(ed_qryConCd3, rtnList[1]);
			$c.gus.cfSetHiddenValue(ed_qryConCd3, rtnList[1]);
		}
	}
	
	//-------------------------------------------------------------------------
	// f_openCommonPopUp 11번 팝업 callback
	//-------------------------------------------------------------------------
	scwin.f_openCommonPopUp_11_callbackFunc = function (rtnList) {
		if (rtnList != null && rtnList[0] != "N/A") {
			$c.gus.cfSetReturnValue(rtnList, ed_qryConCd2, txt_qryConNm2);  // 품명코드, 품명명
		}
	}
	
	//-------------------------------------------------------------------------
	// f_openCommonPopUp 12번 팝업 callback
	//-------------------------------------------------------------------------
	scwin.f_openCommonPopUp_12_callbackFunc = function (rtnList) {
		if (rtnList != null && rtnList[0] != "N/A") {
			$c.gus.cfSetReturnValue(rtnList, ed_qryConCd2, txt_qryConNm2);  // 화종코드, 화종명
		}
	}

	//-------------------------------------------------------------------------
	// f_openCommonPopUp 13번 팝업 callback
	//-------------------------------------------------------------------------	
	scwin.f_openCommonPopUp_13_callbackFunc = function (rtnList) {
		if (rtnList != null && rtnList[0] != "N/A") {
			$c.gus.cfSetReturnValue(rtnList, ed_qryConCd2, txt_qryConNm2);  // 품목코드, 품목명
		}
	}
	
	//-------------------------------------------------------------------------
	// f_openCommonPopUp 14번 팝업 callback
	//-------------------------------------------------------------------------	
	scwin.f_openCommonPopUp_14_callbackFunc = function (rtnList) {
		if (rtnList != null && rtnList[0] != "N/A") {
			$c.gus.cfSetReturnValue(rtnList, ed_qryConCd, txt_qryConNm);  // CNTR-NO코드, CNTR-NO명
		}
	}
	
	//-------------------------------------------------------------------------
	// f_openCommonPopUp 15번 팝업 callback
	//-------------------------------------------------------------------------	
	scwin.f_openCommonPopUp_15_callbackFunc = function (rtnList) {
		if (rtnList != null && rtnList[0] != "N/A") {
			$c.gus.cfSetReturnValue(rtnList, ed_onWrkPlCd, txt_onWrkPlNm);  // 권역코드, 권역명
		}
	}
	
	//-------------------------------------------------------------------------
	// f_openCommonPopUp 16번 팝업 callback
	//-------------------------------------------------------------------------
	scwin.f_openCommonPopUp_16_callbackFunc = function (rtnList) {					
		if (rtnList != null && rtnList[0] != "N/A") {
			$c.gus.cfSetReturnValue(rtnList, ed_offWrkPlCd, txt_offWrkPlNm);  // 권역코드, 권역명
		}
	}

	//-------------------------------------------------------------------------
	// f_openCommonPopUp 17번 팝업 callback
	//-------------------------------------------------------------------------		
	scwin.f_openCommonPopUp_17_callbackFunc = function (rtnList) {		
		if (rtnList != null && rtnList[0] != "N/A") {
			$c.gus.cfSetReturnValue(rtnList, ed_qryConCd3, txt_qryConNm3);  // CNTR-NO코드, CNTR-NO명
		}
	}

	//-------------------------------------------------------------------------
	// f_openCommonPopUp 18번 팝업 callback
	//-------------------------------------------------------------------------		
	scwin.f_openCommonPopUp_18_callbackFunc = function (rtnList) {
		if (rtnList != undefined && rtnList != null && rtnList[0] != "N/A") {
			$c.gus.cfSetReturnValue(rtnList, ed_lineCd, txt_lineNm);  // 청구처코드, 청구처명
			if (rtnList[0] == '100002' || rtnList[0] == '100003') {
				//특정거래명세유형 세팅
				scwin.f_SetFmalPattern('B1');
			} else if(rtnList[0] == '100001'){
				scwin.f_SetFmalPattern('A4');				
			}
		}
	}
	
	//-------------------------------------------------------------------------
	// f_openCommonPopUp 19번 팝업 callback
	//-------------------------------------------------------------------------
	scwin.f_openCommonPopUp_19_callbackFunc = function (rtnList) {
		if (rtnList != null && rtnList[0] != "N/A") {
			$c.gus.cfSetReturnValue(rtnList, ed_sellLodeptCd, txt_sellLodeptNm);  // 매출부서코드, 매출부서명
		}
	}
	
	//-------------------------------------------------------------------------
	// f_openCommonPopUp 20번 팝업 callback
	//-------------------------------------------------------------------------
	scwin.f_openCommonPopUp_20_callbackFunc = function (rtnList) {
		if (rtnList != null && rtnList[0] != "N/A") {
			$c.gus.cfSetReturnValue(rtnList, ed_regId, txt_regNm);
		}
	}

	//-------------------------------------------------------------------------
	// f_openCommonPopUp 21번 팝업 callback
	//-------------------------------------------------------------------------	
	scwin.f_openCommonPopUp_21_callbackFunc = function (rtnList) {
		if (rtnList != null && rtnList[0] != "N/A") {
			$c.gus.cfSetReturnValue(rtnList, ed_modId, txt_modNm);
		}
	}
	
  	//-------------------------------------------------------------------------
  	//  거래명세서 팝업
  	//-------------------------------------------------------------------------
  	scwin.f_CertiNoPopUp = function (certi) {
		let strPath;
		
		if (certi == 'V') {
	  		strPath = "/ui/ds/fs/bilg/fs_204_02_51p.xml";
	  	} else if(certi == 'C'){
	  		strPath = "/ui/ds/fs/bilg/fs_204_02_52p.xml";
	  	} else if(certi == 'B'){
	  		strPath = "/ui/ds/fs/bilg/fs_204_02_53p.xml";
	  	}		  		

	  	let p_bilgLodeptCd = ed_bilgLodeptCd.getValue();
	  	let p_bilgLodeptNm = txt_bilgLodeptNm.getValue();	  	
	  	let p_pgmId        = scwin.pgmId;	  	
		let	objParm	       = { 
		    callbackFn  : scwin.CertiNoPopUp_callback,
		    arrParm     : [
				p_bilgLodeptCd, 
				p_bilgLodeptNm, 
				p_pgmId
			],
		};

		if (ed_bilgLodeptCd.getValue() == "") {
			$c.gus.cfAlertMsg(MSG_FS_WRN_011);
			ed_bilgLodeptCd.focus();
			return;
		}	
		
	    let opts = {
	          id        : "certiNoPopUp"
	        , popupName : "거래명세서 팝업"
	        , modal     : true
	        , type      : "browserPopup"
	        , width     : 830
	        , height    : 570
			, scrollbars: true
	        , title     : "거래명세서 팝업"
	    };
		
	    $c.win.openPopup(strPath, opts, objParm);

	}
	
	//-------------------------------------------------------------------------
  	//  거래명세서 팝업 callback
  	//-------------------------------------------------------------------------
	scwin.CertiNoPopUp_callback = function (returnValue) {
		if (returnValue != null) {
			ed_certiNo.setValue(returnValue);
			dtl_oldCertiNo.setValue(returnValue);			
			scwin.f_CertiRetrieve('true');
		}
	}
	
	//-------------------------------------------------------------------------
  	//  BillTitle 팝업
  	//-------------------------------------------------------------------------
    scwin.f_BillTitlePopUp = function (transCargoClsCd) {
  	
		let strPath = "/ui/ds/fs/bilg/fs_204_02_59p.xml";		  		

	  	let p_bilgLodeptCd = ed_bilgLodeptCd.getValue();
	  	let p_bilgLodeptNm = txt_bilgLodeptNm.getValue();	  	
		
		let	objParm	       = { 
		    callbackFn  : scwin.BillTitlePopUp_callback,
		    arrParm     : [
				p_bilgLodeptCd,
				p_bilgLodeptNm, 
				transCargoClsCd, 
				ds_certicommon.getCellData(0, "lineCd"), 
				'03', 
				dtl_fmlaPatternCd.getValue()
			],
		};
		
		if (ed_bilgLodeptCd.getValue() == "") {
			$c.gus.cfAlertMsg(MSG_FS_WRN_011);
			ed_bilgLodeptCd.focus();
			return;
		}
		if (dtl_fmlaPatternCd.getValue() == "") {
			$c.gus.cfAlertMsg(MSG_FS_WRN_019);
			dtl_fmlaPatternCd.focus();
			return;
		}
		
		let opts = {
			          id        : "billTitlePopUp"
			        , popupName : "BillTitle 팝업"
			        , modal     : true
			        , type      : "browserPopup"
			        , width     : 730
			        , height    : 570
					, scrollbars: true
			        , title     : "BillTitle 팝업"
			    };
				
	   $c.win.openPopup(strPath, opts, objParm);
	}
	
	//-------------------------------------------------------------------------
  	//  BillTitle 팝업 callback
  	//-------------------------------------------------------------------------
	scwin.BillTitlePopUp_callback = function (returnValue) {
		if (returnValue != null) {
			dtl_billTitleNm.setValue(returnValue);
		}
	}
	
	//-------------------------------------------------------------------------
  	//  BillTitle 조회
  	//-------------------------------------------------------------------------
	scwin.f_retrieveBillTitle = function () {
  		
  		if ($c.gus.cfIsNull(ed_titleSeq.getValue())) {
	    	return;
	    }
		
  		if (!$c.gus.cfValidate([ed_bilgLodeptCd])) {
	    	return;
	    }
		
     	let colInfoArr = ["bilgLodeptCd", "bizDivCd", "titleSeq", "fmlaClsCd", "fmlaPatternCd", "lineCd"];
		let dataArr = [];
	 	ds_certiBillTitleList_con.setArray({"columnInfo": colInfoArr, "data": dataArr});
 		ds_certiBillTitleList_con.insertRow();
		ds_certiBillTitleList_con.setCellData(0, "bilgLodeptCd", ed_bilgLodeptCd.getValue());
     	ds_certiBillTitleList_con.setCellData(0, "bizDivCd", "");
     	ds_certiBillTitleList_con.setCellData(0, "titleSeq", ed_titleSeq.getValue());
     	ds_certiBillTitleList_con.setCellData(0, "fmlaClsCd", '03');
     	ds_certiBillTitleList_con.setCellData(0, "fmlaPatternCd", dtl_fmlaPatternCd.getValue());
     	ds_certiBillTitleList_con.setCellData(0, "lineCd", ds_certicommon.getCellDat(0, "lineCd"));
     	
   		sbm_certiBillTitleList_retrieve.action = "/ds.fs.bilg.bilgcomncdmgnt.RetrieveCertiBillTitleListCMD.do";
   		$c.sbm.execute(sbm_certiBillTitleList_retrieve);

	}

  	//-------------------------------------------------------------------------
  	// 금액계산
  	//-------------------------------------------------------------------------
	scwin.f_SumAmt = function () {
		let	spplyAmtFcrc 	= 0;	
		let	spplyAmt     	= 0;
		let	totAmt       	= 0;
		let	fireInsrRateAmt = 0;			
		let	totVol = 0;

		for (i = 0; i < ds_certidetail.getRowCount(); i++) {
			if (ds_certidetail.getCellData(i, "choice") == "T") {
				spplyAmtFcrc += Number(ds_certidetail.getCellData(i, "spplyAmtFcrc"));			
				if (ds_certidetail.getCellData(i, "sellYn") == 0) {
					fireInsrRateAmt += Number(ds_certidetail.getCellData(i, "spplyAmt"));				
				} else {
					spplyAmt += Number(ds_certidetail.getCellData(i, "spplyAmt"));				
				}
				totAmt += Number(ds_certidetail.getCellData(i, "totAmt"));
				totVol += Number(ds_certidetail.getCellData(i, "sellVol"));				
			}
            scwin.f_PostSumAmt(i);
		}
		
		spplyAmtFcrc = Math.round(spplyAmtFcrc*100)/100;  // 소수점 셋째 자리에서 반올림처리 (53.69*120 결과가 6442.79999999로 나오는 경우에 반올림 처리 해 줄 수있도록 함 )
		ed_spplyAmtFcrc.setValue(spplyAmtFcrc);		
		ed_spplyAmt.setValue(spplyAmt);
		ed_totAmt2.setValue(spplyAmt);
		ed_fireInsrRateAmt.setValue(fireInsrRateAmt);
		ed_totAmt.setValue(totAmt);
		ed_vatAmt.setValue(totAmt - spplyAmt - fireInsrRateAmt);
		
		if(ds_certicommon.getCellData(1, "crcCd") == 'USD'){
			ed_diffAmt.setValue(spplyAmt - (Math.floor(Number(ds_certidetail.getCellData(0, "adptExchRt")) * spplyAmtFcrc)));					
		} else {
			ed_diffAmt.setValue(0);
		}	
		
		if(ed_vatAmt.getValue() == 0){
			ed_vatAmtDiff.setValue(0);
		} else {
			ed_vatAmtDiff.setValue((totAmt - spplyAmt - fireInsrRateAmt) - (Math.floor((spplyAmt * 0.1))));
		}	
		
		ed_diffVolAmt.setValue(spplyAmt - (Math.round(Number(ds_certidetail.getCellData(0, "sellUpr")) * totVol)));					
	}
	
  	//-------------------------------------------------------------------------
  	// 조회조건에 따른 팝업창 띄우기
  	//-------------------------------------------------------------------------	
	scwin.f_ChangPopUp = function (flag) {	
		if (flag == "1") {
			if (lc_qryConKnd2.getValue() == "품명") {
				scwin.f_chkOpenCommonPopUp(txt_qryConNm2, ed_qryConCd2, 11, false);			
			} else if (lc_qryConKnd2.getValue() == "품목") {
				scwin.f_chkOpenCommonPopUp(txt_qryConNm2, ed_qryConCd2, 13, false);			
			} else if (lc_qryConKnd2.getValue() == "화종") {
				scwin.f_chkOpenCommonPopUp(txt_qryConNm2, ed_qryConCd2, 12, false);			
			} else if (lc_qryConKnd2.getValue() == "BL") {
				scwin.f_chkOpenCommonPopUp(txt_qryConNm3, ed_qryConCd3, 10, false);			
			} else if (lc_qryConKnd2.getValue() == "CNTR") {
				scwin.f_chkOpenCommonPopUp(txt_qryConNm3, ed_qryConCd3, 17, false);			
			}										
		} else if (flag == "2") {
			if (lc_transDst.getValue() == "권역") {
				scwin.f_chkOpenCommonPopUp(txt_onWrkPlNm, ed_onWrkPlCd, 15, false);			
			} else if (lc_transDst.getValue() == "작업장") {
				scwin.f_chkOpenCommonPopUp(txt_onWrkPlNm, ed_onWrkPlCd, 8, false);			
			}						
		} else if (flag == "3") {
			if(lc_transDst.getValue() == "권역"){
				scwin.f_chkOpenCommonPopUp(txt_offWrkPlNm, ed_offWrkPlCd, 16, false);			
			} else if(lc_transDst.getValue() == "작업장") {
				scwin.f_chkOpenCommonPopUp(txt_offWrkPlNm, ed_offWrkPlCd, 9, false);			
			}			
		}
	}
	
  	//-------------------------------------------------------------------------
  	// 조회조건에 따른 팝업창 띄우기
  	//-------------------------------------------------------------------------	
	scwin.f_QryConPopUp = function (flag) {
		if (flag == "1") {
			if (lc_qryConKnd2.getValue() == "품명") {
				scwin.f_openCommonPopUp(11, ed_qryConCd2.getValue(), txt_qryConNm2.getValue(), 'F', 'F');
			} else if (lc_qryConKnd2.getValue() == "품목") {
				scwin.f_openCommonPopUp(13, ed_qryConCd2.getValue(), txt_qryConNm2.getValue(), 'F', 'F');
			} else if (lc_qryConKnd2.getValue() == "화종") {
				scwin.f_openCommonPopUp(12, ed_qryConCd2.getValue(), txt_qryConNm2.getValue(), 'F', 'F');
			} else if (lc_qryConKnd2.getValue() == "BL") {
				scwin.f_openCommonPopUp(10, ed_qryConCd3.getValue(), txt_qryConNm3.getValue(), 'F', 'F');
			} else if (lc_qryConKnd2.getValue() == "CNTR") {
				scwin.f_openCommonPopUp(17, ed_qryConCd3.getValue(), txt_qryConNm3.getValue(), 'F', 'F');
			}		
		} else if (flag == "2") {
			if (lc_transDst.getValue() == "권역") {
				scwin.f_openCommonPopUp(15, ed_onWrkPlCd.getValue(), txt_onWrkPlNm.getValue(), 'F', 'F');
			} else if (lc_transDst.getValue() == "작업장") {
				scwin.f_openCommonPopUp(8, ed_onWrkPlCd.getValue(), txt_onWrkPlNm.getValue(), 'F', 'F');
			}					
		} else if (flag == "3") {
			if (lc_transDst.getValue() == "권역") {
				scwin.f_openCommonPopUp(16, ed_offWrkPlCd.getValue(), txt_offWrkPlNm.getValue(), 'F', 'F');
			} else if (lc_transDst.getValue() == "작업장") {
				scwin.f_openCommonPopUp(9, ed_offWrkPlCd.getValue(), txt_offWrkPlNm.getValue(), 'F', 'F');
			}					
		} else if (flag == "4") {
			if (lc_gubun.getValue() == "CLNT") {
				scwin.f_openCommonPopUp(18, ed_lineCd.getValue(), txt_lineNm.getValue(), 'F', 'F');
			} else if (lc_gubun.getValue() == "LINE") {
				scwin.f_openCommonPopUp(6, ed_lineCd.getValue(), txt_lineNm.getValue(), 'F', 'F');
			}					
		} else {				
			if (lc_qryConKnd.getValue() == "오더") {
				scwin.f_OrderPopUp();
			} else if (lc_qryConKnd.getValue() == "CNTR") {
				div_qryConKnd3.hide();		
				scwin.f_openCommonPopUp(14, ed_qryConCd.getValue(), txt_qryConNm.getValue(), 'F', 'F');
			} else if (lc_qryConKnd.getValue() == "품명") {
				div_qryConKnd3.hide();		
				scwin.f_openCommonPopUp(4, ed_qryConCd.getValue(), txt_qryConNm.getValue(), 'F', 'F');
			}			
		}	
	}
	
  	//-------------------------------------------------------------------------
	//그리드 높이 늘리기
  	//-------------------------------------------------------------------------	
	scwin.f_grdHeight = function (size) {
		// gr_certidetail.setVisibleRowNum(rowNum); // 이걸 같이 넣어줘야할수도 있어서 넣어 둠	
		gr_certidetail.setGridHeight(size);	
	}
	
  	//-------------------------------------------------------------------------
	//엑셀 다운로드
  	//-------------------------------------------------------------------------		
	scwin.f_downExcelSheet = async function (pgmId) {
		let vObjGrd;
		let sheetTitle;
		let sheetFile;		
	
		let ret = await $c.win.confirm("EXCEL로 다운로드 받으시겠습니까?");
		
		if (ret) {
			const infoArr = [];
			const options = {
			   fileName: "downLoadExcel.xlsx", // [default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
			   sheetName: "",
			   type: "4+8+16"
			};
			vObjGrd = "gr_certidetail";
			if(pgmId == "fs_202_04_01b.jsp") {
				options.sheetName = "수출입 거래명세서 작성";
				options.fileName = "수출입 거래명세서 작성.xls";				
			} else if(pgmId == "fs_202_04_03b.jsp") {
				options.sheetName = "기간매출 거래명세서 작성";						
				options.fileName = "기간매출 거래명세서 작성.xls";				
			} else if(pgmId == "fs_202_04_06b.jsp") {
				options.sheetName = "내수 거래명세서 작성";			
				options.fileName = "내수 거래명세서 작성.xls";				
			} else if(pgmId == "fs_202_05_01b.jsp") {
				options.sheetName = "컨테이너별 CERTI 생성";			
				options.fileName = "컨테이너별 CERTI 생성.xls";				
			} else if(pgmId == "fs_202_05_03b.jsp") {
				options.sheetName = "CERTI 생성";			
				options.fileName = "CERTI 생성.xls";								
			} else if(pgmId == "fs_202_05_05b.jsp") {
				options.sheetName = "기간매출 CERTI 생성";			
				options.fileName = "기간매출 CERTI 생성.xls";								
			}				

			$c.data.downloadGridViewExcel(vObjGrd, options, infoArr);
		}
	}

	//-------------------------------------------------------------------------
	// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
	//-------------------------------------------------------------------------
	scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
		// 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
		if (!$c.gus.cfCanOpenPopup(inObj, pairObj)) {
			if (pairObj.getID == 'txt_lineNm') {
				scwin.f_RetrieveFormulasellitem(ed_lineCd.getValue());
			}		
			return;
		}
		
		// 짝이 되는 오브젝트의 값 제거
		$c.gus.cfClearPairObj(pairObj);
		
		// 검색어 세팅
		let pVal = $c.gus.cfGetValue(inObj);
		        
		// inObj가 코드 필드일 경우 팝업
		if (isCode == null || isCode == true) {
			await scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
		// inObj가 코드명 필드일 경우 팝업
		} else {
			await scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
		}
	}

  	//-------------------------------------------------------------------------
  	//  세금계산서 생성 팝업
  	//-------------------------------------------------------------------------
  	scwin.f_SlipPopUp = function () {
		if (ds_certidetail.getModifiedIndex().length > 0) {
			$c.gus.cfAlertMsg(MSG_FS_WRN_010);
	        return;        
	    }			

		if (scwin.addflag == "MOD") {
  			let strPath = "/ui/ds/fs/bilg/fs_202_06_03p.xml";
			let pram = {};
			
			// TODO: fs_202_06_03p 팝업에서 추후 onpageload 이후 dataset 복사하는 부분 맞춰야 할 것으로 판단 됨.
			if (ds_certicommonsavepost.getRowCount() > 0 && dtl_sellVatNo.getValue() == '') {
				pram.ds_certiCommon = ds_certicommonsavepost.getAllArray().data;
			} else {
				pram.ds_certiCommon = ds_certicommon.getAllArray().data;
			}
			
			pram.certiInscrpSellItemNm = ds_certidetail.getCellData(0, "certiInscrpSellItemNm"); // 사용안하지만 남겨놓음
			
			let	objParm	       = { 
			    callbackFn  : scwin.SlipPopUp_callback,
			    arrParm     : pram
			};
			
			let opts = {
		          id        : "slipPopUp"
		        , popupName : "세금계산서 생성 팝업"
		        , modal     : true
		        , type      : "browserPopup"
		        , width     : 630
		        , height    : 735
		        , title     : "세금계산서 생성 팝업"
		    };
					
			$c.win.openPopup(strPath, opts, objParm);
			
		} else {
			$c.gus.cfAlertMsg(MSG_FS_WRN_002);
			return;
		}	

	}
	
	//-------------------------------------------------------------------------
  	//  세금계산서 생성 팝업 callback
  	//-------------------------------------------------------------------------
	scwin.SlipPopUp_callback = function (returnValue) {
		if (returnValue[0] != undefined) {
			dtl_sellVatNo.setValue(returnValue[0]);
		}
		 
		if (returnValue[1] == "TRUE") {
			scwin.f_CertiRetrieve();
		}
	}
	
  	//-------------------------------------------------------------------------
  	// 상세데이타 조회 후 공통화면 세팅
  	//-------------------------------------------------------------------------
  	scwin.f_SetCertiCommon = function (ds_name) {
		if (dtl_sellVatNo.getValue() != "" || (dtl_upperCertiNo.getValue() != "" && dtl_upperCertiNo.getValue() != '0')) {		
			gr_certidetail.setGridReadOnly(true);
			/* 각 column마다 readonly를 줘서 수정이 된다면 아래와 같이 처리해줘야함.(여기선 어떤 칼럼이 수정가능한지 알 수 없음) 
			const colCnt = gr_certidetail.getTotalCol();
		    for (let i = 0; i < colCnt; i++) {
		        const colId = gr_certidetail.getColumnID(i);
		        gr_transList.setColumnReadOnly(colId, true);
		    }
			*/
			$c.gus.cfDisableBtnOnly([bSave,bDelete]);
		} else {
			gr_certidetail.setGridReadOnly(false);
			$c.gus.cfEnableBtnOnly([bSave,bDelete]);   		    		
		}	
		
	    if (ds_name.getCellData(0, "sellGoodsPatternCd") == "01") {
		   	gr_certidetail.setHeaderValue('column1', 'CNTR-NO');    
	     	gr_certidetail.setColumnVisible('unitCd', false);
	    } else {
			gr_certidetail.setHeaderValue('column1', '품명명');
	    	gr_certidetail.setColumnVisible('unitCd', true);
	    }		

		// 세부 SIZE 값 세팅
		for (let i = 0; i < ds_name.getRowCount(); i++) {		
			if (i > 0) {
				if (ds_name.getCellData(i, "cntrSizCd") == ds_name.getCellData(i-1, "cntrSizCd")) {
					ds_certicommon.setCellData(0, "cntrSizCd", ds_name.getCellData(i, "cntrSizCd"));
				} else {
					ds_certicommon.setCellData(0, "cntrSizCd", '');
					break;
				}		
			} else {
				ds_certicommon.setCellData(0, "cntrSizCd", ds_name.getCellData(i, "cntrSizCd"));
			}					
		}
				
		// 세부 TYPE 값 세팅				
		for (let i = 0; i < ds_name.getRowCount(); i++) {		
			if (i > 0) {
				if (ds_name.getCellData(i, "cntrTypCd") == ds_name.getCellData(i-1, "cntrTypCd")) {
					ds_certicommon.setCellData(0, "cntrTypCd", ds_name.getCellData(i, "cntrTypCd"));
				} else {
					ds_certicommon.setCellData(0, "cntrTypCd", '');
					break;
				}		
			} else {
				ds_certicommon.setCellData(0, "cntrTypCd", ds_name.getCellData(i, "cntrTypCd"));
			}					
		}

		//세부 E/F 값 세팅
		for (let i = 0; i < ds_name.getRowCount(); i++) {		
			if (i > 0) {				
				if (ds_name.getCellData(i, "fullEmptyClsCd") == ds_name.getCellData(i-1, "fullEmptyClsCd")) {
					ds_certicommon.setCellData(0, "fullEmptyClsCd", ds_name.getCellData(i, "fullEmptyClsCd"));
				} else {
					ds_certicommon.setCellData(0, "fullEmptyClsCd", '');
					break;
				}		
			} else {
				ds_certicommon.setCellData(0, "fullEmptyClsCd", ds_name.getCellData(i, "fullEmptyClsCd"));
			}					
		}

		// 세부 환종 값 세팅
		for (let i = 0; i < ds_name.getRowCount(); i++) {		
			if (ds_name.getCellData(i, "crcCd") == 'KRW') {
				ds_certicommon.setCellData(0, "crcCd", 'KRW');
			} else {
				ds_certicommon.setCellData(0, "crcCd", 'USD');
				break;
			}
		}
		
		// 세부 B/L-NO 값 세팅
		for (let i = 0; i < ds_name.getRowCount(); i++) {		
			if (i > 0) {				
				if(ds_name.getCellData(i, "blNo") == ds_name.getCellData(i-1, "blNo")){
					ds_certicommon.setCellData(0, "blNo", ds_name.getCellData(i, "blNo"));
				} else {
					ds_certicommon.setCellData(0, "blNo", '');
					break;
				}		
			} else {
				ds_certicommon.setCellData(0, "blNo", ds_name.getCellData(i, "blNo"));
			}					
		}		
			
		// 세부 입출항일 값 세팅
		for (let i = 0; i < ds_name.getRowCount(); i++) {		
			if (i > 0) {				
				if (ds_name.getCellData(i, "arDepPortDt") == ds_name.getCellData(i-1, "arDepPortDt")) {
					ds_certicommon.setCellData(0, "arDepPortDt", ds_name.getCellData(i, "arDepPortDt"));
				} else {
					ds_certicommon.setCellData(0, "arDepPortDt", '');
					break;
				}		
			} else {
				ds_certicommon.setCellData(0, "arDepPortDt", ds_name.getCellData(i, "arDepPortDt"));
			}					
		}					
			
		dtl_size.setValue(ds_certicommon.getCellData(0, "cntrSizCd") + "/" + ds_certicommon.getCellData(0, "cntrTypCd") + "/" + ds_certicommon.getCellData(0, "fullEmptyClsCd"));
		dtl_crcCd.setValue(ds_certicommon.getCellData(0, "crcCd"));
		ed_adptExchRt.setValue(ds_name.getCellData(0, "adptExchRt"));
		dtl_vsslCd.setValue(ds_name.getCellData(0, "vsslCd"));
		dtl_portcnt.setValue(ds_name.getCellData(0, "portcnt"));
		dtl_blNo.setValue(ds_certicommon.getCellData(0, "blNo"));
		ed_arDepPortDt.setValue(ds_certicommon.getCellData(0, "arDepPortDt"));

		//if(dtl_fmlaPatternCd.BindColVal == "TS"){ 
			//if(rd_selTsVsslCd.CodeValue == 'F'){
				//ed_arDepPortDt.text         = ds_name.getCellData(1, "arDepPortDt");
			//} else if(rd_selTsVsslCd.CodeValue == 'T'){
				//ed_arDepPortDt.text         = ds_name.getCellData(1, "tsArDepPortDt");		
			//}
		//}

		if (rd_selTsVsslCd.getValue() == 'T') {
			if (ed_certiNo.getValue() == "") {		
				dtl_vsslCd.setValue(ds_name.getCellData(0, "vsslCdTo"));
				dtl_portcnt.setValue(ds_name.getCellData(0, "portcntTo"));
			} else {
				dtl_vsslCd.setValue(ds_certicommon.getCellData(0, "inscrpVsslCd"));
				dtl_portcnt.setValue(ds_certicommon.getCellData(0, "inscrpPortcnt"));			
			}
			dtl_FmTsVsslCd.setValue(ds_name.getCellData(0, "vsslCdFrom") + '-' + ds_name.getCellData(0, "portcntFrom"));
			dtl_ToTsVsslCd.setValue(ds_name.getCellData(0, "vsslCdTo") + '-' + ds_name.getCellData(0, "portcntTo"));
		} else {
			if (ed_certiNo.getValue() == "") {				
				dtl_vsslCd.setValue(ds_name.getCellData(0, "vsslCdFrom"));
				dtl_portcnt.setValue(ds_name.getCellData(0, "portcntFrom"));
			} else {
				dtl_vsslCd.setValue(ds_certicommon.getCellData(0, "inscrpVsslCd"));
				dtl_portcnt.setValue(ds_certicommon.getCellData(0, "inscrpPortcnt"));						
			}
			dtl_FmTsVsslCd.setValue(ds_name.getCellData(0, "vsslCdFrom") + '-' + ds_name.getCellData(0, "portcntFrom"));
			dtl_ToTsVsslCd.setValue(ds_name.getCellData(0, "vsslCdTo") + '-' + ds_name.getCellData(0, "portcntTo"));		
		}	

		scwin.f_ds_certidetail_OnLoadCompleted(); // ????;
	}

  	//-------------------------------------------------------------------------
  	// 조건 서식구분 콤보 조회
  	//-------------------------------------------------------------------------
  	scwin.f_RetrieveFmalPattern = function (){
     	let p_bilgLodeptCd  = ed_bilgLodeptCd.getValue();
     	let p_pgmId         = scwin.pgmId;
     	let p_fmlaClsCd     = scwin.fmlaClsCd;

    	sbm_fmlapattern.action = "/ds.fs.bilg.bilgcomncdmgnt.RetrieveProgramEachCertiFormulaCMD.do?sysCd=CertiFormulaEBC&queryId=retrieveProgramEachCertiFormulaList&bilgLodeptCd=" + p_bilgLodeptCd + "&pgmId=" + p_pgmId + "&fmlaClsCd=" + p_fmlaClsCd;
    	$c.sbm.execute(sbm_fmlapattern);     	

  	}

  	//-------------------------------------------------------------------------
  	// 상세 서식구분 콤보 조회
  	//-------------------------------------------------------------------------
  	scwin.f_RetrieveDtlFmalPattern = function (){
     	let p_bilgLodeptCd  = ed_bilgLodeptCd.getValue();
     	let p_pgmId         = scwin.pgmId;
     	let p_fmlaClsCd     = scwin.fmlaClsCd;

    	sbm_dtlfmlapattern.action = "/ds.fs.bilg.bilgcomncdmgnt.RetrieveProgramEachCertiFormulaCMD.do?sysCd=CertiFormulaEBC&queryId=retrieveProgramEachCertiFormulaList&bilgLodeptCd=" + p_bilgLodeptCd + "&pgmId=" + p_pgmId + "&fmlaClsCd=" + p_fmlaClsCd;
    	$c.sbm.execute(sbm_dtlfmlapattern);     	

  	}
  	
  	//-------------------------------------------------------------------------
  	// 매출항목 콤보 조회
  	//-------------------------------------------------------------------------
  	scwin.f_RetrieveFormulasellitem = function (lineCd) {
		let colInfoArr = ["bilgLoofcCd", "fmlaPatternCd", "fmlaClsCd", "clntNo"];
		let dataArr = [];
	 	ds_formulasellitemlist_con.setArray({"columnInfo": colInfoArr, "data": dataArr});     	
 		ds_formulasellitemlist_con.insertRow();
     	ds_formulasellitemlist_con.setCellData(0, "bilgLoofcCd", ed_bilgLodeptCd.getValue());
     	ds_formulasellitemlist_con.setCellData(0, "fmlaPatternCd", lc_fmlaPatternCd.getValue());     	
     	ds_formulasellitemlist_con.setCellData(0, "fmlaClsCd", scwin.fmlaClsCd);

     	if (lineCd == '') {
	     	ds_formulasellitemlist_con.setCellData(0, "clntNo", "0");
	    } else {
	     	//ds_formulasellitemlist_con.getCellData(1, "clntNo")      = lineCd;	    
	     	ds_formulasellitemlist_con.setCellData(0, "clntNo", "0");	     	
	    }	

   		sbm_formulasellitemlist_retrieve.action = "/ds.fs.bilg.bilgcomncdmgnt.RetrieveFormulaEachSellingItemListCMD.do";
   		$c.sbm.execute(sbm_formulasellitemlist_retrieve);

  	}
	
  	//-------------------------------------------------------------------------
  	// 발행
	//-------------------------------------------------------------------------
	scwin.f_Print = async function (arg) {
		
		// OZStartBatch();
		
		if (scwin.addflag != "MOD") {
			$c.gus.cfAlertMsg(MSG_FS_WRN_002);
  		    return;   
		}
		
		let ret = await $c.win.confirm("인쇄하시겠습니까?");
        if (ret) {
			if (ds_certicommon.getCellData(0, "inscrpFmlaPatternCd") == undefined) {
				scwin.f_CertiRetrieve();			
			}

			let odi1 = "01";
			let odi2 = ds_certicommon.getCellData(0, "inscrpFmlaPatternCd");
			
			// 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
			// 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
	        let data = {
	            reportName: "/ds/fs/fs_202_06_10_"+odi1+"_"+odi2+".ozr",
				odiName: "fs_202_06_10_"+odi1+"_"+odi2,
	            odiParam: {},
	            viewerParam: {},
	            formParam: {}
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

			data.odiParam.bilgLodeptCd = ds_certicommon.getCellData(0, "bilgLodeptCd");
			data.odiParam.bilgClntNo = dtl_bilgClntNo.getValue();
			data.odiParam.qryConKnd = "02";
			data.odiParam.confirmDtFm = "";
			data.odiParam.confirmDtTo = "";
			data.odiParam.spplyDtFm = "";
			data.odiParam.spplyDtTo = "";
			data.odiParam.modId = "";
			data.odiParam.printFg = "";
			data.odiParam.certiAggregateFg = "";
			data.odiParam.dcsnClsCd = "";
			data.odiParam.certiNo = ed_certiNo.getValue();
			data.odiParam.fmlaClsCd = ds_certicommon.getCellData(0, "fmlaClsCd");
			data.odiParam.fmlaPatternCd = ds_certicommon.getCellData(0, "fmlaPatternCd");
			data.odiParam.upperFmlaClsCd = "";
			data.odiParam.upperFmlaPatternCd = "";
			data.odiParam.sellVatNo = "";
			data.odiParam.spplyFg = lc_print.getValue();
			data.odiParam.inscrpFmlaPatternCd = ds_certicommon.getCellData(0, "inscrpFmlaPatternCd");
			data.odiParam.ozNo = "01";
		    //odiParam.add("ozNo", lc_ozNo.BindColVal);
			// 할증 합계 표시 유무
			if (!$c.util.isEmpty(chb_sumCheck.getValue())) {
				data.odiParam.sumGbn = "Y";
			} else {
				data.odiParam.sumGbn = "N";
			}		        
		    
		    //거래명세서 실작업중량 표기 유무
		    if (!$c.util.isEmpty(chb_wt.getValue())) {
				data.odiParam.wtGbn = "Y";
			} else {
				data.odiParam.wtGbn = "N";
			}		        
		    
		        
			// 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
			var formParam = new FormParam();
			//formParam.add("form1","폼1");
		          
			// OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
			var viewerParam = new ViewerParam();
			//viewerParam.add("viewer.zoom","100");
			//viewerParam.add("print.mode","silent");		//프린트 설정창 없게...
			//viewerParam.add("viewer.mode","preview");	    //미리보기
			//viewerParam.add("viewer.mode","print");		//미리보기 없이 바로 출력
			//viewerParam.add("viewer.useprogressbar","false");		//PROGRESSBAR 안보이게....
			//cfOZReport("chb_printCheck", "chb_previewCheck", "/ds/fs/fs_202_06_10_"+odi1+"_"+odi2+".ozr", odiParam, viewerParam, formParam);
			await $c.win.openPopup("/ui/cm/zz/ozreportPopup.xml", opts, data);
	        
       		//--------------------------------
			//보세운송 신고필증 발행 
			//---------------------------------
			if (!$c.util.isEmpty(chb_bondedTransDeclar.getValue())) {
				scwin.f_bondedTransDeclarPrint();
			}	
			
			// N건 발행을 위한 배치실행
			// OZExecuteBatch();
        }  		    	
	}				


	
  	//-------------------------------------------------------------------------
  	// BILL 생성
  	//-------------------------------------------------------------------------
  	scwin.f_BillCreate = function () {
		if (ds_certidetail.getModifiedIndex().length > 0) {
			$c.gus.cfAlertMsg(MSG_FS_WRN_010);
	        return;        
	    }			

		if (scwin.addflag == "MOD") {
			let sumDcGbn = "";
		    let valueObject = new Object();
		    valueObject.singleSet = ds_certicommon;
		    valueObject.multiSet  = ds_certicommon;
		    valueObject.orignSet  = ds_certicommon;
		    if (dtl_upperCertiNo.getValue() != "0" && dtl_upperCertiNo.getValue() != "") {
		    	valueObject.isUpdate  = true;
		    } else {
		    	valueObject.isUpdate  = false;
		    }
		    
		    if (!$c.util.isEmpty(chb_sumDc.getValue())) {
				valueObject.sumDcGbn = "Y";
			} else {
				valueObject.sumDcGbn = "N";
			}
		    
		    // 상세화면 호출 
		    let result = modal("/ui/ds/fs/bilg/fs_202_05_07p.xml", valueObject, 690, 792);
		    
		    if(result == "NOCHANGE"){
		    	return;
		    }else{
		    	scwin.f_CertiRetrieve();
		    }
		    
		} else {
			$c.gus.cfAlertMsg(MSG_FS_WRN_002);
			return;
		}	
	
	}
	
  	//-------------------------------------------------------------------------
  	// showModalDialog
 	//-------------------------------------------------------------------------
	scwin.modal = function (filename, mesAry, width, height) {
		let	objParm	       = { 
		    callbackFn  : scwin.BillCreatePopUp_callback,
		    arrParm     : mesAry
		};
		
		let opts = {
	          id        : "billCreatePopUp"
	        , popupName : "BILL 생성 팝업"
	        , modal     : true
	        , type      : "browserPopup"
	        , width     : width
	        , height    : height
			, top		: (screen.height - height ) / 2
	        , title     : "BILL 생성 팝업"
	    };
				
		$c.win.openPopup(filename, opts, objParm);
	}
	
	//-------------------------------------------------------------------------
  	// BILL 생성 팝업 callback
 	//-------------------------------------------------------------------------
	scwin.BillCreatePopUp_callback = function (rtn) {
		return rtn;
	}
	
  	//-------------------------------------------------------------------------
  	//  오더번호 조회 팝업
  	//-------------------------------------------------------------------------
  	scwin.f_OrderPopUp = function () {
		var strPath = "/ui/ds/fs/bilg/fs_204_02_55p.xml";
		
		let	objParm	= { 
		    callbackFn : scwin.OrderPopUp_callback
		};
		
		let opts = {
			          id        : "orderPopUp"
			        , popupName : "오더번호 조회 팝업"
			        , modal     : true
			        , type      : "browserPopup"
			        , width     : 1010
			        , height    : 630
					, scrollbars: true
			        , title     : "오더번호 조회 팝업"
			    };
				
	   $c.win.openPopup(strPath, opts, objParm);
	}
	
	//-------------------------------------------------------------------------
  	//  오더번호 조회 팝업 callback
  	//-------------------------------------------------------------------------
	scwin.OrderPopUp_callback = async function (returnValue) {
		if (returnValue != undefined) {
			ed_bilgLodeptCd.setValue(returnValue[0]);
			ed_bilgClntNo.setValue(returnValue[1]);
			ed_lineCd.setValue(returnValue[2]);
			ed_qryConCd.setValue(returnValue[3]);
			// TODO: 잘 될지 모르겠다.
			await scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, txt_bilgLodeptNm, 1);
			scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, txt_bilgClntNm, 2);
		}	
	}
	
  	//-------------------------------------------------------------------------
  	// GRID에서 선택된 cntrNo 세부정보 확인 : 해당 cntrNo 페이지로 이동
  	//-------------------------------------------------------------------------
  	scwin.f_cntrNoDetail = function (cntrNo) {
  		let condition ="?";
  		let pgmId = "as_102_01_02b.jsp";  		
  		let strCertiNoDetailUrl = "/ds/as/cstmrsrvc/coafmgnt/"+pgmId;
  		let title = "컨테이너 화물추적"
  
  		// 선택된 certiNo 정보 : bilgLodeptCd , certiNo
  		let v_cntrNo = cntrNo;
  		condition += "cntrNo="+v_cntrNo;
  	
		let fileURL = "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_02b.xml"+condition;
    	let tabTitle = "컨테이너 화물추적 ";
		let paramObj = {"cntrNo": v_cntrNo};
	    $c.win.openMenu(tabTitle, fileURL, "as_102_01_02b.jsp", paramObj);
  	}
	
  	//-------------------------------------------------------------------------
  	// 발행 (CERTI)
 	//-------------------------------------------------------------------------
	scwin.f_certiPrint = async function () {

		// N건 발행을 위한 배치시작
		// OZStartBatch();
		
		if(ds_certicommon.getCellData(0, "upperFmlaPatternCd") == undefined) {
			await scwin.f_CertiRetrieve();			
		}

		let ozr = ds_certicommon.getCellData(0, "upperFmlaPatternCd");
		
		 // TSL 라인이고, 청구부서가  경기보관(4B3)이면   CERTI 발행 양식변경. 2011.07.04
        if (ds_certicommon.getCellData(0, "lineCd") == "TSL" && ds_certicommon.getCellData(0, "bilgLodeptCd") == "4B3" && ozr == "05") {
		   ozr = ds_certicommon.getCellData(0, "fmlaPatternCd");
        }

		if (scwin.addflag != "MOD") {
			$c.gus.cfAlertMsg(MSG_FS_WRN_002);
  		    return;   
		}
  		    	
		if (ozr == null || ozr == "") {
			$c.gus.cfAlertMsg(MSG_FS_WRN_016);
  		    return;   
		}  		    	
  		
		let ret = await $c.win.confirm("인쇄하시겠습니까?");
        if (ret) {
			let odi = "fs_202_05_21_C";
			if (ozr == "16") {
				odi = odi + ozr;
			}
			
			// 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
	        let data = {
	            reportName: "/ds/fs/fs_202_05_21_C"+ozr+".ozr",
	            odiParam : {},
				odiName : odi,
	            viewerParam : {},
	            formParam : {}
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

			data.odiParam.certiNo = ds_certicommon.getCellData(0, "certiNo");
			data.odiParam.upperFmlaPatternCd = ds_certicommon.getCellData(0, "upperFmlaPatternCd");
			if (!$c.util.isEmpty(chb_dspTotAmt.getValue())) {
				data.odiParam.dspTotAmt = "Y";
			} else {
				data.odiParam.dspTotAmt = "N";
			}	
			
			if (!$c.util.isEmpty(chb_sumDc.getValue())) {
				data.odiParam.sumDcGbn = "Y";
			} else {
				data.odiParam.sumDcGbn = "N";
			}
				        
			// OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
			data.viewerParam.viewer.zoom = 100;
			data.viewerParam.print.copies = txt_printPage.getValue();		// 발행부수 설정
			data.viewerParam.print.mode = "silent";		// 프린트 설정창 없게...
			
	        if (ds_certicommon.getCellData(0, "lineCd") == "ANL" && ozr == "02") {
				data.reportName = "/ds/fs/fs_202_05_21_C"+ozr+"A"+".ozr";
			} else if ((ds_certicommon.getCellData(1, "lineCd") == "APL" || ds_certicommon.getCellData(1, "lineCd") == "CNC")  && ozr == "02") {
				data.reportName = "/ds/fs/fs_202_05_21_C"+ozr+"P"+".ozr";	
			} else if (ds_certicommon.getCellData(1, "lineCd") == "APL" && ozr == "04"){
				cdata.reportName = "/ds/fs/fs_202_05_21_C"+ozr+"P"+".ozr";	
			} else if ((ds_certicommon.getCellData(1, "lineCd") == "ANL" || ds_certicommon.getCellData(1, "lineCd") == "CMA")  && ozr == "05") {
				data.reportName = "/ds/fs/fs_202_05_21_C"+ozr+"A"+".ozr";	
			} else if ((ds_certicommon.getCellData(1, "lineCd") == "ANL" || ds_certicommon.getCellData(1, "lineCd") == "CMA")  && ozr == "01") {
				data.reportName = "/ds/fs/fs_202_05_21_C"+ozr+"A"+".ozr";	
			}
			
			$c.win.openPopup("/ui/cm/zz/ozreportPopup.xml", opts, data);
	      
			//--------------------------------
			//보세운송 신고필증 발행 
			//---------------------------------
			if (!$c.util.isEmpty(chb_bondedTransDeclar.getValue())) {
				scwin.f_bondedTransDeclarPrint();
			}	
			
			// N건 발행을 위한 배치실행
			// OZExecuteBatch();
        }
		
	}		
	
	//-------------------------------------------------------------------------
	// 보세운송 신고필증 발행 
	//-------------------------------------------------------------------------
	scwin.f_bondedTransDeclarPrint = function () {
		let odi = "sd_401_05_01";

		for (let i = 0; i < ds_certidetail.getRowCount(); i++) {
			if ($c.gus.cfIsNull(ds_certidetail.getCellData(i, "blNo"))) {
				continue;
			}
			
			if (
				i == 0 
			|| (i > 0 && ds_certidetail.getCellData(i, "blNo") != ds_certidetail.getCellData(i-1 , "blNo"))
			) {
				// 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
		        let data = {
		            reportName: "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_2.ozr",
		            odiParam : {},
					odiName : odi,
		            viewerParam : {},
		            formParam : {}
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
				
				// 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
				data.odiParam.blNo = ds_certidetail.getCellData(i, "blNo");
				data.odiParam.declarDt = "";
				data.odiParam.declarSeq = "";
				
				// OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
				data.viewerParam.viewer.zoom = 100;
				data.viewerParam.print.copies = txt_printPage.getValue();			//발행부수 설정
				data.viewerParam.print.mode = "silent";							//프린트 설정창 없게...
				$c.win.openPopup("/ui/cm/zz/ozreportPopup.xml", opts, data);
			}
		}
	}
	
  	//-------------------------------------------------------------------------
	// 금액 반올림
	//-------------------------------------------------------------------------
	scwin.f_Round = function (Num, Position, Base) {
		// Num = 반올림할 수
		// Position = 반올림할 자릿수(정수로만)
		// Base = i 이면 소숫점위의 자릿수에서, f 이면 소숫점아래의 자릿수에서 반올림
		if (Position == 0) {
			// 1이면 소숫점1 자리에서 반올림
			return Math.round(Num);
		} else if (Position > 0) {
			let cipher = '1';
			for (let i = 0; i < Position; i++) {
				cipher = cipher + '0';
			}
		
			let no = Number(cipher);
		
			if (Base == "F") {
				// 소숫점아래에서 반올림
				return Math.round(Num * no) / no;
			} else {
				// 소숫점위에서 반올림.
				return Math.round(Num / no) * no;
			}
		} else {
			$c.gus.cfAlertMsg("자릿수는 정수로만 구분합니다.");
			return;
		}
	}			
	
  	//-------------------------------------------------------------------------
	// 거래명세서 번호 만들기
	//-------------------------------------------------------------------------	
	scwin.f_ZrStr = function (str, len) {
	    let j = 0, i =0;
	    let tmp = new Array(len);
	    j = str.length - 1 ;
	    for (i = (len-1); i >= 0;  i--) {
	        if ((len - str.length)  > i) {
	           tmp[i] =  '0';
	        } else {
	           tmp[i] = str.charAt(j--);
	 		}
	    }
	    return tmp.join('');
	}
	
	scwin.ds_certiBillTitleList_ondataload = function () {
		dtl_billTitleNm.setValue(ds_certiBillTitleList.getCellData(0, "title1"));	
	}

	scwin.sbm_orderselling_retrieve_submitdone = function (e) {
		if (ds_certicommon.getRowCount() > 0) {	
			scwin.addflag = "REG";
			$c.gus.cfDisableKeyData();
			//cfDisableBtn([bCreate2]);
			//cfEnableObj(img_certiNo, false);
			ed_certiNo.setValue('');
			scwin.f_SumAmt();
		} else {
			scwin.f_ClearCerti();
			$c.gus.cfEnableKeyData();		
			//cfEnableObj(img_certiNo, true);
			//cfEnableBtnOnly([bCreate2]);   		
		}		
	} 
	
	scwin.sbm_appendrow_retrieve_submitdone = function (e) {
		if (ds_certicommon.getRowCount() > 0) {	
			scwin.appflag = "TRUE";
			$c.gus.cfDisableKeyData();
			//cfDisableBtn([bCreate2]);
			//cfEnableObj(img_certiNo, false);
			scwin.f_SumAmt();
		} else {
			scwin.f_ClearCerti();
			$c.gus.cfEnableKeyData();
			//cfEnableObj(img_certiNo, true);
			//cfEnableBtnOnly([bCreate2]);   		
		}		
	}
	
	scwin.sbm_certi_retrieve_submitdone = function (e) {
		if (ds_certicommon.getRowCount() > 0) {	
			scwin.addflag = "MOD";
			$c.gus.cfDisableKeyData();
			//cfEnableObj(img_certiNo, false);
			//cfEnableBtnOnly([bCreate2]);   		
			scwin.f_SumAmt();		
		}	
	}
	
	scwin.sbm_certi_save_submitdone = function (e) {
	    scwin.addflag = "MOD";
		if (ds_certicommonsavepost.getRowCount() > 0) {	   
		    ed_certiNo.setValue(ds_certicommonsavepost.getCellData(0, "certiNo"));
		}    
		//cfEnableBtnOnly([bCreate2]);
		if (scwin.delflag == "DEL") {
		    $c.gus.cfAlertMsg(MSG_CM_INF_004);
			scwin.f_Create();
			scwin.delflag = "";
		} else {
		    $c.gus.cfAlertMsg(MSG_CM_INF_001);	
	        scwin.f_CertiRetrieve();	
		}    
	}
	
	scwin.sbm_certiseparation_save_submitdone = function (e) {
	    scwin.addflag = "MOD";
		if (ds_certicommonsavepost.getRowCount() > 0) {	   
		    ed_certiNo.setValue(ds_certicommonsavepost.getCellData(0, "certiNo"));
		}    
		//cfEnableBtnOnly([bCreate2]);   		    
	    $c.gus.cfAlertMsg(MSG_CM_INF_001);
	    scwin.f_CertiRetrieve();    
	}
	
	scwin.ds_certicommon_ondataload = function () {
		if (ds_certicommon.getRowCount() > 0) {
			dtl_bilgLodeptNm.setValue(ds_certicommon.getCellData(0, "bilgLodeptNm"));
			dtl_bilgClntNo.setValue(ds_certicommon.getCellData(0, "bilgClntNo"));		
			dtl_bilgClntNm.setValue(ds_certicommon.getCellData(0, "bilgClntNm"));
			ed_confirmDt.setValue($c.gus.cfIsNull(ds_certicommon.getCellData(0, "confirmDt")) ? scwin.strCurDate :ds_certicommon.getCellData(0, "confirmDt"));
			dtl_taxnClsNm.setValue(ds_certicommon.getCellData(0, "taxnClsNm"));
			dtl_assgnBondZoneNm.setValue(ds_certicommon.getCellData(0, "assgnBondZoneNm"));
			dtl_blNo.setValue(ds_certicommon.getCellData(0, "blNo"));
			dtl_cntWtCbm.setValue(ds_certicommon.getCellData(0, "cntWtCbm"));
			ed_spplyAmt.setValue(ds_certicommon.getCellData(0, "spplyAmt"));
			ed_vatAmt.setValue(ds_certicommon.getCellData(0, "vatAmt"));
			ed_totAmt.setValue(ds_certicommon.getCellData(0, "totAmt"));
			rd_bankAcntNoInscrpYn.setValue(ds_certicommon.getCellData(0, "bankAcntNoInscrpYn"));
			dtl_lineCd.setValue(ds_certicommon.getCellData(0, "lineCd") + "/" + ds_certicommon.getCellData(0, "bilgClntNm"));
			dtl_billTitleNm.setValue(ds_certicommon.getCellData(0, "billTitleNm"));
			if (ed_certiNo.getValue() == "") {
				dtl_fmlaPatternCd.setValue(lc_fmlaPatternCd.getValue());
			} else {
				dtl_fmlaPatternCd.setValue(ds_certicommon.getCellData(0, "fmlaPatternCd"));
			}
			dtl_summary.setValue(ds_certicommon.getCellData(0, "summary"));
			dtl_sellVatNo.setValue(ds_certicommon.getCellData(0, "sellVatNo"));	
			dtl_upperCertiNo.setValue(ds_certicommon.getCellData(0, "upperCertiNo"));
			rd_ediSndTrgtYn.setValue(ds_certicommon.getCellData(0, "ediSndTrgtYn"));
			
			dtl_offsetVatNo.setValue(ds_certicommon.getCellData(0, "offsetVatNo"));
			dtl_dcsnClsCdNm.setValue(ds_certicommon.getCellData(0, "dcsnClsCdNm"));	
			dtl_offsetNo1.setValue(ds_certicommon.getCellData(0, "offsetNo1"));	
			dtl_offsetUpperCertiNo.setValue(ds_certicommon.getCellData(0, "offsetUpperCertiNo"));	
			
			// EDI전송여부 설정
			if (ed_certiNo.getValue() == "") {
				if (ds_certicommon.getCellData(0, "ediClntYn") == "Y") {		
					rd_ediSndTrgtYn.setReadOnly(false);
				} else {
					rd_ediSndTrgtYn.setReadOnly(true);			
				}
			} else {
				if (ds_certicommon.getCellData(0, "ediClntYn") == "Y") {				
					if (ds_certicommon.getCellData(0, "ediSndTrgtYn") == 1) {	
						rd_ediSndTrgtYn.setReadOnly(true);						
					} else {
						rd_ediSndTrgtYn.setReadOnly(false);	
					}	
				} else {
					rd_ediSndTrgtYn.setReadOnly(true);
				}			
			}		
			
			ed_fireInsrRateAmt.setValue(ds_certicommon.getCellData(0, "fireInsrRateAmt"));		
			dtl_bilgClntNo.setValue(ds_certicommon.getCellData(0, "bilgClntNo"));		
			ed_ediSndDt.setValue(ds_certicommon.getCellData(0, "ediSndDt"));
			rd_selTsVsslCd.setValue("F");			
		}
	}	

	scwin.ds_certidetail_ondataload = function () {
		let rowcnt = ds_certidetail.getRowCount(); 
		tbx_totalRows.setValue(rowcnt);

		if (rowcnt == 0) {
			if (scwin.delflag != "DEL") {
				$c.gus.cfAlertMsg(MSG_CM_WRN_002);
			}  
			
			$c.gus.cfDisableBtnOnly([bSave,bDelete]);

		} else {
			scwin.f_SetCertiCommon(ds_certidetail);
		}
		
		// gr_certidetail.ReDraw = "True";
		
	}

	scwin.ds_appendrow_ondataload = function () {
		let rowcnt = ds_appendrow.getRowCount();
		if (ds_certidetail.getRowCount() == 0 && rowcnt == 0) {
			if (scwin.delflag != "DEL") {
				$c.gus.cfAlertMsg(MSG_CM_WRN_002);
			}	
			$c.gus.cfDisableBtnOnly([bSave,bDelete]);

		} else {

			scwin.f_SetCertiCommon(ds_appendrow);

		    let app_mod = '';
		    // gr_certidetail.DataID = ''; // script로 해당기능불가
			
			for (let app_idx = 0; app_idx < ds_appendrow.getRowCount(); app_idx++) {
				app_mod = '';
				for (let org_idx = 0; org_idx < ds_certidetail.getRowCount(); org_idx++) {
					if (ds_certidetail.getCellData(org_idx, "odrNo") == ds_appendrow.getCellData(app_idx, "odrNo")
					&& ds_certidetail.getCellData(org_idx, "sellSeq") == ds_appendrow.getCellData(app_idx, "sellSeq")) {
						for (let j = 0; j < ds_certidetail.getRowCount(); j++) {
							ds_certidetail.setCellData(org_idx, ds_certidetail.getColumnID(j), ds_appendrow.getCellData(app_idx, ds_certidetail.getColumnID(j)));
						}
						app_mod = '수정';
						break;
					}
				}
				
				if (app_mod != '수정') {	
					if (ds_certidetail.getRowCount() < 1) {
						$c.gus.cfCopyDataSetHeader(ds_appendrow, ds_certidetail);
					}	
					
					ds_certidetail.insertRow();
					
					for (let j = 0; j < ds_certidetail.getColumnCount(); j++) {
						if (ds_certidetail.getColumnID(j) == 'certiNo') {
							ds_certidetail.setCellData(ds_certidetail.rowPosition, ds_certidetail.getColumnID(j), ed_certiNo.getValue());
						} else {
							ds_certidetail.setCellData(ds_certidetail.rowPosition, ds_certidetail.getColumnID(j)) = ds_appendrow.getCellData(app_idx, ds_certidetail.getColumnID(j))
						}
					}	
				}
			}
			// gr_certidetail.DataID = 'ds_certidetail';	
		}	
		tbx_totalRows.setValue(ds_certidetail.getRowCount());
	}

	scwin.ds_fmlapattern_ondataload = function () {
		scwin.f_RetrieveFormulasellitem(ed_lineCd.getValue());
	}
	
	scwin.ds_formulasellitemlist_ondataload = function () {
		ds_formulasellitemlist.insertRow();
	    ds_formulasellitemlist.setCellData(0, "sellItemCd", "");
	    ds_formulasellitemlist.setCellData(0, "sellItemNm", "전체");
	    lc_sellItemCd.setSelectedIndex(0);
	}
	
	scwin.gr_certidetail_oncellclick = function (rowIndex,columnIndex,columnId) {
		if (columnId == "choice" && rowIndex > 0) {
			scwin.f_SumAmt();
		}
	}
	
	scwin.gr_certidetail_oncelldblclick = function (rowIndex,columnIndex,columnId) {
		if (rowIndex > 0) {
			if (columnId == "cntrNo" && ds_certidetail.getCellData(rowIndex, "cntrNo") != "") { 
				scwin.f_cntrNoDetail(ds_certidetail.getCellData(rowIndex, "cntrNo"));
			}
			
			if (columnId == "commNm" && ds_certidetail.getCellData(rowIndex, "commNm") != "") { 
				scwin.f_cntrNoDetail(ds_certidetail.getCellData(rowIndex, "commNm"));
			}
		}
	}
	
	// TODO: headerclick이 되는건가...? 김팔수 부장님께 문의
	scwin.gr_certidetail_onheaderclick = function (headerId) {
		if (Colid == "choice")	{
			if (bCheck == "1") {
				for (let i = 0; i < ds_certidetail.getRowCount(); i++) {
					ds_certidetail.setCellData(i, "choice", "T");
				}
			} else {
				for (let i = 0; i < ds_certidetail.getRowCount(); i++) {
					ds_certidetail.setCellData(i, "choice", "F");
				}
			}
		}
		scwin.f_SumAmt();
	}
	
	// TODO: 애매함 맞는지 확인 필요
	scwin.gr_certidetail_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
		let colid = gr_certidetail.getColumnID(oldColumnIndex);
		if (colid == "totAmt") {
			ds_certidetail.setCellData(oldRow, "vatAmt", Number(ds_certidetail.getCellData(oldRow, "totAmt")) - Number(ds_certidetail.getCellData(oldRow, "spplyAmt")));
			scwin.f_SumAmt();
		}
		
		if (colid == "vatAmt") {
		    ds_certidetail.setCellData(oldRow, "totAmt", Number(ds_certidetail.getCellData(oldRow, "spplyAmt")) + Number(ds_certidetail.getCellData(oldRow, "vatAmt")));    	
			scwin.f_SumAmt();
		}	
		
		if (colid == "spplyAmt") {	
			if (ds_certicommon.getCellData(0, "taxnClsCd") == '01' || ds_certicommon.getCellData(0, "taxnClsCd") == '04') {
		    	ds_certidetail.setCellData(oldRow, "vatAmt", Number(ds_certidetail.getCellData(oldRow, "totAmt")) - Number(ds_certidetail.getCellData(oldRow, "spplyAmt")));
	    	} else {
	    		ds_certidetail.setCellData(oldRow, "vatAmt", 0);
	    	}	
		    
			ds_certidetail.setCellData(oldRow, "totAmt", Number(ds_certidetail.getCellData(row, "spplyAmt")) - Number(ds_certidetail.getCellData(oldRow, "vatAmt")));    	
			scwin.f_SumAmt();
		}
	}

	scwin.lc_qryConKnd_onchange = function (info) {
		if (lc_qryConKnd.getValue() == "배차") {
			div_qryConKnd1.show();
			div_qryConKnd2.hide();
		} else if (lc_qryConKnd.getValue() == "청구인식일") {
			div_qryConKnd1.show();
			div_qryConKnd2.hide();		
		} else if (lc_qryConKnd.getValue() == "오더일자") {
			div_qryConKnd1.show();
			div_qryConKnd2.hide();
		} else if (lc_qryConKnd.getValue() == "오더") {
			div_qryConKnd1.hide();
			div_qryConKnd2.show();		
			div_qryConKnd3.hide();
		} else if (lc_qryConKnd.getValue() == "CNTR") {
			div_qryConKnd1.hide();
			div_qryConKnd2.show();				
			div_qryConKnd3.hide();				
		}	

		ed_qryConCd.setValue('');
		txt_qryConNm.setValue('');
	}

	scwin.lc_qryConKnd2_onchange = function (info) {
		if (lc_qryConKnd2.getValue() == "BL") {
			div_qryConKnd4.hide();
			div_qryConKnd5.show();				
		} else if(lc_qryConKnd2.getValue() == "CNTR"){
			div_qryConKnd4.hide();
			div_qryConKnd5.show();				
		} else {
			div_qryConKnd4.show();
			div_qryConKnd5.hide();					
		}	

		ed_qryConCd2.setValue('');
		txt_qryConNm2.setValue('');
		ed_qryConCd3.setValue('');
		txt_qryConNm3.setValue('');	
	}
	
	scwin.lc_transDst_onchange = function (info) {
		ed_onWrkPlCd.setValue('');
		ed_offWrkPlCd.setValue('');	
		txt_onWrkPlNm.setValue('');
		txt_offWrkPlNm.setValue('');	
	}

	scwin.lc_gubun_onchange = function (info) {
		ed_lineCd.setValue('');
		txt_lineNm.setValue('');
	}

	scwin.lc_fmlaPatternCd_onchange = function (info) {
		scwin.f_RetrieveFormulasellitem(ed_lineCd.getValue());
	}

	scwin.ed_certiNo_onkeydown = function (e) {
		if (e.key == 13 && ed_certiNo.getValue().length > 0 && ed_certiNo.getValue() != null) {
			if (ed_certiNo.getValue().length < 8) {
				let strCurDate = scwin.strCurDate;
				strCurDate = strCurDate.substring(2, 4);
				ed_certiNo.setValue(scwin.certiPatternCd + strCurDate+scwin.f_ZrStr(ed_certiNo.getValue(), 7));
			}
			
			scwin.f_CertiRetrieve();
		}
	}

	scwin.ed_bilgLodeptCd_onblur = function (e) {
		scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, txt_bilgLodeptNm, 1);
	}

	scwin.ed_titleSeq_onblur = function (e) {
		scwin.f_retrieveBillTitle();
	}

	scwin.ed_bilgClntNo_onblur = function (e) {
		scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, txt_bilgClntNm, 2);
	}

	scwin.ed_lineCd_onblur = function (e) {
		if (lc_gubun.getValue() == "CLNT") {
			scwin.f_chkOpenCommonPopUp(ed_lineCd, txt_lineNm, 18);
		} else {	
			scwin.f_chkOpenCommonPopUp(ed_lineCd, txt_lineNm, 6);
		}	
	}

	scwin.ed_qryConCd2_onblur = function (e) {
		if (lc_qryConKnd2.getValue() == "품명") {
			scwin.f_chkOpenCommonPopUp(ed_qryConCd2, txt_qryConNm2, 11);
		} else if(lc_qryConKnd2.getValue() == "품목"){
			scwin.f_chkOpenCommonPopUp(ed_qryConCd2, txt_qryConNm2, 13);
		} else if(lc_qryConKnd2.getValue() == "화종"){
			scwin.f_chkOpenCommonPopUp(ed_qryConCd2, txt_qryConNm2, 12);	
		} else if(lc_qryConKnd2.getValue() == "BL"){
			scwin.f_chkOpenCommonPopUp(ed_qryConCd2, txt_qryConNm3, 10);	
		} else if(lc_qryConKnd2.getValue() == "CNTR"){
			scwin.f_chkOpenCommonPopUp(ed_qryConCd2, txt_qryConNm3, 17);	
		}	
	}

	scwin.ed_qryConCd_onkeydown = function (e) {
		if (lc_qryConKnd.getValue() == "오더" || lc_qryConKnd.getValue() == "CNTR") {
			if (e.key == 13 && ed_qryConCd.getValue().length > 0 && ed_qryConCd.getValue() != null) {
				scwin.f_Retrieve();
			}	
		}
	}

	scwin.ed_kcgCd_onblur = function (e) {
		scwin.f_chkOpenCommonPopUp(ed_kcgCd, txt_kcgNm, 5);
	}

	scwin.ed_onWrkPlCd_onblur = function (e) {
		if (lc_transDst.getValue() == "작업장") {
			scwin.f_chkOpenCommonPopUp(ed_onWrkPlCd, txt_onWrkPlNm, 8);
		} else if (lc_transDst.getValue() == "권역") {
			scwin.f_chkOpenCommonPopUp(ed_onWrkPlCd, txt_onWrkPlNm, 15);	
		}
	}

	scwin.ed_offWrkPlCd_onblur = function (e) {
		if (lc_transDst.getValue() == "작업장") {
			scwin.f_chkOpenCommonPopUp(ed_offWrkPlCd, txt_offWrkPlNm, 9);
		} else if (lc_transDst.getValue() == "권역") {
			scwin.f_chkOpenCommonPopUp(ed_offWrkPlCd, txt_offWrkPlNm, 16);	
		}		
	}

	scwin.ed_adptExchRt_onblur = function (e) {
		for (let i = 0; i < ds_certidetail.getRowCount(); i++) {
			if (ds_certidetail.getCellData(i, "crcCd") == "USD") {
				ds_certidetail.setCellData(i, "adptExchRt", ed_adptExchRt.getValue());
				ds_certidetail.setCellData(i, "spplyAmt", Math.floor(Number(ed_adptExchRt.getValue()) * Number(ds_certidetail.getCellData(i, "spplyAmtFcrc"))));
				ds_certidetail.setCellData(i, "totAmt", Math.floor(Number(ed_adptExchRt.getValue()) * Number(ds_certidetail.getCellData(i, "spplyAmtFcrc"))));
			}	
		}
		scwin.f_SumAmt();	
	}

	scwin.ed_sellLodeptCd_onblur = function (e) {
		scwin.f_chkOpenCommonPopUp(ed_sellLodeptCd, txt_sellLodeptNm, 19);
	}

	scwin.ed_regId_onblur = function (e) {
		scwin.f_chkOpenCommonPopUp(ed_regId, txt_regNm, 20, true);
	}

	scwin.ed_modId_onblur = function (e) {
		scwin.f_chkOpenCommonPopUp(ed_modId, txt_modNm, 21, true);
	}

	scwin.rd_selTsVsslCd_onchange = function (info) {
		if(ds_certidetail.getRowCount() > 0) {
			if (rd_selTsVsslCd.getValue() == 'F') {
				dtl_vsslCd.setValue(ds_certidetail.getCellData(0, "vsslCdFrom"));
				dtl_portcnt.setValue(ds_certidetail.getCellData(0, "portcntFrom"));
				dtl_FmTsVsslCd.setValue(ds_certidetail.getCellData(0, "vsslCdFrom") + '-' + ds_certidetail.getCellData(0, "portcntFrom"));
				dtl_ToTsVsslCd.setValue(ds_certidetail.getCellData(0, "vsslCdTo") + '-' + ds_certidetail.getCellData(0, "portcntTo"));
			} else if (rd_selTsVsslCd.getValue() == 'T') {
				dtl_vsslCd.setValue(ds_certidetail.getCellData(0, "vsslCdTo"));
				dtl_portcnt.setValue(ds_certidetail.getCellData(0, "portcntTo"));
				dtl_FmTsVsslCd.setValue(ds_certidetail.getCellData(0, "vsslCdFrom") + '-' + ds_certidetail.getCellData(0, "portcntFrom"));
				dtl_ToTsVsslCd.setValue(ds_certidetail.getCellData(0, "vsslCdTo") + '-' + ds_certidetail.getCellData(0, "portcntTo"));
			}	
		}
	}