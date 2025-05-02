import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date , source} = this.props;

    return (
      <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch mb-4">
        <div className="card w-100 position-relative">
          <span
            className="badge bg-danger position-absolute top-0 end-0 mb-2"
            style={{ zIndex: 1 }}
          >
            Source : {source}
          </span>
          <img
            src={
              imageUrl || "https://via.placeholder.com/300x180?text=No+Image"
            }
            className="card-img-top"
            alt="News"
            style={{ height: "180px", objectFit: "cover" }}
          />

          <div className="card-body d-flex flex-column">
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on <br />{" "}
                {new Date(date).toLocaleString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })}
              </small>
            </p>

            <h5
              className="card-title"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              title={title}
            >
              {title}
            </h5>
            <p
              className="card-text"
              style={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {description}
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary mt-auto"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
