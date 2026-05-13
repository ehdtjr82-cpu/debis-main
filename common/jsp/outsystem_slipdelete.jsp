<%--
	화면 - $Id: outsystem_slipdelete.jsp,v 1.10 2008/04/01 06:02:10 신종민 Exp $
	설명 - 외부시스템 전표를 삭제
--%>
<%@ page contentType="text/html;charset=utf-8" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.cmd.*" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.dto.*" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.util.*" %>
<%@ page import="dbl.cm.fw.util.*" %>
<%@ page import="dbl.cm.fw.trace.*" %>

<%@ page import="dbl.ac.fi.gnrlaccount.osidesysproc.bd.DeleteOutsideSystemSlipBD" %>
<%@ page import="dbl.ac.fi.gnrlaccount.osidesysproc.bd.UpdateOutsideSystemProcessConsequenceBD" %>
<%@ page import="dbl.ac.fi.gnrlaccount.osidesysproc.dto.OutsideSystemContentsDTO" %>
<%@ page import="dbl.cm.fw.bd.DCommonBDExecutor" %>
<%@ page import="dbl.cm.fw.log.DLog" %>
<%@ page import="dbl.cm.fw.exception.DMessageException" %>
<%@ page import="dbl.cm.fw.exception.DTraceException" %>

<%
	String jobName = "전표 삭제";
	String loginId = "outsys";
	String osidePkgCd = request.getParameter("osidePkgCd");
	String txnNo = request.getParameter("txnNo");

	String osidePkgCd_n = osidePkgCd.replaceAll("\n", "");
	String osidePkgCd_r = osidePkgCd_n.replaceAll("\r", "");
	
	osidePkgCd = osidePkgCd_r;
	
	String txnNo_n = txnNo.replaceAll("\n", "");
	String txnNo_r = txnNo_n.replaceAll("\r", "");
	
	txnNo = txnNo_r;
	
	DLog.debug("========================== 외부시스템 " + jobName + " 처리 시작 ===================================");

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
		DeleteOutsideSystemSlipBD deleteOutsideSystemSlipBD = new DeleteOutsideSystemSlipBD();
		new DCommonBDExecutor(deleteOutsideSystemSlipBD).executeTx(outsideSystemContentsDTO);

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
			errorMsg = "실행오류. " + jobName + " 처리가 취소되었습니다.";
			DLog.debug("<<<ERROR RAISED>>> [" + errorCode + "] " + e.getMessage());
			out.println("[" + errorCode + "]" + errorMsg);
			return;
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
	out.println("거래번호(" + txnNo + ")에 대한 " + jobName + " 처리가 완료되었습니다.");
	DLog.debug("========================== 외부시스템 " + jobName + " 처리 종료 ===================================");
%>