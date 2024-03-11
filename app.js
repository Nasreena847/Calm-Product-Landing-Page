document.addEventListener('DOMContentLoaded', function () {
    // Toggle the navbar menu on click
    document.querySelector('.navbar-burger').addEventListener('click', function () {
        document.getElementById('navbar-menu').classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
  // Get all elements with class "navbar-burger"
  const navbarBurgers = document.querySelectorAll('.navbar-burger');

  // Add click event listener to each navbar burger
  navbarBurgers.forEach(navbarBurger => {
      navbarBurger.addEventListener('click', function () {
          // Get the target menu element using data-target attribute
          const targetId = navbarBurger.dataset.target;
          const targetMenu = document.getElementById(targetId);

          // Toggle 'is-active' class on both the burger and the menu
          navbarBurger.classList.toggle('is-active');
          targetMenu.classList.toggle('is-active');  
          const toggleIcons = navbarBurger.querySelectorAll('.toggle-icon');
          toggleIcons.forEach(icon => icon.classList.toggle('x-icon'));
      });
      });
    })
  
   
    function handleScroll() {
        var navbar = document.querySelector('.navbar');
        var navbarItems = document.querySelectorAll('.navbar-item');
        var navbarButton = document.querySelector('.btn-scroll');
        let navbarButton2 = document.querySelector('.btn-scroll1');
        let navbarToggle = document.querySelectorAll('.toggle-icon');
        let brandLogo = document.querySelector('.brand-logo');
        
        if (window.scrollY > 0) {
            // Change font color of navbar items
            navbarItems.forEach(item => {
                item.style.color = 'black'; // Change to desired font color
            });
    
            // Change background color of navbar button
            navbarButton.classList.add('button-color-change')
            navbarButton2.classList.add('button-color-change')
            brandLogo.classList.add('toggle-brand-logo')
            navbarToggle.forEach(icon => {
                icon.classList.add('toggle-icon-color-change'); 
            });

          
    
            // Add a class to change navbar color to white
            navbar.classList.add('white-navbar');
        } else {
            // Reset font color of navbar items
            navbarItems.forEach(item => {
                item.style.color = 'white'; // Reset to original font color
            });
            navbarToggle.forEach(icon => {
                icon.classList.remove('toggle-icon-color-change')
            });
    
           
            brandLogo.classList.remove('toggle-brand-logo')
            
    
            // Reset background color of navbar button
            navbarButton.classList.remove('button-color-change') // Reset to original background color
            navbarButton2.classList.remove('button-color-change');
         
            // Reset to original background color
            // Remove the class if scrolled to the top
            navbar.classList.remove('white-navbar');

        }
    }
    // Add scroll event listener to window
    window.addEventListener('scroll', handleScroll);
console.log('befire active button')
function activeButton(){
    console.log('active button fnc is active')
        const sleepBtn = document.getElementById('sleepBtn');
        const stressAnxiety = document.getElementById('stressAnxiety');
        const focus = document.getElementById('focus');
        const relaxation = document.getElementById('relaxation');
        const buildingHabits = document.getElementById('buildingHabits');
        const physicalWellbeing = document.getElementById('physicalWellbeing');
        const sleepContent = document.getElementById('sleepContent');
        const stressAnxietyContent = document.getElementById('stressAnxietyContent');
        const focusContent = document.getElementById('focusContent');
        const relaxationContent = document.getElementById('relaxationContent');
        const buildingHabitsContent = document.getElementById('buildingHabitsContent');
        const physicalWellbeingContent = document.getElementById('physicalWellbeingContent');
      
        // Function to add 'visible' class and remove 'hidden' class
        const showContent = (element) => {
            element.classList.remove('hidden');
            element.classList.add('visible');
        };
    
        // Function to add 'hidden' class and remove 'visible' class
        const hideContent = (element) => {
            element.classList.remove('visible');
            element.classList.add('hidden');
        };

        showContent(sleepContent);
        hideContent(stressAnxietyContent);
        hideContent(focusContent);
        hideContent(relaxationContent);
        hideContent(buildingHabitsContent);
        hideContent(physicalWellbeingContent);
    
        sleepBtn.addEventListener('click', function() {
            showContent(sleepContent);
            hideContent(stressAnxietyContent);
            hideContent(focusContent);
            hideContent(relaxationContent);
            hideContent(buildingHabitsContent);
            hideContent(physicalWellbeingContent);
        });
      
        stressAnxiety.addEventListener('click', function() {
            hideContent(sleepContent);
            showContent(stressAnxietyContent);
            hideContent(focusContent);
            hideContent(relaxationContent);
            hideContent(buildingHabitsContent);
            hideContent(physicalWellbeingContent);
        });
    
        focus.addEventListener('click', function() {
            console.log('focus button clicked')
            hideContent(sleepContent);
            hideContent(stressAnxietyContent);
            showContent(focusContent);
            hideContent(relaxationContent);
            hideContent(buildingHabitsContent);
            hideContent(physicalWellbeingContent);
        });

        relaxation.addEventListener('click', function() {
            hideContent(sleepContent);
            hideContent(stressAnxietyContent);
            hideContent(focusContent);
            showContent(relaxationContent);
            hideContent(buildingHabitsContent);
            hideContent(physicalWellbeingContent);
        });

        buildingHabits.addEventListener('click', function() {
            hideContent(sleepContent);
            hideContent(stressAnxietyContent);
            hideContent(focusContent);
            hideContent(relaxationContent);
            showContent(buildingHabitsContent);
            hideContent(physicalWellbeingContent);
        });

        physicalWellbeing.addEventListener('click', function() {
            hideContent(sleepContent);
            hideContent(stressAnxietyContent);
            hideContent(focusContent);
            hideContent(relaxationContent);
            hideContent(buildingHabitsContent);
            showContent(physicalWellbeingContent);
        });
    }
activeButton()