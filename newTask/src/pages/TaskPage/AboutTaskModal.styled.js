import styled, { css } from "styled-components";
import { topicStyles } from "../../styled/topic";
import { Hovers } from "../../styled/hover";

export const PopBrowse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 640px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategoriesThemeText = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
`;

export const CategoriesTheme = styled.div`
  opacity: 1;
  display: block;
  height: 30px;
  border-radius: 24px;
  padding: 8px 20px;
  background-color: ${({ $topicColor }) =>
    topicStyles[$topicColor]?.backgroundColor || "#FFF"};

  ${CategoriesThemeText} {
    color: ${({ $topicColor }) => topicStyles[$topicColor]?.color || "#000"};
  }
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const StatusText = styled.p`
  margin-bottom: 14px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 7px;
  gap: 7px;
`;

export const StatusItemInput = styled.input.attrs({ type: "radio" })`
  display: none;
`;

export const StatusItemLabel = styled.label`
  box-sizing: border-box;
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #ffffff;
  color: #94a6be;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  padding: 10px 17.5px;
  display: ${(props) => (props.$hide ? "none" : "inline-block")};
  cursor: pointer;

  ${StatusItemInput}:hover+& {
    background: #94a6be;
    color: #ffffff;
  }

  ${StatusItemInput}:checked+& {
    background: #94a6be;
    color: #ffffff;
  }
`;

// export const StatusThemeItem = styled.div`
//   border-radius: 24px;
//   border: 0.7px solid rgba(148, 166, 190, 0.4);
//   background: ${(props) => (props.$currentst ? "#94a6be" : "#ffffff")};
//   color: ${(props) => (props.$currentst ? "#ffffff" : "#94a6be")};
//   padding: 11px 14px 10px;
//   margin-right: 7px;
//   margin-bottom: 7px;
//   display: ${(props) => (props.$hide ? "none" : "block")};
//   cursor: pointer;

//   &:hover {
//     background: #94a6be;
//     color: #ffffff;
//   }
// `;

// export const StatusThemeItemText = styled.p`
//   font-size: 14px;
//   line-height: 1;
//   letter-spacing: -0.14px;
// `;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopBrowsForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const CategoriesText = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CategoriesThemeBot = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
`;

export const PopBrowseBtnBrowse = styled.div`
  display: ${(props) => (props.$hide ? "flex" : "none")};
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopBrowseBtnEdit = styled(PopBrowseBtnBrowse)`
  display: ${(props) => (props.$hide ? "none" : "flex")};
`;

const PopBrowseBtnMixin = css`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: -0.01em;
  text-align: center;
`;

const PopBtnBorMixin = css`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
`;

const PopBtnBgMixin = css`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
`;

export const BtnBrowseEdit = styled.button`
  ${PopBrowseBtnMixin}
  ${Hovers.hover03}
  ${PopBtnBorMixin}
`;

export const BtnBrowseDelete = styled.button`
  ${PopBrowseBtnMixin}
  ${Hovers.hover03}
  ${PopBtnBorMixin}
`;

export const BtnBrowseClose = styled.button`
  ${PopBtnBgMixin}
  ${Hovers.hover01}
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: 0em;
  text-align: center;
  padding: 10px 14px;
  border-radius: 4px;
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const BtnEditEdit = styled.button`
  ${PopBrowseBtnMixin}
  ${PopBtnBgMixin}
  ${Hovers.hover01}
`;

export const BtnEditCancel = styled.button`
  ${PopBrowseBtnMixin}
  ${Hovers.hover03}
  ${PopBtnBorMixin}
`;

export const BtnEditDelete = styled.button`
  ${PopBrowseBtnMixin}
  ${Hovers.hover03}
  ${PopBtnBorMixin}
`;
