
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";

const BookingSection = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const availableTimes = [
    "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", 
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!date || !time || !name || !email || !phone || !description) {
      toast.error("Please fill in all fields");
      return;
    }
    
    toast.success("Booking request sent! We'll email you shortly to confirm.");
    
    // Reset form
    setDate(undefined);
    setTime("");
    setName("");
    setEmail("");
    setPhone("");
    setDescription("");
  };

  return (
    <section id="booking" className="section-container bg-black">
      <div className="container mx-auto">
        <h2 className="section-title">Book a Session</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="bg-muted/20 p-6 rounded-lg border border-muted">
            <h3 className="text-xl font-semibold mb-4">Select Your Date</h3>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="bg-black border border-muted rounded-lg p-4"
            />
          </div>
          
          <div className="bg-muted/20 p-6 rounded-lg border border-muted">
            <h3 className="text-xl font-semibold mb-4">Book Your Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Time Selection */}
              <div>
                <label className="block text-gray-300 mb-2">Preferred Time</label>
                <select 
                  value={time} 
                  onChange={(e) => setTime(e.target.value)}
                  className="input-field"
                  required
                >
                  <option value="">Select a time</option>
                  {availableTimes.map((timeSlot) => (
                    <option key={timeSlot} value={timeSlot}>
                      {timeSlot}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Contact Information */}
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Tattoo Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your tattoo idea, size, and placement"
                  className="input-field h-32"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full mt-6"
              >
                Request Booking
              </button>
              
              <p className="text-sm text-gray-400 text-center">
                You'll receive an email confirming your request and we'll get back to you shortly to confirm your appointment.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
