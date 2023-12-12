import React, { useEffect, useMemo, useState } from 'react'
import './Home.css'
import WidgetSm from '../../components/WidgetSm/WidgetSm'
import WidgetLg from '../../components/WidgetLg/WidgetLg'
import FeatureInfo from '../../components/FeatureInfo/FeatureInfo'
import Chart from '../../components/Chart/Chart'
import { data } from '../../dummyData'
import Sidebar from '../../components/Sidebar/Sidebar'
import { getUSerStat } from '../../services/allApi'
import { useSelector } from 'react-redux'

function Home() {

    const [userStat, setUSerStat] = useState([])
    const currentUser = useSelector((state) => state.userReducer.user)

    const MONTH = useMemo(
        () => [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",

        ],
        []
    );

    const fetchUserStat = async () => {
        const reqHeader = {
            "Content-Type": "application/json",
            "token": `Bearer ${currentUser.accessToken}`
        }
        const response = await getUSerStat(reqHeader)
        response.data.map((item) => {
            setUSerStat((prev) => [...prev, { month: MONTH[item._id - 1], "Active User": item.total }])
        })
    }
    console.log(userStat)

    useEffect(() => {
        fetchUserStat()
    }, [MONTH])

    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <Sidebar />
            <div className='rightSideBar'>
                <FeatureInfo />
                <Chart title={"User Analytics"} data={userStat} grid dataKey={"Active User"} />
                <div className='widgetContainer'>
                    <WidgetSm />
                    <WidgetLg />
                </div>
            </div>
        </div>
    )
}

export default Home