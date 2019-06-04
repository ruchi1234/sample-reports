import React from 'react';
const data = require('./client')
function App() {
  return (
    <div className="App">
      <div className="container">

        {/* Header Left section */}
        <div className="cobalt_img">
          <div className="cobalt_img_inner"><img src="../assest/images/img1.png" alt="" title="" /></div>
        </div>
        {/*End Header Left section */}

        {/* Header Right section */}
        <div className="cobalt_title">
          <div className="cobalt_title_inner">
            <img src="../assest/images/logo.png" alt="" title="" />
            <div className="weekply_rprt">
              <a href="">WEEKLY REPORT</a>
            </div>
            <div className="weekply_rprt_date">21-05-2019</div>
          </div>
            <h2 className="your_stats">Your coverage stats this week</h2>
            <h3 className="no_incidents">No incidents this week.</h3>
            <p className="incident_events"> Incidents are urgent events in which a member of the {data.data.team} was immediately notified. </p>
        </div>
        {/*End Header Right section */}

        <div className="clear"></div>

        {/* Authenticate Left section */}
        <div className="auth_sec">
          <div className="auth_sec_iner">
            <p className="auth_title"> Authenticate	</p>
            <div className="authtitle_dynamic">
              <p>{data.data.authenticated}</p>
            </div>
            <p className="patrols_title">Patrols</p>
            <div className="patrols_dynamic">
              <p>{data.data.patrols}</p>
            </div>
            <p className="robots_title">Robots</p>
            <div className="robots_title_div">
              <div className="robots_title_div_inner"><img src="../assest/images/img2.jpg" alt="" title="" /></div>
            </div>
          </div>
        </div>
        <div className="personal_right">
          <p className="personal_detected"> Personnel Detected </p>
          <img src="../assest/images/chart.jpg" alt="" title="" className="chart_img" />
          <p className="cobalt_schedule"> Your Cobalt Patrol Schedule </p>
        </div>
        <div className="clear"></div>
        <p className="space_week">
          We <span>authenticated {data.data.authenticated} people</span> in your space this week and <span>completed {data.data.patrols} patrols.</span>
        </p>
      </div>
      {/* Authenticate Right section */}

      {/* What have we been up to? section */}
      <div className="we_up">
        <div className="we_up_inner">
          <p>What have we been up to?</p>
        </div>
      </div>

      <div className="container">
        <div className="yelp_channel">
          <img src="../assest/images/bullet.png" alt="" title="" className="comon_width" />
          <p> Authenticated<br />Yelp Personnel
				</p>
        </div>
        <div className="auth_right">
          <img src="../assest/images/bullet.png" alt="" title="" className="comon_width" />
          <p> Authenticated<br />Facilities Personnel	</p>
        </div>
        <div className="clear"></div>

        <div className="completed_partols">
          <img src="../assest/images/bullet.png" alt="" title="" className="comon_width" />
          <p> Completed patrols</p>
        </div>
        <div className="reported_inc">
          <img src="../assest/images/bullet.png" alt="" title="" className="comon_width" />
          <p> Reported Incidents</p>
        </div>
        <div className="clear"></div>

        <div className="auth_bottom">
          <div className="auth_bottom_inner">
            <p> {data.data.authenticated}</p>
          </div>
        </div>
        <div className="push_down">
          <h2>Personnel Authenticated</h2>
          <p>
            {data.data.authenticated_text}
				</p>
        </div>
        
        <div className="clear"></div>

        <div className="patrols_sec_btm">
          <div className="patrols_sec_btm_inner">
            <p>{data.data.patrols}</p>
          </div>
        </div>
        <div className="coulpe_para">
          <h2>Patrols</h2>
          <p>{data.data.patrol_text}</p>
        </div>
        <div className="clear"></div>

        <div className="footer_img">
          <img src="../assest/images/img3.jpg" alt="" title="" />
        </div>
        <div className="clear"></div>
          
        <div className="page_footer">
            <p>We covered a lot of ground, 21.78 miles to be exact. At that
               rate, it would take 120 weeks to cross Australia! </p>   
            <div  className="page_footer_circle">  <img src="../assest/images/earth.jpg" alt="" title="" /> </div>      
        </div>        
      </div>
      {/* End What have we been up to? section */}
    </div>
  );
}
export default App;
