import React from "react";
import { FormCss, FilterButtonCss, FilterInputCss } from "./filter.styled";

export const Filter = ({documentData, filteredDocuments})=>{

    const handleInputFilter = e =>{
        const filterExpression = e.target.value;
        let filterData;
       
        if (filterExpression.length < 3) {
          filterData = documentData;
        }
        filterData = documentData.filter(item =>
            item.name.toLowerCase().includes(filterExpression)
          );
          filteredDocuments(filterData)
    }
    return(
        <FormCss>
            <FilterButtonCss>Filter</FilterButtonCss>
            <FilterInputCss 
            onChange={handleInputFilter} type="text" placeholder="Serch file"/>
         </FormCss>
    )
}