document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const detailView = document.getElementById("detail-view");
  const detailTitle = document.getElementById("detail-title");
  const detailImage = document.getElementById("detail-image");
  const detailAddress = document.getElementById("detail-address");
  const detailCategory = document.getElementById("detail-category");
  const detailDescription = document.getElementById("detail-description");
  const detailDishTitle = document.getElementById("detail-dish-title");
  const mainMenu = document.querySelector(".main-menu");
  const cardsContainer = document.querySelector(".cards");

  const commonAddress = "235 GLENDALE AVE<br>MERIDIEN CITY<br>T: 490 49 4000<br>W: GANDG RES";
  const commonCategory = "CATEGORY: SWISS<br>OPEN: 10AM to 10PM<br>PRICE: $$$";
  const commonDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.";

  function showDetail(restaurant) {
      cardsContainer.classList.add('hidden');

      const cardsRect = cardsContainer.getBoundingClientRect();
      detailView.style.top = cardsRect.top + "px";
      detailView.style.left = cardsRect.left + "px";

      const restaurantData = {
          gabel: { title: "GABEL LOFFEL", image: "gabel.jpg" },
          gary: { title: "GARY GARI", image: "gary.jpg" },
          piatto: { title: "IL PIATTO", image: "piatto.jpg" },
          pierre: { title: "PIERRE PLATTERS", image: "pierre.jpg" },
      };

      detailTitle.textContent = restaurantData[restaurant].title;
      detailImage.src = restaurantData[restaurant].image;
      detailDishTitle.textContent = restaurantData[restaurant].title; 
      detailAddress.innerHTML = commonAddress;
      detailCategory.innerHTML = commonCategory;
      detailDescription.textContent = commonDescription;
      detailView.classList.add("active");
  }

  cards.forEach(card => {
      card.addEventListener("click", function () {
          const restaurant = this.dataset.restaurant;
          showDetail(restaurant);
      });
  });

  mainMenu.addEventListener("click", function () {
      detailView.classList.remove("active");
      cardsContainer.classList.remove('hidden');
  });
});