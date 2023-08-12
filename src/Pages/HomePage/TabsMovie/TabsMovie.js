import React, { useEffect, useState } from "react";
import { https } from "../../../service/config";
import { Tabs } from "antd";
import moment from "moment/moment";
const onChange = (key) => {
  console.log(key);
};

export default function TabsMovie() {
  const [heThongRap, setHeThongRap] = useState([]);

  useEffect(() => {
    https
      .get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP08")
      .then((res) => {
        console.log("res: ", res);
        setHeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  let renderDanhSachPhim = (danhSachPhim) => {
    return danhSachPhim.map((phim) => {
      return (
        <div className="p-5 flex space-x-5">
          <img
            src={phim.hinhAnh}
            className="w-32 h-40 object-cover flex-shrink-0"
            alt={phim.tenPhim}
          />
          <div className="grid grid-cols-4 w-full gap-5">
            {phim.lstLichChieuTheoPhim.slice(0, 8).map((lichChieu) => {
              // moment JS
              return (
                <div className="bg-green-300 rounded h-10 leading-10 text-center">
                  {moment(lichChieu.ngayChieuGioChieu).format(
                    "DD/MM/YYYY - HH:mm"
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  let renderHeThongRap = () => {
    return heThongRap.map((heThong, index) => {
      return {
        key: index,
        label: (
          <img className="w-10" src={heThong.logo} alt={heThong.tenCumRap} />
        ),
        children: (
          <Tabs
            tabPosition="left"
            defaultActiveKey="1"
            items={heThong.lstCumRap.map((cumRap) => {
              return {
                key: cumRap.maCumRap,
                label: (
                  <div className="text-left w-80 whitespace-normal">
                    <p className="text-green-600 font-bold">
                      {cumRap.tenCumRap}
                    </p>
                    <p className="truncate">{cumRap.diaChi}</p>
                  </div>
                ),
                children: renderDanhSachPhim(cumRap.danhSachPhim),
              };
            })}
          />
        ),
      };
    });
  };

  return (
    <div className="container">
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={renderHeThongRap()}
        onChange={onChange}
      />
    </div>
  );
}
