<%@ page contentType="text/html;charset=utf-8" %> 
<%@ page import="dbl.cm.fw.constants.*" %> 
<%@ page import="dbl.cm.fw.util.*" %> 

<%
    String message = (String) request.getAttribute( DFWConstants.ERROR_DETAIL );    
    if ( DCheckIf.isNull( message )) message = (String) request.getParameter( DFWConstants.ERROR_DETAIL );    
   
%>
<html>
<head>
<script language="javascript">
 function jsShowButton() 
 {   
    
   if  ( top.opener == null ) { 
    
     document.all.buttonClose.style.display = "none";       
     document.all.buttonBack.style.display = "";
   } else { 
    
     document.all.buttonClose.style.display = "";       
     document.all.buttonBack.style.display = "none";
   }
 } 
</script>
<title>에러</title>
<link rel="stylesheet" href="/common/css/common.css">
</head>
<body bgcolor="#FFFFFF" text="#000000" leftmargin="5" topmargin="5" onload="javascript:jsShowButton()">
<table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="center">
      <div style="width:450; height:330; text-align:left; overflow:auto">
        <textarea id="txa_Msg" cols="120" rows="100" style="overflow:auto" class="input_textarea" readOnly>
        <%=message%>
        </textarea>
      </div>
    </td>
  </tr>
  <tr height="25"> 
    <td class="tableListTd2" align="center"> 
      <div ID="buttonClose" STYLE="position:relative;">
         <input class="button" type="button" value="닫기" onClick="top.close()">
       </div>  
    </td>       
    <td class="tableListTd2" align="center"> 
      <div ID="buttonBack" STYLE="position:relative;">
        <input class="button" type="button" value="이전페이지로" onClick="history.back()">
      </div>
    </td>
  </tr>
</table>
</body>
 
</html>


