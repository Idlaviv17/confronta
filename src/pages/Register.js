import { useRef, useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FcCheckmark } from 'react-icons/fc'
import axios from '../api/axios'
import { Link } from 'react-router-dom'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const FIRST_NAME_REGEX = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
const LAST_NAME_REGEX = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
const COMPANY_REGEX = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
const PHONE_REGEX = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.]).{8,24}$/

const Register = () => {
  const userRef = useRef()
  const emailRef = useRef()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const companyRef = useRef()
  const phoneRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [validUser, setValidUser] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)

  const [firstName, setFirstName] = useState('')
  const [validFirstName, setValidFirstName] = useState(false)
  const [firstNameFocus, setFirstNameFocus] = useState(false)

  const [lastName, setLastName] = useState('')
  const [validLastName, setValidLastName] = useState(false)
  const [lastNameFocus, setLastNameFocus] = useState(false)

  const [company, setCompany] = useState('')
  const [validCompany, setValidCompany] = useState(false)
  const [companyFocus, setCompanyFocus] = useState(false)

  const [phone, setPhone] = useState('')
  const [validPhone, setValidPhone] = useState(false)
  const [phoneFocus, setPhoneFocus] = useState(false)

  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setValidUser(USER_REGEX.test(user))
  }, [user])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  }, [email])

  useEffect(() => {
    setValidFirstName(FIRST_NAME_REGEX.test(firstName))
  }, [firstName])

  useEffect(() => {
    setValidLastName(LAST_NAME_REGEX.test(lastName))
  }, [lastName])

  useEffect(() => {
    setValidCompany(COMPANY_REGEX.test(company))
  }, [company])

  useEffect(() => {
    setValidPhone(PHONE_REGEX.test(phone))
  }, [phone])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd))
    setValidMatch(pwd === matchPwd)
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('')
  }, [user, email, pwd, matchPwd])

  const handleSubmit = async e => {
    e.preventDefault()

    // If the button is enabled with a JS hack
    const v1 = USER_REGEX.test(user)
    const v2 = EMAIL_REGEX.test(email)
    const v3 = FIRST_NAME_REGEX.test(firstName)
    const v4 = LAST_NAME_REGEX.test(lastName)
    const v5 = COMPANY_REGEX.test(company)
    const v6 = PHONE_REGEX.test(phone)
    const v7 = PWD_REGEX.test(pwd)
    if (!v1 || !v2 || !v3 || !v4 || !v5 || !v6 || !v7) {
      setErrMsg('Invalid Entry')
      return
    }

    const name = `${firstName} ${lastName}`

    try {
      const response = await axios.post(
        '/register',
        JSON.stringify({ user, email, name, company, phone, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      setSuccess(true)
      
      // Clear state and controlled inputs
      setUser('')
      setEmail('')
      setFirstName('')
      setLastName('')
      setCompany('')
      setPhone('')
      setPwd('')
      setMatchPwd('')
    } catch (err) {
      if (!err?.response) {
        setErrMsg('Sin Respuesta del Servidor')
      } else if (err.response?.status === 409) {
        setErrMsg('El nombre de usuario y/o el correo ya se encuentran en uso')
      } else {
        setErrMsg('Fallo en el Registro')
      }
      errRef.current.focus()
    }
  }

  return (
    <>
      {success ? (
        <div>
          <h1 className='mt-6 text-center text-4xl font-extrabold text-primary'>
            ¡Usuario registrado!
          </h1>
          <p className='mt-6 font-medium text-primary hover:text-blue-400 text-center'>
            <a href='/login'>Iniciar Sesión</a>
          </p>
        </div>
      ) : (
        <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-md w-full space-y-8'>
            <p
              ref={errRef}
              className={errMsg ? 'alert alert-error shadow-lg' : 'offscreen'}
              aria-live='assertive'
            >
              {errMsg}
            </p>
            <h1 className='mt-6 text-center text-4xl font-extrabold text-gray-800'>
              Registrarse
            </h1>
            <form
              onSubmit={handleSubmit}
              className={
                'mt-8 space-y-6 flex items-center justify-center align-middle flex-col'
              }
            >
              <div className='rounded-md shadow-sm -space-y-px justify-self-center w-full'>
                {/* Username */}
                <div className='flex items-center flex-row w-full h-10'>
                  <label htmlFor='username'>Nombre de Usuario:</label>
                  <FcCheckmark className={validUser ? 'valid' : 'hide'} />
                  <FaTimes
                    className={validUser || !user ? 'hide' : 'invalid'}
                  />
                </div>
                <input
                  type='text'
                  id='username'
                  ref={userRef}
                  autoComplete='off'
                  onChange={e => setUser(e.target.value)}
                  value={user}
                  required
                  aria-invalid={validUser ? 'false' : 'true'}
                  aria-describedby='uidnote'
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  className='login-input'
                />
                <div
                  id='uidnote'
                  className={
                    userFocus && user && !validUser
                      ? 'alert shadow-lg'
                      : 'offscreen'
                  }
                >
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      className='stroke-info flex-shrink-0 w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      ></path>
                    </svg>
                    De 4 a 24 caracteres.
                    <br />
                    Debe de empezar con una letra.
                    <br />
                    Letras, números, guiones y guiones bajos son permitidos.
                  </div>
                </div>

                {/* Email Address*/}
                <div className='flex items-center flex-row w-full h-10'>
                  <label htmlFor='email'>Correo Electrónico:</label>
                  <FcCheckmark className={validEmail ? 'valid' : 'hide'} />
                  <FaTimes
                    className={validEmail || !email ? 'hide' : 'invalid'}
                  />
                </div>
                <input
                  type='email'
                  id='email'
                  ref={emailRef}
                  autoComplete='on'
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  required
                  aria-invalid={validEmail ? 'false' : 'true'}
                  aria-describedby='emailnote'
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  className='login-input'
                />
                <div
                  id='emailnote'
                  className={
                    emailFocus && email && !validEmail
                      ? 'alert shadow-lg'
                      : 'offscreen'
                  }
                >
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      className='stroke-info flex-shrink-0 w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      ></path>
                    </svg>
                    El campo debe de contener un correo electrónico válido.
                  </div>
                </div>

                {/* Full Name */}
                <div className='flex items-center flex-row w-full'>
                  {/* First Name */}
                  <div className='flex items-center flex-col w-full'>
                    <div className='flex items-center flex-row w-full h-10'>
                      <label htmlFor='firstName'>Nombre(s):</label>
                      <FcCheckmark
                        className={validFirstName ? 'valid' : 'hide'}
                      />
                      <FaTimes
                        className={
                          validFirstName || !firstName ? 'hide' : 'invalid'
                        }
                      />
                    </div>
                    <input
                      type='text'
                      id='firstName'
                      ref={firstNameRef}
                      autoComplete='off'
                      onChange={e => setFirstName(e.target.value)}
                      value={firstName}
                      required
                      aria-invalid={validFirstName ? 'false' : 'true'}
                      aria-describedby='firstnamenote'
                      onFocus={() => setFirstNameFocus(true)}
                      onBlur={() => setFirstNameFocus(false)}
                      className='login-input w-full'
                    />
                    <div
                      id='firstnamenote'
                      className={
                        firstNameFocus && firstName && !validFirstName
                          ? 'alert shadow-lg'
                          : 'offscreen'
                      }
                    >
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          className='stroke-info flex-shrink-0 w-6 h-6'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                          ></path>
                        </svg>
                        Debe contener al menos dos caracteres.
                      </div>
                    </div>
                  </div>

                  <div className='w-8'></div>

                  {/* Last Name */}
                  <div className='flex items-center flex-col w-full'>
                    <div className='flex items-center flex-row w-full h-10'>
                      <label htmlFor='lastname'>Apellido(s):</label>
                      <FcCheckmark
                        className={validLastName ? 'valid' : 'hide'}
                      />
                      <FaTimes
                        className={
                          validLastName || !lastName ? 'hide' : 'invalid'
                        }
                      />
                    </div>
                    <input
                      type='text'
                      id='lastname'
                      ref={lastNameRef}
                      autoComplete='off'
                      onChange={e => setLastName(e.target.value)}
                      value={lastName}
                      required
                      aria-invalid={validLastName ? 'false' : 'true'}
                      aria-describedby='lastnamenote'
                      onFocus={() => setLastNameFocus(true)}
                      onBlur={() => setLastNameFocus(false)}
                      className='login-input w-full'
                    />
                    <div
                      id='lastnamenote'
                      className={
                        lastNameFocus && lastName && !validLastName
                          ? 'alert shadow-lg'
                          : 'offscreen'
                      }
                    >
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          className='stroke-info flex-shrink-0 w-6 h-6'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                          ></path>
                        </svg>
                        Debe contener al menos dos caracteres.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company */}
                <div className='flex items-center flex-row w-full h-10'>
                  <label htmlFor='company'>Empresa:</label>
                  <FcCheckmark className={validCompany ? 'valid' : 'hide'} />
                  <FaTimes
                    className={validCompany || !company ? 'hide' : 'invalid'}
                  />
                </div>
                <input
                  type='text'
                  id='company'
                  ref={companyRef}
                  autoComplete='off'
                  onChange={e => setCompany(e.target.value)}
                  value={company}
                  required
                  aria-invalid={validCompany ? 'false' : 'true'}
                  aria-describedby='companynote'
                  onFocus={() => setCompanyFocus(true)}
                  onBlur={() => setCompanyFocus(false)}
                  className='login-input'
                />
                <div
                  id='companynote'
                  className={
                    companyFocus && company && !validCompany
                      ? 'alert shadow-lg'
                      : 'offscreen'
                  }
                >
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      className='stroke-info flex-shrink-0 w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      ></path>
                    </svg>
                    Debe contener al menos dos caracteres.
                  </div>
                </div>

                {/* Phone number */}
                <div className='flex items-center flex-row w-full h-10'>
                  <label htmlFor='phone'>Número de Teléfono:</label>
                  <FcCheckmark className={validPhone ? 'valid' : 'hide'} />
                  <FaTimes
                    className={validPhone || !phone ? 'hide' : 'invalid'}
                  />
                </div>
                <input
                  type='text'
                  id='phone'
                  ref={phoneRef}
                  autoComplete='off'
                  onChange={e => setPhone(e.target.value)}
                  value={phone}
                  required
                  aria-invalid={validPhone ? 'false' : 'true'}
                  aria-describedby='phonenote'
                  onFocus={() => setPhoneFocus(true)}
                  onBlur={() => setPhoneFocus(false)}
                  className='login-input'
                />
                <div
                  id='phonenote'
                  className={
                    phoneFocus && phone && !validPhone
                      ? 'alert shadow-lg'
                      : 'offscreen'
                  }
                >
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      className='stroke-info flex-shrink-0 w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      ></path>
                    </svg>
                    Número de teléfono de 10 dígitos.
                    <br />
                    Debe de ser un número de teléfono válido.
                  </div>
                </div>

                {/* Password */}
                <div className='flex items-center flex-row w-full h-10'>
                  <label htmlFor='password'>Contraseña:</label>
                  <FcCheckmark className={validPwd ? 'valid' : 'hide'} />
                  <FaTimes className={validPwd || !pwd ? 'hide' : 'invalid'} />
                </div>

                <input
                  type='password'
                  id='password'
                  onChange={e => setPwd(e.target.value)}
                  value={pwd}
                  required
                  aria-invalid={validPwd ? 'false' : 'true'}
                  aria-describedby='pwdnote'
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  className='login-input'
                />

                <div
                  id='pwdnote'
                  className={
                    pwdFocus && !validPwd ? 'alert shadow-lg' : 'offscreen'
                  }
                >
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      className='stroke-info flex-shrink-0 w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      ></path>
                    </svg>
                    De 8 a 24 caracteres.
                    <br />
                    Debe incluir letras mayúsculas y minúsculas, un número y un
                    carácter especial.
                    <br />
                    Posibles caracteres especiales: !@#$%.
                  </div>
                </div>

                {/* Match Password */}
                <div className='flex items-center flex-row w-full h-10'>
                  <label htmlFor='confirm_pwd'>Confirmar Contraseña:</label>
                  <FcCheckmark
                    className={validMatch && matchPwd ? 'valid' : 'hide'}
                  />
                  <FaTimes
                    className={validMatch || !matchPwd ? 'hide' : 'invalid'}
                  />
                </div>
                <input
                  type='password'
                  id='confirm_pwd'
                  onChange={e => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? 'false' : 'true'}
                  aria-describedby='confirmnote'
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className='login-input'
                />
                <div
                  id='confirmnote'
                  className={
                    matchFocus && !validMatch ? 'alert shadow-lg' : 'offscreen'
                  }
                >
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      className='stroke-info flex-shrink-0 w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      ></path>
                    </svg>
                    La contraseña debe de coincidir en ambos campos.
                  </div>
                </div>
              </div>

              <button
                disabled={
                  !validUser ||
                  !validEmail ||
                  !validFirstName ||
                  !validLastName ||
                  !validCompany ||
                  !validPhone ||
                  !validPwd ||
                  !validMatch
                    ? true
                    : false
                }
                className='btn btn-primary text-white justify-self-center w-full'
              >
                Registrarse
              </button>
            </form>
            <p>
              Ya se encuentra registrado?
              <br />
              <span className='font-medium text-primary hover:text-blue-400'>
                <Link to='/login'>Iniciar Sesión</Link>
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Register
