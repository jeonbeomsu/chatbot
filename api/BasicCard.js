exports.data = function(req, res) {
  console.log(req.body);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          "basicCard": {
            "title": "유영상자",
            "description": "유영상자 안에는 뭐가 있을까?",
            "thumbnail": {
              "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
            },
            "profile": {
              "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4BJ9LU4Ikr_EvZLmijfcjzQKMRCJ2bO3A8SVKNuQ78zu2KOqM",
              "nickname": "보물상자"
            },
            "social": {
              "like": 1238,
              "comment": 8,
              "share": 780
            },
            "buttons": [
              {
                "action": "message",
                "label": "시작(메시지형)",
                "messageText": "시작"
              },
              {
                "action":  "webLink",
                "label": "홈페이지(웹링크형)",
                "webLinkUrl": "http://www.yypharm.co.kr/"
              }
            ]
          }
        },
        {
          "quickreplies": {
            "label": "이전",
            "action": "message",
            "messageText": "시작"
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
};