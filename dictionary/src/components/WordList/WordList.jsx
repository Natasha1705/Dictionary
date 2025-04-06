import React, { useState } from 'react';
import './WordList.css';

function WordList({ words }) {
  const [editingId, setEditingId] = useState(null);
  const [editedWord, setEditedWord] = useState({});

  const handleEdit = (id, word) => {
    setEditingId(id);
    setEditedWord(word);
  };

  const handleSave = (id) => {
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <table className="word-table">
      <thead>
        <tr>
          <th>Слово</th>
          <th>Перевод</th>
          <th>Тема</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word) => (
          <tr key={word.id}>
            <td>
              {editingId === word.id ? (
                <input
                  type="text"
                  value={editedWord.word || word.word}
                  onChange={(e) =>
                    setEditedWord({ ...editedWord, word: e.target.value })
                  }
                />
              ) : (
                word.word
              )}
            </td>
            <td>
              {editingId === word.id ? (
                <input
                  type="text"
                  value={editedWord.translation || word.translation}
                  onChange={(e) =>
                    setEditedWord({ ...editedWord, translation: e.target.value })
                  }
                />
              ) : (
                word.translation
              )}
            </td>
            <td>
              {editingId === word.id ? (
                <input
                  type="text"
                  value={editedWord.theme || word.theme}
                  onChange={(e) =>
                    setEditedWord({ ...editedWord, theme: e.target.value })
                  }
                />
              ) : (
                word.theme
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
                  <button onClick={() => handleEdit(word.id, word)}>
                    Редактировать
                  </button>
                  <button>Удалить</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default WordList;