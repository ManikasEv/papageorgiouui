import ContactForm from './ContactForm';
import Map from './Map';

const Contact = () => {
  return (
    <section className="bg-slate-50 px-4 py-12 md:px-8 md:py-24" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout - Stack on mobile, side by side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Form - Full width on mobile, left side on desktop */}
          <div className="order-1">
            <ContactForm />
          </div>

          {/* Map - Full width on mobile, right side on desktop */}
          <div className="order-2">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

