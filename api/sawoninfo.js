exports.data = function(req, res) {
    var user_name = req.body.action.params.sys_person_name;
    console.log(req.body.action.params.sys_person_name);

    var result_text = "";
    var len = 0;

    var buttons = new Array();
    var button = new Object();

    sql.connect(config).then( pool => {
      pool.request()
      .input('EMP_NM', user_name)
      .execute('EMPINFO')
      .then(result => {
        len = result.recordset.length;
        if(len === 0){
          result_text = user_name + "님은 유영제약 사람이 아닙니다.";
        }
        else{
          result_text = "총 " + len + "명의 직원이 검색되었습니다."
          for(var i=0; i< len; i++){
            button = new Object();
            button.action = "webLink";
            button.label = result.recordset[i].DEPT_NM + "/" + result.recordset[i].EMP_NM;
            button.webLinkUrl = "http://gw.yypharm.co.kr/_CMON/CMONUserInfo.aspx?userid=" + result.recordset[i].EMP_CD;
            buttons.push(button);
          }
        }

        const responseBody = {
          version: "2.0",
          template: {
            outputs: [
              {
                "basicCard": {
                  "title": result_text,
                  "description": "최대 3명의 동명 직원만 조회됩니다.",
                  "social": {
                    "like": 1238,
                    "comment": 8,
                    "share": 780
                  },
                  "buttons": buttons
                }
              }
            ],
            quickReplies: [
              {
                "label": "다시 검색",
                "action": "block",
                "messageText": "사원 정보 조회",
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