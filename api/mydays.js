exports.data = function(req, res) {
  var moment = require('moment');    
  var yyyy = moment().format("YYYY");
  var emp_cd = req.body.action.params.sys_id;
    
    console.log(emp_cd);
    var result_text = "";

    sql.connect(config).then( pool => {
      pool.request()
      .input('work_yy', yyyy)
      .input('detp_cd', '%')
      .input('emp_cd', emp_cd)
      .input('s_dept_cd', '%')
      .execute('SPPS_PS120S01')
      .then(result => {
        var len = result.recordset.length;
        if(len === 0){
          result_text = "해당 사원이 존재하지 않습니다.";
        }
        else{
          result_text = result.recordset[0] + "\n";
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