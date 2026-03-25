import { BASE_IMG } from "../../utils/constants";

export default function Card({ item }) {
  return (
    <div className="group cursor-pointer transition-transform duration-300 hover:scale-[1.03]">
      
      <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-lg group-hover:shadow-2xl transition-all duration-300">
        
        <img
          src={`${BASE_IMG}${item["poster-image"]}`}
          alt={item.name}
          loading="lazy"
          className="w-full aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) =>
            (e.target.src =
              BASE_IMG + "placeholder_for_missing_posters.png")
          }
        />
      </div>

      <p className="mt-2 text-xs sm:text-sm text-gray-400 group-hover:text-white transition line-clamp-2">
        {item.name}
      </p>
    </div>
  );
}