import HeadMainView from "../../components/mainview/HeadMainView";
import Calendar from "react-calendar";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Item1 from "../../assets/svg/Frame624758.svg";
import Item2 from "../../assets/svg/Frame624759.svg";
import Item3 from "../../assets/svg/2222222.svg";
import Item4 from "../../assets/svg/334.svg";
import UpDown1 from "../../assets/svg/1111.svg";
import UpDown2 from "../../assets/svg/2222.svg";
import UpDown3 from "../../assets/svg/3333.svg";
import UpDown4 from "../../assets/svg/4444.svg";
import Img1 from "../../assets/svg/111.svg";
import Img2 from "../../assets/svg/222.svg";
import Img3 from "../../assets/svg/333.svg";
import monitor from "../../assets/svg/monitor.svg";
import "react-calendar/dist/Calendar.css";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
const MainHome = styled.div`
  margin-top: -88px;
  display: flex;
  gap: 30px;
  .left-db {
    margin-top: 88px;
    width: 68%;
    .title {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      color: #ff7506;
      margin-bottom: 20px;
    }
    .full-item {
      display: flex;
      justify-content: space-between;
      gap: 13px;
      .item {
        width: 100%;
        height: 120px;
        left: 0px;
        top: 0px;
        background: #ffffff;
        border-radius: 10px;
        padding: 8px 10px 20px 12px;
        cursor: pointer;
        .head-item {
          display: flex;
          align-items: center;
          gap: 12px;
          .title {
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
            color: #535261;
            margin: 0;
            padding-right: 35px;
          }
        }

        .bot-item {
          display: flex;
          margin-top: 12px;
          justify-content: space-between;
          align-items: center;
          .number {
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 45px;
            color: #535261;
          }
          .up-down {
            padding-top: 5px;
          }
        }
      }
    }
    .chart {
      background: white;
      margin-top: 16px;
      border-radius: 12px;
    }
  }
  .right-db {
    background: white;
    width: 28%;
    box-shadow: 0px 4px 6px rgba(219, 219, 219, 0.5);
    border-radius: 8px 0px 0px 8px;
  }
`;

const Chart = styled.div`
  background: white;
  border-radius: 12px;
  margin-top: 16px;
  padding: 24px;
  .head-chart {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .left {
      .title {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        color: #282739;
        margin-bottom: 4px;
      }
      .des {
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #a9a9b0;
      }
    }
  }
  .recharts-cartesian-grid-vertical {
    line {
      display: none;
    }
  }
  .recharts-tooltip-wrapper,
  .recharts-tooltip-wrapper-left,
  .recharts-tooltip-wrapper-bottom {
    background: #5185f7;
    padding: 4px 12px;
    border: none;
    color: white;
    border-radius: 8px;
  }
`;

const MainRight = styled.div`
  padding: 88px 24px 0 24px;
  height: 100vh;
  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #ff7506;
  }
  .fullItem {
    padding-top: 16px;
    .item {
      .item-e {
        display: flex;
      }
      justify-content: space-between;
      margin-bottom: 12px;
      padding: 11px 16px;
      display: flex;
      background: #ffffff;
      box-shadow: 2px 2px 15px rgba(70, 64, 67, 0.1);
      border-radius: 12px;
      align-items: center;
      .center {
        margin-left: 17px;
        .number {
          font-weight: 800;
          font-size: 24px;
          line-height: 36px;
          color: #535261;
          font-family: "Nunito";
        }
        .sub-des {
          font-size: 14px;
          line-height: 21px;
          display: flex;
          align-items: center;
          gap: 4px;
          .color-pr {
            color: #ff7506;
          }
        }
      }
      .status {
        .status-1,
        .status-2 {
          width: 150px;
          justify-content: space-between;
          display: flex;
          align-items: center;
          .title {
            font-family: "Nunito";
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 21px;
            color: #7e7d88;
          }
          .des {
            width: 50px;
            font-family: "Nunito";
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
            color: #ff7506;
          }
        }
      }
    }
  }
  .react-calendar {
    width: 100%;
    background: #ffffff;
    box-shadow: 2px 2px 15px rgba(70, 64, 67, 0.1);
    border-radius: 12px;
    border: none;
    .react-calendar__tile {
      height: 45px;
    }
    .react-calendar__month-view__weekdays__weekday {
      color: #ff7506;
    }
    .react-calendar__navigation__arrow, .react-calendar__navigation__label {
      color: #ff7506;
    }
    .react-calendar__navigation__label__labelText {
      font-size: 16px;
      font-weight: 600;
    }
    .react-calendar__navigation {
      height: 60px;
      border-bottom: 1px solid #DCDDFD
    }
  }
`;

const HomePage = () => {
  const [value, onChange] = useState(new Date());

  const data = [
    { name: "01", pv: 3000 },
    { name: "", pv: 3500 },
    { name: "", pv: 4200 },
    { name: "", pv: 3500 },
    { name: "13", pv: 3000 },
    { name: "", pv: 3400 },
    { name: "", pv: 3000 },
    { name: "19", pv: 3600 },
    { name: "", pv: 3000 },
    { name: "", pv: 3800 },
    { name: "31", pv: 3500 },
    { name: "", pv: 3600 },
  ];
  const divRef = useRef<any>(null);

  const [widthChart, setWidthChart] = useState();

  useEffect(() => {
    function handleResize() {
      if (divRef.current) {
        setWidthChart(divRef.current.clientWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(widthChart, "widthChart");

  return (
    <div>
      <HeadMainView titleFirst="Dashboard" />
      <MainHome>
        <div className="left-db">
          <div className="title">Biểu đồ cấp số</div>
          <div className="full-item">
            <div className="item">
              <div className="head-item">
                <img src={Item1} alt="" />
                <div className="title">Số thứ tự đã cấp</div>
              </div>
              <div className="bot-item">
                <div className="number">4.221</div>
                <div className="up-down">
                  <img src={UpDown1} alt="" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="head-item">
                <img src={Item2} alt="" />
                <div className="title">Số thứ tự đã cấp</div>
              </div>
              <div className="bot-item">
                <div className="number">3.721</div>
                <div className="up-down">
                  <img src={UpDown2} alt="" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="head-item">
                <img src={Item3} alt="" />
                <div className="title">Số thứ tự đã cấp</div>
              </div>
              <div className="bot-item">
                <div className="number">468</div>
                <div className="up-down">
                  <img src={UpDown3} alt="" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="head-item">
                <img src={Item4} alt="" />
                <div className="title">Số thứ tự đã cấp</div>
              </div>
              <div className="bot-item">
                <div className="number">32</div>
                <div className="up-down">
                  <img src={UpDown4} alt="" />
                </div>
              </div>
            </div>
          </div>
          <Chart ref={divRef}>
            <div className="head-chart">
              <div className="left">
                <div className="title">Bảng thống kê theo ngày</div>
                <div className="des">Tháng 11/2021</div>
              </div>
              <div className="right">Xem theo</div>
            </div>
            <AreaChart
              width={widthChart && widthChart - 48}
              height={400}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="name" />
              <YAxis domain={[0, 6000]} tickCount={7} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const value = payload[0].value;
                    return <div>{value}</div>;
                  }
                  return null;
                }}
              />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#5185F7"
                fill="#CEDDFF"
              />
            </AreaChart>
          </Chart>
        </div>
        <div className="right-db">
          <MainRight>
            <div className="title">Tổng quan</div>
            <div className="fullItem">
              <div className="item">
                <div className="item-e">
                  <img src={Img1} alt="" />
                  <div className="center">
                    <div className="number">4.221</div>
                    <div className="sub-des">
                      <img src={monitor} alt="" />
                      <span className="color-pr">Thiết bị</span>
                    </div>
                  </div>
                </div>

                <div className="status">
                  <div className="status-1">
                    <div className="title">Đang hoạt động</div>
                    <div className="des">3.799</div>
                  </div>
                  <div className="status-2">
                    <div className="title">Ngưng hoạt động</div>
                    <div className="des">422</div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-e">
                  <img src={Img2} alt="" />
                  <div className="center">
                    <div className="number">276</div>
                    <div className="sub-des">
                      <img src={monitor} alt="" />
                      <span className="color-pr">Dịch vụ</span>
                    </div>
                  </div>
                </div>
                <div className="status">
                  <div className="status-1">
                    <div className="title">Đang hoạt động</div>
                    <div className="des">210</div>
                  </div>
                  <div className="status-2">
                    <div className="title">Ngưng hoạt động</div>
                    <div className="des">66</div>
                  </div>
                </div>
              </div>
              <div className="item">
                {" "}
                <div className="item-e">
                  <img src={Img3} alt="" />
                  <div className="center">
                    <div className="number">4.221</div>
                    <div className="sub-des">
                      <img src={monitor} alt="" />
                      <span className="color-pr">Cấp số</span>
                    </div>
                  </div>
                </div>
                <div className="status">
                  <div className="status-1">
                    <div className="title">Đã sử dụng</div>
                    <div className="des">3.721</div>
                  </div>
                  <div className="status-2">
                    <div className="title">Đang chờ</div>
                    <div className="des">486</div>
                  </div>
                  <div className="status-2">
                    <div className="title">Bỏ qua</div>
                    <div className="des">32</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="calender">
              <Calendar onChange={onChange} value={value} />
            </div>
          </MainRight>
        </div>
      </MainHome>
    </div>
  );
};

export default HomePage;
