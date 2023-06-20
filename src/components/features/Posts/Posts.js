import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dateToStr } from "../../utils/dateToStr";


const Posts = ({ category }) => {

  const allPosts = useSelector(getAllPosts);

  let filteredPosts = [];

  if (category) {
    filteredPosts = allPosts.filter((post) => post.category === category);
  } else {
    filteredPosts = allPosts;
  }

  return (
    <Row>
      {filteredPosts.map(post => (
        <Col key={post.id} xs='12' md='6' lg='4'>
          <Card className='mt-4'>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                <b>Author: </b>{post.author}<br />
                <b>Published: </b>{dateToStr(post.publishedDate)}<br />
                <b>Category: </b>{post.category}<br/>
              </Card.Text>
              <Card.Text>
                {post.shortDescription}
              </Card.Text>
              <Button variant='primary' as={Link} to={'/post/' + post.id}>Read more</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Posts;