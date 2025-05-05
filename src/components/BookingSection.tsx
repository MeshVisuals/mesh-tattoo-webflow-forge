
import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { toast } from "sonner";

const BookingSection: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const availableTimes = [
    "10:00", "11:00", "12:00", "13:00", 
    "15:00", "16:00", "17:00", "18:00"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to a server
    if (!date || !time || !email || !name || !phone || !description) {
      toast.error("Please fill out all fields");
      return;
    }

    // Show success message
    toast.success("Booking request sent! We'll confirm via email shortly.");
    
    // Reset form
    setDate(undefined);
    setTime("");
    setEmail("");
    setName("");
    setPhone("");
    setDescription("");
  };

  return (
    <section id="booking" className="section-container bg-black">
      <div className="container mx-auto">
        <h2 className="section-title">Book an Appointment</h2>
        
        <div className="max-w-3xl mx-auto mt-12 bg-muted p-6 md:p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Select Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal border-muted bg-black/30",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-black border border-mesh-orange/30" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => {
                        // Disable past dates and Sundays (assuming studio is closed)
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        return date < today || date.getDay() === 0;
                      }}
                      className="border-mesh-orange pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Select Time</label>
                <select 
                  value={time} 
                  onChange={(e) => setTime(e.target.value)} 
                  className="input-field"
                  required
                >
                  <option value="">Select a time</option>
                  {availableTimes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input-field"
                placeholder="+1 (123) 456-7890"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Tattoo Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input-field min-h-[120px]"
                placeholder="Describe your tattoo idea, size, placement, etc."
                required
              />
            </div>

            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full py-3 bg-mesh-orange hover:bg-opacity-80 text-white"
              >
                Request Booking
              </Button>
              <p className="text-sm text-gray-400 mt-3 text-center">
                After submission, you'll receive a confirmation email. Your booking will be confirmed based on availability.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
