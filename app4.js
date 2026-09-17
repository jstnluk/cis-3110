const rawJsonData = `
[
  {
    "customerId": "CUST-001",
    "firstName": "Jordan",
    "lastName": "Lee",
    "email": "jordan.lee@example.com",
    "phone": "555-1001",
    "address": "142 Cedar Ave",
    "city": "Los Angeles",
    "state": "CA",
    "zipCode": "90012",
    "lastPurchase": "2026-08-15",
    "membershipTier": "Gold"
  },
  {
    "customerId": "CUST-002",
    "firstName": "Maya",
    "lastName": "Patel",
    "email": "maya.patel@example.com",
    "phone": "555-1002",
    "address": "875 Harbor Blvd",
    "city": "Long Beach",
    "state": "CA",
    "zipCode": "90802",
    "lastPurchase": "2026-07-29",
    "membershipTier": "Silver"
  },
  {
    "customerId": "CUST-003",
    "firstName": "Ethan",
    "lastName": "Nguyen",
    "email": "ethan.nguyen@example.com",
    "phone": "555-1003",
    "address": "320 Magnolia St",
    "city": "Anaheim",
    "state": "CA",
    "zipCode": "92805",
    "lastPurchase": "2026-08-20",
    "membershipTier": "Gold"
  },
  {
    "customerId": "CUST-004",
    "firstName": "Sofia",
    "lastName": "Martinez",
    "email": "sofia.martinez@example.com",
    "phone": "555-1004",
    "address": "611 Grand Ave",
    "city": "San Diego",
    "state": "CA",
    "zipCode": "92101",
    "lastPurchase": "2026-06-18",
    "membershipTier": "Bronze"
  },
  {
    "customerId": "CUST-005",
    "firstName": "Marcus",
    "lastName": "Johnson",
    "email": "marcus.johnson@example.com",
    "phone": "555-1005",
    "address": "928 Oak Street",
    "city": "Dallas",
    "state": "TX",
    "zipCode": "75201",
    "lastPurchase": "2026-08-22",
    "membershipTier": "Platinum"
  },
  {
    "customerId": "CUST-006",
    "firstName": "Emily",
    "lastName": "Chen",
    "email": "emily.chen@example.com",
    "phone": "555-1006",
    "address": "456 Sunset Blvd",
    "city": "San Francisco",
    "state": "CA",
    "zipCode": "94103",
    "lastPurchase": "2026-08-10",
    "membershipTier": "Gold"
  },
  {
    "customerId": "CUST-007",
    "firstName": "Noah",
    "lastName": "Williams",
    "email": "noah.williams@example.com",
    "phone": "555-1007",
    "address": "731 Pine Street",
    "city": "Seattle",
    "state": "WA",
    "zipCode": "98101",
    "lastPurchase": "2026-05-30",
    "membershipTier": "Bronze"
  },
  {
    "customerId": "CUST-008",
    "firstName": "Olivia",
    "lastName": "Brown",
    "email": "olivia.brown@example.com",
    "phone": "555-1008",
    "address": "219 Madison Ave",
    "city": "New York",
    "state": "NY",
    "zipCode": "10016",
    "lastPurchase": "2026-08-25",
    "membershipTier": "Platinum"
  },
  {
    "customerId": "CUST-009",
    "firstName": "Liam",
    "lastName": "Garcia",
    "email": "liam.garcia@example.com",
    "phone": "555-1009",
    "address": "584 Desert Road",
    "city": "Phoenix",
    "state": "AZ",
    "zipCode": "85004",
    "lastPurchase": "2026-07-12",
    "membershipTier": "Silver"
  },
  {
    "customerId": "CUST-010",
    "firstName": "Ava",
    "lastName": "Wilson",
    "email": "ava.wilson@example.com",
    "phone": "555-1010",
    "address": "903 Lakeview Drive",
    "city": "Chicago",
    "state": "IL",
    "zipCode": "60601",
    "lastPurchase": "2026-08-27",
    "membershipTier": "Gold"
  }
]
`;


// Parse the JSON data into a global array
const customers = JSON.parse(rawJsonData);


// Grab the HTML container where we will render the divs
const container = document.getElementById('customer-container');


function renderCustomers() {

  container.innerHTML = '';

  let currentIndex = 0;

  for (const customer of customers) {

    const id = customer.customerId;
    const fullName = `${customer.firstName} ${customer.lastName}`;
    const email = customer.email;
    const phone = customer.phone;

    const address =
      `${customer.address}, ${customer.city}, ${customer.state} ${customer.zipCode}`;

    const lastPurchase = customer.lastPurchase;
    const membershipTier = customer.membershipTier;


    const cardDiv = document.createElement('div');
    cardDiv.className = 'customer-card';


    cardDiv.innerHTML = `
      <h3>${fullName} <span>(#${id})</span></h3>

      <button
        class="delete-btn"
        onclick="deleteCustomer(${currentIndex})">
        Delete
      </button>

      <p><strong>Contact:</strong> ${email} | ${phone}</p>

      <p><strong>Address:</strong> ${address}</p>

      <p><strong>Last Purchase:</strong> ${lastPurchase}</p>

      <span class="membership-tier">
        ${membershipTier} Member
      </span>
    `;


    container.appendChild(cardDiv);


    currentIndex++;
  }
}


renderCustomers();


function addCustomer() {

  const newCustomer = {

    customerId:
      document.getElementById('inputId').value,

    firstName:
      document.getElementById('inputFirstName').value,

    lastName:
      document.getElementById('inputLastName').value,

    email:
      document.getElementById('inputEmail').value,

    phone:
      document.getElementById('inputPhone').value,

    address:
      document.getElementById('inputAddress').value,

    city:
      document.getElementById('inputCity').value,

    state:
      document.getElementById('inputState').value,

    zipCode:
      document.getElementById('inputZipCode').value,

    lastPurchase:
      document.getElementById('inputLastPurchase').value,

    membershipTier:
      document.getElementById('inputMembershipTier').value
  };


  customers.push(newCustomer);


  document.getElementById('inputId').value = '';
  document.getElementById('inputFirstName').value = '';
  document.getElementById('inputLastName').value = '';
  document.getElementById('inputEmail').value = '';
  document.getElementById('inputPhone').value = '';
  document.getElementById('inputAddress').value = '';
  document.getElementById('inputCity').value = '';
  document.getElementById('inputState').value = '';
  document.getElementById('inputZipCode').value = '';
  document.getElementById('inputLastPurchase').value = '';


  renderCustomers();


  console.log(
    "Customer added! Total array length is now: "
    + customers.length
  );
}


function deleteCustomer(indexToRemove) {

  customers.splice(indexToRemove, 1);


  renderCustomers();


  console.log(
    "Customer deleted at index "
    + indexToRemove
    + "! Total array length is now: "
    + customers.length
  );
}