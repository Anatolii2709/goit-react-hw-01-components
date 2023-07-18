import { Head, Row, Table, TableRow } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <thead>
        <tr>
          <Head>Type</Head>
          <Head>Amount</Head>
          <Head>Currency</Head>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Row id={id} key={id}>
              <TableRow>{type}</TableRow>
              <TableRow>{amount}</TableRow>
              <TableRow>{currency}</TableRow>
            </Row>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
