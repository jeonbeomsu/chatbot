exports.data = function(req, res) {

  var date = JSON.parse(req.body.action.params.sys_plugin_date);
  var res = req.body.action.params.sys_res;

  console.log(date);


  var result_text = "";
  var query     = "SELECT D.PART_NM + REPLICATE(' ', 8 - LEN(D.PART_NM)) ";
  query = query + "+ CONVERT(VARCHAR(8),CONVERT(DATETIME, A.ST_DT),108) ";
  query = query + "+ ' ~ ' + CONVERT(VARCHAR(8),CONVERT(DATETIME, A.LT_DT),108) + ' ' ";
  query = query + "+ RTRIM(C.EMP_NM) + REPLICATE(' ', 5 - LEN(RTRIM(C.EMP_NM))) + B.DEPT_NM AS RES ";
  query = query + "FROM SY200H01 A JOIN CM003M01 B ON A.RES_DEPT_CD=B.DEPT_CD ";
  query = query + "JOIN CM004M01 C ON A.RES_EMP_CD=C.EMP_CD ";
  query = query + "LEFT JOIN (SELECT part_cd, part_nm ";
  query = query + "FROM   cm012m01 ";
  query = query + "WHERE major_cd='GW21' ";
  query = query + ") D ON A.RES_CD = D.PART_CD ";
  query = query + "WHERE A.ST_DT BETWEEN '2020-07-02' AND '2020-07-03' ";
  query = query + "AND D.PART_NM = @PART_NM ";

  sql.connect(config).then( pool => {
    pool.request()
    .input('PART_NM', res)
    .query(query)
    .then(result => {
      var len = result.recordset.length;
      if(len === 0){
        result_text = "해당 일자에 예약된 자원이 없습니다.";
      }
      else{
        result_text = '◆ 예약된 자원 List ◆\n';
        for(var i=0; i< len; i++){
          result_text += result.recordset[i].RES  + "\n";
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
              "messageText": yyyy + "자원예약 조회",
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