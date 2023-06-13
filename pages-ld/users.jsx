
import Card from 'antd/lib/card/Card';
import { useState, useEffect } from 'react';
import{Menu, Button, Col, Row} from 'antd';
import StyleTable from '../component/table/table';
import UseIsMounted from '../hooks/mousted';
import StyleDropdown from '../component/styleDropdown';
import StyleDrawer from '../component/drawer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { api } from '../api';


const headers = {
    'authorization': `Bearer ${localStorage.getItem('uswms-login')}`
}


export default function Users() {
    let { id } = useParams();
    const [viewData, setViewData] =  useState({})
    const isMounted = UseIsMounted();
    


    const removeSubscription = (value) =>{
        const config = {
            headers: {
              authorization: `Bearer ${localStorage.getItem("uswms-login")}`,
            },
          };
        axios.put(`${api}/supervisor/remove-collector/${value}`,{}  ,config)
            .then(res => {
               const upDateData = viewData.filter(item => item._id !== res.data._id)
               
               setViewData(upDateData)
            })
       
    }


    
    const column = [
        {
            title: 'First Name',
            dataIndex: "firstName",
            key: 'firstName',
        },
        {
            title: 'Phone',
            dataIndex: 'phoneNo',
            key: 'phoneNo',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Area',
            dataIndex: 'area',
            key: 'area',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Actions',
            dataIndex: '_id',
            key: '_id',
            render : (value,index) =>{
                const menuDropdown = (
                    <Menu>
                      <Menu.Item key={1} onClick={()=> removeSubscription(value)} >Remove Subscription</Menu.Item>
                     
                    </Menu>
                  );
                  return(
                    <StyleDropdown menu={menuDropdown} />
                  )
               
            }

        },
    ]
  
    
    useEffect(() => {
        function allUsers() {
            const config = {
                headers: {
                  authorization: `Bearer ${localStorage.getItem("uswms-login")}`,
                },
              };
            axios.get(`${api}/supervisor/get-collector-users/${id}`, config )
            .then(res => {
                setViewData(res.data)
            })
        }
        allUsers()

    }, [])


    let propsData = {
        columns: column,
        data: viewData,
        pageSize: 50,
        height: 700,
    }
    return (
        <>
            <div className="create-form-cont bg-white mt-4">
                <h2 className='text-center sub-heading mb-4'>Collector Users</h2>
                {isMounted.current > 0 ? <StyleTable {...propsData} /> : ''}
            </div>

        </>
    )
}