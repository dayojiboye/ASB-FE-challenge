import React from 'react';

import Card from '../ui/card';
import './styles.scss';

const moduleSider = () => {
  return (
    <div className="module_sider">
      <Card className="module_sider__division_summary">
        <h6 className="_division_summary_header">Division Summary</h6>

        <ul className="_division_summary_contact">
          <li>0801 234 5678</li>
          <li>asbfefr@gmail.com</li>
          <li>Mojidi, Lagos</li>
          <li>
            <a href="/">2 Journal entries</a>
          </li>
          <li>24 fingerprints enrolled</li>
        </ul>
      </Card>

      <Card className="module_sider__module_history">
        <h6 className="_module_history_header">Module History</h6>

        <ul className="_module_history_log">
          <li>
            <span>
              Searched “Journal Entries” on Division module
              <span className="_module_history_log_date">
                22:10 15/09/2020 <span className="_bullet_dot">Web</span>
              </span>
            </span>
          </li>
          <li>
            <span>
              Searched “Fingerprint record” on Division module
              <span className="_module_history_log_date">
                22:10 15/09/2020 <span className="_bullet_dot">Web</span>
              </span>
            </span>
          </li>
          <li>
            <span>
              Searched “Journal Entries” on Division module
              <span className="_module_history_log_date">
                22:10 15/09/2020 <span className="_bullet_dot">Web</span>
              </span>
            </span>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default moduleSider;
