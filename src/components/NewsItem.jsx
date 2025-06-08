import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date , source} = this.props;
    const defaultUrl = "data:image/jpeg;base64,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"
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
              imageUrl || defaultUrl 
            }
            onError={() => defaultUrl}
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
