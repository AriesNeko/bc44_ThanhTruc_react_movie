import React, { useEffect, useState } from "react";
import { https } from "../../service/config";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
const { Meta } = Card;

export default function ListMovie() {
  const [movieArr, setMovieArr] = useState([]);

  useEffect(() => {
    https
      .get("/api/QuanLyPhim/LayDanhSachPhim/?maNhom=GP08")
      .then((res) => {
        setMovieArr(res.data.content);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  let renderMovieList = () => {
    return movieArr.map(({ hinhAnh, tenPhim, maPhim }) => {
      return (
        <Card
          key={maPhim}
          className="shadow-xl"
          hoverable
          style={{ width: 240 }}
          cover={
            <img className="h-60 object-cover" alt="example" src={hinhAnh} />
          }
        >
          <Meta title={tenPhim} />
          <NavLink
            to={`/detail/${maPhim}`}
            className="w-full inline-block text-center rounded-lg py-3 bg-rose-400 text-white font-bold mt-3 hover:scale-95 transition duration-700 cursor-pointer"
          >
            Xem Phim
          </NavLink>
        </Card>
      );
    });
  };
  return (
    <div className="container grid grid-cols-4 gap-5 py-3">
      {renderMovieList()}
    </div>
  );
}
