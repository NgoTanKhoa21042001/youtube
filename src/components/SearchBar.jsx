import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Paper
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        value={searchTerm}
        type="text"
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        {<Search />}
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
