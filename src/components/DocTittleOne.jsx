import React, { useEffect , useState } from 'react';
import useDocumentTitle from '../hooks/useCounter';

const DocTittleOne = () => {
    const [count , setCount ] = useState(0)
     useDocumentTitle(`Count ${count}` , count)
    return (
        <div>
            <button onClick={()=>setCount(count + 1)}>Count : {count}</button>
        </div>
    );
}

export default DocTittleOne;
