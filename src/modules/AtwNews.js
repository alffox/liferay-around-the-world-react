import React from "react";

class AtwNews extends React.Component {
  render() {
    return (
      <section>
        <div className="news">
          <ul className="list-group">
            <li className="list-group-item list-group-item-action active d-flex justify-content-between align-items-center mt-1">
              <img
                className="lazy img-fluid img-thumbnail news-picture"
                alt="Kyler Murray's Snap Clap Might Be A Problem - Deadspin"
                src="https://i.kinja-img.com/gawker-media/image/upload/s--3BPNfldp--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/qaxg12vjpz4lro3qq5em.jpg"
              />
              <a
                href="https://deadspin.com/kyler-murrays-snap-clap-might-be-a-problem-1837299279"
                target="_blank"
                rel="noopener noreferrer"
                className="list-group-item list-group-item-action active"
              >
                Kyler Murray's Snap Clap Might Be A Problem - Deadspin
              </a>
              <span className="badge badge-light badge-primary d-none d-xl-block">
                Deadspin.com
              </span>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default AtwNews;
