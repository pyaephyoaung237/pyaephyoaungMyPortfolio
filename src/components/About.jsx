import { profile } from '../data'
import {
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Lightbulb,
  User
} from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="bg-white py-10 px-5 md:px-10">
      <div className="max-w-4xl mx-auto">

      {/* Title with Info icon in front */}
        <div className="text-center mb-2">
          <h2 className="relative pb-4 inline-block font-display font-bold text-2xl md:text-3xl text-black">
            <span className="inline-flex items-center justify-center gap-2.5">
              <User className="w-6 h-6 shrink-0" style={{ color: '#ff5e3a' }} />
              <span className="text-navy-600">About</span>
            </span>
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full"
              style={{ backgroundColor: '#ff5e3a' }}
            ></span>
          </h2>
        </div>

        {/* Content */}
        <div className="text-center">

          <p className="text-navy-700 leading-relaxed max-w-2xl mx-auto">
            {profile.bio}
          </p>

          {/* Information */}
          <div className="grid grid-cols-1 gap-5 mt-10 w-full max-w-md mx-auto">

            {/* Role */}
            <div className="flex items-center justify-start gap-3">
              <Briefcase className="w-5 h-5 shrink-0" style={{ color: '#ff5e3a' }} />

              <div className="text-left min-w-0">
                <span className="font-semibold text-navy-700">
                  Specialized:
                </span>{' '}
                <span className="text-black">
                  {profile.tagline}
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center justify-start gap-3">
              <Mail className="w-5 h-5 shrink-0" style={{ color: '#ff5e3a' }} />

              <div className="text-left min-w-0">
                <span className="font-semibold text-navy-700">
                  Email:
                </span>{' '}
                <a
                  href={`mailto:${profile.email}`}
                  className="text-black hover:underline break-words"
                  style={{ '--hover-color': '#ff5e3a' }}
                  onMouseEnter={(e) => e.target.style.color = '#ff5e3a'}
                  onMouseLeave={(e) => e.target.style.color = 'black'}
                >
                  {profile.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-start gap-3">
              <Phone className="w-5 h-5 shrink-0" style={{ color: '#ff5e3a' }} />

              <div className="text-left min-w-0">
                <span className="font-semibold text-navy-700">
                  Phone:
                </span>{' '}
                <a
                  href={`tel:${profile.phone}`}
                  className="text-black hover:underline"
                  onMouseEnter={(e) => e.target.style.color = '#ff5e3a'}
                  onMouseLeave={(e) => e.target.style.color = 'black'}
                >
                  {profile.phone}
                </a>
              </div>
            </div>

            {/* Place */}
            <div className="flex items-center justify-start gap-3">
              <MapPin className="w-5 h-5 shrink-0" style={{ color: '#ff5e3a' }} />

              <div className="text-left min-w-0">
                <span className="font-semibold text-navy-700">
                  Location:
                </span>{' '}
                <span className="text-black">
                  {profile.place}
                </span>
              </div>
            </div>

            {/* Interest */}
            <div className="flex items-center justify-start gap-3">
              <Lightbulb className="w-5 h-5 shrink-0" style={{ color: '#ff5e3a' }} />

              <div className="text-left min-w-0">
                <span className="font-semibold text-navy-700">
                  Interest:
                </span>{' '}
                <span className="text-black">
                  {profile.interests}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}