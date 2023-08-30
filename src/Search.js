import React from "react";

export default function Search(props) {
  return (
    <div>
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a location..."
              className="form-control shadow-sm"
              autocomplete="on"
            />
          </div>

          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-dark shador-sm w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
