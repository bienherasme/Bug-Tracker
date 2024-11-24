import React, { useState } from 'react';
import './BugForm.css';

const BugForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { title, description, priority });
    setTitle('');
    setDescription('');
    setPriority('Low');
  };

  return (
    <div className="bug-form">
      <h2>Add a New Bug</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Bug Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BugForm;
