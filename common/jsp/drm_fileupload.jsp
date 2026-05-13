<%@ page import="dbl.cm.fw.constants.*,dbl.cm.fw.dto.*,java.util.*" contentType="text/html;charset=utf-8" %> 
<%@ page import="dbl.cm.fw.util.drm.DFileDrm" %>
<script language="JavaScript">
<%
	try { 
		String CALL_BACK_FUNCTION_NAME = request.getParameter( "CALL_BACK_FUNCTION_NAME" );   
		DFileDrm fileDrm = new DFileDrm();
%>
	parent.cfInitUploadDataSet(  ) ;
<%
		Object fileUpExceptionObj =  request.getAttribute( DFWConstants.FILE_UPLOAD_ERROR );

		if ( fileUpExceptionObj != null ) {
			Exception fileUpException = (Exception)fileUpExceptionObj ;
			fileUpException.printStackTrace();
			String exceptionMessage = fileUpException.getMessage();
%> 
	alert( '<%=exceptionMessage%>');
<%
	} else {
		DMapDTO resultMap  = (DMapDTO)request.getAttribute( DFWConstants.FILE_UPLOAD_RESULT   );
		
		Iterator iter = resultMap.values().iterator();
		while (iter.hasNext()) {
			DMapDTO detailInfo = (DMapDTO)iter.next();
			String fileId = detailInfo.getString("fileId");
			String fileName = detailInfo.getString("fileName");
			String filePath = detailInfo.getString("filePath");
			String fileSize = ""+ detailInfo.getLong("fileSize");
			
// 			System.out.println("====================drm_fileupload.jsp====================");
// 			System.out.println("fileName==========> " + fileName);
// 			System.out.println("filePath==========> " + filePath);
// 			System.out.println("====================drm_fileupload.jsp====================");
			
			fileDrm.decryptFile(filePath);
%>
			var filePath = '<%=filePath%>';
			var fileName = filePath.split("/");
			var fileURL = "";
			if (document.domain != "localhost") {
// 				fileURL = "http://" + document.domain + "/common/csv/uploadTemp/"  + fileName[fileName.length-1];
				fileURL = "/common/csv/uploadTemp/"  + fileName[fileName.length-1];
			}else {
				fileURL = filePath;
			}
			//cfAddUploadDataSet(fileId , fileName, filePath , fileSize )
			parent.cfAddUploadDataSet( '<%=fileId%>' ,  '<%=fileName%>' , fileURL , '<%=fileSize%>' ) ;
<%
		}
	}
%>
	parent.<%=CALL_BACK_FUNCTION_NAME%>();
<% 
	String[] INIT_ITEM_LIST_FUNCTION_ARRAY = request.getParameterValues( "INIT_ITEM_LIST_FUNCTION" );
	if ( INIT_ITEM_LIST_FUNCTION_ARRAY != null )  {  
		for ( int inx = 0 , size = INIT_ITEM_LIST_FUNCTION_ARRAY.length ; inx < size ; inx ++ ) { 
%>
	parent.<%=INIT_ITEM_LIST_FUNCTION_ARRAY[inx]%>();
<%
		}
	}
	} catch ( Throwable e  ) {
		e.printStackTrace();
	}
%>

</script>