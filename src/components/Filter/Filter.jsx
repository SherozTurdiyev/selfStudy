import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseInput from '../../hooks/useInput';
import { MONTHS_OPTIONS, CITYES__OPTIONS } from '../../service/Constants';
import qs from 'qs'
import QueryHook from '../../hooks/QueryHook';

const Filter = () => {
    const [month, monthBind] = UseInput()
    const [city, cityBind] = UseInput()
    const location = useLocation()
    const { QueryParams , MergeQuery } = QueryHook()
    console.log(QueryParams);
    function queryHookInitial() {
        let params = qs.parse(location.search, { delimiter: "?" })
        MergeQuery({month , city})
    }


    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className="col-4">
                    <select className='form-select card' {...monthBind}>
                        {
                            MONTHS_OPTIONS.map((vl, i) => {
                                return <option {...vl}></option>
                            })
                        }
                    </select>
                </div>
                <div className="col-4">
                    <select className='form-select card' {...cityBind}>
                        {
                            CITYES__OPTIONS.map((vl, i) => {
                                return <option {...vl}></option>
                            })
                        }
                    </select>
                </div>
                <div className="col-4">
                    <button className='btn btn-primary w-100' onClick={queryHookInitial}>qidiruv</button>
                </div>
            </div>
        </div>
    );
}

export default Filter;
