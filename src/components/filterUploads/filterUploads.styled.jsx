import styled from "styled-components";

export const FormCss = styled.form`
  display: block;
  margin-left:auto;
  margin-right: auto;
  width: 100%;
  font-size: 12px;
  margin-bottom: 30px;
  
  position: relative;
`;

export const FilterButtonCss = styled.span`
  display: block;
  position: absolute;
  top: 7px;
  right: 10px;
  text-align: center;
  padding: 5px 6px 3px;
  color: var(--outgoing-chat-bg);
  background: inherit;
  border: 1px solid var(--group-border);
  border-radius: 50%;
  transition: background .3s ease;

   &:hover {
     background: var(--placeholder-color);
   }
      

`;

export const FilterInputCss = styled.input`
  display: block;
    width: 100%;
    padding: 8px 16px;
    line-height: 25px;
    font-size: 12px;
    font-weight: 500;
    font-family: inherit;
    border-radius: 6px;
    color: rgba(5,25,55,1);
    border: 1px solid var(--icon-color);
    background: var(--input-background);
    transition: border 0.3s ease, border-color 0.3s ease;
    &::placeholder {
      color:  #53585f;;
      font-size: 12px;
    }

    &:hover {
        outline: none;
        border-color:rgba(5,25,55,1);
    }
    &:focus {
        outline: none;
        border-color:rgba(5,25,55,1);
    }
    
    &input:valid  {
      visibility: visible;
    }  

`;

export const SvgCss = styled.svg`
  padding: 2px;
  transition: stroke 0.3s ease;
  
  &:hover {
    stroke: rgba(5,25,55,1);
  }
`;