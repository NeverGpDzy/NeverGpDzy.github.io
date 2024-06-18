"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[685],{858:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>j,frontMatter:()=>l,metadata:()=>r,toc:()=>x});var c=i(4848),d=i(8453);const l={},s=void 0,r={id:"Linux/nvidia-smi \u5404\u79cd\u547d\u4ee4",title:"nvidia-smi \u5404\u79cd\u547d\u4ee4",description:"nvidia-smi \u662f NVIDIA System Management Interface\uff0c\u5b83\u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u5b9e\u7528\u7a0b\u5e8f\uff0c\u7528\u4e8e\u76d1\u63a7\u548c\u7ba1\u7406 NVIDIA GPU \u8bbe\u5907\u3002\u4ee5\u4e0b\u662f\u547d\u4ee4\u884c\u9009\u9879\u7684\u6982\u8ff0\u548c\u89e3\u91ca\uff1a",source:"@site/docs/Linux/nvidia-smi \u5404\u79cd\u547d\u4ee4.md",sourceDirName:"Linux",slug:"/Linux/nvidia-smi \u5404\u79cd\u547d\u4ee4",permalink:"/docs/Linux/nvidia-smi \u5404\u79cd\u547d\u4ee4",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"linuxSidebar",previous:{title:"linux\u5faa\u73af\u6267\u884c\u67d0\u4e2a\u547d\u4ee4",permalink:"/docs/Linux/linux\u5faa\u73af\u6267\u884c\u67d0\u4e2a\u547d\u4ee4"},next:{title:"pigz:\u5e76\u884c\u538b\u7f29\u5de5\u5177\u8be6\u89e3",permalink:"/docs/Linux/pigz:\u5e76\u884c\u538b\u7f29\u5de5\u5177\u8be6\u89e3"}},h={},x=[{value:"\u57fa\u672c\u9009\u9879",id:"\u57fa\u672c\u9009\u9879",level:3},{value:"\u5217\u8868\u9009\u9879",id:"\u5217\u8868\u9009\u9879",level:3},{value:"\u6458\u8981\u9009\u9879",id:"\u6458\u8981\u9009\u9879",level:3},{value:"\u67e5\u8be2\u9009\u9879",id:"\u67e5\u8be2\u9009\u9879",level:3},{value:"\u9009\u62e9\u6027\u67e5\u8be2\u9009\u9879",id:"\u9009\u62e9\u6027\u67e5\u8be2\u9009\u9879",level:3},{value:"\u8bbe\u5907\u4fee\u6539\u9009\u9879",id:"\u8bbe\u5907\u4fee\u6539\u9009\u9879",level:3},{value:"\u5355\u5143\u4fee\u6539\u9009\u9879",id:"\u5355\u5143\u4fee\u6539\u9009\u9879",level:3},{value:"\u663e\u793a DTD \u9009\u9879",id:"\u663e\u793a-dtd-\u9009\u9879",level:3},{value:"\u7edf\u8ba1\u9009\u9879",id:"\u7edf\u8ba1\u9009\u9879",level:3},{value:"\u8bbe\u5907\u76d1\u63a7",id:"\u8bbe\u5907\u76d1\u63a7",level:3},{value:"\u8fdb\u7a0b\u76d1\u63a7",id:"\u8fdb\u7a0b\u76d1\u63a7",level:3},{value:"\u5176\u4ed6\u529f\u80fd",id:"\u5176\u4ed6\u529f\u80fd",level:3}];function o(e){const n={code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"nvidia-smi"})," \u662f NVIDIA System Management Interface\uff0c\u5b83\u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u5b9e\u7528\u7a0b\u5e8f\uff0c\u7528\u4e8e\u76d1\u63a7\u548c\u7ba1\u7406 NVIDIA GPU \u8bbe\u5907\u3002\u4ee5\u4e0b\u662f\u547d\u4ee4\u884c\u9009\u9879\u7684\u6982\u8ff0\u548c\u89e3\u91ca\uff1a"]}),"\n",(0,c.jsx)(n.h3,{id:"\u57fa\u672c\u9009\u9879",children:"\u57fa\u672c\u9009\u9879"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-h"}),", ",(0,c.jsx)(n.code,{children:"--help"}),": \u663e\u793a\u5e2e\u52a9\u4fe1\u606f\u5e76\u9000\u51fa\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5217\u8868\u9009\u9879",children:"\u5217\u8868\u9009\u9879"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-L"}),", ",(0,c.jsx)(n.code,{children:"--list-gpus"}),": \u663e\u793a\u8fde\u63a5\u5230\u7cfb\u7edf\u7684 GPU \u5217\u8868\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-B"}),", ",(0,c.jsx)(n.code,{children:"--list-excluded-gpus"}),": \u663e\u793a\u7cfb\u7edf\u4e2d\u6392\u9664\u7684 GPU \u5217\u8868\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u6458\u8981\u9009\u9879",children:"\u6458\u8981\u9009\u9879"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"<no arguments>"}),": \u663e\u793a\u8fde\u63a5\u5230\u7cfb\u7edf\u7684 GPU \u7684\u6458\u8981\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-i"}),", ",(0,c.jsx)(n.code,{children:"--id="}),": \u6307\u5b9a\u7279\u5b9a GPU\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-f"}),", ",(0,c.jsx)(n.code,{children:"--filename="}),": \u5c06\u65e5\u5fd7\u8bb0\u5f55\u5230\u6307\u5b9a\u6587\u4ef6\uff0c\u800c\u975e\u6807\u51c6\u8f93\u51fa\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-l"}),", ",(0,c.jsx)(n.code,{children:"--loop="}),": \u5728\u6307\u5b9a\u7684\u79d2\u95f4\u9694\u5185\u5faa\u73af\u63a2\u6d4b\u76f4\u5230 Ctrl+C\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u67e5\u8be2\u9009\u9879",children:"\u67e5\u8be2\u9009\u9879"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-q"}),", ",(0,c.jsx)(n.code,{children:"--query"}),": \u663e\u793a GPU \u6216\u5355\u5143\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-u"}),", ",(0,c.jsx)(n.code,{children:"--unit"}),": \u663e\u793a\u5355\u5143\u800c\u975e GPU \u5c5e\u6027\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-x"}),", ",(0,c.jsx)(n.code,{children:"--xml-format"}),": \u751f\u6210 XML \u8f93\u51fa\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--dtd"}),": \u5728\u663e\u793a XML \u8f93\u51fa\u65f6\uff0c\u5d4c\u5165 DTD\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-d"}),", ",(0,c.jsx)(n.code,{children:"--display="}),": \u4ec5\u663e\u793a\u9009\u5b9a\u4fe1\u606f\uff08\u5982\u5185\u5b58\u3001\u5229\u7528\u7387\u7b49\uff09\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-lms"}),", ",(0,c.jsx)(n.code,{children:"--loop-ms="}),": \u5728\u6307\u5b9a\u7684\u6beb\u79d2\u95f4\u9694\u5185\u5faa\u73af\u63a2\u6d4b\u76f4\u5230 Ctrl+C\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u9009\u62e9\u6027\u67e5\u8be2\u9009\u9879",children:"\u9009\u62e9\u6027\u67e5\u8be2\u9009\u9879"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--query-gpu"}),": \u67e5\u8be2 GPU \u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--query-supported-clocks"}),": \u5217\u51fa\u652f\u6301\u7684\u65f6\u949f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--query-compute-apps"}),": \u5217\u51fa\u5f53\u524d\u6d3b\u52a8\u7684\u8ba1\u7b97\u8fdb\u7a0b\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--query-accounted-apps"}),": \u5217\u51fa\u5df2\u8bb0\u8d26\u7684\u8ba1\u7b97\u8fdb\u7a0b\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--query-retired-pages"}),": \u5217\u51fa\u5df2\u9000\u5f79\u7684\u8bbe\u5907\u5185\u5b58\u9875\u9762\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--query-remapped-rows"}),": \u67e5\u8be2\u91cd\u6620\u5c04\u884c\u7684\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--format="}),": \u6307\u5b9a\u683c\u5f0f\u9009\u9879\uff0c\u5982 csv\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u8bbe\u5907\u4fee\u6539\u9009\u9879",children:"\u8bbe\u5907\u4fee\u6539\u9009\u9879"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-pm"}),", ",(0,c.jsx)(n.code,{children:"--persistence-mode="}),": \u8bbe\u7f6e\u6301\u4e45\u6a21\u5f0f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-e"}),", ",(0,c.jsx)(n.code,{children:"--ecc-config="}),": \u5207\u6362 ECC \u652f\u6301\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-p"}),", ",(0,c.jsx)(n.code,{children:"--reset-ecc-errors="}),": \u91cd\u7f6e ECC \u9519\u8bef\u8ba1\u6570\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-c"}),", ",(0,c.jsx)(n.code,{children:"--compute-mode="}),": \u4e3a\u8ba1\u7b97\u5e94\u7528\u7a0b\u5e8f\u8bbe\u7f6e\u6a21\u5f0f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--gom="}),": \u8bbe\u7f6e GPU \u64cd\u4f5c\u6a21\u5f0f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-r"}),", ",(0,c.jsx)(n.code,{children:"--gpu-reset"}),": \u89e6\u53d1 GPU \u91cd\u7f6e\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-vm"}),", ",(0,c.jsx)(n.code,{children:"--virt-mode="}),": \u5207\u6362 GPU \u865a\u62df\u5316\u6a21\u5f0f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-lgc"}),", ",(0,c.jsx)(n.code,{children:"--lock-gpu-clocks="}),": \u9501\u5b9a GPU \u65f6\u949f\u901f\u5ea6\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-rgc"}),", ",(0,c.jsx)(n.code,{children:"--reset-gpu-clocks"}),": \u91cd\u7f6e GPU \u65f6\u949f\u5230\u9ed8\u8ba4\u503c\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-lmc"}),", ",(0,c.jsx)(n.code,{children:"--lock-memory-clocks="}),": \u9501\u5b9a\u5185\u5b58\u65f6\u949f\u901f\u5ea6\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-rmc"}),", ",(0,c.jsx)(n.code,{children:"--reset-memory-clocks"}),": \u91cd\u7f6e\u5185\u5b58\u65f6\u949f\u5230\u9ed8\u8ba4\u503c\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-ac"}),", ",(0,c.jsx)(n.code,{children:"--applications-clocks="}),": \u6307\u5b9a\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u65f6\u7684 GPU \u65f6\u949f\u901f\u5ea6\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-pl"}),", ",(0,c.jsx)(n.code,{children:"--power-limit="}),": \u6307\u5b9a\u6700\u5927\u529f\u7387\u7ba1\u7406\u9650\u5236\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-am"}),", ",(0,c.jsx)(n.code,{children:"--accounting-mode="}),": \u542f\u7528\u6216\u7981\u7528\u8bb0\u8d26\u6a21\u5f0f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-mig"}),", ",(0,c.jsx)(n.code,{children:"--multi-instance-gpu="}),": \u542f\u7528\u6216\u7981\u7528\u591a\u5b9e\u4f8b GPU\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-gtt"}),", ",(0,c.jsx)(n.code,{children:"--gpu-target-temp="}),": \u8bbe\u7f6e GPU \u76ee\u6807\u6e29\u5ea6\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5355\u5143\u4fee\u6539\u9009\u9879",children:"\u5355\u5143\u4fee\u6539\u9009\u9879"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"-t"}),", ",(0,c.jsx)(n.code,{children:"--toggle-led="}),": \u8bbe\u7f6e\u5355\u5143 LED \u72b6\u6001\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u663e\u793a-dtd-\u9009\u9879",children:"\u663e\u793a DTD \u9009\u9879"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--dtd"}),": \u6253\u5370\u8bbe\u5907 DTD \u5e76\u9000\u51fa\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u7edf\u8ba1\u9009\u9879",children:"\u7edf\u8ba1\u9009\u9879"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"stats"}),": \u663e\u793a\u8bbe\u5907\u7edf\u8ba1\u4fe1\u606f\uff08\u5df2\u5f03\u7528\uff09\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u8bbe\u5907\u76d1\u63a7",children:"\u8bbe\u5907\u76d1\u63a7"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"dmon"}),": \u4ee5\u6eda\u52a8\u683c\u5f0f\u663e\u793a\u8bbe\u5907\u7edf\u8ba1\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"daemon"}),": \u4f5c\u4e3a\u5b88\u62a4\u8fdb\u7a0b\u5728\u540e\u53f0\u8fd0\u884c\u5e76\u76d1\u63a7\u8bbe\u5907\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"replay"}),": \u7528\u4e8e\u91cd\u653e/\u63d0\u53d6\u7531\u5b88\u62a4\u8fdb\u7a0b\u751f\u6210\u7684\u6301\u4e45\u7edf\u8ba1\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u8fdb\u7a0b\u76d1\u63a7",children:"\u8fdb\u7a0b\u76d1\u63a7"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"pmon"}),": \u4ee5\u6eda\u52a8\u683c\u5f0f\u663e\u793a\u8fdb\u7a0b\u7edf\u8ba1\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5176\u4ed6\u529f\u80fd",children:"\u5176\u4ed6\u529f\u80fd"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"topo"}),": \u663e\u793a\u8bbe\u5907/\u7cfb\u7edf\u62d3\u6251\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"drain"}),": \u663e\u793a/\u4fee\u6539 GPU \u6392\u7a7a\u72b6\u6001\u4ee5\u8fdb\u884c\u7535\u6e90\u6020\u901f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"nvlink"}),": \u663e\u793a\u8bbe\u5907 NVLINK \u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"clocks"}),": \u63a7\u5236\u548c\u67e5\u8be2\u65f6\u949f\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"encodersessions"}),": \u663e\u793a\u8bbe\u5907\u7f16\u7801\u5668\u4f1a\u8bdd\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"fbcsessions"}),": \u663e\u793a\u8bbe\u5907 FBC \u4f1a\u8bdd\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"vgpu"}),": \u663e\u793a vGPU \u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"mig"}),": \u63d0\u4f9b MIG \u7ba1\u7406\u63a7\u5236\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"compute-policy"}),": \u63a7\u5236\u548c\u67e5\u8be2\u8ba1\u7b97\u7b56\u7565\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"boost-slider"}),": \u63a7\u5236\u548c\u67e5\u8be2\u63d0\u5347\u6ed1\u5757\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"power-hint"}),": \u4f30\u7b97 GPU \u7535\u6e90\u4f7f\u7528\u60c5\u51b5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"base-clocks"}),": \u67e5\u8be2 GPU \u57fa\u7840\u65f6\u949f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"ccu"}),": \u63a7\u5236\u548c\u67e5\u8be2\u8ba1\u6570\u5668\u6536\u96c6\u5355\u5143\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u4e9b\u9009\u9879\u63d0\u4f9b\u4e86\u5bf9 NVIDIA GPU \u7684\u6df1\u5ea6\u76d1\u63a7\u548c\u7ba1\u7406\u529f\u80fd\uff0c\u4ece\u7b80\u5355\u7684\u72b6\u6001\u67e5\u8be2\u5230\u590d\u6742\u7684\u914d\u7f6e\u8c03\u6574\u3002\u4f7f\u7528\u8fd9\u4e9b\u9009\u9879\u65f6\uff0c\u67d0\u4e9b\u53ef\u80fd\u9700\u8981\u7ba1\u7406\u5458\u6743\u9650\u6216\u7279\u5b9a\u7684\u786c\u4ef6\u652f\u6301\u3002"})]})}function j(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var c=i(6540);const d={},l=c.createContext(d);function s(e){const n=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);