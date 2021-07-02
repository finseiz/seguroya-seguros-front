import React from 'react'
import { useSelector } from 'react-redux';
import { toAbsoluteUrl } from 'theme/helpers/AssetsHelpers';
import { AsideProcessIndicator } from "./AsideProcessIndicator";

export const AsideProcess = (props) => {

    const { title, process } = props;
    const { selectedPlan } = useSelector((state) => state.lifeInsurance);

    return (
        <div className="container my-4">

            {/* Insurance Logo */}
            <div className="text-center mb-4">
                <img
                    src={toAbsoluteUrl(`/media/logos/${selectedPlan.logoPath}`)}
                />
            </div>

            {/** Insurance name-type */}
            <div>
                <span className="process__aside-title">{title}</span>
            </div>

            <div className="mt-4">
                <AsideProcessIndicator process={process} index={2} />
            </div>

        </div>
    );
}