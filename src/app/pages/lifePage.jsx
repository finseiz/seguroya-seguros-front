import SharedSections from "app/components/home/sharedSections";
import LifeForm from "app/modules/lifeInsurance/components/InitialForm/lifeForm";

function LifePage() {
  return (
    <div className="container-fluid p-0">
      <div className="row m-0 background-life">
        <div className="container content ">
          <LifeForm />
        </div>
      </div>
      <SharedSections />
    </div>
  );
}

export default LifePage;
