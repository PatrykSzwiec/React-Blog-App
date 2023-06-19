import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PostForm = ({ action, actionText, ...props }) => {

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(new Date());
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [dateError, setDateError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if(content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
    }
  };

  return (
    <>
      <div className='d-flex justify-content-center px-3'>
        <Form onSubmit={validate(handleSubmit)} className="w-75">
          <h2 className='py-3'>Add Post</h2>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control className="w-50"
              {...register("title", { required: true, minLength: 4 })}
              value={title}
              placeholder='Enter title'
              type="text"
              onChange={e => setTitle(e.target.value)} />

              {errors.title &&
              <small className="d-block form-text text-danger mt-2">
                Title is too short (min: 3 characters)
              </small>}
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Author</Form.Label>
            <Form.Control className="w-50"
              {...register("author", { required: true, minLength: 4 })}
              type="text"
              value={author}
              placeholder="Enter author"
              onChange={e => setAuthor(e.target.value)} />

              {errors.author &&
              <small className="d-block form-text text-danger mt-2">
                Author is too short (min: 3 characters)
              </small>}
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Published date</Form.Label><br/>
            <DatePicker
              selected={publishedDate}
              onChange={(date) => setPublishedDate(date)} />

              {dateError &&
              <small className="d-block form-text text-danger mt-2">
                Published date can't be empty
              </small>}
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Short description</Form.Label>
            <Form.Control
              {...register("shortDescription", { required: true, minLength: 20})}
              placeholder="Leave a comment here"
              value={shortDescription}
              onChange={e => setShortDescription(e.target.value)} />

              {errors.shortDescription &&
              <small className="d-block form-text text-danger mt-2">
                This field is required and should be at least 20 characters long
              </small>}
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Content of the post</Form.Label>
            <ReactQuill
              as="textarea"
              placeholder="Leave a comment here"
              theme="snow"
              value={content}
              onChange={setContent}/>

              {contentError &&
              <small className="d-block form-text text-danger mt-2">
                Content can't be empty
              </small>}
          </Form.Group>
          <Button className="w-25" variant='primary' type='submit'>{actionText}</Button>
        </Form>
      </div>
    </>
  )
}

export default PostForm;