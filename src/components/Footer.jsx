import { profile } from '../data'

export default function Footer() {
  return (
    <footer className=" border-t border-navy-700 py-6 px-5 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-navy-700 text-xs">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p></p>
      </div>
    </footer>
  )
}
