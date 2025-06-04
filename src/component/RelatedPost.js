import Image from "next/image";
import React from "react";

export default function RelatedPost(props) {
  return (
    <>
      <section className="related_section">
        <div className="container">
          <div className="main_heading">
            <h2 className="title">{props.title}</h2>
          </div>
          <div className="related_grid">
            {props.articles &&
              props.articles.map((item, i) => {
                return (
                  <div className="related_card" key={i}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      title={item.title}
                      width={228}
                      height={229}
                      className="img_fluid"
                    />
                    <div className="card_body">
                      <h3 className="title">{item.title}</h3>
                      <p className="para">{item.description}</p>
                      <div className="author">
                        By <span>{item.author}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
