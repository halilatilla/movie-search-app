import Search from "../components/search/Search";
import Header from "../components/header/Header";

export default () => (
  <>
    <Header />
    <Search />

    <style jsx>{`
      :global(body) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        background-color: #181a1b;
        background-color: #f8f9fa;
      }
    `}</style>
  </>
);
