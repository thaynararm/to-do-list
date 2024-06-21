import React from 'react'

function Status({ status, setStatus }) {
    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        let newStatus;
        if (isChecked) {
            newStatus = [...status.filter((e) => e !== "All"), value];
        } else {
            newStatus = status.filter((e) => e !== value);
            if (newStatus.length === 0) {
                newStatus = ["All"];
            }
        }
        setStatus(newStatus);
    };

    
    return (
        <div className='filters__individua__label__status'>
            <h3>Status</h3>
            <label className='filters__individua__label__status'>
                <div>
                    <input 
                        type="checkbox"
                        value="Completed"
                        checked={status.includes("Completed")}
                        onChange={handleCheckboxChange}
                    />
                    Concluída
                </div>
            </label>
            <label>
                <div>
                    <input 
                        type="checkbox"
                        value="Incompleted"
                        checked={status.includes("Incompleted")}
                        onChange={handleCheckboxChange}
                    />
                    Não Concluída
                </div>
            </label>
        </div>
    )
}

export default Status
