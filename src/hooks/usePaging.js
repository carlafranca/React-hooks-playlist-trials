import React from "react";

const usePaging = (prevToken, nextToken, goTo) => {
  const btn = "yt-paging__btn yt-btn smooth-effect";
  const btnDisabled = " yt-paging__btn-disabled";

  const PagingNav = () => (
    <nav aria-label="pagination top" className="yt-paging">
      <button
        onClick={e => goTo({ token: prevToken })}
        className={`${btn} ${!prevToken && btnDisabled}`}
      >
        Prev
      </button>
      <button
        onClick={e => goTo({ token: nextToken })}
        className={`${btn} ${!nextToken && btnDisabled}`}
      >
        Next
      </button>
    </nav>
  );

  return [PagingNav];
};

export default usePaging;
