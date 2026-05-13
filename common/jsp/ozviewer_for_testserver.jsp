<%@ page import="java.io.*,java.text.*,dbl.cm.fw.constants.*,dbl.cm.fw.util.*,dbl.cm.fw.log.*,java.util.*,dbl.cm.bc.comnmgnt.usermgnt.dto.*,dbl.cm.bc.comnmgnt.usermgnt.util.*" contentType="text/html;charset=MS949" %> 
<%! 


  private static String PARAM_STR_ODIArgsName ="on";
  private static String PARAM_STR_ODIArgsValue ="ov";
  private static String PARAM_STR_odinames ="odin";
  private static String PARAM_STR_FormArgsName ="fn";
  private static String PARAM_STR_FormArgsValue ="fv";
  private static String PARAM_STR_appendParamName="an";
  private static String PARAM_STR_appendParamValue ="av"; 

  private String[] reportFormArgsName = new String[] { "pgmId","userId","userNm","reportDate","reportTime" } ;
  private static SimpleDateFormat dateFormat = new SimpleDateFormat( "yyyy/MM/dd HH:mm", java.util.Locale.KOREA );
 
  private String[] getMergedArray( String[] first , String[] second ) throws Exception {
    String[] mergedArray = new String[first.length+second.length];
    System.arraycopy(first,0,mergedArray,0,first.length);
    System.arraycopy(second,0,mergedArray,first.length,second.length);
    return mergedArray ; 
  }

  private String[] getArgumentNameArray( HttpServletRequest request ) throws Exception { 
    String[] argsName = (String[])request.getParameterValues(PARAM_STR_FormArgsName);  
    if ( argsName == null ) {
        return reportFormArgsName ;
    } else {  
       return getMergedArray (argsName,reportFormArgsName) ; 
    }   
  }
 
  private String[] getArgumentValueArray( HttpServletRequest request , String[] commonArgsValue ) throws Exception { 
       
      String[] argsValue =(String[])request.getParameterValues(PARAM_STR_FormArgsValue);   
      if ( argsValue == null ) {
          return commonArgsValue ;
      } else {  
         return getMergedArray (argsValue,commonArgsValue) ; 
      }   
    }   
  
  private String[] getODINames(HttpServletRequest request ) throws Exception { 
      String[] odiNamesArray = request.getParameterValues(PARAM_STR_odinames);
      if ( odiNamesArray != null ) {  
          for ( int i = 0 , size = odiNamesArray.length ; i < size ; i++ ) {
              String upper_odinames = odiNamesArray[i].toUpperCase();
              int odi_position = upper_odinames.indexOf(".ODI") ; 
              if ( odi_position != -1 ) odiNamesArray[i] = odiNamesArray[i].substring(0,odi_position);
          } 
          return odiNamesArray ; 
      } else { 
          return new String[0];
      }

  }
  
  private String getCommaDelimFormat(String[] odiNamesArray)  throws Exception { 
      String commaDelimFormat ="";
      if ( odiNamesArray == null || odiNamesArray.length < 1  ) return commaDelimFormat ;
      for ( int i = 0 , size = odiNamesArray.length ; i < size ; i++ ) {
          commaDelimFormat+= ","+ odiNamesArray[i] ; 
      }
      return commaDelimFormat.substring(1);
  }
%>
<%  
 try { 
	//request.setCharacterEncoding("utf-8");
    String width = (String)request.getParameter("width" ) ;
    width = width == null ? "0" : width ;
    String height = (String)request.getParameter("height")  ;
    height = height == null ? "0" : width ;
    
	String MODE = (String)request.getParameter("MODE");
	String viewername = (String)request.getParameter("viewername");   
	viewername = viewername == null ?  "ozviewer" :  viewername ; 

	String isframeValue = (String)request.getParameter("isframeValue");   
	isframeValue = isframeValue == null ?  "true" :  "false" ; 

	
    String reportname = request.getParameter("reportname");
    if (  reportname != null ) {
        String upper_reportname = reportname.toUpperCase();
        if ( upper_reportname.indexOf(".OZR") == -1 ) reportname += ".ozr";
    }
    
	String[] odinamesArray = getODINames(request); 
    String commaDelimFormat =  getCommaDelimFormat ( odinamesArray ) ;
       
	String[] formArgsName = getArgumentNameArray(request); 
	
	String[] commonArgsValue = new String[reportFormArgsName.length];
	commonArgsValue[0] = request.getParameter("PGM_ID");
    LoginDTO loginDTO = LoginUtil.getLoginDTO(request);
    commonArgsValue[1] = loginDTO.getUserId();	
    commonArgsValue[2] = loginDTO.getUserNm();	
    commonArgsValue[3] = DDate.getDate("/");
	GregorianCalendar calendar = new GregorianCalendar();    
	commonArgsValue[4] = dateFormat.format(calendar.getTime());
	
	String[] formArgsValue = getArgumentValueArray(request,commonArgsValue);   
	
	System.out.println ( Arrays.asList(formArgsName) ) ;
	System.out.println ( Arrays.asList(formArgsValue) ) ;
	
	String[] appendParamName = (String[])request.getParameterValues(PARAM_STR_appendParamName);
	String[] appendParamValue = (String[])request.getParameterValues(PARAM_STR_appendParamValue);	
	
%>
<html> 
 <head> 
  <script language="javascript" >
     var OZ_MODE = '<%=MODE%>' ;
     var OZ_REPORT_NAME  = '<%=reportname%>';
     var OZ_ODI_NAME  = '<%=commaDelimFormat%>';  
  </script>
  <script language="javascript" for="<%=viewername%>" event="OZCommand(code,args)">      
     parent.OZExecuteNextBatchProcess(); 
  </script>
  <script language="javascript" for="<%=viewername%>" event="OZExportCommand(code,path,filename)">      
     <% if ( DFWConstants.FILE_TRANSFER_LOG_TO_DBMS_OK ) { %>
     parent.cfExcelDownloadLogToDBMS(OZ_REPORT_NAME+"/"+OZ_ODI_NAME+"/"+filename);
     <% } %>   
  </script>

  <script language="javascript" for="<%=viewername%>" event="OZPrintCommand(msg,code,reportname,printname,printcopy,printedpage,printrange,username)">
    <% if ( DFWConstants.FILE_TRANSFER_LOG_TO_DBMS_OK ) { %>
     parent.cfReportPrintLogToDBMS(OZ_REPORT_NAME+"/"+OZ_ODI_NAME);     
    <% } %>      
  </script>  
  <script language="javascript" for="<%=viewername%>" event="OZErrorCommand(code,message,detailmessage)">
     // 오류로그를 남기고 싶을 경우 이 부분을  작성한다. 
  </script>   
  </head> 
<% if ( MODE.equals("EMBEDVIEW") ) { %>  
<body>
<% } else { %>
<body onLoad="txt_dummy.focus()"> 
<input type='text' id='txt_dummy'>
<% } %>

<%
   String SERVER_IP_PORT = "" ;
      
   String remoteIP = (String) request.getHeader("WL-Proxy-Client-IP");  
   if ( DCheckIf.isNull(remoteIP)) { 
       remoteIP = (String)request.getRemoteAddr();            
   }
   
   String HOST_NAME_ONLY = request.getHeader ( "Host" ) ;
   int port_inx = HOST_NAME_ONLY.indexOf ( ":" ) ;
   if ( port_inx != -1 ) HOST_NAME_ONLY =  HOST_NAME_ONLY.substring( 0 , port_inx ) ; 
   
   // Local 일경우 .. 개발/운영서버의 경우는 없어도 된다.  
   if ( HOST_NAME_ONLY.indexOf ( "192.168" ) != -1 || HOST_NAME_ONLY.indexOf ( "127.0.0.1" ) != -1  || HOST_NAME_ONLY.indexOf ( "localhost" ) != -1  ) SERVER_IP_PORT =  "http://172.21.1.4:7001" ;       
   
   // 테스트 client ip 인경우에 test IP 로 변경            
   if ( remoteIP.indexOf ( "10.9.137" ) != -1  ) SERVER_IP_PORT =  "http://210.127.48.4:7001" ;    
    
%>
<OBJECT width = "0" height = "0" ID="ZTransferX" CLASSID="<%=DOZConstants.ZTransferX_CLSID%>" 
	codebase="<%=SERVER_IP_PORT+DOZConstants.ZTransferX_CODEBASE%>">
	<PARAM NAME="download.Server" VALUE="<%=SERVER_IP_PORT+DOZConstants.ZTransferX_DOWNLOAD_SERVER%>">
	<PARAM NAME="download.Port" VALUE="<%=DOZConstants.ZTransferX_DOWNLOAD_PORT%>">
	<PARAM NAME="download.Instruction" VALUE="<%=DOZConstants.ZTransferX_DOWNLOAD_INSTRUCTION%>">
	<PARAM NAME="install.Base" VALUE="<%=DOZConstants.ZTransferX_INSTALL_BASE%>">
	<PARAM NAME="install.Namespace" VALUE="<%=DOZConstants.ZTransferX_INSTALL_NAMESPACE%>">
</OBJECT>
<%    
  
   // Local 일경우 .. 개발/운영서버의 경우는 없어도 된다.  
   if ( HOST_NAME_ONLY.indexOf ( "192.168" ) != -1 || HOST_NAME_ONLY.indexOf ( "127.0.0.1" ) != -1  || HOST_NAME_ONLY.indexOf ( "localhost" ) != -1  ) HOST_NAME_ONLY =  "172.21.1.4" ;       
   
   // 테스트 client ip 인경우에 test IP 로 변경            
   if ( remoteIP.indexOf ( "10.9.137" ) != -1  ) HOST_NAME_ONLY =  "210.127.48.4" ;    
    
   String OZ_SERVLET = "http://"+ HOST_NAME_ONLY + DOZConstants.CONNECTION_SERVER ;
  
%>
<OBJECT id="<%=viewername%>" CLASSID="<%=DOZConstants.VIEWER_CLSID%>" width="<%=width%>" height="<%=height%>">
   <!--
   <param name="connection.server" value="<%=DOZConstants.CONNECTION_SERVER%>">
   <param name="connection.port" value="<%=DOZConstants.CONNECTION_PORT%>">
   -->
   <param name="connection.servlet" value="<%=DOZConstants.CONNECTION_SERVLET%>">
   <param name="viewer.smartframesize" value="true"> 
   <param name="viewer.isframe" value="<%=isframeValue%>">
   <param name="viewer.exportcommand" value="true"> 
   <param name="viewer.printcommand" value="true"> 
   <param name="viewer.errorcommand" value="true">    
   <param NAME="viewer.namespace" VALUE="<%=DOZConstants.ZTransferX_INSTALL_NAMESPACE%>">
   <param name="connection.reportname" value="<%=reportname%>">
   <param name="connection.pcount" value="<%=formArgsName.length%>">
   <%  for (int i = 0 , size = formArgsName.length; i<size; i++) { %>
   <param name="connection.args<%=(i+1)%>" value="<%=formArgsName[i]%>=<%=formArgsValue[i]%>">   
   <% } %>  
   <% if ( appendParamName != null && appendParamValue != null ) {       
	      for (int i = 0,size=appendParamName.length;i < size;i++) { %>
		  <param name="<%=appendParamName[i]%>" value="<%=appendParamValue[i]%>">
	   <% } %>   
   <% } %>    
   <param name="odi.odinames" value="<%=commaDelimFormat%>">
   <% 
   for (int inx = 0 , size = odinamesArray.length ; inx<size; inx++ ) { 
 	  String each_odinames = odinamesArray[inx] ;       
 	  String[] odiArgsName = (String[])request.getParameterValues(each_odinames+"."+PARAM_STR_ODIArgsName);    
      String[] odiArgsValue = (String[])request.getParameterValues(each_odinames+"."+PARAM_STR_ODIArgsValue);              
      int each_pcount = odiArgsName == null ? 0 : odiArgsName.length;
      if ( each_pcount > 0 ) {
   %>   
      <param name="odi.<%=each_odinames%>.pcount" value="<%=each_pcount%>">         
	   <% for (int i = 0;i < each_pcount; i++) { 	%>
		  <param name="odi.<%=each_odinames%>.args<%=(i+1)%>" value="<%=odiArgsName[i]%>=<%=odiArgsValue[i]%>">
	   <% } %>      
   <% } %> 
<% } %>        
<% } catch ( Exception e ) { 
     DFWLog.error(e);
     StringWriter s = new StringWriter();
     e.printStackTrace(new PrintWriter(s));
     e.printStackTrace();
%> 
   <%=s.toString()%> 
<% } %> 
</OBJECT>  
</body>
</html>