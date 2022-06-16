import { useState } from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);
    return (
        <>
            {count}
            <button onClick={() => setCount( x => x + 1 )}>Increase</button>
        </>
    )
}

Counter.propTypes = {}

export default Counter
