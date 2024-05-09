//before without props
// export const Learn =()=>{
//     return <div>
//         <h3>My Name is Chitresh. Started to learn React TYPESCRIPT on 09-04-2024</h3>
//     </div>
// };

type LearnProps = {
  name: string;
  date: string;
  isLoggedIn: boolean;
};

//with props and ternary operator
export const Learn = (props: LearnProps) => {
  return (
    <div>
      <h3>
        {props.isLoggedIn
          ? `My Name is ${props.name}. Started to learn React TYPESCRIPT on ${props.date}`
          : "Welcome Guest user"}
      </h3>
    </div>
  );
};
