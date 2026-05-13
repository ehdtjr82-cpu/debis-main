<%--
    Copyright 2004 by  LG CNS Tips Project,
    All rights reserved.
--%>
<%@ page contentType="text/html; charset=utf-8" %>
<%
    //if
    String year  = ((String)request.getParameter("year")  == null) ? null : (String)request.getParameter("year");
    String month = ((String)request.getParameter("month") == null) ? null : (String)request.getParameter("month");
    String day   = ((String)request.getParameter("day")   == null) ? null : (String)request.getParameter("day");
    
    String param  = "";
    
    // 3개의 Param이 모두 null이 아닌 경우에만 설정
    if( year != null && month != null && day != null ){
        param = "?year=" + year + "&month=" + month + "&day=" + day;   
    }
%>
<HTML>
<HEAD>
<TITLE>달력</TITLE>

<!-- CSS Context --> 
<LINK HREF="/common/css/calendar.css" REL="stylesheet" TYPE="TEXT/CSS">

<META http-equiv="Cache-Control" content="no-cache; no-store; no-save">

<script language="javascript">
function setValue(yyyymmdd) {
    if(yyyymmdd != "") {
        window.returnValue = yyyymmdd;
        window.close();
    }
}
</script>
</HEAD>

<FRAMESET border="0" frameborder="0">
    <FRAME src="calendarMain.jsp<%=param%>" marginwidth="0" marginheight="0" scrolling="no" noresize>
</FRAMESET>

</HTML>
