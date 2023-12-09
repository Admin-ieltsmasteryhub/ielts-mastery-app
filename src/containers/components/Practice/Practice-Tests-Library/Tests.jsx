import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './tests.module.css'; // Import a separate CSS file for custom styling
import { postsData } from './Testsdata';
import { Container ,Row,Col} from 'reactstrap';
import TestTable from './TestTable';


function Tests() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Find the blog post with the matching ID
    const foundPost = postsData.find((post) => post.id === parseInt(id, 10));
    setPost(foundPost);
  }, [id]);

  // if (!post) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Container fluid className={styles.tests_sec_container}>
      <Row>
          <Col md={9}>
            <div className={styles.tests_container}>
              <div className={styles.test_title}>Listening Practice Tests 2023</div>
              <TestTable/>
            </div>
          </Col>
          <Col md={3}> 
          </Col>
        </Row>
    </Container>
  );
}

export default Tests;
