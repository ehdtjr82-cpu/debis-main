<%@ page import="dbl.cm.fw.constants.*" contentType ="text/html;charset=utf-8" %>

<%
	String porteYn	=	request.getParameter("porte") ==null? "" : request.getParameter("porte") ; //포르테에서 넘어온값
	String sabun	=	request.getParameter("sabun") ==null? "" : request.getParameter("sabun") ; //포르테에서 넘어온값
%>
<html>
<head>
<script language="JavaScript">

//동적으로 ShiftCrossBrowser JS를 호출해야 한다.
var scbHeadTag = document.getElementsByTagName("head")[0];     
var scbScript = document.createElement('script');
scbScript.type = 'text/javascript';
var scbRandom = (Math.random().toString(36).slice(-8)).toUpperCase();
scbScript.src = '/js/ShiftCrossBrowser_ver.2.2.min.js?1='+scbRandom;
scbHeadTag.appendChild(scbScript);
var domainStr = document.domain ; 

function fn_onload(){
	window.setTimeout("fn_check()",1000);
}

function fn_check(){
	if(typeof ShiftCrossBrowser_BrowserDetect != "undefined"){
		if(ShiftCrossBrowser_BrowserDetect.browser == "Explorer" && ShiftCrossBrowser_BrowserDetect.browserVersion == "x86"){

		}
	}
}
</script>
<title>Dongwon Loex 통합정보 시스템</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<frameset id="OUT_FRAMESET" rows="0,*" frameborder="no" border="1" framespacing="0" noresize cols="*"> 
  <frame name="blankFrame" scrolling="no" src="blank.html" noresize bordercolor="#000000" >
  <frame name="workFrame" scrolling="no" src="/common/jsp/active_update_crm.jsp?EP_FORWARD=FALSE&sabun=<%=sabun%>" noresize bordercolor="#000000" > 
</frameset>
<noframes> 
<body bgcolor="#FFFFFF" text="#000000"  >
</body>
</noframes> 
</html>