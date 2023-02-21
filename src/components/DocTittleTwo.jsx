import React, { useEffect , useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const DocTittleTwo = () => {
    const [count , setCount ] = useState(0)
    useDocumentTitle(`Count ${count}` , count)
    return (
        <div>
            <button onClick={()=>setCount(count + 1)}>Count : {count}</button>
        </div>
    );
}

export default DocTittleTwo;

