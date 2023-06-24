import React from "react";
import ContentLoader from "react-content-loader";

export const TextContentLoader = ({ width, height }) => (
  <ContentLoader
    speed={2}
    width={width}
    height={height}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" width={width} height={height} />
  </ContentLoader>
);

export default TextContentLoader;
