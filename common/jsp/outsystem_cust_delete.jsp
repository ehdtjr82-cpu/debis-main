<%@ page contentType="text/html;charset=utf-8" %>
<%@ page import="dbl.cm.fw.util.*" %>
<%@ page import="dbl.cm.fw.trace.*" %>

<%@ page import="dbl.ac.fi.gnrlaccount.osidesysproc.bd.DeleteOutsideCustomerBD" %>
<%@ page import="dbl.ac.fi.gnrlaccount.osidesysproc.bd.UpdateOsideCustomerConsequence" %>
<%@ page import="dbl.ac.fi.gnrlaccount.osidesysproc.dto.OutsideCustomerDTO" %>
<%@ page import="dbl.cm.fw.bd.DCommonBDExecutor" %>
<%@ page import="dbl.cm.fw.log.DLog" %>
<%@ page import="dbl.cm.fw.exception.DMessageException" %>
<%@ page import="dbl.cm.fw.exception.DTraceException" %>

<%
	String jobName = "거래처 삭제";
	String loginId = "outsys";
	String osideClntNo = request.getParameter("osideClntNo");

	DLog.debug("========================== 외부시스템 " + jobName + " 처리 시작 ===================================");

    
    if(  DCheckIf.isNull(osideClntNo) ) {
        out.println( "[E0043]외부거래처번호가  정의되지 않았습니다." );
		DLog.debug("<<<ERROR RAISED>>> [E0043] 외부거래처번호가  정의되지 않았습니다.");
        return ;
    }

//	DLog.debug("<<<HTTPRequest Parameters>>> 외부시스템코드 : " + osidePkgCd + ", 거래번호 : " + txnNo);

    DGlobalThreadLocal.set("LOGIN_USER_ID_KEY",loginId);

	DTxTrace.regist("AC");
    DTracer.initTraceData(DTxTrace.getTxID(), "AC");
	DGlobalThreadLocal.set("LOGIN_USER_ID_KEY",loginId);

	DLog.debug("<<<SLIP PROCESS>>> Initilize error code and error message ......");
	try {
	    OutsideCustomerDTO resultsDTO = new OutsideCustomerDTO();
		resultsDTO.setOsideClntNo(osideClntNo);

		DeleteOutsideCustomerBD deleteOutsideCustomerBD = new DeleteOutsideCustomerBD();
		new DCommonBDExecutor(deleteOutsideCustomerBD).executeTx(resultsDTO);
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
			//DLog.debug("<<<ERROR RAISED>>> [" + errorCode + "] " + e.getMessage());
			//out.println("[" + errorCode + "]" + errorMsg);
			//return;
		}
		
		try {
		    OutsideCustomerDTO resultsDTO2 = new OutsideCustomerDTO();
			resultsDTO2.setOsideClntNo(osideClntNo);
		    resultsDTO2.setConseCd(errorCode);
		    resultsDTO2.setConseDesc(errorMsg);

		    UpdateOsideCustomerConsequence updateOsideCustomerConsequence = new UpdateOsideCustomerConsequence();
			new DCommonBDExecutor(updateOsideCustomerConsequence).executeTx(resultsDTO2);
		} catch (Exception ee) {
			response.sendRedirect("outsystem_error.jsp");
			return;
		}
		
		DLog.debug("<<<ERROR RAISED>>> [" + errorCode + "] " + errorMsg);
		out.println("[" + errorCode + "]" + errorMsg);		
		return;
	}


	out.println("거래처번호(" + osideClntNo + ")에 대한 " + jobName + " 처리가 완료되었습니다.");
	DLog.debug("========================== 외부시스템 " + jobName + " 처리 종료 ===================================");

%>