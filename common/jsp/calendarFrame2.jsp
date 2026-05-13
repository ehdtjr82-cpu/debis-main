<%--
    Copyright 2004 by  LG CNS Tips Project,
    All rights reserved.
--%>
<%@ page contentType="text/html; charset=utf-8" %>
<%
    //if
    String year  = ((String)request.getParameter("year")  == null) ? null : (String)request.getParameter("year");
    String month = ((String)request.getParameter("month") == null) ? null : (String)request.getParameter("month");
    
    String param  = "";
    
    // 2개의 Param이 모두 null이 아닌 경우에만 설정
    if( year != null && month != null ){
        param = "?year=" + year + "&month=" + month;   
    }
%>
<HTML>
<HEAD>
<TITLE>달력</TITLE>

<!-- CSS Context --> 
<LINK HREF="/common/css/calendar.css" REL="stylesheet" TYPE="TEXT/CSS">

<META http-equiv="Cache-Control" content="no-cache; no-store; no-save">

<script language="javascript">
function setValue(yyyymm) {
    if(yyyymm != "") {
        window.returnValue = yyyymm;
        window.close();
    }
}
</script>
</HEAD>

<FRAMESET border="0" frameborder="0">
    <FRAME src="calendarMain2.jsp<%=param%>" marginwidth="0" marginheight="0" scrolling="no" noresize>
</FRAMESET>

</HTML>
