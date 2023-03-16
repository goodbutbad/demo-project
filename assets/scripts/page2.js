const apiUrl = 'http://localhost:8080/api/reports';

async function deleteReport(reportId) {
  const response = await fetch(${apiUrl}/${reportId}, {
    method: 'DELETE'
  });
  if (response.ok) {

    const report = document.getElementById(reportId);
    report.parentNode.removeChild(report);
  } else {
    console.error('Failed to delete report');
  }
}


async function addReport(report) {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(report)
  });
  if (response.ok) {
    const newReport = await response.json();
   
    const reportContainer = document.querySelector('.main__reports');
    reportContainer.innerHTML += `
      <div class="report" id="${newReport.id}">
        <h3 class="report__title">${newReport.title}</h3>
        <p class="report__description">${newReport.description}</p>
        <button class="report__delete-btn">Delete</button>
      </div>
    `;

    const newDeleteButton = document.querySelector(#${newReport.id} .report__delete-btn);
    newDeleteButton.addEventListener('click', () => {
      deleteReport(newReport.id);
    });
  } else {
    console.error('Failed to add report');
  }
}

// JS
const deleteButtons = document.querySelectorAll('.report__delete-btn');
deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    const reportId = button.parentNode.id;
    deleteReport(reportId);
  });
});

const addButton = document.querySelector('#add-report-btn');
addButton.addEventListener('click', () => {
  const reportTitle = document.querySelector('#report-title').value;
  const reportDescription = document.querySelector('#report-description').value;
  const newReport = {
    title: reportTitle,
    description: reportDescription
  };
  addReport(newReport);
});

function addReport(title, description) {
 
  fetch('/api/reports', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title, description})
  })
  .then(response => {
    if (response.ok) {
    
      location.reload();
    } else {
      
      throw new Error('Failed to add report');
    }
  })
  .catch(error => {
    console.error(error);

    alert('Failed to add report');
  });
}

function deleteReport(reportId) {
  
  fetch(/api/reports/${reportId}, {
    method: 'DELETE'
  })
  .then(response => {
    if (response.ok) {
      
      const reportElement = document.getElementById(report-${reportId});
      reportElement.remove();
    } else {
      
      throw new Error('Failed to delete report');
    }
  })
  .catch(error => {
    console.error(error);
 
    alert('Failed to delete report');
  });
}