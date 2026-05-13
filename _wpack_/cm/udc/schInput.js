/*amd /cm/udc/schInput.xml 3524 7882c7469e5e43cea0e2f130f28fd20252f5bee51db34975771eded71f10680c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',A:{palette:'support'},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:aliasDataMap',A:{scope:'',id:'aliasDataMap',userData1:''}}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.setData'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @component
 * @componentName udc_schInput
 * @pluginName 
 * @company
 * @developer
 * @category /cm/udc
 * @notSupportBrowser 
 * @version
 * @htmlRender
 * @icon
 * @disableIcon
 * @description
 * @width
 * @height 22px
 * @license
 * @imagePath
 * @homepage
 */

/**
 * @property
 * @name id
 * @category 01.Basic & ETC
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description desc
 */

/**
 * @property
 * @name class
 * @category 01.Basic & ETC
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description desc
 */

/**
 * @property
 * @name style
 * @category 01.Basic & ETC
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description desc
 */

/**
 * @property
 * @name refDataMap
 * @category 01.Basic & ETC
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 데이터맵 아이디
 */

/**
 * @property
 * @name iptNm
 * @category 01.Basic & ETC
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 바인딩 input 명
 */

/**
 * @property
 * @name iptMandatory
 * @category 03.Data
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description input 필수값 여부
 */

/**
 * @property
 * @name iptObjType
 * @category 03.Data
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description input objType 속성
 */

scwin.onpageload = function () {
  var opts = $p.getOptions();
  var refDataMap = opts.refDataMap;
  if (opts.iptMandatory) {
    ed_schInp.setMandatory(opts.iptMandatory);
  }
  if (opts.iptObjType) {
    ed_schInp.options.objType = opts.iptObjType;
  }
  if (!refDataMap) return;
  aliasDataMap.setScope("../" + refDataMap);
  ed_schInp.setRef("data:aliasDataMap." + opts.iptNm);
};
scwin.ed_schInp_ondblclick = function (e) {
  let schData = this.getValue().replace(/,/g, "\n");
  txt_schArea.setValue(schData);
  txt_schArea.show("");
  setTimeout(function () {
    txt_schArea.focus();
  }, 100);
};
scwin.txt_schArea_onblur = function (e) {
  let schData = this.getValue().replace(/\n/g, ",");
  ed_schInp.setValue(schData);
  txt_schArea.hide();
};

/**
 * @method
 * @name setData
 * @description 데이터 셋팅
 * @param {string} param1 desc
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.setData = function (param1) {
  ed_schInp.setValue(param1);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'sch-input'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_schInp',readOnly:'true','ev:ondblclick':'scwin.ed_schInp_ondblclick',class:'form-control'}},{T:1,N:'xf:textarea',A:{id:'txt_schArea',style:'display:none;','ev:onblur':'scwin.txt_schArea_onblur',class:'form-control'}}]}]}]}]})