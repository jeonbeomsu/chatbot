exports.data = function(req, res) {
  var moment = require('moment');    
  var yyyy = moment().format("YYYY");
  var emp_cd = req.body.action.params.sys_id;
    
    console.log(emp_cd);
    var result_text = "";

    sql.connect(config).then( pool => {
      pool.request()
      .input('work_yy', yyyy)
      .input('dept_cd', '%')
      .input('emp_cd', emp_cd)
      .input('s_dept_cd', '%')
      .execute('SPPS_PS120S01')
      .then(result => {
        var len = result.recordset.length;
        if(len === 0){
          result_text = "해당 사원이 존재하지 않습니다.";
        }
        else{
          result_text += "발생연차(" + result.recordset[0].cnt + ") + 선사용(" + result.recordset[0].PRE_OVER_CNT + ")\n" 
          result_text += "= 사용가능(" + result.recordset[0].avail_cnt + ")\n";
          result_text += "------- 사용연차 List -------\n"
          if(result.recordset[0].rest_cnt_01.len !== 0){
            result_text += result.recordset[0].rest_cnt_01 + ' ' + result.recordset[0].rest_cnt_02 + ' ' + result.recordset[0].rest_cnt_03 + ' ' 
                        + result.recordset[0].rest_cnt_04 + ' ' + result.recordset[0].rest_cnt_05 + "\n"
          }
          if(result.recordset[0].rest_cnt_06.len !== 0){
            result_text += result.recordset[0].rest_cnt_06 + ' ' + result.recordset[0].rest_cnt_07 + ' ' + result.recordset[0].rest_cnt_08 + ' ' 
                        + result.recordset[0].rest_cnt_09 + ' ' + result.recordset[0].rest_cnt_10 + "\n"
          }
          if(result.recordset[0].rest_cnt_11.len !== 0){
            result_text += result.recordset[0].rest_cnt_11 + ' ' + result.recordset[0].rest_cnt_12 + ' ' + result.recordset[0].rest_cnt_13 + ' ' 
                        + result.recordset[0].rest_cnt_14 + ' ' + result.recordset[0].rest_cnt_15 + "\n"
          }
          if(result.recordset[0].rest_cnt_16.len !== 0){
            result_text += result.recordset[0].rest_cnt_16 + ' ' + result.recordset[0].rest_cnt_17 + ' ' + result.recordset[0].rest_cnt_18 + ' ' 
                        + result.recordset[0].rest_cnt_19 + ' ' + result.recordset[0].rest_cnt_20 + "\n"
          }
          if(result.recordset[0].rest_cnt_21.len !== 0){
            result_text += result.recordset[0].rest_cnt_21 + ' ' + result.recordset[0].rest_cnt_22 + ' ' + result.recordset[0].rest_cnt_23 + ' ' 
                        + result.recordset[0].rest_cnt_24 + ' ' + result.recordset[0].rest_cnt_25 + "\n"
          }
          if(result.recordset[0].rest_cnt_26.len !== 0){
            result_text += result.recordset[0].rest_cnt_26 + ' ' + result.recordset[0].rest_cnt_27 + ' ' + result.recordset[0].rest_cnt_28 + ' ' 
                        + result.recordset[0].rest_cnt_29 + ' ' + result.recordset[0].rest_cnt_30 + "\n"
          }
          result_text += "---------------------------\n"
          
          result_text += "사용가능연차(" + result.recordset[0].avail_cnt + ") + 사용연차(" + result.recordset[0].use_cnt + ")\n" 
          result_text += "= 잔여연차(" + result.recordset[0].jan_cnt + ")\n";

          
          console.log(result.recordset[0].rest_cnt_26.len);
        }

        const responseBody = {
          version: "2.0",
          template: {
            outputs: [
              {
                "simpleText": {
                  "text": result_text
                }
              }
            ],
            quickReplies: [
              {
                "label": "홈",
                "action": "block",
                "messageText": "홈",
                "blockId": req.body.userRequest.block.id
              },
              {
                "label": "다시 검색",
                "action": "block",
                "messageText": "연차 조회",
                "blockId": req.body.userRequest.block.id
              }
            ]
          }
        };

        res.status(200).send(responseBody);
        sql.close();
      })
      .catch(err => {
          console.log(err.message);
      })
    });
  };