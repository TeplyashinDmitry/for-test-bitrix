

$(document).ready(function ($) {
    

    $("#phone").mask("+7 (999) 999-9999");
    $("#phone_top").mask("+7 (999) 999-9999");


    $(".btn-filter").on('click', function () {
	$(".menu-filter").toggle();
    });
    $("#close-filter").on('click', function () {
	$(".menu-filter").toggle();
    });

    $('.menu__icon , #search_img_span').on('click', function () {
	$('.menu').toggleClass('active');
	// $('.menu__icon').toggleClass('active');
	$('.search').toggleClass('active');
	$('.header_container').toggleClass('active');
    });

    $('#adout_course').click(function () {

	var menuid = "#course-go";
	$('html, body').animate({
	    scrollTop: $(menuid).offset().top + 1
	}, 1000);

    });
    $('#result_course').click(function () {

	var menuid = "#course_result-title";
	$('html, body').animate({
	    scrollTop: $(menuid).offset().top + 1
	}, 1000);

    });

    $('#price_list').click(function () {

	var menuid = "#price-list-go";
	$('html, body').animate({
	    scrollTop: $(menuid).offset().top + 1
	}, 1000);

    });

    $('#contact_go').click(function () {

	var menuid = "#go_to_contact";
	$('html, body').animate({
	    scrollTop: $(menuid).offset().top + 1
	}, 1000);

    });


    $('.reg , .fixed-layer-back-close').click(function () {
	$('.contacts-slide').toggle('active');
	$('.form-slide').toggle('active');
	$('.fixed-layer-back').toggleClass('showed');
    });

    //$('.menu__icon').click(function (){
    // $('.top_menu').toggleClass('active');
    //});



    $('.menu__icon').click(function () {
	$('.top_menu.cout').addClass('active');
	$('.top_menu.cout').css({"right": "-75%"});
	$('.top_menu.cout').animate({"right": "0"}, 300);

    });
    $('.sitemenu-close.main').click(function () {
	$('.top_menu.cout').animate({"right": "-75%"}, 300, function () {
	    $('.top_menu.cout').parent().removeClass('active');
	});
    });


    
    $('.sitemenu-close.plus').click(function () {
	//$('.footer_send').animate({"right" : "-75%"}, 300, function(){
	$('.footer_send').removeClass('active');
	//});
    });

    $("#form_index_top").submit(function () {
	var par = $(this);
	if (!validateForm(par)) {
	    return false;
	}
	var form_data = $(this).serialize();
	$.ajax({
	    type: "POST",
	    url: "send.php",
	    data: form_data,
	    success: function () {
		
		var text = $(".letter-me h3").text();
		console.log('text = ' + text);
		expr = 'Купить';
		var result = text.search(expr);
		console.log('resultSuccess = ' + result);
                if(result!==-1){
		    console.log('Buy');
		    yaCounter48789659.reachGoal('buy');
		   
		}
		else {
		    console.log('NOT Buy');
		    yaCounter48789659.reachGoal('send');
		   
		}
		
	    
		
		$(".feed-form").height($(".feed-form").height());
		$(".feed-form form").animate({"opacity": 0}, 300, function () {
		    $("#form_index-top").css("display", "none");
		    alert('Ваше сообщение отправлено. В ближайшее время с вами свяжутся наши специалисты');
		});
	    },
	    error: function () {
		alert('Произошла ошибка');
	    }
	});
	return false;
    });



    $("#form_index").submit(function () {
	var par = $(this);
	if (!validateForm(par)) {
	    return false;
	}
	var form_data = $(this).serialize();
	$.ajax({
	    type: "POST",
	    url: "send.php",
	    data: form_data,
	    success: function () {
		
		yaCounter48789659.reachGoal('send');
		ga('send', 'event', 'button', 'zakazat');
		
		$(".feed-form").height($(".feed-form").height());
		$(".feed-form form").animate({"opacity": 0}, 300, function () {
		    $("#form_index").css("display", "none");
		    
		    $(".letter-me-main").html('<h3 class="colororange paddingtop10">Ваше сообщение отправлено</h3><p class="caption">В ближайшее время с вами свяжутся наши специалисты</p>');
		});
	    },
	    error: function () {
		alert('Произошла ошибка');
	    }
	});
	return false;
    });
    $('#buy_reg').click(function () {
	$(".footer_send").addClass('active');
	$(".letter-me").html('<h3 class="colororange paddingtop10">Заказать звонок</h3>');
	$("#feed-default-top").val('Заказать звонок');
    });
    $('#go_free').click(function () {
	$(".footer_send").addClass('active');
	$(".letter-me").html('<h3 class="colororange paddingtop10">Заказать смету</h3>');
	$("#feed-default-top").val('Заказать смету');
    });


    $('#buy_extend').click(function () {
	$(".footer_send").addClass('active');
	var name = 'Бетонный дом';
	$(".letter-me").html('<h3 class="colororange paddingtop10">Заказать звонок: '+ name+ '</h3>');
	
        $("#feed-default-top").val("Заказать звонок: Бетонный дом");
	
	$("#form_index").submit(function () {
	    var par = $(this);
	    if (!validateForm(par)) {
		return false;
	    }
	    var form_data = $(this).serialize();
	    $.ajax({
		type: "POST",
		url: "send.php",
		data: form_data,
		success: function () {
		    $(".feed-form").height($(".feed-form").height());
		    $(".feed-form form").animate({"opacity": 0}, 300, function () {
			$("#form_index").css("display", "none");
			alert('<h3 class="colororange paddingtop10">Вы заказали "Звонок"</h3><p class="caption">В ближайшее время с вами свяжутся наши специалисты</p>');
		    });
		},
		error: function () {
		    alert('Произошла ошибка');
		}
	    });
	    return false;
	});
    });
    $('#buy_vip').click(function () {
	
	$(".footer_send").addClass('active');
	var name = 'Кирпичный дом';
	$(".letter-me").html('<h3 class="colororange paddingtop10">Заказать звонок: '+ name+ '</h3>');
        $("#feed-default-top").val('Заказать звонок: '+ name);
	$("#form_index").submit(function () {
	    var par = $(this);
	    if (!validateForm(par)) {
		return false;
	    }
	    var form_data = $(this).serialize();
	    $.ajax({
		type: "POST",
		url: "send.php",
		data: form_data,
		success: function () {
		    $(".feed-form").height($(".feed-form").height());
		    $(".feed-form form").animate({"opacity": 0}, 300, function () {
			$("#form_index").css("display", "none");
			alert('<h3 class="colororange paddingtop10">Вы заказали "Звонок"</h3><p class="caption">В ближайшее время с вами свяжутся наши специалисты</p>');
		    });
		},
		error: function () {
		    alert('Произошла ошибка');
		}
	    });
	    return false;
	});
    });

    $('#buy_standart').click(function () {
	$(".footer_send").addClass('active');
	var name = 'Смета';
	$(".letter-me").html('<h3 class="colororange paddingtop10">Заказать: '+ name+ '</h3>');
       $("#feed-default-top").val('Заказать: '+ name);
	$("#form_index").submit(function () {
	    var par = $(this);
	    if (!validateForm(par)) {
		return false;
	    }
	    var form_data = $(this).serialize();
	    $.ajax({
		type: "POST",
		url: "send.php",
		data: form_data,
		success: function () {
		    $(".feed-form").height($(".feed-form").height());
		    $(".feed-form form").animate({"opacity": 0}, 300, function () {
			$("#form_index").css("display", "none");
			
			$(".letter-me-main").text('В ближайшее время с вами свяжутся наши специалисты');
		    });
		},
		error: function () {
		    alert('Произошла ошибка');
		}
	    });
	    return false;
	});
    });

    $('#buy_less').click(function () {

	$(".footer_send").addClass('active');
	var name = 'Дополнения';
	$("#feed-default-top").val('Заказать: '+ name);
	console.log($("#feed-default").val());
	$(".letter-me").html('<h3 class="colororange paddingtop10">Заказать: '+ name+ '</h3>');

	$("#form_index").submit(function () {
	    var par = $(this);
	    if (!validateForm(par)) {
		return false;
	    }
	    var form_data = $(this).serialize();
	    $.ajax({
		type: "POST",
		url: "send.php",
		data: form_data,
		success: function () {
		    console.log('sadasdasdas');
		    $(".feed-form").height($(".feed-form").height());
		    $(".feed-form form").animate({"opacity": 0}, 300, function () {
			$("#form_index_top").css("display", "none");
			alert('<h3 class="colororange paddingtop10">Вы заказали "Дополнения"</h3><p class="caption">В ближайшее время с вами свяжутся наши специалисты</p>');
		    });
		},
		error: function () {
		    alert('Произошла ошибка');
		}
	    });
	    return false;
	});
    });
    $('#go_free').click(function () {
	$(".footer_send").addClass('active');
    });

});
(jQuery);

function validateForm(par) {
    var isValidate = true;
    par.find(".valid_string").each(function () {
	if (!$(this).val()) {
	    isValidate = false;
	    $(this).css({"border": "1px solid #f00"});
	} else {
	    $(this).css({"border": "1px solid #c9c9c9"});
	}
    });
    par.find(".valid_check").each(function () {
	if (!$(this).prop('checked')) {
	    isValidate = false;
	    $(this).parent().addClass("novalidate");
	} else {
	    $(this).parent().removeClass("novalidate");
	}
    });
    par.find(".valid_string.valid_email").each(function () {
	if ($(this).val().length > 0) {
	    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
	    if (pattern.test($(this).val())) {
		$(this).css({"border": "1px solid #c9c9c9"});
	    } else {
		$(this).css({"border": "1px solid #f00"});
		isValidate = false;
	    }
	} else {
	    $(this).css({"border": "1px solid #f00"});
	}
    });

    return isValidate;
}

(function (h) {
    var e;
    jQuery(document).ready(function (i) {
	d()
    });
    h(window).resize(function () {
	d()
    });
    h(window).bind("scroll", function () {
	if (h(".main-page").length) {
	    c();
	    b()
	}
    });
    function c() {
	var i = h(".menu-container").attr("class");
	var l = h(".menu-container").css("position");
	if (h(document).scrollTop() > h(".main-slide").height()) {
	    if ((i.indexOf("fixed") === -1) && (l !== "fixed")) {
		h(".menu-container").height(0);
		h(".menu-container").css({opacity: "0"});
		h(".menu-container").addClass("fixed");
		h(".menu-container").animate({height: "60px", opacity: "1"}, 300)
	    }
	} else {
	    h(".main-page .menu-container").removeClass("fixed")
	}
	var j = 0;
	var k = "";
	h(".main-page .menu-item-elem .menu-span").each(function () {
	    var m = h(this).attr("id");
	    var n = "#slide-" + m;
	    if (h(n).offset().top < h(document).scrollTop()) {
		k = "#" + m
	    }
	});
	h(".main-page .menu-item span").removeClass("active");
	h(k).addClass("active")
    }
    function b() {
	var o = h("#slide-menu-item-1").offset().top;
	var j = h(document).scrollTop();
	var n = h("#slide-menu-item-1").height();
	var k = h(".service-left-panel").height();
	if ((j > o) && (o + n > j + k)) {
	    h(".service-left-panel").addClass("fixed")
	} else {
	    h(".service-left-panel").removeClass("fixed")
	}
	if (o + n < j + k) {
	    h(".service-left-panel").css({bottom: "0"});
	    h(".service-left-panel").css({top: "auto"})
	}
	if (j < o) {
	    h(".service-left-panel").css({top: "0"});
	    h(".service-left-panel").css({bottom: "auto"})
	}
	var l = h("#slide-menu-item-3").offset().top;
	var i = h("#slide-menu-item-3").height();
	var m = h(".license-left-panel").height();
	if ((j > l) && (l + i > j + m)) {
	    h(".license-left-panel").addClass("fixed")
	} else {
	    h(".license-left-panel").removeClass("fixed")
	}
	if (l + i < j + m) {
	    h(".license-left-panel").css({bottom: "0"});
	    h(".license-left-panel").css({top: "auto"})
	}
	if (j < l) {
	    h(".license-left-panel").css({top: "0"});
	    h(".license-left-panel").css({bottom: "auto"})
	}
    }
    function d() {
	e = g();
	h(".showed-top").height(e + 1 - 100);
	h(".page404 .main-slide").height(e - 80);
	h(".service-left-panel").height(e + 1);
	h(".license-left-panel").height(e + 1);
	h(".psy-popup, .ther-popup, .nark-popup").height(e - 100);
	if (e < 600) {
	    h(".psy-popup, .ther-popup, .nark-popup").height(e)
	}
    }
    function g() {
	var k, i;
	if (window.innerHeight && window.scrollMaxY) {
	    k = document.body.scrollWidth;
	    i = window.innerHeight + window.scrollMaxY
	} else {
	    if (document.body.scrollHeight > document.body.offsetHeight) {
		k = document.body.scrollWidth;
		i = document.body.scrollHeight
	    } else {
		if (document.documentElement && document.documentElement.scrollHeight > document.documentElement.offsetHeight) {
		    k = document.documentElement.scrollWidth;
		    i = document.documentElement.scrollHeight
		} else {
		    k = document.body.offsetWidth;
		    i = document.body.offsetHeight
		}
	    }
	}
	var j, l;
	if (self.innerHeight) {
	    j = self.innerWidth;
	    l = self.innerHeight
	} else {
	    if (document.documentElement && document.documentElement.clientHeight) {
		j = document.documentElement.clientWidth;
		l = document.documentElement.clientHeight
	    } else {
		if (document.body) {
		    j = document.body.clientWidth;
		    l = document.body.clientHeight
		}
	    }
	}
	if (i < l) {
	    pageHeight = l
	} else {
	    pageHeight = i
	}
	if (k < j) {
	    pageWidth = j
	} else {
	    pageWidth = k
	}
	if ((j / l) < 1.25) {
	    l = Math.floor(j / 1.25)
	}
	return l
    }
    function a(i) {
	return i.replace(/^\s+|\s+$/g, "")
    }
    jQuery(document).ready(function (i) {
	i(".menu-item-elem span").click(function () {
	    var j = i(this).attr("id");
	    var k = "#slide-" + j;
	    i("html, body").animate({scrollTop: i(k).offset().top + 1}, 1000)
	})
    });
    jQuery(document).ready(function (i) {
	i(".main-menu-cont").click(function () {
	    var j = i(".main-menu-cont").attr("class");
	    if (j.indexOf("main-menu-cont-clicked") === -1) {
		i(".main-menu-cont-line.line1").transition({rotate: "135deg", top: "6px"});
		i(".main-menu-cont-line.line2").transition({opacity: "0"});
		i(".main-menu-cont-line.line3").transition({rotate: "45deg", top: "-6px"}, function () {
		    i(".main-menu-cont").addClass("main-menu-cont-clicked")
		});
		var k = 0;
		i(".menu-container").css({height: "auto"});
		i(".menu-container .menu-item").each(function () {
		    k += 50;
		    var l = i(this);
		    setTimeout(function () {
			l.show(100)
		    }, k)
		});
		i(".menu-container").css({"padding-bottom": "30px"})
	    }
	})
    });
    jQuery(document).ready(function (i) {
	i("body").on("click", ".main-menu-cont-clicked", function () {
	    i(".main-menu-cont-line.line1").transition({rotate: "0", top: "0"});
	    i(".main-menu-cont-line.line2").transition({opacity: "1"});
	    i(".main-menu-cont-line.line3").transition({rotate: "0", top: "0"});
	    i(".main-menu-cont").removeClass("main-menu-cont-clicked");
	    var k = 0;
	    var j = i(".menu-container .menu-item").get().reverse();
	    i(j).each(function () {
		k += 50;
		var l = i(this);
		setTimeout(function () {
		    l.hide(100);
		}, k)
	    });
	    i(".menu-container").css({"padding-bottom": "0"})
	})
    });
    
    
    jQuery(document).ready(function (i) {
	i("#form_index_top").submit(function () {
	    var str = $('.letter-me h3').text();
	
	    var j = i(this);
	    if (!f(j)) {
		return false
	    }
	    
	    var k = i(this).serialize();
	    i.ajax({type: "POST", url: "send.php", data: k, success: function () {
		    //i(".feed-form").html('<h3 class="colorwhite aligncenter">Ваше сообщение отправлено</h3><p class="colorwhite aligncenter">В ближайшее время с вами свяжутся наши специалисты</p>');
		    
		    

         
		}});
	    return false
	})
    });
    
    
    
    jQuery(document).ready(function (i) {
	i(".orderbutton").click(function () {
	    
	    
	    i(".fixed-layer-back").addClass("showed");
	    i(".form-slide").addClass("showed-top");
	    i(".fixed-layer-back").animate({opacity: 1}, 200, function () {
		i(".contacts-block").animate({opacity: 1}, 200);
	    });
	    var j = i(".valid_check").attr("class");
	    if (j.indexOf("novalidate") !== -1) {
		i(".showed-top .submitbutton").css({height: "45px"});
	    }
	    i("body").css({overflow: "hidden"});
	});
	i(".fixed-layer-back-close").click(function () {
	    i(".fixed-layer-back").removeClass("showed");
	    i(".form-slide").removeClass("showed-top");
	    i("#feed-default").val("Заявка на консультацию");
	    i("body").css({overflow: "visible"});
	})
    });
    jQuery(document).ready(function (i) {
	i(".orderbutton").click(function () {
	    var j = i(this).data("descr");
	    i("#feed-title").html(j);
	    i("#feed-default").val(j);
	})
    });
    jQuery(document).ready(function (i) {
	var j;
	i(".popup-button").click(function () {
	    j = i(this).data("descr");
	    j = ".popup." + j + "-popup";
	    i(j).addClass("block");
	    i(".fixed-layer-back").addClass("showed");
	    i(".popup-all").addClass("showed");
	    i("body").css({overflow: "hidden"});
	    i(".popup-close").css({display: "block"});
	});
	i(".popup-close.fixed-close, .fixed-layer-back").click(function () {
	    i(".popup-all").removeClass("showed");
	    i(".popup").each(function () {
		i(".popup").removeClass("block")
	    });
	    i(".popup-close").css({display: "none"});
	    i("body").css({overflow: "visible"});
	    i(".fixed-layer-back").removeClass("showed");
	    i(".form-slide.showed-top").each(function () {
		i(".fixed-layer-back").addClass("showed");
		i("body").css({overflow: "hidden"});
	    })
	})
    });
    h(document).ready(function (i) {
	i("#userphone").mask("+7 (999) 999-9999");
    });
    function f(j) {
	var i = true;
	j.find(".valid_string").each(function () {
	    if (!h(this).val()) {
		i = false;
		h(".red-border-me").css({border: "1px solid #f00"})
	    } else {
		h(".red-border-me").css({border: "1px solid #fff"})
	    }
	});
	j.find(".valid_check").each(function () {
	    if (!h(this).prop("checked")) {
		i = false;
		h(this).parent().addClass("novalidate")
	    } else {
		h(this).parent().removeClass("novalidate")
	    }
	});
	return i
    }
    
    

}
)(jQuery);




