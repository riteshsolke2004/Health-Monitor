import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Consultation.css";

const ConsultationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDoctor: "",
    appointmentDate: "",
    appointmentTime: "",
    concernCategory: "",
    description: "",
    preferredMode: "video",
    hasAttachment: false,
    attachment: null,
  });
  
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Available doctors (would typically come from an API)
  const doctors = [
    { id: 1, name: "Dr. James Wilson", specialty: "Cardiology" },
    { id: 2, name: "Dr. Maria Garcia", specialty: "Nutrition Science" },
    { id: 3, name: "Dr. Ahmed Hassan", specialty: "Sleep Medicine" },
    { id: 4, name: "Dr. Sarah Johnson", specialty: "General Practice" },
    { id: 5, name: "Dr. Michael Chen", specialty: "Mental Health" },
  ];

  // Available time slots
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM"
  ];

  // Health concern categories
  const concernCategories = [
    "Cardiovascular Health", "Nutrition & Diet", "Sleep Issues",
    "Mental Wellness", "Preventive Care", "Chronic Condition Management",
    "Exercise & Fitness", "Other"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
        hasAttachment: Boolean(files[0])
      });
    } else if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      // await axios.post('/api/consultations', formData);
      
      // For demonstration purposes, we'll simulate a server delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitted(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error submitting consultation request:", error);
      alert("There was an error submitting your consultation request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // If form has been submitted successfully, show confirmation
  if (submitted) {
    return (
      <div className="consultation-container">
        <motion.div 
          className="success-message"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="success-icon">✓</div>
          <h2>Consultation Request Submitted!</h2>
          <p>Thank you for booking a consultation with us. We have received your request and will send a confirmation to your email shortly.</p>
          <p className="appointment-details">
            <strong>Appointment Details:</strong><br />
            Date: {formData.appointmentDate}<br />
            Time: {formData.appointmentTime}<br />
            Doctor: {formData.preferredDoctor || "Best available doctor"}<br />
            Mode: {formData.preferredMode === "video" ? "Video Call" : "In-person"}
          </p>
          <div className="button-group">
            <button className="primary-button" onClick={() => navigate("/doctor-insights")}>
              Back to Doctor Insights
            </button>
            <button className="secondary-button" onClick={() => {
              setSubmitted(false);
              setStep(1);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                preferredDoctor: "",
                appointmentDate: "",
                appointmentTime: "",
                concernCategory: "",
                description: "",
                preferredMode: "video",
                hasAttachment: false,
                attachment: null,
              });
            }}>
              Book Another Consultation
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="consultation-container">
      <motion.div
        className="consultation-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Book a Doctor Consultation</h1>
        <p>Get expert medical advice tailored to your health needs</p>
      </motion.div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
        <div className="step-indicators">
          <div className={`step-indicator ${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`step-indicator ${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`step-indicator ${step >= 3 ? "active" : ""}`}>3</div>
        </div>
        <div className="step-labels">
          <div className="step-label">Personal Info</div>
          <div className="step-label">Appointment Details</div>
          <div className="step-label">Health Concerns</div>
        </div>
      </div>

      <motion.div
        className="consultation-form-container"
        key={`step-${step}`}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={step === 3 ? handleSubmit : nextStep}>
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="form-step">
              <h2>Personal Information</h2>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="button-group">
                <button 
                  type="button" 
                  className="secondary-button"
                  onClick={() => navigate("/doctor-insights")}
                >
                  Back to Insights
                </button>
                <button type="submit" className="primary-button">Next</button>
              </div>
            </div>
          )}

          {/* Step 2: Appointment Details */}
          {step === 2 && (
            <div className="form-step">
              <h2>Appointment Details</h2>
              <div className="form-group">
                <label htmlFor="preferredDoctor">Preferred Doctor (Optional)</label>
                <select
                  id="preferredDoctor"
                  name="preferredDoctor"
                  value={formData.preferredDoctor}
                  onChange={handleChange}
                >
                  <option value="">Select a doctor (optional)</option>
                  {doctors.map(doctor => (
                    <option key={doctor.id} value={doctor.name}>
                      {doctor.name} - {doctor.specialty}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="appointmentDate">Preferred Date</label>
                <input
                  type="date"
                  id="appointmentDate"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="appointmentTime">Preferred Time</label>
                <select
                  id="appointmentTime"
                  name="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a time slot</option>
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Consultation Mode</label>
                <div className="radio-group">
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="video"
                      name="preferredMode"
                      value="video"
                      checked={formData.preferredMode === "video"}
                      onChange={handleChange}
                    />
                    <label htmlFor="video">Video Call</label>
                  </div>
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="inPerson"
                      name="preferredMode"
                      value="inPerson"
                      checked={formData.preferredMode === "inPerson"}
                      onChange={handleChange}
                    />
                    <label htmlFor="inPerson">In-Person</label>
                  </div>
                </div>
              </div>
              <div className="button-group">
                <button type="button" className="secondary-button" onClick={prevStep}>Previous</button>
                <button type="submit" className="primary-button">Next</button>
              </div>
            </div>
          )}

          {/* Step 3: Health Concerns */}
          {step === 3 && (
            <div className="form-step">
              <h2>Health Concerns</h2>
              <div className="form-group">
                <label htmlFor="concernCategory">Category of Concern</label>
                <select
                  id="concernCategory"
                  name="concernCategory"
                  value={formData.concernCategory}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a category</option>
                  {concernCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Describe Your Health Concern</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Please provide details about your health concern or questions you have for the doctor..."
                  rows="5"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="attachment">Upload Medical Reports (Optional)</label>
                <input
                  type="file"
                  id="attachment"
                  name="attachment"
                  onChange={handleChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                <small>Upload any relevant medical reports or images (PDF, JPG, PNG - Max 5MB)</small>
              </div>
              <div className="button-group">
                <button type="button" className="secondary-button" onClick={prevStep}>Previous</button>
                <button type="submit" className="primary-button" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Book Consultation"}
                </button>
              </div>
            </div>
          )}
        </form>
      </motion.div>

      {/* Doctor Availability Card */}
      <motion.div 
        className="availability-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h3>Available Doctors</h3>
        <div className="available-doctors">
          {doctors.map(doctor => (
            <div key={doctor.id} className="doctor-availability">
              <div className="doctor-info">
                <h4>{doctor.name}</h4>
                <span>{doctor.specialty}</span>
              </div>
              <div className="availability-status available">Available Today</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div 
        className="faq-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h3>Frequently Asked Questions</h3>
        <div className="faq-item">
          <h4>How long are the consultation sessions?</h4>
          <p>Standard consultation sessions are 30 minutes. If you need more time, the doctor can extend the session as necessary.</p>
        </div>
        <div className="faq-item">
          <h4>What happens if I need to reschedule?</h4>
          <p>You can reschedule your appointment up to 4 hours before the scheduled time without any penalty.</p>
        </div>
        <div className="faq-item">
          <h4>How do video consultations work?</h4>
          <p>You'll receive a secure link via email before your appointment. Simply click the link at your scheduled time to join the video call.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ConsultationPage;