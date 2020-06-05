exports.data = function(req, res) {
  
    console.log(req.body);
    const user_name = req.body.action.params.sys_person_name;
    var result_text = "";

    sql.connect(config).then( pool => {
      pool.request()
      .input('EMP_NM', user_name)
      .execute('EMPINFO')
      .then(result => {
        var len = result.recordset.length;
        if(len === 0){
          result_text = user_name + "님은 유영제약 사람이 아닙니다.";
        }
        else{
          for(var i=0; i< len; i++){
            result_text += result.recordset[i].EMP_NM + "님은 " + result.recordset[i].H_DEPT_NM + " " + result.recordset[i].DEPT_NM + " " + result.recordset[i].PART_NM + " 입니다.<br>";
          }
        }

        const responseBody = {
          version: "2.0",
          template: {
            outputs: [
              {
                simpleText: {
                  text: result_text
                }
              }
            ]
          }
        };

        res.status(200).send(responseBody);
        res.end();
      })
      .catch(err => {
          console.log(err.message);
      })
    });
  };