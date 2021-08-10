import SharedSections from "app/components/home/sharedSections";
import HealthForm from "app/modules/healthInsurance/components/InitialProcess/healthForm";

function HealthPage() {
  return (
    <div className="container-fluid p-0">
      <div className="row m-0 background-health">
        <div className="container content">
          <HealthForm />
        </div>
      </div>
      <SharedSections />
    </div>
  );
}

export default HealthPage;
