<%--
	화면 - $Id: outsystem_slipreverse.jsp,v 1.8 2008/07/23 08:23:55 박범민 Exp $
	설명 - 외부시스템 전표를 역분개처리
--%>
<%@ page contentType="text/html;charset=utf-8" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.cmd.*" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.dto.*" %>
<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.util.*" %>
<%@ page import="dbl.cm.fw.util.*" %>
<%@ page import="dbl.cm.fw.trace.*" %>
<%@ page import="java.util.List" %> 
<%@ page import="java.sql.Connection" %> 

<%@ page import="dbl.ac.fi.gnrlaccount.osidesysproc.bd.ProcessOutsideSystemSlipReverseBD" %>
<%@ page import="dbl.ac.fi.gnrlaccount.osidesysproc.bd.UpdateOutsideSystemProcessConsequenceBD" %>
<%@ page import="dbl.ac.fi.gnrlaccount.osidesysproc.dto.OutsideSystemContentsDTO" %>
<%@ page import="dbl.ac.fi.gnrlaccount.osidesysproc.ebc.IOutsideSystem" %>
<%@ page import="dbl.ac.fi.gnrlaccount.osidesysproc.ebc.OutsideSystemEBC" %>
<%@ page import="dbl.cm.fw.bd.DCommonBDExecutor" %>
<%@ page import="dbl.cm.fw.component.DComponentFactory" %>
<%@ page import="dbl.cm.fw.log.DLog" %>
<%@ page import="dbl.cm.fw.exception.DMessageException" %>
<%@ page import="dbl.cm.fw.exception.DTraceException" %>
<%@ page import="dbl.cm.fw.exception.DRuntimeException" %>
<%@ page import="dbl.cm.fw.connection.DConnectionManager" %>
<%@ page import="dbl.cm.fw.component.DCommonPBC" %>
<%
    String jobName = "전표 역분개";
	String loginId = "";
	String osidePkgCd = request.getParameter("osidePkgCd");
	String txnNo = request.getParameter("txnNo");
	Connection daoConnection = null;
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
        out.println( "[E0043]거래번호가  정의되지 않았습니다.");

		DLog.debug("<<<ERROR RAISED>>> [E0043] 거래번호가  정의되지 않았습니다.");
        return ;
    }
	DLog.debug("===================Searching Login_id==================================");	
	try {  //역분개 전표를 자동회계처리하기 위해서 user id를 ai004의 reg_id로 읽어와서 셋팅해야 함
	    if (osidePkgCd.equals("08")) {
	        loginId = "071290";
	    } else {
	        DLog.debug("====================================================");	
	        daoConnection = DConnectionManager.getConnection();
	        DLog.debug("1.outsideSystemContentsDTO");
		    IOutsideSystem outSystemEBC = (IOutsideSystem) DComponentFactory.getComponentImpl(OutsideSystemEBC.class, daoConnection);
		    OutsideSystemContentsDTO outsideSystemContentsDTO = new OutsideSystemContentsDTO();
			outsideSystemContentsDTO.setOsidePkgCd(osidePkgCd);
			outsideSystemContentsDTO.setTxnNo(txnNo);
			DLog.debug("2.outsideSystemContentsDTO"+outsideSystemContentsDTO);	
		    List outsideSystemContentsDTOList = outSystemEBC.retrieveOutsideSystemContents(outsideSystemContentsDTO);
		    OutsideSystemContentsDTO tempContents = (OutsideSystemContentsDTO) outsideSystemContentsDTOList.get(0);
		    loginId = tempContents.getRegId();
		    if (DCheckIf.isNull(loginId)) loginId = "090466"; // 등록된 사번이 없으면 재무팀 한병규 대리 사번으로 대체	        
	    }	    
	} catch (Exception e) {
		DLog.debug("<<<ERROR RAISED>>> [E0043] 거래번호가  정의되지 않았습니다.");
		out.println("[E0043]거래번호가  정의되지 않았습니다.");
		return;
	} finally {
	    if (!osidePkgCd.equals("08")) {
	    	DConnectionManager.close(daoConnection);
	    }
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
		ProcessOutsideSystemSlipReverseBD processOutsideSystemSlipReverseBD = new ProcessOutsideSystemSlipReverseBD();
		new DCommonBDExecutor(processOutsideSystemSlipReverseBD).executeTx(outsideSystemContentsDTO);

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
			//errorMsg = "실행오류. " + jobName + " 처리가 취소되었습니다.";
			errorMsg = "실행오류. " + e.getMessage();
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