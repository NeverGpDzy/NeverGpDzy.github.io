"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[785],{2086:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var t=r(4848),i=r(8453);const a={},s="\u6570\u636e\u7ed3\u678415-\u56fe\u7684\u904d\u5386",u={id:"DataStructer/\u6570\u636e\u7ed3\u678415-\u56fe\u7684\u904d\u5386",title:"\u6570\u636e\u7ed3\u678415-\u56fe\u7684\u904d\u5386",description:"\u4ee3\u7801",source:"@site/docs/DataStructer/\u6570\u636e\u7ed3\u678415-\u56fe\u7684\u904d\u5386.md",sourceDirName:"DataStructer",slug:"/DataStructer/\u6570\u636e\u7ed3\u678415-\u56fe\u7684\u904d\u5386",permalink:"/docs/DataStructer/\u6570\u636e\u7ed3\u678415-\u56fe\u7684\u904d\u5386",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"DataStructerSidebar",previous:{title:"\u6570\u636e\u7ed3\u678414-N\u540e\u95ee\u9898",permalink:"/docs/DataStructer/\u6570\u636e\u7ed3\u678414-N\u540e\u95ee\u9898"},next:{title:"\u6570\u636e\u7ed3\u678416-\u56fe\u7684\u904d\u5386-Prim\u7b97\u6cd5\u4e0eDijkstra\u7b97\u6cd5",permalink:"/docs/DataStructer/\u6570\u636e\u7ed3\u678416-\u56fe\u7684\u904d\u5386-Prim\u7b97\u6cd5\u4e0eDijkstra\u7b97\u6cd5"}},d={},p=[{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3},{value:"\u8fd0\u884c\u7ed3\u679c",id:"\u8fd0\u884c\u7ed3\u679c",level:2}];function o(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u6570\u636e\u7ed3\u678415-\u56fe\u7684\u904d\u5386",children:"\u6570\u636e\u7ed3\u678415-\u56fe\u7684\u904d\u5386"}),"\n",(0,t.jsx)(e.h2,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n#include <malloc.h>\n#include <stdbool.h>\n\n// \u5b9a\u4e49\u961f\u5217\u7684\u5927\u5c0f\n#define QUEUE_SIZE 10\n\nint* visitedPtr;\n\n// \u5b9a\u4e49\u4e00\u4e2a\u7ed3\u6784\u4f53\u6765\u8868\u793a\u56fe\u8282\u70b9\u961f\u5217\ntypedef struct GraphNodeQueue {\n    int* nodes;  // \u7528\u4e8e\u5b58\u50a8\u8282\u70b9\u7684\u6570\u7ec4\n    int front;   // \u961f\u5217\u7684\u524d\u7aef\u6307\u9488\n    int rear;    // \u961f\u5217\u7684\u540e\u7aef\u6307\u9488\n} GraphNodeQueue, *QueuePtr;\n\n// \u521d\u59cb\u5316\u961f\u5217\nQueuePtr initQueue() {\n    QueuePtr resultQueuePtr = (QueuePtr)malloc(sizeof(struct GraphNodeQueue));\n    resultQueuePtr->nodes = (int*)malloc(QUEUE_SIZE * sizeof(int));\n    resultQueuePtr->front = 0;\n    resultQueuePtr->rear = 1;\n    return resultQueuePtr;\n}\n\n// \u5224\u65ad\u961f\u5217\u662f\u5426\u4e3a\u7a7a\nbool isQueueEmpty(QueuePtr paraQueuePtr) {\n    if ((paraQueuePtr->front + 1) % QUEUE_SIZE == paraQueuePtr->rear) {\n        return true;\n    }\n    return false;\n}\n\n// \u5165\u961f\u64cd\u4f5c\nvoid enqueue(QueuePtr paraQueuePtr, int paraNode) {\n    if ((paraQueuePtr->rear + 1) % QUEUE_SIZE == paraQueuePtr->front % QUEUE_SIZE) {\n        printf("Error, trying to enqueue %d. queue full.\\r\\n", paraNode);\n        return;\n    }\n    paraQueuePtr->nodes[paraQueuePtr->rear] = paraNode;\n    paraQueuePtr->rear = (paraQueuePtr->rear + 1) % QUEUE_SIZE;\n}\n\n// \u51fa\u961f\u64cd\u4f5c\nint dequeue(QueuePtr paraQueuePtr) {\n    if (isQueueEmpty(paraQueuePtr)) {\n        printf("Error, empty queue\\r\\n");\n        return -1;\n    }\n    paraQueuePtr->front = (paraQueuePtr->front + 1) % QUEUE_SIZE;\n    return paraQueuePtr->nodes[paraQueuePtr->front];\n}\n\n// \u5b9a\u4e49\u4e00\u4e2a\u7ed3\u6784\u4f53\u6765\u8868\u793a\u56fe\ntypedef struct Graph {\n    int** connections;  // \u7528\u4e8e\u5b58\u50a8\u56fe\u7684\u90bb\u63a5\u77e9\u9635\n    int numNodes;       // \u56fe\u4e2d\u8282\u70b9\u7684\u6570\u91cf\n} *GraphPtr;\n\n// \u521d\u59cb\u5316\u56fe\nGraphPtr initGraph(int paraSize, int** paraData) {\n    int i, j;\n    GraphPtr resultPtr = (GraphPtr)malloc(sizeof(struct Graph));\n    resultPtr->numNodes = paraSize;\n    resultPtr->connections = (int**)malloc(paraSize * sizeof(int*));\n    for (i = 0; i < paraSize; i++) {\n        resultPtr->connections[i] = (int*)malloc(paraSize * sizeof(int));\n        for (j = 0; j < paraSize; j++) {\n            resultPtr->connections[i][j] = paraData[i][j];\n        }\n    }\n    return resultPtr;\n}\n\n// \u521d\u59cb\u5316\u904d\u5386\u8f85\u52a9\u6570\u7ec4\nvoid initTranverse(GraphPtr paraGraphPtr) {\n    int i;\n    visitedPtr = (int*)malloc(paraGraphPtr->numNodes * sizeof(int));\n    for (i = 0; i < paraGraphPtr->numNodes; i++) {\n        visitedPtr[i] = 0;\n    }\n}\n\n// \u6df1\u5ea6\u4f18\u5148\u904d\u5386\nvoid depthFirstTranverse(GraphPtr paraGraphPtr, int paraNode) {\n    int i;\n    visitedPtr[paraNode] = 1;\n    printf("%d\\t", paraNode);\n    for (i = 0; i < paraGraphPtr->numNodes; i++) {\n        if (!visitedPtr[i]) {\n            if (paraGraphPtr->connections[paraNode][i]) {\n                depthFirstTranverse(paraGraphPtr, i);\n            }\n        }\n    }\n}\n\n// \u5e7f\u5ea6\u4f18\u5148\u904d\u5386\nvoid widthFirstTranverse(GraphPtr paraGraphPtr, int paraStart) {\n    int i, j, tempNode;\n    i = 0;\n    QueuePtr tempQueuePtr = initQueue();\n    printf("%d\\t", paraStart);\n    visitedPtr[paraStart] = 1;\n    enqueue(tempQueuePtr, paraStart);\n    while (!isQueueEmpty(tempQueuePtr)) {\n        tempNode = dequeue(tempQueuePtr);\n        visitedPtr[tempNode] = 1;\n        i++;\n        for (j = 0; j < paraGraphPtr->numNodes; j++) {\n            if (visitedPtr[j])\n                continue;\n            if (paraGraphPtr->connections[tempNode][j] == 0)\n                continue;\n            printf("%d\\t", j);\n            visitedPtr[j] = 1;\n            enqueue(tempQueuePtr, j);\n        }\n    }\n}\n\n// \u6d4b\u8bd5\u56fe\u7684\u904d\u5386\nvoid testGraphTranverse() {\n    int i, j;\n    int myGraph[5][5] = {\n        {0, 1, 0, 1, 0},\n        {1, 0, 1, 0, 1},\n        {0, 1, 0, 1, 1},\n        {1, 0, 1, 0, 0},\n        {0, 1, 1, 0, 0}\n    };\n    int** tempPtr;\n    printf("Preparing data\\r\\n");\n    tempPtr = (int**)malloc(5 * sizeof(int*));\n    for (i = 0; i < 5; i++) {\n        tempPtr[i] = (int*)malloc(5 * sizeof(int));\n    }\n    for (i = 0; i < 5; i++) {\n        for (j = 0; j < 5; j++) {\n            tempPtr[i][j] = myGraph[i][j];\n        }\n    }\n    printf("Data ready\\r\\n");\n    GraphPtr tempGraphPtr = initGraph(5, tempPtr);\n    printf("num nodes = %d \\r\\n", tempGraphPtr->numNodes);\n    printf("Graph initialized\\r\\n");\n\n    printf("Depth first visit:\\r\\n");\n    initTranverse(tempGraphPtr);\n    depthFirstTranverse(tempGraphPtr, 4);\n\n    printf("\\r\\nWidth first visit:\\r\\n");\n    initTranverse(tempGraphPtr);\n    widthFirstTranverse(tempGraphPtr, 4);\n}\n\nint main() {\n    testGraphTranverse();\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u4e2a\u4ee3\u7801\u5b9e\u73b0\u4e86\u4e00\u4e2a\u56fe\u7684\u904d\u5386\u7a0b\u5e8f\uff0c\u5305\u62ec\u4ee5\u4e0b\u4e3b\u8981\u90e8\u5206\uff1a"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u56fe\u8282\u70b9\u961f\u5217"}),"\uff1a"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"GraphNodeQueue"}),"\u7ed3\u6784\u4f53\u7528\u4e8e\u5b9a\u4e49\u4e00\u4e2a\u73af\u5f62\u961f\u5217\uff0c\u652f\u6301\u57fa\u672c\u7684\u5165\u961f\u548c\u51fa\u961f\u64cd\u4f5c\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"initQueue"}),"\u51fd\u6570\u7528\u4e8e\u521d\u59cb\u5316\u4e00\u4e2a\u961f\u5217\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"isQueueEmpty"}),"\u51fd\u6570\u7528\u4e8e\u68c0\u67e5\u961f\u5217\u662f\u5426\u4e3a\u7a7a\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"enqueue"}),"\u548c",(0,t.jsx)(e.code,{children:"dequeue"}),"\u51fd\u6570\u5206\u522b\u5b9e\u73b0\u4e86\u5165\u961f\u548c\u51fa\u961f\u7684\u64cd\u4f5c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u56fe\u7684\u8868\u793a\u548c\u521d\u59cb\u5316"}),"\uff1a"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"Graph"}),"\u7ed3\u6784\u4f53\u7528\u4e8e\u8868\u793a\u4e00\u4e2a\u56fe\uff0c\u5305\u62ec\u4e00\u4e2a\u90bb\u63a5\u77e9\u9635\u548c\u8282\u70b9\u6570\u91cf\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"initGraph"}),"\u51fd\u6570\u7528\u4e8e\u6839\u636e\u7ed9\u5b9a\u7684\u90bb\u63a5\u77e9\u9635\u521d\u59cb\u5316\u56fe\u7ed3\u6784\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u904d\u5386\u8f85\u52a9\u529f\u80fd"}),"\uff1a"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"initTranverse"}),"\u51fd\u6570\u521d\u59cb\u5316\u8f85\u52a9\u6570\u7ec4",(0,t.jsx)(e.code,{children:"visitedPtr"}),"\uff0c\u7528\u4e8e\u8bb0\u5f55\u8282\u70b9\u662f\u5426\u88ab\u8bbf\u95ee\u8fc7\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"depthFirstTranverse"}),"\u51fd\u6570\u5b9e\u73b0\u6df1\u5ea6\u4f18\u5148\u904d\u5386\uff0c\u901a\u8fc7\u9012\u5f52\u65b9\u5f0f\u8bbf\u95ee\u6240\u6709\u8fde\u63a5\u7684\u8282\u70b9\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"widthFirstTranverse"}),"\u51fd\u6570\u5b9e\u73b0\u5e7f\u5ea6\u4f18\u5148\u904d\u5386\uff0c\u901a\u8fc7\u961f\u5217\u5b9e\u73b0\u9010\u5c42\u8bbf\u95ee\u8282\u70b9\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u6d4b\u8bd5\u529f\u80fd"}),"\uff1a"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"testGraphTranverse"}),"\u51fd\u6570\u5b9a\u4e49\u4e86\u4e00\u4e2a5\u8282\u70b9\u7684\u56fe\u5e76\u6d4b\u8bd5\u4e86\u6df1\u5ea6\u4f18\u5148\u904d\u5386\u548c\u5e7f\u5ea6\u4f18\u5148\u904d\u5386\uff0c\u6253\u5370\u51fa\u8bbf\u95ee\u7684\u8282\u70b9\u987a\u5e8f\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u4e2a\u4ee3\u7801\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528\u57fa\u672c\u7684\u961f\u5217\u548c\u9012\u5f52\u6765\u5b9e\u73b0\u56fe\u7684\u904d\u5386\uff0c\u540c\u65f6\u63d0\u4f9b\u4e86\u8be6\u7ec6\u7684\u6b65\u9aa4\u548c\u51fd\u6570\u8c03\u7528\uff0c\u4f7f\u5f97\u6574\u4e2a\u56fe\u7684\u904d\u5386\u8fc7\u7a0b\u6e05\u6670\u660e\u4e86\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8fd0\u884c\u7ed3\u679c",children:"\u8fd0\u884c\u7ed3\u679c"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Graph initialized\nDepth first visit:\n4       1       0       3       2\nWidth first visit:\n4       1       2       0       3\n \n...Program finished with exit code 1\nPress ENTER to exit console.\n"})})]})}function l(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>u});var t=r(6540);const i={},a=t.createContext(i);function s(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function u(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);