exports.data = function(req, res) {
    const user_name = req.body.action.params.sys_person_name;
    console.log(req.body);
  
    const responseBody = {
      version: "2.0",
      template: {
        outputs: [
          {
            simpleText: {
              text: user_name + " 님은 유영제약 사람입니다."
            }
          }
        ]
      }
    };
  
    res.status(200).send(responseBody);
  };