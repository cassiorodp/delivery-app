import React from "react";
import { useHistory } from 'react-router-dom';

export default function cardMyRequests({ orders, token }) {
  const history = useHistory();

  const { role } = token;
  const { id, saleDate, status, totalPrice, deliveryAdress } = orders;

  const newDate = new Date(saleDate);
  const day = newDate.getDate().toString().padStart(2, '0');
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
  const year = newDate.getFullYear();
  const dateFormat = `${day}/${month}/${year}`;

  const ADRESS_SELLER = 'seller_orders__element-card-address-';

  function detailOrder(idUser) {
    history.push(`/${role}/orders/${idUser}`);
  }

  return (
    <button
      type="button"
      onClick={ () => { detailOrder(id) }}
    >

      <div>
        <p>Pedido</p>
        <p
          data-testid={
            `${role}_orders__element-order-id-${id}`
          }
        >
          {id}
        </p>
      </div>

        <div
          data-testid={ `${role}_orders__element-delivery-status-${id}` }
        >
          <p>{status}</p>
        </div>

        <div>
          <p
            data-testid={ `${role}_orders__element-order-date-${id}` }
          >
            {dateFormat}
          </p>
          <p
            data-testid={ `${role}_orders__element-card-price-${id}` }
          >
            {totalPrice.replace('.', ',')}
          </p>
        </div>

        <div>
          <h1>
            {role === 'seller'
              ? (
                <p data-testid={ `${ADRESS_SELLER}${id}` }>
                  {deliveryAdress}
                </p>
              )
              : null}
          </h1>
        </div>
    </button>
  )
}
