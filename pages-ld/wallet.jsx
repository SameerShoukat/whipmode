
import { useState, useEffect } from 'react';
import{Menu, Button, message} from 'antd';
import StyleTable from '../component/table/table';
import UseIsMounted from '../hooks/mousted';
import StyleDropdown from '../component/styleDropdown';
import {useParams } from 'react-router-dom';
import axios from 'axios';
import { api } from '../api';


export default function CollectorWallet() {
    let { id } = useParams();
    const [listData, setListData] = useState({})
    const [loading , setLoading] = useState(false)
    const isMounted = UseIsMounted();
    function allUsers() {

        setLoading(true)
        const config = {
            headers: {
              authorization: `Bearer ${localStorage.getItem("uswms-login")}`,
            },
          };
          
        axios.get(`${api}/admins/transactions/${id}`, config)
            .then(res => {
             console.log(res.data)
                setListData(res.data)
                setLoading(false)
          
        })
    }
     
    useEffect(() => {
        allUsers()
    }, [])

 


    const paymentReceived = (id) => {
        const config = {
            headers: {
              authorization: `Bearer ${localStorage.getItem("uswms-login")}`,
            },
        };
        
        
        axios.put(`${api}/admins/less-collector-wallet/${id}`, null, config)
            .then(res => {
                console.log('data coming after less collecter walltet from server')
               
                const updatedData = listData.transactions.filter((item) => item._id !== res.data._id)
                setListData({...listData , transactions:updatedData})
                console.log(updatedData)
                allUsers()
            message.success('Payment has been received')
        })
    }

    const paymentReceivedALL = () =>{
        for (let a of listData.transactions) {
            const config = {
                headers: {
                  authorization: `Bearer ${localStorage.getItem("uswms-login")}`,
                },
              };
            axios.put(`${api}/admins/less-collector-wallet/${a.id}`, null, config)
                .then((res) => {
                    const updatedData = listData.transactions.filter((item) => item._id !== res.data._id)
                    setListData({...listData , transactions:updatedData})
            })
          
        }
        allUsers()
        message.success('All Transaction has bee approved')
        
    }

    
    const column = [
        {
            title: 'Collector Name',
            dataIndex: "collectorName",
            key: 'collectorName',
        },
        {
            title: 'User Name',
            dataIndex: 'userName',
            key: 'userName',
           
        },
                
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            render : (val) =>('Rs.'+ val)
        },
        {
            title: 'Payment Status',
            dataIndex: 'isRecieved',
            key: 'isRecieved',
            render : (value) =>(
                <>
                    {!value ? 'Remaining' : 'Paid'}
                </>
            )
        },
        {
            title: 'Actions',
            dataIndex: '_id',
            key: '_id',
            render : (value,index) =>{
                const menuDropdown = (
                    <Menu>
                      <Menu.Item key={1} onClick={()=>paymentReceived(value)}>Clear Transaction</Menu.Item>
                    </Menu>
                  );
                  return(
                    <StyleDropdown menu={menuDropdown} />
                  )
               
            }

        },
    ]
  


    let propsData = {
        columns: column,
        data: listData && listData.transactions ? listData.transactions : [],
        pageSize: 50,
        height: 700,
    }
    return (
        <>
            {loading ?  <div style={{  width: "100%", height: '200px' }}><h1 style={{ marginLeft: '50%', marginRight: '50%' , width:'100%' , marginTop:'80px'}}>Loading</h1></div>  : listData?.wallet?.length > 0 ? (<>
                <div className="create-form-cont bg-white mt-4">
                <div className='d-flex justify-content-between'>
                    <h2 className='text-center sub-heading mb-4'>{listData && listData.wallet && listData.wallet.length > 0 ? <>{listData.wallet[0].name} Transactions <span className="amount-price">Rs {listData.wallet[0].amount}</span></> : 'Getting Transactions'}</h2>
                    {/* <Button type='primary' onClick={()=>paymentReceivedALL()}>Clear All Transactions</Button> */}
                </div>
               
                {isMounted.current > 0 ? <StyleTable {...propsData} /> : ''}
            </div>
            </>) : <div style={{  width: "100%", height: '200px' }}><h1 style={{ marginLeft: '50%', marginRight: '50%' , width:'100%' , marginTop:'80px'}}>No wallet Exist</h1></div> }
            
        </>
    )
}