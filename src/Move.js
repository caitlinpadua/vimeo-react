import React, { Component } from 'react'

export default class Move extends Component {
    render() {
        return (
            <div className="move">
                <div className ="row flex-column-reverse flex-md-row">
                    <div className="col-xs-6 col-md-6">
                        <img src="https://i.vimeocdn.com/video/590587169_530x315.jpg" className="img-fluid"/>
                    </div>

                  
                    <div className="col-xs-6 col-md-6">
                    <h3 className="secondDiv">MOVE</h3>
                                    <p className="secondDiv">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Morbi fringilla ornare luctus. Suspendisse id velit aliquet, 
                                        venenatis ipsum a, dignissim libero. Praesent maximus felis at 
                                        orci semper, commodo vehicula sapien elementum. Fusce nec venenatis 
                                        dolor, non hendrerit ipsum. Morbi eget mollis augue. Duis sed massa 
                                        vel massa auctor gravida. Aliquam erat volutpat. Phasellus est augue, 
                                        pharetra in sodales mollis, convallis ut enim.
                                    </p>  
                    </div>

                </div>
                
            </div>
        )
    }
}
