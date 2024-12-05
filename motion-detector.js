let totalSelections = parseInt(localStorage.getItem('totalSelections')) || 0;

// Array of messages for non-contract-address clicks
const notWinnerMessages = [
  "You're closer than Bitcoin is to $1M Keep clicking",
  "Still better odds than Dogecoin mooning",
  "Not yet maybe check your wallet again",
  "You missed it",
  "Keep trying you suck at this",
  "Nope but thank god this isn't a phishing site you fuckn degenerate",
  "Not the lucky click hodl your patience",
  "You're mining clicks but still no block reward",
  "This isn't it Maybe buy something else instead",
  "Almost there just like Ethereum 2.0's release date",
  "Oops wrong click Don't worry no gas fees here",
  "Not yet Guess you're still stuck in Proof of Work",
  "Not the right click it's like waiting for your NFT to sell",
  "Keep clicking lil shid",
  "Gotta be close by now",
  "Clicking faster won't help but it looks cool",
  "1) What",
  "Satoshi would be proud of your persistence",
  "No again",
  "Patience is key like waiting for your transaction to confirm",
  "How many times will you click",
  "If this was a rug pull you'd already be broke",
  "Not your lucky day but hey at least you're not liquidated",
  "Still waiting like the SEC on crypto regulations",
  "Not the click Maybe you need a new strategy",
  "Better than paying gas fees but still not it",
  "Try again your diamond hands need work",
  "Not quite you're like one block away from greatness",
  "This isn't the alpha you're looking for",
  "Keep at it you're stacking clicks not sats",
  "Another miss guess it's a bear market for you",
  "Keep clicking or are you giving up already",
  "Not yet this isn't your private key either",
  "Wrong again but hey it's free clicks",
  "You're still trying right that's bullish",
  "Not even close but respect the grind",
  "Clicking is free but the dopamine isn't",
  "You should've bought Bitcoin in 2010 instead",
  "Not now but maybe later or never",
  "If clicks were crypto you'd still be poor",
  "No luck yet maybe you're using the wrong wallet",
  "Keep going you're almost a Degen legend",
  "Wrong again but at least no slippage here",
  "Still not it but congrats you're consistent",
  "Not today but maybe after 1000 clicks",
  "Are you even trying or just vibing",
  "Missed again but hey that's life in the blockchain",
  "Almost got it you're practically airdropped patience",
  "Congrats, just one more. wild lol"
];

// Create and display the counter element
const counterElement = document.createElement('div');
counterElement.style.position = 'fixed';
counterElement.style.top = '10px';
counterElement.style.left = '50%';
counterElement.style.transform = 'translateX(-50%)';
counterElement.style.fontSize = '24px';
counterElement.style.fontWeight = 'bold';
counterElement.style.color = 'white';
document.body.appendChild(counterElement);

function updateCounter() {
  counterElement.textContent = `Total Clicks: 0`;
  localStorage.setItem('totalSelections', totalSelections); // Save count to localStorage
}

// Continuously increment the counter
setInterval(() => {
  totalSelections++;
  updateCounter(); // Update the display
}, 1000); // Increment every second

// Function to show a popup
function showPopup(message, isPermanent = false) {
  const popup = document.createElement('div');
  popup.style.position = 'fixed';
  popup.style.top = '30%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.padding = '20px';
  popup.style.backgroundColor = 'white';
  popup.style.color = 'black';
  popup.style.borderRadius = '10px';
  popup.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  popup.style.zIndex = '9999';
  
  // Set the content
  if (isPermanent) {
    popup.innerHTML = `
      <p style="margin: 0; font-size: 18px;">${message}</p>
      <button id="copyButton" style="margin-top: 10px; padding: 5px 10px; cursor: pointer; font-size: 16px; border: 1px solid #000; background-color: #f0f0f0;">Copy</button>
    `;
    
    // Add copy functionality
    const copyButton = popup.querySelector('#copyButton');
    copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText(message.split('- ')[1]).then(() => {
        alert('congrats mf now pump this bitch');
      });
    });
  } else {
    popup.textContent = message;
  }

  document.body.appendChild(popup);

  if (!isPermanent) {
    setTimeout(() => {
      document.body.removeChild(popup);
    }, 2000); // Show popup for 2 seconds
  }
}

// Function to handle pill clicks
function handlePillClick() {
  totalSelections++;
  updateCounter(); // Update the total clicks counter

  if (totalSelections % 50 === 0) {
    // Show the contract address and make it permanent
    showPopup('You got motion twin - 0x1234...abcd', true);
  } else {
    // Show a random message from the array
    const randomIndex = Math.floor(Math.random() * notWinnerMessages.length);
    showPopup(notWinnerMessages[randomIndex]);
  }
}

function alternateColors() {
  const pTags = document.querySelectorAll('.pill p');

  let toggle = true;
  setInterval(() => {
    pTags.forEach((p, index) => {
      // Alternate colors between green and red
      if (toggle) {
        p.style.color = index % 2 === 0 ? 'green' : 'red';
      } else {
        p.style.color = index % 2 === 0 ? 'red' : 'green';
      }
    });
    toggle = !toggle; // Switch the toggle state
  }, 3000); // Every 3 seconds
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
  alternateColors();
  updateCounter(); // Initialize the counter display
});

document.getElementById('black-pill').addEventListener('click', handlePillClick);
document.getElementById('dark-gray-pill').addEventListener('click', handlePillClick);
