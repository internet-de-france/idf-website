var TYPE_INTERVAL_MS = 5;
var TYPE_INTERVAL_AFTER_PARAGRAPH_MS = 400;
var BLINK_INTERVAL_MS = 300;
var preventFancyJS = true;
function activate () {
    initAllTypeAnims($('.fr .anim-text'));
    initAllTypeAnims($('.en .anim-text'));
    $('.bigtext').bigtext();
    showWebsite();
    //$('.loading').removeClass('loading');
}
function showWebsite () {
    $('.loading').addClass('ready');
}
// init all anims on all visible paragraphs
function initAllTypeAnims (jquerySelector) {
    // create a carret or trailin '_'
    var trainlingChar = document.createElement('span');
    trainlingChar.innerHTML = '_';
    $(trainlingChar).addClass('carret');
    $(trainlingChar).addClass('carret-visible');
    // make it blink
    setInterval(function() {
        $(trainlingChar).toggleClass('carret-visible');
    }, BLINK_INTERVAL_MS);
    var anims = [];
    // queue all silex paragraph
    jquerySelector
    .each(function() {
        // init the effect
        initTypeAnim(this);
    });
    if (anims.length > 0) {
        // start the lopp
        textAnimLoop(anims.shift());
    }
    // init method
    function initTypeAnim(element) {
        // get the text from the element
        var textArray = element.textContent.split('');
        element.innerHTML = '';
        anims.push({
           element: element,
           textArray: textArray
        });
    }
    // loop method
    function textAnimLoop(anim) {
        // remove the '_'
        if (trainlingChar.parentNode) {
            trainlingChar.parentNode.removeChild(trainlingChar);
        }
        // add the first element of the array
        anim.element.innerHTML += anim.textArray.shift();
        // add the '_' back
        anim.element.appendChild(trainlingChar);
        // next loop
        if (anim.textArray.length > 0) {
            setTimeout(function () {
                textAnimLoop(anim);
            }, TYPE_INTERVAL_MS);
        }
        else {
            if(anims.length > 0) {
                $(anim.element).addClass('trans');
                // restart a loop with an other paragraph
                setTimeout(function () {
                    textAnimLoop(anims.shift());
                }, TYPE_INTERVAL_AFTER_PARAGRAPH_MS);
            }
        }
    }
}
// smooth scroll from https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 100);
        return false;
      }
    }
  });
});
if('querySelectorAll' in document ) {
    preventFancyJS = false;
    WebFont.load({
        custom: {
            families: ['Roboto Condensed'], // font-family name
            urls : ['http://fonts.googleapis.com/css?family=Roboto+Condensed:300'] // URL to css
        },
        active: function() {
            activate();
        }
    });
}
// after page load
$(function() {
    if(preventFancyJS === true) {
        showWebsite();
    }
});

