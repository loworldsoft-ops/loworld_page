import{Z as i}from"./chunk-F2JKNDFL.js";var a=class n{messages=[];container=null;constructor(){this.createContainer()}showSuccess(t,e=3e3){this.showMessage(t,"success",e)}showError(t,e=4e3){this.showMessage(t,"error",e)}showWarning(t,e=3500){this.showMessage(t,"warning",e)}showInfo(t,e=3e3){this.showMessage(t,"info",e)}createContainer(){typeof window>"u"||typeof document>"u"||(this.container=document.createElement("div"),this.container.className="snackbar-container",this.container.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 8px;
      pointer-events: none;
      align-items: center;
    `,document.body.appendChild(this.container))}showMessage(t,e,r){console.log(`[${e.toUpperCase()}] ${t}`),this.container||this.createContainer();let s=Date.now().toString(),o={id:s,message:t,type:e,duration:r};this.messages.push(o),this.renderMessage(o),setTimeout(()=>{this.removeMessage(s)},r)}renderMessage(t){if(!this.container)return;let e=document.createElement("div");e.id=`snackbar-${t.id}`,e.className=`snackbar snackbar-${t.type}`,e.style.cssText=`
      background: ${this.getBackgroundColor(t.type)};
      color: white;
      padding: 12px 16px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      font-size: 14px;
      font-weight: 500;
      max-width: 400px;
      word-wrap: break-word;
      pointer-events: auto;
      transform: translateY(100%);
      transition: transform 0.3s ease, opacity 0.3s ease;
      opacity: 0;
      border-left: 4px solid ${this.getBorderColor(t.type)};
    `,e.textContent=t.message;let r=document.createElement("button");r.innerHTML="\xD7",r.style.cssText=`
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
    `,r.onclick=()=>this.removeMessage(t.id),e.appendChild(r),this.container.appendChild(e),setTimeout(()=>{e.style.transform="translateY(0)",e.style.opacity="1"},10)}removeMessage(t){let e=document.getElementById(`snackbar-${t}`);e&&(e.style.transform="translateY(100%)",e.style.opacity="0",setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},300)),this.messages=this.messages.filter(r=>r.id!==t)}getBackgroundColor(t){switch(t){case"success":return"#28a745";case"error":return"#dc3545";case"warning":return"#ffc107";case"info":return"#17a2b8";default:return"#6c757d"}}getBorderColor(t){switch(t){case"success":return"#1e7e34";case"error":return"#c82333";case"warning":return"#e0a800";case"info":return"#138496";default:return"#5a6268"}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=i({token:n,factory:n.\u0275fac,providedIn:"root"})};export{a};
