
<%@ page contentType="text/html;charset=utf-8" %>
<%@ page import="dbl.cm.fw.util.*" %>
<%@ page import="dbl.cm.fw.trace.*" %>

<%@ page import="dbl.ac.fm.collmoneymgnt.collmoneymgnt.bd.RegistInterfaceCollectionOfMoneyBD" %>
<%@ page import="dbl.ac.fm.collmoneymgnt.collmoneymgnt.bd.UpdateAddInterfaceProcessConsequenceBD" %>

<%@ page import="dbl.ac.fi.gnrlaccount.osidesysproc.dto.OutsideSystemContentsDTO" %>
<%@ page import="dbl.ac.fm.collmoneymgnt.collmoneymgnt.dto.CollectionOfMoneyTargetQueryConditionDTO" %>
<%@ page import="dbl.cm.fw.bd.DCommonBDExecutor" %>
<%@ page import="dbl.cm.fw.log.DLog" %>
<%@ page import="dbl.cm.fw.exception.*" %>

<%
	String jobName = "수금처리";
	String loginId = "952581";
	String osidePkgCd = request.getParameter("osidePkgCd");
	String txnNo = request.getParameter("txnNo");

	DLog.debug("========================== 외부시스템 " + jobName + " 처리 시작 ===================================");

	String osidePkgCd_r = osidePkgCd.replaceAll("\n", "");
	String osidePkgCd_n = osidePkgCd_r.replaceAll("\r", "");
	
	osidePkgCd = osidePkgCd_n;

	String txnNo_r = txnNo.replaceAll("\n", "");
	String txnNo_n = txnNo_r.replaceAll("\r", "");
	
	txnNo = txnNo_n;
	
    if(  DCheckIf.isNull(osidePkgCd) ) {
        out.println( "[E0043]외부패키지코드가  정의되지 않았습니다." );
		DLog.debug("<<<ERROR RAISED>>> [E0043] 외부패키지코드가  정의되지 않았습니다.");
        return ;
    }
    
    if(  DCheckIf.isNull(txnNo) ) {
        out.println( "[E0043]거래번호가  정의되지 않았습니다." );
		DLog.debug("<<<ERROR RAISED>>> [E0043] 거래번호가  정의되지 않았습니다.");
        return ;
    }

//	DLog.debug("<<<HTTPRequest Parameters>>> 외부시스템코드 : " + osidePkgCd + ", 거래번호 : " + txnNo);

    DGlobalThreadLocal.set("LOGIN_USER_ID_KEY",loginId);

	DTxTrace.regist("AC");
    DTracer.initTraceData(DTxTrace.getTxID(), "AC");
	DGlobalThreadLocal.set("LOGIN_USER_ID_KEY",loginId);

	DLog.debug("<<<SLIP PROCESS>>> Initilize error code and error message ......");
	try {
		CollectionOfMoneyTargetQueryConditionDTO collectionOfMoneyTargetQueryConditionDTO = new CollectionOfMoneyTargetQueryConditionDTO();
		collectionOfMoneyTargetQueryConditionDTO.setOsidePkgCd(osidePkgCd);
		collectionOfMoneyTargetQueryConditionDTO.setTxnNo(txnNo);

	    RegistInterfaceCollectionOfMoneyBD registInterfaceCollectionOfMoneyBD = new RegistInterfaceCollectionOfMoneyBD();
		new DCommonBDExecutor(registInterfaceCollectionOfMoneyBD).executeTx(collectionOfMoneyTargetQueryConditionDTO);

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
			errorMsg = "실행오류. " + jobName + "처리가 취소되었습니다.에러내용 : ( " + e.getMessage() +" )";
			//DLog.debug("<<<ERROR RAISED>>> [" + errorCode + "] " + e.getMessage());
			//out.println("[" + errorCode + "]" + errorMsg);
			//return;
		}
		
		try {
			OutsideSystemContentsDTO resultsDTO = new OutsideSystemContentsDTO();
			resultsDTO.setOsidePkgCd(osidePkgCd);
			resultsDTO.setTxnNo(txnNo);
			resultsDTO.setConseCd(errorCode);
			resultsDTO.setConseDesc(errorMsg);

			UpdateAddInterfaceProcessConsequenceBD updateAddInterfaceProcessConsequenceBD = new UpdateAddInterfaceProcessConsequenceBD();
			new DCommonBDExecutor(updateAddInterfaceProcessConsequenceBD).executeTx(resultsDTO);
		} catch (Exception ee) {
			response.sendRedirect("outsystem_error.jsp");
			return;
		}
		
		DLog.debug("<<<ERROR RAISED>>> [" + errorCode + "] " + errorMsg);
		out.println("[" + errorCode + "]" + errorMsg);		
		return;
	}

	out.println("거래번호 (" + txnNo + ")에 대한 " + jobName + "가 완료되었습니다.");
	DLog.debug("========================== 외부시스템 " + jobName + " 처리 종료 ===================================");

%>