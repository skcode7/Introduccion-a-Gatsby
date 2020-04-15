import React from 'react';
import Hello from '../components/hello/hello';
import Navigation from '../components/navigation';

export default ()=>(
    <div>
        <Navigation/>
        <Hello name={'SK'} color='pink'/>
    </div>
)
    // <div>
    //         <Hello name={'SK'}/>
    // </div>
// )