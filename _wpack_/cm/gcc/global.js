/*amd /cm/gcc/global.xml 2864 176500f2aa5c72bbb829801e34f14bd617a5c33908ea9fbeb5316e4e5f17507b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMMON'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// Global 변수선언

scwin.onpageload = function ($p) {};
scwin.GLB_MONTH_IN_YEAR = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
scwin.GLB_SHORT_MONTH_IN_YEAR = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
scwin.GLB_DAY_IN_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
scwin.GLB_SHORT_DAY_IN_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
scwin.GLB_DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
scwin.GLB_URL_COMMON_PAGE = "/common/jsp/"; // common 디렉토리의 URL
scwin.GLB_REPORT_MAXPAGE = 50; // 출력가능한 최대 페이지 수

scwin.cvNew = false; //신규 입력을 위한 DataSet의 조회인지 flag
scwin.ctrlBtn = new Array(); // 화면의 속성에 objType 이 ctrlBtn 인 버튼을 배열로 가지고 있는다.
scwin.key = new Array(); // 
scwin.data = new Array(); // 

scwin.bCreate = null;
scwin.bUpdate = null;
scwin.bSave = null;
scwin.bDelete = null;
scwin.bCreate2 = null;
scwin.bUpdate2 = null;
scwin.bSave2 = null;
scwin.bDelete2 = null;

// 권한 관련 변수
scwin.CREATE_AUTH = "";
scwin.RETRIEVE_AUTH = "";
scwin.UPDATE_AUTH = "";
scwin.DELETE_AUTH = "";
scwin.PRINT_AUTH = "";
scwin.EXCEL_AUTH = "";
scwin.PGM_ID = "";
scwin.CALLER_URL = "";
scwin.DEPT_PRIV_YN = "";
scwin.START_ACCT_DEPT_CD = "";

/*
var GLB_PAGE_PARAMS         = new coMap();
var GLB_FRAME_MAIN          = top.MainFrame;
var GLB_FRAME_MAIN_MENU     = (top.MainFrame == null) ? null : top.MainFrame.MenuFrame;
var GLB_FRAME_MAIN_BODY     = (top.MainFrame == null) ? null : top.MainFrame.BodyFrame;
var GLB_FRAME_SUB_BODY      = (GLB_FRAME_MAIN_BODY == null) ? null : GLB_FRAME_MAIN_BODY.SubBodyFrame;
var GLB_FRAME_MAIN_TAIL     = (top.MainFrame == null) ? null : top.MainFrame.TailFrame;
var GLB_FRAME_MAIN_NAVI     = (top.MainFrame == null) ? null : top.MainFrame.NaviFrame;
var GLB_FRAME_HIDDEN        = top.HiddenFrame;
var GLB_CALENDAR            = new Object();
*/
scwin.MANDATORY_BGCOLOR = "#FFFF99";
scwin.ENABLE_BGCOLOR = "#FFFFFF";
scwin.DISABLE_BGCOLOR = "#F3F3F3";
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'}}]}]})