import { v4 as uuidv4 } from 'uuid';

//below is an object for a customer information, with key-value pairs
export const customerDetails = {
  firstname: uuidv4(),
  lastname: uuidv4(),
  postalcode: '91802',
};

// we can randomize and create a unique the strings above
// ideal randomized string can be a UUID found at https://www.uuidgenerator.net/

/*  Steps

1. Go to https://www.npmjs.com/package/uuid
2. Follow the installation instruction for your terminal
  > command:   npm install uuid
    > package will be installed under node modules called 'UUID'
3. import on the page you will use the UUID
4. Now you can use the function to create a UUID (see above)



*/
