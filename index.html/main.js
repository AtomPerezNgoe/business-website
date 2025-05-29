
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu) {
    menu.classList.toggle("open");
  } else {
    console.error("Menu element with ID 'menu' not found.");
  }
}

// Search function with basic input validation
function search() {
  const input = document.getElementById("searchInput");
  if (!input) {
    alert("Search input not found!");
    return;
  }

  const query = input.value.trim();
  if (query !== "") {
    window.open("https://www.google.com/search?q=" + encodeURIComponent(query));
  } else {
    alert("Please type something to search.");
  }
}



const data = {
  building: {
    name: "Building & Construction",
    businesses: [
      {
        name: "Pat & Tenjoh Construction Ltd",
        description: "Pat & Tenjoh Construction Ltd is a premier company specializing in home and industrial construction. With years of experience, they are known for their expert craftsmanship, reliability, and dedication to delivering quality buildings on time.",
        services: "Building, Electricals, Maintenance, Renovation, Landscaping",
        contact: "650967265",
        location: "Yaoundé, Cameroon",
        website: "https://patbuild.com",
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Modern Design Ltd",
        description: "Modern Design Ltd offers innovative architectural solutions. Their team focuses on contemporary design, ensuring both aesthetics and functionality in all their projects.",
        services: "Design, Renovation, Consulting, 3D Modeling, Project Management",
        contact: "693174153",
        location: "Douala, Cameroon",
        website: "https://moderndesign.com",
        image: "https://via.placeholder.com/150"
      },
      {
        name: "BuildPro Cameroon",
        description: "BuildPro is known for delivering high-quality construction projects across Cameroon, including residential, commercial, and industrial buildings. They are recognized for their attention to detail and timely completion of projects.",
        services: "Civil Engineering, Architecture, Project Management, Renovations",
        contact: "690123456",
        location: "Buea, Cameroon",
        website: "https://buildprocameroon.com",
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Cameroon Construction Solutions",
        description: "A leading construction company in Cameroon, offering comprehensive solutions including design, construction, and project management for residential and commercial projects.",
        services: "Design, Construction, Project Management, Site Inspection, Road Works",
        contact: "695678912",
        location: "Douala, Cameroon",
        website: "https://camconstruction.com",
        image: "https://via.placeholder.com/150"
      }
    ]
  },
  food: {
    name: "Food & Restaurants",
    businesses: [
      {
        name: "Chez Roger's",
        description: "Chez Roger's is a renowned restaurant known for its fusion of local Cameroonian flavors with a modern twist. From traditional dishes to international cuisine, they offer a broad menu for all tastes.",
        services: "Fine Dining, Catering, Takeaway, Home Delivery, Event Hosting",
        contact: "670123456",
        location: "Douala, Cameroon",
        website: "https://chezrogers.com",
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Taste of Cameroon",
        description: "Taste of Cameroon serves authentic Cameroonian dishes..made with locally sourced ingredients.Their menu include a wide varieties of stews,grilled meats and traditional dishes.",
        services: "Takeout, Catering, Local Dishes, Special Orders",
        contact: "677654321",
        location: "Bamenda, Cameroon",
        website: "https://tasteofcameroon.com",
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Yummy Bites",
        description: "Yummy Bites is a fast food restaurant offering a wide range of international and local snacks. They specialize in burgers, fries, and delicious pastries.",
        services: "Takeout, Fast Food, Snacks, Catering",
        contact: "693157852",
        location: "Douala, Cameroon",
        website: "https://yummybites.com",
        image: "https://via.placeholder.com/150"
      }
    ]
  },
  auto: {
    name: "Auto Services",
    businesses: [
      {
        name: "AutoFix Garage",
        description: "AutoFix Garage is a trusted name in car repairs and maintenance. They offer everything from oil changes to complex engine repairs with expert technicians and modern equipment.",
        services: "Car Repair, Oil Change, Brake Services, Engine Diagnostics",
        contact: "677890123",
        location: "Yaoundé, Cameroon",
        website: "https://autofixgarage.com",
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Speedy Auto Care",
        description: "Speedy Auto Care specializes in quick and reliable auto services including tire changes, battery replacements, and routine maintenance. Their friendly staff ensures your vehicle is road-ready fast.",
        services: "Tire Services, Battery Replacement, Routine Maintenance, Vehicle Inspection",
        contact: "675432198",
        location: "Douala, Cameroon",
        website: "https://speedyautocare.com",
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Green Garage",
        description: "Green Garage is an eco-friendly auto service center focusing on sustainable repair techniques and use of environmentally safe materials. They handle both minor repairs and full servicing.",
        services: "Eco-friendly Repairs, Full Servicing, Emission Checks, Oil Recycling",
        contact: "676543210",
        location: "Buea, Cameroon",
        website: "https://greengarage.com",
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Elite Auto Mechanics",
        description: "Elite Auto Mechanics is known for precision diagnostics and expert mechanical repairs. They specialize in engine tuning, transmission repairs, and custom modifications for all vehicle types.",
        services: "Engine Tuning, Transmission Repairs, Custom Modifications, Mechanical Diagnostics",
        contact: "679876543",
        location: "Yaoundé, Cameroon",
        website: "https://eliteautomechanics.com",
        image: "https://via.placeholder.com/150"
      }
    ]
  },
  fashion: {
    name: "Fashion & Tailoring",
    businesses: [
      {
        name: "Elegance Tailors",
        description: "Elegance Tailors is renowned for custom-made suits, dresses, and traditional garments. They focus on quality fabrics and perfect fitting to bring your style to life.",
        services: "Custom Tailoring, Alterations, Bridal Wear, Formal Wear, Traditional Clothing",
        contact: "674512389",
        location: "123 Avenue Kennedy, Bastos, Yaoundé, Cameroon",
        website: "https://elegancetailors.cm",
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Trendsetters Fashion House",
        description: "Trendsetters Fashion House offers trendy clothing designs and ready-to-wear collections. They also provide fashion consulting and personal styling services.",
        services: "Ready-to-Wear, Fashion Consulting, Personal Styling, Clothing Alterations",
        contact: "678945123",
        location: "45 Boulevard de la Liberté, Bonanjo, Douala, Cameroon",
        website: "https://trendsettersfashion.com",
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Stitch Perfect",
        description: "Stitch Perfect specializes in both modern and traditional tailoring with an emphasis on detail and craftsmanship. Their expert tailors handle everything from everyday wear to special occasions.",
        services: "Tailoring, Alterations, Embroidery, Custom Designs, Fabric Sourcing",
        contact: "672398456",
        location: "12 Mile, Mile 12 Market, Buea, Cameroon",
        website: "https://stitchperfect.cm",
        image: "https://via.placeholder.com/150"
      },
      {
        name: "The Sartorial Studio",
        description: "The Sartorial Studio offers bespoke tailoring services and personalized fittings. They combine classic techniques with modern trends to create unique fashion statements.",
        services: "Bespoke Tailoring, Custom Shirts, Suits, Alterations, Styling Advice",
        contact: "675678901",
        location: "Rue des Martyrs, New Bell, Douala, Cameroon",
        website: "https://sartorialstudio.cm",
        image: "https://via.placeholder.com/150"
      }
    ]
  },
  saloon: {
    name: "Salons & Beauty",
    businesses: [
      {
        name: "Glow Up Beauty Lounge",
        description: "Glow Up Beauty Lounge is a luxury beauty salon offering premium skin care, hairstyling, and nail services. Known for their relaxing ambiance and professional staff.",
        services: "Facials, Manicures, Pedicures, Hair Styling, Body Scrubs, Makeup",
        contact: "676543219",
        location: "Rue Njo-Njo, Bonapriso, Douala, Cameroon",
        website: "https://glowupbeauty.cm",
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Divine Touch Hair & Spa",
        description: "Divine Touch offers a combination of salon and spa treatments including massage therapy, advanced hair care, and bridal makeup. They specialize in African and European styles.",
        services: "Hair Treatment, Braiding, Spa Services, Bridal Packages, Massages",
        contact: "677892134",
        location: "Avenue des Banques, Yaoundé, Cameroon",
        website: "https://divinetouchspa.com",
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Naomi's Glam Studio",
        description: "Naomi's Glam Studio provides creative makeup artistry and hairstyling for events, photoshoots, and weddings. They are known for personalized service and trendy looks.",
        services: "Makeup, Event Styling, Haircuts, Wig Installation, Lashes",
        contact: "690124578",
        location: "Mile 4 Limbe, Southwest Region, Cameroon",
        website: "https://naomisglam.cm",
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Royal Beauty Haven",
        description: "Royal Beauty Haven is a full-service beauty parlor offering everything from hair relaxers to acrylic nails and body waxing. Their staff is certified and experienced.",
        services: "Hair Relaxing, Acrylic Nails, Waxing, Skincare, Beard Grooming",
        contact: "693451267",
        location: "Commercial Avenue, Bamenda, Cameroon",
        website: "https://royalbeautyhaven.com",
        image: "https://via.placeholder.com/150"
      }
    ]
  },
    ict: {
      name: "ICT & Education",
      businesses: [
        {
          name: "TechHub Academy",
          description: "TechHub Academy offers comprehensive training in software development, data science, and cybersecurity. They provide hands-on workshops and certifications for beginners and professionals.",
          services: "Coding Bootcamps, Online Courses, Workshops, Certifications",
          contact: "670987654",
          location: "Yaoundé, Cameroon",
          website: "https://techhubacademy.cm",
          image: "https://via.placeholder.com/150"
        },
        {
          name: "Cameroon Computer College",
          description: "Cameroon Computer College is a leading institution specializing in IT education and professional development. They offer diplomas and degrees in computer science and information systems.",
          services: "Diploma Programs, IT Training, Career Counseling, Research",
          contact: "671234567",
          location: "Douala, Cameroon",
          website: "https://camerooncomputercollege.cm",
          image: "https://via.placeholder.com/150"
        },
        {
          name: "Digital Learning Center",
          description: "Digital Learning Center provides e-learning solutions and digital literacy training to schools and individuals. They focus on bridging the digital divide through technology education.",
          services: "E-learning Platforms, Digital Literacy, Workshops, Training",
          contact: "672345678",
          location: "Buea, Cameroon",
          website: "https://digitallearning.cm",
          image: "https://via.placeholder.com/150"
        },
        {
          name: "Innovate Tech Solutions",
          description: "Innovate Tech Solutions delivers customized ICT training and consulting services for businesses and educational institutions. They help organizations integrate technology effectively.",
          services: "ICT Training, Consulting, Software Development, Support",
          contact: "673456789",
          location: "Limbe, Cameroon",
          website: "https://innovatetech.cm",
          image: "https://via.placeholder.com/150"
        },
      ]
    },
      events: {
        name: "Events & Rentals",
        businesses: [
          {
            name: "Cameroon Event Planners",
            description: "Cameroon Event Planners specializes in organizing weddings, corporate events, and private parties with meticulous attention to detail and creativity.",
            services: "Event Planning, Coordination, Venue Selection, Catering",
            contact: "674567890",
            location: "Yaoundé, Cameroon",
            website: "https://camereventplanners.cm",
            image: "https://via.placeholder.com/150"
          },
          {
            name: "Rent-A-Party",
            description: "Rent-A-Party provides high-quality rental equipment including tents, chairs, tables, and sound systems for all types of events across Cameroon.",
            services: "Equipment Rental, Setup & Teardown, Sound Systems, Lighting",
            contact: "675678901",
            location: "Douala, Cameroon",
            website: "https://rentaparty.cm",
            image: "https://via.placeholder.com/150"
          },
          {
            name: "Elite Wedding Services",
            description: "Elite Wedding Services offers full-service wedding planning, decoration, photography, and bridal styling to make your special day unforgettable.",
            services: "Wedding Planning, Decoration, Photography, Bridal Styling",
            contact: "676789012",
            location: "Buea, Cameroon",
            website: "https://eliteweddings.cm",
            image: "https://via.placeholder.com/150"
          },
          {
            name: "PartyPro Rentals",
            description: "PartyPro Rentals delivers party and event equipment rentals with flexible packages and excellent customer service for private and corporate events.",
            services: "Party Rentals, Equipment Delivery, Setup Services, Lighting",
            contact: "677890123",
            location: "Limbe, Cameroon",
            website: "https://partyprorentals.cm",
            image: "https://via.placeholder.com/150"
          }
        ]
      },
        agriculture: {
          name: "Agriculture & Farming",
          businesses: [
            {
              name: "Green Fields Agro Ltd",
              description: "Green Fields Agro Ltd focuses on sustainable farming practices producing high-quality crops and livestock. They offer consultancy services to farmers.",
              services: "Crop Farming, Livestock, Consultancy, Organic Farming",
              contact: "674321098",
              location: "Yaoundé, Cameroon",
              website: "https://greenfieldsagro.cm",
              image: "https://via.placeholder.com/150"
            },
            {
              name: "Cameroon Agro Supply",
              description: "Cameroon Agro Supply provides farming inputs such as seeds, fertilizers, and equipment to support farmers across Cameroon.",
              services: "Seeds, Fertilizers, Farming Equipment, Agro Chemicals",
              contact: "675432109",
              location: "Douala, Cameroon",
              website: "https://cameroonagrosupply.cm",
              image: "https://via.placeholder.com/150"
            },
            {
              name: "Farmers United Cooperative",
              description: "Farmers United Cooperative helps local farmers with collective marketing, training, and access to finance to improve agricultural productivity.",
              services: "Marketing, Training, Microfinance, Equipment Sharing",
              contact: "676543210",
              location: "Buea, Cameroon",
              website: "https://farmersunited.cm",
              image: "https://via.placeholder.com/150"
            },
            {
              name: "AgriTech Innovations",
              description: "AgriTech Innovations offers modern agricultural technologies and mechanized services to boost farming efficiency and yield.",
              services: "Mechanized Farming, Irrigation Systems, Tech Solutions",
              contact: "677654321",
              location: "Limbe, Cameroon",
              website: "https://agritechinnovations.cm",
              image: "https://via.placeholder.com/150"
            }
          ]
        },
          health: {
            name: "Health & Wellness",
            businesses: [
              {
                name: "VitalCare Clinic",
                description: "VitalCare Clinic provides comprehensive health services including general check-ups, diagnostics, and emergency care with experienced medical staff.",
                services: "General Medicine, Diagnostics, Emergency Care, Pharmacy",
                contact: "674598765",
                location: "Yaoundé, Cameroon",
                website: "https://vitalcareclinic.cm",
                image: "https://via.placeholder.com/150"
              },
              {
                name: "Wellness Center Cameroon",
                description: "Wellness Center offers holistic health services such as physiotherapy, nutritional counseling, and mental health support.",
                services: "Physiotherapy, Nutrition, Mental Health, Wellness Programs",
                contact: "675612345",
                location: "Douala, Cameroon",
                website: "https://wellnesscenter.cm",
                image: "https://via.placeholder.com/150"
              },
              {
                name: "Healthy Living Pharmacy",
                description: "Healthy Living Pharmacy supplies a wide range of medicines, supplements, and wellness products with expert pharmaceutical advice.",
                services: "Medicines, Supplements, Health Products, Advice",
                contact: "676723456",
                location: "Buea, Cameroon",
                website: "https://healthylivingpharmacy.cm",
                image: "https://via.placeholder.com/150"
              },
              {
                name: "Tranquil Mind Spa",
                description: "Tranquil Mind Spa specializes in stress relief treatments including massages, aromatherapy, and relaxation therapies for overall well-being.",
                services: "Massages, Aromatherapy, Relaxation Therapy, Stress Relief",
                contact: "677834567",
                location: "Limbe, Cameroon",
                website: "https://tranquilmindspa.cm",
                image: "https://via.placeholder.com/150"
              }
            ]
          },
            electronics: {
              name: "Electronics & Phones",
              businesses: [
                {
                  name: "TechZone Electronics",
                  description: "TechZone Electronics offers the latest gadgets, smartphones, and home electronics with expert advice and repair services.",
                  services: "Gadget Sales, Phone Repairs, Electronics Accessories, Warranty Services",
                  contact: "674512300",
                  location: "Yaoundé, Cameroon",
                  website: "https://techzoneelectronics.cm",
                  image: "https://via.placeholder.com/150"
                },
                {
                  name: "MobileHub Cameroon",
                  description: "MobileHub specializes in mobile phone sales, accessories, and repair services for all major brands.",
                  services: "Mobile Sales, Repairs, Accessories, Software Updates",
                  contact: "675423100",
                  location: "Douala, Cameroon",
                  website: "https://mobilehub.cm",
                  image: "https://via.placeholder.com/150"
                },
                {
                  name: "ElectroFix Center",
                  description: "ElectroFix Center provides professional repairs for all types of electronics including phones, laptops, and household devices.",
                  services: "Electronic Repairs, Diagnostics, Spare Parts, Technical Support",
                  contact: "676534200",
                  location: "Buea, Cameroon",
                  website: "https://electrofix.cm",
                  image: "https://via.placeholder.com/150"
                },
                {
                  name: "PhoneWorld",
                  description: "PhoneWorld is a one-stop shop for buying new and used phones, accessories, and offers trade-in services.",
                  services: "Phone Sales, Trade-ins, Accessories, Customer Support",
                  contact: "677645300",
                  location: "Limbe, Cameroon",
                  website: "https://phoneworld.cm",
                  image: "https://via.placeholder.com/150"
                }
              ]
            }
            
          }
    

// Add click event listeners to all category cards
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    const category = card.dataset.category;
    showSubcategories(category);
  });
});

function showSubcategories(category) {
  const subcategoryList = document.getElementById("subcategory-list");
  const subcategoryTitle = document.getElementById("subcategory-title");

  // Clear previous list
  subcategoryList.innerHTML = "";

  // Set category title
  subcategoryTitle.textContent = data[category].name;

  const businesses = data[category].businesses;

  if (businesses && businesses.length > 0) {
    businesses.forEach(biz => {
      const div = document.createElement("div");
      div.textContent = biz.name;
      div.className = "subcategory-item";
      div.style.cursor = "pointer";
      div.style.border = "1px solid gray";
      div.style.padding = "10px";
      div.style.margin = "5px 0";

      div.addEventListener("click", () => showBusinessDetails(biz));
      subcategoryList.appendChild(div);
    });

    document.getElementById("subcategory").style.display = "block";
    document.getElementById("business-detail").style.display = "none";
  } else {
    subcategoryList.innerHTML = "No businesses found in this category.";
  }
}

function showBusinessDetails(biz) {
  document.getElementById("detail-name").textContent = biz.name;
  document.getElementById("detail-description").textContent = biz.description;
  document.getElementById("detail-services").textContent = biz.services;
  document.getElementById("detail-contact").textContent = biz.contact;
  document.getElementById("detail-location").textContent = biz.location;

  const websiteEl = document.getElementById("detail-website");
  websiteEl.href = biz.website;
  websiteEl.textContent = biz.website;
  websiteEl.target = "_blank";

  document.getElementById("business-detail").style.display = "block";
  document.getElementById("subcategory").style.display = "none";
}

function closeDetail() {
  document.getElementById("business-detail").style.display = "none";
  document.getElementById("subcategory").style.display = "block";
}


 