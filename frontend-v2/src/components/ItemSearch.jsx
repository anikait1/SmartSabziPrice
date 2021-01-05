import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const ItemSearch = ({fruits, vegetables}) => {
  const items = [...fruits, ...vegetables]
  console.log(items);
  return (
    <Autocomplete
      id="item-search-field"
      options={items}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search among 200+ items..."
          variant="outlined"
          margin="dense"
          color="primary"
        />
      )}
    />
  );
};

export default ItemSearch;
