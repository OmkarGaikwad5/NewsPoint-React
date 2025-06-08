import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      totalPages: props.totalPages
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsPoint`;
  }

  async componentDidMount() {
    this.fetchArticles();
   
  }

  fetchArticles = async () => {
    console.log("Props:",this.props)
    console.log("States:",this.state)
    const { category, pageSize, country } = this.props;
    const { page, articles, totalResults } = this.state;
  
    // Check if all articles are already fetched
    if (articles.length >= totalResults && totalResults !== 0) return;
  
    this.setState({ loading: true });
  
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=c2151c0611434c948b4dc660523a7070&page=${page}&pageSize=${pageSize}`;
      const response = await fetch(url);
      const parsedData = await response.json();
  
      if (parsedData.status === "ok") {
        this.setState((prevState) => ({
          articles: prevState.articles.concat(parsedData.articles),
          totalResults: parsedData.totalResults,
          page: prevState.page + 1,
          loading: false,
        }));
      } else {
        this.setState({ loading: false });
      };

      console.log("Props:",this.props)
      console.log("States:",this.state)
    } catch (error) {
      console.error("Fetch error:", error);
      this.setState({ loading: false });
    }
  };
  
  

  // handlePrevClick = () => {
  //   if (this.state.page > 1) {
  //     this.fetchArticles(this.state.page - 1);
  //   }
  // };

  // handleNextClick = () => {
  //   const totalPages = Math.ceil(this.state.totalResults / this.props.pageSize);
  //   if (this.state.page < totalPages) {
  //     this.fetchArticles(this.state.page + 1);
  //   }
  // };

  showConsole = () => {
    console.log(this.state.articles.length , this.state.totalResults)
  }

  render() {
    return (
      <div className="container min-h-screen my-3">
        <h2 className="text-center mb-4">
          Top Headlines - {this.props.category.toUpperCase()}
        </h2>

        {this.state.articles?.length < 1 && (
          <Spinner/>
        )}
        
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchArticles}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={this.state.loading && <Spinner />}
        >
        <div className="row min-h-screen">
          {
            this.state.articles.map((ele, i) => (
              <NewsItem
                key={i}
                title={ele.title || ""}
                description={ele.description || ""}
                imageUrl={ele.urlToImage}
                newsUrl={ele.url}
                author={ele.author}
                date={ele.publishedAt.toLocaleString('en-US', {
                  dateStyle: 'medium',
                  timeStyle: 'short'
                })}
                source={ele.source.name}
              />
            ))}
        </div>
        </InfiniteScroll>
        
      </div>
    );
  }
}

// ✅ Default props
News.defaultProps = {
  pageSize: 30,
  category: "general",
  country: "in", // Default to India
};

// ✅ Prop type validation
News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
  country: PropTypes.string,
};

export default News;
