(this["webpackJsonpdao-app"]=this["webpackJsonpdao-app"]||[]).push([[0],{121:function(e,t,n){e.exports={paper:"Dialog_paper__XrzDE",cancelButton:"Dialog_cancelButton__3SRaV",confirmButton:"Dialog_confirmButton__OGdmB"}},203:function(e){e.exports=JSON.parse('{"global.appName":"Flux DAO","global.action.cancel":"Cancel","global.action.submit":"Submit","home.title":"Proposals","menu.loggedInAs":"Hello :accountId","menu.logout":"Logout","menu.item.home":"Home","menu.item.council":"Council","council.title":"Council","resoluteMarketForm.input.validMarket":"Valid","resoluteMarketForm.input.invalidMarket":"Invalid","resoluteMarketForm.input.marketId":"Market id","resoluteMarketForm.input.payoutNumerator":"Payout numerator","resoluteMarketForm.input.payoutNumeratorHelper":"Seperate percentages with a space example: 50 0 50","resoluteMarketForm.error.not100":"Outcome values should be a cumulative sum of 100%","newCouncilForm.input.accountId":"Account id","newCouncilForm.input.description":"Description of proposal","addTokenWhitelist.input.accountId":"Token address id","addTokenWhitelist.input.description":"Description of proposal","proposalInfo.label.status":"Status: :status","proposalInfo.label.creator":"Creator: :creator","proposalInfo.label.votePeriodEnd":"Vote period end: :date","proposalInfo.action.voteYes":"Approve (:amount)","proposalInfo.action.voteNo":"Reject (:amount)","proposalInfo.action.finalize":"Finalize","proposalsOverview.create":"Create proposal","proposal.resoluteMarket.description":"Resolute market: :description","proposalDialog.title":"Create a proposal","proposalDialog.types.newCouncil":"New council","proposalDialog.types.addTokenWhitelist":"Add token to the whitelist","proposalDialog.types.resoluteMarket":"Resolute market"}')},205:function(e,t,n){e.exports={button:"Button_button__2Lf63"}},206:function(e,t,n){e.exports={root:"OptionSwitch_root__URwjr"}},207:function(e,t,n){e.exports={infiniteScroll:"ProposalsOverview_infiniteScroll__yBduR"}},233:function(e,t){},238:function(e,t){},261:function(e,t){},263:function(e,t){},317:function(e,t,n){},318:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(19),o=n.n(a),c=n(91),i=n(38),s=n(373),u=n(10),l=n(21),p=n(4);function d(e){var t=e.council;return Object(p.jsx)("section",{children:t.map((function(e){return Object(p.jsx)("div",{children:e},e)}))})}var b=n(9),j=n.n(b),f=n(14),v=n(198),h=n(199),O=n(40),k=n.n(O),x=n(200),m="https://mainnet-api.flux.xyz/graphql",g="null_address.near",y=new k.a("100000000000000"),_=new k.a("30000000000000000000000"),C=n(201),w=new(n.n(C).a)({network:"mainnet",nullContractId:g,graphApiUrl:m});function I(){return M.apply(this,arguments)}function M(){return(M=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.connect();case 2:return e.abrupt("return",w);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return T.apply(this,arguments)}function T(){return(T=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return t=e.sent,e.abrupt("return",t.walletConnection);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A,N=function(){function e(t){Object(v.a)(this,e),this.contract=void 0,this.contract=new x.Contract(t,"dao.counselor.near",{viewMethods:["get_council","get_bond","get_proposals"],changeMethods:["add_proposal","vote","finalize"]})}return Object(h.a)(e,[{key:"getCouncil",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.contract.get_council({a:1});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBond",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.contract.get_bond({a:1});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getProposals",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t,n,r,a=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"0",n=a.length>1&&void 0!==a[1]?a[1]:"1000",e.next=4,this.contract.get_proposals({from_index:t,limit:n});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createResoluteMarketProposal",value:function(){var e=Object(f.a)(j.a.mark((function e(t,n,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.contract.add_proposal({proposal:{description:t,kind:{market_id:n,payout_numerator:r,type:"ResoluteMarket"}}},y,_);case 1:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"createNewCouncilProposal",value:function(){var e=Object(f.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.contract.add_proposal({proposal:{description:t,kind:{target:n,type:"NewCouncil"}}},y,_);case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"createAddTokenToWhitelistProposal",value:function(){var e=Object(f.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.contract.add_proposal({proposal:{description:t,kind:{to_add:n,type:"AddTokenWhitelist"}}},y,_);case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"vote",value:function(e,t){this.contract.vote({id:e,vote:t},y,new k.a(0))}},{key:"finalize",value:function(e){this.contract.finalize({id:e},y,new k.a(0))}}]),e}();function S(){return R.apply(this,arguments)}function R(){return(R=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!A){e.next=2;break}return e.abrupt("return",A);case 2:return e.next=4,P();case 4:return t=e.sent,A=new N(t.account()),e.abrupt("return",A);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=n(62),D=Object(E.a)({initialState:{council:[],loading:!1,errors:[]},name:"council",reducers:{setCouncil:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{council:t.payload})},setCouncilLoading:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{loading:t.payload})},setCouncilErrors:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{errors:t.payload})}}}),F=D.actions,W=F.setCouncil,L=F.setCouncilErrors,B=F.setCouncilLoading,z=D.reducer;function q(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.council.council}));return Object(r.useEffect)((function(){e(function(){var e=Object(f.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(B(!0)),e.next=4,S();case 4:return n=e.sent,e.next=7,n.getCouncil();case 7:r=e.sent,t(W(r)),t(B(!1)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),t(L(e.t0)),t(B(!1));case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(p.jsx)(d,{council:t})}var H=n(90),U=n(202),V=n.n(U);function Y(){return Object(p.jsx)("footer",{})}var K=n(203);function J(e,t,n){var r=K[e];if(!r)return console.info("Transaltion not found for",e),e;var a,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.replace(/:(\w+)/gi,(function(e){var n=e.replace(/^:/,"");return void 0===t[n]||null===t[n]?"":t[n]}))}(r,t);return n?(a=o).charAt(0).toUpperCase()+a.substring(1):o}function X(e){var t=e.onLoginClick,n=e.onLogoutClick,r=e.account;return Object(p.jsxs)("section",{children:[!r&&Object(p.jsx)("button",{onClick:t,children:J("menu.login")}),r&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{children:J("menu.loggedInAs",{accountId:r.accountId})}),Object(p.jsx)("button",{onClick:n,children:J("menu.logout")})]}),Object(p.jsx)(c.b,{to:gt.root(),children:J("menu.item.home")}),Object(p.jsx)(c.b,{to:gt.council(),children:J("menu.item.council")})]})}var G=Object(E.a)({initialState:{account:null,loading:!1,errors:[]},name:"account",reducers:{setAccount:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{account:t.payload})},setAccountLoading:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{loading:t.payload})},setAccountErrors:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{errors:t.payload})}}}),Q=G.actions,Z=Q.setAccount,$=(Q.setAccountErrors,Q.setAccountLoading),ee=G.reducer;function te(){return ne.apply(this,arguments)}function ne(){return(ne=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:e.sent.requestSignIn(g,J("global.appName"));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(){return ae.apply(this,arguments)}function ae(){return(ae=Object(f.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:if((t=e.sent).isSignedIn()){e.next=5;break}return e.abrupt("return",null);case 5:return n=t.account(),e.t0=n.accountId,e.next=9,n.getAccountBalance();case 9:return e.t1=e.sent.available,e.abrupt("return",{accountId:e.t0,balance:e.t1});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(){return ce.apply(this,arguments)}function ce(){return(ce=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:e.sent.signOut();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ie=Object(E.a)({initialState:{loading:!1,errors:[]},name:"daoInfo",reducers:{setDaoInfo:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{daoInfo:t.payload})},setDaoLoading:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{loading:t.payload})},setDaoErrors:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{errors:t.payload})}}}),se=ie.actions,ue=se.setDaoErrors,le=se.setDaoInfo,pe=se.setDaoLoading,de=ie.reducer;function be(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.account.account}));Object(r.useEffect)((function(){t||e(function(){var e=Object(f.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t($(!0)),e.next=4,re();case 4:n=e.sent,t(Z(n)),t($(!1)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t($(!1)),console.error("[getAccount]",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(f.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(pe(!0)),e.next=4,S();case 4:return n=e.sent,e.next=7,n.getBond();case 7:r=e.sent,t(le({bond:r})),t(pe(!1)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),t(ue(e.t0)),t(pe(!1));case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}())}),[e,t]);var n=Object(r.useCallback)((function(){e(function(){var e=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t($(!0)),e.next=4,te();case 4:t($(!1)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t($(!1)),console.error("[signIn]",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]),a=Object(r.useCallback)((function(){e(function(){var e=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe();case 2:t(Z(null));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);return Object(p.jsx)(X,{onLoginClick:n,onLogoutClick:a,account:t})}var je=n(97),fe=n.n(je);function ve(e){var t,n=e.children,r=e.hasNavigation,a=void 0===r||r,o=e.hasFooter,c=void 0===o||o,i=e.size,s=void 0===i?"medium":i,u=e.className,l=void 0===u?"":u,d=e.bodyClassName,b=void 0===d?"":d,j=V()(fe.a.page__body,b,(t={},Object(H.a)(t,fe.a["page__body--large"],"large"===s),Object(H.a)(t,fe.a["page__body--unrestricted"],"unrestricted"===s),t));return Object(p.jsxs)("div",{className:"".concat(fe.a.page," ").concat(l),children:[a&&Object(p.jsx)(be,{}),Object(p.jsx)("main",{className:j,children:n}),c&&Object(p.jsx)(Y,{})]})}var he=n(120),Oe=n(204),ke=n(374),xe=n(379),me=n(377),ge=n(363),ye=n(364),_e=n(365),Ce=n(213),we=n(359),Ie=n(205),Me=n.n(Ie);function Pe(e){var t=e.className,n=void 0===t?"":t,r=e.children,a=Object(Ce.a)(e,["className","children"]);return Object(p.jsx)(we.a,Object(u.a)(Object(u.a)({},a),{},{className:"".concat(Me.a.button," ").concat(n),children:r}))}var Te=n(121),Ae=n.n(Te);function Ne(e){var t=e.title,n=e.children,r=e.open,a=e.onRequestClose,o=e.onSubmitClick;return Object(p.jsxs)(me.a,{open:r,classes:{paper:Ae.a.paper},children:[Object(p.jsx)(ge.a,{children:t}),Object(p.jsx)(ye.a,{children:n}),Object(p.jsxs)(_e.a,{children:[Object(p.jsx)(Pe,{className:Ae.a.cancelButton,onClick:a,children:J("global.action.cancel")}),Object(p.jsx)(Pe,{className:Ae.a.confirmButton,onClick:o,children:J("global.action.submit")})]})]})}var Se,Re,Ee=n(368),De=n(376),Fe=n(378),We=n(206),Le=n.n(We);function Be(e){var t=e.labelA,n=e.labelB,r=e.onChange,a=e.value;return Object(p.jsxs)("span",{className:Le.a.root,children:[Object(p.jsx)("span",{children:t}),Object(p.jsx)(Fe.a,{value:a,onChange:function(e,t){return r(t)}}),Object(p.jsx)("span",{children:n})]})}function ze(e){var t=e.onChange,n=e.values,r=e.markets;function a(e,r){var a=n.payoutNumerators;a[r]=Number(e),t(Object(u.a)(Object(u.a)({},n),{},{payoutNumerators:a}))}var o=r.find((function(e){return e.id===n.marketId})),c=n.payoutNumerators.reduce((function(e,t){return e+t}),0);return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(ke.a,{label:J("resoluteMarketForm.input.marketId"),value:n.marketId,onChange:function(e){var a,o,c,i,s=r.find((function(t){return t.id===e.target.value}));t(Object(u.a)(Object(u.a)({},n),{},{marketId:null!==(a=null===s||void 0===s?void 0:s.id)&&void 0!==a?a:"",marketDescription:null!==(o=null===s||void 0===s?void 0:s.description)&&void 0!==o?o:"",collateralTokenId:null!==(c=null===s||void 0===s?void 0:s.collateralTokenId)&&void 0!==c?c:"",payoutNumerators:null!==(i=null===s||void 0===s?void 0:s.outcomeTags.map((function(e){return 0})))&&void 0!==i?i:[]}))},children:r.map((function(e){return Object(p.jsxs)(xe.a,{value:e.id,children:[e.id," - ",e.description]},e.id)}))})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),null===o||void 0===o?void 0:o.extraInfo]}),Object(p.jsx)(Be,{labelA:J("resoluteMarketForm.input.validMarket"),labelB:J("resoluteMarketForm.input.invalidMarket"),value:n.isInvalidMarket,onChange:function(e){t(Object(u.a)(Object(u.a)({},n),{},{isInvalidMarket:e}))}}),Object(p.jsx)("div",{children:!n.isInvalidMarket&&Object(p.jsxs)("div",{children:[null===o||void 0===o?void 0:o.outcomeTags.map((function(e,t){return Object(p.jsx)("div",{children:Object(p.jsx)(De.a,{label:e,onChange:function(e){return a(e.target.value,t)},value:n.payoutNumerators[t]||"0",type:"number",InputProps:{endAdornment:Object(p.jsx)(Ee.a,{position:"end",children:Object(p.jsx)("span",{children:"%"})})}})},t)})),100!==c&&Object(p.jsx)("p",{children:J("resoluteMarketForm.error.not100")})]})})]})}function qe(e){var t=e.onChange,n=e.values;return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(De.a,{label:J("newCouncilForm.input.accountId"),onChange:function(e){t(Object(u.a)(Object(u.a)({},n),{},{accountId:e.currentTarget.value}))},value:n.accountId})}),Object(p.jsx)("div",{children:Object(p.jsx)(De.a,{label:J("newCouncilForm.input.description"),onChange:function(e){t(Object(u.a)(Object(u.a)({},n),{},{description:e.currentTarget.value}))},value:n.description})})]})}function He(e){var t=e.onChange,n=e.values;return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(De.a,{label:J("addTokenWhitelist.input.accountId"),onChange:function(e){t(Object(u.a)(Object(u.a)({},n),{},{accountId:e.currentTarget.value}))},value:n.accountId})}),Object(p.jsx)("div",{children:Object(p.jsx)(De.a,{label:J("addTokenWhitelist.input.description"),onChange:function(e){t(Object(u.a)(Object(u.a)({},n),{},{description:e.currentTarget.value}))},value:n.description})})]})}function Ue(e){var t=e.open,n=e.markets,a=e.onRequestClose,o=e.onSubmit,c=Object(r.useState)({newCouncil:{accountId:"",description:""},addTokenWhitelist:{accountId:"",description:""},resoluteMarket:{isInvalidMarket:!1,marketId:"",marketDescription:"",collateralTokenId:"",payoutNumerators:[]},type:Se.ResoluteMarket}),i=Object(he.a)(c,2),s=i[0],l=i[1];return Object(p.jsxs)(Ne,{open:t,title:J("proposalDialog.title"),onSubmitClick:function(){return o(s)},onRequestClose:a,children:[Object(p.jsxs)(ke.a,{value:s.type,onChange:function(e){l(Object(u.a)(Object(u.a)({},s),{},{type:e.target.value}))},children:[Object(p.jsx)(xe.a,{value:Se.ResoluteMarket,children:J("proposalDialog.types.resoluteMarket")}),Object(p.jsx)(xe.a,{value:Se.NewCouncil,children:J("proposalDialog.types.newCouncil")}),Object(p.jsx)(xe.a,{value:Se.AddTokenWhitelist,children:J("proposalDialog.types.addTokenWhitelist")})]}),s.type===Se.ResoluteMarket&&Object(p.jsx)(ze,{markets:n,values:s.resoluteMarket,onChange:function(e){l(Object(u.a)(Object(u.a)({},s),{},{resoluteMarket:e}))}}),s.type===Se.NewCouncil&&Object(p.jsx)(qe,{values:s.newCouncil,onChange:function(e){l(Object(u.a)(Object(u.a)({},s),{},{newCouncil:e}))}}),s.type===Se.AddTokenWhitelist&&Object(p.jsx)(He,{values:s.addTokenWhitelist,onChange:function(e){l(Object(u.a)(Object(u.a)({},s),{},{addTokenWhitelist:e}))}})]})}!function(e){e.ResoluteMarket="ResoluteMarket",e.NewCouncil="NewCouncil",e.AddTokenWhitelist="AddTokenWhitelist"}(Se||(Se={})),function(e){e.Vote="Vote",e.Success="Success",e.Reject="Reject",e.Finalized="Finalized",e.Rejected="Rejected"}(Re||(Re={}));var Ve=n(369),Ye=n(370),Ke=n(372),Je=n(371),Xe=n(215);function Ge(e){var t=e.proposal,n=e.loggedInAccount,r=e.onNoClick,a=e.onYesClick,o=e.onFinalizeClick,c=new Date(t.vote_period_end/1e6),i=(null===n||void 0===n?void 0:n.accountId)||"";console.log("[] proposal -> ",t);var s=Boolean(t.votes[i]);return Object(p.jsxs)(Ve.a,{children:[Object(p.jsx)(Ye.a,{onClick:function(){t.kind.type===Se.ResoluteMarket&&window.open("".concat("https://fluxprotocol.github.io/beta/#/beta/markets/").concat(t.kind.market_id),"_blank")},children:Object(p.jsxs)(Je.a,{children:[Object(p.jsx)(Xe.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.description}),Object(p.jsx)("pre",{children:JSON.stringify(t.kind,null,4)}),Object(p.jsx)(Xe.a,{gutterBottom:!0,variant:"body1",component:"p",children:J("proposalInfo.label.status",{status:t.status})}),Object(p.jsx)(Xe.a,{gutterBottom:!0,variant:"body1",component:"p",children:J("proposalInfo.label.creator",{creator:t.proposer})}),Object(p.jsx)(Xe.a,{gutterBottom:!0,variant:"body1",component:"p",children:J("proposalInfo.label.votePeriodEnd",{date:c.toString()})})]})}),Object(p.jsxs)(Ke.a,{children:[t.status===Re.Vote&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Pe,{disabled:s,onClick:a,children:J("proposalInfo.action.voteYes",{amount:t.vote_yes.toString()})}),Object(p.jsx)(Pe,{disabled:s,onClick:r,children:J("proposalInfo.action.voteNo",{amount:t.vote_no.toString()})})]}),t.status===Re.Success&&Object(p.jsx)(Pe,{onClick:o,children:J("proposalInfo.action.finalize")})]})]})}var Qe=n(207),Ze=n.n(Qe);function $e(e){var t=e.onProposalSubmit,n=e.onNoClick,a=e.onYesClick,o=e.onFinalizeClick,c=e.onRequestMoreProposals,i=e.hasMoreProposals,s=e.proposals,u=e.markets,l=e.loggedInAccount,d=Object(r.useState)(!1),b=Object(he.a)(d,2),j=b[0],f=b[1];return Object(p.jsxs)("section",{children:[Object(p.jsx)("button",{onClick:function(){f(!0)},children:J("proposalsOverview.create")}),Object(p.jsx)(Oe.a,{dataLength:s.length,next:c,hasMore:i,loader:Object(p.jsx)("div",{}),className:Ze.a.infiniteScroll,children:s.map((function(e,t){return Object(p.jsx)(Ge,{proposal:e,onNoClick:function(){return n(e,t)},onYesClick:function(){return a(e,t)},onFinalizeClick:function(){return o(e,t)},loggedInAccount:l},t)}))}),Object(p.jsx)(Ue,{markets:u,open:j,onRequestClose:function(){return f(!1)},onSubmit:t})]})}var et=n(144),tt=n(208),nt=n(82);function rt(e){return{id:e.id,description:e.description,outcomeTags:e.outcome_tags,extraInfo:e.extra_info,collateralTokenId:e.pool.collateral_token_id}}var at,ot=new nt.InMemoryCache,ct=Object(nt.createHttpLink)({uri:m}),it=new nt.ApolloClient({cache:ot,link:ct,defaultOptions:{watchQuery:{fetchPolicy:"cache-and-network"}}});function st(){return ut.apply(this,arguments)}function ut(){return(ut=Object(f.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,it.query({query:Object(nt.gql)(at||(at=Object(tt.a)(["\n                query ExiredMarkets {\n                    markets: getMarkets(filters: { expired: true, finalized: false }) {\n                        items {\n                            id\n                            description\n                            outcome_tags\n                            extra_info\n                            pool {\n                                collateral_token_id\n                            }\n                        }\n                    }\n                }\n            "])))});case 3:return t=e.sent,n=t.data.markets.items,e.abrupt("return",n.map((function(e){return rt(e)})));case 8:return e.prev=8,e.t0=e.catch(0),console.error("[getExpiredMarkets]",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var lt=n(211),pt=n.n(lt);function dt(e,t){var n=new pt.a(10).pow(t);return e.map((function(e){return n.mul(e/100).toFixed(0)}))}var bt=Object(E.a)({initialState:{hasMoreProposals:!0,proposals:[],expiredMarkets:[],loading:!1,errors:[]},name:"proposals",reducers:{setProposals:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{proposals:t.payload})},setProposalsLoading:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{loading:t.payload})},setProposalsErrors:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{errors:t.payload})},setProposalsHasMore:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{hasMoreProposals:t.payload})},setProposalsExpiredMarkets:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{expiredMarkets:t.payload})}}}),jt=bt.actions,ft=jt.setProposals,vt=jt.setProposalsLoading,ht=(jt.setProposalsErrors,jt.setProposalsExpiredMarkets),Ot=jt.setProposalsHasMore,kt=bt.reducer;function xt(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){var t=Object(f.a)(j.a.mark((function t(n,r){var a,o,c,i,s,u;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:return a=t.sent,o=10,e&&n(ft([])),n(vt(!0)),c=r(),i=c.proposals.proposals,s=i.length.toString(),t.next=11,a.getProposals(s,o.toString());case 11:(u=t.sent).length===o?n(Ot(!0)):n(Ot(!1)),n(ft([].concat(Object(et.a)(c.proposals.proposals),Object(et.a)(u)))),n(vt(!1));case 15:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}function mt(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.proposals.proposals})),n=Object(i.c)((function(e){return e.proposals.hasMoreProposals})),a=Object(i.c)((function(e){return e.proposals.expiredMarkets})),o=Object(i.c)((function(e){return e.account.account}));return Object(r.useEffect)((function(){e(xt(!0)),e(function(){var e=Object(f.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,st();case 2:n=e.sent,t(ht(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(p.jsx)($e,{onProposalSubmit:function(t){e(function(e){return function(){var t=Object(f.a)(j.a.mark((function t(n){var r,a,o,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:return r=t.sent,t.next=5,I();case 5:if(a=t.sent,e.type!==Se.ResoluteMarket){t.next=14;break}return t.next=9,a.getTokenMetadata(e.resoluteMarket.collateralTokenId);case 9:o=t.sent,c=dt(e.resoluteMarket.payoutNumerators,o.decimals),r.createResoluteMarketProposal(J("proposal.resoluteMarket.description",{description:e.resoluteMarket.marketDescription}),e.resoluteMarket.marketId,e.resoluteMarket.isInvalidMarket?void 0:c),t.next=15;break;case 14:e.type===Se.NewCouncil?r.createNewCouncilProposal(e.newCouncil.description,e.newCouncil.accountId):e.type===Se.AddTokenWhitelist&&r.createAddTokenToWhitelistProposal(e.addTokenWhitelist.description,e.addTokenWhitelist.accountId);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},proposals:t,markets:a,onYesClick:function(t,n){var r;e((r=n.toString(),function(){var e=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:e.sent.vote(r,"Yes");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},onNoClick:function(t,n){var r;e((r=n.toString(),function(){var e=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:e.sent.vote(r,"No");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},onFinalizeClick:function(t,n){var r;e((r=n.toString(),function(){var e=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:e.sent.finalize(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},hasMoreProposals:n,onRequestMoreProposals:function(){console.log("More!"),e(xt())},loggedInAccount:o})}var gt={root:function(){return"/"},council:function(){return"/council"}},yt=[{component:function(){return Object(p.jsxs)(ve,{children:[Object(p.jsx)("h1",{children:J("home.title")}),Object(p.jsx)(mt,{})]})},exact:!0,inNavigation:!1,key:"home",label:"Home",path:gt.root()},{component:function(){return Object(p.jsxs)(ve,{children:[Object(p.jsx)("h1",{children:J("council.title")}),Object(p.jsx)(q,{})]})},exact:!0,inNavigation:!1,key:"council",label:"Council",path:gt.council()}];function _t(){return Object(p.jsx)(l.c,{children:yt.map((function(e){return Object(r.createElement)(l.a,Object(u.a)(Object(u.a)({},e),{},{key:e.key}))}))})}n(317);var Ct=n(26),wt=n(212),It=n(77),Mt=Object(Ct.combineReducers)({account:ee,council:z,proposals:kt,dao:de}),Pt=function(){return"production"!==Object({NODE_ENV:"production",PUBLIC_URL:"https://fluxprotocol.github.io/dao-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://mainnet-api.flux.xyz/graphql",REACT_APP_DAO_ACCOUNT_ID:"dao.counselor.near",REACT_APP_FLUX_MARKET_DETAIL_URL:"https://fluxprotocol.github.io/beta/#/beta/markets/",REACT_APP_NETWORK:"mainnet"}).REACT_APP_APP_ENV?Object(wt.composeWithDevTools)(Object(Ct.applyMiddleware)(It.a)):Object(Ct.applyMiddleware)(It.a)};var Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Pt();return Object(Ct.createStore)(Mt,e,t)}({});o.a.render(Object(p.jsx)(i.a,{store:Tt,children:Object(p.jsx)(c.a,{children:Object(p.jsx)(s.b,{injectFirst:!0,children:Object(p.jsx)(_t,{})})})}),document.getElementById("root"))},97:function(e,t,n){e.exports={page:"Page_page__1vav1",page__body:"Page_page__body__3V8v2","page__body--large":"Page_page__body--large__27pTP","page__body--unrestricted":"Page_page__body--unrestricted__3wRih"}}},[[318,1,2]]]);
//# sourceMappingURL=main.288f9070.chunk.js.map