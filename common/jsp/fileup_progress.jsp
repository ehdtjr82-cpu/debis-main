<%@ page contentType="text/html;charset=utf-8" %> 
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<style>
	.msg
	{
		font-size:9pt;
		font-family:굴림;
		color:#25407B;
	}
	
	.neon
	{
		font-size:9pt;
		font-family:굴림;
	} 

 
	
</style>
<script language="javascript" src="/common/script/common.js"></script>
<script language="JavaScript">       
        
	var message="■■■■■■■■■■■■■■■■■■■■■■"
	var neonbasecolor="#4264AD"
	var neontextcolor="#529CFF"
	var flashspeed=200
	var n=0
	
	function neon(){
		if (n==0){
			for (m=0;m<message.length;m++)
				tempref[m].style.color=neonbasecolor
		}
		
		tempref[n].style.color=neontextcolor
		
		if (n<tempref.length-1)
			n++
		else{
			n=0
			clearInterval(flashing)
			setTimeout("beginneon()",500)
			return
		}
	}
	
	function beginneon(){
		if (document.all)
		flashing=setInterval("neon()",flashspeed)
	}
	
	

	var openerWindow = window.dialogArguments; 
	
	function checkComplete() { 
	   if ( !openerWindow.isUploadComplete() ) { 
	      //alert( "다시 ~~");   	   
	   	      window.setTimeout( "checkComplete()", 1000 ) ;
	   } else { 
	     window.close();
	   }
	}
	function jsForward() {  
	
       checkComplete();
      // var frameName = document.frames("fileUploadFrame").name;    
	  // var fileUpWindow = window.open( "","fileUploadFrame","top=10,left=10,width=50,height=50,menubar=no,status=no,titlebar=no" );	   	            
	  // var fileUpWindow = window.open( "", "XXX" ,"top=10,left=10,width=50,height=50,menubar=no,status=no,titlebar=no" );	   	            
       //openerMultipartForm.action  = "/DFileUpload"; 
	  // openerMultipartForm.method = "post";
	  // openerMultipartForm.target = fileUpWindow.name  ; //  fileUpWindow ; 
	  // openerMultipartForm.submit();
	}  
 
  
</script>          
</head>          
<body onload="jsForward();">          
 <span class="msg">파일 업로드 중 입니다. 잠시만 기다려 주십시오.</span><br>	 		
	<script>			
			                
 
			if (document.all) {
				document.write('<font color="'+neonbasecolor+'">');
				
				for (m=0;m<message.length;m++) {
					document.write('<span class="neon" id="neonlight">'+message.charAt(m)+'</span>');
				}
				
				document.write('</font>');
				
				var tempref = document.all.neonlight;
			} else {
				document.write(message);
			}
			
			beginneon();
	</script>		
	<br> 
     
  
</body>                    
</html>