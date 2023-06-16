import { Form, Button } from "react-bootstrap";
import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <>
      <div className='d-flex justify-content-center px-3'>
        <Form onSubmit={handleSubmit} className="w-75">
          <h2 className='py-3'>Add Post</h2>
          <Form.Group className="mb-4">
            <Form.Label>Title</Form.Label>
            <Form.Control className="w-50" placeholder='Enter title'
              value={title} onChange={e => setTitle(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Author</Form.Label>
            <Form.Control className="w-50" placeholder="Enter author"
              value={author} onChange={e => setAuthor(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Published date</Form.Label>
            <DatePicker
              selected={publishedDate}
              onChange={(date) => setPublishedDate(date)} />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Short description</Form.Label>
            <Form.Control
              placeholder="Leave a comment here"
              value={shortDescription}
              onChange={e => setShortDescription(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Content of the post</Form.Label>
            <ReactQuill
              as="textarea"
              placeholder="Leave a comment here"
              theme="snow"
              value={content}
              onChange={setContent}/>
          </Form.Group>
          <Button className="w-25" variant='primary' type='submit'>{actionText}</Button>
        </Form>
      </div>
    </>
  )
}

export default PostForm;