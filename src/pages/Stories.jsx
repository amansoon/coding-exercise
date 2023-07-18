import React, { useEffect, useState } from "react";
import StoriesList from "../components/StoriesList";
import Layout from "../components/Layout";
import { NavLink, useSearchParams } from "react-router-dom";

function Stories() {
  const [stories, setStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");

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
          setStories([...stories, ...result.results]);
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
          Results for <span className="stories-search-text"> Business </span>
        </h2>
      </div>
      <StoriesList stories={stories} />
      <div className="pagination">
        <button className="pagination__btn" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button className="pagination__btn" onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </button>
      </div>
    </Layout>
  );
}

export default Stories;
