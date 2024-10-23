import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [texts, setTexts] = useState([]);
  const [modalText, setModalText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddText = () => {
    if (inputValue.trim()) {
      setTexts((pre) => [...pre, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleTextClick = (text) => {
    setModalText(text);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setModalText('');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Metin girin..."
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginRight: '20px',
            width: '200px',
          }}
        />
        <button
          onClick={handleAddText}
          style={{
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#004080', 
            color: 'white',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Ekle
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
        {texts.map((text, index) => (
          <li
            key={index}
            onClick={() => handleTextClick(text)}
            style={{
              cursor: 'pointer',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#f1f1f1',
              borderRadius: '4px',
              transition: 'background-color 0.3s ease',
            }}
          >
            {text.length < 6 ? text : `${text.slice(0, 5)}...`}
          </li>
        ))}
      </ul>

      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={handleModalClose}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '5px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Seçilen Metin:</h2>
            <p>{modalText}</p>
            <button onClick={handleModalClose} style={{ marginTop: '20px' }}>
              Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
