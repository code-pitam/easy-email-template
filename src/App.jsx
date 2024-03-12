import React, { useState } from "react";
import "./App.css"

function EmailTemplateGenerator() {
  const [formData, setFormData] = useState({
    recipientName: "",
    propertyName: "",
    companyName:"",
    propertyAddress: "",
    propertyDescription: "",
    recipientEmail: "",
    mapLink:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      recipientName,
      propertyName,
      propertyAddress,
      propertyDescription,
      recipientEmail,
      companyName,
      mapLink,
    } = formData;
    const emailTemplate = `Dear Sir,\n\nHere is a proposal for ${companyName} at ${propertyName}. The property is about ${propertyDescription}.\n\nFind the attached address for your reference:\n${propertyAddress}\n${mapLink}\nRegards,\nDebasis Bala\n9433191977`;

    const mailtoLink = `mailto:${recipientEmail}?subject=Proposal%20for%20${encodeURIComponent(
      `${companyName} at ${propertyName}`
    )}&body=${encodeURIComponent(emailTemplate)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="w-full h-full p-12    bg-slate-800 text-white">
      <h2>Email Template Generator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Recipient Name:
          <input
            className="   bg-slate-700 p-2 rounded-lg mx-5 w-full"
            type="text"
            name="recipientName"
            value={formData.recipientName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Property Name:
          <input
            className="   bg-slate-700 p-2 rounded-lg mx-5 w-full"
            type="text"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Company Name:
          <input
            className="   bg-slate-700 p-2 rounded-lg mx-5 w-full"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </label>

        <br />
        <label>
          Property Description:
          <textarea
            className="   bg-slate-700 p-2 rounded-lg mx-5 w-full"
            name="propertyDescription"
            value={formData.propertyDescription}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Property Address:
          <input
            type="text"
            className="   bg-slate-700 p-2 rounded-lg mx-5 w-full"
            name="propertyAddress"
            value={formData.propertyAddress}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Map Link:
          <input
            className="   bg-slate-700 p-2 rounded-lg mx-5 w-full"
            type="text"
            name="mapLink"
            value={formData.mapLink}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="mt-10">
          Recipient Email:
          <input
            className="   bg-slate-700 p-2 rounded-lg mx-5 w-full"
            type="email"
            name="recipientEmail"
            value={formData.recipientEmail}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="  text-black font-bold text-2xl bg-lime-500 w-full p-5 rounded-lg mx-5 my-10" type="submit">Generate and Email</button>

        
      </form>
    </div>
  );
}

export default EmailTemplateGenerator;
