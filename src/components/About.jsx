import { profile } from '../data'
import {
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Lightbulb,
  User
} from 'lucide-react'

export default function About({ darkMode, lang }) {
  return (
    <section 
      id="about" 
      className={`py-10 px-5 md:px-10 transition-colors ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      <div className="max-w-4xl mx-auto">

        {/* Title with Info icon in front */}
        <div className="text-center mb-2">
          <h2 className={`relative pb-4 inline-block font-display font-bold text-2xl md:text-3xl ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            <span className="inline-flex items-center justify-center gap-2.5">
              <User className="w-6 h-6 shrink-0" style={{ color: '#ff5e3a' }} />
              <span className={darkMode ? 'text-white' : 'text-navy-600'}>
                {lang === 'jp' ? '私について' : 'About'}
              </span>
            </span>
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full"
              style={{ backgroundColor: '#ff5e3a' }}
            ></span>
          </h2>
        </div>

        {/* Content */}
        <div className="text-center">

          <p className={`leading-relaxed max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-navy-700'
          }`}>
            {lang === 'jp' ? profile.bioJp : profile.bio}
          </p>

          {/* Information */}
          <div className="grid grid-cols-1 gap-5 mt-10 w-full max-w-md mx-auto">

            {/* Role */}
            <div className="flex items-center justify-start gap-3">
              <Briefcase className="w-5 h-5 shrink-0" style={{ color: '#ff5e3a' }} />

              <div className="text-left min-w-0">
                <span className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-navy-700'}`}>
                  {lang === 'jp' ? '専門:' : 'Specialized:'}
                </span>{' '}
                <span className={darkMode ? 'text-gray-300' : 'text-black'}>
                  {profile.tagline}
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center justify-start gap-3">
              <Mail className="w-5 h-5 shrink-0" style={{ color: '#ff5e3a' }} />

              <div className="text-left min-w-0">
                <span className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-navy-700'}`}>
                  {lang === 'jp' ? 'メール:' : 'Email:'}
                </span>{' '}
                <span className={darkMode ? 'text-gray-300' : 'text-black'}>
                  {profile.email}
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-start gap-3">
              <Phone className="w-5 h-5 shrink-0" style={{ color: '#ff5e3a' }} />

              <div className="text-left min-w-0">
                <span className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-navy-700'}`}>
                  {lang === 'jp' ? '電話番号:' : 'Phone:'}
                </span>{' '}
                <span className={darkMode ? 'text-gray-300' : 'text-black'}>
                  {profile.phone}
                </span>
              </div>
            </div>

            {/* Place */}
            <div className="flex items-center justify-start gap-3">
              <MapPin className="w-5 h-5 shrink-0" style={{ color: '#ff5e3a' }} />

              <div className="text-left min-w-0">
                <span className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-navy-700'}`}>
                  {lang === 'jp' ? '場所:' : 'Location:'}
                </span>{' '}
                <span className={darkMode ? 'text-gray-300' : 'text-black'}>
                  {lang === 'jp' ? profile.placeJp : profile.place}
                </span>
              </div>
            </div>

            {/* Interest */}
            <div className="flex items-center justify-start gap-3">
              <Lightbulb className="w-5 h-5 shrink-0" style={{ color: '#ff5e3a' }} />

              <div className="text-left min-w-0">
                <span className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-navy-700'}`}>
                  {lang === 'jp' ? '関心:' : 'Interest:'}
                </span>{' '}
                <span className={darkMode ? 'text-gray-300' : 'text-black'}>
                  {lang === 'jp' ? profile.interestsJp : profile.interests}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}