import React, { useState } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

function Home() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchText = text.trim();
    if (searchText) {
      navigate(`/stories?q=${searchText}`);
    }
    else {
       alert('Search text empty. Please write keyword then search.')
    }
  };

  return (
    <Layout>
      <div className="">
        <div className="page-center">
          <div className="page-title">
            <h1 className="page-heading"> News Lister </h1>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="search-input" className="form__label">
              Enter a search text
            </label>
            <input
              id="search-input"
              className="form__input"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="form__btn" type="submit">
              {" "}
              Search{" "}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
