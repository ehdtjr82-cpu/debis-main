<%@ page contentType = "text/html; charset=utf-8" %>
<%@ page import="dbl.cm.bc.apprvmgnt.elecapprv.dto.*, dbl.cm.bc.apprvmgnt.elecapprv.util.*" %>
<%
 
         ApprvConfig.reset();
         out.println("<pre>");
         out.println("============================================================================================================================");
	 out.println("전자 결재 설정이 다음과 같이 변경되었습니다");
	 out.println("============================================================================================================================");
	 out.println("PORTE 시스템의 결재상신 페이지 URL               : [" + ApprvConfig.getEpApprvPage() +"]");
	 out.println("통합물류시스템(DBLIS) 도메인                     : [" + ApprvConfig.getDblDomain() +"]");
	 out.println("PORTE 시스템에 정의된 통합물류시스템 ID          : [" + ApprvConfig.getSystemId() +"]");
	 out.println("PORTE 시스템에 정의된 통합물류시스템내의 업무 ID : [" + ApprvConfig.getTskId()+"]" );
	 out.println("문서 컨텐트 타입                                 : [" + ApprvConfig.getBodyType() +"]"); 
	 out.println("============================================================================================================================");
	 out.println("</pre>");
%>
 
