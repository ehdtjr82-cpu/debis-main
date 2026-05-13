<%@ page contentType="text/html;charset=utf-8" %> 
<%@ page import="dbl.cm.fw.constants.*" %> 
<%@ page import="dbl.cm.fw.util.*" %> 

<%
    String message = (String) request.getAttribute( DFWConstants.ERROR_DETAIL );    
    if ( DCheckIf.isNull( message )) message = (String) request.getParameter( DFWConstants.ERROR_DETAIL );    

    String ACTION_TYPE = (String) request.getAttribute( DFWConstants.ACTION_TYPE );    
    if ( DCheckIf.isNull( ACTION_TYPE )) ACTION_TYPE = (String) request.getParameter( DFWConstants.ACTION_TYPE );    
    
    // 설정 되지 않은 경우 DFWConstants.MESSAGE_ERROR
    if ( DCheckIf.isNull( ACTION_TYPE )) ACTION_TYPE = DFWConstants.MESSAGE_ERROR ;
       
    String TARGET_URL = (String) request.getAttribute( DFWConstants.TARGET_URL );    
    if ( DCheckIf.isNull( TARGET_URL )) TARGET_URL = (String) request.getParameter( DFWConstants.TARGET_URL );    
    
    
    String ALERT_MESSAGE = (String) request.getAttribute( DFWConstants.ALERT_MESSAGE );    
    if ( DCheckIf.isNull( ALERT_MESSAGE )) ALERT_MESSAGE = (String) request.getParameter( DFWConstants.ALERT_MESSAGE );    
    if ( DCheckIf.isNull( ALERT_MESSAGE )) ALERT_MESSAGE = "FALSE" ;
    
    String FORWARD_PAGE = (String) request.getAttribute( DFWConstants.FORWARD_PAGE );    
    if ( DCheckIf.isNull( FORWARD_PAGE )) FORWARD_PAGE = (String) request.getParameter( DFWConstants.FORWARD_PAGE );    
    if ( DCheckIf.isNull( FORWARD_PAGE )) FORWARD_PAGE = "FALSE" ;    
     
    String REFRESH_PARENT = (String) request.getAttribute( DFWConstants.REFRESH_PARENT );    
    if ( DCheckIf.isNull( REFRESH_PARENT )) REFRESH_PARENT = (String) request.getParameter( DFWConstants.REFRESH_PARENT );    
    if ( DCheckIf.isNull( REFRESH_PARENT )) REFRESH_PARENT = "FALSE" ;    
      
    String REFRESH_SELF = (String) request.getAttribute( DFWConstants.REFRESH_SELF );    
    if ( DCheckIf.isNull( REFRESH_SELF )) REFRESH_SELF = (String) request.getParameter( DFWConstants.REFRESH_SELF );    
    if ( DCheckIf.isNull( REFRESH_SELF )) REFRESH_SELF = "FALSE" ;     
%>
 
<HTML>
<script language="javascript">
String.prototype.simpleReplace = function(oldStr, newStr) {
	var rStr = oldStr;

	rStr = rStr.replace(/\\/g, "\\\\");
	rStr = rStr.replace(/\^/g, "\\^");
	rStr = rStr.replace(/\$/g, "\\$");
	rStr = rStr.replace(/\*/g, "\\*");
	rStr = rStr.replace(/\+/g, "\\+");
	rStr = rStr.replace(/\?/g, "\\?");
	rStr = rStr.replace(/\./g, "\\.");
	rStr = rStr.replace(/\(/g, "\\(");
	rStr = rStr.replace(/\)/g, "\\)");
	rStr = rStr.replace(/\|/g, "\\|");
	rStr = rStr.replace(/\,/g, "\\,");
	rStr = rStr.replace(/\{/g, "\\{");
	rStr = rStr.replace(/\}/g, "\\}");
	rStr = rStr.replace(/\[/g, "\\[");
	rStr = rStr.replace(/\]/g, "\\]");
	rStr = rStr.replace(/\-/g, "\\-");

  	var re = new RegExp(rStr, "g");
    return this.replace(re, newStr);
}

function showAlert( msg ) { 
    var msgCodePlusMain =  msg ;
     // 메시지 코드 8 자리 + delim + 메인
    var msgCode = msgCodePlusMain.substring( 0, 8 ) ;
    var msgMain = msgCodePlusMain.substring( 9 ) ;
    var msgMesursItmInx  = msgMain.indexOf( "■" ) ;
    var msgMesursItm = "" ;
    if ( msgMesursItmInx != -1 ) {
    	msgMesursItm = msgMain.substring( msgMesursItmInx + 1) ; 	 ;
    	msgMain = msgMain.substring( 0 , msgMesursItmInx ) ;
    }

  var msgErrorForm = "" ;
  var msgMainMultiLine =  msgMain.simpleReplace("<br>","\n                 ");

  msgErrorForm += "메시지코드 : "+msgCode+"\n" ;
  msgErrorForm += "메시지내용 : "+msgMainMultiLine+"\n" ;
  if ( msgMesursItm != "" )  {
  	  var msgMesursItmMultiLine =  msgMesursItm.simpleReplace("<br>","\n                  ");
  	  msgErrorForm += "조 치 사 항 : "+msgMesursItmMultiLine ;
   }
  alert(msgErrorForm);
}
function jsInit() {    

  if  ( top.opener == null ) {     
     document.all.buttonClose.style.display = "none";       
     document.all.buttonBack.style.display = "";
   } else {     
     document.all.buttonClose.style.display = "";       
     document.all.buttonBack.style.display = "none";
   }
   
<% if ( !ALERT_MESSAGE.equals("FALSE") ) {  %>
    alert('<%=message.replaceAll("\"","'")%>');    
<% } else if ( ACTION_TYPE.equals( DFWConstants.MESSAGE_ERROR ) ) { %>    
    showAlert('<%=message.replaceAll("\"","'")%>'); 
<% } %>    

<% if ( !REFRESH_SELF.equals("FALSE") ) {  %>
    location.href = '<%=FORWARD_PAGE%>';
<% } %>    
<% if ( !REFRESH_PARENT.equals("FALSE") ) {  %>
    parent.location.href = '<%=FORWARD_PAGE%>';
<% } %>   
}
</script>
<body bgcolor="#FFFFFF" text="#000000" leftmargin="5" topmargin="5" onload="javascript:jsInit()">
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
 
 
 
 
 
 
 
 
 
 
 
 
