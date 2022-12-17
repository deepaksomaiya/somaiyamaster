// ==================================
// SEARCH TEXT - HEADER LOCALSTORAGE JS
// SEARCH TEXT - FOOTER JS
// SEARCH TEXT - TOP NOTIFICATION JS
// SEARCH TEXT - HEADER JS
// SEARCH TEXT - VERTICAL TABS JS
// SEARCH TEXT - VERTICAL SCROLLING JS
// SEARCH TEXT - HORIZONTAL TABS JS
// SEARCH TEXT - BANNER TABS JS
// SEARCH TEXT - ACCORDION JS
// SEARCH TEXT - FORMS JS
// ==================================


$(window).on('load', function () {
    //************************** HEADER LOCALSTORAGE JS START ****************************
    var hashstring = localStorage.getItem("hashstring");
    var tabclassname = "." + hashstring;
    var tabidname = ".admission-mainsection .tab-content #" + hashstring;

    var hashtag = "#" + hashstring;
    if (hashtag == '#overview' || hashtag == '#setimpdates' || hashtag == '#nri' || hashtag == '#eligibility' || hashtag == '#set' || hashtag == '#cancellationpolicy' || hashtag == '#admissionprocess' || hashtag == '#admissionguidelines' || hashtag == '#seatdistribution' || hashtag == '#feesstructure' || hashtag == '#documentsrequired' || hashtag == '#importantinstruction' || hashtag == '#importantdates' || hashtag == '#academicbreak' || hashtag == '#scholarships') {

        $(".brandmenu  li").removeClass("highlight");
        $(".brandmenu .admission_menu").addClass("highlight");

        if (tabclassname == '.importantdates') {
            var tabclassname = ".importantdates";
            var tabidname = ".tab-content #importantdates";
        } else if (tabclassname == '.importantinstruction') {
            var tabclassname = ".importantinstruction";
            var tabidname = ".tab-content #importantinstruction";
        } else if (tabclassname == '.admissionguidelines') {
            var tabclassname = ".admissionguidelines";
            var tabidname = ".tab-content #admissionguidelines";
        } else if (tabclassname == '.setimpdates') {
            var tabclassname = ".set";
            var tabidname = ".tab-content #set";
        }

        $('.admission-mainsection .bggrey ul li').removeClass("sksactive");
        $('.admission-mainsection .tab-content .tab-pane').removeClass("active");
        $(tabclassname).parent().addClass('sksactive');
        $(tabidname).addClass('active');

        var position = $(hashtag).offset().top;
        console.log("position : " + position);

        $('html, body').animate({
            scrollTop: position
        }, 2000);
    }
    localStorage.removeItem("hashstring");
    //************************** HEADER LOCALSTORAGE JS ENDS ****************************
});


$(document).ready(function () {
    //************************** FOOTER JS START ****************************
    if ($(window).width() < 767) {
        $('.shfooter .title').click(function (e) {
            e.stopPropagation();
            if ($(this).next('ul.list-unstyled').hasClass('show')) {
                $(this).next('ul.list-unstyled').removeClass('show');
                $(this).removeClass('f-title');
            } else {
                $('.brandfooter ul.list-unstyled').removeClass('show');
                $('.shfooter .title').removeClass('f-title');
                $(this).next('ul.list-unstyled').addClass('show');
                $(this).addClass('f-title');
            }
        });
    }
    //************************** FOOTER JS ENDS ****************************


    //************************** TOP NOTIFICATION JS START ****************************
    "use strict";
    $('.notice-msg').click(function () {
        var id = $(this).closest(".fruit").children().attr("id")
        $('#' + id).remove();
    });

    //************************** TOP NOTIFICATION JS ENDS ****************************

    //************************** HEADER JS START ****************************
    // Header active menu for desktop
    $(function () {
        $('ul.brandmenu li a').filter(function () { return this.href == location.href }).parent().addClass('highlight').siblings().removeClass('highlight')
        $('ul.brandmenu li a').click(function () {
            $(this).parent().addClass('highlight').siblings().removeClass('highlight')
        })
        $('ul.brandmenu li.menu-leaf ul li.highlight a').parents().each(function () {
            if ($(this).is('li.menu-leaf')) {
                $(this).addClass("highlight");
            }
        });
    });

    //Programme & Admission tabs desktop
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        localStorage.setItem('activeTab', $(e.target).attr('href'));
    });
    var activeTab = localStorage.getItem('activeTab');
    if (activeTab) {
        $('#myTabs a[href="' + activeTab + '"]').tab('show');
        $(".tab_menu .nav-tabs .nav-item").removeClass("highlight");
    }

    // Desktop Menu Hover js
    $(".brandmenu .menu-leaf").on("mouseenter", function () {
        if ($(window).width() > 976) {
            $(this).children("ul").css("display", "block");
            $(this).siblings().children("ul").css("display", "none");
        }
    });
    $(".brandmenu .menu-leaf").on("mouseleave", function () {
        $(this).children("ul").css("display", "none");
        $(this).siblings().children("ul").css("display", "none");
    });

    // Add hover class to main menuitem
    $("header .dropdown-menu").hover(
        function () {
            $(this).parent().addClass("hover");
        },
        function () {
            $(this).parent().removeClass("hover");
        }
    );

    // Hamburger click   
    $(".brandmenu-btn").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('open')) {
            $(".brandmenu").removeClass('show-on-mobile');
            $("header").removeClass('header-noshadow');
            $("body").removeClass("overflow_hide");
            $("#cu-overlay").removeClass("overlay-visible");
            $(this).removeClass('open');
        } else {
            $(".brandmenu").addClass('show-on-mobile');
            $("header").addClass('header-noshadow');
            $("body").addClass("overflow_hide");
            $("#cu-overlay").addClass("overlay-visible");
            $(this).addClass('open');
        }
    });

    // overlay click
    $("#cu-overlay").click(function () {
        $("body").removeClass("overflow_hide");
        $(".brandmenu").removeClass("show-on-mobile");
        $(this).removeClass("overlay-visible");
        $(this).parents('body').find('.brandmenu-btn').removeClass('open');
    });

    // Menu accordion(plus & minus toggle)
    document.querySelector("#cu-overlay");

    if ($(window).width() <= 976) {
        $(".brandmenu .menu-leaf").click(function () {
            $(this).children("ul").toggleClass("childrenshow");
            $(this).find('a').toggleClass("menuminus");
            $(this).siblings().find('a').removeClass("menuminus");
            $(this).siblings().children("ul").removeClass("childrenshow");
            $(".tab_menu .nav-tabs .nav-item").removeClass("highlight");
        });
    } else {
        if (document.querySelector("#cu-overlay") !== null) {
            $("#cu-overlay").removeClass("overlay-visible");
        }
    }
    $(".more-links").click(function () {
        $(".more-links").toggleClass("open")
    });
    //Accordion for programme and admission menu in responsive
    if ($(window).width() <= 976) {
        $('.dropdown-menu .tab-content .tab-pane').removeClass('active show');

        $('.normal-sub').on('click', function (e) {
            e.stopPropagation();
        });

        $('.tab-content .mb-link-tabs').on('click', function (e) {
            e.stopPropagation();

            if ($(this).hasClass('active')) {
                $(this).next('.tab-pane').addClass('fade');
                $(this).next('.tab-pane').removeClass('active show');
                $(this).removeClass('active');
            }
            else {
                $('.tab-content .mb-link-tabs').removeClass('active');
                $(this).addClass('active');

                $('.dropdown-menu .tab-content .tab-pane').addClass('fade');
                $('.dropdown-menu .tab-content .tab-pane').removeClass('active show')
                $(this).next('.tab-pane').removeClass('fade');
                $(this).next('.tab-pane').addClass('active show');
            }
        });

        $('.brandmenu .adm-title').on('click', function (e) {
            e.stopPropagation();
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).next('.adm-menu').hide();
            }
            else {
                $('.brandmenu .adm-title').removeClass('active')
                $(this).addClass('active');
                $('.brandmenu .adm-menu').hide();
                $(this).next('.adm-menu').show();
            }
        });

        // on reload active programme and admission menu tabs

        $('ul.brandmenu li.menu-leaf ul li.highlight a').parents().each(function () {
            if ($(this).is('.tab-pane')) {
                $(this).addClass('active show');
                $(this).prev('.mb-link-tabs').addClass('active');
            }
            if ($(this).is('.adm-menu')) {
                $(this).show();
                $(this).prev('.adm-title').addClass('active');
            }
        });
    }
    //************************** HEADER JS ENDS *****************************

    //************************** VERTICAL TABS JS START *****************************
    //for scrolling the top of tab 
    $(".verticaltab-link").click(function () {
        var stickyEleTop = $(this).closest(".svvtabs-wrapper").offset().top;
        $('html, body').animate({ scrollTop: stickyEleTop }, 'slow');
        var innerHTML = $(this).text();
        $(this).closest(".verticaltabslink").find(".svvtablinkactivename").text(innerHTML);
    });

    //for mobile dropdown menu for tablinks
    if ($(window).width() < 769) {
        $(".svvtabs-toggle,.svvtabs-link").click(function () {
            $(this).closest(".svv-tabslink").toggleClass("active");
        });
    }
    //************************** VERTICAL TABS JS END ********************************

    //************************** VERTICAL SCROLL TABS JS START ***********************
    $(document).on("scroll", scrollChangetabActive);
    //smoothscroll
    $('.verticaltabscroll-link').on('click', function (e) {
        var innerHTML = $(this).text();
        $(this).closest(".verticaltabslink").find(".svvtablinkactivename").text(innerHTML);
        $(document).off("scroll");
        $('.verticaltabscroll-link').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        var target = this.hash,
            navigation = target;
        $target = $(target);
        if ($(window).width() > 1023) {
            var targetOffset = $target.offset().top;
        } else {
            var targetOffset = $target.offset().top - 58;
        }
        $('html, body').stop().animate({
            'scrollTop': targetOffset
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", scrollChangetabActive);
        });
    });

    function scrollChangetabActive(event) {
        event.preventDefault();
        var scrollPos = $(document).scrollTop();
        $('.hvst-link').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            var refeletop = refElement.position().top - 1;
            if (refeletop <= scrollPos && refeletop + refElement.height() > scrollPos) {
                $('.verticaltabscroll-link').removeClass("active");
                currLink.addClass("active");
                var innerHTML = currLink.text();
                currLink.closest(".verticaltabslink").find(".svvtablinkactivename").text(innerHTML);
            } else {
                currLink.removeClass("active");
            }
        });
    }

    if ($(window).width() < 769) {
        $(".varticaltabscroll-link").click(function () {
            $(this).closest(".verticaltabslink").toggleClass("active");
        });
    }
    //************************** VERTICAL SCROLL TABS JS START **********************


    //************************** HORIZONTAL TABS JS START ***************************
    if ($(window).width() < 769) {
        $(".horizontalaccordionhead").click(function () {
            $(this).closest(".tab-pane").siblings().find(".horizontalaccordionbody").slideUp();
            $(this).closest(".tab-pane").find(".horizontalaccordionbody").slideToggle();
        });

        $(".horizontaltab-link").click(function () {
            var innerHTML = $(this).text();
            $(this).closest(".horizontaltabslink").find(".svvtablinkactivename").text(innerHTML);
        });
    }
    //************************** HORIZONTAL TABS JS ENDS ****************************

    //************************** BANNER TABS JS STARTS *************************** */

    $('.bannertabchangeclick').click(function () {
        //tab change
        var tab_id = $(this).attr('data-bannertabs');
        $('#bannertabsid .svv-bannertabs-linklistitem').removeClass('active');
        $('#bannertabsid .svv-bannertabs-linklistitem').removeClass('rightline-remove');
        $(this).closest(".svv-bannertabs-linklistitem").addClass('active');
        $(this).closest(".svv-bannertabs-linklistitem").addClass('rightline-remove');
        $(this).closest(".svv-bannertabs-linklistitem").prev().addClass('rightline-remove');
        if ($(this).hasClass("dropdownbannertab")) {
            $(".dropdownbannertab").removeClass("active");
            $(this).addClass("active");
        }
        $('.svv-bannertabs-content').removeClass('active');
        $('#' + tab_id).addClass('active');

        //image banner change
        if (document.querySelector(".bannertabimg") !== null) {
            var tab = tab_id.replace('bannertab', '');
            var getSRc = $('.bannertabimg img').attr('src');
            var getFilepath = getSRc.split('.').slice(0, -1).join('.');
            var getExtensions = getSRc.substr((getSRc.lastIndexOf('.') + 1));
            var originalPath = getFilepath[getFilepath.length - 1];
            if ($.isNumeric(originalPath)) {
                var finalPath = getFilepath.substring(0, getFilepath.length - 1);
                $('.bannertabimg img').attr('src', finalPath + tab + '.' + getExtensions);
            } else {
                $('.bannertabimg img').attr('src', getFilepath + tab + '.' + getExtensions);
            }
        }
    });

    // TOGGLE BANNER TABS MENU
    $(".svv-bannertabs-links-toggle").click(function () {
        $(this).toggleClass("active");
        $(this).closest(".svv-bannertabs-links-wrap").find(".svv-bannertabs-linkslist").toggleClass("active");
    });

    if ($(window).width() < 1023) {
        $(".svv-bannertabs-links-wrap-lg .bannertabchangeclick").click(function () {
            $(this).closest(".svv-bannertabs-linkslist").removeClass("active");
            $(this).closest(".svv-bannertabs-links-toggle").removeClass("active");
        });
        var stickyEleTop = 0;
        if (document.querySelector(".svv-bannertabs-links-wrap-lg") !== null) {
            stickyEleTop = $(".svv-bannertabs-links-wrap-lg").offset().top;
        }

        $(".svv-bannertabs-linkslist .darkf18firamd").click(function () {
            $('html, body').animate({ scrollTop: stickyEleTop }, 'slow');
            var innerHTML = $(this).text();
            console.log(innerHTML);
            console.log($(this).closest(".svv-bannertabs-links-wrap").find(".svv-bannertabs-links-toggle").find(".darkf18firamd"));

            $(this).parents(".svv-bannertabs-links-wrap").find(".svv-bannertabs-links-toggle .darkf18firamd").text(innerHTML);
        });
    }

    if ($(window).width() < 768) {
        $(".svv-bannertabs-links-wrap-md .bannertabchangeclick").click(function () {
            $(this).closest(".svv-bannertabs-linkslist").removeClass("active");
            $(this).closest(".svv-bannertabs-links-toggle").removeClass("active");
        });

        var stickyEleTop = 0;
        if (document.querySelector(".svv-bannertabs-links-wrap-lg") !== null) {
            stickyEleTop = $(".svv-bannertabs-links-wrap-lg").offset().top;
        }

        $(".svv-bannertabs-linkslist .darkf18firamd").click(function () {
            $('html, body').animate({ scrollTop: stickyEleTop }, 'slow');
            var innerHTML = $(this).text();
            console.log(innerHTML);
            console.log($(this).closest(".svv-bannertabs-links-wrap").find(".svv-bannertabs-links-toggle").find(".darkf18firamd"));

            $(this).parents(".svv-bannertabs-links-wrap").find(".svv-bannertabs-links-toggle .darkf18firamd").text(innerHTML);
        });

    }

    //************************** BANNER TABS JS ENDS *************************** */

    //************************** ACCORDION JS STARTS *************************** */
    $(".svv-accordion-head").click(function () {
        var dataId = $(this).attr("data-accid");
        var hashdataId = "#" + dataId;
        if ($(this).parent().hasClass("svv-accordion-open")) {
            $(hashdataId).slideUp();
            $(this).parent().removeClass("svv-accordion-open");
        } else {
            $(hashdataId).slideToggle();
            $(hashdataId).parent().siblings().find(".svv-accordion-body").slideUp();
            $(hashdataId).parent().addClass("svv-accordion-open");
            $(hashdataId).parent().siblings().removeClass("svv-accordion-open");
        }
    });
    //************************** ACCORDION JS STARTS *************************** */


    //************************** FORMS JS STARTS *************************** */

    //select custom dropdown
    $(".select-angleupdown-toggler").click(function () {
        $(this).toggleClass('toggledropdown');
    });

    var srollDist = 0;

    $(window).on('scroll', function () {
        srollDist = $(window).scrollTop();
    });



    // File Input name adding
    $(".fileuplaodinput").on('change', function () {
        var numFiles = $(this)[0].files.length;
        if (numFiles > 1) {
            $(this).closest(".fileuploadbox").find(".fileuplaodname").text(numFiles + " files");

        } else if (numFiles == 1) {
            $(this).closest(".fileuploadbox").find(".fileuplaodname").text(this.files[0].name);
        }
    });

    //Input Passoword eye open close
    $(".passwordeye").click(function () {
        $(this).closest(".forminput").toggleClass("active");
        if ($(this).closest(".forminput").hasClass("active")) {
            $(this).closest(".forminput").find('input').attr('type', 'text');
        } else {
            $(this).closest(".forminput").find('input').attr('type', 'password');
        }
    });



    //************************** FORMS JS ENDS *************************** */


});

