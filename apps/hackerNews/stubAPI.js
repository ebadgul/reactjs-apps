var _ = require('lodash');

var posts = [
{  id: 1 ,
    title : 'India - Tiger population sees 30% increase.',
    link : 'http://www.bbc.com/news/world-asia-30896028',
    username : 'jbloggs',
    comments : [],
    upvotes : 10
},
{ 
    id: 2,
    title : 'The button that is not.',
    link : 'http://blog.nuclearsecrecy.com/2014/12/15/button-isnt/',
    username : 'notme',
    comments : [],
    upvotes : 12
},
{ 
    id: 3,
    title : 'Google Nears $1B Investment in SpaceX',
    link : null,
    username : 'notme',
    comments : [],
    upvotes : 12
},
{ 
    id: 4,
    title : 'Coinbase Raises $75M from DFJ Growth, USAA, and More',
    link : 'http://blog.coinbase.com/post/108642362357/coinbase-raises-75m-from-dfj-growth-usaa-nyse',
    username : 'psmith',  
    comments : [],
    upvotes : 2
}
] ;
var stubAPI = {
    getAll : function() {
        return posts ;
    },
    add : function(t,l) {
        var id = 1 ;
        var last = _.last(posts) ;
        if (last) {
            id = last.id + 1 ;
        }
        console.log( 'Id =  ' + id);
        posts.push({ 'id': id,  
            title: t, link : l, username: '', comments: [], upvotes: 0 }) ;

    },
    upvote : function(id) {
        var index = _.findIndex(posts, function(post) {
            return post.id == id;
        } );      
        if (index != -1) {                 
            posts[index].upvotes = posts[index].upvotes + 1 ;
        }
    }
}
exports.api = stubAPI ;
