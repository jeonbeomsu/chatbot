exports.data = function(req, res) {
  console.log(req.body);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          "basicCard": {
            "title": "",
            "description": "유영제약의 공지사항을 한 눈에 볼 수 있는 메뉴입니다.",
            "thumbnail": {
              "imageUrl": domain + "images/Notice/notice.jpg",
            },
            "profile": {
              "imageUrl": "",
              "nickname": "유영제약공지사항"
            },
            "social": {
              "like": 1238,
              "comment": 8,
              "share": 780
            },
            "buttons": [
              {
                "action": "osLink",
                "label": "공지사항 확인하기 》",
                "osLink": ""
              },
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