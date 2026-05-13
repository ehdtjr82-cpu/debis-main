<%@ page import="dbl.cm.fw.ibatis.*,java.util.*,java.text.*"  contentType="text/html;charset=utf-8" %>
<html>
<head>
<script language="JavaScript">
 function jsShow( nextInx , errorlogKey ) { 
   var formObj = document.bodyForm; 
   
    errorContents.innerText= document.all[errorlogKey].value;
    
    
    currentSelect.innerHTML="["+nextInx+"] "+errorlogKey+" " + "<input type=button style='height:20px' value='한개만 RELOAD' onclick=javascript:jsReload('"+errorlogKey+"')>" + "---<input type=button style='height:20px' value='전체 RELOAD' onclick=javascript:jsReloadAll()>";;
 }
 
 function jsReload( resourceFile ) { 
    var refreshURL = "/common/jsp/sqlmap_reload.jsp"+"?refreshMode=TARGET_ONLY&resourceFile="+resourceFile ;
    var returnVar = showModalDialog( refreshURL ,window , "dialogWidth:600px;dialogHeight:60px") ;
        location.reload();
 }
 
  function jsReloadAll() { 
    var refreshURL = "/common/jsp/sqlmap_reload.jsp"+"?refreshMode=ALL" ;
    var returnVar = showModalDialog( refreshURL ,window, "dialogWidth:600px;dialogHeight:50px") ;
    location.reload();
 }
</script>
<title>IBATIS-SQLMAP정보</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body bgcolor="#FFFFFF" text="#000000" >
<%! 
  private DecimalFormat form =  new DecimalFormat("000");

  private String getNumIndex( int nextVal ) { 
     return       form.format(nextVal); 
  }

%>
<%
 
  HashMap errorMap = DSqlMapCache.getInstance().getErrorMap();  
  Iterator iter = errorMap.entrySet().iterator();

%>
<form name="bodyForm" > 
<div id=errorXML  style="overflow:auto ; position:absolute; left: 5px; top: 5px; height:170px;width:990px; padding:1;background-color:#CFCFCF; border:1 solid blue">
<%  

  int index = 0 ;
  while (iter.hasNext()) {
      Map.Entry entry = (Map.Entry) iter.next();
      String entryKey = (String)entry.getKey();
      String entryVal = (String)entry.getValue();
      String nextInx = getNumIndex(++index);
%> 
      [<%=nextInx%>] <a href="javascript:jsShow('<%=nextInx%>','<%=entryKey%>');"><strong><%=entryKey%></strong></a><br>
      <input type="hidden" value="<%=entryVal%>"name='<%=entryKey%>'"> 
<% } %> 
</div>
<div id=currentSelect  style="overflow:none ; position:absolute; left: 5px; top: 170px;  height:20px;width:990px; padding:1;  background-color:yellow; border:1 solid blue">

</div> 
<div id=errorContents  style="overflow:auto ; position:absolute; left: 5px; top: 190px;  height:450px;width:990px; padding:1; color:white;background-color:black; border:1 solid blue">

</div> 
 
</form>
</body>
 
</html>