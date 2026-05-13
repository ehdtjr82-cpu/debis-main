<%@ page contentType="text/html;charset=utf-8" %> 

<html>
<head>
<META HTTP-EQUIV="Content-Type" content="text/html; charset=utf-8">
<script language='JavaScript'>
 function jsCallViewer() { 
   var formObj = document.postForm ;
   paramList.innerHTML = parent.cfGetOzViewerParam() ;  
   formObj.action = parent.cfGetOzViewerAction() ;     
   formObj.submit() 
 } 
 </script> 
 </head> 
 <body onload="jsCallViewer()" >
<form name="postForm" target="_self" method="post">
 <div id="paramList"> 
 </div>
</form>
</body>
</html>