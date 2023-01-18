interface PropsHabitt {
  selected: String;
}

const Habit: React.FC<PropsHabitt> = ({ selected }) => {
  return <p>Habit aqui {selected}</p>;
};

export default Habit;
