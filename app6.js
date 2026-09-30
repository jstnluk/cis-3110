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


const customers = JSON.parse(rawJsonData);

const container = document.getElementById('customer-container');



let currentEditIndex = null;




function renderCustomers() {

  container.innerHTML = '';

  let currentIndex = 0;

  for (const customer of customers) {

    const cardDiv = document.createElement('div');

    cardDiv.className = 'customer-card';


    cardDiv.innerHTML = `

      <h3>
        ${customer.firstName} ${customer.lastName}
        <span>(#${customer.customerId})</span>
      </h3>

      <div class="card-actions">

        <button
          class="action-btn edit-btn"
          onclick="openModal(${currentIndex})">
          Edit
        </button>

        <button
          class="action-btn delete-btn"
          onclick="deleteCustomer(${currentIndex})">
          Delete
        </button>

      </div>

      <p>
        <strong>Contact:</strong>
        ${customer.email} | ${customer.phone}
      </p>

      <p>
        <strong>Address:</strong>
        ${customer.address},
        ${customer.city},
        ${customer.state}
        ${customer.zipCode}
      </p>

      <p>
        <strong>Last Purchase:</strong>
        ${customer.lastPurchase}
      </p>

      <span class="membership-tier">
        ${customer.membershipTier} Member
      </span>

    `;


    container.appendChild(cardDiv);

    currentIndex++;
  }
}



renderCustomers();




function deleteCustomer(indexToRemove) {

  customers.splice(indexToRemove, 1);

  renderCustomers();

  console.log(
    "Customer deleted at index "
    + indexToRemove
    + ". Total customers: "
    + customers.length
  );
}




function openModal(index = null) {

  currentEditIndex = index;

  const modalTitle = document.getElementById('modalTitle');



  if (index !== null) {

    modalTitle.innerText = 'Edit Customer';

    const customer = customers[index];


    document.getElementById('formId').value =
      customer.customerId;

    document.getElementById('formFirstName').value =
      customer.firstName;

    document.getElementById('formLastName').value =
      customer.lastName;

    document.getElementById('formEmail').value =
      customer.email;

    document.getElementById('formPhone').value =
      customer.phone;

    document.getElementById('formAddress').value =
      customer.address;

    document.getElementById('formCity').value =
      customer.city;

    document.getElementById('formState').value =
      customer.state;

    document.getElementById('formZipCode').value =
      customer.zipCode;

    document.getElementById('formLastPurchase').value =
      customer.lastPurchase;

    document.getElementById('formMembershipTier').value =
      customer.membershipTier;
  }



  else {

    modalTitle.innerText = 'Add New Customer';


    document
      .querySelectorAll('#customerModal input')
      .forEach(input => input.value = '');


    document.getElementById('formMembershipTier').value =
      'Bronze';
  }


  document.getElementById('customerModal').style.display =
    'flex';
}




function saveCustomer() {

  const formData = {

    customerId:
      document.getElementById('formId').value,

    firstName:
      document.getElementById('formFirstName').value,

    lastName:
      document.getElementById('formLastName').value,

    email:
      document.getElementById('formEmail').value,

    phone:
      document.getElementById('formPhone').value,

    address:
      document.getElementById('formAddress').value,

    city:
      document.getElementById('formCity').value,

    state:
      document.getElementById('formState').value,

    zipCode:
      document.getElementById('formZipCode').value,

    lastPurchase:
      document.getElementById('formLastPurchase').value,

    membershipTier:
      document.getElementById('formMembershipTier').value
  };



  if (currentEditIndex !== null) {

    customers[currentEditIndex] = formData;

    console.log(
      "Customer updated at index "
      + currentEditIndex
    );
  }



  else {

    customers.push(formData);

    console.log(
      "Customer added. Total customers: "
      + customers.length
    );
  }


  closeModal();

  renderCustomers();
}




function closeModal() {

  document.getElementById('customerModal').style.display =
    'none';

  currentEditIndex = null;
}