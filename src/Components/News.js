import React, { Component } from 'react';

import NewsCard from './NewsCard';


export default class News extends Component {
    articles = [
       /* {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Chandelis Duster and Daniella Diaz, CNN",
            "title": "Sanders says it was 'absolutely' appropriate for Sinema to be censured - CNN",
            "description": "Vermont Sen. Bernie Sanders said Sunday it was appropriate for the Arizona Democratic Party to censure moderate Sen. Kyrsten Sinema for her vote against a filibuster carve-out for voting rights, a key priority for Democrats.",
            "url": "https://www.cnn.com/2022/01/23/politics/bernie-sander-kyrsten-sinema-cnntv/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220123100627-bernie-sanders-sotu-0123-super-tease.jpg",
            "publishedAt": "2022-01-23T15:58:00Z",
            "content": "(CNN)Vermont Sen. Bernie Sanders said Sunday it was appropriate for the Arizona Democratic Party to censure moderate Sen. Kyrsten Sinema for her vote against a filibuster carve-out for voting rights,… [+3199 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Natasha Bertrand and Devan Cole, CNN",
            "title": "Blinken says 'a single additional Russian force' entering Ukraine would trigger US response - CNN",
            "description": "Secretary of State Antony Blinken amplified his warning against a Russian invasion of Ukraine, saying \"a single additional Russian force\" entering Ukraine \"in an aggressive way\" would result in a severe response by the US and its allies.",
            "url": "https://www.cnn.com/2022/01/23/politics/antony-blinken-russian-troops-ukraine-cnntv/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220119095650-blinken-kyiv-011922-super-tease.jpg",
            "publishedAt": "2022-01-23T15:53:00Z",
            "content": "Washington (CNN)Secretary of State Antony Blinken amplified his warning against a Russian invasion of Ukraine, saying \"a single additional Russian force\" entering Ukraine \"in an aggressive way\" would… [+2842 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Greg Joyce",
            "title": "The Packers problem that could drive Aaron Rodgers out of Green Bay - New York Post ",
            "description": "If the controversial star quarterback does keep playing, it’s hard to see it happening in Green Bay.",
            "url": "https://nypost.com/2022/01/23/aaron-rodgers-wants-no-part-of-a-rebuild-as-packers-face-cap-hell/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/01/newspress-collage-20934766-1642951950784.png?w=1024",
            "publishedAt": "2022-01-23T15:39:00Z",
            "content": "Aaron Rodgers’ future is up in the air after Saturday night, both for the Packers and the NFL.\r\nBut if the controversial star quarterback does keep playing, it’s hard to see it happening in Green Bay… [+1908 chars]"
        },
    */ ]
    constructor(category) {
        super(category);
        this.state = {
            articles: [], //this.articles
            page:1
            //loading:false
        }
        document.title= `${this.props.category} -News Shorts`;
    }
   async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=483fcb320b724cc5a25127a9e4409a10&f=sports&page=1&pageSize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parseddata = await data.json()
        console.log(parseddata);
        this.setState({
            articles:parseddata.articles,
            totalResults:parseddata.totalResults
        })
    }
    prevhandler = async ()=>{
        console.log("prev")
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=483fcb320b724cc5a25127a9e4409a10&f=sports&page=${this.state.page -1}&pageSize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parseddata = await data.json()
        console.log(parseddata);
        this.setState({
            page:this.state.page-1,
            articles:parseddata.articles
            
        })
        
    }

    nexthandler= async ()=>{
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/6)){       // 1 is the page size

        }
        else{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=483fcb320b724cc5a25127a9e4409a10&f=sports&page=${this.state.page +1}&pageSize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parseddata = await data.json()
        console.log(parseddata);
        this.setState({
            
            page:this.state.page + 1,
            articles:parseddata.articles
            
        })
    }
    }
    render() {
        return <div className='container mt-3'>
            <h1 className='text-center'style={{marginTop:'50px'}}>{this.props.category} </h1>
            <img src="loading.gif" alt=""/>
            <div className='row'>
                {this.state.articles.map((element) => {
                    return <div className='col-4' key={element.url}>
                        <NewsCard title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,70):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} channel={element.source.name} />
                    </div>
                })}

            </div>
            <br></br>
            <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page<=1} type="button" class="btn btn-dark"onClick={this.prevhandler}>PREVIOUS PAGE</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/1)} type="button" class="btn btn-dark"onClick={this.nexthandler}>NEXT PAGE</button>
            </div>


        </div>;
    }
}
