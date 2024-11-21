const Square = (props) => {
  console.log('Props', props);
  return (
    <>
      <button className='square'>{props.square}</button>
    </>
  );
};

export default Square;
