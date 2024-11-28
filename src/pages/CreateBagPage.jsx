import ColorsContainer from "../components/ColorsContainer";
import BagsContainer from "../components/BagsContainer";
import NameTag from "../components/NameTag";

const CreateBagPage = ({
  selectedBag,
  setSelectedBag,
  isDisabled,
  setIsDisabled,
}) => {
  return (
    <div className="main-container">
      <BagsContainer
        selectedBag={selectedBag}
        setSelectedBag={setSelectedBag}
      />
      <ColorsContainer />
      <NameTag isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
    </div>
  );
};

export default CreateBagPage;
