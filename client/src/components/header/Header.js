import { IoReorderFourSharp, IoSearchSharp } from "react-icons/io5";
import { useState, useCallback } from "react";
import "./Header.scss";
const SearchField = ({ value, onChange }) => (
  <input
    type="text"
    className="search-field"
    placeholder="Search Topic, Space..."
    value={value}
    onChange={onChange}
  />
);

const Header = ({ onMenuClick }) => {
  const [showSearch, toggleShowSearch] = useState(false);
  const [text, setText] = useState("");

  const handleSearch = useCallback(() => {
    console.log(text);
    toggleShowSearch((prev) => !prev);
  }, [text]);

  return (
    <header className="header">
      <div className="header-wrapper">
        <IoReorderFourSharp className="menu-icon" onClick={onMenuClick} />
        <div className="title">SoundHive</div>
        <div className="search">
          <SearchField value={text} onChange={(e) => setText(e.target.value)} />
          <IoSearchSharp className="search-icon" onClick={handleSearch} />
        </div>
      </div>
      {showSearch && (
        <div className="mobile-search-menu">
          <SearchField value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      )}
    </header>
  );
};

export default Header;
