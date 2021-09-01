import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
const Blog = () => {
  return (
    <div>
      <h1>
        <FontAwesomeIcon icon={faBlog} />
        Blog
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi odit
        similique eius voluptas cumque! Tempora quas quis at, culpa tenetur est
        fuga ipsum odio dolorem consequatur ratione a molestiae qui!
      </p>
    </div>
  );
};

export default Blog;
