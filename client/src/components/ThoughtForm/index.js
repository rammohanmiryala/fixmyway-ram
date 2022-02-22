import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { Search, Grid, Header, Segment, Button, Form, Input,TextArea } from 'semantic-ui-react'

import { ADD_THOUGHT } from '../../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const ThoughtForm = () => {
  const [thoughtText, setThoughtText] = useState('');

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
        variables: {
          thoughtText,
          thoughtAuthor: Auth.getProfile().data.username,
        },
      });

      setThoughtText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'thoughtText' && value.length <= 280) {
      setThoughtText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>Please post the your problem on street?</h3>
      {Auth.loggedIn() ? (
        <>
          {/* <p
            className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''
              }`}
          >
            Character Count: {characterCount}/280
          </p> */}

          {/* // className="flex-row justify-center justify-space-between-md align-center"
            // onSubmit={handleFormSubmit} */}


          <Form onSubmit={handleFormSubmit}>
            
             

                <Form.Field
                  id='form-input-control-first-name'
                  control={Input}
                  label='First name'
                  placeholder='First name'
                />
                <Form.Field
                  id='form-input-control-first-name'
                  control={Input}
                  label='First name'
                  placeholder='First name'
                />
                 <Form.Field
                  id='form-input-control-first-name'
                  control={Input}
                  label='First name'
                  placeholder='First name'
                />
                <Form.Field
                  id='form-textarea-control-opinion'
                  control={TextArea}
                  label='Project description'
                  placeholder='Opinion'
                />
                <Form.Field
                  id='form-textarea-control-opinion'
                  control={TextArea}
                  label='Project description'
                  placeholder='Opinion'
                />

                {/* <textarea
                  name="thoughtText"
                  placeholder="Here's a new thought..."
                  value={thoughtText}
                  className="form-input w-100"
                  style={{ lineHeight: '1.5', resize: 'vertical' }}
                  onChange={handleChange}
                ></textarea> */}
          
           
            <div className="">
              <Button className="" type="submit">
                Add Thought
              </Button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </Form>

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
