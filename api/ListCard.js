// 전역 변수


exports.data = function(req, res) {
    console.log(req.body);
  
    const responseBody = {
      version: "2.0",
      template: {
        outputs: [
          {
            "listCard": {
              "header": {
                "title": "유영제약 제품 LIST",
                "imageUrl": "http://18.223.119.113:3000/images/ListCard/list_title.jpg",
              },
              "items": [
                {
                  "title": "디바비바 미디움",
                  "description": "리도카인이 포함된 가교 히알루론산과 히알루론산을 피하에 주입하여 물리적인 수복을 통해 성인의 중간(moderate)에서 깊은(severe) 코입술 주름(nasolabial fold)을 일시적으로 개선하기 위해 사용",
                  "imageUrl": "http://18.223.119.113:3000/images/ListCard/diva_m.jpg",
                  "link": {
                    "web": "http://www.yypharm.co.kr/product/product06_detail.asp?c_code1=&c_code2=&pro_code=FB000573&prosort=&block=0&GoTopage=1"
                  }
                },
                {
                  "title": "디바비바 소프트",
                  "description": "리도카인이 포함된 가교 히알루론산과 히알루론산을 피하에 주입하여 물리적인 수복을 통해 성인의 중간(moderate)에서 깊은(severe) 코입술 주름(nasolabial fold)을 일시적으로 개선하기 위해 사용",
                  "imageUrl": "http://18.223.119.113:3000/images/ListCard/diva_s.jpg",
                  "link": {
                    "web": "http://www.yypharm.co.kr/product/product06_detail.asp?c_code1=&c_code2=&pro_code=FB000693&prosort=&block=0&GoTopage=1"
                  }
                },
                {
                  "title": "디바비바 하드",
                  "description": "리도카인이 포함된 가교 히알루론산과 히알루론산을 피하에 주입하여 물리적인 수복을 통해 성인의 중간(moderate)에서 깊은(severe) 코입술 주름(nasolabial fold)을 일시적으로 개선하기 위해 사용",
                  "imageUrl": "http://18.223.119.113:3000/images/ListCard/diva_h.jpg",
                  "link": {
                    "web": "http://www.yypharm.co.kr/product/product06_detail.asp?c_code1=&c_code2=&pro_code=FB000443&prosort=&block=0&GoTopage=1"
                  }
                }
              ],
              "buttons": [
                {
                  "label": "제품 더 구경하기",
                  "action": "webLink",
                  "webLinkUrl": "http://www.yypharm.co.kr/product/product03.asp"
                }
              ]
            }
          }
        ]
      }
    };
  
    res.status(200).send(responseBody);
  };