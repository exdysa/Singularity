(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4143:function(e,t,a){Promise.resolve().then(a.bind(a,3343))},3343:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return eo}});var s=a(7437),l=a(9655);function n(e){let{children:t}=e;return(0,s.jsx)(l.xV,{children:(0,s.jsx)(l.W4,{children:t})})}var r=a(2265),o=a(2936),i=a(7742),d=a(2235),c=a(1657);let x=o.fC,h=o.xz;o.x8;let u=o.h_,m=r.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(o.aV,{className:(0,c.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...l,ref:t})});m.displayName=o.aV.displayName;let p=(0,i.j)("fixed z-50 gap-4 bg-background p-6 shadow-xl transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:duration-200",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),f=r.forwardRef((e,t)=>{let{side:a="right",className:l,children:n,...r}=e;return(0,s.jsxs)(u,{children:[(0,s.jsx)(m,{}),(0,s.jsxs)(o.VY,{ref:t,className:(0,c.cn)(p({side:a}),l),...r,children:[n,(0,s.jsxs)(o.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,s.jsx)(d.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=o.VY.displayName,r.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(o.Dx,{ref:t,className:(0,c.cn)("text-lg font-semibold text-foreground",a),...l})}).displayName=o.Dx.displayName,r.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(o.dk,{ref:t,className:(0,c.cn)("text-sm text-muted-foreground",a),...l})}).displayName=o.dk.displayName;var g=a(5754),j=a(8152);let b=j.zt,v=j.fC,w=j.xz,N=r.forwardRef((e,t)=>{let{className:a,sideOffset:l=4,...n}=e;return(0,s.jsx)(j.VY,{ref:t,sideOffset:l,className:(0,c.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...n})});N.displayName=j.VY.displayName;var k=a(2177),y=a(9326),C=a(970),S=a(7014),E=a(5087),z=a(5179),D=a(1014);let K=r.forwardRef((e,t)=>{let{className:a,orientation:l="horizontal",decorative:n=!0,...r}=e;return(0,s.jsx)(D.f,{ref:t,decorative:n,orientation:l,className:(0,c.cn)("shrink-0 bg-border","horizontal"===l?"h-[1px] w-full":"h-full w-[1px]",a),...r})});K.displayName=D.f.displayName;var L=r.memo(e=>{let{item:t,index:a,handleRename:l,handleUpdate:n,handleDelete:o,handleLoad:i}=e,[d,c]=(0,r.useState)(!1),x=(0,r.useCallback)(e=>{c(!1);let a=e.target.value;a&&l(t.id,a)},[l,t.id]),h=(0,r.useCallback)(()=>{i(t.graph,t.title)},[i,t.graph,t.title]),u=(0,r.useCallback)(()=>{c(!d)},[d]),m=(0,r.useCallback)(()=>{n(t.id,t.title)},[n,t.id,t.title]),p=(0,r.useCallback)(()=>{(0,S.Cq)(t.graph,t.title)},[t.graph,t.title]),f=(0,r.useCallback)(()=>{o(t.id,t.title)},[o,t.id,t.title]),j=(0,r.useCallback)(()=>d?(0,s.jsx)(z.I,{defaultValue:t.title,onBlur:x,onKeyDown:e=>["Enter","Escape"].includes(e.key)&&e.target.blur()}):(0,s.jsx)("a",{className:"flex",title:"Load",onClick:h,children:t.title}),[d,t.title,a,x,h]);return(0,s.jsx)(b,{delayDuration:0,children:(0,s.jsx)("ul",{className:"list-none p-0 m-0",children:(0,s.jsx)("li",{className:"border-b border-gray-200 last:border-b-0",children:(0,s.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("div",{children:(0,s.jsx)("a",{title:"Load",onClick:h,className:"flex items-center space-x-2 my-4",children:(0,s.jsx)("span",{children:j()})})}),(0,s.jsxs)("div",{className:"flex justify-end items-center",children:[(0,s.jsxs)(v,{children:[(0,s.jsx)(w,{asChild:!0,children:(0,s.jsx)(g.z,{className:"bg-transparent text-white hover:bg-primary hover:text-black p-2 m-0",onClick:u,children:(0,s.jsx)(k.SQj,{})})}),(0,s.jsx)(N,{children:"Rename workflow"})]}),(0,s.jsx)(K,{orientation:"vertical",decorative:!0}),(0,s.jsxs)(v,{children:[(0,s.jsx)(w,{asChild:!0,children:(0,s.jsx)(g.z,{className:"bg-transparent text-white hover:bg-primary hover:text-black p-2 m-0",onClick:m,children:(0,s.jsx)(k.oqE,{})})}),(0,s.jsx)(N,{children:"Overwrite with current"})]}),(0,s.jsx)(K,{orientation:"vertical",decorative:!0}),(0,s.jsxs)(v,{children:[(0,s.jsx)(w,{asChild:!0,children:(0,s.jsx)(g.z,{className:"bg-transparent text-white hover:bg-primary hover:text-black p-2 m-0",onClick:p,children:(0,s.jsx)(k._8t,{})})}),(0,s.jsx)(N,{children:"Download to disk"})]}),(0,s.jsx)(K,{orientation:"vertical",decorative:!0}),(0,s.jsxs)(v,{children:[(0,s.jsx)(w,{asChild:!0,children:(0,s.jsx)(g.z,{className:"bg-transparent text-white hover:bg-primary hover:text-black p-2 m-0",onClick:f,children:(0,s.jsx)(k.ypG,{})})}),(0,s.jsx)(N,{children:"Delete workflow"})]})]})]}),(0,s.jsx)("div",{className:"text-sm text-gray-600",children:(0,s.jsxs)("div",{className:"flex space-x-4",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(k.S7f,{}),(0,s.jsx)("span",{children:Object.keys(t.graph.data).length})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(k.qDj,{}),(0,s.jsx)("span",{children:t.graph.connections.length})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(k.T39,{}),(0,s.jsx)("span",{children:(()=>{let e=new Date(t.time);return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)+" "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)+":"+("0"+e.getSeconds()).slice(-2)})()})]})]})})]})},t.id)})})}),O=a(6288),A=a(3428),T=a(9580),G=a(489);function Z(e){let{onUpload:t}=e,[a,l]=(0,r.useState)(null),[n,o]=(0,r.useState)(!1),[i,d]=(0,r.useState)(""),{dragOver:x,setDragOver:h,onDragOver:u,onDragLeave:m}=function(){let[e,t]=(0,r.useState)(!1),[a,s]=(0,r.useState)("");return{dragOver:e,setDragOver:t,onDragOver:e=>{e.preventDefault(),t(!0)},onDragLeave:()=>t(!1),fileDropError:a,setFileDropError:s}}(),p=()=>{a&&(o(!0),setTimeout(()=>{o(!1)},Math.max(1e3,Math.min(a.size/750,4e3))))};return(0,r.useEffect)(()=>{a&&!n&&p()},[a]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"border-b",children:[(0,s.jsx)("label",{htmlFor:"file",onDragOver:u,onDragLeave:m,onDrop:e=>{e.preventDefault(),h(!1);let a=e.dataTransfer.files[0];return a?"application/json"!==a.type?d("Invalid file type! Only JSON files are accepted."):a.size>102400?d("File size exceeds the maximum limit of 100KB."):void(l(a),d(""),t(a)):d("No file selected.")},className:(0,c.cn)("px-4 py-2 border-[1.5px] border-dashed dark:border-neutral-700 m-4 rounded-lg flex flex-col justify-start items-center hover:cursor-pointer",x&&"border-blue-600 bg-blue-50"),children:(0,s.jsxs)("div",{className:"flex flex-col p-4 justify-start items-center text-center",children:[(0,s.jsx)(k.rG2,{className:(0,c.cn)("h-5 w-5 text-neutral-600 my-4",x&&"text-blue-500")}),(0,s.jsx)("p",{className:"font-semibold",children:"Load a workspace or drag & drop it here"}),(0,s.jsx)("p",{className:"text-neutral-500 text-sm",children:"Only JSON files. Up to 100 KB."})]})}),(0,s.jsx)("input",{type:"file",name:"file",id:"file",className:"hidden",onChange:e=>{let a=e.target.files?e.target.files[0]:null;return a?"application/json"!==a.type?d("Invalid file type! Only JSON files are accepted."):a.size>102400?d("File size exceeds the maximum limit of 100KB."):void(l(a),d(""),t(a)):d("No file selected.")},accept:"application/json"})]}),a&&(0,s.jsx)("div",{className:"w-full px-4 py-2 gap-2 flex flex-col justify-start items-center border-t dark:border-neutral-700 overflow-auto",children:(0,s.jsxs)("div",{className:"flex flex-row justify-between items-center border dark:border-neutral-700 rounded-lg px-2 py-1 w-full group",children:[(0,s.jsxs)("div",{className:"flex flex-row justify-start items-center gap-2",children:[(0,s.jsx)(A.Z,{className:"h-5 w-5 text-neutral-500"}),(0,s.jsx)(b,{children:(0,s.jsxs)(v,{children:[(0,s.jsx)(w,{asChild:!0,children:(0,s.jsx)("p",{className:"truncate hover:cursor-help",children:a.name})}),(0,s.jsx)(N,{children:(0,s.jsx)("p",{children:a.name})})]})}),(0,s.jsx)("p",{className:"text-xs text-neutral-500",children:(0,c.t)(a.size)})]}),(0,s.jsxs)("div",{className:"flex flex-row justify-end items-center gap-2",children:[n?(0,s.jsx)(T.Z,{className:"h-4 w-4 animate-spin text-neutral-500"}):(0,s.jsxs)("div",{className:"flex flex-row justify-start items-center text-xs rounded-full px-2 py-[0.5px] gap-1",children:[(0,s.jsx)("div",{className:"h-2 w-2 bg-green-400 rounded-full"}),(0,s.jsx)("p",{className:"text-neutral-500",children:"Uploaded"})]}),(0,s.jsx)("button",{className:"text-neutral-400 p-1 rounded-lg hover:text-black transition-all hover:cursor-pointer",onClick:()=>{l(null)},children:(0,s.jsx)(G.Z,{className:"h-4 w-4"})})]})]})}),i&&(0,s.jsxs)("div",{className:"bg-orange-50 py-1 mx-2 rounded-lg text-center my-2 border border-orange-200 flex flex-row justify-center items-center gap-2",children:[(0,s.jsx)(A.Z,{className:"h-4 w-4 text-orange-400"}),(0,s.jsx)("p",{className:"text-orange-400 text-sm font-medium",children:i})]})]})}var F=a(9842);let R=r.memo(()=>{let[e,t]=(0,r.useState)(),[a,l]=(0,r.useState)(),[n,o]=(0,r.useState)(0),{onLoadWorkflow:i,onDownloadWorkflow:d,onSaveLocalWorkFlow:c,onUpdateLocalWorkFlowGraph:x,onUpdateLocalWorkFlowTitle:h}=(0,C.q)((0,E.N)(e=>({onLoadWorkflow:e.onLoadWorkflow,onDownloadWorkflow:e.onDownloadWorkflow,onSaveLocalWorkFlow:e.onSaveLocalWorkFlow,onUpdateLocalWorkFlowGraph:e.onUpdateLocalWorkFlowGraph,onUpdateLocalWorkFlowTitle:e.onUpdateLocalWorkFlowTitle}))),u=(0,r.useCallback)(()=>{c(e),o(n+1),O.Am.success("Success! ".concat(null!=e?e:"Your workflow"," have been saved."))},[n,c,e]),m=(0,r.useCallback)((e,t)=>{(0,S.Sf)(e),o(n+1),O.Am.info("".concat(t," has been deleted."))},[n]),p=(0,r.useCallback)((e,t)=>{e?(i(e),o(n+1),O.Am.success("Success! ".concat(t," have been loaded."))):O.Am.error("Error! Invalid workflow data.")},[n,i]),f=(0,r.useCallback)((e,t)=>{x(e),o(n+1),O.Am.success("Success! ".concat(t," have been update."))},[n,x]),j=(0,r.useCallback)((e,t)=>{h(e,t),o(n+1),O.Am.success("Success! the workflow have been renamed to ".concat(t," ."))},[n,h]);(0,r.useCallback)(()=>{(0,S.W)(),i(y.Z),o(n+1),O.Am.success("Success! load default workflow.")},[n,i]);let b=(0,r.useCallback)(e=>{(0,S.Sk)(e,e=>{e?(i(e),O.Am.success("Success! the workflow have been loaded.")):O.Am.error("Error! Invalid workflow file.")})},[n,i]);return(0,r.useEffect)(()=>{try{let e=(0,S.qW)();Array.isArray(e)?l(e.sort((e,t)=>t.time-e.time)):console.error("Invalid local workflows data")}catch(e){console.error("Error retrieving local workflows:",e)}},[n]),(0,r.useCallback)((e,t)=>(0,s.jsx)(L,{item:e,index:t,handleLoad:p,handleUpdate:f,handleDelete:m,handleRename:j}),[m,p,j,f]),(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,s.jsx)(g.z,{className:"bg-border hover:bg-black text-white mt-3 mx-5",onClick:u,children:"Save"}),(0,s.jsx)(Z,{onUpload:b}),(0,s.jsxs)("div",{children:[(0,s.jsx)(F._,{children:"Local Workflows"}),null==a?void 0:a.map((e,t)=>(0,s.jsx)("li",{className:"border-b border-gray-200 last:border-b-0 list-none",children:(0,s.jsx)(L,{item:e,index:t,handleLoad:p,handleUpdate:f,handleDelete:m,handleRename:j})},e.id))]})]})}),W=e=>{let{setOpen:t}=e;return(0,s.jsxs)(o.PK,{children:[(0,s.jsx)(o.t9,{asChild:!0}),(0,s.jsx)(o.cZ,{className:"fixed inset-0 z-50 flex flex-col items-center justify-center p-4",children:(0,s.jsxs)("div",{className:"bg-black p-6 rounded-lg shadow-lg",children:[(0,s.jsx)(o.$N,{className:"text-lg font-bold",children:"Are you sure?"}),(0,s.jsx)(o.Be,{className:"text-sm",children:"This action will clear the graph. Do you want to proceed?"}),(0,s.jsxs)("div",{className:"mt-4 flex justify-end space-x-2",children:[(0,s.jsx)(o.GG,{asChild:!0,children:(0,s.jsx)(g.z,{onClick:()=>t(!1),variant:"outline",children:"Cancel"})}),(0,s.jsx)(g.z,{onClick:()=>{t(!1)},children:"Confirm"})]})]})})]})},U=e=>{let{setOpen:t}=e,{edgeType:a,onEdgesType:l}=(0,C.q)((0,E.N)(e=>({edgeType:e.edgeType,onEdgesType:e.onEdgesType})));return(0,s.jsx)(o.PK,{children:(0,s.jsx)(o.cZ,{className:"fixed inset-0 z-50 flex items-center flex-col justify-center p-4",children:(0,s.jsxs)("div",{className:"bg-black p-1 rounded-lg shadow-lg relative",children:[(0,s.jsx)(o.$N,{className:"text-lg font-bold mt-0.5 mr-10",children:"Settings"}),(0,s.jsx)(o.GG,{asChild:!0,children:(0,s.jsx)(g.z,{className:"absolute top-0 right-2 p-1 bg-transparent hover:bg-transparent border-none shadow-none",onClick:()=>t(!1),variant:"outline",children:(0,s.jsx)(k.Pxu,{})})})]})})})};var V=a(1353),q=a(1348);let M=e=>{let{className:t}=e;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:(0,c.cn)("w-6 h-6 ",t),children:(0,s.jsx)("path",{d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})})},I=e=>{let{className:t}=e;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:(0,c.cn)("w-6 h-6 ",t),children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",clipRule:"evenodd"})})},_=e=>{let{loadingStates:t,value:a=0}=e;return(0,s.jsx)("div",{className:"flex relative justify-start max-w-xl mx-auto flex-col mt-40",children:t.map((e,t)=>{let l=Math.abs(t-a);return(0,s.jsxs)(V.E.div,{className:(0,c.cn)("justify-between flex gap-2 mb-4"),initial:{opacity:0,y:-(40*a)},animate:{opacity:Math.max(1-.2*l,0),y:-(40*a)},transition:{duration:.5},children:[(0,s.jsxs)("div",{children:[t>a&&(0,s.jsx)(M,{className:"h-5 w-5 text-black dark:text-white"}),t<=a&&(0,s.jsx)(I,{className:(0,c.cn)("h-5 w-5","text-black dark:text-white",a===t&&"text-black dark:text-lime-500 opacity-100")})]}),(0,s.jsx)("span",{className:(0,c.cn)("text-sm text-right text-black dark:text-white",a===t&&"text-black dark:text-lime-500 opacity-100"),children:e.text})]},t)})})},P=e=>{let{loadingStates:t,loading:a,duration:l=1e4,loop:n=!1}=e,[o,i]=(0,r.useState)(0);return(0,r.useEffect)(()=>{if(!a){i(0);return}let e=setTimeout(()=>{i(e=>n?e===t.length-1?0:e+1:Math.min(e+1,t.length-1))},l);return()=>clearTimeout(e)},[o,a,n,t.length,l]),(0,s.jsx)(q.M,{mode:"wait",children:a&&(0,s.jsx)(V.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:(0,c.cn)("fixed -bottom-56 right-0 z-[100] h-[80px] backdrop-blur-md"),children:(0,s.jsx)("div",{className:"h-96  relative",children:(0,s.jsx)(_,{value:o,loadingStates:t})})})})},B=[{text:"CheckpointLoaderSimple"},{text:"KSampler"}],Y=e=>{let{content:t,children:a}=e;return(0,s.jsxs)(v,{children:[(0,s.jsx)(w,{asChild:!0,children:a}),(0,s.jsx)(N,{side:"left",className:"text-xs",children:t})]})},J=()=>{let[e,t]=(0,r.useState)(!1),[a,l]=(0,r.useState)(0),{onSubmit:n,queue:o,onDeleteFromQueue:i,promptError:d,onEdgesAnimate:x,expanded:h,onExpand:u}=(0,C.q)((0,E.N)(e=>({onSubmit:e.onSubmit,queue:e.queue,onDeleteFromQueue:e.onDeleteFromQueue,promptError:e.promptError,onEdgesAnimate:e.onEdgesAnimate,onExpand:e.onExpand,expanded:e.expanded})));(0,r.useEffect)(()=>{void 0!==d&&O.Am.error(d)},[d,a]),(0,r.useEffect)(()=>{x(o.length>0)},[o,x]);let m=(0,r.useCallback)(()=>{t(!0),n(),l(e=>e+1)},[n]);return o.length,(0,s.jsxs)(v,{children:[(0,s.jsx)(P,{loadingStates:B,loading:e}),(0,s.jsx)(w,{asChild:!0,children:(0,s.jsx)(g.z,{className:(0,c.cn)("relative h-12 w-12 rounded-3xl shadow-lg bg-gradient-to-b text-white dark:text-black dark:from-white dark:to-blue-50 ring-2 ring-blue-50 ring-opacity-60","from-slate-800 to-slate-700 ring-slate-400","hover:rounded-lg transition-all duration-200"),onClick:m,children:(0,s.jsx)(k.o1U,{})})}),(0,s.jsx)(N,{side:"left",className:"text-xs bg-white text-black",children:"Queue prompt"})]})};var H=r.memo(()=>{let[e,t]=(0,r.useState)(!1),[a,l]=(0,r.useState)(!1),[n,i]=(0,r.useState)(!1),[d,c]=(0,r.useState)(!1),{expanded:u,onExpand:m}=(0,C.q)(e=>({expanded:e.expanded,onExpand:e.onExpand})),p=()=>{l(!a),m()};return(0,s.jsx)(b,{delayDuration:0,children:(0,s.jsxs)("div",{className:"fixed right-4 top-4 flex flex-col gap-3 m-2",children:[(0,s.jsx)(J,{}),(0,s.jsxs)(x,{modal:!0,open:e,onOpenChange:t,children:[(0,s.jsx)(Y,{content:"Save/load workflows",children:(0,s.jsx)(h,{asChild:!0,children:(0,s.jsx)(g.z,{onClick:()=>t(!e),className:"relative rounded-3xl shadow-lg hover:bg-background hover:rounded-lg transition-all duration-200 h-12 w-12",variant:"outline",children:(0,s.jsx)(k.otr,{})})})}),(0,s.jsx)(f,{side:"left",className:"overflow-y-scroll",children:(0,s.jsx)(R,{})})]}),(0,s.jsx)(Y,{content:"Recalculate node positions",children:(0,s.jsx)(g.z,{onClick:()=>{},className:"relative rounded-3xl shadow-lg hover:bg-background hover:rounded-lg transition-all duration-200 h-12 w-12",variant:"outline",children:(0,s.jsx)(k.tPC,{})})}),(0,s.jsx)(Y,{content:"Toggle parameter dropdowns",children:(0,s.jsx)(g.z,{onClick:()=>p(),className:"relative rounded-3xl shadow-lg hover:bg-background hover:rounded-lg transition-all duration-200 h-12 w-12",variant:"outline",children:a?(0,s.jsx)(k.hNW,{}):(0,s.jsx)(k.RgI,{})})}),(0,s.jsxs)(o.Vq,{open:n,onOpenChange:i,children:[(0,s.jsx)(Y,{content:"Clear graph",children:(0,s.jsx)(o.hg,{asChild:!0,children:(0,s.jsx)(g.z,{onClick:()=>i(!0),className:"relative rounded-3xl shadow-lg hover:bg-background hover:rounded-lg transition-all duration-200 h-12 w-12",variant:"outline",children:(0,s.jsx)(k.XHJ,{})})})}),(0,s.jsx)(W,{setOpen:i})]}),(0,s.jsxs)(o.Vq,{open:d,onOpenChange:c,children:[(0,s.jsx)(Y,{content:"Settings",children:(0,s.jsx)(o.hg,{asChild:!0,children:(0,s.jsx)(g.z,{onClick:()=>{},className:"relative rounded-3xl shadow-lg hover:bg-background hover:rounded-lg transition-all duration-200 h-12 w-12",variant:"outline",children:(0,s.jsx)(k.UG6,{})})})}),(0,s.jsx)(U,{setOpen:c})]})]})})}),Q=a(3606),$=a(5314),X=a(8969),ee=a(6051),et=a(4228),ea=a(1774),es=a(2198);let el={maxHistorySize:100,enableShortcuts:!0};var en=function(){let{maxHistorySize:e=el.maxHistorySize,enableShortcuts:t=el.enableShortcuts}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:el,[a,s]=(0,r.useState)([]),[l,n]=(0,r.useState)([]),{setNodes:o,setEdges:i,getNodes:d,getEdges:c}=(0,Q._K)(),x=(0,r.useCallback)(()=>{s(t=>[...t.slice(t.length-e+1,t.length),{nodes:d(),edges:c()}]),n([])},[d,c,e]),h=(0,r.useCallback)(()=>{let e=a[a.length-1];e&&(s(e=>e.slice(0,e.length-1)),n(e=>[...e,{nodes:d(),edges:c()}]),o(e.nodes),i(e.edges))},[o,i,d,c,a]),u=(0,r.useCallback)(()=>{let e=l[l.length-1];e&&(n(e=>e.slice(0,e.length-1)),s(e=>[...e,{nodes:d(),edges:c()}]),o(e.nodes),i(e.edges))},[o,i,d,c,l]);return(0,r.useEffect)(()=>{if(!t)return;let e=e=>{"z"===e.key&&(e.ctrlKey||e.metaKey)&&e.shiftKey?(u(),e.preventDefault()):"z"===e.key&&(e.ctrlKey||e.metaKey)&&(h(),e.preventDefault())};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[h,u,t]),{undo:h,redo:u,takeSnapshot:x,canUndo:!a.length,canRedo:!l.length}};a(7333);var er=e=>{let{strength:t=-1e3,distance:a=1e3}=e,l=(0,r.useMemo)(()=>({[es.f]:es.Z}),[]),{theme:n}=(0,ea.F)(),o=(0,r.useRef)(null),i=(0,r.useRef)(!0),{takeSnapshot:d}=en(),[c,x]=(0,r.useState)(null),{nodes:h,edges:u,onInit:m,onNodesChange:p,onEdgesChange:f,onConnect:g,onAddNode:j,onCopyNode:b,onPasteNode:v,onSetNodesGroup:w,onDeleteNode:N,onCreateGroup:k}=(0,C.q)((0,E.N)(e=>({nodes:e.nodes,edges:e.edges,onInit:e.onInit,onNodesChange:(0,et.Z)(e.onNodesChange,1),onEdgesChange:(0,et.Z)(e.onEdgesChange,1),onConnect:e.onConnect,onAddNode:e.onAddNode,onCopyNode:e.onCopyNode,onPasteNode:e.onPasteNode,onSetNodesGroup:e.onSetNodesGroup,onDeleteNode:e.onDeleteNode,onCreateGroup:e.onCreateGroup}))),y=(0,r.useCallback)(()=>{i.current=!1},[]),z=(0,r.useCallback)((e,t)=>{d(),i.current=!0,f([{id:e.id,type:"remove"}]),g(t)},[f,g,d]),D=(0,r.useCallback)((e,t)=>{i.current||f([{id:t.id,type:"remove"}]),i.current=!0},[f]),K=(0,r.useCallback)(e=>{e.preventDefault(),e.dataTransfer.dropEffect="move"},[]),L=(0,r.useCallback)(e=>{e.preventDefault();let t=JSON.parse(e.dataTransfer.getData("application/reactflow"));if(!t)return;let a=(0,S.yY)(e.clientX,e.clientY,o,c);d(),j({widget:t,position:a})},[c,j,d]),O=(0,r.useCallback)((e,t,a)=>{d(),a.length>2||"Group"!==t.data.name||c.getIntersectingNodes(t).filter(e=>"Group"!==e.data.name&&(e.parentNode===t.id||!e.parentNode)).map(e=>e.id)},[c,d]),A=(0,r.useCallback)(()=>{let e=b();navigator.clipboard.writeText(JSON.stringify(e)),console.log("[Copy]",e)},[b]),T=(0,r.useCallback)(async()=>{try{let e=await navigator.clipboard.readText(),t=JSON.parse(e),a=(0,S.rf)(o,c);t&&v(t,a),console.log("[Paste]",t,a)}catch(e){console.log("[Paste]",e)}},[c,v]),G=(0,r.useCallback)(e=>{if(e.metaKey||e.ctrlKey&&!e.altKey){let t={KeyC:A,KeyV:T,KeyG:k}[e.code];t&&t()}else("Delete"===e.code||"Backspace"===e.code)&&c.getNodes().forEach(e=>e.selected&&N(e.id))},[c,A,T,k,N]);return(0,r.useEffect)(()=>(window.addEventListener("keydown",G),()=>{window.removeEventListener("keydown",G)}),[G]),(0,s.jsxs)(Q.x$,{nodes:h,edges:u,nodeTypes:l,ref:o,fitView:!0,snapGrid:[20,20],minZoom:.05,multiSelectionKeyCode:["Shift"],deleteKeyCode:[],disableKeyboardA11y:!0,onNodesChange:p,onEdgesChange:f,onEdgeUpdate:z,onEdgeUpdateStart:y,onEdgeUpdateEnd:D,onConnect:g,onNodeDragStart:O,onDrop:L,onDragOver:K,onInit:e=>{x(e),m()},children:[(0,s.jsx)($.A,{variant:$.T.Dots}),(0,s.jsx)(X.Z,{showZoom:!1}),(0,s.jsx)(ee.a,{position:"bottom-left",nodeColor:e=>e.data.color||("light"===n?"#ECF0F1":"#2C3E50"),style:{width:150,height:100}})]})};function eo(){return(0,s.jsxs)("div",{className:"h-screen",children:[(0,s.jsx)(Q.tV,{children:(0,s.jsx)(n,{children:(0,s.jsx)(er,{})})}),(0,s.jsx)(H,{})]})}}},function(e){e.O(0,[310,780,929,579,14,971,69,744],function(){return e(e.s=4143)}),_N_E=e.O()}]);