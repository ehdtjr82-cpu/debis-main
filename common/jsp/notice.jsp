<%@ page import="dbl.cm.fw.constants.*" contentType ="text/html;charset=utf-8" %>

<%
	String imgName = request.getParameter("pImgName");
%>
 
<HTML>
<HEAD>
<TITLE>공지사항</TITLE>
<META HTTP-EQUIV="Content-Type" content="text/html; charset=utf-8">
<BODY bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0"> 

<TABLE width="100%" height="100%" border="0" cellpadding="0" cellspacing="0"> 
  <TR> 
    <TD valign="left">
    <img src=/common/notice/<%=imgName%>>
    </TD>
  </TR>
</TABLE>
</body>
</html>
