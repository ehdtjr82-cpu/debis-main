// DSQLErrorCode.js
window.DSQLErrorCode = window.DSQLErrorCode || {};
var DSQLErrorCode = window.DSQLErrorCode;

DSQLErrorCode.DUPLICATE = 1;      // 중복
DSQLErrorCode.RI_PARENT = 2291;   // 부모 참조 무결성
DSQLErrorCode.RI_CHILD = 2292;    // 자식 참조 무결성
DSQLErrorCode.UPDATE_FAIL = -1;   // 업데이트 실패
DSQLErrorCode.DELETE_FAIL = -2;   // 삭제 실패

// 사용 예시
// console.log(DSQLErrorCode.DUPLICATE); // 1
