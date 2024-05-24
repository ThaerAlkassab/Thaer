import React, { useEffect } from "react";

export function RedirectBlog() {

  useEffect(() => {
    window.location.href = "https://blog.bluehouse.is/";
  }, []);

  return (
    <div>
      <p>redirecting...</p>
    </div>
  );
}
export function RedirectTripAdv() {

  useEffect(() => {
    window.location.href = "https://www.tripadvisor.com/Hotel_Review-g189970-d19827773-Reviews-Grotta_Northern_Lights-Reykjavik_Capital_Region.html";
  }, []);

  return (
    <div>
      <p>redirecting...</p>
    </div>
  );
}

