﻿$axure.loadCurrentPage({
  "url":"我的车辆.html",
  "generationDate":new Date(1503556108043.21),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable",
"page"],
  "page":{
    "packageId":"531c3ffedc7a4df1984a15dc55b73145",
    "type":"Axure:Page",
    "name":"我的车辆",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"应用字体",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"ce9ed2cb30cf4411bf3207bc5f35d673",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "size":{
              "width":375,
              "height":667}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"cb749b385b0c4acebfb0fd252bd3fc7f",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "size":{
                  "width":375,
                  "height":667}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/我的车辆/u0.png"}},
{
          "id":"7b893b1075084ef998a62b930ac3076a",
          "label":"返回",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0x333333,
              "opacity":0},
            "opacity":"0",
            "fill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "location":{
              "x":0,
              "y":20},
            "size":{
              "width":70,
              "height":40},
            "borderFill":{
              "fillType":"solid",
              "color":0x797979}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"b0aa26d30eb14744afaeff85065bf949",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0x333333,
                  "opacity":0},
                "opacity":"0",
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "location":{
                  "x":0,
                  "y":20},
                "size":{
                  "width":70,
                  "height":40},
                "borderFill":{
                  "fillType":"solid",
                  "color":0x797979}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setFunction",
                      "description":"设置 值于 page = &quot;111&quot;",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[{
                            "exprType":"fcall",
                            "functionName":"SetGlobalVariableValue",
                            "arguments":[{
                                "exprType":"globalVariableLiteral",
                                "variableName":"page"},
{
                                "exprType":"stringLiteral",
                                "value":"111",
                                "stos":[]}]}]}},
{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 首页",
                      "target":{
                        "targetType":"page",
                        "url":"首页.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"5eb62fefdc094a71b605b68b773fc46f",
          "label":"绑定",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0x333333,
              "opacity":0},
            "opacity":"0",
            "fill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "location":{
              "x":10,
              "y":390},
            "size":{
              "width":350,
              "height":50},
            "borderFill":{
              "fillType":"solid",
              "color":0x797979}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"cc814408c04f456d949c23bfbf577d4c",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0x333333,
                  "opacity":0},
                "opacity":"0",
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "location":{
                  "x":10,
                  "y":390},
                "size":{
                  "width":350,
                  "height":50},
                "borderFill":{
                  "fillType":"solid",
                  "color":0x797979}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 车辆页面",
                      "target":{
                        "targetType":"page",
                        "url":"车辆页面.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}}]}},
  "masters":{
},
  "objectPaths":{
    "ce9ed2cb30cf4411bf3207bc5f35d673":{
      "scriptId":"u0"},
    "cb749b385b0c4acebfb0fd252bd3fc7f":{
      "scriptId":"u1"},
    "7b893b1075084ef998a62b930ac3076a":{
      "scriptId":"u2"},
    "b0aa26d30eb14744afaeff85065bf949":{
      "scriptId":"u3"},
    "5eb62fefdc094a71b605b68b773fc46f":{
      "scriptId":"u4"},
    "cc814408c04f456d949c23bfbf577d4c":{
      "scriptId":"u5"}}});