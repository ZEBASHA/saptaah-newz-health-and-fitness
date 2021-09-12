import React from "react";
import img from "./image/logo.jpeg";
import Avatar from "@material-ui/core/Avatar";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import "./health.css";

export default function health() {
  const image_list = [
    ["top news", "https://source.unsplash.com/1080x400/?top health,news"],
    [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, commodi.",
      "https://source.unsplash.com/450x700/?health,news",
    ],
    [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, commodi.",
      "https://source.unsplash.com/450x700/?fitness,news",
    ],
    [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, commodi.",
      "https://source.unsplash.com/450x700/?vaccine,news",
    ],
    [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, commodi.",
      "https://source.unsplash.com/450x700/?economy,news",
    ],
  ];
  return (
    <>
      <div className="logo">
        <img src={img} alt=" " />
      </div>
      <hr />
      <div className="header">
        <Avatar className="back_arrow">
          <ArrowBackIosSharpIcon />
        </Avatar>
        <h2>Health & Fitness.</h2>
      </div>
      <div className="busy_content">
        <div className="top_image">
          <img src={image_list[0][1]} alt="" />
          <div className="top_text">
            <h4>{image_list[0][0]}</h4>
          </div>
        </div>
        <div className="images">
          {image_list.slice(1).map((text) => {
            return (
              <div className="image">
                <div className="bg_image">
                  <img src={text[1]} alt="" />
                  <div className="text">
                    <h4>{text[0]}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
