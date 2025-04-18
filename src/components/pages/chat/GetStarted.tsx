import styled from "styled-components";
import Row from "../../common/Row";
import Prompts from "@/src/statics/prompts";
import { Colors } from "@/src/statics/colors";

const GetStartedEL = styled(Row)<{ $active: boolean }>`
  position: absolute;
  align-items: center;
  text-align: center;
  justify-content: center;
  left: 50%;
  top: 50%;
  width: fit-content;
  transform: translate(-50%, -80%);
  flex-direction: column;
  display: ${(props) => (props.$active ? "flex" : "none")};
  gap: 30px;
`;

const TitleEl = styled.h1`
  font-size: 5rem;
  color: ${Colors.Primary};
`;

const HolderEl = styled(Row)`
  align-items: center;
  width: 100%;
  gap: 18px;
  flex-direction: column;
`;

const SugEl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  user-select: none;
  cursor: pointer;
  height: 80px;
  transition: all 0.15s;
  text-align: left;
  border: 1px solid ${Colors.White};
  gap: 10px;

  & > div {
    &:first-child {
      color: ${Colors.White};
      font-size: 0.8rem;
      font-weight: bold;
    }
    &:last-child {
      color: ${Colors.Primary};
      font-size: 0.8rem;
    }
  }

  &:hover {
    transform: translateY(-8px);
    background-color: ${Colors.White};

    & > div {
      &:first-child {
        color: ${Colors.Primary};
      }
      &:last-child {
        color: ${Colors.Background};
      }
    }
  }
`;

export default function GetStarted({
  active,
  setPrompt,
}: {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  setPrompt: Function;
  active: boolean;
}) {
  return (
    <GetStartedEL $active={active}>
      <Row $fd="column">
        <TitleEl>LamaSeek</TitleEl>
      </Row>
      <HolderEl>
        {Prompts.map((prompt) => {
          return (
            <SugEl
              key={prompt.id}
              onClick={() => {
                setPrompt(prompt.prompt);
              }}
            >
              <div>{prompt.title}</div>
              <div>
                {prompt.prompt.length > 30
                  ? prompt.prompt.substring(0, 30) + "..."
                  : prompt.prompt}
              </div>
            </SugEl>
          );
        })}
      </HolderEl>
    </GetStartedEL>
  );
}
