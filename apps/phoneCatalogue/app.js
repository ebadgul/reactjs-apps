    var ReactDOM = require('react-dom')
    var React = require('react')
    var phones = require('./data').allPhones ;

    var SelectBox = React.createClass({
      render: function(){
           return (
                <div className="col-md-10">
              <input type="text" placeholder="Search" />
              Sort by:
              <select>
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
      render: function(){
          return (
                <div className="view-container">
                <div className="view-frame">
                   <div className="container-fluid">
                   <div className="row">
                   <h1>Phone Catalogue...</h1>
                       <SelectBox />
                       <FilteredPhoneList phones = {this.props.phones}/>
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
