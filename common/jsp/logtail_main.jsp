<%@ page contentType="text/html;charset=utf-8" %> 
<%@ page import="java.io.*" %>
<%@ page import="java.util.*" %>
 <html>
 <head>
 <style>
 .button   { height:21px; border-width:1; border-style:ridge; border-color:#d0d0d0; background-color:yellow;cursor:hand;} 
 .tdSearch {  font-family: "굴림체", "굴림"; font-size: 11pt; text-decoration: none;}
 .tdBody {  font-family: "굴림체", "굴림"; font-size: 11pt; color:#DCDCDC ; text-decoration: none;}
 .text { color:#464646;border:1 solid black;cursor:text;}  
 </style> 
<script language="JavaScript">   
  
  var CURRENT_SELECT_INX = -1 ;
  var CURRENT_SELECT_INX_COL = -1;
  var CURRENT_SELECT_INNERHTML = "" ;  
  var CURRENT_SELECT_INNERHTML_FOUND = "" ; 
  var CURRENT_SELECT_SEARCH = "" ;
  
  var AUTO_SEARCH_MODE= true; 
  
  function jsFocus() {          
    var totalSize =  logTable.rows.length  ;       
    logTable.rows[totalSize-1].cells[0].focus() ;           
     document.getElementById("speedSearch").focus();     
  }

  function jsClear( searchStr ) {     
    if ( searchStr == ''  ) { 
      restoreCurrentSelect();
      return true ; 
    } else {
      return false ; 
    }
  }
    
  function restoreCurrentSelect() {     
    if ( CURRENT_SELECT_INX != -1 ) {
      logTable.rows[CURRENT_SELECT_INX].cells[1].innerHTML = CURRENT_SELECT_INNERHTML ;            
    }  
  }  

  function restoreCurrentFoundSelect() { 
     if ( CURRENT_SELECT_INX != -1 ) {
       logTable.rows[CURRENT_SELECT_INX].cells[1].innerHTML = CURRENT_SELECT_INNERHTML_FOUND ;       
     } 
  }       
  
  function saveCurrentSelect( rowInx, columnInx , innerHTMLStr , innerHTMLFoundStr , selectStr ) { 
    CURRENT_SELECT_INX = rowInx ;
    CURRENT_SELECT_INX_COL = columnInx ;
    CURRENT_SELECT_INNERHTML = innerHTMLStr ;
    CURRENT_SELECT_INNERHTML_FOUND = innerHTMLFoundStr ; 
    CURRENT_SELECT_SEARCH = selectStr ;  
  }
  
  
  function matchReplace( rowInx , columnInx ,  searchStrParam , targetTD ) {   
    var searchStr = searchStrParam.toUpperCase();   
    var targetStrParam =targetTD.innerHTML; 
    var targetStr = targetStrParam.toUpperCase();    
    var targetStrPart = "" ;
    
    if ( rowInx == CURRENT_SELECT_INX ) startInx =  targetStr.indexOf( searchStr , columnInx )  ; 
    else startInx =  targetStr.indexOf( searchStr  )  ;   
    if (  startInx == -1 ) return false ;  
    
    var endInx = startInx + searchStrParam.length ;
    
    var head = targetStrParam.substring( 0 , startInx ) ;
    var tail = targetStrParam.substring( endInx ) ;
    var middle = targetStrParam.substring( startInx ,  endInx ) ;
  
    
    var replace = "<input type=button name=seachFound value='"+ middle + "' class='button' >" ;
    
    targetTD.innerHTML =  head + replace +tail ;   
    saveCurrentSelect( rowInx  , endInx , targetStrParam , targetTD.innerHTML , searchStrParam  );
    
    document.getElementById("seachFound").focus(); 
    document.getElementById("speedSearch").focus();  
    return true ;      
  }
  
  function jsAutoSearch( ) {
     if ( AUTO_SEARCH_MODE ) jsSearch(0,false);
  }
  function jsSearch( searchStart , FORCE_SEARCH ) {   
         
     var searchStr =  document.getElementById("speedSearch").value;
     if (jsClear(searchStr)) return ; 
     if ( !FORCE_SEARCH && searchStr == CURRENT_SELECT_SEARCH ) return ; 
     restoreCurrentSelect( );    
     
     var totalSize =  logTable.rows.length  ;       
      
     for ( var inx = searchStart  ; inx < totalSize ; inx++ ) { 
       var eachTd = logTable.rows[inx].cells[1] ; 
       if ( matchReplace(  inx , 0  , searchStr , eachTd ) ) break ;       
     }     
  }
  
  
  function jsSearchNext () {    
     jsSearchForward ( CURRENT_SELECT_INX , CURRENT_SELECT_INX_COL  ) ;
  }
   
  function jsSearchForward( searchStart , searchStartCol ) {        
     var searchStr =  document.getElementById("speedSearch").value;
     if (jsClear(searchStr)) return ; 
     
     restoreCurrentSelect( );
     var totalSize =  logTable.rows.length  ;       
     var FOUND = false ;
     for ( var inx = searchStart  ; inx < totalSize ; inx++ ) { 
      
       var eachTd = logTable.rows[inx].cells[1] ;  
       FOUND = matchReplace(  inx , searchStartCol  , searchStr , eachTd )   ;  
       if ( FOUND )  break ;
     }    
     if ( !FOUND ) restoreCurrentFoundSelect( );
     
  }
      
  function jsSearchPrev () {   
     jsSearchBackward ( CURRENT_SELECT_INX , CURRENT_SELECT_INX_COL ) ;
  } 
    
  function jsSearchBackward( searchStart , searchStartCol ) {   
     
     var searchStr =  document.getElementById("speedSearch").value; 
     if (jsClear(searchStr)) return ;       
     restoreCurrentSelect( );
     var FOUND = false ;
     for ( var inx = searchStart  ; inx > 0 ; inx-- ) { 
       var eachTd = logTable.rows[inx].cells[1] ; 
       FOUND = matchReplace(   inx , searchStartCol  , searchStr , eachTd )   ;  
       if ( FOUND )  break ;
     }    
     if ( !FOUND ) restoreCurrentFoundSelect( );
  } 
  function jsChangeAutoSearch () {   
    AUTO_SEARCH_MODE = document.getElementById("autoSearch").checked ;
  } 
  
  function jsKeyProcess()
  { 
  
    if ( event.keyCode == 13 ) {  
           jsSearchNext();           
    } else if ( event.keyCode == 37 ) { 
       if (  event.ctrlLeft || event.ctrlKey  ) {  //  event.ctrlLeft  - winNT/2000  event.ctrlKey - win95/98
           jsSearchPrev(); 
       }
      
    } else if ( event.keyCode == 39) { 
       if (  event.ctrlLeft || event.ctrlKey  ) {  //  event.ctrlLeft  - winNT/2000  event.ctrlKey - win95/98
           jsSearchNext(); 
       }
      
    } else if (  event.keyCode == 38   ) { 
          jsSearchPrev();  
    } else if (  event.keyCode == 40   ) { 
          jsSearchNext();  
    } else {       
    
       jsAutoSearch();       
    }      
    event.returnValue = false ;   
  }
  
</script>
 </head>
<body  onload="javascript:jsFocus();">
<div id=currentSelect  style="overflow:none ; position:absolute; left: 0px; top: 0px;  height:30px;width:970px; padding:1;  background-color:#CFCFCF; border:1 solid black">
<table width="100%"  cellspacing=0 cellpadding=0 >
<tr>
<td width="50" class="tdSearch">순번</td> 
<td class="tdSearch">
<input type="checkbox" value="" name="autoSearch" checked onclick="jsChangeAutoSearch()">자동검색<input type="text"  class="text" size="30" value="" name="speedSearch" onkeyup="jsKeyProcess()">
<input type=button  value='검색' class="button" onclick="javascript:jsSearch(0,true)"> 
<input type=button  value='<< 이전' class="button" onclick="javascript:jsSearchPrev()"> 
<input type=button  value='다음 >>' class="button" onclick="javascript:jsSearchNext()"> 
</td>
</tr>
</table>
</div> 
<div id=errorContents  style="overflow:auto ; position:absolute; left: 0px; top: 30px;  height:530px;width:970px; padding:1; color:white;background-color:#464646; border:1 solid black"> 
<table id="logTable" width="100%" cellspacing=0 cellpadding=2 border="1"  borderColor=#CFCFCF style='table-layout:fixed' >
 <%
 InputStream tailResultInput = null;
 InputStreamReader tailResultInputReader = null;
 BufferedReader tailResultInputBufferedReader = null;
 try {
       String tail_line = (String)request.getParameter("tail_line");
       String tail_file = (String)request.getParameter("tail_file");        
       
       if ( tail_line == null ) tail_line = "200" ; 
       if ( tail_file == null ) tail_file = "/logs/weblogic/admin/admin.out" ; 
       
       String tailcmd = "tail -"+tail_line+"  " + tail_file ;   
       Runtime runtime = Runtime.getRuntime();
       Process process = runtime.exec(tailcmd);
       
       tailResultInput = process.getInputStream();
       tailResultInputReader = new InputStreamReader(tailResultInput);
       tailResultInputBufferedReader = new BufferedReader(tailResultInputReader);       
       String eachLine="";
       int lineNum = 0  ;
       while ((eachLine = tailResultInputBufferedReader.readLine()) != null) {           
%>          
<tr>
<td width="50" class="tdBody" style="background-color:black;color:yellow;text-align: right;" valign=top ><%=(++lineNum)%></td> 
<td class="tdBody"  ><%=eachLine%></td> 
</tr>
<%         
       }  
 }catch(Exception e ){
   e.printStackTrace();
 } finally { 
    if(  tailResultInputBufferedReader != null )  tailResultInputBufferedReader.close();
    if(  tailResultInputReader != null )  tailResultInputReader.close();
    if(  tailResultInput != null )  tailResultInput.close();      
 } 
 %>
 </table>
 </div>  
 </body>
 </html>
 
 
 


