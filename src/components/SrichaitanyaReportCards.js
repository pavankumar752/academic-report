// src/components/SrichaitanyaReportCards.js
import React from 'react';

const generateStudentNames = () => {
  const firstNames = [
    "Aarav", "Meera", "Rohan", "Nisha", "Karthik", "Ananya", 
    "Siddharth", "Sakshi", "Krishna", "Pooja", "Nikhil"
  ];

  const lastNames = [
    "Kumar", "Reddy", "Sharma", "Patel", "Iyer", "Singh"
  ];

  const names = [];

  for (let i = 0; i < 1000; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    names.push(`${firstName} ${lastName}`);
  }

  return names;
};

const generateReportCards = (names) => {
  const schools = [
    "Srichaitanya School - Hyderabad",
    "Srichaitanya School - Vijayawada",
    "Srichaitanya School - Tirupati",
    "Srichaitanya School - Bangalore",
    "Srichaitanya School - Visakhapatnam",
  ];
  const subjects = ["Mathematics", "Science", "English", "Social Studies", "Physical Education"];
  const grades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D"];

  return names.map(name => {
    const schoolName = schools[Math.floor(Math.random() * schools.length)];
    const studentGrades = {};

    subjects.forEach(subject => {
      studentGrades[subject] = grades[Math.floor(Math.random() * grades.length)];
    });

    return {
      studentName: name,
      schoolName,
      grades: studentGrades,
    };
  });
};

const SrichaitanyaReportCards = () => {
  const studentNames = generateStudentNames();
  const reportCards = generateReportCards(studentNames);

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 15;

  const [studentFilter, setStudentFilter] = React.useState('');
  const [schoolFilter, setSchoolFilter] = React.useState('');

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const filteredReportCards = reportCards.filter(report => 
    report.studentName.toLowerCase().includes(studentFilter.toLowerCase()) &&
    report.schoolName.toLowerCase().includes(schoolFilter.toLowerCase())
  );

  const currentItems = filteredReportCards.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredReportCards.length / itemsPerPage);

  return (
    <div>
      <h1>Srichaitanya School Report Cards</h1>
      
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>
              <input 
                type="text" 
                placeholder="Filter by Student Name" 
                value={studentFilter} 
                onChange={(e) => setStudentFilter(e.target.value)} 
                style={{ width: '100%' }}
              />
            </th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>
              <input 
                type="text" 
                placeholder="Filter by School Name" 
                value={schoolFilter} 
                onChange={(e) => setSchoolFilter(e.target.value)} 
                style={{ width: '100%' }}
              />
            </th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}></th>
          </tr>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Student Name</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>School Name</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Grades</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((report, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{report.studentName}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{report.schoolName}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid #ccc', padding: '4px' }}>Subject</th>
                      <th style={{ border: '1px solid #ccc', padding: '4px' }}>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(report.grades).map(([subject, grade], idx) => (
                      <tr key={idx}>
                        <td style={{ border: '1px solid #ccc', padding: '4px' }}>{subject}</td>
                        <td style={{ border: '1px solid #ccc', padding: '4px' }}>{grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          style={{ marginRight: '10px' }}
        >
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          style={{ marginLeft: '10px' }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SrichaitanyaReportCards;
