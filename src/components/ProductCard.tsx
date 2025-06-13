
interface ProductCardProps {
  name: string;
  type: string;
  price: number;
  imageUrl: string;
  material: string;
  yardSize: string;
}

const ProductCard = ({ name, type, price, imageUrl, material, yardSize }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer overflow-hidden transform transition-all duration-300 rounded-lg shadow-sm hover:shadow-md">
      <div className="relative overflow-hidden mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-sm mb-1">Material: {material}</p>
          <p className="text-white text-sm">Yard Size: {yardSize}</p>
        </div>
      </div>
      <div className="space-y-1 p-3">
        <h3 className="text-gray-500 text-xs uppercase tracking-wider">{type}</h3>
        <h3 className="text-gray-900 font-medium">{name}</h3>
        <p className="text-maroon font-medium">₹{price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;
