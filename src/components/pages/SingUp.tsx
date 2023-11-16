import React, { useState } from 'react';
import NavBar from "../organs/NavBar";
import Footer from "../organs/Footer";
import {User, Envelope, MapPinLine, IdentificationCard, Phone, Key, Buildings} from '@phosphor-icons/react';
// import Image1 from "../../assets/HeroVector.png";
// import Image2 from "../../assets/imageLogo.png"
// import { Image } from "../atoms/Image";

import './../Styles/Register.css';

function RegistroComponent() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
    idNumber: '',
    names: '',
    lastNames: '',
    gender: '',
    phoneNumber: '',
  });

  const [doctor, setDoctor] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
    idNumber: '',
    names: '',
    lastNames: '',
    consultorio: '',
    phoneNumber: '',
  });

  const [isPasswordsMatch, setIsPasswordsMatch] = useState(true);
  const [showFields, setShowFields] = useState(false);
  const [showUserPanel, setShowUserPanel] = useState(false);
  const [showExplanation, setShowExplanation] = useState(true);

  const handleRegistro = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Actualiza userInfo usando el formulario
    setUserInfo({
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      passwordConfirmation: formData.get('passwordConfirmation') as string,
      idNumber: formData.get('idNumber') as string,
      names: formData.get('names') as string,
      lastNames: formData.get('lastNames') as string,
      gender: formData.get('gender') as string,
      phoneNumber: formData.get('phoneNumber') as string,
    });

    // Si es una empresa, actualiza microSite usando el formulario
    if (!showUserPanel) {
      setDoctor({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        passwordConfirmation: formData.get('passwordConfirmation') as string,
        idNumber: formData.get('idNumber') as string,
        names: formData.get('names') as string,
        lastNames: formData.get('lastNames') as string,
        consultorio: formData.get('consultorio') as string,
        phoneNumber: formData.get('phoneNumber') as string,
      });
    }

    if (userInfo.password === userInfo.passwordConfirmation) {
      setIsPasswordsMatch(true); // Reset to true when passwords match
      console.log(showUserPanel ? userInfo : { ...userInfo, ...doctor });
    } else {
      setIsPasswordsMatch(false); // Las contraseñas no coinciden
    }
  };

 const showFieldsForUser = () => {
    setShowFields(true);
    setShowUserPanel(true);
    setShowExplanation(false);
  };

  const showFieldsForCompany = () => {
    setShowFields(true);
    setShowUserPanel(false);
    setShowExplanation(false);
  };

  const showSelectionButtons = () => {
    setShowFields(false);
    setShowUserPanel(false);
    setShowExplanation(true);
  };

  return (
    <div className="container-register">
      <NavBar />
      <div className='container-internal'>
        <div className="forms-container">
          <h2 className="title">Registro</h2>
          {showFields ? (
            <form onSubmit={handleRegistro}>
              {/* Campos para userInfo */}
              <div className="input-field">
                <div className='edge-input-icon'>
                  <User className="icons-register"></User>
                  <input
                    className='input-register'
                    type="text"
                    id="names"
                    name="names"
                    placeholder="Nombres"
                    value={userInfo.names}
                    onChange={(e) => setUserInfo({ ...userInfo, names: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="input-field">
                <div className='edge-input-icon' tabIndex={0}>
                  <User className="icons-register"></User>
                  <input
                    className='input-register'
                    type="text"
                    id="lastNames"
                    name="lastNames"
                    placeholder="Apellidos"
                    value={userInfo.lastNames}
                    onChange={(e) => setUserInfo({ ...userInfo, lastNames: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="input-field">
                <div className='edge-input-icon' tabIndex={0}>
                  <Envelope className="icons-register"></Envelope>
                  <input
                  className='input-register'
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              {showUserPanel && ( /*Para que se muestre sólo con los usuarios */
                <div className="input-field">
                  <div className='edge-input-icon' tabIndex={0}>
                    <MapPinLine className="icons-register"></MapPinLine>
                    <input                  
                      className='input-register'
                      type="text"
                      id="address"
                      name="gender"
                      placeholder="Genero"
                      value={userInfo.gender}
                      onChange={(e) => setUserInfo({ ...userInfo, gender: e.target.value })}
                      required
                    />
                  </div>
                </div>
              )}
              <div className="input-field">
                <div className='edge-input-icon' tabIndex={0}>
                  <IdentificationCard className="icons-register"></IdentificationCard>
                  <input
                    className='input-register'
                    type="text"
                    id="idNumber"
                    name="idNumber"
                    placeholder="Número de Identificación"
                    value={userInfo.idNumber}
                    onChange={(e) => setUserInfo({ ...userInfo, idNumber: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="input-field">
                <div className='edge-input-icon' tabIndex={0}>
                  <Phone className="icons-register"></Phone>
                  <input
                    className='input-register'
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Teléfono"
                    value={userInfo.phoneNumber}
                    onChange={(e) => setUserInfo({ ...userInfo, phoneNumber: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="input-field">
                <div className='edge-input-icon' tabIndex={0}>
                  <Key className="icons-register"></Key>
                  <input
                    className='input-register'
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                    value={userInfo.password}
                    onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                    minLength={8}
                    required
                  />
                </div>
              </div>
              <div className="input-field">
                <div className='edge-input-icon' tabIndex={0}>
                  <Key className="icons-register"></Key>
                  <input
                    className='input-register'
                    type="password"
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    placeholder="Confirma tu Contraseña"
                    value={userInfo.passwordConfirmation}
                    onChange={(e) => setUserInfo({ ...userInfo, passwordConfirmation: e.target.value })}
                    minLength={8}
                    required
                  />
                </div>
              </div>
              {/* Campos para microSite */}
              {!showUserPanel && (
              <>
              <div className="input-field">
                <div className='edge-input-icon' tabIndex={0}>
                  <Buildings className="icons-register"></Buildings>
                  <input
                    className='input-register'
                    type="text"
                    id="ventureName"
                    name="ventureName"
                    placeholder="Consultorio"
                    value={doctor.consultorio}
                    onChange={(e) => setDoctor({ ...doctor, consultorio: e.target.value })}
                    required
                  />
                </div>
              </div>
              </>
              )}
              {!isPasswordsMatch && <p className="text-red-500 text-sm">¡Las contraseñas no coinciden!</p>}
              <div className='container-buton'>
                <button
                  type="submit"
                  className="btn_register"
                  disabled={
                    !isPasswordsMatch ||
                    // Puedes agregar más validaciones según las necesidades.
                    userInfo.names === '' ||
                    userInfo.email === '' ||
                    userInfo.password !== userInfo.passwordConfirmation
                  }
                >
                Registrarse
                </button>
              </div>
            </form>
          ) : (
            <div className='container-buton'>
              <button onClick={showFieldsForUser} className="btn_register">Registro para Usuario</button>
              <button onClick={showFieldsForCompany} className="btn_register">Registro para Doctor</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default RegistroComponent;
