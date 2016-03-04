var React = require('react')
var request = require('superagent') ; 

    var ImagesSection = React.createClass({
          render: function(){
                var thumbImages = this.props.phone.images.map(function(img,index) {
                  return (
                          <li>
                           <img key={index} src={img} />
                        </li>
                        ) ;
                    }.bind(this) );
                var mainImage = (
                      <div className="phone-images">
                      <img src={this.props.phone.images[0]} 
                            className="phone" />
                    </div>
                    ) ;
              return (
                  <div>
                       {mainImage}
                       <h1>{this.props.phone.name}</h1>
                       <p>{this.props.phone.description}</p>
                       <ul className="phone-thumbs">
                           {thumbImages}
                       </ul>
                   </div>
                   );
          }
    })


    var Specification = React.createClass({
      render: function(){
            var phone = this.props.phone ;             
            var availability = phone.availability.map(function(avb,index) {
              return (
                       <dd key={index}>{avb}</dd>
                     ) ;
                }) ;
            var dimensions = phone.sizeAndWeight.dimensions.map(function(dim,index) {
              return (
                        <dd key={index}>{dim}</dd>
                     ) ;
                }) ;
          display = (
              <div>
                 <ul className="specs">
                  <li>
                    <span>Availability and Networks</span>
                    <dl>
                      <dt>Availability</dt>
                         {availability}
                    </dl>
                  </li>
                  <li>
                    <span>Battery</span>
                    <dl>
                      <dt>Type</dt>
                      <dd>{phone.battery.type}</dd>
                      <dt>Talk Time</dt>
                      <dd>{phone.battery.talkTime}</dd>
                      <dt>Standby time (max)</dt>
                      <dd>{phone.battery.standbyTime}</dd>
                    </dl>
                  </li>    
                  <li>
                    <span>Storage and Memory</span>
                    <dl>
                      <dt>RAM</dt>
                      <dd>{phone.storage.ram}</dd>
                      <dt>Internal Storage</dt>
                      <dd>{phone.storage.flash}</dd>
                    </dl>
                  </li>
                  <li>
                    <span>Connectivity</span>
                    <dl>
                      <dt>Network Support</dt>
                      <dd>{phone.connectivity.cell}</dd>
                      <dt>WiFi</dt>
                      <dd>{phone.connectivity.wifi}</dd>
                      <dt>Bluetooth</dt>
                      <dd>{phone.connectivity.bluetooth}</dd>
                      <dt>Infrared</dt>
                      <dd>{phone.connectivity.infrared}</dd>
                      <dt>GPS</dt>
                      <dd>{phone.connectivity.gps}</dd>
                    </dl>
                  </li>
                  <li>
                    <span>Android</span>
                    <dl>
                      <dt>OS Version</dt>
                      <dd>{phone.android.os}</dd>
                      <dt>UI</dt>
                      <dd>{phone.android.ui}</dd>
                    </dl>
                  </li>
                  <li>
                    <span>Size and Weight</span>
                    <dl>
                      <dt>Dimensions</dt>
                          {dimensions}
                       <dt>Weight</dt>
                      <dd>{phone.sizeAndWeight.weight}</dd>
                    </dl>
                  </li>    
                  <li>
                    <span>Display</span>
                    <dl>
                      <dt>Screen size</dt>
                      <dd>{phone.display.screenSize}</dd>
                      <dt>Screen resolution</dt>
                      <dd>{phone.display.screenResolution}</dd>
                      <dt>Touch screen</dt>
                      <dd>{phone.display.touchScreen}</dd>
                    </dl>
                  </li>
                  <li>
                    <span>Hardware</span>
                    <dl>
                      <dt>CPU</dt>
                      <dd>{phone.hardware.cpu}</dd>
                      <dt>USB</dt>
                      <dd>{phone.hardware.usb}</dd>
                      <dt>Audio / headphone jack</dt>
                      <dd>{phone.hardware.audioJack}</dd>
                      <dt>FM Radio</dt>
                      <dd>{phone.hardware.fmRadio}</dd>
                      <dt>Accelerometer</dt>
                      <dd>{phone.hardware.accelerometer}</dd>
                    </dl>
                  </li>    
                  <li>
                    <span>Camera</span>
                    <dl>
                      <dt>Primary</dt>
                      <dd>{phone.camera.primary}</dd>
                      <dt>Features</dt>
                      <dd>{phone.camera.features.join(', ')}</dd>
                    </dl>
                  </li>
                  <li>
                    <span>Additional Features</span>
                    <dd>{phone.additionalFeatures}</dd>
                  </li>              
                  </ul>            
            </div>
           )
            return (
                 <div>
                  {display}
              </div>
             );
      }
  });


    var PhoneDetail = React.createClass({
           getInitialState: function() {
               return { phone: null };
           },
         componentDidMount: function() {
            request.get(
                 'assets/phones/' + this.props.params.id + '.json', function(err, res) {
                     var json = JSON.parse(res.text);
                    if (this.isMounted()) {
                        this.setState({ phone : json});
              }
            }.bind(this));
          } ,
          render: function(){
              var display = <p>No phone details</p> ; 
                var phone = this.state.phone ;
              if (phone) {
                  display =  (
                        <div>
                      <ImagesSection phone={phone} />
                      <Specification  phone={phone} /> 
                       </div>
                       ) ;
              }
                return (
                        <div>
                      {display}
                    </div>
                    );
          }
        });

    exports.PhoneDetail = PhoneDetail ;