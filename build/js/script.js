$(".select-full-width").select2({minimumResultsForSearch:1/0,width:"100%"}),$(".form-control[required]").on("input",(function(){$(this).val().length>0?$(this).next(".form-control-required-label").hide():$(this).next(".form-control-required-label").show()})),$(".phone").each((function(){var e="+7 (999) 999-99-99",t=e.replace(/9/g,"_");$(this).mask(e).keydown((function(e){if(void 0!==e.key){var r=$(this).val().replace(/\D/g,""),o=t;if(e.key.match(/\d/)&&11==r.length&&"8"==r.charAt(1)){r=r.substr(2)+e.key;for(var s=0;s<10;s++)o=o.replace(/_/,r.charAt(s));return $(this).val(o),e.stopPropagation(),!1}}})).on("paste",(function(e){var r=e.originalEvent.clipboardData.getData("text");r=r.replace(/^\+?7|8/,"").replace(/\D/g,"");for(var o=t,s=0,a=Math.min(10,r.length),l=0;l<a;l++)s=Math.max(s,o.indexOf("_")),o=o.replace(/_/,r.charAt(l));return++s<t.length&&(o=o.substr(0,s)),$(this).val(o),!1})).on("focusout",(function(){var t=e.replace(/\D/g,"");$(this).val().replace(/\D/g,"").length<t.length&&$(this).val("")}))})),$(".form").each((function(){$(this).validate({errorPlacement:function(e,t){}})})),$(".form").each((function(){$(this).submit((function(e){e.preventDefault();let t=$(this).find('input, select, textarea, button[type="submit"]'),r=null,o=null;$(this).parents("div").is("#formModal")?(r=$(this).parents("#formModal").next('[data-form-modal="success"]'),o=$(this).parents("#formModal").next().next('[data-form-modal="error"]')):(r=$(this).find('[data-form-modal="success"]'),o=$(this).find('[data-form-modal="error"]')),$(this).valid()&&($(this).parents("#formModal").next('[data-form-modal="success"]'),$(this).parents("div").is("#formModal")&&$("#formModal").modal("hide"),$(this).ajaxSubmit({success:function(e){"success"==e.result?(t.prop("disabled",!0),r.modal()):o.modal()}}))}))})),$(".link-scroll-up").click((function(e){e.preventDefault();let t=$(this).attr("href"),r=$(t).offset().top-30;$("body,html").animate({scrollTop:r},800)})),$(".link-scroll").click((function(e){let t=$(this).attr("href"),r=$(t).offset().top-$(".header").height();$("body,html").animate({scrollTop:r},800)})),$(".main-slider").slick({dots:!0,arrows:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0}),$(".collapsed-btn").click((function(){if("true"==$(this).attr("aria-expanded")){let e=$(this).attr("data-target"),t=$(e).offset().top,r=$("#header").height();console.log(t),$("body,html").animate({scrollTop:t-r},800)}})),$(".crew-slider-main").slick({dots:!1,slidesToShow:1,slidesToScroll:1,asNavFor:".crew-slider-secondary, .crew-slider-text",prevArrow:".crew-slider-arrow-left",nextArrow:".crew-slider-arrow-right",responsive:[{breakpoint:576,settings:{dots:!0}}]}),$(".crew-slider-secondary").slick({dots:!1,arrows:!1,slidesToShow:4,slidesToScroll:1,asNavFor:".crew-slider-main, .crew-slider-text",centerMode:!0,focusOnSelect:!0}),$(".crew-slider-text").slick({dots:!1,arrows:!1,slidesToShow:1,slidesToScroll:1,asNavFor:".crew-slider-main, .crew-slider-secondary",swipe:!1,fade:!0,cssEase:"linear",adaptiveHeight:!0});