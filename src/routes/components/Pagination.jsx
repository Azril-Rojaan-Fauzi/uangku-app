import { cn } from "../../utils/cn";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="bottom-0 border-t border-slate-300 transition-colors dark:border-slate-700">
      <div className="flex justify-between">
        <button
          disabled={currentPage === 1}
          className="cursor-pointer border-t border-transparent px-3 py-1 text-slate-600 transition-colors hover:border-slate-600 hover:text-slate-950 dark:text-slate-400 hover:dark:text-slate-50"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        <div className="flex">
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={cn(
                "cursor-pointer px-4 py-2",
                currentPage === page
                  ? "border-t border-blue-500 text-blue-500"
                  : "border-t border-transparent text-slate-600 transition-colors hover:border-slate-600 hover:text-slate-950 dark:text-slate-400 hover:dark:text-slate-50",
              )}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
          className="cursor-pointer border-t border-transparent px-3 py-1 text-slate-600 transition-colors hover:border-slate-600 hover:text-slate-950 dark:text-slate-400 hover:dark:text-slate-50"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
