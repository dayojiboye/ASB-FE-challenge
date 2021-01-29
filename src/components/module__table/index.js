import React from 'react';

import { TABLE_DATA } from '../../utils/table_data';
import { DropdownCircle, Ellipsis } from '../../assets/svg';
import './styles.scss';

const moduleTable = () => {
  const { data } = TABLE_DATA;

  return (
    <div className="module_table_wrapper">
      <table className="module_table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" aria-label="select all" />
            </th>
            <th>NAME</th>
            <th>LOCATION</th>
            <th>STATUS</th>
            <th>ENTRIES</th>
            <th colSpan="2">RISK PROFILE</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.name}>
                <td className="_select_column">
                  <span>
                    <input type="checkbox" aria-label="select item" />
                  </span>

                  <button aria-label="dropdown toggle">
                    <DropdownCircle />
                  </button>
                </td>

                <td className="_name_column">
                  <span>{item.name}</span>
                </td>

                <td className="_location_column">
                  <span className="_location_state">{item.state}</span>
                  <span>{item.address}</span>
                </td>

                <td className="_status_column">
                  <span data-error-status={item.errorStatus}>
                    {item.errorMessage}
                  </span>
                </td>

                <td className="_entry_column">
                  <span className="_entry_count">{item.entries}</span>
                  <span>{item.type}</span>
                </td>

                <td className="_risk_column">
                  <span data-risk={item.riskLevel}>{item.riskLevel}</span>
                </td>

                <td className="_dialogue_btn">
                  <button aria-label="dialogue toggle">
                    <Ellipsis />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default moduleTable;
