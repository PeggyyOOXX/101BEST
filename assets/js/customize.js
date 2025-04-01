document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.qrcode-groupBox', {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
            slidesPerView: 5,
            spaceBetween: 0,
        }
      }
  });

  document.querySelectorAll(".template-btn").forEach(button => {
    button.addEventListener("click", () => {
      const tabPane = button.closest(".tab-pane");
      const templateBlock = tabPane.querySelector(".template-block");
      const selectedDetail = document.querySelector(".selected-detail");

      if (window.innerWidth > 768) {   //電腦版
        templateBlock.classList.add("shift-left");
      }
      if (window.innerWidth <= 767) {   //手機版
        selectedDetail.style.right = "auto";  
      }
      selectedDetail.classList.add("show");
    });
  });
  document.querySelectorAll(".close-selected-detail, .siteinfo-download-btn, .siteinfo-cancel-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".template-block").forEach(block => {
        block.classList.remove("shift-left");
      });
      document.querySelector(".selected-detail").classList.remove("show");
    });
  });
  document.querySelectorAll('.nav-link[data-bs-toggle="pill"]').forEach(tab => {
    tab.addEventListener('show.bs.tab', () => {
      document.querySelectorAll(".template-block").forEach(block => {   //移除.template-block的shift-left
          block.classList.remove("shift-left");
      });
      document.querySelector(".selected-detail").classList.remove("show");  // 移除.selected-detail的show
    });
  });

});

