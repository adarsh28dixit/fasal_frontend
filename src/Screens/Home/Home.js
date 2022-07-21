import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [movie, setMovie] = useState([]);
  const [item, setItem] = useState(null);
  const [formData, setFormData] = useState({
    inp: "",
  });
  const { inp } = formData;

  const onChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const imageChanger = (e) => {
    setItem((prev) => ({
      ...prev,
      key: e.target.alt,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?apikey=58b7bf9f&`, {
        params: {
          t: inp,
        },
      })

      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.msg));
  };

  useEffect(() => {
    console.log({ movie });
  }, [movie]);
  console.log(item);
  return (
    <>
      <div className="title">
        <section className="form">
          <form className="search-form" onSubmit={submitHandler}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="inp"
                value={inp}
                placeholder="Search movie"
                onChange={onChange}
                style={{ width: "200%" }}
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-block"
                style={{ backgroundColor: "green" }}
              >
                Search
              </button>
            </div>
          </form>
        </section>

        <div className="item">
          <img src={movie.Poster} alt={movie.Poster} onClick={imageChanger} />
          {movie.length !== 0 ? (
            <div className="span">
              <span>Title : {movie.Title}</span>
              <span>Actors : {movie.Actors}</span>
              <span>Awards : {movie.Awards}</span>
              <span>Country : {movie.Country}</span>
              <span>Director : {movie.Director}</span>
              <span>Writer : {movie.Writer}</span>
              <span>Year : {movie.Year}</span>
            </div>
          ) : ""}
        </div>

        <div>
          {item && (
            <>
              <div className="playlist">
                <h6>Playlist 1</h6>

                <img src={item.key} alt="" />
              </div>
            </>
          )}
          {!item && <h3>"No items are found in list"</h3>}
        </div>
      </div>
    </>
  );
}
