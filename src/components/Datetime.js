import React , {useState} from 'react'

function Datetime() {

    const [dateTime , setDateTime] = useState(new Date())

    setTimeout(
        () => setDateTime(new Date()), 
        1000
      );
    return (
        <div className="dateTime">
            {`${dateTime.toLocaleDateString()} - ${dateTime.toLocaleTimeString()}`}
        </div>
    )
}

export default Datetime
