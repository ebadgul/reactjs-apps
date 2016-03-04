 var ReactDOM = require('react-dom')
    var React = require('react')
    var api =  require ('./stubAPI').api;
    var _ = require('lodash');

        var Form = React.createClass({
               getInitialState: function() {
                   return { title: '', link: ''};
                },
                handleAdd: function(e){
                    e.preventDefault();
                    var title = this.state.title.trim();
                    var link = this.state.link.trim();
                    if(!title || !link){
                        return;
                    }
                    this.props.addHandler(title, link);
                    this.setState({status: ''})
                },
                handleAddTitle: function(e){
                    this.setState({title: e.target.value});
                },
                handleAddLink: function(e) {
                    this.setState({link: e.target.value});
                },
                render : function() {
                     return (
                       <form style={{marginTop: '30px'}}>
                          <h3>Add a new post</h3>
                          <div className="form-group">
                            <input type="text"
                              className="form-control" placeholder="Title"
                              value={this.state.title} ></input>
                          </div>
                          <div className="form-group">
                            <input type="text"
                               className="form-control" placeholder="Link"
                               value={this.state.link} ></input>
                          </div>
                          <button type="submit" className="btn btn-primary" >Post</button>
                        </form>
                      );
                  }
           });

        var NewsItem = React.createClass({
                handleVote : function() {
                     this.props.upvoteHandler(this.props.post.id);
                },
                render : function() {
                    var lineStyle = {
                         fontSize: '20px', marginLeft: '10px'  };
                    var line ;
                    if (this.props.post.link ) {
                       line = <a href={this.props.post.link} >
                                    {this.props.post.title} </a> ;
                    } else {
                       line = <span>{this.props.post.title} </span> ;
                    }
                  return (
                        <div >
                          <span className="glyphicon glyphicon-thumbs-up" 
                              onClick={this.handleVote} ></span>
                          {this.props.post.upvotes}
                          <span style={lineStyle} >{line}<span>
                              <a href={'#/posts/' + this.props.post.id }>Comments</a>
                            </span>
                          </span>
                        </div>  
                );
                }
           }) ;

           var NewsList = React.createClass({
                render : function() {
                  var items = this.props.posts.map(function(post,index) {
                         return <NewsItem key={index} post={post} 
                                  upvoteHandler={this.props.upvoteHandler}  /> ;
                     }.bind(this) )
                  return (
                    <div>
                          {items}
                          </div>
                    );
                }
           }) ;  

          var HackerApp = React.createClass({ 
              incrementUpvote : function(id) {
                   api.upvote(id) ;
                   this.setState({});
              },    
              render: function(){
                  var posts = _.sortBy(api.getAll(), function(post) {
                          return - post.upvotes;
                       }
                    );
                  return (
                    <div className="container">
                       <div className="row">
                          <div className="col-md-6 col-md-offset-3">
                             <div className="page-header">
                                <h1>Hacker News</h1>
                                   <NewsList posts={posts} 
                                        upvoteHandler={this.incrementUpvote} />
                                   <Form  />
                             </div>
                           </div>
                        </div>
                      </div>
                  );
              }
          });

          ReactDOM.render(
              <HackerApp />,
              document.getElementById('mount-point')
          );