const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('reactive');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('reactive');
    })
}




const dropdowns = document.querySelectorAll(".dropdown");


dropdowns . forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');
select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
    });
options. forEach(option => {
    option.addEventListener('click', () => {
    selected. innerText = option.innerText;
    select.classList.remove('select-clicked');
    caret.classList.remove('caret-rotate');
    menu. classList.remove('menu-open');
    options. forEach(option => {
    option.classList.remove('active'); 
    }); 
    option.classList.add('active');
    });
});
});

// Language changer

const translations = {

  0: {
    Home: "Home",
    Shop: "Shop",
    Contact: "Contact",
    Hero_h1: "Amazing Prices!",
    Hero_h2: "Top quality products!",
    Hero_h4: "Shop at Brico Maitre for the best products at the best prices",
    Hero_Button: "Shop Now",
    Featured: "Featured Products",
    Featured_p: "These are some of the best offers",
    Banner1_h4: "Recommended Product",
    Banner1_h2: "Highest Rated Hammer",
    Banner1_s: "9/10 reviewers say this hammer is better than yours!",
    Banner1_b: "Learn More",
    Banner2_h4: "Best Value Product",
    Banner2_h2: "Drill Kit",
    Banner2_s: "All the tools you need for small price!",
    Banner2_b: "Learn More",
    New: "Latest Arrivals",
    New_p: "The latest and greatest",
    pr1: "Tool Combo Kit",
    pr2: "Cordless Drill & Home Hand Repair Kit",
    pr3: "Impact Wrench",
    pr4: "Oscillating Multi-Tool",
    pr5: "Cordless Screwdriver",
    pr6: "Circular Saw Kit",
    pr7: "Tire Inflator",
    pr8: "Electric Ratchet Wrench",
    Adress: "Adress:",
    Phone: "Phone:",
    Hours: "Hours:",
    Follow: "Follow us",
    Add: "71 Hamadi Road, Ain Taya, Alger",
    phone_num: "07 95 62 10 36",
    hours1: "08:00 - 21:30, Sun - Thu",
    Selected: "English",
  },
  
  1: {
    Home: "Accueil",
    Shop: "Boutique",
    Contact: "Contact",
    Hero_h1: "Prix incroyables!",
    Hero_h2: "Produits de première qualité!",
    Hero_h4: "Faites vos achats chez Brico Maitre pour les meilleurs produits aux meilleurs prix",
    Hero_Button: "Acheter",
    Featured: "Produits en vedette",
    Featured_p: "Voici quelques-unes des meilleures offres",
    Banner1_h4: "Produit recommandé",
    Banner1_h2: "Marteau le mieux noté",
    Banner1_s: "9/10 des examinateurs disent que ce marteau est meilleur que le vôtre!",
    Banner1_b: "En savoir plus",
    Banner2_h4: "Produit au meilleur rapport qualité-prix",
    Banner2_h2: "Kit de perceuse",
    Banner2_s: "Tous les outils dont vous avez besoin pour un petit prix!",
    Banner2_b: "En savoir plus",
    New: "Derniers arrivages    ",
    New_p: "Le meilleur et superieur",
    pr1: "Kit d'outils combinés",
    pr2: "Perceuse sans fil & Kit de réparation à domicile",
    pr3: "Clé à chocs",
    pr4: "Outil multi-oscillant",
    pr5: "Tournevis sans fil",
    pr6: "Kit de scie circulaire",
    pr7: "Gonfleur de pneus",
    pr8: "Clé à rochet électrique",
    Adress: "Adresse:",
    Phone: "Téléphone:",
    Hours: "Heures:",
    Follow: "Suivez-nous",
    Add: "71, route Hamadi, Ain Taya, Alger",
    phone_num: "07 95 62 10 36",
    hours1: "08:00 - 21:30, dimanche - jeudi",
    Selected: "Francais",
  },

  2: {
    Home: "الصفحة الرئيسية",
    Shop: "متجر",
    Contact: "اتصل",
    Hero_h1: "أسعار مدهشة!",
    Hero_h2: "منتجات ذات جودة عالية!",
    Hero_h4: "تسوق في بريكومتر للحصول على أفضل المنتجات بأفضل الأسعار",
    Hero_Button: "تسوق الآن",
    Featured: "المنتجات المميزة",
    Featured_p: "هذه بعض من أفضل العروض",
    Banner1_h4: "المنتج الموصى به",
    Banner1_h2: "المطرقة الأعلى تقييمًا",
    Banner1_s: "9/10 من المراجعين يقولون أن هذه المطرقة أفضل من المطرقة الخاصة بك!",
    Banner1_b: "أعرف أكثر",
    Banner2_h4: "أفضل منتج من حيث القيمة",
    Banner2_h2: "مجموعة الحفر",
    Banner2_s: "جميع الأدوات التي تحتاجها بسعر صغير!",
    Banner2_b: "أعرف أكثر",
    New: "المخزون الجديد",
    New_p: "الأحدث والأفضل",
    pr1: "مجموعة أدوات متنوعة",
    pr2: "مثقاب لاسلكي ومجموعة إصلاح المنزل",
    pr3: "مفتاح الأثر",
    pr4: "أداة متعددة الاهتزاز",
    pr5: "مفك البراغي اللاسلكي",
    pr6: "مجموعة المنشار الدائري",
    pr7: "منفاخ الإطارات",
    pr8: "مفتاح الربط الكهربائي",
    Adress: "العنوان",
    Phone: "الهاتف",
    Hours: "ساعات",
    Follow: "تابعنا",
    Add: "71 شارع حمادي، عين طاية، الجزائر",
    phone_num: "07 95 62 10 36",
    hours1: "08:00 - 21:30، الأحد - الخميس",
    Selected: "العربية",
  },
}



dropdowns . forEach(dropdown => {
    const menu = dropdown.querySelector('.menu');

menu.addEventListener("click", (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    console.log(localStorage.getItem("lang"));
    
})
document.addEventListener("DOMContentLoaded", () => {
    const language = localStorage.getItem("lang") 
    setLang(language);

    if (localStorage.getItem("lang") == 2){
        document.dir = "rtl";
        
    }
   
    
  });
const setLang = (language) => {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach((element)=> {
const key = element.getAttribute("data-lang");
element.textContent = translations[language][key];
    });
    document.dir = language === 2 ? "rtl": 'ltr' ;
};

})




// dark mode



let toggleBtn = document.getElementById('icon');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   document.getElementById("icon").classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   document.getElementById("icon").classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}