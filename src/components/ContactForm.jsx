import { useState } from 'react';
import { contactData } from '../data/contactData';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 md:mb-3">
        {contactData.title}
      </h3>
      <p className="text-sm md:text-base text-slate-600 mb-6 md:mb-8">
        {contactData.subtitle}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        {contactData.formFields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm md:text-base font-semibold text-slate-700 mb-2">
              {field.label} {field.required && <span className="text-blue-600">*</span>}
            </label>
            
            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                rows="5"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm md:text-base"
              />
            ) : field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm md:text-base"
              >
                <option value="">Select project type...</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm md:text-base"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            w-full px-6 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base text-white
            transition-all duration-300 
            ${isSubmitting 
              ? 'bg-slate-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50'
            }
          `}
        >
          {isSubmitting ? 'Sending...' : contactData.submitButtonText}
        </button>

        {submitStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-sm md:text-base">
            ✓ Quote request sent! I'll get back to you within 24 hours.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

