exports.data = function(req, res) {
    var temp = '';
    var yyyy = ''; 
    
    var moment = require('moment');

    if (req.body.action.params.sys_date_period === undefined ){
      yyyy = moment().format("YYYY");  
    }
    else{
      temp = JSON.parse(req.body.action.params.sys_date_period);
      yyyy = temp.to.year;
    }

    var type = '';

    if (req.body.action.params.cal_type === '본사') {
      type = 10;
    }else{
      type = 20;
    }
    console.log(yyyy);
    console.log(type);

    var result_text = "";
    var query     = "SELECT CONVERT(VARCHAR(10),CONVERT(DATE, CALYMD),23) + ' : ' ";
                query = query + "+ CASE CALNO ";
                query = query + "WHEN '03' THEN '국경일'		+ REPLICATE(' ', 7 - LEN('국경일')) ";
                query = query + "WHEN '04' THEN '창립기념일' + REPLICATE(' ', 7 - LEN('창립기념일')) ";
                query = query + "WHEN '05' THEN '설' + REPLICATE(' ', 7 - LEN('설')) ";
                query = query + "WHEN '06' THEN '추석' + REPLICATE(' ', 7 - LEN('추석')) ";
                query = query + "WHEN '07' THEN '근로자의날' + REPLICATE(' ', 7 - LEN('근로자의날')) ";
                query = query + "WHEN '08' THEN '비타민데이' + REPLICATE(' ', 7 - LEN('비타민데이')) ";
                query = query + "WHEN '09' THEN '하기휴가' + REPLICATE(' ', 7 - LEN('하기휴가')) END AS DAY_NM ";
                query = query + "FROM PS102M01 WHERE CALYMD LIKE @CALYMD +'%' AND CALTYPE = @CAL_TYPE AND CALNO IN ('03','04','05','06','07','08','09') ORDER BY CALYMD ";

    sql.connect(config).then( pool => {
      pool.request()
      .input('CALYMD', yyyy)
      .input('CAL_TYPE', type)
      .query(query)
      .then(result => {
        var len = result.recordset.length;
        if(len === 0){
          result_text = "검색되는 휴일이 없습니다.";
        }
        else{
          result_text = '◆ ' + yyyy + '년 휴일 ◆\n';
          for(var i=0; i< len; i++){
            result_text += result.recordset[i].DAY_NM  + "\n";
          }
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
                "messageText": "공휴일",
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