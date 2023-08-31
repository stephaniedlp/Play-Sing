document.addEventListener("DOMContentLoaded", function () {
    const animationContainers = document.querySelectorAll(".animation-content-2");
    const animationElement = document.querySelector('[data-w-id="23a6aa9b-683c-0e53-1e12-d9afb67a24d2"]');
    const imageElement = animationElement.querySelector('img');
  
    animationContainers.forEach((container) => {
      let scrollPosition = 0;
  
      function updateAnimation() {
        scrollPosition -= 0.03 // Adjust the value to control the animation speed
        container.style.transform = `translate3d(${scrollPosition}%, 0px, 0px) scale3d(1, 1, 1) rotateX(9deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        requestAnimationFrame(updateAnimation);
      }
  
      updateAnimation();
    });

    let opacity = 0;
    let translateY = 20;
  
    function updateAnimation() {
      opacity += 0.01; // Adjust the value to control the opacity change rate
      translateY -= 1; // Adjust the value to control the translation change rate
  
      if (opacity >= 1) {
        opacity = 1;
      }
  
      if (translateY <= 0) {
        translateY = 0;
      }
  
      animationElement.style.opacity = opacity;
      animationElement.style.transform = `translate3d(0px, ${translateY}vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
      imageElement.style.transform = `scale(${1 + opacity * 0.2})`;
  
      if (opacity < 1 || translateY > 0) {
        requestAnimationFrame(updateAnimation);
      }
    }
  
    updateAnimation();

  });

  document.addEventListener("DOMContentLoaded", function() {
    const scrollWrapper = document.querySelector(".scroll-wrapper");
    const headings = scrollWrapper.querySelectorAll(".h1-heading");
    
    window.addEventListener("scroll", function() {
      const scrollAmount = window.scrollY;
  
      // Scroll the first heading to the right
      headings[0].style.transform = `translateX(${scrollAmount}px)`;
  
      // Scroll the second heading to the left
      headings[1].style.transform = `translateX(-${scrollAmount}px)`;
    });
  });

document.addEventListener("DOMContentLoaded", () => {
    const scrollToBottomButtom = document.getElementById('btn-ir-arriba');
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        scrollToBottomButtom.style.display = 'block';
      } else {
        scrollToBottomButtom.style.display = 'none';
      }
    })
  
    scrollToBottomButtom.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });