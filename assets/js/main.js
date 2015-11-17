(function(){
"use strict";

  // SETTINGS
  // Navbar autohide default threshold
  var NAVBAR_THRESHOLD = 200;
  // Slide-on cards animation threshold
  var SLIDE_THRESHOLD = 200;


  // Get scrolled offset from body top
  function getScrolled() {
    try {
      return window.pageYOffset || body.scrollTop || html.scrollTop;
    } catch(exp) {
      return 0;
    }
  }

  // Get absolute x,y coords on click event
  function getClickCoords(e) {
    if (e.x !== undefined) {
      return { x: e.x, y: e.y };
    } else if (e.clientX !== undefined) {
      return { x: e.clientX, y: e.clientY }
    } else{
      return { x: 0, y: 0 };
    }
  }

  // INIT
  document.addEventListener('DOMContentLoaded', function(e) {

    // Enable navbar autohide
    var nav = document.querySelector('nav.fixed.autohide');
    if (nav) {
      var threshold = parseInt(nav.dataset.threshold || NAVBAR_THRESHOLD);
      document.addEventListener('scroll', function(e) {

        var scrolled = getScrolled();
        var offset = threshold - scrolled;

        // Show navbar
        if ((scrolled >= offset) && (!nav.classList.contains('show'))) {
          nav.classList.add('show');
          return;
        // Hide navbar
        } else if ((scrolled < offset) && (nav.classList.contains('show'))) {
          nav.classList.remove('show');
          return;
        }
      });
    }

    // Cards slide-on animation
    var cards = document.querySelectorAll('.main--content .card.slide');
    if (cards.length) {

      // Toggle event on every card
      cards = Array.prototype.slice.call(cards);
      cards.forEach(function(card) {
        // If card is already on window, then show it
        if (card.getBoundingClientRect().top - SLIDE_THRESHOLD < window.innerHeight) {
          card.classList.add('show');

        // Otherwise, slide to show it on scroll
        } else {
          var showCard = function(e) {
            // If card top limit is inside of window limits
            if (card.getBoundingClientRect().top - SLIDE_THRESHOLD < window.innerHeight) {
              card.classList.add('show');
              // Unregister event
              document.removeEventListener('scroll', showCard);
            };
          }
          // Register event
          document.addEventListener('scroll', showCard);
        }
      });
    }

    // Ripple effect
    var ripples = document.querySelectorAll('.ripple');
    if (ripples.length) {

      // Toggle event on every element with 'ripple' class
      ripples = Array.prototype.slice.call(ripples);
      ripples.forEach(function(ripple) {

        ripple.addEventListener('click', function(e) {
          console.debug('ripple effect');

          // Create wave element
          var wave = document.createElement('div');
          wave.classList.add('wave');

          // Setup wave size and position
          var click = getClickCoords(e);
          var bounds = ripple.getBoundingClientRect();
          var size = Math.max(bounds.height, bounds.width);
          var x = click.x - bounds.left - size/2;
          var y = click.y - bounds.top  - size/2;
          wave.setAttribute('style', ''
            + 'width:'+size+'px;'
            + 'height:'+size+'px;'
            + 'top:'+y+'px;'
            + 'left:'+x+'px;'
          );

          // Append to element, so it starts animation
          ripple.appendChild(wave);

          // Remove wave after 1s, wave animation is 0.65s long
          setTimeout(function() {
            wave.remove();
          }, 1000);

        });
      });
    }

    // Open popup on share links intents
    // Share buttons popups
    var intents = document.querySelectorAll('.intent');
    if (intents.length) {
      console.log('intents');
      intents = Array.prototype.slice.call(intents);
      intents.forEach(function(link) {
        var url    = link.href;
        var width  = link.dataset.width  || 500;
        var height = link.dataset.height || 500;

        link.addEventListener('click', function(e) {
          e.preventDefault();
          window.open(url, 'share-popup', 'width='+width+',height='+height);
          return false;
        });
      });
    }

  });

})();
