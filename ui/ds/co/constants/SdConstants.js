/**
 * <pre>
 * 영업(SD)에서 사용되는 상수를 정의한다.
 * 공통 코드에 정의 되어 있지 않은 경우 선언한다.
 *
 * 상수 선언시 주석에 상수명과 설명을 표시한다.
 * </pre>
 *
 * @author $Author: cool $
 * @version $Revision: 1.5 $
 */

SdConstants = {};
/************************************ 영업 공통 START **************************************/

/**
 * 기본 상하차 대기시간 (분)
 */
SdConstants.BASIS_LDULD_WAIT_HH = "20";

/**
 * 기본 운송시간 (분)
 */
SdConstants.BASIS_TRANS_HH = "40";

/**
 * 기본 보관시간 (분)
 */
SdConstants.BASIS_STORAGE_HH = "0";

/**
 * 라파즈 오더종류(TB_OP323 - ODRKIND) -> 오더 작업유형 (TB_SD401 : WRK_PATTERN_CD)
 */

/**
 * 라파즈 오더종류 : 판매오더 (SO)
 */
SdConstants.LAFARGE_ODRKIND_SO = "SO";

/**
 * 라파즈 오더종류 : 카운터판매 (S1)
 */
SdConstants.LAFARGE_ODRKIND_S1 = "S1";

/**
 * 라파즈 오더종류 : 전화판매 (S2)
 */
SdConstants.LAFARGE_ODRKIND_S2 = "S2";

/**
 * 라파즈 오더종류 : 판매지시-ECS (S3)
 */
SdConstants.LAFARGE_ODRKIND_S3 = "S3";

/**
 * 라파즈 오더종류 : 판매지시-운송 (S4)
 */
SdConstants.LAFARGE_ODRKIND_S4 = "S4";

/**
 * 라파즈 오더종류 : 수출판매오더 (SF)
 */
SdConstants.LAFARGE_ODRKIND_SF = "SF";

/**
 * 라파즈 오더종류 : 자가판매오더 (SI)
 */
SdConstants.LAFARGE_ODRKIND_SI = "SI";

/**
 * 라파즈 오더종류 : 관계사오더(수출) (SX)
 */
SdConstants.LAFARGE_ODRKIND_SX = "SX";

/**
 * 라파즈 오더종류 : 관계사오더(내수) (SG)
 */
SdConstants.LAFARGE_ODRKIND_SG = "SG";

/**
 * 라파즈 오더종류 : 판매시험 (SU)
 */
SdConstants.LAFARGE_ODRKIND_SU = "SU";

/**
 * 부산지점 기본값 : 6
 */
SdConstants.PUSAN_DEFAULT_CD = "6";

/**
 * 부산지점 기본 회수 CY : 양산 CY (6C11)
 */
SdConstants.PUSAN_DEFAULT_RETRV_CY = "6C11";

/**
 * 인천지점 기본값 : 4
 */
SdConstants.INCHEON_DEFAULT_CD = "4";

/**
 * 인천지점 기본 회수 CY : 인천 CY (4C01)
 */
SdConstants.INCHEON_DEFAULT_RETRV_CY = "4C01";

/**
 * 수입본선 직반출 작업경로 : TB_LO110 (135)
 */
SdConstants.IMP_CVSSL_DRT_WRK_CRRYOUT_PATH = "135";

/**
 * 수출본선 직반입 작업경로 : TB_LO110 (146)
 */
SdConstants.EXP_CVSSL_DRT_WRK_CRRYIN_PATH = "146";

/**
 * 수입본선 EMPTY 작업경로 - 수입본선 자CY_E : TB_LO110 (252)
 */
SdConstants.IMP_CVSSL_MCOM_CY_EMPTY_PATH = "252";

/**
 * 수출본선 EMPTY 작업경로 - 수출본선 자CY_E : TB_LO110 (253)
 */
SdConstants.EXP_CVSSL_MCOM_CY_EMPTY_PATH = "253";

/**
 * 수입본선 자CY 작업경로 : TB_LO110 (133)
 */
SdConstants.IMP_CVSSL_MCOM_CY_PATH = "133";

/**
 * 수출본선 자CY 작업경로 : TB_LO110 (018)
 */
SdConstants.EXP_CVSSL_MCOM_CY_PATH = "018";

/**
 * 수입본선 타CY 작업경로 : TB_LO110 (134)
 */
SdConstants.IMP_CVSSL_UCOM_CY_PATH = "134";

/**
 * 수출본선 타CY 작업경로 : TB_LO110 (145)
 */
SdConstants.EXP_CVSSL_UCOM_CY_PATH = "145";

/**
 * 수입본선 셔틀 작업경로 : TB_LO110 (136)
 */
SdConstants.IMP_CVSSL_SHUTTLE_PATH = "136";

/**
 * 수출본선 셔틀 작업경로 : TB_LO110 (147)
 */
SdConstants.EXP_CVSSL_SHUTTLE_PATH = "147";

/**
 * 수입본선 ON_DOCK 작업경로 : TB_LO110 (268)
 */
SdConstants.IMP_CVSSL_ON_DOCK_PATH = "268";

/**
 * 수입본선 직반납_H 작업경로 : TB_LO110 (280)
 */
SdConstants.IMP_CVSSL_DRT_WRK_CRRYIN_PATH_H = "280";

/**
 * 수입본선 직반납_S 작업경로 : TB_LO110 (281)
 */
SdConstants.IMP_CVSSL_DRT_WRK_CRRYIN_PATH_S = "281";

/**
 * 수입본선 부두 작업경로 : TB_LO110 (133)
 */
SdConstants.IMP_CVSSL_PIER = "283";

/**
 * 수출본선 부두 작업경로 : TB_LO110 (018)
 */
SdConstants.EXP_CVSSL_PIER = "284";

/**
 * 작업장 구분코드 : 선석 (B)
 */
SdConstants.WRK_PL_CLS_CD_BERTH = "B";

/**
 * 작업장 구분코드 : CY (C)
 */
SdConstants.WRK_PL_CLS_CD_CY = "C";

/**
 * 작업장 구분코드 : Door (D)
 */
SdConstants.WRK_PL_CLS_CD_DOOR = "D";

/**
 * 작업장 구분코드 : 장치장 (E)
 */
SdConstants.WRK_PL_CLS_CD_YARD = "E";

/**
 * 작업장 구분코드 : CFS (F)
 */
SdConstants.WRK_PL_CLS_CD_CFS = "F";

/**
 * 작업장 구분코드 : 물류기지 (L)
 */
SdConstants.WRK_PL_CLS_CD_LOGIS = "L";

/**
 * 작업장 구분코드 : 공장 (M)
 */
SdConstants.WRK_PL_CLS_CD_FCTY = "M";

/**
 * 작업장 구분코드 : 지역 (G)
 */
SdConstants.WRK_PL_CLS_CD_RGN = "G";

/**
 * 작업장 구분코드 : 부두 (P)
 */
SdConstants.WRK_PL_CLS_CD_PIER = "P";

/**
 * 작업장 구분코드 : 철도역 (R)
 */
SdConstants.WRK_PL_CLS_CD_RAILSTN = "R";

/**
 * 작업장 구분코드 : 해송부두 (S)
 */
SdConstants.WRK_PL_CLS_CD_MARTRPIER = "S";

/**
 * 작업장 구분코드 : 타 CY (T)
 */
SdConstants.WRK_PL_CLS_CD_OTHRCY = "T";

/**
 * 작업장 구분코드 : 창고 (W)
 */
SdConstants.WRK_PL_CLS_CD_WHOUSE = "W";

/**
 * 작업장 구분코드 : 기타작업장 (Z)
 */
SdConstants.WRK_PL_CLS_CD_ETCWRK_PL = "Z";

/**
 * 작업단계 코드 : 철송 (0004)
 */
SdConstants.WRK_ST_CD_RAILROAD = "0004";

/**
 * 매출입항목코드 : 무매출 (0000)
 */
SdConstants.SELPCH_ITEM_CD_NOSELL = "0000";

/**
 * 오차허용범위 :  1% (-1)
 */
SdConstants.SKIP_GAP_WT_RATE_MIN = -1.0;

/**
 * 오차허용범위 :  1% (1)
 */
SdConstants.SKIP_GAP_WT_RATE_MAX = 1.0;

/**
 * 보세운송 신고승인구분코드 : 신고 (0)
 */
SdConstants.BONDED_TRANS_DECLAR = "0";

/**
 * 보세운송 신고승인구분코드 : 승인 (1)
 */
SdConstants.BONDED_TRANS_ADMIT = "1";

/**
 * 보세운송 동부운송업체코드 (010007)
 */
SdConstants.DONGBU_BONDED_TRANS_COMPANY_CD = "010007";

/**
 * EDI 전송구분코드 : 전송대기 (0)
 */
SdConstants.EDI_SEND_CLS_SENDWAIT = "0";

/**
 * EDI 전송구분코드 : 추후전송 (3)
 */
SdConstants.EDI_SEND_CLS_AFTERWARD = "3";

/**
 * EDI 전송처리방식 : 즉시전송 (1)
 */
SdConstants.EDI_SEND_PROC_IMMEDIATE = "1";

/**
 * EDI 전송처리방식 : 추후일괄 (2)
 */
SdConstants.EDI_SEND_PROC_BATCH = "2";

/**
 * EDI PID : PID(MRN) (1314)
 */
SdConstants.PID_MRN = "1314";

/**
 * EDI PID : PID(MRN + SHP_CO_CD) (1310)
 */
SdConstants.PID_MRN_SHP_CO_CD = "1310";

/**
 * EDI PID : PID(MRN + SHP_CO_CD + DSMBRK) (1313)
 */
SdConstants.PID_MRN_SHP_CO_CD_DSMBRK = "1313";

/**
 * EDI PID : PID(MRN + SHP_CO_CD + MSN ) (1312)
 */
SdConstants.PID_MRN_SHP_CO_CD_MSN = "1312";

/**
 * EDI 전송처리구분코드 : 미전송 (0)
 */
SdConstants.EDI_PROC_CLS_NOT_SEND = "0";

/**
 * EDI 전송처리구분코드 : 전송완료 (1)
 */
SdConstants.EDI_PROC_CLS_SEND_COMPLETE = "9";

/**
 * EDI 전송처리구분코드 : 접수 (A)
 */
SdConstants.EDI_PROC_CLS_ACCEPT = "A";

/**
 * EDI 전송처리구분코드 : 거절 (D)
 */
SdConstants.EDI_PROC_CLS_DENIED = "D";

/**
 * EDI 전송처리구분코드 : 오류 (E)
 */
SdConstants.EDI_PROC_CLS_ERROR = "E";

/**
 * EDI 전송처리구분코드 : 수리 (R)
 */
SdConstants.EDI_PROC_CLS_REPAIR = "R";

/**
 * EDI 전송처리구분코드 : 승인 (1)
 */
SdConstants.EDI_PROC_CLS_OK = "1";

/**
 * EDI 전송처리구분코드 : 기각 (2)
 */
SdConstants.EDI_PROC_CLS_REJECT = "2";

/**
 * EDI 전송처리구분코드 : 보류 (3)
 */
SdConstants.EDI_PROC_CLS_SUSPEND = "3";

/**
 * 보세운송 정정구분 : 운송기한 정정 (1)
 */
SdConstants.MAIN_MAIN_CLS_TRANS_PRD = "1";

/**
 * 보세운송 정정구분 : 전체취하 (2)
 */
SdConstants.MAIN_MAIN_CLS_ALL_CANCEL = "2";

/**
 * 보세운송 정정구분 : 도착지 (3)
 */
SdConstants.MAIN_MAIN_CLS_ARRIVE = "3";

/**
 * 보세운송 정정구분 : 부분취하 (4)
 */
SdConstants.MAIN_MAIN_CLS_PART_CANCEL = "4";

/**
 * 보세운송 정정구분 : 도착지운송수단정정 (5)
 */
SdConstants.MAIN_MAIN_CLS_ARV_TRANS_CNT_SHT = "5";

/**
 * 보세운송 정정구분 : 경유지운송수단정정 (6)
 */
SdConstants.MAIN_MAIN_CLS_VIA_TRANS_CNT_SHT = "6";

/**
 * 보세운송 정정구분 : 경유지정정 (7)
 */
SdConstants.MAIN_MAIN_CLS_VIA = "7";

/**
 * 보세운송 정정구분 : 출발지정정 (8)
 */
SdConstants.MAIN_MAIN_CLS_DPT = "8";

/**
 * 보세운송 정정구분 : 담보금액정정 (9)
 */
SdConstants.MAIN_MAIN_CLS_PLDG_AMT = "9";

/**
 * EDI 문서종류 : 보세운송 승인 (5CP)
 */
SdConstants.EDI_DOC_ADMIT = "5CP";

/**
 * EDI 문서종류 : 보세운송 신고 (031)
 */
SdConstants.EDI_DOC_DECLAR = "031";

/**
 * EDI 문서종류 : 보세운송 정정 (5LH)
 */
SdConstants.EDI_DOC_MAIN_MAIN = "5LH";

/**
 * 배정구분코드 (SD104) : 보세운송 (G)
 */
SdConstants.ASSGN_CLS_CD_BOND_TRANS = "G";

/**
 * 당사배정구분코드 (SD104) : 보세운송 (B)
 */
SdConstants.MCOM_ASSGN_CLS_CD_BOND_TRANS = "B";

/**
 * 당사배정구분코드 (SD104) : 관리화물 (ZZ)
 */
SdConstants.MCOM_ASSGN_CLS_CD_MGNT_CARGO = "ZZ";

/**
 * 작업장소유구분코드 (LO115) : 자사 (J)
 */
SdConstants.WRK_PL_POSN_CLS_CD_OURCO = "J";

/**
 * 작업장소유구분코드 (LO115) : 임차 (L)
 */
SdConstants.WRK_PL_POSN_CLS_CD_LOAN = "L";

/**
 * 작업장소유구분코드 (LO115) : 타사 (T)
 */
SdConstants.WRK_PL_POSN_CLS_CD_UCOM = "T";

/**
 * 다착지 매출항목코드
 */
SdConstants.MULTIARRIVE_SELPCH_ITEM_CD = "0106";

/**
 * ICD Charge 매출항목코드 
 */
SdConstants.ICD_CHARGE_SELPCH_ITEM_CD = "0155";    

/**
 * 계약요율 구분코드 (SD130) : 하역계약요율 (11)  
 */
SdConstants.CTRT_TRF_CLS_CD_STV_CTRT_TRF = "11";

/**
 * 계약요율 구분코드 (SD130) : 하역장비사용료 (12)  
 */
SdConstants.CTRT_TRF_CLS_CD_STV_EQ_USE_TRF = "12";

/**
 * 계약요율 구분코드 (SD130) : 하역추가요율 (13)  
 */
SdConstants.CTRT_TRF_CLS_CD_STV_ADD_TRF = "13";

/**
 * 계약요율 구분코드 (SD130) : 운송계약요율 (21)  
 */
SdConstants.CTRT_TRF_CLS_CD_TRANS_CTRT_TRF = "21";

/**
 * 계약요율 구분코드 (SD130) : 보관계약요율 (31)  
 */
SdConstants.CTRT_TRF_CLS_CD_STR_CTRT_TRF = "31";

/**
 * 계약요율 구분코드 (SD130) : 보관추가요율 (32)  
 */
SdConstants.CTRT_TRF_CLS_CD_STR_ADD_TRF = "32";

/**
 * 계약요율 구분코드 (SD130) : 보관RF/위험물요율 (33)  
 */
SdConstants.CTRT_TRF_CLS_CD_STR_RF_DANGER_TRF = "33";

/**
 * 사업영역 코드 (SD130) : 하역(110)  
 */
SdConstants.BIZ_DOM_CD_STV = "110";

/**
 * 사업영역 코드 (SD130) : 운송(120)  
 */
SdConstants.BIZ_DOM_CD_TRANS = "120";

/**
 * 사업영역 코드 (SD130) : 보관(130)  
 */
SdConstants.BIZ_DOM_CD_STR = "130";

/**
 * 정액정률구분코드 (LO133) : 정액 (FM)  
 */
SdConstants.FAMT_FRAT_CLS_CD_FM = "FM";

/**
 * 정액정률구분코드 (LO133) : 정률 (FR)  
 */
SdConstants.FAMT_FRAT_CLS_CD_FR = "FR";

/**
 * 배정창고코드  : 용당구내창고 (6W073)  
 */
SdConstants.ASSGN_WHOUSE_CD_6W073 = "6W073";

/**
 * 과세구분코드 (SD070)  : 과세 (01)  
 */
SdConstants.TAXN_CLS_CD_TAXN = "01";

/**
 * 과세구분코드 (SD070)  : 영세 (02)  
 */
SdConstants.TAXN_CLS_CD_ZERO = "02";

/**
 * 과세구분코드 (SD070)  : 기타 (03)  
 */
SdConstants.TAXN_CLS_CD_ETC = "03";


/**
 * 시간배분 코드 (TB_SD600)  : X  
 */
SdConstants.ALLOC_TIME_HH_CD_X = "X";

/**
 * 시간배분 코드 (TB_SD600)  : LT  
 */
SdConstants.ALLOC_TIME_HH_CD_LT = "LT";

/**
 * 시간배분 코드 (TB_SD600)  : FR  
 */
SdConstants.ALLOC_TIME_HH_CD_FR = "FR";

/**
 * 시간배분 코드 (TB_SD600)  : TO  
 */
SdConstants.ALLOC_TIME_HH_CD_TO = "TO";

/**
 * 시간배분 코드 (TB_SD600)  : RF  
 */
SdConstants.ALLOC_TIME_HH_CD_RF = "RF";

/**
 * 시간배분 코드 (TB_SD600)  : RT  
 */
SdConstants.ALLOC_TIME_HH_CD_RT = "RT";

/**
 * 시간배분 코드 (TB_SD600)  : SF  
 */
SdConstants.ALLOC_TIME_HH_CD_SF = "SF";

/**
 * 시간배분 코드 (TB_SD600)  : ST  
 */
SdConstants.ALLOC_TIME_HH_CD_ST = "ST";

/**
 * 동일권역 운송시간 (120분)
 */
SdConstants.DISTRICT_BASIS_TRANS_HH = "120";    

/**
 * 타 권역 운송시간 (240분)
 */
SdConstants.DISTRICT_OTHER_TRANS_HH = "240";

/**
 * 권역 코드 (광역 : WDE)
 */
SdConstants.DISTRICT_CD_WDE = "WDE";
    
/************************************ 영업 공통 END **************************************/
	