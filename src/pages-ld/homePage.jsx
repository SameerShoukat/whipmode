import axios from 'axios';
import { useEffect, useState } from 'react';
import { api } from '../api';
import UseIsMounted from '../hooks/mousted';
import { TagsOutlined } from '@ant-design/icons';
import EChart from '../component/charts/echart';
import StyleTable from '../component/table/table';
import moment from 'moment';





export default function HomePage() {
  const isMounted = UseIsMounted();
  const [data, setData] = useState([]);
  const [allCharts, setAllCharts] = useState(false);
  const [salesChart, setSaleChart] = useState({
    sale: null,
    cat: null,
  });
  const [userChart, setUserChart] = useState({
    sale: null,
    cat: null,
  });

  const [colChart, setColChart] = useState({
    sale: null,
    cat: null,
  });

  useEffect(() => {

   
    function stats() {
      let saleNumber = [];
      let saleCat = [];

      let userNumber = [];
      let userCat = [];

      let collNumber = [];
      let collCat = [];

      const config = {
        headers: {
          authorization: `Bearer ${localStorage.getItem('uswms-login')}`,
        }
      }
      axios.get(`${api}/admins/stats`,config).then((res) => {
        setData(...[res.data]);
        
        res.data.sales.monthlyStats.map((val, key) => {
          let label =
            new Date(val.lable).getMonth() +
            1 +
            '-' +
            new Date(val.lable).getFullYear();
          saleNumber.push(val.value);
          saleCat.push(label);
        });
        setSaleChart({
          sale: saleNumber,
          cat: saleCat,
        });

        res.data.collectors.map((val, key) => {
          let label =
            new Date(val.lable).getMonth() +
            1 +
            '-' +
            new Date(val.lable).getFullYear();
          collNumber.push(val.value);
          collCat.push(label);
        });
        setColChart({
          sale: collNumber,
          cat: collCat,
        });

        res.data.users.map((val, key) => {
          let label =
            new Date(val.lable).getMonth() +
            1 +
            '-' +
            new Date(val.lable).getFullYear();
          userNumber.push(val.value);
          userCat.push(label);
        });
        setUserChart({
          sale: userNumber,
          cat: userCat,
        });

        setAllCharts(true);
      });
    }

    stats();
  }, [allCharts]);

  const forSaleColumn = [
    {
      title: 'Total Weight Sold',
      dataIndex: 'totalWeightSold',
      key: 'totalWeightSold',
      render: (val) => val + 'KG',
    },
    {
      title: 'Amount',
      dataIndex: 'value',
      key: 'value',
      render: (val) => 'Rs' + val,
    },
    {
      title: 'Month',
      dataIndex: 'lable',
      key: 'lable',
      render: (val) => moment(val).format('MMM YYYY'),
    },
  ];

  let propsData = {
    columns: forSaleColumn,
    data:
      data && data.forSaleGarbage && data.forSaleGarbage.length > 0
        ? data.forSaleGarbage
        : [],
    pageSize: 10,
    height: 300,
  };

  const garbageHistory = [
    {
      title: 'Total Jobs',
      dataIndex: 'totalJobs',
      key: 'totalJobs',
      render: (val) => val,
    },
    {
      title: 'Complete Jobs',
      dataIndex: 'completedJobs',
      key: 'completedJobs',
      render: (val) => val,
    },

    {
      title: 'Paper',
      dataIndex: 'paper',
      key: 'paper',
      render: (val) => val + 'KG',
    },
    {
      title: 'Plastic',
      dataIndex: 'plastic',
      key: 'plastic',
      render: (val) => val + 'KG',
    },

    {
      title: 'Wastage',
      dataIndex: 'wastage',
      key: 'wastage',
      render: (val) => val + 'KG',
    },
    {
      title: 'Total Weights',
      dataIndex: 'totalWeight',
      key: 'totalWeight',
      render: (val) => val + 'KG',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (val) => moment(val).format('LL'),
    },
  ];

  const garbageHistoryMonthly = [
    {
      title: 'Total Jobs',
      dataIndex: 'totalJobs',
      key: 'totalJobs',
      render: (val) => val,
    },
    {
      title: 'Complete Jobs',
      dataIndex: 'completedJobs',
      key: 'completedJobs',
      render: (val) => val,
    },

    {
      title: 'Paper',
      dataIndex: 'paper',
      key: 'paper',
      render: (val) => val + 'KG',
    },
    {
      title: 'Plastic',
      dataIndex: 'plastic',
      key: 'plastic',
      render: (val) => val + 'KG',
    },

    {
      title: 'Wastage',
      dataIndex: 'wastage',
      key: 'wastage',
      render: (val) => val + 'KG',
    },
    {
      title: 'Total Weights',
      dataIndex: 'totalWeight',
      key: 'totalWeight',
      render: (val) => val + 'KG',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (val) => moment(val).format('MMMM YYYY'),
    },
  ];

  let prevMonData = {
    columns: garbageHistoryMonthly,
    data:
      data &&
      data.garbage &&
      data.garbage.monthly &&
      data.garbage.monthly.MonthWiseTransactons.length > 0
        ? data.garbage.monthly.MonthWiseTransactons
        : [],
    pageSize: 10,
    height: 300,
  };

  let curMonData = {
    columns: garbageHistory,
    data:
      data &&
      data.garbage &&
      data.garbage.daily &&
      data.garbage.daily.DailyWiseTransactons.length > 0
        ? data.garbage.daily.DailyWiseTransactons
        : [],
    pageSize: 10,
    height: 300,
  };

  if (!isMounted.current) {
    return <p className='text-center my-4'>Stats is loading</p>;
  }



  return (
    <div className='wrapper'>
      {/* sales row */}
      {data && data.sales ? (
        <div className='row align-items-center mb-4'>
          <div className='col-md-6' style={{  }}>
            <div
              className='style-card'
              style={{ height: '100%', overflow: 'auto' }}
            >
              <h3>This Month Billing</h3>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='garbage-box sale'>
                    <h3 style={{ fontSize: 12 }}>Amount Remaining</h3>
                    <h5>Rs.{data.sales.thisMonth.total}</h5>
                    <TagsOutlined title='Purchaser Detail' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='garbage-box sale'>
                    <h3 style={{ fontSize: 12 }}>Amount Recieved</h3>
                    <h5>Rs.{data.sales.thisMonth.amountRecieved}</h5>
                    <TagsOutlined title='Purchaser Detail' />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='style-card mt-4'>
                <h3 className='mt-4'>Monthly Garbage Sale </h3>
                <div className='weight-dabba'>
                  <StyleTable {...propsData} />
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6' style={{ height: '100%' }}>
            <div className='style-card' style={{ overflow: 'auto' , height:'100%' }}>
              <h3>Last {salesChart.sale.length} Month Bill Amount</h3>
              {allCharts ? <EChart chart={salesChart} /> : 'Charts is loading'}
            </div>
          </div>
        </div>
      ) : (
        'Sales is loading'
      )}

      {data && data.sales ? (
        <div className='row align-items-center mb-4 '>
          <div className='col-md-6'>
            <div className='style-card'>
              <h3>Last {userChart.sale.length} Month Registered Users</h3>
              {allCharts ? <EChart chart={userChart} /> : 'Charts is loading'}
            </div>
          </div>
          <div className='col-md-6'>
            <div className='style-card'>
              <h3>Last {colChart.sale.length} Month Registered Collectors</h3>
              {allCharts ? <EChart chart={colChart} /> : 'Charts is loading'}
            </div>
          </div>
        </div>
      ) : (
        'Sales is loading'
      )}

      {data && data.garbage ? (
        <>
          <div className='row align-items-center'>
            <div className='col-md-12'>
              <div className='style-card'>
                <h3>Monthly Collected Garbage</h3>
                <StyleTable {...prevMonData} />
              </div>
            </div>
          </div>
          <div className='row align-items-center'>
            <div className='col-md-12 mt-3'>
              <div className='style-card'>
                <h3>Daily Collected Garbage</h3>
                <StyleTable {...curMonData} />
              </div>
            </div>
          </div>
        </>
      ) : (
        'Sales is loading'
      )}
    </div>
  );
}
