<%@ page contentType="text/html;charset=utf-8" %> 
<%@ page import="dbl.cm.fw.constants.*" %> 
<%@ page import="dbl.cm.fw.util.*" %> 

<%
    String message = (String) request.getAttribute( DFWConstants.ERROR_DETAIL );    
    if ( DCheckIf.isNull( message )) message = (String) request.getParameter( DFWConstants.ERROR_DETAIL );    
   
%>
<html>
<head>
<title>에러</title>
<link rel="stylesheet" href="/common/css/common.css">
</head>
<body bgcolor="#FFFFFF" text="#000000" leftmargin="5" topmargin="5" >


요청 처리 과정에서 에러가 발생하였습니다.<br>

</body>
 
</html>
