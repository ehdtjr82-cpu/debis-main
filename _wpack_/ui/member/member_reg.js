/*amd /ui/member/member_reg.xml 77458 a59a91ec1e7d83d79586265baebc01c26cb066af213537d6007a14194ad315d6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};
}}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.compMapping = {};
scwin.state = {
  mode: "register",
  mbrClsCd: "",
  checkedMemberId: ""
};
scwin.onUdcCompleted = function () {
  scwin.compMapping = {
    MBR_CLS_CD: scwin.state.mbrClsCd,
    MBR_ID: input8,
    PASSWD: PASSWD,
    MBR_NM: input11,
    MP_NO: input12,
    TEL_NO: input13,
    FAX_NO: input14,
    EMAIL: input15,
    LOBRAN_CD: selectbox111,
    BUSI_NM: input17,
    BUSI_CLS_CD: selectbox2,
    CRN: input18,
    REPST_NM: input19,
    BUSI_ZIP: input20,
    BUSI_ADDR_1: input21,
    BUSI_ADDR_2: input22,
    MAIL_ZIP: input23,
    MAIL_ADDR_1: input24,
    MAIL_ADDR_2: input25,
    BULK_YN: BULK_YN_CHK,
    CNTR_YN: CNTR_YN_CHK,
    TRANS_BIZ_YN: TRANS_BIZ_YN_CHK,
    INTCD_BIZ_YN: INTCD_BIZ_YN_CHK,
    VEHCL_KIND_CD1: selectbox4,
    VEHCL_NRM_CD1: selectbox5,
    VEHCL_CNT1: input36,
    VEHCL_KIND_CD2: selectbox6,
    VEHCL_NRM_CD2: selectbox7,
    VEHCL_CNT2: input37,
    VEHCL_KIND_CD3: selectbox8,
    VEHCL_NRM_CD3: selectbox9,
    VEHCL_CNT3: input38,
    VEHCL_KIND_CD4: selectbox10,
    VEHCL_NRM_CD4: selectbox11,
    VEHCL_CNT4: input39,
    VEHCL_KIND_CD5: selectbox12,
    VEHCL_NRM_CD5: selectbox13,
    VEHCL_CNT5: input40,
    PREF_KCG_CD_1: selectbox14,
    PREF_KCG_CD_2: selectbox15,
    PREF_KCG_CD_3: selectbox16,
    MAIN_DST1_DPT: selectbox17,
    MAIN_DST1_ARV: selectbox3,
    LGG_RPT_LMT: input28,
    EQ_CLSS_CD1: selectbox18,
    EQ_KND_CD1: selectbox19,
    EQ_NRM_CD1: selectbox20,
    EQ_CNT1: input42,
    EQ_CLSS_CD2: selectbox21,
    EQ_KND_CD2: selectbox22,
    EQ_NRM_CD2: selectbox23,
    EQ_CNT2: input43,
    EQ_CLSS_CD3: selectbox24,
    EQ_KND_CD3: selectbox25,
    EQ_NRM_CD3: selectbox26,
    EQ_CNT3: input44,
    EQ_CLSS_CD4: selectbox27,
    EQ_KND_CD4: selectbox28,
    EQ_NRM_CD4: selectbox29,
    EQ_CNT4: input45,
    EQ_CLSS_CD5: selectbox30,
    EQ_KND_CD5: selectbox31,
    EQ_NRM_CD5: selectbox32,
    EQ_CNT5: input46,
    BASE_ZIP: input32,
    BASE_ADDR_1: input33,
    BASE_ADDR_2: input34,
    WRK_PL_CLS_CD: selectbox33,
    SPC: input47,
    VEHCL_NO: input63,
    VEHCL_KND_CD: selectbox67,
    VEHCL_NRM_CD: selectbox68,
    BOND_TRANS_LCNS_ST_DT: temp2,
    BOND_TRANS_LCNS_END_DT: temp3,
    MAIN_DST2_DPT: selectbox61,
    MAIN_DST2_ARV: selectbox62,
    MAIN_DST3_DPT: selectbox63,
    MAIN_DST3_ARV: selectbox64,
    PREF_DTC_CLS_CD: selectbox151,
    UNQ_ITM: textarea1
  };
  if (scwin.state.mbrClsCd === "05") {
    scwin.compMapping.MAIN_DST1_DPT = selectbox49;
    scwin.compMapping.MAIN_DST1_ARV = selectbox50;
    scwin.compMapping.PREF_KCG_CD_1 = selectbox46;
    scwin.compMapping.PREF_KCG_CD_2 = selectbox47;
    scwin.compMapping.PREF_KCG_CD_3 = selectbox48;
  }
};
scwin.safe = function (value) {
  return value == null ? "" : String(value);
};
scwin.encodeParams = function (params) {
  return Object.keys(params || {}).map(function (key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(scwin.safe(params[key]));
  }).join("&");
};
scwin.requestJson = function (url, params, method) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    var httpMethod = (method || "GET").toUpperCase();
    var query = scwin.encodeParams(params);
    var requestUrl = url;
    if (httpMethod === "GET" && query) {
      requestUrl += (url.indexOf("?") > -1 ? "&" : "?") + query;
    }
    xhr.open(httpMethod, requestUrl, true);
    xhr.setRequestHeader("Accept", "application/json");
    if (httpMethod !== "GET") {
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    }
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) {
        return;
      }
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          resolve(JSON.parse(xhr.responseText || "{}"));
        } catch (error) {
          reject(error);
        }
        return;
      }
      reject(new Error("HTTP " + xhr.status));
    };
    xhr.onerror = function () {
      reject(new Error("NETWORK_ERROR"));
    };
    xhr.send(httpMethod === "GET" ? null : query);
  });
};
scwin.getQueryParams = function () {
  var params = {};
  var query = window.location.search || "";
  query.replace(/^\?/, "").split("&").forEach(function (pair) {
    var pieces = [];
    var key = "";
    if (!pair) {
      return;
    }
    pieces = pair.split("=");
    key = decodeURIComponent(pieces[0] || "");
    if (!key || key === "w2xPath") {
      return;
    }
    params[key] = decodeURIComponent(pieces.slice(1).join("=") || "");
  });
  return params;
};

// scwin.buildDirectUrl = function (url, paramData) {
//     var path = url || "";
//     var queryParts = [];
//     var queryIndex = path.indexOf("?");

//     if (queryIndex > -1) {
//         queryParts.push(path.substring(queryIndex + 1));
//         path = path.substring(0, queryIndex);
//     }

//     Object.keys(paramData || {}).forEach(function (name) {
//         var value = paramData[name];

//         if (value == null || typeof value === "object" || typeof value === "function") {
//             return;
//         }

//         queryParts.push(encodeURIComponent(name) + "=" + encodeURIComponent(String(value)));
//     });

//     return "/websquare/websquare.html?w2xPath=" + encodeURIComponent(path) + (queryParts.length ? "&" + queryParts.join("&") : "");
// };

scwin.postcodeScriptUrl = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
scwin.ensurePostcodeLoaded = function () {
  if (window.daum && window.daum.Postcode) {
    return Promise.resolve();
  }
  if (window.__memberPostcodePromise) {
    return window.__memberPostcodePromise;
  }
  window.__memberPostcodePromise = new Promise(function (resolve, reject) {
    var script = document.createElement("script");
    script.src = scwin.postcodeScriptUrl;
    script.async = true;
    script.onload = function () {
      resolve();
    };
    script.onerror = function () {
      reject(new Error("POSTCODE_LOAD_FAILED"));
    };
    document.head.appendChild(script);
  });
  return window.__memberPostcodePromise;
};
scwin.ensureComboDataList = function (dataListId) {
  var dataList = $p.getComponentById(dataListId);
  if (dataList) {
    return dataList;
  }
  $p.data.create({
    id: dataListId,
    type: "dataList",
    option: {
      baseNode: "list",
      repeatNode: "map"
    },
    columnInfo: [{
      id: "label"
    }, {
      id: "value"
    }]
  });
  return $p.getComponentById(dataListId);
};
scwin.moveFrame = async function (url, paramData) {
  // window.open(scwin.buildDirectUrl(url, paramData || {}), "_self");
  $p.parent().wfm_wframe.setSrc(url);
  $p.parent().wfm_wframe.setUserData("paramData", paramData);
  window.top.history.pushState({
    url: url,
    param: paramData || {}
  }, "", null);
};
scwin.showError = async function (message) {
  await $c.win.alert($p, message || "처리 중 오류가 발생했습니다.");
};
scwin.findCodeName = function (list, code) {
  var target = scwin.safe(code);
  var items = list || [];
  var i = 0;
  for (i = 0; i < items.length; i += 1) {
    if (scwin.safe(items[i].code) === target) {
      return scwin.safe(items[i].codeName);
    }
  }
  return target;
};
scwin.bindCombo = function (component, nodeSetId, list) {
  var choices = (list || []).map(function (item) {
    return {
      label: scwin.safe(item.codeName),
      value: scwin.safe(item.code)
    };
  });
  var dataList = scwin.ensureComboDataList(nodeSetId);
  dataList.setJSON(choices);
  component.setNodeSet("data:" + nodeSetId, "label", "value");
};
scwin.clearCombo = function (component, nodeSetId) {
  scwin.bindCombo(component, nodeSetId, []);
  component.setValue("");
};
scwin.setComboValue = function (component, value) {
  var normalized = scwin.safe(value);
  component.setValue(normalized);
  if (normalized && component.getSelectedIndex && component.getSelectedIndex() === -1 && component.getIndexByValue) {
    component.setSelectedIndex(component.getIndexByValue(normalized));
  }
};

// scwin.setCheckboxGroup = function (component, indexes) {
//     var list = indexes || [];
//     var i = 0;

//     try {
//         component.setSelectedIndex(-1);
//     } catch (ignore) {
//     }

//     for (i = 0; i < list.length; i += 1) {
//         try {
//             component.setSelectedIndex(list[i], false);
//         } catch (ignoreAgain) {
//         }
//     }
// };

scwin.isChecked = function (component, index) {
  var selected = component.getSelectedIndex();
  var target = scwin.safe(index);
  var i = 0;
  if (selected == null || selected === -1) {
    return false;
  }
  if (selected instanceof Array) {
    for (i = 0; i < selected.length; i += 1) {
      if (scwin.safe(selected[i]) === target) {
        return true;
      }
    }
    return false;
  }
  return scwin.safe(selected) === target;
};
scwin.isBlank = function (value) {
  return scwin.safe(value).trim() === "";
};
scwin.hasAnyValue = function (values) {
  var i = 0;
  for (i = 0; i < values.length; i += 1) {
    if (!scwin.isBlank(values[i])) {
      return true;
    }
  }
  return false;
};
scwin.requireValue = async function (value, message, dmaId) {
  if (scwin.isBlank(value)) {
    await $c.win.alert($p, message);
    dmaId.focus();
    return false;
  }
  return true;
};
scwin.isValidEmail = async function (value, message, dmaId) {
  var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
  if (scwin.isBlank(value) || value.search(format) == -1) {
    await $c.win.alert($p, message);
    dmaId.focus();
    return false;
  }
  return true;
};
scwin.compareDateRange = function (fromValue, toValue) {
  var fromDate = scwin.safe(fromValue).replace(/[^0-9]/g, "");
  var toDate = scwin.safe(toValue).replace(/[^0-9]/g, "");
  if (!fromDate || !toDate) {
    return true;
  }
  return fromDate <= toDate;
};
scwin.applySectionVisibility = function () {
  if (scwin.state.mbrClsCd === "04") {
    grp_broker_detail.show();
    grp_driver_detail.hide();
    return;
  }
  if (scwin.state.mbrClsCd === "05") {
    grp_broker_detail.hide();
    grp_driver_detail.show();
    grp_biz.hide();
    return;
  }
  grp_broker_detail.hide();
  grp_driver_detail.hide();
  grp_biz.hide();
};
scwin.copyBusinessToMail = async function () {
  if (checkbox2.getValue() == "" || checkbox2.getValue() == "0") {
    return;
  }
  if (scwin.isBlank(input20.getValue())) {
    await $c.win.alert($p, "사업장 주소를 먼저 입력해 주세요.");
    input20.focus();
    checkbox2.setValue("0");
    // scwin.setCheckboxGroup(checkbox2, []);
    return;
  }
  input23.setValue(input20.getValue());
  input24.setValue(input21.getValue());
  input25.setValue(input22.getValue());
};

// scwin.copyBusinessToBase = async function () {
//     if (!scwin.isChecked(checkbox5, 0)) {
//         return;
//     }

//     if (scwin.isBlank(input20.getValue())) {
//         await $c.win.alert("사업장 주소를 먼저 입력해 주세요.");
//         input20.focus();
//         checkbox5.setValue("0");
//         // scwin.setCheckboxGroup(checkbox5, []);
//         return;
//     }

//     input32.setValue(input20.getValue());
//     input33.setValue(input21.getValue());
//     input34.setValue(input22.getValue());
// };

scwin.fillAddress = function (target, zipCode, address1) {
  if (target === "BUSI") {
    input20.setValue(zipCode);
    input21.setValue(address1);
    input22.focus();
    return;
  }
  if (target === "MAIL") {
    input23.setValue(zipCode);
    input24.setValue(address1);
    input25.focus();
    return;
  }
  input32.setValue(zipCode);
  input33.setValue(address1);
  input34.focus();
};
scwin.openAddressLookup = async function (target) {
  try {
    await scwin.ensurePostcodeLoaded();
  } catch (error) {
    $c.win.alert($p, "주소 검색 스크립트를 불러오지 못했습니다. 주소를 직접 입력해 주세요.");
    return;
  }
  if (window.daum && daum.Postcode) {
    new daum.Postcode({
      oncomplete: function (data) {
        var address = data.userSelectedType === "R" ? data.roadAddress : data.jibunAddress;
        var extra = "";
        if (data.userSelectedType === "R") {
          if (data.bname) {
            extra += data.bname;
          }
          if (data.buildingName) {
            extra += (extra ? ", " : "") + data.buildingName;
          }
          if (extra) {
            address += " (" + extra + ")";
          }
        }
        scwin.fillAddress(target, scwin.safe(data.zonecode), address);
      }
    }).open();
    return;
  }
  $c.win.alert($p, "주소 검색을 사용할 수 없는 환경입니다. 주소를 직접 입력해 주세요.");
};
scwin.loadComboOptions = async function (param1, param2) {
  return scwin.requestJson("/MemberControl", {
    cmd: "changeCombo",
    PARAM1: param1,
    PARAM2: scwin.safe(param2)
  });
};
scwin.updateDriverVehicleNorm = async function (selectedValue) {
  var list = scwin.isBlank(selectedValue) ? [] : await scwin.loadComboOptions("changeCar", selectedValue);
  scwin.bindCombo(selectbox68, "ds_member_driver_vehicle_norm", list);
};
scwin.updateBrokerVehicleNorm = async function (row, selectedValue) {
  var list = scwin.isBlank(selectedValue) ? [] : await scwin.loadComboOptions("changeCar", selectedValue);
  var targetMap = {
    "1": selectbox5,
    "2": selectbox7,
    "3": selectbox9,
    "4": selectbox11,
    "5": selectbox13
  };
  scwin.bindCombo(targetMap[row], "ds_member_broker_vehicle_norm_" + row, list);
};
scwin.updateBrokerEqKind = async function (row, selectedValue) {
  var list = scwin.isBlank(selectedValue) ? [] : await scwin.loadComboOptions("changeClss", selectedValue);
  var targetMap = {
    "1": selectbox19,
    "2": selectbox22,
    "3": selectbox25,
    "4": selectbox28,
    "5": selectbox31
  };
  var normMap = {
    "1": selectbox20,
    "2": selectbox23,
    "3": selectbox26,
    "4": selectbox29,
    "5": selectbox32
  };
  scwin.bindCombo(targetMap[row], "ds_member_broker_eq_kind_" + row, list);
  scwin.clearCombo(normMap[row], "ds_member_broker_eq_norm_" + row);
};
scwin.updateBrokerEqNorm = async function (row, selectedValue) {
  var list = scwin.isBlank(selectedValue) ? [] : await scwin.loadComboOptions("changeEqKnd", selectedValue);
  var targetMap = {
    "1": selectbox20,
    "2": selectbox23,
    "3": selectbox26,
    "4": selectbox29,
    "5": selectbox32
  };
  scwin.bindCombo(targetMap[row], "ds_member_broker_eq_norm_" + row, list);
};
scwin.onDriverVehicleKindChange = function () {
  scwin.updateDriverVehicleNorm(selectbox67.getValue()).catch(function () {
    scwin.showError("차량 규격을 불러오지 못했습니다.");
  });
};
scwin.onBrokerVehicleKindChange1 = function () {
  scwin.updateBrokerVehicleNorm("1", selectbox4.getValue()).catch(function () {
    scwin.showError("차량 규격을 불러오지 못했습니다.");
  });
};
scwin.onBrokerVehicleKindChange2 = function () {
  scwin.updateBrokerVehicleNorm("2", selectbox6.getValue()).catch(function () {
    scwin.showError("차량 규격을 불러오지 못했습니다.");
  });
};
scwin.onBrokerVehicleKindChange3 = function () {
  scwin.updateBrokerVehicleNorm("3", selectbox8.getValue()).catch(function () {
    scwin.showError("차량 규격을 불러오지 못했습니다.");
  });
};
scwin.onBrokerVehicleKindChange4 = function () {
  scwin.updateBrokerVehicleNorm("4", selectbox10.getValue()).catch(function () {
    scwin.showError("차량 규격을 불러오지 못했습니다.");
  });
};
scwin.onBrokerVehicleKindChange5 = function () {
  scwin.updateBrokerVehicleNorm("5", selectbox12.getValue()).catch(function () {
    scwin.showError("차량 규격을 불러오지 못했습니다.");
  });
};
scwin.onBrokerEqClassChange1 = function () {
  scwin.updateBrokerEqKind("1", selectbox18.getValue()).catch(function () {
    scwin.showError("장비 종류를 불러오지 못했습니다.");
  });
};
scwin.onBrokerEqClassChange2 = function () {
  scwin.updateBrokerEqKind("2", selectbox21.getValue()).catch(function () {
    scwin.showError("장비 종류를 불러오지 못했습니다.");
  });
};
scwin.onBrokerEqClassChange3 = function () {
  scwin.updateBrokerEqKind("3", selectbox24.getValue()).catch(function () {
    scwin.showError("장비 종류를 불러오지 못했습니다.");
  });
};
scwin.onBrokerEqClassChange4 = function () {
  scwin.updateBrokerEqKind("4", selectbox27.getValue()).catch(function () {
    scwin.showError("장비 종류를 불러오지 못했습니다.");
  });
};
scwin.onBrokerEqClassChange5 = function () {
  scwin.updateBrokerEqKind("5", selectbox30.getValue()).catch(function () {
    scwin.showError("장비 종류를 불러오지 못했습니다.");
  });
};
scwin.onBrokerEqKindChange1 = function () {
  scwin.updateBrokerEqNorm("1", selectbox19.getValue()).catch(function () {
    scwin.showError("장비 규격을 불러오지 못했습니다.");
  });
};
scwin.onBrokerEqKindChange2 = function () {
  scwin.updateBrokerEqNorm("2", selectbox22.getValue()).catch(function () {
    scwin.showError("장비 규격을 불러오지 못했습니다.");
  });
};
scwin.onBrokerEqKindChange3 = function () {
  scwin.updateBrokerEqNorm("3", selectbox25.getValue()).catch(function () {
    scwin.showError("장비 규격을 불러오지 못했습니다.");
  });
};
scwin.onBrokerEqKindChange4 = function () {
  scwin.updateBrokerEqNorm("4", selectbox28.getValue()).catch(function () {
    scwin.showError("장비 규격을 불러오지 못했습니다.");
  });
};
scwin.onBrokerEqKindChange5 = function () {
  scwin.updateBrokerEqNorm("5", selectbox31.getValue()).catch(function () {
    scwin.showError("장비 규격을 불러오지 못했습니다.");
  });
};
scwin.applyStaticCombo = function (combo) {
  //order 기준이 존재하지 않아 사업자등록번호 순서 정리
  const orderMapBusiClsCd = {
    '법인사업자': 1,
    '개인사업자': 2,
    '주민등록신고자': 3,
    '재외국인사업자': 4,
    '기타': 5
  };
  const orderMapVehclKndCd = {
    'WT': 1,
    // 윙바디 트럭
    'TT': 2,
    // 탑차
    'VT': 3,
    // 밴형트럭
    'PT': 4,
    // 풀카고 트럭
    'DT': 5,
    // 덤프트럭
    'CT': 6,
    // 카고트럭
    'HT': 7,
    // 행거트럭
    'TY': 8,
    // 탱크로리
    'DA': 9,
    // 다마스
    'BT': 10,
    // 벌크시멘트 트렉터
    'TR': 11,
    // 트렉터
    'YT': 12,
    // 야드트렉터
    'LO': 13,
    // 로우베드
    'FP': 14,
    // FFP
    'FB': 15,
    // 평판
    'CS': 16,
    // 츄레라
    'TK': 17,
    // 탱크로리(다른 코드)
    'NV': 18 // 무진동
  };
  combo.busiClsCd.sort((a, b) => {
    return orderMapBusiClsCd[a.codeName] - orderMapBusiClsCd[b.codeName];
  });
  combo.vehclKndCd.sort((a, b) => {
    return (orderMapVehclKndCd[a.code] ?? 999) - (orderMapVehclKndCd[b.code] ?? 999);
  });
  scwin.bindCombo(selectbox111, "ds_member_lobran_cd", combo.lobranCd || []);
  scwin.bindCombo(selectbox2, "ds_member_busi_cls_cd", combo.busiClsCd || []);
  scwin.bindCombo(selectbox14, "ds_member_pref_kcg_cd", combo.prefKcgCd || []);
  scwin.bindCombo(selectbox15, "ds_member_pref_kcg_cd", combo.prefKcgCd || []);
  scwin.bindCombo(selectbox16, "ds_member_pref_kcg_cd", combo.prefKcgCd || []);
  scwin.bindCombo(selectbox17, "ds_member_district_cd", combo.districtCd || []);
  scwin.bindCombo(selectbox3, "ds_member_district_cd", combo.districtCd || []);
  scwin.bindCombo(selectbox18, "ds_member_eq_clss_cd", combo.eqClssCd || []);
  scwin.bindCombo(selectbox21, "ds_member_eq_clss_cd", combo.eqClssCd || []);
  scwin.bindCombo(selectbox24, "ds_member_eq_clss_cd", combo.eqClssCd || []);
  scwin.bindCombo(selectbox27, "ds_member_eq_clss_cd", combo.eqClssCd || []);
  scwin.bindCombo(selectbox30, "ds_member_eq_clss_cd", combo.eqClssCd || []);
  scwin.bindCombo(selectbox33, "ds_member_wrk_pl_cls_cd", combo.wrkPlClsCd || []);
  scwin.bindCombo(selectbox4, "ds_member_vehicle_kind_cd", combo.vehclKndCd || []);
  scwin.bindCombo(selectbox6, "ds_member_vehicle_kind_cd", combo.vehclKndCd || []);
  scwin.bindCombo(selectbox8, "ds_member_vehicle_kind_cd", combo.vehclKndCd || []);
  scwin.bindCombo(selectbox10, "ds_member_vehicle_kind_cd", combo.vehclKndCd || []);
  scwin.bindCombo(selectbox12, "ds_member_vehicle_kind_cd", combo.vehclKndCd || []);
  scwin.bindCombo(selectbox67, "ds_member_vehicle_kind_cd", combo.vehclKndCd || []);
  scwin.bindCombo(selectbox46, "ds_member_pref_kcg_cd", combo.prefKcgCd || []);
  scwin.bindCombo(selectbox47, "ds_member_pref_kcg_cd", combo.prefKcgCd || []);
  scwin.bindCombo(selectbox48, "ds_member_pref_kcg_cd", combo.prefKcgCd || []);
  scwin.bindCombo(selectbox49, "ds_member_district_cd", combo.districtCd || []);
  scwin.bindCombo(selectbox50, "ds_member_district_cd", combo.districtCd || []);
  scwin.bindCombo(selectbox61, "ds_member_district_cd", combo.districtCd || []);
  scwin.bindCombo(selectbox62, "ds_member_district_cd", combo.districtCd || []);
  scwin.bindCombo(selectbox63, "ds_member_district_cd", combo.districtCd || []);
  scwin.bindCombo(selectbox64, "ds_member_district_cd", combo.districtCd || []);
  scwin.bindCombo(selectbox151, "ds_member_pref_dtc_cls_cd", combo.prefDtcClsCd || []);
  scwin.clearCombo(selectbox5, "ds_member_broker_vehicle_norm_1");
  scwin.clearCombo(selectbox7, "ds_member_broker_vehicle_norm_2");
  scwin.clearCombo(selectbox9, "ds_member_broker_vehicle_norm_3");
  scwin.clearCombo(selectbox11, "ds_member_broker_vehicle_norm_4");
  scwin.clearCombo(selectbox13, "ds_member_broker_vehicle_norm_5");
  scwin.clearCombo(selectbox19, "ds_member_broker_eq_kind_1");
  scwin.clearCombo(selectbox22, "ds_member_broker_eq_kind_2");
  scwin.clearCombo(selectbox25, "ds_member_broker_eq_kind_3");
  scwin.clearCombo(selectbox28, "ds_member_broker_eq_kind_4");
  scwin.clearCombo(selectbox31, "ds_member_broker_eq_kind_5");
  scwin.clearCombo(selectbox20, "ds_member_broker_eq_norm_1");
  scwin.clearCombo(selectbox23, "ds_member_broker_eq_norm_2");
  scwin.clearCombo(selectbox26, "ds_member_broker_eq_norm_3");
  scwin.clearCombo(selectbox29, "ds_member_broker_eq_norm_4");
  scwin.clearCombo(selectbox32, "ds_member_broker_eq_norm_5");
  scwin.clearCombo(selectbox68, "ds_member_driver_vehicle_norm");
  tbx_mbr_cls_nm.setValue(scwin.findCodeName(combo.memberGubun || [], scwin.state.mbrClsCd));
};
scwin.collectPayload = function () {
  let payload = {
    MBR_CLS_CD: scwin.state.mbrClsCd,
    MBR_ID: scwin.safe(input8.getValue()).toLowerCase(),
    PASSWD: PASSWD.getValue(),
    MBR_NM: input11.getValue(),
    MP_NO: input12.getValue(),
    TEL_NO: input13.getValue(),
    FAX_NO: input14.getValue(),
    EMAIL: input15.getValue(),
    LOBRAN_CD: selectbox111.getValue(),
    BUSI_NM: input17.getValue(),
    BUSI_CLS_CD: selectbox2.getValue(),
    CRN: input18.getValue(),
    REPST_NM: input19.getValue(),
    BUSI_ZIP: input20.getValue(),
    BUSI_ADDR_1: input21.getValue(),
    BUSI_ADDR_2: input22.getValue(),
    MAIL_ZIP: input23.getValue(),
    MAIL_ADDR_1: input24.getValue(),
    MAIL_ADDR_2: input25.getValue(),
    BULK_YN: BULK_YN_CHK.getValue(),
    CNTR_YN: CNTR_YN_CHK.getValue(),
    TRANS_BIZ_YN: TRANS_BIZ_YN_CHK.getValue(),
    INTCD_BIZ_YN: INTCD_BIZ_YN_CHK.getValue(),
    VEHCL_KIND_CD1: selectbox4.getValue(),
    VEHCL_NRM_CD1: selectbox5.getValue(),
    VEHCL_CNT1: input36.getValue(),
    VEHCL_KIND_CD2: selectbox6.getValue(),
    VEHCL_NRM_CD2: selectbox7.getValue(),
    VEHCL_CNT2: input37.getValue(),
    VEHCL_KIND_CD3: selectbox8.getValue(),
    VEHCL_NRM_CD3: selectbox9.getValue(),
    VEHCL_CNT3: input38.getValue(),
    VEHCL_KIND_CD4: selectbox10.getValue(),
    VEHCL_NRM_CD4: selectbox11.getValue(),
    VEHCL_CNT4: input39.getValue(),
    VEHCL_KIND_CD5: selectbox12.getValue(),
    VEHCL_NRM_CD5: selectbox13.getValue(),
    VEHCL_CNT5: input40.getValue(),
    PREF_KCG_CD_1: selectbox14.getValue(),
    PREF_KCG_CD_2: selectbox15.getValue(),
    PREF_KCG_CD_3: selectbox16.getValue(),
    MAIN_DST1_DPT: selectbox17.getValue(),
    MAIN_DST1_ARV: selectbox3.getValue(),
    LGG_RPT_LMT: input28.getValue(),
    EQ_CLSS_CD1: selectbox18.getValue(),
    EQ_KND_CD1: selectbox19.getValue(),
    EQ_NRM_CD1: selectbox20.getValue(),
    EQ_CNT1: input42.getValue(),
    EQ_CLSS_CD2: selectbox21.getValue(),
    EQ_KND_CD2: selectbox22.getValue(),
    EQ_NRM_CD2: selectbox23.getValue(),
    EQ_CNT2: input43.getValue(),
    EQ_CLSS_CD3: selectbox24.getValue(),
    EQ_KND_CD3: selectbox25.getValue(),
    EQ_NRM_CD3: selectbox26.getValue(),
    EQ_CNT3: input44.getValue(),
    EQ_CLSS_CD4: selectbox27.getValue(),
    EQ_KND_CD4: selectbox28.getValue(),
    EQ_NRM_CD4: selectbox29.getValue(),
    EQ_CNT4: input45.getValue(),
    EQ_CLSS_CD5: selectbox30.getValue(),
    EQ_KND_CD5: selectbox31.getValue(),
    EQ_NRM_CD5: selectbox32.getValue(),
    EQ_CNT5: input46.getValue(),
    BASE_ZIP: input32.getValue(),
    BASE_ADDR_1: input33.getValue(),
    BASE_ADDR_2: input34.getValue(),
    WRK_PL_CLS_CD: selectbox33.getValue(),
    SPC: input47.getValue(),
    VEHCL_NO: input63.getValue(),
    VEHCL_KND_CD: selectbox67.getValue(),
    VEHCL_NRM_CD: selectbox68.getValue(),
    BOND_TRANS_LCNS_ST_DT: temp2.getValue(),
    BOND_TRANS_LCNS_END_DT: temp3.getValue(),
    MAIN_DST2_DPT: selectbox61.getValue(),
    MAIN_DST2_ARV: selectbox62.getValue(),
    MAIN_DST3_DPT: selectbox63.getValue(),
    MAIN_DST3_ARV: selectbox64.getValue(),
    PREF_DTC_CLS_CD: selectbox151.getValue(),
    UNQ_ITM: textarea1.getValue()
  };
  if (scwin.state.mbrClsCd === "05") {
    payload.MAIN_DST1_DPT = selectbox49.getValue();
    payload.MAIN_DST1_ARV = selectbox50.getValue();
    payload.PREF_KCG_CD_1 = selectbox46.getValue();
    payload.PREF_KCG_CD_2 = selectbox47.getValue();
    payload.PREF_KCG_CD_3 = selectbox48.getValue();
  }
  return payload;
};
scwin.validateCommon = async function (payload) {
  let comp = PASSWD;
  if (payload.BULK_YN === "0" && payload.CNTR_YN === "0") {
    await $c.win.alert($p, "화물 구분은 최소 하나 이상 선택해 주세요.");
    comp = scwin.compMapping.BULK_YN;
    comp.focus();
    return false;
  }
  if (!(await scwin.requireValue(payload.MBR_ID, "아이디를 입력해 주세요.", scwin.compMapping.MBR_ID))) {
    return false;
  }
  if (scwin.state.checkedMemberId !== payload.MBR_ID) {
    await $c.win.alert($p, "아이디 중복확인을 해 주세요.");
    comp = scwin.compMapping.MBR_ID;
    comp.focus();
    return false;
  }
  if (payload.PASSWD.length < 4 || payload.PASSWD.length > 10) {
    await $c.win.alert($p, "비밀번호는 4~10자로 입력해 주세요.");
    comp = scwin.compMapping.PASSWD;
    comp.focus();
    return false;
  }
  if (payload.PASSWD !== PASSWD_CHK.getValue()) {
    await $c.win.alert($p, "비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    comp = scwin.compMapping.PASSWD;
    comp.focus();
    return false;
  }
  if (!(await scwin.requireValue(payload.MBR_NM, "배차담당자 성명을 입력해 주세요.", scwin.compMapping.MBR_NM)) || !(await scwin.requireValue(payload.MP_NO, "휴대전화를 입력해 주세요.", scwin.compMapping.MP_NO)) || !(await scwin.requireValue(payload.TEL_NO, "전화번호를 입력해 주세요.", scwin.compMapping.TEL_NO)) || !(await scwin.isValidEmail(payload.EMAIL, "이메일 형식을 확인해 주세요", scwin.compMapping.EMAIL)) || !(await scwin.requireValue(payload.LOBRAN_CD, "신청점소를 선택해 주세요.", scwin.compMapping.LOBRAN_CD)) || !(await scwin.requireValue(payload.BUSI_CLS_CD, "사업자구분을 선택해 주세요.", scwin.compMapping.BUSI_CLS_CD)) || !(await scwin.requireValue(payload.BUSI_NM, "회사명을 입력해 주세요.", scwin.compMapping.BUSI_NM)) || !(await scwin.requireValue(payload.CRN, "사업자등록번호를 입력해 주세요.", scwin.compMapping.CRN)) || !(await scwin.requireValue(payload.REPST_NM, "대표자 성명을 입력해 주세요.", scwin.compMapping.REPST_NM)) || !(await scwin.requireValue(payload.BUSI_ZIP, "사업장 주소를 입력해 주세요.", scwin.compMapping.BUSI_ZIP)) || !(await scwin.requireValue(payload.BUSI_ADDR_1, "사업장 주소를 입력해 주세요.", scwin.compMapping.BUSI_ADDR_1)) || !(await scwin.requireValue(payload.MAIL_ZIP, "우편물 수령지를 입력해 주세요.", scwin.compMapping.MAIL_ZIP)) || !(await scwin.requireValue(payload.MAIL_ADDR_1, "우편물 수령지를 입력해 주세요.", scwin.compMapping.MAIL_ADDR_1))) {
    return false;
  }

  // if (!scwin.isValidEmail(payload.EMAIL )) {
  //     $c.win.alert("이메일 형식을 확인해 주세요.");
  //     return false;
  // }

  return true;
};
scwin.validateBroker = async function (payload) {
  var row = 0;
  var validVehicleRowCount = 0;
  if (payload.TRANS_BIZ_YN === "0" && payload.INTCD_BIZ_YN === "0") {
    await $c.win.alert($p, "사업구분은 최소 하나 이상 선택해 주세요.");
    comp = scwin.compMapping.TRANS_BIZ_YN;
    comp.focus();
    return false;
  }
  for (row = 1; row <= 5; row += 1) {
    var kind = payload["VEHCL_KIND_CD" + row];
    var norm = payload["VEHCL_NRM_CD" + row];
    var count = payload["VEHCL_CNT" + row];
    var rowValues = [kind, norm, count];
    if (!scwin.hasAnyValue(rowValues)) {
      continue;
    }
    debugger;
    if (!scwin.isBlank(kind) && !scwin.isBlank(norm) && !scwin.isBlank(count)) {
      validVehicleRowCount += 1;
    }
  }
  if (validVehicleRowCount === 0) {
    await $c.win.alert($p, "보유차량은 최소 하나 이상 입력해 주세요.");
    return false;
  }
  if (!(await scwin.requireValue(payload.PREF_KCG_CD_1, "선호 화종은 최소 하나 이상 입력하셔야됩니다.", scwin.compMapping.PREF_KCG_CD_1)) || !(await scwin.requireValue(payload.MAIN_DST1_DPT, "선호구간은 필수 입력하셔야됩니다.", scwin.compMapping.MAIN_DST1_DPT)) || !(await scwin.requireValue(payload.MAIN_DST1_ARV, "선호구간은 필수 입력하셔야됩니다.", scwin.compMapping.MAIN_DST1_ARV))) {
    return false;
  }
  return true;
};
scwin.validateDriver = async function (payload) {
  var hasDate = !scwin.isBlank(payload.BOND_TRANS_LCNS_ST_DT) || !scwin.isBlank(payload.BOND_TRANS_LCNS_END_DT);
  debugger;
  if (!(await scwin.requireValue(payload.VEHCL_NO, "차량번호를 입력해 주세요.", scwin.compMapping.VEHCL_NO)) || !(await scwin.requireValue(payload.VEHCL_KND_CD, "차량종류를 선택해 주세요.", scwin.compMapping.VEHCL_KND_CD)) || !(await scwin.requireValue(payload.MAIN_DST1_DPT, "선호구간은 필수 입력하셔야됩니다.", scwin.compMapping.MAIN_DST1_DPT)) || !(await scwin.requireValue(payload.MAIN_DST1_ARV, "선호구간은 필수 입력하셔야됩니다.", scwin.compMapping.MAIN_DST1_ARV))) {
    return false;
  }
  if (hasDate && (scwin.isBlank(payload.BOND_TRANS_LCNS_ST_DT) || scwin.isBlank(payload.BOND_TRANS_LCNS_END_DT))) {
    await $c.win.alert($p, "보세운송면허기간은 시작일과 종료일을 모두 입력해 주세요.");
    comp = scwin.compMapping.BOND_TRANS_LCNS_ST_DT;
    comp.focus();
    return false;
  }
  if (!scwin.compareDateRange(payload.BOND_TRANS_LCNS_ST_DT, payload.BOND_TRANS_LCNS_END_DT)) {
    await $c.win.alert($p, "시작일자는 종료일자 이전이어야 합니다.");
    comp = scwin.compMapping.BOND_TRANS_LCNS_END_DT;
    comp.focus();
    return false;
  }
  return true;
};

// scwin.checkId = async function () {
//     var memberId = scwin.safe(input8.getValue()).trim().toLowerCase();
//     var response = null;

//     if (!memberId) {
//         await $c.win.alert("아이디를 입력한 뒤 중복확인을 진행해 주세요.");
//         return;
//     }

//     input8.setValue(memberId);

//     try {
//         response = await scwin.requestJson("/MemberControl", {
//             cmd: "checkId",
//             MBR_ID: memberId
//         });
//     } catch (error) {
//         scwin.showError("아이디 중복확인 중 오류가 발생했습니다.");
//         return;
//     }

//     if (!(response instanceof Array) || response.length === 0) {
//         scwin.showError("아이디 중복확인 결과를 확인할 수 없습니다.");
//         return;
//     }

//     $c.win.alert(response[0].resultMsg || "");

//     if (response[0].result === "0") {
//         scwin.state.checkedMemberId = memberId;
//         return;
//     }else{
//         input8.setValue("")
//     }

//     scwin.state.checkedMemberId = "";
// };

scwin.save = async function () {
  scwin.onUdcCompleted();
  debugger;
  var payload = scwin.collectPayload();
  var response = null;
  if (!(await scwin.validateCommon(payload))) {
    return;
  }
  if (scwin.state.mbrClsCd === "04" && !(await scwin.validateBroker(payload))) {
    return;
  }
  if (scwin.state.mbrClsCd === "05" && !(await scwin.validateDriver(payload))) {
    return;
  }
  try {
    response = await scwin.requestJson("/MemberControl", Object.assign({
      cmd: "saveJson"
    }, payload), "POST");
  } catch (error) {
    scwin.showError("회원가입 처리 중 오류가 발생했습니다.");
    return;
  }
  await $c.win.alert($p, response.message || "");
  if (response.success) {
    setTimeout(() => {
      scwin.moveFrame(response.nextUrl);
    }, 100); // 또는 50~100ms
  }
};
scwin.resetForm = async function () {
  $c.gus.cfInitObjects($p, table1, null);
  $c.gus.cfInitObjects($p, table2, null);
  $c.gus.cfInitObjects($p, table3, null);
  $c.gus.cfInitObjects($p, table4, null);
  PASSWD.setValue("");
  PASSWD_CHK.setValue("");
  // await scwin.moveFrame("/ui/member/member_reg.xml", {
  //     MBR_CLS_CD: scwin.state.mbrClsCd
  // });
};
scwin.closePage = async function () {
  await scwin.moveFrame("/ui/member/index_main.xml");
};
scwin.onpageload = async function () {
  // var params = Object.assign({}, scwin.getQueryParams(), $c.data.getParameter() || {});
  var frame = $p.getFrame();
  var params = frame.getUserData("paramData") || {};
  var response = null;
  scwin.state.mbrClsCd = scwin.safe(params.MBR_CLS_CD) || "01";
  scwin.state.checkedMemberId = "";
  scwin.applySectionVisibility();
  temp1.setInitDate("", "");
  try {
    response = await scwin.requestJson("/MemberControl", {
      cmd: "formJson",
      MBR_CLS_CD: scwin.state.mbrClsCd
    });
  } catch (error) {
    scwin.showError("회원가입 화면 초기화 중 오류가 발생했습니다.");
    return;
  }
  PASSWD.setValue("");
  PASSWD_CHK.setValue("");
  scwin.applyStaticCombo(response.combo || {});
};

// scwin.f_onlyNum = function(e){
//     var key = e.key;
//     var keyCode = e.keyCode;

//     var isNumber = (key >= "0" && key <= "9");

//     var isControl =
//         keyCode === 8 
//         || keyCode === 9 
//         || keyCode === 37
//         || keyCode === 38
//         || keyCode === 39
//         || keyCode === 40
//         || keyCode === 46;

//     if (!isNumber && !isControl) {
//         e.preventDefault();

//         $c.win.alert("숫자만 입력이 가능합니다.");
//     }
// };

scwin.f_onlyNum = async function (info) {
  await $c.win.alert($p, "숫자만 입력이 가능합니다.");
  let comp = $p.getComponentById(info.callerId);
  comp.focus();
};
scwin.checkId = async function () {
  var memberId = scwin.safe(input8.getValue()).trim().toLowerCase();
  var response = null;
  if (!memberId) {
    await $c.win.alert($p, "아이디를 입력한 뒤 중복확인을 진행해 주세요.");
    trigger1.focus();
    return;
  }
  input8.setValue(memberId);
  try {
    response = await scwin.requestJson("/MemberControl", {
      cmd: "checkId",
      MBR_ID: memberId
    });
  } catch (error) {
    await scwin.showError("아이디 중복확인 중 오류가 발생했습니다.");
    trigger1.focus();
    return;
  }
  if (!(response instanceof Array) || response.length === 0) {
    await scwin.showError("아이디 중복확인 결과를 확인할 수 없습니다.");
    trigger1.focus();
    return;
  }
  await $c.win.alert($p, response[0].resultMsg || "");
  if (response[0].result === "0") {
    scwin.state.checkedMemberId = memberId;
    trigger1.focus();
    return;
  } else {
    input8.setValue("");
  }
  scwin.state.checkedMemberId = "";
  trigger1.focus();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents nc_truck ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'사용자 정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회원 구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_mbr_cls_nm',label:'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화물 구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'BULK_YN_CHK',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'CNTR_YN_CHK',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'아이디',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group',style:''},E:[{T:1,N:'xf:input',A:{style:'width: 200px;',id:'input8',class:'',maxlength:'8',allowChar:'a-z0-9',nextTabID:'PASSWD'}},{T:1,N:'xf:trigger',A:{style:'',id:'trigger1',type:'button',class:'btn','ev:onclick':'scwin.checkId'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중복확인'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'(영문(소문자) 또는 영문/숫자 혼합 4~8자)',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'패스워드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:secret',A:{id:'PASSWD',style:'width: 200px;',maxlength:'8',allowChar:'a-z0-9'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(영문(소문자) 또는 영문/숫자 혼합 4~8자)',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'패스워드 확인',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:secret',A:{id:'PASSWD_CHK',style:'width: 200px;',maxlength:'8',allowChar:'a-z0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배차담당자 성명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'input11',style:'width: 200px;',maxlength:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'휴대전화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'input12',style:'width: 200px;',maxlength:'12',allowChar:'0-9','ev:oninputinvalid':'scwin.f_onlyNum',fireEventOnInvalid:'true'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(숫자만 입력 가능)',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'input13',style:'width: 200px;',maxlength:'12',allowChar:'0-9','ev:oninputinvalid':'scwin.f_onlyNum',fireEventOnInvalid:'true'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(숫자만 입력 가능)',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'팩스번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'input14',style:'width: 200px;',maxlength:'12',allowChar:'0-9','ev:oninputinvalid':'scwin.f_onlyNum',fireEventOnInvalid:'true'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(숫자만 입력 가능)',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'이메일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'input15',style:'',maxlength:'60'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청점소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox111',style:'width: 200px;',submenuSize:'fixed',chooseOptionLabel:'',ref:'',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약서 작성 및 기타 서류접수를 위한 지사를 선택해주세요',ref:'',style:'',userData2:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'사업자 정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table2',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'grp_biz',tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'TRANS_BIZ_YN_CHK',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송사업'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'INTCD_BIZ_YN_CHK',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송주선업'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'input17',style:'width: 403px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업자등록번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'width: 200px;',allOption:'',id:'selectbox2',class:'',direction:'auto',chooseOptionLabel:'사업자구분을 선택하세요',ref:'',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:input',A:{style:'width: 200px;',id:'input18',class:'',fireEventOnInvalid:'true','ev:oninputinvalid':'scwin.f_onlyNum',allowChar:'0-9'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대표자 성명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'input19',style:'width: 200px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업장 주소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'input20',style:'width: 70px;'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'trigger4',style:'',type:'button','ev:onclick':'scwin.openAddressLookup(\'BUSI\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'주소검색'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'input21',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'input22',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'우편물 수령지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'input23',style:'width: 70px;'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'trigger5',style:'',type:'button','ev:onclick':'scwin.openAddressLookup(\'MAIL\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'주소검색'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'checkbox2',ref:'',renderType:'checkboxgroup','ev:onviewchange':'scwin.copyBusinessToMail',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사업장 주소와 동일할 경우 체크하세요.'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'input24',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'input25',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'grp_broker_detail',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상세정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table3',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'5'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'보유차량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'차량을 선택하세요',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox4',ref:'',style:'width: 200px;',submenuSize:'fixed','ev:onchange':'scwin.onBrokerVehicleKindChange1',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'규격을 선택하세요',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox5',ref:'',style:'width: 200px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:input',A:{class:'',id:'input36',style:'width: 70px;'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'차량을 선택하세요',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox6',ref:'',style:'width: 200px;',submenuSize:'fixed','ev:onchange':'scwin.onBrokerVehicleKindChange2',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'규격을 선택하세요',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox7',ref:'',style:'width: 200px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:input',A:{class:'',id:'input37',style:'width: 70px;'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'차량을 선택하세요',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox8',ref:'',style:'width: 200px;',submenuSize:'fixed','ev:onchange':'scwin.onBrokerVehicleKindChange3',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'규격을 선택하세요',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox9',ref:'',style:'width: 200px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:input',A:{class:'',id:'input38',style:'width: 70px;'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'차량을 선택하세요',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox10',ref:'',style:'width: 200px;',submenuSize:'fixed','ev:onchange':'scwin.onBrokerVehicleKindChange4',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'규격을 선택하세요',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox11',ref:'',style:'width: 200px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:input',A:{class:'',id:'input39',style:'width: 70px;'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'차량을 선택하세요',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox12',ref:'',style:'width: 200px;',submenuSize:'fixed','ev:onchange':'scwin.onBrokerVehicleKindChange5',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'규격을 선택하세요',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox13',ref:'',style:'width: 200px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:input',A:{class:'',id:'input40',style:'width: 70px;'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선호 화종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox14',ref:'',style:'width: 200px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',chooseOptionLabel:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox15',ref:'',style:'width: 200px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',chooseOptionLabel:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox16',ref:'',style:'width: 200px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선호구간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'지역선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox17',ref:'',style:'width: 150px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',ref:'',style:'',userData2:''}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'지역선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox3',ref:'',style:'width: 150px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적재물배상 책임한도<br/>(자차)',ref:'',style:'',userData2:'',escape:'false'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 150px;',id:'input28',class:'tar',allowChar:'0-9'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'백만원',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'5'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유장비',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'장비분류선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox18',ref:'',style:'width:150px;',submenuSize:'fixed','ev:onchange':'scwin.onBrokerEqClassChange1',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'장비종류선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox19',ref:'',style:'width: 200px;',submenuSize:'fixed','ev:onchange':'scwin.onBrokerEqKindChange1',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'장비규격선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox20',ref:'',style:'width: 150px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:input',A:{class:'',id:'input42',style:'width: 70px;'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'장비분류선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox21',ref:'',style:'width:150px;',submenuSize:'fixed','ev:onchange':'scwin.onBrokerEqClassChange2',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'장비종류선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox22',ref:'',style:'width: 200px;',submenuSize:'fixed','ev:onchange':'scwin.onBrokerEqKindChange2',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'장비규격선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox23',ref:'',style:'width: 150px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:input',A:{class:'',id:'input43',style:'width: 70px;'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'장비분류선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox24',ref:'',style:'width:150px;',submenuSize:'fixed','ev:onchange':'scwin.onBrokerEqClassChange3',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'장비종류선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox25',ref:'',style:'width: 200px;',submenuSize:'fixed','ev:onchange':'scwin.onBrokerEqKindChange3',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'장비규격선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox26',ref:'',style:'width: 150px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:input',A:{class:'',id:'input44',style:'width: 70px;'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'장비분류선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox27',ref:'',style:'width:150px;',submenuSize:'fixed','ev:onchange':'scwin.onBrokerEqClassChange4',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'장비종류선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox28',ref:'',style:'width: 200px;',submenuSize:'fixed','ev:onchange':'scwin.onBrokerEqKindChange4',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'장비규격선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox29',ref:'',style:'width: 150px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:input',A:{class:'',id:'input45',style:'width: 70px;'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'장비분류선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox30',ref:'',style:'width:150px;',submenuSize:'fixed','ev:onchange':'scwin.onBrokerEqClassChange5',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'장비종류선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox31',ref:'',style:'width: 200px;',submenuSize:'fixed','ev:onchange':'scwin.onBrokerEqKindChange5',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'장비규격선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox32',ref:'',style:'width: 150px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:input',A:{class:'',id:'input46',style:'width: 70px;'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'4'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유거점',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'input32',style:'width: 70px;'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'trigger7',style:'',type:'button','ev:onclick':'scwin.openAddressLookup(\'BASE\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'주소검색'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'input33',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'input34',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'거점선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox33',ref:'',style:'width:150px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:input',A:{class:'',id:'input47',style:'width: 70px;','ev:oninputinvalid':'scwin.f_onlyNum',fireEventOnInvalid:'true',allowChar:'0-9'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'평',ref:'',style:'',userData2:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'grp_driver_detail',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상세정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table4',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'input63',style:'width: 200px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'차량을 선택하세요',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox67',ref:'',style:'width: 200px;',submenuSize:'fixed','ev:onchange':'scwin.onDriverVehicleKindChange',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'규격',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'규격을 선택하세요',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox68',ref:'',style:'width: 200px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보세운송면허기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'temp1',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'temp2',edToId:'temp3'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선호 화종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',chooseOptionLabel:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox46',ref:'',style:'width: 200px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',chooseOptionLabel:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox47',ref:'',style:'width: 200px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',chooseOptionLabel:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox48',ref:'',style:'width: 200px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선호구간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'지역선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox49',ref:'',style:'width: 150px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',ref:'',style:'',userData2:''}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'지역선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox50',ref:'',style:'width: 150px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'지역선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox61',ref:'',style:'width: 150px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',ref:'',style:'',userData2:''}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'지역선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox62',ref:'',style:'width: 150px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'지역선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox63',ref:'',style:'width: 150px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',ref:'',style:'',userData2:''}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'지역선택',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox64',ref:'',style:'width: 150px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선호 거리 구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',chooseOptionLabel:'차량을 선택하세요',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox151',ref:'',style:'width: 200px;',submenuSize:'fixed',visibleRowNum:'20',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'특이사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:textarea',A:{class:'',id:'textarea1',style:'height: 100px;'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.resetForm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.closePage'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})