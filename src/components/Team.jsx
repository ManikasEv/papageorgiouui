import { teamData } from '../data/teamData';

const Team = () => {
  const { owner } = teamData;

  return (
    <section className="bg-white px-4 py-12 md:px-8 md:py-24" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
            {teamData.sectionTitle}
          </h2>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto">
            {teamData.sectionSubtitle}
          </p>
        </div>

        {/* Owner Profile */}
        <div className="max-w-4xl mx-auto">
          
          {/* Header with Name */}
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              {owner.name}
            </h3>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold">
              {owner.position}
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6 max-w-md mx-auto">
              <div className="bg-blue-100 rounded-xl p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold text-blue-600">{owner.experience}</p>
                <p className="text-xs md:text-sm text-slate-600 font-medium">Experience</p>
              </div>
              <div className="bg-blue-100 rounded-xl p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold text-blue-600">{owner.projectsCompleted}</p>
                <p className="text-xs md:text-sm text-slate-600 font-medium">Projects</p>
              </div>
            </div>
          </div>

          {/* Biography and Details */}
          <div className="space-y-6">
            
            {/* Biography */}
            <div className="space-y-4">
              {owner.biography.map((paragraph, index) => (
                <p key={index} className="text-sm md:text-base text-slate-700 leading-relaxed text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Specialties */}
            <div className="bg-slate-50 rounded-xl p-6 md:p-8 shadow-lg border-l-4 border-blue-600">
              <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Specialties</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {owner.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm md:text-base text-slate-700">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 md:p-8 text-white shadow-lg">
              <h4 className="text-xl md:text-2xl font-bold mb-3">Ready to Start Your Project?</h4>
              <p className="text-sm md:text-base mb-4 opacity-95">
                Get in touch for a free consultation and quote. I'm here to bring your tiling vision to life!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={`tel:${owner.phone}`}
                  className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {owner.phone}
                </a>
                <a 
                  href={`mailto:${owner.email}`}
                  className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

