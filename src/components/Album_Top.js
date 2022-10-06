import React from "react";
import { useGlobalContext } from "../context";

export const Album_Top = () => {
  const { musicArray, error } = useGlobalContext();

  return (
    <article>
      <h1>Results Songs</h1>
      {error ? (
        <h3>Sorry I couldn't find the song 💥</h3>
      ) : (
        <div className="flex flex-wrap justify-center">
          {musicArray.map((song, index) => {
            const {
              key,
              url,
              title,

              images: { coverart },
            } = song.track;

            return (
              <div key={key} className="album">
                <img src={coverart} alt={title} />
                <a href={url} target="_blank">
                  {title}
                </a>
              </div>
            );
          })}
        </div>
      )}
    </article>
  );
};
