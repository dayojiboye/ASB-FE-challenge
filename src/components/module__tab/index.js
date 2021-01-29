import React from 'react';

import { ChevronRight } from '../../assets/svg';
import Card from '../ui/card';
import './styles.scss';

const moduleTab = () => {
  return (
    <div className="module_tab">
      <div className="module_tab__pagination">
        <a href="/">Divisions</a>
        <ChevronRight className="_tab_paginate_icon" />
        <a href="/">Module</a>
      </div>

      <div className="module_tab__metrics">
        <Card className="_tab_metrics_card">
          <h6>31454</h6>
          <span>Ongoing metric</span>
        </Card>

        <Card className="_tab_metrics_card">
          <h6>2344</h6>
          <span>Past metric</span>
        </Card>

        <Card className="_tab_metrics_card">
          <h6>14224</h6>
          <span>Missed metric</span>
        </Card>

        <Card className="_tab_metrics_card">
          <h6>635</h6>
          <span>Failed metric</span>
        </Card>

        <Card className="_tab_metrics_card">
          <h6>11334</h6>
          <span>Pending metric</span>
        </Card>
      </div>
    </div>
  );
};

export default moduleTab;
