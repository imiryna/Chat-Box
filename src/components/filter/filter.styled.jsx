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
  position: absolute;
  top:0;
  right:0;
  text-align: center;
  padding: 9px 16px;
  font-size: 14px;
  line-height: 25px;
  color: var(--outgoing-chat-bg);
  background: rgba(5,25,55,1);
  border: 1px solid var(--group-border);
  border-radius: 0 6px 6px 0;
  transition: background-image .3s ease;

  &:hover {
     background-image: radial-gradient(circle, rgba(27,163,196,1) 0%, rgba(5,25,55,1) 100%);;
     /* border-color: var(--group-border-focus); */
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
    transition: border .3s ease;
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