import React, { useEffect, useState } from "react";
import StoriesList from "../components/StoriesList";
import Layout from "../components/Layout";
import { NavLink, useSearchParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

function Stories() {
  const { stories, totalPages, currentPage } = useSelector((state) => state.stories);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");

  const dispatch = useDispatch();

  useEffect(() => {
    const url = `https://content.guardianapis.com/search?api-key=${"test"}&q=${query}&show-fields=thumbnail,headline&show-tags=keyword&page=${currentPage}&page-size=10`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const result = data.response;
        console.log(result);
        if (result.status === "ok") {
          console.log(result);
          dispatch({ type: "stories/setPage", payload: { stories: result.results, totalPages: result.pages } });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query, currentPage]);

  return (
    <Layout>
      <div className="page__title">
        <h2 className="stories-title">
          Results for <span className="stories-search-text"> {query} </span>
        </h2>
      </div>
      <StoriesList stories={stories} />
      <div className="pagination">
        <button
          className="pagination__btn"
          onClick={() => dispatch({ type: "stories/setCurrentPage", payload: currentPage - 1 })}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="pagination__btn"
          onClick={() => dispatch({ type: "stories/setCurrentPage", payload: currentPage + 1 })}
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </div>
    </Layout>
  );
}

export default Stories;
