// import React, { useState } from 'react';
// import './WordList.css';

// function WordList({ words }) {
//   const [editingId, setEditingId] = useState(null);
//   const [editedWord, setEditedWord] = useState({});

//   const handleEdit = (id, word) => {
//     setEditingId(id);
//     setEditedWord(word);
//   };

//   const handleSave = (id) => {
//     setEditingId(null);
//   };

//   const handleCancel = () => {
//     setEditingId(null);
//   };

//   return (
//     <table className="word-table">
//       <thead>
//         <tr>
//           <th>Слово</th>
//           <th>Перевод</th>
//           <th>Тема</th>
//           <th>Действия</th>
//         </tr>
//       </thead>
//       <tbody>
//         {words.map((word) => (
//           <tr key={word.id}>
//             <td>
//               {editingId === word.id ? (
//                 <input
//                   type="text"
//                   value={editedWord.word || word.word}
//                   onChange={(e) =>
//                     setEditedWord({ ...editedWord, word: e.target.value })
//                   }
//                 />
//               ) : (
//                 word.word
//               )}
//             </td>
//             <td>
//               {editingId === word.id ? (
//                 <input
//                   type="text"
//                   value={editedWord.translation || word.translation}
//                   onChange={(e) =>
//                     setEditedWord({ ...editedWord, translation: e.target.value })
//                   }
//                 />
//               ) : (
//                 word.translation
//               )}
//             </td>
//             <td>
//               {editingId === word.id ? (
//                 <input
//                   type="text"
//                   value={editedWord.theme || word.theme}
//                   onChange={(e) =>
//                     setEditedWord({ ...editedWord, theme: e.target.value })
//                   }
//                 />
//               ) : (
//                 word.theme
//               )}
//             </td>
//             <td>
//               {editingId === word.id ? (
//                 <>
//                   <button onClick={() => handleSave(word.id)}>Сохранить</button>
//                   <button onClick={handleCancel}>Отмена</button>
//                 </>
//               ) : (
//                 <>
//                   <button onClick={() => handleEdit(word.id, word)}>
//                     Редактировать
//                   </button>
//                   <button>Удалить</button>
//                 </>
//               )}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default WordList;

import React, { useState } from 'react';
import './WordList.css';

function WordList({ words }) {
  const [editingId, setEditingId] = useState(null);
  const [editedWord, setEditedWord] = useState({});
  const [newWord, setNewWord] = useState({
    word: '',
    transcription: '',
    translation: ''
  });

  // Обработчик редактирования
  const handleEdit = (id, word) => {
    setEditingId(id);
    setEditedWord({ ...word });
  };

  // Обработчик сохранения
  const handleSave = (id) => {
    // Здесь должна быть логика сохранения изменений
    console.log('Сохранение слова:', id, editedWord);
    setEditingId(null);
  };

  // Обработчик отмены
  const handleCancel = () => {
    setEditingId(null);
    setEditedWord({});
  };

  // Обработчик добавления нового слова
  const handleAddWord = () => {
    if (newWord.word && newWord.translation) {
      // Здесь должна быть логика добавления слова
      console.log('Добавление нового слова:', newWord);
      setNewWord({ word: '', transcription: '', translation: '' });
    }
  };

  return (
    <div className="word-list-container">
      {/* Форма добавления нового слова */}
      <div className="add-word-form">
        <input
          type="text"
          placeholder="Английское слово"
          value={newWord.word}
          onChange={(e) => setNewWord({ ...newWord, word: e.target.value })}
        />
        <input
          type="text"
          placeholder="Транскрипция"
          value={newWord.transcription}
          onChange={(e) => setNewWord({ ...newWord, transcription: e.target.value })}
        />
        <input
          type="text"
          placeholder="Перевод"
          value={newWord.translation}
          onChange={(e) => setNewWord({ ...newWord, translation: e.target.value })}
        />
        <button onClick={handleAddWord}>Добавить</button>
      </div>

      {/* Таблица слов */}
      <table className="word-table">
        <thead>
          <tr>
            <th>Слово</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <tr key={word.id}>
              <td>
                {editingId === word.id ? (
                  <input
                    value={editedWord.word}
                    onChange={(e) => setEditedWord({ ...editedWord, word: e.target.value })}
                  />
                ) : (
                  word.word
                )}
              </td>
              <td>
                {editingId === word.id ? (
                  <input
                    value={editedWord.transcription}
                    onChange={(e) => setEditedWord({ ...editedWord, transcription: e.target.value })}
                  />
                ) : (
                  word.transcription
                )}
              </td>
              <td>
                {editingId === word.id ? (
                  <input
                    value={editedWord.translation}
                    onChange={(e) => setEditedWord({ ...editedWord, translation: e.target.value })}
                  />
                ) : (
                  word.translation
                )}
              </td>
              <td>
                {editingId === word.id ? (
                  <>
                    <button onClick={() => handleSave(word.id)}>Сохранить</button>
                    <button onClick={handleCancel}>Отмена</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(word.id, word)}>Редактировать</button>
                    <button>Удалить</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WordList;