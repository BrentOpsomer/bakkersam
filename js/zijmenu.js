// document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.bestellen').style.width = '0';
    document.querySelector('.zijContact').style.width = '0';

    function openZijMenu() {
      document.getElementById('side-menu').style.width = '375px';
      document.querySelector('.bestellen').style.width = '375px';
      document.querySelector('.bestellen').style.transition = "0.5s";

      document.querySelector('.body').style.marginRight = '375px';
      document.querySelector('.body').style.transition = "0.5s";
      document.querySelector('.bestellen').style.display = 'block';

    }

    function sluitZijMenu() {
      document.getElementById('side-menu').style.width = '0';
      document.querySelector('.bestellen').style.width = '0';
      document.querySelector('.bestellen').style.transition = "0.5s";

      document.querySelector('.body').style.marginRight = '0';
      document.querySelector('.body').style.transition = "0.5s";
    }

    function openZijProducten() {
      document.querySelector('.zijContact').style.width = '300px';
      document.querySelector('.body').style.marginLeft = '300px';
      document.querySelector('.body').style.transition = "0.5s";
      setTimeout(function () {
        document.querySelector('.sideproducten').style.display = 'none';
      }, 100);
    }

    function sluitZijProducten() {
      document.querySelector('.zijContact').style.width = '0';
      document.querySelector('.body').style.marginLeft = '0';
      document.querySelector('.body').style.transition = "0.5s";
      setTimeout(function () {
        document.querySelector('.sideproducten').style.display = 'flex';
      }, 200);
    }

    function myFunction(sluit) {
      if (sluit.matches) { // If media query matches
        document.getElementById('side-menu').style.width = '0';
        document.querySelector('.body').style.marginRight = '0';
        document.querySelector('.bestellen').style.width = '0';
        // document.querySelector('.zijContact').style.width = '0';
        // document.querySelector('.body').style.marginLeft = '0';
      }
      // else {
      //  document.body.style.backgroundColor = "pink";
      // }
    }

    var sluit = window.matchMedia("(max-width: 800px)")
    myFunction(sluit) // Call listener function at run time
    sluit.addEventListener(myFunction) // Attach listener function on state changes

    var zijContact = document.getElementById('zijContact');
    var menu = document.getElementById('side-menu');
    var body1 = document.getElementById('body');
    var start

    function menuTouchStart(beweeg) {
      start = beweeg.touches[0].clientX;
    }

    function menuTouchMove(beweeg) {
      var touch = beweeg.touches[0];
      var change = start - touch.clientX;
      if (change < 0) {
        // menu.style.left = '-' + change + "px";
        // body1.style.marginRight = '0';
        document.getElementById('side-menu').style.width = '0';
        document.querySelector('.body').style.marginRight = '0';
        document.querySelector('.bestellen').style.width = '0';

      }
    }



    function zijContactTouchStart(beweeg2) {
      start = beweeg2.touches[0].clientX;
    }

    function zijContactTouchMove(beweeg2) {
      var touch = beweeg2.touches[0];
      var change = start - touch.clientX;
      document.querySelector('.sideproducten').style.transition = '0.5s';
      if (change > 0) {
        document.querySelector('.zijContact').style.width = '0';
        document.querySelector('.bestellen').style.width = '0';
        document.querySelector('.body').style.marginLeft = '0';
        document.querySelector('.sideproducten').style.display = 'flex';

      }
    }

    function sluitAll() {
      document.getElementById('side-menu').style.width = '0';
      document.querySelector('.bestellen').style.transition = "0.5s";
      document.querySelector('.body').style.marginRight = '0';
      document.querySelector('.body').style.marginLeft = '0';

      document.querySelector('.body').style.transition = "0.5s";
      document.getElementById('side-menu').style.width = '0';
      document.querySelector('.bestellen').style.width = '0';
      document.querySelector('.zijContact').style.width = '0';
      document.querySelector('.sideproducten').style.display = 'flex';

    }
  // }
  // );