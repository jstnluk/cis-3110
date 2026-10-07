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
    "membershipTier": "Gold",
    "imageUrl": "https://i.pravatar.cc/150?img=12"
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
    "membershipTier": "Silver",
    "imageUrl": "https://i.pravatar.cc/150?img=47"
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
    "membershipTier": "Gold",
    "imageUrl": "https://i.pravatar.cc/150?img=14"
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
    "membershipTier": "Bronze",
    "imageUrl": "https://i.pravatar.cc/150?img=32"
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
    "membershipTier": "Platinum",
    "imageUrl": "https://i.pravatar.cc/150?img=11"
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
    "membershipTier": "Gold",
    "imageUrl": "https://i.pravatar.cc/150?img=44"
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
    "membershipTier": "Bronze",
    "imageUrl": "https://i.pravatar.cc/150?img=13"
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
    "membershipTier": "Platinum",
    "imageUrl": "https://i.pravatar.cc/150?img=45"
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
    "membershipTier": "Silver",
    "imageUrl": "https://i.pravatar.cc/150?img=15"
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
    "membershipTier": "Gold",
    "imageUrl": "https://i.pravatar.cc/150?img=49"
  }
]
`;

const customers = JSON.parse(rawJsonData);
const container = document.getElementById('customer-container');




function updateMeetingCount() {

  const storedString =
    localStorage.getItem('meetingCart') || '[]';

  const meetingArray =
    JSON.parse(storedString);

  document.getElementById('meetingCount').innerText =
    meetingArray.length;
}




function addToMeeting(index) {

  const selectedUser = customers[index];

  const storedString =
    localStorage.getItem('meetingCart') || '[]';

  const meetingArray =
    JSON.parse(storedString);


  const alreadyExists =
    meetingArray.find(
      user => user.customerId === selectedUser.customerId
    );


  if (alreadyExists) {

    alert(
      `${selectedUser.firstName} is already in the meeting!`
    );

    return;
  }


  meetingArray.push(selectedUser);


  localStorage.setItem(
    'meetingCart',
    JSON.stringify(meetingArray)
  );



  updateMeetingCount();


  alert(
    `${selectedUser.firstName} was added to the meeting!`
  );
}




function renderCustomers() {

  container.innerHTML = '';

  let currentIndex = 0;


  for (const customer of customers) {

    const cardDiv =
      document.createElement('div');

    cardDiv.className = 'customer-card';


    cardDiv.innerHTML = `

      <img
        src="${customer.imageUrl}"
        alt="${customer.firstName}">

      <div class="card-content">

        <h3>
          ${customer.firstName} ${customer.lastName}
        </h3>

        <p>
          <strong>ID:</strong>
          ${customer.customerId}
        </p>

        <p>
          <strong>Email:</strong>
          ${customer.email}
        </p>

        <p>
          <strong>Phone:</strong>
          ${customer.phone}
        </p>

        <p>
          <strong>Membership:</strong>
          ${customer.membershipTier}
        </p>

        <p>
          <strong>Last Purchase:</strong>
          ${customer.lastPurchase}
        </p>


        <button
          class="btn-add-meeting"
          onclick="addToMeeting(${currentIndex})">

          + Add to Meeting

        </button>

      </div>

    `;


    container.appendChild(cardDiv);

    currentIndex++;
  }
}


renderCustomers();

updateMeetingCount();