import React, { Component } from 'react';

export default class NewsCard extends Component {
    render() {
        let { title, description, imageurl, newsurl, author, date, channel } = this.props;
        return <div  >
            <div className="card"/*style={{width: "18rem"}}*/>

                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
                    {channel}
                    <span className="visually-hidden"></span>
                </span>

                <img src={!imageurl ? "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/10/08/929944-kvitova.jpg" : imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}... </p>
                    <h7 className="card-title">{!author ? 'unknown' : author} on {new Date(date).toGMTString()}</h7>
                    <a href={newsurl} target="_blank" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>;
    }
}
