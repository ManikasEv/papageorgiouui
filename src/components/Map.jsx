import { contactData } from '../data/contactData';

const Map = () => {
  return (
    <div className="bg-slate-100 rounded-xl overflow-hidden shadow-lg h-full border-t-4 border-blue-600">
      {/* Map Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 md:p-6">
        <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Service Area</h3>
        <p className="text-sm md:text-base text-blue-100">{contactData.mapAddress}</p>
      </div>

      {/* Map Container - Using embedded Google Maps */}
      <div className="relative h-64 md:h-full min-h-[300px] md:min-h-[500px]">
        <iframe
          title="Company Location Map"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19422.666666666668!2d${contactData.mapCoordinates.lng}!3d${contactData.mapCoordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDMxJzEyLjAiTiAxM8KwMjQnMTguMCJF!5e0!3m2!1sen!2sde!4v1234567890123!5m2!1sen!2sde`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </div>

      {/* Contact Info */}
      <div className="p-4 md:p-6 bg-white space-y-3 md:space-y-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-orange-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-700">Service Area</p>
            <p className="text-xs md:text-sm text-slate-600">{contactData.mapAddress}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-700">Working Hours</p>
            <p className="text-xs md:text-sm text-slate-600">Mon-Sat: 7:00 AM - 7:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;

