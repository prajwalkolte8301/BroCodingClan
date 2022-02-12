import styled from "styled-components";

function Footer() {
  return (
    <Main>
      <div>
        <p>Copyright &copy; BCC</p>
      </div>
    </Main>
  );
}

const Main = styled.div`
  background-color: #171717;
  border-top: solid 1px #272727;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  padding: 15px 60px;
  margin-top: auto;

  p {
    margin: 5px auto;
    color: white;
    font-family: Bahnschrift;
    font-size: 13px;
    text-align: center;
  }

  @media (max-width: 1366px) {
    p {
      width: 100%;
    }
  }
`;

export default Footer;
