//Object props
type RangerProps = {
  win: {
    firstName: string;
    lastName: string;
  };
};

export const Rangers = (props: RangerProps) => {
  return (
    <div>
      {props.win.firstName} {props.win.lastName}
    </div>
  );
};

// export const Rangers = () => {
//   return <div>Power Rangers</div>;
// };
