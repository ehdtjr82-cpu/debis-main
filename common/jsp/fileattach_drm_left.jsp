<%@ page contentType="text/html;charset=utf-8" %> 
<% 
   String DYNAMIC_FILE = request.getParameter( "DYNAMIC_FILE" );   
   String DUMMY = "_"+System.currentTimeMillis();
   if ( DYNAMIC_FILE == null || DYNAMIC_FILE.equals("") )  DYNAMIC_FILE = "DYNAMIC_FILE" ;
   String DISPLAY_ITEM = "DISPLAY_ITEM" + DUMMY ;
   String DYNAMIC_FILE_ITEM = "DYNAMIC_FILE_ITEM" + DUMMY ; 
   String DYNAMIC_FILE_ITEMS = "DYNAMIC_FILE_ITEMS" + DUMMY ;
   String DISPLAY_ITEMS = "DISPLAY_ITEMS" + DUMMY;              
   String MAX_SIZE = request.getParameter( "MAX_SIZE" ); 
   if ( MAX_SIZE == null || MAX_SIZE.equals("") )  MAX_SIZE = "80" ;
   String DISPLAY_HEIGHT = request.getParameter( "DISPLAY_HEIGHT" ); 
   if ( DISPLAY_HEIGHT == null || DISPLAY_HEIGHT.equals("") )  DISPLAY_HEIGHT = "40" ;   
%>
<script language="JavaScript">

var scripts<%=DUMMY%> = new Array();  
var MAX_SIZE<%=DUMMY%> = <%=MAX_SIZE%> ;

function cfAttach<%=DUMMY%>(obj) {
	var seq = scripts<%=DUMMY%>.length;
	
	if (f_CheckFileExt("CSV",cfGetFileName<%=DUMMY%>( seq )) == false) {
		alert("파일이 CSV인 것만 Import가 가능합니다.\n엑셀 파일을 CSV로 변환 하시어 Import하시기 바랍니다.");
			return;
	}
	
	drmFileSubmit();  
}

// 파일 확장자 체크
function f_CheckFileExt(ext, path) {
	ext = ext.toUpperCase();
	path = path.toUpperCase();
	elen = ext.length;
	flen = path.length;
	return (ext == path.substring((flen-elen), flen));
}

function cfInitItemList<%=DUMMY%>() { 
   var seq = scripts<%=DUMMY%>.length;   
   for ( var inx = 0 ; inx < seq ; inx ++ ) { 
      scripts<%=DUMMY%>[inx].status = false;
      document.getElementById( '<%=DYNAMIC_FILE_ITEM%>' +'_'+(inx+1)).innerHTML = '';
   }    
}

function cfGetFileName<%=DUMMY%>( seq ) { 
 return document.getElementById( '<%=DYNAMIC_FILE%>'+'_'+(seq+1)).value ;
}

//업로드후 form 초기화 > type=file value 초기화 작업 
function resetForm(formId) {
	var form = document.getElementById(formId);
	form.reset(); // 폼 내 모든 입력 요소 초기화
}

/*  Netscape/Mozilla에서 insertAdjacentHTML을 emulation하는 스크립트 
 *  참고 사이트 http://forums.mozilla.or.kr/viewtopic.php?t=678, http://www.faqts.com/knowledge_base/view.phtml/aid/5756
**/
if(typeof HTMLElement!="undefined" && !HTMLElement.prototype.insertAdjacentElement){
	HTMLElement.prototype.insertAdjacentElement = function(where,parsedNode){
		switch (where){
			case 'beforeBegin':
			this.parentNode.insertBefore(parsedNode,this)
			break;
			case 'afterBegin':
			this.insertBefore(parsedNode,this.firstChild);
			break;
			case 'beforeEnd':
			this.appendChild(parsedNode);
			break;
			case 'afterEnd':
			if (this.nextSibling) this.parentNode.insertBefore(parsedNode,this.nextSibling);
			else this.parentNode.appendChild(parsedNode);
			break;
		}
	}

	HTMLElement.prototype.insertAdjacentHTML = function(where,htmlStr) {
		var r = this.ownerDocument.createRange();
		r.setStartBefore(this);
		var parsedHTML = r.createContextualFragment(htmlStr);
		this.insertAdjacentElement(where,parsedHTML);
	}
	
	
	HTMLElement.prototype.insertAdjacentText = function(where,txtStr){
		var parsedText = document.createTextNode(txtStr);
		this.insertAdjacentElement(where,parsedText);
	} 
}

</script>
<table width=100>
<tr>
	<td>
		<input type="hidden" name="INIT_ITEM_LIST_FUNCTION" value="cfInitItemList<%=DUMMY%>"> 
		<input type="button" value="엑셀업로드(CSV)"  style="height:25;width:100;" class="button_default" id="btnDrmLeft">
	</td>
	
	<td>
		<div style='width:100%;height:0;overflow:hidden;position:relative;left:-100px;filter:alpha(opacity=0);-moz-opacity:0'>
			<div id='<%=DYNAMIC_FILE_ITEMS%>' style="display:none;"></div>
			<span id='<%=DYNAMIC_FILE_ITEM%>_1' >
				<input type=file name=<%=DYNAMIC_FILE%>_1 id=<%=DYNAMIC_FILE%>_1 onchange=cfAttach<%=DUMMY%>(this) size=1 style=width:0;cursor:pointer >
			</span>
		</div>
	</td>
</tr>
</table>
