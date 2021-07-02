import React from 'react'

export const AsideProcessIndicator = ({ process, index }) => {

  return (
    <div>
      <ul className="StepProgress">
        {
          process.map( (item, i) => {
            let done = index >= i;
            return (
              <li className={`StepProgress-item ${done ? "is-done text-done": "text-empty"}`} key={i}>
                <span> { item.title } </span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
