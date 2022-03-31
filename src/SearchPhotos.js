import React, { useState } from "react";
import unsplash from "unsplash-js";
import {toJson} from "unsplash-js"


const newunsplash = new unsplash({
    accessKey: "z_k5tVbB75AhJ3zWGdtEfEsFcKcRDhCNGVP-LYokVkw",
})
 function SearchPhotos() {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);
    const searchPhotos = async (e) => {
        e.preventDefault();
        newunsplash.search
        .photos(query, 1, 20)
        .then(toJson)
        .then((json) => {
            setPics(json.results);
        })
    };

  return (
      <>
    <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">📷</label>
        <input 
        type="text" 
        name="query" 
        className="input" 
        placeholder= {`Try "dog" or "apple"`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">Search</button>
    </form>
    <div className="card-list">
        {
        pics.map((pic) => 
        <div className="card" key={pic.id}>
            <img 
            className="card-image" 
            alt={pic.description} 
            src={pic.urls.full} 
            width="50%" 
            height="50%"
            />
        </div>
        )}
    </div>
    </>
  );
}
export default SearchPhotos;