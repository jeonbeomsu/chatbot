exports.data = function(req, res) {
    const responseBody = {
      version: "2.0",
      template: {
        outputs: [
          {
            simpleText: {
              text: "This is a message received from the AWS EC2 server."
            }
          }
        ]
      }
    };
  
    res.status(200).send(responseBody);
};