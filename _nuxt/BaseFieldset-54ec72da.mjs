import{l as s,a as l,o as a,h as n,t as c,s as u,m as x,q as r,v as d}from"./entry-d8b0f66b.mjs";function b(e){return(e||"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx").replace(/[xy]/g,_)}function _(e){const t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)}const i={key:0,class:"form-group-label"},m={class:"form-group-control"},p=l({__name:"BaseFormGroup",props:{label:null,inline:{type:Boolean}},setup(e){return(t,o)=>(a(),n("div",{class:d(["form-group",e.inline&&"form-group--inline"])},[e.label?(a(),n("label",i,c(e.label),1)):u("",!0),x("div",m,[r(t.$slots,"default",{},void 0,!0)])],2))}});var y=s(p,[["__scopeId","data-v-6748401c"]]);const f=l({__name:"BaseButton",props:{variant:null,large:{type:Boolean},fullWidth:{type:Boolean}},setup(e){return(t,o)=>(a(),n("button",{class:d([e.large&&"large",e.fullWidth&&"full-width",e.variant])},[x("span",null,[r(t.$slots,"default",{},void 0,!0)])],2))}});var $=s(f,[["__scopeId","data-v-2b9e77a6"]]);const v={class:"form-fieldset"},g={key:0,class:"form-legend"},h=l({__name:"BaseFieldset",props:{legend:null},setup(e){return(t,o)=>(a(),n("fieldset",v,[e.legend?(a(),n("legend",g,c(e.legend),1)):u("",!0),r(t.$slots,"default",{},void 0,!0)]))}});var k=s(h,[["__scopeId","data-v-e3989dda"]]);export{y as _,$ as a,k as b,b as u};