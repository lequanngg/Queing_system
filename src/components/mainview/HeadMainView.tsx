import React from "react";
import styled from "styled-components";
import avatar from "../../assets/png/avatar.png";
import iconNotification from "../../assets/svg/iconNotification.svg";
import ArrowRight from "../../assets/svg/arrow-right.svg";
import { useNavigate } from "react-router-dom";

interface HeadMainView {
  titleFirst: string;
  titleSecond?: string;
  titleThird?: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export default function HeadMainView(props: HeadMainView) {
  const navigate = useNavigate();

  const HeadMainView = styled.div`
    height: 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const HeadLeft = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #ff9138;
    display: flex;
    gap: 15px;
    .arrow {
      display: flex;
      gap: 15px;
    }
  `;

  const HeadRight = styled.div`
    display: flex;
    align-items: center;
    margin-right: 62px;
    gap: 24px;
    position: relative;
    z-index: 1;
    .title {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #7e7d88;
    }
    .name {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #535261;
    }
    .notification {
      cursor: pointer;
    }
    .profile {
      display: flex;
      gap: 8px;
    }
    .text {
      cursor: pointer;
    }

    .text:hover .name {
      text-decoration: underline;
    }

    .avatar {
      cursor: pointer;
    }
  `;

  return (
    <HeadMainView>
      <HeadLeft>
        <div>{props.titleFirst}</div>
        {props.titleSecond && (
          <div className="arrow">
            <img src={ArrowRight} alt="arrow" />
            <div>{props.titleSecond}</div>
          </div>
        )}
        {props.titleThird && (
          <div className="arrow">
            <img src={ArrowRight} alt="arrow" />
            <div>{props.titleThird}</div>
          </div>
        )}
      </HeadLeft>
      <HeadRight>
        <div className="notification">
          <img src={iconNotification} alt="iconNotification" />
        </div>
        <div className="profile" onClick={() => navigate("/home/profile")}>
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="text">
            <div className="title">Xin Chào</div>
            <div className="name">Lê Quỳnh Ái Vân</div>
          </div>
        </div>
      </HeadRight>
    </HeadMainView>
  );
}
