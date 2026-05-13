<%--
	화면 - $Id: outsystem_tmlbondproc.jsp,v 1.3 2008/08/01 08:32:34 송규엽 Exp $
	설명 - 외부시스템 터미널 게이트단말기에서 보세를 처리
--%>
<%@ page contentType="text/html;charset=utf-8" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.cmd.*" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.dto.*" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.util.*" %>
<%@ page import="dbl.cm.fw.util.*" %>
<%@ page import="dbl.cm.fw.trace.*" %>

<%@ page import="dbl.to.in.cntr.tmlcntr.bd.CreateGateIoBondBD" %>
<%@ page import="dbl.to.in.cntr.tmlcntr.dto.MfBondCntrQueryConditionDTO" %>
<%@ page import="dbl.to.in.cntr.tmlcntr.dto.GateIoBondProcDTO" %>

<%@ page import="dbl.cm.fw.bd.DCommonBDExecutor" %>
<%@ page import="dbl.cm.fw.log.DLog" %>
<%@ page import="dbl.cm.fw.exception.*" %>

<%
	String jobName = "게이트보세";
	String loginId = "outsys";
	String osidePkgCd = request.getParameter("osidePkgCd");
	//String txnNo = request.getParameter("txnNo");
	String vsslMgntNo = request.getParameter("vsslMgntNo");
	String cntrNo = request.getParameter("cntrNo");
	String dupNo = request.getParameter("dupNo");
	String wrkPatternCd = request.getParameter("wrkPatternCd");

	String osidePkgCd_n = osidePkgCd.replaceAll("\n", "");
	String osidePkgCd_r = osidePkgCd_n.replaceAll("\r", "");
	osidePkgCd = osidePkgCd_r;
	
	//String txnNo_n = txnNo.replaceAll("\n", "");
	//String txnNo_r = txnNo_n.replaceAll("\r", "");
	//txnNo = txnNo_r;
	
	// WRK_CLS_CD = 'I' and FM_CLS_CD = 'F' 일때에만 보세처리대상임. <== 이것은 VB에서  체크하자.
	String vsslMgntNo_n = vsslMgntNo.replaceAll("\n", "");
	String vsslMgntNo_r = vsslMgntNo_n.replaceAll("\r", "");
	vsslMgntNo = vsslMgntNo_r;
	
	String cntrNo_n = cntrNo.replaceAll("\n", "");
	String cntrNo_r = cntrNo_n.replaceAll("\r", "");
	cntrNo = cntrNo_r;

	String dupNo_n = dupNo.replaceAll("\n", "");
	String dupNo_r = dupNo_n.replaceAll("\r", "");
	dupNo = dupNo_r;

	String wrkPatternCd_n = wrkPatternCd.replaceAll("\n", "");
	String wrkPatternCd_r = wrkPatternCd_n.replaceAll("\r", "");
	wrkPatternCd = wrkPatternCd_r;

	String strResultYn = "N";
	DLog.debug("========================== 외부시스템 " + jobName + " 처리 시작 ===================================");

    if(  DCheckIf.isNull(osidePkgCd) ) {
        out.println( "[E0043]외부시스템 코드가  정의되지 않았습니다." );
		DLog.debug("<<<ERROR RAISED>>> [E0043] 외부시스템 코드가  정의되지 않았습니다.");
        return ;
    }

    if(  DCheckIf.isNull(vsslMgntNo) ) {
        out.println( "[E0043]모선관리번호가  정의되지 않았습니다." );
		DLog.debug("<<<ERROR RAISED>>> [E0043] 모선관리번호가  정의되지 않았습니다.");
        return ;
    }

    if(  DCheckIf.isNull(cntrNo) ) {
        out.println( "[E0043]컨테이너번호가  정의되지 않았습니다." );
		DLog.debug("<<<ERROR RAISED>>> [E0043] 컨테이너번호가  정의되지 않았습니다.");
        return ;
    }

    if(  DCheckIf.isNull(dupNo) ) {
        out.println( "[E0043]DupNo가  정의되지 않았습니다." );
		DLog.debug("<<<ERROR RAISED>>> [E0043] DupNo가  정의되지 않았습니다.");
        return ;
    }

    if(  DCheckIf.isNull(wrkPatternCd) ) {
        out.println( "[E0043]작업유형이  정의되지 않았습니다." );
		DLog.debug("<<<ERROR RAISED>>> [E0043] 작업유형이  정의되지 않았습니다.");
        return ;
    }

	DLog.debug("<<<HTTPRequest Parameters>>> 외부시스템코드 : " + osidePkgCd + ", 모선관리번호: " + vsslMgntNo + ", 컨테이너번호: " + cntrNo + ", 작업유형코드: " + wrkPatternCd);

    DGlobalThreadLocal.set("LOGIN_USER_ID_KEY",loginId);

//===============  여기 이렇게 해야 하는 것인지 확인 필요함   ===================================================
	//DTxTrace.regist("AC");
    //DTracer.initTraceData(DTxTrace.getTxID(), "AC");
	DTxTrace.regist("TO");
    DTracer.initTraceData(DTxTrace.getTxID(), "TO");
//====================================================================================================
	DGlobalThreadLocal.set("LOGIN_USER_ID_KEY",loginId);

	DLog.debug("<<<SLIP PROCESS>>> Initilize error code and error message ......");
	try {
		//OutsideSystemContentsDTO resultsDTO = new OutsideSystemContentsDTO();
		//resultsDTO.setOsidePkgCd(osidePkgCd);
		//resultsDTO.setTxnNo(txnNo);
		//resultsDTO.setConseCd("");
		//resultsDTO.setConseDesc("");
DLog.debug("게이트 단말기 보세처리... JSP에서 BD호출하기 직전 상태임.");

		MfBondCntrQueryConditionDTO mfBondCntrQueryConditionDTO = new MfBondCntrQueryConditionDTO();
		mfBondCntrQueryConditionDTO.setWrkPatternCd(wrkPatternCd); //반입:R, 반출:D
		mfBondCntrQueryConditionDTO.setVsslMgntNo(vsslMgntNo);
		mfBondCntrQueryConditionDTO.setCntrNo(cntrNo);
		mfBondCntrQueryConditionDTO.setDupNo(dupNo);
		
System.out.println(mfBondCntrQueryConditionDTO.toString());
		
		//CreateGateIoBondBD createGateIoBondBD = new CreateGateIoBondBD();
		//new DCommonBDExecutor(createGateIoBondBD).executeTx(mfBondCntrQueryConditionDTO);

        CreateGateIoBondBD createGateIoBondBD = new CreateGateIoBondBD();
        GateIoBondProcDTO gateIoBondProcDTO = (GateIoBondProcDTO) new DCommonBDExecutor(createGateIoBondBD).executeNonTx(mfBondCntrQueryConditionDTO);

		strResultYn = gateIoBondProcDTO.getGateIoBondProcYn();
		//strResultYn = "Y";
		DLog.debug("보세처리결과:"+strResultYn);
	} catch (Exception e) {
		DLog.debug("<<<ERROR RAISED>>> [E9998]에러코드 및 에러메시지 초기화 중 오류가 발생했습니다.");
		//out.println("[E9998]에러코드 및 에러메시지 초기화 중 오류가 발생했습니다.");
		strResultYn = "N";
		return;
	}

	//out.println("모선관리번호(" + vsslMgntNo + "), 컨테이너번호(" + cntrNo + "), DupNo(" + dupNo + "), 작업유형(" + wrkPatternCd + ") 에 대한 " + jobName + " 처리가 완료되었습니다.");
	//out.println("보세처리결과:"+strResultYn);
	DLog.debug("========================== 외부시스템 " + jobName + " 처리 종료 ===================================");

%>

<html>
<head>
<title>게이트보세처리</title>
<META HTTP-EQUIV="Content-Type" content="text/html; charset=utf-8">
<LINK HREF="/common/css/common.css" REL="STYLESHEET" type="TEXT/CSS">
<script language="javascript" src="/common/script/common.js"></script>
<script language="javascript" src="/common/script/popupdefine.js"></script>
<script language=javascript src="/common/script/tocommon.js"></script>
<script language="javascript">

</script>

</head>
<!-----------------------------------------------------------------------------
    화면영역 시작
------------------------------------------------------------------------------>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" >
	<Form Name="koform">
	보세처리결과:<input type="text" id=kotest value="<%=strResultYn%>">
	</Form>
</body>
</html>
