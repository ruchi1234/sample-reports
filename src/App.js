import React from 'react';
const  data       = require('./client.json')
const  clientdata = data.data

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* Header Left section */}
        <div className="cobalt_img">
          <div className="cobalt_img_inner"><img src="../assest/images/img1.png" alt="" title="" /></div>
        </div>
        {/* End Header Left section */}

        {/* Header Right section */}
        <div className="cobalt_title">
          <div className="cobalt_title_inner">
            <img src="../assest/images/logo.png" alt="" title="" />
            <div className="weekply_rprt">
              <a href="">WEEKLY REPORT</a>
            </div>
            <div className="weekply_rprt_date">{clientdata.date}</div>
          </div>
            <h2 className="your_stats">Your coverage stats this week</h2>
            <h3 className="no_incidents">{clientdata.Incidents}</h3>
            <p className="incident_events"> Incidents are urgent events in which a member of the {clientdata.team} was immediately notified. </p>
        </div>
        {/*End Header Right section */}

        <div className="clear"></div>

        {/* Personnel Detected section */}
        <div className="auth_sec">
          <div className="auth_sec_iner">
            <p className="auth_title"> Authenticated	</p>
            <div className="authtitle_dynamic">
              <p>{ clientdata.authenticated }</p>
            </div>
            <p className="patrols_title">Patrols</p>
            <div className="patrols_dynamic">
              <p>{ clientdata.patrols }</p>
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
            We <span> authenticated {clientdata.authenticated} people</span> in your space this week and <span>completed {clientdata.patrols} patrols.</span>
        </p>
      </div>
      {/* Personnel Detected section ends */ }

      {/* What have we been up to? section */}
      <div className="we_up">
        <div className="we_up_inner">
          <p>What have we been up to?</p>
        </div>
      </div>
      <div className="container">
        <div className="customer_channel">
          <img src="../assest/images/bullet.png" alt="" title="" className="comon_width" />
            <p> Authenticated<br /> {clientdata.customer_channel} </p>
        </div>
        <div className="company_name">
          <img src="../assest/images/bullet.png" alt="" title="" className="comon_width" />
          <p> Authenticated<br /> {clientdata.company_name}</p>
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
            <p> {clientdata.authenticated}</p>
          </div>
        </div>
        <div className="push_down">
          <h2>Personnel Authenticated</h2>
          <p>
            {clientdata.authenticated_text}
				  </p>
        </div>
        <div className="clear"></div>
        <div className="patrols_sec_btm">
          <div className="patrols_sec_btm_inner">
            <p>{clientdata.patrols}</p>
          </div>
        </div>
        <div className="coulpe_para">
          <h2>Patrols</h2>
          <p>{clientdata.patrol_text}</p>
        </div>
        <div className="clear"></div>
        <div className="footer_img">
          <img src="../assest/images/img3.jpg" alt="" title="" />
        </div>
        <div className="clear"></div>
        <div className="page_footer">
            <p> We covered a lot of ground, 21.78 miles to be exact. At that
                rate, it would take 120 weeks to cross Australia! </p>   
            <div  className="page_footer_circle">  <img src="../assest/images/earth.jpg" alt="" title="" /> </div>      
        </div>        
      </div>
      {/* End What have we been up to? section */}
    </div>
  );
}
export default App;
