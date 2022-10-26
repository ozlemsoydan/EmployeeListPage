import React from 'react'

export default function EmployeeCreateInput(props) {
    //ES6
    const { label, type, name, value, id, placeholder, onChangeInput, focus } = props;
    return (
        <>
            <div className="form-group">
                <label htmlFor="">{label}</label>
                <input type={type} className='form-control' placeholder={placeholder} name={name} id={id} value={value} onChange={onChangeInput} focus={focus} />
            </div>
        </>
    )
}
