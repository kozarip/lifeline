import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useHistory } from 'react-router-dom';

const Pay: React.FC = () => {
  const history = useHistory();
  const clientId = 'AXL-Jt7dbmLsn9e7vhvDI1a8pckTwc_OcB71krEDpI7DLYCPPbCLAE3KwyycmQ8X_W-qspYuW9To7vzz';

  return (
    <div className="payBox">
      <PayPalButton
        createOrder={(data, actions) => {
          const name = (document.getElementById('name') as HTMLInputElement).value.split(' ');
          console.log((document.getElementById('name') as HTMLInputElement).value);
          const firstName = name[1] || '';
          const surName = name[0] || ''
          const email = (document.getElementById('email') as HTMLInputElement).value || '';
          return actions.order.create({
            payer: {
              name: {
                given_name: firstName,
                surname: surName
              },
              email_address: email,
            },
            purchase_units: [{
              description: 'A Te mesélő képed',
              amount: {
                currency_code: 'HUF',
                value: '20'
              }
            }],
            application_context: {
              shipping_preference: 'NO_SHIPPING'
            },
          });
        }}
        onApprove={(data, actions) => {
          // Capture the funds from the transaction
          return actions.order.capture().then(function(details) {
            history.push('/complete');
            // OPTIONAL: Call your server to save the transaction
            /* return fetch('/paypal-transaction-complete', {
              method: 'post',
              body: JSON.stringify({
                orderID: data.orderID
              })
            }); */
          });
        }}
        options={{
          currency: 'HUF',
          locale: 'hu_HU',
          clientId: clientId
        }}
      />
    </div>
  );
}

export default Pay;
