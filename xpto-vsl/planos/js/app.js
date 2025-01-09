/*!
 * JOTA INVESTIMENTOS- v1.0.0 (https://www.jotainvestimentos.com.br)
 * Copyright 2023 jota investimetnos
 */

jQuery(document).ready(function ($) {
  // jQuery to collapse the navbar on scroll

  if ($("nav.navbar").length) {
    // var nav = $('nav.navbar');
    // var contentNav = $('nav.navbar').offset().top;
    function collapseNavbar() {
      if ($("nav.navbar").offset().top > 10) {
        $(".navbar.fixed-top").addClass("top-nav-collapse");
      } else {
        $(".navbar.fixed-top").removeClass("top-nav-collapse");
        $(".navbar-offcanvas .navbar-top").css("display", "flex");
        // $(".navbar-toggler").css("display", "none");
      }
    }
    $(window).scroll(collapseNavbar);
    $(document).ready(collapseNavbar);
  }

  /***********************************************************************/
  // ANCHOR NAVIGATION
  function anchor_nav() {
    $("a.anchor-btn").click(function (event) {
      var sectionTo = $(this).attr("href");
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop:
              $(sectionTo).offset().top +
              $(sectionTo).outerHeight(true) -
              $(sectionTo).outerHeight(true) +
              10,
          },
          1100,
          "easeInOutExpo"
        );
      event.preventDefault();
    });
  }
  anchor_nav();

  /***********************************************************************/
  // PARALLAX
  $window = $(window);
  window_width = $(window).width();
  if (window_width >= 768) {
    $(".bg-parallax").each(function () {
      var $scroll = $(this);
      //Captura o evento scroll do navegador e modifica o backgroundPosition de acordo com seu deslocamento.
      $(window).scroll(function () {
        var yPos = -($window.scrollTop() / $scroll.data("speed"));
        var coords = "50% " + yPos + "px";
        $scroll.css({ backgroundPosition: coords });
      });
    });
  }

  /***********************************************************************/
  // FLOATING LABEL
  $(".floating-form .form-group input.form-control").change(function () {
    if ($(this).val() != "") {
      $(this).addClass("filled");
    } else {
      $(this).removeClass("filled");
    }
  });

  /***********************************************************************/
  // BOX SHADOW SCROLL
  $(window).scroll(function () {
    var scroll_bar = $(window).scrollTop();
    if (scroll_bar >= 10) {
      $(".navbar").css("box-shadow", "rgba(12, 15, 20, 0.07) 0px 3px 30px");
    } else {
      $(".navbar").css("box-shadow", "rgba(12, 15, 20, 0) 0px 3px 30px");
    }
  });

  /***********************************************************************/
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $(".navbar.fixed-top").outerHeight();
  $(window).scroll(function (event) {
    didScroll = true;
  });
  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);
  function hasScrolled() {
    var st = $(this).scrollTop();
    var window_width = $(window).width();
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    // Responsive checks
    if (window_width < 1200) {
      if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $(".navbar-toggler").css("top", "-80px");
        $(".navbar.fixed-top").css("top", "-80px");
      } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
          $(".navbar-toggler").css("top", "0.6875rem");
          $(".navbar.fixed-top").css("top", "0");
        }
      }
    }
    lastScrollTop = st;
  }

  verifyFundClosed();

  /***********************************************************************/
  // CAROUSEL
  // $('.carousel').carousel({
  //     interval: 6000,
  // })
  // $('#dadosForm input').focus(function(){
  //     $(".carousel").carousel('pause');
  // }).blur(function() {
  //     $(".carousel").carousel('cycle');
  // });
  // $('.carousel-inner').each(function() {
  //     if ($(this).children('div').length === 1) $(this).siblings('.carousel-indicators, .carousel-control-prev, .carousel-control-next').attr('style','display:none!important;');
  // });

  // END $ FUNCTION
});

function verifyFundClosed() {
  var fundId = $("#hfIdFundo").val();
  var prevId = $("#hfIdPrevidencia").val();
  var url = "";
  
  if (fundId != null) {
    url = "fundos-info/v1/comercial/fundo-detalhe/" + fundId;
  }

  if(prevId != null){
    url = "retirement/v1/products/" + prevId;
  }

  if(url != ""){
    $.get("https://api.jotainvestimentos.com.br/" + url,
      function (data) {
        if(prevId != null && data.inOpenNewInvestment) {
          $("#lnkInvestNow").removeClass("d-none").addClass("d-flex");
          $("#lnkFundClosed").removeClass("d-flex").addClass("d-none");
        } else if(fundId != null && !data.fundoDados.configuracao.bloqueadoNovoInvestimento) {
        $("#lnkInvestNow").removeClass("d-none").addClass("d-flex");
        $("#lnkFundClosed").removeClass("d-flex").addClass("d-none");
        } else {
          $("#lnkFundClosed").removeClass("d-none").addClass("d-flex");
          $("#lnkInvestNow").removeClass("d-flex").addClass("d-none");
        }

        verifyfundClosed = true;
      },
      "json"
    );
  }
}

// SECURITI
// console.log(window.location.hostname);

if (window.location.hostname === "www.jotainvestimentos.com") {
  (function () {
    var s = document.createElement("script");
    s.src = "https://cdn-prod.securiti.ai/consent/cookie-consent-sdk.js";
    s.setAttribute("data-tenant-uuid", "f0e7f529-0f1f-4673-9bc7-e6090eb71f2e");
    s.setAttribute("data-domain-uuid", "a925f606-490e-4aa4-ad36-4932b86837c5");
    s.setAttribute("data-backend-url", "https://app.securiti.ai");
    s.defer = true;
    var parent_node = document.head || document.body;
    parent_node.appendChild(s);
    s.addEventListener("load", function () {
      window.initCmp();
    });
  })();
}
if (window.location.hostname === "lp1.jotainvestimentos.com") {
  (function () {
    var s = document.createElement("script");
    s.src = "https://cdn-prod.securiti.ai/consent/cookie-consent-sdk.js";
    s.setAttribute("data-tenant-uuid", "f0e7f529-0f1f-4673-9bc7-e6090eb71f2e");
    s.setAttribute("data-domain-uuid", "06ad771e-f67b-4540-898e-702cd5051603");
    s.setAttribute("data-backend-url", "https://app.securiti.ai");
    s.defer = true;
    var parent_node = document.head || document.body;
    parent_node.appendChild(s);
    s.addEventListener("load", function () {
      window.initCmp();
    });
  })();
}
if (window.location.hostname === "lp1.jotainvestimentos.com") {
  (function () {
    var s = document.createElement("script");
    s.src = "https://cdn-prod.securiti.ai/consent/cookie-consent-sdk.js";
    s.setAttribute("data-tenant-uuid", "f0e7f529-0f1f-4673-9bc7-e6090eb71f2e");
    s.setAttribute("data-domain-uuid", "68bd401f-d994-4e96-9a68-e8a3a532f0a4");
    s.setAttribute("data-backend-url", "https://app.securiti.ai");
    s.defer = true;
    var parent_node = document.head || document.body;
    parent_node.appendChild(s);
    s.addEventListener("load", function () {
      window.initCmp();
    });
  })();
}

(function () {
  params = new URLSearchParams(window.location.search);
  utm_params = [];
  params.forEach(function (value, key) {
    utm_params.push(key + "=" + value);
  });
  utm_search = utm_params.join("&");
  if (!!utm_search) {
    document.querySelectorAll("a[href]").forEach(function (ele, idx) {
      ele.href =
        ele.href + (ele.href.indexOf("?") === -1 ? "?" : "&") + utm_search;
    });
  }
})();