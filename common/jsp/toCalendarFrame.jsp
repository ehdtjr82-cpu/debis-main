<%--
    Copyright 2004 by  LG CNS Tips Project,
    All rights reserved.
--%>
<%@ page contentType="text/html; charset=utf-8" %>
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
	<FRAME src="toCalendarMain.jsp" marginwidth="0" marginheight="0" scrolling="no" noresize>
</FRAMESET>

</HTML>
