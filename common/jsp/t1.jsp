<%@ page  import="dbl.cm.fw.util.*" contentType="text/html;charset=utf-8" %> 
<% 
  out.println(DDate.getNextDateSkipLastHoliday( "20060313", -2 , true ));
  java.text.SimpleDateFormat dateFormat 	= new java.text.SimpleDateFormat( "yyyyMMdd", java.util.Locale.KOREA );
  java.util.Calendar cal = DDate.toCalendar("20060312");
  while (DDate.isHoliday( "20060312", true)) {
       cal.add(Calendar.DATE, -1);
       System.out.println( dateFormat.format(cal.getTime()) ) ; 			
  }			
			
  
  
   	out.println( dateFormat.format(cal.getTime()) ) ; 		
			
%>
