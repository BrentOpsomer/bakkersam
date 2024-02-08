// Function to generate and insert the navigation menu
function insertNavigationMenu() {
  const navigationMenu = `
    

    <link rel="stylesheet" href="css/taakbalk.css">
    <link rel="stylesheet" href="css/achtergrond.css">
    <link rel="stylesheet" href="css/zijmenu.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    

    <nav class="navigatie">
      <div class="bedrijfstitel"><img src="imagesoriginal/logogroot.png"></div>
      <a href="#" class="zijKnop">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a> 
     <div class="navigatieLinks"> 
        <ul>
          <li><a href="index.html">Openingstijden</a></li>
          <li><a href="assortiment.html">Assortiment</a></li>
          <li class="winkelmandLi"><a href="#contact" onclick="openZijMenu()">Contact</a></li>

        </ul>
      </div>
    </nav>
    <div id="side-menu" class="menu" ontouchstart="menuTouchStart(event)" ontouchmove="menuTouchMove(event)" ontouchend="menuTouchEnd(event)" bestellen>
      <a href="#" class="sluitKnop" onclick="sluitZijMenu()">&times;</a>
      <!-- prod 1 -->
      <div class="sidelogoPlace">
        <img class="sidelogo" src="imagesoriginal/bakkersamlogo.png">
      </div>
      <div class="contact">
          <h2 class="contactName"><i>Bakker Sam</i></h2>
          <!-- 𝑎𝑘𝑘𝑒𝑟 𝑆𝑎𝑚 -->
          <p class="bnb">Brood & banket</p>
          <p class="tell">TEL : <a class="nummerT" href="tel:055-31-28-98">055/31-28-98</a>
          <p class="contactMail">Email : <a class="mail" href = "mailto: sam.opsomer@telenet.be">sam.opsomer@telenet.be</a></p>
    
      </div>
      
      
      <div class="bestellen active">
              <h2 class="reviewG">Geef ons een review op</h2> 
              <a href="https://www.google.com/search?q=bakker+sam&rlz=1C1QPHC_nlBE969BE969&oq=bakker+sam&aqs=chrome.0.35i39i355j46i39i175i199j46i175i199i512j0i512j46i175i199i512j69i60l3.1800j0j4&sourceid=chrome&ie=UTF-8" target="_blank"><img class="google" src="imagesoriginal/google.png"></a>
      </div>
    </div>
    <script src="taakbalk.js"></script>
    <script src="js/zijmenu.js"> </script>
    `;

  // Get the element where you want to insert the navigation menu (e.g., the <header> element)
  const headerElement = document.getElementById('navigation-placeholder');

  // Insert the navigation menu HTML into the <header> element
  if (headerElement) {
    headerElement.innerHTML = navigationMenu;
  }
}

// Function to generate and insert the footer menu
function includeFooterMenu() {
  const footerMenu = `
  <div class="copyPos">
  <p class="copyright">Copyright © 2024 Bakker Sam. Alle rechten voorbehouden</p>
</div>
    `;

  const footerElement = document.getElementById('footer-placeholder');

  if (footerElement) {
    footerElement.innerHTML = footerMenu;
  }
}

function includeSideProducts() {
  const sideProductsMenu = `
          <div class="sideproductencontainer">
          <li class="sideproducten" onclick="openZijProducten()"><a class="opena">lll</a></li>
      </div>
      <div id="zijContact" class="zijContact" ontouchstart="zijContactTouchStart(event)" ontouchmove="zijContactTouchMove(event)">
          <a class="closebtn" onclick="sluitZijProducten()">&times;</a>
          <h1>Assortiment</h1>
          <ul class="zijprod">
              <li class="libox"> <a class="productzijtext" href="brood.html">Brood</a></li>
              <li><a class="productzijtext" href="speciaalbrood.html"></i>Speciaalbrood</a></li>
              <li><a class="productzijtext" href="koekebrood.html"></i>Koekebrood</a></li>
              <li><a class="productzijtext" href="koffiekoeken.html"></i>Koffiekoeken</a></li>
              <li><a class="productzijtext" href="donuts.html"></i>Donuts</a></li>
              <li><a class="productzijtext" href="kleinbrood.html"></i>Kleinbrood</a></li>
              <li><a class="productzijtext" href="gebak.html"></i>Gebak</a></li>
              <li><a class="productzijtext" href="taarten.html"></i>Taarten</a></li>
          </ul>
      </div>
    `;

  const sideProductsElement = document.getElementById('sideProducts-placeholder');

  if (sideProductsElement) {
    sideProductsElement.innerHTML = sideProductsMenu;
  }
}

// Call the functions to insert the navigation and footer menus when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  insertNavigationMenu();
  includeFooterMenu();
  includeSideProducts();
});