function Course({ id, content, title, price, removeOneCourse }) {
  return (
    <>
      <div className="courseBox">
        <h2>{title}</h2>
        <p>{content}</p>
        <h4>PRICE: {price} TL</h4>
        <button className="cardDeleteBtn" onClick={() => removeOneCourse(id)}>
          Delete
        </button>
      </div>
    </>
  );
}

export default Course;
