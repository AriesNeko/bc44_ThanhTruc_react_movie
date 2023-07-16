import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { https } from "../../service/config";
import { Progress } from "antd";

export default function DetailPage() {
  const [movie, setMovie] = useState({});
  // useParam() => lấy url hiện tại của browser
  let { id } = useParams();
  useEffect(() => {
    console.log(id);
    https
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((res) => {
        console.log("res: ", res);
        setMovie(res.data.content);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  return (
    <div className="container flex items-center justify-center space-x-5 py-5">
      <img width={200} src={movie.hinhAnh} alt="" />
      <h2>{movie.tenPhim}</h2>
      <Progress
        type="circle"
        percent={movie.danhGia * 10}
        format={(percent) => `${percent / 10} Điểm`}
      />
    </div>
  );
}
