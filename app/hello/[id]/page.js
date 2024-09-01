function SingleHello({ params }) {
  const { id } = params;

  return (
    <div>
      <h1>Post {id}</h1>
      <p>This is the post content for post with ID: {id}</p>
    </div>
  );
}

export default SingleHello;
