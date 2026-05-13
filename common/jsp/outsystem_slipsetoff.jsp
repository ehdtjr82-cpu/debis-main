<%@ page contentType="text/html;charset=utf-8" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.cmd.*" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.dto.*" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.util.*" %>
<%@ page import="dbl.cm.fw.util.*" %>
<%@ page import="dbl.cm.fw.trace.*" %>

<%@ page import="dbl.ac.fi.gnrlaccount.osidesysproc.bd.ProcessOutsideSystemSetoffBD" %>
<%@ page import="dbl.ac.fi.gnrlaccount.osidesysproc.bd.UpdateOutsideSystemProcessConsequenceBD" %>
<%@ page import="dbl.ac.fi.gnrlaccount.osidesysproc.dto.OutsideSystemContentsDTO" %>
<%@ page import="dbl.cm.fw.bd.DCommonBDExecutor" %>
<%@ page import="dbl.cm.fw.log.DLog" %>
<%@ page import="dbl.cm.fw.exception.DMessageException" %>
<%@ page import="dbl.cm.fw.exception.DTraceException" %>

<%
	DLog.debug("========================== 외부시스템 상계처리 시작 ===================================");

    //String loginId = (String)request.getParameter("LOGIN_ID");
	String loginId = "outsys";
	String osidePkgCd = request.getParameter("osidePkgCd");
	String txnNo = request.getParameter("txnNo");

    if(  DCheckIf.isNull(osidePkgCd) ) {
        out.println( "[E0043]외부시스템 코드가  정의되지 않았습니다." );
		DLog.debug("<<<ERROR RAISED>>> [E0043] 외부시스템 코드가  정의되지 않았습니다.");
        return ;
    }

    if(  DCheckIf.isNull(txnNo) ) {
        out.println( "[E0043]거래번호가  정의되지 않았습니다." );
		DLog.debug("<<<ERROR RAISED>>> [E0043] 거래번호가  정의되지 않았습니다.");
        return ;
    }

	DLog.debug("<<<HTTPRequest Parameters>>> 외부시스템코드 : " + osidePkgCd + ", 거래번호 : " + txnNo);

    DGlobalThreadLocal.set("LOGIN_USER_ID_KEY",loginId);

	DTxTrace.regist("AC");
    DTracer.initTraceData(DTxTrace.getTxID(), "AC");
	DGlobalThreadLocal.set("LOGIN_USER_ID_KEY",loginId);

	DLog.debug("<<<SLIP PROCESS>>> Initilize error code and error message ......");
	try {
		OutsideSystemContentsDTO resultsDTO = new OutsideSystemContentsDTO();
		resultsDTO.setOsidePkgCd(osidePkgCd);
		resultsDTO.setTxnNo(txnNo);
		resultsDTO.setConseCd("");
		resultsDTO.setConseDesc("");

		UpdateOutsideSystemProcessConsequenceBD updateOutsideSystemProcessConsequenceBD = new UpdateOutsideSystemProcessConsequenceBD();
		new DCommonBDExecutor(updateOutsideSystemProcessConsequenceBD).executeTx(resultsDTO);
	} catch (Exception e) {
		DLog.debug("<<<ERROR RAISED>>> [E9998]에러코드 및 에러메시지 초기화 중 오류가 발생했습니다.");
		out.println("[E9998]에러코드 및 에러메시지 초기화 중 오류가 발생했습니다.");
		return;
	}

	OutsideSystemContentsDTO outsideSystemContentsDTO = new OutsideSystemContentsDTO();
	outsideSystemContentsDTO.setOsidePkgCd(osidePkgCd);
	outsideSystemContentsDTO.setTxnNo(txnNo);

	try {
		ProcessOutsideSystemSetoffBD processOutsideSystemSetoffBD = new ProcessOutsideSystemSetoffBD();
		new DCommonBDExecutor(processOutsideSystemSetoffBD).executeTx(outsideSystemContentsDTO);

	} catch (Exception e) {
		String errorCode = "", errorMsg = "";
		if (e instanceof DMessageException) {
			errorCode = ((DMessageException)e).getMsgCode();
			errorMsg =  ((DMessageException)e).getMessage();
		} else if (e instanceof DTraceException) {
			errorCode = "E8999";
			errorMsg = ((DTraceException)e).getMessage();
			if (errorMsg.indexOf("ORA-") != -1) {
				errorMsg = errorMsg.substring(errorMsg.indexOf("ORA-"));
			}
		} else {
			errorCode = "E9999";
			errorMsg = e.toString();
		}

		try {
			OutsideSystemContentsDTO resultsDTO = new OutsideSystemContentsDTO();
			resultsDTO.setOsidePkgCd(osidePkgCd);
			resultsDTO.setTxnNo(txnNo);
			resultsDTO.setConseCd(errorCode);
			resultsDTO.setConseDesc(errorMsg);

			UpdateOutsideSystemProcessConsequenceBD updateOutsideSystemProcessConsequenceBD = new UpdateOutsideSystemProcessConsequenceBD();
			new DCommonBDExecutor(updateOutsideSystemProcessConsequenceBD).executeTx(resultsDTO);
		} catch (Exception ee) { }

		DLog.debug("<<<ERROR RAISED>>> [" + errorCode + "] " + errorMsg);
		out.println("[" + errorCode + "]" + errorMsg);
		return;
	}
	out.println("거래번호(" + txnNo + ")에 대한 상계처리가 완료되었습니다.");
	DLog.debug("========================== 외부시스템 상계처리 종료 ===================================");

%>