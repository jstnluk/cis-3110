const container =
  document.getElementById('meeting-container');

const emptyState =
  document.getElementById('empty-state');



function loadMeetingData() {

  const storedString =
    localStorage.getItem('meetingCart') || '[]';

  return JSON.parse(storedString);
}



function renderMeeting() {

  const meetingArray =
    loadMeetingData();


  container.innerHTML = '';



  if (meetingArray.length === 0) {

    emptyState.style.display = 'block';

    return;

  } else {

    emptyState.style.display = 'none';

  }


  let currentIndex = 0;


  for (const person of meetingArray) {

    const cardDiv =
      document.createElement('div');

    cardDiv.className =
      'participant-card';


    cardDiv.innerHTML = `

      <img
        src="${person.imageUrl}"
        alt="${person.firstName}">


      <h3>
        ${person.firstName} ${person.lastName}
      </h3>


      <p>
        ${person.email}
      </p>


      <p>
        ${person.membershipTier} Member
      </p>


      <p>
        Last Purchase:
        ${person.lastPurchase}
      </p>


      <button
        class="btn-remove"
        onclick="removeFromMeeting(${currentIndex})">

        Remove

      </button>

    `;


    container.appendChild(cardDiv);

    currentIndex++;
  }
}




function removeFromMeeting(indexToRemove) {


  const meetingArray =
    loadMeetingData();


  meetingArray.splice(
    indexToRemove,
    1
  );


  localStorage.setItem(
    'meetingCart',
    JSON.stringify(meetingArray)
  );


  renderMeeting();
}



renderMeeting();