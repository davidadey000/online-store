import CategoriesBannerCard from "./categoriesBannerCard";

const CategoriesBanner = ({ category }) => {
  const categories = [
    {
      title: "Supermarket",
      subcategories: [
        {
          title: "FOOD CUPBOARD",
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
          title: "BABY PRODUCTS",
          items: ["Disposable Diapers", "Bottle Feeding", "Wipes & Refills"],
        },
        {
          title: "HOUSEHOLD CLEANING",
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
          title: "BEER, WINE & SPIRITS",
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
          title: "MAKE UP",
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
          title: "FRAGRANCES",
          items: ["Women's", "Men's"],
        },
        {
          title: "HAIR CARE",
          items: [
            "Hair & Scalp Care",
            "Hair Accessories",
            "Hair Cutting Tools",
            "Shampoo & Conditioner",
            "Wigs & Accessories",
          ],
        },
        {
          title: "PERSONAL CARE",
          items: ["Feminine Care", "Contraceptives & Lubricants", "Body"],
        },
        {
          title: "ORAL CARE",
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
          title: "HEALTH CARE",
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
          title: "HOME & KITCHEN",
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
          title: "HOME & OFFICE FURNITURE",
          items: [
            "Kitchen & Dining",
            "Lighting",
            "Stationery",
            "Storage & Organization",
          ],
        },
        {
          title: "OFFICE PRODUCTS",
          items: [
            "Office & School Supplies",
            "Office Furniture & Lighting",
            "Packaging Materials",
          ],
        },
        {
          title: "SMALL APPLIANCES",
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
          title: "LARGE APPLIANCES",
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
          title: "MOBILE PHONES",
          items: ["Smartphones", "Basic Phones", "Refurbished Phones"],
        },
        {
          title: "TABLETS",
          items: [
            "iPads",
            "Android Tablets",
            "Educational Tablets",
            "Tablet Accessories",
          ],
        },
        {
          title: "MOBILE ACCESSORIES",
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
          title: "TOP SMARTPHONES",
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
          title: "TOP PHONE BRANDS",
          items: ["Samsung", "Apple", "Huawei", "Nokia", "Xiaomi", "Tecno"],
        },
      ],
    },
    {
      title: "Computing",
      subcategories: [
        {
          title: "DESKTOPS",
          items: [],
        },
        {
          title: "LAPTOPS",
          items: [],
        },
        {
          title: "DATA STORAGE",
          items: [
            "External Hard Drives",
            "USB Flash Drives",
            "External Solid State",
          ],
        },
        {
          title: "ANTIVIRUS & SECURITY",
          items: ["Antivirus", "Internet Security"],
        },
        {
          title: "PRINTERS",
          items: ["Inkjet Printers", "Laser Printers", "Printer Ink & Toner"],
        },
        {
          title: "COMPUTER ACCESSORIES",
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
          title: "TOP BRANDS",
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
          title: "TELEVISION & VIDEO",
          items: [
            "Televisions",
            "Smart TVs",
            "LED & LCD TVs",
            "QLED & OLED TVs",
            "DVD Players & Recorders",
          ],
        },
        {
          title: "HOME AUDIO",
          items: [
            "Home Theatre Systems",
            "Receivers & Amplifiers",
            "Sound Bars",
          ],
        },
        {
          title: "CAMERAS & PHOTOS",
          items: [
            "Digital Cameras",
            "Projectors",
            "Video Surveillance",
            "Camcorders",
          ],
        },
        {
          title: "GENERATORS & PORTABLE POWER",
          items: [
            "Generators",
            "Power Inverters",
            "Solar & Wind Power",
            "Stabilizers",
          ],
        },
        {
          title: "TOP ELECTRONICS BRANDS",
          items: ["LG", "Samsung", "Sony", "TCL", "Hisense", "Nexus"],
        },
      ],
    },
  ];

  const selectedCategory = categories.find((c) => c.title === category);

  return (
    <div className="categories-banner">
      <div className="categories-banner__body">
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
