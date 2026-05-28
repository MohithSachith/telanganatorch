import { useState } from 'react'

const steps = [
  { number: 1, name: 'Personal Details' },
  { number: 2, name: 'Education & Work' },
  { number: 3, name: 'Skills & Interests' },
  { number: 4, name: 'TORCH Specifics' },
  { number: 5, name: 'Review & Submit' },
]

export default function Join() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    fullName: '',
    dob: '',
    gender: 'Male',
    contactNumber: '',
    emailAddress: '',
    aadharNumber: '',
    streetAddress: '',
    city: '',
    stateProvince: 'Telangana',
    postalCode: '',
    country: 'India',

    // Step 2: Educational & Occupational
    academicQualification: '',
    professionalQualification: '',
    occupation: '',
    employer: '',
    workAddress: '',
    workCity: '',
    workStateProvince: '',
    workPostalCode: '',
    workCountry: '',
    workPhone: '',
    workEmail: '',

    // Step 3: Skills & Interests
    skills: {
      eventManagement: false,
      writing: false,
      photography: false,
      computerKnowledge: false,
      paintingDrawing: false,
      poetAuthor: false,
    },
    fieldsOfInterest: {
      heritage: false,
      culture: false,
      art: false,
      archaeology: false,
    },
    facebook: '',
    instagram: '',
    xAccount: '',
    otherSocial: '',

    // Step 4: TORCH Specifics
    weeklyCommitment: 'Less than 2 hours',
    whyJoin: '',
    discoveryMethod: '',
    skillsContributed: '',
    volunteerExperience: '',
    membershipType: 'Individual Member',
    otherMembershipType: '',
    agreeToCode: false,
    declaration: false,
    signature: '',
  })

  // Attachment references (simulated on client, instructions to attach in final email)
  const [photoFile, setPhotoFile] = useState(null)
  const [aadharFile, setAadharFile] = useState(null)

  // Validation errors
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)

  // Helper to validate active step
  const validateStep = (step) => {
    const errs = {}
    if (step === 1) {
      if (!formData.fullName.trim()) errs.fullName = 'Full Name is required'
      if (!formData.dob) errs.dob = 'Date of Birth is required'
      if (!formData.contactNumber.trim()) errs.contactNumber = 'Contact Number is required'
      else if (!/^\+?[\d\s-]{10,15}$/.test(formData.contactNumber.trim())) {
        errs.contactNumber = 'Enter a valid contact number'
      }
      if (!formData.emailAddress.trim()) errs.emailAddress = 'Email is required'
      else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
        errs.emailAddress = 'Enter a valid email address'
      }
      if (!formData.aadharNumber.trim()) errs.aadharNumber = 'Aadhar Number is required'
      else if (!/^\d{12}$/.test(formData.aadharNumber.replace(/\s/g, ''))) {
        errs.aadharNumber = 'Aadhar Number must be exactly 12 digits'
      }
      if (!formData.streetAddress.trim()) errs.streetAddress = 'Street Address is required'
      if (!formData.city.trim()) errs.city = 'City is required'
      if (!formData.postalCode.trim()) errs.postalCode = 'Postal/ZIP Code is required'
    }

    if (step === 2) {
      if (!formData.academicQualification.trim()) errs.academicQualification = 'Academic Qualification is required'
      if (!formData.occupation.trim()) errs.occupation = 'Occupation is required'
    }

    if (step === 4) {
      if (!formData.whyJoin.trim()) errs.whyJoin = 'This statement is required'
      if (!formData.signature.trim()) errs.signature = 'Your typed signature is required'
      if (!formData.agreeToCode) errs.agreeToCode = 'You must agree to abide by the TORCH values'
      if (!formData.declaration) errs.declaration = 'You must accept the truthfulness declaration'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Format form content to string for clipboard and email body
  const formatFormSummary = () => {
    const skillsList = Object.entries(formData.skills)
      .filter(([_, checked]) => checked)
      .map(([skill]) => skill.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()))
      .join(', ') || 'None selected'

    const fieldsList = Object.entries(formData.fieldsOfInterest)
      .filter(([_, checked]) => checked)
      .map(([field]) => field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()))
      .join(', ') || 'None selected'

    return `TORCH TELANGANA - MEMBERSHIP APPLICATION
======================================================
Submission Date: ${new Date().toLocaleDateString('en-IN')}

PERSONAL DETAILS
----------------
Full Name: ${formData.fullName}
Date of Birth: ${formData.dob} (YYYY-MM-DD)
Gender: ${formData.gender}
Contact Number: ${formData.contactNumber}
Email Address: ${formData.emailAddress}
Aadhar Number: ${formData.aadharNumber}

Address:
Street Address: ${formData.streetAddress}
City: ${formData.city}
State/Province: ${formData.stateProvince}
Postal/ZIP Code: ${formData.postalCode}
Country: ${formData.country}

EDUCATION & OCCUPATION
----------------------
Academic Qualification: ${formData.academicQualification}
Professional Qualification: ${formData.professionalQualification || 'N/A'}
Occupation: ${formData.occupation}
Employer / Organisation: ${formData.employer || 'N/A'}

Work Address:
Street Address: ${formData.workAddress || 'N/A'}
City: ${formData.workCity || 'N/A'}
State/Province: ${formData.workStateProvince || 'N/A'}
Postal/ZIP Code: ${formData.workPostalCode || 'N/A'}
Country: ${formData.workCountry || 'N/A'}
Work Phone: ${formData.workPhone || 'N/A'}
Work Email: ${formData.workEmail || 'N/A'}

SKILLS & FIELDS OF INTEREST
---------------------------
Skills: ${skillsList}
Fields of Interest: ${fieldsList}

Social Media Handles:
- Facebook: ${formData.facebook || 'N/A'}
- Instagram: ${formData.instagram || 'N/A'}
- X (Twitter): ${formData.xAccount || 'N/A'}
- Other: ${formData.otherSocial || 'N/A'}

TORCH SPECIFIC INFORMATION
--------------------------
Commitment per Week: ${formData.weeklyCommitment}
Why do you want to join TORCH?: ${formData.whyJoin}
How did you find out about TORCH?: ${formData.discoveryMethod || 'N/A'}
What skills/experience can you contribute?: ${formData.skillsContributed || 'N/A'}
Past Volunteer/NGO Details: ${formData.volunteerExperience || 'No past details'}

MEMBERSHIP TYPE & DECLARATION
-----------------------------
Membership Type: ${formData.membershipType === 'Other' ? formData.otherMembershipType : formData.membershipType}
Abide by Code of Conduct & Values: Yes
Declaration Accepted: Yes (Information provided is true)
Typed Signature: ${formData.signature}
Date: ${new Date().toLocaleDateString('en-IN')}

ATTACHMENTS (To be attached to the email):
1. Latest Photograph: ${photoFile ? photoFile.name : 'Not selected in browser'}
2. Aadhar Card Copy: ${aadharFile ? aadharFile.name : 'Not selected in browser'}
======================================================`
  }

  // Handle Submit Application
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateStep(4)) return

    const summary = formatFormSummary()

    // 1. Copy to clipboard automatically
    navigator.clipboard.writeText(summary)
      .then(() => setCopySuccess(true))
      .catch(() => setCopySuccess(false))

    // 2. Format mailto Link
    const recipient = 'torch.heritage@gmail.com'
    const subject = encodeURIComponent(`TORCH Membership Application - ${formData.fullName}`)
    const body = encodeURIComponent(summary)
    
    // Redirect / Open mail composer
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`

    setIsSubmitted(true)
    setCurrentStep(5)
  }

  const handleCopyToClipboard = () => {
    const summary = formatFormSummary()
    navigator.clipboard.writeText(summary)
      .then(() => {
        setCopySuccess(true)
        setTimeout(() => setCopySuccess(false), 2000)
      })
  }

  const handlePrint = () => {
    window.print()
  }

  // Print-Ready Layout renderer helper (hidden on screen, visible on print)
  const renderPrintableForm = () => {
    const activeSkills = Object.entries(formData.skills)
      .filter(([_, checked]) => checked)
      .map(([skill]) => skill.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()))
    
    const activeInterests = Object.entries(formData.fieldsOfInterest)
      .filter(([_, checked]) => checked)
      .map(([field]) => field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()))

    return (
      <div className="print-only" style={{ display: 'none', color: '#000', fontFamily: 'serif', padding: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px', borderBottom: '2px solid #000', paddingBottom: '10px' }}>
          <h1 style={{ fontSize: '24px', margin: '0 0 5px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>TORCH - TELANGANA</h1>
          <p style={{ fontSize: '12px', margin: '0 0 5px 0', fontStyle: 'italic' }}>Team of Research on Culture & Heritage</p>
          <p style={{ fontSize: '11px', margin: '0' }}>Established to Preserve, Restore and Promote the Heritage (Registered NGO)</p>
          <h2 style={{ fontSize: '18px', margin: '15px 0 0 0', fontWeight: 'bold', textDecoration: 'underline' }}>MEMBERSHIP APPLICATION FORM</h2>
        </div>

        <h3 style={{ borderBottom: '1px solid #ccc', margin: '15px 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>1. PERSONAL INFORMATION</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', marginBottom: '15px' }}>
          <tbody>
            <tr>
              <td style={{ width: '25%', padding: '4px 0', fontWeight: 'bold' }}>Full Name:</td>
              <td style={{ borderBottom: '1px dotted #000', padding: '4px 0' }}>{formData.fullName}</td>
            </tr>
            <tr>
              <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Date of Birth:</td>
              <td style={{ borderBottom: '1px dotted #000', padding: '4px 0' }}>{formData.dob} (MM/DD/YYYY)</td>
            </tr>
            <tr>
              <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Gender:</td>
              <td style={{ borderBottom: '1px dotted #000', padding: '4px 0' }}>{formData.gender}</td>
            </tr>
            <tr>
              <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Contact Number:</td>
              <td style={{ borderBottom: '1px dotted #000', padding: '4px 0' }}>{formData.contactNumber}</td>
            </tr>
            <tr>
              <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Email Address:</td>
              <td style={{ borderBottom: '1px dotted #000', padding: '4px 0' }}>{formData.emailAddress}</td>
            </tr>
            <tr>
              <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Aadhar Number:</td>
              <td style={{ borderBottom: '1px dotted #000', padding: '4px 0' }}>{formData.aadharNumber}</td>
            </tr>
            <tr>
              <td style={{ padding: '4px 0', fontWeight: 'bold', valign: 'top' }}>Residential Address:</td>
              <td style={{ borderBottom: '1px dotted #000', padding: '4px 0' }}>
                {formData.streetAddress}, {formData.city}, {formData.stateProvince} - {formData.postalCode}, {formData.country}
              </td>
            </tr>
          </tbody>
        </table>

        <h3 style={{ borderBottom: '1px solid #ccc', margin: '15px 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>2. EDUCATIONAL & OCCUPATIONAL DETAILS</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', marginBottom: '15px' }}>
          <tbody>
            <tr>
              <td style={{ width: '25%', padding: '4px 0', fontWeight: 'bold' }}>Academic Qualification:</td>
              <td style={{ borderBottom: '1px dotted #000', padding: '4px 0' }}>{formData.academicQualification}</td>
            </tr>
            <tr>
              <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Professional Qualification:</td>
              <td style={{ borderBottom: '1px dotted #000', padding: '4px 0' }}>{formData.professionalQualification || 'N/A'}</td>
            </tr>
            <tr>
              <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Occupation:</td>
              <td style={{ borderBottom: '1px dotted #000', padding: '4px 0' }}>{formData.occupation}</td>
            </tr>
            <tr>
              <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Employer / Organisation:</td>
              <td style={{ borderBottom: '1px dotted #000', padding: '4px 0' }}>{formData.employer || 'N/A'}</td>
            </tr>
            {formData.workAddress && (
              <tr>
                <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Work Address:</td>
                <td style={{ borderBottom: '1px dotted #000', padding: '4px 0' }}>
                  {formData.workAddress}, {formData.workCity}, {formData.workStateProvince} - {formData.workPostalCode}, {formData.workCountry}
                </td>
              </tr>
            )}
            {(formData.workPhone || formData.workEmail) && (
              <tr>
                <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Work Contacts:</td>
                <td style={{ borderBottom: '1px dotted #000', padding: '4px 0' }}>
                  Phone: {formData.workPhone || '-'} | Email: {formData.workEmail || '-'}
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <h3 style={{ borderBottom: '1px solid #ccc', margin: '15px 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>3. SKILLS, INTERESTS & SOCIAL LINKS</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', marginBottom: '15px' }}>
          <tbody>
            <tr>
              <td style={{ width: '25%', padding: '4px 0', fontWeight: 'bold' }}>Skills:</td>
              <td style={{ borderBottom: '1px dotted #000', padding: '4px 0' }}>{activeSkills.join(', ') || 'None selected'}</td>
            </tr>
            <tr>
              <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Field of Interest:</td>
              <td style={{ borderBottom: '1px dotted #000', padding: '4px 0' }}>{activeInterests.join(', ') || 'None selected'}</td>
            </tr>
            <tr>
              <td style={{ padding: '4px 0', fontWeight: 'bold', valign: 'top' }}>Social Accounts:</td>
              <td style={{ borderBottom: '1px dotted #000', padding: '4px 0' }}>
                Facebook: {formData.facebook || '-'} | Instagram: {formData.instagram || '-'} | X: {formData.xAccount || '-'} | Other: {formData.otherSocial || '-'}
              </td>
            </tr>
          </tbody>
        </table>

        <h3 style={{ borderBottom: '1px solid #ccc', margin: '15px 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>4. TORCH SPECIFIC INFORMATION</h3>
        <div style={{ fontSize: '12px', lineHeight: '1.6' }}>
          <p><strong>Time commitment per week:</strong> {formData.weeklyCommitment}</p>
          <p><strong>Why do you want to join TORCH?:</strong> {formData.whyJoin}</p>
          <p><strong>How did you find out about TORCH?:</strong> {formData.discoveryMethod || 'N/A'}</p>
          <p><strong>What skills/experience can you contribute?:</strong> {formData.skillsContributed || 'N/A'}</p>
          {formData.volunteerExperience && <p><strong>Past volunteer work/NGO involvement:</strong> {formData.volunteerExperience}</p>}
        </div>

        <h3 style={{ borderBottom: '1px solid #ccc', margin: '20px 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>5. DECLARATION</h3>
        <p style={{ fontSize: '11px', lineHeight: '1.6', margin: '0 0 15px 0', fontStyle: 'italic' }}>
          I hereby declare that the information provided above is true to the best of my knowledge. I understand and agree to abide by the rules and regulations of TORCH - Telangana. I agree to uphold the NGO's code of conduct and core values of heritage preservation.
        </p>

        <table style={{ width: '100%', marginTop: '30px', fontSize: '12px' }}>
          <tbody>
            <tr>
              <td style={{ width: '50%', padding: '0 10px 0 0' }}>
                <div style={{ borderBottom: '1px solid #000', height: '30px' }}></div>
                <div style={{ padding: '4px 0', fontWeight: 'bold' }}>Signature of the Applicant (Typed: {formData.signature})</div>
              </td>
              <td style={{ width: '50%', padding: '0 0 0 10px' }}>
                <div style={{ borderBottom: '1px solid #000', height: '30px', lineHeight: '35px' }}>{new Date().toLocaleDateString('en-IN')}</div>
                <div style={{ padding: '4px 0', fontWeight: 'bold' }}>Date</div>
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: '40px', border: '1px dashed #000', padding: '10px', fontSize: '10px' }}>
          <strong>Attachments Checklist (To send along with this printed application to torch.heritage@gmail.com):</strong>
          <br />
          [  ] Copy of Aadhar Card
          <br />
          [  ] Latest Passport Size Photograph
        </div>
      </div>
    )
  }

  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--color-cream)' }}>
      {/* Dynamic Printing CSS */}
      <style>{`
        @media print {
          body {
            background: #FFFFFF !important;
            color: #000000 !important;
            font-family: 'Times New Roman', Times, serif;
          }
          header, footer, nav, button, .no-print, .step-wizard-header {
            display: none !important;
          }
          main {
            padding-top: 0 !important;
            background: none !important;
          }
          .print-only {
            display: block !important;
          }
        }
        @media (max-width: 768px) {
          .join-header { padding: 3rem 1.25rem 2.5rem !important; }
          .join-header h1 { font-size: clamp(1.6rem, 6vw, 2.2rem) !important; }
          .join-header p { font-size: 0.85rem !important; }
          .join-section { padding: 1.5rem 1rem 4rem !important; }
          .join-container { padding: 1.25rem !important; }
          .join-container h3 { font-size: 1.3rem !important; }
          .form-grid-2 { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .wizard-steps { display: none !important; }
          .wizard-steps-mobile { display: block !important; }
          .join-nav-footer { flex-direction: column !important; gap: 0.75rem !important; }
          .join-nav-footer button { width: 100% !important; justify-content: center !important; }
          .join-review-btns { flex-direction: column !important; }
          .join-review-btns button { width: 100% !important; }
          .join-success-btns { flex-direction: column !important; align-items: stretch !important; }
          .join-success-btns button { width: 100% !important; justify-content: center !important; }
          .join-review-pre { font-size: 0.68rem !important; max-height: 240px !important; }
          .join-file-grid { grid-template-columns: 1fr !important; }
          .join-memtype-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .join-header { padding: 2.5rem 1rem 2rem !important; }
          .join-container { padding: 1rem !important; }
          .join-container h3 { font-size: 1.2rem !important; }
          .join-section { padding: 1rem 0.75rem 3rem !important; }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(232, 220, 203, 0.35);
        }
        select option {
          background: #101010;
          color: #FFF;
        }
      `}</style>

      {/* Screen Render */}
      <div className="no-print">
        {/* Header banner */}
        <section className="join-header animate-fade-up" style={{
          padding: '4.5rem 2rem 3.5rem',
          background: 'linear-gradient(135deg, #0F0F0F 0%, #161616 100%)', borderBottom: '1px solid rgba(139, 94, 60, 0.15)',
          textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: `repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 40px)`, backgroundSize: '55px 55px' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p className="section-label" style={{ color: 'var(--color-gold)', justifyContent: 'center', marginBottom: '0.75rem' }}>Join the Movement</p>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: 'var(--color-beige)', marginBottom: '0.75rem' }}>
              TORCH Membership Portal
            </h1>
            <p style={{ color: 'rgba(232, 220, 203, 0.7)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Become an active member in preserving, restoring, and promoting Telangana's rich cultural heritage.
              Fill out the form below.
            </p>
          </div>
        </section>

        {/* Progress wizard */}
        <section className="step-wizard-header" style={{ borderBottom: '1px solid rgba(139, 94, 60, 0.1)', padding: '1.25rem 0', backgroundColor: '#0B0B0B' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
            {/* Desktop progress labels */}
            <div className="wizard-steps" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', height: '2px', background: 'rgba(201, 166, 107, 0.15)', left: '10%', right: '10%', zIndex: 1 }} />
              <div style={{ position: 'absolute', height: '2px', background: 'var(--color-primary-light)', left: '10%', width: `${((currentStep - 1) / (steps.length - 1)) * 80}%`, zIndex: 2, transition: 'width 0.4s ease' }} />
              
              {steps.map(s => {
                const isActive = currentStep === s.number
                const isCompleted = currentStep > s.number
                return (
                  <div key={s.number} style={{ zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: s.number < currentStep ? 'pointer' : 'default' }} onClick={() => s.number < currentStep && setCurrentStep(s.number)}>
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      background: isActive ? 'var(--color-primary-light)' : isCompleted ? 'var(--color-gold)' : '#1A1A1A',
                      color: isActive || isCompleted ? '#000' : 'rgba(232, 220, 203, 0.5)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 600, fontSize: '0.85rem',
                      border: '1px solid rgba(139, 94, 60, 0.3)',
                      transition: 'all 0.3s ease',
                      boxShadow: isActive ? '0 0 15px rgba(166, 90, 58, 0.4)' : 'none',
                    }}>
                      {isCompleted ? '✓' : s.number}
                    </div>
                    <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: isActive ? 'var(--color-gold)' : 'rgba(232, 220, 203, 0.45)', marginTop: '0.5rem', fontWeight: isActive ? 600 : 500 }}>
                      {s.name}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Mobile progress label */}
            <div className="wizard-steps-mobile" style={{ display: 'none', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-gold)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.1em' }}>
                Step {currentStep} of 5: {steps[currentStep - 1].name}
              </div>
              <div style={{ height: '4px', background: 'rgba(201, 166, 107, 0.15)', borderRadius: '2px', marginTop: '0.5rem', overflow: 'hidden' }}>
                <div style={{ height: '100%', background: 'var(--color-primary-light)', width: `${(currentStep / steps.length) * 100}%`, transition: 'width 0.4s ease' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Main form body container */}
        <section className="join-section" style={{ padding: '4rem 2rem 6rem' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div className="join-container" style={{
              background: '#141414',
              border: '1px solid rgba(139, 94, 60, 0.25)',
              padding: '3rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              color: 'var(--color-gold)',
            }}>
              
              {/* Form elements step by step */}
              {currentStep === 1 && (
                <div className="fade-in">
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-beige)', marginBottom: '0.5rem' }}>Personal Information</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(232, 220, 203, 0.6)', marginBottom: '2rem' }}>Please enter your personal details. Required fields are marked with *.</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {/* Full Name */}
                    <div>
                      <label htmlFor="join-fullname" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>Full Name *</label>
                      <input id="join-fullname" type="text" required placeholder="Mallu Naik Badavath" value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: `1px solid ${errors.fullName ? '#d32f2f' : 'rgba(139, 94, 60, 0.25)'}`, background: '#101010', fontSize: '0.9rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                      {errors.fullName && <p style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.fullName}</p>}
                    </div>

                    <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                      {/* DOB */}
                      <div>
                        <label htmlFor="join-dob" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>Date of Birth *</label>
                        <input id="join-dob" type="date" required value={formData.dob} onChange={e => setFormData({ ...formData, dob: e.target.value })}
                          style={{ width: '100%', padding: '0.75rem 1rem', border: `1px solid ${errors.dob ? '#d32f2f' : 'rgba(139, 94, 60, 0.25)'}`, background: '#101010', fontSize: '0.9rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                        {errors.dob && <p style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.dob}</p>}
                      </div>

                      {/* Gender */}
                      <div>
                        <label htmlFor="join-gender" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>Gender *</label>
                        <select id="join-gender" value={formData.gender} onChange={e => setFormData({ ...formData, gender: e.target.value })}
                          style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid rgba(139, 94, 60, 0.25)', background: '#101010', fontSize: '0.9rem', color: '#FFF', outline: 'none', borderRadius: '2px', cursor: 'pointer' }}>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                      {/* Phone */}
                      <div>
                        <label htmlFor="join-phone" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>Contact Number *</label>
                        <input id="join-phone" type="tel" required placeholder="9908649285" value={formData.contactNumber} onChange={e => setFormData({ ...formData, contactNumber: e.target.value })}
                          style={{ width: '100%', padding: '0.75rem 1rem', border: `1px solid ${errors.contactNumber ? '#d32f2f' : 'rgba(139, 94, 60, 0.25)'}`, background: '#101010', fontSize: '0.9rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                        {errors.contactNumber && <p style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.contactNumber}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="join-email" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>Email Address *</label>
                        <input id="join-email" type="email" required placeholder="mallunaik007@gmail.com" value={formData.emailAddress} onChange={e => setFormData({ ...formData, emailAddress: e.target.value })}
                          style={{ width: '100%', padding: '0.75rem 1rem', border: `1px solid ${errors.emailAddress ? '#d32f2f' : 'rgba(139, 94, 60, 0.25)'}`, background: '#101010', fontSize: '0.9rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                        {errors.emailAddress && <p style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.emailAddress}</p>}
                      </div>
                    </div>

                    {/* Aadhar */}
                    <div>
                      <label htmlFor="join-aadhar" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>Aadhar Number *</label>
                      <input id="join-aadhar" type="text" required placeholder="9377 8464 3685" value={formData.aadharNumber} onChange={e => setFormData({ ...formData, aadharNumber: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: `1px solid ${errors.aadharNumber ? '#d32f2f' : 'rgba(139, 94, 60, 0.25)'}`, background: '#101010', fontSize: '0.9rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                      {errors.aadharNumber && <p style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.aadharNumber}</p>}
                    </div>

                    {/* Address details */}
                    <div>
                      <h4 style={{ fontSize: '0.85rem', color: 'var(--color-secondary-light)', borderBottom: '1px solid rgba(139, 94, 60, 0.15)', paddingBottom: '0.25rem', marginTop: '0.5rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Residential Address</h4>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <div>
                          <label htmlFor="join-street" style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.6)', marginBottom: '0.25rem' }}>Street Address *</label>
                          <input id="join-street" type="text" required placeholder="Sai Aishwarya Residency, Road no. 11, Parvathapur, Medipally." value={formData.streetAddress} onChange={e => setFormData({ ...formData, streetAddress: e.target.value })}
                            style={{ width: '100%', padding: '0.65rem 0.85rem', border: `1px solid ${errors.streetAddress ? '#d32f2f' : 'rgba(139, 94, 60, 0.2)'}`, background: '#101010', fontSize: '0.85rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                          {errors.streetAddress && <p style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.streetAddress}</p>}
                        </div>

                        <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                          <div>
                            <label htmlFor="join-city" style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.6)', marginBottom: '0.25rem' }}>City *</label>
                            <input id="join-city" type="text" required placeholder="Hyderabad" value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })}
                              style={{ width: '100%', padding: '0.65rem 0.85rem', border: `1px solid ${errors.city ? '#d32f2f' : 'rgba(139, 94, 60, 0.2)'}`, background: '#101010', fontSize: '0.85rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                            {errors.city && <p style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.city}</p>}
                          </div>
                          <div>
                            <label htmlFor="join-state" style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.6)', marginBottom: '0.25rem' }}>State/Province *</label>
                            <input id="join-state" type="text" required placeholder="Telangana" value={formData.stateProvince} onChange={e => setFormData({ ...formData, stateProvince: e.target.value })}
                              style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid rgba(139, 94, 60, 0.2)', background: '#101010', fontSize: '0.85rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                          </div>
                        </div>

                        <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                          <div>
                            <label htmlFor="join-zip" style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.6)', marginBottom: '0.25rem' }}>Postal/ZIP Code *</label>
                            <input id="join-zip" type="text" required placeholder="500098" value={formData.postalCode} onChange={e => setFormData({ ...formData, postalCode: e.target.value })}
                              style={{ width: '100%', padding: '0.65rem 0.85rem', border: `1px solid ${errors.postalCode ? '#d32f2f' : 'rgba(139, 94, 60, 0.2)'}`, background: '#101010', fontSize: '0.85rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                            {errors.postalCode && <p style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.postalCode}</p>}
                          </div>
                          <div>
                            <label htmlFor="join-country" style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.6)', marginBottom: '0.25rem' }}>Country *</label>
                            <input id="join-country" type="text" required placeholder="India" value={formData.country} onChange={e => setFormData({ ...formData, country: e.target.value })}
                              style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid rgba(139, 94, 60, 0.2)', background: '#101010', fontSize: '0.85rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="fade-in">
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-beige)', marginBottom: '0.5rem' }}>Educational & Occupational Info</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(232, 220, 203, 0.6)', marginBottom: '2rem' }}>Provide details about your qualifications and occupation.</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {/* Academic Qualification */}
                    <div>
                      <label htmlFor="join-acad" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>Academic Qualification (Completed/Studying) *</label>
                      <input id="join-acad" type="text" required placeholder="M. A, B. Ed, LLB" value={formData.academicQualification} onChange={e => setFormData({ ...formData, academicQualification: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: `1px solid ${errors.academicQualification ? '#d32f2f' : 'rgba(139, 94, 60, 0.25)'}`, background: '#101010', fontSize: '0.9rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                      {errors.academicQualification && <p style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.academicQualification}</p>}
                    </div>

                    {/* Professional Qualification */}
                    <div>
                      <label htmlFor="join-prof" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>Professional Qualification</label>
                      <input id="join-prof" type="text" placeholder="Assistant Director" value={formData.professionalQualification} onChange={e => setFormData({ ...formData, professionalQualification: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid rgba(139, 94, 60, 0.25)', background: '#101010', fontSize: '0.9rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                    </div>

                    <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                      {/* Occupation */}
                      <div>
                        <label htmlFor="join-occup" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>Occupation *</label>
                        <input id="join-occup" type="text" required placeholder="Employee" value={formData.occupation} onChange={e => setFormData({ ...formData, occupation: e.target.value })}
                          style={{ width: '100%', padding: '0.75rem 1rem', border: `1px solid ${errors.occupation ? '#d32f2f' : 'rgba(139, 94, 60, 0.25)'}`, background: '#101010', fontSize: '0.9rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                        {errors.occupation && <p style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.occupation}</p>}
                      </div>

                      {/* Employer */}
                      <div>
                        <label htmlFor="join-empl" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>Employer / Organisation</label>
                        <input id="join-empl" type="text" placeholder="Government Archaeology Dept." value={formData.employer} onChange={e => setFormData({ ...formData, employer: e.target.value })}
                          style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid rgba(139, 94, 60, 0.25)', background: '#101010', fontSize: '0.9rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                      </div>
                    </div>

                    {/* Work Address details */}
                    <div>
                      <h4 style={{ fontSize: '0.85rem', color: 'var(--color-secondary-light)', borderBottom: '1px solid rgba(139, 94, 60, 0.15)', paddingBottom: '0.25rem', marginTop: '0.5rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Work Address (Optional)</h4>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <div>
                          <label htmlFor="join-workstreet" style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.6)', marginBottom: '0.25rem' }}>Work Street Address</label>
                          <input id="join-workstreet" type="text" placeholder="District Archaeological Museum Warangal" value={formData.workAddress} onChange={e => setFormData({ ...formData, workAddress: e.target.value })}
                            style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid rgba(139, 94, 60, 0.2)', background: '#101010', fontSize: '0.85rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                        </div>

                        <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                          <div>
                            <label htmlFor="join-workcity" style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.6)', marginBottom: '0.25rem' }}>City</label>
                            <input id="join-workcity" type="text" placeholder="Warangal" value={formData.workCity} onChange={e => setFormData({ ...formData, workCity: e.target.value })}
                              style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid rgba(139, 94, 60, 0.2)', background: '#101010', fontSize: '0.85rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                          </div>
                          <div>
                            <label htmlFor="join-workstate" style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.6)', marginBottom: '0.25rem' }}>State/Province</label>
                            <input id="join-workstate" type="text" placeholder="Telangana" value={formData.workStateProvince} onChange={e => setFormData({ ...formData, workStateProvince: e.target.value })}
                              style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid rgba(139, 94, 60, 0.2)', background: '#101010', fontSize: '0.85rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                          </div>
                        </div>

                        <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                          <div>
                            <label htmlFor="join-workzip" style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.6)', marginBottom: '0.25rem' }}>Postal/ZIP Code</label>
                            <input id="join-workzip" type="text" placeholder="506007" value={formData.workPostalCode} onChange={e => setFormData({ ...formData, workPostalCode: e.target.value })}
                              style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid rgba(139, 94, 60, 0.2)', background: '#101010', fontSize: '0.85rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                          </div>
                          <div>
                            <label htmlFor="join-workcountry" style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.6)', marginBottom: '0.25rem' }}>Country</label>
                            <input id="join-workcountry" type="text" placeholder="India" value={formData.workCountry} onChange={e => setFormData({ ...formData, workCountry: e.target.value })}
                              style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid rgba(139, 94, 60, 0.2)', background: '#101010', fontSize: '0.85rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                      {/* Work Phone */}
                      <div>
                        <label htmlFor="join-workphone" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>Work Phone</label>
                        <input id="join-workphone" type="tel" placeholder="0870-244xxxx" value={formData.workPhone} onChange={e => setFormData({ ...formData, workPhone: e.target.value })}
                          style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid rgba(139, 94, 60, 0.25)', background: '#101010', fontSize: '0.9rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                      </div>

                      {/* Work Email */}
                      <div>
                        <label htmlFor="join-workemail" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>Work Email</label>
                        <input id="join-workemail" type="email" placeholder="work@archaeology.gov.in" value={formData.workEmail} onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                          style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid rgba(139, 94, 60, 0.25)', background: '#101010', fontSize: '0.9rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="fade-in">
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-beige)', marginBottom: '0.5rem' }}>Skills & Interests</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(232, 220, 203, 0.6)', marginBottom: '2rem' }}>Tick the skills and fields that align with your experience and interests.</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    
                    {/* Skills (Checkboxes) */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem', fontWeight: 600 }}>Skills</label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
                        {[
                          { key: 'eventManagement', label: 'Event Management' },
                          { key: 'writing', label: 'Writing' },
                          { key: 'photography', label: 'Photography' },
                          { key: 'computerKnowledge', label: 'Computer Knowledge' },
                          { key: 'paintingDrawing', label: 'Painting/ Drawing' },
                          { key: 'poetAuthor', label: 'Poet/Author' },
                        ].map(({ key, label }) => (
                          <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(232, 220, 203, 0.85)', fontSize: '0.9rem', cursor: 'pointer' }}>
                            <input type="checkbox" checked={formData.skills[key]} onChange={e => setFormData({ ...formData, skills: { ...formData.skills, [key]: e.target.checked } })}
                              style={{ width: '16px', height: '16px', accentColor: 'var(--color-primary-light)' }} />
                            {label}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Field of Interest (Checkboxes) */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem', fontWeight: 600 }}>Field of Interest</label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
                        {[
                          { key: 'heritage', label: 'Heritage' },
                          { key: 'culture', label: 'Culture' },
                          { key: 'art', label: 'Art' },
                          { key: 'archaeology', label: 'Archaeology' },
                        ].map(({ key, label }) => (
                          <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(232, 220, 203, 0.85)', fontSize: '0.9rem', cursor: 'pointer' }}>
                            <input type="checkbox" checked={formData.fieldsOfInterest[key]} onChange={e => setFormData({ ...formData, fieldsOfInterest: { ...formData.fieldsOfInterest, [key]: e.target.checked } })}
                              style={{ width: '16px', height: '16px', accentColor: 'var(--color-primary-light)' }} />
                            {label}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Social Media accounts */}
                    <div>
                      <h4 style={{ fontSize: '0.85rem', color: 'var(--color-secondary-light)', borderBottom: '1px solid rgba(139, 94, 60, 0.15)', paddingBottom: '0.25rem', marginTop: '0.5rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Social Media Accounts</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                          <div>
                            <label htmlFor="join-fb" style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.6)', marginBottom: '0.25rem' }}>Facebook Link</label>
                            <input id="join-fb" type="text" placeholder="https://facebook.com/username" value={formData.facebook} onChange={e => setFormData({ ...formData, facebook: e.target.value })}
                              style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid rgba(139, 94, 60, 0.2)', background: '#101010', fontSize: '0.85rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                          </div>
                          <div>
                            <label htmlFor="join-insta" style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.6)', marginBottom: '0.25rem' }}>Instagram Handle</label>
                            <input id="join-insta" type="text" placeholder="@username" value={formData.instagram} onChange={e => setFormData({ ...formData, instagram: e.target.value })}
                              style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid rgba(139, 94, 60, 0.2)', background: '#101010', fontSize: '0.85rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                          </div>
                        </div>
                        <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                          <div>
                            <label htmlFor="join-x" style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.6)', marginBottom: '0.25rem' }}>X (Twitter) Handle</label>
                            <input id="join-x" type="text" placeholder="@username" value={formData.xAccount} onChange={e => setFormData({ ...formData, xAccount: e.target.value })}
                              style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid rgba(139, 94, 60, 0.2)', background: '#101010', fontSize: '0.85rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                          </div>
                          <div>
                            <label htmlFor="join-social-other" style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.6)', marginBottom: '0.25rem' }}>Any Other Platform Link</label>
                            <input id="join-social-other" type="text" placeholder="LinkedIn, blog, etc." value={formData.otherSocial} onChange={e => setFormData({ ...formData, otherSocial: e.target.value })}
                              style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid rgba(139, 94, 60, 0.2)', background: '#101010', fontSize: '0.85rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="fade-in">
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-beige)', marginBottom: '0.5rem' }}>TORCH Specifics & Declaration</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(232, 220, 203, 0.6)', marginBottom: '2rem' }}>Finalize your application questions and accept the organization declaration.</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    
                    {/* Time Commitment per week */}
                    <div>
                      <label htmlFor="join-commit" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>How much time can you commit to TORCH activities per week? *</label>
                      <select id="join-commit" value={formData.weeklyCommitment} onChange={e => setFormData({ ...formData, weeklyCommitment: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid rgba(139, 94, 60, 0.25)', background: '#101010', fontSize: '0.9rem', color: '#FFF', outline: 'none', borderRadius: '2px', cursor: 'pointer' }}>
                        <option value="Less than 2 hours">Less than 2 hours</option>
                        <option value="2 to 4 hours">2 to 4 hours</option>
                        <option value="4 to 6 hours">4 to 6 hours</option>
                        <option value="More than 6 hours">More than 6 hours</option>
                      </select>
                    </div>

                    {/* Membership Type */}
                    <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                      <div>
                        <label htmlFor="join-memtype" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>Membership Type *</label>
                        <select id="join-memtype" value={formData.membershipType} onChange={e => setFormData({ ...formData, membershipType: e.target.value })}
                          style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid rgba(139, 94, 60, 0.25)', background: '#101010', fontSize: '0.9rem', color: '#FFF', outline: 'none', borderRadius: '2px', cursor: 'pointer' }}>
                          <option value="Individual Member">Individual Member</option>
                          <option value="Corporate Member">Corporate Member</option>
                          <option value="Student Member">Student Member</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {formData.membershipType === 'Other' && (
                        <div>
                          <label htmlFor="join-memtype-other" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>Specify Membership Type *</label>
                          <input id="join-memtype-other" type="text" placeholder="Please specify..." value={formData.otherMembershipType} onChange={e => setFormData({ ...formData, otherMembershipType: e.target.value })}
                            style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid rgba(139, 94, 60, 0.25)', background: '#101010', fontSize: '0.9rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                        </div>
                      )}
                    </div>

                    {/* Why do you want to join */}
                    <div>
                      <label htmlFor="join-why" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>Why do you want to join our TORCH? (Brief statement) *</label>
                      <textarea id="join-why" rows={3} required placeholder="e.g. To protect, preserve, and restore our rich historic Telangana heritage..." value={formData.whyJoin} onChange={e => setFormData({ ...formData, whyJoin: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: `1px solid ${errors.whyJoin ? '#d32f2f' : 'rgba(139, 94, 60, 0.25)'}`, background: '#101010', fontSize: '0.9rem', color: '#FFF', outline: 'none', borderRadius: '2px', resize: 'vertical' }} />
                      {errors.whyJoin && <p style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.whyJoin}</p>}
                    </div>

                    {/* How did you find out */}
                    <div>
                      <label htmlFor="join-how" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>How did you find out about TORCH?</label>
                      <input id="join-how" type="text" placeholder="e.g. Aravind Arya, Heritage Walks, Social Media" value={formData.discoveryMethod} onChange={e => setFormData({ ...formData, discoveryMethod: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid rgba(139, 94, 60, 0.25)', background: '#101010', fontSize: '0.9rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                    </div>

                    {/* What skills contribute */}
                    <div>
                      <label htmlFor="join-skillscont" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>What skills or experience can you contribute to TORCH?</label>
                      <input id="join-skillscont" type="text" placeholder="e.g. Archaeology documentation, Field Research, Event coordination" value={formData.skillsContributed} onChange={e => setFormData({ ...formData, skillsContributed: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid rgba(139, 94, 60, 0.25)', background: '#101010', fontSize: '0.9rem', color: '#FFF', outline: 'none', borderRadius: '2px' }} />
                    </div>

                    {/* Past volunteer work */}
                    <div>
                      <label htmlFor="join-vol" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>Have you been involved in volunteer work or NGOs in the past? Details:</label>
                      <textarea id="join-vol" rows={2} placeholder="If yes, please provide details (or write 'No')." value={formData.volunteerExperience} onChange={e => setFormData({ ...formData, volunteerExperience: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid rgba(139, 94, 60, 0.25)', background: '#101010', fontSize: '0.9rem', color: '#FFF', outline: 'none', borderRadius: '2px', resize: 'vertical' }} />
                    </div>

                    {/* Document Upload Simulation */}
                    <div>
                      <h4 style={{ fontSize: '0.85rem', color: 'var(--color-secondary-light)', borderBottom: '1px solid rgba(139, 94, 60, 0.15)', paddingBottom: '0.25rem', marginTop: '0.5rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Simulate Upload Attachments</h4>
                      <p style={{ fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.5)', marginBottom: '1rem', lineHeight: 1.5 }}>
                        Since this is a client-only site, you must manually attach these files to the final email.
                        Select them here to include their filenames in your application summary text.
                      </p>

                      <div className="form-grid-2 join-file-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                        {/* Photo */}
                        <div>
                          <label htmlFor="join-file-photo" style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.7)', marginBottom: '0.25rem', fontWeight: 600 }}>Upload Your Latest Photo</label>
                          <input id="join-file-photo" type="file" accept="image/*" onChange={e => setPhotoFile(e.target.files[0])}
                            style={{ width: '100%', padding: '0.5rem', border: '1px dashed rgba(139, 94, 60, 0.3)', background: '#101010', fontSize: '0.8rem', color: 'var(--color-gold)' }} />
                          {photoFile && <p style={{ fontSize: '0.75rem', color: '#81c784', marginTop: '0.25rem' }}>Selected: {photoFile.name}</p>}
                        </div>

                        {/* Aadhar copy */}
                        <div>
                          <label htmlFor="join-file-aadhar" style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.7)', marginBottom: '0.25rem', fontWeight: 600 }}>Upload Aadhar Card Copy</label>
                          <input id="join-file-aadhar" type="file" accept="image/*,application/pdf" onChange={e => setAadharFile(e.target.files[0])}
                            style={{ width: '100%', padding: '0.5rem', border: '1px dashed rgba(139, 94, 60, 0.3)', background: '#101010', fontSize: '0.8rem', color: 'var(--color-gold)' }} />
                          {aadharFile && <p style={{ fontSize: '0.75rem', color: '#81c784', marginTop: '0.25rem' }}>Selected: {aadharFile.name}</p>}
                        </div>
                      </div>
                    </div>

                    {/* Declaration checkboxes */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem', padding: '1rem', background: '#181818', border: '1px solid rgba(139, 94, 60, 0.15)' }}>
                      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', color: 'rgba(232, 220, 203, 0.85)', fontSize: '0.825rem', cursor: 'pointer', lineHeight: 1.5 }}>
                        <input type="checkbox" required checked={formData.agreeToCode} onChange={e => setFormData({ ...formData, agreeToCode: e.target.checked })}
                          style={{ marginTop: '3px', accentColor: 'var(--color-primary-light)' }} />
                        Do you agree to abide by the TORCH code of conduct and values? *
                      </label>
                      {errors.agreeToCode && <p style={{ color: '#ff6b6b', fontSize: '0.75rem', margin: 0 }}>{errors.agreeToCode}</p>}

                      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', color: 'rgba(232, 220, 203, 0.85)', fontSize: '0.825rem', cursor: 'pointer', lineHeight: 1.5 }}>
                        <input type="checkbox" required checked={formData.declaration} onChange={e => setFormData({ ...formData, declaration: e.target.checked })}
                          style={{ marginTop: '3px', accentColor: 'var(--color-primary-light)' }} />
                        I hereby declare that the information provided above is true to the best of my knowledge. I understand and agree to abide by the rules and regulations of TORCH - Telangana. *
                      </label>
                      {errors.declaration && <p style={{ color: '#ff6b6b', fontSize: '0.75rem', margin: 0 }}>{errors.declaration}</p>}
                    </div>

                    {/* Typed Signature */}
                    <div>
                      <label htmlFor="join-sign" style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(232, 220, 203, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem', fontWeight: 600 }}>Signature of Applicant (Type Full Name) *</label>
                      <input id="join-sign" type="text" required placeholder="Mallu Naik Badavath" value={formData.signature} onChange={e => setFormData({ ...formData, signature: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: `1px solid ${errors.signature ? '#d32f2f' : 'rgba(139, 94, 60, 0.25)'}`, background: '#101010', fontSize: '1rem', color: '#FFF', fontFamily: 'cursive', outline: 'none', borderRadius: '2px' }} />
                      {errors.signature && <p style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.signature}</p>}
                    </div>

                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="fade-in">
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-beige)', marginBottom: '0.5rem' }}>Review & Submit</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(232, 220, 203, 0.6)', marginBottom: '1.5rem' }}>
                    Review your application summary below. Clicking Submit will copy this summary to your clipboard and trigger your local email program to open.
                  </p>

                  <div className="join-review-pre" style={{ background: '#0F0F0F', padding: '1.25rem', border: '1px solid rgba(139, 94, 60, 0.2)', borderRadius: '2px', maxHeight: '320px', overflowY: 'auto', marginBottom: '1.5rem', fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.8)', whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>
                    {formatFormSummary()}
                  </div>

                  <div style={{ padding: '1rem', background: '#1A1A1A', borderLeft: '4px solid var(--color-gold)', borderRadius: '2px', marginBottom: '1.5rem' }}>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(232, 220, 203, 0.7)', lineHeight: 1.7 }}>
                      💡 <strong>Submit Flow:</strong> Clicking <strong>Submit Application</strong> below will open your device's email composer pre-filled with the application details.
                      Please paste the copied form data (if it didn't pre-fill) and <strong>attach your passport photo and Aadhar card copy</strong> manually to your email.
                    </p>
                  </div>

                  <div className="join-review-btns" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <button type="button" onClick={handleCopyToClipboard} className="btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
                      {copySuccess ? '✓ Copied!' : '📋 Copy Text Summary'}
                    </button>
                    <button type="button" onClick={handlePrint} className="btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
                      🖨️ Print Form / Save PDF
                    </button>
                  </div>
                </div>
              )}

              {/* Success Instructions page (triggers on isSubmitted = true) */}
              {isSubmitted && currentStep === 5 && (
                <div style={{
                  position: 'absolute', inset: 0, background: '#141414', zIndex: 10,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  padding: '2.5rem', textAlign: 'center',
                }}>
                  <div style={{ fontSize: '4.5rem', marginBottom: '1rem' }}>🎉</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-beige)', marginBottom: '0.75rem' }}>Application Generated!</h3>
                  
                  <div style={{ maxWidth: '580px', color: 'rgba(232, 220, 203, 0.85)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                    <p style={{ marginBottom: '1rem' }}>
                      We have prepared your membership application text for **TORCH - Telangana**.
                    </p>
                    <p style={{ background: '#0A0A0A', padding: '1rem', border: '1px solid rgba(139, 94, 60, 0.15)', textAlign: 'left', fontSize: '0.825rem', borderRadius: '2px' }}>
                      📧 <strong>Next Steps:</strong>
                      <br />
                      1. Check if your email composer opened. If not, open your email and draft to: <strong style={{ color: 'var(--color-gold)' }}>torch.heritage@gmail.com</strong>
                      <br />
                      2. We have copied the form summary to your clipboard. <strong>Paste (Ctrl+V or Cmd+V)</strong> it into your email body.
                      <br />
                      3. Attach your **passport photo** and **Aadhar card copy** to the email.
                      <br />
                      4. You can also print the formatted form to a PDF file and attach it.
                    </p>
                  </div>

                  <div className="join-success-btns" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <button onClick={handlePrint} className="btn-primary" style={{ padding: '0.65rem 1.5rem', fontSize: '0.8rem' }}>
                      🖨️ Download / Print PDF Application
                    </button>
                    <button onClick={handleCopyToClipboard} className="btn-outline" style={{ padding: '0.65rem 1.5rem', fontSize: '0.8rem' }}>
                      {copySuccess ? '✓ Copied to Clipboard!' : '📋 Copy Summary Again'}
                    </button>
                  </div>
                  
                  <button onClick={() => { setIsSubmitted(false); setCurrentStep(1); }} className="btn-outline" style={{ marginTop: '2rem', fontSize: '0.75rem', padding: '0.4rem 1.25rem' }}>
                    ← Start New Application
                  </button>
                </div>
              )}

              {/* Wizard navigation footer buttons */}
              {!isSubmitted && (
                <div className="join-nav-footer" style={{
                  marginTop: '3rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(139, 94, 60, 0.15)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}>
                  {currentStep > 1 ? (
                    <button type="button" onClick={handleBack} className="btn-outline" id="join-back-btn">
                      ← Previous
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < steps.length ? (
                    <button type="button" onClick={handleNext} className="btn-primary" id="join-next-btn">
                      Next Step →
                    </button>
                  ) : (
                    <button type="button" onClick={handleSubmit} className="btn-primary" id="join-submit-btn" style={{ background: 'var(--color-primary-light)', border: '1px solid var(--color-primary-light)' }}>
                      Submit Application 🔦
                    </button>
                  )}
                </div>
              )}

            </div>
          </div>
        </section>
      </div>

      {/* Hidden Print Layout */}
      {renderPrintableForm()}
    </main>
  )
}
