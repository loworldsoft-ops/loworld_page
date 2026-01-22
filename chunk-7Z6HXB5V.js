import{a as m}from"./chunk-CSYX3WHT.js";import{$ as u,g as h}from"./chunk-NQIIW72T.js";import{a as i,b as l}from"./chunk-TWZW5B45.js";var f=class c{messages=[];container=null;progressSnackbar=null;progressSteps=[];isProgressMode=!1;constructor(){this.createContainer()}shouldShowSnackbar(){if(!m.ezmMode)return!0;try{let e=localStorage.getItem("ezm_user_preferences");if(e)return JSON.parse(e).showSnackbar!==!1}catch(e){console.error("\u274C [Snackbar] \uC124\uC815 \uD655\uC778 \uC2E4\uD328:",e)}return!0}showSuccess(e,t=3e3){this.shouldShowSnackbar()&&(this.isProgressMode||this.showMessage(e,"success",t))}showSuccessWithAction(e,t,r=5e3){this.shouldShowSnackbar()&&(this.isProgressMode||this.showMessageWithAction(e,"success",t,r))}showInfoWithAction(e,t,r=5e3){this.shouldShowSnackbar()&&(this.isProgressMode||this.showMessageWithAction(e,"info",t,r))}showError(e,t=4e3){this.shouldShowSnackbar()&&this.showMessage(e,"error",t)}showWarning(e,t=3500){this.shouldShowSnackbar()&&(this.isProgressMode||this.showMessage(e,"warning",t))}showInfo(e,t=3e3){this.shouldShowSnackbar()&&(this.isProgressMode||this.showMessage(e,"info",t))}showSuccessAlways(e,t=3e3){this.isProgressMode||this.showMessage(e,"success",t)}showInfoAlways(e,t=3e3){this.isProgressMode||this.showMessage(e,"info",t)}createContainer(){typeof window>"u"||typeof document>"u"||(this.container=document.createElement("div"),this.container.className="snackbar-container",this.container.style.cssText=`
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10000;
      pointer-events: none;
    `,document.body.appendChild(this.container))}currentSnackbarElement=null;currentSnackbarTimeout=null;showMessage(e,t,r){if(this.container||this.createContainer(),this.currentSnackbarTimeout&&clearTimeout(this.currentSnackbarTimeout),this.currentSnackbarElement){let s=this.currentSnackbarElement.querySelector(".snackbar-text");s&&(s.textContent=e)}else{let a={id:Date.now().toString(),message:e,type:t,duration:r};this.messages.push(a),this.renderMessage(a)}this.currentSnackbarTimeout=setTimeout(()=>{this.removeCurrentSnackbar()},r)}showMessageWithAction(e,t,r,s){this.container||this.createContainer();let a=Date.now().toString(),n={id:a,message:e,type:t,duration:s,action:r};this.messages.push(n),this.renderMessageWithAction(n),setTimeout(()=>{this.removeMessage(a)},s)}renderMessage(e){if(!this.container)return;let t=document.createElement("div");t.id=`snackbar-${e.id}`,t.className=`snackbar snackbar-${e.type}`,t.style.cssText=`
      background: rgba(97, 97, 97, 0.95);
      color: white;
      padding: 12px 20px;
      border-radius: 20px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
      font-size: 14px;
      font-weight: 500;
      min-width: 200px;
      max-width: 400px;
      word-wrap: break-word;
      pointer-events: auto;
      transform: scale(0.8);
      transition: transform 0.3s ease, opacity 0.3s ease;
      opacity: 0;
      text-align: center;
    `;let r=document.createElement("span");r.className="snackbar-text",r.textContent=e.message,t.appendChild(r),this.container.appendChild(t),this.currentSnackbarElement=t,setTimeout(()=>{t.style.transform="scale(1)",t.style.opacity="1"},10)}removeCurrentSnackbar(){this.currentSnackbarElement&&(this.currentSnackbarElement.style.transform="scale(0.8)",this.currentSnackbarElement.style.opacity="0",setTimeout(()=>{this.currentSnackbarElement&&this.currentSnackbarElement.parentNode&&this.currentSnackbarElement.parentNode.removeChild(this.currentSnackbarElement),this.currentSnackbarElement=null},300))}renderMessageWithAction(e){if(!this.container)return;let t=document.createElement("div");t.id=`snackbar-${e.id}`,t.className=`snackbar snackbar-${e.type} snackbar-with-action`,t.style.cssText=`
      background: ${this.getBackgroundColor(e.type)};
      color: white;
      padding: 12px 16px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      font-size: 14px;
      font-weight: 500;
      max-width: 450px;
      word-wrap: break-word;
      pointer-events: auto;
      transform: translateX(-100%);
      transition: transform 0.3s ease, opacity 0.3s ease;
      opacity: 0;
      border-left: 4px solid ${this.getBorderColor(e.type)};
      display: flex;
      align-items: center;
      gap: 16px;
      justify-content: space-between;
    `;let r=document.createElement("span");r.textContent=e.message,r.style.cssText=`
      flex: 1;
      min-width: 0;
    `,t.appendChild(r);let s=document.createElement("div");if(s.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    `,e.action){let n=document.createElement("button");n.textContent=e.action.label;let o=!e.action.style||e.action.style==="primary";n.style.cssText=`
        background: ${o?"rgba(255, 255, 255, 0.2)":"transparent"};
        border: ${o?"none":"1px solid rgba(255, 255, 255, 0.5)"};
        color: white;
        padding: 6px 16px;
        border-radius: 4px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s ease;
        white-space: nowrap;
      `,n.onmouseover=()=>{n.style.background=o?"rgba(255, 255, 255, 0.3)":"rgba(255, 255, 255, 0.1)"},n.onmouseout=()=>{n.style.background=o?"rgba(255, 255, 255, 0.2)":"transparent"},n.onclick=()=>{e.action.callback(),this.removeMessage(e.id)},s.appendChild(n)}let a=document.createElement("button");a.innerHTML="\xD7",a.style.cssText=`
      background: none;
      border: none;
      color: white;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      padding: 0;
      line-height: 1;
      opacity: 0.8;
      width: 20px;
      height: 20px;
    `,a.onmouseover=()=>{a.style.opacity="1"},a.onmouseout=()=>{a.style.opacity="0.8"},a.onclick=()=>this.removeMessage(e.id),s.appendChild(a),t.appendChild(s),this.container.appendChild(t),setTimeout(()=>{t.style.transform="translateX(0)",t.style.opacity="1"},10)}removeMessage(e){let t=document.getElementById(`snackbar-${e}`);t&&(t.style.transform="translateX(-100%)",t.style.opacity="0",setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t)},300)),this.messages=this.messages.filter(r=>r.id!==e)}getBackgroundColor(e){switch(e){case"success":return"#28a745";case"error":return"#dc3545";case"warning":return"#ffc107";case"info":return"#17a2b8";default:return"#6c757d"}}getBorderColor(e){switch(e){case"success":return"#1e7e34";case"error":return"#c82333";case"warning":return"#e0a800";case"info":return"#138496";default:return"#5a6268"}}startProgress(e){this.isProgressMode=!0,this.progressSteps=e.map((t,r)=>({label:t,status:r===0?"active":"pending"})),this.renderProgressSnackbar()}updateProgress(e){e>=0&&e<this.progressSteps.length&&(this.progressSteps[e].status="completed",e+1<this.progressSteps.length&&(this.progressSteps[e+1].status="active"),this.updateProgressSnackbar())}completeProgress(){this.progressSteps.forEach(e=>{e.status!=="error"&&(e.status="completed")}),this.updateProgressSnackbar(),setTimeout(()=>{this.closeProgress(),this.isProgressMode=!1},1e3)}errorProgress(e){e>=0&&e<this.progressSteps.length&&(this.progressSteps[e].status="error",this.updateProgressSnackbar()),this.isProgressMode=!1}closeProgress(){this.progressSnackbar&&(this.progressSnackbar.style.transform="translateX(-50%) translateY(100%)",this.progressSnackbar.style.opacity="0",setTimeout(()=>{this.progressSnackbar&&this.progressSnackbar.parentNode&&this.progressSnackbar.parentNode.removeChild(this.progressSnackbar),this.progressSnackbar=null,this.progressSteps=[],this.isProgressMode=!1},300))}renderProgressSnackbar(){if(!this.container)return;this.progressSnackbar&&this.closeProgress(),this.progressSnackbar=document.createElement("div"),this.progressSnackbar.className="progress-snackbar",this.progressSnackbar.style.cssText=`
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
    `,t.className="progress-title";let r=document.createElement("button");r.innerHTML="\xD7",r.style.cssText=`
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
    `,r.onmouseover=()=>{r.style.opacity="1",r.style.transform="scale(1.2)"},r.onmouseout=()=>{r.style.opacity="0.6",r.style.transform="scale(1)"},r.onclick=()=>this.closeProgress(),e.appendChild(t),e.appendChild(r);let s=document.createElement("div");s.className="progress-steps",s.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: 4px;
      background: rgba(0, 0, 0, 0.2);
      padding: 8px;
      border-radius: 4px;
    `,this.progressSteps.forEach((o,p)=>{let d=this.createStepElement(o,p);s.appendChild(d)});let a=document.createElement("div");a.className="progress-bar-container",a.style.cssText=`
      margin-top: 10px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      height: 4px;
      overflow: hidden;
    `;let n=document.createElement("div");if(n.className="progress-bar",n.style.cssText=`
      background: linear-gradient(90deg, #3498db 0%, #2ecc71 100%);
      height: 100%;
      width: 0%;
      transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 3px;
    `,a.appendChild(n),this.progressSnackbar.appendChild(e),this.progressSnackbar.appendChild(s),this.progressSnackbar.appendChild(a),this.container.appendChild(this.progressSnackbar),!document.getElementById("progress-animation-styles")){let o=document.createElement("style");o.id="progress-animation-styles",o.textContent=`
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
      `,document.head.appendChild(o)}setTimeout(()=>{this.progressSnackbar&&(this.progressSnackbar.style.transform="translateX(-50%) translateY(0)",this.progressSnackbar.style.opacity="1")},10)}createStepElement(e,t){let r=document.createElement("div");r.className=`progress-step step-${e.status} flip-animation`,r.id=`progress-step-${t}`,r.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 6px 10px;
      border-radius: 3px;
      background: ${this.getStepBackground(e.status)};
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border-left: 3px solid ${this.getStepBorderColor(e.status)};
      font-family: 'Courier New', monospace;
    `;let s=document.createElement("div");s.className="step-icon",s.style.cssText=`
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
    `,s.innerHTML=this.getStepIcon(e.status,t);let a=document.createElement("div");a.textContent=e.label,a.style.cssText=`
      flex: 1;
      font-size: 12px;
      opacity: ${e.status==="pending"?"0.5":"1"};
      font-weight: ${e.status==="active"?"600":"400"};
      letter-spacing: 0.3px;
      text-transform: uppercase;
    `;let n=document.createElement("div");return n.style.cssText=`
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 1px;
      opacity: 0.8;
    `,n.textContent=this.getStatusText(e.status),r.appendChild(s),r.appendChild(a),r.appendChild(n),r}getStatusText(e){switch(e){case"active":return"IN PROGRESS";case"completed":return"COMPLETED";case"error":return"FAILED";default:return"WAITING"}}getStepBorderColor(e){switch(e){case"active":return"#3498db";case"completed":return"#2ecc71";case"error":return"#e74c3c";default:return"transparent"}}getStepBackground(e){switch(e){case"active":return"rgba(52, 152, 219, 0.15)";case"completed":return"rgba(46, 204, 113, 0.15)";case"error":return"rgba(231, 76, 60, 0.15)";default:return"rgba(255, 255, 255, 0.03)"}}getStepIconStyle(e){switch(e){case"active":return`
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
        `}}getStepIcon(e,t){switch(e){case"active":return"\u27F3";case"completed":return"\u2713";case"error":return"\u2717";default:return`${t+1}`}}updateProgressSnackbar(){if(!this.progressSnackbar)return;let e=this.progressSnackbar.querySelector(".progress-steps");e&&(e.innerHTML="",this.progressSteps.forEach((s,a)=>{let n=this.createStepElement(s,a);e.appendChild(n)}));let t=this.progressSnackbar.querySelector(".progress-bar");if(t){let a=this.progressSteps.filter(n=>n.status==="completed").length/this.progressSteps.length*100;t.style.width=`${a}%`}if(this.progressSteps.every(s=>s.status==="completed")){let s=this.progressSnackbar.querySelector(".progress-title");s&&s.textContent?.includes("\uC9C4\uD589 \uC911")&&(s.textContent="\u2705 \uBD84\uC11D \uC644\uB8CC!")}}alertModal=null;showAlert(e,t,r="\uD655\uC778"){return new Promise(s=>{this.createAlertModal(e,t,r,s)})}showErrorAlert(e,t,r="\uD655\uC778"){return new Promise(s=>{this.createAlertModal(e,t,r,s,"error")})}showWarningAlert(e,t,r="\uD655\uC778"){return new Promise(s=>{this.createAlertModal(e,t,r,s,"warning")})}createAlertModal(e,t,r,s,a="info"){this.dismissAlertModal();let n=document.createElement("div");n.className="snackbar-alert-modal-overlay";let o={info:"\u{1F4E2}",error:"\u274C",warning:"\u26A0\uFE0F"},p={info:"#3498db",error:"#e74c3c",warning:"#f39c12"};n.innerHTML=`
      <div class="snackbar-alert-modal">
        <div class="snackbar-alert-icon" style="color: ${p[a]}">
          ${o[a]}
        </div>
        <h3 class="snackbar-alert-title">${e}</h3>
        <p class="snackbar-alert-message">${t.replace(/\n/g,"<br>")}</p>
        <button class="snackbar-alert-button" style="background: ${p[a]}">
          ${r}
        </button>
      </div>
    `;let d=document.createElement("style");d.textContent=`
      .snackbar-alert-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        animation: fadeIn 0.2s ease-out;
      }
      
      .snackbar-alert-modal {
        background: white;
        border-radius: 16px;
        padding: 28px 24px;
        max-width: 320px;
        width: 90%;
        text-align: center;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease-out;
      }
      
      .snackbar-alert-icon {
        font-size: 48px;
        margin-bottom: 16px;
      }
      
      .snackbar-alert-title {
        margin: 0 0 12px;
        font-size: 20px;
        font-weight: 600;
        color: #333;
      }
      
      .snackbar-alert-message {
        margin: 0 0 24px;
        font-size: 15px;
        color: #666;
        line-height: 1.5;
      }
      
      .snackbar-alert-button {
        width: 100%;
        padding: 14px 24px;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 600;
        color: white;
        cursor: pointer;
        transition: opacity 0.2s, transform 0.1s;
      }
      
      .snackbar-alert-button:hover {
        opacity: 0.9;
      }
      
      .snackbar-alert-button:active {
        transform: scale(0.98);
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideUp {
        from { 
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        to { 
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    `,n.appendChild(d);let S=n.querySelector(".snackbar-alert-button"),g=()=>{n.style.animation="fadeIn 0.2s ease-out reverse",setTimeout(()=>{n.remove(),this.alertModal=null,s()},150)};S?.addEventListener("click",g),n.addEventListener("click",x=>{x.target===n&&g()}),document.body.appendChild(n),this.alertModal=n}dismissAlertModal(){this.alertModal&&(this.alertModal.remove(),this.alertModal=null)}static \u0275fac=function(t){return new(t||c)};static \u0275prov=u({token:c,factory:c.\u0275fac,providedIn:"root"})};function y(c,e){if(!c)return"en";let t=c.toLowerCase();if(t==="ko")return"ko";if(t==="en")return"en";if(t==="ja")return"ja";if(t==="zh"){if(e){let r=e.toLowerCase();if(r.includes("tw")||r.includes("hk")||r.includes("hant"))return"zh"}return"zh"}return"en"}var b=class c{STORAGE_KEY="ezm_user_preferences";DEFAULT_PREFERENCES={showSnackbar:!0,language:"device",showThumbnailsInList:!0};preferencesSubject;preferences$;constructor(){let e=this.loadPreferences();this.preferencesSubject=new h(e),this.preferences$=this.preferencesSubject.asObservable()}loadPreferences(){try{let e=localStorage.getItem(this.STORAGE_KEY);if(e){let t=JSON.parse(e);return i(i({},this.DEFAULT_PREFERENCES),t)}}catch{}return i({},this.DEFAULT_PREFERENCES)}savePreferences(e){try{localStorage.setItem(this.STORAGE_KEY,JSON.stringify(e)),this.preferencesSubject.next(e)}catch{}}getPreferences(){return this.preferencesSubject.value}getShowSnackbar(){return this.preferencesSubject.value.showSnackbar}setShowSnackbar(e){let t=this.getPreferences(),r=l(i({},t),{showSnackbar:e});this.savePreferences(r)}getLanguage(){return this.preferencesSubject.value.language}getActualLanguage(){let e=this.preferencesSubject.value.language;return e==="device"?this.getDeviceLanguageMapped():e}getDeviceLanguageMapped(){let e=this.getPreferences();return y(e.deviceLanguage,e.deviceLanguageFull)}getDeviceLanguageInfo(){let e=this.getPreferences(),t=this.getDeviceLanguageMapped(),r={ko:"\uD55C\uAD6D\uC5B4",en:"English",zh:"\u4E2D\u6587(\u7E41\u9AD4)",ja:"\u65E5\u672C\u8A9E"};return{code:e.deviceLanguage||"en",display:r[t]}}setDeviceLanguageInfo(e,t,r){let s=this.getPreferences(),a=l(i({},s),{deviceLanguage:e,deviceLanguageFull:t,deviceLanguageDisplay:r});this.savePreferences(a)}setLanguage(e){let t=this.getPreferences(),r=l(i({},t),{language:e});this.savePreferences(r)}updatePreferences(e){let t=this.getPreferences(),r=i(i({},t),e);this.savePreferences(r)}resetPreferences(){this.savePreferences(i({},this.DEFAULT_PREFERENCES))}getAndroidLayout(){let e=this.getPreferences();return{statusBarHeight:e.androidStatusBarHeight||0,navigationBarHeight:e.androidNavigationBarHeight||0}}setAndroidLayout(e,t){let r=this.getPreferences(),s=l(i({},r),{androidStatusBarHeight:e,androidNavigationBarHeight:t});this.savePreferences(s)}applyAndroidLayoutToDOM(){console.warn("\u26A0\uFE0F [Layout] applyAndroidLayoutToDOM() \uD568\uC218\uB294 \uB354 \uC774\uC0C1 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!"),console.log("\u{1F4A1} [Layout] Android\uC5D0\uC11C \uC628 \uC2E4\uC81C deviceInfo \uAC12\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4."),console.log("\u{1F4A1} [Layout] Settings \uD398\uC774\uC9C0\uC758 applyLayoutAdjustment() \uBA54\uC11C\uB4DC\uB97C \uCC38\uC870\uD558\uC138\uC694.")}getShowThumbnailsInList(){return this.preferencesSubject.value.showThumbnailsInList??!0}setShowThumbnailsInList(e){let t=this.getPreferences(),r=l(i({},t),{showThumbnailsInList:e});this.savePreferences(r)}static \u0275fac=function(t){return new(t||c)};static \u0275prov=u({token:c,factory:c.\u0275fac,providedIn:"root"})};export{f as a,b};
