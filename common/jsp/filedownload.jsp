<%@ page import="dbl.cm.fw.constants.*,dbl.cm.fw.exception.*" contentType="text/html;charset=utf-8" %> 

  
<%
   String ERROR_MESSAGE = "" ;
   Object fileUpExceptionObj =  request.getAttribute( DFWConstants.FILE_DOWNLOAD_ERROR );
   
   if ( fileUpExceptionObj != null ) {  
     DFrameWorkException fileDownException = (DFrameWorkException)fileUpExceptionObj ;
     ERROR_MESSAGE = fileDownException.getMessage();
%>
	<script language="JavaScript">
	  alert( '<%=ERROR_MESSAGE%>');
	</script>
<%     
   }  
%>
