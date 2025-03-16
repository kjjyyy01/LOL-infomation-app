import { Champion } from "@/types/Champion";
import { fetchRotationData } from "@/utils/clientApi";
import { useQuery } from "@tanstack/react-query";

export function useFetchRotationFunction() {
  return useQuery<Champion[]>({
    queryKey: ["rotation"],
    queryFn: fetchRotationData,
  });
}
