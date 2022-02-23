import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
// import { Search, Grid, Header, Segment, Button, Input, TextArea } from 'semantic-ui-react'

import { ADD_THOUGHT } from '../../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const ThoughtForm = () => {

  const [formState, setFormState] = React.useState({
    thoughtText: "",
    postcode: "",
    maplink: "",
    state: "",
    thoughtTitle: "",
    thoughtAuthor: Auth.getProfile().data.username
  })
  const [characterCount, setCharacterCount] = useState(0);

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
      });
    },
  });
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addThought({
        variables: { ...formState },

      });
      setFormState({
        thoughtText: "",
        postcode: "",
        maplink: "",
        state: "",
        thoughtTitle: "",
        thoughtAuthor: Auth.getProfile().data.username
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setFormState({
      ...formState,
      [event.target.name]: value
    });


  }
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   if (name === 'thoughtText' && value.length <= 280) {
  //     setThoughtText(value);
  //     setCharacterCount(value.length);
  //   }
  // };
  return (
    <div>
      <h3>Please post the your problem on street?</h3>
      {Auth.loggedIn() ? (
        <>
          <form className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit} >
            <label
              style={{ lineHeight: '1.5', resize: 'vertical', marginBottom: '10px' }}>Project Title</label>
            <input
              name='thoughtTitle'
              className='form-control'
              value={formState.thoughtTitle}
              id='form-input-control-first-name'
              label='Project Title'
              placeholder='Manholders are leaking'
              onChange={handleChange}
            />
            <label
              style={{ lineHeight: '1.5', resize: 'vertical', marginBottom: '10px' }}>postcode</label>
            <input
              name="postcode"
              id='form-input-control-first-name'
              className='form-control'
              label='First name'
              value={formState.postcode}
              placeholder='First name'
              placeholder='Manholders are leaking'
              onChange={handleChange}
            />
            <label
              style={{ lineHeight: '1.5', resize: 'vertical', marginBottom: '10px' }}>State</label>
            <input
              name="state"
              id='form-input-control-first-name'
              className='form-control'
              value={formState.state}
              label='state'
              placeholder='Telanagana'
              onChange={handleChange}
            />
            <label
              style={{ lineHeight: '1.5', resize: 'vertical', marginBottom: '10px' }}>Maplink</label>
            <input
              name="maplink"
              id='form-textarea-control-opinion'
              className='form-control'
              value={formState.maplink}
              label='Project description'
              placeholder='Place map url'
              onChange={handleChange}
            />
            <label
              style={{ lineHeight: '1.5', resize: 'vertical', marginBottom: '10px' }}>Project Description</label>
            <textarea
              name="thoughtText"
              placeholder="Here's a new thought..."
              value={formState.thoughtText}
              className="form-input w-100"
              style={{ lineHeight: '1.5', resize: 'vertical' }}
              onChange={handleChange}
            ></textarea>
            <div className="">
              <button className="" type="submit">
                Add Thought
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};



export default ThoughtForm;
