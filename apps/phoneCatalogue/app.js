var ReactDOM = require('react-dom')
var React = require('react')
var phones = require('./data').allPhones ;
var _ = require('lodash');


var SelectBox = React.createClass({
    handleChange : function(e, type,value) {
        e.preventDefault();
        this.props.onUserInput( type,value);
    },
    handleTextChange : function(e) {
        this.handleChange( e, 'search', e.target.value);
    },
    handleSortChange : function(e) {
        this.handleChange(e, 'sort', e.target.value);
    },
    render: function(){
        return (
            <div className="col-md-10">
            <input type="text" placeholder="Search" 
            value={this.props.filterText}
            onChange={this.handleTextChange} />
            Sort by:
            <select id="sort" value={this.props.order } 
            onChange={this.handleSortChange} >
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
            </select>
            </div>
            );
    }
});



// TODO (missing component)
var PhoneItem = React.createClass({
    render: function(){
        return(
            <div>
            <li>
            <img src={this.props.phone.imageUrl} height="70" width="70"/>
            <a href={this.props.phone.name}>
            {this.props.phone.name}</a>
            <p>{this.props.phone.snippet}</p>
            </li>
            </div>
            )
    }
}); 







var FilteredPhoneList = React.createClass({
    render: function(){
        var displayedPhones = this.props.phones.map(function(phone) {
            return <PhoneItem key={phone.id} phone={phone} /> ;
        }) ;
        return (
            <div className="col-md-10">
            <ul className="phones">
            {displayedPhones}
            </ul>
            </div>
            ) ;
    }
});

var PhoneCatalogueApp = React.createClass({
    getInitialState: function(){
        return {search: '', sort:'name'};
    },
    handleChange: function(type, value){
        if(type == 'search'){
            this.setState({search:value});
        }else{
            this.setState({sort: value});
        }
    },

    render: function(){
    console.log('Criteria: Search= ' + this.state.search + ' ; Sort= ' +this.state.sort);
        var list = this.props.phones.filter(function(p){
            return p.name.toLowerCase().search(this.state.search.toLowerCase()) !=-1;
        }.bind(this));
        var filteredList = _.sortBy(list, this.state.sort);
        return (
            <div className="view-container">
            <div className="view-frame">
            <div className="container-fluid">
            <div className="row">
            <SelectBox onUserInput={this.handleChange } 
            filterText={this.state.search} 
            sort={this.state.sort} />
            <FilteredPhoneList phones={filteredList} />
            </div> 
            </div>                   
            </div>
            </div>
            );
    }
});



ReactDOM.render(
        <PhoneCatalogueApp phones={phones} />,
        document.getElementById('mount-point')
        );
