<%@ page contentType="text/html;charset=utf-8" %> 
<%@ page import="java.io.*" %>
<%@ page import="java.util.*" %>
 <html>
 <head>
 <style>
 .button   { height:19px; border-width:1; border-style:ridge; border-color:#d0d0d0; background-color:#dfdfdf;cursor:hand;}  
 .tdSearch {  font-family: "굴림체", "굴림"; font-size: 11pt; text-decoration: none;}
 .tdSearch1 {  font-size: 10pt; font-weight: bold; background-color: #DBE2F5; text-align: left; color:black; border:1 solid black}
 .tdSearch2 {  font-size: 10pt; font-weight: bold; background-color: #DBE2F5; text-align: right; color:black; border:1 solid black}
 </style>
 <script language="JavaScript">
 function jsShow( nextInx , errorlogKey ) { 
   var formObj = document.bodyForm;      
   formObj.target = document.frames["logframe"].name ;
   formObj.submit();
 } 
 function jsChange() { 
   var formObj = document.bodyForm;     
   formObj.tail_file.value = formObj.fileSelect.options[ formObj.fileSelect.selectedIndex ].value;  
 }  
</script>
</head>
 <form name="bodyForm" method="post" action="/common/jsp/logtail_main.jsp"> 	
 <body onload="jsChange()">
 <table width="100%">
  <tr>
  <td class="tdSearch" width="50">
    <select name="fileSelect" onChange="jsChange()"  >
     <option value="/logs/weblogic/admin/admin.out">개발_전체로그
     <option value="/logs/weblogic/dbexp1/dbexp1.out">1_7001전체로그
     <option value="/logs/weblogic/dbexp2/dbexp2.out">1_8001전체로그
     <option value="/logs/weblogic/dbexp3/dbexp3.out">2_7001전체로그
     <option value="/logs/weblogic/dbexp4/dbexp4.out">2_8001전체로그         
     <option value="/logs/applog/bizlog/biz_output.log">비즈니스 로그
     <option value="/logs/applog/fwlog/fw_output.log">프레임웍 로그
     <option value="/logs/applog/tracelog/trace_output.log">트레이스 로그     	
     <option value="/logs/applog/tracelog/sql_output.log">SQL 로그               
    </select>
  </td>  
  <td class="tdSearch">
    <input type="text" class="tdSearch1" name="tail_file" size="40" value=""> 에서 
    최근 <input type=text value='200'  class="tdSearch2" name="tail_line" size="5" maxlength="5" > 라인을
    <input type=button  value='보여주세요' class="button" onclick="javascript:jsShow()">     
  </td> 
  </tr>
  </table>
    <iframe name="logframe" src="" width="970" height="560" frameBorder="no" ></iframe>
 
 </form>
 </html>
 
 
 
