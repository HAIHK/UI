import React from "react";
import Background from "../images/background.jpg";
import Logo from "../images/logokt.png";
import styled from "styled-components";
// import { GiClick } from "react-icons/gi";

const Container = styled.div`
  background-image: url("${Background}");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 900px;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 50px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxLogo = styled.div`
  display: flex;
  align-items: center;
  color: #2dbd71;
`;

const TextLogo = styled.h2`
  margin-bottom: 30px;
`;

const Version = styled.div`
  font-size: 19px;
  font-weight: 700;
`;

const Img = styled.img`
  width: 70px;
  height: 80px;
`;

const List = styled.div`
  width: 500px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-size: 20px;
  font-weight: 500;
`;

const Li = styled.li`
  width: max-content;
  padding: 6px 25px 9px 25px;
  border-radius: 6px;
`;

const A = styled.a`
  text-decoration: none;
  color: #fff;
`;

const Titles = styled.h1`
  font-size: 75px;
  color: #fff;
  margin-bottom: 0px;
`;

const Title = styled.h1`
  font-size: 75px;
  color: #fff;
  margin-top: 0px;
`;

const Benefit = styled.h1`
  font-size: 50px;
  font-weight: 500;
  padding: 20px 50px;
  border: 5px solid #fff;
  border-radius: 50px;
  color: #fff;
  margin: 0px;
`;

// const Icon = styled.div`
//   width: 100px;
//   height: 100px;
//   border: 1px solid;
//   margin-left: 700px;
//   font-size: 100px;
// `;

const Header = () => {
  return (
    <Container>
      <Navbar>
        <BoxLogo>
          <Img src={Logo} />
          <TextLogo>
            Ads check by iVimana
            <Version>Version 1.0</Version>
          </TextLogo>
        </BoxLogo>
        <List>
          <Ul>
            <Li>
              <A href="">Home</A>
            </Li>
            <Li>
              <A href="">About us</A>
            </Li>
            <Li>
              <A href="">News</A>
            </Li>
            <Li style={{ background: "#2dbd71" }}>
              <A href="">Menu</A>
            </Li>
          </Ul>
        </List>
      </Navbar>
      <Wrapper>
        <Titles>Công cụ hỗ trợ quảng cáo Facebook</Titles>
        <Title>Tiện lợi - An toàn - Chuyên nghiệp</Title>
        <Benefit>
          Cách tăng hiệu suất làm việc lên đến 200%
          {/* <GiClick style={{ fontSize: "100px" }} /> */}
        </Benefit>
        {/* <Icon> */}
        {/* </Icon> */}
      </Wrapper>
    </Container>
  );
};

export default Header;
