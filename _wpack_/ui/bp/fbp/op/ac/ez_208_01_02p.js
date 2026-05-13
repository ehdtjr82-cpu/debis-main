/*amd /ui/bp/fbp/op/ac/ez_208_01_02p.xml 5653 1553c6cb20824c66101be9e34b9f7edcee6cd5f47350f5bb89ec2227b8016b1d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Trace',saveRemovedData:'true','ev:ondataload':'scwin.ds_Trace_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rmk2',name:'비고2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xpos',name:'X좌표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ypos',name:'Y좌표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclSts',name:'차량상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDt',name:'수신일시',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.rmk2 = "";
scwin.car_img = "";
scwin.pos = "";
scwin.Line = "";
scwin.LineCnt = "";
scwin.Linefirst = "";
scwin.Linemiddl = "";
scwin.Lineend = "";
scwin.LinemiddleNum = "";
scwin.LinemiddleEndNum = "";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.rmk2 = scwin.params != null && scwin.params["RMK2"] != null ? scwin.params["RMK2"] : "";
  txt_ref2.setValue(scwin.rmk2);
  scwin.draw();
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.mapLine = function (a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
};
scwin.mapSymbol = function (index, title, img, xcoord, ycoord) {
  this.index = index;
  this.title = title;
  this.img = img;
  this.xcoord = xcoord;
  this.ycoord = ycoord;
};
scwin.draw = function () {
  ds_Trace.removeAll();
};
scwin.ds_Trace_ondataload = function () {
  return;
  let rowCnt = ds_Trace.getRowCount();
  let firstCoord = "";
  let middleCoord = "";
  let endCoord = "";
  let xy = "";
  let xx = "";
  let yy = "";
  let xpos = "";
  let ypos = "";
  let car_no = "";
  let car_sts = "1";
  let car_time = "";
  let car_name = "";
  let rowposition = 0;
  let arrSymbolIndex = new Array();
  for (let i = 0; i < rowCnt; i++) {
    xx = ds_Trace.getCellData(i, "xpos");
    yy = ds_Trace.getCellData(i, "ypos");
    car_no = ds_Trace.getCellData(i, "vehclNo");
    car_sts = ds_Trace.getCellData(i, "vehclSts");
    car_time = ds_Trace.getCellData(i, "rcvDt");
    if (i == 0) {
      xy = xx + "#" + yy;
      firstCoord = xy;
      xy = "";
      xpos = xx;
      ypos = yy;
    } else if (i > 0 && i < rowCnt - 1) {
      if (i == rowCnt - 2) {
        xy = xx + "#" + yy;
      } else {
        xy = xx + "#" + yy + "#";
      }
      middleCoord += xy;
    } else if (i == rowCnt - 1) {
      endCoord = xx + "#" + yy;
      xpos = xx;
      ypos = yy;
    }
    rowposition++;
  }
  if (xpos > 0) {
    GetCenterPoint();
    AddSymbol(xpos, ypos, 1, 1, 60, 64, scwin.car_img, '임의 이미지로딩', 0, 'center', 'center');
    let Symbol = new MapSymbol(1, car_name, scwin.car_img, xpos, ypos);
    arrSymbolIndex.splice(1 - 1, 1, Symbol);
    DrawLabel('MapLine1#' + car_name + '#0x000000#12#1#0#0xFFFFFF#0#' + xpos + '#' + ypos + '#center#top');
    MoveMap(xpos, ypos);
    let middleNum = rowCnt - 2;
    let middleEndNum = rowCnt - 1;
    if (rowCnt == 1) {
      DrawLine('1#1#3#0xFF00FF#80#' + rowCnt + '#' + firstCoord);
      scwin.Line = "1";
      scwin.LineCnt = rowCnt;
      scwin.Linefirst = firstCoord;
    } else {
      DrawLine('1#1#3#0x0000FF#80#' + rowCnt + '#' + firstCoord);
      DrawLine('1#2#' + middleNum + '#2#' + middleEndNum + '#' + middleCoord);
      DrawLine('1#3#' + rowCnt + '#' + endCoord + '#1');
      scwin.Line = "3";
      scwin.LineCnt = rowCnt;
      scwin.Linefirst = firstCoord;
      scwin.Linemiddl = middleCoord;
      scwin.Lineend = endCoord;
      scwin.LinemiddleNum = middleNum;
      scwin.LinemiddleEndNum = middleEndNum;
    }
  } else {
    RemoveAllLine();
    RemoveAllSymbol();
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더상세정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox h-full',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb h-full',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더정보',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_ref2',label:'',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:';display:none;'},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})