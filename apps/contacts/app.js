 var ReactDOM = require('react-dom')
    var React = require('react')

    var ContactForm = React.createClass({
        render: function(){
          return (
            <tr>
              <td>
              <input type="text" className="form-control" />
              </td>
              <td>
              <input type="text" className="form-control"/>
              </td>
              <td>
              <input type="text" className="form-control" />
              </td>
              <td>
              <input type="button" className="btn btn-primary" value="Add"/>
              </td>
            </tr>
            )
        }
      });

    var Contact = React.createClass({
          render: function(){
              return (
                      <tr>
                      <td>{this.props.contactItem.name}</td>
                      <td>{this.props.contactItem.address}</td>
                      <td>{this.props.contactItem.phone_number}</td>
                      </tr>

                ) ;
            }
          });

    var ContactList = React.createClass({
          render: function(){
              var contactRows = this.props.contacts.map(function(item){
                return <Contact key={item.phone_number} contactItem={item}/>
              });  // TODO
              return (
                  <tbody >
                      {contactRows}
                      <ContactForm />
                  </tbody>
                ) ;
            }
          });

    var ContactsTable = React.createClass({
          render: function(){
              return (
                <table className="table table-bordered">
                      <thead>
                        <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th></th>
                        <th></th>
                        </tr>
                      </thead>
                      <ContactList contacts={this.props.contacts} />
                </table>
                );
          }
      });

       var ContactsApp = React.createClass({
          render: function(){
              return (
                    <div>
                       <h1>Contact List.Ebad</h1>
                       <ContactsTable contacts={this.props.contacts}/>
                    </div>
              );
          }
      });


       var contacts = [
           {
                "name": "Contact 1",
                "address": "123 Test St",
                "phone_number": "132-3212"
            },

            {
                "name": "Contact 2",
                "address": "23 Main St",
                "phone_number": "934-4329"
            },

            {
                "name": "Contact 3",
                "address": "4 Lower St",
                "phone_number": "432-5832"
            },

            {
                "name": "Contact 4",
                "address": "49 Upper Street",
                "phone_number": "934-4290"
            },
            {
                "name": "Ebad Gul",
                "address": "5 Beech Square",
                "phone_number": "0868960815"
            }

          ] ; 

    ReactDOM.render(
      <ContactsApp  contacts={contacts} />,
      document.getElementById('mount-point')
    );
