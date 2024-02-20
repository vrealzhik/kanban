import * as S from "./TaskBoard.styled";

const TaskBoard = ({ children }) => {
  return (
    <S.Main className="main">
      <S.Container className="container">
        <S.MainBlock className="main__block">
          <S.MainContent className="main__content">{children}</S.MainContent>
        </S.MainBlock>
      </S.Container>
    </S.Main>
  );
};

export default TaskBoard;
