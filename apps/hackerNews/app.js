    var ReactDOM = require('react-dom')
    var React = require('react')

    var Form = React.createClass({
          render : function() {
               return (
                   <form style={{marginTop: '30px'}}>
                      <h3>Add a new post</h3>

                      <div className="form-group">
                        <input type="text"
                          className="form-control"
                          placeholder="Title"></input>
                      </div>
                      <div className="form-group">
                        <input type="text"
                        className="form-control"
                        placeholder="Link"></input>
                      </div>
                      <button type="submit" className="btn btn-primary">Post</button>
                    </form>
                   );
            }
     });

     var NewsItem = React.createClass({
          render : function() {
              var divStyle = {
                   fontSize: '20px', 
                   marginLeft: '10px' 
                  };
              var line ;
              if (this.props.post.link ) {
                 line = <a href={this.props.post.link} >
                {            this.props.post.title} </a> ;
              } else {
                 line = <span>{this.props.post.title} </span> ;
              }
              return (
                  <div >
                    <span className="glyphicon glyphicon-thumbs-up"></span>
                    {this.props.post.upvotes}
                    <span style={divStyle} >{line}<span>
                        <a href={'#/posts/' + this.props.post.id }>Comments</a>
                      </span>
                    </span>
                  </div>  
                  );
          }
     }) ;

    // TODO (missing component)
    var NewsList = React.createClass({
            render:function(){
                    var displayPosts = this.props.posts.map(function(post){
                        return <NewsItem key={post.title} post={post}/>;
                    });
                    return (
                        <div className="col-md-10">
                        <ul className="phones">
                            {displayPosts}
                            </ul>
                            </div>
                        );
            }
    });

    




     var HackerApp = React.createClass({
        render: function(){
            return (
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                           <div className="page-header">
                             <h1>Hacker News.</h1>
                             <NewsList posts = {this.props.posts}/>
                             <Form/>
                           </div>
                       </div>
                      </div>
                    </div>
            );
        }
    });

    var posts = [
             {   title : 'India - Tiger population sees 30% increase.',
                link : 'http://www.bbc.com/news/world-asia-30896028',
                username : 'jbloggs',
                comments : [],
                upvotes : 10
              },
             { 
                title : 'The button that is not.',
                link : 'http://blog.nuclearsecrecy.com/2014/12/15/button-isnt/',
                username : 'notme',
                comments : [],
                upvotes : 12
              },
              { 
                title : 'Google Nears $1B Investment in SpaceX',
                link : null,
                username : 'notme',
                comments : [],
                upvotes : 12
              },
              { 
                title : 'Coinbase Raises $75M from DFJ Growth, USAA, and More',
                link : 'http://blog.coinbase.com/post/108642362357/coinbase-raises-75m-from-dfj-growth-usaa-nyse',
                username : 'psmith',  
                comments : [],
                upvotes : 2
              }
          ] ;

    ReactDOM.render(
      <HackerApp posts={posts} />,
      document.getElementById('mount-point')
    );
