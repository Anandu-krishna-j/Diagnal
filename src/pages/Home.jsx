import { lazy, useCallback, useMemo, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetPageQuery } from "../services/contentApi";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { setSearch, nextPage, stopLoading } from "../features/uiSlice";
import { BASE_IMG } from "../utils/constants";
import { useDebounce } from "../hooks/useDebounce";

const Header = lazy(() => import("../components/Header/Header"));
const Grid = lazy(() => import("../components/Grid/Grid"));

export default function Home() {
  const dispatch = useDispatch();
  const { search, page, hasMore } = useSelector((s) => s.ui);

  const loadMoreRef = useRef(null);

  const { data, isFetching, isError } = useGetPageQuery(page);

  const items = data?.items || [];
  const pageTitle = data?.title || "";

  useEffect(() => {
    if (isError && hasMore) {
      dispatch(stopLoading());
    }
  }, [isError, hasMore, dispatch]);

const loadMore = useCallback(() => {
  if (search !== "") return;

  if (isFetching || !hasMore) return;

  if (page >= 3) {
    dispatch(stopLoading());
    return;
  }

  dispatch(nextPage());
}, [search, isFetching, hasMore, page, dispatch]);

  useInfiniteScroll(loadMoreRef, loadMore);

  const debouncedSearch = useDebounce(search, 300);

  const filtered = useMemo(() => {
    const term = debouncedSearch.toLowerCase();

    return items.filter((i) =>
      i.name?.toLowerCase().includes(term)
    );
  }, [items, debouncedSearch]);
  

  return (
      <div className="bg-[#171717] text-white min-h-screen">
        
        <div
          style={{
            backgroundImage: `url(${BASE_IMG}nav_bar.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "sticky",
            top: 0,
            zIndex:90
          }}
        >
          <Header
            title={pageTitle}
            search={search}
            setSearch={(v) => dispatch(setSearch(v))}
          />
        </div>

        <div className="mt-[12px] pb-[10px] px-[12px] sm:px-[16px]">
          {(filtered.length === 0 && search !=="") ? (
            
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-[16px]">
              <svg
                className="w-[48px] h-[48px] text-gray-600 mb-[16px]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              <h3 className="text-[20px] font-semibold mb-[6px]">
                No results found
              </h3>

              <p className="text-gray-400 max-w-[400px] text-[14px] leading-[20px]">
                We couldn't find any matches for{" "}
                <span className="text-white font-medium">"{search}"</span>.
                Try a different keyword.
              </p>
            </div>

          ) : (
            <Grid items={filtered} />
          )}
        </div>

        {hasMore && (
          <div
            ref={loadMoreRef}
            className="h-[80px] flex items-center justify-center"
          >
            {isFetching && (
              <div className="text-[#BDBDBD] text-[14px] animate-pulse">
                Loading more...
              </div>
            )}
          </div>
        )}
      </div>
  );
}