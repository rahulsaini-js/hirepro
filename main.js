// main.js

// Sample candidates data (replace with your actual data or fetch from a server)
const candidatesData = [
    { name: "Rahul saini", location: "haryana", jobRole: "Software Engineer" },
    { name: "Sagar", location: "Haryana", jobRole: "UI/UX Designer" },
    { name: "Shivam", location: "UP", jobRole: "Marketing Manager" },
    // Add more candidate objects here...
  ];
  
  // Function to display candidates in the candidates-list section
  function displayCandidates(candidates) {
    const candidatesList = document.getElementById("candidates-list");
    candidatesList.innerHTML = ""; // Clear previous list
  
    if (candidates.length === 0) {
      candidatesList.innerHTML = "<p>No candidates found.</p>";
    } else {
      candidates.forEach(candidate => {
        const candidateItem = document.createElement("div");
        candidateItem.classList.add("candidate");
        candidateItem.innerHTML = `
          <h3>${candidate.name}</h3>
          <p><strong>Location:</strong> ${candidate.location}</p>
          <p><strong>Job Role:</strong> ${candidate.jobRole}</p>
          <!-- Add additional candidate information here... -->
        `;
        candidatesList.appendChild(candidateItem);
      });
    }
  }
  
  // Event listener for the search form submission
  document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    const location = document.getElementById("location").value;
    const jobRole = document.getElementById("job-role").value;
  
    // Filter candidates based on location and job role (sample filter logic, replace with your own)
    const filteredCandidates = candidatesData.filter(candidate =>
      candidate.location.toLowerCase().includes(location.toLowerCase()) &&
      candidate.jobRole.toLowerCase().includes(jobRole.toLowerCase())
    );
  
    displayCandidates(filteredCandidates);
  });
  