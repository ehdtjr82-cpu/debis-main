<%@ page import="dbl.cm.fw.ibatis.*,java.util.*,java.text.*"  contentType="text/html;charset=utf-8" %>
<html>
<head>
<script language="JavaScript">
 
</script>
<title>IBATIS-SQLMAP정보</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body bgcolor="#FFFFFF" text="#000000"  >
 
<%
  String refreshMode = ( String ) request.getParameter("refreshMode");
  String resourceFile = ( String ) request.getParameter("resourceFile");
  
  DSqlMapCache sqlMap = DSqlMapCache.getInstance();
  if ( refreshMode != null && refreshMode.equals("TARGET_ONLY")) {
     sqlMap.updateSqlMapClient(resourceFile);
%>
   [<%=resourceFile%>] <br> 재설정이  완료되었습니다.
<%     
  } else { 
      sqlMap.reset();
%>
    전체 EBC 재설정이  완료되었습니다.
<%      
  }
%> 
 &nbsp;&nbsp;&nbsp;>>>>&nbsp;&nbsp;&nbsp;<input type="button" value="닫기" onclick="top.close();">
 
</body>
 
</html>