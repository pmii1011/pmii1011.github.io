(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var n=a("dI71"),l=a("q1tI"),o=a.n(l),s=(a("Wbzz"),a("TJpk")),r=a("9eSz"),i=a.n(r),p=a("4a3J"),c=a("1Yj4"),m=a("BLzl"),d=a("ok1R"),u=a("rhny"),h=a("sOKU"),g=(a("vrFN"),a("cEjN")),f=a("szhD"),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={featuredImage:null,post:a.props.data.post,previous:a.props.data.previous,next:a.props.data.next,currentUrl:""},a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e,t,a,n,l,o,s,r,i,p,c,m,d,u,h;this.state.currentUrl=window.location.href||this.props.location.href,this.setState({featuredImage:{fluid:null===(e=this.props.data.post.featuredImage)||void 0===e||null===(t=e.node)||void 0===t||null===(a=t.localFile)||void 0===a||null===(n=a.childImageSharp)||void 0===n?void 0:n.fluid,fixed:null===(l=this.props.data.post.featuredImage)||void 0===l||null===(o=l.node)||void 0===o||null===(s=o.localFile)||void 0===s||null===(r=s.childImageSharp)||void 0===r?void 0:r.fixed,alt:(null===(i=this.props.data.post.featuredImage)||void 0===i||null===(p=i.node)||void 0===p?void 0:p.altText)||"",url:null===(c=this.props.data.post.featuredImage)||void 0===c||null===(m=c.node)||void 0===m||null===(d=m.localFile)||void 0===d||null===(u=d.childImageSharp)||void 0===u||null===(h=u.original)||void 0===h?void 0:h.url}})},a.render=function(){var e,t,a,n,l,r,v,E,w;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.Helmet,{title:this.state.post.title,description:this.state.post.excerpt,img:null===(e=this.state.featuredImage)||void 0===e||null===(t=e.fixed)||void 0===t?void 0:t.src,location:this.state.currentUrl,defer:!1,meta:[{name:"robots",content:"index, follow"},{name:"googlebot",content:"index, follow"},{name:"msnbot",content:"index, follow"},{name:"description",content:this.props.data.post.excerpt.replace("<p>","").replace("</p>","")},{name:"keywords",content:"PMII, ORMEK, Pergerakan, Mahasiswa, Islam, Indonesia, NU, Nahdlatul-Ulama, aswaja, ITS, PPNS, PENS, Institut, teknologi, sepuluh, nopember, cabang surabaya, cipayung, Himpunan, HMI, GMNI, aktivis, mustadzafin "},{name:"author",content:"PMII 1011"},{property:"og:image",content:"https://pmii1011.github.io"+this.props.data.post.featuredImage.node.localFile.childImageSharp.fixed.src},{property:"og:image:secure_url",content:"https://pmii1011.github.io"+this.props.data.post.featuredImage.node.localFile.childImageSharp.fixed.src},{property:"og:image:width",content:this.props.data.post.featuredImage.node.localFile.childImageSharp.fixed.width||"300"},{property:"og:image:height",content:this.props.data.post.featuredImage.node.localFile.childImageSharp.fixed.height||"300"},{property:"og:image:type",content:"image/jpeg"},{property:"og:image:alt",content:this.state.post.title},{property:"og:locale",content:"ID"},{property:"og:type",content:"website"},{property:"og:title",content:this.state.post.title},{property:"og:description",content:this.props.data.post.excerpt.replace("<p>","").replace("</p>","")},{property:"og:url",content:this.props.location.href||"https://pmii1011.github.io/"+this.props.data.post.slug},{property:"og:site_name",content:"PMII Sepuluh Nopember"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:"@pmii1011"},{name:"twitter:title",content:this.state.post.title},{name:"twitter:description",content:this.props.data.post.excerpt.replace("<p>","").replace("</p>","")},{name:"twitter:image",content:"https://pmii1011.github.io"+this.props.data.post.featuredImage.node.localFile.childImageSharp.fixed.src},{name:"google-site-verification",content:"rS1cKVMTZrZs4z_nsB3vhaQxUOY7K6Na0onEz9ztjyY"}]}),o.a.createElement(g.a,null),o.a.createElement("main",{ref:"main",className:"profile-page"},o.a.createElement("section",{className:"section-profile-cover section-shaped my-0"},o.a.createElement("div",{className:"shape shape-style-1 shape-default alpha-4"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null)),o.a.createElement("div",{className:"separator separator-bottom separator-skew"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"},o.a.createElement("polygon",{className:"fill-white",points:"2560 0 2560 100 0 100"})))),o.a.createElement("section",{className:"section"},o.a.createElement(c.a,null,o.a.createElement(m.a,{className:"card-profile shadow mt--300 "},o.a.createElement("div",{className:"px-4"},o.a.createElement("div",{className:"row d-flex justify-content-center text-center mt-5"},o.a.createElement("div",{className:"col-lg-9"},o.a.createElement("h3",null,null===(a=this.state.post)||void 0===a?void 0:a.title),o.a.createElement("h6",{className:"font-weight-300"},o.a.createElement("span",null,o.a.createElement("i",{className:"fa fa-pencil mr-2"}),"by ",null===(n=this.state.post)||void 0===n||null===(l=n.author)||void 0===l||null===(r=l.node)||void 0===r?void 0:r.name),"   ",o.a.createElement("span",null,o.a.createElement("i",{className:"fa fa-calendar mr-2"}),null===(v=this.state.post)||void 0===v?void 0:v.date)))),o.a.createElement("div",{className:"text-justify"},o.a.createElement(d.a,{className:"justify-content-center"},o.a.createElement(u.a,{lg:"9"},(null===(E=this.state.featuredImage)||void 0===E?void 0:E.fluid)&&o.a.createElement(i.a,{fluid:null===(w=this.state.featuredImage)||void 0===w?void 0:w.fluid,alt:this.state.featuredImage.alt||this.state.post.title,className:"mb-2 rounded"}),Object(p.a)(this.state.post.content)))),o.a.createElement("div",{className:"py-3 mb-5 text-justify"},o.a.createElement(d.a,{className:"justify-content-center"},o.a.createElement(u.a,{lg:"9"},o.a.createElement("span",{className:"text-lead"}," Bagikan :  "),o.a.createElement(h.a,{className:"btn-primary ",color:"success",href:"https://api.whatsapp.com/send?text="+this.state.currentUrl,target:"_blank",size:"sm"},o.a.createElement("i",{className:"fa fa-whatsapp mx-1"}),"  Whatsapp"),o.a.createElement(h.a,{className:"btn-primary ",color:"primary",href:"https://www.facebook.com/sharer/sharer.php?u="+this.state.currentUrl,target:"_blank",size:"sm"},o.a.createElement("i",{className:"fa fa-facebook mx-1"}),"  Facebook"),o.a.createElement(h.a,{className:"btn-primary ",color:"info",href:"https://twitter.com/intent/tweet?url="+this.state.currentUrl,target:"_blank",size:"sm"},o.a.createElement("i",{className:"fa fa-twitter mx-1"}),"  Twitter"))))))))),o.a.createElement(f.a,null))},t}(l.Component)}}]);