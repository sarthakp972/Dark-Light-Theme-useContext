import React, { useContext } from 'react'
import { ThemeContext } from '../App'

function ChildC() {
    const {theme,setTheme}=useContext(ThemeContext);
    function handleClick(){
        theme==='light'?setTheme('dark'):setTheme('light');
    }

  return (
    <div>
      {/* hello {theme} */}
      <button onClick={handleClick}> Change Theme</button>
    </div>
  )
}

export default ChildC
