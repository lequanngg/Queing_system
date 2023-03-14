/* eslint-disable @typescript-eslint/no-unused-vars */
import { RestoreOutlined } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IGroups, IProject } from "../../../api/project/TypeProjectApi";
import { RootState } from "../../../redux/reducer/store";
import dayjs from "dayjs";
import { ActionProject } from "../actionProject/ActionProject";

const BlockLeft = styled.div`
  p {
    background-color: lightgray;
    border-radius: 5px;
    font-weight: 700;
    font-size: 19px;
    margin-top: 0px;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: #555555;
  }
`;

const StyleInactive = styled.div`
  background-color: #9e9e9e;
  border: none;
  border-radius: 3px;
  margin-right: 10px;

  & p {
    font-size: 14px;
    color: white;
    padding: 1px;
    margin: 0;
    font-weight: 600;
  }
`;

const StyleActive = styled.div`
  background-color: #4caf50;
  border: none;
  border-radius: 3px;
  margin-right: 10px;
  align-items: center;

  & p {
    font-size: 14px;
    color: white;
    padding: 1px;
    margin: 0;
    font-weight: 600;
  }
`;

const TextNameProject = styled.span`
  font-size: 14px;
  color: #555555;
`;

const TextPM = styled.span`
  margin-left: 5px;
  font-weight: 600;
  background: #2e95ea;
  color: #fff;
  font-size: 12px;
  padding: 2px 5px;
  border-radius: 10px;
`;

const TitleProject = styled.div`
  background-color: lightgray;
  padding: 15px 10px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 19px;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: #555555;
`;

const TextMember = styled.span`
  margin-left: 5px;
  font-weight: 600;
  background: #f44336;
  color: #fff;
  font-size: 12px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const Main = styled.div`
  padding: 0 15px 15px 15px;
  border-bottom: 1px solid rgba(204, 204, 204, 0.35);
`;
const Date = styled.span`
  margin-left: 5px;
  font-weight: 600;
  background: #4caf50;
  color: #fff;
  font-size: 12px;
  padding: 2px 5px;
  border-radius: 10px;
`;

const BlockRight = styled.div`
  display: flex;
  align-items: center;
`;

const BlockRight1 = styled.div``;

const TextTypeProject = styled.span`
  padding: 3px 5px;
  margin-left: 5px;
  font-size: 12px;
  border-radius: 10px;
  background: #f89c26;
  color: #fff;
  font-weight: 600;
`;

const ItemProject = styled.div`
  padding-top: 0px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
  padding: 3px 0;
`;

const Info = styled.div`
  display: flex;
`;
export const formatDay = (day: string) => dayjs(day).format("DD/MM/YYYY");

export const ListProject: React.FC = () => {
  const hide = useSelector((state: RootState) => state.project.hide);

  const listProject1 = useSelector(
    (state: RootState) => state.project.allProjects
  );
  const projectSearch = useSelector((state: RootState) => state.project.searchName);
  const listProject2 = listProject1.filter((project) => project.name.includes(projectSearch))

  const groups = listProject2.reduce((groups: IGroups, key: IProject) => {
    const customerName = groups[key.customerName] || [];
    customerName.push(key);
    groups[key.customerName] = customerName;
    return groups;
  }, {});


  return (
    <div>
      {Object.keys(groups).map((group) => {
        return (
          <div>
            <Main key={Object.keys(groups).indexOf(group)}>
              <TitleProject>{group}</TitleProject>
              {listProject2
                .filter(
                  (item) =>
                    item.customerName === group 
                )
                .map((item, index) => {
                  return (
                    <ItemProject>
                      <BlockLeft key={index}>
                        <TextNameProject>{item.name}</TextNameProject>

                        {item.pms.length === 1 ? (
                          <TextPM> {item.pms} </TextPM>
                        ) : (
                          <TextPM> {item.pms.join(", ")} </TextPM>
                        )}

                        <TextMember> {item.activeMember} members</TextMember>
                        {/* <TextTypeProject>HTX</TextTypeProject> */}

                        {item.projectType === 0 ? (
                          <TextTypeProject>T&M</TextTypeProject>
                        ) : item.projectType === 1 ? (
                          <TextTypeProject>FF</TextTypeProject>
                        ) : item.projectType === 2 ? (
                          <TextTypeProject>NB</TextTypeProject>
                        ) : (
                          <TextTypeProject>ODC</TextTypeProject>
                        )}

                        {item.timeEnd ? (
                          <Date>
                            {`${formatDay(item.timeStart)}-${formatDay(
                              item.timeEnd
                            )}`}
                          </Date>
                        ) : (
                          <Date>
                            {`${formatDay(item.timeStart)}
                          `}
                          </Date>
                        )}
                      </BlockLeft>
                      <BlockRight>
                        {!hide ? (
                          <BlockRight1>
                            {item.status === 1 ? (
                              <StyleInactive>
                                {" "}
                                <p>Inactive</p>{" "}
                              </StyleInactive>
                            ) : (
                              <StyleActive id="myDIV2">
                                <p>Active</p>
                              </StyleActive>
                            )}
                          </BlockRight1>
                        ) : null}

                        <ActionProject project={item}  />
                      </BlockRight>
                    </ItemProject>
                  );
                })}
            </Main>
          </div>
        );
      })}
    </div>
  );
};
