(function(){tinymce.PluginManager.requireLangPack("nosvisualhtml");tinymce.create("tinymce.plugins.NosVisualHtmlPlugin",{init:function(b,c){var a=this;a.editor=b;b.addCommand("nosVisualHtml",function(){if(b.dom.select("body.debug")==""){b.dom.addClass(b.dom.select("body"),"debug")}else{b.dom.removeClass(b.dom.select("body"),"debug")}});b.addButton("nosvisualhtml",{title:"nosvisualhtml.desc",cmd:"nosVisualHtml","class":"mce_visualchars"});b.onInit.add(function(d){d.dom.loadCSS(c+"/css/content.css")});b.onNodeChange.add(function(e,d,f){d.setActive("nosvisualhtml",!(e.dom.select("body.debug")==""))})}});tinymce.PluginManager.add("nosvisualhtml",tinymce.plugins.NosVisualHtmlPlugin)})();