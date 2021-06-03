import SharedSections from "app/components/home/sharedSections";
import LifeForm from "app/modules/lifeInsurance/components/lifeForm";

function LifePage() {
  return (
    <div className="container-fluid p-0">
      <div className="row m-0">
        <div className="container content">
          <LifeForm />
        </div>
      </div>
      <SharedSections />
    </div>
  );
}

export default LifePage;
