import React, { useEffect, useState } from 'react'
import './FeatureInfo.css'
import { getIncomeStat } from '../../services/allApi';

function FeatureInfo() {

    const [income, setIncome] = useState([]);
    const [thisMonth, setThisMonth] = useState(null);
    const [perc, setPerc] = useState(0);

    const fetchIncome = async () => {
        const res = await getIncomeStat();
        setIncome(res.data)
        setThisMonth(res.data[0].total)
        // setPerc((res.data[0].total * 100) / (res.data[1].total - 100))
    }
    console.log(income)
    useEffect(() => {
        fetchIncome()
    }, [])

    console.log(perc)

    return (
        <div className='outerContainer'>
            <div className='FeatureInfo'>
                <div className='featureInfoBox'>
                    <h2 className='featureInfoHead'>Revanue</h2>
                    <div className='featureInfoBody'>
                        <h1>₹ {thisMonth}</h1>
                        <div className='featureInfoBodyReport'>
                            <p>% -10</p>
                            {perc < 1 ?
                                <i class="fa-solid fa-arrow-down"></i>
                                :
                                <i class="fa-solid up fa-arrow-up"></i>
                            }
                        </div>
                    </div>
                    <h3>Compared to last month</h3>
                </div>
                <div className='featureInfoBox'>
                    <h2 className='featureInfoHead'>Sales</h2>
                    <div className='featureInfoBody'>
                        <h1>₹ 4,415</h1>
                        <div className='featureInfoBodyReport'>
                            <p>-1.4</p>
                            <i class="fa-solid fa-arrow-down"></i>
                        </div>
                    </div>
                    <h3>Compared to last month</h3>
                </div>
                <div className='featureInfoBox'>
                    <h2 className='featureInfoHead'>Cost</h2>
                    <div className='featureInfoBody'>
                        <h1>₹ 2,215</h1>
                        <div className='featureInfoBodyReport'>
                            <p>2.4</p>
                            <i class="fa-solid up fa-arrow-up"></i>
                        </div>
                    </div>
                    <h3>Compared to last month</h3>
                </div>
            </div>
        </div>
    )
}

export default FeatureInfo