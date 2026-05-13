<%@ page import="dbl.cm.fw.constants.*" contentType ="text/html;charset=utf-8" %>

<%
    String sabun = request.getParameter("sabun") ==null? "" : request.getParameter("sabun") ; //포르테에서 넘어온값
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

window.onload= fn_onload; 

function fn_onload(){
	window.setTimeout("fn_check()",1000);
}

function fn_check(){
	if(typeof ShiftCrossBrowser_BrowserDetect != "undefined"){
		if(ShiftCrossBrowser_BrowserDetect.browser == "Explorer" && ShiftCrossBrowser_BrowserDetect.browserVersion == "x86"){
			openMainPage()
		}
	}
}



function getUniqueMainPageStr () { 
    var now = new Date();
	var year = now.getYear();
	var month = now.getMonth() + 1;
	var date = now.getDate();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();	
	return 'mainPageUniqueName' + year + month  + date + hours+ minutes + seconds ;
}	 


function isEbizRentCar() { 
    var domainStr = document.domain ; 
    if (  domainStr.indexOf( "1688rent" ) != -1  ) return true ;
    else return false ; 
}

function isEbizEP() { 
    var domainStr = document.domain ; 
    if (  domainStr.indexOf( "ebiz" ) != -1 || domainStr.indexOf( "210" ) != -1  ) return true ;
    else return false ; 
}

function openMainPage() {
    if ( isEbizRentCar() ) {  
       location.href = "http://"+document.domain +"/rentcar/rc_index_main.jsp";
    } else if ( isEbizEP() ) {  
       location.href = "http://"+document.domain +"/ep_index_main.html";
    } else {
<%--     	location.href = "http://"+document.domain +"/common/jsp/index_main.jsp?porte=Y&sabun=<%=sabun%>"; --%>
		location.href = "/common/jsp/index_main.jsp?porte=Y&sabun=<%=sabun%>";
	}
	
}
</script>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<noframes> 
<body bgcolor="#FFFFFF" text="#000000"  >
</body>
</noframes> 
</html>