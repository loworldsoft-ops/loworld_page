import{v as h,y as b}from"./chunk-ZJ6AKLDS.js";import{$ as w,C as u,da as $,l as p,p as d}from"./chunk-5VJU6XTC.js";var P=class A{constructor(e){this.http=e;this.initApiKey()}apiKey="AIzaSyCSnZMkpalf4--NxFAAac19pY16V9qcQjM";apiUrl="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent";initApiKey(){let e=localStorage.getItem("gemini_api_key");e&&(this.apiKey=e)}setApiKey(e){this.apiKey=e,localStorage.setItem("gemini_api_key",e)}getApiKey(){return this.apiKey}hasApiKey(){return!!this.apiKey&&this.apiKey.length>0}generateScenario(e){if(!this.hasApiKey())return p(()=>new Error("Gemini API \uD0A4\uAC00 \uC124\uC815\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC124\uC815\uC5D0\uC11C API \uD0A4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."));let s={contents:[{parts:[{text:this.buildScenarioPrompt(e)}]}],generationConfig:{temperature:.9,topK:40,topP:.95,maxOutputTokens:2048}},a=new h({"Content-Type":"application/json","X-goog-api-key":this.apiKey});return this.http.post(this.apiUrl,s,{headers:a}).pipe(d(r=>{if(r?.candidates?.[0]?.content?.parts?.[0]?.text){let n=r.candidates[0].content.parts[0].text;return this.parseScenarioResponse(n)}throw new Error("\uC751\uB2F5 \uD615\uC2DD\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")}),u(r=>{console.error("Gemini API \uC2DC\uB098\uB9AC\uC624 \uC0DD\uC131 \uC624\uB958 \uC0C1\uC138:",{status:r.status,statusText:r.statusText,message:r.message,error:r.error,fullError:r});let n="AI \uC2DC\uB098\uB9AC\uC624 \uC0DD\uC131\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";return r.status===400?n="API \uD0A4\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":r.status===429?n="API \uD638\uCD9C \uD55C\uB3C4\uB97C \uCD08\uACFC\uD588\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.":r.error?.error?.message&&(n=r.error.error.message),console.error("\uCD5C\uC885 \uC5D0\uB7EC \uBA54\uC2DC\uC9C0:",n),p(()=>new Error(n))}))}generateCharacter(e){if(!this.hasApiKey())return p(()=>new Error("Gemini API \uD0A4\uAC00 \uC124\uC815\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4."));let s={contents:[{parts:[{text:this.buildCharacterPrompt(e)}]}],generationConfig:{temperature:.9,topK:40,topP:.95,maxOutputTokens:1024}},a=new h({"Content-Type":"application/json","X-goog-api-key":this.apiKey});return this.http.post(this.apiUrl,s,{headers:a}).pipe(d(r=>{if(r?.candidates?.[0]?.content?.parts?.[0]?.text){let n=r.candidates[0].content.parts[0].text;return this.parseCharacterResponse(n)}throw new Error("\uC751\uB2F5 \uD615\uC2DD\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")}),u(r=>{console.error("Gemini API \uCE90\uB9AD\uD130 \uC0DD\uC131 \uC624\uB958 \uC0C1\uC138:",{status:r.status,statusText:r.statusText,message:r.message,error:r.error,fullError:r});let n="AI \uCE90\uB9AD\uD130 \uC0DD\uC131\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";return r.error?.error?.message&&(n+=" - "+r.error.error.message),console.error("\uCD5C\uC885 \uC5D0\uB7EC \uBA54\uC2DC\uC9C0:",n),p(()=>new Error(n))}))}buildScenarioPrompt(e){let t=e.genre||"\uBB34\uD611",s=e.style||"\uC804\uD1B5\uC801\uC778",a=e.mood||"\uAE34\uC7A5\uAC10 \uB118\uCE58\uB294",r=e.additionalContext||"",i=e.isAdult||!1?`
- \u{1F51E} \uC131\uC778 \uCF58\uD150\uCE20: \uC608 (19+) - \uD3ED\uB825\uC801\uC774\uACE0 \uC120\uC815\uC801\uC778 \uC694\uC18C \uD3EC\uD568 \uAC00\uB2A5`:`
- \uC131\uC778 \uCF58\uD150\uCE20: \uC544\uB2C8\uC624 (\uC804\uC5F0\uB839)`;return`\uB2F9\uC2E0\uC740 \uC804\uBB38 \uBB34\uD611 \uC18C\uC124 \uC791\uAC00\uC785\uB2C8\uB2E4. \uB2E4\uC74C \uC870\uAC74\uC5D0 \uB9DE\uB294 \uBB34\uD611 \uC18C\uC124 \uC2DC\uB098\uB9AC\uC624\uB97C \uC0DD\uC131\uD574\uC8FC\uC138\uC694.

**\uC870\uAC74:**
- \uC7A5\uB974: ${t}
- \uC2A4\uD0C0\uC77C: ${s}
- \uBD84\uC704\uAE30: ${a}
${r?`- \uCD94\uAC00 \uC694\uAD6C\uC0AC\uD56D: ${r}`:""}${i}

**\uC0DD\uC131 \uD615\uC2DD (\uC815\uD655\uD788 \uC774 \uD615\uC2DD\uC73C\uB85C\uB9CC \uC751\uB2F5):**

\uC81C\uBAA9: [\uD765\uBBF8\uC9C4\uC9C4\uD55C \uC2DC\uB098\uB9AC\uC624 \uC81C\uBAA9]

\uC124\uBA85: [\uC2DC\uB098\uB9AC\uC624\uC5D0 \uB300\uD55C 2-3\uBB38\uC7A5\uC758 \uAC04\uB7B5\uD55C \uC124\uBA85]

\uB4F1\uC7A5\uC778\uBB3C:
- [\uC778\uBB3C1 \uC774\uB984/\uC5ED\uD560]
- [\uC778\uBB3C2 \uC774\uB984/\uC5ED\uD560]
- [\uC778\uBB3C3 \uC774\uB984/\uC5ED\uD560]
- [\uC778\uBB3C4 \uC774\uB984/\uC5ED\uD560]

\uBC30\uACBD: [\uC2DC\uAC04\uACFC \uC7A5\uC18C\uB97C \uD3EC\uD568\uD55C \uC0C1\uC138\uD55C \uBC30\uACBD \uC124\uBA85]

\uAC08\uB4F1: [\uC774\uC57C\uAE30\uC758 \uD575\uC2EC \uAC08\uB4F1\uC774\uB098 \uBB38\uC81C \uC0C1\uD669]

\uBAA9\uD45C: [\uC8FC\uC778\uACF5\uC774 \uB2EC\uC131\uD558\uACE0\uC790 \uD558\uB294 \uBAA9\uD45C]

\uBD84\uC704\uAE30: [\uC774\uC57C\uAE30\uC758 \uC804\uBC18\uC801\uC778 \uBD84\uC704\uAE30\uB098 \uD1A4]

\uD0DC\uADF8: [\uD0DC\uADF81, \uD0DC\uADF82, \uD0DC\uADF83, \uD0DC\uADF84, \uD0DC\uADF85]

**\uC911\uC694: \uC704 \uD615\uC2DD\uC744 \uC815\uD655\uD788 \uC9C0\uCF1C\uC11C \uC751\uB2F5\uD574\uC8FC\uC138\uC694. \uAC01 \uC139\uC158\uC740 \uC815\uD655\uD55C \uB808\uC774\uBE14\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4.**`}buildCharacterPrompt(e){return`\uB2F9\uC2E0\uC740 \uC804\uBB38 \uBB34\uD611 \uC18C\uC124 \uC791\uAC00\uC785\uB2C8\uB2E4. ${e||"\uC8FC\uC778\uACF5"} \uCE90\uB9AD\uD130\uB97C \uC0DD\uC131\uD574\uC8FC\uC138\uC694.

**\uC0DD\uC131 \uD615\uC2DD:**

\uC774\uB984: [\uBB34\uD611\uD48D\uC758 \uC774\uB984]
\uB098\uC774: [\uC22B\uC790\uB9CC]
\uC131\uBCC4: [\uB0A8\uC131/\uC5EC\uC131]
\uC5ED\uD560: [\uC8FC\uC778\uACF5/\uC801\uB300\uC790/\uC870\uC5F0/\uB2E8\uC5ED]
\uC678\uBAA8: [\uC0C1\uC138\uD55C \uC678\uBAA8 \uBB18\uC0AC]
\uC131\uACA9: [\uC131\uACA9 \uD2B9\uC9D5]
\uBC30\uACBD: [\uCE90\uB9AD\uD130\uC758 \uBC30\uACBD \uC2A4\uD1A0\uB9AC]
\uB2A5\uB825: [\uBB34\uACF5/\uB2A5\uB8251, \uBB34\uACF5/\uB2A5\uB8252, \uBB34\uACF5/\uB2A5\uB8253]
\uBAA9\uD45C: [\uCE90\uB9AD\uD130\uC758 \uBAA9\uD45C\uB098 \uB3D9\uAE30]
\uD2B9\uC131: [\uD2B9\uC1311, \uD2B9\uC1312, \uD2B9\uC1313]

**\uC911\uC694: \uC704 \uD615\uC2DD\uC744 \uC815\uD655\uD788 \uC9C0\uCF1C\uC11C \uC751\uB2F5\uD574\uC8FC\uC138\uC694.**`}parseScenarioResponse(e){try{let t={},s=e.match(/제목:\s*(.+)/);s&&(t.title=s[1].trim());let a=e.match(/설명:\s*(.+?)(?=\n\n|등장인물:|$)/s);a&&(t.description=a[1].trim());let r=e.match(/등장인물:\s*([\s\S]+?)(?=\n\n|배경:|$)/);r&&(t.characters=r[1].split(`
`).filter(m=>m.trim().startsWith("-")).map(m=>m.replace(/^-\s*/,"").trim()));let n=e.match(/배경:\s*(.+?)(?=\n\n|갈등:|$)/s);n&&(t.setting=n[1].trim());let i=e.match(/갈등:\s*(.+?)(?=\n\n|목표:|$)/s);i&&(t.conflict=i[1].trim());let l=e.match(/목표:\s*(.+?)(?=\n\n|분위기:|$)/s);l&&(t.goal=l[1].trim());let g=e.match(/분위기:\s*(.+?)(?=\n\n|태그:|$)/s);g&&(t.mood=g[1].trim());let f=e.match(/태그:\s*(.+?)$/s);return f&&(t.tags=f[1].split(",").map(m=>m.trim()).filter(m=>m.length>0)),console.log("\uD30C\uC2F1\uB41C \uC2DC\uB098\uB9AC\uC624:",t),t}catch(t){throw console.error("\uC2DC\uB098\uB9AC\uC624 \uD30C\uC2F1 \uC624\uB958:",t),new Error("AI \uC751\uB2F5\uC744 \uD30C\uC2F1\uD558\uB294\uB370 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.")}}parseCharacterResponse(e){try{let t={},s=e.match(/이름:\s*(.+)/);s&&(t.name=s[1].trim());let a=e.match(/나이:\s*(\d+)/);a&&(t.age=parseInt(a[1]));let r=e.match(/성별:\s*(.+?)(?=\n|$)/);if(r){let c=r[1].trim();c.includes("\uB0A8")?t.gender="male":c.includes("\uC5EC")?t.gender="female":t.gender="other"}let n=e.match(/역할:\s*(.+?)(?=\n|$)/);if(n){let c=n[1].trim();c.includes("\uC8FC\uC778\uACF5")?t.role="protagonist":c.includes("\uC801\uB300")||c.includes("\uC545\uC5ED")?t.role="antagonist":c.includes("\uC870\uC5F0")?t.role="supporting":t.role="minor"}let i=e.match(/외모:\s*(.+?)(?=\n\n|성격:|$)/s);i&&(t.appearance=i[1].trim());let l=e.match(/성격:\s*(.+?)(?=\n\n|배경:|$)/s);l&&(t.personality=l[1].trim());let g=e.match(/배경:\s*(.+?)(?=\n\n|능력:|$)/s);g&&(t.background=g[1].trim());let f=e.match(/능력:\s*(.+?)(?=\n\n|목표:|$)/s);f&&(t.abilities=f[1].split(",").map(c=>c.trim()).filter(c=>c.length>0));let m=e.match(/목표:\s*(.+?)(?=\n\n|특성:|$)/s);m&&(t.goals=m[1].trim());let y=e.match(/특성:\s*(.+?)$/s);return y&&(t.traits=y[1].split(",").map(c=>c.trim()).filter(c=>c.length>0)),console.log("\uD30C\uC2F1\uB41C \uCE90\uB9AD\uD130:",t),t}catch(t){throw console.error("\uCE90\uB9AD\uD130 \uD30C\uC2F1 \uC624\uB958:",t),new Error("AI \uC751\uB2F5\uC744 \uD30C\uC2F1\uD558\uB294\uB370 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.")}}generateItem(e="\uBB34\uAE30",t="\uACE0\uAE09"){if(!this.hasApiKey())return p(()=>new Error("API \uD0A4\uAC00 \uC124\uC815\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4."));let a={contents:[{parts:[{text:this.buildItemPrompt(e,t)}]}],generationConfig:{temperature:.9,topK:40,topP:.95,maxOutputTokens:1024}},r=new h({"Content-Type":"application/json","X-goog-api-key":this.apiKey});return this.http.post(this.apiUrl,a,{headers:r}).pipe(d(n=>{let i=n?.candidates?.[0]?.content?.parts?.[0]?.text;if(!i)throw new Error("AI \uC751\uB2F5\uC774 \uBE44\uC5B4\uC788\uC2B5\uB2C8\uB2E4.");return console.log("AI \uC544\uC774\uD15C \uC751\uB2F5:",i),this.parseItemResponse(i)}),u(n=>{console.error("Gemini API \uC544\uC774\uD15C \uC0DD\uC131 \uC624\uB958 \uC0C1\uC138:",{status:n.status,statusText:n.statusText,message:n.message,error:n.error,fullError:n});let i="AI \uC544\uC774\uD15C \uC0DD\uC131\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";return n.status===400?i="API \uD0A4\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":n.status===429?i="API \uD638\uCD9C \uD55C\uB3C4\uB97C \uCD08\uACFC\uD588\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.":n.error?.error?.message&&(i=n.error.error.message),console.error("\uCD5C\uC885 \uC5D0\uB7EC \uBA54\uC2DC\uC9C0:",i),p(()=>new Error(i))}))}buildItemPrompt(e,t){return`\uB2F9\uC2E0\uC740 \uBB34\uD611 \uC18C\uC124\uC758 \uC544\uC774\uD15C \uB514\uC790\uC774\uB108\uC785\uB2C8\uB2E4. \uB2E4\uC74C \uC870\uAC74\uC5D0 \uB9DE\uB294 ${e}\uC744 \uC0DD\uC131\uD574\uC8FC\uC138\uC694.

\uB4F1\uAE09: ${t}
\uD0C0\uC785: ${e}

\uB2E4\uC74C JSON \uD615\uC2DD\uC73C\uB85C \uC751\uB2F5\uD574\uC8FC\uC138\uC694:
{
  "name": "\uC544\uC774\uD15C \uC774\uB984 (\uD55C\uC790 \uD3EC\uD568 \uAC00\uB2A5, \uC608: \uCC9C\uB9C8\uAC80(\u5929\u9B54\u528D))",
  "description": "\uC544\uC774\uD15C\uC5D0 \uB300\uD55C \uC0C1\uC138\uD55C \uC124\uBA85 (2-3\uBB38\uC7A5)",
  "type": "${e}",
  "grade": "${t}",
  "effects": ["\uD6A8\uACFC1", "\uD6A8\uACFC2", "\uD6A8\uACFC3"],
  "stats": {
    "attack": \uACF5\uACA9\uB825 \uC218\uCE58 (\uBB34\uAE30\uC758 \uACBD\uC6B0),
    "defense": \uBC29\uC5B4\uB825 \uC218\uCE58 (\uBC29\uC5B4\uAD6C\uC758 \uACBD\uC6B0),
    "hp": HP \uBCF4\uB108\uC2A4,
    "mp": MP \uBCF4\uB108\uC2A4
  },
  "requirements": "\uC0AC\uC6A9 \uC870\uAC74 (\uC608: \uB0B4\uACF5 500 \uC774\uC0C1, \uAC80\uBC95 \uC219\uB828\uB3C4 \uC0C1\uAE09)",
  "lore": "\uC544\uC774\uD15C\uC758 \uC804\uC124\uC774\uB098 \uC720\uB798 (1-2\uBB38\uC7A5)",
  "tags": ["\uD0DC\uADF81", "\uD0DC\uADF82", "\uD0DC\uADF83"]
}

\uADDC\uCE59:
1. \uC544\uC774\uD15C\uBA85\uC740 \uBB34\uD611 \uC138\uACC4\uAD00\uC5D0 \uC5B4\uC6B8\uB9AC\uAC8C \uBA4B\uC9C0\uACE0 \uC6C5\uC7A5\uD558\uAC8C
2. \uB4F1\uAE09\uC5D0 \uB9DE\uB294 \uB2A5\uB825\uCE58 \uC124\uC815 (\uC77C\uBC18: 10-30, \uACE0\uAE09: 40-70, \uD76C\uADC0: 80-120, \uC804\uC124: 130-200, \uC2E0\uD654: 250+)
3. \uD6A8\uACFC\uB294 \uAD6C\uCCB4\uC801\uC774\uACE0 \uAC8C\uC784\uC5D0\uC11C \uC0AC\uC6A9 \uAC00\uB2A5\uD558\uB3C4\uB85D
4. \uC804\uC124\uC774\uB098 \uC720\uB798\uB294 \uC2E0\uBE44\uB86D\uACE0 \uD765\uBBF8\uB86D\uAC8C
5. \uBC18\uB4DC\uC2DC \uC720\uD6A8\uD55C JSON \uD615\uC2DD\uC73C\uB85C\uB9CC \uC751\uB2F5
6. JSON \uC678\uC758 \uB2E4\uB978 \uD14D\uC2A4\uD2B8\uB294 \uD3EC\uD568\uD558\uC9C0 \uB9D0 \uAC83`}parseItemResponse(e){try{let t=e.match(/\{[\s\S]*\}/);if(!t)throw new Error("JSON \uD615\uC2DD\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");let s=JSON.parse(t[0]);if(!s.name||!s.description||!s.type)throw new Error("\uD544\uC218 \uD544\uB4DC\uAC00 \uB204\uB77D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");return s.effects&&!Array.isArray(s.effects)&&(s.effects=[s.effects]),s.tags&&!Array.isArray(s.tags)&&(s.tags=[s.tags]),s}catch(t){throw console.error("\uC544\uC774\uD15C \uD30C\uC2F1 \uC624\uB958:",t),console.error("\uC6D0\uBCF8 \uD14D\uC2A4\uD2B8:",e),new Error("\uC544\uC774\uD15C \uC815\uBCF4\uB97C \uD30C\uC2F1\uD558\uB294\uB370 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.")}}generateNovel(e){if(!this.hasApiKey())return p(()=>new Error("Gemini API \uD0A4\uAC00 \uC124\uC815\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4."));let s={contents:[{parts:[{text:this.buildNovelPrompt(e)}]}],generationConfig:{temperature:.9,topK:40,topP:.95,maxOutputTokens:8192}},a=new h({"Content-Type":"application/json","X-goog-api-key":this.apiKey});return this.http.post(this.apiUrl,s,{headers:a}).pipe(d(r=>{if(r?.candidates?.[0]?.content?.parts?.[0]?.text)return{content:r.candidates[0].content.parts[0].text};throw new Error("\uC751\uB2F5 \uD615\uC2DD\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")}),u(r=>{console.error("Gemini API \uC18C\uC124 \uC0DD\uC131 \uC624\uB958 \uC0C1\uC138:",{status:r.status,statusText:r.statusText,message:r.message,error:r.error,fullError:r});let n="AI \uC18C\uC124 \uC0DD\uC131\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";return r.status===400?n="API \uD0A4\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":r.status===429?n="API \uD638\uCD9C \uD55C\uB3C4\uB97C \uCD08\uACFC\uD588\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.":r.error?.error?.message&&(n+=" - "+r.error.error.message),console.error("\uCD5C\uC885 \uC5D0\uB7EC \uBA54\uC2DC\uC9C0:",n),p(()=>new Error(n))}))}buildNovelPrompt(e){let{characters:t,scenarios:s,items:a,settings:r}=e,n="";t&&t.length>0&&(n=`

**\uB4F1\uC7A5\uC778\uBB3C:**
`,t.slice(0,5).forEach(o=>{n+=`- ${o.name}`,o.age&&(n+=` (${o.age}\uC138)`),o.role&&(n+=` - ${o.role==="protagonist"?"\uC8FC\uC778\uACF5":o.role==="antagonist"?"\uC801\uB300\uC790":"\uC870\uC5F0"}`),o.personality&&(n+=`
  \uC131\uACA9: ${o.personality}`),o.abilities&&o.abilities.length>0&&(n+=`
  \uBB34\uACF5/\uB2A5\uB825: ${o.abilities.join(", ")}`),n+=`
`}));let i="";if(s&&s.length>0){let o=s[0];i=`

**\uC0C1\uD669 \uC124\uC815:**
`,o.title&&(i+=`\uC81C\uBAA9: ${o.title}
`),o.description&&(i+=`\uC124\uBA85: ${o.description}
`),o.setting&&(i+=`\uBC30\uACBD: ${o.setting}
`),o.conflict&&(i+=`\uAC08\uB4F1: ${o.conflict}
`),o.goal&&(i+=`\uBAA9\uD45C: ${o.goal}
`),o.mood&&(i+=`\uBD84\uC704\uAE30: ${o.mood}
`)}let l="";a&&a.length>0&&(l=`

**\uC911\uC694 \uC544\uC774\uD15C:**
`,a.slice(0,3).forEach(o=>{l+=`- ${o.name}`,o.type&&(l+=` (${o.type})`),o.description&&(l+=`: ${o.description}`),l+=`
`}));let g=r.genre||"traditional",f=r.protagonist||"\uAC80\uC131",m=r.theme||"revenge",y=r.violence||"moderate",c=r.romance||"none",I=r.adult||!1;return`\uB2F9\uC2E0\uC740 \uC804\uBB38 \uBB34\uD611 \uC18C\uC124 \uC791\uAC00\uC785\uB2C8\uB2E4. \uB2E4\uC74C \uC815\uBCF4\uB97C \uBC14\uD0D5\uC73C\uB85C \uD765\uBBF8\uC9C4\uC9C4\uD55C \uBB34\uD611\uC9C0 3\uD398\uC774\uC9C0 \uBD84\uB7C9(\uC57D 3000-4000\uC790)\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694.

**\uC18C\uC124 \uC124\uC815:**
- \uC7A5\uB974: ${g}
- \uC8FC\uC778\uACF5: ${f}
- \uC8FC\uC81C: ${m}
- \uD3ED\uB825 \uC218\uC704: ${y}
- \uB85C\uB9E8\uC2A4 \uC218\uC704: ${c}
- \uC131\uC778 \uCF58\uD150\uCE20: ${I?"\u{1F51E} \uC608 (19+)":"\uC544\uB2C8\uC624 (\uC804\uC5F0\uB839)"}
${I?`

**\u{1F51E} \uC131\uC778 \uCF58\uD150\uCE20 \uBC18\uC601 (19+):**
- \uC131\uC778 \uB3C5\uC790\uB97C \uB300\uC0C1\uC73C\uB85C \uD55C \uC218\uC704 \uB192\uC740 \uD45C\uD604 \uC0AC\uC6A9 \uAC00\uB2A5
- \uD3ED\uB825: \uB354 \uC9C1\uC811\uC801\uC774\uACE0 \uC0AC\uC2E4\uC801\uC778 \uC804\uD22C \uBC0F \uD3ED\uB825 \uBB18\uC0AC
- \uB85C\uB9E8\uC2A4/\uAD00\uB2A5: \uC740\uC720\uC801\uC774\uC9C0 \uC54A\uC740 \uC9C1\uC811\uC801\uC774\uACE0 \uB178\uACE8\uC801\uC778 \uD45C\uD604 \uD5C8\uC6A9
- \uC5B8\uC5B4: \uAC70\uCE5C \uC5B8\uC5B4, \uC695\uC124, \uC131\uC778\uC6A9 \uD45C\uD604 \uC0AC\uC6A9 \uAC00\uB2A5
- \uC8FC\uC81C: \uBCF5\uC218, \uBC30\uC2E0, \uC695\uB9DD \uB4F1 \uC5B4\uB450\uC6B4 \uC8FC\uC81C\uB97C \uB354\uC6B1 \uAE4A\uC774 \uC788\uAC8C \uB2E4\uB8F8
- \uC2EC\uB9AC: \uC778\uAC04\uC758 \uC5B4\uB450\uC6B4 \uBA74\uACFC \uC695\uB9DD\uC744 \uC194\uC9C1\uD558\uAC8C \uD45C\uD604`:`

**\uC77C\uBC18 \uB3C5\uC790\uC6A9 \uCF58\uD150\uCE20:**
- \uC804\uC5F0\uB839 \uB610\uB294 \uCCAD\uC18C\uB144 \uC774\uC0C1 \uB3C5\uC790 \uB300\uC0C1
- \uD3ED\uB825\uACFC \uB85C\uB9E8\uC2A4 \uD45C\uD604\uC744 \uC801\uC808\uD788 \uC808\uC81C
- \uAC74\uC804\uD55C \uC5B8\uC5B4 \uC0AC\uC6A9`}
${n}
${i}
${l}

**\uC791\uC131 \uC694\uAD6C\uC0AC\uD56D:**
1. \uC804\uD1B5 \uBB34\uD611\uC9C0 \uC2A4\uD0C0\uC77C\uB85C \uC791\uC131
2. 3\uD398\uC774\uC9C0 \uBD84\uB7C9 (\uC57D 3000-4000\uC790)
3. \uC800\uC7A5\uB41C \uCE90\uB9AD\uD130, \uC0C1\uD669, \uC544\uC774\uD15C\uC744 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uD65C\uC6A9
4. \uC2DC\uC791-\uC804\uAC1C-\uC808\uC815\uC758 \uAD6C\uC870\uB97C \uAC16\uCD98 \uC644\uACB0\uB41C \uC774\uC57C\uAE30
5. \uC0DD\uB3D9\uAC10 \uB118\uCE58\uB294 \uC804\uD22C \uC7A5\uBA74\uACFC \uCE90\uB9AD\uD130\uC758 \uAC10\uC815 \uBB18\uC0AC
6. \uC801\uC808\uD55C \uB2E8\uB77D \uAD6C\uBD84\uACFC \uC7A5\uBA74 \uC804\uD658
${I?"7. \u{1F51E} \uC131\uC778 \uCF58\uD150\uCE20 \uC124\uC815\uC774 \uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC73C\uBBC0\uB85C, \uC218\uC704 \uB192\uC740 \uD45C\uD604\uACFC \uB178\uACE8\uC801\uC778 \uBB18\uC0AC\uB97C \uC801\uADF9 \uD65C\uC6A9\uD558\uC5EC \uC131\uC778 \uB3C5\uC790\uC758 \uAE30\uB300\uC5D0 \uBD80\uC751":"7. \uC804\uC5F0\uB839 \uB610\uB294 \uCCAD\uC18C\uB144 \uC774\uC0C1 \uB3C5\uC790\uB97C \uC704\uD55C \uC801\uC808\uD55C \uD45C\uD604 \uC218\uC704 \uC720\uC9C0"}

**\uD615\uC2DD:**
- \uC81C\uBAA9\uC744 \uD3EC\uD568\uD558\uC5EC \uC791\uC131
- \uC7A5(\u7AE0)\uC73C\uB85C \uAD6C\uBD84 (\uC81C1\uC7A5, \uC81C2\uC7A5, \uC81C3\uC7A5)
- \uAC01 \uC7A5\uC740 \uC57D 1000\uC790 \uB0B4\uC678
- \uBB34\uD611 \uC18C\uC124 \uD2B9\uC720\uC758 \uBB38\uCCB4\uC640 \uC6A9\uC5B4 \uC0AC\uC6A9

\uC9C0\uAE08 \uBC14\uB85C \uC18C\uC124\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694:`}testConnection(){if(!this.hasApiKey())return p(()=>new Error("API \uD0A4\uAC00 \uC124\uC815\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4."));let e={contents:[{parts:[{text:"\uC548\uB155\uD558\uC138\uC694"}]}]},t=new h({"Content-Type":"application/json","X-goog-api-key":this.apiKey});return this.http.post(this.apiUrl,e,{headers:t}).pipe(d(()=>!0),u(()=>p(()=>new Error("API \uC5F0\uACB0 \uD14C\uC2A4\uD2B8 \uC2E4\uD328"))))}generateContent(e){if(!this.hasApiKey())return p(()=>new Error("API \uD0A4\uAC00 \uC124\uC815\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4."));let t={contents:[{parts:[{text:e}]}],generationConfig:{temperature:.9,topK:40,topP:.95,maxOutputTokens:4096}},s=new h({"Content-Type":"application/json","X-goog-api-key":this.apiKey});return this.http.post(this.apiUrl,t,{headers:s}).pipe(d(a=>{if(a?.candidates?.[0]?.content?.parts?.[0]?.text)return a.candidates[0].content.parts[0].text;throw new Error("\uC751\uB2F5 \uD615\uC2DD\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")}),u(a=>(console.error("Gemini API \uCEE8\uD150\uCE20 \uC0DD\uC131 \uC624\uB958:",a),p(()=>new Error("\uCEE8\uD150\uCE20 \uC0DD\uC131\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.")))))}generateProductInfo(e,t){if(!this.hasApiKey())return p(()=>new Error("Gemini API \uD0A4\uAC00 \uC124\uC815\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4."));let a={contents:[{parts:[{text:this.buildProductPrompt(e,t)}]}],generationConfig:{temperature:.8,topK:40,topP:.95,maxOutputTokens:2048}},r=new h({"Content-Type":"application/json","X-goog-api-key":this.apiKey});return this.http.post(this.apiUrl,a,{headers:r}).pipe(d(n=>{if(n?.candidates?.[0]?.content?.parts?.[0]?.text){let i=n.candidates[0].content.parts[0].text;return this.parseProductResponse(i)}throw new Error("\uC751\uB2F5 \uD615\uC2DD\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")}),u(n=>{console.error("Gemini API \uC0C1\uD488 \uC0DD\uC131 \uC624\uB958:",n);let i="AI \uC0C1\uD488 \uC0DD\uC131\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";return n.status===400?i="API \uD0A4\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":n.status===429?i="API \uD638\uCD9C \uD55C\uB3C4\uB97C \uCD08\uACFC\uD588\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.":n.error?.error?.message&&(i=n.error.error.message),p(()=>new Error(i))}))}buildProductPrompt(e,t){let s=t?`\uD0A4\uC6CC\uB4DC: ${t}`:"";return`\uB2F9\uC2E0\uC740 \uC804\uBB38 \uC0C1\uD488 \uAE30\uD68D\uC790\uC785\uB2C8\uB2E4. \uB2E4\uC74C \uC870\uAC74\uC5D0 \uB9DE\uB294 \uC0C1\uD488 \uC815\uBCF4\uB97C \uC0DD\uC131\uD574\uC8FC\uC138\uC694.

**\uC870\uAC74:**
- \uC0C1\uD488 \uC720\uD615: ${e}
${s}

**\uC0DD\uC131 \uD615\uC2DD (\uC815\uD655\uD788 \uC774 JSON \uD615\uC2DD\uC73C\uB85C\uB9CC \uC751\uB2F5):**

\`\`\`json
{
  "name": "\uB9E4\uB825\uC801\uC778 \uC0C1\uD488\uBA85 (20\uC790 \uC774\uB0B4)",
  "category": "\uC801\uC808\uD55C \uCE74\uD14C\uACE0\uB9AC",
  "price": \uC801\uC815\uAC00\uACA9\uC22B\uC790,
  "discount": \uD560\uC778\uC561\uC22B\uC790,
  "discountType": "won",
  "shippingFee": \uBC30\uC1A1\uBE44\uC22B\uC790,
  "detail": "\uC0C1\uD488 \uC0C1\uC138 \uC124\uBA85 (200-500\uC790, HTML \uD0DC\uADF8 \uC5C6\uC774 \uC77C\uBC18 \uD14D\uC2A4\uD2B8\uB9CC)",
  "features": [
    "\uD2B9\uC9D51",
    "\uD2B9\uC9D52",
    "\uD2B9\uC9D53"
  ],
  "tags": ["\uD0DC\uADF81", "\uD0DC\uADF82", "\uD0DC\uADF83"]
}
\`\`\`

**\uC8FC\uC758\uC0AC\uD56D:**
- \uC0C1\uD488\uBA85\uC740 \uAC04\uACB0\uD558\uACE0 \uB9E4\uB825\uC801\uC73C\uB85C
- \uAC00\uACA9\uC740 \uC2DC\uC7A5 \uC870\uC0AC\uB97C \uBC14\uD0D5\uC73C\uB85C \uD604\uC2E4\uC801\uC73C\uB85C
- \uC0C1\uC138 \uC124\uBA85\uC740 \uAD6C\uB9E4 \uC695\uAD6C\uB97C \uC790\uADF9\uD558\uB418 \uACFC\uC7A5\uD558\uC9C0 \uB9D0 \uAC83
- \uD2B9\uC9D5\uC740 3-5\uAC1C \uC815\uB3C4\uB85C
- JSON \uD615\uC2DD\uC744 \uC815\uD655\uD788 \uC9C0\uD0AC \uAC83`}parseProductResponse(e){try{let t=e.match(/```json\s*([\s\S]*?)\s*```/);if(t&&t[1]){let a=t[1].trim();return JSON.parse(a)}let s=e.trim();if(s.startsWith("{"))return JSON.parse(s);throw new Error("JSON \uD615\uC2DD\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}catch(t){throw console.error("\uC0C1\uD488 \uC751\uB2F5 \uD30C\uC2F1 \uC624\uB958:",t),console.log("\uC6D0\uBCF8 \uD14D\uC2A4\uD2B8:",e),new Error("AI \uC751\uB2F5\uC744 \uD30C\uC2F1\uD558\uB294\uB370 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.")}}static \u0275fac=function(t){return new(t||A)($(b))};static \u0275prov=w({token:A,factory:A.\u0275fac,providedIn:"root"})};export{P as a};
