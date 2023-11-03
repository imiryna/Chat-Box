import styled from "styled-components";

export const ListDocWrapCss = styled.div`
    display: flex;
    width: 100%;
    min-height: 220px;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 10px 6px 6px;
    font-size: 12px;
    /* outline: 1px solid var(--icon-color); */
    border-radius: 6px;
    margin-bottom: 25px;
`;

export const DocumentBoxCss = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  justify-content: start;
  padding: 12px 56px 12px 12px;
  gap: 24px;
  background: inherit;
  text-align: center;
  font-size: 12px;
  white-space: nowrap;
  color: rgba(5,25,55,1);
  /* margin-right: 8px; */
  margin-bottom:24px;
  border: 1px solid var(--outgoing-chat-bg);
  border-radius: 6px;
`