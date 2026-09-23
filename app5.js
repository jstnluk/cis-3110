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


let currentEditIndex = null;


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

      <div class="action-buttons">

        <button
          class="edit-btn"
          onclick="openEditModal(${currentIndex})">
          Edit
        </button>

        <button
          class="delete-btn"
          onclick="deleteCustomer(${currentIndex})">
          Delete
        </button>

      </div>

      <p>
        <strong>Contact:</strong>
        ${email} | ${phone}
      </p>

      <p>
        <strong>Address:</strong>
        ${address}
      </p>

      <p>
        <strong>Last Purchase:</strong>
        ${lastPurchase}
      </p>

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
      document.getElementById('addId').value,

    firstName:
      document.getElementById('addFirstName').value,

    lastName:
      document.getElementById('addLastName').value,

    email:
      document.getElementById('addEmail').value,

    phone:
      document.getElementById('addPhone').value,

    address:
      document.getElementById('addAddress').value,

    city:
      document.getElementById('addCity').value,

    state:
      document.getElementById('addState').value,

    zipCode:
      document.getElementById('addZipCode').value,

    lastPurchase:
      document.getElementById('addLastPurchase').value,

    membershipTier:
      document.getElementById('addMembershipTier').value
  };


  customers.push(newCustomer);


  document
    .querySelectorAll('.form-container input')
    .forEach(input => input.value = '');


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






function openEditModal(indexToEdit) {


  currentEditIndex = indexToEdit;


 
  const customer = customers[indexToEdit];


 

  document.getElementById('editId').value =
    customer.customerId;

  document.getElementById('editFirstName').value =
    customer.firstName;

  document.getElementById('editLastName').value =
    customer.lastName;

  document.getElementById('editEmail').value =
    customer.email;

  document.getElementById('editPhone').value =
    customer.phone;

  document.getElementById('editAddress').value =
    customer.address;

  document.getElementById('editCity').value =
    customer.city;

  document.getElementById('editState').value =
    customer.state;

  document.getElementById('editZipCode').value =
    customer.zipCode;

  document.getElementById('editLastPurchase').value =
    customer.lastPurchase;

  document.getElementById('editMembershipTier').value =
    customer.membershipTier;



  document.getElementById('editModal').style.display = 'flex';
}




function saveEdit() {


  if (currentEditIndex === null) return;




  const updatedCustomer = {

    customerId:
      document.getElementById('editId').value,

    firstName:
      document.getElementById('editFirstName').value,

    lastName:
      document.getElementById('editLastName').value,

    email:
      document.getElementById('editEmail').value,

    phone:
      document.getElementById('editPhone').value,

    address:
      document.getElementById('editAddress').value,

    city:
      document.getElementById('editCity').value,

    state:
      document.getElementById('editState').value,

    zipCode:
      document.getElementById('editZipCode').value,

    lastPurchase:
      document.getElementById('editLastPurchase').value,

    membershipTier:
      document.getElementById('editMembershipTier').value
  };


  customers[currentEditIndex] = updatedCustomer;


  console.log(
    "Customer updated at index " + currentEditIndex
  );



  closeModal();



  renderCustomers();
}




function closeModal() {

  document.getElementById('editModal').style.display = 'none';

  currentEditIndex = null;
}