import{aa as c}from"./chunk-KPABI5SC.js";var p=class i{messages=[];container=null;progressSnackbar=null;progressSteps=[];isProgressMode=!1;constructor(){this.createContainer()}showSuccess(e,t=3e3){this.isProgressMode||this.showMessage(e,"success",t)}showError(e,t=4e3){this.showMessage(e,"error",t)}showWarning(e,t=3500){this.isProgressMode||this.showMessage(e,"warning",t)}showInfo(e,t=3e3){this.isProgressMode||this.showMessage(e,"info",t)}createContainer(){typeof window>"u"||typeof document>"u"||(this.container=document.createElement("div"),this.container.className="snackbar-container",this.container.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 20px;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 8px;
      pointer-events: none;
      align-items: flex-start;
    `,document.body.appendChild(this.container))}showMessage(e,t,s){console.log(`[${t.toUpperCase()}] ${e}`),this.container||this.createContainer();let r=Date.now().toString(),n={id:r,message:e,type:t,duration:s};this.messages.push(n),this.renderMessage(n),setTimeout(()=>{this.removeMessage(r)},s)}renderMessage(e){if(!this.container)return;let t=document.createElement("div");t.id=`snackbar-${e.id}`,t.className=`snackbar snackbar-${e.type}`,t.style.cssText=`
      background: ${this.getBackgroundColor(e.type)};
      color: white;
      padding: 12px 16px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      font-size: 14px;
      font-weight: 500;
      max-width: 400px;
      word-wrap: break-word;
      pointer-events: auto;
      transform: translateX(-100%);
      transition: transform 0.3s ease, opacity 0.3s ease;
      opacity: 0;
      border-left: 4px solid ${this.getBorderColor(e.type)};
    `,t.textContent=e.message;let s=document.createElement("button");s.innerHTML="\xD7",s.style.cssText=`
      background: none;
      border: none;
      color: white;
      font-size: 18px;
      font-weight: bold;
      margin-left: 12px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
      opacity: 0.8;
    `,s.onclick=()=>this.removeMessage(e.id),t.appendChild(s),this.container.appendChild(t),setTimeout(()=>{t.style.transform="translateX(0)",t.style.opacity="1"},10)}removeMessage(e){let t=document.getElementById(`snackbar-${e}`);t&&(t.style.transform="translateX(-100%)",t.style.opacity="0",setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t)},300)),this.messages=this.messages.filter(s=>s.id!==e)}getBackgroundColor(e){switch(e){case"success":return"#28a745";case"error":return"#dc3545";case"warning":return"#ffc107";case"info":return"#17a2b8";default:return"#6c757d"}}getBorderColor(e){switch(e){case"success":return"#1e7e34";case"error":return"#c82333";case"warning":return"#e0a800";case"info":return"#138496";default:return"#5a6268"}}startProgress(e){this.isProgressMode=!0,this.progressSteps=e.map((t,s)=>({label:t,status:s===0?"active":"pending"})),this.renderProgressSnackbar()}updateProgress(e){e>=0&&e<this.progressSteps.length&&(this.progressSteps[e].status="completed",e+1<this.progressSteps.length&&(this.progressSteps[e+1].status="active"),this.updateProgressSnackbar())}completeProgress(){this.progressSteps.forEach(e=>{e.status!=="error"&&(e.status="completed")}),this.updateProgressSnackbar(),setTimeout(()=>{this.closeProgress(),this.isProgressMode=!1},1e3)}errorProgress(e){e>=0&&e<this.progressSteps.length&&(this.progressSteps[e].status="error",this.updateProgressSnackbar()),this.isProgressMode=!1}closeProgress(){this.progressSnackbar&&(this.progressSnackbar.style.transform="translateX(-50%) translateY(100%)",this.progressSnackbar.style.opacity="0",setTimeout(()=>{this.progressSnackbar&&this.progressSnackbar.parentNode&&this.progressSnackbar.parentNode.removeChild(this.progressSnackbar),this.progressSnackbar=null,this.progressSteps=[],this.isProgressMode=!1},300))}renderProgressSnackbar(){if(!this.container)return;this.progressSnackbar&&this.closeProgress(),this.progressSnackbar=document.createElement("div"),this.progressSnackbar.className="progress-snackbar",this.progressSnackbar.style.cssText=`
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      color: white;
      padding: 16px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      font-size: 13px;
      min-width: 350px;
      max-width: 450px;
      pointer-events: auto;
      transform: translateX(-50%) translateY(100%);
      transition: transform 0.3s ease, opacity 0.3s ease;
      opacity: 0;
      position: fixed;
      bottom: 80px;
      left: 50%;
      z-index: 10000;
      border: 1px solid rgba(255, 255, 255, 0.1);
    `;let e=document.createElement("div");e.style.cssText=`
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    `;let t=document.createElement("div");t.textContent="\u{1F4CA} \uBD84\uC11D \uC9C4\uD589 \uC911",t.style.cssText=`
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.5px;
    `,t.className="progress-title";let s=document.createElement("button");s.innerHTML="\xD7",s.style.cssText=`
      background: transparent;
      border: none;
      color: white;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      padding: 0;
      width: 20px;
      height: 20px;
      line-height: 1;
      transition: transform 0.2s;
      opacity: 0.6;
    `,s.onmouseover=()=>{s.style.opacity="1",s.style.transform="scale(1.2)"},s.onmouseout=()=>{s.style.opacity="0.6",s.style.transform="scale(1)"},s.onclick=()=>this.closeProgress(),e.appendChild(t),e.appendChild(s);let r=document.createElement("div");r.className="progress-steps",r.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: 4px;
      background: rgba(0, 0, 0, 0.2);
      padding: 8px;
      border-radius: 4px;
    `,this.progressSteps.forEach((o,l)=>{let d=this.createStepElement(o,l);r.appendChild(d)});let n=document.createElement("div");n.className="progress-bar-container",n.style.cssText=`
      margin-top: 10px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      height: 4px;
      overflow: hidden;
    `;let a=document.createElement("div");if(a.className="progress-bar",a.style.cssText=`
      background: linear-gradient(90deg, #3498db 0%, #2ecc71 100%);
      height: 100%;
      width: 0%;
      transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 3px;
    `,n.appendChild(a),this.progressSnackbar.appendChild(e),this.progressSnackbar.appendChild(r),this.progressSnackbar.appendChild(n),this.container.appendChild(this.progressSnackbar),!document.getElementById("progress-animation-styles")){let o=document.createElement("style");o.id="progress-animation-styles",o.textContent=`
        @keyframes flipIn {
          0% {
            transform: perspective(400px) rotateX(-90deg);
            opacity: 0;
          }
          40% {
            transform: perspective(400px) rotateX(20deg);
          }
          100% {
            transform: perspective(400px) rotateX(0deg);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        .flip-animation {
          animation: flipIn 0.4s ease-out;
        }
      `,document.head.appendChild(o)}setTimeout(()=>{this.progressSnackbar&&(this.progressSnackbar.style.transform="translateX(-50%) translateY(0)",this.progressSnackbar.style.opacity="1")},10)}createStepElement(e,t){let s=document.createElement("div");s.className=`progress-step step-${e.status} flip-animation`,s.id=`progress-step-${t}`,s.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 6px 10px;
      border-radius: 3px;
      background: ${this.getStepBackground(e.status)};
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border-left: 3px solid ${this.getStepBorderColor(e.status)};
      font-family: 'Courier New', monospace;
    `;let r=document.createElement("div");r.className="step-icon",r.style.cssText=`
      width: 20px;
      height: 20px;
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      flex-shrink: 0;
      font-weight: bold;
      ${this.getStepIconStyle(e.status)}
    `,r.innerHTML=this.getStepIcon(e.status,t);let n=document.createElement("div");n.textContent=e.label,n.style.cssText=`
      flex: 1;
      font-size: 12px;
      opacity: ${e.status==="pending"?"0.5":"1"};
      font-weight: ${e.status==="active"?"600":"400"};
      letter-spacing: 0.3px;
      text-transform: uppercase;
    `;let a=document.createElement("div");return a.style.cssText=`
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 1px;
      opacity: 0.8;
    `,a.textContent=this.getStatusText(e.status),s.appendChild(r),s.appendChild(n),s.appendChild(a),s}getStatusText(e){switch(e){case"active":return"IN PROGRESS";case"completed":return"COMPLETED";case"error":return"FAILED";default:return"WAITING"}}getStepBorderColor(e){switch(e){case"active":return"#3498db";case"completed":return"#2ecc71";case"error":return"#e74c3c";default:return"transparent"}}getStepBackground(e){switch(e){case"active":return"rgba(52, 152, 219, 0.15)";case"completed":return"rgba(46, 204, 113, 0.15)";case"error":return"rgba(231, 76, 60, 0.15)";default:return"rgba(255, 255, 255, 0.03)"}}getStepIconStyle(e){switch(e){case"active":return`
          background: #3498db;
          color: white;
          animation: pulse 1.5s ease-in-out infinite;
        `;case"completed":return`
          background: #2ecc71;
          color: white;
        `;case"error":return`
          background: #e74c3c;
          color: white;
        `;default:return`
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.2);
        `}}getStepIcon(e,t){switch(e){case"active":return"\u27F3";case"completed":return"\u2713";case"error":return"\u2717";default:return`${t+1}`}}updateProgressSnackbar(){if(!this.progressSnackbar)return;let e=this.progressSnackbar.querySelector(".progress-steps");e&&(e.innerHTML="",this.progressSteps.forEach((r,n)=>{let a=this.createStepElement(r,n);e.appendChild(a)}));let t=this.progressSnackbar.querySelector(".progress-bar");if(t){let n=this.progressSteps.filter(a=>a.status==="completed").length/this.progressSteps.length*100;t.style.width=`${n}%`}if(this.progressSteps.every(r=>r.status==="completed")){let r=this.progressSnackbar.querySelector(".progress-title");r&&r.textContent?.includes("\uC9C4\uD589 \uC911")&&(r.textContent="\u2705 \uBD84\uC11D \uC644\uB8CC!")}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})};export{p as a};
