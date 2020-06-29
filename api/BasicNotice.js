exports.data = function(req, res) {
  console.log(req.body);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          "basicCard": {
            "title": "공지사항",
            "description": "유영제약의 공지사항을 한눈에 볼 수 있는 메뉴입니다.",
            "thumbnail": {
              "imageUrl": domain + "images/Notice/notice.jpg",
            },
            "profile": {
              "imageUrl": "",
              "nickname": "유영공지"
            },
            "social": {
              "like": 1238,
              "comment": 8,
              "share": 780
            },
            "buttons": [
              {
                "action":  "osbLink",
                "label": "공지 확인하기 》",
                "osLink": {
                  "mobile" : "http://mgw.yypharm.co.kr/hotnews"
                }
              }
            ]
          }
        }
      ],
      quickReplies: [
        {
          "label": "이전",
          "action": "message",
          "messageText": "시작"
        }
      ]
    }
  };

  res.status(200).send(responseBody);
};