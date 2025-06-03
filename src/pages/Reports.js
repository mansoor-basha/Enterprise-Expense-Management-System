import React from 'react';

const sampleReports = [
  { id: 1, title: 'Sales Report Q1', date: '2025-03-31', status: 'Completed' },
  { id: 2, title: 'Employee Performance', date: '2025-04-10', status: 'Pending' },
  { id: 3, title: 'Expense Summary', date: '2025-04-15', status: 'Completed' },
];

const Reports = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Reports</h2>

      <p style={styles.description}>
        View and download your reports in PDF or Excel formats.
      </p>

      <div style={styles.buttonGroup}>
        <button style={{ ...styles.button, backgroundColor: '#e74c3c' }}>
          Download PDF
        </button>
        <button style={{ ...styles.button, backgroundColor: '#27ae60' }}>
          Download Excel
        </button>
      </div>

      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Recent Reports</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Title</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {sampleReports.map((report) => (
              <tr key={report.id} style={styles.tr}>
                <td style={styles.td}>{report.title}</td>
                <td style={styles.td}>{report.date}</td>
                <td
                  style={{
                    ...styles.td,
                    color: report.status === 'Completed' ? '#27ae60' : '#f39c12',
                    fontWeight: 'bold',
                  }}
                >
                  {report.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '10px',
    fontWeight: '700',
  },
  description: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '16px',
    color: '#555',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '30px',
  },
  button: {
    padding: '12px 25px',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
  },
  cardTitle: {
    marginBottom: '15px',
    fontWeight: '600',
    fontSize: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    borderBottom: '2px solid #ddd',
    textAlign: 'left',
    padding: '12px',
    fontWeight: '600',
  },
  tr: {
    borderBottom: '1px solid #ddd',
    transition: 'background-color 0.2s ease',
  },
  td: {
    padding: '12px',
  },
};

export default Reports;
