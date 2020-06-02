const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();

app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', apiRouter);

apiRouter.post('/sayHello', function(req, res) {
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
});

apiRouter.post('/sawoninfo', function(req, res) {
  //const user_name = req.body.action.params.user_name;
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
});

apiRouter.post('/BasicCard', function(req, res) {
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
                "label": "열어보기(메시지형)",
                "messageText": "시작"
              },
              {
                "action":  "webLink",
                "label": "구경하기(웹링크형)",
                "webLinkUrl": "https://e.kakao.com/t/hello-ryan"
              }
            ]
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

apiRouter.post('/ListCard', function(req, res) {
  console.log(req.body);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          "listCard": {
            "header": {
              "title": "유영제약 Lost Card Test",
              "imageUrl": "http://k.kakaocdn.net/dn/xsBdT/btqqIzbK4Hc/F39JI8XNVDMP9jPvoVdxl1/2x1.jpg"
            },
            "items": [
              {
                "title": "YY 챗봇",
                "description": "새로운 AI의 내일과 일상의 변화",
                "imageUrl": "http://k.kakaocdn.net/dn/APR96/btqqH7zLanY/kD5mIPX7TdD2NAxgP29cC0/1x1.jpg",
                "link": {
                  "web": "http://www.yypharm.co.kr/"
                }
              },
              {
                "title": "YY 타이틀 2",
                "description": "유영 채널 챗봇 만들기",
                "imageUrl": "http://k.kakaocdn.net/dn/N4Epz/btqqHCfF5II/a3kMRckYml1NLPEo7nqTmK/1x1.jpg",
                "link": {
                  "web": "http://www.yypharm.co.kr/"
                }
              },
              {
                "title": "YY 타이틀 3",
                "description": "~~~~~ 신청하기",
                "imageUrl": "http://k.kakaocdn.net/dn/bE8AKO/btqqFHI6vDQ/mWZGNbLIOlTv3oVF1gzXKK/1x1.jpg",
                "link": {
                  "web": "http://www.yypharm.co.kr/"
                }
              }
            ],
            "buttons": [
              {
                "label": "구경가기",
                "action": "webLink",
                "webLinkUrl": "http://www.yypharm.co.kr/"
              }
            ]
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

apiRouter.post('/Carousel', function(req, res) {
  console.log(req.body);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          "carousel": {
            "type": "basicCard",
            "items": [
              {
                "title": "보물상자",
                "description": "보물상자 안에는 뭐가 있을까",
                "thumbnail": {
                  "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
                },
                "buttons": [
                  {
                    "action": "message",
                    "label": "열어보기",
                    "messageText": "짜잔! 우리가 찾던 보물입니다"
                  },
                  {
                    "action":  "webLink",
                    "label": "구경하기",
                    "webLinkUrl": "https://e.kakao.com/t/hello-ryan"
                  }
                ]
              },
              {
                "title": "보물상자2",
                "description": "보물상자2 안에는 뭐가 있을까",
                "thumbnail": {
                  "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
                },
                "buttons": [
                  {
                    "action": "message",
                    "label": "열어보기",
                    "messageText": "짜잔! 우리가 찾던 보물입니다"
                  },
                  {
                    "action":  "webLink",
                    "label": "구경하기",
                    "webLinkUrl": "https://e.kakao.com/t/hello-ryan"
                  }
                ]
              },
              {
                "title": "보물상자3",
                "description": "보물상자3 안에는 뭐가 있을까",
                "thumbnail": {
                  "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
                },
                "buttons": [
                  {
                    "action": "message",
                    "label": "열어보기",
                    "messageText": "짜잔! 우리가 찾던 보물입니다"
                  },
                  {
                    "action":  "webLink",
                    "label": "구경하기",
                    "webLinkUrl": "https://e.kakao.com/t/hello-ryan"
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

app.listen(3000, function() {
  console.log('Example skill server listening on port 3000!');
});