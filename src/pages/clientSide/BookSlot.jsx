import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './calendarStyle/style.css';
import { useNavigate } from 'react-router-dom';

const BookSlot = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate()

  // Handle date selection via clicking on the date
  const handleDateClick = (arg) => {
    setSelectedDate(arg.date); // Set the clicked date
  };

  // Time slots for display
  const timeSlots = Array.from({ length: 16 }, (_, i) => {
    const hour = i + 8;
    return `${hour % 12 || 12}${hour < 12 ? 'am' : 'pm'}-${(hour + 1) % 12 || 12}${hour < 11 ? 'am' : 'pm'}`;
  });

  // Check if two dates are the same
  const isSameDay = (date1, date2) => {
    return date1.toDateString() === date2.toDateString();
  };

  return (
    <div>
        <div className="bg-gray-900 text-white p-4 rounded-lg">
            <div className="flex items-center mb-4">
                <img src="/api/placeholder/32/32" alt="User" className="w-8 h-8 rounded-full mr-2" />
                <div>
                <h2 className="text-lg font-semibold">15 Min Meeting</h2>
                <p className="text-sm text-gray-400">15m • Google Meet • Asia/Kolkata</p>
                </div>
            </div>
            <div className="flex">
                <div className="w-2/3 pr-4">
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                    left: 'prev,next',
                    center: 'title',
                    right: 'dayGridMonth'
                    }}
                    height="auto"
                    selectable={true}
                    dateClick={handleDateClick} // Date click handler
                    events={selectedDate ? [{ title: 'Selected', start: selectedDate }] : []} // Event to mark selected date
                    nowIndicator={true}
                    dayCellClassNames={(arg) =>
                    isSameDay(arg.date, selectedDate) ? 'selected' : ''
                    } // Add 'selected' class for the selected day
                />
                </div>
                <div className="w-1/3 pl-4 border-l border-gray-700">
                <div className="flex justify-between items-center mb-4">
                    <button className="text-gray-400">&lt;</button>
                    <h3 className="text-lg font-semibold">
                    {selectedDate.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' })}
                    </h3>
                    <button className="text-gray-400">&gt;</button>
                </div>
                <div className="flex justify-end mb-2">
                    <button className="text-sm text-white mr-2">12h</button>
                    <button className="text-sm text-gray-400">24h</button>
                </div>
                <div className="overflow-y-auto h-96">
                    {timeSlots.map((time) => (
                    <div key={time} className="text-right py-2 text-sm text-gray-400">
                        {time}
                    </div>
                    ))}
                </div>
                </div>
            </div>
            <button onClick={(e) => navigate('/slotpayment')}>
                Next
            </button>
        </div>
    </div>
  );
};

export default BookSlot;
