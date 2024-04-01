import Link from "next/link";

const Pagination = ({page, firstPage, lastPage, setPage}) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    // if (handlePrevPage > 1 == 0) return;
    scrollTop();
  };
  const handleNextPage = () => {
    setPage((nextState) => nextState + 1);
    scrollTop();
  };
  const handleLastPage = () => {
    setPage((nextState) => nextState && lastPage);
    scrollTop();
  };
  const handleBackto = () => {
    setPage((prevState) => prevState - page + 1);
  };
  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      {page <= 1 ? null : (
        <button className="text-color-accent" onClick={handleBackto}>
          ←
        </button>
      )}
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="transition-all hover:text-color-accent">
          Previous
        </button>
      )}
      <p>
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="transition-all hover:text-color-accent">
          Next
        </button>
      )}
      {page >= lastPage ? null : (
        <button className="text-color-accent" onClick={handleLastPage}>
          <p>→</p>
        </button>
      )}
    </div>
  );
};

export default Pagination;
