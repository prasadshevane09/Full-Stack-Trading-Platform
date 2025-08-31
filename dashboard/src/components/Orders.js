import React from 'react';
import { orders } from '../data/data';
import './Orders.css';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

function Orders() {
  const allOrders = orders;

  return (
    <div className="orders-container">
      <h2>Order Book ({allOrders.length})</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Instrument</TableCell>
              <TableCell align="right">Qty.</TableCell>
              <TableCell align="right">Avg. cost</TableCell>
              <TableCell align="right">LTP</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allOrders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} style={{ textAlign: 'center', padding: '2rem' }}>
                  <h4>No orders found.</h4>
                </TableCell>
              </TableRow>
            ) : (
              allOrders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {order.name}
                  </TableCell>
                  <TableCell align="right">{order.qty}</TableCell>
                  <TableCell align="right">₹{order.avg.toFixed(2)}</TableCell>
                  <TableCell align="right">₹{order.price.toFixed(2)}</TableCell>
                  <TableCell align="right">{order.status}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Orders;