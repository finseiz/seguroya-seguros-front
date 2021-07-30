import React from 'react'
import { useSelector } from 'react-redux';
import { ProgressBar, Step } from "react-step-progress-bar";

export const ProgressIndicator = ({ insuranceReduxName }) => {

  const { progress: { initial } } = useSelector(state => state[insuranceReduxName]);

  return (
    <div className="w-75" style={{display: "inline-block"}}>
      <ProgressBar        
        percent={initial}
        filledBackground="#00b3d9"
        unfilledBackground="#EBEBF2"
      >
        <Step>
          {({ accomplished, index }) => (
            <div className={`ball ${accomplished ? "active-ball" : "disable-ball"} row justify-content-center`}>
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div className={`ball ${accomplished ? "active-ball" : "disable-ball"} row justify-content-center`}>
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div className={`ball ${accomplished ? "active-ball" : "disable-ball"} row justify-content-center`}>
              {index + 1}
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  )
}
