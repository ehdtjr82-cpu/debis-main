/**
 * package dbl.ac.am.constants;
 * <pre>
 *  회계 내부에서 사용되는 상수를 정의하는 클래스
 * </pre>
 * @author $Author: minstar9 $
 * @version $Revision: 1.39 $
 * 
 * public class ACConstants
 */

ACConstants = {};
/** 대변 */
ACConstants.CREDIT = "C";

/** 차변 */
ACConstants.DEBIT = "D";

/** 부호(-) */
ACConstants.MINUS = "-";

/** 부호(+) */
ACConstants.PLUS = "+";

/** 원화 */
ACConstants.KOREA_WON = "KRW";

/** 엔화 */
ACConstants.JAPAN_YEN = "JPY";    

/** 전표종류(가지급신청) */
ACConstants.SLIPKNDCD_PREPAY = "A01";

/** 전표종류(선급금신청) */
ACConstants.SLIPKNDCD_SUSPENSE = "A02";

/** 전표종류(가지급정리) */
ACConstants.SLIPKNDCD_PREPAY_SETTLE = "A03";

/** 전표종류(선급금정리) */
ACConstants.SLIPKNDCD_SUSPENSE_SETTLE = "A04";

/** 전표종류(대체전표) */
ACConstants.SLIPKNDCD_RESENT = "A05";

/** 전표종류(대체전표-외부인터페이스) */
ACConstants.SLIPKNDCD_RESENT_OSIDE = "A13";

/** 전표종류(선급금만기전표) */
ACConstants.SLIPKNDCD_PREPAY_EXPIRATION = "A06";

/** 전표종류(선급금해지전표) */
ACConstants.SLIPKNDCD_PREPAY_TERMINATION = "A07";

/** 전표종류(경비전표) */
ACConstants.SLIPKNDCD_EXPENSE = "A08";

/** 전표종류(일용직임금) */
ACConstants.SLIPKNDCD_DUSE_PST = "A09";

/** 전표종류(실물화전표) */
ACConstants.SLIPKNDCD_ACTUAL_SLIP = "A10";

/** 전표종류(주민세지급요청전표) */
ACConstants.SLIPKNDCD_MAN_TAX_PMNT = "A11";

/** 전표종류(사업소세지급요청전표) */
ACConstants.SLIPKNDCD_BIZ_TAX_PMNT = "A12";

/** 전표종류(리스료지급전표) */
ACConstants.SLIPKNDCD_LEASE_SLIP = "A14";

/** 전표종류(외화환산전표) */
ACConstants.SLIPKNDCD_AMTFCRCCHARGE_SLIP = "A15";

/** 전표종류(선급비용처리) */
ACConstants.SLIPKNDCD_PREPAY_COST_PROCESS = "A16";

/** 개인형 법인카드 정산 */
ACConstants.SLIPKNDCD_PERSONAL_CORP_CARD_ADJM = "A17";

/** 대손충당금 */
ACConstants.SLIPKNDCD_BAD_DEBTS = "A18";    

/** 임차 */
ACConstants.SLIPKNDCD_ADJM_LOAN = "A19";

/** 임대 */    
ACConstants.SLIPKNDCD_ADJM_RENT = "A20";

/** 전표종류(일용직임금-자동) */
ACConstants.SLIPKNDCD_DUSE_PST_AUTO = "A23";

    /** 전표종류(계좌이체) */
ACConstants.SLIPKNDCD_TRANSFER = "C01";

/** 전표종류(자산취득) */
ACConstants.SLIPKNDCD_ASSET_ACQUIRE = "B01";

/** 전표종류(자본적지출) */
ACConstants.SLIPKNDCD_ASSET_CAPITAL_EXPENDITURE = "B02";

/** 전표종류(자산매각) */
ACConstants.SLIPKNDCD_ASSET_DISPOSITION = "B03";

/** 전표종류(자산폐기) */
ACConstants.SLIPKNDCD_ASSET_DISUSE = "B04";

    /** 전표종류(자산이관) */
ACConstants.SLIPKNDCD_ASSET_TRANSFER = "B05";   

/** 전표종류(렌터카-자본적지출) */
ACConstants.SLIPKNDCD_ASSET_CAP_EXPD_RENTCAR = "B06";

/** 전표종류(정비-자본적지출) */
ACConstants.SLIPKNDCD_ASSET_CAP_EXPD_FIX = "B07";

/** 전표종류(무형자산상각전표) */
ACConstants.SLIPKNDCD_INVISIBLE = "B08";

/** 전표종류(자산재평가) */
ACConstants.SLIPKNDCD_REAPPRAISE = "B09";

/** 전표종류(자산손상차손) */
ACConstants.SLIPKNDCD_IMPAIRMENT_LOSS = "B13";

/** 전표종류(자산손상환입) */
ACConstants.SLIPKNDCD_IMPAIRMENT_GAIN = "B14";


/** 투자부동산 */
ACConstants.SLIPKNDCD_INVESTMENT_REAL_ESTATE = "B10";

/** 전표종류(재고자산) */
ACConstants.SLIPKNDCD_ASSET_FOR_STOCKASET = "B11";

/** 전표종류(재고자산매각) */
ACConstants.SLIPKNDCD_STOCK_ASSET_DISPOSITION = "B12";

/** 전표종류(통장입출금) */
ACConstants.SLIPKNDCD_DEPOSIT_WITHDRAW = "C02";

/** 전표종류(받을어음) */
ACConstants.SLIPKNDCD_BILLRECEIVABLE = "C03";

/** 전표종류(받을어음전환) */
ACConstants.SLIPKNDCD_BILLRECEIVABLE_CONVERSION = "C44";



/** 전표종류(현금지급) */
ACConstants.SLIPKNDCD_PAYMENT_CASH = "C05";

/** 전표종류(이체지급) */
ACConstants.SLIPKNDCD_PAYMENT_TRANSFER = "C06";

/** 전표종류(어음수표지급) */
ACConstants.SLIPKNDCD_PAYMENT_DRAFTCHECK = "C07";

/** 전표종류(전자어음지급) */
ACConstants.SLIPKNDCD_PAYMENT_ELECTRONIC_DRAFT = "C08";

/** 전표종류(전자어음교환) */
ACConstants.SLIPKNDCD_PAYMENT_ELECTRONIC_EXCHANGE = "C09";

/** 전표종류(상계처리) */
ACConstants.SLIPKNDCD_PAYMENT_SETOFF = "C10";

/** 전표종류(받을어음지급) */
ACConstants.SLIPKNDCD_PAYMENT_BILLRECV = "C35";

/** 전표종류(차입원장) */
ACConstants.SLIPKNDCD_BORROWING = "C12";

/** 전표종류(조정전표) */
ACConstants.SLIPKNDCD_CTRL = "E01";

/** 전표종류(감가상각계상) */
ACConstants.SLIPKNDCD_DEPR = "E02";

/** 전표종류(선급비용계상) */
ACConstants.SLIPKNDCD_PREPAY_COST = "E03";

/** 전표종류(미확정매입매출) */
ACConstants.SLIPKNDCD_UNSETTLED_PCHS_SELL = "E04";

/** 전표종류(수금처리) */
ACConstants.SLIPKNDCD_COLLECTION_OF_MONEY = "C13";

/** 전표종류(가수금처리) */
ACConstants.SLIPKNDCD_SUSPENSE_RECEIVABLE = "C14";

/** 전표종류(선수금처리) */
ACConstants.SLIPKNDCD_INITIATIVE_AMOUNT = "C15";

/** 전표종류(차입상환) */
ACConstants.SLIPKNDCD_BORROWING_REPAY = "C16";

/** 전표종류(채권매각관리) */
ACConstants.SLIPKNDCD_ACCT_RECV_DISPOSITION = "C17";

/** 전표종류(예적금관리) */
ACConstants.SLIPKNDCD_DPSIT_SAVE = "C20";

/** 전표종류(예적금이자처리) */
ACConstants.SLIPKNDCD_INTEREST = "C21";

/** 전표종류(예적금해지) */
ACConstants.SLIPKNDCD_CNCL = "C22";

/** 전표종류(차입이자/보증료처리) */
ACConstants.SLIPKNDCD_BORRINTEREST = "C23";


/** 전표종류(채권대손관리) */
ACConstants.SLIPKNDCD_ACCT_RECV_BDEBT = "C18";

/** 전표종류(채권잡손관리) */
ACConstants.SLIPKNDCD_ACCT_RECV_ETCLOSS = "C19";

/** 전표종류(채권잡익관리) */
ACConstants.SLIPKNDCD_ACCT_RECV_ETCPROFIT = "C48";

/** 전표종류(채권계정전환) */
ACConstants.SLIPKNDCD_ACCT_RECV_CHG = "C49";

/** 전표종류(확정급여전표) */
ACConstants.SLIPKNDCD_ACCT_SARARY_COMF = "C50";

/** 전표종류(확정급여전표-퇴직연금) */
ACConstants.SLIPKNDCD_ACCT_RETIRE_SARARY_COMF = "C51";

/** 전표종류(유급휴가채무전표) */
ACConstants.SLIPKNDCD_VACACOST = "C52";

/** 전표종류(전도금) */
ACConstants.SLIPKNDCD_ADVCD = "C04";

/** 전표종류(만기처리) */
ACConstants.SLIPKNDCD_EXPIRATION = "C11";

/** 전표종류(정보처리용역비) */
ACConstants.SLIPKNDCD_INFORMATION_PROCESS_SERVICE_COST = "G01";

/** 전표종류(인사급상여) */
ACConstants.SLIPKNDCD_SALARY_WORK = "G02";

/** 전표종류(외주수선비) */
ACConstants.SLIPKNDCD_OUTORD_REPAIREXPENSE = "H01";

/** 전표종류(저장품소모대체) */
ACConstants.SLIPKNDCD_SPLY_CSMP_SUBST = "H02";

/** 전표종류(렌터카매출-장기) */
ACConstants.SLIPKNDCD_RENTCAR_SELL = "I01";

/** 전표종류(렌터카매출-단기) */
ACConstants.SLIPKNDCD_RENTCAR_SELL_ST  = "I02";

/** 전표종류(매표매출) */
ACConstants.SLIPKNDCD_TICK_SELL = "J01";

/** 전표종류(월말매표수수료) */
ACConstants.SLIPKNDCD_MON_TICK_CMIS = "J02";

/** 전표종류(가수금자동전표) */
ACConstants.SLIPKNDCD_SUS_RECV_AUTO = "C24";

/** 전표종류(집금전표) */
ACConstants.SLIPKNDCD_COLL_MONEY = "C25";

/** 전표종류(가수금자동전표-가상계좌) */
ACConstants.SLIPKNDCD_SUS_RECV_RCPT_AUTO = "C45";

/** 전표종류(렌터카보험-신규) */
ACConstants.SLIPKNDCD_RENTCAR_INSR_NEW = "I03";

/** 전표종류(렌터카보험-변경) */
ACConstants.SLIPKNDCD_RENTCAR_INSR_MOD = "I04";

/** 전표종류(타이어비) */
ACConstants.SLIPKNDCD_TIRE_COST = "H03";

/** 전표종류(차량검사비) */
ACConstants.SLIPKNDCD_VEHCL_INSP_COST = "H04";

/** 전표종류(정유사유류입고) */
ACConstants.SLIPKNDCD_OIL_CO_IN = "J11";

/** 전표종류(직매주유소유류매입) */
ACConstants.SLIPKNDCD_OIL_STAT_IN = "J12";

/** 전표종류(렌터잡이익처리) */
ACConstants.SLIPKNDCD_EGAIN_LC = "I05";

/** 전표종류(용차료전표-렌터) */
ACConstants.SLIPKNDCD_HIRECAR_COST_RC = "I06";

/** 전표종류(운반비전표-렌터) */
ACConstants.SLIPKNDCD_PRTG_COST_RC = "I07";

/** 전표종류(용차료전표-고속) */
ACConstants.SLIPKNDCD_HIRECAR_COST = "J13";

/** 전표종류(유류출고전표) */
ACConstants.SLIPKNDCD_OIL_OUT = "J14";

/** 전표종류(일반주유소주유전표) */
ACConstants.SLIPKNDCD_GNRL_OIL_STAT_OILING = "J15";

/** 전표종류(보관주유소주유수수료전표) */
ACConstants.SLIPKNDCD_STR_OIL_STAT_OILING_CMIS = "J16";

/** 전표종류(유가증권) */
ACConstants.SLIPKNDCD_WERTPAPIER = "C26";

/** 전표종류(유가증권평가) */
ACConstants.SLIPKNDCD_WERTPAPIER_ESTIMATE = "C27";

/** 전표종류(유가증권매각) */
ACConstants.SLIPKNDCD_WERTPAPIER_DISPOSITION = "C28";

/** 전표종류(고속-일용직임금) */
ACConstants.SLIPKNDCD_EXPR_DUSE_PST = "J17";

/** 전표종류(고속-복후비) */
ACConstants.SLIPKNDCD_EXPR_WELSAL = "J18";

/** 전표종류(고속-보관회사주입수수료) */
ACConstants.SLIPKNDCD_STR_CO_OIL_CMIS = "J19";

/** 전표종류(고속-전세버스매출) */
ACConstants.SLIPKNDCD_ENGAGE_BUS_SELL = "J20";

/** 전표종류(터미널관리비임대료) */
ACConstants.SLIPKNDCD_TML_LODGE_COST = "J03";

/** 전표종류(기타매출) */
ACConstants.SLIPKNDCD_ETC_SELL = "J25";

/** 전표종류(전자결재현금지급확정) */
ACConstants.SLIPKNDCD_ELEC_APPRV_CASH = "C29";

/** 전표종류(법인카드지급) */
ACConstants.SLIPKNDCD_CORCARD_PAY = "C30";

/** 전표종류(법인카드대체) */
ACConstants.SLIPKNDCD_CORCARD_SUBST  = "C33";

/** 전표종류(법인카드정리) */
ACConstants.SLIPKNDCD_CORCARD_SETTLE = "C34";

/** 전표종류(어음차입) */
ACConstants.SLIPKNDCD_DRAFT_BORROWING = "C31";

/** 전표종류(수금처리-인터페이스용) */
ACConstants.SLIPKNDCD_COLLECTION_OF_MONEY_IF = "C46";

/** 전표종류(채권상계-인터페이스용) */
ACConstants.SLIPKNDCD_COLL_MONEY_SETOFF_IF = "C53";

/** 전표종류(물류매출전표) */
ACConstants.SLIPKNDCD_LOGIS_SELL = "F01";

/** 전표종류(물류매입전표) */
ACConstants.SLIPKNDCD_LOGIS_PLDG = "F02";

/** 전표종류(영수매출전표) */
ACConstants.SLIPKNDCD_RECEPT_SELL = "F03";

/** 전표종류(현금담보전표) */
ACConstants.SLIPKNDCD_CASH_PLDG = "F04";

/** 전표종류(위수탁매입전표) */
ACConstants.SLIPKNDCD_THUS = "F05";

/** 전표종류(알선수탁금_생성) */
ACConstants.SLIPKNDCD_PAYM_CREATE = "F09";

/** 전표종류(알선수탁금_감소) */
ACConstants.SLIPKNDCD_PAYM_DECREASE = "F10";

/** 전표종류(알선수탁금_전환) */
ACConstants.SLIPKNDCD_PAYM_CHG = "F11";

/** 전표종류(알선수탁금_잔액송금) */
ACConstants.SLIPKNDCD_PAYM_COST_REMIT = "F12";

/** 전표종류(알선수탁금_채권상계) */
ACConstants.SLIPKNDCD_ACCT_RECEI_SETOFF = "F13";

/** 전표종류(창고매출전표) */
ACConstants.SLIPKNDCD_STOR_SELL = "J04";

/** 전표종류(매표수탁금지급전표) */
ACConstants.SLIPKNDCD_TICK_TRUST_PAY = "J05";

/** 전표종류(매표수탁수수료전표) */
ACConstants.SLIPKNDCD_TICK_TRUST_CMIS = "J06";

/** 전표종류(수하물표구매전표) */
ACConstants.SLIPKNDCD_LUGTICKET_BUY = "J21";

/** 전표종류(통행카드구매전표) */
ACConstants.SLIPKNDCD_TOLLTICKET_BUY = "J22";

/** 전표종류(수하물표사용전표) */
ACConstants.SLIPKNDCD_LUGTICKET_USE = "J23";

/** 전표종류(통행카드사용전표) */
ACConstants.SLIPKNDCD_TOLLTICKET_USE = "J24";

/** 전표종류(부품구매전표) */    
ACConstants.SLIPKNDCD_PART_BUY = "J26";

/** 전표종류(수하물용역수수료전표) */    
ACConstants.LUG_SERV_CMIS = "J27";

/** 전표종류(정비소모품구매전표) */
ACConstants.SLIPKNDCD_FIX_USEUP_BUY = "I08";

/** 전표종류(정비부품이관전표) */
ACConstants.SLIPKNDCD_FIX_PART_TRAN = "H05";

/** 전표종류(급여이체) */
ACConstants.SLIPKNDCD_SAL_TRANSFER = "C32";

/** 전표종류(자동이체) */
ACConstants.SLIPKNDCD_AUTO_TRANSFER = "C42";

/** 전표종류(변동비성 전도금 정산) */
ACConstants.SLIPKNDCD_VAR_ADVCD_ADJM = "C43";

/** 전표종류(위수탁상계전표) */
ACConstants.SLIPKNDCD_SETOFF_TRUS = "F06";

/** 전표종류(수금상계) */
ACConstants.SLIPKNDCD_COLL_MONEY_SETOFF = "C47";

/** 전표종류(FMS정비리워드전표) */
ACConstants.SLIPKNDCD_FMS_REWARD = "H23";

/** 전표종류(국제물류 상계전표) */
ACConstants.SLIPKNDCD_IL_SETOFF = "F07";

/** 전표종류(국제물류 대납전표) */ 
ACConstants.SLIPKNDCD_IL_PAYM = "F08";  

/** 전표종류(자회사 - 경비전표) */
ACConstants.SLIPKNDCD_SUB_COMPANY_EXPENSE = "K01";

/** 전표종류(자회사 - 매출전표) */
ACConstants.SLIPKNDCD_SUB_COMPANY_SELL = "K02";

/** 전표종류(자회사 - 매입전표) */
ACConstants.SLIPKNDCD_SUB_COMPANY_PCHS = "K03";

/** 전표종류(자회사 - 급상여전표) */
ACConstants.SLIPKNDCD_SUB_COMPANY_SALARY = "K04";

/** 전표종류(자회사 - 대납전표) */
ACConstants.SLIPKNDCD_DN_COMPANY_THUS = "K05";

/** 전표종류(대성냉동 - 상계전표) */
ACConstants.SLIPKNDCD_DN_SETOFF_THUS = "K06";

/** 전표종류(대성냉동 - 매출전표) */
ACConstants.SLIPKNDCD_DN_COMPANY_SELL= "K07";

/** 전표종류(대성냉동 - 매입전표) */
ACConstants.SLIPKNDCD_DN_COMPANY_PCHS= "K08";   

/** 전표종류(국제 BNMT - 매출전표) */
ACConstants.SLIPKNDCD_BNMT_SELL= "K10";

/** 자산이력 구분코드(취득) */
ACConstants.ASET_HISTCD_ACQUIRE = "10";

/** 자산이력 구분코드(자본적지출) */
ACConstants.ASET_HISTCD_CAPITAL_EXPENDITURE = "20";

/** 자산이력 구분코드(매각) */
ACConstants.ASET_HISTCD_DISPOSITION = "30";

/** 자산이력 구분코드(폐기) */
ACConstants.ASET_HISTCD_DISUSE = "40";

/** 자산이력 구분코드(자산이관) */
ACConstants.ASET_HISTCD_TRANSFER = "50";

/** 자산이력 구분코드(자산 내용년수) */
ACConstants.ASET_HISTCD_SERVICE_LIFE = "60";

/** 자산이력 구분코드(자산재평가) */
ACConstants.ASET_HISTCD_REAPPRAISE = "80";

/** 자산이력 구분코드(자산손상차손/환입) */
ACConstants.ASET_HISTCD_IMPAIRMENT = "85";

/** 자산이력 구분코드(충당금설정) */
ACConstants.ASET_HISTCD_COMPENSATION = "90";

/** 자산이력 구분코드(재고자산변경) */
ACConstants.ASET_HISTCD_STOCKASET = "70";    

/** 통장이체 입금 **/
ACConstants.DEPOSIT = "01";

/** 통장이체 출금 **/
ACConstants.WITHDRAW = "02";

/** 전도금통장 용도 구분코드 **/
ACConstants.BANKBOOK_PURPS_CLS_ADVCD = "03";

/** 거래상태 코드 (회사내부 입출금코드) **/
ACConstants.BANKBOOK_TXN_STS_CD = "01";


/** 삭제 플래그 상수 DEL_YES **/
ACConstants.DEL_YES = 1;

/** 삭제 플래그 상수 DEL_NO **/
ACConstants.DEL_NO = 0;

/** 어음상태 코드 수취 **/
ACConstants.BILLRECV_RECV = "10";

/** 어음상태 코드 수탁 **///(2006.02.15 사용안함.)
//ACConstants.BILLRECV_TRUST = "20";

/** 어음상태 코드 수금 **/
ACConstants.BILLRECV_DUE = "30";

/** 어음상태 코드 만기 **/
ACConstants.BILLRECV_CLOSE = "40";

/** 어음상태 코드 부도 **/
ACConstants.BILLRECV_DISHO = "50";

/** 어음상태 코드 어음할인 **/
ACConstants.BILLRECV_DRAFT_DC = "60";

/** 어음상태 코드 교환 **/
ACConstants.BILLRECV_EXCHG = "70";

/** 어음상태 코드 대손 **/
ACConstants.BILLRECV_BDEBT = "80";

/** 어음상태 코드 지급 **/
ACConstants.BILLRECV_PAY = "90";

/** 어음상태 코드 부도후수금 (2006.03.13 사용안함.)**/
//  ACConstants.BILLRECV_DISHO_AFTER_DUE = "90";

/** 어음상태 코드 할인후부도 (2006.03.13 사용안함.)**/
//  ACConstants.BILLRECV_DRAFT_DC_AFTER_DISHO = "91";

/** 어음상태 코드 할인부도후수금 (2006.03.13 사용안함.)**/
//  ACConstants.BILLRECV_DRAFT_DC_DISHO_AFTER_DUE = "92";

/** 어음상태 코드 할인부도대손 (2006.03.13 사용안함.)**/
//    ACConstants.BILLRECV_DRAFT_DC_DISHO_BDEBT = "93";


/** 매출구분 **/
ACConstants.SELL = "1";

/** 매입구분 **/
ACConstants.PCHS = "2";

/** 상계구분 **/
ACConstants.SETOFF = "3";

/** 가지급구분 **/
ACConstants.PREPAY = "5";

/** 계정(미수금) **/
ACConstants.ACCTCD_REFUNDAMT = "1110710";

/** 계정(미지급금) **/
ACConstants.ACCTCD_NOT_PAY = "2100410";

/** 계정(수수료) **/
ACConstants.ACCTCD_CMIS = "5001070";

/** 계정(가지급금-일반) **/
ACConstants.ACCTCD_PREPAY = "1110530";

/** 계정(가지급금-급여) **/
ACConstants.ACCTCD_PREPAY_SAL = "1110531";

/** 계정(선급금) **/
ACConstants.ACCTCD_SUSPENSE = "1111010";

/** 계정(매입 부가세) **/
ACConstants.ACCTCD_PCHS_VAT = "1111210";

/** 계정(매출 부가세) **/
ACConstants.ACCTCD_SELL_VAT = "2100710";

/** 계정(선급비용) **/
ACConstants.ACCTCD_SUSPENSE_COST = "1111110";

/** 계정(잡이익,할인금액) **/
ACConstants.ACCTCD_DCAMT = "6110231";

/** 계정(전도금-일반) **/
ACConstants.ACCTCD_ADVCD = "1110121";

/** 계정(전도금-환전) **/
ACConstants.ACCTCD_ADVCD_EXCHG = "1110122";

/** 계정(전도금-말일수입금) **/
ACConstants.ACCTCD_ADVCD_LST_DD_IMP_AMT = "1110123";

/** 계정(전도금-왕복발권) **/
ACConstants.ACCTCD_ADVCD_ROUTRP_NTEISS = "1110124";

/** 계정(전도금-탁송) **/
ACConstants.ACCTCD_ADVCD_CONSEND = "1110125";


/** 계정(가수금) **/
ACConstants.ACCTCD_SUS_RECV = "2100550";

/** 계정(선수금) **/
ACConstants.ACCTCD_INITAMT = "2100510";

/** 계정(선수금-담보) **/
ACConstants.ACCTCD_INITAMT_PLDG = "2100560";

/** 계정(위수탁-미지급비용거래처) **/
ACConstants.ACCTCD_INITAMT_TRUS = "2100810";

/** 계정(위수탁-대급금_수탁비용) **/
ACConstants.ACCTCD_ADVCD_TRUS = "1110561";


/** 계정(위수탁-외상매입수탁) **/
ACConstants.CRSALES_PURCHASE_TRUS = "2100140";

/** 계정(위수탁-외상매출수탁) **/
ACConstants.CRSALES_SELLING_TRUS = "1110412";

/** 계정(위수탁-과태료) **/
ACConstants.ACCTCD_ADVCD_FAULT_RATE = "1110560";



/** 계정(현금) **/
ACConstants.ACCTCD_CASH = "1110110";

/** 계정(건설중인 자산) **/
ACConstants.ACCTCD_BUILDING_ASET = "1221010";

/** 계정(받을어음대손충당금) **/
ACConstants.ACCTCD_BDEBT_PROV = "1110920";

/** 계정(대손상각비) **/
ACConstants.ACCTCD_BDEBT_DEPR = "5002810";

/** 계정(유형자산처분이익) **/
ACConstants.ACCTCD_TANGIBLE_ASET_DISPOSE_PROFIT = "6110180";

/** 계정(유형자산폐기손실) **/
ACConstants.ACCTCD_TANGIBLE_ASET_DISUSE_LOSS = "6120150";

/** 계정(유형자산처분손실) **/
ACConstants.ACCTCD_TANGIBLE_ASET_DISPOSE_LOSS = "6120170";

/** 계정(매출채권처분손실) **/
ACConstants.ACCTCD_SELL_ACCT_RECV = "6120040";

/** 계정(받을어음) **/
/*  사용안함
ACConstants.ACCTCD_BILLRECEIVABLE = "1110430";
    */

/** 계정(받을어음-약속어음) **/
ACConstants.ACCTCD_BILLRECEIVABLE_PROMISE = "1110431";

/** 계정(받을어음-전자어음) **/
ACConstants.ACCTCD_BILLRECEIVABLE_ELECT = "1110432";

/** 계정(받을어음-가계수표) **/
ACConstants.ACCTCD_BILLRECEIVABLE_STOCK = "1110431";

/** 계정(받을어음-당좌수표) **/
ACConstants.ACCTCD_BILLRECEIVABLE_CHECK = "1110431";

/** 계정(외상매출금) **/
ACConstants.ACCTCD_TRUST_SELL = "1110410";

/** 계정(외상매출금-기타) **/
ACConstants.ACCTCD_TRUST_SELL_ETC = "1110415";

/** 계정(외상매출금택배-법인) **/
ACConstants.ACCTCD_TRUST_SELL_DELIVER = "1110414";

/** 계정(외상매출금택배-개인) **/
ACConstants.ACCTCD_TRUST_SELL_DLV_PRSN = "1110413";

/** 계정(외상매입금) **/
ACConstants.ACCTCD_TRUST_PCHS = "2100110";

/** 계정(알선수탁금) **/
ACConstants.ACCTCD_MEDIATE_TRUST = "2101420";

/** 계정(단기대여금-대급금) **/
ACConstants.ACCTCD_SHT_TERM_LEND = "1110550";

/** 계정(매표수탁금) **/
ACConstants.ACCTCD_TICK_TRUST = "2101410";

/** 계정(지급어음) **/
ACConstants.ACCTCD_PAYNO = "2100121";

/** 계정(지급어음-전자) **/
ACConstants.ACCTCD_PAYNO_E = "2100122";

/** 계정(미확정외상매출) **/
ACConstants.ACCTCD_UNSETTLED_AR = "1110420";

/** 계정(미확정매출) **/
ACConstants.ACCTCD_UNSETTLED_SELL = "4103010";

/** 계정(미확정매출원가) **/
ACConstants.ACCTCD_UNSETTLED_PCOST = "4205000";

/** 계정(미확정외상매입) **/
ACConstants.ACCTCD_UNSETTLED_AP = "2100130";

/** 계정(외환차익) **/
ACConstants.ACCTCD_FOREIGN_MARGIN = "6110070";


/** 계정(외환차손) **/
ACConstants.ACCTCD_FOREIGN_LOSS = "6120100";

/** 계정(미지급비용-거래처) **/
ACConstants.ACCTCD_PAY_COST_CLNT = "2100810";

/** 계정(미지급비용-사원) **/
ACConstants.ACCTCD_PAY_COST_EMP = "2100820";

/** 계정(미지급비용-보험료) **/
ACConstants.ACCTCD_PAY_COST_INSURANCE = "2100850";

/** 계정(미지급비용-전도금) **/
ACConstants.ACCTCD_PAY_COST_ADVCD = "2100860";

/** 계정(미지급비용-송금명세) **/
ACConstants.ACCTCD_PAY_COST_REMIT = "2100870";

/** 계정(유동화부채) **/
ACConstants.ACCTCD_ABS = "2200910";

/** 계정(유동성유동화부채-일반) **/
ACConstants.ACCTCD_ABS_GNR = "2101051";

/** 계정(일반매출) **/
ACConstants.ACCTCD_SELL = "4101010";

/** 계정(매표수수료매출) **/
ACConstants.ACCTCD_TICK_CMIS_SELL = "4101070";

/** 계정(수하물매출) **/
ACConstants.ACCTCD_LUG_SELL = "4101050";

/** 계정(주유수수료매출) **/
ACConstants.ACCTCD_OILING_CMIS_SELL = "4101080";

/** 계정(차량대차매출) **/
ACConstants.ACCTCD_LNDCAR_SELL = "4101120";

/** 계정(상가임대매출) * */
ACConstants.ACCTCD_STOR_RENT_SELL = "4101030";

/** 계정(업무수탁료매출) * */
ACConstants.ACCTCD_TASK_TRUST_SELL = "4101100";



/** 계정(지급수수료) **/
ACConstants.ACCTCD_PAY_CMIS = "5001070";

/** 계정(원)일반지급수수료-기타) **/
ACConstants.ACCTCD_GNRL_PAY_CMIS_ETC = "4202217";

/** 계정(미수수익) **/
ACConstants.ACCTCD_REFUND_PROFIT = "1110810";

/** 계정(외상매출대손충당금) **/
ACConstants.ACCTCD_ACCT_RECV_BDEBT = "1110910";

/** 계정(유가증권-매도가능증권) **/
ACConstants.ACCTCD_WERT = "1110310";

/** 계정(선급법인세-일반) **/
ACConstants.CORPORATION_TAX = "1111310";

/** 계정(선급법인세-지방소득세) **/
ACConstants.LOCAL_TAX = "1111320";

/** 계정(이자) **/
ACConstants.INTEREST = "6120010";

/** 계정(수입이자와 할인료) **/
ACConstants.ACCTCD_IMPINTEREST = "6110010";


/** 계정(사채이자계정요) **/
ACConstants.ACCTCD_ACCT_PAY_INTEREST = "6120020";
    

/** 계정(보증료) **/
ACConstants.ACCTCD_GUARANTY = "1210510";


/** 잡이익(위약금) **/
ACConstants.ACCTCD_DCAMT_PNLTY = "6110232";

/** 계정 (잡손실) **/
ACConstants.ACCTCD_ETCLOSS = "6120220";

/** 저장품-부품 **/
ACConstants.ACCTCD_SPLY_PARTS         = "1120110"    ;

/** 저장품-타이어 **/
ACConstants.ACCTCD_SPLY_TIRES         = "1120120"    ;

/** 저장품-경유 **/
ACConstants.ACCTCD_SPLY_LOIL          = "1120130"    ;

/** 저장품-잡유 **/
ACConstants.ACCTCD_SPLY_ETCOIL        = "1120140"    ;

/** 저장품-기타 **/
ACConstants.ACCTCD_SPLY_ETC           = "1120150"    ;

/** 경유비-영업용차량 **/
ACConstants.ACCTCD_LOIL_VEHCL        = "4201710"    ;

/** 잡유비-영업용차량 **/
ACConstants.ACCTCD_ETCOIL_VEHCL   = "4201810"    ;

/** 잡유비-중기 **/
ACConstants.ACCTCD_ETCOIL_HVEQ        = "4201820"    ;

/** 잡유비-선박 **/
ACConstants.ACCTCD_ETCOIL_VSSL        = "4201830"    ;

/** 잡유비-기타 **/
ACConstants.ACCTCD_ETCOIL_ETC         = "4201840"    ;

/** 타이어비-영업용차량 **/
ACConstants.ACCTCD_TIRE_VEHCL         = "4201910"    ;

/** 타이어비-중기 **/
ACConstants.ACCTCD_TIRE_HVEQ          = "4201920"    ;

/** 타이어비-외주 **/
ACConstants.ACCTCD_TIRE_OUTORD        = "4201940"    ;

/** 타이어비-기타 **/
ACConstants.ACCTCD_TIRE_ETC           = "4201950"  ;

/** 정비부품비-영업용차량 **/
ACConstants.ACCTCD_FIXPART_VEHCL  = "4202010"    ;

/** 정비부품비-중기 **/
ACConstants.ACCTCD_FIXPART_HVEQ   = "4202020"    ;

/** 정비부품비-선박 **/
ACConstants.ACCTCD_FIXPART_VSSL   = "4202030"    ;

/** 정비부품비-기타 **/
ACConstants.ACCTCD_FIXPART_ETC        = "4202040"    ;

/** 정비소모품비-영업용차량 **/
ACConstants.ACCTCD_FIXUSEUP_VEHCL = "4202110"    ;

/** 정비소모품비-중기 **/
ACConstants.ACCTCD_FIXUSEUP_HVEQ  = "4202120"    ;

/** 정비소모품비-선박 **/
ACConstants.ACCTCD_FIXUSEUP_VSSL  = "4202130"    ;

/** 정비소모품비-기타 **/
ACConstants.ACCTCD_FIXUSEUP_ETC   = "4202140"    ;

/** 계정(선수금-예매) **/
ACConstants.ACCTCD_INITAMT_ADV = "2100520";

/** 계정(선수금-TM) **/
ACConstants.ACCTCD_INITAMT_TM = "2100540";

/** 선수금-과입  **/
ACConstants.ACCTCD_INITAMT_OVER = "2100530";

/** 미수금-과입 **/
ACConstants.ACCTCD_REFUNDAMT_OVER = "1110720";

/** 매표가지급금 **/
ACConstants.ACCTCD_PREPAY_TICKET = "1110540";

/** 계정(외주수선비-기타) **/
ACConstants.ACCTCD_OUTORD_REPAIREXPENSE = "4204030";

/** 계정(외주수선비-정비공장) **/
ACConstants.ACCTCD_OUTORD_REPAIREXPENSE_F = "4204020";

/** 계정(외주수선비-렌터카) **/
ACConstants.ACCTCD_OUTORD_REPAIREXPENSE_R = "4204010";

/** 계정(부도어음대손충당금) **/
ACConstants.ACCTCD_DISHO_BILLRECEIVABLE_BDEBT_PROV = "1110990";

/** 계정(부도어음-일반) **/
ACConstants.ACCTCD_DISHO_BILLRECEIVABLE = "1210610";

/** 계정(단기차입금-어음) **/
ACConstants.ACCTCD_SHORT_TERM_DEBT_DUE = "2100320";

/** 계정(예수금-근로소득세(일용)) **/
ACConstants.ACCTCD_INCOME_TAX_DUSE_PST = "2100602";

/** 계정(예수금-근로주민세(일용)) **/
ACConstants.ACCTCD_MAN_TAX_DUSE_PST = "2100604";

/** 계정(예수금-근로소득세(정규)) **/
ACConstants.ACCTCD_INCOME_TAX_REGULAR = "2100601";

/** 계정(예수금-근로주민세(정규)) **/
ACConstants.ACCTCD_MAN_TAX_REGULAR = "2100603";

/** 계정(예수금-연말정산(환급,소득세) **/
ACConstants.ACCTCD_INCOME_TAX_YEAR_ADJM = "2100605";

/** 계정(예수금-연말정산(환급,주민세)) **/
ACConstants.ACCTCD_MAN_TAX_YEAR_ADJM = "2100606";

/** 계정(예수금-중도정산(환급,소득세) **/
ACConstants.ACCTCD_INCOME_TAX_MIDWAY_ADJM = "2100617";

/** 계정(예수금-중도정산(환급,주민세)) **/
ACConstants.ACCTCD_MAN_TAX_MIDWAY_ADJM = "2100618";

/** 계정(예수금-퇴직소득세) **/
ACConstants.ACCTCD_INCOME_TAX_RETIRE = "2100607";

/** 계정(예수금-퇴직주민세) **/
ACConstants.ACCTCD_MAN_TAX_RETIRE = "2100608";

/** 계정(예수금-기타) **/
ACConstants.ACCTCD_WITHHOLD_ETC = "2100611";  

/** 계정(원)복후비-국민건강보험료 **/
ACConstants.ACCTCD_WELSAL_HEALTH_INSURANCE_PCOST = "4200617";

/** 계정 판)복후비-국민건강보험료 **/
ACConstants.ACCTCD_WELSAL_HEALTH_INSURANCE_SALE = "5000615";
    
/** 계정 원)복후비-국민연금 **/
ACConstants.ACCTCD_WELSAL_NATIONAL_PENSION_PCOST = "4200620";

/** 계정 판)복후비-국민연금 **/
ACConstants.ACCTCD_WELSAL_NATIONAL_PENSION_SALE = "5000618";

/** 계정 원)복후비-고용보험료 **/
ACConstants.ACCTCD_WELSAL_HIRE_INSR_PCOST = "4200619";

/** 계정 판)복후비-고용보험료 **/
ACConstants.ACCTCD_WELSAL_HIRE_INSR_SALE = "5000617";     

/** 계정(원)세금과공과-사업소세) **/
ACConstants.ACCTCD_BIX_TAX_PCOST = "4203413";

/** 계정(판)세금과공과-사업소세) **/
ACConstants.ACCTCD_BIX_TAX_SALE = "5001913";

/** 계정(자동차보험료) **/
ACConstants.ACCTCD_CAR_INSR = "4202511";

/** 계정(차량검사비-영업용) **/
ACConstants.ACCTCD_INSP_COST_VEHCL = "4204610";

/** 계정(차량검사비-중기) **/
ACConstants.ACCTCD_INSP_COST_HVEQ = "4204620";

/** 계정(차량검사비-기타) **/
ACConstants.ACCTCD_INSP_COST_ETC = "4204630";

/** 계정(지급수수료-매표수수료) **/
ACConstants.ACCTCD_PAY_CMIS_TICK = "4202212";

/** 계정(지급수수료-기타용역비) **/
ACConstants.ACCTCD_PAY_CMIS_ETC_SERVICE_COST = "4202216";

/** 계정(용차료-기타) **/
ACConstants.ACCTCD_HIRECAR_ETC = "4201340";

/** 계정(잡급-일용직) **/
ACConstants.ACCTCD_WITHHOLD_DUSE_PST = "4200310";

/** 계정(유가증권 평가이익) **/
ACConstants.ACCTCD_WERTPAPIER_PROFIT = "6110110";

/** 계정(유가증권 평가손실) **/
ACConstants.ACCTCD_WERTPAPIER_LOSS = "6120060";

/** 계정(선급법인세) **/
ACConstants.ACCTCD_PREPAY_CORTAX = "1111310";

/** 계정(수도광열비-전기료) **/
ACConstants.ACCTCD_HEATING_ELEC = "4203220";

/** 계정(수도광열비-상하수도료) **/
ACConstants.ACCTCD_HEATING_WATER = "4203210";

/** 계정(수도광열비-난방비) **/
ACConstants.ACCTCD_HEATING_BILLS = "4203230";

/** 계정(수도광열비-기타) **/
ACConstants.ACCTCD_HEATING_ETC = "4203240";

/** 계정(차량유지비-유류비) **/
ACConstants.ACCTCD_OIL_COST = "4203610";

/** 계정(차량유지비-유류비(판)) **/
ACConstants.ACCTCD_OIL_COST_S = "5002110";

/** 계정(운반비) **/
ACConstants.ACCTCD_PRTG_COST = "4204710";

/** 계정(운반비(판)) **/
ACConstants.ACCTCD_PRTG_COST_S = "5002710";

/** 계정(현장복후비기타) **/
ACConstants.ACCTCD_WRK_PL_WELSAL_ETC = "4200714";

/** 계정(복후비-당숙직비) **/
ACConstants.ACCTCD_WELSAL_DUTY = "4200623";

/** 계정(복후비-여비교통비기타) **/
ACConstants.ACCTCD_WELSAL_TRFFC_COST_ECT = "4200850";

/** 계정(현장복후비단거리식대) **/
ACConstants.ACCTCD_WRK_PL_WELSAL_FOOD = "4200712";

/** 계정(현장복후비비연고지숙박식대) **/
ACConstants.ACCTCD_WRK_PL_WELSAL_NO_RELPL_FOOD = "4200713";

/** 계정(어음차입) **/
ACConstants.ACCTCD_DRAFT_BORROWING = "2100320";

/** 계정(선급비용) **/
ACConstants.ACCTCD_PREPAY_COST = "1111110";

/** 계정( 원)서적인쇄비) **/
ACConstants.ACCTCD_BOOK_PSW_COST = "4202810";

/** 계정( 원)통행료) - 사용안함**/
/*
ACConstants.ACCTCD_TRAFFIC_FEE = "4204400";
*/

/** 계정( 원)통행료- 일반) **/
ACConstants.ACCTCD_TRAFFIC_FEE_GNRL = "4204410";

/* 관리계정코드 */

/** 관리계정(매출) **/
ACConstants.ACCTCD_SELL_UPPER = "4100000";

/** 관리계정(매출총이익) **/
ACConstants.ACCTCD_SELL_TOT_GAIN = "4900000";

/** 관리계정 (수량) **/
ACConstants.ACCTCD_QTY = "9200011";

/** 관리계정 (운행횟수) **/
ACConstants.ACCTCD_RUN_CNT = "9200006";

/** 관리계정 (대수) **/
ACConstants.ACCTCD_CNT = "9200011";

/** 계정(단기대여금-기타) **/
ACConstants.ACCTCD_LOAN_ST = "1110570";

/** 계정(원)경유비-중기) **/
ACConstants.ACCTCD_SPLY_LOIL_HVEQ = "4201720";

/** 계정( 원)현장복후비현장직복후비) **/
ACConstants.ACCTCD_WRK_PL_WELSAL = "4200711";



/** 계정( 원)토지-투자부동산) **/
ACConstants.ACCTCD_INVST_LAND = "1210410";

/** 계정( 원)건물-투자부동산) **/
ACConstants.ACCTCD_INVST_BUILDING = "1210420";

/** 계정( 원)유형자산-토지) **/
ACConstants.ACCTCD_TANGIBLE_ASET_LAND = "1220110";

/** 계정( 원)유형자산-건물) **/
ACConstants.ACCTCD_TANGIBLE_ASET_BUILDING = "1220210";

/** 계정( 원)감가상각누계(유형) **/
ACConstants.ACCTCD_INVST_DEPR_COST = "1221110";

/** 계정( 원)감가상각누계(투자) **/
ACConstants.ACCTCD_INVST_DEPR = "1221190";



/** 정산방법(미지급비용-개인형법인카드정산) **/
ACConstants.ADJM_MTHDCD_NOPAY_COST_PRIVATE_COR_CARD  = "0";

/** 정산방법(미지급비용) **/
ACConstants.ADJM_MTHDCD_NOPAY_COST  = "1";

/** 정산방법(미지급금) **/
ACConstants.ADJM_MTHDCD_NOPAY   = "2";

/** 정산방법(전도금) **/
ACConstants.ADJM_MTHDCD_ADVANCED    = "3";

/** 정산방법(가지급금) **/
ACConstants.ADJM_MTHDCD_SUSPAY  = "4";

/** 정산방법(선급금) **/
ACConstants.ADJM_MTHDCD_PREPAY  = "5";

/** 정산방법(법인카드) **/
ACConstants.ADJM_MTHDCD_COR_CARD    = "6";

/** 정산방법(건설중인 자산) **/
ACConstants.ADJM_MTHDCD_BUILDING_ASSET  = "7";

/** 정산방법(저장품) **/
ACConstants.ADJM_MTHDCD_SAVE_GOODS  = "8";

/** 정산방법(외상매입금) **/
ACConstants.ADJM_MTHDCD_AP  = "9";

/** 정산방법(장기미지급금-일반) **/
ACConstants.ADJM_MTHDCD_LONG_NOPAY  = "10";

/** 정산방법(장기미지급금-리스부채) **/
ACConstants.ADJM_MTHDCD_LONG_NOPAY_LEASE  = "11";


/** 지급상태(준비) **/
ACConstants.PAYMENT_PREPARE_STS  = "00";

/** 지급상태(보류) **/
ACConstants.PAYMENT_RESERVE_STS  = "10";

/** 지급상태(대기) **/
ACConstants.PAYMENT_WAIT_STS  = "20";

/** 지급상태(결정) **/
ACConstants.PAYMENT_DECIDE_STS  = "30";

/** 지급상태(확정) **/
ACConstants.PAYMENT_DECISION_STS  = "40";

/** 지급상태(역전표) **/
ACConstants.PAYMENT_REVERSE_STS  = "60";

/** 지급상태(가압류) **/
ACConstants.PAYMENT_PRVS_SZ  = "15";

/** 지급상태(해제요청) **/
ACConstants.PAYMENT_CANCLE_STS  = "21";

/** 지급상태(상계대기) **/
ACConstants.PAYMENT_SETOFF_WAIT_STS  = "25";


/* 받을어음에서 사용되는 각 어음상태 구분값.*/
/** 받을어음(만기처리) **/
ACConstants.BILLRECV_STATUS_DUE  = 10;

/** 받을어음(만기취소) **/
ACConstants.BILLRECV_STATUS_DUE_CANCEL  = 11;

/** 받을어음 (어음종류-전자어음) **/
ACConstants.BILLRECV_ELEC_BILLRECV  = "20";

/** 받을어음 (어음종류-약속어음) **/
ACConstants.BILLRECV_PROMISE  = "10";

/*
    * 지급방법
    */
/** 지급방법(현금) **/
ACConstants.PAYMENT_CASH  = "10";

/** 지급방법(이체) **/
ACConstants.PAYMENT_TRANSFER  = "20";

/** 지급방법(경비이체_외화) **/
ACConstants.PAYMENT_TRANSFER_FR  = "21";

/** 지급방법(전자결재) **/
ACConstants.PAYMENT_ELECAPPRV  = "25";

/** 지급방법(전자결재-현금) **/
ACConstants.PAYMENT_ELECAPPRV_CASH  = "30";

/** 지급방법(전자어음) **/
ACConstants.PAYMENT_ELECTRONIC_DRAFT  = "40";

/** 지급방법(실물어음) **/
ACConstants.PAYMENT_DRAFT_CHECK  = "50";

/** 지급방법(당좌수표) **/
ACConstants.PAYMENT_CURR_CHECK  = "60";

/** 지급방법(급여이체) **/
ACConstants.PAYMENT_SAL_TRANSFER  = "70";

/** 지급방법(상계처리) **/
ACConstants.PAYMENT_SETOFF  = "80";

/** 지급방법(자동이체) **/
ACConstants.PAYMENT_AUTO_TRANSFER  = "90";

/*
    * 증빙구분
    */
/** 증빙구분(세금계산서) **/
ACConstants.EVID_CLSCD_TAX_INVOICE  = "10";

/** 증빙구분(세금계산서-기타) **/
ACConstants.EVID_CLSCD_TAX_INVOICE_ETC  = "11";

/** 증빙구분(영세율세금계산서) **/
ACConstants.EVID_CLSCD_ZERO_TAX_INVOICE  = "20";

/** 증빙구분(계산서) **/
ACConstants.EVID_CLSCD_INVOICE  = "30";

/** 증빙구분(법인카드) **/
ACConstants.EVID_CLSCD_COR_CARD  = "40";

/** 증빙구분(개인카드) **/
ACConstants.EVID_CLSCD_PRSN_CARD  = "50";

/** 증빙구분(현금영수증) **/
ACConstants.EVID_CLSCD_CASH_VOUCHER  = "60";

/** 증빙구분(영수증) **/
ACConstants.EVID_CLSCD_PRSN_VOUCHER  = "70";


/** 증빙구분(기타) **/
ACConstants.EVID_CLSCD_NO_EVIDENCE  = "99";

/** 증빙구분(고속면세매출) **/
ACConstants.EVID_TAX_FREE  = "12";


/** 증빙구분(기타-부가세없음) **/
ACConstants.EVID_CLSCD_ETC_NO  = "00";

/*
    * 자산매각/폐기구분
    */
/** 자산매각/폐기구분(전체) **/
ACConstants.ASET_ALL_CLS_ALL  = "1";

/** 자산매각/폐기구분(전체) **/
ACConstants.ASET_ALL_CLS_PARTIAL  = "2";

/*
    * 가수금 / 선수금 처리 관련 코드
    */
/** 가수/선수 발생 **/
ACConstants.SUSPINIT_INITAMT_CREATE_PROCESS  = "01";

/** 선수금 처리 **/
ACConstants.SUSPINIT_INITAMT_PROCESS  = "02";

/** 잡이익 처리 **/
ACConstants.SUSPINIT_PROFIT_PROCESS  = "03";

/** 환불 처리 **/
ACConstants.SUSPINIT_REFUND_PROCESS  = "04";

/** 가수/선수 발생취소 **/
ACConstants.SUSPINIT_INITAMT_CREATE_CANCEL  = "05";

/** 선수금 처리취소 **/
ACConstants.SUSPINIT_INITAMT_CANCEL  = "06";

/** 잡이익 처리취소 **/
ACConstants.SUSPINIT_PROFIT_CANCEL  = "07";

/** 환불 처리취소 **/
ACConstants.SUSPINIT_REFUND_CANCEL  = "08";

/** 수금 **/
ACConstants.SUSPINIT_BILLRECEIVABL  = "99";

/** 가수/선수 자산처리 **/
ACConstants.SUSPINIT_FIXED_ASET_PROCESS  = "10";

/** 가수/선수 자산처리취소 **/
ACConstants.SUSPINIT_FIXED_ASET_CANCEL  = "11";

/** 가수/선수 매표처리 **/
ACConstants.SUSPINIT_TICKET_PROCESS  = "12";

/** 가수/선수 매표처리취소 **/
ACConstants.SUSPINIT_TICKET_CANCEL  = "13";

/** 가수/선수 면책금처리 **/
ACConstants.SUSPINIT_EXEMP_PROCESS  = "14";

/** 가수/선수 면책금처리취소 **/
ACConstants.SUSPINIT_EXEMP_CANCEL  = "15";

/** 가수/선수 물류매출처리 **/
ACConstants.SUSPINIT_LOGIC_SELL_PROCESS  = "16";

/** 가수/선수 물류매출처리취소 **/
ACConstants.SUSPINIT_LOGIC_SELL_CANCEL  = "17";

/** 가수/선수 반제처리 **/
ACConstants.SUSPINIT_REPAYMENT_PROCESS  = "18";

/** 가수/선수 반제처리취소 **/
ACConstants.SUSPINIT_REPAYMENT_CANCEL  = "19";


/*
    * 가수금/선수금 상태코드
    */
/** 가수/선수금 발생 **/
ACConstants.SUSPINIT_STATUS_CREATE  = "01";

/** 가수/선수금 정리 **/
ACConstants.SUSPINIT_STATUS_ARRAGEMENT  = "02";

/** 가수/선수금 미정리 **/
ACConstants.SUSPINIT_STATUS_NOT_ARRAGEMENT  = "03";


/*
    * 마감관련 코드
    */
/** 관리회계-년마감-(예산배정)(사업계획손익집계) **/
ACConstants.CLOSE_PLAN_CREATION  = "CO01";

/** 관리회계-월마감-(예산배정) **/
ACConstants.CLOSE_BUDGET_CREATION  = "CO02";

/** 관리회계-월마감-(관리마감) **/
ACConstants.CLOSE_STAFF_RESULTS  = "CO03";

/** 관리회계-월마감-(사업계획손익집계) **/
ACConstants.CLOSE_BUSINESS_PLAN_PROFITLOSS_RSLT = "CO04";

/** 관리회계-년마감-(부서별 손익계획조회)(사업계획손익집계) **/
ACConstants.CLOSE_DEPT_PROFIT_LOSS  = "CO05";

/** 관리회계-년마감-(사업계획손익집계) **/
ACConstants.CLOSE_MEET_REPORT  = "CO06";

/** 관리회계-년마감-(사업계획손익집계) **/
ACConstants.CLOSE_BUSINESS_PLAN_AGGR  = "CO08";

/** 관리회계-월마감-(계획 1차배부) **/
ACConstants.CLOSE_PLAN_DISTRIBUTION_1  = "CO09";

/** 관리회계-월마감-(계획 2차배부) **/
ACConstants.CLOSE_PLAN_DISTRIBUTION_2  = "CO10";

/** 관리회계-월마감-(계획 3차배부) **/
ACConstants.CLOSE_PLAN_DISTRIBUTION_3  = "CO25";

/** 관리회계-회계마감집계-(실적집계) **/
ACConstants.CLOSE_RESULT_AGGREGATION_C11  = "CO11";

/** 관리회계-월마감-(관리계정별원장생성) **/
ACConstants.CLOSE_MGNT_ACCT_CREATE  = "CO12";

/** 관리회계-월마감-(실적 1차배부) **/
ACConstants.CLOSE_RESULTS_DISTRIBUTION_1  = "CO12";

/** 관리회계-월마감-(실적 2차배부) **/
ACConstants.CLOSE_RESULTS_DISTRIBUTION_2  = "CO13";

/** 관리회계-월마감-(실적 3차배부) **/
ACConstants.CLOSE_RESULTS_DISTRIBUTION_3  = "CO26";

/** 관리회계-월마감-(미확정내역집계) **/
ACConstants.CLOSE_RESULTS_AGGREGATION_C14 = "CO14";

/** 관리회계-월마감-(미확정차감잔액생성) **/
ACConstants.CLOSE_RESULTS_AGGREGATION_C15 = "CO15";

/** 관리회계-월마감-(자산비용산정) **/
ACConstants.CLOSE_RESULTS_AGGREGATION_C16 = "CO16";

/** 관리회계-월마감-(관리손익집계) **/
ACConstants.CLOSE_RESULTS_AGGREGATION_C17 = "CO17";

/** 관리회계-월마감-(특성별실적집계_물류) **/
ACConstants.CLOSE_RESULTS_AGGREGATION_C18 = "CO18";

/** 관리회계-월마감-(실적집계-회의마감집계) **/
ACConstants.CLOSE_RESULTS_AGGREGATION_C19 = "CO19";

/** 관리회계-월마감-(특성별실적집계_렌터카) **/
ACConstants.CLOSE_RESULTS_AGGREGATION_C20 = "CO20";

/** 관리회계-월마감-(특성별관리손익) **/
ACConstants.CLOSE_RESULTS_AGGREGATION_C21 = "CO21";

/** 관리회계-월마감-(사업계획예산생성) **/
ACConstants.CLOSE_BUSINESS_PLAN_BUDGET_CREATE = "CO22";

/** 관리회계-월마감-(사업계획손익집계) **/
ACConstants.CLOSE_RESULTS_AGGREGATION_C23 = "CO23";

/** 관리회계-월마감-(BSC성과관리 실적 인터페이스) **/
ACConstants.CLOSE_BSC_RESULTS_INTERFACE = "CO24";

/** 관리회계-월마감-(손익보고자회사자료) **/
ACConstants.CLOSE_SUBSIDIARY_DATA  = "CO42";


/** 월마감-마감처리 **/
ACConstants.CLOSE_MONTH  = "FI01";

/** 세무마감-마감처리 **/
ACConstants.CLOSE_TAXBIZ  = "FI02";

/** 관리채권마감-마감처리 **/
ACConstants.CLOSE_POOR_ACCT_RECV  = "FI03";

/** 선급비용마감-마감처리 **/
ACConstants.CLOSE_PREPAY_COST  = "FI04";

/** 감가상각-마감처리 **/
ACConstants.CLOSE_DEPRECIATION  = "FI05";

/** 원천세집계생성-마감처리 **/
ACConstants.CLOSE_WITHHOLD  = "FI06";

/** 계정이관-마감처리 **/
ACConstants.CLOSE_ACCTCD_TRANSFER  = "FI07";

/** 충당금설정-마감처리 **/
ACConstants.CLOSE_PROVISION_SETUP  = "FI08";

/** 월결산 통합마감 -마감처리  **/
ACConstants.CLOSE_MONTH_ALL_SETUP  = "FI09";

/** 년결산 통합마감 -마감처리 **/
ACConstants.CLOSE_YEAR_ALL_SETUP  = "FI10";

/** 자금관리-채권실적집계생성 **/
ACConstants.CLOSE_ACCT_RECV_CREATE  = "FM01";

/** 자금관리-연자금계획 **/
ACConstants.CLOSE_YEAR_FUNDEAREXP  = "FM02";

/** 자금관리-분기자금계획 **/
ACConstants.CLOSE_QUARTYY_FUNDEAREXP  = "FM03";

/** 자금관리-월자금계획 **/
ACConstants.CLOSE_MON_FUNDEAREXP  = "FM04";

/** 자금관리-월적수계산 **/
ACConstants.CLOSE_MON_FUNDASSET  = "FM05";

/** 자금관리-월령생성 **/
ACConstants.CLOSE_MON_ACCTRECVPERIOD  = "FM06";

/** 자금관리-일령생성 **/
ACConstants.CLOSE_DD_ACCTRECVPERIOD  = "FM07";

/** 자금관리-관리채권생성 **/
ACConstants.CLOSE_POOR_ACCTRECVPERIOD  = "FM08";

/** 자금관리-채권초과일생성 **/
ACConstants.CLOSE_OVR_ACCTRECVPERIOD  = "FM09";

/** 대손충당금-채권연령생성 **/
ACConstants.CLOSE_DAY_ACCTRECVPERIOD  = "FM10";

/** 투자부동산-투자부동산생성 **/
ACConstants.CLOSE_DAY_INVESTMENT  = "FM11";


/** 미마감 **/
ACConstants.WRK_NO_UNCLOSE   = "1";

/** 마감진행중 **/
ACConstants.WRK_NO_CLOSE   = "0";

/** 마감완료 **/
ACConstants.WRK_NO_CLOSE_COMPLETE   = "2";

/** 전표입력-마감처리 **/
ACConstants.CLOSE_SLIP  = "10";

/** 회계처리-마감처리 **/
ACConstants.CLOSE_POST  = "20";

/** 결산마감-마감처리 **/
ACConstants.CLOSE_SETT  = "30";

/** 증빙마감-마감처리 **/
ACConstants.CLOSE_EVID  = "40";

/** 채권마감-마감처리 **/
ACConstants.SLIP_ACCT_RECV  = "50";


/** 잡이익 전사귀속부서 코드(재무부서) **/
ACConstants.EXGAIN_ACCT_DEPT_CD  = "00009";

/** 재무팀 부서코드  **/
ACConstants.FINANCIAL_ACCT_DEPT_CD  = "00009";

/** BIDC 관리팀 부서코드  **/
ACConstants.BIDC_FINANCIAL_ACCT_DEPT_CD  = "01047";

/** 부서코드(전사)  **/
ACConstants.ALL_ACCT_DEPT_CD  = "00000";

/** 물류사업부  **/
ACConstants.DS_ACCT_DEPT_CD  = "00010";

/** 여객사업부  **/
ACConstants.PS_ACCT_DEPT_CD  = "00097";

/** 신용관리파트  **/
ACConstants.CREDIT_ACCT_DEPT_CD  = "00718";

/** 대성냉동(일괄상계처리시 사용) **/
ACConstants.DN_ACCT_DEPT_CD = "00912";

/** 동원TLS(일괄상계처리시 사용) **/
ACConstants.DNJA_ACCT_DEPT_CD = "00966";
/*
    * 수금/채권 작업구분코드
    */
/** 발생 **/
ACConstants.COLLECION_OF_MONEY_CREATE  = "01";

/** 수금 **/
ACConstants.COLLECION_OF_MONEY_COLLOFMONEY  = "02";

/** 상계 **/
ACConstants.COLLECION_OF_MONEY_SETOFF  = "03";

/** 매각 **/
ACConstants.COLLECION_OF_MONEY_DISP  = "04";

/** 대손 **/
ACConstants.COLLECION_OF_MONEY_BDEBT  = "05";

/** 잡손 **/
ACConstants.COLLECION_OF_MONEY_ETCLOSS  = "06";

/** 상계(복운외) **/
ACConstants.COLLECION_OF_MONEY_ETC  = "07";

/** 상계(고속) **/
ACConstants.COLLECION_OF_MONEY_EXPRESS  = "08";

/** 잡익 **/
ACConstants.COLLECION_OF_MONEY_ETCPROFIT  = "09";

/** 잔액 **/
ACConstants.COLLECION_OF_MONEY_RAMT  = "99";

/** 수금에서 부도어음처리시 대손충당금,대손상각비 구분코드값 **/
//    ACConstants.COLLECION_OF_MONEY_GUBUN5  = "5";

/** 수금에서 부도어음처리시 가수금/선수금 해당값 구분코드 **/
ACConstants.COLLECION_OF_MONEY_GUBUN6  = "6";

/*
    * 전표처리시 적요에 해당하는 내용
    */
ACConstants.COLL_OF_MONEY_PROCESS = "수금처리";

/*
    * 장비 매각/폐기 상태코드
    */
/**  매각 **/
ACConstants.EQUIP_STSCD_DISPOSITION = "01";

/**  폐기 **/
ACConstants.EQUIP_STSCD_DISUSE = "02";

/**  사용 **/
ACConstants.EQUIP_STSCD_INUSE = "03";

/*
    * 내부거래상태코드
    */

/**  등록 **/
ACConstants.INTERNAL_TXN_REG = "0";

/**  청구 **/
ACConstants.INTERNAL_TXN_BILG = "1";

/**  확정취소 **/
ACConstants.INTERNAL_TXN_DCSN_CNCL = "2";

/**  확정 **/
ACConstants.INTERNAL_TXN_DCSN = "3";

/**  확정수정 **/
ACConstants.INTERNAL_TXN_DCSN_MOD = "4";

/*
    * 시스템코드
    */

/**  관리회계 **/
ACConstants.INTERNAL_MGNT_SYS_CD = "CO";

/** 물류 **/
ACConstants.INTERNAL_DS_SYS_CD = "DS";

/*
    * 공제구분코드
    */

/**  공제 **/
ACConstants.DEDUCT_CLS_CD = "1";

/**  불공제 **/
ACConstants.NO_DEDUCT_CLS_CD = "2";

/*
    * 동부정보기술 - 거래처(임시)
    */

/**  동부정보기술(DIT) -거래처 **/
//ACConstants.DIT_CLNT= "118308";


/**  동부정보기술(DIT) -거래처  2009.08.03 정병용과장 요청사항 **/ 
ACConstants.DIT_CLNT= "127189";



/**  동부정보기술(DIT) -사업자번호 **/
// 20130801 변경
// ACConstants.DIT_CLNT_CRN= "2118603751";
ACConstants.DIT_CLNT_CRN_NEW= "2118119938";  
ACConstants.DIT_CLNT_CRN= "2118119938";

/*
    * 공통비구분코드
    */
/**  손익부서 **/
ACConstants.COMCOST_CLSCD_PRFLOS = "1";

/*
    * 사업계획손익집계 코드
    */
/** 사업계획마감 **/
ACConstants.BUSINESS_PLAN_CLOSE_11 = "11";

/** 사업계획마감집계 **/
ACConstants.BUSINESS_PLAN_CLOSE_15 = "15";

/** 사업계획손익집계 **/
ACConstants.BUSINESS_PLAN_CLOSE_20 = "20";

/** 회의보고집계 **/
ACConstants.BUSINESS_PLAN_CLOSE_25 = "25";

/*
    * 실적집계 집계 코드
    */
/** 관리마감 **/
ACConstants.RESULTS_AGGREGATION_01 = "01";

/** 미확정집계 **/
ACConstants.RESULTS_AGGREGATION_02 = "02";

/** 회계마감집계 **/
ACConstants.RESULTS_AGGREGATION_03 = "03";

/** 자산비용집계 **/
ACConstants.RESULTS_AGGREGATION_04 = "04";

/** 관리손익집계 **/
ACConstants.RESULTS_AGGREGATION_05 = "05";

/** 특성별집계 **/
ACConstants.RESULTS_AGGREGATION_06 = "06";

/** 회의보고집계 **/
ACConstants.RESULTS_AGGREGATION_07 = "07";

/** BSC성과관리 실적자료 인터페이스 **/
ACConstants.RESULTS_AGGREGATION_08 = "08";

/** 동부익스프레스 사업자번호 **/
ACConstants.DIT_CRN = "2208507787";

/** 대표 부가세귀속부서코드(부가세신고시-재무팀) **/
ACConstants.DIT_VAT_DECLAR_ACCT_DEPT_CD = "00009";

/** 대표 거래처코드(동부익스프레스) **/
ACConstants.DIT_CLNT_NO = "124727";

/*
    * 통화코드 단위
    */
/** 원화 단위코드 **/
ACConstants.KRW = "KRW";

/** USD 단위코드 **/
ACConstants.USD = "USD";

/** USD 단위코드 **/
ACConstants.JPY = "JPY";

/*
    * 결재문서종류
    */
/** 전표승인 **/
ACConstants.APPROVE_SLIP_CONFORM = "001";

/** 전표승인취소 **/
ACConstants.APPROVE_SLIP_CONFORM_CANCEL = "002";

/*
    * 결재상태
    */
/** 최종승인 **/
ACConstants.APPROVE_STATE_FINAL_CONFORM = "05";

/** 반려 **/
ACConstants.APPROVE_STATE_REJECT = "03";

/*
    * 외부시스템 전표처리 상태
    */

/** 전표처리 **/
ACConstants.OUT_SYSTEM_SLIP_PROC = "1";

/** 회계처리 **/
ACConstants.OUT_SYSTEM_SLIP_POST = "2";

/*
    * 외부시스템 처리코드
    */

/** 상계처리 **/
ACConstants.OUT_SYSTEM_PROC_SETOFF = "3";

/** 역분개처리 **/
ACConstants.OUT_SYSTEM_PROC_REVERSE = "4";

/*
    * 인사급상여구분
    */

/** 상여 **/
ACConstants.BONUS = "B";

/** 급여 **/
ACConstants.SALARY = "P";

/** 소급 **/
ACConstants.RETROACT = "S";


/** 퇴직금 **/
ACConstants.RETIRE = "T";


/** 건강보험 **/
ACConstants.HEALTH_INSURANCE = "Y";


/** 국민연금 **/
ACConstants.NATIONAL_PENSION = "Z";

/** 고용보험(원천세쪽에서사용) **/
ACConstants.HIRE_INSR = "X";


/** 오디지원금 **/
ACConstants.HIRE_CAR = "C";

/** 통신비지원금 **/
ACConstants.HIRE_HANDPHONE = "H";

/** 경조금 **/
ACConstants.EXPENDITURE_CON = "W";

/** PI수당 **/
ACConstants.PI_BONUS = "Q";


/*
    * 비용구분
    */

/** 원가 **/
ACConstants.COST_CLS_PCOST = "01";

/** 판매관리비 **/
ACConstants.COST_CLS_SALE_MGNT = "02";

/** 원가 + 판매관리비 **/
ACConstants.COST_CLS_PCOST_SALE_MGNT = "03";

/*
    * 비용구분에 따른 계정레벨
    */

/** 원가계정 **/
ACConstants.ACCT_PREFIX_PCOST = "6";

/** 판매관리비계정 **/
ACConstants.ACCT_PREFIX_SALE_MGNT = "5";

/**
 * 차입상환방법 - 미지급비용
 */
ACConstants.BORROW_NYPAY_AMT_MTHD_CD = "01";

/**
 * 차입상환방법 - 통장
 */
ACConstants.BORROW_BANKBOOK_MTHD_CD = "02";

/**
 * 차입상환구분 - 원금
 */
ACConstants.BORROW_ORIGINAL_CLS_CD = "01";

/**
 * 차입상환구분 - 이자
 */
ACConstants.BORROW_INTEREST_CLS_CD = "02";

/**
 * 차입상환구분 - 보증료
 */
ACConstants.BORROW_GRT_CLS_CD = "03";

/**
 * 지급어음상태 - 수취
 */
ACConstants.NOTEPAY_REC_STS_CD = "01";

/**
 * 지급어음상태 - 진성
 */
ACConstants.NOTEPAY_GENUIN_STS_CD = "02";

/**
 * 지급어음상태 - 견질
 */
ACConstants.NOTEPAY_BLNK_STS_CD = "03";

/**
 * 지급어음상태 - CP
 */
ACConstants.NOTEPAY_CP_STS_CD = "04";

/**
 * 지급어음상태 - 만기
 */
ACConstants.NOTEPAY_DUE_STS_CD = "05";

/**
 * 지급어음상태 - 폐기
 */
ACConstants.NOTEPAY_DISUSE_STS_CD = "06";

/**
 * 어음수표구분 - 실물어음
 */
ACConstants.DRAFTCHECK_DRAFT_CHECK_CLS_CD = "01";

/**
 * 어음수표구분 - 전자어음
 */
ACConstants.DRAFTCHECK_ELEC_DRAFT_CLS_CD = "02";

/**
 * 어음수표구분 - 당좌수표
 */
ACConstants.DRAFTCHECK_CURR_DRAFT_CLS_CD = "03";

/**
 * 예적금거래구분 - 불입
 */
ACConstants.DPSIT_SAVE_ACCT_PAYMT_CLS_CD = "01";

/**
 * 예적금거래구분 - 수입이자
 */
ACConstants.DPSIT_SAVE_ACCT_IMPINTEREST_CLS_CD = "02";

/**
 * 예적금거래구분 - 미수수익
 */
ACConstants.DPSIT_SAVE_ACCT_UNCOLLPROFIT_CLS_CD = "03";

/**
 * 예적금거래구분 - 법인세대급금-법인세분
 */
ACConstants.DPSIT_SAVE_ACCT_CORTAX_CLS_CD = "04";

/**
 * 예적금거래구분 - 만기해지
 */
ACConstants.DPSIT_SAVE_ACCT_DUETMN_CLS_CD = "05";

/**
 * 예적금거래구분 - 중도해지
 */
ACConstants.DPSIT_SAVE_ACCT_MIDSTREAMTMN_CLS_CD = "06";

/**
 * 예적금거래구분 - 법인세대급금-지방세분
 */
ACConstants.DPSIT_SAVE_ACCT_LOCALTAX_CLS_CD = "07";


/**
 * 예적금거래상태 - 진행
 */
ACConstants.DPSIT_SAVE_ACCT_PRGS_STS_CD = "01";

/**
 * 예적금거래상태 - 만기해지
 */
ACConstants.DPSIT_SAVE_ACCT_DUETMN_STS_CD = "02";

/**
 * 예적금거래상태 - 중도해지
 */
ACConstants.DPSIT_SAVE_ACCT_MIDSTREAMTMN_STS_CD = "03";

/**
 * 어음일수 - 60일
 */
ACConstants.DRAFT_SHORT_TIME = "60";

/**
 * 어음일수 - 135일
 */
ACConstants.DRAFT_LONG_TIME = "135";

/**
 * 계정구분 - 수익
 */
ACConstants.ACCT_CLS_CD_INCOOME = "4";

/**
 * 계정구분 - 판관비
 */
ACConstants.ACCT_CLS_CD_COST = "5";

/**
 * 계정구분 - 원가
 */
ACConstants.ACCT_CLS_CD_PCOST = "6";    

/**
 * 계정구분 - 기타수익
 */
ACConstants.ACCT_CLS_CD_OTHER_INCOME = "7";

/**
 * 계정구분 - 기타비용
 */
ACConstants.ACCT_CLS_CD_ECT_COST = "8";


/**
 * 합산분할코드 - 분할
 */
ACConstants.ADDUP_DIVS_DIV_CD = "S";

/**
 * 합산분할코드 - 교환
 */
ACConstants.ADDUP_DIVS_EXCHANGE_CD = "T";

/**
 * 합산분할코드 - 삭제
 */
ACConstants.ADDUP_DIVS_DELETE_CD = "Z";

/**
 * 프로그램아이디 - 전표조회삭제
 */
ACConstants.PGM_ID_SLIP_DELETE = "fi_201_04_01b.jsp";

/**
 * 영세율구분 - 일반
 */
ACConstants.ZERO_TAX_CLS_CD_GNRL = "1";

/**
 * 영세율구분 - 기타
 */
ACConstants.ZERO_TAX_CLS_CD_ETC = "2";

/**
 * 통장종류 - 딩좌예금
 */
ACConstants.BANKBOOK_KND_CURR_CHECK = "03";

/*
    * 수금수단
    */
/** 수금수단(현금) **/
ACConstants.COLL_MONEY_MTHD_CASH  = "10";

/** 수금수단(어음) **/
ACConstants.COLL_MONEY_MTHD_NOTEPAY  = "50";

/** 수금수단(외화) **/
ACConstants.COLL_MONEY_MTHD_USD  = "60";

/*
    * 변고정비 구분
    */
/** 고정비 **/
ACConstants.VARFIXED_COST_CLS_FIXED  = "2";

/*
    * 전자결재사번
    */
/** 전자결재사번 **/
ACConstants.APPRV_EMP_NO  = "apprvEmpNo";

/*
    * 가지급선급금구분
    */
/** 가지급금-일반 **/
ACConstants.SUSPAY_CLSCD_PREPAY = "1";

/** 가지급금-급여 **/
ACConstants.SUSPAY_CLSCD_PREPAY_SAL = "3";

/** 선급금 **/
ACConstants.SUSPAY_CLSCD_SUSPENSE = "2";


/*
    * 고정자산 종류
    */
/** 고속버스 **/
ACConstants.ASET_KND_EXPRESS_BUS = "131";

/*
    * 법인카드구분코드
    */
/** 미정리 **/
ACConstants.CORCARD_CLS_NOT_ARRAGEMENT  = "1";

/** 지급 **/
ACConstants.CORCARD_CLS_PAY  = "2";

/** 정리 **/
ACConstants.CORCARD_CLS_ARRAGEMENT  = "3";

/*
    * 차입종류
    */
/** 공모사채 **/
ACConstants.PUBLIC_ACCT_PAY  = "04";

/** 사모사채 **/
ACConstants.PRIVATE_ACCT_PAY  = "06";

/*
    * 여신한도 상태 
    */
/** 신청 **/
ACConstants.CREDIT_LIMIT_APP_STS  = "01";

/** 중간승인 **/
ACConstants.CREDIT_LIMIT_BETADMIT_STS  = "02";

/** 심사 **/
ACConstants.CREDIT_LIMIT_INSPECT_STS  = "03";

/** 최종승인 **/
ACConstants.CREDIT_LIMIT_FINALADMIT_STS  = "04";

/** 반려 **/
ACConstants.CREDIT_LIMIT_REJECT_STS  = "05";

/*
    * 여신한도 등록 
    */
/** 신용정보 미등록사업자의 여신한도금액 **/
ACConstants.NON_CREDIT_LIMIT_CRN  = 3000000;

/** 신용정보 등록사업자의 여신한도금액 부실률 63%이상 **/
ACConstants.BAD_CREDIT_LIMIT_CRN  = 1600000;

/** 신용정보 등록사업자의 여신한도금액 부실률 63%미만 **/
ACConstants.GOOD_CREDIT_LIMIT_CRN  = 5000000;

/*
    * 법인카드-미지급비용 ( 대변귀속부서 settig )
    */
/** 전표종류 - 경비전표 **/  
ACConstants.SLIP_KND_CD  = "A08";

/** 계정 - 미지급비용 - 법인카드 **/  
ACConstants.ACCT_CD  = "2100830";

/** 차대구분 - C(대변) **/  
ACConstants.DRCR_CLS_CD  = "C";

/** 귀속부서 - 재무 **/  
ACConstants.ACCT_DEPT_CD  = "00009";


/** 전표종류(경비전표-렌터카변동비) */
ACConstants.SLIPKNDCD_EXPENSE_RC_VAR = "I09";

/** 전표종류(경비전표-고속변동비) */
ACConstants.SLIPKNDCD_EXPENSE_TR_VAR = "J28";

/** 전표종류(경비전표-택배변동비) */
ACConstants.SLIPKNDCD_EXPENSE_HD_VAR = "S83";

/** 전표종류(영업소운영수수료 지급)*/
ACConstants.SLIPKNDCD_OPERATE_CMIS_PAY = "J29";

/** 통장번호-국민은 */
ACConstants.BANKBOOK_NO_KB = "165";

/** 통장번호-농협 */
ACConstants.BANKBOOK_NO_NH = "166";

/** 통장번호-우리 */
ACConstants.BANKBOOK_NO_WR = "168";

/** 통장번호-신한 */
ACConstants.BANKBOOK_NO_SH = "177";

/** 통장번호-하나 */
ACConstants.BANKBOOK_NO_HN = "167";

/* 회계 회사종류 구분값.*/
/*회사구분-동부*/
ACConstants.CO_CLS_CD_DONGBU = "0";

/*회사구분-자회사Master*/
ACConstants.CO_CLS_CD_SUB_COMPANY ="1";

/*회사구분-자회사지점*/
ACConstants.CO_CLS_CD_SUB_COMPANY_BRANCH ="2";

/*회사 코드 -동부 */
ACConstants.CO_CD_DONGBU = "000";

/*사용자 소속 구분 코드  */
ACConstants.SUBSIDIARY_USER_HOME_CLS_CD = "SA";

/*지불방법 */
ACConstants.PAY_MTHD_CD_GIRO = "95";

/** 지급상태(장기보류) **/
ACConstants.PAYMENT_RESERVELONG_STS  = "11";



/** 계정(무형자산처분손실) **/
ACConstants.INVISIBLE_ASET_DISUSE_LOSS = "6120160";

/** 계정(무형자산처분이익) **/
ACConstants.INVISIBLE_ASET_DISUSE_PROFIT = "6110170";


/** 사업구분코드 (렌터카) **/
ACConstants.BIZ_DOM_CD_RENT = "220";

/** 자산종류 (차량) **/
ACConstants.ASET_KND_CD_CAR = "30";




/** 계정(예수금-기타소득세) **/
ACConstants.ACCTCD_ETC_INCOME_TAX = "2100613";

/** 계정(예수금-기타주민세) **/
ACConstants.ACCTCD_ETC_MAN_TAX = "2100614";

/** 계정(예수금-사업소득세) **/
ACConstants.ACCTCD_BIZ_INCOME_TAX = "2100615";

/** 계정(예수금-사업소득주민세) **/
ACConstants.ACCTCD_BIZ_MAN_TAX = "2100616";

/** 계정(기타포괄손익) **/
ACConstants.ETC_INCLUDE_ACCT_CD = "3500300";

/** 계정(이익잉여금-당기순이익(자본)) **/
ACConstants.PROFIT_SURPLUS_ACCT_CD = "3300500";

/** 임대차 관련계정 추가 2010.12.13 **/
/** 전표종류(사업소득전표) */
ACConstants.SLIPKNDCD_BIZ_INCOME = "A21"; 

/** 전표종류(기타소득전표) */
ACConstants.SLIPKNDCD_ETC_INCOME = "A22";

/** 계정(보증금-임차보증금) **/
ACConstants.ACCTCD_LEASE_GUARANTY = "1210550";

/** 계정(보증금-임대보증금) **/
ACConstants.ACCTCD_RENT_GUARANTY = "2201320";    

/** 계정(원)지급임차료-토지) **/
ACConstants.ACCTCD_PAY_LEASE_AMT = "4203510";    

/** (원)복리후생비 - 기타 **/
ACConstants.ACCTCD_FRINGE_BENEFIT_AMT = "4200629";

/** 계정(판)지급임차료-토지) **/
ACConstants.ACCTCD_PAY_LEASE_SALE = "5002010";

/** (판)복리후생비 - 기타 **/
ACConstants.ACCTCD_FRINGE_BENEFIT_SALE = "5000627";

/** 수입임대료 **/
ACConstants.ACCTCD_INCOME_LEASE_AMT = "6110050";

/** 계정(관리비) **/
ACConstants.ACCTCD_OFFICIAL_AMT = "5002010";

/** 관리비(실비) **/
ACConstants.ACCTCD_ACTUAL_AMT = "5002010";

/** 전기(실비) **/
ACConstants.ACCTCD_ELECTRICITY_AMT = "5002010";

/** 가스(실비) **/
ACConstants.ACCTCD_GAS_AMT = "5002010";

/** 상하수도(실비) **/
ACConstants.ACCTCD_WATER_AMT = "5002010";    

/** 청소(실비) **/
ACConstants.ACCTCD_CLEANING_AMT = "5002010";

/*법인분리 관련 변경될 사업자번호 추가. 12.16*/
/** 동부익스프레스 사업자번호 **/
ACConstants.DIT_CRN_NEW = "1208762427";

/** 대표 거래처코드(동부익스프레스) **/
ACConstants.DIT_CLNT_NO_NEW = "238802";

/* 소득세처리 거래처 추가 2014 03 13 */
/** 대표 거래처코드(용산세무서 - 소득세처리) **/
ACConstants.DIT_CLNT_NO_2014 = "904076";

/** 계정(미수금 - 임대차) **/
ACConstants.ACCTCD_REFUNDAMT_RENTLOAN = "1110730";


/** 계정(장기미지급금-일반) **/
ACConstants.ACCTCD_LONG_NOT_PAY = "2200410";

/** 계정(장기미지급금-리스부채) **/
ACConstants.ACCTCD_LONG_NOT_PAY_LEASE = "2200430";

/** 계정(상품-기타) **/
ACConstants.ACCTCD_PRODUCT_ETC = "1120250";

/** 계정(지급수수료-알선수수료) **/
ACConstants.ACCTCD_PAY_CMIS_MEDIATE_TRUST = "4202213";

ACConstants.SLIPKNDCD_COMM_CLNT = "239758";

/** 대성TLS(전표귀속  사용) **/
ACConstants.TLS_ACCT_DEPT_CD = "00695";

/** 동부NTS(전표귀속  사용) **/
ACConstants.NTS_ACCT_DEPT_CD = "00696";

/** 동부광양(전표귀속  사용) **/
ACConstants.DG_ACCT_DEPT_CD = "00691";

/** 동부인천항만(전표귀속  사용) **/
ACConstants.DIMT_ACCT_DEPT_CD = "00698";

/** 인천대표 거래처코드(서인천세무서 - 소득세처리) **/
ACConstants.DIMT_CLNT_NO = "233232";

/** NTS대표 거래처코드(반포세무서 - 소득세처리) **/
ACConstants.NTS_CLNT_NO = "903811";

/** 대성대표 거래처코드(김해세무서 - 소득세처리) **/
ACConstants.TLS_CLNT_NO = "233337";