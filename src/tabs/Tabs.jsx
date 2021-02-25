import React from 'react';
import {tabs} from './Tabs.config'

export function Tabs({ value, onChange }) {


    return (
        <div className="tabs-btns">
            {tabs.map(({ label }, index) => {
                
                return(

                    <button onClick={() => onChange(index)} key={index}>{label}</button>
                )
              

            })}

        </div>
    )
}
