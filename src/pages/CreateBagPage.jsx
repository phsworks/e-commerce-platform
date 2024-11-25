import ColorsContainer from "../components/ColorsContainer"
import BagsContainer from "../components/BagsContainer"
import NameTag from "../components/NameTag"


const CreateBagPage = () => {
  return (
    <div className="main-container">
      <BagsContainer />
      <ColorsContainer />
      <NameTag />
    </div>
  )
}

export default CreateBagPage