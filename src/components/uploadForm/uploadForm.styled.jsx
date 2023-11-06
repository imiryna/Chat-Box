import styled from "styled-components";

export const FormCss = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 20px 6px 6px;
    font-size: 12px;
    /* outline: 1px solid var(--icon-color); */
    border-radius: 6px;
    margin-bottom: 35px;
`;

export const InputBoxCss = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    color: rgba(5,25,55,1);
    margin-bottom: 30px;
`;

export const InputCss = styled.input`
    display: block;
    line-height: 25px;
    font-size: 12px;
    font-weight: 400;
    font-family: inherit;
    /* border-radius: 6px; */
    
    color:  rgba(5,25,55,1);
  

    /* background: var(--input-background); */
    transition: border 0.3s ease, border-color 0.3s ease;   
`;

export const UploadBtnCss = styled.button`
    display: flex;
    align-items: center;
    background-color:  rgba(5,25,55,1);
    font-family: inherit;
    border: 1px solid transparent;
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.25;
    min-height: 3rem;
    padding: calc(.85rem - 1px) calc(1.4rem - 1px);
    transition: all 250ms;
    margin-left: 10px;
 
  &:hover {
    background: #051937;
    background: radial-gradient(circle, rgba(27,163,196,1) 0%, rgba(5,25,55,1) 100%);
    /* box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px; */
    transform: translateY(-1px);
   }



  &:active {
    background: #051937;
    background: radial-gradient(circle, rgba(27,163,196,1) 0%, rgba(5,25,55,1) 100%);
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
  transform: translateY(0);
  }

`;