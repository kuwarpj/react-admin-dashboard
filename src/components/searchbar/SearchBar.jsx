import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchBar = ({ size, width }) => {
  return (
    <div className="headerSearch">
      <TextField
        variant="outlined"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon className="headerSearchIcon" />
            </InputAdornment>
          ),
          style: {
            borderRadius: "30px", // Adjust the border radius as needed
          },
        }}
        size={size}
        style={{
          width: width,
        }}
      />
    </div>
  );
};

export default SearchBar;
