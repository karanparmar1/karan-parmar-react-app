import React from 'react';
import { GetFlagURLByCountryCode } from '../../utils/helper';
import classes from './table.module.css';

const Table = ({ data, columns, message, className, ...props }) => {
  return (
    <div className={classes.table_wrapper}>
      <table className={className} {...props}>
        <thead>
          <tr>
            {columns.map((name, i) => (
              <th key={i}>{name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {(message && (
            <tr className="table_message">
              <td colSpan="3">{message}</td>
            </tr>
          )) ||
            (data?.length > 0 &&
              data.map((items, i) => (
                <tr key={items.PlaceId}>
                  <td>{i + 1}</td>
                  <td>{items.PlaceName}</td>
                  <td className="country-cell">
                    {items.CountryName} &nbsp;&nbsp;
                    <img src={GetFlagURLByCountryCode(items.CountryId)} alt={items.CountryId} />
                  </td>
                </tr>
              )))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
