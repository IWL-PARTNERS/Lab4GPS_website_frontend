import React, { useState } from "react";
import axios from "axios";
import "../../styles/ForgotPassword.css";

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // Steps: 1 = Email Input, 2 = OTP Verification, 3 = Password Reset
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("/api/forgot-password/", { email });
      setStep(2); // Move to OTP Verification step
    } catch (err) {
      setError(err.response?.data?.error || "Error sending OTP. Try again.");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("/api/verify-otp/", { email, otp });
      setStep(3); // Move to Password Reset step
    } catch (err) {
      setError(err.response?.data?.error || "Invalid or expired OTP. Try again.");
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await axios.post("/api/reset-password/", { email, otp, new_password: newPassword });
      setSuccessMessage("Password reset successful! You can now log in.");
      setStep(4); // Success screen
    } catch (err) {
      setError(err.response?.data?.error || "Error resetting password. Try again.");
    }
  };

  return (
    <div className="forgot-password">
      <h1>Forgot Password</h1>

      {step === 1 && (
        <form onSubmit={handleEmailSubmit} className="forgot-password-form">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Send OTP</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleOtpSubmit} className="forgot-password-form">
          <label>Enter OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Verify OTP</button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handlePasswordReset} className="forgot-password-form">
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Reset Password</button>
        </form>
      )}

      {step === 4 && (
        <div className="success-message">
          <h2>{successMessage}</h2>
          <a href="/login" className="go-login">Go to Login</a>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
