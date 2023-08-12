import React from "react";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <div className="notFound">
      <div class="container">
        <h1>An error as occured.</h1>
        <h1>
          {" "}
          <span class="ascii">(╯°□°）╯︵ ┻━┻</span>
        </h1>
        <a href="#">Go back to Homepage</a>
      </div>
    </div>
  );
}
