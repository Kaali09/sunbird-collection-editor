org.ekstep.pluginframework.pluginManager.registerPlugin({"id":"org.ekstep.collectioneditorfunctions","ver":"1.0","author":"Sunil A S","description":"","publishedDate":"","editor":{"main":"editor/plugin.js"}},eval('org.ekstep.collectioneditor.basePlugin.extend({initialize:function(){ecEditor.addEventListener(this.manifest.id+":save",this.saveContent,this),ecEditor.addEventListener(this.manifest.id+":review",this.reviewContent,this),ecEditor.addEventListener(this.manifest.id+":publish",this.publishContent,this),ecEditor.addEventListener(this.manifest.id+":reject",this.rejectContent,this)},saveContent:function(e,t){var o=org.ekstep.collectioneditor.api.getService("collection").getCollectionHierarchy();if(console.log("contentBody",o),!this.isValidSave())return t.showNotification&&ecEditor.dispatchEvent("org.ekstep.toaster:error",{message:"Please update the collection details before save",position:"topCenter",icon:"fa fa-warning"}),t.callback&&t.callback("mandatory fields are missing in the data!"),!1;ecEditor.getService(ServiceConstants.CONTENT_SERVICE).saveCollectionHierarchy({body:o},function(e,o){o&&o.data&&"OK"==o.data.responseCode?(t.showNotification&&ecEditor.dispatchEvent("org.ekstep.toaster:success",{title:"Content saved successfully!",position:"topCenter",icon:"fa fa-check-circle"}),org.ekstep.collectioneditor.api.getService("collection").clearCache(),ecEditor._.forIn(o.data.result.identifiers,function(e,t){var o=ecEditor.getService(ServiceConstants.COLLECTION_SERVICE).getNodeById(t);o&&(o.data.id=e)})):t.showNotification&&ecEditor.dispatchEvent("org.ekstep.toaster:error",{message:"Unable to save the content, try again!",position:"topCenter",icon:"fa fa-warning"}),t.callback&&t.callback(e,o)})},reviewContent:function(e,t){var o=ecEditor.getContext("contentId");ecEditor.getService(ServiceConstants.CONTENT_SERVICE).sendForReview({contentId:o},function(e,o){o&&o.data&&"OK"==o.data.responseCode?ecEditor.dispatchEvent("org.ekstep.toaster:success",{title:"Content sent for review...",position:"topCenter",icon:"fa fa-check-circle"}):ecEditor.dispatchEvent("org.ekstep.toaster:error",{message:"Sending for review failed, please try again later...",position:"topCenter",icon:"fa fa-warning"}),t.callback&&t.callback(e,o)})},publishContent:function(e,t){var o=ecEditor.getContext("contentId");ecEditor.getService(ServiceConstants.CONTENT_SERVICE).publishContent({contentId:o},function(e,o){o&&o.data&&"OK"==o.data.responseCode?ecEditor.dispatchEvent("org.ekstep.toaster:success",{title:"Content published successfully!",position:"topCenter",icon:"fa fa-check-circle"}):ecEditor.dispatchEvent("org.ekstep.toaster:error",{message:"Unable to publish content, try again!",position:"topCenter",icon:"fa fa-warning"}),t.callback&&t.callback(e,o)})},rejectContent:function(e,t){ecEditor.getService(ServiceConstants.CONTENT_SERVICE).rejectContent({contentId:ecEditor.getContext("contentId")},function(e,o){o&&o.data&&"OK"==o.data.responseCode?ecEditor.dispatchEvent("org.ekstep.toaster:success",{title:"Content rejected successfully!",position:"topCenter",icon:"fa fa-check-circle"}):ecEditor.dispatchEvent("org.ekstep.toaster:error",{message:"Unable to reject content, try again!",position:"topCenter",icon:"fa fa-warning"}),t.callback&&t.callback(e,o)})},isValidSave:function(){var e=!0,t=["name","contentType","description","mimeType"];return ecEditor._.forIn(org.ekstep.collectioneditor.cache.nodesModified,function(o,i){o.isNew&&t.forEach(function(t){o.metadata.hasOwnProperty(t)||(e=!1)})}),e}});'))
org.ekstep.contenteditor.jQuery("body").append($("<script type='text/javascript' src='/plugins/org.ekstep.lessonbrowser-1.0/editor/content-provider-repo.js'>"))
org.ekstep.contenteditor.jQuery("head").append("<link rel='stylesheet' type='text/css' href='/plugins/org.ekstep.lessonbrowser-1.0/editor/lessonbrowser.css'>")
org.ekstep.pluginframework.pluginManager.registerPlugin({"id":"org.ekstep.lessonbrowser","ver":"1.0","shortId":"lessonbrowser","author":"G S Bajaj","title":"Lesson Browser","description":"This plugin is used to browse through lessons.","publishedDate":"","editor":{"main":"editor/plugin.js","dependencies":[{"type":"js","src":"editor/content-provider-repo.js"},{"type":"css","src":"editor/lessonbrowser.css"}]}},eval('org.ekstep.collectioneditor.basePlugin.extend({type:"lessonbrowser",initData:void 0,repos:[],initialize:function(){org.ekstep.contenteditor.api.addEventListener(this.manifest.id+":show",this.initPreview,this);var e=org.ekstep.contenteditor.api.resolvePluginResource("org.ekstep.lessonbrowser","1.0","editor/lessonBrowser.html"),t=org.ekstep.contenteditor.api.resolvePluginResource("org.ekstep.lessonbrowser","1.0","editor/lessonBrowserApp.js");org.ekstep.contenteditor.api.getService("popup").loadNgModules(e,t),this.registerRepo(this.getEkstepRepo())},registerRepo:function(e){var t=this;org.ekstep.contenteditor.api.getService("popup").loadNgModules(e.templateUrl,e.controllerUrl),t.repos.push(e)},initPreview:function(e,t){var o=this;cb=t.callback||function(){},filters=t.filters||{},org.ekstep.contenteditor.api.getService("popup").open({template:"partials/lessonbrowser.html",controller:"lessonController",controllerAs:"$ctrl",resolve:{instance:function(){return o},callback:function(){return cb},callerFilters:function(){return filters}},showClose:!1,closeByDocument:!1,closeByEscape:!1,width:851,className:"ngdialog-theme-plain lessonbrowser-dialog"})},getEkstepRepo:function(){return new(org.ekstep.collectioneditor.contentProviderRepo.extend({id:"ekstep",label:"EkStep",templateUrl:void 0,controllerUrl:void 0,init:function(){this.templateUrl=org.ekstep.contenteditor.api.resolvePluginResource("org.ekstep.lessonbrowser","1.0","editor/repoEkstep.html"),this.controllerUrl=org.ekstep.contenteditor.api.resolvePluginResource("org.ekstep.lessonbrowser","1.0","editor/repoEkstepApp.js")},getFilters:function(){return{language:[],grade:[],lessonType:[],domain:[]}}}))}});'))
org.ekstep.contenteditor.jQuery("head").append("<link rel='stylesheet' type='text/css' href='/plugins/org.ekstep.textbookmeta-1.0/editor/textbookmeta.css'>")
org.ekstep.contenteditor.jQuery("head").append("<link rel='stylesheet' type='text/css' href='/plugins/org.ekstep.textbookmeta-1.0/editor/libs/tokens.css'>")
org.ekstep.contenteditor.jQuery("body").append($("<script type='text/javascript' src='/plugins/org.ekstep.textbookmeta-1.0/editor/libs/tokens.js'>"))
org.ekstep.pluginframework.pluginManager.registerPlugin({"id":"org.ekstep.textbookmeta","ver":"1.0","author":"Kartheek Palla","title":"Textbook Meta plugin","description":"","publishedDate":"","editor":{"main":"editor/plugin.js","dependencies":[{"plugin":"org.ekstep.assetbrowser","ver":"1.0","type":"plugin"},{"plugin":"org.ekstep.conceptselector","ver":"1.0","type":"plugin"},{"type":"css","src":"editor/textbookmeta.css"},{"type":"css","src":"editor/libs/tokens.css"},{"type":"js","src":"editor/libs/tokens.js"}]}},eval('org.ekstep.collectioneditor.basePlugin.extend({initialize:function(){var e=ecEditor.resolvePluginResource(this.manifest.id,this.manifest.ver,"editor/textbookmeta.html"),t=ecEditor.resolvePluginResource(this.manifest.id,this.manifest.ver,"editor/textbookmetaApp.js");org.ekstep.collectioneditor.api.registerMetaPage({objectType:["TextBook"],templateURL:e,controllerURL:t})}});'))
org.ekstep.contenteditor.jQuery("head").append("<link rel='stylesheet' type='text/css' href='/plugins/org.ekstep.unitmeta-1.0/editor/unitmeta.css'>")
org.ekstep.contenteditor.jQuery("head").append("<link rel='stylesheet' type='text/css' href='/plugins/org.ekstep.unitmeta-1.0/editor/libs/tokens.css'>")
org.ekstep.contenteditor.jQuery("body").append($("<script type='text/javascript' src='/plugins/org.ekstep.unitmeta-1.0/editor/libs/tokens.js'>"))
org.ekstep.pluginframework.pluginManager.registerPlugin({"id":"org.ekstep.unitmeta","ver":"1.0","author":"Kartheek Palla","title":"Collectioneditor Unit Meta plugin","description":"","publishedDate":"","editor":{"main":"editor/plugin.js","dependencies":[{"plugin":"org.ekstep.assetbrowser","ver":"1.0","type":"plugin"},{"plugin":"org.ekstep.conceptselector","ver":"1.0","type":"plugin"},{"type":"css","src":"editor/unitmeta.css"},{"type":"css","src":"editor/libs/tokens.css"},{"type":"js","src":"editor/libs/tokens.js"}]}},eval('org.ekstep.collectioneditor.basePlugin.extend({initialize:function(){var e=ecEditor.resolvePluginResource(this.manifest.id,this.manifest.ver,"editor/unitmeta.html"),t=ecEditor.resolvePluginResource(this.manifest.id,this.manifest.ver,"editor/unitmetaApp.js");org.ekstep.collectioneditor.api.registerMetaPage({objectType:["TextBookUnit"],templateURL:e,controllerURL:t})}});'))
org.ekstep.contenteditor.jQuery("head").append("<link rel='stylesheet' type='text/css' href='/plugins/org.ekstep.contentmeta-1.0/editor/contentmeta.css'>")
org.ekstep.contenteditor.jQuery("head").append("<link rel='stylesheet' type='text/css' href='/plugins/org.ekstep.contentmeta-1.0/editor/libs/tokens.css'>")
org.ekstep.contenteditor.jQuery("body").append($("<script type='text/javascript' src='/plugins/org.ekstep.contentmeta-1.0/editor/libs/tokens.js'>"))
org.ekstep.pluginframework.pluginManager.registerPlugin({"id":"org.ekstep.contentmeta","ver":"1.0","author":"Kartheek Palla","title":"Contnet Meta plugin","description":"","publishedDate":"","editor":{"main":"editor/plugin.js","dependencies":[{"plugin":"org.ekstep.assetbrowser","ver":"1.0","type":"plugin"},{"plugin":"org.ekstep.conceptselector","ver":"1.0","type":"plugin"},{"type":"css","src":"editor/contentmeta.css"},{"type":"css","src":"editor/libs/tokens.css"},{"type":"js","src":"editor/libs/tokens.js"}]}},eval('org.ekstep.contenteditor.basePlugin.extend({initialize:function(){var e=ecEditor.resolvePluginResource(this.manifest.id,this.manifest.ver,"editor/contentmeta.html"),t=ecEditor.resolvePluginResource(this.manifest.id,this.manifest.ver,"editor/contentmetaApp.js");org.ekstep.collectioneditor.api.registerMetaPage({objectType:["Story","Game","Collection","Worksheet"],templateURL:e,controllerURL:t})}});'))
org.ekstep.contenteditor.jQuery("head").append("<link rel='stylesheet' type='text/css' href='/plugins/org.ekstep.coursemeta-1.0/editor/coursemeta.css'>")
org.ekstep.contenteditor.jQuery("head").append("<link rel='stylesheet' type='text/css' href='/plugins/org.ekstep.coursemeta-1.0/editor/libs/tokens.css'>")
org.ekstep.contenteditor.jQuery("body").append($("<script type='text/javascript' src='/plugins/org.ekstep.coursemeta-1.0/editor/libs/tokens.js'>"))
org.ekstep.pluginframework.pluginManager.registerPlugin({"id":"org.ekstep.coursemeta","ver":"1.0","author":"Kartheek Palla","title":"Course Meta plugin","description":"","publishedDate":"","editor":{"main":"editor/plugin.js","dependencies":[{"plugin":"org.ekstep.assetbrowser","ver":"1.0","type":"plugin"},{"plugin":"org.ekstep.conceptselector","ver":"1.0","type":"plugin"},{"type":"css","src":"editor/coursemeta.css"},{"type":"css","src":"editor/libs/tokens.css"},{"type":"js","src":"editor/libs/tokens.js"}]}},eval('org.ekstep.collectioneditor.basePlugin.extend({initialize:function(){var e=ecEditor.resolvePluginResource(this.manifest.id,this.manifest.ver,"editor/coursemeta.html"),t=ecEditor.resolvePluginResource(this.manifest.id,this.manifest.ver,"editor/coursemetaApp.js");org.ekstep.collectioneditor.api.registerMetaPage({objectType:["Course"],templateURL:e,controllerURL:t})}});'))
org.ekstep.contenteditor.jQuery("head").append("<link rel='stylesheet' type='text/css' href='/plugins/org.ekstep.courseunitmeta-1.0/editor/courseunitmeta.css'>")
org.ekstep.contenteditor.jQuery("head").append("<link rel='stylesheet' type='text/css' href='/plugins/org.ekstep.courseunitmeta-1.0/editor/libs/tokens.css'>")
org.ekstep.contenteditor.jQuery("body").append($("<script type='text/javascript' src='/plugins/org.ekstep.courseunitmeta-1.0/editor/libs/tokens.js'>"))
org.ekstep.pluginframework.pluginManager.registerPlugin({"id":"org.ekstep.courseunitmeta","ver":"1.0","author":"Kartheek Palla","title":"Course Unit Meta plugin","description":"","publishedDate":"","editor":{"main":"editor/plugin.js","dependencies":[{"plugin":"org.ekstep.assetbrowser","ver":"1.0","type":"plugin"},{"plugin":"org.ekstep.conceptselector","ver":"1.0","type":"plugin"},{"type":"css","src":"editor/courseunitmeta.css"},{"type":"css","src":"editor/libs/tokens.css"},{"type":"js","src":"editor/libs/tokens.js"}]}},eval('org.ekstep.collectioneditor.basePlugin.extend({initialize:function(){var e=ecEditor.resolvePluginResource(this.manifest.id,this.manifest.ver,"editor/courseunitmeta.html"),t=ecEditor.resolvePluginResource(this.manifest.id,this.manifest.ver,"editor/courseunitmetaApp.js");org.ekstep.collectioneditor.api.registerMetaPage({objectType:["CourseUnit"],templateURL:e,controllerURL:t})}});'))
org.ekstep.pluginframework.pluginManager.registerPlugin({"id":"org.ekstep.preview","ver":"1.0","author":"Sunil A S","title":"preview","description":"","publishedDate":"","editor":{"main":"editor/plugin.js","menu":[]}},eval('org.ekstep.contenteditor.basePlugin.extend({type:"preview",previewURL:(ecEditor.getConfig("previewURL")||"/content/preview/preview.html")+"?webview=true",contentBody:void 0,initialize:function(){ecEditor.addEventListener("atpreview:show",this.initPreview,this);var e=ecEditor.resolvePluginResource(this.manifest.id,this.manifest.ver,"editor/popup.html");ecEditor.getService("popup").loadNgModules(e)},initPreview:function(e,t){this.contentBody=t.contentBody,t.currentStage&&(this.contentBody.theme.startStage=ecEditor.getCurrentStage().id),ecEditor.getAngularScope().developerMode&&(this.contentBody.theme["plugin-manifest"]||(this.contentBody.theme["plugin-manifest"]={plugin:[]}),_.isArray(this.contentBody.theme["plugin-manifest"].plugin)||(this.contentBody.theme["plugin-manifest"].plugin=[this.contentBody.theme["plugin-manifest"].plugin]),this.contentBody.theme["plugin-manifest"].plugin.splice(0,0,{id:"org.ekstep.developer",ver:"1.0",type:"plugin",hostPath:org.ekstep.pluginframework.hostRepo.basePath,preload:!0})),this.showPreview()},showPreview:function(){console.log(this.previewURL);var e=this,t=(ecEditor.getService("content"),ecEditor.getService("content").getContentMeta(ecEditor.getContext("contentId"))),i=function(i){i.$on("ngDialog.opened",function(){var i=ecEditor.resolvePluginResource(e.manifest.id,e.manifest.ver,"editor/images/editor-frame.png");ecEditor.jQuery(".preview-bgimage").css("background","url("+i+")");var n=ecEditor.jQuery("#previewContentIframe")[0];n.src=e.previewURL;var o=ecEditor.getService("telemetry").context;n.onload=function(){var i={};o.etags=o.etags||{},i.context={mode:"edit",contentId:t.identifier,sid:o.sid,uid:o.uid,channel:o.channel,pdata:o.pdata,app:o.etags.app,dims:o.etags.dims,partner:o.etags.partner},i.config={showEndPage:"true",showStartPage:"true"},i.metadata=t.contentMeta,i.data=e.contentBody,n.contentWindow.initializePreview(i)}})};ecEditor.getService("popup").open({template:"partials_org.ekstep.preview.html",controller:["$scope",i],showClose:!1,width:900,className:"ngdialog-theme-plain preview-window"})}});'))
org.ekstep.pluginframework.pluginManager.registerPlugin({"id":"org.ekstep.telemetry","ver":"1.0","author":"Sunil A S","title":"Telemetry Plugin","description":"","publishedDate":"","editor":{"main":"editor/plugin.js"}},eval('"use strict";org.ekstep.contenteditor.basePlugin.extend({type:"org.ekstep.telemetry",service:void 0,initialize:function(){this.service=ecEditor.getService("telemetry"),ecEditor.addEventListener("content:load:complete",this.registerEvents,this)},registerEvents:function(){var e=this;ecEditor.addEventListener("object:selected",function(t,i){i&&i.id&&""!=i.id&&e.interactEvent("select","","plugin",i.type,i.ver,i.id)},this),ecEditor.addEventListener("object:modified",function(t,i){i&&i.id&&""!=i.id&&e.interactEvent("modify","","plugin",i.type,i.ver,i.id)},this),ecEditor.addEventListener("object:unselected",function(t,i){i&&i.id&&""!=i.id&&e.interactEvent("unselect","","plugin",i.type,i.ver,i.id)},this),ecEditor.addEventListener("object:removed",function(t,i){if(i&&i.id&&""!=i.id){var n=ecEditor.getPluginInstance(i.id);e.service.pluginLifeCycle({type:"remove",pluginid:n.manifest.id,pluginver:n.manifest.ver,objectid:n.id,assetid:n.getAttribute("asset"),stage:ecEditor.getCurrentStage().id,containerid:"",containerplugin:""})}},this),ecEditor.addEventListener("stage:removed",function(t,i){if(i&&i.stageId&&""!=i.stageId){var n=ecEditor.getPluginInstance(i.stageId);e.service.pluginLifeCycle({type:"remove",pluginid:n.manifest.id,pluginver:n.manifest.ver,objectid:n.id,assetid:n.getAttribute("asset"),stage:n.id,containerid:"",containerplugin:""})}},this),ecEditor.addEventListener("stage:delete",function(t,i){i&&i.stageId&&""!=i.stageId&&e.interactEvent("click","delete","plugin","org.ekstep.stage","1.0",i.stageId)},this),ecEditor.addEventListener("stage:duplicate",function(t,i){i&&i.stageId&&""!=i.stageId&&e.interactEvent("duplicate","","plugin","org.ekstep.stage","1.0",i.stageId)},this),ecEditor.addEventListener("stage:select",function(t,i){i&&i.stageId&&""!=i.stageId&&e.interactEvent("select","","plugin","org.ekstep.stage","1.0",i.stageId)},this),ecEditor.addEventListener("stage:reorder",function(t,i){i&&i.stageId&&""!=i.stageId&&e.interactEvent("modify","reorder","stage","org.ekstep.stage","1.0",i.stageId)},this),ecEditor.addEventListener("plugin:load",function(t,i){i&&e.service.pluginLifeCycle({type:"load",pluginid:i.plugin,pluginver:i.version,objectid:"",stage:"",containerid:"",containerplugin:""})},this),ecEditor.addEventListener("plugin:add",function(t,i){var n=ecEditor.getCurrentStage()?ecEditor.getCurrentStage().id:"";i&&e.service.pluginLifeCycle({type:"add",pluginid:i.plugin,pluginver:i.version,objectid:i.instanceId,stage:n,containerid:"",containerplugin:""})},this),ecEditor.addEventListener("plugin:error",function(t,i){var n=ecEditor.getCurrentStage()?ecEditor.getCurrentStage().id:"";i&&e.service.error({env:"content",stage:n,action:i.action,objectid:i.plugin,objecttype:"plugin",err:i.err,type:"PORTAL",data:"",severity:"error"})},this)},interactEvent:function(e,t,i,n,r,d){this.service.interact({type:e,subtype:t,target:i,pluginid:n,pluginver:r,objectid:d,stage:ecEditor.getCurrentStage().id})}});'))
org.ekstep.contenteditor.jQuery("body").append($("<script type='text/javascript' src='/plugins/org.ekstep.toaster-1.0/editor/libs/iziToast.min.js'>"))
org.ekstep.contenteditor.jQuery("head").append("<link rel='stylesheet' type='text/css' href='/plugins/org.ekstep.toaster-1.0/editor/libs/iziToast.min.css'>")
org.ekstep.pluginframework.pluginManager.registerPlugin({"id":"org.ekstep.toaster","ver":"1.0","author":"Sunil A S","title":"Toaster plugin","description":"","publishedDate":"","editor":{"main":"editor/plugin.js","dependencies":[{"type":"js","src":"editor/libs/iziToast.min.js"},{"type":"css","src":"editor/libs/iziToast.min.css"}]}},eval('org.ekstep.contenteditor.basePlugin.extend({initialize:function(t){var i={timeout:1e4,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",onOpening:function(){},onClosing:function(){}};t=t||i,iziToast.settings(t),ecEditor.addEventListener("org.ekstep.toaster:show",this.show,this),ecEditor.addEventListener("org.ekstep.toaster:warning",this.warning,this),ecEditor.addEventListener("org.ekstep.toaster:error",this.error,this),ecEditor.addEventListener("org.ekstep.toaster:info",this.info,this),ecEditor.addEventListener("org.ekstep.toaster:success",this.success,this)},show:function(t,i){if(!i)return!1;iziToast.show(i)},warning:function(t,i){if(!i)return!1;iziToast.warning(i)},info:function(t,i){if(!i)return!1;iziToast.info(i)},success:function(t,i){if(!i)return!1;iziToast.success(i)},error:function(t,i){if(!i)return!1;iziToast.error(i)}});'))
