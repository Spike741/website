
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

interface CategoryProps {
  title: string;
  categories: {
    name: string;
    image: string;
    link: string;
  }[];
}

const CategorySection = ({ title, categories }: CategoryProps) => {
  const { toast } = useToast();

  const handleCategoryClick = (e: React.MouseEvent, categoryName: string) => {
    e.preventDefault();
    toast({
      title: "Launching Soon!",
      description: `${categoryName} collection will be available soon. Stay tuned!`,
      duration: 3000,
    });
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl md:text-3xl font-medium">{title}</h2>
          <Link to="/products" className="text-maroon hover:text-maroon-light text-sm font-medium">
            VIEW ALL
          </Link>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
              onClick={(e) => handleCategoryClick(e, category.name)}
            >
              <div className="rounded-full overflow-hidden aspect-square mb-3 border border-gray-200">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-center text-gray-800 font-medium">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
