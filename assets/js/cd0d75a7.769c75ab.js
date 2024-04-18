"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[8777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:3},l="3. \u5f00\u53d1\u673a\u5668\u4eba\u670d\u52a1",i={unversionedId:"explore/tutorials/stream/bot/python/build-bot",id:"explore/tutorials/stream/bot/python/build-bot",title:"3. \u5f00\u53d1\u673a\u5668\u4eba\u670d\u52a1",description:"\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u7528 Python \u5f00\u53d1\u4e00\u4e2a\u804a\u5929\u673a\u5668\u4eba\u670d\u52a1\uff0c\u5b9e\u73b0\u57fa\u672c\u7684\u4ecb\u7ecd\u548c\u53d1\u9001\u6d88\u606f\u80fd\u529b\u3002",source:"@site/docs/explore/tutorials/stream/bot/python/build-bot.md",sourceDirName:"explore/tutorials/stream/bot/python",slug:"/explore/tutorials/stream/bot/python/build-bot",permalink:"/developerpedia/docs/explore/tutorials/stream/bot/python/build-bot",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/explore/tutorials/stream/bot/python/build-bot.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. \u521b\u5efa\u673a\u5668\u4eba\u5e94\u7528",permalink:"/developerpedia/docs/explore/tutorials/stream/bot/python/create-bot"},next:{title:"4. \u4f53\u9a8c\u804a\u5929\u673a\u5668\u4eba",permalink:"/developerpedia/docs/explore/tutorials/stream/bot/python/test-bot"}},p={},s=[{value:"\u521b\u5efa Python \u5e94\u7528",id:"\u521b\u5efa-python-\u5e94\u7528",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u5f00\u53d1\u673a\u5668\u4eba\u670d\u52a1",id:"\u5f00\u53d1\u673a\u5668\u4eba\u670d\u52a1",level:2},{value:"\u8fd0\u884c\u673a\u5668\u4eba\u670d\u52a1",id:"\u8fd0\u884c\u673a\u5668\u4eba\u670d\u52a1",level:2},{value:"\u76f8\u5173\u94fe\u63a5",id:"\u76f8\u5173\u94fe\u63a5",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"3-\u5f00\u53d1\u673a\u5668\u4eba\u670d\u52a1"},"3. \u5f00\u53d1\u673a\u5668\u4eba\u670d\u52a1"),(0,o.kt)("p",null,"\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u7528 Python \u5f00\u53d1\u4e00\u4e2a\u804a\u5929\u673a\u5668\u4eba\u670d\u52a1\uff0c\u5b9e\u73b0\u57fa\u672c\u7684\u4ecb\u7ecd\u548c\u53d1\u9001\u6d88\u606f\u80fd\u529b\u3002"),(0,o.kt)("p",null,"\u672c\u6559\u7a0b\u7684\u5b8c\u6574\u4ee3\u7801\u53ef\u4ee5\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-dingtalk/dingtalk-tutorial-python"},"GitHub \u4ed3\u5e93"),"\u4e2d\u83b7\u53d6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u8df3\u8fc7\u672c\u6587\u4e2d\u6784\u5efa\u6b65\u9aa4\uff0c\u76f4\u63a5\u4ece GitHub \u4e2d clone \u76f8\u5173\u4ee3\u7801\u3002"),(0,o.kt)("h2",{id:"\u521b\u5efa-python-\u5e94\u7528"},"\u521b\u5efa Python \u5e94\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir bot_echo_text\ncd bot_echo_text\n")),(0,o.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"python3 -m pip install dingtalk-stream\n")),(0,o.kt)("h2",{id:"\u5f00\u53d1\u673a\u5668\u4eba\u670d\u52a1"},"\u5f00\u53d1\u673a\u5668\u4eba\u670d\u52a1"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"bot_echo_text")," \u76ee\u5f55\u4e2d\uff0c\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"echo_text.py")," \u6587\u4ef6\uff0c\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="echo_text.py" showLineNumbers',title:'"echo_text.py"',showLineNumbers:!0},"# !/usr/bin/env python\n\nimport argparse\nimport logging\nfrom dingtalk_stream import AckMessage\nimport dingtalk_stream\n\n\ndef setup_logger():\n    logger = logging.getLogger()\n    handler = logging.StreamHandler()\n    handler.setFormatter(\n        logging.Formatter('%(asctime)s %(name)-8s %(levelname)-8s %(message)s [%(filename)s:%(lineno)d]'))\n    logger.addHandler(handler)\n    logger.setLevel(logging.INFO)\n    return logger\n\n\ndef define_options():\n    parser = argparse.ArgumentParser()\n    parser.add_argument(\n        '--client_id', dest='client_id', required=True,\n        help='app_key or suite_key from https://open-dev.digntalk.com'\n    )\n    parser.add_argument(\n        '--client_secret', dest='client_secret', required=True,\n        help='app_secret or suite_secret from https://open-dev.digntalk.com'\n    )\n    options = parser.parse_args()\n    return options\n\n\nclass EchoTextHandler(dingtalk_stream.ChatbotHandler):\n    def __init__(self, logger: logging.Logger = None):\n        super(dingtalk_stream.ChatbotHandler, self).__init__()\n        if logger:\n            self.logger = logger\n\n    async def process(self, callback: dingtalk_stream.CallbackMessage):\n        incoming_message = dingtalk_stream.ChatbotMessage.from_dict(callback.data)\n        text = incoming_message.text.content.strip()\n        self.reply_text(text, incoming_message)\n        return AckMessage.STATUS_OK, 'OK'\n\ndef main():\n    logger = setup_logger()\n    options = define_options()\n\n    credential = dingtalk_stream.Credential(options.client_id, options.client_secret)\n    client = dingtalk_stream.DingTalkStreamClient(credential)\n    client.register_callback_handler(dingtalk_stream.chatbot.ChatbotMessage.TOPIC, EchoTextHandler(logger))\n    client.start_forever()\n\n\nif __name__ == '__main__':\n    main()\n")),(0,o.kt)("p",null,"\u4ee5\u4e0a\u4e0d\u8d85\u8fc7 60 \u884c\u7684\u4ee3\u7801\u5b9e\u73b0\u4e86\u8fd9\u4e9b\u80fd\u529b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570\u8bfb\u53d6 Client ID \u548c Client Secret \u9009\u9879"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7 Client ID \u548c Client Secret \u521b\u5efa Stream Client"),(0,o.kt)("li",{parentName:"ol"},"\u5728 Stream Client \u4e2d\u6ce8\u518c\u673a\u5668\u4eba\u6d88\u606f\u56de\u8c03\u65b9\u6cd5\uff0c\u5b9e\u73b0\u6d88\u606f\u63a5\u6536\u80fd\u529b"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u6d88\u606f\u56de\u8c03\u65b9\u6cd5\u4e2d\uff0c\u7b80\u5355 echo \u673a\u5668\u4eba\u6d88\u606f\u56de\u53bb\uff0c\u5b9e\u73b0\u6d88\u606f\u53d1\u9001(\u56de\u590d)\u80fd\u529b")),(0,o.kt)("h2",{id:"\u8fd0\u884c\u673a\u5668\u4eba\u670d\u52a1"},"\u8fd0\u884c\u673a\u5668\u4eba\u670d\u52a1"),(0,o.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u8fd0\u884c\u4f60\u7684\u673a\u5668\u4eba\u670d\u52a1\uff0c\u5f53\u770b\u5230\u8fd9\u6837\u7684\u65e5\u5fd7\u8f93\u51fa\u65f6\u5019\u8868\u793a\u8fd0\u884c\u6210\u529f ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO     endpoint is {'endpoint': 'wss://wss-....")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'python3 ./echo_text.py --client_id="your-client-id" --client_secret="your-client-secret"\n')),(0,o.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'\u52a1\u5fc5\u5c06\u4ee5\u4e0a\u547d\u4ee4\u4e2d"your-client-id"\u548c"your-client-secret"\u66ff\u6362\u6210\u5b9e\u9645\u7684\u503c\u540e\u518d\u8fd0\u884c\uff0c\u5426\u5219\u65e0\u6cd5\u6210\u529f\u5efa\u7acb\u8fde\u63a5\u3002Client ID \u548c Client Secret \u53ef\u4ee5\u901a\u8fc7',(0,o.kt)("a",{parentName:"p",href:"create-bot"},"\u6b65\u9aa4\u4e8c: \u521b\u5efa\u673a\u5668\u4eba\u5e94\u7528\u6587\u6863"),"\u83b7\u53d6\u3002")),(0,o.kt)("p",null,"\u81f3\u6b64\uff0c\u4f60\u5df2\u6210\u529f\u5b8c\u6210\u673a\u5668\u4eba\u670d\u52a1\u5f00\u53d1\u548c\u90e8\u7f72\u3002\u63a5\u4e0b\u6765\u53ef\u4ee5\u4f53\u9a8c\u81ea\u5df1\u5f00\u53d1\u7684\u673a\u5668\u4eba\u670d\u52a1\u4e86\u3002"),(0,o.kt)("h2",{id:"\u76f8\u5173\u94fe\u63a5"},"\u76f8\u5173\u94fe\u63a5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/open-dingtalk/dingtalk-tutorial-python"},"GitHub \u4e0a\u793a\u4f8b\u4ee3\u7801"))))}u.isMDXComponent=!0}}]);