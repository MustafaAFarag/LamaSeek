import { Colors } from "@/src/statics/colors";
import { FaCircleArrowUp } from "react-icons/fa6";
import styled from "styled-components";

const SendBtnEl = styled.button<{ $isactive?: boolean }>`
  all: unset;
  position: sticky;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transition: all 0.3s;
  color: ${(props) => (props.$isactive ? Colors.Primary : Colors.White)};
  cursor: ${(props) => (props.$isactive ? "pointer" : "default")};
  box-shadow: ${(props) =>
    props.$isactive ? `${Colors.Primary} 0px 0px 10px` : ""};
  border-radius: 50%;
  &:hover {
    transform: scale(${(props) => (props.$isactive ? "1.1" : "1")});
  }
`;

export default function SendBtn({
  handleSubmit,
  canSend,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSubmit: any;
  canSend: boolean;
}) {
  return (
    <SendBtnEl onClick={handleSubmit} $isactive={canSend}>
      <FaCircleArrowUp />
    </SendBtnEl>
  );
}
