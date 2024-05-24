import { IconButton, MenuItem, makeStyles, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import SearchImage from "../../images/SearchIcon_Header.png";
import keywords from "./keywords.json";

const useStyles = makeStyles((theme) => ({
  SearchIcon: {
    marginRight: "31px",
    "&:hover": {
      "& #searchBar": {
        right: "40px",
        width: "344px",
      },
    },
  },

  searchBar: {
    top: "20px",
    right: "-344px",
    width: "0",
    height: "66px",
    border: "2px solid #14202B",
    borderRadius: "5px",
    position: "fixed",
    zIndex: 1,
    display: "flex",
    backgroundColor: "#fff",
    transitionDuration: "1s",

    "& input": {
      padding: "25px",
      width: "100%",
      height: "100%",
      display: "block",
      boxSizing: "border-box",
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0em",
      border: "none",
    },
    "& button": {
      border: "none",
      margin: "0",
    },
  },

  searchResultStyle: {
    top: "calc(100% + 2px)",
    right: "-2px",
    width: "calc(100% + 2px)",
    position: "absolute",
    background: "#fff",
    paddingTop: "5px",
    borderRadius: "5px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "15px 0 !important",
    maxHeight: "70vh",
    overflow: "auto",
    "& .link": {
      color: "#000 !important",
      "& :hover": {
        textDecoration: "none",
        background: "#073762",
        color: "#fff",
      },
    },
  },
}));

function SearchResult({ pageUrl, text }) {
  const Component = pageUrl.includes("http") ? Link : RouterLink;

  return (
    <Link
      className="link"
      component={Component}
      href={pageUrl}
      to={pageUrl}
      target="_blank"
    >
      <MenuItem>{text}</MenuItem>
    </Link>
  );
}

export default function Search() {
  
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState();
  const { SearchIcon, searchBar, searchResultStyle } = useStyles();
  const searchFor = () => {
    if (searchInput.length < 3) {
      setSearchResult("please write a complete \n word");
      return;
    }
    const searchInputToUpperCase = searchInput.toUpperCase();
    const seperatedWords = searchInputToUpperCase.split(" ");
    const identicalResult = [];
    const almosTheSame = [];
    const containsSomeKeywords = [];
    let FsearcshResult = [];
    Object.keys(keywords).forEach((keyword) => {
      const keywordToUpperCase = keyword.toUpperCase();
      if (keywordToUpperCase === searchInputToUpperCase) {
        identicalResult.push(keyword);
        return true;
      }
      if (
        searchInputToUpperCase.includes(keywordToUpperCase) ||
        keywordToUpperCase.includes(searchInputToUpperCase)
      ) {
        almosTheSame.push(keyword);
        return true;
      }
      for (let index = 0; index < seperatedWords.length; index++) {
        if (
          seperatedWords[index].includes(keywordToUpperCase) ||
          keywordToUpperCase.includes(seperatedWords[index])
        ) {
          containsSomeKeywords.push(keyword);
          return true;
        }
      }
      return false;
    });
    if (identicalResult.length > 0) {
      FsearcshResult = identicalResult;
    } else if (almosTheSame.length > 0) {
      FsearcshResult = almosTheSame;
    } else if (containsSomeKeywords.length > 0) {
      FsearcshResult = containsSomeKeywords;
    } else {
      FsearcshResult = "Not Found";
    }
    setSearchResult(FsearcshResult);
  };

  return (
    <>
      <IconButton
        disableRipple
        className={SearchIcon}
        color="inherit"
        aria-label="menu"
      >
        <img src={SearchImage} alt="SearchIcon" />
        <form className={searchBar} id="searchBar">
          <input
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            placeholder="SEARCH"
          />
          <IconButton
            disableRipple
            onClick={(e) => {
              e.preventDefault();
              searchFor();
            }}
            type="submit"
            className={SearchIcon}
            color="inherit"
            aria-label="menu"
          >
            <img src={SearchImage} alt="SearchIcon" />
          </IconButton>
          {searchResult && (
            <div className={searchResultStyle}>
              {Array.isArray(searchResult) ? (
                searchResult.map((item, i) => {
                  if (Array.isArray(keywords[item]))
                    return keywords[item].map((link, index) => {
                      return (
                        <SearchResult
                          pageUrl={link}
                          key={index}
                          text={item + " : " + ++index}
                        />
                      );
                    });
                  return <SearchResult pageUrl={keywords[item]} text={item} key={i} />;
                })
              ) : (
                <>{searchResult}</>
              )}
            </div>
          )}
        </form>
      </IconButton>
    </>
  );
}