import React, { useState } from 'react';

export default function MaintainAVisual() {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const tickets = [
    { id: 1, title: 'Website not loading', status: 'Open', priority: 'High', time: '2h ago' },
    { id: 2, title: 'Update pricing page', status: 'In Progress', priority: 'Medium', time: '1d ago' },
    { id: 3, title: 'Fix login bug', status: 'Awaiting', priority: 'High', time: '2d ago' },
    { id: 4, title: 'Add dark mode', status: 'Open', priority: 'Low', time: '3d ago' },
  ];

  const stats = [
    { label: 'Open', value: '3', color: '#6366f1' },
    { label: 'In Progress', value: '2', color: '#3b82f6' },
    { label: 'Awaiting', value: '1', color: '#f97316' },
    { label: 'Unpaid', value: '2', color: '#eab308' },
  ];

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px',
      gap: '16px',
    }}>
      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
      }}>
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              padding: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <p style={{
              fontSize: '10px',
              fontWeight: '600',
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              margin: '0 0 8px 0',
            }}>
              {stat.label}
            </p>
            <p style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#f8fafc',
              margin: 0,
            }}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Tickets */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        <h3 style={{
          fontSize: '13px',
          fontWeight: '600',
          color: 'rgba(255,255,255,0.7)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          margin: 0,
        }}>
          Recent Tickets
        </h3>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => setSelectedTicket(ticket.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px',
                borderRadius: '10px',
                background: selectedTicket === ticket.id 
                  ? 'rgba(99,102,241,0.15)' 
                  : 'rgba(255,255,255,0.05)',
                border: selectedTicket === ticket.id 
                  ? '1px solid rgba(99,102,241,0.3)' 
                  : '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                if (selectedTicket !== ticket.id) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedTicket !== ticket.id) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }
              }}
            >
              <div>
                <p style={{
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#f8fafc',
                  margin: 0,
                }}>
                  {ticket.title}
                </p>
                <p style={{
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.4)',
                  margin: '2px 0 0 0',
                }}>
                  {ticket.time}
                </p>
              </div>
              <div style={{
                display: 'flex',
                gap: '6px',
              }}>
                <span style={{
                  fontSize: '10px',
                  fontWeight: '600',
                  padding: '3px 6px',
                  borderRadius: '4px',
                  background: 'rgba(255,255,255,0.1)',
                  color: ticket.priority === 'High' ? '#f87171' : ticket.priority === 'Medium' ? '#fbbf24' : '#94a3b8',
                }}>
                  {ticket.priority}
                </span>
                <span style={{
                  fontSize: '10px',
                  fontWeight: '600',
                  padding: '3px 6px',
                  borderRadius: '4px',
                  background: 'rgba(99,102,241,0.2)',
                  color: '#818cf8',
                }}>
                  {ticket.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unpaid Alert */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px',
        borderRadius: '10px',
        background: 'rgba(234, 179, 8, 0.1)',
        border: '1px solid rgba(234, 179, 8, 0.3)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{ fontSize: '14px' }}>📄</span>
          <div>
            <p style={{
              fontSize: '12px',
              fontWeight: '500',
              color: '#fcd34d',
              margin: 0,
            }}>
              2 unpaid invoices
            </p>
          </div>
        </div>
        <button style={{
          padding: '6px 10px',
          borderRadius: '6px',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#f8fafc',
          fontSize: '11px',
          fontWeight: '600',
          cursor: 'pointer',
        }}>
          View
        </button>
      </div>
    </div>
  );
}
