import React from "react";
import HeadMainView from "../../components/mainview/HeadMainView";
import styled from "styled-components";
import avatar from "../../assets/png/big-avatar.png";

export default function Profile() {
  const ContentProfile = styled.div`
    background: #fff;
    height: 397px;
    box-shadow: 0px 2px 6px rgba(219, 219, 219, 0.5);
    border-radius: 12px;
    margin-right: 104px;
    margin-top: 80px;
    .content {
      padding: 40px 24px;
      display: flex;
      gap: 24px;
    }
    .avatar {
      display: flex;
      flex-direction: column;
      gap: 19px;
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      display: flex;
      align-items: center;
      color: #282739;
    }
    .main-profile {
      display: flex;
      gap: 24px;
      width: 100%;
      .item-big {
        width: calc(50% - 12px);
        display: flex;
        flex-direction: column;
        gap: 24px;
        .item {
          .title {
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: #282739;
            margin-bottom: 8px;
          }
          input {
            height: 44px;
            width: calc(100% - 12px);
            outline: none;
            border: none;
            padding-left: 16px;
            color: #535261;
            background: #eaeaec;
            border-radius: 6px;
          }
        }
      }
    }
  `;

  return (
    <div>
      <HeadMainView titleFirst="Thông tin cá nhân" />
      <ContentProfile>
        <div className="content">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
            <div>Lê Quỳnh Ái Vân</div>
          </div>
          <div className="main-profile">
            <div className="item-big">
              <div className="item">
                <div className="title">Tên người dùng</div>
                <input disabled type="text" value="Lê Quỳnh Ái Vân" />
              </div>
              <div className="item">
                <div className="title">Số điện thoại </div>
                <input disabled type="text" value="0767375921" />
              </div>
              <div className="item">
                <div className="title">Email:</div>
                <input disabled type="text" value="adminSSO1@domain.com" />
              </div>
            </div>
            <div className="item-big">
              <div className="item">
                <div className="title">Tên đăng nhập </div>
                <input disabled type="text" value="lequynhaivan01" />
              </div>
              <div className="item">
                <div className="title">Mật khẩu</div>
                <input disabled type="text" value="311940211" />
              </div>
              <div className="item">
                <div className="title">Vai trò:</div>
                <input disabled type="text" value="Kế toán" />
              </div>
            </div>
          </div>
        </div>
      </ContentProfile>
    </div>
  );
}
