!function(a){var b,c=Modernizr.touch?"tap":"click",d=!1,e=!1;a(document.body).on("mousedown touchstart","[tap]",function(){var c=a(this);b=setTimeout(function(){c.addClass("tapped")},100)}),a(document.body).on("mouseup touchend","[tap]",function(c){c.preventDefault();var f=a(this),g=f.is("a");if(clearTimeout(b),f.hasClass("tapped")||d||f.addClass("tapped"),b=setTimeout(function(){f.removeClass("tapped")},150),!d){if(g)return location.href=f.attr("href"),void 0;e&&e[0]===f[0]?(e.toggleClass("active"),e.css("z-index",1)):(e&&(e.removeClass("active"),e=!1),e=f,e.addClass("active"),e.css("z-index",1))}}),a(document.body).on("mousemove touchmove","[tap]",function(){var b=a(this);b.removeClass("tapped")}),a(document.body).on("touchmove",function(){d=!0}),a(window).on("scroll",function(){d=!1}),a(document.body).on(c,"[select] label",function(){var b=a(this),c=b.parents("[select]");c.find("label.selected").removeClass("selected"),b.addClass("selected")})}(Zepto);