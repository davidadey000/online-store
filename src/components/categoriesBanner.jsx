import CategoriesBannerCard from "./categoriesBannerCard";

const CategoriesBanner = ({ category }) => {
  const categories = [
    {
      title: "Supermarket",
      subcategories: [
        {
          title: "Food Cupboard",
          items: [
            "Grains & Rice",
            "Pasta & Noodles",
            "Breakfast Foods",
            "Herbs, Spices & Seasoning",
            "Flours & Meals",
            "Malt Drinks",
            "Coffee",
            "Water",
            "Cooking Oil",
            "Juices",
            "Soft Drinks",
            "Canned & Packaged Foods",
            "Candy & Chocolate",
            "Syrups, Sugars & Sweeteners",
          ],
        },
        {
          title: "Baby Products",
          items: ["Disposable Diapers", "Bottle Feeding", "Wipes & Refills"],
        },
        {
          title: "Household Cleaning",
          items: [
            "Laundry",
            "Air Fresheners",
            "Toilet Paper & Wipes",
            "Bathroom Cleaners",
            "Dishwashing",
            "Cleaning Tools",
          ],
        },
        {
          title: "Beer, Wine & Spirits",
          items: [
            "Beers",
            "Vodka",
            "Red Wine",
            "Champagne & Sparkling Wine",
            "White Wine",
            "Whiskey",
            "Liquors",
          ],
        },
      ],
    },

    {
      title: "Health & Beauty",
      subcategories: [
        {
          title: "Make Up",
          items: [
            "Concealers & Color Correctors",
            "Foundation",
            "Powder",
            "Lip Gloss",
            "Lip Liner",
            "Lipstick",
            "Eyeliner & Kajal",
            "Eyeshadow",
            "Mascara",
          ],
        },
        {
          title: "Fragrances",
          items: ["Women's", "Men's"],
        },
        {
          title: "Hair Care",
          items: [
            "Hair & Scalp Care",
            "Hair Accessories",
            "Hair Cutting Tools",
            "Shampoo & Conditioner",
            "Wigs & Accessories",
          ],
        },
        {
          title: "Personal Care",
          items: ["Feminine Care", "Contraceptives & Lubricants", "Body"],
        },
        {
          title: "Oral Care",
          items: [
            "Dental Care kits",
            "Dental Floss & Picks",
            "Teeth Whitening",
            "Toothbrushes",
            "Toothpaste",
            "Breath Freshners",
          ],
        },
        {
          title: "Health Care",
          items: [
            "Face Protection",
            "Thermometers",
            "Hand Sanitizers",
            "Lab, Safety & Work Gloves",
          ],
        },
      ],
    },
    {
      title: "Home & Office",
      subcategories: [
        {
          title: "Home & Kitchen",
          items: [
            "Bath",
            "Bedding",
            "Home Decor",
            "Home Furniture",
            "Vacuums & Floor Care",
            "Wall Art",
            "Cookware",
            "Bakeware",
            "Small Appliances",
            "Cutlery & Knife Accessories",
          ],
        },
        {
          title: "Home & Office Furniture",
          items: [
            "Kitchen & Dining",
            "Lighting",
            "Stationery",
            "Storage & Organization",
          ],
        },
        {
          title: "Office Products",
          items: [
            "Office & School Supplies",
            "Office Furniture & Lighting",
            "Packaging Materials",
          ],
        },
        {
          title: "Small Applicances",
          items: [
            "Ironing & Laundry",
            "Kettles",
            "Mixing & Blending",
            "Microwave Ovens",
            "Vacuum Cleaners",
            "Kitchen Bundles",
          ],
        },
        {
          title: "Large Appliances",
          items: [
            "Air Conditioners",
            "Cookers",
            "Washers & Dryers",
            "Fans",
            "Freezers",
            "Refrigerators",
            "Dishwashers",
          ],
        },
      ],
    },
    {
      title: "Phones & Tablets",
      subcategories: [
        {
          title: "Mobile Phones",
          items: ["Smartphones", "Basic Phones", "Refurbished Phones"],
        },
        {
          title: "Tablets",
          items: [
            "iPads",
            "Android Tablets",
            "Educational Tablets",
            "Tablet Accessories",
          ],
        },
        {
          title: "Mobile Accessories",
          items: [
            "Accessory Kits",
            "Adapters",
            "Batteries",
            "Battery Chargers",
            "Bluetooth Headsets",
            "Cables",
            "Car Accessories",
            "Chargers",
            "Earphones & Headsets",
            "MicroSD Cards",
            "Screen Protectors",
            "Selfie Sticks & Tripods",
            "Smart Watches",
          ],
        },
        {
          title: "Top Smartphone",
          items: [
            "iPhone 11 Pro Max",
            "Samsung Galaxy S10",
            "iPhone 11",
            "Nokia 7.2",
            "Huawei Y9 S",
            "iPhone XS Max",
            "Infinix S5",
          ],
        },
        {
          title: "Top Phone Brands",
          items: ["Samsung", "Apple", "Huawei", "Nokia", "Xiaomi", "Tecno"],
        },
      ],
    },
    {
      title: "Computing",
      subcategories: [
        {
          title: "Desktops",
          items: [],
        },
        {
          title: "Laptops",
          items: [],
        },
        {
          title: "Data Storage",
          items: [
            "External Hard Drives",
            "USB Flash Drives",
            "External Solid State",
          ],
        },
        {
          title: "Antivirus & Security",
          items: ["Antivirus", "Internet Security"],
        },
        {
          title: "Printers",
          items: ["Inkjet Printers", "Laser Printers", "Printer Ink & Toner"],
        },
        {
          title: "Computer Accessories",
          items: [
            "Keyboards & Mice",
            "Uninterrupted Power Supply",
            "Memory Cards",
            "Batteries",
            "Scanners",
            "Video Projectors",
          ],
        },
        {
          title: "Top Brands",
          items: [
            "HP",
            "Logitech",
            "Dell",
            "Lenovo",
            "Apple",
            "ASUS",
            "Huawei",
            "Microsoft",
            "Kingston",
            "Seagate",
            "Samsung",
            "Sandisk",
            "Toshiba",
          ],
        },
      ],
    },
    {
      title: "Electronics",
      subcategories: [
        {
          title: "Television & Video",
          items: [
            "Televisions",
            "Smart TVs",
            "LED & LCD TVs",
            "QLED & OLED TVs",
            "DVD Players & Recorders",
          ],
        },
        {
          title: "Home Audio",
          items: [
            "Home Theatre Systems",
            "Receivers & Amplifiers",
            "Sound Bars",
          ],
        },
        {
          title: "Cameras & Photos",
          items: [
            "Digital Cameras",
            "Projectors",
            "Video Surveillance",
            "Camcorders",
          ],
        },
        {
          title: "Generators & Portable Power",
          items: [
            "Generators",
            "Power Inverters",
            "Solar & Wind Power",
            "Stabilizers",
          ],
        },
        {
          title: "Top Electronics Brands",
          items: ["LG", "Samsung", "Sony", "TCL", "Hisense", "Nexus"],
        },
      ],
    },
  ];

  const selectedCategory = categories.find((c) => c.title === category);

  return (
    <div className="categories-banner">
      <div className="categories-banner__body scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        {selectedCategory?.subcategories?.map((subcategory, index) => (
          <CategoriesBannerCard
            key={index}
            title={subcategory.title}
          items={subcategory.items}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesBanner;
