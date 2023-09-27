import React, { useState } from "react";

const DateComponent = () => {

 const [value, setValue] = useState(new Date());

  return <DatePicker value={value} onChange={setValue} />;}

export default DateComponent;
