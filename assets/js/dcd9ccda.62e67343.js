"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8958],{82235:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var s=e(85893),l=e(11151);const t={},i="\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f",a={id:"python/use-regular-expressions",title:"\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f",description:'Python \u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u6a21\u5757\u540d\u5b57\u4e3a "re"\uff0c\u4e5f\u5c31\u662f "regular expression" \u7684\u9996\u5b57\u6bcd\u7f29\u5199\u3002\u5728 Python \u4e2d\u9700\u8981\u9996\u5148\u5bfc\u5165\u8fd9\u4e2a\u6a21\u5757\u518d\u8fdb\u884c\u4f7f\u7528\u3002\u5bfc\u5165\u7684\u8bed\u53e5\u4e3a\uff1a',source:"@site/docs/09-python/05-use-regular-expressions.md",sourceDirName:"09-python",slug:"/python/use-regular-expressions",permalink:"/docs/python/use-regular-expressions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u57fa\u672c\u7b26\u53f7",permalink:"/docs/python/basic-symbols-of-regular-expressions"},next:{title:"\u7b80\u5355\u7f51\u9875\u722c\u866b",permalink:"/docs/python/simple-web-crawler"}},o={},c=[{value:"findall()",id:"findall",level:2},{value:"search()",id:"search",level:2},{value:"\u4f7f\u7528\u6280\u5de7",id:"\u4f7f\u7528\u6280\u5de7",level:2},{value:"\u4e0d\u9700\u8981 compile",id:"\u4e0d\u9700\u8981-compile",level:3},{value:"\u5148\u6293\u5927\u540e\u6293\u5c0f",id:"\u5148\u6293\u5927\u540e\u6293\u5c0f",level:3},{value:"\u62ec\u53f7\u5185\u548c\u62ec\u53f7\u5916",id:"\u62ec\u53f7\u5185\u548c\u62ec\u53f7\u5916",level:3}];function p(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f",children:"\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f"}),"\n",(0,s.jsx)(r.p,{children:'Python \u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u6a21\u5757\u540d\u5b57\u4e3a "re"\uff0c\u4e5f\u5c31\u662f "regular expression" \u7684\u9996\u5b57\u6bcd\u7f29\u5199\u3002\u5728 Python \u4e2d\u9700\u8981\u9996\u5148\u5bfc\u5165\u8fd9\u4e2a\u6a21\u5757\u518d\u8fdb\u884c\u4f7f\u7528\u3002\u5bfc\u5165\u7684\u8bed\u53e5\u4e3a\uff1a'}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"import re\n"})}),"\n",(0,s.jsx)(r.h2,{id:"findall",children:"findall()"}),"\n",(0,s.jsx)(r.p,{children:"Python \u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u6a21\u5757\u5305\u542b\u4e00\u4e2a findall \u65b9\u6cd5\uff0c\u5b83\u80fd\u591f\u4ee5\u5217\u8868\u7684\u5f62\u5f0f\u8fd4\u56de\u6240\u6709\u6ee1\u8db3\u8981\u6c42\u7684\u5b57\u7b26\u4e32\u3002findall \u7684\u51fd\u6570\u539f\u578b\u4e3a\uff1a"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"re.findall(pattern, string, flags = 0)\n"})}),"\n",(0,s.jsx)(r.p,{children:"pattern \u8868\u793a\u6b63\u5219\u8868\u8fbe\u5f0f\uff0cstring \u8868\u793a\u539f\u6765\u7684\u5b57\u7b26\u4e32\uff0cflags \u8868\u793a\u4e00\u4e9b\u7279\u6b8a\u529f\u80fd\u7684\u6807\u5fd7\u3002"}),"\n",(0,s.jsx)(r.p,{children:"findall \u7684\u7ed3\u679c\u662f\u4e00\u4e2a\u5217\u8868\uff0c\u5305\u542b\u4e86\u6240\u6709\u7684\u5339\u914d\u5230\u7684\u7ed3\u679c\u3002\u5982\u679c\u6ca1\u6709\u5339\u914d\u5230\u7ed3\u679c\uff0c\u5c31\u4f1a\u8fd4\u56de\u7a7a\u5217\u8868\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"import re\r\n\r\ncontent = '\u6211\u7684\u5fae\u535a\u5bc6\u7801\u662f: 1234567, QQ \u5bc6\u7801\u662f: 33445566, \u94f6\u884c\u5361\u5bc6\u7801\u662f: 888888, GitHub \u5bc6\u7801\u662f: 999abc999, \u5e2e\u6211\u8bb0\u4f4f\u5b83\u4eec'\r\n\r\npassworld_list = re.findall('\u5bc6\u7801\u662f: (.*?),', content)\r\nname_list = re.findall('\u59d3\u540d\u662f: (.*?),', content)\r\n\r\nprint(passworld_list)\r\nprint(name_list)\n"})}),"\n",(0,s.jsx)(r.p,{children:'\u5f53\u9700\u8981\u63d0\u53d6\u67d0\u4e9b\u5185\u5bb9\u7684\u65f6\u5019\uff0c\u4f7f\u7528\u5c0f\u62ec\u53f7\u5c06\u8fd9\u4e9b\u5185\u5bb9\u62ec\u8d77\u6765\uff0c\u8fd9\u6837\u624d\u4e0d\u4f1a\u5f97\u5230\u4e0d\u76f8\u5e72\u7684\u4fe1\u606f\u3002\u5982\u679c\u5305\u542b\u591a\u4e2a "(.*? )" \u600e\u4e48\u8fd4\u56de\u5462\uff1f\u8fd4\u56de\u7684\u4ecd\u7136\u662f\u4e00\u4e2a\u5217\u8868\uff0c\u4f46\u662f\u5217\u8868\u91cc\u9762\u7684\u5143\u7d20\u53d8\u4e3a\u4e86\u5143\u7ec4\u3002\u6bd4\u5982\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u5143\u7ec4\u91cc\u9762\u7684\u7b2c 1 \u4e2a\u5143\u7d20\u662f\u8d26\u53f7\uff0c\u7b2c 2 \u4e2a\u5143\u7d20\u4e3a\u5bc6\u7801\u3002'}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"import re\r\n\r\ncontent = '\u6211\u7684\u5fae\u535a\u8d26\u53f7\u662f: zhangsan, \u5bc6\u7801\u662f: 1234567, QQ \u8d26\u53f7\u662f: lisi, \u5bc6\u7801\u662f: 33445566, GitHub \u8d26\u53f7\u662f: wangwu, \u5bc6\u7801\u662f: 999abc999, \u5e2e\u6211\u8bb0\u4f4f\u5b83\u4eec'\r\n\r\naccount_passworld_list = re.findall('\u8d26\u53f7\u662f: (.*?), \u5bc6\u7801\u662f: (.*?), ', content)\r\n\r\nprint(account_passworld_list)\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u51fd\u6570\u539f\u578b\u4e2d\u6709\u4e00\u4e2a flags \u53c2\u6570\u3002\u8fd9\u4e2a\u53c2\u6570\u662f\u53ef\u4ee5\u7701\u7565\u7684\u3002\u5f53\u4e0d\u7701\u7565\u7684\u65f6\u5019\uff0c\u5177\u6709\u4e00\u4e9b\u8f85\u52a9\u529f\u80fd\uff0c\u4f8b\u5982\u5ffd\u7565\u5927\u5c0f\u5199\u3001\u5ffd\u7565\u6362\u884c\u7b26\u7b49\u3002\u8fd9\u91cc\u4ee5\u5ffd\u7565\u6362\u884c\u7b26\u4e3a\u4f8b\u6765\u8fdb\u884c\u8bf4\u660e:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"import re\r\n\r\nstring = '''\u6211\u53ebzhangsan, \u6211\u7684\u5bc6\u7801\u662f: 123\r\n456,\r\n'''\r\n\r\npassword_flags = re.findall('\u5bc6\u7801\u662f: (.*?),', string, re.S)\r\npassword_no_flags = re.findall('\u5bc6\u7801\u662f: (.*?),', string)\r\n\r\nprint('\u4f7f\u7528 re.S \u65f6: {}'.format(password_flags)) # \u4f7f\u7528 re.S \u65f6: ['123\\n456']\r\nprint('\u4e0d\u4f7f\u7528 re.S \u65f6: {}'.format(password_no_flags)) # \u4e0d\u4f7f\u7528 re.S \u65f6: []\n"})}),"\n",(0,s.jsx)(r.p,{children:'\u5728\u722c\u866b\u7684\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u975e\u5e38\u5bb9\u6613\u51fa\u73b0\u8fd9\u6837\u7684\u60c5\u51b5\uff0c\u8981\u5339\u914d\u7684\u5185\u5bb9\u5b58\u5728\u6362\u884c\u7b26 "\\n"\u3002\u8981\u5ffd\u7565\u6362\u884c\u7b26\uff0c\u5c31\u9700\u8981\u4f7f\u7528\u5230 "re.S" \u8fd9\u4e2a flag\u3002\u867d\u7136\u8bf4\u5339\u914d\u5230\u7684\u7ed3\u679c\u4e2d\u51fa\u73b0\u4e86 "\\n" \u8fd9\u4e2a\u7b26\u53f7\uff0c\u4e0d\u8fc7\u603b\u6bd4\u4ec0\u4e48\u90fd\u5f97\u4e0d\u5230\u5f3a\u3002\u5185\u5bb9\u91cc\u9762\u7684\u6362\u884c\u7b26\u5728\u540e\u671f\u6e05\u6d17\u6570\u636e\u7684\u65f6\u5019\u628a\u5b83\u66ff\u6362\u6389\u5373\u53ef\u3002'}),"\n",(0,s.jsx)(r.h2,{id:"search",children:"search()"}),"\n",(0,s.jsx)(r.p,{children:"search() \u7684\u7528\u6cd5\u548c findall() \u7684\u7528\u6cd5\u4e00\u6837\uff0c\u4f46\u662f search() \u53ea\u4f1a\u8fd4\u56de\u7b2c 1 \u4e2a\u6ee1\u8db3\u8981\u6c42\u7684\u5b57\u7b26\u4e32\u3002\u4e00\u65e6\u627e\u5230\u7b26\u5408\u8981\u6c42\u7684\u5185\u5bb9\uff0c\u5b83\u5c31\u4f1a\u505c\u6b62\u67e5\u627e\u3002\u5bf9\u4e8e\u4ece\u8d85\u7ea7\u5927\u7684\u6587\u672c\u91cc\u9762\u53ea\u627e\u7b2c 1 \u4e2a\u6570\u636e\u7279\u522b\u6709\u7528\uff0c\u53ef\u4ee5\u5927\u5927\u63d0\u9ad8\u7a0b\u5e8f\u7684\u8fd0\u884c\u6548\u7387\u3002"}),"\n",(0,s.jsx)(r.p,{children:"search() \u7684\u51fd\u6570\u539f\u578b\u4e3a\uff1a"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"re.search(pattern, string, flags = 0)\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u5bf9\u4e8e\u7ed3\u679c\uff0c\u5982\u679c\u5339\u914d\u6210\u529f\uff0c\u5219\u662f\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u5bf9\u8c61\uff1b\u5982\u679c\u6ca1\u6709\u5339\u914d\u5230\u4efb\u4f55\u6570\u636e\uff0c\u5c31\u662f None\u3002\u5982\u679c\u9700\u8981\u5f97\u5230\u5339\u914d\u5230\u7684\u7ed3\u679c\uff0c\u5219\u9700\u8981\u901a\u8fc7. group() \u8fd9\u4e2a\u65b9\u6cd5\u6765\u83b7\u53d6\u91cc\u9762\u7684\u503c\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"import re\r\n\r\ncontent = '\u6211\u7684\u5fae\u535a\u5bc6\u7801\u662f: 1234567, QQ \u5bc6\u7801\u662f: 33445566, \u94f6\u884c\u5361\u5bc6\u7801\u662f: 888888, GitHub \u5bc6\u7801\u662f: 999abc999, \u5e2e\u6211\u8bb0\u4f4f\u5b83\u4eec'\r\n\r\npassword_search = re.search('\u5bc6\u7801\u662f: (.*?),', content)\r\npassword_not_find = re.search('xx \u662f: (.*?),', content)\r\n\r\nprint(password_search) # <re.Match object; span=(4, 17), match='\u5bc6\u7801\u662f: 1234567,'>\r\nprint(password_search.group()) # \u5bc6\u7801\u662f: 1234567,\r\nprint(password_search.group(1)) # 1234567\r\nprint(password_not_find) # None\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u53ea\u6709\u5728 .group() \u91cc\u9762\u7684\u53c2\u6570\u4e3a1\u7684\u65f6\u5019\uff0c\u624d\u4f1a\u628a\u6b63\u5219\u8868\u8fbe\u5f0f\u91cc\u9762\u7684\u62ec\u53f7\u4e2d\u7684\u7ed3\u679c\u6253\u5370\u51fa\u6765\u3002.group() \u7684\u53c2\u6570\u6700\u5927\u4e0d\u80fd\u8d85\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u91cc\u9762\u62ec\u53f7\u7684\u4e2a\u6570\u3002\u53c2\u6570\u4e3a 1 \u8868\u793a\u8bfb\u53d6\u7b2c1\u4e2a\u62ec\u53f7\u4e2d\u7684\u5185\u5bb9\uff0c\u53c2\u6570\u4e3a 2 \u8868\u793a\u8bfb\u53d6\u7b2c 2 \u4e2a\u62ec\u53f7\u4e2d\u7684\u5185\u5bb9\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"import re\r\n\r\ncontent = '\u6211\u7684\u5fae\u535a\u8d26\u53f7\u662f: zhangsan, \u5bc6\u7801\u662f: 1234567, QQ \u8d26\u53f7\u662f: lisi, \u5bc6\u7801\u662f: 33445566, GitHub \u8d26\u53f7\u662f: wangwu, \u5bc6\u7801\u662f: 999abc999, \u5e2e\u6211\u8bb0\u4f4f\u5b83\u4eec'\r\n\r\naccount_passworld = re.search('\u8d26\u53f7\u662f: (.*?), \u5bc6\u7801\u662f: (.*?), ', content)\r\n\r\nprint(account_passworld.group(1)) # zhangsan\r\nprint(account_passworld.group(2)) # 1234567\n"})}),"\n",(0,s.jsx)(r.h2,{id:"\u4f7f\u7528\u6280\u5de7",children:"\u4f7f\u7528\u6280\u5de7"}),"\n",(0,s.jsx)(r.h3,{id:"\u4e0d\u9700\u8981-compile",children:"\u4e0d\u9700\u8981 compile"}),"\n",(0,s.jsx)(r.p,{children:"\u7f51\u4e0a\u5f88\u591a\u4eba\u7684\u6587\u7ae0\u4e2d\uff0c\u6b63\u5219\u8868\u8fbe\u5f0f\u4f7f\u7528re.compile()\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u5bfc\u81f4\u4ee3\u7801\u53d8\u6210\u4e0b\u9762\u8fd9\u6837\uff1a"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"import re\r\nexample_text = '\u6211\u662fkingname, \u6211\u7684\u5fae\u535a\u8d26\u53f7\u662f: kingname, \u5bc6\u7801\u662f: 12345678, QQ\u8d26\u53f7\u662f: 99999, \u5bc6\u7801\u662f: 890abcd, \u8bf7\u8bb0\u4f4f\u4ed6\u4eec\u3002'\r\nnew_pattern=re.compile('\u8d26\u53f7\u662f: (.*?), \u5bc6\u7801\u662f: (.*?), ', re.S)\r\nuser_pass = re.findall(new_pattern, example_text)\r\nprint(user_pass)\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u8fd9\u79cd\u5199\u6cd5\u867d\u7136\u7ed3\u679c\u6b63\u786e\uff0c\u4f46\u7eaf\u7cb9\u662f\u753b\u86c7\u6dfb\u8db3\u3002\u5982\u679c\u9605\u8bfb Python \u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u6a21\u5757\u7684\u6e90\u4ee3\u7801\uff0c\u5c31\u53ef\u4ee5\u770b\u51fa re.compile() \u662f\u5b8c\u5168\u6ca1\u6709\u5fc5\u8981\u7684\u3002"}),"\n",(0,s.jsx)(r.p,{children:"re.findall() \u81ea\u5e26 re.compile() \u7684\u529f\u80fd\uff0c\u6240\u4ee5\u6ca1\u6709\u5fc5\u8981\u4f7f\u7528 re.compile()\u3002"}),"\n",(0,s.jsx)(r.h3,{id:"\u5148\u6293\u5927\u540e\u6293\u5c0f",children:"\u5148\u6293\u5927\u540e\u6293\u5c0f"}),"\n",(0,s.jsx)(r.p,{children:"\u4e00\u4e9b\u65e0\u6548\u5185\u5bb9\u548c\u6709\u6548\u5185\u5bb9\u53ef\u80fd\u5177\u6709\u76f8\u540c\u7684\u89c4\u5219\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\u5f88\u5bb9\u6613\u628a\u6709\u6548\u5185\u5bb9\u548c\u65e0\u6548\u5185\u5bb9\u6df7\u5728\u4e00\u8d77\uff0c\u5982\u4e0b\u9762\u8fd9\u6bb5\u6587\u5b57\uff1a"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"\u6709\u6548\u7528\u6237: \r\n\u59d3\u540d: \u5f20\u4e09\r\n\u59d3\u540d: \u674e\u56db\r\n\u59d3\u540d: \u738b\u4e94\r\n\u65e0\u6548\u7528\u6237: \r\n\u59d3\u540d: \u4e0d\u77e5\u540d\u7684\u5c0f\u867e\u7c73\r\n\u59d3\u540d: \u9690\u8eab\u7684\u5f20\u5927\u4fa0\n"})}),"\n",(0,s.jsx)(r.p,{children:'\u6709\u6548\u7528\u6237\u548c\u65e0\u6548\u7528\u6237\u7684\u540d\u5b57\u524d\u9762\u90fd\u4ee5 "\u59d3\u540d: " \u5f00\u5934\uff0c\u5982\u679c\u4f7f\u7528 "\u59d3\u540d: (.*?)\\n" \u6765\u8fdb\u884c\u5339\u914d\uff0c\u5c31\u4f1a\u628a\u6709\u6548\u4fe1\u606f\u548c\u65e0\u6548\u4fe1\u606f\u6df7\u5728\u4e00\u8d77\uff0c\u96be\u4ee5\u533a\u5206\u3002'}),"\n",(0,s.jsx)(r.p,{children:"\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5c31\u9700\u8981\u4f7f\u7528\u5148\u6293\u5927\u518d\u6293\u5c0f\u7684\u6280\u5de7\u3002\u5148\u628a\u6709\u6548\u7528\u6237\u8fd9\u4e2a\u6574\u4f53\u5339\u914d\u51fa\u6765\uff0c\u518d\u4ece\u6709\u6548\u7528\u6237\u91cc\u9762\u5339\u914d\u51fa\u4eba\u540d\u3002"}),"\n",(0,s.jsx)(r.p,{children:"\u5148\u6293\u5927\u518d\u6293\u5c0f\u7684\u601d\u60f3\u4f1a\u8d2f\u7a7f\u6574\u4e2a\u722c\u866b\u5f00\u53d1\u8fc7\u7a0b\uff0c\u4e00\u5b9a\u8981\u91cd\u70b9\u638c\u63e1\u3002"}),"\n",(0,s.jsx)(r.h3,{id:"\u62ec\u53f7\u5185\u548c\u62ec\u53f7\u5916",children:"\u62ec\u53f7\u5185\u548c\u62ec\u53f7\u5916"}),"\n",(0,s.jsx)(r.p,{children:'\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u62ec\u53f7\u548c ".*?" \u90fd\u662f\u4e00\u8d77\u4f7f\u7528\u7684\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u6709\u8bfb\u8005\u8ba4\u4e3a\u62ec\u53f7\u5185\u53ea\u80fd\u6709\u8fd9 3 \u79cd\u5b57\u7b26\uff0c\u4e0d\u80fd\u6709\u5176\u4ed6\u666e\u901a\u7684\u5b57\u7b26\u3002\u4f46\u5b9e\u9645\u4e0a\uff0c\u62ec\u53f7\u5185\u4e5f\u53ef\u4ee5\u6709\u5176\u4ed6\u5b57\u7b26\u3002'}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"import re\r\n\r\nhtml = '''\r\n<div class=\"tail-info\">\u5ba2\u6237\u7aef</div>\r\n<div class=\"tail-info\">2017-07-01 13:45:00</div>\r\n'''\r\n\r\nresult_1 = re.findall('tail-info\">(.*?)<', html)\r\nresult_2 = re.findall('tail-info\">2017(.*?)<', html)\r\nresult_3 = re.findall('tail-info\">(2017.*?)<', html)\r\n\r\nprint('\u62ec\u53f7\u91cc\u53ea\u6709 .*? \u5f97\u5230\u7684\u7ed3\u679c\uff1a{}'.format(result_1)) # \u62ec\u53f7\u91cc\u53ea\u6709 .*? \u5f97\u5230\u7684\u7ed3\u679c\uff1a['\u5ba2\u6237\u7aef', '2017-07-01 13:45:00']\r\nprint('2017 \u5728\u62ec\u53f7\u5916\u5f97\u5230\u7684\u7ed3\u679c: {}'.format(result_2)) # 2017 \u5728\u62ec\u53f7\u5916\u5f97\u5230\u7684\u7ed3\u679c: ['-07-01 13:45:00']\r\nprint('2017 \u5728\u62ec\u53f7\u5185\u5f97\u5230\u7684\u7ed3\u679c: {}'.format(result_3)) # 2017 \u5728\u62ec\u53f7\u5185\u5f97\u5230\u7684\u7ed3\u679c: ['2017-07-01 13:45:00']\n"})}),"\n",(0,s.jsx)(r.p,{children:'\u5982\u679c\u62ec\u53f7\u91cc\u9762\u6709\u5176\u4ed6\u666e\u901a\u5b57\u7b26\uff0c\u90a3\u4e48\u8fd9\u4e9b\u666e\u901a\u5b57\u7b26\u5c31\u4f1a\u51fa\u73b0\u5728\u83b7\u53d6\u7684\u7ed3\u679c\u91cc\u9762\u3002\u4e3e\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5982\u679c\u8bf4"\u5de6\u624b\u548c\u53f3\u624b\u4e4b\u95f4"\uff0c\u4e00\u822c\u6307\u7684\u662f\u8eaf\u5e72\u8fd9\u4e00\u90e8\u5206\u3002\u4f46\u5982\u679c\u8bf4"\u5de6\u624b\u548c\u53f3\u624b\u4e4b\u95f4\uff0c\u5305\u62ec\u5de6\u624b\u548c\u53f3\u624b"\uff0c\u90a3\u4e48\u5c31\u662f\u6307\u7684\u6574\u4e2a\u4eba\u3002\u800c\u628a\u666e\u901a\u7684\u5b57\u7b26\u653e\u5728\u62ec\u53f7\u91cc\u9762\uff0c\u5c31\u8868\u793a\u7ed3\u679c\u4e2d\u9700\u8981\u5305\u542b\u5b83\u4eec\u3002'})]})}function d(n={}){const{wrapper:r}={...(0,l.a)(),...n.components};return r?(0,s.jsx)(r,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},11151:(n,r,e)=>{e.d(r,{Z:()=>a,a:()=>i});var s=e(67294);const l={},t=s.createContext(l);function i(n){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function a(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),s.createElement(t.Provider,{value:r},n.children)}}}]);