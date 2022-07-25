import{_ as T,b as I,a as M}from"./BaseFieldset-54ec72da.mjs";import{_ as O,a as P}from"./PhoneInputGroup-5be41303.mjs";import{_ as L}from"./BaseRadioGroup-e86cf200.mjs";import{_ as G}from"./BaseCard-75814c53.mjs";import{l as h,o as r,h as u,i as e,w as a,m as S,q as R,j as E,a as q,b as j,e as z,A as k,f as A,E as D,k as m,t as d,u as o,F as w,r as C,s as $,c as x,B as W,p as H,y as J}from"./entry-d8b0f66b.mjs";const K={};function Q(p,t){const v=G;return r(),u("div",{class:"modal",onClick:t[1]||(t[1]=E(i=>p.$emit("close"),["self"]))},[e(v,{class:"modal-card"},{default:a(()=>[S("span",{class:"modal-close-label",onClick:t[0]||(t[0]=i=>p.$emit("close"))},"Close"),R(p.$slots,"default",{},void 0,!0)]),_:3})])}var X=h(K,[["render",Q],["__scopeId","data-v-08b4527a"]]);const Y=m("Edit information"),Z={key:0,class:"error-text"},ee={key:0,src:W,class:"loader"},te={key:1},oe=m("Back"),ae=m("Save"),le=q({__name:"overview",setup(p){const t=j(),v=z(),i=k();A(()=>{t.currentStepIndex=D.OVERVIEW});let f=k(null),b=k(!1);async function N(){f.value=null,b.value=!0,await new Promise(_=>setTimeout(_,2e3)),await $fetch("https://httpreq.com/",{method:"POST",body:t.serialize()}).catch(_=>{_&&(f.value=_)}).finally(()=>{b.value=!1})}return(_,l)=>{const s=T,B=I,c=M,V=O,g=P,U=L,F=X;return r(),u("div",null,[S("form",{onSubmit:l[2]||(l[2]=E(()=>{},["prevent"]))},[e(B,{legend:"Overview"},{default:a(()=>[e(s,{label:"First name:",inline:""},{default:a(()=>[m(d(o(t).form.firstName),1)]),_:1}),e(s,{label:"Last name:",inline:""},{default:a(()=>[m(d(o(t).form.lastName),1)]),_:1}),e(s,{label:"E-mail:",inline:""},{default:a(()=>[m(d(o(t).form.email),1)]),_:1}),(r(!0),u(w,null,C(o(t).form.phone,n=>(r(),x(s,{label:"Phone:",inline:""},{default:a(()=>[m(d(n.value),1)]),_:2},1024))),256)),e(s,{label:"Membership:",inline:""},{default:a(()=>[m(d(o(t).form.membership),1)]),_:1})]),_:1}),e(s,null,{default:a(()=>[e(c,{variant:"text",onClick:l[0]||(l[0]=n=>i.value=!0)},{default:a(()=>[Y]),_:1})]),_:1}),o(f)?(r(),u("span",Z," Error: "+d(o(f)),1)):$("",!0),e(s,{class:"mt-4"},{default:a(()=>[e(c,{variant:"primary",large:"","full-width":"",onClick:N},{default:a(()=>[o(b)?(r(),u("img",ee)):(r(),u("span",te,"Submit"))]),_:1})]),_:1}),e(s,null,{default:a(()=>[e(c,{variant:"secondary",large:"","full-width":"",onClick:l[1]||(l[1]=n=>o(v).push("/form/membership"))},{default:a(()=>[oe]),_:1})]),_:1})],32),i.value?(r(),x(F,{key:0,onClose:l[8]||(l[8]=n=>i.value=!1)},{default:a(()=>[e(B,{legend:"Edit information"},{default:a(()=>[e(s,{label:"First name"},{default:a(()=>[e(V,{modelValue:o(t).form.firstName,"onUpdate:modelValue":l[3]||(l[3]=n=>o(t).form.firstName=n)},null,8,["modelValue"])]),_:1}),e(s,{label:"Last name"},{default:a(()=>[e(V,{modelValue:o(t).form.lastName,"onUpdate:modelValue":l[4]||(l[4]=n=>o(t).form.lastName=n)},null,8,["modelValue"])]),_:1}),e(s,{label:"E-mail"},{default:a(()=>[e(V,{modelValue:o(t).form.email,"onUpdate:modelValue":l[5]||(l[5]=n=>o(t).form.email=n)},null,8,["modelValue"])]),_:1}),(r(!0),u(w,null,C(o(t).form.phone,n=>(r(),x(g,{label:"Phone",options:o(H),modelValue:n,onUpdateType:y=>o(t).updatePhoneType(n,y),onUpdateValue:y=>n.value=y},null,8,["options","modelValue","onUpdateType","onUpdateValue"]))),256)),e(s,{label:"Membership"},{default:a(()=>[e(U,{options:o(J),modelValue:o(t).form.membership,"onUpdate:modelValue":l[6]||(l[6]=n=>o(t).form.membership=n),name:"membership"},null,8,["options","modelValue"])]),_:1}),e(s,{class:"mt-4"},{default:a(()=>[e(c,{variant:"primary",large:"","full-width":"",onClick:l[7]||(l[7]=n=>i.value=!1)},{default:a(()=>[ae]),_:1})]),_:1})]),_:1})]),_:1})):$("",!0)])}}});var ie=h(le,[["__scopeId","data-v-1dfadd36"]]);export{ie as default};