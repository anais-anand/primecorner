import { X } from "lucide-react";
import { Button } from "./ui/button";

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  varieties: string[];
  features: string[];
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-heritage/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-card rounded-2xl shadow-elegant max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-heritage rounded-full shadow-warm"
          >
            <X className="w-5 h-5" />
          </Button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-heritage/80 to-transparent p-6">
            <h3 className="text-3xl font-bold text-white">{product.name}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Description */}
          <div>
            <h4 className="text-xl font-bold text-heritage mb-3">About Our {product.name}</h4>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          {/* Varieties */}
          <div>
            <h4 className="text-xl font-bold text-heritage mb-3">Available Varieties</h4>
            <div className="grid grid-cols-2 gap-3">
              {product.varieties.map((variety, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{variety}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xl font-bold text-heritage mb-3">Key Features</h4>
            <div className="space-y-2">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6 border-t border-border">
            <Button className="btn-spice w-full py-3 text-lg font-semibold rounded-xl">
              Contact Us for Orders
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;