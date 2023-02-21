import React from 'react';
import { useLocation , useNavigate } from 'react-router-dom';
import qs from 'qs'
const QueryHook = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const QueryParams = qs.parse(location.search , {ignoreQueryPrefix: "?"})
    
    const MergeQuery = (params)=>{
        navigate(`/search/search&${qs.stringify({...QueryParams , ...params})}`)
    }

    return {QueryParams  , MergeQuery , navigate , location}
}

export default QueryHook;
