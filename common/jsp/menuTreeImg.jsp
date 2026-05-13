<%@ page import="java.io.*,java.util.*,java.text.*,com.gauce.*,com.gauce.io.*,com.gauce.log.*,com.gauce.common.*"%><%

    ServiceLoader loader = new ServiceLoader(request, response);
    GauceService service = loader.newService();
    
    File fImage1                 = null;
    File fImage2                 = null;
    File fImage3                 = null;
    FileInputStream isImage1     = null;
    FileInputStream isImage2     = null;
    FileInputStream isImage3     = null;
    
    try {
        response.setContentType("application/octet-stream;charset=ISO-8859-1");
        GauceResponse res = service.getGauceResponse();
        GauceDataSet dSet = new GauceDataSet();
        res.enableFirstRow(dSet);
        dSet.addDataColumn(new GauceDataColumn("Tb_img",GauceDataColumn.TB_BLOB));
        dSet.addDataColumn(new GauceDataColumn("Tb_img_id",GauceDataColumn.TB_STRING));
		dSet.addDataColumn(new GauceDataColumn("Tb_img_size",GauceDataColumn.TB_INT));
				
		try {
    		String dir = application.getRealPath("/common/images") + "/";

			//closed folder ???
    		fImage1 = new File(dir + "icon_close.ico");
    		isImage1 = new FileInputStream(fImage1);

			//open folder ???
    		fImage2 = new File(dir + "icon_open.ico");
    		isImage2 = new FileInputStream(fImage2);
    		
			//page ???
			fImage3 = new File(dir + "icon_page.ico");
    		isImage3 = new FileInputStream(fImage3);

	    } catch (Exception fe) {
	        fe.printStackTrace();
	    }
	    
		GauceDataRow row1 = dSet.newDataRow();

		row1.addColumnValue(isImage1);
		row1.addColumnValue("imgClose");
		row1.addColumnValue(fImage1.length());
		dSet.addDataRow(row1);
	    
		GauceDataRow row2 = dSet.newDataRow();
		row2.addColumnValue(isImage2);
		row2.addColumnValue("imgOpen");
		row2.addColumnValue(fImage2.length());
		dSet.addDataRow(row2);

	    
		GauceDataRow row3 = dSet.newDataRow();
		row3.addColumnValue(isImage3);
		row3.addColumnValue("imgPage");
		row3.addColumnValue(fImage3.length());
		dSet.addDataRow(row3);

        dSet.flush();
        res.flush();
        res.commit();
        res.close();
        
    } catch (Exception e) {
        e.printStackTrace();
    } finally {
        try {
            isImage1.close();
			isImage2.close();
			isImage3.close();
            loader.restoreService(service);
        } catch(Exception e) {
            e.printStackTrace();        
        }
    }
%>