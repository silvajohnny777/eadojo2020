(this.webpackJsonpeadojo2020=this.webpackJsonpeadojo2020||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/palmHands.b5e8a91e.gif"},21:function(e,a,t){e.exports=t.p+"static/media/offerStats.6e92bdd7.gif"},22:function(e,a,t){e.exports=t.p+"static/media/offerCustomizable.6f83a5d4.gif"},23:function(e,a,t){e.exports=t.p+"static/media/business.07d255f9.svg"},24:function(e,a,t){e.exports=t.p+"static/media/loader.d5c88056.svg"},25:function(e,a,t){e.exports=t(37)},30:function(e,a,t){},31:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(18),r=t.n(s),l=t(3),c=t(4),o=t(6),E=t(5),m=(t(30),t(31),t(10)),g=t(1),T=function(e){Object(o.a)(t,e);var a=Object(E.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={languages:[]},e}return Object(c.a)(t,[{key:"componentWillMount",value:function(){this.setState({languages:this.props.language})}},{key:"render",value:function(){return i.a.createElement("div",{className:"navbarContainer"},i.a.createElement("div",{className:"navbarContent"},i.a.createElement("div",{className:"navbarContentHome"},i.a.createElement(m.b,{to:"/",className:"navbarHome"},i.a.createElement("span",{className:"eadHightlight"},this.state.languages.PLATFORM_NAME),this.state.languages.PLATFORM_NAME)),i.a.createElement("div",{className:"navbarContentLinks"},i.a.createElement(m.b,{to:"/companies",className:"navbarLink"},this.state.languages.WEBSITE_TEXT_COMPANIES),i.a.createElement(m.b,{to:"/colleges",className:"navbarLink"},this.state.languages.WEBSITE_TEXT_COLLEGES),i.a.createElement(m.b,{to:"/teachers",className:"navbarLink"},this.state.languages.WEBSITE_TEXT_TEACHERS),i.a.createElement("a",{href:"http://panel.ead.vairli.com/#/login",target:"_blank",rel:"noopener noreferrer",className:"navbarLink login"},this.state.languages.TEXT_AUTH_LOGIN)),i.a.createElement("div",{className:"navbarMobileBread"},"B")))}}]),t}(i.a.Component),u=function(e){Object(o.a)(t,e);var a=Object(E.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).changeImage=function(a,t){e.setState({activeImage:a,activeId:t})},e.state={activeId:0,languages:[],features:[]},e}return Object(c.a)(t,[{key:"componentWillMount",value:function(){this.setState({language:this.props.language,activeImage:this.props.language.WEBSITE_TEXT_FEATURE_ONE_IMAGE,features:[{title:this.props.language.WEBSITE_TEXT_FEATURE_ONE,image:this.props.language.WEBSITE_TEXT_FEATURE_ONE_IMAGE,description:this.props.language.WEBSITE_TEXT_FEATURE_ONE_DESCRIPTION},{title:this.props.language.WEBSITE_TEXT_FEATURE_TWO,image:this.props.language.WEBSITE_TEXT_FEATURE_TWO_IMAGE,description:this.props.language.WEBSITE_TEXT_FEATURE_TWO_DESCRIPTION},{title:this.props.language.WEBSITE_TEXT_FEATURE_THREE,image:this.props.language.WEBSITE_TEXT_FEATURE_THREE_IMAGE,description:this.props.language.WEBSITE_TEXT_FEATURE_THREE_DESCRIPTION},{title:this.props.language.WEBSITE_TEXT_FEATURE_FOUR,image:this.props.language.WEBSITE_TEXT_FEATURE_FOUR_IMAGE,description:this.props.language.WEBSITE_TEXT_FEATURE_FOUR_DESCRIPTION},{title:this.props.language.WEBSITE_TEXT_FEATURE_FIVE,image:this.props.language.WEBSITE_TEXT_FEATURE_FIVE_IMAGE,description:this.props.language.WEBSITE_TEXT_FEATURE_FIVE_DESCRIPTION}]})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"platformPresentationContainer"},i.a.createElement("div",{className:"platformPresentationContent"},i.a.createElement("div",{className:"platformPresentationContentTitle"},this.state.language.WEBSITE_TEXT_SECTION_THREE),i.a.createElement("div",{className:"platformPresentationContentDescription"},this.state.language.WEBSITE_TEXT_DESCRIPTION_SECTION_THREE),i.a.createElement("div",{className:"platformPresentationContentImageActive"},this.state.activeImage),i.a.createElement("div",{className:"platformPresentationFeatureContainer"},this.state.features.map((function(a,t){return i.a.createElement("div",{key:t,className:"featureBoxContainer"},i.a.createElement("div",{className:e.state.activeId===t?"featureBox active":"featureBox",onMouseEnter:function(){return e.changeImage(a.image,t)}},a.title),e.state.activeId===t&&i.a.createElement("div",{className:"featureBoxDescription"},a.description))})))))}}]),t}(i.a.Component),p=t(20),d=t.n(p),_=t(21),v=t.n(_),f=t(22),h=t.n(f),I=t(23),N=t.n(I),S=function(e){Object(o.a)(t,e);var a=Object(E.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={language:[],items:[],offers:[]},e}return Object(c.a)(t,[{key:"componentWillMount",value:function(){this.setState({language:this.props.language,items:[{icon:"https://img.icons8.com/nolan/64/000000/certificate.png",title:this.props.language.WEBSITE_TEXT_CERTIFICATE,description:"mobile_description"},{icon:"https://img.icons8.com/nolan/64/000000/edit-property.png",title:this.props.language.WEBSITE_TEXT_CUSTOMIZABLE,description:"mobile_description"},{icon:"https://img.icons8.com/nolan/64/000000/upload-to-cloud.png",title:this.props.language.WEBSITE_TEXT_CLOUD,description:"mobile_description"}],offers:[{image:v.a,title:this.props.language.WEBSITE_TEXT_STATS,description:this.props.language.WEBSITE_TEXT_STATS_DESCRIPTION},{image:h.a,title:this.props.language.WEBSITE_TEXT_CUSTOMIZABLE,description:this.props.language.WEBSITE_TEXT_CUSTOMIZABLE_DESCRIPTION},{image:N.a,title:this.props.language.WEBSITE_TEXT_BUSINESS,description:this.props.language.WEBSITE_TEXT_BUSINESS_DESCRIPTION}]})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"mainPageContainer"},i.a.createElement("div",{className:"mainPageContent"},i.a.createElement("div",{className:"mainPageContentLeft"}),i.a.createElement("div",{className:"mainPageContentRight"},i.a.createElement("div",{className:"mainPagePresentation"},i.a.createElement("div",{className:"mainPagePresentationTitle"},this.state.language.WEBSITE_TEXT_CREATE_ONLINE_COURSES),i.a.createElement("div",{className:"mainPagePresentationDescription"},i.a.createElement("div",{className:"mainPagePresentationButton"},this.state.language.TEXT_SIGNUP)))))),i.a.createElement("div",{className:"mainPageInformationBox"},i.a.createElement("div",{className:"mainPageInformationBoxContent"},this.state.items.map((function(e,a){return i.a.createElement("div",{key:a,className:"mainPageBoxInfo"},i.a.createElement("div",{className:"mainPageBoxInfoIcon"},i.a.createElement("img",{alt:"icon",src:e.icon})),i.a.createElement("div",{className:"mainPageBoxInfoText"},i.a.createElement("div",{className:"mainPageBoxInfoTitle"},e.title),i.a.createElement("div",{className:"mainPageBoxInfoDescription"},e.description)))})))),i.a.createElement("div",{className:"mainPageThirdSectionContainer"},i.a.createElement("div",{className:"mainPageThirdSectionContent"},i.a.createElement("div",{className:"mainPageThirdSectionLeft"},i.a.createElement("div",{className:"mainPageThirdSectionLeftTitle"},this.state.language.WEBSITE_TEXT_SECTION_TWO),i.a.createElement("div",{className:"mainPageThirdSectionLefdescription"},this.state.language.WEBSITE_TEXT_DESCRIPTION_SECTION_TWO)),i.a.createElement("div",{className:"mainPageThirdSectionRight"},i.a.createElement("img",{className:"mainPageThirdSectionRightImage",alt:"phoneGif",src:d.a})))),i.a.createElement(u,{language:this.state.language}),i.a.createElement("div",{className:"mainOffersContainer"},this.state.offers.map((function(e,a){return i.a.createElement("div",{key:a,className:a%2?"mainOffersContent reverse":"mainOffersContent"},i.a.createElement("div",{className:"mainOffersContentText"},i.a.createElement("div",{className:"mainOfferTitle"},e.title),i.a.createElement("div",{className:"mainOfferTextBar"}),i.a.createElement("div",{className:"mainOfferDescription"},e.description)),i.a.createElement("div",{className:"mainOffersContentImage"},i.a.createElement("img",{alt:"offer",className:"mainOfferImageTag",src:e.image})))}))),i.a.createElement("div",{className:"mainPageHelpActionContainer"},i.a.createElement("div",{className:"mainPageHelpContent"},i.a.createElement("div",{className:"mainPageHelpText"},i.a.createElement("div",{className:"mainPageHelpTitle"},i.a.createElement("i",{className:"fas fa-comments"}),i.a.createElement("div",{className:"mainPageHelpTitleString"},this.state.language.WEBSITE_TEXT_NEED_HELP)),i.a.createElement("hr",{className:"mainPageTextBar"}),i.a.createElement("div",{className:"mainPageTextDescription"},this.state.language.WEBSITE_TEXT_NEED_HELP_DESCRIPTION),i.a.createElement("div",{className:"mainPageTextButtonContainer"},i.a.createElement("div",{className:"mainPageTextButton"},this.state.language.WEBSITE_TEXT_NEED_HELP,i.a.createElement("i",{className:"fas iconButon fa-chevron-right"})))))),i.a.createElement("div",{className:"mainPageTalkWithUsContainer"},i.a.createElement("div",{className:"mainPageTalkWithUsContent"},i.a.createElement("div",{className:"mainPageTalkWithUs"},this.state.language.WEBSITE_TEXT_EMAIL))),i.a.createElement("div",{className:"mainPageFooterContainer"},i.a.createElement("div",{className:"mainPageFooterContent"},"FOOTER")))}}]),t}(i.a.Component),O=function(e){Object(o.a)(t,e);var a=Object(E.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={},e}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"companiesPageContainer"},i.a.createElement("div",{className:"companiesPageContent"},i.a.createElement("div",{className:"companiesPageContentTitle"},"Sometimes..."),i.a.createElement("div",{className:"companiesPageContentDescription"},"You are forced to change.")))}}]),t}(i.a.Component),P=t(24),C=t.n(P),B=function(e){Object(o.a)(t,e);var a=Object(E.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={},e}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("img",{alt:"loader",className:"loaderTag",src:C.a}))}}]),t}(i.a.Component),b=function(e){Object(o.a)(t,e);var a=Object(E.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={},e}return Object(c.a)(t,[{key:"render",value:function(){return"PAGE COULD NOT BE FOUND - 404 PAGE HERE"}}]),t}(i.a.Component),W=function(e){Object(o.a)(t,e);var a=Object(E.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={loading:!1,userLanguage:"",activeLanguage:"",languages:[]},e}return Object(c.a)(t,[{key:"componentWillMount",value:function(){this.setState({loading:!0,userLanguage:window.navigator.userLanguage||"en-US"===window.navigator.language?"en":window.navigator.userLanguage||window.navigator.language})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://server.ead.vairli.com/public/api/helpers/languages/"+this.state.userLanguage).then((function(e){return e.json()})).then((function(a){return e.setState({languages:a,loading:!1})})).catch((function(a){console.error("Error:",a),e.setState({loading:e.state.languageEn&&!1,error:!0})}))}},{key:"render",value:function(){var e=this;return this.state.loading?i.a.createElement(B,null):i.a.createElement(m.a,{basename:"/eadojo2020"},i.a.createElement(T,{language:this.state.languages}),i.a.createElement(g.c,null,i.a.createElement(g.a,{path:"/",render:function(){return i.a.createElement(S,{language:e.state.languages})},exact:!0}),i.a.createElement(g.a,{path:"/companies",render:function(){return i.a.createElement(O,{language:e.state.languages})}}),i.a.createElement(g.a,{render:function(){return i.a.createElement(b,{language:e.state.languages})}})))}}]),t}(i.a.Component);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(W,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.b602564b.chunk.js.map