(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{P7wE:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class u{}var o=t("pMnS"),a=t("SVse"),i=t("iInd"),r=t("XCAP"),d=t("Pk+G"),c=t("s7LF"),g=t("AGyb"),s=t("pxtl"),p=t("LqlI");class m{constructor(l,n,t,e,u,o){if(this.titleService=l,this.route=n,this.mainService=t,this.toastr=e,this.metaTagService=u,this.doc=o,this.blogData=[],this.latestBlogData=[],this.popularBlogData=[],this.tagsData=[],this.addon=!1,this.page=1,this.pageLimit=0,this.totalBlog=0,this.loading=!0,this.isFullListDisplayed=!1,this.doc.getElementsByTagName("link")){let l=this.doc.getElementsByTagName("link");for(var a=0;a<l.length;a++)"canonical"==l[a].rel&&l[a].setAttribute("href",window.location.href)}}ngOnInit(){this.mainService.seo_data_signup_login("blogs").subscribe(l=>{this.titleService.setTitle(l.seo_title),this.metaTagService.updateTag({name:"description",content:l.seo_description}),this.metaTagService.updateTag({name:"keywords",content:l.seo_description}),this.metaTagService.updateTag({property:"og:title",content:l.seo_title}),this.metaTagService.updateTag({property:"og:type",content:l.seo_description}),this.metaTagService.updateTag({property:"og:url",content:window.location.href}),this.metaTagService.updateTag({property:"og:image",content:"assets/img/logo-white.png"})}),this.currentRoute={category_id:"",month:"",year:"",tag_name:""},this.route.queryParams.subscribe(l=>{let n;this.currentRoute=l,this.page=1,this.isFullListDisplayed=!1,this.currentRoute.tag_name?((n=new FormData).append("page",this.page),n.append("category_id",""),n.append("tag_name",this.currentRoute.tag_name),n.append("month",""),n.append("year","")):((n=new FormData).append("page",this.page),n.append("category_id",""),n.append("tag_name",""),n.append("month",""),n.append("year","")),this.getBlogs(n)})}onScroll(){this.loading=!0,this.page++,this.mainService.moreBlogDetail({page:this.page,category_id:this.currentRoute.category_id?this.currentRoute.category_id:"",tag_name:this.currentRoute.tag_name?this.currentRoute.tag_name:"",month:this.currentRoute.month?this.currentRoute.month:"",year:this.currentRoute.year?this.currentRoute.year:""}).subscribe(l=>{this.loading=!1,"success"==l.status&&l.data.length>0?this.blogData.push(...l.data):this.isFullListDisplayed=!0})}getBlogs(l){this.loading=!0,this.mainService.blogs(l).subscribe(l=>{"success"==l.status?(this.loading=!1,this.addon=!0,this.totalBlog=l.totalBlog,this.pageLimit=l.per_page_limit,this.latestBlogData=l.latest_blog,this.popularBlogData=l.popular_blog,this.tagsData=[],l.tags.length>0&&l.tags.forEach(l=>{""!=l&&null!=l&&this.tagsData.push(l)}),this.currentRoute.category_id||this.currentRoute.month&&this.currentRoute.year||(this.blogData=l.data)):this.toastr.errorToastr("No blog found")},l=>{this.loading=!1})}ngOnDestroy(){this.addon=!1}}var f=t("cUpR"),b=e["\u0275crt"]({encapsulation:0,styles:[['.search-results[_ngcontent-%COMP%]{height:80vh!important;overflow-y:scroll}.blog-entry[_ngcontent-%COMP%]{box-shadow:0 0 22px rgba(0,0,0,.03);padding:10px 15px;border:1px solid #ededed;background-color:#fff}.page-header[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]{background-color:transparent;margin:-25px 0 0;padding:0 0 30px}.page-header[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .page-header[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .page-header[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]::before{color:#fff}.blog-entry[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{display:block;height:150px;width:200px;background-position:center;background-size:cover}.blog-sidebar-img[_ngcontent-%COMP%]{display:block;height:60px;width:80px;background-position:center;background-size:cover}.blog-text[_ngcontent-%COMP%]{width:calc(100% - 150px)}.blog-sidebar-text[_ngcontent-%COMP%]{width:calc(100% - 60px)}.blog-entry[_ngcontent-%COMP%]   .blog-text[_ngcontent-%COMP%]   .meta-wrap[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .blog-entry[_ngcontent-%COMP%]   .blog-text[_ngcontent-%COMP%]   .meta-wrap[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px;margin:0 10px 0 0;color:#908f8f}.btn-custom[_ngcontent-%COMP%]{font-size:15px;color:#c90f1a}.btn-custom[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{vertical-align:middle;padding-left:5px}.blog-disc[_ngcontent-%COMP%]{font-size:14px}.blog-entry[_ngcontent-%COMP%]   .blog-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:18px}.blog-sidebar[_ngcontent-%COMP%]{display:block;box-shadow:0 0 22px rgba(0,0,0,.03);padding:10px 15px;border:1px solid #ededed;background-color:#fff}.blog_sidebar_block_heading[_ngcontent-%COMP%]{position:relative;padding-bottom:15px;margin-bottom:15px}.blog_sidebar_block_heading[_ngcontent-%COMP%]:after{content:"";height:1px;width:100%;background-color:#ededed;position:absolute;bottom:0;left:0}.blog-side-heading[_ngcontent-%COMP%]{font-size:15px}.blog-side-heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.blog-side-meta[_ngcontent-%COMP%], .blog-side-meta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:13px;margin:0 10px 0 0;color:#908f8f}.blog-wrapper[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border-top:1px solid #ededed}.blog_sidebar_normal_list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin:0}.blog_sidebar_normal_list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}.blog_sidebar_block[_ngcontent-%COMP%]{padding-bottom:1rem;border-bottom:1px solid #ededed}.blog_sidebar_block[_ngcontent-%COMP%]:last-child{padding-bottom:0;border-bottom:none}.categoryBlogClass[_ngcontent-%COMP%]{font-weight:400;margin-bottom:7px;display:block;position:relative}.categoryBlogClass[_ngcontent-%COMP%]:hover{color:#c90f1a}.categoryBlogClass[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:16px;margin-right:7px;vertical-align:initial}.blog-archives[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#666;margin-bottom:5px;font-size:13px}.blog-archives[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #ededed}.blog-archives[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.categoryBlogClass[_ngcontent-%COMP%]{margin-bottom:3px}.blog-archives[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:last-child{border-bottom:none}.findTags[_ngcontent-%COMP%]{display:inline-block;background-color:#e4e4e4;margin-bottom:5px;padding:5px 12px;border-radius:25px;font-weight:400;font-size:12px}.findTags[_ngcontent-%COMP%]:hover{background-color:#c90f1a;color:#fff}.blog-sidebar-trigger[_ngcontent-%COMP%]{display:none;font-size:18px;font-weight:400;background-color:#efefef;padding:7px 15px;margin-bottom:15px}.bar-icon[_ngcontent-%COMP%], .times-icon[_ngcontent-%COMP%]{font-size:22px}.open[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%], .times-icon[_ngcontent-%COMP%]{display:none}.bar-icon[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]   .times-icon[_ngcontent-%COMP%]{display:block}.single-post-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .single-post-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:11px;color:#908f8f}.single_blog_heading[_ngcontent-%COMP%]{font-size:30px}.blog-post-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.blog-wrapper[_ngcontent-%COMP%]   .page_banner[_ngcontent-%COMP%]{margin-bottom:30px}@media (max-width:767.98px){.blog-wrapper[_ngcontent-%COMP%]   .page_banner[_ngcontent-%COMP%]{margin-bottom:15px}.blog-entry[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{height:80px;width:80px}.blog-text[_ngcontent-%COMP%]{width:calc(100% - 80px)}.blog-entry[_ngcontent-%COMP%]   .blog-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .blog-entry[_ngcontent-%COMP%]   .blog-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:15px;line-height:18px;font-weight:400}.blog-entry[_ngcontent-%COMP%]   .blog-text[_ngcontent-%COMP%]   .meta-wrap[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .blog-entry[_ngcontent-%COMP%]   .blog-text[_ngcontent-%COMP%]   .meta-wrap[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;font-size:12px}.blog_sidebar_block_heading[_ngcontent-%COMP%]{padding-bottom:10px;font-size:20px;font-weight:400}.blog-sidebar[_ngcontent-%COMP%]{margin:0 0 20px}.blog-disc[_ngcontent-%COMP%], .btn-custom[_ngcontent-%COMP%]{font-size:13px}}.flexi_login[_ngcontent-%COMP%]{height:53px;font-size:20px;font-weight:500;font-family:Poppins,sans-serif;background:#c90f1a;border:2px solid #c90f1a;color:#fff}']],data:{}});function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,5,"div",[["class","col-lg-8 order-lg-1 order-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,4,"div",[["class","row no-gutters"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,3,"div",[["class","col-md-12 mb-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,2,"div",[["class","blog-entry d-flex align-items-md-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["No blog found!"]))],null,null)}function _(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"i",[["class","fa fa-calendar mr-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,[" "," "])),e["\u0275ppd"](3,2)],null,(function(l,n){var t=e["\u0275unv"](n,2,0,l(n,3,0,e["\u0275nov"](n.parent.parent.parent,0),n.parent.context.$implicit.updated_at,"mediumDate"));l(n,2,0,t)}))}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"a",[["href","javascript:void(0);"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,0,"i",[["class","fa fa-folder-o mr-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](3,null,[" "," "]))],null,(function(l,n){l(n,3,0,n.parent.context.$implicit.tags)}))}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,26,"div",[["class","row no-gutters"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,25,"div",[["class","col-md-12 mb-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,24,"div",[["class","blog-entry d-flex align-items-md-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,5,"a",[["class","img img-2"],["href","javascript:void(0);"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,7).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275prd"](512,null,a.C,a.D,[e.ElementRef,e.KeyValueDiffers,e.Renderer2]),e["\u0275did"](5,278528,null,0,a.o,[a.C],{ngStyle:[0,"ngStyle"]},null),e["\u0275pod"](6,{"background-image":0}),e["\u0275did"](7,671744,null,0,i.o,[i.m,i.a,a.i],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](8,2),(l()(),e["\u0275eld"](9,0,null,null,17,"div",[["class","blog-text pl-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,4,"h3",[["class","mb-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,3,"a",[["href","javascript:void(0);"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,12).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275did"](12,671744,null,0,i.o,[i.m,i.a,a.i],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](13,2),(l()(),e["\u0275ted"](14,null,["",""])),(l()(),e["\u0275eld"](15,0,null,null,5,"div",[["class","meta-wrap"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,4,"p",[["class","meta mb-2"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](18,16384,null,0,a.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](20,16384,null,0,a.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](21,0,null,null,0,"p",[["class","blog-disc mb-2"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,4,"a",[["class","btn-custom"],["href","javascript:void(0);"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,23).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275did"](23,671744,null,0,i.o,[i.m,i.a,a.i],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](24,2),(l()(),e["\u0275ted"](-1,null,[" Read More "])),(l()(),e["\u0275eld"](26,0,null,null,0,"i",[["class","ion-ios-arrow-forward"]],null,null,null,null,null))],(function(l,n){var t=l(n,6,0,"url("+n.context.$implicit.banner_image+")");l(n,5,0,t);var e=l(n,8,0,"/blog-detail",n.context.$implicit.slug);l(n,7,0,e);var u=l(n,13,0,"/blog-detail",n.context.$implicit.slug);l(n,12,0,u),l(n,18,0,n.context.$implicit.updated_at),l(n,20,0,n.context.$implicit.tags);var o=l(n,24,0,"/blog-detail",n.context.$implicit.slug);l(n,23,0,o)}),(function(l,n){l(n,3,0,e["\u0275nov"](n,7).target,e["\u0275nov"](n,7).href),l(n,11,0,e["\u0275nov"](n,12).target,e["\u0275nov"](n,12).href),l(n,14,0,n.context.$implicit.title),l(n,21,0,n.context.$implicit.description),l(n,22,0,e["\u0275nov"](n,23).target,e["\u0275nov"](n,23).href)}))}function O(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"div",[["class","row no-gutters"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"div",[["class","col-md-12 mb-3 text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"button",[["class","btn w-100 flexi_login"],["type","button"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onScroll()&&e),e}),null,null)),(l()(),e["\u0275ted"](-1,null,["Load more"]))],null,null)}function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","col-lg-8 order-lg-1 order-2"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](2,278528,null,0,a.k,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,O)),e["\u0275did"](4,16384,null,0,a.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,2,0,t.blogData),l(n,4,0,t.totalBlog>t.page*t.pageLimit)}),null)}function M(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","blog_sidebar_block_heading h3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Most Popular "]))],null,null)}function x(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"div",[["class","d-inline-block mr-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"span",[["class","fa fa-calendar mr-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,[" "," "])),e["\u0275ppd"](3,2)],null,(function(l,n){var t=e["\u0275unv"](n,2,0,l(n,3,0,e["\u0275nov"](n.parent.parent.parent,0),n.parent.context.$implicit.updated_at,"mediumDate"));l(n,2,0,t)}))}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","d-inline-block mr-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,2,"a",[["href","javascript:void(0);"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,0,"i",[["class","fa fa-folder-o mr-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](4,null,[" "," "]))],null,(function(l,n){l(n,4,0,n.parent.context.$implicit.tags)}))}function k(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,17,"div",[["class","blog_sidebar_block mb-3 d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,5,"a",[["class","blog-sidebar-img mr-2"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,5).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275prd"](512,null,a.C,a.D,[e.ElementRef,e.KeyValueDiffers,e.Renderer2]),e["\u0275did"](3,278528,null,0,a.o,[a.C],{ngStyle:[0,"ngStyle"]},null),e["\u0275pod"](4,{"background-image":0}),e["\u0275did"](5,671744,null,0,i.o,[i.m,i.a,a.i],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](6,2),(l()(),e["\u0275eld"](7,0,null,null,10,"div",[["class","blog-sidebar-text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,4,"p",[["class","blog-side-heading h5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,3,"a",[["href","javascript:void(0);"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,10).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275did"](10,671744,null,0,i.o,[i.m,i.a,a.i],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](11,2),(l()(),e["\u0275ted"](12,null,["",""])),(l()(),e["\u0275eld"](13,0,null,null,4,"div",[["class","blog-side-meta"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,x)),e["\u0275did"](15,16384,null,0,a.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](17,16384,null,0,a.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=l(n,4,0,"url("+n.context.$implicit.banner_image+")");l(n,3,0,t);var e=l(n,6,0,"/blog-detail",n.context.$implicit.slug);l(n,5,0,e);var u=l(n,11,0,"/blog-detail",n.context.$implicit.slug);l(n,10,0,u),l(n,15,0,n.context.$implicit.updated_at),l(n,17,0,n.context.$implicit.tags)}),(function(l,n){l(n,1,0,e["\u0275nov"](n,5).target,e["\u0275nov"](n,5).href),l(n,9,0,e["\u0275nov"](n,10).target,e["\u0275nov"](n,10).href),l(n,12,0,n.context.$implicit.title)}))}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,k)),e["\u0275did"](2,278528,null,0,a.k,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.popularBlogData)}),null)}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","blog_sidebar_block_heading h3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Latest Blog "]))],null,null)}function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"div",[["class","d-inline-block mr-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"span",[["class","fa fa-calendar mr-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,[" "," "])),e["\u0275ppd"](3,2)],null,(function(l,n){var t=e["\u0275unv"](n,2,0,l(n,3,0,e["\u0275nov"](n.parent.parent.parent,0),n.parent.context.$implicit.updated_at,"mediumDate"));l(n,2,0,t)}))}function T(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","d-inline-block mr-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,2,"a",[["href","javascript:void(0);"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,0,"i",[["class","fa fa-folder-o mr-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](4,null,[" "," "]))],null,(function(l,n){l(n,4,0,n.parent.context.$implicit.tags)}))}function D(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,17,"div",[["class","blog_sidebar_block mb-3 d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,5,"a",[["class","blog-sidebar-img mr-2"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,5).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275prd"](512,null,a.C,a.D,[e.ElementRef,e.KeyValueDiffers,e.Renderer2]),e["\u0275did"](3,278528,null,0,a.o,[a.C],{ngStyle:[0,"ngStyle"]},null),e["\u0275pod"](4,{"background-image":0}),e["\u0275did"](5,671744,null,0,i.o,[i.m,i.a,a.i],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](6,2),(l()(),e["\u0275eld"](7,0,null,null,10,"div",[["class","blog-sidebar-text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,4,"p",[["class","blog-side-heading h5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,3,"a",[["href","javascript:void(0);"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,10).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275did"](10,671744,null,0,i.o,[i.m,i.a,a.i],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](11,2),(l()(),e["\u0275ted"](12,null,["",""])),(l()(),e["\u0275eld"](13,0,null,null,4,"div",[["class","blog-side-meta"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,I)),e["\u0275did"](15,16384,null,0,a.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,T)),e["\u0275did"](17,16384,null,0,a.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=l(n,4,0,"url("+n.context.$implicit.banner_image+")");l(n,3,0,t);var e=l(n,6,0,"/blog-detail",n.context.$implicit.slug);l(n,5,0,e);var u=l(n,11,0,"/blog-detail",n.context.$implicit.slug);l(n,10,0,u),l(n,15,0,n.context.$implicit.updated_at),l(n,17,0,n.context.$implicit.tags)}),(function(l,n){l(n,1,0,e["\u0275nov"](n,5).target,e["\u0275nov"](n,5).href),l(n,9,0,e["\u0275nov"](n,10).target,e["\u0275nov"](n,10).href),l(n,12,0,n.context.$implicit.title)}))}function L(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,D)),e["\u0275did"](2,278528,null,0,a.k,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.latestBlogData)}),null)}function K(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","blog_sidebar_block_heading h3 mt-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Blog Tags "]))],null,null)}function B(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"a",[["class","findTags"],["data","sgsdgdfg"],["href","javascript:void(0);"],["rel","3"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,1).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275did"](1,671744,null,0,i.o,[i.m,i.a,a.i],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),e["\u0275pod"](2,{category_id:0,month:1,year:2,tag_name:3}),e["\u0275pad"](3,1),(l()(),e["\u0275ted"](4,null,["",""]))],(function(l,n){var t=l(n,2,0,"","","",n.context.$implicit),e=l(n,3,0,"/blogs");l(n,1,0,t,e)}),(function(l,n){l(n,0,0,e["\u0275nov"](n,1).target,e["\u0275nov"](n,1).href),l(n,4,0,n.context.$implicit)}))}function F(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","box-loader"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"img",[["alt","Loading"],["class","loader-logo"],["src","assets/img/loading.png"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,0,"div",[["class","loader-05"]],null,null,null,null,null))],null,null)}function $(l){return e["\u0275vid"](0,[e["\u0275pid"](0,a.d,[e.LOCALE_ID]),(l()(),e["\u0275eld"](1,0,null,null,1,"app-header",[],null,[["window","scroll"],["window","resize"]],(function(l,n,t){var u=!0;return"window:scroll"===n&&(u=!1!==e["\u0275nov"](l,2).onWindowScroll()&&u),"window:resize"===n&&(u=!1!==e["\u0275nov"](l,2).onResize(t)&&u),u}),r.b,r.a)),e["\u0275did"](2,4440064,null,0,d.a,[c.d,g.a,i.m,s.a,i.a,p.a,e.ChangeDetectorRef],null,null),(l()(),e["\u0275eld"](3,0,null,null,45,"section",[["class","cms_section blog-wrapper"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,3,"div",[["class","page_banner"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,2,"div",[["class","banner_heading"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,1,"h1",[["class","heading1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Blog"])),(l()(),e["\u0275eld"](8,0,null,null,40,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,11,"nav",[["aria-label","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,10,"ol",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,4,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,3,"a",[["href","javascript:void(0);"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,13).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u}),null,null)),e["\u0275did"](13,671744,null,0,i.o,[i.m,i.a,a.i],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](14,1),(l()(),e["\u0275ted"](-1,null,["Home"])),(l()(),e["\u0275eld"](16,0,null,null,4,"li",[["aria-current","page"],["class","breadcrumb-item active"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,17).onClick()&&u),u}),null,null)),e["\u0275did"](17,16384,null,0,i.n,[i.m,i.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](18,1),(l()(),e["\u0275eld"](19,0,null,null,1,"a",[["href","javascript:void(0);"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Blog"])),(l()(),e["\u0275eld"](21,0,null,null,27,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](23,16384,null,0,a.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,P)),e["\u0275did"](25,16384,null,0,a.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](26,0,null,null,22,"div",[["class","col-lg-4 order-lg-2 order-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,6,"a",[["class","blog-sidebar-trigger"],["href","javascript:void(0);"]],null,null,null,null,null)),(l()(),e["\u0275eld"](28,0,null,null,5,"div",[["class","row align-items-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,1,"div",[["class","col-10"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Categories, Archives, Tags"])),(l()(),e["\u0275eld"](31,0,null,null,2,"div",[["class","col-2 text-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](32,0,null,null,0,"i",[["class","fal fa-bars bar-icon"]],null,null,null,null,null)),(l()(),e["\u0275eld"](33,0,null,null,0,"i",[["class","fal fa-times times-icon"]],null,null,null,null,null)),(l()(),e["\u0275eld"](34,0,null,null,14,"div",[["class","blog-sidebar"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,M)),e["\u0275did"](36,16384,null,0,a.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,w)),e["\u0275did"](38,16384,null,0,a.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](40,16384,null,0,a.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,L)),e["\u0275did"](42,16384,null,0,a.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,K)),e["\u0275did"](44,16384,null,0,a.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](45,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](46,0,null,null,2,"div",[["class","tag_cloud"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,B)),e["\u0275did"](48,278528,null,0,a.k,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](49,0,null,null,3,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,F)),e["\u0275did"](51,16384,null,0,a.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](52,0,null,null,0,"div",[["class","overlay"],["style","display: none"]],null,null,null,null,null))],(function(l,n){var t=n.component;l(n,2,0);var e=l(n,14,0,"/");l(n,13,0,e);var u=l(n,18,0,"/blogs");l(n,17,0,u),l(n,23,0,0==t.blogData.length),l(n,25,0,t.blogData.length>0),l(n,36,0,t.popularBlogData.length>0),l(n,38,0,t.popularBlogData.length>0),l(n,40,0,t.latestBlogData.length>0),l(n,42,0,t.popularBlogData.length>0),l(n,44,0,t.tagsData.length>0),l(n,48,0,t.tagsData),l(n,51,0,t.loading)}),(function(l,n){l(n,12,0,e["\u0275nov"](n,13).target,e["\u0275nov"](n,13).href)}))}function z(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-blog-component",[],null,null,null,$,b)),e["\u0275did"](1,245760,null,0,m,[f.Title,i.a,g.a,s.a,f.Meta,a.c],null,null)],(function(l,n){l(n,1,0)}),null)}var S=e["\u0275ccf"]("app-blog-component",m,z,{},{},[]),V=t("x0OW"),j=t("z5nN"),N=t("IheW"),E=t("QQfA"),A=t("IP0z"),q=t("2uy1"),Z=t("z/SZ");class X{}var H=t("xri+"),J=t("cV2f"),W=t("zMNK"),G=t("/HVE"),Q=t("hOhj"),U=t("f5vp"),Y=t("CjyL"),ll=t("qb3N");t.d(n,"BlogComponentModuleNgFactory",(function(){return nl}));var nl=e["\u0275cmf"](u,[],(function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,S,V.a,j.a,j.b]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,a.n,a.m,[e.LOCALE_ID,[2,a.F]]),e["\u0275mpd"](4608,c.x,c.x,[]),e["\u0275mpd"](4608,c.d,c.d,[]),e["\u0275mpd"](4608,N.i,N.o,[a.c,e.PLATFORM_ID,N.m]),e["\u0275mpd"](4608,N.p,N.p,[N.i,N.n]),e["\u0275mpd"](5120,N.a,(function(l){return[l]}),[N.p]),e["\u0275mpd"](4608,N.l,N.l,[]),e["\u0275mpd"](6144,N.j,null,[N.l]),e["\u0275mpd"](4608,N.h,N.h,[N.j]),e["\u0275mpd"](6144,N.b,null,[N.h]),e["\u0275mpd"](4608,N.f,N.k,[N.b,e.Injector]),e["\u0275mpd"](4608,N.c,N.c,[N.f]),e["\u0275mpd"](4608,E.b,E.b,[E.g,E.c,e.ComponentFactoryResolver,E.f,E.d,e.Injector,e.NgZone,a.c,A.b,[2,a.h]]),e["\u0275mpd"](5120,E.h,E.i,[E.b]),e["\u0275mpd"](4608,s.d,s.d,[]),e["\u0275mpd"](4608,s.a,s.a,[e.ApplicationRef,e.ComponentFactoryResolver,e.Injector,e.NgZone,s.d]),e["\u0275mpd"](4608,q.a,q.a,[e.NgZone,e.RendererFactory2,e.PLATFORM_ID]),e["\u0275mpd"](4608,Z.a,Z.a,[e.ComponentFactoryResolver,e.NgZone,e.Injector,q.a,e.ApplicationRef]),e["\u0275mpd"](4608,p.a,p.a,[e.RendererFactory2,Z.a]),e["\u0275mpd"](1073742336,a.b,a.b,[]),e["\u0275mpd"](1073742336,i.p,i.p,[[2,i.u],[2,i.m]]),e["\u0275mpd"](1073742336,X,X,[]),e["\u0275mpd"](1073742336,H.a,H.a,[]),e["\u0275mpd"](1073742336,J.a,J.a,[]),e["\u0275mpd"](1073742336,c.w,c.w,[]),e["\u0275mpd"](1073742336,c.j,c.j,[]),e["\u0275mpd"](1073742336,c.t,c.t,[]),e["\u0275mpd"](1073742336,N.e,N.e,[]),e["\u0275mpd"](1073742336,N.d,N.d,[]),e["\u0275mpd"](1073742336,s.b,s.b,[]),e["\u0275mpd"](1073742336,A.a,A.a,[]),e["\u0275mpd"](1073742336,W.b,W.b,[]),e["\u0275mpd"](1073742336,G.b,G.b,[]),e["\u0275mpd"](1073742336,Q.b,Q.b,[]),e["\u0275mpd"](1073742336,E.e,E.e,[]),e["\u0275mpd"](1073742336,p.e,p.e,[]),e["\u0275mpd"](1073742336,U.a,U.a,[]),e["\u0275mpd"](1073742336,Y.a,Y.a,[]),e["\u0275mpd"](1073742336,ll.a,ll.a,[]),e["\u0275mpd"](1073742336,u,u,[]),e["\u0275mpd"](1024,i.k,(function(){return[[{path:"",component:m}],[]]}),[]),e["\u0275mpd"](256,N.m,"XSRF-TOKEN",[]),e["\u0275mpd"](256,N.n,"X-XSRF-TOKEN",[])])}))}}]);