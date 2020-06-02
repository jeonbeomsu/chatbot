const domain = "http://18.223.119.113:3000/";

exports.data =  function(req, res) {
    const responseBody = {
      version: "2.0",
      template: {
        outputs: [
          {
            "carousel": {
              "type": "basicCard",
              "items": [
                {
                  "title": "디바비바 미디움",
                  "description": "1000원",
                  "thumbnail": {
                    "imageUrl": domain + "images/ListCard/diva_m.jpg"
                  },
                  "buttons": [
                    {
                      "label": "구매하기",
                      "action": "webLink",
                      "webLinkUrl": "http://www.yypharm.co.kr/product/product04.asp"
                    },
                  ]
                },
                {
                  "title": "디바비바 소프트",
                  "description": "500원",
                  "thumbnail": {
                    "imageUrl": domain + "images/ListCard/diva_s.jpg"
                  },
                  "buttons": [
                    {
                      "action":  "webLink",
                      "label": "구매하기",
                      "webLinkUrl": "http://www.yypharm.co.kr/product/product04.asp"
                    }
                  ]
                },
                {
                  "title": "디바비바 하드",
                  "description": "2000원",
                  "thumbnail": {
                    "imageUrl": domain + "images/ListCard/diva_h.jpg"
                  },
                  "buttons": [
                    {
                      "action":  "webLink",
                      "label": "구매하기",
                      "webLinkUrl": "http://www.yypharm.co.kr/product/product04.asp"
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
  };