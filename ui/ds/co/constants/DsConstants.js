/**
 * <pre>
 * 물류(DS)에서 사용되는 공통코드 상수를 정의한다.
 * 지정될 상수 값은 공통 TABEL (TB_ZZ002) 에 정의된 값들을 선언한다.
 * 
 * 상수 선언시 주석에 상수명과 공통코드 테이블의 그룹코드명 : 그룹코드를 표시한다.
 * </pre>
 *
 * @author $Author: hwangck $
 * @version $Revision: 1.5 $
 */

DsConstants = {};
/************************************ 물류 공통 START **************************************/
/**
 * 사용여부 (YN) : 전체 (-1)
 */
DsConstants.YN_ALL = -1;

/**
 * 사용여부 (YN) : YES (1)
 */
DsConstants.YN_YES = 1;

/**
 * 사용여부 (YN) : NO (0)
 */
DsConstants.YN_NO = 0;

/**
 * 물류점소 부서구분  : 물류점소 코드중 3번째 자리수로 구분
 *      1. 영업부서 조회시 물류점소 코드의 3번째 값이 1인 경우 조회 
 *      2. 운송부서 조회시 물류점소 코드의 3번째 값이 2인 경우 조회 
 *      3. 보관부서 조회시 물류점소 코드의 3번째 값이 3인 경우 조회 
 *      4. 하역부서 조회시 물류점소 코드의 3번째 값이 4인 경우 조회 
 */

/**
 * 물류점소 부서구분 : 영업부서
 */
DsConstants.SALES_DEPARTMENT = 1;

/**
 * 물류점소 부서구분 : 운송부서
 */
DsConstants.TRANS_DEPARTMENT = 2;

/**
 * 물류점소 부서구분 : 보관부서
 */
DsConstants.STORAGE_DEPARTMENT = 3;

/**
 * 물류점소 부서구분 : 하역부서
 */
DsConstants.STEVEDORING_DEPARTMENT = 4;

/**
 * 작업단계 최상위 모드 : 작업 단계 최상위 모드에 대한 코드값을 상수로 선언
 * DB 작업단계 (TB_LO100) 에 저장된 코드값 : DB Data 변경시 상수값 변경
 *  1. 운송모드 : 1
 *      1.1. 운송 : 02
 *          1.1.1. 육송 : 001 
 *          1.1.2. 철송 : 002
 *          1.1.3. 해송 : 003
 *  2. 작업노드 : 2
 *      2.1. 하역 : 01
 *          2.1.1. 선내 : 004 
 *          2.1.2. 선측 : 005
 *          2.1.3. 부선 : 006
 *          2.1.4. 고박 : 007
 *      2.2. 보관 : 03
 *          2.2.1. 보관 : 008
 *          2.2.2. 장치 : 009
 *          2.2.3. 보관환적 : 010
 *          2.2.4. 보관고박 : 011
 *          2.2.5. 보관이적 : 012
 *          2.2.6. 포장 : 013 
 */

/**
 * 작업단계 모드구분 : 운송모드
 */
DsConstants.WORK_STEP_MODE_CLS_TRANS_MODE = "1";

/**
 * 작업단계 모드구분 : 운송모드 - 운송
 */
DsConstants.WORK_STEP_MODE_CLS_TRANS_MODE_TRANS = "02";

/**
 * 작업단계 모드구분 : 운송모드 - 운송 - 육송
 */
DsConstants.WORK_STEP_MODE_CLS_TRANS_MODE_TRANS_GROUND = "001";

/**
 * 작업단계 모드구분 : 운송모드 - 운송 - 철송
 */
DsConstants.WORK_STEP_MODE_CLS_TRANS_MODE_TRANS_RAILROAD = "002";

/**
 * 작업단계 모드구분 : 운송모드 - 운송 - 해송
 */
DsConstants.WORK_STEP_MODE_CLS_TRANS_MODE_TRANS_MARTR = "003";

/**
 * 작업단계 모드구분 : 작업노드
 */
DsConstants.WORK_STEP_MODE_CLS_WORK_MODE = "2";

/**
 * 작업단계 모드구분 : 작업노드 - 하역
 */
DsConstants.WORK_STEP_MODE_CLS_WORK_MODE_STEVEDORING = "01";

/**
 * 작업단계 모드구분 : 작업노드 - 하역 - 선내
 */
DsConstants.WORK_STEP_MODE_CLS_WORK_MODE_STEVEDORING_INVSSL = "004";

/**
 * 작업단계 모드구분 : 작업노드 - 하역 - 선측
 */
DsConstants.WORK_STEP_MODE_CLS_WORK_MODE_STEVEDORING_ALNGVSSL = "005";

/**
 * 작업단계 모드구분 : 작업노드 - 하역 - 부선
 */
DsConstants.WORK_STEP_MODE_CLS_WORK_MODE_STEVEDORING_SUBVSSL = "006";

/**
 * 작업단계 모드구분 : 작업노드 - 하역 - 고박
 */
DsConstants.WORK_STEP_MODE_CLS_WORK_MODE_STEVEDORING_FIXG = "007";

/**
 * 작업단계 모드구분 : 작업노드 - 보관
 */
DsConstants.WORK_STEP_MODE_CLS_WORK_MODE_STORAGE = "03";

/**
 * 작업단계 모드구분 : 작업노드 - 보관 - 보관 
 */
DsConstants.WORK_STEP_MODE_CLS_WORK_MODE_STORAGE_STORAGE = "008";

/**
 * 작업단계 모드구분 : 작업노드 - 보관 - 장치 
 */
DsConstants.WORK_STEP_MODE_CLS_WORK_MODE_STORAGE_SHED = "009";

/**
 * 작업단계 모드구분 : 작업노드 - 보관 - 보관환적 
 */
DsConstants.WORK_STEP_MODE_CLS_WORK_MODE_STORAGE_STORAGETRANSHIP = "010";

/**
 * 작업단계 모드구분 : 작업노드 - 보관 - 보관고박 
 */
DsConstants.WORK_STEP_MODE_CLS_WORK_MODE_STORAGE_STORAGEFIXG = "011";

/**
 * 작업단계 모드구분 : 작업노드 - 보관 - 보관이적 
 */
DsConstants.WORK_STEP_MODE_CLS_WORK_MODE_STORAGE_STORAGECGSHF = "012";

/**
 * 작업단계 모드구분 : 작업노드 - 보관 - 포장 
 */    
DsConstants.WORK_STEP_MODE_CLS_WORK_MODE_STORAGE_PACK = "013";

/**
 * 이력관리 - 거래처리유형 
 */
/**
 * 이력관리 - 거래처리유형 : 생성 (C) 
 */
DsConstants.CHANGE_HISTORY_TRANSACTION_PROCESS_PATTERN_CREATE = "C";

/**
 * 이력관리 - 거래처리유형 : 수정 (U) 
 */
DsConstants.CHANGE_HISTORY_TRANSACTION_PROCESS_PATTERN_UPDATE = "U";

/**
 * 이력관리 - 거래처리유형 : 삭제 (D) 
 */
DsConstants.CHANGE_HISTORY_TRANSACTION_PROCESS_PATTERN_DELETE = "D";

/**
 * SMS 전송구분  
 */
/**
 * SMS 전송구분 - 오더접수 (0)
 */
DsConstants.SMS_MSG_CLS_CD_ODR_RECEIPT = 1;

/**
 * SMS 전송구분 - 배차 (1)
 */
DsConstants.SMS_MSG_CLS_CD_ALLOCCAR = 2;

/**
 * SMS 전송구분 - 출발 (2)
 */
DsConstants.SMS_MSG_CLS_CD_DPT = 3;

/**
 * SMS 전송구분 - 도착 (3)
 */
DsConstants.SMS_MSG_CLS_CD_ARV = 4;

/**
 * SMS 전송구분 - 오더완료 (4)
 */
DsConstants.SMS_MSG_CLS_CD_ODR_COMPLETE = 5;

/**
 * SMS 판매처(수요가) - 메시지 전송구분  
 */
/**
 * SMS 판매처(수요가) - 메시지 전송구분 - 메시지 안보냄 (0)
 */
DsConstants.SMS_DMND_CLS_NOSEND = 0;

/**
 * SMS 판매처(수요가) - 메시지 전송구분 - 메시지 보냄 (1)
 */
DsConstants.SMS_DMND_CLS_SEND = 1;

/**
 * SMS 전송 입력 코드 (TB_OP901)  
 */
/**
 * SMS 전송 입력 코드 (TB_OP901 : WRK_CD [작업코드] (11)
 */
DsConstants.SMS_SEND_WRK_CD = "11";

/**
 * SMS 전송 입력 코드 (TB_OP901 : PROC_CLS [처리구분] (INSERT : I)
 */
DsConstants.SMS_SEND_PROC_CLS_INSERT = "I";

/**
 * SMS 전송 입력 코드 (TB_OP901 : PROC_CLS [처리구분] (UPDATE : U)
 */
DsConstants.SMS_SEND_PROC_CLS_UPDATE = "U";

/**
 * SMS 전송 입력 코드 (TB_OP901 : PROC_CLS [처리구분] (DELETE : D)
 */
DsConstants.SMS_SEND_PROC_CLS_DELETE = "D";

/**
 * 단위 구분코드 공콩 코드 (LO101) 
 */

/**
 * 단위구분코드 공통그룹코드 : LO101
 */
DsConstants.UNIT_CLS_CD_GRP_CD = "LO101";

/**
 * 단위 구분코드 (LO101) - 수량 : 01
 */
DsConstants.UNIT_CLS_CD_QTY = "01";

/**
 * 단위 구분코드 (LO101) - 중량 : 02
 */
DsConstants.UNIT_CLS_CD_WT = "02";

/**
 * 단위 구분코드 (LO101) - 노임 : 03
 */
DsConstants.UNIT_CLS_CD_WAGE = "03";

/**
 * 단위 구분코드 (LO101) - 용적 : 04
 */
DsConstants.UNIT_CLS_CD_CUBIC = "04";

/**
 * 단위 구분코드 (LO101) - 시간 : 05
 */
DsConstants.UNIT_CLS_CD_TIME = "05";

/**
 * 작업구간코드 - 중장거리
 */
DsConstants.WRK_DST_CLS_CD_J = "J";

/**
 * 작업구간코드 - 셔틀
 */
DsConstants.WRK_DST_CLS_CD_S = "S";

/**
 * 작업구간코드 - 로컬
 */
DsConstants.WRK_DST_CLS_CD_L = "L";


/**
 * 라인구분코드 - 계약라인
 */
DsConstants.LINE_CLS_CD_CTRT = "C";


/**
 * 라인구분코드 - 비계약라인
 */
DsConstants.LINE_CLS_CD_NOT_CTRT = "N";

/**
 * 소유구분코드 - 자차
 */
DsConstants.POSN_CLS_CD_MCAR = "J";
/**
 * 소유구분코드 - 위수탁
 */
DsConstants.POSN_CLS_CD_CNSNMNT = "W";
/**
 * 소유구분코드 - 용차
 */
DsConstants.POSN_CLS_CD_HIRECAR = "Y";
/**
 * 매입거래처구분코드 - 용차사
 */
DsConstants.PCHS_CLNT_CLS_CD_HIRECAR = "01";
/**
 * 작업도구종류코드 - MGSET
 */
DsConstants.WRK_IMPLE_KND_CD_MGSET = "MG";
/**
 * 장비분류코드 - 트레일러
 */
DsConstants.EQ_CLSS_CD_TL = "TL";
/**
 * 장비종류코드 - 트렉터
 */
DsConstants.EQ_KND_CD_TR = "TR";

/************************************ 물류 공통 END **************************************/


/************************************ 물류>운영 START **************************************/
/**
 * 컨테이너상태코드 정상
 * <pre> 컨테이너상태코드 : GRP_CD : OP115 </pre>
DsConstants.CNTR_STS_CD_NORMAL = "N"; //추가되어야 할 부분
 */

/**
 * 컨테이너상태코드 소멸
 * <pre> 컨테이너상태코드 : GRP_CD : OP115 </pre>
 */
DsConstants.CNTR_STS_CD_EXTINCTION = "D";

/**
 * 컨테이너상태코드 출항
 * <pre> 컨테이너상태코드 : GRP_CD : OP115 </pre>
 */
DsConstants.CNTR_STS_CD_DEPRTPORT = "E";

/**
 * 컨테이너상태코드 반납
 * <pre> 컨테이너상태코드 : GRP_CD : OP115 </pre>
 */
DsConstants.CNTR_STS_CD_RERURN = "O";

/**
 * 컨테이너상태코드 수리
 * <pre> 컨테이너상태코드 : GRP_CD : OP115 </pre>
 */
DsConstants.CNTR_STS_CD_REPAIR = "R";

/**
 * 컨테이너상태코드 매각
 * <pre> 컨테이너상태코드 : GRP_CD : OP115 </pre>
 */
DsConstants.CNTR_STS_CD_DISPOSITION = "S";

/**
 * 컨테이너 타입코드 : FLATRACKCNTR(프레드릭 컨테이너)
 */
DsConstants.CNTR_TYP_CD_FR = "FR";

/**
 * 컨테이너 FULL / EMPTY 코드 FULL
 */
DsConstants.CNTR_FULL_EMPTY_CLS_CD_FULL = "F";
/**
 * 컨테이너 FULL / EMPTY 코드 EMPTY
 */
DsConstants.CNTR_FULL_EMPTY_CLS_CD_EMPTY = "E";

/**
 * 작업단계코드 셔틀
 * <pre> 작업단계코드 셔틀</pre>
 */
DsConstants.WRK_STP_CD_SHUTTLE = "0001";

/**
 * 작업단계코드 DOOR운송
 * <pre> 작업단계코드 DOOR운송</pre>
 */
DsConstants.WRK_STP_CD_TRANS = "0002";

/**
 * 작업단계코드 DOOR회수
 * <pre> 작업단계코드 DOOR회수</pre>
 */
DsConstants.WRK_STP_CD_RETRV = "0003";
/**
 * 작업단계코드 철송
 * <pre> 작업단계코드 철송</pre>
 */
DsConstants.WRK_STP_CD_RAILROAD = "0004";

/**
 * 작업단계코드 해송
 * <pre> 작업단계코드 해송</pre>
 */
DsConstants.WRK_STP_CD_MARTR = "0005";

/**
 * 작업단계코드 육송
 * <pre> 작업단계코드 육송</pre>
 */
DsConstants.WRK_STP_CD_GROUND_TRANS = "0047";

/**
 * 작업단계코드 적입
 * <pre> 작업단계코드 적입</pre>
 */
DsConstants.WRK_STP_CD_FULL_IN = "0024";

/**
 * 작업단계코드 적출
 * <pre> 작업단계코드 적출</pre>
 */
DsConstants.WRK_STP_CD_FULL_OUT = "0025";

/**
 * 작업단계코드 이적
 * <pre> 작업단계코드 이적</pre>
 */
DsConstants.WRK_STP_CD_CGSHF = "0043";

/**
 * 작업단계코드 상차
 * <pre> 작업단계코드 상차</pre>
 */
DsConstants.WRK_STP_CD_LOAD = "0028";
/**
 * 작업단계코드 하차
 * <pre> 작업단계코드 하차</pre>
 */
DsConstants.WRK_STP_CD_UNLOAD = "0029";

/**
 * 작업단계코드 선측상차
 * <pre> 작업단계코드 선측상차</pre>
 */
DsConstants.WRK_STP_CD_ALNGVSSL_LOAD = "0011";
/**
 * 작업단계코드 선측하차
 * <pre> 작업단계코드 선측하차</pre>
 */
DsConstants.WRK_STP_CD_ALNGVSSL_UNLOAD = "0012";

/**
 * 대표거래처코드 = 라파즈
 * <pre> 라파즈 </pre>
 */
DsConstants.REP_CLNT_NO_LAFARGE = "000001";

/**
 * 대표거래처코드 = 동부한농화학
 * <pre> 한농화학 : </pre>
 */
DsConstants.REP_CLNT_NO_HANNONG = "100001";

/**
 * 계약거래처코드 = 동부한농화학
 * <pre> 동부한농화학 : </pre>
 */
DsConstants.CTRT_CLNT_NO_HANNONG = "100001";

/**
 * 출발작업장코드 = 라파즈 여수공장
 * <pre> 라파즈 여수공장 : </pre>
 */
DsConstants.WRK_PL_LAFARGE_YUSU = "5M01";

/**
 * 출발작업장코드 라파즈 울산공장
 * <pre> 라파즈 울산공장 : </pre>
 */
DsConstants.WRK_PL_LAFARGE_ULSAN = "6M02";

/**
 * 출발작업장코드 라파즈 대전창고
 * <pre> 라파즈 대전창고 : </pre>
 */
DsConstants.WRK_PL_LAFARGE_DAEJEON = "3W01";

/**
 * 출발작업장코드 = 동부한농 울산비료공장
 * <pre> 동부한농 울산비료공장 : </pre>
 */

DsConstants.WRK_PL_HANNONG_ULSAN = "6M01";
/**
 * 출발작업장코드 = 동부한농 여주물류기지
 * <pre> 동부한농 여주물류기지 : </pre>
 */
DsConstants.WRK_PL_HANNONG_YEUJU = "4L01";

/**
 * 출발작업장코드 = 동부한농 정읍물류기지
 * <pre> 동부한농 정읍물류기지 : </pre>
 */
DsConstants.WRK_PL_HANNONG_JEUNGEUP = "5L01";

/**
 * 작업장코드 = 신대양 시화공장
 * <pre> 신대양 시화공장 : </pre>
 */
DsConstants.WRK_PL_SINDAEYANG_SIWHA = "4M17";

/**
 * 작업장코드 = 신대양 반월공장
 * <pre> 신대양 반월공장 : </pre>
 */
DsConstants.WRK_PL_SINDAEYANG_BANWOL = "4M15";

/**
 * 작업장코드 = 신대양 대양공장
 * <pre> 신대양 대양공장 : </pre>
 */
DsConstants.WRK_PL_SINDAEYANG_DAEYANG = "4M16";


/**
 * 품목코드 = 한농복합비료
 * <pre> 한농복합비료 : </pre>
 */
DsConstants.COMM_CD_COMPOSITE_FERTILIZER = "30002494";

/**
 * 매출입항목코드
 * <pre> 매출입항목코드 : </pre>
 */
DsConstants.SELPCH_ITEM_CD = "0131";

/**
 * 매출입항목코드(표준원가:하역기본노임)
 * <pre> 매출입항목코드 : </pre>
 */
DsConstants.SELPCH_ITEM_CD_STV_BASIS_WAGE = "0119";

/**
 * 매출입항목코드(표준원가:복리후생비)
 * <pre> 매출입항목코드 : </pre>
 */
DsConstants.SELPCH_ITEM_CD_WELSAL = "0120";


/**
 * 매출입항목코드(표준원가:중기임차료)
 * <pre> 매출입항목코드 : </pre>
 */
DsConstants.SELPCH_ITEM_CD_HVEQ_LOAN_RATE = "0121";

/**
 * 매출입항목코드(표준원가:지급수수료)
 * <pre> 매출입항목코드 : </pre>
 */
DsConstants.SELPCH_ITEM_CD_PAY_CMIS = "0184";

/**
 * 매출입항목코드(표준원가:기타변동비)
 * <pre> 매출입항목코드 : </pre>
 */
DsConstants.SELPCH_ITEM_CD_ETC_VAR_COST = "0185";

/**
 * 매출입항목코드(검수료)
 * <pre> 매출입항목코드 : </pre>
 */
DsConstants.SELPCH_ITEM_CD_TALLY = "0079";

/**
 * 매출입항목코드(구내셔틀료)
 * <pre> 매출입항목코드 : </pre>
 */
DsConstants.CMPND_SHUTTLE_RATE = "1200";

/**
 * 매출입항목코드(지게차사용료)
 * <pre> 매출입항목코드 : </pre>
 */
DsConstants.FLIFT_USE_RATE = "1201";

/**
 * 매출입항목코드(검사료)
 * <pre> 매출입항목코드 : </pre>
 */
DsConstants.INSP_RATE = "0729";

/**
 * 매출입항목코드(계근료)
 * <pre> 매출입항목코드 : </pre>
 */
DsConstants.SCAL_RATE = "0078"; 

/**
 * 매입품목유형코드 : 벌크
 * <pre> 매입품목유형코드 : </pre>
 */
DsConstants.PCHS_GOODS_PATTERN_CD = "02";
/**
 * 매입품목유형코드 : 컨테이너
 * <pre> 매입품목유형코드 : </pre>
 */
DsConstants.PCHS_GOODS_PATTERN_CD_CNTR = "01";
/**
 * 협력업체확인구분코드
 * <pre> 협력업체확인구분코드 : </pre>
 */
DsConstants.COP_CO_CONFIRM_CLS_CD = "01";

/**
 * 매입승인구분코드
 * <pre> 매입승인구분코드 : </pre>
 */
DsConstants.PCHS_ADMIT_CLS_CD = "01";

/**
 * 철송조작료 
 * <pre> 철송조작료 :  </pre>
 */
DsConstants.HNDL_RATE_CD = "0135";
/**
 * 재조작료
 * <pre> 재조작료 : </pre>
 */
DsConstants.RE_HNDL_RATE_CD = "0233";
/**
 * 구내운반비
 * <pre> 구내운반비 : = 구내이적료</pre>
 */
DsConstants.CMPND_PRTG_COST_CD = "0234";
/**
 * 정보이용료
 * <pre> 정보이용료 : = 철송업무 수수료</pre>
 */
DsConstants.INFO_USE_RATE_CD = "0236";
/**
 * 철송임
 * <pre> 철송임 : RAILROAD_FARE</pre>
 */
DsConstants.RAILROAD_FARE_CD = "0134";
/**
 * 작업장구분코드 : CY
 * <pre> 작업장구분코드 : </pre>
 */
DsConstants.WRK_PL_CLS_CD_CY = "C";
/**
 * 작업장구분코드 : 타CY
 * <pre> 작업장구분코드 : </pre>
 */
DsConstants.WRK_PL_CLS_CD_TCY = "T";
/**
 * 작업장구분코드 : DOOR
 * <pre> 작업장구분코드 : </pre>
 */
DsConstants.WRK_PL_CLS_CD_DOOR = "D";
/**
 * 작업장구분코드 : 장치장
 * <pre> 작업장구분코드 : </pre>
 */
DsConstants.WRK_PL_CLS_CD_YARD = "E";
/**
 * 작업장구분코드 : 창고
 * <pre> 작업장구분코드 : </pre>
 */
DsConstants.WRK_PL_CLS_CD_WHOUSE = "W";
/**
 * 작업장구분코드 : 부두
 * <pre> 작업장구분코드 : </pre>
 */
DsConstants.WRK_PL_CLS_CD_PORT = "P";
/**
 * 작업장구분코드 : 철도역
 * <pre> 작업장구분코드 : </pre>
 */
DsConstants.WRK_PL_CLS_CD_RAILROAD = "R";
/**
 * 작업장소유구분코드 : 타사
 * <pre> 작업장소유구분코드 : </pre>
 */
DsConstants.WRK_PL_POSN_CLS_CD_UCOM = "T";
/**
 * 반출입구분코드 : 반입
 * <pre> 반출입구분코드 : </pre>
 */
DsConstants.CRRYINOUT_CLS_CD_IN = "I";
/**
 * 반출입구분코드 : 반출
 * <pre> 반출입구분코드 : </pre>
 */
DsConstants.CRRYINOUT_CLS_CD_OUT = "O";
/**
 * 반출입진행상태코드 : 예정
 * <pre> 반출입진행상태코드 : </pre>
 */
DsConstants.CRRYINOUT_PRGS_STS_CD_S = "S";
/**
 * 반출입진행상태코드 : GATE IN
 * <pre> 반출입진행상태코드 : </pre>
 */
DsConstants.CRRYINOUT_PRGS_STS_CD_I = "I";
/**
 * 반출입EDI전송형태 : COPINO
 */
DsConstants.CRRYINOUT_EDI_COPINO = "CO";
/**
 * 반출입EDI전송형태 : COPI_CODECO
 */
DsConstants.CRRYINOUT_EDI_COPI_CODECO = "CD";
/**
 * 수입수출구분코드 : 수입
 * <pre> 수입수출구분코드 : </pre>
 */
DsConstants.IMP_EXP_CLS_CD_IMP = "I";
/**
 * 수입수출구분코드 : 수출
 * <pre> 수입수출구분코드 : </pre>
 */
DsConstants.IMP_EXP_CLS_CD_EXP = "O";
/**
 * 화물구분코드 : 벌크
 * <pre> 화물구분코드 : </pre>
 */
DsConstants.CARGO_CLS_CD_BULK = "B";
/**
 * 화물구분코드 : 컨테이너
 * <pre> 화물구분코드 : </pre>
 */
DsConstants.CARGO_CLS_CD_CONTAINER = "C";
/**
 * 작업지시종류코드 : 육송
 * <pre> 작업지시종류코드 : </pre>
 */
DsConstants.WRK_INDICT_KND_CD_LAND = "L";
/**
 * 작업지시종류코드 : 자가반출
 * <pre> 작업지시종류코드 : </pre>
 */
DsConstants.WRK_INDICT_KND_CD_SELF_CRRYOUT = "T";
/**
 * 합적유형구분코드 : GROSS중량적용
 * <pre> 합적유형구분코드 : </pre>
 */
DsConstants.COSHIPPING_PATTERN_CD_GROSS_WT = "B01";
/**
 * 합적유형구분코드 : NET중량적용
 * <pre> 합적유형구분코드 : </pre>
 */
DsConstants.COSHIPPING_PATTERN_CD_NET_WT = "B02";

/**
 * 합적유형구분코드 : 회원제차량
 * <pre> 합적유형구분코드 : </pre>
 */
DsConstants.COSHIPPING_PATTERN_CD_MBSSYS = "D01";
/**
 * 입출고구분코드 : 입고
 * <pre> 입출고구분코드 : </pre>
 */
DsConstants.IO_CLS_CD_IN = "I";
/**
 * 입출고구분코드 : 출고
 * <pre> 입출고구분코드 : </pre>
 */
DsConstants.IO_CLS_CD_OUT = "O";
/**
 * 상위물류점소코드 : 부산
 * <pre> 상위물류점소코드 : </pre>
 */
DsConstants.UPPER_LOBRAN_CD_BUSAN = "6AA";

/**
 * 상위물류점소코드 : 전남
 * <pre> 상위물류점소코드 : </pre>
 */
DsConstants.UPPER_LOBRAN_CD_JUNNAM = "5AA";
/**
 * 운송실적구분코드 : 육송
 * <pre> 운송실적구분코드 : </pre>
 */
DsConstants.TRANS_RSLTS_CLS_CD_L = "L";

/**
 * 작업단위코드 : 컨테이너
 * <pre> 상위물류점소코드 : </pre>
 */
DsConstants.WRK_UNIT_CD_CNTR = "VAN";
/**
 * 프로그램URL : 벌크오더
 * <pre> 프로그램URL : </pre>
 */
DsConstants.URL_BULK_ORDER = "/ds/sd/odrmgnt/odrreg/sd_402_01_02t.jsp";
/**
 * 프로그램URL : 컨테이너오더
 * <pre> 프로그램URL : </pre>
 */
DsConstants.URL_CONTAINER_ORDER = "/ds/sd/odrmgnt/odrreg/sd_402_01_11t.jsp";
/**
 * 프로그램URL : 컨테이너중장거리작업지시
 * <pre> 프로그램URL : </pre>
 */
DsConstants.URL_CONTAINER_LONG_DISTANCE = "/ds/op/wrkplan/transwrkplan/op_202_02_03b.jsp";
/**
 * 프로그램URL : 벌크중장거리작업지시
 * <pre> 프로그램URL : </pre>
 */
DsConstants.URL_BULK_LONG_DISTANCE = "/ds/op/wrkplan/transwrkplan/op_202_02_04b.jsp";
/**
 * 프로그램URL : 벌크협력업체차량작업지시
 * <pre> 프로그램URL : </pre>
 */
DsConstants.URL_BULK_CUSTOMER_TRANS_VOLUME = "/ds/op/wrkplan/transwrkplan/op_202_02_24b.jsp";
/**
 * 프로그램URL : 컨테이너협력업체차량작업지시
 * <pre> 프로그램URL : </pre>
 */
DsConstants.URL_CONTAINER_CUSTOMER_TRANS_VOLUME = "/ds/op/wrkplan/transwrkplan/op_202_02_22b.xml";
/**
 * 프로그램URL : 셔틀운송작업지시등록(벌크)
 * <pre> 프로그램URL : </pre>
 */
DsConstants.URL_BULK_SHUTTLE_TRANS_VOLUME = "/ds/op/wrkplan/transwrkplan/op_202_02_25b.jsp";
/**
 * 프로그램URL : 셔틀운송작업지시등록(컨테이너)
 * <pre> 프로그램URL : </pre>
 */
DsConstants.URL_CONTAINER_SHUTTLE_TRANS_VOLUME = "/ds/op/wrkplan/transwrkplan/op_202_02_18b.jsp";
/**
 * 프로그램URL : DEPOT별EMPTY컨테이너재고현황
 * <pre> 프로그램URL : </pre>
 */
DsConstants.URL_DEPOT_EACH_EMPTY_CONTAINER_STOCK = "/ds/op/wrkrslts/stockrslts/op_303_03_22b.jsp";
/**
 * 프로그램URL : 복화연결등록
 * <pre> 프로그램URL : </pre>
 */
DsConstants.URL_CONTAINER_COMPOSITE_CARGO_VOLUME = "/ds/op/wrkplan/transwrkplan/op_202_02_02b.jsp";
/**
 * 프로그램URL : 복화연결등록
 * <pre> 프로그램URL : </pre>
 */
DsConstants.URL_CONTAINER_COMPOSITE_CARGO_RESULTS = "/ds/op/wrkrslts/transwrkrslts/op_304_01_34b.jsp";
/**
 * 프로그램URL : 반출등록
 * <pre> 프로그램URL : </pre>
 */
DsConstants.URL_CONTAINER_COMPOSITE_REGIST_CRRYOUT = "/ds/op/wrkrslts/cywrkrslts/op_301_01_06b.jsp";
/**
 * 프로그램URL : 반입등록
 * <pre> 프로그램URL : </pre>
 */
DsConstants.URL_CONTAINER_COMPOSITE_REGIST_CRRYIN = "/ds/op/wrkrslts/cywrkrslts/op_301_01_05b.jsp";
/**
 * 프로그램URL : 작업경로 상세정보 등록 및 수정
 * <pre> 프로그램URL : </pre>
 */
DsConstants.URL_CONTAINER_WORK_PATH_DETAIL = "/ds/sd/odrmgnt/odrreg/sd_402_01_28b.jsp";
/**
 * 프로그램URL : 작업경로 상세정보 변경 팝업(컨테이너)
 * <pre> 프로그램URL : </pre>
 */
DsConstants.URL_CONTAINER_WORK_PATH_DETAIL_CHANGE_POPUP = "/ds/op/wrkplan/transwrkplan/op_202_02_26p.jsp";
/**
 * 프로그램URL : 오더완료 처리
 * <pre> 프로그램URL : </pre>
 */
DsConstants.URL_ORDER_COMPLETE = "/ds/op/wrkrslts/transwrkrslts/op_304_01_04b.jsp";
/**
 * 프로그램URL : 오더별컨테이너작업현황
 * <pre> 프로그램URL : </pre>
 */
DsConstants.URL_CONTAINER_ORDER_WORK_PRESENTDETAIL = "/ds/as/cstmrsrvc/coafmgnt/as_102_01_06b.xml";
/**
 * 프로그램URL : SITC LOGI 오더별컨테이너작업현황
 * <pre> 프로그램URL : </pre>
 */
DsConstants.URL_LOGI_CONTAINER_ORDER_WORK_PRESENTDETAIL = "/ds/op/wrkrslts/cywrkrslts/si_301_02_07b.jsp";
/**
 * 개별배차여부 : 가배차
 * <pre> 개별배차여부 : </pre>
 */    
DsConstants.INDVDL_ALLOCCAR_TEMPORARY = 0;
/**
 * GATE IN OUT 구분 : GATE IN
 * <pre> GATE IN OUT 구분 : </pre>
 */
DsConstants.GATE_INOUT_CLS_CD_IN = "I";
/**
 * GATE IN OUT 구분 : GATE OUT
 * <pre> GATE IN OUT 구분 : </pre>
 */
DsConstants.GATE_INOUT_CLS_CD_OUT = "O";
/**
 * OFF반납구분코드 : DOOR반납
 * <pre> OFF반납구분코드 : </pre>
 */    
DsConstants.OFF_RTRN_CLS_CD_DOOR = "1";
/**
 * OFF반납구분코드 : CY반납
 * <pre> OFF반납구분코드 : </pre>
 */    
DsConstants.OFF_RTRN_CLS_CD_CY = "2";    

/**
 * 복화종류코드 : 수입수출연계복화
 */    
DsConstants.CMPSTCRG_KND_CD_DD = "DD";

/**
 * 복화종류코드 : COMBINE
 */    
DsConstants.CMPSTCRG_KND_CD_CB = "CB";

/**
 * 복화종류코드 : 차량복화
 */    
DsConstants.CMPSTCRG_KND_CD_VH = "VH";
/**
 * 복화종류코드 : Depot
 */    
DsConstants.CMPSTCRG_KND_CD_DEPOT = "DT";

/**
 * 점소코드 : 인천지점
 */    
DsConstants.WRK_LOBRAN_CD_INCHON = "4AA";

/**
 * 점소코드 : 의왕지점
 */    
DsConstants.WRK_LOBRAN_CD_UIWANG = "4BB";
/**
 * 작업장코드 : 부산진CY
 */
DsConstants.WRK_PL_CD_PUSANJIN = "6C02";
/**
 * 작업장코드 : 부산시
 */    
DsConstants.WRK_PL_CD_PUSAN = "6GG";
/**
 * 작업장코드 : 광양시
 */    
DsConstants.WRK_PL_CD_GWANGYANG = "545";

/**
 * 지급기준 : 시간당
 */    
DsConstants.PAY_STD_CD_H = "H";
/**
 * 운송조건코드 : 왕복
 */    
DsConstants.TRANS_COND_CD_ROUTRP = "2";

/**
 * 매출항목코드 : 장비사용료
 */
DsConstants.SELL_ITEM_CD_EQ_USE_RATE = "0003";

/**
 * 매출항목코드 : 적출료 (CFS Devanning CHG)
 */
DsConstants.SELL_ITEM_CD_CFS_DEVANNING_CHG = "0025";

/**
 * 매출항목코드 : 종가보관료
 */
DsConstants.SELL_ITEM_CD_VALM_STR_RATE = "0031";

/**
 * 매출항목코드 : 종량보관료
 */
DsConstants.SELL_ITEM_CD_MERA_STR_RATE = "0030";

/**
 * 매출항목코드 : 출고상차료
 */
DsConstants.SELL_ITEM_CD_OUT_ON_RATE = "0049";

/**
 * 매출항목코드 : DPCT 구내이적료
 */
DsConstants.SELL_ITEM_CD_CMPND_CGSHF_RATE = "0036";

/**
 * 매출항목코드 : 화재보험료
 */
DsConstants.SELL_ITEM_CD_FIRE_INSR_RATE = "0255";

/**
 * 매출항목코드 : 할인할증
 */
DsConstants.SELL_ITEM_CD_DC_AMT_RATE = "0256";

/**
 * 매출항목코드 : 야간할증
 */
DsConstants.SELL_ITEM_CD_NGT_SC = "0098";

/**
 * 매출항목코드 : 토요할증
 */
DsConstants.SELL_ITEM_CD_SATURDAY_SC = "0090";

/**
 * 매출항목코드 : 휴일할증
 */
DsConstants.SELL_ITEM_CD_OFF_DAY_SC = "0089";

/**
 * 매출항목코드 : 난작업할증
 */
DsConstants.SELL_ITEM_CD_DIFF_WRK_SC = "0092";

/**
 * 매출항목코드 : 운송료
 */
DsConstants.SELL_ITEM_CD_TRANS_RATE = "0010";

/**
 * 매출항목코드 : 셔틀료 
 */
DsConstants.SELL_ITEM_CD_SHUTTLE= "0543";

/**
 * 매출항목코드 : 금액할증 
 */
DsConstants.SELL_ITEM_CD_AMOUT_SC = "0257";


/**
 * 작업권역코드 : 복화권역
 */
DsConstants.WRK_DISTRICT_CD_CMPST = "CMP";
/**
 * 작업권역코드 : 벌크작업권역
 */
DsConstants.WRK_DISTRICT_CD_BWK = "BWK";

/**
 * 작업권역코드 : 부산로컬
 */
DsConstants.WRK_DISTRICT_CD_PLO = "PLO";
/**
 * 모바일작업코드 : 운송
 */
DsConstants.MOBILE_WRK_CD_TRANS = "10";
/**
 * 모바일작업코드 : 운송(컨테이너)
 */
DsConstants.MOBILE_WRK_CD_TRANS_CNTR = "13";
/**
 * 모바일처리구분코드 : 인서트
 */
DsConstants.MOBILE_PROC_CLS_INSERT = "I";
/**
 * 모바일처리구분코드 : 인서트
 */
DsConstants.MOBILE_PROC_CLS_UPDATE = "U";
/**
 * 모바일처리구분코드 : 인서트
 */
DsConstants.MOBILE_PROC_CLS_DELETE = "D";
/**
 * 모바일메시지ID : 차량작업지시
 */
DsConstants.MOBILE_MSGID_WRK_INDICT = "VS01";
/**
 * 모바일메뉴구성FLAG : 출발
 */
DsConstants.MOBILE_MENU_DPT = "V1";
/**
 * 모바일메뉴구성FLAG : 출발+도착
 */
DsConstants.MOBILE_MENU_DPTARV = "V2";
/**
 * 모바일메뉴구성FLAG : 도착
 */
DsConstants.MOBILE_MENU_ARV = "V3";
/**
 * 모바일메뉴구성FLAG : 메뉴없음
 */
DsConstants.MOBILE_MENU_NOMENU = "V4";
/**
 * 모바일운전자메시지구분 : 
 * 0:안보냄, 1:출발, 2:도착, 3:출발+도착
 */
DsConstants.MOBILE_DRV_MSG_CLS_NOSEND = "0";
/**
 * 모바일운전자메시지구분 : 
 * 0:안보냄, 1:출발, 2:도착, 3:출발+도착
 */
DsConstants.MOBILE_DRV_MSG_CLS_DPT = "1";
/**
 * 모바일운전자메시지구분 : 
 * 0:안보냄, 1:출발, 2:도착, 3:출발+도착
 */
DsConstants.MOBILE_DRV_MSG_CLS_ARV = "2";
/**
 * 모바일운전자메시지구분 : 
 * 0:안보냄, 1:출발, 2:도착, 3:출발+도착
 */
DsConstants.MOBILE_DRV_MSG_CLS_DPTARV = "3";
/**
 * 사용자구분코드 : 협력업체(운송)
 */
DsConstants.USER_CLS_CD_COP_CO = "02";
/**
 * 물류점소구분코드 : 팀
 */
DsConstants.LOBRAN_CLS_CD_TEAM = "T";
/**
 * EDI전송구분 : 전송대기
 */
DsConstants.EDI_SND_CLS_CD_SND_WAIT = "0";
/**
 * EDI전송구분 : 전송완료
 */
DsConstants.EDI_SND_CLS_CD_SND_COMPLETE = "1";
/**
 * EDI전송구분 : 추후전송
 */
DsConstants.EDI_SND_CLS_CD_LATER_SND = "3";
/**
 * EDI전송구분 : 필수항목오류
 */
DsConstants.EDI_SND_CLS_CD_IMPITEM_WARN = "5";
/**
 * EDI전송문서구분 : 원본
 */
DsConstants.EDI_DOC_STS_CLS_ORIG = "9";
/**
 * EDI전송문서구분 : 변경
 */
DsConstants.EDI_DOC_STS_CLS_CHG = "4";
/**
 * EDI전송문서구분 : 삭제
 */
DsConstants.EDI_DOC_STS_CLS_DEL = "3";
/**
 * EDI반입반출구분 : 반출
 */
DsConstants.EDI_CRRYIN_CRRYOUT_CLS_OUT = "1";
/**
 * EDI반입반출구분 : 반입
 */
DsConstants.EDI_CRRYIN_CRRYOUT_CLS_IN = "2";
/**
 * EDI온도구분 : 냉동
 */
DsConstants.EDI_TEMPER_CLS_CEL = "CEL";
/**
 * EDI온도구분 : 대용
 */
DsConstants.EDI_TEMPER_CLS_DRY = "DRY";
/**
 * EDI FULL/EMPTY구분 : FULL
 */
DsConstants.EDI_FULL_EMPTY_CLS_FULL = "5";
/**
 * EDI 사전정보그룹구분코드 : 경인ICD
 */
DsConstants.EDI_GRPCD_KYUNGIN_ICD = "KI";
/**
 * EDI 사전정보그룹구분코드 : 터미널
 */
DsConstants.EDI_GRPCD_TM = "TM";
/**
 * EDI 사전정보그룹구분코드 : LG
 */
DsConstants.EDI_GRPCD_LG = "LG";
/**
 * 사전정보그룹구분코드 : 경인ICD
 */
DsConstants.PRE_INFO_GRP_CLS_CD_KYUNGIN_ICD = "GI";
/**
 * 사전정보그룹구분코드 : 터미널
 */
DsConstants.PRE_INFO_GRP_CLS_CD_TM = "TM";
/**
 * 장비상태코드 : 사용중
 */
DsConstants.EQ_STS_CD_ON = "ON";
/**
 * 운송하역구분 : 운송
 */
DsConstants.TRANS_STV_CLS_TRANS = "1";
/**
 * 컨테이너벌크구분 : 컨테이너
 */
DsConstants.CNTR_BULK_CLS = "1";
/**
 * 컨테이너중량조건코드 : combine
 */
DsConstants.CNTR_WT_COND_CD_COMBINE = "C";
/**
 * 컨테이너사이즈코드 : 40
 */
DsConstants.CNTR_SIZ_CD_40 = "40";
/**
 * 컨테이너작업형태코드 : BOB-TAIL
 */
DsConstants.CNTR_WRK_KND_CD_BOBTAIL = "B";
/**
 * 컨테이너작업형태코드 : ONGROUND
 */
DsConstants.CNTR_WRK_KND_CD_ONGROUND = "O";

/**
 * EDI송신매핑 - 거래처코드 : 999999
 */
DsConstants.EDI_SNEDING_MAPPING_CLNT_NO = "999999";

/**
 * EDI송신매핑 - 문서코드 : COPINO
 */
DsConstants.EDI_SNEDING_MAPPING_COPINO = "COPINO";

/**
 * EDI송신매핑 - 항목코드 : CLSCD
 */
DsConstants.EDI_SNEDING_MAPPING_CLSCD = "CLSCD";

/**
 * EDI송신매핑 - 항목코드 : RCVR
 */
DsConstants.EDI_SNEDING_MAPPING_RCVR = "RCVR";

/**
 * v항목코드 : SNDR
 */
DsConstants.EDI_SNEDING_MAPPING_SNDR = "SNDR";

/**
 * EDI송신매핑 - 항목코드 : DPRT
 */
DsConstants.EDI_SNEDING_MAPPING_DPRT = "DPRT";

/**
 * EDI송신매핑 - 항목코드 : ARRV
 */
DsConstants.EDI_SNEDING_MAPPING_ARRV = "ARRV";

/************************************ 물류>운영 END **************************************/

	
/************************************ 물류>영업>오더 START **************************************/

/**
 * 오더구분 - 벌크오더 
 */
DsConstants.ODR_BULK = "B";

/**
 * 오더구분 - 컨테이너 오더 
 */
DsConstants.ODR_CNTR = "C";

/**
 * 오더구분 - 벌크오더와 컨테이너 오더 
 */
DsConstants.ODR_ALL = "A";  


/**
 * 오더 : 수입 코드
 */
DsConstants.IMP_CD = "I";

/**
 * 오더 : 수출 코드
 */
DsConstants.EXP_CD = "O";

/**
 * 오더 : 내수 코드
 */
DsConstants.DOMESTIC_CD = "D";

/**
 * FIO/BT 구분 : SD105
 */
DsConstants.FIO_BT = "SD105";

/**
 * FIO/BT 구분 (SD105) : FIO 
 */
DsConstants.FIO = "FO";

/**
 * FIO/BT 구분 (SD105) : BT
 */
DsConstants.BT = "BT";

/**
 * FIO/BT 구분 (SD105) : FB
 */
DsConstants.FB = "FB";


/**
 * 오더종류 공통그룹코드 : SD113
 */
DsConstants.ODR_KND_CD_GRP_CD = "SD113";

/**
 * 벌크 수입본선오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR = "B1";

/**
 * 벌크 수입일반
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR = "B2";

/**
 * 벌크 수출본선오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_EXP_CVSSL_BULK_ODR = "B3";

/**
 * 벌크 수출일반오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_EXP_GNRL_BULK_ODR = "B4";

/**
 * 벌크 장치장셔틀오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_BULK_YARD_SHTL_ODR = "B5";

/**
 * 벌크 상하차오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_BULK_LDULD_ODR = "BL";

/**
 * 벌크 보관오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_BULK_STORAGE_ODR = "BM";

/**
 * 벌크 이적오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_BULK_CARGO_SHIFTING_ODR = "BN";

/**
 * 벌크 장치장경유 수입 TS 오더 
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_BULK_YARD_VIA_IMP_TS_ODR = "BS";

/**
 * 벌크 부두간 TS 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR = "BT";

/**
 * 벌크 장치장경유 수출 TS 오더 
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_BULK_YARD_VIA_EXP_TS_ODR = "BW";

/**
 * 컨테이너 수입본선 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR = "C1";

/**
 * 컨테이너 수입일반 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";

/**
 * 컨테이너 수출본선 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_EXP_CVSSL_CNTR_ODR = "C3";

/**
 * 컨테이너 수출일반 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR = "C4";

/**
 * 컨테이너 수입하역 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_IMP_STV_CNTR_ODR = "CA";

/**
 * 컨테이너 수출하역 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_EXP_STV_CNTR_ODR = "CB";

/**
 * ON-HIRE 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_ON_HIRE_ODR = "C5";

/**
 * OFF-HIRE 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_OFF_HIRE_ODR = "C6";

/**
 * EMPTY POSITION 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_EMPTY_POSITION_ODR = "C7";

/**
 * CFS 셔틀 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_CFS_SHUTTLE_ODR = "CF";

/**
 * 새관검사 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_CUSTOM_INSPECTION_ODR = "CI";

/**
 * CFS 작업 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_CFS_WORK_ODR = "CL";

/**
 * 타창고 작업 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_OWHOUSE_WORK_ODR = "CK";

/**
 * 컨테이너 상하차 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_CNTR_LDULD_ODR = "CL";

/**
 * 컨테이너 보관 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_CNTR_STORAGE_ODR = "CM";

/**
 * 컨테이너 이적 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_CNTR_CARGO_SHIFTING_ODR = "CN";

/**
 * PORT CHANGE
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_PORT_CHANGE_ODR = "CP";

/**
 * 고박
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_FIXG_ODR = "CQ";

/**
 * RETURN
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_RETURN_ODR = "CR";

/**
 * 하선지 경유 수입 T/S
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_CY_IMP_TS_ODR = "CS";    

/**
 * 하선지 경유 수출 T/S
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_CY_EXP_TS_ODR = "CW";    

/**
 * 부두간 T/S
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_TS_ODR = "CT";

/**
 * 검색기 : EXAMINE
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_EXAMINE_ODR = "CX";

/**
 * 내수 거점내 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_DOMESTIC_BASE_INSIDE_ODR = "D1";

/**
 * 내수 거점간 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_DOMESTIC_BASE_OUTSIDE_ODR = "D2";

/**
 * 내수 공장반출 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_DOMESTIC_FCTY_CRRYOUT_ODR = "D3";

/**
 * 내수 물류기지반출 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_DOMESTIC_LOGIS_BASE_CRRYOUT_ODR = "D4";

/**
 * 내수 거점간회수 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_DOMESTIC_BASE_INSIDE_RETRV_ODR = "D5";

/**
 * 내수 공장회수 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_DOMESTIC_FCTY_OUTSIDE_RETRV_ODR = "D6";

/**
 * 내수 물류기지회수 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_DOMESTIC_LOGIS_BASE_RETRV_ODR = "D7";

/**
 * 내수 상하차 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_DOMESTIC_LDULD_ODR = "DL";

/**
 * 내수 보관 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_DOMESTIC_STR_ODR = "DM";

/**
 * 부두노임 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_PIER_WAGES_ODR = "L1";

/**
 * 부두 장치장 노임 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_PIER_YARD_WAGES_ODR = "L2";

/**
 * 상용 장치장 노임 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_COMMON_USE_YARD_WAGES_ODR = "L3";

/**
 * 월 제세공과성 노임 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_MONTH_PUBLIC_CHARGES_WAGES_ODR = "L4";

/**
 * 포장 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_PACK_ODR = "P1";

/**
 * 타창고 대표 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_OWHOUSE_REP_ODR = "T1";

/**
 * 작업장 대표 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_WRK_PL_REP_ODR = "Y1";

/**
 * 보관작업장 대표 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_STR_WRK_PL_REP_ODR = "Y2";

/**
 * 일반청구 오더
 * <pre> 오더종류 : GRP_CD : SD113 </pre>
 */
DsConstants.ODR_KND_CD_GNRL_BILG_ODR = "ZZ";

/**
 * 자가구분코드 : 공통그룹코드 : SD114
 */
DsConstants.SELF_CLS_CD_GRP_CD = "SD114";

/**
 * 당사운송
 * <pre> 작업유형 : GRP_CD : SD114 </pre>
 */
DsConstants.SELF_CLS_CD_MCOM_TRANS = "LI";

/**
 * 자가영업
 * <pre> 작업유형 : GRP_CD : SD114 </pre>
 */
DsConstants.SELF_CLS_CD_SELF_SALES = "LS";

/**
 * 자가출고
 * <pre> 작업유형 : GRP_CD : SD114 </pre>
 */
DsConstants.SELF_CLS_CD_SELF_OUTFLW = "JO";

/**
 * 자가반출
 * <pre> 작업유형 : GRP_CD : SD114 </pre>
 */
DsConstants.SELF_CLS_CD_SELF_CRRYOUT = "JE";

/**
 * 자가입고
 * <pre> 작업유형 : GRP_CD : SD114 </pre>
 */
DsConstants.SELF_CLS_CD_SELF_INFLW = "JI";

/**
 * 확정구분코드(통합매출입조정) - 미확인
 */
DsConstants.DCSN_CLS_CD_NOTCONFIRM = "1";

/**
 * 확정구분코드(통합매출입조정) - 확인
 */
DsConstants.DCSN_CLS_CD_CONFIRM = "2";

/**
 * 확정구분코드(통합매출입조정) - 계산서작성
 */
DsConstants.DCSN_CLS_CD_BILL = "3";

/**
 * 확정구분코드(통합매출입조정) - 전표확정
 */
DsConstants.DCSN_CLS_CD_SLIP = "4";

/**
 * 컨테이너Type - RF컨테이너
 */
DsConstants.CNTR_TYP_CD_RF = "RF";
/**
 * 컨테이너Type - RH컨테이너
 */
DsConstants.CNTR_TYP_CD_RH = "RH";

/**
 * 컨테이너Type - HC컨테이너
 */
DsConstants.CNTR_TYP_CD_HC = "HC";

/**
 * 매출입항목구분코드 - 무매출 : 0000
 */
DsConstants.SELPCH_ITEM_CLS_CD_NOSELL = "0000";
/**
 * 매출입항목구분코드 - 경인ICD : 0155
 */
DsConstants.SELPCH_ITEM_CLS_CD_KYUNGIN_ICD = "0155";

/**
 * 단위코드 공통그룹코드 : LO102
 */
DsConstants.UNIT_CD_GRP_CD = "LO102";

/**
 * 수량기준단위 : LO102 (EA)
 */
DsConstants.BASIC_UNIT_CD_QTY_EA = "E/A";

/**
 * 중량기준단위 : LO102 (TON)
 */
DsConstants.BASIC_UNIT_CD_WT_TON = "TON";

/**
 * 중량기준단위 : LO102 (KG)
 */
DsConstants.BASIC_UNIT_CD_WT_KG = "KG";

/**
 * 중량기준단위 :  (RTON)
 */
DsConstants.BASIC_UNIT_CD_WT_RTON = "R/T";

/**
 * 중량기준단위 :  (RNT)
 */
DsConstants.BASIC_UNIT_CD_WT_RNT = "RNT";

/**
 * 중량기준단위 :  (CBM)
 */
DsConstants.BASIC_UNIT_CD_WT_CBM = "CBM";

/**
 * 중량기준단위 :  (K/T)
 */
DsConstants.BASIC_UNIT_CD_WT_KG_TON = "K/T";

/**
 * 중량기준단위 :  (MST)
 */
DsConstants.BASIC_UNIT_CD_WT_MEASUREMENT_TON = "MST";

/**
 * 당사배정구분코드 : 오더등록
 */
DsConstants.MCOM_ASSGN_CLS_CD = "L";   

/**
 * 배정작업구분코드 : 타창고
 */
DsConstants.ASSGN_CLS_CD_OWHOUSE = "K";

/**
 * 기준통화코드 : KRW
 */
DsConstants.BASIC_CRC_CD = "KRW";

/**
 * CFS수입입고에서 체크대상인 작업장코드 
 */
DsConstants.CRS_IMP_WRK_CD = "6F01";

/**
 * 컨테이너 SIZE 공통코드 
 */
DsConstants.CNTR_SIZE_GRP_CD = "OP101";

/**
 * 컨테이너 TYPE 공통코드 
 */
DsConstants.CNTR_TYPE_GRP_CD = "OP102";

/**
 * 물류 무하불 거래처 차량 op701의 ADJM_TRGT_YN을 0으로 SETTTING
 */
DsConstants.NONPAYABLE_VEHCL_NO = "부산22무2222";


/************************************ 물류>영업>오더 END **************************************/

/************************************ 국제물류 START **************************************/

/**
 * 여신체크구분 - 여신체크여부 
 */
DsConstants.CREDIT_LIMIT_CHK_YN = "N";

/************************************ 국제물류 END **************************************/