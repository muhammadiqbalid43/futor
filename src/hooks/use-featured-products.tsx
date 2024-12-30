import { useQuery } from "@tanstack/react-query";
import { fetchFeaturedProducts } from "@/api/services/featured-service";

export default function useFeaturedProducts() {
  return useQuery({
    queryKey: ["featuredProducts"],
    queryFn: fetchFeaturedProducts,
    staleTime: 1000 * 60 * 60,
  });
}
