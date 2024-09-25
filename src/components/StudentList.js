import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 12px;
  text-align: left;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const FilterInput = styled.input`
  margin-bottom: 20px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`;
const StudentList = () => {
    const students = [
        {
          SCS_Number: '001',
          name: 'John Doe',
          is_active: true,
          gender: 'Male',
          student_status: 'Enrolled',
          state: 'Telangana',
          zone: 'South',
          branch: 'Engineering',
          orientation: 'Online',
          student_class: '10th Grade',
          section: 'A'
        },
        // Add more student objects here
      ];
      const [studentFilter, setStudentFilter] = React.useState('');
      const [studentScsNumber, setScsNumber] = React.useState('');
      const [studentIsActive, setIsActive] = React.useState('');
      const [studentGender, setGender] = React.useState('');
      const [studentStatus, setStudentStatus] = React.useState('');
      const [studentState, setState] = React.useState('');
      const [studentZone, setZone] = React.useState('');
      const [studentBranch, setBranch] = React.useState('');
      const [studentOrientation, setOrientation] = React.useState('');
      const [studentClass, setStudentClass] = React.useState('');
      const [studentSection, setSection] = React.useState('');
      const filteredReportCards = students.filter(report => 
        report.name.toLowerCase().includes(studentFilter.toLowerCase()) &&
        report.SCS_Number.toLowerCase().includes(studentScsNumber.toLowerCase()) &&
        report.gender.toLowerCase().includes(studentGender.toLowerCase()) &&
        report.student_status.toLowerCase().includes(studentStatus.toLowerCase()) &&
        report.state.toLowerCase().includes(studentState.toLowerCase()) &&
        report.zone.toLowerCase().includes(studentZone.toLowerCase()) &&
        report.branch.toLowerCase().includes(studentBranch.toLowerCase()) &&
        report.orientation.toLowerCase().includes(studentOrientation.toLowerCase()) &&
        report.student_class.toLowerCase().includes(studentClass.toLowerCase()) &&
        report.section.toLowerCase().includes(studentSection.toLowerCase())
    )
      const currentItems = filteredReportCards
  return (
    <Table>
      <thead>
      <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>
              <input 
                type="text" 
                placeholder="Filter by SCS_Number" 
                style={{ width: '100%' }}
                onChange={(e) => setScsNumber(e.target.value)}
                />
            </th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>
              <input 
                type="text" 
                placeholder="Filter by name" 
                onChange={(e) => setStudentFilter(e.target.value)} 
                style={{ width: '100%' }}
                />
            </th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>
              <input 
                type="text" 
                placeholder="Filter by is_active"
                style={{ width: '100%' }}
                onChange={(e) => setIsActive(e.target.value)} />
            </th><th style={{ border: '1px solid #ccc', padding: '8px' }}>
              <input 
                type="text" 
                placeholder="Filter by gender" 
                style={{ width: '100%' }}
                onChange={(e) => setGender(e.target.value)}/>
            </th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>
              <input 
                type="text" 
                placeholder="Filter by student_status"
                style={{ width: '100%' }}
                onChange={(e) => setStudentStatus(e.target.value)} />
            </th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>
              <input 
                type="text" 
                placeholder="Filter by State"
                style={{ width: '100%' }} 
                onChange={(e) => setState(e.target.value)}/>
            </th><th style={{ border: '1px solid #ccc', padding: '8px' }}>
              <input 
                type="text" 
                placeholder="Filter by zone"
                style={{ width: '100%' }}
                onChange={(e) => setZone(e.target.value)} />
            </th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>
              <input 
                type="text" 
                placeholder="Filter by branch"
                style={{ width: '100%' }}
                onChange={(e) => setBranch(e.target.value)} />
            </th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>
              <input 
                type="text" 
                placeholder="Filter by orientation"
                style={{ width: '100%' }}
                onChange={(e) => setOrientation(e.target.value)} />
            </th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>
              <input 
                type="text" 
                placeholder="Filter by student_class"
                style={{ width: '100%' }} 
                onChange={(e) => setStudentClass(e.target.value)}/>
            </th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>
              <input 
                type="text" 
                placeholder="Filter by section"
                style={{ width: '100%' }} 
                onChange={(e) => setSection(e.target.value)}/>
            </th>
      </tr>
        <tr>
        <TableHeader>SCS_Number</TableHeader>
        <TableHeader>Name</TableHeader>
        <TableHeader>Is_active</TableHeader>
        <TableHeader>Gender</TableHeader>
        <TableHeader>student_status</TableHeader>
        <TableHeader>State</TableHeader>
        <TableHeader>zone</TableHeader>
        <TableHeader>branch</TableHeader>
        <TableHeader>orientation</TableHeader>
        <TableHeader>student_class</TableHeader>
        <TableHeader>section</TableHeader>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((student, index) => (
          <tr key={index}>
            <TableCell>{student.SCS_Number}</TableCell>
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.is_active}</TableCell>
            <TableCell>{student.gender}</TableCell>
            <TableCell>{student.student_status}</TableCell>
            <TableCell>{student.state}</TableCell>
            <TableCell>{student.zone}</TableCell>
            <TableCell>{student.branch}</TableCell>
            <TableCell>{student.orientation}</TableCell>
            <TableCell>{student.student_class}</TableCell>
            <TableCell>{student.section}</TableCell>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StudentList;
