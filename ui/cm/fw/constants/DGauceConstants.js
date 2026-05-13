// DGauceConstants.js
window.DGauceConstants = window.DGauceConstants || {};
var DGauceConstants = window.DGauceConstants;

/**
 * GauceDataRow Job Type (GauceDataRow 덤프 값 기준)
 */
DGauceConstants.TB_JOB_INIT   = -1;  // 초기값
DGauceConstants.TB_JOB_NORMAL = 1;   // Select
DGauceConstants.TB_JOB_INSERT = 2;   // Insert
DGauceConstants.TB_JOB_UPDATE = 3;   // Update
DGauceConstants.TB_JOB_DELETE = 4;   // Delete

/**
 * Date / Time Pattern
 */
DGauceConstants.PATTERN_DATE      = "yyyyMMdd";
DGauceConstants.PATTERN_TIME      = "HHmmss";
DGauceConstants.PATTERN_TIMESTAMP = "yyyyMMddHHmmss";

/**
 * GauceDataColumn Type
 * (이건 GauceDataColumn 쪽 값도 덤프/소스 확인해서 맞추는 게 안전)
 */
DGauceConstants.TB_NORMAL = 0;
DGauceConstants.TB_KEY    = 1;

// 필요하면 잠금
// Object.freeze(DGauceConstants);
