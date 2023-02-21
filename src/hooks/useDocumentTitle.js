import React, { useEffect } from 'react';
 
function useDocumentTitle(title , deps){
    useEffect(() => {
      document.title = title
    }, [deps]);
}

export default useDocumentTitle;