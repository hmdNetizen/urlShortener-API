import React from "react";
import ShortenedUrlItem from "./ShortenedUrlItem";

const ShortenedUrl = ({ links }) => {
  return links.map((link) => <ShortenedUrlItem key={link.id} link={link} />);
};

export default ShortenedUrl;
