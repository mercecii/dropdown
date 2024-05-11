import React, { ChangeEvent } from 'react'

type Option = {
    value: string;
    label: string;
}
type Dropdownprops = {
    options: Option[],
    onChangeHandler: (ev: ChangeEvent<HTMLSelectElement>)=> void;
}
const Dropdown = ({options,onChangeHandler}: Dropdownprops) => {
    console.log('rendering Dropdown . . .')

  return (
    <select onChange={onChangeHandler}>
        {options.map((el)=><option key={el.value} value={el.value} >{el.label}</option>)}
    </select>
  )
}

export default React.memo(Dropdown);