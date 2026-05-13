<%@ page import="dbl.cm.fw.constants.*" contentType ="text/html;charset=utf-8" %>

<%
	String porteYn	=	request.getParameter("porte") ==null? "" : request.getParameter("porte") ; //포르테에서 넘어온값
	String sabun	=	request.getParameter("sabun") ==null? "" : request.getParameter("sabun") ; //포르테에서 넘어온값
	
%>
<html>
<head>
<title>Dongwon Loex 통합정보 시스템</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<frameset id="OUT_FRAMESET" rows="0,*" frameborder="no" border="1" framespacing="0" noresize cols="*"> 
  <frame name="blankFrame" scrolling="no" src="blank.html" noresize bordercolor="#000000" >
  <frame name="workFrame" scrolling="no" src="/common/jsp/active_update.jsp?EP_FORWARD=FALSE&porteYn=<%=porteYn%>&sabun=<%=sabun%>" noresize bordercolor="#000000" > 
</frameset>
<noframes> 
<body bgcolor="#FFFFFF" text="#000000"  >
</body>
</noframes> 
</html>