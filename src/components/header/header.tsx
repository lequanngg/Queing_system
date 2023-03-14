import React from 'react'
import styled from "styled-components";
import MoreVert from '@mui/icons-material/MoreVert';

const Container = styled.div`
    background: #f44336;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    box-shadow: 0 2px 10px rgb(0 0 0 / 15%);
    z-index: 99;
`;

const MoreVert2 = styled(MoreVert)`
color: white;
`;

const LeftBlockNav = styled.div`
    display: flex;
    margin-left: 15px;
`;

const IconLeftNav = styled.div`
    
`;

const TextLeftNav = styled.div`
    color: white;
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
`;
const RightBlockNav = styled.div`
    display: flex;
    margin-right: 15px;
`;
const SelectLangueNav = styled.div`
    display: flex;
`;
const IconLangue = styled.div`
    
`;
const TextLangue = styled.div`
    color: white;
    font-size: 15px;
`;
const IconSelect = styled.div`
    
`;
const SelectBackgroundColorNav = styled.div`
    
`;


const Header: React.FC = () => {
    return (
        <Container>
      <LeftBlockNav>
        <IconLeftNav>
        </IconLeftNav>
        <TextLeftNav>
        Timesheet
        </TextLeftNav>
      </LeftBlockNav>
      <RightBlockNav>
        <SelectLangueNav>
            <IconLangue>
           
            </IconLangue>
            <TextLangue>
        English
            </TextLangue>
            <IconSelect>
  
            </IconSelect>

        </SelectLangueNav>
        <SelectBackgroundColorNav>

            <MoreVert2 />

        </SelectBackgroundColorNav>
      </RightBlockNav>
        </Container>
        
    )
}
export default Header;