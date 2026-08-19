import { useState, useRef, useEffect } from 'react'

export default function Contact() {
  const [showTerminal, setShowTerminal] = useState(false)

  const [inputVal, setInputVal] = useState('')
  const [terminalOutput, setTerminalOutput] = useState([])
  const [isInstalling, setIsInstalling] = useState(false)
  const [downloadStepIndex, setDownloadStepIndex] = useState(0)
  const [downloadProgress, setDownloadProgress] = useState(1)
  const [showContactCard, setShowContactCard] = useState(false)

  // Form state & Backend-style validation state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)

  const terminalEndRef = useRef(null)

  const availableCommands = [
    'ls',
    'ls -l',
    'cat about.txt',
    'cat hobby.txt',
    'cat projects',
    'cat skills',
    'sudo apt install contact',
    'clear',
    'whoami',
    'date',
    'pwd',
    'uname -a'
  ]

  const aptInstallSteps = [
    "Reading package lists... Done",
    "Building dependency tree... Done",
    "Reading state information... Done",
    "The following NEW package will be installed: contact",
    "Get:1 https://ppa.launchpad.net/pyae/contact/ubuntu noble/main amd64 contact [1024 kB]",
    "Unpacking contact details (100%)... Success!"
  ]

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [terminalOutput, downloadProgress, downloadStepIndex, showContactCard])

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const trimmed = inputVal.trim().toLowerCase()
      if (!trimmed) return

      const match = availableCommands.find(cmd => cmd.toLowerCase().startsWith(trimmed))
      if (match) {
        setInputVal(match)
      }
    }
  }

  const handleCommandSubmit = (e) => {
    e.preventDefault()
    const trimmed = inputVal.trim()
    if (!trimmed) return

    const newOutput = [...terminalOutput, { type: 'command', text: trimmed }]

    if (trimmed === 'sudo apt install contact') {
      setInputVal('')
      setTerminalOutput(newOutput)
      setIsInstalling(true)
      setDownloadStepIndex(0)
      setDownloadProgress(1)

      let currentStep = 0
      let progress = 1

      const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 18) + 15
        if (progress >= 100) {
          progress = 100
        }

        if (progress >= 20 && currentStep < 1) currentStep = 1
        if (progress >= 40 && currentStep < 2) currentStep = 2
        if (progress >= 60 && currentStep < 3) currentStep = 3
        if (progress >= 80 && currentStep < 4) currentStep = 4
        if (progress >= 100 && currentStep < 5) currentStep = 5

        setDownloadProgress(progress)
        setDownloadStepIndex(currentStep)

        if (progress === 100) {
          clearInterval(interval)
          setIsInstalling(false)
          setShowContactCard(true)
          setTerminalOutput((prev) => [
            ...prev,
            { type: 'apt-log', text: aptInstallSteps.join('\n') },
            { type: 'info', text: 'Contact card unlocked successfully inside terminal buffer!' }
          ])
        }
      }, 250)

    } else if (trimmed === 'ls') {
      setTerminalOutput([
        ...newOutput,
        { type: 'list-grid', files: ['projects', 'skills', 'about.txt', 'hobby.txt'] }
      ])
      setInputVal('')
    } else if (trimmed === 'ls -l' || trimmed === 'ls -la' || trimmed === 'ls -al' || trimmed === 'ls -alth' || trimmed === 'ls -lath') {
      setTerminalOutput([
        ...newOutput,
        { type: 'list-detailed', text: 'total 44' },
        { type: 'list-detailed', text: 'drwxr-xr-x 4 pyae pyae 4096 Jun 6 12:00 .' },
        { type: 'list-detailed', text: 'drwxr-xr-x 6 pyae pyae 4096 Jun 6 12:00 ..' },
        { type: 'list-detailed', text: '-rwxr--r-- 1 pyae pyae 2048 Jun 6 14:30 contact' },
        { type: 'list-detailed', text: 'drwxr-xr-x 2 pyae pyae 4096 Jun 6 12:00 projects' },
        { type: 'list-detailed', text: 'drwxr-xr-x 2 pyae pyae 4096 Jun 6 12:00 skills' },
        { type: 'list-detailed', text: '-rwxr--r-- 1 pyae pyae  512 Jun 6 12:00 about.txt' },
        { type: 'list-detailed', text: '-rwxr--r-- 1 pyae pyae  180 Jun 6 12:00 hobby.txt' },
      ])
      setInputVal('')
    } else if (trimmed === 'cat about.txt') {
      setTerminalOutput([
        ...newOutput,
        { type: 'cat-output', text: "I'm a Full Stack Developer with over 1 years of experience building modern web applications from the ground up. I specialize in React, Laravel, Spring and cloud architecture, with a strong passion for creating intuitive user interfaces backed by robust, well-structured APIs." }
      ])
      setInputVal('')
    } else if (trimmed === 'cat hobby.txt') {
      setTerminalOutput([
        ...newOutput,
        { type: 'cat-output', text: "I enjoy playing guitar, snooker, and billiards in my free time" }
      ])
      setInputVal('')
    } else if (trimmed === 'cat projects' || trimmed === 'cd projects && ls' || trimmed === 'cat projects/') {
      setTerminalOutput([
        ...newOutput,
        {
          type: 'projects-list',
          items: [
            { title: 'GuitarHub', tag: 'Ecommerce', overview: 'A full-featured e-commerce web application dedicated to buying and selling guitars, amplifiers, and music gear with secure cart management and checkout features.', languages: ['SpringBoot', 'Blade', 'Bootstrap', 'MySQL'] },
            { title: 'MangaTai', tag: 'MangaReader', overview: 'A comprehensive manga reading and uploading platform equipped with an admin dashboard, user coin transaction system, gift boxes, and chapter management.', languages: ['Laravel', 'Docker', 'MySQL', 'Tailwind CSS', 'Google OAuth'] },
            { title: 'Saleway Tracking', tag: 'Enterprise System', overview: 'An internal distribution and sales tracking application designed to monitor inventory movement, field sales updates, and distribution metrics efficiently.', languages: ['Laravel', 'React', 'MySQL', 'Tailwind CSS', 'Docker', 'Redis', 'Cobol'] }
          ]
        }
      ])
      setInputVal('')
    } else if (trimmed === 'cat skills' || trimmed === 'cd skills && ls' || trimmed === 'cat skills/') {
      setTerminalOutput([
        ...newOutput,
        {
          type: 'skills-list',
          categories: [
            { group: 'frontend', name: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS'] },
            { group: 'backend', name: 'Backend', items: ['Java', 'PHP', 'Laravel', 'SpringBoot'] },
            { group: 'database', name: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
            { group: 'devops', name: 'DevOps & Tools', items: ['Docker', 'AWS', 'GitHub', 'Kubernetes', 'shell script', 'Linux', 'Windows', 'MacOS'] }
          ]
        }
      ])
      setInputVal('')
    } else if (trimmed === 'whoami') {
      setTerminalOutput([
        ...newOutput,
        { type: 'success', text: 'pyaephoaung' }
      ])
      setInputVal('')
    } else if (trimmed === 'pwd') {
      setTerminalOutput([
        ...newOutput,
        { type: 'success', text: '/home/pyae/contact-terminal' }
      ])
      setInputVal('')
    } else if (trimmed === 'date') {
      setTerminalOutput([
        ...newOutput,
        { type: 'success', text: new Date().toString() }
      ])
      setInputVal('')
    } else if (trimmed === 'uname -a') {
      setTerminalOutput([
        ...newOutput,
        { type: 'success', text: 'Linux ubuntu style contact terminal' }
      ])
      setInputVal('')
    } else if (trimmed === 'clear') {
      setTerminalOutput([])
      setShowContactCard(false)
      setIsInstalling(false)
      setInputVal('')
      setSuccessMessage(false)
    } else if (trimmed.startsWith('mkdir') || trimmed.startsWith('touch') || trimmed.startsWith('rm') || trimmed.startsWith('nano') || trimmed.startsWith('vim') || trimmed.startsWith('vi')) {
      const cmdName = trimmed.split(' ')[0]
      setTerminalOutput([
        ...newOutput,
        { type: 'error', text: `bash: ${cmdName}: Permission denied` }
      ])
      setInputVal('')
    } else if (trimmed.startsWith('sudo')) {
      setTerminalOutput([
        ...newOutput,
        { type: 'error', text: `pyae is not in the sudoers file. This incident will be reported.` }
      ])
      setInputVal('')
    } else {
      const cmdName = trimmed.split(' ')[0]
      setTerminalOutput([
        ...newOutput,
        { type: 'error', text: `bash: ${cmdName}: command not found` }
      ])
      setInputVal('')
    }
  }

  // Handle Form Submission using AJAX fetch to FormSubmit
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    let newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'The name field is required.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'The email field is required.'
    } else if (!formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = 'The email must be a valid email address.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'The message field is required.'
    } else {
      const wordCount = formData.message.trim().split(/\s+/).length
      if (wordCount > 1000) {
        newErrors.message = `The message may not be greater than 1000 words. (Current: ${wordCount} words)`
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formsubmit.co/ajax/pyaephyoaung2377@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New message from Portfolio Terminal!"
        })
      });

      if (response.ok) {
        setSuccessMessage(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        setErrors({ message: 'Server error occurred while sending message. Please try again later.' })
      }
    } catch (error) {
      setErrors({ message: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-12 md:py-16 bg-white px-3 sm:px-6 md:px-10 text-gray-900 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3 md:mb-3">
          <h2 className="relative pb-4 inline-block font-display font-bold text-2xl md:text-3xl text-black">
            <span className="inline-flex items-center justify-center gap-2.5">
              <svg className="w-6 h-6 shrink-0" style={{ color: '#ff5e3a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="text-navy-600">Contact</span>
            </span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full" style={{ backgroundColor: '#ff5e3a' }}></span>
          </h2>
          <p className="text-navy-600  mt-1">I'm waiting for new opportunities</p>
        </div>

        {/* Reveal button styled like Ubuntu Terminal launcher */}
        <div className="flex flex-col items-center justify-center py-3 md:py-3">
          <button
            onClick={() => setShowTerminal(true)}
            className="group relative inline-flex items-center gap-3 bg-[#300a24]  text-white font-mono text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-purple-900/60 shadow-xl transition-all duration-200 active:scale-95"
          >
            {/* Ubuntu orange dot accent */}
            <span className="w-3 h-3 rounded-full bg-orange-500 shadow-sm animate-pulse shrink-0"></span>

            {/* Terminal prompt visual text */}
            <div className="flex items-center gap-1.5 text-left">
              <span className="text-emerald-400">pyae@ubuntu:~$</span>
              <span className="text-gray-200 group-hover:text-white">open contact form</span>
            </div>

            <svg className="w-4 h-4 ml-1 text-gray-400 group-hover:text-white transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
         
        </div>

        {/* Ubuntu Terminal Modal Popup */}
        {showTerminal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/20 animate-fadeIn">
            <div className="bg-[#2c001e] rounded-lg shadow-2xl overflow-hidden border border-gray-700 font-mono text-white text-xs sm:text-sm flex flex-col w-full max-w-3xl h-[85vh] sm:h-[580px]">

              {/* Terminal Header */}
              <div className="bg-[#300a24] px-3 py-2.5 sm:px-4 sm:py-3 flex items-center justify-between border-b border-gray-800 shrink-0">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <div onClick={() => setShowTerminal(false)} className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 hover:opacity-85 cursor-pointer"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 hover:opacity-85 cursor-pointer"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 hover:opacity-85 cursor-pointer"></div>
                </div>
                <div className="text-[10px] sm:text-xs text-gray-300 font-semibold tracking-wide truncate max-w-[160px] sm:max-w-none">pyae@ubuntu: ~ / contact-terminal</div>
                <button
                  onClick={() => setShowTerminal(false)}
                  aria-label="Close terminal"
                  className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded text-gray-300 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              {/* Terminal Body Container */}
              <div className="p-3 sm:p-5 flex-1 overflow-y-auto leading-relaxed text-gray-200">
                <pre className="text-emerald-400 mb-2 font-mono text-[8px] sm:text-[10px] leading-tight select-none overflow-x-auto">
                  {`██████╗ ██╗   ██╗ █████╗ ███████╗
██╔══██╗╚██╗ ██╔╝██╔══██╗██╔════╝
██████╔╝ ╚████╔╝ ███████║█████╗  
██╔═══╝   ╚██╔╝  ██╔══██║██╔══╝  
██║       ██║   ██║  ██║███████╗
╚═╝       ╚═╝   ╚═╝  ╚═╝╚══════╝`}
                </pre>

                <p className="text-emerald-400 mb-3 text-[11px] sm:text-xs leading-normal">
                  * Hint: type <span className="bg-gray-800 text-yellow-300 px-1 py-0.5 rounded font-bold">ls, ls -l, date, pwd, clear</span>, or <span className="bg-gray-800 text-yellow-300 px-1 py-0.5 rounded font-bold">cat about.txt... / tab key shortcut</span>, or <span className="bg-gray-800 text-yellow-300 px-1.5 py-0.5 rounded font-bold">sudo apt install contact</span> if you want to contact me.
                </p>

                {/* Terminal Output History */}
                {terminalOutput.map((out, idx) => (
                  <div key={idx} className="mb-2">
                    {out.type === 'command' && (
                      <div className="flex items-center gap-1.5 sm:gap-2 break-all">
                        <span className="text-green-400 font-bold shrink-0">pyae@ubuntu:~$</span>
                        <span className="text-white font-bold">{out.text}</span>
                      </div>
                    )}
                    {out.type === 'success' && <span className="text-green-400 block">{out.text}</span>}
                    {out.type === 'info' && <span className="text-cyan-300 font-bold block">{out.text}</span>}
                    {out.type === 'apt-log' && <span className="text-gray-300 block whitespace-pre-line font-mono text-[11px] sm:text-xs">{out.text}</span>}
                    {out.type === 'cat-output' && (
                      <div className="my-1.5 p-2.5 bg-black/40 rounded border border-gray-700 text-cyan-200 text-xs sm:text-sm whitespace-pre-wrap">
                        {out.text}
                      </div>
                    )}
                    {out.type === 'projects-list' && (
                      <div className="my-2 space-y-2">
                        {out.items.map((proj, pIdx) => (
                          <div key={pIdx} className="p-2.5 bg-black/50 rounded border border-gray-700 text-xs">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-orange-400 font-bold">{proj.title}</span>
                              <span className="bg-purple-900/60 text-purple-300 px-2 py-0.5 rounded text-[10px]">{proj.tag}</span>
                            </div>
                            <p className="text-gray-300 text-[11px] mb-1.5">{proj.overview}</p>
                            <div className="flex flex-wrap gap-1">
                              {proj.languages.map((lang, lIdx) => (
                                <span key={lIdx} className="bg-gray-800 text-yellow-300 px-1.5 py-0.5 rounded text-[9px] font-mono">{lang}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {out.type === 'skills-list' && (
                      <div className="my-2 space-y-2">
                        {out.categories.map((cat, cIdx) => (
                          <div key={cIdx} className="p-2.5 bg-black/50 rounded border border-gray-700 text-xs">
                            <span className="text-cyan-400 font-bold block mb-1">{cat.name}:</span>
                            <div className="flex flex-wrap gap-1">
                              {cat.items.map((skill, sIdx) => (
                                <span key={sIdx} className="bg-gray-800 text-emerald-300 px-1.5 py-0.5 rounded text-[10px] font-mono">{skill}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {out.type === 'list-grid' && (
                      <div className="flex flex-wrap gap-3 py-1">
                        {out.files.map((file, fIdx) => (
                          <span
                            key={fIdx}
                            className={file === 'contact' ? 'text-orange-400 font-bold' : file.endsWith('/') ? 'text-blue-400 font-bold' : file.includes('.txt') ? 'text-emerald-300' : 'text-gray-200'}
                          >
                            {file}
                          </span>
                        ))}
                      </div>
                    )}
                    {out.type === 'list-detailed' && (
                      <div className="text-[11px] text-gray-300 font-mono overflow-x-auto whitespace-nowrap">
                        {out.text.includes('contact') && !out.text.includes('cat') && !out.text.includes('about') ? (
                          <span className="text-orange-400 font-bold">{out.text}</span>
                        ) : out.text.includes('.txt') ? (
                          <span className="text-emerald-300">{out.text}</span>
                        ) : out.text.startsWith('d') ? (
                          <span className="text-blue-400 font-semibold">{out.text}</span>
                        ) : (
                          <span>{out.text}</span>
                        )}
                      </div>
                    )}
                    {out.type === 'error' && <span className="text-red-400 block break-all">{out.text}</span>}
                  </div>
                ))}

                {/* Simulated apt-get installation sequence */}
                {isInstalling && (
                  <div className="my-2 p-3 bg-black/40 rounded border border-purple-900 font-mono text-[11px]">
                    <div className="space-y-1 mb-2 text-gray-300">
                      {aptInstallSteps.slice(0, downloadStepIndex + 1).map((stepText, sIdx) => (
                        <div key={sIdx} className="flex justify-between items-center">
                          <span className="truncate pr-2">{stepText}</span>
                          {sIdx === downloadStepIndex && sIdx === 4 && (
                            <span className="text-orange-400 font-bold shrink-0">{downloadProgress}%</span>
                          )}
                        </div>
                      ))}
                    </div>
                    {downloadStepIndex === 4 && (
                      <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden mt-1.5">
                        <div
                          className="bg-orange-500 h-1.5 transition-all duration-300 ease-out"
                          style={{ width: `${downloadProgress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                )}

                {/* Unlocked Contact Card & Email Direct Form Inline inside Terminal Stream */}
                {showContactCard && (
                  <div className="my-3 p-3 sm:p-4 bg-[#1e0014] rounded-lg border border-purple-500/40 shadow-xl">
                    <div className="flex items-center space-x-2 mb-1">
                      <svg className="w-5 h-5 text-orange-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                      <h3 className="text-sm sm:text-base font-bold text-orange-400">Package Successfully Installed!</h3>
                    </div>
                    <p className="text-gray-300 text-[11px] sm:text-xs mb-2">Direct Communication Link Established:</p>

                    <div className="flex items-center gap-2 mb-3 bg-black/50 p-2 rounded border border-gray-700">
                      <span className="text-gray-400 text-[10px] sm:text-xs">Email:</span>
                      <a href="mailto:pyaephyoaung2377@gmail.com" className="text-cyan-400 font-semibold hover:underline text-[11px] sm:text-xs truncate">
                        pyaephyoaung2377@gmail.com
                      </a>
                    </div>

                    {successMessage ? (
                      <div className="p-3 bg-emerald-950/80 border border-emerald-500 rounded text-emerald-300 text-xs text-center space-y-1.5">
                        <p className="font-bold">✓ Message Sent Successfully!</p>
                        <p className="text-gray-300 text-[11px]">Your message has been delivered to pyaephyoaung2377@gmail.com.</p>
                        <button
                          onClick={() => setSuccessMessage(false)}
                          className="mt-1 bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded text-[10px] transition-colors"
                        >
                          Send Another Message
                        </button>
                      </div>
                    ) : (
                      <form
                        onSubmit={handleFormSubmit}
                        noValidate
                        className="space-y-2.5"
                      >
                        {/* Name Field */}
                        <div>
                          <label className="block text-[10px] sm:text-[11px] text-gray-400 mb-0.5">Your Name:</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. John Doe"
                            className={`w-full bg-black/60 rounded px-2.5 py-1.5 text-white focus:outline-none text-xs ${errors.name ? 'border border-red-500 focus:border-red-500' : 'border border-gray-700 focus:border-orange-500'}`}
                          />
                          {errors.name && (
                            <span className="text-red-400 text-[10px] mt-0.5 block font-mono">{errors.name}</span>
                          )}
                        </div>

                        {/* Email Field */}
                        <div>
                          <label className="block text-[10px] sm:text-[11px] text-gray-400 mb-0.5">Your Email:</label>
                          <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="e.g. john@example.com"
                            className={`w-full bg-black/60 rounded px-2.5 py-1.5 text-white focus:outline-none text-xs ${errors.email ? 'border border-red-500 focus:border-red-500' : 'border border-gray-700 focus:border-orange-500'}`}
                          />
                          {errors.email && (
                            <span className="text-red-400 text-[10px] mt-0.5 block font-mono">{errors.email}</span>
                          )}
                        </div>

                        {/* Message Field */}
                        <div>
                          <label className="block text-[10px] sm:text-[11px] text-gray-400 mb-0.5">Message (Max 1000 words):</label>
                          <textarea
                            name="message"
                            rows="2"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Type your message here..."
                            className={`w-full bg-black/60 rounded px-2.5 py-1.5 text-white focus:outline-none text-xs resize-none ${errors.message ? 'border border-red-500 focus:border-red-500' : 'border border-gray-700 focus:border-orange-500'}`}
                          ></textarea>
                          <div className="flex justify-between items-center mt-0.5">
                            <span className="text-[9px] text-gray-400">
                              {formData.message.trim() ? formData.message.trim().split(/\s+/).length : 0} / 1000 words
                            </span>
                          </div>
                          {errors.message && (
                            <span className="text-red-400 text-[10px] mt-0.5 block font-mono">{errors.message}</span>
                          )}
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-1.5 px-3 rounded transition-colors text-xs disabled:opacity-50"
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </form>
                    )}
                  </div>
                )}

                {/* Terminal Command Line Input */}
                <form onSubmit={handleCommandSubmit} className="flex items-center mt-3 pt-2 border-t border-gray-800/65">
                  <span className="text-green-400 font-bold mr-1.5 sm:mr-2 shrink-0 text-xs sm:text-sm">pyae@ubuntu:~$</span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="type command..."
                    disabled={isInstalling}
                    className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm focus:ring-0 placeholder:text-gray-600 min-w-0"
                  />
                </form>

                <div ref={terminalEndRef} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}