import { useEffect, useRef, useState } from "react";
import ProductModal from "./ProductModal";
const b12WaterImage="/nutrineer.jpg";
const riceImage="/rice.jpg";
const coffeeImage="/coffee.jpg";
const spicesImage="/spices.jpg";
const pulseImage="/pulses.jpg";
const hamiImage="/hami-clean.jpg";
const shippingImg="/shipping.jpg";
const products = [
  {
    id: "b12-water",
    name: "Bottled Water- Nutrineer",
    image: b12WaterImage,
    description: "Premium vitamin B12 water sourced from pristine Indian springs. Our B12 water combines purity with essential nutrition, providing a convenient way to supplement your daily vitamin B12 intake while staying hydrated. As well as flavoured water for hydration",
    varieties: [
      "Vitamin B12 Water Bottle 330 ml",
      "Vitamin B12 Water Bottle 500 ml",
      "Vitamin B12 Water Bottle 750 ml",
      "Lichi Flavoured Water ", 
      "Orange Flavoured Water "
    ],
    features: [
      "High-quality vitamin B12 supplementation",
      "Pure spring water source",
      "Zero artificial colors or preservatives",
      "Scientifically formulated for optimal absorption",
      "Eco-friendly packaging"
    ]
  },
  
  {
    id: "rice",
    name: "Premium Rice",
    image: riceImage,
    description: "Authentic Indian rice (Basmati Rice & Non-Basmati Rice) known for its distinctive aroma, long grains, and delicate flavor. Sourced directly from the fertile fields of India, our rice represents generations of farming expertise and traditional cultivation methods.",
    varieties: [
      "1121 - Available in Steam, Golden Sella, Creamy Sella & Raw forms",
      "1401 - Available in Steam, Golden Sella, Creamy Sella & Raw forms",
      "1509 - Available in Steam, Golden Sella, Creamy Sella & Raw forms",
      "PUSA - Available in Steam, Golden Sella, Creamy Sella & Raw forms",
      "PR-11/14/47",
      "Sugandha",
      "Sarbati",
      "IR 64 Parboiled Rice 5% Broken",
      "IR 64 White Rice 5%, 25% & 100% Broken",
      "Thai Parboiled Rice 5% broken",
      "Thai White Rice 5% & 25% Broken"
    ],
    features: [
      "Authentic Indian origin with certification",
      "Aged for enhanced aroma and texture",
      "Long grain varieties for premium dining",
      "Minimal processing to retain nutrients",
      "Available in multiple packaging sizes"
    ]
  },
  {
    id: "coffee",
    name: "Indian Coffee",
    image: coffeeImage,
    description: "Rich, aromatic coffee sourced from the renowned coffee plantations of South India. Our coffee beans are carefully selected, roasted to perfection, and ground using traditional methods to preserve the authentic Indian coffee experience.",
    varieties: [
      "Arabica : Cherry-  AAA, AA, A",
      "Arabica : Plantation - AAA,AA,A",
      "Arabica : Plantation- Mysore Nebari",
      "Robusta: Cherry-  AAA,AA,A",
       
    ],
    features: [
      "Single-origin Indian coffee beans",
      "Traditional roasting techniques",
      "Multiple grind options available",
      "Rich aroma and full-bodied flavor",
      "Ethically sourced from local farmers"
    ]
  },
  {
    id: "spices",
    name: "Authentic Indian Spices",
    image: spicesImage,
    description: "A comprehensive collection of authentic Indian spices that form the heart of Indian cuisine. Each spice is carefully selected, processed, and packaged to maintain its natural oils, aroma, and flavor profile.",
    varieties: [
      "Turmeric Powder",
      "Red Chili Powder and Whole",
      "Garam Masala Blend",
      "Whole Spices Collection",
      "Curry Powder Varieties",
      "Cardamom All Grades",
      "Cinnamon",
      "Cloves",
      "Black Pepper",
      "Corriander",
      "Dried Ginger and Ginger Powder",
      "Star Anise",
      "Biriyani Mix"

    ],
    features: [
      "100% pure and natural ingredients",
      "Traditional grinding and processing",
      "Sealed packaging for freshness",
      "No artificial colors or additives",
      "Authentic regional spice blends"
    ]
  },
  // ...existing products
 {
  id: "Cleaning Agents",
  name: "Hami Cleaning Agents",
  image: hamiImage, // Ensure this image is properly imported
  description: "Powerful and reliable cleaning agents designed for households and businesses. Hami ensures hygienic spaces with effective formulations that tackle dirt, grease, and germs effortlessly.",
  varieties: [
    
"Hand wash liquid 500gm new design 20pcs/box",
 "Hand wash liquid 500gm old design 20pcs/box",
  "Dish washing liquid 800g 12pcs/box",
   "Bleach Liquid 4000g 4pcs/box",
    "Glass Cleaner 500g 20 pcs/box",
     "Colour washing liquid auto3500g 4pcs/box",
      "Black washing liquid 3500g 4pcs/box"
  ],
  features: [
    "Kills 99.9% of germs and bacteria",
    "Tough on stains, gentle on surfaces",
    "Pleasant and long-lasting fragrance",
    "Safe for everyday use at home and in commercial spaces",
    "Eco-conscious ingredients with strong cleaning power"
  ]
}
,
  {
    id: "Pulses",
    name: "Pulses",
    image: pulseImage,
    description: "Naturally grown and carefully selected, our pulses are rich in protein and essential nutrients—perfect for healthy, everyday cooking",
    varieties: [
      "Pulses", 
      "Beans",
      "Peas"
    ],
   features: [
  "Sourced from premium-grade farms across India",
  "Naturally grown and chemical-free processing",
  "High in protein, fiber, and essential nutrients",
  "Strict quality control and hygienic packaging",
  "Available in bulk and retail-friendly packs",
  "Long shelf life and consistent taste"
]

  },
  
    {
    id: "Shipping",
    name: "Shipping",
    image: shippingImg,
    description: "Naturally grown and carefully selected, our pulses are rich in protein and essential nutrients—perfect for healthy, everyday cooking",
    varieties: [
      "Pulses", 
      "Beans",
      "Peas"
    ],
   features: [
  "Sourced from premium-grade farms across India",
  "Naturally grown and chemical-free processing",
  "High in protein, fiber, and essential nutrients",
  "Strict quality control and hygienic packaging",
  "Available in bulk and retail-friendly packs",
  "Long shelf life and consistent taste"
]

  }
];

const ProductsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <section id="products" ref={sectionRef} className="py-24 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-6xl font-bold text-gradient-spice mb-6">
              Our Premium Products & Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated selection of authentic Indian products, each representing the finest quality and traditional heritage & the services that we provide.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-gold to-accent rounded-full mx-auto mt-6"></div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`card-product p-6 rounded-2xl group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                onClick={() => handleProductClick(product)}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold bg-primary/90 px-4 py-2 rounded-full">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-heritage group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {product.description.substring(0, 80)}...
                  </p>
                  
                  {/* Quick Features */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {product.varieties.slice(0, 2).map((variety, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {variety}
                      </span>
                    ))}
                    {product.varieties.length > 2 && (
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                        +{product.varieties.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="bg-gradient-to-r from-heritage/5 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-heritage mb-4">
                Interested in Bulk Orders?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We offer competitive pricing for wholesale and bulk orders. Contact our team to discuss your requirements and get a customized quote.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default ProductsSection;