<%@ page import="dbl.cm.bc.comnmgnt.usermgnt.util.*,dbl.cm.bc.comnmgnt.usermgnt.dto.*" contentType="text/html;charset=utf-8" pageEncoding="KSC5601"%>  
<% 
  String loginStatus = "TRUE" ;
  boolean statusBool = true ; 
		//System.out.println("session:"+session);
		// 세션이 새로 할당 된 경우
		if (session.isNew()) {
		   // System.out.println("isNew:"+session.isNew());
		  statusBool =  false ;
		} else  {
		     Object loginObj = session.getAttribute( dbl.cm.fw.constants.DFWConstants.LOGIN_INFO );
		    //System.out.println("loginDTO:"+loginDTO);
		    if ( loginObj != null ) { 
		        statusBool =  true ; 
		    } else { 
		        statusBool =  false ;      
		    }
		}

  if ( !statusBool) loginStatus = "FALSE" ;
%>
<input type="hidden" name="loginStatus" value="<%=loginStatus%>">
 