//Array Porps
type PowerTypes = {
  wins: {
    firstName: string;
    lastName: string;
  }[];
};

// export const PowerProps = () => {
//   return (
//     <div>
//       <h5>Red Ranger</h5>
//       <h5>Blue Ranger</h5>
//       <h5>Yellow Ranger</h5>
//     </div>
//   );
// };

export const PowerProps = (props: PowerTypes) => {
  return (
    <div>
      {props.wins.map((w) => {
        return (
          <h5 key={w.firstName}>
            {w.firstName} {w.lastName}
          </h5>
        );
      })}
    </div>
  );
};
