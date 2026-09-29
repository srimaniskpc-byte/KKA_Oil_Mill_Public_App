const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach((a) => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();


/* ================================
   KKA OIL MILL - DJANGO API
================================ */

const API_URL = "http://127.0.0.1:8000/api/website-data/";


async function loadWebsiteData() {

  try {

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("API connection failed");
    }

    const data = await response.json();

    console.log("KKA API DATA:", data);


    /* ================================
       COMPANY DETAILS
    ================================= */

    if (data.company) {

      const company = data.company;


      // Company name
      const companyName = document.getElementById("siteCompanyName");

      if (companyName && company.company_name) {
        companyName.textContent =
          company.company_name.toUpperCase();
      }


      // Footer company name
      const footerCompanyName =
        document.getElementById("footerCompanyName");

      if (footerCompanyName && company.company_name) {
        footerCompanyName.textContent =
          company.company_name.toUpperCase();
      }


      // Manufacturer
      const manufacturerName =
        document.getElementById("manufacturerName");

      if (manufacturerName && company.manufacturer_name) {
        manufacturerName.textContent =
          company.manufacturer_name;
      }


      const aboutManufacturer =
        document.getElementById("aboutManufacturer");

      if (aboutManufacturer && company.manufacturer_name) {
        aboutManufacturer.textContent =
          company.manufacturer_name;
      }


      // Footer manufacturer
      const footerManufacturer =
        document.getElementById("footerManufacturer");

      if (footerManufacturer && company.manufacturer_name) {
        footerManufacturer.textContent =
          company.manufacturer_name;
      }


      // Address
      const aboutAddress =
        document.getElementById("aboutAddress");

      if (aboutAddress && company.address) {
        aboutAddress.textContent =
          company.address;
      }


      // FSSAI
      const fssaiNumber =
        document.getElementById("fssaiNumber");

      if (fssaiNumber && company.fssai_number) {
        fssaiNumber.textContent =
          company.fssai_number;
      }


      const aboutFssai =
        document.getElementById("aboutFssai");

      if (aboutFssai && company.fssai_number) {
        aboutFssai.textContent =
          company.fssai_number;
      }


      // About text
      const aboutText =
        document.getElementById("aboutText");

      if (aboutText && company.about_text) {
        aboutText.textContent =
          company.about_text;
      }


      /* ================================
         PHONE 1
      ================================= */

      if (company.phone1) {

        const phone1Link =
          document.getElementById("phone1Link");

        const phone1Text =
          document.getElementById("phone1Text");

        if (phone1Link) {
          phone1Link.href =
            "tel:" + company.phone1.replace(/\s/g, "");
        }

        if (phone1Text) {
          phone1Text.textContent =
            "📞 " + company.phone1;
        }

        const heroCall =
          document.getElementById("heroCall");

        if (heroCall) {
          heroCall.href =
            "tel:" + company.phone1.replace(/\s/g, "");
        }
      }


      /* ================================
         PHONE 2
      ================================= */

      if (company.phone2) {

        const phone2Link =
          document.getElementById("phone2Link");

        const phone2Text =
          document.getElementById("phone2Text");

        if (phone2Link) {
          phone2Link.href =
            "tel:" + company.phone2.replace(/\s/g, "");
        }

        if (phone2Text) {
          phone2Text.textContent =
            "📞 " + company.phone2;
        }
      }


      /* ================================
         WHATSAPP
      ================================= */

      if (company.whatsapp_number) {

        const whatsapp =
          company.whatsapp_number.replace(/\D/g, "");

        const whatsappLink =
          document.getElementById("whatsappLink");

        const serviceWhatsapp =
          document.getElementById("serviceWhatsapp");

        const whatsappURL =
          "https://wa.me/" + whatsapp;

        if (whatsappLink) {
          whatsappLink.href = whatsappURL;
        }

        if (serviceWhatsapp) {
          serviceWhatsapp.href = whatsappURL;
        }
      }


      /* ================================
         FACEBOOK
      ================================= */

      const facebookLink =
        document.getElementById("facebookLink");

      if (
        facebookLink &&
        company.show_facebook &&
        company.facebook_url
      ) {

        facebookLink.href =
          company.facebook_url;

        facebookLink.style.display = "inline-flex";

      } else if (facebookLink) {

        facebookLink.style.display = "none";
      }


      /* ================================
         INSTAGRAM
      ================================= */

      const instagramLink =
        document.getElementById("instagramLink");

      if (
        instagramLink &&
        company.show_instagram &&
        company.instagram_url
      ) {

        instagramLink.href =
          company.instagram_url;

        instagramLink.style.display = "inline-flex";

      } else if (instagramLink) {

        instagramLink.style.display = "none";
      }

    }


    /* ================================
       PRODUCTS
    ================================= */

    const productsGrid =
      document.getElementById("productsGrid");

    if (productsGrid && data.products) {

      if (data.products.length === 0) {

        productsGrid.innerHTML = `
          <article class="card">
            <div class="card-body">
              <h3>Products coming soon</h3>
              <p>
                KKA Oil Mill products will be updated soon.
              </p>
            </div>
          </article>
        `;

      } else {

        productsGrid.innerHTML = "";

        data.products.forEach((product) => {

          const card =
            document.createElement("article");

          card.className = "card";


          let imageHTML = "";

          if (product.image) {

            imageHTML = `
              <img
                src="${product.image}"
                alt="${product.name || "KKA Oil"}"
              >
            `;

          }


          let priceHTML = "";

          if (product.show_price) {

            priceHTML = `
              <p>
                <strong>₹${product.price}</strong>
              </p>
            `;

          }


          let packHTML = "";

          if (product.pack_size) {

            packHTML = `
              <span class="tag">
                ${product.pack_size}
              </span>
            `;

          }


          card.innerHTML = `

            ${imageHTML}

            <div class="card-body">

              <span class="tag">
                ${product.name}
              </span>

              <h3>
                ${product.tamil_name || ""}
              </h3>

              ${packHTML}

              <p>
                ${product.description || ""}
              </p>

              ${priceHTML}

              <a
                class="btn outline"
                href="tel:+919486932441"
              >
                Enquire
              </a>

            </div>

          `;


          productsGrid.appendChild(card);

        });

      }

    }

  } catch (error) {

    console.error(
      "KKA website API error:",
      error
    );

  }

}


/* Load Django data */
loadWebsiteData();